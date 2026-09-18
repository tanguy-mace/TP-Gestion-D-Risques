import * as THREE from 'three';

/**
 * Gestionnaire des effets 3D météo caricaturaux (soleil cartoon pulsant, nuages low-poly, pluie, éclairs)
 * dimensionné pour une scène urbaine de 100m.
 */
export class CartoonWeatherSystem {
  constructor(scene) {
    this.scene = scene;
    this.weatherGroup = new THREE.Group();
    this.weatherGroup.name = 'CartoonWeatherEffects';
    this.scene.add(this.weatherGroup);

    this.currentCode = 0;
    this.targetHour = 12;
    this.currentHour = 12;

    this.sunGroup = null;
    this.moonGroup = null;
    this.clouds = [];
    this.rainParticles = null;
    this.snowParticles = null;
    this.lightningLight = null;

    this.initLights();
    this.initSunAndMoon();
    this.initPrecipitations();
    this.initClouds();
  }

  initLights() {
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
    this.scene.add(this.ambientLight);

    // Lumière directionnelle avec ombres nettes pour faire ressortir les reliefs des bâtiments
    this.directionalLight = new THREE.DirectionalLight(0xfffaed, 1.4);
    this.directionalLight.castShadow = true;
    this.directionalLight.shadow.mapSize.width = 2048;
    this.directionalLight.shadow.mapSize.height = 2048;
    this.directionalLight.shadow.bias = -0.0003;
    this.directionalLight.shadow.camera.near = 5;
    this.directionalLight.shadow.camera.far = 280;

    const d = 90; // Rayon adapté à la scène de 100m
    this.directionalLight.shadow.camera.left = -d;
    this.directionalLight.shadow.camera.right = d;
    this.directionalLight.shadow.camera.top = d;
    this.directionalLight.shadow.camera.bottom = -d;
    this.scene.add(this.directionalLight);

    // Éclairage ponctuel d'orage pour éclairs
    this.lightningLight = new THREE.PointLight(0xa5b4fc, 0, 300);
    this.lightningLight.position.set(0, 75, 0);
    this.scene.add(this.lightningLight);
  }

