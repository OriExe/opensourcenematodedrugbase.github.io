(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Oc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Pe={},xr=[],Kt=()=>{},Am=()=>!1,Co=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Nc=t=>t.startsWith("onUpdate:"),Ge=Object.assign,Vc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},bm=Object.prototype.hasOwnProperty,Re=(t,e)=>bm.call(t,e),oe=Array.isArray,Lr=t=>Po(t)==="[object Map]",Od=t=>Po(t)==="[object Set]",ce=t=>typeof t=="function",qe=t=>typeof t=="string",Wn=t=>typeof t=="symbol",Ve=t=>t!==null&&typeof t=="object",Nd=t=>(Ve(t)||ce(t))&&ce(t.then)&&ce(t.catch),Vd=Object.prototype.toString,Po=t=>Vd.call(t),Rm=t=>Po(t).slice(8,-1),xd=t=>Po(t)==="[object Object]",xc=t=>qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ds=Oc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ko=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Sm=/-(\w)/g,Ot=ko(t=>t.replace(Sm,(e,n)=>n?n.toUpperCase():"")),Cm=/\B([A-Z])/g,_r=ko(t=>t.replace(Cm,"-$1").toLowerCase()),Do=ko(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ea=ko(t=>t?`on${Do(t)}`:""),xn=(t,e)=>!Object.is(t,e),ji=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Ld=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Ga=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let wu;const Oo=()=>wu||(wu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Lc(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=qe(r)?Om(r):Lc(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(qe(t)||Ve(t))return t}const Pm=/;(?![^(]*\))/g,km=/:([^]+)/,Dm=/\/\*[^]*?\*\//g;function Om(t){const e={};return t.replace(Dm,"").split(Pm).forEach(n=>{if(n){const r=n.split(km);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Mc(t){let e="";if(qe(t))e=t;else if(oe(t))for(let n=0;n<t.length;n++){const r=Mc(t[n]);r&&(e+=r+" ")}else if(Ve(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Nm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Vm=Oc(Nm);function Md(t){return!!t||t===""}const Fd=t=>!!(t&&t.__v_isRef===!0),so=t=>qe(t)?t:t==null?"":oe(t)||Ve(t)&&(t.toString===Vd||!ce(t.toString))?Fd(t)?so(t.value):JSON.stringify(t,Ud,2):String(t),Ud=(t,e)=>Fd(e)?Ud(t,e.value):Lr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ta(r,i)+" =>"]=s,n),{})}:Od(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ta(n))}:Wn(e)?Ta(e):Ve(e)&&!oe(e)&&!xd(e)?String(e):e,Ta=(t,e="")=>{var n;return Wn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let bt;class xm{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=bt,!e&&bt&&(this.index=(bt.scopes||(bt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=bt;try{return bt=this,e()}finally{bt=n}}}on(){bt=this}off(){bt=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Lm(){return bt}let ke;const wa=new WeakSet;class Bd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,bt&&bt.active&&bt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,wa.has(this)&&(wa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||jd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Iu(this),qd(this);const e=ke,n=Ft;ke=this,Ft=!0;try{return this.fn()}finally{Hd(this),ke=e,Ft=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Bc(e);this.deps=this.depsTail=void 0,Iu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?wa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Qa(this)&&this.run()}get dirty(){return Qa(this)}}let $d=0,Os,Ns;function jd(t,e=!1){if(t.flags|=8,e){t.next=Ns,Ns=t;return}t.next=Os,Os=t}function Fc(){$d++}function Uc(){if(--$d>0)return;if(Ns){let e=Ns;for(Ns=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Os;){let e=Os;for(Os=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function qd(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Hd(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Bc(r),Mm(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Qa(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(zd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function zd(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ks))return;t.globalVersion=Ks;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Qa(t)){t.flags&=-3;return}const n=ke,r=Ft;ke=t,Ft=!0;try{qd(t);const s=t.fn(t._value);(e.version===0||xn(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{ke=n,Ft=r,Hd(t),t.flags&=-3}}function Bc(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Bc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Mm(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ft=!0;const Kd=[];function Gn(){Kd.push(Ft),Ft=!1}function Qn(){const t=Kd.pop();Ft=t===void 0?!0:t}function Iu(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ke;ke=void 0;try{e()}finally{ke=n}}}let Ks=0;class Fm{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class $c{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ke||!Ft||ke===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ke)n=this.activeLink=new Fm(ke,this),ke.deps?(n.prevDep=ke.depsTail,ke.depsTail.nextDep=n,ke.depsTail=n):ke.deps=ke.depsTail=n,Wd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ke.depsTail,n.nextDep=void 0,ke.depsTail.nextDep=n,ke.depsTail=n,ke.deps===n&&(ke.deps=r)}return n}trigger(e){this.version++,Ks++,this.notify(e)}notify(e){Fc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Uc()}}}function Wd(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Wd(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ja=new WeakMap,ar=Symbol(""),Ya=Symbol(""),Ws=Symbol("");function ot(t,e,n){if(Ft&&ke){let r=Ja.get(t);r||Ja.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new $c),s.map=r,s.key=n),s.track()}}function an(t,e,n,r,s,i){const a=Ja.get(t);if(!a){Ks++;return}const c=l=>{l&&l.trigger()};if(Fc(),e==="clear")a.forEach(c);else{const l=oe(t),h=l&&xc(n);if(l&&n==="length"){const f=Number(r);a.forEach((p,m)=>{(m==="length"||m===Ws||!Wn(m)&&m>=f)&&c(p)})}else switch((n!==void 0||a.has(void 0))&&c(a.get(n)),h&&c(a.get(Ws)),e){case"add":l?h&&c(a.get("length")):(c(a.get(ar)),Lr(t)&&c(a.get(Ya)));break;case"delete":l||(c(a.get(ar)),Lr(t)&&c(a.get(Ya)));break;case"set":Lr(t)&&c(a.get(ar));break}}Uc()}function Rr(t){const e=be(t);return e===t?e:(ot(e,"iterate",Ws),Dt(t)?e:e.map(at))}function No(t){return ot(t=be(t),"iterate",Ws),t}const Um={__proto__:null,[Symbol.iterator](){return Ia(this,Symbol.iterator,at)},concat(...t){return Rr(this).concat(...t.map(e=>oe(e)?Rr(e):e))},entries(){return Ia(this,"entries",t=>(t[1]=at(t[1]),t))},every(t,e){return rn(this,"every",t,e,void 0,arguments)},filter(t,e){return rn(this,"filter",t,e,n=>n.map(at),arguments)},find(t,e){return rn(this,"find",t,e,at,arguments)},findIndex(t,e){return rn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return rn(this,"findLast",t,e,at,arguments)},findLastIndex(t,e){return rn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return rn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Aa(this,"includes",t)},indexOf(...t){return Aa(this,"indexOf",t)},join(t){return Rr(this).join(t)},lastIndexOf(...t){return Aa(this,"lastIndexOf",t)},map(t,e){return rn(this,"map",t,e,void 0,arguments)},pop(){return Ts(this,"pop")},push(...t){return Ts(this,"push",t)},reduce(t,...e){return Au(this,"reduce",t,e)},reduceRight(t,...e){return Au(this,"reduceRight",t,e)},shift(){return Ts(this,"shift")},some(t,e){return rn(this,"some",t,e,void 0,arguments)},splice(...t){return Ts(this,"splice",t)},toReversed(){return Rr(this).toReversed()},toSorted(t){return Rr(this).toSorted(t)},toSpliced(...t){return Rr(this).toSpliced(...t)},unshift(...t){return Ts(this,"unshift",t)},values(){return Ia(this,"values",at)}};function Ia(t,e,n){const r=No(t),s=r[e]();return r!==t&&!Dt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Bm=Array.prototype;function rn(t,e,n,r,s,i){const a=No(t),c=a!==t&&!Dt(t),l=a[e];if(l!==Bm[e]){const p=l.apply(t,i);return c?at(p):p}let h=n;a!==t&&(c?h=function(p,m){return n.call(this,at(p),m,t)}:n.length>2&&(h=function(p,m){return n.call(this,p,m,t)}));const f=l.call(a,h,r);return c&&s?s(f):f}function Au(t,e,n,r){const s=No(t);let i=n;return s!==t&&(Dt(t)?n.length>3&&(i=function(a,c,l){return n.call(this,a,c,l,t)}):i=function(a,c,l){return n.call(this,a,at(c),l,t)}),s[e](i,...r)}function Aa(t,e,n){const r=be(t);ot(r,"iterate",Ws);const s=r[e](...n);return(s===-1||s===!1)&&Hc(n[0])?(n[0]=be(n[0]),r[e](...n)):s}function Ts(t,e,n=[]){Gn(),Fc();const r=be(t)[e].apply(t,n);return Uc(),Qn(),r}const $m=Oc("__proto__,__v_isRef,__isVue"),Gd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Wn));function jm(t){Wn(t)||(t=String(t));const e=be(this);return ot(e,"has",t),e.hasOwnProperty(t)}class Qd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Xm:Zd:i?Xd:Yd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=oe(e);if(!s){let l;if(a&&(l=Um[n]))return l;if(n==="hasOwnProperty")return jm}const c=Reflect.get(e,n,ht(e)?e:r);return(Wn(n)?Gd.has(n):$m(n))||(s||ot(e,"get",n),i)?c:ht(c)?a&&xc(n)?c:c.value:Ve(c)?s?tf(c):Vo(c):c}}class Jd extends Qd{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=dr(i);if(!Dt(r)&&!dr(r)&&(i=be(i),r=be(r)),!oe(e)&&ht(i)&&!ht(r))return l?!1:(i.value=r,!0)}const a=oe(e)&&xc(n)?Number(n)<e.length:Re(e,n),c=Reflect.set(e,n,r,ht(e)?e:s);return e===be(s)&&(a?xn(r,i)&&an(e,"set",n,r):an(e,"add",n,r)),c}deleteProperty(e,n){const r=Re(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&an(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Wn(n)||!Gd.has(n))&&ot(e,"has",n),r}ownKeys(e){return ot(e,"iterate",oe(e)?"length":ar),Reflect.ownKeys(e)}}class qm extends Qd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Hm=new Jd,zm=new qm,Km=new Jd(!0);const Xa=t=>t,Ni=t=>Reflect.getPrototypeOf(t);function Wm(t,e,n){return function(...r){const s=this.__v_raw,i=be(s),a=Lr(i),c=t==="entries"||t===Symbol.iterator&&a,l=t==="keys"&&a,h=s[t](...r),f=n?Xa:e?Za:at;return!e&&ot(i,"iterate",l?Ya:ar),{next(){const{value:p,done:m}=h.next();return m?{value:p,done:m}:{value:c?[f(p[0]),f(p[1])]:f(p),done:m}},[Symbol.iterator](){return this}}}}function Vi(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Gm(t,e){const n={get(s){const i=this.__v_raw,a=be(i),c=be(s);t||(xn(s,c)&&ot(a,"get",s),ot(a,"get",c));const{has:l}=Ni(a),h=e?Xa:t?Za:at;if(l.call(a,s))return h(i.get(s));if(l.call(a,c))return h(i.get(c));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!t&&ot(be(s),"iterate",ar),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,a=be(i),c=be(s);return t||(xn(s,c)&&ot(a,"has",s),ot(a,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const a=this,c=a.__v_raw,l=be(c),h=e?Xa:t?Za:at;return!t&&ot(l,"iterate",ar),c.forEach((f,p)=>s.call(i,h(f),h(p),a))}};return Ge(n,t?{add:Vi("add"),set:Vi("set"),delete:Vi("delete"),clear:Vi("clear")}:{add(s){!e&&!Dt(s)&&!dr(s)&&(s=be(s));const i=be(this);return Ni(i).has.call(i,s)||(i.add(s),an(i,"add",s,s)),this},set(s,i){!e&&!Dt(i)&&!dr(i)&&(i=be(i));const a=be(this),{has:c,get:l}=Ni(a);let h=c.call(a,s);h||(s=be(s),h=c.call(a,s));const f=l.call(a,s);return a.set(s,i),h?xn(i,f)&&an(a,"set",s,i):an(a,"add",s,i),this},delete(s){const i=be(this),{has:a,get:c}=Ni(i);let l=a.call(i,s);l||(s=be(s),l=a.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&an(i,"delete",s,void 0),h},clear(){const s=be(this),i=s.size!==0,a=s.clear();return i&&an(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Wm(s,t,e)}),n}function jc(t,e){const n=Gm(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Re(n,s)&&s in r?n:r,s,i)}const Qm={get:jc(!1,!1)},Jm={get:jc(!1,!0)},Ym={get:jc(!0,!1)};const Yd=new WeakMap,Xd=new WeakMap,Zd=new WeakMap,Xm=new WeakMap;function Zm(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function e_(t){return t.__v_skip||!Object.isExtensible(t)?0:Zm(Rm(t))}function Vo(t){return dr(t)?t:qc(t,!1,Hm,Qm,Yd)}function ef(t){return qc(t,!1,Km,Jm,Xd)}function tf(t){return qc(t,!0,zm,Ym,Zd)}function qc(t,e,n,r,s){if(!Ve(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const a=e_(t);if(a===0)return t;const c=new Proxy(t,a===2?r:n);return s.set(t,c),c}function Mr(t){return dr(t)?Mr(t.__v_raw):!!(t&&t.__v_isReactive)}function dr(t){return!!(t&&t.__v_isReadonly)}function Dt(t){return!!(t&&t.__v_isShallow)}function Hc(t){return t?!!t.__v_raw:!1}function be(t){const e=t&&t.__v_raw;return e?be(e):t}function t_(t){return!Re(t,"__v_skip")&&Object.isExtensible(t)&&Ld(t,"__v_skip",!0),t}const at=t=>Ve(t)?Vo(t):t,Za=t=>Ve(t)?tf(t):t;function ht(t){return t?t.__v_isRef===!0:!1}function qi(t){return nf(t,!1)}function n_(t){return nf(t,!0)}function nf(t,e){return ht(t)?t:new r_(t,e)}class r_{constructor(e,n){this.dep=new $c,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:be(e),this._value=n?e:at(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Dt(e)||dr(e);e=r?e:be(e),xn(e,n)&&(this._rawValue=e,this._value=r?e:at(e),this.dep.trigger())}}function Fr(t){return ht(t)?t.value:t}const s_={get:(t,e,n)=>e==="__v_raw"?t:Fr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ht(s)&&!ht(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function rf(t){return Mr(t)?t:new Proxy(t,s_)}class i_{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new $c(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ks-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ke!==this)return jd(this,!0),!0}get value(){const e=this.dep.track();return zd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function o_(t,e,n=!1){let r,s;return ce(t)?r=t:(r=t.get,s=t.set),new i_(r,s,n)}const xi={},io=new WeakMap;let rr;function a_(t,e=!1,n=rr){if(n){let r=io.get(n);r||io.set(n,r=[]),r.push(t)}}function c_(t,e,n=Pe){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:c,call:l}=n,h=H=>s?H:Dt(H)||s===!1||s===0?cn(H,1):cn(H);let f,p,m,E,k=!1,V=!1;if(ht(t)?(p=()=>t.value,k=Dt(t)):Mr(t)?(p=()=>h(t),k=!0):oe(t)?(V=!0,k=t.some(H=>Mr(H)||Dt(H)),p=()=>t.map(H=>{if(ht(H))return H.value;if(Mr(H))return h(H);if(ce(H))return l?l(H,2):H()})):ce(t)?e?p=l?()=>l(t,2):t:p=()=>{if(m){Gn();try{m()}finally{Qn()}}const H=rr;rr=f;try{return l?l(t,3,[E]):t(E)}finally{rr=H}}:p=Kt,e&&s){const H=p,he=s===!0?1/0:s;p=()=>cn(H(),he)}const L=Lm(),W=()=>{f.stop(),L&&L.active&&Vc(L.effects,f)};if(i&&e){const H=e;e=(...he)=>{H(...he),W()}}let $=V?new Array(t.length).fill(xi):xi;const z=H=>{if(!(!(f.flags&1)||!f.dirty&&!H))if(e){const he=f.run();if(s||k||(V?he.some((de,I)=>xn(de,$[I])):xn(he,$))){m&&m();const de=rr;rr=f;try{const I=[he,$===xi?void 0:V&&$[0]===xi?[]:$,E];l?l(e,3,I):e(...I),$=he}finally{rr=de}}}else f.run()};return c&&c(z),f=new Bd(p),f.scheduler=a?()=>a(z,!1):z,E=H=>a_(H,!1,f),m=f.onStop=()=>{const H=io.get(f);if(H){if(l)l(H,4);else for(const he of H)he();io.delete(f)}},e?r?z(!0):$=f.run():a?a(z.bind(null,!0),!0):f.run(),W.pause=f.pause.bind(f),W.resume=f.resume.bind(f),W.stop=W,W}function cn(t,e=1/0,n){if(e<=0||!Ve(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ht(t))cn(t.value,e,n);else if(oe(t))for(let r=0;r<t.length;r++)cn(t[r],e,n);else if(Od(t)||Lr(t))t.forEach(r=>{cn(r,e,n)});else if(xd(t)){for(const r in t)cn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&cn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ai(t,e,n,r){try{return r?t(...r):t()}catch(s){xo(s,e,n)}}function Xt(t,e,n,r){if(ce(t)){const s=ai(t,e,n,r);return s&&Nd(s)&&s.catch(i=>{xo(i,e,n)}),s}if(oe(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Xt(t[i],e,n,r));return s}}function xo(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Pe;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,h)===!1)return}c=c.parent}if(i){Gn(),ai(i,null,10,[t,l,h]),Qn();return}}l_(t,n,s,r,a)}function l_(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const _t=[];let qt=-1;const Ur=[];let Rn=null,Sr=0;const sf=Promise.resolve();let oo=null;function of(t){const e=oo||sf;return t?e.then(this?t.bind(this):t):e}function u_(t){let e=qt+1,n=_t.length;for(;e<n;){const r=e+n>>>1,s=_t[r],i=Gs(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function zc(t){if(!(t.flags&1)){const e=Gs(t),n=_t[_t.length-1];!n||!(t.flags&2)&&e>=Gs(n)?_t.push(t):_t.splice(u_(e),0,t),t.flags|=1,af()}}function af(){oo||(oo=sf.then(lf))}function h_(t){oe(t)?Ur.push(...t):Rn&&t.id===-1?Rn.splice(Sr+1,0,t):t.flags&1||(Ur.push(t),t.flags|=1),af()}function bu(t,e,n=qt+1){for(;n<_t.length;n++){const r=_t[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;_t.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function cf(t){if(Ur.length){const e=[...new Set(Ur)].sort((n,r)=>Gs(n)-Gs(r));if(Ur.length=0,Rn){Rn.push(...e);return}for(Rn=e,Sr=0;Sr<Rn.length;Sr++){const n=Rn[Sr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Rn=null,Sr=0}}const Gs=t=>t.id==null?t.flags&2?-1:1/0:t.id;function lf(t){try{for(qt=0;qt<_t.length;qt++){const e=_t[qt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ai(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;qt<_t.length;qt++){const e=_t[qt];e&&(e.flags&=-2)}qt=-1,_t.length=0,cf(),oo=null,(_t.length||Ur.length)&&lf()}}let Rt=null,uf=null;function ao(t){const e=Rt;return Rt=t,uf=t&&t.type.__scopeId||null,e}function ir(t,e=Rt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Vu(-1);const i=ao(e);let a;try{a=t(...s)}finally{ao(i),r._d&&Vu(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Vs(t,e){if(Rt===null)return t;const n=Uo(Rt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,c,l=Pe]=e[s];i&&(ce(i)&&(i={mounted:i,updated:i}),i.deep&&cn(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function tr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const c=s[a];i&&(c.oldValue=i[a].value);let l=c.dir[r];l&&(Gn(),Xt(l,n,8,[t.el,c,t,e]),Qn())}}const d_=Symbol("_vte"),f_=t=>t.__isTeleport;function Kc(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Kc(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function hf(t,e){return ce(t)?Ge({name:t.name},e,{setup:t}):t}function df(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function co(t,e,n,r,s=!1){if(oe(t)){t.forEach((k,V)=>co(k,e&&(oe(e)?e[V]:e),n,r,s));return}if(xs(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&co(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Uo(r.component):r.el,a=s?null:i,{i:c,r:l}=t,h=e&&e.r,f=c.refs===Pe?c.refs={}:c.refs,p=c.setupState,m=be(p),E=p===Pe?()=>!1:k=>Re(m,k);if(h!=null&&h!==l&&(qe(h)?(f[h]=null,E(h)&&(p[h]=null)):ht(h)&&(h.value=null)),ce(l))ai(l,c,12,[a,f]);else{const k=qe(l),V=ht(l);if(k||V){const L=()=>{if(t.f){const W=k?E(l)?p[l]:f[l]:l.value;s?oe(W)&&Vc(W,i):oe(W)?W.includes(i)||W.push(i):k?(f[l]=[i],E(l)&&(p[l]=f[l])):(l.value=[i],t.k&&(f[t.k]=l.value))}else k?(f[l]=a,E(l)&&(p[l]=a)):V&&(l.value=a,t.k&&(f[t.k]=a))};a?(L.id=-1,At(L,n)):L()}}}Oo().requestIdleCallback;Oo().cancelIdleCallback;const xs=t=>!!t.type.__asyncLoader,ff=t=>t.type.__isKeepAlive;function p_(t,e){pf(t,"a",e)}function g_(t,e){pf(t,"da",e)}function pf(t,e,n=lt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Lo(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ff(s.parent.vnode)&&m_(r,e,n,s),s=s.parent}}function m_(t,e,n,r){const s=Lo(e,t,r,!0);gf(()=>{Vc(r[e],s)},n)}function Lo(t,e,n=lt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{Gn();const c=ci(n),l=Xt(e,n,t,a);return c(),Qn(),l});return r?s.unshift(i):s.push(i),i}}const mn=t=>(e,n=lt)=>{(!Js||t==="sp")&&Lo(t,(...r)=>e(...r),n)},__=mn("bm"),y_=mn("m"),v_=mn("bu"),E_=mn("u"),T_=mn("bum"),gf=mn("um"),w_=mn("sp"),I_=mn("rtg"),A_=mn("rtc");function b_(t,e=lt){Lo("ec",t,e)}const R_="components";function cr(t,e){return C_(R_,t,!0,e)||t}const S_=Symbol.for("v-ndc");function C_(t,e,n=!0,r=!1){const s=Rt||lt;if(s){const i=s.type;{const c=my(i,!1);if(c&&(c===e||c===Ot(e)||c===Do(Ot(e))))return i}const a=Ru(s[t]||i[t],e)||Ru(s.appContext[t],e);return!a&&r?i:a}}function Ru(t,e){return t&&(t[e]||t[Ot(e)]||t[Do(Ot(e))])}function P_(t,e,n,r){let s;const i=n,a=oe(t);if(a||qe(t)){const c=a&&Mr(t);let l=!1;c&&(l=!Dt(t),t=No(t)),s=new Array(t.length);for(let h=0,f=t.length;h<f;h++)s[h]=e(l?at(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Ve(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}const ec=t=>t?xf(t)?Uo(t):ec(t.parent):null,Ls=Ge(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ec(t.parent),$root:t=>ec(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Wc(t),$forceUpdate:t=>t.f||(t.f=()=>{zc(t.update)}),$nextTick:t=>t.n||(t.n=of.bind(t.proxy)),$watch:t=>J_.bind(t)}),ba=(t,e)=>t!==Pe&&!t.__isScriptSetup&&Re(t,e),k_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:c,appContext:l}=t;let h;if(e[0]!=="$"){const E=a[e];if(E!==void 0)switch(E){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ba(r,e))return a[e]=1,r[e];if(s!==Pe&&Re(s,e))return a[e]=2,s[e];if((h=t.propsOptions[0])&&Re(h,e))return a[e]=3,i[e];if(n!==Pe&&Re(n,e))return a[e]=4,n[e];tc&&(a[e]=0)}}const f=Ls[e];let p,m;if(f)return e==="$attrs"&&ot(t.attrs,"get",""),f(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==Pe&&Re(n,e))return a[e]=4,n[e];if(m=l.config.globalProperties,Re(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ba(s,e)?(s[e]=n,!0):r!==Pe&&Re(r,e)?(r[e]=n,!0):Re(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},a){let c;return!!n[a]||t!==Pe&&Re(t,a)||ba(e,a)||(c=i[0])&&Re(c,a)||Re(r,a)||Re(Ls,a)||Re(s.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Re(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Su(t){return oe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let tc=!0;function D_(t){const e=Wc(t),n=t.proxy,r=t.ctx;tc=!1,e.beforeCreate&&Cu(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:a,watch:c,provide:l,inject:h,created:f,beforeMount:p,mounted:m,beforeUpdate:E,updated:k,activated:V,deactivated:L,beforeDestroy:W,beforeUnmount:$,destroyed:z,unmounted:H,render:he,renderTracked:de,renderTriggered:I,errorCaptured:y,serverPrefetch:w,expose:A,inheritAttrs:b,components:R,directives:T,filters:ft}=e;if(h&&O_(h,r,null),a)for(const ge in a){const fe=a[ge];ce(fe)&&(r[ge]=fe.bind(n))}if(s){const ge=s.call(n,n);Ve(ge)&&(t.data=Vo(ge))}if(tc=!0,i)for(const ge in i){const fe=i[ge],wt=ce(fe)?fe.bind(n,n):ce(fe.get)?fe.get.bind(n,n):Kt,Vt=!ce(fe)&&ce(fe.set)?fe.set.bind(n):Kt,Pt=Mt({get:wt,set:Vt});Object.defineProperty(r,ge,{enumerable:!0,configurable:!0,get:()=>Pt.value,set:xe=>Pt.value=xe})}if(c)for(const ge in c)mf(c[ge],r,n,ge);if(l){const ge=ce(l)?l.call(n):l;Reflect.ownKeys(ge).forEach(fe=>{Hi(fe,ge[fe])})}f&&Cu(f,t,"c");function $e(ge,fe){oe(fe)?fe.forEach(wt=>ge(wt.bind(n))):fe&&ge(fe.bind(n))}if($e(__,p),$e(y_,m),$e(v_,E),$e(E_,k),$e(p_,V),$e(g_,L),$e(b_,y),$e(A_,de),$e(I_,I),$e(T_,$),$e(gf,H),$e(w_,w),oe(A))if(A.length){const ge=t.exposed||(t.exposed={});A.forEach(fe=>{Object.defineProperty(ge,fe,{get:()=>n[fe],set:wt=>n[fe]=wt})})}else t.exposed||(t.exposed={});he&&t.render===Kt&&(t.render=he),b!=null&&(t.inheritAttrs=b),R&&(t.components=R),T&&(t.directives=T),w&&df(t)}function O_(t,e,n=Kt){oe(t)&&(t=nc(t));for(const r in t){const s=t[r];let i;Ve(s)?"default"in s?i=Wt(s.from||r,s.default,!0):i=Wt(s.from||r):i=Wt(s),ht(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function Cu(t,e,n){Xt(oe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function mf(t,e,n,r){let s=r.includes(".")?kf(n,r):()=>n[r];if(qe(t)){const i=e[t];ce(i)&&zi(s,i)}else if(ce(t))zi(s,t.bind(n));else if(Ve(t))if(oe(t))t.forEach(i=>mf(i,e,n,r));else{const i=ce(t.handler)?t.handler.bind(n):e[t.handler];ce(i)&&zi(s,i,t)}}function Wc(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>lo(l,h,a,!0)),lo(l,e,a)),Ve(e)&&i.set(e,l),l}function lo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&lo(t,i,n,!0),s&&s.forEach(a=>lo(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const c=N_[a]||n&&n[a];t[a]=c?c(t[a],e[a]):e[a]}return t}const N_={data:Pu,props:ku,emits:ku,methods:As,computed:As,beforeCreate:mt,created:mt,beforeMount:mt,mounted:mt,beforeUpdate:mt,updated:mt,beforeDestroy:mt,beforeUnmount:mt,destroyed:mt,unmounted:mt,activated:mt,deactivated:mt,errorCaptured:mt,serverPrefetch:mt,components:As,directives:As,watch:x_,provide:Pu,inject:V_};function Pu(t,e){return e?t?function(){return Ge(ce(t)?t.call(this,this):t,ce(e)?e.call(this,this):e)}:e:t}function V_(t,e){return As(nc(t),nc(e))}function nc(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function mt(t,e){return t?[...new Set([].concat(t,e))]:e}function As(t,e){return t?Ge(Object.create(null),t,e):e}function ku(t,e){return t?oe(t)&&oe(e)?[...new Set([...t,...e])]:Ge(Object.create(null),Su(t),Su(e??{})):e}function x_(t,e){if(!t)return e;if(!e)return t;const n=Ge(Object.create(null),t);for(const r in e)n[r]=mt(t[r],e[r]);return n}function _f(){return{app:null,config:{isNativeTag:Am,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let L_=0;function M_(t,e){return function(r,s=null){ce(r)||(r=Ge({},r)),s!=null&&!Ve(s)&&(s=null);const i=_f(),a=new WeakSet,c=[];let l=!1;const h=i.app={_uid:L_++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:yy,get config(){return i.config},set config(f){},use(f,...p){return a.has(f)||(f&&ce(f.install)?(a.add(f),f.install(h,...p)):ce(f)&&(a.add(f),f(h,...p))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,p){return p?(i.components[f]=p,h):i.components[f]},directive(f,p){return p?(i.directives[f]=p,h):i.directives[f]},mount(f,p,m){if(!l){const E=h._ceVNode||Ne(r,s);return E.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),p&&e?e(E,f):t(E,f,m),l=!0,h._container=f,f.__vue_app__=h,Uo(E.component)}},onUnmount(f){c.push(f)},unmount(){l&&(Xt(c,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(f,p){return i.provides[f]=p,h},runWithContext(f){const p=Br;Br=h;try{return f()}finally{Br=p}}};return h}}let Br=null;function Hi(t,e){if(lt){let n=lt.provides;const r=lt.parent&&lt.parent.provides;r===n&&(n=lt.provides=Object.create(r)),n[t]=e}}function Wt(t,e,n=!1){const r=lt||Rt;if(r||Br){const s=Br?Br._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ce(e)?e.call(r&&r.proxy):e}}const yf={},vf=()=>Object.create(yf),Ef=t=>Object.getPrototypeOf(t)===yf;function F_(t,e,n,r=!1){const s={},i=vf();t.propsDefaults=Object.create(null),Tf(t,e,s,i);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:ef(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function U_(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=t,c=be(s),[l]=t.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(Mo(t.emitsOptions,m))continue;const E=e[m];if(l)if(Re(i,m))E!==i[m]&&(i[m]=E,h=!0);else{const k=Ot(m);s[k]=rc(l,c,k,E,t,!1)}else E!==i[m]&&(i[m]=E,h=!0)}}}else{Tf(t,e,s,i)&&(h=!0);let f;for(const p in c)(!e||!Re(e,p)&&((f=_r(p))===p||!Re(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=rc(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Re(e,p))&&(delete i[p],h=!0)}h&&an(t.attrs,"set","")}function Tf(t,e,n,r){const[s,i]=t.propsOptions;let a=!1,c;if(e)for(let l in e){if(Ds(l))continue;const h=e[l];let f;s&&Re(s,f=Ot(l))?!i||!i.includes(f)?n[f]=h:(c||(c={}))[f]=h:Mo(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,a=!0)}if(i){const l=be(n),h=c||Pe;for(let f=0;f<i.length;f++){const p=i[f];n[p]=rc(s,l,p,h[p],t,!Re(h,p))}}return a}function rc(t,e,n,r,s,i){const a=t[n];if(a!=null){const c=Re(a,"default");if(c&&r===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&ce(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const f=ci(s);r=h[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!c?r=!1:a[1]&&(r===""||r===_r(n))&&(r=!0))}return r}const B_=new WeakMap;function wf(t,e,n=!1){const r=n?B_:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,a={},c=[];let l=!1;if(!ce(t)){const f=p=>{l=!0;const[m,E]=wf(p,e,!0);Ge(a,m),E&&c.push(...E)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return Ve(t)&&r.set(t,xr),xr;if(oe(i))for(let f=0;f<i.length;f++){const p=Ot(i[f]);Du(p)&&(a[p]=Pe)}else if(i)for(const f in i){const p=Ot(f);if(Du(p)){const m=i[f],E=a[p]=oe(m)||ce(m)?{type:m}:Ge({},m),k=E.type;let V=!1,L=!0;if(oe(k))for(let W=0;W<k.length;++W){const $=k[W],z=ce($)&&$.name;if(z==="Boolean"){V=!0;break}else z==="String"&&(L=!1)}else V=ce(k)&&k.name==="Boolean";E[0]=V,E[1]=L,(V||Re(E,"default"))&&c.push(p)}}const h=[a,c];return Ve(t)&&r.set(t,h),h}function Du(t){return t[0]!=="$"&&!Ds(t)}const If=t=>t[0]==="_"||t==="$stable",Gc=t=>oe(t)?t.map(Ht):[Ht(t)],$_=(t,e,n)=>{if(e._n)return e;const r=ir((...s)=>Gc(e(...s)),n);return r._c=!1,r},Af=(t,e,n)=>{const r=t._ctx;for(const s in t){if(If(s))continue;const i=t[s];if(ce(i))e[s]=$_(s,i,r);else if(i!=null){const a=Gc(i);e[s]=()=>a}}},bf=(t,e)=>{const n=Gc(e);t.slots.default=()=>n},Rf=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},j_=(t,e,n)=>{const r=t.slots=vf();if(t.vnode.shapeFlag&32){const s=e._;s?(Rf(r,e,n),n&&Ld(r,"_",s,!0)):Af(e,r)}else e&&bf(t,e)},q_=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,a=Pe;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Rf(s,e,n):(i=!e.$stable,Af(e,s)),a=e}else e&&(bf(t,e),a={default:1});if(i)for(const c in s)!If(c)&&a[c]==null&&delete s[c]},At=ry;function H_(t){return z_(t)}function z_(t,e){const n=Oo();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:c,createComment:l,setText:h,setElementText:f,parentNode:p,nextSibling:m,setScopeId:E=Kt,insertStaticContent:k}=t,V=(_,v,C,x=null,D=null,M=null,K=void 0,B=null,U=!!v.dynamicChildren)=>{if(_===v)return;_&&!ws(_,v)&&(x=O(_),xe(_,D,M,!0),_=null),v.patchFlag===-2&&(U=!1,v.dynamicChildren=null);const{type:F,ref:ne,shapeFlag:Q}=v;switch(F){case Fo:L(_,v,C,x);break;case fr:W(_,v,C,x);break;case Ki:_==null&&$(v,C,x,K);break;case Lt:R(_,v,C,x,D,M,K,B,U);break;default:Q&1?he(_,v,C,x,D,M,K,B,U):Q&6?T(_,v,C,x,D,M,K,B,U):(Q&64||Q&128)&&F.process(_,v,C,x,D,M,K,B,U,X)}ne!=null&&D&&co(ne,_&&_.ref,M,v||_,!v)},L=(_,v,C,x)=>{if(_==null)r(v.el=c(v.children),C,x);else{const D=v.el=_.el;v.children!==_.children&&h(D,v.children)}},W=(_,v,C,x)=>{_==null?r(v.el=l(v.children||""),C,x):v.el=_.el},$=(_,v,C,x)=>{[_.el,_.anchor]=k(_.children,v,C,x,_.el,_.anchor)},z=({el:_,anchor:v},C,x)=>{let D;for(;_&&_!==v;)D=m(_),r(_,C,x),_=D;r(v,C,x)},H=({el:_,anchor:v})=>{let C;for(;_&&_!==v;)C=m(_),s(_),_=C;s(v)},he=(_,v,C,x,D,M,K,B,U)=>{v.type==="svg"?K="svg":v.type==="math"&&(K="mathml"),_==null?de(v,C,x,D,M,K,B,U):w(_,v,D,M,K,B,U)},de=(_,v,C,x,D,M,K,B)=>{let U,F;const{props:ne,shapeFlag:Q,transition:ee,dirs:Z}=_;if(U=_.el=a(_.type,M,ne&&ne.is,ne),Q&8?f(U,_.children):Q&16&&y(_.children,U,null,x,D,Ra(_,M),K,B),Z&&tr(_,null,x,"created"),I(U,_,_.scopeId,K,x),ne){for(const Ie in ne)Ie!=="value"&&!Ds(Ie)&&i(U,Ie,null,ne[Ie],M,x);"value"in ne&&i(U,"value",null,ne.value,M),(F=ne.onVnodeBeforeMount)&&jt(F,x,_)}Z&&tr(_,null,x,"beforeMount");const se=K_(D,ee);se&&ee.beforeEnter(U),r(U,v,C),((F=ne&&ne.onVnodeMounted)||se||Z)&&At(()=>{F&&jt(F,x,_),se&&ee.enter(U),Z&&tr(_,null,x,"mounted")},D)},I=(_,v,C,x,D)=>{if(C&&E(_,C),x)for(let M=0;M<x.length;M++)E(_,x[M]);if(D){let M=D.subTree;if(v===M||Of(M.type)&&(M.ssContent===v||M.ssFallback===v)){const K=D.vnode;I(_,K,K.scopeId,K.slotScopeIds,D.parent)}}},y=(_,v,C,x,D,M,K,B,U=0)=>{for(let F=U;F<_.length;F++){const ne=_[F]=B?Sn(_[F]):Ht(_[F]);V(null,ne,v,C,x,D,M,K,B)}},w=(_,v,C,x,D,M,K)=>{const B=v.el=_.el;let{patchFlag:U,dynamicChildren:F,dirs:ne}=v;U|=_.patchFlag&16;const Q=_.props||Pe,ee=v.props||Pe;let Z;if(C&&nr(C,!1),(Z=ee.onVnodeBeforeUpdate)&&jt(Z,C,v,_),ne&&tr(v,_,C,"beforeUpdate"),C&&nr(C,!0),(Q.innerHTML&&ee.innerHTML==null||Q.textContent&&ee.textContent==null)&&f(B,""),F?A(_.dynamicChildren,F,B,C,x,Ra(v,D),M):K||fe(_,v,B,null,C,x,Ra(v,D),M,!1),U>0){if(U&16)b(B,Q,ee,C,D);else if(U&2&&Q.class!==ee.class&&i(B,"class",null,ee.class,D),U&4&&i(B,"style",Q.style,ee.style,D),U&8){const se=v.dynamicProps;for(let Ie=0;Ie<se.length;Ie++){const Te=se[Ie],et=Q[Te],Ke=ee[Te];(Ke!==et||Te==="value")&&i(B,Te,et,Ke,D,C)}}U&1&&_.children!==v.children&&f(B,v.children)}else!K&&F==null&&b(B,Q,ee,C,D);((Z=ee.onVnodeUpdated)||ne)&&At(()=>{Z&&jt(Z,C,v,_),ne&&tr(v,_,C,"updated")},x)},A=(_,v,C,x,D,M,K)=>{for(let B=0;B<v.length;B++){const U=_[B],F=v[B],ne=U.el&&(U.type===Lt||!ws(U,F)||U.shapeFlag&70)?p(U.el):C;V(U,F,ne,null,x,D,M,K,!0)}},b=(_,v,C,x,D)=>{if(v!==C){if(v!==Pe)for(const M in v)!Ds(M)&&!(M in C)&&i(_,M,v[M],null,D,x);for(const M in C){if(Ds(M))continue;const K=C[M],B=v[M];K!==B&&M!=="value"&&i(_,M,B,K,D,x)}"value"in C&&i(_,"value",v.value,C.value,D)}},R=(_,v,C,x,D,M,K,B,U)=>{const F=v.el=_?_.el:c(""),ne=v.anchor=_?_.anchor:c("");let{patchFlag:Q,dynamicChildren:ee,slotScopeIds:Z}=v;Z&&(B=B?B.concat(Z):Z),_==null?(r(F,C,x),r(ne,C,x),y(v.children||[],C,ne,D,M,K,B,U)):Q>0&&Q&64&&ee&&_.dynamicChildren?(A(_.dynamicChildren,ee,C,D,M,K,B),(v.key!=null||D&&v===D.subTree)&&Sf(_,v,!0)):fe(_,v,C,ne,D,M,K,B,U)},T=(_,v,C,x,D,M,K,B,U)=>{v.slotScopeIds=B,_==null?v.shapeFlag&512?D.ctx.activate(v,C,x,K,U):ft(v,C,x,D,M,K,U):Ct(_,v,U)},ft=(_,v,C,x,D,M,K)=>{const B=_.component=hy(_,x,D);if(ff(_)&&(B.ctx.renderer=X),dy(B,!1,K),B.asyncDep){if(D&&D.registerDep(B,$e,K),!_.el){const U=B.subTree=Ne(fr);W(null,U,v,C)}}else $e(B,_,v,C,D,M,K)},Ct=(_,v,C)=>{const x=v.component=_.component;if(ty(_,v,C))if(x.asyncDep&&!x.asyncResolved){ge(x,v,C);return}else x.next=v,x.update();else v.el=_.el,x.vnode=v},$e=(_,v,C,x,D,M,K)=>{const B=()=>{if(_.isMounted){let{next:Q,bu:ee,u:Z,parent:se,vnode:Ie}=_;{const tt=Cf(_);if(tt){Q&&(Q.el=Ie.el,ge(_,Q,K)),tt.asyncDep.then(()=>{_.isUnmounted||B()});return}}let Te=Q,et;nr(_,!1),Q?(Q.el=Ie.el,ge(_,Q,K)):Q=Ie,ee&&ji(ee),(et=Q.props&&Q.props.onVnodeBeforeUpdate)&&jt(et,se,Q,Ie),nr(_,!0);const Ke=Sa(_),Qe=_.subTree;_.subTree=Ke,V(Qe,Ke,p(Qe.el),O(Qe),_,D,M),Q.el=Ke.el,Te===null&&ny(_,Ke.el),Z&&At(Z,D),(et=Q.props&&Q.props.onVnodeUpdated)&&At(()=>jt(et,se,Q,Ie),D)}else{let Q;const{el:ee,props:Z}=v,{bm:se,m:Ie,parent:Te,root:et,type:Ke}=_,Qe=xs(v);if(nr(_,!1),se&&ji(se),!Qe&&(Q=Z&&Z.onVnodeBeforeMount)&&jt(Q,Te,v),nr(_,!0),ee&&Se){const tt=()=>{_.subTree=Sa(_),Se(ee,_.subTree,_,D,null)};Qe&&Ke.__asyncHydrate?Ke.__asyncHydrate(ee,_,tt):tt()}else{et.ce&&et.ce._injectChildStyle(Ke);const tt=_.subTree=Sa(_);V(null,tt,C,x,_,D,M),v.el=tt.el}if(Ie&&At(Ie,D),!Qe&&(Q=Z&&Z.onVnodeMounted)){const tt=v;At(()=>jt(Q,Te,tt),D)}(v.shapeFlag&256||Te&&xs(Te.vnode)&&Te.vnode.shapeFlag&256)&&_.a&&At(_.a,D),_.isMounted=!0,v=C=x=null}};_.scope.on();const U=_.effect=new Bd(B);_.scope.off();const F=_.update=U.run.bind(U),ne=_.job=U.runIfDirty.bind(U);ne.i=_,ne.id=_.uid,U.scheduler=()=>zc(ne),nr(_,!0),F()},ge=(_,v,C)=>{v.component=_;const x=_.vnode.props;_.vnode=v,_.next=null,U_(_,v.props,x,C),q_(_,v.children,C),Gn(),bu(_),Qn()},fe=(_,v,C,x,D,M,K,B,U=!1)=>{const F=_&&_.children,ne=_?_.shapeFlag:0,Q=v.children,{patchFlag:ee,shapeFlag:Z}=v;if(ee>0){if(ee&128){Vt(F,Q,C,x,D,M,K,B,U);return}else if(ee&256){wt(F,Q,C,x,D,M,K,B,U);return}}Z&8?(ne&16&&vt(F,D,M),Q!==F&&f(C,Q)):ne&16?Z&16?Vt(F,Q,C,x,D,M,K,B,U):vt(F,D,M,!0):(ne&8&&f(C,""),Z&16&&y(Q,C,x,D,M,K,B,U))},wt=(_,v,C,x,D,M,K,B,U)=>{_=_||xr,v=v||xr;const F=_.length,ne=v.length,Q=Math.min(F,ne);let ee;for(ee=0;ee<Q;ee++){const Z=v[ee]=U?Sn(v[ee]):Ht(v[ee]);V(_[ee],Z,C,null,D,M,K,B,U)}F>ne?vt(_,D,M,!0,!1,Q):y(v,C,x,D,M,K,B,U,Q)},Vt=(_,v,C,x,D,M,K,B,U)=>{let F=0;const ne=v.length;let Q=_.length-1,ee=ne-1;for(;F<=Q&&F<=ee;){const Z=_[F],se=v[F]=U?Sn(v[F]):Ht(v[F]);if(ws(Z,se))V(Z,se,C,null,D,M,K,B,U);else break;F++}for(;F<=Q&&F<=ee;){const Z=_[Q],se=v[ee]=U?Sn(v[ee]):Ht(v[ee]);if(ws(Z,se))V(Z,se,C,null,D,M,K,B,U);else break;Q--,ee--}if(F>Q){if(F<=ee){const Z=ee+1,se=Z<ne?v[Z].el:x;for(;F<=ee;)V(null,v[F]=U?Sn(v[F]):Ht(v[F]),C,se,D,M,K,B,U),F++}}else if(F>ee)for(;F<=Q;)xe(_[F],D,M,!0),F++;else{const Z=F,se=F,Ie=new Map;for(F=se;F<=ee;F++){const pt=v[F]=U?Sn(v[F]):Ht(v[F]);pt.key!=null&&Ie.set(pt.key,F)}let Te,et=0;const Ke=ee-se+1;let Qe=!1,tt=0;const En=new Array(Ke);for(F=0;F<Ke;F++)En[F]=0;for(F=Z;F<=Q;F++){const pt=_[F];if(et>=Ke){xe(pt,D,M,!0);continue}let kt;if(pt.key!=null)kt=Ie.get(pt.key);else for(Te=se;Te<=ee;Te++)if(En[Te-se]===0&&ws(pt,v[Te])){kt=Te;break}kt===void 0?xe(pt,D,M,!0):(En[kt-se]=F+1,kt>=tt?tt=kt:Qe=!0,V(pt,v[kt],C,null,D,M,K,B,U),et++)}const Er=Qe?W_(En):xr;for(Te=Er.length-1,F=Ke-1;F>=0;F--){const pt=se+F,kt=v[pt],Tr=pt+1<ne?v[pt+1].el:x;En[F]===0?V(null,kt,C,Tr,D,M,K,B,U):Qe&&(Te<0||F!==Er[Te]?Pt(kt,C,Tr,2):Te--)}}},Pt=(_,v,C,x,D=null)=>{const{el:M,type:K,transition:B,children:U,shapeFlag:F}=_;if(F&6){Pt(_.component.subTree,v,C,x);return}if(F&128){_.suspense.move(v,C,x);return}if(F&64){K.move(_,v,C,X);return}if(K===Lt){r(M,v,C);for(let Q=0;Q<U.length;Q++)Pt(U[Q],v,C,x);r(_.anchor,v,C);return}if(K===Ki){z(_,v,C);return}if(x!==2&&F&1&&B)if(x===0)B.beforeEnter(M),r(M,v,C),At(()=>B.enter(M),D);else{const{leave:Q,delayLeave:ee,afterLeave:Z}=B,se=()=>r(M,v,C),Ie=()=>{Q(M,()=>{se(),Z&&Z()})};ee?ee(M,se,Ie):Ie()}else r(M,v,C)},xe=(_,v,C,x=!1,D=!1)=>{const{type:M,props:K,ref:B,children:U,dynamicChildren:F,shapeFlag:ne,patchFlag:Q,dirs:ee,cacheIndex:Z}=_;if(Q===-2&&(D=!1),B!=null&&co(B,null,C,_,!0),Z!=null&&(v.renderCache[Z]=void 0),ne&256){v.ctx.deactivate(_);return}const se=ne&1&&ee,Ie=!xs(_);let Te;if(Ie&&(Te=K&&K.onVnodeBeforeUnmount)&&jt(Te,v,_),ne&6)$t(_.component,C,x);else{if(ne&128){_.suspense.unmount(C,x);return}se&&tr(_,null,v,"beforeUnmount"),ne&64?_.type.remove(_,v,C,X,x):F&&!F.hasOnce&&(M!==Lt||Q>0&&Q&64)?vt(F,v,C,!1,!0):(M===Lt&&Q&384||!D&&ne&16)&&vt(U,v,C),x&&Le(_)}(Ie&&(Te=K&&K.onVnodeUnmounted)||se)&&At(()=>{Te&&jt(Te,v,_),se&&tr(_,null,v,"unmounted")},C)},Le=_=>{const{type:v,el:C,anchor:x,transition:D}=_;if(v===Lt){vn(C,x);return}if(v===Ki){H(_);return}const M=()=>{s(C),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(_.shapeFlag&1&&D&&!D.persisted){const{leave:K,delayLeave:B}=D,U=()=>K(C,M);B?B(_.el,M,U):U()}else M()},vn=(_,v)=>{let C;for(;_!==v;)C=m(_),s(_),_=C;s(v)},$t=(_,v,C)=>{const{bum:x,scope:D,job:M,subTree:K,um:B,m:U,a:F}=_;Ou(U),Ou(F),x&&ji(x),D.stop(),M&&(M.flags|=8,xe(K,_,v,C)),B&&At(B,v),At(()=>{_.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},vt=(_,v,C,x=!1,D=!1,M=0)=>{for(let K=M;K<_.length;K++)xe(_[K],v,C,x,D)},O=_=>{if(_.shapeFlag&6)return O(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const v=m(_.anchor||_.el),C=v&&v[d_];return C?m(C):v};let J=!1;const G=(_,v,C)=>{_==null?v._vnode&&xe(v._vnode,null,null,!0):V(v._vnode||null,_,v,null,null,null,C),v._vnode=_,J||(J=!0,bu(),cf(),J=!1)},X={p:V,um:xe,m:Pt,r:Le,mt:ft,mc:y,pc:fe,pbc:A,n:O,o:t};let me,Se;return{render:G,hydrate:me,createApp:M_(G,me)}}function Ra({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function nr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function K_(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Sf(t,e,n=!1){const r=t.children,s=e.children;if(oe(r)&&oe(s))for(let i=0;i<r.length;i++){const a=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Sn(s[i]),c.el=a.el),!n&&c.patchFlag!==-2&&Sf(a,c)),c.type===Fo&&(c.el=a.el)}}function W_(t){const e=t.slice(),n=[0];let r,s,i,a,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)c=i+a>>1,t[n[c]]<h?i=c+1:a=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}function Cf(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Cf(e)}function Ou(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const G_=Symbol.for("v-scx"),Q_=()=>Wt(G_);function zi(t,e,n){return Pf(t,e,n)}function Pf(t,e,n=Pe){const{immediate:r,deep:s,flush:i,once:a}=n,c=Ge({},n),l=e&&r||!e&&i!=="post";let h;if(Js){if(i==="sync"){const E=Q_();h=E.__watcherHandles||(E.__watcherHandles=[])}else if(!l){const E=()=>{};return E.stop=Kt,E.resume=Kt,E.pause=Kt,E}}const f=lt;c.call=(E,k,V)=>Xt(E,f,k,V);let p=!1;i==="post"?c.scheduler=E=>{At(E,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(E,k)=>{k?E():zc(E)}),c.augmentJob=E=>{e&&(E.flags|=4),p&&(E.flags|=2,f&&(E.id=f.uid,E.i=f))};const m=c_(t,e,c);return Js&&(h?h.push(m):l&&m()),m}function J_(t,e,n){const r=this.proxy,s=qe(t)?t.includes(".")?kf(r,t):()=>r[t]:t.bind(r,r);let i;ce(e)?i=e:(i=e.handler,n=e);const a=ci(this),c=Pf(s,i.bind(r),n);return a(),c}function kf(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Y_=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ot(e)}Modifiers`]||t[`${_r(e)}Modifiers`];function X_(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Pe;let s=n;const i=e.startsWith("update:"),a=i&&Y_(r,e.slice(7));a&&(a.trim&&(s=n.map(f=>qe(f)?f.trim():f)),a.number&&(s=n.map(Ga)));let c,l=r[c=Ea(e)]||r[c=Ea(Ot(e))];!l&&i&&(l=r[c=Ea(_r(e))]),l&&Xt(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Xt(h,t,6,s)}}function Df(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let a={},c=!1;if(!ce(t)){const l=h=>{const f=Df(h,e,!0);f&&(c=!0,Ge(a,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Ve(t)&&r.set(t,null),null):(oe(i)?i.forEach(l=>a[l]=null):Ge(a,i),Ve(t)&&r.set(t,a),a)}function Mo(t,e){return!t||!Co(e)?!1:(e=e.slice(2).replace(/Once$/,""),Re(t,e[0].toLowerCase()+e.slice(1))||Re(t,_r(e))||Re(t,e))}function Sa(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:c,emit:l,render:h,renderCache:f,props:p,data:m,setupState:E,ctx:k,inheritAttrs:V}=t,L=ao(t);let W,$;try{if(n.shapeFlag&4){const H=s||r,he=H;W=Ht(h.call(he,H,f,p,E,m,k)),$=c}else{const H=e;W=Ht(H.length>1?H(p,{attrs:c,slots:a,emit:l}):H(p,null)),$=e.props?c:Z_(c)}}catch(H){Ms.length=0,xo(H,t,1),W=Ne(fr)}let z=W;if($&&V!==!1){const H=Object.keys($),{shapeFlag:he}=z;H.length&&he&7&&(i&&H.some(Nc)&&($=ey($,i)),z=Kr(z,$,!1,!0))}return n.dirs&&(z=Kr(z,null,!1,!0),z.dirs=z.dirs?z.dirs.concat(n.dirs):n.dirs),n.transition&&Kc(z,n.transition),W=z,ao(L),W}const Z_=t=>{let e;for(const n in t)(n==="class"||n==="style"||Co(n))&&((e||(e={}))[n]=t[n]);return e},ey=(t,e)=>{const n={};for(const r in t)(!Nc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function ty(t,e,n){const{props:r,children:s,component:i}=t,{props:a,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Nu(r,a,h):!!a;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(a[m]!==r[m]&&!Mo(h,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===a?!1:r?a?Nu(r,a,h):!0:!!a;return!1}function Nu(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Mo(n,i))return!0}return!1}function ny({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Of=t=>t.__isSuspense;function ry(t,e){e&&e.pendingBranch?oe(t)?e.effects.push(...t):e.effects.push(t):h_(t)}const Lt=Symbol.for("v-fgt"),Fo=Symbol.for("v-txt"),fr=Symbol.for("v-cmt"),Ki=Symbol.for("v-stc"),Ms=[];let St=null;function Xe(t=!1){Ms.push(St=t?null:[])}function sy(){Ms.pop(),St=Ms[Ms.length-1]||null}let Qs=1;function Vu(t,e=!1){Qs+=t,t<0&&St&&e&&(St.hasOnce=!0)}function Nf(t){return t.dynamicChildren=Qs>0?St||xr:null,sy(),Qs>0&&St&&St.push(t),t}function ut(t,e,n,r,s,i){return Nf(ue(t,e,n,r,s,i,!0))}function iy(t,e,n,r,s){return Nf(Ne(t,e,n,r,s,!0))}function uo(t){return t?t.__v_isVNode===!0:!1}function ws(t,e){return t.type===e.type&&t.key===e.key}const Vf=({key:t})=>t??null,Wi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?qe(t)||ht(t)||ce(t)?{i:Rt,r:t,k:e,f:!!n}:t:null);function ue(t,e=null,n=null,r=0,s=null,i=t===Lt?0:1,a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Vf(e),ref:e&&Wi(e),scopeId:uf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Rt};return c?(Jc(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=qe(n)?8:16),Qs>0&&!a&&St&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&St.push(l),l}const Ne=oy;function oy(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===S_)&&(t=fr),uo(t)){const c=Kr(t,e,!0);return n&&Jc(c,n),Qs>0&&!i&&St&&(c.shapeFlag&6?St[St.indexOf(t)]=c:St.push(c)),c.patchFlag=-2,c}if(_y(t)&&(t=t.__vccOpts),e){e=ay(e);let{class:c,style:l}=e;c&&!qe(c)&&(e.class=Mc(c)),Ve(l)&&(Hc(l)&&!oe(l)&&(l=Ge({},l)),e.style=Lc(l))}const a=qe(t)?1:Of(t)?128:f_(t)?64:Ve(t)?4:ce(t)?2:0;return ue(t,e,n,r,s,a,i,!0)}function ay(t){return t?Hc(t)||Ef(t)?Ge({},t):t:null}function Kr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:c,transition:l}=t,h=e?cy(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Vf(h),ref:e&&e.ref?n&&i?oe(i)?i.concat(Wi(e)):[i,Wi(e)]:Wi(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Lt?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Kr(t.ssContent),ssFallback:t.ssFallback&&Kr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Kc(f,l.clone(f)),f}function lr(t=" ",e=0){return Ne(Fo,null,t,e)}function Qc(t,e){const n=Ne(Ki,null,t);return n.staticCount=e,n}function Ca(t="",e=!1){return e?(Xe(),iy(fr,null,t)):Ne(fr,null,t)}function Ht(t){return t==null||typeof t=="boolean"?Ne(fr):oe(t)?Ne(Lt,null,t.slice()):uo(t)?Sn(t):Ne(Fo,null,String(t))}function Sn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Kr(t)}function Jc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(oe(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Jc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Ef(e)?e._ctx=Rt:s===3&&Rt&&(Rt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ce(e)?(e={default:e,_ctx:Rt},n=32):(e=String(e),r&64?(n=16,e=[lr(e)]):n=8);t.children=e,t.shapeFlag|=n}function cy(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Mc([e.class,r.class]));else if(s==="style")e.style=Lc([e.style,r.style]);else if(Co(s)){const i=e[s],a=r[s];a&&i!==a&&!(oe(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function jt(t,e,n,r=null){Xt(t,e,7,[n,r])}const ly=_f();let uy=0;function hy(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||ly,i={uid:uy++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new xm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wf(r,s),emitsOptions:Df(r,s),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:r.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=X_.bind(null,i),t.ce&&t.ce(i),i}let lt=null,ho,sc;{const t=Oo(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};ho=e("__VUE_INSTANCE_SETTERS__",n=>lt=n),sc=e("__VUE_SSR_SETTERS__",n=>Js=n)}const ci=t=>{const e=lt;return ho(t),t.scope.on(),()=>{t.scope.off(),ho(e)}},xu=()=>{lt&&lt.scope.off(),ho(null)};function xf(t){return t.vnode.shapeFlag&4}let Js=!1;function dy(t,e=!1,n=!1){e&&sc(e);const{props:r,children:s}=t.vnode,i=xf(t);F_(t,r,i,e),j_(t,s,n);const a=i?fy(t,e):void 0;return e&&sc(!1),a}function fy(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,k_);const{setup:r}=n;if(r){Gn();const s=t.setupContext=r.length>1?gy(t):null,i=ci(t),a=ai(r,t,0,[t.props,s]),c=Nd(a);if(Qn(),i(),(c||t.sp)&&!xs(t)&&df(t),c){if(a.then(xu,xu),e)return a.then(l=>{Lu(t,l,e)}).catch(l=>{xo(l,t,0)});t.asyncDep=a}else Lu(t,a,e)}else Lf(t,e)}function Lu(t,e,n){ce(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ve(e)&&(t.setupState=rf(e)),Lf(t,n)}let Mu;function Lf(t,e,n){const r=t.type;if(!t.render){if(!e&&Mu&&!r.render){const s=r.template||Wc(t).template;if(s){const{isCustomElement:i,compilerOptions:a}=t.appContext.config,{delimiters:c,compilerOptions:l}=r,h=Ge(Ge({isCustomElement:i,delimiters:c},a),l);r.render=Mu(s,h)}}t.render=r.render||Kt}{const s=ci(t);Gn();try{D_(t)}finally{Qn(),s()}}}const py={get(t,e){return ot(t,"get",""),t[e]}};function gy(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,py),slots:t.slots,emit:t.emit,expose:e}}function Uo(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(rf(t_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ls)return Ls[n](t)},has(e,n){return n in e||n in Ls}})):t.proxy}function my(t,e=!0){return ce(t)?t.displayName||t.name:t.name||e&&t.__name}function _y(t){return ce(t)&&"__vccOpts"in t}const Mt=(t,e)=>o_(t,e,Js);function Mf(t,e,n){const r=arguments.length;return r===2?Ve(e)&&!oe(e)?uo(e)?Ne(t,null,[e]):Ne(t,e):Ne(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&uo(n)&&(n=[n]),Ne(t,e,n))}const yy="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ic;const Fu=typeof window<"u"&&window.trustedTypes;if(Fu)try{ic=Fu.createPolicy("vue",{createHTML:t=>t})}catch{}const Ff=ic?t=>ic.createHTML(t):t=>t,vy="http://www.w3.org/2000/svg",Ey="http://www.w3.org/1998/Math/MathML",on=typeof document<"u"?document:null,Uu=on&&on.createElement("template"),Ty={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?on.createElementNS(vy,t):e==="mathml"?on.createElementNS(Ey,t):n?on.createElement(t,{is:n}):on.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>on.createTextNode(t),createComment:t=>on.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>on.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const a=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Uu.innerHTML=Ff(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Uu.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},wy=Symbol("_vtc");function Iy(t,e,n){const r=t[wy];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Bu=Symbol("_vod"),Ay=Symbol("_vsh"),by=Symbol(""),Ry=/(^|;)\s*display\s*:/;function Sy(t,e,n){const r=t.style,s=qe(n);let i=!1;if(n&&!s){if(e)if(qe(e))for(const a of e.split(";")){const c=a.slice(0,a.indexOf(":")).trim();n[c]==null&&Gi(r,c,"")}else for(const a in e)n[a]==null&&Gi(r,a,"");for(const a in n)a==="display"&&(i=!0),Gi(r,a,n[a])}else if(s){if(e!==n){const a=r[by];a&&(n+=";"+a),r.cssText=n,i=Ry.test(n)}}else e&&t.removeAttribute("style");Bu in t&&(t[Bu]=i?r.display:"",t[Ay]&&(r.display="none"))}const $u=/\s*!important$/;function Gi(t,e,n){if(oe(n))n.forEach(r=>Gi(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Cy(t,e);$u.test(n)?t.setProperty(_r(r),n.replace($u,""),"important"):t[r]=n}}const ju=["Webkit","Moz","ms"],Pa={};function Cy(t,e){const n=Pa[e];if(n)return n;let r=Ot(e);if(r!=="filter"&&r in t)return Pa[e]=r;r=Do(r);for(let s=0;s<ju.length;s++){const i=ju[s]+r;if(i in t)return Pa[e]=i}return e}const qu="http://www.w3.org/1999/xlink";function Hu(t,e,n,r,s,i=Vm(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(qu,e.slice(6,e.length)):t.setAttributeNS(qu,e,n):n==null||i&&!Md(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Wn(n)?String(n):n)}function zu(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Ff(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Md(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(s||e)}function Cr(t,e,n,r){t.addEventListener(e,n,r)}function Py(t,e,n,r){t.removeEventListener(e,n,r)}const Ku=Symbol("_vei");function ky(t,e,n,r,s=null){const i=t[Ku]||(t[Ku]={}),a=i[e];if(r&&a)a.value=r;else{const[c,l]=Dy(e);if(r){const h=i[e]=Vy(r,s);Cr(t,c,h,l)}else a&&(Py(t,c,a,l),i[e]=void 0)}}const Wu=/(?:Once|Passive|Capture)$/;function Dy(t){let e;if(Wu.test(t)){e={};let r;for(;r=t.match(Wu);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):_r(t.slice(2)),e]}let ka=0;const Oy=Promise.resolve(),Ny=()=>ka||(Oy.then(()=>ka=0),ka=Date.now());function Vy(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Xt(xy(r,n.value),e,5,[r])};return n.value=t,n.attached=Ny(),n}function xy(t,e){if(oe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Gu=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Ly=(t,e,n,r,s,i)=>{const a=s==="svg";e==="class"?Iy(t,r,a):e==="style"?Sy(t,n,r):Co(e)?Nc(e)||ky(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):My(t,e,r,a))?(zu(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Hu(t,e,r,a,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!qe(r))?zu(t,Ot(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Hu(t,e,r,a))};function My(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Gu(e)&&ce(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Gu(e)&&qe(n)?!1:e in t}const Qu=t=>{const e=t.props["onUpdate:modelValue"]||!1;return oe(e)?n=>ji(e,n):e};function Fy(t){t.target.composing=!0}function Ju(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Da=Symbol("_assign"),Fs={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Da]=Qu(s);const i=r||s.props&&s.props.type==="number";Cr(t,e?"change":"input",a=>{if(a.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=Ga(c)),t[Da](c)}),n&&Cr(t,"change",()=>{t.value=t.value.trim()}),e||(Cr(t,"compositionstart",Fy),Cr(t,"compositionend",Ju),Cr(t,"change",Ju))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},a){if(t[Da]=Qu(a),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?Ga(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},Uy=["ctrl","shift","alt","meta"],By={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Uy.some(n=>t[`${n}Key`]&&!e.includes(n))},Uf=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let a=0;a<e.length;a++){const c=By[e[a]];if(c&&c(s,e))return}return t(s,...i)})},$y=Ge({patchProp:Ly},Ty);let Yu;function jy(){return Yu||(Yu=H_($y))}const qy=(...t)=>{const e=jy().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=zy(r);if(!s)return;const i=e._component;!ce(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,Hy(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function Hy(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function zy(t){return qe(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Pr=typeof document<"u";function Bf(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ky(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Bf(t.default)}const Ae=Object.assign;function Oa(t,e){const n={};for(const r in e){const s=e[r];n[r]=Ut(s)?s.map(t):t(s)}return n}const Us=()=>{},Ut=Array.isArray,$f=/#/g,Wy=/&/g,Gy=/\//g,Qy=/=/g,Jy=/\?/g,jf=/\+/g,Yy=/%5B/g,Xy=/%5D/g,qf=/%5E/g,Zy=/%60/g,Hf=/%7B/g,ev=/%7C/g,zf=/%7D/g,tv=/%20/g;function Yc(t){return encodeURI(""+t).replace(ev,"|").replace(Yy,"[").replace(Xy,"]")}function nv(t){return Yc(t).replace(Hf,"{").replace(zf,"}").replace(qf,"^")}function oc(t){return Yc(t).replace(jf,"%2B").replace(tv,"+").replace($f,"%23").replace(Wy,"%26").replace(Zy,"`").replace(Hf,"{").replace(zf,"}").replace(qf,"^")}function rv(t){return oc(t).replace(Qy,"%3D")}function sv(t){return Yc(t).replace($f,"%23").replace(Jy,"%3F")}function iv(t){return t==null?"":sv(t).replace(Gy,"%2F")}function Ys(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const ov=/\/$/,av=t=>t.replace(ov,"");function Na(t,e,n="/"){let r,s={},i="",a="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),a=e.slice(c,e.length)),r=hv(r??e,n),{fullPath:r+(i&&"?")+i+a,path:r,query:s,hash:Ys(a)}}function cv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Xu(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function lv(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Wr(e.matched[r],n.matched[s])&&Kf(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Wr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Kf(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!uv(t[n],e[n]))return!1;return!0}function uv(t,e){return Ut(t)?Zu(t,e):Ut(e)?Zu(e,t):t===e}function Zu(t,e){return Ut(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function hv(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,a,c;for(a=0;a<r.length;a++)if(c=r[a],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(a).join("/")}const An={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Xs;(function(t){t.pop="pop",t.push="push"})(Xs||(Xs={}));var Bs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Bs||(Bs={}));function dv(t){if(!t)if(Pr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),av(t)}const fv=/^[^#]+#/;function pv(t,e){return t.replace(fv,"#")+e}function gv(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Bo=()=>({left:window.scrollX,top:window.scrollY});function mv(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=gv(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function eh(t,e){return(history.state?history.state.position-e:-1)+t}const ac=new Map;function _v(t,e){ac.set(t,e)}function yv(t){const e=ac.get(t);return ac.delete(t),e}let vv=()=>location.protocol+"//"+location.host;function Wf(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),Xu(l,"")}return Xu(n,t)+r+s}function Ev(t,e,n,r){let s=[],i=[],a=null;const c=({state:m})=>{const E=Wf(t,location),k=n.value,V=e.value;let L=0;if(m){if(n.value=E,e.value=m,a&&a===k){a=null;return}L=V?m.position-V.position:0}else r(E);s.forEach(W=>{W(n.value,k,{delta:L,type:Xs.pop,direction:L?L>0?Bs.forward:Bs.back:Bs.unknown})})};function l(){a=n.value}function h(m){s.push(m);const E=()=>{const k=s.indexOf(m);k>-1&&s.splice(k,1)};return i.push(E),E}function f(){const{history:m}=window;m.state&&m.replaceState(Ae({},m.state,{scroll:Bo()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:h,destroy:p}}function th(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Bo():null}}function Tv(t){const{history:e,location:n}=window,r={value:Wf(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,h,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:vv()+t+l;try{e[f?"replaceState":"pushState"](h,"",m),s.value=h}catch(E){console.error(E),n[f?"replace":"assign"](m)}}function a(l,h){const f=Ae({},e.state,th(s.value.back,l,s.value.forward,!0),h,{position:s.value.position});i(l,f,!0),r.value=l}function c(l,h){const f=Ae({},s.value,e.state,{forward:l,scroll:Bo()});i(f.current,f,!0);const p=Ae({},th(r.value,l,null),{position:f.position+1},h);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:a}}function wv(t){t=dv(t);const e=Tv(t),n=Ev(t,e.state,e.location,e.replace);function r(i,a=!0){a||n.pauseListeners(),history.go(i)}const s=Ae({location:"",base:t,go:r,createHref:pv.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Iv(t){return typeof t=="string"||t&&typeof t=="object"}function Gf(t){return typeof t=="string"||typeof t=="symbol"}const Qf=Symbol("");var nh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(nh||(nh={}));function Gr(t,e){return Ae(new Error,{type:t,[Qf]:!0},e)}function sn(t,e){return t instanceof Error&&Qf in t&&(e==null||!!(t.type&e))}const rh="[^/]+?",Av={sensitive:!1,strict:!1,start:!0,end:!0},bv=/[.+*?^${}()[\]/\\]/g;function Rv(t,e){const n=Ae({},Av,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const f=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const m=h[p];let E=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(bv,"\\$&"),E+=40;else if(m.type===1){const{value:k,repeatable:V,optional:L,regexp:W}=m;i.push({name:k,repeatable:V,optional:L});const $=W||rh;if($!==rh){E+=10;try{new RegExp(`(${$})`)}catch(H){throw new Error(`Invalid custom RegExp for param "${k}" (${$}): `+H.message)}}let z=V?`((?:${$})(?:/(?:${$}))*)`:`(${$})`;p||(z=L&&h.length<2?`(?:/${z})`:"/"+z),L&&(z+="?"),s+=z,E+=20,L&&(E+=-8),V&&(E+=-20),$===".*"&&(E+=-50)}f.push(E)}r.push(f)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function c(h){const f=h.match(a),p={};if(!f)return null;for(let m=1;m<f.length;m++){const E=f[m]||"",k=i[m-1];p[k.name]=E&&k.repeatable?E.split("/"):E}return p}function l(h){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const E of m)if(E.type===0)f+=E.value;else if(E.type===1){const{value:k,repeatable:V,optional:L}=E,W=k in h?h[k]:"";if(Ut(W)&&!V)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const $=Ut(W)?W.join("/"):W;if(!$)if(L)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${k}"`);f+=$}}return f||"/"}return{re:a,score:r,keys:i,parse:c,stringify:l}}function Sv(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Jf(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Sv(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(sh(r))return 1;if(sh(s))return-1}return s.length-r.length}function sh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Cv={type:0,value:""},Pv=/[a-zA-Z0-9_]/;function kv(t){if(!t)return[[]];if(t==="/")return[[Cv]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(E){throw new Error(`ERR (${n})/"${h}": ${E}`)}let n=0,r=n;const s=[];let i;function a(){i&&s.push(i),i=[]}let c=0,l,h="",f="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),h="")}function m(){h+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(h&&p(),a()):l===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:l==="("?n=2:Pv.test(l)?m():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),a(),s}function Dv(t,e,n){const r=Rv(kv(t.path),n),s=Ae(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Ov(t,e){const n=[],r=new Map;e=ch({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,E){const k=!E,V=oh(p);V.aliasOf=E&&E.record;const L=ch(e,p),W=[V];if("alias"in p){const H=typeof p.alias=="string"?[p.alias]:p.alias;for(const he of H)W.push(oh(Ae({},V,{components:E?E.record.components:V.components,path:he,aliasOf:E?E.record:V})))}let $,z;for(const H of W){const{path:he}=H;if(m&&he[0]!=="/"){const de=m.record.path,I=de[de.length-1]==="/"?"":"/";H.path=m.record.path+(he&&I+he)}if($=Dv(H,m,L),E?E.alias.push($):(z=z||$,z!==$&&z.alias.push($),k&&p.name&&!ah($)&&a(p.name)),Yf($)&&l($),V.children){const de=V.children;for(let I=0;I<de.length;I++)i(de[I],$,E&&E.children[I])}E=E||$}return z?()=>{a(z)}:Us}function a(p){if(Gf(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(a),m.alias.forEach(a))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function c(){return n}function l(p){const m=xv(p,n);n.splice(m,0,p),p.record.name&&!ah(p)&&r.set(p.record.name,p)}function h(p,m){let E,k={},V,L;if("name"in p&&p.name){if(E=r.get(p.name),!E)throw Gr(1,{location:p});L=E.record.name,k=Ae(ih(m.params,E.keys.filter(z=>!z.optional).concat(E.parent?E.parent.keys.filter(z=>z.optional):[]).map(z=>z.name)),p.params&&ih(p.params,E.keys.map(z=>z.name))),V=E.stringify(k)}else if(p.path!=null)V=p.path,E=n.find(z=>z.re.test(V)),E&&(k=E.parse(V),L=E.record.name);else{if(E=m.name?r.get(m.name):n.find(z=>z.re.test(m.path)),!E)throw Gr(1,{location:p,currentLocation:m});L=E.record.name,k=Ae({},m.params,p.params),V=E.stringify(k)}const W=[];let $=E;for(;$;)W.unshift($.record),$=$.parent;return{name:L,path:V,params:k,matched:W,meta:Vv(W)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:a,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function ih(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function oh(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Nv(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Nv(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function ah(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Vv(t){return t.reduce((e,n)=>Ae(e,n.meta),{})}function ch(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function xv(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Jf(t,e[i])<0?r=i:n=i+1}const s=Lv(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function Lv(t){let e=t;for(;e=e.parent;)if(Yf(e)&&Jf(t,e)===0)return e}function Yf({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Mv(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(jf," "),a=i.indexOf("="),c=Ys(a<0?i:i.slice(0,a)),l=a<0?null:Ys(i.slice(a+1));if(c in e){let h=e[c];Ut(h)||(h=e[c]=[h]),h.push(l)}else e[c]=l}return e}function lh(t){let e="";for(let n in t){const r=t[n];if(n=rv(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ut(r)?r.map(i=>i&&oc(i)):[r&&oc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Fv(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ut(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Uv=Symbol(""),uh=Symbol(""),$o=Symbol(""),Xf=Symbol(""),cc=Symbol("");function Is(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Cn(t,e,n,r,s,i=a=>a()){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const h=m=>{m===!1?l(Gr(4,{from:n,to:e})):m instanceof Error?l(m):Iv(m)?l(Gr(2,{from:e,to:m})):(a&&r.enterCallbacks[s]===a&&typeof m=="function"&&a.push(m),c())},f=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(f);t.length<3&&(p=p.then(h)),p.catch(m=>l(m))})}function Va(t,e,n,r,s=i=>i()){const i=[];for(const a of t)for(const c in a.components){let l=a.components[c];if(!(e!=="beforeRouteEnter"&&!a.instances[c]))if(Bf(l)){const f=(l.__vccOpts||l)[e];f&&i.push(Cn(f,n,r,a,c,s))}else{let h=l();i.push(()=>h.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${a.path}"`);const p=Ky(f)?f.default:f;a.mods[c]=f,a.components[c]=p;const E=(p.__vccOpts||p)[e];return E&&Cn(E,n,r,a,c,s)()}))}}return i}function hh(t){const e=Wt($o),n=Wt(Xf),r=Mt(()=>{const l=Fr(t.to);return e.resolve(l)}),s=Mt(()=>{const{matched:l}=r.value,{length:h}=l,f=l[h-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(Wr.bind(null,f));if(m>-1)return m;const E=dh(l[h-2]);return h>1&&dh(f)===E&&p[p.length-1].path!==E?p.findIndex(Wr.bind(null,l[h-2])):m}),i=Mt(()=>s.value>-1&&Hv(n.params,r.value.params)),a=Mt(()=>s.value>-1&&s.value===n.matched.length-1&&Kf(n.params,r.value.params));function c(l={}){if(qv(l)){const h=e[Fr(t.replace)?"replace":"push"](Fr(t.to)).catch(Us);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:Mt(()=>r.value.href),isActive:i,isExactActive:a,navigate:c}}function Bv(t){return t.length===1?t[0]:t}const $v=hf({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:hh,setup(t,{slots:e}){const n=Vo(hh(t)),{options:r}=Wt($o),s=Mt(()=>({[fh(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[fh(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&Bv(e.default(n));return t.custom?i:Mf("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),jv=$v;function qv(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Hv(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ut(s)||s.length!==r.length||r.some((i,a)=>i!==s[a]))return!1}return!0}function dh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const fh=(t,e,n)=>t??e??n,zv=hf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Wt(cc),s=Mt(()=>t.route||r.value),i=Wt(uh,0),a=Mt(()=>{let h=Fr(i);const{matched:f}=s.value;let p;for(;(p=f[h])&&!p.components;)h++;return h}),c=Mt(()=>s.value.matched[a.value]);Hi(uh,Mt(()=>a.value+1)),Hi(Uv,c),Hi(cc,s);const l=qi();return zi(()=>[l.value,c.value,t.name],([h,f,p],[m,E,k])=>{f&&(f.instances[p]=h,E&&E!==f&&h&&h===m&&(f.leaveGuards.size||(f.leaveGuards=E.leaveGuards),f.updateGuards.size||(f.updateGuards=E.updateGuards))),h&&f&&(!E||!Wr(f,E)||!m)&&(f.enterCallbacks[p]||[]).forEach(V=>V(h))},{flush:"post"}),()=>{const h=s.value,f=t.name,p=c.value,m=p&&p.components[f];if(!m)return ph(n.default,{Component:m,route:h});const E=p.props[f],k=E?E===!0?h.params:typeof E=="function"?E(h):E:null,L=Mf(m,Ae({},k,e,{onVnodeUnmounted:W=>{W.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return ph(n.default,{Component:L,route:h})||L}}});function ph(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Kv=zv;function Wv(t){const e=Ov(t.routes,t),n=t.parseQuery||Mv,r=t.stringifyQuery||lh,s=t.history,i=Is(),a=Is(),c=Is(),l=n_(An);let h=An;Pr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Oa.bind(null,O=>""+O),p=Oa.bind(null,iv),m=Oa.bind(null,Ys);function E(O,J){let G,X;return Gf(O)?(G=e.getRecordMatcher(O),X=J):X=O,e.addRoute(X,G)}function k(O){const J=e.getRecordMatcher(O);J&&e.removeRoute(J)}function V(){return e.getRoutes().map(O=>O.record)}function L(O){return!!e.getRecordMatcher(O)}function W(O,J){if(J=Ae({},J||l.value),typeof O=="string"){const v=Na(n,O,J.path),C=e.resolve({path:v.path},J),x=s.createHref(v.fullPath);return Ae(v,C,{params:m(C.params),hash:Ys(v.hash),redirectedFrom:void 0,href:x})}let G;if(O.path!=null)G=Ae({},O,{path:Na(n,O.path,J.path).path});else{const v=Ae({},O.params);for(const C in v)v[C]==null&&delete v[C];G=Ae({},O,{params:p(v)}),J.params=p(J.params)}const X=e.resolve(G,J),me=O.hash||"";X.params=f(m(X.params));const Se=cv(r,Ae({},O,{hash:nv(me),path:X.path})),_=s.createHref(Se);return Ae({fullPath:Se,hash:me,query:r===lh?Fv(O.query):O.query||{}},X,{redirectedFrom:void 0,href:_})}function $(O){return typeof O=="string"?Na(n,O,l.value.path):Ae({},O)}function z(O,J){if(h!==O)return Gr(8,{from:J,to:O})}function H(O){return I(O)}function he(O){return H(Ae($(O),{replace:!0}))}function de(O){const J=O.matched[O.matched.length-1];if(J&&J.redirect){const{redirect:G}=J;let X=typeof G=="function"?G(O):G;return typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=$(X):{path:X},X.params={}),Ae({query:O.query,hash:O.hash,params:X.path!=null?{}:O.params},X)}}function I(O,J){const G=h=W(O),X=l.value,me=O.state,Se=O.force,_=O.replace===!0,v=de(G);if(v)return I(Ae($(v),{state:typeof v=="object"?Ae({},me,v.state):me,force:Se,replace:_}),J||G);const C=G;C.redirectedFrom=J;let x;return!Se&&lv(r,X,G)&&(x=Gr(16,{to:C,from:X}),Pt(X,X,!0,!1)),(x?Promise.resolve(x):A(C,X)).catch(D=>sn(D)?sn(D,2)?D:Vt(D):fe(D,C,X)).then(D=>{if(D){if(sn(D,2))return I(Ae({replace:_},$(D.to),{state:typeof D.to=="object"?Ae({},me,D.to.state):me,force:Se}),J||C)}else D=R(C,X,!0,_,me);return b(C,X,D),D})}function y(O,J){const G=z(O,J);return G?Promise.reject(G):Promise.resolve()}function w(O){const J=vn.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(O):O()}function A(O,J){let G;const[X,me,Se]=Gv(O,J);G=Va(X.reverse(),"beforeRouteLeave",O,J);for(const v of X)v.leaveGuards.forEach(C=>{G.push(Cn(C,O,J))});const _=y.bind(null,O,J);return G.push(_),vt(G).then(()=>{G=[];for(const v of i.list())G.push(Cn(v,O,J));return G.push(_),vt(G)}).then(()=>{G=Va(me,"beforeRouteUpdate",O,J);for(const v of me)v.updateGuards.forEach(C=>{G.push(Cn(C,O,J))});return G.push(_),vt(G)}).then(()=>{G=[];for(const v of Se)if(v.beforeEnter)if(Ut(v.beforeEnter))for(const C of v.beforeEnter)G.push(Cn(C,O,J));else G.push(Cn(v.beforeEnter,O,J));return G.push(_),vt(G)}).then(()=>(O.matched.forEach(v=>v.enterCallbacks={}),G=Va(Se,"beforeRouteEnter",O,J,w),G.push(_),vt(G))).then(()=>{G=[];for(const v of a.list())G.push(Cn(v,O,J));return G.push(_),vt(G)}).catch(v=>sn(v,8)?v:Promise.reject(v))}function b(O,J,G){c.list().forEach(X=>w(()=>X(O,J,G)))}function R(O,J,G,X,me){const Se=z(O,J);if(Se)return Se;const _=J===An,v=Pr?history.state:{};G&&(X||_?s.replace(O.fullPath,Ae({scroll:_&&v&&v.scroll},me)):s.push(O.fullPath,me)),l.value=O,Pt(O,J,G,_),Vt()}let T;function ft(){T||(T=s.listen((O,J,G)=>{if(!$t.listening)return;const X=W(O),me=de(X);if(me){I(Ae(me,{replace:!0,force:!0}),X).catch(Us);return}h=X;const Se=l.value;Pr&&_v(eh(Se.fullPath,G.delta),Bo()),A(X,Se).catch(_=>sn(_,12)?_:sn(_,2)?(I(Ae($(_.to),{force:!0}),X).then(v=>{sn(v,20)&&!G.delta&&G.type===Xs.pop&&s.go(-1,!1)}).catch(Us),Promise.reject()):(G.delta&&s.go(-G.delta,!1),fe(_,X,Se))).then(_=>{_=_||R(X,Se,!1),_&&(G.delta&&!sn(_,8)?s.go(-G.delta,!1):G.type===Xs.pop&&sn(_,20)&&s.go(-1,!1)),b(X,Se,_)}).catch(Us)}))}let Ct=Is(),$e=Is(),ge;function fe(O,J,G){Vt(O);const X=$e.list();return X.length?X.forEach(me=>me(O,J,G)):console.error(O),Promise.reject(O)}function wt(){return ge&&l.value!==An?Promise.resolve():new Promise((O,J)=>{Ct.add([O,J])})}function Vt(O){return ge||(ge=!O,ft(),Ct.list().forEach(([J,G])=>O?G(O):J()),Ct.reset()),O}function Pt(O,J,G,X){const{scrollBehavior:me}=t;if(!Pr||!me)return Promise.resolve();const Se=!G&&yv(eh(O.fullPath,0))||(X||!G)&&history.state&&history.state.scroll||null;return of().then(()=>me(O,J,Se)).then(_=>_&&mv(_)).catch(_=>fe(_,O,J))}const xe=O=>s.go(O);let Le;const vn=new Set,$t={currentRoute:l,listening:!0,addRoute:E,removeRoute:k,clearRoutes:e.clearRoutes,hasRoute:L,getRoutes:V,resolve:W,options:t,push:H,replace:he,go:xe,back:()=>xe(-1),forward:()=>xe(1),beforeEach:i.add,beforeResolve:a.add,afterEach:c.add,onError:$e.add,isReady:wt,install(O){const J=this;O.component("RouterLink",jv),O.component("RouterView",Kv),O.config.globalProperties.$router=J,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>Fr(l)}),Pr&&!Le&&l.value===An&&(Le=!0,H(s.location).catch(me=>{}));const G={};for(const me in An)Object.defineProperty(G,me,{get:()=>l.value[me],enumerable:!0});O.provide($o,J),O.provide(Xf,ef(G)),O.provide(cc,l);const X=O.unmount;vn.add(O),O.unmount=function(){vn.delete(O),vn.size<1&&(h=An,T&&T(),T=null,l.value=An,Le=!1,ge=!1),X()}}};function vt(O){return O.reduce((J,G)=>J.then(()=>w(G)),Promise.resolve())}return $t}function Gv(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let a=0;a<i;a++){const c=e.matched[a];c&&(t.matched.find(h=>Wr(h,c))?r.push(c):n.push(c));const l=t.matched[a];l&&(e.matched.find(h=>Wr(h,l))||s.push(l))}return[n,r,s]}function Qv(){return Wt($o)}const Jv="/opensourcenematodedrugbase.github.io/assets/OSNDB%20avatar_7-jOW5jdD-.png",Nt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Yv={name:"HeaderComponent"},Xv={class:"header"},Zv={class:"container"},eE={class:"nav"};function tE(t,e,n,r,s,i){const a=cr("router-link");return Xe(),ut("header",Xv,[ue("div",Zv,[Ne(a,{to:"/"},{default:ir(()=>e[0]||(e[0]=[ue("img",{class:"header-logo",src:Jv,alt:"Logo"},null,-1)])),_:1}),e[4]||(e[4]=ue("h1",{class:"logo"},"Open Nematode Drug-Based Project",-1)),ue("nav",eE,[ue("ul",null,[ue("li",null,[Ne(a,{to:"/"},{default:ir(()=>e[1]||(e[1]=[lr("Home")])),_:1})]),ue("li",null,[Ne(a,{to:"/about"},{default:ir(()=>e[2]||(e[2]=[lr("About")])),_:1})]),ue("li",null,[Ne(a,{to:"/contact"},{default:ir(()=>e[3]||(e[3]=[lr("Contact")])),_:1})])])])])])}const nE=Nt(Yv,[["render",tE],["__scopeId","data-v-5458d0cc"]]),rE="/opensourcenematodedrugbase.github.io/assets/UoW_Logo-_TipZff6.png",sE="/opensourcenematodedrugbase.github.io/assets/Facebook_logo_(square)-DSbeQHlm.png",iE="/opensourcenematodedrugbase.github.io/assets/Instagram_Logo-_TgEDEUa.png",oE="/opensourcenematodedrugbase.github.io/assets/LinkedIn_Logo-D00eRlCm.png",aE="/opensourcenematodedrugbase.github.io/assets/X_logo-pimiONjk.jpg",cE="/opensourcenematodedrugbase.github.io/assets/TikTok_Logo-D10D4Enm.png",lE="/opensourcenematodedrugbase.github.io/assets/GitHub_Logo-BZIvgM6Y.png",uE={name:"FooterComponent"},hE={class:"footer"};function dE(t,e,n,r,s,i){return Xe(),ut("footer",hE,e[0]||(e[0]=[Qc('<div class="container" data-v-34f3ed34><a href="https://www.westminster.ac.uk/" target="_blank" data-v-34f3ed34><img class="UoWLogo" src="'+rE+'" alt="UoW" data-v-34f3ed34></a><div class="socials" data-v-34f3ed34><a href="https://www.facebook.com/" target="_blank" data-v-34f3ed34><img class="social-logo" src="'+sE+'" alt="Facebook_Logo" data-v-34f3ed34></a><a href="https://www.instagram.com/" target="_blank" data-v-34f3ed34><img class="social-logo" src="'+iE+'" alt="Instagram_Logo" data-v-34f3ed34></a><a href="https://www.linkedin.com/" target="_blank" data-v-34f3ed34><img class="social-logo" src="'+oE+'" alt="LinkedIn_Logo" data-v-34f3ed34></a><a href="https://x.com/" target="_blank" data-v-34f3ed34><img class="social-logo" src="'+aE+'" alt="X_Logo" data-v-34f3ed34></a><a href="https://www.tiktok.com/" target="_blank" data-v-34f3ed34><img class="social-logo" src="'+cE+'" alt="TikTok_Logo" data-v-34f3ed34></a><a href="https://github.com/OpenSourceNematodeDrugbase" target="_blank" data-v-34f3ed34><img class="social-logo" src="'+lE+'" alt="GitHub_Logo" data-v-34f3ed34></a></div></div>',1)]))}const fE=Nt(uE,[["render",dE],["__scopeId","data-v-34f3ed34"]]),pE={name:"App",components:{HeaderComponent:nE,FooterComponent:fE}},gE={id:"app"};function mE(t,e,n,r,s,i){const a=cr("HeaderComponent"),c=cr("router-view"),l=cr("FooterComponent");return Xe(),ut("div",gE,[ue("header",null,[Ne(a)]),ue("main",null,[Ne(c)]),ue("footer",null,[Ne(l)])])}const _E=Nt(pE,[["render",mE]]),yE="/opensourcenematodedrugbase.github.io/assets/cavendish-exterior-DDn4Cs5n.jpg",vE="/opensourcenematodedrugbase.github.io/assets/ousa-chea-gKUC4TMhOiY-unsplash-RPJfqXv2.jpg",EE="/opensourcenematodedrugbase.github.io/assets/E_SDG_logo_UN_emblem_square_trans_WEB-DxmoRbCa.png",TE={},wE={class:"header-section"},IE={class:"section-text"};function AE(t,e){const n=cr("router-link");return Xe(),ut(Lt,null,[e[4]||(e[4]=Qc('<div class="home" data-v-525ac81d><h1 data-v-525ac81d>Welcome to the Open Nematode Drug-Based Project Website</h1><p class="intro-text" data-v-525ac81d>Our ambition is to introduce a platform to tackle neglected diseases caused by parasitic worms (nematodes).</p></div><section class="header-section" data-v-525ac81d><h2 data-v-525ac81d>The Platform</h2><p class="section-text" data-v-525ac81d>We want to create an open-access platform, enabling research of neglected diseases caused by nematodes (parasitic worms).</p><p class="section-text" data-v-525ac81d>The ‘Nematode Drugbase’ will launch here in 2025, hosting a collection of information concerning parasitic worms.</p></section><section class="header-section" data-v-525ac81d><h2 data-v-525ac81d>Mission Statement</h2><p class="section-text" data-v-525ac81d>Our mission is to combat neglected diseases caused by parasitic nematodes through innovative research and collaborative efforts. By developing the Nematode DrugBase, we aim to bridge the gap between nematode gene/protein databases and drug-like chemical databases, creating a comprehensive platform for discovering new medicines.</p><img class="image cavendish-img" src="'+yE+'" alt="Cavendish Exterior" data-v-525ac81d><p class="section-text" data-v-525ac81d>This project, driven by University of Westminster students and open to global contributions, will provide valuable resources and foster hands-on learning experiences.</p><p class="section-text" data-v-525ac81d>We are committed to enhancing student employability, promoting engagement with real-world problems, and contributing to the global fight against parasitic diseases.</p><img class="image microscope-img" src="'+vE+'" alt="Microscope" data-v-525ac81d><p class="section-text" data-v-525ac81d>Our work aligns with the UN Sustainable Development Goals, striving for health, equal access to medicines, and improved quality of life for affected communities.</p><img class="image usnd-img" src="'+EE+'" alt="USND" data-v-525ac81d></section>',3)),ue("section",wE,[e[3]||(e[3]=ue("h2",null,"Want to get involved or have questions?",-1)),ue("p",IE,[e[1]||(e[1]=lr("If you are interested in the project's developments, or would like to provide insight/expertise, we would be delighted to hear from you. Please see our ")),Ne(n,{to:"/contact"},{default:ir(()=>e[0]||(e[0]=[lr("contact")])),_:1}),e[2]||(e[2]=lr(" page for details."))])])],64)}const bE=Nt(TE,[["render",AE],["__scopeId","data-v-525ac81d"]]),RE={};function SE(t,e){return e[0]||(e[0]=Qc('<div class="home" data-v-4b462a16><h1 data-v-4b462a16>About</h1><p data-v-4b462a16>The ‘Nematode Drugbase’ is a platform to tackle neglected diseases caused by parasitic worms (nematodes). </p></div><section class="header-section" data-v-4b462a16><h2 data-v-4b462a16>The Team</h2><p data-v-4b462a16>The open-source nematode drub-based project team is comprised of students and academics from the University of Westminster. Our ambition is to create a platform that is open access that enables the advancement of research regarding diseases caused by nematodes.</p><ul data-v-4b462a16><li data-v-4b462a16>Alastair Barr – a.barr1@westminster.ac.uk</li><li data-v-4b462a16>Freddie Patridge - f.partridge@westminster.ac.uk</li><li data-v-4b462a16>Dipankar Sengupta - D.Sengupta@westminster.ac.uk</li><li data-v-4b462a16>Teddy Seyoum - T.Seyoum@westminster.ac.uk</li><li data-v-4b462a16>Polly Hayes - P.Hayes@westminster.ac.uk</li><li data-v-4b462a16>David Guiliano - D.Guiliano@westminster.ac.uk</li><br data-v-4b462a16><li data-v-4b462a16>Gabriela Mondini Moraes - </li><li data-v-4b462a16>Magdalena Ruiz Perez - </li><li data-v-4b462a16>Oliver Guy – Website Developer – o.guy@westminster.ac.uk</li><li data-v-4b462a16>Azam Farooqui – Website Developer – A.Farooqui@westminster.ac.uk </li><li data-v-4b462a16>Mateo Batol - batolm2@westminster.ac.uk</li><li data-v-4b462a16>Paule Abrutyte -</li></ul></section>',2))}const CE=Nt(RE,[["render",SE],["__scopeId","data-v-4b462a16"]]),PE={data(){return{formData:{name:"",email:"",userMessage:"Empty"}}},methods:{handleSubmit(){console.log("Form submitted:",this.name,this.email,this.userMessage),this.name="",this.email="",this.userMessage=""},submitForm(){this.handleSubmit()}}},kE={class:"form-group"};function DE(t,e,n,r,s,i){return Xe(),ut("form",{onSubmit:e[3]||(e[3]=Uf((...a)=>i.submitForm&&i.submitForm(...a),["prevent"]))},[ue("div",kE,[Vs(ue("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=a=>t.name=a),placeholder:"Name",required:""},null,512),[[Fs,t.name]]),Vs(ue("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=a=>t.email=a),placeholder:"Email",required:""},null,512),[[Fs,t.email]]),Vs(ue("textarea",{"onUpdate:modelValue":e[2]||(e[2]=a=>t.userMessage=a),placeholder:"Message",required:""},null,512),[[Fs,t.userMessage]])]),e[4]||(e[4]=ue("div",{class:"form-group"},[ue("button",{type:"submit"},"Send Message")],-1))],32)}const OE=Nt(PE,[["render",DE],["__scopeId","data-v-89f0eaca"]]),NE={components:{ContactUsFormComponent:OE}},VE={class:"home"};function xE(t,e,n,r,s,i){return Xe(),ut("div",VE,e[0]||(e[0]=[ue("h1",null,"Contact Us",-1),ue("hr",{class:"top-line"},null,-1),ue("section",{class:"header-section"},[ue("p",{class:"contacttext"},"Thank you for your interest in the open-source nematode drug-based project."),ue("p",{class:"emailtext"},"For inquiries, please contact a.barr1@westminster.ac.uk")],-1)]))}const LE=Nt(NE,[["render",xE]]);var gh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ME=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},ep={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,c=a?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|h>>6,E=h&63;l||(E=64,a||(m=64)),r.push(n[f],n[p],n[m],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Zf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ME(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new FE;const m=i<<2|c>>4;if(r.push(m),h!==64){const E=c<<4&240|h>>2;if(r.push(E),p!==64){const k=h<<6&192|p;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class FE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const UE=function(t){const e=Zf(t);return ep.encodeByteArray(e,!0)},fo=function(t){return UE(t).replace(/\./g,"")},tp=function(t){try{return ep.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $E=()=>BE().__FIREBASE_DEFAULTS__,jE=()=>{if(typeof process>"u"||typeof gh>"u")return;const t=gh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},qE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&tp(t[1]);return e&&JSON.parse(e)},jo=()=>{try{return $E()||jE()||qE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},np=t=>{var e,n;return(n=(e=jo())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},HE=t=>{const e=np(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},rp=()=>{var t;return(t=jo())===null||t===void 0?void 0:t.config},sp=t=>{var e;return(e=jo())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[fo(JSON.stringify(n)),fo(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function WE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dt())}function GE(){var t;const e=(t=jo())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function QE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function JE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function YE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function XE(){const t=dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ZE(){return!GE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function eT(){try{return typeof indexedDB=="object"}catch{return!1}}function tT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nT="FirebaseError";class _n extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=nT,Object.setPrototypeOf(this,_n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,li.prototype.create)}}class li{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?rT(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new _n(s,c,r)}}function rT(t,e){return t.replace(sT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const sT=/\{\$([^}]+)}/g;function iT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function po(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(mh(i)&&mh(a)){if(!po(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function mh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function bs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Rs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function oT(t,e){const n=new aT(t,e);return n.subscribe.bind(n)}class aT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");cT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=xa),s.error===void 0&&(s.error=xa),s.complete===void 0&&(s.complete=xa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function cT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function xa(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(t){return t&&t._delegate?t._delegate:t}class pr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new zE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hT(e))try{this.getOrInitializeService({instanceIdentifier:sr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=sr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=sr){return this.instances.has(e)}getOptions(e=sr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:uT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=sr){return this.component?this.component.multipleInstances?e:sr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uT(t){return t===sr?void 0:t}function hT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new lT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const fT={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},pT=pe.INFO,gT={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},mT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=gT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xc{constructor(e){this.name=e,this._logLevel=pT,this._logHandler=mT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const _T=(t,e)=>e.some(n=>t instanceof n);let _h,yh;function yT(){return _h||(_h=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vT(){return yh||(yh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ip=new WeakMap,lc=new WeakMap,op=new WeakMap,La=new WeakMap,Zc=new WeakMap;function ET(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(Ln(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&ip.set(n,t)}).catch(()=>{}),Zc.set(e,t),e}function TT(t){if(lc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});lc.set(t,e)}let uc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return lc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||op.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ln(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function wT(t){uc=t(uc)}function IT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ma(this),e,...n);return op.set(r,e.sort?e.sort():[e]),Ln(r)}:vT().includes(t)?function(...e){return t.apply(Ma(this),e),Ln(ip.get(this))}:function(...e){return Ln(t.apply(Ma(this),e))}}function AT(t){return typeof t=="function"?IT(t):(t instanceof IDBTransaction&&TT(t),_T(t,yT())?new Proxy(t,uc):t)}function Ln(t){if(t instanceof IDBRequest)return ET(t);if(La.has(t))return La.get(t);const e=AT(t);return e!==t&&(La.set(t,e),Zc.set(e,t)),e}const Ma=t=>Zc.get(t);function bT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),c=Ln(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Ln(a.result),l.oldVersion,l.newVersion,Ln(a.transaction),l)}),n&&a.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const RT=["get","getKey","getAll","getAllKeys","count"],ST=["put","add","delete","clear"],Fa=new Map;function vh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fa.get(e))return Fa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=ST.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||RT.includes(n)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return Fa.set(e,i),i}wT(t=>({...t,get:(e,n,r)=>vh(e,n)||t.get(e,n,r),has:(e,n)=>!!vh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(PT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function PT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hc="@firebase/app",Eh="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn=new Xc("@firebase/app"),kT="@firebase/app-compat",DT="@firebase/analytics-compat",OT="@firebase/analytics",NT="@firebase/app-check-compat",VT="@firebase/app-check",xT="@firebase/auth",LT="@firebase/auth-compat",MT="@firebase/database",FT="@firebase/data-connect",UT="@firebase/database-compat",BT="@firebase/functions",$T="@firebase/functions-compat",jT="@firebase/installations",qT="@firebase/installations-compat",HT="@firebase/messaging",zT="@firebase/messaging-compat",KT="@firebase/performance",WT="@firebase/performance-compat",GT="@firebase/remote-config",QT="@firebase/remote-config-compat",JT="@firebase/storage",YT="@firebase/storage-compat",XT="@firebase/firestore",ZT="@firebase/vertexai",ew="@firebase/firestore-compat",tw="firebase",nw="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc="[DEFAULT]",rw={[hc]:"fire-core",[kT]:"fire-core-compat",[OT]:"fire-analytics",[DT]:"fire-analytics-compat",[VT]:"fire-app-check",[NT]:"fire-app-check-compat",[xT]:"fire-auth",[LT]:"fire-auth-compat",[MT]:"fire-rtdb",[FT]:"fire-data-connect",[UT]:"fire-rtdb-compat",[BT]:"fire-fn",[$T]:"fire-fn-compat",[jT]:"fire-iid",[qT]:"fire-iid-compat",[HT]:"fire-fcm",[zT]:"fire-fcm-compat",[KT]:"fire-perf",[WT]:"fire-perf-compat",[GT]:"fire-rc",[QT]:"fire-rc-compat",[JT]:"fire-gcs",[YT]:"fire-gcs-compat",[XT]:"fire-fst",[ew]:"fire-fst-compat",[ZT]:"fire-vertex","fire-js":"fire-js",[tw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go=new Map,sw=new Map,fc=new Map;function Th(t,e){try{t.container.addComponent(e)}catch(n){fn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Qr(t){const e=t.name;if(fc.has(e))return fn.debug(`There were multiple attempts to register component ${e}.`),!1;fc.set(e,t);for(const n of go.values())Th(n,t);for(const n of sw.values())Th(n,t);return!0}function el(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ln(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Mn=new li("app","Firebase",iw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new pr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs=nw;function ap(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:dc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Mn.create("bad-app-name",{appName:String(s)});if(n||(n=rp()),!n)throw Mn.create("no-options");const i=go.get(s);if(i){if(po(n,i.options)&&po(r,i.config))return i;throw Mn.create("duplicate-app",{appName:s})}const a=new dT(s);for(const l of fc.values())a.addComponent(l);const c=new ow(n,r,a);return go.set(s,c),c}function cp(t=dc){const e=go.get(t);if(!e&&t===dc&&rp())return ap();if(!e)throw Mn.create("no-app",{appName:t});return e}function Fn(t,e,n){var r;let s=(r=rw[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fn.warn(c.join(" "));return}Qr(new pr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aw="firebase-heartbeat-database",cw=1,Zs="firebase-heartbeat-store";let Ua=null;function lp(){return Ua||(Ua=bT(aw,cw,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Zs)}catch(n){console.warn(n)}}}}).catch(t=>{throw Mn.create("idb-open",{originalErrorMessage:t.message})})),Ua}async function lw(t){try{const n=(await lp()).transaction(Zs),r=await n.objectStore(Zs).get(up(t));return await n.done,r}catch(e){if(e instanceof _n)fn.warn(e.message);else{const n=Mn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fn.warn(n.message)}}}async function wh(t,e){try{const r=(await lp()).transaction(Zs,"readwrite");await r.objectStore(Zs).put(e,up(t)),await r.done}catch(n){if(n instanceof _n)fn.warn(n.message);else{const r=Mn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});fn.warn(r.message)}}}function up(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw=1024,hw=30*24*60*60*1e3;class dw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new pw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ih();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=hw}),this._storage.overwrite(this._heartbeatsCache))}catch(r){fn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ih(),{heartbeatsToSend:r,unsentEntries:s}=fw(this._heartbeatsCache.heartbeats),i=fo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return fn.warn(n),""}}}function Ih(){return new Date().toISOString().substring(0,10)}function fw(t,e=uw){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Ah(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ah(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class pw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return eT()?tT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await lw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return wh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return wh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ah(t){return fo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gw(t){Qr(new pr("platform-logger",e=>new CT(e),"PRIVATE")),Qr(new pr("heartbeat",e=>new dw(e),"PRIVATE")),Fn(hc,Eh,t),Fn(hc,Eh,"esm2017"),Fn("fire-js","")}gw("");var bh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ur,hp;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,y){function w(){}w.prototype=y.prototype,I.D=y.prototype,I.prototype=new w,I.prototype.constructor=I,I.C=function(A,b,R){for(var T=Array(arguments.length-2),ft=2;ft<arguments.length;ft++)T[ft-2]=arguments[ft];return y.prototype[b].apply(A,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,y,w){w||(w=0);var A=Array(16);if(typeof y=="string")for(var b=0;16>b;++b)A[b]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(b=0;16>b;++b)A[b]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=I.g[0],w=I.g[1],b=I.g[2];var R=I.g[3],T=y+(R^w&(b^R))+A[0]+3614090360&4294967295;y=w+(T<<7&4294967295|T>>>25),T=R+(b^y&(w^b))+A[1]+3905402710&4294967295,R=y+(T<<12&4294967295|T>>>20),T=b+(w^R&(y^w))+A[2]+606105819&4294967295,b=R+(T<<17&4294967295|T>>>15),T=w+(y^b&(R^y))+A[3]+3250441966&4294967295,w=b+(T<<22&4294967295|T>>>10),T=y+(R^w&(b^R))+A[4]+4118548399&4294967295,y=w+(T<<7&4294967295|T>>>25),T=R+(b^y&(w^b))+A[5]+1200080426&4294967295,R=y+(T<<12&4294967295|T>>>20),T=b+(w^R&(y^w))+A[6]+2821735955&4294967295,b=R+(T<<17&4294967295|T>>>15),T=w+(y^b&(R^y))+A[7]+4249261313&4294967295,w=b+(T<<22&4294967295|T>>>10),T=y+(R^w&(b^R))+A[8]+1770035416&4294967295,y=w+(T<<7&4294967295|T>>>25),T=R+(b^y&(w^b))+A[9]+2336552879&4294967295,R=y+(T<<12&4294967295|T>>>20),T=b+(w^R&(y^w))+A[10]+4294925233&4294967295,b=R+(T<<17&4294967295|T>>>15),T=w+(y^b&(R^y))+A[11]+2304563134&4294967295,w=b+(T<<22&4294967295|T>>>10),T=y+(R^w&(b^R))+A[12]+1804603682&4294967295,y=w+(T<<7&4294967295|T>>>25),T=R+(b^y&(w^b))+A[13]+4254626195&4294967295,R=y+(T<<12&4294967295|T>>>20),T=b+(w^R&(y^w))+A[14]+2792965006&4294967295,b=R+(T<<17&4294967295|T>>>15),T=w+(y^b&(R^y))+A[15]+1236535329&4294967295,w=b+(T<<22&4294967295|T>>>10),T=y+(b^R&(w^b))+A[1]+4129170786&4294967295,y=w+(T<<5&4294967295|T>>>27),T=R+(w^b&(y^w))+A[6]+3225465664&4294967295,R=y+(T<<9&4294967295|T>>>23),T=b+(y^w&(R^y))+A[11]+643717713&4294967295,b=R+(T<<14&4294967295|T>>>18),T=w+(R^y&(b^R))+A[0]+3921069994&4294967295,w=b+(T<<20&4294967295|T>>>12),T=y+(b^R&(w^b))+A[5]+3593408605&4294967295,y=w+(T<<5&4294967295|T>>>27),T=R+(w^b&(y^w))+A[10]+38016083&4294967295,R=y+(T<<9&4294967295|T>>>23),T=b+(y^w&(R^y))+A[15]+3634488961&4294967295,b=R+(T<<14&4294967295|T>>>18),T=w+(R^y&(b^R))+A[4]+3889429448&4294967295,w=b+(T<<20&4294967295|T>>>12),T=y+(b^R&(w^b))+A[9]+568446438&4294967295,y=w+(T<<5&4294967295|T>>>27),T=R+(w^b&(y^w))+A[14]+3275163606&4294967295,R=y+(T<<9&4294967295|T>>>23),T=b+(y^w&(R^y))+A[3]+4107603335&4294967295,b=R+(T<<14&4294967295|T>>>18),T=w+(R^y&(b^R))+A[8]+1163531501&4294967295,w=b+(T<<20&4294967295|T>>>12),T=y+(b^R&(w^b))+A[13]+2850285829&4294967295,y=w+(T<<5&4294967295|T>>>27),T=R+(w^b&(y^w))+A[2]+4243563512&4294967295,R=y+(T<<9&4294967295|T>>>23),T=b+(y^w&(R^y))+A[7]+1735328473&4294967295,b=R+(T<<14&4294967295|T>>>18),T=w+(R^y&(b^R))+A[12]+2368359562&4294967295,w=b+(T<<20&4294967295|T>>>12),T=y+(w^b^R)+A[5]+4294588738&4294967295,y=w+(T<<4&4294967295|T>>>28),T=R+(y^w^b)+A[8]+2272392833&4294967295,R=y+(T<<11&4294967295|T>>>21),T=b+(R^y^w)+A[11]+1839030562&4294967295,b=R+(T<<16&4294967295|T>>>16),T=w+(b^R^y)+A[14]+4259657740&4294967295,w=b+(T<<23&4294967295|T>>>9),T=y+(w^b^R)+A[1]+2763975236&4294967295,y=w+(T<<4&4294967295|T>>>28),T=R+(y^w^b)+A[4]+1272893353&4294967295,R=y+(T<<11&4294967295|T>>>21),T=b+(R^y^w)+A[7]+4139469664&4294967295,b=R+(T<<16&4294967295|T>>>16),T=w+(b^R^y)+A[10]+3200236656&4294967295,w=b+(T<<23&4294967295|T>>>9),T=y+(w^b^R)+A[13]+681279174&4294967295,y=w+(T<<4&4294967295|T>>>28),T=R+(y^w^b)+A[0]+3936430074&4294967295,R=y+(T<<11&4294967295|T>>>21),T=b+(R^y^w)+A[3]+3572445317&4294967295,b=R+(T<<16&4294967295|T>>>16),T=w+(b^R^y)+A[6]+76029189&4294967295,w=b+(T<<23&4294967295|T>>>9),T=y+(w^b^R)+A[9]+3654602809&4294967295,y=w+(T<<4&4294967295|T>>>28),T=R+(y^w^b)+A[12]+3873151461&4294967295,R=y+(T<<11&4294967295|T>>>21),T=b+(R^y^w)+A[15]+530742520&4294967295,b=R+(T<<16&4294967295|T>>>16),T=w+(b^R^y)+A[2]+3299628645&4294967295,w=b+(T<<23&4294967295|T>>>9),T=y+(b^(w|~R))+A[0]+4096336452&4294967295,y=w+(T<<6&4294967295|T>>>26),T=R+(w^(y|~b))+A[7]+1126891415&4294967295,R=y+(T<<10&4294967295|T>>>22),T=b+(y^(R|~w))+A[14]+2878612391&4294967295,b=R+(T<<15&4294967295|T>>>17),T=w+(R^(b|~y))+A[5]+4237533241&4294967295,w=b+(T<<21&4294967295|T>>>11),T=y+(b^(w|~R))+A[12]+1700485571&4294967295,y=w+(T<<6&4294967295|T>>>26),T=R+(w^(y|~b))+A[3]+2399980690&4294967295,R=y+(T<<10&4294967295|T>>>22),T=b+(y^(R|~w))+A[10]+4293915773&4294967295,b=R+(T<<15&4294967295|T>>>17),T=w+(R^(b|~y))+A[1]+2240044497&4294967295,w=b+(T<<21&4294967295|T>>>11),T=y+(b^(w|~R))+A[8]+1873313359&4294967295,y=w+(T<<6&4294967295|T>>>26),T=R+(w^(y|~b))+A[15]+4264355552&4294967295,R=y+(T<<10&4294967295|T>>>22),T=b+(y^(R|~w))+A[6]+2734768916&4294967295,b=R+(T<<15&4294967295|T>>>17),T=w+(R^(b|~y))+A[13]+1309151649&4294967295,w=b+(T<<21&4294967295|T>>>11),T=y+(b^(w|~R))+A[4]+4149444226&4294967295,y=w+(T<<6&4294967295|T>>>26),T=R+(w^(y|~b))+A[11]+3174756917&4294967295,R=y+(T<<10&4294967295|T>>>22),T=b+(y^(R|~w))+A[2]+718787259&4294967295,b=R+(T<<15&4294967295|T>>>17),T=w+(R^(b|~y))+A[9]+3951481745&4294967295,I.g[0]=I.g[0]+y&4294967295,I.g[1]=I.g[1]+(b+(T<<21&4294967295|T>>>11))&4294967295,I.g[2]=I.g[2]+b&4294967295,I.g[3]=I.g[3]+R&4294967295}r.prototype.u=function(I,y){y===void 0&&(y=I.length);for(var w=y-this.blockSize,A=this.B,b=this.h,R=0;R<y;){if(b==0)for(;R<=w;)s(this,I,R),R+=this.blockSize;if(typeof I=="string"){for(;R<y;)if(A[b++]=I.charCodeAt(R++),b==this.blockSize){s(this,A),b=0;break}}else for(;R<y;)if(A[b++]=I[R++],b==this.blockSize){s(this,A),b=0;break}}this.h=b,this.o+=y},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var y=1;y<I.length-8;++y)I[y]=0;var w=8*this.o;for(y=I.length-8;y<I.length;++y)I[y]=w&255,w/=256;for(this.u(I),I=Array(16),y=w=0;4>y;++y)for(var A=0;32>A;A+=8)I[w++]=this.g[y]>>>A&255;return I};function i(I,y){var w=c;return Object.prototype.hasOwnProperty.call(w,I)?w[I]:w[I]=y(I)}function a(I,y){this.h=y;for(var w=[],A=!0,b=I.length-1;0<=b;b--){var R=I[b]|0;A&&R==y||(w[b]=R,A=!1)}this.g=w}var c={};function l(I){return-128<=I&&128>I?i(I,function(y){return new a([y|0],0>y?-1:0)}):new a([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return L(h(-I));for(var y=[],w=1,A=0;I>=w;A++)y[A]=I/w|0,w*=4294967296;return new a(y,0)}function f(I,y){if(I.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(I.charAt(0)=="-")return L(f(I.substring(1),y));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=h(Math.pow(y,8)),A=p,b=0;b<I.length;b+=8){var R=Math.min(8,I.length-b),T=parseInt(I.substring(b,b+R),y);8>R?(R=h(Math.pow(y,R)),A=A.j(R).add(h(T))):(A=A.j(w),A=A.add(h(T)))}return A}var p=l(0),m=l(1),E=l(16777216);t=a.prototype,t.m=function(){if(V(this))return-L(this).m();for(var I=0,y=1,w=0;w<this.g.length;w++){var A=this.i(w);I+=(0<=A?A:4294967296+A)*y,y*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(k(this))return"0";if(V(this))return"-"+L(this).toString(I);for(var y=h(Math.pow(I,6)),w=this,A="";;){var b=H(w,y).g;w=W(w,b.j(y));var R=((0<w.g.length?w.g[0]:w.h)>>>0).toString(I);if(w=b,k(w))return R+A;for(;6>R.length;)R="0"+R;A=R+A}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function k(I){if(I.h!=0)return!1;for(var y=0;y<I.g.length;y++)if(I.g[y]!=0)return!1;return!0}function V(I){return I.h==-1}t.l=function(I){return I=W(this,I),V(I)?-1:k(I)?0:1};function L(I){for(var y=I.g.length,w=[],A=0;A<y;A++)w[A]=~I.g[A];return new a(w,~I.h).add(m)}t.abs=function(){return V(this)?L(this):this},t.add=function(I){for(var y=Math.max(this.g.length,I.g.length),w=[],A=0,b=0;b<=y;b++){var R=A+(this.i(b)&65535)+(I.i(b)&65535),T=(R>>>16)+(this.i(b)>>>16)+(I.i(b)>>>16);A=T>>>16,R&=65535,T&=65535,w[b]=T<<16|R}return new a(w,w[w.length-1]&-2147483648?-1:0)};function W(I,y){return I.add(L(y))}t.j=function(I){if(k(this)||k(I))return p;if(V(this))return V(I)?L(this).j(L(I)):L(L(this).j(I));if(V(I))return L(this.j(L(I)));if(0>this.l(E)&&0>I.l(E))return h(this.m()*I.m());for(var y=this.g.length+I.g.length,w=[],A=0;A<2*y;A++)w[A]=0;for(A=0;A<this.g.length;A++)for(var b=0;b<I.g.length;b++){var R=this.i(A)>>>16,T=this.i(A)&65535,ft=I.i(b)>>>16,Ct=I.i(b)&65535;w[2*A+2*b]+=T*Ct,$(w,2*A+2*b),w[2*A+2*b+1]+=R*Ct,$(w,2*A+2*b+1),w[2*A+2*b+1]+=T*ft,$(w,2*A+2*b+1),w[2*A+2*b+2]+=R*ft,$(w,2*A+2*b+2)}for(A=0;A<y;A++)w[A]=w[2*A+1]<<16|w[2*A];for(A=y;A<2*y;A++)w[A]=0;return new a(w,0)};function $(I,y){for(;(I[y]&65535)!=I[y];)I[y+1]+=I[y]>>>16,I[y]&=65535,y++}function z(I,y){this.g=I,this.h=y}function H(I,y){if(k(y))throw Error("division by zero");if(k(I))return new z(p,p);if(V(I))return y=H(L(I),y),new z(L(y.g),L(y.h));if(V(y))return y=H(I,L(y)),new z(L(y.g),y.h);if(30<I.g.length){if(V(I)||V(y))throw Error("slowDivide_ only works with positive integers.");for(var w=m,A=y;0>=A.l(I);)w=he(w),A=he(A);var b=de(w,1),R=de(A,1);for(A=de(A,2),w=de(w,2);!k(A);){var T=R.add(A);0>=T.l(I)&&(b=b.add(w),R=T),A=de(A,1),w=de(w,1)}return y=W(I,b.j(y)),new z(b,y)}for(b=p;0<=I.l(y);){for(w=Math.max(1,Math.floor(I.m()/y.m())),A=Math.ceil(Math.log(w)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),R=h(w),T=R.j(y);V(T)||0<T.l(I);)w-=A,R=h(w),T=R.j(y);k(R)&&(R=m),b=b.add(R),I=W(I,T)}return new z(b,I)}t.A=function(I){return H(this,I).h},t.and=function(I){for(var y=Math.max(this.g.length,I.g.length),w=[],A=0;A<y;A++)w[A]=this.i(A)&I.i(A);return new a(w,this.h&I.h)},t.or=function(I){for(var y=Math.max(this.g.length,I.g.length),w=[],A=0;A<y;A++)w[A]=this.i(A)|I.i(A);return new a(w,this.h|I.h)},t.xor=function(I){for(var y=Math.max(this.g.length,I.g.length),w=[],A=0;A<y;A++)w[A]=this.i(A)^I.i(A);return new a(w,this.h^I.h)};function he(I){for(var y=I.g.length+1,w=[],A=0;A<y;A++)w[A]=I.i(A)<<1|I.i(A-1)>>>31;return new a(w,I.h)}function de(I,y){var w=y>>5;y%=32;for(var A=I.g.length-w,b=[],R=0;R<A;R++)b[R]=0<y?I.i(R+w)>>>y|I.i(R+w+1)<<32-y:I.i(R+w);return new a(b,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,hp=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,ur=a}).apply(typeof bh<"u"?bh:typeof self<"u"?self:typeof window<"u"?window:{});var Li=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dp,Ss,fp,Qi,pc,pp,gp,mp;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,d){return o==Array.prototype||o==Object.prototype||(o[u]=d.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Li=="object"&&Li];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)e:{var d=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var S=o[g];if(!(S in d))break e;d=d[S]}o=o[o.length-1],g=d[o],u=u(g),u!=g&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var d=0,g=!1,S={next:function(){if(!g&&d<o.length){var P=d++;return{value:u(P,o[P]),done:!1}}return g=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,d){return o.call.apply(o.bind,arguments)}function p(o,u,d){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,g),o.apply(u,S)}}return function(){return o.apply(u,arguments)}}function m(o,u,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function E(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function k(o,u){function d(){}d.prototype=u.prototype,o.aa=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(g,S,P){for(var j=Array(arguments.length-2),Ce=2;Ce<arguments.length;Ce++)j[Ce-2]=arguments[Ce];return u.prototype[S].apply(g,j)}}function V(o){const u=o.length;if(0<u){const d=Array(u);for(let g=0;g<u;g++)d[g]=o[g];return d}return[]}function L(o,u){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(l(g)){const S=o.length||0,P=g.length||0;o.length=S+P;for(let j=0;j<P;j++)o[S+j]=g[j]}else o.push(g)}}class W{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function $(o){return/^[\s\xa0]*$/.test(o)}function z(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function H(o){return H[" "](o),o}H[" "]=function(){};var he=z().indexOf("Gecko")!=-1&&!(z().toLowerCase().indexOf("webkit")!=-1&&z().indexOf("Edge")==-1)&&!(z().indexOf("Trident")!=-1||z().indexOf("MSIE")!=-1)&&z().indexOf("Edge")==-1;function de(o,u,d){for(const g in o)u.call(d,o[g],g,o)}function I(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function y(o){const u={};for(const d in o)u[d]=o[d];return u}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(o,u){let d,g;for(let S=1;S<arguments.length;S++){g=arguments[S];for(d in g)o[d]=g[d];for(let P=0;P<w.length;P++)d=w[P],Object.prototype.hasOwnProperty.call(g,d)&&(o[d]=g[d])}}function b(o){var u=1;o=o.split(":");const d=[];for(;0<u&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function R(o){c.setTimeout(()=>{throw o},0)}function T(){var o=wt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class ft{constructor(){this.h=this.g=null}add(u,d){const g=Ct.get();g.set(u,d),this.h?this.h.next=g:this.g=g,this.h=g}}var Ct=new W(()=>new $e,o=>o.reset());class $e{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ge,fe=!1,wt=new ft,Vt=()=>{const o=c.Promise.resolve(void 0);ge=()=>{o.then(Pt)}};var Pt=()=>{for(var o;o=T();){try{o.h.call(o.g)}catch(d){R(d)}var u=Ct;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}fe=!1};function xe(){this.s=this.s,this.C=this.C}xe.prototype.s=!1,xe.prototype.ma=function(){this.s||(this.s=!0,this.N())},xe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Le(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Le.prototype.h=function(){this.defaultPrevented=!0};var vn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};c.addEventListener("test",d,u),c.removeEventListener("test",d,u)}catch{}return o}();function $t(o,u){if(Le.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(he){e:{try{H(u.nodeName);var S=!0;break e}catch{}S=!1}S||(u=null)}}else d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:vt[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&$t.aa.h.call(this)}}k($t,Le);var vt={2:"touch",3:"pen",4:"mouse"};$t.prototype.h=function(){$t.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var O="closure_listenable_"+(1e6*Math.random()|0),J=0;function G(o,u,d,g,S){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!g,this.ha=S,this.key=++J,this.da=this.fa=!1}function X(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function me(o){this.src=o,this.g={},this.h=0}me.prototype.add=function(o,u,d,g,S){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var j=_(o,u,g,S);return-1<j?(u=o[j],d||(u.fa=!1)):(u=new G(u,this.src,P,!!g,S),u.fa=d,o.push(u)),u};function Se(o,u){var d=u.type;if(d in o.g){var g=o.g[d],S=Array.prototype.indexOf.call(g,u,void 0),P;(P=0<=S)&&Array.prototype.splice.call(g,S,1),P&&(X(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function _(o,u,d,g){for(var S=0;S<o.length;++S){var P=o[S];if(!P.da&&P.listener==u&&P.capture==!!d&&P.ha==g)return S}return-1}var v="closure_lm_"+(1e6*Math.random()|0),C={};function x(o,u,d,g,S){if(Array.isArray(u)){for(var P=0;P<u.length;P++)x(o,u[P],d,g,S);return null}return d=ee(d),o&&o[O]?o.K(u,d,h(g)?!!g.capture:!!g,S):D(o,u,d,!1,g,S)}function D(o,u,d,g,S,P){if(!u)throw Error("Invalid event type");var j=h(S)?!!S.capture:!!S,Ce=ne(o);if(Ce||(o[v]=Ce=new me(o)),d=Ce.add(u,d,g,j,P),d.proxy)return d;if(g=M(),d.proxy=g,g.src=o,g.listener=d,o.addEventListener)vn||(S=j),S===void 0&&(S=!1),o.addEventListener(u.toString(),g,S);else if(o.attachEvent)o.attachEvent(U(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function M(){function o(d){return u.call(o.src,o.listener,d)}const u=F;return o}function K(o,u,d,g,S){if(Array.isArray(u))for(var P=0;P<u.length;P++)K(o,u[P],d,g,S);else g=h(g)?!!g.capture:!!g,d=ee(d),o&&o[O]?(o=o.i,u=String(u).toString(),u in o.g&&(P=o.g[u],d=_(P,d,g,S),-1<d&&(X(P[d]),Array.prototype.splice.call(P,d,1),P.length==0&&(delete o.g[u],o.h--)))):o&&(o=ne(o))&&(u=o.g[u.toString()],o=-1,u&&(o=_(u,d,g,S)),(d=-1<o?u[o]:null)&&B(d))}function B(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[O])Se(u.i,o);else{var d=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(d,g,o.capture):u.detachEvent?u.detachEvent(U(d),g):u.addListener&&u.removeListener&&u.removeListener(g),(d=ne(u))?(Se(d,o),d.h==0&&(d.src=null,u[v]=null)):X(o)}}}function U(o){return o in C?C[o]:C[o]="on"+o}function F(o,u){if(o.da)o=!0;else{u=new $t(u,this);var d=o.listener,g=o.ha||o.src;o.fa&&B(o),o=d.call(g,u)}return o}function ne(o){return o=o[v],o instanceof me?o:null}var Q="__closure_events_fn_"+(1e9*Math.random()>>>0);function ee(o){return typeof o=="function"?o:(o[Q]||(o[Q]=function(u){return o.handleEvent(u)}),o[Q])}function Z(){xe.call(this),this.i=new me(this),this.M=this,this.F=null}k(Z,xe),Z.prototype[O]=!0,Z.prototype.removeEventListener=function(o,u,d,g){K(this,o,u,d,g)};function se(o,u){var d,g=o.F;if(g)for(d=[];g;g=g.F)d.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new Le(u,o);else if(u instanceof Le)u.target=u.target||o;else{var S=u;u=new Le(g,o),A(u,S)}if(S=!0,d)for(var P=d.length-1;0<=P;P--){var j=u.g=d[P];S=Ie(j,g,!0,u)&&S}if(j=u.g=o,S=Ie(j,g,!0,u)&&S,S=Ie(j,g,!1,u)&&S,d)for(P=0;P<d.length;P++)j=u.g=d[P],S=Ie(j,g,!1,u)&&S}Z.prototype.N=function(){if(Z.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var d=o.g[u],g=0;g<d.length;g++)X(d[g]);delete o.g[u],o.h--}}this.F=null},Z.prototype.K=function(o,u,d,g){return this.i.add(String(o),u,!1,d,g)},Z.prototype.L=function(o,u,d,g){return this.i.add(String(o),u,!0,d,g)};function Ie(o,u,d,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var S=!0,P=0;P<u.length;++P){var j=u[P];if(j&&!j.da&&j.capture==d){var Ce=j.listener,Je=j.ha||j.src;j.fa&&Se(o.i,j),S=Ce.call(Je,g)!==!1&&S}}return S&&!g.defaultPrevented}function Te(o,u,d){if(typeof o=="function")d&&(o=m(o,d));else if(o&&typeof o.handleEvent=="function")o=m(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function et(o){o.g=Te(()=>{o.g=null,o.i&&(o.i=!1,et(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Ke extends xe{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:et(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qe(o){xe.call(this),this.h=o,this.g={}}k(Qe,xe);var tt=[];function En(o){de(o.g,function(u,d){this.g.hasOwnProperty(d)&&B(u)},o),o.g={}}Qe.prototype.N=function(){Qe.aa.N.call(this),En(this)},Qe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Er=c.JSON.stringify,pt=c.JSON.parse,kt=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Tr(){}Tr.prototype.h=null;function Dl(o){return o.h||(o.h=o.i())}function Ol(){}var ls={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function oa(){Le.call(this,"d")}k(oa,Le);function aa(){Le.call(this,"c")}k(aa,Le);var Yn={},Nl=null;function yi(){return Nl=Nl||new Z}Yn.La="serverreachability";function Vl(o){Le.call(this,Yn.La,o)}k(Vl,Le);function us(o){const u=yi();se(u,new Vl(u))}Yn.STAT_EVENT="statevent";function xl(o,u){Le.call(this,Yn.STAT_EVENT,o),this.stat=u}k(xl,Le);function gt(o){const u=yi();se(u,new xl(u,o))}Yn.Ma="timingevent";function Ll(o,u){Le.call(this,Yn.Ma,o),this.size=u}k(Ll,Le);function hs(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function ds(){this.g=!0}ds.prototype.xa=function(){this.g=!1};function tm(o,u,d,g,S,P){o.info(function(){if(o.g)if(P)for(var j="",Ce=P.split("&"),Je=0;Je<Ce.length;Je++){var we=Ce[Je].split("=");if(1<we.length){var nt=we[0];we=we[1];var rt=nt.split("_");j=2<=rt.length&&rt[1]=="type"?j+(nt+"="+we+"&"):j+(nt+"=redacted&")}}else j=null;else j=P;return"XMLHTTP REQ ("+g+") [attempt "+S+"]: "+u+`
`+d+`
`+j})}function nm(o,u,d,g,S,P,j){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+S+"]: "+u+`
`+d+`
`+P+" "+j})}function wr(o,u,d,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+sm(o,d)+(g?" "+g:"")})}function rm(o,u){o.info(function(){return"TIMEOUT: "+u})}ds.prototype.info=function(){};function sm(o,u){if(!o.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var g=d[o];if(!(2>g.length)){var S=g[1];if(Array.isArray(S)&&!(1>S.length)){var P=S[0];if(P!="noop"&&P!="stop"&&P!="close")for(var j=1;j<S.length;j++)S[j]=""}}}}return Er(d)}catch{return u}}var vi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ml={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ca;function Ei(){}k(Ei,Tr),Ei.prototype.g=function(){return new XMLHttpRequest},Ei.prototype.i=function(){return{}},ca=new Ei;function Tn(o,u,d,g){this.j=o,this.i=u,this.l=d,this.R=g||1,this.U=new Qe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Fl}function Fl(){this.i=null,this.g="",this.h=!1}var Ul={},la={};function ua(o,u,d){o.L=1,o.v=Ai(tn(u)),o.m=d,o.P=!0,Bl(o,null)}function Bl(o,u){o.F=Date.now(),Ti(o),o.A=tn(o.v);var d=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),eu(d.i,"t",g),o.C=0,d=o.j.J,o.h=new Fl,o.g=yu(o.j,d?u:null,!o.m),0<o.O&&(o.M=new Ke(m(o.Y,o,o.g),o.O)),u=o.U,d=o.g,g=o.ca;var S="readystatechange";Array.isArray(S)||(S&&(tt[0]=S.toString()),S=tt);for(var P=0;P<S.length;P++){var j=x(d,S[P],g||u.handleEvent,!1,u.h||u);if(!j)break;u.g[j.key]=j}u=o.H?y(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),us(),tm(o.i,o.u,o.A,o.l,o.R,o.m)}Tn.prototype.ca=function(o){o=o.target;const u=this.M;u&&nn(o)==3?u.j():this.Y(o)},Tn.prototype.Y=function(o){try{if(o==this.g)e:{const rt=nn(this.g);var u=this.g.Ba();const br=this.g.Z();if(!(3>rt)&&(rt!=3||this.g&&(this.h.h||this.g.oa()||au(this.g)))){this.J||rt!=4||u==7||(u==8||0>=br?us(3):us(2)),ha(this);var d=this.g.Z();this.X=d;t:if($l(this)){var g=au(this.g);o="";var S=g.length,P=nn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Xn(this),fs(this);var j="";break t}this.h.i=new c.TextDecoder}for(u=0;u<S;u++)this.h.h=!0,o+=this.h.i.decode(g[u],{stream:!(P&&u==S-1)});g.length=0,this.h.g+=o,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=d==200,nm(this.i,this.u,this.A,this.l,this.R,rt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Ce,Je=this.g;if((Ce=Je.g?Je.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(Ce)){var we=Ce;break t}}we=null}if(d=we)wr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,da(this,d);else{this.o=!1,this.s=3,gt(12),Xn(this),fs(this);break e}}if(this.P){d=!0;let xt;for(;!this.J&&this.C<j.length;)if(xt=im(this,j),xt==la){rt==4&&(this.s=4,gt(14),d=!1),wr(this.i,this.l,null,"[Incomplete Response]");break}else if(xt==Ul){this.s=4,gt(15),wr(this.i,this.l,j,"[Invalid Chunk]"),d=!1;break}else wr(this.i,this.l,xt,null),da(this,xt);if($l(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),rt!=4||j.length!=0||this.h.h||(this.s=1,gt(16),d=!1),this.o=this.o&&d,!d)wr(this.i,this.l,j,"[Invalid Chunked Response]"),Xn(this),fs(this);else if(0<j.length&&!this.W){this.W=!0;var nt=this.j;nt.g==this&&nt.ba&&!nt.M&&(nt.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),ya(nt),nt.M=!0,gt(11))}}else wr(this.i,this.l,j,null),da(this,j);rt==4&&Xn(this),this.o&&!this.J&&(rt==4?pu(this.j,this):(this.o=!1,Ti(this)))}else wm(this.g),d==400&&0<j.indexOf("Unknown SID")?(this.s=3,gt(12)):(this.s=0,gt(13)),Xn(this),fs(this)}}}catch{}finally{}};function $l(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function im(o,u){var d=o.C,g=u.indexOf(`
`,d);return g==-1?la:(d=Number(u.substring(d,g)),isNaN(d)?Ul:(g+=1,g+d>u.length?la:(u=u.slice(g,g+d),o.C=g+d,u)))}Tn.prototype.cancel=function(){this.J=!0,Xn(this)};function Ti(o){o.S=Date.now()+o.I,jl(o,o.I)}function jl(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=hs(m(o.ba,o),u)}function ha(o){o.B&&(c.clearTimeout(o.B),o.B=null)}Tn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(rm(this.i,this.A),this.L!=2&&(us(),gt(17)),Xn(this),this.s=2,fs(this)):jl(this,this.S-o)};function fs(o){o.j.G==0||o.J||pu(o.j,o)}function Xn(o){ha(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,En(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function da(o,u){try{var d=o.j;if(d.G!=0&&(d.g==o||fa(d.h,o))){if(!o.K&&fa(d.h,o)&&d.G==3){try{var g=d.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var S=g;if(S[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)ki(d),Ci(d);else break e;_a(d),gt(18)}}else d.za=S[1],0<d.za-d.T&&37500>S[2]&&d.F&&d.v==0&&!d.C&&(d.C=hs(m(d.Za,d),6e3));if(1>=zl(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else er(d,11)}else if((o.K||d.g==o)&&ki(d),!$(u))for(S=d.Da.g.parse(u),u=0;u<S.length;u++){let we=S[u];if(d.T=we[0],we=we[1],d.G==2)if(we[0]=="c"){d.K=we[1],d.ia=we[2];const nt=we[3];nt!=null&&(d.la=nt,d.j.info("VER="+d.la));const rt=we[4];rt!=null&&(d.Aa=rt,d.j.info("SVER="+d.Aa));const br=we[5];br!=null&&typeof br=="number"&&0<br&&(g=1.5*br,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const xt=o.g;if(xt){const Oi=xt.g?xt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Oi){var P=g.h;P.g||Oi.indexOf("spdy")==-1&&Oi.indexOf("quic")==-1&&Oi.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(pa(P,P.h),P.h=null))}if(g.D){const va=xt.g?xt.g.getResponseHeader("X-HTTP-Session-Id"):null;va&&(g.ya=va,De(g.I,g.D,va))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var j=o;if(g.qa=_u(g,g.J?g.ia:null,g.W),j.K){Kl(g.h,j);var Ce=j,Je=g.L;Je&&(Ce.I=Je),Ce.B&&(ha(Ce),Ti(Ce)),g.g=j}else du(g);0<d.i.length&&Pi(d)}else we[0]!="stop"&&we[0]!="close"||er(d,7);else d.G==3&&(we[0]=="stop"||we[0]=="close"?we[0]=="stop"?er(d,7):ma(d):we[0]!="noop"&&d.l&&d.l.ta(we),d.v=0)}}us(4)}catch{}}var om=class{constructor(o,u){this.g=o,this.map=u}};function ql(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Hl(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function zl(o){return o.h?1:o.g?o.g.size:0}function fa(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function pa(o,u){o.g?o.g.add(u):o.h=u}function Kl(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}ql.prototype.cancel=function(){if(this.i=Wl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Wl(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.D);return u}return V(o.i)}function am(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var u=[],d=o.length,g=0;g<d;g++)u.push(o[g]);return u}u=[],d=0;for(g in o)u[d++]=o[g];return u}function cm(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var u=[];o=o.length;for(var d=0;d<o;d++)u.push(d);return u}u=[],d=0;for(const g in o)u[d++]=g;return u}}}function Gl(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var d=cm(o),g=am(o),S=g.length,P=0;P<S;P++)u.call(void 0,g[P],d&&d[P],o)}var Ql=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lm(o,u){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var g=o[d].indexOf("="),S=null;if(0<=g){var P=o[d].substring(0,g);S=o[d].substring(g+1)}else P=o[d];u(P,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function Zn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Zn){this.h=o.h,wi(this,o.j),this.o=o.o,this.g=o.g,Ii(this,o.s),this.l=o.l;var u=o.i,d=new ms;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),Jl(this,d),this.m=o.m}else o&&(u=String(o).match(Ql))?(this.h=!1,wi(this,u[1]||"",!0),this.o=ps(u[2]||""),this.g=ps(u[3]||"",!0),Ii(this,u[4]),this.l=ps(u[5]||"",!0),Jl(this,u[6]||"",!0),this.m=ps(u[7]||"")):(this.h=!1,this.i=new ms(null,this.h))}Zn.prototype.toString=function(){var o=[],u=this.j;u&&o.push(gs(u,Yl,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(gs(u,Yl,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(gs(d,d.charAt(0)=="/"?dm:hm,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",gs(d,pm)),o.join("")};function tn(o){return new Zn(o)}function wi(o,u,d){o.j=d?ps(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Ii(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Jl(o,u,d){u instanceof ms?(o.i=u,gm(o.i,o.h)):(d||(u=gs(u,fm)),o.i=new ms(u,o.h))}function De(o,u,d){o.i.set(u,d)}function Ai(o){return De(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function ps(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function gs(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,um),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function um(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Yl=/[#\/\?@]/g,hm=/[#\?:]/g,dm=/[#\?]/g,fm=/[#\?@]/g,pm=/#/g;function ms(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function wn(o){o.g||(o.g=new Map,o.h=0,o.i&&lm(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}t=ms.prototype,t.add=function(o,u){wn(this),this.i=null,o=Ir(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function Xl(o,u){wn(o),u=Ir(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Zl(o,u){return wn(o),u=Ir(o,u),o.g.has(u)}t.forEach=function(o,u){wn(this),this.g.forEach(function(d,g){d.forEach(function(S){o.call(u,S,g,this)},this)},this)},t.na=function(){wn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let g=0;g<u.length;g++){const S=o[g];for(let P=0;P<S.length;P++)d.push(u[g])}return d},t.V=function(o){wn(this);let u=[];if(typeof o=="string")Zl(this,o)&&(u=u.concat(this.g.get(Ir(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)u=u.concat(o[d])}return u},t.set=function(o,u){return wn(this),this.i=null,o=Ir(this,o),Zl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},t.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function eu(o,u,d){Xl(o,u),0<d.length&&(o.i=null,o.g.set(Ir(o,u),V(d)),o.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var g=u[d];const P=encodeURIComponent(String(g)),j=this.V(g);for(g=0;g<j.length;g++){var S=P;j[g]!==""&&(S+="="+encodeURIComponent(String(j[g]))),o.push(S)}}return this.i=o.join("&")};function Ir(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function gm(o,u){u&&!o.j&&(wn(o),o.i=null,o.g.forEach(function(d,g){var S=g.toLowerCase();g!=S&&(Xl(this,g),eu(this,S,d))},o)),o.j=u}function mm(o,u){const d=new ds;if(c.Image){const g=new Image;g.onload=E(In,d,"TestLoadImage: loaded",!0,u,g),g.onerror=E(In,d,"TestLoadImage: error",!1,u,g),g.onabort=E(In,d,"TestLoadImage: abort",!1,u,g),g.ontimeout=E(In,d,"TestLoadImage: timeout",!1,u,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function _m(o,u){const d=new ds,g=new AbortController,S=setTimeout(()=>{g.abort(),In(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(P=>{clearTimeout(S),P.ok?In(d,"TestPingServer: ok",!0,u):In(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),In(d,"TestPingServer: error",!1,u)})}function In(o,u,d,g,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),g(d)}catch{}}function ym(){this.g=new kt}function vm(o,u,d){const g=d||"";try{Gl(o,function(S,P){let j=S;h(S)&&(j=Er(S)),u.push(g+P+"="+encodeURIComponent(j))})}catch(S){throw u.push(g+"type="+encodeURIComponent("_badmap")),S}}function bi(o){this.l=o.Ub||null,this.j=o.eb||!1}k(bi,Tr),bi.prototype.g=function(){return new Ri(this.l,this.j)},bi.prototype.i=function(o){return function(){return o}}({});function Ri(o,u){Z.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Ri,Z),t=Ri.prototype,t.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,ys(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_s(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ys(this)),this.g&&(this.readyState=3,ys(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;tu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function tu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?_s(this):ys(this),this.readyState==3&&tu(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,_s(this))},t.Qa=function(o){this.g&&(this.response=o,_s(this))},t.ga=function(){this.g&&_s(this)};function _s(o){o.readyState=4,o.l=null,o.j=null,o.v=null,ys(o)}t.setRequestHeader=function(o,u){this.u.append(o,u)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function ys(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ri.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function nu(o){let u="";return de(o,function(d,g){u+=g,u+=":",u+=d,u+=`\r
`}),u}function ga(o,u,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=nu(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):De(o,u,d))}function Fe(o){Z.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(Fe,Z);var Em=/^https?$/i,Tm=["POST","PUT"];t=Fe.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,u,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ca.g(),this.v=this.o?Dl(this.o):Dl(ca),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(P){ru(this,P);return}if(o=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var S in g)d.set(S,g[S]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const P of g.keys())d.set(P,g.get(P));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),S=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Tm,u,void 0))||g||S||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,j]of d)this.g.setRequestHeader(P,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ou(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){ru(this,P)}};function ru(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,su(o),Si(o)}function su(o){o.A||(o.A=!0,se(o,"complete"),se(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,se(this,"complete"),se(this,"abort"),Si(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Si(this,!0)),Fe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?iu(this):this.bb())},t.bb=function(){iu(this)};function iu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||nn(o)!=4||o.Z()!=2)){if(o.u&&nn(o)==4)Te(o.Ea,0,o);else if(se(o,"readystatechange"),nn(o)==4){o.h=!1;try{const j=o.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var g;if(g=j===0){var S=String(o.D).match(Ql)[1]||null;!S&&c.self&&c.self.location&&(S=c.self.location.protocol.slice(0,-1)),g=!Em.test(S?S.toLowerCase():"")}d=g}if(d)se(o,"complete"),se(o,"success");else{o.m=6;try{var P=2<nn(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",su(o)}}finally{Si(o)}}}}function Si(o,u){if(o.g){ou(o);const d=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||se(o,"ready");try{d.onreadystatechange=g}catch{}}}function ou(o){o.I&&(c.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function nn(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<nn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),pt(u)}};function au(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function wm(o){const u={};o=(o.g&&2<=nn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if($(o[g]))continue;var d=b(o[g]);const S=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const P=u[S]||[];u[S]=P,P.push(d)}I(u,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function vs(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function cu(o){this.Aa=0,this.i=[],this.j=new ds,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=vs("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=vs("baseRetryDelayMs",5e3,o),this.cb=vs("retryDelaySeedMs",1e4,o),this.Wa=vs("forwardChannelMaxRetries",2,o),this.wa=vs("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new ql(o&&o.concurrentRequestLimit),this.Da=new ym,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=cu.prototype,t.la=8,t.G=1,t.connect=function(o,u,d,g){gt(0),this.W=o,this.H=u||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=_u(this,null,this.W),Pi(this)};function ma(o){if(lu(o),o.G==3){var u=o.U++,d=tn(o.I);if(De(d,"SID",o.K),De(d,"RID",u),De(d,"TYPE","terminate"),Es(o,d),u=new Tn(o,o.j,u),u.L=2,u.v=Ai(tn(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=u.v,d=!0),d||(u.g=yu(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Ti(u)}mu(o)}function Ci(o){o.g&&(ya(o),o.g.cancel(),o.g=null)}function lu(o){Ci(o),o.u&&(c.clearTimeout(o.u),o.u=null),ki(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Pi(o){if(!Hl(o.h)&&!o.s){o.s=!0;var u=o.Ga;ge||Vt(),fe||(ge(),fe=!0),wt.add(u,o),o.B=0}}function Im(o,u){return zl(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=hs(m(o.Ga,o,u),gu(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const S=new Tn(this,this.j,o);let P=this.o;if(this.S&&(P?(P=y(P),A(P,this.S)):P=this.S),this.m!==null||this.O||(S.H=P,P=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=hu(this,S,u),d=tn(this.I),De(d,"RID",o),De(d,"CVER",22),this.D&&De(d,"X-HTTP-Session-Id",this.D),Es(this,d),P&&(this.O?u="headers="+encodeURIComponent(String(nu(P)))+"&"+u:this.m&&ga(d,this.m,P)),pa(this.h,S),this.Ua&&De(d,"TYPE","init"),this.P?(De(d,"$req",u),De(d,"SID","null"),S.T=!0,ua(S,d,null)):ua(S,d,u),this.G=2}}else this.G==3&&(o?uu(this,o):this.i.length==0||Hl(this.h)||uu(this))};function uu(o,u){var d;u?d=u.l:d=o.U++;const g=tn(o.I);De(g,"SID",o.K),De(g,"RID",d),De(g,"AID",o.T),Es(o,g),o.m&&o.o&&ga(g,o.m,o.o),d=new Tn(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),u&&(o.i=u.D.concat(o.i)),u=hu(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),pa(o.h,d),ua(d,g,u)}function Es(o,u){o.H&&de(o.H,function(d,g){De(u,g,d)}),o.l&&Gl({},function(d,g){De(u,g,d)})}function hu(o,u,d){d=Math.min(o.i.length,d);var g=o.l?m(o.l.Na,o.l,o):null;e:{var S=o.i;let P=-1;for(;;){const j=["count="+d];P==-1?0<d?(P=S[0].g,j.push("ofs="+P)):P=0:j.push("ofs="+P);let Ce=!0;for(let Je=0;Je<d;Je++){let we=S[Je].g;const nt=S[Je].map;if(we-=P,0>we)P=Math.max(0,S[Je].g-100),Ce=!1;else try{vm(nt,j,"req"+we+"_")}catch{g&&g(nt)}}if(Ce){g=j.join("&");break e}}}return o=o.i.splice(0,d),u.D=o,g}function du(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;ge||Vt(),fe||(ge(),fe=!0),wt.add(u,o),o.v=0}}function _a(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=hs(m(o.Fa,o),gu(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,fu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=hs(m(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,gt(10),Ci(this),fu(this))};function ya(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function fu(o){o.g=new Tn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=tn(o.qa);De(u,"RID","rpc"),De(u,"SID",o.K),De(u,"AID",o.T),De(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&De(u,"TO",o.ja),De(u,"TYPE","xmlhttp"),Es(o,u),o.m&&o.o&&ga(u,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Ai(tn(u)),d.m=null,d.P=!0,Bl(d,o)}t.Za=function(){this.C!=null&&(this.C=null,Ci(this),_a(this),gt(19))};function ki(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function pu(o,u){var d=null;if(o.g==u){ki(o),ya(o),o.g=null;var g=2}else if(fa(o.h,u))d=u.D,Kl(o.h,u),g=1;else return;if(o.G!=0){if(u.o)if(g==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var S=o.B;g=yi(),se(g,new Ll(g,d)),Pi(o)}else du(o);else if(S=u.s,S==3||S==0&&0<u.X||!(g==1&&Im(o,u)||g==2&&_a(o)))switch(d&&0<d.length&&(u=o.h,u.i=u.i.concat(d)),S){case 1:er(o,5);break;case 4:er(o,10);break;case 3:er(o,6);break;default:er(o,2)}}}function gu(o,u){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*u}function er(o,u){if(o.j.info("Error code "+u),u==2){var d=m(o.fb,o),g=o.Xa;const S=!g;g=new Zn(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||wi(g,"https"),Ai(g),S?mm(g.toString(),d):_m(g.toString(),d)}else gt(2);o.G=0,o.l&&o.l.sa(u),mu(o),lu(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),gt(2)):(this.j.info("Failed to ping google.com"),gt(1))};function mu(o){if(o.G=0,o.ka=[],o.l){const u=Wl(o.h);(u.length!=0||o.i.length!=0)&&(L(o.ka,u),L(o.ka,o.i),o.h.i.length=0,V(o.i),o.i.length=0),o.l.ra()}}function _u(o,u,d){var g=d instanceof Zn?tn(d):new Zn(d);if(g.g!="")u&&(g.g=u+"."+g.g),Ii(g,g.s);else{var S=c.location;g=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;var P=new Zn(null);g&&wi(P,g),u&&(P.g=u),S&&Ii(P,S),d&&(P.l=d),g=P}return d=o.D,u=o.ya,d&&u&&De(g,d,u),De(g,"VER",o.la),Es(o,g),g}function yu(o,u,d){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Fe(new bi({eb:d})):new Fe(o.pa),u.Ha(o.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function vu(){}t=vu.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Di(){}Di.prototype.g=function(o,u){return new It(o,u)};function It(o,u){Z.call(this),this.g=new cu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!$(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!$(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Ar(this)}k(It,Z),It.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},It.prototype.close=function(){ma(this.g)},It.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=Er(o),o=d);u.i.push(new om(u.Ya++,o)),u.G==3&&Pi(u)},It.prototype.N=function(){this.g.l=null,delete this.j,ma(this.g),delete this.g,It.aa.N.call(this)};function Eu(o){oa.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}k(Eu,oa);function Tu(){aa.call(this),this.status=1}k(Tu,aa);function Ar(o){this.g=o}k(Ar,vu),Ar.prototype.ua=function(){se(this.g,"a")},Ar.prototype.ta=function(o){se(this.g,new Eu(o))},Ar.prototype.sa=function(o){se(this.g,new Tu)},Ar.prototype.ra=function(){se(this.g,"b")},Di.prototype.createWebChannel=Di.prototype.g,It.prototype.send=It.prototype.o,It.prototype.open=It.prototype.m,It.prototype.close=It.prototype.close,mp=function(){return new Di},gp=function(){return yi()},pp=Yn,pc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},vi.NO_ERROR=0,vi.TIMEOUT=8,vi.HTTP_ERROR=6,Qi=vi,Ml.COMPLETE="complete",fp=Ml,Ol.EventType=ls,ls.OPEN="a",ls.CLOSE="b",ls.ERROR="c",ls.MESSAGE="d",Z.prototype.listen=Z.prototype.K,Ss=Ol,Fe.prototype.listenOnce=Fe.prototype.L,Fe.prototype.getLastError=Fe.prototype.Ka,Fe.prototype.getLastErrorCode=Fe.prototype.Ba,Fe.prototype.getStatus=Fe.prototype.Z,Fe.prototype.getResponseJson=Fe.prototype.Oa,Fe.prototype.getResponseText=Fe.prototype.oa,Fe.prototype.send=Fe.prototype.ea,Fe.prototype.setWithCredentials=Fe.prototype.Ha,dp=Fe}).apply(typeof Li<"u"?Li:typeof self<"u"?self:typeof window<"u"?window:{});const Rh="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ss="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new Xc("@firebase/firestore");function kr(){return gr.logLevel}function Y(t,...e){if(gr.logLevel<=pe.DEBUG){const n=e.map(tl);gr.debug(`Firestore (${ss}): ${t}`,...n)}}function pn(t,...e){if(gr.logLevel<=pe.ERROR){const n=e.map(tl);gr.error(`Firestore (${ss}): ${t}`,...n)}}function Jr(t,...e){if(gr.logLevel<=pe.WARN){const n=e.map(tl);gr.warn(`Firestore (${ss}): ${t}`,...n)}}function tl(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(t="Unexpected state"){const e=`FIRESTORE (${ss}) INTERNAL ASSERTION FAILED: `+t;throw pn(e),new Error(e)}function Me(t,e){t||le()}function ve(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends _n{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(it.UNAUTHENTICATED))}shutdown(){}}class _w{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class yw{constructor(e){this.t=e,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Me(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Un;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Un,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Un)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Me(typeof r.accessToken=="string"),new _p(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Me(e===null||typeof e=="string"),new it(e)}}class vw{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=it.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Ew{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new vw(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Tw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ww{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Me(this.o===void 0);const r=i=>{i.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,Y("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Me(typeof n.token=="string"),this.R=n.token,new Tw(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iw(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Iw(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ye(t,e){return t<e?-1:t>e?1:0}function Yr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{static now(){return Tt.fromMillis(Date.now())}static fromDate(e){return Tt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Tt(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new te(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new te(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new te(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{static fromTimestamp(e){return new ae(e)}static min(){return new ae(new Tt(0,0))}static max(){return new ae(new Tt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,n,r){n===void 0?n=0:n>e.length&&le(),r===void 0?r=e.length-n:r>e.length-n&&le(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ei.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ei?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),a=n.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Oe extends ei{construct(e,n,r){return new Oe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new te(q.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Oe(n)}static emptyPath(){return new Oe([])}}const Aw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends ei{construct(e,n,r){return new yt(e,n,r)}static isValidIdentifier(e){return Aw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new yt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new te(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new te(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new te(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new te(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new yt(n)}static emptyPath(){return new yt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.path=e}static fromPath(e){return new re(Oe.fromString(e))}static fromName(e){return new re(Oe.fromString(e).popFirst(5))}static empty(){return new re(Oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new Oe(e.slice()))}}function bw(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ae.fromTimestamp(r===1e9?new Tt(n+1,0):new Tt(n,r));return new jn(s,re.empty(),e)}function Rw(t){return new jn(t.readTime,t.key,-1)}class jn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new jn(ae.min(),re.empty(),-1)}static max(){return new jn(ae.max(),re.empty(),-1)}}function Sw(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=re.comparator(t.documentKey,e.documentKey),n!==0?n:ye(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Pw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qo(t){if(t.code!==q.FAILED_PRECONDITION||t.message!==Cw)throw t;Y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&le(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new N((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof N?n:N.resolve(n)}catch(n){return N.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):N.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):N.reject(n)}static resolve(e){return new N((n,r)=>{n(e)})}static reject(e){return new N((n,r)=>{r(e)})}static waitFor(e){return new N((n,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&n()},l=>r(l))}),a=!0,i===s&&n()})}static or(e){let n=N.resolve(!1);for(const r of e)n=n.next(s=>s?N.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new N((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next(f=>{a[h]=f,++c,c===i&&r(a)},f=>s(f))}})}static doWhile(e,n){return new N((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function kw(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function is(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ho.oe=-1;function zo(t){return t==null}function gc(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dw(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Sh(e)),e=Ow(t.get(n),e);return Sh(e)}function Ow(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function Sh(t){return t+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function hi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Nw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n){this.comparator=e,this.root=n||Ye.EMPTY}insert(e,n){return new Be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ye.BLACK,null,null))}remove(e){return new Be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ye.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Mi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Mi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Mi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Mi(this.root,e,this.comparator,!0)}}class Mi{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ye{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ye.RED,this.left=s??Ye.EMPTY,this.right=i??Ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ye(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ye.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw le();const e=this.left.check();if(e!==this.right.check())throw le();return e+(this.isRed()?0:1)}}Ye.EMPTY=null,Ye.RED=!0,Ye.BLACK=!1;Ye.EMPTY=new class{constructor(){this.size=0}get key(){throw le()}get value(){throw le()}get color(){throw le()}get left(){throw le()}get right(){throw le()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Ye(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.comparator=e,this.data=new Be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ph(this.data.getIterator())}getIteratorFrom(e){return new Ph(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ze(this.comparator);return n.data=e,n}}class Ph{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.fields=e,e.sort(yt.comparator)}static empty(){return new Nn([])}unionWith(e){let n=new ze(yt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Nn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Yr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new vp("Invalid base64 string: "+i):i}}(e);return new Ze(n)}static fromUint8Array(e){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new Ze(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ze.EMPTY_BYTE_STRING=new Ze("");const Vw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qn(t){if(Me(!!t),typeof t=="string"){let e=0;const n=Vw.exec(t);if(Me(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ue(t.seconds),nanos:Ue(t.nanos)}}function Ue(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Hn(t){return typeof t=="string"?Ze.fromBase64String(t):Ze.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ko(t){const e=t.mapValue.fields.__previous_value__;return nl(e)?Ko(e):e}function ti(t){const e=qn(t.mapValue.fields.__local_write_time__.timestampValue);return new Tt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(e,n,r,s,i,a,c,l,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}class ni{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ni("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ni&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function zn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?nl(t)?4:Mw(t)?9007199254740991:Lw(t)?10:11:le()}function Zt(t,e){if(t===e)return!0;const n=zn(t);if(n!==zn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ti(t).isEqual(ti(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=qn(s.timestampValue),c=qn(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Hn(s.bytesValue).isEqual(Hn(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ue(s.geoPointValue.latitude)===Ue(i.geoPointValue.latitude)&&Ue(s.geoPointValue.longitude)===Ue(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ue(s.integerValue)===Ue(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Ue(s.doubleValue),c=Ue(i.doubleValue);return a===c?gc(a)===gc(c):isNaN(a)&&isNaN(c)}return!1}(t,e);case 9:return Yr(t.arrayValue.values||[],e.arrayValue.values||[],Zt);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Ch(a)!==Ch(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!Zt(a[l],c[l])))return!1;return!0}(t,e);default:return le()}}function ri(t,e){return(t.values||[]).find(n=>Zt(n,e))!==void 0}function Xr(t,e){if(t===e)return 0;const n=zn(t),r=zn(e);if(n!==r)return ye(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ye(t.booleanValue,e.booleanValue);case 2:return function(i,a){const c=Ue(i.integerValue||i.doubleValue),l=Ue(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return kh(t.timestampValue,e.timestampValue);case 4:return kh(ti(t),ti(e));case 5:return ye(t.stringValue,e.stringValue);case 6:return function(i,a){const c=Hn(i),l=Hn(a);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),l=a.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=ye(c[h],l[h]);if(f!==0)return f}return ye(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,a){const c=ye(Ue(i.latitude),Ue(a.latitude));return c!==0?c:ye(Ue(i.longitude),Ue(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Dh(t.arrayValue,e.arrayValue);case 10:return function(i,a){var c,l,h,f;const p=i.fields||{},m=a.fields||{},E=(c=p.value)===null||c===void 0?void 0:c.arrayValue,k=(l=m.value)===null||l===void 0?void 0:l.arrayValue,V=ye(((h=E==null?void 0:E.values)===null||h===void 0?void 0:h.length)||0,((f=k==null?void 0:k.values)===null||f===void 0?void 0:f.length)||0);return V!==0?V:Dh(E,k)}(t.mapValue,e.mapValue);case 11:return function(i,a){if(i===Fi.mapValue&&a===Fi.mapValue)return 0;if(i===Fi.mapValue)return 1;if(a===Fi.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=a.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const m=ye(l[p],f[p]);if(m!==0)return m;const E=Xr(c[l[p]],h[f[p]]);if(E!==0)return E}return ye(l.length,f.length)}(t.mapValue,e.mapValue);default:throw le()}}function kh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ye(t,e);const n=qn(t),r=qn(e),s=ye(n.seconds,r.seconds);return s!==0?s:ye(n.nanos,r.nanos)}function Dh(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Xr(n[s],r[s]);if(i)return i}return ye(n.length,r.length)}function Zr(t){return mc(t)}function mc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=qn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Hn(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return re.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=mc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${mc(n.fields[a])}`;return s+"}"}(t.mapValue):le()}function Ji(t){switch(zn(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ko(t);return e?16+Ji(e):16;case 5:return 2*t.stringValue.length;case 6:return Hn(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ji(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return hi(r.fields,(i,a)=>{s+=i.length+Ji(a)}),s}(t.mapValue);default:throw le()}}function _c(t){return!!t&&"integerValue"in t}function rl(t){return!!t&&"arrayValue"in t}function Oh(t){return!!t&&"nullValue"in t}function Nh(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ba(t){return!!t&&"mapValue"in t}function Lw(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function $s(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return hi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=$s(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=$s(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Mw(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.value=e}static empty(){return new zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ba(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=$s(n)}setAll(e){let n=yt.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}a?r[c.lastSegment()]=$s(a):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ba(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Zt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ba(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){hi(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new zt($s(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,n,r,s,i,a,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new ct(e,0,ae.min(),ae.min(),ae.min(),zt.empty(),0)}static newFoundDocument(e,n,r,s){return new ct(e,1,n,ae.min(),r,s,0)}static newNoDocument(e,n){return new ct(e,2,n,ae.min(),ae.min(),zt.empty(),0)}static newUnknownDocument(e,n){return new ct(e,3,n,ae.min(),ae.min(),zt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,n){this.position=e,this.inclusive=n}}function Vh(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],a=t.position[s];if(i.field.isKeyField()?r=re.comparator(re.fromName(a.referenceValue),n.key):r=Xr(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function xh(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Zt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,n="asc"){this.field=e,this.dir=n}}function Fw(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{}class He extends Ep{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Bw(e,n,r):n==="array-contains"?new qw(e,r):n==="in"?new Hw(e,r):n==="not-in"?new zw(e,r):n==="array-contains-any"?new Kw(e,r):new He(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new $w(e,r):new jw(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Xr(n,this.value)):n!==null&&zn(this.value)===zn(n)&&this.matchesComparison(Xr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return le()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class en extends Ep{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new en(e,n)}matches(e){return Tp(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Tp(t){return t.op==="and"}function wp(t){return Uw(t)&&Tp(t)}function Uw(t){for(const e of t.filters)if(e instanceof en)return!1;return!0}function yc(t){if(t instanceof He)return t.field.canonicalString()+t.op.toString()+Zr(t.value);if(wp(t))return t.filters.map(e=>yc(e)).join(",");{const e=t.filters.map(n=>yc(n)).join(",");return`${t.op}(${e})`}}function Ip(t,e){return t instanceof He?function(r,s){return s instanceof He&&r.op===s.op&&r.field.isEqual(s.field)&&Zt(r.value,s.value)}(t,e):t instanceof en?function(r,s){return s instanceof en&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&Ip(a,s.filters[c]),!0):!1}(t,e):void le()}function Ap(t){return t instanceof He?function(n){return`${n.field.canonicalString()} ${n.op} ${Zr(n.value)}`}(t):t instanceof en?function(n){return n.op.toString()+" {"+n.getFilters().map(Ap).join(" ,")+"}"}(t):"Filter"}class Bw extends He{constructor(e,n,r){super(e,n,r),this.key=re.fromName(r.referenceValue)}matches(e){const n=re.comparator(e.key,this.key);return this.matchesComparison(n)}}class $w extends He{constructor(e,n){super(e,"in",n),this.keys=bp("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class jw extends He{constructor(e,n){super(e,"not-in",n),this.keys=bp("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function bp(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>re.fromName(r.referenceValue))}class qw extends He{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return rl(n)&&ri(n.arrayValue,this.value)}}class Hw extends He{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ri(this.value.arrayValue,n)}}class zw extends He{constructor(e,n){super(e,"not-in",n)}matches(e){if(ri(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ri(this.value.arrayValue,n)}}class Kw extends He{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!rl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ri(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(e,n=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.ue=null}}function Lh(t,e=null,n=[],r=[],s=null,i=null,a=null){return new Ww(t,e,n,r,s,i,a)}function sl(t){const e=ve(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>yc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),zo(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Zr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Zr(r)).join(",")),e.ue=n}return e.ue}function il(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Fw(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Ip(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!xh(t.startAt,e.startAt)&&xh(t.endAt,e.endAt)}function vc(t){return re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,n=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Gw(t,e,n,r,s,i,a,c){return new Wo(t,e,n,r,s,i,a,c)}function ol(t){return new Wo(t)}function Mh(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Qw(t){return t.collectionGroup!==null}function js(t){const e=ve(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new ze(yt.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new _o(i,r))}),n.has(yt.keyField().canonicalString())||e.ce.push(new _o(yt.keyField(),r))}return e.ce}function Gt(t){const e=ve(t);return e.le||(e.le=Jw(e,js(t))),e.le}function Jw(t,e){if(t.limitType==="F")return Lh(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new _o(s.field,i)});const n=t.endAt?new mo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new mo(t.startAt.position,t.startAt.inclusive):null;return Lh(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ec(t,e,n){return new Wo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Go(t,e){return il(Gt(t),Gt(e))&&t.limitType===e.limitType}function Rp(t){return`${sl(Gt(t))}|lt:${t.limitType}`}function Dr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Ap(s)).join(", ")}]`),zo(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Zr(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Zr(s)).join(",")),`Target(${r})`}(Gt(t))}; limitType=${t.limitType})`}function Qo(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):re.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of js(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(a,c,l){const h=Vh(a,c,l);return a.inclusive?h<=0:h<0}(r.startAt,js(r),s)||r.endAt&&!function(a,c,l){const h=Vh(a,c,l);return a.inclusive?h>=0:h>0}(r.endAt,js(r),s))}(t,e)}function Yw(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Sp(t){return(e,n)=>{let r=!1;for(const s of js(t)){const i=Xw(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Xw(t,e,n){const r=t.field.isKeyField()?re.comparator(e.key,n.key):function(i,a,c){const l=a.data.field(i),h=c.data.field(i);return l!==null&&h!==null?Xr(l,h):le()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return le()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){hi(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Nw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw=new Be(re.comparator);function Kn(){return Zw}const Cp=new Be(re.comparator);function Cs(...t){let e=Cp;for(const n of t)e=e.insert(n.key,n);return e}function eI(t){let e=Cp;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function or(){return qs()}function Pp(){return qs()}function qs(){return new yr(t=>t.toString(),(t,e)=>t.isEqual(e))}const tI=new ze(re.comparator);function Ee(...t){let e=tI;for(const n of t)e=e.add(n);return e}const nI=new ze(ye);function rI(){return nI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:gc(e)?"-0":e}}function iI(t){return{integerValue:""+t}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(){this._=void 0}}function oI(t,e,n){return t instanceof Tc?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&nl(i)&&(i=Ko(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(n,e):t instanceof yo?kp(t,e):t instanceof vo?Dp(t,e):function(s,i){const a=cI(s,i),c=Fh(a)+Fh(s.Pe);return _c(a)&&_c(s.Pe)?iI(c):sI(s.serializer,c)}(t,e)}function aI(t,e,n){return t instanceof yo?kp(t,e):t instanceof vo?Dp(t,e):n}function cI(t,e){return t instanceof wc?function(r){return _c(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Tc extends Jo{}class yo extends Jo{constructor(e){super(),this.elements=e}}function kp(t,e){const n=Op(e);for(const r of t.elements)n.some(s=>Zt(s,r))||n.push(r);return{arrayValue:{values:n}}}class vo extends Jo{constructor(e){super(),this.elements=e}}function Dp(t,e){let n=Op(e);for(const r of t.elements)n=n.filter(s=>!Zt(s,r));return{arrayValue:{values:n}}}class wc extends Jo{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Fh(t){return Ue(t.integerValue||t.doubleValue)}function Op(t){return rl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function lI(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof yo&&s instanceof yo||r instanceof vo&&s instanceof vo?Yr(r.elements,s.elements,Zt):r instanceof wc&&s instanceof wc?Zt(r.Pe,s.Pe):r instanceof Tc&&s instanceof Tc}(t.transform,e.transform)}class hr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new hr}static exists(e){return new hr(void 0,e)}static updateTime(e){return new hr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Yi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class al{}function Np(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new hI(t.key,hr.none()):new cl(t.key,t.data,hr.none());{const n=t.data,r=zt.empty();let s=new ze(yt.comparator);for(let i of e.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Yo(t.key,r,new Nn(s.toArray()),hr.none())}}function uI(t,e,n){t instanceof cl?function(s,i,a){const c=s.value.clone(),l=Bh(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(t,e,n):t instanceof Yo?function(s,i,a){if(!Yi(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=Bh(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(Vp(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function Hs(t,e,n,r){return t instanceof cl?function(i,a,c,l){if(!Yi(i.precondition,a))return c;const h=i.value.clone(),f=$h(i.fieldTransforms,l,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Yo?function(i,a,c,l){if(!Yi(i.precondition,a))return c;const h=$h(i.fieldTransforms,l,a),f=a.data;return f.setAll(Vp(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,a,c){return Yi(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(t,e,n)}function Uh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Yr(r,s,(i,a)=>lI(i,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class cl extends al{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Yo extends al{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Vp(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Bh(t,e,n){const r=new Map;Me(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,aI(a,c,n[s]))}return r}function $h(t,e,n){const r=new Map;for(const s of t){const i=s.transform,a=n.data.field(s.field);r.set(s.field,oI(i,a,e))}return r}class hI extends al{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&uI(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Hs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Hs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Pp();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=n.has(s.key)?null:c;const l=Np(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(ae.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ee())}isEqual(e){return this.batchId===e.batchId&&Yr(this.mutations,e.mutations,(n,r)=>Uh(n,r))&&Yr(this.baseMutations,e.baseMutations,(n,r)=>Uh(n,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je,_e;function xp(t){if(t===void 0)return pn("GRPC error has no .code"),q.UNKNOWN;switch(t){case je.OK:return q.OK;case je.CANCELLED:return q.CANCELLED;case je.UNKNOWN:return q.UNKNOWN;case je.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case je.INTERNAL:return q.INTERNAL;case je.UNAVAILABLE:return q.UNAVAILABLE;case je.UNAUTHENTICATED:return q.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case je.NOT_FOUND:return q.NOT_FOUND;case je.ALREADY_EXISTS:return q.ALREADY_EXISTS;case je.PERMISSION_DENIED:return q.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case je.ABORTED:return q.ABORTED;case je.OUT_OF_RANGE:return q.OUT_OF_RANGE;case je.UNIMPLEMENTED:return q.UNIMPLEMENTED;case je.DATA_LOSS:return q.DATA_LOSS;default:return le()}}(_e=je||(je={}))[_e.OK=0]="OK",_e[_e.CANCELLED=1]="CANCELLED",_e[_e.UNKNOWN=2]="UNKNOWN",_e[_e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_e[_e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_e[_e.NOT_FOUND=5]="NOT_FOUND",_e[_e.ALREADY_EXISTS=6]="ALREADY_EXISTS",_e[_e.PERMISSION_DENIED=7]="PERMISSION_DENIED",_e[_e.UNAUTHENTICATED=16]="UNAUTHENTICATED",_e[_e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_e[_e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_e[_e.ABORTED=10]="ABORTED",_e[_e.OUT_OF_RANGE=11]="OUT_OF_RANGE",_e[_e.UNIMPLEMENTED=12]="UNIMPLEMENTED",_e[_e.INTERNAL=13]="INTERNAL",_e[_e.UNAVAILABLE=14]="UNAVAILABLE",_e[_e.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gI(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI=new ur([4294967295,4294967295],0);function jh(t){const e=gI().encode(t),n=new hp;return n.update(e),new Uint8Array(n.digest())}function qh(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ur([n,r],0),new ur([s,i],0)]}class ll{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ps(`Invalid padding: ${n}`);if(r<0)throw new Ps(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ps(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ps(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=ur.fromNumber(this.Te)}Ee(e,n,r){let s=e.add(n.multiply(ur.fromNumber(r)));return s.compare(mI)===1&&(s=new ur([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=jh(e),[r,s]=qh(n);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new ll(i,s,n);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Te===0)return;const n=jh(e),[r,s]=qh(n);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ps extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,di.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Xo(ae.min(),s,new Be(ye),Kn(),Ee())}}class di{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new di(r,n,Ee(),Ee(),Ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Lp{constructor(e,n){this.targetId=e,this.me=n}}class Mp{constructor(e,n,r=Ze.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Hh{constructor(){this.fe=0,this.ge=zh(),this.pe=Ze.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ee(),n=Ee(),r=Ee();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:le()}}),new di(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=zh()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Me(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class _I{constructor(e){this.Le=e,this.Be=new Map,this.ke=Kn(),this.qe=Ui(),this.Qe=Ui(),this.Ke=new Be(ye)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.je(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.De(e.resumeToken));break;default:le()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.me.count,s=this.Ye(n);if(s){const i=s.target;if(vc(i))if(r===0){const a=new re(i.path);this.We(n,a,ct.newNoDocument(a,ae.min()))}else Me(r===1);else{const a=this.Ze(n);if(a!==r){const c=this.Xe(e),l=c?this.et(c,e,a):1;if(l!==0){this.He(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,h)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,c;try{a=Hn(r).toUint8Array()}catch(l){if(l instanceof vp)return Jr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new ll(a,s,i)}catch(l){return Jr(l instanceof Ps?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Te===0?null:c}et(e,n,r){return n.me.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const a=this.Le.nt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.Be.forEach((i,a)=>{const c=this.Ye(a);if(c){if(i.current&&vc(c.target)){const l=new re(c.target.path);this.st(l).has(a)||this.ot(a,l)||this.We(a,l,ct.newNoDocument(l,e))}i.be&&(n.set(a,i.ve()),i.Ce())}});let r=Ee();this.Qe.forEach((i,a)=>{let c=!0;a.forEachWhile(l=>{const h=this.Ye(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new Xo(e,n,this.Ke,this.ke,r);return this.ke=Kn(),this.qe=Ui(),this.Qe=Ui(),this.Ke=new Be(ye),s}Ue(e,n){if(!this.je(e))return;const r=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.ot(e,n)?s.Fe(n,1):s.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Be.get(e);return n||(n=new Hh,this.Be.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new ze(ye),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ze(ye),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||Y("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Hh),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Ui(){return new Be(re.comparator)}function zh(){return new Be(re.comparator)}const yI={asc:"ASCENDING",desc:"DESCENDING"},vI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},EI={and:"AND",or:"OR"};class TI{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ic(t,e){return t.useProto3Json||zo(e)?e:{value:e}}function wI(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function II(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function $r(t){return Me(!!t),ae.fromTimestamp(function(n){const r=qn(n);return new Tt(r.seconds,r.nanos)}(t))}function AI(t,e){return Ac(t,e).canonicalString()}function Ac(t,e){const n=function(s){return new Oe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Fp(t){const e=Oe.fromString(t);return Me(qp(e)),e}function $a(t,e){const n=Fp(e);if(n.get(1)!==t.databaseId.projectId)throw new te(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new te(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new re(Bp(n))}function Up(t,e){return AI(t.databaseId,e)}function bI(t){const e=Fp(t);return e.length===4?Oe.emptyPath():Bp(e)}function Kh(t){return new Oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Bp(t){return Me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function RI(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:le()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(Me(f===void 0||typeof f=="string"),Ze.fromBase64String(f||"")):(Me(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Ze.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(h){const f=h.code===void 0?q.UNKNOWN:xp(h.code);return new te(f,h.message||"")}(a);n=new Mp(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=$a(t,r.document.name),i=$r(r.document.updateTime),a=r.document.createTime?$r(r.document.createTime):ae.min(),c=new zt({mapValue:{fields:r.document.fields}}),l=ct.newFoundDocument(s,i,a,c),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Xi(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=$a(t,r.document),i=r.readTime?$r(r.readTime):ae.min(),a=ct.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Xi([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=$a(t,r.document),i=r.removedTargetIds||[];n=new Xi([],i,s,null)}else{if(!("filter"in e))return le();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new pI(s,i),c=r.targetId;n=new Lp(c,a)}}return n}function SI(t,e){return{documents:[Up(t,e.path)]}}function CI(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Up(t,s);const i=function(h){if(h.length!==0)return jp(en.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(m){return{field:Or(m.field),direction:DI(m.dir)}}(f))}(e.orderBy);a&&(n.structuredQuery.orderBy=a);const c=Ic(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ct:n,parent:s}}function PI(t){let e=bI(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Me(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const m=$p(p);return m instanceof en&&wp(m)?m.getFilters():[m]}(n.where));let a=[];n.orderBy&&(a=function(p){return p.map(m=>function(k){return new _o(Nr(k.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(m))}(n.orderBy));let c=null;n.limit&&(c=function(p){let m;return m=typeof p=="object"?p.value:p,zo(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(p){const m=!!p.before,E=p.values||[];return new mo(E,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,E=p.values||[];return new mo(E,m)}(n.endAt)),Gw(e,s,a,i,c,"F",l,h)}function kI(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return le()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function $p(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Nr(n.unaryFilter.field);return He.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Nr(n.unaryFilter.field);return He.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Nr(n.unaryFilter.field);return He.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Nr(n.unaryFilter.field);return He.create(a,"!=",{nullValue:"NULL_VALUE"});default:return le()}}(t):t.fieldFilter!==void 0?function(n){return He.create(Nr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return le()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return en.create(n.compositeFilter.filters.map(r=>$p(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return le()}}(n.compositeFilter.op))}(t):le()}function DI(t){return yI[t]}function OI(t){return vI[t]}function NI(t){return EI[t]}function Or(t){return{fieldPath:t.canonicalString()}}function Nr(t){return yt.fromServerFormat(t.fieldPath)}function jp(t){return t instanceof He?function(n){if(n.op==="=="){if(Nh(n.value))return{unaryFilter:{field:Or(n.field),op:"IS_NAN"}};if(Oh(n.value))return{unaryFilter:{field:Or(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Nh(n.value))return{unaryFilter:{field:Or(n.field),op:"IS_NOT_NAN"}};if(Oh(n.value))return{unaryFilter:{field:Or(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Or(n.field),op:OI(n.op),value:n.value}}}(t):t instanceof en?function(n){const r=n.getFilters().map(s=>jp(s));return r.length===1?r[0]:{compositeFilter:{op:NI(n.op),filters:r}}}(t):le()}function qp(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e,n,r,s,i=ae.min(),a=ae.min(),c=Ze.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Vn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Vn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Vn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Vn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e){this.ht=e}}function xI(t){const e=PI({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ec(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(){this.ln=new MI}addToCollectionParentIndex(e,n){return this.ln.add(n),N.resolve()}getCollectionParents(e,n){return N.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return N.resolve()}deleteFieldIndex(e,n){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,n){return N.resolve()}getDocumentsMatchingTarget(e,n){return N.resolve(null)}getIndexType(e,n){return N.resolve(0)}getFieldIndexes(e,n){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,n){return N.resolve(jn.min())}getMinOffsetFromCollectionGroup(e,n){return N.resolve(jn.min())}updateCollectionGroup(e,n,r){return N.resolve()}updateIndexEntries(e,n){return N.resolve()}}class MI{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ze(Oe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ze(Oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Et{static withCacheSize(e){return new Et(e,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Et.DEFAULT_COLLECTION_PERCENTILE=10,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Et.DEFAULT=new Et(41943040,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Et.DISABLED=new Et(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new es(0)}static Qn(){return new es(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh([t,e],[n,r]){const s=ye(t,n);return s===0?ye(e,r):s}class FI{constructor(e){this.Gn=e,this.buffer=new ze(Gh),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Gh(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class UI{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){Y("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){is(n)?Y("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await qo(n)}await this.Yn(3e5)})}}class BI{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return N.resolve(Ho.oe);const r=new FI(n);return this.Zn.forEachTarget(e,s=>r.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>r.Hn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Y("LruGarbageCollector","Garbage collection skipped; disabled"),N.resolve(Wh)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Y("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Wh):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let r,s,i,a,c,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(Y("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),kr()<=pe.DEBUG&&Y("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),N.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function $I(t,e){return new BI(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(){this.changes=new yr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ct.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?N.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Hs(r.mutation,s,Nn.empty(),Tt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ee()){const s=or();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let a=Cs();return i.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=or();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ee()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{n.set(a,c)})})}computeViews(e,n,r,s){let i=Kn();const a=qs(),c=function(){return qs()}();return n.forEach((l,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Yo)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Hs(f.mutation,h,f.mutation.getFieldMask(),Tt.now())):a.set(h.key,Nn.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,f)=>a.set(h,f)),n.forEach((h,f)=>{var p;return c.set(h,new qI(f,(p=a.get(h))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=qs();let s=new Be((a,c)=>a-c),i=Ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const c of a)c.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let f=r.get(l)||Nn.empty();f=c.applyToLocalView(h,f),r.set(l,f);const p=(s.get(c.batchId)||Ee()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,p=Pp();f.forEach(m=>{if(!i.has(m)){const E=Np(n.get(m),r.get(m));E!==null&&p.set(m,E),i=i.add(m)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return N.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(a){return re.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Qw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):N.resolve(or());let c=-1,l=i;return a.next(h=>N.forEach(h,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?N.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{l=l.insert(f,m)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,Ee())).next(f=>({batchId:c,changes:eI(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new re(n)).next(r=>{let s=Cs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let a=Cs();return this.indexManager.getCollectionParents(e,i).next(c=>N.forEach(c,l=>{const h=function(p,m){return new Wo(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,m)=>{a=a.insert(p,m)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(a=>{i.forEach((l,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,ct.newInvalidDocument(f)))});let c=Cs();return a.forEach((l,h)=>{const f=i.get(l);f!==void 0&&Hs(f.mutation,h,Nn.empty(),Tt.now()),Qo(n,h)&&(c=c.insert(l,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return N.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:$r(s.createTime)}}(n)),N.resolve()}getNamedQuery(e,n){return N.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(s){return{name:s.name,query:xI(s.bundledQuery),readTime:$r(s.readTime)}}(n)),N.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(){this.overlays=new Be(re.comparator),this.Er=new Map}getOverlay(e,n){return N.resolve(this.overlays.get(n))}getOverlays(e,n){const r=or();return N.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Tt(e,n,i)}),N.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Er.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Er.delete(r)),N.resolve()}getOverlaysForCollection(e,n,r){const s=or(),i=n.length+1,a=new re(n.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return N.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Be((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=or(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=or(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return N.resolve(c)}Tt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Er.get(s.largestBatchId).delete(r.key);this.Er.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new fI(n,r));let i=this.Er.get(n);i===void 0&&(i=Ee(),this.Er.set(n,i)),this.Er.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(){this.sessionToken=Ze.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,N.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(){this.dr=new ze(We.Ar),this.Rr=new ze(We.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,n){const r=new We(e,n);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gr(new We(e,n))}pr(e,n){e.forEach(r=>this.removeReference(r,n))}yr(e){const n=new re(new Oe([])),r=new We(n,e),s=new We(n,e+1),i=[];return this.Rr.forEachInRange([r,s],a=>{this.gr(a),i.push(a.key)}),i}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new re(new Oe([])),r=new We(n,e),s=new We(n,e+1);let i=Ee();return this.Rr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const n=new We(e,0),r=this.dr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class We{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return re.comparator(e.key,n.key)||ye(e.br,n.br)}static Vr(e,n){return ye(e.br,n.br)||re.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new ze(We.Ar)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new dI(i,n,r,s);this.mutationQueue.push(a);for(const c of s)this.vr=this.vr.add(new We(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return N.resolve(a)}lookupMutationBatch(e,n){return N.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Fr(r),i=s<0?0:s;return N.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new We(n,0),s=new We(n,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([r,s],a=>{const c=this.Cr(a.br);i.push(c)}),N.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ze(ye);return n.forEach(s=>{const i=new We(s,0),a=new We(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,a],c=>{r=r.add(c.br)})}),N.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;re.isDocumentKey(i)||(i=i.child(""));const a=new We(new re(i),0);let c=new ze(ye);return this.vr.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.br)),!0)},a),N.resolve(this.Mr(c))}Mr(e){const n=[];return e.forEach(r=>{const s=this.Cr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Me(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return N.forEach(n.mutations,s=>{const i=new We(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,n){const r=new We(n,0),s=this.vr.firstAfterOrEqual(r);return N.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e){this.Nr=e,this.docs=function(){return new Be(re.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.Nr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return N.resolve(r?r.document.mutableCopy():ct.newInvalidDocument(n))}getEntries(e,n){let r=Kn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ct.newInvalidDocument(s))}),N.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Kn();const a=n.path,c=new re(a.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||Sw(Rw(f),r)<=0||(s.has(f.key)||Qo(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return N.resolve(i)}getAllFromCollectionGroup(e,n,r,s){le()}Lr(e,n){return N.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new JI(this)}getSize(e){return N.resolve(this.size)}}class JI extends jI{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.hr.addEntry(e,s)):this.hr.removeEntry(r)}),N.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e){this.persistence=e,this.Br=new yr(n=>sl(n),il),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.kr=0,this.qr=new ul,this.targetCount=0,this.Qr=es.qn()}forEachTarget(e,n){return this.Br.forEach((r,s)=>n(s)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.kr&&(this.kr=n),N.resolve()}Un(e){this.Br.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new es(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,N.resolve()}updateTargetData(e,n){return this.Un(n),N.resolve()}removeTargetData(e,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Br.forEach((a,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Br.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),N.waitFor(i).next(()=>s)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,n){const r=this.Br.get(n)||null;return N.resolve(r)}addMatchingKeys(e,n,r){return this.qr.mr(n,r),N.resolve()}removeMatchingKeys(e,n,r){this.qr.pr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),N.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),N.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qr.Sr(n);return N.resolve(r)}containsKey(e,n){return N.resolve(this.qr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(e,n){this.Kr={},this.overlays={},this.$r=new Ho(0),this.Ur=!1,this.Ur=!0,this.Wr=new WI,this.referenceDelegate=e(this),this.Gr=new YI(this),this.indexManager=new LI,this.remoteDocumentCache=function(s){return new QI(s)}(r=>this.referenceDelegate.zr(r)),this.serializer=new VI(n),this.jr=new zI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new KI,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Kr[e.toKey()];return r||(r=new GI(n,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,r){Y("MemoryPersistence","Starting transaction:",e);const s=new XI(this.$r.next());return this.referenceDelegate.Hr(),r(s).next(i=>this.referenceDelegate.Jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Yr(e,n){return N.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,n)))}}class XI extends Pw{constructor(e){super(),this.currentSequenceNumber=e}}class hl{constructor(e){this.persistence=e,this.Zr=new ul,this.Xr=null}static ei(e){return new hl(e)}get ti(){if(this.Xr)return this.Xr;throw le()}addReference(e,n,r){return this.Zr.addReference(r,n),this.ti.delete(r.toString()),N.resolve()}removeReference(e,n,r){return this.Zr.removeReference(r,n),this.ti.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),N.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(s=>this.ti.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ti.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.ti,r=>{const s=re.fromPath(r);return this.ni(e,s).next(i=>{i||n.removeEntry(s,ae.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(r=>{r?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return N.or([()=>N.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class Eo{constructor(e,n){this.persistence=e,this.ri=new yr(r=>Dw(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=$I(this,n)}static ei(e,n){return new Eo(e,n)}Hr(){}Jr(e){return N.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}nr(e){let n=0;return this.er(e,r=>{n++}).next(()=>n)}er(e,n){return N.forEach(this.ri,(r,s)=>this.ir(e,r,s).next(i=>i?N.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Lr(e,a=>this.ir(e,a,n).next(c=>{c||(r++,i.removeEntry(a,ae.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),N.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),N.resolve()}removeReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),N.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),N.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ji(e.data.value)),n}ir(e,n,r){return N.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.ri.get(n);return N.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Wi=r,this.Gi=s}static zi(e,n){let r=Ee(),s=Ee();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new dl(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return ZE()?8:kw(dt())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Xi(e,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.es(e,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new ZI;return this.ts(e,n,a).next(c=>{if(i.result=c,this.Hi)return this.ns(e,n,a,c.size)})}).next(()=>i.result)}ns(e,n,r,s){return r.documentReadCount<this.Ji?(kr()<=pe.DEBUG&&Y("QueryEngine","SDK will not create cache indexes for query:",Dr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),N.resolve()):(kr()<=pe.DEBUG&&Y("QueryEngine","Query:",Dr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Yi*s?(kr()<=pe.DEBUG&&Y("QueryEngine","The SDK decides to create cache indexes for query:",Dr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Gt(n))):N.resolve())}Xi(e,n){if(Mh(n))return N.resolve(null);let r=Gt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ec(n,null,"F"),r=Gt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=Ee(...i);return this.Zi.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.rs(n,c);return this.ss(n,h,a,l.readTime)?this.Xi(e,Ec(n,null,"F")):this.os(e,h,n,l)}))})))}es(e,n,r,s){return Mh(n)||s.isEqual(ae.min())?N.resolve(null):this.Zi.getDocuments(e,r).next(i=>{const a=this.rs(n,i);return this.ss(n,a,r,s)?N.resolve(null):(kr()<=pe.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Dr(n)),this.os(e,a,n,bw(s,-1)).next(c=>c))})}rs(e,n){let r=new ze(Sp(e));return n.forEach((s,i)=>{Qo(e,i)&&(r=r.add(i))}),r}ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ts(e,n,r){return kr()<=pe.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",Dr(n)),this.Zi.getDocumentsMatchingQuery(e,n,jn.min(),r)}os(e,n,r,s){return this.Zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(e,n,r,s){this.persistence=e,this._s=n,this.serializer=s,this.us=new Be(ye),this.cs=new yr(i=>sl(i),il),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new HI(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function n0(t,e,n,r){return new t0(t,e,n,r)}async function zp(t,e){const n=ve(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ps(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let l=Ee();for(const h of s){a.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(h=>({Ts:h,removedBatchIds:a,addedBatchIds:c}))})})}function Kp(t){const e=ve(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function r0(t,e){const n=ve(t),r=e.snapshotVersion;let s=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=n.hs.newChangeBuffer({trackRemovals:!0});s=n.us;const c=[];e.targetChanges.forEach((f,p)=>{const m=s.get(p);if(!m)return;c.push(n.Gr.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Gr.addMatchingKeys(i,f.addedDocuments,p)));let E=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?E=E.withResumeToken(Ze.EMPTY_BYTE_STRING,ae.min()).withLastLimboFreeSnapshotVersion(ae.min()):f.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(f.resumeToken,r)),s=s.insert(p,E),function(V,L,W){return V.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=3e8?!0:W.addedDocuments.size+W.modifiedDocuments.size+W.removedDocuments.size>0}(m,E,f)&&c.push(n.Gr.updateTargetData(i,E))});let l=Kn(),h=Ee();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(s0(i,a,e.documentUpdates).next(f=>{l=f.Is,h=f.Es})),!r.isEqual(ae.min())){const f=n.Gr.getLastRemoteSnapshotVersion(i).next(p=>n.Gr.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return N.waitFor(c).next(()=>a.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(n.us=s,i))}function s0(t,e,n){let r=Ee(),s=Ee();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let a=Kn();return n.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(ae.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):Y("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{Is:a,Es:s}})}function i0(t,e){const n=ve(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Gr.getTargetData(r,e).next(i=>i?(s=i,N.resolve(s)):n.Gr.allocateTargetId(r).next(a=>(s=new Vn(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.Gr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.us.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.us=n.us.insert(r.targetId,r),n.cs.set(e,r.targetId)),r})}async function bc(t,e,n){const r=ve(t),s=r.us.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!is(a))throw a;Y("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.us=r.us.remove(e),r.cs.delete(s.target)}function Qh(t,e,n){const r=ve(t);let s=ae.min(),i=Ee();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,h,f){const p=ve(l),m=p.cs.get(f);return m!==void 0?N.resolve(p.us.get(m)):p.Gr.getTargetData(h,f)}(r,a,Gt(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(a,c.targetId).next(l=>{i=l})}).next(()=>r._s.getDocumentsMatchingQuery(a,e,n?s:ae.min(),n?i:Ee())).next(c=>(o0(r,Yw(e),c),{documents:c,ds:i})))}function o0(t,e,n){let r=t.ls.get(e)||ae.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ls.set(e,r)}class Jh{constructor(){this.activeTargetIds=rI()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class a0{constructor(){this._o=new Jh,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,r){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Jh,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){Y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){Y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bi=null;function ja(){return Bi===null?Bi=function(){return 268435456+Math.round(2147483648*Math.random())}():Bi++,"0x"+Bi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st="WebChannelConnection";class h0 extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+n.host,this.Mo=`projects/${s}/databases/${i}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Oo(n,r,s,i,a){const c=ja(),l=this.No(n,r.toUriEncodedString());Y("RestConnection",`Sending RPC '${n}' ${c}:`,l,s);const h={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(h,i,a),this.Bo(n,l,h,s).then(f=>(Y("RestConnection",`Received RPC '${n}' ${c}: `,f),f),f=>{throw Jr("RestConnection",`RPC '${n}' ${c} failed with error: `,f,"url: ",l,"request:",s),f})}ko(n,r,s,i,a,c){return this.Oo(n,r,s,i,a)}Lo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ss}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>n[a]=i),s&&s.headers.forEach((i,a)=>n[a]=i)}No(n,r){const s=l0[n];return`${this.Fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,n,r,s){const i=ja();return new Promise((a,c)=>{const l=new dp;l.setWithCredentials(!0),l.listenOnce(fp.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Qi.NO_ERROR:const f=l.getResponseJson();Y(st,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),a(f);break;case Qi.TIMEOUT:Y(st,`RPC '${e}' ${i} timed out`),c(new te(q.DEADLINE_EXCEEDED,"Request time out"));break;case Qi.HTTP_ERROR:const p=l.getStatus();if(Y(st,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const E=m==null?void 0:m.error;if(E&&E.status&&E.message){const k=function(L){const W=L.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(W)>=0?W:q.UNKNOWN}(E.status);c(new te(k,E.message))}else c(new te(q.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new te(q.UNAVAILABLE,"Connection failed."));break;default:le()}}finally{Y(st,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);Y(st,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",h,r,15)})}qo(e,n,r){const s=ja(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=mp(),c=gp(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Lo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");Y(st,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=a.createWebChannel(f,l);let m=!1,E=!1;const k=new u0({Eo:L=>{E?Y(st,`Not sending because RPC '${e}' stream ${s} is closed:`,L):(m||(Y(st,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),Y(st,`RPC '${e}' stream ${s} sending:`,L),p.send(L))},Ao:()=>p.close()}),V=(L,W,$)=>{L.listen(W,z=>{try{$(z)}catch(H){setTimeout(()=>{throw H},0)}})};return V(p,Ss.EventType.OPEN,()=>{E||(Y(st,`RPC '${e}' stream ${s} transport opened.`),k.So())}),V(p,Ss.EventType.CLOSE,()=>{E||(E=!0,Y(st,`RPC '${e}' stream ${s} transport closed`),k.Do())}),V(p,Ss.EventType.ERROR,L=>{E||(E=!0,Jr(st,`RPC '${e}' stream ${s} transport errored:`,L),k.Do(new te(q.UNAVAILABLE,"The operation could not be completed")))}),V(p,Ss.EventType.MESSAGE,L=>{var W;if(!E){const $=L.data[0];Me(!!$);const z=$,H=(z==null?void 0:z.error)||((W=z[0])===null||W===void 0?void 0:W.error);if(H){Y(st,`RPC '${e}' stream ${s} received error:`,H);const he=H.status;let de=function(w){const A=je[w];if(A!==void 0)return xp(A)}(he),I=H.message;de===void 0&&(de=q.INTERNAL,I="Unknown error status: "+he+" with message "+H.message),E=!0,k.Do(new te(de,I)),p.close()}else Y(st,`RPC '${e}' stream ${s} received:`,$),k.vo($)}}),V(c,pp.STAT_EVENT,L=>{L.stat===pc.PROXY?Y(st,`RPC '${e}' stream ${s} detected buffering proxy`):L.stat===pc.NOPROXY&&Y(st,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.bo()},0),k}}function qa(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wp(t){return new TI(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(e,n,r=1e3,s=1.5,i=6e4){this.li=e,this.timerId=n,this.Qo=r,this.Ko=s,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),s=Math.max(0,n-r);s>0&&Y("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(e,n,r,s,i,a,c,l){this.li=e,this.Yo=r,this.Zo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Gp(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===q.RESOURCE_EXHAUSTED?(pn(n.toString()),pn("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Xo===n&&this.I_(r,s)},r=>{e(()=>{const s=new te(q.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(s)})})}I_(e,n){const r=this.T_(this.Xo);this.stream=this.d_(e,n),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{r(()=>this.E_(s))}),this.stream.onMessage(s=>{r(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return Y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(Y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class f0 extends d0{constructor(e,n,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}d_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=RI(this.serializer,e),r=function(i){if(!("targetChange"in i))return ae.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?ae.min():a.readTime?$r(a.readTime):ae.min()}(e);return this.listener.R_(n,r)}V_(e){const n={};n.database=Kh(this.serializer),n.addTarget=function(i,a){let c;const l=a.target;if(c=vc(l)?{documents:SI(i,l)}:{query:CI(i,l).ct},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=II(i,a.resumeToken);const h=Ic(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(ae.min())>0){c.readTime=wI(i,a.snapshotVersion.toTimestamp());const h=Ic(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=kI(this.serializer,e);r&&(n.labels=r),this.c_(n)}m_(e){const n={};n.database=Kh(this.serializer),n.removeTarget=e,this.c_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0 extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new te(q.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Oo(e,Ac(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new te(q.UNKNOWN,i.toString())})}ko(e,n,r,s,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.ko(e,Ac(n,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new te(q.UNKNOWN,a.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class g0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(pn(n),this.C_=!1):Y("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(a=>{r.enqueueAndForget(async()=>{pi(this)&&(Y("RemoteStore","Restarting streams for network reachability change."),await async function(l){const h=ve(l);h.k_.add(4),await fi(h),h.K_.set("Unknown"),h.k_.delete(4),await Zo(h)}(this))})}),this.K_=new g0(r,s)}}async function Zo(t){if(pi(t))for(const e of t.q_)await e(!0)}async function fi(t){for(const e of t.q_)await e(!1)}function Qp(t,e){const n=ve(t);n.B_.has(e.targetId)||(n.B_.set(e.targetId,e),ml(n)?gl(n):os(n).s_()&&pl(n,e))}function fl(t,e){const n=ve(t),r=os(n);n.B_.delete(e),r.s_()&&Jp(n,e),n.B_.size===0&&(r.s_()?r.a_():pi(n)&&n.K_.set("Unknown"))}function pl(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ae.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}os(t).V_(e)}function Jp(t,e){t.U_.xe(e),os(t).m_(e)}function gl(t){t.U_=new _I({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.B_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),os(t).start(),t.K_.F_()}function ml(t){return pi(t)&&!os(t).i_()&&t.B_.size>0}function pi(t){return ve(t).k_.size===0}function Yp(t){t.U_=void 0}async function _0(t){t.K_.set("Online")}async function y0(t){t.B_.forEach((e,n)=>{pl(t,e)})}async function v0(t,e){Yp(t),ml(t)?(t.K_.O_(e),gl(t)):t.K_.set("Unknown")}async function E0(t,e,n){if(t.K_.set("Online"),e instanceof Mp&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.B_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.B_.delete(c),s.U_.removeTarget(c))}(t,e)}catch(r){Y("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Xh(t,r)}else if(e instanceof Xi?t.U_.$e(e):e instanceof Lp?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(ae.min()))try{const r=await Kp(t.localStore);n.compareTo(r)>=0&&await function(i,a){const c=i.U_.it(a);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.B_.get(h);f&&i.B_.set(h,f.withResumeToken(l.resumeToken,a))}}),c.targetMismatches.forEach((l,h)=>{const f=i.B_.get(l);if(!f)return;i.B_.set(l,f.withResumeToken(Ze.EMPTY_BYTE_STRING,f.snapshotVersion)),Jp(i,l);const p=new Vn(f.target,l,h,f.sequenceNumber);pl(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){Y("RemoteStore","Failed to raise snapshot:",r),await Xh(t,r)}}async function Xh(t,e,n){if(!is(e))throw e;t.k_.add(1),await fi(t),t.K_.set("Offline"),n||(n=()=>Kp(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Y("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await Zo(t)})}async function Zh(t,e){const n=ve(t);n.asyncQueue.verifyOperationInProgress(),Y("RemoteStore","RemoteStore received new credentials");const r=pi(n);n.k_.add(3),await fi(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await Zo(n)}async function T0(t,e){const n=ve(t);e?(n.k_.delete(2),await Zo(n)):e||(n.k_.add(2),await fi(n),n.K_.set("Unknown"))}function os(t){return t.W_||(t.W_=function(n,r,s){const i=ve(n);return i.b_(),new f0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:_0.bind(null,t),mo:y0.bind(null,t),po:v0.bind(null,t),R_:E0.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),ml(t)?gl(t):t.K_.set("Unknown")):(await t.W_.stop(),Yp(t))})),t.W_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Un,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const a=Date.now()+r,c=new _l(e,n,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xp(t,e){if(pn("AsyncQueue",`${e}: ${t}`),is(t))return new te(q.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{static emptySet(e){return new jr(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||re.comparator(n.key,r.key):(n,r)=>re.comparator(n.key,r.key),this.keyedMap=Cs(),this.sortedSet=new Be(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof jr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new jr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(){this.z_=new Be(re.comparator)}track(e){const n=e.doc.key,r=this.z_.get(n);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(n,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(n):e.type===1&&r.type===2?this.z_=this.z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):le():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ts{constructor(e,n,r,s,i,a,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const a=[];return n.forEach(c=>{a.push({type:0,doc:c})}),new ts(e,n,jr.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Go(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class I0{constructor(){this.queries=td(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,r){const s=ve(n),i=s.queries;s.queries=td(),i.forEach((a,c)=>{for(const l of c.J_)l.onError(r)})})(this,new te(q.ABORTED,"Firestore shutting down"))}}function td(){return new yr(t=>Rp(t),Go)}async function Zp(t,e){const n=ve(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Y_()&&e.Z_()&&(r=2):(i=new w0,r=e.Z_()?0:1);try{switch(r){case 0:i.H_=await n.onListen(s,!0);break;case 1:i.H_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const c=Xp(a,`Initialization of query '${Dr(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.J_.push(e),e.ea(n.onlineState),i.H_&&e.ta(i.H_)&&yl(n)}async function eg(t,e){const n=ve(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const a=i.J_.indexOf(e);a>=0&&(i.J_.splice(a,1),i.J_.length===0?s=e.Z_()?0:1:!i.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function A0(t,e){const n=ve(t);let r=!1;for(const s of e){const i=s.query,a=n.queries.get(i);if(a){for(const c of a.J_)c.ta(s)&&(r=!0);a.H_=s}}r&&yl(n)}function b0(t,e,n){const r=ve(t),s=r.queries.get(e);if(s)for(const i of s.J_)i.onError(n);r.queries.delete(e)}function yl(t){t.X_.forEach(e=>{e.next()})}var Rc,nd;(nd=Rc||(Rc={})).na="default",nd.Cache="cache";class tg{constructor(e,n,r){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ts(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const r=n!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=ts.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Rc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e){this.key=e}}class rg{constructor(e){this.key=e}}class R0{constructor(e,n){this.query=e,this.da=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Ee(),this.mutatedKeys=Ee(),this.Va=Sp(e),this.ma=new jr(this.Va)}get fa(){return this.da}ga(e,n){const r=n?n.pa:new ed,s=n?n.ma:this.ma;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const m=s.get(f),E=Qo(this.query,p)?p:null,k=!!m&&this.mutatedKeys.has(m.key),V=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let L=!1;m&&E?m.data.isEqual(E.data)?k!==V&&(r.track({type:3,doc:E}),L=!0):this.ya(m,E)||(r.track({type:2,doc:E}),L=!0,(l&&this.Va(E,l)>0||h&&this.Va(E,h)<0)&&(c=!0)):!m&&E?(r.track({type:0,doc:E}),L=!0):m&&!E&&(r.track({type:1,doc:m}),L=!0,(l||h)&&(c=!0)),L&&(E?(a=a.add(E),i=V?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{ma:a,pa:r,ss:c,mutatedKeys:i}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const a=e.pa.j_();a.sort((f,p)=>function(E,k){const V=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return le()}};return V(E)-V(k)}(f.type,p.type)||this.Va(f.doc,p.doc)),this.wa(r),s=s!=null&&s;const c=n&&!s?this.Sa():[],l=this.Ra.size===0&&this.current&&!s?1:0,h=l!==this.Aa;return this.Aa=l,a.length!==0||h?{snapshot:new ts(this.query,e.ma,i,a,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:c}:{ba:c}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new ed,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.da=this.da.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.da=this.da.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Ee(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const n=[];return e.forEach(r=>{this.Ra.has(r)||n.push(new rg(r))}),this.Ra.forEach(r=>{e.has(r)||n.push(new ng(r))}),n}va(e){this.da=e.ds,this.Ra=Ee();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return ts.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class S0{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class C0{constructor(e){this.key=e,this.Fa=!1}}class P0{constructor(e,n,r,s,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ma={},this.xa=new yr(c=>Rp(c),Go),this.Oa=new Map,this.Na=new Set,this.La=new Be(re.comparator),this.Ba=new Map,this.ka=new ul,this.qa={},this.Qa=new Map,this.Ka=es.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function k0(t,e,n=!0){const r=cg(t);let s;const i=r.xa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Ca()):s=await sg(r,e,n,!0),s}async function D0(t,e){const n=cg(t);await sg(n,e,!0,!1)}async function sg(t,e,n,r){const s=await i0(t.localStore,Gt(e)),i=s.targetId,a=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await O0(t,e,i,a==="current",s.resumeToken)),t.isPrimaryClient&&n&&Qp(t.remoteStore,s),c}async function O0(t,e,n,r,s){t.Ua=(p,m,E)=>async function(V,L,W,$){let z=L.view.ga(W);z.ss&&(z=await Qh(V.localStore,L.query,!1).then(({documents:I})=>L.view.ga(I,z)));const H=$&&$.targetChanges.get(L.targetId),he=$&&$.targetMismatches.get(L.targetId)!=null,de=L.view.applyChanges(z,V.isPrimaryClient,H,he);return sd(V,L.targetId,de.ba),de.snapshot}(t,p,m,E);const i=await Qh(t.localStore,e,!0),a=new R0(e,i.ds),c=a.ga(i.documents),l=di.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=a.applyChanges(c,t.isPrimaryClient,l);sd(t,n,h.ba);const f=new S0(e,n,a);return t.xa.set(e,f),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),h.snapshot}async function N0(t,e,n){const r=ve(t),s=r.xa.get(e),i=r.Oa.get(s.targetId);if(i.length>1)return r.Oa.set(s.targetId,i.filter(a=>!Go(a,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await bc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&fl(r.remoteStore,s.targetId),Sc(r,s.targetId)}).catch(qo)):(Sc(r,s.targetId),await bc(r.localStore,s.targetId,!0))}async function V0(t,e){const n=ve(t),r=n.xa.get(e),s=n.Oa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),fl(n.remoteStore,r.targetId))}async function ig(t,e){const n=ve(t);try{const r=await r0(n.localStore,e);e.targetChanges.forEach((s,i)=>{const a=n.Ba.get(i);a&&(Me(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.Fa=!0:s.modifiedDocuments.size>0?Me(a.Fa):s.removedDocuments.size>0&&(Me(a.Fa),a.Fa=!1))}),await ag(n,r,e)}catch(r){await qo(r)}}function rd(t,e,n){const r=ve(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.xa.forEach((i,a)=>{const c=a.view.ea(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const l=ve(a);l.onlineState=c;let h=!1;l.queries.forEach((f,p)=>{for(const m of p.J_)m.ea(c)&&(h=!0)}),h&&yl(l)}(r.eventManager,e),s.length&&r.Ma.R_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function x0(t,e,n){const r=ve(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ba.get(e),i=s&&s.key;if(i){let a=new Be(re.comparator);a=a.insert(i,ct.newNoDocument(i,ae.min()));const c=Ee().add(i),l=new Xo(ae.min(),new Map,new Be(ye),a,c);await ig(r,l),r.La=r.La.remove(i),r.Ba.delete(e),vl(r)}else await bc(r.localStore,e,!1).then(()=>Sc(r,e,n)).catch(qo)}function Sc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Oa.get(e))t.xa.delete(r),n&&t.Ma.Wa(r,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(r=>{t.ka.containsKey(r)||og(t,r)})}function og(t,e){t.Na.delete(e.path.canonicalString());const n=t.La.get(e);n!==null&&(fl(t.remoteStore,n),t.La=t.La.remove(e),t.Ba.delete(n),vl(t))}function sd(t,e,n){for(const r of n)r instanceof ng?(t.ka.addReference(r.key,e),L0(t,r)):r instanceof rg?(Y("SyncEngine","Document no longer in limbo: "+r.key),t.ka.removeReference(r.key,e),t.ka.containsKey(r.key)||og(t,r.key)):le()}function L0(t,e){const n=e.key,r=n.path.canonicalString();t.La.get(n)||t.Na.has(r)||(Y("SyncEngine","New document in limbo: "+n),t.Na.add(r),vl(t))}function vl(t){for(;t.Na.size>0&&t.La.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new re(Oe.fromString(e)),r=t.Ka.next();t.Ba.set(r,new C0(n)),t.La=t.La.insert(n,r),Qp(t.remoteStore,new Vn(Gt(ol(n.path)),r,"TargetPurposeLimboResolution",Ho.oe))}}async function ag(t,e,n){const r=ve(t),s=[],i=[],a=[];r.xa.isEmpty()||(r.xa.forEach((c,l)=>{a.push(r.Ua(l,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=dl.zi(l.targetId,h);i.push(p)}}))}),await Promise.all(a),r.Ma.R_(s),await async function(l,h){const f=ve(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>N.forEach(h,m=>N.forEach(m.Wi,E=>f.persistence.referenceDelegate.addReference(p,m.targetId,E)).next(()=>N.forEach(m.Gi,E=>f.persistence.referenceDelegate.removeReference(p,m.targetId,E)))))}catch(p){if(!is(p))throw p;Y("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const E=f.us.get(m),k=E.snapshotVersion,V=E.withLastLimboFreeSnapshotVersion(k);f.us=f.us.insert(m,V)}}}(r.localStore,i))}async function M0(t,e){const n=ve(t);if(!n.currentUser.isEqual(e)){Y("SyncEngine","User change. New user:",e.toKey());const r=await zp(n.localStore,e);n.currentUser=e,function(i,a){i.Qa.forEach(c=>{c.forEach(l=>{l.reject(new te(q.CANCELLED,a))})}),i.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ag(n,r.Ts)}}function F0(t,e){const n=ve(t),r=n.Ba.get(e);if(r&&r.Fa)return Ee().add(r.key);{let s=Ee();const i=n.Oa.get(e);if(!i)return s;for(const a of i){const c=n.xa.get(a);s=s.unionWith(c.view.fa)}return s}}function cg(t){const e=ve(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ig.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=F0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=x0.bind(null,e),e.Ma.R_=A0.bind(null,e.eventManager),e.Ma.Wa=b0.bind(null,e.eventManager),e}class To{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Wp(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return n0(this.persistence,new e0,e.initialUser,this.serializer)}ja(e){return new Hp(hl.ei,this.serializer)}za(e){return new a0}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}To.provider={build:()=>new To};class U0 extends To{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){Me(this.persistence.referenceDelegate instanceof Eo);const r=this.persistence.referenceDelegate.garbageCollector;return new UI(r,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?Et.withCacheSize(this.cacheSizeBytes):Et.DEFAULT;return new Hp(r=>Eo.ei(r,n),this.serializer)}}class Cc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>rd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=M0.bind(null,this.syncEngine),await T0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new I0}()}createDatastore(e){const n=Wp(e.databaseInfo.databaseId),r=function(i){return new h0(i)}(e.databaseInfo);return function(i,a,c,l){return new p0(i,a,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,a,c){return new m0(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,n=>rd(this.syncEngine,n,0),function(){return Yh.p()?new Yh:new c0}())}createSyncEngine(e,n){return function(s,i,a,c,l,h,f){const p=new P0(s,i,a,c,l,h);return f&&(p.$a=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ve(s);Y("RemoteStore","RemoteStore shutting down."),i.k_.add(5),await fi(i),i.Q_.shutdown(),i.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Cc.provider={build:()=>new Cc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):pn("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=it.UNAUTHENTICATED,this.clientId=yp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{Y("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(Y("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Un;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Xp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ha(t,e){t.asyncQueue.verifyOperationInProgress(),Y("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await zp(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function id(t,e){t.asyncQueue.verifyOperationInProgress();const n=await $0(t);Y("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Zh(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Zh(e.remoteStore,s)),t._onlineComponents=e}async function $0(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Y("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ha(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===q.FAILED_PRECONDITION||s.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Jr("Error using user provided cache. Falling back to memory cache: "+n),await Ha(t,new To)}}else Y("FirestoreClient","Using default OfflineComponentProvider"),await Ha(t,new U0(void 0));return t._offlineComponents}async function j0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Y("FirestoreClient","Using user provided OnlineComponentProvider"),await id(t,t._uninitializedComponentsProvider._online)):(Y("FirestoreClient","Using default OnlineComponentProvider"),await id(t,new Cc))),t._onlineComponents}async function ug(t){const e=await j0(t),n=e.eventManager;return n.onListen=k0.bind(null,e.syncEngine),n.onUnlisten=N0.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=D0.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=V0.bind(null,e.syncEngine),n}function q0(t,e,n={}){const r=new Un;return t.asyncQueue.enqueueAndForget(async()=>function(i,a,c,l,h){const f=new lg({next:m=>{f.eu(),a.enqueueAndForget(()=>eg(i,p));const E=m.docs.has(c);!E&&m.fromCache?h.reject(new te(q.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&m.fromCache&&l&&l.source==="server"?h.reject(new te(q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new tg(ol(c.path),f,{includeMetadataChanges:!0,ua:!0});return Zp(i,p)}(await ug(t),t.asyncQueue,e,n,r)),r.promise}function H0(t,e,n={}){const r=new Un;return t.asyncQueue.enqueueAndForget(async()=>function(i,a,c,l,h){const f=new lg({next:m=>{f.eu(),a.enqueueAndForget(()=>eg(i,p)),m.fromCache&&l.source==="server"?h.reject(new te(q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new tg(c,f,{includeMetadataChanges:!0,ua:!0});return Zp(i,p)}(await ug(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hg(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dg(t,e,n){if(!n)throw new te(q.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function z0(t,e,n,r){if(e===!0&&r===!0)throw new te(q.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ad(t){if(!re.isDocumentKey(t))throw new te(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function cd(t){if(re.isDocumentKey(t))throw new te(q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function K0(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":le()}function si(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new te(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=K0(t);throw new te(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new te(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new te(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}z0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hg((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new te(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new te(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new te(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ea{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ld({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ld(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new mw;switch(r.type){case"firstParty":return new Ew(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new te(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=od.get(n);r&&(Y("ComponentProvider","Removing Datastore"),od.delete(n),r.terminate())}(this),Promise.resolve()}}function W0(t,e,n,r={}){var s;const i=(t=si(t,ea))._getSettings(),a=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&Jr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=it.MOCK_USER;else{c=KE(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new te(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new it(h)}t._authCredentials=new _w(new _p(c,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ta(this.firestore,e,this._query)}}class Qt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Qt(this.firestore,e,this._key)}}class Bn extends ta{constructor(e,n,r){super(e,n,ol(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Qt(this.firestore,null,new re(e))}withConverter(e){return new Bn(this.firestore,e,this._path)}}function G0(t,e,...n){if(t=yn(t),dg("collection","path",e),t instanceof ea){const r=Oe.fromString(e,...n);return cd(r),new Bn(t,null,r)}{if(!(t instanceof Qt||t instanceof Bn))throw new te(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return cd(r),new Bn(t.firestore,null,r)}}function Q0(t,e,...n){if(t=yn(t),arguments.length===1&&(e=yp.newId()),dg("doc","path",e),t instanceof ea){const r=Oe.fromString(e,...n);return ad(r),new Qt(t,null,new re(r))}{if(!(t instanceof Qt||t instanceof Bn))throw new te(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return ad(r),new Qt(t.firestore,t instanceof Bn?t.converter:null,new re(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Gp(this,"async_queue_retry"),this.fu=()=>{const r=qa();r&&Y("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const n=qa();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const n=qa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new Un;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!is(e))throw e;Y("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw pn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const s=_l.createAndSchedule(this,e,n,r,i=>this.Su(i));return this.du.push(s),s}pu(){this.Au&&le()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}class El extends ea{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new ud,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ud(e),this._firestoreClient=void 0,await e}}}function J0(t,e){const n=typeof t=="object"?t:cp(),r=typeof t=="string"?t:"(default)",s=el(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=HE("firestore");i&&W0(s,...i)}return s}function fg(t){if(t._terminated)throw new te(q.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Y0(t),t._firestoreClient}function Y0(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,h,f){return new xw(c,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,hg(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new B0(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new wo(Ze.fromBase64String(e))}catch(n){throw new te(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new wo(Ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new te(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new te(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new te(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}const eA=new RegExp("[~\\*/\\[\\]]");function tA(t,e,n){if(e.search(eA)>=0)throw hd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new pg(...e.split("."))._internalPath}catch{throw hd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}function hd(t,e,n,r,s){let i=`Function ${e}() called with invalid data`;i+=". ";let a="";return new te(q.INVALID_ARGUMENT,i+t+a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Qt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new nA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(mg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class nA extends gg{data(){return super.data()}}function mg(t,e){return typeof e=="string"?tA(t,e):e instanceof pg?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new te(q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class sA{convertValue(e,n="none"){switch(zn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Hn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw le()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return hi(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>Ue(a.doubleValue));return new Z0(i)}convertGeoPoint(e){return new X0(Ue(e.latitude),Ue(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ko(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ti(e));default:return null}}convertTimestamp(e){const n=qn(e);return new Tt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Oe.fromString(e);Me(qp(r));const s=new ni(r.get(1),r.get(3)),i=new re(r.popFirst(5));return s.isEqual(n)||pn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _g extends gg{constructor(e,n,r,s,i,a){super(e,n,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Zi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(mg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Zi extends _g{data(e={}){return super.data(e)}}class iA{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ks(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Zi(this._firestore,this._userDataWriter,r.key,r,new ks(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new te(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const l=new Zi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ks(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Zi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ks(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:oA(c.type),doc:l,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function oA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return le()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aA(t){t=si(t,Qt);const e=si(t.firestore,El);return q0(fg(e),t._key).then(n=>lA(e,t,n))}class yg extends sA{constructor(e){super(),this.firestore=e}convertBytes(e){return new wo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Qt(this.firestore,null,n)}}function cA(t){t=si(t,ta);const e=si(t.firestore,El),n=fg(e),r=new yg(e);return rA(t._query),H0(n,t._query).then(s=>new iA(e,r,t,s))}function lA(t,e,n){const r=n.docs.get(e._key),s=new yg(t);return new _g(t,s,e._key,r,new ks(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){ss=s})(rs),Qr(new pr("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new El(new yw(r.getProvider("auth-internal")),new ww(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new te(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ni(h.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Fn(Rh,"4.7.5",e),Fn(Rh,"4.7.5","esm2017")})();const uA={data(){return{blogs:[]}},created(){this.fetchBlogs()},methods:{async fetchBlogs(){try{const t=G0(kl,"blog-collection"),e=await cA(t);this.blogs=e.docs.map(n=>({id:n.id,...n.data()}))}catch(t){console.error("Error fetching blogs:",t)}}}},hA={class:"home"};function dA(t,e,n,r,s,i){const a=cr("router-link");return Xe(),ut("div",hA,[e[0]||(e[0]=ue("h1",null,"This is the blog page",-1)),(Xe(!0),ut(Lt,null,P_(s.blogs,c=>(Xe(),ut("div",{key:c.id},[Ne(a,{to:"/blog/"+c.id},{default:ir(()=>[ue("button",null,so(c.title),1)]),_:2},1032,["to"])]))),128))])}const fA=Nt(uA,[["render",dA]]);function Tl(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function vg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pA=vg,Eg=new li("auth","Firebase",vg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io=new Xc("@firebase/auth");function gA(t,...e){Io.logLevel<=pe.WARN&&Io.warn(`Auth (${rs}): ${t}`,...e)}function eo(t,...e){Io.logLevel<=pe.ERROR&&Io.error(`Auth (${rs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(t,...e){throw wl(t,...e)}function Jt(t,...e){return wl(t,...e)}function Tg(t,e,n){const r=Object.assign(Object.assign({},pA()),{[e]:n});return new li("auth","Firebase",r).create(e,{appName:t.name})}function $n(t){return Tg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Eg.create(t,...e)}function ie(t,e,...n){if(!t)throw wl(e,...n)}function un(t){const e="INTERNAL ASSERTION FAILED: "+t;throw eo(e),new Error(e)}function gn(t,e){t||un(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function mA(){return dd()==="http:"||dd()==="https:"}function dd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mA()||JE()||"connection"in navigator)?navigator.onLine:!0}function yA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,n){this.shortDelay=e,this.longDelay=n,gn(n>e,"Short delay should be less than long delay!"),this.isMobile=WE()||YE()}get(){return _A()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(t,e){gn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;un("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;un("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;un("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA=new gi(3e4,6e4);function vr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Jn(t,e,n,r,s={}){return Ig(t,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=ui(Object.assign({key:t.config.apiKey},a)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:l},i);return QE()||(h.referrerPolicy="no-referrer"),wg.fetch()(Ag(t,t.config.apiHost,n,c),h)})}async function Ig(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},vA),e);try{const s=new wA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw $i(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw $i(t,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw $i(t,"email-already-in-use",a);if(l==="USER_DISABLED")throw $i(t,"user-disabled",a);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Tg(t,f,h);Bt(t,f)}}catch(s){if(s instanceof _n)throw s;Bt(t,"network-request-failed",{message:String(s)})}}async function na(t,e,n,r,s={}){const i=await Jn(t,e,n,r,s);return"mfaPendingCredential"in i&&Bt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Ag(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Il(t.config,s):`${t.config.apiScheme}://${s}`}function TA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class wA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Jt(this.auth,"network-request-failed")),EA.get())})}}function $i(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Jt(t,e,r);return s.customData._tokenResponse=n,s}function fd(t){return t!==void 0&&t.enterprise!==void 0}class IA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return TA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function AA(t,e){return Jn(t,"GET","/v2/recaptchaConfig",vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bA(t,e){return Jn(t,"POST","/v1/accounts:delete",e)}async function bg(t,e){return Jn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function RA(t,e=!1){const n=yn(t),r=await n.getIdToken(e),s=Al(r);ie(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:zs(za(s.auth_time)),issuedAtTime:zs(za(s.iat)),expirationTime:zs(za(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function za(t){return Number(t)*1e3}function Al(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return eo("JWT malformed, contained fewer than 3 sections"),null;try{const s=tp(n);return s?JSON.parse(s):(eo("Failed to decode base64 JWT payload"),null)}catch(s){return eo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function pd(t){const e=Al(t);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ii(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof _n&&SA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function SA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=zs(this.lastLoginAt),this.creationTime=zs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ao(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ii(t,bg(n,{idToken:r}));ie(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Rg(i.providerUserInfo):[],c=kA(t.providerData,a),l=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=l?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new kc(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function PA(t){const e=yn(t);await Ao(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Rg(t){return t.map(e=>{var{providerId:n}=e,r=Tl(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DA(t,e){const n=await Ig(t,{},async()=>{const r=ui({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,a=Ag(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",wg.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function OA(t,e){return Jn(t,"POST","/v2/accounts:revokeToken",vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):pd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ie(e.length!==0,"internal-error");const n=pd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await DA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,a=new qr;return r&&(ie(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ie(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(ie(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qr,this.toJSON())}_performRefresh(){return un("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(t,e){ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class hn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Tl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new CA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new kc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ii(this,this.stsTokenManager.getToken(this.auth,e));return ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return RA(this,e)}reload(){return PA(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new hn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ao(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ln(this.auth.app))return Promise.reject($n(this.auth));const e=await this.getIdToken();return await ii(this,bA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,a,c,l,h,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,E=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,k=(a=n.photoURL)!==null&&a!==void 0?a:void 0,V=(c=n.tenantId)!==null&&c!==void 0?c:void 0,L=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,W=(h=n.createdAt)!==null&&h!==void 0?h:void 0,$=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:z,emailVerified:H,isAnonymous:he,providerData:de,stsTokenManager:I}=n;ie(z&&I,e,"internal-error");const y=qr.fromJSON(this.name,I);ie(typeof z=="string",e,"internal-error"),bn(p,e.name),bn(m,e.name),ie(typeof H=="boolean",e,"internal-error"),ie(typeof he=="boolean",e,"internal-error"),bn(E,e.name),bn(k,e.name),bn(V,e.name),bn(L,e.name),bn(W,e.name),bn($,e.name);const w=new hn({uid:z,auth:e,email:m,emailVerified:H,displayName:p,isAnonymous:he,photoURL:k,phoneNumber:E,tenantId:V,stsTokenManager:y,createdAt:W,lastLoginAt:$});return de&&Array.isArray(de)&&(w.providerData=de.map(A=>Object.assign({},A))),L&&(w._redirectEventId=L),w}static async _fromIdTokenResponse(e,n,r=!1){const s=new qr;s.updateFromServerResponse(n);const i=new hn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ao(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ie(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Rg(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new qr;c.updateFromIdToken(r);const l=new hn({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new kc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gd=new Map;function dn(t){gn(t instanceof Function,"Expected a class definition");let e=gd.get(t);return e?(gn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,gd.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Sg.type="NONE";const md=Sg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(t,e,n){return`firebase:${t}:${e}:${n}`}class Hr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=to(this.userKey,s.apiKey,i),this.fullPersistenceKey=to("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?hn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Hr(dn(md),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||dn(md);const a=to(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const f=await h._get(a);if(f){const p=hn._fromJSON(e,f);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Hr(i,e,r):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Hr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _d(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Dg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Cg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ng(e))return"Blackberry";if(Vg(e))return"Webos";if(Pg(e))return"Safari";if((e.includes("chrome/")||kg(e))&&!e.includes("edge/"))return"Chrome";if(Og(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Cg(t=dt()){return/firefox\//i.test(t)}function Pg(t=dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kg(t=dt()){return/crios\//i.test(t)}function Dg(t=dt()){return/iemobile/i.test(t)}function Og(t=dt()){return/android/i.test(t)}function Ng(t=dt()){return/blackberry/i.test(t)}function Vg(t=dt()){return/webos/i.test(t)}function bl(t=dt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function NA(t=dt()){var e;return bl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function VA(){return XE()&&document.documentMode===10}function xg(t=dt()){return bl(t)||Og(t)||Vg(t)||Ng(t)||/windows phone/i.test(t)||Dg(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(t,e=[]){let n;switch(t){case"Browser":n=_d(dt());break;case"Worker":n=`${_d(dt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${rs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LA(t,e={}){return Jn(t,"GET","/v2/passwordPolicy",vr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA=6;class FA{constructor(e){var n,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:MA,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yd(this),this.idTokenSubscription=new yd(this),this.beforeStateQueue=new xA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Eg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=dn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Hr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await bg(this,{idToken:e}),r=await hn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(ln(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ao(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ln(this.app))return Promise.reject($n(this));const n=e?yn(e):null;return n&&ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ln(this.app)?Promise.reject($n(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ln(this.app)?Promise.reject($n(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(dn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await LA(this),n=new FA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new li("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await OA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&dn(e)||this._popupRedirectResolver;ie(n,this,"argument-error"),this.redirectPersistenceManager=await Hr.create(this,[dn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(n);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Lg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&gA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function as(t){return yn(t)}class yd{constructor(e){this.auth=e,this.observer=null,this.addObserver=oT(n=>this.observer=n)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ra={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function BA(t){ra=t}function Mg(t){return ra.loadJS(t)}function $A(){return ra.recaptchaEnterpriseScript}function jA(){return ra.gapiScript}function qA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class HA{constructor(){this.enterprise=new zA}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class zA{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const KA="recaptcha-enterprise",Fg="NO_RECAPTCHA";class WA{constructor(e){this.type=KA,this.auth=as(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{AA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new IA(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,a(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,a,c){const l=window.grecaptcha;fd(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{a(h)}).catch(()=>{a(Fg)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new HA().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(c=>{if(!n&&fd(window.grecaptcha))s(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=$A();l.length!==0&&(l+=c),Mg(l).then(()=>{s(c,i,a)}).catch(h=>{a(h)})}}).catch(c=>{a(c)})})}}async function vd(t,e,n,r=!1,s=!1){const i=new WA(t);let a;if(s)a=Fg;else try{a=await i.verify(n)}catch{a=await i.verify(n,!0)}const c=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Ed(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await vd(t,e,n,n==="getOobCode");return r(t,a)}else return r(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await vd(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GA(t,e){const n=el(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(po(i,e??{}))return s;Bt(s,"already-initialized")}return n.initialize({options:e})}function QA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(dn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function JA(t,e,n){const r=as(t);ie(r._canInitEmulator,r,"emulator-config-failed"),ie(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Ug(e),{host:a,port:c}=YA(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),XA()}function Ug(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function YA(t){const e=Ug(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Td(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Td(a)}}}function Td(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function XA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return un("not implemented")}_getIdTokenResponse(e){return un("not implemented")}_linkToIdToken(e,n){return un("not implemented")}_getReauthenticationResolver(e){return un("not implemented")}}async function ZA(t,e){return Jn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eb(t,e){return na(t,"POST","/v1/accounts:signInWithPassword",vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tb(t,e){return na(t,"POST","/v1/accounts:signInWithEmailLink",vr(t,e))}async function nb(t,e){return na(t,"POST","/v1/accounts:signInWithEmailLink",vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends Rl{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new oi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new oi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ed(e,n,"signInWithPassword",eb);case"emailLink":return tb(e,{email:this._email,oobCode:this._password});default:Bt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ed(e,r,"signUpPassword",ZA);case"emailLink":return nb(e,{idToken:n,email:this._email,oobCode:this._password});default:Bt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zr(t,e){return na(t,"POST","/v1/accounts:signInWithIdp",vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rb="http://localhost";class mr extends Rl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new mr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Tl(n,["providerId","signInMethod"]);if(!r||!s)return null;const a=new mr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return zr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,zr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zr(e,n)}buildRequest(){const e={requestUri:rb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ui(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ib(t){const e=bs(Rs(t)).link,n=e?bs(Rs(e)).deep_link_id:null,r=bs(Rs(t)).deep_link_id;return(r?bs(Rs(r)).link:null)||r||n||e||t}class Sl{constructor(e){var n,r,s,i,a,c;const l=bs(Rs(e)),h=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,p=sb((s=l.mode)!==null&&s!==void 0?s:null);ie(h&&f&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=f,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=l.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=ib(e);try{return new Sl(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(){this.providerId=cs.PROVIDER_ID}static credential(e,n){return oi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Sl.parseLink(n);return ie(r,"argument-error"),oi._fromEmailAndCode(e,r.code,r.tenantId)}}cs.PROVIDER_ID="password";cs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";cs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi extends Bg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends mi{constructor(){super("facebook.com")}static credential(e){return mr._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pn.credential(e.oauthAccessToken)}catch{return null}}}Pn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends mi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return mr._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return kn.credential(n,r)}catch{return null}}}kn.GOOGLE_SIGN_IN_METHOD="google.com";kn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends mi{constructor(){super("github.com")}static credential(e){return mr._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dn.credential(e.oauthAccessToken)}catch{return null}}}Dn.GITHUB_SIGN_IN_METHOD="github.com";Dn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends mi{constructor(){super("twitter.com")}static credential(e,n){return mr._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return On.credential(n,r)}catch{return null}}}On.TWITTER_SIGN_IN_METHOD="twitter.com";On.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await hn._fromIdTokenResponse(e,r,s),a=wd(r);return new ns({user:i,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=wd(r);return new ns({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function wd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo extends _n{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,bo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new bo(e,n,r,s)}}function $g(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?bo._fromErrorAndOperation(t,i,e,r):i})}async function ob(t,e,n=!1){const r=await ii(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ns._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ab(t,e,n=!1){const{auth:r}=t;if(ln(r.app))return Promise.reject($n(r));const s="reauthenticate";try{const i=await ii(t,$g(r,s,e,t),n);ie(i.idToken,r,"internal-error");const a=Al(i.idToken);ie(a,r,"internal-error");const{sub:c}=a;return ie(t.uid===c,r,"user-mismatch"),ns._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Bt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jg(t,e,n=!1){if(ln(t.app))return Promise.reject($n(t));const r="signIn",s=await $g(t,r,e),i=await ns._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function cb(t,e){return jg(as(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lb(t){const e=as(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function ub(t,e,n){return ln(t.app)?Promise.reject($n(t)):cb(yn(t),cs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&lb(t),r})}function hb(t,e,n,r){return yn(t).onIdTokenChanged(e,n,r)}function db(t,e,n){return yn(t).beforeAuthStateChanged(e,n)}const Ro="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ro,"1"),this.storage.removeItem(Ro),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb=1e3,pb=10;class Hg extends qg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=xg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);VA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,pb):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},fb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Hg.type="LOCAL";const gb=Hg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg extends qg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}zg.type="SESSION";const Kg=zg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new sa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(n.origin,i)),l=await mb(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}sa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const h=Cl("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(){return window}function yb(t){Yt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(){return typeof Yt().WorkerGlobalScope<"u"&&typeof Yt().importScripts=="function"}async function vb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Eb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Tb(){return Wg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg="firebaseLocalStorageDb",wb=1,So="firebaseLocalStorage",Qg="fbase_key";class _i{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ia(t,e){return t.transaction([So],e?"readwrite":"readonly").objectStore(So)}function Ib(){const t=indexedDB.deleteDatabase(Gg);return new _i(t).toPromise()}function Dc(){const t=indexedDB.open(Gg,wb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(So,{keyPath:Qg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(So)?e(r):(r.close(),await Ib(),e(await Dc()))})})}async function Id(t,e,n){const r=ia(t,!0).put({[Qg]:e,value:n});return new _i(r).toPromise()}async function Ab(t,e){const n=ia(t,!1).get(e),r=await new _i(n).toPromise();return r===void 0?null:r.value}function Ad(t,e){const n=ia(t,!0).delete(e);return new _i(n).toPromise()}const bb=800,Rb=3;class Jg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Dc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Rb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=sa._getInstance(Tb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await vb(),!this.activeServiceWorker)return;this.sender=new _b(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Eb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Dc();return await Id(e,Ro,"1"),await Ad(e,Ro),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Id(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ab(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ad(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ia(s,!1).getAll();return new _i(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jg.type="LOCAL";const Sb=Jg;new gi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cb(t,e){return e?dn(e):(ie(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl extends Rl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Pb(t){return jg(t.auth,new Pl(t),t.bypassAuthState)}function kb(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),ab(n,new Pl(t),t.bypassAuthState)}async function Db(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),ob(n,new Pl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Pb;case"linkViaPopup":case"linkViaRedirect":return Db;case"reauthViaPopup":case"reauthViaRedirect":return kb;default:Bt(this.auth,"internal-error")}}resolve(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ob=new gi(2e3,1e4);class Vr extends Yg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Vr.currentPopupAction&&Vr.currentPopupAction.cancel(),Vr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){gn(this.filter.length===1,"Popup operations only handle one event");const e=Cl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Jt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Jt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Jt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ob.get())};e()}}Vr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb="pendingRedirect",no=new Map;class Vb extends Yg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=no.get(this.auth._key());if(!e){try{const r=await xb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}no.set(this.auth._key(),e)}return this.bypassAuthState||no.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xb(t,e){const n=Fb(e),r=Mb(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Lb(t,e){no.set(t._key(),e)}function Mb(t){return dn(t._redirectPersistence)}function Fb(t){return to(Nb,t.config.apiKey,t.name)}async function Ub(t,e,n=!1){if(ln(t.app))return Promise.reject($n(t));const r=as(t),s=Cb(r,e),a=await new Vb(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bb=10*60*1e3;class $b{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Xg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Jt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Bb&&this.cachedEventUids.clear(),this.cachedEventUids.has(bd(e))}saveEventToCache(e){this.cachedEventUids.add(bd(e)),this.lastProcessedEventTime=Date.now()}}function bd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Xg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qb(t,e={}){return Jn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zb=/^https?/;async function Kb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await qb(t);for(const n of e)try{if(Wb(n))return}catch{}Bt(t,"unauthorized-domain")}function Wb(t){const e=Pc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!zb.test(n))return!1;if(Hb.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb=new gi(3e4,6e4);function Rd(){const t=Yt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Qb(t){return new Promise((e,n)=>{var r,s,i;function a(){Rd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Rd(),n(Jt(t,"network-request-failed"))},timeout:Gb.get()})}if(!((s=(r=Yt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Yt().gapi)===null||i===void 0)&&i.load)a();else{const c=qA("iframefcb");return Yt()[c]=()=>{gapi.load?a():n(Jt(t,"network-request-failed"))},Mg(`${jA()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw ro=null,e})}let ro=null;function Jb(t){return ro=ro||Qb(t),ro}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb=new gi(5e3,15e3),Xb="__/auth/iframe",Zb="emulator/auth/iframe",eR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function nR(t){const e=t.config;ie(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Il(e,Zb):`https://${t.config.authDomain}/${Xb}`,r={apiKey:e.apiKey,appName:t.name,v:rs},s=tR.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ui(r).slice(1)}`}async function rR(t){const e=await Jb(t),n=Yt().gapi;return ie(n,t,"internal-error"),e.open({where:document.body,url:nR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:eR,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Jt(t,"network-request-failed"),c=Yt().setTimeout(()=>{i(a)},Yb.get());function l(){Yt().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},iR=500,oR=600,aR="_blank",cR="http://localhost";class Sd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lR(t,e,n,r=iR,s=oR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},sR),{width:r.toString(),height:s.toString(),top:i,left:a}),h=dt().toLowerCase();n&&(c=kg(h)?aR:n),Cg(h)&&(e=e||cR,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[E,k])=>`${m}${E}=${k},`,"");if(NA(h)&&c!=="_self")return uR(e||"",c),new Sd(null);const p=window.open(e||"",c,f);ie(p,t,"popup-blocked");try{p.focus()}catch{}return new Sd(p)}function uR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hR="__/auth/handler",dR="emulator/auth/handler",fR=encodeURIComponent("fac");async function Cd(t,e,n,r,s,i){ie(t.config.authDomain,t,"auth-domain-config-required"),ie(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:rs,eventId:s};if(e instanceof Bg){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",iT(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))a[f]=p}if(e instanceof mi){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(a.scopes=f.join(","))}t.tenantId&&(a.tid=t.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),h=l?`#${fR}=${encodeURIComponent(l)}`:"";return`${pR(t)}?${ui(c).slice(1)}${h}`}function pR({config:t}){return t.emulator?Il(t,dR):`https://${t.authDomain}/${hR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka="webStorageSupport";class gR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kg,this._completeRedirectFn=Ub,this._overrideRedirectResult=Lb}async _openPopup(e,n,r,s){var i;gn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await Cd(e,n,r,Pc(),s);return lR(e,a,Cl())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Cd(e,n,r,Pc(),s);return yb(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(gn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await rR(e),r=new $b(e);return n.register("authEvent",s=>(ie(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ka,{type:Ka},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ka];a!==void 0&&n(!!a),Bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Kb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return xg()||Pg()||bl()}}const mR=gR;var Pd="@firebase/auth",kd="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function vR(t){Qr(new pr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;ie(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Lg(t)},h=new UA(r,s,i,l);return QA(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Qr(new pr("auth-internal",e=>{const n=as(e.getProvider("auth").getImmediate());return(r=>new _R(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Fn(Pd,kd,yR(t)),Fn(Pd,kd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER=5*60,TR=sp("authIdTokenMaxAge")||ER;let Dd=null;const wR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>TR)return;const s=n==null?void 0:n.token;Dd!==s&&(Dd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function IR(t=cp()){const e=el(t,"auth");if(e.isInitialized())return e.getImmediate();const n=GA(t,{popupRedirectResolver:mR,persistence:[Sb,gb,Kg]}),r=sp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=wR(i.toString());db(n,a,()=>a(n.currentUser)),hb(n,c=>a(c))}}const s=np("auth");return s&&JA(n,`http://${s}`),n}function AR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}BA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Jt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",AR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});vR("Browser");const bR={setup(){const t=Qv(),e=qi(""),n=qi(""),r=qi(null),s=async()=>{r.value=null;try{const a=await ub(Zg,e.value,n.value);console.log("User logged in:",a.user),t.push("/user-dashboard")}catch(a){r.value=a.message,console.log("Authentication failed! Error: "+r.value)}};return{email:e,password:n,error:r,submitForm:()=>{s()}}}},RR={class:"form-group"},SR={class:"form-group"};function CR(t,e,n,r,s,i){return Xe(),ut("form",{onSubmit:e[2]||(e[2]=Uf((...a)=>r.submitForm&&r.submitForm(...a),["prevent"]))},[ue("div",RR,[e[3]||(e[3]=ue("label",{for:"email"},null,-1)),Vs(ue("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>r.email=a),placeholder:"Email",type:"text",id:"email",required:""},null,512),[[Fs,r.email]])]),ue("div",SR,[e[4]||(e[4]=ue("label",{for:"password"},null,-1)),Vs(ue("input",{"onUpdate:modelValue":e[1]||(e[1]=a=>r.password=a),placeholder:"Password",type:"text",id:"password",required:""},null,512),[[Fs,r.password]])]),e[5]||(e[5]=ue("div",{class:"form-group"},[ue("button",{type:"submit"},"Login")],-1))],32)}const PR=Nt(bR,[["render",CR],["__scopeId","data-v-6946c760"]]),kR={components:{LoginFormComponent:PR}},DR={class:"home"};function OR(t,e,n,r,s,i){const a=cr("LoginFormComponent");return Xe(),ut("div",DR,[e[0]||(e[0]=ue("h1",null,"Login",-1)),Ne(a)])}const NR=Nt(kR,[["render",OR]]),VR={data(){return{blog:null,loading:!0,error:null}},created(){this.fetchBlogPost()},methods:{async fetchBlogPost(){const t=this.$route.params.id;try{const e=Q0(kl,"blog-collection",t),n=await aA(e);n.exists()?this.blog={id:n.id,...n.data()}:this.error="Blog not found"}catch(e){this.error="Error fetching blog post: "+e.message}finally{this.loading=!1}}}},xR={class:"blog-post"},LR={key:0},MR={key:1},FR={key:2},UR=["innerHTML"];function BR(t,e,n,r,s,i){return Xe(),ut("div",xR,[s.loading?(Xe(),ut("h1",LR,"Loading...")):Ca("",!0),s.error?(Xe(),ut("div",MR,so(s.error),1)):Ca("",!0),s.blog?(Xe(),ut("div",FR,[ue("h2",null,so(s.blog.title),1),ue("div",{innerHTML:s.blog.textcontent},null,8,UR)])):Ca("",!0)])}const $R=Nt(VR,[["render",BR]]),jR={},qR={class:"home"};function HR(t,e){return Xe(),ut("div",qR,e[0]||(e[0]=[ue("h1",null,"This is the user dashboard page",-1)]))}const zR=Nt(jR,[["render",HR]]),KR=[{path:"/",name:"HomeView",component:bE},{path:"/about",name:"AboutView",component:CE},{path:"/contact",name:"ContactView",component:LE},{path:"/blog",name:"BlogView",component:fA},{path:"/blog/:id",name:"BlogPost",component:$R,props:!0},{path:"/login",name:"LoginView",component:NR},{path:"/user-dashboard",name:"UserDashboard",component:zR}],WR=Wv({history:wv(),routes:KR});var GR="firebase",QR="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fn(GR,QR,"app");const JR={BASE_URL:"/opensourcenematodedrugbase.github.io/",DEV:!1,MODE:"production",PROD:!0,SSR:!1},YR={apiKey:void 0,authDomain:void 0,databaseURL:void 0,projectId:void 0,storageBucket:void 0,messagingSenderId:void 0,appId:void 0};let Wa,kl,Zg;try{console.log(JR),Wa=ap(YR),kl=J0(Wa),Zg=IR(Wa),console.log("Firebase initialised.")}catch(t){console.error("Firebase intialisation failed. Error:"+t)}const em=qy(_E);em.use(WR);em.mount("#app");
