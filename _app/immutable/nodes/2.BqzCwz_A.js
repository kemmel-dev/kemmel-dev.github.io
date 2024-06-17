import{s as X,_ as $e,e as y,c as x,b as P,f as p,p as d,u as de,i as N,$ as ke,a0 as ye,a1 as xe,a2 as Se,r as ge,v as Ce,a as I,g as T,a3 as ve,h as v,m as U,n as he,t as Z,d as ee,y as le,j as ne,z as pe}from"../chunks/scheduler.Bsh3DgOv.js";import{S as F,i as z,a as E,t as H,b as S,d as R,m as A,e as M,g as _e,c as we}from"../chunks/index.B4i0UJdh.js";import{e as te}from"../chunks/each.D6YF6ztN.js";function Re(i){let e,n;const s=i[7].default,t=$e(s,i,i[6],null);return{c(){e=y("div"),t&&t.c(),this.h()},l(a){e=x(a,"DIV",{id:!0,class:!0,style:!0});var l=P(e);t&&t.l(l),l.forEach(p),this.h()},h(){d(e,"id","typewriter-content"),d(e,"class",i[0]),de(e,"display","none")},m(a,l){N(a,e,l),t&&t.m(e,null),i[8](e),n=!0},p(a,[l]){t&&t.p&&(!n||l&64)&&ke(t,s,a,a[6],n?xe(s,a[6],l,null):ye(a[6]),null),(!n||l&1)&&d(e,"class",a[0])},i(a){n||(E(t,a),n=!0)},o(a){H(t,a),n=!1},d(a){a&&p(e),t&&t.d(a),i[8](null)}}}function Pe(i){return new Promise(e=>setTimeout(e,i))}function Ae(i,e,n){let{$$slots:s={},$$scope:t}=e;const a=Se();let l,r,{class:o=""}=e,{style:h=""}=e;ge(()=>{if(B){n(1,l.style.display="",l);return}r=l.cloneNode(!0),w(),k(r,l)});function w(){for(;l.firstChild;)l.removeChild(l.firstChild);n(1,l.style.display="",l)}async function k(f,V){var m;for(;f.firstChild;){let g=f.firstChild;const b=V.id==="typewriter-content";switch(g.nodeType){case Node.TEXT_NODE:let _=((m=g.textContent)==null?void 0:m.replace(/\s+/g," "))||"";if(_.trim().length===0)break;await $(_,V.appendChild(document.createTextNode("")));break;case Node.ELEMENT_NODE:let L=V.appendChild(document.createElement(g.nodeName)),O=g;for(let C=0;C<O.attributes.length;C++){let D=O.attributes[C];L.setAttribute(D.name,D.value)}L.textContent+=".",a("elementAdded"),L.textContent=L.textContent.slice(0,-1),await k(g,L);break}f.removeChild(g),b&&await Pe(g.nodeType===Node.TEXT_NODE?c:u)}}async function $(f,V,m){V.textContent+=".",V.textContent=V.textContent.slice(0,-1);for(let g=0;g<f.length;g++)V.textContent+=f[g],await Pe(c),a("elementAdded")}let{msDelayBetweenElements:u=1e3,msDelayBetweenChars:c=150,preRender:B=!1}=e;function W(f){Ce[f?"unshift":"push"](()=>{l=f,n(1,l)})}return i.$$set=f=>{"class"in f&&n(0,o=f.class),"style"in f&&n(2,h=f.style),"msDelayBetweenElements"in f&&n(3,u=f.msDelayBetweenElements),"msDelayBetweenChars"in f&&n(4,c=f.msDelayBetweenChars),"preRender"in f&&n(5,B=f.preRender),"$$scope"in f&&n(6,t=f.$$scope)},[o,l,h,u,c,B,t,s,W]}class Me extends F{constructor(e){super(),z(this,e,Ae,Re,X,{class:0,style:2,msDelayBetweenElements:3,msDelayBetweenChars:4,preRender:5})}}function qe(i){let e;const n=i[8].default,s=$e(n,i,i[10],null);return{c(){s&&s.c()},l(t){s&&s.l(t)},m(t,a){s&&s.m(t,a),e=!0},p(t,a){s&&s.p&&(!e||a&1024)&&ke(s,n,t,t[10],e?xe(n,t[10],a,null):ye(t[10]),null)},i(t){e||(E(s,t),e=!0)},o(t){H(s,t),e=!1},d(t){s&&s.d(t)}}}function Oe(i){let e,n,s,t,a;return n=new Me({props:{preRender:i[4],msDelayBetweenChars:i[2],msDelayBetweenElements:i[1],$$slots:{default:[qe]},$$scope:{ctx:i}}}),n.$on("elementAdded",i[7]),{c(){e=y("div"),S(n.$$.fragment),this.h()},l(l){e=x(l,"DIV",{class:!0,style:!0});var r=P(e);R(n.$$.fragment,r),r.forEach(p),this.h()},h(){d(e,"class",s=i[0]+" overflow-hidden rounded-md transition-height"),d(e,"style",t=i[4]?"":`height: ${i[5]}px; transition: height ${i[3]}ms;`)},m(l,r){N(l,e,r),A(n,e,null),i[9](e),a=!0},p(l,[r]){const o={};r&16&&(o.preRender=l[4]),r&4&&(o.msDelayBetweenChars=l[2]),r&2&&(o.msDelayBetweenElements=l[1]),r&1024&&(o.$$scope={dirty:r,ctx:l}),n.$set(o),(!a||r&1&&s!==(s=l[0]+" overflow-hidden rounded-md transition-height"))&&d(e,"class",s),(!a||r&56&&t!==(t=l[4]?"":`height: ${l[5]}px; transition: height ${l[3]}ms;`))&&d(e,"style",t)},i(l){a||(E(n.$$.fragment,l),a=!0)},o(l){H(n.$$.fragment,l),a=!1},d(l){l&&p(e),M(n),i[9](null)}}}function Ge(i,e,n){let{$$slots:s={},$$scope:t}=e,a=0,l;function r(){Math.abs(l.scrollHeight-a)<2||n(5,a=l.scrollHeight)}let{class:o=""}=e,{msDelayBetweenElements:h=5e3,msDelayBetweenChars:w=150,msDelayHeightTransition:k=300,preRender:$=!1}=e;function u(c){Ce[c?"unshift":"push"](()=>{l=c,n(6,l)})}return i.$$set=c=>{"class"in c&&n(0,o=c.class),"msDelayBetweenElements"in c&&n(1,h=c.msDelayBetweenElements),"msDelayBetweenChars"in c&&n(2,w=c.msDelayBetweenChars),"msDelayHeightTransition"in c&&n(3,k=c.msDelayHeightTransition),"preRender"in c&&n(4,$=c.preRender),"$$scope"in c&&n(10,t=c.$$scope)},[o,h,w,k,$,a,l,r,s,u,t]}class Ue extends F{constructor(e){super(),z(this,e,Ge,Oe,X,{class:0,msDelayBetweenElements:1,msDelayBetweenChars:2,msDelayHeightTransition:3,preRender:4})}}function Xe(i){let e,n="Hi!",s,t,a=`<div class="max-w-[9ch] sm:max-w-full">My name is
                  <span class="px-1 font-bold text-black rounded-lg w-fit bg-primary">CodeVogel
                  </span>.</div>`,l,r,o=`I make <span class="text-primary">games</span> and build
               <span class="text-primary">software</span>.`,h,w,k=`Check out some of my
               <a href="/projects" class="font-normal underline text-primary"><span>projects<iconify-icon class="ms-1" icon="ion:open-outline"></iconify-icon></span></a>
               !`;return{c(){e=y("h1"),e.textContent=n,s=I(),t=y("h2"),t.innerHTML=a,l=I(),r=y("div"),r.innerHTML=o,h=I(),w=y("div"),w.innerHTML=k,this.h()},l($){e=x($,"H1",{"data-svelte-h":!0}),U(e)!=="svelte-3kvvl0"&&(e.textContent=n),s=T($),t=x($,"H2",{class:!0,"data-svelte-h":!0}),U(t)!=="svelte-1unb1e"&&(t.innerHTML=a),l=T($),r=x($,"DIV",{class:!0,"data-svelte-h":!0}),U(r)!=="svelte-14eny31"&&(r.innerHTML=o),h=T($),w=x($,"DIV",{class:!0,"data-svelte-h":!0}),U(w)!=="svelte-zds37h"&&(w.innerHTML=k),this.h()},h(){d(t,"class","svelte-1jn2qkf"),d(r,"class","mt-2 font-extralight"),d(w,"class","font-extralight")},m($,u){N($,e,u),N($,s,u),N($,t,u),N($,l,u),N($,r,u),N($,h,u),N($,w,u)},p:he,d($){$&&(p(e),p(s),p(t),p(l),p(r),p(h),p(w))}}}function Fe(i){let e,n,s,t,a,l,r,o;return t=new Ue({props:{class:"p-8 rounded-lg shadow-xl bg-inherit shadow-black/80 min-w-[28ch]",msDelayBetweenChars:20,msDelayBetweenElements:500,preRender:!1,$$slots:{default:[Xe]},$$scope:{ctx:i}}}),{c(){e=y("div"),n=y("div"),s=y("div"),S(t.$$.fragment),a=I(),l=y("img"),this.h()},l(h){e=x(h,"DIV",{class:!0});var w=P(e);n=x(w,"DIV",{class:!0});var k=P(n);s=x(k,"DIV",{class:!0});var $=P(s);R(t.$$.fragment,$),$.forEach(p),k.forEach(p),a=T(w),l=x(w,"IMG",{class:!0,src:!0}),w.forEach(p),this.h()},h(){d(s,"class","relative speech-bubble rounded-2xl bg-background-300 svelte-1jn2qkf"),d(n,"class","min-h-[10lh] mt-8 content-end"),d(l,"class","w-[8rem] mt-12 shadow-[5px_6px_15px_2px_#000000aa] rounded-[100vw]"),ve(l.src,r="/logos/logo-codevogel-head.svg")||d(l,"src",r),d(e,"class","flex flex-col items-center")},m(h,w){N(h,e,w),v(e,n),v(n,s),A(t,s,null),v(e,a),v(e,l),o=!0},p(h,[w]){const k={};w&1&&(k.$$scope={dirty:w,ctx:h}),t.$set(k)},i(h){o||(E(t.$$.fragment,h),o=!0)},o(h){H(t.$$.fragment,h),o=!1},d(h){h&&p(e),M(t)}}}class ze extends F{constructor(e){super(),z(this,e,null,Fe,X,{})}}function Je(i){let e,n,s;const t=i[4].default,a=$e(t,i,i[3],null);return{c(){e=y("div"),a&&a.c(),this.h()},l(l){e=x(l,"DIV",{class:!0,style:!0});var r=P(e);a&&a.l(r),r.forEach(p),this.h()},h(){d(e,"class","viewnimation out-view svelte-15svw6i"),d(e,"style",n=`transform: translateX(${i[0]?"-":""}100%)`)},m(l,r){N(l,e,r),a&&a.m(e,null),i[5](e),s=!0},p(l,[r]){a&&a.p&&(!s||r&8)&&ke(a,t,l,l[3],s?xe(t,l[3],r,null):ye(l[3]),null),(!s||r&1&&n!==(n=`transform: translateX(${l[0]?"-":""}100%)`))&&d(e,"style",n)},i(l){s||(E(a,l),s=!0)},o(l){H(a,l),s=!1},d(l){l&&p(e),a&&a.d(l),i[5](null)}}}const Ie="in-view";function Ye(i,e,n){let{$$slots:s={},$$scope:t}=e,a;ge(()=>{new IntersectionObserver(w=>{w.forEach(k=>{k.isIntersecting?k.target.classList.add(Ie):r||k.target.classList.remove(Ie)})},{threshold:0}).observe(a)});let{fromLeft:l=!0}=e,{stay:r=!0}=e;function o(h){Ce[h?"unshift":"push"](()=>{a=h,n(1,a)})}return i.$$set=h=>{"fromLeft"in h&&n(0,l=h.fromLeft),"stay"in h&&n(2,r=h.stay),"$$scope"in h&&n(3,t=h.$$scope)},[l,a,r,t,s,o]}class me extends F{constructor(e){super(),z(this,e,Ye,Je,X,{fromLeft:0,stay:2})}}function Qe(i){let e,n,s;return{c(){e=y("div"),n=y("img"),this.h()},l(t){e=x(t,"DIV",{class:!0,style:!0});var a=P(e);n=x(a,"IMG",{src:!0,class:!0,width:!0,height:!0}),a.forEach(p),this.h()},h(){ve(n.src,s=i[1])||d(n,"src",s),d(n,"class","opacity-0 aspect-square"),d(n,"width","100vh"),d(n,"height","100vh"),d(e,"class",i[0]),de(e,"mask","url("+i[1]+") no-repeat center")},m(t,a){N(t,e,a),v(e,n)},p(t,[a]){a&2&&!ve(n.src,s=t[1])&&d(n,"src",s),a&1&&d(e,"class",t[0]),a&2&&de(e,"mask","url("+t[1]+") no-repeat center")},i:he,o:he,d(t){t&&p(e)}}}function Ke(i,e,n){let{class:s}=e,{path:t}=e;return i.$$set=a=>{"class"in a&&n(0,s=a.class),"path"in a&&n(1,t=a.path)},[s,t]}class We extends F{constructor(e){super(),z(this,e,Ke,Qe,X,{class:0,path:1})}}function Ze(i){let e,n,s,t,a,l,r,o=i[0].position+"",h,w,k,$,u,c,B,W,f=i[0].location+"",V,m,g,b=fe(i[0].timespan.startDate)+"",_,L,O=fe(i[0].timespan.endDate)+"",C,D,J,Y=i[0].description+"",K,G;return s=new We({props:{path:i[0].company.logo,class:"aspect-square bg-white"}}),{c(){e=y("div"),n=y("a"),S(s.$$.fragment),a=I(),l=y("div"),r=y("h1"),h=Z(o),w=I(),k=y("div"),$=y("div"),u=y("div"),c=y("span"),B=y("iconify-icon"),W=I(),V=Z(f),m=I(),g=y("p"),_=Z(b),L=Z(" - "),C=Z(O),D=I(),J=y("span"),K=Z(Y),this.h()},l(j){e=x(j,"DIV",{class:!0});var q=P(e);n=x(q,"A",{class:!0,href:!0});var se=P(n);R(s.$$.fragment,se),se.forEach(p),a=T(q),l=x(q,"DIV",{class:!0});var ae=P(l);r=x(ae,"H1",{class:!0});var be=P(r);h=ee(be,o),be.forEach(p),w=T(ae),k=x(ae,"DIV",{class:!0});var ie=P(k);$=x(ie,"DIV",{class:!0});var De=P($);u=x(De,"DIV",{class:!0});var re=P(u);c=x(re,"SPAN",{});var oe=P(c);B=x(oe,"ICONIFY-ICON",{icon:!0,class:!0}),P(B).forEach(p),W=T(oe),V=ee(oe,f),oe.forEach(p),m=T(re),g=x(re,"P",{});var ce=P(g);_=ee(ce,b),L=ee(ce," - "),C=ee(ce,O),ce.forEach(p),re.forEach(p),De.forEach(p),D=T(ie),J=x(ie,"SPAN",{class:!0});var Ee=P(J);K=ee(Ee,Y),Ee.forEach(p),ie.forEach(p),ae.forEach(p),q.forEach(p),this.h()},h(){d(n,"class","w-32 p-4 [&_div]:hover:bg-primary"),d(n,"href",t=i[0].company.website),d(r,"class","font-mono text-primary svelte-k9udqk"),le(B,"icon","mdi-location"),le(B,"class","text-primary"),d(u,"class","text-xs text-white/50"),d($,"class","transition-opacity duration-300 group-hover:opacity-0 group-hover:hidden"),d(J,"class","hidden text-xs text-white/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:block"),d(k,"class","relative"),d(l,"class","group flex w-full max-w-[24ch] flex-col justify-center"),d(e,"class","mx-2 grid max-w-lg grid-cols-[min-content,auto] gap-x-4")},m(j,q){N(j,e,q),v(e,n),A(s,n,null),v(e,a),v(e,l),v(l,r),v(r,h),v(l,w),v(l,k),v(k,$),v($,u),v(u,c),v(c,B),v(c,W),v(c,V),v(u,m),v(u,g),v(g,_),v(g,L),v(g,C),v(k,D),v(k,J),v(J,K),G=!0},p(j,[q]){const se={};q&1&&(se.path=j[0].company.logo),s.$set(se),(!G||q&1&&t!==(t=j[0].company.website))&&d(n,"href",t),(!G||q&1)&&o!==(o=j[0].position+"")&&ne(h,o),(!G||q&1)&&f!==(f=j[0].location+"")&&ne(V,f),(!G||q&1)&&b!==(b=fe(j[0].timespan.startDate)+"")&&ne(_,b),(!G||q&1)&&O!==(O=fe(j[0].timespan.endDate)+"")&&ne(C,O),(!G||q&1)&&Y!==(Y=j[0].description+"")&&ne(K,Y)},i(j){G||(E(s.$$.fragment,j),G=!0)},o(j){H(s.$$.fragment,j),G=!1},d(j){j&&p(e),M(s)}}}function fe(i){const e=new Date(i);return isNaN(e.getTime())?"Present":e.toLocaleDateString("en-US",{month:"short",year:"numeric"})}function et(i,e,n){let{experience:s}=e;return i.$$set=t=>{"experience"in t&&n(0,s=t.experience)},[s]}class je extends F{constructor(e){super(),z(this,e,et,Ze,X,{experience:0})}}function Te(i,e,n){const s=i.slice();return s[2]=e[n],s[4]=n,s}function Be(i,e,n){const s=i.slice();return s[2]=e[n],s[4]=n,s}function tt(i){let e,n="Experience",s,t,a="(Hover over the cards to see more details)";return{c(){e=y("h1"),e.textContent=n,s=I(),t=y("p"),t.textContent=a,this.h()},l(l){e=x(l,"H1",{class:!0,"data-svelte-h":!0}),U(e)!=="svelte-3oo8v4"&&(e.textContent=n),s=T(l),t=x(l,"P",{class:!0,"data-svelte-h":!0}),U(t)!=="svelte-wws5q5"&&(t.textContent=a),this.h()},h(){d(e,"class","text-center"),d(t,"class","mt-2 text-xs text-white/25")},m(l,r){N(l,e,r),N(l,s,r),N(l,t,r)},p:he,d(l){l&&(p(e),p(s),p(t))}}}function st(i){let e,n;return e=new je({props:{experience:i[2]}}),{c(){S(e.$$.fragment)},l(s){R(e.$$.fragment,s)},m(s,t){A(e,s,t),n=!0},p(s,t){const a={};t&1&&(a.experience=s[2]),e.$set(a)},i(s){n||(E(e.$$.fragment,s),n=!0)},o(s){H(e.$$.fragment,s),n=!1},d(s){M(e,s)}}}function He(i){let e,n;return e=new me({props:{fromLeft:i[4]%2!==0,$$slots:{default:[st]},$$scope:{ctx:i}}}),{c(){S(e.$$.fragment)},l(s){R(e.$$.fragment,s)},m(s,t){A(e,s,t),n=!0},p(s,t){const a={};t&65&&(a.$$scope={dirty:t,ctx:s}),e.$set(a)},i(s){n||(E(e.$$.fragment,s),n=!0)},o(s){H(e.$$.fragment,s),n=!1},d(s){M(e,s)}}}function nt(i){let e,n,s;return e=new je({props:{experience:i[2]}}),{c(){S(e.$$.fragment),n=I()},l(t){R(e.$$.fragment,t),n=T(t)},m(t,a){A(e,t,a),N(t,n,a),s=!0},p(t,a){const l={};a&2&&(l.experience=t[2]),e.$set(l)},i(t){s||(E(e.$$.fragment,t),s=!0)},o(t){H(e.$$.fragment,t),s=!1},d(t){t&&p(n),M(e,t)}}}function Ve(i){let e,n;return e=new me({props:{fromLeft:i[4]%2!==0,$$slots:{default:[nt]},$$scope:{ctx:i}}}),{c(){S(e.$$.fragment)},l(s){R(e.$$.fragment,s)},m(s,t){A(e,s,t),n=!0},p(s,t){const a={};t&66&&(a.$$scope={dirty:t,ctx:s}),e.$set(a)},i(s){n||(E(e.$$.fragment,s),n=!0)},o(s){H(e.$$.fragment,s),n=!1},d(s){M(e,s)}}}function lt(i){let e,n,s,t,a,l="Current jobs",r,o,h,w="Past jobs",k,$;n=new me({props:{$$slots:{default:[tt]},$$scope:{ctx:i}}});let u=te(i[0]),c=[];for(let m=0;m<u.length;m+=1)c[m]=He(Be(i,u,m));const B=m=>H(c[m],1,1,()=>{c[m]=null});let W=te(i[1]),f=[];for(let m=0;m<W.length;m+=1)f[m]=Ve(Te(i,W,m));const V=m=>H(f[m],1,1,()=>{f[m]=null});return{c(){e=y("div"),S(n.$$.fragment),s=I(),t=y("div"),a=y("h3"),a.textContent=l,r=I();for(let m=0;m<c.length;m+=1)c[m].c();o=I(),h=y("h3"),h.textContent=w,k=I();for(let m=0;m<f.length;m+=1)f[m].c();this.h()},l(m){e=x(m,"DIV",{class:!0});var g=P(e);R(n.$$.fragment,g),s=T(g),t=x(g,"DIV",{class:!0});var b=P(t);a=x(b,"H3",{class:!0,"data-svelte-h":!0}),U(a)!=="svelte-ba3y61"&&(a.textContent=l),r=T(b);for(let _=0;_<c.length;_+=1)c[_].l(b);o=T(b),h=x(b,"H3",{class:!0,"data-svelte-h":!0}),U(h)!=="svelte-5x5d2c"&&(h.textContent=w),k=T(b);for(let _=0;_<f.length;_+=1)f[_].l(b);b.forEach(p),g.forEach(p),this.h()},h(){d(a,"class","text-center text-white/50 font-mono"),d(h,"class","text-center text-white/50 font-mono"),d(t,"class","grid items-center grid-cols-1 w-max-lg pt-8 pb-8"),d(e,"class","flex flex-col items-center w-full")},m(m,g){N(m,e,g),A(n,e,null),v(e,s),v(e,t),v(t,a),v(t,r);for(let b=0;b<c.length;b+=1)c[b]&&c[b].m(t,null);v(t,o),v(t,h),v(t,k);for(let b=0;b<f.length;b+=1)f[b]&&f[b].m(t,null);$=!0},p(m,[g]){const b={};if(g&64&&(b.$$scope={dirty:g,ctx:m}),n.$set(b),g&1){u=te(m[0]);let _;for(_=0;_<u.length;_+=1){const L=Be(m,u,_);c[_]?(c[_].p(L,g),E(c[_],1)):(c[_]=He(L),c[_].c(),E(c[_],1),c[_].m(t,o))}for(_e(),_=u.length;_<c.length;_+=1)B(_);we()}if(g&2){W=te(m[1]);let _;for(_=0;_<W.length;_+=1){const L=Te(m,W,_);f[_]?(f[_].p(L,g),E(f[_],1)):(f[_]=Ve(L),f[_].c(),E(f[_],1),f[_].m(t,null))}for(_e(),_=W.length;_<f.length;_+=1)V(_);we()}},i(m){if(!$){E(n.$$.fragment,m);for(let g=0;g<u.length;g+=1)E(c[g]);for(let g=0;g<W.length;g+=1)E(f[g]);$=!0}},o(m){H(n.$$.fragment,m),c=c.filter(Boolean);for(let g=0;g<c.length;g+=1)H(c[g]);f=f.filter(Boolean);for(let g=0;g<f.length;g+=1)H(f[g]);$=!1},d(m){m&&p(e),M(n),pe(c,m),pe(f,m)}}}function at(i,e,n){let{currentWork:s}=e,{pastWork:t}=e;return i.$$set=a=>{"currentWork"in a&&n(0,s=a.currentWork),"pastWork"in a&&n(1,t=a.pastWork)},[s,t]}class it extends F{constructor(e){super(),z(this,e,at,lt,X,{currentWork:0,pastWork:1})}}function Le(i,e,n){const s=i.slice();return s[1]=e[n],s}function Ne(i){let e,n,s,t,a;return n=new We({props:{path:"logos/"+i[1].svgPath,class:"aspect-square bg-white"}}),{c(){e=y("a"),S(n.$$.fragment),s=I(),this.h()},l(l){e=x(l,"A",{class:!0,href:!0});var r=P(e);R(n.$$.fragment,r),s=T(r),r.forEach(p),this.h()},h(){d(e,"class","w-16 [&_div]:hover:bg-primary"),d(e,"href",t=i[1].link)},m(l,r){N(l,e,r),A(n,e,null),v(e,s),a=!0},p(l,r){const o={};r&1&&(o.path="logos/"+l[1].svgPath),n.$set(o),(!a||r&1&&t!==(t=l[1].link))&&d(e,"href",t)},i(l){a||(E(n.$$.fragment,l),a=!0)},o(l){H(n.$$.fragment,l),a=!1},d(l){l&&p(e),M(n)}}}function rt(i){let e,n,s=te(i[0]),t=[];for(let l=0;l<s.length;l+=1)t[l]=Ne(Le(i,s,l));const a=l=>H(t[l],1,1,()=>{t[l]=null});return{c(){e=y("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=x(l,"DIV",{class:!0});var r=P(e);for(let o=0;o<t.length;o+=1)t[o].l(r);r.forEach(p),this.h()},h(){d(e,"class","flex max-w-48 flex-wrap justify-center")},m(l,r){N(l,e,r);for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(e,null);n=!0},p(l,[r]){if(r&1){s=te(l[0]);let o;for(o=0;o<s.length;o+=1){const h=Le(l,s,o);t[o]?(t[o].p(h,r),E(t[o],1)):(t[o]=Ne(h),t[o].c(),E(t[o],1),t[o].m(e,null))}for(_e(),o=s.length;o<t.length;o+=1)a(o);we()}},i(l){if(!n){for(let r=0;r<s.length;r+=1)E(t[r]);n=!0}},o(l){t=t.filter(Boolean);for(let r=0;r<t.length;r+=1)H(t[r]);n=!1},d(l){l&&p(e),pe(t,l)}}}function ot(i,e,n){let{icons:s}=e;return i.$$set=t=>{"icons"in t&&n(0,s=t.icons)},[s]}class ue extends F{constructor(e){super(),z(this,e,ot,rt,X,{icons:0})}}const ct=[{title:"Unity",svgPath:"game_engines/unity.svg",link:"https://unity.com/"},{title:"Unreal Engine",svgPath:"game_engines/unreal.svg",link:"https://www.unrealengine.com/"},{title:"Godot",svgPath:"game_engines/godot.svg",link:"https://godotengine.org/"}],ft=[{title:"Blender",svgPath:"design_tools/blender.svg",link:"https://www.blender.org/"},{title:"Figma",svgPath:"design_tools/figma.svg",link:"https://www.figma.com/"},{title:"Adobe Photoshop",svgPath:"design_tools/photoshop.svg",link:"https://www.adobe.com/products/photoshop.html"},{title:"Adobe Illustrator",svgPath:"design_tools/illustrator.svg",link:"https://www.adobe.com/products/illustrator.html"},{title:"Adobe Lightroom",svgPath:"design_tools/lightroom.svg",link:"https://www.adobe.com/products/photoshop-lightroom.html"}],ut=[{title:"Svelte",svgPath:"technologies/svelte.svg",link:"https://svelte.dev/"},{title:"Vue",svgPath:"technologies/vue.svg",link:"https://vuejs.org/"},{title:"React",svgPath:"technologies/react.svg",link:"https://reactjs.org/"},{title:"Tailwind",svgPath:"technologies/tailwind.svg",link:"https://tailwindcss.com/"},{title:"Bootstrap",svgPath:"technologies/bootstrap.svg",link:"https://getbootstrap.com/"},{title:"Xamarin Forms",svgPath:"technologies/xamarin.svg",link:"https://dotnet.microsoft.com/apps/xamarin/xamarin-forms"},{title:"Umbraco",svgPath:"technologies/umbraco.svg",link:"https://umbraco.com/"}],ht=[{title:"C",svgPath:"langs/c.svg",link:"https://en.wikipedia.org/wiki/C_(programming_language)"},{title:"C++",svgPath:"langs/cplusplus.svg",link:"https://isocpp.org/"},{title:"C#",svgPath:"langs/csharp.svg",link:"https://learn.microsoft.com/en-us/dotnet/csharp/"},{title:"Javascript",svgPath:"langs/javascript.svg",link:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"},{title:"Typescript",svgPath:"langs/typescript.svg",link:"https://www.typescriptlang.org/"},{title:"Python",svgPath:"langs/python.svg",link:"https://www.python.org/"},{title:"Java",svgPath:"langs/java.svg",link:"https://www.java.com/"},{title:"SQL",svgPath:"langs/sql.svg",link:"https://en.wikipedia.org/wiki/SQL"},{title:"Kotlin",svgPath:"langs/kotlin.svg",link:"https://kotlinlang.org/"},{title:"Lua",svgPath:"langs/lua.svg",link:"https://www.lua.org/"}],gt={gameEngines:ct,designTools:ft,technologies:ut,languages:ht};function mt(i){let e,n="Skills",s,t,a,l="Game Engines",r,o,h,w,k="Design Tools",$,u,c,B,W="Technologies",f,V,m,g,b="Programming Languages",_,L,O;return o=new ue({props:{icons:Q(i[0].gameEngines)}}),u=new ue({props:{icons:Q(i[0].designTools)}}),V=new ue({props:{icons:Q(i[0].technologies)}}),L=new ue({props:{icons:Q(i[0].languages)}}),{c(){e=y("h1"),e.textContent=n,s=I(),t=y("div"),a=y("h3"),a.textContent=l,r=I(),S(o.$$.fragment),h=I(),w=y("h3"),w.textContent=k,$=I(),S(u.$$.fragment),c=I(),B=y("h3"),B.textContent=W,f=I(),S(V.$$.fragment),m=I(),g=y("h3"),g.textContent=b,_=I(),S(L.$$.fragment),this.h()},l(C){e=x(C,"H1",{class:!0,"data-svelte-h":!0}),U(e)!=="svelte-xipu1y"&&(e.textContent=n),s=T(C),t=x(C,"DIV",{class:!0});var D=P(t);a=x(D,"H3",{class:!0,"data-svelte-h":!0}),U(a)!=="svelte-j3r15v"&&(a.textContent=l),r=T(D),R(o.$$.fragment,D),h=T(D),w=x(D,"H3",{class:!0,"data-svelte-h":!0}),U(w)!=="svelte-1v53ewv"&&(w.textContent=k),$=T(D),R(u.$$.fragment,D),c=T(D),B=x(D,"H3",{class:!0,"data-svelte-h":!0}),U(B)!=="svelte-1bjeaj0"&&(B.textContent=W),f=T(D),R(V.$$.fragment,D),m=T(D),g=x(D,"H3",{class:!0,"data-svelte-h":!0}),U(g)!=="svelte-1luotlu"&&(g.textContent=b),_=T(D),R(L.$$.fragment,D),D.forEach(p),this.h()},h(){d(e,"class","text-center"),d(a,"class","text-white/50"),d(w,"class","text-white/50"),d(B,"class","text-white/50"),d(g,"class","text-white/50"),d(t,"class","flex flex-col items-center [&_div]:m-2")},m(C,D){N(C,e,D),N(C,s,D),N(C,t,D),v(t,a),v(t,r),A(o,t,null),v(t,h),v(t,w),v(t,$),A(u,t,null),v(t,c),v(t,B),v(t,f),A(V,t,null),v(t,m),v(t,g),v(t,_),A(L,t,null),O=!0},p(C,[D]){const J={};D&1&&(J.icons=Q(C[0].gameEngines)),o.$set(J);const Y={};D&1&&(Y.icons=Q(C[0].designTools)),u.$set(Y);const K={};D&1&&(K.icons=Q(C[0].technologies)),V.$set(K);const G={};D&1&&(G.icons=Q(C[0].languages)),L.$set(G)},i(C){O||(E(o.$$.fragment,C),E(u.$$.fragment,C),E(V.$$.fragment,C),E(L.$$.fragment,C),O=!0)},o(C){H(o.$$.fragment,C),H(u.$$.fragment,C),H(V.$$.fragment,C),H(L.$$.fragment,C),O=!1},d(C){C&&(p(e),p(s),p(t)),M(o),M(u),M(V),M(L)}}}function Q(i){return i.map(e=>({title:e.title,svgPath:e.svgPath,link:e.link}))}function dt(i,e,n){let{skills:s}=e;return ge(()=>{console.log(gt)}),i.$$set=t=>{"skills"in t&&n(0,s=t.skills)},[s]}class vt extends F{constructor(e){super(),z(this,e,dt,mt,X,{skills:0})}}function pt(i){let e,n;return e=new ze({}),{c(){S(e.$$.fragment)},l(s){R(e.$$.fragment,s)},m(s,t){A(e,s,t),n=!0},i(s){n||(E(e.$$.fragment,s),n=!0)},o(s){H(e.$$.fragment,s),n=!1},d(s){M(e,s)}}}function _t(i){let e,n,s,t,a,l,r,o,h,w,k,$;return a=new me({props:{$$slots:{default:[pt]},$$scope:{ctx:i}}}),o=new it({props:{pastWork:i[0].pastWork,currentWork:i[0].currentWork}}),k=new vt({props:{skills:i[0].skills}}),{c(){e=y("div"),n=y("iconify-icon"),s=I(),t=y("div"),S(a.$$.fragment),l=I(),r=y("div"),S(o.$$.fragment),h=I(),w=y("div"),S(k.$$.fragment),this.h()},l(u){e=x(u,"DIV",{class:!0});var c=P(e);n=x(c,"ICONIFY-ICON",{id:!0,icon:!0,class:!0}),P(n).forEach(p),s=T(c),t=x(c,"DIV",{class:!0});var B=P(t);R(a.$$.fragment,B),B.forEach(p),l=T(c),r=x(c,"DIV",{});var W=P(r);R(o.$$.fragment,W),W.forEach(p),h=T(c),w=x(c,"DIV",{});var f=P(w);R(k.$$.fragment,f),f.forEach(p),c.forEach(p),this.h()},h(){le(n,"id","scroll-indicator"),le(n,"icon","mdi:arrow-bottom-circle"),le(n,"class","fixed bottom-6 right-6 text-6xl text-primary/50"),d(t,"class","flex min-h-[calc(100dvh-theme(spacing.nav))] w-full flex-col items-center"),d(e,"class","grid grid-cols-1 gap-y-8")},m(u,c){N(u,e,c),v(e,n),v(e,s),v(e,t),A(a,t,null),v(e,l),v(e,r),A(o,r,null),v(e,h),v(e,w),A(k,w,null),$=!0},p(u,[c]){const B={};c&2&&(B.$$scope={dirty:c,ctx:u}),a.$set(B);const W={};c&1&&(W.pastWork=u[0].pastWork),c&1&&(W.currentWork=u[0].currentWork),o.$set(W);const f={};c&1&&(f.skills=u[0].skills),k.$set(f)},i(u){$||(E(a.$$.fragment,u),E(o.$$.fragment,u),E(k.$$.fragment,u),$=!0)},o(u){H(a.$$.fragment,u),H(o.$$.fragment,u),H(k.$$.fragment,u),$=!1},d(u){u&&p(e),M(a),M(o),M(k)}}}function wt(i,e,n){let{data:s}=e;return ge(()=>{window.addEventListener("scroll",()=>{let t=document.querySelector("#scroll-indicator");t&&(t.style.opacity=`${1-scrollY/200}`)})}),i.$$set=t=>{"data"in t&&n(0,s=t.data)},[s]}class xt extends F{constructor(e){super(),z(this,e,wt,_t,X,{data:0})}}export{xt as component};