  initSunAndMoon() {
    // 1. Soleil Cartoon Géant pulsant
    this.sunGroup = new THREE.Group();

    // Cœur du soleil
    const sunGeo = new THREE.SphereGeometry(15, 24, 24);
    const sunMat = new THREE.MeshBasicMaterial({ color: 0xffb703 });
    const sunCore = new THREE.Mesh(sunGeo, sunMat);
    this.sunGroup.add(sunCore);

    // Couronne de rayons cartoon stylisés (cônes)
    this.sunRaysGroup = new THREE.Group();
    const rayGeo = new THREE.ConeGeometry(3.5, 12, 6);
    const rayMat = new THREE.MeshBasicMaterial({ color: 0xfb8500 });
    const rayCount = 12;
    for (let i = 0; i < rayCount; i++) {
      const angle = (i / rayCount) * Math.PI * 2;
      const ray = new THREE.Mesh(rayGeo, rayMat);
      ray.position.set(Math.cos(angle) * 19, Math.sin(angle) * 19, 0);
      ray.rotation.z = angle - Math.PI / 2;
      this.sunRaysGroup.add(ray);
    }
    this.sunGroup.add(this.sunRaysGroup);

    // Yeux cartoon
    const eyeGeo = new THREE.SphereGeometry(1.6, 12, 12);
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0x1f2937 });
    const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
    leftEye.position.set(-5, 3, 14);
    const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
    rightEye.position.set(5, 3, 14);
    this.sunGroup.add(leftEye);
    this.sunGroup.add(rightEye);

    // Sourire cartoon
    const smileCurve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(-4.5, -2.5, 14.5),
      new THREE.Vector3(0, -7, 15),
      new THREE.Vector3(4.5, -2.5, 14.5)
    );
    const smileGeo = new THREE.TubeGeometry(smileCurve, 12, 0.8, 6, false);
    const smileMesh = new THREE.Mesh(smileGeo, eyeMat);
    this.sunGroup.add(smileMesh);

    this.weatherGroup.add(this.sunGroup);

    // 2. Lune Cartoon
    this.moonGroup = new THREE.Group();
    const moonGeo = new THREE.SphereGeometry(13, 20, 20);
    const moonMat = new THREE.MeshLambertMaterial({ color: 0xf3f4f6, emissive: 0x64748b });
    const moonMesh = new THREE.Mesh(moonGeo, moonMat);
    this.moonGroup.add(moonMesh);

    // Cratères cartoon
    const craterGeo = new THREE.SphereGeometry(2.5, 10, 10);
    const craterMat = new THREE.MeshLambertMaterial({ color: 0xd1d5db });
    const c1 = new THREE.Mesh(craterGeo, craterMat);
    c1.position.set(4, 4, 11);
    c1.scale.set(1, 1, 0.2);
    const c2 = new THREE.Mesh(craterGeo, craterMat);
    c2.position.set(-3, -2.5, 11.5);
    c2.scale.set(1.3, 1.3, 0.2);
    this.moonGroup.add(c1);
    this.moonGroup.add(c2);

    this.weatherGroup.add(this.moonGroup);
  }

  createLowPolyCloud(scale = 1, darkStorm = false) {
    const cloud = new THREE.Group();
    const sphereCount = 5 + Math.floor(Math.random() * 3);
    const col = darkStorm ? 0x374151 : 0xffffff;
    const cloudMat = new THREE.MeshLambertMaterial({
      color: col,
      flatShading: true
    });

    for (let i = 0; i < sphereCount; i++) {
      const radius = (5 + Math.random() * 5) * scale;
      const geo = new THREE.DodecahedronGeometry(radius, 1);
      const puff = new THREE.Mesh(geo, cloudMat);
      puff.position.set(
        (Math.random() - 0.5) * 18 * scale,
        (Math.random() - 0.3) * 7 * scale,
        (Math.random() - 0.5) * 14 * scale
      );
      puff.castShadow = true;
      cloud.add(puff);
    }
    return cloud;
  }

  initClouds() {
    this.cloudsGroup = new THREE.Group();
    this.weatherGroup.add(this.cloudsGroup);

    this.cloudPool = [];
    for (let i = 0; i < 14; i++) {
      const cloud = this.createLowPolyCloud(0.65 + Math.random() * 0.45, false);
      const angle = (i / 14) * Math.PI * 2 + Math.random() * 0.4;
      const dist = 35 + Math.random() * 55;
      cloud.position.set(
        Math.cos(angle) * dist,
        42 + (i % 3) * 8 + Math.random() * 5,
        Math.sin(angle) * dist
      );
      cloud.userData = {
        speed: 0.12 + Math.random() * 0.2,
        initY: cloud.position.y,
        bobPhase: Math.random() * Math.PI * 2
      };
      this.cloudsGroup.add(cloud);
      this.cloudPool.push(cloud);
    }
  }

  initPrecipitations() {
    // Pluie de particules dynamiques sur 100m
    const rainCount = 1000;
    const rainGeo = new THREE.BufferGeometry();
    const rainPositions = new Float32Array(rainCount * 3);
    for (let i = 0; i < rainCount; i++) {
      rainPositions[i * 3] = (Math.random() - 0.5) * 180;
      rainPositions[i * 3 + 1] = Math.random() * 70;
      rainPositions[i * 3 + 2] = (Math.random() - 0.5) * 180;
    }
    rainGeo.setAttribute('position', new THREE.BufferAttribute(rainPositions, 3));

    const rainMat = new THREE.PointsMaterial({
      color: 0x60a5fa,
      size: 1.8,
      transparent: true,
      opacity: 0.8
    });
    this.rainParticles = new THREE.Points(rainGeo, rainMat);
    this.rainParticles.visible = false;
    this.weatherGroup.add(this.rainParticles);

    // Neige
    const snowCount = 600;
    const snowGeo = new THREE.BufferGeometry();
    const snowPositions = new Float32Array(snowCount * 3);
    for (let i = 0; i < snowCount; i++) {
      snowPositions[i * 3] = (Math.random() - 0.5) * 180;
      snowPositions[i * 3 + 1] = Math.random() * 70;
      snowPositions[i * 3 + 2] = (Math.random() - 0.5) * 180;
    }
    snowGeo.setAttribute('position', new THREE.BufferAttribute(snowPositions, 3));

    const snowMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 2.8,
      transparent: true,
      opacity: 0.85
    });
    this.snowParticles = new THREE.Points(snowGeo, snowMat);
    this.snowParticles.visible = false;
    this.weatherGroup.add(this.snowParticles);
  }

  triggerLightning() {
    if (this.lightningLight) {
      this.lightningLight.intensity = 18;
      setTimeout(() => {
        if (this.lightningLight) this.lightningLight.intensity = 0;
      }, 60 + Math.random() * 50);

      if (Math.random() > 0.4) {
        setTimeout(() => {
          if (this.lightningLight) {
            this.lightningLight.intensity = 14;
            setTimeout(() => {
              if (this.lightningLight) this.lightningLight.intensity = 0;
            }, 45);
          }
        }, 130);
      }
    }
  }

  setWeatherState(weatherCode, hour) {
    this.currentCode = weatherCode;
    this.targetHour = hour;

    const isRain = [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(weatherCode);
    const isSnow = [71, 73, 75, 77, 85, 86].includes(weatherCode);
    const isThunder = [95, 96, 99].includes(weatherCode);
    const isCloudy = [2, 3, 45, 48].includes(weatherCode) || isRain || isSnow || isThunder;

    if (this.rainParticles) this.rainParticles.visible = isRain || isThunder;
    if (this.snowParticles) this.snowParticles.visible = isSnow;

    for (const cloud of this.cloudPool) {
      const isDark = isThunder || (isRain && weatherCode >= 63);
      cloud.visible = isCloudy;
      cloud.traverse(child => {
        if (child.isMesh && child.material) {
          child.material.color.setHex(isDark ? 0x334155 : 0xffffff);
        }
      });
    }
  }

  update(delta, elapsedTime) {
    this.currentHour += (this.targetHour - this.currentHour) * 0.08;
    const hour = this.currentHour;
    const isDay = hour >= 6 && hour <= 20;

    const sunAngle = ((hour - 6) / 14) * Math.PI;
    const sunDist = 130; // Adapté au rayon de 100m

    const sunX = Math.cos(sunAngle) * sunDist;
    const sunY = Math.sin(sunAngle) * (sunDist * 0.7);
    const sunZ = -40;

    if (isDay) {
      this.sunGroup.visible = true;
      this.moonGroup.visible = false;
      this.sunGroup.position.set(-sunX, Math.max(-20, sunY), sunZ);
      this.directionalLight.position.set(-sunX, Math.max(25, sunY), sunZ);

      // Pulsation cartoon du soleil
      const pulse = 1 + 0.08 * Math.sin(elapsedTime * 3.5);
      this.sunGroup.scale.set(pulse, pulse, pulse);
      if (this.sunRaysGroup) {
        this.sunRaysGroup.rotation.z += delta * 0.7;
      }
      this.directionalLight.intensity = Math.max(0.4, Math.sin(sunAngle) * 1.6);
      this.ambientLight.intensity = 0.55 + Math.sin(sunAngle) * 0.35;
    } else {
      this.sunGroup.visible = false;
      this.moonGroup.visible = true;

      const nightProg = hour > 20 ? (hour - 20) / 10 : (hour + 4) / 10;
      const moonAngle = nightProg * Math.PI;
      const moonX = Math.cos(moonAngle) * sunDist;
      const moonY = Math.sin(moonAngle) * (sunDist * 0.6);

      this.moonGroup.position.set(-moonX, Math.max(20, moonY), sunZ);
      this.directionalLight.position.set(-moonX, Math.max(20, moonY), sunZ);
      this.directionalLight.intensity = 0.4;
      this.ambientLight.intensity = 0.3;
    }

    // Déplacement fluide des nuages
    for (const cloud of this.cloudPool) {
      if (cloud.visible) {
        cloud.position.x += cloud.userData.speed * delta * 15;
        if (cloud.position.x > 110) cloud.position.x = -110;
        cloud.position.y = cloud.userData.initY + Math.sin(elapsedTime * 1.5 + cloud.userData.bobPhase) * 3;
      }
    }

    // Chute des gouttes de pluie
    if (this.rainParticles && this.rainParticles.visible) {
      const pos = this.rainParticles.geometry.attributes.position.array;
      for (let i = 1; i < pos.length; i += 3) {
        pos[i] -= delta * 180;
        if (pos[i] < 0) pos[i] = 70;
      }
      this.rainParticles.geometry.attributes.position.needsUpdate = true;
    }

    // Chute des flocons de neige
    if (this.snowParticles && this.snowParticles.visible) {
      const pos = this.snowParticles.geometry.attributes.position.array;
      for (let i = 0; i < pos.length; i += 3) {
        pos[i + 1] -= delta * 35;
        pos[i] += Math.sin(elapsedTime + i) * 0.15;
        if (pos[i + 1] < 0) pos[i + 1] = 70;
      }
      this.snowParticles.geometry.attributes.position.needsUpdate = true;
    }

    // Orage
    if ([95, 96, 99].includes(this.currentCode)) {
      if (Math.random() < delta * 0.8) {
        this.triggerLightning();
      }
    }
  }

  dispose() {
    this.scene.remove(this.weatherGroup);
    this.scene.remove(this.ambientLight);
    this.scene.remove(this.directionalLight);
    this.scene.remove(this.lightningLight);
  }
}
