(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[86],{125:function(e,t,n){"use strict";var a=n(11),o=n(27),l=n.n(o),r=n(126),i=n.n(r);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}if(void 0===m)var m=[];var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(r,e);var t,n,a,o,l=(a=r,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(a);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function r(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(t=l.call(this,e)).state={status:void 0},t.handleLoading=function(){t.setState({status:"loading"})},t.addFont=function(e){m.includes(e)||m.push(e)},t.handleActive=function(){t.setState({status:"active"})},t.handleInactive=function(){t.setState({status:"inactive"})},t.loadFonts=function(){m.includes(t.props.config.google.families[0])||(i.a.load(s(s({},t.props.config),{},{loading:t.handleLoading,active:t.handleActive,inactive:t.handleInactive})),t.addFont(t.props.config.google.families[0]))},t}return t=r,(n=[{key:"componentDidMount",value:function(){this.loadFonts()}},{key:"componentDidUpdate",value:function(e,t){var n=this.props,a=n.onStatus,o=n.config;t.status!==this.state.status&&a(this.state.status),e.config!==o&&this.loadFonts()}},{key:"render",value:function(){return this.props.children||null}}])&&h(t.prototype,n),r}(a.Component);p.propTypes={config:l.a.object.isRequired,children:l.a.element,onStatus:l.a.func.isRequired},p.defaultProps={onStatus:function(){}},t.a=p},126:function(e,t,n){var a;!function(){function o(e,t,n){return e.call.apply(e.bind,arguments)}function l(e,t,n){if(!e)throw Error();if(2<arguments.length){var a=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,a),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function r(e,t,n){return(r=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:l).apply(null,arguments)}var i=Date.now||function(){return+new Date};function c(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var u=!!window.FontFace;function s(e,t,n,a){if(t=e.c.createElement(t),n)for(var o in n)n.hasOwnProperty(o)&&("style"==o?t.style.cssText=n[o]:t.setAttribute(o,n[o]));return a&&t.appendChild(e.c.createTextNode(a)),t}function f(e,t,n){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(n,e.lastChild)}function h(e){e.parentNode&&e.parentNode.removeChild(e)}function b(e,t,n){t=t||[],n=n||[];for(var a=e.className.split(/\s+/),o=0;o<t.length;o+=1){for(var l=!1,r=0;r<a.length;r+=1)if(t[o]===a[r]){l=!0;break}l||a.push(t[o])}for(t=[],o=0;o<a.length;o+=1){for(l=!1,r=0;r<n.length;r+=1)if(a[o]===n[r]){l=!0;break}l||t.push(a[o])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function g(e,t){for(var n=e.className.split(/\s+/),a=0,o=n.length;a<o;a++)if(n[a]==t)return!0;return!1}function d(e,t,n){function a(){i&&o&&l&&(i(r),i=null)}t=s(e,"link",{rel:"stylesheet",href:t,media:"all"});var o=!1,l=!0,r=null,i=n||null;u?(t.onload=function(){o=!0,a()},t.onerror=function(){o=!0,r=Error("Stylesheet failed to load"),a()}):setTimeout((function(){o=!0,a()}),0),f(e,"head",t)}function m(e,t,n,a){var o=e.c.getElementsByTagName("head")[0];if(o){var l=s(e,"script",{src:t}),r=!1;return l.onload=l.onreadystatechange=function(){r||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(r=!0,n&&n(null),l.onload=l.onreadystatechange=null,"HEAD"==l.parentNode.tagName&&o.removeChild(l))},o.appendChild(l),setTimeout((function(){r||(r=!0,n&&n(Error("Script load timeout")))}),a||5e3),l}return null}function p(){this.a=0,this.c=null}function v(e){return e.a++,function(){e.a--,y(e)}}function _(e,t){e.c=t,y(e)}function y(e){0==e.a&&e.c&&(e.c(),e.c=null)}function O(e){this.a=e||"-"}function w(e,t){this.c=e,this.f=4,this.a="n";var n=(t||"n4").match(/^([nio])([1-9])$/i);n&&(this.a=n[1],this.f=parseInt(n[2],10))}function j(e){var t=[];e=e.split(/,\s*/);for(var n=0;n<e.length;n++){var a=e[n].replace(/['"]/g,"");-1!=a.indexOf(" ")||/^\d/.test(a)?t.push("'"+a+"'"):t.push(a)}return t.join(",")}function S(e){return e.a+e.f}function C(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function E(e){var t=4,n="n",a=null;return e&&((a=e.match(/(normal|oblique|italic)/i))&&a[1]&&(n=a[1].substr(0,1).toLowerCase()),(a=e.match(/([1-9]00|normal|bold)/i))&&a[1]&&(/bold/i.test(a[1])?t=7:/[1-9]00/.test(a[1])&&(t=parseInt(a[1].substr(0,1),10)))),n+t}function T(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new O("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function F(e){if(e.g){var t=g(e.f,e.a.c("wf","active")),n=[],a=[e.a.c("wf","loading")];t||n.push(e.a.c("wf","inactive")),b(e.f,n,a)}k(e,"inactive")}function k(e,t,n){e.j&&e.h[t]&&(n?e.h[t](n.c,S(n)):e.h[t]())}function H(){this.c={}}function P(e,t){this.c=e,this.f=t,this.a=s(this.c,"span",{"aria-hidden":"true"},this.f)}function N(e){f(e.c,"body",e.a)}function A(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+j(e.c)+";font-style:"+C(e)+";font-weight:"+e.f+"00;"}function x(e,t,n,a,o,l){this.g=e,this.j=t,this.a=a,this.c=n,this.f=o||3e3,this.h=l||void 0}function L(e,t,n,a,o,l,r){this.v=e,this.B=t,this.c=n,this.a=a,this.s=r||"BESbswy",this.f={},this.w=o||3e3,this.u=l||null,this.m=this.j=this.h=this.g=null,this.g=new P(this.c,this.s),this.h=new P(this.c,this.s),this.j=new P(this.c,this.s),this.m=new P(this.c,this.s),e=A(e=new w(this.a.c+",serif",S(this.a))),this.g.a.style.cssText=e,e=A(e=new w(this.a.c+",sans-serif",S(this.a))),this.h.a.style.cssText=e,e=A(e=new w("serif",S(this.a))),this.j.a.style.cssText=e,e=A(e=new w("sans-serif",S(this.a))),this.m.a.style.cssText=e,N(this.g),N(this.h),N(this.j),N(this.m)}O.prototype.c=function(e){for(var t=[],n=0;n<arguments.length;n++)t.push(arguments[n].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},x.prototype.start=function(){var e=this.c.o.document,t=this,n=i(),a=new Promise((function(a,o){!function l(){i()-n>=t.f?o():e.fonts.load(function(e){return C(e)+" "+e.f+"00 300px "+j(e.c)}(t.a),t.h).then((function(e){1<=e.length?a():setTimeout(l,25)}),(function(){o()}))}()})),o=null,l=new Promise((function(e,n){o=setTimeout(n,t.f)}));Promise.race([l,a]).then((function(){o&&(clearTimeout(o),o=null),t.g(t.a)}),(function(){t.j(t.a)}))};var z={D:"serif",C:"sans-serif"},I=null;function M(){if(null===I){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);I=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return I}function R(e,t,n){for(var a in z)if(z.hasOwnProperty(a)&&t===e.f[z[a]]&&n===e.f[z[a]])return!0;return!1}function D(e,t){setTimeout(r((function(){h(this.g.a),h(this.h.a),h(this.j.a),h(this.m.a),t(this.a)}),e),0)}function B(e,t,n){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=n}L.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=i(),function e(t){var n,a=t.g.a.offsetWidth,o=t.h.a.offsetWidth;(n=a===t.f.serif&&o===t.f["sans-serif"])||(n=M()&&R(t,a,o)),n?i()-t.A>=t.w?M()&&R(t,a,o)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?D(t,t.v):D(t,t.B):function(t){setTimeout(r((function(){e(this)}),t),50)}(t):D(t,t.v)}(this)};var W=null;function G(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&b(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),k(e,"active")):F(e.a))}function V(e){this.j=e,this.a=new H,this.h=0,this.f=this.g=!0}function U(e,t,n,a,o){var l=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=o||null,i=a||{};if(0===n.length&&l)F(t.a);else{t.f+=n.length,l&&(t.j=l);var c,u=[];for(c=0;c<n.length;c++){var s=n[c],f=i[s.c],h=t.a,g=s;if(h.g&&b(h.f,[h.a.c("wf",g.c,S(g).toString(),"loading")]),k(h,"fontloading",g),h=null,null===W)if(window.FontFace){g=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var d=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);W=g?42<parseInt(g[1],10):!d}else W=!1;h=W?new x(r(t.g,t),r(t.h,t),t.c,s,t.s,f):new L(r(t.g,t),r(t.h,t),t.c,s,t.s,e,f),u.push(h)}for(c=0;c<u.length;c++)u[c].start()}}),0)}function $(e,t){this.c=e,this.a=t}function q(e,t){this.c=e,this.a=t}function J(e,t){this.c=e||K,this.a=[],this.f=[],this.g=t||""}B.prototype.g=function(e){var t=this.a;t.g&&b(t.f,[t.a.c("wf",e.c,S(e).toString(),"active")],[t.a.c("wf",e.c,S(e).toString(),"loading"),t.a.c("wf",e.c,S(e).toString(),"inactive")]),k(t,"fontactive",e),this.m=!0,G(this)},B.prototype.h=function(e){var t=this.a;if(t.g){var n=g(t.f,t.a.c("wf",e.c,S(e).toString(),"active")),a=[],o=[t.a.c("wf",e.c,S(e).toString(),"loading")];n||a.push(t.a.c("wf",e.c,S(e).toString(),"inactive")),b(t.f,a,o)}k(t,"fontinactive",e),G(this)},V.prototype.load=function(e){this.c=new c(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,n){var a=[],o=n.timeout;!function(e){e.g&&b(e.f,[e.a.c("wf","loading")]),k(e,"loading")}(t),a=function(e,t,n){var a,o=[];for(a in t)if(t.hasOwnProperty(a)){var l=e.c[a];l&&o.push(l(t[a],n))}return o}(e.a,n,e.c);var l=new B(e.c,t,o);for(e.h=a.length,t=0,n=a.length;t<n;t++)a[t].load((function(t,n,a){U(e,l,t,n,a)}))}(this,new T(this.c,e),e)},$.prototype.load=function(e){var t=this,n=t.a.projectId,a=t.a.version;if(n){var o=t.c.o;m(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+n+".js"+(a?"?v="+a:""),(function(a){a?e([]):(o["__MonotypeConfiguration__"+n]=function(){return t.a},function t(){if(o["__mti_fntLst"+n]){var a,l=o["__mti_fntLst"+n](),r=[];if(l)for(var i=0;i<l.length;i++){var c=l[i].fontfamily;null!=l[i].fontStyle&&null!=l[i].fontWeight?(a=l[i].fontStyle+l[i].fontWeight,r.push(new w(c,a))):r.push(new w(c))}e(r)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+n}else e([])},q.prototype.load=function(e){var t,n,a=this.a.urls||[],o=this.a.families||[],l=this.a.testStrings||{},r=new p;for(t=0,n=a.length;t<n;t++)d(this.c,a[t],v(r));var i=[];for(t=0,n=o.length;t<n;t++)if((a=o[t].split(":"))[1])for(var c=a[1].split(","),u=0;u<c.length;u+=1)i.push(new w(a[0],c[u]));else i.push(new w(a[0]));_(r,(function(){e(i,l)}))};var K="https://fonts.googleapis.com/css";function Q(e){this.f=e,this.a=[],this.c={}}var X={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var ne={Arimo:!0,Cousine:!0,Tinos:!0};function ae(e,t){this.c=e,this.a=t}function oe(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new p,n=this.c,a=new J(this.a.api,this.a.text),o=this.a.families;!function(e,t){for(var n=t.length,a=0;a<n;a++){var o=t[a].split(":");3==o.length&&e.f.push(o.pop());var l="";2==o.length&&""!=o[1]&&(l=":"),e.a.push(o.join(l))}}(a,o);var l=new Q(o);!function(e){for(var t=e.f.length,n=0;n<t;n++){var a=e.f[n].split(":"),o=a[0].replace(/\+/g," "),l=["n4"];if(2<=a.length){var r;if(r=[],i=a[1])for(var i,c=(i=i.split(",")).length,u=0;u<c;u++){var s;if((s=i[u]).match(/^[\w-]+$/))if(null==(f=ee.exec(s.toLowerCase())))s="";else{if(s=null==(s=f[2])||""==s?"n":Z[s],null==(f=f[1])||""==f)f="4";else var f=Y[f]||(isNaN(f)?"4":f.substr(0,1));s=[s,f].join("")}else s="";s&&r.push(s)}0<r.length&&(l=r),3==a.length&&(r=[],0<(a=(a=a[2])?a.split(","):r).length&&(a=X[a[0]])&&(e.c[o]=a))}for(e.c[o]||(a=X[o])&&(e.c[o]=a),a=0;a<l.length;a+=1)e.a.push(new w(o,l[a]))}}(l),d(n,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,n=[],a=0;a<t;a++)n.push(e.a[a].replace(/ /g,"+"));return t=e.c+"?family="+n.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(a),v(t)),_(t,(function(){e(l.a,l.c,ne)}))},ae.prototype.load=function(e){var t=this.a.id,n=this.c.o;t?m(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(n.Typekit&&n.Typekit.config&&n.Typekit.config.fn){t=n.Typekit.config.fn;for(var a=[],o=0;o<t.length;o+=2)for(var l=t[o],r=t[o+1],i=0;i<r.length;i++)a.push(new w(l,r[i]));try{n.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(a)}}),2e3):e([])},oe.prototype.load=function(e){var t=this.f.id,n=this.c.o,a=this;t?(n.__webfontfontdeckmodule__||(n.__webfontfontdeckmodule__={}),n.__webfontfontdeckmodule__[t]=function(t,n){for(var o=0,l=n.fonts.length;o<l;++o){var r=n.fonts[o];a.a.push(new w(r.name,E("font-weight:"+r.weight+";font-style:"+r.style)))}e(a.a)},m(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var le=new V(window);le.a.c.custom=function(e,t){return new q(t,e)},le.a.c.fontdeck=function(e,t){return new oe(t,e)},le.a.c.monotype=function(e,t){return new $(t,e)},le.a.c.typekit=function(e,t){return new ae(t,e)},le.a.c.google=function(e,t){return new te(t,e)};var re={load:r(le.load,le)};void 0===(a=function(){return re}.call(t,n,t,e))||(e.exports=a)}()},493:function(e,t,n){"use strict";n.r(t),n.d(t,"removeFromArray",(function(){return g}));var a=n(6),o=n(19),l=n(125),r=n(2),i=n(1),c=n.n(i),u=n(9),s=n(4),f=n(5);function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}$=jQuery;var b=[{value:"thumbnail",label:Object(r.__)("Thumbnail","ultimate-addons-for-gutenberg")},{value:"medium",label:Object(r.__)("Medium","ultimate-addons-for-gutenberg")},{value:"full",label:Object(r.__)("Large","ultimate-addons-for-gutenberg")}],g=function(e,t){return e.filter((function(e){return Array.isArray(t)?!t.includes(e):e!==t}))},d=function(e){var t,n,g,d=e=e.parentProps,m=d.attributes,p=d.setAttributes,v=m.enableSchema,_=m.itemType,y=m.itemSubtype,O=m.sku,w=m.identifier,j=m.identifierType,S=m.offerType,C=m.offerCurrency,E=m.offerStatus,T=m.offerPrice,F=m.offerExpiry,k=m.datepublish,H=m.ctaLink,P=m.ctaTarget,N=m.brand,A=m.headingTag,x=m.mainimage,L=m.imgSize,z=m.showFeature,I=m.showAuthor,M=m.starColor,R=m.descColor,D=m.titleColor,B=m.contentColor,W=m.headFontFamily,G=m.headFontWeight,V=m.headFontSubset,U=m.headFontSizeType,q=m.headFontSize,J=m.headFontSizeMobile,K=m.headFontSizeTablet,Q=m.headLineHeightType,X=m.headLineHeight,Y=m.headLineHeightMobile,Z=m.headLineHeightTablet,ee=m.headLoadGoogleFonts,te=m.subHeadFontFamily,ne=m.subHeadFontWeight,ae=m.subHeadFontSubset,oe=m.subHeadFontSize,le=m.subHeadFontSizeType,re=m.subHeadFontSizeMobile,ie=m.subHeadFontSizeTablet,ce=m.subHeadLineHeight,ue=m.subHeadLineHeightType,se=m.subHeadLineHeightMobile,fe=m.subHeadLineHeightTablet,he=m.subHeadLoadGoogleFonts,be=m.contentLoadGoogleFonts,ge=m.contentFontFamily,de=m.contentFontWeight,me=m.contentFontSubset,pe=m.contentFontSizeType,ve=m.contentLineHeightType,_e=m.contentFontSize,ye=m.contentFontSizeTablet,Oe=m.contentFontSizeMobile,we=m.contentLineHeight,je=m.contentLineHeightTablet,Se=m.contentLineHeightMobile,Ce=m.contentVrPadding,Ee=m.contentHrPadding,Te=m.authorColor,Fe=m.summaryColor,ke=m.starActiveColor,He=m.starOutlineColor,Pe=m.enableDescription,Ne=m.enableImage,Ae=m.overallAlignment,xe=m.isbn,Le=m.bookAuthorName,ze=m.reviewPublisher,Ie=m.provider,Me=m.appCategory,Re=m.operatingSystem,De=m.datecreated,Be=m.directorname;if(1==ee){var We={google:{families:[W+(G?":"+G:"")]}};n=c.a.createElement(l.a,{config:We})}if(1==he){var Ge={google:{families:[te+(ne?":"+ne:"")]}};g=c.a.createElement(l.a,{config:Ge})}if(1==be){var Ve={google:{families:[ge+(de?":"+de:"")]}};t=c.a.createElement(l.a,{config:Ve})}var Ue,$e,qe,Je={Book:[{value:"Audiobook",label:Object(r.__)("Audio book","ultimate-addons-for-gutenberg")}],Product:[{value:"IndividualProduct",label:Object(r.__)("Individual Product","ultimate-addons-for-gutenberg")},{value:"ProductCollection",label:Object(r.__)("Product Collection","ultimate-addons-for-gutenberg")},{value:"ProductGroup",label:Object(r.__)("Product Group","ultimate-addons-for-gutenberg")},{value:"ProductModel",label:Object(r.__)("Product Model","ultimate-addons-for-gutenberg")},{value:"SomeProducts",label:Object(r.__)("Some Products","ultimate-addons-for-gutenberg")},{value:"Vehicle",label:Object(r.__)("Vehicle","ultimate-addons-for-gutenberg")}],SoftwareApplication:[{value:"MobileApplication",label:Object(r.__)("Mobile Application","ultimate-addons-for-gutenberg")},{value:"VideoGame",label:Object(r.__)("Video Game","ultimate-addons-for-gutenberg")},{value:"WebApplication",label:Object(r.__)("Web Application","ultimate-addons-for-gutenberg")}]};switch(_){default:break;case"Book":Ue=c.a.createElement(c.a.Fragment,null,c.a.createElement(f.TextControl,{label:Object(r.__)("ISBN","ultimate-addons-for-gutenberg"),value:xe,onChange:function(e){return p({isbn:e})},help:Object(r.__)("Note: This is a mandatory field for the Review schema","ultimate-addons-for-gutenberg")}),c.a.createElement(f.TextControl,{label:Object(r.__)("Book author name","ultimate-addons-for-gutenberg"),value:Le,onChange:function(e){return p({bookAuthorName:e})},help:Object(r.__)("Note: This is a mandatory field for the Review schema","ultimate-addons-for-gutenberg")}));break;case"Course":Ue=c.a.createElement(c.a.Fragment,null,c.a.createElement(f.TextControl,{label:Object(r.__)("Provider","ultimate-addons-for-gutenberg"),value:Ie,onChange:function(e){return p({provider:e})}}));break;case"SoftwareApplication":Ue=c.a.createElement(c.a.Fragment,null,c.a.createElement(f.TextControl,{label:Object(r.__)("Application Category","ultimate-addons-for-gutenberg"),value:Me,onChange:function(e){return p({appCategory:e})}}),c.a.createElement(f.TextControl,{label:Object(r.__)("Operating System","ultimate-addons-for-gutenberg"),value:Re,onChange:function(e){return p({operatingSystem:e})}}));break;case"Movie":Ue=c.a.createElement(c.a.Fragment,null,c.a.createElement(f.TextControl,{label:Object(r.__)("Director Name","ultimate-addons-for-gutenberg"),value:Be,onChange:function(e){return p({directorname:e})}}),c.a.createElement("h2",null,Object(r.__)("Date of create")),c.a.createElement(f.DateTimePicker,{currentDate:De,onChange:function(e){return p({datecreated:e})},is12Hour:!0}))}return c.a.createElement(i.Suspense,{fallback:Object(u.a)()},c.a.createElement(s.BlockControls,{key:"index"},c.a.createElement(s.AlignmentToolbar,{value:Ae,onChange:function(e){return p({overallAlignment:e})}})),c.a.createElement(s.InspectorControls,null,(x&&x.sizes&&($e=x.sizes,qe=[],$.each($e,(function(e){var t={value:e,label:e};qe.push(t)})),b=qe),c.a.createElement(f.PanelBody,{title:Object(r.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0},c.a.createElement("h2",null,Object(r.__)("Review Title","ultimate-addons-for-gutenberg")),c.a.createElement(f.SelectControl,{label:Object(r.__)("Tag","ultimate-addons-for-gutenberg"),value:A,onChange:function(e){return p({headingTag:e})},options:[{value:"h1",label:Object(r.__)("H1")},{value:"h2",label:Object(r.__)("H2")},{value:"h3",label:Object(r.__)("H3")},{value:"h4",label:Object(r.__)("H4")},{value:"h5",label:Object(r.__)("H5")},{value:"h6",label:Object(r.__)("H6")}]}),c.a.createElement("h2",null,Object(r.__)("Link")),c.a.createElement(f.TextControl,{value:H,onChange:function(e){return p({ctaLink:e})}}),c.a.createElement(f.ToggleControl,{label:Object(r.__)("Open in new window","ultimate-addons-for-gutenberg"),checked:P,onChange:function(){p({ctaTarget:!P})}}),c.a.createElement(f.ToggleControl,{label:Object(r.__)("Show review description","ultimate-addons-for-gutenberg"),checked:Pe,onChange:function(){return p({enableDescription:!Pe})},help:Object(r.__)("Note: This is a mandatory field for the Review schema.","ultimate-addons-for-gutenberg")}),c.a.createElement(f.ToggleControl,{label:Object(r.__)("Show review author","ultimate-addons-for-gutenberg"),checked:I,onChange:function(){return p({showAuthor:!I})},help:Object(r.__)("Note: This is a mandatory field for the Review schema.","ultimate-addons-for-gutenberg")}),c.a.createElement(f.ToggleControl,{label:Object(r.__)("Show review image","ultimate-addons-for-gutenberg"),checked:Ne,onChange:function(){return p({enableImage:!Ne})},help:Object(r.__)("Note: This is a mandatory field for the Review schema.","ultimate-addons-for-gutenberg")}),!0===Ne&&c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,Object(r.__)("Image")),c.a.createElement(s.MediaUpload,{title:Object(r.__)("Select Image","ultimate-addons-for-gutenberg"),onSelect:function(e){return p({mainimage:e})},allowedTypes:["image"],value:x,render:function(e){var t=e.open;return c.a.createElement(f.Button,{isSecondary:!0,onClick:t},x.url?Object(r.__)("Replace image","ultimate-addons-for-gutenberg"):Object(r.__)("Select Image","ultimate-addons-for-gutenberg"))}}),x.url&&c.a.createElement(f.Button,{className:"uagb-rm-btn",onClick:function(){return p({mainimage:""})},isLink:!0,isDestructive:!0},Object(r.__)("Remove Image","ultimate-addons-for-gutenberg")),x.url&&c.a.createElement(f.SelectControl,{label:Object(r.__)("Size","ultimate-addons-for-gutenberg"),options:b,value:L,onChange:function(e){return p({imgSize:e})}})),c.a.createElement(f.ToggleControl,{label:Object(r.__)("Show ratings","ultimate-addons-for-gutenberg"),checked:z,onChange:function(){return p({showFeature:!z})},help:Object(r.__)("Note: Add feature/section ratings separately.","ultimate-addons-for-gutenberg")}),c.a.createElement(f.ToggleControl,{label:Object(r.__)("Enable schema support","ultimate-addons-for-gutenberg"),checked:v,onChange:function(){return p({enableSchema:!v})}}))),function(){if(!0===v)return c.a.createElement(f.PanelBody,{title:Object(r.__)("Schema","ultimate-addons-for-gutenberg"),initialOpen:!1},c.a.createElement(f.SelectControl,{label:Object(r.__)("Item type","ultimate-addons-for-gutenberg"),value:_,onChange:function(e){p({itemType:e}),"Movie"===_&&p({enableImage:!0}),"Course"===_&&p({enableDescription:!0}),Je.hasOwnProperty(_)&&Je[_].includes(y)||p({itemSubtype:"None"})},options:[{value:"Book",label:Object(r.__)("Book","ultimate-addons-for-gutenberg")},{value:"Course",label:Object(r.__)("Course","ultimate-addons-for-gutenberg")},{value:"Movie",label:Object(r.__)("Movie","ultimate-addons-for-gutenberg")},{value:"Product",label:Object(r.__)("Product","ultimate-addons-for-gutenberg")},{value:"SoftwareApplication",label:Object(r.__)("Software Application","ultimate-addons-for-gutenberg")}]}),Je.hasOwnProperty(_)&&c.a.createElement(f.SelectControl,{label:Object(r.__)("Item subtype","ultimate-addons-for-gutenberg"),options:[{value:"none",label:Object(r.__)("None","ultimate-addons-for-gutenberg")}].concat((t=Je[_],function(e){if(Array.isArray(e))return h(e)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return h(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,void 0):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())),value:y,onChange:function(e){return p({itemSubtype:e})}}),c.a.createElement("hr",{className:"uagb-editor__separator"}),Ue,c.a.createElement(f.TextControl,{label:Object(r.__)("Review publisher","ultimate-addons-for-gutenberg"),value:ze,onChange:function(e){return p({reviewPublisher:e})},help:Object(r.__)("Note: This is a mandatory field for the Review schema","ultimate-addons-for-gutenberg")}),c.a.createElement("h2",null,Object(r.__)("Date of publish","ultimate-addons-for-gutenberg")),c.a.createElement(f.DateTimePicker,{currentDate:k,onChange:function(e){return p({datepublish:e})},is12Hour:!0}),["Product","SoftwareApplication"].includes(_)&&c.a.createElement(c.a.Fragment,null,["Product"].includes(_)&&c.a.createElement(c.a.Fragment,null,c.a.createElement(f.TextControl,{label:Object(r.__)("Brand","ultimate-addons-for-gutenberg"),value:N,onChange:function(e){return p({brand:e})}}),c.a.createElement(f.TextControl,{label:Object(r.__)("SKU","ultimate-addons-for-gutenberg"),value:O,onChange:function(e){return p({sku:e})}}),c.a.createElement(f.TextControl,{label:Object(r.__)("Identifier","ultimate-addons-for-gutenberg"),value:w,onChange:function(e){return p({identifier:e})}}),c.a.createElement(f.SelectControl,{label:Object(r.__)("Identifier type","ultimate-addons-for-gutenberg"),value:j,options:["nsn","mpn","gtin8","gtin12","gtin13","gtin14","gtin"].map((function(e){return{label:Object(r.__)(e.toUpperCase()),value:e}})),onChange:function(e){return p({identifierType:e})}})),["Product","SoftwareApplication"].includes(_)&&c.a.createElement(c.a.Fragment,null,c.a.createElement(f.TextControl,{label:Object(r.__)("Offer Currency","ultimate-addons-for-gutenberg"),value:C,onChange:function(e){return p({offerCurrency:e})}})),"Offer"==S&&c.a.createElement(c.a.Fragment,null,c.a.createElement(f.TextControl,{label:Object(r.__)("Offer Price","ultimate-addons-for-gutenberg"),value:T,onChange:function(e){return p({offerPrice:e})},help:Object(r.__)("Note: This is a mandatory field for the Review schema","ultimate-addons-for-gutenberg")}),c.a.createElement(f.SelectControl,{label:Object(r.__)("Offer Status"),value:E,options:[{value:"https://schema.org/Discontinued",label:Object(r.__)("Discontinued","ultimate-addons-for-gutenberg")},{value:"https://schema.org/InStock",label:Object(r.__)("In Stock","ultimate-addons-for-gutenberg")},{value:"https://schema.org/InStoreOnly",label:Object(r.__)("In Store Only","ultimate-addons-for-gutenberg")},{value:"https://schema.org/LimitedAvailability",label:Object(r.__)("Limited Availability","ultimate-addons-for-gutenberg")},{value:"https://schema.org/OnlineOnly",label:Object(r.__)("Online Only","ultimate-addons-for-gutenberg")},{value:"https://schema.org/OutOfStock",label:Object(r.__)("Out Of Stock","ultimate-addons-for-gutenberg")},{value:"https://schema.org/PreOrder",label:Object(r.__)("Pre Order","ultimate-addons-for-gutenberg")},{value:"https://schema.org/PreSale",label:Object(r.__)("Pre Sale","ultimate-addons-for-gutenberg")},{value:"https://schema.org/SoldOut",label:Object(r.__)("Sold Out","ultimate-addons-for-gutenberg")}],onChange:function(t){return e.setAttributes({offerStatus:t})}}),c.a.createElement("h2",null,Object(r.__)("Price Valid Until","ultimate-addons-for-gutenberg")),c.a.createElement(f.DateTimePicker,{currentDate:F,onChange:function(e){return p({offerExpiry:e})},is12Hour:!0}))));var t}(),c.a.createElement(f.PanelBody,{title:Object(r.__)("Style","ultimate-addons-for-gutenberg"),initialOpen:!1},c.a.createElement(o.a,{label:Object(r.__)("Title Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:p,loadGoogleFonts:{value:ee,label:"headLoadGoogleFonts"},fontFamily:{value:W,label:"headFontFamily"},fontWeight:{value:G,label:"headFontWeight"},fontSubset:{value:V,label:"headFontSubset"},fontSizeType:{value:U,label:"headFontSizeType"},fontSize:{value:q,label:"headFontSize"},fontSizeMobile:{value:J,label:"headFontSizeMobile"},fontSizeTablet:{value:K,label:"headFontSizeTablet"},lineHeightType:{value:Q,label:"headLineHeightType"},lineHeight:{value:X,label:"headLineHeight"},lineHeightMobile:{value:Y,label:"headLineHeightMobile"},lineHeightTablet:{value:Z,label:"headLineHeightTablet"}}),c.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Title Color","ultimate-addons-for-gutenberg"),c.a.createElement("span",{className:"components-base-control__label"},c.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:D}}))),c.a.createElement(s.ColorPalette,{value:D,onChange:function(e){return p({titleColor:e})},allowReset:!0}),!0===Pe&&c.a.createElement(c.a.Fragment,null,c.a.createElement("hr",{className:"uagb-editor__separator"}),c.a.createElement(o.a,{label:Object(r.__)("Description Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:p,loadGoogleFonts:{value:he,label:"subHeadLoadGoogleFonts"},fontFamily:{value:te,label:"subHeadFontFamily"},fontWeight:{value:ne,label:"subHeadFontWeight"},fontSubset:{value:ae,label:"subHeadFontSubset"},fontSizeType:{value:le,label:"subHeadFontSizeType"},fontSize:{value:oe,label:"subHeadFontSize"},fontSizeMobile:{value:re,label:"subHeadFontSizeMobile"},fontSizeTablet:{value:ie,label:"subHeadFontSizeTablet"},lineHeightType:{value:ue,label:"subHeadLineHeightType"},lineHeight:{value:ce,label:"subHeadLineHeight"},lineHeightMobile:{value:se,label:"subHeadLineHeightMobile"},lineHeightTablet:{value:fe,label:"subHeadLineHeightTablet"}}),c.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Description Color","ultimate-addons-for-gutenberg"),c.a.createElement("span",{className:"components-base-control__label"},c.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:R}}))),c.a.createElement(s.ColorPalette,{value:R,onChange:function(e){return p({descColor:e})},allowReset:!0})),!0===I&&c.a.createElement(c.a.Fragment,null,c.a.createElement("hr",{className:"uagb-editor__separator"}),c.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Author Color","ultimate-addons-for-gutenberg"),c.a.createElement("span",{className:"components-base-control__label"},c.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Te}}))),c.a.createElement(s.ColorPalette,{value:Te,onChange:function(e){return p({authorColor:e})},allowReset:!0})),!0===z&&c.a.createElement(c.a.Fragment,null,c.a.createElement("hr",{className:"uagb-editor__separator"}),c.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Content Color","ultimate-addons-for-gutenberg"),c.a.createElement("span",{className:"components-base-control__label"},c.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:B}}))),c.a.createElement(s.ColorPalette,{value:B,onChange:function(e){return p({contentColor:e})},allowReset:!0})),c.a.createElement("hr",{className:"uagb-editor__separator"}),c.a.createElement(o.a,{label:Object(r.__)("Summary Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:p,loadGoogleFonts:{value:be,label:"contentLoadGoogleFonts"},fontFamily:{value:ge,label:"contentFontFamily"},fontWeight:{value:de,label:"contentFontWeight"},fontSubset:{value:me,label:"contentFontSubset"},fontSizeType:{value:pe,label:"contentFontSizeType"},fontSize:{value:_e,label:"contentFontSize"},fontSizeMobile:{value:Oe,label:"contentFontSizeMobile"},fontSizeTablet:{value:ye,label:"contentFontSizeTablet"},lineHeightType:{value:ve,label:"contentLineHeightType"},lineHeight:{value:we,label:"contentLineHeight"},lineHeightMobile:{value:Se,label:"contentLineHeightMobile"},lineHeightTablet:{value:je,label:"contentLineHeightTablet"}}),c.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Summary Color","ultimate-addons-for-gutenberg"),c.a.createElement("span",{className:"components-base-control__label"},c.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Fe}}))),c.a.createElement(s.ColorPalette,{value:Fe,onChange:function(e){return p({summaryColor:e})},allowReset:!0}),c.a.createElement("hr",{className:"uagb-editor__separator"}),c.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Active Star Color","ultimate-addons-for-gutenberg"),c.a.createElement("span",{className:"components-base-control__label"},c.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:M}}))),c.a.createElement(s.ColorPalette,{value:M,onChange:function(e){return p({starColor:e})},allowReset:!0}),c.a.createElement("hr",{className:"uagb-editor__separator"}),c.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Inactive Star Color","ultimate-addons-for-gutenberg"),c.a.createElement("span",{className:"components-base-control__label"},c.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:ke}}))),c.a.createElement(s.ColorPalette,{value:ke,onChange:function(e){return p({starActiveColor:e})},allowReset:!0}),c.a.createElement("hr",{className:"uagb-editor__separator"}),c.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Star Outline Color","ultimate-addons-for-gutenberg"),c.a.createElement("span",{className:"components-base-control__label"},c.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:He}}))),c.a.createElement(s.ColorPalette,{value:He,onChange:function(e){return p({starOutlineColor:e})},allowReset:!0}),c.a.createElement("h2",null,Object(r.__)("Overall Padding (px)","ultimate-addons-for-gutenberg")),c.a.createElement(f.RangeControl,{label:a.a.vertical_spacing,className:"uagb-margin-control",value:Ce,onChange:function(e){return p({contentVrPadding:e})},min:0,max:50,allowReset:!0}),c.a.createElement(f.RangeControl,{label:a.a.horizontal_spacing,className:"uagb-margin-control",value:Ee,onChange:function(e){return p({contentHrPadding:e})},min:0,max:50,allowReset:!0}))),n,g,t)};t.default=c.a.memo(d)}}]);