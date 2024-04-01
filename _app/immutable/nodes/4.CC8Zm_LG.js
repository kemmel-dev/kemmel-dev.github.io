function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../chunks/detective-duck.DE5y76Re.js","../chunks/scheduler.DOMG36tE.js","../chunks/index.Bn3n1Mey.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as Y}from"../chunks/preload-helper.BQ24v_F8.js";import{S as B,T as G,F as j,z as U,s as z,m as I,i as g,n as m,f as i,e as p,t as C,a as D,c as b,b as v,d as q,g as F,q as _,h as k,j as H,U as P,p as J,V as K,l as Q}from"../chunks/scheduler.DOMG36tE.js";import{g as A,t as w,c as L,a as $,S as O,i as R,b as W,d as X,m as Z,e as ee}from"../chunks/index.Bn3n1Mey.js";import{e as M}from"../chunks/each.D6YF6ztN.js";function te(c,e){const l=e.token={};function t(r,n,o,a){if(e.token!==l)return;e.resolved=a;let s=e.ctx;o!==void 0&&(s=s.slice(),s[o]=a);const f=r&&(e.current=r)(s);let y=!1;e.block&&(e.blocks?e.blocks.forEach((E,h)=>{h!==n&&E&&(A(),w(E,1,1,()=>{e.blocks[h]===E&&(e.blocks[h]=null)}),L())}):e.block.d(1),f.c(),$(f,1),f.m(e.mount(),e.anchor),y=!0),e.block=f,e.blocks&&(e.blocks[n]=f),y&&U()}if(B(c)){const r=G();if(c.then(n=>{j(r),t(e.then,1,e.value,n),j(null)},n=>{if(j(r),t(e.catch,2,e.error,n),j(null),!e.hasCatch)throw n}),e.current!==e.pending)return t(e.pending,0),!0}else{if(e.current!==e.then)return t(e.then,1,e.value,c),!0;e.resolved=c}}function re(c,e,l){const t=e.slice(),{resolved:r}=c;c.current===c.then&&(t[c.value]=r),c.current===c.catch&&(t[c.error]=r),c.block.p(t,l)}function N(c){let e,l,t=c[0].title+"",r,n,o,a=c[0].description+"",s,f;function y(d,u){return d[1]()?ce:le}let h=y(c)(c);return{c(){e=p("div"),l=p("h1"),r=C(t),n=D(),o=p("p"),s=C(a),f=D(),h.c(),this.h()},l(d){e=b(d,"DIV",{class:!0});var u=v(e);l=b(u,"H1",{class:!0});var V=v(l);r=q(V,t),V.forEach(i),n=F(u),o=b(u,"P",{});var x=v(o);s=q(x,a),x.forEach(i),f=F(u),h.l(u),u.forEach(i),this.h()},h(){_(l,"class","svelte-uz4s8n"),_(e,"class","bg-red-400 p8")},m(d,u){g(d,e,u),k(e,l),k(l,r),k(e,n),k(e,o),k(o,s),k(e,f),h.m(e,null)},p(d,u){u&1&&t!==(t=d[0].title+"")&&H(r,t),u&1&&a!==(a=d[0].description+"")&&H(s,a),h.p(d,u)},d(d){d&&i(e),h.d()}}}function le(c){let e,l,t;return{c(){e=p("img"),this.h()},l(r){e=b(r,"IMG",{src:!0,alt:!0}),this.h()},h(){P(e.src,l=c[0].media)||_(e,"src",l),_(e,"alt",t=`Header image for ${c[0].title}.`)},m(r,n){g(r,e,n)},p(r,n){n&1&&!P(e.src,l=r[0].media)&&_(e,"src",l),n&1&&t!==(t=`Header image for ${r[0].title}.`)&&_(e,"alt",t)},d(r){r&&i(e)}}}function ce(c){let e,l;return{c(){e=p("iframe"),this.h()},l(t){e=b(t,"IFRAME",{class:!0,src:!0,title:!0,frameborder:!0,referrerpolicy:!0}),v(e).forEach(i),this.h()},h(){_(e,"class","w-full aspect-video"),P(e.src,l="http://www.youtube.com/embed/"+c[0].media+"?origin=https://kemmel-dev.github.io")||_(e,"src",l),_(e,"title","YouTube video player"),_(e,"frameborder","0"),_(e,"referrerpolicy","strict-origin-when-cross-origin"),e.allowFullscreen=!0},m(t,r){g(t,e,r)},p(t,r){r&1&&!P(e.src,l="http://www.youtube.com/embed/"+t[0].media+"?origin=https://kemmel-dev.github.io")&&_(e,"src",l)},d(t){t&&i(e)}}}function ne(c){let e,l=c[0]!==null&&N(c);return{c(){l&&l.c(),e=I()},l(t){l&&l.l(t),e=I()},m(t,r){l&&l.m(t,r),g(t,e,r)},p(t,[r]){t[0]!==null?l?l.p(t,r):(l=N(t),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},i:m,o:m,d(t){t&&i(e),l&&l.d(t)}}}function oe(c,e,l){let{project:t=null}=e;function r(){var n;return!((n=t==null?void 0:t.media)!=null&&n.includes("."))}return c.$$set=n=>{"project"in n&&l(0,t=n.project)},[t,r]}class se extends O{constructor(e){super(),R(this,e,oe,ne,z,{project:0})}}function S(c,e,l){const t=c.slice();return t[1]=e[l],t}function ae(c){let e,l=c[4].message+"",t;return{c(){e=p("p"),t=C(l)},l(r){e=b(r,"P",{});var n=v(e);t=q(n,l),n.forEach(i)},m(r,n){g(r,e,n),k(e,t)},p:m,i:m,o:m,d(r){r&&i(e)}}}function ie(c){let e,l,t=M(c[0]),r=[];for(let o=0;o<t.length;o+=1)r[o]=T(S(c,t,o));const n=o=>w(r[o],1,1,()=>{r[o]=null});return{c(){for(let o=0;o<r.length;o+=1)r[o].c();e=I()},l(o){for(let a=0;a<r.length;a+=1)r[a].l(o);e=I()},m(o,a){for(let s=0;s<r.length;s+=1)r[s]&&r[s].m(o,a);g(o,e,a),l=!0},p(o,a){if(a&0){t=M(o[0]);let s;for(s=0;s<t.length;s+=1){const f=S(o,t,s);r[s]?(r[s].p(f,a),$(r[s],1)):(r[s]=T(f),r[s].c(),$(r[s],1),r[s].m(e.parentNode,e))}for(A(),s=t.length;s<r.length;s+=1)n(s);L()}},i(o){if(!l){for(let a=0;a<t.length;a+=1)$(r[a]);l=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)w(r[a]);l=!1},d(o){o&&i(e),K(r,o)}}}function T(c){let e,l;return e=new se({props:{project:c[1]}}),{c(){W(e.$$.fragment)},l(t){X(e.$$.fragment,t)},m(t,r){Z(e,t,r),l=!0},p:m,i(t){l||($(e.$$.fragment,t),l=!0)},o(t){w(e.$$.fragment,t),l=!1},d(t){ee(e,t)}}}function ue(c){let e,l="Loading...";return{c(){e=p("p"),e.textContent=l},l(t){e=b(t,"P",{"data-svelte-h":!0}),Q(e)!=="svelte-qdsr2u"&&(e.textContent=l)},m(t,r){g(t,e,r)},p:m,i:m,o:m,d(t){t&&i(e)}}}function _e(c){let e,l,t={ctx:c,current:null,token:null,hasCatch:!0,pending:ue,then:ie,catch:ae,value:0,error:4,blocks:[,,,]};return te(fe(),t),{c(){e=p("div"),t.block.c(),this.h()},l(r){e=b(r,"DIV",{class:!0});var n=v(e);t.block.l(n),n.forEach(i),this.h()},h(){_(e,"class","grid items-center flex-grow grid-cols-1 p-8 grid-rows gap-x-12")},m(r,n){g(r,e,n),t.block.m(e,t.anchor=null),t.mount=()=>e,t.anchor=null,l=!0},p(r,[n]){c=r,re(t,c,n)},i(r){l||($(t.block),l=!0)},o(r){for(let n=0;n<3;n+=1){const o=t.blocks[n];w(o)}l=!1},d(r){r&&i(e),t.block.d(),t.token=null,t=null}}}async function fe(){const c=Object.assign({"/src/lib/svx/detective-duck.svx":()=>Y(()=>import("../chunks/detective-duck.DE5y76Re.js"),__vite__mapDeps([0,1,2]),import.meta.url)});let e=[];for(const l in c)await c[l]().then(t=>{if(t.metadata!==void 0){const{title:r,description:n,media:o}=t.metadata;if(r&&n&&o){const a={title:r,description:n,media:o};e.push(a)}else console.log(`Incomplete frontmatter found for ${l}`)}else console.log(`No frontmatter found for ${l}`)});return console.log(e),e}function de(c){return J(()=>{}),[]}class ge extends O{constructor(e){super(),R(this,e,de,_e,z,{})}}export{ge as component};
