(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[58621],{93757:function(e,t,n){"use strict";n.d(t,{L8:function(){return c}});var r=n(898744),i=n(637442),o=n(157890),a=r.createContext(null),l=function(e){var t=r.useContext(a)||{id:null,isActive:null},n=null==t?void 0:t.isActive;return void 0!==e?e:!!n};function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c=function(e){var t=e.isActive,n=e.color,a=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["isActive","color"]),c=l(t);return r.createElement(i.Z,u({color:void 0!==n?n:c?o.EY.action.primary.strong.default:o.EY.icon.default},a))}},651498:function(e,t,n){"use strict";n.d(t,{kw:function(){return tp},ll:function(){return tv}});var r,i,o,a,l,u,c=n(898744),s=function(e){return void 0===e},f=function(e,t){return e===t||e!=e&&t!=t},d=function(e,t){for(var n=e.length;n--;)if(f(e[n][0],t))return n;return-1},p=Array.prototype.splice;function v(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}v.prototype.clear=function(){this.__data__=[],this.size=0},v.prototype.delete=function(e){var t=this.__data__,n=d(t,e);return!(n<0)&&(n==t.length-1?t.pop():p.call(t,n,1),--this.size,!0)},v.prototype.get=function(e){var t=this.__data__,n=d(t,e);return n<0?void 0:t[n][1]},v.prototype.has=function(e){return d(this.__data__,e)>-1},v.prototype.set=function(e,t){var n=this.__data__,r=d(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};var h="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function y(e,t){return e(t={exports:{}},t.exports),t.exports}var m="object"==typeof h&&h&&h.Object===Object&&h,b="object"==typeof self&&self&&self.Object===Object&&self,g=m||b||Function("return this")(),_=g.Symbol,j=Object.prototype,O=j.hasOwnProperty,S=j.toString,w=_?_.toStringTag:void 0,x=function(e){var t=O.call(e,w),n=e[w];try{e[w]=void 0;var r=!0}catch(e){}var i=S.call(e);return r&&(t?e[w]=n:delete e[w]),i},C=Object.prototype.toString,I=_?_.toStringTag:void 0,A=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":I&&I in Object(e)?x(e):C.call(e)},E=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},P=function(e){if(!E(e))return!1;var t=A(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},z=g["__core-js_shared__"],N=(r=/[^.]+$/.exec(z&&z.keys&&z.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"",T=Function.prototype.toString,k=function(e){if(null!=e){try{return T.call(e)}catch(e){}try{return e+""}catch(e){}}return""},F=/^\[object .+?Constructor\]$/,M=Object.prototype,$=Function.prototype.toString,B=M.hasOwnProperty,L=RegExp("^"+$.call(B).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),R=function(e,t){var n,r=null==e?void 0:e[t];return E(n=r)&&(!N||!(N in n))&&(P(n)?L:F).test(k(n))?r:void 0},X=R(g,"Map"),U=R(Object,"create"),D=Object.prototype.hasOwnProperty,V=Object.prototype.hasOwnProperty;function W(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}W.prototype.clear=function(){this.__data__=U?U(null):{},this.size=0},W.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},W.prototype.get=function(e){var t=this.__data__;if(U){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return D.call(t,e)?t[e]:void 0},W.prototype.has=function(e){var t=this.__data__;return U?void 0!==t[e]:V.call(t,e)},W.prototype.set=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=U&&void 0===t?"__lodash_hash_undefined__":t,this};var H=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e},q=function(e,t){var n=e.__data__;return H(t)?n["string"==typeof t?"string":"hash"]:n.map};function Q(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Y(e){var t=this.__data__=new v(e);this.size=t.size}function Z(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new Q;++t<n;)this.add(e[t])}Q.prototype.clear=function(){this.size=0,this.__data__={hash:new W,map:new(X||v),string:new W}},Q.prototype.delete=function(e){var t=q(this,e).delete(e);return this.size-=t?1:0,t},Q.prototype.get=function(e){return q(this,e).get(e)},Q.prototype.has=function(e){return q(this,e).has(e)},Q.prototype.set=function(e,t){var n=q(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},Y.prototype.clear=function(){this.__data__=new v,this.size=0},Y.prototype.delete=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},Y.prototype.get=function(e){return this.__data__.get(e)},Y.prototype.has=function(e){return this.__data__.has(e)},Y.prototype.set=function(e,t){var n=this.__data__;if(n instanceof v){var r=n.__data__;if(!X||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Q(r)}return n.set(e,t),this.size=n.size,this},Z.prototype.add=Z.prototype.push=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Z.prototype.has=function(e){return this.__data__.has(e)};var G=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1},J=function(e,t,n,r,i,o){var a=1&n,l=e.length,u=t.length;if(l!=u&&!(a&&u>l))return!1;var c=o.get(e);if(c&&o.get(t))return c==t;var s=-1,f=!0,d=2&n?new Z:void 0;for(o.set(e,t),o.set(t,e);++s<l;){var p=e[s],v=t[s];if(r)var h=a?r(v,p,s,t,e,o):r(p,v,s,e,t,o);if(void 0!==h){if(h)continue;f=!1;break}if(d){if(!G(t,function(e,t){if(!d.has(t)&&(p===e||i(p,e,n,r,o)))return d.push(t)})){f=!1;break}}else if(!(p===v||i(p,v,n,r,o))){f=!1;break}}return o.delete(e),o.delete(t),f},K=g.Uint8Array,ee=function(e){var t=-1,n=Array(e.size);return e.forEach(function(e,r){n[++t]=[r,e]}),n},et=function(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=e}),n},en=_?_.prototype:void 0,er=en?en.valueOf:void 0,ei=function(e,t,n,r,i,o,a){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)break;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":if(e.byteLength!=t.byteLength||!o(new K(e),new K(t)))break;return!0;case"[object Boolean]":case"[object Date]":case"[object Number]":return f(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var l=ee;case"[object Set]":var u=1&r;if(l||(l=et),e.size!=t.size&&!u)break;var c=a.get(e);if(c)return c==t;r|=2,a.set(e,t);var s=J(l(e),l(t),r,i,o,a);return a.delete(e),s;case"[object Symbol]":if(er)return er.call(e)==er.call(t)}return!1},eo=function(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e},ea=Array.isArray,el=function(e,t,n){var r=t(e);return ea(e)?r:eo(r,n(e))},eu=function(e,t){for(var n=-1,r=null==e?0:e.length,i=0,o=[];++n<r;){var a=e[n];t(a,n,e)&&(o[i++]=a)}return o},ec=Object.prototype.propertyIsEnumerable,es=Object.getOwnPropertySymbols,ef=es?function(e){return null==e?[]:eu(es(e=Object(e)),function(t){return ec.call(e,t)})}:function(){return[]},ed=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r},ep=function(e){return null!=e&&"object"==typeof e},ev=function(e){return ep(e)&&"[object Arguments]"==A(e)},eh=Object.prototype,ey=eh.hasOwnProperty,em=eh.propertyIsEnumerable,eb=ev(function(){return arguments}())?ev:function(e){return ep(e)&&ey.call(e,"callee")&&!em.call(e,"callee")},eg=function(){return!1},e_=y(function(e,t){var n=t&&!t.nodeType&&t,r=n&&e&&!e.nodeType&&e,i=r&&r.exports===n?g.Buffer:void 0,o=i?i.isBuffer:void 0;e.exports=o||eg}),ej=/^(?:0|[1-9]\d*)$/,eO=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&ej.test(e))&&e>-1&&e%1==0&&e<t},eS=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},ew={};ew["[object Float32Array]"]=ew["[object Float64Array]"]=ew["[object Int8Array]"]=ew["[object Int16Array]"]=ew["[object Int32Array]"]=ew["[object Uint8Array]"]=ew["[object Uint8ClampedArray]"]=ew["[object Uint16Array]"]=ew["[object Uint32Array]"]=!0,ew["[object Arguments]"]=ew["[object Array]"]=ew["[object ArrayBuffer]"]=ew["[object Boolean]"]=ew["[object DataView]"]=ew["[object Date]"]=ew["[object Error]"]=ew["[object Function]"]=ew["[object Map]"]=ew["[object Number]"]=ew["[object Object]"]=ew["[object RegExp]"]=ew["[object Set]"]=ew["[object String]"]=ew["[object WeakMap]"]=!1;var ex=y(function(e,t){var n=t&&!t.nodeType&&t,r=n&&e&&!e.nodeType&&e,i=r&&r.exports===n&&m.process,o=function(){try{var e=r&&r.require&&r.require("util").types;if(e)return e;return i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=o}),eC=ex&&ex.isTypedArray,eI=eC?function(e){return eC(e)}:function(e){return ep(e)&&eS(e.length)&&!!ew[A(e)]},eA=Object.prototype.hasOwnProperty,eE=function(e,t){var n=ea(e),r=!n&&eb(e),i=!n&&!r&&e_(e),o=!n&&!r&&!i&&eI(e),a=n||r||i||o,l=a?ed(e.length,String):[],u=l.length;for(var c in e)(t||eA.call(e,c))&&!(a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||eO(c,u)))&&l.push(c);return l},eP=Object.prototype,ez=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||eP)},eN=(i=Object.keys,o=Object,function(e){return i(o(e))}),eT=Object.prototype.hasOwnProperty,ek=function(e){if(!ez(e))return eN(e);var t=[];for(var n in Object(e))eT.call(e,n)&&"constructor"!=n&&t.push(n);return t},eF=function(e){return null!=e&&eS(e.length)&&!P(e)?eE(e):ek(e)},eM=function(e){return el(e,eF,ef)},e$=Object.prototype.hasOwnProperty,eB=function(e,t,n,r,i,o){var a=1&n,l=eM(e),u=l.length;if(u!=eM(t).length&&!a)return!1;for(var c=u;c--;){var s=l[c];if(!(a?s in t:e$.call(t,s)))return!1}var f=o.get(e);if(f&&o.get(t))return f==t;var d=!0;o.set(e,t),o.set(t,e);for(var p=a;++c<u;){var v=e[s=l[c]],h=t[s];if(r)var y=a?r(h,v,s,t,e,o):r(v,h,s,e,t,o);if(!(void 0===y?v===h||i(v,h,n,r,o):y)){d=!1;break}p||(p="constructor"==s)}if(d&&!p){var m=e.constructor,b=t.constructor;m!=b&&"constructor"in e&&"constructor"in t&&!("function"==typeof m&&m instanceof m&&"function"==typeof b&&b instanceof b)&&(d=!1)}return o.delete(e),o.delete(t),d},eL=R(g,"DataView"),eR=R(g,"Promise"),eX=R(g,"Set"),eU=R(g,"WeakMap"),eD="[object Map]",eV="[object Promise]",eW="[object Set]",eH="[object WeakMap]",eq="[object DataView]",eQ=k(eL),eY=k(X),eZ=k(eR),eG=k(eX),eJ=k(eU),eK=A;(eL&&eK(new eL(new ArrayBuffer(1)))!=eq||X&&eK(new X)!=eD||eR&&eK(eR.resolve())!=eV||eX&&eK(new eX)!=eW||eU&&eK(new eU)!=eH)&&(eK=function(e){var t=A(e),n="[object Object]"==t?e.constructor:void 0,r=n?k(n):"";if(r)switch(r){case eQ:return eq;case eY:return eD;case eZ:return eV;case eG:return eW;case eJ:return eH}return t});var e0=eK,e1="[object Arguments]",e8="[object Array]",e4="[object Object]",e3=Object.prototype.hasOwnProperty,e9=function(e,t,n,r,i,o){var a=ea(e),l=ea(t),u=a?e8:e0(e),c=l?e8:e0(t);u=u==e1?e4:u,c=c==e1?e4:c;var s=u==e4,f=c==e4,d=u==c;if(d&&e_(e)){if(!e_(t))return!1;a=!0,s=!1}if(d&&!s)return o||(o=new Y),a||eI(e)?J(e,t,n,r,i,o):ei(e,t,u,n,r,i,o);if(!(1&n)){var p=s&&e3.call(e,"__wrapped__"),v=f&&e3.call(t,"__wrapped__");if(p||v){var h=p?e.value():e,y=v?t.value():t;return o||(o=new Y),i(h,y,n,r,o)}}return!!d&&(o||(o=new Y),eB(e,t,n,r,i,o))},e5=function(e,t){void 0===t&&(t={});var n=t.prop,r=t.defaultProp,i=(0,c.useState)(s(r)?e:r),o=i[0],a=i[1];return[o,a,function(e){s(n)&&a(e)},function(){s(n)||function e(t,n,r,i,o){return t===n||(null!=t&&null!=n&&(ep(t)||ep(n))?e9(t,n,r,i,e,o):t!=t&&n!=n)}(n,o)||a(n)}]},e2=function(){return(e2=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},e7=function(e,t,n,r){void 0===r&&(r=!1);var i=t[e];if(!s(i))return i;if(r){var o=t["default"+(e[0].toUpperCase()+e.slice(1))];if(!s(o))return o;if(n){var a=n[e];if(!s(a))return a}}return"checked"!==e&&("value"===e?t.multiple?[]:"":void 0)};(function(e,t){void 0===t&&(t={});var n=t.getInitialAutoControlledState,r=t.getAutoControlledStateFromProps;this.autoControlledProps=e,this.getDerivedStateFromProps=function(t,n){var i=e.reduce(function(e,n){return s(t[n])||(e[n]=t[n]),e},{});if(P(r)){var o=r(t,e2({},n,i));return e2({},i,o)}return i},this.getInitialAutoControlledStateFromProps=function(t){var r=P(n)?n(t):{},i=e.reduce(function(e,n){return e[n]=e7(n,t,r,!0),e},{});return e2({},r,i)},Object.freeze(this)}).prototype.trySetState=function(e,t){var n=this,r=Object.keys(e).reduce(function(t,r){return s(n.props[r])&&(t[r]=e[r]),t},{});0!==Object.keys(r).length&&this.setState(r,t)};var e6=n(783889),te=n(506044),tt=n(332548),tn=n(488455);function tr(){return(tr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ti(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,i=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=i){var o=[],a=!0,l=!1;try{for(i=i.call(e);!(a=(n=i.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(e){l=!0,r=e}finally{try{a||null==i.return||i.return()}finally{if(l)throw r}}return o}}(e,t)||to(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function to(e,t){if(e){if("string"==typeof e)return ta(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ta(e,t)}}function ta(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var tl=(0,tn.default)("nav").withConfig({displayName:"SideNav__StyledNav",componentId:"sc-1pjpnux-0"})(["width:",";max-width:",";height:100%;display:flex;flex-direction:column;align-items:stretch;justify-content:stretch;",""],function(e){return e.$isSideNavCollapsed?"80px":e.$shouldFillContainer?"100%":"string"==typeof e.$width?e.$width:"".concat(e.$width,"px")},function(e){return e.$shouldFillContainer?"100%":"none"},e6.Media.Mobile(u||(a=["\n    width: 100%;\n    max-width: 100%;\n  "],l||(l=a.slice(0)),u=Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(l)}}))))),tu=(0,e6.withTheming)(tn.default.div.withConfig({displayName:"SideNav__StyledLogo",componentId:"sc-1pjpnux-1"})(["flex:0 0 auto;padding-left:","px;padding-right:","px;"],function(e){return e.theme.Spacing.XSmall},function(e){return e.theme.Spacing.XSmall})),tc=(0,e6.withTheming)(tn.default.div.withConfig({displayName:"SideNav__StyledLeading",componentId:"sc-1pjpnux-2"})(["flex:0 0 auto;padding-left:","px;padding-right:","px;"],function(e){return e.theme.Spacing.XSmall},function(e){return e.theme.Spacing.XSmall})),ts=(0,e6.withTheming)((0,tn.default)("div").withConfig({displayName:"SideNav__StyledMotionBody",componentId:"sc-1pjpnux-3"})(["flex:1 1 auto;overflow-y:auto;padding:","px;"],function(e){return e.theme.Spacing.XSmall})),tf=(0,e6.withTheming)(tn.default.div.withConfig({displayName:"SideNav__StyledTrailing",componentId:"sc-1pjpnux-4"})(["position:relative;flex:0 0 auto;padding-left:","px;padding-right:","px;"],function(e){return e.theme.Spacing.XSmall},function(e){return e.theme.Spacing.XSmall})),td=c.createContext(null),tp=c.forwardRef(function(e,t){var n=e.logo,r=e.leading,i=e.trailing,o=e.label,a=e.id,l=e.initialActiveItem,u=e.activeItem,s=e.onActiveItemChange,f=e.children,d=e.initialExpandedItems,p=e.expandedItems,v=e.onExpandCollapseChange,h=e.allowMultipleExpandedItems,y=e.width,m=e.shouldFillContainer,b=e.isSideNavCollapsed,g=void 0!==b&&b,_=e.size,j=void 0===_?tt.O.medium:_,O=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["logo","leading","trailing","label","id","initialActiveItem","activeItem","onActiveItemChange","children","initialExpandedItems","expandedItems","onExpandCollapseChange","allowMultipleExpandedItems","width","shouldFillContainer","isSideNavCollapsed","size"]),S=c.useRef(0),w=c.useCallback(function(){return S.current=S.current+1,S.current},[]),x=ti(e5(null,{prop:u,defaultProp:l}),4),C=x[0],I=x[2];(0,x[3])();var A=!!Array.isArray(p)||void 0!==h&&h,E=ti(e5(null,{prop:p,defaultProp:d}),4),P=E[0],z=E[2];(0,E[3])();var N=function(e){return null===e?[]:"string"==typeof e?[e]:function(e){if(Array.isArray(e))return ta(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||to(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()},T=(0,te.M)(),k=a||"prism-side-nav-".concat(T),F=k+"-label";return c.createElement(td.Provider,{value:{id:k,activeItem:C,updateActiveItem:function(e,t){"function"==typeof s&&s(e,{previousActiveItem:C||null,activeItem:e,event:t}),I(e)},activeItemProps:{"aria-current":!0},registerCell:w,expandedItems:P,updateExpandedItems:function(e,t){var n;if(A){if(null===e)n=e;else{var r=N(P);N(e).forEach(function(e){var t=r.indexOf(e);t>-1?r=r.slice(0,t).concat(r.slice(t+1)):r.push(e)}),n=r}}else n=e===P?"":e;"function"==typeof v&&v(n,{expandedItems:n,previousExpandedItems:P||null,event:t}),z(n)},allowMultipleExpandedItems:A,isSideNavCollapsed:g,size:j}},c.createElement(tl,tr({ref:t,id:k,"aria-labelledby":F,$shouldFillContainer:void 0!==m&&m,$width:void 0===y?256:y,$isSideNavCollapsed:g},O),c.createElement(e6.VisuallyHiddenText,{id:F},o),n?c.createElement(tu,null,n):void 0,r?c.createElement(tc,null,r):void 0,c.createElement(ts,{layoutScroll:!0},f),i?c.createElement(tf,null,i):void 0))}),tv=function(){return c.useContext(td)||{id:null,activeItem:null,updateActiveItem:null,activeItemProps:{},registerCell:null,expandedItems:null,updateExpandedItems:null,isSideNavCollapsed:!1,size:tt.O.medium}}},724363:function(e,t,n){"use strict";n.d(t,{P:function(){return l}});var r=n(898744),i=n(488455),o=n(783889),a=(0,o.withTheming)((0,i.default)(o.Text).withConfig({displayName:"SideNavCellBadge__StyledBadge",componentId:"sc-rz0053-0"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;border-radius:","px;width:","px;height:","px;background:",";color:",";"],function(e){return e.theme.BorderRadius.Large},function(e){return e.theme.Spacing.Medium},function(e){return e.theme.Spacing.Medium},function(e){return e.theme.Colors.TextAccentedPrimary},function(e){return e.theme.Colors.TagHighlightEmphasisForeground})),l=function(e){var t=e.count;return r.createElement(a,{styles:o.TextStyle.TagSmallLabel},t)}},367613:function(e,t,n){"use strict";n.d(t,{io:function(){return g},tQ:function(){return h}});var r=n(898744),i=n(783889),o=n(332548),a=n(488455),l=n(651498),u=n(357893),c=n(669398);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var f=a.default.span.withConfig({displayName:"SideNavCellFrame__IconSlot",componentId:"sc-155vpg2-0"})(["width:","px;display:flex;justify-content:center;align-items:center;"],i.IconSize.Medium),d=a.default.span.withConfig({displayName:"SideNavCellFrame__PrimarySlot",componentId:"sc-155vpg2-1"})(["overflow:hidden;"]),p=function(e){var t=e.isActive,n=e.theme,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Default";return t?n.Colors.ButtonSecondaryBackground:n.Colors["ListCellContainerBackground".concat(r)]},v=(0,i.withTheming)(a.default.button.withConfig({displayName:"SideNavCellFrame__FrameElement",componentId:"sc-155vpg2-2"})(["border:0;border-radius:","px;background:",";display:block;text-decoration:none;padding:0;text-align:left;width:100%;max-width:100%;font-size:","px;line-height:1;",""],function(e){return e.theme.BorderRadius.Medium},function(e){return p(e)},i.TextSize[500],function(e){return e.isInteractive&&(0,a.css)(["cursor:pointer;"," &:hover{background:",";}&:active{background:",";}"],(0,i.getFocusStyles)(),function(e){return p(e,"Hovered")},function(e){return p(e,"Pressed")})})),h=function(e){var t,n=e.isCondensed,r=e.sideNavSize,i=e.theme;return t=n?r===o.O.medium?"None":"XxxSmall":r===o.O.medium?"XxxSmall":"XxSmall","".concat(i.Spacing[t],"px ").concat(i.Spacing.Small,"px;")},y=(0,i.withTheming)((0,a.default)(i.InlineChildren).withConfig({displayName:"SideNavCellFrame__Flex",componentId:"sc-155vpg2-3"})(["padding:",";width:100%;min-height:","px;max-width:100%;flex-wrap:nowrap;> span{flex:0 0 auto;}"],h,function(e){var t=e.isCondensed,n=e.sideNavSize,r=e.theme;return t?n===o.O.medium?36:40:n===o.O.medium?40:r.Spacing.XxLarge})),m=(0,a.default)("div").withConfig({displayName:"SideNavCellFrame__StyledWrapper",componentId:"sc-155vpg2-4"})(["display:flex;white-space:nowrap;flex:1 1 auto;align-items:center;overflow:hidden;opacity:",";> * + *{margin-left:","px;}> span{flex:0 0 auto;}","{flex:1 1 auto;}"],function(e){return e.$isSideNavCollapsed?0:1},i.InlineChildrenSize.XSmall,d),b=function(e){var t=e.alignment,n=e.size,o=e.isCondensed,a=e.icon,l=e.label,u=e.description,c=e.tag,s=e.badge,p=e.chevron,v=e.isSideNavCollapsed;return r.createElement(y,{size:i.InlineChildrenSize.XSmall,alignItems:t,sideNavSize:n,isCondensed:o},r.createElement(f,null,a),r.createElement(m,{$isSideNavCollapsed:v},l||u?r.createElement(d,null,r.createElement("span",null,l),r.createElement("span",null,u)):void 0,c?r.createElement("span",null,c):void 0,s?r.createElement("span",null,s):void 0,p?r.createElement("span",null,p):void 0))},g=r.forwardRef(function(e,t){var n=e.icon,o=e.label,a=e.description,f=e.badge,d=e.tag,p=e.chevron,h=e.isActive,y=e.isCondensed,m=e.size,g=e.id,_=e.onClick,j=e.alignment,O=void 0===j?i.InlineChildrenAlignment.Center:j,S=e.as,w=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["icon","label","description","badge","tag","chevron","isActive","isCondensed","size","id","onClick","alignment","as"]),x=(0,u.Ry)(),C=(0,l.ll)(),I=C.size,A=C.updateActiveItem,E=C.activeItemProps,P=C.isSideNavCollapsed,z=null==x?void 0:x.id,N=(0,c.C)(h);return r.createElement(v,s({as:S||"button",ref:t,isActive:!!N,id:g,isInteractive:!0,onClick:function(e){null!==_&&"function"==typeof _&&_(e),"function"==typeof A&&z&&A(z,e)}},N&&E?E:{},w),r.createElement(b,{alignment:O,size:m||I,isCondensed:y,icon:n,label:o,description:a,tag:d,badge:f,chevron:p,isSideNavCollapsed:!!P}))})},256266:function(e,t,n){"use strict";n.d(t,{L8:function(){return l}});var r=n(898744),i=n(783889),o=n(669398);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=function(e){var t=e.isActive,n=e.color,l=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["isActive","color"]),u=(0,o.C)(t),c=r.useContext(i.ThemingContext);return r.createElement(i.Icon,a({color:void 0!==n?n:u?c.Colors.ButtonSecondaryForeground:c.Colors.TextPrimary},l))}},31387:function(e,t,n){"use strict";n.d(t,{C:function(){return s}});var r=n(898744),i=n(783889),o=n(488455),a=n(669398);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=(0,o.default)(i.Text).withConfig({displayName:"SideNavCellLabels__StyledText",componentId:"sc-1m4u4b3-0"})(["&::after{content:'","';display:block;height:0;visibility:hidden;overflow:hidden;user-select:none;pointer-events:none;font-weight:",";}"],function(e){return e.children},i.TextWeight.Bold),c=function(e){var t=e.children,n=e.isActive,o=e.type,c=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["children","isActive","type"]),s=(0,a.C)(n),f=i.TextColor.TextPrimary,d=i.TextColor.TextTertiary;return r.createElement(u,l({color:s?i.TextColor.ButtonSecondaryForeground:"parent"===o?f:d,styles:i.TextStyle[s?"Body2Emphasis":"Body2"],overflow:i.TextOverflow.Truncate},c),t)},s=function(e){var t=l({},e);return r.createElement(c,l({},t,{type:"parent"}))}},396748:function(e,t,n){"use strict";n.d(t,{lI:function(){return a}});var r=n(898744),i=n(875882);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var a=function(e){var t=e.type,n=void 0===t?i.Qy.HighlightEmphasis:t,a=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["type"]);return r.createElement(i.ZP,o({type:n},a))}},357893:function(e,t,n){"use strict";n.d(t,{Ry:function(){return c},yc:function(){return u}});var r=n(898744),i=n(669398);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var l=r.createContext(null),u=r.forwardRef(function(e,t){var n,u=e.children,c=e.id,s=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["children","id"]),f=function(e){if(Array.isArray(e))return e}(n=(0,i.A)(c))||function(e,t){var n,r,i=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=i){var o=[],a=!0,l=!1;try{for(i=i.call(e);!(a=(n=i.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(e){l=!0,r=e}finally{try{a||null==i.return||i.return()}finally{if(l)throw r}}return o}}(n,2)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}}(n,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),d=f[0],p=f[1];return r.createElement(l.Provider,{value:{id:d,isActive:p}},r.createElement("li",o({ref:t,className:"prism-side-nav-item",id:d},s),u))}),c=function(){return r.useContext(l)||{id:null,isActive:null}}},332548:function(e,t,n){"use strict";var r,i;n.d(t,{O:function(){return r}}),(i=r||(r={})).medium="Medium",i.large="Large"},669398:function(e,t,n){"use strict";n.d(t,{A:function(){return l},C:function(){return a}});var r=n(898744),i=n(651498),o=n(357893),a=function(e){var t=(0,o.Ry)(),n=null==t?void 0:t.isActive;return void 0!==e?e:!!n},l=function(e){var t=(0,i.ll)(),n=null==t?void 0:t.id,o=null==t?void 0:t.registerCell,a=r.useRef(null);null===a.current&&o&&(a.current=o());var l=e||(n?"".concat(n,"-item-").concat(a.current):""),u=t?t.activeItem:null;return[l,!!u&&u===l]}},506044:function(e,t,n){"use strict";n.d(t,{M:function(){return s}});var r,i=n(898744),o=n(157483);function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var l=!1,u=0,c=(r||(r=n.t(i,2)))["useId".toString()];function s(e){if(void 0!==c){var t,n,r=c();return null!=e?e:r}var s=null!=e?e:l?++u:null,f=function(e){if(Array.isArray(e))return e}(t=i.useState(s))||function(e,t){var n,r,i=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=i){var o=[],a=!0,l=!1;try{for(i=i.call(e);!(a=(n=i.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(e){l=!0,r=e}finally{try{a||null==i.return||i.return()}finally{if(l)throw r}}return o}}(t,2)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),d=f[0],p=f[1];return(0,o.L)(function(){null===d&&p(++u)},[]),i.useEffect(function(){!1===l&&(l=!0)},[]),null!==(n=null!=e?e:d)&&void 0!==n?n:void 0}},753716:function(e,t,n){var r=n(15672)(function(e,t,n){e[n?0:1].push(t)},function(){return[[],[]]});e.exports=r},433869:function(e,t,n){var r=n(757655);e.exports=function(e,t){return t="function"==typeof t?t:void 0,e&&e.length?r(e,void 0,t):[]}}}]);