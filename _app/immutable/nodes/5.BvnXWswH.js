function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../chunks/about.qBDCdK5I.js","../chunks/scheduler.DCTacmqj.js","../chunks/index.DpwPvxh6.js","../assets/about.ZjmM0-uf.css","../chunks/detective-duck.Dz_u1Mh-.js","../chunks/Summary.iMCA0nQN.js","../chunks/look-out.DEQCE2Ny.js","../chunks/ouija-tv.BMidLcml.js","../chunks/pogo-peaks.CVr2no5Q.js","../chunks/reggie.VybfRyi4.js","../chunks/robotlab-vr.CZomFtGC.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{J as W,s as H,v as D,i as $,f,n as c,A as O,e as k,t as X,a as N,c as w,b as E,d as Y,g as G,m as p,h as P,j as Z,K as J,L as tt,k as et,o as S}from"../chunks/scheduler.DCTacmqj.js";import{h as V,u as K,S as U}from"../chunks/Spinner.uXupfdIi.js";import{S as z,i as B,t as _,b as d,g as F,e as Q,c as x,a as j,m as y,d as I,f as R}from"../chunks/index.DpwPvxh6.js";import{_ as g}from"../chunks/preload-helper.D6kgxu3v.js";import{p as nt}from"../chunks/stores.Z03huSqO.js";const rt=(s,t)=>{const r=s[t];return r?typeof r=="function"?r():Promise.resolve(r):new Promise((e,n)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+t)))})};async function q(s,t=0){t>0&&await new Promise(r=>setTimeout(r,t));try{const r=await rt(Object.assign({"../content/posts/about.svx":()=>g(()=>import("../chunks/about.qBDCdK5I.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),"../content/posts/detective-duck.svx":()=>g(()=>import("../chunks/detective-duck.Dz_u1Mh-.js"),__vite__mapDeps([4,1,2,5]),import.meta.url),"../content/posts/look-out.svx":()=>g(()=>import("../chunks/look-out.DEQCE2Ny.js"),__vite__mapDeps([6,1,2,5]),import.meta.url),"../content/posts/ouija-tv.svx":()=>g(()=>import("../chunks/ouija-tv.BMidLcml.js"),__vite__mapDeps([7,1,2,5]),import.meta.url),"../content/posts/pogo-peaks.svx":()=>g(()=>import("../chunks/pogo-peaks.CVr2no5Q.js"),__vite__mapDeps([8,1,2]),import.meta.url),"../content/posts/reggie.svx":()=>g(()=>import("../chunks/reggie.VybfRyi4.js"),__vite__mapDeps([9,1,2,5]),import.meta.url),"../content/posts/robotlab-vr.svx":()=>g(()=>import("../chunks/robotlab-vr.CZomFtGC.js"),__vite__mapDeps([10,1,2,5]),import.meta.url)}),`../content/posts/${s}.svx`);return{content:r.default,meta:r.metadata}}catch{throw{status:404,message:`Did not find a .svx with slug "${s}", supposedly located at ../content/posts/${s}.svx`}}}function T(s,{delay:t=0,duration:r=400,easing:e=W}={}){const n=+getComputedStyle(s).opacity;return{delay:t,duration:r,easing:e,css:a=>`opacity: ${a*n}`}}function ot(s){return{c,l:c,m:c,p:c,i:c,o:c,d:c}}function st(s){let t,r,e=s[1]&&C(s);return{c(){e&&e.c(),t=D()},l(n){e&&e.l(n),t=D()},m(n,a){e&&e.m(n,a),$(n,t,a),r=!0},p(n,a){n[1]?e?(e.p(n,a),a&2&&_(e,1)):(e=C(n),e.c(),_(e,1),e.m(t.parentNode,t)):e&&(F(),d(e,1,1,()=>{e=null}),Q())},i(n){r||(_(e),r=!0)},o(n){d(e),r=!1},d(n){n&&f(t),e&&e.d(n)}}}function C(s){let t,r,e,n=s[3].meta.title+"",a,i,o,l,m;var b=s[3].content;function A(u,h){return{}}return b&&(o=O(b,A())),{c(){t=k("div"),r=k("div"),e=k("h1"),a=X(n),i=N(),o&&x(o.$$.fragment),this.h()},l(u){t=w(u,"DIV",{class:!0});var h=E(t);r=w(h,"DIV",{class:!0});var v=E(r);e=w(v,"H1",{});var L=E(e);a=Y(L,n),L.forEach(f),i=G(v),o&&j(o.$$.fragment,v),v.forEach(f),h.forEach(f),this.h()},h(){p(r,"class","post-container"),p(t,"class","flex w-full flex-grow flex-col items-center gap-y-4")},m(u,h){$(u,t,h),P(t,r),P(r,e),P(e,a),P(r,i),o&&y(o,r,null),m=!0},p(u,h){if((!m||h&1)&&n!==(n=u[3].meta.title+"")&&Z(a,n),h&1&&b!==(b=u[3].content)){if(o){F();const v=o;d(v.$$.fragment,1,0,()=>{I(v,1)}),Q()}b?(o=O(b,A()),x(o.$$.fragment),_(o.$$.fragment,1),y(o,r,null)):o=null}},i(u){m||(o&&_(o.$$.fragment,u),u&&J(()=>{m&&(l||(l=R(t,T,{},!0)),l.run(1))}),m=!0)},o(u){o&&d(o.$$.fragment,u),u&&(l||(l=R(t,T,{},!1)),l.run(0)),m=!1},d(u){u&&f(t),o&&I(o),u&&l&&l.end()}}}function at(s){let t,r,e,n,a,i;return r=new U({}),{c(){t=k("div"),x(r.$$.fragment),this.h()},l(o){t=w(o,"DIV",{class:!0});var l=E(t);j(r.$$.fragment,l),l.forEach(f),this.h()},h(){p(t,"class","m-8 grid grid-rows-1 justify-center")},m(o,l){$(o,t,l),y(r,t,null),n=!0,a||(i=tt(t,"outroend",s[2]),a=!0)},p:c,i(o){n||(_(r.$$.fragment,o),o&&J(()=>{n&&(e||(e=R(t,T,{},!0)),e.run(1))}),n=!0)},o(o){d(r.$$.fragment,o),o&&(e||(e=R(t,T,{},!1)),e.run(0)),n=!1},d(o){o&&f(t),I(r),o&&e&&e.end(),a=!1,i()}}}function it(s){let t,r,e,n={ctx:s,current:null,token:null,hasCatch:!1,pending:at,then:st,catch:ot,value:3,blocks:[,,,]};return V(r=q(s[0]),n),{c(){t=D(),n.block.c()},l(a){t=D(),n.block.l(a)},m(a,i){$(a,t,i),n.block.m(a,n.anchor=i),n.mount=()=>t.parentNode,n.anchor=t,e=!0},p(a,[i]){s=a,n.ctx=s,i&1&&r!==(r=q(s[0]))&&V(r,n)||K(n,s,i)},i(a){e||(_(n.block),e=!0)},o(a){for(let i=0;i<3;i+=1){const o=n.blocks[i];d(o)}e=!1},d(a){a&&f(t),n.block.d(a),n.token=null,n=null}}}function lt(s,t,r){let{slug:e}=t,n=!1;const a=()=>r(1,n=!0);return s.$$set=i=>{"slug"in i&&r(0,e=i.slug)},[e,n,a]}class ct extends z{constructor(t){super(),B(this,t,lt,it,H,{slug:0})}}function ut(s){return{c,l:c,m:c,p:c,i:c,o:c,d:c}}function ft(s){let t,r,e;return{c(){t=k("img"),this.h()},l(n){t=w(n,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){S(t.src,r=s[1])||p(t,"src",r),p(t,"alt",e=s[0].params.slug),p(t,"class","flex h-64 w-full max-w-[64ch] justify-self-center object-cover")},m(n,a){$(n,t,a)},p(n,a){a&1&&!S(t.src,r=n[1])&&p(t,"src",r),a&1&&e!==(e=n[0].params.slug)&&p(t,"alt",e)},i:c,o:c,d(n){n&&f(t)}}}function mt(s){let t,r;return t=new U({}),{c(){x(t.$$.fragment)},l(e){j(t.$$.fragment,e)},m(e,n){y(t,e,n),r=!0},p:c,i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){I(t,e)}}}function _t(s){let t,r,e,n,a,i={ctx:s,current:null,token:null,hasCatch:!1,pending:mt,then:ft,catch:ut,value:1,blocks:[,,,]};return V(r=M(s[0].params.slug),i),n=new ct({props:{slug:s[0].params.slug}}),{c(){t=k("div"),i.block.c(),e=N(),x(n.$$.fragment),this.h()},l(o){t=w(o,"DIV",{class:!0});var l=E(t);i.block.l(l),l.forEach(f),e=G(o),j(n.$$.fragment,o),this.h()},h(){p(t,"class","flex flex-row justify-center")},m(o,l){$(o,t,l),i.block.m(t,i.anchor=null),i.mount=()=>t,i.anchor=null,$(o,e,l),y(n,o,l),a=!0},p(o,[l]){s=o,i.ctx=s,l&1&&r!==(r=M(s[0].params.slug))&&V(r,i)||K(i,s,l);const m={};l&1&&(m.slug=s[0].params.slug),n.$set(m)},i(o){a||(_(i.block),_(n.$$.fragment,o),a=!0)},o(o){for(let l=0;l<3;l+=1){const m=i.blocks[l];d(m)}d(n.$$.fragment,o),a=!1},d(o){o&&(f(t),f(e)),i.block.d(),i.token=null,i=null,I(n,o)}}}async function M(s){const t=`/projects/${s}/${s}`,r=`${t}.gif`,e=`${t}.png`;return await fetch(r).then(a=>a.ok).catch(()=>!1)?r:e}function pt(s,t,r){let e;return et(s,nt,n=>r(0,e=n)),[e]}class bt extends z{constructor(t){super(),B(this,t,pt,_t,H,{})}}export{bt as component};
