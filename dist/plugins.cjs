"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const g1=require("./components-Da3DbqMS.cjs"),u=require("vue"),x3=()=>{};let r2={},W3={},j3=null,_3={mark:x3,measure:x3};try{typeof window<"u"&&(r2=window),typeof document<"u"&&(W3=document),typeof MutationObserver<"u"&&(j3=MutationObserver),typeof performance<"u"&&(_3=performance)}catch{}const{userAgent:g3=""}=r2.navigator||{},R=r2,h=W3,v3=j3,M1=_3;R.document;const q=!!h.documentElement&&!!h.head&&typeof h.addEventListener=="function"&&typeof h.createElement=="function",X3=~g3.indexOf("MSIE")||~g3.indexOf("Trident/");var p="classic",K3="duotone",b="sharp",w="sharp-duotone",os=[p,K3,b,w],is={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},N3={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},fs=["kit"],ts=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,rs=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,zs={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},ms={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},Ls={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},Ms={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},Cs={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},hs={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},Y3={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},ps=["solid","regular","light","thin","duotone","brands"],Q3=[1,2,3,4,5,6,7,8,9,10],ds=Q3.concat([11,12,13,14,15,16,17,18,19,20]),J={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},us=[...Object.keys(Ms),...ps,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",J.GROUP,J.SWAP_OPACITY,J.PRIMARY,J.SECONDARY].concat(Q3.map(c=>"".concat(c,"x"))).concat(ds.map(c=>"w-".concat(c))),xs={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},gs={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},vs={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},b3={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const P="___FONT_AWESOME___",_1=16,J3="fa",c4="svg-inline--fa",W="data-fa-i2svg",X1="data-fa-pseudo-element",Ns="data-fa-pseudo-element-pending",z2="data-prefix",m2="data-icon",w3="fontawesome-i2svg",bs="async",ws=["HTML","HEAD","STYLE","SCRIPT"],l4=(()=>{try{return process.env.NODE_ENV==="production"}catch{return!1}})(),a4=[p,b,w];function o1(c){return new Proxy(c,{get(l,a){return a in l?l[a]:l[p]}})}const s4={...Y3};s4[p]={...Y3[p],...N3.kit,...N3["kit-duotone"]};const U=o1(s4),K1={...hs};K1[p]={...K1[p],...b3.kit,...b3["kit-duotone"]};const e1=o1(K1),Y1={...Cs};Y1[p]={...Y1[p],...vs.kit};const I=o1(Y1),Q1={...Ls};Q1[p]={...Q1[p],...gs.kit};const ks=o1(Q1),Ss=ts,e4="fa-layers-text",ys=rs,Hs={...is};o1(Hs);const As=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],G1=J,K=new Set;Object.keys(e1[p]).map(K.add.bind(K));Object.keys(e1[b]).map(K.add.bind(K));Object.keys(e1[w]).map(K.add.bind(K));const Vs=[...fs,...us],l1=R.FontAwesomeConfig||{};function Bs(c){var l=h.querySelector("script["+c+"]");if(l)return l.getAttribute(c)}function Fs(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}h&&typeof h.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(l=>{let[a,s]=l;const e=Fs(Bs(a));e!=null&&(l1[s]=e)});const n4={styleDefault:"solid",familyDefault:"classic",cssPrefix:J3,replacementClass:c4,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};l1.familyPrefix&&(l1.cssPrefix=l1.familyPrefix);const Y={...n4,...l1};Y.autoReplaceSvg||(Y.observeMutations=!1);const r={};Object.keys(n4).forEach(c=>{Object.defineProperty(r,c,{enumerable:!0,set:function(l){Y[c]=l,a1.forEach(a=>a(r))},get:function(){return Y[c]}})});Object.defineProperty(r,"familyPrefix",{enumerable:!0,set:function(c){Y.cssPrefix=c,a1.forEach(l=>l(r))},get:function(){return Y.cssPrefix}});R.FontAwesomeConfig=r;const a1=[];function Ps(c){return a1.push(c),()=>{a1.splice(a1.indexOf(c),1)}}const D=_1,V={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ts(c){if(!c||!q)return;const l=h.createElement("style");l.setAttribute("type","text/css"),l.innerHTML=c;const a=h.head.childNodes;let s=null;for(let e=a.length-1;e>-1;e--){const n=a[e],o=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(s=n)}return h.head.insertBefore(l,s),c}const qs="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function n1(){let c=12,l="";for(;c-- >0;)l+=qs[Math.random()*62|0];return l}function Q(c){const l=[];for(let a=(c||[]).length>>>0;a--;)l[a]=c[a];return l}function L2(c){return c.classList?Q(c.classList):(c.getAttribute("class")||"").split(" ").filter(l=>l)}function o4(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ds(c){return Object.keys(c||{}).reduce((l,a)=>l+"".concat(a,'="').concat(o4(c[a]),'" '),"").trim()}function v1(c){return Object.keys(c||{}).reduce((l,a)=>l+"".concat(a,": ").concat(c[a].trim(),";"),"")}function M2(c){return c.size!==V.size||c.x!==V.x||c.y!==V.y||c.rotate!==V.rotate||c.flipX||c.flipY}function Zs(c){let{transform:l,containerWidth:a,iconWidth:s}=c;const e={transform:"translate(".concat(a/2," 256)")},n="translate(".concat(l.x*32,", ").concat(l.y*32,") "),o="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),i="rotate(".concat(l.rotate," 0 0)"),f={transform:"".concat(n," ").concat(o," ").concat(i)},t={transform:"translate(".concat(s/2*-1," -256)")};return{outer:e,inner:f,path:t}}function Rs(c){let{transform:l,width:a=_1,height:s=_1,startCentered:e=!1}=c,n="";return e&&X3?n+="translate(".concat(l.x/D-a/2,"em, ").concat(l.y/D-s/2,"em) "):e?n+="translate(calc(-50% + ".concat(l.x/D,"em), calc(-50% + ").concat(l.y/D,"em)) "):n+="translate(".concat(l.x/D,"em, ").concat(l.y/D,"em) "),n+="scale(".concat(l.size/D*(l.flipX?-1:1),", ").concat(l.size/D*(l.flipY?-1:1),") "),n+="rotate(".concat(l.rotate,"deg) "),n}var Es=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function i4(){const c=J3,l=c4,a=r.cssPrefix,s=r.replacementClass;let e=Es;if(a!==c||s!==l){const n=new RegExp("\\.".concat(c,"\\-"),"g"),o=new RegExp("\\--".concat(c,"\\-"),"g"),i=new RegExp("\\.".concat(l),"g");e=e.replace(n,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(i,".".concat(s))}return e}let k3=!1;function U1(){r.autoAddCss&&!k3&&(Ts(i4()),k3=!0)}var $s={mixout(){return{dom:{css:i4,insertCss:U1}}},hooks(){return{beforeDOMElementCreation(){U1()},beforeI2svg(){U1()}}}};const T=R||{};T[P]||(T[P]={});T[P].styles||(T[P].styles={});T[P].hooks||(T[P].hooks={});T[P].shims||(T[P].shims=[]);var B=T[P];const f4=[],t4=function(){h.removeEventListener("DOMContentLoaded",t4),p1=1,f4.map(c=>c())};let p1=!1;q&&(p1=(h.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(h.readyState),p1||h.addEventListener("DOMContentLoaded",t4));function Os(c){q&&(p1?setTimeout(c,0):f4.push(c))}function i1(c){const{tag:l,attributes:a={},children:s=[]}=c;return typeof c=="string"?o4(c):"<".concat(l," ").concat(Ds(a),">").concat(s.map(i1).join(""),"</").concat(l,">")}function S3(c,l,a){if(c&&c[l]&&c[l][a])return{prefix:l,iconName:a,icon:c[l][a]}}var I1=function(l,a,s,e){var n=Object.keys(l),o=n.length,i=a,f,t,z;for(s===void 0?(f=1,z=l[n[0]]):(f=0,z=s);f<o;f++)t=n[f],z=i(z,l[t],t,l);return z};function Gs(c){const l=[];let a=0;const s=c.length;for(;a<s;){const e=c.charCodeAt(a++);if(e>=55296&&e<=56319&&a<s){const n=c.charCodeAt(a++);(n&64512)==56320?l.push(((e&1023)<<10)+(n&1023)+65536):(l.push(e),a--)}else l.push(e)}return l}function J1(c){const l=Gs(c);return l.length===1?l[0].toString(16):null}function Us(c,l){const a=c.length;let s=c.charCodeAt(l),e;return s>=55296&&s<=56319&&a>l+1&&(e=c.charCodeAt(l+1),e>=56320&&e<=57343)?(s-55296)*1024+e-56320+65536:s}function y3(c){return Object.keys(c).reduce((l,a)=>{const s=c[a];return!!s.icon?l[s.iconName]=s.icon:l[a]=s,l},{})}function c2(c,l){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:s=!1}=a,e=y3(l);typeof B.hooks.addPack=="function"&&!s?B.hooks.addPack(c,y3(l)):B.styles[c]={...B.styles[c]||{},...e},c==="fas"&&c2("fa",l)}const{styles:G,shims:Is}=B,Ws={[p]:Object.values(I[p]),[b]:Object.values(I[b]),[w]:Object.values(I[w])};let C2=null,r4={},z4={},m4={},L4={},M4={};const js={[p]:Object.keys(U[p]),[b]:Object.keys(U[b]),[w]:Object.keys(U[w])};function _s(c){return~Vs.indexOf(c)}function Xs(c,l){const a=l.split("-"),s=a[0],e=a.slice(1).join("-");return s===c&&e!==""&&!_s(e)?e:null}const C4=()=>{const c=s=>I1(G,(e,n,o)=>(e[o]=I1(n,s,{}),e),{});r4=c((s,e,n)=>(e[3]&&(s[e[3]]=n),e[2]&&e[2].filter(i=>typeof i=="number").forEach(i=>{s[i.toString(16)]=n}),s)),z4=c((s,e,n)=>(s[n]=n,e[2]&&e[2].filter(i=>typeof i=="string").forEach(i=>{s[i]=n}),s)),M4=c((s,e,n)=>{const o=e[2];return s[n]=n,o.forEach(i=>{s[i]=n}),s});const l="far"in G||r.autoFetchSvg,a=I1(Is,(s,e)=>{const n=e[0];let o=e[1];const i=e[2];return o==="far"&&!l&&(o="fas"),typeof n=="string"&&(s.names[n]={prefix:o,iconName:i}),typeof n=="number"&&(s.unicodes[n.toString(16)]={prefix:o,iconName:i}),s},{names:{},unicodes:{}});m4=a.names,L4=a.unicodes,C2=N1(r.styleDefault,{family:r.familyDefault})};Ps(c=>{C2=N1(c.styleDefault,{family:r.familyDefault})});C4();function h2(c,l){return(r4[c]||{})[l]}function Ks(c,l){return(z4[c]||{})[l]}function Z(c,l){return(M4[c]||{})[l]}function h4(c){return m4[c]||{prefix:null,iconName:null}}function Ys(c){const l=L4[c],a=h2("fas",c);return l||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function E(){return C2}const p2=()=>({prefix:null,iconName:null,rest:[]});function N1(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:a=p}=l,s=U[a][c],e=e1[a][c]||e1[a][s],n=c in B.styles?c:null;return e||n||null}const Qs={[p]:Object.keys(I[p]),[b]:Object.keys(I[b]),[w]:Object.keys(I[w])};function b1(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:a=!1}=l,s={[p]:"".concat(r.cssPrefix,"-").concat(p),[b]:"".concat(r.cssPrefix,"-").concat(b),[w]:"".concat(r.cssPrefix,"-").concat(w)};let e=null,n=p;const o=os.filter(f=>f!==K3);o.forEach(f=>{(c.includes(s[f])||c.some(t=>Qs[f].includes(t)))&&(n=f)});const i=c.reduce((f,t)=>{const z=Xs(r.cssPrefix,t);if(G[t]?(t=Ws[n].includes(t)?ks[n][t]:t,e=t,f.prefix=t):js[n].indexOf(t)>-1?(e=t,f.prefix=N1(t,{family:n})):z?f.iconName=z:t!==r.replacementClass&&!o.some(C=>t===s[C])&&f.rest.push(t),!a&&f.prefix&&f.iconName){const C=e==="fa"?h4(f.iconName):{},M=Z(f.prefix,f.iconName);C.prefix&&(e=null),f.iconName=C.iconName||M||f.iconName,f.prefix=C.prefix||f.prefix,f.prefix==="far"&&!G.far&&G.fas&&!r.autoFetchSvg&&(f.prefix="fas")}return f},p2());return(c.includes("fa-brands")||c.includes("fab"))&&(i.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(i.prefix="fad"),!i.prefix&&n===b&&(G.fass||r.autoFetchSvg)&&(i.prefix="fass",i.iconName=Z(i.prefix,i.iconName)||i.iconName),!i.prefix&&n===w&&(G.fasds||r.autoFetchSvg)&&(i.prefix="fasds",i.iconName=Z(i.prefix,i.iconName)||i.iconName),(i.prefix==="fa"||e==="fa")&&(i.prefix=E()||"fas"),i}class Js{constructor(){this.definitions={}}add(){for(var l=arguments.length,a=new Array(l),s=0;s<l;s++)a[s]=arguments[s];const e=a.reduce(this._pullDefinitions,{});Object.keys(e).forEach(n=>{this.definitions[n]={...this.definitions[n]||{},...e[n]},c2(n,e[n]);const o=I[p][n];o&&c2(o,e[n]),C4()})}reset(){this.definitions={}}_pullDefinitions(l,a){const s=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(s).map(e=>{const{prefix:n,iconName:o,icon:i}=s[e],f=i[2];l[n]||(l[n]={}),f.length>0&&f.forEach(t=>{typeof t=="string"&&(l[n][t]=i)}),l[n][o]=i}),l}}let H3=[],_={};const X={},ce=Object.keys(X);function le(c,l){let{mixoutsTo:a}=l;return H3=c,_={},Object.keys(X).forEach(s=>{ce.indexOf(s)===-1&&delete X[s]}),H3.forEach(s=>{const e=s.mixout?s.mixout():{};if(Object.keys(e).forEach(n=>{typeof e[n]=="function"&&(a[n]=e[n]),typeof e[n]=="object"&&Object.keys(e[n]).forEach(o=>{a[n]||(a[n]={}),a[n][o]=e[n][o]})}),s.hooks){const n=s.hooks();Object.keys(n).forEach(o=>{_[o]||(_[o]=[]),_[o].push(n[o])})}s.provides&&s.provides(X)}),a}function l2(c,l){for(var a=arguments.length,s=new Array(a>2?a-2:0),e=2;e<a;e++)s[e-2]=arguments[e];return(_[c]||[]).forEach(o=>{l=o.apply(null,[l,...s])}),l}function j(c){for(var l=arguments.length,a=new Array(l>1?l-1:0),s=1;s<l;s++)a[s-1]=arguments[s];(_[c]||[]).forEach(n=>{n.apply(null,a)})}function $(){const c=arguments[0],l=Array.prototype.slice.call(arguments,1);return X[c]?X[c].apply(null,l):void 0}function a2(c){c.prefix==="fa"&&(c.prefix="fas");let{iconName:l}=c;const a=c.prefix||E();if(l)return l=Z(a,l)||l,S3(p4.definitions,a,l)||S3(B.styles,a,l)}const p4=new Js,ae=()=>{r.autoReplaceSvg=!1,r.observeMutations=!1,j("noAuto")},se={i2svg:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return q?(j("beforeI2svg",c),$("pseudoElements2svg",c),$("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:l}=c;r.autoReplaceSvg===!1&&(r.autoReplaceSvg=!0),r.observeMutations=!0,Os(()=>{ne({autoReplaceSvgRoot:l}),j("watch",c)})}},ee={icon:c=>{if(c===null)return null;if(typeof c=="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:Z(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){const l=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],a=N1(c[0]);return{prefix:a,iconName:Z(a,l)||l}}if(typeof c=="string"&&(c.indexOf("".concat(r.cssPrefix,"-"))>-1||c.match(Ss))){const l=b1(c.split(" "),{skipLookups:!0});return{prefix:l.prefix||E(),iconName:Z(l.prefix,l.iconName)||l.iconName}}if(typeof c=="string"){const l=E();return{prefix:l,iconName:Z(l,c)||c}}}},k={noAuto:ae,config:r,dom:se,parse:ee,library:p4,findIconDefinition:a2,toHtml:i1},ne=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:l=h}=c;(Object.keys(B.styles).length>0||r.autoFetchSvg)&&q&&r.autoReplaceSvg&&k.dom.i2svg({node:l})};function w1(c,l){return Object.defineProperty(c,"abstract",{get:l}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(a=>i1(a))}}),Object.defineProperty(c,"node",{get:function(){if(!q)return;const a=h.createElement("div");return a.innerHTML=c.html,a.children}}),c}function oe(c){let{children:l,main:a,mask:s,attributes:e,styles:n,transform:o}=c;if(M2(o)&&a.found&&!s.found){const{width:i,height:f}=a,t={x:i/f/2,y:.5};e.style=v1({...n,"transform-origin":"".concat(t.x+o.x/16,"em ").concat(t.y+o.y/16,"em")})}return[{tag:"svg",attributes:e,children:l}]}function ie(c){let{prefix:l,iconName:a,children:s,attributes:e,symbol:n}=c;const o=n===!0?"".concat(l,"-").concat(r.cssPrefix,"-").concat(a):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...e,id:o},children:s}]}]}function d2(c){const{icons:{main:l,mask:a},prefix:s,iconName:e,transform:n,symbol:o,title:i,maskId:f,titleId:t,extra:z,watchable:C=!1}=c,{width:M,height:x}=a.found?a:l,A=s==="fak",y=[r.replacementClass,e?"".concat(r.cssPrefix,"-").concat(e):""].filter(S=>z.classes.indexOf(S)===-1).filter(S=>S!==""||!!S).concat(z.classes).join(" ");let v={children:[],attributes:{...z.attributes,"data-prefix":s,"data-icon":e,class:y,role:z.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(M," ").concat(x)}};const m=A&&!~z.classes.indexOf("fa-fw")?{width:"".concat(M/x*16*.0625,"em")}:{};C&&(v.attributes[W]=""),i&&(v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(t||n1())},children:[i]}),delete v.attributes.title);const L={...v,prefix:s,iconName:e,main:l,mask:a,maskId:f,transform:n,symbol:o,styles:{...m,...z.styles}},{children:d,attributes:g}=a.found&&l.found?$("generateAbstractMask",L)||{children:[],attributes:{}}:$("generateAbstractIcon",L)||{children:[],attributes:{}};return L.children=d,L.attributes=g,o?ie(L):oe(L)}function A3(c){const{content:l,width:a,height:s,transform:e,title:n,extra:o,watchable:i=!1}=c,f={...o.attributes,...n?{title:n}:{},class:o.classes.join(" ")};i&&(f[W]="");const t={...o.styles};M2(e)&&(t.transform=Rs({transform:e,startCentered:!0,width:a,height:s}),t["-webkit-transform"]=t.transform);const z=v1(t);z.length>0&&(f.style=z);const C=[];return C.push({tag:"span",attributes:f,children:[l]}),n&&C.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),C}function fe(c){const{content:l,title:a,extra:s}=c,e={...s.attributes,...a?{title:a}:{},class:s.classes.join(" ")},n=v1(s.styles);n.length>0&&(e.style=n);const o=[];return o.push({tag:"span",attributes:e,children:[l]}),a&&o.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),o}const{styles:W1}=B;function s2(c){const l=c[0],a=c[1],[s]=c.slice(4);let e=null;return Array.isArray(s)?e={tag:"g",attributes:{class:"".concat(r.cssPrefix,"-").concat(G1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(r.cssPrefix,"-").concat(G1.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(r.cssPrefix,"-").concat(G1.PRIMARY),fill:"currentColor",d:s[1]}}]}:e={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:l,height:a,icon:e}}const te={found:!1,width:512,height:512};function re(c,l){!l4&&!r.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(l,'" is missing.'))}function e2(c,l){let a=l;return l==="fa"&&r.styleDefault!==null&&(l=E()),new Promise((s,e)=>{if(a==="fa"){const n=h4(c)||{};c=n.iconName||c,l=n.prefix||l}if(c&&l&&W1[l]&&W1[l][c]){const n=W1[l][c];return s(s2(n))}re(c,l),s({...te,icon:r.showMissingIcons&&c?$("missingIconAbstract")||{}:{}})})}const V3=()=>{},n2=r.measurePerformance&&M1&&M1.mark&&M1.measure?M1:{mark:V3,measure:V3},c1='FA "6.6.0"',ze=c=>(n2.mark("".concat(c1," ").concat(c," begins")),()=>d4(c)),d4=c=>{n2.mark("".concat(c1," ").concat(c," ends")),n2.measure("".concat(c1," ").concat(c),"".concat(c1," ").concat(c," begins"),"".concat(c1," ").concat(c," ends"))};var u2={begin:ze,end:d4};const C1=()=>{};function B3(c){return typeof(c.getAttribute?c.getAttribute(W):null)=="string"}function me(c){const l=c.getAttribute?c.getAttribute(z2):null,a=c.getAttribute?c.getAttribute(m2):null;return l&&a}function Le(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(r.replacementClass)}function Me(){return r.autoReplaceSvg===!0?h1.replace:h1[r.autoReplaceSvg]||h1.replace}function Ce(c){return h.createElementNS("http://www.w3.org/2000/svg",c)}function he(c){return h.createElement(c)}function u4(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:a=c.tag==="svg"?Ce:he}=l;if(typeof c=="string")return h.createTextNode(c);const s=a(c.tag);return Object.keys(c.attributes||[]).forEach(function(n){s.setAttribute(n,c.attributes[n])}),(c.children||[]).forEach(function(n){s.appendChild(u4(n,{ceFn:a}))}),s}function pe(c){let l=" ".concat(c.outerHTML," ");return l="".concat(l,"Font Awesome fontawesome.com "),l}const h1={replace:function(c){const l=c[0];if(l.parentNode)if(c[1].forEach(a=>{l.parentNode.insertBefore(u4(a),l)}),l.getAttribute(W)===null&&r.keepOriginalSource){let a=h.createComment(pe(l));l.parentNode.replaceChild(a,l)}else l.remove()},nest:function(c){const l=c[0],a=c[1];if(~L2(l).indexOf(r.replacementClass))return h1.replace(c);const s=new RegExp("".concat(r.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){const n=a[0].attributes.class.split(" ").reduce((o,i)=>(i===r.replacementClass||i.match(s)?o.toSvg.push(i):o.toNode.push(i),o),{toNode:[],toSvg:[]});a[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?l.removeAttribute("class"):l.setAttribute("class",n.toNode.join(" "))}const e=a.map(n=>i1(n)).join(`
`);l.setAttribute(W,""),l.innerHTML=e}};function F3(c){c()}function x4(c,l){const a=typeof l=="function"?l:C1;if(c.length===0)a();else{let s=F3;r.mutateApproach===bs&&(s=R.requestAnimationFrame||F3),s(()=>{const e=Me(),n=u2.begin("mutate");c.map(e),n(),a()})}}let x2=!1;function g4(){x2=!0}function o2(){x2=!1}let d1=null;function P3(c){if(!v3||!r.observeMutations)return;const{treeCallback:l=C1,nodeCallback:a=C1,pseudoElementsCallback:s=C1,observeMutationsRoot:e=h}=c;d1=new v3(n=>{if(x2)return;const o=E();Q(n).forEach(i=>{if(i.type==="childList"&&i.addedNodes.length>0&&!B3(i.addedNodes[0])&&(r.searchPseudoElements&&s(i.target),l(i.target)),i.type==="attributes"&&i.target.parentNode&&r.searchPseudoElements&&s(i.target.parentNode),i.type==="attributes"&&B3(i.target)&&~As.indexOf(i.attributeName))if(i.attributeName==="class"&&me(i.target)){const{prefix:f,iconName:t}=b1(L2(i.target));i.target.setAttribute(z2,f||o),t&&i.target.setAttribute(m2,t)}else Le(i.target)&&a(i.target)})}),q&&d1.observe(e,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function de(){d1&&d1.disconnect()}function ue(c){const l=c.getAttribute("style");let a=[];return l&&(a=l.split(";").reduce((s,e)=>{const n=e.split(":"),o=n[0],i=n.slice(1);return o&&i.length>0&&(s[o]=i.join(":").trim()),s},{})),a}function xe(c){const l=c.getAttribute("data-prefix"),a=c.getAttribute("data-icon"),s=c.innerText!==void 0?c.innerText.trim():"";let e=b1(L2(c));return e.prefix||(e.prefix=E()),l&&a&&(e.prefix=l,e.iconName=a),e.iconName&&e.prefix||(e.prefix&&s.length>0&&(e.iconName=Ks(e.prefix,c.innerText)||h2(e.prefix,J1(c.innerText))),!e.iconName&&r.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(e.iconName=c.firstChild.data)),e}function ge(c){const l=Q(c.attributes).reduce((e,n)=>(e.name!=="class"&&e.name!=="style"&&(e[n.name]=n.value),e),{}),a=c.getAttribute("title"),s=c.getAttribute("data-fa-title-id");return r.autoA11y&&(a?l["aria-labelledby"]="".concat(r.replacementClass,"-title-").concat(s||n1()):(l["aria-hidden"]="true",l.focusable="false")),l}function ve(){return{iconName:null,title:null,titleId:null,prefix:null,transform:V,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function T3(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:a,prefix:s,rest:e}=xe(c),n=ge(c),o=l2("parseNodeAttributes",{},c);let i=l.styleParser?ue(c):[];return{iconName:a,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:V,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:e,styles:i,attributes:n},...o}}const{styles:Ne}=B;function v4(c){const l=r.autoReplaceSvg==="nest"?T3(c,{styleParser:!1}):T3(c);return~l.extra.classes.indexOf(e4)?$("generateLayersText",c,l):$("generateSvgReplacementMutation",c,l)}let F=new Set;a4.map(c=>{F.add("fa-".concat(c))});Object.keys(U[p]).map(F.add.bind(F));Object.keys(U[b]).map(F.add.bind(F));Object.keys(U[w]).map(F.add.bind(F));F=[...F];function q3(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!q)return Promise.resolve();const a=h.documentElement.classList,s=z=>a.add("".concat(w3,"-").concat(z)),e=z=>a.remove("".concat(w3,"-").concat(z)),n=r.autoFetchSvg?F:a4.map(z=>"fa-".concat(z)).concat(Object.keys(Ne));n.includes("fa")||n.push("fa");const o=[".".concat(e4,":not([").concat(W,"])")].concat(n.map(z=>".".concat(z,":not([").concat(W,"])"))).join(", ");if(o.length===0)return Promise.resolve();let i=[];try{i=Q(c.querySelectorAll(o))}catch{}if(i.length>0)s("pending"),e("complete");else return Promise.resolve();const f=u2.begin("onTree"),t=i.reduce((z,C)=>{try{const M=v4(C);M&&z.push(M)}catch(M){l4||M.name==="MissingIcon"&&console.error(M)}return z},[]);return new Promise((z,C)=>{Promise.all(t).then(M=>{x4(M,()=>{s("active"),s("complete"),e("pending"),typeof l=="function"&&l(),f(),z()})}).catch(M=>{f(),C(M)})})}function be(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;v4(c).then(a=>{a&&x4([a],l)})}function we(c){return function(l){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const s=(l||{}).icon?l:a2(l||{});let{mask:e}=a;return e&&(e=(e||{}).icon?e:a2(e||{})),c(s,{...a,mask:e})}}const ke=function(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:a=V,symbol:s=!1,mask:e=null,maskId:n=null,title:o=null,titleId:i=null,classes:f=[],attributes:t={},styles:z={}}=l;if(!c)return;const{prefix:C,iconName:M,icon:x}=c;return w1({type:"icon",...c},()=>(j("beforeDOMElementCreation",{iconDefinition:c,params:l}),r.autoA11y&&(o?t["aria-labelledby"]="".concat(r.replacementClass,"-title-").concat(i||n1()):(t["aria-hidden"]="true",t.focusable="false")),d2({icons:{main:s2(x),mask:e?s2(e.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:M,transform:{...V,...a},symbol:s,title:o,maskId:n,titleId:i,extra:{attributes:t,styles:z,classes:f}})))};var Se={mixout(){return{icon:we(ke)}},hooks(){return{mutationObserverCallbacks(c){return c.treeCallback=q3,c.nodeCallback=be,c}}},provides(c){c.i2svg=function(l){const{node:a=h,callback:s=()=>{}}=l;return q3(a,s)},c.generateSvgReplacementMutation=function(l,a){const{iconName:s,title:e,titleId:n,prefix:o,transform:i,symbol:f,mask:t,maskId:z,extra:C}=a;return new Promise((M,x)=>{Promise.all([e2(s,o),t.iconName?e2(t.iconName,t.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(A=>{let[y,v]=A;M([l,d2({icons:{main:y,mask:v},prefix:o,iconName:s,transform:i,symbol:f,maskId:z,title:e,titleId:n,extra:C,watchable:!0})])}).catch(x)})},c.generateAbstractIcon=function(l){let{children:a,attributes:s,main:e,transform:n,styles:o}=l;const i=v1(o);i.length>0&&(s.style=i);let f;return M2(n)&&(f=$("generateAbstractTransformGrouping",{main:e,transform:n,containerWidth:e.width,iconWidth:e.width})),a.push(f||e.icon),{children:a,attributes:s}}}},ye={mixout(){return{layer(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:a=[]}=l;return w1({type:"layer"},()=>{j("beforeDOMElementCreation",{assembler:c,params:l});let s=[];return c(e=>{Array.isArray(e)?e.map(n=>{s=s.concat(n.abstract)}):s=s.concat(e.abstract)}),[{tag:"span",attributes:{class:["".concat(r.cssPrefix,"-layers"),...a].join(" ")},children:s}]})}}}},He={mixout(){return{counter(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:a=null,classes:s=[],attributes:e={},styles:n={}}=l;return w1({type:"counter",content:c},()=>(j("beforeDOMElementCreation",{content:c,params:l}),fe({content:c.toString(),title:a,extra:{attributes:e,styles:n,classes:["".concat(r.cssPrefix,"-layers-counter"),...s]}})))}}}},Ae={mixout(){return{text(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:a=V,title:s=null,classes:e=[],attributes:n={},styles:o={}}=l;return w1({type:"text",content:c},()=>(j("beforeDOMElementCreation",{content:c,params:l}),A3({content:c,transform:{...V,...a},title:s,extra:{attributes:n,styles:o,classes:["".concat(r.cssPrefix,"-layers-text"),...e]}})))}}},provides(c){c.generateLayersText=function(l,a){const{title:s,transform:e,extra:n}=a;let o=null,i=null;if(X3){const f=parseInt(getComputedStyle(l).fontSize,10),t=l.getBoundingClientRect();o=t.width/f,i=t.height/f}return r.autoA11y&&!s&&(n.attributes["aria-hidden"]="true"),Promise.resolve([l,A3({content:l.innerHTML,width:o,height:i,transform:e,title:s,extra:n,watchable:!0})])}}};const Ve=new RegExp('"',"ug"),D3=[1105920,1112319],Z3={FontAwesome:{normal:"fas",400:"fas"},...ms,...zs,...xs},i2=Object.keys(Z3).reduce((c,l)=>(c[l.toLowerCase()]=Z3[l],c),{}),Be=Object.keys(i2).reduce((c,l)=>{const a=i2[l];return c[l]=a[900]||[...Object.entries(a)][0][1],c},{});function Fe(c){const l=c.replace(Ve,""),a=Us(l,0),s=a>=D3[0]&&a<=D3[1],e=l.length===2?l[0]===l[1]:!1;return{value:J1(e?l[0]:l),isSecondary:s||e}}function Pe(c,l){const a=c.replace(/^['"]|['"]$/g,"").toLowerCase(),s=parseInt(l),e=isNaN(s)?"normal":s;return(i2[a]||{})[e]||Be[a]}function R3(c,l){const a="".concat(Ns).concat(l.replace(":","-"));return new Promise((s,e)=>{if(c.getAttribute(a)!==null)return s();const o=Q(c.children).filter(M=>M.getAttribute(X1)===l)[0],i=R.getComputedStyle(c,l),f=i.getPropertyValue("font-family"),t=f.match(ys),z=i.getPropertyValue("font-weight"),C=i.getPropertyValue("content");if(o&&!t)return c.removeChild(o),s();if(t&&C!=="none"&&C!==""){const M=i.getPropertyValue("content");let x=Pe(f,z);const{value:A,isSecondary:y}=Fe(M),v=t[0].startsWith("FontAwesome");let m=h2(x,A),L=m;if(v){const d=Ys(A);d.iconName&&d.prefix&&(m=d.iconName,x=d.prefix)}if(m&&!y&&(!o||o.getAttribute(z2)!==x||o.getAttribute(m2)!==L)){c.setAttribute(a,L),o&&c.removeChild(o);const d=ve(),{extra:g}=d;g.attributes[X1]=l,e2(m,x).then(S=>{const L1=d2({...d,icons:{main:S,mask:p2()},prefix:x,iconName:L,extra:g,watchable:!0}),O=h.createElementNS("http://www.w3.org/2000/svg","svg");l==="::before"?c.insertBefore(O,c.firstChild):c.appendChild(O),O.outerHTML=L1.map(ns=>i1(ns)).join(`
`),c.removeAttribute(a),s()}).catch(e)}else s()}else s()})}function Te(c){return Promise.all([R3(c,"::before"),R3(c,"::after")])}function qe(c){return c.parentNode!==document.head&&!~ws.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(X1)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function E3(c){if(q)return new Promise((l,a)=>{const s=Q(c.querySelectorAll("*")).filter(qe).map(Te),e=u2.begin("searchPseudoElements");g4(),Promise.all(s).then(()=>{e(),o2(),l()}).catch(()=>{e(),o2(),a()})})}var De={hooks(){return{mutationObserverCallbacks(c){return c.pseudoElementsCallback=E3,c}}},provides(c){c.pseudoElements2svg=function(l){const{node:a=h}=l;r.searchPseudoElements&&E3(a)}}};let $3=!1;var Ze={mixout(){return{dom:{unwatch(){g4(),$3=!0}}}},hooks(){return{bootstrap(){P3(l2("mutationObserverCallbacks",{}))},noAuto(){de()},watch(c){const{observeMutationsRoot:l}=c;$3?o2():P3(l2("mutationObserverCallbacks",{observeMutationsRoot:l}))}}}};const O3=c=>{let l={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce((a,s)=>{const e=s.toLowerCase().split("-"),n=e[0];let o=e.slice(1).join("-");if(n&&o==="h")return a.flipX=!0,a;if(n&&o==="v")return a.flipY=!0,a;if(o=parseFloat(o),isNaN(o))return a;switch(n){case"grow":a.size=a.size+o;break;case"shrink":a.size=a.size-o;break;case"left":a.x=a.x-o;break;case"right":a.x=a.x+o;break;case"up":a.y=a.y-o;break;case"down":a.y=a.y+o;break;case"rotate":a.rotate=a.rotate+o;break}return a},l)};var Re={mixout(){return{parse:{transform:c=>O3(c)}}},hooks(){return{parseNodeAttributes(c,l){const a=l.getAttribute("data-fa-transform");return a&&(c.transform=O3(a)),c}}},provides(c){c.generateAbstractTransformGrouping=function(l){let{main:a,transform:s,containerWidth:e,iconWidth:n}=l;const o={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(s.x*32,", ").concat(s.y*32,") "),f="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),t="rotate(".concat(s.rotate," 0 0)"),z={transform:"".concat(i," ").concat(f," ").concat(t)},C={transform:"translate(".concat(n/2*-1," -256)")},M={outer:o,inner:z,path:C};return{tag:"g",attributes:{...M.outer},children:[{tag:"g",attributes:{...M.inner},children:[{tag:a.icon.tag,children:a.icon.children,attributes:{...a.icon.attributes,...M.path}}]}]}}}};const j1={x:0,y:0,width:"100%",height:"100%"};function G3(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||l)&&(c.attributes.fill="black"),c}function Ee(c){return c.tag==="g"?c.children:[c]}var $e={hooks(){return{parseNodeAttributes(c,l){const a=l.getAttribute("data-fa-mask"),s=a?b1(a.split(" ").map(e=>e.trim())):p2();return s.prefix||(s.prefix=E()),c.mask=s,c.maskId=l.getAttribute("data-fa-mask-id"),c}}},provides(c){c.generateAbstractMask=function(l){let{children:a,attributes:s,main:e,mask:n,maskId:o,transform:i}=l;const{width:f,icon:t}=e,{width:z,icon:C}=n,M=Zs({transform:i,containerWidth:z,iconWidth:f}),x={tag:"rect",attributes:{...j1,fill:"white"}},A=t.children?{children:t.children.map(G3)}:{},y={tag:"g",attributes:{...M.inner},children:[G3({tag:t.tag,attributes:{...t.attributes,...M.path},...A})]},v={tag:"g",attributes:{...M.outer},children:[y]},m="mask-".concat(o||n1()),L="clip-".concat(o||n1()),d={tag:"mask",attributes:{...j1,id:m,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[x,v]},g={tag:"defs",children:[{tag:"clipPath",attributes:{id:L},children:Ee(C)},d]};return a.push(g,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(L,")"),mask:"url(#".concat(m,")"),...j1}}),{children:a,attributes:s}}}},Oe={provides(c){let l=!1;R.matchMedia&&(l=R.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){const a=[],s={fill:"currentColor"},e={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:{...s,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const n={...e,attributeName:"opacity"},o={tag:"circle",attributes:{...s,cx:"256",cy:"364",r:"28"},children:[]};return l||o.children.push({tag:"animate",attributes:{...e,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...n,values:"1;0;1;1;0;1;"}}),a.push(o),a.push({tag:"path",attributes:{...s,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:l?[]:[{tag:"animate",attributes:{...n,values:"1;0;0;0;0;1;"}}]}),l||a.push({tag:"path",attributes:{...s,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...n,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Ge={hooks(){return{parseNodeAttributes(c,l){const a=l.getAttribute("data-fa-symbol"),s=a===null?!1:a===""?!0:a;return c.symbol=s,c}}}},Ue=[$s,Se,ye,He,Ae,De,Ze,Re,$e,Oe,Ge];le(Ue,{mixoutsTo:k});k.noAuto;const N4=k.config,Ie=k.library;k.dom;const u1=k.parse;k.findIconDefinition;k.toHtml;const We=k.icon;k.layer;const je=k.text;k.counter;function U3(c,l){var a=Object.keys(c);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(c);l&&(s=s.filter(function(e){return Object.getOwnPropertyDescriptor(c,e).enumerable})),a.push.apply(a,s)}return a}function H(c){for(var l=1;l<arguments.length;l++){var a=arguments[l]!=null?arguments[l]:{};l%2?U3(Object(a),!0).forEach(function(s){N(c,s,a[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(a)):U3(Object(a)).forEach(function(s){Object.defineProperty(c,s,Object.getOwnPropertyDescriptor(a,s))})}return c}function _e(c,l){if(typeof c!="object"||!c)return c;var a=c[Symbol.toPrimitive];if(a!==void 0){var s=a.call(c,l||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(c)}function Xe(c){var l=_e(c,"string");return typeof l=="symbol"?l:l+""}function x1(c){"@babel/helpers - typeof";return x1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},x1(c)}function N(c,l,a){return l=Xe(l),l in c?Object.defineProperty(c,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):c[l]=a,c}function Ke(c,l){if(c==null)return{};var a={};for(var s in c)if(Object.prototype.hasOwnProperty.call(c,s)){if(l.indexOf(s)>=0)continue;a[s]=c[s]}return a}function Ye(c,l){if(c==null)return{};var a=Ke(c,l),s,e;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(c);for(e=0;e<n.length;e++)s=n[e],!(l.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(c,s)&&(a[s]=c[s])}return a}function f2(c){return Qe(c)||Je(c)||cn(c)||ln()}function Qe(c){if(Array.isArray(c))return t2(c)}function Je(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function cn(c,l){if(c){if(typeof c=="string")return t2(c,l);var a=Object.prototype.toString.call(c).slice(8,-1);if(a==="Object"&&c.constructor&&(a=c.constructor.name),a==="Map"||a==="Set")return Array.from(c);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return t2(c,l)}}function t2(c,l){(l==null||l>c.length)&&(l=c.length);for(var a=0,s=new Array(l);a<l;a++)s[a]=c[a];return s}function ln(){throw new TypeError(`Invalid attempt to spread non-iterable instance.