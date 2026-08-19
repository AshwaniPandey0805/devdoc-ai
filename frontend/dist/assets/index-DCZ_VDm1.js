function $v(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Bv(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var lh={exports:{}},ta={},uh={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qi=Symbol.for("react.element"),Hv=Symbol.for("react.portal"),Vv=Symbol.for("react.fragment"),Wv=Symbol.for("react.strict_mode"),Kv=Symbol.for("react.profiler"),qv=Symbol.for("react.provider"),Gv=Symbol.for("react.context"),Jv=Symbol.for("react.forward_ref"),Qv=Symbol.for("react.suspense"),Xv=Symbol.for("react.memo"),Yv=Symbol.for("react.lazy"),Of=Symbol.iterator;function Zv(e){return e===null||typeof e!="object"?null:(e=Of&&e[Of]||e["@@iterator"],typeof e=="function"?e:null)}var ch={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fh=Object.assign,dh={};function jr(e,t,n){this.props=e,this.context=t,this.refs=dh,this.updater=n||ch}jr.prototype.isReactComponent={};jr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};jr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ph(){}ph.prototype=jr.prototype;function Xu(e,t,n){this.props=e,this.context=t,this.refs=dh,this.updater=n||ch}var Yu=Xu.prototype=new ph;Yu.constructor=Xu;fh(Yu,jr.prototype);Yu.isPureReactComponent=!0;var Nf=Array.isArray,hh=Object.prototype.hasOwnProperty,Zu={current:null},mh={key:!0,ref:!0,__self:!0,__source:!0};function gh(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)hh.call(t,r)&&!mh.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:qi,type:e,key:o,ref:s,props:i,_owner:Zu.current}}function e0(e,t){return{$$typeof:qi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ec(e){return typeof e=="object"&&e!==null&&e.$$typeof===qi}function t0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Af=/\/+/g;function La(e,t){return typeof e=="object"&&e!==null&&e.key!=null?t0(""+e.key):t.toString(36)}function jo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case qi:case Hv:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+La(s,0):r,Nf(i)?(n="",e!=null&&(n=e.replace(Af,"$&/")+"/"),jo(i,t,n,"",function(u){return u})):i!=null&&(ec(i)&&(i=e0(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Af,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Nf(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+La(o,a);s+=jo(o,t,n,l,i)}else if(l=Zv(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+La(o,a++),s+=jo(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function go(e,t,n){if(e==null)return e;var r=[],i=0;return jo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function n0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Re={current:null},Fo={transition:null},r0={ReactCurrentDispatcher:Re,ReactCurrentBatchConfig:Fo,ReactCurrentOwner:Zu};function yh(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:go,forEach:function(e,t,n){go(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return go(e,function(){t++}),t},toArray:function(e){return go(e,function(t){return t})||[]},only:function(e){if(!ec(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=jr;F.Fragment=Vv;F.Profiler=Kv;F.PureComponent=Xu;F.StrictMode=Wv;F.Suspense=Qv;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=r0;F.act=yh;F.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=fh({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Zu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)hh.call(t,l)&&!mh.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:qi,type:e.type,key:i,ref:o,props:r,_owner:s}};F.createContext=function(e){return e={$$typeof:Gv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:qv,_context:e},e.Consumer=e};F.createElement=gh;F.createFactory=function(e){var t=gh.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:Jv,render:e}};F.isValidElement=ec;F.lazy=function(e){return{$$typeof:Yv,_payload:{_status:-1,_result:e},_init:n0}};F.memo=function(e,t){return{$$typeof:Xv,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=Fo.transition;Fo.transition={};try{e()}finally{Fo.transition=t}};F.unstable_act=yh;F.useCallback=function(e,t){return Re.current.useCallback(e,t)};F.useContext=function(e){return Re.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return Re.current.useDeferredValue(e)};F.useEffect=function(e,t){return Re.current.useEffect(e,t)};F.useId=function(){return Re.current.useId()};F.useImperativeHandle=function(e,t,n){return Re.current.useImperativeHandle(e,t,n)};F.useInsertionEffect=function(e,t){return Re.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return Re.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return Re.current.useMemo(e,t)};F.useReducer=function(e,t,n){return Re.current.useReducer(e,t,n)};F.useRef=function(e){return Re.current.useRef(e)};F.useState=function(e){return Re.current.useState(e)};F.useSyncExternalStore=function(e,t,n){return Re.current.useSyncExternalStore(e,t,n)};F.useTransition=function(){return Re.current.useTransition()};F.version="18.3.1";uh.exports=F;var x=uh.exports;const B=Bv(x),i0=$v({__proto__:null,default:B},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o0=x,s0=Symbol.for("react.element"),a0=Symbol.for("react.fragment"),l0=Object.prototype.hasOwnProperty,u0=o0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c0={key:!0,ref:!0,__self:!0,__source:!0};function vh(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)l0.call(t,r)&&!c0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:s0,type:e,key:o,ref:s,props:i,_owner:u0.current}}ta.Fragment=a0;ta.jsx=vh;ta.jsxs=vh;lh.exports=ta;var C=lh.exports,bl={},_h={exports:{}},We={},wh={exports:{}},Sh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,M){var D=R.length;R.push(M);e:for(;0<D;){var j=D-1>>>1,q=R[j];if(0<i(q,M))R[j]=M,R[D]=q,D=j;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var M=R[0],D=R.pop();if(D!==M){R[0]=D;e:for(var j=0,q=R.length,rt=q>>>1;j<rt;){var je=2*(j+1)-1,Yn=R[je],z=je+1,fe=R[z];if(0>i(Yn,D))z<q&&0>i(fe,Yn)?(R[j]=fe,R[z]=D,j=z):(R[j]=Yn,R[je]=D,j=je);else if(z<q&&0>i(fe,D))R[j]=fe,R[z]=D,j=z;else break e}}return M}function i(R,M){var D=R.sortIndex-M.sortIndex;return D!==0?D:R.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,f=null,m=3,y=!1,w=!1,_=!1,S=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(R){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=R)r(u),M.sortIndex=M.expirationTime,t(l,M);else break;M=n(u)}}function g(R){if(_=!1,h(R),!w)if(n(l)!==null)w=!0,qe(E);else{var M=n(u);M!==null&&nt(g,M.startTime-R)}}function E(R,M){w=!1,_&&(_=!1,d(P),P=-1),y=!0;var D=m;try{for(h(M),f=n(l);f!==null&&(!(f.expirationTime>M)||R&&!V());){var j=f.callback;if(typeof j=="function"){f.callback=null,m=f.priorityLevel;var q=j(f.expirationTime<=M);M=e.unstable_now(),typeof q=="function"?f.callback=q:f===n(l)&&r(l),h(M)}else r(l);f=n(l)}if(f!==null)var rt=!0;else{var je=n(u);je!==null&&nt(g,je.startTime-M),rt=!1}return rt}finally{f=null,m=D,y=!1}}var T=!1,k=null,P=-1,N=5,A=-1;function V(){return!(e.unstable_now()-A<N)}function ce(){if(k!==null){var R=e.unstable_now();A=R;var M=!0;try{M=k(!0,R)}finally{M?ye():(T=!1,k=null)}}else T=!1}var ye;if(typeof p=="function")ye=function(){p(ce)};else if(typeof MessageChannel<"u"){var ke=new MessageChannel,Et=ke.port2;ke.port1.onmessage=ce,ye=function(){Et.postMessage(null)}}else ye=function(){S(ce,0)};function qe(R){k=R,T||(T=!0,ye())}function nt(R,M){P=S(function(){R(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,qe(E))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(R){switch(m){case 1:case 2:case 3:var M=3;break;default:M=m}var D=m;m=M;try{return R()}finally{m=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,M){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var D=m;m=R;try{return M()}finally{m=D}},e.unstable_scheduleCallback=function(R,M,D){var j=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?j+D:j):D=j,R){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=D+q,R={id:c++,callback:M,priorityLevel:R,startTime:D,expirationTime:q,sortIndex:-1},D>j?(R.sortIndex=D,t(u,R),n(l)===null&&R===n(u)&&(_?(d(P),P=-1):_=!0,nt(g,D-j))):(R.sortIndex=q,t(l,R),w||y||(w=!0,qe(E))),R},e.unstable_shouldYield=V,e.unstable_wrapCallback=function(R){var M=m;return function(){var D=m;m=M;try{return R.apply(this,arguments)}finally{m=D}}}})(Sh);wh.exports=Sh;var f0=wh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d0=x,Ve=f0;function I(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Eh=new Set,wi={};function Qn(e,t){Cr(e,t),Cr(e+"Capture",t)}function Cr(e,t){for(wi[e]=t,e=0;e<t.length;e++)Eh.add(t[e])}var Ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rl=Object.prototype.hasOwnProperty,p0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Df={},Lf={};function h0(e){return Rl.call(Lf,e)?!0:Rl.call(Df,e)?!1:p0.test(e)?Lf[e]=!0:(Df[e]=!0,!1)}function m0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function g0(e,t,n,r){if(t===null||typeof t>"u"||m0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Oe(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ge[e]=new Oe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ge[t]=new Oe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ge[e]=new Oe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ge[e]=new Oe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ge[e]=new Oe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ge[e]=new Oe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ge[e]=new Oe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ge[e]=new Oe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ge[e]=new Oe(e,5,!1,e.toLowerCase(),null,!1,!1)});var tc=/[\-:]([a-z])/g;function nc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(tc,nc);ge[t]=new Oe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(tc,nc);ge[t]=new Oe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(tc,nc);ge[t]=new Oe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ge[e]=new Oe(e,1,!1,e.toLowerCase(),null,!1,!1)});ge.xlinkHref=new Oe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ge[e]=new Oe(e,1,!1,e.toLowerCase(),null,!0,!0)});function rc(e,t,n,r){var i=ge.hasOwnProperty(t)?ge[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(g0(t,n,i,r)&&(n=null),r||i===null?h0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Wt=d0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yo=Symbol.for("react.element"),rr=Symbol.for("react.portal"),ir=Symbol.for("react.fragment"),ic=Symbol.for("react.strict_mode"),Ol=Symbol.for("react.profiler"),Th=Symbol.for("react.provider"),xh=Symbol.for("react.context"),oc=Symbol.for("react.forward_ref"),Nl=Symbol.for("react.suspense"),Al=Symbol.for("react.suspense_list"),sc=Symbol.for("react.memo"),Qt=Symbol.for("react.lazy"),kh=Symbol.for("react.offscreen"),Mf=Symbol.iterator;function Qr(e){return e===null||typeof e!="object"?null:(e=Mf&&e[Mf]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Object.assign,Ma;function oi(e){if(Ma===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ma=t&&t[1]||""}return`
`+Ma+e}var Ua=!1;function ja(e,t){if(!e||Ua)return"";Ua=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Ua=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?oi(e):""}function y0(e){switch(e.tag){case 5:return oi(e.type);case 16:return oi("Lazy");case 13:return oi("Suspense");case 19:return oi("SuspenseList");case 0:case 2:case 15:return e=ja(e.type,!1),e;case 11:return e=ja(e.type.render,!1),e;case 1:return e=ja(e.type,!0),e;default:return""}}function Dl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ir:return"Fragment";case rr:return"Portal";case Ol:return"Profiler";case ic:return"StrictMode";case Nl:return"Suspense";case Al:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case xh:return(e.displayName||"Context")+".Consumer";case Th:return(e._context.displayName||"Context")+".Provider";case oc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case sc:return t=e.displayName||null,t!==null?t:Dl(e.type)||"Memo";case Qt:t=e._payload,e=e._init;try{return Dl(e(t))}catch{}}return null}function v0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Dl(t);case 8:return t===ic?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function yn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ch(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _0(e){var t=Ch(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function vo(e){e._valueTracker||(e._valueTracker=_0(e))}function Ph(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ch(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function cs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ll(e,t){var n=t.checked;return ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Uf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=yn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ih(e,t){t=t.checked,t!=null&&rc(e,"checked",t,!1)}function Ml(e,t){Ih(e,t);var n=yn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ul(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ul(e,t.type,yn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function jf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ul(e,t,n){(t!=="number"||cs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var si=Array.isArray;function gr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+yn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function jl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(I(91));return ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ff(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(I(92));if(si(n)){if(1<n.length)throw Error(I(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:yn(n)}}function bh(e,t){var n=yn(t.value),r=yn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function zf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Rh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Rh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var _o,Oh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(_o=_o||document.createElement("div"),_o.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=_o.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Si(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ci={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},w0=["Webkit","ms","Moz","O"];Object.keys(ci).forEach(function(e){w0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ci[t]=ci[e]})});function Nh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ci.hasOwnProperty(e)&&ci[e]?(""+t).trim():t+"px"}function Ah(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Nh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var S0=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zl(e,t){if(t){if(S0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(I(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(I(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(I(61))}if(t.style!=null&&typeof t.style!="object")throw Error(I(62))}}function $l(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bl=null;function ac(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hl=null,yr=null,vr=null;function $f(e){if(e=Qi(e)){if(typeof Hl!="function")throw Error(I(280));var t=e.stateNode;t&&(t=sa(t),Hl(e.stateNode,e.type,t))}}function Dh(e){yr?vr?vr.push(e):vr=[e]:yr=e}function Lh(){if(yr){var e=yr,t=vr;if(vr=yr=null,$f(e),t)for(e=0;e<t.length;e++)$f(t[e])}}function Mh(e,t){return e(t)}function Uh(){}var Fa=!1;function jh(e,t,n){if(Fa)return e(t,n);Fa=!0;try{return Mh(e,t,n)}finally{Fa=!1,(yr!==null||vr!==null)&&(Uh(),Lh())}}function Ei(e,t){var n=e.stateNode;if(n===null)return null;var r=sa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(I(231,t,typeof n));return n}var Vl=!1;if(Ut)try{var Xr={};Object.defineProperty(Xr,"passive",{get:function(){Vl=!0}}),window.addEventListener("test",Xr,Xr),window.removeEventListener("test",Xr,Xr)}catch{Vl=!1}function E0(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var fi=!1,fs=null,ds=!1,Wl=null,T0={onError:function(e){fi=!0,fs=e}};function x0(e,t,n,r,i,o,s,a,l){fi=!1,fs=null,E0.apply(T0,arguments)}function k0(e,t,n,r,i,o,s,a,l){if(x0.apply(this,arguments),fi){if(fi){var u=fs;fi=!1,fs=null}else throw Error(I(198));ds||(ds=!0,Wl=u)}}function Xn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Fh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Bf(e){if(Xn(e)!==e)throw Error(I(188))}function C0(e){var t=e.alternate;if(!t){if(t=Xn(e),t===null)throw Error(I(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Bf(i),e;if(o===r)return Bf(i),t;o=o.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?e:t}function zh(e){return e=C0(e),e!==null?$h(e):null}function $h(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=$h(e);if(t!==null)return t;e=e.sibling}return null}var Bh=Ve.unstable_scheduleCallback,Hf=Ve.unstable_cancelCallback,P0=Ve.unstable_shouldYield,I0=Ve.unstable_requestPaint,ne=Ve.unstable_now,b0=Ve.unstable_getCurrentPriorityLevel,lc=Ve.unstable_ImmediatePriority,Hh=Ve.unstable_UserBlockingPriority,ps=Ve.unstable_NormalPriority,R0=Ve.unstable_LowPriority,Vh=Ve.unstable_IdlePriority,na=null,vt=null;function O0(e){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(na,e,void 0,(e.current.flags&128)===128)}catch{}}var ct=Math.clz32?Math.clz32:D0,N0=Math.log,A0=Math.LN2;function D0(e){return e>>>=0,e===0?32:31-(N0(e)/A0|0)|0}var wo=64,So=4194304;function ai(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function hs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=ai(a):(o&=s,o!==0&&(r=ai(o)))}else s=n&~i,s!==0?r=ai(s):o!==0&&(r=ai(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ct(t),i=1<<n,r|=e[n],t&=~i;return r}function L0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function M0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-ct(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=L0(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Kl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Wh(){var e=wo;return wo<<=1,!(wo&4194240)&&(wo=64),e}function za(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Gi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ct(t),e[t]=n}function U0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ct(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function uc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ct(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var W=0;function Kh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var qh,cc,Gh,Jh,Qh,ql=!1,Eo=[],an=null,ln=null,un=null,Ti=new Map,xi=new Map,Yt=[],j0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vf(e,t){switch(e){case"focusin":case"focusout":an=null;break;case"dragenter":case"dragleave":ln=null;break;case"mouseover":case"mouseout":un=null;break;case"pointerover":case"pointerout":Ti.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xi.delete(t.pointerId)}}function Yr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Qi(t),t!==null&&cc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function F0(e,t,n,r,i){switch(t){case"focusin":return an=Yr(an,e,t,n,r,i),!0;case"dragenter":return ln=Yr(ln,e,t,n,r,i),!0;case"mouseover":return un=Yr(un,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ti.set(o,Yr(Ti.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,xi.set(o,Yr(xi.get(o)||null,e,t,n,r,i)),!0}return!1}function Xh(e){var t=bn(e.target);if(t!==null){var n=Xn(t);if(n!==null){if(t=n.tag,t===13){if(t=Fh(n),t!==null){e.blockedOn=t,Qh(e.priority,function(){Gh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Gl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Bl=r,n.target.dispatchEvent(r),Bl=null}else return t=Qi(n),t!==null&&cc(t),e.blockedOn=n,!1;t.shift()}return!0}function Wf(e,t,n){zo(e)&&n.delete(t)}function z0(){ql=!1,an!==null&&zo(an)&&(an=null),ln!==null&&zo(ln)&&(ln=null),un!==null&&zo(un)&&(un=null),Ti.forEach(Wf),xi.forEach(Wf)}function Zr(e,t){e.blockedOn===t&&(e.blockedOn=null,ql||(ql=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,z0)))}function ki(e){function t(i){return Zr(i,e)}if(0<Eo.length){Zr(Eo[0],e);for(var n=1;n<Eo.length;n++){var r=Eo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(an!==null&&Zr(an,e),ln!==null&&Zr(ln,e),un!==null&&Zr(un,e),Ti.forEach(t),xi.forEach(t),n=0;n<Yt.length;n++)r=Yt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Yt.length&&(n=Yt[0],n.blockedOn===null);)Xh(n),n.blockedOn===null&&Yt.shift()}var _r=Wt.ReactCurrentBatchConfig,ms=!0;function $0(e,t,n,r){var i=W,o=_r.transition;_r.transition=null;try{W=1,fc(e,t,n,r)}finally{W=i,_r.transition=o}}function B0(e,t,n,r){var i=W,o=_r.transition;_r.transition=null;try{W=4,fc(e,t,n,r)}finally{W=i,_r.transition=o}}function fc(e,t,n,r){if(ms){var i=Gl(e,t,n,r);if(i===null)Qa(e,t,r,gs,n),Vf(e,r);else if(F0(i,e,t,n,r))r.stopPropagation();else if(Vf(e,r),t&4&&-1<j0.indexOf(e)){for(;i!==null;){var o=Qi(i);if(o!==null&&qh(o),o=Gl(e,t,n,r),o===null&&Qa(e,t,r,gs,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Qa(e,t,r,null,n)}}var gs=null;function Gl(e,t,n,r){if(gs=null,e=ac(r),e=bn(e),e!==null)if(t=Xn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Fh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return gs=e,null}function Yh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(b0()){case lc:return 1;case Hh:return 4;case ps:case R0:return 16;case Vh:return 536870912;default:return 16}default:return 16}}var rn=null,dc=null,$o=null;function Zh(){if($o)return $o;var e,t=dc,n=t.length,r,i="value"in rn?rn.value:rn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return $o=i.slice(e,1<r?1-r:void 0)}function Bo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function To(){return!0}function Kf(){return!1}function Ke(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?To:Kf,this.isPropagationStopped=Kf,this}return ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=To)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=To)},persist:function(){},isPersistent:To}),t}var Fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pc=Ke(Fr),Ji=ee({},Fr,{view:0,detail:0}),H0=Ke(Ji),$a,Ba,ei,ra=ee({},Ji,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ei&&(ei&&e.type==="mousemove"?($a=e.screenX-ei.screenX,Ba=e.screenY-ei.screenY):Ba=$a=0,ei=e),$a)},movementY:function(e){return"movementY"in e?e.movementY:Ba}}),qf=Ke(ra),V0=ee({},ra,{dataTransfer:0}),W0=Ke(V0),K0=ee({},Ji,{relatedTarget:0}),Ha=Ke(K0),q0=ee({},Fr,{animationName:0,elapsedTime:0,pseudoElement:0}),G0=Ke(q0),J0=ee({},Fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Q0=Ke(J0),X0=ee({},Fr,{data:0}),Gf=Ke(X0),Y0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Z0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},e_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function t_(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=e_[e])?!!t[e]:!1}function hc(){return t_}var n_=ee({},Ji,{key:function(e){if(e.key){var t=Y0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Bo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Z0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hc,charCode:function(e){return e.type==="keypress"?Bo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Bo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),r_=Ke(n_),i_=ee({},ra,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jf=Ke(i_),o_=ee({},Ji,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hc}),s_=Ke(o_),a_=ee({},Fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),l_=Ke(a_),u_=ee({},ra,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),c_=Ke(u_),f_=[9,13,27,32],mc=Ut&&"CompositionEvent"in window,di=null;Ut&&"documentMode"in document&&(di=document.documentMode);var d_=Ut&&"TextEvent"in window&&!di,em=Ut&&(!mc||di&&8<di&&11>=di),Qf=" ",Xf=!1;function tm(e,t){switch(e){case"keyup":return f_.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var or=!1;function p_(e,t){switch(e){case"compositionend":return nm(t);case"keypress":return t.which!==32?null:(Xf=!0,Qf);case"textInput":return e=t.data,e===Qf&&Xf?null:e;default:return null}}function h_(e,t){if(or)return e==="compositionend"||!mc&&tm(e,t)?(e=Zh(),$o=dc=rn=null,or=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return em&&t.locale!=="ko"?null:t.data;default:return null}}var m_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!m_[e.type]:t==="textarea"}function rm(e,t,n,r){Dh(r),t=ys(t,"onChange"),0<t.length&&(n=new pc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var pi=null,Ci=null;function g_(e){hm(e,0)}function ia(e){var t=lr(e);if(Ph(t))return e}function y_(e,t){if(e==="change")return t}var im=!1;if(Ut){var Va;if(Ut){var Wa="oninput"in document;if(!Wa){var Zf=document.createElement("div");Zf.setAttribute("oninput","return;"),Wa=typeof Zf.oninput=="function"}Va=Wa}else Va=!1;im=Va&&(!document.documentMode||9<document.documentMode)}function ed(){pi&&(pi.detachEvent("onpropertychange",om),Ci=pi=null)}function om(e){if(e.propertyName==="value"&&ia(Ci)){var t=[];rm(t,Ci,e,ac(e)),jh(g_,t)}}function v_(e,t,n){e==="focusin"?(ed(),pi=t,Ci=n,pi.attachEvent("onpropertychange",om)):e==="focusout"&&ed()}function __(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ia(Ci)}function w_(e,t){if(e==="click")return ia(t)}function S_(e,t){if(e==="input"||e==="change")return ia(t)}function E_(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pt=typeof Object.is=="function"?Object.is:E_;function Pi(e,t){if(pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Rl.call(t,i)||!pt(e[i],t[i]))return!1}return!0}function td(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nd(e,t){var n=td(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=td(n)}}function sm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?sm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function am(){for(var e=window,t=cs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=cs(e.document)}return t}function gc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function T_(e){var t=am(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&sm(n.ownerDocument.documentElement,n)){if(r!==null&&gc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=nd(n,o);var s=nd(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var x_=Ut&&"documentMode"in document&&11>=document.documentMode,sr=null,Jl=null,hi=null,Ql=!1;function rd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ql||sr==null||sr!==cs(r)||(r=sr,"selectionStart"in r&&gc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),hi&&Pi(hi,r)||(hi=r,r=ys(Jl,"onSelect"),0<r.length&&(t=new pc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=sr)))}function xo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ar={animationend:xo("Animation","AnimationEnd"),animationiteration:xo("Animation","AnimationIteration"),animationstart:xo("Animation","AnimationStart"),transitionend:xo("Transition","TransitionEnd")},Ka={},lm={};Ut&&(lm=document.createElement("div").style,"AnimationEvent"in window||(delete ar.animationend.animation,delete ar.animationiteration.animation,delete ar.animationstart.animation),"TransitionEvent"in window||delete ar.transitionend.transition);function oa(e){if(Ka[e])return Ka[e];if(!ar[e])return e;var t=ar[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in lm)return Ka[e]=t[n];return e}var um=oa("animationend"),cm=oa("animationiteration"),fm=oa("animationstart"),dm=oa("transitionend"),pm=new Map,id="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wn(e,t){pm.set(e,t),Qn(t,[e])}for(var qa=0;qa<id.length;qa++){var Ga=id[qa],k_=Ga.toLowerCase(),C_=Ga[0].toUpperCase()+Ga.slice(1);wn(k_,"on"+C_)}wn(um,"onAnimationEnd");wn(cm,"onAnimationIteration");wn(fm,"onAnimationStart");wn("dblclick","onDoubleClick");wn("focusin","onFocus");wn("focusout","onBlur");wn(dm,"onTransitionEnd");Cr("onMouseEnter",["mouseout","mouseover"]);Cr("onMouseLeave",["mouseout","mouseover"]);Cr("onPointerEnter",["pointerout","pointerover"]);Cr("onPointerLeave",["pointerout","pointerover"]);Qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var li="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),P_=new Set("cancel close invalid load scroll toggle".split(" ").concat(li));function od(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,k0(r,t,void 0,e),e.currentTarget=null}function hm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;od(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;od(i,a,u),o=l}}}if(ds)throw e=Wl,ds=!1,Wl=null,e}function J(e,t){var n=t[tu];n===void 0&&(n=t[tu]=new Set);var r=e+"__bubble";n.has(r)||(mm(t,e,2,!1),n.add(r))}function Ja(e,t,n){var r=0;t&&(r|=4),mm(n,e,r,t)}var ko="_reactListening"+Math.random().toString(36).slice(2);function Ii(e){if(!e[ko]){e[ko]=!0,Eh.forEach(function(n){n!=="selectionchange"&&(P_.has(n)||Ja(n,!1,e),Ja(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ko]||(t[ko]=!0,Ja("selectionchange",!1,t))}}function mm(e,t,n,r){switch(Yh(t)){case 1:var i=$0;break;case 4:i=B0;break;default:i=fc}n=i.bind(null,t,n,e),i=void 0,!Vl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Qa(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=bn(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}jh(function(){var u=o,c=ac(n),f=[];e:{var m=pm.get(e);if(m!==void 0){var y=pc,w=e;switch(e){case"keypress":if(Bo(n)===0)break e;case"keydown":case"keyup":y=r_;break;case"focusin":w="focus",y=Ha;break;case"focusout":w="blur",y=Ha;break;case"beforeblur":case"afterblur":y=Ha;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=qf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=W0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=s_;break;case um:case cm:case fm:y=G0;break;case dm:y=l_;break;case"scroll":y=H0;break;case"wheel":y=c_;break;case"copy":case"cut":case"paste":y=Q0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Jf}var _=(t&4)!==0,S=!_&&e==="scroll",d=_?m!==null?m+"Capture":null:m;_=[];for(var p=u,h;p!==null;){h=p;var g=h.stateNode;if(h.tag===5&&g!==null&&(h=g,d!==null&&(g=Ei(p,d),g!=null&&_.push(bi(p,g,h)))),S)break;p=p.return}0<_.length&&(m=new y(m,w,null,n,c),f.push({event:m,listeners:_}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&n!==Bl&&(w=n.relatedTarget||n.fromElement)&&(bn(w)||w[jt]))break e;if((y||m)&&(m=c.window===c?c:(m=c.ownerDocument)?m.defaultView||m.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=u,w=w?bn(w):null,w!==null&&(S=Xn(w),w!==S||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=u),y!==w)){if(_=qf,g="onMouseLeave",d="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(_=Jf,g="onPointerLeave",d="onPointerEnter",p="pointer"),S=y==null?m:lr(y),h=w==null?m:lr(w),m=new _(g,p+"leave",y,n,c),m.target=S,m.relatedTarget=h,g=null,bn(c)===u&&(_=new _(d,p+"enter",w,n,c),_.target=h,_.relatedTarget=S,g=_),S=g,y&&w)t:{for(_=y,d=w,p=0,h=_;h;h=Zn(h))p++;for(h=0,g=d;g;g=Zn(g))h++;for(;0<p-h;)_=Zn(_),p--;for(;0<h-p;)d=Zn(d),h--;for(;p--;){if(_===d||d!==null&&_===d.alternate)break t;_=Zn(_),d=Zn(d)}_=null}else _=null;y!==null&&sd(f,m,y,_,!1),w!==null&&S!==null&&sd(f,S,w,_,!0)}}e:{if(m=u?lr(u):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var E=y_;else if(Yf(m))if(im)E=S_;else{E=__;var T=v_}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=w_);if(E&&(E=E(e,u))){rm(f,E,n,c);break e}T&&T(e,m,u),e==="focusout"&&(T=m._wrapperState)&&T.controlled&&m.type==="number"&&Ul(m,"number",m.value)}switch(T=u?lr(u):window,e){case"focusin":(Yf(T)||T.contentEditable==="true")&&(sr=T,Jl=u,hi=null);break;case"focusout":hi=Jl=sr=null;break;case"mousedown":Ql=!0;break;case"contextmenu":case"mouseup":case"dragend":Ql=!1,rd(f,n,c);break;case"selectionchange":if(x_)break;case"keydown":case"keyup":rd(f,n,c)}var k;if(mc)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else or?tm(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(em&&n.locale!=="ko"&&(or||P!=="onCompositionStart"?P==="onCompositionEnd"&&or&&(k=Zh()):(rn=c,dc="value"in rn?rn.value:rn.textContent,or=!0)),T=ys(u,P),0<T.length&&(P=new Gf(P,e,null,n,c),f.push({event:P,listeners:T}),k?P.data=k:(k=nm(n),k!==null&&(P.data=k)))),(k=d_?p_(e,n):h_(e,n))&&(u=ys(u,"onBeforeInput"),0<u.length&&(c=new Gf("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=k))}hm(f,t)})}function bi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ys(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ei(e,n),o!=null&&r.unshift(bi(e,o,i)),o=Ei(e,t),o!=null&&r.push(bi(e,o,i))),e=e.return}return r}function Zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function sd(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ei(n,o),l!=null&&s.unshift(bi(n,l,a))):i||(l=Ei(n,o),l!=null&&s.push(bi(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var I_=/\r\n?/g,b_=/\u0000|\uFFFD/g;function ad(e){return(typeof e=="string"?e:""+e).replace(I_,`
`).replace(b_,"")}function Co(e,t,n){if(t=ad(t),ad(e)!==t&&n)throw Error(I(425))}function vs(){}var Xl=null,Yl=null;function Zl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var eu=typeof setTimeout=="function"?setTimeout:void 0,R_=typeof clearTimeout=="function"?clearTimeout:void 0,ld=typeof Promise=="function"?Promise:void 0,O_=typeof queueMicrotask=="function"?queueMicrotask:typeof ld<"u"?function(e){return ld.resolve(null).then(e).catch(N_)}:eu;function N_(e){setTimeout(function(){throw e})}function Xa(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ki(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ki(t)}function cn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ud(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var zr=Math.random().toString(36).slice(2),gt="__reactFiber$"+zr,Ri="__reactProps$"+zr,jt="__reactContainer$"+zr,tu="__reactEvents$"+zr,A_="__reactListeners$"+zr,D_="__reactHandles$"+zr;function bn(e){var t=e[gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[jt]||n[gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ud(e);e!==null;){if(n=e[gt])return n;e=ud(e)}return t}e=n,n=e.parentNode}return null}function Qi(e){return e=e[gt]||e[jt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function lr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(I(33))}function sa(e){return e[Ri]||null}var nu=[],ur=-1;function Sn(e){return{current:e}}function Q(e){0>ur||(e.current=nu[ur],nu[ur]=null,ur--)}function G(e,t){ur++,nu[ur]=e.current,e.current=t}var vn={},Te=Sn(vn),De=Sn(!1),Fn=vn;function Pr(e,t){var n=e.type.contextTypes;if(!n)return vn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Le(e){return e=e.childContextTypes,e!=null}function _s(){Q(De),Q(Te)}function cd(e,t,n){if(Te.current!==vn)throw Error(I(168));G(Te,t),G(De,n)}function gm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(I(108,v0(e)||"Unknown",i));return ee({},n,r)}function ws(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vn,Fn=Te.current,G(Te,e),G(De,De.current),!0}function fd(e,t,n){var r=e.stateNode;if(!r)throw Error(I(169));n?(e=gm(e,t,Fn),r.__reactInternalMemoizedMergedChildContext=e,Q(De),Q(Te),G(Te,e)):Q(De),G(De,n)}var Pt=null,aa=!1,Ya=!1;function ym(e){Pt===null?Pt=[e]:Pt.push(e)}function L_(e){aa=!0,ym(e)}function En(){if(!Ya&&Pt!==null){Ya=!0;var e=0,t=W;try{var n=Pt;for(W=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Pt=null,aa=!1}catch(i){throw Pt!==null&&(Pt=Pt.slice(e+1)),Bh(lc,En),i}finally{W=t,Ya=!1}}return null}var cr=[],fr=0,Ss=null,Es=0,Ge=[],Je=0,zn=null,Rt=1,Ot="";function Cn(e,t){cr[fr++]=Es,cr[fr++]=Ss,Ss=e,Es=t}function vm(e,t,n){Ge[Je++]=Rt,Ge[Je++]=Ot,Ge[Je++]=zn,zn=e;var r=Rt;e=Ot;var i=32-ct(r)-1;r&=~(1<<i),n+=1;var o=32-ct(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Rt=1<<32-ct(t)+i|n<<i|r,Ot=o+e}else Rt=1<<o|n<<i|r,Ot=e}function yc(e){e.return!==null&&(Cn(e,1),vm(e,1,0))}function vc(e){for(;e===Ss;)Ss=cr[--fr],cr[fr]=null,Es=cr[--fr],cr[fr]=null;for(;e===zn;)zn=Ge[--Je],Ge[Je]=null,Ot=Ge[--Je],Ge[Je]=null,Rt=Ge[--Je],Ge[Je]=null}var He=null,$e=null,X=!1,at=null;function _m(e,t){var n=Qe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function dd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,He=e,$e=cn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,He=e,$e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=zn!==null?{id:Rt,overflow:Ot}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Qe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,He=e,$e=null,!0):!1;default:return!1}}function ru(e){return(e.mode&1)!==0&&(e.flags&128)===0}function iu(e){if(X){var t=$e;if(t){var n=t;if(!dd(e,t)){if(ru(e))throw Error(I(418));t=cn(n.nextSibling);var r=He;t&&dd(e,t)?_m(r,n):(e.flags=e.flags&-4097|2,X=!1,He=e)}}else{if(ru(e))throw Error(I(418));e.flags=e.flags&-4097|2,X=!1,He=e}}}function pd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;He=e}function Po(e){if(e!==He)return!1;if(!X)return pd(e),X=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Zl(e.type,e.memoizedProps)),t&&(t=$e)){if(ru(e))throw wm(),Error(I(418));for(;t;)_m(e,t),t=cn(t.nextSibling)}if(pd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(I(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){$e=cn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}$e=null}}else $e=He?cn(e.stateNode.nextSibling):null;return!0}function wm(){for(var e=$e;e;)e=cn(e.nextSibling)}function Ir(){$e=He=null,X=!1}function _c(e){at===null?at=[e]:at.push(e)}var M_=Wt.ReactCurrentBatchConfig;function ti(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,e))}return e}function Io(e,t){throw e=Object.prototype.toString.call(t),Error(I(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function hd(e){var t=e._init;return t(e._payload)}function Sm(e){function t(d,p){if(e){var h=d.deletions;h===null?(d.deletions=[p],d.flags|=16):h.push(p)}}function n(d,p){if(!e)return null;for(;p!==null;)t(d,p),p=p.sibling;return null}function r(d,p){for(d=new Map;p!==null;)p.key!==null?d.set(p.key,p):d.set(p.index,p),p=p.sibling;return d}function i(d,p){return d=hn(d,p),d.index=0,d.sibling=null,d}function o(d,p,h){return d.index=h,e?(h=d.alternate,h!==null?(h=h.index,h<p?(d.flags|=2,p):h):(d.flags|=2,p)):(d.flags|=1048576,p)}function s(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,p,h,g){return p===null||p.tag!==6?(p=ol(h,d.mode,g),p.return=d,p):(p=i(p,h),p.return=d,p)}function l(d,p,h,g){var E=h.type;return E===ir?c(d,p,h.props.children,g,h.key):p!==null&&(p.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Qt&&hd(E)===p.type)?(g=i(p,h.props),g.ref=ti(d,p,h),g.return=d,g):(g=Jo(h.type,h.key,h.props,null,d.mode,g),g.ref=ti(d,p,h),g.return=d,g)}function u(d,p,h,g){return p===null||p.tag!==4||p.stateNode.containerInfo!==h.containerInfo||p.stateNode.implementation!==h.implementation?(p=sl(h,d.mode,g),p.return=d,p):(p=i(p,h.children||[]),p.return=d,p)}function c(d,p,h,g,E){return p===null||p.tag!==7?(p=Ln(h,d.mode,g,E),p.return=d,p):(p=i(p,h),p.return=d,p)}function f(d,p,h){if(typeof p=="string"&&p!==""||typeof p=="number")return p=ol(""+p,d.mode,h),p.return=d,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case yo:return h=Jo(p.type,p.key,p.props,null,d.mode,h),h.ref=ti(d,null,p),h.return=d,h;case rr:return p=sl(p,d.mode,h),p.return=d,p;case Qt:var g=p._init;return f(d,g(p._payload),h)}if(si(p)||Qr(p))return p=Ln(p,d.mode,h,null),p.return=d,p;Io(d,p)}return null}function m(d,p,h,g){var E=p!==null?p.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return E!==null?null:a(d,p,""+h,g);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case yo:return h.key===E?l(d,p,h,g):null;case rr:return h.key===E?u(d,p,h,g):null;case Qt:return E=h._init,m(d,p,E(h._payload),g)}if(si(h)||Qr(h))return E!==null?null:c(d,p,h,g,null);Io(d,h)}return null}function y(d,p,h,g,E){if(typeof g=="string"&&g!==""||typeof g=="number")return d=d.get(h)||null,a(p,d,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case yo:return d=d.get(g.key===null?h:g.key)||null,l(p,d,g,E);case rr:return d=d.get(g.key===null?h:g.key)||null,u(p,d,g,E);case Qt:var T=g._init;return y(d,p,h,T(g._payload),E)}if(si(g)||Qr(g))return d=d.get(h)||null,c(p,d,g,E,null);Io(p,g)}return null}function w(d,p,h,g){for(var E=null,T=null,k=p,P=p=0,N=null;k!==null&&P<h.length;P++){k.index>P?(N=k,k=null):N=k.sibling;var A=m(d,k,h[P],g);if(A===null){k===null&&(k=N);break}e&&k&&A.alternate===null&&t(d,k),p=o(A,p,P),T===null?E=A:T.sibling=A,T=A,k=N}if(P===h.length)return n(d,k),X&&Cn(d,P),E;if(k===null){for(;P<h.length;P++)k=f(d,h[P],g),k!==null&&(p=o(k,p,P),T===null?E=k:T.sibling=k,T=k);return X&&Cn(d,P),E}for(k=r(d,k);P<h.length;P++)N=y(k,d,P,h[P],g),N!==null&&(e&&N.alternate!==null&&k.delete(N.key===null?P:N.key),p=o(N,p,P),T===null?E=N:T.sibling=N,T=N);return e&&k.forEach(function(V){return t(d,V)}),X&&Cn(d,P),E}function _(d,p,h,g){var E=Qr(h);if(typeof E!="function")throw Error(I(150));if(h=E.call(h),h==null)throw Error(I(151));for(var T=E=null,k=p,P=p=0,N=null,A=h.next();k!==null&&!A.done;P++,A=h.next()){k.index>P?(N=k,k=null):N=k.sibling;var V=m(d,k,A.value,g);if(V===null){k===null&&(k=N);break}e&&k&&V.alternate===null&&t(d,k),p=o(V,p,P),T===null?E=V:T.sibling=V,T=V,k=N}if(A.done)return n(d,k),X&&Cn(d,P),E;if(k===null){for(;!A.done;P++,A=h.next())A=f(d,A.value,g),A!==null&&(p=o(A,p,P),T===null?E=A:T.sibling=A,T=A);return X&&Cn(d,P),E}for(k=r(d,k);!A.done;P++,A=h.next())A=y(k,d,P,A.value,g),A!==null&&(e&&A.alternate!==null&&k.delete(A.key===null?P:A.key),p=o(A,p,P),T===null?E=A:T.sibling=A,T=A);return e&&k.forEach(function(ce){return t(d,ce)}),X&&Cn(d,P),E}function S(d,p,h,g){if(typeof h=="object"&&h!==null&&h.type===ir&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case yo:e:{for(var E=h.key,T=p;T!==null;){if(T.key===E){if(E=h.type,E===ir){if(T.tag===7){n(d,T.sibling),p=i(T,h.props.children),p.return=d,d=p;break e}}else if(T.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Qt&&hd(E)===T.type){n(d,T.sibling),p=i(T,h.props),p.ref=ti(d,T,h),p.return=d,d=p;break e}n(d,T);break}else t(d,T);T=T.sibling}h.type===ir?(p=Ln(h.props.children,d.mode,g,h.key),p.return=d,d=p):(g=Jo(h.type,h.key,h.props,null,d.mode,g),g.ref=ti(d,p,h),g.return=d,d=g)}return s(d);case rr:e:{for(T=h.key;p!==null;){if(p.key===T)if(p.tag===4&&p.stateNode.containerInfo===h.containerInfo&&p.stateNode.implementation===h.implementation){n(d,p.sibling),p=i(p,h.children||[]),p.return=d,d=p;break e}else{n(d,p);break}else t(d,p);p=p.sibling}p=sl(h,d.mode,g),p.return=d,d=p}return s(d);case Qt:return T=h._init,S(d,p,T(h._payload),g)}if(si(h))return w(d,p,h,g);if(Qr(h))return _(d,p,h,g);Io(d,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,p!==null&&p.tag===6?(n(d,p.sibling),p=i(p,h),p.return=d,d=p):(n(d,p),p=ol(h,d.mode,g),p.return=d,d=p),s(d)):n(d,p)}return S}var br=Sm(!0),Em=Sm(!1),Ts=Sn(null),xs=null,dr=null,wc=null;function Sc(){wc=dr=xs=null}function Ec(e){var t=Ts.current;Q(Ts),e._currentValue=t}function ou(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function wr(e,t){xs=e,wc=dr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ae=!0),e.firstContext=null)}function Ye(e){var t=e._currentValue;if(wc!==e)if(e={context:e,memoizedValue:t,next:null},dr===null){if(xs===null)throw Error(I(308));dr=e,xs.dependencies={lanes:0,firstContext:e}}else dr=dr.next=e;return t}var Rn=null;function Tc(e){Rn===null?Rn=[e]:Rn.push(e)}function Tm(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Tc(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ft(e,r)}function Ft(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Xt=!1;function xc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Lt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function fn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,H&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ft(e,n)}return i=r.interleaved,i===null?(t.next=t,Tc(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ft(e,n)}function Ho(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,uc(e,n)}}function md(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ks(e,t,n,r){var i=e.updateQueue;Xt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,c=u=l=null,a=o;do{var m=a.lane,y=a.eventTime;if((r&m)===m){c!==null&&(c=c.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,_=a;switch(m=t,y=n,_.tag){case 1:if(w=_.payload,typeof w=="function"){f=w.call(y,f,m);break e}f=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=_.payload,m=typeof w=="function"?w.call(y,f,m):w,m==null)break e;f=ee({},f,m);break e;case 2:Xt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else y={eventTime:y,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=y,l=f):c=c.next=y,s|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Bn|=s,e.lanes=s,e.memoizedState=f}}function gd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var Xi={},_t=Sn(Xi),Oi=Sn(Xi),Ni=Sn(Xi);function On(e){if(e===Xi)throw Error(I(174));return e}function kc(e,t){switch(G(Ni,t),G(Oi,e),G(_t,Xi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Fl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Fl(t,e)}Q(_t),G(_t,t)}function Rr(){Q(_t),Q(Oi),Q(Ni)}function km(e){On(Ni.current);var t=On(_t.current),n=Fl(t,e.type);t!==n&&(G(Oi,e),G(_t,n))}function Cc(e){Oi.current===e&&(Q(_t),Q(Oi))}var Y=Sn(0);function Cs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Za=[];function Pc(){for(var e=0;e<Za.length;e++)Za[e]._workInProgressVersionPrimary=null;Za.length=0}var Vo=Wt.ReactCurrentDispatcher,el=Wt.ReactCurrentBatchConfig,$n=0,Z=null,se=null,le=null,Ps=!1,mi=!1,Ai=0,U_=0;function ve(){throw Error(I(321))}function Ic(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!pt(e[n],t[n]))return!1;return!0}function bc(e,t,n,r,i,o){if($n=o,Z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Vo.current=e===null||e.memoizedState===null?$_:B_,e=n(r,i),mi){o=0;do{if(mi=!1,Ai=0,25<=o)throw Error(I(301));o+=1,le=se=null,t.updateQueue=null,Vo.current=H_,e=n(r,i)}while(mi)}if(Vo.current=Is,t=se!==null&&se.next!==null,$n=0,le=se=Z=null,Ps=!1,t)throw Error(I(300));return e}function Rc(){var e=Ai!==0;return Ai=0,e}function mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?Z.memoizedState=le=e:le=le.next=e,le}function Ze(){if(se===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var t=le===null?Z.memoizedState:le.next;if(t!==null)le=t,se=e;else{if(e===null)throw Error(I(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},le===null?Z.memoizedState=le=e:le=le.next=e}return le}function Di(e,t){return typeof t=="function"?t(e):t}function tl(e){var t=Ze(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=se,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if(($n&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,Z.lanes|=c,Bn|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,pt(r,t.memoizedState)||(Ae=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Z.lanes|=o,Bn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function nl(e){var t=Ze(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);pt(o,t.memoizedState)||(Ae=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Cm(){}function Pm(e,t){var n=Z,r=Ze(),i=t(),o=!pt(r.memoizedState,i);if(o&&(r.memoizedState=i,Ae=!0),r=r.queue,Oc(Rm.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,Li(9,bm.bind(null,n,r,i,t),void 0,null),ue===null)throw Error(I(349));$n&30||Im(n,t,i)}return i}function Im(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function bm(e,t,n,r){t.value=n,t.getSnapshot=r,Om(t)&&Nm(e)}function Rm(e,t,n){return n(function(){Om(t)&&Nm(e)})}function Om(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!pt(e,n)}catch{return!0}}function Nm(e){var t=Ft(e,1);t!==null&&ft(t,e,1,-1)}function yd(e){var t=mt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Di,lastRenderedState:e},t.queue=e,e=e.dispatch=z_.bind(null,Z,e),[t.memoizedState,e]}function Li(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Am(){return Ze().memoizedState}function Wo(e,t,n,r){var i=mt();Z.flags|=e,i.memoizedState=Li(1|t,n,void 0,r===void 0?null:r)}function la(e,t,n,r){var i=Ze();r=r===void 0?null:r;var o=void 0;if(se!==null){var s=se.memoizedState;if(o=s.destroy,r!==null&&Ic(r,s.deps)){i.memoizedState=Li(t,n,o,r);return}}Z.flags|=e,i.memoizedState=Li(1|t,n,o,r)}function vd(e,t){return Wo(8390656,8,e,t)}function Oc(e,t){return la(2048,8,e,t)}function Dm(e,t){return la(4,2,e,t)}function Lm(e,t){return la(4,4,e,t)}function Mm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Um(e,t,n){return n=n!=null?n.concat([e]):null,la(4,4,Mm.bind(null,t,e),n)}function Nc(){}function jm(e,t){var n=Ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ic(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Fm(e,t){var n=Ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ic(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function zm(e,t,n){return $n&21?(pt(n,t)||(n=Wh(),Z.lanes|=n,Bn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ae=!0),e.memoizedState=n)}function j_(e,t){var n=W;W=n!==0&&4>n?n:4,e(!0);var r=el.transition;el.transition={};try{e(!1),t()}finally{W=n,el.transition=r}}function $m(){return Ze().memoizedState}function F_(e,t,n){var r=pn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Bm(e))Hm(t,n);else if(n=Tm(e,t,n,r),n!==null){var i=Ie();ft(n,e,r,i),Vm(n,t,r)}}function z_(e,t,n){var r=pn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bm(e))Hm(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,pt(a,s)){var l=t.interleaved;l===null?(i.next=i,Tc(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Tm(e,t,i,r),n!==null&&(i=Ie(),ft(n,e,r,i),Vm(n,t,r))}}function Bm(e){var t=e.alternate;return e===Z||t!==null&&t===Z}function Hm(e,t){mi=Ps=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,uc(e,n)}}var Is={readContext:Ye,useCallback:ve,useContext:ve,useEffect:ve,useImperativeHandle:ve,useInsertionEffect:ve,useLayoutEffect:ve,useMemo:ve,useReducer:ve,useRef:ve,useState:ve,useDebugValue:ve,useDeferredValue:ve,useTransition:ve,useMutableSource:ve,useSyncExternalStore:ve,useId:ve,unstable_isNewReconciler:!1},$_={readContext:Ye,useCallback:function(e,t){return mt().memoizedState=[e,t===void 0?null:t],e},useContext:Ye,useEffect:vd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Wo(4194308,4,Mm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Wo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Wo(4,2,e,t)},useMemo:function(e,t){var n=mt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=mt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=F_.bind(null,Z,e),[r.memoizedState,e]},useRef:function(e){var t=mt();return e={current:e},t.memoizedState=e},useState:yd,useDebugValue:Nc,useDeferredValue:function(e){return mt().memoizedState=e},useTransition:function(){var e=yd(!1),t=e[0];return e=j_.bind(null,e[1]),mt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Z,i=mt();if(X){if(n===void 0)throw Error(I(407));n=n()}else{if(n=t(),ue===null)throw Error(I(349));$n&30||Im(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,vd(Rm.bind(null,r,o,e),[e]),r.flags|=2048,Li(9,bm.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=mt(),t=ue.identifierPrefix;if(X){var n=Ot,r=Rt;n=(r&~(1<<32-ct(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ai++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=U_++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},B_={readContext:Ye,useCallback:jm,useContext:Ye,useEffect:Oc,useImperativeHandle:Um,useInsertionEffect:Dm,useLayoutEffect:Lm,useMemo:Fm,useReducer:tl,useRef:Am,useState:function(){return tl(Di)},useDebugValue:Nc,useDeferredValue:function(e){var t=Ze();return zm(t,se.memoizedState,e)},useTransition:function(){var e=tl(Di)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:Cm,useSyncExternalStore:Pm,useId:$m,unstable_isNewReconciler:!1},H_={readContext:Ye,useCallback:jm,useContext:Ye,useEffect:Oc,useImperativeHandle:Um,useInsertionEffect:Dm,useLayoutEffect:Lm,useMemo:Fm,useReducer:nl,useRef:Am,useState:function(){return nl(Di)},useDebugValue:Nc,useDeferredValue:function(e){var t=Ze();return se===null?t.memoizedState=e:zm(t,se.memoizedState,e)},useTransition:function(){var e=nl(Di)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:Cm,useSyncExternalStore:Pm,useId:$m,unstable_isNewReconciler:!1};function ot(e,t){if(e&&e.defaultProps){t=ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function su(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ua={isMounted:function(e){return(e=e._reactInternals)?Xn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ie(),i=pn(e),o=Lt(r,i);o.payload=t,n!=null&&(o.callback=n),t=fn(e,o,i),t!==null&&(ft(t,e,i,r),Ho(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ie(),i=pn(e),o=Lt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=fn(e,o,i),t!==null&&(ft(t,e,i,r),Ho(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ie(),r=pn(e),i=Lt(n,r);i.tag=2,t!=null&&(i.callback=t),t=fn(e,i,r),t!==null&&(ft(t,e,r,n),Ho(t,e,r))}};function _d(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Pi(n,r)||!Pi(i,o):!0}function Wm(e,t,n){var r=!1,i=vn,o=t.contextType;return typeof o=="object"&&o!==null?o=Ye(o):(i=Le(t)?Fn:Te.current,r=t.contextTypes,o=(r=r!=null)?Pr(e,i):vn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ua,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function wd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ua.enqueueReplaceState(t,t.state,null)}function au(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},xc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ye(o):(o=Le(t)?Fn:Te.current,i.context=Pr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(su(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ua.enqueueReplaceState(i,i.state,null),ks(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Or(e,t){try{var n="",r=t;do n+=y0(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function rl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function lu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var V_=typeof WeakMap=="function"?WeakMap:Map;function Km(e,t,n){n=Lt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Rs||(Rs=!0,vu=r),lu(e,t)},n}function qm(e,t,n){n=Lt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){lu(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){lu(e,t),typeof r!="function"&&(dn===null?dn=new Set([this]):dn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Sd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new V_;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=iw.bind(null,e,t,n),t.then(e,e))}function Ed(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Td(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Lt(-1,1),t.tag=2,fn(n,t,1))),n.lanes|=1),e)}var W_=Wt.ReactCurrentOwner,Ae=!1;function Ce(e,t,n,r){t.child=e===null?Em(t,null,n,r):br(t,e.child,n,r)}function xd(e,t,n,r,i){n=n.render;var o=t.ref;return wr(t,i),r=bc(e,t,n,r,o,i),n=Rc(),e!==null&&!Ae?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,zt(e,t,i)):(X&&n&&yc(t),t.flags|=1,Ce(e,t,r,i),t.child)}function kd(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!zc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Gm(e,t,o,r,i)):(e=Jo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Pi,n(s,r)&&e.ref===t.ref)return zt(e,t,i)}return t.flags|=1,e=hn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Gm(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Pi(o,r)&&e.ref===t.ref)if(Ae=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ae=!0);else return t.lanes=e.lanes,zt(e,t,i)}return uu(e,t,n,r,i)}function Jm(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(hr,ze),ze|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,G(hr,ze),ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,G(hr,ze),ze|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,G(hr,ze),ze|=r;return Ce(e,t,i,n),t.child}function Qm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function uu(e,t,n,r,i){var o=Le(n)?Fn:Te.current;return o=Pr(t,o),wr(t,i),n=bc(e,t,n,r,o,i),r=Rc(),e!==null&&!Ae?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,zt(e,t,i)):(X&&r&&yc(t),t.flags|=1,Ce(e,t,n,i),t.child)}function Cd(e,t,n,r,i){if(Le(n)){var o=!0;ws(t)}else o=!1;if(wr(t,i),t.stateNode===null)Ko(e,t),Wm(t,n,r),au(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ye(u):(u=Le(n)?Fn:Te.current,u=Pr(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&wd(t,s,r,u),Xt=!1;var m=t.memoizedState;s.state=m,ks(t,r,s,i),l=t.memoizedState,a!==r||m!==l||De.current||Xt?(typeof c=="function"&&(su(t,n,c,r),l=t.memoizedState),(a=Xt||_d(t,n,a,r,m,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,xm(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:ot(t.type,a),s.props=u,f=t.pendingProps,m=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ye(l):(l=Le(n)?Fn:Te.current,l=Pr(t,l));var y=n.getDerivedStateFromProps;(c=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||m!==l)&&wd(t,s,r,l),Xt=!1,m=t.memoizedState,s.state=m,ks(t,r,s,i);var w=t.memoizedState;a!==f||m!==w||De.current||Xt?(typeof y=="function"&&(su(t,n,y,r),w=t.memoizedState),(u=Xt||_d(t,n,u,r,m,w,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,w,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,w,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),s.props=r,s.state=w,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return cu(e,t,n,r,o,i)}function cu(e,t,n,r,i,o){Qm(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&fd(t,n,!1),zt(e,t,o);r=t.stateNode,W_.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=br(t,e.child,null,o),t.child=br(t,null,a,o)):Ce(e,t,a,o),t.memoizedState=r.state,i&&fd(t,n,!0),t.child}function Xm(e){var t=e.stateNode;t.pendingContext?cd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&cd(e,t.context,!1),kc(e,t.containerInfo)}function Pd(e,t,n,r,i){return Ir(),_c(i),t.flags|=256,Ce(e,t,n,r),t.child}var fu={dehydrated:null,treeContext:null,retryLane:0};function du(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ym(e,t,n){var r=t.pendingProps,i=Y.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),G(Y,i&1),e===null)return iu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=da(s,r,0,null),e=Ln(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=du(n),t.memoizedState=fu,e):Ac(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return K_(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=hn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=hn(a,o):(o=Ln(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?du(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=fu,r}return o=e.child,e=o.sibling,r=hn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ac(e,t){return t=da({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function bo(e,t,n,r){return r!==null&&_c(r),br(t,e.child,null,n),e=Ac(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function K_(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=rl(Error(I(422))),bo(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=da({mode:"visible",children:r.children},i,0,null),o=Ln(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&br(t,e.child,null,s),t.child.memoizedState=du(s),t.memoizedState=fu,o);if(!(t.mode&1))return bo(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(I(419)),r=rl(o,r,void 0),bo(e,t,s,r)}if(a=(s&e.childLanes)!==0,Ae||a){if(r=ue,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ft(e,i),ft(r,e,i,-1))}return Fc(),r=rl(Error(I(421))),bo(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=ow.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,$e=cn(i.nextSibling),He=t,X=!0,at=null,e!==null&&(Ge[Je++]=Rt,Ge[Je++]=Ot,Ge[Je++]=zn,Rt=e.id,Ot=e.overflow,zn=t),t=Ac(t,r.children),t.flags|=4096,t)}function Id(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ou(e.return,t,n)}function il(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Zm(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ce(e,t,r.children,n),r=Y.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Id(e,n,t);else if(e.tag===19)Id(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(G(Y,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Cs(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),il(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Cs(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}il(t,!0,n,null,o);break;case"together":il(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ko(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function zt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Bn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(I(153));if(t.child!==null){for(e=t.child,n=hn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=hn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function q_(e,t,n){switch(t.tag){case 3:Xm(t),Ir();break;case 5:km(t);break;case 1:Le(t.type)&&ws(t);break;case 4:kc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;G(Ts,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(G(Y,Y.current&1),t.flags|=128,null):n&t.child.childLanes?Ym(e,t,n):(G(Y,Y.current&1),e=zt(e,t,n),e!==null?e.sibling:null);G(Y,Y.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Zm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),G(Y,Y.current),r)break;return null;case 22:case 23:return t.lanes=0,Jm(e,t,n)}return zt(e,t,n)}var eg,pu,tg,ng;eg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};pu=function(){};tg=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,On(_t.current);var o=null;switch(n){case"input":i=Ll(e,i),r=Ll(e,r),o=[];break;case"select":i=ee({},i,{value:void 0}),r=ee({},r,{value:void 0}),o=[];break;case"textarea":i=jl(e,i),r=jl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=vs)}zl(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(wi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(wi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&J("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};ng=function(e,t,n,r){n!==r&&(t.flags|=4)};function ni(e,t){if(!X)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function _e(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function G_(e,t,n){var r=t.pendingProps;switch(vc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _e(t),null;case 1:return Le(t.type)&&_s(),_e(t),null;case 3:return r=t.stateNode,Rr(),Q(De),Q(Te),Pc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Po(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,at!==null&&(Su(at),at=null))),pu(e,t),_e(t),null;case 5:Cc(t);var i=On(Ni.current);if(n=t.type,e!==null&&t.stateNode!=null)tg(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(I(166));return _e(t),null}if(e=On(_t.current),Po(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[gt]=t,r[Ri]=o,e=(t.mode&1)!==0,n){case"dialog":J("cancel",r),J("close",r);break;case"iframe":case"object":case"embed":J("load",r);break;case"video":case"audio":for(i=0;i<li.length;i++)J(li[i],r);break;case"source":J("error",r);break;case"img":case"image":case"link":J("error",r),J("load",r);break;case"details":J("toggle",r);break;case"input":Uf(r,o),J("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},J("invalid",r);break;case"textarea":Ff(r,o),J("invalid",r)}zl(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Co(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Co(r.textContent,a,e),i=["children",""+a]):wi.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&J("scroll",r)}switch(n){case"input":vo(r),jf(r,o,!0);break;case"textarea":vo(r),zf(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=vs)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Rh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[gt]=t,e[Ri]=r,eg(e,t,!1,!1),t.stateNode=e;e:{switch(s=$l(n,r),n){case"dialog":J("cancel",e),J("close",e),i=r;break;case"iframe":case"object":case"embed":J("load",e),i=r;break;case"video":case"audio":for(i=0;i<li.length;i++)J(li[i],e);i=r;break;case"source":J("error",e),i=r;break;case"img":case"image":case"link":J("error",e),J("load",e),i=r;break;case"details":J("toggle",e),i=r;break;case"input":Uf(e,r),i=Ll(e,r),J("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ee({},r,{value:void 0}),J("invalid",e);break;case"textarea":Ff(e,r),i=jl(e,r),J("invalid",e);break;default:i=r}zl(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Ah(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Oh(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Si(e,l):typeof l=="number"&&Si(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(wi.hasOwnProperty(o)?l!=null&&o==="onScroll"&&J("scroll",e):l!=null&&rc(e,o,l,s))}switch(n){case"input":vo(e),jf(e,r,!1);break;case"textarea":vo(e),zf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+yn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?gr(e,!!r.multiple,o,!1):r.defaultValue!=null&&gr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=vs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return _e(t),null;case 6:if(e&&t.stateNode!=null)ng(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(I(166));if(n=On(Ni.current),On(_t.current),Po(t)){if(r=t.stateNode,n=t.memoizedProps,r[gt]=t,(o=r.nodeValue!==n)&&(e=He,e!==null))switch(e.tag){case 3:Co(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Co(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[gt]=t,t.stateNode=r}return _e(t),null;case 13:if(Q(Y),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(X&&$e!==null&&t.mode&1&&!(t.flags&128))wm(),Ir(),t.flags|=98560,o=!1;else if(o=Po(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(I(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(I(317));o[gt]=t}else Ir(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;_e(t),o=!1}else at!==null&&(Su(at),at=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Y.current&1?ae===0&&(ae=3):Fc())),t.updateQueue!==null&&(t.flags|=4),_e(t),null);case 4:return Rr(),pu(e,t),e===null&&Ii(t.stateNode.containerInfo),_e(t),null;case 10:return Ec(t.type._context),_e(t),null;case 17:return Le(t.type)&&_s(),_e(t),null;case 19:if(Q(Y),o=t.memoizedState,o===null)return _e(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)ni(o,!1);else{if(ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Cs(e),s!==null){for(t.flags|=128,ni(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return G(Y,Y.current&1|2),t.child}e=e.sibling}o.tail!==null&&ne()>Nr&&(t.flags|=128,r=!0,ni(o,!1),t.lanes=4194304)}else{if(!r)if(e=Cs(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ni(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!X)return _e(t),null}else 2*ne()-o.renderingStartTime>Nr&&n!==1073741824&&(t.flags|=128,r=!0,ni(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ne(),t.sibling=null,n=Y.current,G(Y,r?n&1|2:n&1),t):(_e(t),null);case 22:case 23:return jc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ze&1073741824&&(_e(t),t.subtreeFlags&6&&(t.flags|=8192)):_e(t),null;case 24:return null;case 25:return null}throw Error(I(156,t.tag))}function J_(e,t){switch(vc(t),t.tag){case 1:return Le(t.type)&&_s(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Rr(),Q(De),Q(Te),Pc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Cc(t),null;case 13:if(Q(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(I(340));Ir()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(Y),null;case 4:return Rr(),null;case 10:return Ec(t.type._context),null;case 22:case 23:return jc(),null;case 24:return null;default:return null}}var Ro=!1,Se=!1,Q_=typeof WeakSet=="function"?WeakSet:Set,O=null;function pr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(e,t,r)}else n.current=null}function hu(e,t,n){try{n()}catch(r){te(e,t,r)}}var bd=!1;function X_(e,t){if(Xl=ms,e=am(),gc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,f=e,m=null;t:for(;;){for(var y;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(y=f.firstChild)!==null;)m=f,f=y;for(;;){if(f===e)break t;if(m===n&&++u===i&&(a=s),m===o&&++c===r&&(l=s),(y=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yl={focusedElem:e,selectionRange:n},ms=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var _=w.memoizedProps,S=w.memoizedState,d=t.stateNode,p=d.getSnapshotBeforeUpdate(t.elementType===t.type?_:ot(t.type,_),S);d.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(g){te(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return w=bd,bd=!1,w}function gi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&hu(t,n,o)}i=i.next}while(i!==r)}}function ca(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function mu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function rg(e){var t=e.alternate;t!==null&&(e.alternate=null,rg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[gt],delete t[Ri],delete t[tu],delete t[A_],delete t[D_])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ig(e){return e.tag===5||e.tag===3||e.tag===4}function Rd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ig(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=vs));else if(r!==4&&(e=e.child,e!==null))for(gu(e,t,n),e=e.sibling;e!==null;)gu(e,t,n),e=e.sibling}function yu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(yu(e,t,n),e=e.sibling;e!==null;)yu(e,t,n),e=e.sibling}var pe=null,st=!1;function Gt(e,t,n){for(n=n.child;n!==null;)og(e,t,n),n=n.sibling}function og(e,t,n){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(na,n)}catch{}switch(n.tag){case 5:Se||pr(n,t);case 6:var r=pe,i=st;pe=null,Gt(e,t,n),pe=r,st=i,pe!==null&&(st?(e=pe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):pe.removeChild(n.stateNode));break;case 18:pe!==null&&(st?(e=pe,n=n.stateNode,e.nodeType===8?Xa(e.parentNode,n):e.nodeType===1&&Xa(e,n),ki(e)):Xa(pe,n.stateNode));break;case 4:r=pe,i=st,pe=n.stateNode.containerInfo,st=!0,Gt(e,t,n),pe=r,st=i;break;case 0:case 11:case 14:case 15:if(!Se&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&hu(n,t,s),i=i.next}while(i!==r)}Gt(e,t,n);break;case 1:if(!Se&&(pr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){te(n,t,a)}Gt(e,t,n);break;case 21:Gt(e,t,n);break;case 22:n.mode&1?(Se=(r=Se)||n.memoizedState!==null,Gt(e,t,n),Se=r):Gt(e,t,n);break;default:Gt(e,t,n)}}function Od(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Q_),t.forEach(function(r){var i=sw.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function it(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:pe=a.stateNode,st=!1;break e;case 3:pe=a.stateNode.containerInfo,st=!0;break e;case 4:pe=a.stateNode.containerInfo,st=!0;break e}a=a.return}if(pe===null)throw Error(I(160));og(o,s,i),pe=null,st=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){te(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)sg(t,e),t=t.sibling}function sg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(it(t,e),ht(e),r&4){try{gi(3,e,e.return),ca(3,e)}catch(_){te(e,e.return,_)}try{gi(5,e,e.return)}catch(_){te(e,e.return,_)}}break;case 1:it(t,e),ht(e),r&512&&n!==null&&pr(n,n.return);break;case 5:if(it(t,e),ht(e),r&512&&n!==null&&pr(n,n.return),e.flags&32){var i=e.stateNode;try{Si(i,"")}catch(_){te(e,e.return,_)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Ih(i,o),$l(a,s);var u=$l(a,o);for(s=0;s<l.length;s+=2){var c=l[s],f=l[s+1];c==="style"?Ah(i,f):c==="dangerouslySetInnerHTML"?Oh(i,f):c==="children"?Si(i,f):rc(i,c,f,u)}switch(a){case"input":Ml(i,o);break;case"textarea":bh(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?gr(i,!!o.multiple,y,!1):m!==!!o.multiple&&(o.defaultValue!=null?gr(i,!!o.multiple,o.defaultValue,!0):gr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ri]=o}catch(_){te(e,e.return,_)}}break;case 6:if(it(t,e),ht(e),r&4){if(e.stateNode===null)throw Error(I(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(_){te(e,e.return,_)}}break;case 3:if(it(t,e),ht(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ki(t.containerInfo)}catch(_){te(e,e.return,_)}break;case 4:it(t,e),ht(e);break;case 13:it(t,e),ht(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Mc=ne())),r&4&&Od(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Se=(u=Se)||c,it(t,e),Se=u):it(t,e),ht(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(O=e,c=e.child;c!==null;){for(f=O=c;O!==null;){switch(m=O,y=m.child,m.tag){case 0:case 11:case 14:case 15:gi(4,m,m.return);break;case 1:pr(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(_){te(r,n,_)}}break;case 5:pr(m,m.return);break;case 22:if(m.memoizedState!==null){Ad(f);continue}}y!==null?(y.return=m,O=y):Ad(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Nh("display",s))}catch(_){te(e,e.return,_)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(_){te(e,e.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:it(t,e),ht(e),r&4&&Od(e);break;case 21:break;default:it(t,e),ht(e)}}function ht(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ig(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Si(i,""),r.flags&=-33);var o=Rd(e);yu(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Rd(e);gu(e,a,s);break;default:throw Error(I(161))}}catch(l){te(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Y_(e,t,n){O=e,ag(e)}function ag(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var i=O,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Ro;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Se;a=Ro;var u=Se;if(Ro=s,(Se=l)&&!u)for(O=i;O!==null;)s=O,l=s.child,s.tag===22&&s.memoizedState!==null?Dd(i):l!==null?(l.return=s,O=l):Dd(i);for(;o!==null;)O=o,ag(o),o=o.sibling;O=i,Ro=a,Se=u}Nd(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,O=o):Nd(e)}}function Nd(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Se||ca(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Se)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ot(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&gd(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}gd(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&ki(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}Se||t.flags&512&&mu(t)}catch(m){te(t,t.return,m)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function Ad(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function Dd(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ca(4,t)}catch(l){te(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){te(t,i,l)}}var o=t.return;try{mu(t)}catch(l){te(t,o,l)}break;case 5:var s=t.return;try{mu(t)}catch(l){te(t,s,l)}}}catch(l){te(t,t.return,l)}if(t===e){O=null;break}var a=t.sibling;if(a!==null){a.return=t.return,O=a;break}O=t.return}}var Z_=Math.ceil,bs=Wt.ReactCurrentDispatcher,Dc=Wt.ReactCurrentOwner,Xe=Wt.ReactCurrentBatchConfig,H=0,ue=null,oe=null,me=0,ze=0,hr=Sn(0),ae=0,Mi=null,Bn=0,fa=0,Lc=0,yi=null,Ne=null,Mc=0,Nr=1/0,Ct=null,Rs=!1,vu=null,dn=null,Oo=!1,on=null,Os=0,vi=0,_u=null,qo=-1,Go=0;function Ie(){return H&6?ne():qo!==-1?qo:qo=ne()}function pn(e){return e.mode&1?H&2&&me!==0?me&-me:M_.transition!==null?(Go===0&&(Go=Wh()),Go):(e=W,e!==0||(e=window.event,e=e===void 0?16:Yh(e.type)),e):1}function ft(e,t,n,r){if(50<vi)throw vi=0,_u=null,Error(I(185));Gi(e,n,r),(!(H&2)||e!==ue)&&(e===ue&&(!(H&2)&&(fa|=n),ae===4&&Zt(e,me)),Me(e,r),n===1&&H===0&&!(t.mode&1)&&(Nr=ne()+500,aa&&En()))}function Me(e,t){var n=e.callbackNode;M0(e,t);var r=hs(e,e===ue?me:0);if(r===0)n!==null&&Hf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Hf(n),t===1)e.tag===0?L_(Ld.bind(null,e)):ym(Ld.bind(null,e)),O_(function(){!(H&6)&&En()}),n=null;else{switch(Kh(r)){case 1:n=lc;break;case 4:n=Hh;break;case 16:n=ps;break;case 536870912:n=Vh;break;default:n=ps}n=mg(n,lg.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function lg(e,t){if(qo=-1,Go=0,H&6)throw Error(I(327));var n=e.callbackNode;if(Sr()&&e.callbackNode!==n)return null;var r=hs(e,e===ue?me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ns(e,r);else{t=r;var i=H;H|=2;var o=cg();(ue!==e||me!==t)&&(Ct=null,Nr=ne()+500,Dn(e,t));do try{nw();break}catch(a){ug(e,a)}while(!0);Sc(),bs.current=o,H=i,oe!==null?t=0:(ue=null,me=0,t=ae)}if(t!==0){if(t===2&&(i=Kl(e),i!==0&&(r=i,t=wu(e,i))),t===1)throw n=Mi,Dn(e,0),Zt(e,r),Me(e,ne()),n;if(t===6)Zt(e,r);else{if(i=e.current.alternate,!(r&30)&&!ew(i)&&(t=Ns(e,r),t===2&&(o=Kl(e),o!==0&&(r=o,t=wu(e,o))),t===1))throw n=Mi,Dn(e,0),Zt(e,r),Me(e,ne()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(I(345));case 2:Pn(e,Ne,Ct);break;case 3:if(Zt(e,r),(r&130023424)===r&&(t=Mc+500-ne(),10<t)){if(hs(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ie(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=eu(Pn.bind(null,e,Ne,Ct),t);break}Pn(e,Ne,Ct);break;case 4:if(Zt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-ct(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Z_(r/1960))-r,10<r){e.timeoutHandle=eu(Pn.bind(null,e,Ne,Ct),r);break}Pn(e,Ne,Ct);break;case 5:Pn(e,Ne,Ct);break;default:throw Error(I(329))}}}return Me(e,ne()),e.callbackNode===n?lg.bind(null,e):null}function wu(e,t){var n=yi;return e.current.memoizedState.isDehydrated&&(Dn(e,t).flags|=256),e=Ns(e,t),e!==2&&(t=Ne,Ne=n,t!==null&&Su(t)),e}function Su(e){Ne===null?Ne=e:Ne.push.apply(Ne,e)}function ew(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!pt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zt(e,t){for(t&=~Lc,t&=~fa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ct(t),r=1<<n;e[n]=-1,t&=~r}}function Ld(e){if(H&6)throw Error(I(327));Sr();var t=hs(e,0);if(!(t&1))return Me(e,ne()),null;var n=Ns(e,t);if(e.tag!==0&&n===2){var r=Kl(e);r!==0&&(t=r,n=wu(e,r))}if(n===1)throw n=Mi,Dn(e,0),Zt(e,t),Me(e,ne()),n;if(n===6)throw Error(I(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Pn(e,Ne,Ct),Me(e,ne()),null}function Uc(e,t){var n=H;H|=1;try{return e(t)}finally{H=n,H===0&&(Nr=ne()+500,aa&&En())}}function Hn(e){on!==null&&on.tag===0&&!(H&6)&&Sr();var t=H;H|=1;var n=Xe.transition,r=W;try{if(Xe.transition=null,W=1,e)return e()}finally{W=r,Xe.transition=n,H=t,!(H&6)&&En()}}function jc(){ze=hr.current,Q(hr)}function Dn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,R_(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(vc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&_s();break;case 3:Rr(),Q(De),Q(Te),Pc();break;case 5:Cc(r);break;case 4:Rr();break;case 13:Q(Y);break;case 19:Q(Y);break;case 10:Ec(r.type._context);break;case 22:case 23:jc()}n=n.return}if(ue=e,oe=e=hn(e.current,null),me=ze=t,ae=0,Mi=null,Lc=fa=Bn=0,Ne=yi=null,Rn!==null){for(t=0;t<Rn.length;t++)if(n=Rn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Rn=null}return e}function ug(e,t){do{var n=oe;try{if(Sc(),Vo.current=Is,Ps){for(var r=Z.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ps=!1}if($n=0,le=se=Z=null,mi=!1,Ai=0,Dc.current=null,n===null||n.return===null){ae=1,Mi=t,oe=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=me,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var m=c.alternate;m?(c.updateQueue=m.updateQueue,c.memoizedState=m.memoizedState,c.lanes=m.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=Ed(s);if(y!==null){y.flags&=-257,Td(y,s,a,o,t),y.mode&1&&Sd(o,u,t),t=y,l=u;var w=t.updateQueue;if(w===null){var _=new Set;_.add(l),t.updateQueue=_}else w.add(l);break e}else{if(!(t&1)){Sd(o,u,t),Fc();break e}l=Error(I(426))}}else if(X&&a.mode&1){var S=Ed(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Td(S,s,a,o,t),_c(Or(l,a));break e}}o=l=Or(l,a),ae!==4&&(ae=2),yi===null?yi=[o]:yi.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var d=Km(o,l,t);md(o,d);break e;case 1:a=l;var p=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(dn===null||!dn.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var g=qm(o,a,t);md(o,g);break e}}o=o.return}while(o!==null)}dg(n)}catch(E){t=E,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(!0)}function cg(){var e=bs.current;return bs.current=Is,e===null?Is:e}function Fc(){(ae===0||ae===3||ae===2)&&(ae=4),ue===null||!(Bn&268435455)&&!(fa&268435455)||Zt(ue,me)}function Ns(e,t){var n=H;H|=2;var r=cg();(ue!==e||me!==t)&&(Ct=null,Dn(e,t));do try{tw();break}catch(i){ug(e,i)}while(!0);if(Sc(),H=n,bs.current=r,oe!==null)throw Error(I(261));return ue=null,me=0,ae}function tw(){for(;oe!==null;)fg(oe)}function nw(){for(;oe!==null&&!P0();)fg(oe)}function fg(e){var t=hg(e.alternate,e,ze);e.memoizedProps=e.pendingProps,t===null?dg(e):oe=t,Dc.current=null}function dg(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=J_(n,t),n!==null){n.flags&=32767,oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,oe=null;return}}else if(n=G_(n,t,ze),n!==null){oe=n;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);ae===0&&(ae=5)}function Pn(e,t,n){var r=W,i=Xe.transition;try{Xe.transition=null,W=1,rw(e,t,n,r)}finally{Xe.transition=i,W=r}return null}function rw(e,t,n,r){do Sr();while(on!==null);if(H&6)throw Error(I(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(I(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(U0(e,o),e===ue&&(oe=ue=null,me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Oo||(Oo=!0,mg(ps,function(){return Sr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Xe.transition,Xe.transition=null;var s=W;W=1;var a=H;H|=4,Dc.current=null,X_(e,n),sg(n,e),T_(Yl),ms=!!Xl,Yl=Xl=null,e.current=n,Y_(n),I0(),H=a,W=s,Xe.transition=o}else e.current=n;if(Oo&&(Oo=!1,on=e,Os=i),o=e.pendingLanes,o===0&&(dn=null),O0(n.stateNode),Me(e,ne()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Rs)throw Rs=!1,e=vu,vu=null,e;return Os&1&&e.tag!==0&&Sr(),o=e.pendingLanes,o&1?e===_u?vi++:(vi=0,_u=e):vi=0,En(),null}function Sr(){if(on!==null){var e=Kh(Os),t=Xe.transition,n=W;try{if(Xe.transition=null,W=16>e?16:e,on===null)var r=!1;else{if(e=on,on=null,Os=0,H&6)throw Error(I(331));var i=H;for(H|=4,O=e.current;O!==null;){var o=O,s=o.child;if(O.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(O=u;O!==null;){var c=O;switch(c.tag){case 0:case 11:case 15:gi(8,c,o)}var f=c.child;if(f!==null)f.return=c,O=f;else for(;O!==null;){c=O;var m=c.sibling,y=c.return;if(rg(c),c===u){O=null;break}if(m!==null){m.return=y,O=m;break}O=y}}}var w=o.alternate;if(w!==null){var _=w.child;if(_!==null){w.child=null;do{var S=_.sibling;_.sibling=null,_=S}while(_!==null)}}O=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,O=s;else e:for(;O!==null;){if(o=O,o.flags&2048)switch(o.tag){case 0:case 11:case 15:gi(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,O=d;break e}O=o.return}}var p=e.current;for(O=p;O!==null;){s=O;var h=s.child;if(s.subtreeFlags&2064&&h!==null)h.return=s,O=h;else e:for(s=p;O!==null;){if(a=O,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ca(9,a)}}catch(E){te(a,a.return,E)}if(a===s){O=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,O=g;break e}O=a.return}}if(H=i,En(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(na,e)}catch{}r=!0}return r}finally{W=n,Xe.transition=t}}return!1}function Md(e,t,n){t=Or(n,t),t=Km(e,t,1),e=fn(e,t,1),t=Ie(),e!==null&&(Gi(e,1,t),Me(e,t))}function te(e,t,n){if(e.tag===3)Md(e,e,n);else for(;t!==null;){if(t.tag===3){Md(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dn===null||!dn.has(r))){e=Or(n,e),e=qm(t,e,1),t=fn(t,e,1),e=Ie(),t!==null&&(Gi(t,1,e),Me(t,e));break}}t=t.return}}function iw(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ie(),e.pingedLanes|=e.suspendedLanes&n,ue===e&&(me&n)===n&&(ae===4||ae===3&&(me&130023424)===me&&500>ne()-Mc?Dn(e,0):Lc|=n),Me(e,t)}function pg(e,t){t===0&&(e.mode&1?(t=So,So<<=1,!(So&130023424)&&(So=4194304)):t=1);var n=Ie();e=Ft(e,t),e!==null&&(Gi(e,t,n),Me(e,n))}function ow(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),pg(e,n)}function sw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(t),pg(e,n)}var hg;hg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||De.current)Ae=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ae=!1,q_(e,t,n);Ae=!!(e.flags&131072)}else Ae=!1,X&&t.flags&1048576&&vm(t,Es,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ko(e,t),e=t.pendingProps;var i=Pr(t,Te.current);wr(t,n),i=bc(null,t,r,e,i,n);var o=Rc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Le(r)?(o=!0,ws(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,xc(t),i.updater=ua,t.stateNode=i,i._reactInternals=t,au(t,r,e,n),t=cu(null,t,r,!0,o,n)):(t.tag=0,X&&o&&yc(t),Ce(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ko(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=lw(r),e=ot(r,e),i){case 0:t=uu(null,t,r,e,n);break e;case 1:t=Cd(null,t,r,e,n);break e;case 11:t=xd(null,t,r,e,n);break e;case 14:t=kd(null,t,r,ot(r.type,e),n);break e}throw Error(I(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ot(r,i),uu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ot(r,i),Cd(e,t,r,i,n);case 3:e:{if(Xm(t),e===null)throw Error(I(387));r=t.pendingProps,o=t.memoizedState,i=o.element,xm(e,t),ks(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Or(Error(I(423)),t),t=Pd(e,t,r,n,i);break e}else if(r!==i){i=Or(Error(I(424)),t),t=Pd(e,t,r,n,i);break e}else for($e=cn(t.stateNode.containerInfo.firstChild),He=t,X=!0,at=null,n=Em(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ir(),r===i){t=zt(e,t,n);break e}Ce(e,t,r,n)}t=t.child}return t;case 5:return km(t),e===null&&iu(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Zl(r,i)?s=null:o!==null&&Zl(r,o)&&(t.flags|=32),Qm(e,t),Ce(e,t,s,n),t.child;case 6:return e===null&&iu(t),null;case 13:return Ym(e,t,n);case 4:return kc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=br(t,null,r,n):Ce(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ot(r,i),xd(e,t,r,i,n);case 7:return Ce(e,t,t.pendingProps,n),t.child;case 8:return Ce(e,t,t.pendingProps.children,n),t.child;case 12:return Ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,G(Ts,r._currentValue),r._currentValue=s,o!==null)if(pt(o.value,s)){if(o.children===i.children&&!De.current){t=zt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Lt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ou(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(I(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),ou(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Ce(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,wr(t,n),i=Ye(i),r=r(i),t.flags|=1,Ce(e,t,r,n),t.child;case 14:return r=t.type,i=ot(r,t.pendingProps),i=ot(r.type,i),kd(e,t,r,i,n);case 15:return Gm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ot(r,i),Ko(e,t),t.tag=1,Le(r)?(e=!0,ws(t)):e=!1,wr(t,n),Wm(t,r,i),au(t,r,i,n),cu(null,t,r,!0,e,n);case 19:return Zm(e,t,n);case 22:return Jm(e,t,n)}throw Error(I(156,t.tag))};function mg(e,t){return Bh(e,t)}function aw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qe(e,t,n,r){return new aw(e,t,n,r)}function zc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function lw(e){if(typeof e=="function")return zc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===oc)return 11;if(e===sc)return 14}return 2}function hn(e,t){var n=e.alternate;return n===null?(n=Qe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Jo(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")zc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case ir:return Ln(n.children,i,o,t);case ic:s=8,i|=8;break;case Ol:return e=Qe(12,n,t,i|2),e.elementType=Ol,e.lanes=o,e;case Nl:return e=Qe(13,n,t,i),e.elementType=Nl,e.lanes=o,e;case Al:return e=Qe(19,n,t,i),e.elementType=Al,e.lanes=o,e;case kh:return da(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Th:s=10;break e;case xh:s=9;break e;case oc:s=11;break e;case sc:s=14;break e;case Qt:s=16,r=null;break e}throw Error(I(130,e==null?e:typeof e,""))}return t=Qe(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Ln(e,t,n,r){return e=Qe(7,e,r,t),e.lanes=n,e}function da(e,t,n,r){return e=Qe(22,e,r,t),e.elementType=kh,e.lanes=n,e.stateNode={isHidden:!1},e}function ol(e,t,n){return e=Qe(6,e,null,t),e.lanes=n,e}function sl(e,t,n){return t=Qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function uw(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=za(0),this.expirationTimes=za(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=za(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function $c(e,t,n,r,i,o,s,a,l){return e=new uw(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Qe(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xc(o),e}function cw(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:rr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function gg(e){if(!e)return vn;e=e._reactInternals;e:{if(Xn(e)!==e||e.tag!==1)throw Error(I(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Le(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(I(171))}if(e.tag===1){var n=e.type;if(Le(n))return gm(e,n,t)}return t}function yg(e,t,n,r,i,o,s,a,l){return e=$c(n,r,!0,e,i,o,s,a,l),e.context=gg(null),n=e.current,r=Ie(),i=pn(n),o=Lt(r,i),o.callback=t??null,fn(n,o,i),e.current.lanes=i,Gi(e,i,r),Me(e,r),e}function pa(e,t,n,r){var i=t.current,o=Ie(),s=pn(i);return n=gg(n),t.context===null?t.context=n:t.pendingContext=n,t=Lt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=fn(i,t,s),e!==null&&(ft(e,i,s,o),Ho(e,i,s)),s}function As(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ud(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Bc(e,t){Ud(e,t),(e=e.alternate)&&Ud(e,t)}function fw(){return null}var vg=typeof reportError=="function"?reportError:function(e){console.error(e)};function Hc(e){this._internalRoot=e}ha.prototype.render=Hc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(I(409));pa(e,t,null,null)};ha.prototype.unmount=Hc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Hn(function(){pa(null,e,null,null)}),t[jt]=null}};function ha(e){this._internalRoot=e}ha.prototype.unstable_scheduleHydration=function(e){if(e){var t=Jh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Yt.length&&t!==0&&t<Yt[n].priority;n++);Yt.splice(n,0,e),n===0&&Xh(e)}};function Vc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ma(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function jd(){}function dw(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=As(s);o.call(u)}}var s=yg(t,r,e,0,null,!1,!1,"",jd);return e._reactRootContainer=s,e[jt]=s.current,Ii(e.nodeType===8?e.parentNode:e),Hn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=As(l);a.call(u)}}var l=$c(e,0,!1,null,null,!1,!1,"",jd);return e._reactRootContainer=l,e[jt]=l.current,Ii(e.nodeType===8?e.parentNode:e),Hn(function(){pa(t,l,n,r)}),l}function ga(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=As(s);a.call(l)}}pa(t,s,e,i)}else s=dw(n,t,e,i,r);return As(s)}qh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ai(t.pendingLanes);n!==0&&(uc(t,n|1),Me(t,ne()),!(H&6)&&(Nr=ne()+500,En()))}break;case 13:Hn(function(){var r=Ft(e,1);if(r!==null){var i=Ie();ft(r,e,1,i)}}),Bc(e,1)}};cc=function(e){if(e.tag===13){var t=Ft(e,134217728);if(t!==null){var n=Ie();ft(t,e,134217728,n)}Bc(e,134217728)}};Gh=function(e){if(e.tag===13){var t=pn(e),n=Ft(e,t);if(n!==null){var r=Ie();ft(n,e,t,r)}Bc(e,t)}};Jh=function(){return W};Qh=function(e,t){var n=W;try{return W=e,t()}finally{W=n}};Hl=function(e,t,n){switch(t){case"input":if(Ml(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=sa(r);if(!i)throw Error(I(90));Ph(r),Ml(r,i)}}}break;case"textarea":bh(e,n);break;case"select":t=n.value,t!=null&&gr(e,!!n.multiple,t,!1)}};Mh=Uc;Uh=Hn;var pw={usingClientEntryPoint:!1,Events:[Qi,lr,sa,Dh,Lh,Uc]},ri={findFiberByHostInstance:bn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hw={bundleType:ri.bundleType,version:ri.version,rendererPackageName:ri.rendererPackageName,rendererConfig:ri.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=zh(e),e===null?null:e.stateNode},findFiberByHostInstance:ri.findFiberByHostInstance||fw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var No=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!No.isDisabled&&No.supportsFiber)try{na=No.inject(hw),vt=No}catch{}}We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pw;We.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vc(t))throw Error(I(200));return cw(e,t,null,n)};We.createRoot=function(e,t){if(!Vc(e))throw Error(I(299));var n=!1,r="",i=vg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=$c(e,1,!1,null,null,n,!1,r,i),e[jt]=t.current,Ii(e.nodeType===8?e.parentNode:e),new Hc(t)};We.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(I(188)):(e=Object.keys(e).join(","),Error(I(268,e)));return e=zh(t),e=e===null?null:e.stateNode,e};We.flushSync=function(e){return Hn(e)};We.hydrate=function(e,t,n){if(!ma(t))throw Error(I(200));return ga(null,e,t,!0,n)};We.hydrateRoot=function(e,t,n){if(!Vc(e))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=vg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=yg(t,null,e,1,n??null,i,!1,o,s),e[jt]=t.current,Ii(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ha(t)};We.render=function(e,t,n){if(!ma(t))throw Error(I(200));return ga(null,e,t,!1,n)};We.unmountComponentAtNode=function(e){if(!ma(e))throw Error(I(40));return e._reactRootContainer?(Hn(function(){ga(null,null,e,!1,function(){e._reactRootContainer=null,e[jt]=null})}),!0):!1};We.unstable_batchedUpdates=Uc;We.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ma(n))throw Error(I(200));if(e==null||e._reactInternals===void 0)throw Error(I(38));return ga(e,t,n,!1,r)};We.version="18.3.1-next-f1338f8080-20240426";function _g(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_g)}catch(e){console.error(e)}}_g(),_h.exports=We;var mw=_h.exports,Fd=mw;bl.createRoot=Fd.createRoot,bl.hydrateRoot=Fd.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ui(){return Ui=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ui.apply(null,arguments)}var sn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(sn||(sn={}));const zd="popstate";function gw(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return Eu("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ds(i)}return vw(t,n,null,e)}function re(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function wg(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function yw(){return Math.random().toString(36).substr(2,8)}function $d(e,t){return{usr:e.state,key:e.key,idx:t}}function Eu(e,t,n,r){return n===void 0&&(n=null),Ui({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?$r(t):t,{state:n,key:t&&t.key||r||yw()})}function Ds(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function $r(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function vw(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=sn.Pop,l=null,u=c();u==null&&(u=0,s.replaceState(Ui({},s.state,{idx:u}),""));function c(){return(s.state||{idx:null}).idx}function f(){a=sn.Pop;let S=c(),d=S==null?null:S-u;u=S,l&&l({action:a,location:_.location,delta:d})}function m(S,d){a=sn.Push;let p=Eu(_.location,S,d);u=c()+1;let h=$d(p,u),g=_.createHref(p);try{s.pushState(h,"",g)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(g)}o&&l&&l({action:a,location:_.location,delta:1})}function y(S,d){a=sn.Replace;let p=Eu(_.location,S,d);u=c();let h=$d(p,u),g=_.createHref(p);s.replaceState(h,"",g),o&&l&&l({action:a,location:_.location,delta:0})}function w(S){let d=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof S=="string"?S:Ds(S);return p=p.replace(/ $/,"%20"),re(d,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,d)}let _={get action(){return a},get location(){return e(i,s)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(zd,f),l=S,()=>{i.removeEventListener(zd,f),l=null}},createHref(S){return t(i,S)},createURL:w,encodeLocation(S){let d=w(S);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:m,replace:y,go(S){return s.go(S)}};return _}var Bd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Bd||(Bd={}));function _w(e,t,n){return n===void 0&&(n="/"),ww(e,t,n)}function ww(e,t,n,r){let i=typeof t=="string"?$r(t):t,o=Wc(i.pathname||"/",n);if(o==null)return null;let s=Sg(e);Sw(s);let a=null,l=Aw(o);for(let u=0;a==null&&u<s.length;++u)a=Rw(s[u],l);return a}function Sg(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(re(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=mn([r,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(re(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Sg(o.children,t,c,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Iw(u,o.index),routesMeta:c})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of Eg(o.path))i(o,s,l)}),t}function Eg(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=Eg(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function Sw(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:bw(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Ew=/^:[\w-]+$/,Tw=3,xw=2,kw=1,Cw=10,Pw=-2,Hd=e=>e==="*";function Iw(e,t){let n=e.split("/"),r=n.length;return n.some(Hd)&&(r+=Pw),t&&(r+=xw),n.filter(i=>!Hd(i)).reduce((i,o)=>i+(Ew.test(o)?Tw:o===""?kw:Cw),r)}function bw(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Rw(e,t,n){let{routesMeta:r}=e,i={},o="/",s=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,c=o==="/"?t:t.slice(o.length)||"/",f=Ow({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),m=l.route;if(!f)return null;Object.assign(i,f.params),s.push({params:i,pathname:mn([o,f.pathname]),pathnameBase:Mw(mn([o,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(o=mn([o,f.pathnameBase]))}return s}function Ow(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Nw(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,f)=>{let{paramName:m,isOptional:y}=c;if(m==="*"){let _=a[f]||"";s=o.slice(0,o.length-_.length).replace(/(.)\/+$/,"$1")}const w=a[f];return y&&!w?u[m]=void 0:u[m]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:e}}function Nw(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),wg(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Aw(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return wg(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Wc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Dw(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?$r(e):e,o;return n?(n=Tg(n),n.startsWith("/")?o=Vd(n.substring(1),"/"):o=Vd(n,t)):o=t,{pathname:o,search:Uw(r),hash:jw(i)}}function Vd(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function al(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Lw(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Kc(e,t){let n=Lw(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function qc(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=$r(e):(i=Ui({},e),re(!i.pathname||!i.pathname.includes("?"),al("?","pathname","search",i)),re(!i.pathname||!i.pathname.includes("#"),al("#","pathname","hash",i)),re(!i.search||!i.search.includes("#"),al("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let f=t.length-1;if(!r&&s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}a=f>=0?t[f]:"/"}let l=Dw(i,a),u=s&&s!=="/"&&s.endsWith("/"),c=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Tg=e=>e.replace(/\/\/+/g,"/"),mn=e=>Tg(e.join("/")),Mw=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Uw=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,jw=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Fw(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const xg=["post","put","patch","delete"];new Set(xg);const zw=["get",...xg];new Set(zw);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ji(){return ji=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ji.apply(null,arguments)}const Gc=x.createContext(null),$w=x.createContext(null),Tn=x.createContext(null),ya=x.createContext(null),Kt=x.createContext({outlet:null,matches:[],isDataRoute:!1}),kg=x.createContext(null);function Bw(e,t){let{relative:n}=t===void 0?{}:t;Br()||re(!1);let{basename:r,navigator:i}=x.useContext(Tn),{hash:o,pathname:s,search:a}=Pg(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:mn([r,s])),i.createHref({pathname:l,search:a,hash:o})}function Br(){return x.useContext(ya)!=null}function Yi(){return Br()||re(!1),x.useContext(ya).location}function Cg(e){x.useContext(Tn).static||x.useLayoutEffect(e)}function Hr(){let{isDataRoute:e}=x.useContext(Kt);return e?rS():Hw()}function Hw(){Br()||re(!1);let e=x.useContext(Gc),{basename:t,future:n,navigator:r}=x.useContext(Tn),{matches:i}=x.useContext(Kt),{pathname:o}=Yi(),s=JSON.stringify(Kc(i,n.v7_relativeSplatPath)),a=x.useRef(!1);return Cg(()=>{a.current=!0}),x.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let f=qc(u,JSON.parse(s),o,c.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:mn([t,f.pathname])),(c.replace?r.replace:r.push)(f,c.state,c)},[t,r,s,o,e])}const Vw=x.createContext(null);function Ww(e){let t=x.useContext(Kt).outlet;return t&&x.createElement(Vw.Provider,{value:e},t)}function Pg(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=x.useContext(Tn),{matches:i}=x.useContext(Kt),{pathname:o}=Yi(),s=JSON.stringify(Kc(i,r.v7_relativeSplatPath));return x.useMemo(()=>qc(e,JSON.parse(s),o,n==="path"),[e,s,o,n])}function Kw(e,t){return qw(e,t)}function qw(e,t,n,r){Br()||re(!1);let{navigator:i}=x.useContext(Tn),{matches:o}=x.useContext(Kt),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=Yi(),c;if(t){var f;let S=typeof t=="string"?$r(t):t;l==="/"||(f=S.pathname)!=null&&f.startsWith(l)||re(!1),c=S}else c=u;let m=c.pathname||"/",y=m;if(l!=="/"){let S=l.replace(/^\//,"").split("/");y="/"+m.replace(/^\//,"").split("/").slice(S.length).join("/")}let w=_w(e,{pathname:y}),_=Yw(w&&w.map(S=>Object.assign({},S,{params:Object.assign({},a,S.params),pathname:mn([l,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?l:mn([l,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),o,n,r);return t&&_?x.createElement(ya.Provider,{value:{location:ji({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:sn.Pop}},_):_}function Gw(){let e=nS(),t=Fw(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:i},n):null,null)}const Jw=x.createElement(Gw,null);class Qw extends x.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?x.createElement(Kt.Provider,{value:this.props.routeContext},x.createElement(kg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Xw(e){let{routeContext:t,match:n,children:r}=e,i=x.useContext(Gc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(Kt.Provider,{value:t},r)}function Yw(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=s.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);c>=0||re(!1),s=s.slice(0,Math.min(s.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<s.length;c++){let f=s[c];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=c),f.route.id){let{loaderData:m,errors:y}=n,w=f.route.loader&&m[f.route.id]===void 0&&(!y||y[f.route.id]===void 0);if(f.route.lazy||w){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((c,f,m)=>{let y,w=!1,_=null,S=null;n&&(y=a&&f.route.id?a[f.route.id]:void 0,_=f.route.errorElement||Jw,l&&(u<0&&m===0?(iS("route-fallback"),w=!0,S=null):u===m&&(w=!0,S=f.route.hydrateFallbackElement||null)));let d=t.concat(s.slice(0,m+1)),p=()=>{let h;return y?h=_:w?h=S:f.route.Component?h=x.createElement(f.route.Component,null):f.route.element?h=f.route.element:h=c,x.createElement(Xw,{match:f,routeContext:{outlet:c,matches:d,isDataRoute:n!=null},children:h})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?x.createElement(Qw,{location:n.location,revalidation:n.revalidation,component:_,error:y,children:p(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):p()},null)}var Ig=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Ig||{}),bg=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(bg||{});function Zw(e){let t=x.useContext(Gc);return t||re(!1),t}function eS(e){let t=x.useContext($w);return t||re(!1),t}function tS(e){let t=x.useContext(Kt);return t||re(!1),t}function Rg(e){let t=tS(),n=t.matches[t.matches.length-1];return n.route.id||re(!1),n.route.id}function nS(){var e;let t=x.useContext(kg),n=eS(),r=Rg();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function rS(){let{router:e}=Zw(Ig.UseNavigateStable),t=Rg(bg.UseNavigateStable),n=x.useRef(!1);return Cg(()=>{n.current=!0}),x.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ji({fromRouteId:t},o)))},[e,t])}const Wd={};function iS(e,t,n){Wd[e]||(Wd[e]=!0)}function oS(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Og(e){let{to:t,replace:n,state:r,relative:i}=e;Br()||re(!1);let{future:o,static:s}=x.useContext(Tn),{matches:a}=x.useContext(Kt),{pathname:l}=Yi(),u=Hr(),c=qc(t,Kc(a,o.v7_relativeSplatPath),l,i==="path"),f=JSON.stringify(c);return x.useEffect(()=>u(JSON.parse(f),{replace:n,state:r,relative:i}),[u,f,i,n,r]),null}function Ng(e){return Ww(e.context)}function tr(e){re(!1)}function sS(e){let{basename:t="/",children:n=null,location:r,navigationType:i=sn.Pop,navigator:o,static:s=!1,future:a}=e;Br()&&re(!1);let l=t.replace(/^\/*/,"/"),u=x.useMemo(()=>({basename:l,navigator:o,static:s,future:ji({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=$r(r));let{pathname:c="/",search:f="",hash:m="",state:y=null,key:w="default"}=r,_=x.useMemo(()=>{let S=Wc(c,l);return S==null?null:{location:{pathname:S,search:f,hash:m,state:y,key:w},navigationType:i}},[l,c,f,m,y,w,i]);return _==null?null:x.createElement(Tn.Provider,{value:u},x.createElement(ya.Provider,{children:n,value:_}))}function aS(e){let{children:t,location:n}=e;return Kw(Tu(t),n)}new Promise(()=>{});function Tu(e,t){t===void 0&&(t=[]);let n=[];return x.Children.forEach(e,(r,i)=>{if(!x.isValidElement(r))return;let o=[...t,i];if(r.type===x.Fragment){n.push.apply(n,Tu(r.props.children,o));return}r.type!==tr&&re(!1),!r.props.index||!r.props.children||re(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Tu(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xu(){return xu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xu.apply(null,arguments)}function lS(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function uS(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function cS(e,t){return e.button===0&&(!t||t==="_self")&&!uS(e)}const fS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],dS="6";try{window.__reactRouterVersion=dS}catch{}const pS="startTransition",Kd=i0[pS];function hS(e){let{basename:t,children:n,future:r,window:i}=e,o=x.useRef();o.current==null&&(o.current=gw({window:i,v5Compat:!0}));let s=o.current,[a,l]=x.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},c=x.useCallback(f=>{u&&Kd?Kd(()=>l(f)):l(f)},[l,u]);return x.useLayoutEffect(()=>s.listen(c),[s,c]),x.useEffect(()=>oS(r),[r]),x.createElement(sS,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const mS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",gS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,mr=x.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:c,viewTransition:f}=t,m=lS(t,fS),{basename:y}=x.useContext(Tn),w,_=!1;if(typeof u=="string"&&gS.test(u)&&(w=u,mS))try{let h=new URL(window.location.href),g=u.startsWith("//")?new URL(h.protocol+u):new URL(u),E=Wc(g.pathname,y);g.origin===h.origin&&E!=null?u=E+g.search+g.hash:_=!0}catch{}let S=Bw(u,{relative:i}),d=yS(u,{replace:s,state:a,target:l,preventScrollReset:c,relative:i,viewTransition:f});function p(h){r&&r(h),h.defaultPrevented||d(h)}return x.createElement("a",xu({},m,{href:w||S,onClick:_||o?r:p,ref:n,target:l}))});var qd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(qd||(qd={}));var Gd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Gd||(Gd={}));function yS(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,viewTransition:a}=t===void 0?{}:t,l=Hr(),u=Yi(),c=Pg(e,{relative:s});return x.useCallback(f=>{if(cS(f,n)){f.preventDefault();let m=r!==void 0?r:Ds(u)===Ds(c);l(e,{replace:m,state:i,preventScrollReset:o,relative:s,viewTransition:a})}},[u,l,c,r,i,n,e,o,s,a])}var Ag={exports:{}},Dg={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zi=x;function vS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _S=typeof Object.is=="function"?Object.is:vS,wS=Zi.useSyncExternalStore,SS=Zi.useRef,ES=Zi.useEffect,TS=Zi.useMemo,xS=Zi.useDebugValue;Dg.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=SS(null);if(o.current===null){var s={hasValue:!1,value:null};o.current=s}else s=o.current;o=TS(function(){function l(y){if(!u){if(u=!0,c=y,y=r(y),i!==void 0&&s.hasValue){var w=s.value;if(i(w,y))return f=w}return f=y}if(w=f,_S(c,y))return w;var _=r(y);return i!==void 0&&i(w,_)?(c=y,w):(c=y,f=_)}var u=!1,c,f,m=n===void 0?null:n;return[function(){return l(t())},m===null?void 0:function(){return l(m())}]},[t,n,r,i]);var a=wS(e,o[0],o[1]);return ES(function(){s.hasValue=!0,s.value=a},[a]),xS(a),a};Ag.exports=Dg;var kS=Ag.exports;function CS(e){e()}function PS(){let e=null,t=null;return{clear(){e=null,t=null},notify(){CS(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=e;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=t={callback:n,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!r||e===null||(r=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var Jd={notify(){},get:()=>[]};function IS(e,t){let n,r=Jd,i=0,o=!1;function s(_){c();const S=r.subscribe(_);let d=!1;return()=>{d||(d=!0,S(),f())}}function a(){r.notify()}function l(){w.onStateChange&&w.onStateChange()}function u(){return o}function c(){i++,n||(n=e.subscribe(l),r=PS())}function f(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=Jd)}function m(){o||(o=!0,c())}function y(){o&&(o=!1,f())}const w={addNestedSub:s,notifyNestedSubs:a,handleChangeWrapper:l,isSubscribed:u,trySubscribe:m,tryUnsubscribe:y,getListeners:()=>r};return w}var bS=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",RS=bS(),OS=()=>typeof navigator<"u"&&navigator.product==="ReactNative",NS=OS(),AS=()=>RS||NS?x.useLayoutEffect:x.useEffect,DS=AS(),ll=Symbol.for("react-redux-context"),ul=typeof globalThis<"u"?globalThis:{};function LS(){if(!x.createContext)return{};const e=ul[ll]??(ul[ll]=new Map);let t=e.get(x.createContext);return t||(t=x.createContext(null),e.set(x.createContext,t)),t}var _n=LS();function MS(e){const{children:t,context:n,serverState:r,store:i}=e,o=x.useMemo(()=>{const l=IS(i);return{store:i,subscription:l,getServerState:r?()=>r:void 0}},[i,r]),s=x.useMemo(()=>i.getState(),[i]);DS(()=>{const{subscription:l}=o;return l.onStateChange=l.notifyNestedSubs,l.trySubscribe(),s!==i.getState()&&l.notifyNestedSubs(),()=>{l.tryUnsubscribe(),l.onStateChange=void 0}},[o,s]);const a=n||_n;return x.createElement(a.Provider,{value:o},t)}var US=MS;function Jc(e=_n){return function(){return x.useContext(e)}}var Lg=Jc();function Mg(e=_n){const t=e===_n?Lg:Jc(e),n=()=>{const{store:r}=t();return r};return Object.assign(n,{withTypes:()=>n}),n}var jS=Mg();function FS(e=_n){const t=e===_n?jS:Mg(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var Qc=FS(),zS=(e,t)=>e===t;function $S(e=_n){const t=e===_n?Lg:Jc(e),n=(r,i={})=>{const{equalityFn:o=zS}=typeof i=="function"?{equalityFn:i}:i,s=t(),{store:a,subscription:l,getServerState:u}=s;x.useRef(!0);const c=x.useCallback({[r.name](m){return r(m)}}[r.name],[r]),f=kS.useSyncExternalStoreWithSelector(l.addNestedSub,a.getState,u||a.getState,c,o);return x.useDebugValue(f),f};return Object.assign(n,{withTypes:()=>n}),n}var eo=$S();function Qo(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Qo=function(n){return typeof n}:Qo=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Qo(e)}function BS(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function HS(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function VS(e,t,n){return t&&HS(e.prototype,t),e}function WS(e,t){return t&&(Qo(t)==="object"||typeof t=="function")?t:Xo(e)}function ku(e){return ku=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},ku(e)}function Xo(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function KS(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Cu(e,t)}function Cu(e,t){return Cu=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Cu(e,t)}function Yo(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ug=function(e){KS(t,e);function t(){var n,r;BS(this,t);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return r=WS(this,(n=ku(t)).call.apply(n,[this].concat(o))),Yo(Xo(r),"state",{bootstrapped:!1}),Yo(Xo(r),"_unsubscribe",void 0),Yo(Xo(r),"handlePersistorState",function(){var a=r.props.persistor,l=a.getState(),u=l.bootstrapped;u&&(r.props.onBeforeLift?Promise.resolve(r.props.onBeforeLift()).finally(function(){return r.setState({bootstrapped:!0})}):r.setState({bootstrapped:!0}),r._unsubscribe&&r._unsubscribe())}),r}return VS(t,[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return typeof this.props.children=="function"?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}]),t}(x.PureComponent);Yo(Ug,"defaultProps",{children:null,loading:null});function de(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var qS=typeof Symbol=="function"&&Symbol.observable||"@@observable",Qd=qS,cl=()=>Math.random().toString(36).substring(7).split("").join("."),GS={INIT:`@@redux/INIT${cl()}`,REPLACE:`@@redux/REPLACE${cl()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${cl()}`},Ls=GS;function Xc(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function Yc(e,t,n){if(typeof e!="function")throw new Error(de(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(de(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(de(1));return n(Yc)(e,t)}let r=e,i=t,o=new Map,s=o,a=0,l=!1;function u(){s===o&&(s=new Map,o.forEach((S,d)=>{s.set(d,S)}))}function c(){if(l)throw new Error(de(3));return i}function f(S){if(typeof S!="function")throw new Error(de(4));if(l)throw new Error(de(5));let d=!0;u();const p=a++;return s.set(p,S),function(){if(d){if(l)throw new Error(de(6));d=!1,u(),s.delete(p),o=null}}}function m(S){if(!Xc(S))throw new Error(de(7));if(typeof S.type>"u")throw new Error(de(8));if(typeof S.type!="string")throw new Error(de(17));if(l)throw new Error(de(9));try{l=!0,i=r(i,S)}finally{l=!1}return(o=s).forEach(p=>{p()}),S}function y(S){if(typeof S!="function")throw new Error(de(10));r=S,m({type:Ls.REPLACE})}function w(){const S=f;return{subscribe(d){if(typeof d!="object"||d===null)throw new Error(de(11));function p(){const g=d;g.next&&g.next(c())}return p(),{unsubscribe:S(p)}},[Qd](){return this}}}return m({type:Ls.INIT}),{dispatch:m,subscribe:f,getState:c,replaceReducer:y,[Qd]:w}}function JS(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:Ls.INIT})>"u")throw new Error(de(12));if(typeof n(void 0,{type:Ls.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(de(13))})}function jg(e){const t=Object.keys(e),n={};for(let o=0;o<t.length;o++){const s=t[o];typeof e[s]=="function"&&(n[s]=e[s])}const r=Object.keys(n);let i;try{JS(n)}catch(o){i=o}return function(s={},a){if(i)throw i;let l=!1;const u={};for(let c=0;c<r.length;c++){const f=r[c],m=n[f],y=s[f],w=m(y,a);if(typeof w>"u")throw a&&a.type,new Error(de(14));u[f]=w,l=l||w!==y}return l=l||r.length!==Object.keys(s).length,l?u:s}}function Ms(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...r)=>t(n(...r)))}function QS(...e){return t=>(n,r)=>{const i=t(n,r);let o=()=>{throw new Error(de(15))};const s={getState:i.getState,dispatch:(l,...u)=>o(l,...u)},a=e.map(l=>l(s));return o=Ms(...a)(i.dispatch),{...i,dispatch:o}}}function XS(e){return Xc(e)&&"type"in e&&typeof e.type=="string"}var Fg=Symbol.for("immer-nothing"),Xd=Symbol.for("immer-draftable"),xe=Symbol.for("immer-state");function lt(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Be=Object,Ar=Be.getPrototypeOf,Us="constructor",va="prototype",Pu="configurable",js="enumerable",Zo="writable",Fi="value",$t=e=>!!e&&!!e[xe];function et(e){var t;return e?zg(e)||wa(e)||!!e[Xd]||!!((t=e[Us])!=null&&t[Xd])||Sa(e)||Ea(e):!1}var YS=Be[va][Us].toString(),Yd=new WeakMap;function zg(e){if(!e||!Zc(e))return!1;const t=Ar(e);if(t===null||t===Be[va])return!0;const n=Be.hasOwnProperty.call(t,Us)&&t[Us];if(n===Object)return!0;if(!nr(n))return!1;let r=Yd.get(n);return r===void 0&&(r=Function.toString.call(n),Yd.set(n,r)),r===YS}function _a(e,t,n=!0){to(e)===0?(n?Reflect.ownKeys(e):Be.keys(e)).forEach(i=>{t(i,e[i],e)}):e.forEach((r,i)=>t(i,r,e))}function to(e){const t=e[xe];return t?t.type_:wa(e)?1:Sa(e)?2:Ea(e)?3:0}var fl=(e,t,n=to(e))=>n===2?e.has(t):Be[va].hasOwnProperty.call(e,t),Iu=(e,t,n=to(e))=>n===2?e.get(t):e[t],Fs=(e,t,n,r=to(e))=>{r===2?e.set(t,n):r===3?e.add(n):e[t]=n};function ZS(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}var wa=Array.isArray,Sa=e=>e instanceof Map,Ea=e=>e instanceof Set,Zc=e=>typeof e=="object",nr=e=>typeof e=="function",dl=e=>typeof e=="boolean";function e1(e){const t=+e;return Number.isInteger(t)&&String(t)===e}var It=e=>e.copy_||e.base_,ef=e=>e.modified_?e.copy_:e.base_;function bu(e,t){if(Sa(e))return new Map(e);if(Ea(e))return new Set(e);if(wa(e))return Array[va].slice.call(e);const n=zg(e);if(t===!0||t==="class_only"&&!n){const r=Be.getOwnPropertyDescriptors(e);delete r[xe];let i=Reflect.ownKeys(r);for(let o=0;o<i.length;o++){const s=i[o],a=r[s];a[Zo]===!1&&(a[Zo]=!0,a[Pu]=!0),(a.get||a.set)&&(r[s]={[Pu]:!0,[Zo]:!0,[js]:a[js],[Fi]:e[s]})}return Be.create(Ar(e),r)}else{const r=Ar(e);if(r!==null&&n)return{...e};const i=Be.create(r);return Be.assign(i,e)}}function tf(e,t=!1){return Ta(e)||$t(e)||!et(e)||(to(e)>1&&Be.defineProperties(e,{set:Ao,add:Ao,clear:Ao,delete:Ao}),Be.freeze(e),t&&_a(e,(n,r)=>{tf(r,!0)},!1)),e}function t1(){lt(2)}var Ao={[Fi]:t1};function Ta(e){return e===null||!Zc(e)?!0:Be.isFrozen(e)}var zs="MapSet",Ru="Patches",Zd="ArrayMethods",$g={};function Vn(e){const t=$g[e];return t||lt(0,e),t}var ep=e=>!!$g[e],zi,Bg=()=>zi,n1=(e,t)=>({drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:ep(zs)?Vn(zs):void 0,arrayMethodsPlugin_:ep(Zd)?Vn(Zd):void 0});function tp(e,t){t&&(e.patchPlugin_=Vn(Ru),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Ou(e){Nu(e),e.drafts_.forEach(r1),e.drafts_=null}function Nu(e){e===zi&&(zi=e.parent_)}var np=e=>zi=n1(zi,e);function r1(e){const t=e[xe];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function rp(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];if(e!==void 0&&e!==n){n[xe].modified_&&(Ou(t),lt(4)),et(e)&&(e=ip(t,e));const{patchPlugin_:i}=t;i&&i.generateReplacementPatches_(n[xe].base_,e,t)}else e=ip(t,n);return i1(t,e,!0),Ou(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==Fg?e:void 0}function ip(e,t){if(Ta(t))return t;const n=t[xe];if(!n)return $s(t,e.handledSet_,e);if(!xa(n,e))return t;if(!n.modified_)return n.base_;if(!n.finalized_){const{callbacks_:r}=n;if(r)for(;r.length>0;)r.pop()(e);Wg(n,e)}return n.copy_}function i1(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&tf(t,n)}function Hg(e){e.finalized_=!0,e.scope_.unfinalizedDrafts_--}var xa=(e,t)=>e.scope_===t,o1=[];function Vg(e,t,n,r){const i=It(e),o=e.type_;if(r!==void 0&&Iu(i,r,o)===t){Fs(i,r,n,o);return}if(!e.draftLocations_){const a=e.draftLocations_=new Map;_a(i,(l,u)=>{if($t(u)){const c=a.get(u)||[];c.push(l),a.set(u,c)}})}const s=e.draftLocations_.get(t)??o1;for(const a of s)Fs(i,a,n,o)}function s1(e,t,n){e.callbacks_.push(function(i){var a;const o=t;if(!o||!xa(o,i))return;(a=i.mapSetPlugin_)==null||a.fixSetContents(o);const s=ef(o);Vg(e,o.draft_??o,s,n),Wg(o,i)})}function Wg(e,t){var r;if(e.modified_&&!e.finalized_&&(e.type_===3||e.type_===1&&e.allIndicesReassigned_||(((r=e.assigned_)==null?void 0:r.size)??0)>0)){const{patchPlugin_:i}=t;if(i){const o=i.getPath(e);o&&i.generatePatches_(e,o,t)}Hg(e)}}function a1(e,t,n){const{scope_:r}=e;if($t(n)){const i=n[xe];xa(i,r)&&i.callbacks_.push(function(){es(e);const s=ef(i);Vg(e,n,s,t)})}else et(n)&&e.callbacks_.push(function(){const o=It(e);e.type_===3?o.has(n)&&$s(n,r.handledSet_,r):Iu(o,t,e.type_)===n&&r.drafts_.length>1&&(e.assigned_.get(t)??!1)===!0&&e.copy_&&$s(Iu(e.copy_,t,e.type_),r.handledSet_,r)})}function $s(e,t,n){return!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1||$t(e)||t.has(e)||!et(e)||Ta(e)||(t.add(e),_a(e,(r,i)=>{if($t(i)){const o=i[xe];if(xa(o,n)){const s=ef(o);Fs(e,r,s,e.type_),Hg(o)}}else et(i)&&$s(i,t,n)})),e}function l1(e,t){const n=wa(e),r={type_:n?1:0,scope_:t?t.scope_:Bg(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0};let i=r,o=Bs;n&&(i=[r],o=$i);const{revoke:s,proxy:a}=Proxy.revocable(i,o);return r.draft_=a,r.revoke_=s,[a,r]}var Bs={get(e,t){if(t===xe)return e;let n=e.scope_.arrayMethodsPlugin_;const r=e.type_===1&&typeof t=="string";if(r&&n!=null&&n.isArrayOperationMethod(t))return n.createMethodInterceptor(e,t);const i=It(e);if(!fl(i,t,e.type_))return c1(e,i,t);const o=i[t];if(e.finalized_||!et(o)||r&&e.operationMethod&&(n!=null&&n.isMutatingArrayMethod(e.operationMethod))&&e1(t))return o;if(o===pl(e.base_,t)||u1(e,t,o)){es(e);const s=e.type_===1?+t:t,a=Du(e.scope_,o,e,s);return e.copy_[s]=a}return o},has(e,t){return t in It(e)},ownKeys(e){return Reflect.ownKeys(It(e))},set(e,t,n){const r=Kg(It(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const i=pl(It(e),t),o=i==null?void 0:i[xe];if(o&&o.base_===n)return e.copy_[t]=n,e.assigned_.set(t,!1),!0;if(ZS(n,i)&&(n!==void 0||fl(e.base_,t,e.type_)))return!0;es(e),Au(e)}return e.copy_[t]===n&&(n!==void 0||fl(e.copy_,t,e.type_))||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_.set(t,!0),a1(e,t,n)),!0},deleteProperty(e,t){return es(e),pl(e.base_,t)!==void 0||t in e.base_?(e.assigned_.set(t,!1),Au(e)):e.assigned_.delete(t),e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=It(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{[Zo]:!0,[Pu]:e.type_!==1||t!=="length",[js]:r[js],[Fi]:n[t]}},defineProperty(){lt(11)},getPrototypeOf(e){return Ar(e.base_)},setPrototypeOf(){lt(12)}},$i={};for(let e in Bs){let t=Bs[e];$i[e]=function(){const n=arguments;return n[0]=n[0][0],t.apply(this,n)}}$i.deleteProperty=function(e,t){return $i.set.call(this,e,t,void 0)};$i.set=function(e,t,n){return Bs.set.call(this,e[0],t,n,e[0])};function pl(e,t){const n=e[xe];return(n?It(n):e)[t]}function u1(e,t,n){var r;return e.type_!==1||!e.allIndicesReassigned_||(r=e.assigned_)!=null&&r.get(t)||!et(n)||n[xe]?!1:e.baseRefs_.has(n)}function c1(e,t,n){var i;const r=Kg(t,n);return r?Fi in r?r[Fi]:(i=r.get)==null?void 0:i.call(e.draft_):void 0}function Kg(e,t){if(!(t in e))return;let n=Ar(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Ar(n)}}function Au(e){e.modified_||(e.modified_=!0,e.parent_&&Au(e.parent_))}function es(e){e.copy_||(e.assigned_=new Map,e.copy_=bu(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var f1=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(t,n,r)=>{if(nr(t)&&!nr(n)){const o=n;n=t;const s=this;return function(l=o,...u){return s.produce(l,c=>n.call(this,c,...u))}}nr(n)||lt(6),r!==void 0&&!nr(r)&&lt(7);let i;if(et(t)){const o=np(this),s=Du(o,t,void 0);let a=!0;try{i=n(s),a=!1}finally{a?Ou(o):Nu(o)}return tp(o,r),rp(i,o)}else if(!t||!Zc(t)){if(i=n(t),i===void 0&&(i=t),i===Fg&&(i=void 0),this.autoFreeze_&&tf(i,!0),r){const o=[],s=[];Vn(Ru).generateReplacementPatches_(t,i,{patches_:o,inversePatches_:s}),r(o,s)}return i}else lt(1,t)},this.produceWithPatches=(t,n)=>{if(nr(t))return(s,...a)=>this.produceWithPatches(s,l=>t(l,...a));let r,i;return[this.produce(t,n,(s,a)=>{r=s,i=a}),r,i]},dl(e==null?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),dl(e==null?void 0:e.useStrictShallowCopy)&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),dl(e==null?void 0:e.useStrictIteration)&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){et(e)||lt(8),$t(e)&&(e=d1(e));const t=np(this),n=Du(t,e,void 0);return n[xe].isManual_=!0,Nu(t),n}finishDraft(e,t){const n=e&&e[xe];(!n||!n.isManual_)&&lt(9);const{scope_:r}=n;return tp(r,t),rp(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const i=t[n];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}n>-1&&(t=t.slice(n+1));const r=Vn(Ru).applyPatches_;return $t(e)?r(e,t):this.produce(e,i=>r(i,t))}};function Du(e,t,n,r){const[i,o]=Sa(t)?Vn(zs).proxyMap_(t,n):Ea(t)?Vn(zs).proxySet_(t,n):l1(t,n);return((n==null?void 0:n.scope_)??Bg()).drafts_.push(i),o.callbacks_=(n==null?void 0:n.callbacks_)??[],o.key_=r,n&&r!==void 0?s1(n,o,r):o.callbacks_.push(function(l){var c;(c=l.mapSetPlugin_)==null||c.fixSetContents(o);const{patchPlugin_:u}=l;o.modified_&&u&&u.generatePatches_(o,[],l)}),i}function d1(e){return $t(e)||lt(10,e),qg(e)}function qg(e){if(!et(e)||Ta(e))return e;const t=e[xe];let n,r=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=bu(e,t.scope_.immer_.useStrictShallowCopy_),r=t.scope_.immer_.shouldUseStrictIteration()}else n=bu(e,!0);return _a(n,(i,o)=>{Fs(n,i,qg(o))},r),t&&(t.finalized_=!1),n}var hl=globalThis.Iterator;hl==null||hl.from;var p1=new f1,Gg=p1.produce;function Jg(e){return({dispatch:n,getState:r})=>i=>o=>typeof o=="function"?o(n,r,e):i(o)}var h1=Jg(),m1=Jg,g1=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Ms:Ms.apply(null,arguments)};function op(e,t){function n(...r){if(t){let i=t(...r);if(!i)throw new Error(Mt(0));return{type:e,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:e,payload:r[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=r=>XS(r)&&r.type===e,n}var Qg=class ui extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,ui.prototype)}static get[Symbol.species](){return ui}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new ui(...t[0].concat(this)):new ui(...t.concat(this))}};function sp(e){return et(e)?Gg(e,()=>{}):e}function Do(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function y1(e){return typeof e=="boolean"}var v1=()=>function(t){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:o=!0}=t??{};let s=new Qg;return n&&(y1(n)?s.push(h1):s.push(m1(n.extraArgument))),s},_1="RTK_autoBatch",ap=e=>t=>{setTimeout(t,e)},w1=(e,t)=>n=>{let r=!1;const i=()=>{r||(r=!0,cancelAnimationFrame(o),clearTimeout(s),n())},o=e(i),s=setTimeout(i,t)},S1=(e={type:"raf"})=>t=>(...n)=>{const r=t(...n);let i=!0,o=!1,s=!1;const a=new Set,l=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?w1(window.requestAnimationFrame,100):ap(10):e.type==="callback"?e.queueNotification:ap(e.timeout),u=()=>{s=!1,o&&(o=!1,a.forEach(c=>c()))};return Object.assign({},r,{subscribe(c){const f=()=>i&&c(),m=r.subscribe(f);return a.add(c),()=>{m(),a.delete(c)}},dispatch(c){var f;try{return i=!((f=c==null?void 0:c.meta)!=null&&f[_1]),o=!i,o&&(s||(s=!0,l(u))),r.dispatch(c)}finally{i=!0}}})},E1=e=>function(n){const{autoBatch:r=!0}=n??{};let i=new Qg(e);return r&&i.push(S1(typeof r=="object"?r:void 0)),i};function T1(e){const t=v1(),{reducer:n=void 0,middleware:r,devTools:i=!0,preloadedState:o=void 0,enhancers:s=void 0}=e||{};let a;if(typeof n=="function")a=n;else if(Xc(n))a=jg(n);else throw new Error(Mt(1));let l;typeof r=="function"?l=r(t):l=t();let u=Ms;i&&(u=g1({trace:!1,...typeof i=="object"&&i}));const c=QS(...l),f=E1(c);let m=typeof s=="function"?s(f):f();const y=u(...m);return Yc(a,o,y)}function Xg(e){const t={},n=[];let r;const i={addCase(o,s){const a=typeof o=="string"?o:o.type;if(!a)throw new Error(Mt(28));if(a in t)throw new Error(Mt(29));return t[a]=s,i},addAsyncThunk(o,s){return s.pending&&(t[o.pending.type]=s.pending),s.rejected&&(t[o.rejected.type]=s.rejected),s.fulfilled&&(t[o.fulfilled.type]=s.fulfilled),s.settled&&n.push({matcher:o.settled,reducer:s.settled}),i},addMatcher(o,s){return n.push({matcher:o,reducer:s}),i},addDefaultCase(o){return r=o,i}};return e(i),[t,n,r]}function x1(e){return typeof e=="function"}function k1(e,t){let[n,r,i]=Xg(t),o;if(x1(e))o=()=>sp(e());else{const a=sp(e);o=()=>a}function s(a=o(),l){let u=[n[l.type],...r.filter(({matcher:c})=>c(l)).map(({reducer:c})=>c)];return u.filter(c=>!!c).length===0&&(u=[i]),u.reduce((c,f)=>{if(f)if($t(c)){const y=f(c,l);return y===void 0?c:y}else{if(et(c))return Gg(c,m=>f(m,l));{const m=f(c,l);if(m===void 0){if(c===null)return c;throw Error("A case reducer on a non-draftable value must not return undefined")}return m}}return c},a)}return s.getInitialState=o,s}var C1=Symbol.for("rtk-slice-createasyncthunk");function P1(e,t){return`${e}/${t}`}function I1({creators:e}={}){var n;const t=(n=e==null?void 0:e.asyncThunk)==null?void 0:n[C1];return function(i){const{name:o,reducerPath:s=o}=i;if(!o)throw new Error(Mt(11));const a=(typeof i.reducers=="function"?i.reducers(O1()):i.reducers)||{},l=Object.keys(a),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},c={addCase(g,E){const T=typeof g=="string"?g:g.type;if(!T)throw new Error(Mt(12));if(T in u.sliceCaseReducersByType)throw new Error(Mt(13));return u.sliceCaseReducersByType[T]=E,c},addMatcher(g,E){return u.sliceMatchers.push({matcher:g,reducer:E}),c},exposeAction(g,E){return u.actionCreators[g]=E,c},exposeCaseReducer(g,E){return u.sliceCaseReducersByName[g]=E,c}};l.forEach(g=>{const E=a[g],T={reducerName:g,type:P1(o,g),createNotation:typeof i.reducers=="function"};A1(E)?L1(T,E,c,t):N1(T,E,c)});function f(){const[g={},E=[],T=void 0]=typeof i.extraReducers=="function"?Xg(i.extraReducers):[i.extraReducers],k={...g,...u.sliceCaseReducersByType};return k1(i.initialState,P=>{for(let N in k)P.addCase(N,k[N]);for(let N of u.sliceMatchers)P.addMatcher(N.matcher,N.reducer);for(let N of E)P.addMatcher(N.matcher,N.reducer);T&&P.addDefaultCase(T)})}const m=g=>g,y=new Map,w=new WeakMap;let _;function S(g,E){return _||(_=f()),_(g,E)}function d(){return _||(_=f()),_.getInitialState()}function p(g,E=!1){function T(P){let N=P[g];return typeof N>"u"&&E&&(N=Do(w,T,d)),N}function k(P=m){const N=Do(y,E,()=>new WeakMap);return Do(N,P,()=>{const A={};for(const[V,ce]of Object.entries(i.selectors??{}))A[V]=b1(ce,P,()=>Do(w,P,d),E);return A})}return{reducerPath:g,getSelectors:k,get selectors(){return k(T)},selectSlice:T}}const h={name:o,reducer:S,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:d,...p(s),injectInto(g,{reducerPath:E,...T}={}){const k=E??s;return g.inject({reducerPath:k,reducer:S},T),{...h,...p(k,!0)}}};return h}}function b1(e,t,n,r){function i(o,...s){let a=t(o);return typeof a>"u"&&r&&(a=n()),e(a,...s)}return i.unwrapped=e,i}var R1=I1();function O1(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function N1({type:e,reducerName:t,createNotation:n},r,i){let o,s;if("reducer"in r){if(n&&!D1(r))throw new Error(Mt(17));o=r.reducer,s=r.prepare}else o=r;i.addCase(e,o).exposeCaseReducer(t,o).exposeAction(t,s?op(e,s):op(e))}function A1(e){return e._reducerDefinitionType==="asyncThunk"}function D1(e){return e._reducerDefinitionType==="reducerWithPrepare"}function L1({type:e,reducerName:t},n,r,i){if(!i)throw new Error(Mt(18));const{payloadCreator:o,fulfilled:s,pending:a,rejected:l,settled:u,options:c}=n,f=i(e,o,c);r.exposeAction(t,f),s&&r.addCase(f.fulfilled,s),a&&r.addCase(f.pending,a),l&&r.addCase(f.rejected,l),u&&r.addMatcher(f.settled,u),r.exposeCaseReducer(t,{fulfilled:s||Lo,pending:a||Lo,rejected:l||Lo,settled:u||Lo})}function Lo(){}function Mt(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const M1={currentUser:null,error:null,isLoading:!1},Yg=R1({name:"user",initialState:M1,reducers:{signInStart:e=>{e.isLoading=!0,e.error=null},signInSuccess:(e,t)=>{e.currentUser=t.payload,e.error=null,e.isLoading=!1},signInFailure:(e,t)=>{e.error=t.payload,e.isLoading=!1},signOutSuccess:e=>{e.currentUser=null,e.error=null,e.isLoading=!1}}}),{signInStart:Zg,signInSuccess:ey,signInFailure:ty,signOutSuccess:U1}=Yg.actions,j1=Yg.reducer;var nf={},rf={};rf.__esModule=!0;rf.default=$1;function ts(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ts=function(n){return typeof n}:ts=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ts(e)}function ml(){}var F1={getItem:ml,setItem:ml,removeItem:ml};function z1(e){if((typeof self>"u"?"undefined":ts(self))!=="object"||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch{return!1}return!0}function $1(e){var t="".concat(e,"Storage");return z1(t)?self[t]:F1}nf.__esModule=!0;nf.default=V1;var B1=H1(rf);function H1(e){return e&&e.__esModule?e:{default:e}}function V1(e){var t=(0,B1.default)(e);return{getItem:function(r){return new Promise(function(i,o){i(t.getItem(r))})},setItem:function(r,i){return new Promise(function(o,s){o(t.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,o){i(t.removeItem(r))})}}}var ny=void 0,W1=K1(nf);function K1(e){return e&&e.__esModule?e:{default:e}}var q1=(0,W1.default)("local");ny=q1;var of="persist:",ry="persist/FLUSH",sf="persist/REHYDRATE",iy="persist/PAUSE",oy="persist/PERSIST",sy="persist/PURGE",ay="persist/REGISTER",G1=-1;function ns(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ns=function(n){return typeof n}:ns=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ns(e)}function lp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function J1(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?lp(n,!0).forEach(function(r){Q1(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):lp(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Q1(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function X1(e,t,n,r){r.debug;var i=J1({},n);return e&&ns(e)==="object"&&Object.keys(e).forEach(function(o){o!=="_persist"&&t[o]===n[o]&&(i[o]=e[o])}),i}function Y1(e){var t=e.blacklist||null,n=e.whitelist||null,r=e.transforms||[],i=e.throttle||0,o="".concat(e.keyPrefix!==void 0?e.keyPrefix:of).concat(e.key),s=e.storage,a;e.serialize===!1?a=function(E){return E}:typeof e.serialize=="function"?a=e.serialize:a=Z1;var l=e.writeFailHandler||null,u={},c={},f=[],m=null,y=null,w=function(E){Object.keys(E).forEach(function(T){d(T)&&u[T]!==E[T]&&f.indexOf(T)===-1&&f.push(T)}),Object.keys(u).forEach(function(T){E[T]===void 0&&d(T)&&f.indexOf(T)===-1&&u[T]!==void 0&&f.push(T)}),m===null&&(m=setInterval(_,i)),u=E};function _(){if(f.length===0){m&&clearInterval(m),m=null;return}var g=f.shift(),E=r.reduce(function(T,k){return k.in(T,g,u)},u[g]);if(E!==void 0)try{c[g]=a(E)}catch(T){console.error("redux-persist/createPersistoid: error serializing state",T)}else delete c[g];f.length===0&&S()}function S(){Object.keys(c).forEach(function(g){u[g]===void 0&&delete c[g]}),y=s.setItem(o,a(c)).catch(p)}function d(g){return!(n&&n.indexOf(g)===-1&&g!=="_persist"||t&&t.indexOf(g)!==-1)}function p(g){l&&l(g)}var h=function(){for(;f.length!==0;)_();return y||Promise.resolve()};return{update:w,flush:h}}function Z1(e){return JSON.stringify(e)}function eE(e){var t=e.transforms||[],n="".concat(e.keyPrefix!==void 0?e.keyPrefix:of).concat(e.key),r=e.storage;e.debug;var i;return e.deserialize===!1?i=function(s){return s}:typeof e.deserialize=="function"?i=e.deserialize:i=tE,r.getItem(n).then(function(o){if(o)try{var s={},a=i(o);return Object.keys(a).forEach(function(l){s[l]=t.reduceRight(function(u,c){return c.out(u,l,a)},i(a[l]))}),s}catch(l){throw l}else return})}function tE(e){return JSON.parse(e)}function nE(e){var t=e.storage,n="".concat(e.keyPrefix!==void 0?e.keyPrefix:of).concat(e.key);return t.removeItem(n,rE)}function rE(e){}function up(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function kt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?up(n,!0).forEach(function(r){iE(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):up(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function iE(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function oE(e,t){if(e==null)return{};var n=sE(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function sE(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var aE=5e3;function lE(e,t){var n=e.version!==void 0?e.version:G1;e.debug;var r=e.stateReconciler===void 0?X1:e.stateReconciler,i=e.getStoredState||eE,o=e.timeout!==void 0?e.timeout:aE,s=null,a=!1,l=!0,u=function(f){return f._persist.rehydrated&&s&&!l&&s.update(f),f};return function(c,f){var m=c||{},y=m._persist,w=oE(m,["_persist"]),_=w;if(f.type===oy){var S=!1,d=function(P,N){S||(f.rehydrate(e.key,P,N),S=!0)};if(o&&setTimeout(function(){!S&&d(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},o),l=!1,s||(s=Y1(e)),y)return kt({},t(_,f),{_persist:y});if(typeof f.rehydrate!="function"||typeof f.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return f.register(e.key),i(e).then(function(k){var P=e.migrate||function(N,A){return Promise.resolve(N)};P(k,n).then(function(N){d(N)},function(N){d(void 0,N)})},function(k){d(void 0,k)}),kt({},t(_,f),{_persist:{version:n,rehydrated:!1}})}else{if(f.type===sy)return a=!0,f.result(nE(e)),kt({},t(_,f),{_persist:y});if(f.type===ry)return f.result(s&&s.flush()),kt({},t(_,f),{_persist:y});if(f.type===iy)l=!0;else if(f.type===sf){if(a)return kt({},_,{_persist:kt({},y,{rehydrated:!0})});if(f.key===e.key){var p=t(_,f),h=f.payload,g=r!==!1&&h!==void 0?r(h,c,p,e):p,E=kt({},g,{_persist:kt({},y,{rehydrated:!0})});return u(E)}}}if(!y)return t(c,f);var T=t(_,f);return T===_?c:u(kt({},T,{_persist:y}))}}function cp(e){return fE(e)||cE(e)||uE()}function uE(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function cE(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function fE(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function fp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Lu(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?fp(n,!0).forEach(function(r){dE(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fp(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function dE(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ly={registry:[],bootstrapped:!1},pE=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:ly,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case ay:return Lu({},t,{registry:[].concat(cp(t.registry),[n.key])});case sf:var r=t.registry.indexOf(n.key),i=cp(t.registry);return i.splice(r,1),Lu({},t,{registry:i,bootstrapped:i.length===0});default:return t}};function hE(e,t,n){var r=Yc(pE,ly,void 0),i=function(l){r.dispatch({type:ay,key:l})},o=function(l,u,c){var f={type:sf,payload:u,err:c,key:l};e.dispatch(f),r.dispatch(f)},s=Lu({},r,{purge:function(){var l=[];return e.dispatch({type:sy,result:function(c){l.push(c)}}),Promise.all(l)},flush:function(){var l=[];return e.dispatch({type:ry,result:function(c){l.push(c)}}),Promise.all(l)},pause:function(){e.dispatch({type:iy})},persist:function(){e.dispatch({type:oy,register:i,rehydrate:o})}});return s.persist(),s}const mE=jg({user:j1}),gE={key:"root",storage:ny,version:1},yE=lE(gE,mE),uy=T1({reducer:yE,middleware:e=>e({serializableCheck:!1})}),vE=hE(uy);function cy(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=cy(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Mn(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=cy(e))&&(r&&(r+=" "),r+=t);return r}var no=e=>typeof e=="number"&&!isNaN(e),Wn=e=>typeof e=="string",Bt=e=>typeof e=="function",_E=e=>Wn(e)||no(e),Mu=e=>Wn(e)||Bt(e)?e:null,wE=(e,t)=>e===!1||no(e)&&e>0?e:t,Uu=e=>x.isValidElement(e)||Wn(e)||Bt(e)||no(e);function SE(e,t,n=300){let{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,n)})})}function EE({enter:e,exit:t,appendPosition:n=!1,collapse:r=!0,collapseDuration:i=300}){return function({children:o,position:s,preventExitTransition:a,done:l,nodeRef:u,isIn:c,playToast:f}){let m=n?`${e}--${s}`:e,y=n?`${t}--${s}`:t,w=x.useRef(0);return x.useLayoutEffect(()=>{let _=u.current,S=m.split(" "),d=p=>{p.target===u.current&&(f(),_.removeEventListener("animationend",d),_.removeEventListener("animationcancel",d),w.current===0&&p.type!=="animationcancel"&&_.classList.remove(...S))};_.classList.add(...S),_.addEventListener("animationend",d),_.addEventListener("animationcancel",d)},[]),x.useEffect(()=>{let _=u.current,S=()=>{_.removeEventListener("animationend",S),r?SE(_,l,i):l()};c||(a?S():(w.current=1,_.className+=` ${y}`,_.addEventListener("animationend",S)))},[c]),B.createElement(B.Fragment,null,o)}}function dp(e,t){return{content:fy(e.content,e.props),containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,reason:e.removalReason,status:t}}function fy(e,t,n=!1){return x.isValidElement(e)&&!Wn(e.type)?x.cloneElement(e,{closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):Bt(e)?e({closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):e}function TE({closeToast:e,theme:t,ariaLabel:n="close"}){return B.createElement("button",{className:`Toastify__close-button Toastify__close-button--${t}`,type:"button",onClick:r=>{r.stopPropagation(),e(!0)},"aria-label":n},B.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},B.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function xE({delay:e,isRunning:t,closeToast:n,type:r="default",hide:i,className:o,controlledProgress:s,progress:a,rtl:l,isIn:u,theme:c}){let f=i||s&&a===0,m={animationDuration:`${e}ms`,animationPlayState:t?"running":"paused"};s&&(m.transform=`scaleX(${a})`);let y=Mn("Toastify__progress-bar",s?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${c}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":l}),w=Bt(o)?o({rtl:l,type:r,defaultClassName:y}):Mn(y,o),_={[s&&a>=1?"onTransitionEnd":"onAnimationEnd"]:s&&a<1?null:()=>{u&&n()}};return B.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":f},B.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${c} Toastify__progress-bar--${r}`}),B.createElement("div",{role:"progressbar","aria-hidden":f?"true":"false","aria-label":"notification timer","aria-valuenow":s?Math.round(a*100):void 0,"aria-valuemin":0,"aria-valuemax":100,className:w,style:m,..._}))}var kE=1,dy=()=>`${kE++}`;function CE(e,t,n){let r=1,i=0,o=[],s=[],a=t,l=new Map,u=new Set,c=p=>(u.add(p),()=>u.delete(p)),f=()=>{s=Array.from(l.values()),u.forEach(p=>p())},m=({containerId:p,toastId:h,updateId:g})=>{let E=p?p!==e:e!==1,T=l.has(h)&&g==null;return E||T},y=(p,h)=>{l.forEach(g=>{var E;(h==null||h===g.props.toastId)&&((E=g.toggle)==null||E.call(g,p))})},w=p=>{var h,g;p.isActive&&((g=(h=p.props)==null?void 0:h.onClose)==null||g.call(h,p.removalReason),p.isActive=!1,n(dp(p,"removed")))},_=p=>{if(p==null)l.forEach(w);else{let h=l.get(p);h&&w(h)}f()},S=()=>{i-=o.length,o=[]},d=p=>{var h,g;let{toastId:E,updateId:T}=p.props,k=T==null;p.staleId&&l.delete(p.staleId),p.isActive=!0,l.set(E,p),f(),n(dp(p,k?"added":"updated")),k&&((g=(h=p.props).onOpen)==null||g.call(h))};return{id:e,props:a,observe:c,toggle:y,removeToast:_,toasts:l,clearQueue:S,buildToast:(p,h)=>{if(m(h))return;let{toastId:g,updateId:E,data:T,staleId:k,delay:P}=h,N=E==null;N&&i++;let A={...a,style:a.toastStyle,key:r++,...Object.fromEntries(Object.entries(h).filter(([ce,ye])=>ye!=null)),toastId:g,updateId:E,data:T,isIn:!1,className:Mu(h.className||a.toastClassName),progressClassName:Mu(h.progressClassName||a.progressClassName),autoClose:h.isLoading?!1:wE(h.autoClose,a.autoClose),closeToast(ce){let ye=l.get(g);ye&&(ye.removalReason=ce,_(g))},deleteToast(){if(l.get(g)!=null){if(l.delete(g),i--,i<0&&(i=0),o.length>0){d(o.shift());return}f()}}};A.closeButton=a.closeButton,h.closeButton===!1||Uu(h.closeButton)?A.closeButton=h.closeButton:h.closeButton===!0&&(A.closeButton=Uu(a.closeButton)?a.closeButton:!0);let V={content:p,props:A,staleId:k};a.limit&&a.limit>0&&i>a.limit&&N?o.push(V):no(P)?setTimeout(()=>{d(V)},P):d(V)},setProps(p){a=p},setToggle:(p,h)=>{let g=l.get(p);g&&(g.toggle=h)},isToastActive:p=>{var h;return(h=l.get(p))==null?void 0:h.isActive},getSnapshot:()=>s}}var Pe=new Map,Bi=[],ju=new Set,PE=e=>ju.forEach(t=>t(e)),py=()=>Pe.size>0;function IE(){Bi.forEach(e=>my(e.content,e.options)),Bi=[]}var bE=(e,{containerId:t})=>{var n;return(n=Pe.get(t||1))==null?void 0:n.toasts.get(e)};function hy(e,t){var n;if(t)return!!((n=Pe.get(t))!=null&&n.isToastActive(e));let r=!1;return Pe.forEach(i=>{i.isToastActive(e)&&(r=!0)}),r}function RE(e){if(!py()){Bi=Bi.filter(t=>e!=null&&t.options.toastId!==e);return}if(e==null||_E(e))Pe.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){let t=Pe.get(e.containerId);t?t.removeToast(e.id):Pe.forEach(n=>{n.removeToast(e.id)})}}var OE=(e={})=>{Pe.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})};function my(e,t){Uu(e)&&(py()||Bi.push({content:e,options:t}),Pe.forEach(n=>{n.buildToast(e,t)}))}function NE(e){var t;(t=Pe.get(e.containerId||1))==null||t.setToggle(e.id,e.fn)}function gy(e,t){Pe.forEach(n=>{(t==null||!(t!=null&&t.containerId)||(t==null?void 0:t.containerId)===n.id)&&n.toggle(e,t==null?void 0:t.id)})}function AE(e){let t=e.containerId||1;return{subscribe(n){let r=CE(t,e,PE);Pe.set(t,r);let i=r.observe(n);return IE(),()=>{i(),Pe.delete(t)}},setProps(n){var r;(r=Pe.get(t))==null||r.setProps(n)},getSnapshot(){var n;return(n=Pe.get(t))==null?void 0:n.getSnapshot()}}}function DE(e){return ju.add(e),()=>{ju.delete(e)}}function LE(e){return e&&(Wn(e.toastId)||no(e.toastId))?e.toastId:dy()}function ro(e,t){return my(e,t),t.toastId}function ka(e,t){return{...t,type:t&&t.type||e,toastId:LE(t)}}function Ca(e){return(t,n)=>ro(t,ka(e,n))}function $(e,t){return ro(e,ka("default",t))}$.loading=(e,t)=>ro(e,ka("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function ME(e,{pending:t,error:n,success:r},i){let o;t&&(o=Wn(t)?$.loading(t,i):$.loading(t.render,{...i,...t}));let s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},a=(u,c,f)=>{if(c==null){$.dismiss(o);return}let m={type:u,...s,...i,data:f},y=Wn(c)?{render:c}:c;return o?$.update(o,{...m,...y}):$(y.render,{...m,...y}),f},l=Bt(e)?e():e;return l.then(u=>a("success",r,u)).catch(u=>a("error",n,u)),l}$.promise=ME;$.success=Ca("success");$.info=Ca("info");$.error=Ca("error");$.warning=Ca("warning");$.warn=$.warning;$.dark=(e,t)=>ro(e,ka("default",{theme:"dark",...t}));function UE(e){RE(e)}$.dismiss=UE;$.clearWaitingQueue=OE;$.isActive=hy;$.update=(e,t={})=>{let n=bE(e,t);if(n){let{props:r,content:i}=n,o={delay:100,...r,...t,toastId:t.toastId||e,updateId:dy()};o.toastId!==e&&(o.staleId=e);let s=o.render||i;delete o.render,ro(s,o)}};$.done=e=>{$.update(e,{progress:1})};$.onChange=DE;$.play=e=>gy(!0,e);$.pause=e=>gy(!1,e);function jE(e){var t;let{subscribe:n,getSnapshot:r,setProps:i}=x.useRef(AE(e)).current;i(e);let o=(t=x.useSyncExternalStore(n,r,r))==null?void 0:t.slice();function s(a){if(!o)return[];let l=new Map;return e.newestOnTop&&o.reverse(),o.forEach(u=>{let{position:c}=u.props;l.has(c)||l.set(c,[]),l.get(c).push(u)}),Array.from(l,u=>a(u[0],u[1]))}return{getToastToRender:s,isToastActive:hy,count:o==null?void 0:o.length}}function FE(e){let[t,n]=x.useState(!1),[r,i]=x.useState(!1),o=x.useRef(null),s=x.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:a,pauseOnHover:l,closeToast:u,onClick:c,closeOnClick:f}=e;NE({id:e.toastId,containerId:e.containerId,fn:n}),x.useEffect(()=>{if(e.pauseOnFocusLoss)return m(),()=>{y()}},[e.pauseOnFocusLoss]);function m(){document.hasFocus()||d(),window.addEventListener("focus",S),window.addEventListener("blur",d)}function y(){window.removeEventListener("focus",S),window.removeEventListener("blur",d)}function w(k){if(e.draggable===!0||e.draggable===k.pointerType){p();let P=o.current;s.canCloseOnClick=!0,s.canDrag=!0,P.style.transition="none",e.draggableDirection==="x"?(s.start=k.clientX,s.removalDistance=P.offsetWidth*(e.draggablePercent/100)):(s.start=k.clientY,s.removalDistance=P.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent)/100)}}function _(k){let{top:P,bottom:N,left:A,right:V}=o.current.getBoundingClientRect();k.pointerType==="mouse"&&e.pauseOnHover&&k.clientX>=A&&k.clientX<=V&&k.clientY>=P&&k.clientY<=N?d():S()}function S(){n(!0)}function d(){n(!1)}function p(){s.didMove=!1,document.addEventListener("pointermove",g),document.addEventListener("pointerup",E)}function h(){document.removeEventListener("pointermove",g),document.removeEventListener("pointerup",E)}function g(k){let P=o.current;if(s.canDrag&&P){s.didMove=!0,t&&d(),e.draggableDirection==="x"?s.delta=k.clientX-s.start:s.delta=k.clientY-s.start,s.start!==k.clientX&&(s.canCloseOnClick=!1);let N=e.draggableDirection==="x"?`${s.delta}px, var(--y)`:`0, calc(${s.delta}px + var(--y))`;P.style.transform=`translate3d(${N},0)`,P.style.opacity=`${1-Math.abs(s.delta/s.removalDistance)}`}}function E(){h();let k=o.current;if(s.canDrag&&s.didMove&&k){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance){i(!0),e.closeToast(!0),e.collapseAll();return}k.style.transition="transform 0.2s, opacity 0.2s",k.style.removeProperty("transform"),k.style.removeProperty("opacity")}}let T={onPointerDown:w,onPointerUp:_};return a&&l&&(T.onMouseEnter=d,e.stacked||(T.onMouseLeave=S)),f&&(T.onClick=k=>{c&&c(k),s.canCloseOnClick&&u(!0)}),{playToast:S,pauseToast:d,isRunning:t,preventExitTransition:r,toastRef:o,eventHandlers:T}}var yy=typeof window<"u"?x.useLayoutEffect:x.useEffect,Pa=({theme:e,type:t,isLoading:n,...r})=>B.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${t})`,...r});function zE(e){return B.createElement(Pa,{...e},B.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function $E(e){return B.createElement(Pa,{...e},B.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function BE(e){return B.createElement(Pa,{...e},B.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function HE(e){return B.createElement(Pa,{...e},B.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function VE(){return B.createElement("div",{className:"Toastify__spinner"})}var Fu={info:$E,warning:zE,success:BE,error:HE,spinner:VE},WE=e=>e in Fu;function KE({theme:e,type:t,isLoading:n,icon:r}){let i=null,o={theme:e,type:t};return r===!1||(Bt(r)?i=r({...o,isLoading:n}):x.isValidElement(r)?i=x.cloneElement(r,o):n?i=Fu.spinner():WE(t)&&(i=Fu[t](o))),i}var qE=e=>{let{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:o}=FE(e),{closeButton:s,children:a,autoClose:l,onClick:u,type:c,hideProgressBar:f,closeToast:m,transition:y,position:w,className:_,style:S,progressClassName:d,updateId:p,role:h,progress:g,rtl:E,toastId:T,deleteToast:k,isIn:P,isLoading:N,closeOnClick:A,theme:V,ariaLabel:ce}=e,ye=Mn("Toastify__toast",`Toastify__toast-theme--${V}`,`Toastify__toast--${c}`,{"Toastify__toast--rtl":E},{"Toastify__toast--close-on-click":A}),ke=Bt(_)?_({rtl:E,position:w,type:c,defaultClassName:ye}):Mn(ye,_),Et=KE(e),qe=!!g||!l,nt={closeToast:m,type:c,theme:V},R=null;return s===!1||(Bt(s)?R=s(nt):x.isValidElement(s)?R=x.cloneElement(s,nt):R=TE(nt)),B.createElement(y,{isIn:P,done:k,position:w,preventExitTransition:n,nodeRef:r,playToast:o},B.createElement("div",{id:T,tabIndex:0,onClick:u,"data-in":P,className:ke,...i,style:S,ref:r,...P&&{role:h,"aria-label":ce}},Et!=null&&B.createElement("div",{className:Mn("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!N})},Et),fy(a,e,!t),R,!e.customProgressBar&&B.createElement(xE,{...p&&!qe?{key:`p-${p}`}:{},rtl:E,theme:V,delay:l,isRunning:t,isIn:P,closeToast:m,hide:f,type:c,className:d,controlledProgress:qe,progress:g||0})))},GE=(e,t=!1)=>({enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}),JE=EE(GE("bounce",!0)),QE={position:"top-right",transition:JE,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:e=>e.altKey&&e.code==="KeyT"};function XE(e){let t={...QE,...e},n=e.stacked,[r,i]=x.useState(!0),o=x.useRef(null),{getToastToRender:s,isToastActive:a,count:l}=jE(t),{className:u,style:c,rtl:f,containerId:m,hotKeys:y}=t;function w(S){let d=Mn("Toastify__toast-container",`Toastify__toast-container--${S}`,{"Toastify__toast-container--rtl":f});return Bt(u)?u({position:S,rtl:f,defaultClassName:d}):Mn(d,Mu(u))}function _(){n&&(i(!0),$.play())}return yy(()=>{var S;if(n){let d=o.current.querySelectorAll('[data-in="true"]'),p=12,h=(S=t.position)==null?void 0:S.includes("top"),g=0,E=0;Array.from(d).reverse().forEach((T,k)=>{let P=T;P.classList.add("Toastify__toast--stacked"),k>0&&(P.dataset.collapsed=`${r}`),P.dataset.pos||(P.dataset.pos=h?"top":"bot");let N=g*(r?.2:1)+(r?0:p*k),A=Math.max(.5,1-(r?E:0));P.style.setProperty("--y",`${h?N:N*-1}px`),P.style.setProperty("--g",`${p}`),P.style.setProperty("--s",`${A}`),g+=P.offsetHeight,E+=.025})}},[r,l,n]),x.useEffect(()=>{function S(d){var p;let h=o.current;y(d)&&((p=h==null?void 0:h.querySelector('[tabIndex="0"]'))==null||p.focus(),i(!1),$.pause()),d.key==="Escape"&&(document.activeElement===h||h!=null&&h.contains(document.activeElement))&&(i(!0),$.play())}return document.addEventListener("keydown",S),()=>{document.removeEventListener("keydown",S)}},[y]),B.createElement("section",{ref:o,className:"Toastify",id:m,onMouseEnter:()=>{n&&(i(!1),$.pause())},onMouseLeave:_,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":t["aria-label"]},s((S,d)=>{let p=d.length?{...c}:{...c,pointerEvents:"none"};return B.createElement("div",{tabIndex:-1,className:w(S),"data-stacked":n,style:p,key:`c-${S}`},d.map(({content:h,props:g})=>B.createElement(qE,{...g,stacked:n,collapseAll:_,isIn:a(g.toastId,g.containerId),key:`t-${g.key}`},h)))}))}var YE=`:root {
  --toastify-color-light: #fff;
  --toastify-color-dark: #121212;
  --toastify-color-info: #3498db;
  --toastify-color-success: #07bc0c;
  --toastify-color-warning: #f1c40f;
  --toastify-color-error: hsl(6, 78%, 57%);
  --toastify-color-transparent: rgba(255, 255, 255, 0.7);

  --toastify-icon-color-info: var(--toastify-color-info);
  --toastify-icon-color-success: var(--toastify-color-success);
  --toastify-icon-color-warning: var(--toastify-color-warning);
  --toastify-icon-color-error: var(--toastify-color-error);

  --toastify-container-width: fit-content;
  --toastify-toast-width: 320px;
  --toastify-toast-offset: 16px;
  --toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));
  --toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));
  --toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));
  --toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));
  --toastify-toast-background: #fff;
  --toastify-toast-padding: 14px;
  --toastify-toast-min-height: 64px;
  --toastify-toast-max-height: 800px;
  --toastify-toast-bd-radius: 6px;
  --toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  --toastify-font-family: sans-serif;
  --toastify-z-index: 9999;
  --toastify-text-color-light: #757575;
  --toastify-text-color-dark: #fff;

  /* Used only for colored theme */
  --toastify-text-color-info: #fff;
  --toastify-text-color-success: #fff;
  --toastify-text-color-warning: #fff;
  --toastify-text-color-error: #fff;

  --toastify-spinner-color: #616161;
  --toastify-spinner-color-empty-area: #e0e0e0;
  --toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);
  --toastify-color-progress-dark: #bb86fc;
  --toastify-color-progress-info: var(--toastify-color-info);
  --toastify-color-progress-success: var(--toastify-color-success);
  --toastify-color-progress-warning: var(--toastify-color-warning);
  --toastify-color-progress-error: var(--toastify-color-error);
  /* used to control the opacity of the progress trail */
  --toastify-color-progress-bgo: 0.2;
}

.Toastify__toast-container {
  z-index: var(--toastify-z-index);
  -webkit-transform: translate3d(0, 0, var(--toastify-z-index));
  position: fixed;
  width: var(--toastify-container-width);
  box-sizing: border-box;
  color: #fff;
  display: flex;
  flex-direction: column;
}

.Toastify__toast-container--top-left {
  top: var(--toastify-toast-top);
  left: var(--toastify-toast-left);
}
.Toastify__toast-container--top-center {
  top: var(--toastify-toast-top);
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}
.Toastify__toast-container--top-right {
  top: var(--toastify-toast-top);
  right: var(--toastify-toast-right);
  align-items: end;
}
.Toastify__toast-container--bottom-left {
  bottom: var(--toastify-toast-bottom);
  left: var(--toastify-toast-left);
}
.Toastify__toast-container--bottom-center {
  bottom: var(--toastify-toast-bottom);
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}
.Toastify__toast-container--bottom-right {
  bottom: var(--toastify-toast-bottom);
  right: var(--toastify-toast-right);
  align-items: end;
}

.Toastify__toast {
  --y: 0px;
  position: relative;
  touch-action: none;
  width: var(--toastify-toast-width);
  min-height: var(--toastify-toast-min-height);
  box-sizing: border-box;
  margin-bottom: 1rem;
  padding: var(--toastify-toast-padding);
  border-radius: var(--toastify-toast-bd-radius);
  box-shadow: var(--toastify-toast-shadow);
  max-height: var(--toastify-toast-max-height);
  font-family: var(--toastify-font-family);
  /* webkit only issue #791 */
  z-index: 0;
  /* inner swag */
  display: flex;
  flex: 1 auto;
  align-items: center;
  word-break: break-word;
}

@media only screen and (max-width: 480px) {
  .Toastify__toast-container {
    width: 100vw;
    left: env(safe-area-inset-left);
    margin: 0;
  }
  .Toastify__toast-container--top-left,
  .Toastify__toast-container--top-center,
  .Toastify__toast-container--top-right {
    top: env(safe-area-inset-top);
    transform: translateX(0);
  }
  .Toastify__toast-container--bottom-left,
  .Toastify__toast-container--bottom-center,
  .Toastify__toast-container--bottom-right {
    bottom: env(safe-area-inset-bottom);
    transform: translateX(0);
  }
  .Toastify__toast-container--rtl {
    right: env(safe-area-inset-right);
    left: initial;
  }
  .Toastify__toast {
    --toastify-toast-width: 100%;
    margin-bottom: 0;
    border-radius: 0;
  }
}

.Toastify__toast-container[data-stacked='true'] {
  width: var(--toastify-toast-width);
}

@media only screen and (max-width: 480px) {
  .Toastify__toast-container[data-stacked='true'] {
    width: 100vw;
  }
}

.Toastify__toast--stacked {
  position: absolute;
  width: 100%;
  transform: translate3d(0, var(--y), 0) scale(var(--s));
  transition: transform 0.3s;
}

.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,
.Toastify__toast--stacked[data-collapsed] .Toastify__close-button {
  transition: opacity 0.1s;
}

.Toastify__toast--stacked[data-collapsed='false'] {
  overflow: visible;
}

.Toastify__toast--stacked[data-collapsed='true']:not(:last-child) > * {
  opacity: 0;
}

.Toastify__toast--stacked:after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: calc(var(--g) * 1px);
  bottom: 100%;
}

.Toastify__toast--stacked[data-pos='top'] {
  top: 0;
}

.Toastify__toast--stacked[data-pos='bot'] {
  bottom: 0;
}

.Toastify__toast--stacked[data-pos='bot'].Toastify__toast--stacked:before {
  transform-origin: top;
}

.Toastify__toast--stacked[data-pos='top'].Toastify__toast--stacked:before {
  transform-origin: bottom;
}

.Toastify__toast--stacked:before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  transform: scaleY(3);
  z-index: -1;
}

.Toastify__toast--rtl {
  direction: rtl;
}

.Toastify__toast--close-on-click {
  cursor: pointer;
}

.Toastify__toast-icon {
  margin-inline-end: 10px;
  width: 22px;
  flex-shrink: 0;
  display: flex;
}

.Toastify--animate {
  animation-fill-mode: both;
  animation-duration: 0.5s;
}

.Toastify--animate-icon {
  animation-fill-mode: both;
  animation-duration: 0.3s;
}

.Toastify__toast-theme--dark {
  background: var(--toastify-color-dark);
  color: var(--toastify-text-color-dark);
}

.Toastify__toast-theme--light {
  background: var(--toastify-color-light);
  color: var(--toastify-text-color-light);
}

.Toastify__toast-theme--colored.Toastify__toast--default {
  background: var(--toastify-color-light);
  color: var(--toastify-text-color-light);
}

.Toastify__toast-theme--colored.Toastify__toast--info {
  color: var(--toastify-text-color-info);
  background: var(--toastify-color-info);
}

.Toastify__toast-theme--colored.Toastify__toast--success {
  color: var(--toastify-text-color-success);
  background: var(--toastify-color-success);
}

.Toastify__toast-theme--colored.Toastify__toast--warning {
  color: var(--toastify-text-color-warning);
  background: var(--toastify-color-warning);
}

.Toastify__toast-theme--colored.Toastify__toast--error {
  color: var(--toastify-text-color-error);
  background: var(--toastify-color-error);
}

.Toastify__progress-bar-theme--light {
  background: var(--toastify-color-progress-light);
}

.Toastify__progress-bar-theme--dark {
  background: var(--toastify-color-progress-dark);
}

.Toastify__progress-bar--info {
  background: var(--toastify-color-progress-info);
}

.Toastify__progress-bar--success {
  background: var(--toastify-color-progress-success);
}

.Toastify__progress-bar--warning {
  background: var(--toastify-color-progress-warning);
}

.Toastify__progress-bar--error {
  background: var(--toastify-color-progress-error);
}

.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error {
  background: var(--toastify-color-transparent);
}

.Toastify__close-button {
  color: #fff;
  position: absolute;
  top: 6px;
  right: 6px;
  background: transparent;
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;
  opacity: 0.7;
  transition: 0.3s ease;
  z-index: 1;
}

.Toastify__toast--rtl .Toastify__close-button {
  left: 6px;
  right: unset;
}

.Toastify__close-button--light {
  color: #000;
  opacity: 0.3;
}

.Toastify__close-button > svg {
  fill: currentColor;
  height: 16px;
  width: 14px;
}

.Toastify__close-button:hover,
.Toastify__close-button:focus {
  opacity: 1;
}

@keyframes Toastify__trackProgress {
  0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
}

.Toastify__progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.7;
  transform-origin: left;
}

.Toastify__progress-bar--animated {
  animation: Toastify__trackProgress linear 1 forwards;
}

.Toastify__progress-bar--controlled {
  transition: transform 0.2s;
}

.Toastify__progress-bar--rtl {
  right: 0;
  left: initial;
  transform-origin: right;
  border-bottom-left-radius: initial;
}

.Toastify__progress-bar--wrp {
  position: absolute;
  overflow: hidden;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  border-bottom-left-radius: var(--toastify-toast-bd-radius);
  border-bottom-right-radius: var(--toastify-toast-bd-radius);
}

.Toastify__progress-bar--wrp[data-hidden='true'] {
  opacity: 0;
}

.Toastify__progress-bar--bg {
  opacity: var(--toastify-color-progress-bgo);
  width: 100%;
  height: 100%;
}

.Toastify__spinner {
  width: 20px;
  height: 20px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: var(--toastify-spinner-color-empty-area);
  border-right-color: var(--toastify-spinner-color);
  animation: Toastify__spin 0.65s linear infinite;
}

@keyframes Toastify__bounceInRight {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0);
  }
  75% {
    transform: translate3d(10px, 0, 0);
  }
  90% {
    transform: translate3d(-5px, 0, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutRight {
  20% {
    opacity: 1;
    transform: translate3d(-20px, var(--y), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(2000px, var(--y), 0);
  }
}

@keyframes Toastify__bounceInLeft {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0);
  }
  75% {
    transform: translate3d(-10px, 0, 0);
  }
  90% {
    transform: translate3d(5px, 0, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutLeft {
  20% {
    opacity: 1;
    transform: translate3d(20px, var(--y), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(-2000px, var(--y), 0);
  }
}

@keyframes Toastify__bounceInUp {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
  }
  75% {
    transform: translate3d(0, 10px, 0);
  }
  90% {
    transform: translate3d(0, -5px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes Toastify__bounceOutUp {
  20% {
    transform: translate3d(0, calc(var(--y) - 10px), 0);
  }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, calc(var(--y) + 20px), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
}

@keyframes Toastify__bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0);
  }
  75% {
    transform: translate3d(0, -10px, 0);
  }
  90% {
    transform: translate3d(0, 5px, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutDown {
  20% {
    transform: translate3d(0, calc(var(--y) - 10px), 0);
  }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, calc(var(--y) + 20px), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
}

.Toastify__bounce-enter--top-left,
.Toastify__bounce-enter--bottom-left {
  animation-name: Toastify__bounceInLeft;
}

.Toastify__bounce-enter--top-right,
.Toastify__bounce-enter--bottom-right {
  animation-name: Toastify__bounceInRight;
}

.Toastify__bounce-enter--top-center {
  animation-name: Toastify__bounceInDown;
}

.Toastify__bounce-enter--bottom-center {
  animation-name: Toastify__bounceInUp;
}

.Toastify__bounce-exit--top-left,
.Toastify__bounce-exit--bottom-left {
  animation-name: Toastify__bounceOutLeft;
}

.Toastify__bounce-exit--top-right,
.Toastify__bounce-exit--bottom-right {
  animation-name: Toastify__bounceOutRight;
}

.Toastify__bounce-exit--top-center {
  animation-name: Toastify__bounceOutUp;
}

.Toastify__bounce-exit--bottom-center {
  animation-name: Toastify__bounceOutDown;
}

@keyframes Toastify__zoomIn {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}

@keyframes Toastify__zoomOut {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0;
    transform: translate3d(0, var(--y), 0) scale3d(0.3, 0.3, 0.3);
  }
  to {
    opacity: 0;
  }
}

.Toastify__zoom-enter {
  animation-name: Toastify__zoomIn;
}

.Toastify__zoom-exit {
  animation-name: Toastify__zoomOut;
}

@keyframes Toastify__flipIn {
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }
  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }
  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }
  to {
    transform: perspective(400px);
  }
}

@keyframes Toastify__flipOut {
  from {
    transform: translate3d(0, var(--y), 0) perspective(400px);
  }
  30% {
    transform: translate3d(0, var(--y), 0) perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }
  to {
    transform: translate3d(0, var(--y), 0) perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}

.Toastify__flip-enter {
  animation-name: Toastify__flipIn;
}

.Toastify__flip-exit {
  animation-name: Toastify__flipOut;
}

@keyframes Toastify__slideInRight {
  from {
    transform: translate3d(110%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInLeft {
  from {
    transform: translate3d(-110%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInUp {
  from {
    transform: translate3d(0, 110%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInDown {
  from {
    transform: translate3d(0, -110%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideOutRight {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(110%, var(--y), 0);
  }
}

@keyframes Toastify__slideOutLeft {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(-110%, var(--y), 0);
  }
}

@keyframes Toastify__slideOutDown {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, 500px, 0);
  }
}

@keyframes Toastify__slideOutUp {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, -500px, 0);
  }
}

.Toastify__slide-enter--top-left,
.Toastify__slide-enter--bottom-left {
  animation-name: Toastify__slideInLeft;
}

.Toastify__slide-enter--top-right,
.Toastify__slide-enter--bottom-right {
  animation-name: Toastify__slideInRight;
}

.Toastify__slide-enter--top-center {
  animation-name: Toastify__slideInDown;
}

.Toastify__slide-enter--bottom-center {
  animation-name: Toastify__slideInUp;
}

.Toastify__slide-exit--top-left,
.Toastify__slide-exit--bottom-left {
  animation-name: Toastify__slideOutLeft;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--top-right,
.Toastify__slide-exit--bottom-right {
  animation-name: Toastify__slideOutRight;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--top-center {
  animation-name: Toastify__slideOutUp;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--bottom-center {
  animation-name: Toastify__slideOutDown;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

@keyframes Toastify__spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`,pp=new Map,ZE=(e,t)=>{yy(()=>{if(typeof document>"u")return;let n=document,r=pp.get(n);if(r){t&&r.setAttribute("nonce",t);return}let i=n.createElement("style");i.textContent=e,t&&i.setAttribute("nonce",t),n.head.appendChild(i),pp.set(n,i)},[t])};function eT(e){return ZE(YE,e.nonce),B.createElement(XE,{...e})}function vy(e,t){return function(){return e.apply(t,arguments)}}const{toString:tT}=Object.prototype,{getPrototypeOf:Dr}=Object,{iterator:io,toStringTag:_y}=Symbol,Hs=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Hi=(e,t)=>{let n=e;const r=[];for(;n!=null&&n!==Object.prototype;){if(r.indexOf(n)!==-1)return!1;if(r.push(n),Hs(n,t))return!0;n=Dr(n)}return!1},nT=(e,t)=>e!=null&&Hi(e,t)?e[t]:void 0,af=(e=>t=>{const n=tT.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),tt=e=>(e=e.toLowerCase(),t=>af(t)===e),Ia=e=>t=>typeof t===e,{isArray:Kn}=Array,qn=Ia("undefined");function Vr(e){return e!==null&&!qn(e)&&e.constructor!==null&&!qn(e.constructor)&&Ue(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const wy=tt("ArrayBuffer");function rT(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&wy(e.buffer),t}const iT=Ia("string"),Ue=Ia("function"),Sy=Ia("number"),Wr=e=>e!==null&&typeof e=="object",oT=e=>e===!0||e===!1,rs=e=>{if(!Wr(e))return!1;const t=Dr(e);return(t===null||t===Object.prototype||Dr(t)===null)&&!Hi(e,_y)&&!Hi(e,io)},sT=e=>{if(!Wr(e)||Vr(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},aT=tt("Date"),lT=tt("File"),uT=e=>!!(e&&typeof e.uri<"u"),cT=e=>e&&typeof e.getParts<"u",fT=tt("Blob"),dT=tt("FileList"),pT=tt("Set"),hT=e=>Wr(e)&&Ue(e.pipe);function mT(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const hp=mT(),mp=typeof hp.FormData<"u"?hp.FormData:void 0,gT=e=>{if(!e)return!1;if(mp&&e instanceof mp)return!0;const t=Dr(e);if(!t||t===Object.prototype||!Ue(e.append))return!1;const n=af(e);return n==="formdata"||n==="object"&&Ue(e.toString)&&e.toString()==="[object FormData]"},yT=tt("URLSearchParams"),[vT,_T,wT,ST]=["ReadableStream","Request","Response","Headers"].map(tt),ET=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function oo(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Kn(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{if(Vr(e))return;const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let a;for(r=0;r<s;r++)a=o[r],t.call(null,e[a],a,e)}}function Ey(e,t){if(Vr(e))return null;t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const Nn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Ty=e=>!qn(e)&&e!==Nn;function zu(...e){const{caseless:t,skipUndefined:n}=Ty(this)&&this||{},r={},i=(o,s)=>{if(s==="__proto__"||s==="constructor"||s==="prototype")return;const a=t&&typeof s=="string"&&Ey(r,s)||s,l=Hs(r,a)?r[a]:void 0;rs(l)&&rs(o)?r[a]=zu(l,o):rs(o)?r[a]=zu({},o):Kn(o)?r[a]=o.slice():(!n||!qn(o))&&(r[a]=o)};for(let o=0,s=e.length;o<s;o++){const a=e[o];if(!a||Vr(a)||(oo(a,i),typeof a!="object"||Kn(a)))continue;const l=Object.getOwnPropertySymbols(a);for(let u=0;u<l.length;u++){const c=l[u];DT.call(a,c)&&i(a[c],c)}}return r}const TT=(e,t,n,{allOwnKeys:r}={})=>(oo(t,(i,o)=>{n&&Ue(i)?Object.defineProperty(e,o,{__proto__:null,value:vy(i,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,o,{__proto__:null,value:i,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),e),xT=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),kT=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),Object.defineProperty(e.prototype,"constructor",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{__proto__:null,value:t.prototype}),n&&Object.assign(e.prototype,n)},CT=(e,t,n,r)=>{let i,o,s;const a={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)s=i[o],(!r||r(s,e,t))&&!a[s]&&(t[s]=e[s],a[s]=!0);e=n!==!1&&Dr(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},PT=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},IT=e=>{if(!e)return null;if(Kn(e))return e;let t=e.length;if(!Sy(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},bT=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Dr(Uint8Array)),RT=(e,t)=>{const r=(e&&e[io]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},OT=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},NT=tt("HTMLFormElement"),AT=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),{propertyIsEnumerable:DT}=Object.prototype,LT=tt("RegExp"),xy=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};oo(n,(i,o)=>{let s;(s=t(i,o,e))!==!1&&(r[o]=s||i)}),Object.defineProperties(e,r)},MT=e=>{xy(e,(t,n)=>{if(Ue(e)&&["arguments","caller","callee"].includes(n))return!1;const r=e[n];if(Ue(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},UT=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return Kn(e)?r(e):r(String(e).split(t)),n},jT=()=>{},FT=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function zT(e){return!!(e&&Ue(e.append)&&e[_y]==="FormData"&&e[io])}const $T=e=>{const t=new WeakSet,n=r=>{if(Wr(r)){if(t.has(r))return;if(Vr(r))return r;if(!("toJSON"in r)){t.add(r);let i;if(pT(r)){i=[];for(const o of r){const s=n(o);!qn(s)&&i.push(s)}}else i=Kn(r)?[]:{},oo(r,(o,s)=>{const a=n(o);!qn(a)&&(i[s]=a)});return t.delete(r),i}}return r};return n(e)},BT=tt("AsyncFunction"),HT=e=>e&&(Wr(e)||Ue(e))&&Ue(e.then)&&Ue(e.catch),ky=((e,t)=>e?setImmediate:t?((n,r)=>(Nn.addEventListener("message",({source:i,data:o})=>{i===Nn&&o===n&&r.length&&r.shift()()},!1),i=>{r.push(i),Nn.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Ue(Nn.postMessage)),VT=typeof queueMicrotask<"u"?queueMicrotask.bind(Nn):typeof process<"u"&&process.nextTick||ky,Cy=e=>e!=null&&Ue(e[io]),WT=e=>e!=null&&Hi(e,io)&&Cy(e),v={isArray:Kn,isArrayBuffer:wy,isBuffer:Vr,isFormData:gT,isArrayBufferView:rT,isString:iT,isNumber:Sy,isBoolean:oT,isObject:Wr,isPlainObject:rs,isEmptyObject:sT,isReadableStream:vT,isRequest:_T,isResponse:wT,isHeaders:ST,isUndefined:qn,isDate:aT,isFile:lT,isReactNativeBlob:uT,isReactNative:cT,isBlob:fT,isRegExp:LT,isFunction:Ue,isStream:hT,isURLSearchParams:yT,isTypedArray:bT,isFileList:dT,forEach:oo,merge:zu,extend:TT,trim:ET,stripBOM:xT,inherits:kT,toFlatObject:CT,kindOf:af,kindOfTest:tt,endsWith:PT,toArray:IT,forEachEntry:RT,matchAll:OT,isHTMLForm:NT,hasOwnProperty:Hs,hasOwnProp:Hs,hasOwnInPrototypeChain:Hi,getSafeProp:nT,reduceDescriptors:xy,freezeMethods:MT,toObjectSet:UT,toCamelCase:AT,noop:jT,toFiniteNumber:FT,findKey:Ey,global:Nn,isContextDefined:Ty,isSpecCompliantForm:zT,toJSONObject:$T,isAsyncFn:BT,isThenable:HT,setImmediate:ky,asap:VT,isIterable:Cy,isSafeIterable:WT},KT=v.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),qT=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(s){i=s.indexOf(":"),n=s.substring(0,i).trim().toLowerCase(),r=s.substring(i+1).trim();const a=v.hasOwnProp(t,n);!n||a&&v.hasOwnProp(KT,n)||(n==="set-cookie"?a?t[n].push(r):t[n]=[r]:t[n]=a?t[n]+", "+r:r)}),t};function GT(e){let t=0,n=e.length;for(;t<n;){const r=e.charCodeAt(t);if(r!==9&&r!==32)break;t+=1}for(;n>t;){const r=e.charCodeAt(n-1);if(r!==9&&r!==32)break;n-=1}return t===0&&n===e.length?e:e.slice(t,n)}const JT=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),QT=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function lf(e,t){return v.isArray(e)?e.map(n=>lf(n,t)):GT(String(e).replace(t,""))}const XT=e=>lf(e,JT),YT=e=>lf(e,QT);function Py(e){const t=Object.create(null);return v.forEach(e.toJSON(),(n,r)=>{t[r]=YT(n)}),t}const gp=Symbol("internals");function ii(e){return e&&String(e).trim().toLowerCase()}function is(e){return e===!1||e==null?e:v.isArray(e)?e.map(is):XT(String(e))}function ZT(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const ex=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function gl(e){let t=0,n=e.length;for(;t<n;){const r=e.charCodeAt(t);if(r!==9&&r!==32)break;t+=1}for(;n>t;){const r=e.charCodeAt(n-1);if(r!==9&&r!==32)break;n-=1}return t===0&&n===e.length?e:e.slice(t,n)}function tx(e){const t=e.length-1;if(t<1||e.charCodeAt(0)!==34||e.charCodeAt(t)!==34)return e;let n="";for(let r=1;r<t;r++){const i=e.charCodeAt(r);if(i===34||i===92&&(r+=1,r>=t))return e;n+=e[r]}return n}function nx(e){const t=Object.create(null),n=String(e);let r=0,i=!1,o=!1;function s(a){const l=gl(n.slice(r,a)),u=l.indexOf("=");if(u<1)return;const c=gl(l.slice(0,u));if(!ex.test(c))return;const f=c.toLowerCase();if(f==="__proto__"||f==="constructor"||f==="prototype")return;const m=gl(l.slice(u+1));t[f]=tx(m)}for(let a=0;a<n.length;a++){const l=n.charCodeAt(a);i?o?o=!1:l===92?o=!0:l===34&&(i=!1):l===34?i=!0:(l===44||l===59)&&(s(a),r=a+1)}return s(n.length),t}const rx=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function yl(e,t,n,r,i){if(v.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!v.isString(t)){if(v.isString(r))return t.indexOf(r)!==-1;if(v.isRegExp(r))return r.test(t)}}function ix(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function ox(e,t){const n=v.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{__proto__:null,value:function(i,o,s){return this[r].call(this,t,i,o,s)},configurable:!0})})}let Ee=class{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(a,l,u){const c=ii(l);if(!c)return;const f=v.findKey(i,c);(!f||i[f]===void 0||u===!0||u===void 0&&i[f]!==!1)&&(i[f||l]=is(a))}const s=(a,l)=>v.forEach(a,(u,c)=>o(u,c,l));if(v.isPlainObject(t)||t instanceof this.constructor)s(t,n);else if(v.isString(t)&&(t=t.trim())&&!rx(t))s(qT(t),n);else if(v.isObject(t)&&v.isSafeIterable(t)){let a=Object.create(null),l,u;for(const c of t){if(!v.isArray(c))throw new TypeError("Object iterator must return a key-value pair");u=c[0],v.hasOwnProp(a,u)?(l=a[u],a[u]=v.isArray(l)?[...l,c[1]]:[l,c[1]]):a[u]=c[1]}s(a,n)}else t!=null&&o(n,t,r);return this}get(t,n){if(t=ii(t),t){const r=v.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return ZT(i);if(v.isFunction(n))return n.call(this,i,r);if(v.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=ii(t),t){const r=v.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||yl(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(s){if(s=ii(s),s){const a=v.findKey(r,s);a&&(!n||yl(r,r[a],a,n))&&(delete r[a],i=!0)}}return v.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||yl(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return v.forEach(this,(i,o)=>{const s=v.findKey(r,o);if(s){n[s]=is(i),delete n[o];return}const a=t?ix(o):String(o).trim();a!==o&&delete n[o],n[a]=is(i),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return v.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&v.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){const t=this.get("set-cookie");return v.isArray(t)?t:t==null||t===!1?[]:[t]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static parseParameters(t){return nx(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[gp]=this[gp]={accessors:{}}).accessors,i=this.prototype;function o(s){const a=ii(s);r[a]||(ox(i,s),r[a]=!0)}return v.isArray(t)?t.forEach(o):o(t),this}};Ee.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);v.reduceDescriptors(Ee.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});v.freezeMethods(Ee);const Vs="[REDACTED ****]";function sx(e){if(v.hasOwnProp(e,"toJSON"))return!0;let t=Object.getPrototypeOf(e);for(;t&&t!==Object.prototype;){if(v.hasOwnProp(t,"toJSON"))return!0;t=Object.getPrototypeOf(t)}return!1}function ax(e,t){const n=new Set(t.map(o=>String(o).toLowerCase())),r=[],i=o=>{if(o===null||typeof o!="object"||v.isBuffer(o))return o;if(r.indexOf(o)!==-1)return;o instanceof Ee&&(o=o.toJSON()),r.push(o);let s;if(v.isArray(o))s=[],o.forEach((a,l)=>{const u=i(a);v.isUndefined(u)||(s[l]=u)});else{if(!v.isPlainObject(o)&&sx(o))return r.pop(),o;s=Object.create(null);for(const[a,l]of Object.entries(o)){const u=n.has(a.toLowerCase())?Vs:i(l);v.isUndefined(u)||(s[a]=u)}}return r.pop(),s};return i(e)}function yp(e){try{return String(e)}catch{return""}}function lx(e){return e.errors.map(n=>{try{return n&&n.message?yp(n.message):yp(n)}catch{return""}}).filter(Boolean).join("; ")||e.name||"AggregateError"}let b=class Iy extends Error{static from(t,n,r,i,o,s){let a=t.message;!a&&v.isArray(t.errors)&&t.errors.length&&(a=lx(t));const l=new Iy(a,n||t.code,r,i,o);return Object.defineProperty(l,"cause",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),l.name=t.name,t.status!=null&&l.status==null&&(l.status=t.status),s&&Object.assign(l,s),l}constructor(t,n,r,i,o){super(t),Object.defineProperty(this,"message",{__proto__:null,value:t,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),r&&(this.config=r),i&&(this.request=i),o&&(this.response=o,this.status=o.status)}toJSON(){const t=this.config,n=t&&v.hasOwnProp(t,"redact")?t.redact:void 0,r=v.isArray(n)&&n.length>0?ax(t,n):v.toJSONObject(t);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:r,code:this.code,status:this.status}}};b.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";b.ERR_BAD_OPTION="ERR_BAD_OPTION";b.ECONNABORTED="ECONNABORTED";b.ETIMEDOUT="ETIMEDOUT";b.ECONNREFUSED="ECONNREFUSED";b.ERR_NETWORK="ERR_NETWORK";b.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";b.ERR_DEPRECATED="ERR_DEPRECATED";b.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";b.ERR_BAD_REQUEST="ERR_BAD_REQUEST";b.ERR_CANCELED="ERR_CANCELED";b.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";b.ERR_INVALID_URL="ERR_INVALID_URL";b.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const ux=null,by=100;function $u(e){return v.isPlainObject(e)||v.isArray(e)}function Ry(e){return v.endsWith(e,"[]")?e.slice(0,-2):e}function vl(e,t,n){return e?e.concat(t).map(function(i,o){return i=Ry(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function cx(e){return v.isArray(e)&&!e.some($u)}const fx=v.toFlatObject(v,{},null,function(t){return/^is[A-Z]/.test(t)});function ba(e,t,n){if(!v.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=v.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(p,h){return!v.isUndefined(h[p])});const r=n.metaTokens,i=n.visitor||w,o=n.dots,s=n.indexes,a=n.Blob||typeof Blob<"u"&&Blob,l=n.maxDepth===void 0?by:n.maxDepth,u=a&&v.isSpecCompliantForm(t),c=[];if(!v.isFunction(i))throw new TypeError("visitor must be a function");function f(d){if(d===null)return"";if(v.isDate(d))return d.toISOString();if(v.isBoolean(d))return d.toString();if(!u&&v.isBlob(d))throw new b("Blob is not supported. Use a Buffer instead.");if(v.isArrayBuffer(d)||v.isTypedArray(d)){if(u&&typeof a=="function")return new a([d]);throw new b("Blob is not supported. Use a Buffer instead.",b.ERR_NOT_SUPPORT)}return d}function m(d){if(d>l)throw new b("Object is too deeply nested ("+d+" levels). Max depth: "+l,b.ERR_FORM_DATA_DEPTH_EXCEEDED)}function y(d,p){if(l===1/0)return JSON.stringify(d);const h=[];return JSON.stringify(d,function(E,T){if(!v.isObject(T))return T;for(;h.length&&h[h.length-1]!==this;)h.pop();return h.push(T),m(p+h.length-1),T})}function w(d,p,h){let g=d;if(v.isReactNative(t)&&v.isReactNativeBlob(d))return t.append(vl(h,p,o),f(d)),!1;if(d&&!h&&typeof d=="object"){if(v.endsWith(p,"{}"))p=r?p:p.slice(0,-2),d=y(d,1);else if(v.isArray(d)&&cx(d)||(v.isFileList(d)||v.endsWith(p,"[]"))&&(g=v.toArray(d)))return p=Ry(p),g.forEach(function(T,k){!(v.isUndefined(T)||T===null)&&t.append(s===!0?vl([p],k,o):s===null?p:p+"[]",f(T))}),!1}return $u(d)?!0:(t.append(vl(h,p,o),f(d)),!1)}const _=Object.assign(fx,{defaultVisitor:w,convertValue:f,isVisitable:$u});function S(d,p,h=0){if(!v.isUndefined(d)){if(m(h),c.indexOf(d)!==-1)throw new Error("Circular reference detected in "+p.join("."));c.push(d),v.forEach(d,function(E,T){(!(v.isUndefined(E)||E===null)&&i.call(t,E,v.isString(T)?T.trim():T,p,_))===!0&&S(E,p?p.concat(T):[T],h+1)}),c.pop()}}if(!v.isObject(e))throw new TypeError("data must be an object");return S(e),t}function vp(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(e).replace(/[!'()~]|%20/g,function(r){return t[r]})}function uf(e,t){this._pairs=[],e&&ba(e,this,t)}const Oy=uf.prototype;Oy.append=function(t,n){this._pairs.push([t,n])};Oy.toString=function(t){const n=t?r=>t.call(this,r,vp):vp;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function dx(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Ny(e,t,n){if(!t)return e;e=e||"";const r=v.isFunction(n)?{serialize:n}:n,i=v.getSafeProp(r,"encode")||dx,o=v.getSafeProp(r,"serialize");let s;if(o?s=o(t,r):s=v.isURLSearchParams(t)?t.toString():new uf(t,r).toString(i),s){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class _p{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){v.forEach(this.handlers,function(r){r!==null&&t(r)})}}const cf={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},px=typeof URLSearchParams<"u"?URLSearchParams:uf,hx=typeof FormData<"u"?FormData:null,mx=typeof Blob<"u"?Blob:null,gx={isBrowser:!0,classes:{URLSearchParams:px,FormData:hx,Blob:mx},protocols:["http","https","file","blob","url","data"]},ff=typeof window<"u"&&typeof document<"u",Bu=typeof navigator=="object"&&navigator||void 0,yx=ff&&(!Bu||["ReactNative","NativeScript","NS"].indexOf(Bu.product)<0),vx=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",_x=ff&&window.location.href||"http://localhost",wx=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ff,hasStandardBrowserEnv:yx,hasStandardBrowserWebWorkerEnv:vx,navigator:Bu,origin:_x},Symbol.toStringTag,{value:"Module"})),he={...wx,...gx};function Sx(e,t){return ba(e,new he.classes.URLSearchParams,{visitor:function(n,r,i,o){return he.isNode&&v.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)},...t})}const wp=by;function Ay(e){if(e>wp)throw new b("FormData field is too deeply nested ("+e+" levels). Max depth: "+wp,b.ERR_FORM_DATA_DEPTH_EXCEEDED)}function Ex(e){const t=[],n=/[^.[\]]+|\[([^.[\]]*)]/g;let r;for(;(r=n.exec(e))!==null;)Ay(t.length),t.push(r[0]==="[]"?"":r[1]||r[0]);return t}function Tx(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function Dy(e){function t(n,r,i,o){Ay(o);let s=n[o++];if(s==="__proto__")return!0;const a=Number.isFinite(+s),l=o>=n.length;return s=!s&&v.isArray(i)?i.length:s,l?(v.hasOwnProp(i,s)?i[s]=v.isArray(i[s])?i[s].concat(r):[i[s],r]:i[s]=r,!a):((!v.hasOwnProp(i,s)||!v.isObject(i[s]))&&(i[s]=[]),t(n,r,i[s],o)&&v.isArray(i[s])&&(i[s]=Tx(i[s])),!a)}if(v.isFormData(e)&&v.isFunction(e.entries)){const n={};return v.forEachEntry(e,(r,i)=>{t(Ex(r),i,n,0)}),n}return null}const er=(e,t)=>e!=null&&v.hasOwnProp(e,t)?e[t]:void 0;function xx(e,t,n){if(v.isString(e))try{return(t||JSON.parse)(e),v.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const so={transitional:cf,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=v.isObject(t);if(o&&v.isHTMLForm(t)&&(t=new FormData(t)),v.isFormData(t))return i?JSON.stringify(Dy(t)):t;if(v.isArrayBuffer(t)||v.isBuffer(t)||v.isStream(t)||v.isFile(t)||v.isBlob(t)||v.isReadableStream(t))return t;if(v.isArrayBufferView(t))return t.buffer;if(v.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(o){const l=er(this,"formSerializer");if(r.indexOf("application/x-www-form-urlencoded")>-1)return Sx(t,l).toString();if((a=v.isFileList(t))||r.indexOf("multipart/form-data")>-1){const u=er(this,"env"),c=u&&u.FormData;return ba(a?{"files[]":t}:t,c&&new c,l)}}return o||i?(n.setContentType("application/json",!1),xx(t)):t}],transformResponse:[function(t){const n=er(this,"transitional")||so.transitional,r=n&&n.forcedJSONParsing,i=er(this,"responseType"),o=i==="json";if(v.isResponse(t)||v.isReadableStream(t))return t;if(t&&v.isString(t)&&(r&&!i||o)){const a=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t,er(this,"parseReviver"))}catch(l){if(a)throw l.name==="SyntaxError"?b.from(l,b.ERR_BAD_RESPONSE,this,null,er(this,"response")):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:he.classes.FormData,Blob:he.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};v.forEach(["delete","get","head","post","put","patch","query"],e=>{so.headers[e]={}});function _l(e,t){const n=this||so,r=t||n,i=Ee.from(r.headers);let o=r.data;return v.forEach(e,function(a){o=a.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function Ly(e){return!!(e&&e.__CANCEL__)}let ao=class extends b{constructor(t,n,r){super(t??"canceled",b.ERR_CANCELED,n,r),this.name="CanceledError",this.__CANCEL__=!0}};function My(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new b("Request failed with status code "+n.status,n.status>=400&&n.status<500?b.ERR_BAD_REQUEST:b.ERR_BAD_RESPONSE,n.config,n.request,n))}function kx(e){const t=/^([-+\w]{1,25}):(?:\/\/)?/.exec(e);return t&&t[1]||""}function Cx(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,s;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),c=r[o];s||(s=u),n[i]=l,r[i]=u;let f=o,m=0;for(;f!==i;)m+=n[f++],f=f%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-s<t)return;const y=c&&u-c;return y?Math.round(m*1e3/y):void 0}}function Px(e,t){let n=0,r=1e3/t,i,o;const s=(u,c=Date.now())=>{n=c,i=null,o&&(clearTimeout(o),o=null),e(...u)};return[(...u)=>{const c=Date.now(),f=c-n;f>=r?s(u,c):(i=u,o||(o=setTimeout(()=>{o=null,s(i)},r-f)))},()=>i&&s(i)]}const Ws=(e,t,n=3)=>{let r=0;const i=Cx(50,250);return Px(o=>{if(!o||typeof o.loaded!="number")return;const s=o.loaded,a=o.lengthComputable?o.total:void 0,l=Math.max(0,a!=null?Math.min(s,a):s),u=Math.max(0,l-r),c=i(u);r=Math.max(r,l);const f={loaded:l,total:a,progress:a?l/a:void 0,bytes:u,rate:c||void 0,estimated:c&&a?(a-l)/c:void 0,event:o,lengthComputable:a!=null,[t?"download":"upload"]:!0};e(f)},n)},Sp=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Ep=(e,t=v.asap)=>(...n)=>t(()=>e(...n)),Ix=he.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,he.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(he.origin),he.navigator&&/(msie|trident)/i.test(he.navigator.userAgent)):()=>!0,bx=he.hasStandardBrowserEnv?{write(e,t,n,r,i,o,s){if(typeof document>"u")return;const a=[`${e}=${encodeURIComponent(t)}`];v.isNumber(n)&&a.push(`expires=${new Date(n).toUTCString()}`),v.isString(r)&&a.push(`path=${r}`),v.isString(i)&&a.push(`domain=${i}`),o===!0&&a.push("secure"),v.isString(s)&&a.push(`SameSite=${s}`),document.cookie=a.join("; ")},read(e){if(typeof document>"u")return null;const t=document.cookie.split(";");for(let n=0;n<t.length;n++){const r=t[n].replace(/^\s+/,""),i=r.indexOf("=");if(i!==-1&&r.slice(0,i)===e)try{return decodeURIComponent(r.slice(i+1))}catch{return r.slice(i+1)}}return null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function Rx(e){return typeof e!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Ox(e,t){if(!t)return e;let n=e.length;for(;n>0&&e.charCodeAt(n-1)===47;)n--;return e.slice(0,n)+"/"+t.replace(/^\/+/,"")}const Nx=/^https?:(?!\/\/)/i,Ax=/[\t\n\r]/g;function Dx(e){let t=0;for(;t<e.length&&e.charCodeAt(t)<=32;)t++;return e.slice(t)}function Lx(e){return Dx(e).replace(Ax,"")}function Mx(e){return e&&e.replace(/(^|&)([^=&]*=)?[^&]+/g,(t,n,r="")=>`${n}${r}${Vs}`)}function Ux(e){const t=e.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${Vs}@`),n=t.indexOf("#"),i=(n===-1?t:t.slice(0,n)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${Vs}`);return n===-1?i:`${i}#${Mx(t.slice(n+1))}`}function Tp(e,t){if(typeof e=="string"){const n=Lx(e);if(Nx.test(n))throw new b(`Invalid URL ${JSON.stringify(Ux(n))}: missing "//" after protocol`,b.ERR_INVALID_URL,t)}}function Uy(e,t,n,r){Tp(t,r);let i=!Rx(t);return e&&(i||n===!1)?(Tp(e,r),Ox(e,t)):t}const xp=e=>e instanceof Ee?{...e}:e,jx=e=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(e).concat(Object.getOwnPropertySymbols(e).filter(t=>Object.getOwnPropertyDescriptor(e,t).enumerable)):Object.keys(e);function Gn(e,t){e=e||{},t=t||{};const n=Object.create(null);Object.defineProperty(n,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function r(c,f,m,y){return v.isPlainObject(c)&&v.isPlainObject(f)?v.merge.call({caseless:y},c,f):v.isPlainObject(f)?v.merge({},f):v.isArray(f)?f.slice():f}function i(c,f,m,y){if(v.isUndefined(f)){if(!v.isUndefined(c))return r(void 0,c,m,y)}else return r(c,f,m,y)}function o(c,f){if(!v.isUndefined(f))return r(void 0,f)}function s(c,f){if(v.isUndefined(f)){if(!v.isUndefined(c))return r(void 0,c)}else return r(void 0,f)}function a(c){const f=v.hasOwnProp(t,"transitional")?t.transitional:void 0;if(!v.isUndefined(f))if(v.isPlainObject(f)){if(v.hasOwnProp(f,c))return f[c]}else return;const m=v.hasOwnProp(e,"transitional")?e.transitional:void 0;if(v.isPlainObject(m)&&v.hasOwnProp(m,c))return m[c]}function l(c,f,m){if(v.hasOwnProp(t,m))return r(c,f);if(v.hasOwnProp(e,m))return r(void 0,c)}const u={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,allowedSocketPaths:s,responseEncoding:s,validateStatus:l,headers:(c,f,m)=>i(xp(c),xp(f),m,!0)};return v.forEach(jx({...e,...t}),function(f){if(f==="__proto__"||f==="constructor"||f==="prototype")return;const m=v.hasOwnProp(u,f)?u[f]:i,y=v.hasOwnProp(e,f)?e[f]:void 0,w=v.hasOwnProp(t,f)?t[f]:void 0,_=m(y,w,f);v.isUndefined(_)&&m!==l||(n[f]=_)}),v.hasOwnProp(t,"validateStatus")&&v.isUndefined(t.validateStatus)&&a("validateStatusUndefinedResolves")===!1&&(v.hasOwnProp(e,"validateStatus")?n.validateStatus=r(void 0,e.validateStatus):delete n.validateStatus),n}const Fx=["content-type","content-length"];function zx(e,t,n){if(n!=="content-only"){e.set(t);return}Object.entries(t||{}).forEach(([r,i])=>{Fx.includes(r.toLowerCase())&&e.set(r,i)})}const $x=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(t,n)=>String.fromCharCode(parseInt(n,16)));function jy(e){const t=Gn({},e),n=m=>v.hasOwnProp(t,m)?t[m]:void 0,r=n("data");let i=n("withXSRFToken");const o=n("xsrfHeaderName"),s=n("xsrfCookieName");let a=n("headers");const l=n("auth"),u=n("baseURL"),c=n("allowAbsoluteUrls"),f=n("url");if(t.headers=a=Ee.from(a),t.url=Ny(Uy(u,f,c,t),n("params"),n("paramsSerializer")),l){const m=v.getSafeProp(l,"username")||"",y=v.getSafeProp(l,"password")||"";try{a.set("Authorization","Basic "+btoa(m+":"+(y?$x(y):"")))}catch(w){throw b.from(w,b.ERR_BAD_OPTION_VALUE,e)}}if(v.isFormData(r)&&(he.hasStandardBrowserEnv||he.hasStandardBrowserWebWorkerEnv||v.isReactNative(r)?a.setContentType(void 0):v.isFunction(r.getHeaders)&&zx(a,r.getHeaders(),n("formDataHeaderPolicy"))),he.hasStandardBrowserEnv&&(v.isFunction(i)&&(i=i(t)),i===!0||i==null&&Ix(t.url))){const y=o&&s&&bx.read(s);y&&a.set(o,y)}return t}const Bx=typeof XMLHttpRequest<"u",Hx=Bx&&function(e){return new Promise(function(n,r){const i=jy(e);let o=i.data;const s=Ee.from(i.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:u}=i,c,f,m,y,w;function _(){y&&y(),w&&w(),i.cancelToken&&i.cancelToken.unsubscribe(c),i.signal&&i.signal.removeEventListener("abort",c)}let S=new XMLHttpRequest;S.open(i.method.toUpperCase(),i.url,!0),S.timeout=i.timeout;function d(){if(!S)return;const h=Ee.from("getAllResponseHeaders"in S&&S.getAllResponseHeaders()),E={data:!a||a==="text"||a==="json"?S.responseText:S.response,status:S.status,statusText:S.statusText,headers:h,config:e,request:S};My(function(k){n(k),_()},function(k){r(k),_()},E),S=null}"onloadend"in S?S.onloadend=d:S.onreadystatechange=function(){!S||S.readyState!==4||S.status===0&&!(S.responseURL&&S.responseURL.startsWith("file:"))||setTimeout(d)},S.onabort=function(){S&&(r(new b("Request aborted",b.ECONNABORTED,e,S)),_(),S=null)},S.onerror=function(g){const E=g&&g.message?g.message:"Network Error",T=new b(E,b.ERR_NETWORK,e,S);T.event=g||null,r(T),_(),S=null},S.ontimeout=function(){let g=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const E=i.transitional||cf;i.timeoutErrorMessage&&(g=i.timeoutErrorMessage),r(new b(g,E.clarifyTimeoutError?b.ETIMEDOUT:b.ECONNABORTED,e,S)),_(),S=null},o===void 0&&s.setContentType(null),"setRequestHeader"in S&&v.forEach(Py(s),function(g,E){S.setRequestHeader(E,g)}),v.isUndefined(i.withCredentials)||(S.withCredentials=!!i.withCredentials),a&&a!=="json"&&(S.responseType=i.responseType),u&&([m,w]=Ws(u,!0),S.addEventListener("progress",m)),l&&S.upload&&([f,y]=Ws(l),S.upload.addEventListener("progress",f),S.upload.addEventListener("loadend",y)),(i.cancelToken||i.signal)&&(c=h=>{S&&(r(!h||h.type?new ao(null,e,S):h),S.abort(),_(),S=null)},i.cancelToken&&i.cancelToken.subscribe(c),i.signal&&(i.signal.aborted?c():i.signal.addEventListener("abort",c)));const p=kx(i.url);if(p&&!he.protocols.includes(p)){r(new b("Unsupported protocol "+p+":",b.ERR_BAD_REQUEST,e)),_();return}S.send(o||null)})},Vx=(e,t)=>{if(e=e?e.filter(Boolean):[],!t&&!e.length)return;const n=new AbortController;let r=!1;const i=function(l){if(!r){r=!0,s();const u=l instanceof Error?l:this.reason;n.abort(u instanceof b?u:new ao(u instanceof Error?u.message:u))}};let o=t&&setTimeout(()=>{o=null,i(new b(`timeout of ${t}ms exceeded`,b.ETIMEDOUT))},t);const s=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(l=>{l.unsubscribe?l.unsubscribe(i):l.removeEventListener("abort",i)}),e=null)};e.forEach(l=>{if(!r){if(l.aborted){i.call(l);return}l.addEventListener("abort",i,{once:!0})}});const{signal:a}=n;return a.unsubscribe=()=>v.asap(s),a},Wx=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,i;for(;r<n;)i=r+t,yield e.slice(r,i),r=i},Kx=async function*(e,t){for await(const n of qx(e))yield*Wx(n,t)},qx=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},kp=(e,t,n,r)=>{const i=Kx(e,t);let o=0,s,a=l=>{s||(s=!0,r&&r(l))};return new ReadableStream({async pull(l){try{const{done:u,value:c}=await i.next();if(u){a(),l.close();return}let f=c.byteLength;if(n){let m=o+=f;n(m)}l.enqueue(new Uint8Array(c))}catch(u){throw a(u),u}},cancel(l){return a(l),i.return()}},{highWaterMark:2})},Cp=e=>e>=48&&e<=57||e>=65&&e<=70||e>=97&&e<=102,Fy=(e,t,n)=>t+2<n&&Cp(e.charCodeAt(t+1))&&Cp(e.charCodeAt(t+2)),Pp=e=>e<=57?e-48:(e&223)-55,Gx=e=>e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57||e===43||e===47||e===45||e===95,Jx=e=>e===9||e===10||e===12||e===13||e===32,Qx=e=>{const t=Math.floor(e/4),n=e%4;return t*3+(n===2?1:n===3?2:0)},Xx=e=>{const t=e.length;let n=0;return t>0&&e.charCodeAt(t-1)===61&&(n++,t>1&&e.charCodeAt(t-2)===61&&n++),Math.floor((t-n)*3/4)},Yx=e=>{const t=e.length;let n=0,r=0,i=!1;for(let o=0;o<t;o++){let s=e.charCodeAt(o);if(s===37&&Fy(e,o,t)&&(s=Pp(e.charCodeAt(o+1))*16+Pp(e.charCodeAt(o+2)),o+=2),!Jx(s)){if(s===61){r++;continue}if(!Gx(s)||r>0){i=!0;continue}n++}}return i||r>2||r>0&&(n+r)%4!==0||n%4===1?Xx(e):Qx(n)},Zx=(e,t)=>{if(!e||typeof e!="string"||!e.startsWith("data:"))return 0;const n=e.indexOf(",");if(n<0)return 0;const r=e.slice(5,n),i=e.slice(n+1);if(/;base64/i.test(r))return t(i);let s=0;for(let a=0,l=i.length;a<l;a++){const u=i.charCodeAt(a);if(u===37&&Fy(i,a,l))s+=1,a+=2;else if(u<128)s+=1;else if(u<2048)s+=2;else if(u>=55296&&u<=56319&&a+1<l){const c=i.charCodeAt(a+1);c>=56320&&c<=57343?(s+=4,a++):s+=3}else s+=3}return s};function ek(e){const t=typeof e=="string"?e.indexOf("#"):-1;return Zx(t===-1?e:e.slice(0,t),Yx)}const df="1.19.0",Ip=64*1024,{isFunction:Mo}=v,tk=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(t,n)=>String.fromCharCode(parseInt(n,16))),bp=e=>{if(!v.isString(e))return e;try{return decodeURIComponent(e)}catch{return e}},Rp=(e,...t)=>{try{return!!e(...t)}catch{return!1}},nk=e=>{const t=e.indexOf("://");let n=e;return t!==-1&&(n=n.slice(t+3)),n.includes("@")||n.includes(":")},rk=e=>{const t=v.global!==void 0&&v.global!==null?v.global:globalThis,{ReadableStream:n,TextEncoder:r}=t;e=v.merge.call({skipUndefined:!0},{Request:t.Request,Response:t.Response},e);const{fetch:i,Request:o,Response:s}=e,a=i?Mo(i):typeof fetch=="function",l=Mo(o),u=Mo(s);if(!a)return!1;const c=a&&Mo(n),f=a&&(typeof r=="function"?(d=>p=>d.encode(p))(new r):async d=>new Uint8Array(await new o(d).arrayBuffer())),m=l&&c&&Rp(()=>{let d=!1;const p=new o(he.origin,{body:new n,method:"POST",get duplex(){return d=!0,"half"}}),h=p.headers.has("Content-Type");return p.body!=null&&p.body.cancel(),d&&!h}),y=u&&c&&Rp(()=>v.isReadableStream(new s("").body)),w={stream:y&&(d=>d.body)};a&&["text","arrayBuffer","blob","formData","stream"].forEach(d=>{!w[d]&&(w[d]=(p,h)=>{let g=p&&p[d];if(g)return g.call(p);throw new b(`Response type '${d}' is not supported`,b.ERR_NOT_SUPPORT,h)})});const _=async d=>{if(d==null)return 0;if(v.isBlob(d))return d.size;if(v.isSpecCompliantForm(d))return(await new o(he.origin,{method:"POST",body:d}).arrayBuffer()).byteLength;if(v.isArrayBufferView(d)||v.isArrayBuffer(d))return d.byteLength;if(v.isURLSearchParams(d)&&(d=d+""),v.isString(d))return(await f(d)).byteLength},S=async(d,p)=>{const h=v.toFiniteNumber(d.getContentLength());return h??_(p)};return async d=>{let{url:p,method:h,data:g,signal:E,cancelToken:T,timeout:k,onDownloadProgress:P,onUploadProgress:N,responseType:A,headers:V,withCredentials:ce="same-origin",fetchOptions:ye,maxContentLength:ke,maxBodyLength:Et}=jy(d);const qe=v.isNumber(ke)&&ke>-1,nt=v.isNumber(Et)&&Et>-1,R=z=>v.hasOwnProp(d,z)?d[z]:void 0;let M=i||fetch;A=A?(A+"").toLowerCase():"text";let D=Vx([E,T&&T.toAbortSignal()],k),j=null;const q=D&&D.unsubscribe&&(()=>{D.unsubscribe()});let rt,je=null;const Yn=()=>new b("Request body larger than maxBodyLength limit",b.ERR_BAD_REQUEST,d,j);try{let z;const fe=R("auth");if(fe){const U=v.getSafeProp(fe,"username")||"",Fe=v.getSafeProp(fe,"password")||"";z={username:U,password:Fe}}if(nk(p)){const U=new URL(p,he.origin);if(!z&&(U.username||U.password)){const Fe=bp(U.username),qt=bp(U.password);z={username:Fe,password:qt}}(U.username||U.password)&&(U.username="",U.password="",p=U.href)}if(z&&(V.delete("authorization"),V.set("Authorization","Basic "+btoa(tk((z.username||"")+":"+(z.password||""))))),qe&&typeof p=="string"&&p.startsWith("data:")&&ek(p)>ke)throw new b("maxContentLength size of "+ke+" exceeded",b.ERR_BAD_RESPONSE,d,j);if(nt&&h!=="get"&&h!=="head"){const U=await _(g);if(typeof U=="number"&&isFinite(U)&&(rt=U,U>Et))throw Yn()}const mo=nt&&(v.isReadableStream(g)||v.isStream(g)),Pf=(U,Fe,qt)=>kp(U,Ip,kn=>{if(nt&&kn>Et)throw je=Yn();Fe&&Fe(kn)},qt);if(m&&h!=="get"&&h!=="head"&&(N||mo)){if(rt=rt??await S(V,g),rt!==0||mo){let U=new o(p,{method:"POST",body:g,duplex:"half"}),Fe;if(v.isFormData(g)&&(Fe=U.headers.get("content-type"))&&V.setContentType(Fe),U.body){const[qt,kn]=N&&Sp(rt,Ws(Ep(N)))||[];g=Pf(U.body,qt,kn)}}}else if(mo&&!l&&c&&h!=="get"&&h!=="head")g=Pf(g);else if(mo&&l&&!m&&h!=="get"&&h!=="head")throw new b("Stream request bodies are not supported by the current fetch implementation",b.ERR_NOT_SUPPORT,d,j);v.isString(ce)||(ce=ce?"include":"omit");const Fv=l&&"credentials"in o.prototype;if(v.isFormData(g)){const U=V.getContentType();U&&/^multipart\/form-data/i.test(U)&&!/boundary=/i.test(U)&&V.delete("content-type")}V.set("User-Agent","axios/"+df,!1);const If={...ye,signal:D,method:h.toUpperCase(),headers:Py(V.normalize()),body:g,duplex:"half",credentials:Fv?ce:void 0};j=l&&new o(p,If);let Tt=await(l?M(j,ye):M(p,If));const bf=Ee.from(Tt.headers);if(qe){const U=v.toFiniteNumber(bf.getContentLength());if(U!=null&&U>ke)throw new b("maxContentLength size of "+ke+" exceeded",b.ERR_BAD_RESPONSE,d,j)}const Da=y&&(A==="stream"||A==="response");if(y&&Tt.body&&(P||qe||Da&&q)){const U={};["status","statusText","headers"].forEach(Jr=>{U[Jr]=Tt[Jr]});const Fe=v.toFiniteNumber(bf.getContentLength()),[qt,kn]=P&&Sp(Fe,Ws(Ep(P),!0))||[];let Rf=0;const zv=Jr=>{if(qe&&(Rf=Jr,Rf>ke))throw new b("maxContentLength size of "+ke+" exceeded",b.ERR_BAD_RESPONSE,d,j);qt&&qt(Jr)};Tt=new s(kp(Tt.body,Ip,zv,()=>{kn&&kn(),q&&q()}),U)}A=A||"text";let xt=await w[v.findKey(w,A)||"text"](Tt,d);if(qe&&!y&&!Da){let U;if(xt!=null&&(typeof xt.byteLength=="number"?U=xt.byteLength:typeof xt.size=="number"?U=xt.size:typeof xt=="string"&&(U=typeof r=="function"?new r().encode(xt).byteLength:xt.length)),typeof U=="number"&&U>ke)throw new b("maxContentLength size of "+ke+" exceeded",b.ERR_BAD_RESPONSE,d,j)}return!Da&&q&&q(),await new Promise((U,Fe)=>{My(U,Fe,{data:xt,headers:Ee.from(Tt.headers),status:Tt.status,statusText:Tt.statusText,config:d,request:j})})}catch(z){if(q&&q(),D&&D.aborted&&D.reason instanceof b){const fe=D.reason;throw fe.config=d,j&&(fe.request=j),z!==fe&&Object.defineProperty(fe,"cause",{__proto__:null,value:z,writable:!0,enumerable:!1,configurable:!0}),fe}if(je)throw j&&!je.request&&(je.request=j),je;if(z instanceof b)throw j&&!z.request&&(z.request=j),z;if(z&&z.name==="TypeError"&&/Load failed|fetch/i.test(z.message)){const fe=new b("Network Error",b.ERR_NETWORK,d,j,z&&z.response);throw Object.defineProperty(fe,"cause",{__proto__:null,value:z.cause||z,writable:!0,enumerable:!1,configurable:!0}),fe}throw b.from(z,z&&z.code,d,j,z&&z.response)}}},ik=new Map,zy=e=>{let t=e&&e.env||{};const{fetch:n,Request:r,Response:i}=t,o=[r,i,n];let s=o.length,a=s,l,u,c=ik;for(;a--;)l=o[a],u=c.get(l),u===void 0&&c.set(l,u=a?new Map:rk(t)),c=u;return u};zy();const pf={http:ux,xhr:Hx,fetch:{get:zy}};v.forEach(pf,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{__proto__:null,value:t})}catch{}Object.defineProperty(e,"adapterName",{__proto__:null,value:t})}});const Op=e=>`- ${e}`,ok=e=>v.isFunction(e)||e===null||e===!1;function sk(e,t){e=v.isArray(e)?e:[e];const{length:n}=e;let r,i;const o={};for(let s=0;s<n;s++){r=e[s];let a;if(i=r,!ok(r)&&(i=pf[(a=String(r)).toLowerCase()],i===void 0))throw new b(`Unknown adapter '${a}'`);if(i&&(v.isFunction(i)||(i=i.get(t))))break;o[a||"#"+s]=i}if(!i){const s=Object.entries(o).map(([l,u])=>`adapter ${l} `+(u===!1?"is not supported by the environment":"is not available in the build"));let a=n?s.length>1?`since :
`+s.map(Op).join(`
`):" "+Op(s[0]):"as no adapter specified";throw new b("There is no suitable adapter to dispatch the request "+a,b.ERR_NOT_SUPPORT)}return i}const $y={getAdapter:sk,adapters:pf};function wl(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ao(null,e)}function Sl(e){return wl(e),e.headers=Ee.from(e.headers),e.data=_l.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),$y.getAdapter(e.adapter||so.adapter,e)(e).then(function(r){wl(e),e.response=r;try{r.data=_l.call(e,e.transformResponse,r)}finally{delete e.response}return r.headers=Ee.from(r.headers),r},function(r){if(!Ly(r)&&(wl(e),r&&r.response)){e.response=r.response;try{r.response.data=_l.call(e,e.transformResponse,r.response)}finally{delete e.response}r.response.headers=Ee.from(r.response.headers)}return Promise.reject(r)})}const Ra={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Ra[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Np={};Ra.transitional=function(t,n,r){function i(o,s){return"[Axios v"+df+"] Transitional option '"+o+"'"+s+(r?". "+r:"")}return(o,s,a)=>{if(t===!1)throw new b(i(s," has been removed"+(n?" in "+n:"")),b.ERR_DEPRECATED);return n&&!Np[s]&&(Np[s]=!0,console.warn(i(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,s,a):!0}};Ra.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function ak(e,t,n){if(typeof e!="object"||e===null)throw new b("options must be an object",b.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],s=Object.prototype.hasOwnProperty.call(t,o)?t[o]:void 0;if(s){const a=e[o],l=a===void 0||s(a,o,e);if(l!==!0)throw new b("option "+o+" must be "+l,b.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new b("Unknown option "+o,b.ERR_BAD_OPTION)}}const os={assertOptions:ak,validators:Ra},we=os.validators;let Un=class{constructor(t){this.defaults=t||{},this.interceptors={request:new _p,response:new _p}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let i={};Error.captureStackTrace?Error.captureStackTrace(i):i=new Error;const o=(()=>{if(!i.stack)return"";const s=i.stack.indexOf(`
`);return s===-1?"":i.stack.slice(s+1)})();try{if(!r.stack)r.stack=o;else if(o){const s=o.indexOf(`
`),a=s===-1?-1:o.indexOf(`
`,s+1),l=a===-1?"":o.slice(a+1);String(r.stack).endsWith(l)||(r.stack+=`
`+o)}}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Gn(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&os.assertOptions(r,{silentJSONParsing:we.transitional(we.boolean),forcedJSONParsing:we.transitional(we.boolean),clarifyTimeoutError:we.transitional(we.boolean),legacyInterceptorReqResOrdering:we.transitional(we.boolean),advertiseZstdAcceptEncoding:we.transitional(we.boolean),validateStatusUndefinedResolves:we.transitional(we.boolean)},!1),i!=null&&(v.isFunction(i)?n.paramsSerializer={serialize:i}:os.assertOptions(i,{encode:we.function,serialize:we.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),os.assertOptions(n,{baseUrl:we.spelling("baseURL"),withXsrfToken:we.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=o&&v.merge(o.common,o[n.method]);o&&v.forEach(["delete","get","head","post","put","patch","query","common"],w=>{delete o[w]}),n.headers=Ee.concat(s,o);const a=[];let l=!0;this.interceptors.request.forEach(function(_){if(typeof _.runWhen=="function"&&_.runWhen(n)===!1)return;l=l&&_.synchronous;const S=n.transitional||cf;S&&S.legacyInterceptorReqResOrdering?a.unshift(_.fulfilled,_.rejected):a.push(_.fulfilled,_.rejected)});const u=[];this.interceptors.response.forEach(function(_){u.push(_.fulfilled,_.rejected)});let c,f=0,m;if(!l){const w=[Sl.bind(this),void 0];for(w.unshift(...a),w.push(...u),m=w.length,c=Promise.resolve(n);f<m;)c=c.then(w[f++],w[f++]);return c}m=a.length;let y=n;for(;f<m;){const w=a[f++],_=a[f++];try{y=w?w(y):y}catch(S){if(!_){c=Promise.reject(S);break}try{const d=_.call(this,S);v.isThenable(d)&&(c=Promise.resolve(d).then(()=>Sl.call(this,y)))}catch(d){c=Promise.reject(d)}break}}if(!c)try{c=Sl.call(this,y)}catch(w){c=Promise.reject(w)}for(f=0,m=u.length;f<m;)c=c.then(u[f++],u[f++]);return c}getUri(t){t=Gn(this.defaults,t);const n=Uy(t.baseURL,t.url,t.allowAbsoluteUrls,t);return Ny(n,t.params,t.paramsSerializer)}};v.forEach(["delete","get","head","options"],function(t){Un.prototype[t]=function(n,r){return this.request(Gn(r||{},{method:t,url:n,data:r&&v.hasOwnProp(r,"data")?r.data:void 0}))}});v.forEach(["post","put","patch","query"],function(t){function n(r){return function(o,s,a){return this.request(Gn(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}Un.prototype[t]=n(),t!=="query"&&(Un.prototype[t+"Form"]=n(!0))});let lk=class By{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const s=new Promise(a=>{r.subscribe(a),o=a}).then(i);return s.cancel=function(){r.unsubscribe(o)},s},t(function(o,s,a){r.reason||(r.reason=new ao(o,s,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new By(function(i){t=i}),cancel:t}}};function uk(e){return function(n){return e.apply(null,n)}}function ck(e){return v.isObject(e)&&e.isAxiosError===!0}const Hu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Hu).forEach(([e,t])=>{Hu[t]=e});function Hy(e){const t=new Un(e),n=vy(Un.prototype.request,t);return v.extend(n,Un.prototype,t,{allOwnKeys:!0}),v.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return Hy(Gn(e,i))},n}const ie=Hy(so);ie.Axios=Un;ie.CanceledError=ao;ie.CancelToken=lk;ie.isCancel=Ly;ie.VERSION=df;ie.toFormData=ba;ie.AxiosError=b;ie.Cancel=ie.CanceledError;ie.all=function(t){return Promise.all(t)};ie.spread=uk;ie.isAxiosError=ck;ie.mergeConfig=Gn;ie.AxiosHeaders=Ee;ie.formToJSON=e=>Dy(v.isHTMLForm(e)?new FormData(e):e);ie.getAdapter=$y.getAdapter;ie.HttpStatusCode=Hu;ie.default=ie;const{Axios:mb,AxiosError:gb,CanceledError:yb,isCancel:vb,CancelToken:_b,VERSION:wb,all:Sb,Cancel:Eb,isAxiosError:Tb,spread:xb,toFormData:kb,AxiosHeaders:Cb,HttpStatusCode:Pb,formToJSON:Ib,getAdapter:bb,mergeConfig:Rb,create:Ob}=ie,Kr=ie.create({baseURL:"http://localhost:5000/api",withCredentials:!0});function fk({userId:e,onUploaded:t}){const[n,r]=x.useState(!1),[i,o]=x.useState(!1),[s,a]=x.useState(""),l=x.useRef(null);async function u(f){var y,w;if(!f)return;a(""),o(!0);const m=new FormData;m.append("file",f),m.append("title",f.name),m.append("userId",e);try{const _=await Kr.post("/documents/upload",m,{headers:{"Content-Type":"multipart/form-data"}});t(_.data)}catch(_){a(((w=(y=_.response)==null?void 0:y.data)==null?void 0:w.error)||"Upload failed")}finally{o(!1)}}function c(f){var y;f.preventDefault(),r(!1);const m=(y=f.dataTransfer.files)==null?void 0:y[0];u(m)}return C.jsxs("div",{children:[C.jsxs("div",{onDragOver:f=>{f.preventDefault(),r(!0)},onDragLeave:()=>r(!1),onDrop:c,onClick:()=>{var f;return(f=l.current)==null?void 0:f.click()},className:`border-2 border-dashed rounded-lg p-10 text-center cursor-pointer transition-colors ${n?"border-blue-500 bg-blue-50":"border-gray-300 hover:border-gray-400"}`,children:[C.jsx("p",{className:"text-gray-600",children:i?"Uploading...":"Drag and drop a file here, or click to browse"}),C.jsx("p",{className:"text-sm text-gray-400 mt-1",children:"PDF, TXT, Markdown — up to 20MB"}),C.jsx("input",{ref:l,type:"file",className:"hidden",accept:".pdf,.txt,.md",onChange:f=>{var m;return u((m=f.target.files)==null?void 0:m[0])}})]}),s&&C.jsx("p",{className:"text-red-500 text-sm mt-2",children:s})]})}const dk={uploaded:"Uploaded",queued:"Queued",extracting:"Extracting text",embedding:"Generating embeddings",ready:"Ready",failed:"Failed"},pk={uploaded:"bg-gray-100 text-gray-700",queued:"bg-yellow-100 text-yellow-700",extracting:"bg-yellow-100 text-yellow-700",embedding:"bg-yellow-100 text-yellow-700",ready:"bg-green-100 text-green-700",failed:"bg-red-100 text-red-700"};function hk({doc:e}){const t=e.status==="ready";return C.jsxs("div",{className:"border rounded-lg p-4 flex items-center justify-between bg-white",children:[C.jsxs("div",{children:[C.jsx("p",{className:"font-medium text-gray-800",children:e.title}),C.jsx("p",{className:"text-sm text-gray-400",children:e.originalFileName})]}),C.jsxs("div",{className:"flex items-center gap-3",children:[C.jsx("span",{className:`text-xs px-2 py-1 rounded-full ${pk[e.status]}`,children:dk[e.status]||e.status}),t&&C.jsx("button",{className:"text-blue-600 hover:text-blue-800 text-sm font-medium",title:"Ask questions about this document",children:"Chat"}),e.status==="failed"&&C.jsx("button",{className:"text-sm text-red-600 hover:text-red-800 font-medium",children:"Retry"})]})]})}function mk(){const[e,t]=x.useState([]),[n,r]=x.useState(!0),{currentUser:i}=eo(a=>a.user);x.useEffect(()=>{i&&o()},[i]);async function o(){r(!0);try{const a=await Kr.get("/documents");t(a.data)}catch(a){console.error("Failed to fetch documents:",a.message)}finally{r(!1)}}function s(a){t(l=>[a,...l])}return C.jsxs("div",{className:"max-w-3xl mx-auto py-10 px-4",children:[C.jsx("h1",{className:"text-2xl font-semibold text-gray-800 mb-1",children:"DevDocs AI"}),C.jsx("p",{className:"text-gray-500 mb-6",children:"Upload documents and (soon) ask questions about them."}),C.jsx("div",{className:"mb-8",children:i&&C.jsx(fk,{userId:i.id,onUploaded:s})}),C.jsx("h2",{className:"text-lg font-medium text-gray-700 mb-3",children:"Your documents"}),n?C.jsx("p",{className:"text-gray-400",children:"Loading..."}):e.length===0?C.jsx("p",{className:"text-gray-400",children:"No documents yet. Upload one to get started."}):C.jsx("div",{className:"space-y-3",children:e.map(a=>C.jsx(hk,{doc:a},a._id))})]})}const gk=()=>{};var Ap={};/**
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
 */const Vy=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},yk=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},Wy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=o>>2,f=(o&3)<<4|a>>4;let m=(a&15)<<2|u>>6,y=u&63;l||(y=64,s||(m=64)),r.push(n[c],n[f],n[m],n[y])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Vy(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):yk(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||f==null)throw new vk;const m=o<<2|a>>4;if(r.push(m),u!==64){const y=a<<4&240|u>>2;if(r.push(y),f!==64){const w=u<<6&192|f;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class vk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _k=function(e){const t=Vy(e);return Wy.encodeByteArray(t,!0)},Ky=function(e){return _k(e).replace(/\./g,"")},qy=function(e){try{return Wy.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function wk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Sk=()=>wk().__FIREBASE_DEFAULTS__,Ek=()=>{if(typeof process>"u"||typeof Ap>"u")return;const e=Ap.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Tk=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&qy(e[1]);return t&&JSON.parse(t)},hf=()=>{try{return gk()||Sk()||Ek()||Tk()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},xk=e=>{var t,n;return(n=(t=hf())==null?void 0:t.emulatorHosts)==null?void 0:n[e]},Gy=()=>{var e;return(e=hf())==null?void 0:e.config},Jy=e=>{var t;return(t=hf())==null?void 0:t[`_${e}`]};/**
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
 */class kk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ck(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(be())}function Pk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ik(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function bk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Rk(){const e=be();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Ok(){try{return typeof indexedDB=="object"}catch{return!1}}function Nk(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)==null?void 0:o.message)||"")}}catch(n){t(n)}})}/**
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
 */const Ak="FirebaseError";class xn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Ak,Object.setPrototypeOf(this,xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,lo.prototype.create)}}class lo{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?Dk(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new xn(i,a,r)}}function Dk(e,t){try{let n=0,r="";for(;n<e.length;){const i=e.indexOf("{$",n);if(i===-1){r+=e.substring(n);break}const o=e.indexOf("}",i+2);if(o===-1){r+=e.substring(n);break}const s=e.substring(i+2,o),a=t[s];r+=e.substring(n,i)+(a!=null?String(a):`<${s}?>`),n=o+1}return r}catch{return e}}function Lk(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Lr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(Dp(o)&&Dp(s)){if(!Lr(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Dp(e){return e!==null&&typeof e=="object"}/**
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
 */function uo(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Mk(e,t){const n=new Uk(e,t);return n.subscribe.bind(n)}class Uk{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");jk(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=El),i.error===void 0&&(i.error=El),i.complete===void 0&&(i.complete=El);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jk(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function El(){}/**
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
 */function qr(e){return e&&e._delegate?e._delegate:e}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function mf(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Fk(e){return(await fetch(e,{credentials:"include"})).ok}class Mr{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const In="[DEFAULT]";/**
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
 */class zk{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new kk;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Bk(t))try{this.getOrInitializeService({instanceIdentifier:In})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=In){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=In){return this.instances.has(t)}getOptions(t=In){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$k(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=In){return this.component?this.component.multipleInstances?t:In:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $k(e){return e===In?void 0:e}function Bk(e){return e.instantiationMode==="EAGER"}/**
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
 */class Hk{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new zk(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var K;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(K||(K={}));const Vk={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},Wk=K.INFO,Kk={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},qk=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Kk[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Qy{constructor(t){this.name=t,this._logLevel=Wk,this._logHandler=qk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in K))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Vk[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...t),this._logHandler(this,K.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...t),this._logHandler(this,K.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,K.INFO,...t),this._logHandler(this,K.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,K.WARN,...t),this._logHandler(this,K.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...t),this._logHandler(this,K.ERROR,...t)}}const Gk=(e,t)=>t.some(n=>e instanceof n);let Lp,Mp;function Jk(){return Lp||(Lp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qk(){return Mp||(Mp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xy=new WeakMap,Vu=new WeakMap,Yy=new WeakMap,Tl=new WeakMap,gf=new WeakMap;function Xk(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(gn(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&Xy.set(n,e)}).catch(()=>{}),gf.set(t,e),t}function Yk(e){if(Vu.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});Vu.set(e,t)}let Wu={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Vu.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Yy.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Zk(e){Wu=e(Wu)}function eC(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(xl(this),t,...n);return Yy.set(r,t.sort?t.sort():[t]),gn(r)}:Qk().includes(e)?function(...t){return e.apply(xl(this),t),gn(Xy.get(this))}:function(...t){return gn(e.apply(xl(this),t))}}function tC(e){return typeof e=="function"?eC(e):(e instanceof IDBTransaction&&Yk(e),Gk(e,Jk())?new Proxy(e,Wu):e)}function gn(e){if(e instanceof IDBRequest)return Xk(e);if(Tl.has(e))return Tl.get(e);const t=tC(e);return t!==e&&(Tl.set(e,t),gf.set(t,e)),t}const xl=e=>gf.get(e);function nC(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=gn(s);return r&&s.addEventListener("upgradeneeded",l=>{r(gn(s.result),l.oldVersion,l.newVersion,gn(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const rC=["get","getKey","getAll","getAllKeys","count"],iC=["put","add","delete","clear"],kl=new Map;function Up(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(kl.get(t))return kl.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=iC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||rC.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return kl.set(t,o),o}Zk(e=>({...e,get:(t,n,r)=>Up(t,n)||e.get(t,n,r),has:(t,n)=>!!Up(t,n)||e.has(t,n)}));/**
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
 */class oC{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(sC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function sC(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ku="@firebase/app",jp="0.16.0";/**
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
 */const Ht=new Qy("@firebase/app"),aC="@firebase/app-compat",lC="@firebase/analytics-compat",uC="@firebase/analytics",cC="@firebase/app-check-compat",fC="@firebase/app-check",dC="@firebase/auth",pC="@firebase/auth-compat",hC="@firebase/database",mC="@firebase/data-connect",gC="@firebase/database-compat",yC="@firebase/functions",vC="@firebase/functions-compat",_C="@firebase/installations",wC="@firebase/installations-compat",SC="@firebase/messaging",EC="@firebase/messaging-compat",TC="@firebase/performance",xC="@firebase/performance-compat",kC="@firebase/remote-config",CC="@firebase/remote-config-compat",PC="@firebase/storage",IC="@firebase/storage-compat",bC="@firebase/firestore",RC="@firebase/ai",OC="@firebase/firestore-compat",NC="firebase",AC="12.17.0";/**
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
 */const qu="[DEFAULT]",DC={[Ku]:"fire-core",[aC]:"fire-core-compat",[uC]:"fire-analytics",[lC]:"fire-analytics-compat",[fC]:"fire-app-check",[cC]:"fire-app-check-compat",[dC]:"fire-auth",[pC]:"fire-auth-compat",[hC]:"fire-rtdb",[mC]:"fire-data-connect",[gC]:"fire-rtdb-compat",[yC]:"fire-fn",[vC]:"fire-fn-compat",[_C]:"fire-iid",[wC]:"fire-iid-compat",[SC]:"fire-fcm",[EC]:"fire-fcm-compat",[TC]:"fire-perf",[xC]:"fire-perf-compat",[kC]:"fire-rc",[CC]:"fire-rc-compat",[PC]:"fire-gcs",[IC]:"fire-gcs-compat",[bC]:"fire-fst",[OC]:"fire-fst-compat",[RC]:"fire-vertex","fire-js":"fire-js",[NC]:"fire-js-all"};/**
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
 */const Ks=new Map,LC=new Map,Gu=new Map;function Fp(e,t){try{e.container.addComponent(t)}catch(n){Ht.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Vi(e){const t=e.name;if(Gu.has(t))return Ht.debug(`There were multiple attempts to register component ${t}.`),!1;Gu.set(t,e);for(const n of Ks.values())Fp(n,e);for(const n of LC.values())Fp(n,e);return!0}function Zy(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function yt(e){return e==null?!1:e.settings!==void 0}/**
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
 */const MC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nt=new lo("app","Firebase",MC);/**
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
 */class UC{constructor(t,n,r){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Mr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Nt.create("app-deleted",{appName:this._name})}}/**
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
 */const co=AC;function ev(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r={name:qu,automaticDataCollectionEnabled:!0,...t},i=r.name;if(typeof i!="string"||!i)throw Nt.create("bad-app-name",{appName:String(i)});if(n||(n=Gy()),!n)throw Nt.create("no-options");const o=Ks.get(i);if(o)if(Lr(n,o.options)){if(Lr(r,o.config))return o;throw Nt.create("duplicate-app",{appName:i,mismatchedParam:"config",oldValue:JSON.stringify(o.config),newValue:JSON.stringify(r)})}else throw Nt.create("duplicate-app",{appName:i,mismatchedParam:"options",oldValue:JSON.stringify(o.options),newValue:JSON.stringify(n)});const s=new Hk(i);for(const l of Gu.values())s.addComponent(l);const a=new UC(n,r,s);return Ks.set(i,a),a}function jC(e=qu){const t=Ks.get(e);if(!t&&e===qu&&Gy())return ev();if(!t)throw Nt.create("no-app",{appName:e});return t}function Er(e,t,n){let r=DC[e]??e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const s=[`Unable to register library "${r}" with version "${t}":`];i&&s.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&s.push("and"),o&&s.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ht.warn(s.join(" "));return}Vi(new Mr(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const FC="firebase-heartbeat-database",zC=1,Wi="firebase-heartbeat-store";let Cl=null;function tv(){return Cl||(Cl=nC(FC,zC,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Wi)}catch(n){console.warn(n)}}}}).catch(e=>{throw Nt.create("idb-open",{originalErrorMessage:e.message})})),Cl}async function $C(e){try{const n=(await tv()).transaction(Wi),r=await n.objectStore(Wi).get(nv(e));return await n.done,r}catch(t){if(t instanceof xn)Ht.warn(t.message);else{const n=Nt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ht.warn(n.message)}}}async function zp(e,t){try{const r=(await tv()).transaction(Wi,"readwrite");await r.objectStore(Wi).put(t,nv(e)),await r.done}catch(n){if(n instanceof xn)Ht.warn(n.message);else{const r=Nt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ht.warn(r.message)}}}function nv(e){return`${e.name}!${e.options.appId}`}/**
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
 */const BC=1024,HC=30;class VC{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new KC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=$p();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>HC){const s=qC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ht.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=$p(),{heartbeatsToSend:r,unsentEntries:i}=WC(this._heartbeatsCache.heartbeats),o=Ky(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return Ht.warn(n),""}}}function $p(){return new Date().toISOString().substring(0,10)}function WC(e,t=BC){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Bp(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Bp(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class KC{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ok()?Nk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await $C(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return zp(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return zp(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Bp(e){return Ky(JSON.stringify({version:2,heartbeats:e})).length}function qC(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
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
 */function GC(e){Vi(new Mr("platform-logger",t=>new oC(t),"PRIVATE")),Vi(new Mr("heartbeat",t=>new VC(t),"PRIVATE")),Er(Ku,jp,e),Er(Ku,jp,"esm2020"),Er("fire-js","")}/**
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
 */GC("");function rv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const JC=rv,iv=new lo("auth","Firebase",rv());/**
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
 */const qs=new Qy("@firebase/auth");function ov(e,...t){qs.logLevel<=K.WARN&&qs.warn(`Auth (${co}): ${e}`,...t)}function ss(e,...t){qs.logLevel<=K.ERROR&&qs.error(`Auth (${co}): ${e}`,...t)}/**
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
 */function St(e,...t){throw vf(e,...t)}function dt(e,...t){return vf(e,...t)}function yf(e,t,n){const r={...JC(),[t]:n};return new lo("auth","Firebase",r).create(t,{appName:e.name})}function jn(e){return yf(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function QC(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&St(e,"argument-error"),yf(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function vf(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return iv.create(e,...t)}function L(e,t,...n){if(!e)throw vf(t,...n)}function At(e){const t="INTERNAL ASSERTION FAILED: "+e;throw ss(t),new Error(t)}function Vt(e,t){e||At(t)}/**
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
 */function Ju(){var e;return typeof self<"u"&&((e=self.location)==null?void 0:e.href)||""}function XC(){return Hp()==="http:"||Hp()==="https:"}function Hp(){var e;return typeof self<"u"&&((e=self.location)==null?void 0:e.protocol)||null}/**
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
 */function YC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(XC()||Ik()||"connection"in navigator)?navigator.onLine:!0}function ZC(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class fo{constructor(t,n){this.shortDelay=t,this.longDelay=n,Vt(n>t,"Short delay should be less than long delay!"),this.isMobile=Ck()||bk()}get(){return YC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function _f(e,t){Vt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class sv{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;At("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;At("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;At("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const eP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const tP=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],nP=new fo(3e4,6e4);function wf(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function Gr(e,t,n,r,i={}){return av(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=uo({...s,key:e.config.apiKey}).slice(1),l=await e._getAdditionalHeaders();l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode);const u={method:t,headers:l,...o};return Pk()||(u.referrerPolicy="strict-origin-when-cross-origin"),e.emulatorConfig&&mf(e.emulatorConfig.host)&&(u.credentials="include"),sv.fetch()(await lv(e,e.config.apiHost,n,a),u)})}async function av(e,t,n){e._canInitEmulator=!1;const r={...eP,...t};try{const i=new iP(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Uo(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Uo(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Uo(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw Uo(e,"user-disabled",s);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw yf(e,c,u);St(e,c)}}catch(i){if(i instanceof xn)throw i;St(e,"network-request-failed",{message:String(i)})}}async function rP(e,t,n,r,i={}){const o=await Gr(e,t,n,r,i);return"mfaPendingCredential"in o&&St(e,"multi-factor-auth-required",{_serverResponse:o}),o}async function lv(e,t,n,r){const i=`${t}${n}?${r}`,o=e,s=o.config.emulator?_f(e.config,i):`${e.config.apiScheme}://${i}`;return tP.includes(n)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(s).toString():s}class iP{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(dt(this.auth,"network-request-failed")),nP.get())})}}function Uo(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=dt(e,t,r);return i.customData._tokenResponse=n,i}/**
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
 */async function oP(e,t){return Gr(e,"POST","/v1/accounts:delete",t)}async function Gs(e,t){return Gr(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function _i(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function sP(e,t=!1){const n=qr(e),r=await n.getIdToken(t),i=Sf(r);L(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:_i(Pl(i.auth_time)),issuedAtTime:_i(Pl(i.iat)),expirationTime:_i(Pl(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Pl(e){return Number(e)*1e3}function Sf(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return ss("JWT malformed, contained fewer than 3 sections"),null;try{const i=qy(n);return i?JSON.parse(i):(ss("Failed to decode base64 JWT payload"),null)}catch(i){return ss("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Vp(e){const t=Sf(e);return L(t,"internal-error"),L(typeof t.exp<"u","internal-error"),L(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Ki(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof xn&&aP(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function aP({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class lP{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Qu{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=_i(this.lastLoginAt),this.creationTime=_i(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Js(e){var f;const t=e.auth,n=await e.getIdToken(),r=await Ki(e,Gs(t,{idToken:n}));L(r==null?void 0:r.users.length,t,"internal-error");const i=r.users[0];e._notifyReloadListener(i);const o=(f=i.providerUserInfo)!=null&&f.length?uv(i.providerUserInfo):[],s=cP(e.providerData,o),a=e.isAnonymous,l=!(e.email&&i.passwordHash)&&!(s!=null&&s.length),u=a?l:!1,c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Qu(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(e,c)}async function uP(e){const t=qr(e);await Js(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function cP(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function uv(e){return e.map(({providerId:t,...n})=>({providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function fP(e,t){const n=await av(e,{},async()=>{const r=uo({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=await lv(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return e.emulatorConfig&&mf(e.emulatorConfig.host)&&(l.credentials="include"),sv.fetch()(s,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function dP(e,t){return Gr(e,"POST","/v2/accounts:revokeToken",wf(e,t))}/**
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
 */class Tr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){L(t.idToken,"internal-error"),L(typeof t.idToken<"u","internal-error"),L(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Vp(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){L(t.length!==0,"internal-error");const n=Vp(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(L(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await fP(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Tr;return r&&(L(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(L(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(L(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Tr,this.toJSON())}_performRefresh(){return At("not implemented")}}/**
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
 */function Jt(e,t){L(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class ut{constructor({uid:t,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new lP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Qu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const n=await Ki(this,this.stsTokenManager.getToken(this.auth,t));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return sP(this,t)}reload(){return uP(this)}_assign(t){this!==t&&(L(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>({...n})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new ut({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(t){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Js(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(yt(this.auth.app))return Promise.reject(jn(this.auth));const t=await this.getIdToken();return await Ki(this,oP(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){const r=n.displayName??void 0,i=n.email??void 0,o=n.phoneNumber??void 0,s=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,u=n.createdAt??void 0,c=n.lastLoginAt??void 0,{uid:f,emailVerified:m,isAnonymous:y,providerData:w,stsTokenManager:_}=n;L(f&&_,t,"internal-error");const S=Tr.fromJSON(this.name,_);L(typeof f=="string",t,"internal-error"),Jt(r,t.name),Jt(i,t.name),L(typeof m=="boolean",t,"internal-error"),L(typeof y=="boolean",t,"internal-error"),Jt(o,t.name),Jt(s,t.name),Jt(a,t.name),Jt(l,t.name),Jt(u,t.name),Jt(c,t.name);const d=new ut({uid:f,auth:t,email:i,emailVerified:m,displayName:r,isAnonymous:y,photoURL:s,phoneNumber:o,tenantId:a,stsTokenManager:S,createdAt:u,lastLoginAt:c});return w&&Array.isArray(w)&&(d.providerData=w.map(p=>({...p}))),l&&(d._redirectEventId=l),d}static async _fromIdTokenResponse(t,n,r=!1){const i=new Tr;i.updateFromServerResponse(n);const o=new ut({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Js(o),o}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];L(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?uv(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),a=new Tr;a.updateFromIdToken(r);const l=new ut({uid:i.localId,auth:t,stsTokenManager:a,isAnonymous:s}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Qu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(l,u),l}}/**
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
 */const Wp=new Map;function Dt(e){Vt(e instanceof Function,"Expected a class definition");let t=Wp.get(e);return t?(Vt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Wp.set(e,t),t)}/**
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
 */class cv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}cv.type="NONE";const Kp=cv;/**
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
 */function as(e,t,n){return`firebase:${e}:${t}:${n}`}class xr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=as(this.userKey,i.apiKey,o),this.fullPersistenceKey=as("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await Gs(this.auth,{idToken:t}).catch(()=>{});return n?ut._fromGetAccountInfoResponse(this.auth,n,t):null}return ut._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new xr(Dt(Kp),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Dt(Kp);const s=as(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const c=await u._get(s);if(c){let f;if(typeof c=="string"){const m=await Gs(t,{idToken:c}).catch(()=>{});if(!m)break;f=await ut._fromGetAccountInfoResponse(t,m,c)}else f=ut._fromJSON(t,c);u!==o&&(a=f),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new xr(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new xr(o,t,r))}}/**
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
 */function qp(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(hv(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(fv(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(gv(t))return"Blackberry";if(yv(t))return"Webos";if(dv(t))return"Safari";if((t.includes("chrome/")||pv(t))&&!t.includes("edge/"))return"Chrome";if(mv(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function fv(e=be()){return/firefox\//i.test(e)}function dv(e=be()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function pv(e=be()){return/crios\//i.test(e)}function hv(e=be()){return/iemobile/i.test(e)}function mv(e=be()){return/android/i.test(e)}function gv(e=be()){return/blackberry/i.test(e)}function yv(e=be()){return/webos/i.test(e)}function Ef(e=be()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function pP(e=be()){var t;return Ef(e)&&!!((t=window.navigator)!=null&&t.standalone)}function hP(){return Rk()&&document.documentMode===10}function vv(e=be()){return Ef(e)||mv(e)||yv(e)||gv(e)||/windows phone/i.test(e)||hv(e)}/**
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
 */function _v(e,t=[]){let n;switch(e){case"Browser":n=qp(be());break;case"Worker":n=`${qp(be())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${co}/${r}`}/**
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
 */class mP{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function gP(e,t={}){return Gr(e,"GET","/v2/passwordPolicy",wf(e,t))}/**
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
 */const yP=6;class vP{constructor(t){var r;const n=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??yP,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=t.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,n),this.validatePasswordCharacterOptions(t,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
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
 */class _P{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gp(this),this.idTokenSubscription=new Gp(this),this.beforeStateQueue=new mP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=iv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Dt(n)),this._initializationPromise=this.queue(async()=>{var r,i,o;if(!this._deleted&&(this.persistenceManager=await xr.create(this,t),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)==null?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Gs(this,{idToken:t}),r=await ut._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var o;if(yt(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(o=this.redirectUser)==null?void 0:o._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Js(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=ZC()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(yt(this.app))return Promise.reject(jn(this));const n=t?qr(t):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&L(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return yt(this.app)?Promise.reject(jn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return yt(this.app)?Promise.reject(jn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Dt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await gP(this),n=new vP(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new lo("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await dP(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)==null?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Dt(t)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await xr.create(this,[Dt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{s=!0,l()}}else{const l=t.addObserver(n);return()=>{s=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=_v(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var n;if(yt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return t!=null&&t.error&&ov(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Oa(e){return qr(e)}class Gp{constructor(t){this.auth=t,this.observer=null,this.addObserver=Mk(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Tf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function wP(e){Tf=e}function SP(e){return Tf.loadJS(e)}function EP(){return Tf.gapiScript}function TP(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
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
 */function xP(e,t){const n=Zy(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Lr(o,t??{}))return i;St(i,"already-initialized")}return n.initialize({options:t})}function kP(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Dt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function CP(e,t,n){const r=Oa(e);L(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,o=wv(t),{host:s,port:a}=PP(t),l=a===null?"":`:${a}`,u={url:`${o}//${s}${l}/`},c=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){L(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),L(Lr(u,r.config.emulator)&&Lr(c,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=c,r.settings.appVerificationDisabledForTesting=!0,mf(s)?Fk(`${o}//${s}${l}`):IP()}function wv(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function PP(e){const t=wv(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Jp(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:Jp(s)}}}function Jp(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function IP(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class Sv{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return At("not implemented")}_getIdTokenResponse(t){return At("not implemented")}_linkToIdToken(t,n){return At("not implemented")}_getReauthenticationResolver(t){return At("not implemented")}}/**
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
 */async function kr(e,t){return rP(e,"POST","/v1/accounts:signInWithIdp",wf(e,t))}/**
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
 */const bP="http://localhost";class Jn extends Sv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Jn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):St("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i,...o}=n;if(!r||!i)return null;const s=new Jn(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return kr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,kr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,kr(t,n)}buildRequest(){const t={requestUri:bP,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=uo(n)}return t}}/**
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
 */class xf{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class po extends xf{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class en extends po{constructor(){super("facebook.com")}static credential(t){return Jn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return en.credentialFromTaggedObject(t)}static credentialFromError(t){return en.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return en.credential(t.oauthAccessToken)}catch{return null}}}en.FACEBOOK_SIGN_IN_METHOD="facebook.com";en.PROVIDER_ID="facebook.com";/**
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
 */class bt extends po{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Jn._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return bt.credentialFromTaggedObject(t)}static credentialFromError(t){return bt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return bt.credential(n,r)}catch{return null}}}bt.GOOGLE_SIGN_IN_METHOD="google.com";bt.PROVIDER_ID="google.com";/**
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
 */class tn extends po{constructor(){super("github.com")}static credential(t){return Jn._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return tn.credentialFromTaggedObject(t)}static credentialFromError(t){return tn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return tn.credential(t.oauthAccessToken)}catch{return null}}}tn.GITHUB_SIGN_IN_METHOD="github.com";tn.PROVIDER_ID="github.com";/**
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
 */class nn extends po{constructor(){super("twitter.com")}static credential(t,n){return Jn._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return nn.credentialFromTaggedObject(t)}static credentialFromError(t){return nn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return nn.credential(n,r)}catch{return null}}}nn.TWITTER_SIGN_IN_METHOD="twitter.com";nn.PROVIDER_ID="twitter.com";/**
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
 */class Ur{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await ut._fromIdTokenResponse(t,r,i),s=Qp(r);return new Ur({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Qp(r);return new Ur({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Qp(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class Qs extends xn{constructor(t,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Qs.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Qs(t,n,r,i)}}function Ev(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Qs._fromErrorAndOperation(e,o,t,r):o})}async function RP(e,t,n=!1){const r=await Ki(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ur._forOperation(e,"link",r)}/**
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
 */async function OP(e,t,n=!1){const{auth:r}=e;if(yt(r.app))return Promise.reject(jn(r));const i="reauthenticate";try{const o=await Ki(e,Ev(r,i,t,e),n);L(o.idToken,r,"internal-error");const s=Sf(o.idToken);L(s,r,"internal-error");const{sub:a}=s;return L(e.uid===a,r,"user-mismatch"),Ur._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&St(r,"user-mismatch"),o}}/**
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
 */async function NP(e,t,n=!1){if(yt(e.app))return Promise.reject(jn(e));const r="signIn",i=await Ev(e,r,t),o=await Ur._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}function AP(e,t,n,r){return qr(e).onIdTokenChanged(t,n,r)}function DP(e,t,n){return qr(e).beforeAuthStateChanged(t,n)}const Xs="__sak";/**
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
 */class Tv{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xs,"1"),this.storage.removeItem(Xs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const LP=1e3,MP=10;class xv extends Tv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=vv(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;n?this.detachListener():this.stopPolling();const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);hP()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,MP):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},LP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}xv.type="LOCAL";const UP=xv;/**
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
 */class kv extends Tv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}kv.type="SESSION";const Cv=kv;/**
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
 */function jP(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Na{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Na(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await jP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Na.receivers=[];/**
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
 */function kf(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class FP{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=kf("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(c),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(m.data.response);break;default:clearTimeout(c),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function wt(){return window}function zP(e){wt().location.href=e}/**
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
 */function Pv(){return typeof wt().WorkerGlobalScope<"u"&&typeof wt().importScripts=="function"}async function $P(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function BP(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)==null?void 0:e.controller)||null}function HP(){return Pv()?self:null}/**
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
 */const Iv="firebaseLocalStorageDb",VP=1,Ys="firebaseLocalStorage",bv="fbase_key";class ho{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Aa(e,t){return e.transaction([Ys],t?"readwrite":"readonly").objectStore(Ys)}function WP(){const e=indexedDB.deleteDatabase(Iv);return new ho(e).toPromise()}function Rv(){const e=indexedDB.open(Iv,VP);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Ys,{keyPath:bv})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Ys)?t(r):(r.close(),await WP(),t(await Rv()))})})}async function Xp(e,t,n){const r=Aa(e,!0).put({[bv]:t,value:n});return new ho(r).toPromise()}async function KP(e,t){const n=Aa(e,!1).get(t),r=await new ho(n).toPromise();return r===void 0?null:r.value}function Yp(e,t){const n=Aa(e,!0).delete(t);return new ho(n).toPromise()}const qP=800,GP=3;class Ov{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow)),typeof document<"u"&&typeof document.addEventListener=="function"&&document.addEventListener("visibilitychange",this.onVisibilityChange)}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow)),typeof document<"u"&&typeof document.removeEventListener=="function"&&document.removeEventListener("visibilitychange",this.onVisibilityChange)}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isHiding=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isHiding=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(t=>t.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isHiding&&(this.isHiding=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this.onVisibilityChange=()=>{typeof document<"u"&&(document.visibilityState==="hidden"?this.onPageHide():document.visibilityState==="visible"&&this.onPageShow())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){if(this.isHiding)throw new Error("Database is closing/hidden");return this.dbPromise?this.dbPromise:(this.dbPromise=Rv(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(this.isHiding||n++>GP)throw r;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return Pv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Na._getInstance(HP()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await $P(),!this.activeServiceWorker)return;this.sender=new FP(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&(n=t[0])!=null&&n.fulfilled&&(r=t[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||BP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async t=>{await Xp(t,Xs,"1"),await Yp(t,Xs)}),!0):!1}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Xp(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>KP(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Yp(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){if(this.isHiding)return[];try{const t=await this._withRetries(i=>{const o=Aa(i,!1).getAll();return new ho(o).toPromise()});if(this.isHiding)return[];if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}catch(t){return this.isHiding||ov(`Firebase Auth cross-tab polling failed with error: ${t}`),[]}}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}Ov.type="LOCAL";const JP=Ov;new fo(3e4,6e4);/**
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
 */function Nv(e,t){return t?Dt(t):(L(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Cf extends Sv{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return kr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return kr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return kr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function QP(e){return NP(e.auth,new Cf(e),e.bypassAuthState)}function XP(e){const{auth:t,user:n}=e;return L(n,t,"internal-error"),OP(n,new Cf(e),e.bypassAuthState)}async function YP(e){const{auth:t,user:n}=e;return L(n,t,"internal-error"),RP(n,new Cf(e),e.bypassAuthState)}/**
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
 */class Av{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return QP;case"linkViaPopup":case"linkViaRedirect":return YP;case"reauthViaPopup":case"reauthViaRedirect":return XP;default:St(this.auth,"internal-error")}}resolve(t){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ZP=new fo(2e3,1e4);async function eI(e,t,n){if(yt(e.app))return Promise.reject(dt(e,"operation-not-supported-in-this-environment"));const r=Oa(e);QC(e,t,xf);const i=Nv(r,n);return new An(r,"signInViaPopup",t,i).executeNotNull()}class An extends Av{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,An.currentPopupAction&&An.currentPopupAction.cancel(),An.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return L(t,this.auth,"internal-error"),t}async onExecution(){Vt(this.filter.length===1,"Popup operations only handle one event");const t=kf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)==null?void 0:t.associatedEvent)||null}cancel(){this.reject(dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,An.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,ZP.get())};t()}}An.currentPopupAction=null;/**
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
 */const tI="pendingRedirect",ls=new Map;class nI extends Av{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=ls.get(this.auth._key());if(!t){try{const r=await rI(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}ls.set(this.auth._key(),t)}return this.bypassAuthState||ls.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function rI(e,t){const n=sI(t),r=oI(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function iI(e,t){ls.set(e._key(),t)}function oI(e){return Dt(e._redirectPersistence)}function sI(e){return as(tI,e.config.apiKey,e.name)}async function aI(e,t,n=!1){if(yt(e.app))return Promise.reject(jn(e));const r=Oa(e),i=Nv(r,t),s=await new nI(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
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
 */const lI=10*60*1e3;class uI{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!cI(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Dv(t)){const i=((r=t.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(dt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=lI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zp(t))}saveEventToCache(t){this.cachedEventUids.add(Zp(t)),this.lastProcessedEventTime=Date.now()}}function Zp(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Dv({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function cI(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Dv(e);default:return!1}}/**
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
 */async function fI(e,t={}){return Gr(e,"GET","/v1/projects",t)}/**
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
 */const dI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pI=/^https?/;async function hI(e){if(e.config.emulator)return;const{authorizedDomains:t}=await fI(e);for(const n of t)try{if(mI(n))return}catch{}St(e,"unauthorized-domain")}function mI(e){const t=Ju(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!pI.test(n))return!1;if(dI.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const gI=new fo(3e4,6e4);function eh(){const e=wt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function yI(e){return new Promise((t,n)=>{var i,o,s;function r(){eh(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{eh(),n(dt(e,"network-request-failed"))},timeout:gI.get()})}if((o=(i=wt().gapi)==null?void 0:i.iframes)!=null&&o.Iframe)t(gapi.iframes.getContext());else if((s=wt().gapi)!=null&&s.load)r();else{const a=TP("iframefcb");return wt()[a]=()=>{gapi.load?r():n(dt(e,"network-request-failed"))},SP(`${EP()}?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw us=null,t})}let us=null;function vI(e){return us=us||yI(e),us}/**
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
 */const _I=new fo(5e3,15e3),wI="__/auth/iframe",SI="emulator/auth/iframe",EI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},TI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xI(e){const t=e.config;L(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?_f(t,SI):`https://${e.config.authDomain}/${wI}`,r={apiKey:t.apiKey,appName:e.name,v:co},i=TI.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${uo(r).slice(1)}`}async function kI(e){const t=await vI(e),n=wt().gapi;return L(n,e,"internal-error"),t.open({where:document.body,url:xI(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:EI,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=dt(e,"network-request-failed"),a=wt().setTimeout(()=>{o(s)},_I.get());function l(){wt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
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
 */const CI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},PI=500,II=600,bI="_blank",RI="http://localhost";class th{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function OI(e,t,n,r=PI,i=II){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...CI,width:r.toString(),height:i.toString(),top:o,left:s},u=be().toLowerCase();n&&(a=pv(u)?bI:n),fv(u)&&(t=t||RI,l.scrollbars="yes");const c=Object.entries(l).reduce((m,[y,w])=>`${m}${y}=${w},`,"");if(pP(u)&&a!=="_self")return NI(t||"",a),new th(null);const f=window.open(t||"",a,c);L(f,e,"popup-blocked");try{f.focus()}catch{}return new th(f)}function NI(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const AI="__/auth/handler",DI="emulator/auth/handler",LI=encodeURIComponent("fac");async function nh(e,t,n,r,i,o){L(e.config.authDomain,e,"auth-domain-config-required"),L(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:co,eventId:i};if(t instanceof xf){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",Lk(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,f]of Object.entries({}))s[c]=f}if(t instanceof po){const c=t.getScopes().filter(f=>f!=="");c.length>0&&(s.scopes=c.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await e._getAppCheckToken(),u=l?`#${LI}=${encodeURIComponent(l)}`:"";return`${MI(e)}?${uo(a).slice(1)}${u}`}function MI({config:e}){return e.emulator?_f(e,DI):`https://${e.authDomain}/${AI}`}/**
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
 */const Il="webStorageSupport";class UI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cv,this._completeRedirectFn=aI,this._overrideRedirectResult=iI}async _openPopup(t,n,r,i){var s;Vt((s=this.eventManagers[t._key()])==null?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await nh(t,n,r,Ju(),i);return OI(t,o,kf())}async _openRedirect(t,n,r,i){await this._originValidation(t);const o=await nh(t,n,r,Ju(),i);return zP(o),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Vt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await kI(t),r=new uI(t);return n.register("authEvent",i=>(L(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Il,{type:Il},i=>{var s;const o=(s=i==null?void 0:i[0])==null?void 0:s[Il];o!==void 0&&n(!!o),St(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=hI(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return vv()||dv()||Ef()}}const jI=UI;var rh="@firebase/auth",ih="1.13.4";/**
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
 */class FI{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)==null?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function zI(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $I(e){Vi(new Mr("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;L(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_v(e)},u=new _P(r,i,o,l);return kP(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Vi(new Mr("auth-internal",t=>{const n=Oa(t.getProvider("auth").getImmediate());return(r=>new FI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Er(rh,ih,zI(e)),Er(rh,ih,"esm2020")}/**
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
 */const BI=5*60,HI=Jy("authIdTokenMaxAge")||BI;let oh=null;const VI=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>HI)return;const i=n==null?void 0:n.token;oh!==i&&(oh=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function WI(e=jC()){const t=Zy(e,"auth");if(t.isInitialized())return t.getImmediate();const n=xP(e,{popupRedirectResolver:jI,persistence:[JP,UP,Cv]}),r=Jy("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const s=VI(o.toString());DP(n,s,()=>s(n.currentUser)),AP(n,a=>s(a))}}const i=xk("auth");return i&&CP(n,`http://${i}`),n}function KI(){var e;return((e=document.getElementsByTagName("head"))==null?void 0:e[0])??document}wP({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=dt("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",KI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$I("Browser");var qI="firebase",GI="12.17.1";/**
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
 */Er(qI,GI,"app");const JI={apiKey:"placeholder-api-key",authDomain:"placeholder-auth-domain",projectId:"placeholder-project-id",storageBucket:void 0,messagingSenderId:void 0,appId:void 0},QI=ev(JI);var Lv={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},sh=B.createContext&&B.createContext(Lv),XI=["attr","size","title"];function YI(e,t){if(e==null)return{};var n,r,i=ZI(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function ZI(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Zs(){return Zs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zs.apply(null,arguments)}function ah(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ea(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ah(Object(n),!0).forEach(function(r){eb(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ah(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function eb(e,t,n){return(t=tb(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function tb(e){var t=nb(e,"string");return typeof t=="symbol"?t:t+""}function nb(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Mv(e){return e&&e.map((t,n)=>B.createElement(t.tag,ea({key:n},t.attr),Mv(t.child)))}function Uv(e){return t=>B.createElement(rb,Zs({attr:ea({},e.attr)},t),Mv(e.child))}function rb(e){var t=n=>{var r=e.attr,i=e.size,o=e.title,s=YI(e,XI),a=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),B.createElement("svg",Zs({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:l,style:ea(ea({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&B.createElement("title",null,o),e.children)};return sh!==void 0?B.createElement(sh.Consumer,null,n=>t(n)):t(Lv)}function ib(e){return Uv({attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`},child:[]},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`},child:[]},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`},child:[]},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`},child:[]}]})(e)}function jv(){const e=Qc(),t=Hr(),n=async()=>{var r,i,o,s;try{e(Zg());const a=new bt;a.setCustomParameters({prompt:"select_account"});const l=WI(QI),c=await(await eI(l,a)).user.getIdToken(),f=await Kr.post("/auth/google",{idToken:c});e(ey(f.data.user)),$.success(f.data.message||"Signed in successfully"),t("/")}catch(a){e(ty(((i=(r=a.response)==null?void 0:r.data)==null?void 0:i.error)||a.message)),$.error(((s=(o=a.response)==null?void 0:o.data)==null?void 0:s.error)||"Google sign-in failed")}};return C.jsxs("button",{type:"button",onClick:n,className:"w-full flex items-center justify-center gap-3 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-semibold p-3 rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1",children:[C.jsx(ib,{className:"h-5 w-5"}),"Continue with Google"]})}function ob(){const[e,t]=x.useState({email:"",password:""}),[n,r]=x.useState({}),{isLoading:i}=eo(c=>c.user),o=Hr(),s=Qc(),a=c=>{t({...e,[c.target.id]:c.target.value}),n[c.target.id]&&r({...n,[c.target.id]:""})},l=()=>{const c={};return e.email?/\S+@\S+\.\S+/.test(e.email)||(c.email="Email is invalid"):c.email="Email is required",e.password?e.password.length<6&&(c.password="Password must be at least 6 characters"):c.password="Password is required",c},u=async c=>{var m,y;c.preventDefault();const f=l();if(Object.keys(f).length>0){r(f);return}try{s(Zg());const w=await Kr.post("/auth/signin",e);s(ey(w.data.user)),$.success("Welcome back!"),o("/")}catch(w){const _=((y=(m=w.response)==null?void 0:m.data)==null?void 0:y.error)||"Login failed";s(ty(_)),$.error(_)}};return C.jsx("div",{className:"min-h-[80vh] flex items-center justify-center px-4 py-12",children:C.jsxs("div",{className:"max-w-md w-full bg-white p-8 rounded-2xl shadow-sm border border-gray-100",children:[C.jsxs("div",{className:"text-center mb-8",children:[C.jsx("h2",{className:"text-3xl font-extrabold text-gray-900 tracking-tight",children:"Sign In"}),C.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Access your developer knowledge hub"})]}),C.jsxs("form",{onSubmit:u,className:"space-y-5",children:[C.jsxs("div",{children:[C.jsx("label",{className:"block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1",children:"Email Address"}),C.jsx("input",{type:"email",id:"email",placeholder:"name@example.com",value:e.email,onChange:a,className:`w-full p-3 rounded-lg border bg-gray-50 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all ${n.email?"border-red-400 focus:ring-red-400":"border-gray-200"}`}),n.email&&C.jsx("p",{className:"text-red-500 text-xs mt-1.5",children:n.email})]}),C.jsxs("div",{children:[C.jsx("label",{className:"block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1",children:"Password"}),C.jsx("input",{type:"password",id:"password",placeholder:"••••••••",value:e.password,onChange:a,className:`w-full p-3 rounded-lg border bg-gray-50 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all ${n.password?"border-red-400 focus:ring-red-400":"border-gray-200"}`}),n.password&&C.jsx("p",{className:"text-red-500 text-xs mt-1.5",children:n.password})]}),C.jsx("button",{type:"submit",disabled:i,className:"w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-lg shadow-sm hover:shadow transition-all disabled:opacity-75 focus:outline-none",children:i?"Signing in...":"Sign In"}),C.jsxs("div",{className:"relative flex py-2 items-center",children:[C.jsx("div",{className:"flex-grow border-t border-gray-150"}),C.jsx("span",{className:"flex-shrink mx-4 text-gray-400 text-xs uppercase tracking-wider",children:"Or"}),C.jsx("div",{className:"flex-grow border-t border-gray-150"})]}),C.jsx(jv,{})]}),C.jsxs("p",{className:"text-center text-sm text-gray-500 mt-8",children:["Don't have an account?"," ",C.jsx(mr,{to:"/sign-up",className:"font-medium text-blue-600 hover:text-blue-700 transition-colors",children:"Sign Up"})]})]})})}function sb(){const[e,t]=x.useState({name:"",email:"",password:""}),[n,r]=x.useState({}),[i,o]=x.useState(!1),s=Hr(),a=c=>{t({...e,[c.target.id]:c.target.value}),n[c.target.id]&&r({...n,[c.target.id]:""})},l=()=>{const c={};return e.name?e.name.length<3&&(c.name="Name must be at least 3 characters"):c.name="Name is required",e.email?/\S+@\S+\.\S+/.test(e.email)||(c.email="Email is invalid"):c.email="Email is required",e.password?e.password.length<6&&(c.password="Password must be at least 6 characters"):c.password="Password is required",c},u=async c=>{var m,y;c.preventDefault();const f=l();if(Object.keys(f).length>0){r(f);return}try{o(!0);const w=await Kr.post("/auth/signup",e);$.success(w.data.message||"Account created successfully! Please sign in."),s("/sign-in")}catch(w){const _=((y=(m=w.response)==null?void 0:m.data)==null?void 0:y.error)||"Registration failed";$.error(_)}finally{o(!1)}};return C.jsx("div",{className:"min-h-[80vh] flex items-center justify-center px-4 py-12",children:C.jsxs("div",{className:"max-w-md w-full bg-white p-8 rounded-2xl shadow-sm border border-gray-100",children:[C.jsxs("div",{className:"text-center mb-8",children:[C.jsx("h2",{className:"text-3xl font-extrabold text-gray-900 tracking-tight",children:"Create Account"}),C.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Start organizing your technical documents"})]}),C.jsxs("form",{onSubmit:u,className:"space-y-5",children:[C.jsxs("div",{children:[C.jsx("label",{className:"block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1",children:"Full Name"}),C.jsx("input",{type:"text",id:"name",placeholder:"John Doe",value:e.name,onChange:a,className:`w-full p-3 rounded-lg border bg-gray-50 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all ${n.name?"border-red-400 focus:ring-red-400":"border-gray-200"}`}),n.name&&C.jsx("p",{className:"text-red-500 text-xs mt-1.5",children:n.name})]}),C.jsxs("div",{children:[C.jsx("label",{className:"block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1",children:"Email Address"}),C.jsx("input",{type:"email",id:"email",placeholder:"name@example.com",value:e.email,onChange:a,className:`w-full p-3 rounded-lg border bg-gray-50 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all ${n.email?"border-red-400 focus:ring-red-400":"border-gray-200"}`}),n.email&&C.jsx("p",{className:"text-red-500 text-xs mt-1.5",children:n.email})]}),C.jsxs("div",{children:[C.jsx("label",{className:"block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1",children:"Password"}),C.jsx("input",{type:"password",id:"password",placeholder:"••••••••",value:e.password,onChange:a,className:`w-full p-3 rounded-lg border bg-gray-50 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all ${n.password?"border-red-400 focus:ring-red-400":"border-gray-200"}`}),n.password&&C.jsx("p",{className:"text-red-500 text-xs mt-1.5",children:n.password})]}),C.jsx("button",{type:"submit",disabled:i,className:"w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-lg shadow-sm hover:shadow transition-all disabled:opacity-75 focus:outline-none",children:i?"Registering...":"Sign Up"}),C.jsxs("div",{className:"relative flex py-2 items-center",children:[C.jsx("div",{className:"flex-grow border-t border-gray-150"}),C.jsx("span",{className:"flex-shrink mx-4 text-gray-400 text-xs uppercase tracking-wider",children:"Or"}),C.jsx("div",{className:"flex-grow border-t border-gray-150"})]}),C.jsx(jv,{})]}),C.jsxs("p",{className:"text-center text-sm text-gray-500 mt-8",children:["Already have an account?"," ",C.jsx(mr,{to:"/sign-in",className:"font-medium text-blue-600 hover:text-blue-700 transition-colors",children:"Sign In"})]})]})})}function ab(e){return Uv({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"},child:[]},{tag:"polyline",attr:{points:"16 17 21 12 16 7"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"9",y2:"12"},child:[]}]})(e)}function lb(){const{currentUser:e}=eo(i=>i.user),t=Qc(),n=Hr(),r=async()=>{var i,o;try{await Kr.post("/auth/signout"),t(U1()),$.success("Signed out successfully"),n("/sign-in")}catch(s){$.error(((o=(i=s.response)==null?void 0:i.data)==null?void 0:o.error)||"Failed to sign out")}};return C.jsx("header",{className:"bg-white border-b border-gray-150 sticky top-0 z-50 shadow-sm",children:C.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-3 flex justify-between items-center",children:[C.jsx(mr,{to:"/",className:"flex items-center gap-2 group",children:C.jsx("span",{className:"text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent group-hover:opacity-90 transition-opacity",children:"DevDocs AI"})}),C.jsxs("div",{className:"flex items-center gap-6",children:[e&&C.jsx(mr,{to:"/",className:"text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors",children:"Dashboard"}),e?C.jsxs("div",{className:"flex items-center gap-4",children:[C.jsxs("div",{className:"flex items-center gap-2 border-r border-gray-200 pr-4",children:[C.jsx("img",{className:"rounded-full h-8 w-8 object-cover border border-blue-100",src:e.avatar,alt:e.name}),C.jsx("span",{className:"hidden sm:inline text-sm font-medium text-gray-700",children:e.name})]}),C.jsx("button",{onClick:r,className:"text-gray-500 hover:text-red-600 transition-colors p-1.5 hover:bg-gray-50 rounded-full",title:"Sign Out",children:C.jsx(ab,{className:"h-5 w-5"})})]}):C.jsxs("div",{className:"flex items-center gap-4",children:[C.jsx(mr,{to:"/sign-in",className:"text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors",children:"Sign In"}),C.jsx(mr,{to:"/sign-up",className:"text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg shadow-sm transition-all",children:"Sign Up"})]})]})]})})}function ub(){const{currentUser:e}=eo(t=>t.user);return e?C.jsx(Ng,{}):C.jsx(Og,{to:"/sign-in",replace:!0})}function cb(){const{currentUser:e}=eo(t=>t.user);return e?C.jsx(Og,{to:"/",replace:!0}):C.jsx(Ng,{})}function fb(){return C.jsxs("div",{className:"min-h-screen bg-gray-50 text-gray-900",children:[C.jsx(lb,{}),C.jsxs(aS,{children:[C.jsx(tr,{element:C.jsx(ub,{}),children:C.jsx(tr,{path:"/",element:C.jsx(mk,{})})}),C.jsxs(tr,{element:C.jsx(cb,{}),children:[C.jsx(tr,{path:"/sign-in",element:C.jsx(ob,{})}),C.jsx(tr,{path:"/sign-up",element:C.jsx(sb,{})})]})]})]})}bl.createRoot(document.getElementById("root")).render(C.jsx(B.StrictMode,{children:C.jsx(US,{store:uy,children:C.jsx(Ug,{loading:null,persistor:vE,children:C.jsxs(hS,{children:[C.jsx(fb,{}),C.jsx(eT,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"})]})})})}));
