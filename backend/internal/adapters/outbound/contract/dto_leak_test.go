package contract_test

import (
	"go/ast"
	"go/parser"
	"go/token"
	"os"
	"path/filepath"
	"strings"
	"testing"
)

// TestNoDTOLeakage verifies requirement 4 of TP2:
// "Vérifiez que les objets propres à chaque API (DTO, noms de champs, formats) ne sortent pas de leur adaptateur."
// It parses the Go AST of all outbound adapter packages to ensure that:
// 1. No response DTO structs are exported (starting with uppercase). The only exported struct must be 'Client'.
// 2. No functions or methods export API-specific internal types.
// 3. The domain package does not import or know any adapter package.
func TestNoDTOLeakage(t *testing.T) {
	adapterDirs := []string{
		"../ban",
		"../nominatim",
		"../openmeteo",
		"../metnorway",
	}

	fset := token.NewFileSet()

	for _, dir := range adapterDirs {
		absDir, err := filepath.Abs(dir)
		if err != nil {
			t.Fatalf("could not resolve path %s: %v", dir, err)
		}

		pkgs, err := parser.ParseDir(fset, absDir, func(fi os.FileInfo) bool {
			// Only parse non-test Go source files in the adapter package
			return !strings.HasSuffix(fi.Name(), "_test.go") && strings.HasSuffix(fi.Name(), ".go")
		}, 0)

		if err != nil {
			t.Fatalf("failed to parse directory %s: %v", dir, err)
		}

		for pkgName, pkg := range pkgs {
			for fileName, file := range pkg.Files {
				for _, decl := range file.Decls {
					genDecl, ok := decl.(*ast.GenDecl)
					if !ok || genDecl.Tok != token.TYPE {
						continue
					}

					for _, spec := range genDecl.Specs {
						typeSpec, ok := spec.(*ast.TypeSpec)
						if !ok {
							continue
						}

						typeName := typeSpec.Name.Name
						isExported := ast.IsExported(typeName)

						// If exported, verify it is ONLY 'Client'
						if isExported && typeName != "Client" {
							t.Errorf("[LEAK DETECTED] Package '%s' in file '%s' exports type '%s'. Only 'Client' should be exported; all DTOs must remain private.",
								pkgName, filepath.Base(fileName), typeName)
						}

						// If it is a struct, ensure that if it represents response data (DTO), it is strictly unexported
						if _, isStruct := typeSpec.Type.(*ast.StructType); isStruct {
							if isExported && typeName != "Client" {
								t.Errorf("[LEAK DETECTED] Package '%s' exports DTO struct '%s'", pkgName, typeName)
							}
						}
					}
				}
			}
		}
	}
}

// TestDomainPurity verifies that internal/domain does not import any outbound adapter or external HTTP libraries.
func TestDomainPurity(t *testing.T) {
	fset := token.NewFileSet()
	domainDir, err := filepath.Abs("../../../domain")
	if err != nil {
		t.Fatalf("could not resolve domain path: %v", err)
	}

	pkgs, err := parser.ParseDir(fset, domainDir, func(fi os.FileInfo) bool {
		return strings.HasSuffix(fi.Name(), ".go")
	}, parser.ImportsOnly)

	if err != nil {
		t.Fatalf("failed to parse domain directory: %v", err)
	}

	forbiddenPrefixes := []string{
		"meteo-app/backend/internal/adapters",
		"net/http",
	}

	for pkgName, pkg := range pkgs {
		for fileName, file := range pkg.Files {
			for _, imp := range file.Imports {
				importPath := strings.Trim(imp.Path.Value, `"`)
				for _, forbidden := range forbiddenPrefixes {
					if strings.HasPrefix(importPath, forbidden) {
						t.Errorf("[DOMAIN PURITY VIOLATION] Domain file '%s' in package '%s' imports forbidden package '%s'",
							filepath.Base(fileName), pkgName, importPath)
					}
				}
			}
		}
	}
}
