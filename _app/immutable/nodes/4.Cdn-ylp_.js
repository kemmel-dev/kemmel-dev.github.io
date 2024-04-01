function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../chunks/detective-duck.DE5y76Re.js","../chunks/scheduler.DOMG36tE.js","../chunks/index.Bn3n1Mey.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as N}from"../chunks/preload-helper.BQ24v_F8.js";import{S as B,T as G,F as j,z as U,s as O,m as P,i as g,n as f,f as u,e as p,t as C,a as D,c as b,b as v,d as x,g as T,q as i,h as k,j as A,U as I,p as J,V as K,l as Q}from"../chunks/scheduler.DOMG36tE.js";import{g as R,t as $,c as S,a as w,S as z,i as Y,b as W,d as X,m as Z,e as ee}from"../chunks/index.Bn3n1Mey.js";import{e as F}from"../chunks/each.D6YF6ztN.js";function te(c,e){const l=e.token={};function t(r,o,n,s){if(e.token!==l)return;e.resolved=s;let a=e.ctx;n!==void 0&&(a=a.slice(),a[n]=s);const d=r&&(e.current=r)(a);let y=!1;e.block&&(e.blocks?e.blocks.forEach((E,m)=>{m!==o&&E&&(R(),$(E,1,1,()=>{e.blocks[m]===E&&(e.blocks[m]=null)}),S())}):e.block.d(1),d.c(),w(d,1),d.m(e.mount(),e.anchor),y=!0),e.block=d,e.blocks&&(e.blocks[o]=d),y&&U()}if(B(c)){const r=G();if(c.then(o=>{j(r),t(e.then,1,e.value,o),j(null)},o=>{if(j(r),t(e.catch,2,e.error,o),j(null),!e.hasCatch)throw o}),e.current!==e.pending)return t(e.pending,0),!0}else{if(e.current!==e.then)return t(e.then,1,e.value,c),!0;e.resolved=c}}function re(c,e,l){const t=e.slice(),{resolved:r}=c;c.current===c.then&&(t[c.value]=r),c.current===c.catch&&(t[c.error]=r),c.block.p(t,l)}function H(c){let e,l,t=c[0].title+"",r,o,n,s=c[0].description+"",a,d;function y(h,_){return h[1]()?ce:le}let m=y(c)(c);return{c(){e=p("div"),l=p("h1"),r=C(t),o=D(),n=p("p"),a=C(s),d=D(),m.c(),this.h()},l(h){e=b(h,"DIV",{class:!0});var _=v(e);l=b(_,"H1",{class:!0});var V=v(l);r=x(V,t),V.forEach(u),o=T(_),n=b(_,"P",{});var q=v(n);a=x(q,s),q.forEach(u),d=T(_),m.l(_),_.forEach(u),this.h()},h(){i(l,"class","svelte-uz4s8n"),i(e,"class","bg-red-400 p8")},m(h,_){g(h,e,_),k(e,l),k(l,r),k(e,o),k(e,n),k(n,a),k(e,d),m.m(e,null)},p(h,_){_&1&&t!==(t=h[0].title+"")&&A(r,t),_&1&&s!==(s=h[0].description+"")&&A(a,s),m.p(h,_)},d(h){h&&u(e),m.d()}}}function le(c){let e,l,t;return{c(){e=p("img"),this.h()},l(r){e=b(r,"IMG",{src:!0,alt:!0}),this.h()},h(){I(e.src,l=c[0].media)||i(e,"src",l),i(e,"alt",t=`Header image for ${c[0].title}.`)},m(r,o){g(r,e,o)},p(r,o){o&1&&!I(e.src,l=r[0].media)&&i(e,"src",l),o&1&&t!==(t=`Header image for ${r[0].title}.`)&&i(e,"alt",t)},d(r){r&&u(e)}}}function ce(c){let e,l;return{c(){e=p("iframe"),this.h()},l(t){e=b(t,"IFRAME",{width:!0,height:!0,src:!0,title:!0,frameborder:!0,allow:!0,referrerpolicy:!0}),v(e).forEach(u),this.h()},h(){i(e,"width","560"),i(e,"height","315"),I(e.src,l="https://www.youtube-nocookie.com/embed/"+c[0].media+"&origin=https://kemmel-dev.github.io")||i(e,"src",l),i(e,"title","YouTube video player"),i(e,"frameborder","0"),i(e,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"),i(e,"referrerpolicy","strict-origin-when-cross-origin"),e.allowFullscreen=!0},m(t,r){g(t,e,r)},p(t,r){r&1&&!I(e.src,l="https://www.youtube-nocookie.com/embed/"+t[0].media+"&origin=https://kemmel-dev.github.io")&&i(e,"src",l)},d(t){t&&u(e)}}}function oe(c){let e,l=c[0]!==null&&H(c);return{c(){l&&l.c(),e=P()},l(t){l&&l.l(t),e=P()},m(t,r){l&&l.m(t,r),g(t,e,r)},p(t,[r]){t[0]!==null?l?l.p(t,r):(l=H(t),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},i:f,o:f,d(t){t&&u(e),l&&l.d(t)}}}function ne(c,e,l){let{project:t=null}=e;function r(){var o;return!((o=t==null?void 0:t.media)!=null&&o.includes("."))}return c.$$set=o=>{"project"in o&&l(0,t=o.project)},[t,r]}class ae extends z{constructor(e){super(),Y(this,e,ne,oe,O,{project:0})}}function L(c,e,l){const t=c.slice();return t[1]=e[l],t}function se(c){let e,l=c[4].message+"",t;return{c(){e=p("p"),t=C(l)},l(r){e=b(r,"P",{});var o=v(e);t=x(o,l),o.forEach(u)},m(r,o){g(r,e,o),k(e,t)},p:f,i:f,o:f,d(r){r&&u(e)}}}function ie(c){let e,l,t=F(c[0]),r=[];for(let n=0;n<t.length;n+=1)r[n]=M(L(c,t,n));const o=n=>$(r[n],1,1,()=>{r[n]=null});return{c(){for(let n=0;n<r.length;n+=1)r[n].c();e=P()},l(n){for(let s=0;s<r.length;s+=1)r[s].l(n);e=P()},m(n,s){for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(n,s);g(n,e,s),l=!0},p(n,s){if(s&0){t=F(n[0]);let a;for(a=0;a<t.length;a+=1){const d=L(n,t,a);r[a]?(r[a].p(d,s),w(r[a],1)):(r[a]=M(d),r[a].c(),w(r[a],1),r[a].m(e.parentNode,e))}for(R(),a=t.length;a<r.length;a+=1)o(a);S()}},i(n){if(!l){for(let s=0;s<t.length;s+=1)w(r[s]);l=!0}},o(n){r=r.filter(Boolean);for(let s=0;s<r.length;s+=1)$(r[s]);l=!1},d(n){n&&u(e),K(r,n)}}}function M(c){let e,l;return e=new ae({props:{project:c[1]}}),{c(){W(e.$$.fragment)},l(t){X(e.$$.fragment,t)},m(t,r){Z(e,t,r),l=!0},p:f,i(t){l||(w(e.$$.fragment,t),l=!0)},o(t){$(e.$$.fragment,t),l=!1},d(t){ee(e,t)}}}function ue(c){let e,l="Loading...";return{c(){e=p("p"),e.textContent=l},l(t){e=b(t,"P",{"data-svelte-h":!0}),Q(e)!=="svelte-qdsr2u"&&(e.textContent=l)},m(t,r){g(t,e,r)},p:f,i:f,o:f,d(t){t&&u(e)}}}function _e(c){let e,l,t={ctx:c,current:null,token:null,hasCatch:!0,pending:ue,then:ie,catch:se,value:0,error:4,blocks:[,,,]};return te(de(),t),{c(){e=p("div"),t.block.c(),this.h()},l(r){e=b(r,"DIV",{class:!0});var o=v(e);t.block.l(o),o.forEach(u),this.h()},h(){i(e,"class","grid items-center flex-grow grid-cols-1 p-8 grid-rows gap-x-12")},m(r,o){g(r,e,o),t.block.m(e,t.anchor=null),t.mount=()=>e,t.anchor=null,l=!0},p(r,[o]){c=r,re(t,c,o)},i(r){l||(w(t.block),l=!0)},o(r){for(let o=0;o<3;o+=1){const n=t.blocks[o];$(n)}l=!1},d(r){r&&u(e),t.block.d(),t.token=null,t=null}}}async function de(){const c=Object.assign({"/src/lib/svx/detective-duck.svx":()=>N(()=>import("../chunks/detective-duck.DE5y76Re.js"),__vite__mapDeps([0,1,2]),import.meta.url)});let e=[];for(const l in c)await he(e,l);return e}async function he(c,e){const l=await N(()=>import(e),__vite__mapDeps([]),import.meta.url);if(l.metadata){const{title:t,description:r,media:o}=l.metadata;if(t&&r&&o){const n={title:t,description:r,media:o};c.push(n)}else console.log(`Incomplete frontmatter found for ${e}`)}else console.log(`No frontmatter found for ${e}`)}function me(c){return J(()=>{}),[]}class ke extends z{constructor(e){super(),Y(this,e,me,_e,O,{})}}export{ke as component};