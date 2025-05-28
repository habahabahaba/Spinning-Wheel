var Kr=Object.defineProperty;var Jr=(n,x,f)=>x in n?Kr(n,x,{enumerable:!0,configurable:!0,writable:!0,value:f}):n[x]=f;var V1=(n,x,f)=>Jr(n,typeof x!="symbol"?x+"":x,f);(function(){const x=document.createElement("link").relList;if(x&&x.supports&&x.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const d of o)if(d.type==="childList")for(const M of d.addedNodes)M.tagName==="LINK"&&M.rel==="modulepreload"&&s(M)}).observe(document,{childList:!0,subtree:!0});function f(o){const d={};return o.integrity&&(d.integrity=o.integrity),o.referrerPolicy&&(d.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?d.credentials="include":o.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(o){if(o.ep)return;o.ep=!0;const d=f(o);fetch(o.href,d)}})();function Fr(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var v8={exports:{}},Ce={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zt;function Wr(){if(zt)return Ce;zt=1;var n=Symbol.for("react.transitional.element"),x=Symbol.for("react.fragment");function f(s,o,d){var M=null;if(d!==void 0&&(M=""+d),o.key!==void 0&&(M=""+o.key),"key"in o){d={};for(var _ in o)_!=="key"&&(d[_]=o[_])}else d=o;return o=d.ref,{$$typeof:n,type:s,key:M,ref:o!==void 0?o:null,props:d}}return Ce.Fragment=x,Ce.jsx=f,Ce.jsxs=f,Ce}var Dt;function Ir(){return Dt||(Dt=1,v8.exports=Wr()),v8.exports}var y=Ir(),k8={exports:{}},c0={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nt;function Pr(){if(Nt)return c0;Nt=1;var n=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),M=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),E=Symbol.iterator;function S(m){return m===null||typeof m!="object"?null:(m=E&&m[E]||m["@@iterator"],typeof m=="function"?m:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,C={};function V(m,N,G){this.props=m,this.context=N,this.refs=C,this.updater=G||L}V.prototype.isReactComponent={},V.prototype.setState=function(m,N){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,N,"setState")},V.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function Y(){}Y.prototype=V.prototype;function O(m,N,G){this.props=m,this.context=N,this.refs=C,this.updater=G||L}var J=O.prototype=new Y;J.constructor=O,H(J,V.prototype),J.isPureReactComponent=!0;var r0=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},l0=Object.prototype.hasOwnProperty;function o0(m,N,G,B,W,h0){return G=h0.ref,{$$typeof:n,type:m,key:N,ref:G!==void 0?G:null,props:h0}}function j0(m,N){return o0(m.type,N,void 0,void 0,void 0,m.props)}function V0(m){return typeof m=="object"&&m!==null&&m.$$typeof===n}function Q0(m){var N={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(G){return N[G]})}var c6=/\/+/g;function K0(m,N){return typeof m=="object"&&m!==null&&m.key!=null?Q0(""+m.key):N.toString(36)}function j1(){}function M1(m){switch(m.status){case"fulfilled":return m.value;case"rejected":throw m.reason;default:switch(typeof m.status=="string"?m.then(j1,j1):(m.status="pending",m.then(function(N){m.status==="pending"&&(m.status="fulfilled",m.value=N)},function(N){m.status==="pending"&&(m.status="rejected",m.reason=N)})),m.status){case"fulfilled":return m.value;case"rejected":throw m.reason}}throw m}function J0(m,N,G,B,W){var h0=typeof m;(h0==="undefined"||h0==="boolean")&&(m=null);var n0=!1;if(m===null)n0=!0;else switch(h0){case"bigint":case"string":case"number":n0=!0;break;case"object":switch(m.$$typeof){case n:case x:n0=!0;break;case T:return n0=m._init,J0(n0(m._payload),N,G,B,W)}}if(n0)return W=W(m),n0=B===""?"."+K0(m,0):B,r0(W)?(G="",n0!=null&&(G=n0.replace(c6,"$&/")+"/"),J0(W,N,G,"",function(W6){return W6})):W!=null&&(V0(W)&&(W=j0(W,G+(W.key==null||m&&m.key===W.key?"":(""+W.key).replace(c6,"$&/")+"/")+n0)),N.push(W)),1;n0=0;var r6=B===""?".":B+":";if(r0(m))for(var M0=0;M0<m.length;M0++)B=m[M0],h0=r6+K0(B,M0),n0+=J0(B,N,G,h0,W);else if(M0=S(m),typeof M0=="function")for(m=M0.call(m),M0=0;!(B=m.next()).done;)B=B.value,h0=r6+K0(B,M0++),n0+=J0(B,N,G,h0,W);else if(h0==="object"){if(typeof m.then=="function")return J0(M1(m),N,G,B,W);throw N=String(m),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.")}return n0}function R(m,N,G){if(m==null)return m;var B=[],W=0;return J0(m,B,"","",function(h0){return N.call(G,h0,W++)}),B}function q(m){if(m._status===-1){var N=m._result;N=N(),N.then(function(G){(m._status===0||m._status===-1)&&(m._status=1,m._result=G)},function(G){(m._status===0||m._status===-1)&&(m._status=2,m._result=G)}),m._status===-1&&(m._status=0,m._result=N)}if(m._status===1)return m._result.default;throw m._result}var e0=typeof reportError=="function"?reportError:function(m){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var N=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof m=="object"&&m!==null&&typeof m.message=="string"?String(m.message):String(m),error:m});if(!window.dispatchEvent(N))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",m);return}console.error(m)};function $0(){}return c0.Children={map:R,forEach:function(m,N,G){R(m,function(){N.apply(this,arguments)},G)},count:function(m){var N=0;return R(m,function(){N++}),N},toArray:function(m){return R(m,function(N){return N})||[]},only:function(m){if(!V0(m))throw Error("React.Children.only expected to receive a single React element child.");return m}},c0.Component=V,c0.Fragment=f,c0.Profiler=o,c0.PureComponent=O,c0.StrictMode=s,c0.Suspense=v,c0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,c0.__COMPILER_RUNTIME={__proto__:null,c:function(m){return F.H.useMemoCache(m)}},c0.cache=function(m){return function(){return m.apply(null,arguments)}},c0.cloneElement=function(m,N,G){if(m==null)throw Error("The argument must be a React element, but you passed "+m+".");var B=H({},m.props),W=m.key,h0=void 0;if(N!=null)for(n0 in N.ref!==void 0&&(h0=void 0),N.key!==void 0&&(W=""+N.key),N)!l0.call(N,n0)||n0==="key"||n0==="__self"||n0==="__source"||n0==="ref"&&N.ref===void 0||(B[n0]=N[n0]);var n0=arguments.length-2;if(n0===1)B.children=G;else if(1<n0){for(var r6=Array(n0),M0=0;M0<n0;M0++)r6[M0]=arguments[M0+2];B.children=r6}return o0(m.type,W,void 0,void 0,h0,B)},c0.createContext=function(m){return m={$$typeof:M,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null},m.Provider=m,m.Consumer={$$typeof:d,_context:m},m},c0.createElement=function(m,N,G){var B,W={},h0=null;if(N!=null)for(B in N.key!==void 0&&(h0=""+N.key),N)l0.call(N,B)&&B!=="key"&&B!=="__self"&&B!=="__source"&&(W[B]=N[B]);var n0=arguments.length-2;if(n0===1)W.children=G;else if(1<n0){for(var r6=Array(n0),M0=0;M0<n0;M0++)r6[M0]=arguments[M0+2];W.children=r6}if(m&&m.defaultProps)for(B in n0=m.defaultProps,n0)W[B]===void 0&&(W[B]=n0[B]);return o0(m,h0,void 0,void 0,null,W)},c0.createRef=function(){return{current:null}},c0.forwardRef=function(m){return{$$typeof:_,render:m}},c0.isValidElement=V0,c0.lazy=function(m){return{$$typeof:T,_payload:{_status:-1,_result:m},_init:q}},c0.memo=function(m,N){return{$$typeof:g,type:m,compare:N===void 0?null:N}},c0.startTransition=function(m){var N=F.T,G={};F.T=G;try{var B=m(),W=F.S;W!==null&&W(G,B),typeof B=="object"&&B!==null&&typeof B.then=="function"&&B.then($0,e0)}catch(h0){e0(h0)}finally{F.T=N}},c0.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},c0.use=function(m){return F.H.use(m)},c0.useActionState=function(m,N,G){return F.H.useActionState(m,N,G)},c0.useCallback=function(m,N){return F.H.useCallback(m,N)},c0.useContext=function(m){return F.H.useContext(m)},c0.useDebugValue=function(){},c0.useDeferredValue=function(m,N){return F.H.useDeferredValue(m,N)},c0.useEffect=function(m,N,G){var B=F.H;if(typeof G=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return B.useEffect(m,N)},c0.useId=function(){return F.H.useId()},c0.useImperativeHandle=function(m,N,G){return F.H.useImperativeHandle(m,N,G)},c0.useInsertionEffect=function(m,N){return F.H.useInsertionEffect(m,N)},c0.useLayoutEffect=function(m,N){return F.H.useLayoutEffect(m,N)},c0.useMemo=function(m,N){return F.H.useMemo(m,N)},c0.useOptimistic=function(m,N){return F.H.useOptimistic(m,N)},c0.useReducer=function(m,N,G){return F.H.useReducer(m,N,G)},c0.useRef=function(m){return F.H.useRef(m)},c0.useState=function(m){return F.H.useState(m)},c0.useSyncExternalStore=function(m,N,G){return F.H.useSyncExternalStore(m,N,G)},c0.useTransition=function(){return F.H.useTransition()},c0.version="19.1.0",c0}var Ut;function U8(){return Ut||(Ut=1,k8.exports=Pr()),k8.exports}var U=U8();const Q1=Fr(U);var $8={exports:{}},Re={},_8={exports:{}},S8={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lt;function e9(){return Lt||(Lt=1,function(n){function x(R,q){var e0=R.length;R.push(q);e:for(;0<e0;){var $0=e0-1>>>1,m=R[$0];if(0<o(m,q))R[$0]=q,R[e0]=m,e0=$0;else break e}}function f(R){return R.length===0?null:R[0]}function s(R){if(R.length===0)return null;var q=R[0],e0=R.pop();if(e0!==q){R[0]=e0;e:for(var $0=0,m=R.length,N=m>>>1;$0<N;){var G=2*($0+1)-1,B=R[G],W=G+1,h0=R[W];if(0>o(B,e0))W<m&&0>o(h0,B)?(R[$0]=h0,R[W]=e0,$0=W):(R[$0]=B,R[G]=e0,$0=G);else if(W<m&&0>o(h0,e0))R[$0]=h0,R[W]=e0,$0=W;else break e}}return q}function o(R,q){var e0=R.sortIndex-q.sortIndex;return e0!==0?e0:R.id-q.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;n.unstable_now=function(){return d.now()}}else{var M=Date,_=M.now();n.unstable_now=function(){return M.now()-_}}var v=[],g=[],T=1,E=null,S=3,L=!1,H=!1,C=!1,V=!1,Y=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,J=typeof setImmediate<"u"?setImmediate:null;function r0(R){for(var q=f(g);q!==null;){if(q.callback===null)s(g);else if(q.startTime<=R)s(g),q.sortIndex=q.expirationTime,x(v,q);else break;q=f(g)}}function F(R){if(C=!1,r0(R),!H)if(f(v)!==null)H=!0,l0||(l0=!0,K0());else{var q=f(g);q!==null&&J0(F,q.startTime-R)}}var l0=!1,o0=-1,j0=5,V0=-1;function Q0(){return V?!0:!(n.unstable_now()-V0<j0)}function c6(){if(V=!1,l0){var R=n.unstable_now();V0=R;var q=!0;try{e:{H=!1,C&&(C=!1,O(o0),o0=-1),L=!0;var e0=S;try{i:{for(r0(R),E=f(v);E!==null&&!(E.expirationTime>R&&Q0());){var $0=E.callback;if(typeof $0=="function"){E.callback=null,S=E.priorityLevel;var m=$0(E.expirationTime<=R);if(R=n.unstable_now(),typeof m=="function"){E.callback=m,r0(R),q=!0;break i}E===f(v)&&s(v),r0(R)}else s(v);E=f(v)}if(E!==null)q=!0;else{var N=f(g);N!==null&&J0(F,N.startTime-R),q=!1}}break e}finally{E=null,S=e0,L=!1}q=void 0}}finally{q?K0():l0=!1}}}var K0;if(typeof J=="function")K0=function(){J(c6)};else if(typeof MessageChannel<"u"){var j1=new MessageChannel,M1=j1.port2;j1.port1.onmessage=c6,K0=function(){M1.postMessage(null)}}else K0=function(){Y(c6,0)};function J0(R,q){o0=Y(function(){R(n.unstable_now())},q)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(R){R.callback=null},n.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j0=0<R?Math.floor(1e3/R):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_next=function(R){switch(S){case 1:case 2:case 3:var q=3;break;default:q=S}var e0=S;S=q;try{return R()}finally{S=e0}},n.unstable_requestPaint=function(){V=!0},n.unstable_runWithPriority=function(R,q){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var e0=S;S=R;try{return q()}finally{S=e0}},n.unstable_scheduleCallback=function(R,q,e0){var $0=n.unstable_now();switch(typeof e0=="object"&&e0!==null?(e0=e0.delay,e0=typeof e0=="number"&&0<e0?$0+e0:$0):e0=$0,R){case 1:var m=-1;break;case 2:m=250;break;case 5:m=1073741823;break;case 4:m=1e4;break;default:m=5e3}return m=e0+m,R={id:T++,callback:q,priorityLevel:R,startTime:e0,expirationTime:m,sortIndex:-1},e0>$0?(R.sortIndex=e0,x(g,R),f(v)===null&&R===f(g)&&(C?(O(o0),o0=-1):C=!0,J0(F,e0-$0))):(R.sortIndex=m,x(v,R),H||L||(H=!0,l0||(l0=!0,K0()))),R},n.unstable_shouldYield=Q0,n.unstable_wrapCallback=function(R){var q=S;return function(){var e0=S;S=q;try{return R.apply(this,arguments)}finally{S=e0}}}}(S8)),S8}var Ht;function i9(){return Ht||(Ht=1,_8.exports=e9()),_8.exports}var b8={exports:{}},I0={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bt;function l9(){if(Bt)return I0;Bt=1;var n=U8();function x(v){var g="https://react.dev/errors/"+v;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)g+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+v+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var s={d:{f,r:function(){throw Error(x(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},o=Symbol.for("react.portal");function d(v,g,T){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:E==null?null:""+E,children:v,containerInfo:g,implementation:T}}var M=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function _(v,g){if(v==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return I0.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,I0.createPortal=function(v,g){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(x(299));return d(v,g,null,T)},I0.flushSync=function(v){var g=M.T,T=s.p;try{if(M.T=null,s.p=2,v)return v()}finally{M.T=g,s.p=T,s.d.f()}},I0.preconnect=function(v,g){typeof v=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(v,g))},I0.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},I0.preinit=function(v,g){if(typeof v=="string"&&g&&typeof g.as=="string"){var T=g.as,E=_(T,g.crossOrigin),S=typeof g.integrity=="string"?g.integrity:void 0,L=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;T==="style"?s.d.S(v,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:E,integrity:S,fetchPriority:L}):T==="script"&&s.d.X(v,{crossOrigin:E,integrity:S,fetchPriority:L,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},I0.preinitModule=function(v,g){if(typeof v=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var T=_(g.as,g.crossOrigin);s.d.M(v,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(v)},I0.preload=function(v,g){if(typeof v=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var T=g.as,E=_(T,g.crossOrigin);s.d.L(v,T,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},I0.preloadModule=function(v,g){if(typeof v=="string")if(g){var T=_(g.as,g.crossOrigin);s.d.m(v,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(v)},I0.requestFormReset=function(v){s.d.r(v)},I0.unstable_batchedUpdates=function(v,g){return v(g)},I0.useFormState=function(v,g,T){return M.H.useFormState(v,g,T)},I0.useFormStatus=function(){return M.H.useHostTransitionStatus()},I0.version="19.1.0",I0}var qt;function u7(){if(qt)return b8.exports;qt=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(x){console.error(x)}}return n(),b8.exports=l9(),b8.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yt;function n9(){if(Yt)return Re;Yt=1;var n=i9(),x=U8(),f=u7();function s(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)i+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var i=e,l=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(l=i.return),e=i.return;while(e)}return i.tag===3?l:null}function M(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function _(e){if(d(e)!==e)throw Error(s(188))}function v(e){var i=e.alternate;if(!i){if(i=d(e),i===null)throw Error(s(188));return i!==e?null:e}for(var l=e,t=i;;){var c=l.return;if(c===null)break;var r=c.alternate;if(r===null){if(t=c.return,t!==null){l=t;continue}break}if(c.child===r.child){for(r=c.child;r;){if(r===l)return _(c),e;if(r===t)return _(c),i;r=r.sibling}throw Error(s(188))}if(l.return!==t.return)l=c,t=r;else{for(var a=!1,u=c.child;u;){if(u===l){a=!0,l=c,t=r;break}if(u===t){a=!0,t=c,l=r;break}u=u.sibling}if(!a){for(u=r.child;u;){if(u===l){a=!0,l=r,t=c;break}if(u===t){a=!0,t=r,l=c;break}u=u.sibling}if(!a)throw Error(s(189))}}if(l.alternate!==t)throw Error(s(190))}if(l.tag!==3)throw Error(s(188));return l.stateNode.current===l?e:i}function g(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=g(e),i!==null)return i;e=e.sibling}return null}var T=Object.assign,E=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),L=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),Y=Symbol.for("react.provider"),O=Symbol.for("react.consumer"),J=Symbol.for("react.context"),r0=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),l0=Symbol.for("react.suspense_list"),o0=Symbol.for("react.memo"),j0=Symbol.for("react.lazy"),V0=Symbol.for("react.activity"),Q0=Symbol.for("react.memo_cache_sentinel"),c6=Symbol.iterator;function K0(e){return e===null||typeof e!="object"?null:(e=c6&&e[c6]||e["@@iterator"],typeof e=="function"?e:null)}var j1=Symbol.for("react.client.reference");function M1(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===j1?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case H:return"Fragment";case V:return"Profiler";case C:return"StrictMode";case F:return"Suspense";case l0:return"SuspenseList";case V0:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case L:return"Portal";case J:return(e.displayName||"Context")+".Provider";case O:return(e._context.displayName||"Context")+".Consumer";case r0:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case o0:return i=e.displayName||null,i!==null?i:M1(e.type)||"Memo";case j0:i=e._payload,e=e._init;try{return M1(e(i))}catch{}}return null}var J0=Array.isArray,R=x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,e0={pending:!1,data:null,method:null,action:null},$0=[],m=-1;function N(e){return{current:e}}function G(e){0>m||(e.current=$0[m],$0[m]=null,m--)}function B(e,i){m++,$0[m]=e.current,e.current=i}var W=N(null),h0=N(null),n0=N(null),r6=N(null);function M0(e,i){switch(B(n0,i),B(h0,e),B(W,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?yt(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=yt(i),e=at(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}G(W),B(W,e)}function W6(){G(W),G(h0),G(n0)}function c4(e){e.memoizedState!==null&&B(r6,e);var i=W.current,l=at(i,e.type);i!==l&&(B(h0,e),B(W,l))}function Ue(e){h0.current===e&&(G(W),G(h0)),r6.current===e&&(G(r6),Me._currentValue=e0)}var r4=Object.prototype.hasOwnProperty,x4=n.unstable_scheduleCallback,y4=n.unstable_cancelCallback,j7=n.unstable_shouldYield,M7=n.unstable_requestPaint,T6=n.unstable_now,E7=n.unstable_getCurrentPriorityLevel,q8=n.unstable_ImmediatePriority,Y8=n.unstable_UserBlockingPriority,Le=n.unstable_NormalPriority,T7=n.unstable_LowPriority,G8=n.unstable_IdlePriority,A7=n.log,O7=n.unstable_setDisableYieldValue,D2=null,x6=null;function I6(e){if(typeof A7=="function"&&O7(e),x6&&typeof x6.setStrictMode=="function")try{x6.setStrictMode(D2,e)}catch{}}var y6=Math.clz32?Math.clz32:z7,C7=Math.log,R7=Math.LN2;function z7(e){return e>>>=0,e===0?32:31-(C7(e)/R7|0)|0}var He=256,Be=4194304;function E1(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function qe(e,i,l){var t=e.pendingLanes;if(t===0)return 0;var c=0,r=e.suspendedLanes,a=e.pingedLanes;e=e.warmLanes;var u=t&134217727;return u!==0?(t=u&~r,t!==0?c=E1(t):(a&=u,a!==0?c=E1(a):l||(l=u&~e,l!==0&&(c=E1(l))))):(u=t&~r,u!==0?c=E1(u):a!==0?c=E1(a):l||(l=t&~e,l!==0&&(c=E1(l)))),c===0?0:i!==0&&i!==c&&(i&r)===0&&(r=c&-c,l=i&-i,r>=l||r===32&&(l&4194048)!==0)?i:c}function N2(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function D7(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X8(){var e=He;return He<<=1,(He&4194048)===0&&(He=256),e}function Z8(){var e=Be;return Be<<=1,(Be&62914560)===0&&(Be=4194304),e}function a4(e){for(var i=[],l=0;31>l;l++)i.push(e);return i}function U2(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function N7(e,i,l,t,c,r){var a=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var u=e.entanglements,h=e.expirationTimes,$=e.hiddenUpdates;for(l=a&~l;0<l;){var A=31-y6(l),D=1<<A;u[A]=0,h[A]=-1;var b=$[A];if(b!==null)for($[A]=null,A=0;A<b.length;A++){var j=b[A];j!==null&&(j.lane&=-536870913)}l&=~D}t!==0&&V8(e,t,0),r!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=r&~(a&~i))}function V8(e,i,l){e.pendingLanes|=i,e.suspendedLanes&=~i;var t=31-y6(i);e.entangledLanes|=i,e.entanglements[t]=e.entanglements[t]|1073741824|l&4194090}function Q8(e,i){var l=e.entangledLanes|=i;for(e=e.entanglements;l;){var t=31-y6(l),c=1<<t;c&i|e[t]&i&&(e[t]|=i),l&=~c}}function s4(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function f4(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function K8(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:Et(e.type))}function U7(e,i){var l=q.p;try{return q.p=e,i()}finally{q.p=l}}var P6=Math.random().toString(36).slice(2),F0="__reactFiber$"+P6,e6="__reactProps$"+P6,J1="__reactContainer$"+P6,u4="__reactEvents$"+P6,L7="__reactListeners$"+P6,H7="__reactHandles$"+P6,J8="__reactResources$"+P6,L2="__reactMarker$"+P6;function o4(e){delete e[F0],delete e[e6],delete e[u4],delete e[L7],delete e[H7]}function F1(e){var i=e[F0];if(i)return i;for(var l=e.parentNode;l;){if(i=l[J1]||l[F0]){if(l=i.alternate,i.child!==null||l!==null&&l.child!==null)for(e=ot(e);e!==null;){if(l=e[F0])return l;e=ot(e)}return i}e=l,l=e.parentNode}return null}function W1(e){if(e=e[F0]||e[J1]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function H2(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(s(33))}function I1(e){var i=e[J8];return i||(i=e[J8]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function H0(e){e[L2]=!0}var F8=new Set,W8={};function T1(e,i){P1(e,i),P1(e+"Capture",i)}function P1(e,i){for(W8[e]=i,e=0;e<i.length;e++)F8.add(i[e])}var B7=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),I8={},P8={};function q7(e){return r4.call(P8,e)?!0:r4.call(I8,e)?!1:B7.test(e)?P8[e]=!0:(I8[e]=!0,!1)}function Ye(e,i,l){if(q7(i))if(l===null)e.removeAttribute(i);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var t=i.toLowerCase().slice(0,5);if(t!=="data-"&&t!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+l)}}function Ge(e,i,l){if(l===null)e.removeAttribute(i);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+l)}}function D6(e,i,l,t){if(t===null)e.removeAttribute(l);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(i,l,""+t)}}var h4,el;function e2(e){if(h4===void 0)try{throw Error()}catch(l){var i=l.stack.trim().match(/\n( *(at )?)/);h4=i&&i[1]||"",el=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+h4+e+el}var d4=!1;function g4(e,i){if(!e||d4)return"";d4=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var t={DetermineComponentFrameRoot:function(){try{if(i){var D=function(){throw Error()};if(Object.defineProperty(D.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(D,[])}catch(j){var b=j}Reflect.construct(e,[],D)}else{try{D.call()}catch(j){b=j}e.call(D.prototype)}}else{try{throw Error()}catch(j){b=j}(D=e())&&typeof D.catch=="function"&&D.catch(function(){})}}catch(j){if(j&&b&&typeof j.stack=="string")return[j.stack,b.stack]}return[null,null]}};t.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(t.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(t.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=t.DetermineComponentFrameRoot(),a=r[0],u=r[1];if(a&&u){var h=a.split(`
`),$=u.split(`
`);for(c=t=0;t<h.length&&!h[t].includes("DetermineComponentFrameRoot");)t++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(t===h.length||c===$.length)for(t=h.length-1,c=$.length-1;1<=t&&0<=c&&h[t]!==$[c];)c--;for(;1<=t&&0<=c;t--,c--)if(h[t]!==$[c]){if(t!==1||c!==1)do if(t--,c--,0>c||h[t]!==$[c]){var A=`
`+h[t].replace(" at new "," at ");return e.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",e.displayName)),A}while(1<=t&&0<=c);break}}}finally{d4=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?e2(l):""}function Y7(e){switch(e.tag){case 26:case 27:case 5:return e2(e.type);case 16:return e2("Lazy");case 13:return e2("Suspense");case 19:return e2("SuspenseList");case 0:case 15:return g4(e.type,!1);case 11:return g4(e.type.render,!1);case 1:return g4(e.type,!0);case 31:return e2("Activity");default:return""}}function il(e){try{var i="";do i+=Y7(e),e=e.return;while(e);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function m6(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ll(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function G7(e){var i=ll(e)?"checked":"value",l=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),t=""+e[i];if(!e.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var c=l.get,r=l.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return c.call(this)},set:function(a){t=""+a,r.call(this,a)}}),Object.defineProperty(e,i,{enumerable:l.enumerable}),{getValue:function(){return t},setValue:function(a){t=""+a},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Xe(e){e._valueTracker||(e._valueTracker=G7(e))}function nl(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var l=i.getValue(),t="";return e&&(t=ll(e)?e.checked?"true":"false":e.value),e=t,e!==l?(i.setValue(e),!0):!1}function Ze(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var X7=/[\n"\\]/g;function w6(e){return e.replace(X7,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function m4(e,i,l,t,c,r,a,u){e.name="",a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"?e.type=a:e.removeAttribute("type"),i!=null?a==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+m6(i)):e.value!==""+m6(i)&&(e.value=""+m6(i)):a!=="submit"&&a!=="reset"||e.removeAttribute("value"),i!=null?w4(e,a,m6(i)):l!=null?w4(e,a,m6(l)):t!=null&&e.removeAttribute("value"),c==null&&r!=null&&(e.defaultChecked=!!r),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+m6(u):e.removeAttribute("name")}function tl(e,i,l,t,c,r,a,u){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),i!=null||l!=null){if(!(r!=="submit"&&r!=="reset"||i!=null))return;l=l!=null?""+m6(l):"",i=i!=null?""+m6(i):l,u||i===e.value||(e.value=i),e.defaultValue=i}t=t??c,t=typeof t!="function"&&typeof t!="symbol"&&!!t,e.checked=u?e.checked:!!t,e.defaultChecked=!!t,a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.name=a)}function w4(e,i,l){i==="number"&&Ze(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function i2(e,i,l,t){if(e=e.options,i){i={};for(var c=0;c<l.length;c++)i["$"+l[c]]=!0;for(l=0;l<e.length;l++)c=i.hasOwnProperty("$"+e[l].value),e[l].selected!==c&&(e[l].selected=c),c&&t&&(e[l].defaultSelected=!0)}else{for(l=""+m6(l),i=null,c=0;c<e.length;c++){if(e[c].value===l){e[c].selected=!0,t&&(e[c].defaultSelected=!0);return}i!==null||e[c].disabled||(i=e[c])}i!==null&&(i.selected=!0)}}function cl(e,i,l){if(i!=null&&(i=""+m6(i),i!==e.value&&(e.value=i),l==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=l!=null?""+m6(l):""}function rl(e,i,l,t){if(i==null){if(t!=null){if(l!=null)throw Error(s(92));if(J0(t)){if(1<t.length)throw Error(s(93));t=t[0]}l=t}l==null&&(l=""),i=l}l=m6(i),e.defaultValue=l,t=e.textContent,t===l&&t!==""&&t!==null&&(e.value=t)}function l2(e,i){if(i){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=i;return}}e.textContent=i}var Z7=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function xl(e,i,l){var t=i.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?t?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":t?e.setProperty(i,l):typeof l!="number"||l===0||Z7.has(i)?i==="float"?e.cssFloat=l:e[i]=(""+l).trim():e[i]=l+"px"}function yl(e,i,l){if(i!=null&&typeof i!="object")throw Error(s(62));if(e=e.style,l!=null){for(var t in l)!l.hasOwnProperty(t)||i!=null&&i.hasOwnProperty(t)||(t.indexOf("--")===0?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="");for(var c in i)t=i[c],i.hasOwnProperty(c)&&l[c]!==t&&xl(e,c,t)}else for(var r in i)i.hasOwnProperty(r)&&xl(e,r,i[r])}function p4(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var V7=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Q7=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ve(e){return Q7.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var v4=null;function k4(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var n2=null,t2=null;function al(e){var i=W1(e);if(i&&(e=i.stateNode)){var l=e[e6]||null;e:switch(e=i.stateNode,i.type){case"input":if(m4(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),i=l.name,l.type==="radio"&&i!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+w6(""+i)+'"][type="radio"]'),i=0;i<l.length;i++){var t=l[i];if(t!==e&&t.form===e.form){var c=t[e6]||null;if(!c)throw Error(s(90));m4(t,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(i=0;i<l.length;i++)t=l[i],t.form===e.form&&nl(t)}break e;case"textarea":cl(e,l.value,l.defaultValue);break e;case"select":i=l.value,i!=null&&i2(e,!!l.multiple,i,!1)}}}var $4=!1;function sl(e,i,l){if($4)return e(i,l);$4=!0;try{var t=e(i);return t}finally{if($4=!1,(n2!==null||t2!==null)&&(O3(),n2&&(i=n2,e=t2,t2=n2=null,al(i),e)))for(i=0;i<e.length;i++)al(e[i])}}function B2(e,i){var l=e.stateNode;if(l===null)return null;var t=l[e6]||null;if(t===null)return null;l=t[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(e=e.type,t=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!t;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(s(231,i,typeof l));return l}var N6=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_4=!1;if(N6)try{var q2={};Object.defineProperty(q2,"passive",{get:function(){_4=!0}}),window.addEventListener("test",q2,q2),window.removeEventListener("test",q2,q2)}catch{_4=!1}var e1=null,S4=null,Qe=null;function fl(){if(Qe)return Qe;var e,i=S4,l=i.length,t,c="value"in e1?e1.value:e1.textContent,r=c.length;for(e=0;e<l&&i[e]===c[e];e++);var a=l-e;for(t=1;t<=a&&i[l-t]===c[r-t];t++);return Qe=c.slice(e,1<t?1-t:void 0)}function Ke(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Je(){return!0}function ul(){return!1}function i6(e){function i(l,t,c,r,a){this._reactName=l,this._targetInst=c,this.type=t,this.nativeEvent=r,this.target=a,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(l=e[u],this[u]=l?l(r):r[u]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Je:ul,this.isPropagationStopped=ul,this}return T(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Je)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Je)},persist:function(){},isPersistent:Je}),i}var A1={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fe=i6(A1),Y2=T({},A1,{view:0,detail:0}),K7=i6(Y2),b4,j4,G2,We=T({},Y2,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:E4,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==G2&&(G2&&e.type==="mousemove"?(b4=e.screenX-G2.screenX,j4=e.screenY-G2.screenY):j4=b4=0,G2=e),b4)},movementY:function(e){return"movementY"in e?e.movementY:j4}}),ol=i6(We),J7=T({},We,{dataTransfer:0}),F7=i6(J7),W7=T({},Y2,{relatedTarget:0}),M4=i6(W7),I7=T({},A1,{animationName:0,elapsedTime:0,pseudoElement:0}),P7=i6(I7),ec=T({},A1,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ic=i6(ec),lc=T({},A1,{data:0}),hl=i6(lc),nc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rc(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=cc[e])?!!i[e]:!1}function E4(){return rc}var xc=T({},Y2,{key:function(e){if(e.key){var i=nc[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Ke(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:E4,charCode:function(e){return e.type==="keypress"?Ke(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ke(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yc=i6(xc),ac=T({},We,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dl=i6(ac),sc=T({},Y2,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:E4}),fc=i6(sc),uc=T({},A1,{propertyName:0,elapsedTime:0,pseudoElement:0}),oc=i6(uc),hc=T({},We,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dc=i6(hc),gc=T({},A1,{newState:0,oldState:0}),mc=i6(gc),wc=[9,13,27,32],T4=N6&&"CompositionEvent"in window,X2=null;N6&&"documentMode"in document&&(X2=document.documentMode);var pc=N6&&"TextEvent"in window&&!X2,gl=N6&&(!T4||X2&&8<X2&&11>=X2),ml=" ",wl=!1;function pl(e,i){switch(e){case"keyup":return wc.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var c2=!1;function vc(e,i){switch(e){case"compositionend":return vl(i);case"keypress":return i.which!==32?null:(wl=!0,ml);case"textInput":return e=i.data,e===ml&&wl?null:e;default:return null}}function kc(e,i){if(c2)return e==="compositionend"||!T4&&pl(e,i)?(e=fl(),Qe=S4=e1=null,c2=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return gl&&i.locale!=="ko"?null:i.data;default:return null}}var $c={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kl(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!$c[e.type]:i==="textarea"}function $l(e,i,l,t){n2?t2?t2.push(t):t2=[t]:n2=t,i=U3(i,"onChange"),0<i.length&&(l=new Fe("onChange","change",null,l,t),e.push({event:l,listeners:i}))}var Z2=null,V2=null;function _c(e){nt(e,0)}function Ie(e){var i=H2(e);if(nl(i))return e}function _l(e,i){if(e==="change")return i}var Sl=!1;if(N6){var A4;if(N6){var O4="oninput"in document;if(!O4){var bl=document.createElement("div");bl.setAttribute("oninput","return;"),O4=typeof bl.oninput=="function"}A4=O4}else A4=!1;Sl=A4&&(!document.documentMode||9<document.documentMode)}function jl(){Z2&&(Z2.detachEvent("onpropertychange",Ml),V2=Z2=null)}function Ml(e){if(e.propertyName==="value"&&Ie(V2)){var i=[];$l(i,V2,e,k4(e)),sl(_c,i)}}function Sc(e,i,l){e==="focusin"?(jl(),Z2=i,V2=l,Z2.attachEvent("onpropertychange",Ml)):e==="focusout"&&jl()}function bc(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ie(V2)}function jc(e,i){if(e==="click")return Ie(i)}function Mc(e,i){if(e==="input"||e==="change")return Ie(i)}function Ec(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var a6=typeof Object.is=="function"?Object.is:Ec;function Q2(e,i){if(a6(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var l=Object.keys(e),t=Object.keys(i);if(l.length!==t.length)return!1;for(t=0;t<l.length;t++){var c=l[t];if(!r4.call(i,c)||!a6(e[c],i[c]))return!1}return!0}function El(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Tl(e,i){var l=El(e);e=0;for(var t;l;){if(l.nodeType===3){if(t=e+l.textContent.length,e<=i&&t>=i)return{node:l,offset:i-e};e=t}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=El(l)}}function Al(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Al(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Ol(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Ze(e.document);i instanceof e.HTMLIFrameElement;){try{var l=typeof i.contentWindow.location.href=="string"}catch{l=!1}if(l)e=i.contentWindow;else break;i=Ze(e.document)}return i}function C4(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var Tc=N6&&"documentMode"in document&&11>=document.documentMode,r2=null,R4=null,K2=null,z4=!1;function Cl(e,i,l){var t=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;z4||r2==null||r2!==Ze(t)||(t=r2,"selectionStart"in t&&C4(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),K2&&Q2(K2,t)||(K2=t,t=U3(R4,"onSelect"),0<t.length&&(i=new Fe("onSelect","select",null,i,l),e.push({event:i,listeners:t}),i.target=r2)))}function O1(e,i){var l={};return l[e.toLowerCase()]=i.toLowerCase(),l["Webkit"+e]="webkit"+i,l["Moz"+e]="moz"+i,l}var x2={animationend:O1("Animation","AnimationEnd"),animationiteration:O1("Animation","AnimationIteration"),animationstart:O1("Animation","AnimationStart"),transitionrun:O1("Transition","TransitionRun"),transitionstart:O1("Transition","TransitionStart"),transitioncancel:O1("Transition","TransitionCancel"),transitionend:O1("Transition","TransitionEnd")},D4={},Rl={};N6&&(Rl=document.createElement("div").style,"AnimationEvent"in window||(delete x2.animationend.animation,delete x2.animationiteration.animation,delete x2.animationstart.animation),"TransitionEvent"in window||delete x2.transitionend.transition);function C1(e){if(D4[e])return D4[e];if(!x2[e])return e;var i=x2[e],l;for(l in i)if(i.hasOwnProperty(l)&&l in Rl)return D4[e]=i[l];return e}var zl=C1("animationend"),Dl=C1("animationiteration"),Nl=C1("animationstart"),Ac=C1("transitionrun"),Oc=C1("transitionstart"),Cc=C1("transitioncancel"),Ul=C1("transitionend"),Ll=new Map,N4="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");N4.push("scrollEnd");function j6(e,i){Ll.set(e,i),T1(i,[e])}var Hl=new WeakMap;function p6(e,i){if(typeof e=="object"&&e!==null){var l=Hl.get(e);return l!==void 0?l:(i={value:e,source:i,stack:il(i)},Hl.set(e,i),i)}return{value:e,source:i,stack:il(i)}}var v6=[],y2=0,U4=0;function Pe(){for(var e=y2,i=U4=y2=0;i<e;){var l=v6[i];v6[i++]=null;var t=v6[i];v6[i++]=null;var c=v6[i];v6[i++]=null;var r=v6[i];if(v6[i++]=null,t!==null&&c!==null){var a=t.pending;a===null?c.next=c:(c.next=a.next,a.next=c),t.pending=c}r!==0&&Bl(l,c,r)}}function e3(e,i,l,t){v6[y2++]=e,v6[y2++]=i,v6[y2++]=l,v6[y2++]=t,U4|=t,e.lanes|=t,e=e.alternate,e!==null&&(e.lanes|=t)}function L4(e,i,l,t){return e3(e,i,l,t),i3(e)}function a2(e,i){return e3(e,null,null,i),i3(e)}function Bl(e,i,l){e.lanes|=l;var t=e.alternate;t!==null&&(t.lanes|=l);for(var c=!1,r=e.return;r!==null;)r.childLanes|=l,t=r.alternate,t!==null&&(t.childLanes|=l),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(c=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,c&&i!==null&&(c=31-y6(l),e=r.hiddenUpdates,t=e[c],t===null?e[c]=[i]:t.push(i),i.lane=l|536870912),r):null}function i3(e){if(50<pe)throw pe=0,Xi=null,Error(s(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var s2={};function Rc(e,i,l,t){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function s6(e,i,l,t){return new Rc(e,i,l,t)}function H4(e){return e=e.prototype,!(!e||!e.isReactComponent)}function U6(e,i){var l=e.alternate;return l===null?(l=s6(e.tag,i,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=i,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,i=e.dependencies,l.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function ql(e,i){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,i=l.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function l3(e,i,l,t,c,r){var a=0;if(t=e,typeof e=="function")H4(e)&&(a=1);else if(typeof e=="string")a=Dr(e,l,W.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case V0:return e=s6(31,l,i,c),e.elementType=V0,e.lanes=r,e;case H:return R1(l.children,c,r,i);case C:a=8,c|=24;break;case V:return e=s6(12,l,i,c|2),e.elementType=V,e.lanes=r,e;case F:return e=s6(13,l,i,c),e.elementType=F,e.lanes=r,e;case l0:return e=s6(19,l,i,c),e.elementType=l0,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Y:case J:a=10;break e;case O:a=9;break e;case r0:a=11;break e;case o0:a=14;break e;case j0:a=16,t=null;break e}a=29,l=Error(s(130,e===null?"null":typeof e,"")),t=null}return i=s6(a,l,i,c),i.elementType=e,i.type=t,i.lanes=r,i}function R1(e,i,l,t){return e=s6(7,e,t,i),e.lanes=l,e}function B4(e,i,l){return e=s6(6,e,null,i),e.lanes=l,e}function q4(e,i,l){return i=s6(4,e.children!==null?e.children:[],e.key,i),i.lanes=l,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var f2=[],u2=0,n3=null,t3=0,k6=[],$6=0,z1=null,L6=1,H6="";function D1(e,i){f2[u2++]=t3,f2[u2++]=n3,n3=e,t3=i}function Yl(e,i,l){k6[$6++]=L6,k6[$6++]=H6,k6[$6++]=z1,z1=e;var t=L6;e=H6;var c=32-y6(t)-1;t&=~(1<<c),l+=1;var r=32-y6(i)+c;if(30<r){var a=c-c%5;r=(t&(1<<a)-1).toString(32),t>>=a,c-=a,L6=1<<32-y6(i)+c|l<<c|t,H6=r+e}else L6=1<<r|l<<c|t,H6=e}function Y4(e){e.return!==null&&(D1(e,1),Yl(e,1,0))}function G4(e){for(;e===n3;)n3=f2[--u2],f2[u2]=null,t3=f2[--u2],f2[u2]=null;for(;e===z1;)z1=k6[--$6],k6[$6]=null,H6=k6[--$6],k6[$6]=null,L6=k6[--$6],k6[$6]=null}var P0=null,A0=null,g0=!1,N1=null,A6=!1,X4=Error(s(519));function U1(e){var i=Error(s(418,""));throw W2(p6(i,e)),X4}function Gl(e){var i=e.stateNode,l=e.type,t=e.memoizedProps;switch(i[F0]=e,i[e6]=t,l){case"dialog":s0("cancel",i),s0("close",i);break;case"iframe":case"object":case"embed":s0("load",i);break;case"video":case"audio":for(l=0;l<ke.length;l++)s0(ke[l],i);break;case"source":s0("error",i);break;case"img":case"image":case"link":s0("error",i),s0("load",i);break;case"details":s0("toggle",i);break;case"input":s0("invalid",i),tl(i,t.value,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name,!0),Xe(i);break;case"select":s0("invalid",i);break;case"textarea":s0("invalid",i),rl(i,t.value,t.defaultValue,t.children),Xe(i)}l=t.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||i.textContent===""+l||t.suppressHydrationWarning===!0||xt(i.textContent,l)?(t.popover!=null&&(s0("beforetoggle",i),s0("toggle",i)),t.onScroll!=null&&s0("scroll",i),t.onScrollEnd!=null&&s0("scrollend",i),t.onClick!=null&&(i.onclick=L3),i=!0):i=!1,i||U1(e)}function Xl(e){for(P0=e.return;P0;)switch(P0.tag){case 5:case 13:A6=!1;return;case 27:case 3:A6=!0;return;default:P0=P0.return}}function J2(e){if(e!==P0)return!1;if(!g0)return Xl(e),g0=!0,!1;var i=e.tag,l;if((l=i!==3&&i!==27)&&((l=i===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||r8(e.type,e.memoizedProps)),l=!l),l&&A0&&U1(e),Xl(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(l=e.data,l==="/$"){if(i===0){A0=E6(e.nextSibling);break e}i--}else l!=="$"&&l!=="$!"&&l!=="$?"||i++;e=e.nextSibling}A0=null}}else i===27?(i=A0,g1(e.type)?(e=s8,s8=null,A0=e):A0=i):A0=P0?E6(e.stateNode.nextSibling):null;return!0}function F2(){A0=P0=null,g0=!1}function Zl(){var e=N1;return e!==null&&(t6===null?t6=e:t6.push.apply(t6,e),N1=null),e}function W2(e){N1===null?N1=[e]:N1.push(e)}var Z4=N(null),L1=null,B6=null;function i1(e,i,l){B(Z4,i._currentValue),i._currentValue=l}function q6(e){e._currentValue=Z4.current,G(Z4)}function V4(e,i,l){for(;e!==null;){var t=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,t!==null&&(t.childLanes|=i)):t!==null&&(t.childLanes&i)!==i&&(t.childLanes|=i),e===l)break;e=e.return}}function Q4(e,i,l,t){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var r=c.dependencies;if(r!==null){var a=c.child;r=r.firstContext;e:for(;r!==null;){var u=r;r=c;for(var h=0;h<i.length;h++)if(u.context===i[h]){r.lanes|=l,u=r.alternate,u!==null&&(u.lanes|=l),V4(r.return,l,e),t||(a=null);break e}r=u.next}}else if(c.tag===18){if(a=c.return,a===null)throw Error(s(341));a.lanes|=l,r=a.alternate,r!==null&&(r.lanes|=l),V4(a,l,e),a=null}else a=c.child;if(a!==null)a.return=c;else for(a=c;a!==null;){if(a===e){a=null;break}if(c=a.sibling,c!==null){c.return=a.return,a=c;break}a=a.return}c=a}}function I2(e,i,l,t){e=null;for(var c=i,r=!1;c!==null;){if(!r){if((c.flags&524288)!==0)r=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var a=c.alternate;if(a===null)throw Error(s(387));if(a=a.memoizedProps,a!==null){var u=c.type;a6(c.pendingProps.value,a.value)||(e!==null?e.push(u):e=[u])}}else if(c===r6.current){if(a=c.alternate,a===null)throw Error(s(387));a.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Me):e=[Me])}c=c.return}e!==null&&Q4(i,e,l,t),i.flags|=262144}function c3(e){for(e=e.firstContext;e!==null;){if(!a6(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function H1(e){L1=e,B6=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function W0(e){return Vl(L1,e)}function r3(e,i){return L1===null&&H1(e),Vl(e,i)}function Vl(e,i){var l=i._currentValue;if(i={context:i,memoizedValue:l,next:null},B6===null){if(e===null)throw Error(s(308));B6=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else B6=B6.next=i;return l}var zc=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(l,t){e.push(t)}};this.abort=function(){i.aborted=!0,e.forEach(function(l){return l()})}},Dc=n.unstable_scheduleCallback,Nc=n.unstable_NormalPriority,U0={$$typeof:J,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function K4(){return{controller:new zc,data:new Map,refCount:0}}function P2(e){e.refCount--,e.refCount===0&&Dc(Nc,function(){e.controller.abort()})}var ee=null,J4=0,o2=0,h2=null;function Uc(e,i){if(ee===null){var l=ee=[];J4=0,o2=Wi(),h2={status:"pending",value:void 0,then:function(t){l.push(t)}}}return J4++,i.then(Ql,Ql),i}function Ql(){if(--J4===0&&ee!==null){h2!==null&&(h2.status="fulfilled");var e=ee;ee=null,o2=0,h2=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function Lc(e,i){var l=[],t={status:"pending",value:null,reason:null,then:function(c){l.push(c)}};return e.then(function(){t.status="fulfilled",t.value=i;for(var c=0;c<l.length;c++)(0,l[c])(i)},function(c){for(t.status="rejected",t.reason=c,c=0;c<l.length;c++)(0,l[c])(void 0)}),t}var Kl=R.S;R.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&Uc(e,i),Kl!==null&&Kl(e,i)};var B1=N(null);function F4(){var e=B1.current;return e!==null?e:S0.pooledCache}function x3(e,i){i===null?B(B1,B1.current):B(B1,i.pool)}function Jl(){var e=F4();return e===null?null:{parent:U0._currentValue,pool:e}}var ie=Error(s(460)),Fl=Error(s(474)),y3=Error(s(542)),W4={then:function(){}};function Wl(e){return e=e.status,e==="fulfilled"||e==="rejected"}function a3(){}function Il(e,i,l){switch(l=e[l],l===void 0?e.push(i):l!==i&&(i.then(a3,a3),i=l),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,e5(e),e;default:if(typeof i.status=="string")i.then(a3,a3);else{if(e=S0,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=i,e.status="pending",e.then(function(t){if(i.status==="pending"){var c=i;c.status="fulfilled",c.value=t}},function(t){if(i.status==="pending"){var c=i;c.status="rejected",c.reason=t}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,e5(e),e}throw le=i,ie}}var le=null;function Pl(){if(le===null)throw Error(s(459));var e=le;return le=null,e}function e5(e){if(e===ie||e===y3)throw Error(s(483))}var l1=!1;function I4(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function P4(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function n1(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function t1(e,i,l){var t=e.updateQueue;if(t===null)return null;if(t=t.shared,(m0&2)!==0){var c=t.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),t.pending=i,i=i3(e),Bl(e,null,l),i}return e3(e,t,i,l),i3(e)}function ne(e,i,l){if(i=i.updateQueue,i!==null&&(i=i.shared,(l&4194048)!==0)){var t=i.lanes;t&=e.pendingLanes,l|=t,i.lanes=l,Q8(e,l)}}function ei(e,i){var l=e.updateQueue,t=e.alternate;if(t!==null&&(t=t.updateQueue,l===t)){var c=null,r=null;if(l=l.firstBaseUpdate,l!==null){do{var a={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};r===null?c=r=a:r=r.next=a,l=l.next}while(l!==null);r===null?c=r=i:r=r.next=i}else c=r=i;l={baseState:t.baseState,firstBaseUpdate:c,lastBaseUpdate:r,shared:t.shared,callbacks:t.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=i:e.next=i,l.lastBaseUpdate=i}var ii=!1;function te(){if(ii){var e=h2;if(e!==null)throw e}}function ce(e,i,l,t){ii=!1;var c=e.updateQueue;l1=!1;var r=c.firstBaseUpdate,a=c.lastBaseUpdate,u=c.shared.pending;if(u!==null){c.shared.pending=null;var h=u,$=h.next;h.next=null,a===null?r=$:a.next=$,a=h;var A=e.alternate;A!==null&&(A=A.updateQueue,u=A.lastBaseUpdate,u!==a&&(u===null?A.firstBaseUpdate=$:u.next=$,A.lastBaseUpdate=h))}if(r!==null){var D=c.baseState;a=0,A=$=h=null,u=r;do{var b=u.lane&-536870913,j=b!==u.lane;if(j?(f0&b)===b:(t&b)===b){b!==0&&b===o2&&(ii=!0),A!==null&&(A=A.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var i0=e,I=u;b=i;var k0=l;switch(I.tag){case 1:if(i0=I.payload,typeof i0=="function"){D=i0.call(k0,D,b);break e}D=i0;break e;case 3:i0.flags=i0.flags&-65537|128;case 0:if(i0=I.payload,b=typeof i0=="function"?i0.call(k0,D,b):i0,b==null)break e;D=T({},D,b);break e;case 2:l1=!0}}b=u.callback,b!==null&&(e.flags|=64,j&&(e.flags|=8192),j=c.callbacks,j===null?c.callbacks=[b]:j.push(b))}else j={lane:b,tag:u.tag,payload:u.payload,callback:u.callback,next:null},A===null?($=A=j,h=D):A=A.next=j,a|=b;if(u=u.next,u===null){if(u=c.shared.pending,u===null)break;j=u,u=j.next,j.next=null,c.lastBaseUpdate=j,c.shared.pending=null}}while(!0);A===null&&(h=D),c.baseState=h,c.firstBaseUpdate=$,c.lastBaseUpdate=A,r===null&&(c.shared.lanes=0),u1|=a,e.lanes=a,e.memoizedState=D}}function i5(e,i){if(typeof e!="function")throw Error(s(191,e));e.call(i)}function l5(e,i){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)i5(l[e],i)}var d2=N(null),s3=N(0);function n5(e,i){e=K6,B(s3,e),B(d2,i),K6=e|i.baseLanes}function li(){B(s3,K6),B(d2,d2.current)}function ni(){K6=s3.current,G(d2),G(s3)}var c1=0,x0=null,p0=null,z0=null,f3=!1,g2=!1,q1=!1,u3=0,re=0,m2=null,Hc=0;function C0(){throw Error(s(321))}function ti(e,i){if(i===null)return!1;for(var l=0;l<i.length&&l<e.length;l++)if(!a6(e[l],i[l]))return!1;return!0}function ci(e,i,l,t,c,r){return c1=r,x0=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,R.H=e===null||e.memoizedState===null?B5:q5,q1=!1,r=l(t,c),q1=!1,g2&&(r=c5(i,l,t,c)),t5(e),r}function t5(e){R.H=w3;var i=p0!==null&&p0.next!==null;if(c1=0,z0=p0=x0=null,f3=!1,re=0,m2=null,i)throw Error(s(300));e===null||B0||(e=e.dependencies,e!==null&&c3(e)&&(B0=!0))}function c5(e,i,l,t){x0=e;var c=0;do{if(g2&&(m2=null),re=0,g2=!1,25<=c)throw Error(s(301));if(c+=1,z0=p0=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}R.H=Vc,r=i(l,t)}while(g2);return r}function Bc(){var e=R.H,i=e.useState()[0];return i=typeof i.then=="function"?xe(i):i,e=e.useState()[0],(p0!==null?p0.memoizedState:null)!==e&&(x0.flags|=1024),i}function ri(){var e=u3!==0;return u3=0,e}function xi(e,i,l){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~l}function yi(e){if(f3){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}f3=!1}c1=0,z0=p0=x0=null,g2=!1,re=u3=0,m2=null}function l6(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return z0===null?x0.memoizedState=z0=e:z0=z0.next=e,z0}function D0(){if(p0===null){var e=x0.alternate;e=e!==null?e.memoizedState:null}else e=p0.next;var i=z0===null?x0.memoizedState:z0.next;if(i!==null)z0=i,p0=e;else{if(e===null)throw x0.alternate===null?Error(s(467)):Error(s(310));p0=e,e={memoizedState:p0.memoizedState,baseState:p0.baseState,baseQueue:p0.baseQueue,queue:p0.queue,next:null},z0===null?x0.memoizedState=z0=e:z0=z0.next=e}return z0}function ai(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xe(e){var i=re;return re+=1,m2===null&&(m2=[]),e=Il(m2,e,i),i=x0,(z0===null?i.memoizedState:z0.next)===null&&(i=i.alternate,R.H=i===null||i.memoizedState===null?B5:q5),e}function o3(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return xe(e);if(e.$$typeof===J)return W0(e)}throw Error(s(438,String(e)))}function si(e){var i=null,l=x0.updateQueue;if(l!==null&&(i=l.memoCache),i==null){var t=x0.alternate;t!==null&&(t=t.updateQueue,t!==null&&(t=t.memoCache,t!=null&&(i={data:t.data.map(function(c){return c.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),l===null&&(l=ai(),x0.updateQueue=l),l.memoCache=i,l=i.data[i.index],l===void 0)for(l=i.data[i.index]=Array(e),t=0;t<e;t++)l[t]=Q0;return i.index++,l}function Y6(e,i){return typeof i=="function"?i(e):i}function h3(e){var i=D0();return fi(i,p0,e)}function fi(e,i,l){var t=e.queue;if(t===null)throw Error(s(311));t.lastRenderedReducer=l;var c=e.baseQueue,r=t.pending;if(r!==null){if(c!==null){var a=c.next;c.next=r.next,r.next=a}i.baseQueue=c=r,t.pending=null}if(r=e.baseState,c===null)e.memoizedState=r;else{i=c.next;var u=a=null,h=null,$=i,A=!1;do{var D=$.lane&-536870913;if(D!==$.lane?(f0&D)===D:(c1&D)===D){var b=$.revertLane;if(b===0)h!==null&&(h=h.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),D===o2&&(A=!0);else if((c1&b)===b){$=$.next,b===o2&&(A=!0);continue}else D={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},h===null?(u=h=D,a=r):h=h.next=D,x0.lanes|=b,u1|=b;D=$.action,q1&&l(r,D),r=$.hasEagerState?$.eagerState:l(r,D)}else b={lane:D,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},h===null?(u=h=b,a=r):h=h.next=b,x0.lanes|=D,u1|=D;$=$.next}while($!==null&&$!==i);if(h===null?a=r:h.next=u,!a6(r,e.memoizedState)&&(B0=!0,A&&(l=h2,l!==null)))throw l;e.memoizedState=r,e.baseState=a,e.baseQueue=h,t.lastRenderedState=r}return c===null&&(t.lanes=0),[e.memoizedState,t.dispatch]}function ui(e){var i=D0(),l=i.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=e;var t=l.dispatch,c=l.pending,r=i.memoizedState;if(c!==null){l.pending=null;var a=c=c.next;do r=e(r,a.action),a=a.next;while(a!==c);a6(r,i.memoizedState)||(B0=!0),i.memoizedState=r,i.baseQueue===null&&(i.baseState=r),l.lastRenderedState=r}return[r,t]}function r5(e,i,l){var t=x0,c=D0(),r=g0;if(r){if(l===void 0)throw Error(s(407));l=l()}else l=i();var a=!a6((p0||c).memoizedState,l);a&&(c.memoizedState=l,B0=!0),c=c.queue;var u=a5.bind(null,t,c,e);if(ye(2048,8,u,[e]),c.getSnapshot!==i||a||z0!==null&&z0.memoizedState.tag&1){if(t.flags|=2048,w2(9,d3(),y5.bind(null,t,c,l,i),null),S0===null)throw Error(s(349));r||(c1&124)!==0||x5(t,i,l)}return l}function x5(e,i,l){e.flags|=16384,e={getSnapshot:i,value:l},i=x0.updateQueue,i===null?(i=ai(),x0.updateQueue=i,i.stores=[e]):(l=i.stores,l===null?i.stores=[e]:l.push(e))}function y5(e,i,l,t){i.value=l,i.getSnapshot=t,s5(i)&&f5(e)}function a5(e,i,l){return l(function(){s5(i)&&f5(e)})}function s5(e){var i=e.getSnapshot;e=e.value;try{var l=i();return!a6(e,l)}catch{return!0}}function f5(e){var i=a2(e,2);i!==null&&d6(i,e,2)}function oi(e){var i=l6();if(typeof e=="function"){var l=e;if(e=l(),q1){I6(!0);try{l()}finally{I6(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Y6,lastRenderedState:e},i}function u5(e,i,l,t){return e.baseState=l,fi(e,p0,typeof t=="function"?t:Y6)}function qc(e,i,l,t,c){if(m3(e))throw Error(s(485));if(e=i.action,e!==null){var r={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(a){r.listeners.push(a)}};R.T!==null?l(!0):r.isTransition=!1,t(r),l=i.pending,l===null?(r.next=i.pending=r,o5(i,r)):(r.next=l.next,i.pending=l.next=r)}}function o5(e,i){var l=i.action,t=i.payload,c=e.state;if(i.isTransition){var r=R.T,a={};R.T=a;try{var u=l(c,t),h=R.S;h!==null&&h(a,u),h5(e,i,u)}catch($){hi(e,i,$)}finally{R.T=r}}else try{r=l(c,t),h5(e,i,r)}catch($){hi(e,i,$)}}function h5(e,i,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(t){d5(e,i,t)},function(t){return hi(e,i,t)}):d5(e,i,l)}function d5(e,i,l){i.status="fulfilled",i.value=l,g5(i),e.state=l,i=e.pending,i!==null&&(l=i.next,l===i?e.pending=null:(l=l.next,i.next=l,o5(e,l)))}function hi(e,i,l){var t=e.pending;if(e.pending=null,t!==null){t=t.next;do i.status="rejected",i.reason=l,g5(i),i=i.next;while(i!==t)}e.action=null}function g5(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function m5(e,i){return i}function w5(e,i){if(g0){var l=S0.formState;if(l!==null){e:{var t=x0;if(g0){if(A0){i:{for(var c=A0,r=A6;c.nodeType!==8;){if(!r){c=null;break i}if(c=E6(c.nextSibling),c===null){c=null;break i}}r=c.data,c=r==="F!"||r==="F"?c:null}if(c){A0=E6(c.nextSibling),t=c.data==="F!";break e}}U1(t)}t=!1}t&&(i=l[0])}}return l=l6(),l.memoizedState=l.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:m5,lastRenderedState:i},l.queue=t,l=U5.bind(null,x0,t),t.dispatch=l,t=oi(!1),r=pi.bind(null,x0,!1,t.queue),t=l6(),c={state:i,dispatch:null,action:e,pending:null},t.queue=c,l=qc.bind(null,x0,c,r,l),c.dispatch=l,t.memoizedState=e,[i,l,!1]}function p5(e){var i=D0();return v5(i,p0,e)}function v5(e,i,l){if(i=fi(e,i,m5)[0],e=h3(Y6)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var t=xe(i)}catch(a){throw a===ie?y3:a}else t=i;i=D0();var c=i.queue,r=c.dispatch;return l!==i.memoizedState&&(x0.flags|=2048,w2(9,d3(),Yc.bind(null,c,l),null)),[t,r,e]}function Yc(e,i){e.action=i}function k5(e){var i=D0(),l=p0;if(l!==null)return v5(i,l,e);D0(),i=i.memoizedState,l=D0();var t=l.queue.dispatch;return l.memoizedState=e,[i,t,!1]}function w2(e,i,l,t){return e={tag:e,create:l,deps:t,inst:i,next:null},i=x0.updateQueue,i===null&&(i=ai(),x0.updateQueue=i),l=i.lastEffect,l===null?i.lastEffect=e.next=e:(t=l.next,l.next=e,e.next=t,i.lastEffect=e),e}function d3(){return{destroy:void 0,resource:void 0}}function $5(){return D0().memoizedState}function g3(e,i,l,t){var c=l6();t=t===void 0?null:t,x0.flags|=e,c.memoizedState=w2(1|i,d3(),l,t)}function ye(e,i,l,t){var c=D0();t=t===void 0?null:t;var r=c.memoizedState.inst;p0!==null&&t!==null&&ti(t,p0.memoizedState.deps)?c.memoizedState=w2(i,r,l,t):(x0.flags|=e,c.memoizedState=w2(1|i,r,l,t))}function _5(e,i){g3(8390656,8,e,i)}function S5(e,i){ye(2048,8,e,i)}function b5(e,i){return ye(4,2,e,i)}function j5(e,i){return ye(4,4,e,i)}function M5(e,i){if(typeof i=="function"){e=e();var l=i(e);return function(){typeof l=="function"?l():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function E5(e,i,l){l=l!=null?l.concat([e]):null,ye(4,4,M5.bind(null,i,e),l)}function di(){}function T5(e,i){var l=D0();i=i===void 0?null:i;var t=l.memoizedState;return i!==null&&ti(i,t[1])?t[0]:(l.memoizedState=[e,i],e)}function A5(e,i){var l=D0();i=i===void 0?null:i;var t=l.memoizedState;if(i!==null&&ti(i,t[1]))return t[0];if(t=e(),q1){I6(!0);try{e()}finally{I6(!1)}}return l.memoizedState=[t,i],t}function gi(e,i,l){return l===void 0||(c1&1073741824)!==0?e.memoizedState=i:(e.memoizedState=l,e=zn(),x0.lanes|=e,u1|=e,l)}function O5(e,i,l,t){return a6(l,i)?l:d2.current!==null?(e=gi(e,l,t),a6(e,i)||(B0=!0),e):(c1&42)===0?(B0=!0,e.memoizedState=l):(e=zn(),x0.lanes|=e,u1|=e,i)}function C5(e,i,l,t,c){var r=q.p;q.p=r!==0&&8>r?r:8;var a=R.T,u={};R.T=u,pi(e,!1,i,l);try{var h=c(),$=R.S;if($!==null&&$(u,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var A=Lc(h,t);ae(e,i,A,h6(e))}else ae(e,i,t,h6(e))}catch(D){ae(e,i,{then:function(){},status:"rejected",reason:D},h6())}finally{q.p=r,R.T=a}}function Gc(){}function mi(e,i,l,t){if(e.tag!==5)throw Error(s(476));var c=R5(e).queue;C5(e,c,i,e0,l===null?Gc:function(){return z5(e),l(t)})}function R5(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:e0,baseState:e0,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Y6,lastRenderedState:e0},next:null};var l={};return i.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Y6,lastRenderedState:l},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function z5(e){var i=R5(e).next.queue;ae(e,i,{},h6())}function wi(){return W0(Me)}function D5(){return D0().memoizedState}function N5(){return D0().memoizedState}function Xc(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var l=h6();e=n1(l);var t=t1(i,e,l);t!==null&&(d6(t,i,l),ne(t,i,l)),i={cache:K4()},e.payload=i;return}i=i.return}}function Zc(e,i,l){var t=h6();l={lane:t,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},m3(e)?L5(i,l):(l=L4(e,i,l,t),l!==null&&(d6(l,e,t),H5(l,i,t)))}function U5(e,i,l){var t=h6();ae(e,i,l,t)}function ae(e,i,l,t){var c={lane:t,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(m3(e))L5(i,c);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=i.lastRenderedReducer,r!==null))try{var a=i.lastRenderedState,u=r(a,l);if(c.hasEagerState=!0,c.eagerState=u,a6(u,a))return e3(e,i,c,0),S0===null&&Pe(),!1}catch{}finally{}if(l=L4(e,i,c,t),l!==null)return d6(l,e,t),H5(l,i,t),!0}return!1}function pi(e,i,l,t){if(t={lane:2,revertLane:Wi(),action:t,hasEagerState:!1,eagerState:null,next:null},m3(e)){if(i)throw Error(s(479))}else i=L4(e,l,t,2),i!==null&&d6(i,e,2)}function m3(e){var i=e.alternate;return e===x0||i!==null&&i===x0}function L5(e,i){g2=f3=!0;var l=e.pending;l===null?i.next=i:(i.next=l.next,l.next=i),e.pending=i}function H5(e,i,l){if((l&4194048)!==0){var t=i.lanes;t&=e.pendingLanes,l|=t,i.lanes=l,Q8(e,l)}}var w3={readContext:W0,use:o3,useCallback:C0,useContext:C0,useEffect:C0,useImperativeHandle:C0,useLayoutEffect:C0,useInsertionEffect:C0,useMemo:C0,useReducer:C0,useRef:C0,useState:C0,useDebugValue:C0,useDeferredValue:C0,useTransition:C0,useSyncExternalStore:C0,useId:C0,useHostTransitionStatus:C0,useFormState:C0,useActionState:C0,useOptimistic:C0,useMemoCache:C0,useCacheRefresh:C0},B5={readContext:W0,use:o3,useCallback:function(e,i){return l6().memoizedState=[e,i===void 0?null:i],e},useContext:W0,useEffect:_5,useImperativeHandle:function(e,i,l){l=l!=null?l.concat([e]):null,g3(4194308,4,M5.bind(null,i,e),l)},useLayoutEffect:function(e,i){return g3(4194308,4,e,i)},useInsertionEffect:function(e,i){g3(4,2,e,i)},useMemo:function(e,i){var l=l6();i=i===void 0?null:i;var t=e();if(q1){I6(!0);try{e()}finally{I6(!1)}}return l.memoizedState=[t,i],t},useReducer:function(e,i,l){var t=l6();if(l!==void 0){var c=l(i);if(q1){I6(!0);try{l(i)}finally{I6(!1)}}}else c=i;return t.memoizedState=t.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},t.queue=e,e=e.dispatch=Zc.bind(null,x0,e),[t.memoizedState,e]},useRef:function(e){var i=l6();return e={current:e},i.memoizedState=e},useState:function(e){e=oi(e);var i=e.queue,l=U5.bind(null,x0,i);return i.dispatch=l,[e.memoizedState,l]},useDebugValue:di,useDeferredValue:function(e,i){var l=l6();return gi(l,e,i)},useTransition:function(){var e=oi(!1);return e=C5.bind(null,x0,e.queue,!0,!1),l6().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,l){var t=x0,c=l6();if(g0){if(l===void 0)throw Error(s(407));l=l()}else{if(l=i(),S0===null)throw Error(s(349));(f0&124)!==0||x5(t,i,l)}c.memoizedState=l;var r={value:l,getSnapshot:i};return c.queue=r,_5(a5.bind(null,t,r,e),[e]),t.flags|=2048,w2(9,d3(),y5.bind(null,t,r,l,i),null),l},useId:function(){var e=l6(),i=S0.identifierPrefix;if(g0){var l=H6,t=L6;l=(t&~(1<<32-y6(t)-1)).toString(32)+l,i="«"+i+"R"+l,l=u3++,0<l&&(i+="H"+l.toString(32)),i+="»"}else l=Hc++,i="«"+i+"r"+l.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:wi,useFormState:w5,useActionState:w5,useOptimistic:function(e){var i=l6();i.memoizedState=i.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=l,i=pi.bind(null,x0,!0,l),l.dispatch=i,[e,i]},useMemoCache:si,useCacheRefresh:function(){return l6().memoizedState=Xc.bind(null,x0)}},q5={readContext:W0,use:o3,useCallback:T5,useContext:W0,useEffect:S5,useImperativeHandle:E5,useInsertionEffect:b5,useLayoutEffect:j5,useMemo:A5,useReducer:h3,useRef:$5,useState:function(){return h3(Y6)},useDebugValue:di,useDeferredValue:function(e,i){var l=D0();return O5(l,p0.memoizedState,e,i)},useTransition:function(){var e=h3(Y6)[0],i=D0().memoizedState;return[typeof e=="boolean"?e:xe(e),i]},useSyncExternalStore:r5,useId:D5,useHostTransitionStatus:wi,useFormState:p5,useActionState:p5,useOptimistic:function(e,i){var l=D0();return u5(l,p0,e,i)},useMemoCache:si,useCacheRefresh:N5},Vc={readContext:W0,use:o3,useCallback:T5,useContext:W0,useEffect:S5,useImperativeHandle:E5,useInsertionEffect:b5,useLayoutEffect:j5,useMemo:A5,useReducer:ui,useRef:$5,useState:function(){return ui(Y6)},useDebugValue:di,useDeferredValue:function(e,i){var l=D0();return p0===null?gi(l,e,i):O5(l,p0.memoizedState,e,i)},useTransition:function(){var e=ui(Y6)[0],i=D0().memoizedState;return[typeof e=="boolean"?e:xe(e),i]},useSyncExternalStore:r5,useId:D5,useHostTransitionStatus:wi,useFormState:k5,useActionState:k5,useOptimistic:function(e,i){var l=D0();return p0!==null?u5(l,p0,e,i):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:si,useCacheRefresh:N5},p2=null,se=0;function p3(e){var i=se;return se+=1,p2===null&&(p2=[]),Il(p2,e,i)}function fe(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function v3(e,i){throw i.$$typeof===E?Error(s(525)):(e=Object.prototype.toString.call(i),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Y5(e){var i=e._init;return i(e._payload)}function G5(e){function i(p,w){if(e){var k=p.deletions;k===null?(p.deletions=[w],p.flags|=16):k.push(w)}}function l(p,w){if(!e)return null;for(;w!==null;)i(p,w),w=w.sibling;return null}function t(p){for(var w=new Map;p!==null;)p.key!==null?w.set(p.key,p):w.set(p.index,p),p=p.sibling;return w}function c(p,w){return p=U6(p,w),p.index=0,p.sibling=null,p}function r(p,w,k){return p.index=k,e?(k=p.alternate,k!==null?(k=k.index,k<w?(p.flags|=67108866,w):k):(p.flags|=67108866,w)):(p.flags|=1048576,w)}function a(p){return e&&p.alternate===null&&(p.flags|=67108866),p}function u(p,w,k,z){return w===null||w.tag!==6?(w=B4(k,p.mode,z),w.return=p,w):(w=c(w,k),w.return=p,w)}function h(p,w,k,z){var Z=k.type;return Z===H?A(p,w,k.props.children,z,k.key):w!==null&&(w.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===j0&&Y5(Z)===w.type)?(w=c(w,k.props),fe(w,k),w.return=p,w):(w=l3(k.type,k.key,k.props,null,p.mode,z),fe(w,k),w.return=p,w)}function $(p,w,k,z){return w===null||w.tag!==4||w.stateNode.containerInfo!==k.containerInfo||w.stateNode.implementation!==k.implementation?(w=q4(k,p.mode,z),w.return=p,w):(w=c(w,k.children||[]),w.return=p,w)}function A(p,w,k,z,Z){return w===null||w.tag!==7?(w=R1(k,p.mode,z,Z),w.return=p,w):(w=c(w,k),w.return=p,w)}function D(p,w,k){if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return w=B4(""+w,p.mode,k),w.return=p,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case S:return k=l3(w.type,w.key,w.props,null,p.mode,k),fe(k,w),k.return=p,k;case L:return w=q4(w,p.mode,k),w.return=p,w;case j0:var z=w._init;return w=z(w._payload),D(p,w,k)}if(J0(w)||K0(w))return w=R1(w,p.mode,k,null),w.return=p,w;if(typeof w.then=="function")return D(p,p3(w),k);if(w.$$typeof===J)return D(p,r3(p,w),k);v3(p,w)}return null}function b(p,w,k,z){var Z=w!==null?w.key:null;if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return Z!==null?null:u(p,w,""+k,z);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case S:return k.key===Z?h(p,w,k,z):null;case L:return k.key===Z?$(p,w,k,z):null;case j0:return Z=k._init,k=Z(k._payload),b(p,w,k,z)}if(J0(k)||K0(k))return Z!==null?null:A(p,w,k,z,null);if(typeof k.then=="function")return b(p,w,p3(k),z);if(k.$$typeof===J)return b(p,w,r3(p,k),z);v3(p,k)}return null}function j(p,w,k,z,Z){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return p=p.get(k)||null,u(w,p,""+z,Z);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case S:return p=p.get(z.key===null?k:z.key)||null,h(w,p,z,Z);case L:return p=p.get(z.key===null?k:z.key)||null,$(w,p,z,Z);case j0:var y0=z._init;return z=y0(z._payload),j(p,w,k,z,Z)}if(J0(z)||K0(z))return p=p.get(k)||null,A(w,p,z,Z,null);if(typeof z.then=="function")return j(p,w,k,p3(z),Z);if(z.$$typeof===J)return j(p,w,k,r3(w,z),Z);v3(w,z)}return null}function i0(p,w,k,z){for(var Z=null,y0=null,K=w,P=w=0,Y0=null;K!==null&&P<k.length;P++){K.index>P?(Y0=K,K=null):Y0=K.sibling;var d0=b(p,K,k[P],z);if(d0===null){K===null&&(K=Y0);break}e&&K&&d0.alternate===null&&i(p,K),w=r(d0,w,P),y0===null?Z=d0:y0.sibling=d0,y0=d0,K=Y0}if(P===k.length)return l(p,K),g0&&D1(p,P),Z;if(K===null){for(;P<k.length;P++)K=D(p,k[P],z),K!==null&&(w=r(K,w,P),y0===null?Z=K:y0.sibling=K,y0=K);return g0&&D1(p,P),Z}for(K=t(K);P<k.length;P++)Y0=j(K,p,P,k[P],z),Y0!==null&&(e&&Y0.alternate!==null&&K.delete(Y0.key===null?P:Y0.key),w=r(Y0,w,P),y0===null?Z=Y0:y0.sibling=Y0,y0=Y0);return e&&K.forEach(function(k1){return i(p,k1)}),g0&&D1(p,P),Z}function I(p,w,k,z){if(k==null)throw Error(s(151));for(var Z=null,y0=null,K=w,P=w=0,Y0=null,d0=k.next();K!==null&&!d0.done;P++,d0=k.next()){K.index>P?(Y0=K,K=null):Y0=K.sibling;var k1=b(p,K,d0.value,z);if(k1===null){K===null&&(K=Y0);break}e&&K&&k1.alternate===null&&i(p,K),w=r(k1,w,P),y0===null?Z=k1:y0.sibling=k1,y0=k1,K=Y0}if(d0.done)return l(p,K),g0&&D1(p,P),Z;if(K===null){for(;!d0.done;P++,d0=k.next())d0=D(p,d0.value,z),d0!==null&&(w=r(d0,w,P),y0===null?Z=d0:y0.sibling=d0,y0=d0);return g0&&D1(p,P),Z}for(K=t(K);!d0.done;P++,d0=k.next())d0=j(K,p,P,d0.value,z),d0!==null&&(e&&d0.alternate!==null&&K.delete(d0.key===null?P:d0.key),w=r(d0,w,P),y0===null?Z=d0:y0.sibling=d0,y0=d0);return e&&K.forEach(function(Qr){return i(p,Qr)}),g0&&D1(p,P),Z}function k0(p,w,k,z){if(typeof k=="object"&&k!==null&&k.type===H&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case S:e:{for(var Z=k.key;w!==null;){if(w.key===Z){if(Z=k.type,Z===H){if(w.tag===7){l(p,w.sibling),z=c(w,k.props.children),z.return=p,p=z;break e}}else if(w.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===j0&&Y5(Z)===w.type){l(p,w.sibling),z=c(w,k.props),fe(z,k),z.return=p,p=z;break e}l(p,w);break}else i(p,w);w=w.sibling}k.type===H?(z=R1(k.props.children,p.mode,z,k.key),z.return=p,p=z):(z=l3(k.type,k.key,k.props,null,p.mode,z),fe(z,k),z.return=p,p=z)}return a(p);case L:e:{for(Z=k.key;w!==null;){if(w.key===Z)if(w.tag===4&&w.stateNode.containerInfo===k.containerInfo&&w.stateNode.implementation===k.implementation){l(p,w.sibling),z=c(w,k.children||[]),z.return=p,p=z;break e}else{l(p,w);break}else i(p,w);w=w.sibling}z=q4(k,p.mode,z),z.return=p,p=z}return a(p);case j0:return Z=k._init,k=Z(k._payload),k0(p,w,k,z)}if(J0(k))return i0(p,w,k,z);if(K0(k)){if(Z=K0(k),typeof Z!="function")throw Error(s(150));return k=Z.call(k),I(p,w,k,z)}if(typeof k.then=="function")return k0(p,w,p3(k),z);if(k.$$typeof===J)return k0(p,w,r3(p,k),z);v3(p,k)}return typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint"?(k=""+k,w!==null&&w.tag===6?(l(p,w.sibling),z=c(w,k),z.return=p,p=z):(l(p,w),z=B4(k,p.mode,z),z.return=p,p=z),a(p)):l(p,w)}return function(p,w,k,z){try{se=0;var Z=k0(p,w,k,z);return p2=null,Z}catch(K){if(K===ie||K===y3)throw K;var y0=s6(29,K,null,p.mode);return y0.lanes=z,y0.return=p,y0}finally{}}}var v2=G5(!0),X5=G5(!1),_6=N(null),O6=null;function r1(e){var i=e.alternate;B(L0,L0.current&1),B(_6,e),O6===null&&(i===null||d2.current!==null||i.memoizedState!==null)&&(O6=e)}function Z5(e){if(e.tag===22){if(B(L0,L0.current),B(_6,e),O6===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(O6=e)}}else x1()}function x1(){B(L0,L0.current),B(_6,_6.current)}function G6(e){G(_6),O6===e&&(O6=null),G(L0)}var L0=N(0);function k3(e){for(var i=e;i!==null;){if(i.tag===13){var l=i.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||a8(l)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function vi(e,i,l,t){i=e.memoizedState,l=l(t,i),l=l==null?i:T({},i,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var ki={enqueueSetState:function(e,i,l){e=e._reactInternals;var t=h6(),c=n1(t);c.payload=i,l!=null&&(c.callback=l),i=t1(e,c,t),i!==null&&(d6(i,e,t),ne(i,e,t))},enqueueReplaceState:function(e,i,l){e=e._reactInternals;var t=h6(),c=n1(t);c.tag=1,c.payload=i,l!=null&&(c.callback=l),i=t1(e,c,t),i!==null&&(d6(i,e,t),ne(i,e,t))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var l=h6(),t=n1(l);t.tag=2,i!=null&&(t.callback=i),i=t1(e,t,l),i!==null&&(d6(i,e,l),ne(i,e,l))}};function V5(e,i,l,t,c,r,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(t,r,a):i.prototype&&i.prototype.isPureReactComponent?!Q2(l,t)||!Q2(c,r):!0}function Q5(e,i,l,t){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(l,t),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(l,t),i.state!==e&&ki.enqueueReplaceState(i,i.state,null)}function Y1(e,i){var l=i;if("ref"in i){l={};for(var t in i)t!=="ref"&&(l[t]=i[t])}if(e=e.defaultProps){l===i&&(l=T({},l));for(var c in e)l[c]===void 0&&(l[c]=e[c])}return l}var $3=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function K5(e){$3(e)}function J5(e){console.error(e)}function F5(e){$3(e)}function _3(e,i){try{var l=e.onUncaughtError;l(i.value,{componentStack:i.stack})}catch(t){setTimeout(function(){throw t})}}function W5(e,i,l){try{var t=e.onCaughtError;t(l.value,{componentStack:l.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function $i(e,i,l){return l=n1(l),l.tag=3,l.payload={element:null},l.callback=function(){_3(e,i)},l}function I5(e){return e=n1(e),e.tag=3,e}function P5(e,i,l,t){var c=l.type.getDerivedStateFromError;if(typeof c=="function"){var r=t.value;e.payload=function(){return c(r)},e.callback=function(){W5(i,l,t)}}var a=l.stateNode;a!==null&&typeof a.componentDidCatch=="function"&&(e.callback=function(){W5(i,l,t),typeof c!="function"&&(o1===null?o1=new Set([this]):o1.add(this));var u=t.stack;this.componentDidCatch(t.value,{componentStack:u!==null?u:""})})}function Qc(e,i,l,t,c){if(l.flags|=32768,t!==null&&typeof t=="object"&&typeof t.then=="function"){if(i=l.alternate,i!==null&&I2(i,l,c,!0),l=_6.current,l!==null){switch(l.tag){case 13:return O6===null?Vi():l.alternate===null&&O0===0&&(O0=3),l.flags&=-257,l.flags|=65536,l.lanes=c,t===W4?l.flags|=16384:(i=l.updateQueue,i===null?l.updateQueue=new Set([t]):i.add(t),Ki(e,t,c)),!1;case 22:return l.flags|=65536,t===W4?l.flags|=16384:(i=l.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([t])},l.updateQueue=i):(l=i.retryQueue,l===null?i.retryQueue=new Set([t]):l.add(t)),Ki(e,t,c)),!1}throw Error(s(435,l.tag))}return Ki(e,t,c),Vi(),!1}if(g0)return i=_6.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=c,t!==X4&&(e=Error(s(422),{cause:t}),W2(p6(e,l)))):(t!==X4&&(i=Error(s(423),{cause:t}),W2(p6(i,l))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,t=p6(t,l),c=$i(e.stateNode,t,c),ei(e,c),O0!==4&&(O0=2)),!1;var r=Error(s(520),{cause:t});if(r=p6(r,l),we===null?we=[r]:we.push(r),O0!==4&&(O0=2),i===null)return!0;t=p6(t,l),l=i;do{switch(l.tag){case 3:return l.flags|=65536,e=c&-c,l.lanes|=e,e=$i(l.stateNode,t,e),ei(l,e),!1;case 1:if(i=l.type,r=l.stateNode,(l.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(o1===null||!o1.has(r))))return l.flags|=65536,c&=-c,l.lanes|=c,c=I5(c),P5(c,e,l,t),ei(l,c),!1}l=l.return}while(l!==null);return!1}var en=Error(s(461)),B0=!1;function G0(e,i,l,t){i.child=e===null?X5(i,null,l,t):v2(i,e.child,l,t)}function ln(e,i,l,t,c){l=l.render;var r=i.ref;if("ref"in t){var a={};for(var u in t)u!=="ref"&&(a[u]=t[u])}else a=t;return H1(i),t=ci(e,i,l,a,r,c),u=ri(),e!==null&&!B0?(xi(e,i,c),X6(e,i,c)):(g0&&u&&Y4(i),i.flags|=1,G0(e,i,t,c),i.child)}function nn(e,i,l,t,c){if(e===null){var r=l.type;return typeof r=="function"&&!H4(r)&&r.defaultProps===void 0&&l.compare===null?(i.tag=15,i.type=r,tn(e,i,r,t,c)):(e=l3(l.type,null,t,i,i.mode,c),e.ref=i.ref,e.return=i,i.child=e)}if(r=e.child,!Ai(e,c)){var a=r.memoizedProps;if(l=l.compare,l=l!==null?l:Q2,l(a,t)&&e.ref===i.ref)return X6(e,i,c)}return i.flags|=1,e=U6(r,t),e.ref=i.ref,e.return=i,i.child=e}function tn(e,i,l,t,c){if(e!==null){var r=e.memoizedProps;if(Q2(r,t)&&e.ref===i.ref)if(B0=!1,i.pendingProps=t=r,Ai(e,c))(e.flags&131072)!==0&&(B0=!0);else return i.lanes=e.lanes,X6(e,i,c)}return _i(e,i,l,t,c)}function cn(e,i,l){var t=i.pendingProps,c=t.children,r=e!==null?e.memoizedState:null;if(t.mode==="hidden"){if((i.flags&128)!==0){if(t=r!==null?r.baseLanes|l:l,e!==null){for(c=i.child=e.child,r=0;c!==null;)r=r|c.lanes|c.childLanes,c=c.sibling;i.childLanes=r&~t}else i.childLanes=0,i.child=null;return rn(e,i,t,l)}if((l&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&x3(i,r!==null?r.cachePool:null),r!==null?n5(i,r):li(),Z5(i);else return i.lanes=i.childLanes=536870912,rn(e,i,r!==null?r.baseLanes|l:l,l)}else r!==null?(x3(i,r.cachePool),n5(i,r),x1(),i.memoizedState=null):(e!==null&&x3(i,null),li(),x1());return G0(e,i,c,l),i.child}function rn(e,i,l,t){var c=F4();return c=c===null?null:{parent:U0._currentValue,pool:c},i.memoizedState={baseLanes:l,cachePool:c},e!==null&&x3(i,null),li(),Z5(i),e!==null&&I2(e,i,t,!0),null}function S3(e,i){var l=i.ref;if(l===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(s(284));(e===null||e.ref!==l)&&(i.flags|=4194816)}}function _i(e,i,l,t,c){return H1(i),l=ci(e,i,l,t,void 0,c),t=ri(),e!==null&&!B0?(xi(e,i,c),X6(e,i,c)):(g0&&t&&Y4(i),i.flags|=1,G0(e,i,l,c),i.child)}function xn(e,i,l,t,c,r){return H1(i),i.updateQueue=null,l=c5(i,t,l,c),t5(e),t=ri(),e!==null&&!B0?(xi(e,i,r),X6(e,i,r)):(g0&&t&&Y4(i),i.flags|=1,G0(e,i,l,r),i.child)}function yn(e,i,l,t,c){if(H1(i),i.stateNode===null){var r=s2,a=l.contextType;typeof a=="object"&&a!==null&&(r=W0(a)),r=new l(t,r),i.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ki,i.stateNode=r,r._reactInternals=i,r=i.stateNode,r.props=t,r.state=i.memoizedState,r.refs={},I4(i),a=l.contextType,r.context=typeof a=="object"&&a!==null?W0(a):s2,r.state=i.memoizedState,a=l.getDerivedStateFromProps,typeof a=="function"&&(vi(i,l,a,t),r.state=i.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(a=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),a!==r.state&&ki.enqueueReplaceState(r,r.state,null),ce(i,t,r,c),te(),r.state=i.memoizedState),typeof r.componentDidMount=="function"&&(i.flags|=4194308),t=!0}else if(e===null){r=i.stateNode;var u=i.memoizedProps,h=Y1(l,u);r.props=h;var $=r.context,A=l.contextType;a=s2,typeof A=="object"&&A!==null&&(a=W0(A));var D=l.getDerivedStateFromProps;A=typeof D=="function"||typeof r.getSnapshotBeforeUpdate=="function",u=i.pendingProps!==u,A||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(u||$!==a)&&Q5(i,r,t,a),l1=!1;var b=i.memoizedState;r.state=b,ce(i,t,r,c),te(),$=i.memoizedState,u||b!==$||l1?(typeof D=="function"&&(vi(i,l,D,t),$=i.memoizedState),(h=l1||V5(i,l,h,t,b,$,a))?(A||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(i.flags|=4194308)):(typeof r.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=t,i.memoizedState=$),r.props=t,r.state=$,r.context=a,t=h):(typeof r.componentDidMount=="function"&&(i.flags|=4194308),t=!1)}else{r=i.stateNode,P4(e,i),a=i.memoizedProps,A=Y1(l,a),r.props=A,D=i.pendingProps,b=r.context,$=l.contextType,h=s2,typeof $=="object"&&$!==null&&(h=W0($)),u=l.getDerivedStateFromProps,($=typeof u=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(a!==D||b!==h)&&Q5(i,r,t,h),l1=!1,b=i.memoizedState,r.state=b,ce(i,t,r,c),te();var j=i.memoizedState;a!==D||b!==j||l1||e!==null&&e.dependencies!==null&&c3(e.dependencies)?(typeof u=="function"&&(vi(i,l,u,t),j=i.memoizedState),(A=l1||V5(i,l,A,t,b,j,h)||e!==null&&e.dependencies!==null&&c3(e.dependencies))?($||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(t,j,h),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(t,j,h)),typeof r.componentDidUpdate=="function"&&(i.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof r.componentDidUpdate!="function"||a===e.memoizedProps&&b===e.memoizedState||(i.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&b===e.memoizedState||(i.flags|=1024),i.memoizedProps=t,i.memoizedState=j),r.props=t,r.state=j,r.context=h,t=A):(typeof r.componentDidUpdate!="function"||a===e.memoizedProps&&b===e.memoizedState||(i.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&b===e.memoizedState||(i.flags|=1024),t=!1)}return r=t,S3(e,i),t=(i.flags&128)!==0,r||t?(r=i.stateNode,l=t&&typeof l.getDerivedStateFromError!="function"?null:r.render(),i.flags|=1,e!==null&&t?(i.child=v2(i,e.child,null,c),i.child=v2(i,null,l,c)):G0(e,i,l,c),i.memoizedState=r.state,e=i.child):e=X6(e,i,c),e}function an(e,i,l,t){return F2(),i.flags|=256,G0(e,i,l,t),i.child}var Si={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bi(e){return{baseLanes:e,cachePool:Jl()}}function ji(e,i,l){return e=e!==null?e.childLanes&~l:0,i&&(e|=S6),e}function sn(e,i,l){var t=i.pendingProps,c=!1,r=(i.flags&128)!==0,a;if((a=r)||(a=e!==null&&e.memoizedState===null?!1:(L0.current&2)!==0),a&&(c=!0,i.flags&=-129),a=(i.flags&32)!==0,i.flags&=-33,e===null){if(g0){if(c?r1(i):x1(),g0){var u=A0,h;if(h=u){e:{for(h=u,u=A6;h.nodeType!==8;){if(!u){u=null;break e}if(h=E6(h.nextSibling),h===null){u=null;break e}}u=h}u!==null?(i.memoizedState={dehydrated:u,treeContext:z1!==null?{id:L6,overflow:H6}:null,retryLane:536870912,hydrationErrors:null},h=s6(18,null,null,0),h.stateNode=u,h.return=i,i.child=h,P0=i,A0=null,h=!0):h=!1}h||U1(i)}if(u=i.memoizedState,u!==null&&(u=u.dehydrated,u!==null))return a8(u)?i.lanes=32:i.lanes=536870912,null;G6(i)}return u=t.children,t=t.fallback,c?(x1(),c=i.mode,u=b3({mode:"hidden",children:u},c),t=R1(t,c,l,null),u.return=i,t.return=i,u.sibling=t,i.child=u,c=i.child,c.memoizedState=bi(l),c.childLanes=ji(e,a,l),i.memoizedState=Si,t):(r1(i),Mi(i,u))}if(h=e.memoizedState,h!==null&&(u=h.dehydrated,u!==null)){if(r)i.flags&256?(r1(i),i.flags&=-257,i=Ei(e,i,l)):i.memoizedState!==null?(x1(),i.child=e.child,i.flags|=128,i=null):(x1(),c=t.fallback,u=i.mode,t=b3({mode:"visible",children:t.children},u),c=R1(c,u,l,null),c.flags|=2,t.return=i,c.return=i,t.sibling=c,i.child=t,v2(i,e.child,null,l),t=i.child,t.memoizedState=bi(l),t.childLanes=ji(e,a,l),i.memoizedState=Si,i=c);else if(r1(i),a8(u)){if(a=u.nextSibling&&u.nextSibling.dataset,a)var $=a.dgst;a=$,t=Error(s(419)),t.stack="",t.digest=a,W2({value:t,source:null,stack:null}),i=Ei(e,i,l)}else if(B0||I2(e,i,l,!1),a=(l&e.childLanes)!==0,B0||a){if(a=S0,a!==null&&(t=l&-l,t=(t&42)!==0?1:s4(t),t=(t&(a.suspendedLanes|l))!==0?0:t,t!==0&&t!==h.retryLane))throw h.retryLane=t,a2(e,t),d6(a,e,t),en;u.data==="$?"||Vi(),i=Ei(e,i,l)}else u.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=h.treeContext,A0=E6(u.nextSibling),P0=i,g0=!0,N1=null,A6=!1,e!==null&&(k6[$6++]=L6,k6[$6++]=H6,k6[$6++]=z1,L6=e.id,H6=e.overflow,z1=i),i=Mi(i,t.children),i.flags|=4096);return i}return c?(x1(),c=t.fallback,u=i.mode,h=e.child,$=h.sibling,t=U6(h,{mode:"hidden",children:t.children}),t.subtreeFlags=h.subtreeFlags&65011712,$!==null?c=U6($,c):(c=R1(c,u,l,null),c.flags|=2),c.return=i,t.return=i,t.sibling=c,i.child=t,t=c,c=i.child,u=e.child.memoizedState,u===null?u=bi(l):(h=u.cachePool,h!==null?($=U0._currentValue,h=h.parent!==$?{parent:$,pool:$}:h):h=Jl(),u={baseLanes:u.baseLanes|l,cachePool:h}),c.memoizedState=u,c.childLanes=ji(e,a,l),i.memoizedState=Si,t):(r1(i),l=e.child,e=l.sibling,l=U6(l,{mode:"visible",children:t.children}),l.return=i,l.sibling=null,e!==null&&(a=i.deletions,a===null?(i.deletions=[e],i.flags|=16):a.push(e)),i.child=l,i.memoizedState=null,l)}function Mi(e,i){return i=b3({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function b3(e,i){return e=s6(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Ei(e,i,l){return v2(i,e.child,null,l),e=Mi(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function fn(e,i,l){e.lanes|=i;var t=e.alternate;t!==null&&(t.lanes|=i),V4(e.return,i,l)}function Ti(e,i,l,t,c){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:t,tail:l,tailMode:c}:(r.isBackwards=i,r.rendering=null,r.renderingStartTime=0,r.last=t,r.tail=l,r.tailMode=c)}function un(e,i,l){var t=i.pendingProps,c=t.revealOrder,r=t.tail;if(G0(e,i,t.children,l),t=L0.current,(t&2)!==0)t=t&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fn(e,l,i);else if(e.tag===19)fn(e,l,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break e;for(;e.sibling===null;){if(e.return===null||e.return===i)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}t&=1}switch(B(L0,t),c){case"forwards":for(l=i.child,c=null;l!==null;)e=l.alternate,e!==null&&k3(e)===null&&(c=l),l=l.sibling;l=c,l===null?(c=i.child,i.child=null):(c=l.sibling,l.sibling=null),Ti(i,!1,c,l,r);break;case"backwards":for(l=null,c=i.child,i.child=null;c!==null;){if(e=c.alternate,e!==null&&k3(e)===null){i.child=c;break}e=c.sibling,c.sibling=l,l=c,c=e}Ti(i,!0,l,null,r);break;case"together":Ti(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function X6(e,i,l){if(e!==null&&(i.dependencies=e.dependencies),u1|=i.lanes,(l&i.childLanes)===0)if(e!==null){if(I2(e,i,l,!1),(l&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(s(153));if(i.child!==null){for(e=i.child,l=U6(e,e.pendingProps),i.child=l,l.return=i;e.sibling!==null;)e=e.sibling,l=l.sibling=U6(e,e.pendingProps),l.return=i;l.sibling=null}return i.child}function Ai(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&c3(e)))}function Kc(e,i,l){switch(i.tag){case 3:M0(i,i.stateNode.containerInfo),i1(i,U0,e.memoizedState.cache),F2();break;case 27:case 5:c4(i);break;case 4:M0(i,i.stateNode.containerInfo);break;case 10:i1(i,i.type,i.memoizedProps.value);break;case 13:var t=i.memoizedState;if(t!==null)return t.dehydrated!==null?(r1(i),i.flags|=128,null):(l&i.child.childLanes)!==0?sn(e,i,l):(r1(i),e=X6(e,i,l),e!==null?e.sibling:null);r1(i);break;case 19:var c=(e.flags&128)!==0;if(t=(l&i.childLanes)!==0,t||(I2(e,i,l,!1),t=(l&i.childLanes)!==0),c){if(t)return un(e,i,l);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),B(L0,L0.current),t)break;return null;case 22:case 23:return i.lanes=0,cn(e,i,l);case 24:i1(i,U0,e.memoizedState.cache)}return X6(e,i,l)}function on(e,i,l){if(e!==null)if(e.memoizedProps!==i.pendingProps)B0=!0;else{if(!Ai(e,l)&&(i.flags&128)===0)return B0=!1,Kc(e,i,l);B0=(e.flags&131072)!==0}else B0=!1,g0&&(i.flags&1048576)!==0&&Yl(i,t3,i.index);switch(i.lanes=0,i.tag){case 16:e:{e=i.pendingProps;var t=i.elementType,c=t._init;if(t=c(t._payload),i.type=t,typeof t=="function")H4(t)?(e=Y1(t,e),i.tag=1,i=yn(null,i,t,e,l)):(i.tag=0,i=_i(null,i,t,e,l));else{if(t!=null){if(c=t.$$typeof,c===r0){i.tag=11,i=ln(null,i,t,e,l);break e}else if(c===o0){i.tag=14,i=nn(null,i,t,e,l);break e}}throw i=M1(t)||t,Error(s(306,i,""))}}return i;case 0:return _i(e,i,i.type,i.pendingProps,l);case 1:return t=i.type,c=Y1(t,i.pendingProps),yn(e,i,t,c,l);case 3:e:{if(M0(i,i.stateNode.containerInfo),e===null)throw Error(s(387));t=i.pendingProps;var r=i.memoizedState;c=r.element,P4(e,i),ce(i,t,null,l);var a=i.memoizedState;if(t=a.cache,i1(i,U0,t),t!==r.cache&&Q4(i,[U0],l,!0),te(),t=a.element,r.isDehydrated)if(r={element:t,isDehydrated:!1,cache:a.cache},i.updateQueue.baseState=r,i.memoizedState=r,i.flags&256){i=an(e,i,t,l);break e}else if(t!==c){c=p6(Error(s(424)),i),W2(c),i=an(e,i,t,l);break e}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(A0=E6(e.firstChild),P0=i,g0=!0,N1=null,A6=!0,l=X5(i,null,t,l),i.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(F2(),t===c){i=X6(e,i,l);break e}G0(e,i,t,l)}i=i.child}return i;case 26:return S3(e,i),e===null?(l=mt(i.type,null,i.pendingProps,null))?i.memoizedState=l:g0||(l=i.type,e=i.pendingProps,t=H3(n0.current).createElement(l),t[F0]=i,t[e6]=e,Z0(t,l,e),H0(t),i.stateNode=t):i.memoizedState=mt(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return c4(i),e===null&&g0&&(t=i.stateNode=ht(i.type,i.pendingProps,n0.current),P0=i,A6=!0,c=A0,g1(i.type)?(s8=c,A0=E6(t.firstChild)):A0=c),G0(e,i,i.pendingProps.children,l),S3(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&g0&&((c=t=A0)&&(t=$r(t,i.type,i.pendingProps,A6),t!==null?(i.stateNode=t,P0=i,A0=E6(t.firstChild),A6=!1,c=!0):c=!1),c||U1(i)),c4(i),c=i.type,r=i.pendingProps,a=e!==null?e.memoizedProps:null,t=r.children,r8(c,r)?t=null:a!==null&&r8(c,a)&&(i.flags|=32),i.memoizedState!==null&&(c=ci(e,i,Bc,null,null,l),Me._currentValue=c),S3(e,i),G0(e,i,t,l),i.child;case 6:return e===null&&g0&&((e=l=A0)&&(l=_r(l,i.pendingProps,A6),l!==null?(i.stateNode=l,P0=i,A0=null,e=!0):e=!1),e||U1(i)),null;case 13:return sn(e,i,l);case 4:return M0(i,i.stateNode.containerInfo),t=i.pendingProps,e===null?i.child=v2(i,null,t,l):G0(e,i,t,l),i.child;case 11:return ln(e,i,i.type,i.pendingProps,l);case 7:return G0(e,i,i.pendingProps,l),i.child;case 8:return G0(e,i,i.pendingProps.children,l),i.child;case 12:return G0(e,i,i.pendingProps.children,l),i.child;case 10:return t=i.pendingProps,i1(i,i.type,t.value),G0(e,i,t.children,l),i.child;case 9:return c=i.type._context,t=i.pendingProps.children,H1(i),c=W0(c),t=t(c),i.flags|=1,G0(e,i,t,l),i.child;case 14:return nn(e,i,i.type,i.pendingProps,l);case 15:return tn(e,i,i.type,i.pendingProps,l);case 19:return un(e,i,l);case 31:return t=i.pendingProps,l=i.mode,t={mode:t.mode,children:t.children},e===null?(l=b3(t,l),l.ref=i.ref,i.child=l,l.return=i,i=l):(l=U6(e.child,t),l.ref=i.ref,i.child=l,l.return=i,i=l),i;case 22:return cn(e,i,l);case 24:return H1(i),t=W0(U0),e===null?(c=F4(),c===null&&(c=S0,r=K4(),c.pooledCache=r,r.refCount++,r!==null&&(c.pooledCacheLanes|=l),c=r),i.memoizedState={parent:t,cache:c},I4(i),i1(i,U0,c)):((e.lanes&l)!==0&&(P4(e,i),ce(i,null,null,l),te()),c=e.memoizedState,r=i.memoizedState,c.parent!==t?(c={parent:t,cache:t},i.memoizedState=c,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=c),i1(i,U0,t)):(t=r.cache,i1(i,U0,t),t!==c.cache&&Q4(i,[U0],l,!0))),G0(e,i,i.pendingProps.children,l),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function Z6(e){e.flags|=4}function hn(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!$t(i)){if(i=_6.current,i!==null&&((f0&4194048)===f0?O6!==null:(f0&62914560)!==f0&&(f0&536870912)===0||i!==O6))throw le=W4,Fl;e.flags|=8192}}function j3(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Z8():536870912,e.lanes|=i,S2|=i)}function ue(e,i){if(!g0)switch(e.tailMode){case"hidden":i=e.tail;for(var l=null;i!==null;)i.alternate!==null&&(l=i),i=i.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var t=null;l!==null;)l.alternate!==null&&(t=l),l=l.sibling;t===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:t.sibling=null}}function T0(e){var i=e.alternate!==null&&e.alternate.child===e.child,l=0,t=0;if(i)for(var c=e.child;c!==null;)l|=c.lanes|c.childLanes,t|=c.subtreeFlags&65011712,t|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)l|=c.lanes|c.childLanes,t|=c.subtreeFlags,t|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=t,e.childLanes=l,i}function Jc(e,i,l){var t=i.pendingProps;switch(G4(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return T0(i),null;case 1:return T0(i),null;case 3:return l=i.stateNode,t=null,e!==null&&(t=e.memoizedState.cache),i.memoizedState.cache!==t&&(i.flags|=2048),q6(U0),W6(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(J2(i)?Z6(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Zl())),T0(i),null;case 26:return l=i.memoizedState,e===null?(Z6(i),l!==null?(T0(i),hn(i,l)):(T0(i),i.flags&=-16777217)):l?l!==e.memoizedState?(Z6(i),T0(i),hn(i,l)):(T0(i),i.flags&=-16777217):(e.memoizedProps!==t&&Z6(i),T0(i),i.flags&=-16777217),null;case 27:Ue(i),l=n0.current;var c=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==t&&Z6(i);else{if(!t){if(i.stateNode===null)throw Error(s(166));return T0(i),null}e=W.current,J2(i)?Gl(i):(e=ht(c,t,l),i.stateNode=e,Z6(i))}return T0(i),null;case 5:if(Ue(i),l=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==t&&Z6(i);else{if(!t){if(i.stateNode===null)throw Error(s(166));return T0(i),null}if(e=W.current,J2(i))Gl(i);else{switch(c=H3(n0.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof t.is=="string"?c.createElement("select",{is:t.is}):c.createElement("select"),t.multiple?e.multiple=!0:t.size&&(e.size=t.size);break;default:e=typeof t.is=="string"?c.createElement(l,{is:t.is}):c.createElement(l)}}e[F0]=i,e[e6]=t;e:for(c=i.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===i)break e;for(;c.sibling===null;){if(c.return===null||c.return===i)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}i.stateNode=e;e:switch(Z0(e,l,t),l){case"button":case"input":case"select":case"textarea":e=!!t.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Z6(i)}}return T0(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==t&&Z6(i);else{if(typeof t!="string"&&i.stateNode===null)throw Error(s(166));if(e=n0.current,J2(i)){if(e=i.stateNode,l=i.memoizedProps,t=null,c=P0,c!==null)switch(c.tag){case 27:case 5:t=c.memoizedProps}e[F0]=i,e=!!(e.nodeValue===l||t!==null&&t.suppressHydrationWarning===!0||xt(e.nodeValue,l)),e||U1(i)}else e=H3(e).createTextNode(t),e[F0]=i,i.stateNode=e}return T0(i),null;case 13:if(t=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=J2(i),t!==null&&t.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=i.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[F0]=i}else F2(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;T0(i),c=!1}else c=Zl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return i.flags&256?(G6(i),i):(G6(i),null)}if(G6(i),(i.flags&128)!==0)return i.lanes=l,i;if(l=t!==null,e=e!==null&&e.memoizedState!==null,l){t=i.child,c=null,t.alternate!==null&&t.alternate.memoizedState!==null&&t.alternate.memoizedState.cachePool!==null&&(c=t.alternate.memoizedState.cachePool.pool);var r=null;t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==c&&(t.flags|=2048)}return l!==e&&l&&(i.child.flags|=8192),j3(i,i.updateQueue),T0(i),null;case 4:return W6(),e===null&&i8(i.stateNode.containerInfo),T0(i),null;case 10:return q6(i.type),T0(i),null;case 19:if(G(L0),c=i.memoizedState,c===null)return T0(i),null;if(t=(i.flags&128)!==0,r=c.rendering,r===null)if(t)ue(c,!1);else{if(O0!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(r=k3(e),r!==null){for(i.flags|=128,ue(c,!1),e=r.updateQueue,i.updateQueue=e,j3(i,e),i.subtreeFlags=0,e=l,l=i.child;l!==null;)ql(l,e),l=l.sibling;return B(L0,L0.current&1|2),i.child}e=e.sibling}c.tail!==null&&T6()>T3&&(i.flags|=128,t=!0,ue(c,!1),i.lanes=4194304)}else{if(!t)if(e=k3(r),e!==null){if(i.flags|=128,t=!0,e=e.updateQueue,i.updateQueue=e,j3(i,e),ue(c,!0),c.tail===null&&c.tailMode==="hidden"&&!r.alternate&&!g0)return T0(i),null}else 2*T6()-c.renderingStartTime>T3&&l!==536870912&&(i.flags|=128,t=!0,ue(c,!1),i.lanes=4194304);c.isBackwards?(r.sibling=i.child,i.child=r):(e=c.last,e!==null?e.sibling=r:i.child=r,c.last=r)}return c.tail!==null?(i=c.tail,c.rendering=i,c.tail=i.sibling,c.renderingStartTime=T6(),i.sibling=null,e=L0.current,B(L0,t?e&1|2:e&1),i):(T0(i),null);case 22:case 23:return G6(i),ni(),t=i.memoizedState!==null,e!==null?e.memoizedState!==null!==t&&(i.flags|=8192):t&&(i.flags|=8192),t?(l&536870912)!==0&&(i.flags&128)===0&&(T0(i),i.subtreeFlags&6&&(i.flags|=8192)):T0(i),l=i.updateQueue,l!==null&&j3(i,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==l&&(i.flags|=2048),e!==null&&G(B1),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),q6(U0),T0(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function Fc(e,i){switch(G4(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return q6(U0),W6(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return Ue(i),null;case 13:if(G6(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(s(340));F2()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return G(L0),null;case 4:return W6(),null;case 10:return q6(i.type),null;case 22:case 23:return G6(i),ni(),e!==null&&G(B1),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return q6(U0),null;case 25:return null;default:return null}}function dn(e,i){switch(G4(i),i.tag){case 3:q6(U0),W6();break;case 26:case 27:case 5:Ue(i);break;case 4:W6();break;case 13:G6(i);break;case 19:G(L0);break;case 10:q6(i.type);break;case 22:case 23:G6(i),ni(),e!==null&&G(B1);break;case 24:q6(U0)}}function oe(e,i){try{var l=i.updateQueue,t=l!==null?l.lastEffect:null;if(t!==null){var c=t.next;l=c;do{if((l.tag&e)===e){t=void 0;var r=l.create,a=l.inst;t=r(),a.destroy=t}l=l.next}while(l!==c)}}catch(u){_0(i,i.return,u)}}function y1(e,i,l){try{var t=i.updateQueue,c=t!==null?t.lastEffect:null;if(c!==null){var r=c.next;t=r;do{if((t.tag&e)===e){var a=t.inst,u=a.destroy;if(u!==void 0){a.destroy=void 0,c=i;var h=l,$=u;try{$()}catch(A){_0(c,h,A)}}}t=t.next}while(t!==r)}}catch(A){_0(i,i.return,A)}}function gn(e){var i=e.updateQueue;if(i!==null){var l=e.stateNode;try{l5(i,l)}catch(t){_0(e,e.return,t)}}}function mn(e,i,l){l.props=Y1(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(t){_0(e,i,t)}}function he(e,i){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var t=e.stateNode;break;case 30:t=e.stateNode;break;default:t=e.stateNode}typeof l=="function"?e.refCleanup=l(t):l.current=t}}catch(c){_0(e,i,c)}}function C6(e,i){var l=e.ref,t=e.refCleanup;if(l!==null)if(typeof t=="function")try{t()}catch(c){_0(e,i,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(c){_0(e,i,c)}else l.current=null}function wn(e){var i=e.type,l=e.memoizedProps,t=e.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break e;case"img":l.src?t.src=l.src:l.srcSet&&(t.srcset=l.srcSet)}}catch(c){_0(e,e.return,c)}}function Oi(e,i,l){try{var t=e.stateNode;mr(t,e.type,l,i),t[e6]=i}catch(c){_0(e,e.return,c)}}function pn(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&g1(e.type)||e.tag===4}function Ci(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||pn(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&g1(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ri(e,i,l){var t=e.tag;if(t===5||t===6)e=e.stateNode,i?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,i):(i=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,i.appendChild(e),l=l._reactRootContainer,l!=null||i.onclick!==null||(i.onclick=L3));else if(t!==4&&(t===27&&g1(e.type)&&(l=e.stateNode,i=null),e=e.child,e!==null))for(Ri(e,i,l),e=e.sibling;e!==null;)Ri(e,i,l),e=e.sibling}function M3(e,i,l){var t=e.tag;if(t===5||t===6)e=e.stateNode,i?l.insertBefore(e,i):l.appendChild(e);else if(t!==4&&(t===27&&g1(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(M3(e,i,l),e=e.sibling;e!==null;)M3(e,i,l),e=e.sibling}function vn(e){var i=e.stateNode,l=e.memoizedProps;try{for(var t=e.type,c=i.attributes;c.length;)i.removeAttributeNode(c[0]);Z0(i,t,l),i[F0]=e,i[e6]=l}catch(r){_0(e,e.return,r)}}var V6=!1,R0=!1,zi=!1,kn=typeof WeakSet=="function"?WeakSet:Set,q0=null;function Wc(e,i){if(e=e.containerInfo,t8=Z3,e=Ol(e),C4(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var t=l.getSelection&&l.getSelection();if(t&&t.rangeCount!==0){l=t.anchorNode;var c=t.anchorOffset,r=t.focusNode;t=t.focusOffset;try{l.nodeType,r.nodeType}catch{l=null;break e}var a=0,u=-1,h=-1,$=0,A=0,D=e,b=null;i:for(;;){for(var j;D!==l||c!==0&&D.nodeType!==3||(u=a+c),D!==r||t!==0&&D.nodeType!==3||(h=a+t),D.nodeType===3&&(a+=D.nodeValue.length),(j=D.firstChild)!==null;)b=D,D=j;for(;;){if(D===e)break i;if(b===l&&++$===c&&(u=a),b===r&&++A===t&&(h=a),(j=D.nextSibling)!==null)break;D=b,b=D.parentNode}D=j}l=u===-1||h===-1?null:{start:u,end:h}}else l=null}l=l||{start:0,end:0}}else l=null;for(c8={focusedElem:e,selectionRange:l},Z3=!1,q0=i;q0!==null;)if(i=q0,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,q0=e;else for(;q0!==null;){switch(i=q0,r=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,l=i,c=r.memoizedProps,r=r.memoizedState,t=l.stateNode;try{var i0=Y1(l.type,c,l.elementType===l.type);e=t.getSnapshotBeforeUpdate(i0,r),t.__reactInternalSnapshotBeforeUpdate=e}catch(I){_0(l,l.return,I)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,l=e.nodeType,l===9)y8(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":y8(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=i.sibling,e!==null){e.return=i.return,q0=e;break}q0=i.return}}function $n(e,i,l){var t=l.flags;switch(l.tag){case 0:case 11:case 15:a1(e,l),t&4&&oe(5,l);break;case 1:if(a1(e,l),t&4)if(e=l.stateNode,i===null)try{e.componentDidMount()}catch(a){_0(l,l.return,a)}else{var c=Y1(l.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(c,i,e.__reactInternalSnapshotBeforeUpdate)}catch(a){_0(l,l.return,a)}}t&64&&gn(l),t&512&&he(l,l.return);break;case 3:if(a1(e,l),t&64&&(e=l.updateQueue,e!==null)){if(i=null,l.child!==null)switch(l.child.tag){case 27:case 5:i=l.child.stateNode;break;case 1:i=l.child.stateNode}try{l5(e,i)}catch(a){_0(l,l.return,a)}}break;case 27:i===null&&t&4&&vn(l);case 26:case 5:a1(e,l),i===null&&t&4&&wn(l),t&512&&he(l,l.return);break;case 12:a1(e,l);break;case 13:a1(e,l),t&4&&bn(e,l),t&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=rr.bind(null,l),Sr(e,l))));break;case 22:if(t=l.memoizedState!==null||V6,!t){i=i!==null&&i.memoizedState!==null||R0,c=V6;var r=R0;V6=t,(R0=i)&&!r?s1(e,l,(l.subtreeFlags&8772)!==0):a1(e,l),V6=c,R0=r}break;case 30:break;default:a1(e,l)}}function _n(e){var i=e.alternate;i!==null&&(e.alternate=null,_n(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&o4(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var E0=null,n6=!1;function Q6(e,i,l){for(l=l.child;l!==null;)Sn(e,i,l),l=l.sibling}function Sn(e,i,l){if(x6&&typeof x6.onCommitFiberUnmount=="function")try{x6.onCommitFiberUnmount(D2,l)}catch{}switch(l.tag){case 26:R0||C6(l,i),Q6(e,i,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:R0||C6(l,i);var t=E0,c=n6;g1(l.type)&&(E0=l.stateNode,n6=!1),Q6(e,i,l),_e(l.stateNode),E0=t,n6=c;break;case 5:R0||C6(l,i);case 6:if(t=E0,c=n6,E0=null,Q6(e,i,l),E0=t,n6=c,E0!==null)if(n6)try{(E0.nodeType===9?E0.body:E0.nodeName==="HTML"?E0.ownerDocument.body:E0).removeChild(l.stateNode)}catch(r){_0(l,i,r)}else try{E0.removeChild(l.stateNode)}catch(r){_0(l,i,r)}break;case 18:E0!==null&&(n6?(e=E0,ut(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),Oe(e)):ut(E0,l.stateNode));break;case 4:t=E0,c=n6,E0=l.stateNode.containerInfo,n6=!0,Q6(e,i,l),E0=t,n6=c;break;case 0:case 11:case 14:case 15:R0||y1(2,l,i),R0||y1(4,l,i),Q6(e,i,l);break;case 1:R0||(C6(l,i),t=l.stateNode,typeof t.componentWillUnmount=="function"&&mn(l,i,t)),Q6(e,i,l);break;case 21:Q6(e,i,l);break;case 22:R0=(t=R0)||l.memoizedState!==null,Q6(e,i,l),R0=t;break;default:Q6(e,i,l)}}function bn(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Oe(e)}catch(l){_0(i,i.return,l)}}function Ic(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new kn),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new kn),i;default:throw Error(s(435,e.tag))}}function Di(e,i){var l=Ic(e);i.forEach(function(t){var c=xr.bind(null,e,t);l.has(t)||(l.add(t),t.then(c,c))})}function f6(e,i){var l=i.deletions;if(l!==null)for(var t=0;t<l.length;t++){var c=l[t],r=e,a=i,u=a;e:for(;u!==null;){switch(u.tag){case 27:if(g1(u.type)){E0=u.stateNode,n6=!1;break e}break;case 5:E0=u.stateNode,n6=!1;break e;case 3:case 4:E0=u.stateNode.containerInfo,n6=!0;break e}u=u.return}if(E0===null)throw Error(s(160));Sn(r,a,c),E0=null,n6=!1,r=c.alternate,r!==null&&(r.return=null),c.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)jn(i,e),i=i.sibling}var M6=null;function jn(e,i){var l=e.alternate,t=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:f6(i,e),u6(e),t&4&&(y1(3,e,e.return),oe(3,e),y1(5,e,e.return));break;case 1:f6(i,e),u6(e),t&512&&(R0||l===null||C6(l,l.return)),t&64&&V6&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?t:l.concat(t))));break;case 26:var c=M6;if(f6(i,e),u6(e),t&512&&(R0||l===null||C6(l,l.return)),t&4){var r=l!==null?l.memoizedState:null;if(t=e.memoizedState,l===null)if(t===null)if(e.stateNode===null){e:{t=e.type,l=e.memoizedProps,c=c.ownerDocument||c;i:switch(t){case"title":r=c.getElementsByTagName("title")[0],(!r||r[L2]||r[F0]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=c.createElement(t),c.head.insertBefore(r,c.querySelector("head > title"))),Z0(r,t,l),r[F0]=e,H0(r),t=r;break e;case"link":var a=vt("link","href",c).get(t+(l.href||""));if(a){for(var u=0;u<a.length;u++)if(r=a[u],r.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&r.getAttribute("rel")===(l.rel==null?null:l.rel)&&r.getAttribute("title")===(l.title==null?null:l.title)&&r.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){a.splice(u,1);break i}}r=c.createElement(t),Z0(r,t,l),c.head.appendChild(r);break;case"meta":if(a=vt("meta","content",c).get(t+(l.content||""))){for(u=0;u<a.length;u++)if(r=a[u],r.getAttribute("content")===(l.content==null?null:""+l.content)&&r.getAttribute("name")===(l.name==null?null:l.name)&&r.getAttribute("property")===(l.property==null?null:l.property)&&r.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&r.getAttribute("charset")===(l.charSet==null?null:l.charSet)){a.splice(u,1);break i}}r=c.createElement(t),Z0(r,t,l),c.head.appendChild(r);break;default:throw Error(s(468,t))}r[F0]=e,H0(r),t=r}e.stateNode=t}else kt(c,e.type,e.stateNode);else e.stateNode=pt(c,t,e.memoizedProps);else r!==t?(r===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):r.count--,t===null?kt(c,e.type,e.stateNode):pt(c,t,e.memoizedProps)):t===null&&e.stateNode!==null&&Oi(e,e.memoizedProps,l.memoizedProps)}break;case 27:f6(i,e),u6(e),t&512&&(R0||l===null||C6(l,l.return)),l!==null&&t&4&&Oi(e,e.memoizedProps,l.memoizedProps);break;case 5:if(f6(i,e),u6(e),t&512&&(R0||l===null||C6(l,l.return)),e.flags&32){c=e.stateNode;try{l2(c,"")}catch(j){_0(e,e.return,j)}}t&4&&e.stateNode!=null&&(c=e.memoizedProps,Oi(e,c,l!==null?l.memoizedProps:c)),t&1024&&(zi=!0);break;case 6:if(f6(i,e),u6(e),t&4){if(e.stateNode===null)throw Error(s(162));t=e.memoizedProps,l=e.stateNode;try{l.nodeValue=t}catch(j){_0(e,e.return,j)}}break;case 3:if(Y3=null,c=M6,M6=B3(i.containerInfo),f6(i,e),M6=c,u6(e),t&4&&l!==null&&l.memoizedState.isDehydrated)try{Oe(i.containerInfo)}catch(j){_0(e,e.return,j)}zi&&(zi=!1,Mn(e));break;case 4:t=M6,M6=B3(e.stateNode.containerInfo),f6(i,e),u6(e),M6=t;break;case 12:f6(i,e),u6(e);break;case 13:f6(i,e),u6(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(qi=T6()),t&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Di(e,t)));break;case 22:c=e.memoizedState!==null;var h=l!==null&&l.memoizedState!==null,$=V6,A=R0;if(V6=$||c,R0=A||h,f6(i,e),R0=A,V6=$,u6(e),t&8192)e:for(i=e.stateNode,i._visibility=c?i._visibility&-2:i._visibility|1,c&&(l===null||h||V6||R0||G1(e)),l=null,i=e;;){if(i.tag===5||i.tag===26){if(l===null){h=l=i;try{if(r=h.stateNode,c)a=r.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none";else{u=h.stateNode;var D=h.memoizedProps.style,b=D!=null&&D.hasOwnProperty("display")?D.display:null;u.style.display=b==null||typeof b=="boolean"?"":(""+b).trim()}}catch(j){_0(h,h.return,j)}}}else if(i.tag===6){if(l===null){h=i;try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(j){_0(h,h.return,j)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break e;for(;i.sibling===null;){if(i.return===null||i.return===e)break e;l===i&&(l=null),i=i.return}l===i&&(l=null),i.sibling.return=i.return,i=i.sibling}t&4&&(t=e.updateQueue,t!==null&&(l=t.retryQueue,l!==null&&(t.retryQueue=null,Di(e,l))));break;case 19:f6(i,e),u6(e),t&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Di(e,t)));break;case 30:break;case 21:break;default:f6(i,e),u6(e)}}function u6(e){var i=e.flags;if(i&2){try{for(var l,t=e.return;t!==null;){if(pn(t)){l=t;break}t=t.return}if(l==null)throw Error(s(160));switch(l.tag){case 27:var c=l.stateNode,r=Ci(e);M3(e,r,c);break;case 5:var a=l.stateNode;l.flags&32&&(l2(a,""),l.flags&=-33);var u=Ci(e);M3(e,u,a);break;case 3:case 4:var h=l.stateNode.containerInfo,$=Ci(e);Ri(e,$,h);break;default:throw Error(s(161))}}catch(A){_0(e,e.return,A)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Mn(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Mn(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function a1(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)$n(e,i.alternate,i),i=i.sibling}function G1(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:y1(4,i,i.return),G1(i);break;case 1:C6(i,i.return);var l=i.stateNode;typeof l.componentWillUnmount=="function"&&mn(i,i.return,l),G1(i);break;case 27:_e(i.stateNode);case 26:case 5:C6(i,i.return),G1(i);break;case 22:i.memoizedState===null&&G1(i);break;case 30:G1(i);break;default:G1(i)}e=e.sibling}}function s1(e,i,l){for(l=l&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var t=i.alternate,c=e,r=i,a=r.flags;switch(r.tag){case 0:case 11:case 15:s1(c,r,l),oe(4,r);break;case 1:if(s1(c,r,l),t=r,c=t.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){_0(t,t.return,$)}if(t=r,c=t.updateQueue,c!==null){var u=t.stateNode;try{var h=c.shared.hiddenCallbacks;if(h!==null)for(c.shared.hiddenCallbacks=null,c=0;c<h.length;c++)i5(h[c],u)}catch($){_0(t,t.return,$)}}l&&a&64&&gn(r),he(r,r.return);break;case 27:vn(r);case 26:case 5:s1(c,r,l),l&&t===null&&a&4&&wn(r),he(r,r.return);break;case 12:s1(c,r,l);break;case 13:s1(c,r,l),l&&a&4&&bn(c,r);break;case 22:r.memoizedState===null&&s1(c,r,l),he(r,r.return);break;case 30:break;default:s1(c,r,l)}i=i.sibling}}function Ni(e,i){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&P2(l))}function Ui(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&P2(e))}function R6(e,i,l,t){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)En(e,i,l,t),i=i.sibling}function En(e,i,l,t){var c=i.flags;switch(i.tag){case 0:case 11:case 15:R6(e,i,l,t),c&2048&&oe(9,i);break;case 1:R6(e,i,l,t);break;case 3:R6(e,i,l,t),c&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&P2(e)));break;case 12:if(c&2048){R6(e,i,l,t),e=i.stateNode;try{var r=i.memoizedProps,a=r.id,u=r.onPostCommit;typeof u=="function"&&u(a,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(h){_0(i,i.return,h)}}else R6(e,i,l,t);break;case 13:R6(e,i,l,t);break;case 23:break;case 22:r=i.stateNode,a=i.alternate,i.memoizedState!==null?r._visibility&2?R6(e,i,l,t):de(e,i):r._visibility&2?R6(e,i,l,t):(r._visibility|=2,k2(e,i,l,t,(i.subtreeFlags&10256)!==0)),c&2048&&Ni(a,i);break;case 24:R6(e,i,l,t),c&2048&&Ui(i.alternate,i);break;default:R6(e,i,l,t)}}function k2(e,i,l,t,c){for(c=c&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var r=e,a=i,u=l,h=t,$=a.flags;switch(a.tag){case 0:case 11:case 15:k2(r,a,u,h,c),oe(8,a);break;case 23:break;case 22:var A=a.stateNode;a.memoizedState!==null?A._visibility&2?k2(r,a,u,h,c):de(r,a):(A._visibility|=2,k2(r,a,u,h,c)),c&&$&2048&&Ni(a.alternate,a);break;case 24:k2(r,a,u,h,c),c&&$&2048&&Ui(a.alternate,a);break;default:k2(r,a,u,h,c)}i=i.sibling}}function de(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var l=e,t=i,c=t.flags;switch(t.tag){case 22:de(l,t),c&2048&&Ni(t.alternate,t);break;case 24:de(l,t),c&2048&&Ui(t.alternate,t);break;default:de(l,t)}i=i.sibling}}var ge=8192;function $2(e){if(e.subtreeFlags&ge)for(e=e.child;e!==null;)Tn(e),e=e.sibling}function Tn(e){switch(e.tag){case 26:$2(e),e.flags&ge&&e.memoizedState!==null&&Ur(M6,e.memoizedState,e.memoizedProps);break;case 5:$2(e);break;case 3:case 4:var i=M6;M6=B3(e.stateNode.containerInfo),$2(e),M6=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=ge,ge=16777216,$2(e),ge=i):$2(e));break;default:$2(e)}}function An(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function me(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var l=0;l<i.length;l++){var t=i[l];q0=t,Cn(t,e)}An(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)On(e),e=e.sibling}function On(e){switch(e.tag){case 0:case 11:case 15:me(e),e.flags&2048&&y1(9,e,e.return);break;case 3:me(e);break;case 12:me(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,E3(e)):me(e);break;default:me(e)}}function E3(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var l=0;l<i.length;l++){var t=i[l];q0=t,Cn(t,e)}An(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:y1(8,i,i.return),E3(i);break;case 22:l=i.stateNode,l._visibility&2&&(l._visibility&=-3,E3(i));break;default:E3(i)}e=e.sibling}}function Cn(e,i){for(;q0!==null;){var l=q0;switch(l.tag){case 0:case 11:case 15:y1(8,l,i);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var t=l.memoizedState.cachePool.pool;t!=null&&t.refCount++}break;case 24:P2(l.memoizedState.cache)}if(t=l.child,t!==null)t.return=l,q0=t;else e:for(l=e;q0!==null;){t=q0;var c=t.sibling,r=t.return;if(_n(t),t===l){q0=null;break e}if(c!==null){c.return=r,q0=c;break e}q0=r}}}var Pc={getCacheForType:function(e){var i=W0(U0),l=i.data.get(e);return l===void 0&&(l=e(),i.data.set(e,l)),l}},er=typeof WeakMap=="function"?WeakMap:Map,m0=0,S0=null,a0=null,f0=0,w0=0,o6=null,f1=!1,_2=!1,Li=!1,K6=0,O0=0,u1=0,X1=0,Hi=0,S6=0,S2=0,we=null,t6=null,Bi=!1,qi=0,T3=1/0,A3=null,o1=null,X0=0,h1=null,b2=null,j2=0,Yi=0,Gi=null,Rn=null,pe=0,Xi=null;function h6(){if((m0&2)!==0&&f0!==0)return f0&-f0;if(R.T!==null){var e=o2;return e!==0?e:Wi()}return K8()}function zn(){S6===0&&(S6=(f0&536870912)===0||g0?X8():536870912);var e=_6.current;return e!==null&&(e.flags|=32),S6}function d6(e,i,l){(e===S0&&(w0===2||w0===9)||e.cancelPendingCommit!==null)&&(M2(e,0),d1(e,f0,S6,!1)),U2(e,l),((m0&2)===0||e!==S0)&&(e===S0&&((m0&2)===0&&(X1|=l),O0===4&&d1(e,f0,S6,!1)),z6(e))}function Dn(e,i,l){if((m0&6)!==0)throw Error(s(327));var t=!l&&(i&124)===0&&(i&e.expiredLanes)===0||N2(e,i),c=t?nr(e,i):Qi(e,i,!0),r=t;do{if(c===0){_2&&!t&&d1(e,i,0,!1);break}else{if(l=e.current.alternate,r&&!ir(l)){c=Qi(e,i,!1),r=!1;continue}if(c===2){if(r=i,e.errorRecoveryDisabledLanes&r)var a=0;else a=e.pendingLanes&-536870913,a=a!==0?a:a&536870912?536870912:0;if(a!==0){i=a;e:{var u=e;c=we;var h=u.current.memoizedState.isDehydrated;if(h&&(M2(u,a).flags|=256),a=Qi(u,a,!1),a!==2){if(Li&&!h){u.errorRecoveryDisabledLanes|=r,X1|=r,c=4;break e}r=t6,t6=c,r!==null&&(t6===null?t6=r:t6.push.apply(t6,r))}c=a}if(r=!1,c!==2)continue}}if(c===1){M2(e,0),d1(e,i,0,!0);break}e:{switch(t=e,r=c,r){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:d1(t,i,S6,!f1);break e;case 2:t6=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(c=qi+300-T6(),10<c)){if(d1(t,i,S6,!f1),qe(t,0,!0)!==0)break e;t.timeoutHandle=st(Nn.bind(null,t,l,t6,A3,Bi,i,S6,X1,S2,f1,r,2,-0,0),c);break e}Nn(t,l,t6,A3,Bi,i,S6,X1,S2,f1,r,0,-0,0)}}break}while(!0);z6(e)}function Nn(e,i,l,t,c,r,a,u,h,$,A,D,b,j){if(e.timeoutHandle=-1,D=i.subtreeFlags,(D&8192||(D&16785408)===16785408)&&(je={stylesheets:null,count:0,unsuspend:Nr},Tn(i),D=Lr(),D!==null)){e.cancelPendingCommit=D(Gn.bind(null,e,i,r,l,t,c,a,u,h,A,1,b,j)),d1(e,r,a,!$);return}Gn(e,i,r,l,t,c,a,u,h)}function ir(e){for(var i=e;;){var l=i.tag;if((l===0||l===11||l===15)&&i.flags&16384&&(l=i.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var t=0;t<l.length;t++){var c=l[t],r=c.getSnapshot;c=c.value;try{if(!a6(r(),c))return!1}catch{return!1}}if(l=i.child,i.subtreeFlags&16384&&l!==null)l.return=i,i=l;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function d1(e,i,l,t){i&=~Hi,i&=~X1,e.suspendedLanes|=i,e.pingedLanes&=~i,t&&(e.warmLanes|=i),t=e.expirationTimes;for(var c=i;0<c;){var r=31-y6(c),a=1<<r;t[r]=-1,c&=~a}l!==0&&V8(e,l,i)}function O3(){return(m0&6)===0?(ve(0),!1):!0}function Zi(){if(a0!==null){if(w0===0)var e=a0.return;else e=a0,B6=L1=null,yi(e),p2=null,se=0,e=a0;for(;e!==null;)dn(e.alternate,e),e=e.return;a0=null}}function M2(e,i){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,pr(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),Zi(),S0=e,a0=l=U6(e.current,null),f0=i,w0=0,o6=null,f1=!1,_2=N2(e,i),Li=!1,S2=S6=Hi=X1=u1=O0=0,t6=we=null,Bi=!1,(i&8)!==0&&(i|=i&32);var t=e.entangledLanes;if(t!==0)for(e=e.entanglements,t&=i;0<t;){var c=31-y6(t),r=1<<c;i|=e[c],t&=~r}return K6=i,Pe(),l}function Un(e,i){x0=null,R.H=w3,i===ie||i===y3?(i=Pl(),w0=3):i===Fl?(i=Pl(),w0=4):w0=i===en?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,o6=i,a0===null&&(O0=1,_3(e,p6(i,e.current)))}function Ln(){var e=R.H;return R.H=w3,e===null?w3:e}function Hn(){var e=R.A;return R.A=Pc,e}function Vi(){O0=4,f1||(f0&4194048)!==f0&&_6.current!==null||(_2=!0),(u1&134217727)===0&&(X1&134217727)===0||S0===null||d1(S0,f0,S6,!1)}function Qi(e,i,l){var t=m0;m0|=2;var c=Ln(),r=Hn();(S0!==e||f0!==i)&&(A3=null,M2(e,i)),i=!1;var a=O0;e:do try{if(w0!==0&&a0!==null){var u=a0,h=o6;switch(w0){case 8:Zi(),a=6;break e;case 3:case 2:case 9:case 6:_6.current===null&&(i=!0);var $=w0;if(w0=0,o6=null,E2(e,u,h,$),l&&_2){a=0;break e}break;default:$=w0,w0=0,o6=null,E2(e,u,h,$)}}lr(),a=O0;break}catch(A){Un(e,A)}while(!0);return i&&e.shellSuspendCounter++,B6=L1=null,m0=t,R.H=c,R.A=r,a0===null&&(S0=null,f0=0,Pe()),a}function lr(){for(;a0!==null;)Bn(a0)}function nr(e,i){var l=m0;m0|=2;var t=Ln(),c=Hn();S0!==e||f0!==i?(A3=null,T3=T6()+500,M2(e,i)):_2=N2(e,i);e:do try{if(w0!==0&&a0!==null){i=a0;var r=o6;i:switch(w0){case 1:w0=0,o6=null,E2(e,i,r,1);break;case 2:case 9:if(Wl(r)){w0=0,o6=null,qn(i);break}i=function(){w0!==2&&w0!==9||S0!==e||(w0=7),z6(e)},r.then(i,i);break e;case 3:w0=7;break e;case 4:w0=5;break e;case 7:Wl(r)?(w0=0,o6=null,qn(i)):(w0=0,o6=null,E2(e,i,r,7));break;case 5:var a=null;switch(a0.tag){case 26:a=a0.memoizedState;case 5:case 27:var u=a0;if(!a||$t(a)){w0=0,o6=null;var h=u.sibling;if(h!==null)a0=h;else{var $=u.return;$!==null?(a0=$,C3($)):a0=null}break i}}w0=0,o6=null,E2(e,i,r,5);break;case 6:w0=0,o6=null,E2(e,i,r,6);break;case 8:Zi(),O0=6;break e;default:throw Error(s(462))}}tr();break}catch(A){Un(e,A)}while(!0);return B6=L1=null,R.H=t,R.A=c,m0=l,a0!==null?0:(S0=null,f0=0,Pe(),O0)}function tr(){for(;a0!==null&&!j7();)Bn(a0)}function Bn(e){var i=on(e.alternate,e,K6);e.memoizedProps=e.pendingProps,i===null?C3(e):a0=i}function qn(e){var i=e,l=i.alternate;switch(i.tag){case 15:case 0:i=xn(l,i,i.pendingProps,i.type,void 0,f0);break;case 11:i=xn(l,i,i.pendingProps,i.type.render,i.ref,f0);break;case 5:yi(i);default:dn(l,i),i=a0=ql(i,K6),i=on(l,i,K6)}e.memoizedProps=e.pendingProps,i===null?C3(e):a0=i}function E2(e,i,l,t){B6=L1=null,yi(i),p2=null,se=0;var c=i.return;try{if(Qc(e,c,i,l,f0)){O0=1,_3(e,p6(l,e.current)),a0=null;return}}catch(r){if(c!==null)throw a0=c,r;O0=1,_3(e,p6(l,e.current)),a0=null;return}i.flags&32768?(g0||t===1?e=!0:_2||(f0&536870912)!==0?e=!1:(f1=e=!0,(t===2||t===9||t===3||t===6)&&(t=_6.current,t!==null&&t.tag===13&&(t.flags|=16384))),Yn(i,e)):C3(i)}function C3(e){var i=e;do{if((i.flags&32768)!==0){Yn(i,f1);return}e=i.return;var l=Jc(i.alternate,i,K6);if(l!==null){a0=l;return}if(i=i.sibling,i!==null){a0=i;return}a0=i=e}while(i!==null);O0===0&&(O0=5)}function Yn(e,i){do{var l=Fc(e.alternate,e);if(l!==null){l.flags&=32767,a0=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!i&&(e=e.sibling,e!==null)){a0=e;return}a0=e=l}while(e!==null);O0=6,a0=null}function Gn(e,i,l,t,c,r,a,u,h){e.cancelPendingCommit=null;do R3();while(X0!==0);if((m0&6)!==0)throw Error(s(327));if(i!==null){if(i===e.current)throw Error(s(177));if(r=i.lanes|i.childLanes,r|=U4,N7(e,l,r,a,u,h),e===S0&&(a0=S0=null,f0=0),b2=i,h1=e,j2=l,Yi=r,Gi=c,Rn=t,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,yr(Le,function(){return Kn(),null})):(e.callbackNode=null,e.callbackPriority=0),t=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||t){t=R.T,R.T=null,c=q.p,q.p=2,a=m0,m0|=4;try{Wc(e,i,l)}finally{m0=a,q.p=c,R.T=t}}X0=1,Xn(),Zn(),Vn()}}function Xn(){if(X0===1){X0=0;var e=h1,i=b2,l=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||l){l=R.T,R.T=null;var t=q.p;q.p=2;var c=m0;m0|=4;try{jn(i,e);var r=c8,a=Ol(e.containerInfo),u=r.focusedElem,h=r.selectionRange;if(a!==u&&u&&u.ownerDocument&&Al(u.ownerDocument.documentElement,u)){if(h!==null&&C4(u)){var $=h.start,A=h.end;if(A===void 0&&(A=$),"selectionStart"in u)u.selectionStart=$,u.selectionEnd=Math.min(A,u.value.length);else{var D=u.ownerDocument||document,b=D&&D.defaultView||window;if(b.getSelection){var j=b.getSelection(),i0=u.textContent.length,I=Math.min(h.start,i0),k0=h.end===void 0?I:Math.min(h.end,i0);!j.extend&&I>k0&&(a=k0,k0=I,I=a);var p=Tl(u,I),w=Tl(u,k0);if(p&&w&&(j.rangeCount!==1||j.anchorNode!==p.node||j.anchorOffset!==p.offset||j.focusNode!==w.node||j.focusOffset!==w.offset)){var k=D.createRange();k.setStart(p.node,p.offset),j.removeAllRanges(),I>k0?(j.addRange(k),j.extend(w.node,w.offset)):(k.setEnd(w.node,w.offset),j.addRange(k))}}}}for(D=[],j=u;j=j.parentNode;)j.nodeType===1&&D.push({element:j,left:j.scrollLeft,top:j.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<D.length;u++){var z=D[u];z.element.scrollLeft=z.left,z.element.scrollTop=z.top}}Z3=!!t8,c8=t8=null}finally{m0=c,q.p=t,R.T=l}}e.current=i,X0=2}}function Zn(){if(X0===2){X0=0;var e=h1,i=b2,l=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||l){l=R.T,R.T=null;var t=q.p;q.p=2;var c=m0;m0|=4;try{$n(e,i.alternate,i)}finally{m0=c,q.p=t,R.T=l}}X0=3}}function Vn(){if(X0===4||X0===3){X0=0,M7();var e=h1,i=b2,l=j2,t=Rn;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?X0=5:(X0=0,b2=h1=null,Qn(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(o1=null),f4(l),i=i.stateNode,x6&&typeof x6.onCommitFiberRoot=="function")try{x6.onCommitFiberRoot(D2,i,void 0,(i.current.flags&128)===128)}catch{}if(t!==null){i=R.T,c=q.p,q.p=2,R.T=null;try{for(var r=e.onRecoverableError,a=0;a<t.length;a++){var u=t[a];r(u.value,{componentStack:u.stack})}}finally{R.T=i,q.p=c}}(j2&3)!==0&&R3(),z6(e),c=e.pendingLanes,(l&4194090)!==0&&(c&42)!==0?e===Xi?pe++:(pe=0,Xi=e):pe=0,ve(0)}}function Qn(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,P2(i)))}function R3(e){return Xn(),Zn(),Vn(),Kn()}function Kn(){if(X0!==5)return!1;var e=h1,i=Yi;Yi=0;var l=f4(j2),t=R.T,c=q.p;try{q.p=32>l?32:l,R.T=null,l=Gi,Gi=null;var r=h1,a=j2;if(X0=0,b2=h1=null,j2=0,(m0&6)!==0)throw Error(s(331));var u=m0;if(m0|=4,On(r.current),En(r,r.current,a,l),m0=u,ve(0,!1),x6&&typeof x6.onPostCommitFiberRoot=="function")try{x6.onPostCommitFiberRoot(D2,r)}catch{}return!0}finally{q.p=c,R.T=t,Qn(e,i)}}function Jn(e,i,l){i=p6(l,i),i=$i(e.stateNode,i,2),e=t1(e,i,2),e!==null&&(U2(e,2),z6(e))}function _0(e,i,l){if(e.tag===3)Jn(e,e,l);else for(;i!==null;){if(i.tag===3){Jn(i,e,l);break}else if(i.tag===1){var t=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(o1===null||!o1.has(t))){e=p6(l,e),l=I5(2),t=t1(i,l,2),t!==null&&(P5(l,t,i,e),U2(t,2),z6(t));break}}i=i.return}}function Ki(e,i,l){var t=e.pingCache;if(t===null){t=e.pingCache=new er;var c=new Set;t.set(i,c)}else c=t.get(i),c===void 0&&(c=new Set,t.set(i,c));c.has(l)||(Li=!0,c.add(l),e=cr.bind(null,e,i,l),i.then(e,e))}function cr(e,i,l){var t=e.pingCache;t!==null&&t.delete(i),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,S0===e&&(f0&l)===l&&(O0===4||O0===3&&(f0&62914560)===f0&&300>T6()-qi?(m0&2)===0&&M2(e,0):Hi|=l,S2===f0&&(S2=0)),z6(e)}function Fn(e,i){i===0&&(i=Z8()),e=a2(e,i),e!==null&&(U2(e,i),z6(e))}function rr(e){var i=e.memoizedState,l=0;i!==null&&(l=i.retryLane),Fn(e,l)}function xr(e,i){var l=0;switch(e.tag){case 13:var t=e.stateNode,c=e.memoizedState;c!==null&&(l=c.retryLane);break;case 19:t=e.stateNode;break;case 22:t=e.stateNode._retryCache;break;default:throw Error(s(314))}t!==null&&t.delete(i),Fn(e,l)}function yr(e,i){return x4(e,i)}var z3=null,T2=null,Ji=!1,D3=!1,Fi=!1,Z1=0;function z6(e){e!==T2&&e.next===null&&(T2===null?z3=T2=e:T2=T2.next=e),D3=!0,Ji||(Ji=!0,sr())}function ve(e,i){if(!Fi&&D3){Fi=!0;do for(var l=!1,t=z3;t!==null;){if(e!==0){var c=t.pendingLanes;if(c===0)var r=0;else{var a=t.suspendedLanes,u=t.pingedLanes;r=(1<<31-y6(42|e)+1)-1,r&=c&~(a&~u),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(l=!0,et(t,r))}else r=f0,r=qe(t,t===S0?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),(r&3)===0||N2(t,r)||(l=!0,et(t,r));t=t.next}while(l);Fi=!1}}function ar(){Wn()}function Wn(){D3=Ji=!1;var e=0;Z1!==0&&(wr()&&(e=Z1),Z1=0);for(var i=T6(),l=null,t=z3;t!==null;){var c=t.next,r=In(t,i);r===0?(t.next=null,l===null?z3=c:l.next=c,c===null&&(T2=l)):(l=t,(e!==0||(r&3)!==0)&&(D3=!0)),t=c}ve(e)}function In(e,i){for(var l=e.suspendedLanes,t=e.pingedLanes,c=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var a=31-y6(r),u=1<<a,h=c[a];h===-1?((u&l)===0||(u&t)!==0)&&(c[a]=D7(u,i)):h<=i&&(e.expiredLanes|=u),r&=~u}if(i=S0,l=f0,l=qe(e,e===i?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),t=e.callbackNode,l===0||e===i&&(w0===2||w0===9)||e.cancelPendingCommit!==null)return t!==null&&t!==null&&y4(t),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||N2(e,l)){if(i=l&-l,i===e.callbackPriority)return i;switch(t!==null&&y4(t),f4(l)){case 2:case 8:l=Y8;break;case 32:l=Le;break;case 268435456:l=G8;break;default:l=Le}return t=Pn.bind(null,e),l=x4(l,t),e.callbackPriority=i,e.callbackNode=l,i}return t!==null&&t!==null&&y4(t),e.callbackPriority=2,e.callbackNode=null,2}function Pn(e,i){if(X0!==0&&X0!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(R3()&&e.callbackNode!==l)return null;var t=f0;return t=qe(e,e===S0?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),t===0?null:(Dn(e,t,i),In(e,T6()),e.callbackNode!=null&&e.callbackNode===l?Pn.bind(null,e):null)}function et(e,i){if(R3())return null;Dn(e,i,!0)}function sr(){vr(function(){(m0&6)!==0?x4(q8,ar):Wn()})}function Wi(){return Z1===0&&(Z1=X8()),Z1}function it(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ve(""+e)}function lt(e,i){var l=i.ownerDocument.createElement("input");return l.name=i.name,l.value=i.value,e.id&&l.setAttribute("form",e.id),i.parentNode.insertBefore(l,i),e=new FormData(e),l.parentNode.removeChild(l),e}function fr(e,i,l,t,c){if(i==="submit"&&l&&l.stateNode===c){var r=it((c[e6]||null).action),a=t.submitter;a&&(i=(i=a[e6]||null)?it(i.formAction):a.getAttribute("formAction"),i!==null&&(r=i,a=null));var u=new Fe("action","action",null,t,c);e.push({event:u,listeners:[{instance:null,listener:function(){if(t.defaultPrevented){if(Z1!==0){var h=a?lt(c,a):new FormData(c);mi(l,{pending:!0,data:h,method:c.method,action:r},null,h)}}else typeof r=="function"&&(u.preventDefault(),h=a?lt(c,a):new FormData(c),mi(l,{pending:!0,data:h,method:c.method,action:r},r,h))},currentTarget:c}]})}}for(var Ii=0;Ii<N4.length;Ii++){var Pi=N4[Ii],ur=Pi.toLowerCase(),or=Pi[0].toUpperCase()+Pi.slice(1);j6(ur,"on"+or)}j6(zl,"onAnimationEnd"),j6(Dl,"onAnimationIteration"),j6(Nl,"onAnimationStart"),j6("dblclick","onDoubleClick"),j6("focusin","onFocus"),j6("focusout","onBlur"),j6(Ac,"onTransitionRun"),j6(Oc,"onTransitionStart"),j6(Cc,"onTransitionCancel"),j6(Ul,"onTransitionEnd"),P1("onMouseEnter",["mouseout","mouseover"]),P1("onMouseLeave",["mouseout","mouseover"]),P1("onPointerEnter",["pointerout","pointerover"]),P1("onPointerLeave",["pointerout","pointerover"]),T1("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),T1("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),T1("onBeforeInput",["compositionend","keypress","textInput","paste"]),T1("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),T1("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),T1("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ke="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hr=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ke));function nt(e,i){i=(i&4)!==0;for(var l=0;l<e.length;l++){var t=e[l],c=t.event;t=t.listeners;e:{var r=void 0;if(i)for(var a=t.length-1;0<=a;a--){var u=t[a],h=u.instance,$=u.currentTarget;if(u=u.listener,h!==r&&c.isPropagationStopped())break e;r=u,c.currentTarget=$;try{r(c)}catch(A){$3(A)}c.currentTarget=null,r=h}else for(a=0;a<t.length;a++){if(u=t[a],h=u.instance,$=u.currentTarget,u=u.listener,h!==r&&c.isPropagationStopped())break e;r=u,c.currentTarget=$;try{r(c)}catch(A){$3(A)}c.currentTarget=null,r=h}}}}function s0(e,i){var l=i[u4];l===void 0&&(l=i[u4]=new Set);var t=e+"__bubble";l.has(t)||(tt(i,e,2,!1),l.add(t))}function e8(e,i,l){var t=0;i&&(t|=4),tt(l,e,t,i)}var N3="_reactListening"+Math.random().toString(36).slice(2);function i8(e){if(!e[N3]){e[N3]=!0,F8.forEach(function(l){l!=="selectionchange"&&(hr.has(l)||e8(l,!1,e),e8(l,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[N3]||(i[N3]=!0,e8("selectionchange",!1,i))}}function tt(e,i,l,t){switch(Et(i)){case 2:var c=qr;break;case 8:c=Yr;break;default:c=d8}l=c.bind(null,i,l,e),c=void 0,!_4||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),t?c!==void 0?e.addEventListener(i,l,{capture:!0,passive:c}):e.addEventListener(i,l,!0):c!==void 0?e.addEventListener(i,l,{passive:c}):e.addEventListener(i,l,!1)}function l8(e,i,l,t,c){var r=t;if((i&1)===0&&(i&2)===0&&t!==null)e:for(;;){if(t===null)return;var a=t.tag;if(a===3||a===4){var u=t.stateNode.containerInfo;if(u===c)break;if(a===4)for(a=t.return;a!==null;){var h=a.tag;if((h===3||h===4)&&a.stateNode.containerInfo===c)return;a=a.return}for(;u!==null;){if(a=F1(u),a===null)return;if(h=a.tag,h===5||h===6||h===26||h===27){t=r=a;continue e}u=u.parentNode}}t=t.return}sl(function(){var $=r,A=k4(l),D=[];e:{var b=Ll.get(e);if(b!==void 0){var j=Fe,i0=e;switch(e){case"keypress":if(Ke(l)===0)break e;case"keydown":case"keyup":j=yc;break;case"focusin":i0="focus",j=M4;break;case"focusout":i0="blur",j=M4;break;case"beforeblur":case"afterblur":j=M4;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=ol;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=F7;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=fc;break;case zl:case Dl:case Nl:j=P7;break;case Ul:j=oc;break;case"scroll":case"scrollend":j=K7;break;case"wheel":j=dc;break;case"copy":case"cut":case"paste":j=ic;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=dl;break;case"toggle":case"beforetoggle":j=mc}var I=(i&4)!==0,k0=!I&&(e==="scroll"||e==="scrollend"),p=I?b!==null?b+"Capture":null:b;I=[];for(var w=$,k;w!==null;){var z=w;if(k=z.stateNode,z=z.tag,z!==5&&z!==26&&z!==27||k===null||p===null||(z=B2(w,p),z!=null&&I.push($e(w,z,k))),k0)break;w=w.return}0<I.length&&(b=new j(b,i0,null,l,A),D.push({event:b,listeners:I}))}}if((i&7)===0){e:{if(b=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",b&&l!==v4&&(i0=l.relatedTarget||l.fromElement)&&(F1(i0)||i0[J1]))break e;if((j||b)&&(b=A.window===A?A:(b=A.ownerDocument)?b.defaultView||b.parentWindow:window,j?(i0=l.relatedTarget||l.toElement,j=$,i0=i0?F1(i0):null,i0!==null&&(k0=d(i0),I=i0.tag,i0!==k0||I!==5&&I!==27&&I!==6)&&(i0=null)):(j=null,i0=$),j!==i0)){if(I=ol,z="onMouseLeave",p="onMouseEnter",w="mouse",(e==="pointerout"||e==="pointerover")&&(I=dl,z="onPointerLeave",p="onPointerEnter",w="pointer"),k0=j==null?b:H2(j),k=i0==null?b:H2(i0),b=new I(z,w+"leave",j,l,A),b.target=k0,b.relatedTarget=k,z=null,F1(A)===$&&(I=new I(p,w+"enter",i0,l,A),I.target=k,I.relatedTarget=k0,z=I),k0=z,j&&i0)i:{for(I=j,p=i0,w=0,k=I;k;k=A2(k))w++;for(k=0,z=p;z;z=A2(z))k++;for(;0<w-k;)I=A2(I),w--;for(;0<k-w;)p=A2(p),k--;for(;w--;){if(I===p||p!==null&&I===p.alternate)break i;I=A2(I),p=A2(p)}I=null}else I=null;j!==null&&ct(D,b,j,I,!1),i0!==null&&k0!==null&&ct(D,k0,i0,I,!0)}}e:{if(b=$?H2($):window,j=b.nodeName&&b.nodeName.toLowerCase(),j==="select"||j==="input"&&b.type==="file")var Z=_l;else if(kl(b))if(Sl)Z=Mc;else{Z=bc;var y0=Sc}else j=b.nodeName,!j||j.toLowerCase()!=="input"||b.type!=="checkbox"&&b.type!=="radio"?$&&p4($.elementType)&&(Z=_l):Z=jc;if(Z&&(Z=Z(e,$))){$l(D,Z,l,A);break e}y0&&y0(e,b,$),e==="focusout"&&$&&b.type==="number"&&$.memoizedProps.value!=null&&w4(b,"number",b.value)}switch(y0=$?H2($):window,e){case"focusin":(kl(y0)||y0.contentEditable==="true")&&(r2=y0,R4=$,K2=null);break;case"focusout":K2=R4=r2=null;break;case"mousedown":z4=!0;break;case"contextmenu":case"mouseup":case"dragend":z4=!1,Cl(D,l,A);break;case"selectionchange":if(Tc)break;case"keydown":case"keyup":Cl(D,l,A)}var K;if(T4)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else c2?pl(e,l)&&(P="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(P="onCompositionStart");P&&(gl&&l.locale!=="ko"&&(c2||P!=="onCompositionStart"?P==="onCompositionEnd"&&c2&&(K=fl()):(e1=A,S4="value"in e1?e1.value:e1.textContent,c2=!0)),y0=U3($,P),0<y0.length&&(P=new hl(P,e,null,l,A),D.push({event:P,listeners:y0}),K?P.data=K:(K=vl(l),K!==null&&(P.data=K)))),(K=pc?vc(e,l):kc(e,l))&&(P=U3($,"onBeforeInput"),0<P.length&&(y0=new hl("onBeforeInput","beforeinput",null,l,A),D.push({event:y0,listeners:P}),y0.data=K)),fr(D,e,$,l,A)}nt(D,i)})}function $e(e,i,l){return{instance:e,listener:i,currentTarget:l}}function U3(e,i){for(var l=i+"Capture",t=[];e!==null;){var c=e,r=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||r===null||(c=B2(e,l),c!=null&&t.unshift($e(e,c,r)),c=B2(e,i),c!=null&&t.push($e(e,c,r))),e.tag===3)return t;e=e.return}return[]}function A2(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ct(e,i,l,t,c){for(var r=i._reactName,a=[];l!==null&&l!==t;){var u=l,h=u.alternate,$=u.stateNode;if(u=u.tag,h!==null&&h===t)break;u!==5&&u!==26&&u!==27||$===null||(h=$,c?($=B2(l,r),$!=null&&a.unshift($e(l,$,h))):c||($=B2(l,r),$!=null&&a.push($e(l,$,h)))),l=l.return}a.length!==0&&e.push({event:i,listeners:a})}var dr=/\r\n?/g,gr=/\u0000|\uFFFD/g;function rt(e){return(typeof e=="string"?e:""+e).replace(dr,`
`).replace(gr,"")}function xt(e,i){return i=rt(i),rt(e)===i}function L3(){}function v0(e,i,l,t,c,r){switch(l){case"children":typeof t=="string"?i==="body"||i==="textarea"&&t===""||l2(e,t):(typeof t=="number"||typeof t=="bigint")&&i!=="body"&&l2(e,""+t);break;case"className":Ge(e,"class",t);break;case"tabIndex":Ge(e,"tabindex",t);break;case"dir":case"role":case"viewBox":case"width":case"height":Ge(e,l,t);break;case"style":yl(e,t,r);break;case"data":if(i!=="object"){Ge(e,"data",t);break}case"src":case"href":if(t===""&&(i!=="a"||l!=="href")){e.removeAttribute(l);break}if(t==null||typeof t=="function"||typeof t=="symbol"||typeof t=="boolean"){e.removeAttribute(l);break}t=Ve(""+t),e.setAttribute(l,t);break;case"action":case"formAction":if(typeof t=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(l==="formAction"?(i!=="input"&&v0(e,i,"name",c.name,c,null),v0(e,i,"formEncType",c.formEncType,c,null),v0(e,i,"formMethod",c.formMethod,c,null),v0(e,i,"formTarget",c.formTarget,c,null)):(v0(e,i,"encType",c.encType,c,null),v0(e,i,"method",c.method,c,null),v0(e,i,"target",c.target,c,null)));if(t==null||typeof t=="symbol"||typeof t=="boolean"){e.removeAttribute(l);break}t=Ve(""+t),e.setAttribute(l,t);break;case"onClick":t!=null&&(e.onclick=L3);break;case"onScroll":t!=null&&s0("scroll",e);break;case"onScrollEnd":t!=null&&s0("scrollend",e);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(s(61));if(l=t.__html,l!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=l}}break;case"multiple":e.multiple=t&&typeof t!="function"&&typeof t!="symbol";break;case"muted":e.muted=t&&typeof t!="function"&&typeof t!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(t==null||typeof t=="function"||typeof t=="boolean"||typeof t=="symbol"){e.removeAttribute("xlink:href");break}l=Ve(""+t),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":t!=null&&typeof t!="function"&&typeof t!="symbol"?e.setAttribute(l,""+t):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":t&&typeof t!="function"&&typeof t!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":t===!0?e.setAttribute(l,""):t!==!1&&t!=null&&typeof t!="function"&&typeof t!="symbol"?e.setAttribute(l,t):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":t!=null&&typeof t!="function"&&typeof t!="symbol"&&!isNaN(t)&&1<=t?e.setAttribute(l,t):e.removeAttribute(l);break;case"rowSpan":case"start":t==null||typeof t=="function"||typeof t=="symbol"||isNaN(t)?e.removeAttribute(l):e.setAttribute(l,t);break;case"popover":s0("beforetoggle",e),s0("toggle",e),Ye(e,"popover",t);break;case"xlinkActuate":D6(e,"http://www.w3.org/1999/xlink","xlink:actuate",t);break;case"xlinkArcrole":D6(e,"http://www.w3.org/1999/xlink","xlink:arcrole",t);break;case"xlinkRole":D6(e,"http://www.w3.org/1999/xlink","xlink:role",t);break;case"xlinkShow":D6(e,"http://www.w3.org/1999/xlink","xlink:show",t);break;case"xlinkTitle":D6(e,"http://www.w3.org/1999/xlink","xlink:title",t);break;case"xlinkType":D6(e,"http://www.w3.org/1999/xlink","xlink:type",t);break;case"xmlBase":D6(e,"http://www.w3.org/XML/1998/namespace","xml:base",t);break;case"xmlLang":D6(e,"http://www.w3.org/XML/1998/namespace","xml:lang",t);break;case"xmlSpace":D6(e,"http://www.w3.org/XML/1998/namespace","xml:space",t);break;case"is":Ye(e,"is",t);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=V7.get(l)||l,Ye(e,l,t))}}function n8(e,i,l,t,c,r){switch(l){case"style":yl(e,t,r);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(s(61));if(l=t.__html,l!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=l}}break;case"children":typeof t=="string"?l2(e,t):(typeof t=="number"||typeof t=="bigint")&&l2(e,""+t);break;case"onScroll":t!=null&&s0("scroll",e);break;case"onScrollEnd":t!=null&&s0("scrollend",e);break;case"onClick":t!=null&&(e.onclick=L3);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!W8.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(c=l.endsWith("Capture"),i=l.slice(2,c?l.length-7:void 0),r=e[e6]||null,r=r!=null?r[l]:null,typeof r=="function"&&e.removeEventListener(i,r,c),typeof t=="function")){typeof r!="function"&&r!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(i,t,c);break e}l in e?e[l]=t:t===!0?e.setAttribute(l,""):Ye(e,l,t)}}}function Z0(e,i,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":s0("error",e),s0("load",e);var t=!1,c=!1,r;for(r in l)if(l.hasOwnProperty(r)){var a=l[r];if(a!=null)switch(r){case"src":t=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:v0(e,i,r,a,l,null)}}c&&v0(e,i,"srcSet",l.srcSet,l,null),t&&v0(e,i,"src",l.src,l,null);return;case"input":s0("invalid",e);var u=r=a=c=null,h=null,$=null;for(t in l)if(l.hasOwnProperty(t)){var A=l[t];if(A!=null)switch(t){case"name":c=A;break;case"type":a=A;break;case"checked":h=A;break;case"defaultChecked":$=A;break;case"value":r=A;break;case"defaultValue":u=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(137,i));break;default:v0(e,i,t,A,l,null)}}tl(e,r,u,h,$,a,c,!1),Xe(e);return;case"select":s0("invalid",e),t=a=r=null;for(c in l)if(l.hasOwnProperty(c)&&(u=l[c],u!=null))switch(c){case"value":r=u;break;case"defaultValue":a=u;break;case"multiple":t=u;default:v0(e,i,c,u,l,null)}i=r,l=a,e.multiple=!!t,i!=null?i2(e,!!t,i,!1):l!=null&&i2(e,!!t,l,!0);return;case"textarea":s0("invalid",e),r=c=t=null;for(a in l)if(l.hasOwnProperty(a)&&(u=l[a],u!=null))switch(a){case"value":t=u;break;case"defaultValue":c=u;break;case"children":r=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:v0(e,i,a,u,l,null)}rl(e,t,c,r),Xe(e);return;case"option":for(h in l)if(l.hasOwnProperty(h)&&(t=l[h],t!=null))switch(h){case"selected":e.selected=t&&typeof t!="function"&&typeof t!="symbol";break;default:v0(e,i,h,t,l,null)}return;case"dialog":s0("beforetoggle",e),s0("toggle",e),s0("cancel",e),s0("close",e);break;case"iframe":case"object":s0("load",e);break;case"video":case"audio":for(t=0;t<ke.length;t++)s0(ke[t],e);break;case"image":s0("error",e),s0("load",e);break;case"details":s0("toggle",e);break;case"embed":case"source":case"link":s0("error",e),s0("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in l)if(l.hasOwnProperty($)&&(t=l[$],t!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:v0(e,i,$,t,l,null)}return;default:if(p4(i)){for(A in l)l.hasOwnProperty(A)&&(t=l[A],t!==void 0&&n8(e,i,A,t,l,void 0));return}}for(u in l)l.hasOwnProperty(u)&&(t=l[u],t!=null&&v0(e,i,u,t,l,null))}function mr(e,i,l,t){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,r=null,a=null,u=null,h=null,$=null,A=null;for(j in l){var D=l[j];if(l.hasOwnProperty(j)&&D!=null)switch(j){case"checked":break;case"value":break;case"defaultValue":h=D;default:t.hasOwnProperty(j)||v0(e,i,j,null,t,D)}}for(var b in t){var j=t[b];if(D=l[b],t.hasOwnProperty(b)&&(j!=null||D!=null))switch(b){case"type":r=j;break;case"name":c=j;break;case"checked":$=j;break;case"defaultChecked":A=j;break;case"value":a=j;break;case"defaultValue":u=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(s(137,i));break;default:j!==D&&v0(e,i,b,j,t,D)}}m4(e,a,u,h,$,A,r,c);return;case"select":j=a=u=b=null;for(r in l)if(h=l[r],l.hasOwnProperty(r)&&h!=null)switch(r){case"value":break;case"multiple":j=h;default:t.hasOwnProperty(r)||v0(e,i,r,null,t,h)}for(c in t)if(r=t[c],h=l[c],t.hasOwnProperty(c)&&(r!=null||h!=null))switch(c){case"value":b=r;break;case"defaultValue":u=r;break;case"multiple":a=r;default:r!==h&&v0(e,i,c,r,t,h)}i=u,l=a,t=j,b!=null?i2(e,!!l,b,!1):!!t!=!!l&&(i!=null?i2(e,!!l,i,!0):i2(e,!!l,l?[]:"",!1));return;case"textarea":j=b=null;for(u in l)if(c=l[u],l.hasOwnProperty(u)&&c!=null&&!t.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:v0(e,i,u,null,t,c)}for(a in t)if(c=t[a],r=l[a],t.hasOwnProperty(a)&&(c!=null||r!=null))switch(a){case"value":b=c;break;case"defaultValue":j=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==r&&v0(e,i,a,c,t,r)}cl(e,b,j);return;case"option":for(var i0 in l)if(b=l[i0],l.hasOwnProperty(i0)&&b!=null&&!t.hasOwnProperty(i0))switch(i0){case"selected":e.selected=!1;break;default:v0(e,i,i0,null,t,b)}for(h in t)if(b=t[h],j=l[h],t.hasOwnProperty(h)&&b!==j&&(b!=null||j!=null))switch(h){case"selected":e.selected=b&&typeof b!="function"&&typeof b!="symbol";break;default:v0(e,i,h,b,t,j)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var I in l)b=l[I],l.hasOwnProperty(I)&&b!=null&&!t.hasOwnProperty(I)&&v0(e,i,I,null,t,b);for($ in t)if(b=t[$],j=l[$],t.hasOwnProperty($)&&b!==j&&(b!=null||j!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(137,i));break;default:v0(e,i,$,b,t,j)}return;default:if(p4(i)){for(var k0 in l)b=l[k0],l.hasOwnProperty(k0)&&b!==void 0&&!t.hasOwnProperty(k0)&&n8(e,i,k0,void 0,t,b);for(A in t)b=t[A],j=l[A],!t.hasOwnProperty(A)||b===j||b===void 0&&j===void 0||n8(e,i,A,b,t,j);return}}for(var p in l)b=l[p],l.hasOwnProperty(p)&&b!=null&&!t.hasOwnProperty(p)&&v0(e,i,p,null,t,b);for(D in t)b=t[D],j=l[D],!t.hasOwnProperty(D)||b===j||b==null&&j==null||v0(e,i,D,b,t,j)}var t8=null,c8=null;function H3(e){return e.nodeType===9?e:e.ownerDocument}function yt(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function at(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function r8(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var x8=null;function wr(){var e=window.event;return e&&e.type==="popstate"?e===x8?!1:(x8=e,!0):(x8=null,!1)}var st=typeof setTimeout=="function"?setTimeout:void 0,pr=typeof clearTimeout=="function"?clearTimeout:void 0,ft=typeof Promise=="function"?Promise:void 0,vr=typeof queueMicrotask=="function"?queueMicrotask:typeof ft<"u"?function(e){return ft.resolve(null).then(e).catch(kr)}:st;function kr(e){setTimeout(function(){throw e})}function g1(e){return e==="head"}function ut(e,i){var l=i,t=0,c=0;do{var r=l.nextSibling;if(e.removeChild(l),r&&r.nodeType===8)if(l=r.data,l==="/$"){if(0<t&&8>t){l=t;var a=e.ownerDocument;if(l&1&&_e(a.documentElement),l&2&&_e(a.body),l&4)for(l=a.head,_e(l),a=l.firstChild;a;){var u=a.nextSibling,h=a.nodeName;a[L2]||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&a.rel.toLowerCase()==="stylesheet"||l.removeChild(a),a=u}}if(c===0){e.removeChild(r),Oe(i);return}c--}else l==="$"||l==="$?"||l==="$!"?c++:t=l.charCodeAt(0)-48;else t=0;l=r}while(l);Oe(i)}function y8(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var l=i;switch(i=i.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":y8(l),o4(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function $r(e,i,l,t){for(;e.nodeType===1;){var c=l;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!t&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(t){if(!e[L2])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var r=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=E6(e.nextSibling),e===null)break}return null}function _r(e,i,l){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=E6(e.nextSibling),e===null))return null;return e}function a8(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Sr(e,i){var l=e.ownerDocument;if(e.data!=="$?"||l.readyState==="complete")i();else{var t=function(){i(),l.removeEventListener("DOMContentLoaded",t)};l.addEventListener("DOMContentLoaded",t),e._reactRetry=t}}function E6(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var s8=null;function ot(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"){if(i===0)return e;i--}else l==="/$"&&i++}e=e.previousSibling}return null}function ht(e,i,l){switch(i=H3(l),e){case"html":if(e=i.documentElement,!e)throw Error(s(452));return e;case"head":if(e=i.head,!e)throw Error(s(453));return e;case"body":if(e=i.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function _e(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);o4(e)}var b6=new Map,dt=new Set;function B3(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var J6=q.d;q.d={f:br,r:jr,D:Mr,C:Er,L:Tr,m:Ar,X:Cr,S:Or,M:Rr};function br(){var e=J6.f(),i=O3();return e||i}function jr(e){var i=W1(e);i!==null&&i.tag===5&&i.type==="form"?z5(i):J6.r(e)}var O2=typeof document>"u"?null:document;function gt(e,i,l){var t=O2;if(t&&typeof i=="string"&&i){var c=w6(i);c='link[rel="'+e+'"][href="'+c+'"]',typeof l=="string"&&(c+='[crossorigin="'+l+'"]'),dt.has(c)||(dt.add(c),e={rel:e,crossOrigin:l,href:i},t.querySelector(c)===null&&(i=t.createElement("link"),Z0(i,"link",e),H0(i),t.head.appendChild(i)))}}function Mr(e){J6.D(e),gt("dns-prefetch",e,null)}function Er(e,i){J6.C(e,i),gt("preconnect",e,i)}function Tr(e,i,l){J6.L(e,i,l);var t=O2;if(t&&e&&i){var c='link[rel="preload"][as="'+w6(i)+'"]';i==="image"&&l&&l.imageSrcSet?(c+='[imagesrcset="'+w6(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(c+='[imagesizes="'+w6(l.imageSizes)+'"]')):c+='[href="'+w6(e)+'"]';var r=c;switch(i){case"style":r=C2(e);break;case"script":r=R2(e)}b6.has(r)||(e=T({rel:"preload",href:i==="image"&&l&&l.imageSrcSet?void 0:e,as:i},l),b6.set(r,e),t.querySelector(c)!==null||i==="style"&&t.querySelector(Se(r))||i==="script"&&t.querySelector(be(r))||(i=t.createElement("link"),Z0(i,"link",e),H0(i),t.head.appendChild(i)))}}function Ar(e,i){J6.m(e,i);var l=O2;if(l&&e){var t=i&&typeof i.as=="string"?i.as:"script",c='link[rel="modulepreload"][as="'+w6(t)+'"][href="'+w6(e)+'"]',r=c;switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=R2(e)}if(!b6.has(r)&&(e=T({rel:"modulepreload",href:e},i),b6.set(r,e),l.querySelector(c)===null)){switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(be(r)))return}t=l.createElement("link"),Z0(t,"link",e),H0(t),l.head.appendChild(t)}}}function Or(e,i,l){J6.S(e,i,l);var t=O2;if(t&&e){var c=I1(t).hoistableStyles,r=C2(e);i=i||"default";var a=c.get(r);if(!a){var u={loading:0,preload:null};if(a=t.querySelector(Se(r)))u.loading=5;else{e=T({rel:"stylesheet",href:e,"data-precedence":i},l),(l=b6.get(r))&&f8(e,l);var h=a=t.createElement("link");H0(h),Z0(h,"link",e),h._p=new Promise(function($,A){h.onload=$,h.onerror=A}),h.addEventListener("load",function(){u.loading|=1}),h.addEventListener("error",function(){u.loading|=2}),u.loading|=4,q3(a,i,t)}a={type:"stylesheet",instance:a,count:1,state:u},c.set(r,a)}}}function Cr(e,i){J6.X(e,i);var l=O2;if(l&&e){var t=I1(l).hoistableScripts,c=R2(e),r=t.get(c);r||(r=l.querySelector(be(c)),r||(e=T({src:e,async:!0},i),(i=b6.get(c))&&u8(e,i),r=l.createElement("script"),H0(r),Z0(r,"link",e),l.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},t.set(c,r))}}function Rr(e,i){J6.M(e,i);var l=O2;if(l&&e){var t=I1(l).hoistableScripts,c=R2(e),r=t.get(c);r||(r=l.querySelector(be(c)),r||(e=T({src:e,async:!0,type:"module"},i),(i=b6.get(c))&&u8(e,i),r=l.createElement("script"),H0(r),Z0(r,"link",e),l.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},t.set(c,r))}}function mt(e,i,l,t){var c=(c=n0.current)?B3(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(i=C2(l.href),l=I1(c).hoistableStyles,t=l.get(i),t||(t={type:"style",instance:null,count:0,state:null},l.set(i,t)),t):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=C2(l.href);var r=I1(c).hoistableStyles,a=r.get(e);if(a||(c=c.ownerDocument||c,a={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,a),(r=c.querySelector(Se(e)))&&!r._p&&(a.instance=r,a.state.loading=5),b6.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},b6.set(e,l),r||zr(c,e,l,a.state))),i&&t===null)throw Error(s(528,""));return a}if(i&&t!==null)throw Error(s(529,""));return null;case"script":return i=l.async,l=l.src,typeof l=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=R2(l),l=I1(c).hoistableScripts,t=l.get(i),t||(t={type:"script",instance:null,count:0,state:null},l.set(i,t)),t):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function C2(e){return'href="'+w6(e)+'"'}function Se(e){return'link[rel="stylesheet"]['+e+"]"}function wt(e){return T({},e,{"data-precedence":e.precedence,precedence:null})}function zr(e,i,l,t){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?t.loading=1:(i=e.createElement("link"),t.preload=i,i.addEventListener("load",function(){return t.loading|=1}),i.addEventListener("error",function(){return t.loading|=2}),Z0(i,"link",l),H0(i),e.head.appendChild(i))}function R2(e){return'[src="'+w6(e)+'"]'}function be(e){return"script[async]"+e}function pt(e,i,l){if(i.count++,i.instance===null)switch(i.type){case"style":var t=e.querySelector('style[data-href~="'+w6(l.href)+'"]');if(t)return i.instance=t,H0(t),t;var c=T({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return t=(e.ownerDocument||e).createElement("style"),H0(t),Z0(t,"style",c),q3(t,l.precedence,e),i.instance=t;case"stylesheet":c=C2(l.href);var r=e.querySelector(Se(c));if(r)return i.state.loading|=4,i.instance=r,H0(r),r;t=wt(l),(c=b6.get(c))&&f8(t,c),r=(e.ownerDocument||e).createElement("link"),H0(r);var a=r;return a._p=new Promise(function(u,h){a.onload=u,a.onerror=h}),Z0(r,"link",t),i.state.loading|=4,q3(r,l.precedence,e),i.instance=r;case"script":return r=R2(l.src),(c=e.querySelector(be(r)))?(i.instance=c,H0(c),c):(t=l,(c=b6.get(r))&&(t=T({},l),u8(t,c)),e=e.ownerDocument||e,c=e.createElement("script"),H0(c),Z0(c,"link",t),e.head.appendChild(c),i.instance=c);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(t=i.instance,i.state.loading|=4,q3(t,l.precedence,e));return i.instance}function q3(e,i,l){for(var t=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=t.length?t[t.length-1]:null,r=c,a=0;a<t.length;a++){var u=t[a];if(u.dataset.precedence===i)r=u;else if(r!==c)break}r?r.parentNode.insertBefore(e,r.nextSibling):(i=l.nodeType===9?l.head:l,i.insertBefore(e,i.firstChild))}function f8(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function u8(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Y3=null;function vt(e,i,l){if(Y3===null){var t=new Map,c=Y3=new Map;c.set(l,t)}else c=Y3,t=c.get(l),t||(t=new Map,c.set(l,t));if(t.has(e))return t;for(t.set(e,null),l=l.getElementsByTagName(e),c=0;c<l.length;c++){var r=l[c];if(!(r[L2]||r[F0]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var a=r.getAttribute(i)||"";a=e+a;var u=t.get(a);u?u.push(r):t.set(a,[r])}}return t}function kt(e,i,l){e=e.ownerDocument||e,e.head.insertBefore(l,i==="title"?e.querySelector("head > title"):null)}function Dr(e,i,l){if(l===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function $t(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var je=null;function Nr(){}function Ur(e,i,l){if(je===null)throw Error(s(475));var t=je;if(i.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var c=C2(l.href),r=e.querySelector(Se(c));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=G3.bind(t),e.then(t,t)),i.state.loading|=4,i.instance=r,H0(r);return}r=e.ownerDocument||e,l=wt(l),(c=b6.get(c))&&f8(l,c),r=r.createElement("link"),H0(r);var a=r;a._p=new Promise(function(u,h){a.onload=u,a.onerror=h}),Z0(r,"link",l),i.instance=r}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(t.count++,i=G3.bind(t),e.addEventListener("load",i),e.addEventListener("error",i))}}function Lr(){if(je===null)throw Error(s(475));var e=je;return e.stylesheets&&e.count===0&&o8(e,e.stylesheets),0<e.count?function(i){var l=setTimeout(function(){if(e.stylesheets&&o8(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(l)}}:null}function G3(){if(this.count--,this.count===0){if(this.stylesheets)o8(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var X3=null;function o8(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,X3=new Map,i.forEach(Hr,e),X3=null,G3.call(e))}function Hr(e,i){if(!(i.state.loading&4)){var l=X3.get(e);if(l)var t=l.get(null);else{l=new Map,X3.set(e,l);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<c.length;r++){var a=c[r];(a.nodeName==="LINK"||a.getAttribute("media")!=="not all")&&(l.set(a.dataset.precedence,a),t=a)}t&&l.set(null,t)}c=i.instance,a=c.getAttribute("data-precedence"),r=l.get(a)||t,r===t&&l.set(null,c),l.set(a,c),this.count++,t=G3.bind(this),c.addEventListener("load",t),c.addEventListener("error",t),r?r.parentNode.insertBefore(c,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),i.state.loading|=4}}var Me={$$typeof:J,Provider:null,Consumer:null,_currentValue:e0,_currentValue2:e0,_threadCount:0};function Br(e,i,l,t,c,r,a,u){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=a4(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=a4(0),this.hiddenUpdates=a4(null),this.identifierPrefix=t,this.onUncaughtError=c,this.onCaughtError=r,this.onRecoverableError=a,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=u,this.incompleteTransitions=new Map}function _t(e,i,l,t,c,r,a,u,h,$,A,D){return e=new Br(e,i,l,a,u,h,$,D),i=1,r===!0&&(i|=24),r=s6(3,null,null,i),e.current=r,r.stateNode=e,i=K4(),i.refCount++,e.pooledCache=i,i.refCount++,r.memoizedState={element:t,isDehydrated:l,cache:i},I4(r),e}function St(e){return e?(e=s2,e):s2}function bt(e,i,l,t,c,r){c=St(c),t.context===null?t.context=c:t.pendingContext=c,t=n1(i),t.payload={element:l},r=r===void 0?null:r,r!==null&&(t.callback=r),l=t1(e,t,i),l!==null&&(d6(l,e,i),ne(l,e,i))}function jt(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<i?l:i}}function h8(e,i){jt(e,i),(e=e.alternate)&&jt(e,i)}function Mt(e){if(e.tag===13){var i=a2(e,67108864);i!==null&&d6(i,e,67108864),h8(e,67108864)}}var Z3=!0;function qr(e,i,l,t){var c=R.T;R.T=null;var r=q.p;try{q.p=2,d8(e,i,l,t)}finally{q.p=r,R.T=c}}function Yr(e,i,l,t){var c=R.T;R.T=null;var r=q.p;try{q.p=8,d8(e,i,l,t)}finally{q.p=r,R.T=c}}function d8(e,i,l,t){if(Z3){var c=g8(t);if(c===null)l8(e,i,t,V3,l),Tt(e,t);else if(Xr(c,e,i,l,t))t.stopPropagation();else if(Tt(e,t),i&4&&-1<Gr.indexOf(e)){for(;c!==null;){var r=W1(c);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var a=E1(r.pendingLanes);if(a!==0){var u=r;for(u.pendingLanes|=2,u.entangledLanes|=2;a;){var h=1<<31-y6(a);u.entanglements[1]|=h,a&=~h}z6(r),(m0&6)===0&&(T3=T6()+500,ve(0))}}break;case 13:u=a2(r,2),u!==null&&d6(u,r,2),O3(),h8(r,2)}if(r=g8(t),r===null&&l8(e,i,t,V3,l),r===c)break;c=r}c!==null&&t.stopPropagation()}else l8(e,i,t,null,l)}}function g8(e){return e=k4(e),m8(e)}var V3=null;function m8(e){if(V3=null,e=F1(e),e!==null){var i=d(e);if(i===null)e=null;else{var l=i.tag;if(l===13){if(e=M(i),e!==null)return e;e=null}else if(l===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return V3=e,null}function Et(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(E7()){case q8:return 2;case Y8:return 8;case Le:case T7:return 32;case G8:return 268435456;default:return 32}default:return 32}}var w8=!1,m1=null,w1=null,p1=null,Ee=new Map,Te=new Map,v1=[],Gr="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Tt(e,i){switch(e){case"focusin":case"focusout":m1=null;break;case"dragenter":case"dragleave":w1=null;break;case"mouseover":case"mouseout":p1=null;break;case"pointerover":case"pointerout":Ee.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Te.delete(i.pointerId)}}function Ae(e,i,l,t,c,r){return e===null||e.nativeEvent!==r?(e={blockedOn:i,domEventName:l,eventSystemFlags:t,nativeEvent:r,targetContainers:[c]},i!==null&&(i=W1(i),i!==null&&Mt(i)),e):(e.eventSystemFlags|=t,i=e.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),e)}function Xr(e,i,l,t,c){switch(i){case"focusin":return m1=Ae(m1,e,i,l,t,c),!0;case"dragenter":return w1=Ae(w1,e,i,l,t,c),!0;case"mouseover":return p1=Ae(p1,e,i,l,t,c),!0;case"pointerover":var r=c.pointerId;return Ee.set(r,Ae(Ee.get(r)||null,e,i,l,t,c)),!0;case"gotpointercapture":return r=c.pointerId,Te.set(r,Ae(Te.get(r)||null,e,i,l,t,c)),!0}return!1}function At(e){var i=F1(e.target);if(i!==null){var l=d(i);if(l!==null){if(i=l.tag,i===13){if(i=M(l),i!==null){e.blockedOn=i,U7(e.priority,function(){if(l.tag===13){var t=h6();t=s4(t);var c=a2(l,t);c!==null&&d6(c,l,t),h8(l,t)}});return}}else if(i===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Q3(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var l=g8(e.nativeEvent);if(l===null){l=e.nativeEvent;var t=new l.constructor(l.type,l);v4=t,l.target.dispatchEvent(t),v4=null}else return i=W1(l),i!==null&&Mt(i),e.blockedOn=l,!1;i.shift()}return!0}function Ot(e,i,l){Q3(e)&&l.delete(i)}function Zr(){w8=!1,m1!==null&&Q3(m1)&&(m1=null),w1!==null&&Q3(w1)&&(w1=null),p1!==null&&Q3(p1)&&(p1=null),Ee.forEach(Ot),Te.forEach(Ot)}function K3(e,i){e.blockedOn===i&&(e.blockedOn=null,w8||(w8=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Zr)))}var J3=null;function Ct(e){J3!==e&&(J3=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){J3===e&&(J3=null);for(var i=0;i<e.length;i+=3){var l=e[i],t=e[i+1],c=e[i+2];if(typeof t!="function"){if(m8(t||l)===null)continue;break}var r=W1(l);r!==null&&(e.splice(i,3),i-=3,mi(r,{pending:!0,data:c,method:l.method,action:t},t,c))}}))}function Oe(e){function i(h){return K3(h,e)}m1!==null&&K3(m1,e),w1!==null&&K3(w1,e),p1!==null&&K3(p1,e),Ee.forEach(i),Te.forEach(i);for(var l=0;l<v1.length;l++){var t=v1[l];t.blockedOn===e&&(t.blockedOn=null)}for(;0<v1.length&&(l=v1[0],l.blockedOn===null);)At(l),l.blockedOn===null&&v1.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(t=0;t<l.length;t+=3){var c=l[t],r=l[t+1],a=c[e6]||null;if(typeof r=="function")a||Ct(l);else if(a){var u=null;if(r&&r.hasAttribute("formAction")){if(c=r,a=r[e6]||null)u=a.formAction;else if(m8(c)!==null)continue}else u=a.action;typeof u=="function"?l[t+1]=u:(l.splice(t,3),t-=3),Ct(l)}}}function p8(e){this._internalRoot=e}F3.prototype.render=p8.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(s(409));var l=i.current,t=h6();bt(l,t,e,i,null,null)},F3.prototype.unmount=p8.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;bt(e.current,2,null,e,null,null),O3(),i[J1]=null}};function F3(e){this._internalRoot=e}F3.prototype.unstable_scheduleHydration=function(e){if(e){var i=K8();e={blockedOn:null,target:e,priority:i};for(var l=0;l<v1.length&&i!==0&&i<v1[l].priority;l++);v1.splice(l,0,e),l===0&&At(e)}};var Rt=x.version;if(Rt!=="19.1.0")throw Error(s(527,Rt,"19.1.0"));q.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=v(i),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var Vr={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var W3=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!W3.isDisabled&&W3.supportsFiber)try{D2=W3.inject(Vr),x6=W3}catch{}}return Re.createRoot=function(e,i){if(!o(e))throw Error(s(299));var l=!1,t="",c=K5,r=J5,a=F5,u=null;return i!=null&&(i.unstable_strictMode===!0&&(l=!0),i.identifierPrefix!==void 0&&(t=i.identifierPrefix),i.onUncaughtError!==void 0&&(c=i.onUncaughtError),i.onCaughtError!==void 0&&(r=i.onCaughtError),i.onRecoverableError!==void 0&&(a=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(u=i.unstable_transitionCallbacks)),i=_t(e,1,!1,null,null,l,t,c,r,a,u,null),e[J1]=i.current,i8(e),new p8(i)},Re.hydrateRoot=function(e,i,l){if(!o(e))throw Error(s(299));var t=!1,c="",r=K5,a=J5,u=F5,h=null,$=null;return l!=null&&(l.unstable_strictMode===!0&&(t=!0),l.identifierPrefix!==void 0&&(c=l.identifierPrefix),l.onUncaughtError!==void 0&&(r=l.onUncaughtError),l.onCaughtError!==void 0&&(a=l.onCaughtError),l.onRecoverableError!==void 0&&(u=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(h=l.unstable_transitionCallbacks),l.formState!==void 0&&($=l.formState)),i=_t(e,1,!0,i,l??null,t,c,r,a,u,h,$),i.context=St(null),l=i.current,t=h6(),t=s4(t),c=n1(t),c.callback=null,t1(l,c,t),l=t,i.current.lanes=l,U2(i,l),z6(i),e[J1]=i.current,i8(e),new F3(i)},Re.version="19.1.0",Re}var Gt;function t9(){if(Gt)return $8.exports;Gt=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(x){console.error(x)}}return n(),$8.exports=n9(),$8.exports}var c9=t9();const Xt=n=>{let x;const f=new Set,s=(g,T)=>{const E=typeof g=="function"?g(x):g;if(!Object.is(E,x)){const S=x;x=T??(typeof E!="object"||E===null)?E:Object.assign({},x,E),f.forEach(L=>L(x,S))}},o=()=>x,_={setState:s,getState:o,getInitialState:()=>v,subscribe:g=>(f.add(g),()=>f.delete(g))},v=x=n(s,o,_);return _},r9=n=>n?Xt(n):Xt,x9=n=>n;function y9(n,x=x9){const f=Q1.useSyncExternalStore(n.subscribe,()=>x(n.getState()),()=>x(n.getInitialState()));return Q1.useDebugValue(f),f}const a9=n=>{const x=r9(n),f=s=>y9(x,s);return Object.assign(f,x),f},s9=n=>a9;function f9(n,x){let f;try{f=n()}catch{return}return{getItem:o=>{var d;const M=v=>v===null?null:JSON.parse(v,void 0),_=(d=f.getItem(o))!=null?d:null;return _ instanceof Promise?_.then(M):M(_)},setItem:(o,d)=>f.setItem(o,JSON.stringify(d,void 0)),removeItem:o=>f.removeItem(o)}}const D8=n=>x=>{try{const f=n(x);return f instanceof Promise?f:{then(s){return D8(s)(f)},catch(s){return this}}}catch(f){return{then(s){return this},catch(s){return D8(s)(f)}}}},u9=(n,x)=>(f,s,o)=>{let d={storage:f9(()=>localStorage),partialize:C=>C,version:0,merge:(C,V)=>({...V,...C}),...x},M=!1;const _=new Set,v=new Set;let g=d.storage;if(!g)return n((...C)=>{console.warn(`[zustand persist middleware] Unable to update item '${d.name}', the given storage is currently unavailable.`),f(...C)},s,o);const T=()=>{const C=d.partialize({...s()});return g.setItem(d.name,{state:C,version:d.version})},E=o.setState;o.setState=(C,V)=>{E(C,V),T()};const S=n((...C)=>{f(...C),T()},s,o);o.getInitialState=()=>S;let L;const H=()=>{var C,V;if(!g)return;M=!1,_.forEach(O=>{var J;return O((J=s())!=null?J:S)});const Y=((V=d.onRehydrateStorage)==null?void 0:V.call(d,(C=s())!=null?C:S))||void 0;return D8(g.getItem.bind(g))(d.name).then(O=>{if(O)if(typeof O.version=="number"&&O.version!==d.version){if(d.migrate){const J=d.migrate(O.state,O.version);return J instanceof Promise?J.then(r0=>[!0,r0]):[!0,J]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,O.state];return[!1,void 0]}).then(O=>{var J;const[r0,F]=O;if(L=d.merge(F,(J=s())!=null?J:S),f(L,!0),r0)return T()}).then(()=>{Y==null||Y(L,void 0),L=s(),M=!0,v.forEach(O=>O(L))}).catch(O=>{Y==null||Y(void 0,O)})};return o.persist={setOptions:C=>{d={...d,...C},C.storage&&(g=C.storage)},clearStorage:()=>{g==null||g.removeItem(d.name)},getOptions:()=>d,rehydrate:()=>H(),hasHydrated:()=>M,onHydrate:C=>(_.add(C),()=>{_.delete(C)}),onFinishHydration:C=>(v.add(C),()=>{v.delete(C)})},d.skipHydration||H(),L||S},o9=u9,o7={"Archivo Narrow":["latin"],DynaPuff:["latin"],Eczar:["devanagari","greek-ext","greek","latin","latin-ext"],"Expletus Sans":["latin"],Glory:["latin","latin-ext","vietnamese"],Handjet:["arabic","armenian","cyrillic","cyrillic-ext","greek","hebrew","latin","latin-ext","vietnamese"],Manrope:["latin","latin-ext","cyrillic","cyrillic-ext"],"Markazi Text":["arabic","latin","latin-ext","vietnamese"],MuseoModerno:["latin","latin-ext","vietnamese"],"Pixelify Sans":["latin"],"Reddit Sans Condensed":["latin"],"Roboto Condensed":["latin","latin-ext","cyrillic","cyrillic-ext","greek","greek-ext"],"Shantell Sans":["latin","latin-ext","cyrillic","cyrillic-ext","vietnamese"],"Sofia Sans Semi Condensed":["latin","latin-ext","cyrillic","cyrillic-ext","greek"],Tektur:["latin"],Tourney:["latin"],Truculenta:["latin","latin-ext"],"Yanone Kaffeesatz":["latin"],"Winky Rough":["latin"]},L8=["sans-serif","Arial","serif"],h7=Object.keys(o7),n4=[...L8,...h7],h9=Object.fromEntries(n4.map(n=>[n,L8.includes(n)]));function d9(n,x){return`url(https://cdn.jsdelivr.net/fontsource/fonts/${n.toLowerCase().replace(/\s+/g,"-")}@latest/${x}-600-normal.woff2) format('woff2')`}const d7=Object.fromEntries(h7.map(n=>[n,new Set(o7[n].map(x=>d9(n,x)))]));class g9{constructor(x,f){V1(this,"fontName");V1(this,"url");this.fontName=x,this.url=f}}const m9=Object.entries(d7).flatMap(([n,x])=>[...x].map(f=>new g9(n,f))),Zt={fontLoadState:h9,fontURLSets:d7},w9={chrome:{Arial:0,"sans-serif":0,serif:0,"Archivo Narrow":0,DynaPuff:0,Eczar:"0.03ch","Expletus Sans":0,Glory:0,Handjet:0,Manrope:0,"Markazi Text":0,MuseoModerno:0,"Pixelify Sans":0,"Reddit Sans Condensed":0,"Roboto Condensed":0,"Shantell Sans":0,"Sofia Sans Semi Condensed":0,Tektur:0,Tourney:0,Truculenta:0,"Yanone Kaffeesatz":"0.06ch","Winky Rough":"-0.11ch"},firefox:{Arial:0,"sans-serif":"0.15ch",serif:"0.15ch","Archivo Narrow":0,DynaPuff:0,Eczar:"0.11ch","Expletus Sans":0,Glory:0,Handjet:0,Manrope:0,"Markazi Text":0,MuseoModerno:0,"Pixelify Sans":0,"Reddit Sans Condensed":0,"Roboto Condensed":0,"Shantell Sans":0,"Sofia Sans Semi Condensed":0,Tektur:0,Tourney:0,Truculenta:0,"Yanone Kaffeesatz":"0.06ch","Winky Rough":"-0.11ch"},safari:{Arial:0,"sans-serif":0,serif:0,"Archivo Narrow":0,DynaPuff:0,Eczar:"0.11ch","Expletus Sans":0,Glory:0,Handjet:0,Manrope:0,"Markazi Text":0,MuseoModerno:0,"Pixelify Sans":0,"Reddit Sans Condensed":0,"Roboto Condensed":0,"Shantell Sans":0,"Sofia Sans Semi Condensed":0,Tektur:0,Tourney:0,Truculenta:0,"Yanone Kaffeesatz":"0.06ch","Winky Rough":"-0.11ch"}},p9={chrome:{Arial:"initial","sans-serif":"initial",serif:"initial","Archivo Narrow":"initial",DynaPuff:"initial",Eczar:"1.5em","Expletus Sans":"initial",Glory:"initial",Handjet:"initial",Manrope:"initial","Markazi Text":"initial",MuseoModerno:"initial","Pixelify Sans":"initial","Reddit Sans Condensed":"initial","Roboto Condensed":"initial","Shantell Sans":"initial","Sofia Sans Semi Condensed":"initial",Tektur:"initial",Tourney:"initial",Truculenta:"initial","Yanone Kaffeesatz":"0.5em","Winky Rough":"initial"},firefox:{Arial:"0.2em","sans-serif":"0.1em",serif:"0.1em","Archivo Narrow":"0.2em",DynaPuff:"0.2em",Eczar:"initial","Expletus Sans":"0.2em",Glory:"0.2em",Handjet:"0.2em",Manrope:"0.2em","Markazi Text":"0.2em",MuseoModerno:"0.2em","Pixelify Sans":"0.2em","Reddit Sans Condensed":"0.2em","Roboto Condensed":"0.2em","Shantell Sans":"0.2em","Sofia Sans Semi Condensed":"0.2em",Tektur:"0.2em",Tourney:"0.2em",Truculenta:"0.2em","Yanone Kaffeesatz":"0.1em","Winky Rough":"0.2em"},safari:{Arial:0,"sans-serif":0,serif:0,"Archivo Narrow":0,DynaPuff:0,Eczar:0,"Expletus Sans":0,Glory:0,Handjet:0,Manrope:0,"Markazi Text":0,MuseoModerno:0,"Pixelify Sans":0,"Reddit Sans Condensed":0,"Roboto Condensed":0,"Shantell Sans":0,"Sofia Sans Semi Condensed":0,Tektur:0,Tourney:0,Truculenta:0,"Yanone Kaffeesatz":0,"Winky Rough":0}},v9=(n,x)=>({...Zt,resetFontState:()=>{n(Zt)},replaceFontState:f=>n(f),markLoadedFont:f=>n(s=>({fontLoadState:{...s.fontLoadState,[f]:!0}})),markLoadedURL:({fontName:f,url:s})=>n(o=>{const d=new Set(o.fontURLSets[f]);return d.delete(s),{fontURLSets:{...o.fontURLSets,[f]:d},fontLoadState:d.size?o.fontLoadState:{...o.fontLoadState,[f]:!0}}}),checkFont:f=>x().fontLoadState[f],checkAllFontsReady:()=>Object.values(x().fontLoadState).every(s=>s)}),_1=[["#C18AFF","#FF5F6D","#FFC371","#47E5BC","#6A82FB","#F6D365"],["#e6b89c","#fe938c","#ead2ac","#9cafb7"],["#80e8f7","#faf470","#d186f7","#d0f8ff","#ffffb4","#e6d5ff"],["#d0e7fb","#ed4d41","#5764ad","#e8f3fd","#ede73b","#574d6c"],["#dcc280","#6a0900","#279f8d","#b3aa99","#68d7c3","#4d4637"],["#7EFDD0","#fd597e","#fbee88","#a800d5","#fafbc3","#ff00cb"],["#00D1D1","#FF3E3E","#0066FF","#B0FF00","#FF00FF","#FFEE00"],["#E6D8A8","#E6A8A8","#A8E6CE","#C7A8E6","#A8C7E6","#E6A8D8"],["#b0a8b9","#c34a36","#4b4453","#ff8066","#845ec2","#4d8076"],["#005E2D","#5E0035","#5E4D00","#003E5E","#5E0000","#3D005E"],["#000000","#ffffff"]],Ne={Small:300,Medium:360,Large:480};function k9(n,x){return n>x?NaN:n+Math.floor(Math.random()*(x-n+1))}function $9(n,x,f){const s=[],o=Array.from({length:f-x+1},(M,_)=>_+x);let d;for(let M=0;M<n;M++)d=k9(0,o.length-1),s.push(o[d]),o.splice(d,1);return s}function g7(){const n=Date.now().toString();return`${Math.random().toFixed(8).toString().slice(2)}-${n}`}function H8(n){return/^#([0-9A-F]{3}){1,2}$/i.test(n)}function i4(n){const x=n.replace(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/,"#$1$1$2$2$3$3");if(!/^#[0-9A-Fa-f]{6}$/.test(x))throw new Error("Invalid hex color format. Expected #RRGGBB or #RGB.");const f=parseInt(x.slice(1,3),16)/255,s=parseInt(x.slice(3,5),16)/255,o=parseInt(x.slice(5,7),16)/255;return .2126*f+.7152*s+.0722*o>.5?"#000000":"#FFFFFF"}function N8(n,x){let f=n.replace(/^#/,"");if(f.length===3&&(f=f.split("").map(v=>v+v).join("")),f.length!==6)throw new Error(`Invalid hex color: ${n}`);const s=parseInt(f,16);let o=s>>16&255,d=s>>8&255,M=s&255;return o=Math.min(255,Math.max(0,Math.round(o*x))),d=Math.min(255,Math.max(0,Math.round(d*x))),M=Math.min(255,Math.max(0,Math.round(M*x))),`#${[o,d,M].map(v=>v.toString(16).padStart(2,"0")).join("")}`}function F6(n,x){const f=_1[n%_1.length];return f[x%f.length]}class z2{constructor({label:x,fillColor:f,fontFamily:s}){V1(this,"id");V1(this,"label");V1(this,"fillColor");V1(this,"fontFamily");this.label=x,this.fillColor=f,this.fontFamily=s,this.id=g7()}}const g6=72;function _9(n){if(typeof n!="object"||n===null)return!1;const x=n,f=Object.keys(x);return!(f.length!==4||!f.includes("id")||!f.includes("label")||!f.includes("fillColor")||!f.includes("fontFamily")||typeof x.id!="string"||typeof x.label!="string"||typeof x.fillColor!="string"||x.fillColor!==""&&!H8(x.fillColor)||typeof x.fontFamily!="string"||x.fontFamily!==""&&!n4.includes(x.fontFamily))}function S9(n){if(typeof n!="object"||n===null)return!1;const x=n,f=["configName","radiusName","default_palette_idx","default_fontFamily","outcomes"];if(!(Object.keys(x).length===f.length&&f.every(o=>o in x))||typeof x.configName!="string"||typeof x.radiusName!="string"||!(x.radiusName in Ne)||typeof x.default_palette_idx!="number"||!Number.isInteger(x.default_palette_idx)||typeof x.default_fontFamily!="string"||!n4.includes(x.default_fontFamily)||!Array.isArray(x.outcomes))return!1;for(const o of x.outcomes)if(!_9(o))return!1;return!0}const l4={configName:"",radiusName:"Medium",default_palette_idx:0,default_fontFamily:"Arial",outcomes:j9(2,n=>`Outcome ${n+1}`)},Vt={userId:"USER_ID",currentConfig:l4,activeConfig:B8(l4),savedConfigs:new Array(10).fill(void 0)},b9=()=>new z2({label:"",fillColor:"",fontFamily:""});function j9(n,x){return new Array(n).fill(0).map((f,s)=>new z2({label:x(s),fillColor:"",fontFamily:""}))}function B8(n){const x={...n};if(x.outcomes=x.outcomes.map(({label:s,fillColor:o,fontFamily:d,id:M})=>({id:M,label:s.trim(),fillColor:H8(o)?o:"",fontFamily:d})),x.outcomes=x.outcomes.filter(({label:s})=>!!s),x.outcomes.length<1)return B8(l4);x.outcomes.length>g6&&(x.outcomes=x.outcomes.slice(0,g6));const f=$9(x.outcomes.length,0,x.outcomes.length-1);for(x.outcomes=f.map(s=>x.outcomes[s]);x.outcomes.length<6;)x.outcomes=[...x.outcomes,...x.outcomes];return x}function M9(n){if(!S9(n))return{valid:!1,config:null,error:"The file either had some fields missing, or contained invalid fields or invalid values.",warnings:[]};const x=[],f=v=>typeof v=="number"&&v>=0&&v<_1.length?v:(x.push("The file had invalid wheel colors, that were set to default."),0),s=n.outcomes,o=s.slice(0,g6);s.length>g6&&x.push(`The maximum possible number of outcomes is ${g6}; extra outcomes were removed.`),s.length===0?(x.push("No outcomes were found. Added Outcome 1 and Outcome 2."),s.push(new z2({label:"Outcome 1",fillColor:"",fontFamily:""}),new z2({label:"Outcome 2",fillColor:"",fontFamily:""}))):s.length===1&&(x.push("Only one outcome was found. Added Outcome 2."),s.push(new z2({label:"Outcome 2",fillColor:"",fontFamily:""})));const d={configName:n.configName,radiusName:n.radiusName,default_palette_idx:f(n.default_palette_idx),default_fontFamily:n.default_fontFamily,outcomes:o},M=new Set;let _;return d.outcomes.forEach(({id:v},g)=>{if(M.has(v)){for(_="";!_||M.has(_);)_=g7();d.outcomes[g].id=_,x.push(`Outcome ${g+1} had a non-unique id, which was replaced with ${_}.`)}M.add(d.outcomes[g].id)}),{valid:!0,config:d,error:"",warnings:x}}function m7(n,x){const s={...{year:"numeric",month:"numeric",day:"numeric",hour:void 0,minute:void 0,second:void 0,timeZoneName:void 0},...x};return new Date().toLocaleDateString(n,s)}const E9=n=>({...Vt,replaceState:({newState:x})=>n(x),resetState:()=>{n(Vt)},replaceCurrentConfig:({newConfig:x})=>n({currentConfig:x}),resetCurrentConfig:()=>n({currentConfig:l4}),setRadius:({radiusName:x})=>n(f=>({currentConfig:{...f.currentConfig,radiusName:x}})),setDefaultPalette:({paletteIdx:x})=>n(f=>x>=_1.length||x<0?f:{currentConfig:{...f.currentConfig,default_palette_idx:x}}),setDefaultFontFamily:({fontFamily:x})=>n(f=>({currentConfig:{...f.currentConfig,default_fontFamily:x}})),setConfigName:({configName:x})=>n(f=>({currentConfig:{...f.currentConfig,configName:x}})),addBlankOutcomes:({quantity:x})=>n(f=>{const s=f.currentConfig.outcomes.length;if(s>=g6)return f;const o=Math.max(1,Math.min(x,g6-s)),d=Array.from({length:o},()=>({...b9()}));return{currentConfig:{...f.currentConfig,outcomes:[...f.currentConfig.outcomes,...d]}}}),duplicateOutcome:({outcomeIdx:x})=>n(f=>{const s=f.currentConfig.outcomes.length;return s>=g6||x>=s||x<0?f:{currentConfig:{...f.currentConfig,outcomes:[...f.currentConfig.outcomes.slice(0,x+1),new z2(f.currentConfig.outcomes[x]),...f.currentConfig.outcomes.slice(x+1)]}}}),removeOutcome:({outcomeIdx:x})=>n(f=>{const s=f.currentConfig.outcomes.length;return s<3||x>=s||x<0?f:{currentConfig:{...f.currentConfig,outcomes:[...f.currentConfig.outcomes.slice(0,x),...f.currentConfig.outcomes.slice(x+1)]}}}),modifyOutcome:({outcomeIdx:x,key:f,value:s})=>n(o=>{const d=o.currentConfig.outcomes.length;return x>=d||x<0?o:{currentConfig:{...o.currentConfig,outcomes:[...o.currentConfig.outcomes.slice(0,x),{...o.currentConfig.outcomes[x],[f]:s},...o.currentConfig.outcomes.slice(x+1)]}}}),saveCurrentConfig:({saveIdx:x,configName:f})=>n(s=>{const o=s.savedConfigs.length;if(x>=o||x<0)return s;const d={...s.currentConfig,configName:f||m7()};return{savedConfigs:[...s.savedConfigs.slice(0,x),d,...s.savedConfigs.slice(x+1)]}}),loadConfig:({saveIdx:x})=>n(f=>{const s=f.savedConfigs.length;if(x>=s||x<0||!f.savedConfigs[x])return f;const{...o}=f.savedConfigs[x];return{currentConfig:o}}),applyConfig:()=>n(x=>({activeConfig:B8(x.currentConfig)}))}),Qt={wheelAnimationState:"idle",winningOutcomeIdx:null},T9=n=>({...Qt,resetWheelSpinState:()=>{n(Qt)},setWheelAnimationState:({newState:x})=>{n({wheelAnimationState:x})},resetWinningOutcomeIdx:()=>{n({winningOutcomeIdx:null})},setWinningOutcomeIdx:({newIdx:x})=>n(f=>{const s=f.activeConfig.outcomes.length;return x===null||x<0||x>=s?{winningOutcomeIdx:null}:{winningOutcomeIdx:x}}),setWinningOutcomeIdxFromTurn:({resultingTurn:x})=>n(f=>{const s=f.activeConfig.outcomes.length;return x<0||x>s?{winningOutcomeIdx:null}:{winningOutcomeIdx:Math.floor(s*(1-x))%s}})}),A9=n=>({currentLocation:"Main",setCurrentLocation:({newLocation:x})=>n(f=>f.wheelAnimationState==="idle"?{currentLocation:x}:f)}),Q=s9()(o9((...n)=>({...v9(...n),...E9(...n),...T9(...n),...A9(...n)}),{name:"Wheel-store",partialize:n=>({savedConfigs:n.savedConfigs})}));function t0(...n){return n.filter(x=>!!x).join(" ")}function j8(n){return typeof n=="number"?[n,n,n,n]:n.length===2?[n[0],n[1],n[0],n[1]]:n}const O9="_button_mgy7f_1",C9="_warning_mgy7f_29",R9="_danger_mgy7f_37",z9="_success_mgy7f_45",D9="_rectangle_mgy7f_54",N9="_rounded_mgy7f_58",U9="_outlined_mgy7f_63",I3={button:O9,default:"_default_mgy7f_21",warning:C9,danger:R9,success:z9,rectangle:D9,rounded:N9,outlined:U9},b0=({variant:n="default",shape:x="rectangle",outlined:f=!1,label:s,children:o,className:d,...M})=>{const _=[I3.button,I3[n],I3[x],f&&I3.outlined,d].filter(Boolean).join(" ");return y.jsxs("button",{className:_,...M,children:[o,s&&y.jsx("span",{children:s})]})},L9="_navbar_1tqfx_1",H9="_navbar_left_1tqfx_19",B9="_navbar_right_1tqfx_26",M8={navbar:L9,navbar_left:H9,navbar_right:B9},q9=()=>{const n=Q(v=>v.currentLocation),x=Q(v=>v.wheelAnimationState),f=Q(v=>v.setCurrentLocation),s=Q(v=>v.resetWinningOutcomeIdx),o=x==="idle";function d(v){o&&(s(),f({newLocation:v}))}const M=y.jsx("div",{className:M8.navbar_left,children:n==="Main"?y.jsx(b0,{variant:"warning",id:"nav-go-to-config-button",name:"Go to the configuration","aria-label":"Go to the configuration",disabled:!o,"aria-disabled":!o,onClick:()=>{d("ConfigForm")},children:"Configure"}):y.jsx(b0,{variant:"warning",id:"nav-go-to-main-button",name:"Go to the Wheel","aria-label":"Go to the Wheel",disabled:x!=="idle","aria-disabled":!o,onClick:()=>{d("Main")},children:"Back"})}),_=y.jsx("div",{className:M8.navbar_right});return y.jsxs("nav",{className:t0(M8.navbar,"glass"),id:"navbar",role:"navigation",children:[M,_]})};function Kt(n){const x=n.element;if(!x)return;const{styleTagRef:f,animationNameRef:s,styleFn:o}=n;f.current&&(document.head.removeChild(f.current),f.current=null),s.current&&(x.classList.remove(s.current),s.current="");const d=`windUp-${Date.now()}`;s.current=d;const M=document.createElement("style");M.innerHTML=o(d),document.head.appendChild(M),f.current=M,x.classList.add(d)}function Jt(n){const x=n.element;if(!x)return;const{styleTagRef:f,animationNameRef:s}=n;f.current&&(document.head.removeChild(f.current),f.current=null),s.current&&(x.classList.remove(s.current),s.current="")}const Y9=5,G9=-.25,X9="steps(25, end)",Z9="cubic-bezier(0.01, 0.5, 0.4, 0.99)",V9=n=>n<=0?0:n*3+1;function Q9(n,x,f){const s=U.useRef(null),o=U.useRef(""),d=U.useRef(null),M=U.useRef(""),_=U.useRef(0),v=U.useCallback(E=>{const S=n.current;!S||x!=="idle"||(f({newState:"windingUp"}),E==null||E(),Kt({element:S,styleTagRef:d,animationNameRef:M,styleFn:L=>`
        @keyframes ${L} {
          to {
            transform: rotate(${_.current+G9}turn);
            filter: brightness(0.6) contrast(1.7) grayscale(100%);
          }
        }

        .${L} {
          animation: ${L} ${Y9}s ${X9} forwards;
        }
      `}))},[n,x,f]),g=U.useCallback(E=>{const S=n.current;S&&(f({newState:"cancelling"}),E==null||E(),Jt({element:S,styleTagRef:d,animationNameRef:M}),Jt({element:S,styleTagRef:s,animationNameRef:o}),f({newState:"idle"}))},[n,f]),T=U.useCallback((E,S,L)=>{const H=n.current;if(!H||E===0||x!=="idle"&&x!=="windingUp")return 0;f({newState:"spinning"}),S==null||S();const C=V9(E);Kt({element:H,styleTagRef:s,animationNameRef:o,styleFn:Y=>`
        @keyframes ${Y} {
          to {
            transform: rotate(${_.current+E}turn);
          }
        }

        .${Y} {
          animation: ${Y} ${C}s ${Z9} forwards;
        }
      `});const V=Math.round(((_.current+E)%1+1)%1*100)/100;return setTimeout(()=>{g(),_.current=V,H.style.transform=`rotate(${V}turn)`,f({newState:"idle"}),L==null||L()},C*1e3),V},[n,g,x,f]);return U.useEffect(()=>()=>{g()},[g]),{windUp:v,cancelAnimations:g,spin:T}}function w7(n){return n*Math.PI/180}function E8(n,x,f,s){const o=w7(s-90);return{x:n+f*Math.cos(o),y:x+f*Math.sin(o)}}function K9(n,x,f){if(n<=0||n>360||x<=0||f<=0)return{maxWidth:0,maxHeight:0};const o=n*Math.PI/180/2,d=Math.tan(o);if(n>=180){const M=1+1/(f*f),_=x/Math.sqrt(M),v=_/f;return{maxWidth:_,maxHeight:v}}else{const M=2*f*d,_=M*x/(1+M),v=_/f*.94;return{maxWidth:_,maxHeight:v}}}function T8(n,x,f,s,o=.1){const M=w7(n)/2,_=f/2,v=2*Math.sin(M)*x,g=f<v;if(n<=0||n>360||x<=0||f<=0||s<=0||!g)return{validHeight:!1,distanceFromApex:0,arcOvershoot:0};const T=Math.sqrt(x**2-_**2),E=S=>s+S-T;if(n>=180){const L=E(0);return{validHeight:g,distanceFromApex:x*o,arcOvershoot:L}}else{const S=Math.max(_/Math.tan(M),x*o),L=E(S);return{validHeight:g,distanceFromApex:S,arcOvershoot:L}}}let A8=null,Ft=null;function J9(){return A8||(A8=document.createElement("canvas"),Ft=A8.getContext("2d")),Ft}function F9({font:n="600 16px Arial",text:x="mmmmmmmmmm",calibratedWidth:f=142.8000030517578}={}){if(!(typeof navigator<"u"&&/firefox/i.test(navigator.userAgent)))return 1;const o=document.createElement("canvas"),d=o.getContext("2d");if(!d)return console.warn("Canvas 2D context not available"),1;d.font=n;const M=d.measureText(x).width;return o.width=0,o.height=0,f/M}function e4(n,x,f,s,o=1){const d=J9();d.font=`${s} ${x} ${f}`;const M=d.measureText(n).width/1,_=d.measureText(n),v=(_.actualBoundingBoxAscent+_.actualBoundingBoxDescent)/1;return{width:Math.ceil(M*o),height:Math.ceil(v*o)}}function W9(n,x,f,s="600",o,d={}){const{ellipsis:M="…",minChars:_=1,rtl:v=!1,position:g="middle"}=d;if(!n||o<=0)return"";const T=O=>e4(O,x,f,s),S=T(M).width;if(o<S)return T(n[0]).width<=o?n[0]:"";if(T(n).width<=o)return n;const H={start:O=>v?n.substring(0,O)+M:M+n.slice(-O),end:O=>v?M+n.slice(-O):n.substring(0,O)+M,middle:O=>{const J=Math.ceil(O/2),r0=Math.floor(O/2);return n.substring(0,J)+M+n.slice(-r0)}};let C=_,V=n.length,Y="";for(;C<=V;){const O=Math.floor((C+V)/2),J=H[g](O);T(J).width<=o?(Y=J,C=O+1):V=O-1}if(!Y&&_>0){const O=H[g](_);if(T(O).width<=o)return O}return Y||""}const Wt=new Map;function I9(n,x,f,s,o,d=1){const _=Math.max(12,Math.ceil(s*.035)),v=e4(n,`${_}px`,x,f,d),g=T8(o,s,v.height,v.width,.16);if(!g.validHeight||g.arcOvershoot>0){const J=v.width-Math.max(0,g.arcOvershoot),r0=W9(n,`${_}px`,x,f,J,{position:"middle"}),F=e4(r0,`${_}px`,x,f,d),l0=T8(o,s,F.height,F.width,.13);return l0.validHeight?{text:r0,fontSize:_,distanceFromApex:l0.distanceFromApex}:{text:"",fontSize:0,distanceFromApex:0}}const T=v.width/v.height,E=K9(o,s,T);let S;const L=`${E.maxHeight}-${x}-${f}-${n}`,H=Wt.get(L);H?S=H:(S=Math.floor(_*(E.maxHeight/v.height)),Wt.set(L,S));const C=e4(n,`${S}px`,x,f,d),V=T8(o,s,C.height,C.width,.1),Y=Math.min(5,-V.arcOvershoot/2),O=V.distanceFromApex-V.arcOvershoot-Y;return{text:n,fontSize:S,distanceFromApex:O}}function P9({text:n,fontFamily:x,containerHeight:f,containerWidth:s,fontWeight:o=600,lineHeight:d=1.25,boxSizing:M="border-box",containerPadding:_=0,childMargin:v=0,childPadding:g=0,wordBreak:T="break-word",whiteSpace:E="normal"}){const S=document.createElement("div");S.style.position="absolute",S.style.visibility="hidden",S.style.boxSizing=M,S.style.width=`${s}px`,S.style.wordBreak=T,S.style.whiteSpace=E;const L=j8(_);S.style.padding=L.map(O=>`${O}px`).join(" ");const H=document.createElement("div");H.style.fontFamily=x,H.style.fontWeight=o.toString(),H.style.lineHeight=d.toString(),H.textContent=n,H.style.margin=j8(v).map(O=>`${O}px`).join(" "),H.style.padding=j8(g).map(O=>`${O}px`).join(" "),S.appendChild(H),document.body.appendChild(S);let C=1,V=Math.min(f,1e3),Y=C;for(;C<=V;){const O=Math.floor((C+V)/2);H.style.fontSize=`${O}px`,S.scrollHeight<=f?(Y=O,C=O+1):V=O-1}return document.body.removeChild(S),Y}const p7=CSS.supports("-moz-appearance","none")||/firefox/i.test(navigator.userAgent);function ex(){const n=navigator.userAgent;return/firefox/i.test(n)?"firefox":/safari/i.test(n)&&!/chrome|chromium|android/i.test(n)?"safari":(/chrome|chromium|crios/i.test(n)&&!/edge|edg|opr|opera/i.test(n),"chrome")}const It=n=>Symbol.iterator in n,Pt=n=>"entries"in n,e7=(n,x)=>{const f=n instanceof Map?n:new Map(n.entries()),s=x instanceof Map?x:new Map(x.entries());if(f.size!==s.size)return!1;for(const[o,d]of f)if(!Object.is(d,s.get(o)))return!1;return!0},ix=(n,x)=>{const f=n[Symbol.iterator](),s=x[Symbol.iterator]();let o=f.next(),d=s.next();for(;!o.done&&!d.done;){if(!Object.is(o.value,d.value))return!1;o=f.next(),d=s.next()}return!!o.done&&!!d.done};function lx(n,x){return Object.is(n,x)?!0:typeof n!="object"||n===null||typeof x!="object"||x===null?!1:!It(n)||!It(x)?e7({entries:()=>Object.entries(n)},{entries:()=>Object.entries(x)}):Pt(n)&&Pt(x)?e7(n,x):ix(n,x)}function K1(n){const x=Q1.useRef(void 0);return f=>{const s=n(f);return lx(x.current,s)?x.current:x.current=s}}function nx({center:n,radius:x,startAngle:f,endAngle:s,browser:o,label:d="",fontFamily:M="Arial",fontWeight:_="600",textScale:v=1}){const g=s-f,T=(f+s)/2,E=U.useMemo(()=>{const O=E8(n.x,n.y,x,s),J=E8(n.x,n.y,x,f),r0=g>180?1:0;return`
        M ${n.x} ${n.y}
        L ${O.x} ${O.y}
        A ${x} ${x} 0 ${r0} 0 ${J.x} ${J.y}
        Z
      `},[f,s,x,n.x,n.y,g]),{text:S,fontSize:L,distanceFromApex:H}=U.useMemo(()=>I9(d,M,_,x,g,v),[d,M,_,x,g,v]),C=U.useMemo(()=>E8(n.x,n.y,H,T),[n.x,n.y,H,T]),V=w9[o][M],Y=p9[o][M];return{describeSector:E,midAngle:T,textPosition:C,textOffsetY:V,text:S,textUnderlineOffset:Y,fontSize:L}}const tx=({center:n,radius:x,startAngle:f,endAngle:s,fillColor:o,textColor:d="#000",label:M="",fontFamily:_="Arial",fontWeight:v="600",browser:g="chrome",textScale:T=1,isHighlighted:E=!1})=>{const{describeSector:S,midAngle:L,textPosition:H,textOffsetY:C,textUnderlineOffset:V,text:Y,fontSize:O}=nx({center:n,radius:x,startAngle:f,endAngle:s,browser:g,label:M,fontFamily:_,fontWeight:v,textScale:T}),J=E?"underline":"";return y.jsxs("g",{children:[y.jsx("path",{d:S,fill:o,stroke:"black",strokeWidth:1,style:{willChange:"transform",transition:"filter 0.5s",filter:`${E?"brightness(1.4)":""}`}}),y.jsx("text",{x:H.x,y:H.y,textAnchor:"start",dominantBaseline:"central",fontFamily:_,fontWeight:v,fontSize:O,dy:C,fill:d,style:{willChange:"transform",textDecoration:J,textUnderlineOffset:V},transform:`rotate(${L-90} ${H.x} ${H.y})`,children:Y})]})},cx=U.memo(tx),rx=({radius:n,wheelContainerRef:x,wheelRef:f})=>{const s=Q(K1(C=>C.activeConfig.outcomes)),o=Q(C=>C.activeConfig.default_palette_idx),d=Q(C=>C.activeConfig.default_fontFamily),M=Q(C=>C.winningOutcomeIdx),_=_1[o],v=d,g=U.useMemo(()=>({x:n,y:n}),[n]),T=p7?F9():1,E=2*n,S=360/s.length,L=U.useMemo(()=>ex(),[]),H=U.useMemo(()=>s.map((C,V)=>{const Y=V*S+90,O=(V+1)*S+90,J=M===V,r0=C.fillColor||_[V%_.length],F=i4(J?N8(r0,1.4):r0);return y.jsx(cx,{center:g,radius:n,startAngle:Y,endAngle:O,label:C.label,fillColor:r0,fontFamily:C.fontFamily||v,browser:L,textColor:F,textScale:T,isHighlighted:J},V)}),[_,v,s,g,n,S,T,M,L]);return y.jsx("div",{ref:x,style:{border:`solid 6px ${_[1%_.length]}`,borderRadius:"50%",padding:"0",height:`${E}px`,position:"relative",overflow:"hidden",pointerEvents:"none",touchAction:"none",userSelect:"none",willChange:"transform"},children:y.jsx("svg",{ref:f,style:{zIndex:0,position:"relative"},width:E,height:E,viewBox:`0 0 ${E} ${E}`,children:H})})},xx=U.memo(rx),yx=[({fillColor:n="#000000",strokeColor:x="#ffffff",shadow:f="drop-shadow(-15px -10px 20px gray)"}={})=>y.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 800 800",children:[y.jsx("g",{strokeWidth:"111",stroke:n,fill:"none",strokeLinecap:"square",transform:"matrix(-0.7071067811865475,0.7071067811865476,-0.7071067811865476,-0.7071067811865475,989.685424949238,399.99999999999994)",style:{filter:`${f}`},children:y.jsx("line",{x1:"372.5",y1:"372.5",x2:"427.5",y2:"427.5",markerEnd:"url(#SvgjsMarker1254)"})}),y.jsx("defs",{children:y.jsx("marker",{markerWidth:"6.5",markerHeight:"6.5",refX:"3.25",refY:"3.25",viewBox:"0 0 6.5 6.5",orient:"auto",id:"SvgjsMarker1254",stroke:x,strokeWidth:"0.1",strokeLinecap:"square",children:y.jsx("polygon",{points:"0,6.5 0,0 6.5,3.25",fill:n})})})]}),({fillColor:n="#000000",strokeColor:x="#ffffff",shadow:f="drop-shadow(-05px 5px 6px black)"}={})=>y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 22 24",transform:"translate(8, 2) rotate(225 0 0)",style:{filter:`${f}`},children:y.jsx("path",{d:"M3,10.714,21,3,13.286,21,12,12Z",fill:n,stroke:x,strokeWidth:"0.1",strokeLinecap:"square"})}),({fillColor:n="#000000",strokeColor:x="#ffffff",shadow:f="drop-shadow(5px 0px 5px gray)"}={})=>y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"-1 -2 20 20",style:{filter:`${f}`},children:y.jsx("g",{transform:"rotate(180 11.914 7.3845)",children:y.jsx("path",{d:"m13.616 2.828 2.585 2.586H0v4h16.143l-2.527 2.526 2.828 2.829 7.384-7.384L16.444 0l-2.828 2.828z",fill:n,stroke:x,strokeWidth:"0.1",strokeLinecap:"square"})})}),({fillColor:n="#000000",strokeColor:x="#ffffff",shadow:f="drop-shadow(4px 0px 3px gray)"}={})=>y.jsxs("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 440 800",transform:"translate(0, -3)",style:{filter:`${f}`},children:[y.jsxs("defs",{children:[y.jsx("marker",{markerWidth:"4",markerHeight:"4",refX:"2.5",refY:"2.5",viewBox:"0 0 5 5",orient:"auto",id:"SvgjsMarker2753",children:y.jsx("polygon",{points:"0,5 0,0 5,2.5",fill:n})}),y.jsx("marker",{markerWidth:"5",markerHeight:"5",refX:"2.5",refY:"2.5",viewBox:"0 0 5 5",orient:"auto",id:"whiteOutlineMarker",children:y.jsx("polygon",{points:"0.65,4.4 0.65,0.6 4.4,2.5",fill:x})})]}),y.jsx("g",{strokeWidth:"69",stroke:"white",fill:"none",strokeLinecap:"square",transform:"rotate(134, 400, 400)",children:y.jsx("line",{x1:"212",y1:"212",x2:"583.5",y2:"583.5",markerEnd:"url(#whiteOutlineMarker)"})}),y.jsx("g",{strokeWidth:"60",stroke:n,fill:"none",strokeLinecap:"square",transform:"rotate(134, 400, 400)",children:y.jsx("line",{x1:"216.5",y1:"216.5",x2:"583.5",y2:"583.5",markerEnd:"url(#SvgjsMarker2753)"})})]}),({fillColor:n="#000000",strokeColor:x="#ffffff",shadow:f="drop-shadow(4px 0px 3px gray)"}={})=>y.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 200 400 400",transform:"translate(-2, -1)",style:{filter:`${f}`},children:[y.jsxs("defs",{children:[y.jsx("marker",{markerWidth:"5",markerHeight:"5",refX:"2.5",refY:"2.5",viewBox:"0 0 5 5",orient:"auto",id:"whiteOutlineMarker",children:y.jsx("polygon",{points:"0.3,4.7 1.8,2.5 0.25,0.27 4.65,2.5",fill:x})}),y.jsx("marker",{markerWidth:"4.5",markerHeight:"4.5",refX:"2.25",refY:"2.25",viewBox:"0 0 4.5 4.5",orient:"auto",id:"SvgjsMarker2209",children:y.jsx("polygon",{points:"0,4.5 1.5,2.25 0,0 4.5,2.25",fill:n})})]}),y.jsx("g",{strokeWidth:"70",stroke:x,fill:"none",strokeLinecap:"square",transform:"matrix(-0.7193398003386512,0.6946583704589971,-0.6946583704589971,-0.7193398003386512,838.5992683190593,411.87257195186163)",children:y.jsx("line",{x1:"325.5",y1:"325.5",x2:"474.5",y2:"474.5",markerEnd:"url(#whiteOutlineMarker)"})}),y.jsx("g",{strokeWidth:"63",stroke:n,fill:"none",strokeLinecap:"square",transform:"matrix(-0.7193398003386512,0.6946583704589971,-0.6946583704589971,-0.7193398003386512,838.5992683190593,411.87257195186163)",children:y.jsx("line",{x1:"325.5",y1:"325.5",x2:"474.5",y2:"474.5",markerEnd:"url(#SvgjsMarker2209)"})})]}),({fillColor:n="#000000",strokeColor:x="#ffffff",shadow:f="drop-shadow(4px 0px 3px gray)"}={})=>y.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"-30 130 600 600",transform:"translate(-1, 0)",style:{filter:`${f}`},children:[y.jsxs("defs",{children:[y.jsx("marker",{markerWidth:"6",markerHeight:"6",refX:"3",refY:"3",viewBox:"0 0 6 6",orient:"auto",id:"whiteOutlineMarker",children:y.jsx("polygon",{points:"0.7,5.2 3,3 0.7,0.8 5.1,3",fill:x})}),y.jsx("marker",{markerWidth:"4.5",markerHeight:"4.5",refX:"2.25",refY:"2.25",viewBox:"0 0 4.5 4.5",orient:"auto",id:"SvgjsMarker4105",children:y.jsx("polygon",{points:"0,4.5 2.25,2.25 0,0 4.5,2.25",fill:n})})]}),y.jsx("g",{strokeWidth:"125",stroke:x,fill:"none",strokeLinecap:"square",transform:"matrix(-0.7071067811865475,0.7071067811865476,-0.7071067811865476,-0.7071067811865475,995.685424949238,413.99999999999994)",children:y.jsx("line",{x1:"274",y1:"274",x2:"526",y2:"526",markerEnd:"url(#whiteOutlineMarker)"})}),y.jsx("g",{strokeWidth:"111",stroke:n,fill:"none",strokeLinecap:"square",transform:"matrix(-0.7071067811865475,0.7071067811865476,-0.7071067811865476,-0.7071067811865475,995.685424949238,413.99999999999994)",children:y.jsx("line",{x1:"274",y1:"274",x2:"526",y2:"526",markerEnd:"url(#SvgjsMarker4105)"})})]}),({fillColor:n="#000000",strokeColor:x="#ffffff",shadow:f="drop-shadow(4px 0px 3px gray)"}={})=>y.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"-20 200 520 470",style:{filter:`${f}`},children:[y.jsxs("defs",{children:[y.jsx("marker",{markerWidth:"6",markerHeight:"6",refX:"3",refY:"3",viewBox:"0 0 6 6",orient:"auto",id:"whiteOutlineMarker",children:y.jsx("polygon",{points:"2.3,5.15 0.9,3 2.3,0.9 5.1,3",fill:x})}),y.jsx("marker",{markerWidth:"4.5",markerHeight:"4.5",refX:"2.25",refY:"2.25",viewBox:"0 0 4.5 4.5",orient:"auto",id:"SvgjsMarker3689",children:y.jsx("polygon",{points:"1.5,4.5 0,2.25 1.5,0 4.5,2.25",fill:n})})]}),y.jsx("g",{strokeWidth:"98",stroke:"white",fill:"none",strokeLinecap:"square",transform:"matrix(-0.7071067811865475,0.7071067811865476,-0.7071067811865476,-0.7071067811865475,897.685424949238,413.99999999999994)",children:y.jsx("line",{x1:"306",y1:"306",x2:"494",y2:"494",markerEnd:"url(#whiteOutlineMarker)"})}),y.jsx("g",{strokeWidth:"87",stroke:n,fill:"none",strokeLinecap:"square",transform:"matrix(-0.7071067811865475,0.7071067811865476,-0.7071067811865476,-0.7071067811865475,897.685424949238,413.99999999999994)",children:y.jsx("line",{x1:"306",y1:"306",x2:"494",y2:"494",markerEnd:"url(#SvgjsMarker3689)"})})]}),({fillColor:n="#000000",strokeColor:x="#ffffff",shadow:f="drop-shadow(4px 0px 3px gray)"}={})=>y.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"-20 150 520 550",style:{filter:`${f}`},children:[y.jsxs("defs",{children:[y.jsx("marker",{markerWidth:"6",markerHeight:"6",refX:"3",refY:"3",viewBox:"0 0 6 6",orient:"auto",id:"whiteOutlineMarker",children:y.jsx("polygon",{points:"1.75,5.15 0.9,3 1.75,0.85 5.1,3",fill:x})}),y.jsx("marker",{markerWidth:"4.5",markerHeight:"4.5",refX:"2.25",refY:"2.25",viewBox:"0 0 4.5 4.5",orient:"auto",id:"SvgjsMarker3780",children:y.jsx("polygon",{points:"0.9,4.5 0,2.25 0.9,0 4.5,2.25",fill:n})})]}),y.jsx("g",{strokeWidth:"99",stroke:x,fill:"none",strokeLinecap:"square",transform:"matrix(-0.7071067811865475,0.7071067811865476,-0.7071067811865476,-0.7071067811865475,902.685424949238,413.99999999999994)",children:y.jsx("line",{x1:"306",y1:"306",x2:"494",y2:"494",markerEnd:"url(#whiteOutlineMarker)"})}),y.jsx("g",{strokeWidth:"89",stroke:n,fill:"none",strokeLinecap:"square",transform:"matrix(-0.7071067811865475,0.7071067811865476,-0.7071067811865476,-0.7071067811865475,902.685424949238,413.99999999999994)",children:y.jsx("line",{x1:"306",y1:"306",x2:"494",y2:"494",markerEnd:"url(#SvgjsMarker3780)"})})]}),({fillColor:n="#000000",strokeColor:x="#ffffff",shadow:f="drop-shadow(-4px -4px 3px gray)"}={})=>y.jsx("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 100 100",transform:"scale(-1 1) rotate(-45 -7 13)",style:{filter:`${f}`},children:y.jsx("path",{strokeWidth:"1",stroke:x,strokeLinecap:"square",fill:n,d:"M2.844 3.009v20.459L14.252 26.508l10.241 10.248 6.781 -3.632 1.721 3.217 -16.833 9.015 23.413 6.476 16.461 16.467 3.949 -1.483 1.282 3.418 -12.781 4.804L95.898 96.484 74.573 49.359l-5.084 13.342 -3.412 -1.3 1.746 -4.584 -4.181 -4.187 -6.5 -23.499 -0.531 0.989 -8.13 15.204 -3.223 -1.721 3.259 -6.098 -9.058 -9.057 -6.457 -23.346 -8.411 15.777 -3.223 -1.715 3.064 -5.744L14.02 3.009z"})}),({fillColor:n="#000000",strokeColor:x="#ffffff",shadow:f="drop-shadow(4px -4px 3px gray)"}={})=>y.jsx("svg",{version:"1.1",id:"_x32_",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 64 64",xmlSpace:"preserve",transform:"rotate(45 8 16)",style:{filter:`${f}`},children:y.jsx("g",{children:y.jsx("path",{strokeWidth:"1",stroke:x,strokeLinecap:"square",fill:n,points:`380.141,162.138 481.76,166.699 512,136.474 381.402,130.59 375.534,0.007 345.31,30.233 
349.854,131.867 347.301,134.42 319.337,162.384 314.792,60.75 284.56,90.983 289.112,192.609 257.527,224.195 251.166,124.376 
221.342,154.201 227.71,254.012 90.698,391.031 56.097,356.431 0,511.993 155.57,455.911 120.969,421.31 257.665,284.614 
361.152,287.321 390.14,258.319 390.47,256.627 288.328,253.943 319.392,222.872 421.025,227.44 451.25,197.216 349.624,192.655 
377.573,164.706 	`,d:"M47.518 20.267L60.22 20.837L64 17.059L47.675 16.324L46.942 0.001L43.164 3.779L43.732 16.483L43.413 16.802L39.917 20.298L39.349 7.594L35.57 11.373L36.139 24.076L32.191 28.024L31.396 15.547L27.668 19.275L28.464 31.752L11.337 48.879L7.012 44.554L0 63.999L19.446 56.989L15.121 52.664L32.208 35.577L45.144 35.915L48.767 32.29L48.809 32.078L36.041 31.743L39.924 27.859L52.628 28.43L56.406 24.652L43.703 24.082L47.197 20.588Z"})})}),({fillColor:n="#000000",strokeColor:x="#ffffff",shadow:f="drop-shadow(-4px 0px 3px gray)"}={})=>y.jsx("svg",{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve",x:"0px",y:"0px",viewBox:"0 0 100 100",transform:"scale(-1 1) translate(-2, -0)",style:{filter:`${f}`},children:y.jsx("path",{strokeWidth:"1",stroke:x,strokeLinecap:"square",fill:n,d:"m99.431 48.989 -13.259 -8.361c-0.478 -0.303 -1.162 -0.255 -1.595 0.112l-6.537 5.547H30.279c-1.316 -2.088 -3.641 -3.479 -6.286 -3.479a7.385 7.385 0 0 0 -3.299 0.775l-9.407 -7.06c-0.209 -0.157 -0.535 -0.366 -0.95 -0.366 -0.4 0 -0.763 0.199 -0.972 0.534 -0.245 0.392 -0.238 0.862 0.022 1.399l2.254 4.641 -9.482 -6.284c-0.302 -0.2 -0.606 -0.301 -0.906 -0.301 -0.397 0 -0.758 0.178 -0.992 0.489 -0.187 0.248 -0.369 0.681 -0.181 1.337l3.309 11.507c0.074 0.259 0.074 0.786 0 1.045L0.08 62.028c-0.189 0.656 -0.006 1.089 0.181 1.337 0.234 0.311 0.596 0.489 0.992 0.489 0.3 0 0.604 -0.101 0.906 -0.301l9.483 -6.284 -2.254 4.642c-0.26 0.536 -0.268 1.007 -0.022 1.399 0.209 0.334 0.573 0.534 0.972 0.534 0.414 0 0.741 -0.209 0.95 -0.366l9.042 -6.786a7.385 7.385 0 0 0 3.664 0.97c2.839 0 5.309 -1.601 6.559 -3.948h47.489l6.538 5.548a1.358 1.358 0 0 0 0.876 0.316 1.337 1.337 0 0 0 0.717 -0.204l13.259 -8.362c0.357 -0.225 0.57 -0.603 0.57 -1.011s-0.214 -0.787 -0.57 -1.011"})}),({fillColor:n="#000000",strokeColor:x="#ffffff",shadow:f="drop-shadow(-4px 0px 3px gray)"}={})=>y.jsx("svg",{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve",x:"0px",y:"0px",viewBox:"0 0 100 100",transform:"scale(-1 1) translate(-2, -1)",style:{filter:`${f}`},children:y.jsx("path",{strokeWidth:"1",stroke:x,strokeLinecap:"square",fill:n,d:"M97.573 47.957c-2.643 -0.934 -8.143 -2.877 -16.407 -11.141 -0.302 -0.303 -0.645 -0.645 -1.173 -0.645a1.125 1.125 0 0 0 -0.905 0.459c-0.364 0.497 -0.207 0.99 -0.025 1.562 0.313 0.985 0.964 3.035 -0.046 4.766 -0.657 1.127 -1.934 1.998 -3.801 2.602 -0.804 -1.132 -1.923 -1.824 -3.178 -1.824 -1.47 0 -2.752 0.949 -3.561 2.443H34.52c-1.221 -1.779 -3.268 -2.948 -5.584 -2.948a6.726 6.726 0 0 0 -3.756 1.141l-5.257 -2.728c-0.687 -0.357 -1.79 -0.625 -2.564 -0.625H1.722c-0.709 0 -1.276 0.311 -1.556 0.853s-0.204 1.184 0.207 1.762l4.344 6.11c0.079 0.11 0.079 0.404 0 0.514L0.373 56.367c-0.411 0.578 -0.486 1.22 -0.207 1.762s0.846 0.853 1.556 0.853H17.359c0.774 0 1.877 -0.269 2.564 -0.625l5.257 -2.728a6.726 6.726 0 0 0 3.756 1.141c2.316 0 4.363 -1.169 5.584 -2.948h33.956c0.809 1.494 2.091 2.443 3.561 2.443 1.255 0 2.374 -0.692 3.178 -1.825 1.867 0.604 3.144 1.475 3.801 2.602 1.01 1.732 0.359 3.781 0.046 4.766 -0.181 0.571 -0.338 1.064 0.025 1.561a1.125 1.125 0 0 0 0.903 0.459h0.003c0.528 0 0.87 -0.343 1.173 -0.645 8.482 -8.482 13.888 -10.316 16.487 -11.197 1.259 -0.427 2.347 -0.796 2.347 -1.986 0 -1.185 -1.07 -1.564 -2.426 -2.042"})}),({fillColor:n="#000000",strokeColor:x="#ffffff",shadow:f="drop-shadow(-4px 0px 3px gray)"}={})=>y.jsx("svg",{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve",x:"0px",y:"0px",viewBox:"0 0 100 100",transform:"matrix(-1,0,0,1,0,0) translate(-2, -1)",style:{filter:`${f}`},children:y.jsx("path",{strokeWidth:"1",stroke:x,strokeLinecap:"square",fill:n,d:"M98.725 48.562c-0.027 -0.009 -2.716 -0.868 -5.299 -1.766 -3.496 -1.215 -12.287 -6.22 -12.376 -6.271 -0.383 -0.219 -0.707 -0.32 -1.018 -0.32 -0.469 0 -0.878 0.238 -1.092 0.637 -0.258 0.479 -0.177 1.043 0.241 1.678l0.787 1.194c-1.431 -0.778 -2.476 -1.373 -2.503 -1.388 -0.383 -0.219 -0.707 -0.321 -1.018 -0.321 -0.469 0 -0.878 0.238 -1.092 0.637 -0.258 0.479 -0.177 1.043 0.241 1.678l1.228 1.861h-42.705c-0.016 -0.012 -0.031 -0.026 -0.048 -0.038l-7.633 -5.157c-0.483 -0.326 -1.227 -0.554 -1.809 -0.554H14.149c-0.528 0 -0.997 0.232 -1.288 0.638 -0.254 0.354 -0.339 0.795 -0.244 1.234H7.736c-0.511 0 -0.957 0.248 -1.192 0.663 -0.201 0.355 -0.218 0.778 -0.055 1.168h-5.262c-0.454 0 -0.855 0.227 -1.071 0.608s-0.206 0.841 0.027 1.231l2.403 4.029L0.182 54.029c-0.233 0.39 -0.243 0.851 -0.027 1.231 0.216 0.381 0.616 0.608 1.071 0.608h5.262c-0.162 0.39 -0.146 0.813 0.055 1.168 0.236 0.415 0.681 0.663 1.192 0.663h4.881c-0.095 0.439 -0.01 0.88 0.244 1.234 0.291 0.405 0.76 0.638 1.288 0.638h10.48c0.583 0 1.326 -0.228 1.809 -0.554l7.633 -5.157c0.017 -0.011 0.032 -0.026 0.048 -0.038h42.705l-1.228 1.861c-0.418 0.634 -0.499 1.198 -0.241 1.678 0.215 0.399 0.623 0.637 1.092 0.637 0.311 0 0.635 -0.102 1.018 -0.321a163.545 163.545 0 0 1 2.504 -1.39l-0.788 1.195c-0.418 0.634 -0.499 1.198 -0.241 1.678 0.215 0.399 0.623 0.637 1.092 0.637 0.311 0 0.635 -0.102 1.018 -0.321 0.089 -0.051 8.977 -5.113 12.51 -6.335 2.548 -0.881 5.134 -1.697 5.159 -1.705 1.153 -0.363 1.279 -1.124 1.279 -1.434 0 -0.31 -0.122 -1.071 -1.275 -1.439"})}),({fillColor:n="#000000",strokeColor:x="#ffffff",shadow:f="drop-shadow(-4px 0px 3px gray)"}={})=>y.jsx("svg",{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve",x:"0px",y:"0px",viewBox:"0 0 100 100",transform:"matrix(-1,0,0,1,0,0) translate(-2, -1)",style:{filter:`${f}`},children:y.jsx("path",{strokeWidth:"1",stroke:x,strokeLinecap:"square",fill:n,d:"M97.573 47.957c-2.643 -0.934 -8.143 -2.877 -16.407 -11.141 -0.302 -0.303 -0.645 -0.645 -1.173 -0.645a1.125 1.125 0 0 0 -0.905 0.459c-0.364 0.497 -0.207 0.99 -0.025 1.562 0.313 0.985 0.964 3.035 -0.046 4.766 -0.657 1.127 -1.934 1.998 -3.801 2.602 -0.804 -1.132 -1.923 -1.824 -3.178 -1.824 -1.47 0 -2.752 0.949 -3.561 2.443H34.52c-1.221 -1.779 -3.268 -2.948 -5.584 -2.948a6.726 6.726 0 0 0 -3.756 1.141l-5.257 -2.728c-0.687 -0.357 -1.79 -0.625 -2.564 -0.625H1.722c-0.709 0 -1.276 0.311 -1.556 0.853s-0.204 1.184 0.207 1.762l4.344 6.11c0.079 0.11 0.079 0.404 0 0.514L0.373 56.367c-0.411 0.578 -0.486 1.22 -0.207 1.762s0.846 0.853 1.556 0.853H17.359c0.774 0 1.877 -0.269 2.564 -0.625l5.257 -2.728a6.726 6.726 0 0 0 3.756 1.141c2.316 0 4.363 -1.169 5.584 -2.948h33.956c0.809 1.494 2.091 2.443 3.561 2.443 1.255 0 2.374 -0.692 3.178 -1.825 1.867 0.604 3.144 1.475 3.801 2.602 1.01 1.732 0.359 3.781 0.046 4.766 -0.181 0.571 -0.338 1.064 0.025 1.561a1.125 1.125 0 0 0 0.903 0.459h0.003c0.528 0 0.87 -0.343 1.173 -0.645 8.482 -8.482 13.888 -10.316 16.487 -11.197 1.259 -0.427 2.347 -0.796 2.347 -1.986 0 -1.185 -1.07 -1.564 -2.426 -2.042"})})],ax=yx[0],sx=({size:n,ref:x})=>{const f=Q(s=>s.activeConfig.default_palette_idx);return y.jsx("div",{style:{position:"absolute",right:`-${n/2.5}px`,top:`calc(${n*6+2}px )`,transform:`translate(50%, -${n/2.5}px)`,lineHeight:"initial",width:`${n}px`,aspectRatio:1},ref:x,children:ax({strokeColor:F6(f,1)})})},fx=[({color0:n="#000"})=>y.jsx("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"-5.5 -6 75 75",xmlSpace:"preserve",children:y.jsxs("g",{transform:"translate(0, 63.5) scale(1, -1)",children:[y.jsx("path",{fill:n,d:"M50.491 13.513c-3.449 -3.449 -7.862 -5.945 -12.807 -7.036L38.023 0 25.243 6.733 21.83 8.54l-0.633 0.332 1.01 0.541 4.77 2.568 10.129 5.45 0.285 -5.357c3.533 0.943 6.68 2.816 9.203 5.33 3.743 3.742 6.045 8.89 6.045 14.597 0 2.926 -0.605 5.697 -1.697 8.211l5.046 2.192c1.385 -3.183 2.155 -6.705 2.155 -10.402 0.01 -7.212 -2.926 -13.763 -7.651 -18.488"}),y.jsx("path",{fill:n,d:"m37.032 52.019 -10.138 -5.452 -0.284 5.359c-3.533 -0.944 -6.689 -2.816 -9.202 -5.33 -3.743 -3.744 -6.045 -8.89 -6.045 -14.596 0 -2.928 0.606 -5.69 1.697 -8.212l-5.046 -2.191c-1.385 3.191 -2.155 6.715 -2.155 10.403 0 7.21 2.926 13.77 7.651 18.487 3.449 3.449 7.862 5.944 12.807 7.025l-0.34 6.487 12.771 -6.735 3.432 -1.807 0.624 -0.33 -1 -0.541z"})]})}),({color0:n="#000"})=>y.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"-36 -36 590 590",xmlSpace:"preserve",transform:"matrix(-1,0,0,1,0,0) scale(0.9, 0.9)",children:[y.jsx("g",{fill:n,children:y.jsx("g",{children:y.jsx("path",{d:"M512,104.931l-92.326-12.599l-12.633,92.334l34.629-26.307c15.775,29.965,24.092,63.481,24.092,97.64 c0,115.662-94.098,209.76-209.76,209.76v43.399c139.592,0,253.159-113.567,253.159-253.159c0-43.636-11.247-86.421-32.539-124.193 L512,104.931z"})})}),y.jsx("g",{fill:n,children:y.jsx("g",{children:y.jsx("path",{d:"M2.841,256.001c0,43.634,11.247,86.421,32.539,124.191L0,407.069l92.326,12.599l12.633-92.332L70.332,353.64 c-15.775-29.967-24.093-63.479-24.093-97.638C46.24,140.339,140.338,46.241,256,46.241V2.842 C116.408,2.842,2.841,116.409,2.841,256.001z"})})})]}),({color0:n="#000"})=>y.jsxs("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve",viewBox:"0 0 1 1",transform:"scale(0.7 0.7)",children:[y.jsx("path",{width:"16",height:"16",id:"icon-bound",fill:"none",d:"M0 0H1V1H0V0z"}),y.jsx("path",{fill:n,d:"M0.875 0v0.169A0.499 0.499 0 0 0 0.5 0C0.224 0 0 0.224 0 0.5s0.224 0.5 0.5 0.5 0.5 -0.224 0.5 -0.5h-0.125c0 0.1 -0.039 0.194 -0.11 0.265S0.6 0.875 0.5 0.875s-0.194 -0.039 -0.265 -0.11C0.164 0.694 0.125 0.6 0.125 0.5s0.039 -0.194 0.11 -0.265C0.306 0.164 0.4 0.125 0.5 0.125a0.373 0.373 0 0 1 0.28 0.125H0.625v0.125h0.375V0z"})]}),({color0:n="#000"})=>y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"-1 3 65 64",xmlSpace:"preserve",transform:"scale(0.9 0.9) rotate(90)",children:y.jsx("g",{children:y.jsx("path",{fill:n,d:"m48.702 11.019 -6.833 9.759c0.823 0.579 1.589 1.216 2.296 1.925 3.13 3.132 5.043 7.4 5.047 12.172 -0.004 4.772 -1.917 9.032 -5.047 12.168 -3.128 3.122 -7.396 5.039 -12.162 5.039a17.2 17.2 0 0 1 -7.275 -1.607 14.5 14.5 0 0 1 -1.329 -0.701c-0.439 -0.249 -0.859 -0.523 -1.262 -0.806 -0.825 -0.575 -1.591 -1.22 -2.306 -1.925 -3.122 -3.136 -5.039 -7.396 -5.039 -12.168s1.917 -9.04 5.039 -12.172c2.086 -2.082 4.679 -3.623 7.594 -4.423v5.133l11.567 -11.704L27.425 0v6.107C13.513 8.307 2.881 20.343 2.879 34.875c0.002 9.866 4.911 18.586 12.423 23.852a30.875 30.875 0 0 0 2.138 1.367c0.733 0.416 1.481 0.815 2.254 1.175 3.737 1.744 7.905 2.724 12.309 2.731 16.088 -0.01 29.116 -13.038 29.118 -29.125 0 -9.873 -4.909 -18.585 -12.419 -23.856"})})})],ux=[({color0:n="#000"})=>y.jsx("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"-4 -5 74 74",xmlSpace:"preserve",children:y.jsxs("g",{transform:"translate(63.5, 3.5) scale(-0.9, 0.9)",children:[y.jsx("path",{fill:n,d:"M33.519 1.519c-0.897 0 -1.789 0.039 -2.672 0.116l0.613 7.07h0.002a24.125 24.125 0 0 1 2.057 -0.087c6.468 0.002 12.291 2.611 16.534 6.848 4.237 4.244 6.848 10.067 6.848 16.535s-2.611 12.291 -6.848 16.534c-4.243 4.237 -10.066 6.846 -16.534 6.848 -6.468 -0.002 -12.291 -2.611 -16.534 -6.848 -2.28 -2.283 -4.066 -5.035 -5.252 -8.087l3.888 -0.547 -10.029 -14.656 -2.241 6.756h-0.311c0 0.274 0.033 0.54 0.041 0.813L0 42.096l4.552 -0.639c3.981 12.201 15.436 21.024 28.967 21.025C50.355 62.48 63.998 48.836 64 32.001c-0.002 -16.836 -13.645 -30.48 -30.481 -30.481"}),y.jsx("path",{fill:n,d:"M14.13 18.928a24.25 24.25 0 0 1 1.224 -1.655l-5.518 -4.463c-0.558 0.69 -1.09 1.404 -1.59 2.146l5.881 3.972z"}),y.jsx("path",{fill:n,d:"M24.22 10.539a23.25 23.25 0 0 1 3.537 -1.206L26.015 2.451a30.25 30.25 0 0 0 -4.621 1.577l2.826 6.51v0.001z"}),y.jsx("path",{fill:n,d:"m20.919 12.302 -3.833 -5.976a30.375 30.375 0 0 0 -3.882 2.952l4.732 5.29a23.375 23.375 0 0 1 2.982 -2.266"})]})}),({color0:n="#000"})=>y.jsxs("svg",{viewBox:"-0.2 -0.2 1.4 1.4",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",transform:"scale(-0.94,-0.94)",children:[y.jsx("path",{width:"16",height:"16",id:"icon-bound",fill:"none",d:"M0 0H1V1H0V0z"}),y.jsx("path",{fill:n,d:"M0 0v0.375h0.375V0.25H0.221q0.007 -0.008 0.014 -0.015C0.306 0.164 0.4 0.125 0.5 0.125s0.194 0.039 0.265 0.11C0.836 0.306 0.875 0.4 0.875 0.5s-0.039 0.194 -0.11 0.265A0.373 0.373 0 0 1 0.5 0.875v0.125c0.276 0 0.5 -0.224 0.5 -0.5s-0.224 -0.5 -0.5 -0.5a0.499 0.499 0 0 0 -0.375 0.169V0z"})]})],ox=[({color0:n="#000"})=>y.jsxs("svg",{fill:n,viewBox:"-80.08 -80.08 1161.16 1161.16",xmlns:"http://www.w3.org/2000/svg",children:[y.jsx("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),y.jsx("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),y.jsx("g",{id:"SVGRepo_iconCarrier",children:y.jsx("path",{d:"M497.571 0c-113.684 .267 -227.301 38.887 -319.725 115.892l.188 .188c172.901 -140.335 427.481 -130.06 588.398 30.857 133.878 133.876 163.485 332.604 88.85 495.173 -10.186 29.288 -5.523 50.219 11.974 67.716 20.709 20.709 60.696 23.151 83.847 0 2.643 -2.643 12.187 -14.411 14.694 -24.041 70.849 -180.224 33.479 -393.197 -112.171 -538.846 -98.281 -98.282 -227.211 -147.238 -356.052 -146.935zm-408.137 273.706c-14.532 .36 -29.101 5.592 -39.954 16.445 -2.643 2.644 -12.187 14.41 -14.694 24.041 -70.849 180.223 -33.479 393.197 112.171 538.846 185.003 185.003 478.607 195.322 675.778 31.044l-.188 -.188c-172.901 140.336 -427.481 130.06 -588.398 -30.857 -133.876 -133.878 -163.485 -332.603 -88.85 -495.173 10.186 -29.287 5.523 -50.219 -11.974 -67.716 -11.002 -11.002 -27.423 -16.852 -43.893 -16.445z"})})]}),({color0:n="#000",color1:x="#fff"})=>y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",xmlnsXlink:"http://www.w3.org/1999/xlink","xmlns-svgjs":"http://svgjs.dev/svgjs",viewBox:"0 0 800 800",children:y.jsx("g",{transform:"translate(800, 0) scale(-1, 1)",children:y.jsxs("g",{fill:n,transform:"matrix(2.2,0,0,2.2,-477,-477) ",children:[y.jsx("circle",{r:"2.5",cx:"405",cy:"400"}),y.jsx("circle",{fill:x,r:"2.5",cx:"405",cy:"403"}),y.jsx("circle",{r:"2.5",cx:"402",cy:"406"}),y.jsx("circle",{fill:x,r:"2.5",cx:"398",cy:"407"}),y.jsx("circle",{r:"2.5",cx:"394",cy:"404"}),y.jsx("circle",{fill:x,r:"2.5",cx:"392",cy:"400"}),y.jsx("circle",{r:"2.5",cx:"393",cy:"394"}),y.jsx("circle",{fill:x,r:"3",cx:"398",cy:"391"}),y.jsx("circle",{r:"3",cx:"404",cy:"391"}),y.jsx("circle",{fill:x,r:"3",cx:"409",cy:"395"}),y.jsx("circle",{r:"3",cx:"411",cy:"401"}),y.jsx("circle",{fill:x,r:"3",cx:"409",cy:"408"}),y.jsx("circle",{r:"3",cx:"402",cy:"412"}),y.jsx("circle",{fill:x,r:"3",cx:"394",cy:"412"}),y.jsx("circle",{r:"3",cx:"388",cy:"406"}),y.jsx("circle",{fill:x,r:"3",cx:"386",cy:"397"}),y.jsx("circle",{r:"3",cx:"390",cy:"389"}),y.jsx("circle",{fill:x,r:"3",cx:"398",cy:"384"}),y.jsx("circle",{r:"3",cx:"408",cy:"386"}),y.jsx("circle",{fill:x,r:"3",cx:"416",cy:"393"}),y.jsx("circle",{r:"3.5",cx:"417",cy:"404"}),y.jsx("circle",{fill:x,r:"3.5",cx:"412",cy:"414"}),y.jsx("circle",{r:"3.5",cx:"401",cy:"419"}),y.jsx("circle",{fill:x,r:"3.5",cx:"389",cy:"416"}),y.jsx("circle",{r:"3.5",cx:"381",cy:"407"}),y.jsx("circle",{fill:x,r:"3.5",cx:"380",cy:"394"}),y.jsx("circle",{r:"3.5",cx:"387",cy:"383"}),y.jsx("circle",{fill:x,r:"3.5",cx:"400",cy:"378"}),y.jsx("circle",{r:"3.5",cx:"414",cy:"382"}),y.jsx("circle",{fill:x,r:"3.5",cx:"423",cy:"393"}),y.jsx("circle",{r:"3.5",cx:"423",cy:"408"}),y.jsx("circle",{fill:x,r:"3.5",cx:"414",cy:"421"}),y.jsx("circle",{r:"4",cx:"398",cy:"425"}),y.jsx("circle",{fill:x,r:"4",cx:"383",cy:"420"}),y.jsx("circle",{r:"4",cx:"374",cy:"406"}),y.jsx("circle",{fill:x,r:"4",cx:"375",cy:"389"}),y.jsx("circle",{r:"4",cx:"386",cy:"376"}),y.jsx("circle",{fill:x,r:"4",cx:"403",cy:"372"}),y.jsx("circle",{r:"4",cx:"420",cy:"379"}),y.jsx("circle",{fill:x,r:"4",cx:"430",cy:"395"}),y.jsx("circle",{r:"4",cx:"427",cy:"414"}),y.jsx("circle",{fill:x,r:"4",cx:"414",cy:"428"}),y.jsx("circle",{r:"4",cx:"394",cy:"431"}),y.jsx("circle",{fill:x,r:"4",cx:"376",cy:"422"}),y.jsx("circle",{r:"4",cx:"367",cy:"404"}),y.jsx("circle",{fill:x,r:"4.5",cx:"371",cy:"383"}),y.jsx("circle",{r:"4.5",cx:"386",cy:"368"}),y.jsx("circle",{fill:x,r:"4.5",cx:"408",cy:"366"}),y.jsx("circle",{r:"4.5",cx:"427",cy:"377"}),y.jsx("circle",{fill:x,r:"4.5",cx:"436",cy:"398"}),y.jsx("circle",{r:"4.5",cx:"431",cy:"420"}),y.jsx("circle",{fill:x,r:"4.5",cx:"413",cy:"435"}),y.jsx("circle",{r:"4.5",cx:"389",cy:"437"}),y.jsx("circle",{fill:x,r:"4.5",cx:"369",cy:"423"}),y.jsx("circle",{r:"4.5",cx:"360",cy:"400"}),y.jsx("circle",{fill:x,r:"4.5",cx:"368",cy:"376"}),y.jsx("circle",{r:"4.5",cx:"388",cy:"361"}),y.jsx("circle",{fill:x,r:"4.5",cx:"414",cy:"361"}),y.jsx("circle",{r:"5",cx:"435",cy:"377"}),y.jsx("circle",{fill:x,r:"5",cx:"443",cy:"403"}),y.jsx("circle",{r:"5",cx:"433",cy:"428"}),y.jsx("circle",{fill:x,r:"5",cx:"410",cy:"443"}),y.jsx("circle",{r:"5",cx:"382",cy:"441"}),y.jsx("circle",{fill:x,r:"5",cx:"361",cy:"423"}),y.jsx("circle",{r:"5",cx:"354",cy:"395"}),y.jsx("circle",{fill:x,r:"5",cx:"366",cy:"368"}),y.jsx("circle",{r:"5",cx:"392",cy:"353"}),y.jsx("circle",{fill:x,r:"5",cx:"422",cy:"357"}),y.jsx("circle",{r:"5",cx:"443",cy:"378"}),y.jsx("circle",{fill:x,r:"5",cx:"448",cy:"409"}),y.jsx("circle",{r:"5.5",cx:"434",cy:"436"}),y.jsx("circle",{fill:x,r:"5.5",cx:"406",cy:"450"}),y.jsx("circle",{r:"5.5",cx:"374",cy:"444"}),y.jsx("circle",{fill:x,r:"5.5",cx:"352",cy:"420"}),y.jsx("circle",{r:"5.5",cx:"349",cy:"388"}),y.jsx("circle",{fill:x,r:"5.5",cx:"366",cy:"359"}),y.jsx("circle",{r:"5.5",cx:"397",cy:"346"}),y.jsx("circle",{fill:x,r:"5.5",cx:"430",cy:"355"}),y.jsx("circle",{r:"5.5",cx:"452",cy:"381"}),y.jsx("circle",{fill:x,r:"5.5",cx:"453",cy:"416"}),y.jsx("circle",{r:"5.5",cx:"433",cy:"445"}),y.jsx("circle",{fill:x,r:"5.5",cx:"400",cy:"457"}),y.jsx("circle",{r:"5.5",cx:"366",cy:"446"}),y.jsx("circle",{fill:x,r:"6",cx:"344",cy:"416"}),y.jsx("circle",{r:"6",cx:"345",cy:"380"}),y.jsx("circle",{fill:x,r:"6",cx:"368",cy:"350"}),y.jsx("circle",{r:"6",cx:"404",cy:"340"}),y.jsx("circle",{fill:x,r:"6",cx:"439",cy:"354"}),y.jsx("circle",{r:"6",cx:"460",cy:"386"}),y.jsx("circle",{fill:x,r:"6",cx:"457",cy:"425"}),y.jsx("circle",{r:"6",cx:"431",cy:"454"}),y.jsx("circle",{fill:x,r:"6",cx:"392",cy:"463"}),y.jsx("circle",{r:"6",cx:"356",cy:"446"}),y.jsx("circle",{fill:x,r:"6",cx:"336",cy:"411"}),y.jsx("circle",{r:"6",cx:"342",cy:"371"}),y.jsx("circle",{fill:x,r:"6",cx:"371",cy:"341"}),y.jsx("circle",{r:"6.5",cx:"412",cy:"335"}),y.jsx("circle",{fill:x,r:"6.5",cx:"449",cy:"354"}),y.jsx("circle",{r:"6.5",cx:"467",cy:"392"}),y.jsx("circle",{fill:x,r:"6.5",cx:"459",cy:"434"}),y.jsx("circle",{r:"6.5",cx:"427",cy:"463"}),y.jsx("circle",{fill:x,r:"6.5",cx:"384",cy:"468"}),y.jsx("circle",{r:"6.5",cx:"346",cy:"445"}),y.jsx("circle",{fill:x,r:"6.5",cx:"329",cy:"404"}),y.jsx("circle",{r:"6.5",cx:"340",cy:"360"}),y.jsx("circle",{fill:x,r:"6.5",cx:"376",cy:"332"}),y.jsx("circle",{r:"6.5",cx:"421",cy:"330"}),y.jsx("circle",{fill:x,r:"6.5",cx:"459",cy:"356"}),y.jsx("circle",{r:"6.5",cx:"474",cy:"400"}),y.jsx("circle",{fill:x,r:"7",cx:"460",cy:"445"}),y.jsx("circle",{r:"7",cx:"421",cy:"472"}),y.jsx("circle",{fill:x,r:"7",cx:"374",cy:"471"}),y.jsx("circle",{r:"7",cx:"336",cy:"442"}),y.jsx("circle",{fill:x,r:"7",cx:"323",cy:"395"}),y.jsx("circle",{r:"7",cx:"341",cy:"350"}),y.jsx("circle",{fill:x,r:"7",cx:"382",cy:"323"}),y.jsx("circle",{r:"7",cx:"432",cy:"327"}),y.jsx("circle",{fill:x,r:"7",cx:"469",cy:"360"}),y.jsx("circle",{r:"7",cx:"480",cy:"410"}),y.jsx("circle",{fill:x,r:"7",cx:"459",cy:"456"}),y.jsx("circle",{r:"7",cx:"414",cy:"481"}),y.jsx("circle",{fill:x,r:"7.5",cx:"363",cy:"473"}),y.jsx("circle",{r:"7.5",cx:"326",cy:"437"}),y.jsx("circle",{fill:x,r:"7.5",cx:"318",cy:"385"}),y.jsx("circle",{r:"7.5",cx:"342",cy:"338"}),y.jsx("circle",{fill:x,r:"7.5",cx:"391",cy:"316"}),y.jsx("circle",{r:"7.5",cx:"443",cy:"326"}),y.jsx("circle",{fill:x,r:"7.5",cx:"479",cy:"366"}),y.jsx("circle",{r:"7.5",cx:"484",cy:"421"}),y.jsx("circle",{fill:x,r:"7.5",cx:"456",cy:"467"}),y.jsx("circle",{r:"7.5",cx:"405",cy:"488"}),y.jsx("circle",{fill:x,r:"7.5",cx:"351",cy:"474"}),y.jsx("circle",{r:"7.5",cx:"316",cy:"430"}),y.jsx("circle",{fill:x,r:"7.5",cx:"314",cy:"374"}),y.jsx("circle",{r:"8",cx:"346",cy:"327"}),y.jsx("circle",{fill:x,r:"8",cx:"401",cy:"309"}),y.jsx("circle",{r:"8",cx:"455",cy:"327"}),y.jsx("circle",{fill:x,r:"8",cx:"489",cy:"374"}),y.jsx("circle",{r:"8",cx:"487",cy:"432"}),y.jsx("circle",{fill:x,r:"8",cx:"451",cy:"479"}),y.jsx("circle",{r:"8",cx:"394",cy:"494"}),y.jsx("circle",{fill:x,r:"8",cx:"338",cy:"473"}),y.jsx("circle",{r:"8",cx:"307",cy:"422"}),y.jsx("circle",{fill:x,r:"8",cx:"312",cy:"361"}),y.jsx("circle",{r:"8",cx:"352",cy:"316"}),y.jsx("circle",{fill:x,r:"8",cx:"412",cy:"303"}),y.jsx("circle",{r:"8",cx:"468",cy:"329"}),y.jsx("circle",{fill:x,r:"8.5",cx:"498",cy:"383"}),y.jsx("circle",{r:"8.5",cx:"489",cy:"445"}),y.jsx("circle",{fill:x,r:"8.5",cx:"444",cy:"490"}),y.jsx("circle",{r:"8.5",cx:"382",cy:"499"}),y.jsx("circle",{fill:x,r:"8.5",cx:"326",cy:"469"}),y.jsx("circle",{r:"8.5",cx:"298",cy:"411"}),y.jsx("circle",{fill:x,r:"8.5",cx:"311",cy:"348"}),y.jsx("circle",{r:"8.5",cx:"360",cy:"305"}),y.jsx("circle",{fill:x,r:"8.5",cx:"425",cy:"299"}),y.jsx("circle",{r:"8.5",cx:"481",cy:"333"}),y.jsx("circle",{fill:x,r:"8.5",cx:"505",cy:"395"}),y.jsx("circle",{r:"8.5",cx:"488",cy:"459"}),y.jsx("circle",{fill:x,r:"8.5",cx:"436",cy:"501"}),y.jsx("circle",{r:"9",cx:"368",cy:"503"}),y.jsx("circle",{fill:x,r:"9",cx:"313",cy:"464"}),y.jsx("circle",{r:"9",cx:"291",cy:"399"}),y.jsx("circle",{fill:x,r:"9",cx:"313",cy:"334"}),y.jsx("circle",{r:"9",cx:"369",cy:"294"}),y.jsx("circle",{fill:x,r:"9",cx:"439",cy:"296"}),y.jsx("circle",{r:"9",cx:"493",cy:"340"}),y.jsx("circle",{fill:x,r:"9",cx:"512",cy:"407"}),y.jsx("circle",{r:"9",cx:"486",cy:"473"}),y.jsx("circle",{fill:x,r:"9",cx:"425",cy:"510"}),y.jsx("circle",{r:"9",cx:"354",cy:"504"}),y.jsx("circle",{fill:x,r:"9",cx:"300",cy:"456"}),y.jsx("circle",{r:"9.5",cx:"286",cy:"386"}),y.jsx("circle",{fill:x,r:"9.5",cx:"316",cy:"320"}),y.jsx("circle",{r:"9.5",cx:"381",cy:"285"}),y.jsx("circle",{fill:x,r:"9.5",cx:"453",cy:"296"}),y.jsx("circle",{r:"9.5",cx:"506",cy:"348"}),y.jsx("circle",{fill:x,r:"9.5",cx:"516",cy:"421"}),y.jsx("circle",{r:"9.5",cx:"481",cy:"487"}),y.jsx("circle",{fill:x,r:"9.5",cx:"413",cy:"519"}),y.jsx("circle",{r:"9.5",cx:"339",cy:"504"}),y.jsx("circle",{fill:x,r:"9.5",cx:"289",cy:"447"}),y.jsx("circle",{r:"9.5",cx:"282",cy:"371"}),y.jsx("circle",{fill:x,r:"9.5",cx:"322",cy:"306"}),y.jsx("circle",{r:"9.5",cx:"394",cy:"277"}),y.jsx("circle",{fill:x,r:"10",cx:"469",cy:"297"}),y.jsx("circle",{r:"10",cx:"517",cy:"359"}),y.jsx("circle",{fill:x,r:"10",cx:"519",cy:"437"}),y.jsx("circle",{r:"10",cx:"474",cy:"501"}),y.jsx("circle",{fill:x,r:"10",cx:"399",cy:"526"}),y.jsx("circle",{r:"10",cx:"324",cy:"501"}),y.jsx("circle",{fill:x,r:"10",cx:"278",cy:"435"}),y.jsx("circle",{r:"10",cx:"280",cy:"355"}),y.jsx("circle",{fill:x,r:"10",cx:"330",cy:"292"}),y.jsx("circle",{r:"10",cx:"409",cy:"271"}),y.jsx("circle",{fill:x,r:"10",cx:"484",cy:"301"}),y.jsx("circle",{r:"10",cx:"527",cy:"371"}),y.jsx("circle",{fill:x,r:"10",cx:"520",cy:"453"}),y.jsx("circle",{r:"10.5",cx:"465",cy:"515"}),y.jsx("circle",{fill:x,r:"10.5",cx:"383",cy:"531"}),y.jsx("circle",{r:"10.5",cx:"308",cy:"496"}),y.jsx("circle",{fill:x,r:"10.5",cx:"268",cy:"422"}),y.jsx("circle",{r:"10.5",cx:"281",cy:"339"}),y.jsx("circle",{fill:x,r:"10.5",cx:"341",cy:"279"}),y.jsx("circle",{r:"10.5",cx:"425",cy:"267"}),y.jsx("circle",{fill:x,r:"10.5",cx:"500",cy:"307"}),y.jsx("circle",{r:"10.5",cx:"536",cy:"385"}),y.jsx("circle",{fill:x,r:"10.5",cx:"518",cy:"470"}),y.jsx("circle",{r:"10.5",cx:"453",cy:"527"}),y.jsx("circle",{fill:x,r:"10.5",cx:"367",cy:"535"}),y.jsx("circle",{r:"11",cx:"292",cy:"489"}),y.jsx("circle",{fill:x,r:"11",cx:"260",cy:"407"}),y.jsx("circle",{r:"11",cx:"283",cy:"322"}),y.jsx("circle",{fill:x,r:"11",cx:"353",cy:"267"}),y.jsx("circle",{r:"11",cx:"442",cy:"264"}),y.jsx("circle",{fill:x,r:"11",cx:"515",cy:"316"}),y.jsx("circle",{r:"11",cx:"543",cy:"401"}),y.jsx("circle",{fill:x,r:"11",cx:"515",cy:"487"}),y.jsx("circle",{r:"11",cx:"440",cy:"539"}),y.jsx("circle",{fill:x,r:"11",cx:"349",cy:"536"}),y.jsx("circle",{r:"11",cx:"277",cy:"479"}),y.jsx("circle",{fill:x,r:"11",cx:"254",cy:"390"}),y.jsx("circle",{r:"11",cx:"288",cy:"304"}),y.jsx("circle",{fill:x,r:"11.5",cx:"367",cy:"256"}),y.jsx("circle",{r:"11.5",cx:"460",cy:"264"}),y.jsx("circle",{fill:x,r:"11.5",cx:"530",cy:"327"}),y.jsx("circle",{r:"11.5",cx:"548",cy:"419"}),y.jsx("circle",{fill:x,r:"11.5",cx:"508",cy:"504"}),y.jsx("circle",{r:"11.5",cx:"425",cy:"549"}),y.jsx("circle",{fill:x,r:"11.5",cx:"331",cy:"535"}),y.jsx("circle",{r:"11.5",cx:"263",cy:"467"}),y.jsx("circle",{fill:x,r:"11.5",cx:"250",cy:"372"}),y.jsx("circle",{r:"11.5",cx:"296",cy:"287"}),y.jsx("circle",{fill:x,r:"11.5",cx:"384",cy:"247"}),y.jsx("circle",{r:"11.5",cx:"479",cy:"267"}),y.jsx("circle",{fill:x,r:"11.5",cx:"543",cy:"340"}),y.jsx("circle",{r:"12",cx:"551",cy:"438"}),y.jsx("circle",{fill:x,r:"12",cx:"499",cy:"521"}),y.jsx("circle",{r:"12",cx:"407",cy:"557"}),y.jsx("circle",{fill:x,r:"12",cx:"312",cy:"531"}),y.jsx("circle",{r:"12",cx:"250",cy:"453"}),y.jsx("circle",{fill:x,r:"12",cx:"248",cy:"353"}),y.jsx("circle",{r:"12",cx:"306",cy:"271"}),y.jsx("circle",{fill:x,r:"12",cx:"402",cy:"239"}),y.jsx("circle",{r:"12",cx:"498",cy:"272"}),y.jsx("circle",{fill:x,r:"12",cx:"556",cy:"355"}),y.jsx("circle",{r:"12",cx:"552",cy:"457"}),y.jsx("circle",{fill:x,r:"12",cx:"488",cy:"537"}),y.jsx("circle",{r:"12",cx:"389",cy:"563"}),y.jsx("circle",{fill:x,r:"12.5",cx:"293",cy:"525"}),y.jsx("circle",{r:"12.5",cx:"239",cy:"436"}),y.jsx("circle",{fill:x,r:"12.5",cx:"249",cy:"333"}),y.jsx("circle",{r:"12.5",cx:"319",cy:"255"}),y.jsx("circle",{fill:x,r:"12.5",cx:"421",cy:"234"}),y.jsx("circle",{r:"12.5",cx:"516",cy:"279"})]})})}),({color0:n="#000",color1:x="#fff"})=>y.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",xmlnsXlink:"http://www.w3.org/1999/xlink","xmlns-svgjs":"http://svgjs.dev/svgjs",viewBox:"0 0 800 800",children:[y.jsx("defs",{children:y.jsxs("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"cccoil-grad",children:[y.jsx("stop",{stopColor:x,stopOpacity:"1",offset:"0%"}),y.jsx("stop",{stopColor:n,stopOpacity:"1",offset:"100%"})]})}),y.jsxs("g",{stroke:"url(#cccoil-grad)",fill:"none",strokeLinecap:"square",children:[y.jsx("circle",{r:"364",cx:"400",cy:"400",strokeWidth:"20",strokeDasharray:"1509 2287",transform:"rotate(360, 400, 400)"}),y.jsx("circle",{r:"318.5",cx:"400",cy:"400",strokeWidth:"20",strokeDasharray:"1132 2001",transform:"rotate(309, 400, 400)"}),y.jsx("circle",{r:"273",cx:"400",cy:"400",strokeWidth:"20",strokeDasharray:"809 1715",transform:"rotate(257, 400, 400)"}),y.jsx("circle",{r:"227.5",cx:"400",cy:"400",strokeWidth:"20",strokeDasharray:"539 1429",transform:"rotate(206, 400, 400)"}),y.jsx("circle",{r:"182",cx:"400",cy:"400",strokeWidth:"20",strokeDasharray:"323 1144",transform:"rotate(154, 400, 400)"}),y.jsx("circle",{r:"136.5",cx:"400",cy:"400",strokeWidth:"20",strokeDasharray:"162 858",transform:"rotate(103, 400, 400)"}),y.jsx("circle",{r:"91",cx:"400",cy:"400",strokeWidth:"20",strokeDasharray:"54 572",transform:"rotate(51, 400, 400)"}),y.jsx("circle",{r:"45.5",cx:"400",cy:"400",strokeWidth:"20",strokeDasharray:"0 286"})]})]}),({color0:n="#000"})=>y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",xmlnsXlink:"http://www.w3.org/1999/xlink","xmlns-svgjs":"http://svgjs.dev/svgjs",viewBox:"0 0 800 800",children:y.jsxs("g",{strokeWidth:"20",stroke:n,fill:"none",children:[y.jsx("path",{d:"M400 38.00189208984375L713.5000200324477 219.00094910451287V580.9990631338511L400 761.9981201485202L86.49997996755229 580.9990631338511V219.00094910451287L400 38.00189208984375Z ",transform:"rotate(855, 400, 400)",opacity:"0.05"}),y.jsx("path",{d:"M400 57.054412841796875L697.0000189781083 228.52720369779922V571.4727854098039L400 742.9455762658063L102.99998102189164 571.4727854098039V228.52720369779922L400 57.054412841796875Z ",transform:"rotate(810, 400, 400)",opacity:"0.10"}),y.jsx("path",{d:"M400 76.10696411132812L680.5000179237691 238.0534888086637V561.9465382033347L400 723.8930629006703L119.49998207623099 561.9465382033347V238.0534888086637L400 76.10696411132812Z ",transform:"rotate(765, 400, 400)",opacity:"0.16"}),y.jsx("path",{d:"M400 95.15948486328125L664.0000168694297 247.57974340195V552.4202604792875L400 704.8405190179562L135.99998313057034 552.4202604792875V247.57974340195L400 95.15948486328125Z ",transform:"rotate(720, 400, 400)",opacity:"0.21"}),y.jsx("path",{d:"M400.00001525878906 114.21200561523438L647.5000310738794 257.1059979952363V542.8939827552402L400.00001525878906 685.7879751352422L152.49999944369875 542.8939827552402V257.1059979952363L400.00001525878906 114.21200561523438Z ",transform:"rotate(675, 400, 400)",opacity:"0.26"}),y.jsx("path",{d:"M400 133.26455688476562L631.0000147607509 266.6322831061008V533.3677355487711L400 666.7354617701062L168.99998523924904 533.3677355487711V266.6322831061008L400 133.26455688476562Z ",transform:"rotate(630, 400, 400)",opacity:"0.31"}),y.jsx("path",{d:"M400 152.31707763671875L614.5000137064116 276.15853769938707V523.8414578247238L400 647.682917887392L185.4999862935884 523.8414578247238V276.15853769938707L400 152.31707763671875Z ",transform:"rotate(585, 400, 400)",opacity:"0.37"}),y.jsx("path",{d:"M400 171.36959838867188L598.0000126520722 285.6847922926735V514.3151801006766L400 628.6303740046782L201.99998734792774 514.3151801006766V285.6847922926735L400 171.36959838867188Z ",transform:"rotate(540, 400, 400)",opacity:"0.42"}),y.jsx("path",{d:"M400 190.42214965820312L581.500011597733 295.2110774035379V504.7889328942074L400 609.5778606395422L218.4999884022671 504.7889328942074V295.2110774035379L400 190.42214965820312Z ",transform:"rotate(495, 400, 400)",opacity:"0.47"}),y.jsx("path",{d:"M400 209.47467041015625L565.0000105433935 304.7373319968242V495.2626551701601L400 590.525316756828L234.99998945660644 495.2626551701601V304.7373319968242L400 209.47467041015625Z ",transform:"rotate(450, 400, 400)",opacity:"0.53"}),y.jsx("path",{d:"M400 228.5272216796875L548.5000094890542 314.2636171076887V485.736407963691L400 571.4728033916922L251.49999051094585 485.736407963691V314.2636171076887L400 228.5272216796875Z ",transform:"rotate(405, 400, 400)",opacity:"0.58"}),y.jsx("path",{d:"M400 247.57974243164062L532.0000084347148 323.789871700975V476.2101302396438L400 552.4202595089781L267.9999915652852 476.2101302396438V323.789871700975L400 247.57974243164062Z ",transform:"rotate(360, 400, 400)",opacity:"0.63"}),y.jsx("path",{d:"M400 266.63226318359375L515.5000073803755 333.3161262942613V466.68385251559647L400 533.367715626264L284.49999261962455 466.68385251559647V333.3161262942613L400 266.63226318359375Z ",transform:"rotate(315, 400, 400)",opacity:"0.68"}),y.jsx("path",{d:"M400 285.68479919433594L499.0000063260361 342.84239614633674V457.1575900503383L400 514.3151870023391L300.9999936739639 457.1575900503383V342.84239614633674L400 285.68479919433594Z ",transform:"rotate(270, 400, 400)",opacity:"0.74"}),y.jsx("path",{d:"M400 304.7373352050781L482.50000527169675 352.3686659984121V447.63132758508004L400 495.262658378414L317.49999472830325 447.63132758508004V352.3686659984121L400 304.7373352050781Z ",transform:"rotate(225, 400, 400)",opacity:"0.79"}),y.jsx("path",{d:"M400 323.7898712158203L466.0000042173574 361.8949358504875V438.1050651198219L400 476.21012975448906L333.9999957826426 438.1050651198219V361.8949358504875L400 323.7898712158203Z ",transform:"rotate(180, 400, 400)",opacity:"0.84"}),y.jsx("path",{d:"M400 342.8424072265625L449.50000316301805 371.4212057025629V428.5788026545637L400 457.1576011305641L350.49999683698195 428.5788026545637V371.4212057025629L400 342.8424072265625Z ",transform:"rotate(135, 400, 400)",opacity:"0.89"}),y.jsx("path",{d:"M400 361.8949279785156L433.0000021086787 380.9474602958492V419.0525249305164L400 438.10505724785L366.9999978913213 419.0525249305164V380.9474602958492L400 361.8949279785156Z ",transform:"rotate(90, 400, 400)",opacity:"0.95"}),y.jsx("path",{d:"M400 380.9474639892578L416.50000105433935 390.4737301479246V409.5262624652582L400 419.052528623925L383.49999894566065 409.5262624652582V390.4737301479246L400 380.9474639892578Z ",transform:"rotate(45, 400, 400)",opacity:"1.00"})]})}),({color0:n="#000"})=>y.jsx("svg",{viewBox:"140 105 500 500",xmlns:"http://www.w3.org/2000/svg","xmlns-svg":"http://www.w3.org/2000/svg",version:"1.1",fill:n,children:y.jsxs("g",{className:"layer",children:[y.jsx("title",{children:"Layer 1"}),y.jsx("path",{d:"m388,571.8c-7.4,-0.1 -15.8,-0.3 -18.5,-0.5c-2.7,-0.2 -10.2,-1 -16.5,-1.9c-6.3,-0.8 -16,-2.6 -21.5,-3.9c-5.5,-1.3 -14.9,-4 -21,-6c-6.1,-2 -17.4,-6.8 -25.3,-10.6c-7.8,-3.9 -18.8,-10.1 -24.5,-13.9c-5.6,-3.8 -14.5,-10.4 -19.8,-14.8c-5.2,-4.4 -13.1,-12 -17.5,-16.9c-4.4,-4.8 -10.3,-11.8 -13.1,-15.5c-2.8,-3.6 -7.5,-10.6 -10.6,-15.5c-3,-4.9 -6.9,-11.7 -8.6,-15.1c-1.7,-3.3 -4.8,-10.5 -7,-15.9c-2.1,-5.4 -5,-13.9 -6.4,-18.8c-1.5,-5 -3.3,-13.1 -4.2,-18c-0.8,-5 -2,-15.1 -2.5,-22.5c-0.5,-7.9 -0.5,-18.9 0,-26.5c0.5,-7.1 1.4,-16.1 2,-19.9c0.6,-3.8 1.9,-10.5 3,-15c1,-4.4 3.5,-12.8 5.5,-18.6c2,-5.8 6.2,-15.9 9.4,-22.6c3.2,-6.6 9,-16.8 12.9,-22.7c4,-5.8 10.5,-14.5 14.5,-19.4c4.1,-4.8 11.4,-12.6 16.3,-17.3c4.9,-4.7 12.5,-11.4 16.8,-14.9c4.4,-3.4 11.1,-8.4 15,-11c3.9,-2.6 12,-7.5 18.1,-10.9c6.1,-3.4 15.8,-8.1 21.7,-10.6c5.8,-2.4 15,-5.9 20.4,-7.6c5.3,-1.7 13.3,-3.9 17.8,-5c4.5,-1 13,-2.6 19.1,-3.6c7.4,-1.1 16.9,-1.7 29,-1.7c11.6,0 21.9,0.6 29,1.7c6.1,0.9 14.8,2.6 19.5,3.8c4.7,1.1 12.6,3.4 17.5,5c4.9,1.7 13.3,4.9 18.6,7.3c5.3,2.3 14.5,7.1 20.3,10.5c5.8,3.5 15.2,9.8 20.9,14.1c5.6,4.2 14.8,12.4 20.4,18.1c5.6,5.6 12.8,13.5 15.8,17.3c3.1,3.8 8.6,11.4 12.2,16.8c3.5,5.4 9.1,15.3 12.3,22c3.3,6.7 7.3,16.3 8.9,21.3c1.6,5 4,13.8 5.3,19.5c2,9.1 2.3,12.9 2.2,30.9c0,17.9 -0.3,21.5 -2.2,28.5c-1.2,4.4 -4.7,12.9 -7.6,19c-3,6.1 -8.2,14.8 -11.7,19.5c-3.4,4.7 -10.8,13 -16.3,18.6c-5.6,5.5 -13.3,12.6 -17.2,15.6c-3.9,3.1 -11.3,8.4 -16.5,11.8c-5.2,3.5 -15.2,9.1 -22.2,12.5c-7.1,3.5 -19,8.4 -26.6,10.9c-7.6,2.5 -19.1,5.5 -25.5,6.6c-8.1,1.4 -16.3,2 -26.1,2c-8.8,0 -17.5,-0.6 -22.6,-1.6c-4.5,-0.8 -11.9,-2.7 -16.3,-4.1c-4.5,-1.4 -11.7,-4.3 -16,-6.4c-4.3,-2.2 -10.9,-6 -14.5,-8.6c-3.6,-2.6 -10.2,-8.3 -14.6,-12.8c-4.4,-4.4 -10.4,-11.5 -13.3,-15.8c-3,-4.2 -7.1,-11.5 -9.3,-16.2c-2.2,-4.6 -4.9,-11.9 -6.1,-16.2c-1.7,-6.3 -2.1,-10.7 -2.1,-23.3c0,-11 0.4,-16.8 1.5,-20c1.4,-4.5 1.4,-4.5 2.2,2.9c0.4,4 1.6,10.6 2.6,14.6c1,4 3.5,10.6 5.4,14.8c2,4.2 6.4,11.3 9.8,15.9c3.3,4.6 9.1,11.2 12.7,14.7c3.6,3.5 9.6,8.4 13.4,10.8c3.7,2.4 10,5.9 14,7.8c3.9,1.9 11.1,4.5 15.9,5.9c4.8,1.4 12.7,3 17.5,3.7c5.3,0.7 12.9,0.9 19,0.5c5.6,-0.4 13.7,-1.5 18,-2.6c4.3,-1.1 11.6,-3.8 16.2,-6c4.7,-2.3 11.3,-6.1 14.7,-8.6c3.5,-2.4 9.3,-7.5 13,-11.2c3.7,-3.7 8.6,-9.4 11,-12.7c2.3,-3.4 6.6,-10.8 9.3,-16.5c2.8,-5.8 6.2,-14.8 7.6,-20c1.3,-5.2 2.9,-14.2 3.5,-20c0.7,-7.1 0.7,-13.9 0,-20.8c-0.5,-5.7 -1.8,-14.1 -2.9,-18.6c-1.1,-4.5 -3.1,-11.1 -4.4,-14.7c-1.3,-3.5 -3.9,-9.3 -5.7,-12.9c-1.8,-3.6 -5.5,-9.9 -8.3,-14c-2.8,-4.1 -9.6,-12 -15.1,-17.5c-5.6,-5.5 -13.7,-12.4 -18.1,-15.3c-4.4,-2.9 -12.5,-7.5 -18,-10.2c-5.5,-2.6 -14.4,-6.2 -19.8,-7.9c-5.3,-1.7 -14.1,-3.8 -19.4,-4.7c-5.8,-0.9 -15.7,-1.5 -24.7,-1.5c-8.3,0.1 -19.5,0.7 -24.8,1.6c-5.3,0.8 -14.3,2.6 -20,4c-5.6,1.5 -14.1,4.1 -18.8,5.9c-4.7,1.9 -13,5.6 -18.5,8.4c-5.5,2.7 -14.7,8.1 -20.5,11.9c-5.8,3.9 -14,10 -18.3,13.7c-4.2,3.7 -10.7,10.4 -14.4,15c-3.8,4.6 -7.8,9.6 -9,11.2c-2.3,2.9 -2.3,2.9 -1.2,0c0.5,-1.6 3,-6.8 5.4,-11.5c2.5,-4.7 8.2,-13.5 12.6,-19.5c4.5,-5.9 12.5,-15.3 17.7,-20.8c5.3,-5.5 13,-12.7 17.1,-16c4.2,-3.4 10.7,-8.1 14.6,-10.6c3.9,-2.5 11.1,-6.5 16,-8.8c4.9,-2.3 13.7,-5.9 19.4,-7.8c5.6,-2 14.9,-4.6 20.5,-5.8c8.3,-1.8 13.4,-2.1 28.6,-2.1c15.2,0 20.4,0.4 29,2.2c5.8,1.2 15.2,3.8 21,5.7c5.8,1.9 15.6,5.9 21.7,9c6.2,3 14.8,8.1 19.2,11.2c4.4,3.1 11.6,8.9 16.1,12.7c4.5,3.8 11.8,11.3 16.3,16.5c4.4,5.2 9.9,12.4 12.2,16c2.4,3.6 6.3,10.6 8.7,15.5c2.5,4.9 5.4,11.5 6.6,14.5c1.2,3 3,8.9 4.1,13c1.1,4.1 2.7,12.3 3.6,18.1c0.8,5.9 1.5,14.9 1.5,20c0,5.2 -0.5,13.5 -1.1,18.4c-0.6,4.9 -2.4,14.1 -3.9,20.3c-1.7,6.6 -4.9,15.5 -7.8,21.6c-2.7,5.6 -7.3,13.8 -10.2,18.2c-2.9,4.3 -8.1,11.3 -11.6,15.4c-3.4,4.1 -7.4,8.6 -8.9,10c-1.5,1.4 -4.1,4.2 -5.8,6.4c-3.1,3.8 -3.1,3.8 0.4,3.1c1.9,-0.4 6.1,-2.1 9.4,-3.8c3.3,-1.6 8,-4.3 10.5,-6c2.5,-1.7 7.4,-5.8 10.9,-9.1c3.5,-3.4 9,-9.4 12.2,-13.4c3.3,-4 8.2,-11.2 11,-15.9c2.7,-4.7 6.5,-12.2 8.4,-16.7c1.8,-4.4 4.2,-11.7 5.3,-16.1c1.1,-4.4 2.6,-11.6 3.2,-16c0.7,-4.3 1.2,-13.8 1.2,-21c0,-7.1 -0.8,-17.5 -1.7,-23c-0.9,-5.5 -2.5,-13.6 -3.6,-18c-1.1,-4.4 -3.5,-12.1 -5.4,-17c-2,-4.9 -5.6,-12.9 -8.3,-17.8c-2.6,-4.8 -7.6,-12.9 -11.2,-17.9c-3.6,-5.1 -10.8,-13.7 -15.9,-19.1c-5.2,-5.4 -12.7,-12.4 -16.6,-15.6c-3.9,-3.1 -10.3,-7.8 -14.2,-10.4c-3.9,-2.6 -12.9,-7.6 -19.9,-11.2c-7.1,-3.5 -18.3,-8.2 -24.9,-10.4c-6.6,-2.2 -16.5,-4.9 -22,-6c-5.6,-1.1 -15.2,-2.5 -21.5,-3.1c-7.8,-0.6 -15.3,-0.6 -23.9,0.1c-7.6,0.7 -17.8,2.4 -25.7,4.4c-7.2,1.8 -18,5.4 -24.1,7.9c-6.1,2.6 -15.7,7.4 -21.4,10.8c-5.7,3.4 -14.9,9.5 -20.4,13.7c-5.5,4.2 -16.8,14.3 -25.1,22.6c-10,9.9 -17.8,18.9 -23.2,26.3c-4.5,6.3 -11.3,17.5 -15.1,25c-3.8,7.5 -8.7,19.1 -11,25.7c-2.2,6.6 -5.2,17.2 -6.6,23.5c-1.3,6.3 -3,17.9 -3.7,25.8c-0.9,11.1 -0.9,17.3 0,28.4c0.7,7.9 2.1,18.8 3.3,24.3c1.1,5.5 3.4,14.1 5.1,19c1.7,4.9 5.1,13.5 7.7,19c2.6,5.5 7,13.7 9.9,18.2c2.8,4.5 7.9,12 11.3,16.5c3.5,4.5 10.6,12.5 15.9,17.8c5.3,5.2 12.7,12 16.5,15.1c3.9,3.1 11.5,8.7 17,12.4c5.5,3.7 15.9,9.6 23,13c7.1,3.5 17,7.7 21.9,9.4c4.8,1.7 13.2,4.2 18.5,5.6c5.3,1.3 13.7,3.1 18.6,4c5.7,1 15.1,1.6 25.5,1.6c9.8,0 21.1,-0.7 27.9,-1.6c6.3,-0.9 16.4,-2.9 22.5,-4.5c6.1,-1.6 14.8,-4.2 19.3,-5.9c4.4,-1.6 11.3,-4.6 15.1,-6.5c3.9,-2 7.3,-4 7.6,-4.5c0.3,-0.5 -4.5,0.2 -10.6,1.5c-6.2,1.4 -15.6,3.1 -20.8,3.9c-5.2,0.9 -16.2,1.8 -24.5,2.1c-9.1,0.4 -19.9,0.2 -27.5,-0.5c-6.9,-0.7 -16.8,-2.1 -22,-3.3c-5.2,-1.1 -14.4,-3.6 -20.5,-5.5c-6.1,-1.9 -16,-5.9 -22.2,-8.8c-6.1,-2.9 -14.6,-7.6 -19,-10.5c-4.3,-2.9 -10.7,-7.6 -14.3,-10.5c-3.6,-3 -11.2,-10.2 -17,-16.2c-5.8,-5.9 -13.1,-14.4 -16.2,-18.9c-3.2,-4.4 -8.2,-13 -11.3,-19c-3,-6 -6.9,-15 -8.5,-20c-1.7,-4.9 -3.9,-13.5 -5,-19c-1,-5.4 -2.2,-14.8 -2.5,-20.9c-0.4,-6.4 -0.2,-15.8 0.4,-22.5c0.7,-6.3 1.9,-14.2 2.7,-17.5c0.9,-3.3 2.5,-8.7 3.6,-12c1.2,-3.3 3.6,-9.1 5.6,-13c1.9,-3.9 5.5,-10.1 8,-14c2.5,-3.9 7.2,-10.3 10.5,-14.3c3.2,-4 9.8,-10.7 14.6,-14.9c4.7,-4.2 11.8,-9.7 15.6,-12.3c3.9,-2.6 10.6,-6.5 15,-8.8c4.4,-2.2 11.9,-5.4 16.7,-7c4.8,-1.7 14.7,-4.3 22,-5.8c10.8,-2.2 16.2,-2.7 28.3,-2.8c11.3,0 17,0.4 23,1.8c4.4,1 10.3,2.7 13,3.8c2.7,1.1 7.6,3.3 10.9,4.9c3.2,1.7 8.6,4.8 11.9,7.1c3.3,2.2 9.3,7.3 13.5,11.2c4.1,3.9 9.9,10.4 12.9,14.4c3,4 7.1,10.5 9.3,14.5c2.1,3.9 5.1,11.3 6.6,16.2c2.5,8.1 2.7,10.5 2.8,24.5c0,12.8 -0.4,16.9 -2.2,23.5c-1.2,4.4 -4.2,12.1 -6.8,17.2c-2.6,5.2 -7.3,12.4 -10.8,16.5c-3.4,4 -8.7,9.2 -11.7,11.5c-3,2.3 -8.1,5.5 -11.4,7.1c-3.3,1.7 -9.1,4 -13,5.2c-4.7,1.5 -10.4,2.4 -17.5,2.6c-10.5,0.5 -10.5,0.5 -1.5,-3.9c5,-2.4 10.8,-5.7 13,-7.3c2.3,-1.6 6.5,-4.9 9.4,-7.4c2.9,-2.4 7.3,-7.2 9.8,-10.5c2.5,-3.3 6.3,-9.6 8.4,-14c2.1,-4.4 4.6,-10.7 5.5,-14c0.9,-3.3 1.8,-11.9 2.1,-19.4c0.4,-8.6 0.1,-15.9 -0.7,-20.5c-0.7,-3.9 -2.1,-9.8 -3.3,-13.1c-1.1,-3.3 -3.5,-9 -5.3,-12.6c-1.8,-3.7 -5.9,-10 -9.2,-14c-3.2,-4.1 -7.9,-9.2 -10.3,-11.4c-2.4,-2.2 -7.3,-6.1 -10.9,-8.7c-3.6,-2.5 -10.1,-6.4 -14.5,-8.5c-4.4,-2.2 -10.9,-5 -14.5,-6.1c-3.6,-1.2 -9.6,-2.7 -13.4,-3.3c-4.2,-0.7 -10.5,-0.9 -15.5,-0.5c-4.7,0.3 -11.1,1.3 -14.1,2.1c-3,0.8 -8.1,2.8 -11.5,4.4c-3.3,1.7 -8.9,5 -12.5,7.3c-3.6,2.4 -9.8,7.4 -13.7,11.2c-4,3.7 -8.2,8.4 -9.4,10.3c-1.2,1.9 -1.9,3.6 -1.6,3.9c0.3,0.3 4.7,-2.1 9.9,-5.4c5.1,-3.2 11.8,-7.2 14.8,-8.7c3,-1.5 8.5,-3.8 12.3,-5.1c3.7,-1.3 10.4,-2.8 14.9,-3.5c4.5,-0.6 11.8,-0.9 16.3,-0.6c4.5,0.3 10.3,1.1 13.1,1.8c2.7,0.6 8.5,2.8 12.9,4.9c4.4,2 10.8,5.8 14.2,8.4c3.4,2.6 8.4,7.1 11.1,10c2.7,3 6.6,8 8.7,11.2c2.1,3.1 5.3,9.1 7,13.3c1.7,4.2 3.7,9.9 4.4,12.6c0.7,2.7 1.6,8.5 2.1,12.9c0.4,4.3 0.4,11.2 -0.1,15.5c-0.6,4.2 -1.9,10.7 -3.1,14.5c-1.2,3.8 -4.3,10.1 -6.8,14c-2.6,3.9 -7.7,9.9 -11.4,13.4c-3.7,3.4 -9.3,7.5 -12.4,9.1c-3.1,1.6 -8.1,3.6 -11.1,4.5c-3.3,1 -9.1,1.6 -14.6,1.6c-5.4,0 -11.3,-0.6 -14.6,-1.6c-3,-0.9 -8.1,-3 -11.4,-4.7c-3.4,-1.8 -9.1,-6.3 -13,-10.2c-4.5,-4.4 -8.4,-9.5 -10.7,-14c-2,-3.9 -4.4,-9.7 -5.4,-13c-1.3,-4.2 -1.8,-9.2 -1.8,-16.5c0.1,-8.2 0.6,-11.9 2.3,-17c1.3,-3.6 3.7,-9 5.4,-12c1.7,-3 6.3,-8.7 10.4,-12.7c4.8,-4.7 9.5,-8.3 13.6,-10.2c3.4,-1.6 8.3,-3.5 10.7,-4c2.5,-0.6 7.3,-1.1 10.6,-1.1c3.4,0 8.5,0.5 11.5,1c3,0.6 8.1,2.3 11.4,3.9c3.3,1.5 8.8,4.9 12.1,7.5c3.4,2.5 6.7,4.6 7.3,4.6c0.7,0 -0.2,-2.6 -2,-6c-1.8,-3.5 -5.7,-8.4 -9,-11.5c-3.2,-2.9 -8.7,-6.7 -12.1,-8.4c-3.5,-1.7 -10.1,-4.1 -14.8,-5.2c-7.1,-1.8 -10.4,-2.1 -20.5,-1.7c-10,0.4 -13.6,1 -21.5,3.7c-5.4,1.8 -14,5.8 -20,9.4c-7.3,4.3 -13,8.8 -19,14.7c-4.8,4.7 -10.7,11.8 -13.2,16c-2.6,4.1 -6.2,11.6 -8.1,16.5c-1.9,4.9 -4.3,12.8 -5.3,17.5c-1.1,5.7 -1.7,13 -1.7,22c0,8.5 0.6,16.7 1.6,22.1c1,4.7 2.6,11.5 3.8,15c1.1,3.5 4.2,10.9 6.9,16.4c2.6,5.5 7.7,14 11.1,19c3.5,4.9 10.9,13.5 16.4,19.1c5.5,5.6 13.8,13 18.5,16.4c4.7,3.4 14.4,9 21.5,12.5c7.4,3.7 17.5,7.6 23.5,9.3c5.8,1.6 13.9,3.6 18,4.3c4.6,0.8 14.4,1.3 25,1.3c15,0 19.3,-0.4 30,-2.7c6.9,-1.4 17.9,-4.5 24.5,-6.7c6.6,-2.3 15.9,-6.2 20.7,-8.7c4.9,-2.5 13.4,-7.6 19,-11.3c5.7,-3.7 14.6,-10.4 19.8,-14.8c5.2,-4.3 13.5,-12.1 18.4,-17.3c4.9,-5.2 11.5,-12.6 14.6,-16.4c3.1,-3.9 7.8,-10.4 10.5,-14.4c2.6,-4.1 6.7,-11.2 9.1,-16c2.3,-4.7 5,-9.5 5.9,-10.6c1.5,-1.9 1.6,-1.6 1,4.5c-0.4,3.6 -1.8,11.7 -3.2,18c-1.4,6.3 -3.6,14.6 -5,18.5c-1.4,3.8 -5.2,12.3 -8.5,18.7c-3.3,6.5 -8.1,15 -10.7,19c-2.6,4 -8.4,11.8 -12.8,17.3c-4.3,5.5 -12.2,14.1 -17.5,19c-5.2,5 -15.2,13.1 -22.2,18.2c-7.1,5.2 -18.3,12.1 -25.7,15.8c-7.6,3.9 -19.4,8.8 -27.9,11.6c-8.2,2.7 -20.6,6 -27.7,7.5c-7,1.4 -18.7,3.2 -25.8,4c-7.1,0.7 -19.1,1.3 -26.5,1.2zm3,-177.1c7.1,-0.2 9.6,-0.7 15,-3.3c3.6,-1.7 8.6,-5.2 11.2,-7.8c2.6,-2.5 6.1,-7.5 7.8,-10.9c1.7,-3.4 3.5,-8.9 4,-12.2c0.6,-3.9 0.6,-8.2 0,-12c-0.5,-3.3 -2.3,-8.8 -4,-12.2c-2,-3.9 -5.1,-8 -8.8,-11.4c-3.1,-2.9 -7.6,-6.1 -9.9,-7.1c-2.3,-1 -6.7,-2.3 -9.8,-2.9c-3.8,-0.7 -7.3,-0.7 -11.1,0c-3.1,0.6 -8.1,2.2 -11.1,3.5c-3,1.4 -7.5,4.8 -10.4,7.8c-2.7,2.8 -6.4,8.2 -8.2,11.8c-3,6.1 -3.2,7.2 -3.2,17.5c0,9.8 0.3,11.6 2.7,16.7c1.4,3.1 4.5,7.7 6.9,10.3c2.4,2.6 6.3,5.8 8.7,7.2c2.4,1.4 6,3.2 8,4c2.3,0.8 6.9,1.2 12.2,1zm-0.7,-17.8c-1,0 -2.2,-0.2 -2.8,-0.4c-0.6,-0.2 -2.2,-0.6 -3.7,-0.9c-1.5,-0.4 -4.4,-2 -6.3,-3.8c-2,-1.7 -4.6,-5 -5.7,-7.2c-1.6,-3 -2.2,-6 -2.2,-11.1c-0.1,-4.9 0.5,-8.1 1.8,-10.8c1,-2.1 3.2,-5.2 4.9,-6.8c1.6,-1.6 4.3,-3.7 6.1,-4.6c1.8,-1 5.4,-1.6 8.8,-1.6c4.3,0.1 6.9,0.7 10.1,2.6c2.4,1.4 5.6,4.3 7,6.5c1.5,2.1 3.2,5.4 3.7,7.3c0.6,1.9 1,4.8 1,6.5c0,1.7 -0.7,5.5 -1.6,8.5c-1.1,3.8 -2.8,6.6 -5.9,9.5c-2.7,2.7 -5.8,4.5 -8.8,5.2c-2.5,0.7 -5.4,1.2 -6.4,1.1zm0.5,-14.9c0.2,0 1.8,-0.7 3.6,-1.5c1.8,-0.9 4,-2.8 4.9,-4.4c0.9,-1.6 1.7,-4.7 1.7,-7c0,-2.9 -0.6,-4.6 -2.2,-6.1c-1.2,-1.1 -3.1,-2.1 -4.2,-2.2c-1.2,0 -3.2,0 -4.6,0.1c-1.4,0.1 -3.7,1.5 -5.2,3.1c-2.1,2.3 -2.8,4.1 -2.8,7.1c0,2.2 0.5,4.9 1.1,6c0.6,1.2 2.5,2.7 4.2,3.4c1.8,0.8 3.4,1.4 3.5,1.5z",fillRule:"evenodd",id:"svg_1"})]})}),({color0:n="#000"})=>y.jsx("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",viewBox:"-120 -150 1170 1170",transform:"scale(-1, -1)",children:y.jsx("g",{transform:"translate(0.000000,960.000000) scale(0.1,-0.1)",fill:n,stroke:"none",children:y.jsx("path",{d:`M4010 9189 c-951 -78 -1872 -521 -2571 -1235 -692 -708 -1112 -1612
-1215 -2611 -22 -216 -22 -617 0 -828 97 -911 454 -1741 1065 -2475 117 -141
409 -435 552 -557 1349 -1147 3189 -1472 4839 -854 911 342 1704 924 2322
1704 371 469 694 1076 887 1669 380 1166 351 2454 -80 3586 -73 192 -139 342
-149 342 -9 0 -1211 -558 -1219 -566 -2 -2 27 -75 64 -161 436 -1018 444
-2164 22 -3190 -567 -1378 -1853 -2359 -3282 -2504 -152 -15 -513 -15 -670 0
-517 50 -1028 208 -1475 457 -129 71 -382 242 -505 340 -221 178 -517 488
-677 710 -421 588 -642 1216 -665 1894 -37 1084 490 2145 1379 2778 433 309
866 482 1393 558 166 24 551 25 725 0 676 -93 1252 -375 1715 -840 558 -561
854 -1277 832 -2011 -22 -692 -303 -1330 -798 -1810 -406 -394 -895 -633
-1429 -700 -234 -29 -532 -15 -767 36 -303 65 -651 224 -903 414 -510 383
-836 933 -911 1538 -15 126 -7 441 15 562 42 226 98 399 197 601 205 416 538
746 959 947 304 146 528 193 867 185 215 -6 336 -26 523 -88 277 -91 506 -228
714 -429 225 -219 378 -457 471 -735 54 -159 75 -279 82 -457 11 -305 -38
-533 -177 -814 -223 -452 -656 -785 -1145 -881 -125 -25 -405 -24 -530 0 -117
23 -272 75 -377 124 -420 201 -736 609 -813 1049 -19 111 -19 326 0 439 91
526 469 941 980 1072 89 23 118 26 270 25 157 0 179 -3 290 -32 359 -93 655
-343 798 -674 54 -126 77 -231 84 -377 32 -723 -659 -1269 -1317 -1042 -352
122 -604 445 -627 802 -14 236 68 457 235 632 211 220 495 304 770 228 274
-76 482 -297 538 -570 49 -244 -60 -522 -260 -664 -141 -100 -238 -130 -401
-124 -93 4 -122 10 -190 36 -206 82 -346 257 -377 471 -31 212 96 448 294 545
195 97 404 62 559 -93 109 -109 155 -241 132 -377 -43 -251 -282 -415 -509
-349 -284 81 -376 414 -167 605 131 120 313 119 433 0 55 -56 90 -135 90 -205
0 -98 -64 -200 -155 -248 -56 -30 -164 -30 -221 0 -52 28 -111 95 -124 142
-38 138 45 268 184 287 35 5 56 1 99 -19 130 -59 155 -219 49 -307 -28 -23
-33 -33 -25 -41 9 -9 21 -6 48 15 80 62 104 189 53 278 -58 98 -175 141 -290
106 -57 -17 -131 -87 -158 -150 -31 -71 -25 -176 13 -239 62 -105 148 -154
272 -154 72 1 87 4 143 35 70 37 120 91 154 166 34 75 32 199 -4 276 -37 80
-107 152 -187 191 -61 30 -73 32 -166 32 -93 0 -105 -2 -168 -33 -171 -84
-271 -275 -240 -457 44 -257 285 -431 548 -395 209 29 394 208 440 425 40 192
-13 362 -160 511 -110 112 -214 164 -362 183 -202 25 -399 -52 -551 -214 -207
-222 -240 -558 -82 -825 189 -320 593 -461 944 -329 163 61 348 220 435 373
146 257 157 552 31 815 -103 215 -291 392 -507 481 -138 55 -194 65 -378 64
-156 0 -178 -2 -260 -28 -370 -112 -643 -398 -748 -781 -18 -68 -21 -107 -22
-260 0 -153 3 -193 22 -266 101 -396 418 -730 811 -853 141 -44 258 -59 422
-53 153 6 243 23 380 73 302 108 573 350 725 646 110 213 158 415 158 653 -1
366 -155 725 -428 1000 -222 223 -472 358 -800 431 -111 25 -387 30 -523 10
-770 -114 -1376 -791 -1420 -1589 -18 -318 35 -585 173 -872 316 -658 1000
-1085 1737 -1085 865 0 1663 585 1958 1435 199 574 152 1194 -131 1735 -504
963 -1571 1472 -2639 1260 -833 -166 -1566 -773 -1908 -1580 -237 -561 -285
-1169 -136 -1753 131 -519 457 -1059 863 -1431 482 -442 1040 -700 1711 -793
174 -24 576 -24 750 0 606 84 1127 309 1611 695 719 574 1161 1383 1270 2327
20 165 17 569 -5 745 -49 406 -155 764 -331 1125 -190 388 -402 689 -705 998
-296 304 -598 528 -965 718 -417 216 -832 346 -1305 409 -181 24 -605 34 -790
19z`})})}),({color0:n="#000"})=>y.jsx("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"-2250 -2100 2500 2500",preserveAspectRatio:"xMidYMid meet",children:y.jsx("g",{transform:"scale(-0.1, -0.1)",fill:n,stroke:"none",children:y.jsx("path",{d:`M10725 20419 c-1907 -105 -3709 -651 -5305 -1606 -1479 -886 -2796
-2168 -3722 -3623 -801 -1259 -1331 -2626 -1562 -4030 -251 -1524 -154 -3025
291 -4499 738 -2449 2488 -4530 4788 -5696 2110 -1069 4454 -1251 6610 -515
1775 607 3311 1870 4269 3510 102 175 303 565 381 740 355 796 559 1604 626
2480 16 202 16 753 0 950 -65 814 -242 1543 -546 2245 -70 162 -252 519 -346
680 -721 1236 -1849 2227 -3154 2770 -1318 549 -2722 619 -4040 202 -680 -215
-1300 -557 -1866 -1028 -163 -136 -537 -510 -673 -674 -304 -365 -508 -680
-716 -1100 -179 -363 -286 -650 -380 -1022 -93 -366 -138 -702 -147 -1088 -12
-537 55 -1012 212 -1520 443 -1430 1613 -2583 3035 -2991 628 -180 1257 -208
1885 -83 745 148 1388 491 1926 1029 306 306 533 622 719 1005 219 448 332
903 347 1391 23 753 -208 1461 -667 2044 -102 128 -361 389 -490 492 -424 337
-920 552 -1440 625 -173 24 -529 24 -695 -1 -297 -43 -561 -124 -805 -246
-857 -428 -1400 -1309 -1367 -2215 9 -240 51 -452 132 -671 227 -605 754
-1086 1367 -1244 175 -45 257 -55 458 -54 203 0 300 13 477 64 578 167 1025
645 1150 1230 26 121 26 439 0 560 -57 266 -179 492 -367 680 -183 183 -401
302 -652 356 -109 24 -342 24 -445 1 -231 -52 -409 -151 -564 -314 -85 -89
-135 -162 -184 -266 -58 -121 -76 -197 -82 -344 -5 -114 -2 -146 17 -228 24
-104 38 -124 21 -29 -44 238 45 519 227 715 122 131 252 210 428 261 67 19
103 23 234 23 130 0 169 -4 240 -23 101 -28 243 -93 330 -152 82 -56 198 -167
261 -249 70 -93 154 -267 185 -386 35 -134 44 -356 20 -490 -51 -275 -173
-504 -375 -705 -159 -158 -326 -262 -527 -329 -166 -55 -240 -66 -459 -66
-173 0 -214 3 -304 23 -766 172 -1311 865 -1311 1667 0 728 454 1433 1142
1773 384 190 835 260 1267 196 729 -107 1398 -573 1782 -1239 157 -273 262
-585 316 -932 24 -157 24 -565 0 -728 -118 -791 -540 -1495 -1192 -1985 -452
-341 -940 -532 -1400 -612 -145 -18 -577 -15 -735 5 -617 82 -1189 313 -1690
684 -169 125 -308 248 -470 414 -580 597 -927 1324 -1042 2189 -26 194 -26
745 0 945 141 1081 679 2069 1525 2798 641 552 1401 904 2257 1046 436 73 939
80 1390 20 1285 -171 2503 -855 3369 -1894 710 -852 1130 -1863 1251 -3010 22
-205 30 -688 16 -900 -23 -340 -69 -659 -137 -953 -226 -980 -674 -1871 -1350
-2683 -164 -198 -605 -639 -803 -803 -801 -666 -1657 -1101 -2656 -1350 -781
-194 -1622 -248 -2430 -155 -1655 190 -3240 972 -4476 2208 -1334 1335 -2108
3012 -2285 4951 -22 238 -30 864 -15 1129 45 769 182 1485 427 2220 866 2599
2908 4730 5489 5726 836 323 1747 529 2705 611 250 21 996 30 1269 15 1058
-60 2057 -272 3055 -648 1759 -663 3347 -1800 4581 -3278 875 -1049 1540
-2231 1977 -3515 133 -392 292 -1000 388 -1482 6 -32 13 -58 14 -58 1 0 42 14
92 30 608 207 1398 367 2029 409 357 25 325 20 320 44 -62 280 -84 374 -127
542 -471 1863 -1323 3572 -2529 5075 -1235 1540 -2775 2781 -4529 3649 -1553
769 -3192 1202 -4895 1291 -221 12 -972 11 -1190 -1z`})})})],hx=fx[0],dx=ux[0],gx=ox[1],mx="_spin_button_15do2_1",wx="_spin_button_spin_15do2_12",px="_spin_button_wind_up_15do2_15",O8={spin_button:mx,spin_button_spin:wx,spin_button_wind_up:px},vx=({onClick:n,onMouseDown:x,onMouseUp:f,onMouseLeave:s})=>{const o=Q(H=>H.activeConfig.default_palette_idx),d=Q(H=>H.wheelAnimationState),M=Q(H=>H.activeConfig.radiusName),_=F6(o,3),v=i4(_),g=F6(o,1),T=i4(g),E=F6(o,2),S=d==="spinning"||d==="cancelling"?"none":"initial",L=Ne[M];return y.jsxs("button",{title:"Hold to wind up",id:"spin-button",onClick:n,type:"button","aria-label":"Spin the wheel","aria-describedby":"spin-instructions",onMouseDown:x,onMouseUp:f,onMouseLeave:s,disabled:d==="spinning"||d==="cancelling",style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",zIndex:5,width:`${L*.2}px`,height:`${L*.2}px`,border:"2px solid",padding:" 2px",borderRadius:"50%",overflow:"hidden",pointerEvents:S,touchAction:S,userSelect:S,backgroundColor:`${d==="windingUp"?g:d==="spinning"?E:_}`,filter:`${d==="windingUp"?"brightness(1.6) contrast(1) grayscale(0%)":""}`,boxShadow:`${d==="windingUp"?"0px 0px 0px, inset 0px 0px 80px -10px black":d==="spinning"?"":"0px 0px 10px 0px black"}`,transition:"filter 6s, box-shadow 6s, background-color 2s"},className:`${O8.spin_button} ${d==="spinning"?O8.spin_button_spin:d==="windingUp"?O8.spin_button_wind_up:""}`,children:[d==="spinning"?gx({color0:F6(o,1),color1:F6(o,3)}):d==="windingUp"?dx({color0:T}):hx({color0:v}),y.jsx("span",{id:"spin-instructions",className:"sr-only",children:"Press and hold to wind up the wheel. The longer you hold, the longer the wheel spins after release."})]})};var v7=u7();const S1=U.createContext({handleCloseDialog(){}}),i7=document.getElementById("dialog-root"),b1=({className:n="",style:x={},children:f,childProps:s,ref:o})=>{const[d,M]=U.useState(!1),_=U.useRef(null),v=U.useCallback(()=>{M(!0)},[]),g=U.useCallback(()=>{var E;(E=_.current)==null||E.close()},[]);if(U.useImperativeHandle(o,()=>({handleShowDialog:v,handleCloseDialog:g})),U.useEffect(()=>{const E=_.current;if(!E||!d)return;const S=()=>{M(!1)};return E.addEventListener("close",S),E.showModal(),()=>{E.removeEventListener("close",S)}},[d]),!i7||!d)return null;const T=U.isValidElement(f)?U.cloneElement(f,{...s}):f;return v7.createPortal(y.jsx("dialog",{ref:_,role:"dialog","aria-modal":!0,tabIndex:-1,onClick:E=>{E.target===_.current&&g()},style:x,className:n,children:y.jsx("div",{children:y.jsx(S1.Provider,{value:{handleCloseDialog:g},children:d?T:null})})}),i7)},kx={N:Math.PI/2,NE:Math.PI/4,E:0,SE:-Math.PI/4,S:-Math.PI/2,SW:-3*Math.PI/4,W:Math.PI,NW:3*Math.PI/4,CENTER:0};function $x(n){const x=U.useRef(null),f=U.useRef([]),s=U.useRef(null),o=U.useRef(null),d=U.useMemo(()=>({colors:["#f94144","#f3722c","#f8961e","#90be6d","#577590"],gravity:.4,wind:0,scalar:1,particleCount:80,spread:45,ticks:90,shape:"square",direction:"CENTER",...n}),[n]),M=U.useCallback(g=>{if(!g)return;x.current=g,o.current=g.getContext("2d");const T=()=>{g.width=window.innerWidth,g.height=window.innerHeight};T(),window.addEventListener("resize",T)},[]),_=U.useCallback(()=>{var g;s.current&&(cancelAnimationFrame(s.current),s.current=null),f.current=[],(g=o.current)==null||g.clearRect(0,0,x.current.width,x.current.height)},[]),v=U.useCallback(g=>{const T=x.current,E=o.current;if(!T||!E)return;const S=g??d.particleCount,L=d.spread*Math.PI/180,H=kx[d.direction??"CENTER"],C={x:T.width/2,y:T.height/2},V=[];for(let O=0;O<S;O++){const J=d.direction==="CENTER"?Math.random()*2*Math.PI:H+(Math.random()-.5)*L,r0=Math.random()*6+3,F=Math.cos(J)*r0+d.wind,l0=-Math.sin(J)*r0,o0=Math.random()*6+2,j0=d.colors[Math.floor(Math.random()*d.colors.length)];V.push({x:C.x,y:C.y,dx:F,dy:l0,life:d.ticks,color:j0,size:o0*d.scalar,shape:d.shape})}f.current=V;const Y=()=>{!E||!T||(E.clearRect(0,0,T.width,T.height),f.current=f.current.map(O=>(O.x+=O.dx,O.y+=O.dy,O.dy+=d.gravity,O.life-=1,O)).filter(O=>O.life>0),f.current.forEach(O=>{switch(E.fillStyle=O.color,E.beginPath(),O.shape){case"circle":E.arc(O.x,O.y,O.size/2,0,Math.PI*2),E.fill();break;case"triangle":E.moveTo(O.x,O.y-O.size/2),E.lineTo(O.x-O.size/2,O.y+O.size/2),E.lineTo(O.x+O.size/2,O.y+O.size/2),E.closePath(),E.fill();break;case"square":default:E.fillRect(O.x,O.y,O.size,O.size);break}}),f.current.length>0?s.current=requestAnimationFrame(Y):s.current=null)};s.current||(s.current=requestAnimationFrame(Y))},[d]);return{setCanvasRef:M,launch:v,clear:_}}const P3=({ref:n,confettiOptions:x={},style:f={}})=>{const{launch:s,setCanvasRef:o}=$x(x);return U.useImperativeHandle(n,()=>({launch:s})),y.jsx("canvas",{ref:o,style:{position:"fixed",top:0,left:0,pointerEvents:"none",height:"100vh",width:"100vw",zIndex:9999,...f}})},_x=[350,250,125];function k7(n,x,f=0){if(f>=n.length)return;const s=n[f],o=x[f]||x[x.length-1]||0;s&&setTimeout(()=>{s(),k7(n,x,++f)},o)}const Sx=({delayMs:n=0,colors:x})=>{const f=U.useRef([]);U.useEffect(()=>{f.current&&f.current.length&&k7(f.current,[n,..._x])},[f,n]);const[s,o]=[100,100],d={},M={colors:x,particleCount:320,spread:60,scalar:1.2,gravity:.2,ticks:200};return y.jsxs(y.Fragment,{children:[y.jsx(P3,{ref:_=>{f.current[0]=_==null?void 0:_.launch},confettiOptions:{...M,shape:"circle"},style:{...d,top:`${s*-.5}vh`,left:`${o*-.5}vw`}}),y.jsx(P3,{ref:_=>{f.current[1]=_==null?void 0:_.launch},confettiOptions:{...M,shape:"triangle"},style:{...d,top:`${s*-.5}vh`,left:`calc(100% - ${o*.5}vw)`}}),y.jsx(P3,{ref:_=>{f.current[2]=_==null?void 0:_.launch},confettiOptions:{...M,shape:"circle"},style:{...d,top:`calc(100% - ${s*.5}vh)`,left:`calc(100% - ${o*.5}vw)`}}),y.jsx(P3,{ref:_=>{f.current[3]=_==null?void 0:_.launch},confettiOptions:{...M,shape:"triangle"},style:{...d,top:`calc(100% - ${s*.5}vh)`,left:`${o*-.5}vw`}})]})},bx="_result_display_3z6v9_1",jx="_drop_down_3z6v9_15",$7={result_display:bx,drop_down:jx},l7=600,n7=1.25,t7="content-box",c7=0,r7=0,x7="break-word",y7="normal",a7=n=>n,s7=n=>n*1.8,ze=n=>n/25,Mx=()=>{const{handleCloseDialog:n}=U.use(S1),x=Q(Y=>Y.winningOutcomeIdx),f=Q(K1(Y=>Y.activeConfig.outcomes[x??-1])),s=Q(Y=>Y.activeConfig.default_palette_idx),o=Q(Y=>Y.activeConfig.default_fontFamily),d=Q(Y=>Y.activeConfig.radiusName),{label:M,fillColor:_,fontFamily:v}=f,g=v||o,T=Ne[d],E=U.useMemo(()=>P9({text:M,fontFamily:g,containerHeight:a7(T),containerWidth:s7(T),fontWeight:l7,lineHeight:n7,boxSizing:t7,containerPadding:ze(T),childMargin:c7,childPadding:r7,wordBreak:x7,whiteSpace:y7})||Math.floor(T/M.length*1.3),[T,M,g]);if(x===null||!f)return n(),y.jsx(y.Fragment,{});const S=_1[s],L=_||S[x%S.length],H=N8(L,1.4),C=i4(H),V=S.map(Y=>N8(Y,1.1));return y.jsxs(y.Fragment,{children:[y.jsxs("div",{role:"alert","aria-live":"assertive","aria-atomic":"true",className:$7.result_display,style:{backgroundColor:`${H}`,height:`${a7(T)}px`,width:`${s7(T)}px`,padding:`${ze(T)}px
          ${ze(T)}px 
          ${ze(T*1.5)}px 
          ${ze(T)}px
          `,boxSizing:t7,wordBreak:x7,whiteSpace:y7},onClick:n,children:[y.jsx("h1",{style:{color:`${C}`,fontFamily:`${g}`,fontWeight:l7,fontSize:`${E}px`,margin:c7,padding:`${r7}px`,lineHeight:n7},id:"result-display-dialog-title",children:M}),y.jsx("p",{id:"result-display-dialog-description",className:"sr-only",children:"This displays a result of the last spin of the wheel"})]}),y.jsx(Sx,{delayMs:600,colors:V})]})},Ex=U.forwardRef((n,x)=>y.jsx(b1,{ref:x,"aria-labelledby":"result-display-dialog-title","aria-describedby":"result-display-dialog-description",className:t0($7.drop_down,"center-shadow"),style:{position:"relative",top:"15px",border:"none",padding:0},children:y.jsx(Mx,{})})),Tx="_main_1ch3s_1",Ax="_wheel_arrow_container_1ch3s_7",f7={main:Tx,wheel_arrow_container:Ax},Ox=()=>{const n=Q(O=>O.activeConfig.radiusName),x=Q(O=>O.wheelAnimationState),f=Q(O=>O.setWheelAnimationState),s=Q(O=>O.setWinningOutcomeIdxFromTurn),o=Q(O=>O.resetWinningOutcomeIdx),d=U.useRef(null),M=U.useRef(null),_=U.useRef(0),v=U.useRef(null),g=U.useRef(null),{windUp:T,cancelAnimations:E,spin:S}=Q9(d,x,f);function L(){}function H(){x==="idle"&&(o(),_.current=Math.random(),v.current=Date.now(),g.current&&clearTimeout(g.current),g.current=setTimeout(()=>{T()},150))}function C(){x==="windingUp"&&(E(),g.current&&clearTimeout(g.current))}function V(){g.current&&clearTimeout(g.current),o();const O=v.current;if(x!=="spinning"&&x!=="cancelling"&&O){const J=(Date.now()-O)/1e3,r0=Math.min(Math.ceil(J),5);v.current=null;const F=+(_.current+r0).toFixed(2),l0=S(F,()=>{},()=>{var o0;(o0=M.current)==null||o0.handleShowDialog(),s({resultingTurn:l0})})}}const Y=Ne[n];return y.jsxs("main",{style:{padding:`${Y/5}px`},className:f7.main,children:[y.jsxs("div",{id:"wheel-arrow-assembly",style:{width:"fit-content",position:"relative",borderRadius:"50%"},className:f7.wheel_arrow_container,children:[y.jsx(xx,{radius:Y,wheelRef:d}),y.jsx(sx,{size:Y/6}),y.jsx(vx,{onClick:L,onMouseDown:H,onMouseUp:V,onMouseLeave:C})]}),y.jsx(Ex,{ref:M})]})},Cx="_selectContainer_1meho_1",Rx="_selectButton_1meho_5",zx="_placeholder_1meho_16",Dx="_selectedOption_1meho_20",Nx="_arrow_1meho_31",Ux="_arrowOpen_1meho_39",Lx="_dropdown_1meho_43",Hx="_option_1meho_59",$1={selectContainer:Cx,selectButton:Rx,placeholder:zx,selectedOption:Dx,arrow:Nx,arrowOpen:Ux,dropdown:Lx,option:Hx},C8=document.getElementById("drop-down-root"),t4=({children:n,value:x,onChange:f,placeholder:s="Select...",className:o="",id:d="",...M})=>{const[_,v]=U.useState(!1),[g,T]=U.useState(""),[E,S]=U.useState({}),[L,H]=U.useState(null),C=U.useRef(null),V=U.useRef([]),Y=()=>{if(C.current){const l0=C.current.getBoundingClientRect();S({position:"absolute",top:`${l0.bottom+window.scrollY}px`,left:`${l0.left+window.scrollX}px`,width:`${l0.width}px`,zIndex:9999})}};U.useEffect(()=>(_&&(Y(),window.addEventListener("scroll",Y,!0),window.addEventListener("resize",Y)),()=>{window.removeEventListener("scroll",Y,!0),window.removeEventListener("resize",Y)}),[_]),U.useEffect(()=>{const l0=o0=>{C.current&&!C.current.contains(o0.target)&&v(!1)};return document.addEventListener("mousedown",l0),()=>document.removeEventListener("mousedown",l0)},[]),U.useEffect(()=>{const o0=U.Children.toArray(n).find(j0=>Q1.isValidElement(j0)&&j0.props.value===x);Q1.isValidElement(o0)&&T(o0.props.children)},[n,x]),U.useEffect(()=>{H(_?0:null)},[_]),U.useEffect(()=>{var l0;_&&L!==null&&V.current[L]&&((l0=V.current[L])==null||l0.focus())},[L,_]);const O=(l0,o0)=>{v(!1),T(o0),f==null||f(l0)};function J(l0){var j0,V0;if(!_){(l0.key==="Enter"||l0.key===" ")&&(l0.preventDefault(),v(!0));return}const o0=U.Children.count(n);switch(l0.key){case"ArrowDown":{l0.preventDefault(),H(Q0=>((Q0||0)+1)%o0);return}case"ArrowUp":{l0.preventDefault(),H(Q0=>(o0+(Q0||0)-1)%o0);return}case"Enter":{if(L!==null){const Q0=U.Children.toArray(n)[L];Q1.isValidElement(Q0)&&O(Q0.props.value,Q0.props.children)}(j0=C.current)==null||j0.focus();return}case"Escape":{l0.preventDefault(),v(!1),(V0=C.current)==null||V0.focus();return}default:return}}const r0=`${d||"custom-select"}-dropdown`,F=()=>y.jsx("div",{className:$1.dropdown,style:C8?E:{},role:"listbox",children:U.Children.map(n,(l0,o0)=>{if(!Q1.isValidElement(l0))return null;const{value:j0,children:V0,className:Q0}=l0.props;return y.jsx("div",{className:`${$1.option} ${Q0??""}`,tabIndex:-1,id:`${r0}-option-${o0}`,role:"option","aria-selected":x===j0,ref:c6=>{V.current[o0]=c6},onMouseDown:c6=>{c6.preventDefault(),O(j0,V0)},children:V0})})});return y.jsxs("div",{className:`${$1.selectContainer} ${o}`,id:d,ref:C,tabIndex:0,role:"combobox","aria-haspopup":"listbox","aria-expanded":_,"aria-controls":r0,"aria-activedescendant":_&&L!==null?`${r0}-option-${L}`:void 0,onKeyDown:J,...M,children:[y.jsxs("div",{className:$1.selectButton,onClick:()=>v(!_),children:[y.jsx("span",{className:`${$1.selectedOption} ${g?"":$1.placeholder}`,children:g||s}),y.jsx("svg",{className:`${$1.arrow} ${_?$1.arrowOpen:""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"square",strokeLinejoin:"miter",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),_&&(C8?v7.createPortal(F(),C8):F())]})},De=({children:n})=>y.jsx(y.Fragment,{children:n}),Bx="_greyed_out_1g42g_1",qx="_selector_1g42g_7",Yx="_option_1g42g_26",Gx="_palette_preview_1g42g_38",Xx="_color_preview_1g42g_51",Zx="_radius_option_1g42g_58",Vx="_save_slot_preview_1g42g_62",Qx="_save_slot_index_1g42g_65",Kx="_save_slot_name_1g42g_71",N0={greyed_out:Bx,selector:qx,option:Yx,palette_preview:Gx,color_preview:Xx,radius_option:Zx,save_slot_preview:Vx,save_slot_index:Qx,save_slot_name:Kx},Jx=({saveIdx:n})=>{const x=Q(s=>s.savedConfigs[n]),f=x?y.jsx("span",{className:N0.save_slot_name,children:x.configName}):y.jsx("span",{className:t0(N0.save_slot_name,N0.greyed_out),children:"empty slot"});return y.jsxs("span",{className:t0(N0.save_slot_preview,N0.option),children:[y.jsxs("span",{className:N0.save_slot_index,children:[n+1,". "]})," ",f]})},Fx=({value:n,onChange:x,className:f="select"})=>{const s=Array.from({length:10},()=>0).map((o,d)=>y.jsx(De,{value:d,className:N0.option,children:y.jsx(Jx,{saveIdx:d})},d));return y.jsx(t4,{id:"save-slot-select",placeholder:"Select a save slot",value:n,"aria-label":"Save slot selector",onChange:x,className:t0(N0.selector,f),children:s})},Wx="_dialog_1ldit_2",Ix="_top_1ldit_9",Px="_container_1ldit_14",ey="_x_small_1ldit_31",iy="_small_1ldit_35",ly="_large_1ldit_39",ny="_description_1ldit_44",ty="_warning_container_1ldit_50",cy="_warning_danger_1ldit_58",ry="_warning_error_1ldit_75",xy="_warning_notification_1ldit_98",yy="_centered_1ldit_119",ay="_label_1ldit_133",sy="_name_input_1ldit_149",fy="_file_input_1ldit_162",uy="_checkbox_input_1ldit_197",oy="_buttons_container_1ldit_202",hy="_buttons_wide_1ldit_217",X={dialog:Wx,top:Ix,container:Px,x_small:ey,small:iy,large:ly,description:ny,warning_container:ty,warning_danger:cy,warning_error:ry,warning_notification:xy,centered:yy,label:ay,name_input:sy,file_input:fy,checkbox_input:uy,buttons_container:oy,buttons_wide:hy},dy=({saveIdx:n})=>{const{handleCloseDialog:x}=U.use(S1),f=Q(d=>d.savedConfigs[n]),s=Q(d=>d.loadConfig);if(n<0||n>9)return x(),y.jsx(y.Fragment,{});function o(){f&&s({saveIdx:n}),x()}return y.jsxs("div",{className:t0(X.container,X.x_small),children:[y.jsx("div",{className:X.warning_container,children:y.jsxs("div",{id:"load-config-warning-message",className:X.warning_danger,children:[y.jsx("h3",{id:"load-config-dialog-title",children:"Warning"}),y.jsx("p",{id:"load-config-dialog-description",children:"This will discard your current configuration, but will not affect the wheel, until applied."})]})}),y.jsxs("div",{className:t0(X.buttons_container,X.buttons_wide),children:[y.jsx(b0,{id:"cancel-load-config-button",name:"Cancel and close form",onClick:x,children:"Cancel"}),y.jsx(b0,{variant:"warning",id:"load-config-button",name:"Load configuration","aria-label":"Load configuration from save-slot and close the dialog",onClick:o,children:"Load"})]})]})},gy=U.forwardRef(({saveIdx:n},x)=>y.jsx(b1,{ref:x,"aria-labelledby":"load-config-dialog-title","aria-describedby":"load-config-dialog-description",className:t0(X.dialog,X.top,"center-shadow"),childProps:{saveIdx:n},children:y.jsx(dy,{saveIdx:n})})),my=({saveIdx:n})=>{const{handleCloseDialog:x}=U.use(S1);(n<0||n>9)&&x();const f=Q(g=>g.savedConfigs[n]),s=Q(g=>g.saveCurrentConfig),[o,d]=U.useState((f==null?void 0:f.configName)||""),M=g=>{d(g.target.value)};function _(g){g.preventDefault();const T=o.trim()||(f==null?void 0:f.configName)||m7();s({saveIdx:n,configName:T}),d(()=>""),x()}const v=f?y.jsxs("div",{className:X.warning_danger,children:[y.jsx("h3",{id:"save-config-dialog-title",children:"Warning"}),y.jsxs("p",{id:"save-config-dialog-description",children:["This will overwrite your older configuration:",y.jsx("span",{children:` ${f.configName}`})]})]}):null;return y.jsxs("form",{className:t0(X.container,X.small),onSubmit:_,children:[y.jsxs("div",{children:[y.jsx("label",{className:X.label,htmlFor:"config-name-input",children:"Configuration name"}),y.jsx("input",{id:"config-name-input",name:"Configuration name",type:"text",minLength:1,maxLength:35,placeholder:"Provide a configuration name",value:o,onChange:M,className:X.name_input})]}),y.jsx("div",{"aria-live":"assertive",className:X.warning_container,children:v}),y.jsxs("div",{className:t0(X.buttons_container,X.buttons_wide),children:[y.jsx(b0,{id:"cancel-save-config-button",name:"Cancel and close form",onClick:x,type:"reset",children:"Cancel"}),y.jsx(b0,{variant:f?"danger":"success",id:"save-config-button",name:"Save configuration",disabled:!o.trim(),children:f?"Overwrite":"Save"})]})]})},wy=U.forwardRef(({saveIdx:n},x)=>y.jsx(b1,{ref:x,"aria-labelledby":"save-config-dialog-title","aria-describedby":"save-config-dialog-description",className:t0(X.dialog,X.top,"center-shadow"),childProps:{saveIdx:n},children:y.jsx(my,{saveIdx:n})})),py="_config_form_105al_28",vy="_save_load_panel_105al_57",ky="_wheel_defaults_panel_105al_69",$y="_outcomes_panel_105al_83",_y="_outcomes_list_105al_110",Sy="_buttons_container_105al_130",by="_add_outcomes_container_105al_130",jy="_outcome_inputs_105al_144",My="_config_actions_panel_105al_168",Ey="_outcome_label_input_105al_174",Ty="_outcome_color_input_105al_185",Ay="_add_outcomes_number_input_105al_195",Oy="_save_load_buttons_container_105al_217",Cy="_outcome_duplicate_button_105al_221",Ry="_outcome_delete_button_105al_227",zy="_label_105al_239",Dy="_save_load_label_105al_244",Ny="_label_offset_105al_250",Uy="_radius_select_label_105al_262",Ly="_palette_select_label_105al_265",Hy="_font_select_label_105al_268",By="_save_load_select_105al_274",qy="_default_font_select_105al_284",Yy="_outcome_font_select_105al_288",u0={config_form:py,save_load_panel:vy,wheel_defaults_panel:ky,outcomes_panel:$y,outcomes_list:_y,buttons_container:Sy,add_outcomes_container:by,outcome_inputs:jy,config_actions_panel:My,outcome_label_input:Ey,outcome_color_input:Ty,add_outcomes_number_input:Ay,save_load_buttons_container:Oy,outcome_duplicate_button:Cy,outcome_delete_button:Ry,label:zy,save_load_label:Dy,label_offset:Ny,radius_select_label:Uy,palette_select_label:Ly,font_select_label:Hy,save_load_select:By,default_font_select:qy,outcome_font_select:Yy},Gy=()=>{const n=Q(_=>_.savedConfigs),[x,f]=U.useState(-1),s=U.useRef(null),o=U.useRef(null);function d(_){var v;_.preventDefault(),(v=s.current)==null||v.handleShowDialog()}function M(_){var v;_.preventDefault(),(v=o.current)==null||v.handleShowDialog()}return y.jsxs(y.Fragment,{children:[y.jsxs("fieldset",{className:u0.save_load_panel,children:[y.jsx("legend",{className:"sr-only",children:"Save or Load configuration"}),y.jsx("span",{className:t0(u0.label,u0.save_load_label),children:"Save / Load configuration:"}),y.jsx(Fx,{value:x,onChange:_=>{f(()=>+_)},className:u0.save_load_select}),y.jsxs("div",{className:t0(u0.buttons_container,u0.save_load_buttons_container),children:[y.jsx(b0,{variant:"warning",id:"open-load-config-form",name:"Start loading configuration",disabled:!n[x],onClick:M,"aria-haspopup":"dialog",children:"Load"}),y.jsx(b0,{id:"open-save-config-form",name:"Start saving configuration",disabled:x<0||x>9,onClick:d,"aria-haspopup":"dialog",children:"Save"})]})]}),y.jsx(wy,{saveIdx:x,ref:s}),y.jsx(gy,{saveIdx:x,ref:o})]})},Xy=()=>{const n=Q(o=>o.currentConfig.radiusName),x=Q(o=>o.setRadius),f=o=>{x({radiusName:o})},s=Object.keys(Ne).map(o=>y.jsx(De,{value:o,className:N0.option,children:y.jsx("span",{className:N0.radius_option,children:o})},o));return y.jsx(t4,{id:"radius-select","aria-label":"Wheel size selector",value:n,onChange:f,className:N0.selector,children:s})},Zy=({palette_idx:n})=>{const x=_1[n];return x?y.jsx("div",{"aria-label":`Color palette with colors: ${x.join(", ")}`,role:"list",className:N0.palette_preview,children:x.map((f,s)=>y.jsx("span",{style:{backgroundColor:f,borderColor:"var(--color-contrast-border, gray)"},className:N0.color_preview,role:"listitem"},s))}):null},Vy=({className:n=""})=>{const x=Q(o=>o.currentConfig.default_palette_idx),f=Q(o=>o.setDefaultPalette),s=Array(_1.length).fill(0).map((o,d)=>y.jsx(De,{value:d,className:N0.option,children:y.jsx(Zy,{palette_idx:d},d)},d));return y.jsx(t4,{id:"palette-select","aria-label":"Wheel colors selector",value:x,onChange:o=>{f({paletteIdx:+o})},className:t0(n,N0.selector),children:s})},Qy=({fontFamily:n})=>{const x=Q(s=>s.fontLoadState[n]),f=x?{fontFamily:n,fontWeight:"600",fontSize:"1rem"}:{fontStyle:"italic",fontWeight:"400",fontSize:"0.8rem"};return y.jsx("span",{style:f,className:`${x?"":N0.greyed_out}`,"aria-disabled":`${x?"false":"true"}`,children:x?`${n}`:"Loading font..."})},_7=({outcomeIdx:n,className:x=""})=>{const f=Q(K1(S=>S.currentConfig.outcomes.length)),s=Q(S=>S.modifyOutcome),o=Q(S=>S.setDefaultFontFamily),d=n>=0&&n<f,M=Q(S=>d?S.currentConfig.outcomes[n].fontFamily:S.currentConfig.default_fontFamily),_=d?`Outcome-${n}-font-select`:"wheel-main-font-select",v=d?`Select a font for the Outcome-${n}`:"Select a  main font for the wheel";function g(S){s({outcomeIdx:n,key:"fontFamily",value:S.toString()})}function T(S){o({fontFamily:S.toString()})}const E=n4.map((S,L)=>y.jsx(De,{value:S,className:N0.option,children:y.jsx(Qy,{fontFamily:S})},L));return y.jsxs(t4,{id:_,placeholder:"Select font",value:M,"aria-label":v,onChange:d?g:T,className:t0(x,N0.selector),children:[d?y.jsx(De,{value:"",className:N0.option,children:y.jsx("span",{className:N0.greyed_out,children:"Default font"})}):null,E]})},Ky=()=>y.jsxs("menu",{className:u0.wheel_defaults_panel,children:[y.jsx("legend",{className:"sr-only",children:"Wheel size"}),y.jsx("span",{className:t0(u0.label,u0.label_offset,u0.radius_select_label),children:"Wheel size"}),y.jsx(Xy,{}),y.jsx("legend",{className:"sr-only",children:"Wheel colors"}),y.jsx("span",{className:t0(u0.label,u0.label_offset,u0.palette_select_label),children:"Wheel colors"}),y.jsx(Vy,{}),y.jsx("span",{className:t0(u0.label,u0.label_offset,u0.font_select_label),children:"Main font"}),y.jsx("legend",{className:"sr-only",children:"Default font"}),y.jsx(_7,{outcomeIdx:-1,className:u0.default_font_select})]}),Jy=[({color0:n="#000000"})=>y.jsx("svg",{"data-name":"20 Delete",xmlns:"http://www.w3.org/2000/svg",fill:n,viewBox:"0 0 512 512","aria-hidden":"true",children:y.jsx("path",{id:"Path_27","data-name":"Path 27",d:"M256,512C114.625,512,0,397.375,0,256,0,114.609,114.625,0,256,0S512,114.609,512,256C512,397.375,397.375,512,256,512ZM64,256A190.514,190.514,0,0,0,99.531,366.656L366.656,99.516A190.648,190.648,0,0,0,256,64C149.969,64,64,149.969,64,256ZM412.469,145.344,145.344,412.5A190.635,190.635,0,0,0,256,448c106.031,0,192-85.969,192-192A190.477,190.477,0,0,0,412.469,145.344Z",fillRule:"evenodd"})}),({color0:n="#000000"})=>y.jsxs("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",children:[y.jsx("rect",{width:"16",height:"16",id:"icon-bound",fill:"none"}),y.jsx("path",{fill:n,d:"M0,8c0,4.419,3.581,8,8,8s8-3.581,8-8s-3.581-8-8-8S0,3.581,0,8z M12.891,11.478L4.522,3.109C5.531,2.391,6.734,2,8,2 c1.603,0,3.109,0.625,4.244,1.756C13.375,4.891,14,6.397,14,8C14,9.266,13.609,10.469,12.891,11.478z M2,8 c0-1.266,0.391-2.469,1.109-3.478l8.369,8.369C10.469,13.609,9.266,14,8,14c-1.603,0-3.109-0.625-4.244-1.756 C2.625,11.109,2,9.603,2,8z"})]}),({color0:n="#000000"})=>y.jsxs("svg",{fill:n,viewBox:"8 9 15 15",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[y.jsx("title",{children:"Delete"}),y.jsx("path",{d:"M18.828 16l4.243 4.243-2.828 2.828-4.243-4.243-4.243 4.243-2.828-2.828 4.243-4.243-4.243-4.243 2.828-2.828 4.243 4.243 4.243-4.243 2.828 2.828-4.243 4.243z"})]}),({color0:n="#000000"})=>y.jsx("svg",{fill:n,version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 100 100",enableBackground:"new 0 0 100 100",xmlSpace:"preserve","aria-hidden":"true",children:y.jsx("g",{children:y.jsx("path",{d:`M50.197,84.199c18.273,0,33.141-14.868,33.141-33.143c0-18.272-14.867-33.138-33.141-33.138S17.057,32.784,17.057,51.057
          C17.057,69.331,31.924,84.199,50.197,84.199z M50.197,80.199c-7.421,0-14.199-2.793-19.35-7.377l41.113-41.114
          c4.584,5.15,7.377,11.928,7.377,19.349C79.338,67.126,66.266,80.199,50.197,80.199z M50.197,21.919
          c7.21,0,13.812,2.638,18.905,6.991L28.049,69.964c-4.354-5.094-6.992-11.696-6.992-18.907
          C21.057,34.99,34.129,21.919,50.197,21.919z`})})})],Fy=Jy[2],Wy=({index:n,focusInput:x,ref:f})=>{const s=Q(K1(C=>C.currentConfig.outcomes[n])),o=Q(K1(C=>C.currentConfig.outcomes.length)),d=Q(C=>C.modifyOutcome),M=Q(C=>C.duplicateOutcome),_=Q(C=>C.removeOutcome),v=U.useRef(null);function g(){const C=v.current;C&&(C.focus(),requestAnimationFrame(()=>{C==null||C.select()}))}U.useImperativeHandle(f,()=>({handleFocusSelect:g}));const T=window.matchMedia("(prefers-color-scheme: dark)").matches?"#334155":"#e2e8f0";function E(C,V){d({outcomeIdx:n,key:C,value:V})}function S(C){C.preventDefault(),M({outcomeIdx:n}),x(-1)}function L(C){C.preventDefault(),_({outcomeIdx:n}),x(-1)}function H(C){C.key==="Enter"?(C.preventDefault(),x(n+1,!0)):C.key==="ArrowDown"?(C.preventDefault(),x(n+1,!1)):C.key==="ArrowUp"&&n>0&&(C.preventDefault(),x(n-1,!1))}return y.jsxs("fieldset",{className:t0(u0.outcome_inputs,"bottom-right-shadow"),children:[y.jsxs("legend",{className:"sr-only",children:["Outcome ",n+1]}),y.jsx("label",{htmlFor:`label-input-Outcome-${n}`,className:"sr-only",children:"Sector label (press ENTER or DOWN to jump to the next outcome)"}),y.jsx("input",{ref:v,title:"press ENTER or DOWN to jump to the next outcome",id:`label-input-Outcome-${n}`,type:"text",maxLength:30,placeholder:`Outcome ${n+1}`,value:s.label,onChange:C=>{E("label",C.target.value)},onKeyDown:H,className:u0.outcome_label_input}),y.jsx("label",{htmlFor:`fillColor-input-Outcome-${n}`,className:"sr-only",children:"Sector color"}),y.jsx("input",{type:"color",id:`fillColor-input-Outcome-${n}`,value:s.fillColor||T,onChange:C=>{E("fillColor",H8(C.target.value)?C.target.value:"")},className:u0.outcome_color_input}),y.jsx(_7,{outcomeIdx:n,className:u0.outcome_font_select}),y.jsx(b0,{id:`duplicate-outcome-${n}-button`,name:"duplicate outcome",variant:"success",shape:"rounded",onClick:S,disabled:o>=g6,className:u0.outcome_duplicate_button,"aria-label":`Duplicate Outcome ${n+1}`,children:y.jsx("b",{children:"x2"})}),y.jsx(b0,{id:`delete-outcome-${n}-button`,name:"delete line",variant:"danger",shape:"rounded",onClick:L,disabled:o<3,className:u0.outcome_delete_button,"aria-label":`Delete Outcome ${n+1}`,children:Fy({color0:"#000000"})})]})},Iy=({validQuantity:n,handleAddOutcomes:x})=>{const[f,s]=U.useState(1);return y.jsxs("fieldset",{className:t0(u0.buttons_container,u0.add_outcomes_container),children:[y.jsx("legend",{className:"sr-only",children:"Add blank outcomes"}),y.jsx("label",{htmlFor:"add-outcomes-quantity",className:"sr-only",children:"Number of outcomes to add"}),y.jsx("input",{id:"add-outcomes-quantity",className:u0.add_outcomes_number_input,type:"number",min:1,max:n,step:1,value:f,onChange:o=>{s(+o.target.value)}}),y.jsx(b0,{variant:"success",shape:"rounded",onClick:o=>{x(o,f)},disabled:f>n,children:"Add"})]})};let R8,z8;const Py=()=>{const n=Q(K1(E=>E.currentConfig.outcomes.length)),x=Q(K1(E=>E.currentConfig.outcomes.map(({id:S})=>S))),f=Q(E=>E.addBlankOutcomes),s=U.useRef(null),o=U.useRef(0),d=U.useRef([]);U.useEffect(()=>{const E=s.current;if(!E)return;const S=()=>{o.current=E.scrollTop};return E.addEventListener("scroll",S),()=>E.removeEventListener("scroll",S)},[]),U.useEffect(()=>{requestAnimationFrame(()=>{const E=s.current,S=o.current;E&&S&&(E.scrollTop=S)})},[n]);const M=g6-n;function _(E=5){const S=s.current;z8&&clearTimeout(z8),z8=setTimeout(()=>{requestAnimationFrame(()=>{S&&(S.scrollTop=S.scrollHeight)})},E)}function v(E,S){if(E.preventDefault(),n>=g6)return;const L=Math.max(1,Math.min(M,S));f({quantity:L}),_()}function g(E,S=!1){var L;E>=g6||(E<n?(L=d.current[E])==null||L.handleFocusSelect():n<g6&&(R8&&clearTimeout(R8),S&&f({quantity:1}),R8=setTimeout(()=>{var H;(H=d.current[E])==null||H.handleFocusSelect()},195)))}const T=x.map((E,S)=>y.jsx(Wy,{ref:L=>{d.current[S]=L},index:S,focusInput:g},E));return y.jsxs("div",{className:u0.outcomes_panel,children:[y.jsxs("fieldset",{ref:s,className:u0.outcomes_list,children:[y.jsx("legend",{className:"sr-only",children:"Outcomes controls"}),T]}),y.jsx(Iy,{validQuantity:M,handleAddOutcomes:v})]})},ea=()=>{const{handleCloseDialog:n}=U.use(S1),x=Q(o=>o.currentConfig),f=Q(o=>o.setConfigName);function s(o){o.preventDefault(),o.stopPropagation();const d=x.configName.trim();if(!d)return;const M=new Blob([JSON.stringify(x,null,2)],{type:"application/json"}),_=URL.createObjectURL(M),v=document.createElement("a");v.href=_,v.download=`${d}.json`,document.body.appendChild(v),v.click(),document.body.removeChild(v),URL.revokeObjectURL(_),n()}return y.jsxs(y.Fragment,{children:[y.jsx("p",{id:"export-config-dialog-description",className:"sr-only",children:"Enter a file name to export your current configuration."}),y.jsxs("form",{id:"export-dialog","aria-describedby":"export-configuration-description",className:t0(X.container,X.x_small),children:[y.jsx("p",{id:"export-config-dialog-title",className:X.description,children:"Please, provide a file name:"}),y.jsxs("div",{children:[y.jsx("label",{className:t0(X.label),htmlFor:"export-config-file-name",children:"File name"}),y.jsx("input",{id:"export-config-file-name",type:"text",maxLength:30,placeholder:"Provide a file name",value:x.configName,onChange:o=>{f({configName:o.target.value})},className:t0(X.name_input)})]}),y.jsxs("div",{className:t0(X.buttons_container,X.buttons_wide),children:[y.jsx(b0,{id:"cancel-export-dialog-button",name:"cancel export and close dialog",onClick:n,type:"reset",children:"Cancel"}),y.jsx(b0,{id:"export-current-config-button",name:"export configuration",variant:"success",onClick:s,disabled:!x.configName.trim(),children:"Export"})]})]})]})},ia=U.forwardRef((n,x)=>y.jsx(b1,{ref:x,"aria-labelledby":"export-config-dialog-title","aria-describedby":"export-config-dialog-description",className:t0(X.dialog,"center-shadow"),children:y.jsx(ea,{})})),la=()=>{const{handleCloseDialog:n}=U.use(S1),x=Q(Y=>Y.replaceCurrentConfig),[f,s]=U.useState(""),[o,d]=U.useState([]),[M,_]=U.useState(null),v=U.useRef(null);function g(){s(()=>""),d(()=>[])}U.useEffect(()=>(v&&v.current&&v.current.focus(),()=>{g()}),[]);const T=Y=>{g(),_(Y.target.files)};async function E(Y){if(Y.preventDefault(),Y.stopPropagation(),g(),!v.current||!v.current.files||!M)return;const O=M[0];if(console.log(`[ImportConfig] file: ${JSON.stringify(O,null,2)}`),!O||!(O instanceof File)||O.size===0){console.log("[ImportConfig]: NO FILE !!!"),s(()=>"Please select a valid .json file."),v.current.value="";return}try{const J=await O.text(),r0=JSON.parse(J);console.log(`[ImportConfig]: jsonData: ${JSON.stringify(r0,null,2)}`);const F=M9(r0);if(!F.valid){s(()=>F.error),v.current.value="";return}F.warnings.length&&d(()=>[...F.warnings]),x({newConfig:F.config}),v.current.value="",s(()=>""),F.warnings.length||n()}catch(J){J instanceof Error&&console.error(J),s(()=>"The file appears to be corrupted or of a wrong format."),v.current.value="";return}}function S(Y){Y.preventDefault(),Y.stopPropagation(),g(),n()}const L=y.jsxs("div",{id:"import-config-intro",className:X.warning_danger,children:[y.jsx("h3",{children:"Warning:"}),y.jsx("p",{children:"This will discard your current configuration, but will not affect the wheel, until applied."})]}),H=f?y.jsxs("div",{id:"import-config-error",role:"alert",className:X.warning_error,children:[y.jsx("h3",{style:{color:"#ef4444",marginTop:"0.5rem"},children:"Error:"}),y.jsxs("p",{className:"",children:[f,y.jsx("span",{children:" Please select another file."})]})]}):null,C=o.length?y.jsxs("div",{id:"import-config-warnings",role:"alert",className:t0(X.warning_notification,X.centered),children:[y.jsx("h3",{style:{fontWeight:"bold"},children:"The file contained some errors, that were automatically corrected:"}),y.jsx("ul",{children:o.map((Y,O)=>y.jsx("li",{children:Y},`${O}-${Y}`))})]}):null,V=o.length?y.jsx(b0,{variant:"success",id:"import-config-dialog-continue-button",name:"Continue with imported configuration",onClick:S,"aria-label":"Continue with configuration despite warnings",children:"Continue"}):y.jsxs(y.Fragment,{children:[y.jsx(b0,{id:"import-config-dialog-cancel-button",name:"Cancel and close dialog",type:"reset",onClick:S,children:"Cancel"}),y.jsx(b0,{variant:"warning",id:"import-config-dialog-import-button",name:"Import configuration",disabled:!!f||!M||!v.current||!v.current.value,onClick:E,children:"Import"})]});return y.jsxs("form",{className:t0(X.container,X.large),children:[y.jsx("h3",{id:"import-config-dialog-title",className:"sr-only",children:"Import configuration from a file."}),y.jsx("p",{id:"import-config-dialog-description",className:X.description,children:"Please select (upload) a .json file to import configuration from:"}),y.jsxs("div",{children:[y.jsx("label",{htmlFor:"configuration-file-input",className:t0(X.label,"label"),children:"Select a json file"}),y.jsx("input",{ref:v,onChange:T,id:"configuration-file-input",name:"select configuration file",type:"file",accept:".json",className:t0(X.file_input,X.default,X.rectangle,"input-text"),"aria-describedby":f?"import-config-error":o.length?"import-config-warnings":"import-config-intro","aria-invalid":!!f})]}),y.jsx("div",{className:X.warning_container,children:f?H:o.length?C:L}),y.jsx("div",{className:t0(X.buttons_container,X.buttons_wide),children:V})]})},na=U.forwardRef((n,x)=>y.jsx(b1,{ref:x,"aria-labelledby":"import-config-dialog-title","aria-describedby":"import-config-dialog-description",className:t0(X.dialog,"center-shadow"),children:y.jsx(la,{})})),ta=()=>{const{handleCloseDialog:n}=U.use(S1),x=Q(s=>s.resetCurrentConfig);function f(){x(),n()}return y.jsxs("div",{className:t0(X.container,X.x_small),children:[y.jsxs("div",{className:X.warning_danger,children:[y.jsx("h3",{id:"reset-config-dialog-title",children:"Warning"}),y.jsx("p",{id:"reset-config-dialog-description",children:"This will discard your current configuration, but will not affect the wheel, until applied."})]}),y.jsxs("div",{className:t0(X.buttons_container,X.buttons_wide),children:[y.jsx(b0,{id:"cancel-load-config-button",name:"Cancel and close form",onClick:n,children:"Cancel"}),y.jsx(b0,{variant:"danger",id:"load-config-button",name:"Load configuration",onClick:f,children:"Reset"})]})]})},ca=U.forwardRef((n,x)=>y.jsx(b1,{ref:x,"aria-labelledby":"reset-config-dialog-title","aria-describedby":"reset-config-dialog-description",className:t0(X.dialog,"center-shadow"),children:y.jsx(ta,{})})),ra=()=>{const{handleCloseDialog:n}=U.use(S1),x=Q(H=>H.fontLoadState),f=Q(H=>H.currentConfig.default_fontFamily),s=Q(H=>H.currentConfig),o=Q(H=>H.replaceCurrentConfig),d=Q(H=>H.applyConfig),M=Q(H=>H.setCurrentLocation),_=s.outcomes.map(H=>H.fontFamily),g=[f,..._].filter(H=>H&&x[H]===!1),T=new Set(g);function E(){const H={...s},C=xa(H,T);o({newConfig:C}),d(),n()}function S(){g.length>0||(d(),M({newLocation:"Main"}),n())}const L=y.jsx("ul",{children:[...T].map(H=>y.jsx("li",{children:H},H))});return y.jsxs("div",{className:t0(X.container,X.small),children:[y.jsx("div",{className:X.warning_container,"aria-live":"assertive",children:y.jsxs("div",{className:t0(X.warning_notification,X.centered),children:[y.jsx("h3",{id:"check-fonts-dialog-title",children:g.length?"Loading missing fonts:":"All fonts for this configuration were successfully downloaded!"}),y.jsx("p",{id:"check-fonts-dialog-description",className:"sr-only",children:"This dialog informs you about missing fonts and allows you to choose between waiting for fonts to finish loading or using default fonts."}),g.length?L:null]})}),y.jsxs("div",{className:t0(X.buttons_container,X.centered),children:[y.jsx(b0,{onClick:n,children:"Cancel"}),y.jsx(b0,{variant:"warning",disabled:!g.length,onClick:E,children:"Use Default Fonts"}),y.jsx(b0,{variant:"success",onClick:S,disabled:!!g.length,children:"Apply"})]})]})};function xa(n,x){const f=L8[0];return x.has(n.default_fontFamily)&&(n.default_fontFamily=f),n.outcomes=n.outcomes.map(({fontFamily:s,...o})=>s&&x.has(s)?{...o,fontFamily:f}:{...o,fontFamily:s}),n}const ya=U.forwardRef((n,x)=>y.jsx(b1,{ref:x,className:t0(X.dialog,X.top,"center-shadow"),"aria-labelledby":"check-fonts-dialog-title","aria-describedby":"check-fonts-dialog-description",children:y.jsx(ra,{})})),aa=()=>{const n=Q(S=>S.applyConfig),x=Q(S=>S.resetWinningOutcomeIdx),f=Q(S=>S.checkAllFontsReady),s=Q(S=>S.setCurrentLocation),o=U.useRef(null),d=U.useRef(null),M=U.useRef(null),_=U.useRef(null);function v(S){var L;S.preventDefault(),(L=o.current)==null||L.handleShowDialog()}function g(S){var L;S.preventDefault(),(L=d.current)==null||L.handleShowDialog()}function T(S){var L;S.preventDefault(),(L=M.current)==null||L.handleShowDialog()}function E(S){var L;S.preventDefault(),x(),f()?(n(),s({newLocation:"Main"})):(L=_==null?void 0:_.current)==null||L.handleShowDialog()}return y.jsxs(y.Fragment,{children:[y.jsxs("div",{className:t0(u0.buttons_container,u0.config_actions_panel),children:[y.jsxs("div",{className:u0.buttons_container,children:[y.jsx(b0,{id:"config-form-export-button",name:"export configuration",onClick:v,"aria-haspopup":"dialog",children:"Export"}),y.jsx(b0,{variant:"warning",id:"config-form-import-button",name:"import configuration",onClick:g,"aria-haspopup":"dialog",children:"Import"})]}),y.jsxs("div",{className:u0.buttons_container,children:[y.jsx(b0,{variant:"warning",id:"config-form-reset-button",name:"reset configuration",onClick:T,"aria-haspopup":"dialog",children:"Reset"}),y.jsx(b0,{variant:"success",id:"config-form-apply-button",name:"apply configuration",onClick:E,"aria-haspopup":"dialog",children:"Apply"})]})]}),y.jsx(ia,{ref:o}),y.jsx(na,{ref:d}),y.jsx(ca,{ref:M}),y.jsx(ya,{ref:_})]})},sa=()=>y.jsxs("form",{"aria-label":"Configuration form for editing the wheel and outcomes",className:t0(u0.config_form,"center-shadow"),children:[y.jsx(Gy,{}),y.jsx(Ky,{}),y.jsx(Py,{}),y.jsx(aa,{})]}),S7=[({color0:n="#000000"})=>`<svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      version='1.1'
      viewBox='0 0 800 800'
      height='800'
      width='800'
    >
      <g strokeWidth='2' stroke='${n}' fill='none' strokeLinecap='square'>
        <line x1='0' y1='0' x2='20' y2='20'></line>
        <line x1='40' y1='0' x2='20' y2='20'></line>
        <line x1='60' y1='0' x2='40' y2='20'></line>
        <line x1='60' y1='0' x2='80' y2='20'></line>
        <line x1='80' y1='0' x2='100' y2='20'></line>
        <line x1='120' y1='0' x2='100' y2='20'></line>
        <line x1='140' y1='0' x2='120' y2='20'></line>
        <line x1='160' y1='0' x2='140' y2='20'></line>
        <line x1='160' y1='0' x2='180' y2='20'></line>
        <line x1='200' y1='0' x2='180' y2='20'></line>
        <line x1='200' y1='0' x2='220' y2='20'></line>
        <line x1='220' y1='0' x2='240' y2='20'></line>
        <line x1='240' y1='0' x2='260' y2='20'></line>
        <line x1='260' y1='0' x2='280' y2='20'></line>
        <line x1='280' y1='0' x2='300' y2='20'></line>
        <line x1='300' y1='0' x2='320' y2='20'></line>
        <line x1='320' y1='0' x2='340' y2='20'></line>
        <line x1='360' y1='0' x2='340' y2='20'></line>
        <line x1='360' y1='0' x2='380' y2='20'></line>
        <line x1='400' y1='0' x2='380' y2='20'></line>
        <line x1='420' y1='0' x2='400' y2='20'></line>
        <line x1='440' y1='0' x2='420' y2='20'></line>
        <line x1='440' y1='0' x2='460' y2='20'></line>
        <line x1='460' y1='0' x2='480' y2='20'></line>
        <line x1='500' y1='0' x2='480' y2='20'></line>
        <line x1='500' y1='0' x2='520' y2='20'></line>
        <line x1='520' y1='0' x2='540' y2='20'></line>
        <line x1='560' y1='0' x2='540' y2='20'></line>
        <line x1='560' y1='0' x2='580' y2='20'></line>
        <line x1='600' y1='0' x2='580' y2='20'></line>
        <line x1='620' y1='0' x2='600' y2='20'></line>
        <line x1='640' y1='0' x2='620' y2='20'></line>
        <line x1='660' y1='0' x2='640' y2='20'></line>
        <line x1='660' y1='0' x2='680' y2='20'></line>
        <line x1='680' y1='0' x2='700' y2='20'></line>
        <line x1='700' y1='0' x2='720' y2='20'></line>
        <line x1='720' y1='0' x2='740' y2='20'></line>
        <line x1='760' y1='0' x2='740' y2='20'></line>
        <line x1='780' y1='0' x2='760' y2='20'></line>
        <line x1='800' y1='0' x2='780' y2='20'></line>
        <line x1='800' y1='0' x2='820' y2='20'></line>
        <line x1='840' y1='0' x2='820' y2='20'></line>
        <line x1='860' y1='0' x2='840' y2='20'></line>
        <line x1='860' y1='0' x2='880' y2='20'></line>
        <line x1='880' y1='0' x2='900' y2='20'></line>
        <line x1='900' y1='0' x2='920' y2='20'></line>
        <line x1='920' y1='0' x2='940' y2='20'></line>
        <line x1='960' y1='0' x2='940' y2='20'></line>
        <line x1='980' y1='0' x2='960' y2='20'></line>
        <line x1='980' y1='0' x2='1000' y2='20'></line>
        <line x1='1020' y1='0' x2='1000' y2='20'></line>
        <line x1='1020' y1='0' x2='1040' y2='20'></line>
        <line x1='1040' y1='0' x2='1060' y2='20'></line>
        <line x1='1080' y1='0' x2='1060' y2='20'></line>
        <line x1='1080' y1='0' x2='1100' y2='20'></line>
        <line x1='1100' y1='0' x2='1120' y2='20'></line>
        <line x1='1120' y1='0' x2='1140' y2='20'></line>
        <line x1='1140' y1='0' x2='1160' y2='20'></line>
        <line x1='1180' y1='0' x2='1160' y2='20'></line>
        <line x1='1180' y1='0' x2='1200' y2='20'></line>
        <line x1='1220' y1='0' x2='1200' y2='20'></line>
        <line x1='1240' y1='0' x2='1220' y2='20'></line>
        <line x1='1240' y1='0' x2='1260' y2='20'></line>
        <line x1='1280' y1='0' x2='1260' y2='20'></line>
        <line x1='1300' y1='0' x2='1280' y2='20'></line>
        <line x1='1320' y1='0' x2='1300' y2='20'></line>
        <line x1='1340' y1='0' x2='1320' y2='20'></line>
        <line x1='1340' y1='0' x2='1360' y2='20'></line>
        <line x1='1380' y1='0' x2='1360' y2='20'></line>
        <line x1='1400' y1='0' x2='1380' y2='20'></line>
        <line x1='1420' y1='0' x2='1400' y2='20'></line>
        <line x1='1440' y1='0' x2='1420' y2='20'></line>
        <line x1='20' y1='20' x2='0' y2='40'></line>
        <line x1='40' y1='20' x2='20' y2='40'></line>
        <line x1='60' y1='20' x2='40' y2='40'></line>
        <line x1='60' y1='20' x2='80' y2='40'></line>
        <line x1='80' y1='20' x2='100' y2='40'></line>
        <line x1='100' y1='20' x2='120' y2='40'></line>
        <line x1='140' y1='20' x2='120' y2='40'></line>
        <line x1='160' y1='20' x2='140' y2='40'></line>
        <line x1='160' y1='20' x2='180' y2='40'></line>
        <line x1='180' y1='20' x2='200' y2='40'></line>
        <line x1='220' y1='20' x2='200' y2='40'></line>
        <line x1='240' y1='20' x2='220' y2='40'></line>
        <line x1='240' y1='20' x2='260' y2='40'></line>
        <line x1='280' y1='20' x2='260' y2='40'></line>
        <line x1='300' y1='20' x2='280' y2='40'></line>
        <line x1='320' y1='20' x2='300' y2='40'></line>
        <line x1='320' y1='20' x2='340' y2='40'></line>
        <line x1='340' y1='20' x2='360' y2='40'></line>
        <line x1='380' y1='20' x2='360' y2='40'></line>
        <line x1='380' y1='20' x2='400' y2='40'></line>
        <line x1='420' y1='20' x2='400' y2='40'></line>
        <line x1='440' y1='20' x2='420' y2='40'></line>
        <line x1='440' y1='20' x2='460' y2='40'></line>
        <line x1='460' y1='20' x2='480' y2='40'></line>
        <line x1='500' y1='20' x2='480' y2='40'></line>
        <line x1='500' y1='20' x2='520' y2='40'></line>
        <line x1='540' y1='20' x2='520' y2='40'></line>
        <line x1='540' y1='20' x2='560' y2='40'></line>
        <line x1='560' y1='20' x2='580' y2='40'></line>
        <line x1='580' y1='20' x2='600' y2='40'></line>
        <line x1='600' y1='20' x2='620' y2='40'></line>
        <line x1='640' y1='20' x2='620' y2='40'></line>
        <line x1='640' y1='20' x2='660' y2='40'></line>
        <line x1='680' y1='20' x2='660' y2='40'></line>
        <line x1='700' y1='20' x2='680' y2='40'></line>
        <line x1='720' y1='20' x2='700' y2='40'></line>
        <line x1='740' y1='20' x2='720' y2='40'></line>
        <line x1='740' y1='20' x2='760' y2='40'></line>
        <line x1='780' y1='20' x2='760' y2='40'></line>
        <line x1='780' y1='20' x2='800' y2='40'></line>
        <line x1='820' y1='20' x2='800' y2='40'></line>
        <line x1='840' y1='20' x2='820' y2='40'></line>
        <line x1='860' y1='20' x2='840' y2='40'></line>
        <line x1='860' y1='20' x2='880' y2='40'></line>
        <line x1='900' y1='20' x2='880' y2='40'></line>
        <line x1='920' y1='20' x2='900' y2='40'></line>
        <line x1='920' y1='20' x2='940' y2='40'></line>
        <line x1='940' y1='20' x2='960' y2='40'></line>
        <line x1='980' y1='20' x2='960' y2='40'></line>
        <line x1='980' y1='20' x2='1000' y2='40'></line>
        <line x1='1020' y1='20' x2='1000' y2='40'></line>
        <line x1='1020' y1='20' x2='1040' y2='40'></line>
        <line x1='1040' y1='20' x2='1060' y2='40'></line>
        <line x1='1060' y1='20' x2='1080' y2='40'></line>
        <line x1='1080' y1='20' x2='1100' y2='40'></line>
        <line x1='1100' y1='20' x2='1120' y2='40'></line>
        <line x1='1140' y1='20' x2='1120' y2='40'></line>
        <line x1='1140' y1='20' x2='1160' y2='40'></line>
        <line x1='1160' y1='20' x2='1180' y2='40'></line>
        <line x1='1180' y1='20' x2='1200' y2='40'></line>
        <line x1='1220' y1='20' x2='1200' y2='40'></line>
        <line x1='1220' y1='20' x2='1240' y2='40'></line>
        <line x1='1260' y1='20' x2='1240' y2='40'></line>
        <line x1='1260' y1='20' x2='1280' y2='40'></line>
        <line x1='1300' y1='20' x2='1280' y2='40'></line>
        <line x1='1320' y1='20' x2='1300' y2='40'></line>
        <line x1='1340' y1='20' x2='1320' y2='40'></line>
        <line x1='1360' y1='20' x2='1340' y2='40'></line>
        <line x1='1380' y1='20' x2='1360' y2='40'></line>
        <line x1='1380' y1='20' x2='1400' y2='40'></line>
        <line x1='1400' y1='20' x2='1420' y2='40'></line>
        <line x1='1420' y1='20' x2='1440' y2='40'></line>
        <line x1='20' y1='40' x2='0' y2='60'></line>
        <line x1='40' y1='40' x2='20' y2='60'></line>
        <line x1='40' y1='40' x2='60' y2='60'></line>
        <line x1='80' y1='40' x2='60' y2='60'></line>
        <line x1='80' y1='40' x2='100' y2='60'></line>
        <line x1='100' y1='40' x2='120' y2='60'></line>
        <line x1='120' y1='40' x2='140' y2='60'></line>
        <line x1='160' y1='40' x2='140' y2='60'></line>
        <line x1='160' y1='40' x2='180' y2='60'></line>
        <line x1='180' y1='40' x2='200' y2='60'></line>
        <line x1='200' y1='40' x2='220' y2='60'></line>
        <line x1='240' y1='40' x2='220' y2='60'></line>
        <line x1='260' y1='40' x2='240' y2='60'></line>
        <line x1='280' y1='40' x2='260' y2='60'></line>
        <line x1='300' y1='40' x2='280' y2='60'></line>
        <line x1='300' y1='40' x2='320' y2='60'></line>
        <line x1='340' y1='40' x2='320' y2='60'></line>
        <line x1='360' y1='40' x2='340' y2='60'></line>
        <line x1='380' y1='40' x2='360' y2='60'></line>
        <line x1='400' y1='40' x2='380' y2='60'></line>
        <line x1='420' y1='40' x2='400' y2='60'></line>
        <line x1='420' y1='40' x2='440' y2='60'></line>
        <line x1='440' y1='40' x2='460' y2='60'></line>
        <line x1='460' y1='40' x2='480' y2='60'></line>
        <line x1='500' y1='40' x2='480' y2='60'></line>
        <line x1='500' y1='40' x2='520' y2='60'></line>
        <line x1='520' y1='40' x2='540' y2='60'></line>
        <line x1='540' y1='40' x2='560' y2='60'></line>
        <line x1='580' y1='40' x2='560' y2='60'></line>
        <line x1='580' y1='40' x2='600' y2='60'></line>
        <line x1='600' y1='40' x2='620' y2='60'></line>
        <line x1='620' y1='40' x2='640' y2='60'></line>
        <line x1='640' y1='40' x2='660' y2='60'></line>
        <line x1='680' y1='40' x2='660' y2='60'></line>
        <line x1='700' y1='40' x2='680' y2='60'></line>
        <line x1='700' y1='40' x2='720' y2='60'></line>
        <line x1='720' y1='40' x2='740' y2='60'></line>
        <line x1='760' y1='40' x2='740' y2='60'></line>
        <line x1='760' y1='40' x2='780' y2='60'></line>
        <line x1='780' y1='40' x2='800' y2='60'></line>
        <line x1='800' y1='40' x2='820' y2='60'></line>
        <line x1='840' y1='40' x2='820' y2='60'></line>
        <line x1='840' y1='40' x2='860' y2='60'></line>
        <line x1='880' y1='40' x2='860' y2='60'></line>
        <line x1='900' y1='40' x2='880' y2='60'></line>
        <line x1='900' y1='40' x2='920' y2='60'></line>
        <line x1='920' y1='40' x2='940' y2='60'></line>
        <line x1='940' y1='40' x2='960' y2='60'></line>
        <line x1='980' y1='40' x2='960' y2='60'></line>
        <line x1='1000' y1='40' x2='980' y2='60'></line>
        <line x1='1000' y1='40' x2='1020' y2='60'></line>
        <line x1='1020' y1='40' x2='1040' y2='60'></line>
        <line x1='1040' y1='40' x2='1060' y2='60'></line>
        <line x1='1060' y1='40' x2='1080' y2='60'></line>
        <line x1='1100' y1='40' x2='1080' y2='60'></line>
        <line x1='1120' y1='40' x2='1100' y2='60'></line>
        <line x1='1140' y1='40' x2='1120' y2='60'></line>
        <line x1='1160' y1='40' x2='1140' y2='60'></line>
        <line x1='1180' y1='40' x2='1160' y2='60'></line>
        <line x1='1180' y1='40' x2='1200' y2='60'></line>
        <line x1='1220' y1='40' x2='1200' y2='60'></line>
        <line x1='1220' y1='40' x2='1240' y2='60'></line>
        <line x1='1260' y1='40' x2='1240' y2='60'></line>
        <line x1='1260' y1='40' x2='1280' y2='60'></line>
        <line x1='1280' y1='40' x2='1300' y2='60'></line>
        <line x1='1320' y1='40' x2='1300' y2='60'></line>
        <line x1='1340' y1='40' x2='1320' y2='60'></line>
        <line x1='1340' y1='40' x2='1360' y2='60'></line>
        <line x1='1380' y1='40' x2='1360' y2='60'></line>
        <line x1='1380' y1='40' x2='1400' y2='60'></line>
        <line x1='1420' y1='40' x2='1400' y2='60'></line>
        <line x1='1420' y1='40' x2='1440' y2='60'></line>
        <line x1='20' y1='60' x2='0' y2='80'></line>
        <line x1='40' y1='60' x2='20' y2='80'></line>
        <line x1='40' y1='60' x2='60' y2='80'></line>
        <line x1='80' y1='60' x2='60' y2='80'></line>
        <line x1='80' y1='60' x2='100' y2='80'></line>
        <line x1='120' y1='60' x2='100' y2='80'></line>
        <line x1='120' y1='60' x2='140' y2='80'></line>
        <line x1='160' y1='60' x2='140' y2='80'></line>
        <line x1='180' y1='60' x2='160' y2='80'></line>
        <line x1='200' y1='60' x2='180' y2='80'></line>
        <line x1='200' y1='60' x2='220' y2='80'></line>
        <line x1='240' y1='60' x2='220' y2='80'></line>
        <line x1='240' y1='60' x2='260' y2='80'></line>
        <line x1='280' y1='60' x2='260' y2='80'></line>
        <line x1='280' y1='60' x2='300' y2='80'></line>
        <line x1='320' y1='60' x2='300' y2='80'></line>
        <line x1='340' y1='60' x2='320' y2='80'></line>
        <line x1='340' y1='60' x2='360' y2='80'></line>
        <line x1='380' y1='60' x2='360' y2='80'></line>
        <line x1='400' y1='60' x2='380' y2='80'></line>
        <line x1='420' y1='60' x2='400' y2='80'></line>
        <line x1='420' y1='60' x2='440' y2='80'></line>
        <line x1='440' y1='60' x2='460' y2='80'></line>
        <line x1='480' y1='60' x2='460' y2='80'></line>
        <line x1='480' y1='60' x2='500' y2='80'></line>
        <line x1='520' y1='60' x2='500' y2='80'></line>
        <line x1='520' y1='60' x2='540' y2='80'></line>
        <line x1='540' y1='60' x2='560' y2='80'></line>
        <line x1='580' y1='60' x2='560' y2='80'></line>
        <line x1='580' y1='60' x2='600' y2='80'></line>
        <line x1='620' y1='60' x2='600' y2='80'></line>
        <line x1='640' y1='60' x2='620' y2='80'></line>
        <line x1='640' y1='60' x2='660' y2='80'></line>
        <line x1='660' y1='60' x2='680' y2='80'></line>
        <line x1='680' y1='60' x2='700' y2='80'></line>
        <line x1='700' y1='60' x2='720' y2='80'></line>
        <line x1='740' y1='60' x2='720' y2='80'></line>
        <line x1='740' y1='60' x2='760' y2='80'></line>
        <line x1='760' y1='60' x2='780' y2='80'></line>
        <line x1='800' y1='60' x2='780' y2='80'></line>
        <line x1='800' y1='60' x2='820' y2='80'></line>
        <line x1='820' y1='60' x2='840' y2='80'></line>
        <line x1='840' y1='60' x2='860' y2='80'></line>
        <line x1='860' y1='60' x2='880' y2='80'></line>
        <line x1='880' y1='60' x2='900' y2='80'></line>
        <line x1='920' y1='60' x2='900' y2='80'></line>
        <line x1='920' y1='60' x2='940' y2='80'></line>
        <line x1='960' y1='60' x2='940' y2='80'></line>
        <line x1='980' y1='60' x2='960' y2='80'></line>
        <line x1='1000' y1='60' x2='980' y2='80'></line>
        <line x1='1000' y1='60' x2='1020' y2='80'></line>
        <line x1='1020' y1='60' x2='1040' y2='80'></line>
        <line x1='1060' y1='60' x2='1040' y2='80'></line>
        <line x1='1080' y1='60' x2='1060' y2='80'></line>
        <line x1='1100' y1='60' x2='1080' y2='80'></line>
        <line x1='1120' y1='60' x2='1100' y2='80'></line>
        <line x1='1120' y1='60' x2='1140' y2='80'></line>
        <line x1='1160' y1='60' x2='1140' y2='80'></line>
        <line x1='1180' y1='60' x2='1160' y2='80'></line>
        <line x1='1180' y1='60' x2='1200' y2='80'></line>
        <line x1='1220' y1='60' x2='1200' y2='80'></line>
        <line x1='1220' y1='60' x2='1240' y2='80'></line>
        <line x1='1260' y1='60' x2='1240' y2='80'></line>
        <line x1='1260' y1='60' x2='1280' y2='80'></line>
        <line x1='1280' y1='60' x2='1300' y2='80'></line>
        <line x1='1300' y1='60' x2='1320' y2='80'></line>
        <line x1='1320' y1='60' x2='1340' y2='80'></line>
        <line x1='1340' y1='60' x2='1360' y2='80'></line>
        <line x1='1380' y1='60' x2='1360' y2='80'></line>
        <line x1='1400' y1='60' x2='1380' y2='80'></line>
        <line x1='1400' y1='60' x2='1420' y2='80'></line>
        <line x1='1440' y1='60' x2='1420' y2='80'></line>
        <line x1='20' y1='80' x2='0' y2='100'></line>
        <line x1='40' y1='80' x2='20' y2='100'></line>
        <line x1='40' y1='80' x2='60' y2='100'></line>
        <line x1='60' y1='80' x2='80' y2='100'></line>
        <line x1='100' y1='80' x2='80' y2='100'></line>
        <line x1='120' y1='80' x2='100' y2='100'></line>
        <line x1='140' y1='80' x2='120' y2='100'></line>
        <line x1='160' y1='80' x2='140' y2='100'></line>
        <line x1='160' y1='80' x2='180' y2='100'></line>
        <line x1='200' y1='80' x2='180' y2='100'></line>
        <line x1='220' y1='80' x2='200' y2='100'></line>
        <line x1='240' y1='80' x2='220' y2='100'></line>
        <line x1='260' y1='80' x2='240' y2='100'></line>
        <line x1='260' y1='80' x2='280' y2='100'></line>
        <line x1='300' y1='80' x2='280' y2='100'></line>
        <line x1='300' y1='80' x2='320' y2='100'></line>
        <line x1='320' y1='80' x2='340' y2='100'></line>
        <line x1='360' y1='80' x2='340' y2='100'></line>
        <line x1='380' y1='80' x2='360' y2='100'></line>
        <line x1='380' y1='80' x2='400' y2='100'></line>
        <line x1='400' y1='80' x2='420' y2='100'></line>
        <line x1='420' y1='80' x2='440' y2='100'></line>
        <line x1='460' y1='80' x2='440' y2='100'></line>
        <line x1='480' y1='80' x2='460' y2='100'></line>
        <line x1='500' y1='80' x2='480' y2='100'></line>
        <line x1='520' y1='80' x2='500' y2='100'></line>
        <line x1='540' y1='80' x2='520' y2='100'></line>
        <line x1='540' y1='80' x2='560' y2='100'></line>
        <line x1='560' y1='80' x2='580' y2='100'></line>
        <line x1='580' y1='80' x2='600' y2='100'></line>
        <line x1='620' y1='80' x2='600' y2='100'></line>
        <line x1='620' y1='80' x2='640' y2='100'></line>
        <line x1='660' y1='80' x2='640' y2='100'></line>
        <line x1='680' y1='80' x2='660' y2='100'></line>
        <line x1='680' y1='80' x2='700' y2='100'></line>
        <line x1='720' y1='80' x2='700' y2='100'></line>
        <line x1='720' y1='80' x2='740' y2='100'></line>
        <line x1='740' y1='80' x2='760' y2='100'></line>
        <line x1='760' y1='80' x2='780' y2='100'></line>
        <line x1='780' y1='80' x2='800' y2='100'></line>
        <line x1='800' y1='80' x2='820' y2='100'></line>
        <line x1='820' y1='80' x2='840' y2='100'></line>
        <line x1='860' y1='80' x2='840' y2='100'></line>
        <line x1='880' y1='80' x2='860' y2='100'></line>
        <line x1='880' y1='80' x2='900' y2='100'></line>
        <line x1='900' y1='80' x2='920' y2='100'></line>
        <line x1='920' y1='80' x2='940' y2='100'></line>
        <line x1='960' y1='80' x2='940' y2='100'></line>
        <line x1='980' y1='80' x2='960' y2='100'></line>
        <line x1='1000' y1='80' x2='980' y2='100'></line>
        <line x1='1020' y1='80' x2='1000' y2='100'></line>
        <line x1='1020' y1='80' x2='1040' y2='100'></line>
        <line x1='1040' y1='80' x2='1060' y2='100'></line>
        <line x1='1080' y1='80' x2='1060' y2='100'></line>
        <line x1='1080' y1='80' x2='1100' y2='100'></line>
        <line x1='1100' y1='80' x2='1120' y2='100'></line>
        <line x1='1140' y1='80' x2='1120' y2='100'></line>
        <line x1='1160' y1='80' x2='1140' y2='100'></line>
        <line x1='1160' y1='80' x2='1180' y2='100'></line>
        <line x1='1200' y1='80' x2='1180' y2='100'></line>
        <line x1='1200' y1='80' x2='1220' y2='100'></line>
        <line x1='1240' y1='80' x2='1220' y2='100'></line>
        <line x1='1260' y1='80' x2='1240' y2='100'></line>
        <line x1='1280' y1='80' x2='1260' y2='100'></line>
        <line x1='1280' y1='80' x2='1300' y2='100'></line>
        <line x1='1300' y1='80' x2='1320' y2='100'></line>
        <line x1='1320' y1='80' x2='1340' y2='100'></line>
        <line x1='1340' y1='80' x2='1360' y2='100'></line>
        <line x1='1360' y1='80' x2='1380' y2='100'></line>
        <line x1='1380' y1='80' x2='1400' y2='100'></line>
        <line x1='1420' y1='80' x2='1400' y2='100'></line>
        <line x1='1440' y1='80' x2='1420' y2='100'></line>
        <line x1='0' y1='100' x2='20' y2='120'></line>
        <line x1='20' y1='100' x2='40' y2='120'></line>
        <line x1='40' y1='100' x2='60' y2='120'></line>
        <line x1='60' y1='100' x2='80' y2='120'></line>
        <line x1='80' y1='100' x2='100' y2='120'></line>
        <line x1='100' y1='100' x2='120' y2='120'></line>
        <line x1='120' y1='100' x2='140' y2='120'></line>
        <line x1='160' y1='100' x2='140' y2='120'></line>
        <line x1='160' y1='100' x2='180' y2='120'></line>
        <line x1='200' y1='100' x2='180' y2='120'></line>
        <line x1='200' y1='100' x2='220' y2='120'></line>
        <line x1='240' y1='100' x2='220' y2='120'></line>
        <line x1='240' y1='100' x2='260' y2='120'></line>
        <line x1='260' y1='100' x2='280' y2='120'></line>
        <line x1='280' y1='100' x2='300' y2='120'></line>
        <line x1='320' y1='100' x2='300' y2='120'></line>
        <line x1='320' y1='100' x2='340' y2='120'></line>
        <line x1='360' y1='100' x2='340' y2='120'></line>
        <line x1='380' y1='100' x2='360' y2='120'></line>
        <line x1='380' y1='100' x2='400' y2='120'></line>
        <line x1='400' y1='100' x2='420' y2='120'></line>
        <line x1='440' y1='100' x2='420' y2='120'></line>
        <line x1='460' y1='100' x2='440' y2='120'></line>
        <line x1='480' y1='100' x2='460' y2='120'></line>
        <line x1='500' y1='100' x2='480' y2='120'></line>
        <line x1='500' y1='100' x2='520' y2='120'></line>
        <line x1='520' y1='100' x2='540' y2='120'></line>
        <line x1='560' y1='100' x2='540' y2='120'></line>
        <line x1='560' y1='100' x2='580' y2='120'></line>
        <line x1='600' y1='100' x2='580' y2='120'></line>
        <line x1='600' y1='100' x2='620' y2='120'></line>
        <line x1='620' y1='100' x2='640' y2='120'></line>
        <line x1='660' y1='100' x2='640' y2='120'></line>
        <line x1='680' y1='100' x2='660' y2='120'></line>
        <line x1='680' y1='100' x2='700' y2='120'></line>
        <line x1='700' y1='100' x2='720' y2='120'></line>
        <line x1='740' y1='100' x2='720' y2='120'></line>
        <line x1='740' y1='100' x2='760' y2='120'></line>
        <line x1='760' y1='100' x2='780' y2='120'></line>
        <line x1='800' y1='100' x2='780' y2='120'></line>
        <line x1='820' y1='100' x2='800' y2='120'></line>
        <line x1='840' y1='100' x2='820' y2='120'></line>
        <line x1='860' y1='100' x2='840' y2='120'></line>
        <line x1='880' y1='100' x2='860' y2='120'></line>
        <line x1='900' y1='100' x2='880' y2='120'></line>
        <line x1='920' y1='100' x2='900' y2='120'></line>
        <line x1='940' y1='100' x2='920' y2='120'></line>
        <line x1='960' y1='100' x2='940' y2='120'></line>
        <line x1='960' y1='100' x2='980' y2='120'></line>
        <line x1='980' y1='100' x2='1000' y2='120'></line>
        <line x1='1000' y1='100' x2='1020' y2='120'></line>
        <line x1='1040' y1='100' x2='1020' y2='120'></line>
        <line x1='1060' y1='100' x2='1040' y2='120'></line>
        <line x1='1060' y1='100' x2='1080' y2='120'></line>
        <line x1='1100' y1='100' x2='1080' y2='120'></line>
        <line x1='1120' y1='100' x2='1100' y2='120'></line>
        <line x1='1120' y1='100' x2='1140' y2='120'></line>
        <line x1='1140' y1='100' x2='1160' y2='120'></line>
        <line x1='1160' y1='100' x2='1180' y2='120'></line>
        <line x1='1180' y1='100' x2='1200' y2='120'></line>
        <line x1='1220' y1='100' x2='1200' y2='120'></line>
        <line x1='1220' y1='100' x2='1240' y2='120'></line>
        <line x1='1240' y1='100' x2='1260' y2='120'></line>
        <line x1='1280' y1='100' x2='1260' y2='120'></line>
        <line x1='1300' y1='100' x2='1280' y2='120'></line>
        <line x1='1300' y1='100' x2='1320' y2='120'></line>
        <line x1='1340' y1='100' x2='1320' y2='120'></line>
        <line x1='1340' y1='100' x2='1360' y2='120'></line>
        <line x1='1380' y1='100' x2='1360' y2='120'></line>
        <line x1='1400' y1='100' x2='1380' y2='120'></line>
        <line x1='1400' y1='100' x2='1420' y2='120'></line>
        <line x1='1440' y1='100' x2='1420' y2='120'></line>
        <line x1='20' y1='120' x2='0' y2='140'></line>
        <line x1='40' y1='120' x2='20' y2='140'></line>
        <line x1='40' y1='120' x2='60' y2='140'></line>
        <line x1='60' y1='120' x2='80' y2='140'></line>
        <line x1='100' y1='120' x2='80' y2='140'></line>
        <line x1='100' y1='120' x2='120' y2='140'></line>
        <line x1='140' y1='120' x2='120' y2='140'></line>
        <line x1='160' y1='120' x2='140' y2='140'></line>
        <line x1='160' y1='120' x2='180' y2='140'></line>
        <line x1='180' y1='120' x2='200' y2='140'></line>
        <line x1='200' y1='120' x2='220' y2='140'></line>
        <line x1='240' y1='120' x2='220' y2='140'></line>
        <line x1='240' y1='120' x2='260' y2='140'></line>
        <line x1='260' y1='120' x2='280' y2='140'></line>
        <line x1='300' y1='120' x2='280' y2='140'></line>
        <line x1='320' y1='120' x2='300' y2='140'></line>
        <line x1='340' y1='120' x2='320' y2='140'></line>
        <line x1='340' y1='120' x2='360' y2='140'></line>
        <line x1='360' y1='120' x2='380' y2='140'></line>
        <line x1='380' y1='120' x2='400' y2='140'></line>
        <line x1='400' y1='120' x2='420' y2='140'></line>
        <line x1='420' y1='120' x2='440' y2='140'></line>
        <line x1='440' y1='120' x2='460' y2='140'></line>
        <line x1='460' y1='120' x2='480' y2='140'></line>
        <line x1='480' y1='120' x2='500' y2='140'></line>
        <line x1='520' y1='120' x2='500' y2='140'></line>
        <line x1='520' y1='120' x2='540' y2='140'></line>
        <line x1='540' y1='120' x2='560' y2='140'></line>
        <line x1='560' y1='120' x2='580' y2='140'></line>
        <line x1='580' y1='120' x2='600' y2='140'></line>
        <line x1='620' y1='120' x2='600' y2='140'></line>
        <line x1='620' y1='120' x2='640' y2='140'></line>
        <line x1='640' y1='120' x2='660' y2='140'></line>
        <line x1='680' y1='120' x2='660' y2='140'></line>
        <line x1='680' y1='120' x2='700' y2='140'></line>
        <line x1='720' y1='120' x2='700' y2='140'></line>
        <line x1='740' y1='120' x2='720' y2='140'></line>
        <line x1='740' y1='120' x2='760' y2='140'></line>
        <line x1='780' y1='120' x2='760' y2='140'></line>
        <line x1='780' y1='120' x2='800' y2='140'></line>
        <line x1='800' y1='120' x2='820' y2='140'></line>
        <line x1='840' y1='120' x2='820' y2='140'></line>
        <line x1='840' y1='120' x2='860' y2='140'></line>
        <line x1='880' y1='120' x2='860' y2='140'></line>
        <line x1='880' y1='120' x2='900' y2='140'></line>
        <line x1='900' y1='120' x2='920' y2='140'></line>
        <line x1='940' y1='120' x2='920' y2='140'></line>
        <line x1='960' y1='120' x2='940' y2='140'></line>
        <line x1='960' y1='120' x2='980' y2='140'></line>
        <line x1='980' y1='120' x2='1000' y2='140'></line>
        <line x1='1020' y1='120' x2='1000' y2='140'></line>
        <line x1='1040' y1='120' x2='1020' y2='140'></line>
        <line x1='1040' y1='120' x2='1060' y2='140'></line>
        <line x1='1080' y1='120' x2='1060' y2='140'></line>
        <line x1='1080' y1='120' x2='1100' y2='140'></line>
        <line x1='1120' y1='120' x2='1100' y2='140'></line>
        <line x1='1120' y1='120' x2='1140' y2='140'></line>
        <line x1='1140' y1='120' x2='1160' y2='140'></line>
        <line x1='1180' y1='120' x2='1160' y2='140'></line>
        <line x1='1200' y1='120' x2='1180' y2='140'></line>
        <line x1='1200' y1='120' x2='1220' y2='140'></line>
        <line x1='1240' y1='120' x2='1220' y2='140'></line>
        <line x1='1260' y1='120' x2='1240' y2='140'></line>
        <line x1='1260' y1='120' x2='1280' y2='140'></line>
        <line x1='1280' y1='120' x2='1300' y2='140'></line>
        <line x1='1300' y1='120' x2='1320' y2='140'></line>
        <line x1='1340' y1='120' x2='1320' y2='140'></line>
        <line x1='1340' y1='120' x2='1360' y2='140'></line>
        <line x1='1360' y1='120' x2='1380' y2='140'></line>
        <line x1='1380' y1='120' x2='1400' y2='140'></line>
        <line x1='1400' y1='120' x2='1420' y2='140'></line>
        <line x1='1440' y1='120' x2='1420' y2='140'></line>
        <line x1='0' y1='140' x2='20' y2='160'></line>
        <line x1='20' y1='140' x2='40' y2='160'></line>
        <line x1='40' y1='140' x2='60' y2='160'></line>
        <line x1='60' y1='140' x2='80' y2='160'></line>
        <line x1='80' y1='140' x2='100' y2='160'></line>
        <line x1='100' y1='140' x2='120' y2='160'></line>
        <line x1='120' y1='140' x2='140' y2='160'></line>
        <line x1='140' y1='140' x2='160' y2='160'></line>
        <line x1='180' y1='140' x2='160' y2='160'></line>
        <line x1='200' y1='140' x2='180' y2='160'></line>
        <line x1='220' y1='140' x2='200' y2='160'></line>
        <line x1='240' y1='140' x2='220' y2='160'></line>
        <line x1='240' y1='140' x2='260' y2='160'></line>
        <line x1='280' y1='140' x2='260' y2='160'></line>
        <line x1='300' y1='140' x2='280' y2='160'></line>
        <line x1='300' y1='140' x2='320' y2='160'></line>
        <line x1='320' y1='140' x2='340' y2='160'></line>
        <line x1='360' y1='140' x2='340' y2='160'></line>
        <line x1='380' y1='140' x2='360' y2='160'></line>
        <line x1='380' y1='140' x2='400' y2='160'></line>
        <line x1='420' y1='140' x2='400' y2='160'></line>
        <line x1='440' y1='140' x2='420' y2='160'></line>
        <line x1='440' y1='140' x2='460' y2='160'></line>
        <line x1='480' y1='140' x2='460' y2='160'></line>
        <line x1='500' y1='140' x2='480' y2='160'></line>
        <line x1='520' y1='140' x2='500' y2='160'></line>
        <line x1='540' y1='140' x2='520' y2='160'></line>
        <line x1='560' y1='140' x2='540' y2='160'></line>
        <line x1='560' y1='140' x2='580' y2='160'></line>
        <line x1='580' y1='140' x2='600' y2='160'></line>
        <line x1='620' y1='140' x2='600' y2='160'></line>
        <line x1='620' y1='140' x2='640' y2='160'></line>
        <line x1='640' y1='140' x2='660' y2='160'></line>
        <line x1='680' y1='140' x2='660' y2='160'></line>
        <line x1='680' y1='140' x2='700' y2='160'></line>
        <line x1='720' y1='140' x2='700' y2='160'></line>
        <line x1='720' y1='140' x2='740' y2='160'></line>
        <line x1='740' y1='140' x2='760' y2='160'></line>
        <line x1='780' y1='140' x2='760' y2='160'></line>
        <line x1='780' y1='140' x2='800' y2='160'></line>
        <line x1='820' y1='140' x2='800' y2='160'></line>
        <line x1='840' y1='140' x2='820' y2='160'></line>
        <line x1='860' y1='140' x2='840' y2='160'></line>
        <line x1='880' y1='140' x2='860' y2='160'></line>
        <line x1='880' y1='140' x2='900' y2='160'></line>
        <line x1='920' y1='140' x2='900' y2='160'></line>
        <line x1='920' y1='140' x2='940' y2='160'></line>
        <line x1='940' y1='140' x2='960' y2='160'></line>
        <line x1='980' y1='140' x2='960' y2='160'></line>
        <line x1='980' y1='140' x2='1000' y2='160'></line>
        <line x1='1000' y1='140' x2='1020' y2='160'></line>
        <line x1='1020' y1='140' x2='1040' y2='160'></line>
        <line x1='1040' y1='140' x2='1060' y2='160'></line>
        <line x1='1080' y1='140' x2='1060' y2='160'></line>
        <line x1='1080' y1='140' x2='1100' y2='160'></line>
        <line x1='1100' y1='140' x2='1120' y2='160'></line>
        <line x1='1140' y1='140' x2='1120' y2='160'></line>
        <line x1='1140' y1='140' x2='1160' y2='160'></line>
        <line x1='1160' y1='140' x2='1180' y2='160'></line>
        <line x1='1180' y1='140' x2='1200' y2='160'></line>
        <line x1='1220' y1='140' x2='1200' y2='160'></line>
        <line x1='1240' y1='140' x2='1220' y2='160'></line>
        <line x1='1260' y1='140' x2='1240' y2='160'></line>
        <line x1='1260' y1='140' x2='1280' y2='160'></line>
        <line x1='1300' y1='140' x2='1280' y2='160'></line>
        <line x1='1300' y1='140' x2='1320' y2='160'></line>
        <line x1='1320' y1='140' x2='1340' y2='160'></line>
        <line x1='1340' y1='140' x2='1360' y2='160'></line>
        <line x1='1380' y1='140' x2='1360' y2='160'></line>
        <line x1='1400' y1='140' x2='1380' y2='160'></line>
        <line x1='1420' y1='140' x2='1400' y2='160'></line>
        <line x1='1440' y1='140' x2='1420' y2='160'></line>
        <line x1='20' y1='160' x2='0' y2='180'></line>
        <line x1='20' y1='160' x2='40' y2='180'></line>
        <line x1='60' y1='160' x2='40' y2='180'></line>
        <line x1='80' y1='160' x2='60' y2='180'></line>
        <line x1='80' y1='160' x2='100' y2='180'></line>
        <line x1='100' y1='160' x2='120' y2='180'></line>
        <line x1='120' y1='160' x2='140' y2='180'></line>
        <line x1='160' y1='160' x2='140' y2='180'></line>
        <line x1='160' y1='160' x2='180' y2='180'></line>
        <line x1='200' y1='160' x2='180' y2='180'></line>
        <line x1='200' y1='160' x2='220' y2='180'></line>
        <line x1='240' y1='160' x2='220' y2='180'></line>
        <line x1='240' y1='160' x2='260' y2='180'></line>
        <line x1='280' y1='160' x2='260' y2='180'></line>
        <line x1='280' y1='160' x2='300' y2='180'></line>
        <line x1='320' y1='160' x2='300' y2='180'></line>
        <line x1='340' y1='160' x2='320' y2='180'></line>
        <line x1='340' y1='160' x2='360' y2='180'></line>
        <line x1='360' y1='160' x2='380' y2='180'></line>
        <line x1='400' y1='160' x2='380' y2='180'></line>
        <line x1='420' y1='160' x2='400' y2='180'></line>
        <line x1='420' y1='160' x2='440' y2='180'></line>
        <line x1='440' y1='160' x2='460' y2='180'></line>
        <line x1='460' y1='160' x2='480' y2='180'></line>
        <line x1='480' y1='160' x2='500' y2='180'></line>
        <line x1='500' y1='160' x2='520' y2='180'></line>
        <line x1='520' y1='160' x2='540' y2='180'></line>
        <line x1='560' y1='160' x2='540' y2='180'></line>
        <line x1='560' y1='160' x2='580' y2='180'></line>
        <line x1='600' y1='160' x2='580' y2='180'></line>
        <line x1='620' y1='160' x2='600' y2='180'></line>
        <line x1='620' y1='160' x2='640' y2='180'></line>
        <line x1='640' y1='160' x2='660' y2='180'></line>
        <line x1='680' y1='160' x2='660' y2='180'></line>
        <line x1='680' y1='160' x2='700' y2='180'></line>
        <line x1='700' y1='160' x2='720' y2='180'></line>
        <line x1='740' y1='160' x2='720' y2='180'></line>
        <line x1='740' y1='160' x2='760' y2='180'></line>
        <line x1='780' y1='160' x2='760' y2='180'></line>
        <line x1='780' y1='160' x2='800' y2='180'></line>
        <line x1='800' y1='160' x2='820' y2='180'></line>
        <line x1='820' y1='160' x2='840' y2='180'></line>
        <line x1='860' y1='160' x2='840' y2='180'></line>
        <line x1='880' y1='160' x2='860' y2='180'></line>
        <line x1='900' y1='160' x2='880' y2='180'></line>
        <line x1='920' y1='160' x2='900' y2='180'></line>
        <line x1='920' y1='160' x2='940' y2='180'></line>
        <line x1='960' y1='160' x2='940' y2='180'></line>
        <line x1='980' y1='160' x2='960' y2='180'></line>
        <line x1='1000' y1='160' x2='980' y2='180'></line>
        <line x1='1020' y1='160' x2='1000' y2='180'></line>
        <line x1='1020' y1='160' x2='1040' y2='180'></line>
        <line x1='1040' y1='160' x2='1060' y2='180'></line>
        <line x1='1080' y1='160' x2='1060' y2='180'></line>
        <line x1='1100' y1='160' x2='1080' y2='180'></line>
        <line x1='1100' y1='160' x2='1120' y2='180'></line>
        <line x1='1140' y1='160' x2='1120' y2='180'></line>
        <line x1='1160' y1='160' x2='1140' y2='180'></line>
        <line x1='1160' y1='160' x2='1180' y2='180'></line>
        <line x1='1200' y1='160' x2='1180' y2='180'></line>
        <line x1='1220' y1='160' x2='1200' y2='180'></line>
        <line x1='1240' y1='160' x2='1220' y2='180'></line>
        <line x1='1240' y1='160' x2='1260' y2='180'></line>
        <line x1='1280' y1='160' x2='1260' y2='180'></line>
        <line x1='1300' y1='160' x2='1280' y2='180'></line>
        <line x1='1320' y1='160' x2='1300' y2='180'></line>
        <line x1='1320' y1='160' x2='1340' y2='180'></line>
        <line x1='1360' y1='160' x2='1340' y2='180'></line>
        <line x1='1360' y1='160' x2='1380' y2='180'></line>
        <line x1='1380' y1='160' x2='1400' y2='180'></line>
        <line x1='1420' y1='160' x2='1400' y2='180'></line>
        <line x1='1420' y1='160' x2='1440' y2='180'></line>
        <line x1='20' y1='180' x2='0' y2='200'></line>
        <line x1='20' y1='180' x2='40' y2='200'></line>
        <line x1='60' y1='180' x2='40' y2='200'></line>
        <line x1='80' y1='180' x2='60' y2='200'></line>
        <line x1='100' y1='180' x2='80' y2='200'></line>
        <line x1='100' y1='180' x2='120' y2='200'></line>
        <line x1='120' y1='180' x2='140' y2='200'></line>
        <line x1='160' y1='180' x2='140' y2='200'></line>
        <line x1='160' y1='180' x2='180' y2='200'></line>
        <line x1='200' y1='180' x2='180' y2='200'></line>
        <line x1='200' y1='180' x2='220' y2='200'></line>
        <line x1='240' y1='180' x2='220' y2='200'></line>
        <line x1='260' y1='180' x2='240' y2='200'></line>
        <line x1='280' y1='180' x2='260' y2='200'></line>
        <line x1='300' y1='180' x2='280' y2='200'></line>
        <line x1='320' y1='180' x2='300' y2='200'></line>
        <line x1='320' y1='180' x2='340' y2='200'></line>
        <line x1='360' y1='180' x2='340' y2='200'></line>
        <line x1='360' y1='180' x2='380' y2='200'></line>
        <line x1='400' y1='180' x2='380' y2='200'></line>
        <line x1='420' y1='180' x2='400' y2='200'></line>
        <line x1='420' y1='180' x2='440' y2='200'></line>
        <line x1='440' y1='180' x2='460' y2='200'></line>
        <line x1='460' y1='180' x2='480' y2='200'></line>
        <line x1='500' y1='180' x2='480' y2='200'></line>
        <line x1='520' y1='180' x2='500' y2='200'></line>
        <line x1='520' y1='180' x2='540' y2='200'></line>
        <line x1='540' y1='180' x2='560' y2='200'></line>
        <line x1='580' y1='180' x2='560' y2='200'></line>
        <line x1='600' y1='180' x2='580' y2='200'></line>
        <line x1='600' y1='180' x2='620' y2='200'></line>
        <line x1='640' y1='180' x2='620' y2='200'></line>
        <line x1='660' y1='180' x2='640' y2='200'></line>
        <line x1='680' y1='180' x2='660' y2='200'></line>
        <line x1='680' y1='180' x2='700' y2='200'></line>
        <line x1='720' y1='180' x2='700' y2='200'></line>
        <line x1='740' y1='180' x2='720' y2='200'></line>
        <line x1='740' y1='180' x2='760' y2='200'></line>
        <line x1='780' y1='180' x2='760' y2='200'></line>
        <line x1='800' y1='180' x2='780' y2='200'></line>
        <line x1='800' y1='180' x2='820' y2='200'></line>
        <line x1='840' y1='180' x2='820' y2='200'></line>
        <line x1='860' y1='180' x2='840' y2='200'></line>
        <line x1='880' y1='180' x2='860' y2='200'></line>
        <line x1='900' y1='180' x2='880' y2='200'></line>
        <line x1='920' y1='180' x2='900' y2='200'></line>
        <line x1='920' y1='180' x2='940' y2='200'></line>
        <line x1='960' y1='180' x2='940' y2='200'></line>
        <line x1='980' y1='180' x2='960' y2='200'></line>
        <line x1='980' y1='180' x2='1000' y2='200'></line>
        <line x1='1000' y1='180' x2='1020' y2='200'></line>
        <line x1='1040' y1='180' x2='1020' y2='200'></line>
        <line x1='1060' y1='180' x2='1040' y2='200'></line>
        <line x1='1060' y1='180' x2='1080' y2='200'></line>
        <line x1='1080' y1='180' x2='1100' y2='200'></line>
        <line x1='1120' y1='180' x2='1100' y2='200'></line>
        <line x1='1120' y1='180' x2='1140' y2='200'></line>
        <line x1='1140' y1='180' x2='1160' y2='200'></line>
        <line x1='1180' y1='180' x2='1160' y2='200'></line>
        <line x1='1200' y1='180' x2='1180' y2='200'></line>
        <line x1='1220' y1='180' x2='1200' y2='200'></line>
        <line x1='1220' y1='180' x2='1240' y2='200'></line>
        <line x1='1260' y1='180' x2='1240' y2='200'></line>
        <line x1='1260' y1='180' x2='1280' y2='200'></line>
        <line x1='1280' y1='180' x2='1300' y2='200'></line>
        <line x1='1300' y1='180' x2='1320' y2='200'></line>
        <line x1='1320' y1='180' x2='1340' y2='200'></line>
        <line x1='1340' y1='180' x2='1360' y2='200'></line>
        <line x1='1380' y1='180' x2='1360' y2='200'></line>
        <line x1='1380' y1='180' x2='1400' y2='200'></line>
        <line x1='1400' y1='180' x2='1420' y2='200'></line>
        <line x1='1420' y1='180' x2='1440' y2='200'></line>
        <line x1='0' y1='200' x2='20' y2='220'></line>
        <line x1='20' y1='200' x2='40' y2='220'></line>
        <line x1='60' y1='200' x2='40' y2='220'></line>
        <line x1='60' y1='200' x2='80' y2='220'></line>
        <line x1='80' y1='200' x2='100' y2='220'></line>
        <line x1='120' y1='200' x2='100' y2='220'></line>
        <line x1='120' y1='200' x2='140' y2='220'></line>
        <line x1='140' y1='200' x2='160' y2='220'></line>
        <line x1='160' y1='200' x2='180' y2='220'></line>
        <line x1='200' y1='200' x2='180' y2='220'></line>
        <line x1='220' y1='200' x2='200' y2='220'></line>
        <line x1='220' y1='200' x2='240' y2='220'></line>
        <line x1='260' y1='200' x2='240' y2='220'></line>
        <line x1='280' y1='200' x2='260' y2='220'></line>
        <line x1='280' y1='200' x2='300' y2='220'></line>
        <line x1='320' y1='200' x2='300' y2='220'></line>
        <line x1='340' y1='200' x2='320' y2='220'></line>
        <line x1='360' y1='200' x2='340' y2='220'></line>
        <line x1='380' y1='200' x2='360' y2='220'></line>
        <line x1='380' y1='200' x2='400' y2='220'></line>
        <line x1='400' y1='200' x2='420' y2='220'></line>
        <line x1='440' y1='200' x2='420' y2='220'></line>
        <line x1='460' y1='200' x2='440' y2='220'></line>
        <line x1='460' y1='200' x2='480' y2='220'></line>
        <line x1='500' y1='200' x2='480' y2='220'></line>
        <line x1='520' y1='200' x2='500' y2='220'></line>
        <line x1='520' y1='200' x2='540' y2='220'></line>
        <line x1='540' y1='200' x2='560' y2='220'></line>
        <line x1='580' y1='200' x2='560' y2='220'></line>
        <line x1='580' y1='200' x2='600' y2='220'></line>
        <line x1='620' y1='200' x2='600' y2='220'></line>
        <line x1='640' y1='200' x2='620' y2='220'></line>
        <line x1='660' y1='200' x2='640' y2='220'></line>
        <line x1='660' y1='200' x2='680' y2='220'></line>
        <line x1='680' y1='200' x2='700' y2='220'></line>
        <line x1='700' y1='200' x2='720' y2='220'></line>
        <line x1='720' y1='200' x2='740' y2='220'></line>
        <line x1='760' y1='200' x2='740' y2='220'></line>
        <line x1='780' y1='200' x2='760' y2='220'></line>
        <line x1='780' y1='200' x2='800' y2='220'></line>
        <line x1='820' y1='200' x2='800' y2='220'></line>
        <line x1='820' y1='200' x2='840' y2='220'></line>
        <line x1='860' y1='200' x2='840' y2='220'></line>
        <line x1='860' y1='200' x2='880' y2='220'></line>
        <line x1='900' y1='200' x2='880' y2='220'></line>
        <line x1='900' y1='200' x2='920' y2='220'></line>
        <line x1='940' y1='200' x2='920' y2='220'></line>
        <line x1='940' y1='200' x2='960' y2='220'></line>
        <line x1='980' y1='200' x2='960' y2='220'></line>
        <line x1='980' y1='200' x2='1000' y2='220'></line>
        <line x1='1020' y1='200' x2='1000' y2='220'></line>
        <line x1='1020' y1='200' x2='1040' y2='220'></line>
        <line x1='1040' y1='200' x2='1060' y2='220'></line>
        <line x1='1080' y1='200' x2='1060' y2='220'></line>
        <line x1='1080' y1='200' x2='1100' y2='220'></line>
        <line x1='1120' y1='200' x2='1100' y2='220'></line>
        <line x1='1140' y1='200' x2='1120' y2='220'></line>
        <line x1='1140' y1='200' x2='1160' y2='220'></line>
        <line x1='1160' y1='200' x2='1180' y2='220'></line>
        <line x1='1180' y1='200' x2='1200' y2='220'></line>
        <line x1='1220' y1='200' x2='1200' y2='220'></line>
        <line x1='1240' y1='200' x2='1220' y2='220'></line>
        <line x1='1240' y1='200' x2='1260' y2='220'></line>
        <line x1='1280' y1='200' x2='1260' y2='220'></line>
        <line x1='1280' y1='200' x2='1300' y2='220'></line>
        <line x1='1300' y1='200' x2='1320' y2='220'></line>
        <line x1='1320' y1='200' x2='1340' y2='220'></line>
        <line x1='1360' y1='200' x2='1340' y2='220'></line>
        <line x1='1380' y1='200' x2='1360' y2='220'></line>
        <line x1='1380' y1='200' x2='1400' y2='220'></line>
        <line x1='1400' y1='200' x2='1420' y2='220'></line>
        <line x1='1420' y1='200' x2='1440' y2='220'></line>
        <line x1='20' y1='220' x2='0' y2='240'></line>
        <line x1='20' y1='220' x2='40' y2='240'></line>
        <line x1='40' y1='220' x2='60' y2='240'></line>
        <line x1='80' y1='220' x2='60' y2='240'></line>
        <line x1='100' y1='220' x2='80' y2='240'></line>
        <line x1='120' y1='220' x2='100' y2='240'></line>
        <line x1='140' y1='220' x2='120' y2='240'></line>
        <line x1='140' y1='220' x2='160' y2='240'></line>
        <line x1='160' y1='220' x2='180' y2='240'></line>
        <line x1='180' y1='220' x2='200' y2='240'></line>
        <line x1='220' y1='220' x2='200' y2='240'></line>
        <line x1='240' y1='220' x2='220' y2='240'></line>
        <line x1='260' y1='220' x2='240' y2='240'></line>
        <line x1='280' y1='220' x2='260' y2='240'></line>
        <line x1='300' y1='220' x2='280' y2='240'></line>
        <line x1='320' y1='220' x2='300' y2='240'></line>
        <line x1='340' y1='220' x2='320' y2='240'></line>
        <line x1='360' y1='220' x2='340' y2='240'></line>
        <line x1='380' y1='220' x2='360' y2='240'></line>
        <line x1='400' y1='220' x2='380' y2='240'></line>
        <line x1='420' y1='220' x2='400' y2='240'></line>
        <line x1='420' y1='220' x2='440' y2='240'></line>
        <line x1='460' y1='220' x2='440' y2='240'></line>
        <line x1='480' y1='220' x2='460' y2='240'></line>
        <line x1='480' y1='220' x2='500' y2='240'></line>
        <line x1='500' y1='220' x2='520' y2='240'></line>
        <line x1='540' y1='220' x2='520' y2='240'></line>
        <line x1='560' y1='220' x2='540' y2='240'></line>
        <line x1='580' y1='220' x2='560' y2='240'></line>
        <line x1='600' y1='220' x2='580' y2='240'></line>
        <line x1='600' y1='220' x2='620' y2='240'></line>
        <line x1='620' y1='220' x2='640' y2='240'></line>
        <line x1='640' y1='220' x2='660' y2='240'></line>
        <line x1='680' y1='220' x2='660' y2='240'></line>
        <line x1='700' y1='220' x2='680' y2='240'></line>
        <line x1='700' y1='220' x2='720' y2='240'></line>
        <line x1='720' y1='220' x2='740' y2='240'></line>
        <line x1='740' y1='220' x2='760' y2='240'></line>
        <line x1='780' y1='220' x2='760' y2='240'></line>
        <line x1='800' y1='220' x2='780' y2='240'></line>
        <line x1='800' y1='220' x2='820' y2='240'></line>
        <line x1='840' y1='220' x2='820' y2='240'></line>
        <line x1='860' y1='220' x2='840' y2='240'></line>
        <line x1='880' y1='220' x2='860' y2='240'></line>
        <line x1='900' y1='220' x2='880' y2='240'></line>
        <line x1='900' y1='220' x2='920' y2='240'></line>
        <line x1='920' y1='220' x2='940' y2='240'></line>
        <line x1='960' y1='220' x2='940' y2='240'></line>
        <line x1='980' y1='220' x2='960' y2='240'></line>
        <line x1='1000' y1='220' x2='980' y2='240'></line>
        <line x1='1000' y1='220' x2='1020' y2='240'></line>
        <line x1='1020' y1='220' x2='1040' y2='240'></line>
        <line x1='1060' y1='220' x2='1040' y2='240'></line>
        <line x1='1060' y1='220' x2='1080' y2='240'></line>
        <line x1='1100' y1='220' x2='1080' y2='240'></line>
        <line x1='1100' y1='220' x2='1120' y2='240'></line>
        <line x1='1120' y1='220' x2='1140' y2='240'></line>
        <line x1='1160' y1='220' x2='1140' y2='240'></line>
        <line x1='1180' y1='220' x2='1160' y2='240'></line>
        <line x1='1180' y1='220' x2='1200' y2='240'></line>
        <line x1='1220' y1='220' x2='1200' y2='240'></line>
        <line x1='1240' y1='220' x2='1220' y2='240'></line>
        <line x1='1240' y1='220' x2='1260' y2='240'></line>
        <line x1='1280' y1='220' x2='1260' y2='240'></line>
        <line x1='1280' y1='220' x2='1300' y2='240'></line>
        <line x1='1320' y1='220' x2='1300' y2='240'></line>
        <line x1='1340' y1='220' x2='1320' y2='240'></line>
        <line x1='1360' y1='220' x2='1340' y2='240'></line>
        <line x1='1380' y1='220' x2='1360' y2='240'></line>
        <line x1='1380' y1='220' x2='1400' y2='240'></line>
        <line x1='1400' y1='220' x2='1420' y2='240'></line>
        <line x1='1440' y1='220' x2='1420' y2='240'></line>
        <line x1='0' y1='240' x2='20' y2='260'></line>
        <line x1='40' y1='240' x2='20' y2='260'></line>
        <line x1='60' y1='240' x2='40' y2='260'></line>
        <line x1='80' y1='240' x2='60' y2='260'></line>
        <line x1='100' y1='240' x2='80' y2='260'></line>
        <line x1='100' y1='240' x2='120' y2='260'></line>
        <line x1='120' y1='240' x2='140' y2='260'></line>
        <line x1='160' y1='240' x2='140' y2='260'></line>
        <line x1='180' y1='240' x2='160' y2='260'></line>
        <line x1='200' y1='240' x2='180' y2='260'></line>
        <line x1='220' y1='240' x2='200' y2='260'></line>
        <line x1='240' y1='240' x2='220' y2='260'></line>
        <line x1='260' y1='240' x2='240' y2='260'></line>
        <line x1='280' y1='240' x2='260' y2='260'></line>
        <line x1='300' y1='240' x2='280' y2='260'></line>
        <line x1='300' y1='240' x2='320' y2='260'></line>
        <line x1='340' y1='240' x2='320' y2='260'></line>
        <line x1='340' y1='240' x2='360' y2='260'></line>
        <line x1='380' y1='240' x2='360' y2='260'></line>
        <line x1='380' y1='240' x2='400' y2='260'></line>
        <line x1='400' y1='240' x2='420' y2='260'></line>
        <line x1='440' y1='240' x2='420' y2='260'></line>
        <line x1='460' y1='240' x2='440' y2='260'></line>
        <line x1='480' y1='240' x2='460' y2='260'></line>
        <line x1='500' y1='240' x2='480' y2='260'></line>
        <line x1='520' y1='240' x2='500' y2='260'></line>
        <line x1='540' y1='240' x2='520' y2='260'></line>
        <line x1='540' y1='240' x2='560' y2='260'></line>
        <line x1='580' y1='240' x2='560' y2='260'></line>
        <line x1='580' y1='240' x2='600' y2='260'></line>
        <line x1='620' y1='240' x2='600' y2='260'></line>
        <line x1='620' y1='240' x2='640' y2='260'></line>
        <line x1='660' y1='240' x2='640' y2='260'></line>
        <line x1='680' y1='240' x2='660' y2='260'></line>
        <line x1='680' y1='240' x2='700' y2='260'></line>
        <line x1='720' y1='240' x2='700' y2='260'></line>
        <line x1='720' y1='240' x2='740' y2='260'></line>
        <line x1='760' y1='240' x2='740' y2='260'></line>
        <line x1='760' y1='240' x2='780' y2='260'></line>
        <line x1='780' y1='240' x2='800' y2='260'></line>
        <line x1='820' y1='240' x2='800' y2='260'></line>
        <line x1='840' y1='240' x2='820' y2='260'></line>
        <line x1='840' y1='240' x2='860' y2='260'></line>
        <line x1='860' y1='240' x2='880' y2='260'></line>
        <line x1='880' y1='240' x2='900' y2='260'></line>
        <line x1='900' y1='240' x2='920' y2='260'></line>
        <line x1='940' y1='240' x2='920' y2='260'></line>
        <line x1='960' y1='240' x2='940' y2='260'></line>
        <line x1='980' y1='240' x2='960' y2='260'></line>
        <line x1='1000' y1='240' x2='980' y2='260'></line>
        <line x1='1000' y1='240' x2='1020' y2='260'></line>
        <line x1='1020' y1='240' x2='1040' y2='260'></line>
        <line x1='1060' y1='240' x2='1040' y2='260'></line>
        <line x1='1080' y1='240' x2='1060' y2='260'></line>
        <line x1='1080' y1='240' x2='1100' y2='260'></line>
        <line x1='1120' y1='240' x2='1100' y2='260'></line>
        <line x1='1120' y1='240' x2='1140' y2='260'></line>
        <line x1='1160' y1='240' x2='1140' y2='260'></line>
        <line x1='1160' y1='240' x2='1180' y2='260'></line>
        <line x1='1200' y1='240' x2='1180' y2='260'></line>
        <line x1='1200' y1='240' x2='1220' y2='260'></line>
        <line x1='1220' y1='240' x2='1240' y2='260'></line>
        <line x1='1240' y1='240' x2='1260' y2='260'></line>
        <line x1='1260' y1='240' x2='1280' y2='260'></line>
        <line x1='1280' y1='240' x2='1300' y2='260'></line>
        <line x1='1300' y1='240' x2='1320' y2='260'></line>
        <line x1='1320' y1='240' x2='1340' y2='260'></line>
        <line x1='1340' y1='240' x2='1360' y2='260'></line>
        <line x1='1380' y1='240' x2='1360' y2='260'></line>
        <line x1='1380' y1='240' x2='1400' y2='260'></line>
        <line x1='1400' y1='240' x2='1420' y2='260'></line>
        <line x1='1440' y1='240' x2='1420' y2='260'></line>
        <line x1='20' y1='260' x2='0' y2='280'></line>
        <line x1='20' y1='260' x2='40' y2='280'></line>
        <line x1='60' y1='260' x2='40' y2='280'></line>
        <line x1='60' y1='260' x2='80' y2='280'></line>
        <line x1='80' y1='260' x2='100' y2='280'></line>
        <line x1='120' y1='260' x2='100' y2='280'></line>
        <line x1='120' y1='260' x2='140' y2='280'></line>
        <line x1='140' y1='260' x2='160' y2='280'></line>
        <line x1='160' y1='260' x2='180' y2='280'></line>
        <line x1='180' y1='260' x2='200' y2='280'></line>
        <line x1='220' y1='260' x2='200' y2='280'></line>
        <line x1='220' y1='260' x2='240' y2='280'></line>
        <line x1='240' y1='260' x2='260' y2='280'></line>
        <line x1='280' y1='260' x2='260' y2='280'></line>
        <line x1='300' y1='260' x2='280' y2='280'></line>
        <line x1='320' y1='260' x2='300' y2='280'></line>
        <line x1='340' y1='260' x2='320' y2='280'></line>
        <line x1='340' y1='260' x2='360' y2='280'></line>
        <line x1='380' y1='260' x2='360' y2='280'></line>
        <line x1='380' y1='260' x2='400' y2='280'></line>
        <line x1='420' y1='260' x2='400' y2='280'></line>
        <line x1='440' y1='260' x2='420' y2='280'></line>
        <line x1='460' y1='260' x2='440' y2='280'></line>
        <line x1='480' y1='260' x2='460' y2='280'></line>
        <line x1='480' y1='260' x2='500' y2='280'></line>
        <line x1='500' y1='260' x2='520' y2='280'></line>
        <line x1='520' y1='260' x2='540' y2='280'></line>
        <line x1='560' y1='260' x2='540' y2='280'></line>
        <line x1='560' y1='260' x2='580' y2='280'></line>
        <line x1='580' y1='260' x2='600' y2='280'></line>
        <line x1='620' y1='260' x2='600' y2='280'></line>
        <line x1='620' y1='260' x2='640' y2='280'></line>
        <line x1='640' y1='260' x2='660' y2='280'></line>
        <line x1='660' y1='260' x2='680' y2='280'></line>
        <line x1='700' y1='260' x2='680' y2='280'></line>
        <line x1='720' y1='260' x2='700' y2='280'></line>
        <line x1='740' y1='260' x2='720' y2='280'></line>
        <line x1='760' y1='260' x2='740' y2='280'></line>
        <line x1='780' y1='260' x2='760' y2='280'></line>
        <line x1='780' y1='260' x2='800' y2='280'></line>
        <line x1='800' y1='260' x2='820' y2='280'></line>
        <line x1='820' y1='260' x2='840' y2='280'></line>
        <line x1='840' y1='260' x2='860' y2='280'></line>
        <line x1='880' y1='260' x2='860' y2='280'></line>
        <line x1='880' y1='260' x2='900' y2='280'></line>
        <line x1='900' y1='260' x2='920' y2='280'></line>
        <line x1='920' y1='260' x2='940' y2='280'></line>
        <line x1='940' y1='260' x2='960' y2='280'></line>
        <line x1='960' y1='260' x2='980' y2='280'></line>
        <line x1='980' y1='260' x2='1000' y2='280'></line>
        <line x1='1000' y1='260' x2='1020' y2='280'></line>
        <line x1='1040' y1='260' x2='1020' y2='280'></line>
        <line x1='1060' y1='260' x2='1040' y2='280'></line>
        <line x1='1080' y1='260' x2='1060' y2='280'></line>
        <line x1='1080' y1='260' x2='1100' y2='280'></line>
        <line x1='1100' y1='260' x2='1120' y2='280'></line>
        <line x1='1140' y1='260' x2='1120' y2='280'></line>
        <line x1='1140' y1='260' x2='1160' y2='280'></line>
        <line x1='1180' y1='260' x2='1160' y2='280'></line>
        <line x1='1200' y1='260' x2='1180' y2='280'></line>
        <line x1='1220' y1='260' x2='1200' y2='280'></line>
        <line x1='1220' y1='260' x2='1240' y2='280'></line>
        <line x1='1240' y1='260' x2='1260' y2='280'></line>
        <line x1='1280' y1='260' x2='1260' y2='280'></line>
        <line x1='1280' y1='260' x2='1300' y2='280'></line>
        <line x1='1320' y1='260' x2='1300' y2='280'></line>
        <line x1='1320' y1='260' x2='1340' y2='280'></line>
        <line x1='1360' y1='260' x2='1340' y2='280'></line>
        <line x1='1380' y1='260' x2='1360' y2='280'></line>
        <line x1='1380' y1='260' x2='1400' y2='280'></line>
        <line x1='1420' y1='260' x2='1400' y2='280'></line>
        <line x1='1420' y1='260' x2='1440' y2='280'></line>
        <line x1='20' y1='280' x2='0' y2='300'></line>
        <line x1='40' y1='280' x2='20' y2='300'></line>
        <line x1='60' y1='280' x2='40' y2='300'></line>
        <line x1='80' y1='280' x2='60' y2='300'></line>
        <line x1='100' y1='280' x2='80' y2='300'></line>
        <line x1='120' y1='280' x2='100' y2='300'></line>
        <line x1='140' y1='280' x2='120' y2='300'></line>
        <line x1='160' y1='280' x2='140' y2='300'></line>
        <line x1='180' y1='280' x2='160' y2='300'></line>
        <line x1='180' y1='280' x2='200' y2='300'></line>
        <line x1='220' y1='280' x2='200' y2='300'></line>
        <line x1='220' y1='280' x2='240' y2='300'></line>
        <line x1='260' y1='280' x2='240' y2='300'></line>
        <line x1='260' y1='280' x2='280' y2='300'></line>
        <line x1='280' y1='280' x2='300' y2='300'></line>
        <line x1='300' y1='280' x2='320' y2='300'></line>
        <line x1='340' y1='280' x2='320' y2='300'></line>
        <line x1='360' y1='280' x2='340' y2='300'></line>
        <line x1='380' y1='280' x2='360' y2='300'></line>
        <line x1='400' y1='280' x2='380' y2='300'></line>
        <line x1='420' y1='280' x2='400' y2='300'></line>
        <line x1='440' y1='280' x2='420' y2='300'></line>
        <line x1='440' y1='280' x2='460' y2='300'></line>
        <line x1='460' y1='280' x2='480' y2='300'></line>
        <line x1='480' y1='280' x2='500' y2='300'></line>
        <line x1='520' y1='280' x2='500' y2='300'></line>
        <line x1='520' y1='280' x2='540' y2='300'></line>
        <line x1='560' y1='280' x2='540' y2='300'></line>
        <line x1='580' y1='280' x2='560' y2='300'></line>
        <line x1='580' y1='280' x2='600' y2='300'></line>
        <line x1='620' y1='280' x2='600' y2='300'></line>
        <line x1='640' y1='280' x2='620' y2='300'></line>
        <line x1='660' y1='280' x2='640' y2='300'></line>
        <line x1='660' y1='280' x2='680' y2='300'></line>
        <line x1='700' y1='280' x2='680' y2='300'></line>
        <line x1='700' y1='280' x2='720' y2='300'></line>
        <line x1='740' y1='280' x2='720' y2='300'></line>
        <line x1='760' y1='280' x2='740' y2='300'></line>
        <line x1='760' y1='280' x2='780' y2='300'></line>
        <line x1='800' y1='280' x2='780' y2='300'></line>
        <line x1='800' y1='280' x2='820' y2='300'></line>
        <line x1='820' y1='280' x2='840' y2='300'></line>
        <line x1='840' y1='280' x2='860' y2='300'></line>
        <line x1='880' y1='280' x2='860' y2='300'></line>
        <line x1='900' y1='280' x2='880' y2='300'></line>
        <line x1='900' y1='280' x2='920' y2='300'></line>
        <line x1='920' y1='280' x2='940' y2='300'></line>
        <line x1='940' y1='280' x2='960' y2='300'></line>
        <line x1='960' y1='280' x2='980' y2='300'></line>
        <line x1='980' y1='280' x2='1000' y2='300'></line>
        <line x1='1000' y1='280' x2='1020' y2='300'></line>
        <line x1='1040' y1='280' x2='1020' y2='300'></line>
        <line x1='1040' y1='280' x2='1060' y2='300'></line>
        <line x1='1060' y1='280' x2='1080' y2='300'></line>
        <line x1='1080' y1='280' x2='1100' y2='300'></line>
        <line x1='1120' y1='280' x2='1100' y2='300'></line>
        <line x1='1120' y1='280' x2='1140' y2='300'></line>
        <line x1='1160' y1='280' x2='1140' y2='300'></line>
        <line x1='1160' y1='280' x2='1180' y2='300'></line>
        <line x1='1180' y1='280' x2='1200' y2='300'></line>
        <line x1='1220' y1='280' x2='1200' y2='300'></line>
        <line x1='1220' y1='280' x2='1240' y2='300'></line>
        <line x1='1240' y1='280' x2='1260' y2='300'></line>
        <line x1='1260' y1='280' x2='1280' y2='300'></line>
        <line x1='1300' y1='280' x2='1280' y2='300'></line>
        <line x1='1320' y1='280' x2='1300' y2='300'></line>
        <line x1='1320' y1='280' x2='1340' y2='300'></line>
        <line x1='1360' y1='280' x2='1340' y2='300'></line>
        <line x1='1380' y1='280' x2='1360' y2='300'></line>
        <line x1='1380' y1='280' x2='1400' y2='300'></line>
        <line x1='1400' y1='280' x2='1420' y2='300'></line>
        <line x1='1420' y1='280' x2='1440' y2='300'></line>
        <line x1='0' y1='300' x2='20' y2='320'></line>
        <line x1='20' y1='300' x2='40' y2='320'></line>
        <line x1='40' y1='300' x2='60' y2='320'></line>
        <line x1='80' y1='300' x2='60' y2='320'></line>
        <line x1='80' y1='300' x2='100' y2='320'></line>
        <line x1='120' y1='300' x2='100' y2='320'></line>
        <line x1='120' y1='300' x2='140' y2='320'></line>
        <line x1='160' y1='300' x2='140' y2='320'></line>
        <line x1='180' y1='300' x2='160' y2='320'></line>
        <line x1='200' y1='300' x2='180' y2='320'></line>
        <line x1='200' y1='300' x2='220' y2='320'></line>
        <line x1='220' y1='300' x2='240' y2='320'></line>
        <line x1='260' y1='300' x2='240' y2='320'></line>
        <line x1='280' y1='300' x2='260' y2='320'></line>
        <line x1='300' y1='300' x2='280' y2='320'></line>
        <line x1='320' y1='300' x2='300' y2='320'></line>
        <line x1='320' y1='300' x2='340' y2='320'></line>
        <line x1='340' y1='300' x2='360' y2='320'></line>
        <line x1='360' y1='300' x2='380' y2='320'></line>
        <line x1='380' y1='300' x2='400' y2='320'></line>
        <line x1='400' y1='300' x2='420' y2='320'></line>
        <line x1='440' y1='300' x2='420' y2='320'></line>
        <line x1='440' y1='300' x2='460' y2='320'></line>
        <line x1='480' y1='300' x2='460' y2='320'></line>
        <line x1='500' y1='300' x2='480' y2='320'></line>
        <line x1='500' y1='300' x2='520' y2='320'></line>
        <line x1='540' y1='300' x2='520' y2='320'></line>
        <line x1='560' y1='300' x2='540' y2='320'></line>
        <line x1='580' y1='300' x2='560' y2='320'></line>
        <line x1='580' y1='300' x2='600' y2='320'></line>
        <line x1='620' y1='300' x2='600' y2='320'></line>
        <line x1='620' y1='300' x2='640' y2='320'></line>
        <line x1='640' y1='300' x2='660' y2='320'></line>
        <line x1='660' y1='300' x2='680' y2='320'></line>
        <line x1='700' y1='300' x2='680' y2='320'></line>
        <line x1='720' y1='300' x2='700' y2='320'></line>
        <line x1='720' y1='300' x2='740' y2='320'></line>
        <line x1='740' y1='300' x2='760' y2='320'></line>
        <line x1='760' y1='300' x2='780' y2='320'></line>
        <line x1='780' y1='300' x2='800' y2='320'></line>
        <line x1='800' y1='300' x2='820' y2='320'></line>
        <line x1='840' y1='300' x2='820' y2='320'></line>
        <line x1='840' y1='300' x2='860' y2='320'></line>
        <line x1='880' y1='300' x2='860' y2='320'></line>
        <line x1='880' y1='300' x2='900' y2='320'></line>
        <line x1='920' y1='300' x2='900' y2='320'></line>
        <line x1='920' y1='300' x2='940' y2='320'></line>
        <line x1='960' y1='300' x2='940' y2='320'></line>
        <line x1='960' y1='300' x2='980' y2='320'></line>
        <line x1='1000' y1='300' x2='980' y2='320'></line>
        <line x1='1000' y1='300' x2='1020' y2='320'></line>
        <line x1='1020' y1='300' x2='1040' y2='320'></line>
        <line x1='1060' y1='300' x2='1040' y2='320'></line>
        <line x1='1080' y1='300' x2='1060' y2='320'></line>
        <line x1='1100' y1='300' x2='1080' y2='320'></line>
        <line x1='1120' y1='300' x2='1100' y2='320'></line>
        <line x1='1120' y1='300' x2='1140' y2='320'></line>
        <line x1='1140' y1='300' x2='1160' y2='320'></line>
        <line x1='1180' y1='300' x2='1160' y2='320'></line>
        <line x1='1180' y1='300' x2='1200' y2='320'></line>
        <line x1='1220' y1='300' x2='1200' y2='320'></line>
        <line x1='1220' y1='300' x2='1240' y2='320'></line>
        <line x1='1260' y1='300' x2='1240' y2='320'></line>
        <line x1='1280' y1='300' x2='1260' y2='320'></line>
        <line x1='1300' y1='300' x2='1280' y2='320'></line>
        <line x1='1300' y1='300' x2='1320' y2='320'></line>
        <line x1='1340' y1='300' x2='1320' y2='320'></line>
        <line x1='1340' y1='300' x2='1360' y2='320'></line>
        <line x1='1360' y1='300' x2='1380' y2='320'></line>
        <line x1='1400' y1='300' x2='1380' y2='320'></line>
        <line x1='1420' y1='300' x2='1400' y2='320'></line>
        <line x1='1420' y1='300' x2='1440' y2='320'></line>
        <line x1='20' y1='320' x2='0' y2='340'></line>
        <line x1='40' y1='320' x2='20' y2='340'></line>
        <line x1='40' y1='320' x2='60' y2='340'></line>
        <line x1='80' y1='320' x2='60' y2='340'></line>
        <line x1='100' y1='320' x2='80' y2='340'></line>
        <line x1='100' y1='320' x2='120' y2='340'></line>
        <line x1='120' y1='320' x2='140' y2='340'></line>
        <line x1='160' y1='320' x2='140' y2='340'></line>
        <line x1='160' y1='320' x2='180' y2='340'></line>
        <line x1='180' y1='320' x2='200' y2='340'></line>
        <line x1='200' y1='320' x2='220' y2='340'></line>
        <line x1='220' y1='320' x2='240' y2='340'></line>
        <line x1='260' y1='320' x2='240' y2='340'></line>
        <line x1='280' y1='320' x2='260' y2='340'></line>
        <line x1='300' y1='320' x2='280' y2='340'></line>
        <line x1='320' y1='320' x2='300' y2='340'></line>
        <line x1='320' y1='320' x2='340' y2='340'></line>
        <line x1='340' y1='320' x2='360' y2='340'></line>
        <line x1='380' y1='320' x2='360' y2='340'></line>
        <line x1='400' y1='320' x2='380' y2='340'></line>
        <line x1='400' y1='320' x2='420' y2='340'></line>
        <line x1='420' y1='320' x2='440' y2='340'></line>
        <line x1='460' y1='320' x2='440' y2='340'></line>
        <line x1='480' y1='320' x2='460' y2='340'></line>
        <line x1='500' y1='320' x2='480' y2='340'></line>
        <line x1='500' y1='320' x2='520' y2='340'></line>
        <line x1='540' y1='320' x2='520' y2='340'></line>
        <line x1='540' y1='320' x2='560' y2='340'></line>
        <line x1='580' y1='320' x2='560' y2='340'></line>
        <line x1='600' y1='320' x2='580' y2='340'></line>
        <line x1='620' y1='320' x2='600' y2='340'></line>
        <line x1='640' y1='320' x2='620' y2='340'></line>
        <line x1='660' y1='320' x2='640' y2='340'></line>
        <line x1='660' y1='320' x2='680' y2='340'></line>
        <line x1='700' y1='320' x2='680' y2='340'></line>
        <line x1='700' y1='320' x2='720' y2='340'></line>
        <line x1='740' y1='320' x2='720' y2='340'></line>
        <line x1='740' y1='320' x2='760' y2='340'></line>
        <line x1='780' y1='320' x2='760' y2='340'></line>
        <line x1='800' y1='320' x2='780' y2='340'></line>
        <line x1='820' y1='320' x2='800' y2='340'></line>
        <line x1='840' y1='320' x2='820' y2='340'></line>
        <line x1='860' y1='320' x2='840' y2='340'></line>
        <line x1='860' y1='320' x2='880' y2='340'></line>
        <line x1='880' y1='320' x2='900' y2='340'></line>
        <line x1='900' y1='320' x2='920' y2='340'></line>
        <line x1='940' y1='320' x2='920' y2='340'></line>
        <line x1='940' y1='320' x2='960' y2='340'></line>
        <line x1='960' y1='320' x2='980' y2='340'></line>
        <line x1='980' y1='320' x2='1000' y2='340'></line>
        <line x1='1000' y1='320' x2='1020' y2='340'></line>
        <line x1='1040' y1='320' x2='1020' y2='340'></line>
        <line x1='1040' y1='320' x2='1060' y2='340'></line>
        <line x1='1060' y1='320' x2='1080' y2='340'></line>
        <line x1='1100' y1='320' x2='1080' y2='340'></line>
        <line x1='1100' y1='320' x2='1120' y2='340'></line>
        <line x1='1120' y1='320' x2='1140' y2='340'></line>
        <line x1='1140' y1='320' x2='1160' y2='340'></line>
        <line x1='1160' y1='320' x2='1180' y2='340'></line>
        <line x1='1200' y1='320' x2='1180' y2='340'></line>
        <line x1='1220' y1='320' x2='1200' y2='340'></line>
        <line x1='1220' y1='320' x2='1240' y2='340'></line>
        <line x1='1240' y1='320' x2='1260' y2='340'></line>
        <line x1='1280' y1='320' x2='1260' y2='340'></line>
        <line x1='1280' y1='320' x2='1300' y2='340'></line>
        <line x1='1300' y1='320' x2='1320' y2='340'></line>
        <line x1='1340' y1='320' x2='1320' y2='340'></line>
        <line x1='1340' y1='320' x2='1360' y2='340'></line>
        <line x1='1360' y1='320' x2='1380' y2='340'></line>
        <line x1='1380' y1='320' x2='1400' y2='340'></line>
        <line x1='1420' y1='320' x2='1400' y2='340'></line>
        <line x1='1440' y1='320' x2='1420' y2='340'></line>
        <line x1='20' y1='340' x2='0' y2='360'></line>
        <line x1='20' y1='340' x2='40' y2='360'></line>
        <line x1='40' y1='340' x2='60' y2='360'></line>
        <line x1='60' y1='340' x2='80' y2='360'></line>
        <line x1='80' y1='340' x2='100' y2='360'></line>
        <line x1='100' y1='340' x2='120' y2='360'></line>
        <line x1='140' y1='340' x2='120' y2='360'></line>
        <line x1='140' y1='340' x2='160' y2='360'></line>
        <line x1='180' y1='340' x2='160' y2='360'></line>
        <line x1='180' y1='340' x2='200' y2='360'></line>
        <line x1='200' y1='340' x2='220' y2='360'></line>
        <line x1='220' y1='340' x2='240' y2='360'></line>
        <line x1='240' y1='340' x2='260' y2='360'></line>
        <line x1='260' y1='340' x2='280' y2='360'></line>
        <line x1='300' y1='340' x2='280' y2='360'></line>
        <line x1='320' y1='340' x2='300' y2='360'></line>
        <line x1='320' y1='340' x2='340' y2='360'></line>
        <line x1='340' y1='340' x2='360' y2='360'></line>
        <line x1='380' y1='340' x2='360' y2='360'></line>
        <line x1='380' y1='340' x2='400' y2='360'></line>
        <line x1='400' y1='340' x2='420' y2='360'></line>
        <line x1='440' y1='340' x2='420' y2='360'></line>
        <line x1='440' y1='340' x2='460' y2='360'></line>
        <line x1='460' y1='340' x2='480' y2='360'></line>
        <line x1='500' y1='340' x2='480' y2='360'></line>
        <line x1='520' y1='340' x2='500' y2='360'></line>
        <line x1='520' y1='340' x2='540' y2='360'></line>
        <line x1='560' y1='340' x2='540' y2='360'></line>
        <line x1='560' y1='340' x2='580' y2='360'></line>
        <line x1='600' y1='340' x2='580' y2='360'></line>
        <line x1='620' y1='340' x2='600' y2='360'></line>
        <line x1='640' y1='340' x2='620' y2='360'></line>
        <line x1='640' y1='340' x2='660' y2='360'></line>
        <line x1='660' y1='340' x2='680' y2='360'></line>
        <line x1='700' y1='340' x2='680' y2='360'></line>
        <line x1='700' y1='340' x2='720' y2='360'></line>
        <line x1='720' y1='340' x2='740' y2='360'></line>
        <line x1='740' y1='340' x2='760' y2='360'></line>
        <line x1='780' y1='340' x2='760' y2='360'></line>
        <line x1='800' y1='340' x2='780' y2='360'></line>
        <line x1='820' y1='340' x2='800' y2='360'></line>
        <line x1='820' y1='340' x2='840' y2='360'></line>
        <line x1='860' y1='340' x2='840' y2='360'></line>
        <line x1='860' y1='340' x2='880' y2='360'></line>
        <line x1='880' y1='340' x2='900' y2='360'></line>
        <line x1='920' y1='340' x2='900' y2='360'></line>
        <line x1='940' y1='340' x2='920' y2='360'></line>
        <line x1='940' y1='340' x2='960' y2='360'></line>
        <line x1='980' y1='340' x2='960' y2='360'></line>
        <line x1='980' y1='340' x2='1000' y2='360'></line>
        <line x1='1000' y1='340' x2='1020' y2='360'></line>
        <line x1='1040' y1='340' x2='1020' y2='360'></line>
        <line x1='1040' y1='340' x2='1060' y2='360'></line>
        <line x1='1080' y1='340' x2='1060' y2='360'></line>
        <line x1='1080' y1='340' x2='1100' y2='360'></line>
        <line x1='1120' y1='340' x2='1100' y2='360'></line>
        <line x1='1140' y1='340' x2='1120' y2='360'></line>
        <line x1='1140' y1='340' x2='1160' y2='360'></line>
        <line x1='1180' y1='340' x2='1160' y2='360'></line>
        <line x1='1180' y1='340' x2='1200' y2='360'></line>
        <line x1='1200' y1='340' x2='1220' y2='360'></line>
        <line x1='1220' y1='340' x2='1240' y2='360'></line>
        <line x1='1240' y1='340' x2='1260' y2='360'></line>
        <line x1='1260' y1='340' x2='1280' y2='360'></line>
        <line x1='1280' y1='340' x2='1300' y2='360'></line>
        <line x1='1300' y1='340' x2='1320' y2='360'></line>
        <line x1='1320' y1='340' x2='1340' y2='360'></line>
        <line x1='1360' y1='340' x2='1340' y2='360'></line>
        <line x1='1380' y1='340' x2='1360' y2='360'></line>
        <line x1='1380' y1='340' x2='1400' y2='360'></line>
        <line x1='1400' y1='340' x2='1420' y2='360'></line>
        <line x1='1440' y1='340' x2='1420' y2='360'></line>
        <line x1='0' y1='360' x2='20' y2='380'></line>
        <line x1='40' y1='360' x2='20' y2='380'></line>
        <line x1='40' y1='360' x2='60' y2='380'></line>
        <line x1='60' y1='360' x2='80' y2='380'></line>
        <line x1='80' y1='360' x2='100' y2='380'></line>
        <line x1='100' y1='360' x2='120' y2='380'></line>
        <line x1='120' y1='360' x2='140' y2='380'></line>
        <line x1='140' y1='360' x2='160' y2='380'></line>
        <line x1='160' y1='360' x2='180' y2='380'></line>
        <line x1='200' y1='360' x2='180' y2='380'></line>
        <line x1='200' y1='360' x2='220' y2='380'></line>
        <line x1='240' y1='360' x2='220' y2='380'></line>
        <line x1='240' y1='360' x2='260' y2='380'></line>
        <line x1='280' y1='360' x2='260' y2='380'></line>
        <line x1='300' y1='360' x2='280' y2='380'></line>
        <line x1='300' y1='360' x2='320' y2='380'></line>
        <line x1='320' y1='360' x2='340' y2='380'></line>
        <line x1='360' y1='360' x2='340' y2='380'></line>
        <line x1='360' y1='360' x2='380' y2='380'></line>
        <line x1='380' y1='360' x2='400' y2='380'></line>
        <line x1='400' y1='360' x2='420' y2='380'></line>
        <line x1='420' y1='360' x2='440' y2='380'></line>
        <line x1='460' y1='360' x2='440' y2='380'></line>
        <line x1='460' y1='360' x2='480' y2='380'></line>
        <line x1='500' y1='360' x2='480' y2='380'></line>
        <line x1='520' y1='360' x2='500' y2='380'></line>
        <line x1='540' y1='360' x2='520' y2='380'></line>
        <line x1='540' y1='360' x2='560' y2='380'></line>
        <line x1='560' y1='360' x2='580' y2='380'></line>
        <line x1='600' y1='360' x2='580' y2='380'></line>
        <line x1='620' y1='360' x2='600' y2='380'></line>
        <line x1='620' y1='360' x2='640' y2='380'></line>
        <line x1='660' y1='360' x2='640' y2='380'></line>
        <line x1='680' y1='360' x2='660' y2='380'></line>
        <line x1='700' y1='360' x2='680' y2='380'></line>
        <line x1='700' y1='360' x2='720' y2='380'></line>
        <line x1='720' y1='360' x2='740' y2='380'></line>
        <line x1='760' y1='360' x2='740' y2='380'></line>
        <line x1='780' y1='360' x2='760' y2='380'></line>
        <line x1='800' y1='360' x2='780' y2='380'></line>
        <line x1='800' y1='360' x2='820' y2='380'></line>
        <line x1='840' y1='360' x2='820' y2='380'></line>
        <line x1='860' y1='360' x2='840' y2='380'></line>
        <line x1='860' y1='360' x2='880' y2='380'></line>
        <line x1='900' y1='360' x2='880' y2='380'></line>
        <line x1='920' y1='360' x2='900' y2='380'></line>
        <line x1='920' y1='360' x2='940' y2='380'></line>
        <line x1='960' y1='360' x2='940' y2='380'></line>
        <line x1='960' y1='360' x2='980' y2='380'></line>
        <line x1='1000' y1='360' x2='980' y2='380'></line>
        <line x1='1000' y1='360' x2='1020' y2='380'></line>
        <line x1='1040' y1='360' x2='1020' y2='380'></line>
        <line x1='1060' y1='360' x2='1040' y2='380'></line>
        <line x1='1060' y1='360' x2='1080' y2='380'></line>
        <line x1='1080' y1='360' x2='1100' y2='380'></line>
        <line x1='1120' y1='360' x2='1100' y2='380'></line>
        <line x1='1140' y1='360' x2='1120' y2='380'></line>
        <line x1='1160' y1='360' x2='1140' y2='380'></line>
        <line x1='1160' y1='360' x2='1180' y2='380'></line>
        <line x1='1180' y1='360' x2='1200' y2='380'></line>
        <line x1='1220' y1='360' x2='1200' y2='380'></line>
        <line x1='1220' y1='360' x2='1240' y2='380'></line>
        <line x1='1240' y1='360' x2='1260' y2='380'></line>
        <line x1='1280' y1='360' x2='1260' y2='380'></line>
        <line x1='1280' y1='360' x2='1300' y2='380'></line>
        <line x1='1320' y1='360' x2='1300' y2='380'></line>
        <line x1='1320' y1='360' x2='1340' y2='380'></line>
        <line x1='1360' y1='360' x2='1340' y2='380'></line>
        <line x1='1380' y1='360' x2='1360' y2='380'></line>
        <line x1='1380' y1='360' x2='1400' y2='380'></line>
        <line x1='1420' y1='360' x2='1400' y2='380'></line>
        <line x1='1420' y1='360' x2='1440' y2='380'></line>
        <line x1='20' y1='380' x2='0' y2='400'></line>
        <line x1='40' y1='380' x2='20' y2='400'></line>
        <line x1='40' y1='380' x2='60' y2='400'></line>
        <line x1='60' y1='380' x2='80' y2='400'></line>
        <line x1='80' y1='380' x2='100' y2='400'></line>
        <line x1='100' y1='380' x2='120' y2='400'></line>
        <line x1='120' y1='380' x2='140' y2='400'></line>
        <line x1='160' y1='380' x2='140' y2='400'></line>
        <line x1='180' y1='380' x2='160' y2='400'></line>
        <line x1='200' y1='380' x2='180' y2='400'></line>
        <line x1='220' y1='380' x2='200' y2='400'></line>
        <line x1='240' y1='380' x2='220' y2='400'></line>
        <line x1='260' y1='380' x2='240' y2='400'></line>
        <line x1='260' y1='380' x2='280' y2='400'></line>
        <line x1='280' y1='380' x2='300' y2='400'></line>
        <line x1='300' y1='380' x2='320' y2='400'></line>
        <line x1='320' y1='380' x2='340' y2='400'></line>
        <line x1='360' y1='380' x2='340' y2='400'></line>
        <line x1='360' y1='380' x2='380' y2='400'></line>
        <line x1='380' y1='380' x2='400' y2='400'></line>
        <line x1='400' y1='380' x2='420' y2='400'></line>
        <line x1='440' y1='380' x2='420' y2='400'></line>
        <line x1='440' y1='380' x2='460' y2='400'></line>
        <line x1='480' y1='380' x2='460' y2='400'></line>
        <line x1='500' y1='380' x2='480' y2='400'></line>
        <line x1='500' y1='380' x2='520' y2='400'></line>
        <line x1='540' y1='380' x2='520' y2='400'></line>
        <line x1='560' y1='380' x2='540' y2='400'></line>
        <line x1='580' y1='380' x2='560' y2='400'></line>
        <line x1='580' y1='380' x2='600' y2='400'></line>
        <line x1='620' y1='380' x2='600' y2='400'></line>
        <line x1='640' y1='380' x2='620' y2='400'></line>
        <line x1='640' y1='380' x2='660' y2='400'></line>
        <line x1='680' y1='380' x2='660' y2='400'></line>
        <line x1='680' y1='380' x2='700' y2='400'></line>
        <line x1='700' y1='380' x2='720' y2='400'></line>
        <line x1='720' y1='380' x2='740' y2='400'></line>
        <line x1='740' y1='380' x2='760' y2='400'></line>
        <line x1='760' y1='380' x2='780' y2='400'></line>
        <line x1='780' y1='380' x2='800' y2='400'></line>
        <line x1='820' y1='380' x2='800' y2='400'></line>
        <line x1='840' y1='380' x2='820' y2='400'></line>
        <line x1='860' y1='380' x2='840' y2='400'></line>
        <line x1='860' y1='380' x2='880' y2='400'></line>
        <line x1='880' y1='380' x2='900' y2='400'></line>
        <line x1='900' y1='380' x2='920' y2='400'></line>
        <line x1='920' y1='380' x2='940' y2='400'></line>
        <line x1='960' y1='380' x2='940' y2='400'></line>
        <line x1='960' y1='380' x2='980' y2='400'></line>
        <line x1='1000' y1='380' x2='980' y2='400'></line>
        <line x1='1020' y1='380' x2='1000' y2='400'></line>
        <line x1='1040' y1='380' x2='1020' y2='400'></line>
        <line x1='1060' y1='380' x2='1040' y2='400'></line>
        <line x1='1080' y1='380' x2='1060' y2='400'></line>
        <line x1='1080' y1='380' x2='1100' y2='400'></line>
        <line x1='1100' y1='380' x2='1120' y2='400'></line>
        <line x1='1120' y1='380' x2='1140' y2='400'></line>
        <line x1='1160' y1='380' x2='1140' y2='400'></line>
        <line x1='1160' y1='380' x2='1180' y2='400'></line>
        <line x1='1200' y1='380' x2='1180' y2='400'></line>
        <line x1='1220' y1='380' x2='1200' y2='400'></line>
        <line x1='1240' y1='380' x2='1220' y2='400'></line>
        <line x1='1240' y1='380' x2='1260' y2='400'></line>
        <line x1='1280' y1='380' x2='1260' y2='400'></line>
        <line x1='1280' y1='380' x2='1300' y2='400'></line>
        <line x1='1320' y1='380' x2='1300' y2='400'></line>
        <line x1='1340' y1='380' x2='1320' y2='400'></line>
        <line x1='1340' y1='380' x2='1360' y2='400'></line>
        <line x1='1380' y1='380' x2='1360' y2='400'></line>
        <line x1='1380' y1='380' x2='1400' y2='400'></line>
        <line x1='1400' y1='380' x2='1420' y2='400'></line>
        <line x1='1420' y1='380' x2='1440' y2='400'></line>
        <line x1='20' y1='400' x2='0' y2='420'></line>
        <line x1='40' y1='400' x2='20' y2='420'></line>
        <line x1='40' y1='400' x2='60' y2='420'></line>
        <line x1='80' y1='400' x2='60' y2='420'></line>
        <line x1='100' y1='400' x2='80' y2='420'></line>
        <line x1='100' y1='400' x2='120' y2='420'></line>
        <line x1='120' y1='400' x2='140' y2='420'></line>
        <line x1='140' y1='400' x2='160' y2='420'></line>
        <line x1='160' y1='400' x2='180' y2='420'></line>
        <line x1='180' y1='400' x2='200' y2='420'></line>
        <line x1='200' y1='400' x2='220' y2='420'></line>
        <line x1='240' y1='400' x2='220' y2='420'></line>
        <line x1='260' y1='400' x2='240' y2='420'></line>
        <line x1='260' y1='400' x2='280' y2='420'></line>
        <line x1='300' y1='400' x2='280' y2='420'></line>
        <line x1='300' y1='400' x2='320' y2='420'></line>
        <line x1='320' y1='400' x2='340' y2='420'></line>
        <line x1='340' y1='400' x2='360' y2='420'></line>
        <line x1='380' y1='400' x2='360' y2='420'></line>
        <line x1='400' y1='400' x2='380' y2='420'></line>
        <line x1='400' y1='400' x2='420' y2='420'></line>
        <line x1='440' y1='400' x2='420' y2='420'></line>
        <line x1='440' y1='400' x2='460' y2='420'></line>
        <line x1='460' y1='400' x2='480' y2='420'></line>
        <line x1='500' y1='400' x2='480' y2='420'></line>
        <line x1='500' y1='400' x2='520' y2='420'></line>
        <line x1='540' y1='400' x2='520' y2='420'></line>
        <line x1='560' y1='400' x2='540' y2='420'></line>
        <line x1='560' y1='400' x2='580' y2='420'></line>
        <line x1='580' y1='400' x2='600' y2='420'></line>
        <line x1='600' y1='400' x2='620' y2='420'></line>
        <line x1='620' y1='400' x2='640' y2='420'></line>
        <line x1='660' y1='400' x2='640' y2='420'></line>
        <line x1='680' y1='400' x2='660' y2='420'></line>
        <line x1='700' y1='400' x2='680' y2='420'></line>
        <line x1='720' y1='400' x2='700' y2='420'></line>
        <line x1='740' y1='400' x2='720' y2='420'></line>
        <line x1='760' y1='400' x2='740' y2='420'></line>
        <line x1='760' y1='400' x2='780' y2='420'></line>
        <line x1='780' y1='400' x2='800' y2='420'></line>
        <line x1='820' y1='400' x2='800' y2='420'></line>
        <line x1='820' y1='400' x2='840' y2='420'></line>
        <line x1='860' y1='400' x2='840' y2='420'></line>
        <line x1='880' y1='400' x2='860' y2='420'></line>
        <line x1='900' y1='400' x2='880' y2='420'></line>
        <line x1='900' y1='400' x2='920' y2='420'></line>
        <line x1='920' y1='400' x2='940' y2='420'></line>
        <line x1='940' y1='400' x2='960' y2='420'></line>
        <line x1='980' y1='400' x2='960' y2='420'></line>
        <line x1='1000' y1='400' x2='980' y2='420'></line>
        <line x1='1020' y1='400' x2='1000' y2='420'></line>
        <line x1='1020' y1='400' x2='1040' y2='420'></line>
        <line x1='1060' y1='400' x2='1040' y2='420'></line>
        <line x1='1060' y1='400' x2='1080' y2='420'></line>
        <line x1='1080' y1='400' x2='1100' y2='420'></line>
        <line x1='1120' y1='400' x2='1100' y2='420'></line>
        <line x1='1120' y1='400' x2='1140' y2='420'></line>
        <line x1='1140' y1='400' x2='1160' y2='420'></line>
        <line x1='1180' y1='400' x2='1160' y2='420'></line>
        <line x1='1180' y1='400' x2='1200' y2='420'></line>
        <line x1='1200' y1='400' x2='1220' y2='420'></line>
        <line x1='1240' y1='400' x2='1220' y2='420'></line>
        <line x1='1240' y1='400' x2='1260' y2='420'></line>
        <line x1='1280' y1='400' x2='1260' y2='420'></line>
        <line x1='1280' y1='400' x2='1300' y2='420'></line>
        <line x1='1320' y1='400' x2='1300' y2='420'></line>
        <line x1='1320' y1='400' x2='1340' y2='420'></line>
        <line x1='1340' y1='400' x2='1360' y2='420'></line>
        <line x1='1360' y1='400' x2='1380' y2='420'></line>
        <line x1='1380' y1='400' x2='1400' y2='420'></line>
        <line x1='1400' y1='400' x2='1420' y2='420'></line>
        <line x1='1440' y1='400' x2='1420' y2='420'></line>
        <line x1='20' y1='420' x2='0' y2='440'></line>
        <line x1='40' y1='420' x2='20' y2='440'></line>
        <line x1='40' y1='420' x2='60' y2='440'></line>
        <line x1='60' y1='420' x2='80' y2='440'></line>
        <line x1='100' y1='420' x2='80' y2='440'></line>
        <line x1='120' y1='420' x2='100' y2='440'></line>
        <line x1='120' y1='420' x2='140' y2='440'></line>
        <line x1='140' y1='420' x2='160' y2='440'></line>
        <line x1='180' y1='420' x2='160' y2='440'></line>
        <line x1='180' y1='420' x2='200' y2='440'></line>
        <line x1='200' y1='420' x2='220' y2='440'></line>
        <line x1='240' y1='420' x2='220' y2='440'></line>
        <line x1='240' y1='420' x2='260' y2='440'></line>
        <line x1='260' y1='420' x2='280' y2='440'></line>
        <line x1='300' y1='420' x2='280' y2='440'></line>
        <line x1='300' y1='420' x2='320' y2='440'></line>
        <line x1='340' y1='420' x2='320' y2='440'></line>
        <line x1='340' y1='420' x2='360' y2='440'></line>
        <line x1='360' y1='420' x2='380' y2='440'></line>
        <line x1='400' y1='420' x2='380' y2='440'></line>
        <line x1='400' y1='420' x2='420' y2='440'></line>
        <line x1='440' y1='420' x2='420' y2='440'></line>
        <line x1='440' y1='420' x2='460' y2='440'></line>
        <line x1='460' y1='420' x2='480' y2='440'></line>
        <line x1='480' y1='420' x2='500' y2='440'></line>
        <line x1='500' y1='420' x2='520' y2='440'></line>
        <line x1='520' y1='420' x2='540' y2='440'></line>
        <line x1='540' y1='420' x2='560' y2='440'></line>
        <line x1='580' y1='420' x2='560' y2='440'></line>
        <line x1='600' y1='420' x2='580' y2='440'></line>
        <line x1='620' y1='420' x2='600' y2='440'></line>
        <line x1='640' y1='420' x2='620' y2='440'></line>
        <line x1='640' y1='420' x2='660' y2='440'></line>
        <line x1='660' y1='420' x2='680' y2='440'></line>
        <line x1='680' y1='420' x2='700' y2='440'></line>
        <line x1='700' y1='420' x2='720' y2='440'></line>
        <line x1='740' y1='420' x2='720' y2='440'></line>
        <line x1='760' y1='420' x2='740' y2='440'></line>
        <line x1='780' y1='420' x2='760' y2='440'></line>
        <line x1='780' y1='420' x2='800' y2='440'></line>
        <line x1='800' y1='420' x2='820' y2='440'></line>
        <line x1='840' y1='420' x2='820' y2='440'></line>
        <line x1='840' y1='420' x2='860' y2='440'></line>
        <line x1='880' y1='420' x2='860' y2='440'></line>
        <line x1='880' y1='420' x2='900' y2='440'></line>
        <line x1='920' y1='420' x2='900' y2='440'></line>
        <line x1='920' y1='420' x2='940' y2='440'></line>
        <line x1='940' y1='420' x2='960' y2='440'></line>
        <line x1='960' y1='420' x2='980' y2='440'></line>
        <line x1='1000' y1='420' x2='980' y2='440'></line>
        <line x1='1020' y1='420' x2='1000' y2='440'></line>
        <line x1='1020' y1='420' x2='1040' y2='440'></line>
        <line x1='1060' y1='420' x2='1040' y2='440'></line>
        <line x1='1060' y1='420' x2='1080' y2='440'></line>
        <line x1='1080' y1='420' x2='1100' y2='440'></line>
        <line x1='1100' y1='420' x2='1120' y2='440'></line>
        <line x1='1140' y1='420' x2='1120' y2='440'></line>
        <line x1='1140' y1='420' x2='1160' y2='440'></line>
        <line x1='1160' y1='420' x2='1180' y2='440'></line>
        <line x1='1200' y1='420' x2='1180' y2='440'></line>
        <line x1='1220' y1='420' x2='1200' y2='440'></line>
        <line x1='1220' y1='420' x2='1240' y2='440'></line>
        <line x1='1260' y1='420' x2='1240' y2='440'></line>
        <line x1='1260' y1='420' x2='1280' y2='440'></line>
        <line x1='1280' y1='420' x2='1300' y2='440'></line>
        <line x1='1320' y1='420' x2='1300' y2='440'></line>
        <line x1='1320' y1='420' x2='1340' y2='440'></line>
        <line x1='1360' y1='420' x2='1340' y2='440'></line>
        <line x1='1360' y1='420' x2='1380' y2='440'></line>
        <line x1='1380' y1='420' x2='1400' y2='440'></line>
        <line x1='1420' y1='420' x2='1400' y2='440'></line>
        <line x1='1420' y1='420' x2='1440' y2='440'></line>
        <line x1='0' y1='440' x2='20' y2='460'></line>
        <line x1='20' y1='440' x2='40' y2='460'></line>
        <line x1='60' y1='440' x2='40' y2='460'></line>
        <line x1='60' y1='440' x2='80' y2='460'></line>
        <line x1='100' y1='440' x2='80' y2='460'></line>
        <line x1='100' y1='440' x2='120' y2='460'></line>
        <line x1='140' y1='440' x2='120' y2='460'></line>
        <line x1='140' y1='440' x2='160' y2='460'></line>
        <line x1='180' y1='440' x2='160' y2='460'></line>
        <line x1='200' y1='440' x2='180' y2='460'></line>
        <line x1='200' y1='440' x2='220' y2='460'></line>
        <line x1='220' y1='440' x2='240' y2='460'></line>
        <line x1='260' y1='440' x2='240' y2='460'></line>
        <line x1='260' y1='440' x2='280' y2='460'></line>
        <line x1='300' y1='440' x2='280' y2='460'></line>
        <line x1='300' y1='440' x2='320' y2='460'></line>
        <line x1='340' y1='440' x2='320' y2='460'></line>
        <line x1='340' y1='440' x2='360' y2='460'></line>
        <line x1='360' y1='440' x2='380' y2='460'></line>
        <line x1='380' y1='440' x2='400' y2='460'></line>
        <line x1='400' y1='440' x2='420' y2='460'></line>
        <line x1='420' y1='440' x2='440' y2='460'></line>
        <line x1='460' y1='440' x2='440' y2='460'></line>
        <line x1='460' y1='440' x2='480' y2='460'></line>
        <line x1='480' y1='440' x2='500' y2='460'></line>
        <line x1='520' y1='440' x2='500' y2='460'></line>
        <line x1='520' y1='440' x2='540' y2='460'></line>
        <line x1='560' y1='440' x2='540' y2='460'></line>
        <line x1='580' y1='440' x2='560' y2='460'></line>
        <line x1='580' y1='440' x2='600' y2='460'></line>
        <line x1='600' y1='440' x2='620' y2='460'></line>
        <line x1='640' y1='440' x2='620' y2='460'></line>
        <line x1='640' y1='440' x2='660' y2='460'></line>
        <line x1='680' y1='440' x2='660' y2='460'></line>
        <line x1='700' y1='440' x2='680' y2='460'></line>
        <line x1='700' y1='440' x2='720' y2='460'></line>
        <line x1='720' y1='440' x2='740' y2='460'></line>
        <line x1='740' y1='440' x2='760' y2='460'></line>
        <line x1='780' y1='440' x2='760' y2='460'></line>
        <line x1='800' y1='440' x2='780' y2='460'></line>
        <line x1='800' y1='440' x2='820' y2='460'></line>
        <line x1='820' y1='440' x2='840' y2='460'></line>
        <line x1='860' y1='440' x2='840' y2='460'></line>
        <line x1='880' y1='440' x2='860' y2='460'></line>
        <line x1='880' y1='440' x2='900' y2='460'></line>
        <line x1='900' y1='440' x2='920' y2='460'></line>
        <line x1='940' y1='440' x2='920' y2='460'></line>
        <line x1='960' y1='440' x2='940' y2='460'></line>
        <line x1='960' y1='440' x2='980' y2='460'></line>
        <line x1='980' y1='440' x2='1000' y2='460'></line>
        <line x1='1020' y1='440' x2='1000' y2='460'></line>
        <line x1='1020' y1='440' x2='1040' y2='460'></line>
        <line x1='1040' y1='440' x2='1060' y2='460'></line>
        <line x1='1080' y1='440' x2='1060' y2='460'></line>
        <line x1='1080' y1='440' x2='1100' y2='460'></line>
        <line x1='1100' y1='440' x2='1120' y2='460'></line>
        <line x1='1140' y1='440' x2='1120' y2='460'></line>
        <line x1='1160' y1='440' x2='1140' y2='460'></line>
        <line x1='1160' y1='440' x2='1180' y2='460'></line>
        <line x1='1200' y1='440' x2='1180' y2='460'></line>
        <line x1='1200' y1='440' x2='1220' y2='460'></line>
        <line x1='1220' y1='440' x2='1240' y2='460'></line>
        <line x1='1260' y1='440' x2='1240' y2='460'></line>
        <line x1='1260' y1='440' x2='1280' y2='460'></line>
        <line x1='1300' y1='440' x2='1280' y2='460'></line>
        <line x1='1300' y1='440' x2='1320' y2='460'></line>
        <line x1='1320' y1='440' x2='1340' y2='460'></line>
        <line x1='1360' y1='440' x2='1340' y2='460'></line>
        <line x1='1360' y1='440' x2='1380' y2='460'></line>
        <line x1='1400' y1='440' x2='1380' y2='460'></line>
        <line x1='1400' y1='440' x2='1420' y2='460'></line>
        <line x1='1440' y1='440' x2='1420' y2='460'></line>
        <line x1='20' y1='460' x2='0' y2='480'></line>
        <line x1='40' y1='460' x2='20' y2='480'></line>
        <line x1='60' y1='460' x2='40' y2='480'></line>
        <line x1='60' y1='460' x2='80' y2='480'></line>
        <line x1='80' y1='460' x2='100' y2='480'></line>
        <line x1='100' y1='460' x2='120' y2='480'></line>
        <line x1='140' y1='460' x2='120' y2='480'></line>
        <line x1='160' y1='460' x2='140' y2='480'></line>
        <line x1='180' y1='460' x2='160' y2='480'></line>
        <line x1='200' y1='460' x2='180' y2='480'></line>
        <line x1='200' y1='460' x2='220' y2='480'></line>
        <line x1='240' y1='460' x2='220' y2='480'></line>
        <line x1='240' y1='460' x2='260' y2='480'></line>
        <line x1='280' y1='460' x2='260' y2='480'></line>
        <line x1='280' y1='460' x2='300' y2='480'></line>
        <line x1='300' y1='460' x2='320' y2='480'></line>
        <line x1='340' y1='460' x2='320' y2='480'></line>
        <line x1='340' y1='460' x2='360' y2='480'></line>
        <line x1='380' y1='460' x2='360' y2='480'></line>
        <line x1='400' y1='460' x2='380' y2='480'></line>
        <line x1='420' y1='460' x2='400' y2='480'></line>
        <line x1='420' y1='460' x2='440' y2='480'></line>
        <line x1='460' y1='460' x2='440' y2='480'></line>
        <line x1='480' y1='460' x2='460' y2='480'></line>
        <line x1='500' y1='460' x2='480' y2='480'></line>
        <line x1='500' y1='460' x2='520' y2='480'></line>
        <line x1='520' y1='460' x2='540' y2='480'></line>
        <line x1='540' y1='460' x2='560' y2='480'></line>
        <line x1='560' y1='460' x2='580' y2='480'></line>
        <line x1='600' y1='460' x2='580' y2='480'></line>
        <line x1='620' y1='460' x2='600' y2='480'></line>
        <line x1='620' y1='460' x2='640' y2='480'></line>
        <line x1='640' y1='460' x2='660' y2='480'></line>
        <line x1='680' y1='460' x2='660' y2='480'></line>
        <line x1='680' y1='460' x2='700' y2='480'></line>
        <line x1='700' y1='460' x2='720' y2='480'></line>
        <line x1='740' y1='460' x2='720' y2='480'></line>
        <line x1='740' y1='460' x2='760' y2='480'></line>
        <line x1='780' y1='460' x2='760' y2='480'></line>
        <line x1='800' y1='460' x2='780' y2='480'></line>
        <line x1='820' y1='460' x2='800' y2='480'></line>
        <line x1='840' y1='460' x2='820' y2='480'></line>
        <line x1='860' y1='460' x2='840' y2='480'></line>
        <line x1='880' y1='460' x2='860' y2='480'></line>
        <line x1='900' y1='460' x2='880' y2='480'></line>
        <line x1='900' y1='460' x2='920' y2='480'></line>
        <line x1='940' y1='460' x2='920' y2='480'></line>
        <line x1='940' y1='460' x2='960' y2='480'></line>
        <line x1='960' y1='460' x2='980' y2='480'></line>
        <line x1='1000' y1='460' x2='980' y2='480'></line>
        <line x1='1000' y1='460' x2='1020' y2='480'></line>
        <line x1='1040' y1='460' x2='1020' y2='480'></line>
        <line x1='1040' y1='460' x2='1060' y2='480'></line>
        <line x1='1080' y1='460' x2='1060' y2='480'></line>
        <line x1='1100' y1='460' x2='1080' y2='480'></line>
        <line x1='1100' y1='460' x2='1120' y2='480'></line>
        <line x1='1120' y1='460' x2='1140' y2='480'></line>
        <line x1='1140' y1='460' x2='1160' y2='480'></line>
        <line x1='1160' y1='460' x2='1180' y2='480'></line>
        <line x1='1200' y1='460' x2='1180' y2='480'></line>
        <line x1='1220' y1='460' x2='1200' y2='480'></line>
        <line x1='1240' y1='460' x2='1220' y2='480'></line>
        <line x1='1240' y1='460' x2='1260' y2='480'></line>
        <line x1='1260' y1='460' x2='1280' y2='480'></line>
        <line x1='1280' y1='460' x2='1300' y2='480'></line>
        <line x1='1300' y1='460' x2='1320' y2='480'></line>
        <line x1='1320' y1='460' x2='1340' y2='480'></line>
        <line x1='1340' y1='460' x2='1360' y2='480'></line>
        <line x1='1360' y1='460' x2='1380' y2='480'></line>
        <line x1='1400' y1='460' x2='1380' y2='480'></line>
        <line x1='1420' y1='460' x2='1400' y2='480'></line>
        <line x1='1420' y1='460' x2='1440' y2='480'></line>
        <line x1='20' y1='480' x2='0' y2='500'></line>
        <line x1='20' y1='480' x2='40' y2='500'></line>
        <line x1='40' y1='480' x2='60' y2='500'></line>
        <line x1='80' y1='480' x2='60' y2='500'></line>
        <line x1='100' y1='480' x2='80' y2='500'></line>
        <line x1='120' y1='480' x2='100' y2='500'></line>
        <line x1='140' y1='480' x2='120' y2='500'></line>
        <line x1='160' y1='480' x2='140' y2='500'></line>
        <line x1='180' y1='480' x2='160' y2='500'></line>
        <line x1='200' y1='480' x2='180' y2='500'></line>
        <line x1='200' y1='480' x2='220' y2='500'></line>
        <line x1='240' y1='480' x2='220' y2='500'></line>
        <line x1='240' y1='480' x2='260' y2='500'></line>
        <line x1='280' y1='480' x2='260' y2='500'></line>
        <line x1='280' y1='480' x2='300' y2='500'></line>
        <line x1='300' y1='480' x2='320' y2='500'></line>
        <line x1='320' y1='480' x2='340' y2='500'></line>
        <line x1='360' y1='480' x2='340' y2='500'></line>
        <line x1='380' y1='480' x2='360' y2='500'></line>
        <line x1='380' y1='480' x2='400' y2='500'></line>
        <line x1='400' y1='480' x2='420' y2='500'></line>
        <line x1='440' y1='480' x2='420' y2='500'></line>
        <line x1='440' y1='480' x2='460' y2='500'></line>
        <line x1='480' y1='480' x2='460' y2='500'></line>
        <line x1='500' y1='480' x2='480' y2='500'></line>
        <line x1='520' y1='480' x2='500' y2='500'></line>
        <line x1='540' y1='480' x2='520' y2='500'></line>
        <line x1='540' y1='480' x2='560' y2='500'></line>
        <line x1='580' y1='480' x2='560' y2='500'></line>
        <line x1='580' y1='480' x2='600' y2='500'></line>
        <line x1='620' y1='480' x2='600' y2='500'></line>
        <line x1='620' y1='480' x2='640' y2='500'></line>
        <line x1='640' y1='480' x2='660' y2='500'></line>
        <line x1='660' y1='480' x2='680' y2='500'></line>
        <line x1='680' y1='480' x2='700' y2='500'></line>
        <line x1='720' y1='480' x2='700' y2='500'></line>
        <line x1='720' y1='480' x2='740' y2='500'></line>
        <line x1='760' y1='480' x2='740' y2='500'></line>
        <line x1='780' y1='480' x2='760' y2='500'></line>
        <line x1='800' y1='480' x2='780' y2='500'></line>
        <line x1='820' y1='480' x2='800' y2='500'></line>
        <line x1='840' y1='480' x2='820' y2='500'></line>
        <line x1='840' y1='480' x2='860' y2='500'></line>
        <line x1='880' y1='480' x2='860' y2='500'></line>
        <line x1='900' y1='480' x2='880' y2='500'></line>
        <line x1='920' y1='480' x2='900' y2='500'></line>
        <line x1='920' y1='480' x2='940' y2='500'></line>
        <line x1='960' y1='480' x2='940' y2='500'></line>
        <line x1='960' y1='480' x2='980' y2='500'></line>
        <line x1='980' y1='480' x2='1000' y2='500'></line>
        <line x1='1000' y1='480' x2='1020' y2='500'></line>
        <line x1='1020' y1='480' x2='1040' y2='500'></line>
        <line x1='1060' y1='480' x2='1040' y2='500'></line>
        <line x1='1060' y1='480' x2='1080' y2='500'></line>
        <line x1='1080' y1='480' x2='1100' y2='500'></line>
        <line x1='1120' y1='480' x2='1100' y2='500'></line>
        <line x1='1120' y1='480' x2='1140' y2='500'></line>
        <line x1='1140' y1='480' x2='1160' y2='500'></line>
        <line x1='1180' y1='480' x2='1160' y2='500'></line>
        <line x1='1200' y1='480' x2='1180' y2='500'></line>
        <line x1='1200' y1='480' x2='1220' y2='500'></line>
        <line x1='1240' y1='480' x2='1220' y2='500'></line>
        <line x1='1260' y1='480' x2='1240' y2='500'></line>
        <line x1='1280' y1='480' x2='1260' y2='500'></line>
        <line x1='1300' y1='480' x2='1280' y2='500'></line>
        <line x1='1320' y1='480' x2='1300' y2='500'></line>
        <line x1='1320' y1='480' x2='1340' y2='500'></line>
        <line x1='1360' y1='480' x2='1340' y2='500'></line>
        <line x1='1360' y1='480' x2='1380' y2='500'></line>
        <line x1='1400' y1='480' x2='1380' y2='500'></line>
        <line x1='1420' y1='480' x2='1400' y2='500'></line>
        <line x1='1440' y1='480' x2='1420' y2='500'></line>
        <line x1='0' y1='500' x2='20' y2='520'></line>
        <line x1='40' y1='500' x2='20' y2='520'></line>
        <line x1='60' y1='500' x2='40' y2='520'></line>
        <line x1='60' y1='500' x2='80' y2='520'></line>
        <line x1='100' y1='500' x2='80' y2='520'></line>
        <line x1='100' y1='500' x2='120' y2='520'></line>
        <line x1='120' y1='500' x2='140' y2='520'></line>
        <line x1='140' y1='500' x2='160' y2='520'></line>
        <line x1='160' y1='500' x2='180' y2='520'></line>
        <line x1='200' y1='500' x2='180' y2='520'></line>
        <line x1='220' y1='500' x2='200' y2='520'></line>
        <line x1='240' y1='500' x2='220' y2='520'></line>
        <line x1='240' y1='500' x2='260' y2='520'></line>
        <line x1='280' y1='500' x2='260' y2='520'></line>
        <line x1='280' y1='500' x2='300' y2='520'></line>
        <line x1='300' y1='500' x2='320' y2='520'></line>
        <line x1='320' y1='500' x2='340' y2='520'></line>
        <line x1='340' y1='500' x2='360' y2='520'></line>
        <line x1='380' y1='500' x2='360' y2='520'></line>
        <line x1='380' y1='500' x2='400' y2='520'></line>
        <line x1='400' y1='500' x2='420' y2='520'></line>
        <line x1='440' y1='500' x2='420' y2='520'></line>
        <line x1='440' y1='500' x2='460' y2='520'></line>
        <line x1='480' y1='500' x2='460' y2='520'></line>
        <line x1='500' y1='500' x2='480' y2='520'></line>
        <line x1='500' y1='500' x2='520' y2='520'></line>
        <line x1='540' y1='500' x2='520' y2='520'></line>
        <line x1='560' y1='500' x2='540' y2='520'></line>
        <line x1='560' y1='500' x2='580' y2='520'></line>
        <line x1='600' y1='500' x2='580' y2='520'></line>
        <line x1='620' y1='500' x2='600' y2='520'></line>
        <line x1='640' y1='500' x2='620' y2='520'></line>
        <line x1='640' y1='500' x2='660' y2='520'></line>
        <line x1='680' y1='500' x2='660' y2='520'></line>
        <line x1='680' y1='500' x2='700' y2='520'></line>
        <line x1='720' y1='500' x2='700' y2='520'></line>
        <line x1='740' y1='500' x2='720' y2='520'></line>
        <line x1='760' y1='500' x2='740' y2='520'></line>
        <line x1='760' y1='500' x2='780' y2='520'></line>
        <line x1='800' y1='500' x2='780' y2='520'></line>
        <line x1='820' y1='500' x2='800' y2='520'></line>
        <line x1='820' y1='500' x2='840' y2='520'></line>
        <line x1='860' y1='500' x2='840' y2='520'></line>
        <line x1='880' y1='500' x2='860' y2='520'></line>
        <line x1='880' y1='500' x2='900' y2='520'></line>
        <line x1='920' y1='500' x2='900' y2='520'></line>
        <line x1='940' y1='500' x2='920' y2='520'></line>
        <line x1='960' y1='500' x2='940' y2='520'></line>
        <line x1='980' y1='500' x2='960' y2='520'></line>
        <line x1='980' y1='500' x2='1000' y2='520'></line>
        <line x1='1020' y1='500' x2='1000' y2='520'></line>
        <line x1='1040' y1='500' x2='1020' y2='520'></line>
        <line x1='1040' y1='500' x2='1060' y2='520'></line>
        <line x1='1080' y1='500' x2='1060' y2='520'></line>
        <line x1='1080' y1='500' x2='1100' y2='520'></line>
        <line x1='1120' y1='500' x2='1100' y2='520'></line>
        <line x1='1140' y1='500' x2='1120' y2='520'></line>
        <line x1='1140' y1='500' x2='1160' y2='520'></line>
        <line x1='1160' y1='500' x2='1180' y2='520'></line>
        <line x1='1180' y1='500' x2='1200' y2='520'></line>
        <line x1='1200' y1='500' x2='1220' y2='520'></line>
        <line x1='1240' y1='500' x2='1220' y2='520'></line>
        <line x1='1240' y1='500' x2='1260' y2='520'></line>
        <line x1='1280' y1='500' x2='1260' y2='520'></line>
        <line x1='1280' y1='500' x2='1300' y2='520'></line>
        <line x1='1320' y1='500' x2='1300' y2='520'></line>
        <line x1='1320' y1='500' x2='1340' y2='520'></line>
        <line x1='1340' y1='500' x2='1360' y2='520'></line>
        <line x1='1360' y1='500' x2='1380' y2='520'></line>
        <line x1='1380' y1='500' x2='1400' y2='520'></line>
        <line x1='1420' y1='500' x2='1400' y2='520'></line>
        <line x1='1420' y1='500' x2='1440' y2='520'></line>
        <line x1='20' y1='520' x2='0' y2='540'></line>
        <line x1='40' y1='520' x2='20' y2='540'></line>
        <line x1='60' y1='520' x2='40' y2='540'></line>
        <line x1='80' y1='520' x2='60' y2='540'></line>
        <line x1='100' y1='520' x2='80' y2='540'></line>
        <line x1='100' y1='520' x2='120' y2='540'></line>
        <line x1='120' y1='520' x2='140' y2='540'></line>
        <line x1='140' y1='520' x2='160' y2='540'></line>
        <line x1='160' y1='520' x2='180' y2='540'></line>
        <line x1='180' y1='520' x2='200' y2='540'></line>
        <line x1='200' y1='520' x2='220' y2='540'></line>
        <line x1='240' y1='520' x2='220' y2='540'></line>
        <line x1='240' y1='520' x2='260' y2='540'></line>
        <line x1='260' y1='520' x2='280' y2='540'></line>
        <line x1='300' y1='520' x2='280' y2='540'></line>
        <line x1='300' y1='520' x2='320' y2='540'></line>
        <line x1='320' y1='520' x2='340' y2='540'></line>
        <line x1='340' y1='520' x2='360' y2='540'></line>
        <line x1='360' y1='520' x2='380' y2='540'></line>
        <line x1='400' y1='520' x2='380' y2='540'></line>
        <line x1='400' y1='520' x2='420' y2='540'></line>
        <line x1='420' y1='520' x2='440' y2='540'></line>
        <line x1='440' y1='520' x2='460' y2='540'></line>
        <line x1='460' y1='520' x2='480' y2='540'></line>
        <line x1='480' y1='520' x2='500' y2='540'></line>
        <line x1='500' y1='520' x2='520' y2='540'></line>
        <line x1='540' y1='520' x2='520' y2='540'></line>
        <line x1='540' y1='520' x2='560' y2='540'></line>
        <line x1='560' y1='520' x2='580' y2='540'></line>
        <line x1='600' y1='520' x2='580' y2='540'></line>
        <line x1='620' y1='520' x2='600' y2='540'></line>
        <line x1='620' y1='520' x2='640' y2='540'></line>
        <line x1='640' y1='520' x2='660' y2='540'></line>
        <line x1='660' y1='520' x2='680' y2='540'></line>
        <line x1='680' y1='520' x2='700' y2='540'></line>
        <line x1='720' y1='520' x2='700' y2='540'></line>
        <line x1='740' y1='520' x2='720' y2='540'></line>
        <line x1='740' y1='520' x2='760' y2='540'></line>
        <line x1='780' y1='520' x2='760' y2='540'></line>
        <line x1='800' y1='520' x2='780' y2='540'></line>
        <line x1='820' y1='520' x2='800' y2='540'></line>
        <line x1='840' y1='520' x2='820' y2='540'></line>
        <line x1='840' y1='520' x2='860' y2='540'></line>
        <line x1='880' y1='520' x2='860' y2='540'></line>
        <line x1='880' y1='520' x2='900' y2='540'></line>
        <line x1='920' y1='520' x2='900' y2='540'></line>
        <line x1='920' y1='520' x2='940' y2='540'></line>
        <line x1='940' y1='520' x2='960' y2='540'></line>
        <line x1='960' y1='520' x2='980' y2='540'></line>
        <line x1='980' y1='520' x2='1000' y2='540'></line>
        <line x1='1000' y1='520' x2='1020' y2='540'></line>
        <line x1='1020' y1='520' x2='1040' y2='540'></line>
        <line x1='1060' y1='520' x2='1040' y2='540'></line>
        <line x1='1080' y1='520' x2='1060' y2='540'></line>
        <line x1='1100' y1='520' x2='1080' y2='540'></line>
        <line x1='1120' y1='520' x2='1100' y2='540'></line>
        <line x1='1120' y1='520' x2='1140' y2='540'></line>
        <line x1='1140' y1='520' x2='1160' y2='540'></line>
        <line x1='1160' y1='520' x2='1180' y2='540'></line>
        <line x1='1200' y1='520' x2='1180' y2='540'></line>
        <line x1='1220' y1='520' x2='1200' y2='540'></line>
        <line x1='1240' y1='520' x2='1220' y2='540'></line>
        <line x1='1240' y1='520' x2='1260' y2='540'></line>
        <line x1='1260' y1='520' x2='1280' y2='540'></line>
        <line x1='1280' y1='520' x2='1300' y2='540'></line>
        <line x1='1320' y1='520' x2='1300' y2='540'></line>
        <line x1='1320' y1='520' x2='1340' y2='540'></line>
        <line x1='1340' y1='520' x2='1360' y2='540'></line>
        <line x1='1360' y1='520' x2='1380' y2='540'></line>
        <line x1='1380' y1='520' x2='1400' y2='540'></line>
        <line x1='1400' y1='520' x2='1420' y2='540'></line>
        <line x1='1420' y1='520' x2='1440' y2='540'></line>
        <line x1='0' y1='540' x2='20' y2='560'></line>
        <line x1='20' y1='540' x2='40' y2='560'></line>
        <line x1='40' y1='540' x2='60' y2='560'></line>
        <line x1='80' y1='540' x2='60' y2='560'></line>
        <line x1='80' y1='540' x2='100' y2='560'></line>
        <line x1='100' y1='540' x2='120' y2='560'></line>
        <line x1='140' y1='540' x2='120' y2='560'></line>
        <line x1='160' y1='540' x2='140' y2='560'></line>
        <line x1='160' y1='540' x2='180' y2='560'></line>
        <line x1='180' y1='540' x2='200' y2='560'></line>
        <line x1='200' y1='540' x2='220' y2='560'></line>
        <line x1='220' y1='540' x2='240' y2='560'></line>
        <line x1='260' y1='540' x2='240' y2='560'></line>
        <line x1='280' y1='540' x2='260' y2='560'></line>
        <line x1='280' y1='540' x2='300' y2='560'></line>
        <line x1='300' y1='540' x2='320' y2='560'></line>
        <line x1='320' y1='540' x2='340' y2='560'></line>
        <line x1='340' y1='540' x2='360' y2='560'></line>
        <line x1='360' y1='540' x2='380' y2='560'></line>
        <line x1='380' y1='540' x2='400' y2='560'></line>
        <line x1='420' y1='540' x2='400' y2='560'></line>
        <line x1='440' y1='540' x2='420' y2='560'></line>
        <line x1='440' y1='540' x2='460' y2='560'></line>
        <line x1='460' y1='540' x2='480' y2='560'></line>
        <line x1='480' y1='540' x2='500' y2='560'></line>
        <line x1='520' y1='540' x2='500' y2='560'></line>
        <line x1='520' y1='540' x2='540' y2='560'></line>
        <line x1='560' y1='540' x2='540' y2='560'></line>
        <line x1='580' y1='540' x2='560' y2='560'></line>
        <line x1='580' y1='540' x2='600' y2='560'></line>
        <line x1='600' y1='540' x2='620' y2='560'></line>
        <line x1='640' y1='540' x2='620' y2='560'></line>
        <line x1='640' y1='540' x2='660' y2='560'></line>
        <line x1='680' y1='540' x2='660' y2='560'></line>
        <line x1='700' y1='540' x2='680' y2='560'></line>
        <line x1='700' y1='540' x2='720' y2='560'></line>
        <line x1='720' y1='540' x2='740' y2='560'></line>
        <line x1='760' y1='540' x2='740' y2='560'></line>
        <line x1='760' y1='540' x2='780' y2='560'></line>
        <line x1='780' y1='540' x2='800' y2='560'></line>
        <line x1='820' y1='540' x2='800' y2='560'></line>
        <line x1='840' y1='540' x2='820' y2='560'></line>
        <line x1='860' y1='540' x2='840' y2='560'></line>
        <line x1='880' y1='540' x2='860' y2='560'></line>
        <line x1='880' y1='540' x2='900' y2='560'></line>
        <line x1='920' y1='540' x2='900' y2='560'></line>
        <line x1='940' y1='540' x2='920' y2='560'></line>
        <line x1='940' y1='540' x2='960' y2='560'></line>
        <line x1='980' y1='540' x2='960' y2='560'></line>
        <line x1='980' y1='540' x2='1000' y2='560'></line>
        <line x1='1020' y1='540' x2='1000' y2='560'></line>
        <line x1='1020' y1='540' x2='1040' y2='560'></line>
        <line x1='1060' y1='540' x2='1040' y2='560'></line>
        <line x1='1060' y1='540' x2='1080' y2='560'></line>
        <line x1='1080' y1='540' x2='1100' y2='560'></line>
        <line x1='1100' y1='540' x2='1120' y2='560'></line>
        <line x1='1140' y1='540' x2='1120' y2='560'></line>
        <line x1='1160' y1='540' x2='1140' y2='560'></line>
        <line x1='1160' y1='540' x2='1180' y2='560'></line>
        <line x1='1200' y1='540' x2='1180' y2='560'></line>
        <line x1='1200' y1='540' x2='1220' y2='560'></line>
        <line x1='1220' y1='540' x2='1240' y2='560'></line>
        <line x1='1260' y1='540' x2='1240' y2='560'></line>
        <line x1='1260' y1='540' x2='1280' y2='560'></line>
        <line x1='1280' y1='540' x2='1300' y2='560'></line>
        <line x1='1320' y1='540' x2='1300' y2='560'></line>
        <line x1='1320' y1='540' x2='1340' y2='560'></line>
        <line x1='1360' y1='540' x2='1340' y2='560'></line>
        <line x1='1380' y1='540' x2='1360' y2='560'></line>
        <line x1='1380' y1='540' x2='1400' y2='560'></line>
        <line x1='1400' y1='540' x2='1420' y2='560'></line>
        <line x1='1420' y1='540' x2='1440' y2='560'></line>
        <line x1='0' y1='560' x2='20' y2='580'></line>
        <line x1='20' y1='560' x2='40' y2='580'></line>
        <line x1='40' y1='560' x2='60' y2='580'></line>
        <line x1='80' y1='560' x2='60' y2='580'></line>
        <line x1='80' y1='560' x2='100' y2='580'></line>
        <line x1='120' y1='560' x2='100' y2='580'></line>
        <line x1='120' y1='560' x2='140' y2='580'></line>
        <line x1='160' y1='560' x2='140' y2='580'></line>
        <line x1='160' y1='560' x2='180' y2='580'></line>
        <line x1='200' y1='560' x2='180' y2='580'></line>
        <line x1='200' y1='560' x2='220' y2='580'></line>
        <line x1='240' y1='560' x2='220' y2='580'></line>
        <line x1='260' y1='560' x2='240' y2='580'></line>
        <line x1='280' y1='560' x2='260' y2='580'></line>
        <line x1='300' y1='560' x2='280' y2='580'></line>
        <line x1='320' y1='560' x2='300' y2='580'></line>
        <line x1='340' y1='560' x2='320' y2='580'></line>
        <line x1='360' y1='560' x2='340' y2='580'></line>
        <line x1='360' y1='560' x2='380' y2='580'></line>
        <line x1='400' y1='560' x2='380' y2='580'></line>
        <line x1='400' y1='560' x2='420' y2='580'></line>
        <line x1='440' y1='560' x2='420' y2='580'></line>
        <line x1='440' y1='560' x2='460' y2='580'></line>
        <line x1='480' y1='560' x2='460' y2='580'></line>
        <line x1='480' y1='560' x2='500' y2='580'></line>
        <line x1='520' y1='560' x2='500' y2='580'></line>
        <line x1='540' y1='560' x2='520' y2='580'></line>
        <line x1='540' y1='560' x2='560' y2='580'></line>
        <line x1='560' y1='560' x2='580' y2='580'></line>
        <line x1='600' y1='560' x2='580' y2='580'></line>
        <line x1='600' y1='560' x2='620' y2='580'></line>
        <line x1='640' y1='560' x2='620' y2='580'></line>
        <line x1='660' y1='560' x2='640' y2='580'></line>
        <line x1='660' y1='560' x2='680' y2='580'></line>
        <line x1='680' y1='560' x2='700' y2='580'></line>
        <line x1='700' y1='560' x2='720' y2='580'></line>
        <line x1='740' y1='560' x2='720' y2='580'></line>
        <line x1='760' y1='560' x2='740' y2='580'></line>
        <line x1='780' y1='560' x2='760' y2='580'></line>
        <line x1='780' y1='560' x2='800' y2='580'></line>
        <line x1='800' y1='560' x2='820' y2='580'></line>
        <line x1='840' y1='560' x2='820' y2='580'></line>
        <line x1='860' y1='560' x2='840' y2='580'></line>
        <line x1='880' y1='560' x2='860' y2='580'></line>
        <line x1='900' y1='560' x2='880' y2='580'></line>
        <line x1='900' y1='560' x2='920' y2='580'></line>
        <line x1='940' y1='560' x2='920' y2='580'></line>
        <line x1='960' y1='560' x2='940' y2='580'></line>
        <line x1='980' y1='560' x2='960' y2='580'></line>
        <line x1='1000' y1='560' x2='980' y2='580'></line>
        <line x1='1000' y1='560' x2='1020' y2='580'></line>
        <line x1='1020' y1='560' x2='1040' y2='580'></line>
        <line x1='1060' y1='560' x2='1040' y2='580'></line>
        <line x1='1060' y1='560' x2='1080' y2='580'></line>
        <line x1='1080' y1='560' x2='1100' y2='580'></line>
        <line x1='1100' y1='560' x2='1120' y2='580'></line>
        <line x1='1140' y1='560' x2='1120' y2='580'></line>
        <line x1='1140' y1='560' x2='1160' y2='580'></line>
        <line x1='1180' y1='560' x2='1160' y2='580'></line>
        <line x1='1200' y1='560' x2='1180' y2='580'></line>
        <line x1='1200' y1='560' x2='1220' y2='580'></line>
        <line x1='1220' y1='560' x2='1240' y2='580'></line>
        <line x1='1240' y1='560' x2='1260' y2='580'></line>
        <line x1='1260' y1='560' x2='1280' y2='580'></line>
        <line x1='1300' y1='560' x2='1280' y2='580'></line>
        <line x1='1300' y1='560' x2='1320' y2='580'></line>
        <line x1='1320' y1='560' x2='1340' y2='580'></line>
        <line x1='1360' y1='560' x2='1340' y2='580'></line>
        <line x1='1380' y1='560' x2='1360' y2='580'></line>
        <line x1='1400' y1='560' x2='1380' y2='580'></line>
        <line x1='1400' y1='560' x2='1420' y2='580'></line>
        <line x1='1440' y1='560' x2='1420' y2='580'></line>
        <line x1='0' y1='580' x2='20' y2='600'></line>
        <line x1='40' y1='580' x2='20' y2='600'></line>
        <line x1='60' y1='580' x2='40' y2='600'></line>
        <line x1='60' y1='580' x2='80' y2='600'></line>
        <line x1='80' y1='580' x2='100' y2='600'></line>
        <line x1='100' y1='580' x2='120' y2='600'></line>
        <line x1='140' y1='580' x2='120' y2='600'></line>
        <line x1='140' y1='580' x2='160' y2='600'></line>
        <line x1='160' y1='580' x2='180' y2='600'></line>
        <line x1='200' y1='580' x2='180' y2='600'></line>
        <line x1='220' y1='580' x2='200' y2='600'></line>
        <line x1='240' y1='580' x2='220' y2='600'></line>
        <line x1='260' y1='580' x2='240' y2='600'></line>
        <line x1='280' y1='580' x2='260' y2='600'></line>
        <line x1='300' y1='580' x2='280' y2='600'></line>
        <line x1='320' y1='580' x2='300' y2='600'></line>
        <line x1='320' y1='580' x2='340' y2='600'></line>
        <line x1='340' y1='580' x2='360' y2='600'></line>
        <line x1='380' y1='580' x2='360' y2='600'></line>
        <line x1='400' y1='580' x2='380' y2='600'></line>
        <line x1='420' y1='580' x2='400' y2='600'></line>
        <line x1='440' y1='580' x2='420' y2='600'></line>
        <line x1='460' y1='580' x2='440' y2='600'></line>
        <line x1='460' y1='580' x2='480' y2='600'></line>
        <line x1='500' y1='580' x2='480' y2='600'></line>
        <line x1='520' y1='580' x2='500' y2='600'></line>
        <line x1='520' y1='580' x2='540' y2='600'></line>
        <line x1='540' y1='580' x2='560' y2='600'></line>
        <line x1='580' y1='580' x2='560' y2='600'></line>
        <line x1='600' y1='580' x2='580' y2='600'></line>
        <line x1='600' y1='580' x2='620' y2='600'></line>
        <line x1='640' y1='580' x2='620' y2='600'></line>
        <line x1='640' y1='580' x2='660' y2='600'></line>
        <line x1='660' y1='580' x2='680' y2='600'></line>
        <line x1='700' y1='580' x2='680' y2='600'></line>
        <line x1='720' y1='580' x2='700' y2='600'></line>
        <line x1='720' y1='580' x2='740' y2='600'></line>
        <line x1='740' y1='580' x2='760' y2='600'></line>
        <line x1='760' y1='580' x2='780' y2='600'></line>
        <line x1='800' y1='580' x2='780' y2='600'></line>
        <line x1='820' y1='580' x2='800' y2='600'></line>
        <line x1='820' y1='580' x2='840' y2='600'></line>
        <line x1='840' y1='580' x2='860' y2='600'></line>
        <line x1='860' y1='580' x2='880' y2='600'></line>
        <line x1='900' y1='580' x2='880' y2='600'></line>
        <line x1='900' y1='580' x2='920' y2='600'></line>
        <line x1='940' y1='580' x2='920' y2='600'></line>
        <line x1='940' y1='580' x2='960' y2='600'></line>
        <line x1='960' y1='580' x2='980' y2='600'></line>
        <line x1='1000' y1='580' x2='980' y2='600'></line>
        <line x1='1000' y1='580' x2='1020' y2='600'></line>
        <line x1='1020' y1='580' x2='1040' y2='600'></line>
        <line x1='1060' y1='580' x2='1040' y2='600'></line>
        <line x1='1060' y1='580' x2='1080' y2='600'></line>
        <line x1='1100' y1='580' x2='1080' y2='600'></line>
        <line x1='1120' y1='580' x2='1100' y2='600'></line>
        <line x1='1140' y1='580' x2='1120' y2='600'></line>
        <line x1='1160' y1='580' x2='1140' y2='600'></line>
        <line x1='1160' y1='580' x2='1180' y2='600'></line>
        <line x1='1200' y1='580' x2='1180' y2='600'></line>
        <line x1='1220' y1='580' x2='1200' y2='600'></line>
        <line x1='1220' y1='580' x2='1240' y2='600'></line>
        <line x1='1240' y1='580' x2='1260' y2='600'></line>
        <line x1='1280' y1='580' x2='1260' y2='600'></line>
        <line x1='1300' y1='580' x2='1280' y2='600'></line>
        <line x1='1300' y1='580' x2='1320' y2='600'></line>
        <line x1='1340' y1='580' x2='1320' y2='600'></line>
        <line x1='1360' y1='580' x2='1340' y2='600'></line>
        <line x1='1380' y1='580' x2='1360' y2='600'></line>
        <line x1='1400' y1='580' x2='1380' y2='600'></line>
        <line x1='1420' y1='580' x2='1400' y2='600'></line>
        <line x1='1440' y1='580' x2='1420' y2='600'></line>
        <line x1='0' y1='600' x2='20' y2='620'></line>
        <line x1='20' y1='600' x2='40' y2='620'></line>
        <line x1='40' y1='600' x2='60' y2='620'></line>
        <line x1='60' y1='600' x2='80' y2='620'></line>
        <line x1='80' y1='600' x2='100' y2='620'></line>
        <line x1='100' y1='600' x2='120' y2='620'></line>
        <line x1='140' y1='600' x2='120' y2='620'></line>
        <line x1='160' y1='600' x2='140' y2='620'></line>
        <line x1='160' y1='600' x2='180' y2='620'></line>
        <line x1='180' y1='600' x2='200' y2='620'></line>
        <line x1='200' y1='600' x2='220' y2='620'></line>
        <line x1='220' y1='600' x2='240' y2='620'></line>
        <line x1='240' y1='600' x2='260' y2='620'></line>
        <line x1='260' y1='600' x2='280' y2='620'></line>
        <line x1='300' y1='600' x2='280' y2='620'></line>
        <line x1='300' y1='600' x2='320' y2='620'></line>
        <line x1='340' y1='600' x2='320' y2='620'></line>
        <line x1='340' y1='600' x2='360' y2='620'></line>
        <line x1='360' y1='600' x2='380' y2='620'></line>
        <line x1='400' y1='600' x2='380' y2='620'></line>
        <line x1='420' y1='600' x2='400' y2='620'></line>
        <line x1='420' y1='600' x2='440' y2='620'></line>
        <line x1='440' y1='600' x2='460' y2='620'></line>
        <line x1='460' y1='600' x2='480' y2='620'></line>
        <line x1='480' y1='600' x2='500' y2='620'></line>
        <line x1='500' y1='600' x2='520' y2='620'></line>
        <line x1='520' y1='600' x2='540' y2='620'></line>
        <line x1='540' y1='600' x2='560' y2='620'></line>
        <line x1='560' y1='600' x2='580' y2='620'></line>
        <line x1='580' y1='600' x2='600' y2='620'></line>
        <line x1='620' y1='600' x2='600' y2='620'></line>
        <line x1='620' y1='600' x2='640' y2='620'></line>
        <line x1='640' y1='600' x2='660' y2='620'></line>
        <line x1='680' y1='600' x2='660' y2='620'></line>
        <line x1='700' y1='600' x2='680' y2='620'></line>
        <line x1='700' y1='600' x2='720' y2='620'></line>
        <line x1='740' y1='600' x2='720' y2='620'></line>
        <line x1='740' y1='600' x2='760' y2='620'></line>
        <line x1='760' y1='600' x2='780' y2='620'></line>
        <line x1='780' y1='600' x2='800' y2='620'></line>
        <line x1='800' y1='600' x2='820' y2='620'></line>
        <line x1='820' y1='600' x2='840' y2='620'></line>
        <line x1='860' y1='600' x2='840' y2='620'></line>
        <line x1='880' y1='600' x2='860' y2='620'></line>
        <line x1='900' y1='600' x2='880' y2='620'></line>
        <line x1='920' y1='600' x2='900' y2='620'></line>
        <line x1='920' y1='600' x2='940' y2='620'></line>
        <line x1='940' y1='600' x2='960' y2='620'></line>
        <line x1='960' y1='600' x2='980' y2='620'></line>
        <line x1='980' y1='600' x2='1000' y2='620'></line>
        <line x1='1000' y1='600' x2='1020' y2='620'></line>
        <line x1='1020' y1='600' x2='1040' y2='620'></line>
        <line x1='1040' y1='600' x2='1060' y2='620'></line>
        <line x1='1080' y1='600' x2='1060' y2='620'></line>
        <line x1='1080' y1='600' x2='1100' y2='620'></line>
        <line x1='1120' y1='600' x2='1100' y2='620'></line>
        <line x1='1140' y1='600' x2='1120' y2='620'></line>
        <line x1='1140' y1='600' x2='1160' y2='620'></line>
        <line x1='1160' y1='600' x2='1180' y2='620'></line>
        <line x1='1200' y1='600' x2='1180' y2='620'></line>
        <line x1='1200' y1='600' x2='1220' y2='620'></line>
        <line x1='1240' y1='600' x2='1220' y2='620'></line>
        <line x1='1260' y1='600' x2='1240' y2='620'></line>
        <line x1='1280' y1='600' x2='1260' y2='620'></line>
        <line x1='1300' y1='600' x2='1280' y2='620'></line>
        <line x1='1320' y1='600' x2='1300' y2='620'></line>
        <line x1='1320' y1='600' x2='1340' y2='620'></line>
        <line x1='1360' y1='600' x2='1340' y2='620'></line>
        <line x1='1380' y1='600' x2='1360' y2='620'></line>
        <line x1='1400' y1='600' x2='1380' y2='620'></line>
        <line x1='1420' y1='600' x2='1400' y2='620'></line>
        <line x1='1440' y1='600' x2='1420' y2='620'></line>
        <line x1='0' y1='620' x2='20' y2='640'></line>
        <line x1='40' y1='620' x2='20' y2='640'></line>
        <line x1='60' y1='620' x2='40' y2='640'></line>
        <line x1='80' y1='620' x2='60' y2='640'></line>
        <line x1='80' y1='620' x2='100' y2='640'></line>
        <line x1='120' y1='620' x2='100' y2='640'></line>
        <line x1='120' y1='620' x2='140' y2='640'></line>
        <line x1='160' y1='620' x2='140' y2='640'></line>
        <line x1='180' y1='620' x2='160' y2='640'></line>
        <line x1='200' y1='620' x2='180' y2='640'></line>
        <line x1='220' y1='620' x2='200' y2='640'></line>
        <line x1='220' y1='620' x2='240' y2='640'></line>
        <line x1='240' y1='620' x2='260' y2='640'></line>
        <line x1='260' y1='620' x2='280' y2='640'></line>
        <line x1='280' y1='620' x2='300' y2='640'></line>
        <line x1='320' y1='620' x2='300' y2='640'></line>
        <line x1='340' y1='620' x2='320' y2='640'></line>
        <line x1='360' y1='620' x2='340' y2='640'></line>
        <line x1='360' y1='620' x2='380' y2='640'></line>
        <line x1='380' y1='620' x2='400' y2='640'></line>
        <line x1='400' y1='620' x2='420' y2='640'></line>
        <line x1='420' y1='620' x2='440' y2='640'></line>
        <line x1='440' y1='620' x2='460' y2='640'></line>
        <line x1='480' y1='620' x2='460' y2='640'></line>
        <line x1='500' y1='620' x2='480' y2='640'></line>
        <line x1='500' y1='620' x2='520' y2='640'></line>
        <line x1='520' y1='620' x2='540' y2='640'></line>
        <line x1='540' y1='620' x2='560' y2='640'></line>
        <line x1='580' y1='620' x2='560' y2='640'></line>
        <line x1='600' y1='620' x2='580' y2='640'></line>
        <line x1='600' y1='620' x2='620' y2='640'></line>
        <line x1='620' y1='620' x2='640' y2='640'></line>
        <line x1='640' y1='620' x2='660' y2='640'></line>
        <line x1='660' y1='620' x2='680' y2='640'></line>
        <line x1='680' y1='620' x2='700' y2='640'></line>
        <line x1='700' y1='620' x2='720' y2='640'></line>
        <line x1='720' y1='620' x2='740' y2='640'></line>
        <line x1='740' y1='620' x2='760' y2='640'></line>
        <line x1='760' y1='620' x2='780' y2='640'></line>
        <line x1='780' y1='620' x2='800' y2='640'></line>
        <line x1='820' y1='620' x2='800' y2='640'></line>
        <line x1='820' y1='620' x2='840' y2='640'></line>
        <line x1='840' y1='620' x2='860' y2='640'></line>
        <line x1='880' y1='620' x2='860' y2='640'></line>
        <line x1='900' y1='620' x2='880' y2='640'></line>
        <line x1='920' y1='620' x2='900' y2='640'></line>
        <line x1='940' y1='620' x2='920' y2='640'></line>
        <line x1='940' y1='620' x2='960' y2='640'></line>
        <line x1='980' y1='620' x2='960' y2='640'></line>
        <line x1='980' y1='620' x2='1000' y2='640'></line>
        <line x1='1020' y1='620' x2='1000' y2='640'></line>
        <line x1='1020' y1='620' x2='1040' y2='640'></line>
        <line x1='1040' y1='620' x2='1060' y2='640'></line>
        <line x1='1080' y1='620' x2='1060' y2='640'></line>
        <line x1='1100' y1='620' x2='1080' y2='640'></line>
        <line x1='1120' y1='620' x2='1100' y2='640'></line>
        <line x1='1140' y1='620' x2='1120' y2='640'></line>
        <line x1='1160' y1='620' x2='1140' y2='640'></line>
        <line x1='1160' y1='620' x2='1180' y2='640'></line>
        <line x1='1180' y1='620' x2='1200' y2='640'></line>
        <line x1='1200' y1='620' x2='1220' y2='640'></line>
        <line x1='1240' y1='620' x2='1220' y2='640'></line>
        <line x1='1260' y1='620' x2='1240' y2='640'></line>
        <line x1='1260' y1='620' x2='1280' y2='640'></line>
        <line x1='1280' y1='620' x2='1300' y2='640'></line>
        <line x1='1300' y1='620' x2='1320' y2='640'></line>
        <line x1='1320' y1='620' x2='1340' y2='640'></line>
        <line x1='1360' y1='620' x2='1340' y2='640'></line>
        <line x1='1360' y1='620' x2='1380' y2='640'></line>
        <line x1='1400' y1='620' x2='1380' y2='640'></line>
        <line x1='1400' y1='620' x2='1420' y2='640'></line>
        <line x1='1440' y1='620' x2='1420' y2='640'></line>
        <line x1='20' y1='640' x2='0' y2='660'></line>
        <line x1='20' y1='640' x2='40' y2='660'></line>
        <line x1='40' y1='640' x2='60' y2='660'></line>
        <line x1='80' y1='640' x2='60' y2='660'></line>
        <line x1='80' y1='640' x2='100' y2='660'></line>
        <line x1='100' y1='640' x2='120' y2='660'></line>
        <line x1='120' y1='640' x2='140' y2='660'></line>
        <line x1='160' y1='640' x2='140' y2='660'></line>
        <line x1='160' y1='640' x2='180' y2='660'></line>
        <line x1='200' y1='640' x2='180' y2='660'></line>
        <line x1='220' y1='640' x2='200' y2='660'></line>
        <line x1='240' y1='640' x2='220' y2='660'></line>
        <line x1='260' y1='640' x2='240' y2='660'></line>
        <line x1='280' y1='640' x2='260' y2='660'></line>
        <line x1='280' y1='640' x2='300' y2='660'></line>
        <line x1='300' y1='640' x2='320' y2='660'></line>
        <line x1='340' y1='640' x2='320' y2='660'></line>
        <line x1='340' y1='640' x2='360' y2='660'></line>
        <line x1='360' y1='640' x2='380' y2='660'></line>
        <line x1='380' y1='640' x2='400' y2='660'></line>
        <line x1='400' y1='640' x2='420' y2='660'></line>
        <line x1='440' y1='640' x2='420' y2='660'></line>
        <line x1='460' y1='640' x2='440' y2='660'></line>
        <line x1='460' y1='640' x2='480' y2='660'></line>
        <line x1='480' y1='640' x2='500' y2='660'></line>
        <line x1='500' y1='640' x2='520' y2='660'></line>
        <line x1='520' y1='640' x2='540' y2='660'></line>
        <line x1='540' y1='640' x2='560' y2='660'></line>
        <line x1='580' y1='640' x2='560' y2='660'></line>
        <line x1='600' y1='640' x2='580' y2='660'></line>
        <line x1='620' y1='640' x2='600' y2='660'></line>
        <line x1='620' y1='640' x2='640' y2='660'></line>
        <line x1='660' y1='640' x2='640' y2='660'></line>
        <line x1='680' y1='640' x2='660' y2='660'></line>
        <line x1='700' y1='640' x2='680' y2='660'></line>
        <line x1='720' y1='640' x2='700' y2='660'></line>
        <line x1='740' y1='640' x2='720' y2='660'></line>
        <line x1='760' y1='640' x2='740' y2='660'></line>
        <line x1='780' y1='640' x2='760' y2='660'></line>
        <line x1='780' y1='640' x2='800' y2='660'></line>
        <line x1='800' y1='640' x2='820' y2='660'></line>
        <line x1='840' y1='640' x2='820' y2='660'></line>
        <line x1='860' y1='640' x2='840' y2='660'></line>
        <line x1='880' y1='640' x2='860' y2='660'></line>
        <line x1='880' y1='640' x2='900' y2='660'></line>
        <line x1='900' y1='640' x2='920' y2='660'></line>
        <line x1='940' y1='640' x2='920' y2='660'></line>
        <line x1='940' y1='640' x2='960' y2='660'></line>
        <line x1='980' y1='640' x2='960' y2='660'></line>
        <line x1='980' y1='640' x2='1000' y2='660'></line>
        <line x1='1000' y1='640' x2='1020' y2='660'></line>
        <line x1='1020' y1='640' x2='1040' y2='660'></line>
        <line x1='1060' y1='640' x2='1040' y2='660'></line>
        <line x1='1060' y1='640' x2='1080' y2='660'></line>
        <line x1='1080' y1='640' x2='1100' y2='660'></line>
        <line x1='1120' y1='640' x2='1100' y2='660'></line>
        <line x1='1140' y1='640' x2='1120' y2='660'></line>
        <line x1='1140' y1='640' x2='1160' y2='660'></line>
        <line x1='1180' y1='640' x2='1160' y2='660'></line>
        <line x1='1200' y1='640' x2='1180' y2='660'></line>
        <line x1='1220' y1='640' x2='1200' y2='660'></line>
        <line x1='1220' y1='640' x2='1240' y2='660'></line>
        <line x1='1240' y1='640' x2='1260' y2='660'></line>
        <line x1='1260' y1='640' x2='1280' y2='660'></line>
        <line x1='1300' y1='640' x2='1280' y2='660'></line>
        <line x1='1320' y1='640' x2='1300' y2='660'></line>
        <line x1='1340' y1='640' x2='1320' y2='660'></line>
        <line x1='1340' y1='640' x2='1360' y2='660'></line>
        <line x1='1380' y1='640' x2='1360' y2='660'></line>
        <line x1='1400' y1='640' x2='1380' y2='660'></line>
        <line x1='1420' y1='640' x2='1400' y2='660'></line>
        <line x1='1440' y1='640' x2='1420' y2='660'></line>
        <line x1='20' y1='660' x2='0' y2='680'></line>
        <line x1='40' y1='660' x2='20' y2='680'></line>
        <line x1='40' y1='660' x2='60' y2='680'></line>
        <line x1='60' y1='660' x2='80' y2='680'></line>
        <line x1='100' y1='660' x2='80' y2='680'></line>
        <line x1='100' y1='660' x2='120' y2='680'></line>
        <line x1='140' y1='660' x2='120' y2='680'></line>
        <line x1='140' y1='660' x2='160' y2='680'></line>
        <line x1='180' y1='660' x2='160' y2='680'></line>
        <line x1='180' y1='660' x2='200' y2='680'></line>
        <line x1='220' y1='660' x2='200' y2='680'></line>
        <line x1='240' y1='660' x2='220' y2='680'></line>
        <line x1='260' y1='660' x2='240' y2='680'></line>
        <line x1='280' y1='660' x2='260' y2='680'></line>
        <line x1='300' y1='660' x2='280' y2='680'></line>
        <line x1='300' y1='660' x2='320' y2='680'></line>
        <line x1='320' y1='660' x2='340' y2='680'></line>
        <line x1='340' y1='660' x2='360' y2='680'></line>
        <line x1='360' y1='660' x2='380' y2='680'></line>
        <line x1='400' y1='660' x2='380' y2='680'></line>
        <line x1='420' y1='660' x2='400' y2='680'></line>
        <line x1='420' y1='660' x2='440' y2='680'></line>
        <line x1='440' y1='660' x2='460' y2='680'></line>
        <line x1='480' y1='660' x2='460' y2='680'></line>
        <line x1='480' y1='660' x2='500' y2='680'></line>
        <line x1='520' y1='660' x2='500' y2='680'></line>
        <line x1='540' y1='660' x2='520' y2='680'></line>
        <line x1='560' y1='660' x2='540' y2='680'></line>
        <line x1='560' y1='660' x2='580' y2='680'></line>
        <line x1='580' y1='660' x2='600' y2='680'></line>
        <line x1='600' y1='660' x2='620' y2='680'></line>
        <line x1='640' y1='660' x2='620' y2='680'></line>
        <line x1='660' y1='660' x2='640' y2='680'></line>
        <line x1='680' y1='660' x2='660' y2='680'></line>
        <line x1='680' y1='660' x2='700' y2='680'></line>
        <line x1='700' y1='660' x2='720' y2='680'></line>
        <line x1='740' y1='660' x2='720' y2='680'></line>
        <line x1='740' y1='660' x2='760' y2='680'></line>
        <line x1='760' y1='660' x2='780' y2='680'></line>
        <line x1='780' y1='660' x2='800' y2='680'></line>
        <line x1='800' y1='660' x2='820' y2='680'></line>
        <line x1='840' y1='660' x2='820' y2='680'></line>
        <line x1='840' y1='660' x2='860' y2='680'></line>
        <line x1='860' y1='660' x2='880' y2='680'></line>
        <line x1='880' y1='660' x2='900' y2='680'></line>
        <line x1='900' y1='660' x2='920' y2='680'></line>
        <line x1='920' y1='660' x2='940' y2='680'></line>
        <line x1='940' y1='660' x2='960' y2='680'></line>
        <line x1='960' y1='660' x2='980' y2='680'></line>
        <line x1='1000' y1='660' x2='980' y2='680'></line>
        <line x1='1000' y1='660' x2='1020' y2='680'></line>
        <line x1='1040' y1='660' x2='1020' y2='680'></line>
        <line x1='1040' y1='660' x2='1060' y2='680'></line>
        <line x1='1080' y1='660' x2='1060' y2='680'></line>
        <line x1='1080' y1='660' x2='1100' y2='680'></line>
        <line x1='1100' y1='660' x2='1120' y2='680'></line>
        <line x1='1120' y1='660' x2='1140' y2='680'></line>
        <line x1='1140' y1='660' x2='1160' y2='680'></line>
        <line x1='1180' y1='660' x2='1160' y2='680'></line>
        <line x1='1200' y1='660' x2='1180' y2='680'></line>
        <line x1='1220' y1='660' x2='1200' y2='680'></line>
        <line x1='1220' y1='660' x2='1240' y2='680'></line>
        <line x1='1260' y1='660' x2='1240' y2='680'></line>
        <line x1='1280' y1='660' x2='1260' y2='680'></line>
        <line x1='1300' y1='660' x2='1280' y2='680'></line>
        <line x1='1300' y1='660' x2='1320' y2='680'></line>
        <line x1='1340' y1='660' x2='1320' y2='680'></line>
        <line x1='1340' y1='660' x2='1360' y2='680'></line>
        <line x1='1360' y1='660' x2='1380' y2='680'></line>
        <line x1='1380' y1='660' x2='1400' y2='680'></line>
        <line x1='1400' y1='660' x2='1420' y2='680'></line>
        <line x1='1440' y1='660' x2='1420' y2='680'></line>
        <line x1='0' y1='680' x2='20' y2='700'></line>
        <line x1='20' y1='680' x2='40' y2='700'></line>
        <line x1='40' y1='680' x2='60' y2='700'></line>
        <line x1='80' y1='680' x2='60' y2='700'></line>
        <line x1='80' y1='680' x2='100' y2='700'></line>
        <line x1='100' y1='680' x2='120' y2='700'></line>
        <line x1='120' y1='680' x2='140' y2='700'></line>
        <line x1='160' y1='680' x2='140' y2='700'></line>
        <line x1='160' y1='680' x2='180' y2='700'></line>
        <line x1='200' y1='680' x2='180' y2='700'></line>
        <line x1='220' y1='680' x2='200' y2='700'></line>
        <line x1='240' y1='680' x2='220' y2='700'></line>
        <line x1='260' y1='680' x2='240' y2='700'></line>
        <line x1='280' y1='680' x2='260' y2='700'></line>
        <line x1='280' y1='680' x2='300' y2='700'></line>
        <line x1='320' y1='680' x2='300' y2='700'></line>
        <line x1='320' y1='680' x2='340' y2='700'></line>
        <line x1='340' y1='680' x2='360' y2='700'></line>
        <line x1='360' y1='680' x2='380' y2='700'></line>
        <line x1='380' y1='680' x2='400' y2='700'></line>
        <line x1='420' y1='680' x2='400' y2='700'></line>
        <line x1='420' y1='680' x2='440' y2='700'></line>
        <line x1='440' y1='680' x2='460' y2='700'></line>
        <line x1='460' y1='680' x2='480' y2='700'></line>
        <line x1='480' y1='680' x2='500' y2='700'></line>
        <line x1='520' y1='680' x2='500' y2='700'></line>
        <line x1='520' y1='680' x2='540' y2='700'></line>
        <line x1='540' y1='680' x2='560' y2='700'></line>
        <line x1='560' y1='680' x2='580' y2='700'></line>
        <line x1='600' y1='680' x2='580' y2='700'></line>
        <line x1='600' y1='680' x2='620' y2='700'></line>
        <line x1='620' y1='680' x2='640' y2='700'></line>
        <line x1='640' y1='680' x2='660' y2='700'></line>
        <line x1='680' y1='680' x2='660' y2='700'></line>
        <line x1='700' y1='680' x2='680' y2='700'></line>
        <line x1='700' y1='680' x2='720' y2='700'></line>
        <line x1='740' y1='680' x2='720' y2='700'></line>
        <line x1='760' y1='680' x2='740' y2='700'></line>
        <line x1='760' y1='680' x2='780' y2='700'></line>
        <line x1='780' y1='680' x2='800' y2='700'></line>
        <line x1='800' y1='680' x2='820' y2='700'></line>
        <line x1='820' y1='680' x2='840' y2='700'></line>
        <line x1='840' y1='680' x2='860' y2='700'></line>
        <line x1='880' y1='680' x2='860' y2='700'></line>
        <line x1='880' y1='680' x2='900' y2='700'></line>
        <line x1='920' y1='680' x2='900' y2='700'></line>
        <line x1='940' y1='680' x2='920' y2='700'></line>
        <line x1='940' y1='680' x2='960' y2='700'></line>
        <line x1='960' y1='680' x2='980' y2='700'></line>
        <line x1='980' y1='680' x2='1000' y2='700'></line>
        <line x1='1020' y1='680' x2='1000' y2='700'></line>
        <line x1='1020' y1='680' x2='1040' y2='700'></line>
        <line x1='1060' y1='680' x2='1040' y2='700'></line>
        <line x1='1080' y1='680' x2='1060' y2='700'></line>
        <line x1='1100' y1='680' x2='1080' y2='700'></line>
        <line x1='1120' y1='680' x2='1100' y2='700'></line>
        <line x1='1120' y1='680' x2='1140' y2='700'></line>
        <line x1='1140' y1='680' x2='1160' y2='700'></line>
        <line x1='1160' y1='680' x2='1180' y2='700'></line>
        <line x1='1180' y1='680' x2='1200' y2='700'></line>
        <line x1='1200' y1='680' x2='1220' y2='700'></line>
        <line x1='1220' y1='680' x2='1240' y2='700'></line>
        <line x1='1240' y1='680' x2='1260' y2='700'></line>
        <line x1='1280' y1='680' x2='1260' y2='700'></line>
        <line x1='1300' y1='680' x2='1280' y2='700'></line>
        <line x1='1320' y1='680' x2='1300' y2='700'></line>
        <line x1='1340' y1='680' x2='1320' y2='700'></line>
        <line x1='1360' y1='680' x2='1340' y2='700'></line>
        <line x1='1360' y1='680' x2='1380' y2='700'></line>
        <line x1='1380' y1='680' x2='1400' y2='700'></line>
        <line x1='1420' y1='680' x2='1400' y2='700'></line>
        <line x1='1440' y1='680' x2='1420' y2='700'></line>
        <line x1='0' y1='700' x2='20' y2='720'></line>
        <line x1='40' y1='700' x2='20' y2='720'></line>
        <line x1='60' y1='700' x2='40' y2='720'></line>
        <line x1='60' y1='700' x2='80' y2='720'></line>
        <line x1='80' y1='700' x2='100' y2='720'></line>
        <line x1='120' y1='700' x2='100' y2='720'></line>
        <line x1='140' y1='700' x2='120' y2='720'></line>
        <line x1='140' y1='700' x2='160' y2='720'></line>
        <line x1='160' y1='700' x2='180' y2='720'></line>
        <line x1='180' y1='700' x2='200' y2='720'></line>
        <line x1='200' y1='700' x2='220' y2='720'></line>
        <line x1='240' y1='700' x2='220' y2='720'></line>
        <line x1='240' y1='700' x2='260' y2='720'></line>
        <line x1='260' y1='700' x2='280' y2='720'></line>
        <line x1='280' y1='700' x2='300' y2='720'></line>
        <line x1='300' y1='700' x2='320' y2='720'></line>
        <line x1='340' y1='700' x2='320' y2='720'></line>
        <line x1='340' y1='700' x2='360' y2='720'></line>
        <line x1='360' y1='700' x2='380' y2='720'></line>
        <line x1='380' y1='700' x2='400' y2='720'></line>
        <line x1='420' y1='700' x2='400' y2='720'></line>
        <line x1='440' y1='700' x2='420' y2='720'></line>
        <line x1='440' y1='700' x2='460' y2='720'></line>
        <line x1='460' y1='700' x2='480' y2='720'></line>
        <line x1='500' y1='700' x2='480' y2='720'></line>
        <line x1='520' y1='700' x2='500' y2='720'></line>
        <line x1='520' y1='700' x2='540' y2='720'></line>
        <line x1='540' y1='700' x2='560' y2='720'></line>
        <line x1='560' y1='700' x2='580' y2='720'></line>
        <line x1='580' y1='700' x2='600' y2='720'></line>
        <line x1='600' y1='700' x2='620' y2='720'></line>
        <line x1='640' y1='700' x2='620' y2='720'></line>
        <line x1='640' y1='700' x2='660' y2='720'></line>
        <line x1='660' y1='700' x2='680' y2='720'></line>
        <line x1='680' y1='700' x2='700' y2='720'></line>
        <line x1='720' y1='700' x2='700' y2='720'></line>
        <line x1='720' y1='700' x2='740' y2='720'></line>
        <line x1='740' y1='700' x2='760' y2='720'></line>
        <line x1='780' y1='700' x2='760' y2='720'></line>
        <line x1='780' y1='700' x2='800' y2='720'></line>
        <line x1='800' y1='700' x2='820' y2='720'></line>
        <line x1='840' y1='700' x2='820' y2='720'></line>
        <line x1='840' y1='700' x2='860' y2='720'></line>
        <line x1='860' y1='700' x2='880' y2='720'></line>
        <line x1='900' y1='700' x2='880' y2='720'></line>
        <line x1='920' y1='700' x2='900' y2='720'></line>
        <line x1='940' y1='700' x2='920' y2='720'></line>
        <line x1='960' y1='700' x2='940' y2='720'></line>
        <line x1='980' y1='700' x2='960' y2='720'></line>
        <line x1='980' y1='700' x2='1000' y2='720'></line>
        <line x1='1020' y1='700' x2='1000' y2='720'></line>
        <line x1='1040' y1='700' x2='1020' y2='720'></line>
        <line x1='1040' y1='700' x2='1060' y2='720'></line>
        <line x1='1080' y1='700' x2='1060' y2='720'></line>
        <line x1='1100' y1='700' x2='1080' y2='720'></line>
        <line x1='1100' y1='700' x2='1120' y2='720'></line>
        <line x1='1120' y1='700' x2='1140' y2='720'></line>
        <line x1='1160' y1='700' x2='1140' y2='720'></line>
        <line x1='1160' y1='700' x2='1180' y2='720'></line>
        <line x1='1200' y1='700' x2='1180' y2='720'></line>
        <line x1='1200' y1='700' x2='1220' y2='720'></line>
        <line x1='1220' y1='700' x2='1240' y2='720'></line>
        <line x1='1240' y1='700' x2='1260' y2='720'></line>
        <line x1='1280' y1='700' x2='1260' y2='720'></line>
        <line x1='1280' y1='700' x2='1300' y2='720'></line>
        <line x1='1320' y1='700' x2='1300' y2='720'></line>
        <line x1='1340' y1='700' x2='1320' y2='720'></line>
        <line x1='1360' y1='700' x2='1340' y2='720'></line>
        <line x1='1380' y1='700' x2='1360' y2='720'></line>
        <line x1='1400' y1='700' x2='1380' y2='720'></line>
        <line x1='1420' y1='700' x2='1400' y2='720'></line>
        <line x1='1440' y1='700' x2='1420' y2='720'></line>
        <line x1='0' y1='720' x2='20' y2='740'></line>
        <line x1='40' y1='720' x2='20' y2='740'></line>
        <line x1='40' y1='720' x2='60' y2='740'></line>
        <line x1='60' y1='720' x2='80' y2='740'></line>
        <line x1='80' y1='720' x2='100' y2='740'></line>
        <line x1='100' y1='720' x2='120' y2='740'></line>
        <line x1='140' y1='720' x2='120' y2='740'></line>
        <line x1='140' y1='720' x2='160' y2='740'></line>
        <line x1='180' y1='720' x2='160' y2='740'></line>
        <line x1='180' y1='720' x2='200' y2='740'></line>
        <line x1='200' y1='720' x2='220' y2='740'></line>
        <line x1='220' y1='720' x2='240' y2='740'></line>
        <line x1='260' y1='720' x2='240' y2='740'></line>
        <line x1='280' y1='720' x2='260' y2='740'></line>
        <line x1='280' y1='720' x2='300' y2='740'></line>
        <line x1='320' y1='720' x2='300' y2='740'></line>
        <line x1='320' y1='720' x2='340' y2='740'></line>
        <line x1='360' y1='720' x2='340' y2='740'></line>
        <line x1='380' y1='720' x2='360' y2='740'></line>
        <line x1='400' y1='720' x2='380' y2='740'></line>
        <line x1='400' y1='720' x2='420' y2='740'></line>
        <line x1='440' y1='720' x2='420' y2='740'></line>
        <line x1='460' y1='720' x2='440' y2='740'></line>
        <line x1='460' y1='720' x2='480' y2='740'></line>
        <line x1='480' y1='720' x2='500' y2='740'></line>
        <line x1='520' y1='720' x2='500' y2='740'></line>
        <line x1='520' y1='720' x2='540' y2='740'></line>
        <line x1='560' y1='720' x2='540' y2='740'></line>
        <line x1='560' y1='720' x2='580' y2='740'></line>
        <line x1='600' y1='720' x2='580' y2='740'></line>
        <line x1='600' y1='720' x2='620' y2='740'></line>
        <line x1='640' y1='720' x2='620' y2='740'></line>
        <line x1='660' y1='720' x2='640' y2='740'></line>
        <line x1='660' y1='720' x2='680' y2='740'></line>
        <line x1='700' y1='720' x2='680' y2='740'></line>
        <line x1='700' y1='720' x2='720' y2='740'></line>
        <line x1='720' y1='720' x2='740' y2='740'></line>
        <line x1='760' y1='720' x2='740' y2='740'></line>
        <line x1='760' y1='720' x2='780' y2='740'></line>
        <line x1='780' y1='720' x2='800' y2='740'></line>
        <line x1='820' y1='720' x2='800' y2='740'></line>
        <line x1='820' y1='720' x2='840' y2='740'></line>
        <line x1='840' y1='720' x2='860' y2='740'></line>
        <line x1='880' y1='720' x2='860' y2='740'></line>
        <line x1='880' y1='720' x2='900' y2='740'></line>
        <line x1='920' y1='720' x2='900' y2='740'></line>
        <line x1='920' y1='720' x2='940' y2='740'></line>
        <line x1='940' y1='720' x2='960' y2='740'></line>
        <line x1='960' y1='720' x2='980' y2='740'></line>
        <line x1='980' y1='720' x2='1000' y2='740'></line>
        <line x1='1020' y1='720' x2='1000' y2='740'></line>
        <line x1='1020' y1='720' x2='1040' y2='740'></line>
        <line x1='1060' y1='720' x2='1040' y2='740'></line>
        <line x1='1060' y1='720' x2='1080' y2='740'></line>
        <line x1='1100' y1='720' x2='1080' y2='740'></line>
        <line x1='1120' y1='720' x2='1100' y2='740'></line>
        <line x1='1120' y1='720' x2='1140' y2='740'></line>
        <line x1='1160' y1='720' x2='1140' y2='740'></line>
        <line x1='1180' y1='720' x2='1160' y2='740'></line>
        <line x1='1180' y1='720' x2='1200' y2='740'></line>
        <line x1='1220' y1='720' x2='1200' y2='740'></line>
        <line x1='1220' y1='720' x2='1240' y2='740'></line>
        <line x1='1260' y1='720' x2='1240' y2='740'></line>
        <line x1='1280' y1='720' x2='1260' y2='740'></line>
        <line x1='1300' y1='720' x2='1280' y2='740'></line>
        <line x1='1300' y1='720' x2='1320' y2='740'></line>
        <line x1='1320' y1='720' x2='1340' y2='740'></line>
        <line x1='1340' y1='720' x2='1360' y2='740'></line>
        <line x1='1360' y1='720' x2='1380' y2='740'></line>
        <line x1='1380' y1='720' x2='1400' y2='740'></line>
        <line x1='1400' y1='720' x2='1420' y2='740'></line>
        <line x1='1440' y1='720' x2='1420' y2='740'></line>
        <line x1='20' y1='740' x2='0' y2='760'></line>
        <line x1='20' y1='740' x2='40' y2='760'></line>
        <line x1='40' y1='740' x2='60' y2='760'></line>
        <line x1='60' y1='740' x2='80' y2='760'></line>
        <line x1='80' y1='740' x2='100' y2='760'></line>
        <line x1='100' y1='740' x2='120' y2='760'></line>
        <line x1='120' y1='740' x2='140' y2='760'></line>
        <line x1='140' y1='740' x2='160' y2='760'></line>
        <line x1='160' y1='740' x2='180' y2='760'></line>
        <line x1='180' y1='740' x2='200' y2='760'></line>
        <line x1='220' y1='740' x2='200' y2='760'></line>
        <line x1='240' y1='740' x2='220' y2='760'></line>
        <line x1='240' y1='740' x2='260' y2='760'></line>
        <line x1='280' y1='740' x2='260' y2='760'></line>
        <line x1='300' y1='740' x2='280' y2='760'></line>
        <line x1='320' y1='740' x2='300' y2='760'></line>
        <line x1='340' y1='740' x2='320' y2='760'></line>
        <line x1='340' y1='740' x2='360' y2='760'></line>
        <line x1='360' y1='740' x2='380' y2='760'></line>
        <line x1='380' y1='740' x2='400' y2='760'></line>
        <line x1='400' y1='740' x2='420' y2='760'></line>
        <line x1='440' y1='740' x2='420' y2='760'></line>
        <line x1='460' y1='740' x2='440' y2='760'></line>
        <line x1='460' y1='740' x2='480' y2='760'></line>
        <line x1='500' y1='740' x2='480' y2='760'></line>
        <line x1='500' y1='740' x2='520' y2='760'></line>
        <line x1='540' y1='740' x2='520' y2='760'></line>
        <line x1='540' y1='740' x2='560' y2='760'></line>
        <line x1='580' y1='740' x2='560' y2='760'></line>
        <line x1='600' y1='740' x2='580' y2='760'></line>
        <line x1='600' y1='740' x2='620' y2='760'></line>
        <line x1='620' y1='740' x2='640' y2='760'></line>
        <line x1='660' y1='740' x2='640' y2='760'></line>
        <line x1='680' y1='740' x2='660' y2='760'></line>
        <line x1='700' y1='740' x2='680' y2='760'></line>
        <line x1='700' y1='740' x2='720' y2='760'></line>
        <line x1='720' y1='740' x2='740' y2='760'></line>
        <line x1='760' y1='740' x2='740' y2='760'></line>
        <line x1='780' y1='740' x2='760' y2='760'></line>
        <line x1='780' y1='740' x2='800' y2='760'></line>
        <line x1='820' y1='740' x2='800' y2='760'></line>
        <line x1='840' y1='740' x2='820' y2='760'></line>
        <line x1='840' y1='740' x2='860' y2='760'></line>
        <line x1='880' y1='740' x2='860' y2='760'></line>
        <line x1='900' y1='740' x2='880' y2='760'></line>
        <line x1='900' y1='740' x2='920' y2='760'></line>
        <line x1='940' y1='740' x2='920' y2='760'></line>
        <line x1='960' y1='740' x2='940' y2='760'></line>
        <line x1='960' y1='740' x2='980' y2='760'></line>
        <line x1='980' y1='740' x2='1000' y2='760'></line>
        <line x1='1020' y1='740' x2='1000' y2='760'></line>
        <line x1='1040' y1='740' x2='1020' y2='760'></line>
        <line x1='1040' y1='740' x2='1060' y2='760'></line>
        <line x1='1060' y1='740' x2='1080' y2='760'></line>
        <line x1='1100' y1='740' x2='1080' y2='760'></line>
        <line x1='1120' y1='740' x2='1100' y2='760'></line>
        <line x1='1140' y1='740' x2='1120' y2='760'></line>
        <line x1='1160' y1='740' x2='1140' y2='760'></line>
        <line x1='1180' y1='740' x2='1160' y2='760'></line>
        <line x1='1180' y1='740' x2='1200' y2='760'></line>
        <line x1='1220' y1='740' x2='1200' y2='760'></line>
        <line x1='1220' y1='740' x2='1240' y2='760'></line>
        <line x1='1260' y1='740' x2='1240' y2='760'></line>
        <line x1='1280' y1='740' x2='1260' y2='760'></line>
        <line x1='1280' y1='740' x2='1300' y2='760'></line>
        <line x1='1300' y1='740' x2='1320' y2='760'></line>
        <line x1='1320' y1='740' x2='1340' y2='760'></line>
        <line x1='1340' y1='740' x2='1360' y2='760'></line>
        <line x1='1360' y1='740' x2='1380' y2='760'></line>
        <line x1='1400' y1='740' x2='1380' y2='760'></line>
        <line x1='1400' y1='740' x2='1420' y2='760'></line>
        <line x1='1420' y1='740' x2='1440' y2='760'></line>
        <line x1='0' y1='760' x2='20' y2='780'></line>
        <line x1='40' y1='760' x2='20' y2='780'></line>
        <line x1='40' y1='760' x2='60' y2='780'></line>
        <line x1='80' y1='760' x2='60' y2='780'></line>
        <line x1='100' y1='760' x2='80' y2='780'></line>
        <line x1='100' y1='760' x2='120' y2='780'></line>
        <line x1='120' y1='760' x2='140' y2='780'></line>
        <line x1='140' y1='760' x2='160' y2='780'></line>
        <line x1='180' y1='760' x2='160' y2='780'></line>
        <line x1='200' y1='760' x2='180' y2='780'></line>
        <line x1='220' y1='760' x2='200' y2='780'></line>
        <line x1='240' y1='760' x2='220' y2='780'></line>
        <line x1='240' y1='760' x2='260' y2='780'></line>
        <line x1='280' y1='760' x2='260' y2='780'></line>
        <line x1='280' y1='760' x2='300' y2='780'></line>
        <line x1='300' y1='760' x2='320' y2='780'></line>
        <line x1='340' y1='760' x2='320' y2='780'></line>
        <line x1='340' y1='760' x2='360' y2='780'></line>
        <line x1='380' y1='760' x2='360' y2='780'></line>
        <line x1='400' y1='760' x2='380' y2='780'></line>
        <line x1='420' y1='760' x2='400' y2='780'></line>
        <line x1='420' y1='760' x2='440' y2='780'></line>
        <line x1='440' y1='760' x2='460' y2='780'></line>
        <line x1='460' y1='760' x2='480' y2='780'></line>
        <line x1='480' y1='760' x2='500' y2='780'></line>
        <line x1='520' y1='760' x2='500' y2='780'></line>
        <line x1='520' y1='760' x2='540' y2='780'></line>
        <line x1='540' y1='760' x2='560' y2='780'></line>
        <line x1='560' y1='760' x2='580' y2='780'></line>
        <line x1='580' y1='760' x2='600' y2='780'></line>
        <line x1='600' y1='760' x2='620' y2='780'></line>
        <line x1='620' y1='760' x2='640' y2='780'></line>
        <line x1='660' y1='760' x2='640' y2='780'></line>
        <line x1='660' y1='760' x2='680' y2='780'></line>
        <line x1='680' y1='760' x2='700' y2='780'></line>
        <line x1='720' y1='760' x2='700' y2='780'></line>
        <line x1='720' y1='760' x2='740' y2='780'></line>
        <line x1='740' y1='760' x2='760' y2='780'></line>
        <line x1='760' y1='760' x2='780' y2='780'></line>
        <line x1='780' y1='760' x2='800' y2='780'></line>
        <line x1='820' y1='760' x2='800' y2='780'></line>
        <line x1='820' y1='760' x2='840' y2='780'></line>
        <line x1='860' y1='760' x2='840' y2='780'></line>
        <line x1='880' y1='760' x2='860' y2='780'></line>
        <line x1='880' y1='760' x2='900' y2='780'></line>
        <line x1='920' y1='760' x2='900' y2='780'></line>
        <line x1='920' y1='760' x2='940' y2='780'></line>
        <line x1='940' y1='760' x2='960' y2='780'></line>
        <line x1='960' y1='760' x2='980' y2='780'></line>
        <line x1='1000' y1='760' x2='980' y2='780'></line>
        <line x1='1020' y1='760' x2='1000' y2='780'></line>
        <line x1='1040' y1='760' x2='1020' y2='780'></line>
        <line x1='1060' y1='760' x2='1040' y2='780'></line>
        <line x1='1060' y1='760' x2='1080' y2='780'></line>
        <line x1='1100' y1='760' x2='1080' y2='780'></line>
        <line x1='1100' y1='760' x2='1120' y2='780'></line>
        <line x1='1120' y1='760' x2='1140' y2='780'></line>
        <line x1='1160' y1='760' x2='1140' y2='780'></line>
        <line x1='1160' y1='760' x2='1180' y2='780'></line>
        <line x1='1180' y1='760' x2='1200' y2='780'></line>
        <line x1='1220' y1='760' x2='1200' y2='780'></line>
        <line x1='1220' y1='760' x2='1240' y2='780'></line>
        <line x1='1240' y1='760' x2='1260' y2='780'></line>
        <line x1='1280' y1='760' x2='1260' y2='780'></line>
        <line x1='1300' y1='760' x2='1280' y2='780'></line>
        <line x1='1320' y1='760' x2='1300' y2='780'></line>
        <line x1='1320' y1='760' x2='1340' y2='780'></line>
        <line x1='1360' y1='760' x2='1340' y2='780'></line>
        <line x1='1360' y1='760' x2='1380' y2='780'></line>
        <line x1='1400' y1='760' x2='1380' y2='780'></line>
        <line x1='1420' y1='760' x2='1400' y2='780'></line>
        <line x1='1440' y1='760' x2='1420' y2='780'></line>
        <line x1='20' y1='780' x2='0' y2='800'></line>
        <line x1='40' y1='780' x2='20' y2='800'></line>
        <line x1='40' y1='780' x2='60' y2='800'></line>
        <line x1='60' y1='780' x2='80' y2='800'></line>
        <line x1='100' y1='780' x2='80' y2='800'></line>
        <line x1='100' y1='780' x2='120' y2='800'></line>
        <line x1='120' y1='780' x2='140' y2='800'></line>
        <line x1='140' y1='780' x2='160' y2='800'></line>
        <line x1='160' y1='780' x2='180' y2='800'></line>
        <line x1='200' y1='780' x2='180' y2='800'></line>
        <line x1='220' y1='780' x2='200' y2='800'></line>
        <line x1='240' y1='780' x2='220' y2='800'></line>
        <line x1='240' y1='780' x2='260' y2='800'></line>
        <line x1='280' y1='780' x2='260' y2='800'></line>
        <line x1='300' y1='780' x2='280' y2='800'></line>
        <line x1='320' y1='780' x2='300' y2='800'></line>
        <line x1='320' y1='780' x2='340' y2='800'></line>
        <line x1='360' y1='780' x2='340' y2='800'></line>
        <line x1='380' y1='780' x2='360' y2='800'></line>
        <line x1='400' y1='780' x2='380' y2='800'></line>
        <line x1='400' y1='780' x2='420' y2='800'></line>
        <line x1='420' y1='780' x2='440' y2='800'></line>
        <line x1='440' y1='780' x2='460' y2='800'></line>
        <line x1='480' y1='780' x2='460' y2='800'></line>
        <line x1='480' y1='780' x2='500' y2='800'></line>
        <line x1='520' y1='780' x2='500' y2='800'></line>
        <line x1='540' y1='780' x2='520' y2='800'></line>
        <line x1='540' y1='780' x2='560' y2='800'></line>
        <line x1='560' y1='780' x2='580' y2='800'></line>
        <line x1='580' y1='780' x2='600' y2='800'></line>
        <line x1='600' y1='780' x2='620' y2='800'></line>
        <line x1='640' y1='780' x2='620' y2='800'></line>
        <line x1='640' y1='780' x2='660' y2='800'></line>
        <line x1='680' y1='780' x2='660' y2='800'></line>
        <line x1='680' y1='780' x2='700' y2='800'></line>
        <line x1='720' y1='780' x2='700' y2='800'></line>
        <line x1='740' y1='780' x2='720' y2='800'></line>
        <line x1='760' y1='780' x2='740' y2='800'></line>
        <line x1='780' y1='780' x2='760' y2='800'></line>
        <line x1='780' y1='780' x2='800' y2='800'></line>
        <line x1='800' y1='780' x2='820' y2='800'></line>
        <line x1='840' y1='780' x2='820' y2='800'></line>
        <line x1='860' y1='780' x2='840' y2='800'></line>
        <line x1='880' y1='780' x2='860' y2='800'></line>
        <line x1='900' y1='780' x2='880' y2='800'></line>
        <line x1='900' y1='780' x2='920' y2='800'></line>
        <line x1='920' y1='780' x2='940' y2='800'></line>
        <line x1='960' y1='780' x2='940' y2='800'></line>
        <line x1='960' y1='780' x2='980' y2='800'></line>
        <line x1='1000' y1='780' x2='980' y2='800'></line>
        <line x1='1000' y1='780' x2='1020' y2='800'></line>
        <line x1='1020' y1='780' x2='1040' y2='800'></line>
        <line x1='1060' y1='780' x2='1040' y2='800'></line>
        <line x1='1080' y1='780' x2='1060' y2='800'></line>
        <line x1='1080' y1='780' x2='1100' y2='800'></line>
        <line x1='1120' y1='780' x2='1100' y2='800'></line>
        <line x1='1120' y1='780' x2='1140' y2='800'></line>
        <line x1='1160' y1='780' x2='1140' y2='800'></line>
        <line x1='1180' y1='780' x2='1160' y2='800'></line>
        <line x1='1180' y1='780' x2='1200' y2='800'></line>
        <line x1='1200' y1='780' x2='1220' y2='800'></line>
        <line x1='1220' y1='780' x2='1240' y2='800'></line>
        <line x1='1240' y1='780' x2='1260' y2='800'></line>
        <line x1='1260' y1='780' x2='1280' y2='800'></line>
        <line x1='1300' y1='780' x2='1280' y2='800'></line>
        <line x1='1300' y1='780' x2='1320' y2='800'></line>
        <line x1='1340' y1='780' x2='1320' y2='800'></line>
        <line x1='1340' y1='780' x2='1360' y2='800'></line>
        <line x1='1380' y1='780' x2='1360' y2='800'></line>
        <line x1='1380' y1='780' x2='1400' y2='800'></line>
        <line x1='1400' y1='780' x2='1420' y2='800'></line>
        <line x1='1440' y1='780' x2='1420' y2='800'></line>
        <line x1='0' y1='800' x2='20' y2='820'></line>
        <line x1='20' y1='800' x2='40' y2='820'></line>
        <line x1='60' y1='800' x2='40' y2='820'></line>
        <line x1='80' y1='800' x2='60' y2='820'></line>
        <line x1='80' y1='800' x2='100' y2='820'></line>
        <line x1='120' y1='800' x2='100' y2='820'></line>
        <line x1='120' y1='800' x2='140' y2='820'></line>
        <line x1='160' y1='800' x2='140' y2='820'></line>
        <line x1='180' y1='800' x2='160' y2='820'></line>
        <line x1='180' y1='800' x2='200' y2='820'></line>
        <line x1='220' y1='800' x2='200' y2='820'></line>
        <line x1='220' y1='800' x2='240' y2='820'></line>
        <line x1='260' y1='800' x2='240' y2='820'></line>
        <line x1='260' y1='800' x2='280' y2='820'></line>
        <line x1='280' y1='800' x2='300' y2='820'></line>
        <line x1='320' y1='800' x2='300' y2='820'></line>
        <line x1='340' y1='800' x2='320' y2='820'></line>
        <line x1='360' y1='800' x2='340' y2='820'></line>
        <line x1='360' y1='800' x2='380' y2='820'></line>
        <line x1='400' y1='800' x2='380' y2='820'></line>
        <line x1='420' y1='800' x2='400' y2='820'></line>
        <line x1='440' y1='800' x2='420' y2='820'></line>
        <line x1='440' y1='800' x2='460' y2='820'></line>
        <line x1='460' y1='800' x2='480' y2='820'></line>
        <line x1='500' y1='800' x2='480' y2='820'></line>
        <line x1='520' y1='800' x2='500' y2='820'></line>
        <line x1='540' y1='800' x2='520' y2='820'></line>
        <line x1='560' y1='800' x2='540' y2='820'></line>
        <line x1='580' y1='800' x2='560' y2='820'></line>
        <line x1='580' y1='800' x2='600' y2='820'></line>
        <line x1='600' y1='800' x2='620' y2='820'></line>
        <line x1='620' y1='800' x2='640' y2='820'></line>
        <line x1='640' y1='800' x2='660' y2='820'></line>
        <line x1='680' y1='800' x2='660' y2='820'></line>
        <line x1='680' y1='800' x2='700' y2='820'></line>
        <line x1='700' y1='800' x2='720' y2='820'></line>
        <line x1='740' y1='800' x2='720' y2='820'></line>
        <line x1='760' y1='800' x2='740' y2='820'></line>
        <line x1='760' y1='800' x2='780' y2='820'></line>
        <line x1='780' y1='800' x2='800' y2='820'></line>
        <line x1='820' y1='800' x2='800' y2='820'></line>
        <line x1='840' y1='800' x2='820' y2='820'></line>
        <line x1='860' y1='800' x2='840' y2='820'></line>
        <line x1='880' y1='800' x2='860' y2='820'></line>
        <line x1='880' y1='800' x2='900' y2='820'></line>
        <line x1='920' y1='800' x2='900' y2='820'></line>
        <line x1='920' y1='800' x2='940' y2='820'></line>
        <line x1='940' y1='800' x2='960' y2='820'></line>
        <line x1='980' y1='800' x2='960' y2='820'></line>
        <line x1='1000' y1='800' x2='980' y2='820'></line>
        <line x1='1000' y1='800' x2='1020' y2='820'></line>
        <line x1='1020' y1='800' x2='1040' y2='820'></line>
        <line x1='1040' y1='800' x2='1060' y2='820'></line>
        <line x1='1080' y1='800' x2='1060' y2='820'></line>
        <line x1='1100' y1='800' x2='1080' y2='820'></line>
        <line x1='1120' y1='800' x2='1100' y2='820'></line>
        <line x1='1120' y1='800' x2='1140' y2='820'></line>
        <line x1='1140' y1='800' x2='1160' y2='820'></line>
        <line x1='1180' y1='800' x2='1160' y2='820'></line>
        <line x1='1200' y1='800' x2='1180' y2='820'></line>
        <line x1='1220' y1='800' x2='1200' y2='820'></line>
        <line x1='1240' y1='800' x2='1220' y2='820'></line>
        <line x1='1240' y1='800' x2='1260' y2='820'></line>
        <line x1='1260' y1='800' x2='1280' y2='820'></line>
        <line x1='1300' y1='800' x2='1280' y2='820'></line>
        <line x1='1320' y1='800' x2='1300' y2='820'></line>
        <line x1='1320' y1='800' x2='1340' y2='820'></line>
        <line x1='1360' y1='800' x2='1340' y2='820'></line>
        <line x1='1380' y1='800' x2='1360' y2='820'></line>
        <line x1='1380' y1='800' x2='1400' y2='820'></line>
        <line x1='1400' y1='800' x2='1420' y2='820'></line>
        <line x1='1440' y1='800' x2='1420' y2='820'></line>
      </g>
    </svg>`,({color0:n="#000000",color1:x="#00ff00"})=>`<svg
      xmlns='http://www.w3.org/2000/svg'
      version='1.1'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='0 0 800 800'
      opacity='1'
      width='800'
      height='800'
    >
      <g strokeWidth='1' stroke='${n}' fill='none'>
        <circle
          r='3.2894736842105265'
          cx='0'
          cy='0'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='61.53846153846154'
          cy='0'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='123.07692307692308'
          cy='0'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='184.6153846153846'
          cy='0'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='246.15384615384616'
          cy='0'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='307.6923076923077'
          cy='0'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='369.2307692307692'
          cy='0'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='430.7692307692308'
          cy='0'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='492.3076923076923'
          cy='0'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='553.8461538461538'
          cy='0'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='615.3846153846154'
          cy='0'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='676.9230769230769'
          cy='0'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='738.4615384615385'
          cy='0'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='800'
          cy='0'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='0'
          cy='57.142857142857146'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='61.53846153846154'
          cy='57.142857142857146'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='123.07692307692308'
          cy='57.142857142857146'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='184.6153846153846'
          cy='57.142857142857146'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='246.15384615384616'
          cy='57.142857142857146'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='307.6923076923077'
          cy='57.142857142857146'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='369.2307692307692'
          cy='57.142857142857146'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='430.7692307692308'
          cy='57.142857142857146'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='492.3076923076923'
          cy='57.142857142857146'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='553.8461538461538'
          cy='57.142857142857146'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='615.3846153846154'
          cy='57.142857142857146'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='676.9230769230769'
          cy='57.142857142857146'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='738.4615384615385'
          cy='57.142857142857146'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='800'
          cy='57.142857142857146'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='0'
          cy='114.28571428571429'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='61.53846153846154'
          cy='114.28571428571429'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='123.07692307692308'
          cy='114.28571428571429'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='184.6153846153846'
          cy='114.28571428571429'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='246.15384615384616'
          cy='114.28571428571429'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='307.6923076923077'
          cy='114.28571428571429'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='369.2307692307692'
          cy='114.28571428571429'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='430.7692307692308'
          cy='114.28571428571429'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='492.3076923076923'
          cy='114.28571428571429'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='553.8461538461538'
          cy='114.28571428571429'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='615.3846153846154'
          cy='114.28571428571429'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='676.9230769230769'
          cy='114.28571428571429'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='738.4615384615385'
          cy='114.28571428571429'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='800'
          cy='114.28571428571429'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='0'
          cy='171.42857142857144'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='61.53846153846154'
          cy='171.42857142857144'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='123.07692307692308'
          cy='171.42857142857144'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='184.6153846153846'
          cy='171.42857142857144'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='246.15384615384616'
          cy='171.42857142857144'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='307.6923076923077'
          cy='171.42857142857144'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='369.2307692307692'
          cy='171.42857142857144'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='430.7692307692308'
          cy='171.42857142857144'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='492.3076923076923'
          cy='171.42857142857144'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='553.8461538461538'
          cy='171.42857142857144'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='615.3846153846154'
          cy='171.42857142857144'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='676.9230769230769'
          cy='171.42857142857144'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='738.4615384615385'
          cy='171.42857142857144'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='800'
          cy='171.42857142857144'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='0'
          cy='228.57142857142858'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='61.53846153846154'
          cy='228.57142857142858'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='123.07692307692308'
          cy='228.57142857142858'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='184.6153846153846'
          cy='228.57142857142858'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='246.15384615384616'
          cy='228.57142857142858'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='307.6923076923077'
          cy='228.57142857142858'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='369.2307692307692'
          cy='228.57142857142858'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='430.7692307692308'
          cy='228.57142857142858'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='492.3076923076923'
          cy='228.57142857142858'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='553.8461538461538'
          cy='228.57142857142858'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='615.3846153846154'
          cy='228.57142857142858'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='676.9230769230769'
          cy='228.57142857142858'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='738.4615384615385'
          cy='228.57142857142858'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='800'
          cy='228.57142857142858'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='0'
          cy='285.7142857142857'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='61.53846153846154'
          cy='285.7142857142857'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='123.07692307692308'
          cy='285.7142857142857'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='184.6153846153846'
          cy='285.7142857142857'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='246.15384615384616'
          cy='285.7142857142857'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='307.6923076923077'
          cy='285.7142857142857'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='369.2307692307692'
          cy='285.7142857142857'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='430.7692307692308'
          cy='285.7142857142857'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='492.3076923076923'
          cy='285.7142857142857'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='553.8461538461538'
          cy='285.7142857142857'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='615.3846153846154'
          cy='285.7142857142857'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='676.9230769230769'
          cy='285.7142857142857'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='738.4615384615385'
          cy='285.7142857142857'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='800'
          cy='285.7142857142857'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='0'
          cy='342.8571428571429'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='61.53846153846154'
          cy='342.8571428571429'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='123.07692307692308'
          cy='342.8571428571429'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='184.6153846153846'
          cy='342.8571428571429'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='246.15384615384616'
          cy='342.8571428571429'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='307.6923076923077'
          cy='342.8571428571429'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='369.2307692307692'
          cy='342.8571428571429'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='430.7692307692308'
          cy='342.8571428571429'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='492.3076923076923'
          cy='342.8571428571429'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='553.8461538461538'
          cy='342.8571428571429'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='615.3846153846154'
          cy='342.8571428571429'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='676.9230769230769'
          cy='342.8571428571429'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='738.4615384615385'
          cy='342.8571428571429'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='800'
          cy='342.8571428571429'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='0'
          cy='400.00000000000006'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='61.53846153846154'
          cy='400.00000000000006'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='123.07692307692308'
          cy='400.00000000000006'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='184.6153846153846'
          cy='400.00000000000006'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='246.15384615384616'
          cy='400.00000000000006'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='307.6923076923077'
          cy='400.00000000000006'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='369.2307692307692'
          cy='400.00000000000006'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='430.7692307692308'
          cy='400.00000000000006'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='492.3076923076923'
          cy='400.00000000000006'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='553.8461538461538'
          cy='400.00000000000006'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='615.3846153846154'
          cy='400.00000000000006'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='676.9230769230769'
          cy='400.00000000000006'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='738.4615384615385'
          cy='400.00000000000006'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='800'
          cy='400.00000000000006'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='0'
          cy='457.1428571428572'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='61.53846153846154'
          cy='457.1428571428572'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='123.07692307692308'
          cy='457.1428571428572'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='184.6153846153846'
          cy='457.1428571428572'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='246.15384615384616'
          cy='457.1428571428572'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='307.6923076923077'
          cy='457.1428571428572'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='369.2307692307692'
          cy='457.1428571428572'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='430.7692307692308'
          cy='457.1428571428572'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='492.3076923076923'
          cy='457.1428571428572'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='553.8461538461538'
          cy='457.1428571428572'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='615.3846153846154'
          cy='457.1428571428572'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='676.9230769230769'
          cy='457.1428571428572'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='738.4615384615385'
          cy='457.1428571428572'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='800'
          cy='457.1428571428572'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='0'
          cy='514.2857142857143'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='61.53846153846154'
          cy='514.2857142857143'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='123.07692307692308'
          cy='514.2857142857143'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='184.6153846153846'
          cy='514.2857142857143'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='246.15384615384616'
          cy='514.2857142857143'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='307.6923076923077'
          cy='514.2857142857143'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='369.2307692307692'
          cy='514.2857142857143'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='430.7692307692308'
          cy='514.2857142857143'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='492.3076923076923'
          cy='514.2857142857143'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='553.8461538461538'
          cy='514.2857142857143'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='615.3846153846154'
          cy='514.2857142857143'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='676.9230769230769'
          cy='514.2857142857143'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='738.4615384615385'
          cy='514.2857142857143'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='800'
          cy='514.2857142857143'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='0'
          cy='571.4285714285714'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='61.53846153846154'
          cy='571.4285714285714'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='123.07692307692308'
          cy='571.4285714285714'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='184.6153846153846'
          cy='571.4285714285714'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='246.15384615384616'
          cy='571.4285714285714'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='307.6923076923077'
          cy='571.4285714285714'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='369.2307692307692'
          cy='571.4285714285714'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='430.7692307692308'
          cy='571.4285714285714'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='492.3076923076923'
          cy='571.4285714285714'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='553.8461538461538'
          cy='571.4285714285714'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='615.3846153846154'
          cy='571.4285714285714'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='676.9230769230769'
          cy='571.4285714285714'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='738.4615384615385'
          cy='571.4285714285714'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='800'
          cy='571.4285714285714'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='0'
          cy='628.5714285714286'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='61.53846153846154'
          cy='628.5714285714286'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='123.07692307692308'
          cy='628.5714285714286'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='184.6153846153846'
          cy='628.5714285714286'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='246.15384615384616'
          cy='628.5714285714286'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='307.6923076923077'
          cy='628.5714285714286'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='369.2307692307692'
          cy='628.5714285714286'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='430.7692307692308'
          cy='628.5714285714286'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='492.3076923076923'
          cy='628.5714285714286'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='553.8461538461538'
          cy='628.5714285714286'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='615.3846153846154'
          cy='628.5714285714286'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='676.9230769230769'
          cy='628.5714285714286'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='738.4615384615385'
          cy='628.5714285714286'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='800'
          cy='628.5714285714286'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='0'
          cy='685.7142857142857'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='61.53846153846154'
          cy='685.7142857142857'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='123.07692307692308'
          cy='685.7142857142857'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='184.6153846153846'
          cy='685.7142857142857'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='246.15384615384616'
          cy='685.7142857142857'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='307.6923076923077'
          cy='685.7142857142857'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='369.2307692307692'
          cy='685.7142857142857'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='430.7692307692308'
          cy='685.7142857142857'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='492.3076923076923'
          cy='685.7142857142857'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='553.8461538461538'
          cy='685.7142857142857'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='615.3846153846154'
          cy='685.7142857142857'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='676.9230769230769'
          cy='685.7142857142857'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='738.4615384615385'
          cy='685.7142857142857'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='800'
          cy='685.7142857142857'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='0'
          cy='742.8571428571428'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='61.53846153846154'
          cy='742.8571428571428'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='123.07692307692308'
          cy='742.8571428571428'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='184.6153846153846'
          cy='742.8571428571428'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='246.15384615384616'
          cy='742.8571428571428'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='307.6923076923077'
          cy='742.8571428571428'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='369.2307692307692'
          cy='742.8571428571428'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='430.7692307692308'
          cy='742.8571428571428'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='492.3076923076923'
          cy='742.8571428571428'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='553.8461538461538'
          cy='742.8571428571428'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='615.3846153846154'
          cy='742.8571428571428'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='676.9230769230769'
          cy='742.8571428571428'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='738.4615384615385'
          cy='742.8571428571428'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='800'
          cy='742.8571428571428'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='0'
          cy='799.9999999999999'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='61.53846153846154'
          cy='799.9999999999999'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='123.07692307692308'
          cy='799.9999999999999'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='184.6153846153846'
          cy='799.9999999999999'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='246.15384615384616'
          cy='799.9999999999999'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='307.6923076923077'
          cy='799.9999999999999'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='369.2307692307692'
          cy='799.9999999999999'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='430.7692307692308'
          cy='799.9999999999999'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='492.3076923076923'
          cy='799.9999999999999'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='553.8461538461538'
          cy='799.9999999999999'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='615.3846153846154'
          cy='799.9999999999999'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='676.9230769230769'
          cy='799.9999999999999'
          fill='${x}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='738.4615384615385'
          cy='799.9999999999999'
          fill='${n}'
          stroke='none'
        ></circle>
        <circle
          r='3.2894736842105265'
          cx='800'
          cy='799.9999999999999'
          fill='${x}'
          stroke='none'
        ></circle>
      </g>
    </svg>`,({color0:n="#000000"})=>`<svg
  xmlns='http://www.w3.org/2000/svg'
  version='1.1'
  xmlnsXlink='http://www.w3.org/1999/xlink'
  viewBox='0 0 800 800'
  opacity='1'
  width='800'
  height='800'
>
  <g stroke-width='1' stroke='${n}' fill='none'>
    <circle
      r='3.2894736842105265'
      cx='0'
      cy='0'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='47.05882352941177'
      cy='0'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='94.11764705882354'
      cy='0'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='141.1764705882353'
      cy='0'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='188.23529411764707'
      cy='0'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='235.29411764705884'
      cy='0'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='282.3529411764706'
      cy='0'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='329.4117647058824'
      cy='0'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='376.47058823529414'
      cy='0'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='423.5294117647059'
      cy='0'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='470.5882352941177'
      cy='0'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='517.6470588235295'
      cy='0'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='564.7058823529412'
      cy='0'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='611.7647058823529'
      cy='0'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='658.8235294117646'
      cy='0'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='705.8823529411764'
      cy='0'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='752.9411764705881'
      cy='0'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='799.9999999999998'
      cy='0'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='0'
      cy='44.44444444444444'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='47.05882352941177'
      cy='44.44444444444444'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='94.11764705882354'
      cy='44.44444444444444'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='141.1764705882353'
      cy='44.44444444444444'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='188.23529411764707'
      cy='44.44444444444444'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='235.29411764705884'
      cy='44.44444444444444'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='282.3529411764706'
      cy='44.44444444444444'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='329.4117647058824'
      cy='44.44444444444444'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='376.47058823529414'
      cy='44.44444444444444'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='423.5294117647059'
      cy='44.44444444444444'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='470.5882352941177'
      cy='44.44444444444444'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='517.6470588235295'
      cy='44.44444444444444'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='564.7058823529412'
      cy='44.44444444444444'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='611.7647058823529'
      cy='44.44444444444444'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='658.8235294117646'
      cy='44.44444444444444'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='705.8823529411764'
      cy='44.44444444444444'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='752.9411764705881'
      cy='44.44444444444444'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='799.9999999999998'
      cy='44.44444444444444'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='0'
      cy='88.88888888888889'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='47.05882352941177'
      cy='88.88888888888889'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='94.11764705882354'
      cy='88.88888888888889'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='141.1764705882353'
      cy='88.88888888888889'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='188.23529411764707'
      cy='88.88888888888889'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='235.29411764705884'
      cy='88.88888888888889'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='282.3529411764706'
      cy='88.88888888888889'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='329.4117647058824'
      cy='88.88888888888889'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='376.47058823529414'
      cy='88.88888888888889'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='423.5294117647059'
      cy='88.88888888888889'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='470.5882352941177'
      cy='88.88888888888889'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='517.6470588235295'
      cy='88.88888888888889'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='564.7058823529412'
      cy='88.88888888888889'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='611.7647058823529'
      cy='88.88888888888889'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='658.8235294117646'
      cy='88.88888888888889'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='705.8823529411764'
      cy='88.88888888888889'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='752.9411764705881'
      cy='88.88888888888889'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='799.9999999999998'
      cy='88.88888888888889'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='0'
      cy='133.33333333333331'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='47.05882352941177'
      cy='133.33333333333331'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='94.11764705882354'
      cy='133.33333333333331'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='141.1764705882353'
      cy='133.33333333333331'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='188.23529411764707'
      cy='133.33333333333331'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='235.29411764705884'
      cy='133.33333333333331'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='282.3529411764706'
      cy='133.33333333333331'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='329.4117647058824'
      cy='133.33333333333331'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='376.47058823529414'
      cy='133.33333333333331'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='423.5294117647059'
      cy='133.33333333333331'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='470.5882352941177'
      cy='133.33333333333331'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='517.6470588235295'
      cy='133.33333333333331'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='564.7058823529412'
      cy='133.33333333333331'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='611.7647058823529'
      cy='133.33333333333331'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='658.8235294117646'
      cy='133.33333333333331'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='705.8823529411764'
      cy='133.33333333333331'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='752.9411764705881'
      cy='133.33333333333331'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='799.9999999999998'
      cy='133.33333333333331'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='0'
      cy='177.77777777777777'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='47.05882352941177'
      cy='177.77777777777777'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='94.11764705882354'
      cy='177.77777777777777'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='141.1764705882353'
      cy='177.77777777777777'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='188.23529411764707'
      cy='177.77777777777777'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='235.29411764705884'
      cy='177.77777777777777'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='282.3529411764706'
      cy='177.77777777777777'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='329.4117647058824'
      cy='177.77777777777777'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='376.47058823529414'
      cy='177.77777777777777'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='423.5294117647059'
      cy='177.77777777777777'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='470.5882352941177'
      cy='177.77777777777777'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='517.6470588235295'
      cy='177.77777777777777'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='564.7058823529412'
      cy='177.77777777777777'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='611.7647058823529'
      cy='177.77777777777777'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='658.8235294117646'
      cy='177.77777777777777'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='705.8823529411764'
      cy='177.77777777777777'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='752.9411764705881'
      cy='177.77777777777777'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='799.9999999999998'
      cy='177.77777777777777'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='0'
      cy='222.22222222222223'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='47.05882352941177'
      cy='222.22222222222223'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='94.11764705882354'
      cy='222.22222222222223'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='141.1764705882353'
      cy='222.22222222222223'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='188.23529411764707'
      cy='222.22222222222223'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='235.29411764705884'
      cy='222.22222222222223'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='282.3529411764706'
      cy='222.22222222222223'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='329.4117647058824'
      cy='222.22222222222223'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='376.47058823529414'
      cy='222.22222222222223'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='423.5294117647059'
      cy='222.22222222222223'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='470.5882352941177'
      cy='222.22222222222223'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='517.6470588235295'
      cy='222.22222222222223'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='564.7058823529412'
      cy='222.22222222222223'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='611.7647058823529'
      cy='222.22222222222223'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='658.8235294117646'
      cy='222.22222222222223'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='705.8823529411764'
      cy='222.22222222222223'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='752.9411764705881'
      cy='222.22222222222223'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='799.9999999999998'
      cy='222.22222222222223'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='0'
      cy='266.6666666666667'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='47.05882352941177'
      cy='266.6666666666667'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='94.11764705882354'
      cy='266.6666666666667'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='141.1764705882353'
      cy='266.6666666666667'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='188.23529411764707'
      cy='266.6666666666667'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='235.29411764705884'
      cy='266.6666666666667'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='282.3529411764706'
      cy='266.6666666666667'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='329.4117647058824'
      cy='266.6666666666667'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='376.47058823529414'
      cy='266.6666666666667'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='423.5294117647059'
      cy='266.6666666666667'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='470.5882352941177'
      cy='266.6666666666667'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='517.6470588235295'
      cy='266.6666666666667'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='564.7058823529412'
      cy='266.6666666666667'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='611.7647058823529'
      cy='266.6666666666667'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='658.8235294117646'
      cy='266.6666666666667'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='705.8823529411764'
      cy='266.6666666666667'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='752.9411764705881'
      cy='266.6666666666667'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='799.9999999999998'
      cy='266.6666666666667'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='0'
      cy='311.11111111111114'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='47.05882352941177'
      cy='311.11111111111114'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='94.11764705882354'
      cy='311.11111111111114'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='141.1764705882353'
      cy='311.11111111111114'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='188.23529411764707'
      cy='311.11111111111114'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='235.29411764705884'
      cy='311.11111111111114'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='282.3529411764706'
      cy='311.11111111111114'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='329.4117647058824'
      cy='311.11111111111114'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='376.47058823529414'
      cy='311.11111111111114'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='423.5294117647059'
      cy='311.11111111111114'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='470.5882352941177'
      cy='311.11111111111114'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='517.6470588235295'
      cy='311.11111111111114'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='564.7058823529412'
      cy='311.11111111111114'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='611.7647058823529'
      cy='311.11111111111114'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='658.8235294117646'
      cy='311.11111111111114'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='705.8823529411764'
      cy='311.11111111111114'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='752.9411764705881'
      cy='311.11111111111114'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='799.9999999999998'
      cy='311.11111111111114'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='0'
      cy='355.5555555555556'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='47.05882352941177'
      cy='355.5555555555556'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='94.11764705882354'
      cy='355.5555555555556'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='141.1764705882353'
      cy='355.5555555555556'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='188.23529411764707'
      cy='355.5555555555556'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='235.29411764705884'
      cy='355.5555555555556'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='282.3529411764706'
      cy='355.5555555555556'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='329.4117647058824'
      cy='355.5555555555556'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='376.47058823529414'
      cy='355.5555555555556'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='423.5294117647059'
      cy='355.5555555555556'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='470.5882352941177'
      cy='355.5555555555556'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='517.6470588235295'
      cy='355.5555555555556'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='564.7058823529412'
      cy='355.5555555555556'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='611.7647058823529'
      cy='355.5555555555556'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='658.8235294117646'
      cy='355.5555555555556'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='705.8823529411764'
      cy='355.5555555555556'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='752.9411764705881'
      cy='355.5555555555556'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='799.9999999999998'
      cy='355.5555555555556'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='0'
      cy='400.00000000000006'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='47.05882352941177'
      cy='400.00000000000006'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='94.11764705882354'
      cy='400.00000000000006'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='141.1764705882353'
      cy='400.00000000000006'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='188.23529411764707'
      cy='400.00000000000006'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='235.29411764705884'
      cy='400.00000000000006'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='282.3529411764706'
      cy='400.00000000000006'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='329.4117647058824'
      cy='400.00000000000006'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='376.47058823529414'
      cy='400.00000000000006'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='423.5294117647059'
      cy='400.00000000000006'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='470.5882352941177'
      cy='400.00000000000006'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='517.6470588235295'
      cy='400.00000000000006'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='564.7058823529412'
      cy='400.00000000000006'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='611.7647058823529'
      cy='400.00000000000006'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='658.8235294117646'
      cy='400.00000000000006'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='705.8823529411764'
      cy='400.00000000000006'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='752.9411764705881'
      cy='400.00000000000006'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='799.9999999999998'
      cy='400.00000000000006'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='0'
      cy='444.4444444444445'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='47.05882352941177'
      cy='444.4444444444445'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='94.11764705882354'
      cy='444.4444444444445'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='141.1764705882353'
      cy='444.4444444444445'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='188.23529411764707'
      cy='444.4444444444445'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='235.29411764705884'
      cy='444.4444444444445'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='282.3529411764706'
      cy='444.4444444444445'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='329.4117647058824'
      cy='444.4444444444445'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='376.47058823529414'
      cy='444.4444444444445'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='423.5294117647059'
      cy='444.4444444444445'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='470.5882352941177'
      cy='444.4444444444445'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='517.6470588235295'
      cy='444.4444444444445'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='564.7058823529412'
      cy='444.4444444444445'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='611.7647058823529'
      cy='444.4444444444445'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='658.8235294117646'
      cy='444.4444444444445'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='705.8823529411764'
      cy='444.4444444444445'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='752.9411764705881'
      cy='444.4444444444445'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='799.9999999999998'
      cy='444.4444444444445'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='0'
      cy='488.88888888888897'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='47.05882352941177'
      cy='488.88888888888897'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='94.11764705882354'
      cy='488.88888888888897'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='141.1764705882353'
      cy='488.88888888888897'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='188.23529411764707'
      cy='488.88888888888897'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='235.29411764705884'
      cy='488.88888888888897'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='282.3529411764706'
      cy='488.88888888888897'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='329.4117647058824'
      cy='488.88888888888897'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='376.47058823529414'
      cy='488.88888888888897'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='423.5294117647059'
      cy='488.88888888888897'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='470.5882352941177'
      cy='488.88888888888897'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='517.6470588235295'
      cy='488.88888888888897'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='564.7058823529412'
      cy='488.88888888888897'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='611.7647058823529'
      cy='488.88888888888897'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='658.8235294117646'
      cy='488.88888888888897'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='705.8823529411764'
      cy='488.88888888888897'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='752.9411764705881'
      cy='488.88888888888897'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='799.9999999999998'
      cy='488.88888888888897'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='0'
      cy='533.3333333333334'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='47.05882352941177'
      cy='533.3333333333334'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='94.11764705882354'
      cy='533.3333333333334'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='141.1764705882353'
      cy='533.3333333333334'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='188.23529411764707'
      cy='533.3333333333334'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='235.29411764705884'
      cy='533.3333333333334'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='282.3529411764706'
      cy='533.3333333333334'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='329.4117647058824'
      cy='533.3333333333334'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='376.47058823529414'
      cy='533.3333333333334'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='423.5294117647059'
      cy='533.3333333333334'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='470.5882352941177'
      cy='533.3333333333334'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='517.6470588235295'
      cy='533.3333333333334'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='564.7058823529412'
      cy='533.3333333333334'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='611.7647058823529'
      cy='533.3333333333334'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='658.8235294117646'
      cy='533.3333333333334'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='705.8823529411764'
      cy='533.3333333333334'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='752.9411764705881'
      cy='533.3333333333334'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='799.9999999999998'
      cy='533.3333333333334'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='0'
      cy='577.7777777777778'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='47.05882352941177'
      cy='577.7777777777778'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='94.11764705882354'
      cy='577.7777777777778'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='141.1764705882353'
      cy='577.7777777777778'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='188.23529411764707'
      cy='577.7777777777778'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='235.29411764705884'
      cy='577.7777777777778'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='282.3529411764706'
      cy='577.7777777777778'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='329.4117647058824'
      cy='577.7777777777778'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='376.47058823529414'
      cy='577.7777777777778'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='423.5294117647059'
      cy='577.7777777777778'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='470.5882352941177'
      cy='577.7777777777778'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='517.6470588235295'
      cy='577.7777777777778'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='564.7058823529412'
      cy='577.7777777777778'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='611.7647058823529'
      cy='577.7777777777778'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='658.8235294117646'
      cy='577.7777777777778'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='705.8823529411764'
      cy='577.7777777777778'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='752.9411764705881'
      cy='577.7777777777778'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='799.9999999999998'
      cy='577.7777777777778'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='0'
      cy='622.2222222222223'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='47.05882352941177'
      cy='622.2222222222223'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='94.11764705882354'
      cy='622.2222222222223'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='141.1764705882353'
      cy='622.2222222222223'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='188.23529411764707'
      cy='622.2222222222223'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='235.29411764705884'
      cy='622.2222222222223'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='282.3529411764706'
      cy='622.2222222222223'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='329.4117647058824'
      cy='622.2222222222223'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='376.47058823529414'
      cy='622.2222222222223'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='423.5294117647059'
      cy='622.2222222222223'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='470.5882352941177'
      cy='622.2222222222223'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='517.6470588235295'
      cy='622.2222222222223'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='564.7058823529412'
      cy='622.2222222222223'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='611.7647058823529'
      cy='622.2222222222223'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='658.8235294117646'
      cy='622.2222222222223'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='705.8823529411764'
      cy='622.2222222222223'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='752.9411764705881'
      cy='622.2222222222223'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='799.9999999999998'
      cy='622.2222222222223'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='0'
      cy='666.6666666666667'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='47.05882352941177'
      cy='666.6666666666667'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='94.11764705882354'
      cy='666.6666666666667'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='141.1764705882353'
      cy='666.6666666666667'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='188.23529411764707'
      cy='666.6666666666667'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='235.29411764705884'
      cy='666.6666666666667'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='282.3529411764706'
      cy='666.6666666666667'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='329.4117647058824'
      cy='666.6666666666667'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='376.47058823529414'
      cy='666.6666666666667'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='423.5294117647059'
      cy='666.6666666666667'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='470.5882352941177'
      cy='666.6666666666667'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='517.6470588235295'
      cy='666.6666666666667'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='564.7058823529412'
      cy='666.6666666666667'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='611.7647058823529'
      cy='666.6666666666667'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='658.8235294117646'
      cy='666.6666666666667'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='705.8823529411764'
      cy='666.6666666666667'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='752.9411764705881'
      cy='666.6666666666667'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='799.9999999999998'
      cy='666.6666666666667'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='0'
      cy='711.1111111111112'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='47.05882352941177'
      cy='711.1111111111112'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='94.11764705882354'
      cy='711.1111111111112'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='141.1764705882353'
      cy='711.1111111111112'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='188.23529411764707'
      cy='711.1111111111112'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='235.29411764705884'
      cy='711.1111111111112'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='282.3529411764706'
      cy='711.1111111111112'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='329.4117647058824'
      cy='711.1111111111112'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='376.47058823529414'
      cy='711.1111111111112'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='423.5294117647059'
      cy='711.1111111111112'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='470.5882352941177'
      cy='711.1111111111112'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='517.6470588235295'
      cy='711.1111111111112'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='564.7058823529412'
      cy='711.1111111111112'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='611.7647058823529'
      cy='711.1111111111112'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='658.8235294117646'
      cy='711.1111111111112'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='705.8823529411764'
      cy='711.1111111111112'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='752.9411764705881'
      cy='711.1111111111112'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='799.9999999999998'
      cy='711.1111111111112'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='0'
      cy='755.5555555555557'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='47.05882352941177'
      cy='755.5555555555557'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='94.11764705882354'
      cy='755.5555555555557'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='141.1764705882353'
      cy='755.5555555555557'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='188.23529411764707'
      cy='755.5555555555557'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='235.29411764705884'
      cy='755.5555555555557'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='282.3529411764706'
      cy='755.5555555555557'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='329.4117647058824'
      cy='755.5555555555557'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='376.47058823529414'
      cy='755.5555555555557'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='423.5294117647059'
      cy='755.5555555555557'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='470.5882352941177'
      cy='755.5555555555557'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='517.6470588235295'
      cy='755.5555555555557'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='564.7058823529412'
      cy='755.5555555555557'
      fill='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='611.7647058823529'
      cy='755.5555555555557'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='658.8235294117646'
      cy='755.5555555555557'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='705.8823529411764'
      cy='755.5555555555557'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='752.9411764705881'
      cy='755.5555555555557'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='799.9999999999998'
      cy='755.5555555555557'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='0'
      cy='800.0000000000001'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='47.05882352941177'
      cy='800.0000000000001'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='94.11764705882354'
      cy='800.0000000000001'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='141.1764705882353'
      cy='800.0000000000001'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='188.23529411764707'
      cy='800.0000000000001'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='235.29411764705884'
      cy='800.0000000000001'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='282.3529411764706'
      cy='800.0000000000001'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='329.4117647058824'
      cy='800.0000000000001'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='376.47058823529414'
      cy='800.0000000000001'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='423.5294117647059'
      cy='800.0000000000001'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='470.5882352941177'
      cy='800.0000000000001'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='517.6470588235295'
      cy='800.0000000000001'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='564.7058823529412'
      cy='800.0000000000001'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='611.7647058823529'
      cy='800.0000000000001'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='658.8235294117646'
      cy='800.0000000000001'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='705.8823529411764'
      cy='800.0000000000001'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='752.9411764705881'
      cy='800.0000000000001'
      fill='${n}'
      stroke='none'
    ></circle>
    <circle
      r='3.2894736842105265'
      cx='799.9999999999998'
      cy='800.0000000000001'
      fill='${n}'
      stroke='none'
    ></circle>
  </g>
    </svg>`,({color0:n="#000000",color1:x="#00ff00"})=>`<svg
      xmlns='http://www.w3.org/2000/svg'
      version='1.1'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='0 0 800 800'
      opacity='1'
      width='800'
      height='800'
    >
      <g stroke-width='1' stroke='${n}' fill='none'>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='-3.2894736842105265'
          y='-3.2894736842105265'
          transform='rotate(45, 0, 0)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='43.76934984520124'
          y='-3.2894736842105265'
          transform='rotate(45, 47.05882352941177, 0)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='90.82817337461302'
          y='-3.2894736842105265'
          transform='rotate(45, 94.11764705882354, 0)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='137.88699690402478'
          y='-3.2894736842105265'
          transform='rotate(45, 141.1764705882353, 0)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='184.94582043343655'
          y='-3.2894736842105265'
          transform='rotate(45, 188.23529411764707, 0)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='232.00464396284832'
          y='-3.2894736842105265'
          transform='rotate(45, 235.29411764705884, 0)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='279.0634674922601'
          y='-3.2894736842105265'
          transform='rotate(45, 282.3529411764706, 0)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='326.12229102167186'
          y='-3.2894736842105265'
          transform='rotate(45, 329.4117647058824, 0)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='373.1811145510836'
          y='-3.2894736842105265'
          transform='rotate(45, 376.47058823529414, 0)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='420.2399380804954'
          y='-3.2894736842105265'
          transform='rotate(45, 423.5294117647059, 0)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='467.29876160990716'
          y='-3.2894736842105265'
          transform='rotate(45, 470.5882352941177, 0)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='514.357585139319'
          y='-3.2894736842105265'
          transform='rotate(45, 517.6470588235295, 0)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='561.4164086687307'
          y='-3.2894736842105265'
          transform='rotate(45, 564.7058823529412, 0)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='608.4752321981424'
          y='-3.2894736842105265'
          transform='rotate(45, 611.7647058823529, 0)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='655.5340557275541'
          y='-3.2894736842105265'
          transform='rotate(45, 658.8235294117646, 0)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='702.5928792569658'
          y='-3.2894736842105265'
          transform='rotate(45, 705.8823529411764, 0)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='749.6517027863775'
          y='-3.2894736842105265'
          transform='rotate(45, 752.9411764705881, 0)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='796.7105263157893'
          y='-3.2894736842105265'
          transform='rotate(45, 799.9999999999998, 0)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='-3.2894736842105265'
          y='41.154970760233915'
          transform='rotate(45, 0, 44.44444444444444)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='43.76934984520124'
          y='41.154970760233915'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 47.05882352941177, 44.44444444444444)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='90.82817337461302'
          y='41.154970760233915'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 94.11764705882354, 44.44444444444444)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='137.88699690402478'
          y='41.154970760233915'
          transform='rotate(45, 141.1764705882353, 44.44444444444444)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='184.94582043343655'
          y='41.154970760233915'
          transform='rotate(45, 188.23529411764707, 44.44444444444444)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='232.00464396284832'
          y='41.154970760233915'
          transform='rotate(45, 235.29411764705884, 44.44444444444444)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='279.0634674922601'
          y='41.154970760233915'
          transform='rotate(45, 282.3529411764706, 44.44444444444444)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='326.12229102167186'
          y='41.154970760233915'
          transform='rotate(45, 329.4117647058824, 44.44444444444444)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='373.1811145510836'
          y='41.154970760233915'
          transform='rotate(45, 376.47058823529414, 44.44444444444444)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='420.2399380804954'
          y='41.154970760233915'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 423.5294117647059, 44.44444444444444)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='467.29876160990716'
          y='41.154970760233915'
          transform='rotate(45, 470.5882352941177, 44.44444444444444)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='514.357585139319'
          y='41.154970760233915'
          transform='rotate(45, 517.6470588235295, 44.44444444444444)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='561.4164086687307'
          y='41.154970760233915'
          transform='rotate(45, 564.7058823529412, 44.44444444444444)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='608.4752321981424'
          y='41.154970760233915'
          transform='rotate(45, 611.7647058823529, 44.44444444444444)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='655.5340557275541'
          y='41.154970760233915'
          transform='rotate(45, 658.8235294117646, 44.44444444444444)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='702.5928792569658'
          y='41.154970760233915'
          transform='rotate(45, 705.8823529411764, 44.44444444444444)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='749.6517027863775'
          y='41.154970760233915'
          transform='rotate(45, 752.9411764705881, 44.44444444444444)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='796.7105263157893'
          y='41.154970760233915'
          transform='rotate(45, 799.9999999999998, 44.44444444444444)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='-3.2894736842105265'
          y='85.59941520467837'
          transform='rotate(45, 0, 88.88888888888889)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='43.76934984520124'
          y='85.59941520467837'
          transform='rotate(45, 47.05882352941177, 88.88888888888889)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='90.82817337461302'
          y='85.59941520467837'
          transform='rotate(45, 94.11764705882354, 88.88888888888889)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='137.88699690402478'
          y='85.59941520467837'
          transform='rotate(45, 141.1764705882353, 88.88888888888889)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='184.94582043343655'
          y='85.59941520467837'
          transform='rotate(45, 188.23529411764707, 88.88888888888889)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='232.00464396284832'
          y='85.59941520467837'
          transform='rotate(45, 235.29411764705884, 88.88888888888889)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='279.0634674922601'
          y='85.59941520467837'
          transform='rotate(45, 282.3529411764706, 88.88888888888889)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='326.12229102167186'
          y='85.59941520467837'
          transform='rotate(45, 329.4117647058824, 88.88888888888889)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='373.1811145510836'
          y='85.59941520467837'
          transform='rotate(45, 376.47058823529414, 88.88888888888889)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='420.2399380804954'
          y='85.59941520467837'
          transform='rotate(45, 423.5294117647059, 88.88888888888889)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='467.29876160990716'
          y='85.59941520467837'
          transform='rotate(45, 470.5882352941177, 88.88888888888889)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='514.357585139319'
          y='85.59941520467837'
          transform='rotate(45, 517.6470588235295, 88.88888888888889)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='561.4164086687307'
          y='85.59941520467837'
          transform='rotate(45, 564.7058823529412, 88.88888888888889)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='608.4752321981424'
          y='85.59941520467837'
          transform='rotate(45, 611.7647058823529, 88.88888888888889)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='655.5340557275541'
          y='85.59941520467837'
          transform='rotate(45, 658.8235294117646, 88.88888888888889)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='702.5928792569658'
          y='85.59941520467837'
          transform='rotate(45, 705.8823529411764, 88.88888888888889)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='749.6517027863775'
          y='85.59941520467837'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 752.9411764705881, 88.88888888888889)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='796.7105263157893'
          y='85.59941520467837'
          transform='rotate(45, 799.9999999999998, 88.88888888888889)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='-3.2894736842105265'
          y='130.0438596491228'
          transform='rotate(45, 0, 133.33333333333331)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='43.76934984520124'
          y='130.0438596491228'
          transform='rotate(45, 47.05882352941177, 133.33333333333331)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='90.82817337461302'
          y='130.0438596491228'
          transform='rotate(45, 94.11764705882354, 133.33333333333331)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='137.88699690402478'
          y='130.0438596491228'
          transform='rotate(45, 141.1764705882353, 133.33333333333331)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='184.94582043343655'
          y='130.0438596491228'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 188.23529411764707, 133.33333333333331)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='232.00464396284832'
          y='130.0438596491228'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 235.29411764705884, 133.33333333333331)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='279.0634674922601'
          y='130.0438596491228'
          transform='rotate(45, 282.3529411764706, 133.33333333333331)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='326.12229102167186'
          y='130.0438596491228'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 329.4117647058824, 133.33333333333331)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='373.1811145510836'
          y='130.0438596491228'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 376.47058823529414, 133.33333333333331)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='420.2399380804954'
          y='130.0438596491228'
          transform='rotate(45, 423.5294117647059, 133.33333333333331)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='467.29876160990716'
          y='130.0438596491228'
          transform='rotate(45, 470.5882352941177, 133.33333333333331)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='514.357585139319'
          y='130.0438596491228'
          transform='rotate(45, 517.6470588235295, 133.33333333333331)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='561.4164086687307'
          y='130.0438596491228'
          transform='rotate(45, 564.7058823529412, 133.33333333333331)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='608.4752321981424'
          y='130.0438596491228'
          transform='rotate(45, 611.7647058823529, 133.33333333333331)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='655.5340557275541'
          y='130.0438596491228'
          transform='rotate(45, 658.8235294117646, 133.33333333333331)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='702.5928792569658'
          y='130.0438596491228'
          transform='rotate(45, 705.8823529411764, 133.33333333333331)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='749.6517027863775'
          y='130.0438596491228'
          transform='rotate(45, 752.9411764705881, 133.33333333333331)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='796.7105263157893'
          y='130.0438596491228'
          transform='rotate(45, 799.9999999999998, 133.33333333333331)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='-3.2894736842105265'
          y='174.48830409356725'
          transform='rotate(45, 0, 177.77777777777777)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='43.76934984520124'
          y='174.48830409356725'
          transform='rotate(45, 47.05882352941177, 177.77777777777777)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='90.82817337461302'
          y='174.48830409356725'
          transform='rotate(45, 94.11764705882354, 177.77777777777777)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='137.88699690402478'
          y='174.48830409356725'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 141.1764705882353, 177.77777777777777)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='184.94582043343655'
          y='174.48830409356725'
          transform='rotate(45, 188.23529411764707, 177.77777777777777)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='232.00464396284832'
          y='174.48830409356725'
          transform='rotate(45, 235.29411764705884, 177.77777777777777)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='279.0634674922601'
          y='174.48830409356725'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 282.3529411764706, 177.77777777777777)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='326.12229102167186'
          y='174.48830409356725'
          transform='rotate(45, 329.4117647058824, 177.77777777777777)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='373.1811145510836'
          y='174.48830409356725'
          transform='rotate(45, 376.47058823529414, 177.77777777777777)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='420.2399380804954'
          y='174.48830409356725'
          transform='rotate(45, 423.5294117647059, 177.77777777777777)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='467.29876160990716'
          y='174.48830409356725'
          transform='rotate(45, 470.5882352941177, 177.77777777777777)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='514.357585139319'
          y='174.48830409356725'
          transform='rotate(45, 517.6470588235295, 177.77777777777777)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='561.4164086687307'
          y='174.48830409356725'
          transform='rotate(45, 564.7058823529412, 177.77777777777777)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='608.4752321981424'
          y='174.48830409356725'
          transform='rotate(45, 611.7647058823529, 177.77777777777777)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='655.5340557275541'
          y='174.48830409356725'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 658.8235294117646, 177.77777777777777)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='702.5928792569658'
          y='174.48830409356725'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 705.8823529411764, 177.77777777777777)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='749.6517027863775'
          y='174.48830409356725'
          transform='rotate(45, 752.9411764705881, 177.77777777777777)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='796.7105263157893'
          y='174.48830409356725'
          transform='rotate(45, 799.9999999999998, 177.77777777777777)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='-3.2894736842105265'
          y='218.9327485380117'
          transform='rotate(45, 0, 222.22222222222223)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='43.76934984520124'
          y='218.9327485380117'
          transform='rotate(45, 47.05882352941177, 222.22222222222223)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='90.82817337461302'
          y='218.9327485380117'
          transform='rotate(45, 94.11764705882354, 222.22222222222223)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='137.88699690402478'
          y='218.9327485380117'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 141.1764705882353, 222.22222222222223)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='184.94582043343655'
          y='218.9327485380117'
          transform='rotate(45, 188.23529411764707, 222.22222222222223)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='232.00464396284832'
          y='218.9327485380117'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 235.29411764705884, 222.22222222222223)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='279.0634674922601'
          y='218.9327485380117'
          transform='rotate(45, 282.3529411764706, 222.22222222222223)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='326.12229102167186'
          y='218.9327485380117'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 329.4117647058824, 222.22222222222223)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='373.1811145510836'
          y='218.9327485380117'
          transform='rotate(45, 376.47058823529414, 222.22222222222223)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='420.2399380804954'
          y='218.9327485380117'
          transform='rotate(45, 423.5294117647059, 222.22222222222223)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='467.29876160990716'
          y='218.9327485380117'
          transform='rotate(45, 470.5882352941177, 222.22222222222223)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='514.357585139319'
          y='218.9327485380117'
          transform='rotate(45, 517.6470588235295, 222.22222222222223)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='561.4164086687307'
          y='218.9327485380117'
          transform='rotate(45, 564.7058823529412, 222.22222222222223)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='608.4752321981424'
          y='218.9327485380117'
          transform='rotate(45, 611.7647058823529, 222.22222222222223)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='655.5340557275541'
          y='218.9327485380117'
          transform='rotate(45, 658.8235294117646, 222.22222222222223)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='702.5928792569658'
          y='218.9327485380117'
          transform='rotate(45, 705.8823529411764, 222.22222222222223)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='749.6517027863775'
          y='218.9327485380117'
          transform='rotate(45, 752.9411764705881, 222.22222222222223)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='796.7105263157893'
          y='218.9327485380117'
          transform='rotate(45, 799.9999999999998, 222.22222222222223)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='-3.2894736842105265'
          y='263.37719298245617'
          transform='rotate(45, 0, 266.6666666666667)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='43.76934984520124'
          y='263.37719298245617'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 47.05882352941177, 266.6666666666667)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='90.82817337461302'
          y='263.37719298245617'
          transform='rotate(45, 94.11764705882354, 266.6666666666667)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='137.88699690402478'
          y='263.37719298245617'
          transform='rotate(45, 141.1764705882353, 266.6666666666667)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='184.94582043343655'
          y='263.37719298245617'
          transform='rotate(45, 188.23529411764707, 266.6666666666667)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='232.00464396284832'
          y='263.37719298245617'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 235.29411764705884, 266.6666666666667)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='279.0634674922601'
          y='263.37719298245617'
          transform='rotate(45, 282.3529411764706, 266.6666666666667)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='326.12229102167186'
          y='263.37719298245617'
          transform='rotate(45, 329.4117647058824, 266.6666666666667)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='373.1811145510836'
          y='263.37719298245617'
          transform='rotate(45, 376.47058823529414, 266.6666666666667)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='420.2399380804954'
          y='263.37719298245617'
          transform='rotate(45, 423.5294117647059, 266.6666666666667)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='467.29876160990716'
          y='263.37719298245617'
          transform='rotate(45, 470.5882352941177, 266.6666666666667)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='514.357585139319'
          y='263.37719298245617'
          transform='rotate(45, 517.6470588235295, 266.6666666666667)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='561.4164086687307'
          y='263.37719298245617'
          transform='rotate(45, 564.7058823529412, 266.6666666666667)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='608.4752321981424'
          y='263.37719298245617'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 611.7647058823529, 266.6666666666667)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='655.5340557275541'
          y='263.37719298245617'
          transform='rotate(45, 658.8235294117646, 266.6666666666667)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='702.5928792569658'
          y='263.37719298245617'
          transform='rotate(45, 705.8823529411764, 266.6666666666667)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='749.6517027863775'
          y='263.37719298245617'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 752.9411764705881, 266.6666666666667)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='796.7105263157893'
          y='263.37719298245617'
          transform='rotate(45, 799.9999999999998, 266.6666666666667)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='-3.2894736842105265'
          y='307.8216374269006'
          transform='rotate(45, 0, 311.11111111111114)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='43.76934984520124'
          y='307.8216374269006'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 47.05882352941177, 311.11111111111114)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='90.82817337461302'
          y='307.8216374269006'
          transform='rotate(45, 94.11764705882354, 311.11111111111114)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='137.88699690402478'
          y='307.8216374269006'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 141.1764705882353, 311.11111111111114)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='184.94582043343655'
          y='307.8216374269006'
          transform='rotate(45, 188.23529411764707, 311.11111111111114)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='232.00464396284832'
          y='307.8216374269006'
          transform='rotate(45, 235.29411764705884, 311.11111111111114)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='279.0634674922601'
          y='307.8216374269006'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 282.3529411764706, 311.11111111111114)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='326.12229102167186'
          y='307.8216374269006'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 329.4117647058824, 311.11111111111114)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='373.1811145510836'
          y='307.8216374269006'
          transform='rotate(45, 376.47058823529414, 311.11111111111114)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='420.2399380804954'
          y='307.8216374269006'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 423.5294117647059, 311.11111111111114)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='467.29876160990716'
          y='307.8216374269006'
          transform='rotate(45, 470.5882352941177, 311.11111111111114)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='514.357585139319'
          y='307.8216374269006'
          transform='rotate(45, 517.6470588235295, 311.11111111111114)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='561.4164086687307'
          y='307.8216374269006'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 564.7058823529412, 311.11111111111114)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='608.4752321981424'
          y='307.8216374269006'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 611.7647058823529, 311.11111111111114)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='655.5340557275541'
          y='307.8216374269006'
          transform='rotate(45, 658.8235294117646, 311.11111111111114)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='702.5928792569658'
          y='307.8216374269006'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 705.8823529411764, 311.11111111111114)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='749.6517027863775'
          y='307.8216374269006'
          transform='rotate(45, 752.9411764705881, 311.11111111111114)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='796.7105263157893'
          y='307.8216374269006'
          transform='rotate(45, 799.9999999999998, 311.11111111111114)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='-3.2894736842105265'
          y='352.2660818713451'
          transform='rotate(45, 0, 355.5555555555556)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='43.76934984520124'
          y='352.2660818713451'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 47.05882352941177, 355.5555555555556)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='90.82817337461302'
          y='352.2660818713451'
          transform='rotate(45, 94.11764705882354, 355.5555555555556)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='137.88699690402478'
          y='352.2660818713451'
          transform='rotate(45, 141.1764705882353, 355.5555555555556)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='184.94582043343655'
          y='352.2660818713451'
          transform='rotate(45, 188.23529411764707, 355.5555555555556)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='232.00464396284832'
          y='352.2660818713451'
          transform='rotate(45, 235.29411764705884, 355.5555555555556)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='279.0634674922601'
          y='352.2660818713451'
          transform='rotate(45, 282.3529411764706, 355.5555555555556)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='326.12229102167186'
          y='352.2660818713451'
          transform='rotate(45, 329.4117647058824, 355.5555555555556)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='373.1811145510836'
          y='352.2660818713451'
          transform='rotate(45, 376.47058823529414, 355.5555555555556)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='420.2399380804954'
          y='352.2660818713451'
          transform='rotate(45, 423.5294117647059, 355.5555555555556)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='467.29876160990716'
          y='352.2660818713451'
          transform='rotate(45, 470.5882352941177, 355.5555555555556)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='514.357585139319'
          y='352.2660818713451'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 517.6470588235295, 355.5555555555556)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='561.4164086687307'
          y='352.2660818713451'
          transform='rotate(45, 564.7058823529412, 355.5555555555556)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='608.4752321981424'
          y='352.2660818713451'
          transform='rotate(45, 611.7647058823529, 355.5555555555556)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='655.5340557275541'
          y='352.2660818713451'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 658.8235294117646, 355.5555555555556)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='702.5928792569658'
          y='352.2660818713451'
          transform='rotate(45, 705.8823529411764, 355.5555555555556)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='749.6517027863775'
          y='352.2660818713451'
          transform='rotate(45, 752.9411764705881, 355.5555555555556)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='796.7105263157893'
          y='352.2660818713451'
          transform='rotate(45, 799.9999999999998, 355.5555555555556)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='-3.2894736842105265'
          y='396.71052631578954'
          transform='rotate(45, 0, 400.00000000000006)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='43.76934984520124'
          y='396.71052631578954'
          transform='rotate(45, 47.05882352941177, 400.00000000000006)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='90.82817337461302'
          y='396.71052631578954'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 94.11764705882354, 400.00000000000006)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='137.88699690402478'
          y='396.71052631578954'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 141.1764705882353, 400.00000000000006)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='184.94582043343655'
          y='396.71052631578954'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 188.23529411764707, 400.00000000000006)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='232.00464396284832'
          y='396.71052631578954'
          transform='rotate(45, 235.29411764705884, 400.00000000000006)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='279.0634674922601'
          y='396.71052631578954'
          transform='rotate(45, 282.3529411764706, 400.00000000000006)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='326.12229102167186'
          y='396.71052631578954'
          transform='rotate(45, 329.4117647058824, 400.00000000000006)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='373.1811145510836'
          y='396.71052631578954'
          transform='rotate(45, 376.47058823529414, 400.00000000000006)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='420.2399380804954'
          y='396.71052631578954'
          transform='rotate(45, 423.5294117647059, 400.00000000000006)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='467.29876160990716'
          y='396.71052631578954'
          transform='rotate(45, 470.5882352941177, 400.00000000000006)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='514.357585139319'
          y='396.71052631578954'
          transform='rotate(45, 517.6470588235295, 400.00000000000006)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='561.4164086687307'
          y='396.71052631578954'
          transform='rotate(45, 564.7058823529412, 400.00000000000006)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='608.4752321981424'
          y='396.71052631578954'
          transform='rotate(45, 611.7647058823529, 400.00000000000006)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='655.5340557275541'
          y='396.71052631578954'
          transform='rotate(45, 658.8235294117646, 400.00000000000006)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='702.5928792569658'
          y='396.71052631578954'
          transform='rotate(45, 705.8823529411764, 400.00000000000006)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='749.6517027863775'
          y='396.71052631578954'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 752.9411764705881, 400.00000000000006)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='796.7105263157893'
          y='396.71052631578954'
          transform='rotate(45, 799.9999999999998, 400.00000000000006)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='-3.2894736842105265'
          y='441.154970760234'
          transform='rotate(45, 0, 444.4444444444445)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='43.76934984520124'
          y='441.154970760234'
          transform='rotate(45, 47.05882352941177, 444.4444444444445)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='90.82817337461302'
          y='441.154970760234'
          transform='rotate(45, 94.11764705882354, 444.4444444444445)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='137.88699690402478'
          y='441.154970760234'
          transform='rotate(45, 141.1764705882353, 444.4444444444445)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='184.94582043343655'
          y='441.154970760234'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 188.23529411764707, 444.4444444444445)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='232.00464396284832'
          y='441.154970760234'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 235.29411764705884, 444.4444444444445)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='279.0634674922601'
          y='441.154970760234'
          transform='rotate(45, 282.3529411764706, 444.4444444444445)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='326.12229102167186'
          y='441.154970760234'
          transform='rotate(45, 329.4117647058824, 444.4444444444445)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='373.1811145510836'
          y='441.154970760234'
          transform='rotate(45, 376.47058823529414, 444.4444444444445)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='420.2399380804954'
          y='441.154970760234'
          transform='rotate(45, 423.5294117647059, 444.4444444444445)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='467.29876160990716'
          y='441.154970760234'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 470.5882352941177, 444.4444444444445)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='514.357585139319'
          y='441.154970760234'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 517.6470588235295, 444.4444444444445)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='561.4164086687307'
          y='441.154970760234'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 564.7058823529412, 444.4444444444445)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='608.4752321981424'
          y='441.154970760234'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 611.7647058823529, 444.4444444444445)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='655.5340557275541'
          y='441.154970760234'
          transform='rotate(45, 658.8235294117646, 444.4444444444445)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='702.5928792569658'
          y='441.154970760234'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 705.8823529411764, 444.4444444444445)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='749.6517027863775'
          y='441.154970760234'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 752.9411764705881, 444.4444444444445)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='796.7105263157893'
          y='441.154970760234'
          transform='rotate(45, 799.9999999999998, 444.4444444444445)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='-3.2894736842105265'
          y='485.59941520467845'
          transform='rotate(45, 0, 488.88888888888897)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='43.76934984520124'
          y='485.59941520467845'
          transform='rotate(45, 47.05882352941177, 488.88888888888897)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='90.82817337461302'
          y='485.59941520467845'
          transform='rotate(45, 94.11764705882354, 488.88888888888897)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='137.88699690402478'
          y='485.59941520467845'
          transform='rotate(45, 141.1764705882353, 488.88888888888897)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='184.94582043343655'
          y='485.59941520467845'
          transform='rotate(45, 188.23529411764707, 488.88888888888897)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='232.00464396284832'
          y='485.59941520467845'
          transform='rotate(45, 235.29411764705884, 488.88888888888897)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='279.0634674922601'
          y='485.59941520467845'
          transform='rotate(45, 282.3529411764706, 488.88888888888897)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='326.12229102167186'
          y='485.59941520467845'
          transform='rotate(45, 329.4117647058824, 488.88888888888897)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='373.1811145510836'
          y='485.59941520467845'
          transform='rotate(45, 376.47058823529414, 488.88888888888897)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='420.2399380804954'
          y='485.59941520467845'
          transform='rotate(45, 423.5294117647059, 488.88888888888897)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='467.29876160990716'
          y='485.59941520467845'
          transform='rotate(45, 470.5882352941177, 488.88888888888897)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='514.357585139319'
          y='485.59941520467845'
          transform='rotate(45, 517.6470588235295, 488.88888888888897)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='561.4164086687307'
          y='485.59941520467845'
          transform='rotate(45, 564.7058823529412, 488.88888888888897)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='608.4752321981424'
          y='485.59941520467845'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 611.7647058823529, 488.88888888888897)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='655.5340557275541'
          y='485.59941520467845'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 658.8235294117646, 488.88888888888897)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='702.5928792569658'
          y='485.59941520467845'
          transform='rotate(45, 705.8823529411764, 488.88888888888897)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='749.6517027863775'
          y='485.59941520467845'
          transform='rotate(45, 752.9411764705881, 488.88888888888897)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='796.7105263157893'
          y='485.59941520467845'
          transform='rotate(45, 799.9999999999998, 488.88888888888897)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='-3.2894736842105265'
          y='530.0438596491229'
          transform='rotate(45, 0, 533.3333333333334)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='43.76934984520124'
          y='530.0438596491229'
          transform='rotate(45, 47.05882352941177, 533.3333333333334)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='90.82817337461302'
          y='530.0438596491229'
          transform='rotate(45, 94.11764705882354, 533.3333333333334)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='137.88699690402478'
          y='530.0438596491229'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 141.1764705882353, 533.3333333333334)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='184.94582043343655'
          y='530.0438596491229'
          transform='rotate(45, 188.23529411764707, 533.3333333333334)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='232.00464396284832'
          y='530.0438596491229'
          transform='rotate(45, 235.29411764705884, 533.3333333333334)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='279.0634674922601'
          y='530.0438596491229'
          transform='rotate(45, 282.3529411764706, 533.3333333333334)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='326.12229102167186'
          y='530.0438596491229'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 329.4117647058824, 533.3333333333334)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='373.1811145510836'
          y='530.0438596491229'
          transform='rotate(45, 376.47058823529414, 533.3333333333334)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='420.2399380804954'
          y='530.0438596491229'
          transform='rotate(45, 423.5294117647059, 533.3333333333334)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='467.29876160990716'
          y='530.0438596491229'
          transform='rotate(45, 470.5882352941177, 533.3333333333334)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='514.357585139319'
          y='530.0438596491229'
          transform='rotate(45, 517.6470588235295, 533.3333333333334)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='561.4164086687307'
          y='530.0438596491229'
          transform='rotate(45, 564.7058823529412, 533.3333333333334)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='608.4752321981424'
          y='530.0438596491229'
          transform='rotate(45, 611.7647058823529, 533.3333333333334)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='655.5340557275541'
          y='530.0438596491229'
          transform='rotate(45, 658.8235294117646, 533.3333333333334)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='702.5928792569658'
          y='530.0438596491229'
          transform='rotate(45, 705.8823529411764, 533.3333333333334)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='749.6517027863775'
          y='530.0438596491229'
          transform='rotate(45, 752.9411764705881, 533.3333333333334)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='796.7105263157893'
          y='530.0438596491229'
          transform='rotate(45, 799.9999999999998, 533.3333333333334)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='-3.2894736842105265'
          y='574.4883040935673'
          transform='rotate(45, 0, 577.7777777777778)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='43.76934984520124'
          y='574.4883040935673'
          transform='rotate(45, 47.05882352941177, 577.7777777777778)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='90.82817337461302'
          y='574.4883040935673'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 94.11764705882354, 577.7777777777778)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='137.88699690402478'
          y='574.4883040935673'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 141.1764705882353, 577.7777777777778)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='184.94582043343655'
          y='574.4883040935673'
          transform='rotate(45, 188.23529411764707, 577.7777777777778)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='232.00464396284832'
          y='574.4883040935673'
          transform='rotate(45, 235.29411764705884, 577.7777777777778)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='279.0634674922601'
          y='574.4883040935673'
          transform='rotate(45, 282.3529411764706, 577.7777777777778)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='326.12229102167186'
          y='574.4883040935673'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 329.4117647058824, 577.7777777777778)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='373.1811145510836'
          y='574.4883040935673'
          transform='rotate(45, 376.47058823529414, 577.7777777777778)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='420.2399380804954'
          y='574.4883040935673'
          transform='rotate(45, 423.5294117647059, 577.7777777777778)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='467.29876160990716'
          y='574.4883040935673'
          transform='rotate(45, 470.5882352941177, 577.7777777777778)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='514.357585139319'
          y='574.4883040935673'
          transform='rotate(45, 517.6470588235295, 577.7777777777778)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='561.4164086687307'
          y='574.4883040935673'
          transform='rotate(45, 564.7058823529412, 577.7777777777778)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='608.4752321981424'
          y='574.4883040935673'
          transform='rotate(45, 611.7647058823529, 577.7777777777778)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='655.5340557275541'
          y='574.4883040935673'
          transform='rotate(45, 658.8235294117646, 577.7777777777778)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='702.5928792569658'
          y='574.4883040935673'
          transform='rotate(45, 705.8823529411764, 577.7777777777778)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='749.6517027863775'
          y='574.4883040935673'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 752.9411764705881, 577.7777777777778)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='796.7105263157893'
          y='574.4883040935673'
          transform='rotate(45, 799.9999999999998, 577.7777777777778)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='-3.2894736842105265'
          y='618.9327485380118'
          transform='rotate(45, 0, 622.2222222222223)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='43.76934984520124'
          y='618.9327485380118'
          transform='rotate(45, 47.05882352941177, 622.2222222222223)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='90.82817337461302'
          y='618.9327485380118'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 94.11764705882354, 622.2222222222223)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='137.88699690402478'
          y='618.9327485380118'
          transform='rotate(45, 141.1764705882353, 622.2222222222223)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='184.94582043343655'
          y='618.9327485380118'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 188.23529411764707, 622.2222222222223)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='232.00464396284832'
          y='618.9327485380118'
          transform='rotate(45, 235.29411764705884, 622.2222222222223)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='279.0634674922601'
          y='618.9327485380118'
          transform='rotate(45, 282.3529411764706, 622.2222222222223)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='326.12229102167186'
          y='618.9327485380118'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 329.4117647058824, 622.2222222222223)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='373.1811145510836'
          y='618.9327485380118'
          transform='rotate(45, 376.47058823529414, 622.2222222222223)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='420.2399380804954'
          y='618.9327485380118'
          transform='rotate(45, 423.5294117647059, 622.2222222222223)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='467.29876160990716'
          y='618.9327485380118'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 470.5882352941177, 622.2222222222223)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='514.357585139319'
          y='618.9327485380118'
          transform='rotate(45, 517.6470588235295, 622.2222222222223)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='561.4164086687307'
          y='618.9327485380118'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 564.7058823529412, 622.2222222222223)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='608.4752321981424'
          y='618.9327485380118'
          transform='rotate(45, 611.7647058823529, 622.2222222222223)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='655.5340557275541'
          y='618.9327485380118'
          transform='rotate(45, 658.8235294117646, 622.2222222222223)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='702.5928792569658'
          y='618.9327485380118'
          transform='rotate(45, 705.8823529411764, 622.2222222222223)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='749.6517027863775'
          y='618.9327485380118'
          transform='rotate(45, 752.9411764705881, 622.2222222222223)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='796.7105263157893'
          y='618.9327485380118'
          transform='rotate(45, 799.9999999999998, 622.2222222222223)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='-3.2894736842105265'
          y='663.3771929824562'
          transform='rotate(45, 0, 666.6666666666667)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='43.76934984520124'
          y='663.3771929824562'
          transform='rotate(45, 47.05882352941177, 666.6666666666667)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='90.82817337461302'
          y='663.3771929824562'
          transform='rotate(45, 94.11764705882354, 666.6666666666667)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='137.88699690402478'
          y='663.3771929824562'
          transform='rotate(45, 141.1764705882353, 666.6666666666667)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='184.94582043343655'
          y='663.3771929824562'
          transform='rotate(45, 188.23529411764707, 666.6666666666667)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='232.00464396284832'
          y='663.3771929824562'
          transform='rotate(45, 235.29411764705884, 666.6666666666667)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='279.0634674922601'
          y='663.3771929824562'
          transform='rotate(45, 282.3529411764706, 666.6666666666667)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='326.12229102167186'
          y='663.3771929824562'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 329.4117647058824, 666.6666666666667)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='373.1811145510836'
          y='663.3771929824562'
          transform='rotate(45, 376.47058823529414, 666.6666666666667)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='420.2399380804954'
          y='663.3771929824562'
          transform='rotate(45, 423.5294117647059, 666.6666666666667)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='467.29876160990716'
          y='663.3771929824562'
          transform='rotate(45, 470.5882352941177, 666.6666666666667)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='514.357585139319'
          y='663.3771929824562'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 517.6470588235295, 666.6666666666667)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='561.4164086687307'
          y='663.3771929824562'
          transform='rotate(45, 564.7058823529412, 666.6666666666667)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='608.4752321981424'
          y='663.3771929824562'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 611.7647058823529, 666.6666666666667)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='655.5340557275541'
          y='663.3771929824562'
          transform='rotate(45, 658.8235294117646, 666.6666666666667)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='702.5928792569658'
          y='663.3771929824562'
          transform='rotate(45, 705.8823529411764, 666.6666666666667)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='749.6517027863775'
          y='663.3771929824562'
          transform='rotate(45, 752.9411764705881, 666.6666666666667)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='796.7105263157893'
          y='663.3771929824562'
          transform='rotate(45, 799.9999999999998, 666.6666666666667)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='-3.2894736842105265'
          y='707.8216374269007'
          transform='rotate(45, 0, 711.1111111111112)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='43.76934984520124'
          y='707.8216374269007'
          transform='rotate(45, 47.05882352941177, 711.1111111111112)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='90.82817337461302'
          y='707.8216374269007'
          transform='rotate(45, 94.11764705882354, 711.1111111111112)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='137.88699690402478'
          y='707.8216374269007'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 141.1764705882353, 711.1111111111112)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='184.94582043343655'
          y='707.8216374269007'
          transform='rotate(45, 188.23529411764707, 711.1111111111112)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='232.00464396284832'
          y='707.8216374269007'
          transform='rotate(45, 235.29411764705884, 711.1111111111112)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='279.0634674922601'
          y='707.8216374269007'
          transform='rotate(45, 282.3529411764706, 711.1111111111112)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='326.12229102167186'
          y='707.8216374269007'
          transform='rotate(45, 329.4117647058824, 711.1111111111112)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='373.1811145510836'
          y='707.8216374269007'
          transform='rotate(45, 376.47058823529414, 711.1111111111112)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='420.2399380804954'
          y='707.8216374269007'
          transform='rotate(45, 423.5294117647059, 711.1111111111112)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='467.29876160990716'
          y='707.8216374269007'
          transform='rotate(45, 470.5882352941177, 711.1111111111112)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='514.357585139319'
          y='707.8216374269007'
          transform='rotate(45, 517.6470588235295, 711.1111111111112)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='561.4164086687307'
          y='707.8216374269007'
          transform='rotate(45, 564.7058823529412, 711.1111111111112)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='608.4752321981424'
          y='707.8216374269007'
          transform='rotate(45, 611.7647058823529, 711.1111111111112)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='655.5340557275541'
          y='707.8216374269007'
          transform='rotate(45, 658.8235294117646, 711.1111111111112)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='702.5928792569658'
          y='707.8216374269007'
          transform='rotate(45, 705.8823529411764, 711.1111111111112)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='749.6517027863775'
          y='707.8216374269007'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 752.9411764705881, 711.1111111111112)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='796.7105263157893'
          y='707.8216374269007'
          transform='rotate(45, 799.9999999999998, 711.1111111111112)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='-3.2894736842105265'
          y='752.2660818713451'
          transform='rotate(45, 0, 755.5555555555557)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='43.76934984520124'
          y='752.2660818713451'
          transform='rotate(45, 47.05882352941177, 755.5555555555557)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='90.82817337461302'
          y='752.2660818713451'
          transform='rotate(45, 94.11764705882354, 755.5555555555557)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='137.88699690402478'
          y='752.2660818713451'
          transform='rotate(45, 141.1764705882353, 755.5555555555557)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='184.94582043343655'
          y='752.2660818713451'
          transform='rotate(45, 188.23529411764707, 755.5555555555557)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='232.00464396284832'
          y='752.2660818713451'
          transform='rotate(45, 235.29411764705884, 755.5555555555557)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='279.0634674922601'
          y='752.2660818713451'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 282.3529411764706, 755.5555555555557)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='326.12229102167186'
          y='752.2660818713451'
          transform='rotate(45, 329.4117647058824, 755.5555555555557)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='373.1811145510836'
          y='752.2660818713451'
          transform='rotate(45, 376.47058823529414, 755.5555555555557)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='420.2399380804954'
          y='752.2660818713451'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 423.5294117647059, 755.5555555555557)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='467.29876160990716'
          y='752.2660818713451'
          fill='${x}'
          stroke='none'
          transform='rotate(45, 470.5882352941177, 755.5555555555557)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='514.357585139319'
          y='752.2660818713451'
          transform='rotate(45, 517.6470588235295, 755.5555555555557)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='561.4164086687307'
          y='752.2660818713451'
          transform='rotate(45, 564.7058823529412, 755.5555555555557)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='608.4752321981424'
          y='752.2660818713451'
          transform='rotate(45, 611.7647058823529, 755.5555555555557)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='655.5340557275541'
          y='752.2660818713451'
          transform='rotate(45, 658.8235294117646, 755.5555555555557)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='702.5928792569658'
          y='752.2660818713451'
          transform='rotate(45, 705.8823529411764, 755.5555555555557)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='749.6517027863775'
          y='752.2660818713451'
          transform='rotate(45, 752.9411764705881, 755.5555555555557)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='796.7105263157893'
          y='752.2660818713451'
          transform='rotate(45, 799.9999999999998, 755.5555555555557)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='-3.2894736842105265'
          y='796.7105263157896'
          transform='rotate(45, 0, 800.0000000000001)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='43.76934984520124'
          y='796.7105263157896'
          transform='rotate(45, 47.05882352941177, 800.0000000000001)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='90.82817337461302'
          y='796.7105263157896'
          transform='rotate(45, 94.11764705882354, 800.0000000000001)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='137.88699690402478'
          y='796.7105263157896'
          transform='rotate(45, 141.1764705882353, 800.0000000000001)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='184.94582043343655'
          y='796.7105263157896'
          transform='rotate(45, 188.23529411764707, 800.0000000000001)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='232.00464396284832'
          y='796.7105263157896'
          transform='rotate(45, 235.29411764705884, 800.0000000000001)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='279.0634674922601'
          y='796.7105263157896'
          transform='rotate(45, 282.3529411764706, 800.0000000000001)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='326.12229102167186'
          y='796.7105263157896'
          transform='rotate(45, 329.4117647058824, 800.0000000000001)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='373.1811145510836'
          y='796.7105263157896'
          transform='rotate(45, 376.47058823529414, 800.0000000000001)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='420.2399380804954'
          y='796.7105263157896'
          transform='rotate(45, 423.5294117647059, 800.0000000000001)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='467.29876160990716'
          y='796.7105263157896'
          transform='rotate(45, 470.5882352941177, 800.0000000000001)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='514.357585139319'
          y='796.7105263157896'
          transform='rotate(45, 517.6470588235295, 800.0000000000001)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='561.4164086687307'
          y='796.7105263157896'
          transform='rotate(45, 564.7058823529412, 800.0000000000001)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='608.4752321981424'
          y='796.7105263157896'
          transform='rotate(45, 611.7647058823529, 800.0000000000001)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='655.5340557275541'
          y='796.7105263157896'
          transform='rotate(45, 658.8235294117646, 800.0000000000001)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='702.5928792569658'
          y='796.7105263157896'
          transform='rotate(45, 705.8823529411764, 800.0000000000001)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='749.6517027863775'
          y='796.7105263157896'
          transform='rotate(45, 752.9411764705881, 800.0000000000001)'
        ></rect>
        <rect
          width='6.578947368421053'
          height='6.578947368421053'
          x='796.7105263157893'
          y='796.7105263157896'
          transform='rotate(45, 799.9999999999998, 800.0000000000001)'
        ></rect>
      </g>
    </svg>`,({color0:n="#000000"})=>`<svg
      xmlns='http://www.w3.org/2000/svg'
      version='1.1'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='0 0 800 800'
      width='800'
      height='800'
    >
      <g stroke-width='0.75' stroke='${n}' fill='none'>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='0'
          y='0'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='0'
          cy='0'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='53.333333333333336'
          y='0'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='53.333333333333336'
          cy='0'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='106.66666666666667'
          y='0'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='106.66666666666667'
          cy='0'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='160'
          y='0'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='160'
          cy='0'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='213.33333333333334'
          y='0'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='213.33333333333334'
          cy='0'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='266.6666666666667'
          y='0'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='266.6666666666667'
          cy='0'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='320'
          y='0'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='320'
          cy='0'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='373.3333333333333'
          y='0'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='373.3333333333333'
          cy='0'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='426.66666666666663'
          y='0'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='426.66666666666663'
          cy='0'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='479.99999999999994'
          y='0'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='479.99999999999994'
          cy='0'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='533.3333333333333'
          y='0'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='533.3333333333333'
          cy='0'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='586.6666666666666'
          y='0'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='586.6666666666666'
          cy='0'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='640'
          y='0'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='640'
          cy='0'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='693.3333333333334'
          y='0'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='693.3333333333334'
          cy='0'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='746.6666666666667'
          y='0'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='746.6666666666667'
          cy='0'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='800.0000000000001'
          y='0'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='800.0000000000001'
          cy='0'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='0'
          y='57.142857142857146'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='0'
          cy='57.142857142857146'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='53.333333333333336'
          y='57.142857142857146'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='53.333333333333336'
          cy='57.142857142857146'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='106.66666666666667'
          y='57.142857142857146'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='106.66666666666667'
          cy='57.142857142857146'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='160'
          y='57.142857142857146'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='160'
          cy='57.142857142857146'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='213.33333333333334'
          y='57.142857142857146'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='213.33333333333334'
          cy='57.142857142857146'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='266.6666666666667'
          y='57.142857142857146'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='266.6666666666667'
          cy='57.142857142857146'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='320'
          y='57.142857142857146'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='320'
          cy='57.142857142857146'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='373.3333333333333'
          y='57.142857142857146'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='373.3333333333333'
          cy='57.142857142857146'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='426.66666666666663'
          y='57.142857142857146'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='426.66666666666663'
          cy='57.142857142857146'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='479.99999999999994'
          y='57.142857142857146'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='479.99999999999994'
          cy='57.142857142857146'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='533.3333333333333'
          y='57.142857142857146'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='533.3333333333333'
          cy='57.142857142857146'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='586.6666666666666'
          y='57.142857142857146'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='586.6666666666666'
          cy='57.142857142857146'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='640'
          y='57.142857142857146'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='640'
          cy='57.142857142857146'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='693.3333333333334'
          y='57.142857142857146'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='693.3333333333334'
          cy='57.142857142857146'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='746.6666666666667'
          y='57.142857142857146'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='746.6666666666667'
          cy='57.142857142857146'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='800.0000000000001'
          y='57.142857142857146'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='800.0000000000001'
          cy='57.142857142857146'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='0'
          y='114.28571428571429'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='0'
          cy='114.28571428571429'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='53.333333333333336'
          y='114.28571428571429'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='53.333333333333336'
          cy='114.28571428571429'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='106.66666666666667'
          y='114.28571428571429'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='106.66666666666667'
          cy='114.28571428571429'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='160'
          y='114.28571428571429'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='160'
          cy='114.28571428571429'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='213.33333333333334'
          y='114.28571428571429'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='213.33333333333334'
          cy='114.28571428571429'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='266.6666666666667'
          y='114.28571428571429'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='266.6666666666667'
          cy='114.28571428571429'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='320'
          y='114.28571428571429'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='320'
          cy='114.28571428571429'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='373.3333333333333'
          y='114.28571428571429'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='373.3333333333333'
          cy='114.28571428571429'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='426.66666666666663'
          y='114.28571428571429'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='426.66666666666663'
          cy='114.28571428571429'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='479.99999999999994'
          y='114.28571428571429'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='479.99999999999994'
          cy='114.28571428571429'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='533.3333333333333'
          y='114.28571428571429'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='533.3333333333333'
          cy='114.28571428571429'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='586.6666666666666'
          y='114.28571428571429'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='586.6666666666666'
          cy='114.28571428571429'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='640'
          y='114.28571428571429'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='640'
          cy='114.28571428571429'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='693.3333333333334'
          y='114.28571428571429'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='693.3333333333334'
          cy='114.28571428571429'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='746.6666666666667'
          y='114.28571428571429'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='746.6666666666667'
          cy='114.28571428571429'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='800.0000000000001'
          y='114.28571428571429'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='800.0000000000001'
          cy='114.28571428571429'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='0'
          y='171.42857142857144'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='0'
          cy='171.42857142857144'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='53.333333333333336'
          y='171.42857142857144'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='53.333333333333336'
          cy='171.42857142857144'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='106.66666666666667'
          y='171.42857142857144'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='106.66666666666667'
          cy='171.42857142857144'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='160'
          y='171.42857142857144'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='160'
          cy='171.42857142857144'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='213.33333333333334'
          y='171.42857142857144'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='213.33333333333334'
          cy='171.42857142857144'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='266.6666666666667'
          y='171.42857142857144'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='266.6666666666667'
          cy='171.42857142857144'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='320'
          y='171.42857142857144'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='320'
          cy='171.42857142857144'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='373.3333333333333'
          y='171.42857142857144'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='373.3333333333333'
          cy='171.42857142857144'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='426.66666666666663'
          y='171.42857142857144'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='426.66666666666663'
          cy='171.42857142857144'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='479.99999999999994'
          y='171.42857142857144'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='479.99999999999994'
          cy='171.42857142857144'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='533.3333333333333'
          y='171.42857142857144'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='533.3333333333333'
          cy='171.42857142857144'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='586.6666666666666'
          y='171.42857142857144'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='586.6666666666666'
          cy='171.42857142857144'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='640'
          y='171.42857142857144'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='640'
          cy='171.42857142857144'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='693.3333333333334'
          y='171.42857142857144'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='693.3333333333334'
          cy='171.42857142857144'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='746.6666666666667'
          y='171.42857142857144'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='746.6666666666667'
          cy='171.42857142857144'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='800.0000000000001'
          y='171.42857142857144'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='800.0000000000001'
          cy='171.42857142857144'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='0'
          y='228.57142857142858'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='0'
          cy='228.57142857142858'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='53.333333333333336'
          y='228.57142857142858'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='53.333333333333336'
          cy='228.57142857142858'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='106.66666666666667'
          y='228.57142857142858'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='106.66666666666667'
          cy='228.57142857142858'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='160'
          y='228.57142857142858'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='160'
          cy='228.57142857142858'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='213.33333333333334'
          y='228.57142857142858'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='213.33333333333334'
          cy='228.57142857142858'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='266.6666666666667'
          y='228.57142857142858'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='266.6666666666667'
          cy='228.57142857142858'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='320'
          y='228.57142857142858'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='320'
          cy='228.57142857142858'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='373.3333333333333'
          y='228.57142857142858'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='373.3333333333333'
          cy='228.57142857142858'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='426.66666666666663'
          y='228.57142857142858'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='426.66666666666663'
          cy='228.57142857142858'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='479.99999999999994'
          y='228.57142857142858'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='479.99999999999994'
          cy='228.57142857142858'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='533.3333333333333'
          y='228.57142857142858'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='533.3333333333333'
          cy='228.57142857142858'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='586.6666666666666'
          y='228.57142857142858'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='586.6666666666666'
          cy='228.57142857142858'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='640'
          y='228.57142857142858'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='640'
          cy='228.57142857142858'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='693.3333333333334'
          y='228.57142857142858'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='693.3333333333334'
          cy='228.57142857142858'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='746.6666666666667'
          y='228.57142857142858'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='746.6666666666667'
          cy='228.57142857142858'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='800.0000000000001'
          y='228.57142857142858'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='800.0000000000001'
          cy='228.57142857142858'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='0'
          y='285.7142857142857'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='0'
          cy='285.7142857142857'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='53.333333333333336'
          y='285.7142857142857'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='53.333333333333336'
          cy='285.7142857142857'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='106.66666666666667'
          y='285.7142857142857'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='106.66666666666667'
          cy='285.7142857142857'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='160'
          y='285.7142857142857'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='160'
          cy='285.7142857142857'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='213.33333333333334'
          y='285.7142857142857'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='213.33333333333334'
          cy='285.7142857142857'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='266.6666666666667'
          y='285.7142857142857'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='266.6666666666667'
          cy='285.7142857142857'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='320'
          y='285.7142857142857'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='320'
          cy='285.7142857142857'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='373.3333333333333'
          y='285.7142857142857'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='373.3333333333333'
          cy='285.7142857142857'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='426.66666666666663'
          y='285.7142857142857'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='426.66666666666663'
          cy='285.7142857142857'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='479.99999999999994'
          y='285.7142857142857'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='479.99999999999994'
          cy='285.7142857142857'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='533.3333333333333'
          y='285.7142857142857'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='533.3333333333333'
          cy='285.7142857142857'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='586.6666666666666'
          y='285.7142857142857'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='586.6666666666666'
          cy='285.7142857142857'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='640'
          y='285.7142857142857'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='640'
          cy='285.7142857142857'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='693.3333333333334'
          y='285.7142857142857'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='693.3333333333334'
          cy='285.7142857142857'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='746.6666666666667'
          y='285.7142857142857'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='746.6666666666667'
          cy='285.7142857142857'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='800.0000000000001'
          y='285.7142857142857'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='800.0000000000001'
          cy='285.7142857142857'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='0'
          y='342.8571428571429'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='0'
          cy='342.8571428571429'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='53.333333333333336'
          y='342.8571428571429'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='53.333333333333336'
          cy='342.8571428571429'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='106.66666666666667'
          y='342.8571428571429'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='106.66666666666667'
          cy='342.8571428571429'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='160'
          y='342.8571428571429'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='160'
          cy='342.8571428571429'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='213.33333333333334'
          y='342.8571428571429'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='213.33333333333334'
          cy='342.8571428571429'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='266.6666666666667'
          y='342.8571428571429'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='266.6666666666667'
          cy='342.8571428571429'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='320'
          y='342.8571428571429'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='320'
          cy='342.8571428571429'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='373.3333333333333'
          y='342.8571428571429'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='373.3333333333333'
          cy='342.8571428571429'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='426.66666666666663'
          y='342.8571428571429'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='426.66666666666663'
          cy='342.8571428571429'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='479.99999999999994'
          y='342.8571428571429'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='479.99999999999994'
          cy='342.8571428571429'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='533.3333333333333'
          y='342.8571428571429'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='533.3333333333333'
          cy='342.8571428571429'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='586.6666666666666'
          y='342.8571428571429'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='586.6666666666666'
          cy='342.8571428571429'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='640'
          y='342.8571428571429'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='640'
          cy='342.8571428571429'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='693.3333333333334'
          y='342.8571428571429'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='693.3333333333334'
          cy='342.8571428571429'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='746.6666666666667'
          y='342.8571428571429'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='746.6666666666667'
          cy='342.8571428571429'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='800.0000000000001'
          y='342.8571428571429'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='800.0000000000001'
          cy='342.8571428571429'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='0'
          y='400.00000000000006'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='0'
          cy='400.00000000000006'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='53.333333333333336'
          y='400.00000000000006'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='53.333333333333336'
          cy='400.00000000000006'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='106.66666666666667'
          y='400.00000000000006'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='106.66666666666667'
          cy='400.00000000000006'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='160'
          y='400.00000000000006'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='160'
          cy='400.00000000000006'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='213.33333333333334'
          y='400.00000000000006'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='213.33333333333334'
          cy='400.00000000000006'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='266.6666666666667'
          y='400.00000000000006'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='266.6666666666667'
          cy='400.00000000000006'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='320'
          y='400.00000000000006'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='320'
          cy='400.00000000000006'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='373.3333333333333'
          y='400.00000000000006'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='373.3333333333333'
          cy='400.00000000000006'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='426.66666666666663'
          y='400.00000000000006'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='426.66666666666663'
          cy='400.00000000000006'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='479.99999999999994'
          y='400.00000000000006'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='479.99999999999994'
          cy='400.00000000000006'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='533.3333333333333'
          y='400.00000000000006'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='533.3333333333333'
          cy='400.00000000000006'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='586.6666666666666'
          y='400.00000000000006'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='586.6666666666666'
          cy='400.00000000000006'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='640'
          y='400.00000000000006'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='640'
          cy='400.00000000000006'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='693.3333333333334'
          y='400.00000000000006'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='693.3333333333334'
          cy='400.00000000000006'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='746.6666666666667'
          y='400.00000000000006'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='746.6666666666667'
          cy='400.00000000000006'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='800.0000000000001'
          y='400.00000000000006'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='800.0000000000001'
          cy='400.00000000000006'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='0'
          y='457.1428571428572'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='0'
          cy='457.1428571428572'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='53.333333333333336'
          y='457.1428571428572'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='53.333333333333336'
          cy='457.1428571428572'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='106.66666666666667'
          y='457.1428571428572'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='106.66666666666667'
          cy='457.1428571428572'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='160'
          y='457.1428571428572'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='160'
          cy='457.1428571428572'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='213.33333333333334'
          y='457.1428571428572'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='213.33333333333334'
          cy='457.1428571428572'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='266.6666666666667'
          y='457.1428571428572'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='266.6666666666667'
          cy='457.1428571428572'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='320'
          y='457.1428571428572'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='320'
          cy='457.1428571428572'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='373.3333333333333'
          y='457.1428571428572'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='373.3333333333333'
          cy='457.1428571428572'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='426.66666666666663'
          y='457.1428571428572'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='426.66666666666663'
          cy='457.1428571428572'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='479.99999999999994'
          y='457.1428571428572'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='479.99999999999994'
          cy='457.1428571428572'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='533.3333333333333'
          y='457.1428571428572'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='533.3333333333333'
          cy='457.1428571428572'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='586.6666666666666'
          y='457.1428571428572'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='586.6666666666666'
          cy='457.1428571428572'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='640'
          y='457.1428571428572'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='640'
          cy='457.1428571428572'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='693.3333333333334'
          y='457.1428571428572'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='693.3333333333334'
          cy='457.1428571428572'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='746.6666666666667'
          y='457.1428571428572'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='746.6666666666667'
          cy='457.1428571428572'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='800.0000000000001'
          y='457.1428571428572'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='800.0000000000001'
          cy='457.1428571428572'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='0'
          y='514.2857142857143'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='0'
          cy='514.2857142857143'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='53.333333333333336'
          y='514.2857142857143'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='53.333333333333336'
          cy='514.2857142857143'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='106.66666666666667'
          y='514.2857142857143'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='106.66666666666667'
          cy='514.2857142857143'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='160'
          y='514.2857142857143'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='160'
          cy='514.2857142857143'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='213.33333333333334'
          y='514.2857142857143'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='213.33333333333334'
          cy='514.2857142857143'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='266.6666666666667'
          y='514.2857142857143'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='266.6666666666667'
          cy='514.2857142857143'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='320'
          y='514.2857142857143'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='320'
          cy='514.2857142857143'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='373.3333333333333'
          y='514.2857142857143'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='373.3333333333333'
          cy='514.2857142857143'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='426.66666666666663'
          y='514.2857142857143'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='426.66666666666663'
          cy='514.2857142857143'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='479.99999999999994'
          y='514.2857142857143'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='479.99999999999994'
          cy='514.2857142857143'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='533.3333333333333'
          y='514.2857142857143'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='533.3333333333333'
          cy='514.2857142857143'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='586.6666666666666'
          y='514.2857142857143'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='586.6666666666666'
          cy='514.2857142857143'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='640'
          y='514.2857142857143'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='640'
          cy='514.2857142857143'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='693.3333333333334'
          y='514.2857142857143'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='693.3333333333334'
          cy='514.2857142857143'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='746.6666666666667'
          y='514.2857142857143'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='746.6666666666667'
          cy='514.2857142857143'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='800.0000000000001'
          y='514.2857142857143'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='800.0000000000001'
          cy='514.2857142857143'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='0'
          y='571.4285714285714'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='0'
          cy='571.4285714285714'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='53.333333333333336'
          y='571.4285714285714'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='53.333333333333336'
          cy='571.4285714285714'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='106.66666666666667'
          y='571.4285714285714'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='106.66666666666667'
          cy='571.4285714285714'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='160'
          y='571.4285714285714'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='160'
          cy='571.4285714285714'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='213.33333333333334'
          y='571.4285714285714'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='213.33333333333334'
          cy='571.4285714285714'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='266.6666666666667'
          y='571.4285714285714'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='266.6666666666667'
          cy='571.4285714285714'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='320'
          y='571.4285714285714'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='320'
          cy='571.4285714285714'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='373.3333333333333'
          y='571.4285714285714'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='373.3333333333333'
          cy='571.4285714285714'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='426.66666666666663'
          y='571.4285714285714'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='426.66666666666663'
          cy='571.4285714285714'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='479.99999999999994'
          y='571.4285714285714'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='479.99999999999994'
          cy='571.4285714285714'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='533.3333333333333'
          y='571.4285714285714'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='533.3333333333333'
          cy='571.4285714285714'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='586.6666666666666'
          y='571.4285714285714'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='586.6666666666666'
          cy='571.4285714285714'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='640'
          y='571.4285714285714'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='640'
          cy='571.4285714285714'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='693.3333333333334'
          y='571.4285714285714'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='693.3333333333334'
          cy='571.4285714285714'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='746.6666666666667'
          y='571.4285714285714'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='746.6666666666667'
          cy='571.4285714285714'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='800.0000000000001'
          y='571.4285714285714'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='800.0000000000001'
          cy='571.4285714285714'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='0'
          y='628.5714285714286'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='0'
          cy='628.5714285714286'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='53.333333333333336'
          y='628.5714285714286'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='53.333333333333336'
          cy='628.5714285714286'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='106.66666666666667'
          y='628.5714285714286'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='106.66666666666667'
          cy='628.5714285714286'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='160'
          y='628.5714285714286'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='160'
          cy='628.5714285714286'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='213.33333333333334'
          y='628.5714285714286'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='213.33333333333334'
          cy='628.5714285714286'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='266.6666666666667'
          y='628.5714285714286'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='266.6666666666667'
          cy='628.5714285714286'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='320'
          y='628.5714285714286'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='320'
          cy='628.5714285714286'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='373.3333333333333'
          y='628.5714285714286'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='373.3333333333333'
          cy='628.5714285714286'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='426.66666666666663'
          y='628.5714285714286'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='426.66666666666663'
          cy='628.5714285714286'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='479.99999999999994'
          y='628.5714285714286'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='479.99999999999994'
          cy='628.5714285714286'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='533.3333333333333'
          y='628.5714285714286'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='533.3333333333333'
          cy='628.5714285714286'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='586.6666666666666'
          y='628.5714285714286'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='586.6666666666666'
          cy='628.5714285714286'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='640'
          y='628.5714285714286'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='640'
          cy='628.5714285714286'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='693.3333333333334'
          y='628.5714285714286'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='693.3333333333334'
          cy='628.5714285714286'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='746.6666666666667'
          y='628.5714285714286'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='746.6666666666667'
          cy='628.5714285714286'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='800.0000000000001'
          y='628.5714285714286'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='800.0000000000001'
          cy='628.5714285714286'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='0'
          y='685.7142857142857'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='0'
          cy='685.7142857142857'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='53.333333333333336'
          y='685.7142857142857'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='53.333333333333336'
          cy='685.7142857142857'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='106.66666666666667'
          y='685.7142857142857'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='106.66666666666667'
          cy='685.7142857142857'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='160'
          y='685.7142857142857'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='160'
          cy='685.7142857142857'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='213.33333333333334'
          y='685.7142857142857'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='213.33333333333334'
          cy='685.7142857142857'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='266.6666666666667'
          y='685.7142857142857'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='266.6666666666667'
          cy='685.7142857142857'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='320'
          y='685.7142857142857'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='320'
          cy='685.7142857142857'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='373.3333333333333'
          y='685.7142857142857'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='373.3333333333333'
          cy='685.7142857142857'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='426.66666666666663'
          y='685.7142857142857'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='426.66666666666663'
          cy='685.7142857142857'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='479.99999999999994'
          y='685.7142857142857'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='479.99999999999994'
          cy='685.7142857142857'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='533.3333333333333'
          y='685.7142857142857'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='533.3333333333333'
          cy='685.7142857142857'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='586.6666666666666'
          y='685.7142857142857'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='586.6666666666666'
          cy='685.7142857142857'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='640'
          y='685.7142857142857'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='640'
          cy='685.7142857142857'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='693.3333333333334'
          y='685.7142857142857'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='693.3333333333334'
          cy='685.7142857142857'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='746.6666666666667'
          y='685.7142857142857'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='746.6666666666667'
          cy='685.7142857142857'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='800.0000000000001'
          y='685.7142857142857'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='800.0000000000001'
          cy='685.7142857142857'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='0'
          y='742.8571428571428'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='0'
          cy='742.8571428571428'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='53.333333333333336'
          y='742.8571428571428'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='53.333333333333336'
          cy='742.8571428571428'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='106.66666666666667'
          y='742.8571428571428'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='106.66666666666667'
          cy='742.8571428571428'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='160'
          y='742.8571428571428'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='160'
          cy='742.8571428571428'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='213.33333333333334'
          y='742.8571428571428'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='213.33333333333334'
          cy='742.8571428571428'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='266.6666666666667'
          y='742.8571428571428'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='266.6666666666667'
          cy='742.8571428571428'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='320'
          y='742.8571428571428'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='320'
          cy='742.8571428571428'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='373.3333333333333'
          y='742.8571428571428'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='373.3333333333333'
          cy='742.8571428571428'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='426.66666666666663'
          y='742.8571428571428'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='426.66666666666663'
          cy='742.8571428571428'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='479.99999999999994'
          y='742.8571428571428'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='479.99999999999994'
          cy='742.8571428571428'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='533.3333333333333'
          y='742.8571428571428'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='533.3333333333333'
          cy='742.8571428571428'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='586.6666666666666'
          y='742.8571428571428'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='586.6666666666666'
          cy='742.8571428571428'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='640'
          y='742.8571428571428'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='640'
          cy='742.8571428571428'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='693.3333333333334'
          y='742.8571428571428'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='693.3333333333334'
          cy='742.8571428571428'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='746.6666666666667'
          y='742.8571428571428'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='746.6666666666667'
          cy='742.8571428571428'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='800.0000000000001'
          y='742.8571428571428'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='800.0000000000001'
          cy='742.8571428571428'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='0'
          y='799.9999999999999'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='0'
          cy='799.9999999999999'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='53.333333333333336'
          y='799.9999999999999'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='53.333333333333336'
          cy='799.9999999999999'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='106.66666666666667'
          y='799.9999999999999'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='106.66666666666667'
          cy='799.9999999999999'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='160'
          y='799.9999999999999'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='160'
          cy='799.9999999999999'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='213.33333333333334'
          y='799.9999999999999'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='213.33333333333334'
          cy='799.9999999999999'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='266.6666666666667'
          y='799.9999999999999'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='266.6666666666667'
          cy='799.9999999999999'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='320'
          y='799.9999999999999'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='320'
          cy='799.9999999999999'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='373.3333333333333'
          y='799.9999999999999'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='373.3333333333333'
          cy='799.9999999999999'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='426.66666666666663'
          y='799.9999999999999'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='426.66666666666663'
          cy='799.9999999999999'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='479.99999999999994'
          y='799.9999999999999'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='479.99999999999994'
          cy='799.9999999999999'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='533.3333333333333'
          y='799.9999999999999'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='533.3333333333333'
          cy='799.9999999999999'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='586.6666666666666'
          y='799.9999999999999'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='586.6666666666666'
          cy='799.9999999999999'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='640'
          y='799.9999999999999'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='640'
          cy='799.9999999999999'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='693.3333333333334'
          y='799.9999999999999'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='693.3333333333334'
          cy='799.9999999999999'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='746.6666666666667'
          y='799.9999999999999'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='746.6666666666667'
          cy='799.9999999999999'
          fill='${n}'
          stroke='none'
        ></circle>
        <rect
          width='53.333333333333336'
          height='57.142857142857146'
          x='800.0000000000001'
          y='799.9999999999999'
          opacity='0.15'
        ></rect>
        <circle
          r='4.342105263157895'
          cx='800.0000000000001'
          cy='799.9999999999999'
          fill='${n}'
          stroke='none'
        ></circle>
      </g>
    </svg>`,({color0:n="#000000"})=>`<svg
      xmlns='http://www.w3.org/2000/svg'
      version='1.1'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='0 0 800 800'
      width='800'
      height='800'
    >
      <g stroke-width='0.75' stroke='${n}' fill='none'>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='-13.333333333333334'
          y='-0.8157894736842105'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='-0.8157894736842105'
          y='-13.333333333333334'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='40'
          y='-0.8157894736842105'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='52.51754385964912'
          y='-13.333333333333334'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='93.33333333333334'
          y='-0.8157894736842105'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='105.85087719298247'
          y='-13.333333333333334'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='146.66666666666666'
          y='-0.8157894736842105'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='159.18421052631578'
          y='-13.333333333333334'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='200'
          y='-0.8157894736842105'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='212.51754385964912'
          y='-13.333333333333334'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='253.33333333333334'
          y='-0.8157894736842105'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='265.85087719298247'
          y='-13.333333333333334'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='306.6666666666667'
          y='-0.8157894736842105'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='319.1842105263158'
          y='-13.333333333333334'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='360'
          y='-0.8157894736842105'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='372.5175438596491'
          y='-13.333333333333334'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='413.3333333333333'
          y='-0.8157894736842105'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='425.8508771929824'
          y='-13.333333333333334'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='466.66666666666663'
          y='-0.8157894736842105'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='479.1842105263157'
          y='-13.333333333333334'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='519.9999999999999'
          y='-0.8157894736842105'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='532.5175438596491'
          y='-13.333333333333334'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='573.3333333333333'
          y='-0.8157894736842105'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='585.8508771929825'
          y='-13.333333333333334'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='626.6666666666666'
          y='-0.8157894736842105'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='639.1842105263158'
          y='-13.333333333333334'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='680'
          y='-0.8157894736842105'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='692.5175438596492'
          y='-13.333333333333334'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='733.3333333333334'
          y='-0.8157894736842105'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='745.8508771929826'
          y='-13.333333333333334'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='786.6666666666667'
          y='-0.8157894736842105'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='799.184210526316'
          y='-13.333333333333334'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='-13.333333333333334'
          y='56.32706766917293'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='-0.8157894736842105'
          y='43.80952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='40'
          y='56.32706766917293'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='52.51754385964912'
          y='43.80952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='93.33333333333334'
          y='56.32706766917293'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='105.85087719298247'
          y='43.80952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='146.66666666666666'
          y='56.32706766917293'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='159.18421052631578'
          y='43.80952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='200'
          y='56.32706766917293'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='212.51754385964912'
          y='43.80952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='253.33333333333334'
          y='56.32706766917293'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='265.85087719298247'
          y='43.80952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='306.6666666666667'
          y='56.32706766917293'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='319.1842105263158'
          y='43.80952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='360'
          y='56.32706766917293'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='372.5175438596491'
          y='43.80952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='413.3333333333333'
          y='56.32706766917293'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='425.8508771929824'
          y='43.80952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='466.66666666666663'
          y='56.32706766917293'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='479.1842105263157'
          y='43.80952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='519.9999999999999'
          y='56.32706766917293'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='532.5175438596491'
          y='43.80952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='573.3333333333333'
          y='56.32706766917293'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='585.8508771929825'
          y='43.80952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='626.6666666666666'
          y='56.32706766917293'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='639.1842105263158'
          y='43.80952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='680'
          y='56.32706766917293'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='692.5175438596492'
          y='43.80952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='733.3333333333334'
          y='56.32706766917293'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='745.8508771929826'
          y='43.80952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='786.6666666666667'
          y='56.32706766917293'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='799.184210526316'
          y='43.80952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='-13.333333333333334'
          y='113.46992481203009'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='-0.8157894736842105'
          y='100.95238095238096'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='40'
          y='113.46992481203009'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='52.51754385964912'
          y='100.95238095238096'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='93.33333333333334'
          y='113.46992481203009'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='105.85087719298247'
          y='100.95238095238096'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='146.66666666666666'
          y='113.46992481203009'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='159.18421052631578'
          y='100.95238095238096'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='200'
          y='113.46992481203009'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='212.51754385964912'
          y='100.95238095238096'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='253.33333333333334'
          y='113.46992481203009'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='265.85087719298247'
          y='100.95238095238096'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='306.6666666666667'
          y='113.46992481203009'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='319.1842105263158'
          y='100.95238095238096'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='360'
          y='113.46992481203009'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='372.5175438596491'
          y='100.95238095238096'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='413.3333333333333'
          y='113.46992481203009'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='425.8508771929824'
          y='100.95238095238096'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='466.66666666666663'
          y='113.46992481203009'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='479.1842105263157'
          y='100.95238095238096'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='519.9999999999999'
          y='113.46992481203009'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='532.5175438596491'
          y='100.95238095238096'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='573.3333333333333'
          y='113.46992481203009'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='585.8508771929825'
          y='100.95238095238096'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='626.6666666666666'
          y='113.46992481203009'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='639.1842105263158'
          y='100.95238095238096'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='680'
          y='113.46992481203009'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='692.5175438596492'
          y='100.95238095238096'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='733.3333333333334'
          y='113.46992481203009'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='745.8508771929826'
          y='100.95238095238096'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='786.6666666666667'
          y='113.46992481203009'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='799.184210526316'
          y='100.95238095238096'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='-13.333333333333334'
          y='170.61278195488723'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='-0.8157894736842105'
          y='158.0952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='40'
          y='170.61278195488723'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='52.51754385964912'
          y='158.0952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='93.33333333333334'
          y='170.61278195488723'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='105.85087719298247'
          y='158.0952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='146.66666666666666'
          y='170.61278195488723'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='159.18421052631578'
          y='158.0952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='200'
          y='170.61278195488723'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='212.51754385964912'
          y='158.0952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='253.33333333333334'
          y='170.61278195488723'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='265.85087719298247'
          y='158.0952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='306.6666666666667'
          y='170.61278195488723'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='319.1842105263158'
          y='158.0952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='360'
          y='170.61278195488723'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='372.5175438596491'
          y='158.0952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='413.3333333333333'
          y='170.61278195488723'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='425.8508771929824'
          y='158.0952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='466.66666666666663'
          y='170.61278195488723'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='479.1842105263157'
          y='158.0952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='519.9999999999999'
          y='170.61278195488723'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='532.5175438596491'
          y='158.0952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='573.3333333333333'
          y='170.61278195488723'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='585.8508771929825'
          y='158.0952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='626.6666666666666'
          y='170.61278195488723'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='639.1842105263158'
          y='158.0952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='680'
          y='170.61278195488723'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='692.5175438596492'
          y='158.0952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='733.3333333333334'
          y='170.61278195488723'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='745.8508771929826'
          y='158.0952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='786.6666666666667'
          y='170.61278195488723'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='799.184210526316'
          y='158.0952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='-13.333333333333334'
          y='227.75563909774436'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='-0.8157894736842105'
          y='215.23809523809524'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='40'
          y='227.75563909774436'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='52.51754385964912'
          y='215.23809523809524'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='93.33333333333334'
          y='227.75563909774436'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='105.85087719298247'
          y='215.23809523809524'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='146.66666666666666'
          y='227.75563909774436'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='159.18421052631578'
          y='215.23809523809524'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='200'
          y='227.75563909774436'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='212.51754385964912'
          y='215.23809523809524'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='253.33333333333334'
          y='227.75563909774436'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='265.85087719298247'
          y='215.23809523809524'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='306.6666666666667'
          y='227.75563909774436'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='319.1842105263158'
          y='215.23809523809524'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='360'
          y='227.75563909774436'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='372.5175438596491'
          y='215.23809523809524'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='413.3333333333333'
          y='227.75563909774436'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='425.8508771929824'
          y='215.23809523809524'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='466.66666666666663'
          y='227.75563909774436'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='479.1842105263157'
          y='215.23809523809524'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='519.9999999999999'
          y='227.75563909774436'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='532.5175438596491'
          y='215.23809523809524'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='573.3333333333333'
          y='227.75563909774436'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='585.8508771929825'
          y='215.23809523809524'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='626.6666666666666'
          y='227.75563909774436'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='639.1842105263158'
          y='215.23809523809524'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='680'
          y='227.75563909774436'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='692.5175438596492'
          y='215.23809523809524'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='733.3333333333334'
          y='227.75563909774436'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='745.8508771929826'
          y='215.23809523809524'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='786.6666666666667'
          y='227.75563909774436'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='799.184210526316'
          y='215.23809523809524'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='-13.333333333333334'
          y='284.8984962406015'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='-0.8157894736842105'
          y='272.3809523809524'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='40'
          y='284.8984962406015'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='52.51754385964912'
          y='272.3809523809524'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='93.33333333333334'
          y='284.8984962406015'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='105.85087719298247'
          y='272.3809523809524'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='146.66666666666666'
          y='284.8984962406015'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='159.18421052631578'
          y='272.3809523809524'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='200'
          y='284.8984962406015'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='212.51754385964912'
          y='272.3809523809524'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='253.33333333333334'
          y='284.8984962406015'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='265.85087719298247'
          y='272.3809523809524'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='306.6666666666667'
          y='284.8984962406015'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='319.1842105263158'
          y='272.3809523809524'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='360'
          y='284.8984962406015'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='372.5175438596491'
          y='272.3809523809524'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='413.3333333333333'
          y='284.8984962406015'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='425.8508771929824'
          y='272.3809523809524'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='466.66666666666663'
          y='284.8984962406015'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='479.1842105263157'
          y='272.3809523809524'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='519.9999999999999'
          y='284.8984962406015'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='532.5175438596491'
          y='272.3809523809524'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='573.3333333333333'
          y='284.8984962406015'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='585.8508771929825'
          y='272.3809523809524'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='626.6666666666666'
          y='284.8984962406015'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='639.1842105263158'
          y='272.3809523809524'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='680'
          y='284.8984962406015'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='692.5175438596492'
          y='272.3809523809524'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='733.3333333333334'
          y='284.8984962406015'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='745.8508771929826'
          y='272.3809523809524'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='786.6666666666667'
          y='284.8984962406015'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='799.184210526316'
          y='272.3809523809524'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='-13.333333333333334'
          y='342.04135338345867'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='-0.8157894736842105'
          y='329.5238095238096'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='40'
          y='342.04135338345867'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='52.51754385964912'
          y='329.5238095238096'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='93.33333333333334'
          y='342.04135338345867'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='105.85087719298247'
          y='329.5238095238096'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='146.66666666666666'
          y='342.04135338345867'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='159.18421052631578'
          y='329.5238095238096'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='200'
          y='342.04135338345867'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='212.51754385964912'
          y='329.5238095238096'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='253.33333333333334'
          y='342.04135338345867'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='265.85087719298247'
          y='329.5238095238096'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='306.6666666666667'
          y='342.04135338345867'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='319.1842105263158'
          y='329.5238095238096'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='360'
          y='342.04135338345867'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='372.5175438596491'
          y='329.5238095238096'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='413.3333333333333'
          y='342.04135338345867'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='425.8508771929824'
          y='329.5238095238096'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='466.66666666666663'
          y='342.04135338345867'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='479.1842105263157'
          y='329.5238095238096'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='519.9999999999999'
          y='342.04135338345867'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='532.5175438596491'
          y='329.5238095238096'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='573.3333333333333'
          y='342.04135338345867'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='585.8508771929825'
          y='329.5238095238096'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='626.6666666666666'
          y='342.04135338345867'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='639.1842105263158'
          y='329.5238095238096'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='680'
          y='342.04135338345867'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='692.5175438596492'
          y='329.5238095238096'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='733.3333333333334'
          y='342.04135338345867'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='745.8508771929826'
          y='329.5238095238096'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='786.6666666666667'
          y='342.04135338345867'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='799.184210526316'
          y='329.5238095238096'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='-13.333333333333334'
          y='399.18421052631584'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='-0.8157894736842105'
          y='386.66666666666674'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='40'
          y='399.18421052631584'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='52.51754385964912'
          y='386.66666666666674'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='93.33333333333334'
          y='399.18421052631584'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='105.85087719298247'
          y='386.66666666666674'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='146.66666666666666'
          y='399.18421052631584'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='159.18421052631578'
          y='386.66666666666674'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='200'
          y='399.18421052631584'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='212.51754385964912'
          y='386.66666666666674'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='253.33333333333334'
          y='399.18421052631584'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='265.85087719298247'
          y='386.66666666666674'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='306.6666666666667'
          y='399.18421052631584'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='319.1842105263158'
          y='386.66666666666674'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='360'
          y='399.18421052631584'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='372.5175438596491'
          y='386.66666666666674'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='413.3333333333333'
          y='399.18421052631584'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='425.8508771929824'
          y='386.66666666666674'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='466.66666666666663'
          y='399.18421052631584'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='479.1842105263157'
          y='386.66666666666674'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='519.9999999999999'
          y='399.18421052631584'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='532.5175438596491'
          y='386.66666666666674'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='573.3333333333333'
          y='399.18421052631584'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='585.8508771929825'
          y='386.66666666666674'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='626.6666666666666'
          y='399.18421052631584'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='639.1842105263158'
          y='386.66666666666674'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='680'
          y='399.18421052631584'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='692.5175438596492'
          y='386.66666666666674'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='733.3333333333334'
          y='399.18421052631584'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='745.8508771929826'
          y='386.66666666666674'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='786.6666666666667'
          y='399.18421052631584'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='799.184210526316'
          y='386.66666666666674'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='-13.333333333333334'
          y='456.327067669173'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='-0.8157894736842105'
          y='443.8095238095239'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='40'
          y='456.327067669173'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='52.51754385964912'
          y='443.8095238095239'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='93.33333333333334'
          y='456.327067669173'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='105.85087719298247'
          y='443.8095238095239'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='146.66666666666666'
          y='456.327067669173'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='159.18421052631578'
          y='443.8095238095239'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='200'
          y='456.327067669173'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='212.51754385964912'
          y='443.8095238095239'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='253.33333333333334'
          y='456.327067669173'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='265.85087719298247'
          y='443.8095238095239'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='306.6666666666667'
          y='456.327067669173'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='319.1842105263158'
          y='443.8095238095239'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='360'
          y='456.327067669173'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='372.5175438596491'
          y='443.8095238095239'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='413.3333333333333'
          y='456.327067669173'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='425.8508771929824'
          y='443.8095238095239'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='466.66666666666663'
          y='456.327067669173'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='479.1842105263157'
          y='443.8095238095239'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='519.9999999999999'
          y='456.327067669173'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='532.5175438596491'
          y='443.8095238095239'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='573.3333333333333'
          y='456.327067669173'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='585.8508771929825'
          y='443.8095238095239'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='626.6666666666666'
          y='456.327067669173'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='639.1842105263158'
          y='443.8095238095239'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='680'
          y='456.327067669173'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='692.5175438596492'
          y='443.8095238095239'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='733.3333333333334'
          y='456.327067669173'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='745.8508771929826'
          y='443.8095238095239'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='786.6666666666667'
          y='456.327067669173'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='799.184210526316'
          y='443.8095238095239'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='-13.333333333333334'
          y='513.4699248120302'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='-0.8157894736842105'
          y='500.952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='40'
          y='513.4699248120302'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='52.51754385964912'
          y='500.952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='93.33333333333334'
          y='513.4699248120302'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='105.85087719298247'
          y='500.952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='146.66666666666666'
          y='513.4699248120302'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='159.18421052631578'
          y='500.952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='200'
          y='513.4699248120302'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='212.51754385964912'
          y='500.952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='253.33333333333334'
          y='513.4699248120302'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='265.85087719298247'
          y='500.952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='306.6666666666667'
          y='513.4699248120302'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='319.1842105263158'
          y='500.952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='360'
          y='513.4699248120302'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='372.5175438596491'
          y='500.952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='413.3333333333333'
          y='513.4699248120302'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='425.8508771929824'
          y='500.952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='466.66666666666663'
          y='513.4699248120302'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='479.1842105263157'
          y='500.952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='519.9999999999999'
          y='513.4699248120302'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='532.5175438596491'
          y='500.952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='573.3333333333333'
          y='513.4699248120302'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='585.8508771929825'
          y='500.952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='626.6666666666666'
          y='513.4699248120302'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='639.1842105263158'
          y='500.952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='680'
          y='513.4699248120302'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='692.5175438596492'
          y='500.952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='733.3333333333334'
          y='513.4699248120302'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='745.8508771929826'
          y='500.952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='786.6666666666667'
          y='513.4699248120302'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='799.184210526316'
          y='500.952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='-13.333333333333334'
          y='570.6127819548873'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='-0.8157894736842105'
          y='558.0952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='40'
          y='570.6127819548873'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='52.51754385964912'
          y='558.0952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='93.33333333333334'
          y='570.6127819548873'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='105.85087719298247'
          y='558.0952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='146.66666666666666'
          y='570.6127819548873'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='159.18421052631578'
          y='558.0952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='200'
          y='570.6127819548873'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='212.51754385964912'
          y='558.0952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='253.33333333333334'
          y='570.6127819548873'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='265.85087719298247'
          y='558.0952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='306.6666666666667'
          y='570.6127819548873'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='319.1842105263158'
          y='558.0952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='360'
          y='570.6127819548873'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='372.5175438596491'
          y='558.0952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='413.3333333333333'
          y='570.6127819548873'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='425.8508771929824'
          y='558.0952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='466.66666666666663'
          y='570.6127819548873'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='479.1842105263157'
          y='558.0952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='519.9999999999999'
          y='570.6127819548873'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='532.5175438596491'
          y='558.0952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='573.3333333333333'
          y='570.6127819548873'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='585.8508771929825'
          y='558.0952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='626.6666666666666'
          y='570.6127819548873'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='639.1842105263158'
          y='558.0952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='680'
          y='570.6127819548873'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='692.5175438596492'
          y='558.0952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='733.3333333333334'
          y='570.6127819548873'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='745.8508771929826'
          y='558.0952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='786.6666666666667'
          y='570.6127819548873'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='799.184210526316'
          y='558.0952380952381'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='-13.333333333333334'
          y='627.7556390977444'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='-0.8157894736842105'
          y='615.2380952380952'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='40'
          y='627.7556390977444'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='52.51754385964912'
          y='615.2380952380952'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='93.33333333333334'
          y='627.7556390977444'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='105.85087719298247'
          y='615.2380952380952'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='146.66666666666666'
          y='627.7556390977444'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='159.18421052631578'
          y='615.2380952380952'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='200'
          y='627.7556390977444'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='212.51754385964912'
          y='615.2380952380952'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='253.33333333333334'
          y='627.7556390977444'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='265.85087719298247'
          y='615.2380952380952'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='306.6666666666667'
          y='627.7556390977444'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='319.1842105263158'
          y='615.2380952380952'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='360'
          y='627.7556390977444'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='372.5175438596491'
          y='615.2380952380952'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='413.3333333333333'
          y='627.7556390977444'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='425.8508771929824'
          y='615.2380952380952'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='466.66666666666663'
          y='627.7556390977444'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='479.1842105263157'
          y='615.2380952380952'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='519.9999999999999'
          y='627.7556390977444'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='532.5175438596491'
          y='615.2380952380952'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='573.3333333333333'
          y='627.7556390977444'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='585.8508771929825'
          y='615.2380952380952'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='626.6666666666666'
          y='627.7556390977444'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='639.1842105263158'
          y='615.2380952380952'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='680'
          y='627.7556390977444'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='692.5175438596492'
          y='615.2380952380952'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='733.3333333333334'
          y='627.7556390977444'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='745.8508771929826'
          y='615.2380952380952'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='786.6666666666667'
          y='627.7556390977444'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='799.184210526316'
          y='615.2380952380952'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='-13.333333333333334'
          y='684.8984962406015'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='-0.8157894736842105'
          y='672.3809523809523'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='40'
          y='684.8984962406015'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='52.51754385964912'
          y='672.3809523809523'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='93.33333333333334'
          y='684.8984962406015'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='105.85087719298247'
          y='672.3809523809523'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='146.66666666666666'
          y='684.8984962406015'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='159.18421052631578'
          y='672.3809523809523'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='200'
          y='684.8984962406015'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='212.51754385964912'
          y='672.3809523809523'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='253.33333333333334'
          y='684.8984962406015'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='265.85087719298247'
          y='672.3809523809523'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='306.6666666666667'
          y='684.8984962406015'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='319.1842105263158'
          y='672.3809523809523'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='360'
          y='684.8984962406015'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='372.5175438596491'
          y='672.3809523809523'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='413.3333333333333'
          y='684.8984962406015'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='425.8508771929824'
          y='672.3809523809523'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='466.66666666666663'
          y='684.8984962406015'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='479.1842105263157'
          y='672.3809523809523'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='519.9999999999999'
          y='684.8984962406015'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='532.5175438596491'
          y='672.3809523809523'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='573.3333333333333'
          y='684.8984962406015'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='585.8508771929825'
          y='672.3809523809523'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='626.6666666666666'
          y='684.8984962406015'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='639.1842105263158'
          y='672.3809523809523'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='680'
          y='684.8984962406015'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='692.5175438596492'
          y='672.3809523809523'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='733.3333333333334'
          y='684.8984962406015'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='745.8508771929826'
          y='672.3809523809523'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='786.6666666666667'
          y='684.8984962406015'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='799.184210526316'
          y='672.3809523809523'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='-13.333333333333334'
          y='742.0413533834586'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='-0.8157894736842105'
          y='729.5238095238094'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='40'
          y='742.0413533834586'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='52.51754385964912'
          y='729.5238095238094'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='93.33333333333334'
          y='742.0413533834586'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='105.85087719298247'
          y='729.5238095238094'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='146.66666666666666'
          y='742.0413533834586'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='159.18421052631578'
          y='729.5238095238094'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='200'
          y='742.0413533834586'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='212.51754385964912'
          y='729.5238095238094'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='253.33333333333334'
          y='742.0413533834586'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='265.85087719298247'
          y='729.5238095238094'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='306.6666666666667'
          y='742.0413533834586'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='319.1842105263158'
          y='729.5238095238094'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='360'
          y='742.0413533834586'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='372.5175438596491'
          y='729.5238095238094'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='413.3333333333333'
          y='742.0413533834586'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='425.8508771929824'
          y='729.5238095238094'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='466.66666666666663'
          y='742.0413533834586'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='479.1842105263157'
          y='729.5238095238094'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='519.9999999999999'
          y='742.0413533834586'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='532.5175438596491'
          y='729.5238095238094'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='573.3333333333333'
          y='742.0413533834586'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='585.8508771929825'
          y='729.5238095238094'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='626.6666666666666'
          y='742.0413533834586'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='639.1842105263158'
          y='729.5238095238094'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='680'
          y='742.0413533834586'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='692.5175438596492'
          y='729.5238095238094'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='733.3333333333334'
          y='742.0413533834586'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='745.8508771929826'
          y='729.5238095238094'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='786.6666666666667'
          y='742.0413533834586'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='799.184210526316'
          y='729.5238095238094'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='-13.333333333333334'
          y='799.1842105263157'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='-0.8157894736842105'
          y='786.6666666666665'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='40'
          y='799.1842105263157'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='52.51754385964912'
          y='786.6666666666665'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='93.33333333333334'
          y='799.1842105263157'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='105.85087719298247'
          y='786.6666666666665'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='146.66666666666666'
          y='799.1842105263157'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='159.18421052631578'
          y='786.6666666666665'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='200'
          y='799.1842105263157'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='212.51754385964912'
          y='786.6666666666665'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='253.33333333333334'
          y='799.1842105263157'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='265.85087719298247'
          y='786.6666666666665'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='306.6666666666667'
          y='799.1842105263157'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='319.1842105263158'
          y='786.6666666666665'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='360'
          y='799.1842105263157'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='372.5175438596491'
          y='786.6666666666665'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='413.3333333333333'
          y='799.1842105263157'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='425.8508771929824'
          y='786.6666666666665'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='466.66666666666663'
          y='799.1842105263157'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='479.1842105263157'
          y='786.6666666666665'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='519.9999999999999'
          y='799.1842105263157'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='532.5175438596491'
          y='786.6666666666665'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='573.3333333333333'
          y='799.1842105263157'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='585.8508771929825'
          y='786.6666666666665'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='626.6666666666666'
          y='799.1842105263157'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='639.1842105263158'
          y='786.6666666666665'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='680'
          y='799.1842105263157'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='692.5175438596492'
          y='786.6666666666665'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='733.3333333333334'
          y='799.1842105263157'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='745.8508771929826'
          y='786.6666666666665'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='26.666666666666668'
          height='1.631578947368421'
          x='786.6666666666667'
          y='799.1842105263157'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
        <rect
          width='1.631578947368421'
          height='26.666666666666668'
          x='799.184210526316'
          y='786.6666666666665'
          stroke='none'
          fill='${n}'
          rx='0.8157894736842105'
        ></rect>
      </g>
    </svg>`,({color0:n="#000000",color1:x="#00ff00"})=>`<svg
      xmlns='http://www.w3.org/2000/svg'
      version='1.1'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='0 0 800 800'
      width='300'
      height='300'
    >
      <defs>
        <linearGradient
          x1='50%'
          y1='0%'
          x2='50%'
          y2='100%'
          id='rrreflection-grad'
        >
          <stop stop-color='${n}' stop-opacity='1' offset='45%'></stop>
          <stop stop-color='${x}' stop-opacity='1' offset='100%'></stop>
        </linearGradient>
        <linearGradient
          x1='50%'
          y1='0%'
          x2='50%'
          y2='100%'
          id='rrreflection-grad-2'
        >
          <stop stop-color='${x}' stop-opacity='1' offset='0%'></stop>
          <stop stop-color='${n}' stop-opacity='1' offset='45%'></stop>
        </linearGradient>
        <linearGradient
          gradientTransform='rotate(270)'
          x1='50%'
          y1='0%'
          x2='50%'
          y2='100%'
          id='rrreflection-grad-3'
        >
          <stop stop-color='${n}' stop-opacity='1' offset='45%'></stop>
          <stop stop-color='${x}' stop-opacity='1' offset='100%'></stop>
        </linearGradient>
        <linearGradient
          gradientTransform='rotate(270)'
          x1='50%'
          y1='0%'
          x2='50%'
          y2='100%'
          id='rrreflection-grad-4'
        >
          <stop stop-color='${x}' stop-opacity='1' offset='0%'></stop>
          <stop stop-color='${n}' stop-opacity='1' offset='45%'></stop>
        </linearGradient>
      </defs>
      <g stroke-width='1.5' stroke='url(#rrreflection-grad)' fill='none'>
        <circle r='567' cx='50%' cy='0'></circle>
        <circle r='535.5' cx='50%' cy='0'></circle>
        <circle r='504' cx='50%' cy='0'></circle>
        <circle r='472.5' cx='50%' cy='0'></circle>
        <circle r='441' cx='50%' cy='0'></circle>
        <circle r='409.5' cx='50%' cy='0'></circle>
        <circle r='378' cx='50%' cy='0'></circle>
        <circle r='346.5' cx='50%' cy='0'></circle>
        <circle r='315' cx='50%' cy='0'></circle>
        <circle r='283.5' cx='50%' cy='0'></circle>
        <circle r='252' cx='50%' cy='0'></circle>
        <circle r='220.5' cx='50%' cy='0'></circle>
        <circle r='189' cx='50%' cy='0'></circle>
        <circle r='157.5' cx='50%' cy='0'></circle>
        <circle r='126' cx='50%' cy='0'></circle>
        <circle r='94.5' cx='50%' cy='0'></circle>
        <circle r='63' cx='50%' cy='0'></circle>
        <circle r='31.5' cx='50%' cy='0'></circle>
      </g>
      <g stroke-width='1.5' stroke='url(#rrreflection-grad-2)' fill='none'>
        <circle r='567' cx='50%' cy='100%'></circle>
        <circle r='535.5' cx='50%' cy='100%'></circle>
        <circle r='504' cx='50%' cy='100%'></circle>
        <circle r='472.5' cx='50%' cy='100%'></circle>
        <circle r='441' cx='50%' cy='100%'></circle>
        <circle r='409.5' cx='50%' cy='100%'></circle>
        <circle r='378' cx='50%' cy='100%'></circle>
        <circle r='346.5' cx='50%' cy='100%'></circle>
        <circle r='315' cx='50%' cy='100%'></circle>
        <circle r='283.5' cx='50%' cy='100%'></circle>
        <circle r='252' cx='50%' cy='100%'></circle>
        <circle r='220.5' cx='50%' cy='100%'></circle>
        <circle r='189' cx='50%' cy='100%'></circle>
        <circle r='157.5' cx='50%' cy='100%'></circle>
        <circle r='126' cx='50%' cy='100%'></circle>
        <circle r='94.5' cx='50%' cy='100%'></circle>
        <circle r='63' cx='50%' cy='100%'></circle>
        <circle r='31.5' cx='50%' cy='100%'></circle>
      </g>
      <g stroke-width='1.5' stroke='url(#rrreflection-grad-3)' fill='none'>
        <circle r='567' cx='0' cy='50%'></circle>
        <circle r='535.5' cx='0' cy='50%'></circle>
        <circle r='504' cx='0' cy='50%'></circle>
        <circle r='472.5' cx='0' cy='50%'></circle>
        <circle r='441' cx='0' cy='50%'></circle>
        <circle r='409.5' cx='0' cy='50%'></circle>
        <circle r='378' cx='0' cy='50%'></circle>
        <circle r='346.5' cx='0' cy='50%'></circle>
        <circle r='315' cx='0' cy='50%'></circle>
        <circle r='283.5' cx='0' cy='50%'></circle>
        <circle r='252' cx='0' cy='50%'></circle>
        <circle r='220.5' cx='0' cy='50%'></circle>
        <circle r='189' cx='0' cy='50%'></circle>
        <circle r='157.5' cx='0' cy='50%'></circle>
        <circle r='126' cx='0' cy='50%'></circle>
        <circle r='94.5' cx='0' cy='50%'></circle>
        <circle r='63' cx='0' cy='50%'></circle>
        <circle r='31.5' cx='0' cy='50%'></circle>
      </g>
      <g stroke-width='1.5' stroke='url(#rrreflection-grad-4)' fill='none'>
        <circle r='567' cx='100%' cy='50%'></circle>
        <circle r='535.5' cx='100%' cy='50%'></circle>
        <circle r='504' cx='100%' cy='50%'></circle>
        <circle r='472.5' cx='100%' cy='50%'></circle>
        <circle r='441' cx='100%' cy='50%'></circle>
        <circle r='409.5' cx='100%' cy='50%'></circle>
        <circle r='378' cx='100%' cy='50%'></circle>
        <circle r='346.5' cx='100%' cy='50%'></circle>
        <circle r='315' cx='100%' cy='50%'></circle>
        <circle r='283.5' cx='100%' cy='50%'></circle>
        <circle r='252' cx='100%' cy='50%'></circle>
        <circle r='220.5' cx='100%' cy='50%'></circle>
        <circle r='189' cx='100%' cy='50%'></circle>
        <circle r='157.5' cx='100%' cy='50%'></circle>
        <circle r='126' cx='100%' cy='50%'></circle>
        <circle r='94.5' cx='100%' cy='50%'></circle>
        <circle r='63' cx='100%' cy='50%'></circle>
        <circle r='31.5' cx='100%' cy='50%'></circle>
      </g>
    </svg>`],fa=S7[2],ua=S7[3],oa="_wallpaper_container_1mbyv_1",ha={wallpaper_container:oa},da=({variant:n,colorIdx0:x,colorIdx1:f=0,colorIdx2:s=0,style:o={}})=>{const d=Q(v=>v.activeConfig.default_palette_idx),M=U.useMemo(()=>{const v=(n===0?fa:ua)({color0:F6(d,x),color1:F6(d,f),color2:F6(d,s)});return`url("data:image/svg+xml,${encodeURIComponent(v)}")`},[n,x,f,s,d]),_={backgroundPosition:"top left",backgroundSize:"800px 800px",backgroundRepeat:"repeat",backgroundAttachment:"local",backgroundOrigin:"initial",...o,position:"fixed",left:"50%",top:"50%",transform:"translate(-50%, -50%)",zIndex:"-5",height:"100%",width:"100%",backgroundImage:M};return y.jsx("div",{style:_,className:ha.wallpaper_container})};function ga(){const[n,x]=U.useState(!1);return U.useEffect(()=>{if(!(typeof navigator<"u"&&/firefox/i.test(navigator.userAgent))){x(!1);return}const o=document.createElement("canvas").getContext("2d");if(!o){x(!1);return}o.font="16px monospace";const M=o.measureText("MMMMMMMMMM").width,_=100,g=Math.abs((M-_)/_)>.05;x(g)},[]),n}const ma=({disableWarning:n,setDisableWarning:x})=>y.jsxs("div",{className:t0(X.container,X.small),children:[y.jsx("div",{className:X.warning_container,children:y.jsxs("div",{className:X.warning_danger,"aria-live":"assertive",children:[y.jsx("h3",{id:"firefox-warning-dialog-title",children:"Warning"}),y.jsxs("p",{id:"firefox-warning-dialog-description",children:['Please consider disabling "',y.jsx("b",{children:"Zoom text only"}),'" mode (',y.jsx("b",{children:"Menu: View: Zoom: Zoom text only"}),"), as it will conflict with how the wheel is being rendered."]})]})}),y.jsx("div",{className:t0(X.buttons_container,X.buttons_wide),children:y.jsxs("label",{children:["Don't show this again",y.jsx("input",{type:"checkbox",name:"show-warning",value:"disable",checked:n,onChange:()=>{x(f=>!f)},className:X.checkbox_input})]})})]}),wa=U.forwardRef(({disableWarning:n,setDisableWarning:x},f)=>y.jsx(b1,{ref:f,"aria-labelledby":"firefox-warning-dialog-title","aria-describedby":"firefox-warning-dialog-description",className:t0(X.dialog,X.top,"center-shadow"),childProps:{setDisableWarning:x},children:y.jsx(ma,{disableWarning:n,setDisableWarning:x})})),pa=({location:n})=>{const[x,f]=U.useState(!1),s=ga(),o=U.useRef(null);return U.useEffect(()=>{var d;!CSS.supports("-moz-appearance:none")||x||s&&!x&&n==="Main"&&((d=o.current)==null||d.handleShowDialog())},[s,x,n]),p7?y.jsx(wa,{ref:o,disableWarning:x,setDisableWarning:f}):null};function va(){const n=Q(x=>x.currentLocation);return y.jsxs(y.Fragment,{children:[y.jsx(q9,{}),n==="Main"?y.jsx(Ox,{}):y.jsx(sa,{}),y.jsx(da,{variant:n==="Main"?0:1,colorIdx0:n==="Main"?0:2,colorIdx1:0,style:{opacity:"0.9"}}),y.jsx(pa,{location:n})]})}const ka=navigator.userAgent.includes("Firefox")?3:7;async function b7(n,x,f=1){return new FontFace(n,x,{weight:"600",display:"block"}).load().then(o=>(document.fonts.add(o),new Promise(d=>{const M=()=>{document.fonts.check(`600 16px "${n}"`)?d():requestAnimationFrame(M)};M()}))).catch(o=>(console.warn(`Subset load failed (attempt ${f}): ${x}`,o),new Promise(d=>{const M=Math.min(6e4,1e3*2**f);setTimeout(()=>{b7(n,x,f+1).then(d)},M)})))}async function $a(){const n=Q.getState().markLoadedURL,x=[...m9];let f=0;return new Promise(s=>{const o=()=>{for(;f<ka&&x.length>0;){const{fontName:d,url:M}=x.shift();f++,b7(d,M).then(()=>{n({fontName:d,url:M}),f--,o(),f===0&&x.length===0&&s()})}};o()})}$a();c9.createRoot(document.getElementById("root")).render(y.jsx(U.StrictMode,{children:y.jsx(va,{})}));
