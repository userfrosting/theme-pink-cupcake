(function(A1,V){typeof exports=="object"&&typeof module<"u"?V(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],V):(A1=typeof globalThis<"u"?globalThis:A1||self,V(A1.ThemePinkcupcake={},A1.Vue))})(this,function(A1,V){"use strict";function Y8(r,t){var o=Object.keys(r);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(r);t&&(f=f.filter(function(m){return Object.getOwnPropertyDescriptor(r,m).enumerable})),o.push.apply(o,f)}return o}function y(r){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?Y8(Object(o),!0).forEach(function(f){d1(r,f,o[f])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):Y8(Object(o)).forEach(function(f){Object.defineProperty(r,f,Object.getOwnPropertyDescriptor(o,f))})}return r}function Q3(r){"@babel/helpers - typeof";return Q3=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Q3(r)}function nf(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function X8(r,t){for(var o=0;o<t.length;o++){var f=t[o];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(r,f.key,f)}}function of(r,t,o){return t&&X8(r.prototype,t),o&&X8(r,o),Object.defineProperty(r,"prototype",{writable:!1}),r}function d1(r,t,o){return t in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function H6(r,t){return ff(r)||mf(r,t)||K8(r,t)||zf()}function r3(r){return lf(r)||hf(r)||K8(r)||vf()}function lf(r){if(Array.isArray(r))return V6(r)}function ff(r){if(Array.isArray(r))return r}function hf(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function mf(r,t){var o=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(o!=null){var f=[],m=!0,z=!1,p,C;try{for(o=o.call(r);!(m=(p=o.next()).done)&&(f.push(p.value),!(t&&f.length===t));m=!0);}catch(M){z=!0,C=M}finally{try{!m&&o.return!=null&&o.return()}finally{if(z)throw C}}return f}}function K8(r,t){if(r){if(typeof r=="string")return V6(r,t);var o=Object.prototype.toString.call(r).slice(8,-1);if(o==="Object"&&r.constructor&&(o=r.constructor.name),o==="Map"||o==="Set")return Array.from(r);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return V6(r,t)}}function V6(r,t){(t==null||t>r.length)&&(t=r.length);for(var o=0,f=new Array(t);o<t;o++)f[o]=r[o];return f}function vf(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zf(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Q8=function(){},C6={},J8={},c5=null,a5={mark:Q8,measure:Q8};try{typeof window<"u"&&(C6=window),typeof document<"u"&&(J8=document),typeof MutationObserver<"u"&&(c5=MutationObserver),typeof performance<"u"&&(a5=performance)}catch{}var uf=C6.navigator||{},e5=uf.userAgent,i5=e5===void 0?"":e5,r2=C6,t1=J8,r5=c5,J3=a5;r2.document;var K1=!!t1.documentElement&&!!t1.head&&typeof t1.addEventListener=="function"&&typeof t1.createElement=="function",s5=~i5.indexOf("MSIE")||~i5.indexOf("Trident/"),c4,a4,e4,i4,r4,Q1="___FONT_AWESOME___",M6=16,t5="fa",n5="svg-inline--fa",u2="data-fa-i2svg",g6="data-fa-pseudo-element",pf="data-fa-pseudo-element-pending",L6="data-prefix",x6="data-icon",o5="fontawesome-i2svg",df="async",Hf=["HTML","HEAD","STYLE","SCRIPT"],l5=function(){try{return process.env.NODE_ENV==="production"}catch{return!1}}(),n1="classic",m1="sharp",b6=[n1,m1];function s3(r){return new Proxy(r,{get:function(o,f){return f in o?o[f]:o[n1]}})}var t3=s3((c4={},d1(c4,n1,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),d1(c4,m1,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),c4)),n3=s3((a4={},d1(a4,n1,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),d1(a4,m1,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),a4)),o3=s3((e4={},d1(e4,n1,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),d1(e4,m1,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),e4)),Vf=s3((i4={},d1(i4,n1,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),d1(i4,m1,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),i4)),Cf=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,f5="fa-layers-text",Mf=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,gf=s3((r4={},d1(r4,n1,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),d1(r4,m1,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),r4)),h5=[1,2,3,4,5,6,7,8,9,10],Lf=h5.concat([11,12,13,14,15,16,17,18,19,20]),xf=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],p2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},l3=new Set;Object.keys(n3[n1]).map(l3.add.bind(l3)),Object.keys(n3[m1]).map(l3.add.bind(l3));var bf=[].concat(b6,r3(l3),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",p2.GROUP,p2.SWAP_OPACITY,p2.PRIMARY,p2.SECONDARY]).concat(h5.map(function(r){return"".concat(r,"x")})).concat(Lf.map(function(r){return"w-".concat(r)})),f3=r2.FontAwesomeConfig||{};function wf(r){var t=t1.querySelector("script["+r+"]");if(t)return t.getAttribute(r)}function Nf(r){return r===""?!0:r==="false"?!1:r==="true"?!0:r}if(t1&&typeof t1.querySelector=="function"){var kf=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];kf.forEach(function(r){var t=H6(r,2),o=t[0],f=t[1],m=Nf(wf(o));m!=null&&(f3[f]=m)})}var m5={styleDefault:"solid",familyDefault:"classic",cssPrefix:t5,replacementClass:n5,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};f3.familyPrefix&&(f3.cssPrefix=f3.familyPrefix);var q2=y(y({},m5),f3);q2.autoReplaceSvg||(q2.observeMutations=!1);var B={};Object.keys(m5).forEach(function(r){Object.defineProperty(B,r,{enumerable:!0,set:function(o){q2[r]=o,h3.forEach(function(f){return f(B)})},get:function(){return q2[r]}})}),Object.defineProperty(B,"familyPrefix",{enumerable:!0,set:function(t){q2.cssPrefix=t,h3.forEach(function(o){return o(B)})},get:function(){return q2.cssPrefix}}),r2.FontAwesomeConfig=B;var h3=[];function Sf(r){return h3.push(r),function(){h3.splice(h3.indexOf(r),1)}}var s2=M6,j1={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function yf(r){if(!(!r||!K1)){var t=t1.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=r;for(var o=t1.head.childNodes,f=null,m=o.length-1;m>-1;m--){var z=o[m],p=(z.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(p)>-1&&(f=z)}return t1.head.insertBefore(t,f),r}}var Af="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function m3(){for(var r=12,t="";r-- >0;)t+=Af[Math.random()*62|0];return t}function R2(r){for(var t=[],o=(r||[]).length>>>0;o--;)t[o]=r[o];return t}function w6(r){return r.classList?R2(r.classList):(r.getAttribute("class")||"").split(" ").filter(function(t){return t})}function v5(r){return"".concat(r).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Pf(r){return Object.keys(r||{}).reduce(function(t,o){return t+"".concat(o,'="').concat(v5(r[o]),'" ')},"").trim()}function s4(r){return Object.keys(r||{}).reduce(function(t,o){return t+"".concat(o,": ").concat(r[o].trim(),";")},"")}function N6(r){return r.size!==j1.size||r.x!==j1.x||r.y!==j1.y||r.rotate!==j1.rotate||r.flipX||r.flipY}function Bf(r){var t=r.transform,o=r.containerWidth,f=r.iconWidth,m={transform:"translate(".concat(o/2," 256)")},z="translate(".concat(t.x*32,", ").concat(t.y*32,") "),p="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),C="rotate(".concat(t.rotate," 0 0)"),M={transform:"".concat(z," ").concat(p," ").concat(C)},b={transform:"translate(".concat(f/2*-1," -256)")};return{outer:m,inner:M,path:b}}function $f(r){var t=r.transform,o=r.width,f=o===void 0?M6:o,m=r.height,z=m===void 0?M6:m,p=r.startCentered,C=p===void 0?!1:p,M="";return C&&s5?M+="translate(".concat(t.x/s2-f/2,"em, ").concat(t.y/s2-z/2,"em) "):C?M+="translate(calc(-50% + ".concat(t.x/s2,"em), calc(-50% + ").concat(t.y/s2,"em)) "):M+="translate(".concat(t.x/s2,"em, ").concat(t.y/s2,"em) "),M+="scale(".concat(t.size/s2*(t.flipX?-1:1),", ").concat(t.size/s2*(t.flipY?-1:1),") "),M+="rotate(".concat(t.rotate,"deg) "),M}var Tf=`:root, :host {
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
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
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
}`;function z5(){var r=t5,t=n5,o=B.cssPrefix,f=B.replacementClass,m=Tf;if(o!==r||f!==t){var z=new RegExp("\\.".concat(r,"\\-"),"g"),p=new RegExp("\\--".concat(r,"\\-"),"g"),C=new RegExp("\\.".concat(t),"g");m=m.replace(z,".".concat(o,"-")).replace(p,"--".concat(o,"-")).replace(C,".".concat(f))}return m}var u5=!1;function k6(){B.autoAddCss&&!u5&&(yf(z5()),u5=!0)}var Ff={mixout:function(){return{dom:{css:z5,insertCss:k6}}},hooks:function(){return{beforeDOMElementCreation:function(){k6()},beforeI2svg:function(){k6()}}}},J1=r2||{};J1[Q1]||(J1[Q1]={}),J1[Q1].styles||(J1[Q1].styles={}),J1[Q1].hooks||(J1[Q1].hooks={}),J1[Q1].shims||(J1[Q1].shims=[]);var W1=J1[Q1],p5=[],Df=function r(){t1.removeEventListener("DOMContentLoaded",r),t4=1,p5.map(function(t){return t()})},t4=!1;K1&&(t4=(t1.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(t1.readyState),t4||t1.addEventListener("DOMContentLoaded",Df));function Ef(r){K1&&(t4?setTimeout(r,0):p5.push(r))}function v3(r){var t=r.tag,o=r.attributes,f=o===void 0?{}:o,m=r.children,z=m===void 0?[]:m;return typeof r=="string"?v5(r):"<".concat(t," ").concat(Pf(f),">").concat(z.map(v3).join(""),"</").concat(t,">")}function d5(r,t,o){if(r&&r[t]&&r[t][o])return{prefix:t,iconName:o,icon:r[t][o]}}var qf=function(t,o){return function(f,m,z,p){return t.call(o,f,m,z,p)}},S6=function(t,o,f,m){var z=Object.keys(t),p=z.length,C=m!==void 0?qf(o,m):o,M,b,L;for(f===void 0?(M=1,L=t[z[0]]):(M=0,L=f);M<p;M++)b=z[M],L=C(L,t[b],b,t);return L};function Rf(r){for(var t=[],o=0,f=r.length;o<f;){var m=r.charCodeAt(o++);if(m>=55296&&m<=56319&&o<f){var z=r.charCodeAt(o++);(z&64512)==56320?t.push(((m&1023)<<10)+(z&1023)+65536):(t.push(m),o--)}else t.push(m)}return t}function y6(r){var t=Rf(r);return t.length===1?t[0].toString(16):null}function If(r,t){var o=r.length,f=r.charCodeAt(t),m;return f>=55296&&f<=56319&&o>t+1&&(m=r.charCodeAt(t+1),m>=56320&&m<=57343)?(f-55296)*1024+m-56320+65536:f}function H5(r){return Object.keys(r).reduce(function(t,o){var f=r[o],m=!!f.icon;return m?t[f.iconName]=f.icon:t[o]=f,t},{})}function A6(r,t){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},f=o.skipHooks,m=f===void 0?!1:f,z=H5(t);typeof W1.hooks.addPack=="function"&&!m?W1.hooks.addPack(r,H5(t)):W1.styles[r]=y(y({},W1.styles[r]||{}),z),r==="fas"&&A6("fa",t)}var n4,o4,l4,I2=W1.styles,Of=W1.shims,_f=(n4={},d1(n4,n1,Object.values(o3[n1])),d1(n4,m1,Object.values(o3[m1])),n4),P6=null,V5={},C5={},M5={},g5={},L5={},Uf=(o4={},d1(o4,n1,Object.keys(t3[n1])),d1(o4,m1,Object.keys(t3[m1])),o4);function Wf(r){return~bf.indexOf(r)}function Gf(r,t){var o=t.split("-"),f=o[0],m=o.slice(1).join("-");return f===r&&m!==""&&!Wf(m)?m:null}var x5=function(){var t=function(z){return S6(I2,function(p,C,M){return p[M]=S6(C,z,{}),p},{})};V5=t(function(m,z,p){if(z[3]&&(m[z[3]]=p),z[2]){var C=z[2].filter(function(M){return typeof M=="number"});C.forEach(function(M){m[M.toString(16)]=p})}return m}),C5=t(function(m,z,p){if(m[p]=p,z[2]){var C=z[2].filter(function(M){return typeof M=="string"});C.forEach(function(M){m[M]=p})}return m}),L5=t(function(m,z,p){var C=z[2];return m[p]=p,C.forEach(function(M){m[M]=p}),m});var o="far"in I2||B.autoFetchSvg,f=S6(Of,function(m,z){var p=z[0],C=z[1],M=z[2];return C==="far"&&!o&&(C="fas"),typeof p=="string"&&(m.names[p]={prefix:C,iconName:M}),typeof p=="number"&&(m.unicodes[p.toString(16)]={prefix:C,iconName:M}),m},{names:{},unicodes:{}});M5=f.names,g5=f.unicodes,P6=f4(B.styleDefault,{family:B.familyDefault})};Sf(function(r){P6=f4(r.styleDefault,{family:B.familyDefault})}),x5();function B6(r,t){return(V5[r]||{})[t]}function Zf(r,t){return(C5[r]||{})[t]}function d2(r,t){return(L5[r]||{})[t]}function b5(r){return M5[r]||{prefix:null,iconName:null}}function jf(r){var t=g5[r],o=B6("fas",r);return t||(o?{prefix:"fas",iconName:o}:null)||{prefix:null,iconName:null}}function t2(){return P6}var $6=function(){return{prefix:null,iconName:null,rest:[]}};function f4(r){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=t.family,f=o===void 0?n1:o,m=t3[f][r],z=n3[f][r]||n3[f][m],p=r in W1.styles?r:null;return z||p||null}var w5=(l4={},d1(l4,n1,Object.keys(o3[n1])),d1(l4,m1,Object.keys(o3[m1])),l4);function h4(r){var t,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},f=o.skipLookups,m=f===void 0?!1:f,z=(t={},d1(t,n1,"".concat(B.cssPrefix,"-").concat(n1)),d1(t,m1,"".concat(B.cssPrefix,"-").concat(m1)),t),p=null,C=n1;(r.includes(z[n1])||r.some(function(b){return w5[n1].includes(b)}))&&(C=n1),(r.includes(z[m1])||r.some(function(b){return w5[m1].includes(b)}))&&(C=m1);var M=r.reduce(function(b,L){var N=Gf(B.cssPrefix,L);if(I2[L]?(L=_f[C].includes(L)?Vf[C][L]:L,p=L,b.prefix=L):Uf[C].indexOf(L)>-1?(p=L,b.prefix=f4(L,{family:C})):N?b.iconName=N:L!==B.replacementClass&&L!==z[n1]&&L!==z[m1]&&b.rest.push(L),!m&&b.prefix&&b.iconName){var g=p==="fa"?b5(b.iconName):{},E=d2(b.prefix,b.iconName);g.prefix&&(p=null),b.iconName=g.iconName||E||b.iconName,b.prefix=g.prefix||b.prefix,b.prefix==="far"&&!I2.far&&I2.fas&&!B.autoFetchSvg&&(b.prefix="fas")}return b},$6());return(r.includes("fa-brands")||r.includes("fab"))&&(M.prefix="fab"),(r.includes("fa-duotone")||r.includes("fad"))&&(M.prefix="fad"),!M.prefix&&C===m1&&(I2.fass||B.autoFetchSvg)&&(M.prefix="fass",M.iconName=d2(M.prefix,M.iconName)||M.iconName),(M.prefix==="fa"||p==="fa")&&(M.prefix=t2()||"fas"),M}var Yf=function(){function r(){nf(this,r),this.definitions={}}return of(r,[{key:"add",value:function(){for(var o=this,f=arguments.length,m=new Array(f),z=0;z<f;z++)m[z]=arguments[z];var p=m.reduce(this._pullDefinitions,{});Object.keys(p).forEach(function(C){o.definitions[C]=y(y({},o.definitions[C]||{}),p[C]),A6(C,p[C]);var M=o3[n1][C];M&&A6(M,p[C]),x5()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(o,f){var m=f.prefix&&f.iconName&&f.icon?{0:f}:f;return Object.keys(m).map(function(z){var p=m[z],C=p.prefix,M=p.iconName,b=p.icon,L=b[2];o[C]||(o[C]={}),L.length>0&&L.forEach(function(N){typeof N=="string"&&(o[C][N]=b)}),o[C][M]=b}),o}}]),r}(),N5=[],O2={},_2={},Xf=Object.keys(_2);function Kf(r,t){var o=t.mixoutsTo;return N5=r,O2={},Object.keys(_2).forEach(function(f){Xf.indexOf(f)===-1&&delete _2[f]}),N5.forEach(function(f){var m=f.mixout?f.mixout():{};if(Object.keys(m).forEach(function(p){typeof m[p]=="function"&&(o[p]=m[p]),Q3(m[p])==="object"&&Object.keys(m[p]).forEach(function(C){o[p]||(o[p]={}),o[p][C]=m[p][C]})}),f.hooks){var z=f.hooks();Object.keys(z).forEach(function(p){O2[p]||(O2[p]=[]),O2[p].push(z[p])})}f.provides&&f.provides(_2)}),o}function T6(r,t){for(var o=arguments.length,f=new Array(o>2?o-2:0),m=2;m<o;m++)f[m-2]=arguments[m];var z=O2[r]||[];return z.forEach(function(p){t=p.apply(null,[t].concat(f))}),t}function H2(r){for(var t=arguments.length,o=new Array(t>1?t-1:0),f=1;f<t;f++)o[f-1]=arguments[f];var m=O2[r]||[];m.forEach(function(z){z.apply(null,o)})}function c2(){var r=arguments[0],t=Array.prototype.slice.call(arguments,1);return _2[r]?_2[r].apply(null,t):void 0}function F6(r){r.prefix==="fa"&&(r.prefix="fas");var t=r.iconName,o=r.prefix||t2();if(t)return t=d2(o,t)||t,d5(k5.definitions,o,t)||d5(W1.styles,o,t)}var k5=new Yf,Qf=function(){B.autoReplaceSvg=!1,B.observeMutations=!1,H2("noAuto")},Jf={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return K1?(H2("beforeI2svg",t),c2("pseudoElements2svg",t),c2("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=t.autoReplaceSvgRoot;B.autoReplaceSvg===!1&&(B.autoReplaceSvg=!0),B.observeMutations=!0,Ef(function(){ah({autoReplaceSvgRoot:o}),H2("watch",t)})}},ch={icon:function(t){if(t===null)return null;if(Q3(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:d2(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var o=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],f=f4(t[0]);return{prefix:f,iconName:d2(f,o)||o}}if(typeof t=="string"&&(t.indexOf("".concat(B.cssPrefix,"-"))>-1||t.match(Cf))){var m=h4(t.split(" "),{skipLookups:!0});return{prefix:m.prefix||t2(),iconName:d2(m.prefix,m.iconName)||m.iconName}}if(typeof t=="string"){var z=t2();return{prefix:z,iconName:d2(z,t)||t}}}},F1={noAuto:Qf,config:B,dom:Jf,parse:ch,library:k5,findIconDefinition:F6,toHtml:v3},ah=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=t.autoReplaceSvgRoot,f=o===void 0?t1:o;(Object.keys(W1.styles).length>0||B.autoFetchSvg)&&K1&&B.autoReplaceSvg&&F1.dom.i2svg({node:f})};function m4(r,t){return Object.defineProperty(r,"abstract",{get:t}),Object.defineProperty(r,"html",{get:function(){return r.abstract.map(function(f){return v3(f)})}}),Object.defineProperty(r,"node",{get:function(){if(K1){var f=t1.createElement("div");return f.innerHTML=r.html,f.children}}}),r}function eh(r){var t=r.children,o=r.main,f=r.mask,m=r.attributes,z=r.styles,p=r.transform;if(N6(p)&&o.found&&!f.found){var C=o.width,M=o.height,b={x:C/M/2,y:.5};m.style=s4(y(y({},z),{},{"transform-origin":"".concat(b.x+p.x/16,"em ").concat(b.y+p.y/16,"em")}))}return[{tag:"svg",attributes:m,children:t}]}function ih(r){var t=r.prefix,o=r.iconName,f=r.children,m=r.attributes,z=r.symbol,p=z===!0?"".concat(t,"-").concat(B.cssPrefix,"-").concat(o):z;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:y(y({},m),{},{id:p}),children:f}]}]}function D6(r){var t=r.icons,o=t.main,f=t.mask,m=r.prefix,z=r.iconName,p=r.transform,C=r.symbol,M=r.title,b=r.maskId,L=r.titleId,N=r.extra,g=r.watchable,E=g===void 0?!1:g,G=f.found?f:o,o1=G.width,r1=G.height,k=m==="fak",A=[B.replacementClass,z?"".concat(B.cssPrefix,"-").concat(z):""].filter(function(y1){return N.classes.indexOf(y1)===-1}).filter(function(y1){return y1!==""||!!y1}).concat(N.classes).join(" "),U={children:[],attributes:y(y({},N.attributes),{},{"data-prefix":m,"data-icon":z,class:A,role:N.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(o1," ").concat(r1)})},i1=k&&!~N.classes.indexOf("fa-fw")?{width:"".concat(o1/r1*16*.0625,"em")}:{};E&&(U.attributes[u2]=""),M&&(U.children.push({tag:"title",attributes:{id:U.attributes["aria-labelledby"]||"title-".concat(L||m3())},children:[M]}),delete U.attributes.title);var l1=y(y({},U),{},{prefix:m,iconName:z,main:o,mask:f,maskId:b,transform:p,symbol:C,styles:y(y({},i1),N.styles)}),S1=f.found&&o.found?c2("generateAbstractMask",l1)||{children:[],attributes:{}}:c2("generateAbstractIcon",l1)||{children:[],attributes:{}},g1=S1.children,V2=S1.attributes;return l1.children=g1,l1.attributes=V2,C?ih(l1):eh(l1)}function S5(r){var t=r.content,o=r.width,f=r.height,m=r.transform,z=r.title,p=r.extra,C=r.watchable,M=C===void 0?!1:C,b=y(y(y({},p.attributes),z?{title:z}:{}),{},{class:p.classes.join(" ")});M&&(b[u2]="");var L=y({},p.styles);N6(m)&&(L.transform=$f({transform:m,startCentered:!0,width:o,height:f}),L["-webkit-transform"]=L.transform);var N=s4(L);N.length>0&&(b.style=N);var g=[];return g.push({tag:"span",attributes:b,children:[t]}),z&&g.push({tag:"span",attributes:{class:"sr-only"},children:[z]}),g}function rh(r){var t=r.content,o=r.title,f=r.extra,m=y(y(y({},f.attributes),o?{title:o}:{}),{},{class:f.classes.join(" ")}),z=s4(f.styles);z.length>0&&(m.style=z);var p=[];return p.push({tag:"span",attributes:m,children:[t]}),o&&p.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),p}var E6=W1.styles;function q6(r){var t=r[0],o=r[1],f=r.slice(4),m=H6(f,1),z=m[0],p=null;return Array.isArray(z)?p={tag:"g",attributes:{class:"".concat(B.cssPrefix,"-").concat(p2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(B.cssPrefix,"-").concat(p2.SECONDARY),fill:"currentColor",d:z[0]}},{tag:"path",attributes:{class:"".concat(B.cssPrefix,"-").concat(p2.PRIMARY),fill:"currentColor",d:z[1]}}]}:p={tag:"path",attributes:{fill:"currentColor",d:z}},{found:!0,width:t,height:o,icon:p}}var sh={found:!1,width:512,height:512};function th(r,t){!l5&&!B.showMissingIcons&&r&&console.error('Icon with name "'.concat(r,'" and prefix "').concat(t,'" is missing.'))}function R6(r,t){var o=t;return t==="fa"&&B.styleDefault!==null&&(t=t2()),new Promise(function(f,m){if(c2("missingIconAbstract"),o==="fa"){var z=b5(r)||{};r=z.iconName||r,t=z.prefix||t}if(r&&t&&E6[t]&&E6[t][r]){var p=E6[t][r];return f(q6(p))}th(r,t),f(y(y({},sh),{},{icon:B.showMissingIcons&&r?c2("missingIconAbstract")||{}:{}}))})}var y5=function(){},I6=B.measurePerformance&&J3&&J3.mark&&J3.measure?J3:{mark:y5,measure:y5},z3='FA "6.5.1"',nh=function(t){return I6.mark("".concat(z3," ").concat(t," begins")),function(){return A5(t)}},A5=function(t){I6.mark("".concat(z3," ").concat(t," ends")),I6.measure("".concat(z3," ").concat(t),"".concat(z3," ").concat(t," begins"),"".concat(z3," ").concat(t," ends"))},O6={begin:nh,end:A5},v4=function(){};function P5(r){var t=r.getAttribute?r.getAttribute(u2):null;return typeof t=="string"}function oh(r){var t=r.getAttribute?r.getAttribute(L6):null,o=r.getAttribute?r.getAttribute(x6):null;return t&&o}function lh(r){return r&&r.classList&&r.classList.contains&&r.classList.contains(B.replacementClass)}function fh(){if(B.autoReplaceSvg===!0)return z4.replace;var r=z4[B.autoReplaceSvg];return r||z4.replace}function hh(r){return t1.createElementNS("http://www.w3.org/2000/svg",r)}function mh(r){return t1.createElement(r)}function B5(r){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=t.ceFn,f=o===void 0?r.tag==="svg"?hh:mh:o;if(typeof r=="string")return t1.createTextNode(r);var m=f(r.tag);Object.keys(r.attributes||[]).forEach(function(p){m.setAttribute(p,r.attributes[p])});var z=r.children||[];return z.forEach(function(p){m.appendChild(B5(p,{ceFn:f}))}),m}function vh(r){var t=" ".concat(r.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var z4={replace:function(t){var o=t[0];if(o.parentNode)if(t[1].forEach(function(m){o.parentNode.insertBefore(B5(m),o)}),o.getAttribute(u2)===null&&B.keepOriginalSource){var f=t1.createComment(vh(o));o.parentNode.replaceChild(f,o)}else o.remove()},nest:function(t){var o=t[0],f=t[1];if(~w6(o).indexOf(B.replacementClass))return z4.replace(t);var m=new RegExp("".concat(B.cssPrefix,"-.*"));if(delete f[0].attributes.id,f[0].attributes.class){var z=f[0].attributes.class.split(" ").reduce(function(C,M){return M===B.replacementClass||M.match(m)?C.toSvg.push(M):C.toNode.push(M),C},{toNode:[],toSvg:[]});f[0].attributes.class=z.toSvg.join(" "),z.toNode.length===0?o.removeAttribute("class"):o.setAttribute("class",z.toNode.join(" "))}var p=f.map(function(C){return v3(C)}).join(`
`);o.setAttribute(u2,""),o.innerHTML=p}};function $5(r){r()}function T5(r,t){var o=typeof t=="function"?t:v4;if(r.length===0)o();else{var f=$5;B.mutateApproach===df&&(f=r2.requestAnimationFrame||$5),f(function(){var m=fh(),z=O6.begin("mutate");r.map(m),z(),o()})}}var _6=!1;function F5(){_6=!0}function U6(){_6=!1}var u4=null;function D5(r){if(r5&&B.observeMutations){var t=r.treeCallback,o=t===void 0?v4:t,f=r.nodeCallback,m=f===void 0?v4:f,z=r.pseudoElementsCallback,p=z===void 0?v4:z,C=r.observeMutationsRoot,M=C===void 0?t1:C;u4=new r5(function(b){if(!_6){var L=t2();R2(b).forEach(function(N){if(N.type==="childList"&&N.addedNodes.length>0&&!P5(N.addedNodes[0])&&(B.searchPseudoElements&&p(N.target),o(N.target)),N.type==="attributes"&&N.target.parentNode&&B.searchPseudoElements&&p(N.target.parentNode),N.type==="attributes"&&P5(N.target)&&~xf.indexOf(N.attributeName))if(N.attributeName==="class"&&oh(N.target)){var g=h4(w6(N.target)),E=g.prefix,G=g.iconName;N.target.setAttribute(L6,E||L),G&&N.target.setAttribute(x6,G)}else lh(N.target)&&m(N.target)})}}),K1&&u4.observe(M,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function zh(){u4&&u4.disconnect()}function uh(r){var t=r.getAttribute("style"),o=[];return t&&(o=t.split(";").reduce(function(f,m){var z=m.split(":"),p=z[0],C=z.slice(1);return p&&C.length>0&&(f[p]=C.join(":").trim()),f},{})),o}function ph(r){var t=r.getAttribute("data-prefix"),o=r.getAttribute("data-icon"),f=r.innerText!==void 0?r.innerText.trim():"",m=h4(w6(r));return m.prefix||(m.prefix=t2()),t&&o&&(m.prefix=t,m.iconName=o),m.iconName&&m.prefix||(m.prefix&&f.length>0&&(m.iconName=Zf(m.prefix,r.innerText)||B6(m.prefix,y6(r.innerText))),!m.iconName&&B.autoFetchSvg&&r.firstChild&&r.firstChild.nodeType===Node.TEXT_NODE&&(m.iconName=r.firstChild.data)),m}function dh(r){var t=R2(r.attributes).reduce(function(m,z){return m.name!=="class"&&m.name!=="style"&&(m[z.name]=z.value),m},{}),o=r.getAttribute("title"),f=r.getAttribute("data-fa-title-id");return B.autoA11y&&(o?t["aria-labelledby"]="".concat(B.replacementClass,"-title-").concat(f||m3()):(t["aria-hidden"]="true",t.focusable="false")),t}function Hh(){return{iconName:null,title:null,titleId:null,prefix:null,transform:j1,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function E5(r){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},o=ph(r),f=o.iconName,m=o.prefix,z=o.rest,p=dh(r),C=T6("parseNodeAttributes",{},r),M=t.styleParser?uh(r):[];return y({iconName:f,title:r.getAttribute("title"),titleId:r.getAttribute("data-fa-title-id"),prefix:m,transform:j1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:z,styles:M,attributes:p}},C)}var Vh=W1.styles;function q5(r){var t=B.autoReplaceSvg==="nest"?E5(r,{styleParser:!1}):E5(r);return~t.extra.classes.indexOf(f5)?c2("generateLayersText",r,t):c2("generateSvgReplacementMutation",r,t)}var n2=new Set;b6.map(function(r){n2.add("fa-".concat(r))}),Object.keys(t3[n1]).map(n2.add.bind(n2)),Object.keys(t3[m1]).map(n2.add.bind(n2)),n2=r3(n2);function R5(r){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!K1)return Promise.resolve();var o=t1.documentElement.classList,f=function(N){return o.add("".concat(o5,"-").concat(N))},m=function(N){return o.remove("".concat(o5,"-").concat(N))},z=B.autoFetchSvg?n2:b6.map(function(L){return"fa-".concat(L)}).concat(Object.keys(Vh));z.includes("fa")||z.push("fa");var p=[".".concat(f5,":not([").concat(u2,"])")].concat(z.map(function(L){return".".concat(L,":not([").concat(u2,"])")})).join(", ");if(p.length===0)return Promise.resolve();var C=[];try{C=R2(r.querySelectorAll(p))}catch{}if(C.length>0)f("pending"),m("complete");else return Promise.resolve();var M=O6.begin("onTree"),b=C.reduce(function(L,N){try{var g=q5(N);g&&L.push(g)}catch(E){l5||E.name==="MissingIcon"&&console.error(E)}return L},[]);return new Promise(function(L,N){Promise.all(b).then(function(g){T5(g,function(){f("active"),f("complete"),m("pending"),typeof t=="function"&&t(),M(),L()})}).catch(function(g){M(),N(g)})})}function Ch(r){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;q5(r).then(function(o){o&&T5([o],t)})}function Mh(r){return function(t){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},f=(t||{}).icon?t:F6(t||{}),m=o.mask;return m&&(m=(m||{}).icon?m:F6(m||{})),r(f,y(y({},o),{},{mask:m}))}}var gh=function(t){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},f=o.transform,m=f===void 0?j1:f,z=o.symbol,p=z===void 0?!1:z,C=o.mask,M=C===void 0?null:C,b=o.maskId,L=b===void 0?null:b,N=o.title,g=N===void 0?null:N,E=o.titleId,G=E===void 0?null:E,o1=o.classes,r1=o1===void 0?[]:o1,k=o.attributes,A=k===void 0?{}:k,U=o.styles,i1=U===void 0?{}:U;if(t){var l1=t.prefix,S1=t.iconName,g1=t.icon;return m4(y({type:"icon"},t),function(){return H2("beforeDOMElementCreation",{iconDefinition:t,params:o}),B.autoA11y&&(g?A["aria-labelledby"]="".concat(B.replacementClass,"-title-").concat(G||m3()):(A["aria-hidden"]="true",A.focusable="false")),D6({icons:{main:q6(g1),mask:M?q6(M.icon):{found:!1,width:null,height:null,icon:{}}},prefix:l1,iconName:S1,transform:y(y({},j1),m),symbol:p,title:g,maskId:L,titleId:G,extra:{attributes:A,styles:i1,classes:r1}})})}},Lh={mixout:function(){return{icon:Mh(gh)}},hooks:function(){return{mutationObserverCallbacks:function(o){return o.treeCallback=R5,o.nodeCallback=Ch,o}}},provides:function(t){t.i2svg=function(o){var f=o.node,m=f===void 0?t1:f,z=o.callback,p=z===void 0?function(){}:z;return R5(m,p)},t.generateSvgReplacementMutation=function(o,f){var m=f.iconName,z=f.title,p=f.titleId,C=f.prefix,M=f.transform,b=f.symbol,L=f.mask,N=f.maskId,g=f.extra;return new Promise(function(E,G){Promise.all([R6(m,C),L.iconName?R6(L.iconName,L.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(o1){var r1=H6(o1,2),k=r1[0],A=r1[1];E([o,D6({icons:{main:k,mask:A},prefix:C,iconName:m,transform:M,symbol:b,maskId:N,title:z,titleId:p,extra:g,watchable:!0})])}).catch(G)})},t.generateAbstractIcon=function(o){var f=o.children,m=o.attributes,z=o.main,p=o.transform,C=o.styles,M=s4(C);M.length>0&&(m.style=M);var b;return N6(p)&&(b=c2("generateAbstractTransformGrouping",{main:z,transform:p,containerWidth:z.width,iconWidth:z.width})),f.push(b||z.icon),{children:f,attributes:m}}}},xh={mixout:function(){return{layer:function(o){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},m=f.classes,z=m===void 0?[]:m;return m4({type:"layer"},function(){H2("beforeDOMElementCreation",{assembler:o,params:f});var p=[];return o(function(C){Array.isArray(C)?C.map(function(M){p=p.concat(M.abstract)}):p=p.concat(C.abstract)}),[{tag:"span",attributes:{class:["".concat(B.cssPrefix,"-layers")].concat(r3(z)).join(" ")},children:p}]})}}}},bh={mixout:function(){return{counter:function(o){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},m=f.title,z=m===void 0?null:m,p=f.classes,C=p===void 0?[]:p,M=f.attributes,b=M===void 0?{}:M,L=f.styles,N=L===void 0?{}:L;return m4({type:"counter",content:o},function(){return H2("beforeDOMElementCreation",{content:o,params:f}),rh({content:o.toString(),title:z,extra:{attributes:b,styles:N,classes:["".concat(B.cssPrefix,"-layers-counter")].concat(r3(C))}})})}}}},wh={mixout:function(){return{text:function(o){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},m=f.transform,z=m===void 0?j1:m,p=f.title,C=p===void 0?null:p,M=f.classes,b=M===void 0?[]:M,L=f.attributes,N=L===void 0?{}:L,g=f.styles,E=g===void 0?{}:g;return m4({type:"text",content:o},function(){return H2("beforeDOMElementCreation",{content:o,params:f}),S5({content:o,transform:y(y({},j1),z),title:C,extra:{attributes:N,styles:E,classes:["".concat(B.cssPrefix,"-layers-text")].concat(r3(b))}})})}}},provides:function(t){t.generateLayersText=function(o,f){var m=f.title,z=f.transform,p=f.extra,C=null,M=null;if(s5){var b=parseInt(getComputedStyle(o).fontSize,10),L=o.getBoundingClientRect();C=L.width/b,M=L.height/b}return B.autoA11y&&!m&&(p.attributes["aria-hidden"]="true"),Promise.resolve([o,S5({content:o.innerHTML,width:C,height:M,transform:z,title:m,extra:p,watchable:!0})])}}},Nh=new RegExp('"',"ug"),I5=[1105920,1112319];function kh(r){var t=r.replace(Nh,""),o=If(t,0),f=o>=I5[0]&&o<=I5[1],m=t.length===2?t[0]===t[1]:!1;return{value:y6(m?t[0]:t),isSecondary:f||m}}function O5(r,t){var o="".concat(pf).concat(t.replace(":","-"));return new Promise(function(f,m){if(r.getAttribute(o)!==null)return f();var z=R2(r.children),p=z.filter(function(g1){return g1.getAttribute(g6)===t})[0],C=r2.getComputedStyle(r,t),M=C.getPropertyValue("font-family").match(Mf),b=C.getPropertyValue("font-weight"),L=C.getPropertyValue("content");if(p&&!M)return r.removeChild(p),f();if(M&&L!=="none"&&L!==""){var N=C.getPropertyValue("content"),g=~["Sharp"].indexOf(M[2])?m1:n1,E=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(M[2])?n3[g][M[2].toLowerCase()]:gf[g][b],G=kh(N),o1=G.value,r1=G.isSecondary,k=M[0].startsWith("FontAwesome"),A=B6(E,o1),U=A;if(k){var i1=jf(o1);i1.iconName&&i1.prefix&&(A=i1.iconName,E=i1.prefix)}if(A&&!r1&&(!p||p.getAttribute(L6)!==E||p.getAttribute(x6)!==U)){r.setAttribute(o,U),p&&r.removeChild(p);var l1=Hh(),S1=l1.extra;S1.attributes[g6]=t,R6(A,E).then(function(g1){var V2=D6(y(y({},l1),{},{icons:{main:g1,mask:$6()},prefix:E,iconName:U,extra:S1,watchable:!0})),y1=t1.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?r.insertBefore(y1,r.firstChild):r.appendChild(y1),y1.outerHTML=V2.map(function(a1){return v3(a1)}).join(`
`),r.removeAttribute(o),f()}).catch(m)}else f()}else f()})}function Sh(r){return Promise.all([O5(r,"::before"),O5(r,"::after")])}function yh(r){return r.parentNode!==document.head&&!~Hf.indexOf(r.tagName.toUpperCase())&&!r.getAttribute(g6)&&(!r.parentNode||r.parentNode.tagName!=="svg")}function _5(r){if(K1)return new Promise(function(t,o){var f=R2(r.querySelectorAll("*")).filter(yh).map(Sh),m=O6.begin("searchPseudoElements");F5(),Promise.all(f).then(function(){m(),U6(),t()}).catch(function(){m(),U6(),o()})})}var Ah={hooks:function(){return{mutationObserverCallbacks:function(o){return o.pseudoElementsCallback=_5,o}}},provides:function(t){t.pseudoElements2svg=function(o){var f=o.node,m=f===void 0?t1:f;B.searchPseudoElements&&_5(m)}}},U5=!1,Ph={mixout:function(){return{dom:{unwatch:function(){F5(),U5=!0}}}},hooks:function(){return{bootstrap:function(){D5(T6("mutationObserverCallbacks",{}))},noAuto:function(){zh()},watch:function(o){var f=o.observeMutationsRoot;U5?U6():D5(T6("mutationObserverCallbacks",{observeMutationsRoot:f}))}}}},W5=function(t){var o={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(f,m){var z=m.toLowerCase().split("-"),p=z[0],C=z.slice(1).join("-");if(p&&C==="h")return f.flipX=!0,f;if(p&&C==="v")return f.flipY=!0,f;if(C=parseFloat(C),isNaN(C))return f;switch(p){case"grow":f.size=f.size+C;break;case"shrink":f.size=f.size-C;break;case"left":f.x=f.x-C;break;case"right":f.x=f.x+C;break;case"up":f.y=f.y-C;break;case"down":f.y=f.y+C;break;case"rotate":f.rotate=f.rotate+C;break}return f},o)},Bh={mixout:function(){return{parse:{transform:function(o){return W5(o)}}}},hooks:function(){return{parseNodeAttributes:function(o,f){var m=f.getAttribute("data-fa-transform");return m&&(o.transform=W5(m)),o}}},provides:function(t){t.generateAbstractTransformGrouping=function(o){var f=o.main,m=o.transform,z=o.containerWidth,p=o.iconWidth,C={transform:"translate(".concat(z/2," 256)")},M="translate(".concat(m.x*32,", ").concat(m.y*32,") "),b="scale(".concat(m.size/16*(m.flipX?-1:1),", ").concat(m.size/16*(m.flipY?-1:1),") "),L="rotate(".concat(m.rotate," 0 0)"),N={transform:"".concat(M," ").concat(b," ").concat(L)},g={transform:"translate(".concat(p/2*-1," -256)")},E={outer:C,inner:N,path:g};return{tag:"g",attributes:y({},E.outer),children:[{tag:"g",attributes:y({},E.inner),children:[{tag:f.icon.tag,children:f.icon.children,attributes:y(y({},f.icon.attributes),E.path)}]}]}}}},W6={x:0,y:0,width:"100%",height:"100%"};function G5(r){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return r.attributes&&(r.attributes.fill||t)&&(r.attributes.fill="black"),r}function $h(r){return r.tag==="g"?r.children:[r]}var Th={hooks:function(){return{parseNodeAttributes:function(o,f){var m=f.getAttribute("data-fa-mask"),z=m?h4(m.split(" ").map(function(p){return p.trim()})):$6();return z.prefix||(z.prefix=t2()),o.mask=z,o.maskId=f.getAttribute("data-fa-mask-id"),o}}},provides:function(t){t.generateAbstractMask=function(o){var f=o.children,m=o.attributes,z=o.main,p=o.mask,C=o.maskId,M=o.transform,b=z.width,L=z.icon,N=p.width,g=p.icon,E=Bf({transform:M,containerWidth:N,iconWidth:b}),G={tag:"rect",attributes:y(y({},W6),{},{fill:"white"})},o1=L.children?{children:L.children.map(G5)}:{},r1={tag:"g",attributes:y({},E.inner),children:[G5(y({tag:L.tag,attributes:y(y({},L.attributes),E.path)},o1))]},k={tag:"g",attributes:y({},E.outer),children:[r1]},A="mask-".concat(C||m3()),U="clip-".concat(C||m3()),i1={tag:"mask",attributes:y(y({},W6),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[G,k]},l1={tag:"defs",children:[{tag:"clipPath",attributes:{id:U},children:$h(g)},i1]};return f.push(l1,{tag:"rect",attributes:y({fill:"currentColor","clip-path":"url(#".concat(U,")"),mask:"url(#".concat(A,")")},W6)}),{children:f,attributes:m}}}},Fh={provides:function(t){var o=!1;r2.matchMedia&&(o=r2.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var f=[],m={fill:"currentColor"},z={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};f.push({tag:"path",attributes:y(y({},m),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var p=y(y({},z),{},{attributeName:"opacity"}),C={tag:"circle",attributes:y(y({},m),{},{cx:"256",cy:"364",r:"28"}),children:[]};return o||C.children.push({tag:"animate",attributes:y(y({},z),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:y(y({},p),{},{values:"1;0;1;1;0;1;"})}),f.push(C),f.push({tag:"path",attributes:y(y({},m),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:o?[]:[{tag:"animate",attributes:y(y({},p),{},{values:"1;0;0;0;0;1;"})}]}),o||f.push({tag:"path",attributes:y(y({},m),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:y(y({},p),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:f}}}},Dh={hooks:function(){return{parseNodeAttributes:function(o,f){var m=f.getAttribute("data-fa-symbol"),z=m===null?!1:m===""?!0:m;return o.symbol=z,o}}}},Eh=[Ff,Lh,xh,bh,wh,Ah,Ph,Bh,Th,Fh,Dh];Kf(Eh,{mixoutsTo:F1}),F1.noAuto;var Z5=F1.config,qh=F1.library;F1.dom;var p4=F1.parse;F1.findIconDefinition,F1.toHtml;var Rh=F1.icon;F1.layer;var Ih=F1.text;F1.counter;function j5(r,t){var o=Object.keys(r);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(r);t&&(f=f.filter(function(m){return Object.getOwnPropertyDescriptor(r,m).enumerable})),o.push.apply(o,f)}return o}function G1(r){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?j5(Object(o),!0).forEach(function(f){P1(r,f,o[f])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):j5(Object(o)).forEach(function(f){Object.defineProperty(r,f,Object.getOwnPropertyDescriptor(o,f))})}return r}function d4(r){"@babel/helpers - typeof";return d4=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d4(r)}function P1(r,t,o){return t=Yh(t),t in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function Oh(r,t){if(r==null)return{};var o={},f=Object.keys(r),m,z;for(z=0;z<f.length;z++)m=f[z],!(t.indexOf(m)>=0)&&(o[m]=r[m]);return o}function _h(r,t){if(r==null)return{};var o=Oh(r,t),f,m;if(Object.getOwnPropertySymbols){var z=Object.getOwnPropertySymbols(r);for(m=0;m<z.length;m++)f=z[m],!(t.indexOf(f)>=0)&&Object.prototype.propertyIsEnumerable.call(r,f)&&(o[f]=r[f])}return o}function G6(r){return Uh(r)||Wh(r)||Gh(r)||Zh()}function Uh(r){if(Array.isArray(r))return Z6(r)}function Wh(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function Gh(r,t){if(r){if(typeof r=="string")return Z6(r,t);var o=Object.prototype.toString.call(r).slice(8,-1);if(o==="Object"&&r.constructor&&(o=r.constructor.name),o==="Map"||o==="Set")return Array.from(r);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return Z6(r,t)}}function Z6(r,t){(t==null||t>r.length)&&(t=r.length);for(var o=0,f=new Array(t);o<t;o++)f[o]=r[o];return f}function Zh(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const gQ=typeof document<"u",LQ=()=>{},T4=Array.isArray;function Dn(r,t){return(r.aliasOf||r)===(t.aliasOf||t)}function xQ(r,t){if(Object.keys(r).length!==Object.keys(t).length)return!1;for(const o in r)if(!bQ(r[o],t[o]))return!1;return!0}function bQ(r,t){return T4(r)?En(r,t):T4(t)?En(t,r):r===t}function En(r,t){return T4(t)?r.length===t.length&&r.every((o,f)=>o===t[f]):r.length===1&&r[0]===t}var qn;(function(r){r.pop="pop",r.push="push"})(qn||(qn={}));var Rn;(function(r){r.back="back",r.forward="forward",r.unknown=""})(Rn||(Rn={})),Symbol(process.env.NODE_ENV!=="production"?"navigation failure":"");var In;(function(r){r[r.aborted=4]="aborted",r[r.cancelled=8]="cancelled",r[r.duplicated=16]="duplicated"})(In||(In={})),Symbol(process.env.NODE_ENV!=="production"?"router view location matched":""),Symbol(process.env.NODE_ENV!=="production"?"router view depth":"");const On=Symbol(process.env.NODE_ENV!=="production"?"router":""),wQ=Symbol(process.env.NODE_ENV!=="production"?"route location":"");Symbol(process.env.NODE_ENV!=="production"?"router view location":"");function _n(r){const t=V.inject(On),o=V.inject(wQ),f=V.computed(()=>t.resolve(V.unref(r.to))),m=V.computed(()=>{const{matched:M}=f.value,{length:b}=M,L=M[b-1],N=o.matched;if(!L||!N.length)return-1;const g=N.findIndex(Dn.bind(null,L));if(g>-1)return g;const E=Un(M[b-2]);return b>1&&Un(L)===E&&N[N.length-1].path!==E?N.findIndex(Dn.bind(null,M[b-2])):g}),z=V.computed(()=>m.value>-1&&SQ(o.params,f.value.params)),p=V.computed(()=>m.value>-1&&m.value===o.matched.length-1&&xQ(o.params,f.value.params));function C(M={}){return kQ(M)?t[V.unref(r.replace)?"replace":"push"](V.unref(r.to)).catch(LQ):Promise.resolve()}if(process.env.NODE_ENV!=="production"&&gQ){const M=V.getCurrentInstance();if(M){const b={route:f.value,isActive:z.value,isExactActive:p.value};M.__vrl_devtools=M.__vrl_devtools||[],M.__vrl_devtools.push(b),V.watchEffect(()=>{b.route=f.value,b.isActive=z.value,b.isExactActive=p.value},{flush:"post"})}}return{route:f,href:V.computed(()=>f.value.href),isActive:z,isExactActive:p,navigate:C}}const NQ=V.defineComponent({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:_n,setup(r,{slots:t}){const o=V.reactive(_n(r)),{options:f}=V.inject(On),m=V.computed(()=>({[Wn(r.activeClass,f.linkActiveClass,"router-link-active")]:o.isActive,[Wn(r.exactActiveClass,f.linkExactActiveClass,"router-link-exact-active")]:o.isExactActive}));return()=>{const z=t.default&&t.default(o);return r.custom?z:V.h("a",{"aria-current":o.isExactActive?r.ariaCurrentValue:null,href:o.href,onClick:o.navigate,class:m.value},z)}}});function kQ(r){if(!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)&&!r.defaultPrevented&&!(r.button!==void 0&&r.button!==0)){if(r.currentTarget&&r.currentTarget.getAttribute){const t=r.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return r.preventDefault&&r.preventDefault(),!0}}function SQ(r,t){for(const o in t){const f=t[o],m=r[o];if(typeof f=="string"){if(f!==m)return!1}else if(!T4(m)||m.length!==f.length||f.some((z,p)=>z!==m[p]))return!1}return!0}function Un(r){return r?r.aliasOf?r.aliasOf.path:r.path:""}const Wn=(r,t,o)=>r??t??o,yQ={__name:"Link",props:{url:{type:String,required:!0},label:{type:String,required:!0},active:{type:Boolean,default:!1}},setup(r){return(t,o)=>(V.openBlock(),V.createElementBlock("li",{class:V.normalizeClass({"uk-active":r.active})},[V.createVNode(V.unref(NQ),{to:r.url},{default:V.withCtx(()=>[V.createTextVNode(V.toDisplayString(r.label),1)]),_:1},8,["to"])],2))}},AQ={install:r=>{r.use(qK)}};A1.BaseLayout=cQ,A1.DashboardLayout=zQ,A1.NavbarDropdown=VQ,A1.NavbarItem=MQ,A1.NavbarLink=yQ,A1.TheNavbar=Z0,A1.TheSidebar=Fn,A1.default=AQ,Object.defineProperties(A1,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});