"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const sz=require("./components.cjs"),w1=require("vue");function s9(s,n){var l=Object.keys(s);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(s);n&&(f=f.filter(function(v){return Object.getOwnPropertyDescriptor(s,v).enumerable})),l.push.apply(l,f)}return l}function k(s){for(var n=1;n<arguments.length;n++){var l=arguments[n]!=null?arguments[n]:{};n%2?s9(Object(l),!0).forEach(function(f){M1(s,f,l[f])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(l)):s9(Object(l)).forEach(function(f){Object.defineProperty(s,f,Object.getOwnPropertyDescriptor(l,f))})}return s}function G4(s){"@babel/helpers - typeof";return G4=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},G4(s)}function tz(s,n){if(!(s instanceof n))throw new TypeError("Cannot call a class as a function")}function nz(s,n){for(var l=0;l<n.length;l++){var f=n[l];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function oz(s,n,l){return n&&nz(s.prototype,n),Object.defineProperty(s,"prototype",{writable:!1}),s}function M1(s,n,l){return n in s?Object.defineProperty(s,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):s[n]=l,s}function F0(s,n){return fz(s)||mz(s,n)||A9(s,n)||zz()}function W3(s){return lz(s)||hz(s)||A9(s)||vz()}function lz(s){if(Array.isArray(s))return L0(s)}function fz(s){if(Array.isArray(s))return s}function hz(s){if(typeof Symbol<"u"&&s[Symbol.iterator]!=null||s["@@iterator"]!=null)return Array.from(s)}function mz(s,n){var l=s==null?null:typeof Symbol<"u"&&s[Symbol.iterator]||s["@@iterator"];if(l!=null){var f=[],v=!0,u=!1,p,C;try{for(l=l.call(s);!(v=(p=l.next()).done)&&(f.push(p.value),!(n&&f.length===n));v=!0);}catch(M){u=!0,C=M}finally{try{!v&&l.return!=null&&l.return()}finally{if(u)throw C}}return f}}function A9(s,n){if(s){if(typeof s=="string")return L0(s,n);var l=Object.prototype.toString.call(s).slice(8,-1);if(l==="Object"&&s.constructor&&(l=s.constructor.name),l==="Map"||l==="Set")return Array.from(s);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return L0(s,n)}}function L0(s,n){(n==null||n>s.length)&&(n=s.length);for(var l=0,f=new Array(n);l<n;l++)f[l]=s[l];return f}function vz(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zz(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var t9=function(){},D0={},P9={},B9=null,T9={mark:t9,measure:t9};try{typeof window<"u"&&(D0=window),typeof document<"u"&&(P9=document),typeof MutationObserver<"u"&&(B9=MutationObserver),typeof performance<"u"&&(T9=performance)}catch{}var uz=D0.navigator||{},n9=uz.userAgent,o9=n9===void 0?"":n9,h2=D0,o1=P9,l9=B9,T4=T9;h2.document;var e2=!!o1.documentElement&&!!o1.head&&typeof o1.addEventListener=="function"&&typeof o1.createElement=="function",$9=~o9.indexOf("MSIE")||~o9.indexOf("Trident/"),$4,F4,D4,E4,q4,J1="___FONT_AWESOME___",x0=16,F9="fa",D9="svg-inline--fa",D2="data-fa-i2svg",b0="data-fa-pseudo-element",pz="data-fa-pseudo-element-pending",E0="data-prefix",q0="data-icon",f9="fontawesome-i2svg",dz="async",Hz=["HTML","HEAD","STYLE","SCRIPT"],E9=function(){try{return process.env.NODE_ENV==="production"}catch{return!1}}(),n1="classic",z1="sharp",R0=[n1,z1];function G3(s){return new Proxy(s,{get:function(l,f){return f in l?l[f]:l[n1]}})}var q3=G3(($4={},M1($4,n1,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),M1($4,z1,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),$4)),R3=G3((F4={},M1(F4,n1,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),M1(F4,z1,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),F4)),I3=G3((D4={},M1(D4,n1,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),M1(D4,z1,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),D4)),Cz=G3((E4={},M1(E4,n1,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),M1(E4,z1,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),E4)),Mz=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,q9="fa-layers-text",Vz=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,gz=G3((q4={},M1(q4,n1,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),M1(q4,z1,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),q4)),R9=[1,2,3,4,5,6,7,8,9,10],Lz=R9.concat([11,12,13,14,15,16,17,18,19,20]),xz=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],$2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},O3=new Set;Object.keys(R3[n1]).map(O3.add.bind(O3));Object.keys(R3[z1]).map(O3.add.bind(O3));var bz=[].concat(R0,W3(O3),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",$2.GROUP,$2.SWAP_OPACITY,$2.PRIMARY,$2.SECONDARY]).concat(R9.map(function(s){return"".concat(s,"x")})).concat(Lz.map(function(s){return"w-".concat(s)})),F3=h2.FontAwesomeConfig||{};function wz(s){var n=o1.querySelector("script["+s+"]");if(n)return n.getAttribute(s)}function Nz(s){return s===""?!0:s==="false"?!1:s==="true"?!0:s}if(o1&&typeof o1.querySelector=="function"){var kz=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];kz.forEach(function(s){var n=F0(s,2),l=n[0],f=n[1],v=Nz(wz(l));v!=null&&(F3[f]=v)})}var I9={styleDefault:"solid",familyDefault:"classic",cssPrefix:F9,replacementClass:D9,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};F3.familyPrefix&&(F3.cssPrefix=F3.familyPrefix);var e3=k(k({},I9),F3);e3.autoReplaceSvg||(e3.observeMutations=!1);var P={};Object.keys(I9).forEach(function(s){Object.defineProperty(P,s,{enumerable:!0,set:function(l){e3[s]=l,D3.forEach(function(f){return f(P)})},get:function(){return e3[s]}})});Object.defineProperty(P,"familyPrefix",{enumerable:!0,set:function(n){e3.cssPrefix=n,D3.forEach(function(l){return l(P)})},get:function(){return e3.cssPrefix}});h2.FontAwesomeConfig=P;var D3=[];function Sz(s){return D3.push(s),function(){D3.splice(D3.indexOf(s),1)}}var f2=x0,X1={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function yz(s){if(!(!s||!e2)){var n=o1.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=s;for(var l=o1.head.childNodes,f=null,v=l.length-1;v>-1;v--){var u=l[v],p=(u.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(p)>-1&&(f=u)}return o1.head.insertBefore(n,f),s}}var Az="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function U3(){for(var s=12,n="";s-- >0;)n+=Az[Math.random()*62|0];return n}function i3(s){for(var n=[],l=(s||[]).length>>>0;l--;)n[l]=s[l];return n}function I0(s){return s.classList?i3(s.classList):(s.getAttribute("class")||"").split(" ").filter(function(n){return n})}function O9(s){return"".concat(s).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Pz(s){return Object.keys(s||{}).reduce(function(n,l){return n+"".concat(l,'="').concat(O9(s[l]),'" ')},"").trim()}function X4(s){return Object.keys(s||{}).reduce(function(n,l){return n+"".concat(l,": ").concat(s[l].trim(),";")},"")}function O0(s){return s.size!==X1.size||s.x!==X1.x||s.y!==X1.y||s.rotate!==X1.rotate||s.flipX||s.flipY}function Bz(s){var n=s.transform,l=s.containerWidth,f=s.iconWidth,v={transform:"translate(".concat(l/2," 256)")},u="translate(".concat(n.x*32,", ").concat(n.y*32,") "),p="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),C="rotate(".concat(n.rotate," 0 0)"),M={transform:"".concat(u," ").concat(p," ").concat(C)},x={transform:"translate(".concat(f/2*-1," -256)")};return{outer:v,inner:M,path:x}}function Tz(s){var n=s.transform,l=s.width,f=l===void 0?x0:l,v=s.height,u=v===void 0?x0:v,p=s.startCentered,C=p===void 0?!1:p,M="";return C&&$9?M+="translate(".concat(n.x/f2-f/2,"em, ").concat(n.y/f2-u/2,"em) "):C?M+="translate(calc(-50% + ".concat(n.x/f2,"em), calc(-50% + ").concat(n.y/f2,"em)) "):M+="translate(".concat(n.x/f2,"em, ").concat(n.y/f2,"em) "),M+="scale(".concat(n.size/f2*(n.flipX?-1:1),", ").concat(n.size/f2*(n.flipY?-1:1),") "),M+="rotate(".concat(n.rotate,"deg) "),M}var $z=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
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
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
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
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
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
  left: calc(var(--fa-li-width, 2em) * -1);
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
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
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
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
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
}`;function U9(){var s=F9,n=D9,l=P.cssPrefix,f=P.replacementClass,v=$z;if(l!==s||f!==n){var u=new RegExp("\\.".concat(s,"\\-"),"g"),p=new RegExp("\\--".concat(s,"\\-"),"g"),C=new RegExp("\\.".concat(n),"g");v=v.replace(u,".".concat(l,"-")).replace(p,"--".concat(l,"-")).replace(C,".".concat(f))}return v}var h9=!1;function C0(){P.autoAddCss&&!h9&&(yz(U9()),h9=!0)}var Fz={mixout:function(){return{dom:{css:U9,insertCss:C0}}},hooks:function(){return{beforeDOMElementCreation:function(){C0()},beforeI2svg:function(){C0()}}}},c2=h2||{};c2[J1]||(c2[J1]={});c2[J1].styles||(c2[J1].styles={});c2[J1].hooks||(c2[J1].hooks={});c2[J1].shims||(c2[J1].shims=[]);var Z1=c2[J1],W9=[],Dz=function s(){o1.removeEventListener("DOMContentLoaded",s),_4=1,W9.map(function(n){return n()})},_4=!1;e2&&(_4=(o1.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(o1.readyState),_4||o1.addEventListener("DOMContentLoaded",Dz));function Ez(s){e2&&(_4?setTimeout(s,0):W9.push(s))}function _3(s){var n=s.tag,l=s.attributes,f=l===void 0?{}:l,v=s.children,u=v===void 0?[]:v;return typeof s=="string"?O9(s):"<".concat(n," ").concat(Pz(f),">").concat(u.map(_3).join(""),"</").concat(n,">")}function m9(s,n,l){if(s&&s[n]&&s[n][l])return{prefix:n,iconName:l,icon:s[n][l]}}var M0=function(n,l,f,v){var u=Object.keys(n),p=u.length,C=l,M,x,g;for(f===void 0?(M=1,g=n[u[0]]):(M=0,g=f);M<p;M++)x=u[M],g=C(g,n[x],x,n);return g};function qz(s){for(var n=[],l=0,f=s.length;l<f;){var v=s.charCodeAt(l++);if(v>=55296&&v<=56319&&l<f){var u=s.charCodeAt(l++);(u&64512)==56320?n.push(((v&1023)<<10)+(u&1023)+65536):(n.push(v),l--)}else n.push(v)}return n}function w0(s){var n=qz(s);return n.length===1?n[0].toString(16):null}function Rz(s,n){var l=s.length,f=s.charCodeAt(n),v;return f>=55296&&f<=56319&&l>n+1&&(v=s.charCodeAt(n+1),v>=56320&&v<=57343)?(f-55296)*1024+v-56320+65536:f}function v9(s){return Object.keys(s).reduce(function(n,l){var f=s[l],v=!!f.icon;return v?n[f.iconName]=f.icon:n[l]=f,n},{})}function N0(s,n){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},f=l.skipHooks,v=f===void 0?!1:f,u=v9(n);typeof Z1.hooks.addPack=="function"&&!v?Z1.hooks.addPack(s,v9(n)):Z1.styles[s]=k(k({},Z1.styles[s]||{}),u),s==="fas"&&N0("fa",n)}var R4,I4,O4,J2=Z1.styles,Iz=Z1.shims,Oz=(R4={},M1(R4,n1,Object.values(I3[n1])),M1(R4,z1,Object.values(I3[z1])),R4),U0=null,G9={},_9={},Z9={},j9={},Y9={},Uz=(I4={},M1(I4,n1,Object.keys(q3[n1])),M1(I4,z1,Object.keys(q3[z1])),I4);function Wz(s){return~bz.indexOf(s)}function Gz(s,n){var l=n.split("-"),f=l[0],v=l.slice(1).join("-");return f===s&&v!==""&&!Wz(v)?v:null}var X9=function(){var n=function(u){return M0(J2,function(p,C,M){return p[M]=M0(C,u,{}),p},{})};G9=n(function(v,u,p){if(u[3]&&(v[u[3]]=p),u[2]){var C=u[2].filter(function(M){return typeof M=="number"});C.forEach(function(M){v[M.toString(16)]=p})}return v}),_9=n(function(v,u,p){if(v[p]=p,u[2]){var C=u[2].filter(function(M){return typeof M=="string"});C.forEach(function(M){v[M]=p})}return v}),Y9=n(function(v,u,p){var C=u[2];return v[p]=p,C.forEach(function(M){v[M]=p}),v});var l="far"in J2||P.autoFetchSvg,f=M0(Iz,function(v,u){var p=u[0],C=u[1],M=u[2];return C==="far"&&!l&&(C="fas"),typeof p=="string"&&(v.names[p]={prefix:C,iconName:M}),typeof p=="number"&&(v.unicodes[p.toString(16)]={prefix:C,iconName:M}),v},{names:{},unicodes:{}});Z9=f.names,j9=f.unicodes,U0=K4(P.styleDefault,{family:P.familyDefault})};Sz(function(s){U0=K4(s.styleDefault,{family:P.familyDefault})});X9();function W0(s,n){return(G9[s]||{})[n]}function _z(s,n){return(_9[s]||{})[n]}function F2(s,n){return(Y9[s]||{})[n]}function K9(s){return Z9[s]||{prefix:null,iconName:null}}function Zz(s){var n=j9[s],l=W0("fas",s);return n||(l?{prefix:"fas",iconName:l}:null)||{prefix:null,iconName:null}}function m2(){return U0}var G0=function(){return{prefix:null,iconName:null,rest:[]}};function K4(s){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=n.family,f=l===void 0?n1:l,v=q3[f][s],u=R3[f][s]||R3[f][v],p=s in Z1.styles?s:null;return u||p||null}var z9=(O4={},M1(O4,n1,Object.keys(I3[n1])),M1(O4,z1,Object.keys(I3[z1])),O4);function Q4(s){var n,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},f=l.skipLookups,v=f===void 0?!1:f,u=(n={},M1(n,n1,"".concat(P.cssPrefix,"-").concat(n1)),M1(n,z1,"".concat(P.cssPrefix,"-").concat(z1)),n),p=null,C=n1;(s.includes(u[n1])||s.some(function(x){return z9[n1].includes(x)}))&&(C=n1),(s.includes(u[z1])||s.some(function(x){return z9[z1].includes(x)}))&&(C=z1);var M=s.reduce(function(x,g){var S=Gz(P.cssPrefix,g);if(J2[g]?(g=Oz[C].includes(g)?Cz[C][g]:g,p=g,x.prefix=g):Uz[C].indexOf(g)>-1?(p=g,x.prefix=K4(g,{family:C})):S?x.iconName=S:g!==P.replacementClass&&g!==u[n1]&&g!==u[z1]&&x.rest.push(g),!v&&x.prefix&&x.iconName){var V=p==="fa"?K9(x.iconName):{},R=F2(x.prefix,x.iconName);V.prefix&&(p=null),x.iconName=V.iconName||R||x.iconName,x.prefix=V.prefix||x.prefix,x.prefix==="far"&&!J2.far&&J2.fas&&!P.autoFetchSvg&&(x.prefix="fas")}return x},G0());return(s.includes("fa-brands")||s.includes("fab"))&&(M.prefix="fab"),(s.includes("fa-duotone")||s.includes("fad"))&&(M.prefix="fad"),!M.prefix&&C===z1&&(J2.fass||P.autoFetchSvg)&&(M.prefix="fass",M.iconName=F2(M.prefix,M.iconName)||M.iconName),(M.prefix==="fa"||p==="fa")&&(M.prefix=m2()||"fas"),M}var jz=function(){function s(){tz(this,s),this.definitions={}}return oz(s,[{key:"add",value:function(){for(var l=this,f=arguments.length,v=new Array(f),u=0;u<f;u++)v[u]=arguments[u];var p=v.reduce(this._pullDefinitions,{});Object.keys(p).forEach(function(C){l.definitions[C]=k(k({},l.definitions[C]||{}),p[C]),N0(C,p[C]);var M=I3[n1][C];M&&N0(M,p[C]),X9()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(l,f){var v=f.prefix&&f.iconName&&f.icon?{0:f}:f;return Object.keys(v).map(function(u){var p=v[u],C=p.prefix,M=p.iconName,x=p.icon,g=x[2];l[C]||(l[C]={}),g.length>0&&g.forEach(function(S){typeof S=="string"&&(l[C][S]=x)}),l[C][M]=x}),l}}]),s}(),u9=[],c3={},a3={},Yz=Object.keys(a3);function Xz(s,n){var l=n.mixoutsTo;return u9=s,c3={},Object.keys(a3).forEach(function(f){Yz.indexOf(f)===-1&&delete a3[f]}),u9.forEach(function(f){var v=f.mixout?f.mixout():{};if(Object.keys(v).forEach(function(p){typeof v[p]=="function"&&(l[p]=v[p]),G4(v[p])==="object"&&Object.keys(v[p]).forEach(function(C){l[p]||(l[p]={}),l[p][C]=v[p][C]})}),f.hooks){var u=f.hooks();Object.keys(u).forEach(function(p){c3[p]||(c3[p]=[]),c3[p].push(u[p])})}f.provides&&f.provides(a3)}),l}function k0(s,n){for(var l=arguments.length,f=new Array(l>2?l-2:0),v=2;v<l;v++)f[v-2]=arguments[v];var u=c3[s]||[];return u.forEach(function(p){n=p.apply(null,[n].concat(f))}),n}function E2(s){for(var n=arguments.length,l=new Array(n>1?n-1:0),f=1;f<n;f++)l[f-1]=arguments[f];var v=c3[s]||[];v.forEach(function(u){u.apply(null,l)})}function a2(){var s=arguments[0],n=Array.prototype.slice.call(arguments,1);return a3[s]?a3[s].apply(null,n):void 0}function S0(s){s.prefix==="fa"&&(s.prefix="fas");var n=s.iconName,l=s.prefix||m2();if(n)return n=F2(l,n)||n,m9(Q9.definitions,l,n)||m9(Z1.styles,l,n)}var Q9=new jz,Kz=function(){P.autoReplaceSvg=!1,P.observeMutations=!1,E2("noAuto")},Qz={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return e2?(E2("beforeI2svg",n),a2("pseudoElements2svg",n),a2("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=n.autoReplaceSvgRoot;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,Ez(function(){cu({autoReplaceSvgRoot:l}),E2("watch",n)})}},Jz={icon:function(n){if(n===null)return null;if(G4(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:F2(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var l=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],f=K4(n[0]);return{prefix:f,iconName:F2(f,l)||l}}if(typeof n=="string"&&(n.indexOf("".concat(P.cssPrefix,"-"))>-1||n.match(Mz))){var v=Q4(n.split(" "),{skipLookups:!0});return{prefix:v.prefix||m2(),iconName:F2(v.prefix,v.iconName)||v.iconName}}if(typeof n=="string"){var u=m2();return{prefix:u,iconName:F2(u,n)||n}}}},O1={noAuto:Kz,config:P,dom:Qz,parse:Jz,library:Q9,findIconDefinition:S0,toHtml:_3},cu=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=n.autoReplaceSvgRoot,f=l===void 0?o1:l;(Object.keys(Z1.styles).length>0||P.autoFetchSvg)&&e2&&P.autoReplaceSvg&&O1.dom.i2svg({node:f})};function J4(s,n){return Object.defineProperty(s,"abstract",{get:n}),Object.defineProperty(s,"html",{get:function(){return s.abstract.map(function(f){return _3(f)})}}),Object.defineProperty(s,"node",{get:function(){if(e2){var f=o1.createElement("div");return f.innerHTML=s.html,f.children}}}),s}function au(s){var n=s.children,l=s.main,f=s.mask,v=s.attributes,u=s.styles,p=s.transform;if(O0(p)&&l.found&&!f.found){var C=l.width,M=l.height,x={x:C/M/2,y:.5};v.style=X4(k(k({},u),{},{"transform-origin":"".concat(x.x+p.x/16,"em ").concat(x.y+p.y/16,"em")}))}return[{tag:"svg",attributes:v,children:n}]}function eu(s){var n=s.prefix,l=s.iconName,f=s.children,v=s.attributes,u=s.symbol,p=u===!0?"".concat(n,"-").concat(P.cssPrefix,"-").concat(l):u;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:k(k({},v),{},{id:p}),children:f}]}]}function _0(s){var n=s.icons,l=n.main,f=n.mask,v=s.prefix,u=s.iconName,p=s.transform,C=s.symbol,M=s.title,x=s.maskId,g=s.titleId,S=s.extra,V=s.watchable,R=V===void 0?!1:V,G=f.found?f:l,s1=G.width,i1=G.height,w=v==="fak",y=[P.replacementClass,u?"".concat(P.cssPrefix,"-").concat(u):""].filter(function(y1){return S.classes.indexOf(y1)===-1}).filter(function(y1){return y1!==""||!!y1}).concat(S.classes).join(" "),U={children:[],attributes:k(k({},S.attributes),{},{"data-prefix":v,"data-icon":u,class:y,role:S.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(s1," ").concat(i1)})},e1=w&&!~S.classes.indexOf("fa-fw")?{width:"".concat(s1/i1*16*.0625,"em")}:{};R&&(U.attributes[D2]=""),M&&(U.children.push({tag:"title",attributes:{id:U.attributes["aria-labelledby"]||"title-".concat(g||U3())},children:[M]}),delete U.attributes.title);var t1=k(k({},U),{},{prefix:v,iconName:u,main:l,mask:f,maskId:x,transform:p,symbol:C,styles:k(k({},e1),S.styles)}),S1=f.found&&l.found?a2("generateAbstractMask",t1)||{children:[],attributes:{}}:a2("generateAbstractIcon",t1)||{children:[],attributes:{}},V1=S1.children,z2=S1.attributes;return t1.children=V1,t1.attributes=z2,C?eu(t1):au(t1)}function p9(s){var n=s.content,l=s.width,f=s.height,v=s.transform,u=s.title,p=s.extra,C=s.watchable,M=C===void 0?!1:C,x=k(k(k({},p.attributes),u?{title:u}:{}),{},{class:p.classes.join(" ")});M&&(x[D2]="");var g=k({},p.styles);O0(v)&&(g.transform=Tz({transform:v,startCentered:!0,width:l,height:f}),g["-webkit-transform"]=g.transform);var S=X4(g);S.length>0&&(x.style=S);var V=[];return V.push({tag:"span",attributes:x,children:[n]}),u&&V.push({tag:"span",attributes:{class:"sr-only"},children:[u]}),V}function iu(s){var n=s.content,l=s.title,f=s.extra,v=k(k(k({},f.attributes),l?{title:l}:{}),{},{class:f.classes.join(" ")}),u=X4(f.styles);u.length>0&&(v.style=u);var p=[];return p.push({tag:"span",attributes:v,children:[n]}),l&&p.push({tag:"span",attributes:{class:"sr-only"},children:[l]}),p}var V0=Z1.styles;function y0(s){var n=s[0],l=s[1],f=s.slice(4),v=F0(f,1),u=v[0],p=null;return Array.isArray(u)?p={tag:"g",attributes:{class:"".concat(P.cssPrefix,"-").concat($2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat($2.SECONDARY),fill:"currentColor",d:u[0]}},{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat($2.PRIMARY),fill:"currentColor",d:u[1]}}]}:p={tag:"path",attributes:{fill:"currentColor",d:u}},{found:!0,width:n,height:l,icon:p}}var ru={found:!1,width:512,height:512};function su(s,n){!E9&&!P.showMissingIcons&&s&&console.error('Icon with name "'.concat(s,'" and prefix "').concat(n,'" is missing.'))}function A0(s,n){var l=n;return n==="fa"&&P.styleDefault!==null&&(n=m2()),new Promise(function(f,v){if(a2("missingIconAbstract"),l==="fa"){var u=K9(s)||{};s=u.iconName||s,n=u.prefix||n}if(s&&n&&V0[n]&&V0[n][s]){var p=V0[n][s];return f(y0(p))}su(s,n),f(k(k({},ru),{},{icon:P.showMissingIcons&&s?a2("missingIconAbstract")||{}:{}}))})}var d9=function(){},P0=P.measurePerformance&&T4&&T4.mark&&T4.measure?T4:{mark:d9,measure:d9},$3='FA "6.5.2"',tu=function(n){return P0.mark("".concat($3," ").concat(n," begins")),function(){return J9(n)}},J9=function(n){P0.mark("".concat($3," ").concat(n," ends")),P0.measure("".concat($3," ").concat(n),"".concat($3," ").concat(n," begins"),"".concat($3," ").concat(n," ends"))},Z0={begin:tu,end:J9},U4=function(){};function H9(s){var n=s.getAttribute?s.getAttribute(D2):null;return typeof n=="string"}function nu(s){var n=s.getAttribute?s.getAttribute(E0):null,l=s.getAttribute?s.getAttribute(q0):null;return n&&l}function ou(s){return s&&s.classList&&s.classList.contains&&s.classList.contains(P.replacementClass)}function lu(){if(P.autoReplaceSvg===!0)return W4.replace;var s=W4[P.autoReplaceSvg];return s||W4.replace}function fu(s){return o1.createElementNS("http://www.w3.org/2000/svg",s)}function hu(s){return o1.createElement(s)}function cc(s){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=n.ceFn,f=l===void 0?s.tag==="svg"?fu:hu:l;if(typeof s=="string")return o1.createTextNode(s);var v=f(s.tag);Object.keys(s.attributes||[]).forEach(function(p){v.setAttribute(p,s.attributes[p])});var u=s.children||[];return u.forEach(function(p){v.appendChild(cc(p,{ceFn:f}))}),v}function mu(s){var n=" ".concat(s.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var W4={replace:function(n){var l=n[0];if(l.parentNode)if(n[1].forEach(function(v){l.parentNode.insertBefore(cc(v),l)}),l.getAttribute(D2)===null&&P.keepOriginalSource){var f=o1.createComment(mu(l));l.parentNode.replaceChild(f,l)}else l.remove()},nest:function(n){var l=n[0],f=n[1];if(~I0(l).indexOf(P.replacementClass))return W4.replace(n);var v=new RegExp("".concat(P.cssPrefix,"-.*"));if(delete f[0].attributes.id,f[0].attributes.class){var u=f[0].attributes.class.split(" ").reduce(function(C,M){return M===P.replacementClass||M.match(v)?C.toSvg.push(M):C.toNode.push(M),C},{toNode:[],toSvg:[]});f[0].attributes.class=u.toSvg.join(" "),u.toNode.length===0?l.removeAttribute("class"):l.setAttribute("class",u.toNode.join(" "))}var p=f.map(function(C){return _3(C)}).join(`
`);l.setAttribute(D2,""),l.innerHTML=p}};function C9(s){s()}function ac(s,n){var l=typeof n=="function"?n:U4;if(s.length===0)l();else{var f=C9;P.mutateApproach===dz&&(f=h2.requestAnimationFrame||C9),f(function(){var v=lu(),u=Z0.begin("mutate");s.map(v),u(),l()})}}var j0=!1;function ec(){j0=!0}function B0(){j0=!1}var Z4=null;function M9(s){if(l9&&P.observeMutations){var n=s.treeCallback,l=n===void 0?U4:n,f=s.nodeCallback,v=f===void 0?U4:f,u=s.pseudoElementsCallback,p=u===void 0?U4:u,C=s.observeMutationsRoot,M=C===void 0?o1:C;Z4=new l9(function(x){if(!j0){var g=m2();i3(x).forEach(function(S){if(S.type==="childList"&&S.addedNodes.length>0&&!H9(S.addedNodes[0])&&(P.searchPseudoElements&&p(S.target),l(S.target)),S.type==="attributes"&&S.target.parentNode&&P.searchPseudoElements&&p(S.target.parentNode),S.type==="attributes"&&H9(S.target)&&~xz.indexOf(S.attributeName))if(S.attributeName==="class"&&nu(S.target)){var V=Q4(I0(S.target)),R=V.prefix,G=V.iconName;S.target.setAttribute(E0,R||g),G&&S.target.setAttribute(q0,G)}else ou(S.target)&&v(S.target)})}}),e2&&Z4.observe(M,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function vu(){Z4&&Z4.disconnect()}function zu(s){var n=s.getAttribute("style"),l=[];return n&&(l=n.split(";").reduce(function(f,v){var u=v.split(":"),p=u[0],C=u.slice(1);return p&&C.length>0&&(f[p]=C.join(":").trim()),f},{})),l}function uu(s){var n=s.getAttribute("data-prefix"),l=s.getAttribute("data-icon"),f=s.innerText!==void 0?s.innerText.trim():"",v=Q4(I0(s));return v.prefix||(v.prefix=m2()),n&&l&&(v.prefix=n,v.iconName=l),v.iconName&&v.prefix||(v.prefix&&f.length>0&&(v.iconName=_z(v.prefix,s.innerText)||W0(v.prefix,w0(s.innerText))),!v.iconName&&P.autoFetchSvg&&s.firstChild&&s.firstChild.nodeType===Node.TEXT_NODE&&(v.iconName=s.firstChild.data)),v}function pu(s){var n=i3(s.attributes).reduce(function(v,u){return v.name!=="class"&&v.name!=="style"&&(v[u.name]=u.value),v},{}),l=s.getAttribute("title"),f=s.getAttribute("data-fa-title-id");return P.autoA11y&&(l?n["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(f||U3()):(n["aria-hidden"]="true",n.focusable="false")),n}function du(){return{iconName:null,title:null,titleId:null,prefix:null,transform:X1,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function V9(s){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},l=uu(s),f=l.iconName,v=l.prefix,u=l.rest,p=pu(s),C=k0("parseNodeAttributes",{},s),M=n.styleParser?zu(s):[];return k({iconName:f,title:s.getAttribute("title"),titleId:s.getAttribute("data-fa-title-id"),prefix:v,transform:X1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:u,styles:M,attributes:p}},C)}var Hu=Z1.styles;function ic(s){var n=P.autoReplaceSvg==="nest"?V9(s,{styleParser:!1}):V9(s);return~n.extra.classes.indexOf(q9)?a2("generateLayersText",s,n):a2("generateSvgReplacementMutation",s,n)}var v2=new Set;R0.map(function(s){v2.add("fa-".concat(s))});Object.keys(q3[n1]).map(v2.add.bind(v2));Object.keys(q3[z1]).map(v2.add.bind(v2));v2=W3(v2);function g9(s){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!e2)return Promise.resolve();var l=o1.documentElement.classList,f=function(S){return l.add("".concat(f9,"-").concat(S))},v=function(S){return l.remove("".concat(f9,"-").concat(S))},u=P.autoFetchSvg?v2:R0.map(function(g){return"fa-".concat(g)}).concat(Object.keys(Hu));u.includes("fa")||u.push("fa");var p=[".".concat(q9,":not([").concat(D2,"])")].concat(u.map(function(g){return".".concat(g,":not([").concat(D2,"])")})).join(", ");if(p.length===0)return Promise.resolve();var C=[];try{C=i3(s.querySelectorAll(p))}catch{}if(C.length>0)f("pending"),v("complete");else return Promise.resolve();var M=Z0.begin("onTree"),x=C.reduce(function(g,S){try{var V=ic(S);V&&g.push(V)}catch(R){E9||R.name==="MissingIcon"&&console.error(R)}return g},[]);return new Promise(function(g,S){Promise.all(x).then(function(V){ac(V,function(){f("active"),f("complete"),v("pending"),typeof n=="function"&&n(),M(),g()})}).catch(function(V){M(),S(V)})})}function Cu(s){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ic(s).then(function(l){l&&ac([l],n)})}function Mu(s){return function(n){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},f=(n||{}).icon?n:S0(n||{}),v=l.mask;return v&&(v=(v||{}).icon?v:S0(v||{})),s(f,k(k({},l),{},{mask:v}))}}var Vu=function(n){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},f=l.transform,v=f===void 0?X1:f,u=l.symbol,p=u===void 0?!1:u,C=l.mask,M=C===void 0?null:C,x=l.maskId,g=x===void 0?null:x,S=l.title,V=S===void 0?null:S,R=l.titleId,G=R===void 0?null:R,s1=l.classes,i1=s1===void 0?[]:s1,w=l.attributes,y=w===void 0?{}:w,U=l.styles,e1=U===void 0?{}:U;if(n){var t1=n.prefix,S1=n.iconName,V1=n.icon;return J4(k({type:"icon"},n),function(){return E2("beforeDOMElementCreation",{iconDefinition:n,params:l}),P.autoA11y&&(V?y["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(G||U3()):(y["aria-hidden"]="true",y.focusable="false")),_0({icons:{main:y0(V1),mask:M?y0(M.icon):{found:!1,width:null,height:null,icon:{}}},prefix:t1,iconName:S1,transform:k(k({},X1),v),symbol:p,title:V,maskId:g,titleId:G,extra:{attributes:y,styles:e1,classes:i1}})})}},gu={mixout:function(){return{icon:Mu(Vu)}},hooks:function(){return{mutationObserverCallbacks:function(l){return l.treeCallback=g9,l.nodeCallback=Cu,l}}},provides:function(n){n.i2svg=function(l){var f=l.node,v=f===void 0?o1:f,u=l.callback,p=u===void 0?function(){}:u;return g9(v,p)},n.generateSvgReplacementMutation=function(l,f){var v=f.iconName,u=f.title,p=f.titleId,C=f.prefix,M=f.transform,x=f.symbol,g=f.mask,S=f.maskId,V=f.extra;return new Promise(function(R,G){Promise.all([A0(v,C),g.iconName?A0(g.iconName,g.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(s1){var i1=F0(s1,2),w=i1[0],y=i1[1];R([l,_0({icons:{main:w,mask:y},prefix:C,iconName:v,transform:M,symbol:x,maskId:S,title:u,titleId:p,extra:V,watchable:!0})])}).catch(G)})},n.generateAbstractIcon=function(l){var f=l.children,v=l.attributes,u=l.main,p=l.transform,C=l.styles,M=X4(C);M.length>0&&(v.style=M);var x;return O0(p)&&(x=a2("generateAbstractTransformGrouping",{main:u,transform:p,containerWidth:u.width,iconWidth:u.width})),f.push(x||u.icon),{children:f,attributes:v}}}},Lu={mixout:function(){return{layer:function(l){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},v=f.classes,u=v===void 0?[]:v;return J4({type:"layer"},function(){E2("beforeDOMElementCreation",{assembler:l,params:f});var p=[];return l(function(C){Array.isArray(C)?C.map(function(M){p=p.concat(M.abstract)}):p=p.concat(C.abstract)}),[{tag:"span",attributes:{class:["".concat(P.cssPrefix,"-layers")].concat(W3(u)).join(" ")},children:p}]})}}}},xu={mixout:function(){return{counter:function(l){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},v=f.title,u=v===void 0?null:v,p=f.classes,C=p===void 0?[]:p,M=f.attributes,x=M===void 0?{}:M,g=f.styles,S=g===void 0?{}:g;return J4({type:"counter",content:l},function(){return E2("beforeDOMElementCreation",{content:l,params:f}),iu({content:l.toString(),title:u,extra:{attributes:x,styles:S,classes:["".concat(P.cssPrefix,"-layers-counter")].concat(W3(C))}})})}}}},bu={mixout:function(){return{text:function(l){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},v=f.transform,u=v===void 0?X1:v,p=f.title,C=p===void 0?null:p,M=f.classes,x=M===void 0?[]:M,g=f.attributes,S=g===void 0?{}:g,V=f.styles,R=V===void 0?{}:V;return J4({type:"text",content:l},function(){return E2("beforeDOMElementCreation",{content:l,params:f}),p9({content:l,transform:k(k({},X1),u),title:C,extra:{attributes:S,styles:R,classes:["".concat(P.cssPrefix,"-layers-text")].concat(W3(x))}})})}}},provides:function(n){n.generateLayersText=function(l,f){var v=f.title,u=f.transform,p=f.extra,C=null,M=null;if($9){var x=parseInt(getComputedStyle(l).fontSize,10),g=l.getBoundingClientRect();C=g.width/x,M=g.height/x}return P.autoA11y&&!v&&(p.attributes["aria-hidden"]="true"),Promise.resolve([l,p9({content:l.innerHTML,width:C,height:M,transform:u,title:v,extra:p,watchable:!0})])}}},wu=new RegExp('"',"ug"),L9=[1105920,1112319];function Nu(s){var n=s.replace(wu,""),l=Rz(n,0),f=l>=L9[0]&&l<=L9[1],v=n.length===2?n[0]===n[1]:!1;return{value:w0(v?n[0]:n),isSecondary:f||v}}function x9(s,n){var l="".concat(pz).concat(n.replace(":","-"));return new Promise(function(f,v){if(s.getAttribute(l)!==null)return f();var u=i3(s.children),p=u.filter(function(V1){return V1.getAttribute(b0)===n})[0],C=h2.getComputedStyle(s,n),M=C.getPropertyValue("font-family").match(Vz),x=C.getPropertyValue("font-weight"),g=C.getPropertyValue("content");if(p&&!M)return s.removeChild(p),f();if(M&&g!=="none"&&g!==""){var S=C.getPropertyValue("content"),V=~["Sharp"].indexOf(M[2])?z1:n1,R=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(M[2])?R3[V][M[2].toLowerCase()]:gz[V][x],G=Nu(S),s1=G.value,i1=G.isSecondary,w=M[0].startsWith("FontAwesome"),y=W0(R,s1),U=y;if(w){var e1=Zz(s1);e1.iconName&&e1.prefix&&(y=e1.iconName,R=e1.prefix)}if(y&&!i1&&(!p||p.getAttribute(E0)!==R||p.getAttribute(q0)!==U)){s.setAttribute(l,U),p&&s.removeChild(p);var t1=du(),S1=t1.extra;S1.attributes[b0]=n,A0(y,R).then(function(V1){var z2=_0(k(k({},t1),{},{icons:{main:V1,mask:G0()},prefix:R,iconName:U,extra:S1,watchable:!0})),y1=o1.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?s.insertBefore(y1,s.firstChild):s.appendChild(y1),y1.outerHTML=z2.map(function(c1){return _3(c1)}).join(`
`),s.removeAttribute(l),f()}).catch(v)}else f()}else f()})}function ku(s){return Promise.all([x9(s,"::before"),x9(s,"::after")])}function Su(s){return s.parentNode!==document.head&&!~Hz.indexOf(s.tagName.toUpperCase())&&!s.getAttribute(b0)&&(!s.parentNode||s.parentNode.tagName!=="svg")}function b9(s){if(e2)return new Promise(function(n,l){var f=i3(s.querySelectorAll("*")).filter(Su).map(ku),v=Z0.begin("searchPseudoElements");ec(),Promise.all(f).then(function(){v(),B0(),n()}).catch(function(){v(),B0(),l()})})}var yu={hooks:function(){return{mutationObserverCallbacks:function(l){return l.pseudoElementsCallback=b9,l}}},provides:function(n){n.pseudoElements2svg=function(l){var f=l.node,v=f===void 0?o1:f;P.searchPseudoElements&&b9(v)}}},w9=!1,Au={mixout:function(){return{dom:{unwatch:function(){ec(),w9=!0}}}},hooks:function(){return{bootstrap:function(){M9(k0("mutationObserverCallbacks",{}))},noAuto:function(){vu()},watch:function(l){var f=l.observeMutationsRoot;w9?B0():M9(k0("mutationObserverCallbacks",{observeMutationsRoot:f}))}}}},N9=function(n){var l={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(f,v){var u=v.toLowerCase().split("-"),p=u[0],C=u.slice(1).join("-");if(p&&C==="h")return f.flipX=!0,f;if(p&&C==="v")return f.flipY=!0,f;if(C=parseFloat(C),isNaN(C))return f;switch(p){case"grow":f.size=f.size+C;break;case"shrink":f.size=f.size-C;break;case"left":f.x=f.x-C;break;case"right":f.x=f.x+C;break;case"up":f.y=f.y-C;break;case"down":f.y=f.y+C;break;case"rotate":f.rotate=f.rotate+C;break}return f},l)},Pu={mixout:function(){return{parse:{transform:function(l){return N9(l)}}}},hooks:function(){return{parseNodeAttributes:function(l,f){var v=f.getAttribute("data-fa-transform");return v&&(l.transform=N9(v)),l}}},provides:function(n){n.generateAbstractTransformGrouping=function(l){var f=l.main,v=l.transform,u=l.containerWidth,p=l.iconWidth,C={transform:"translate(".concat(u/2," 256)")},M="translate(".concat(v.x*32,", ").concat(v.y*32,") "),x="scale(".concat(v.size/16*(v.flipX?-1:1),", ").concat(v.size/16*(v.flipY?-1:1),") "),g="rotate(".concat(v.rotate," 0 0)"),S={transform:"".concat(M," ").concat(x," ").concat(g)},V={transform:"translate(".concat(p/2*-1," -256)")},R={outer:C,inner:S,path:V};return{tag:"g",attributes:k({},R.outer),children:[{tag:"g",attributes:k({},R.inner),children:[{tag:f.icon.tag,children:f.icon.children,attributes:k(k({},f.icon.attributes),R.path)}]}]}}}},g0={x:0,y:0,width:"100%",height:"100%"};function k9(s){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return s.attributes&&(s.attributes.fill||n)&&(s.attributes.fill="black"),s}function Bu(s){return s.tag==="g"?s.children:[s]}var Tu={hooks:function(){return{parseNodeAttributes:function(l,f){var v=f.getAttribute("data-fa-mask"),u=v?Q4(v.split(" ").map(function(p){return p.trim()})):G0();return u.prefix||(u.prefix=m2()),l.mask=u,l.maskId=f.getAttribute("data-fa-mask-id"),l}}},provides:function(n){n.generateAbstractMask=function(l){var f=l.children,v=l.attributes,u=l.main,p=l.mask,C=l.maskId,M=l.transform,x=u.width,g=u.icon,S=p.width,V=p.icon,R=Bz({transform:M,containerWidth:S,iconWidth:x}),G={tag:"rect",attributes:k(k({},g0),{},{fill:"white"})},s1=g.children?{children:g.children.map(k9)}:{},i1={tag:"g",attributes:k({},R.inner),children:[k9(k({tag:g.tag,attributes:k(k({},g.attributes),R.path)},s1))]},w={tag:"g",attributes:k({},R.outer),children:[i1]},y="mask-".concat(C||U3()),U="clip-".concat(C||U3()),e1={tag:"mask",attributes:k(k({},g0),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[G,w]},t1={tag:"defs",children:[{tag:"clipPath",attributes:{id:U},children:Bu(V)},e1]};return f.push(t1,{tag:"rect",attributes:k({fill:"currentColor","clip-path":"url(#".concat(U,")"),mask:"url(#".concat(y,")")},g0)}),{children:f,attributes:v}}}},$u={provides:function(n){var l=!1;h2.matchMedia&&(l=h2.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var f=[],v={fill:"currentColor"},u={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};f.push({tag:"path",attributes:k(k({},v),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var p=k(k({},u),{},{attributeName:"opacity"}),C={tag:"circle",attributes:k(k({},v),{},{cx:"256",cy:"364",r:"28"}),children:[]};return l||C.children.push({tag:"animate",attributes:k(k({},u),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:k(k({},p),{},{values:"1;0;1;1;0;1;"})}),f.push(C),f.push({tag:"path",attributes:k(k({},v),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:l?[]:[{tag:"animate",attributes:k(k({},p),{},{values:"1;0;0;0;0;1;"})}]}),l||f.push({tag:"path",attributes:k(k({},v),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:k(k({},p),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:f}}}},Fu={hooks:function(){return{parseNodeAttributes:function(l,f){var v=f.getAttribute("data-fa-symbol"),u=v===null?!1:v===""?!0:v;return l.symbol=u,l}}}},Du=[Fz,gu,Lu,xu,bu,yu,Au,Pu,Tu,$u,Fu];Xz(Du,{mixoutsTo:O1});O1.noAuto;var rc=O1.config,Eu=O1.library;O1.dom;var j4=O1.parse;O1.findIconDefinition;O1.toHtml;var qu=O1.icon;O1.layer;var Ru=O1.text;O1.counter;function S9(s,n){var l=Object.keys(s);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(s);n&&(f=f.filter(function(v){return Object.getOwnPropertyDescriptor(s,v).enumerable})),l.push.apply(l,f)}return l}function _1(s){for(var n=1;n<arguments.length;n++){var l=arguments[n]!=null?arguments[n]:{};n%2?S9(Object(l),!0).forEach(function(f){T1(s,f,l[f])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(l)):S9(Object(l)).forEach(function(f){Object.defineProperty(s,f,Object.getOwnPropertyDescriptor(l,f))})}return s}function Y4(s){"@babel/helpers - typeof";return Y4=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Y4(s)}function T1(s,n,l){return n=ju(n),n in s?Object.defineProperty(s,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):s[n]=l,s}function Iu(s,n){if(s==null)return{};var l={},f=Object.keys(s),v,u;for(u=0;u<f.length;u++)v=f[u],!(n.indexOf(v)>=0)&&(l[v]=s[v]);return l}function Ou(s,n){if(s==null)return{};var l=Iu(s,n),f,v;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(s);for(v=0;v<u.length;v++)f=u[v],!(n.indexOf(f)>=0)&&Object.prototype.propertyIsEnumerable.call(s,f)&&(l[f]=s[f])}return l}function T0(s){return Uu(s)||Wu(s)||Gu(s)||_u()}function Uu(s){if(Array.isArray(s))return $0(s)}function Wu(s){if(typeof Symbol<"u"&&s[Symbol.iterator]!=null||s["@@iterator"]!=null)return Array.from(s)}function Gu(s,n){if(s){if(typeof s=="string")return $0(s,n);var l=Object.prototype.toString.call(s).slice(8,-1);if(l==="Object"&&s.constructor&&(l=s.constructor.name),l==="Map"||l==="Set")return Array.from(s);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return $0(s,n)}}function $0(s,n){n=s.length;for(var l=0,f=new Array(n);l<n;l++)f[l]=s[l];return f}function _u(){throw new TypeError(`Invalid attempt to spread non-iterable instance.