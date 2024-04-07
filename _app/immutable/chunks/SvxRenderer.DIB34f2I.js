function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./about.CC2kEBrh.js","./scheduler.CnXFKQpv.js","./index.zHxxuuQU.js","../assets/about.ZjmM0-uf.css","./detective-duck.BZrjdO2m.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{$ as fe,a0 as de,V as T,R as _e,s as U,C as me,e as p,c as k,b as I,f,u as O,i as E,h as m,D as he,E as be,F as ve,P as pe,x as c,a1 as re,n as S,t as q,a as L,d as A,g as W,q as le,o as B,a2 as ke,j as se,w as ge,p as D,y as ie,a3 as Ce}from"./scheduler.CnXFKQpv.js";import{g as G,b as w,f as J,t as g,S as K,i as Q,c as X,a as $,m as Y,h as M,d as F}from"./index.zHxxuuQU.js";import{_ as oe}from"./preload-helper.D6kgxu3v.js";function Ie(s,e){const n=e.token={};function t(r,l,a,i){if(e.token!==n)return;e.resolved=i;let o=e.ctx;a!==void 0&&(o=o.slice(),o[a]=i);const d=r&&(e.current=r)(o);let b=!1;e.block&&(e.blocks?e.blocks.forEach((v,h)=>{h!==l&&v&&(G(),w(v,1,1,()=>{e.blocks[h]===v&&(e.blocks[h]=null)}),J())}):e.block.d(1),d.c(),g(d,1),d.m(e.mount(),e.anchor),b=!0),e.block=d,e.blocks&&(e.blocks[l]=d),b&&_e()}if(fe(s)){const r=de();if(s.then(l=>{T(r),t(e.then,1,e.value,l),T(null)},l=>{if(T(r),t(e.catch,2,e.error,l),T(null),!e.hasCatch)throw l}),e.current!==e.pending)return t(e.pending,0),!0}else{if(e.current!==e.then)return t(e.then,1,e.value,s),!0;e.resolved=s}}function we(s,e,n){const t=e.slice(),{resolved:r}=s;s.current===s.then&&(t[s.value]=r),s.current===s.catch&&(t[s.error]=r),s.block.p(t,n)}function Ee(s){let e,n,t;const r=s[1].default,l=me(r,s,s[0],null);return{c(){e=p("div"),n=p("div"),l&&l.c(),this.h()},l(a){e=k(a,"DIV",{class:!0});var i=I(e);n=k(i,"DIV",{class:!0});var o=I(n);l&&l.l(o),o.forEach(f),i.forEach(f),this.h()},h(){O(n,"class","grid grid-cols-1 max-w-[64ch] w-[100%] post-container"),O(e,"class","flex flex-col items-center")},m(a,i){E(a,e,i),m(e,n),l&&l.m(n,null),t=!0},p(a,[i]){l&&l.p&&(!t||i&1)&&he(l,r,a,a[0],t?ve(r,a[0],i,null):be(a[0]),null)},i(a){t||(g(l,a),t=!0)},o(a){w(l,a),t=!1},d(a){a&&f(e),l&&l.d(a)}}}function Oe(s,e,n){let{$$slots:t={},$$scope:r}=e;return s.$$set=l=>{"$$scope"in l&&n(0,r=l.$$scope)},[r,t]}class Ye extends K{constructor(e){super(),Q(this,e,Oe,Ee,U,{})}}const Ve=(s,e)=>{const n=s[e];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((t,r)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+e)))})};async function Se(s){try{const e=await Ve(Object.assign({"../content/posts/about.svx":()=>oe(()=>import("./about.CC2kEBrh.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),"../content/posts/detective-duck.svx":()=>oe(()=>import("./detective-duck.BZrjdO2m.js"),__vite__mapDeps([4,1,2]),import.meta.url)}),`../content/posts/${s}.svx`);return{content:e.default,meta:e.metadata}}catch{throw{status:404,message:`Did not find a .svx with slug "${s}", supposedly located at ../content/posts/${s}.svx`}}}function y(s,{delay:e=0,duration:n=400,easing:t=pe}={}){const r=+getComputedStyle(s).opacity;return{delay:e,duration:n,easing:t,css:l=>`opacity: ${l*r}`}}function De(s){let e;return{c(){e=p("div"),this.h()},l(n){e=k(n,"DIV",{class:!0,style:!0}),I(e).forEach(f),this.h()},h(){O(e,"class","circle svelte-6gpa2l"),c(e,"--size",s[0]+s[1]),c(e,"--colorInner",s[5]),c(e,"--colorCenter",s[4]),c(e,"--colorOuter",s[3]),c(e,"--durationInner",s[7]),c(e,"--durationCenter",s[8]),c(e,"--durationOuter",s[6]),re(e,"pause-animation",s[2])},m(n,t){E(n,e,t)},p(n,[t]){t&3&&c(e,"--size",n[0]+n[1]),t&32&&c(e,"--colorInner",n[5]),t&16&&c(e,"--colorCenter",n[4]),t&8&&c(e,"--colorOuter",n[3]),t&128&&c(e,"--durationInner",n[7]),t&256&&c(e,"--durationCenter",n[8]),t&64&&c(e,"--durationOuter",n[6]),t&4&&re(e,"pause-animation",n[2])},i:S,o:S,d(n){n&&f(e)}}}function Me(s,e,n){let{size:t="60"}=e,{unit:r="px"}=e,{pause:l=!1}=e,{colorOuter:a="#ffac15"}=e,{colorCenter:i="#999999"}=e,{colorInner:o="#bbbbbb"}=e,{durationMultiplier:d=1}=e,{durationOuter:b=`${d*2}s`}=e,{durationInner:v=`${d*1.5}s`}=e,{durationCenter:h=`${d*3}s`}=e;return s.$$set=u=>{"size"in u&&n(0,t=u.size),"unit"in u&&n(1,r=u.unit),"pause"in u&&n(2,l=u.pause),"colorOuter"in u&&n(3,a=u.colorOuter),"colorCenter"in u&&n(4,i=u.colorCenter),"colorInner"in u&&n(5,o=u.colorInner),"durationMultiplier"in u&&n(9,d=u.durationMultiplier),"durationOuter"in u&&n(6,b=u.durationOuter),"durationInner"in u&&n(7,v=u.durationInner),"durationCenter"in u&&n(8,h=u.durationCenter)},[t,r,l,a,i,o,b,v,h,d]}class ye extends K{constructor(e){super(),Q(this,e,Me,De,U,{size:0,unit:1,pause:2,colorOuter:3,colorCenter:4,colorInner:5,durationMultiplier:9,durationOuter:6,durationInner:7,durationCenter:8})}}function ze(s){let e,n,t,r,l,a="Whoops!",i,o,d="A bird flew off with our data!",b,v,h,u,V,z=s[0].status+"",N,Z,x,P=s[0].message+"",R,ee;return{c(){e=p("div"),n=p("span"),t=q("🐦"),r=L(),l=p("h1"),l.textContent=a,i=L(),o=p("h2"),o.textContent=d,b=L(),v=p("p"),h=p("span"),u=q("Error "),V=p("span"),N=q(z),Z=q(":"),x=L(),R=q(P),this.h()},l(C){e=k(C,"DIV",{class:!0});var _=I(e);n=k(_,"SPAN",{class:!0,style:!0});var te=I(n);t=A(te,"🐦"),te.forEach(f),r=W(_),l=k(_,"H1",{"data-svelte-h":!0}),le(l)!=="svelte-1qzyq3v"&&(l.textContent=a),i=W(_),o=k(_,"H2",{"data-svelte-h":!0}),le(o)!=="svelte-1otm3t4"&&(o.textContent=d),b=W(_),v=k(_,"P",{});var j=I(v);h=k(j,"SPAN",{class:!0});var H=I(h);u=A(H,"Error "),V=k(H,"SPAN",{class:!0});var ne=I(V);N=A(ne,z),ne.forEach(f),Z=A(H,":"),H.forEach(f),x=W(j),R=A(j,P),j.forEach(f),_.forEach(f),this.h()},h(){O(n,"class","absolute text-6xl"),c(n,"display",s[3]?"":"none"),c(n,"right",s[1]+"px"),c(n,"top",s[2]+"px"),O(V,"class","text-primary"),O(h,"class","text-xl font-bold"),O(e,"class","relative overflow-clip"),B(()=>s[5].call(e))},m(C,_){E(C,e,_),m(e,n),m(n,t),m(e,r),m(e,l),m(e,i),m(e,o),m(e,b),m(e,v),m(v,h),m(h,u),m(h,V),m(V,N),m(h,Z),m(v,x),m(v,R),ee=ke(e,s[5].bind(e))},p(C,[_]){_&8&&c(n,"display",C[3]?"":"none"),_&2&&c(n,"right",C[1]+"px"),_&4&&c(n,"top",C[2]+"px"),_&1&&z!==(z=C[0].status+"")&&se(N,z),_&1&&P!==(P=C[0].message+"")&&se(R,P)},i:S,o:S,d(C){C&&f(e),ee()}}}const ae=25,Pe=5;function qe(s,e,n){let{error:t}=e,r=0;const l=-200;let a=0,i=!0,o;ge(()=>{n(1,r=l),n(2,a=ae),n(3,i=!0);const b=setInterval(()=>{n(1,r+=Pe),n(2,a=ae+Math.sin(r/30)*15),r>o&&(clearInterval(b),n(3,i=!1))},10)});function d(){o=this.clientWidth,n(4,o)}return s.$$set=b=>{"error"in b&&n(0,t=b.error)},[t,r,a,i,o,d]}class Ae extends K{constructor(e){super(),Q(this,e,qe,ze,U,{error:0})}}function Ne(s){let e,n,t=s[0]&&ue(s);return{c(){t&&t.c(),e=D()},l(r){t&&t.l(r),e=D()},m(r,l){t&&t.m(r,l),E(r,e,l),n=!0},p(r,l){r[0]?t?(t.p(r,l),l&1&&g(t,1)):(t=ue(r),t.c(),g(t,1),t.m(e.parentNode,e)):t&&(G(),w(t,1,1,()=>{t=null}),J())},i(r){n||(g(t),n=!0)},o(r){w(t),n=!1},d(r){r&&f(e),t&&t.d(r)}}}function ue(s){let e,n,t,r;return n=new Ae({props:{error:s[6]}}),{c(){e=p("div"),X(n.$$.fragment)},l(l){e=k(l,"DIV",{});var a=I(e);$(n.$$.fragment,a),a.forEach(f)},m(l,a){E(l,e,a),Y(n,e,null),r=!0},p:S,i(l){r||(g(n.$$.fragment,l),l&&B(()=>{r&&(t||(t=M(e,y,{},!0)),t.run(1))}),r=!0)},o(l){w(n.$$.fragment,l),l&&(t||(t=M(e,y,{},!1)),t.run(0)),r=!1},d(l){l&&f(e),F(n),l&&t&&t.end()}}}function Re(s){let e,n,t=s[0]&&ce(s);return{c(){t&&t.c(),e=D()},l(r){t&&t.l(r),e=D()},m(r,l){t&&t.m(r,l),E(r,e,l),n=!0},p(r,l){r[0]?t?(t.p(r,l),l&1&&g(t,1)):(t=ce(r),t.c(),g(t,1),t.m(e.parentNode,e)):t&&(G(),w(t,1,1,()=>{t=null}),J())},i(r){n||(g(t),n=!0)},o(r){w(t),n=!1},d(r){r&&f(e),t&&t.d(r)}}}function ce(s){let e,n,t,r;var l=s[5].content;function a(i,o){return{}}return l&&(n=ie(l,a())),{c(){e=p("div"),n&&X(n.$$.fragment)},l(i){e=k(i,"DIV",{});var o=I(e);n&&$(n.$$.fragment,o),o.forEach(f)},m(i,o){E(i,e,o),n&&Y(n,e,null),r=!0},p(i,o){if(l!==(l=i[5].content)){if(n){G();const d=n;w(d.$$.fragment,1,0,()=>{F(d,1)}),J()}l?(n=ie(l,a()),X(n.$$.fragment),g(n.$$.fragment,1),Y(n,e,null)):n=null}},i(i){r||(n&&g(n.$$.fragment,i),i&&B(()=>{r&&(t||(t=M(e,y,{},!0)),t.run(1))}),r=!0)},o(i){n&&w(n.$$.fragment,i),i&&(t||(t=M(e,y,{},!1)),t.run(0)),r=!1},d(i){i&&f(e),n&&F(n),i&&t&&t.end()}}}function je(s){let e,n,t,r,l,a;return n=new ye({}),{c(){e=p("div"),X(n.$$.fragment),this.h()},l(i){e=k(i,"DIV",{class:!0});var o=I(e);$(n.$$.fragment,o),o.forEach(f),this.h()},h(){O(e,"class","flex justify-center w-full pt-16")},m(i,o){E(i,e,o),Y(n,e,null),r=!0,l||(a=Ce(e,"outroend",s[4]),l=!0)},p:S,i(i){r||(g(n.$$.fragment,i),i&&B(()=>{r&&(t||(t=M(e,y,{},!0)),t.run(1))}),r=!0)},o(i){w(n.$$.fragment,i),i&&(t||(t=M(e,y,{},!1)),t.run(0)),r=!1},d(i){i&&f(e),F(n),i&&t&&t.end(),l=!1,a()}}}function He(s){let e,n,t={ctx:s,current:null,token:null,hasCatch:!0,pending:je,then:Re,catch:Ne,value:5,error:6,blocks:[,,,]};return Ie(s[1],t),{c(){e=D(),t.block.c()},l(r){e=D(),t.block.l(r)},m(r,l){E(r,e,l),t.block.m(r,t.anchor=l),t.mount=()=>e.parentNode,t.anchor=e,n=!0},p(r,[l]){s=r,we(t,s,l)},i(r){n||(g(t.block),n=!0)},o(r){for(let l=0;l<3;l+=1){const a=t.blocks[l];w(a)}n=!1},d(r){r&&f(e),t.block.d(r),t.token=null,t=null}}}function Te(s,e,n){let{contentVisible:t}=e,{slug:r}=e,{frontMatter:l}=e;const a=Se(r).then(o=>(n(2,l=o.meta),o)),i=()=>{n(0,t=!0)};return s.$$set=o=>{"contentVisible"in o&&n(0,t=o.contentVisible),"slug"in o&&n(3,r=o.slug),"frontMatter"in o&&n(2,l=o.frontMatter)},[t,a,l,r,i]}class Fe extends K{constructor(e){super(),Q(this,e,Te,He,U,{contentVisible:0,slug:3,frontMatter:2})}}export{Ye as S,Fe as a,y as f};
