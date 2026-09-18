var Zd=Object.defineProperty;var Ah=n=>{throw TypeError(n)};var Kd=(n,t,e)=>t in n?Zd(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var on=(n,t,e)=>Kd(n,typeof t!="symbol"?t+"":t,e),Oa=(n,t,e)=>t.has(n)||Ah("Cannot "+e);var O=(n,t,e)=>(Oa(n,t,"read from private field"),e?e.call(n):t.get(n)),Gt=(n,t,e)=>t.has(n)?Ah("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(n):t.set(n,e),zt=(n,t,e,i)=>(Oa(n,t,"write to private field"),i?i.call(n,e):t.set(n,e),e),Jt=(n,t,e)=>(Oa(n,t,"access private method"),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const af=!1;var lf=Array.isArray,$d=Array.prototype.indexOf,ca=Array.prototype.includes,wa=Array.from,cf=Object.defineProperty,ks=Object.getOwnPropertyDescriptor,Jd=Object.getOwnPropertyDescriptors,Qd=Object.prototype,tp=Array.prototype,hf=Object.getPrototypeOf,Rh=Object.isExtensible;const ep=()=>{};function np(n){for(var t=0;t<n.length;t++)n[t]()}function uf(){var n,t,e=new Promise((i,s)=>{n=i,t=s});return{promise:e,resolve:n,reject:t}}const De=2,Qs=4,Aa=8,ff=1<<24,Nn=16,Tn=32,vi=64,Pl=128,Fc=256,En=512,Re=1024,Te=2048,Bn=4096,je=8192,tn=16384,fr=32768,ha=1<<25,tr=65536,ua=1<<17,ip=1<<18,dr=1<<19,sp=1<<20,jn=1<<25,hs=65536,fa=1<<21,Hs=1<<22,Fi=1<<23,kr=Symbol("$state"),df=Symbol("component"),rp=Symbol("legacy props"),Jo=Symbol("attributes"),Ll=Symbol("class"),op=Symbol("style"),Dr=Symbol("text"),Qo=Symbol("form reset"),lo=new class extends Error{constructor(){super(...arguments);on(this,"name","StaleReactionError");on(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var sf;const ap=!!((sf=globalThis.document)!=null&&sf.contentType)&&globalThis.document.contentType.includes("xml"),lp=1,cp=2,pf=4,hp=8,up=16,fp=1,dp=4,pp=8,mp=16,_p=2,Ae=Symbol("uninitialized"),gp="http://www.w3.org/1999/xhtml";function vp(){console.warn("https://svelte.dev/e/derived_inert")}function xp(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function mf(n){return n===this.v}function Mp(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function _f(n){return!Mp(n,this.v)}function gf(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function yp(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Sp(n,t,e){throw new Error("https://svelte.dev/e/each_key_duplicate")}function Ep(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function bp(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Tp(n){throw new Error("https://svelte.dev/e/effect_orphan")}function wp(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Ap(n){throw new Error("https://svelte.dev/e/props_invalid_value")}function Rp(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Cp(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Pp(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Lp(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let Dp=!1,Oe=null;function er(n){Oe=n}function pr(n,t=!1,e){Oe={p:Oe,i:!1,c:null,e:null,s:n,x:null,r:$t,l:null}}function mr(n){var t=Oe,e=t.e;if(e!==null){t.e=null;for(var i of e)Bf(i)}return t.i=!0,Oe=t.p,Oc(n)}function Oc(n={}){return cf(n,df,{value:!0}),n}function vf(){return!0}let Ji=[];function xf(){var n=Ji;Ji=[],np(n)}function fi(n){if(Ji.length===0&&!Gr){var t=Ji;queueMicrotask(()=>{t===Ji&&xf()})}Ji.push(n)}function Ip(){for(;Ji.length>0;)xf()}const Up=-7169;function Se(n,t){n.f=n.f&Up|t}function Bc(n){n.f&En||n.deps===null?Se(n,Re):Se(n,Bn)}function Mf(n){if(n!==null)for(const t of n)!(t.f&De)||!(t.f&hs)||(t.f^=hs,Mf(t.deps))}function yf(n,t,e){n.f&Te?t.add(n):n.f&Bn&&e.add(n),Mf(n.deps),Se(n,Re)}let vo=!1;function Np(n){var t=vo;try{return vo=!1,[n(),vo]}finally{vo=t}}let Ch=!1;function Fp(){Ch||(Ch=!0,document.addEventListener("reset",n=>{Promise.resolve().then(()=>{var t;if(!n.defaultPrevented)for(const e of n.target.elements)(t=e[Qo])==null||t.call(e)})},{capture:!0}))}function _r(n){var t=Zt,e=$t;wn(null),Jn(null);try{return n()}finally{wn(t),Jn(e)}}function Op(n,t,e,i=e){n.addEventListener(t,()=>_r(e));const s=n[Qo];s?n[Qo]=()=>{s(),i(!0)}:n[Qo]=()=>i(!0),Fp()}function Bp(n,t,e,i){const s=Kr;var r=n.filter(d=>!d.settled),o=t.map(s);if(e.length===0&&r.length===0){i(o);return}var a=$t,l=zp(),c=r.length===1?r[0].promise:r.length>1?Promise.all(r.map(d=>d.promise)):null;function h(d){if(!(a.f&tn)){l();try{i([...o,...d])}catch(_){Yn(_,a)}da()}}var f=Sf();if(e.length===0){c.then(()=>h([])).finally(f);return}function u(){Promise.all(e.map(d=>kp(d))).then(h).catch(d=>Yn(d,a)).finally(f)}c?c.then(()=>{l(),u(),da()}):u()}function zp(){var n=$t,t=Zt,e=Oe,i=Lt;return function(r=!0){Jn(n),wn(t),er(e),r&&!(n.f&tn)&&(i==null||i.activate(),i==null||i.apply())}}function da(n=!0){Jn(null),wn(null),er(null),n&&(Lt==null||Lt.deactivate())}function Sf(){var n=$t,t=n.b,e=Lt,i=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,e),e.increment(i,n),()=>{t==null||t.update_pending_count(-1,e),e.decrement(i,n)}}function Kr(n){var t=De|Te;return $t!==null&&($t.f|=dr),{ctx:Oe,deps:null,effects:null,equals:mf,f:t,fn:n,reactions:null,rv:0,v:Ae,wv:0,parent:$t,ac:null}}const Ir=Symbol("obsolete");function kp(n,t,e){let i=$t;i===null&&yp();var s=void 0,r=fs(Ae),o=!Zt,a=new Set;return sm(()=>{var d,_;var l=$t,c=uf();s=c.promise;try{Promise.resolve(n()).then(c.resolve,g=>{g!==lo&&c.reject(g)}).finally(da)}catch(g){c.reject(g),da()}var h=Lt;if(o){if(l.f&fr)var f=Sf();if((d=i.b)!=null&&d.is_rendered())(_=h.async_deriveds.get(l))==null||_.reject(Ir);else for(const g of a.values())g.reject(Ir);a.add(c),h.async_deriveds.set(l,c)}const u=(g,m=void 0)=>{f==null||f(),a.delete(c),m!==Ir&&(h.activate(),m?(r.f|=Fi,ir(r,m)):(r.f&Fi&&(r.f^=Fi),ir(r,g)),h.deactivate())};c.promise.then(u,g=>u(null,g||"unknown"))}),Of(()=>{for(const l of a)l.reject(Ir)}),new Promise(l=>{function c(h){function f(){h===s?l(r):c(s)}h.then(f,f)}c(s)})}function nr(n){const t=Kr(n);return Vf(t),t}function Ef(n){const t=Kr(n);return t.equals=_f,t}function Hp(n){var t=n.effects;if(t!==null){n.effects=null;for(var e=0;e<t.length;e+=1)en(t[e])}}function zc(n){var t,e=$t,i=n.parent;if(!xi&&i!==null&&n.v!==Ae&&i.f&(tn|je))return vp(),n.v;Jn(i);try{n.f&=~hs,Hp(n),t=Yf(n)}finally{Jn(e)}return t}function bf(n){var t=zc(n);if(!n.equals(t)&&(n.wv=Xf(),(!(Lt!=null&&Lt.is_fork)||n.deps===null)&&(Lt!==null?(Lt.capture(n,t,!0),Hr==null||Hr.capture(n,t,!0)):n.v=t,n.deps===null))){Se(n,Re);return}xi||(Ne!==null?(Gc()||Lt!=null&&Lt.is_fork)&&Ne.set(n,t):Bc(n))}function Gp(n){var t;if(n.effects!==null)for(const e of n.effects)(e.teardown||e.ac)&&((t=e.teardown)==null||t.call(e),e.ac!==null&&_r(()=>{e.ac.abort(lo),e.ac=null}),e.fn!==null&&(e.teardown=ep),$r(e,0),Xc(e))}function Tf(n){if(n.effects!==null)for(const t of n.effects)t.teardown&&t.fn!==null&&rr(t)}let Ba=null,xs=null,Lt=null,Hr=null,Ne=null,Dl=null,Gr=!1,za=!1,Ns=null,ta=null;var Ph=0;let Vp=1;var qs,Ui,is,Ys,js,Zs,ci,Ks,Je,io,hi,In,Vn,$s,ss,ae,Il,Ur,Ul,wf,Af,Us,Wp,Nr;const Ea=class Ea{constructor(){Gt(this,ae);on(this,"id",Vp++);Gt(this,qs,!1);on(this,"linked",!0);Gt(this,Ui,null);Gt(this,is,null);on(this,"async_deriveds",new Map);on(this,"current",new Map);on(this,"previous",new Map);Gt(this,Ys,new Set);Gt(this,js,new Set);Gt(this,Zs,0);Gt(this,ci,new Map);Gt(this,Ks,null);Gt(this,Je,[]);Gt(this,io,[]);Gt(this,hi,new Set);Gt(this,In,new Set);Gt(this,Vn,new Map);Gt(this,$s,new Set);on(this,"is_fork",!1);Gt(this,ss,!1);xs===null?Ba=xs=this:(zt(xs,is,this),zt(this,Ui,xs)),xs=this}skip_effect(t){O(this,Vn).has(t)||O(this,Vn).set(t,{d:[],m:[]}),O(this,$s).delete(t)}unskip_effect(t,e=i=>this.schedule(i)){var i=O(this,Vn).get(t);if(i){O(this,Vn).delete(t);for(var s of i.d)Se(s,Te),e(s);for(s of i.m)Se(s,Bn),e(s)}O(this,$s).add(t)}capture(t,e,i=!1){t.v!==Ae&&!this.previous.has(t)&&this.previous.set(t,t.v),t.f&Fi||(this.current.set(t,[e,i]),Ne==null||Ne.set(t,e)),this.is_fork||(t.v=e)}activate(){Lt=this}deactivate(){Lt=null,Ne=null}flush(){try{za=!0,Lt=this,Jt(this,ae,Ur).call(this)}finally{Ph=0,Dl=null,Ns=null,ta=null,za=!1,Lt=null,Ne=null,Kn.clear()}}discard(){var t;for(const e of O(this,js))e(this);O(this,js).clear();for(const e of this.async_deriveds.values())e.reject(Ir);Jt(this,ae,Nr).call(this),(t=O(this,Ks))==null||t.resolve()}register_created_effect(t){O(this,io).push(t)}increment(t,e){if(zt(this,Zs,O(this,Zs)+1),t){let i=O(this,ci).get(e)??0;O(this,ci).set(e,i+1)}}decrement(t,e){if(zt(this,Zs,O(this,Zs)-1),t){let i=O(this,ci).get(e)??0;i===1?O(this,ci).delete(e):O(this,ci).set(e,i-1)}O(this,ss)||(zt(this,ss,!0),fi(()=>{zt(this,ss,!1),this.linked&&this.flush()}))}transfer_effects(t,e){for(const i of t)O(this,hi).add(i);for(const i of e)O(this,In).add(i);t.clear(),e.clear()}oncommit(t){O(this,Ys).add(t)}ondiscard(t){O(this,js).add(t)}settled(){return(O(this,Ks)??zt(this,Ks,uf())).promise}static ensure(){if(Lt===null){const t=Lt=new Ea;!za&&!Gr&&fi(()=>{O(t,qs)||t.flush()})}return Lt}apply(){{Ne=null;return}}schedule(t){var s;if(Dl=t,(s=t.b)!=null&&s.is_pending&&t.f&(Qs|Aa|ff)&&!(t.f&fr)){t.b.defer_effect(t);return}for(var e=t;e.parent!==null;){e=e.parent;var i=e.f;if(Ns!==null&&e===$t&&(Zt===null||!(Zt.f&De)))return;if(i&(vi|Tn)){if(!(i&Re))return;e.f^=Re}}O(this,Je).push(e)}};qs=new WeakMap,Ui=new WeakMap,is=new WeakMap,Ys=new WeakMap,js=new WeakMap,Zs=new WeakMap,ci=new WeakMap,Ks=new WeakMap,Je=new WeakMap,io=new WeakMap,hi=new WeakMap,In=new WeakMap,Vn=new WeakMap,$s=new WeakMap,ss=new WeakMap,ae=new WeakSet,Il=function(){if(this.is_fork)return!0;for(const i of O(this,ci).keys()){for(var t=i,e=!1;t.parent!==null;){if(O(this,Vn).has(t)){e=!0;break}t=t.parent}if(!e)return!0}return!1},Ur=function(){var l,c,h,f;zt(this,qs,!0),Ph++>1e3&&(Jt(this,ae,Nr).call(this),qp());for(const u of O(this,hi))O(this,In).delete(u),Se(u,Te),this.schedule(u);for(const u of O(this,In))Se(u,Bn),this.schedule(u);const t=O(this,Je);zt(this,Je,[]),this.apply();var e=Ns=[],i=[],s=ta=[];for(const u of t)try{Jt(this,ae,Ul).call(this,u,e,i)}catch(d){throw Pf(u),Jt(this,ae,Il).call(this)||this.discard(),d}if(Lt=null,s.length>0){var r=Ea.ensure();for(const u of s)r.schedule(u)}if(Ns=null,ta=null,Jt(this,ae,Il).call(this)){Jt(this,ae,Us).call(this,i),Jt(this,ae,Us).call(this,e);for(const[u,d]of O(this,Vn))Cf(u,d);s.length>0&&Jt(l=Lt,ae,Ur).call(l);return}const o=Jt(this,ae,wf).call(this);if(o){Jt(this,ae,Us).call(this,i),Jt(this,ae,Us).call(this,e),Jt(c=o,ae,Af).call(c,this);return}O(this,hi).clear(),O(this,In).clear();for(const u of O(this,Ys))u(this);O(this,Ys).clear(),Hr=this,Lh(i),Lh(e),Hr=null,(h=O(this,Ks))==null||h.resolve();var a=Lt;if(O(this,Zs)===0&&(O(this,Je).length===0||a!==null)&&Jt(this,ae,Nr).call(this),O(this,Je).length>0)if(a!==null){const u=a;O(u,Je).push(...O(this,Je).filter(d=>!O(u,Je).includes(d)))}else a=this;a!==null&&(Kn.clear(),Jt(f=a,ae,Ur).call(f))},Ul=function(t,e,i){t.f^=Re;for(var s=t.first;s!==null;){var r=s.f,o=(r&(Tn|vi))!==0,a=o&&(r&Re)!==0,l=a||(r&je)!==0||O(this,Vn).has(s);if(!l&&s.fn!==null){o?s.f^=Re:r&Qs?e.push(s):ho(s)&&(r&Nn&&O(this,In).add(s),rr(s));var c=s.first;if(c!==null){s=c;continue}}for(;s!==null;){var h=s.next;if(h!==null){s=h;break}s=s.parent}}},wf=function(){for(var t=O(this,Ui);t!==null;){if(!t.is_fork){for(const[e,[,i]]of this.current)if(t.current.has(e)&&!i)return t}t=O(t,Ui)}return null},Af=function(t){var i;for(const[s,r]of t.current)!this.previous.has(s)&&t.previous.has(s)&&this.previous.set(s,t.previous.get(s)),this.current.set(s,r);for(const[s,r]of t.async_deriveds){const o=this.async_deriveds.get(s);o&&r.promise.then(o.resolve).catch(o.reject)}t.async_deriveds.clear(),this.transfer_effects(O(t,hi),O(t,In));const e=s=>{var r=s.reactions;if(r!==null&&!(s.f&De&&!(s.f&(Te|Bn))))for(const l of r){var o=l.f;if(o&De)e(l);else{var a=l;o&(Hs|Nn)&&!this.async_deriveds.has(a)&&(O(this,In).delete(a),Se(a,Te),this.schedule(a))}}};for(const s of this.current.keys())e(s);this.oncommit(()=>t.discard()),Jt(i=t,ae,Nr).call(i),Lt=this,Jt(this,ae,Ur).call(this)},Us=function(t){for(var e=0;e<t.length;e+=1)yf(t[e],O(this,hi),O(this,In))},Wp=function(){var f;for(let u=Ba;u!==null;u=O(u,is)){var t=u.id<this.id,e=[];for(const[d,[_,g]]of this.current){if(u.current.has(d)){var i=u.current.get(d)[0];if(t&&_!==i)u.current.set(d,[_,g]);else continue}e.push(d)}if(t)for(const[d,_]of this.async_deriveds){const g=u.async_deriveds.get(d);g&&_.promise.then(g.resolve).catch(g.reject)}var s=[...u.current.keys()].filter(d=>!u.current.get(d)[1]);if(!(!O(u,qs)||s.length===0)){var r=s.filter(d=>!this.current.has(d));if(r.length===0)t&&u.discard();else if(e.length>0){if(t)for(const d of O(this,$s))u.unskip_effect(d,_=>{var g;_.f&(Nn|Hs)?u.schedule(_):Jt(g=u,ae,Us).call(g,[_])});u.activate();var o=new Set,a=new Map;for(var l of e)Rf(l,r,o,a);a=new Map;var c=[...u.current].filter(([d,_])=>{const g=this.current.get(d);return g?g[0]!==_[0]||g[1]!==_[1]:!0}).map(([d])=>d);if(c.length>0)for(const d of O(this,io))!(d.f&(tn|je|ua))&&kc(d,c,a)&&(d.f&(Hs|Nn)?(Se(d,Te),u.schedule(d)):O(u,hi).add(d));if(O(u,Je).length>0&&!O(u,ss)){u.apply();for(var h of O(u,Je))Jt(f=u,ae,Ul).call(f,h,[],[]);zt(u,Je,[])}u.deactivate()}}}},Nr=function(){if(this.linked){var t=O(this,Ui),e=O(this,is);t===null?Ba=e:zt(t,is,e),e===null?xs=t:zt(e,Ui,t),this.linked=!1}};let us=Ea;function Xp(n){var t=Gr;Gr=!0;try{for(var e;;){if(Ip(),Lt===null)return e;Lt.flush()}}finally{Gr=t}}function qp(){try{wp()}catch(n){Yn(n,Dl)}}let Dn=null;function Lh(n){var t=n.length;if(t!==0){for(var e=0;e<t;){var i=n[e++];if(!(i.f&(tn|je))&&ho(i)&&(Dn=new Set,rr(i),i.deps===null&&i.first===null&&i.nodes===null&&i.teardown===null&&i.ac===null&&kf(i),(Dn==null?void 0:Dn.size)>0)){Kn.clear();for(const s of Dn){if(s.f&(tn|je))continue;const r=[s];let o=s.parent;for(;o!==null;)Dn.has(o)&&(Dn.delete(o),r.push(o)),o=o.parent;for(let a=r.length-1;a>=0;a--){const l=r[a];l.f&(tn|je)||rr(l)}}Dn.clear()}}Dn=null}}function Rf(n,t,e,i){if(!e.has(n)&&(e.add(n),n.reactions!==null))for(const s of n.reactions){const r=s.f;r&De?Rf(s,t,e,i):r&(Hs|Nn)&&!(r&Te)&&kc(s,t,i)&&(Se(s,Te),Hc(s))}}function kc(n,t,e){const i=e.get(n);if(i!==void 0)return i;if(n.deps!==null)for(const s of n.deps){if(ca.call(t,s))return!0;if(s.f&De&&kc(s,t,e))return e.set(s,!0),!0}return e.set(n,!1),!1}function Hc(n){Lt.schedule(n)}function Cf(n,t){if(!(n.f&Tn&&n.f&Re)){n.f&Te?t.d.push(n):n.f&Bn&&t.m.push(n),Se(n,Re);for(var e=n.first;e!==null;)Cf(e,t),e=e.next}}function Pf(n){Se(n,Re);for(var t=n.first;t!==null;)Pf(t),t=t.next}let pa=new Set;const Kn=new Map;let Lf=!1;function fs(n,t){var e={f:0,v:n,reactions:null,equals:mf,rv:0,wv:0};return e}function Ue(n,t){const e=fs(n);return Vf(e),e}function Yp(n,t=!1,e=!0){const i=fs(n);return t||(i.equals=_f),i}function xe(n,t,e=!1){Zt!==null&&(!Fn||Zt.f&ua)&&vf()&&Zt.f&(De|Nn|Hs|ua)&&($n===null||!$n.has(n))&&Pp();let i=e?di(t):t;return ir(n,i,ta)}function ir(n,t,e=null){if(!n.equals(t)){xi?Kn.set(n,t):Kn.has(n)||Kn.set(n,n.v);var i=us.ensure();if(i.capture(n,t),n.f&De){const s=n;n.f&Te&&zc(s),Ne===null&&Bc(s)}n.wv=Xf(),Df(n,Te,e),$t!==null&&$t.f&Re&&!($t.f&(Tn|vi))&&(_n===null?am([n]):_n.push(n)),!i.is_fork&&pa.size>0&&!Lf&&jp()}return t}function jp(){Lf=!1;for(const n of pa){n.f&Re&&Se(n,Bn);let t;try{t=ho(n)}catch{t=!0}t&&rr(n)}pa.clear()}function Vr(n){xe(n,n.v+1)}function Df(n,t,e){var i=n.reactions;if(i!==null)for(var s=i.length,r=0;r<s;r++){var o=i[r],a=o.f,l=(a&Te)===0;if(l&&Se(o,t),a&ua)pa.add(o);else if(a&De){var c=o;Ne==null||Ne.delete(c),a&hs||(a&En&&($t===null||!($t.f&fa))&&(o.f|=hs),Df(c,Bn,e))}else if(l){var h=o;a&Nn&&Dn!==null&&Dn.add(h),e!==null?e.push(h):Hc(h)}}}function di(n){if(typeof n!="object"||n===null||kr in n||df in n)return n;const t=hf(n);if(t!==Qd&&t!==tp)return n;var e=new Map,i=lf(n),s=Ue(0),r=cs,o=a=>{if(cs===r)return a();var l=Zt,c=cs;wn(null),Uh(r);var h=a();return wn(l),Uh(c),h};return i&&e.set("length",Ue(n.length)),new Proxy(n,{defineProperty(a,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&Rp();var h=e.get(l);return h===void 0?o(()=>{var f=Ue(c.value);return e.set(l,f),f}):xe(h,c.value,!0),!0},deleteProperty(a,l){var c=e.get(l);if(c===void 0){if(l in a){const h=o(()=>Ue(Ae));e.set(l,h),Vr(s)}}else xe(c,Ae),Vr(s);return!0},get(a,l,c){var d;if(l===kr)return n;var h=e.get(l),f=l in a;if(h===void 0&&(!f||(d=ks(a,l))!=null&&d.writable)&&(h=o(()=>{var _=di(f?a[l]:Ae),g=Ue(_);return g}),e.set(l,h)),h!==void 0){var u=Et(h);return u===Ae?void 0:u}return Reflect.get(a,l,c)},getOwnPropertyDescriptor(a,l){var c=Reflect.getOwnPropertyDescriptor(a,l);if(c&&"value"in c){var h=e.get(l);h&&(c.value=Et(h))}else if(c===void 0){var f=e.get(l),u=f==null?void 0:f.v;if(f!==void 0&&u!==Ae)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return c},has(a,l){var u;if(l===kr)return!0;var c=e.get(l),h=c!==void 0&&c.v!==Ae||Reflect.has(a,l);if(c!==void 0||$t!==null&&(!h||(u=ks(a,l))!=null&&u.writable)){c===void 0&&(c=o(()=>{var d=h?di(a[l]):Ae,_=Ue(d);return _}),e.set(l,c));var f=Et(c);if(f===Ae)return!1}return h},set(a,l,c,h){var x;var f=e.get(l),u=l in a;if(i&&l==="length")for(var d=c;d<f.v;d+=1){var _=e.get(d+"");_!==void 0?xe(_,Ae):d in a&&(_=o(()=>Ue(Ae)),e.set(d+"",_))}if(f===void 0)(!u||(x=ks(a,l))!=null&&x.writable)&&(f=o(()=>Ue(void 0)),xe(f,di(c)),e.set(l,f));else{u=f.v!==Ae;var g=o(()=>di(c));xe(f,g)}var m=Reflect.getOwnPropertyDescriptor(a,l);if(m!=null&&m.set&&m.set.call(h,c),!u){if(i&&typeof l=="string"){var p=e.get("length"),E=Number(l);Number.isInteger(E)&&E>=p.v&&xe(p,E+1)}Vr(s)}return!0},ownKeys(a){Et(s);var l=Reflect.ownKeys(a).filter(f=>{var u=e.get(f);return u===void 0||u.v!==Ae});for(var[c,h]of e)h.v!==Ae&&!(c in a)&&l.push(c);return l},setPrototypeOf(){Cp()}})}var Dh,If,Uf,Nf;function Zp(){if(Dh===void 0){Dh=window,If=/Firefox/.test(navigator.userAgent);var n=Element.prototype,t=Node.prototype,e=Text.prototype;Uf=ks(t,"firstChild").get,Nf=ks(t,"nextSibling").get,Rh(n)&&(n[Ll]=void 0,n[Jo]=null,n[op]=void 0,n.__e=void 0),Rh(e)&&(e[Dr]=void 0)}}function Oi(n=""){return document.createTextNode(n)}function Ra(n){return Uf.call(n)}function co(n){return Nf.call(n)}function ue(n,t){return Ra(n)}function Kp(n,t=!1){{var e=Ra(n);return e instanceof Comment&&e.data===""?co(e):e}}function He(n,t=!1){return Ra(n)}function oe(n,t=1,e=!1){let i=n;for(;t--;)i=co(i);return i}function $p(n){n.textContent=""}function Ff(){return!1}function Jp(n,t,e){return e?document.createElement(n,{is:e}):document.createElement(n)}function Qp(n){var t=$t;if(t===null)return Zt.f|=Fi,n;if(!(t.f&fr)&&!(t.f&Qs))throw n;Yn(n,t)}function Yn(n,t){if(!(t!==null&&t.f&tn)){for(;t!==null;){if(t.f&Pl&&!(t.f&(tn|ha))){if(!(t.f&fr))throw n;try{t.b.error(n);return}catch(e){n=e}}t=t.parent}throw n}}function tm(n){$t===null&&(Zt===null&&Tp(),bp()),xi&&Ep()}function em(n,t){var e=t.last;e===null?t.last=t.first=n:(e.next=n,n.prev=e,t.last=n)}function Si(n,t){var e=$t;e!==null&&e.f&je&&(n|=je);var i={ctx:Oe,deps:null,nodes:null,f:n|Te|En,first:null,fn:t,last:null,next:null,parent:e,b:e&&e.b,prev:null,teardown:null,wv:0,ac:null};Lt==null||Lt.register_created_effect(i);var s=i;if(n&Qs)Ns!==null?Ns.push(i):us.ensure().schedule(i);else if(t!==null){try{rr(i)}catch(o){throw en(i),o}s.deps===null&&s.teardown===null&&s.nodes===null&&s.first===s.last&&!(s.f&dr)&&(s=s.first,n&Nn&&n&tr&&s!==null&&(s.f|=tr))}if(s!==null&&(s.parent=e,e!==null&&em(s,e),Zt!==null&&Zt.f&De&&!(n&vi))){var r=Zt;(r.effects??(r.effects=[])).push(s)}return i}function Gc(){return Zt!==null&&!Fn}function Of(n){const t=Si(Aa,null);return Se(t,Re),t.teardown=n,t}function Nl(n){tm();var t=$t.f,e=!Zt&&(t&Tn)!==0&&Oe!==null&&!Oe.i;if(e){var i=Oe;(i.e??(i.e=[])).push(n)}else return Bf(n)}function Bf(n){return Si(Qs|sp,n)}function nm(n){us.ensure();const t=Si(vi|dr,n);return(e={})=>new Promise(i=>{e.outro?ls(t,()=>{en(t),i(void 0)}):(en(t),i(void 0))})}function im(n){return Si(Qs,n)}function sm(n){return Si(Hs|dr,n)}function Vc(n,t=0){return Si(Aa|t,n)}function sr(n,t=[],e=[],i=[]){Bp(i,t,e,s=>{Si(Aa,()=>{n(...s.map(Et))})})}function Wc(n,t=0){var e=Si(Nn|t,n);return e}function xn(n){return Si(Tn|dr,n)}function zf(n){var t=n.teardown;if(t!==null){const e=xi,i=Zt;Ih(!0),wn(null);try{t.call(null)}catch(s){Yn(s,n.parent)}finally{Ih(e),wn(i)}}}function Xc(n,t=!1){var e=n.first;for(n.first=n.last=null;e!==null;){const s=e.ac;s!==null&&_r(()=>{s.abort(lo)});var i=e.next;e.f&vi?e.parent=null:en(e,t),e=i}}function rm(n){for(var t=n.first;t!==null;){var e=t.next;t.f&Tn||en(t),t=e}}function en(n,t=!0){var e=!1;(t||n.f&ip)&&n.nodes!==null&&n.nodes.end!==null&&(om(n.nodes.start,n.nodes.end),e=!0),n.f|=ha,Xc(n,t&&!e),$r(n,0);var i=n.nodes&&n.nodes.t;if(i!==null)for(const r of i)r.stop();zf(n),n.f^=ha,n.f|=tn;var s=n.parent;s!==null&&s.first!==null&&kf(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes=n.ac=n.b=null}function om(n,t){for(;n!==null;){var e=n===t?null:co(n);n.remove(),n=e}}function kf(n){var t=n.parent,e=n.prev,i=n.next;e!==null&&(e.next=i),i!==null&&(i.prev=e),t!==null&&(t.first===n&&(t.first=i),t.last===n&&(t.last=e))}function ls(n,t,e=!0){var i=[];n.f|=Fc,Hf(n,i,!0);var s=()=>{e&&en(n),t&&t()},r=i.length;if(r>0){var o=()=>--r||s();for(var a of i)a.out(o)}else s()}function Hf(n,t,e){if(!(n.f&je)){n.f^=je;var i=n.nodes&&n.nodes.t;if(i!==null)for(const a of i)(a.is_global||e)&&t.push(a);for(var s=n.first;s!==null;){var r=s.next;if(!(s.f&vi)){var o=(s.f&tr)!==0||(s.f&Tn)!==0&&(n.f&Nn)!==0;Hf(s,t,o?e:!1)}s=r}}}function ma(n){n.f&=~Fc,Gf(n,!0)}function Gf(n,t){if(!(n.f&Fc)&&n.f&je){n.f^=je,n.f&Re||(Se(n,Te),us.ensure().schedule(n));for(var e=n.first;e!==null;){var i=e.next,s=(e.f&tr)!==0||(e.f&Tn)!==0;Gf(e,s?t:!1),e=i}var r=n.nodes&&n.nodes.t;if(r!==null)for(const o of r)(o.is_global||t)&&o.in()}}function qc(n,t){if(n.nodes)for(var e=n.nodes.start,i=n.nodes.end;e!==null;){var s=e===i?null:co(e);t.append(e),e=s}}let ea=!1,xi=!1;function Ih(n){xi=n}let Zt=null,Fn=!1;function wn(n){Zt=n}let $t=null;function Jn(n){$t=n}let $n=null;function Vf(n){Zt!==null&&($n??($n=new Set)).add(n)}let Qe=null,fn=0,_n=null;function am(n){_n=n}let Wf=1,Qi=0,cs=Qi;function Uh(n){cs=n}function Xf(){return++Wf}function ho(n){var t=n.f;if(t&Te)return!0;if(t&De&&(n.f&=~hs),t&Bn){for(var e=n.deps,i=e.length,s=0;s<i;s++){var r=e[s];if(ho(r)&&bf(r),r.wv>n.wv)return!0}t&En&&Ne===null&&Se(n,Re)}return!1}function qf(n,t,e=!0){var i=n.reactions;if(i!==null&&!($n!==null&&$n.has(n)))for(var s=0;s<i.length;s++){var r=i[s];r.f&De?qf(r,t,!1):t===r&&(e?Se(r,Te):r.f&Re&&Se(r,Bn),Hc(r))}}function Yf(n){var t=Qe,e=fn,i=_n,s=Zt,r=$n,o=Oe,a=Fn,l=cs,c=n.f;Qe=null,fn=0,_n=null,Zt=c&(Tn|vi)?null:n,$n=null,er(n.ctx),Fn=!1,cs=++Qi,n.ac!==null&&(_r(()=>{n.ac.abort(lo)}),n.ac=null);try{n.f|=fa;var h=n.fn,f=h();n.f|=fr;var u=Nh(n);if(vf()&&_n!==null&&!Fn&&u!==null&&!(n.f&(De|Bn|Te)))for(var d=0;d<_n.length;d++)qf(_n[d],n);if(s!==null&&s!==n){if(Qi++,s.deps!==null)for(let _=0;_<e;_+=1)s.deps[_].rv=Qi;if(t!==null)for(const _ of t)_.rv=Qi;_n!==null&&(i===null?i=_n:i.push(..._n))}return n.f&Fi&&(n.f^=Fi),f}catch(_){return Nh(n),Qp(_)}finally{n.f^=fa,Qe=t,fn=e,_n=i,Zt=s,$n=r,er(o),Fn=a,cs=l}}function Nh(n){var s;var t=n.deps,e=Lt==null?void 0:Lt.is_fork;if(Qe!==null){var i;if(e||$r(n,fn),t!==null&&fn>0)for(t.length=fn+Qe.length,i=0;i<Qe.length;i++)t[fn+i]=Qe[i];else n.deps=t=Qe;if(Gc()&&n.f&En)for(i=fn;i<t.length;i++)((s=t[i]).reactions??(s.reactions=[])).push(n)}else!e&&t!==null&&fn<t.length&&($r(n,fn),t.length=fn);return t}function lm(n,t){let e=t.reactions;if(e!==null){var i=$d.call(e,n);if(i!==-1){var s=e.length-1;s===0?e=t.reactions=null:(e[i]=e[s],e.pop())}}if(e===null&&t.f&De&&(Qe===null||!ca.call(Qe,t))){var r=t;r.f&En&&(r.f^=En,r.f&=~hs),r.v!==Ae&&Bc(r),r.ac!==null&&_r(()=>{r.ac.abort(lo),r.ac=null,Se(r,Te)}),Gp(r),$r(r,0)}}function $r(n,t){var e=n.deps;if(e!==null)for(var i=t;i<e.length;i++)lm(n,e[i])}function rr(n){var t=n.f;if(!(t&tn)){Se(n,Re);var e=$t,i=ea;$t=n,ea=(t&(Tn|vi))===0;try{t&(Nn|ff)?rm(n):Xc(n),zf(n);var s=Yf(n);n.teardown=typeof s=="function"?s:null,n.wv=Wf;var r;af&&Dp&&n.f&Te&&n.deps}finally{ea=i,$t=e}}}async function cm(){await Promise.resolve(),Xp()}function Et(n){var t=n.f,e=(t&De)!==0;if(Zt!==null&&!Fn){var i=$t!==null&&($t.f&tn)!==0;if(!i&&($n===null||!$n.has(n))){var s=Zt.deps;if(Zt.f&fa)n.rv<Qi&&(n.rv=Qi,Qe===null&&s!==null&&s[fn]===n?fn++:Qe===null?Qe=[n]:Qe.push(n));else{Zt.deps??(Zt.deps=[]),ca.call(Zt.deps,n)||Zt.deps.push(n);var r=n.reactions;r===null?n.reactions=[Zt]:ca.call(r,Zt)||r.push(Zt)}}}if(xi&&Kn.has(n))return Kn.get(n);if(e){var o=n;if(xi){var a=o.v;return(!(o.f&Re)&&o.reactions!==null||Zf(o))&&(a=zc(o)),Kn.set(o,a),a}var l=(o.f&En)===0&&!Fn&&Zt!==null&&(ea||(Zt.f&En)!==0),c=(o.f&fr)===0;ho(o)&&(l&&(o.f|=En),bf(o)),l&&!c&&(Tf(o),jf(o))}if(Ne!=null&&Ne.has(n))return Ne.get(n);if(n.f&Fi)throw n.v;return n.v}function jf(n){if(n.f|=En,n.deps!==null)for(const t of n.deps)(t.reactions??(t.reactions=[])).push(n),t.f&De&&!(t.f&En)&&(Tf(t),jf(t))}function Zf(n){if(n.v===Ae)return!0;if(n.deps===null)return!1;for(const t of n.deps)if(Kn.has(t)||t.f&De&&Zf(t))return!0;return!1}function gr(n){var t=Fn;try{return Fn=!0,n()}finally{Fn=t}}const hm=["touchstart","touchmove"];function um(n){return hm.includes(n)}const ts=Symbol("events"),Kf=new Set,Fl=new Set;function fm(n,t,e,i={}){function s(r){if(i.capture||Ol.call(t,r),!r.cancelBubble)return _r(()=>e==null?void 0:e.call(this,r))}return n.startsWith("pointer")||n.startsWith("touch")||n==="wheel"?fi(()=>{t.addEventListener(n,s,i)}):t.addEventListener(n,s,i),s}function dm(n,t,e,i,s){var r={capture:i,passive:s},o=fm(n,t,e,r);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&Of(()=>{t.removeEventListener(n,o,r)})}function Wr(n,t,e){(t[ts]??(t[ts]={}))[n]=e}function Yc(n){for(var t=0;t<n.length;t++)Kf.add(n[t]);for(var e of Fl)e(n)}let ka=null,Ha=!1;function Ol(n){var g,m;var t=this,e=t.ownerDocument,i=n.type,s=((g=n.composedPath)==null?void 0:g.call(n))||[],r=s[0]||n.target;ka=n,Ha||(Ha=!0,setTimeout(()=>{Ha=!1,ka=null}));var o=0,a=ka===n&&n[ts];if(a){var l=s.indexOf(a);if(l!==-1&&(t===document||t===window)){n[ts]=t;return}var c=s.indexOf(t);if(c===-1)return;l<=c&&(o=l)}if(r=s[o]||n.target,r!==t){cf(n,"currentTarget",{configurable:!0,get(){return r||e}});var h=Zt,f=$t;wn(null),Jn(null);try{for(var u,d=[];r!==null&&r!==t;){try{var _=(m=r[ts])==null?void 0:m[i];_!=null&&(!r.disabled||n.target===r)&&_.call(r,n)}catch(p){u?d.push(p):u=p}if(n.cancelBubble)break;o++,r=o<s.length?s[o]:null}if(u){for(let p of d)queueMicrotask(()=>{throw p});throw u}}finally{n[ts]=t,delete n.currentTarget,wn(h),Jn(f)}}}var rf;const Ga=((rf=globalThis==null?void 0:globalThis.window)==null?void 0:rf.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:n=>n});function pm(n){return(Ga==null?void 0:Ga.createHTML(n))??n}function mm(n){var t=Jp("template");return t.innerHTML=pm(n.replaceAll("<!>","<!---->")),t.content}function $f(n,t){var e=$t;e.nodes===null&&(e.nodes={start:n,end:t,a:null,t:null})}function Qn(n,t){var e=(t&_p)!==0,i,s=!n.startsWith("<!>");return()=>{i===void 0&&(i=mm(s?n:"<!>"+n),i=Ra(i));var r=e||If?document.importNode(i,!0):i.cloneNode(!0);return $f(r,r),r}}function _m(){var n=document.createDocumentFragment(),t=document.createComment(""),e=Oi();return n.append(t,e),$f(t,e),n}function zn(n,t){n!==null&&n.before(t)}function gm(n){let t=0,e=fs(0),i;return()=>{Gc()&&(Et(e),Vc(()=>(t===0&&(i=gr(()=>n(()=>Vr(e)))),t+=1,()=>{fi(()=>{t-=1,t===0&&(i==null||i(),i=void 0,Vr(e))})})))}}var vm=tr|dr;function xm(n,t,e,i){new Mm(n,t,e,i)}var gn,Nc,vn,rs,We,cn,Xe,hn,Wn,os,Ni,Js,so,ro,ui,ba,me,ym,Sm,Bl,Em,zl,Fr,na,kl,Hl;class Mm{constructor(t,e,i,s){Gt(this,me);on(this,"parent");on(this,"is_pending",!1);on(this,"transform_error");Gt(this,gn);Gt(this,Nc,null);Gt(this,vn);Gt(this,rs);Gt(this,We);Gt(this,cn,null);Gt(this,Xe,null);Gt(this,hn,null);Gt(this,Wn,null);Gt(this,os,0);Gt(this,Ni,0);Gt(this,Js,!1);Gt(this,so,new Set);Gt(this,ro,new Set);Gt(this,ui,null);Gt(this,ba,gm(()=>(zt(this,ui,fs(O(this,os))),()=>{zt(this,ui,null)})));var r;zt(this,gn,t),zt(this,vn,e),zt(this,rs,o=>{var a=$t;a.b=this,a.f|=Pl,i(o)}),this.parent=$t.b,this.transform_error=s??((r=this.parent)==null?void 0:r.transform_error)??(o=>o),zt(this,We,Wc(()=>{Jt(this,me,zl).call(this)},vm))}defer_effect(t){yf(t,O(this,so),O(this,ro))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!O(this,vn).pending}update_pending_count(t,e){Jt(this,me,kl).call(this,t,e),zt(this,os,O(this,os)+t),!(!O(this,ui)||O(this,Js))&&(zt(this,Js,!0),fi(()=>{zt(this,Js,!1),O(this,ui)&&ir(O(this,ui),O(this,os))}))}get_effect_pending(){return O(this,ba).call(this),Et(O(this,ui))}error(t){if(!O(this,vn).onerror&&!O(this,vn).failed)throw t;Lt!=null&&Lt.is_fork?(O(this,cn)&&Lt.skip_effect(O(this,cn)),O(this,Xe)&&Lt.skip_effect(O(this,Xe)),O(this,hn)&&Lt.skip_effect(O(this,hn)),Lt.oncommit(()=>{Jt(this,me,Hl).call(this,t)})):Jt(this,me,Hl).call(this,t)}}gn=new WeakMap,Nc=new WeakMap,vn=new WeakMap,rs=new WeakMap,We=new WeakMap,cn=new WeakMap,Xe=new WeakMap,hn=new WeakMap,Wn=new WeakMap,os=new WeakMap,Ni=new WeakMap,Js=new WeakMap,so=new WeakMap,ro=new WeakMap,ui=new WeakMap,ba=new WeakMap,me=new WeakSet,ym=function(){try{zt(this,cn,xn(()=>O(this,rs).call(this,O(this,gn))))}catch(t){this.error(t)}},Sm=function(t){const e=O(this,vn).failed,{reset:i,invoke_onerror:s}=Jt(this,me,Bl).call(this,t);fi(s),e&&zt(this,hn,xn(()=>{e(O(this,gn),()=>t,()=>i)}))},Bl=function(t){var e=!1,i=!1;const s=()=>{if(e){xp();return}e=!0,i&&Lp(),O(this,hn)!==null&&ls(O(this,hn),()=>{zt(this,hn,null)}),Jt(this,me,na).call(this,()=>{Jt(this,me,zl).call(this)})};return{reset:s,invoke_onerror:()=>{var o,a;try{i=!0,(a=(o=O(this,vn)).onerror)==null||a.call(o,t,s),i=!1}catch(l){Yn(l,O(this,We)&&O(this,We).parent)}}}},Em=function(){const t=O(this,vn).pending;t&&(this.is_pending=!0,zt(this,Xe,xn(()=>t(O(this,gn)))),fi(()=>{var e=zt(this,Wn,document.createDocumentFragment()),i=Oi(),s=!1;if(e.append(i),zt(this,cn,Jt(this,me,na).call(this,()=>{try{return xn(()=>O(this,rs).call(this,i))}catch(r){try{this.error(r),s=!0}catch(o){Yn(o,O(this,We).parent)}return null}})),O(this,cn)===null){zt(this,Wn,null),s&&Jt(this,me,Fr).call(this,Lt);return}O(this,Ni)===0&&(O(this,gn).before(e),zt(this,Wn,null),ls(O(this,Xe),()=>{zt(this,Xe,null)}),Jt(this,me,Fr).call(this,Lt))}))},zl=function(){try{if(this.is_pending=this.has_pending_snippet(),zt(this,Ni,0),zt(this,os,0),zt(this,cn,xn(()=>{O(this,rs).call(this,O(this,gn))})),O(this,Ni)>0){var t=zt(this,Wn,document.createDocumentFragment());qc(O(this,cn),t);const e=O(this,vn).pending;zt(this,Xe,xn(()=>e(O(this,gn))))}else Jt(this,me,Fr).call(this,Lt)}catch(e){this.error(e)}},Fr=function(t){this.is_pending=!1,t.transfer_effects(O(this,so),O(this,ro))},na=function(t){var e=$t,i=Zt,s=Oe;Jn(O(this,We)),wn(O(this,We)),er(O(this,We).ctx);try{return us.ensure(),t()}finally{Jn(e),wn(i),er(s)}},kl=function(t,e){var i;if(!this.has_pending_snippet()){this.parent&&Jt(i=this.parent,me,kl).call(i,t,e);return}zt(this,Ni,O(this,Ni)+t),O(this,Ni)===0&&(Jt(this,me,Fr).call(this,e),O(this,Xe)&&ls(O(this,Xe),()=>{zt(this,Xe,null)}),O(this,Wn)&&(O(this,gn).before(O(this,Wn)),zt(this,Wn,null)))},Hl=function(t){O(this,cn)&&(en(O(this,cn)),zt(this,cn,null)),O(this,Xe)&&(en(O(this,Xe)),zt(this,Xe,null)),O(this,hn)&&(en(O(this,hn)),zt(this,hn,null));let e=O(this,vn).failed;const i=s=>{const{reset:r,invoke_onerror:o}=Jt(this,me,Bl).call(this,s);o(),e&&zt(this,hn,Jt(this,me,na).call(this,()=>{try{return xn(()=>{var a=$t;a.b=this,a.f|=Pl,e(O(this,gn),()=>s,()=>r)})}catch(a){return Yn(a,O(this,We).parent),null}}))};fi(()=>{var s;try{s=this.transform_error(t)}catch(r){Yn(r,O(this,We)&&O(this,We).parent);return}s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(i,r=>Yn(r,O(this,We)&&O(this,We).parent)):i(s)})};function Ge(n,t){var e=t==null?"":typeof t=="object"?`${t}`:t;e!==(n[Dr]??(n[Dr]=n.nodeValue))&&(n[Dr]=e,n.nodeValue=`${e}`)}function bm(n,t){return Tm(n,t)}const xo=new Map;function Tm(n,{target:t,anchor:e,props:i={},events:s,context:r,intro:o=!0,transformError:a}){Zp();var l=void 0,c=nm(()=>{var h=e??t.appendChild(Oi());xm(h,{pending:()=>{}},d=>{pr({});var _=Oe;r&&(_.c=r),s&&(i.$$events=s),l=n(d,i)||Oc(),mr()},a);var f=new Set,u=d=>{for(var _=0;_<d.length;_++){var g=d[_];if(!f.has(g)){f.add(g);var m=um(g);for(const x of[t,document]){var p=xo.get(x);p===void 0&&(p=new Map,xo.set(x,p));var E=p.get(g);E===void 0?(x.addEventListener(g,Ol,{passive:m}),p.set(g,1)):p.set(g,E+1)}}}};return u(wa(Kf)),Fl.add(u),()=>{var m;for(var d of f)for(const p of[t,document]){var _=xo.get(p),g=_.get(d);--g==0?(p.removeEventListener(d,Ol),_.delete(d),_.size===0&&xo.delete(p)):_.set(d,g)}Fl.delete(u),h!==e&&((m=h.parentNode)==null||m.removeChild(h))}});return wm.set(l,c),l}let wm=new WeakMap;var Un,Xn,un,as,oo,ao,Ta;class Am{constructor(t,e=!0){on(this,"anchor");Gt(this,Un,new Map);Gt(this,Xn,new Map);Gt(this,un,new Map);Gt(this,as,new Set);Gt(this,oo,!0);Gt(this,ao,t=>{if(O(this,Un).has(t)){var e=O(this,Un).get(t),i=O(this,Xn).get(e);if(i)ma(i),O(this,as).delete(e);else{var s=O(this,un).get(e);s&&(ma(s.effect),O(this,Xn).set(e,s.effect),O(this,un).delete(e),s.fragment.lastChild.remove(),this.anchor.before(s.fragment),i=s.effect)}for(const[r,o]of O(this,Un)){if(O(this,Un).delete(r),r===t)break;const a=O(this,un).get(o);a&&(en(a.effect),O(this,un).delete(o))}for(const[r,o]of O(this,Xn)){if(r===e||O(this,as).has(r))continue;const a=()=>{if(Array.from(O(this,Un).values()).includes(r)){var c=document.createDocumentFragment();qc(o,c),c.append(Oi()),O(this,un).set(r,{effect:o,fragment:c})}else en(o);O(this,as).delete(r),O(this,Xn).delete(r)};O(this,oo)||!i?(O(this,as).add(r),ls(o,a,!1)):a()}}});Gt(this,Ta,t=>{O(this,Un).delete(t);const e=Array.from(O(this,Un).values());for(const[i,s]of O(this,un))e.includes(i)||(en(s.effect),O(this,un).delete(i))});this.anchor=t,zt(this,oo,e)}ensure(t,e){var i=Lt,s=Ff();if(e&&!O(this,Xn).has(t)&&!O(this,un).has(t))if(s){var r=document.createDocumentFragment(),o=Oi();r.append(o),O(this,un).set(t,{effect:xn(()=>e(o)),fragment:r})}else O(this,Xn).set(t,xn(()=>e(this.anchor)));if(O(this,Un).set(i,t),s){for(const[a,l]of O(this,Xn))a===t?i.unskip_effect(l):i.skip_effect(l);for(const[a,l]of O(this,un))a===t?i.unskip_effect(l.effect):i.skip_effect(l.effect);i.oncommit(O(this,ao)),i.ondiscard(O(this,Ta))}else O(this,ao).call(this,i)}}Un=new WeakMap,Xn=new WeakMap,un=new WeakMap,as=new WeakMap,oo=new WeakMap,ao=new WeakMap,Ta=new WeakMap;function Ca(n,t,e=!1){var i=new Am(n),s=e?tr:0;function r(o,a){i.ensure(o,a)}Wc(()=>{var o=!1;t((a,l=0)=>{o=!0,r(l,a)}),o||r(-1,null)},s)}function Jf(n,t){return t}function Rm(n,t,e){for(var i=[],s=t.length,r,o=t.length,a=0;a<s;a++){let f=t[a];ls(f,()=>{if(r){if(r.pending.delete(f),r.done.add(f),r.pending.size===0){var u=n.outrogroups;Gl(n,wa(r.done)),u.delete(r),u.size===0&&(n.outrogroups=null)}}else o-=1},!1)}if(o===0){var l=i.length===0&&e!==null&&n.pending.size===0;if(l){var c=e,h=c.parentNode;$p(h),h.append(c),n.items.clear()}Gl(n,t,!l)}else r={pending:new Set(t),done:new Set},(n.outrogroups??(n.outrogroups=new Set)).add(r)}function Gl(n,t,e=!0){var i;if(n.pending.size>0){i=new Set;for(const o of n.pending.values())for(const a of o)i.add(n.items.get(a).e)}for(var s=0;s<t.length;s++){var r=t[s];if(i!=null&&i.has(r)){r.f|=jn;const o=document.createDocumentFragment();qc(r,o)}else en(t[s],e)}}var Fh;function Qf(n,t,e,i,s,r=null){var o=n,a=new Map,l=(t&pf)!==0;if(l){var c=n;o=c.appendChild(Oi())}var h=null,f=Ef(()=>{var x=e();return lf(x)?x:x==null?[]:wa(x)}),u,d=new Map,_=!0;function g(x){E.effect.f&tn||(E.pending.delete(x),E.fallback=h,Cm(E,u,o,t,i),h!==null&&(u.length===0?h.f&jn?(h.f^=jn,Or(h,null,o)):ma(h):ls(h,()=>{h=null})))}function m(x){E.pending.delete(x)}var p=Wc(()=>{u=Et(f);for(var x=u.length,v=new Set,L=Lt,A=Ff(),T=0;T<x;T+=1){var R=u[T],y=i(R,T),M=_?null:a.get(y);M?(M.v&&ir(M.v,R),M.i&&ir(M.i,T),A&&L.unskip_effect(M.e)):(M=Pm(a,_?o:Fh??(Fh=Oi()),R,y,T,s,t,e),_||(M.e.f|=jn),a.set(y,M)),v.add(y)}if(x===0&&r&&!h&&(_?h=xn(()=>r(o)):(h=xn(()=>r(Fh??(Fh=Oi()))),h.f|=jn)),x>v.size&&Sp(),!_)if(d.set(L,v),A){for(const[C,B]of a)v.has(C)||L.skip_effect(B.e);L.oncommit(g),L.ondiscard(m)}else g(L);Et(f)}),E={effect:p,items:a,pending:d,outrogroups:null,fallback:h};_=!1}function br(n){for(;n!==null&&!(n.f&Tn);)n=n.next;return n}function Cm(n,t,e,i,s){var M,C,B,I,z,V,H,q,G;var r=(i&hp)!==0,o=t.length,a=n.items,l=br(n.effect.first),c,h=null,f,u=[],d=[],_,g,m,p;if(r)for(p=0;p<o;p+=1)_=t[p],g=s(_,p),m=a.get(g).e,m.f&jn||((C=(M=m.nodes)==null?void 0:M.a)==null||C.measure(),(f??(f=new Set)).add(m));for(p=0;p<o;p+=1){if(_=t[p],g=s(_,p),m=a.get(g).e,n.outrogroups!==null)for(const tt of n.outrogroups)tt.pending.delete(m),tt.done.delete(m);if(m.f&je&&(ma(m),r&&((I=(B=m.nodes)==null?void 0:B.a)==null||I.unfix(),(f??(f=new Set)).delete(m))),m.f&jn)if(m.f^=jn,m===l)Or(m,null,e);else{var E=h?h.next:l;m===n.effect.last&&(n.effect.last=m.prev),m.prev&&(m.prev.next=m.next),m.next&&(m.next.prev=m.prev),Ti(n,h,m),Ti(n,m,E),Or(m,E,e),h=m,u=[],d=[],l=br(h.next);continue}if(m!==l){if(c!==void 0&&c.has(m)){if(u.length<d.length){var x=d[0],v;h=x.prev;var L=u[0],A=u[u.length-1];for(v=0;v<u.length;v+=1)Or(u[v],x,e);for(v=0;v<d.length;v+=1)c.delete(d[v]);Ti(n,L.prev,A.next),Ti(n,h,L),Ti(n,A,x),l=x,h=A,p-=1,u=[],d=[]}else c.delete(m),Or(m,l,e),Ti(n,m.prev,m.next),Ti(n,m,h===null?n.effect.first:h.next),Ti(n,h,m),h=m;continue}for(u=[],d=[];l!==null&&l!==m;)(c??(c=new Set)).add(l),d.push(l),l=br(l.next);if(l===null)continue}m.f&jn||u.push(m),h=m,l=br(m.next)}if(n.outrogroups!==null){for(const tt of n.outrogroups)tt.pending.size===0&&(Gl(n,wa(tt.done)),(z=n.outrogroups)==null||z.delete(tt));n.outrogroups.size===0&&(n.outrogroups=null)}if(l!==null||c!==void 0){var T=[];if(c!==void 0)for(m of c)m.f&je||T.push(m);for(;l!==null;)!(l.f&je)&&l!==n.fallback&&T.push(l),l=br(l.next);var R=T.length;if(R>0){var y=i&pf&&o===0?e:null;if(r){for(p=0;p<R;p+=1)(H=(V=T[p].nodes)==null?void 0:V.a)==null||H.measure();for(p=0;p<R;p+=1)(G=(q=T[p].nodes)==null?void 0:q.a)==null||G.fix()}Rm(n,T,y)}}r&&fi(()=>{var tt,at;if(f!==void 0)for(m of f)(at=(tt=m.nodes)==null?void 0:tt.a)==null||at.apply()})}function Pm(n,t,e,i,s,r,o,a){var l=o&lp?o&up?fs(e):Yp(e,!1,!1):null,c=o&cp?fs(s):null;return{v:l,i:c,e:xn(()=>(r(t,l??e,c??s,a),()=>{n.delete(i)}))}}function Or(n,t,e){if(n.nodes)for(var i=n.nodes.start,s=n.nodes.end,r=t&&!(t.f&jn)?t.nodes.start:e;i!==null;){var o=co(i);if(r.before(i),i===s)return;i=o}}function Ti(n,t,e){t===null?n.effect.first=e:t.next=e,e===null?n.effect.last=t:e.prev=t}function Lm(n,t,e){var i=n==null?"":""+n;return t&&(i=i?i+" "+t:t),i===""?null:i}function Vl(n,t,e,i,s,r){var o=n[Ll];if(o!==e||o===void 0){var a=Lm(e,i);a==null?n.removeAttribute("class"):n.className=a,n[Ll]=e}return r}const Dm=Symbol("is custom element"),Im=Symbol("is html"),Um=ap?"progress":"PROGRESS";function Nm(n,t){var e=ed(n);e.value===(e.value=t??void 0)||n.value===t&&(t!==0||n.nodeName!==Um)||(n.value=t??"")}function td(n,t,e,i){var s=ed(n);s[t]!==(s[t]=e)&&(e==null?n.removeAttribute(t):typeof e!="string"&&Fm(n).has(t)?n[t]=e:n.setAttribute(t,e))}function ed(n){return n[Jo]??(n[Jo]={[Dm]:n.nodeName.includes("-"),[Im]:n.namespaceURI===gp})}var Oh=new Map;function Fm(n){var t=n.getAttribute("is")||n.nodeName,e=Oh.get(t);if(e)return e;Oh.set(t,e=new Set);for(var i,s=n,r=Element.prototype;r!==s;){i=Jd(s);for(var o in i)i[o].set&&o!=="innerHTML"&&o!=="textContent"&&o!=="innerText"&&e.add(o);s=hf(s)}return e}function Om(n,t,e=t){var i=new WeakSet;Op(n,"input",async s=>{var r=s?n.defaultValue:n.value;if(r=Va(n)?Wa(r):r,e(r),Lt!==null&&i.add(Lt),await cm(),r!==(r=t())){var o=n.selectionStart,a=n.selectionEnd,l=n.value.length;if(n.value=r??"",a!==null){var c=n.value.length;o===a&&a===l&&c>l?(n.selectionStart=c,n.selectionEnd=c):(n.selectionStart=o,n.selectionEnd=Math.min(a,c))}}}),gr(t)==null&&n.value&&(e(Va(n)?Wa(n.value):n.value),Lt!==null&&i.add(Lt)),Vc(()=>{var s=t();if(n===document.activeElement){var r=Lt;if(i.has(r))return}Va(n)&&s===Wa(n.value)||n.type==="date"&&!s&&!n.value||s!==n.value&&(n.value=s??"")})}function Va(n){var t=n.type;return t==="number"||t==="range"}function Wa(n){return n===""?null:+n}function Xa(n,t){return n===t||(n==null?void 0:n[kr])===t}function Bh(n=Oc(),t,e,i){var s=Oe.r,r=$t;return im(()=>{var o,a;return Vc(()=>{o=a,a=[],gr(()=>{Xa(e(...a),n)||(t(n,...a),o&&Xa(e(...o),n)&&t(null,...o))})}),()=>{let l=r;for(;l!==s&&l.parent!==null&&l.parent.f&ha;)l=l.parent;const c=()=>{a&&Xa(e(...a),n)&&t(null,...a)},h=l.teardown;l.teardown=()=>{c(),h==null||h()}}}),n}function Ye(n,t,e,i){var v;var s=!0,r=(e&pp)!==0,o=(e&mp)!==0,a=i,l=!0,c=void 0,h=()=>o&&s?(c??(c=Kr(i)),Et(c)):(l&&(l=!1,a=o?gr(i):i),a);let f;if(r){var u=kr in n||rp in n;f=((v=ks(n,t))==null?void 0:v.set)??(u&&t in n?L=>n[t]=L:void 0)}var d,_=!1;r?[d,_]=Np(()=>n[t]):d=n[t],d===void 0&&i!==void 0&&(d=h(),f&&(Ap(),f(d)));var g;if(g=()=>{var L=n[t];return L===void 0?h():(l=!0,L)},!(e&dp))return g;if(f){var m=n.$$legacy;return function(L,A){return arguments.length>0?((!A||m||_)&&f(A?g():L),L):g()}}var p=!1,E=(e&fp?Kr:Ef)(()=>(p=!1,g()));r&&Et(E);var x=$t;return function(L,A){if(arguments.length>0){const T=A?Et(E):r?di(L):L;return xe(E,T),p=!0,a!==void 0&&(a=T),L}return xi&&p||x.f&tn?E.v:Et(E)}}function jc(n){Oe===null&&gf(),Nl(()=>{const t=gr(n);if(typeof t=="function")return t})}function nd(n){Oe===null&&gf(),jc(()=>()=>gr(n))}const Bm="5";var of;typeof window<"u"&&((of=window.__svelte??(window.__svelte={})).v??(of.v=new Set)).add(Bm);var zm=Qn('<div class="spinner svelte-tsg0ih"></div>'),km=Qn('<button type="button" class="city-chip svelte-tsg0ih"> </button>'),Hm=Qn('<div class="search-container svelte-tsg0ih"><form class="search-form svelte-tsg0ih"><div class="input-wrapper svelte-tsg0ih"><span class="search-icon svelte-tsg0ih">🔍</span> <input type="text" placeholder="Entrez une adresse ou ville (ex: Paris, Gare de Lyon...)" class="search-input svelte-tsg0ih"/> <!></div> <button type="submit" class="submit-btn svelte-tsg0ih">Rechercher</button></form> <div class="quick-cities svelte-tsg0ih"><span class="quick-label svelte-tsg0ih">Suggestions :</span> <!></div></div>');function Gm(n,t){pr(t,!0);let e=Ye(t,"onSearch",3,()=>{}),i=Ye(t,"loading",3,!1),s=Ue("Paris");const r=["Paris","Lyon","Marseille","Tokyo","New York"];function o(p){p.preventDefault(),Et(s).trim()&&e()(Et(s).trim())}function a(p){xe(s,p,!0),e()(p)}var l=Hm(),c=ue(l),h=ue(c),f=oe(ue(h),2),u=oe(f,2);{var d=p=>{var E=zm();zn(p,E)};Ca(u,p=>{i()&&p(d)})}var _=oe(h,2),g=oe(c,2),m=oe(ue(g),2);Qf(m,17,()=>r,Jf,(p,E)=>{var x=km(),v=He(x,!0);sr(()=>{x.disabled=i(),Ge(v,Et(E))}),Wr("click",x,()=>a(Et(E))),zn(p,x)}),sr(p=>{f.disabled=i(),_.disabled=p},[()=>i()||!Et(s).trim()]),dm("submit",c,o),Om(f,()=>Et(s),p=>xe(s,p)),zn(n,l),mr()}Yc(["click"]);const Vm={0:{label:"Ciel dégagé",type:"clear",icon:"☀️",skyDay:6333946,skyNight:988970,lightColor:16775149},1:{label:"Principalement dégagé",type:"clear",icon:"🌤️",skyDay:8246268,skyNight:988970,lightColor:16772565},2:{label:"Partiellement nuageux",type:"partly_cloudy",icon:"⛅",skyDay:9684477,skyNight:1120295,lightColor:16639626},3:{label:"Couvert",type:"cloudy",icon:"☁️",skyDay:9741240,skyNight:1976635,lightColor:14870768},45:{label:"Brouillard",type:"fog",icon:"🌫️",skyDay:11051678,skyNight:1841431,lightColor:14078929},48:{label:"Brouillard givrant",type:"fog",icon:"🌫️❄️",skyDay:10265519,skyNight:1120295,lightColor:15067115},51:{label:"Bruine légère",type:"rain",icon:"🌦️",skyDay:6583435,skyNight:988970,lightColor:12573694},53:{label:"Bruine modérée",type:"rain",icon:"🌧️",skyDay:4674921,skyNight:988970,lightColor:9684477},55:{label:"Bruine dense",type:"rain",icon:"🌧️",skyDay:3359061,skyNight:593174,lightColor:6333946},56:{label:"Bruine verglaçante légère",type:"rain",icon:"🌧️❄️",skyDay:4674921,skyNight:593174,lightColor:12573694},57:{label:"Bruine verglaçante dense",type:"rain",icon:"🌧️❄️",skyDay:3359061,skyNight:593174,lightColor:9684477},61:{label:"Pluie faible",type:"rain",icon:"🌧️",skyDay:4674921,skyNight:725280,lightColor:12573694},63:{label:"Pluie modérée",type:"rain",icon:"🌧️",skyDay:3359061,skyNight:593174,lightColor:9684477},65:{label:"Pluie forte",type:"rain",icon:"🌧️🌊",skyDay:1976635,skyNight:395537,lightColor:6333946},66:{label:"Pluie verglaçante",type:"rain",icon:"🌧️🧊",skyDay:3359061,skyNight:593174,lightColor:9684477},67:{label:"Forte pluie verglaçante",type:"rain",icon:"🌧️🧊",skyDay:1976635,skyNight:395537,lightColor:6333946},71:{label:"Chutes de neige faibles",type:"snow",icon:"🌨️",skyDay:9741240,skyNight:1976635,lightColor:16777215},73:{label:"Chutes de neige modérées",type:"snow",icon:"❄️",skyDay:13358561,skyNight:1976635,lightColor:16777215},75:{label:"Chutes de neige fortes",type:"snow",icon:"❄️🌨️",skyDay:14870768,skyNight:3359061,lightColor:16777215},77:{label:"Grains de neige",type:"snow",icon:"❄️",skyDay:9741240,skyNight:1976635,lightColor:16777215},80:{label:"Averses légères",type:"rain",icon:"🌦️",skyDay:6583435,skyNight:988970,lightColor:12573694},81:{label:"Averses modérées",type:"rain",icon:"🌧️",skyDay:4674921,skyNight:725280,lightColor:9684477},82:{label:"Averses violentes",type:"rain",icon:"⛈️",skyDay:1976635,skyNight:329486,lightColor:6333946},85:{label:"Averses de neige légères",type:"snow",icon:"🌨️",skyDay:9741240,skyNight:1976635,lightColor:16777215},86:{label:"Averses de neige fortes",type:"snow",icon:"❄️🌨️",skyDay:14870768,skyNight:3359061,lightColor:16777215},95:{label:"Orage",type:"thunderstorm",icon:"⚡",skyDay:1973806,skyNight:328973,lightColor:10859772},96:{label:"Orage avec grêle légère",type:"thunderstorm",icon:"⛈️⚡",skyDay:1579045,skyNight:263177,lightColor:12891645},99:{label:"Orage avec forte grêle",type:"thunderstorm",icon:"⛈️⚡🚨",skyDay:1118491,skyNight:131589,lightColor:11032055}};function Zc(n){return Vm[n]||{label:`Météo (${n})`,type:"partly_cloudy",icon:"🌤️",skyDay:8246268,skyNight:988970,lightColor:16775149}}var Wm=Qn('<div class="weather-card svelte-1671l1m"><div class="header svelte-1671l1m"><div class="location-badge svelte-1671l1m">📍 Coordonnées OSM</div> <div class="coords svelte-1671l1m"> </div></div> <h2 class="display-name svelte-1671l1m"> </h2> <div class="weather-main svelte-1671l1m"><div class="weather-icon-pulse svelte-1671l1m"> </div> <div class="temp-wrapper svelte-1671l1m"><span class="temperature svelte-1671l1m"> </span> <span class="unit svelte-1671l1m">C</span></div></div> <div class="details-row svelte-1671l1m"><div class="detail-tag svelte-1671l1m"><span class="detail-label svelte-1671l1m">Condition :</span> <span class="detail-value svelte-1671l1m"> </span></div> <div class="detail-tag svelte-1671l1m"><span class="detail-label svelte-1671l1m">Heure :</span> <span class="detail-value svelte-1671l1m"> </span></div></div> <div class="buildings-status svelte-1671l1m"><span></span> <span class="buildings-text svelte-1671l1m"> </span></div></div>');function Xm(n,t){pr(t,!0);let e=Ye(t,"location",3,null),i=Ye(t,"currentForecast",3,null),s=Ye(t,"selectedHour",3,12),r=Ye(t,"buildingsCount",3,0),o=Ye(t,"buildingsSource",3,"overpass"),a=nr(()=>i()?Zc(i().weathercode):null),l=nr(()=>`${String(s()).padStart(2,"0")}:00`);var c=_m(),h=Kp(c);{var f=u=>{var d=Wm(),_=ue(d),g=oe(ue(_),2),m=He(g),p=oe(_,2),E=He(p,!0),x=oe(p,2),v=ue(x),L=He(v,!0),A=oe(v,2),T=ue(A),R=He(T),y=oe(x,2),M=ue(y),C=oe(ue(M),2),B=He(C,!0),I=oe(M,2),z=oe(ue(I),2),V=He(z,!0),H=oe(y,2),q=ue(H),G=oe(q,2),tt=He(G);sr((at,_t,Ut)=>{var Wt,j;Ge(m,`${at??""}°N, ${_t??""}°E`),td(p,"title",e().display_name),Ge(E,e().display_name),Ge(L,((Wt=Et(a))==null?void 0:Wt.icon)||"🌤️"),Ge(R,`${Ut??""}°`),Ge(B,(j=Et(a))==null?void 0:j.label),Ge(V,Et(l)),Vl(q,1,`pulse-dot ${o()??""}`,"svelte-1671l1m"),Ge(tt,`${r()??""} bâtiments réels (100m • ${o()==="osm_real"?"OSM Physique Réel":o()==="overpass"?"Overpass OSM":"Procédural"})`)},[()=>e().latitude.toFixed(4),()=>e().longitude.toFixed(4),()=>i().temperature_2m.toFixed(1)]),zn(u,d)};Ca(h,u=>{e()&&i()&&u(f)})}zn(n,c),mr()}var qm=Qn('<button type="button"><span class="hour-label svelte-cfijfh"> </span> <span class="hour-icon svelte-cfijfh"> </span> <span class="hour-temp svelte-cfijfh"> </span></button>'),Ym=Qn('<div class="timeline-container svelte-cfijfh"><div class="timeline-header svelte-cfijfh"><div class="timelapse-controls svelte-cfijfh"><button type="button"><span class="btn-icon svelte-cfijfh"> </span> <span> </span></button> <span class="timelapse-desc svelte-cfijfh"> </span></div> <div class="hour-indicator svelte-cfijfh"><span class="hour-number svelte-cfijfh"> </span></div></div> <div class="slider-wrapper svelte-cfijfh"><input type="range" min="0" max="23" step="1" class="timeline-slider svelte-cfijfh"/></div> <div class="hours-track svelte-cfijfh"></div></div>');function jm(n,t){pr(t,!0);let e=Ye(t,"hourlyForecasts",19,()=>[]),i=Ye(t,"selectedHour",3,12),s=Ye(t,"onSelectHour",3,()=>{}),r=Ue(!1),o=null,a=nr(()=>(e()||[]).slice(0,24).map((B,I)=>{let z=I;if(B.time){const V=new Date(B.time);isNaN(V.getHours())||(z=V.getHours())}return{...B,hourNum:z,info:Zc(B.weathercode)}}));function l(){xe(r,!Et(r)),Et(r)?c():h()}function c(){h(),o=setInterval(()=>{const B=(i()+1)%24;s()(B)},700)}function h(){o&&(clearInterval(o),o=null)}nd(()=>{h()});function f(B){const I=parseInt(B.target.value,10);s()(I)}var u=Ym(),d=ue(u),_=ue(d),g=ue(_),m=ue(g),p=He(m,!0),E=oe(m,2),x=He(E,!0),v=oe(g,2),L=He(v,!0),A=oe(_,2),T=ue(A),R=He(T),y=oe(d,2),M=ue(y),C=oe(y,2);Qf(C,21,()=>Et(a),Jf,(B,I)=>{const z=nr(()=>Et(I).hourNum===i());var V=qm(),H=ue(V),q=He(H),G=oe(H,2),tt=He(G,!0),at=oe(G,2),_t=He(at);sr((Ut,Wt)=>{var j;Vl(V,1,`hour-item ${Et(z)?"selected":""}`,"svelte-cfijfh"),Ge(q,`${Ut??""}h`),Ge(tt,((j=Et(I).info)==null?void 0:j.icon)||"🌤️"),Ge(_t,`${Wt??""}°`)},[()=>String(Et(I).hourNum).padStart(2,"0"),()=>Math.round(Et(I).temperature_2m)]),Wr("click",V,()=>s()(Et(I).hourNum)),zn(B,V)}),sr(B=>{Vl(g,1,`play-btn ${Et(r)?"playing":""}`,"svelte-cfijfh"),td(g,"title",Et(r)?"Mettre en pause":"Lancer le timelapse animé 24h"),Ge(p,Et(r)?"⏸":"▶"),Ge(x,Et(r)?"Pause Timelapse":"Timelapse 24h"),Ge(L,Et(r)?"Animation en boucle sur 24h":"Cliquez sur une heure ou lancez le timelapse"),Ge(R,`${B??""}:00`),Nm(M,i())},[()=>String(i()).padStart(2,"0")]),Wr("click",g,l),Wr("input",M,f),zn(n,u),mr()}Yc(["click","input"]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kc="170",Gs={ROTATE:0,DOLLY:1,PAN:2},Fs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Zm=0,zh=1,Km=2,id=1,sd=2,li=3,Mi=0,nn=1,yn=2,Bi=0,Vs=1,kh=2,Hh=3,Gh=4,$m=5,Ki=100,Jm=101,Qm=102,t_=103,e_=104,n_=200,i_=201,s_=202,r_=203,Wl=204,Xl=205,o_=206,a_=207,l_=208,c_=209,h_=210,u_=211,f_=212,d_=213,p_=214,ql=0,Yl=1,jl=2,or=3,Zl=4,Kl=5,$l=6,Jl=7,$c=0,m_=1,__=2,zi=0,g_=1,v_=2,x_=3,M_=4,y_=5,S_=6,E_=7,rd=300,ar=301,lr=302,Ql=303,tc=304,Pa=306,ec=1e3,es=1001,nc=1002,kn=1003,b_=1004,Mo=1005,Zn=1006,qa=1007,ns=1008,yi=1009,od=1010,ad=1011,Jr=1012,Jc=1013,ds=1014,pi=1015,uo=1016,Qc=1017,th=1018,cr=1020,ld=35902,cd=1021,hd=1022,On=1023,ud=1024,fd=1025,Ws=1026,hr=1027,dd=1028,eh=1029,pd=1030,nh=1031,ih=1033,ia=33776,sa=33777,ra=33778,oa=33779,ic=35840,sc=35841,rc=35842,oc=35843,ac=36196,lc=37492,cc=37496,hc=37808,uc=37809,fc=37810,dc=37811,pc=37812,mc=37813,_c=37814,gc=37815,vc=37816,xc=37817,Mc=37818,yc=37819,Sc=37820,Ec=37821,aa=36492,bc=36494,Tc=36495,md=36283,wc=36284,Ac=36285,Rc=36286,T_=3200,w_=3201,sh=0,A_=1,Ii="",Mn="srgb",vr="srgb-linear",La="linear",le="srgb",Ms=7680,Vh=519,R_=512,C_=513,P_=514,_d=515,L_=516,D_=517,I_=518,U_=519,Wh=35044,Xh="300 es",mi=2e3,_a=2001;class gs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xr=Math.PI/180,Cc=180/Math.PI;function xr(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[i&255]+ze[i>>8&255]+ze[i>>16&255]+ze[i>>24&255]).toLowerCase()}function Fe(n,t,e){return Math.max(t,Math.min(e,n))}function N_(n,t){return(n%t+t)%t}function Ya(n,t,e){return(1-e)*n+e*t}function Tr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ke(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const F_={DEG2RAD:Xr};class nt{constructor(t=0,e=0){nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(t,e,i,s,r,o,a,l,c){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],f=i[7],u=i[2],d=i[5],_=i[8],g=s[0],m=s[3],p=s[6],E=s[1],x=s[4],v=s[7],L=s[2],A=s[5],T=s[8];return r[0]=o*g+a*E+l*L,r[3]=o*m+a*x+l*A,r[6]=o*p+a*v+l*T,r[1]=c*g+h*E+f*L,r[4]=c*m+h*x+f*A,r[7]=c*p+h*v+f*T,r[2]=u*g+d*E+_*L,r[5]=u*m+d*x+_*A,r[8]=u*p+d*v+_*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,u=a*l-h*r,d=c*r-o*l,_=e*f+i*u+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=f*g,t[1]=(s*c-h*i)*g,t[2]=(a*i-s*o)*g,t[3]=u*g,t[4]=(h*e-s*l)*g,t[5]=(s*r-a*e)*g,t[6]=d*g,t[7]=(i*l-c*e)*g,t[8]=(o*e-i*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ja.makeScale(t,e)),this}rotate(t){return this.premultiply(ja.makeRotation(-t)),this}translate(t,e){return this.premultiply(ja.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ja=new Vt;function gd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ga(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function O_(){const n=ga("canvas");return n.style.display="block",n}const qh={};function Br(n){n in qh||(qh[n]=!0,console.warn(n))}function B_(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function z_(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function k_(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const te={enabled:!0,workingColorSpace:vr,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===le&&(n.r=_i(n.r),n.g=_i(n.g),n.b=_i(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===le&&(n.r=Xs(n.r),n.g=Xs(n.g),n.b=Xs(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ii?La:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function _i(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Xs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Yh=[.64,.33,.3,.6,.15,.06],jh=[.2126,.7152,.0722],Zh=[.3127,.329],Kh=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$h=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);te.define({[vr]:{primaries:Yh,whitePoint:Zh,transfer:La,toXYZ:Kh,fromXYZ:$h,luminanceCoefficients:jh,workingColorSpaceConfig:{unpackColorSpace:Mn},outputColorSpaceConfig:{drawingBufferColorSpace:Mn}},[Mn]:{primaries:Yh,whitePoint:Zh,transfer:le,toXYZ:Kh,fromXYZ:$h,luminanceCoefficients:jh,outputColorSpaceConfig:{drawingBufferColorSpace:Mn}}});let ys;class H_{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ys===void 0&&(ys=ga("canvas")),ys.width=t.width,ys.height=t.height;const i=ys.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ys}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ga("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=_i(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(_i(e[i]/255)*255):e[i]=_i(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let G_=0;class vd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:G_++}),this.uuid=xr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Za(s[o].image)):r.push(Za(s[o]))}else r=Za(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Za(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?H_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let V_=0;class sn extends gs{constructor(t=sn.DEFAULT_IMAGE,e=sn.DEFAULT_MAPPING,i=es,s=es,r=Zn,o=ns,a=On,l=yi,c=sn.DEFAULT_ANISOTROPY,h=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:V_++}),this.uuid=xr(),this.name="",this.source=new vd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==rd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ec:t.x=t.x-Math.floor(t.x);break;case es:t.x=t.x<0?0:1;break;case nc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ec:t.y=t.y-Math.floor(t.y);break;case es:t.y=t.y<0?0:1;break;case nc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=rd;sn.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,i=0,s=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,v=(d+1)/2,L=(p+1)/2,A=(h+u)/4,T=(f+g)/4,R=(_+m)/4;return x>v&&x>L?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=A/i,r=T/i):v>L?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=A/s,r=R/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=T/r,s=R/r),this.set(i,s,r,e),this}let E=Math.sqrt((m-_)*(m-_)+(f-g)*(f-g)+(u-h)*(u-h));return Math.abs(E)<.001&&(E=1),this.x=(m-_)/E,this.y=(f-g)/E,this.z=(u-h)/E,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class W_ extends gs{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new sn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new vd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ps extends W_{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class xd extends sn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=kn,this.minFilter=kn,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class X_ extends sn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=kn,this.minFilter=kn,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ms{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3];const u=r[o+0],d=r[o+1],_=r[o+2],g=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=u,t[e+1]=d,t[e+2]=_,t[e+3]=g;return}if(f!==g||l!==u||c!==d||h!==_){let m=1-a;const p=l*u+c*d+h*_+f*g,E=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const L=Math.sqrt(x),A=Math.atan2(L,p*E);m=Math.sin(m*A)/L,a=Math.sin(a*A)/L}const v=a*E;if(l=l*m+u*v,c=c*m+d*v,h=h*m+_*v,f=f*m+g*v,m===1-a){const L=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=L,c*=L,h*=L,f*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=r[o],u=r[o+1],d=r[o+2],_=r[o+3];return t[e]=a*_+h*f+l*d-c*u,t[e+1]=l*_+h*u+c*f-a*d,t[e+2]=c*_+h*d+a*u-l*f,t[e+3]=h*_-a*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),f=a(r/2),u=l(i/2),d=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=u*h*f+c*d*_,this._y=c*d*f-u*h*_,this._z=c*h*_+u*d*f,this._w=c*h*f-u*d*_;break;case"YXZ":this._x=u*h*f+c*d*_,this._y=c*d*f-u*h*_,this._z=c*h*_-u*d*f,this._w=c*h*f+u*d*_;break;case"ZXY":this._x=u*h*f-c*d*_,this._y=c*d*f+u*h*_,this._z=c*h*_+u*d*f,this._w=c*h*f-u*d*_;break;case"ZYX":this._x=u*h*f-c*d*_,this._y=c*d*f+u*h*_,this._z=c*h*_-u*d*f,this._w=c*h*f+u*d*_;break;case"YZX":this._x=u*h*f+c*d*_,this._y=c*d*f+u*h*_,this._z=c*h*_-u*d*f,this._w=c*h*f-u*d*_;break;case"XZY":this._x=u*h*f-c*d*_,this._y=c*d*f-u*h*_,this._z=c*h*_+u*d*f,this._w=c*h*f+u*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=i+a+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Fe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*f+this._w*u,this._x=i*f+this._x*u,this._y=s*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,i=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),f=2*(r*i-o*e);return this.x=e+l*c+o*f-a*h,this.y=i+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ka.copy(this).projectOnVector(t),this.sub(Ka)}reflect(t){return this.sub(Ka.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ka=new D,Jh=new ms;class fo{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Cn):Cn.fromBufferAttribute(r,o),Cn.applyMatrix4(t.matrixWorld),this.expandByPoint(Cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),yo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yo.copy(i.boundingBox)),yo.applyMatrix4(t.matrixWorld),this.union(yo)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Cn),Cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wr),So.subVectors(this.max,wr),Ss.subVectors(t.a,wr),Es.subVectors(t.b,wr),bs.subVectors(t.c,wr),wi.subVectors(Es,Ss),Ai.subVectors(bs,Es),Vi.subVectors(Ss,bs);let e=[0,-wi.z,wi.y,0,-Ai.z,Ai.y,0,-Vi.z,Vi.y,wi.z,0,-wi.x,Ai.z,0,-Ai.x,Vi.z,0,-Vi.x,-wi.y,wi.x,0,-Ai.y,Ai.x,0,-Vi.y,Vi.x,0];return!$a(e,Ss,Es,bs,So)||(e=[1,0,0,0,1,0,0,0,1],!$a(e,Ss,Es,bs,So))?!1:(Eo.crossVectors(wi,Ai),e=[Eo.x,Eo.y,Eo.z],$a(e,Ss,Es,bs,So))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ii),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ii=[new D,new D,new D,new D,new D,new D,new D,new D],Cn=new D,yo=new fo,Ss=new D,Es=new D,bs=new D,wi=new D,Ai=new D,Vi=new D,wr=new D,So=new D,Eo=new D,Wi=new D;function $a(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Wi.fromArray(n,r);const a=s.x*Math.abs(Wi.x)+s.y*Math.abs(Wi.y)+s.z*Math.abs(Wi.z),l=t.dot(Wi),c=e.dot(Wi),h=i.dot(Wi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const q_=new fo,Ar=new D,Ja=new D;class po{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):q_.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ar.subVectors(t,this.center);const e=Ar.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ar,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ja.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ar.copy(t.center).add(Ja)),this.expandByPoint(Ar.copy(t.center).sub(Ja))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const si=new D,Qa=new D,bo=new D,Ri=new D,tl=new D,To=new D,el=new D;class Da{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,si)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=si.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(si.copy(this.origin).addScaledVector(this.direction,e),si.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Qa.copy(t).add(e).multiplyScalar(.5),bo.copy(e).sub(t).normalize(),Ri.copy(this.origin).sub(Qa);const r=t.distanceTo(e)*.5,o=-this.direction.dot(bo),a=Ri.dot(this.direction),l=-Ri.dot(bo),c=Ri.lengthSq(),h=Math.abs(1-o*o);let f,u,d,_;if(h>0)if(f=o*l-a,u=o*a-l,_=r*h,f>=0)if(u>=-_)if(u<=_){const g=1/h;f*=g,u*=g,d=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-_?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=_?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Qa).addScaledVector(bo,u),d}intersectSphere(t,e){si.subVectors(t.center,this.origin);const i=si.dot(this.direction),s=si.dot(si)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,si)!==null}intersectTriangle(t,e,i,s,r){tl.subVectors(e,t),To.subVectors(i,t),el.crossVectors(tl,To);let o=this.direction.dot(el),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ri.subVectors(this.origin,t);const l=a*this.direction.dot(To.crossVectors(Ri,To));if(l<0)return null;const c=a*this.direction.dot(tl.cross(Ri));if(c<0||l+c>o)return null;const h=-a*Ri.dot(el);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _e{constructor(t,e,i,s,r,o,a,l,c,h,f,u,d,_,g,m){_e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,f,u,d,_,g,m)}set(t,e,i,s,r,o,a,l,c,h,f,u,d,_,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _e().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Ts.setFromMatrixColumn(t,0).length(),r=1/Ts.setFromMatrixColumn(t,1).length(),o=1/Ts.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const u=o*h,d=o*f,_=a*h,g=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+_*c,e[5]=u-g*c,e[9]=-a*l,e[2]=g-u*c,e[6]=_+d*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*h,d=l*f,_=c*h,g=c*f;e[0]=u+g*a,e[4]=_*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=d*a-_,e[6]=g+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*h,d=l*f,_=c*h,g=c*f;e[0]=u-g*a,e[4]=-o*f,e[8]=_+d*a,e[1]=d+_*a,e[5]=o*h,e[9]=g-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*h,d=o*f,_=a*h,g=a*f;e[0]=l*h,e[4]=_*c-d,e[8]=u*c+g,e[1]=l*f,e[5]=g*c+u,e[9]=d*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,d=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=g-u*f,e[8]=_*f+d,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*f+_,e[10]=u-g*f}else if(t.order==="XZY"){const u=o*l,d=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+g,e[5]=o*h,e[9]=d*f-_,e[2]=_*f-d,e[6]=a*h,e[10]=g*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Y_,t,j_)}lookAt(t,e,i){const s=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),Ci.crossVectors(i,an),Ci.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),Ci.crossVectors(i,an)),Ci.normalize(),wo.crossVectors(an,Ci),s[0]=Ci.x,s[4]=wo.x,s[8]=an.x,s[1]=Ci.y,s[5]=wo.y,s[9]=an.y,s[2]=Ci.z,s[6]=wo.z,s[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],f=i[5],u=i[9],d=i[13],_=i[2],g=i[6],m=i[10],p=i[14],E=i[3],x=i[7],v=i[11],L=i[15],A=s[0],T=s[4],R=s[8],y=s[12],M=s[1],C=s[5],B=s[9],I=s[13],z=s[2],V=s[6],H=s[10],q=s[14],G=s[3],tt=s[7],at=s[11],_t=s[15];return r[0]=o*A+a*M+l*z+c*G,r[4]=o*T+a*C+l*V+c*tt,r[8]=o*R+a*B+l*H+c*at,r[12]=o*y+a*I+l*q+c*_t,r[1]=h*A+f*M+u*z+d*G,r[5]=h*T+f*C+u*V+d*tt,r[9]=h*R+f*B+u*H+d*at,r[13]=h*y+f*I+u*q+d*_t,r[2]=_*A+g*M+m*z+p*G,r[6]=_*T+g*C+m*V+p*tt,r[10]=_*R+g*B+m*H+p*at,r[14]=_*y+g*I+m*q+p*_t,r[3]=E*A+x*M+v*z+L*G,r[7]=E*T+x*C+v*V+L*tt,r[11]=E*R+x*B+v*H+L*at,r[15]=E*y+x*I+v*q+L*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],_=t[3],g=t[7],m=t[11],p=t[15];return _*(+r*l*f-s*c*f-r*a*u+i*c*u+s*a*d-i*l*d)+g*(+e*l*d-e*c*u+r*o*u-s*o*d+s*c*h-r*l*h)+m*(+e*c*f-e*a*d-r*o*f+i*o*d+r*a*h-i*c*h)+p*(-s*a*h-e*l*f+e*a*u+s*o*f-i*o*u+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],_=t[12],g=t[13],m=t[14],p=t[15],E=f*m*c-g*u*c+g*l*d-a*m*d-f*l*p+a*u*p,x=_*u*c-h*m*c-_*l*d+o*m*d+h*l*p-o*u*p,v=h*g*c-_*f*c+_*a*d-o*g*d-h*a*p+o*f*p,L=_*f*l-h*g*l-_*a*u+o*g*u+h*a*m-o*f*m,A=e*E+i*x+s*v+r*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return t[0]=E*T,t[1]=(g*u*r-f*m*r-g*s*d+i*m*d+f*s*p-i*u*p)*T,t[2]=(a*m*r-g*l*r+g*s*c-i*m*c-a*s*p+i*l*p)*T,t[3]=(f*l*r-a*u*r-f*s*c+i*u*c+a*s*d-i*l*d)*T,t[4]=x*T,t[5]=(h*m*r-_*u*r+_*s*d-e*m*d-h*s*p+e*u*p)*T,t[6]=(_*l*r-o*m*r-_*s*c+e*m*c+o*s*p-e*l*p)*T,t[7]=(o*u*r-h*l*r+h*s*c-e*u*c-o*s*d+e*l*d)*T,t[8]=v*T,t[9]=(_*f*r-h*g*r-_*i*d+e*g*d+h*i*p-e*f*p)*T,t[10]=(o*g*r-_*a*r+_*i*c-e*g*c-o*i*p+e*a*p)*T,t[11]=(h*a*r-o*f*r-h*i*c+e*f*c+o*i*d-e*a*d)*T,t[12]=L*T,t[13]=(h*g*s-_*f*s+_*i*u-e*g*u-h*i*m+e*f*m)*T,t[14]=(_*a*s-o*g*s-_*i*l+e*g*l+o*i*m-e*a*m)*T,t[15]=(o*f*s-h*a*s+h*i*l-e*f*l-o*i*u+e*a*u)*T,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,f=a+a,u=r*c,d=r*h,_=r*f,g=o*h,m=o*f,p=a*f,E=l*c,x=l*h,v=l*f,L=i.x,A=i.y,T=i.z;return s[0]=(1-(g+p))*L,s[1]=(d+v)*L,s[2]=(_-x)*L,s[3]=0,s[4]=(d-v)*A,s[5]=(1-(u+p))*A,s[6]=(m+E)*A,s[7]=0,s[8]=(_+x)*T,s[9]=(m-E)*T,s[10]=(1-(u+g))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Ts.set(s[0],s[1],s[2]).length();const o=Ts.set(s[4],s[5],s[6]).length(),a=Ts.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Pn.copy(this);const c=1/r,h=1/o,f=1/a;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=h,Pn.elements[5]*=h,Pn.elements[6]*=h,Pn.elements[8]*=f,Pn.elements[9]*=f,Pn.elements[10]*=f,e.setFromRotationMatrix(Pn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=mi){const l=this.elements,c=2*r/(e-t),h=2*r/(i-s),f=(e+t)/(e-t),u=(i+s)/(i-s);let d,_;if(a===mi)d=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===_a)d=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=mi){const l=this.elements,c=1/(e-t),h=1/(i-s),f=1/(o-r),u=(e+t)*c,d=(i+s)*h;let _,g;if(a===mi)_=(o+r)*f,g=-2*f;else if(a===_a)_=r*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ts=new D,Pn=new _e,Y_=new D(0,0,0),j_=new D(1,1,1),Ci=new D,wo=new D,an=new D,Qh=new _e,tu=new ms;class Hn{constructor(t=0,e=0,i=0,s=Hn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Fe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Qh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return tu.setFromEuler(this),this.setFromQuaternion(tu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hn.DEFAULT_ORDER="XYZ";class Md{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Z_=0;const eu=new D,ws=new ms,ri=new _e,Ao=new D,Rr=new D,K_=new D,$_=new ms,nu=new D(1,0,0),iu=new D(0,1,0),su=new D(0,0,1),ru={type:"added"},J_={type:"removed"},As={type:"childadded",child:null},nl={type:"childremoved",child:null};class Ie extends gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Z_++}),this.uuid=xr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ie.DEFAULT_UP.clone();const t=new D,e=new Hn,i=new ms,s=new D(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _e},normalMatrix:{value:new Vt}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=Ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Md,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ws.setFromAxisAngle(t,e),this.quaternion.multiply(ws),this}rotateOnWorldAxis(t,e){return ws.setFromAxisAngle(t,e),this.quaternion.premultiply(ws),this}rotateX(t){return this.rotateOnAxis(nu,t)}rotateY(t){return this.rotateOnAxis(iu,t)}rotateZ(t){return this.rotateOnAxis(su,t)}translateOnAxis(t,e){return eu.copy(t).applyQuaternion(this.quaternion),this.position.add(eu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nu,t)}translateY(t){return this.translateOnAxis(iu,t)}translateZ(t){return this.translateOnAxis(su,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ao.copy(t):Ao.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(Rr,Ao,this.up):ri.lookAt(Ao,Rr,this.up),this.quaternion.setFromRotationMatrix(ri),s&&(ri.extractRotation(s.matrixWorld),ws.setFromRotationMatrix(ri),this.quaternion.premultiply(ws.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ru),As.child=t,this.dispatchEvent(As),As.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(J_),nl.child=t,this.dispatchEvent(nl),nl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ru),As.child=t,this.dispatchEvent(As),As.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,t,K_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,$_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),u=o(t.skeletons),d=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ie.DEFAULT_UP=new D(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new D,oi=new D,il=new D,ai=new D,Rs=new D,Cs=new D,ou=new D,sl=new D,rl=new D,ol=new D,al=new he,ll=new he,cl=new he;class Sn{constructor(t=new D,e=new D,i=new D){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Ln.subVectors(t,e),s.cross(Ln);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Ln.subVectors(s,e),oi.subVectors(i,e),il.subVectors(t,e);const o=Ln.dot(Ln),a=Ln.dot(oi),l=Ln.dot(il),c=oi.dot(oi),h=oi.dot(il),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const u=1/f,d=(c*l-a*h)*u,_=(o*h-a*l)*u;return r.set(1-d-_,_,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ai.x),l.addScaledVector(o,ai.y),l.addScaledVector(a,ai.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return al.setScalar(0),ll.setScalar(0),cl.setScalar(0),al.fromBufferAttribute(t,e),ll.fromBufferAttribute(t,i),cl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(al,r.x),o.addScaledVector(ll,r.y),o.addScaledVector(cl,r.z),o}static isFrontFacing(t,e,i,s){return Ln.subVectors(i,e),oi.subVectors(t,e),Ln.cross(oi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ln.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Ln.cross(oi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Sn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Sn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Rs.subVectors(s,i),Cs.subVectors(r,i),sl.subVectors(t,i);const l=Rs.dot(sl),c=Cs.dot(sl);if(l<=0&&c<=0)return e.copy(i);rl.subVectors(t,s);const h=Rs.dot(rl),f=Cs.dot(rl);if(h>=0&&f<=h)return e.copy(s);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Rs,o);ol.subVectors(t,r);const d=Rs.dot(ol),_=Cs.dot(ol);if(_>=0&&d<=_)return e.copy(r);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(i).addScaledVector(Cs,a);const m=h*_-d*f;if(m<=0&&f-h>=0&&d-_>=0)return ou.subVectors(r,s),a=(f-h)/(f-h+(d-_)),e.copy(s).addScaledVector(ou,a);const p=1/(m+g+u);return o=g*p,a=u*p,e.copy(i).addScaledVector(Rs,o).addScaledVector(Cs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const yd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},Ro={h:0,s:0,l:0};function hl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Yt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=te.workingColorSpace){if(t=N_(t,1),e=Fe(e,0,1),i=Fe(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=hl(o,r,t+1/3),this.g=hl(o,r,t),this.b=hl(o,r,t-1/3)}return te.toWorkingColorSpace(this,s),this}setStyle(t,e=Mn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Mn){const i=yd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_i(t.r),this.g=_i(t.g),this.b=_i(t.b),this}copyLinearToSRGB(t){return this.r=Xs(t.r),this.g=Xs(t.g),this.b=Xs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Mn){return te.fromWorkingColorSpace(ke.copy(this),t),Math.round(Fe(ke.r*255,0,255))*65536+Math.round(Fe(ke.g*255,0,255))*256+Math.round(Fe(ke.b*255,0,255))}getHexString(t=Mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(ke.copy(this),e);const i=ke.r,s=ke.g,r=ke.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=Mn){te.fromWorkingColorSpace(ke.copy(this),t);const e=ke.r,i=ke.g,s=ke.b;return t!==Mn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Pi),this.setHSL(Pi.h+t,Pi.s+e,Pi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Pi),t.getHSL(Ro);const i=Ya(Pi.h,Ro.h,e),s=Ya(Pi.s,Ro.s,e),r=Ya(Pi.l,Ro.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ke=new Yt;Yt.NAMES=yd;let Q_=0;class Hi extends gs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Q_++}),this.uuid=xr(),this.name="",this.blending=Vs,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wl,this.blendDst=Xl,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ms,this.stencilZFail=Ms,this.stencilZPass=Ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(i.blending=this.blending),this.side!==Mi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wl&&(i.blendSrc=this.blendSrc),this.blendDst!==Xl&&(i.blendDst=this.blendDst),this.blendEquation!==Ki&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==or&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ms&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ms&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ms&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class gi extends Hi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=$c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const be=new D,Co=new nt;class bn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Wh,this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Co.fromBufferAttribute(this,e),Co.applyMatrix3(t),this.setXY(e,Co.x,Co.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Tr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ke(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Tr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Tr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Tr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Tr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),i=Ke(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),i=Ke(i,this.array),s=Ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),i=Ke(i,this.array),s=Ke(s,this.array),r=Ke(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wh&&(t.usage=this.usage),t}}class Sd extends bn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Ed extends bn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ne extends bn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let tg=0;const mn=new _e,ul=new Ie,Ps=new D,ln=new fo,Cr=new fo,Le=new D;class Ee extends gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=xr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gd(t)?Ed:Sd)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Vt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mn.makeRotationFromQuaternion(t),this.applyMatrix4(mn),this}rotateX(t){return mn.makeRotationX(t),this.applyMatrix4(mn),this}rotateY(t){return mn.makeRotationY(t),this.applyMatrix4(mn),this}rotateZ(t){return mn.makeRotationZ(t),this.applyMatrix4(mn),this}translate(t,e,i){return mn.makeTranslation(t,e,i),this.applyMatrix4(mn),this}scale(t,e,i){return mn.makeScale(t,e,i),this.applyMatrix4(mn),this}lookAt(t){return ul.lookAt(t),ul.updateMatrix(),this.applyMatrix4(ul.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ne(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new po);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Cr.setFromBufferAttribute(a),this.morphTargetsRelative?(Le.addVectors(ln.min,Cr.min),ln.expandByPoint(Le),Le.addVectors(ln.max,Cr.max),ln.expandByPoint(Le)):(ln.expandByPoint(Cr.min),ln.expandByPoint(Cr.max))}ln.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Le.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Le));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Le.fromBufferAttribute(a,c),l&&(Ps.fromBufferAttribute(t,c),Le.add(Ps)),s=Math.max(s,i.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new D,l[R]=new D;const c=new D,h=new D,f=new D,u=new nt,d=new nt,_=new nt,g=new D,m=new D;function p(R,y,M){c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,y),f.fromBufferAttribute(i,M),u.fromBufferAttribute(r,R),d.fromBufferAttribute(r,y),_.fromBufferAttribute(r,M),h.sub(c),f.sub(c),d.sub(u),_.sub(u);const C=1/(d.x*_.y-_.x*d.y);isFinite(C)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(C),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-_.x).multiplyScalar(C),a[R].add(g),a[y].add(g),a[M].add(g),l[R].add(m),l[y].add(m),l[M].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let R=0,y=E.length;R<y;++R){const M=E[R],C=M.start,B=M.count;for(let I=C,z=C+B;I<z;I+=3)p(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const x=new D,v=new D,L=new D,A=new D;function T(R){L.fromBufferAttribute(s,R),A.copy(L);const y=a[R];x.copy(y),x.sub(L.multiplyScalar(L.dot(y))).normalize(),v.crossVectors(A,y);const C=v.dot(l[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,C)}for(let R=0,y=E.length;R<y;++R){const M=E[R],C=M.start,B=M.count;for(let I=C,z=C+B;I<z;I+=3)T(t.getX(I+0)),T(t.getX(I+1)),T(t.getX(I+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new bn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);const s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,f=new D;if(t)for(let u=0,d=t.count;u<d;u+=3){const _=t.getX(u+0),g=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h);let d=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*h;for(let p=0;p<h;p++)u[_++]=c[d++]}return new bn(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ee,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=t(u,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const au=new _e,Xi=new Da,Po=new po,lu=new D,Lo=new D,Do=new D,Io=new D,fl=new D,Uo=new D,cu=new D,No=new D;class pe extends Ie{constructor(t=new Ee,e=new gi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Uo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],f=r[l];h!==0&&(fl.fromBufferAttribute(f,t),o?Uo.addScaledVector(fl,h):Uo.addScaledVector(fl.sub(e),h))}e.add(Uo)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Po.copy(i.boundingSphere),Po.applyMatrix4(r),Xi.copy(t.ray).recast(t.near),!(Po.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(Po,lu)===null||Xi.origin.distanceToSquared(lu)>(t.far-t.near)**2))&&(au.copy(r).invert(),Xi.copy(t.ray).applyMatrix4(au),!(i.boundingBox!==null&&Xi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Xi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=u.length;_<g;_++){const m=u[_],p=o[m.materialIndex],E=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=E,L=x;v<L;v+=3){const A=a.getX(v),T=a.getX(v+1),R=a.getX(v+2);s=Fo(this,p,t,i,c,h,f,A,T,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const E=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);s=Fo(this,o,t,i,c,h,f,E,x,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=u.length;_<g;_++){const m=u[_],p=o[m.materialIndex],E=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=E,L=x;v<L;v+=3){const A=v,T=v+1,R=v+2;s=Fo(this,p,t,i,c,h,f,A,T,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const E=m,x=m+1,v=m+2;s=Fo(this,o,t,i,c,h,f,E,x,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function eg(n,t,e,i,s,r,o,a){let l;if(t.side===nn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Mi,a),l===null)return null;No.copy(a),No.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(No);return c<e.near||c>e.far?null:{distance:c,point:No.clone(),object:n}}function Fo(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Lo),n.getVertexPosition(l,Do),n.getVertexPosition(c,Io);const h=eg(n,t,e,i,Lo,Do,Io,cu);if(h){const f=new D;Sn.getBarycoord(cu,Lo,Do,Io,f),s&&(h.uv=Sn.getInterpolatedAttribute(s,a,l,c,f,new nt)),r&&(h.uv1=Sn.getInterpolatedAttribute(r,a,l,c,f,new nt)),o&&(h.normal=Sn.getInterpolatedAttribute(o,a,l,c,f,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new D,materialIndex:0};Sn.getNormal(Lo,Do,Io,u.normal),h.face=u,h.barycoord=f}return h}class Mr extends Ee{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],f=[];let u=0,d=0;_("z","y","x",-1,-1,i,e,t,o,r,0),_("z","y","x",1,-1,i,e,-t,o,r,1),_("x","z","y",1,1,t,i,e,s,o,2),_("x","z","y",1,-1,t,i,-e,s,o,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(f,2));function _(g,m,p,E,x,v,L,A,T,R,y){const M=v/T,C=L/R,B=v/2,I=L/2,z=A/2,V=T+1,H=R+1;let q=0,G=0;const tt=new D;for(let at=0;at<H;at++){const _t=at*C-I;for(let Ut=0;Ut<V;Ut++){const Wt=Ut*M-B;tt[g]=Wt*E,tt[m]=_t*x,tt[p]=z,c.push(tt.x,tt.y,tt.z),tt[g]=0,tt[m]=0,tt[p]=A>0?1:-1,h.push(tt.x,tt.y,tt.z),f.push(Ut/T),f.push(1-at/R),q+=1}}for(let at=0;at<R;at++)for(let _t=0;_t<T;_t++){const Ut=u+_t+V*at,Wt=u+_t+V*(at+1),j=u+(_t+1)+V*(at+1),st=u+(_t+1)+V*at;l.push(Ut,Wt,st),l.push(Wt,j,st),G+=6}a.addGroup(d,G,y),d+=G,u+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ur(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ve(n){const t={};for(let e=0;e<n.length;e++){const i=ur(n[e]);for(const s in i)t[s]=i[s]}return t}function ng(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function bd(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const ig={clone:ur,merge:Ve};var sg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ki extends Hi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sg,this.fragmentShader=rg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ur(t.uniforms),this.uniformsGroups=ng(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Td extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=mi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Li=new D,hu=new nt,uu=new nt;class dn extends Td{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Cc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cc*2*Math.atan(Math.tan(Xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Li.x,Li.y).multiplyScalar(-t/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Li.x,Li.y).multiplyScalar(-t/Li.z)}getViewSize(t,e){return this.getViewBounds(t,hu,uu),e.subVectors(uu,hu)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Xr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ls=-90,Ds=1;class og extends Ie{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new dn(Ls,Ds,t,e);s.layers=this.layers,this.add(s);const r=new dn(Ls,Ds,t,e);r.layers=this.layers,this.add(r);const o=new dn(Ls,Ds,t,e);o.layers=this.layers,this.add(o);const a=new dn(Ls,Ds,t,e);a.layers=this.layers,this.add(a);const l=new dn(Ls,Ds,t,e);l.layers=this.layers,this.add(l);const c=new dn(Ls,Ds,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===mi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===_a)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class wd extends sn{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ar,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ag extends ps{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new wd(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Zn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Mr(5,5,5),r=new ki({name:"CubemapFromEquirect",uniforms:ur(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:Bi});r.uniforms.tEquirect.value=e;const o=new pe(s,r),a=e.minFilter;return e.minFilter===ns&&(e.minFilter=Zn),new og(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const dl=new D,lg=new D,cg=new Vt;class Di{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=dl.subVectors(i,e).cross(lg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(dl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||cg.getNormalMatrix(t),s=this.coplanarPoint(dl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qi=new po,Oo=new D;class rh{constructor(t=new Di,e=new Di,i=new Di,s=new Di,r=new Di,o=new Di){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=mi){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],f=s[6],u=s[7],d=s[8],_=s[9],g=s[10],m=s[11],p=s[12],E=s[13],x=s[14],v=s[15];if(i[0].setComponents(l-r,u-c,m-d,v-p).normalize(),i[1].setComponents(l+r,u+c,m+d,v+p).normalize(),i[2].setComponents(l+o,u+h,m+_,v+E).normalize(),i[3].setComponents(l-o,u-h,m-_,v-E).normalize(),i[4].setComponents(l-a,u-f,m-g,v-x).normalize(),e===mi)i[5].setComponents(l+a,u+f,m+g,v+x).normalize();else if(e===_a)i[5].setComponents(a,f,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(t){return qi.center.set(0,0,0),qi.radius=.7071067811865476,qi.applyMatrix4(t.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Oo.x=s.normal.x>0?t.max.x:t.min.x,Oo.y=s.normal.y>0?t.max.y:t.min.y,Oo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Oo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ad(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function hg(n){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,f=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const h=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,h);else{f.sort((d,_)=>d.start-_.start);let u=0;for(let d=1;d<f.length;d++){const _=f[u],g=f[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++u,f[u]=g)}f.length=u+1;for(let d=0,_=f.length;d<_;d++){const g=f[d];n.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class mo extends Ee{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,f=t/a,u=e/l,d=[],_=[],g=[],m=[];for(let p=0;p<h;p++){const E=p*u-o;for(let x=0;x<c;x++){const v=x*f-r;_.push(v,-E,0),g.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<a;E++){const x=E+c*p,v=E+c*(p+1),L=E+1+c*(p+1),A=E+1+c*p;d.push(x,v,A),d.push(v,L,A)}this.setIndex(d),this.setAttribute("position",new ne(_,3)),this.setAttribute("normal",new ne(g,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mo(t.width,t.height,t.widthSegments,t.heightSegments)}}var ug=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_g=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Mg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Eg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Tg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ag=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ig=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ug=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ng=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Fg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Og=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Wg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$g=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Qg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ev=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,iv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,sv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ov=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,av=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,uv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_v=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Mv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ev=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Av=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Cv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Pv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Iv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Uv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ov=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,kv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Yv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Zv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Kv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$v=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Jv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,t0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,e0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,n0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,i0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,s0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,r0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,o0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,a0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,l0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,c0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const h0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,u0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,g0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,v0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,x0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,M0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,y0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,E0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,b0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,T0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,C0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,L0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,D0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,N0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,z0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,k0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,H0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,G0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,V0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qt={alphahash_fragment:ug,alphahash_pars_fragment:fg,alphamap_fragment:dg,alphamap_pars_fragment:pg,alphatest_fragment:mg,alphatest_pars_fragment:_g,aomap_fragment:gg,aomap_pars_fragment:vg,batching_pars_vertex:xg,batching_vertex:Mg,begin_vertex:yg,beginnormal_vertex:Sg,bsdfs:Eg,iridescence_fragment:bg,bumpmap_pars_fragment:Tg,clipping_planes_fragment:wg,clipping_planes_pars_fragment:Ag,clipping_planes_pars_vertex:Rg,clipping_planes_vertex:Cg,color_fragment:Pg,color_pars_fragment:Lg,color_pars_vertex:Dg,color_vertex:Ig,common:Ug,cube_uv_reflection_fragment:Ng,defaultnormal_vertex:Fg,displacementmap_pars_vertex:Og,displacementmap_vertex:Bg,emissivemap_fragment:zg,emissivemap_pars_fragment:kg,colorspace_fragment:Hg,colorspace_pars_fragment:Gg,envmap_fragment:Vg,envmap_common_pars_fragment:Wg,envmap_pars_fragment:Xg,envmap_pars_vertex:qg,envmap_physical_pars_fragment:iv,envmap_vertex:Yg,fog_vertex:jg,fog_pars_vertex:Zg,fog_fragment:Kg,fog_pars_fragment:$g,gradientmap_pars_fragment:Jg,lightmap_pars_fragment:Qg,lights_lambert_fragment:tv,lights_lambert_pars_fragment:ev,lights_pars_begin:nv,lights_toon_fragment:sv,lights_toon_pars_fragment:rv,lights_phong_fragment:ov,lights_phong_pars_fragment:av,lights_physical_fragment:lv,lights_physical_pars_fragment:cv,lights_fragment_begin:hv,lights_fragment_maps:uv,lights_fragment_end:fv,logdepthbuf_fragment:dv,logdepthbuf_pars_fragment:pv,logdepthbuf_pars_vertex:mv,logdepthbuf_vertex:_v,map_fragment:gv,map_pars_fragment:vv,map_particle_fragment:xv,map_particle_pars_fragment:Mv,metalnessmap_fragment:yv,metalnessmap_pars_fragment:Sv,morphinstance_vertex:Ev,morphcolor_vertex:bv,morphnormal_vertex:Tv,morphtarget_pars_vertex:wv,morphtarget_vertex:Av,normal_fragment_begin:Rv,normal_fragment_maps:Cv,normal_pars_fragment:Pv,normal_pars_vertex:Lv,normal_vertex:Dv,normalmap_pars_fragment:Iv,clearcoat_normal_fragment_begin:Uv,clearcoat_normal_fragment_maps:Nv,clearcoat_pars_fragment:Fv,iridescence_pars_fragment:Ov,opaque_fragment:Bv,packing:zv,premultiplied_alpha_fragment:kv,project_vertex:Hv,dithering_fragment:Gv,dithering_pars_fragment:Vv,roughnessmap_fragment:Wv,roughnessmap_pars_fragment:Xv,shadowmap_pars_fragment:qv,shadowmap_pars_vertex:Yv,shadowmap_vertex:jv,shadowmask_pars_fragment:Zv,skinbase_vertex:Kv,skinning_pars_vertex:$v,skinning_vertex:Jv,skinnormal_vertex:Qv,specularmap_fragment:t0,specularmap_pars_fragment:e0,tonemapping_fragment:n0,tonemapping_pars_fragment:i0,transmission_fragment:s0,transmission_pars_fragment:r0,uv_pars_fragment:o0,uv_pars_vertex:a0,uv_vertex:l0,worldpos_vertex:c0,background_vert:h0,background_frag:u0,backgroundCube_vert:f0,backgroundCube_frag:d0,cube_vert:p0,cube_frag:m0,depth_vert:_0,depth_frag:g0,distanceRGBA_vert:v0,distanceRGBA_frag:x0,equirect_vert:M0,equirect_frag:y0,linedashed_vert:S0,linedashed_frag:E0,meshbasic_vert:b0,meshbasic_frag:T0,meshlambert_vert:w0,meshlambert_frag:A0,meshmatcap_vert:R0,meshmatcap_frag:C0,meshnormal_vert:P0,meshnormal_frag:L0,meshphong_vert:D0,meshphong_frag:I0,meshphysical_vert:U0,meshphysical_frag:N0,meshtoon_vert:F0,meshtoon_frag:O0,points_vert:B0,points_frag:z0,shadow_vert:k0,shadow_frag:H0,sprite_vert:G0,sprite_frag:V0},ht={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},qn={basic:{uniforms:Ve([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Ve([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Yt(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Ve([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Ve([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Ve([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Yt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Ve([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Ve([ht.points,ht.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Ve([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Ve([ht.common,ht.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Ve([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Ve([ht.sprite,ht.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:Ve([ht.common,ht.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:Ve([ht.lights,ht.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};qn.physical={uniforms:Ve([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const Bo={r:0,b:0,g:0},Yi=new Hn,W0=new _e;function X0(n,t,e,i,s,r,o){const a=new Yt(0);let l=r===!0?0:1,c,h,f=null,u=0,d=null;function _(E){let x=E.isScene===!0?E.background:null;return x&&x.isTexture&&(x=(E.backgroundBlurriness>0?e:t).get(x)),x}function g(E){let x=!1;const v=_(E);v===null?p(a,l):v&&v.isColor&&(p(v,1),x=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,x){const v=_(x);v&&(v.isCubeTexture||v.mapping===Pa)?(h===void 0&&(h=new pe(new Mr(1,1,1),new ki({name:"BackgroundCubeMaterial",uniforms:ur(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Yi.copy(x.backgroundRotation),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(W0.makeRotationFromEuler(Yi)),h.material.toneMapped=te.getTransfer(v.colorSpace)!==le,(f!==v||u!==v.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,f=v,u=v.version,d=n.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new pe(new mo(2,2),new ki({name:"BackgroundMaterial",uniforms:ur(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=te.getTransfer(v.colorSpace)!==le,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||u!==v.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=v,u=v.version,d=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,x){E.getRGB(Bo,bd(n)),i.buffers.color.setClear(Bo.r,Bo.g,Bo.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(E,x=1){a.set(E),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(a,l)},render:g,addToRenderList:m}}function q0(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,o=!1;function a(M,C,B,I,z){let V=!1;const H=f(I,B,C);r!==H&&(r=H,c(r.object)),V=d(M,I,B,z),V&&_(M,I,B,z),z!==null&&t.update(z,n.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,v(M,C,B,I),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function f(M,C,B){const I=B.wireframe===!0;let z=i[M.id];z===void 0&&(z={},i[M.id]=z);let V=z[C.id];V===void 0&&(V={},z[C.id]=V);let H=V[I];return H===void 0&&(H=u(l()),V[I]=H),H}function u(M){const C=[],B=[],I=[];for(let z=0;z<e;z++)C[z]=0,B[z]=0,I[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:B,attributeDivisors:I,object:M,attributes:{},index:null}}function d(M,C,B,I){const z=r.attributes,V=C.attributes;let H=0;const q=B.getAttributes();for(const G in q)if(q[G].location>=0){const at=z[G];let _t=V[G];if(_t===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(_t=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(_t=M.instanceColor)),at===void 0||at.attribute!==_t||_t&&at.data!==_t.data)return!0;H++}return r.attributesNum!==H||r.index!==I}function _(M,C,B,I){const z={},V=C.attributes;let H=0;const q=B.getAttributes();for(const G in q)if(q[G].location>=0){let at=V[G];at===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(at=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(at=M.instanceColor));const _t={};_t.attribute=at,at&&at.data&&(_t.data=at.data),z[G]=_t,H++}r.attributes=z,r.attributesNum=H,r.index=I}function g(){const M=r.newAttributes;for(let C=0,B=M.length;C<B;C++)M[C]=0}function m(M){p(M,0)}function p(M,C){const B=r.newAttributes,I=r.enabledAttributes,z=r.attributeDivisors;B[M]=1,I[M]===0&&(n.enableVertexAttribArray(M),I[M]=1),z[M]!==C&&(n.vertexAttribDivisor(M,C),z[M]=C)}function E(){const M=r.newAttributes,C=r.enabledAttributes;for(let B=0,I=C.length;B<I;B++)C[B]!==M[B]&&(n.disableVertexAttribArray(B),C[B]=0)}function x(M,C,B,I,z,V,H){H===!0?n.vertexAttribIPointer(M,C,B,z,V):n.vertexAttribPointer(M,C,B,I,z,V)}function v(M,C,B,I){g();const z=I.attributes,V=B.getAttributes(),H=C.defaultAttributeValues;for(const q in V){const G=V[q];if(G.location>=0){let tt=z[q];if(tt===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(tt=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(tt=M.instanceColor)),tt!==void 0){const at=tt.normalized,_t=tt.itemSize,Ut=t.get(tt);if(Ut===void 0)continue;const Wt=Ut.buffer,j=Ut.type,st=Ut.bytesPerElement,Mt=j===n.INT||j===n.UNSIGNED_INT||tt.gpuType===Jc;if(tt.isInterleavedBufferAttribute){const lt=tt.data,bt=lt.stride,Dt=tt.offset;if(lt.isInstancedInterleavedBuffer){for(let It=0;It<G.locationSize;It++)p(G.location+It,lt.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let It=0;It<G.locationSize;It++)m(G.location+It);n.bindBuffer(n.ARRAY_BUFFER,Wt);for(let It=0;It<G.locationSize;It++)x(G.location+It,_t/G.locationSize,j,at,bt*st,(Dt+_t/G.locationSize*It)*st,Mt)}else{if(tt.isInstancedBufferAttribute){for(let lt=0;lt<G.locationSize;lt++)p(G.location+lt,tt.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let lt=0;lt<G.locationSize;lt++)m(G.location+lt);n.bindBuffer(n.ARRAY_BUFFER,Wt);for(let lt=0;lt<G.locationSize;lt++)x(G.location+lt,_t/G.locationSize,j,at,_t*st,_t/G.locationSize*lt*st,Mt)}}else if(H!==void 0){const at=H[q];if(at!==void 0)switch(at.length){case 2:n.vertexAttrib2fv(G.location,at);break;case 3:n.vertexAttrib3fv(G.location,at);break;case 4:n.vertexAttrib4fv(G.location,at);break;default:n.vertexAttrib1fv(G.location,at)}}}}E()}function L(){R();for(const M in i){const C=i[M];for(const B in C){const I=C[B];for(const z in I)h(I[z].object),delete I[z];delete C[B]}delete i[M]}}function A(M){if(i[M.id]===void 0)return;const C=i[M.id];for(const B in C){const I=C[B];for(const z in I)h(I[z].object),delete I[z];delete C[B]}delete i[M.id]}function T(M){for(const C in i){const B=i[C];if(B[M.id]===void 0)continue;const I=B[M.id];for(const z in I)h(I[z].object),delete I[z];delete B[M.id]}}function R(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:y,dispose:L,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:m,disableUnusedAttributes:E}}function Y0(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,f){f!==0&&(n.drawArraysInstanced(i,c,h,f),e.update(h,i,f))}function a(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,f);let d=0;for(let _=0;_<f;_++)d+=h[_];e.update(d,i,1)}function l(c,h,f,u){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],h[_],u[_]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,f);let _=0;for(let g=0;g<f;g++)_+=h[g]*u[g];e.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function j0(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==On&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const R=T===uo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==yi&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==pi&&!R)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=_>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:L,maxSamples:A}}function Z0(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new Di,a=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||i!==0||s;return s=u,i=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){const _=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!s||_===null||_.length===0||r&&!m)r?h(null):c();else{const E=r?0:i,x=E*4;let v=p.clippingState||null;l.value=v,v=h(_,u,x,d);for(let L=0;L!==x;++L)v[L]=e[L];p.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,u,d,_){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=d+g*4,E=u.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=d;x!==g;++x,v+=4)o.copy(f[x]).applyMatrix4(E,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function K0(n){let t=new WeakMap;function e(o,a){return a===Ql?o.mapping=ar:a===tc&&(o.mapping=lr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ql||a===tc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ag(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Rd extends Td{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Os=4,fu=[.125,.215,.35,.446,.526,.582],$i=20,pl=new Rd,du=new Yt;let ml=null,_l=0,gl=0,vl=!1;const Zi=(1+Math.sqrt(5))/2,Is=1/Zi,pu=[new D(-Zi,Is,0),new D(Zi,Is,0),new D(-Is,0,Zi),new D(Is,0,Zi),new D(0,Zi,-Is),new D(0,Zi,Is),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class mu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){ml=this._renderer.getRenderTarget(),_l=this._renderer.getActiveCubeFace(),gl=this._renderer.getActiveMipmapLevel(),vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ml,_l,gl),this._renderer.xr.enabled=vl,t.scissorTest=!1,zo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ar||t.mapping===lr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ml=this._renderer.getRenderTarget(),_l=this._renderer.getActiveCubeFace(),gl=this._renderer.getActiveMipmapLevel(),vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:uo,format:On,colorSpace:vr,depthBuffer:!1},s=_u(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_u(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$0(r)),this._blurMaterial=J0(r,t,e)}return s}_compileMaterial(t){const e=new pe(this._lodPlanes[0],t);this._renderer.compile(e,pl)}_sceneToCubeUV(t,e,i,s){const a=new dn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(du),h.toneMapping=zi,h.autoClear=!1;const d=new gi({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),_=new pe(new Mr,d);let g=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,g=!0):(d.color.copy(du),g=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):E===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const x=this._cubeSize;zo(s,E*x,p>2?x:0,x,x),h.setRenderTarget(s),g&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=u,h.autoClear=f,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===ar||t.mapping===lr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new pe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;zo(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,pl)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=pu[(s-r-1)%pu.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new pe(this._lodPlanes[s],c),u=c.uniforms,d=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*$i-1),g=r/_,m=isFinite(r)?1+Math.floor(h*g):$i;m>$i&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$i}`);const p=[];let E=0;for(let T=0;T<$i;++T){const R=T/g,y=Math.exp(-R*R/2);p.push(y),T===0?E+=y:T<m&&(E+=2*y)}for(let T=0;T<p.length;T++)p[T]=p[T]/E;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:x}=this;u.dTheta.value=_,u.mipInt.value=x-i;const v=this._sizeLods[s],L=3*v*(s>x-Os?s-x+Os:0),A=4*(this._cubeSize-v);zo(e,L,A,3*v,2*v),l.setRenderTarget(e),l.render(f,pl)}}function $0(n){const t=[],e=[],i=[];let s=n;const r=n-Os+1+fu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Os?l=fu[o-n+Os-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,_=6,g=3,m=2,p=1,E=new Float32Array(g*_*d),x=new Float32Array(m*_*d),v=new Float32Array(p*_*d);for(let A=0;A<d;A++){const T=A%3*2/3-1,R=A>2?0:-1,y=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];E.set(y,g*_*A),x.set(u,m*_*A);const M=[A,A,A,A,A,A];v.set(M,p*_*A)}const L=new Ee;L.setAttribute("position",new bn(E,g)),L.setAttribute("uv",new bn(x,m)),L.setAttribute("faceIndex",new bn(v,p)),t.push(L),s>Os&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function _u(n,t,e){const i=new ps(n,t,e);return i.texture.mapping=Pa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function zo(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function J0(n,t,e){const i=new Float32Array($i),s=new D(0,1,0);return new ki({name:"SphericalGaussianBlur",defines:{n:$i,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function gu(){return new ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function vu(){return new ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function oh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Q0(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ql||l===tc,h=l===ar||l===lr;if(c||h){let f=t.get(a);const u=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new mu(n)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new mu(n)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function tx(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Br("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function ex(n,t,e,i){const s={},r=new WeakMap;function o(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const _ in u.attributes)t.remove(u.attributes[_]);for(const _ in u.morphAttributes){const g=u.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)t.remove(g[m])}u.removeEventListener("dispose",o),delete s[u.id];const d=r.get(u);d&&(t.remove(d),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(f){const u=f.attributes;for(const _ in u)t.update(u[_],n.ARRAY_BUFFER);const d=f.morphAttributes;for(const _ in d){const g=d[_];for(let m=0,p=g.length;m<p;m++)t.update(g[m],n.ARRAY_BUFFER)}}function c(f){const u=[],d=f.index,_=f.attributes.position;let g=0;if(d!==null){const E=d.array;g=d.version;for(let x=0,v=E.length;x<v;x+=3){const L=E[x+0],A=E[x+1],T=E[x+2];u.push(L,A,A,T,T,L)}}else if(_!==void 0){const E=_.array;g=_.version;for(let x=0,v=E.length/3-1;x<v;x+=3){const L=x+0,A=x+1,T=x+2;u.push(L,A,A,T,T,L)}}else return;const m=new(gd(u)?Ed:Sd)(u,1);m.version=g;const p=r.get(f);p&&t.remove(p),r.set(f,m)}function h(f){const u=r.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function nx(n,t,e){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){n.drawElements(i,d,r,u*o),e.update(d,i,1)}function c(u,d,_){_!==0&&(n.drawElementsInstanced(i,d,r,u*o,_),e.update(d,i,_))}function h(u,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];e.update(m,i,1)}function f(u,d,_,g){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/o,d[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,u,0,g,0,_);let p=0;for(let E=0;E<_;E++)p+=d[E]*g[E];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function ix(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function sx(n,t,e){const i=new WeakMap,s=new he;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let u=i.get(a);if(u===void 0||u.count!==f){let M=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var d=M;u!==void 0&&u.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let v=0;_===!0&&(v=1),g===!0&&(v=2),m===!0&&(v=3);let L=a.attributes.position.count*v,A=1;L>t.maxTextureSize&&(A=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const T=new Float32Array(L*A*4*f),R=new xd(T,L,A,f);R.type=pi,R.needsUpdate=!0;const y=v*4;for(let C=0;C<f;C++){const B=p[C],I=E[C],z=x[C],V=L*A*4*C;for(let H=0;H<B.count;H++){const q=H*y;_===!0&&(s.fromBufferAttribute(B,H),T[V+q+0]=s.x,T[V+q+1]=s.y,T[V+q+2]=s.z,T[V+q+3]=0),g===!0&&(s.fromBufferAttribute(I,H),T[V+q+4]=s.x,T[V+q+5]=s.y,T[V+q+6]=s.z,T[V+q+7]=0),m===!0&&(s.fromBufferAttribute(z,H),T[V+q+8]=s.x,T[V+q+9]=s.y,T[V+q+10]=s.z,T[V+q+11]=z.itemSize===4?s.w:1)}}u={count:f,texture:R,size:new nt(L,A)},i.set(a,u),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function rx(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,f=t.get(l,h);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Cd extends sn{constructor(t,e,i,s,r,o,a,l,c,h=Ws){if(h!==Ws&&h!==hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ws&&(i=ds),i===void 0&&h===hr&&(i=cr),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:kn,this.minFilter=l!==void 0?l:kn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Pd=new sn,xu=new Cd(1,1),Ld=new xd,Dd=new X_,Id=new wd,Mu=[],yu=[],Su=new Float32Array(16),Eu=new Float32Array(9),bu=new Float32Array(4);function yr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Mu[s];if(r===void 0&&(r=new Float32Array(s),Mu[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Ce(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Pe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ia(n,t){let e=yu[t];e===void 0&&(e=new Int32Array(t),yu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function ox(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function ax(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;n.uniform2fv(this.addr,t),Pe(e,t)}}function lx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;n.uniform3fv(this.addr,t),Pe(e,t)}}function cx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;n.uniform4fv(this.addr,t),Pe(e,t)}}function hx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ce(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,i))return;bu.set(i),n.uniformMatrix2fv(this.addr,!1,bu),Pe(e,i)}}function ux(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ce(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,i))return;Eu.set(i),n.uniformMatrix3fv(this.addr,!1,Eu),Pe(e,i)}}function fx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ce(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,i))return;Su.set(i),n.uniformMatrix4fv(this.addr,!1,Su),Pe(e,i)}}function dx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function px(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;n.uniform2iv(this.addr,t),Pe(e,t)}}function mx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;n.uniform3iv(this.addr,t),Pe(e,t)}}function _x(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;n.uniform4iv(this.addr,t),Pe(e,t)}}function gx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function vx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;n.uniform2uiv(this.addr,t),Pe(e,t)}}function xx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;n.uniform3uiv(this.addr,t),Pe(e,t)}}function Mx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;n.uniform4uiv(this.addr,t),Pe(e,t)}}function yx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(xu.compareFunction=_d,r=xu):r=Pd,e.setTexture2D(t||r,s)}function Sx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Dd,s)}function Ex(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Id,s)}function bx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Ld,s)}function Tx(n){switch(n){case 5126:return ox;case 35664:return ax;case 35665:return lx;case 35666:return cx;case 35674:return hx;case 35675:return ux;case 35676:return fx;case 5124:case 35670:return dx;case 35667:case 35671:return px;case 35668:case 35672:return mx;case 35669:case 35673:return _x;case 5125:return gx;case 36294:return vx;case 36295:return xx;case 36296:return Mx;case 35678:case 36198:case 36298:case 36306:case 35682:return yx;case 35679:case 36299:case 36307:return Sx;case 35680:case 36300:case 36308:case 36293:return Ex;case 36289:case 36303:case 36311:case 36292:return bx}}function wx(n,t){n.uniform1fv(this.addr,t)}function Ax(n,t){const e=yr(t,this.size,2);n.uniform2fv(this.addr,e)}function Rx(n,t){const e=yr(t,this.size,3);n.uniform3fv(this.addr,e)}function Cx(n,t){const e=yr(t,this.size,4);n.uniform4fv(this.addr,e)}function Px(n,t){const e=yr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Lx(n,t){const e=yr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Dx(n,t){const e=yr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Ix(n,t){n.uniform1iv(this.addr,t)}function Ux(n,t){n.uniform2iv(this.addr,t)}function Nx(n,t){n.uniform3iv(this.addr,t)}function Fx(n,t){n.uniform4iv(this.addr,t)}function Ox(n,t){n.uniform1uiv(this.addr,t)}function Bx(n,t){n.uniform2uiv(this.addr,t)}function zx(n,t){n.uniform3uiv(this.addr,t)}function kx(n,t){n.uniform4uiv(this.addr,t)}function Hx(n,t,e){const i=this.cache,s=t.length,r=Ia(e,s);Ce(i,r)||(n.uniform1iv(this.addr,r),Pe(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Pd,r[o])}function Gx(n,t,e){const i=this.cache,s=t.length,r=Ia(e,s);Ce(i,r)||(n.uniform1iv(this.addr,r),Pe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Dd,r[o])}function Vx(n,t,e){const i=this.cache,s=t.length,r=Ia(e,s);Ce(i,r)||(n.uniform1iv(this.addr,r),Pe(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Id,r[o])}function Wx(n,t,e){const i=this.cache,s=t.length,r=Ia(e,s);Ce(i,r)||(n.uniform1iv(this.addr,r),Pe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Ld,r[o])}function Xx(n){switch(n){case 5126:return wx;case 35664:return Ax;case 35665:return Rx;case 35666:return Cx;case 35674:return Px;case 35675:return Lx;case 35676:return Dx;case 5124:case 35670:return Ix;case 35667:case 35671:return Ux;case 35668:case 35672:return Nx;case 35669:case 35673:return Fx;case 5125:return Ox;case 36294:return Bx;case 36295:return zx;case 36296:return kx;case 35678:case 36198:case 36298:case 36306:case 35682:return Hx;case 35679:case 36299:case 36307:return Gx;case 35680:case 36300:case 36308:case 36293:return Vx;case 36289:case 36303:case 36311:case 36292:return Wx}}class qx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Tx(e.type)}}class Yx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Xx(e.type)}}class jx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const xl=/(\w+)(\])?(\[|\.)?/g;function Tu(n,t){n.seq.push(t),n.map[t.id]=t}function Zx(n,t,e){const i=n.name,s=i.length;for(xl.lastIndex=0;;){const r=xl.exec(i),o=xl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Tu(e,c===void 0?new qx(a,n,t):new Yx(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new jx(a),Tu(e,f)),e=f}}}class la{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Zx(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function wu(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Kx=37297;let $x=0;function Jx(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Au=new Vt;function Qx(n){te._getMatrix(Au,te.workingColorSpace,n);const t=`mat3( ${Au.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(n)){case La:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Ru(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Jx(n.getShaderSource(t),o)}else return s}function tM(n,t){const e=Qx(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function eM(n,t){let e;switch(t){case g_:e="Linear";break;case v_:e="Reinhard";break;case x_:e="Cineon";break;case M_:e="ACESFilmic";break;case S_:e="AgX";break;case E_:e="Neutral";break;case y_:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ko=new D;function nM(){te.getLuminanceCoefficients(ko);const n=ko.x.toFixed(4),t=ko.y.toFixed(4),e=ko.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zr).join(`
`)}function sM(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function rM(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function zr(n){return n!==""}function Cu(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Pu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const oM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pc(n){return n.replace(oM,lM)}const aM=new Map;function lM(n,t){let e=qt[t];if(e===void 0){const i=aM.get(t);if(i!==void 0)e=qt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Pc(e)}const cM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lu(n){return n.replace(cM,hM)}function hM(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Du(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function uM(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===id?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===sd?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===li&&(t="SHADOWMAP_TYPE_VSM"),t}function fM(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ar:case lr:t="ENVMAP_TYPE_CUBE";break;case Pa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function dM(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case lr:t="ENVMAP_MODE_REFRACTION";break}return t}function pM(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case $c:t="ENVMAP_BLENDING_MULTIPLY";break;case m_:t="ENVMAP_BLENDING_MIX";break;case __:t="ENVMAP_BLENDING_ADD";break}return t}function mM(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function _M(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=uM(e),c=fM(e),h=dM(e),f=pM(e),u=mM(e),d=iM(e),_=sM(r),g=s.createProgram();let m,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(zr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(zr).join(`
`),p.length>0&&(p+=`
`)):(m=[Du(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zr).join(`
`),p=[Du(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==zi?"#define TONE_MAPPING":"",e.toneMapping!==zi?qt.tonemapping_pars_fragment:"",e.toneMapping!==zi?eM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,tM("linearToOutputTexel",e.outputColorSpace),nM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(zr).join(`
`)),o=Pc(o),o=Cu(o,e),o=Pu(o,e),a=Pc(a),a=Cu(a,e),a=Pu(a,e),o=Lu(o),a=Lu(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Xh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=E+m+o,v=E+p+a,L=wu(s,s.VERTEX_SHADER,x),A=wu(s,s.FRAGMENT_SHADER,v);s.attachShader(g,L),s.attachShader(g,A),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function T(C){if(n.debug.checkShaderErrors){const B=s.getProgramInfoLog(g).trim(),I=s.getShaderInfoLog(L).trim(),z=s.getShaderInfoLog(A).trim();let V=!0,H=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,L,A);else{const q=Ru(s,L,"vertex"),G=Ru(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+B+`
`+q+`
`+G)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(I===""||z==="")&&(H=!1);H&&(C.diagnostics={runnable:V,programLog:B,vertexShader:{log:I,prefix:m},fragmentShader:{log:z,prefix:p}})}s.deleteShader(L),s.deleteShader(A),R=new la(s,g),y=rM(s,g)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(g,Kx)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$x++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=L,this.fragmentShader=A,this}let gM=0;class vM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new xM(t),e.set(t,i)),i}}class xM{constructor(t){this.id=gM++,this.code=t,this.usedTimes=0}}function MM(n,t,e,i,s,r,o){const a=new Md,l=new vM,c=new Set,h=[],f=s.logarithmicDepthBuffer,u=s.vertexTextures;let d=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,M,C,B,I){const z=B.fog,V=I.geometry,H=y.isMeshStandardMaterial?B.environment:null,q=(y.isMeshStandardMaterial?e:t).get(y.envMap||H),G=q&&q.mapping===Pa?q.image.height:null,tt=_[y.type];y.precision!==null&&(d=s.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const at=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,_t=at!==void 0?at.length:0;let Ut=0;V.morphAttributes.position!==void 0&&(Ut=1),V.morphAttributes.normal!==void 0&&(Ut=2),V.morphAttributes.color!==void 0&&(Ut=3);let Wt,j,st,Mt;if(tt){const re=qn[tt];Wt=re.vertexShader,j=re.fragmentShader}else Wt=y.vertexShader,j=y.fragmentShader,l.update(y),st=l.getVertexShaderID(y),Mt=l.getFragmentShaderID(y);const lt=n.getRenderTarget(),bt=n.state.buffers.depth.getReversed(),Dt=I.isInstancedMesh===!0,It=I.isBatchedMesh===!0,jt=!!y.map,J=!!y.matcap,rt=!!q,P=!!y.aoMap,Ct=!!y.lightMap,et=!!y.bumpMap,xt=!!y.normalMap,ct=!!y.displacementMap,Nt=!!y.emissiveMap,gt=!!y.metalnessMap,w=!!y.roughnessMap,S=y.anisotropy>0,k=y.clearcoat>0,Z=y.dispersion>0,Q=y.iridescence>0,K=y.sheen>0,Tt=y.transmission>0,ut=S&&!!y.anisotropyMap,vt=k&&!!y.clearcoatMap,Kt=k&&!!y.clearcoatNormalMap,it=k&&!!y.clearcoatRoughnessMap,yt=Q&&!!y.iridescenceMap,Ft=Q&&!!y.iridescenceThicknessMap,Ot=K&&!!y.sheenColorMap,St=K&&!!y.sheenRoughnessMap,Qt=!!y.specularMap,Xt=!!y.specularColorMap,fe=!!y.specularIntensityMap,U=Tt&&!!y.transmissionMap,ft=Tt&&!!y.thicknessMap,Y=!!y.gradientMap,$=!!y.alphaMap,mt=y.alphaTest>0,dt=!!y.alphaHash,kt=!!y.extensions;let ye=zi;y.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(ye=n.toneMapping);const Be={shaderID:tt,shaderType:y.type,shaderName:y.name,vertexShader:Wt,fragmentShader:j,defines:y.defines,customVertexShaderID:st,customFragmentShaderID:Mt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:It,batchingColor:It&&I._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&I.instanceColor!==null,instancingMorph:Dt&&I.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:lt===null?n.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:vr,alphaToCoverage:!!y.alphaToCoverage,map:jt,matcap:J,envMap:rt,envMapMode:rt&&q.mapping,envMapCubeUVHeight:G,aoMap:P,lightMap:Ct,bumpMap:et,normalMap:xt,displacementMap:u&&ct,emissiveMap:Nt,normalMapObjectSpace:xt&&y.normalMapType===A_,normalMapTangentSpace:xt&&y.normalMapType===sh,metalnessMap:gt,roughnessMap:w,anisotropy:S,anisotropyMap:ut,clearcoat:k,clearcoatMap:vt,clearcoatNormalMap:Kt,clearcoatRoughnessMap:it,dispersion:Z,iridescence:Q,iridescenceMap:yt,iridescenceThicknessMap:Ft,sheen:K,sheenColorMap:Ot,sheenRoughnessMap:St,specularMap:Qt,specularColorMap:Xt,specularIntensityMap:fe,transmission:Tt,transmissionMap:U,thicknessMap:ft,gradientMap:Y,opaque:y.transparent===!1&&y.blending===Vs&&y.alphaToCoverage===!1,alphaMap:$,alphaTest:mt,alphaHash:dt,combine:y.combine,mapUv:jt&&g(y.map.channel),aoMapUv:P&&g(y.aoMap.channel),lightMapUv:Ct&&g(y.lightMap.channel),bumpMapUv:et&&g(y.bumpMap.channel),normalMapUv:xt&&g(y.normalMap.channel),displacementMapUv:ct&&g(y.displacementMap.channel),emissiveMapUv:Nt&&g(y.emissiveMap.channel),metalnessMapUv:gt&&g(y.metalnessMap.channel),roughnessMapUv:w&&g(y.roughnessMap.channel),anisotropyMapUv:ut&&g(y.anisotropyMap.channel),clearcoatMapUv:vt&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:Kt&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:St&&g(y.sheenRoughnessMap.channel),specularMapUv:Qt&&g(y.specularMap.channel),specularColorMapUv:Xt&&g(y.specularColorMap.channel),specularIntensityMapUv:fe&&g(y.specularIntensityMap.channel),transmissionMapUv:U&&g(y.transmissionMap.channel),thicknessMapUv:ft&&g(y.thicknessMap.channel),alphaMapUv:$&&g(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(xt||S),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!V.attributes.uv&&(jt||$),fog:!!z,useFog:y.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:bt,skinning:I.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Ut,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:ye,decodeVideoTexture:jt&&y.map.isVideoTexture===!0&&te.getTransfer(y.map.colorSpace)===le,decodeVideoTextureEmissive:Nt&&y.emissiveMap.isVideoTexture===!0&&te.getTransfer(y.emissiveMap.colorSpace)===le,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===yn,flipSided:y.side===nn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:kt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&y.extensions.multiDraw===!0||It)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Be.vertexUv1s=c.has(1),Be.vertexUv2s=c.has(2),Be.vertexUv3s=c.has(3),c.clear(),Be}function p(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const C in y.defines)M.push(C),M.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(E(M,y),x(M,y),M.push(n.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function E(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function x(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function v(y){const M=_[y.type];let C;if(M){const B=qn[M];C=ig.clone(B.uniforms)}else C=y.uniforms;return C}function L(y,M){let C;for(let B=0,I=h.length;B<I;B++){const z=h[B];if(z.cacheKey===M){C=z,++C.usedTimes;break}}return C===void 0&&(C=new _M(n,M,y,r),h.push(C)),C}function A(y){if(--y.usedTimes===0){const M=h.indexOf(y);h[M]=h[h.length-1],h.pop(),y.destroy()}}function T(y){l.remove(y)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:L,releaseProgram:A,releaseShaderCache:T,programs:h,dispose:R}}function yM(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function SM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Iu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Uu(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(f,u,d,_,g,m){let p=n[t];return p===void 0?(p={id:f.id,object:f,geometry:u,material:d,groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},n[t]=p):(p.id=f.id,p.object=f,p.geometry=u,p.material=d,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=g,p.group=m),t++,p}function a(f,u,d,_,g,m){const p=o(f,u,d,_,g,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(f,u,d,_,g,m){const p=o(f,u,d,_,g,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(f,u){e.length>1&&e.sort(f||SM),i.length>1&&i.sort(u||Iu),s.length>1&&s.sort(u||Iu)}function h(){for(let f=t,u=n.length;f<u;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function EM(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Uu,n.set(i,[o])):s>=r.length?(o=new Uu,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function bM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Yt};break;case"SpotLight":e={position:new D,direction:new D,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new D,halfWidth:new D,halfHeight:new D};break}return n[t.id]=e,e}}}function TM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let wM=0;function AM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function RM(n){const t=new bM,e=TM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const s=new D,r=new _e,o=new _e;function a(c){let h=0,f=0,u=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let d=0,_=0,g=0,m=0,p=0,E=0,x=0,v=0,L=0,A=0,T=0;c.sort(AM);for(let y=0,M=c.length;y<M;y++){const C=c[y],B=C.color,I=C.intensity,z=C.distance,V=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=B.r*I,f+=B.g*I,u+=B.b*I;else if(C.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(C.sh.coefficients[H],I);T++}else if(C.isDirectionalLight){const H=t.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const q=C.shadow,G=e.get(C);G.shadowIntensity=q.intensity,G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,i.directionalShadow[d]=G,i.directionalShadowMap[d]=V,i.directionalShadowMatrix[d]=C.shadow.matrix,E++}i.directional[d]=H,d++}else if(C.isSpotLight){const H=t.get(C);H.position.setFromMatrixPosition(C.matrixWorld),H.color.copy(B).multiplyScalar(I),H.distance=z,H.coneCos=Math.cos(C.angle),H.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),H.decay=C.decay,i.spot[g]=H;const q=C.shadow;if(C.map&&(i.spotLightMap[L]=C.map,L++,q.updateMatrices(C),C.castShadow&&A++),i.spotLightMatrix[g]=q.matrix,C.castShadow){const G=e.get(C);G.shadowIntensity=q.intensity,G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,i.spotShadow[g]=G,i.spotShadowMap[g]=V,v++}g++}else if(C.isRectAreaLight){const H=t.get(C);H.color.copy(B).multiplyScalar(I),H.halfWidth.set(C.width*.5,0,0),H.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=H,m++}else if(C.isPointLight){const H=t.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),H.distance=C.distance,H.decay=C.decay,C.castShadow){const q=C.shadow,G=e.get(C);G.shadowIntensity=q.intensity,G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,G.shadowCameraNear=q.camera.near,G.shadowCameraFar=q.camera.far,i.pointShadow[_]=G,i.pointShadowMap[_]=V,i.pointShadowMatrix[_]=C.shadow.matrix,x++}i.point[_]=H,_++}else if(C.isHemisphereLight){const H=t.get(C);H.skyColor.copy(C.color).multiplyScalar(I),H.groundColor.copy(C.groundColor).multiplyScalar(I),i.hemi[p]=H,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ht.LTC_FLOAT_1,i.rectAreaLTC2=ht.LTC_FLOAT_2):(i.rectAreaLTC1=ht.LTC_HALF_1,i.rectAreaLTC2=ht.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;const R=i.hash;(R.directionalLength!==d||R.pointLength!==_||R.spotLength!==g||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==E||R.numPointShadows!==x||R.numSpotShadows!==v||R.numSpotMaps!==L||R.numLightProbes!==T)&&(i.directional.length=d,i.spot.length=g,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=v+L-A,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,R.directionalLength=d,R.pointLength=_,R.spotLength=g,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=E,R.numPointShadows=x,R.numSpotShadows=v,R.numSpotMaps=L,R.numLightProbes=T,i.version=wM++)}function l(c,h){let f=0,u=0,d=0,_=0,g=0;const m=h.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const x=c[p];if(x.isDirectionalLight){const v=i.directional[f];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(x.isSpotLight){const v=i.spot[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const v=i.rectArea[_];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const v=i.point[u];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),u++}else if(x.isHemisphereLight){const v=i.hemi[g];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:i}}function Nu(n){const t=new RM(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function CM(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Nu(n),t.set(s,[a])):r>=o.length?(a=new Nu(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class PM extends Hi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=T_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class LM extends Hi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const DM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function UM(n,t,e){let i=new rh;const s=new nt,r=new nt,o=new he,a=new PM({depthPacking:w_}),l=new LM,c={},h=e.maxTextureSize,f={[Mi]:nn,[nn]:Mi,[yn]:yn},u=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:DM,fragmentShader:IM}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const _=new Ee;_.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new pe(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=id;let p=this.type;this.render=function(A,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const y=n.getRenderTarget(),M=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Bi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const I=p!==li&&this.type===li,z=p===li&&this.type!==li;for(let V=0,H=A.length;V<H;V++){const q=A[V],G=q.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const tt=G.getFrameExtents();if(s.multiply(tt),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/tt.x),s.x=r.x*tt.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/tt.y),s.y=r.y*tt.y,G.mapSize.y=r.y)),G.map===null||I===!0||z===!0){const _t=this.type!==li?{minFilter:kn,magFilter:kn}:{};G.map!==null&&G.map.dispose(),G.map=new ps(s.x,s.y,_t),G.map.texture.name=q.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const at=G.getViewportCount();for(let _t=0;_t<at;_t++){const Ut=G.getViewport(_t);o.set(r.x*Ut.x,r.y*Ut.y,r.x*Ut.z,r.y*Ut.w),B.viewport(o),G.updateMatrices(q,_t),i=G.getFrustum(),v(T,R,G.camera,q,this.type)}G.isPointLightShadow!==!0&&this.type===li&&E(G,R),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(y,M,C)};function E(A,T){const R=t.update(g);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ps(s.x,s.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(T,null,R,u,g,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(T,null,R,d,g,null)}function x(A,T,R,y){let M=null;const C=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)M=C;else if(M=R.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const B=M.uuid,I=T.uuid;let z=c[B];z===void 0&&(z={},c[B]=z);let V=z[I];V===void 0&&(V=M.clone(),z[I]=V,T.addEventListener("dispose",L)),M=V}if(M.visible=T.visible,M.wireframe=T.wireframe,y===li?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:f[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const B=n.properties.get(M);B.light=R}return M}function v(A,T,R,y,M){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===li)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const I=t.update(A),z=A.material;if(Array.isArray(z)){const V=I.groups;for(let H=0,q=V.length;H<q;H++){const G=V[H],tt=z[G.materialIndex];if(tt&&tt.visible){const at=x(A,tt,y,M);A.onBeforeShadow(n,A,T,R,I,at,G),n.renderBufferDirect(R,null,I,at,A,G),A.onAfterShadow(n,A,T,R,I,at,G)}}}else if(z.visible){const V=x(A,z,y,M);A.onBeforeShadow(n,A,T,R,I,V,null),n.renderBufferDirect(R,null,I,V,A,null),A.onAfterShadow(n,A,T,R,I,V,null)}}const B=A.children;for(let I=0,z=B.length;I<z;I++)v(B[I],T,R,y,M)}function L(A){A.target.removeEventListener("dispose",L);for(const R in c){const y=c[R],M=A.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const NM={[ql]:Yl,[jl]:$l,[Zl]:Jl,[or]:Kl,[Yl]:ql,[$l]:jl,[Jl]:Zl,[Kl]:or};function FM(n,t){function e(){let U=!1;const ft=new he;let Y=null;const $=new he(0,0,0,0);return{setMask:function(mt){Y!==mt&&!U&&(n.colorMask(mt,mt,mt,mt),Y=mt)},setLocked:function(mt){U=mt},setClear:function(mt,dt,kt,ye,Be){Be===!0&&(mt*=ye,dt*=ye,kt*=ye),ft.set(mt,dt,kt,ye),$.equals(ft)===!1&&(n.clearColor(mt,dt,kt,ye),$.copy(ft))},reset:function(){U=!1,Y=null,$.set(-1,0,0,0)}}}function i(){let U=!1,ft=!1,Y=null,$=null,mt=null;return{setReversed:function(dt){if(ft!==dt){const kt=t.get("EXT_clip_control");ft?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT);const ye=mt;mt=null,this.setClear(ye)}ft=dt},getReversed:function(){return ft},setTest:function(dt){dt?lt(n.DEPTH_TEST):bt(n.DEPTH_TEST)},setMask:function(dt){Y!==dt&&!U&&(n.depthMask(dt),Y=dt)},setFunc:function(dt){if(ft&&(dt=NM[dt]),$!==dt){switch(dt){case ql:n.depthFunc(n.NEVER);break;case Yl:n.depthFunc(n.ALWAYS);break;case jl:n.depthFunc(n.LESS);break;case or:n.depthFunc(n.LEQUAL);break;case Zl:n.depthFunc(n.EQUAL);break;case Kl:n.depthFunc(n.GEQUAL);break;case $l:n.depthFunc(n.GREATER);break;case Jl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}$=dt}},setLocked:function(dt){U=dt},setClear:function(dt){mt!==dt&&(ft&&(dt=1-dt),n.clearDepth(dt),mt=dt)},reset:function(){U=!1,Y=null,$=null,mt=null,ft=!1}}}function s(){let U=!1,ft=null,Y=null,$=null,mt=null,dt=null,kt=null,ye=null,Be=null;return{setTest:function(re){U||(re?lt(n.STENCIL_TEST):bt(n.STENCIL_TEST))},setMask:function(re){ft!==re&&!U&&(n.stencilMask(re),ft=re)},setFunc:function(re,An,ei){(Y!==re||$!==An||mt!==ei)&&(n.stencilFunc(re,An,ei),Y=re,$=An,mt=ei)},setOp:function(re,An,ei){(dt!==re||kt!==An||ye!==ei)&&(n.stencilOp(re,An,ei),dt=re,kt=An,ye=ei)},setLocked:function(re){U=re},setClear:function(re){Be!==re&&(n.clearStencil(re),Be=re)},reset:function(){U=!1,ft=null,Y=null,$=null,mt=null,dt=null,kt=null,ye=null,Be=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let h={},f={},u=new WeakMap,d=[],_=null,g=!1,m=null,p=null,E=null,x=null,v=null,L=null,A=null,T=new Yt(0,0,0),R=0,y=!1,M=null,C=null,B=null,I=null,z=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,q=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(G)[1]),H=q>=1):G.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),H=q>=2);let tt=null,at={};const _t=n.getParameter(n.SCISSOR_BOX),Ut=n.getParameter(n.VIEWPORT),Wt=new he().fromArray(_t),j=new he().fromArray(Ut);function st(U,ft,Y,$){const mt=new Uint8Array(4),dt=n.createTexture();n.bindTexture(U,dt),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let kt=0;kt<Y;kt++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(ft,0,n.RGBA,1,1,$,0,n.RGBA,n.UNSIGNED_BYTE,mt):n.texImage2D(ft+kt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,mt);return dt}const Mt={};Mt[n.TEXTURE_2D]=st(n.TEXTURE_2D,n.TEXTURE_2D,1),Mt[n.TEXTURE_CUBE_MAP]=st(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[n.TEXTURE_2D_ARRAY]=st(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Mt[n.TEXTURE_3D]=st(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),lt(n.DEPTH_TEST),o.setFunc(or),et(!1),xt(zh),lt(n.CULL_FACE),P(Bi);function lt(U){h[U]!==!0&&(n.enable(U),h[U]=!0)}function bt(U){h[U]!==!1&&(n.disable(U),h[U]=!1)}function Dt(U,ft){return f[U]!==ft?(n.bindFramebuffer(U,ft),f[U]=ft,U===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ft),U===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ft),!0):!1}function It(U,ft){let Y=d,$=!1;if(U){Y=u.get(ft),Y===void 0&&(Y=[],u.set(ft,Y));const mt=U.textures;if(Y.length!==mt.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let dt=0,kt=mt.length;dt<kt;dt++)Y[dt]=n.COLOR_ATTACHMENT0+dt;Y.length=mt.length,$=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,$=!0);$&&n.drawBuffers(Y)}function jt(U){return _!==U?(n.useProgram(U),_=U,!0):!1}const J={[Ki]:n.FUNC_ADD,[Jm]:n.FUNC_SUBTRACT,[Qm]:n.FUNC_REVERSE_SUBTRACT};J[t_]=n.MIN,J[e_]=n.MAX;const rt={[n_]:n.ZERO,[i_]:n.ONE,[s_]:n.SRC_COLOR,[Wl]:n.SRC_ALPHA,[h_]:n.SRC_ALPHA_SATURATE,[l_]:n.DST_COLOR,[o_]:n.DST_ALPHA,[r_]:n.ONE_MINUS_SRC_COLOR,[Xl]:n.ONE_MINUS_SRC_ALPHA,[c_]:n.ONE_MINUS_DST_COLOR,[a_]:n.ONE_MINUS_DST_ALPHA,[u_]:n.CONSTANT_COLOR,[f_]:n.ONE_MINUS_CONSTANT_COLOR,[d_]:n.CONSTANT_ALPHA,[p_]:n.ONE_MINUS_CONSTANT_ALPHA};function P(U,ft,Y,$,mt,dt,kt,ye,Be,re){if(U===Bi){g===!0&&(bt(n.BLEND),g=!1);return}if(g===!1&&(lt(n.BLEND),g=!0),U!==$m){if(U!==m||re!==y){if((p!==Ki||v!==Ki)&&(n.blendEquation(n.FUNC_ADD),p=Ki,v=Ki),re)switch(U){case Vs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case kh:n.blendFunc(n.ONE,n.ONE);break;case Hh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Gh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Vs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case kh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Hh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Gh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}E=null,x=null,L=null,A=null,T.set(0,0,0),R=0,m=U,y=re}return}mt=mt||ft,dt=dt||Y,kt=kt||$,(ft!==p||mt!==v)&&(n.blendEquationSeparate(J[ft],J[mt]),p=ft,v=mt),(Y!==E||$!==x||dt!==L||kt!==A)&&(n.blendFuncSeparate(rt[Y],rt[$],rt[dt],rt[kt]),E=Y,x=$,L=dt,A=kt),(ye.equals(T)===!1||Be!==R)&&(n.blendColor(ye.r,ye.g,ye.b,Be),T.copy(ye),R=Be),m=U,y=!1}function Ct(U,ft){U.side===yn?bt(n.CULL_FACE):lt(n.CULL_FACE);let Y=U.side===nn;ft&&(Y=!Y),et(Y),U.blending===Vs&&U.transparent===!1?P(Bi):P(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const $=U.stencilWrite;a.setTest($),$&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Nt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?lt(n.SAMPLE_ALPHA_TO_COVERAGE):bt(n.SAMPLE_ALPHA_TO_COVERAGE)}function et(U){M!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),M=U)}function xt(U){U!==Zm?(lt(n.CULL_FACE),U!==C&&(U===zh?n.cullFace(n.BACK):U===Km?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):bt(n.CULL_FACE),C=U}function ct(U){U!==B&&(H&&n.lineWidth(U),B=U)}function Nt(U,ft,Y){U?(lt(n.POLYGON_OFFSET_FILL),(I!==ft||z!==Y)&&(n.polygonOffset(ft,Y),I=ft,z=Y)):bt(n.POLYGON_OFFSET_FILL)}function gt(U){U?lt(n.SCISSOR_TEST):bt(n.SCISSOR_TEST)}function w(U){U===void 0&&(U=n.TEXTURE0+V-1),tt!==U&&(n.activeTexture(U),tt=U)}function S(U,ft,Y){Y===void 0&&(tt===null?Y=n.TEXTURE0+V-1:Y=tt);let $=at[Y];$===void 0&&($={type:void 0,texture:void 0},at[Y]=$),($.type!==U||$.texture!==ft)&&(tt!==Y&&(n.activeTexture(Y),tt=Y),n.bindTexture(U,ft||Mt[U]),$.type=U,$.texture=ft)}function k(){const U=at[tt];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Z(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Tt(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ut(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function vt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Kt(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function yt(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ft(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ot(U){Wt.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Wt.copy(U))}function St(U){j.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),j.copy(U))}function Qt(U,ft){let Y=c.get(ft);Y===void 0&&(Y=new WeakMap,c.set(ft,Y));let $=Y.get(U);$===void 0&&($=n.getUniformBlockIndex(ft,U.name),Y.set(U,$))}function Xt(U,ft){const $=c.get(ft).get(U);l.get(ft)!==$&&(n.uniformBlockBinding(ft,$,U.__bindingPointIndex),l.set(ft,$))}function fe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},tt=null,at={},f={},u=new WeakMap,d=[],_=null,g=!1,m=null,p=null,E=null,x=null,v=null,L=null,A=null,T=new Yt(0,0,0),R=0,y=!1,M=null,C=null,B=null,I=null,z=null,Wt.set(0,0,n.canvas.width,n.canvas.height),j.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:lt,disable:bt,bindFramebuffer:Dt,drawBuffers:It,useProgram:jt,setBlending:P,setMaterial:Ct,setFlipSided:et,setCullFace:xt,setLineWidth:ct,setPolygonOffset:Nt,setScissorTest:gt,activeTexture:w,bindTexture:S,unbindTexture:k,compressedTexImage2D:Z,compressedTexImage3D:Q,texImage2D:yt,texImage3D:Ft,updateUBOMapping:Qt,uniformBlockBinding:Xt,texStorage2D:Kt,texStorage3D:it,texSubImage2D:K,texSubImage3D:Tt,compressedTexSubImage2D:ut,compressedTexSubImage3D:vt,scissor:Ot,viewport:St,reset:fe}}function Fu(n,t,e,i){const s=OM(i);switch(e){case cd:return n*t;case ud:return n*t;case fd:return n*t*2;case dd:return n*t/s.components*s.byteLength;case eh:return n*t/s.components*s.byteLength;case pd:return n*t*2/s.components*s.byteLength;case nh:return n*t*2/s.components*s.byteLength;case hd:return n*t*3/s.components*s.byteLength;case On:return n*t*4/s.components*s.byteLength;case ih:return n*t*4/s.components*s.byteLength;case ia:case sa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ra:case oa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case sc:case oc:return Math.max(n,16)*Math.max(t,8)/4;case ic:case rc:return Math.max(n,8)*Math.max(t,8)/2;case ac:case lc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case cc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case hc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case uc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case fc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case dc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case pc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case mc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case _c:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case gc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case vc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case xc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Mc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case yc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Sc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Ec:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case aa:case bc:case Tc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case md:case wc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ac:case Rc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function OM(n){switch(n){case yi:case od:return{byteLength:1,components:1};case Jr:case ad:case uo:return{byteLength:2,components:1};case Qc:case th:return{byteLength:2,components:4};case ds:case Jc:case pi:return{byteLength:4,components:1};case ld:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function BM(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,h=new WeakMap;let f;const u=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,S){return d?new OffscreenCanvas(w,S):ga("canvas")}function g(w,S,k){let Z=1;const Q=gt(w);if((Q.width>k||Q.height>k)&&(Z=k/Math.max(Q.width,Q.height)),Z<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const K=Math.floor(Z*Q.width),Tt=Math.floor(Z*Q.height);f===void 0&&(f=_(K,Tt));const ut=S?_(K,Tt):f;return ut.width=K,ut.height=Tt,ut.getContext("2d").drawImage(w,0,0,K,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+K+"x"+Tt+")."),ut}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){n.generateMipmap(w)}function E(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(w,S,k,Z,Q=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let K=S;if(S===n.RED&&(k===n.FLOAT&&(K=n.R32F),k===n.HALF_FLOAT&&(K=n.R16F),k===n.UNSIGNED_BYTE&&(K=n.R8)),S===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.R8UI),k===n.UNSIGNED_SHORT&&(K=n.R16UI),k===n.UNSIGNED_INT&&(K=n.R32UI),k===n.BYTE&&(K=n.R8I),k===n.SHORT&&(K=n.R16I),k===n.INT&&(K=n.R32I)),S===n.RG&&(k===n.FLOAT&&(K=n.RG32F),k===n.HALF_FLOAT&&(K=n.RG16F),k===n.UNSIGNED_BYTE&&(K=n.RG8)),S===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.RG8UI),k===n.UNSIGNED_SHORT&&(K=n.RG16UI),k===n.UNSIGNED_INT&&(K=n.RG32UI),k===n.BYTE&&(K=n.RG8I),k===n.SHORT&&(K=n.RG16I),k===n.INT&&(K=n.RG32I)),S===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.RGB8UI),k===n.UNSIGNED_SHORT&&(K=n.RGB16UI),k===n.UNSIGNED_INT&&(K=n.RGB32UI),k===n.BYTE&&(K=n.RGB8I),k===n.SHORT&&(K=n.RGB16I),k===n.INT&&(K=n.RGB32I)),S===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),k===n.UNSIGNED_INT&&(K=n.RGBA32UI),k===n.BYTE&&(K=n.RGBA8I),k===n.SHORT&&(K=n.RGBA16I),k===n.INT&&(K=n.RGBA32I)),S===n.RGB&&k===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),S===n.RGBA){const Tt=Q?La:te.getTransfer(Z);k===n.FLOAT&&(K=n.RGBA32F),k===n.HALF_FLOAT&&(K=n.RGBA16F),k===n.UNSIGNED_BYTE&&(K=Tt===le?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function v(w,S){let k;return w?S===null||S===ds||S===cr?k=n.DEPTH24_STENCIL8:S===pi?k=n.DEPTH32F_STENCIL8:S===Jr&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ds||S===cr?k=n.DEPTH_COMPONENT24:S===pi?k=n.DEPTH_COMPONENT32F:S===Jr&&(k=n.DEPTH_COMPONENT16),k}function L(w,S){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==kn&&w.minFilter!==Zn?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function A(w){const S=w.target;S.removeEventListener("dispose",A),R(S),S.isVideoTexture&&h.delete(S)}function T(w){const S=w.target;S.removeEventListener("dispose",T),M(S)}function R(w){const S=i.get(w);if(S.__webglInit===void 0)return;const k=w.source,Z=u.get(k);if(Z){const Q=Z[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&y(w),Object.keys(Z).length===0&&u.delete(k)}i.remove(w)}function y(w){const S=i.get(w);n.deleteTexture(S.__webglTexture);const k=w.source,Z=u.get(k);delete Z[S.__cacheKey],o.memory.textures--}function M(w){const S=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let Q=0;Q<S.__webglFramebuffer[Z].length;Q++)n.deleteFramebuffer(S.__webglFramebuffer[Z][Q]);else n.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)n.deleteFramebuffer(S.__webglFramebuffer[Z]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const k=w.textures;for(let Z=0,Q=k.length;Z<Q;Z++){const K=i.get(k[Z]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(k[Z])}i.remove(w)}let C=0;function B(){C=0}function I(){const w=C;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),C+=1,w}function z(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function V(w,S){const k=i.get(w);if(w.isVideoTexture&&ct(w),w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){const Z=w.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(k,w,S);return}}e.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+S)}function H(w,S){const k=i.get(w);if(w.version>0&&k.__version!==w.version){j(k,w,S);return}e.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+S)}function q(w,S){const k=i.get(w);if(w.version>0&&k.__version!==w.version){j(k,w,S);return}e.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+S)}function G(w,S){const k=i.get(w);if(w.version>0&&k.__version!==w.version){st(k,w,S);return}e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+S)}const tt={[ec]:n.REPEAT,[es]:n.CLAMP_TO_EDGE,[nc]:n.MIRRORED_REPEAT},at={[kn]:n.NEAREST,[b_]:n.NEAREST_MIPMAP_NEAREST,[Mo]:n.NEAREST_MIPMAP_LINEAR,[Zn]:n.LINEAR,[qa]:n.LINEAR_MIPMAP_NEAREST,[ns]:n.LINEAR_MIPMAP_LINEAR},_t={[R_]:n.NEVER,[U_]:n.ALWAYS,[C_]:n.LESS,[_d]:n.LEQUAL,[P_]:n.EQUAL,[I_]:n.GEQUAL,[L_]:n.GREATER,[D_]:n.NOTEQUAL};function Ut(w,S){if(S.type===pi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Zn||S.magFilter===qa||S.magFilter===Mo||S.magFilter===ns||S.minFilter===Zn||S.minFilter===qa||S.minFilter===Mo||S.minFilter===ns)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,tt[S.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,tt[S.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,tt[S.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,at[S.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,at[S.minFilter]),S.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,_t[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===kn||S.minFilter!==Mo&&S.minFilter!==ns||S.type===pi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");n.texParameterf(w,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Wt(w,S){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",A));const Z=S.source;let Q=u.get(Z);Q===void 0&&(Q={},u.set(Z,Q));const K=z(S);if(K!==w.__cacheKey){Q[K]===void 0&&(Q[K]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),Q[K].usedTimes++;const Tt=Q[w.__cacheKey];Tt!==void 0&&(Q[w.__cacheKey].usedTimes--,Tt.usedTimes===0&&y(S)),w.__cacheKey=K,w.__webglTexture=Q[K].texture}return k}function j(w,S,k){let Z=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=n.TEXTURE_3D);const Q=Wt(w,S),K=S.source;e.bindTexture(Z,w.__webglTexture,n.TEXTURE0+k);const Tt=i.get(K);if(K.version!==Tt.__version||Q===!0){e.activeTexture(n.TEXTURE0+k);const ut=te.getPrimaries(te.workingColorSpace),vt=S.colorSpace===Ii?null:te.getPrimaries(S.colorSpace),Kt=S.colorSpace===Ii||ut===vt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let it=g(S.image,!1,s.maxTextureSize);it=Nt(S,it);const yt=r.convert(S.format,S.colorSpace),Ft=r.convert(S.type);let Ot=x(S.internalFormat,yt,Ft,S.colorSpace,S.isVideoTexture);Ut(Z,S);let St;const Qt=S.mipmaps,Xt=S.isVideoTexture!==!0,fe=Tt.__version===void 0||Q===!0,U=K.dataReady,ft=L(S,it);if(S.isDepthTexture)Ot=v(S.format===hr,S.type),fe&&(Xt?e.texStorage2D(n.TEXTURE_2D,1,Ot,it.width,it.height):e.texImage2D(n.TEXTURE_2D,0,Ot,it.width,it.height,0,yt,Ft,null));else if(S.isDataTexture)if(Qt.length>0){Xt&&fe&&e.texStorage2D(n.TEXTURE_2D,ft,Ot,Qt[0].width,Qt[0].height);for(let Y=0,$=Qt.length;Y<$;Y++)St=Qt[Y],Xt?U&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,St.width,St.height,yt,Ft,St.data):e.texImage2D(n.TEXTURE_2D,Y,Ot,St.width,St.height,0,yt,Ft,St.data);S.generateMipmaps=!1}else Xt?(fe&&e.texStorage2D(n.TEXTURE_2D,ft,Ot,it.width,it.height),U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,it.width,it.height,yt,Ft,it.data)):e.texImage2D(n.TEXTURE_2D,0,Ot,it.width,it.height,0,yt,Ft,it.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Xt&&fe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ft,Ot,Qt[0].width,Qt[0].height,it.depth);for(let Y=0,$=Qt.length;Y<$;Y++)if(St=Qt[Y],S.format!==On)if(yt!==null)if(Xt){if(U)if(S.layerUpdates.size>0){const mt=Fu(St.width,St.height,S.format,S.type);for(const dt of S.layerUpdates){const kt=St.data.subarray(dt*mt/St.data.BYTES_PER_ELEMENT,(dt+1)*mt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,dt,St.width,St.height,1,yt,kt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,St.width,St.height,it.depth,yt,St.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,Ot,St.width,St.height,it.depth,0,St.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?U&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,St.width,St.height,it.depth,yt,Ft,St.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Y,Ot,St.width,St.height,it.depth,0,yt,Ft,St.data)}else{Xt&&fe&&e.texStorage2D(n.TEXTURE_2D,ft,Ot,Qt[0].width,Qt[0].height);for(let Y=0,$=Qt.length;Y<$;Y++)St=Qt[Y],S.format!==On?yt!==null?Xt?U&&e.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,St.width,St.height,yt,St.data):e.compressedTexImage2D(n.TEXTURE_2D,Y,Ot,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?U&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,St.width,St.height,yt,Ft,St.data):e.texImage2D(n.TEXTURE_2D,Y,Ot,St.width,St.height,0,yt,Ft,St.data)}else if(S.isDataArrayTexture)if(Xt){if(fe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ft,Ot,it.width,it.height,it.depth),U)if(S.layerUpdates.size>0){const Y=Fu(it.width,it.height,S.format,S.type);for(const $ of S.layerUpdates){const mt=it.data.subarray($*Y/it.data.BYTES_PER_ELEMENT,($+1)*Y/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$,it.width,it.height,1,yt,Ft,mt)}S.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,yt,Ft,it.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ot,it.width,it.height,it.depth,0,yt,Ft,it.data);else if(S.isData3DTexture)Xt?(fe&&e.texStorage3D(n.TEXTURE_3D,ft,Ot,it.width,it.height,it.depth),U&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,yt,Ft,it.data)):e.texImage3D(n.TEXTURE_3D,0,Ot,it.width,it.height,it.depth,0,yt,Ft,it.data);else if(S.isFramebufferTexture){if(fe)if(Xt)e.texStorage2D(n.TEXTURE_2D,ft,Ot,it.width,it.height);else{let Y=it.width,$=it.height;for(let mt=0;mt<ft;mt++)e.texImage2D(n.TEXTURE_2D,mt,Ot,Y,$,0,yt,Ft,null),Y>>=1,$>>=1}}else if(Qt.length>0){if(Xt&&fe){const Y=gt(Qt[0]);e.texStorage2D(n.TEXTURE_2D,ft,Ot,Y.width,Y.height)}for(let Y=0,$=Qt.length;Y<$;Y++)St=Qt[Y],Xt?U&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,yt,Ft,St):e.texImage2D(n.TEXTURE_2D,Y,Ot,yt,Ft,St);S.generateMipmaps=!1}else if(Xt){if(fe){const Y=gt(it);e.texStorage2D(n.TEXTURE_2D,ft,Ot,Y.width,Y.height)}U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,yt,Ft,it)}else e.texImage2D(n.TEXTURE_2D,0,Ot,yt,Ft,it);m(S)&&p(Z),Tt.__version=K.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function st(w,S,k){if(S.image.length!==6)return;const Z=Wt(w,S),Q=S.source;e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+k);const K=i.get(Q);if(Q.version!==K.__version||Z===!0){e.activeTexture(n.TEXTURE0+k);const Tt=te.getPrimaries(te.workingColorSpace),ut=S.colorSpace===Ii?null:te.getPrimaries(S.colorSpace),vt=S.colorSpace===Ii||Tt===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const Kt=S.isCompressedTexture||S.image[0].isCompressedTexture,it=S.image[0]&&S.image[0].isDataTexture,yt=[];for(let $=0;$<6;$++)!Kt&&!it?yt[$]=g(S.image[$],!0,s.maxCubemapSize):yt[$]=it?S.image[$].image:S.image[$],yt[$]=Nt(S,yt[$]);const Ft=yt[0],Ot=r.convert(S.format,S.colorSpace),St=r.convert(S.type),Qt=x(S.internalFormat,Ot,St,S.colorSpace),Xt=S.isVideoTexture!==!0,fe=K.__version===void 0||Z===!0,U=Q.dataReady;let ft=L(S,Ft);Ut(n.TEXTURE_CUBE_MAP,S);let Y;if(Kt){Xt&&fe&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ft,Qt,Ft.width,Ft.height);for(let $=0;$<6;$++){Y=yt[$].mipmaps;for(let mt=0;mt<Y.length;mt++){const dt=Y[mt];S.format!==On?Ot!==null?Xt?U&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,mt,0,0,dt.width,dt.height,Ot,dt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,mt,Qt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,mt,0,0,dt.width,dt.height,Ot,St,dt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,mt,Qt,dt.width,dt.height,0,Ot,St,dt.data)}}}else{if(Y=S.mipmaps,Xt&&fe){Y.length>0&&ft++;const $=gt(yt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ft,Qt,$.width,$.height)}for(let $=0;$<6;$++)if(it){Xt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,yt[$].width,yt[$].height,Ot,St,yt[$].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Qt,yt[$].width,yt[$].height,0,Ot,St,yt[$].data);for(let mt=0;mt<Y.length;mt++){const kt=Y[mt].image[$].image;Xt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,mt+1,0,0,kt.width,kt.height,Ot,St,kt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,mt+1,Qt,kt.width,kt.height,0,Ot,St,kt.data)}}else{Xt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ot,St,yt[$]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Qt,Ot,St,yt[$]);for(let mt=0;mt<Y.length;mt++){const dt=Y[mt];Xt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,mt+1,0,0,Ot,St,dt.image[$]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,mt+1,Qt,Ot,St,dt.image[$])}}}m(S)&&p(n.TEXTURE_CUBE_MAP),K.__version=Q.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function Mt(w,S,k,Z,Q,K){const Tt=r.convert(k.format,k.colorSpace),ut=r.convert(k.type),vt=x(k.internalFormat,Tt,ut,k.colorSpace),Kt=i.get(S),it=i.get(k);if(it.__renderTarget=S,!Kt.__hasExternalTextures){const yt=Math.max(1,S.width>>K),Ft=Math.max(1,S.height>>K);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?e.texImage3D(Q,K,vt,yt,Ft,S.depth,0,Tt,ut,null):e.texImage2D(Q,K,vt,yt,Ft,0,Tt,ut,null)}e.bindFramebuffer(n.FRAMEBUFFER,w),xt(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,Q,it.__webglTexture,0,et(S)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,Q,it.__webglTexture,K),e.bindFramebuffer(n.FRAMEBUFFER,null)}function lt(w,S,k){if(n.bindRenderbuffer(n.RENDERBUFFER,w),S.depthBuffer){const Z=S.depthTexture,Q=Z&&Z.isDepthTexture?Z.type:null,K=v(S.stencilBuffer,Q),Tt=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=et(S);xt(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ut,K,S.width,S.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,ut,K,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,K,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Tt,n.RENDERBUFFER,w)}else{const Z=S.textures;for(let Q=0;Q<Z.length;Q++){const K=Z[Q],Tt=r.convert(K.format,K.colorSpace),ut=r.convert(K.type),vt=x(K.internalFormat,Tt,ut,K.colorSpace),Kt=et(S);k&&xt(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Kt,vt,S.width,S.height):xt(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Kt,vt,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,vt,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function bt(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(S.depthTexture);Z.__renderTarget=S,(!Z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),V(S.depthTexture,0);const Q=Z.__webglTexture,K=et(S);if(S.depthTexture.format===Ws)xt(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(S.depthTexture.format===hr)xt(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Dt(w){const S=i.get(w),k=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){const Z=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){const Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",Q)};Z.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=Z}if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");bt(S.__webglFramebuffer,w)}else if(k){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=n.createRenderbuffer(),lt(S.__webglDepthbuffer[Z],w,!1);else{const Q=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,K)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),lt(S.__webglDepthbuffer,w,!1);else{const Z=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,Q)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function It(w,S,k){const Z=i.get(w);S!==void 0&&Mt(Z.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&Dt(w)}function jt(w){const S=w.texture,k=i.get(w),Z=i.get(S);w.addEventListener("dispose",T);const Q=w.textures,K=w.isWebGLCubeRenderTarget===!0,Tt=Q.length>1;if(Tt||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=S.version,o.memory.textures++),K){k.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[ut]=[];for(let vt=0;vt<S.mipmaps.length;vt++)k.__webglFramebuffer[ut][vt]=n.createFramebuffer()}else k.__webglFramebuffer[ut]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let ut=0;ut<S.mipmaps.length;ut++)k.__webglFramebuffer[ut]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(Tt)for(let ut=0,vt=Q.length;ut<vt;ut++){const Kt=i.get(Q[ut]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&xt(w)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ut=0;ut<Q.length;ut++){const vt=Q[ut];k.__webglColorRenderbuffer[ut]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[ut]);const Kt=r.convert(vt.format,vt.colorSpace),it=r.convert(vt.type),yt=x(vt.internalFormat,Kt,it,vt.colorSpace,w.isXRRenderTarget===!0),Ft=et(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ft,yt,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,k.__webglColorRenderbuffer[ut])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),lt(k.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Ut(n.TEXTURE_CUBE_MAP,S);for(let ut=0;ut<6;ut++)if(S.mipmaps&&S.mipmaps.length>0)for(let vt=0;vt<S.mipmaps.length;vt++)Mt(k.__webglFramebuffer[ut][vt],w,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,vt);else Mt(k.__webglFramebuffer[ut],w,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(S)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let ut=0,vt=Q.length;ut<vt;ut++){const Kt=Q[ut],it=i.get(Kt);e.bindTexture(n.TEXTURE_2D,it.__webglTexture),Ut(n.TEXTURE_2D,Kt),Mt(k.__webglFramebuffer,w,Kt,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,0),m(Kt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let ut=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ut=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ut,Z.__webglTexture),Ut(ut,S),S.mipmaps&&S.mipmaps.length>0)for(let vt=0;vt<S.mipmaps.length;vt++)Mt(k.__webglFramebuffer[vt],w,S,n.COLOR_ATTACHMENT0,ut,vt);else Mt(k.__webglFramebuffer,w,S,n.COLOR_ATTACHMENT0,ut,0);m(S)&&p(ut),e.unbindTexture()}w.depthBuffer&&Dt(w)}function J(w){const S=w.textures;for(let k=0,Z=S.length;k<Z;k++){const Q=S[k];if(m(Q)){const K=E(w),Tt=i.get(Q).__webglTexture;e.bindTexture(K,Tt),p(K),e.unbindTexture()}}}const rt=[],P=[];function Ct(w){if(w.samples>0){if(xt(w)===!1){const S=w.textures,k=w.width,Z=w.height;let Q=n.COLOR_BUFFER_BIT;const K=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Tt=i.get(w),ut=S.length>1;if(ut)for(let vt=0;vt<S.length;vt++)e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let vt=0;vt<S.length;vt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),ut){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Tt.__webglColorRenderbuffer[vt]);const Kt=i.get(S[vt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Kt,0)}n.blitFramebuffer(0,0,k,Z,0,0,k,Z,Q,n.NEAREST),l===!0&&(rt.length=0,P.length=0,rt.push(n.COLOR_ATTACHMENT0+vt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(rt.push(K),P.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,P)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,rt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ut)for(let vt=0;vt<S.length;vt++){e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,Tt.__webglColorRenderbuffer[vt]);const Kt=i.get(S[vt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,Kt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const S=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function et(w){return Math.min(s.maxSamples,w.samples)}function xt(w){const S=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ct(w){const S=o.render.frame;h.get(w)!==S&&(h.set(w,S),w.update())}function Nt(w,S){const k=w.colorSpace,Z=w.format,Q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||k!==vr&&k!==Ii&&(te.getTransfer(k)===le?(Z!==On||Q!==yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}function gt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=B,this.setTexture2D=V,this.setTexture2DArray=H,this.setTexture3D=q,this.setTextureCube=G,this.rebindTextures=It,this.setupRenderTarget=jt,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=xt}function zM(n,t){function e(i,s=Ii){let r;const o=te.getTransfer(s);if(i===yi)return n.UNSIGNED_BYTE;if(i===Qc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===th)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ld)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===od)return n.BYTE;if(i===ad)return n.SHORT;if(i===Jr)return n.UNSIGNED_SHORT;if(i===Jc)return n.INT;if(i===ds)return n.UNSIGNED_INT;if(i===pi)return n.FLOAT;if(i===uo)return n.HALF_FLOAT;if(i===cd)return n.ALPHA;if(i===hd)return n.RGB;if(i===On)return n.RGBA;if(i===ud)return n.LUMINANCE;if(i===fd)return n.LUMINANCE_ALPHA;if(i===Ws)return n.DEPTH_COMPONENT;if(i===hr)return n.DEPTH_STENCIL;if(i===dd)return n.RED;if(i===eh)return n.RED_INTEGER;if(i===pd)return n.RG;if(i===nh)return n.RG_INTEGER;if(i===ih)return n.RGBA_INTEGER;if(i===ia||i===sa||i===ra||i===oa)if(o===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ia)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ia)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===sa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ra)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===oa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ic||i===sc||i===rc||i===oc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ic)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===sc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===rc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===oc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ac||i===lc||i===cc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ac||i===lc)return o===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===cc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===hc||i===uc||i===fc||i===dc||i===pc||i===mc||i===_c||i===gc||i===vc||i===xc||i===Mc||i===yc||i===Sc||i===Ec)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===hc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===uc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===fc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===dc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===pc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===mc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_c)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===vc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===xc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Mc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Sc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ec)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===aa||i===bc||i===Tc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===aa)return o===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===bc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Tc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===md||i===wc||i===Ac||i===Rc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===aa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===wc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ac)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Rc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===cr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class kM extends dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class qe extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}const HM={type:"move"};class Ml{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,i),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,_=.005;c.inputState.pinching&&u>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(HM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new qe;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const GM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,VM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class WM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new sn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ki({vertexShader:GM,fragmentShader:VM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new pe(new mo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class XM extends gs{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,_=null;const g=new WM,m=e.getContextAttributes();let p=null,E=null;const x=[],v=[],L=new nt;let A=null;const T=new dn;T.viewport=new he;const R=new dn;R.viewport=new he;const y=[T,R],M=new kM;let C=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let st=x[j];return st===void 0&&(st=new Ml,x[j]=st),st.getTargetRaySpace()},this.getControllerGrip=function(j){let st=x[j];return st===void 0&&(st=new Ml,x[j]=st),st.getGripSpace()},this.getHand=function(j){let st=x[j];return st===void 0&&(st=new Ml,x[j]=st),st.getHandSpace()};function I(j){const st=v.indexOf(j.inputSource);if(st===-1)return;const Mt=x[st];Mt!==void 0&&(Mt.update(j.inputSource,j.frame,c||o),Mt.dispatchEvent({type:j.type,data:j.inputSource}))}function z(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",V);for(let j=0;j<x.length;j++){const st=v[j];st!==null&&(v[j]=null,x[j].disconnect(st))}C=null,B=null,g.reset(),t.setRenderTarget(p),d=null,u=null,f=null,s=null,E=null,Wt.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",z),s.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){const st={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),E=new ps(d.framebufferWidth,d.framebufferHeight,{format:On,type:yi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let st=null,Mt=null,lt=null;m.depth&&(lt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=m.stencil?hr:Ws,Mt=m.stencil?cr:ds);const bt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};f=new XRWebGLBinding(s,e),u=f.createProjectionLayer(bt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),E=new ps(u.textureWidth,u.textureHeight,{format:On,type:yi,depthTexture:new Cd(u.textureWidth,u.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Wt.setContext(s),Wt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function V(j){for(let st=0;st<j.removed.length;st++){const Mt=j.removed[st],lt=v.indexOf(Mt);lt>=0&&(v[lt]=null,x[lt].disconnect(Mt))}for(let st=0;st<j.added.length;st++){const Mt=j.added[st];let lt=v.indexOf(Mt);if(lt===-1){for(let Dt=0;Dt<x.length;Dt++)if(Dt>=v.length){v.push(Mt),lt=Dt;break}else if(v[Dt]===null){v[Dt]=Mt,lt=Dt;break}if(lt===-1)break}const bt=x[lt];bt&&bt.connect(Mt)}}const H=new D,q=new D;function G(j,st,Mt){H.setFromMatrixPosition(st.matrixWorld),q.setFromMatrixPosition(Mt.matrixWorld);const lt=H.distanceTo(q),bt=st.projectionMatrix.elements,Dt=Mt.projectionMatrix.elements,It=bt[14]/(bt[10]-1),jt=bt[14]/(bt[10]+1),J=(bt[9]+1)/bt[5],rt=(bt[9]-1)/bt[5],P=(bt[8]-1)/bt[0],Ct=(Dt[8]+1)/Dt[0],et=It*P,xt=It*Ct,ct=lt/(-P+Ct),Nt=ct*-P;if(st.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Nt),j.translateZ(ct),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),bt[10]===-1)j.projectionMatrix.copy(st.projectionMatrix),j.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const gt=It+ct,w=jt+ct,S=et-Nt,k=xt+(lt-Nt),Z=J*jt/w*gt,Q=rt*jt/w*gt;j.projectionMatrix.makePerspective(S,k,Z,Q,gt,w),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function tt(j,st){st===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(st.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let st=j.near,Mt=j.far;g.texture!==null&&(g.depthNear>0&&(st=g.depthNear),g.depthFar>0&&(Mt=g.depthFar)),M.near=R.near=T.near=st,M.far=R.far=T.far=Mt,(C!==M.near||B!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,B=M.far),T.layers.mask=j.layers.mask|2,R.layers.mask=j.layers.mask|4,M.layers.mask=T.layers.mask|R.layers.mask;const lt=j.parent,bt=M.cameras;tt(M,lt);for(let Dt=0;Dt<bt.length;Dt++)tt(bt[Dt],lt);bt.length===2?G(M,T,R):M.projectionMatrix.copy(T.projectionMatrix),at(j,M,lt)};function at(j,st,Mt){Mt===null?j.matrix.copy(st.matrixWorld):(j.matrix.copy(Mt.matrixWorld),j.matrix.invert(),j.matrix.multiply(st.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(st.projectionMatrix),j.projectionMatrixInverse.copy(st.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Cc*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(j){l=j,u!==null&&(u.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let _t=null;function Ut(j,st){if(h=st.getViewerPose(c||o),_=st,h!==null){const Mt=h.views;d!==null&&(t.setRenderTargetFramebuffer(E,d.framebuffer),t.setRenderTarget(E));let lt=!1;Mt.length!==M.cameras.length&&(M.cameras.length=0,lt=!0);for(let Dt=0;Dt<Mt.length;Dt++){const It=Mt[Dt];let jt=null;if(d!==null)jt=d.getViewport(It);else{const rt=f.getViewSubImage(u,It);jt=rt.viewport,Dt===0&&(t.setRenderTargetTextures(E,rt.colorTexture,u.ignoreDepthValues?void 0:rt.depthStencilTexture),t.setRenderTarget(E))}let J=y[Dt];J===void 0&&(J=new dn,J.layers.enable(Dt),J.viewport=new he,y[Dt]=J),J.matrix.fromArray(It.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(It.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(jt.x,jt.y,jt.width,jt.height),Dt===0&&(M.matrix.copy(J.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),lt===!0&&M.cameras.push(J)}const bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const Dt=f.getDepthInformation(Mt[0]);Dt&&Dt.isValid&&Dt.texture&&g.init(t,Dt,s.renderState)}}for(let Mt=0;Mt<x.length;Mt++){const lt=v[Mt],bt=x[Mt];lt!==null&&bt!==void 0&&bt.update(lt,st,c||o)}_t&&_t(j,st),st.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:st}),_=null}const Wt=new Ad;Wt.setAnimationLoop(Ut),this.setAnimationLoop=function(j){_t=j},this.dispose=function(){}}}const ji=new Hn,qM=new _e;function YM(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,bd(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,E,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===nn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===nn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=t.get(p),x=E.envMap,v=E.envMapRotation;x&&(m.envMap.value=x,ji.copy(v),ji.x*=-1,ji.y*=-1,ji.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),m.envMapRotation.value.setFromMatrix4(qM.makeRotationFromEuler(ji)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function jM(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,x){const v=x.program;i.uniformBlockBinding(E,v)}function c(E,x){let v=s[E.id];v===void 0&&(_(E),v=h(E),s[E.id]=v,E.addEventListener("dispose",m));const L=x.program;i.updateUBOMapping(E,L);const A=t.render.frame;r[E.id]!==A&&(u(E),r[E.id]=A)}function h(E){const x=f();E.__bindingPointIndex=x;const v=n.createBuffer(),L=E.__size,A=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,L,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,v),v}function f(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(E){const x=s[E.id],v=E.uniforms,L=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let A=0,T=v.length;A<T;A++){const R=Array.isArray(v[A])?v[A]:[v[A]];for(let y=0,M=R.length;y<M;y++){const C=R[y];if(d(C,A,y,L)===!0){const B=C.__offset,I=Array.isArray(C.value)?C.value:[C.value];let z=0;for(let V=0;V<I.length;V++){const H=I[V],q=g(H);typeof H=="number"||typeof H=="boolean"?(C.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,B+z,C.__data)):H.isMatrix3?(C.__data[0]=H.elements[0],C.__data[1]=H.elements[1],C.__data[2]=H.elements[2],C.__data[3]=0,C.__data[4]=H.elements[3],C.__data[5]=H.elements[4],C.__data[6]=H.elements[5],C.__data[7]=0,C.__data[8]=H.elements[6],C.__data[9]=H.elements[7],C.__data[10]=H.elements[8],C.__data[11]=0):(H.toArray(C.__data,z),z+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(E,x,v,L){const A=E.value,T=x+"_"+v;if(L[T]===void 0)return typeof A=="number"||typeof A=="boolean"?L[T]=A:L[T]=A.clone(),!0;{const R=L[T];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return L[T]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function _(E){const x=E.uniforms;let v=0;const L=16;for(let T=0,R=x.length;T<R;T++){const y=Array.isArray(x[T])?x[T]:[x[T]];for(let M=0,C=y.length;M<C;M++){const B=y[M],I=Array.isArray(B.value)?B.value:[B.value];for(let z=0,V=I.length;z<V;z++){const H=I[z],q=g(H),G=v%L,tt=G%q.boundary,at=G+tt;v+=tt,at!==0&&L-at<q.storage&&(v+=L-at),B.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=v,v+=q.storage}}}const A=v%L;return A>0&&(v+=L-A),E.__size=v,E.__cache={},this}function g(E){const x={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(x.boundary=4,x.storage=4):E.isVector2?(x.boundary=8,x.storage=8):E.isVector3||E.isColor?(x.boundary=16,x.storage=12):E.isVector4?(x.boundary=16,x.storage=16):E.isMatrix3?(x.boundary=48,x.storage=48):E.isMatrix4?(x.boundary=64,x.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),x}function m(E){const x=E.target;x.removeEventListener("dispose",m);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const E in s)n.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class ZM{constructor(t={}){const{canvas:e=O_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const E=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mn,this.toneMapping=zi,this.toneMappingExposure=1;const v=this;let L=!1,A=0,T=0,R=null,y=-1,M=null;const C=new he,B=new he;let I=null;const z=new Yt(0);let V=0,H=e.width,q=e.height,G=1,tt=null,at=null;const _t=new he(0,0,H,q),Ut=new he(0,0,H,q);let Wt=!1;const j=new rh;let st=!1,Mt=!1;const lt=new _e,bt=new _e,Dt=new D,It=new he,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let J=!1;function rt(){return R===null?G:1}let P=i;function Ct(b,N){return e.getContext(b,N)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Kc}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),P===null){const N="webgl2";if(P=Ct(N,b),P===null)throw Ct(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let et,xt,ct,Nt,gt,w,S,k,Z,Q,K,Tt,ut,vt,Kt,it,yt,Ft,Ot,St,Qt,Xt,fe,U;function ft(){et=new tx(P),et.init(),Xt=new zM(P,et),xt=new j0(P,et,t,Xt),ct=new FM(P,et),xt.reverseDepthBuffer&&u&&ct.buffers.depth.setReversed(!0),Nt=new ix(P),gt=new yM,w=new BM(P,et,ct,gt,xt,Xt,Nt),S=new K0(v),k=new Q0(v),Z=new hg(P),fe=new q0(P,Z),Q=new ex(P,Z,Nt,fe),K=new rx(P,Q,Z,Nt),Ot=new sx(P,xt,w),it=new Z0(gt),Tt=new MM(v,S,k,et,xt,fe,it),ut=new YM(v,gt),vt=new EM,Kt=new CM(et),Ft=new X0(v,S,k,ct,K,d,l),yt=new UM(v,K,xt),U=new jM(P,Nt,xt,ct),St=new Y0(P,et,Nt),Qt=new nx(P,et,Nt),Nt.programs=Tt.programs,v.capabilities=xt,v.extensions=et,v.properties=gt,v.renderLists=vt,v.shadowMap=yt,v.state=ct,v.info=Nt}ft();const Y=new XM(v,P);this.xr=Y,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const b=et.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=et.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(b){b!==void 0&&(G=b,this.setSize(H,q,!1))},this.getSize=function(b){return b.set(H,q)},this.setSize=function(b,N,W=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=b,q=N,e.width=Math.floor(b*G),e.height=Math.floor(N*G),W===!0&&(e.style.width=b+"px",e.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(H*G,q*G).floor()},this.setDrawingBufferSize=function(b,N,W){H=b,q=N,G=W,e.width=Math.floor(b*W),e.height=Math.floor(N*W),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(C)},this.getViewport=function(b){return b.copy(_t)},this.setViewport=function(b,N,W,X){b.isVector4?_t.set(b.x,b.y,b.z,b.w):_t.set(b,N,W,X),ct.viewport(C.copy(_t).multiplyScalar(G).round())},this.getScissor=function(b){return b.copy(Ut)},this.setScissor=function(b,N,W,X){b.isVector4?Ut.set(b.x,b.y,b.z,b.w):Ut.set(b,N,W,X),ct.scissor(B.copy(Ut).multiplyScalar(G).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(b){ct.setScissorTest(Wt=b)},this.setOpaqueSort=function(b){tt=b},this.setTransparentSort=function(b){at=b},this.getClearColor=function(b){return b.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor.apply(Ft,arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha.apply(Ft,arguments)},this.clear=function(b=!0,N=!0,W=!0){let X=0;if(b){let F=!1;if(R!==null){const ot=R.texture.format;F=ot===ih||ot===nh||ot===eh}if(F){const ot=R.texture.type,pt=ot===yi||ot===ds||ot===Jr||ot===cr||ot===Qc||ot===th,wt=Ft.getClearColor(),At=Ft.getClearAlpha(),Bt=wt.r,Ht=wt.g,Rt=wt.b;pt?(_[0]=Bt,_[1]=Ht,_[2]=Rt,_[3]=At,P.clearBufferuiv(P.COLOR,0,_)):(g[0]=Bt,g[1]=Ht,g[2]=Rt,g[3]=At,P.clearBufferiv(P.COLOR,0,g))}else X|=P.COLOR_BUFFER_BIT}N&&(X|=P.DEPTH_BUFFER_BIT),W&&(X|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),vt.dispose(),Kt.dispose(),gt.dispose(),S.dispose(),k.dispose(),K.dispose(),fe.dispose(),U.dispose(),Tt.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",xh),Y.removeEventListener("sessionend",Mh),Gi.stop()};function $(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const b=Nt.autoReset,N=yt.enabled,W=yt.autoUpdate,X=yt.needsUpdate,F=yt.type;ft(),Nt.autoReset=b,yt.enabled=N,yt.autoUpdate=W,yt.needsUpdate=X,yt.type=F}function dt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function kt(b){const N=b.target;N.removeEventListener("dispose",kt),ye(N)}function ye(b){Be(b),gt.remove(b)}function Be(b){const N=gt.get(b).programs;N!==void 0&&(N.forEach(function(W){Tt.releaseProgram(W)}),b.isShaderMaterial&&Tt.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,W,X,F,ot){N===null&&(N=jt);const pt=F.isMesh&&F.matrixWorld.determinant()<0,wt=qd(b,N,W,X,F);ct.setMaterial(X,pt);let At=W.index,Bt=1;if(X.wireframe===!0){if(At=Q.getWireframeAttribute(W),At===void 0)return;Bt=2}const Ht=W.drawRange,Rt=W.attributes.position;let ee=Ht.start*Bt,de=(Ht.start+Ht.count)*Bt;ot!==null&&(ee=Math.max(ee,ot.start*Bt),de=Math.min(de,(ot.start+ot.count)*Bt)),At!==null?(ee=Math.max(ee,0),de=Math.min(de,At.count)):Rt!=null&&(ee=Math.max(ee,0),de=Math.min(de,Rt.count));const ge=de-ee;if(ge<0||ge===1/0)return;fe.setup(F,X,wt,W,At);let Ze,ie=St;if(At!==null&&(Ze=Z.get(At),ie=Qt,ie.setIndex(Ze)),F.isMesh)X.wireframe===!0?(ct.setLineWidth(X.wireframeLinewidth*rt()),ie.setMode(P.LINES)):ie.setMode(P.TRIANGLES);else if(F.isLine){let Pt=X.linewidth;Pt===void 0&&(Pt=1),ct.setLineWidth(Pt*rt()),F.isLineSegments?ie.setMode(P.LINES):F.isLineLoop?ie.setMode(P.LINE_LOOP):ie.setMode(P.LINE_STRIP)}else F.isPoints?ie.setMode(P.POINTS):F.isSprite&&ie.setMode(P.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ie.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))ie.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Pt=F._multiDrawStarts,ni=F._multiDrawCounts,se=F._multiDrawCount,Rn=At?Z.get(At).bytesPerElement:1,vs=gt.get(X).currentProgram.getUniforms();for(let rn=0;rn<se;rn++)vs.setValue(P,"_gl_DrawID",rn),ie.render(Pt[rn]/Rn,ni[rn])}else if(F.isInstancedMesh)ie.renderInstances(ee,ge,F.count);else if(W.isInstancedBufferGeometry){const Pt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ni=Math.min(W.instanceCount,Pt);ie.renderInstances(ee,ge,ni)}else ie.render(ee,ge)};function re(b,N,W){b.transparent===!0&&b.side===yn&&b.forceSinglePass===!1?(b.side=nn,b.needsUpdate=!0,go(b,N,W),b.side=Mi,b.needsUpdate=!0,go(b,N,W),b.side=yn):go(b,N,W)}this.compile=function(b,N,W=null){W===null&&(W=b),p=Kt.get(W),p.init(N),x.push(p),W.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),b!==W&&b.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const X=new Set;return b.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ot=F.material;if(ot)if(Array.isArray(ot))for(let pt=0;pt<ot.length;pt++){const wt=ot[pt];re(wt,W,F),X.add(wt)}else re(ot,W,F),X.add(ot)}),x.pop(),p=null,X},this.compileAsync=function(b,N,W=null){const X=this.compile(b,N,W);return new Promise(F=>{function ot(){if(X.forEach(function(pt){gt.get(pt).currentProgram.isReady()&&X.delete(pt)}),X.size===0){F(b);return}setTimeout(ot,10)}et.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let An=null;function ei(b){An&&An(b)}function xh(){Gi.stop()}function Mh(){Gi.start()}const Gi=new Ad;Gi.setAnimationLoop(ei),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(b){An=b,Y.setAnimationLoop(b),b===null?Gi.stop():Gi.start()},Y.addEventListener("sessionstart",xh),Y.addEventListener("sessionend",Mh),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(N),N=Y.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,N,R),p=Kt.get(b,x.length),p.init(N),x.push(p),bt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),j.setFromProjectionMatrix(bt),Mt=this.localClippingEnabled,st=it.init(this.clippingPlanes,Mt),m=vt.get(b,E.length),m.init(),E.push(m),Y.enabled===!0&&Y.isPresenting===!0){const ot=v.xr.getDepthSensingMesh();ot!==null&&Fa(ot,N,-1/0,v.sortObjects)}Fa(b,N,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(tt,at),J=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,J&&Ft.addToRenderList(m,b),this.info.render.frame++,st===!0&&it.beginShadows();const W=p.state.shadowsArray;yt.render(W,b,N),st===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,F=m.transmissive;if(p.setupLights(),N.isArrayCamera){const ot=N.cameras;if(F.length>0)for(let pt=0,wt=ot.length;pt<wt;pt++){const At=ot[pt];Sh(X,F,b,At)}J&&Ft.render(b);for(let pt=0,wt=ot.length;pt<wt;pt++){const At=ot[pt];yh(m,b,At,At.viewport)}}else F.length>0&&Sh(X,F,b,N),J&&Ft.render(b),yh(m,b,N);R!==null&&(w.updateMultisampleRenderTarget(R),w.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(v,b,N),fe.resetDefaultState(),y=-1,M=null,x.pop(),x.length>0?(p=x[x.length-1],st===!0&&it.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Fa(b,N,W,X){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||j.intersectsSprite(b)){X&&It.setFromMatrixPosition(b.matrixWorld).applyMatrix4(bt);const pt=K.update(b),wt=b.material;wt.visible&&m.push(b,pt,wt,W,It.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||j.intersectsObject(b))){const pt=K.update(b),wt=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),It.copy(b.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),It.copy(pt.boundingSphere.center)),It.applyMatrix4(b.matrixWorld).applyMatrix4(bt)),Array.isArray(wt)){const At=pt.groups;for(let Bt=0,Ht=At.length;Bt<Ht;Bt++){const Rt=At[Bt],ee=wt[Rt.materialIndex];ee&&ee.visible&&m.push(b,pt,ee,W,It.z,Rt)}}else wt.visible&&m.push(b,pt,wt,W,It.z,null)}}const ot=b.children;for(let pt=0,wt=ot.length;pt<wt;pt++)Fa(ot[pt],N,W,X)}function yh(b,N,W,X){const F=b.opaque,ot=b.transmissive,pt=b.transparent;p.setupLightsView(W),st===!0&&it.setGlobalState(v.clippingPlanes,W),X&&ct.viewport(C.copy(X)),F.length>0&&_o(F,N,W),ot.length>0&&_o(ot,N,W),pt.length>0&&_o(pt,N,W),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function Sh(b,N,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new ps(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?uo:yi,minFilter:ns,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const ot=p.state.transmissionRenderTarget[X.id],pt=X.viewport||C;ot.setSize(pt.z,pt.w);const wt=v.getRenderTarget();v.setRenderTarget(ot),v.getClearColor(z),V=v.getClearAlpha(),V<1&&v.setClearColor(16777215,.5),v.clear(),J&&Ft.render(W);const At=v.toneMapping;v.toneMapping=zi;const Bt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),st===!0&&it.setGlobalState(v.clippingPlanes,X),_o(b,W,X),w.updateMultisampleRenderTarget(ot),w.updateRenderTargetMipmap(ot),et.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let Rt=0,ee=N.length;Rt<ee;Rt++){const de=N[Rt],ge=de.object,Ze=de.geometry,ie=de.material,Pt=de.group;if(ie.side===yn&&ge.layers.test(X.layers)){const ni=ie.side;ie.side=nn,ie.needsUpdate=!0,Eh(ge,W,X,Ze,ie,Pt),ie.side=ni,ie.needsUpdate=!0,Ht=!0}}Ht===!0&&(w.updateMultisampleRenderTarget(ot),w.updateRenderTargetMipmap(ot))}v.setRenderTarget(wt),v.setClearColor(z,V),Bt!==void 0&&(X.viewport=Bt),v.toneMapping=At}function _o(b,N,W){const X=N.isScene===!0?N.overrideMaterial:null;for(let F=0,ot=b.length;F<ot;F++){const pt=b[F],wt=pt.object,At=pt.geometry,Bt=X===null?pt.material:X,Ht=pt.group;wt.layers.test(W.layers)&&Eh(wt,N,W,At,Bt,Ht)}}function Eh(b,N,W,X,F,ot){b.onBeforeRender(v,N,W,X,F,ot),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.onBeforeRender(v,N,W,X,b,ot),F.transparent===!0&&F.side===yn&&F.forceSinglePass===!1?(F.side=nn,F.needsUpdate=!0,v.renderBufferDirect(W,N,X,F,b,ot),F.side=Mi,F.needsUpdate=!0,v.renderBufferDirect(W,N,X,F,b,ot),F.side=yn):v.renderBufferDirect(W,N,X,F,b,ot),b.onAfterRender(v,N,W,X,F,ot)}function go(b,N,W){N.isScene!==!0&&(N=jt);const X=gt.get(b),F=p.state.lights,ot=p.state.shadowsArray,pt=F.state.version,wt=Tt.getParameters(b,F.state,ot,N,W),At=Tt.getProgramCacheKey(wt);let Bt=X.programs;X.environment=b.isMeshStandardMaterial?N.environment:null,X.fog=N.fog,X.envMap=(b.isMeshStandardMaterial?k:S).get(b.envMap||X.environment),X.envMapRotation=X.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,Bt===void 0&&(b.addEventListener("dispose",kt),Bt=new Map,X.programs=Bt);let Ht=Bt.get(At);if(Ht!==void 0){if(X.currentProgram===Ht&&X.lightsStateVersion===pt)return Th(b,wt),Ht}else wt.uniforms=Tt.getUniforms(b),b.onBeforeCompile(wt,v),Ht=Tt.acquireProgram(wt,At),Bt.set(At,Ht),X.uniforms=wt.uniforms;const Rt=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Rt.clippingPlanes=it.uniform),Th(b,wt),X.needsLights=jd(b),X.lightsStateVersion=pt,X.needsLights&&(Rt.ambientLightColor.value=F.state.ambient,Rt.lightProbe.value=F.state.probe,Rt.directionalLights.value=F.state.directional,Rt.directionalLightShadows.value=F.state.directionalShadow,Rt.spotLights.value=F.state.spot,Rt.spotLightShadows.value=F.state.spotShadow,Rt.rectAreaLights.value=F.state.rectArea,Rt.ltc_1.value=F.state.rectAreaLTC1,Rt.ltc_2.value=F.state.rectAreaLTC2,Rt.pointLights.value=F.state.point,Rt.pointLightShadows.value=F.state.pointShadow,Rt.hemisphereLights.value=F.state.hemi,Rt.directionalShadowMap.value=F.state.directionalShadowMap,Rt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Rt.spotShadowMap.value=F.state.spotShadowMap,Rt.spotLightMatrix.value=F.state.spotLightMatrix,Rt.spotLightMap.value=F.state.spotLightMap,Rt.pointShadowMap.value=F.state.pointShadowMap,Rt.pointShadowMatrix.value=F.state.pointShadowMatrix),X.currentProgram=Ht,X.uniformsList=null,Ht}function bh(b){if(b.uniformsList===null){const N=b.currentProgram.getUniforms();b.uniformsList=la.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function Th(b,N){const W=gt.get(b);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.batchingColor=N.batchingColor,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.instancingMorph=N.instancingMorph,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function qd(b,N,W,X,F){N.isScene!==!0&&(N=jt),w.resetTextureUnits();const ot=N.fog,pt=X.isMeshStandardMaterial?N.environment:null,wt=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:vr,At=(X.isMeshStandardMaterial?k:S).get(X.envMap||pt),Bt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ht=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Rt=!!W.morphAttributes.position,ee=!!W.morphAttributes.normal,de=!!W.morphAttributes.color;let ge=zi;X.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ge=v.toneMapping);const Ze=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ie=Ze!==void 0?Ze.length:0,Pt=gt.get(X),ni=p.state.lights;if(st===!0&&(Mt===!0||b!==M)){const pn=b===M&&X.id===y;it.setState(X,b,pn)}let se=!1;X.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==ni.state.version||Pt.outputColorSpace!==wt||F.isBatchedMesh&&Pt.batching===!1||!F.isBatchedMesh&&Pt.batching===!0||F.isBatchedMesh&&Pt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Pt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Pt.instancing===!1||!F.isInstancedMesh&&Pt.instancing===!0||F.isSkinnedMesh&&Pt.skinning===!1||!F.isSkinnedMesh&&Pt.skinning===!0||F.isInstancedMesh&&Pt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Pt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Pt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Pt.instancingMorph===!1&&F.morphTexture!==null||Pt.envMap!==At||X.fog===!0&&Pt.fog!==ot||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==it.numPlanes||Pt.numIntersection!==it.numIntersection)||Pt.vertexAlphas!==Bt||Pt.vertexTangents!==Ht||Pt.morphTargets!==Rt||Pt.morphNormals!==ee||Pt.morphColors!==de||Pt.toneMapping!==ge||Pt.morphTargetsCount!==ie)&&(se=!0):(se=!0,Pt.__version=X.version);let Rn=Pt.currentProgram;se===!0&&(Rn=go(X,N,F));let vs=!1,rn=!1,Sr=!1;const ve=Rn.getUniforms(),Gn=Pt.uniforms;if(ct.useProgram(Rn.program)&&(vs=!0,rn=!0,Sr=!0),X.id!==y&&(y=X.id,rn=!0),vs||M!==b){ct.buffers.depth.getReversed()?(lt.copy(b.projectionMatrix),z_(lt),k_(lt),ve.setValue(P,"projectionMatrix",lt)):ve.setValue(P,"projectionMatrix",b.projectionMatrix),ve.setValue(P,"viewMatrix",b.matrixWorldInverse);const Ei=ve.map.cameraPosition;Ei!==void 0&&Ei.setValue(P,Dt.setFromMatrixPosition(b.matrixWorld)),xt.logarithmicDepthBuffer&&ve.setValue(P,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ve.setValue(P,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,rn=!0,Sr=!0)}if(F.isSkinnedMesh){ve.setOptional(P,F,"bindMatrix"),ve.setOptional(P,F,"bindMatrixInverse");const pn=F.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),ve.setValue(P,"boneTexture",pn.boneTexture,w))}F.isBatchedMesh&&(ve.setOptional(P,F,"batchingTexture"),ve.setValue(P,"batchingTexture",F._matricesTexture,w),ve.setOptional(P,F,"batchingIdTexture"),ve.setValue(P,"batchingIdTexture",F._indirectTexture,w),ve.setOptional(P,F,"batchingColorTexture"),F._colorsTexture!==null&&ve.setValue(P,"batchingColorTexture",F._colorsTexture,w));const Er=W.morphAttributes;if((Er.position!==void 0||Er.normal!==void 0||Er.color!==void 0)&&Ot.update(F,W,Rn),(rn||Pt.receiveShadow!==F.receiveShadow)&&(Pt.receiveShadow=F.receiveShadow,ve.setValue(P,"receiveShadow",F.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Gn.envMap.value=At,Gn.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&N.environment!==null&&(Gn.envMapIntensity.value=N.environmentIntensity),rn&&(ve.setValue(P,"toneMappingExposure",v.toneMappingExposure),Pt.needsLights&&Yd(Gn,Sr),ot&&X.fog===!0&&ut.refreshFogUniforms(Gn,ot),ut.refreshMaterialUniforms(Gn,X,G,q,p.state.transmissionRenderTarget[b.id]),la.upload(P,bh(Pt),Gn,w)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(la.upload(P,bh(Pt),Gn,w),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ve.setValue(P,"center",F.center),ve.setValue(P,"modelViewMatrix",F.modelViewMatrix),ve.setValue(P,"normalMatrix",F.normalMatrix),ve.setValue(P,"modelMatrix",F.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const pn=X.uniformsGroups;for(let Ei=0,bi=pn.length;Ei<bi;Ei++){const wh=pn[Ei];U.update(wh,Rn),U.bind(wh,Rn)}}return Rn}function Yd(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function jd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,N,W){gt.get(b.texture).__webglTexture=N,gt.get(b.depthTexture).__webglTexture=W;const X=gt.get(b);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,N){const W=gt.get(b);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,W=0){R=b,A=N,T=W;let X=!0,F=null,ot=!1,pt=!1;if(b){const At=gt.get(b);if(At.__useDefaultFramebuffer!==void 0)ct.bindFramebuffer(P.FRAMEBUFFER,null),X=!1;else if(At.__webglFramebuffer===void 0)w.setupRenderTarget(b);else if(At.__hasExternalTextures)w.rebindTextures(b,gt.get(b.texture).__webglTexture,gt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Rt=b.depthTexture;if(At.__boundDepthTexture!==Rt){if(Rt!==null&&gt.has(Rt)&&(b.width!==Rt.image.width||b.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(b)}}const Bt=b.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(pt=!0);const Ht=gt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ht[N])?F=Ht[N][W]:F=Ht[N],ot=!0):b.samples>0&&w.useMultisampledRTT(b)===!1?F=gt.get(b).__webglMultisampledFramebuffer:Array.isArray(Ht)?F=Ht[W]:F=Ht,C.copy(b.viewport),B.copy(b.scissor),I=b.scissorTest}else C.copy(_t).multiplyScalar(G).floor(),B.copy(Ut).multiplyScalar(G).floor(),I=Wt;if(ct.bindFramebuffer(P.FRAMEBUFFER,F)&&X&&ct.drawBuffers(b,F),ct.viewport(C),ct.scissor(B),ct.setScissorTest(I),ot){const At=gt.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+N,At.__webglTexture,W)}else if(pt){const At=gt.get(b.texture),Bt=N||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,At.__webglTexture,W||0,Bt)}y=-1},this.readRenderTargetPixels=function(b,N,W,X,F,ot,pt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=gt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&pt!==void 0&&(wt=wt[pt]),wt){ct.bindFramebuffer(P.FRAMEBUFFER,wt);try{const At=b.texture,Bt=At.format,Ht=At.type;if(!xt.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xt.textureTypeReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-X&&W>=0&&W<=b.height-F&&P.readPixels(N,W,X,F,Xt.convert(Bt),Xt.convert(Ht),ot)}finally{const At=R!==null?gt.get(R).__webglFramebuffer:null;ct.bindFramebuffer(P.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(b,N,W,X,F,ot,pt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=gt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&pt!==void 0&&(wt=wt[pt]),wt){const At=b.texture,Bt=At.format,Ht=At.type;if(!xt.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xt.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=b.width-X&&W>=0&&W<=b.height-F){ct.bindFramebuffer(P.FRAMEBUFFER,wt);const Rt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Rt),P.bufferData(P.PIXEL_PACK_BUFFER,ot.byteLength,P.STREAM_READ),P.readPixels(N,W,X,F,Xt.convert(Bt),Xt.convert(Ht),0);const ee=R!==null?gt.get(R).__webglFramebuffer:null;ct.bindFramebuffer(P.FRAMEBUFFER,ee);const de=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await B_(P,de,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Rt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ot),P.deleteBuffer(Rt),P.deleteSync(de),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,N=null,W=0){b.isTexture!==!0&&(Br("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,b=arguments[1]);const X=Math.pow(2,-W),F=Math.floor(b.image.width*X),ot=Math.floor(b.image.height*X),pt=N!==null?N.x:0,wt=N!==null?N.y:0;w.setTexture2D(b,0),P.copyTexSubImage2D(P.TEXTURE_2D,W,0,0,pt,wt,F,ot),ct.unbindTexture()},this.copyTextureToTexture=function(b,N,W=null,X=null,F=0){b.isTexture!==!0&&(Br("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,b=arguments[1],N=arguments[2],F=arguments[3]||0,W=null);let ot,pt,wt,At,Bt,Ht,Rt,ee,de;const ge=b.isCompressedTexture?b.mipmaps[F]:b.image;W!==null?(ot=W.max.x-W.min.x,pt=W.max.y-W.min.y,wt=W.isBox3?W.max.z-W.min.z:1,At=W.min.x,Bt=W.min.y,Ht=W.isBox3?W.min.z:0):(ot=ge.width,pt=ge.height,wt=ge.depth||1,At=0,Bt=0,Ht=0),X!==null?(Rt=X.x,ee=X.y,de=X.z):(Rt=0,ee=0,de=0);const Ze=Xt.convert(N.format),ie=Xt.convert(N.type);let Pt;N.isData3DTexture?(w.setTexture3D(N,0),Pt=P.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(w.setTexture2DArray(N,0),Pt=P.TEXTURE_2D_ARRAY):(w.setTexture2D(N,0),Pt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);const ni=P.getParameter(P.UNPACK_ROW_LENGTH),se=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Rn=P.getParameter(P.UNPACK_SKIP_PIXELS),vs=P.getParameter(P.UNPACK_SKIP_ROWS),rn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ge.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ge.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,At),P.pixelStorei(P.UNPACK_SKIP_ROWS,Bt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ht);const Sr=b.isDataArrayTexture||b.isData3DTexture,ve=N.isDataArrayTexture||N.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const Gn=gt.get(b),Er=gt.get(N),pn=gt.get(Gn.__renderTarget),Ei=gt.get(Er.__renderTarget);ct.bindFramebuffer(P.READ_FRAMEBUFFER,pn.__webglFramebuffer),ct.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let bi=0;bi<wt;bi++)Sr&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,gt.get(b).__webglTexture,F,Ht+bi),b.isDepthTexture?(ve&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,gt.get(N).__webglTexture,F,de+bi),P.blitFramebuffer(At,Bt,ot,pt,Rt,ee,ot,pt,P.DEPTH_BUFFER_BIT,P.NEAREST)):ve?P.copyTexSubImage3D(Pt,F,Rt,ee,de+bi,At,Bt,ot,pt):P.copyTexSubImage2D(Pt,F,Rt,ee,de+bi,At,Bt,ot,pt);ct.bindFramebuffer(P.READ_FRAMEBUFFER,null),ct.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else ve?b.isDataTexture||b.isData3DTexture?P.texSubImage3D(Pt,F,Rt,ee,de,ot,pt,wt,Ze,ie,ge.data):N.isCompressedArrayTexture?P.compressedTexSubImage3D(Pt,F,Rt,ee,de,ot,pt,wt,Ze,ge.data):P.texSubImage3D(Pt,F,Rt,ee,de,ot,pt,wt,Ze,ie,ge):b.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,F,Rt,ee,ot,pt,Ze,ie,ge.data):b.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,F,Rt,ee,ge.width,ge.height,Ze,ge.data):P.texSubImage2D(P.TEXTURE_2D,F,Rt,ee,ot,pt,Ze,ie,ge);P.pixelStorei(P.UNPACK_ROW_LENGTH,ni),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,se),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Rn),P.pixelStorei(P.UNPACK_SKIP_ROWS,vs),P.pixelStorei(P.UNPACK_SKIP_IMAGES,rn),F===0&&N.generateMipmaps&&P.generateMipmap(Pt),ct.unbindTexture()},this.copyTextureToTexture3D=function(b,N,W=null,X=null,F=0){return b.isTexture!==!0&&(Br("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,b=arguments[2],N=arguments[3],F=arguments[4]||0),Br('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,N,W,X,F)},this.initRenderTarget=function(b){gt.get(b).__webglFramebuffer===void 0&&w.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?w.setTextureCube(b,0):b.isData3DTexture?w.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?w.setTexture2DArray(b,0):w.setTexture2D(b,0),ct.unbindTexture()},this.resetState=function(){A=0,T=0,R=null,ct.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}class ah{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Yt(t),this.density=e}clone(){return new ah(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class KM extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class qr extends Hi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const va=new D,xa=new D,Ou=new _e,Pr=new Da,Ho=new po,yl=new D,Bu=new D;class Ud extends Ie{constructor(t=new Ee,e=new qr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)va.fromBufferAttribute(e,s-1),xa.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=va.distanceTo(xa);t.setAttribute("lineDistance",new ne(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ho.copy(i.boundingSphere),Ho.applyMatrix4(s),Ho.radius+=r,t.ray.intersectsSphere(Ho)===!1)return;Ou.copy(s).invert(),Pr.copy(t.ray).applyMatrix4(Ou);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const d=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let g=d,m=_-1;g<m;g+=c){const p=h.getX(g),E=h.getX(g+1),x=Go(this,t,Pr,l,p,E);x&&e.push(x)}if(this.isLineLoop){const g=h.getX(_-1),m=h.getX(d),p=Go(this,t,Pr,l,g,m);p&&e.push(p)}}else{const d=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let g=d,m=_-1;g<m;g+=c){const p=Go(this,t,Pr,l,g,g+1);p&&e.push(p)}if(this.isLineLoop){const g=Go(this,t,Pr,l,_-1,d);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Go(n,t,e,i,s,r){const o=n.geometry.attributes.position;if(va.fromBufferAttribute(o,s),xa.fromBufferAttribute(o,r),e.distanceSqToSegment(va,xa,yl,Bu)>i)return;yl.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(yl);if(!(l<t.near||l>t.far))return{distance:l,point:Bu.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const zu=new D,ku=new D;class Nd extends Ud{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)zu.fromBufferAttribute(e,s),ku.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+zu.distanceTo(ku);t.setAttribute("lineDistance",new ne(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $M extends Ud{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Lc extends Hi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Hu=new _e,Dc=new Da,Vo=new po,Wo=new D;class Gu extends Ie{constructor(t=new Ee,e=new Lc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vo.copy(i.boundingSphere),Vo.applyMatrix4(s),Vo.radius+=r,t.ray.intersectsSphere(Vo)===!1)return;Hu.copy(s).invert(),Dc.copy(t.ray).applyMatrix4(Hu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const u=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let _=u,g=d;_<g;_++){const m=c.getX(_);Wo.fromBufferAttribute(f,m),Vu(Wo,m,l,s,t,e,this)}}else{const u=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let _=u,g=d;_<g;_++)Wo.fromBufferAttribute(f,_),Vu(Wo,_,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Vu(n,t,e,i,s,r,o){const a=Dc.distanceSqToPoint(n);if(a<e){const l=new D;Dc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class ti{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const h=i[s],u=i[s+1]-h,d=(o-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new nt:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new D,s=[],r=[],o=[],a=new D,l=new _e;for(let d=0;d<=t;d++){const _=d/t;s[d]=this.getTangentAt(_,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Fe(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,_))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Fe(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],d*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class lh extends ti{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new nt){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class JM extends lh{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ch(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+f)+(l-a)/f;u*=h,d*=h,s(o,a,u,d)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const Xo=new D,Sl=new ch,El=new ch,bl=new ch;class QM extends ti{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new D){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Xo.subVectors(s[0],s[1]).add(s[0]),c=Xo);const f=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Xo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Xo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),Sl.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,_,g,m),El.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,_,g,m),bl.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,_,g,m)}else this.curveType==="catmullrom"&&(Sl.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),El.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),bl.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return i.set(Sl.calc(l),El.calc(l),bl.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Wu(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function ty(n,t){const e=1-n;return e*e*t}function ey(n,t){return 2*(1-n)*n*t}function ny(n,t){return n*n*t}function Yr(n,t,e,i){return ty(n,t)+ey(n,e)+ny(n,i)}function iy(n,t){const e=1-n;return e*e*e*t}function sy(n,t){const e=1-n;return 3*e*e*n*t}function ry(n,t){return 3*(1-n)*n*n*t}function oy(n,t){return n*n*n*t}function jr(n,t,e,i,s){return iy(n,t)+sy(n,e)+ry(n,i)+oy(n,s)}class Fd extends ti{constructor(t=new nt,e=new nt,i=new nt,s=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new nt){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(jr(t,s.x,r.x,o.x,a.x),jr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ay extends ti{constructor(t=new D,e=new D,i=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new D){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(jr(t,s.x,r.x,o.x,a.x),jr(t,s.y,r.y,o.y,a.y),jr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Od extends ti{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ly extends ti{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bd extends ti{constructor(t=new nt,e=new nt,i=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new nt){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Yr(t,s.x,r.x,o.x),Yr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hh extends ti{constructor(t=new D,e=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new D){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Yr(t,s.x,r.x,o.x),Yr(t,s.y,r.y,o.y),Yr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zd extends ti{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(Wu(a,l.x,c.x,h.x,f.x),Wu(a,l.y,c.y,h.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new nt().fromArray(s))}return this}}var Ma=Object.freeze({__proto__:null,ArcCurve:JM,CatmullRomCurve3:QM,CubicBezierCurve:Fd,CubicBezierCurve3:ay,EllipseCurve:lh,LineCurve:Od,LineCurve3:ly,QuadraticBezierCurve:Bd,QuadraticBezierCurve3:hh,SplineCurve:zd});class cy extends ti{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ma[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Ma[s.type]().fromJSON(s))}return this}}class Xu extends cy{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Od(this.currentPoint.clone(),new nt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new Bd(this.currentPoint.clone(),new nt(t,e),new nt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new Fd(this.currentPoint.clone(),new nt(t,e),new nt(i,s),new nt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new zd(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){const c=new lh(t,e,i,s,r,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class uh extends Ee{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new D,h=new nt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){const d=i+f/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(a,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new uh(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class fh extends Ee{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],f=[],u=[],d=[];let _=0;const g=[],m=i/2;let p=0;E(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ne(f,3)),this.setAttribute("normal",new ne(u,3)),this.setAttribute("uv",new ne(d,2));function E(){const v=new D,L=new D;let A=0;const T=(e-t)/i;for(let R=0;R<=r;R++){const y=[],M=R/r,C=M*(e-t)+t;for(let B=0;B<=s;B++){const I=B/s,z=I*l+a,V=Math.sin(z),H=Math.cos(z);L.x=C*V,L.y=-M*i+m,L.z=C*H,f.push(L.x,L.y,L.z),v.set(V,T,H).normalize(),u.push(v.x,v.y,v.z),d.push(I,1-M),y.push(_++)}g.push(y)}for(let R=0;R<s;R++)for(let y=0;y<r;y++){const M=g[y][R],C=g[y+1][R],B=g[y+1][R+1],I=g[y][R+1];(t>0||y!==0)&&(h.push(M,C,I),A+=3),(e>0||y!==r-1)&&(h.push(C,B,I),A+=3)}c.addGroup(p,A,0),p+=A}function x(v){const L=_,A=new nt,T=new D;let R=0;const y=v===!0?t:e,M=v===!0?1:-1;for(let B=1;B<=s;B++)f.push(0,m*M,0),u.push(0,M,0),d.push(.5,.5),_++;const C=_;for(let B=0;B<=s;B++){const z=B/s*l+a,V=Math.cos(z),H=Math.sin(z);T.x=y*H,T.y=m*M,T.z=y*V,f.push(T.x,T.y,T.z),u.push(0,M,0),A.x=V*.5+.5,A.y=H*.5*M+.5,d.push(A.x,A.y),_++}for(let B=0;B<s;B++){const I=L+B,z=C+B;v===!0?h.push(z,z+1,I):h.push(z+1,z,I),R+=3}c.addGroup(p,R,v===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fh(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ua extends fh{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Ua(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class dh extends Ee{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new ne(r,3)),this.setAttribute("normal",new ne(r.slice(),3)),this.setAttribute("uv",new ne(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const x=new D,v=new D,L=new D;for(let A=0;A<e.length;A+=3)d(e[A+0],x),d(e[A+1],v),d(e[A+2],L),l(x,v,L,E)}function l(E,x,v,L){const A=L+1,T=[];for(let R=0;R<=A;R++){T[R]=[];const y=E.clone().lerp(v,R/A),M=x.clone().lerp(v,R/A),C=A-R;for(let B=0;B<=C;B++)B===0&&R===A?T[R][B]=y:T[R][B]=y.clone().lerp(M,B/C)}for(let R=0;R<A;R++)for(let y=0;y<2*(A-R)-1;y++){const M=Math.floor(y/2);y%2===0?(u(T[R][M+1]),u(T[R+1][M]),u(T[R][M])):(u(T[R][M+1]),u(T[R+1][M+1]),u(T[R+1][M]))}}function c(E){const x=new D;for(let v=0;v<r.length;v+=3)x.x=r[v+0],x.y=r[v+1],x.z=r[v+2],x.normalize().multiplyScalar(E),r[v+0]=x.x,r[v+1]=x.y,r[v+2]=x.z}function h(){const E=new D;for(let x=0;x<r.length;x+=3){E.x=r[x+0],E.y=r[x+1],E.z=r[x+2];const v=m(E)/2/Math.PI+.5,L=p(E)/Math.PI+.5;o.push(v,1-L)}_(),f()}function f(){for(let E=0;E<o.length;E+=6){const x=o[E+0],v=o[E+2],L=o[E+4],A=Math.max(x,v,L),T=Math.min(x,v,L);A>.9&&T<.1&&(x<.2&&(o[E+0]+=1),v<.2&&(o[E+2]+=1),L<.2&&(o[E+4]+=1))}}function u(E){r.push(E.x,E.y,E.z)}function d(E,x){const v=E*3;x.x=t[v+0],x.y=t[v+1],x.z=t[v+2]}function _(){const E=new D,x=new D,v=new D,L=new D,A=new nt,T=new nt,R=new nt;for(let y=0,M=0;y<r.length;y+=9,M+=6){E.set(r[y+0],r[y+1],r[y+2]),x.set(r[y+3],r[y+4],r[y+5]),v.set(r[y+6],r[y+7],r[y+8]),A.set(o[M+0],o[M+1]),T.set(o[M+2],o[M+3]),R.set(o[M+4],o[M+5]),L.copy(E).add(x).add(v).divideScalar(3);const C=m(L);g(A,M+0,E,C),g(T,M+2,x,C),g(R,M+4,v,C)}}function g(E,x,v,L){L<0&&E.x===1&&(o[x]=E.x-1),v.x===0&&v.z===0&&(o[x]=L/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function p(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dh(t.vertices,t.indices,t.radius,t.details)}}class ph extends dh{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ph(t.radius,t.detail)}}const qo=new D,Yo=new D,Tl=new D,jo=new Sn;class hy extends Ee{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(Xr*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],f=new Array(3),u={},d=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:g,b:m,c:p}=jo;if(g.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),jo.getNormal(Tl),f[0]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,f[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,f[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let E=0;E<3;E++){const x=(E+1)%3,v=f[E],L=f[x],A=jo[h[E]],T=jo[h[x]],R=`${v}_${L}`,y=`${L}_${v}`;y in u&&u[y]?(Tl.dot(u[y].normal)<=r&&(d.push(A.x,A.y,A.z),d.push(T.x,T.y,T.z)),u[y]=null):R in u||(u[R]={index0:c[E],index1:c[x],normal:Tl.clone()})}}for(const _ in u)if(u[_]){const{index0:g,index1:m}=u[_];qo.fromBufferAttribute(a,g),Yo.fromBufferAttribute(a,m),d.push(qo.x,qo.y,qo.z),d.push(Yo.x,Yo.y,Yo.z)}this.setAttribute("position",new ne(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class kd extends Xu{constructor(t){super(t),this.uuid=xr(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new Xu().fromJSON(s))}return this}}const uy={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=Hd(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,f,u,d;if(i&&(r=_y(n,t,r,e)),n.length>80*e){a=c=n[0],l=h=n[1];for(let _=e;_<s;_+=e)f=n[_],u=n[_+1],f<a&&(a=f),u<l&&(l=u),f>c&&(c=f),u>h&&(h=u);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return Qr(r,o,e,a,l,d,0),o}};function Hd(n,t,e,i,s){let r,o;if(s===Ay(n,t,e,i)>0)for(r=t;r<e;r+=i)o=qu(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=qu(r,n[r],n[r+1],o);return o&&Na(o,o.next)&&(eo(o),o=o.next),o}function _s(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Na(e,e.next)||Me(e.prev,e,e.next)===0)){if(eo(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Qr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&yy(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?dy(n,i,s,r):fy(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),eo(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=py(_s(n),t,e),Qr(n,t,e,i,s,r,2)):o===2&&my(n,t,e,i,s,r):Qr(_s(n),t,e,i,s,r,1);break}}}function fy(n){const t=n.prev,e=n,i=n.next;if(Me(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,f=a<l?a<c?a:c:l<c?l:c,u=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c;let _=i.next;for(;_!==t;){if(_.x>=h&&_.x<=u&&_.y>=f&&_.y<=d&&Bs(s,a,r,l,o,c,_.x,_.y)&&Me(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function dy(n,t,e,i){const s=n.prev,r=n,o=n.next;if(Me(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,f=r.y,u=o.y,d=a<l?a<c?a:c:l<c?l:c,_=h<f?h<u?h:u:f<u?f:u,g=a>l?a>c?a:c:l>c?l:c,m=h>f?h>u?h:u:f>u?f:u,p=Ic(d,_,t,e,i),E=Ic(g,m,t,e,i);let x=n.prevZ,v=n.nextZ;for(;x&&x.z>=p&&v&&v.z<=E;){if(x.x>=d&&x.x<=g&&x.y>=_&&x.y<=m&&x!==s&&x!==o&&Bs(a,h,l,f,c,u,x.x,x.y)&&Me(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=d&&v.x<=g&&v.y>=_&&v.y<=m&&v!==s&&v!==o&&Bs(a,h,l,f,c,u,v.x,v.y)&&Me(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=g&&x.y>=_&&x.y<=m&&x!==s&&x!==o&&Bs(a,h,l,f,c,u,x.x,x.y)&&Me(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=E;){if(v.x>=d&&v.x<=g&&v.y>=_&&v.y<=m&&v!==s&&v!==o&&Bs(a,h,l,f,c,u,v.x,v.y)&&Me(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function py(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!Na(s,r)&&Gd(s,i,i.next,r)&&to(s,r)&&to(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),eo(i),eo(i.next),i=n=r),i=i.next}while(i!==n);return _s(i)}function my(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&by(o,a)){let l=Vd(o,a);o=_s(o,o.next),l=_s(l,l.next),Qr(o,t,e,i,s,r,0),Qr(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function _y(n,t,e,i){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=Hd(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(Ey(c));for(s.sort(gy),r=0;r<s.length;r++)e=vy(s[r],e);return e}function gy(n,t){return n.x-t.x}function vy(n,t){const e=xy(n,t);if(!e)return t;const i=Vd(e,n);return _s(i,i.next),_s(e,e.next)}function xy(n,t){let e=t,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>i&&(i=u,s=e.x<e.next.x?e:e.next,u===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,f;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Bs(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(f=Math.abs(o-e.y)/(r-e.x),to(e,n)&&(f<h||f===h&&(e.x>s.x||e.x===s.x&&My(s,e)))&&(s=e,h=f)),e=e.next;while(e!==a);return s}function My(n,t){return Me(n.prev,n,t.prev)<0&&Me(t.next,n,n.next)<0}function yy(n,t,e,i){let s=n;do s.z===0&&(s.z=Ic(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Sy(s)}function Sy(n){let t,e,i,s,r,o,a,l,c=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(o>1);return n}function Ic(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Ey(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Bs(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function by(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Ty(n,t)&&(to(n,t)&&to(t,n)&&wy(n,t)&&(Me(n.prev,n,t.prev)||Me(n,t.prev,t))||Na(n,t)&&Me(n.prev,n,n.next)>0&&Me(t.prev,t,t.next)>0)}function Me(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Na(n,t){return n.x===t.x&&n.y===t.y}function Gd(n,t,e,i){const s=Ko(Me(n,t,e)),r=Ko(Me(n,t,i)),o=Ko(Me(e,i,n)),a=Ko(Me(e,i,t));return!!(s!==r&&o!==a||s===0&&Zo(n,e,t)||r===0&&Zo(n,i,t)||o===0&&Zo(e,n,i)||a===0&&Zo(e,t,i))}function Zo(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Ko(n){return n>0?1:n<0?-1:0}function Ty(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Gd(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function to(n,t){return Me(n.prev,n,n.next)<0?Me(n,t,n.next)>=0&&Me(n,n.prev,t)>=0:Me(n,t,n.prev)<0||Me(n,n.next,t)<0}function wy(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Vd(n,t){const e=new Uc(n.i,n.x,n.y),i=new Uc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function qu(n,t,e,i){const s=new Uc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function eo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Uc(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ay(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Zr{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return Zr.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];Yu(t),ju(i,t);let o=t.length;e.forEach(Yu);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,ju(i,e[l]);const a=uy.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Yu(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function ju(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class mh extends Ee{constructor(t=new kd([new nt(.5,.5),new nt(-.5,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new ne(s,3)),this.setAttribute("uv",new ne(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:d-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:Ry;let x,v=!1,L,A,T,R;p&&(x=p.getSpacedPoints(h),v=!0,u=!1,L=p.computeFrenetFrames(h,!1),A=new D,T=new D,R=new D),u||(m=0,d=0,_=0,g=0);const y=a.extractPoints(c);let M=y.shape;const C=y.holes;if(!Zr.isClockWise(M)){M=M.reverse();for(let J=0,rt=C.length;J<rt;J++){const P=C[J];Zr.isClockWise(P)&&(C[J]=P.reverse())}}const I=Zr.triangulateShape(M,C),z=M;for(let J=0,rt=C.length;J<rt;J++){const P=C[J];M=M.concat(P)}function V(J,rt,P){return rt||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(rt,P)}const H=M.length,q=I.length;function G(J,rt,P){let Ct,et,xt;const ct=J.x-rt.x,Nt=J.y-rt.y,gt=P.x-J.x,w=P.y-J.y,S=ct*ct+Nt*Nt,k=ct*w-Nt*gt;if(Math.abs(k)>Number.EPSILON){const Z=Math.sqrt(S),Q=Math.sqrt(gt*gt+w*w),K=rt.x-Nt/Z,Tt=rt.y+ct/Z,ut=P.x-w/Q,vt=P.y+gt/Q,Kt=((ut-K)*w-(vt-Tt)*gt)/(ct*w-Nt*gt);Ct=K+ct*Kt-J.x,et=Tt+Nt*Kt-J.y;const it=Ct*Ct+et*et;if(it<=2)return new nt(Ct,et);xt=Math.sqrt(it/2)}else{let Z=!1;ct>Number.EPSILON?gt>Number.EPSILON&&(Z=!0):ct<-Number.EPSILON?gt<-Number.EPSILON&&(Z=!0):Math.sign(Nt)===Math.sign(w)&&(Z=!0),Z?(Ct=-Nt,et=ct,xt=Math.sqrt(S)):(Ct=ct,et=Nt,xt=Math.sqrt(S/2))}return new nt(Ct/xt,et/xt)}const tt=[];for(let J=0,rt=z.length,P=rt-1,Ct=J+1;J<rt;J++,P++,Ct++)P===rt&&(P=0),Ct===rt&&(Ct=0),tt[J]=G(z[J],z[P],z[Ct]);const at=[];let _t,Ut=tt.concat();for(let J=0,rt=C.length;J<rt;J++){const P=C[J];_t=[];for(let Ct=0,et=P.length,xt=et-1,ct=Ct+1;Ct<et;Ct++,xt++,ct++)xt===et&&(xt=0),ct===et&&(ct=0),_t[Ct]=G(P[Ct],P[xt],P[ct]);at.push(_t),Ut=Ut.concat(_t)}for(let J=0;J<m;J++){const rt=J/m,P=d*Math.cos(rt*Math.PI/2),Ct=_*Math.sin(rt*Math.PI/2)+g;for(let et=0,xt=z.length;et<xt;et++){const ct=V(z[et],tt[et],Ct);lt(ct.x,ct.y,-P)}for(let et=0,xt=C.length;et<xt;et++){const ct=C[et];_t=at[et];for(let Nt=0,gt=ct.length;Nt<gt;Nt++){const w=V(ct[Nt],_t[Nt],Ct);lt(w.x,w.y,-P)}}}const Wt=_+g;for(let J=0;J<H;J++){const rt=u?V(M[J],Ut[J],Wt):M[J];v?(T.copy(L.normals[0]).multiplyScalar(rt.x),A.copy(L.binormals[0]).multiplyScalar(rt.y),R.copy(x[0]).add(T).add(A),lt(R.x,R.y,R.z)):lt(rt.x,rt.y,0)}for(let J=1;J<=h;J++)for(let rt=0;rt<H;rt++){const P=u?V(M[rt],Ut[rt],Wt):M[rt];v?(T.copy(L.normals[J]).multiplyScalar(P.x),A.copy(L.binormals[J]).multiplyScalar(P.y),R.copy(x[J]).add(T).add(A),lt(R.x,R.y,R.z)):lt(P.x,P.y,f/h*J)}for(let J=m-1;J>=0;J--){const rt=J/m,P=d*Math.cos(rt*Math.PI/2),Ct=_*Math.sin(rt*Math.PI/2)+g;for(let et=0,xt=z.length;et<xt;et++){const ct=V(z[et],tt[et],Ct);lt(ct.x,ct.y,f+P)}for(let et=0,xt=C.length;et<xt;et++){const ct=C[et];_t=at[et];for(let Nt=0,gt=ct.length;Nt<gt;Nt++){const w=V(ct[Nt],_t[Nt],Ct);v?lt(w.x,w.y+x[h-1].y,x[h-1].x+P):lt(w.x,w.y,f+P)}}}j(),st();function j(){const J=s.length/3;if(u){let rt=0,P=H*rt;for(let Ct=0;Ct<q;Ct++){const et=I[Ct];bt(et[2]+P,et[1]+P,et[0]+P)}rt=h+m*2,P=H*rt;for(let Ct=0;Ct<q;Ct++){const et=I[Ct];bt(et[0]+P,et[1]+P,et[2]+P)}}else{for(let rt=0;rt<q;rt++){const P=I[rt];bt(P[2],P[1],P[0])}for(let rt=0;rt<q;rt++){const P=I[rt];bt(P[0]+H*h,P[1]+H*h,P[2]+H*h)}}i.addGroup(J,s.length/3-J,0)}function st(){const J=s.length/3;let rt=0;Mt(z,rt),rt+=z.length;for(let P=0,Ct=C.length;P<Ct;P++){const et=C[P];Mt(et,rt),rt+=et.length}i.addGroup(J,s.length/3-J,1)}function Mt(J,rt){let P=J.length;for(;--P>=0;){const Ct=P;let et=P-1;et<0&&(et=J.length-1);for(let xt=0,ct=h+m*2;xt<ct;xt++){const Nt=H*xt,gt=H*(xt+1),w=rt+Ct+Nt,S=rt+et+Nt,k=rt+et+gt,Z=rt+Ct+gt;Dt(w,S,k,Z)}}}function lt(J,rt,P){l.push(J),l.push(rt),l.push(P)}function bt(J,rt,P){It(J),It(rt),It(P);const Ct=s.length/3,et=E.generateTopUV(i,s,Ct-3,Ct-2,Ct-1);jt(et[0]),jt(et[1]),jt(et[2])}function Dt(J,rt,P,Ct){It(J),It(rt),It(Ct),It(rt),It(P),It(Ct);const et=s.length/3,xt=E.generateSideWallUV(i,s,et-6,et-3,et-2,et-1);jt(xt[0]),jt(xt[1]),jt(xt[3]),jt(xt[1]),jt(xt[2]),jt(xt[3])}function It(J){s.push(l[J*3+0]),s.push(l[J*3+1]),s.push(l[J*3+2])}function jt(J){r.push(J.x),r.push(J.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Cy(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ma[s.type]().fromJSON(s)),new mh(i,t.options)}}const Ry={generateTopUV:function(n,t,e,i,s){const r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new nt(r,o),new nt(a,l),new nt(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],f=t[i*3+2],u=t[s*3],d=t[s*3+1],_=t[s*3+2],g=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new nt(o,1-l),new nt(c,1-f),new nt(u,1-_),new nt(g,1-p)]:[new nt(a,1-l),new nt(h,1-f),new nt(d,1-_),new nt(m,1-p)]}};function Cy(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class no extends Ee{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let f=t;const u=(e-t)/s,d=new D,_=new nt;for(let g=0;g<=s;g++){for(let m=0;m<=i;m++){const p=r+m/i*o;d.x=f*Math.cos(p),d.y=f*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),_.x=(d.x/e+1)/2,_.y=(d.y/e+1)/2,h.push(_.x,_.y)}f+=u}for(let g=0;g<s;g++){const m=g*(i+1);for(let p=0;p<i;p++){const E=p+m,x=E,v=E+i+1,L=E+i+2,A=E+1;a.push(x,v,A),a.push(v,L,A)}}this.setIndex(a),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(c,3)),this.setAttribute("uv",new ne(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new no(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class zs extends Ee{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],f=new D,u=new D,d=[],_=[],g=[],m=[];for(let p=0;p<=i;p++){const E=[],x=p/i;let v=0;p===0&&o===0?v=.5/e:p===i&&l===Math.PI&&(v=-.5/e);for(let L=0;L<=e;L++){const A=L/e;f.x=-t*Math.cos(s+A*r)*Math.sin(o+x*a),f.y=t*Math.cos(o+x*a),f.z=t*Math.sin(s+A*r)*Math.sin(o+x*a),_.push(f.x,f.y,f.z),u.copy(f).normalize(),g.push(u.x,u.y,u.z),m.push(A+v,1-x),E.push(c++)}h.push(E)}for(let p=0;p<i;p++)for(let E=0;E<e;E++){const x=h[p][E+1],v=h[p][E],L=h[p+1][E],A=h[p+1][E+1];(p!==0||o>0)&&d.push(x,v,A),(p!==i-1||l<Math.PI)&&d.push(v,L,A)}this.setIndex(d),this.setAttribute("position",new ne(_,3)),this.setAttribute("normal",new ne(g,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zs(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class _h extends Ee{constructor(t=new hh(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new D,l=new D,c=new nt;let h=new D;const f=[],u=[],d=[],_=[];g(),this.setIndex(_),this.setAttribute("position",new ne(f,3)),this.setAttribute("normal",new ne(u,3)),this.setAttribute("uv",new ne(d,2));function g(){for(let x=0;x<e;x++)m(x);m(r===!1?e:0),E(),p()}function m(x){h=t.getPointAt(x/e,h);const v=o.normals[x],L=o.binormals[x];for(let A=0;A<=s;A++){const T=A/s*Math.PI*2,R=Math.sin(T),y=-Math.cos(T);l.x=y*v.x+R*L.x,l.y=y*v.y+R*L.y,l.z=y*v.z+R*L.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,f.push(a.x,a.y,a.z)}}function p(){for(let x=1;x<=e;x++)for(let v=1;v<=s;v++){const L=(s+1)*(x-1)+(v-1),A=(s+1)*x+(v-1),T=(s+1)*x+v,R=(s+1)*(x-1)+v;_.push(L,A,R),_.push(A,T,R)}}function E(){for(let x=0;x<=e;x++)for(let v=0;v<=s;v++)c.x=x/e,c.y=v/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new _h(new Ma[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class ya extends Hi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sh,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class wl extends Hi{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sh,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=$c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class gh extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Al=new _e,Zu=new D,Ku=new D;class Wd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rh,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Zu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zu),Ku.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ku),e.updateMatrixWorld(),Al.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Al),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Al)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const $u=new _e,Lr=new D,Rl=new D;class Py extends Wd{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new he(2,1,1,1),new he(0,1,1,1),new he(3,1,1,1),new he(1,1,1,1),new he(3,0,1,1),new he(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Lr.setFromMatrixPosition(t.matrixWorld),i.position.copy(Lr),Rl.copy(i.position),Rl.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Rl),i.updateMatrixWorld(),s.makeTranslation(-Lr.x,-Lr.y,-Lr.z),$u.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix($u)}}class Ly extends gh{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Py}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Dy extends Wd{constructor(){super(new Rd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Iy extends gh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new Dy}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Uy extends gh{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ny{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ju(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ju();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ju(){return performance.now()}class Qu{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Fe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Fy extends Nd{constructor(t=10,e=10,i=4473924,s=8947848){i=new Yt(i),s=new Yt(s);const r=e/2,o=t/e,a=t/2,l=[],c=[];for(let u=0,d=0,_=-a;u<=e;u++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const g=u===r?i:s;g.toArray(c,d),d+=3,g.toArray(c,d),d+=3,g.toArray(c,d),d+=3,g.toArray(c,d),d+=3}const h=new Ee;h.setAttribute("position",new ne(l,3)),h.setAttribute("color",new ne(c,3));const f=new qr({vertexColors:!0,toneMapped:!1});super(h,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Oy extends gs{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kc);const tf={type:"change"},vh={type:"start"},Xd={type:"end"},$o=new Da,ef=new Di,By=Math.cos(70*F_.DEG2RAD),we=new D,$e=2*Math.PI,ce={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Cl=1e-6;class zy extends Oy{constructor(t,e=null){super(t,e),this.state=ce.NONE,this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gs.ROTATE,MIDDLE:Gs.DOLLY,RIGHT:Gs.PAN},this.touches={ONE:Fs.ROTATE,TWO:Fs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new ms,this._lastTargetPosition=new D,this._quat=new ms().setFromUnitVectors(t.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Qu,this._sphericalDelta=new Qu,this._scale=1,this._panOffset=new D,this._rotateStart=new nt,this._rotateEnd=new nt,this._rotateDelta=new nt,this._panStart=new nt,this._panEnd=new nt,this._panDelta=new nt,this._dollyStart=new nt,this._dollyEnd=new nt,this._dollyDelta=new nt,this._dollyDirection=new D,this._mouse=new nt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Hy.bind(this),this._onPointerDown=ky.bind(this),this._onPointerUp=Gy.bind(this),this._onContextMenu=Zy.bind(this),this._onMouseWheel=Xy.bind(this),this._onKeyDown=qy.bind(this),this._onTouchStart=Yy.bind(this),this._onTouchMove=jy.bind(this),this._onMouseDown=Vy.bind(this),this._onMouseMove=Wy.bind(this),this._interceptControlDown=Ky.bind(this),this._interceptControlUp=$y.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(tf),this.update(),this.state=ce.NONE}update(t=null){const e=this.object.position;we.copy(e).sub(this.target),we.applyQuaternion(this._quat),this._spherical.setFromVector3(we),this.autoRotate&&this.state===ce.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=$e:i>Math.PI&&(i-=$e),s<-Math.PI?s+=$e:s>Math.PI&&(s-=$e),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(we.setFromSpherical(this._spherical),we.applyQuaternion(this._quatInverse),e.copy(this.target).add(we),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=we.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=we.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):($o.origin.copy(this.object.position),$o.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot($o.direction))<By?this.object.lookAt(this.target):(ef.setFromNormalAndCoplanarPoint(this.object.up,this.target),$o.intersectPlane(ef,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Cl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Cl||this._lastTargetPosition.distanceToSquared(this.target)>Cl?(this.dispatchEvent(tf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?$e/60*this.autoRotateSpeed*t:$e/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){we.setFromMatrixColumn(e,0),we.multiplyScalar(-t),this._panOffset.add(we)}_panUp(t,e){this.screenSpacePanning===!0?we.setFromMatrixColumn(e,1):(we.setFromMatrixColumn(e,0),we.crossVectors(this.object.up,we)),we.multiplyScalar(t),this._panOffset.add(we)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;we.copy(s).sub(this.target);let r=we.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft($e*this._rotateDelta.x/e.clientHeight),this._rotateUp($e*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp($e*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-$e*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft($e*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-$e*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft($e*this._rotateDelta.x/e.clientHeight),this._rotateUp($e*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new nt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function ky(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Hy(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Gy(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Xd),this.state=ce.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Vy(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Gs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ce.DOLLY;break;case Gs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ce.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ce.ROTATE}break;case Gs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ce.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ce.PAN}break;default:this.state=ce.NONE}this.state!==ce.NONE&&this.dispatchEvent(vh)}function Wy(n){switch(this.state){case ce.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ce.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ce.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Xy(n){this.enabled===!1||this.enableZoom===!1||this.state!==ce.NONE||(n.preventDefault(),this.dispatchEvent(vh),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Xd))}function qy(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function Yy(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Fs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ce.TOUCH_ROTATE;break;case Fs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ce.TOUCH_PAN;break;default:this.state=ce.NONE}break;case 2:switch(this.touches.TWO){case Fs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ce.TOUCH_DOLLY_PAN;break;case Fs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ce.TOUCH_DOLLY_ROTATE;break;default:this.state=ce.NONE}break;default:this.state=ce.NONE}this.state!==ce.NONE&&this.dispatchEvent(vh)}function jy(n){switch(this._trackPointer(n),this.state){case ce.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ce.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ce.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ce.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ce.NONE}}function Zy(n){this.enabled!==!1&&n.preventDefault()}function Ky(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function $y(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Sa=6378137;function nf(n,t,e,i){const s=Math.PI/180,r=Math.cos(e*s),o=(t-i)*s*Sa*r,a=-(n-e)*s*Sa;return{x:o,z:a}}function Jy(n){let t=0;const e=n.length;for(let i=0;i<e;i++){const s=(i+1)%e;t+=n[i].x*n[s].z,t-=n[s].x*n[i].z}return Math.abs(t)/2}function Qy(n,t){const e=n.x,i=n.z;let s=!1;for(let r=0,o=t.length-1;r<t.length;o=r++){const a=t[r].x,l=t[r].z,c=t[o].x,h=t[o].z;l>i!=h>i&&e<(c-a)*(i-l)/(h-l)+a&&(s=!s)}return s}async function tS(n,t,e=100){const i=e/111320,s=e/(111320*Math.cos(n*Math.PI/180)),r=(t-s).toFixed(6),o=(n-i).toFixed(6),a=(t+s).toFixed(6),l=(n+i).toFixed(6),c=`https://api.openstreetmap.org/api/0.6/map?bbox=${r},${o},${a},${l}`;try{const u=new AbortController,d=setTimeout(()=>u.abort(),8e3),_=await fetch(c,{headers:{Accept:"application/xml, text/xml, */*","User-Agent":"Meteo3DApp/1.0 (OpenStreetMap 3D Real City Viewer)"},signal:u.signal});if(clearTimeout(d),_.ok){const g=await _.text(),m=eS(g,n,t);if(m.buildings.length>0)return{elements:m.buildings,streets:m.streets,source:"osm_real",centerLat:n,centerLon:t}}}catch(u){console.warn("Erreur OSM direct API, essai Overpass API...",u.message)}const h=`[out:json][timeout:15];(way["building"](around:${e},${n},${t}););out geom;`,f=["https://overpass-api.de/api/interpreter","https://overpass.kumi.systems/api/interpreter"];for(const u of f)try{const d=new AbortController,_=setTimeout(()=>d.abort(),7e3),g=await fetch(u,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"data="+encodeURIComponent(h),signal:d.signal});if(clearTimeout(_),g.ok){const m=await g.json();if(m&&m.elements&&m.elements.length>0)return{elements:m.elements.filter(E=>E.geometry&&E.geometry.length>=3),streets:[],source:"overpass",centerLat:n,centerLon:t}}}catch{}return{elements:sS(n,t),streets:[],source:"procedural",centerLat:n,centerLon:t}}function eS(n){const e=new DOMParser().parseFromString(n,"text/xml"),i={},s=e.getElementsByTagName("node");for(let l=0;l<s.length;l++){const c=s[l],h=c.getAttribute("id"),f=parseFloat(c.getAttribute("lat")),u=parseFloat(c.getAttribute("lon"));i[h]={lat:f,lon:u}}const r=[],o=[],a=e.getElementsByTagName("way");for(let l=0;l<a.length;l++){const c=a[l],h=c.getAttribute("id"),f={},u=c.getElementsByTagName("tag");for(let g=0;g<u.length;g++){const m=u[g];f[m.getAttribute("k")]=m.getAttribute("v")}const d=c.getElementsByTagName("nd"),_=[];for(let g=0;g<d.length;g++){const m=d[g].getAttribute("ref");i[m]&&_.push(i[m])}_.length<2||(f.building&&_.length>=3&&r.push({id:h,tags:f,geometry:_}),f.highway&&_.length>=2&&o.push({id:h,tags:f,geometry:_}))}return{buildings:r,streets:o}}function nS(n,t){let e=3883602,i=.5,s=.35;n["roof:material"]==="tile"||n["roof:material"]==="roof_tiles"||n["roof:colour"]==="terracotta"||n["roof:colour"]==="red"?(e=10506797,i=.75,s=.05):n["roof:material"]==="copper"||n["roof:colour"]==="green"?(e=3046706,i=.4,s=.45):(n["roof:material"]==="tar_paper"||n["roof:colour"]==="black")&&(e=2042167,i=.8);let r=15986146,o=.82,a=.05;t?(r=16776171,o=.7,a=.1):n["building:material"]==="brick"||n["building:colour"]==="brown"?r=11817737:n["building:material"]==="concrete"||n["building:colour"]==="grey"?r=13751771:n["building:material"]==="glass"||n.building==="commercial"?(r=14742270,o=.3,a=.6):(n.building==="house"||n.building==="detached")&&(r=16444375);const l=new ya({color:e,roughness:i,metalness:s,flatShading:!1}),c=new ya({color:r,roughness:o,metalness:a,flatShading:!1});return{roofMat:l,facadeMat:c}}function iS(n,t,e,i=[]){const s=new qe;s.name="OsmRealEnvironment";const r=new qe;r.name="RealBuildingsGroup",s.add(r);const o={x:0,z:0};if(i&&i.length>0){const d=new qe;d.name="RealStreetsGroup";const _=new ya({color:988970,roughness:.95,metalness:.05});for(const g of i){if(!g.geometry||g.geometry.length<2)continue;const m=g.geometry.map(E=>nf(E.lat,E.lon,t,e)),p=g.tags.highway==="primary"||g.tags.highway==="secondary"?5:3.5;for(let E=0;E<m.length-1;E++){const x=m[E],v=m[E+1],L=v.x-x.x,A=v.z-x.z,T=Math.sqrt(L*L+A*A);if(T<.5)continue;const R=new mo(p*2,T),y=new pe(R,_);y.rotation.x=-Math.PI/2,y.rotation.z=-Math.atan2(L,A),y.position.set((x.x+v.x)/2,.04,(x.z+v.z)/2),y.receiveShadow=!0,d.add(y)}}s.add(d)}let a=null,l=1/0;const c=[];for(const d of n){if(!d.geometry||d.geometry.length<3)continue;const _=d.geometry.map(x=>nf(x.lat,x.lon,t,e));let g=0,m=0;for(const x of _)g+=x.x,m+=x.z;g/=_.length,m/=_.length;const p=Math.sqrt(g*g+m*m);if(p>120)continue;Qy(o,_)?(a=d.id,l=0):l>0&&p<l&&(l=p,a=d.id),c.push({el:d,localPoints:_,cx:g,cz:m,dist:p})}const h=new qr({color:1976635,transparent:!0,opacity:.5}),f=new qr({color:3718648,linewidth:2,transparent:!0,opacity:.85}),u=new qr({color:4674921,transparent:!0,opacity:.35});for(const d of c){const{el:_,localPoints:g,cx:m,cz:p}=d,E=_.id===a,x=new kd;x.moveTo(g[0].x,-g[0].z);for(let T=1;T<g.length;T++)x.lineTo(g[T].x,-g[T].z);x.closePath();const v=Jy(g);if(v<6)continue;let L=14,A=4;if(_.tags)if(_.tags.height){const T=parseFloat(_.tags.height);!isNaN(T)&&T>2&&(L=T)}else if(_.tags["building:levels"]){const T=parseFloat(_.tags["building:levels"]);!isNaN(T)&&T>0&&(A=T,L=A*3.2)}else _.tags.building==="house"||_.tags.building==="detached"?(A=2,L=7.5):_.tags.building==="church"||_.tags.building==="cathedral"?(A=1,L=28):v>500?(A=6,L=20):v>200?(A=5,L=16.5):v>70?(A=4,L=13):(A=2,L=6.5);try{const T={depth:L,bevelEnabled:!0,bevelThickness:.4,bevelSize:.3,bevelSegments:1},R=new mh(x,T);R.rotateX(-Math.PI/2),R.computeVertexNormals();const{roofMat:y,facadeMat:M}=nS(_.tags,E),C=new pe(R,[y,M]);C.castShadow=!0,C.receiveShadow=!0;const B=new hy(R,22),I=new Nd(B,E?f:h);if(C.add(I),A>=2&&L>=7){const z=L/A;for(let V=1;V<A;V++){const H=V*z,q=[];for(let at=0;at<g.length;at++)q.push(new D(g[at].x,H,g[at].z));const G=new Ee().setFromPoints(q),tt=new $M(G,u);C.add(tt)}}if(v>90){const V=Math.max(3,Math.min(8,Math.sqrt(v)*.3)),H=Math.max(3,Math.min(8,Math.sqrt(v)*.3)),q=new Mr(V,1.6,H),G=new pe(q,y);G.position.set(m,L+1.6/2,p),G.castShadow=!0,G.receiveShadow=!0,C.add(G)}if(E){const z=new qe,V=new no(2,2.5,32),H=new gi({color:3718648,side:yn}),q=new pe(V,H);q.rotation.x=-Math.PI/2,q.position.set(m,L+4,p),z.add(q),C.add(z)}r.add(C)}catch{}}return s}function sS(n,t){const e=[],i=Math.PI/180,s=Math.cos(n*i);let r=8e5;const o=[{x:-35,z:-35,w:30,d:25,h:18,lvls:5},{x:5,z:-35,w:35,d:25,h:21,lvls:6},{x:-35,z:10,w:28,d:30,h:16,lvls:5},{x:5,z:10,w:32,d:30,h:19,lvls:6},{x:-10,z:-10,w:20,d:18,h:14,lvls:4}];for(const a of o){const c=[{x:a.x,z:a.z},{x:a.x+a.w,z:a.z},{x:a.x+a.w,z:a.z+a.d},{x:a.x,z:a.z+a.d},{x:a.x,z:a.z}].map(h=>({lat:n-h.z/(Sa*i),lon:t+h.x/(Sa*i*s)}));e.push({id:r++,tags:{building:"yes",height:String(a.h),"building:levels":String(a.lvls)},geometry:c})}return e}class rS{constructor(t){this.scene=t,this.weatherGroup=new qe,this.weatherGroup.name="CartoonWeatherEffects",this.scene.add(this.weatherGroup),this.currentCode=0,this.targetHour=12,this.currentHour=12,this.sunGroup=null,this.moonGroup=null,this.clouds=[],this.rainParticles=null,this.snowParticles=null,this.lightningLight=null,this.initLights(),this.initSunAndMoon(),this.initPrecipitations(),this.initClouds()}initLights(){this.ambientLight=new Uy(16777215,.75),this.scene.add(this.ambientLight),this.directionalLight=new Iy(16775917,1.4),this.directionalLight.castShadow=!0,this.directionalLight.shadow.mapSize.width=2048,this.directionalLight.shadow.mapSize.height=2048,this.directionalLight.shadow.bias=-3e-4,this.directionalLight.shadow.camera.near=5,this.directionalLight.shadow.camera.far=280;const t=90;this.directionalLight.shadow.camera.left=-t,this.directionalLight.shadow.camera.right=t,this.directionalLight.shadow.camera.top=t,this.directionalLight.shadow.camera.bottom=-t,this.scene.add(this.directionalLight),this.lightningLight=new Ly(10859772,0,300),this.lightningLight.position.set(0,75,0),this.scene.add(this.lightningLight)}initSunAndMoon(){this.sunGroup=new qe;const t=new zs(15,24,24),e=new gi({color:16758531}),i=new pe(t,e);this.sunGroup.add(i),this.sunRaysGroup=new qe;const s=new Ua(3.5,12,6),r=new gi({color:16483584}),o=12;for(let L=0;L<o;L++){const A=L/o*Math.PI*2,T=new pe(s,r);T.position.set(Math.cos(A)*19,Math.sin(A)*19,0),T.rotation.z=A-Math.PI/2,this.sunRaysGroup.add(T)}this.sunGroup.add(this.sunRaysGroup);const a=new zs(1.6,12,12),l=new gi({color:2042167}),c=new pe(a,l);c.position.set(-5,3,14);const h=new pe(a,l);h.position.set(5,3,14),this.sunGroup.add(c),this.sunGroup.add(h);const f=new hh(new D(-4.5,-2.5,14.5),new D(0,-7,15),new D(4.5,-2.5,14.5)),u=new _h(f,12,.8,6,!1),d=new pe(u,l);this.sunGroup.add(d),this.weatherGroup.add(this.sunGroup),this.moonGroup=new qe;const _=new zs(13,20,20),g=new wl({color:15987958,emissive:6583435}),m=new pe(_,g);this.moonGroup.add(m);const p=new zs(2.5,10,10),E=new wl({color:13751771}),x=new pe(p,E);x.position.set(4,4,11),x.scale.set(1,1,.2);const v=new pe(p,E);v.position.set(-3,-2.5,11.5),v.scale.set(1.3,1.3,.2),this.moonGroup.add(x),this.moonGroup.add(v),this.weatherGroup.add(this.moonGroup)}createLowPolyCloud(t=1,e=!1){const i=new qe,s=5+Math.floor(Math.random()*3),r=e?3621201:16777215,o=new wl({color:r,flatShading:!0});for(let a=0;a<s;a++){const l=(5+Math.random()*5)*t,c=new ph(l,1),h=new pe(c,o);h.position.set((Math.random()-.5)*18*t,(Math.random()-.3)*7*t,(Math.random()-.5)*14*t),h.castShadow=!0,i.add(h)}return i}initClouds(){this.cloudsGroup=new qe,this.weatherGroup.add(this.cloudsGroup),this.cloudPool=[];for(let t=0;t<14;t++){const e=this.createLowPolyCloud(.65+Math.random()*.45,!1),i=t/14*Math.PI*2+Math.random()*.4,s=35+Math.random()*55;e.position.set(Math.cos(i)*s,42+t%3*8+Math.random()*5,Math.sin(i)*s),e.userData={speed:.12+Math.random()*.2,initY:e.position.y,bobPhase:Math.random()*Math.PI*2},this.cloudsGroup.add(e),this.cloudPool.push(e)}}initPrecipitations(){const e=new Ee,i=new Float32Array(1e3*3);for(let c=0;c<1e3;c++)i[c*3]=(Math.random()-.5)*180,i[c*3+1]=Math.random()*70,i[c*3+2]=(Math.random()-.5)*180;e.setAttribute("position",new bn(i,3));const s=new Lc({color:6333946,size:1.8,transparent:!0,opacity:.8});this.rainParticles=new Gu(e,s),this.rainParticles.visible=!1,this.weatherGroup.add(this.rainParticles);const r=600,o=new Ee,a=new Float32Array(r*3);for(let c=0;c<r;c++)a[c*3]=(Math.random()-.5)*180,a[c*3+1]=Math.random()*70,a[c*3+2]=(Math.random()-.5)*180;o.setAttribute("position",new bn(a,3));const l=new Lc({color:16777215,size:2.8,transparent:!0,opacity:.85});this.snowParticles=new Gu(o,l),this.snowParticles.visible=!1,this.weatherGroup.add(this.snowParticles)}triggerLightning(){this.lightningLight&&(this.lightningLight.intensity=18,setTimeout(()=>{this.lightningLight&&(this.lightningLight.intensity=0)},60+Math.random()*50),Math.random()>.4&&setTimeout(()=>{this.lightningLight&&(this.lightningLight.intensity=14,setTimeout(()=>{this.lightningLight&&(this.lightningLight.intensity=0)},45))},130))}setWeatherState(t,e){this.currentCode=t,this.targetHour=e;const i=[51,53,55,56,57,61,63,65,66,67,80,81,82].includes(t),s=[71,73,75,77,85,86].includes(t),r=[95,96,99].includes(t),o=[2,3,45,48].includes(t)||i||s||r;this.rainParticles&&(this.rainParticles.visible=i||r),this.snowParticles&&(this.snowParticles.visible=s);for(const a of this.cloudPool){const l=r||i&&t>=63;a.visible=o,a.traverse(c=>{c.isMesh&&c.material&&c.material.color.setHex(l?3359061:16777215)})}}update(t,e){this.currentHour+=(this.targetHour-this.currentHour)*.08;const i=this.currentHour,s=i>=6&&i<=20,r=(i-6)/14*Math.PI,o=130,a=Math.cos(r)*o,l=Math.sin(r)*(o*.7),c=-40;if(s){this.sunGroup.visible=!0,this.moonGroup.visible=!1,this.sunGroup.position.set(-a,Math.max(-20,l),c),this.directionalLight.position.set(-a,Math.max(25,l),c);const h=1+.08*Math.sin(e*3.5);this.sunGroup.scale.set(h,h,h),this.sunRaysGroup&&(this.sunRaysGroup.rotation.z+=t*.7),this.directionalLight.intensity=Math.max(.4,Math.sin(r)*1.6),this.ambientLight.intensity=.55+Math.sin(r)*.35}else{this.sunGroup.visible=!1,this.moonGroup.visible=!0;const f=(i>20?(i-20)/10:(i+4)/10)*Math.PI,u=Math.cos(f)*o,d=Math.sin(f)*(o*.6);this.moonGroup.position.set(-u,Math.max(20,d),c),this.directionalLight.position.set(-u,Math.max(20,d),c),this.directionalLight.intensity=.4,this.ambientLight.intensity=.3}for(const h of this.cloudPool)h.visible&&(h.position.x+=h.userData.speed*t*15,h.position.x>110&&(h.position.x=-110),h.position.y=h.userData.initY+Math.sin(e*1.5+h.userData.bobPhase)*3);if(this.rainParticles&&this.rainParticles.visible){const h=this.rainParticles.geometry.attributes.position.array;for(let f=1;f<h.length;f+=3)h[f]-=t*180,h[f]<0&&(h[f]=70);this.rainParticles.geometry.attributes.position.needsUpdate=!0}if(this.snowParticles&&this.snowParticles.visible){const h=this.snowParticles.geometry.attributes.position.array;for(let f=0;f<h.length;f+=3)h[f+1]-=t*35,h[f]+=Math.sin(e+f)*.15,h[f+1]<0&&(h[f+1]=70);this.snowParticles.geometry.attributes.position.needsUpdate=!0}[95,96,99].includes(this.currentCode)&&Math.random()<t*.8&&this.triggerLightning()}dispose(){this.scene.remove(this.weatherGroup),this.scene.remove(this.ambientLight),this.scene.remove(this.directionalLight),this.scene.remove(this.lightningLight)}}var oS=Qn('<div class="loading-overlay svelte-hph7ue"><div class="loader-spinner svelte-hph7ue"></div> <p>Génération des bâtiments 3D avec reliefs (rayon 100m)...</p></div>'),aS=Qn('<div class="canvas-wrapper svelte-hph7ue"><canvas class="three-canvas svelte-hph7ue"></canvas> <!> <div class="controls-hint svelte-hph7ue"><span>🔍 Rayon 100m</span> <span>• 🖱️ Clic gauche : Rotation 360°</span> <span>• Molette : Zoom reliefs</span> <span>• Clic droit : Déplacement</span></div></div>');function lS(n,t){pr(t,!0);let e=Ye(t,"latitude",3,48.8566),i=Ye(t,"longitude",3,2.3522),s=Ye(t,"weatherCode",3,0),r=Ye(t,"selectedHour",3,12),o=Ye(t,"onBuildingsLoaded",3,()=>{}),a,l,c=null,h=null,f=null,u=null,d=null,_=null,g=null,m=null,p=null,E=Ue(!1);jc(()=>{x(),p=new ResizeObserver(()=>A()),a&&p.observe(a)}),nd(()=>{g&&cancelAnimationFrame(g),p&&p.disconnect(),d&&d.dispose(),u&&u.dispose(),c&&c.dispose()});function x(){const I=(a==null?void 0:a.clientWidth)||window.innerWidth,z=(a==null?void 0:a.clientHeight)||window.innerHeight;m=new Ny,h=new KM,h.background=new Yt(6333946),h.fog=new ah(6333946,.0035),f=new dn(48,I/z,.5,1e3),f.position.set(0,32,55),c=new ZM({canvas:l,antialias:!0,powerPreference:"high-performance"}),c.setSize(I,z),c.setPixelRatio(Math.min(window.devicePixelRatio,2)),c.shadowMap.enabled=!0,c.shadowMap.type=sd,u=new zy(f,c.domElement),u.enableDamping=!0,u.dampingFactor=.06,u.maxPolarAngle=Math.PI/2-.04,u.minDistance=4,u.maxDistance=160,u.target.set(0,10,0);const V=new uh(125,64),H=new ya({color:1976635,roughness:.9,metalness:.1,side:Mi}),q=new pe(V,H);q.rotation.x=-Math.PI/2,q.position.y=-.05,q.receiveShadow=!0,h.add(q);const G=[25,50,75,100];for(const bt of G){const Dt=new no(bt-.2,bt+.2,64),It=new gi({color:bt===100?3718648:4674921,side:yn,transparent:!0,opacity:bt===100?.7:.35}),jt=new pe(Dt,It);jt.rotation.x=-Math.PI/2,jt.position.y=.02,h.add(jt)}const tt=new Fy(200,40,3718648,3359061);tt.position.y=0,h.add(tt);const at=new qe,_t=new Ua(1.5,7,16),Ut=new gi({color:15680580}),Wt=new pe(_t,Ut);Wt.rotation.x=Math.PI,Wt.position.y=5.5,at.add(Wt);const j=new no(1.5,3,24),st=new gi({color:15680580,side:yn}),Mt=new pe(j,st);Mt.rotation.x=-Math.PI/2,Mt.position.y=.05,at.add(Mt),h.add(at),d=new rS(h),d.setWeatherState(s(),r());const lt=()=>{g=requestAnimationFrame(lt);const bt=m.getDelta(),Dt=m.getElapsedTime();u.update(),d&&d.update(bt,Dt),Wt.position.y=6.5+Math.sin(Dt*4)*1.2,v(),c.render(h,f)};lt()}function v(){if(!h)return;const I=Zc(s());let V=r()>=6&&r()<=20?I.skyDay:I.skyNight;(r()===6||r()===7||r()===19||r()===20)&&(V=16347926);const H=h.background,q=new Yt(V);H.lerp(q,.05),h.fog&&h.fog.color.copy(H)}async function L(I,z){if(h){xe(E,!0),_&&h.remove(_);try{const V=await tS(I,z,100),H=iS(V.elements,I,z,V.streets||[]);_=H,h.add(_);const q=H.getObjectByName("RealBuildingsGroup"),G=q?q.children.length:H.children.length;o()({count:G,source:V.source})}catch(V){console.error("Erreur chargement bâtiments 3D:",V)}finally{xe(E,!1)}}}function A(){if(!c||!f||!a)return;const I=a.clientWidth,z=a.clientHeight;f.aspect=I/z,f.updateProjectionMatrix(),c.setSize(I,z)}let T=null,R=null;Nl(()=>{const I=e(),z=i();(T===null||Math.abs(I-T)>5e-4||Math.abs(z-R)>5e-4)&&(T=I,R=z,h&&L(I,z))}),Nl(()=>{d&&d.setWeatherState(s(),r())});var y=aS(),M=ue(y);Bh(M,I=>l=I,()=>l);var C=oe(M,2);{var B=I=>{var z=oS();zn(I,z)};Ca(C,I=>{Et(E)&&I(B)})}Bh(y,I=>a=I,()=>a),zn(n,y),mr()}var cS=Qn('<div class="error-banner svelte-1n46o8q"><span> </span> <button type="button" class="close-error svelte-1n46o8q">✕</button></div>'),hS=Qn('<main class="app-container svelte-1n46o8q"><div class="viewport-3d svelte-1n46o8q"><!></div> <div class="ui-overlay svelte-1n46o8q"><header class="top-bar svelte-1n46o8q"><div class="brand svelte-1n46o8q"><div class="brand-logo svelte-1n46o8q">🌤️</div> <div><h1 class="brand-title svelte-1n46o8q">MÉTÉO 3D OSM</h1> <span class="brand-subtitle svelte-1n46o8q">Hexagonal Go + Svelte Three.js</span></div></div> <!></header> <!> <aside class="sidebar-card svelte-1n46o8q"><!></aside> <footer class="bottom-bar svelte-1n46o8q"><!></footer></div></main>');function uS(n,t){pr(t,!0);const e="http://localhost:8081";let i=Ue(di({display_name:"Paris, Île-de-France, France métropolitaine, 75001, France",latitude:48.8566,longitude:2.3522})),s=Ue(di([])),r=Ue(12),o=Ue(!1),a=Ue(null),l=Ue(di({count:0,source:"overpass"})),c=nr(()=>!Et(s)||Et(s).length===0?{time:"",weathercode:0,temperature_2m:21.5}:Et(s).find(y=>{if(!y.time)return!1;const M=new Date(y.time);return!isNaN(M.getHours())&&M.getHours()===Et(r)})||Et(s)[Et(r)]||Et(s)[0]);jc(()=>{const R=new Date().getHours();xe(r,R,!0),h("Paris")});async function h(R){xe(o,!0),xe(a,null);try{const y=await fetch(`${e}/weather?address=${encodeURIComponent(R)}`);if(!y.ok){const C=await y.json().catch(()=>({}));throw new Error(C.details||C.error||`Erreur HTTP ${y.status}`)}const M=await y.json();xe(i,M.location,!0),xe(s,M.hourly||[],!0)}catch(y){console.warn("Erreur lors de la requête backend:",y.message),xe(a,`Impossible de joindre le backend Go (${y.message}). Vérifiez que 'go run ./cmd/server' est lancé sur le port 8080.`),Et(s).length===0&&xe(s,Array.from({length:24},(M,C)=>({time:`2026-09-18T${String(C).padStart(2,"0")}:00`,weathercode:C>=18?1:C>=14?61:C>=10?2:0,temperature_2m:16+Math.sin(C/24*Math.PI*2-Math.PI/2)*8})),!0)}finally{xe(o,!1)}}function f(R){xe(l,R,!0)}var u=hS(),d=ue(u),_=ue(d);{let R=nr(()=>{var y;return((y=Et(c))==null?void 0:y.weathercode)||0});lS(_,{get latitude(){return Et(i).latitude},get longitude(){return Et(i).longitude},get weatherCode(){return Et(R)},get selectedHour(){return Et(r)},onBuildingsLoaded:f})}var g=oe(d,2),m=ue(g),p=oe(ue(m),2);Gm(p,{onSearch:h,get loading(){return Et(o)}});var E=oe(m,2);{var x=R=>{var y=cS(),M=ue(y),C=He(M),B=oe(M,2);sr(()=>Ge(C,`⚠️ ${Et(a)??""}`)),Wr("click",B,()=>xe(a,null)),zn(R,y)};Ca(E,R=>{Et(a)&&R(x)})}var v=oe(E,2),L=ue(v);Xm(L,{get location(){return Et(i)},get currentForecast(){return Et(c)},get selectedHour(){return Et(r)},get buildingsCount(){return Et(l).count},get buildingsSource(){return Et(l).source}});var A=oe(v,2),T=ue(A);jm(T,{get hourlyForecasts(){return Et(s)},get selectedHour(){return Et(r)},onSelectHour:R=>xe(r,R,!0)}),zn(n,u),mr()}Yc(["click"]);bm(uS,{target:document.getElementById("app")});
