// PouchDB 7.1.1
//
// (c) 2012-2019 Dale Harvey and the PouchDB team
// PouchDB may be freely distributed under the Apache license, version 2.0.
// For all details and documentation:
// http://pouchdb.com
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).PouchDB=e()}}(function(){return function o(s,a,u){function c(t,e){if(!a[t]){if(!s[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(f)return f(t,!0);var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}var i=a[t]={exports:{}};s[t][0].call(i.exports,function(e){return c(s[t][1][e]||e)},i,i.exports,o,s,a,u)}return a[t].exports}for(var f="function"==typeof require&&require,e=0;e<u.length;e++)c(u[e]);return c}({1:[function(e,t,n){"use strict";t.exports=function(r){return function(){var e=arguments.length;if(e){for(var t=[],n=-1;++n<e;)t[n]=arguments[n];return r.call(this,t)}return r.call(this,[])}}},{}],2:[function(e,t,n){var u=Object.create||function(e){function t(){}return t.prototype=e,new t},s=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return n},o=Function.prototype.bind||function(e){var t=this;return function(){return t.apply(e,arguments)}};function r(){this._events&&Object.prototype.hasOwnProperty.call(this,"_events")||(this._events=u(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0}((t.exports=r).EventEmitter=r).prototype._events=void 0,r.prototype._maxListeners=void 0;var i,a=10;try{var c={};Object.defineProperty&&Object.defineProperty(c,"x",{value:0}),i=0===c.x}catch(e){i=!1}function f(e){return void 0===e._maxListeners?r.defaultMaxListeners:e._maxListeners}function l(e,t,n,r){var i,o,s;if("function"!=typeof n)throw new TypeError('"listener" argument must be a function');if((o=e._events)?(o.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),o=e._events),s=o[t]):(o=e._events=u(null),e._eventsCount=0),s){if("function"==typeof s?s=o[t]=r?[n,s]:[s,n]:r?s.unshift(n):s.push(n),!s.warned&&(i=f(e))&&0<i&&s.length>i){s.warned=!0;var a=new Error("Possible EventEmitter memory leak detected. "+s.length+' "'+String(t)+'" listeners added. Use emitter.setMaxListeners() to increase limit.');a.name="MaxListenersExceededWarning",a.emitter=e,a.type=t,a.count=s.length,"object"==typeof console&&console.warn&&console.warn("%s: %s",a.name,a.message)}}else s=o[t]=n,++e._eventsCount;return e}function d(){if(!this.fired)switch(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length){case 0:return this.listener.call(this.target);case 1:return this.listener.call(this.target,arguments[0]);case 2:return this.listener.call(this.target,arguments[0],arguments[1]);case 3:return this.listener.call(this.target,arguments[0],arguments[1],arguments[2]);default:for(var e=new Array(arguments.length),t=0;t<e.length;++t)e[t]=arguments[t];this.listener.apply(this.target,e)}}function h(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},i=o.call(d,r);return i.listener=n,r.wrapFn=i}function p(e,t,n){var r=e._events;if(!r)return[];var i=r[t];return i?"function"==typeof i?n?[i.listener||i]:[i]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(i):y(i,i.length):[]}function v(e){var t=this._events;if(t){var n=t[e];if("function"==typeof n)return 1;if(n)return n.length}return 0}function y(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}i?Object.defineProperty(r,"defaultMaxListeners",{enumerable:!0,get:function(){return a},set:function(e){if("number"!=typeof e||e<0||e!=e)throw new TypeError('"defaultMaxListeners" must be a positive number');a=e}}):r.defaultMaxListeners=a,r.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||isNaN(e))throw new TypeError('"n" argument must be a positive number');return this._maxListeners=e,this},r.prototype.getMaxListeners=function(){return f(this)},r.prototype.emit=function(e,t,n,r){var i,o,s,a,u,c,f="error"===e;if(c=this._events)f=f&&null==c.error;else if(!f)return!1;if(f){if(1<arguments.length&&(i=t),i instanceof Error)throw i;var l=new Error('Unhandled "error" event. ('+i+")");throw l.context=i,l}if(!(o=c[e]))return!1;var d="function"==typeof o;switch(s=arguments.length){case 1:!function(e,t,n){if(t)e.call(n);else for(var r=e.length,i=y(e,r),o=0;o<r;++o)i[o].call(n)}(o,d,this);break;case 2:!function(e,t,n,r){if(t)e.call(n,r);else for(var i=e.length,o=y(e,i),s=0;s<i;++s)o[s].call(n,r)}(o,d,this,t);break;case 3:!function(e,t,n,r,i){if(t)e.call(n,r,i);else for(var o=e.length,s=y(e,o),a=0;a<o;++a)s[a].call(n,r,i)}(o,d,this,t,n);break;case 4:!function(e,t,n,r,i,o){if(t)e.call(n,r,i,o);else for(var s=e.length,a=y(e,s),u=0;u<s;++u)a[u].call(n,r,i,o)}(o,d,this,t,n,r);break;default:for(a=new Array(s-1),u=1;u<s;u++)a[u-1]=arguments[u];!function(e,t,n,r){if(t)e.apply(n,r);else for(var i=e.length,o=y(e,i),s=0;s<i;++s)o[s].apply(n,r)}(o,d,this,a)}return!0},r.prototype.on=r.prototype.addListener=function(e,t){return l(this,e,t,!1)},r.prototype.prependListener=function(e,t){return l(this,e,t,!0)},r.prototype.once=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');return this.on(e,h(this,e,t)),this},r.prototype.prependOnceListener=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');return this.prependListener(e,h(this,e,t)),this},r.prototype.removeListener=function(e,t){var n,r,i,o,s;if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');if(!(r=this._events))return this;if(!(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=u(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(i=-1,o=n.length-1;0<=o;o--)if(n[o]===t||n[o].listener===t){s=n[o].listener,i=o;break}if(i<0)return this;0===i?n.shift():function(e,t){for(var n=t,r=n+1,i=e.length;r<i;n+=1,r+=1)e[n]=e[r];e.pop()}(n,i),1===n.length&&(r[e]=n[0]),r.removeListener&&this.emit("removeListener",e,s||t)}return this},r.prototype.removeAllListeners=function(e){var t,n,r;if(!(n=this._events))return this;if(!n.removeListener)return 0===arguments.length?(this._events=u(null),this._eventsCount=0):n[e]&&(0==--this._eventsCount?this._events=u(null):delete n[e]),this;if(0===arguments.length){var i,o=s(n);for(r=0;r<o.length;++r)"removeListener"!==(i=o[r])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=u(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(t)for(r=t.length-1;0<=r;r--)this.removeListener(e,t[r]);return this},r.prototype.listeners=function(e){return p(this,e,!0)},r.prototype.rawListeners=function(e){return p(this,e,!1)},r.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):v.call(e,t)},r.prototype.listenerCount=v,r.prototype.eventNames=function(){return 0<this._eventsCount?Reflect.ownKeys(this._events):[]}},{}],3:[function(e,f,t){(function(t){"use strict";var n,r,e=t.MutationObserver||t.WebKitMutationObserver;if(e){var i=0,o=new e(c),s=t.document.createTextNode("");o.observe(s,{characterData:!0}),n=function(){s.data=i=++i%2}}else if(t.setImmediate||void 0===t.MessageChannel)n="document"in t&&"onreadystatechange"in t.document.createElement("script")?function(){var e=t.document.createElement("script");e.onreadystatechange=function(){c(),e.onreadystatechange=null,e.parentNode.removeChild(e),e=null},t.document.documentElement.appendChild(e)}:function(){setTimeout(c,0)};else{var a=new t.MessageChannel;a.port1.onmessage=c,n=function(){a.port2.postMessage(0)}}var u=[];function c(){var e,t;r=!0;for(var n=u.length;n;){for(t=u,u=[],e=-1;++e<n;)t[e]();n=u.length}r=!1}f.exports=function(e){1!==u.push(e)||r||n()}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],4:[function(e,t,n){"function"==typeof Object.create?t.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(e,t){e.super_=t;function n(){}n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},{}],5:[function(e,t,n){var r,i,o=t.exports={};function s(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(t){if(r===setTimeout)return setTimeout(t,0);if((r===s||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:s}catch(e){r=s}try{i="function"==typeof clearTimeout?clearTimeout:a}catch(e){i=a}}();var c,f=[],l=!1,d=-1;function h(){l&&c&&(l=!1,c.length?f=c.concat(f):d=-1,f.length&&p())}function p(){if(!l){var e=u(h);l=!0;for(var t=f.length;t;){for(c=f,f=[];++d<t;)c&&c[d].run();d=-1,t=f.length}c=null,l=!1,function(t){if(i===clearTimeout)return clearTimeout(t);if((i===a||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(t);try{i(t)}catch(e){try{return i.call(null,t)}catch(e){return i.call(this,t)}}}(e)}}function v(e,t){this.fun=e,this.array=t}function y(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(1<arguments.length)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];f.push(new v(e,t)),1!==f.length||l||u(p)},v.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},{}],6:[function(e,n,r){!function(e){if("object"==typeof r)n.exports=e();else{var t;try{t=window}catch(e){t=self}t.SparkMD5=e()}}(function(c){"use strict";var r=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];function f(e,t){var n=e[0],r=e[1],i=e[2],o=e[3];r=((r+=((i=((i+=((o=((o+=((n=((n+=(r&i|~r&o)+t[0]-680876936|0)<<7|n>>>25)+r|0)&r|~n&i)+t[1]-389564586|0)<<12|o>>>20)+n|0)&n|~o&r)+t[2]+606105819|0)<<17|i>>>15)+o|0)&o|~i&n)+t[3]-1044525330|0)<<22|r>>>10)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r&i|~r&o)+t[4]-176418897|0)<<7|n>>>25)+r|0)&r|~n&i)+t[5]+1200080426|0)<<12|o>>>20)+n|0)&n|~o&r)+t[6]-1473231341|0)<<17|i>>>15)+o|0)&o|~i&n)+t[7]-45705983|0)<<22|r>>>10)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r&i|~r&o)+t[8]+1770035416|0)<<7|n>>>25)+r|0)&r|~n&i)+t[9]-1958414417|0)<<12|o>>>20)+n|0)&n|~o&r)+t[10]-42063|0)<<17|i>>>15)+o|0)&o|~i&n)+t[11]-1990404162|0)<<22|r>>>10)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r&i|~r&o)+t[12]+1804603682|0)<<7|n>>>25)+r|0)&r|~n&i)+t[13]-40341101|0)<<12|o>>>20)+n|0)&n|~o&r)+t[14]-1502002290|0)<<17|i>>>15)+o|0)&o|~i&n)+t[15]+1236535329|0)<<22|r>>>10)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r&o|i&~o)+t[1]-165796510|0)<<5|n>>>27)+r|0)&i|r&~i)+t[6]-1069501632|0)<<9|o>>>23)+n|0)&r|n&~r)+t[11]+643717713|0)<<14|i>>>18)+o|0)&n|o&~n)+t[0]-373897302|0)<<20|r>>>12)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r&o|i&~o)+t[5]-701558691|0)<<5|n>>>27)+r|0)&i|r&~i)+t[10]+38016083|0)<<9|o>>>23)+n|0)&r|n&~r)+t[15]-660478335|0)<<14|i>>>18)+o|0)&n|o&~n)+t[4]-405537848|0)<<20|r>>>12)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r&o|i&~o)+t[9]+568446438|0)<<5|n>>>27)+r|0)&i|r&~i)+t[14]-1019803690|0)<<9|o>>>23)+n|0)&r|n&~r)+t[3]-187363961|0)<<14|i>>>18)+o|0)&n|o&~n)+t[8]+1163531501|0)<<20|r>>>12)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r&o|i&~o)+t[13]-1444681467|0)<<5|n>>>27)+r|0)&i|r&~i)+t[2]-51403784|0)<<9|o>>>23)+n|0)&r|n&~r)+t[7]+1735328473|0)<<14|i>>>18)+o|0)&n|o&~n)+t[12]-1926607734|0)<<20|r>>>12)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r^i^o)+t[5]-378558|0)<<4|n>>>28)+r|0)^r^i)+t[8]-2022574463|0)<<11|o>>>21)+n|0)^n^r)+t[11]+1839030562|0)<<16|i>>>16)+o|0)^o^n)+t[14]-35309556|0)<<23|r>>>9)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r^i^o)+t[1]-1530992060|0)<<4|n>>>28)+r|0)^r^i)+t[4]+1272893353|0)<<11|o>>>21)+n|0)^n^r)+t[7]-155497632|0)<<16|i>>>16)+o|0)^o^n)+t[10]-1094730640|0)<<23|r>>>9)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r^i^o)+t[13]+681279174|0)<<4|n>>>28)+r|0)^r^i)+t[0]-358537222|0)<<11|o>>>21)+n|0)^n^r)+t[3]-722521979|0)<<16|i>>>16)+o|0)^o^n)+t[6]+76029189|0)<<23|r>>>9)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r^i^o)+t[9]-640364487|0)<<4|n>>>28)+r|0)^r^i)+t[12]-421815835|0)<<11|o>>>21)+n|0)^n^r)+t[15]+530742520|0)<<16|i>>>16)+o|0)^o^n)+t[2]-995338651|0)<<23|r>>>9)+i|0,r=((r+=((o=((o+=(r^((n=((n+=(i^(r|~o))+t[0]-198630844|0)<<6|n>>>26)+r|0)|~i))+t[7]+1126891415|0)<<10|o>>>22)+n|0)^((i=((i+=(n^(o|~r))+t[14]-1416354905|0)<<15|i>>>17)+o|0)|~n))+t[5]-57434055|0)<<21|r>>>11)+i|0,r=((r+=((o=((o+=(r^((n=((n+=(i^(r|~o))+t[12]+1700485571|0)<<6|n>>>26)+r|0)|~i))+t[3]-1894986606|0)<<10|o>>>22)+n|0)^((i=((i+=(n^(o|~r))+t[10]-1051523|0)<<15|i>>>17)+o|0)|~n))+t[1]-2054922799|0)<<21|r>>>11)+i|0,r=((r+=((o=((o+=(r^((n=((n+=(i^(r|~o))+t[8]+1873313359|0)<<6|n>>>26)+r|0)|~i))+t[15]-30611744|0)<<10|o>>>22)+n|0)^((i=((i+=(n^(o|~r))+t[6]-1560198380|0)<<15|i>>>17)+o|0)|~n))+t[13]+1309151649|0)<<21|r>>>11)+i|0,r=((r+=((o=((o+=(r^((n=((n+=(i^(r|~o))+t[4]-145523070|0)<<6|n>>>26)+r|0)|~i))+t[11]-1120210379|0)<<10|o>>>22)+n|0)^((i=((i+=(n^(o|~r))+t[2]+718787259|0)<<15|i>>>17)+o|0)|~n))+t[9]-343485551|0)<<21|r>>>11)+i|0,e[0]=n+e[0]|0,e[1]=r+e[1]|0,e[2]=i+e[2]|0,e[3]=o+e[3]|0}function l(e){var t,n=[];for(t=0;t<64;t+=4)n[t>>2]=e.charCodeAt(t)+(e.charCodeAt(t+1)<<8)+(e.charCodeAt(t+2)<<16)+(e.charCodeAt(t+3)<<24);return n}function d(e){var t,n=[];for(t=0;t<64;t+=4)n[t>>2]=e[t]+(e[t+1]<<8)+(e[t+2]<<16)+(e[t+3]<<24);return n}function i(e){var t,n,r,i,o,s,a=e.length,u=[1732584193,-271733879,-1732584194,271733878];for(t=64;t<=a;t+=64)f(u,l(e.substring(t-64,t)));for(n=(e=e.substring(t-64)).length,r=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t=0;t<n;t+=1)r[t>>2]|=e.charCodeAt(t)<<(t%4<<3);if(r[t>>2]|=128<<(t%4<<3),55<t)for(f(u,r),t=0;t<16;t+=1)r[t]=0;return i=(i=8*a).toString(16).match(/(.*?)(.{0,8})$/),o=parseInt(i[2],16),s=parseInt(i[1],16)||0,r[14]=o,r[15]=s,f(u,r),u}function n(e){var t,n="";for(t=0;t<4;t+=1)n+=r[e>>8*t+4&15]+r[e>>8*t&15];return n}function s(e){var t;for(t=0;t<e.length;t+=1)e[t]=n(e[t]);return e.join("")}function h(e,t){return(e=0|e||0)<0?Math.max(e+t,0):Math.min(e,t)}function o(e){return/[\u0080-\uFFFF]/.test(e)&&(e=unescape(encodeURIComponent(e))),e}function a(e){var t,n=[],r=e.length;for(t=0;t<r-1;t+=2)n.push(parseInt(e.substr(t,2),16));return String.fromCharCode.apply(String,n)}function u(){this.reset()}return"5d41402abc4b2a76b9719d911017c592"!==s(i("hello"))&&function(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n},"undefined"==typeof ArrayBuffer||ArrayBuffer.prototype.slice||(ArrayBuffer.prototype.slice=function(e,t){var n,r,i,o,s=this.byteLength,a=h(e,s),u=s;return t!==c&&(u=h(t,s)),u<a?new ArrayBuffer(0):(n=u-a,r=new ArrayBuffer(n),i=new Uint8Array(r),o=new Uint8Array(this,a,n),i.set(o),r)}),u.prototype.append=function(e){return this.appendBinary(o(e)),this},u.prototype.appendBinary=function(e){this._buff+=e,this._length+=e.length;var t,n=this._buff.length;for(t=64;t<=n;t+=64)f(this._hash,l(this._buff.substring(t-64,t)));return this._buff=this._buff.substring(t-64),this},u.prototype.end=function(e){var t,n,r=this._buff,i=r.length,o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(t=0;t<i;t+=1)o[t>>2]|=r.charCodeAt(t)<<(t%4<<3);return this._finish(o,i),n=s(this._hash),e&&(n=a(n)),this.reset(),n},u.prototype.reset=function(){return this._buff="",this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},u.prototype.getState=function(){return{buff:this._buff,length:this._length,hash:this._hash}},u.prototype.setState=function(e){return this._buff=e.buff,this._length=e.length,this._hash=e.hash,this},u.prototype.destroy=function(){delete this._hash,delete this._buff,delete this._length},u.prototype._finish=function(e,t){var n,r,i,o=t;if(e[o>>2]|=128<<(o%4<<3),55<o)for(f(this._hash,e),o=0;o<16;o+=1)e[o]=0;n=(n=8*this._length).toString(16).match(/(.*?)(.{0,8})$/),r=parseInt(n[2],16),i=parseInt(n[1],16)||0,e[14]=r,e[15]=i,f(this._hash,e)},u.hash=function(e,t){return u.hashBinary(o(e),t)},u.hashBinary=function(e,t){var n=s(i(e));return t?a(n):n},(u.ArrayBuffer=function(){this.reset()}).prototype.append=function(e){var t,n=function(e,t,n){var r=new Uint8Array(e.byteLength+t.byteLength);return r.set(new Uint8Array(e)),r.set(new Uint8Array(t),e.byteLength),n?r:r.buffer}(this._buff.buffer,e,!0),r=n.length;for(this._length+=e.byteLength,t=64;t<=r;t+=64)f(this._hash,d(n.subarray(t-64,t)));return this._buff=t-64<r?new Uint8Array(n.buffer.slice(t-64)):new Uint8Array(0),this},u.ArrayBuffer.prototype.end=function(e){var t,n,r=this._buff,i=r.length,o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(t=0;t<i;t+=1)o[t>>2]|=r[t]<<(t%4<<3);return this._finish(o,i),n=s(this._hash),e&&(n=a(n)),this.reset(),n},u.ArrayBuffer.prototype.reset=function(){return this._buff=new Uint8Array(0),this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},u.ArrayBuffer.prototype.getState=function(){var e=u.prototype.getState.call(this);return e.buff=function(e){return String.fromCharCode.apply(null,new Uint8Array(e))}(e.buff),e},u.ArrayBuffer.prototype.setState=function(e){return e.buff=function(e,t){var n,r=e.length,i=new ArrayBuffer(r),o=new Uint8Array(i);for(n=0;n<r;n+=1)o[n]=e.charCodeAt(n);return t?o:i}(e.buff,!0),u.prototype.setState.call(this,e)},u.ArrayBuffer.prototype.destroy=u.prototype.destroy,u.ArrayBuffer.prototype._finish=u.prototype._finish,u.ArrayBuffer.hash=function(e,t){var n=s(function(e){var t,n,r,i,o,s,a=e.length,u=[1732584193,-271733879,-1732584194,271733878];for(t=64;t<=a;t+=64)f(u,d(e.subarray(t-64,t)));for(n=(e=t-64<a?e.subarray(t-64):new Uint8Array(0)).length,r=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t=0;t<n;t+=1)r[t>>2]|=e[t]<<(t%4<<3);if(r[t>>2]|=128<<(t%4<<3),55<t)for(f(u,r),t=0;t<16;t+=1)r[t]=0;return i=(i=8*a).toString(16).match(/(.*?)(.{0,8})$/),o=parseInt(i[2],16),s=parseInt(i[1],16)||0,r[14]=o,r[15]=s,f(u,r),u}(new Uint8Array(e)));return t?a(n):n},u})},{}],7:[function(e,t,n){var r=e(10),i=e(11),o=i;o.v1=r,o.v4=i,t.exports=o},{10:10,11:11}],8:[function(e,t,n){for(var i=[],r=0;r<256;++r)i[r]=(r+256).toString(16).substr(1);t.exports=function(e,t){var n=t||0,r=i;return r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]}},{}],9:[function(e,t,n){var r="undefined"!=typeof crypto&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&msCrypto.getRandomValues.bind(msCrypto);if(r){var i=new Uint8Array(16);t.exports=function(){return r(i),i}}else{var o=new Array(16);t.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),o[t]=e>>>((3&t)<<3)&255;return o}}},{}],10:[function(e,t,n){var p,v,y=e(9),_=e(8),g=0,m=0;t.exports=function(e,t,n){var r=t&&n||0,i=t||[],o=(e=e||{}).node||p,s=void 0!==e.clockseq?e.clockseq:v;if(null==o||null==s){var a=y();null==o&&(o=p=[1|a[0],a[1],a[2],a[3],a[4],a[5]]),null==s&&(s=v=16383&(a[6]<<8|a[7]))}var u=void 0!==e.msecs?e.msecs:(new Date).getTime(),c=void 0!==e.nsecs?e.nsecs:m+1,f=u-g+(c-m)/1e4;if(f<0&&void 0===e.clockseq&&(s=s+1&16383),(f<0||g<u)&&void 0===e.nsecs&&(c=0),1e4<=c)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");g=u,v=s;var l=(1e4*(268435455&(u+=122192928e5))+(m=c))%4294967296;i[r++]=l>>>24&255,i[r++]=l>>>16&255,i[r++]=l>>>8&255,i[r++]=255&l;var d=u/4294967296*1e4&268435455;i[r++]=d>>>8&255,i[r++]=255&d,i[r++]=d>>>24&15|16,i[r++]=d>>>16&255,i[r++]=s>>>8|128,i[r++]=255&s;for(var h=0;h<6;++h)i[r+h]=o[h];return t||_(i)}},{8:8,9:9}],11:[function(e,t,n){var s=e(9),a=e(8);t.exports=function(e,t,n){var r=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var i=(e=e||{}).random||(e.rng||s)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t)for(var o=0;o<16;++o)t[r+o]=i[o];return t||a(i)}},{8:8,9:9}],12:[function(e,t,n){"use strict";function h(e,t,n){var r=n[n.length-1];e===r.element&&(n.pop(),r=n[n.length-1]);var i=r.element,o=r.index;if(Array.isArray(i))i.push(e);else if(o===t.length-2){i[t.pop()]=e}else t.push(e)}n.stringify=function(e){var t=[];t.push({obj:e});for(var n,r,i,o,s,a,u,c,f,l,d="";n=t.pop();)if(r=n.obj,d+=n.prefix||"",i=n.val||"")d+=i;else if("object"!=typeof r)d+=void 0===r?null:JSON.stringify(r);else if(null===r)d+="null";else if(Array.isArray(r)){for(t.push({val:"]"}),o=r.length-1;0<=o;o--)s=0===o?"":",",t.push({obj:r[o],prefix:s});t.push({val:"["})}else{for(u in a=[],r)r.hasOwnProperty(u)&&a.push(u);for(t.push({val:"}"}),o=a.length-1;0<=o;o--)f=r[c=a[o]],l=0<o?",":"",l+=JSON.stringify(c)+":",t.push({obj:f,prefix:l});t.push({val:"{"})}return d},n.parse=function(e){for(var t,n,r,i,o,s,a,u,c,f=[],l=[],d=0;;)if("}"!==(t=e[d++])&&"]"!==t&&void 0!==t)switch(t){case" ":case"\t":case"\n":case":":case",":break;case"n":d+=3,h(null,f,l);break;case"t":d+=3,h(!0,f,l);break;case"f":d+=4,h(!1,f,l);break;case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":case"-":for(n="",d--;;){if(r=e[d++],!/[\d\.\-e\+]/.test(r)){d--;break}n+=r}h(parseFloat(n),f,l);break;case'"':for(i="",o=void 0,s=0;'"'!==(a=e[d++])||"\\"===o&&s%2==1;)i+=a,"\\"===(o=a)?s++:s=0;h(JSON.parse('"'+i+'"'),f,l);break;case"[":u={element:[],index:f.length},f.push(u.element),l.push(u);break;case"{":c={element:{},index:f.length},f.push(c.element),l.push(c);break;default:throw new Error("unexpectedly reached end of input: "+t)}else{if(1===f.length)return f.pop();h(f.pop(),f,l)}}},{}],13:[function(Dr,Ir,e){(function(u,e){"use strict";function t(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var b,x,T=t(Dr(3)),r=t(Dr(7)),d=t(Dr(6)),i=t(Dr(12)),f=t(Dr(1)),o=t(Dr(4)),a=Dr(2);function s(e){return"$"+e}function c(){this._store={}}function n(e){if(this._store=new c,e&&Array.isArray(e))for(var t=0,n=e.length;t<n;t++)this.add(e[t])}function l(e){if(e instanceof ArrayBuffer)return function(e){if("function"==typeof e.slice)return e.slice(0);var t=new ArrayBuffer(e.byteLength),n=new Uint8Array(t),r=new Uint8Array(e);return n.set(r),t}(e);var t=e.size,n=e.type;return"function"==typeof e.slice?e.slice(0,t,n):e.webkitSlice(0,t,n)}c.prototype.get=function(e){var t=s(e);return this._store[t]},c.prototype.set=function(e,t){var n=s(e);return this._store[n]=t,!0},c.prototype.has=function(e){return s(e)in this._store},c.prototype.delete=function(e){var t=s(e),n=t in this._store;return delete this._store[t],n},c.prototype.forEach=function(e){for(var t=Object.keys(this._store),n=0,r=t.length;n<r;n++){var i=t[n];e(this._store[i],i=i.substring(1))}},Object.defineProperty(c.prototype,"size",{get:function(){return Object.keys(this._store).length}}),n.prototype.add=function(e){return this._store.set(e,!0)},n.prototype.has=function(e){return this._store.has(e)},n.prototype.forEach=function(n){this._store.forEach(function(e,t){n(t)})},Object.defineProperty(n.prototype,"size",{get:function(){return this._store.size}}),x=function(){if("undefined"==typeof Symbol||"undefined"==typeof Map||"undefined"==typeof Set)return!1;var e=Object.getOwnPropertyDescriptor(Map,Symbol.species);return e&&"get"in e&&Map[Symbol.species]===Map}()?(b=Set,Map):(b=n,c);var h=Function.prototype.toString,p=h.call(Object);function R(e){var t,n,r;if(!e||"object"!=typeof e)return e;if(Array.isArray(e)){for(t=[],n=0,r=e.length;n<r;n++)t[n]=R(e[n]);return t}if(e instanceof Date)return e.toISOString();if(function(e){return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer||"undefined"!=typeof Blob&&e instanceof Blob}(e))return l(e);if(!function(e){var t=Object.getPrototypeOf(e);if(null===t)return!0;var n=t.constructor;return"function"==typeof n&&n instanceof n&&h.call(n)==p}(e))return e;for(n in t={},e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=R(e[n]);void 0!==i&&(t[n]=i)}return t}function v(t){var n=!1;return f(function(e){if(n)throw new Error("once called more than once");n=!0,t.apply(this,e)})}function y(s){return f(function(i){i=R(i);var o=this,t="function"==typeof i[i.length-1]&&i.pop(),e=new Promise(function(n,r){var e;try{var t=v(function(e,t){e?r(e):n(t)});i.push(t),(e=s.apply(o,i))&&"function"==typeof e.then&&n(e)}catch(e){r(e)}});return t&&e.then(function(e){t(null,e)},t),e})}function m(o,e){return y(f(function(r){if(this._closed)return Promise.reject(new Error("database is closed"));if(this._destroyed)return Promise.reject(new Error("database is destroyed"));var i=this;return function(r,i,e){if(r.constructor.listeners("debug").length){for(var t=["api",r.name,i],n=0;n<e.length-1;n++)t.push(e[n]);r.constructor.emit("debug",t);var o=e[e.length-1];e[e.length-1]=function(e,t){var n=["api",r.name,i];n=n.concat(e?["error",e]:["success",t]),r.constructor.emit("debug",n),o(e,t)}}}(i,o,r),this.taskqueue.isReady?e.apply(this,r):new Promise(function(t,n){i.taskqueue.addTask(function(e){e?n(e):t(i[o].apply(i,r))})})}))}function w(e,t){for(var n={},r=0,i=t.length;r<i;r++){var o=t[r];o in e&&(n[o]=e[o])}return n}var _,g=6;function k(e){return e}function j(e){return[{ok:e}]}function O(a,u,e){var t=u.docs,c=new x;t.forEach(function(e){c.has(e.id)?c.get(e.id).push(e):c.set(e.id,[e])});var n=c.size,r=0,f=new Array(n);function l(){++r===n&&function(){var n=[];f.forEach(function(t){t.docs.forEach(function(e){n.push({id:t.id,docs:[e]})})}),e(null,{results:n})}()}var i=[];c.forEach(function(e,t){i.push(t)});var o=0;function d(){if(!(o>=i.length)){var e=Math.min(o+g,i.length),t=i.slice(o,e);!function(e,s){e.forEach(function(r,e){var i=s+e,t=c.get(r),n=w(t[0],["atts_since","attachments"]);n.open_revs=t.map(function(e){return e.rev}),n.open_revs=n.open_revs.filter(k);var o=k;0===n.open_revs.length&&(delete n.open_revs,o=j),["revs","attachments","binary","ajax","latest"].forEach(function(e){e in u&&(n[e]=u[e])}),a.get(r,n,function(e,t){var n;n=e?[{error:e}]:o(t),function(e,t,n){f[e]={id:t,docs:n},l()}(i,r,n),d()})})}(t,o),o+=t.length}}d()}try{localStorage.setItem("_pouch_check_localstorage",1),_=!!localStorage.getItem("_pouch_check_localstorage")}catch(e){_=!1}function A(){return _}function q(){a.EventEmitter.call(this),this._listeners={},function(t){A()&&addEventListener("storage",function(e){t.emit(e.key)})}(this)}function E(e){if("undefined"!=typeof console&&"function"==typeof console[e]){var t=Array.prototype.slice.call(arguments,1);console[e].apply(console,t)}}function M(e){var t=0;return e||(t=2e3),function(e,t){return e=parseInt(e,10)||0,(t=parseInt(t,10))!=t||t<=e?t=(e||1)<<1:t+=1,6e5<t&&(e=3e5,t=6e5),~~((t-e)*Math.random()+e)}(e,t)}function S(e,t){E("info","The above "+e+" is totally normal. "+t)}o(q,a.EventEmitter),q.prototype.addListener=function(e,t,n,r){if(!this._listeners[t]){var i=this,o=!1;this._listeners[t]=s,this.on(e,s)}function s(){if(i._listeners[t])if(o)o="waiting";else{o=!0;var e=w(r,["style","include_docs","attachments","conflicts","filter","doc_ids","view","since","query_params","binary","return_docs"]);n.changes(e).on("change",function(e){e.seq>r.since&&!r.cancelled&&(r.since=e.seq,r.onChange(e))}).on("complete",function(){"waiting"===o&&T(s),o=!1}).on("error",function(){o=!1})}}},q.prototype.removeListener=function(e,t){t in this._listeners&&(a.EventEmitter.prototype.removeListener.call(this,e,this._listeners[t]),delete this._listeners[t])},q.prototype.notifyLocalWindows=function(e){A()&&(localStorage[e]="a"===localStorage[e]?"b":"a")},q.prototype.notify=function(e){this.emit(e),this.notifyLocalWindows(e)};var C="function"==typeof Object.assign?Object.assign:function(e){for(var t=Object(e),n=1;n<arguments.length;n++){var r=arguments[n];if(null!=r)for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t};function P(e,t,n){Error.call(this,n),this.status=e,this.name=t,this.message=n,this.error=!0}o(P,Error),P.prototype.toString=function(){return JSON.stringify({status:this.status,name:this.name,message:this.message,reason:this.reason})};new P(401,"unauthorized","Name or password is incorrect.");var L=new P(400,"bad_request","Missing JSON list of 'docs'"),$=new P(404,"not_found","missing"),D=new P(409,"conflict","Document update conflict"),I=new P(400,"bad_request","_id field must contain a string"),B=new P(412,"missing_id","_id is required for puts"),N=new P(400,"bad_request","Only reserved document ids may start with underscore."),U=(new P(412,"precondition_failed","Database not open"),new P(500,"unknown_error","Database encountered an unknown error")),F=new P(500,"badarg","Some query argument is invalid"),K=(new P(400,"invalid_request","Request was invalid"),new P(400,"query_parse_error","Some query parameter is invalid")),J=new P(500,"doc_validation","Bad special document member"),z=new P(400,"bad_request","Something wrong with the request"),V=new P(400,"bad_request","Document must be a JSON object"),G=(new P(404,"not_found","Database not found"),new P(500,"indexed_db_went_bad","unknown")),Q=(new P(500,"web_sql_went_bad","unknown"),new P(500,"levelDB_went_went_bad","unknown"),new P(403,"forbidden","Forbidden by design doc validate_doc_update function"),new P(400,"bad_request","Invalid rev format")),W=(new P(412,"file_exists","The database could not be created, the file already exists."),new P(412,"missing_stub","A pre-existing attachment stub wasn't found"));new P(413,"invalid_url","Provided URL is invalid");function Y(n,e){function t(e){for(var t in n)"function"!=typeof n[t]&&(this[t]=n[t]);void 0!==e&&(this.reason=e)}return t.prototype=P.prototype,new t(e)}function H(e){if("object"!=typeof e){var t=e;(e=U).data=t}return"error"in e&&"conflict"===e.error&&(e.name="conflict",e.status=409),"name"in e||(e.name=e.error||"unknown"),"status"in e||(e.status=500),"message"in e||(e.message=e.message||e.reason),e}function X(r){var i={},o=r.filter&&"function"==typeof r.filter;return i.query=r.query_params,function(e){e.doc||(e.doc={});var t=o&&function(e,t,n){try{return!e(t,n)}catch(e){var r="Filter function threw: "+e.toString();return Y(z,r)}}(r.filter,e.doc,i);if("object"==typeof t)return t;if(t)return!1;if(r.include_docs){if(!r.attachments)for(var n in e.doc._attachments)e.doc._attachments.hasOwnProperty(n)&&(e.doc._attachments[n].stub=!0)}else delete e.doc;return!0}}function Z(e){for(var t=[],n=0,r=e.length;n<r;n++)t=t.concat(e[n]);return t}function ee(e){var t;if(e?"string"!=typeof e?t=Y(I):/^_/.test(e)&&!/^_(design|local)/.test(e)&&(t=Y(N)):t=Y(B),t)throw t}function te(e){return"boolean"==typeof e._remote?e._remote:"function"==typeof e.type&&(E("warn","db.type() is deprecated and will be removed in a future version of PouchDB"),"http"===e.type())}function ne(e){if(!e)return null;var t=e.split("/");return 2===t.length?t:1===t.length?[e,e]:null}function re(e){var t=ne(e);return t?t.join("/"):null}var ie=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],oe="queryKey",se=/(?:^|&)([^&=]*)=?([^&]*)/g,ae=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;function ue(e){for(var t=ae.exec(e),r={},n=14;n--;){var i=ie[n],o=t[n]||"",s=-1!==["user","password"].indexOf(i);r[i]=s?decodeURIComponent(o):o}return r[oe]={},r[ie[12]].replace(se,function(e,t,n){t&&(r[oe][t]=n)}),r}function ce(e,t){var n=[],r=[];for(var i in t)t.hasOwnProperty(i)&&(n.push(i),r.push(t[i]));return n.push(e),Function.apply(null,n).apply(null,r)}function fe(s,a,u){return new Promise(function(i,o){s.get(a,function(e,t){if(e){if(404!==e.status)return o(e);t={}}var n=t._rev,r=u(t);if(!r)return i({updated:!1,rev:n});r._id=a,r._rev=n,i(function(t,n,r){return t.put(n).then(function(e){return{updated:!0,rev:e.rev}},function(e){if(409!==e.status)throw e;return fe(t,n._id,r)})}(s,r,u))})})}var le=function(e){return atob(e)},de=function(e){return btoa(e)};function he(t,n){t=t||[],n=n||{};try{return new Blob(t,n)}catch(e){if("TypeError"!==e.name)throw e;for(var r=new("undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder?MozBlobBuilder:WebKitBlobBuilder),i=0;i<t.length;i+=1)r.append(t[i]);return r.getBlob(n.type)}}function pe(e,t){return he([function(e){for(var t=e.length,n=new ArrayBuffer(t),r=new Uint8Array(n),i=0;i<t;i++)r[i]=e.charCodeAt(i);return n}(e)],{type:t})}function ve(e,t){return pe(le(e),t)}function ye(e,n){var t=new FileReader,r="function"==typeof t.readAsBinaryString;t.onloadend=function(e){var t=e.target.result||"";if(r)return n(t);n(function(e){for(var t="",n=new Uint8Array(e),r=n.byteLength,i=0;i<r;i++)t+=String.fromCharCode(n[i]);return t}(t))},r?t.readAsBinaryString(e):t.readAsArrayBuffer(e)}function _e(e,t){ye(e,function(e){t(e)})}function ge(e,t){_e(e,function(e){t(de(e))})}var me=e.setImmediate||e.setTimeout,be=32768;function we(t,e,n,r,i){(0<n||r<e.size)&&(e=function(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.slice(t,n)}(e,n,r)),function(e,n){var t=new FileReader;t.onloadend=function(e){var t=e.target.result||new ArrayBuffer(0);n(t)},t.readAsArrayBuffer(e)}(e,function(e){t.append(e),i()})}function ke(e,t,n,r,i){(0<n||r<t.length)&&(t=t.substring(n,r)),e.appendBinary(t),i()}function je(n,t){var e="string"==typeof n,r=e?n.length:n.size,i=Math.min(be,r),o=Math.ceil(r/i),s=0,a=e?new d:new d.ArrayBuffer,u=e?ke:we;function c(){me(l)}function f(){var e=function(e){return de(e)}(a.end(!0));t(e),a.destroy()}function l(){var e=s*i,t=e+i;u(a,n,e,t,++s<o?c:f)}l()}function Oe(e){return d.hash(e)}function Ae(e,t){var n=R(e);return t?(delete n._rev_tree,Oe(JSON.stringify(n))):r.v4().replace(/-/g,"").toLowerCase()}var qe=r.v4;function Ee(e){for(var t,n,r,i,o=e.rev_tree.slice();i=o.pop();){var s=i.ids,a=s[2],u=i.pos;if(a.length)for(var c=0,f=a.length;c<f;c++)o.push({pos:u+1,ids:a[c]});else{var l=!!s[1].deleted,d=s[0];t&&!(r!==l?r:n!==u?n<u:t<d)||(t=d,n=u,r=l)}}return n+"-"+t}function Se(e,t){for(var n,r=e.slice();n=r.pop();)for(var i=n.pos,o=n.ids,s=o[2],a=t(0===s.length,i,o[0],n.ctx,o[1]),u=0,c=s.length;u<c;u++)r.push({pos:i+1,ids:s[u],ctx:a})}function xe(e,t){return e.pos-t.pos}function Ce(e){var o=[];Se(e,function(e,t,n,r,i){e&&o.push({rev:t+"-"+n,pos:t,opts:i})}),o.sort(xe).reverse();for(var t=0,n=o.length;t<n;t++)delete o[t].pos;return o}function Pe(e){for(var t=Ee(e),n=Ce(e.rev_tree),r=[],i=0,o=n.length;i<o;i++){var s=n[i];s.rev===t||s.opts.deleted||r.push(s.rev)}return r}function Le(e){for(var t,n=[],r=e.slice();t=r.pop();){var i=t.pos,o=t.ids,s=o[0],a=o[1],u=o[2],c=0===u.length,f=t.history?t.history.slice():[];f.push({id:s,opts:a}),c&&n.push({pos:i+1-f.length,ids:f});for(var l=0,d=u.length;l<d;l++)r.push({pos:i+1,ids:u[l],history:f})}return n.reverse()}function $e(e,t){return e.pos-t.pos}function De(e,t){for(var n,r,i=t,o=e.length;i<o;i++){var s=e[i],a=[s.id,s.opts,[]];r?(r[2].push(a),r=a):n=r=a}return n}function Ie(e,t){return e[0]<t[0]?-1:1}function Be(e,t){for(var n,r,i,o=[{tree1:e,tree2:t}],s=!1;0<o.length;){var a=o.pop(),u=a.tree1,c=a.tree2;(u[1].status||c[1].status)&&(u[1].status="available"===u[1].status||"available"===c[1].status?"available":"missing");for(var f=0;f<c[2].length;f++)if(u[2][0]){for(var l=!1,d=0;d<u[2].length;d++)u[2][d][0]===c[2][f][0]&&(o.push({tree1:u[2][d],tree2:c[2][f]}),l=!0);l||(s="new_branch",n=u[2],r=c[2][f],void 0,i=function(e,t,n){for(var r,i=0,o=e.length;i<o;)n(e[r=i+o>>>1],t)<0?i=1+r:o=r;return i}(n,r,Ie),n.splice(i,0,r))}else s="new_leaf",u[2][0]=c[2][f]}return{conflicts:s,tree:e}}function Te(e,t,n){var r,i=[],o=!1,s=!1;if(!e.length)return{tree:[t],conflicts:"new_leaf"};for(var a=0,u=e.length;a<u;a++){var c=e[a];if(c.pos===t.pos&&c.ids[0]===t.ids[0])r=Be(c.ids,t.ids),i.push({pos:c.pos,ids:r.tree}),o=o||r.conflicts,s=!0;else if(!0!==n){var f=c.pos<t.pos?c:t,l=c.pos<t.pos?t:c,d=l.pos-f.pos,h=[],p=[];for(p.push({ids:f.ids,diff:d,parent:null,parentIdx:null});0<p.length;){var v=p.pop();if(0!==v.diff)for(var y=v.ids[2],_=0,g=y.length;_<g;_++)p.push({ids:y[_],diff:v.diff-1,parent:v.ids,parentIdx:_});else v.ids[0]===l.ids[0]&&h.push(v)}var m=h[0];m?(r=Be(m.ids,l.ids),m.parent[2][m.parentIdx]=r.tree,i.push({pos:f.pos,ids:f.ids}),o=o||r.conflicts,s=!0):i.push(c)}else i.push(c)}return s||i.push(t),i.sort($e),{tree:i,conflicts:o||"internal_node"}}function Re(e,t,n){var r=Te(e,t),i=function(e,t){for(var r,n,i=Le(e),o=0,s=i.length;o<s;o++){var a,u=i[o],c=u.ids;if(c.length>t){r||(r={});var f=c.length-t;a={pos:u.pos+f,ids:De(c,f)};for(var l=0;l<f;l++){var d=u.pos+l+"-"+c[l].id;r[d]=!0}}else a={pos:u.pos,ids:De(c,0)};n=n?Te(n,a,!0).tree:[a]}return r&&Se(n,function(e,t,n){delete r[t+"-"+n]}),{tree:n,revs:r?Object.keys(r):[]}}(r.tree,n);return{tree:i.tree,stemmedRevs:i.revs,conflicts:r.conflicts}}function Me(e){return e.ids}function Ne(e,t){t||(t=Ee(e));for(var n,r=t.substring(t.indexOf("-")+1),i=e.rev_tree.map(Me);n=i.pop();){if(n[0]===r)return!!n[1].deleted;i=i.concat(n[2])}}function Ue(e){return/^_local/.test(e)}function Fe(n,t,r){a.EventEmitter.call(this);var i=this;this.db=n;var o=(t=t?R(t):{}).complete=v(function(e,t){e?0<function(e,t){return"listenerCount"in e?e.listenerCount(t):a.EventEmitter.listenerCount(e,t)}(i,"error")&&i.emit("error",e):i.emit("complete",t),i.removeAllListeners(),n.removeListener("destroyed",s)});function s(){i.cancel()}r&&(i.on("complete",function(e){r(null,e)}),i.on("error",r)),n.once("destroyed",s),t.onChange=function(e,t,n){i.isCancelled||function(e,t,n,r){try{e.emit("change",t,n,r)}catch(e){E("error",'Error in .on("change", function):',e)}}(i,e,t,n)};var e=new Promise(function(n,r){t.complete=function(e,t){e?r(e):n(t)}});i.once("cancel",function(){n.removeListener("destroyed",s),t.complete(null,{status:"cancelled"})}),this.then=e.then.bind(e),this.catch=e.catch.bind(e),this.then(function(e){o(null,e)},o),n.taskqueue.isReady?i.validateChanges(t):n.taskqueue.addTask(function(e){e?t.complete(e):i.isCancelled?i.emit("cancel"):i.validateChanges(t)})}function Ke(e,t,n){var r=[{rev:e._rev}];"all_docs"===n.style&&(r=Ce(t.rev_tree).map(function(e){return{rev:e.rev}}));var i={id:t.id,changes:r,doc:e};return Ne(t,e._rev)&&(i.deleted=!0),n.conflicts&&(i.doc._conflicts=Pe(t),i.doc._conflicts.length||delete i.doc._conflicts),i}function Je(e,t){return e<t?-1:t<e?1:0}function ze(n,r){return function(e,t){e||t[0]&&t[0].error?((e=e||t[0]).docId=r,n(e)):n(null,t.length?t[0]:t)}}function Ve(e,t){var n=Je(e._id,t._id);return 0!==n?n:Je(e._revisions?e._revisions.start:0,t._revisions?t._revisions.start:0)}function Ge(){for(var e in a.EventEmitter.call(this),Ge.prototype)"function"==typeof this[e]&&(this[e]=this[e].bind(this))}function Qe(){this.isReady=!1,this.failed=!1,this.queue=[]}function We(e,t){if(!(this instanceof We))return new We(e,t);var n=this;if(t=t||{},e&&"object"==typeof e&&(e=(t=e).name,delete t.name),void 0===t.deterministic_revs&&(t.deterministic_revs=!0),this.__opts=t=R(t),n.auto_compaction=t.auto_compaction,n.prefix=We.prefix,"string"!=typeof e)throw new Error("Missing/invalid DB name");var r=function(e,t){var n=e.match(/([a-z-]*):\/\/(.*)/);if(n)return{name:/https?/.test(n[1])?n[1]+"://"+n[2]:n[2],adapter:n[1]};var r=We.adapters,i=We.preferredAdapters,o=We.prefix,s=t.adapter;if(!s)for(var a=0;a<i.length&&("idb"===(s=i[a])&&"websql"in r&&A()&&localStorage["_pouch__websqldb_"+o+e]);++a)E("log",'PouchDB is downgrading "'+e+'" to WebSQL to avoid data loss, because it was already opened with WebSQL.');var u=r[s];return{name:!(u&&"use_prefix"in u)||u.use_prefix?o+e:e,adapter:s}}((t.prefix||"")+e,t);if(t.name=r.name,t.adapter=t.adapter||r.adapter,n.name=e,n._adapter=t.adapter,We.emit("debug",["adapter","Picked adapter: ",t.adapter]),!We.adapters[t.adapter]||!We.adapters[t.adapter].valid())throw new Error("Invalid Adapter: "+t.adapter);Ge.call(n),n.taskqueue=new Qe,n.adapter=t.adapter,We.adapters[t.adapter].call(n,t,function(e){if(e)return n.taskqueue.fail(e);!function(t){function e(e){t.removeListener("closed",n),e||t.constructor.emit("destroyed",t.name)}function n(){t.removeListener("destroyed",e),t.constructor.emit("unref",t)}t.once("destroyed",e),t.once("closed",n),t.constructor.emit("ref",t)}(n),n.emit("created",n),We.emit("created",n.name),n.taskqueue.ready(n)})}o(Fe,a.EventEmitter),Fe.prototype.cancel=function(){this.isCancelled=!0,this.db.taskqueue.isReady&&this.emit("cancel")},Fe.prototype.validateChanges=function(t){var n=t.complete,r=this;We._changesFilterPlugin?We._changesFilterPlugin.validate(t,function(e){if(e)return n(e);r.doChanges(t)}):r.doChanges(t)},Fe.prototype.doChanges=function(t){var n=this,r=t.complete;if("live"in(t=R(t))&&!("continuous"in t)&&(t.continuous=t.live),t.processChange=Ke,"latest"===t.since&&(t.since="now"),t.since||(t.since=0),"now"!==t.since){if(We._changesFilterPlugin){if(We._changesFilterPlugin.normalize(t),We._changesFilterPlugin.shouldFilter(this,t))return We._changesFilterPlugin.filter(this,t)}else["doc_ids","filter","selector","view"].forEach(function(e){e in t&&E("warn",'The "'+e+'" option was passed in to changes/replicate, but pouchdb-changes-filter plugin is not installed, so it was ignored. Please install the plugin to enable filtering.')});"descending"in t||(t.descending=!1),t.limit=0===t.limit?1:t.limit,t.complete=r;var i=this.db._changes(t);if(i&&"function"==typeof i.cancel){var o=n.cancel;n.cancel=f(function(e){i.cancel(),o.apply(this,e)})}}else this.db.info().then(function(e){n.isCancelled?r(null,{status:"cancelled"}):(t.since=e.update_seq,n.doChanges(t))},r)},o(Ge,a.EventEmitter),Ge.prototype.post=m("post",function(e,t,n){if("function"==typeof t&&(n=t,t={}),"object"!=typeof e||Array.isArray(e))return n(Y(V));this.bulkDocs({docs:[e]},t,ze(n,e._id))}),Ge.prototype.put=m("put",function(n,t,r){if("function"==typeof t&&(r=t,t={}),"object"!=typeof n||Array.isArray(n))return r(Y(V));if(ee(n._id),Ue(n._id)&&"function"==typeof this._putLocal)return n._deleted?this._removeLocal(n,r):this._putLocal(n,r);var e,i,o,s,a=this;function u(e){"function"==typeof a._put&&!1!==t.new_edits?a._put(n,t,e):a.bulkDocs({docs:[n]},t,ze(e,n._id))}t.force&&n._rev?(e=n._rev.split("-"),i=e[1],o=parseInt(e[0],10)+1,s=Ae(),n._revisions={start:o,ids:[s,i]},n._rev=o+"-"+s,t.new_edits=!1,u(function(e){var t=e?null:{ok:!0,id:n._id,rev:n._rev};r(e,t)})):u(r)}),Ge.prototype.putAttachment=m("putAttachment",function(t,n,r,i,o){var s=this;function a(e){var t="_rev"in e?parseInt(e._rev,10):0;return e._attachments=e._attachments||{},e._attachments[n]={content_type:o,data:i,revpos:++t},s.put(e)}return"function"==typeof o&&(o=i,i=r,r=null),void 0===o&&(o=i,i=r,r=null),o||E("warn","Attachment",n,"on document",t,"is missing content_type"),s.get(t).then(function(e){if(e._rev!==r)throw Y(D);return a(e)},function(e){if(e.reason===$.message)return a({_id:t});throw e})}),Ge.prototype.removeAttachment=m("removeAttachment",function(e,n,r,i){var o=this;o.get(e,function(e,t){if(e)i(e);else if(t._rev===r){if(!t._attachments)return i();delete t._attachments[n],0===Object.keys(t._attachments).length&&delete t._attachments,o.put(t,i)}else i(Y(D))})}),Ge.prototype.remove=m("remove",function(e,t,n,r){var i;"string"==typeof t?(i={_id:e,_rev:t},"function"==typeof n&&(r=n,n={})):(i=e,n="function"==typeof t?(r=t,{}):(r=n,t)),(n=n||{}).was_delete=!0;var o={_id:i._id,_rev:i._rev||n.rev,_deleted:!0};if(Ue(o._id)&&"function"==typeof this._removeLocal)return this._removeLocal(i,r);this.bulkDocs({docs:[o]},n,ze(r,o._id))}),Ge.prototype.revsDiff=m("revsDiff",function(i,e,o){"function"==typeof e&&(o=e,e={});var s=Object.keys(i);if(!s.length)return o(null,{});var a=0,u=new x;function c(e,t){u.has(e)||u.set(e,{missing:[]}),u.get(e).missing.push(t)}s.map(function(r){this._getRevisionTree(r,function(e,t){if(e&&404===e.status&&"missing"===e.message)u.set(r,{missing:i[r]});else{if(e)return o(e);!function(a,e){var u=i[a].slice(0);Se(e,function(e,t,n,r,i){var o=t+"-"+n,s=u.indexOf(o);-1!==s&&(u.splice(s,1),"available"!==i.status&&c(a,o))}),u.forEach(function(e){c(a,e)})}(r,t)}if(++a===s.length){var n={};return u.forEach(function(e,t){n[t]=e}),o(null,n)}})},this)}),Ge.prototype.bulkGet=m("bulkGet",function(e,t){O(this,e,t)}),Ge.prototype.compactDocument=m("compactDocument",function(r,i,o){var u=this;this._getRevisionTree(r,function(e,t){if(e)return o(e);var n=function(e){var o={},s=[];return Se(e,function(e,t,n,r){var i=t+"-"+n;return e&&(o[i]=0),void 0!==r&&s.push({from:r,to:i}),i}),s.reverse(),s.forEach(function(e){void 0===o[e.from]?o[e.from]=1+o[e.to]:o[e.from]=Math.min(o[e.from],1+o[e.to])}),o}(t),s=[],a=[];Object.keys(n).forEach(function(e){n[e]>i&&s.push(e)}),Se(t,function(e,t,n,r,i){var o=t+"-"+n;"available"===i.status&&-1!==s.indexOf(o)&&a.push(o)}),u._doCompaction(r,a,o)})}),Ge.prototype.compact=m("compact",function(e,t){"function"==typeof e&&(t=e,e={});var n=this;e=e||{},n._compactionQueue=n._compactionQueue||[],n._compactionQueue.push({opts:e,callback:t}),1===n._compactionQueue.length&&function n(r){var e=r._compactionQueue[0],t=e.opts,i=e.callback;r.get("_local/compaction").catch(function(){return!1}).then(function(e){e&&e.last_seq&&(t.last_seq=e.last_seq),r._compact(t,function(e,t){e?i(e):i(null,t),T(function(){r._compactionQueue.shift(),r._compactionQueue.length&&n(r)})})})}(n)}),Ge.prototype._compact=function(e,n){var r=this,t={return_docs:!1,last_seq:e.last_seq||0},i=[];r.changes(t).on("change",function(e){i.push(r.compactDocument(e.id,0))}).on("complete",function(e){var t=e.last_seq;Promise.all(i).then(function(){return fe(r,"_local/compaction",function(e){return(!e.last_seq||e.last_seq<t)&&(e.last_seq=t,e)})}).then(function(){n(null,{ok:!0})}).catch(n)}).on("error",n)},Ge.prototype.get=m("get",function(b,w,k){if("function"==typeof w&&(k=w,w={}),"string"!=typeof b)return k(Y(I));if(Ue(b)&&"function"==typeof this._getLocal)return this._getLocal(b,k);var n=[],j=this;function r(){var s=[],a=n.length;if(!a)return k(null,s);n.forEach(function(o){j.get(b,{rev:o,revs:w.revs,latest:w.latest,attachments:w.attachments,binary:w.binary},function(e,t){if(e)s.push({missing:o});else{for(var n,r=0,i=s.length;r<i;r++)if(s[r].ok&&s[r].ok._rev===t._rev){n=!0;break}n||s.push({ok:t})}--a||k(null,s)})})}if(!w.open_revs)return this._get(b,w,function(e,t){if(e)return e.docId=b,k(e);var i=t.doc,n=t.metadata,o=t.ctx;if(w.conflicts){var r=Pe(n);r.length&&(i._conflicts=r)}if(Ne(n,i._rev)&&(i._deleted=!0),w.revs||w.revs_info){for(var s=i._rev.split("-"),a=parseInt(s[0],10),u=s[1],c=Le(n.rev_tree),f=null,l=0;l<c.length;l++){var d=c[l],h=d.ids.map(function(e){return e.id}).indexOf(u);(h===a-1||!f&&-1!==h)&&(f=d)}if(!f)return(e=new Error("invalid rev tree")).docId=b,k(e);var p=f.ids.map(function(e){return e.id}).indexOf(i._rev.split("-")[1])+1,v=f.ids.length-p;if(f.ids.splice(p,v),f.ids.reverse(),w.revs&&(i._revisions={start:f.pos+f.ids.length-1,ids:f.ids.map(function(e){return e.id})}),w.revs_info){var y=f.pos+f.ids.length;i._revs_info=f.ids.map(function(e){return{rev:--y+"-"+e.id,status:e.opts.status}})}}if(w.attachments&&i._attachments){var _=i._attachments,g=Object.keys(_).length;if(0===g)return k(null,i);Object.keys(_).forEach(function(r){this._getAttachment(i._id,r,_[r],{rev:i._rev,binary:w.binary,ctx:o},function(e,t){var n=i._attachments[r];n.data=t,delete n.stub,delete n.length,--g||k(null,i)})},j)}else{if(i._attachments)for(var m in i._attachments)i._attachments.hasOwnProperty(m)&&(i._attachments[m].stub=!0);k(null,i)}});if("all"===w.open_revs)this._getRevisionTree(b,function(e,t){if(e)return k(e);n=Ce(t).map(function(e){return e.rev}),r()});else{if(!Array.isArray(w.open_revs))return k(Y(U,"function_clause"));n=w.open_revs;for(var e=0;e<n.length;e++){var t=n[e];if("string"!=typeof t||!/^\d+-/.test(t))return k(Y(Q))}r()}}),Ge.prototype.getAttachment=m("getAttachment",function(n,r,i,o){var s=this;i instanceof Function&&(o=i,i={}),this._get(n,i,function(e,t){return e?o(e):t.doc._attachments&&t.doc._attachments[r]?(i.ctx=t.ctx,i.binary=!0,void s._getAttachment(n,r,t.doc._attachments[r],i,o)):o(Y($))})}),Ge.prototype.allDocs=m("allDocs",function(t,e){if("function"==typeof t&&(e=t,t={}),t.skip=void 0!==t.skip?t.skip:0,t.start_key&&(t.startkey=t.start_key),t.end_key&&(t.endkey=t.end_key),"keys"in t){if(!Array.isArray(t.keys))return e(new TypeError("options.keys must be an array"));var n=["startkey","endkey","key"].filter(function(e){return e in t})[0];if(n)return void e(Y(K,"Query parameter `"+n+"` is not compatible with multi-get"));if(!te(this)&&(function(e){var t="limit"in e?e.keys.slice(e.skip,e.limit+e.skip):0<e.skip?e.keys.slice(e.skip):e.keys;e.keys=t,e.skip=0,delete e.limit,e.descending&&(t.reverse(),e.descending=!1)}(t),0===t.keys.length))return this._allDocs({limit:0},e)}return this._allDocs(t,e)}),Ge.prototype.changes=function(e,t){return"function"==typeof e&&(t=e,e={}),(e=e||{}).return_docs="return_docs"in e?e.return_docs:!e.live,new Fe(this,e,t)},Ge.prototype.close=m("close",function(e){return this._closed=!0,this.emit("closed"),this._close(e)}),Ge.prototype.info=m("info",function(n){var r=this;this._info(function(e,t){if(e)return n(e);t.db_name=t.db_name||r.name,t.auto_compaction=!(!r.auto_compaction||te(r)),t.adapter=r.adapter,n(null,t)})}),Ge.prototype.id=m("id",function(e){return this._id(e)}),Ge.prototype.type=function(){return"function"==typeof this._type?this._type():this.adapter},Ge.prototype.bulkDocs=m("bulkDocs",function(e,i,o){if("function"==typeof i&&(o=i,i={}),i=i||{},Array.isArray(e)&&(e={docs:e}),!e||!e.docs||!Array.isArray(e.docs))return o(Y(L));for(var t=0;t<e.docs.length;++t)if("object"!=typeof e.docs[t]||Array.isArray(e.docs[t]))return o(Y(V));var n;if(e.docs.forEach(function(t){t._attachments&&Object.keys(t._attachments).forEach(function(e){n=n||function(e){return"_"===e.charAt(0)&&e+" is not a valid attachment name, attachment names cannot start with '_'"}(e),t._attachments[e].content_type||E("warn","Attachment",e,"on document",t._id,"is missing content_type")})}),n)return o(Y(z,n));"new_edits"in i||(i.new_edits=!("new_edits"in e)||e.new_edits);var s=this;i.new_edits||te(s)||e.docs.sort(Ve),function(e){for(var t=0;t<e.length;t++){var n=e[t];if(n._deleted)delete n._attachments;else if(n._attachments)for(var r=Object.keys(n._attachments),i=0;i<r.length;i++){var o=r[i];n._attachments[o]=w(n._attachments[o],["data","digest","content_type","length","revpos","stub"])}}}(e.docs);var a=e.docs.map(function(e){return e._id});return this._bulkDocs(e,i,function(e,t){if(e)return o(e);if(i.new_edits||(t=t.filter(function(e){return e.error})),!te(s))for(var n=0,r=t.length;n<r;n++)t[n].id=t[n].id||a[n];o(null,t)})}),Ge.prototype.registerDependentDatabase=m("registerDependentDatabase",function(t,e){var n=new this.constructor(t,this.__opts);fe(this,"_local/_pouch_dependentDbs",function(e){return e.dependentDbs=e.dependentDbs||{},!e.dependentDbs[t]&&(e.dependentDbs[t]=!0,e)}).then(function(){e(null,{db:n})}).catch(e)}),Ge.prototype.destroy=m("destroy",function(e,o){"function"==typeof e&&(o=e,e={});var s=this,a=!("use_prefix"in s)||s.use_prefix;function u(){s._destroy(e,function(e,t){if(e)return o(e);s._destroyed=!0,s.emit("destroyed"),o(null,t||{ok:!0})})}if(te(s))return u();s.get("_local/_pouch_dependentDbs",function(e,t){if(e)return 404!==e.status?o(e):u();var n=t.dependentDbs,r=s.constructor,i=Object.keys(n).map(function(e){var t=a?e.replace(new RegExp("^"+r.prefix),""):e;return new r(t,s.__opts).destroy()});Promise.all(i).then(u,o)})}),Qe.prototype.execute=function(){var e;if(this.failed)for(;e=this.queue.shift();)e(this.failed);else for(;e=this.queue.shift();)e()},Qe.prototype.fail=function(e){this.failed=e,this.execute()},Qe.prototype.ready=function(e){this.isReady=!0,this.db=e,this.execute()},Qe.prototype.addTask=function(e){this.queue.push(e),this.failed&&this.execute()},o(We,Ge);var Ye="undefined"!=typeof AbortController?AbortController:function(){return{abort:function(){}}},He=fetch,Xe=Headers;We.adapters={},We.preferredAdapters=[],We.prefix="_pouch_";var Ze=new a.EventEmitter;!function(t){Object.keys(a.EventEmitter.prototype).forEach(function(e){"function"==typeof a.EventEmitter.prototype[e]&&(t[e]=Ze[e].bind(Ze))});var r=t._destructionListeners=new x;t.on("ref",function(e){r.has(e.name)||r.set(e.name,[]),r.get(e.name).push(e)}),t.on("unref",function(e){if(r.has(e.name)){var t=r.get(e.name),n=t.indexOf(e);n<0||(t.splice(n,1),1<t.length?r.set(e.name,t):r.delete(e.name))}}),t.on("destroyed",function(e){if(r.has(e)){var t=r.get(e);r.delete(e),t.forEach(function(e){e.emit("destroyed",!0)})}})}(We),We.adapter=function(e,t,n){t.valid()&&(We.adapters[e]=t,n&&We.preferredAdapters.push(e))},We.plugin=function(t){if("function"==typeof t)t(We);else{if("object"!=typeof t||0===Object.keys(t).length)throw new Error('Invalid plugin: got "'+t+'", expected an object or a function');Object.keys(t).forEach(function(e){We.prototype[e]=t[e]})}return this.__defaults&&(We.__defaults=C({},this.__defaults)),We},We.defaults=function(e){function n(e,t){if(!(this instanceof n))return new n(e,t);t=t||{},e&&"object"==typeof e&&(e=(t=e).name,delete t.name),t=C({},n.__defaults,t),We.call(this,e,t)}return o(n,We),n.preferredAdapters=We.preferredAdapters.slice(),Object.keys(We).forEach(function(e){e in n||(n[e]=We[e])}),n.__defaults=C({},this.__defaults,e),n},We.fetch=function(e,t){return He(e,t)};function et(e,t){for(var n=e,r=0,i=t.length;r<i;r++){if(!(n=n[t[r]]))break}return n}function tt(e){for(var t=[],n="",r=0,i=e.length;r<i;r++){var o=e[r];"."===o?n=0<r&&"\\"===e[r-1]?n.substring(0,n.length-1)+".":(t.push(n),""):n+=o}return t.push(n),t}var nt=["$or","$nor","$not"];function rt(e){return-1<nt.indexOf(e)}function it(e){return Object.keys(e)[0]}function ot(e){var i={};return e.forEach(function(t){Object.keys(t).forEach(function(e){var n=t[e];if("object"!=typeof n&&(n={$eq:n}),rt(e))n instanceof Array?i[e]=n.map(function(e){return ot([e])}):i[e]=ot([n]);else{var r=i[e]=i[e]||{};Object.keys(n).forEach(function(e){var t=n[e];return"$gt"===e||"$gte"===e?function(e,t,n){if(void 0!==n.$eq)return;void 0!==n.$gte?"$gte"===e?t>n.$gte&&(n.$gte=t):t>=n.$gte&&(delete n.$gte,n.$gt=t):void 0!==n.$gt?"$gte"===e?t>n.$gt&&(delete n.$gt,n.$gte=t):t>n.$gt&&(n.$gt=t):n[e]=t}(e,t,r):"$lt"===e||"$lte"===e?function(e,t,n){if(void 0!==n.$eq)return;void 0!==n.$lte?"$lte"===e?t<n.$lte&&(n.$lte=t):t<=n.$lte&&(delete n.$lte,n.$lt=t):void 0!==n.$lt?"$lte"===e?t<n.$lt&&(delete n.$lt,n.$lte=t):t<n.$lt&&(n.$lt=t):n[e]=t}(e,t,r):"$ne"===e?function(e,t){"$ne"in t?t.$ne.push(e):t.$ne=[e]}(t,r):"$eq"===e?function(e,t){delete t.$gt,delete t.$gte,delete t.$lt,delete t.$lte,delete t.$ne,t.$eq=e}(t,r):void(r[e]=t)})}})}),i}function st(e){var t=R(e),n=!1;!function e(t,n){for(var r in t){"$and"===r&&(n=!0);var i=t[r];"object"==typeof i&&(n=e(i,n))}return n}(t,!1)||("$and"in(t=function e(t){for(var n in t){if(Array.isArray(t))for(var r in t)t[r].$and&&(t[r]=ot(t[r].$and));var i=t[n];"object"==typeof i&&e(i)}return t}(t))&&(t=ot(t.$and)),n=!0),["$or","$nor"].forEach(function(e){e in t&&t[e].forEach(function(e){for(var t=Object.keys(e),n=0;n<t.length;n++){var r=t[n],i=e[r];"object"==typeof i&&null!==i||(e[r]={$eq:i})}})}),"$not"in t&&(t.$not=ot([t.$not]));for(var r=Object.keys(t),i=0;i<r.length;i++){var o=r[i],s=t[o];"object"!=typeof s||null===s?s={$eq:s}:"$ne"in s&&!n&&(s.$ne=[s.$ne]),t[o]=s}return t}var at=-324,ut=3,ct="";function ft(e,t){if(e===t)return 0;e=lt(e),t=lt(t);var n=yt(e),r=yt(t);if(n-r!=0)return n-r;switch(typeof e){case"number":return e-t;case"boolean":return e<t?-1:1;case"string":return function(e,t){return e===t?0:t<e?1:-1}(e,t)}return Array.isArray(e)?function(e,t){for(var n=Math.min(e.length,t.length),r=0;r<n;r++){var i=ft(e[r],t[r]);if(0!==i)return i}return e.length===t.length?0:e.length>t.length?1:-1}(e,t):function(e,t){for(var n=Object.keys(e),r=Object.keys(t),i=Math.min(n.length,r.length),o=0;o<i;o++){var s=ft(n[o],r[o]);if(0!==s)return s;if(0!==(s=ft(e[n[o]],t[r[o]])))return s}return n.length===r.length?0:n.length>r.length?1:-1}(e,t)}function lt(e){switch(typeof e){case"undefined":return null;case"number":return e===1/0||e===-1/0||isNaN(e)?null:e;case"object":var t=e;if(Array.isArray(e)){var n=e.length;e=new Array(n);for(var r=0;r<n;r++)e[r]=lt(t[r])}else{if(e instanceof Date)return e.toJSON();if(null!==e)for(var i in e={},t)if(t.hasOwnProperty(i)){var o=t[i];void 0!==o&&(e[i]=lt(o))}}}return e}function dt(e){if(null!==e)switch(typeof e){case"boolean":return e?1:0;case"number":return function(e){if(0===e)return"1";var t=e.toExponential().split(/e\+?/),n=parseInt(t[1],10),r=e<0,i=r?"0":"2",o=function(e,t,n){return function(e,t,n){for(var r="",i=n-e.length;r.length<i;)r+=t;return r}(e,t,n)+e}(((r?-n:n)-at).toString(),"0",ut);i+=ct+o;var s=Math.abs(parseFloat(t[0]));r&&(s=10-s);var a=s.toFixed(20);return a=a.replace(/\.?0+$/,""),i+=ct+a}(e);case"string":return e.replace(/\u0002/g,"").replace(/\u0001/g,"").replace(/\u0000/g,"");case"object":var t=Array.isArray(e),n=t?e:Object.keys(e),r=-1,i=n.length,o="";if(t)for(;++r<i;)o+=ht(n[r]);else for(;++r<i;){var s=n[r];o+=ht(s)+ht(e[s])}return o}return""}function ht(e){return yt(e=lt(e))+ct+dt(e)+"\0"}function pt(e,t){var n,r=t;if("1"===e[t])n=0,t++;else{var i="0"===e[t];t++;var o="",s=e.substring(t,t+ut),a=parseInt(s,10)+at;for(i&&(a=-a),t+=ut;;){var u=e[t];if("\0"===u)break;o+=u,t++}n=1===(o=o.split(".")).length?parseInt(o,10):parseFloat(o[0]+"."+o[1]),i&&(n-=10),0!==a&&(n=parseFloat(n+"e"+a))}return{num:n,length:t-r}}function vt(e,t){var n=e.pop();if(t.length){var r=t[t.length-1];n===r.element&&(t.pop(),r=t[t.length-1]);var i=r.element,o=r.index;if(Array.isArray(i))i.push(n);else if(o===e.length-2){i[e.pop()]=n}else e.push(n)}}function yt(e){var t=["boolean","number","string","object"].indexOf(typeof e);return~t?null===e?1:Array.isArray(e)?5:t<3?t+2:t+3:Array.isArray(e)?5:void 0}function _t(e,t,n){if(e=e.filter(function(e){return gt(e.doc,t.selector,n)}),t.sort){var r=function(e){function r(n){return e.map(function(e){var t=tt(it(e));return et(n,t)})}return function(e,t){var n=ft(r(e.doc),r(t.doc));return 0!==n?n:function(e,t){return e<t?-1:t<e?1:0}(e.doc._id,t.doc._id)}}(t.sort);e=e.sort(r),"string"!=typeof t.sort[0]&&"desc"===function(e){return e[it(e)]}(t.sort[0])&&(e=e.reverse())}if("limit"in t||"skip"in t){var i=t.skip||0,o=("limit"in t?t.limit:e.length)+i;e=e.slice(i,o)}return e}function gt(i,o,e){return e.every(function(e){var t=o[e],n=tt(e),r=et(i,n);return rt(e)?function(e,t,n){return"$or"!==e?"$not"!==e?!t.find(function(e){return gt(n,e,Object.keys(e))}):!gt(n,t,Object.keys(t)):t.some(function(e){return gt(n,e,Object.keys(e))})}(e,t,i):mt(t,i,n,r)})}function mt(n,r,i,o){return!n||("object"==typeof n?Object.keys(n).every(function(e){var t=n[e];return function(e,t,n,r,i){if(jt[e])return jt[e](t,n,r,i);throw new Error('unknown operator "'+e+'" - should be one of $eq, $lte, $lt, $gt, $gte, $exists, $ne, $in, $nin, $size, $mod, $regex, $elemMatch, $type, $allMatch or $all')}(e,r,t,i,o)}):n===o)}function bt(e){return null!=e}function wt(e){return void 0!==e}function kt(t,e){return e.some(function(e){return t instanceof Array?-1<t.indexOf(e):t===e})}var jt={$elemMatch:function(t,n,r,e){return!!Array.isArray(e)&&(0!==e.length&&("object"==typeof e[0]?e.some(function(e){return gt(e,n,Object.keys(n))}):e.some(function(e){return mt(n,t,r,e)})))},$allMatch:function(t,n,r,e){return!!Array.isArray(e)&&(0!==e.length&&("object"==typeof e[0]?e.every(function(e){return gt(e,n,Object.keys(n))}):e.every(function(e){return mt(n,t,r,e)})))},$eq:function(e,t,n,r){return wt(r)&&0===ft(r,t)},$gte:function(e,t,n,r){return wt(r)&&0<=ft(r,t)},$gt:function(e,t,n,r){return wt(r)&&0<ft(r,t)},$lte:function(e,t,n,r){return wt(r)&&ft(r,t)<=0},$lt:function(e,t,n,r){return wt(r)&&ft(r,t)<0},$exists:function(e,t,n,r){return t?wt(r):!wt(r)},$mod:function(e,t,n,r){return bt(r)&&function(e,t){var n=t[0],r=t[1];if(0===n)throw new Error("Bad divisor, cannot divide by zero");if(parseInt(n,10)!==n)throw new Error("Divisor is not an integer");if(parseInt(r,10)!==r)throw new Error("Modulus is not an integer");return parseInt(e,10)===e&&e%n===r}(r,t)},$ne:function(e,t,n,r){return t.every(function(e){return 0!==ft(r,e)})},$in:function(e,t,n,r){return bt(r)&&kt(r,t)},$nin:function(e,t,n,r){return bt(r)&&!kt(r,t)},$size:function(e,t,n,r){return bt(r)&&function(e,t){return e.length===t}(r,t)},$all:function(e,t,n,r){return Array.isArray(r)&&function(t,e){return e.every(function(e){return-1<t.indexOf(e)})}(r,t)},$regex:function(e,t,n,r){return bt(r)&&function(e,t){return new RegExp(t).test(e)}(r,t)},$type:function(e,t,n,r){return function(e,t){switch(t){case"null":return null===e;case"boolean":return"boolean"==typeof e;case"number":return"number"==typeof e;case"string":return"string"==typeof e;case"array":return e instanceof Array;case"object":return"[object Object]"==={}.toString.call(e)}throw new Error(t+" not supported as a type.Please use one of object, string, array, number, boolean or null.")}(r,t)}};function Ot(e,t){if(e.selector&&e.filter&&"_selector"!==e.filter){var n="string"==typeof e.filter?e.filter:"function";return t(new Error('selector invalid for filter "'+n+'"'))}t()}function At(e){e.view&&!e.filter&&(e.filter="_view"),e.selector&&!e.filter&&(e.filter="_selector"),e.filter&&"string"==typeof e.filter&&("_view"===e.filter?e.view=re(e.view):e.filter=re(e.filter))}function qt(e,t){return t.filter&&"string"==typeof t.filter&&!t.doc_ids&&!te(e.db)}function Et(r,i){var o=i.complete;if("_view"===i.filter){if(!i.view||"string"!=typeof i.view){var e=Y(z,"`view` filter parameter not found or invalid.");return o(e)}var s=ne(i.view);r.db.get("_design/"+s[0],function(e,t){if(r.isCancelled)return o(null,{status:"cancelled"});if(e)return o(H(e));var n=t&&t.views&&t.views[s[1]]&&t.views[s[1]].map;if(!n)return o(Y($,t.views?"missing json key: "+s[1]:"missing json key: views"));i.filter=function(e){return ce(["return function(doc) {",'  "use strict";',"  var emitted = false;","  var emit = function (a, b) {","    emitted = true;","  };","  var view = "+e+";","  view(doc);","  if (emitted) {","    return true;","  }","};"].join("\n"),{})}(n),r.doChanges(i)})}else if(i.selector)i.filter=function(e){return function(e,t){if("object"!=typeof t)throw new Error("Selector error: expected a JSON object");var n=_t([{doc:e}],{selector:t=st(t)},Object.keys(t));return n&&1===n.length}(e,i.selector)},r.doChanges(i);else{var a=ne(i.filter);r.db.get("_design/"+a[0],function(e,t){if(r.isCancelled)return o(null,{status:"cancelled"});if(e)return o(H(e));var n=t&&t.filters&&t.filters[a[1]];if(!n)return o(Y($,t&&t.filters?"missing json key: "+a[1]:"missing json key: filters"));i.filter=function(e){return ce('"use strict";\nreturn '+e+";",{})}(n),r.doChanges(i)})}}function St(e){return e.reduce(function(e,t){return e[t]=!0,e},{})}We.plugin(function(e){e._changesFilterPlugin={validate:Ot,normalize:At,shouldFilter:qt,filter:Et}}),We.version="7.1.1";var xt=St(["_id","_rev","_attachments","_deleted","_revisions","_revs_info","_conflicts","_deleted_conflicts","_local_seq","_rev_tree","_replication_id","_replication_state","_replication_state_time","_replication_state_reason","_replication_stats","_removed"]),Ct=St(["_attachments","_replication_id","_replication_state","_replication_state_time","_replication_state_reason","_replication_stats"]);function Pt(e){if(!/^\d+-./.test(e))return Y(Q);var t=e.indexOf("-"),n=e.substring(0,t),r=e.substring(t+1);return{prefix:parseInt(n,10),id:r}}function Lt(e,t,n){var r,i,o;n||(n={deterministic_revs:!0});var s={status:"available"};if(e._deleted&&(s.deleted=!0),t)if(e._id||(e._id=qe()),i=Ae(e,n.deterministic_revs),e._rev){if((o=Pt(e._rev)).error)return o;e._rev_tree=[{pos:o.prefix,ids:[o.id,{status:"missing"},[[i,s,[]]]]}],r=o.prefix+1}else e._rev_tree=[{pos:1,ids:[i,s,[]]}],r=1;else if(e._revisions&&(e._rev_tree=function(e,t){for(var n=e.start-e.ids.length+1,r=e.ids,i=[r[0],t,[]],o=1,s=r.length;o<s;o++)i=[r[o],{status:"missing"},[i]];return[{pos:n,ids:i}]}(e._revisions,s),r=e._revisions.start,i=e._revisions.ids[0]),!e._rev_tree){if((o=Pt(e._rev)).error)return o;r=o.prefix,i=o.id,e._rev_tree=[{pos:r,ids:[i,s,[]]}]}ee(e._id),e._rev=r+"-"+i;var a={metadata:{},data:{}};for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var c="_"===u[0];if(c&&!xt[u]){var f=Y(J,u);throw f.message=J.message+": "+u,f}c&&!Ct[u]?a.metadata[u.slice(1)]=e[u]:a.data[u]=e[u]}return a}function $t(t,e,n){var r=function(e){try{return le(e)}catch(e){return{error:Y(F,"Attachment is not a valid base64 string")}}}(t.data);if(r.error)return n(r.error);t.length=r.length,t.data="blob"===e?pe(r,t.content_type):"base64"===e?de(r):r,je(r,function(e){t.digest="md5-"+e,n()})}function Dt(e,t,n){if(e.stub)return n();"string"==typeof e.data?$t(e,t,n):function(t,n,r){je(t.data,function(e){t.digest="md5-"+e,t.length=t.data.size||t.data.length||0,"binary"===n?_e(t.data,function(e){t.data=e,r()}):"base64"===n?ge(t.data,function(e){t.data=e,r()}):r()})}(e,t,n)}function It(e,t,n,r,i,o,s,a){if(function(e,t){for(var n,r=e.slice(),i=t.split("-"),o=parseInt(i[0],10),s=i[1];n=r.pop();){if(n.pos===o&&n.ids[0]===s)return!0;for(var a=n.ids[2],u=0,c=a.length;u<c;u++)r.push({pos:n.pos+1,ids:a[u]})}return!1}(t.rev_tree,n.metadata.rev)&&!a)return r[i]=n,o();var u=t.winningRev||Ee(t),c="deleted"in t?t.deleted:Ne(t,u),f="deleted"in n.metadata?n.metadata.deleted:Ne(n.metadata),l=/^1-/.test(n.metadata.rev);if(c&&!f&&a&&l){var d=n.data;d._rev=u,d._id=n.metadata.id,n=Lt(d,a)}var h=Re(t.rev_tree,n.metadata.rev_tree[0],e);if(a&&(c&&f&&"new_leaf"!==h.conflicts||!c&&"new_leaf"!==h.conflicts||c&&!f&&"new_branch"===h.conflicts)){var p=Y(D);return r[i]=p,o()}var v=n.metadata.rev;n.metadata.rev_tree=h.tree,n.stemmedRevs=h.stemmedRevs||[],t.rev_map&&(n.metadata.rev_map=t.rev_map);var y=Ee(n.metadata),_=Ne(n.metadata,y),g=c===_?0:c<_?-1:1;s(n,y,_,v===y?_:Ne(n.metadata,v),!0,g,i,o)}function Bt(u,e,i,c,o,f,l,d,t){u=u||1e3;var h=d.new_edits,s=new x,n=0,a=e.length;function p(){++n===a&&t&&t()}e.forEach(function(e,n){if(e._id&&Ue(e._id)){var t=e._deleted?"_removeLocal":"_putLocal";i[t](e,{ctx:o},function(e,t){f[n]=e||t,p()})}else{var r=e.metadata.id;s.has(r)?(a--,s.get(r).push([e,n])):s.set(r,[[e,n]])}}),s.forEach(function(i,o){var s=0;function a(){++s<i.length?e():p()}function e(){var e=i[s],t=e[0],n=e[1];if(c.has(o))It(u,c.get(o),t,f,n,a,l,h);else{var r=Re([],t.metadata.rev_tree[0],u);t.metadata.rev_tree=r.tree,t.stemmedRevs=r.stemmedRevs||[],function(e,t,n){var r=Ee(e.metadata),i=Ne(e.metadata,r);if("was_delete"in d&&i)return f[t]=Y($,"deleted"),n();if(h&&function(e){return"missing"===e.metadata.rev_tree[0].ids[1].status}(e)){var o=Y(D);return f[t]=o,n()}l(e,r,i,i,!1,i?0:1,t,n)}(t,n,a)}}e()})}var Tt=5,Rt="document-store",Mt="by-sequence",Nt="attach-store",Ut="attach-seq-store",Ft="meta-store",Kt="local-store",Jt="detect-blob-support";function zt(n){return function(e){var t="unknown_error";e.target&&e.target.error&&(t=e.target.error.name||e.target.error.message),n(Y(G,t,e.type))}}function Vt(e,t,n){return{data:function(t){try{return JSON.stringify(t)}catch(e){return i.stringify(t)}}(e),winningRev:t,deletedOrLocal:n?"1":"0",seq:e.seq,id:e.id}}function Gt(e){if(!e)return null;var t=function(t){try{return JSON.parse(t)}catch(e){return i.parse(t)}}(e.data);return t.winningRev=e.winningRev,t.deleted="1"===e.deletedOrLocal,t.seq=e.seq,t}function Qt(e){if(!e)return e;var t=e._doc_id_rev.lastIndexOf(":");return e._id=e._doc_id_rev.substring(0,t-1),e._rev=e._doc_id_rev.substring(t+1),delete e._doc_id_rev,e}function Wt(e,t,n,r){n?r(e?"string"!=typeof e?e:ve(e,t):he([""],{type:t})):e?"string"!=typeof e?ye(e,function(e){r(de(e))}):r(e):r("")}function Yt(t,n,i,e){var r=Object.keys(t._attachments||{});if(!r.length)return e&&e();var o=0;function s(){++o===r.length&&e&&e()}r.forEach(function(e){n.attachments&&n.include_docs?function(e,t){var n=e._attachments[t],r=n.digest;i.objectStore(Nt).get(r).onsuccess=function(e){n.body=e.target.result.body,s()}}(t,e):(t._attachments[e].stub=!0,s())})}function Ht(e,s){return Promise.all(e.map(function(o){if(o.doc&&o.doc._attachments){var e=Object.keys(o.doc._attachments);return Promise.all(e.map(function(n){var r=o.doc._attachments[n];if("body"in r){var e=r.body,i=r.content_type;return new Promise(function(t){Wt(e,i,s,function(e){o.doc._attachments[n]=C(w(r,["digest","content_type"]),{data:e}),t()})})}}))}}))}function Xt(e,r,t){var i=[],o=t.objectStore(Mt),n=t.objectStore(Nt),s=t.objectStore(Ut),a=e.length;function u(){--a||function(){if(!i.length)return;i.forEach(function(t){s.index("digestSeq").count(IDBKeyRange.bound(t+"::",t+"::￿",!1,!1)).onsuccess=function(e){e.target.result||n.delete(t)}})}()}e.forEach(function(e){var t=o.index("_doc_id_rev"),n=r+"::"+e;t.getKey(n).onsuccess=function(e){var t=e.target.result;if("number"!=typeof t)return u();o.delete(t),s.index("seq").openCursor(IDBKeyRange.only(t)).onsuccess=function(e){var t=e.target.result;if(t){var n=t.value.digestSeq.split("::")[0];i.push(n),s.delete(t.primaryKey),t.continue()}else u()}}})}function Zt(e,t,n){try{return{txn:e.transaction(t,n)}}catch(e){return{error:e}}}var en=new q;function tn(s,e,a,l,t,n){for(var d,h,p,v,y,r,i,o,u=e.docs,c=0,f=u.length;c<f;c++){var _=u[c];_._id&&Ue(_._id)||(_=u[c]=Lt(_,a.new_edits,s)).error&&!i&&(i=_)}if(i)return n(i);var g=!1,m=0,b=new Array(u.length),w=new x,k=!1,j=l._meta.blobSupport?"blob":"base64";function O(){g=!0,A()}function A(){o&&g&&(o.docCount+=m,r.put(o))}function q(){k||(en.notify(l._meta.name),n(null,b))}function E(e,t,n,r,i,o,s,a){e.metadata.winningRev=t,e.metadata.deleted=n;var u=e.data;if(u._id=e.metadata.id,u._rev=e.metadata.rev,r&&(u._deleted=!0),u._attachments&&Object.keys(u._attachments).length)return function(r,i,e,t,n,o){var s=r.data,a=0,u=Object.keys(s._attachments);function c(){a===u.length&&S(r,i,e,t,n,o)}function f(){a++,c()}u.forEach(function(e){var t=r.data._attachments[e];if(t.stub)a++,c();else{var n=t.data;delete t.data,t.revpos=parseInt(i,10),function(n,r,i){v.count(n).onsuccess=function(e){if(e.target.result)return i();var t={digest:n,body:r};v.put(t).onsuccess=i}}(t.digest,n,f)}})}(e,t,n,i,s,a);m+=o,A(),S(e,t,n,i,s,a)}function S(r,i,o,s,e,t){var n=r.data,a=r.metadata;function u(e){var t=r.stemmedRevs||[];s&&l.auto_compaction&&(t=t.concat(function(e){var o=[];return Se(e.rev_tree,function(e,t,n,r,i){"available"!==i.status||e||(o.push(t+"-"+n),i.status="missing")}),o}(r.metadata))),t&&t.length&&Xt(t,r.metadata.id,d),a.seq=e.target.result;var n=Vt(a,i,o);h.put(n).onsuccess=c}function c(){b[e]={ok:!0,id:a.id,rev:a.rev},w.set(r.metadata.id,r.metadata),function(e,t,n){var r=0,i=Object.keys(e.data._attachments||{});if(!i.length)return n();function o(){++r===i.length&&n()}for(var s=0;s<i.length;s++)a=i[s],c=void 0,u=e.data._attachments[a].digest,(c=y.put({seq:t,digestSeq:u+"::"+t})).onsuccess=o,c.onerror=function(e){e.preventDefault(),e.stopPropagation(),o()};var a,u,c}(r,a.seq,t)}n._doc_id_rev=a.id+"::"+a.rev,delete n._id,delete n._rev;var f=p.put(n);f.onsuccess=u,f.onerror=function(e){e.preventDefault(),e.stopPropagation(),p.index("_doc_id_rev").getKey(n._doc_id_rev).onsuccess=function(e){p.put(n,e.target.result).onsuccess=u}}}!function(e,o,t){if(!e.length)return t();var s,n=0;function a(){n++,e.length===n&&(s?t(s):t())}e.forEach(function(e){var t=e.data&&e.data._attachments?Object.keys(e.data._attachments):[],n=0;if(!t.length)return a();function r(e){s=e,++n===t.length&&a()}for(var i in e.data._attachments)e.data._attachments.hasOwnProperty(i)&&Dt(e.data._attachments[i],o,r)})}(u,j,function(e){if(e)return n(e);!function(){var e=Zt(t,[Rt,Mt,Nt,Kt,Ut,Ft],"readwrite");if(e.error)return n(e.error);(d=e.txn).onabort=zt(n),d.ontimeout=zt(n),d.oncomplete=q,h=d.objectStore(Rt),p=d.objectStore(Mt),v=d.objectStore(Nt),y=d.objectStore(Ut),(r=d.objectStore(Ft)).get(Ft).onsuccess=function(e){o=e.target.result,A()},function(t){var r=[];if(u.forEach(function(n){n.data&&n.data._attachments&&Object.keys(n.data._attachments).forEach(function(e){var t=n.data._attachments[e];t.stub&&r.push(t.digest)})}),!r.length)return t();var n,i=0;r.forEach(function(e){!function(n,r){v.get(n).onsuccess=function(e){if(e.target.result)r();else{var t=Y(W,"unknown stub attachment with digest "+n);t.status=412,r(t)}}}(e,function(e){e&&!n&&(n=e),++i===r.length&&t(n)})})}(function(e){if(e)return k=!0,n(e);!function(){if(!u.length)return;var e=0;function n(){++e===u.length&&Bt(s.revs_limit,u,l,w,d,b,E,a,O)}function t(e){var t=Gt(e.target.result);t&&w.set(t.id,t),n()}for(var r=0,i=u.length;r<i;r++){var o=u[r];if(o._id&&Ue(o._id))n();else h.get(o.metadata.id).onsuccess=t}}()})}()})}function nn(n,r,e,i,o){var s,a,t;function u(e){a=e.target.result,s&&o(s,a,t)}function c(e){s=e.target.result,a&&o(s,a,t)}function f(e){var t=e.target.result;if(!t)return o();o([t.key],[t.value],t)}-1===i&&(i=1e3),"function"==typeof n.getAll&&"function"==typeof n.getAllKeys&&1<i&&!e?(t={continue:function(){if(!s.length)return o();var e,t=s[s.length-1];if(r&&r.upper)try{e=IDBKeyRange.bound(t,r.upper,!0,r.upperOpen)}catch(e){if("DataError"===e.name&&0===e.code)return o()}else e=IDBKeyRange.lowerBound(t,!0);r=e,a=s=null,n.getAll(r,i).onsuccess=u,n.getAllKeys(r,i).onsuccess=c}},n.getAll(r,i).onsuccess=u,n.getAllKeys(r,i).onsuccess=c):e?n.openCursor(r,"prev").onsuccess=f:n.openCursor(r).onsuccess=f}function rn(i,e,t){var n,r,o="startkey"in i&&i.startkey,s="endkey"in i&&i.endkey,a="key"in i&&i.key,u="keys"in i&&i.keys,c=i.skip||0,f="number"==typeof i.limit?i.limit:-1,l=!1!==i.inclusive_end;if(!u&&(r=(n=function(e,t,n,r,i){try{if(e&&t)return i?IDBKeyRange.bound(t,e,!n,!1):IDBKeyRange.bound(e,t,!1,!n);if(e)return i?IDBKeyRange.upperBound(e):IDBKeyRange.lowerBound(e);if(t)return i?IDBKeyRange.lowerBound(t,!n):IDBKeyRange.upperBound(t,!n);if(r)return IDBKeyRange.only(r)}catch(e){return{error:e}}return null}(o,s,l,a,i.descending))&&n.error)&&("DataError"!==r.name||0!==r.code))return t(Y(G,r.name,r.message));var d=[Rt,Mt,Ft];i.attachments&&d.push(Nt);var h=Zt(e,d,"readonly");if(h.error)return t(h.error);var p=h.txn;p.oncomplete=function(){i.attachments?Ht(k,i.binary).then(q):q()},p.onabort=zt(t);var v,y,_,g=p.objectStore(Rt),m=p.objectStore(Mt),b=p.objectStore(Ft),w=m.index("_doc_id_rev"),k=[];function j(e,t){var n={id:t.id,key:t.id,value:{rev:e}};t.deleted?u&&(k.push(n),n.value.deleted=!0,n.doc=null):c--<=0&&(k.push(n),i.include_docs&&function(n,r,e){var t=n.id+"::"+e;w.get(t).onsuccess=function(e){if(r.doc=Qt(e.target.result)||{},i.conflicts){var t=Pe(n);t.length&&(r.doc._conflicts=t)}Yt(r.doc,i,p)}}(t,n,e))}function O(e){for(var t=0,n=e.length;t<n&&k.length!==f;t++){var r=e[t];if(r.error&&u)k.push(r);else{var i=Gt(r);j(i.winningRev,i)}}}function A(e,t,n){n&&(O(t),k.length<f&&n.continue())}function q(){var e={total_rows:v,offset:i.skip,rows:k};i.update_seq&&void 0!==y&&(e.update_seq=y),t(null,e)}return b.get(Ft).onsuccess=function(e){v=e.target.result.docCount},i.update_seq&&(_=function(e){e.target.result&&0<e.target.result.length&&(y=e.target.result[0])},m.openCursor(null,"prev").onsuccess=function(e){var t=e.target.result,n=void 0;return t&&t.key&&(n=t.key),_({target:{result:[n]}})}),r||0===f?void 0:u?function(r,e,i){var o=new Array(r.length),s=0;r.forEach(function(t,n){e.get(t).onsuccess=function(e){e.target.result?o[n]=e.target.result:o[n]={key:t,error:"not_found"},++s===r.length&&i(r,o,{})}})}(i.keys,g,A):-1===f?function(e,t,n){if("function"!=typeof e.getAll){var r=[];e.openCursor(t).onsuccess=function(e){var t=e.target.result;t?(r.push(t.value),t.continue()):n({target:{result:r}})}}else e.getAll(t).onsuccess=n}(g,n,function(e){var t=e.target.result;i.descending&&(t=t.reverse()),O(t)}):void nn(g,n,i.descending,f+c,A)}var on=!1,sn=[];function an(){!on&&sn.length&&(on=!0,sn.shift()())}function un(c,e,t,n){if((c=R(c)).continuous){var r=t+":"+qe();return en.addListener(t,r,e,c),en.notify(t),{cancel:function(){en.removeListener(t,r)}}}var f=c.doc_ids&&new b(c.doc_ids);c.since=c.since||0;var l=c.since,d="limit"in c?c.limit:-1;0===d&&(d=1);var h,i,p,o,v=[],y=0,_=X(c),g=new x;function m(e,t,n,r){if(n.seq!==t)return r();if(n.winningRev===e._rev)return r(n,e);var i=e._id+"::"+n.winningRev;o.get(i).onsuccess=function(e){r(n,Qt(e.target.result))}}function s(){c.complete(null,{results:v,last_seq:l})}var a=[Rt,Mt];c.attachments&&a.push(Nt);var u=Zt(n,a,"readonly");if(u.error)return c.complete(u.error);(h=u.txn).onabort=zt(c.complete),h.oncomplete=function(){!c.continuous&&c.attachments?Ht(v).then(s):s()},i=h.objectStore(Mt),p=h.objectStore(Rt),o=i.index("_doc_id_rev"),nn(i,c.since&&!c.descending?IDBKeyRange.lowerBound(c.since,!0):null,c.descending,d,function(r,e,o){if(o&&r.length){var s=new Array(r.length),a=new Array(r.length),i=0;e.forEach(function(e,n){!function(t,n,r){if(f&&!f.has(t._id))return r();var i=g.get(t._id);if(i)return m(t,n,i,r);p.get(t._id).onsuccess=function(e){i=Gt(e.target.result),g.set(t._id,i),m(t,n,i,r)}}(Qt(e),r[n],function(e,t){a[n]=e,s[n]=t,++i===r.length&&function(){for(var e=[],t=0,n=s.length;t<n&&y!==d;t++){var r=s[t];if(r){var i=a[t];e.push(u(i,r))}}Promise.all(e).then(function(e){for(var t=0,n=e.length;t<n;t++)e[t]&&c.onChange(e[t])}).catch(c.complete),y!==d&&o.continue()}()})})}function u(e,t){var n=c.processChange(t,e,c);l=n.seq=e.seq;var r=_(n);return"object"==typeof r?Promise.reject(r):r?(y++,c.return_docs&&v.push(n),c.attachments&&c.include_docs?new Promise(function(e){Yt(t,c,h,function(){Ht([n],c.binary).then(function(){e(n)})})}):Promise.resolve(n)):Promise.resolve()}})}var cn,fn=new x,ln=new x;function dn(t,e){var n=this;!function(e,n,r){sn.push(function(){e(function(e,t){!function(e,t,n,r){try{e(t,n)}catch(t){r.emit("error",t)}}(n,e,t,r),on=!1,T(function(){an()})})}),an()}(function(e){!function(c,r,f){var l=r.name,d=null;function o(e,i){var o=e.objectStore(Rt);o.createIndex("deletedOrLocal","deletedOrLocal",{unique:!1}),o.openCursor().onsuccess=function(e){var t=e.target.result;if(t){var n=t.value,r=Ne(n);n.deletedOrLocal=r?"1":"0",o.put(n),t.continue()}else i()}}function s(e,d){var h=e.objectStore(Kt),p=e.objectStore(Rt),v=e.objectStore(Mt);p.openCursor().onsuccess=function(e){var n=e.target.result;if(n){var t=n.value,r=t.id,i=Ue(r),o=Ee(t);if(i){var s=r+"::"+o,a=r+"::",u=r+"::~",c=v.index("_doc_id_rev"),f=IDBKeyRange.bound(a,u,!1,!1),l=c.openCursor(f);l.onsuccess=function(e){if(l=e.target.result){var t=l.value;t._doc_id_rev===s&&h.put(t),v.delete(l.primaryKey),l.continue()}else p.delete(n.primaryKey),n.continue()}}else n.continue()}else d&&d()}}function a(e,c){var t=e.objectStore(Mt),n=e.objectStore(Nt),f=e.objectStore(Ut);n.count().onsuccess=function(e){if(!e.target.result)return c();t.openCursor().onsuccess=function(e){var t=e.target.result;if(!t)return c();for(var n=t.value,r=t.primaryKey,i=Object.keys(n._attachments||{}),o={},s=0;s<i.length;s++){o[n._attachments[i[s]].digest]=!0}var a=Object.keys(o);for(s=0;s<a.length;s++){var u=a[s];f.put({seq:r,digestSeq:u+"::"+r})}t.continue()}}}function u(e){var u=e.objectStore(Mt),c=e.objectStore(Rt);c.openCursor().onsuccess=function(e){var t=e.target.result;if(t){var n,r,i,o,s=function(e){return e.data?Gt(e):(e.deleted="1"===e.deletedOrLocal,e)}(t.value);if(s.winningRev=s.winningRev||Ee(s),s.seq)return a();n=s.id+"::",r=s.id+"::￿",i=u.index("_doc_id_rev").openCursor(IDBKeyRange.bound(n,r)),o=0,i.onsuccess=function(e){var t=e.target.result;if(!t)return s.seq=o,a();var n=t.primaryKey;o<n&&(o=n),t.continue()}}function a(){var e=Vt(s,s.winningRev,s.deleted);c.put(e).onsuccess=function(){t.continue()}}}}c._meta=null,c._remote=!1,c.type=function(){return"idb"},c._id=y(function(e){e(null,c._meta.instanceId)}),c._bulkDocs=function(e,t,n){tn(r,e,t,c,d,n)},c._get=function(e,i,t){var o,s,a,u=i.ctx;if(!u){var n=Zt(d,[Rt,Mt,Nt],"readonly");if(n.error)return t(n.error);u=n.txn}function c(){t(a,{doc:o,metadata:s,ctx:u})}u.objectStore(Rt).get(e).onsuccess=function(e){if(!(s=Gt(e.target.result)))return a=Y($,"missing"),c();var t;if(i.rev)t=i.latest?function(e,t){for(var n,r=t.rev_tree.slice();n=r.pop();){var i=n.pos,o=n.ids,s=o[0],a=o[1],u=o[2],c=0===u.length,f=n.history?n.history.slice():[];if(f.push({id:s,pos:i,opts:a}),c)for(var l=0,d=f.length;l<d;l++){var h=f[l];if(h.pos+"-"+h.id===e)return i+"-"+s}for(var p=0,v=u.length;p<v;p++)r.push({pos:i+1,ids:u[p],history:f})}throw new Error("Unable to resolve latest revision for id "+t.id+", rev "+e)}(i.rev,s):i.rev;else if(t=s.winningRev,Ne(s))return a=Y($,"deleted"),c();var n=u.objectStore(Mt),r=s.id+"::"+t;n.index("_doc_id_rev").get(r).onsuccess=function(e){if((o=e.target.result)&&(o=Qt(o)),!o)return a=Y($,"missing"),c();c()}}},c._getAttachment=function(e,t,n,r,i){var o;if(r.ctx)o=r.ctx;else{var s=Zt(d,[Rt,Mt,Nt],"readonly");if(s.error)return i(s.error);o=s.txn}var a=n.digest,u=n.content_type;o.objectStore(Nt).get(a).onsuccess=function(e){Wt(e.target.result.body,u,r.binary,function(e){i(null,e)})}},c._info=function(e){var n,t,r=Zt(d,[Ft,Mt],"readonly");if(r.error)return e(r.error);var i=r.txn;i.objectStore(Ft).get(Ft).onsuccess=function(e){t=e.target.result.docCount},i.objectStore(Mt).openCursor(null,"prev").onsuccess=function(e){var t=e.target.result;n=t?t.key:0},i.oncomplete=function(){e(null,{doc_count:t,update_seq:n,idb_attachment_format:c._meta.blobSupport?"binary":"base64"})}},c._allDocs=function(e,t){rn(e,d,t)},c._changes=function(e){return un(e,c,l,d)},c._close=function(e){d.close(),fn.delete(l),e()},c._getRevisionTree=function(e,n){var t=Zt(d,[Rt],"readonly");if(t.error)return n(t.error);t.txn.objectStore(Rt).get(e).onsuccess=function(e){var t=Gt(e.target.result);t?n(null,t.rev_tree):n(Y($))}},c._doCompaction=function(i,s,e){var t=Zt(d,[Rt,Mt,Nt,Ut],"readwrite");if(t.error)return e(t.error);var o=t.txn;o.objectStore(Rt).get(i).onsuccess=function(e){var t=Gt(e.target.result);Se(t.rev_tree,function(e,t,n,r,i){var o=t+"-"+n;-1!==s.indexOf(o)&&(i.status="missing")}),Xt(s,i,o);var n=t.winningRev,r=t.deleted;o.objectStore(Rt).put(Vt(t,n,r))},o.onabort=zt(e),o.oncomplete=function(){e()}},c._getLocal=function(e,n){var t=Zt(d,[Kt],"readonly");if(t.error)return n(t.error);var r=t.txn.objectStore(Kt).get(e);r.onerror=zt(n),r.onsuccess=function(e){var t=e.target.result;t?(delete t._doc_id_rev,n(null,t)):n(Y($))}},c._putLocal=function(n,r,i){"function"==typeof r&&(i=r,r={}),delete n._revisions;var o=n._rev,e=n._id;n._rev=o?"0-"+(parseInt(o.split("-")[1],10)+1):"0-1";var s,t=r.ctx;if(!t){var a=Zt(d,[Kt],"readwrite");if(a.error)return i(a.error);(t=a.txn).onerror=zt(i),t.oncomplete=function(){s&&i(null,s)}}var u,c=t.objectStore(Kt);o?(u=c.get(e)).onsuccess=function(e){var t=e.target.result;t&&t._rev===o?c.put(n).onsuccess=function(){s={ok:!0,id:n._id,rev:n._rev},r.ctx&&i(null,s)}:i(Y(D))}:((u=c.add(n)).onerror=function(e){i(Y(D)),e.preventDefault(),e.stopPropagation()},u.onsuccess=function(){s={ok:!0,id:n._id,rev:n._rev},r.ctx&&i(null,s)})},c._removeLocal=function(n,r,i){"function"==typeof r&&(i=r,r={});var o,e=r.ctx;if(!e){var t=Zt(d,[Kt],"readwrite");if(t.error)return i(t.error);(e=t.txn).oncomplete=function(){o&&i(null,o)}}var s=n._id,a=e.objectStore(Kt),u=a.get(s);u.onerror=zt(i),u.onsuccess=function(e){var t=e.target.result;t&&t._rev===n._rev?(a.delete(s),o={ok:!0,id:s,rev:"0-0"},r.ctx&&i(null,o)):i(Y($))}},c._destroy=function(e,t){en.removeAllListeners(l);var n=ln.get(l);n&&n.result&&(n.result.close(),fn.delete(l));var r=indexedDB.deleteDatabase(l);r.onsuccess=function(){ln.delete(l),A()&&l in localStorage&&delete localStorage[l],t(null,{ok:!0})},r.onerror=zt(t)};var e=fn.get(l);if(e)return d=e.idb,c._meta=e.global,T(function(){f(null,c)});var t=indexedDB.open(l,Tt);ln.set(l,t),t.onupgradeneeded=function(e){var t=e.target.result;if(e.oldVersion<1)return function(e){var t=e.createObjectStore(Rt,{keyPath:"id"});e.createObjectStore(Mt,{autoIncrement:!0}).createIndex("_doc_id_rev","_doc_id_rev",{unique:!0}),e.createObjectStore(Nt,{keyPath:"digest"}),e.createObjectStore(Ft,{keyPath:"id",autoIncrement:!1}),e.createObjectStore(Jt),t.createIndex("deletedOrLocal","deletedOrLocal",{unique:!1}),e.createObjectStore(Kt,{keyPath:"_id"});var n=e.createObjectStore(Ut,{autoIncrement:!0});n.createIndex("seq","seq"),n.createIndex("digestSeq","digestSeq",{unique:!0})}(t);var n=e.currentTarget.transaction;e.oldVersion<3&&function(e){e.createObjectStore(Kt,{keyPath:"_id"}).createIndex("_doc_id_rev","_doc_id_rev",{unique:!0})}(t),e.oldVersion<4&&function(e){var t=e.createObjectStore(Ut,{autoIncrement:!0});t.createIndex("seq","seq"),t.createIndex("digestSeq","digestSeq",{unique:!0})}(t);var r=[o,s,a,u],i=e.oldVersion;!function e(){var t=r[i-1];i++,t&&t(n,e)}()},t.onsuccess=function(e){(d=e.target.result).onversionchange=function(){d.close(),fn.delete(l)},d.onabort=function(e){E("error","Database has a global failure",e.target.error),d.close(),fn.delete(l)};var t,n,r,i,o=d.transaction([Ft,Jt,Rt],"readwrite"),s=!1;function a(){void 0!==r&&s&&(c._meta={name:l,instanceId:i,blobSupport:r},fn.set(l,{idb:d,global:c._meta}),f(null,c))}function u(){if(void 0!==n&&void 0!==t){var e=l+"_id";e in t?i=t[e]:t[e]=i=qe(),t.docCount=n,o.objectStore(Ft).put(t)}}o.objectStore(Ft).get(Ft).onsuccess=function(e){t=e.target.result||{id:Ft},u()},function(e,t){e.objectStore(Rt).index("deletedOrLocal").count(IDBKeyRange.only("0")).onsuccess=function(e){t(e.target.result)}}(o,function(e){n=e,u()}),cn||(cn=function(r){return new Promise(function(n){var e=he([""]),t=r.objectStore(Jt).put(e,"key");t.onsuccess=function(){var e=navigator.userAgent.match(/Chrome\/(\d+)/),t=navigator.userAgent.match(/Edge\//);n(t||!e||43<=parseInt(e[1],10))},t.onerror=r.onabort=function(e){e.preventDefault(),e.stopPropagation(),n(!1)}}).catch(function(){return!1})}(o)),cn.then(function(e){r=e,a()}),o.oncomplete=function(){s=!0,a()},o.onabort=zt(f)},t.onerror=function(){var e="Failed to open indexedDB, are you in private browsing mode?";E("error",e),f(Y(G,e))}}(n,t,e)},e,n.constructor)}dn.valid=function(){try{return"undefined"!=typeof indexedDB&&"undefined"!=typeof IDBKeyRange}catch(e){return!1}};var hn=25,pn=50,vn=5e3,yn=1e4,_n={};function gn(e){var t=e.doc||e.ok,n=t&&t._attachments;n&&Object.keys(n).forEach(function(e){var t=n[e];t.data=ve(t.data,t.content_type)})}function mn(e){return/^_design/.test(e)?"_design/"+encodeURIComponent(e.slice(8)):/^_local/.test(e)?"_local/"+encodeURIComponent(e.slice(7)):encodeURIComponent(e)}function bn(n){return n._attachments&&Object.keys(n._attachments)?Promise.all(Object.keys(n._attachments).map(function(e){var t=n._attachments[e];if(t.data&&"string"!=typeof t.data)return new Promise(function(e){ge(t.data,e)}).then(function(e){t.data=e})})):Promise.resolve()}function wn(e,t){if(function(e){if(!e.prefix)return!1;var t=ue(e.prefix).protocol;return"http"===t||"https"===t}(t)){var n=t.name.substr(t.prefix.length);e=t.prefix.replace(/\/?$/,"/")+encodeURIComponent(n)}var r=ue(e);(r.user||r.password)&&(r.auth={username:r.user,password:r.password});var i=r.path.replace(/(^\/|\/$)/g,"").split("/");return r.db=i.pop(),-1===r.db.indexOf("%")&&(r.db=encodeURIComponent(r.db)),r.path=i.join("/"),r}function kn(e,t){return jn(e,e.db+"/"+t)}function jn(e,t){var n=e.path?"/":"";return e.protocol+"://"+e.host+(e.port?":"+e.port:"")+"/"+e.path+n+t}function On(t){return"?"+Object.keys(t).map(function(e){return e+"="+encodeURIComponent(t[e])}).join("&")}function An(s,e){var t=this,y=wn(s.name,s),n=kn(y,"");s=R(s);var r,a=function(e,t){if((t=t||{}).headers=t.headers||new Xe,t.credentials="include",s.auth||y.auth){var n=s.auth||y.auth,r=n.username+":"+n.password,i=de(unescape(encodeURIComponent(r)));t.headers.set("Authorization","Basic "+i)}var o=s.headers||{};return Object.keys(o).forEach(function(e){t.headers.append(e,o[e])}),function(e){var t="undefined"!=typeof navigator&&navigator.userAgent?navigator.userAgent.toLowerCase():"",n=-1!==t.indexOf("msie"),r=-1!==t.indexOf("trident"),i=-1!==t.indexOf("edge"),o=!("method"in e)||"GET"===e.method;return(n||r||i)&&o}(t)&&(e+=(-1===e.indexOf("?")?"?":"&")+"_nonce="+Date.now()),(s.fetch||He)(e,t)};function i(e,n){return m(e,f(function(t){g().then(function(){return n.apply(this,t)}).catch(function(e){t.pop()(e)})})).bind(t)}function _(e,t,n){var r={};return(t=t||{}).headers=t.headers||new Xe,t.headers.get("Content-Type")||t.headers.set("Content-Type","application/json"),t.headers.get("Accept")||t.headers.set("Accept","application/json"),a(e,t).then(function(e){return r.ok=e.ok,r.status=e.status,e.json()}).then(function(e){if(r.data=e,!r.ok){r.data.status=r.status;var t=H(r.data);if(n)return n(t);throw t}if(Array.isArray(r.data)&&(r.data=r.data.map(function(e){return e.error||e.missing?H(e):e})),!n)return r;n(null,r.data)})}function g(){return s.skip_setup?Promise.resolve():r||((r=_(n).catch(function(e){return e&&e.status&&404===e.status?(S(404,"PouchDB is just detecting if the remote exists."),_(n,{method:"PUT"})):Promise.reject(e)}).catch(function(e){return!(!e||!e.status||412!==e.status)||Promise.reject(e)})).catch(function(){r=null}),r)}function c(e){return e.split("/").map(encodeURIComponent).join("/")}T(function(){e(null,t)}),t._remote=!0,t.type=function(){return"http"},t.id=i("id",function(n){a(jn(y,"")).then(function(e){return e.json()}).catch(function(){return{}}).then(function(e){var t=e&&e.uuid?e.uuid+y.db:kn(y,"");n(null,t)})}),t.compact=i("compact",function(r,i){"function"==typeof r&&(i=r,r={}),r=R(r),_(kn(y,"_compact"),{method:"POST"}).then(function(){!function n(){t.info(function(e,t){t&&!t.compact_running?i(null,{ok:!0}):setTimeout(n,r.interval||200)})}()})}),t.bulkGet=m("bulkGet",function(a,u){var c=this;function e(t){var e={};a.revs&&(e.revs=!0),a.attachments&&(e.attachments=!0),a.latest&&(e.latest=!0),_(kn(y,"_bulk_get"+On(e)),{method:"POST",body:JSON.stringify({docs:a.docs})}).then(function(e){a.attachments&&a.binary&&e.data.results.forEach(function(e){e.docs.forEach(gn)}),t(null,e.data)}).catch(t)}function n(){var e=pn,r=Math.ceil(a.docs.length/e),i=0,o=new Array(r);function t(n){return function(e,t){o[n]=t.results,++i===r&&u(null,{results:Z(o)})}}for(var n=0;n<r;n++){var s=w(a,["revs","attachments","binary","latest"]);s.docs=a.docs.slice(n*e,Math.min(a.docs.length,(n+1)*e)),O(c,s,t(n))}}var r=jn(y,""),t=_n[r];"boolean"!=typeof t?e(function(e,t){e?(_n[r]=!1,S(e.status,"PouchDB is just detecting if the remote supports the _bulk_get API."),n()):(_n[r]=!0,u(null,t))}):t?e(u):n()}),t._info=function(t){g().then(function(){return a(kn(y,""))}).then(function(e){return e.json()}).then(function(e){e.host=kn(y,""),t(null,e)}).catch(t)},t.fetch=function(t,n){return g().then(function(){var e="/"===t.substring(0,1)?jn(y,t.substring(1)):kn(y,t);return a(e,n)})},t.get=i("get",function(t,o,n){"function"==typeof o&&(n=o,o={});var e={};function r(r){var i=r._attachments,e=i&&Object.keys(i);if(i&&e.length)return function(l,d){return new Promise(function(e,t){var n,r=0,i=0,o=0,s=l.length;function a(){++o===s?n?t(n):e():f()}function u(){r--,a()}function c(e){r--,n=n||e,a()}function f(){for(;r<d&&i<s;)r++,l[i++]().then(u,c)}f()})}(e.map(function(e){return function(){return function(e){var n=i[e],t=mn(r._id)+"/"+c(e)+"?rev="+r._rev;return a(kn(y,t)).then(function(e){return void 0===u||u.browser?e.blob():e.buffer()}).then(function(t){return o.binary?(void 0===u||u.browser||(t.type=n.content_type),t):new Promise(function(e){ge(t,e)})}).then(function(e){delete n.stub,delete n.length,n.data=e})}(e)}}),5)}(o=R(o)).revs&&(e.revs=!0),o.revs_info&&(e.revs_info=!0),o.latest&&(e.latest=!0),o.open_revs&&("all"!==o.open_revs&&(o.open_revs=JSON.stringify(o.open_revs)),e.open_revs=o.open_revs),o.rev&&(e.rev=o.rev),o.conflicts&&(e.conflicts=o.conflicts),o.update_seq&&(e.update_seq=o.update_seq),t=mn(t),_(kn(y,t+On(e))).then(function(e){return Promise.resolve().then(function(){if(o.attachments)return function(e){return Array.isArray(e)?Promise.all(e.map(function(e){if(e.ok)return r(e.ok)})):r(e)}(e.data)}).then(function(){n(null,e.data)})}).catch(function(e){e.docId=t,n(e)})}),t.remove=i("remove",function(e,t,n,r){var i;"string"==typeof t?(i={_id:e,_rev:t},"function"==typeof n&&(r=n,n={})):(i=e,n="function"==typeof t?(r=t,{}):(r=n,t));var o=i._rev||n.rev;_(kn(y,mn(i._id))+"?rev="+o,{method:"DELETE"},r).catch(r)}),t.getAttachment=i("getAttachment",function(e,t,n,r){"function"==typeof n&&(r=n,n={});var i,o=n.rev?"?rev="+n.rev:"",s=kn(y,mn(e))+"/"+c(t)+o;a(s,{method:"GET"}).then(function(e){if(i=e.headers.get("content-type"),e.ok)return void 0===u||u.browser?e.blob():e.buffer();throw e}).then(function(e){void 0===u||u.browser||(e.type=i),r(null,e)}).catch(function(e){r(e)})}),t.removeAttachment=i("removeAttachment",function(e,t,n,r){_(kn(y,mn(e)+"/"+c(t))+"?rev="+n,{method:"DELETE"},r).catch(r)}),t.putAttachment=i("putAttachment",function(e,t,n,r,i,o){"function"==typeof i&&(o=i,i=r,r=n,n=null);var s=mn(e)+"/"+c(t),a=kn(y,s);if(n&&(a+="?rev="+n),"string"==typeof r){var u;try{u=le(r)}catch(e){return o(Y(F,"Attachment is not a valid base64 string"))}r=u?pe(u,i):""}_(a,{headers:new Xe({"Content-Type":i}),method:"PUT",body:r},o).catch(o)}),t._bulkDocs=function(e,t,n){e.new_edits=t.new_edits,g().then(function(){return Promise.all(e.docs.map(bn))}).then(function(){return _(kn(y,"_bulk_docs"),{method:"POST",body:JSON.stringify(e)},n)}).catch(n)},t._put=function(t,e,n){g().then(function(){return bn(t)}).then(function(){return _(kn(y,mn(t._id)),{method:"PUT",body:JSON.stringify(t)})}).then(function(e){n(null,e.data)}).catch(function(e){e.docId=t&&t._id,n(e)})},t.allDocs=i("allDocs",function(t,n){"function"==typeof t&&(n=t,t={});var e,r={},i="GET";(t=R(t)).conflicts&&(r.conflicts=!0),t.update_seq&&(r.update_seq=!0),t.descending&&(r.descending=!0),t.include_docs&&(r.include_docs=!0),t.attachments&&(r.attachments=!0),t.key&&(r.key=JSON.stringify(t.key)),t.start_key&&(t.startkey=t.start_key),t.startkey&&(r.startkey=JSON.stringify(t.startkey)),t.end_key&&(t.endkey=t.end_key),t.endkey&&(r.endkey=JSON.stringify(t.endkey)),void 0!==t.inclusive_end&&(r.inclusive_end=!!t.inclusive_end),void 0!==t.limit&&(r.limit=t.limit),void 0!==t.skip&&(r.skip=t.skip);var o=On(r);void 0!==t.keys&&(i="POST",e={keys:t.keys}),_(kn(y,"_all_docs"+o),{method:i,body:JSON.stringify(e)}).then(function(e){t.include_docs&&t.attachments&&t.binary&&e.data.rows.forEach(gn),n(null,e.data)}).catch(n)}),t._changes=function(s){var a="batch_size"in s?s.batch_size:hn;!(s=R(s)).continuous||"heartbeat"in s||(s.heartbeat=yn);var e="timeout"in s?s.timeout:3e4;"timeout"in s&&s.timeout&&e-s.timeout<vn&&(e=s.timeout+vn),"heartbeat"in s&&s.heartbeat&&e-s.heartbeat<vn&&(e=s.heartbeat+vn);var i={};"timeout"in s&&s.timeout&&(i.timeout=s.timeout);var u=void 0!==s.limit&&s.limit,c=u;if(s.style&&(i.style=s.style),(s.include_docs||s.filter&&"function"==typeof s.filter)&&(i.include_docs=!0),s.attachments&&(i.attachments=!0),s.continuous&&(i.feed="longpoll"),s.seq_interval&&(i.seq_interval=s.seq_interval),s.conflicts&&(i.conflicts=!0),s.descending&&(i.descending=!0),s.update_seq&&(i.update_seq=!0),"heartbeat"in s&&s.heartbeat&&(i.heartbeat=s.heartbeat),s.filter&&"string"==typeof s.filter&&(i.filter=s.filter),s.view&&"string"==typeof s.view&&(i.filter="_view",i.view=s.view),s.query_params&&"object"==typeof s.query_params)for(var t in s.query_params)s.query_params.hasOwnProperty(t)&&(i[t]=s.query_params[t]);var o,f="GET";s.doc_ids?(i.filter="_doc_ids",f="POST",o={doc_ids:s.doc_ids}):s.selector&&(i.filter="_selector",f="POST",o={selector:s.selector});function l(e,t){if(!s.aborted){i.since=e,"object"==typeof i.since&&(i.since=JSON.stringify(i.since)),s.descending?u&&(i.limit=c):i.limit=!u||a<c?a:c;var n=kn(y,"_changes"+On(i)),r={signal:h.signal,method:f,body:JSON.stringify(o)};d=e,s.aborted||g().then(function(){return _(n,r,t)}).catch(t)}}var d,h=new Ye,p={results:[]},v=function(e,t){if(!s.aborted){var n=0;if(t&&t.results){n=t.results.length,p.last_seq=t.last_seq;var r=null,i=null;"number"==typeof t.pending&&(r=t.pending),"string"!=typeof p.last_seq&&"number"!=typeof p.last_seq||(i=p.last_seq);s.query_params,t.results=t.results.filter(function(e){c--;var t=X(s)(e);return t&&(s.include_docs&&s.attachments&&s.binary&&gn(e),s.return_docs&&p.results.push(e),s.onChange(e,r,i)),t})}else if(e)return s.aborted=!0,void s.complete(e);t&&t.last_seq&&(d=t.last_seq);var o=u&&c<=0||t&&n<a||s.descending;(!s.continuous||u&&c<=0)&&o?s.complete(null,p):T(function(){l(d,v)})}};return l(s.since||0,v),{cancel:function(){s.aborted=!0,h.abort()}}},t.revsDiff=i("revsDiff",function(e,t,n){"function"==typeof t&&(n=t,t={}),_(kn(y,"_revs_diff"),{method:"POST",body:JSON.stringify(e)},n).catch(n)}),t._close=function(e){e()},t._destroy=function(e,t){_(kn(y,""),{method:"DELETE"}).then(function(e){t(null,e)}).catch(function(e){404===e.status?t(null,{ok:!0}):t(e)})}}function qn(e){this.status=400,this.name="query_parse_error",this.message=e,this.error=!0;try{Error.captureStackTrace(this,qn)}catch(e){}}function En(e){this.status=404,this.name="not_found",this.message=e,this.error=!0;try{Error.captureStackTrace(this,En)}catch(e){}}function Sn(e){this.status=500,this.name="invalid_value",this.message=e,this.error=!0;try{Error.captureStackTrace(this,Sn)}catch(e){}}function xn(e,t){return t&&e.then(function(e){T(function(){t(null,e)})},function(e){T(function(){t(e)})}),e}function Cn(n,r){return function(){var e=arguments,t=this;return n.add(function(){return r.apply(t,e)})}}function Pn(e){var t=new b(e),n=new Array(t.size),r=-1;return t.forEach(function(e){n[++r]=e}),n}function Ln(e){var n=new Array(e.size),r=-1;return e.forEach(function(e,t){n[++r]=t}),n}function $n(e){return new Sn("builtin "+e+" function requires map values to be numbers or number arrays")}function Dn(e){for(var t=0,n=0,r=e.length;n<r;n++){var i=e[n];if("number"!=typeof i){if(!Array.isArray(i))throw $n("_sum");t="number"==typeof t?[t]:t;for(var o=0,s=i.length;o<s;o++){var a=i[o];if("number"!=typeof a)throw $n("_sum");void 0===t[o]?t.push(a):t[o]+=a}}else"number"==typeof t?t+=i:t[0]+=i}return t}An.valid=function(){return!0},o(qn,Error),o(En,Error),o(Sn,Error);var In=E.bind(null,"log"),Bn=Array.isArray,Tn=JSON.parse;function Rn(e,t){return ce("return ("+e.replace(/;\s*$/,"")+");",{emit:t,sum:Dn,log:In,isArray:Bn,toJSON:Tn})}function Mn(){this.promise=new Promise(function(e){e()})}function Nn(e){if(!e)return"undefined";switch(typeof e){case"function":case"string":return e.toString();default:return JSON.stringify(e)}}function Un(i,o,s,a,t,n){var u,c=function(e,t){return Nn(e)+Nn(t)+"undefined"}(s,a);if(!t&&(u=i._cachedViews=i._cachedViews||{})[c])return u[c];var e=i.info().then(function(e){var r=e.db_name+"-mrview-"+(t?"temp":Oe(c));return fe(i,"_local/"+n,function(e){e.views=e.views||{};var t=o;-1===t.indexOf("/")&&(t=o+"/"+o);var n=e.views[t]=e.views[t]||{};if(!n[r])return n[r]=!0,e}).then(function(){return i.registerDependentDatabase(r).then(function(e){var t=e.db;t.auto_compaction=!0;var n={name:r,db:t,sourceDB:i,adapter:i.adapter,mapFun:s,reduceFun:a};return n.db.get("_local/lastSeq").catch(function(e){if(404!==e.status)throw e}).then(function(e){return n.seq=e?e.seq:0,u&&n.db.once("destroyed",function(){delete u[c]}),n})})})});return u&&(u[c]=e),e}Mn.prototype.add=function(e){return this.promise=this.promise.catch(function(){}).then(function(){return e()}),this.promise},Mn.prototype.finish=function(){return this.promise};var Fn={},Kn=new Mn;function Jn(e){return-1===e.indexOf("/")?[e,e]:e.split("/")}function zn(e,t){try{e.emit("error",t)}catch(e){E("error","The user's map/reduce function threw an uncaught error.\nYou can debug this error by doing:\nmyDatabase.on('error', function (err) { debugger; });\nPlease double-check your map/reduce function."),E("error",t)}}var Vn={_sum:function(e,t){return Dn(t)},_count:function(e,t){return t.length},_stats:function(e,t){return{sum:Dn(t),min:Math.min.apply(null,t),max:Math.max.apply(null,t),count:t.length,sumsqr:function(e){for(var t=0,n=0,r=e.length;n<r;n++){var i=e[n];t+=i*i}return t}(t)}}};var Gn,Qn,Wn,Yn,Hn,Xn=(Qn="mrviews",Wn=function(e,t){if("function"!=typeof e||2!==e.length)return Rn(e.toString(),t);var n=e;return function(e){return n(e,t)}},Yn=function(e){var t=e.toString(),n=function(e){if(/^_sum/.test(e))return Vn._sum;if(/^_count/.test(e))return Vn._count;if(/^_stats/.test(e))return Vn._stats;if(/^_/.test(e))throw new Error(e+" is not a supported reduce function.")}(t);return n||Rn(t)},Hn=function(e,t){var n=e.views&&e.views[t];if("string"!=typeof n.map)throw new En("ddoc "+e._id+" has no string view named "+t+", instead found object of type: "+typeof n.map)},{query:function(e,t,n){var r=this;"function"==typeof t&&(n=t,t={}),t=t?function(e){return e.group_level=or(e.group_level),e.limit=or(e.limit),e.skip=or(e.skip),e}(t):{},"function"==typeof e&&(e={map:e});var i=Promise.resolve().then(function(){return dr(r,e,t)});return xn(i,n),i},viewCleanup:(Gn=function(){var e=this;return"function"==typeof e._viewCleanup?function(e){return new Promise(function(n,r){e._viewCleanup(function(e,t){if(e)return r(e);n(t)})})}(e):te(e)?function(e){return e.fetch("_view_cleanup",{headers:new Xe({"Content-Type":"application/json"}),method:"POST"}).then(function(e){return e.json()})}(e):function(n){return n.get("_local/"+Qn).then(function(a){var u=new x;Object.keys(a.views).forEach(function(e){var t=Jn(e),n="_design/"+t[0],r=t[1],i=u.get(n);i||(i=new b,u.set(n,i)),i.add(r)});var e={keys:Ln(u),include_docs:!0};return n.allDocs(e).then(function(e){var s={};e.rows.forEach(function(i){var o=i.key.substring(8);u.get(i.key).forEach(function(e){var t=o+"/"+e;a.views[t]||(t=e);var n=Object.keys(a.views[t]),r=i.doc&&i.doc.views&&i.doc.views[e];n.forEach(function(e){s[e]=s[e]||r})})});var t=Object.keys(s).filter(function(e){return!s[e]}).map(function(e){return Cn(cr(e),function(){return new n.constructor(e,n.__opts).destroy()})()});return Promise.all(t).then(function(){return{ok:!0}})})},ar({ok:!0}))}(e)},f(function(e){var t=e.pop(),n=Gn.apply(this,e);return"function"==typeof t&&xn(n,t),n}))});function Zn(t,e,n){try{e(n)}catch(e){zn(t,e)}}function er(t,e,n,r,i){try{return{output:e(n,r,i)}}catch(e){return zn(t,e),{error:e}}}function tr(e,t){var n=ft(e.key,t.key);return 0!==n?n:ft(e.value,t.value)}function nr(e){var t=e.value;return t&&"object"==typeof t&&t._id||e.id}function rr(t){return function(e){return t.include_docs&&t.attachments&&t.binary&&function(e){e.rows.forEach(function(e){var n=e.doc&&e.doc._attachments;n&&Object.keys(n).forEach(function(e){var t=n[e];n[e].data=ve(t.data,t.content_type)})})}(e),e}}function ir(e,t,n,r){var i=t[e];void 0!==i&&(r&&(i=encodeURIComponent(JSON.stringify(i))),n.push(e+"="+i))}function or(e){if(void 0!==e){var t=Number(e);return isNaN(t)||t!==parseInt(e,10)?e:t}}function sr(n,e){var t=n.descending?"endkey":"startkey",r=n.descending?"startkey":"endkey";if(void 0!==n[t]&&void 0!==n[r]&&0<ft(n[t],n[r]))throw new qn("No rows can match your key range, reverse your start_key and end_key or set {descending : true}");if(e.reduce&&!1!==n.reduce){if(n.include_docs)throw new qn("{include_docs:true} is invalid for reduce");if(n.keys&&1<n.keys.length&&!n.group&&!n.group_level)throw new qn("Multi-key fetches for reduce views must use {group: true}")}["group_level","limit","skip"].forEach(function(e){var t=function(e){if(e){if("number"!=typeof e)return new qn('Invalid value for integer: "'+e+'"');if(e<0)return new qn('Invalid value for positive integer: "'+e+'"')}}(n[e]);if(t)throw t})}function ar(t){return function(e){if(404===e.status)return t;throw e}}function ur(e,n,t){var r="_local/doc_"+e,i={_id:r,keys:[]},o=t.get(e),c=o[0];return(function(e){return 1===e.length&&/^1-/.test(e[0].rev)}(o[1])?Promise.resolve(i):n.db.get(r).catch(ar(i))).then(function(t){return function(e){return e.keys.length?n.db.allDocs({keys:e.keys,include_docs:!0}):Promise.resolve({rows:[]})}(t).then(function(e){return function(e,t){for(var r=[],i=new b,n=0,o=t.rows.length;n<o;n++){var s=t.rows[n].doc;if(s&&(r.push(s),i.add(s._id),s._deleted=!c.has(s._id),!s._deleted)){var a=c.get(s._id);"value"in a&&(s.value=a.value)}}var u=Ln(c);return u.forEach(function(e){if(!i.has(e)){var t={_id:e},n=c.get(e);"value"in n&&(t.value=n.value),r.push(t)}}),e.keys=Pn(u.concat(e.keys)),r.push(e),r}(t,e)})})}function cr(e){var t="string"==typeof e?e:e.name,n=Fn[t];return n||(n=Fn[t]=new Mn),n}function fr(e){return Cn(cr(e),function(){return function(s){var a,u;var c=Wn(s.mapFun,function(e,t){var n={id:u._id,key:lt(e)};null!=t&&(n.value=lt(t)),a.push(n)}),f=s.seq||0;function r(e,t){return function(){return function(r,t,i){var e="_local/lastSeq";return r.db.get(e).catch(ar({_id:e,seq:0})).then(function(n){var e=Ln(t);return Promise.all(e.map(function(e){return ur(e,r,t)})).then(function(e){var t=Z(e);return n.seq=i,t.push(n),r.db.bulkDocs({docs:t})})})}(s,e,t)}}var i=new Mn;function o(){return s.sourceDB.changes({return_docs:!0,conflicts:!0,include_docs:!0,style:"all_docs",since:f,limit:50}).then(e)}function e(e){var t=e.results;if(t.length){var n=function(e){for(var t=new x,n=0,r=e.length;n<r;n++){var i=e[n];if("_"!==i.doc._id[0]){a=[],(u=i.doc)._deleted||Zn(s.sourceDB,c,u),a.sort(tr);var o=l(a);t.set(i.doc._id,[o,i.changes])}f=i.seq}return t}(t);if(i.add(r(n,f)),!(t.length<50))return o()}}function l(e){for(var t,n=new x,r=0,i=e.length;r<i;r++){var o=e[r],s=[o.key,o.id];0<r&&0===ft(o.key,t)&&s.push(r),n.set(ht(s),o),t=o.key}return n}return o().then(function(){return i.finish()}).then(function(){s.seq=f})}(e)})()}function lr(e,t){return Cn(cr(e),function(){return function(r,i){var o,s=r.reduceFun&&!1!==i.reduce,a=i.skip||0;void 0===i.keys||i.keys.length||(i.limit=0,delete i.keys);function n(e){return e.include_docs=!0,r.db.allDocs(e).then(function(e){return o=e.total_rows,e.rows.map(function(e){if("value"in e.doc&&"object"==typeof e.doc.value&&null!==e.doc.value){var t=Object.keys(e.doc.value).sort(),n=["id","key","value"];if(!(t<n||n<t))return e.doc.value}var r=function(e){for(var t=[],n=[],r=0;;){var i=e[r++];if("\0"!==i)switch(i){case"1":t.push(null);break;case"2":t.push("1"===e[r]),r++;break;case"3":var o=pt(e,r);t.push(o.num),r+=o.length;break;case"4":for(var s="";;){var a=e[r];if("\0"===a)break;s+=a,r++}s=s.replace(/\u0001\u0001/g,"\0").replace(/\u0001\u0002/g,"").replace(/\u0002\u0002/g,""),t.push(s);break;case"5":var u={element:[],index:t.length};t.push(u.element),n.push(u);break;case"6":var c={element:{},index:t.length};t.push(c.element),n.push(c);break;default:throw new Error("bad collationIndex or unexpectedly reached end of input: "+i)}else{if(1===t.length)return t.pop();vt(t,n)}}}(e.doc._id);return{key:r[0],id:r[1],value:"value"in e.doc?e.doc.value:null}})})}function e(t){var n;if(n=s?function(e,t,n){0===n.group_level&&delete n.group_level;var r=n.group||n.group_level,i=Yn(e.reduceFun),o=[],s=isNaN(n.group_level)?Number.POSITIVE_INFINITY:n.group_level;t.forEach(function(e){var t=o[o.length-1],n=r?e.key:null;if(r&&Array.isArray(n)&&(n=n.slice(0,s)),t&&0===ft(t.groupKey,n))return t.keys.push([e.key,e.id]),void t.values.push(e.value);o.push({keys:[[e.key,e.id]],values:[e.value],groupKey:n})}),t=[];for(var a=0,u=o.length;a<u;a++){var c=o[a],f=er(e.sourceDB,i,c.keys,c.values,!1);if(f.error&&f.error instanceof Sn)throw f.error;t.push({value:f.error?null:f.output,key:c.groupKey})}return{rows:function(e,t,n){return n=n||0,"number"==typeof t?e.slice(n,t+n):0<n?e.slice(n):e}(t,n.limit,n.skip)}}(r,t,i):{total_rows:o,offset:a,rows:t},i.update_seq&&(n.update_seq=r.seq),i.include_docs){var e=Pn(t.map(nr));return r.sourceDB.allDocs({keys:e,include_docs:!0,conflicts:i.conflicts,attachments:i.attachments,binary:i.binary}).then(function(e){var r=new x;return e.rows.forEach(function(e){r.set(e.id,e.doc)}),t.forEach(function(e){var t=nr(e),n=r.get(t);n&&(e.doc=n)}),n})}return n}{if(void 0!==i.keys){var t=i.keys.map(function(e){var t={startkey:ht([e]),endkey:ht([e,{}])};return i.update_seq&&(t.update_seq=!0),n(t)});return Promise.all(t).then(Z).then(e)}var u,c,f={descending:i.descending};if(i.update_seq&&(f.update_seq=!0),"start_key"in i&&(u=i.start_key),"startkey"in i&&(u=i.startkey),"end_key"in i&&(c=i.end_key),"endkey"in i&&(c=i.endkey),void 0!==u&&(f.startkey=i.descending?ht([u,{}]):ht([u])),void 0!==c){var l=!1!==i.inclusive_end;i.descending&&(l=!l),f.endkey=ht(l?[c,{}]:[c])}if(void 0!==i.key){var d=ht([i.key]),h=ht([i.key,{}]);f.descending?(f.endkey=d,f.startkey=h):(f.startkey=d,f.endkey=h)}return s||("number"==typeof i.limit&&(f.limit=i.limit),f.skip=a),n(f).then(e)}}(e,t)})()}function dr(n,e,r){if("function"==typeof n._query)return function(e,t,i){return new Promise(function(n,r){e._query(t,i,function(e,t){if(e)return r(e);n(t)})})}(n,e,r);if(te(n))return function(e,t,n){var r,i,o,s=[],a="GET";if(ir("reduce",n,s),ir("include_docs",n,s),ir("attachments",n,s),ir("limit",n,s),ir("descending",n,s),ir("group",n,s),ir("group_level",n,s),ir("skip",n,s),ir("stale",n,s),ir("conflicts",n,s),ir("startkey",n,s,!0),ir("start_key",n,s,!0),ir("endkey",n,s,!0),ir("end_key",n,s,!0),ir("inclusive_end",n,s),ir("key",n,s,!0),ir("update_seq",n,s),s=""===(s=s.join("&"))?"":"?"+s,void 0!==n.keys){var u="keys="+encodeURIComponent(JSON.stringify(n.keys));u.length+s.length+1<=2e3?s+=("?"===s[0]?"&":"?")+u:(a="POST","string"==typeof t?r={keys:n.keys}:t.keys=n.keys)}if("string"!=typeof t)return r=r||{},Object.keys(t).forEach(function(e){Array.isArray(t[e])?r[e]=t[e]:r[e]=t[e].toString()}),e.fetch("_temp_view"+s,{headers:new Xe({"Content-Type":"application/json"}),method:"POST",body:JSON.stringify(r)}).then(function(e){return i=e.ok,o=e.status,e.json()}).then(function(e){if(!i)throw e.status=o,H(e);return e}).then(rr(n));var c=Jn(t);return e.fetch("_design/"+c[0]+"/_view/"+c[1]+s,{headers:new Xe({"Content-Type":"application/json"}),method:a,body:JSON.stringify(r)}).then(function(e){return i=e.ok,o=e.status,e.json()}).then(function(e){if(!i)throw e.status=o,H(e);return e.rows.forEach(function(e){if(e.value&&e.value.error&&"builtin_reduce_error"===e.value.error)throw new Error(e.reason)}),e}).then(rr(n))}(n,e,r);if("string"!=typeof e)return sr(r,e),Kn.add(function(){return Un(n,"temp_view/temp_view",e.map,e.reduce,!0,Qn).then(function(e){return function(e,t){return e.then(function(e){return t().then(function(){return e})},function(e){return t().then(function(){throw e})})}(fr(e).then(function(){return lr(e,r)}),function(){return e.db.destroy()})})}),Kn.finish();var i=e,t=Jn(i),o=t[0],s=t[1];return n.get("_design/"+o).then(function(e){var t=e.views&&e.views[s];if(!t)throw new En("ddoc "+e._id+" has no view named "+s);return Hn(e,s),sr(r,t),Un(n,i,t.map,t.reduce,!1,Qn).then(function(e){return"ok"===r.stale||"update_after"===r.stale?("update_after"===r.stale&&T(function(){fr(e)}),lr(e,r)):fr(e).then(function(){return lr(e,r)})})})}var hr={query:function(e,t,n){return Xn.query.call(this,e,t,n)},viewCleanup:function(e){return Xn.viewCleanup.call(this,e)}};function pr(e){return/^1-/.test(e)}function vr(t,n){var e=Object.keys(n._attachments);return Promise.all(e.map(function(e){return t.getAttachment(n._id,e,{rev:n._rev})}))}function yr(t,n,r,i){r=R(r);var o=[],s=!0;function a(e){return t.allDocs({keys:e,include_docs:!0,conflicts:!0}).then(function(e){if(i.cancelled)throw new Error("cancelled");e.rows.forEach(function(e){e.deleted||!e.doc||!pr(e.value.rev)||function(e){return e._attachments&&0<Object.keys(e._attachments).length}(e.doc)||function(e){return e._conflicts&&0<e._conflicts.length}(e.doc)||(e.doc._conflicts&&delete e.doc._conflicts,o.push(e.doc),delete r[e.id])})})}return Promise.resolve().then(function(){var e=Object.keys(r).filter(function(e){var t=r[e].missing;return 1===t.length&&pr(t[0])});if(0<e.length)return a(e)}).then(function(){var e=function(e){var n=[];return Object.keys(e).forEach(function(t){e[t].missing.forEach(function(e){n.push({id:t,rev:e})})}),{docs:n,revs:!0,latest:!0}}(r);if(e.docs.length)return t.bulkGet(e).then(function(e){if(i.cancelled)throw new Error("cancelled");return Promise.all(e.results.map(function(e){return Promise.all(e.docs.map(function(e){var i=e.ok;return e.error&&(s=!1),i&&i._attachments?function(n,r,i){var e=te(r)&&!te(n),o=Object.keys(i._attachments);return e?n.get(i._id).then(function(t){return Promise.all(o.map(function(e){return function(e,t,n){return!e._attachments||!e._attachments[n]||e._attachments[n].digest!==t._attachments[n].digest}(t,i,e)?r.getAttachment(i._id,e):n.getAttachment(t._id,e)}))}).catch(function(e){if(404!==e.status)throw e;return vr(r,i)}):vr(r,i)}(n,t,i).then(function(e){var r=Object.keys(i._attachments);return e.forEach(function(e,t){var n=i._attachments[r[t]];delete n.stub,delete n.length,n.data=e}),i}):i}))})).then(function(e){o=o.concat(Z(e).filter(Boolean))})})}).then(function(){return{ok:s,docs:o}})}var _r=1,gr="pouchdb",mr=5,br=0;function wr(t,n,r,i,o){return t.get(n).catch(function(e){if(404===e.status)return"http"!==t.adapter&&"https"!==t.adapter||S(404,"PouchDB is just checking if a remote checkpoint exists."),{session_id:i,_id:n,history:[],replicator:gr,version:_r};throw e}).then(function(e){if(!o.cancelled&&e.last_seq!==r)return e.history=(e.history||[]).filter(function(e){return e.session_id!==i}),e.history.unshift({last_seq:r,session_id:i}),e.history=e.history.slice(0,mr),e.version=_r,e.replicator=gr,e.session_id=i,e.last_seq=r,t.put(e).catch(function(e){if(409===e.status)return wr(t,n,r,i,o);throw e})})}function kr(e,t,n,r,i){this.src=e,this.target=t,this.id=n,this.returnValue=r,this.opts=i||{}}kr.prototype.writeCheckpoint=function(e,t){var n=this;return this.updateTarget(e,t).then(function(){return n.updateSource(e,t)})},kr.prototype.updateTarget=function(e,t){return this.opts.writeTargetCheckpoint?wr(this.target,this.id,e,t,this.returnValue):Promise.resolve(!0)},kr.prototype.updateSource=function(e,t){if(this.opts.writeSourceCheckpoint){var n=this;return wr(this.src,this.id,e,t,this.returnValue).catch(function(e){if(Ar(e))return!(n.opts.writeSourceCheckpoint=!1);throw e})}return Promise.resolve(!0)};var jr={undefined:function(e,t){return 0===ft(e.last_seq,t.last_seq)?t.last_seq:0},1:function(e,t){return function(e,t){return e.session_id!==t.session_id?function e(t,n){var r=t[0];var i=t.slice(1);var o=n[0];var s=n.slice(1);if(!r||0===n.length)return{last_seq:br,history:[]};var a=r.session_id;if(Or(a,n))return{last_seq:r.last_seq,history:t};var u=o.session_id;if(Or(u,i))return{last_seq:o.last_seq,history:s};return e(i,s)}(e.history,t.history):{last_seq:e.last_seq,history:e.history}}(t,e).last_seq}};function Or(e,t){var n=t[0],r=t.slice(1);return!(!e||0===t.length)&&(e===n.session_id||Or(e,r))}function Ar(e){return"number"==typeof e.status&&4===Math.floor(e.status/100)}kr.prototype.getCheckpoint=function(){var t=this;return t.opts&&t.opts.writeSourceCheckpoint&&!t.opts.writeTargetCheckpoint?t.src.get(t.id).then(function(e){return e.last_seq||br}).catch(function(e){if(404!==e.status)throw e;return br}):t.target.get(t.id).then(function(n){return t.opts&&t.opts.writeTargetCheckpoint&&!t.opts.writeSourceCheckpoint?n.last_seq||br:t.src.get(t.id).then(function(e){return n.version!==e.version?br:(t=n.version?n.version.toString():"undefined")in jr?jr[t](n,e):br;var t},function(e){if(404===e.status&&n.last_seq)return t.src.put({_id:t.id,last_seq:br}).then(function(){return br},function(e){return Ar(e)?(t.opts.writeSourceCheckpoint=!1,n.last_seq):br});throw e})}).catch(function(e){if(404!==e.status)throw e;return br})};var qr=0;function Er(e,t,n){var r=n.doc_ids?n.doc_ids.sort(ft):"",i=n.filter?n.filter.toString():"",o="",s="",a="";return n.selector&&(a=JSON.stringify(n.selector)),n.filter&&n.query_params&&(o=JSON.stringify(function(n){return Object.keys(n).sort(ft).reduce(function(e,t){return e[t]=n[t],e},{})}(n.query_params))),n.filter&&"_view"===n.filter&&(s=n.view.toString()),Promise.all([e.id(),t.id()]).then(function(e){var t=e[0]+e[1]+i+s+o+r+a;return new Promise(function(e){je(t,e)})}).then(function(e){return"_local/"+(e=e.replace(/\//g,".").replace(/\+/g,"_"))})}function Sr(r,i,o,s,a){var u,n,c,f=[],l={seq:0,changes:[],docs:[]},d=!1,h=!1,p=!1,v=0,y=o.continuous||o.live||!1,t=o.batch_size||100,_=o.batches_limit||10,g=!1,m=o.doc_ids,b=o.selector,w=[],k=qe();a=a||{ok:!0,start_time:(new Date).toISOString(),docs_read:0,docs_written:0,doc_write_failures:0,errors:[]};var j={};function e(){return c?Promise.resolve():Er(r,i,o).then(function(e){n=e;var t={};t=!1===o.checkpoint?{writeSourceCheckpoint:!1,writeTargetCheckpoint:!1}:"source"===o.checkpoint?{writeSourceCheckpoint:!0,writeTargetCheckpoint:!1}:"target"===o.checkpoint?{writeSourceCheckpoint:!1,writeTargetCheckpoint:!0}:{writeSourceCheckpoint:!0,writeTargetCheckpoint:!0},c=new kr(r,i,n,s,t)})}function O(){if(w=[],0!==u.docs.length){var n=u.docs,e={timeout:o.timeout};return i.bulkDocs({docs:n,new_edits:!1},e).then(function(e){if(s.cancelled)throw C(),new Error("cancelled");var r=Object.create(null);e.forEach(function(e){e.error&&(r[e.id]=e)});var t=Object.keys(r).length;a.doc_write_failures+=t,a.docs_written+=n.length-t,n.forEach(function(e){var t=r[e._id];if(t){a.errors.push(t);var n=(t.name||"").toLowerCase();if("unauthorized"!==n&&"forbidden"!==n)throw t;s.emit("denied",R(t))}else w.push(e)})},function(e){throw a.doc_write_failures+=n.length,e})}}function A(){if(u.error)throw new Error("There was a problem getting docs.");a.last_seq=v=u.seq;var e=R(a);return w.length&&(e.docs=w,"number"==typeof u.pending&&(e.pending=u.pending,delete u.pending),s.emit("change",e)),d=!0,c.writeCheckpoint(u.seq,k).then(function(){if(d=!1,s.cancelled)throw C(),new Error("cancelled");u=void 0,D()}).catch(function(e){throw B(e),e})}function q(){return yr(r,i,u.diffs,s).then(function(e){u.error=!e.ok,e.docs.forEach(function(e){delete u.diffs[e._id],a.docs_read++,u.docs.push(e)})})}function E(){s.cancelled||u||(0!==f.length?(u=f.shift(),function(){var t={};return u.changes.forEach(function(e){"_user/"!==e.id&&(t[e.id]=e.changes.map(function(e){return e.rev}))}),i.revsDiff(t).then(function(e){if(s.cancelled)throw C(),new Error("cancelled");u.diffs=e})}().then(q).then(O).then(A).then(E).catch(function(e){x("batch processing terminated with error",e)})):S(!0))}function S(e){0!==l.changes.length?(e||h||l.changes.length>=t)&&(f.push(l),l={seq:0,changes:[],docs:[]},"pending"!==s.state&&"stopped"!==s.state||(s.state="active",s.emit("active")),E()):0!==f.length||u||((y&&j.live||h)&&(s.state="pending",s.emit("paused")),h&&C())}function x(e,t){p||(t.message||(t.message=e),a.ok=!1,a.status="aborting",f=[],l={seq:0,changes:[],docs:[]},C(t))}function C(e){if(!(p||s.cancelled&&(a.status="cancelled",d)))if(a.status=a.status||"complete",a.end_time=(new Date).toISOString(),a.last_seq=v,p=!0,e){(e=Y(e)).result=a;var t=(e.name||"").toLowerCase();"unauthorized"===t||"forbidden"===t?(s.emit("error",e),s.removeAllListeners()):function(e,t,n,r){if(!1===e.retry)return t.emit("error",n),t.removeAllListeners();if("function"!=typeof e.back_off_function&&(e.back_off_function=M),t.emit("requestError",n),"active"===t.state||"pending"===t.state){t.emit("paused",n),t.state="stopped";var i=function(){e.current_back_off=qr};t.once("paused",function(){t.removeListener("active",i)}),t.once("active",i)}e.current_back_off=e.current_back_off||qr,e.current_back_off=e.back_off_function(e.current_back_off),setTimeout(r,e.current_back_off)}(o,s,e,function(){Sr(r,i,o,s)})}else s.emit("complete",a),s.removeAllListeners()}function P(e,t,n){if(s.cancelled)return C();"number"==typeof t&&(l.pending=t),X(o)(e)&&(l.seq=e.seq||n,l.changes.push(e),T(function(){S(0===f.length&&j.live)}))}function L(e){if(g=!1,s.cancelled)return C();if(0<e.results.length)j.since=e.results[e.results.length-1].seq,D(),S(!0);else{var t=function(){y?(j.live=!0,D()):h=!0,S(!0)};u||0!==e.results.length?t():(d=!0,c.writeCheckpoint(e.last_seq,k).then(function(){d=!1,a.last_seq=v=e.last_seq,t()}).catch(B))}}function $(e){if(g=!1,s.cancelled)return C();x("changes rejected",e)}function D(){if(!g&&!h&&f.length<_){g=!0,s._changes&&(s.removeListener("cancel",s._abortChanges),s._changes.cancel()),s.once("cancel",t);var e=r.changes(j).on("change",P);e.then(n,n),e.then(L).catch($),o.retry&&(s._changes=e,s._abortChanges=t)}function t(){e.cancel()}function n(){s.removeListener("cancel",t)}}function I(){e().then(function(){if(!s.cancelled)return c.getCheckpoint().then(function(e){j={since:v=e,limit:t,batch_size:t,style:"all_docs",doc_ids:m,selector:b,return_docs:!0},o.filter&&("string"!=typeof o.filter?j.include_docs=!0:j.filter=o.filter),"heartbeat"in o&&(j.heartbeat=o.heartbeat),"timeout"in o&&(j.timeout=o.timeout),o.query_params&&(j.query_params=o.query_params),o.view&&(j.view=o.view),D()});C()}).catch(function(e){x("getCheckpoint rejected with ",e)})}function B(e){d=!1,x("writeCheckpoint completed with error",e)}s.ready(r,i),s.cancelled?C():(s._addedListeners||(s.once("cancel",C),"function"==typeof o.complete&&(s.once("error",o.complete),s.once("complete",function(e){o.complete(null,e)})),s._addedListeners=!0),void 0===o.since?I():e().then(function(){return d=!0,c.writeCheckpoint(o.since,k)}).then(function(){d=!1,s.cancelled?C():(v=o.since,I())}).catch(B))}function xr(){a.EventEmitter.call(this),this.cancelled=!1,this.state="pending";var n=this,r=new Promise(function(e,t){n.once("complete",e),n.once("error",t)});n.then=function(e,t){return r.then(e,t)},n.catch=function(e){return r.catch(e)},n.catch(function(){})}function Cr(e,t){var n=t.PouchConstructor;return"string"==typeof e?new n(e,t):e}function Pr(e,t,n,r){if("function"==typeof n&&(r=n,n={}),void 0===n&&(n={}),n.doc_ids&&!Array.isArray(n.doc_ids))throw Y(z,"`doc_ids` filter parameter is not a list.");n.complete=r,(n=R(n)).continuous=n.continuous||n.live,n.retry="retry"in n&&n.retry,n.PouchConstructor=n.PouchConstructor||this;var i=new xr(n);return Sr(Cr(e,n),Cr(t,n),n,i),i}function Lr(e,t,n,r){return"function"==typeof n&&(r=n,n={}),void 0===n&&(n={}),(n=R(n)).PouchConstructor=n.PouchConstructor||this,new $r(e=Cr(e,n),t=Cr(t,n),n,r)}function $r(e,t,n,r){var i=this;this.canceled=!1;var o=n.push?C({},n,n.push):n,s=n.pull?C({},n,n.pull):n;function a(e){i.emit("change",{direction:"pull",change:e})}function u(e){i.emit("change",{direction:"push",change:e})}function c(e){i.emit("denied",{direction:"push",doc:e})}function f(e){i.emit("denied",{direction:"pull",doc:e})}function l(){i.pushPaused=!0,i.pullPaused&&i.emit("paused")}function d(){i.pullPaused=!0,i.pushPaused&&i.emit("paused")}function h(){i.pushPaused=!1,i.pullPaused&&i.emit("active",{direction:"push"})}function p(){i.pullPaused=!1,i.pushPaused&&i.emit("active",{direction:"pull"})}this.push=Pr(e,t,o),this.pull=Pr(t,e,s),this.pushPaused=!0,this.pullPaused=!0;var v={};function y(n){return function(e,t){("change"!==e||t!==a&&t!==u)&&("denied"!==e||t!==f&&t!==c)&&("paused"!==e||t!==d&&t!==l)&&("active"!==e||t!==p&&t!==h)||(e in v||(v[e]={}),v[e][n]=!0,2===Object.keys(v[e]).length&&i.removeAllListeners(e))}}function _(e,t,n){-1==e.listeners(t).indexOf(n)&&e.on(t,n)}n.live&&(this.push.on("complete",i.pull.cancel.bind(i.pull)),this.pull.on("complete",i.push.cancel.bind(i.push))),this.on("newListener",function(e){"change"===e?(_(i.pull,"change",a),_(i.push,"change",u)):"denied"===e?(_(i.pull,"denied",f),_(i.push,"denied",c)):"active"===e?(_(i.pull,"active",p),_(i.push,"active",h)):"paused"===e&&(_(i.pull,"paused",d),_(i.push,"paused",l))}),this.on("removeListener",function(e){"change"===e?(i.pull.removeListener("change",a),i.push.removeListener("change",u)):"denied"===e?(i.pull.removeListener("denied",f),i.push.removeListener("denied",c)):"active"===e?(i.pull.removeListener("active",p),i.push.removeListener("active",h)):"paused"===e&&(i.pull.removeListener("paused",d),i.push.removeListener("paused",l))}),this.pull.on("removeListener",y("pull")),this.push.on("removeListener",y("push"));var g=Promise.all([this.push,this.pull]).then(function(e){var t={push:e[0],pull:e[1]};return i.emit("complete",t),r&&r(null,t),i.removeAllListeners(),t},function(e){if(i.cancel(),r?r(e):i.emit("error",e),i.removeAllListeners(),r)throw e});this.then=function(e,t){return g.then(e,t)},this.catch=function(e){return g.catch(e)}}o(xr,a.EventEmitter),xr.prototype.cancel=function(){this.cancelled=!0,this.state="cancelled",this.emit("cancel")},xr.prototype.ready=function(e,t){var n=this;function r(){n.cancel()}n._readyCalled||(n._readyCalled=!0,e.once("destroyed",r),t.once("destroyed",r),n.once("complete",function(){e.removeListener("destroyed",r),t.removeListener("destroyed",r)}))},o($r,a.EventEmitter),$r.prototype.cancel=function(){this.canceled||(this.canceled=!0,this.push.cancel(),this.pull.cancel())},We.plugin(function(e){e.adapter("idb",dn,!0)}).plugin(function(e){e.adapter("http",An,!1),e.adapter("https",An,!1)}).plugin(hr).plugin(function(e){e.replicate=Pr,e.sync=Lr,Object.defineProperty(e.prototype,"replicate",{get:function(){var r=this;return void 0===this.replicateMethods&&(this.replicateMethods={from:function(e,t,n){return r.constructor.replicate(e,r,t,n)},to:function(e,t,n){return r.constructor.replicate(r,e,t,n)}}),this.replicateMethods}}),e.prototype.sync=function(e,t,n){return this.constructor.sync(this,e,t,n)}}),Ir.exports=We}).call(this,Dr(5),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{1:1,12:12,2:2,3:3,4:4,5:5,6:6,7:7}]},{},[13])(13)});



  // pouchdb-find plugin 7.1.1
  // Based on Mango: https://github.com/cloudant/mango
  //
  // (c) 2012-2019 Dale Harvey and the PouchDB team
  // PouchDB may be freely distributed under the Apache license, version 2.0.
  // For all details and documentation:
  // http://pouchdb.com
  (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(_dereq_,module,exports){
  'use strict';

  module.exports = argsArray;

  function argsArray(fun) {
    return function () {
      var len = arguments.length;
      if (len) {
        var args = [];
        var i = -1;
        while (++i < len) {
          args[i] = arguments[i];
        }
        return fun.call(this, args);
      } else {
        return fun.call(this, []);
      }
    };
  }
  },{}],2:[function(_dereq_,module,exports){
  // Copyright Joyent, Inc. and other Node contributors.
  //
  // Permission is hereby granted, free of charge, to any person obtaining a
  // copy of this software and associated documentation files (the
  // "Software"), to deal in the Software without restriction, including
  // without limitation the rights to use, copy, modify, merge, publish,
  // distribute, sublicense, and/or sell copies of the Software, and to permit
  // persons to whom the Software is furnished to do so, subject to the
  // following conditions:
  //
  // The above copyright notice and this permission notice shall be included
  // in all copies or substantial portions of the Software.
  //
  // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
  // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
  // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
  // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
  // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
  // USE OR OTHER DEALINGS IN THE SOFTWARE.

  var objectCreate = Object.create || objectCreatePolyfill
  var objectKeys = Object.keys || objectKeysPolyfill
  var bind = Function.prototype.bind || functionBindPolyfill

  function EventEmitter() {
    if (!this._events || !Object.prototype.hasOwnProperty.call(this, '_events')) {
      this._events = objectCreate(null);
      this._eventsCount = 0;
    }

    this._maxListeners = this._maxListeners || undefined;
  }
  module.exports = EventEmitter;

  // Backwards-compat with node 0.10.x
  EventEmitter.EventEmitter = EventEmitter;

  EventEmitter.prototype._events = undefined;
  EventEmitter.prototype._maxListeners = undefined;

  // By default EventEmitters will print a warning if more than 10 listeners are
  // added to it. This is a useful default which helps finding memory leaks.
  var defaultMaxListeners = 10;

  var hasDefineProperty;
  try {
    var o = {};
    if (Object.defineProperty) Object.defineProperty(o, 'x', { value: 0 });
    hasDefineProperty = o.x === 0;
  } catch (err) { hasDefineProperty = false }
  if (hasDefineProperty) {
    Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
      enumerable: true,
      get: function() {
        return defaultMaxListeners;
      },
      set: function(arg) {
        // check whether the input is a positive number (whose value is zero or
        // greater and not a NaN).
        if (typeof arg !== 'number' || arg < 0 || arg !== arg)
          throw new TypeError('"defaultMaxListeners" must be a positive number');
        defaultMaxListeners = arg;
      }
    });
  } else {
    EventEmitter.defaultMaxListeners = defaultMaxListeners;
  }

  // Obviously not all Emitters should be limited to 10. This function allows
  // that to be increased. Set to zero for unlimited.
  EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
    if (typeof n !== 'number' || n < 0 || isNaN(n))
      throw new TypeError('"n" argument must be a positive number');
    this._maxListeners = n;
    return this;
  };

  function $getMaxListeners(that) {
    if (that._maxListeners === undefined)
      return EventEmitter.defaultMaxListeners;
    return that._maxListeners;
  }

  EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
    return $getMaxListeners(this);
  };

  // These standalone emit* functions are used to optimize calling of event
  // handlers for fast cases because emit() itself often has a variable number of
  // arguments and can be deoptimized because of that. These functions always have
  // the same number of arguments and thus do not get deoptimized, so the code
  // inside them can execute faster.
  function emitNone(handler, isFn, self) {
    if (isFn)
      handler.call(self);
    else {
      var len = handler.length;
      var listeners = arrayClone(handler, len);
      for (var i = 0; i < len; ++i)
        listeners[i].call(self);
    }
  }
  function emitOne(handler, isFn, self, arg1) {
    if (isFn)
      handler.call(self, arg1);
    else {
      var len = handler.length;
      var listeners = arrayClone(handler, len);
      for (var i = 0; i < len; ++i)
        listeners[i].call(self, arg1);
    }
  }
  function emitTwo(handler, isFn, self, arg1, arg2) {
    if (isFn)
      handler.call(self, arg1, arg2);
    else {
      var len = handler.length;
      var listeners = arrayClone(handler, len);
      for (var i = 0; i < len; ++i)
        listeners[i].call(self, arg1, arg2);
    }
  }
  function emitThree(handler, isFn, self, arg1, arg2, arg3) {
    if (isFn)
      handler.call(self, arg1, arg2, arg3);
    else {
      var len = handler.length;
      var listeners = arrayClone(handler, len);
      for (var i = 0; i < len; ++i)
        listeners[i].call(self, arg1, arg2, arg3);
    }
  }

  function emitMany(handler, isFn, self, args) {
    if (isFn)
      handler.apply(self, args);
    else {
      var len = handler.length;
      var listeners = arrayClone(handler, len);
      for (var i = 0; i < len; ++i)
        listeners[i].apply(self, args);
    }
  }

  EventEmitter.prototype.emit = function emit(type) {
    var er, handler, len, args, i, events;
    var doError = (type === 'error');

    events = this._events;
    if (events)
      doError = (doError && events.error == null);
    else if (!doError)
      return false;

    // If there is no 'error' event listener then throw.
    if (doError) {
      if (arguments.length > 1)
        er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Unhandled "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
      return false;
    }

    handler = events[type];

    if (!handler)
      return false;

    var isFn = typeof handler === 'function';
    len = arguments.length;
    switch (len) {
        // fast cases
      case 1:
        emitNone(handler, isFn, this);
        break;
      case 2:
        emitOne(handler, isFn, this, arguments[1]);
        break;
      case 3:
        emitTwo(handler, isFn, this, arguments[1], arguments[2]);
        break;
      case 4:
        emitThree(handler, isFn, this, arguments[1], arguments[2], arguments[3]);
        break;
        // slower
      default:
        args = new Array(len - 1);
        for (i = 1; i < len; i++)
          args[i - 1] = arguments[i];
        emitMany(handler, isFn, this, args);
    }

    return true;
  };

  function _addListener(target, type, listener, prepend) {
    var m;
    var events;
    var existing;

    if (typeof listener !== 'function')
      throw new TypeError('"listener" argument must be a function');

    events = target._events;
    if (!events) {
      events = target._events = objectCreate(null);
      target._eventsCount = 0;
    } else {
      // To avoid recursion in the case that type === "newListener"! Before
      // adding it to the listeners, first emit "newListener".
      if (events.newListener) {
        target.emit('newListener', type,
            listener.listener ? listener.listener : listener);

        // Re-assign `events` because a newListener handler could have caused the
        // this._events to be assigned to a new object
        events = target._events;
      }
      existing = events[type];
    }

    if (!existing) {
      // Optimize the case of one listener. Don't need the extra array object.
      existing = events[type] = listener;
      ++target._eventsCount;
    } else {
      if (typeof existing === 'function') {
        // Adding the second element, need to change to array.
        existing = events[type] =
            prepend ? [listener, existing] : [existing, listener];
      } else {
        // If we've already got an array, just append.
        if (prepend) {
          existing.unshift(listener);
        } else {
          existing.push(listener);
        }
      }

      // Check for listener leak
      if (!existing.warned) {
        m = $getMaxListeners(target);
        if (m && m > 0 && existing.length > m) {
          existing.warned = true;
          var w = new Error('Possible EventEmitter memory leak detected. ' +
              existing.length + ' "' + String(type) + '" listeners ' +
              'added. Use emitter.setMaxListeners() to ' +
              'increase limit.');
          w.name = 'MaxListenersExceededWarning';
          w.emitter = target;
          w.type = type;
          w.count = existing.length;
          if (typeof console === 'object' && console.warn) {
            console.warn('%s: %s', w.name, w.message);
          }
        }
      }
    }

    return target;
  }

  EventEmitter.prototype.addListener = function addListener(type, listener) {
    return _addListener(this, type, listener, false);
  };

  EventEmitter.prototype.on = EventEmitter.prototype.addListener;

  EventEmitter.prototype.prependListener =
      function prependListener(type, listener) {
        return _addListener(this, type, listener, true);
      };

  function onceWrapper() {
    if (!this.fired) {
      this.target.removeListener(this.type, this.wrapFn);
      this.fired = true;
      switch (arguments.length) {
        case 0:
          return this.listener.call(this.target);
        case 1:
          return this.listener.call(this.target, arguments[0]);
        case 2:
          return this.listener.call(this.target, arguments[0], arguments[1]);
        case 3:
          return this.listener.call(this.target, arguments[0], arguments[1],
              arguments[2]);
        default:
          var args = new Array(arguments.length);
          for (var i = 0; i < args.length; ++i)
            args[i] = arguments[i];
          this.listener.apply(this.target, args);
      }
    }
  }

  function _onceWrap(target, type, listener) {
    var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
    var wrapped = bind.call(onceWrapper, state);
    wrapped.listener = listener;
    state.wrapFn = wrapped;
    return wrapped;
  }

  EventEmitter.prototype.once = function once(type, listener) {
    if (typeof listener !== 'function')
      throw new TypeError('"listener" argument must be a function');
    this.on(type, _onceWrap(this, type, listener));
    return this;
  };

  EventEmitter.prototype.prependOnceListener =
      function prependOnceListener(type, listener) {
        if (typeof listener !== 'function')
          throw new TypeError('"listener" argument must be a function');
        this.prependListener(type, _onceWrap(this, type, listener));
        return this;
      };

  // Emits a 'removeListener' event if and only if the listener was removed.
  EventEmitter.prototype.removeListener =
      function removeListener(type, listener) {
        var list, events, position, i, originalListener;

        if (typeof listener !== 'function')
          throw new TypeError('"listener" argument must be a function');

        events = this._events;
        if (!events)
          return this;

        list = events[type];
        if (!list)
          return this;

        if (list === listener || list.listener === listener) {
          if (--this._eventsCount === 0)
            this._events = objectCreate(null);
          else {
            delete events[type];
            if (events.removeListener)
              this.emit('removeListener', type, list.listener || listener);
          }
        } else if (typeof list !== 'function') {
          position = -1;

          for (i = list.length - 1; i >= 0; i--) {
            if (list[i] === listener || list[i].listener === listener) {
              originalListener = list[i].listener;
              position = i;
              break;
            }
          }

          if (position < 0)
            return this;

          if (position === 0)
            list.shift();
          else
            spliceOne(list, position);

          if (list.length === 1)
            events[type] = list[0];

          if (events.removeListener)
            this.emit('removeListener', type, originalListener || listener);
        }

        return this;
      };

  EventEmitter.prototype.removeAllListeners =
      function removeAllListeners(type) {
        var listeners, events, i;

        events = this._events;
        if (!events)
          return this;

        // not listening for removeListener, no need to emit
        if (!events.removeListener) {
          if (arguments.length === 0) {
            this._events = objectCreate(null);
            this._eventsCount = 0;
          } else if (events[type]) {
            if (--this._eventsCount === 0)
              this._events = objectCreate(null);
            else
              delete events[type];
          }
          return this;
        }

        // emit removeListener for all listeners on all events
        if (arguments.length === 0) {
          var keys = objectKeys(events);
          var key;
          for (i = 0; i < keys.length; ++i) {
            key = keys[i];
            if (key === 'removeListener') continue;
            this.removeAllListeners(key);
          }
          this.removeAllListeners('removeListener');
          this._events = objectCreate(null);
          this._eventsCount = 0;
          return this;
        }

        listeners = events[type];

        if (typeof listeners === 'function') {
          this.removeListener(type, listeners);
        } else if (listeners) {
          // LIFO order
          for (i = listeners.length - 1; i >= 0; i--) {
            this.removeListener(type, listeners[i]);
          }
        }

        return this;
      };

  function _listeners(target, type, unwrap) {
    var events = target._events;

    if (!events)
      return [];

    var evlistener = events[type];
    if (!evlistener)
      return [];

    if (typeof evlistener === 'function')
      return unwrap ? [evlistener.listener || evlistener] : [evlistener];

    return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
  }

  EventEmitter.prototype.listeners = function listeners(type) {
    return _listeners(this, type, true);
  };

  EventEmitter.prototype.rawListeners = function rawListeners(type) {
    return _listeners(this, type, false);
  };

  EventEmitter.listenerCount = function(emitter, type) {
    if (typeof emitter.listenerCount === 'function') {
      return emitter.listenerCount(type);
    } else {
      return listenerCount.call(emitter, type);
    }
  };

  EventEmitter.prototype.listenerCount = listenerCount;
  function listenerCount(type) {
    var events = this._events;

    if (events) {
      var evlistener = events[type];

      if (typeof evlistener === 'function') {
        return 1;
      } else if (evlistener) {
        return evlistener.length;
      }
    }

    return 0;
  }

  EventEmitter.prototype.eventNames = function eventNames() {
    return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
  };

  // About 1.5x faster than the two-arg version of Array#splice().
  function spliceOne(list, index) {
    for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1)
      list[i] = list[k];
    list.pop();
  }

  function arrayClone(arr, n) {
    var copy = new Array(n);
    for (var i = 0; i < n; ++i)
      copy[i] = arr[i];
    return copy;
  }

  function unwrapListeners(arr) {
    var ret = new Array(arr.length);
    for (var i = 0; i < ret.length; ++i) {
      ret[i] = arr[i].listener || arr[i];
    }
    return ret;
  }

  function objectCreatePolyfill(proto) {
    var F = function() {};
    F.prototype = proto;
    return new F;
  }
  function objectKeysPolyfill(obj) {
    var keys = [];
    for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k)) {
      keys.push(k);
    }
    return k;
  }
  function functionBindPolyfill(context) {
    var fn = this;
    return function () {
      return fn.apply(context, arguments);
    };
  }

  },{}],3:[function(_dereq_,module,exports){
  (function (global){
  'use strict';
  var Mutation = global.MutationObserver || global.WebKitMutationObserver;

  var scheduleDrain;

  {
    if (Mutation) {
      var called = 0;
      var observer = new Mutation(nextTick);
      var element = global.document.createTextNode('');
      observer.observe(element, {
        characterData: true
      });
      scheduleDrain = function () {
        element.data = (called = ++called % 2);
      };
    } else if (!global.setImmediate && typeof global.MessageChannel !== 'undefined') {
      var channel = new global.MessageChannel();
      channel.port1.onmessage = nextTick;
      scheduleDrain = function () {
        channel.port2.postMessage(0);
      };
    } else if ('document' in global && 'onreadystatechange' in global.document.createElement('script')) {
      scheduleDrain = function () {

        // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
        // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
        var scriptEl = global.document.createElement('script');
        scriptEl.onreadystatechange = function () {
          nextTick();

          scriptEl.onreadystatechange = null;
          scriptEl.parentNode.removeChild(scriptEl);
          scriptEl = null;
        };
        global.document.documentElement.appendChild(scriptEl);
      };
    } else {
      scheduleDrain = function () {
        setTimeout(nextTick, 0);
      };
    }
  }

  var draining;
  var queue = [];
  //named nextTick for less confusing stack traces
  function nextTick() {
    draining = true;
    var i, oldQueue;
    var len = queue.length;
    while (len) {
      oldQueue = queue;
      queue = [];
      i = -1;
      while (++i < len) {
        oldQueue[i]();
      }
      len = queue.length;
    }
    draining = false;
  }

  module.exports = immediate;
  function immediate(task) {
    if (queue.push(task) === 1 && !draining) {
      scheduleDrain();
    }
  }

  }).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
  },{}],4:[function(_dereq_,module,exports){
  if (typeof Object.create === 'function') {
    // implementation from standard node.js 'util' module
    module.exports = function inherits(ctor, superCtor) {
      ctor.super_ = superCtor
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    };
  } else {
    // old school shim for old browsers
    module.exports = function inherits(ctor, superCtor) {
      ctor.super_ = superCtor
      var TempCtor = function () {}
      TempCtor.prototype = superCtor.prototype
      ctor.prototype = new TempCtor()
      ctor.prototype.constructor = ctor
    }
  }

  },{}],5:[function(_dereq_,module,exports){
  (function (factory) {
      if (typeof exports === 'object') {
          // Node/CommonJS
          module.exports = factory();
      } else if (typeof define === 'function' && define.amd) {
          // AMD
          define(factory);
      } else {
          // Browser globals (with support for web workers)
          var glob;

          try {
              glob = window;
          } catch (e) {
              glob = self;
          }

          glob.SparkMD5 = factory();
      }
  }(function (undefined) {

      'use strict';

      /*
       * Fastest md5 implementation around (JKM md5).
       * Credits: Joseph Myers
       *
       * @see http://www.myersdaily.org/joseph/javascript/md5-text.html
       * @see http://jsperf.com/md5-shootout/7
       */

      /* this function is much faster,
        so if possible we use it. Some IEs
        are the only ones I know of that
        need the idiotic second function,
        generated by an if clause.  */
      var add32 = function (a, b) {
          return (a + b) & 0xFFFFFFFF;
      },
          hex_chr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];


      function cmn(q, a, b, x, s, t) {
          a = add32(add32(a, q), add32(x, t));
          return add32((a << s) | (a >>> (32 - s)), b);
      }

      function md5cycle(x, k) {
          var a = x[0],
              b = x[1],
              c = x[2],
              d = x[3];

          a += (b & c | ~b & d) + k[0] - 680876936 | 0;
          a  = (a << 7 | a >>> 25) + b | 0;
          d += (a & b | ~a & c) + k[1] - 389564586 | 0;
          d  = (d << 12 | d >>> 20) + a | 0;
          c += (d & a | ~d & b) + k[2] + 606105819 | 0;
          c  = (c << 17 | c >>> 15) + d | 0;
          b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
          b  = (b << 22 | b >>> 10) + c | 0;
          a += (b & c | ~b & d) + k[4] - 176418897 | 0;
          a  = (a << 7 | a >>> 25) + b | 0;
          d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
          d  = (d << 12 | d >>> 20) + a | 0;
          c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
          c  = (c << 17 | c >>> 15) + d | 0;
          b += (c & d | ~c & a) + k[7] - 45705983 | 0;
          b  = (b << 22 | b >>> 10) + c | 0;
          a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
          a  = (a << 7 | a >>> 25) + b | 0;
          d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
          d  = (d << 12 | d >>> 20) + a | 0;
          c += (d & a | ~d & b) + k[10] - 42063 | 0;
          c  = (c << 17 | c >>> 15) + d | 0;
          b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
          b  = (b << 22 | b >>> 10) + c | 0;
          a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
          a  = (a << 7 | a >>> 25) + b | 0;
          d += (a & b | ~a & c) + k[13] - 40341101 | 0;
          d  = (d << 12 | d >>> 20) + a | 0;
          c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
          c  = (c << 17 | c >>> 15) + d | 0;
          b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
          b  = (b << 22 | b >>> 10) + c | 0;

          a += (b & d | c & ~d) + k[1] - 165796510 | 0;
          a  = (a << 5 | a >>> 27) + b | 0;
          d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
          d  = (d << 9 | d >>> 23) + a | 0;
          c += (d & b | a & ~b) + k[11] + 643717713 | 0;
          c  = (c << 14 | c >>> 18) + d | 0;
          b += (c & a | d & ~a) + k[0] - 373897302 | 0;
          b  = (b << 20 | b >>> 12) + c | 0;
          a += (b & d | c & ~d) + k[5] - 701558691 | 0;
          a  = (a << 5 | a >>> 27) + b | 0;
          d += (a & c | b & ~c) + k[10] + 38016083 | 0;
          d  = (d << 9 | d >>> 23) + a | 0;
          c += (d & b | a & ~b) + k[15] - 660478335 | 0;
          c  = (c << 14 | c >>> 18) + d | 0;
          b += (c & a | d & ~a) + k[4] - 405537848 | 0;
          b  = (b << 20 | b >>> 12) + c | 0;
          a += (b & d | c & ~d) + k[9] + 568446438 | 0;
          a  = (a << 5 | a >>> 27) + b | 0;
          d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
          d  = (d << 9 | d >>> 23) + a | 0;
          c += (d & b | a & ~b) + k[3] - 187363961 | 0;
          c  = (c << 14 | c >>> 18) + d | 0;
          b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
          b  = (b << 20 | b >>> 12) + c | 0;
          a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
          a  = (a << 5 | a >>> 27) + b | 0;
          d += (a & c | b & ~c) + k[2] - 51403784 | 0;
          d  = (d << 9 | d >>> 23) + a | 0;
          c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
          c  = (c << 14 | c >>> 18) + d | 0;
          b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
          b  = (b << 20 | b >>> 12) + c | 0;

          a += (b ^ c ^ d) + k[5] - 378558 | 0;
          a  = (a << 4 | a >>> 28) + b | 0;
          d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
          d  = (d << 11 | d >>> 21) + a | 0;
          c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
          c  = (c << 16 | c >>> 16) + d | 0;
          b += (c ^ d ^ a) + k[14] - 35309556 | 0;
          b  = (b << 23 | b >>> 9) + c | 0;
          a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
          a  = (a << 4 | a >>> 28) + b | 0;
          d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
          d  = (d << 11 | d >>> 21) + a | 0;
          c += (d ^ a ^ b) + k[7] - 155497632 | 0;
          c  = (c << 16 | c >>> 16) + d | 0;
          b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
          b  = (b << 23 | b >>> 9) + c | 0;
          a += (b ^ c ^ d) + k[13] + 681279174 | 0;
          a  = (a << 4 | a >>> 28) + b | 0;
          d += (a ^ b ^ c) + k[0] - 358537222 | 0;
          d  = (d << 11 | d >>> 21) + a | 0;
          c += (d ^ a ^ b) + k[3] - 722521979 | 0;
          c  = (c << 16 | c >>> 16) + d | 0;
          b += (c ^ d ^ a) + k[6] + 76029189 | 0;
          b  = (b << 23 | b >>> 9) + c | 0;
          a += (b ^ c ^ d) + k[9] - 640364487 | 0;
          a  = (a << 4 | a >>> 28) + b | 0;
          d += (a ^ b ^ c) + k[12] - 421815835 | 0;
          d  = (d << 11 | d >>> 21) + a | 0;
          c += (d ^ a ^ b) + k[15] + 530742520 | 0;
          c  = (c << 16 | c >>> 16) + d | 0;
          b += (c ^ d ^ a) + k[2] - 995338651 | 0;
          b  = (b << 23 | b >>> 9) + c | 0;

          a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
          a  = (a << 6 | a >>> 26) + b | 0;
          d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
          d  = (d << 10 | d >>> 22) + a | 0;
          c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
          c  = (c << 15 | c >>> 17) + d | 0;
          b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
          b  = (b << 21 |b >>> 11) + c | 0;
          a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
          a  = (a << 6 | a >>> 26) + b | 0;
          d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
          d  = (d << 10 | d >>> 22) + a | 0;
          c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
          c  = (c << 15 | c >>> 17) + d | 0;
          b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
          b  = (b << 21 |b >>> 11) + c | 0;
          a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
          a  = (a << 6 | a >>> 26) + b | 0;
          d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
          d  = (d << 10 | d >>> 22) + a | 0;
          c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
          c  = (c << 15 | c >>> 17) + d | 0;
          b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
          b  = (b << 21 |b >>> 11) + c | 0;
          a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
          a  = (a << 6 | a >>> 26) + b | 0;
          d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
          d  = (d << 10 | d >>> 22) + a | 0;
          c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
          c  = (c << 15 | c >>> 17) + d | 0;
          b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
          b  = (b << 21 | b >>> 11) + c | 0;

          x[0] = a + x[0] | 0;
          x[1] = b + x[1] | 0;
          x[2] = c + x[2] | 0;
          x[3] = d + x[3] | 0;
      }

      function md5blk(s) {
          var md5blks = [],
              i; /* Andy King said do it this way. */

          for (i = 0; i < 64; i += 4) {
              md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
          }
          return md5blks;
      }

      function md5blk_array(a) {
          var md5blks = [],
              i; /* Andy King said do it this way. */

          for (i = 0; i < 64; i += 4) {
              md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
          }
          return md5blks;
      }

      function md51(s) {
          var n = s.length,
              state = [1732584193, -271733879, -1732584194, 271733878],
              i,
              length,
              tail,
              tmp,
              lo,
              hi;

          for (i = 64; i <= n; i += 64) {
              md5cycle(state, md5blk(s.substring(i - 64, i)));
          }
          s = s.substring(i - 64);
          length = s.length;
          tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          for (i = 0; i < length; i += 1) {
              tail[i >> 2] |= s.charCodeAt(i) << ((i % 4) << 3);
          }
          tail[i >> 2] |= 0x80 << ((i % 4) << 3);
          if (i > 55) {
              md5cycle(state, tail);
              for (i = 0; i < 16; i += 1) {
                  tail[i] = 0;
              }
          }

          // Beware that the final length might not fit in 32 bits so we take care of that
          tmp = n * 8;
          tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
          lo = parseInt(tmp[2], 16);
          hi = parseInt(tmp[1], 16) || 0;

          tail[14] = lo;
          tail[15] = hi;

          md5cycle(state, tail);
          return state;
      }

      function md51_array(a) {
          var n = a.length,
              state = [1732584193, -271733879, -1732584194, 271733878],
              i,
              length,
              tail,
              tmp,
              lo,
              hi;

          for (i = 64; i <= n; i += 64) {
              md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
          }

          // Not sure if it is a bug, however IE10 will always produce a sub array of length 1
          // containing the last element of the parent array if the sub array specified starts
          // beyond the length of the parent array - weird.
          // https://connect.microsoft.com/IE/feedback/details/771452/typed-array-subarray-issue
          a = (i - 64) < n ? a.subarray(i - 64) : new Uint8Array(0);

          length = a.length;
          tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          for (i = 0; i < length; i += 1) {
              tail[i >> 2] |= a[i] << ((i % 4) << 3);
          }

          tail[i >> 2] |= 0x80 << ((i % 4) << 3);
          if (i > 55) {
              md5cycle(state, tail);
              for (i = 0; i < 16; i += 1) {
                  tail[i] = 0;
              }
          }

          // Beware that the final length might not fit in 32 bits so we take care of that
          tmp = n * 8;
          tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
          lo = parseInt(tmp[2], 16);
          hi = parseInt(tmp[1], 16) || 0;

          tail[14] = lo;
          tail[15] = hi;

          md5cycle(state, tail);

          return state;
      }

      function rhex(n) {
          var s = '',
              j;
          for (j = 0; j < 4; j += 1) {
              s += hex_chr[(n >> (j * 8 + 4)) & 0x0F] + hex_chr[(n >> (j * 8)) & 0x0F];
          }
          return s;
      }

      function hex(x) {
          var i;
          for (i = 0; i < x.length; i += 1) {
              x[i] = rhex(x[i]);
          }
          return x.join('');
      }

      // In some cases the fast add32 function cannot be used..
      if (hex(md51('hello')) !== '5d41402abc4b2a76b9719d911017c592') {
          add32 = function (x, y) {
              var lsw = (x & 0xFFFF) + (y & 0xFFFF),
                  msw = (x >> 16) + (y >> 16) + (lsw >> 16);
              return (msw << 16) | (lsw & 0xFFFF);
          };
      }

      // ---------------------------------------------------

      /**
       * ArrayBuffer slice polyfill.
       *
       * @see https://github.com/ttaubert/node-arraybuffer-slice
       */

      if (typeof ArrayBuffer !== 'undefined' && !ArrayBuffer.prototype.slice) {
          (function () {
              function clamp(val, length) {
                  val = (val | 0) || 0;

                  if (val < 0) {
                      return Math.max(val + length, 0);
                  }

                  return Math.min(val, length);
              }

              ArrayBuffer.prototype.slice = function (from, to) {
                  var length = this.byteLength,
                      begin = clamp(from, length),
                      end = length,
                      num,
                      target,
                      targetArray,
                      sourceArray;

                  if (to !== undefined) {
                      end = clamp(to, length);
                  }

                  if (begin > end) {
                      return new ArrayBuffer(0);
                  }

                  num = end - begin;
                  target = new ArrayBuffer(num);
                  targetArray = new Uint8Array(target);

                  sourceArray = new Uint8Array(this, begin, num);
                  targetArray.set(sourceArray);

                  return target;
              };
          })();
      }

      // ---------------------------------------------------

      /**
       * Helpers.
       */

      function toUtf8(str) {
          if (/[\u0080-\uFFFF]/.test(str)) {
              str = unescape(encodeURIComponent(str));
          }

          return str;
      }

      function utf8Str2ArrayBuffer(str, returnUInt8Array) {
          var length = str.length,
             buff = new ArrayBuffer(length),
             arr = new Uint8Array(buff),
             i;

          for (i = 0; i < length; i += 1) {
              arr[i] = str.charCodeAt(i);
          }

          return returnUInt8Array ? arr : buff;
      }

      function arrayBuffer2Utf8Str(buff) {
          return String.fromCharCode.apply(null, new Uint8Array(buff));
      }

      function concatenateArrayBuffers(first, second, returnUInt8Array) {
          var result = new Uint8Array(first.byteLength + second.byteLength);

          result.set(new Uint8Array(first));
          result.set(new Uint8Array(second), first.byteLength);

          return returnUInt8Array ? result : result.buffer;
      }

      function hexToBinaryString(hex) {
          var bytes = [],
              length = hex.length,
              x;

          for (x = 0; x < length - 1; x += 2) {
              bytes.push(parseInt(hex.substr(x, 2), 16));
          }

          return String.fromCharCode.apply(String, bytes);
      }

      // ---------------------------------------------------

      /**
       * SparkMD5 OOP implementation.
       *
       * Use this class to perform an incremental md5, otherwise use the
       * static methods instead.
       */

      function SparkMD5() {
          // call reset to init the instance
          this.reset();
      }

      /**
       * Appends a string.
       * A conversion will be applied if an utf8 string is detected.
       *
       * @param {String} str The string to be appended
       *
       * @return {SparkMD5} The instance itself
       */
      SparkMD5.prototype.append = function (str) {
          // Converts the string to utf8 bytes if necessary
          // Then append as binary
          this.appendBinary(toUtf8(str));

          return this;
      };

      /**
       * Appends a binary string.
       *
       * @param {String} contents The binary string to be appended
       *
       * @return {SparkMD5} The instance itself
       */
      SparkMD5.prototype.appendBinary = function (contents) {
          this._buff += contents;
          this._length += contents.length;

          var length = this._buff.length,
              i;

          for (i = 64; i <= length; i += 64) {
              md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
          }

          this._buff = this._buff.substring(i - 64);

          return this;
      };

      /**
       * Finishes the incremental computation, reseting the internal state and
       * returning the result.
       *
       * @param {Boolean} raw True to get the raw string, false to get the hex string
       *
       * @return {String} The result
       */
      SparkMD5.prototype.end = function (raw) {
          var buff = this._buff,
              length = buff.length,
              i,
              tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              ret;

          for (i = 0; i < length; i += 1) {
              tail[i >> 2] |= buff.charCodeAt(i) << ((i % 4) << 3);
          }

          this._finish(tail, length);
          ret = hex(this._hash);

          if (raw) {
              ret = hexToBinaryString(ret);
          }

          this.reset();

          return ret;
      };

      /**
       * Resets the internal state of the computation.
       *
       * @return {SparkMD5} The instance itself
       */
      SparkMD5.prototype.reset = function () {
          this._buff = '';
          this._length = 0;
          this._hash = [1732584193, -271733879, -1732584194, 271733878];

          return this;
      };

      /**
       * Gets the internal state of the computation.
       *
       * @return {Object} The state
       */
      SparkMD5.prototype.getState = function () {
          return {
              buff: this._buff,
              length: this._length,
              hash: this._hash
          };
      };

      /**
       * Gets the internal state of the computation.
       *
       * @param {Object} state The state
       *
       * @return {SparkMD5} The instance itself
       */
      SparkMD5.prototype.setState = function (state) {
          this._buff = state.buff;
          this._length = state.length;
          this._hash = state.hash;

          return this;
      };

      /**
       * Releases memory used by the incremental buffer and other additional
       * resources. If you plan to use the instance again, use reset instead.
       */
      SparkMD5.prototype.destroy = function () {
          delete this._hash;
          delete this._buff;
          delete this._length;
      };

      /**
       * Finish the final calculation based on the tail.
       *
       * @param {Array}  tail   The tail (will be modified)
       * @param {Number} length The length of the remaining buffer
       */
      SparkMD5.prototype._finish = function (tail, length) {
          var i = length,
              tmp,
              lo,
              hi;

          tail[i >> 2] |= 0x80 << ((i % 4) << 3);
          if (i > 55) {
              md5cycle(this._hash, tail);
              for (i = 0; i < 16; i += 1) {
                  tail[i] = 0;
              }
          }

          // Do the final computation based on the tail and length
          // Beware that the final length may not fit in 32 bits so we take care of that
          tmp = this._length * 8;
          tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
          lo = parseInt(tmp[2], 16);
          hi = parseInt(tmp[1], 16) || 0;

          tail[14] = lo;
          tail[15] = hi;
          md5cycle(this._hash, tail);
      };

      /**
       * Performs the md5 hash on a string.
       * A conversion will be applied if utf8 string is detected.
       *
       * @param {String}  str The string
       * @param {Boolean} raw True to get the raw string, false to get the hex string
       *
       * @return {String} The result
       */
      SparkMD5.hash = function (str, raw) {
          // Converts the string to utf8 bytes if necessary
          // Then compute it using the binary function
          return SparkMD5.hashBinary(toUtf8(str), raw);
      };

      /**
       * Performs the md5 hash on a binary string.
       *
       * @param {String}  content The binary string
       * @param {Boolean} raw     True to get the raw string, false to get the hex string
       *
       * @return {String} The result
       */
      SparkMD5.hashBinary = function (content, raw) {
          var hash = md51(content),
              ret = hex(hash);

          return raw ? hexToBinaryString(ret) : ret;
      };

      // ---------------------------------------------------

      /**
       * SparkMD5 OOP implementation for array buffers.
       *
       * Use this class to perform an incremental md5 ONLY for array buffers.
       */
      SparkMD5.ArrayBuffer = function () {
          // call reset to init the instance
          this.reset();
      };

      /**
       * Appends an array buffer.
       *
       * @param {ArrayBuffer} arr The array to be appended
       *
       * @return {SparkMD5.ArrayBuffer} The instance itself
       */
      SparkMD5.ArrayBuffer.prototype.append = function (arr) {
          var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
              length = buff.length,
              i;

          this._length += arr.byteLength;

          for (i = 64; i <= length; i += 64) {
              md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
          }

          this._buff = (i - 64) < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);

          return this;
      };

      /**
       * Finishes the incremental computation, reseting the internal state and
       * returning the result.
       *
       * @param {Boolean} raw True to get the raw string, false to get the hex string
       *
       * @return {String} The result
       */
      SparkMD5.ArrayBuffer.prototype.end = function (raw) {
          var buff = this._buff,
              length = buff.length,
              tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              i,
              ret;

          for (i = 0; i < length; i += 1) {
              tail[i >> 2] |= buff[i] << ((i % 4) << 3);
          }

          this._finish(tail, length);
          ret = hex(this._hash);

          if (raw) {
              ret = hexToBinaryString(ret);
          }

          this.reset();

          return ret;
      };

      /**
       * Resets the internal state of the computation.
       *
       * @return {SparkMD5.ArrayBuffer} The instance itself
       */
      SparkMD5.ArrayBuffer.prototype.reset = function () {
          this._buff = new Uint8Array(0);
          this._length = 0;
          this._hash = [1732584193, -271733879, -1732584194, 271733878];

          return this;
      };

      /**
       * Gets the internal state of the computation.
       *
       * @return {Object} The state
       */
      SparkMD5.ArrayBuffer.prototype.getState = function () {
          var state = SparkMD5.prototype.getState.call(this);

          // Convert buffer to a string
          state.buff = arrayBuffer2Utf8Str(state.buff);

          return state;
      };

      /**
       * Gets the internal state of the computation.
       *
       * @param {Object} state The state
       *
       * @return {SparkMD5.ArrayBuffer} The instance itself
       */
      SparkMD5.ArrayBuffer.prototype.setState = function (state) {
          // Convert string to buffer
          state.buff = utf8Str2ArrayBuffer(state.buff, true);

          return SparkMD5.prototype.setState.call(this, state);
      };

      SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;

      SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;

      /**
       * Performs the md5 hash on an array buffer.
       *
       * @param {ArrayBuffer} arr The array buffer
       * @param {Boolean}     raw True to get the raw string, false to get the hex one
       *
       * @return {String} The result
       */
      SparkMD5.ArrayBuffer.hash = function (arr, raw) {
          var hash = md51_array(new Uint8Array(arr)),
              ret = hex(hash);

          return raw ? hexToBinaryString(ret) : ret;
      };

      return SparkMD5;
  }));

  },{}],6:[function(_dereq_,module,exports){
  var v1 = _dereq_(9);
  var v4 = _dereq_(10);

  var uuid = v4;
  uuid.v1 = v1;
  uuid.v4 = v4;

  module.exports = uuid;

  },{"10":10,"9":9}],7:[function(_dereq_,module,exports){
  /**
   * Convert array of 16 byte values to UUID string format of the form:
   * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
   */
  var byteToHex = [];
  for (var i = 0; i < 256; ++i) {
    byteToHex[i] = (i + 0x100).toString(16).substr(1);
  }

  function bytesToUuid(buf, offset) {
    var i = offset || 0;
    var bth = byteToHex;
    return bth[buf[i++]] + bth[buf[i++]] +
            bth[buf[i++]] + bth[buf[i++]] + '-' +
            bth[buf[i++]] + bth[buf[i++]] + '-' +
            bth[buf[i++]] + bth[buf[i++]] + '-' +
            bth[buf[i++]] + bth[buf[i++]] + '-' +
            bth[buf[i++]] + bth[buf[i++]] +
            bth[buf[i++]] + bth[buf[i++]] +
            bth[buf[i++]] + bth[buf[i++]];
  }

  module.exports = bytesToUuid;

  },{}],8:[function(_dereq_,module,exports){
  // Unique ID creation requires a high quality random # generator.  In the
  // browser this is a little complicated due to unknown quality of Math.random()
  // and inconsistent support for the `crypto` API.  We do the best we can via
  // feature-detection

  // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
  var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues.bind(crypto)) ||
                        (typeof(msCrypto) != 'undefined' && msCrypto.getRandomValues.bind(msCrypto));
  if (getRandomValues) {
    // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
    var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

    module.exports = function whatwgRNG() {
      getRandomValues(rnds8);
      return rnds8;
    };
  } else {
    // Math.random()-based (RNG)
    //
    // If all else fails, use Math.random().  It's fast, but is of unspecified
    // quality.
    var rnds = new Array(16);

    module.exports = function mathRNG() {
      for (var i = 0, r; i < 16; i++) {
        if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
        rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
      }

      return rnds;
    };
  }

  },{}],9:[function(_dereq_,module,exports){
  var rng = _dereq_(8);
  var bytesToUuid = _dereq_(7);

  // **`v1()` - Generate time-based UUID**
  //
  // Inspired by https://github.com/LiosK/UUID.js
  // and http://docs.python.org/library/uuid.html

  var _nodeId;
  var _clockseq;

  // Previous uuid creation time
  var _lastMSecs = 0;
  var _lastNSecs = 0;

  // See https://github.com/broofa/node-uuid for API details
  function v1(options, buf, offset) {
    var i = buf && offset || 0;
    var b = buf || [];

    options = options || {};
    var node = options.node || _nodeId;
    var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

    // node and clockseq need to be initialized to random values if they're not
    // specified.  We do this lazily to minimize issues related to insufficient
    // system entropy.  See #189
    if (node == null || clockseq == null) {
      var seedBytes = rng();
      if (node == null) {
        // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
        node = _nodeId = [
          seedBytes[0] | 0x01,
          seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
        ];
      }
      if (clockseq == null) {
        // Per 4.2.2, randomize (14 bit) clockseq
        clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
      }
    }

    // UUID timestamps are 100 nano-second units since the Gregorian epoch,
    // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
    // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
    // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
    var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

    // Per 4.2.1.2, use count of uuid's generated during the current clock
    // cycle to simulate higher resolution clock
    var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

    // Time since last uuid creation (in msecs)
    var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

    // Per 4.2.1.2, Bump clockseq on clock regression
    if (dt < 0 && options.clockseq === undefined) {
      clockseq = clockseq + 1 & 0x3fff;
    }

    // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
    // time interval
    if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
      nsecs = 0;
    }

    // Per 4.2.1.2 Throw error if too many uuids are requested
    if (nsecs >= 10000) {
      throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
    }

    _lastMSecs = msecs;
    _lastNSecs = nsecs;
    _clockseq = clockseq;

    // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
    msecs += 12219292800000;

    // `time_low`
    var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
    b[i++] = tl >>> 24 & 0xff;
    b[i++] = tl >>> 16 & 0xff;
    b[i++] = tl >>> 8 & 0xff;
    b[i++] = tl & 0xff;

    // `time_mid`
    var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
    b[i++] = tmh >>> 8 & 0xff;
    b[i++] = tmh & 0xff;

    // `time_high_and_version`
    b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
    b[i++] = tmh >>> 16 & 0xff;

    // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
    b[i++] = clockseq >>> 8 | 0x80;

    // `clock_seq_low`
    b[i++] = clockseq & 0xff;

    // `node`
    for (var n = 0; n < 6; ++n) {
      b[i + n] = node[n];
    }

    return buf ? buf : bytesToUuid(b);
  }

  module.exports = v1;

  },{"7":7,"8":8}],10:[function(_dereq_,module,exports){
  var rng = _dereq_(8);
  var bytesToUuid = _dereq_(7);

  function v4(options, buf, offset) {
    var i = buf && offset || 0;

    if (typeof(options) == 'string') {
      buf = options === 'binary' ? new Array(16) : null;
      options = null;
    }
    options = options || {};

    var rnds = options.random || (options.rng || rng)();

    // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = (rnds[6] & 0x0f) | 0x40;
    rnds[8] = (rnds[8] & 0x3f) | 0x80;

    // Copy bytes to buffer, if provided
    if (buf) {
      for (var ii = 0; ii < 16; ++ii) {
        buf[i + ii] = rnds[ii];
      }
    }

    return buf || bytesToUuid(rnds);
  }

  module.exports = v4;

  },{"7":7,"8":8}],11:[function(_dereq_,module,exports){
  (function (global){
  'use strict';

  function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

  var immediate = _interopDefault(_dereq_(3));
  var events = _dereq_(2);
  var uuidV4 = _interopDefault(_dereq_(6));
  var Md5 = _interopDefault(_dereq_(5));
  var getArguments = _interopDefault(_dereq_(1));
  var inherits = _interopDefault(_dereq_(4));

  function isBinaryObject(object) {
    return (typeof ArrayBuffer !== 'undefined' && object instanceof ArrayBuffer) ||
      (typeof Blob !== 'undefined' && object instanceof Blob);
  }

  function cloneArrayBuffer(buff) {
    if (typeof buff.slice === 'function') {
      return buff.slice(0);
    }
    // IE10-11 slice() polyfill
    var target = new ArrayBuffer(buff.byteLength);
    var targetArray = new Uint8Array(target);
    var sourceArray = new Uint8Array(buff);
    targetArray.set(sourceArray);
    return target;
  }

  function cloneBinaryObject(object) {
    if (object instanceof ArrayBuffer) {
      return cloneArrayBuffer(object);
    }
    var size = object.size;
    var type = object.type;
    // Blob
    if (typeof object.slice === 'function') {
      return object.slice(0, size, type);
    }
    // PhantomJS slice() replacement
    return object.webkitSlice(0, size, type);
  }

  // most of this is borrowed from lodash.isPlainObject:
  // https://github.com/fis-components/lodash.isplainobject/
  // blob/29c358140a74f252aeb08c9eb28bef86f2217d4a/index.js

  var funcToString = Function.prototype.toString;
  var objectCtorString = funcToString.call(Object);

  function isPlainObject(value) {
    var proto = Object.getPrototypeOf(value);
    /* istanbul ignore if */
    if (proto === null) { // not sure when this happens, but I guess it can
      return true;
    }
    var Ctor = proto.constructor;
    return (typeof Ctor == 'function' &&
      Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
  }

  function clone(object) {
    var newObject;
    var i;
    var len;

    if (!object || typeof object !== 'object') {
      return object;
    }

    if (Array.isArray(object)) {
      newObject = [];
      for (i = 0, len = object.length; i < len; i++) {
        newObject[i] = clone(object[i]);
      }
      return newObject;
    }

    // special case: to avoid inconsistencies between IndexedDB
    // and other backends, we automatically stringify Dates
    if (object instanceof Date) {
      return object.toISOString();
    }

    if (isBinaryObject(object)) {
      return cloneBinaryObject(object);
    }

    if (!isPlainObject(object)) {
      return object; // don't clone objects like Workers
    }

    newObject = {};
    for (i in object) {
      /* istanbul ignore else */
      if (Object.prototype.hasOwnProperty.call(object, i)) {
        var value = clone(object[i]);
        if (typeof value !== 'undefined') {
          newObject[i] = value;
        }
      }
    }
    return newObject;
  }

  function once(fun) {
    var called = false;
    return getArguments(function (args) {
      /* istanbul ignore if */
      if (called) {
        // this is a smoke test and should never actually happen
        throw new Error('once called more than once');
      } else {
        called = true;
        fun.apply(this, args);
      }
    });
  }

  function toPromise(func) {
    //create the function we will be returning
    return getArguments(function (args) {
      // Clone arguments
      args = clone(args);
      var self = this;
      // if the last argument is a function, assume its a callback
      var usedCB = (typeof args[args.length - 1] === 'function') ? args.pop() : false;
      var promise = new Promise(function (fulfill, reject) {
        var resp;
        try {
          var callback = once(function (err, mesg) {
            if (err) {
              reject(err);
            } else {
              fulfill(mesg);
            }
          });
          // create a callback for this invocation
          // apply the function in the orig context
          args.push(callback);
          resp = func.apply(self, args);
          if (resp && typeof resp.then === 'function') {
            fulfill(resp);
          }
        } catch (e) {
          reject(e);
        }
      });
      // if there is a callback, call it back
      if (usedCB) {
        promise.then(function (result) {
          usedCB(null, result);
        }, usedCB);
      }
      return promise;
    });
  }

  function mangle(key) {
    return '$' + key;
  }
  function unmangle(key) {
    return key.substring(1);
  }
  function Map$1() {
    this._store = {};
  }
  Map$1.prototype.get = function (key) {
    var mangled = mangle(key);
    return this._store[mangled];
  };
  Map$1.prototype.set = function (key, value) {
    var mangled = mangle(key);
    this._store[mangled] = value;
    return true;
  };
  Map$1.prototype.has = function (key) {
    var mangled = mangle(key);
    return mangled in this._store;
  };
  Map$1.prototype["delete"] = function (key) {
    var mangled = mangle(key);
    var res = mangled in this._store;
    delete this._store[mangled];
    return res;
  };
  Map$1.prototype.forEach = function (cb) {
    var keys = Object.keys(this._store);
    for (var i = 0, len = keys.length; i < len; i++) {
      var key = keys[i];
      var value = this._store[key];
      key = unmangle(key);
      cb(value, key);
    }
  };
  Object.defineProperty(Map$1.prototype, 'size', {
    get: function () {
      return Object.keys(this._store).length;
    }
  });

  function Set$1(array) {
    this._store = new Map$1();

    // init with an array
    if (array && Array.isArray(array)) {
      for (var i = 0, len = array.length; i < len; i++) {
        this.add(array[i]);
      }
    }
  }
  Set$1.prototype.add = function (key) {
    return this._store.set(key, true);
  };
  Set$1.prototype.has = function (key) {
    return this._store.has(key);
  };
  Set$1.prototype.forEach = function (cb) {
    this._store.forEach(function (value, key) {
      cb(key);
    });
  };
  Object.defineProperty(Set$1.prototype, 'size', {
    get: function () {
      return this._store.size;
    }
  });

  /* global Map,Set,Symbol */
  // Based on https://kangax.github.io/compat-table/es6/ we can sniff out
  // incomplete Map/Set implementations which would otherwise cause our tests to fail.
  // Notably they fail in IE11 and iOS 8.4, which this prevents.
  function supportsMapAndSet() {
    if (typeof Symbol === 'undefined' || typeof Map === 'undefined' || typeof Set === 'undefined') {
      return false;
    }
    var prop = Object.getOwnPropertyDescriptor(Map, Symbol.species);
    return prop && 'get' in prop && Map[Symbol.species] === Map;
  }

  // based on https://github.com/montagejs/collections

  var ExportedSet;
  var ExportedMap;

  {
    if (supportsMapAndSet()) { // prefer built-in Map/Set
      ExportedSet = Set;
      ExportedMap = Map;
    } else { // fall back to our polyfill
      ExportedSet = Set$1;
      ExportedMap = Map$1;
    }
  }

  // like underscore/lodash _.pick()
  function pick(obj, arr) {
    var res = {};
    for (var i = 0, len = arr.length; i < len; i++) {
      var prop = arr[i];
      if (prop in obj) {
        res[prop] = obj[prop];
      }
    }
    return res;
  }

  var hasLocal;

  try {
    localStorage.setItem('_pouch_check_localstorage', 1);
    hasLocal = !!localStorage.getItem('_pouch_check_localstorage');
  } catch (e) {
    hasLocal = false;
  }

  function hasLocalStorage() {
    return hasLocal;
  }

  // Custom nextTick() shim for browsers. In node, this will just be process.nextTick(). We

  inherits(Changes, events.EventEmitter);

  /* istanbul ignore next */
  function attachBrowserEvents(self) {
    if (hasLocalStorage()) {
      addEventListener("storage", function (e) {
        self.emit(e.key);
      });
    }
  }

  function Changes() {
    events.EventEmitter.call(this);
    this._listeners = {};

    attachBrowserEvents(this);
  }
  Changes.prototype.addListener = function (dbName, id, db, opts) {
    /* istanbul ignore if */
    if (this._listeners[id]) {
      return;
    }
    var self = this;
    var inprogress = false;
    function eventFunction() {
      /* istanbul ignore if */
      if (!self._listeners[id]) {
        return;
      }
      if (inprogress) {
        inprogress = 'waiting';
        return;
      }
      inprogress = true;
      var changesOpts = pick(opts, [
        'style', 'include_docs', 'attachments', 'conflicts', 'filter',
        'doc_ids', 'view', 'since', 'query_params', 'binary', 'return_docs'
      ]);

      /* istanbul ignore next */
      function onError() {
        inprogress = false;
      }

      db.changes(changesOpts).on('change', function (c) {
        if (c.seq > opts.since && !opts.cancelled) {
          opts.since = c.seq;
          opts.onChange(c);
        }
      }).on('complete', function () {
        if (inprogress === 'waiting') {
          immediate(eventFunction);
        }
        inprogress = false;
      }).on('error', onError);
    }
    this._listeners[id] = eventFunction;
    this.on(dbName, eventFunction);
  };

  Changes.prototype.removeListener = function (dbName, id) {
    /* istanbul ignore if */
    if (!(id in this._listeners)) {
      return;
    }
    events.EventEmitter.prototype.removeListener.call(this, dbName,
      this._listeners[id]);
    delete this._listeners[id];
  };


  /* istanbul ignore next */
  Changes.prototype.notifyLocalWindows = function (dbName) {
    //do a useless change on a storage thing
    //in order to get other windows's listeners to activate
    if (hasLocalStorage()) {
      localStorage[dbName] = (localStorage[dbName] === "a") ? "b" : "a";
    }
  };

  Changes.prototype.notify = function (dbName) {
    this.emit(dbName);
    this.notifyLocalWindows(dbName);
  };

  function guardedConsole(method) {
    /* istanbul ignore else */
    if (typeof console !== 'undefined' && typeof console[method] === 'function') {
      var args = Array.prototype.slice.call(arguments, 1);
      console[method].apply(console, args);
    }
  }

  var assign;
  {
    if (typeof Object.assign === 'function') {
      assign = Object.assign;
    } else {
      // lite Object.assign polyfill based on
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
      assign = function (target) {
        var to = Object(target);

        for (var index = 1; index < arguments.length; index++) {
          var nextSource = arguments[index];

          if (nextSource != null) { // Skip over if undefined or null
            for (var nextKey in nextSource) {
              // Avoid bugs when hasOwnProperty is shadowed
              if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
        return to;
      };
    }
  }

  var $inject_Object_assign = assign;

  inherits(PouchError, Error);

  function PouchError(status, error, reason) {
    Error.call(this, reason);
    this.status = status;
    this.name = error;
    this.message = reason;
    this.error = true;
  }

  PouchError.prototype.toString = function () {
    return JSON.stringify({
      status: this.status,
      name: this.name,
      message: this.message,
      reason: this.reason
    });
  };

  var UNAUTHORIZED = new PouchError(401, 'unauthorized', "Name or password is incorrect.");
  var MISSING_BULK_DOCS = new PouchError(400, 'bad_request', "Missing JSON list of 'docs'");
  var MISSING_DOC = new PouchError(404, 'not_found', 'missing');
  var REV_CONFLICT = new PouchError(409, 'conflict', 'Document update conflict');
  var INVALID_ID = new PouchError(400, 'bad_request', '_id field must contain a string');
  var MISSING_ID = new PouchError(412, 'missing_id', '_id is required for puts');
  var RESERVED_ID = new PouchError(400, 'bad_request', 'Only reserved document ids may start with underscore.');
  var NOT_OPEN = new PouchError(412, 'precondition_failed', 'Database not open');
  var UNKNOWN_ERROR = new PouchError(500, 'unknown_error', 'Database encountered an unknown error');
  var BAD_ARG = new PouchError(500, 'badarg', 'Some query argument is invalid');
  var INVALID_REQUEST = new PouchError(400, 'invalid_request', 'Request was invalid');
  var QUERY_PARSE_ERROR = new PouchError(400, 'query_parse_error', 'Some query parameter is invalid');
  var DOC_VALIDATION = new PouchError(500, 'doc_validation', 'Bad special document member');
  var BAD_REQUEST = new PouchError(400, 'bad_request', 'Something wrong with the request');
  var NOT_AN_OBJECT = new PouchError(400, 'bad_request', 'Document must be a JSON object');
  var DB_MISSING = new PouchError(404, 'not_found', 'Database not found');
  var IDB_ERROR = new PouchError(500, 'indexed_db_went_bad', 'unknown');
  var WSQ_ERROR = new PouchError(500, 'web_sql_went_bad', 'unknown');
  var LDB_ERROR = new PouchError(500, 'levelDB_went_went_bad', 'unknown');
  var FORBIDDEN = new PouchError(403, 'forbidden', 'Forbidden by design doc validate_doc_update function');
  var INVALID_REV = new PouchError(400, 'bad_request', 'Invalid rev format');
  var FILE_EXISTS = new PouchError(412, 'file_exists', 'The database could not be created, the file already exists.');
  var MISSING_STUB = new PouchError(412, 'missing_stub', 'A pre-existing attachment stub wasn\'t found');
  var INVALID_URL = new PouchError(413, 'invalid_url', 'Provided URL is invalid');

  function generateErrorFromResponse(err) {

    if (typeof err !== 'object') {
      var data = err;
      err = UNKNOWN_ERROR;
      err.data = data;
    }

    if ('error' in err && err.error === 'conflict') {
      err.name = 'conflict';
      err.status = 409;
    }

    if (!('name' in err)) {
      err.name = err.error || 'unknown';
    }

    if (!('status' in err)) {
      err.status = 500;
    }

    if (!('message' in err)) {
      err.message = err.message || err.reason;
    }

    return err;
  }

  function flatten(arrs) {
    var res = [];
    for (var i = 0, len = arrs.length; i < len; i++) {
      res = res.concat(arrs[i]);
    }
    return res;
  }

  // shim for Function.prototype.name,

  // Checks if a PouchDB object is "remote" or not. This is

  function isRemote(db) {
    if (typeof db._remote === 'boolean') {
      return db._remote;
    }
    /* istanbul ignore next */
    if (typeof db.type === 'function') {
      guardedConsole('warn',
        'db.type() is deprecated and will be removed in ' +
        'a future version of PouchDB');
      return db.type() === 'http';
    }
    /* istanbul ignore next */
    return false;
  }

  // originally parseUri 1.2.2, now patched by us

  // Based on https://github.com/alexdavid/scope-eval v0.0.3

  // this is essentially the "update sugar" function from daleharvey/pouchdb#1388
  // the diffFun tells us what delta to apply to the doc.  it either returns
  // the doc, or false if it doesn't need to do an update after all
  function upsert(db, docId, diffFun) {
    return new Promise(function (fulfill, reject) {
      db.get(docId, function (err, doc) {
        if (err) {
          /* istanbul ignore next */
          if (err.status !== 404) {
            return reject(err);
          }
          doc = {};
        }

        // the user might change the _rev, so save it for posterity
        var docRev = doc._rev;
        var newDoc = diffFun(doc);

        if (!newDoc) {
          // if the diffFun returns falsy, we short-circuit as
          // an optimization
          return fulfill({updated: false, rev: docRev});
        }

        // users aren't allowed to modify these values,
        // so reset them here
        newDoc._id = docId;
        newDoc._rev = docRev;
        fulfill(tryAndPut(db, newDoc, diffFun));
      });
    });
  }

  function tryAndPut(db, doc, diffFun) {
    return db.put(doc).then(function (res) {
      return {
        updated: true,
        rev: res.rev
      };
    }, function (err) {
      /* istanbul ignore next */
      if (err.status !== 409) {
        throw err;
      }
      return upsert(db, doc._id, diffFun);
    });
  }

  var thisAtob = function (str) {
    return atob(str);
  };

  // Abstracts constructing a Blob object, so it also works in older
  // browsers that don't support the native Blob constructor (e.g.
  // old QtWebKit versions, Android < 4.4).
  function createBlob(parts, properties) {
    /* global BlobBuilder,MSBlobBuilder,MozBlobBuilder,WebKitBlobBuilder */
    parts = parts || [];
    properties = properties || {};
    try {
      return new Blob(parts, properties);
    } catch (e) {
      if (e.name !== "TypeError") {
        throw e;
      }
      var Builder = typeof BlobBuilder !== 'undefined' ? BlobBuilder :
                    typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder :
                    typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder :
                    WebKitBlobBuilder;
      var builder = new Builder();
      for (var i = 0; i < parts.length; i += 1) {
        builder.append(parts[i]);
      }
      return builder.getBlob(properties.type);
    }
  }

  // From http://stackoverflow.com/questions/14967647/ (continues on next line)
  // encode-decode-image-with-base64-breaks-image (2013-04-21)
  function binaryStringToArrayBuffer(bin) {
    var length = bin.length;
    var buf = new ArrayBuffer(length);
    var arr = new Uint8Array(buf);
    for (var i = 0; i < length; i++) {
      arr[i] = bin.charCodeAt(i);
    }
    return buf;
  }

  function binStringToBluffer(binString, type) {
    return createBlob([binaryStringToArrayBuffer(binString)], {type: type});
  }

  function b64ToBluffer(b64, type) {
    return binStringToBluffer(thisAtob(b64), type);
  }

  //Can't find original post, but this is close

  // simplified API. universal browser support is assumed

  // this is not used in the browser

  var setImmediateShim = global.setImmediate || global.setTimeout;

  function stringMd5(string) {
    return Md5.hash(string);
  }

  var uuid = uuidV4.v4;

  var h = Headers;

  // we restucture the supplied JSON considerably, because the official
  // Mango API is very particular about a lot of this stuff, but we like
  // to be liberal with what we accept in order to prevent mental
  // breakdowns in our users
  function massageCreateIndexRequest(requestDef) {
    requestDef = clone(requestDef);

    if (!requestDef.index) {
      requestDef.index = {};
    }

    ['type', 'name', 'ddoc'].forEach(function (key) {
      if (requestDef.index[key]) {
        requestDef[key] = requestDef.index[key];
        delete requestDef.index[key];
      }
    });

    if (requestDef.fields) {
      requestDef.index.fields = requestDef.fields;
      delete requestDef.fields;
    }

    if (!requestDef.type) {
      requestDef.type = 'json';
    }
    return requestDef;
  }

  function dbFetch(db, path, opts, callback) {
    var status, ok;
    opts.headers = new h({'Content-type': 'application/json'});
    db.fetch(path, opts).then(function (response) {
      status = response.status;
      ok = response.ok;
      return response.json();
    }).then(function (json) {
      if (!ok) {
        json.status = status;
        var err = generateErrorFromResponse(json);
        callback(err);
      } else {
        callback(null, json);
      }
    })["catch"](callback);
  }

  function createIndex(db, requestDef, callback) {
    requestDef = massageCreateIndexRequest(requestDef);
    dbFetch(db, '_index', {
      method: 'POST',
      body: JSON.stringify(requestDef)
    }, callback);
  }

  function find(db, requestDef, callback) {
    dbFetch(db, '_find', {
      method: 'POST',
      body: JSON.stringify(requestDef)
    }, callback);
  }

  function explain(db, requestDef, callback) {
    dbFetch(db, '_explain', {
      method: 'POST',
      body: JSON.stringify(requestDef)
    }, callback);
  }

  function getIndexes(db, callback) {
    dbFetch(db, '_index', {
      method: 'GET'
    }, callback);
  }

  function deleteIndex(db, indexDef, callback) {


    var ddoc = indexDef.ddoc;
    var type = indexDef.type || 'json';
    var name = indexDef.name;

    if (!ddoc) {
      return callback(new Error('you must provide an index\'s ddoc'));
    }

    if (!name) {
      return callback(new Error('you must provide an index\'s name'));
    }

    var url = '_index/' + [ddoc, type, name].map(encodeURIComponent).join('/');

    dbFetch(db, url, {method: 'DELETE'}, callback);
  }

  // this would just be "return doc[field]", but fields
  // can be "deep" due to dot notation
  function getFieldFromDoc(doc, parsedField) {
    var value = doc;
    for (var i = 0, len = parsedField.length; i < len; i++) {
      var key = parsedField[i];
      value = value[key];
      if (!value) {
        break;
      }
    }
    return value;
  }

  function setFieldInDoc(doc, parsedField, value) {
    for (var i = 0, len = parsedField.length; i < len-1; i++) {
      var elem = parsedField[i];
      doc = doc[elem] = {};
    }
    doc[parsedField[len-1]] = value;
  }

  function compare(left, right) {
    return left < right ? -1 : left > right ? 1 : 0;
  }

  // Converts a string in dot notation to an array of its components, with backslash escaping
  function parseField(fieldName) {
    // fields may be deep (e.g. "foo.bar.baz"), so parse
    var fields = [];
    var current = '';
    for (var i = 0, len = fieldName.length; i < len; i++) {
      var ch = fieldName[i];
      if (ch === '.') {
        if (i > 0 && fieldName[i - 1] === '\\') { // escaped delimiter
          current = current.substring(0, current.length - 1) + '.';
        } else { // not escaped, so delimiter
          fields.push(current);
          current = '';
        }
      } else { // normal character
        current += ch;
      }
    }
    fields.push(current);
    return fields;
  }

  var combinationFields = ['$or', '$nor', '$not'];
  function isCombinationalField(field) {
    return combinationFields.indexOf(field) > -1;
  }

  function getKey(obj) {
    return Object.keys(obj)[0];
  }

  function getValue(obj) {
    return obj[getKey(obj)];
  }


  // flatten an array of selectors joined by an $and operator
  function mergeAndedSelectors(selectors) {

    // sort to ensure that e.g. if the user specified
    // $and: [{$gt: 'a'}, {$gt: 'b'}], then it's collapsed into
    // just {$gt: 'b'}
    var res = {};

    selectors.forEach(function (selector) {
      Object.keys(selector).forEach(function (field) {
        var matcher = selector[field];
        if (typeof matcher !== 'object') {
          matcher = {$eq: matcher};
        }

        if (isCombinationalField(field)) {
          if (matcher instanceof Array) {
            res[field] = matcher.map(function (m) {
              return mergeAndedSelectors([m]);
            });
          } else {
            res[field] = mergeAndedSelectors([matcher]);
          }
        } else {
          var fieldMatchers = res[field] = res[field] || {};
          Object.keys(matcher).forEach(function (operator) {
            var value = matcher[operator];

            if (operator === '$gt' || operator === '$gte') {
              return mergeGtGte(operator, value, fieldMatchers);
            } else if (operator === '$lt' || operator === '$lte') {
              return mergeLtLte(operator, value, fieldMatchers);
            } else if (operator === '$ne') {
              return mergeNe(value, fieldMatchers);
            } else if (operator === '$eq') {
              return mergeEq(value, fieldMatchers);
            }
            fieldMatchers[operator] = value;
          });
        }
      });
    });

    return res;
  }



  // collapse logically equivalent gt/gte values
  function mergeGtGte(operator, value, fieldMatchers) {
    if (typeof fieldMatchers.$eq !== 'undefined') {
      return; // do nothing
    }
    if (typeof fieldMatchers.$gte !== 'undefined') {
      if (operator === '$gte') {
        if (value > fieldMatchers.$gte) { // more specificity
          fieldMatchers.$gte = value;
        }
      } else { // operator === '$gt'
        if (value >= fieldMatchers.$gte) { // more specificity
          delete fieldMatchers.$gte;
          fieldMatchers.$gt = value;
        }
      }
    } else if (typeof fieldMatchers.$gt !== 'undefined') {
      if (operator === '$gte') {
        if (value > fieldMatchers.$gt) { // more specificity
          delete fieldMatchers.$gt;
          fieldMatchers.$gte = value;
        }
      } else { // operator === '$gt'
        if (value > fieldMatchers.$gt) { // more specificity
          fieldMatchers.$gt = value;
        }
      }
    } else {
      fieldMatchers[operator] = value;
    }
  }

  // collapse logically equivalent lt/lte values
  function mergeLtLte(operator, value, fieldMatchers) {
    if (typeof fieldMatchers.$eq !== 'undefined') {
      return; // do nothing
    }
    if (typeof fieldMatchers.$lte !== 'undefined') {
      if (operator === '$lte') {
        if (value < fieldMatchers.$lte) { // more specificity
          fieldMatchers.$lte = value;
        }
      } else { // operator === '$gt'
        if (value <= fieldMatchers.$lte) { // more specificity
          delete fieldMatchers.$lte;
          fieldMatchers.$lt = value;
        }
      }
    } else if (typeof fieldMatchers.$lt !== 'undefined') {
      if (operator === '$lte') {
        if (value < fieldMatchers.$lt) { // more specificity
          delete fieldMatchers.$lt;
          fieldMatchers.$lte = value;
        }
      } else { // operator === '$gt'
        if (value < fieldMatchers.$lt) { // more specificity
          fieldMatchers.$lt = value;
        }
      }
    } else {
      fieldMatchers[operator] = value;
    }
  }

  // combine $ne values into one array
  function mergeNe(value, fieldMatchers) {
    if ('$ne' in fieldMatchers) {
      // there are many things this could "not" be
      fieldMatchers.$ne.push(value);
    } else { // doesn't exist yet
      fieldMatchers.$ne = [value];
    }
  }

  // add $eq into the mix
  function mergeEq(value, fieldMatchers) {
    // these all have less specificity than the $eq
    // TODO: check for user errors here
    delete fieldMatchers.$gt;
    delete fieldMatchers.$gte;
    delete fieldMatchers.$lt;
    delete fieldMatchers.$lte;
    delete fieldMatchers.$ne;
    fieldMatchers.$eq = value;
  }

  //#7458: execute function mergeAndedSelectors on nested $and
  function mergeAndedSelectorsNested(obj) {
      for (var prop in obj) {
          if (Array.isArray(obj)) {
              for (var i in obj) {
                  if (obj[i]['$and']) {
                      obj[i] = mergeAndedSelectors(obj[i]['$and']);
                  }
              }
          }
          var value = obj[prop];
          if (typeof value === 'object') {
              mergeAndedSelectorsNested(value); // <- recursive call
          }
      }
      return obj;
  }

  //#7458: determine id $and is present in selector (at any level)
  function isAndInSelector(obj, isAnd) {
      for (var prop in obj) {
          if (prop === '$and') {
              isAnd = true;
          }
          var value = obj[prop];
          if (typeof value === 'object') {
              isAnd = isAndInSelector(value, isAnd); // <- recursive call
          }
      }
      return isAnd;
  }

  //
  // normalize the selector
  //
  function massageSelector(input) {
    var result = clone(input);
    var wasAnded = false;
      //#7458: if $and is present in selector (at any level) merge nested $and
      if (isAndInSelector(result, false)) {
          result = mergeAndedSelectorsNested(result);
          if ('$and' in result) {
              result = mergeAndedSelectors(result['$and']);
          }
          wasAnded = true;
      }

    ['$or', '$nor'].forEach(function (orOrNor) {
      if (orOrNor in result) {
        // message each individual selector
        // e.g. {foo: 'bar'} becomes {foo: {$eq: 'bar'}}
        result[orOrNor].forEach(function (subSelector) {
          var fields = Object.keys(subSelector);
          for (var i = 0; i < fields.length; i++) {
            var field = fields[i];
            var matcher = subSelector[field];
            if (typeof matcher !== 'object' || matcher === null) {
              subSelector[field] = {$eq: matcher};
            }
          }
        });
      }
    });

    if ('$not' in result) {
      //This feels a little like forcing, but it will work for now,
      //I would like to come back to this and make the merging of selectors a little more generic
      result['$not'] = mergeAndedSelectors([result['$not']]);
    }

    var fields = Object.keys(result);

    for (var i = 0; i < fields.length; i++) {
      var field = fields[i];
      var matcher = result[field];

      if (typeof matcher !== 'object' || matcher === null) {
        matcher = {$eq: matcher};
      } else if ('$ne' in matcher && !wasAnded) {
        // I put these in an array, since there may be more than one
        // but in the "mergeAnded" operation, I already take care of that
        matcher.$ne = [matcher.$ne];
      }
      result[field] = matcher;
    }

    return result;
  }

  function pad(str, padWith, upToLength) {
    var padding = '';
    var targetLength = upToLength - str.length;
    /* istanbul ignore next */
    while (padding.length < targetLength) {
      padding += padWith;
    }
    return padding;
  }

  function padLeft(str, padWith, upToLength) {
    var padding = pad(str, padWith, upToLength);
    return padding + str;
  }

  var MIN_MAGNITUDE = -324; // verified by -Number.MIN_VALUE
  var MAGNITUDE_DIGITS = 3; // ditto
  var SEP = ''; // set to '_' for easier debugging

  function collate(a, b) {

    if (a === b) {
      return 0;
    }

    a = normalizeKey(a);
    b = normalizeKey(b);

    var ai = collationIndex(a);
    var bi = collationIndex(b);
    if ((ai - bi) !== 0) {
      return ai - bi;
    }
    switch (typeof a) {
      case 'number':
        return a - b;
      case 'boolean':
        return a < b ? -1 : 1;
      case 'string':
        return stringCollate(a, b);
    }
    return Array.isArray(a) ? arrayCollate(a, b) : objectCollate(a, b);
  }

  // couch considers null/NaN/Infinity/-Infinity === undefined,
  // for the purposes of mapreduce indexes. also, dates get stringified.
  function normalizeKey(key) {
    switch (typeof key) {
      case 'undefined':
        return null;
      case 'number':
        if (key === Infinity || key === -Infinity || isNaN(key)) {
          return null;
        }
        return key;
      case 'object':
        var origKey = key;
        if (Array.isArray(key)) {
          var len = key.length;
          key = new Array(len);
          for (var i = 0; i < len; i++) {
            key[i] = normalizeKey(origKey[i]);
          }
        /* istanbul ignore next */
        } else if (key instanceof Date) {
          return key.toJSON();
        } else if (key !== null) { // generic object
          key = {};
          for (var k in origKey) {
            if (origKey.hasOwnProperty(k)) {
              var val = origKey[k];
              if (typeof val !== 'undefined') {
                key[k] = normalizeKey(val);
              }
            }
          }
        }
    }
    return key;
  }

  function indexify(key) {
    if (key !== null) {
      switch (typeof key) {
        case 'boolean':
          return key ? 1 : 0;
        case 'number':
          return numToIndexableString(key);
        case 'string':
          // We've to be sure that key does not contain \u0000
          // Do order-preserving replacements:
          // 0 -> 1, 1
          // 1 -> 1, 2
          // 2 -> 2, 2
          /* eslint-disable no-control-regex */
          return key
            .replace(/\u0002/g, '\u0002\u0002')
            .replace(/\u0001/g, '\u0001\u0002')
            .replace(/\u0000/g, '\u0001\u0001');
          /* eslint-enable no-control-regex */
        case 'object':
          var isArray = Array.isArray(key);
          var arr = isArray ? key : Object.keys(key);
          var i = -1;
          var len = arr.length;
          var result = '';
          if (isArray) {
            while (++i < len) {
              result += toIndexableString(arr[i]);
            }
          } else {
            while (++i < len) {
              var objKey = arr[i];
              result += toIndexableString(objKey) +
                  toIndexableString(key[objKey]);
            }
          }
          return result;
      }
    }
    return '';
  }

  // convert the given key to a string that would be appropriate
  // for lexical sorting, e.g. within a database, where the
  // sorting is the same given by the collate() function.
  function toIndexableString(key) {
    var zero = '\u0000';
    key = normalizeKey(key);
    return collationIndex(key) + SEP + indexify(key) + zero;
  }

  function parseNumber(str, i) {
    var originalIdx = i;
    var num;
    var zero = str[i] === '1';
    if (zero) {
      num = 0;
      i++;
    } else {
      var neg = str[i] === '0';
      i++;
      var numAsString = '';
      var magAsString = str.substring(i, i + MAGNITUDE_DIGITS);
      var magnitude = parseInt(magAsString, 10) + MIN_MAGNITUDE;
      /* istanbul ignore next */
      if (neg) {
        magnitude = -magnitude;
      }
      i += MAGNITUDE_DIGITS;
      while (true) {
        var ch = str[i];
        if (ch === '\u0000') {
          break;
        } else {
          numAsString += ch;
        }
        i++;
      }
      numAsString = numAsString.split('.');
      if (numAsString.length === 1) {
        num = parseInt(numAsString, 10);
      } else {
        /* istanbul ignore next */
        num = parseFloat(numAsString[0] + '.' + numAsString[1]);
      }
      /* istanbul ignore next */
      if (neg) {
        num = num - 10;
      }
      /* istanbul ignore next */
      if (magnitude !== 0) {
        // parseFloat is more reliable than pow due to rounding errors
        // e.g. Number.MAX_VALUE would return Infinity if we did
        // num * Math.pow(10, magnitude);
        num = parseFloat(num + 'e' + magnitude);
      }
    }
    return {num: num, length : i - originalIdx};
  }

  // move up the stack while parsing
  // this function moved outside of parseIndexableString for performance
  function pop(stack, metaStack) {
    var obj = stack.pop();

    if (metaStack.length) {
      var lastMetaElement = metaStack[metaStack.length - 1];
      if (obj === lastMetaElement.element) {
        // popping a meta-element, e.g. an object whose value is another object
        metaStack.pop();
        lastMetaElement = metaStack[metaStack.length - 1];
      }
      var element = lastMetaElement.element;
      var lastElementIndex = lastMetaElement.index;
      if (Array.isArray(element)) {
        element.push(obj);
      } else if (lastElementIndex === stack.length - 2) { // obj with key+value
        var key = stack.pop();
        element[key] = obj;
      } else {
        stack.push(obj); // obj with key only
      }
    }
  }

  function parseIndexableString(str) {
    var stack = [];
    var metaStack = []; // stack for arrays and objects
    var i = 0;

    /*eslint no-constant-condition: ["error", { "checkLoops": false }]*/
    while (true) {
      var collationIndex = str[i++];
      if (collationIndex === '\u0000') {
        if (stack.length === 1) {
          return stack.pop();
        } else {
          pop(stack, metaStack);
          continue;
        }
      }
      switch (collationIndex) {
        case '1':
          stack.push(null);
          break;
        case '2':
          stack.push(str[i] === '1');
          i++;
          break;
        case '3':
          var parsedNum = parseNumber(str, i);
          stack.push(parsedNum.num);
          i += parsedNum.length;
          break;
        case '4':
          var parsedStr = '';
          /*eslint no-constant-condition: ["error", { "checkLoops": false }]*/
          while (true) {
            var ch = str[i];
            if (ch === '\u0000') {
              break;
            }
            parsedStr += ch;
            i++;
          }
          // perform the reverse of the order-preserving replacement
          // algorithm (see above)
          /* eslint-disable no-control-regex */
          parsedStr = parsedStr.replace(/\u0001\u0001/g, '\u0000')
            .replace(/\u0001\u0002/g, '\u0001')
            .replace(/\u0002\u0002/g, '\u0002');
          /* eslint-enable no-control-regex */
          stack.push(parsedStr);
          break;
        case '5':
          var arrayElement = { element: [], index: stack.length };
          stack.push(arrayElement.element);
          metaStack.push(arrayElement);
          break;
        case '6':
          var objElement = { element: {}, index: stack.length };
          stack.push(objElement.element);
          metaStack.push(objElement);
          break;
        /* istanbul ignore next */
        default:
          throw new Error(
            'bad collationIndex or unexpectedly reached end of input: ' +
              collationIndex);
      }
    }
  }

  function arrayCollate(a, b) {
    var len = Math.min(a.length, b.length);
    for (var i = 0; i < len; i++) {
      var sort = collate(a[i], b[i]);
      if (sort !== 0) {
        return sort;
      }
    }
    return (a.length === b.length) ? 0 :
      (a.length > b.length) ? 1 : -1;
  }
  function stringCollate(a, b) {
    // See: https://github.com/daleharvey/pouchdb/issues/40
    // This is incompatible with the CouchDB implementation, but its the
    // best we can do for now
    return (a === b) ? 0 : ((a > b) ? 1 : -1);
  }
  function objectCollate(a, b) {
    var ak = Object.keys(a), bk = Object.keys(b);
    var len = Math.min(ak.length, bk.length);
    for (var i = 0; i < len; i++) {
      // First sort the keys
      var sort = collate(ak[i], bk[i]);
      if (sort !== 0) {
        return sort;
      }
      // if the keys are equal sort the values
      sort = collate(a[ak[i]], b[bk[i]]);
      if (sort !== 0) {
        return sort;
      }

    }
    return (ak.length === bk.length) ? 0 :
      (ak.length > bk.length) ? 1 : -1;
  }
  // The collation is defined by erlangs ordered terms
  // the atoms null, true, false come first, then numbers, strings,
  // arrays, then objects
  // null/undefined/NaN/Infinity/-Infinity are all considered null
  function collationIndex(x) {
    var id = ['boolean', 'number', 'string', 'object'];
    var idx = id.indexOf(typeof x);
    //false if -1 otherwise true, but fast!!!!1
    if (~idx) {
      if (x === null) {
        return 1;
      }
      if (Array.isArray(x)) {
        return 5;
      }
      return idx < 3 ? (idx + 2) : (idx + 3);
    }
    /* istanbul ignore next */
    if (Array.isArray(x)) {
      return 5;
    }
  }

  // conversion:
  // x yyy zz...zz
  // x = 0 for negative, 1 for 0, 2 for positive
  // y = exponent (for negative numbers negated) moved so that it's >= 0
  // z = mantisse
  function numToIndexableString(num) {

    if (num === 0) {
      return '1';
    }

    // convert number to exponential format for easier and
    // more succinct string sorting
    var expFormat = num.toExponential().split(/e\+?/);
    var magnitude = parseInt(expFormat[1], 10);

    var neg = num < 0;

    var result = neg ? '0' : '2';

    // first sort by magnitude
    // it's easier if all magnitudes are positive
    var magForComparison = ((neg ? -magnitude : magnitude) - MIN_MAGNITUDE);
    var magString = padLeft((magForComparison).toString(), '0', MAGNITUDE_DIGITS);

    result += SEP + magString;

    // then sort by the factor
    var factor = Math.abs(parseFloat(expFormat[0])); // [1..10)
    /* istanbul ignore next */
    if (neg) { // for negative reverse ordering
      factor = 10 - factor;
    }

    var factorStr = factor.toFixed(20);

    // strip zeros from the end
    factorStr = factorStr.replace(/\.?0+$/, '');

    result += SEP + factorStr;

    return result;
  }

  // create a comparator based on the sort object
  function createFieldSorter(sort) {

    function getFieldValuesAsArray(doc) {
      return sort.map(function (sorting) {
        var fieldName = getKey(sorting);
        var parsedField = parseField(fieldName);
        var docFieldValue = getFieldFromDoc(doc, parsedField);
        return docFieldValue;
      });
    }

    return function (aRow, bRow) {
      var aFieldValues = getFieldValuesAsArray(aRow.doc);
      var bFieldValues = getFieldValuesAsArray(bRow.doc);
      var collation = collate(aFieldValues, bFieldValues);
      if (collation !== 0) {
        return collation;
      }
      // this is what mango seems to do
      return compare(aRow.doc._id, bRow.doc._id);
    };
  }

  function filterInMemoryFields(rows, requestDef, inMemoryFields) {
    rows = rows.filter(function (row) {
      return rowFilter(row.doc, requestDef.selector, inMemoryFields);
    });

    if (requestDef.sort) {
      // in-memory sort
      var fieldSorter = createFieldSorter(requestDef.sort);
      rows = rows.sort(fieldSorter);
      if (typeof requestDef.sort[0] !== 'string' &&
          getValue(requestDef.sort[0]) === 'desc') {
        rows = rows.reverse();
      }
    }

    if ('limit' in requestDef || 'skip' in requestDef) {
      // have to do the limit in-memory
      var skip = requestDef.skip || 0;
      var limit = ('limit' in requestDef ? requestDef.limit : rows.length) + skip;
      rows = rows.slice(skip, limit);
    }
    return rows;
  }

  function rowFilter(doc, selector, inMemoryFields) {
    return inMemoryFields.every(function (field) {
      var matcher = selector[field];
      var parsedField = parseField(field);
      var docFieldValue = getFieldFromDoc(doc, parsedField);
      if (isCombinationalField(field)) {
        return matchCominationalSelector(field, matcher, doc);
      }

      return matchSelector(matcher, doc, parsedField, docFieldValue);
    });
  }

  function matchSelector(matcher, doc, parsedField, docFieldValue) {
    if (!matcher) {
      // no filtering necessary; this field is just needed for sorting
      return true;
    }

    // is matcher an object, if so continue recursion
    if (typeof matcher === 'object') {
      return Object.keys(matcher).every(function (userOperator) {
        var userValue = matcher[userOperator];
        return match(userOperator, doc, userValue, parsedField, docFieldValue);
      });
    }

    // no more depth, No need to recurse further
    return matcher === docFieldValue;
  }

  function matchCominationalSelector(field, matcher, doc) {

    if (field === '$or') {
      return matcher.some(function (orMatchers) {
        return rowFilter(doc, orMatchers, Object.keys(orMatchers));
      });
    }

    if (field === '$not') {
      return !rowFilter(doc, matcher, Object.keys(matcher));
    }

    //`$nor`
    return !matcher.find(function (orMatchers) {
      return rowFilter(doc, orMatchers, Object.keys(orMatchers));
    });

  }

  function match(userOperator, doc, userValue, parsedField, docFieldValue) {
    if (!matchers[userOperator]) {
      throw new Error('unknown operator "' + userOperator +
        '" - should be one of $eq, $lte, $lt, $gt, $gte, $exists, $ne, $in, ' +
        '$nin, $size, $mod, $regex, $elemMatch, $type, $allMatch or $all');
    }
    return matchers[userOperator](doc, userValue, parsedField, docFieldValue);
  }

  function fieldExists(docFieldValue) {
    return typeof docFieldValue !== 'undefined' && docFieldValue !== null;
  }

  function fieldIsNotUndefined(docFieldValue) {
    return typeof docFieldValue !== 'undefined';
  }

  function modField(docFieldValue, userValue) {
    var divisor = userValue[0];
    var mod = userValue[1];
    if (divisor === 0) {
      throw new Error('Bad divisor, cannot divide by zero');
    }

    if (parseInt(divisor, 10) !== divisor ) {
      throw new Error('Divisor is not an integer');
    }

    if (parseInt(mod, 10) !== mod ) {
      throw new Error('Modulus is not an integer');
    }

    if (parseInt(docFieldValue, 10) !== docFieldValue) {
      return false;
    }

    return docFieldValue % divisor === mod;
  }

  function arrayContainsValue(docFieldValue, userValue) {
    return userValue.some(function (val) {
      if (docFieldValue instanceof Array) {
        return docFieldValue.indexOf(val) > -1;
      }

      return docFieldValue === val;
    });
  }

  function arrayContainsAllValues(docFieldValue, userValue) {
    return userValue.every(function (val) {
      return docFieldValue.indexOf(val) > -1;
    });
  }

  function arraySize(docFieldValue, userValue) {
    return docFieldValue.length === userValue;
  }

  function regexMatch(docFieldValue, userValue) {
    var re = new RegExp(userValue);

    return re.test(docFieldValue);
  }

  function typeMatch(docFieldValue, userValue) {

    switch (userValue) {
      case 'null':
        return docFieldValue === null;
      case 'boolean':
        return typeof (docFieldValue) === 'boolean';
      case 'number':
        return typeof (docFieldValue) === 'number';
      case 'string':
        return typeof (docFieldValue) === 'string';
      case 'array':
        return docFieldValue instanceof Array;
      case 'object':
        return ({}).toString.call(docFieldValue) === '[object Object]';
    }

    throw new Error(userValue + ' not supported as a type.' +
                    'Please use one of object, string, array, number, boolean or null.');

  }

  var matchers = {

    '$elemMatch': function (doc, userValue, parsedField, docFieldValue) {
      if (!Array.isArray(docFieldValue)) {
        return false;
      }

      if (docFieldValue.length === 0) {
        return false;
      }

      if (typeof docFieldValue[0] === 'object') {
        return docFieldValue.some(function (val) {
          return rowFilter(val, userValue, Object.keys(userValue));
        });
      }

      return docFieldValue.some(function (val) {
        return matchSelector(userValue, doc, parsedField, val);
      });
    },

    '$allMatch': function (doc, userValue, parsedField, docFieldValue) {
      if (!Array.isArray(docFieldValue)) {
        return false;
      }

      /* istanbul ignore next */
      if (docFieldValue.length === 0) {
        return false;
      }

      if (typeof docFieldValue[0] === 'object') {
        return docFieldValue.every(function (val) {
          return rowFilter(val, userValue, Object.keys(userValue));
        });
      }

      return docFieldValue.every(function (val) {
        return matchSelector(userValue, doc, parsedField, val);
      });
    },

    '$eq': function (doc, userValue, parsedField, docFieldValue) {
      return fieldIsNotUndefined(docFieldValue) && collate(docFieldValue, userValue) === 0;
    },

    '$gte': function (doc, userValue, parsedField, docFieldValue) {
      return fieldIsNotUndefined(docFieldValue) && collate(docFieldValue, userValue) >= 0;
    },

    '$gt': function (doc, userValue, parsedField, docFieldValue) {
      return fieldIsNotUndefined(docFieldValue) && collate(docFieldValue, userValue) > 0;
    },

    '$lte': function (doc, userValue, parsedField, docFieldValue) {
      return fieldIsNotUndefined(docFieldValue) && collate(docFieldValue, userValue) <= 0;
    },

    '$lt': function (doc, userValue, parsedField, docFieldValue) {
      return fieldIsNotUndefined(docFieldValue) && collate(docFieldValue, userValue) < 0;
    },

    '$exists': function (doc, userValue, parsedField, docFieldValue) {
      //a field that is null is still considered to exist
      if (userValue) {
        return fieldIsNotUndefined(docFieldValue);
      }

      return !fieldIsNotUndefined(docFieldValue);
    },

    '$mod': function (doc, userValue, parsedField, docFieldValue) {
      return fieldExists(docFieldValue) && modField(docFieldValue, userValue);
    },

    '$ne': function (doc, userValue, parsedField, docFieldValue) {
      return userValue.every(function (neValue) {
        return collate(docFieldValue, neValue) !== 0;
      });
    },
    '$in': function (doc, userValue, parsedField, docFieldValue) {
      return fieldExists(docFieldValue) && arrayContainsValue(docFieldValue, userValue);
    },

    '$nin': function (doc, userValue, parsedField, docFieldValue) {
      return fieldExists(docFieldValue) && !arrayContainsValue(docFieldValue, userValue);
    },

    '$size': function (doc, userValue, parsedField, docFieldValue) {
      return fieldExists(docFieldValue) && arraySize(docFieldValue, userValue);
    },

    '$all': function (doc, userValue, parsedField, docFieldValue) {
      return Array.isArray(docFieldValue) && arrayContainsAllValues(docFieldValue, userValue);
    },

    '$regex': function (doc, userValue, parsedField, docFieldValue) {
      return fieldExists(docFieldValue) && regexMatch(docFieldValue, userValue);
    },

    '$type': function (doc, userValue, parsedField, docFieldValue) {
      return typeMatch(docFieldValue, userValue);
    }
  };

  function getArguments$1(fun) {
    return function () {
      var len = arguments.length;
      var args = new Array(len);
      var i = -1;
      while (++i < len) {
        args[i] = arguments[i];
      }
      return fun.call(this, args);
    };
  }

  function callbackify(fun) {
    return getArguments$1(function (args) {
      var cb = args.pop();
      var promise = fun.apply(this, args);
      promisedCallback(promise, cb);
      return promise;
    });
  }

  function promisedCallback(promise, callback) {
    promise.then(function (res) {
      immediate(function () {
        callback(null, res);
      });
    }, function (reason) {
      immediate(function () {
        callback(reason);
      });
    });
    return promise;
  }

  var flatten$1 = getArguments$1(function (args) {
    var res = [];
    for (var i = 0, len = args.length; i < len; i++) {
      var subArr = args[i];
      if (Array.isArray(subArr)) {
        res = res.concat(flatten$1.apply(null, subArr));
      } else {
        res.push(subArr);
      }
    }
    return res;
  });

  function mergeObjects(arr) {
    var res = {};
    for (var i = 0, len = arr.length; i < len; i++) {
      res = $inject_Object_assign(res, arr[i]);
    }
    return res;
  }

  // Selects a list of fields defined in dot notation from one doc
  // and copies them to a new doc. Like underscore _.pick but supports nesting.
  function pick$1(obj, arr) {
    var res = {};
    for (var i = 0, len = arr.length; i < len; i++) {
      var parsedField = parseField(arr[i]);
      var value = getFieldFromDoc(obj, parsedField);
      if (typeof value !== 'undefined') {
        setFieldInDoc(res, parsedField, value);
      }
    }
    return res;
  }

  // e.g. ['a'], ['a', 'b'] is true, but ['b'], ['a', 'b'] is false
  function oneArrayIsSubArrayOfOther(left, right) {

    for (var i = 0, len = Math.min(left.length, right.length); i < len; i++) {
      if (left[i] !== right[i]) {
        return false;
      }
    }
    return true;
  }

  // e.g.['a', 'b', 'c'], ['a', 'b'] is false
  function oneArrayIsStrictSubArrayOfOther(left, right) {

    if (left.length > right.length) {
      return false;
    }

    return oneArrayIsSubArrayOfOther(left, right);
  }

  // same as above, but treat the left array as an unordered set
  // e.g. ['b', 'a'], ['a', 'b', 'c'] is true, but ['c'], ['a', 'b', 'c'] is false
  function oneSetIsSubArrayOfOther(left, right) {
    left = left.slice();
    for (var i = 0, len = right.length; i < len; i++) {
      var field = right[i];
      if (!left.length) {
        break;
      }
      var leftIdx = left.indexOf(field);
      if (leftIdx === -1) {
        return false;
      } else {
        left.splice(leftIdx, 1);
      }
    }
    return true;
  }

  function arrayToObject(arr) {
    var res = {};
    for (var i = 0, len = arr.length; i < len; i++) {
      res[arr[i]] = true;
    }
    return res;
  }

  function max(arr, fun) {
    var max = null;
    var maxScore = -1;
    for (var i = 0, len = arr.length; i < len; i++) {
      var element = arr[i];
      var score = fun(element);
      if (score > maxScore) {
        maxScore = score;
        max = element;
      }
    }
    return max;
  }

  function arrayEquals(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (var i = 0, len = arr1.length; i < len; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }

  function uniq(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
      obj['$' + arr[i]] = true;
    }
    return Object.keys(obj).map(function (key) {
      return key.substring(1);
    });
  }

  /*
   * Simple task queue to sequentialize actions. Assumes
   * callbacks will eventually fire (once).
   */


  function TaskQueue() {
    this.promise = new Promise(function (fulfill) {fulfill(); });
  }
  TaskQueue.prototype.add = function (promiseFactory) {
    this.promise = this.promise["catch"](function () {
      // just recover
    }).then(function () {
      return promiseFactory();
    });
    return this.promise;
  };
  TaskQueue.prototype.finish = function () {
    return this.promise;
  };

  function stringify(input) {
    if (!input) {
      return 'undefined'; // backwards compat for empty reduce
    }
    // for backwards compat with mapreduce, functions/strings are stringified
    // as-is. everything else is JSON-stringified.
    switch (typeof input) {
      case 'function':
        // e.g. a mapreduce map
        return input.toString();
      case 'string':
        // e.g. a mapreduce built-in _reduce function
        return input.toString();
      default:
        // e.g. a JSON object in the case of mango queries
        return JSON.stringify(input);
    }
  }

  /* create a string signature for a view so we can cache it and uniq it */
  function createViewSignature(mapFun, reduceFun) {
    // the "undefined" part is for backwards compatibility
    return stringify(mapFun) + stringify(reduceFun) + 'undefined';
  }

  function createView(sourceDB, viewName, mapFun, reduceFun, temporary, localDocName) {
    var viewSignature = createViewSignature(mapFun, reduceFun);

    var cachedViews;
    if (!temporary) {
      // cache this to ensure we don't try to update the same view twice
      cachedViews = sourceDB._cachedViews = sourceDB._cachedViews || {};
      if (cachedViews[viewSignature]) {
        return cachedViews[viewSignature];
      }
    }

    var promiseForView = sourceDB.info().then(function (info) {

      var depDbName = info.db_name + '-mrview-' +
        (temporary ? 'temp' : stringMd5(viewSignature));

      // save the view name in the source db so it can be cleaned up if necessary
      // (e.g. when the _design doc is deleted, remove all associated view data)
      function diffFunction(doc) {
        doc.views = doc.views || {};
        var fullViewName = viewName;
        if (fullViewName.indexOf('/') === -1) {
          fullViewName = viewName + '/' + viewName;
        }
        var depDbs = doc.views[fullViewName] = doc.views[fullViewName] || {};
        /* istanbul ignore if */
        if (depDbs[depDbName]) {
          return; // no update necessary
        }
        depDbs[depDbName] = true;
        return doc;
      }
      return upsert(sourceDB, '_local/' + localDocName, diffFunction).then(function () {
        return sourceDB.registerDependentDatabase(depDbName).then(function (res) {
          var db = res.db;
          db.auto_compaction = true;
          var view = {
            name: depDbName,
            db: db,
            sourceDB: sourceDB,
            adapter: sourceDB.adapter,
            mapFun: mapFun,
            reduceFun: reduceFun
          };
          return view.db.get('_local/lastSeq')["catch"](function (err) {
            /* istanbul ignore if */
            if (err.status !== 404) {
              throw err;
            }
          }).then(function (lastSeqDoc) {
            view.seq = lastSeqDoc ? lastSeqDoc.seq : 0;
            if (cachedViews) {
              view.db.once('destroyed', function () {
                delete cachedViews[viewSignature];
              });
            }
            return view;
          });
        });
      });
    });

    if (cachedViews) {
      cachedViews[viewSignature] = promiseForView;
    }
    return promiseForView;
  }

  function QueryParseError(message) {
    this.status = 400;
    this.name = 'query_parse_error';
    this.message = message;
    this.error = true;
    try {
      Error.captureStackTrace(this, QueryParseError);
    } catch (e) {}
  }

  inherits(QueryParseError, Error);

  function NotFoundError(message) {
    this.status = 404;
    this.name = 'not_found';
    this.message = message;
    this.error = true;
    try {
      Error.captureStackTrace(this, NotFoundError);
    } catch (e) {}
  }

  inherits(NotFoundError, Error);

  function BuiltInError(message) {
    this.status = 500;
    this.name = 'invalid_value';
    this.message = message;
    this.error = true;
    try {
      Error.captureStackTrace(this, BuiltInError);
    } catch (e) {}
  }

  inherits(BuiltInError, Error);

  function promisedCallback$1(promise, callback) {
    if (callback) {
      promise.then(function (res) {
        immediate(function () {
          callback(null, res);
        });
      }, function (reason) {
        immediate(function () {
          callback(reason);
        });
      });
    }
    return promise;
  }

  function callbackify$1(fun) {
    return getArguments(function (args) {
      var cb = args.pop();
      var promise = fun.apply(this, args);
      if (typeof cb === 'function') {
        promisedCallback$1(promise, cb);
      }
      return promise;
    });
  }

  // Promise finally util similar to Q.finally
  function fin(promise, finalPromiseFactory) {
    return promise.then(function (res) {
      return finalPromiseFactory().then(function () {
        return res;
      });
    }, function (reason) {
      return finalPromiseFactory().then(function () {
        throw reason;
      });
    });
  }

  function sequentialize(queue, promiseFactory) {
    return function () {
      var args = arguments;
      var that = this;
      return queue.add(function () {
        return promiseFactory.apply(that, args);
      });
    };
  }

  // uniq an array of strings, order not guaranteed
  // similar to underscore/lodash _.uniq
  function uniq$1(arr) {
    var theSet = new ExportedSet(arr);
    var result = new Array(theSet.size);
    var index = -1;
    theSet.forEach(function (value) {
      result[++index] = value;
    });
    return result;
  }

  function mapToKeysArray(map) {
    var result = new Array(map.size);
    var index = -1;
    map.forEach(function (value, key) {
      result[++index] = key;
    });
    return result;
  }

  var persistentQueues = {};
  var tempViewQueue = new TaskQueue();
  var CHANGES_BATCH_SIZE = 50;

  function parseViewName(name) {
    // can be either 'ddocname/viewname' or just 'viewname'
    // (where the ddoc name is the same)
    return name.indexOf('/') === -1 ? [name, name] : name.split('/');
  }

  function isGenOne(changes) {
    // only return true if the current change is 1-
    // and there are no other leafs
    return changes.length === 1 && /^1-/.test(changes[0].rev);
  }

  function emitError(db, e) {
    try {
      db.emit('error', e);
    } catch (err) {
      guardedConsole('error',
        'The user\'s map/reduce function threw an uncaught error.\n' +
        'You can debug this error by doing:\n' +
        'myDatabase.on(\'error\', function (err) { debugger; });\n' +
        'Please double-check your map/reduce function.');
      guardedConsole('error', e);
    }
  }

  /**
   * Returns an "abstract" mapreduce object of the form:
   *
   *   {
   *     query: queryFun,
   *     viewCleanup: viewCleanupFun
   *   }
   *
   * Arguments are:
   *
   * localDoc: string
   *   This is for the local doc that gets saved in order to track the
   *   "dependent" DBs and clean them up for viewCleanup. It should be
   *   unique, so that indexer plugins don't collide with each other.
   * mapper: function (mapFunDef, emit)
   *   Returns a map function based on the mapFunDef, which in the case of
   *   normal map/reduce is just the de-stringified function, but may be
   *   something else, such as an object in the case of pouchdb-find.
   * reducer: function (reduceFunDef)
   *   Ditto, but for reducing. Modules don't have to support reducing
   *   (e.g. pouchdb-find).
   * ddocValidator: function (ddoc, viewName)
   *   Throws an error if the ddoc or viewName is not valid.
   *   This could be a way to communicate to the user that the configuration for the
   *   indexer is invalid.
   */
  function createAbstractMapReduce(localDocName, mapper, reducer, ddocValidator) {

    function tryMap(db, fun, doc) {
      // emit an event if there was an error thrown by a map function.
      // putting try/catches in a single function also avoids deoptimizations.
      try {
        fun(doc);
      } catch (e) {
        emitError(db, e);
      }
    }

    function tryReduce(db, fun, keys, values, rereduce) {
      // same as above, but returning the result or an error. there are two separate
      // functions to avoid extra memory allocations since the tryCode() case is used
      // for custom map functions (common) vs this function, which is only used for
      // custom reduce functions (rare)
      try {
        return {output : fun(keys, values, rereduce)};
      } catch (e) {
        emitError(db, e);
        return {error: e};
      }
    }

    function sortByKeyThenValue(x, y) {
      var keyCompare = collate(x.key, y.key);
      return keyCompare !== 0 ? keyCompare : collate(x.value, y.value);
    }

    function sliceResults(results, limit, skip) {
      skip = skip || 0;
      if (typeof limit === 'number') {
        return results.slice(skip, limit + skip);
      } else if (skip > 0) {
        return results.slice(skip);
      }
      return results;
    }

    function rowToDocId(row) {
      var val = row.value;
      // Users can explicitly specify a joined doc _id, or it
      // defaults to the doc _id that emitted the key/value.
      var docId = (val && typeof val === 'object' && val._id) || row.id;
      return docId;
    }

    function readAttachmentsAsBlobOrBuffer(res) {
      res.rows.forEach(function (row) {
        var atts = row.doc && row.doc._attachments;
        if (!atts) {
          return;
        }
        Object.keys(atts).forEach(function (filename) {
          var att = atts[filename];
          atts[filename].data = b64ToBluffer(att.data, att.content_type);
        });
      });
    }

    function postprocessAttachments(opts) {
      return function (res) {
        if (opts.include_docs && opts.attachments && opts.binary) {
          readAttachmentsAsBlobOrBuffer(res);
        }
        return res;
      };
    }

    function addHttpParam(paramName, opts, params, asJson) {
      // add an http param from opts to params, optionally json-encoded
      var val = opts[paramName];
      if (typeof val !== 'undefined') {
        if (asJson) {
          val = encodeURIComponent(JSON.stringify(val));
        }
        params.push(paramName + '=' + val);
      }
    }

    function coerceInteger(integerCandidate) {
      if (typeof integerCandidate !== 'undefined') {
        var asNumber = Number(integerCandidate);
        // prevents e.g. '1foo' or '1.1' being coerced to 1
        if (!isNaN(asNumber) && asNumber === parseInt(integerCandidate, 10)) {
          return asNumber;
        } else {
          return integerCandidate;
        }
      }
    }

    function coerceOptions(opts) {
      opts.group_level = coerceInteger(opts.group_level);
      opts.limit = coerceInteger(opts.limit);
      opts.skip = coerceInteger(opts.skip);
      return opts;
    }

    function checkPositiveInteger(number) {
      if (number) {
        if (typeof number !== 'number') {
          return  new QueryParseError('Invalid value for integer: "' +
            number + '"');
        }
        if (number < 0) {
          return new QueryParseError('Invalid value for positive integer: ' +
            '"' + number + '"');
        }
      }
    }

    function checkQueryParseError(options, fun) {
      var startkeyName = options.descending ? 'endkey' : 'startkey';
      var endkeyName = options.descending ? 'startkey' : 'endkey';

      if (typeof options[startkeyName] !== 'undefined' &&
        typeof options[endkeyName] !== 'undefined' &&
        collate(options[startkeyName], options[endkeyName]) > 0) {
        throw new QueryParseError('No rows can match your key range, ' +
          'reverse your start_key and end_key or set {descending : true}');
      } else if (fun.reduce && options.reduce !== false) {
        if (options.include_docs) {
          throw new QueryParseError('{include_docs:true} is invalid for reduce');
        } else if (options.keys && options.keys.length > 1 &&
          !options.group && !options.group_level) {
          throw new QueryParseError('Multi-key fetches for reduce views must use ' +
            '{group: true}');
        }
      }
      ['group_level', 'limit', 'skip'].forEach(function (optionName) {
        var error = checkPositiveInteger(options[optionName]);
        if (error) {
          throw error;
        }
      });
    }

    function httpQuery(db, fun, opts) {
      // List of parameters to add to the PUT request
      var params = [];
      var body;
      var method = 'GET';
      var ok, status;

      // If opts.reduce exists and is defined, then add it to the list
      // of parameters.
      // If reduce=false then the results are that of only the map function
      // not the final result of map and reduce.
      addHttpParam('reduce', opts, params);
      addHttpParam('include_docs', opts, params);
      addHttpParam('attachments', opts, params);
      addHttpParam('limit', opts, params);
      addHttpParam('descending', opts, params);
      addHttpParam('group', opts, params);
      addHttpParam('group_level', opts, params);
      addHttpParam('skip', opts, params);
      addHttpParam('stale', opts, params);
      addHttpParam('conflicts', opts, params);
      addHttpParam('startkey', opts, params, true);
      addHttpParam('start_key', opts, params, true);
      addHttpParam('endkey', opts, params, true);
      addHttpParam('end_key', opts, params, true);
      addHttpParam('inclusive_end', opts, params);
      addHttpParam('key', opts, params, true);
      addHttpParam('update_seq', opts, params);

      // Format the list of parameters into a valid URI query string
      params = params.join('&');
      params = params === '' ? '' : '?' + params;

      // If keys are supplied, issue a POST to circumvent GET query string limits
      // see http://wiki.apache.org/couchdb/HTTP_view_API#Querying_Options
      if (typeof opts.keys !== 'undefined') {
        var MAX_URL_LENGTH = 2000;
        // according to http://stackoverflow.com/a/417184/680742,
        // the de facto URL length limit is 2000 characters

        var keysAsString =
          'keys=' + encodeURIComponent(JSON.stringify(opts.keys));
        if (keysAsString.length + params.length + 1 <= MAX_URL_LENGTH) {
          // If the keys are short enough, do a GET. we do this to work around
          // Safari not understanding 304s on POSTs (see pouchdb/pouchdb#1239)
          params += (params[0] === '?' ? '&' : '?') + keysAsString;
        } else {
          method = 'POST';
          if (typeof fun === 'string') {
            body = {keys: opts.keys};
          } else { // fun is {map : mapfun}, so append to this
            fun.keys = opts.keys;
          }
        }
      }

      // We are referencing a query defined in the design doc
      if (typeof fun === 'string') {
        var parts = parseViewName(fun);
        return db.fetch('_design/' + parts[0] + '/_view/' + parts[1] + params, {
          headers: new h({'Content-Type': 'application/json'}),
          method: method,
          body: JSON.stringify(body)
        }).then(function (response) {
          ok = response.ok;
          status = response.status;
          return response.json();
        }).then(function (result) {
          if (!ok) {
            result.status = status;
            throw generateErrorFromResponse(result);
          }
          // fail the entire request if the result contains an error
          result.rows.forEach(function (row) {
            /* istanbul ignore if */
            if (row.value && row.value.error && row.value.error === "builtin_reduce_error") {
              throw new Error(row.reason);
            }
          });
          return result;
        }).then(postprocessAttachments(opts));
      }

      // We are using a temporary view, terrible for performance, good for testing
      body = body || {};
      Object.keys(fun).forEach(function (key) {
        if (Array.isArray(fun[key])) {
          body[key] = fun[key];
        } else {
          body[key] = fun[key].toString();
        }
      });

      return db.fetch('_temp_view' + params, {
        headers: new h({'Content-Type': 'application/json'}),
        method: 'POST',
        body: JSON.stringify(body)
      }).then(function (response) {
          ok = response.ok;
          status = response.status;
        return response.json();
      }).then(function (result) {
        if (!ok) {
          result.status = status;
          throw generateErrorFromResponse(result);
        }
        return result;
      }).then(postprocessAttachments(opts));
    }

    // custom adapters can define their own api._query
    // and override the default behavior
    /* istanbul ignore next */
    function customQuery(db, fun, opts) {
      return new Promise(function (resolve, reject) {
        db._query(fun, opts, function (err, res) {
          if (err) {
            return reject(err);
          }
          resolve(res);
        });
      });
    }

    // custom adapters can define their own api._viewCleanup
    // and override the default behavior
    /* istanbul ignore next */
    function customViewCleanup(db) {
      return new Promise(function (resolve, reject) {
        db._viewCleanup(function (err, res) {
          if (err) {
            return reject(err);
          }
          resolve(res);
        });
      });
    }

    function defaultsTo(value) {
      return function (reason) {
        /* istanbul ignore else */
        if (reason.status === 404) {
          return value;
        } else {
          throw reason;
        }
      };
    }

    // returns a promise for a list of docs to update, based on the input docId.
    // the order doesn't matter, because post-3.2.0, bulkDocs
    // is an atomic operation in all three adapters.
    function getDocsToPersist(docId, view, docIdsToChangesAndEmits) {
      var metaDocId = '_local/doc_' + docId;
      var defaultMetaDoc = {_id: metaDocId, keys: []};
      var docData = docIdsToChangesAndEmits.get(docId);
      var indexableKeysToKeyValues = docData[0];
      var changes = docData[1];

      function getMetaDoc() {
        if (isGenOne(changes)) {
          // generation 1, so we can safely assume initial state
          // for performance reasons (avoids unnecessary GETs)
          return Promise.resolve(defaultMetaDoc);
        }
        return view.db.get(metaDocId)["catch"](defaultsTo(defaultMetaDoc));
      }

      function getKeyValueDocs(metaDoc) {
        if (!metaDoc.keys.length) {
          // no keys, no need for a lookup
          return Promise.resolve({rows: []});
        }
        return view.db.allDocs({
          keys: metaDoc.keys,
          include_docs: true
        });
      }

      function processKeyValueDocs(metaDoc, kvDocsRes) {
        var kvDocs = [];
        var oldKeys = new ExportedSet();

        for (var i = 0, len = kvDocsRes.rows.length; i < len; i++) {
          var row = kvDocsRes.rows[i];
          var doc = row.doc;
          if (!doc) { // deleted
            continue;
          }
          kvDocs.push(doc);
          oldKeys.add(doc._id);
          doc._deleted = !indexableKeysToKeyValues.has(doc._id);
          if (!doc._deleted) {
            var keyValue = indexableKeysToKeyValues.get(doc._id);
            if ('value' in keyValue) {
              doc.value = keyValue.value;
            }
          }
        }
        var newKeys = mapToKeysArray(indexableKeysToKeyValues);
        newKeys.forEach(function (key) {
          if (!oldKeys.has(key)) {
            // new doc
            var kvDoc = {
              _id: key
            };
            var keyValue = indexableKeysToKeyValues.get(key);
            if ('value' in keyValue) {
              kvDoc.value = keyValue.value;
            }
            kvDocs.push(kvDoc);
          }
        });
        metaDoc.keys = uniq$1(newKeys.concat(metaDoc.keys));
        kvDocs.push(metaDoc);

        return kvDocs;
      }

      return getMetaDoc().then(function (metaDoc) {
        return getKeyValueDocs(metaDoc).then(function (kvDocsRes) {
          return processKeyValueDocs(metaDoc, kvDocsRes);
        });
      });
    }

    // updates all emitted key/value docs and metaDocs in the mrview database
    // for the given batch of documents from the source database
    function saveKeyValues(view, docIdsToChangesAndEmits, seq) {
      var seqDocId = '_local/lastSeq';
      return view.db.get(seqDocId)[
        "catch"](defaultsTo({_id: seqDocId, seq: 0}))
        .then(function (lastSeqDoc) {
          var docIds = mapToKeysArray(docIdsToChangesAndEmits);
          return Promise.all(docIds.map(function (docId) {
            return getDocsToPersist(docId, view, docIdsToChangesAndEmits);
          })).then(function (listOfDocsToPersist) {
            var docsToPersist = flatten(listOfDocsToPersist);
            lastSeqDoc.seq = seq;
            docsToPersist.push(lastSeqDoc);
            // write all docs in a single operation, update the seq once
            return view.db.bulkDocs({docs : docsToPersist});
          });
        });
    }

    function getQueue(view) {
      var viewName = typeof view === 'string' ? view : view.name;
      var queue = persistentQueues[viewName];
      if (!queue) {
        queue = persistentQueues[viewName] = new TaskQueue();
      }
      return queue;
    }

    function updateView(view) {
      return sequentialize(getQueue(view), function () {
        return updateViewInQueue(view);
      })();
    }

    function updateViewInQueue(view) {
      // bind the emit function once
      var mapResults;
      var doc;

      function emit(key, value) {
        var output = {id: doc._id, key: normalizeKey(key)};
        // Don't explicitly store the value unless it's defined and non-null.
        // This saves on storage space, because often people don't use it.
        if (typeof value !== 'undefined' && value !== null) {
          output.value = normalizeKey(value);
        }
        mapResults.push(output);
      }

      var mapFun = mapper(view.mapFun, emit);

      var currentSeq = view.seq || 0;

      function processChange(docIdsToChangesAndEmits, seq) {
        return function () {
          return saveKeyValues(view, docIdsToChangesAndEmits, seq);
        };
      }

      var queue = new TaskQueue();

      function processNextBatch() {
        return view.sourceDB.changes({
          return_docs: true,
          conflicts: true,
          include_docs: true,
          style: 'all_docs',
          since: currentSeq,
          limit: CHANGES_BATCH_SIZE
        }).then(processBatch);
      }

      function processBatch(response) {
        var results = response.results;
        if (!results.length) {
          return;
        }
        var docIdsToChangesAndEmits = createDocIdsToChangesAndEmits(results);
        queue.add(processChange(docIdsToChangesAndEmits, currentSeq));
        if (results.length < CHANGES_BATCH_SIZE) {
          return;
        }
        return processNextBatch();
      }

      function createDocIdsToChangesAndEmits(results) {
        var docIdsToChangesAndEmits = new ExportedMap();
        for (var i = 0, len = results.length; i < len; i++) {
          var change = results[i];
          if (change.doc._id[0] !== '_') {
            mapResults = [];
            doc = change.doc;

            if (!doc._deleted) {
              tryMap(view.sourceDB, mapFun, doc);
            }
            mapResults.sort(sortByKeyThenValue);

            var indexableKeysToKeyValues = createIndexableKeysToKeyValues(mapResults);
            docIdsToChangesAndEmits.set(change.doc._id, [
              indexableKeysToKeyValues,
              change.changes
            ]);
          }
          currentSeq = change.seq;
        }
        return docIdsToChangesAndEmits;
      }

      function createIndexableKeysToKeyValues(mapResults) {
        var indexableKeysToKeyValues = new ExportedMap();
        var lastKey;
        for (var i = 0, len = mapResults.length; i < len; i++) {
          var emittedKeyValue = mapResults[i];
          var complexKey = [emittedKeyValue.key, emittedKeyValue.id];
          if (i > 0 && collate(emittedKeyValue.key, lastKey) === 0) {
            complexKey.push(i); // dup key+id, so make it unique
          }
          indexableKeysToKeyValues.set(toIndexableString(complexKey), emittedKeyValue);
          lastKey = emittedKeyValue.key;
        }
        return indexableKeysToKeyValues;
      }

      return processNextBatch().then(function () {
        return queue.finish();
      }).then(function () {
        view.seq = currentSeq;
      });
    }

    function reduceView(view, results, options) {
      if (options.group_level === 0) {
        delete options.group_level;
      }

      var shouldGroup = options.group || options.group_level;

      var reduceFun = reducer(view.reduceFun);

      var groups = [];
      var lvl = isNaN(options.group_level) ? Number.POSITIVE_INFINITY :
        options.group_level;
      results.forEach(function (e) {
        var last = groups[groups.length - 1];
        var groupKey = shouldGroup ? e.key : null;

        // only set group_level for array keys
        if (shouldGroup && Array.isArray(groupKey)) {
          groupKey = groupKey.slice(0, lvl);
        }

        if (last && collate(last.groupKey, groupKey) === 0) {
          last.keys.push([e.key, e.id]);
          last.values.push(e.value);
          return;
        }
        groups.push({
          keys: [[e.key, e.id]],
          values: [e.value],
          groupKey: groupKey
        });
      });
      results = [];
      for (var i = 0, len = groups.length; i < len; i++) {
        var e = groups[i];
        var reduceTry = tryReduce(view.sourceDB, reduceFun, e.keys, e.values, false);
        if (reduceTry.error && reduceTry.error instanceof BuiltInError) {
          // CouchDB returns an error if a built-in errors out
          throw reduceTry.error;
        }
        results.push({
          // CouchDB just sets the value to null if a non-built-in errors out
          value: reduceTry.error ? null : reduceTry.output,
          key: e.groupKey
        });
      }
      // no total_rows/offset when reducing
      return {rows: sliceResults(results, options.limit, options.skip)};
    }

    function queryView(view, opts) {
      return sequentialize(getQueue(view), function () {
        return queryViewInQueue(view, opts);
      })();
    }

    function queryViewInQueue(view, opts) {
      var totalRows;
      var shouldReduce = view.reduceFun && opts.reduce !== false;
      var skip = opts.skip || 0;
      if (typeof opts.keys !== 'undefined' && !opts.keys.length) {
        // equivalent query
        opts.limit = 0;
        delete opts.keys;
      }

      function fetchFromView(viewOpts) {
        viewOpts.include_docs = true;
        return view.db.allDocs(viewOpts).then(function (res) {
          totalRows = res.total_rows;
          return res.rows.map(function (result) {

            // implicit migration - in older versions of PouchDB,
            // we explicitly stored the doc as {id: ..., key: ..., value: ...}
            // this is tested in a migration test
            /* istanbul ignore next */
            if ('value' in result.doc && typeof result.doc.value === 'object' &&
              result.doc.value !== null) {
              var keys = Object.keys(result.doc.value).sort();
              // this detection method is not perfect, but it's unlikely the user
              // emitted a value which was an object with these 3 exact keys
              var expectedKeys = ['id', 'key', 'value'];
              if (!(keys < expectedKeys || keys > expectedKeys)) {
                return result.doc.value;
              }
            }

            var parsedKeyAndDocId = parseIndexableString(result.doc._id);
            return {
              key: parsedKeyAndDocId[0],
              id: parsedKeyAndDocId[1],
              value: ('value' in result.doc ? result.doc.value : null)
            };
          });
        });
      }

      function onMapResultsReady(rows) {
        var finalResults;
        if (shouldReduce) {
          finalResults = reduceView(view, rows, opts);
        } else {
          finalResults = {
            total_rows: totalRows,
            offset: skip,
            rows: rows
          };
        }
        /* istanbul ignore if */
        if (opts.update_seq) {
          finalResults.update_seq = view.seq;
        }
        if (opts.include_docs) {
          var docIds = uniq$1(rows.map(rowToDocId));

          return view.sourceDB.allDocs({
            keys: docIds,
            include_docs: true,
            conflicts: opts.conflicts,
            attachments: opts.attachments,
            binary: opts.binary
          }).then(function (allDocsRes) {
            var docIdsToDocs = new ExportedMap();
            allDocsRes.rows.forEach(function (row) {
              docIdsToDocs.set(row.id, row.doc);
            });
            rows.forEach(function (row) {
              var docId = rowToDocId(row);
              var doc = docIdsToDocs.get(docId);
              if (doc) {
                row.doc = doc;
              }
            });
            return finalResults;
          });
        } else {
          return finalResults;
        }
      }

      if (typeof opts.keys !== 'undefined') {
        var keys = opts.keys;
        var fetchPromises = keys.map(function (key) {
          var viewOpts = {
            startkey : toIndexableString([key]),
            endkey   : toIndexableString([key, {}])
          };
          /* istanbul ignore if */
          if (opts.update_seq) {
            viewOpts.update_seq = true;
          }
          return fetchFromView(viewOpts);
        });
        return Promise.all(fetchPromises).then(flatten).then(onMapResultsReady);
      } else { // normal query, no 'keys'
        var viewOpts = {
          descending : opts.descending
        };
        /* istanbul ignore if */
        if (opts.update_seq) {
          viewOpts.update_seq = true;
        }
        var startkey;
        var endkey;
        if ('start_key' in opts) {
          startkey = opts.start_key;
        }
        if ('startkey' in opts) {
          startkey = opts.startkey;
        }
        if ('end_key' in opts) {
          endkey = opts.end_key;
        }
        if ('endkey' in opts) {
          endkey = opts.endkey;
        }
        if (typeof startkey !== 'undefined') {
          viewOpts.startkey = opts.descending ?
            toIndexableString([startkey, {}]) :
            toIndexableString([startkey]);
        }
        if (typeof endkey !== 'undefined') {
          var inclusiveEnd = opts.inclusive_end !== false;
          if (opts.descending) {
            inclusiveEnd = !inclusiveEnd;
          }

          viewOpts.endkey = toIndexableString(
            inclusiveEnd ? [endkey, {}] : [endkey]);
        }
        if (typeof opts.key !== 'undefined') {
          var keyStart = toIndexableString([opts.key]);
          var keyEnd = toIndexableString([opts.key, {}]);
          if (viewOpts.descending) {
            viewOpts.endkey = keyStart;
            viewOpts.startkey = keyEnd;
          } else {
            viewOpts.startkey = keyStart;
            viewOpts.endkey = keyEnd;
          }
        }
        if (!shouldReduce) {
          if (typeof opts.limit === 'number') {
            viewOpts.limit = opts.limit;
          }
          viewOpts.skip = skip;
        }
        return fetchFromView(viewOpts).then(onMapResultsReady);
      }
    }

    function httpViewCleanup(db) {
      return db.fetch('_view_cleanup', {
        headers: new h({'Content-Type': 'application/json'}),
        method: 'POST'
      }).then(function (response) {
        return response.json();
      });
    }

    function localViewCleanup(db) {
      return db.get('_local/' + localDocName).then(function (metaDoc) {
        var docsToViews = new ExportedMap();
        Object.keys(metaDoc.views).forEach(function (fullViewName) {
          var parts = parseViewName(fullViewName);
          var designDocName = '_design/' + parts[0];
          var viewName = parts[1];
          var views = docsToViews.get(designDocName);
          if (!views) {
            views = new ExportedSet();
            docsToViews.set(designDocName, views);
          }
          views.add(viewName);
        });
        var opts = {
          keys : mapToKeysArray(docsToViews),
          include_docs : true
        };
        return db.allDocs(opts).then(function (res) {
          var viewsToStatus = {};
          res.rows.forEach(function (row) {
            var ddocName = row.key.substring(8); // cuts off '_design/'
            docsToViews.get(row.key).forEach(function (viewName) {
              var fullViewName = ddocName + '/' + viewName;
              /* istanbul ignore if */
              if (!metaDoc.views[fullViewName]) {
                // new format, without slashes, to support PouchDB 2.2.0
                // migration test in pouchdb's browser.migration.js verifies this
                fullViewName = viewName;
              }
              var viewDBNames = Object.keys(metaDoc.views[fullViewName]);
              // design doc deleted, or view function nonexistent
              var statusIsGood = row.doc && row.doc.views &&
                row.doc.views[viewName];
              viewDBNames.forEach(function (viewDBName) {
                viewsToStatus[viewDBName] =
                  viewsToStatus[viewDBName] || statusIsGood;
              });
            });
          });
          var dbsToDelete = Object.keys(viewsToStatus).filter(
            function (viewDBName) { return !viewsToStatus[viewDBName]; });
          var destroyPromises = dbsToDelete.map(function (viewDBName) {
            return sequentialize(getQueue(viewDBName), function () {
              return new db.constructor(viewDBName, db.__opts).destroy();
            })();
          });
          return Promise.all(destroyPromises).then(function () {
            return {ok: true};
          });
        });
      }, defaultsTo({ok: true}));
    }

    function queryPromised(db, fun, opts) {
      /* istanbul ignore next */
      if (typeof db._query === 'function') {
        return customQuery(db, fun, opts);
      }
      if (isRemote(db)) {
        return httpQuery(db, fun, opts);
      }

      if (typeof fun !== 'string') {
        // temp_view
        checkQueryParseError(opts, fun);

        tempViewQueue.add(function () {
          var createViewPromise = createView(
            /* sourceDB */ db,
            /* viewName */ 'temp_view/temp_view',
            /* mapFun */ fun.map,
            /* reduceFun */ fun.reduce,
            /* temporary */ true,
            /* localDocName */ localDocName);
          return createViewPromise.then(function (view) {
            return fin(updateView(view).then(function () {
              return queryView(view, opts);
            }), function () {
              return view.db.destroy();
            });
          });
        });
        return tempViewQueue.finish();
      } else {
        // persistent view
        var fullViewName = fun;
        var parts = parseViewName(fullViewName);
        var designDocName = parts[0];
        var viewName = parts[1];
        return db.get('_design/' + designDocName).then(function (doc) {
          var fun = doc.views && doc.views[viewName];

          if (!fun) {
            // basic validator; it's assumed that every subclass would want this
            throw new NotFoundError('ddoc ' + doc._id + ' has no view named ' +
              viewName);
          }

          ddocValidator(doc, viewName);
          checkQueryParseError(opts, fun);

          var createViewPromise = createView(
            /* sourceDB */ db,
            /* viewName */ fullViewName,
            /* mapFun */ fun.map,
            /* reduceFun */ fun.reduce,
            /* temporary */ false,
            /* localDocName */ localDocName);
          return createViewPromise.then(function (view) {
            if (opts.stale === 'ok' || opts.stale === 'update_after') {
              if (opts.stale === 'update_after') {
                immediate(function () {
                  updateView(view);
                });
              }
              return queryView(view, opts);
            } else { // stale not ok
              return updateView(view).then(function () {
                return queryView(view, opts);
              });
            }
          });
        });
      }
    }

    function abstractQuery(fun, opts, callback) {
      var db = this;
      if (typeof opts === 'function') {
        callback = opts;
        opts = {};
      }
      opts = opts ? coerceOptions(opts) : {};

      if (typeof fun === 'function') {
        fun = {map : fun};
      }

      var promise = Promise.resolve().then(function () {
        return queryPromised(db, fun, opts);
      });
      promisedCallback$1(promise, callback);
      return promise;
    }

    var abstractViewCleanup = callbackify$1(function () {
      var db = this;
      /* istanbul ignore next */
      if (typeof db._viewCleanup === 'function') {
        return customViewCleanup(db);
      }
      if (isRemote(db)) {
        return httpViewCleanup(db);
      }
      return localViewCleanup(db);
    });

    return {
      query: abstractQuery,
      viewCleanup: abstractViewCleanup
    };
  }

  //
  // One thing about these mappers:
  //
  // Per the advice of John-David Dalton (http://youtu.be/NthmeLEhDDM),
  // what you want to do in this case is optimize for the smallest possible
  // function, since that's the thing that gets run over and over again.
  //
  // This code would be a lot simpler if all the if/elses were inside
  // the function, but it would also be a lot less performant.
  //


  function createDeepMultiMapper(fields, emit) {
    return function (doc) {
      var toEmit = [];
      for (var i = 0, iLen = fields.length; i < iLen; i++) {
        var parsedField = parseField(fields[i]);
        var value = doc;
        for (var j = 0, jLen = parsedField.length; j < jLen; j++) {
          var key = parsedField[j];
          value = value[key];
          if (typeof value === 'undefined') {
            return; // don't emit
          }
        }
        toEmit.push(value);
      }
      emit(toEmit);
    };
  }

  function createDeepSingleMapper(field, emit) {
    var parsedField = parseField(field);
    return function (doc) {
      var value = doc;
      for (var i = 0, len = parsedField.length; i < len; i++) {
        var key = parsedField[i];
        value = value[key];
        if (typeof value === 'undefined') {
          return; // do nothing
        }
      }
      emit(value);
    };
  }

  function createShallowSingleMapper(field, emit) {
    return function (doc) {
      emit(doc[field]);
    };
  }

  function createShallowMultiMapper(fields, emit) {
    return function (doc) {
      var toEmit = [];
      for (var i = 0, len = fields.length; i < len; i++) {
        toEmit.push(doc[fields[i]]);
      }
      emit(toEmit);
    };
  }

  function checkShallow(fields) {
    for (var i = 0, len = fields.length; i < len; i++) {
      var field = fields[i];
      if (field.indexOf('.') !== -1) {
        return false;
      }
    }
    return true;
  }

  function createMapper(fields, emit) {
    var isShallow = checkShallow(fields);
    var isSingle = fields.length === 1;

    // notice we try to optimize for the most common case,
    // i.e. single shallow indexes
    if (isShallow) {
      if (isSingle) {
        return createShallowSingleMapper(fields[0], emit);
      } else { // multi
        return createShallowMultiMapper(fields, emit);
      }
    } else { // deep
      if (isSingle) {
        return createDeepSingleMapper(fields[0], emit);
      } else { // multi
        return createDeepMultiMapper(fields, emit);
      }
    }
  }

  function mapper(mapFunDef, emit) {
    // mapFunDef is a list of fields

    var fields = Object.keys(mapFunDef.fields);

    return createMapper(fields, emit);
  }

  /* istanbul ignore next */
  function reducer(/*reduceFunDef*/) {
    throw new Error('reduce not supported');
  }

  function ddocValidator(ddoc, viewName) {
    var view = ddoc.views[viewName];
    // This doesn't actually need to be here apparently, but
    // I feel safer keeping it.
    /* istanbul ignore if */
    if (!view.map || !view.map.fields) {
      throw new Error('ddoc ' + ddoc._id +' with view ' + viewName +
        ' doesn\'t have map.fields defined. ' +
        'maybe it wasn\'t created by this plugin?');
    }
  }

  var abstractMapper = createAbstractMapReduce(
    /* localDocName */ 'indexes',
    mapper,
    reducer,
    ddocValidator
  );

  function abstractMapper$1 (db) {
    return db._customFindAbstractMapper || abstractMapper;
  }

  // normalize the "sort" value
  function massageSort(sort) {
    if (!Array.isArray(sort)) {
      throw new Error('invalid sort json - should be an array');
    }
    return sort.map(function (sorting) {
      if (typeof sorting === 'string') {
        var obj = {};
        obj[sorting] = 'asc';
        return obj;
      } else {
        return sorting;
      }
    });
  }

  function massageUseIndex(useIndex) {
    var cleanedUseIndex = [];
    if (typeof useIndex === 'string') {
      cleanedUseIndex.push(useIndex);
    } else {
      cleanedUseIndex = useIndex;
    }

    return cleanedUseIndex.map(function (name) {
      return name.replace('_design/', '');
    });
  }

  function massageIndexDef(indexDef) {
    indexDef.fields = indexDef.fields.map(function (field) {
      if (typeof field === 'string') {
        var obj = {};
        obj[field] = 'asc';
        return obj;
      }
      return field;
    });
    return indexDef;
  }

  function getKeyFromDoc(doc, index) {
    var res = [];
    for (var i = 0; i < index.def.fields.length; i++) {
      var field = getKey(index.def.fields[i]);
      res.push(doc[field]);
    }
    return res;
  }

  // have to do this manually because REASONS. I don't know why
  // CouchDB didn't implement inclusive_start
  function filterInclusiveStart(rows, targetValue, index) {
    var indexFields = index.def.fields;
    for (var i = 0, len = rows.length; i < len; i++) {
      var row = rows[i];

      // shave off any docs at the beginning that are <= the
      // target value

      var docKey = getKeyFromDoc(row.doc, index);
      if (indexFields.length === 1) {
        docKey = docKey[0]; // only one field, not multi-field
      } else { // more than one field in index
        // in the case where e.g. the user is searching {$gt: {a: 1}}
        // but the index is [a, b], then we need to shorten the doc key
        while (docKey.length > targetValue.length) {
          docKey.pop();
        }
      }
      //ABS as we just looking for values that don't match
      if (Math.abs(collate(docKey, targetValue)) > 0) {
        // no need to filter any further; we're past the key
        break;
      }
    }
    return i > 0 ? rows.slice(i) : rows;
  }

  function reverseOptions(opts) {
    var newOpts = clone(opts);
    delete newOpts.startkey;
    delete newOpts.endkey;
    delete newOpts.inclusive_start;
    delete newOpts.inclusive_end;

    if ('endkey' in opts) {
      newOpts.startkey = opts.endkey;
    }
    if ('startkey' in opts) {
      newOpts.endkey = opts.startkey;
    }
    if ('inclusive_start' in opts) {
      newOpts.inclusive_end = opts.inclusive_start;
    }
    if ('inclusive_end' in opts) {
      newOpts.inclusive_start = opts.inclusive_end;
    }
    return newOpts;
  }

  function validateIndex(index) {
    var ascFields = index.fields.filter(function (field) {
      return getValue(field) === 'asc';
    });
    if (ascFields.length !== 0 && ascFields.length !== index.fields.length) {
      throw new Error('unsupported mixed sorting');
    }
  }

  function validateSort(requestDef, index) {
    if (index.defaultUsed && requestDef.sort) {
      var noneIdSorts = requestDef.sort.filter(function (sortItem) {
        return Object.keys(sortItem)[0] !== '_id';
      }).map(function (sortItem) {
        return Object.keys(sortItem)[0];
      });

      if (noneIdSorts.length > 0) {
        throw new Error('Cannot sort on field(s) "' + noneIdSorts.join(',') +
        '" when using the default index');
      }
    }

    if (index.defaultUsed) {
      return;
    }
  }

  function validateFindRequest(requestDef) {
    if (typeof requestDef.selector !== 'object') {
      throw new Error('you must provide a selector when you find()');
    }

    /*var selectors = requestDef.selector['$and'] || [requestDef.selector];
    for (var i = 0; i < selectors.length; i++) {
      var selector = selectors[i];
      var keys = Object.keys(selector);
      if (keys.length === 0) {
        throw new Error('invalid empty selector');
      }
      //var selection = selector[keys[0]];
      /*if (Object.keys(selection).length !== 1) {
        throw new Error('invalid selector: ' + JSON.stringify(selection) +
          ' - it must have exactly one key/value');
      }
    }*/
  }

  // determine the maximum number of fields
  // we're going to need to query, e.g. if the user
  // has selection ['a'] and sorting ['a', 'b'], then we
  // need to use the longer of the two: ['a', 'b']
  function getUserFields(selector, sort) {
    var selectorFields = Object.keys(selector);
    var sortFields = sort? sort.map(getKey) : [];
    var userFields;
    if (selectorFields.length >= sortFields.length) {
      userFields = selectorFields;
    } else {
      userFields = sortFields;
    }

    if (sortFields.length === 0) {
      return {
        fields: userFields
      };
    }

    // sort according to the user's preferred sorting
    userFields = userFields.sort(function (left, right) {
      var leftIdx = sortFields.indexOf(left);
      if (leftIdx === -1) {
        leftIdx = Number.MAX_VALUE;
      }
      var rightIdx = sortFields.indexOf(right);
      if (rightIdx === -1) {
        rightIdx = Number.MAX_VALUE;
      }
      return leftIdx < rightIdx ? -1 : leftIdx > rightIdx ? 1 : 0;
    });

    return {
      fields: userFields,
      sortOrder: sort.map(getKey)
    };
  }

  function createIndex$1(db, requestDef) {
    requestDef = massageCreateIndexRequest(requestDef);
    var originalIndexDef = clone(requestDef.index);
    requestDef.index = massageIndexDef(requestDef.index);

    validateIndex(requestDef.index);

    // calculating md5 is expensive - memoize and only
    // run if required
    var md5;
    function getMd5() {
      return md5 || (md5 = stringMd5(JSON.stringify(requestDef)));
    }

    var viewName = requestDef.name || ('idx-' + getMd5());

    var ddocName = requestDef.ddoc || ('idx-' + getMd5());
    var ddocId = '_design/' + ddocName;

    var hasInvalidLanguage = false;
    var viewExists = false;

    function updateDdoc(doc) {
      if (doc._rev && doc.language !== 'query') {
        hasInvalidLanguage = true;
      }
      doc.language = 'query';
      doc.views = doc.views || {};

      viewExists = !!doc.views[viewName];

      if (viewExists) {
        return false;
      }

      doc.views[viewName] = {
        map: {
          fields: mergeObjects(requestDef.index.fields)
        },
        reduce: '_count',
        options: {
          def: originalIndexDef
        }
      };

      return doc;
    }

    db.constructor.emit('debug', ['find', 'creating index', ddocId]);

    return upsert(db, ddocId, updateDdoc).then(function () {
      if (hasInvalidLanguage) {
        throw new Error('invalid language for ddoc with id "' +
        ddocId +
        '" (should be "query")');
      }
    }).then(function () {
      // kick off a build
      // TODO: abstract-pouchdb-mapreduce should support auto-updating
      // TODO: should also use update_after, but pouchdb/pouchdb#3415 blocks me
      var signature = ddocName + '/' + viewName;
      return abstractMapper$1(db).query.call(db, signature, {
        limit: 0,
        reduce: false
      }).then(function () {
        return {
          id: ddocId,
          name: viewName,
          result: viewExists ? 'exists' : 'created'
        };
      });
    });
  }

  function getIndexes$1(db) {
    // just search through all the design docs and filter in-memory.
    // hopefully there aren't that many ddocs.
    return db.allDocs({
      startkey: '_design/',
      endkey: '_design/\uffff',
      include_docs: true
    }).then(function (allDocsRes) {
      var res = {
        indexes: [{
          ddoc: null,
          name: '_all_docs',
          type: 'special',
          def: {
            fields: [{_id: 'asc'}]
          }
        }]
      };

      res.indexes = flatten$1(res.indexes, allDocsRes.rows.filter(function (row) {
        return row.doc.language === 'query';
      }).map(function (row) {
        var viewNames = row.doc.views !== undefined ? Object.keys(row.doc.views) : [];

        return viewNames.map(function (viewName) {
          var view = row.doc.views[viewName];
          return {
            ddoc: row.id,
            name: viewName,
            type: 'json',
            def: massageIndexDef(view.options.def)
          };
        });
      }));

      // these are sorted by view name for some reason
      res.indexes.sort(function (left, right) {
        return compare(left.name, right.name);
      });
      res.total_rows = res.indexes.length;
      return res;
    });
  }

  // couchdb lowest collation value
  var COLLATE_LO = null;

  // couchdb highest collation value (TODO: well not really, but close enough amirite)
  var COLLATE_HI = {"\uffff": {}};

  // couchdb second-lowest collation value

  function checkFieldInIndex(index, field) {
    var indexFields = index.def.fields.map(getKey);
    for (var i = 0, len = indexFields.length; i < len; i++) {
      var indexField = indexFields[i];
      if (field === indexField) {
        return true;
      }
    }
    return false;
  }

  // so when you do e.g. $eq/$eq, we can do it entirely in the database.
  // but when you do e.g. $gt/$eq, the first part can be done
  // in the database, but the second part has to be done in-memory,
  // because $gt has forced us to lose precision.
  // so that's what this determines
  function userOperatorLosesPrecision(selector, field) {
    var matcher = selector[field];
    var userOperator = getKey(matcher);

    return userOperator !== '$eq';
  }

  // sort the user fields by their position in the index,
  // if they're in the index
  function sortFieldsByIndex(userFields, index) {
    var indexFields = index.def.fields.map(getKey);

    return userFields.slice().sort(function (a, b) {
      var aIdx = indexFields.indexOf(a);
      var bIdx = indexFields.indexOf(b);
      if (aIdx === -1) {
        aIdx = Number.MAX_VALUE;
      }
      if (bIdx === -1) {
        bIdx = Number.MAX_VALUE;
      }
      return compare(aIdx, bIdx);
    });
  }

  // first pass to try to find fields that will need to be sorted in-memory
  function getBasicInMemoryFields(index, selector, userFields) {

    userFields = sortFieldsByIndex(userFields, index);

    // check if any of the user selectors lose precision
    var needToFilterInMemory = false;
    for (var i = 0, len = userFields.length; i < len; i++) {
      var field = userFields[i];
      if (needToFilterInMemory || !checkFieldInIndex(index, field)) {
        return userFields.slice(i);
      }
      if (i < len - 1 && userOperatorLosesPrecision(selector, field)) {
        needToFilterInMemory = true;
      }
    }
    return [];
  }

  function getInMemoryFieldsFromNe(selector) {
    var fields = [];
    Object.keys(selector).forEach(function (field) {
      var matcher = selector[field];
      Object.keys(matcher).forEach(function (operator) {
        if (operator === '$ne') {
          fields.push(field);
        }
      });
    });
    return fields;
  }

  function getInMemoryFields(coreInMemoryFields, index, selector, userFields) {
    var result = flatten$1(
      // in-memory fields reported as necessary by the query planner
      coreInMemoryFields,
      // combine with another pass that checks for any we may have missed
      getBasicInMemoryFields(index, selector, userFields),
      // combine with another pass that checks for $ne's
      getInMemoryFieldsFromNe(selector)
    );

    return sortFieldsByIndex(uniq(result), index);
  }

  // check that at least one field in the user's query is represented
  // in the index. order matters in the case of sorts
  function checkIndexFieldsMatch(indexFields, sortOrder, fields) {
    if (sortOrder) {
      // array has to be a strict subarray of index array. furthermore,
      // the sortOrder fields need to all be represented in the index
      var sortMatches = oneArrayIsStrictSubArrayOfOther(sortOrder, indexFields);
      var selectorMatches = oneArrayIsSubArrayOfOther(fields, indexFields);

      return sortMatches && selectorMatches;
    }

    // all of the user's specified fields still need to be
    // on the left side of the index array, although the order
    // doesn't matter
    return oneSetIsSubArrayOfOther(fields, indexFields);
  }

  var logicalMatchers = ['$eq', '$gt', '$gte', '$lt', '$lte'];
  function isNonLogicalMatcher(matcher) {
    return logicalMatchers.indexOf(matcher) === -1;
  }

  // check all the index fields for usages of '$ne'
  // e.g. if the user queries {foo: {$ne: 'foo'}, bar: {$eq: 'bar'}},
  // then we can neither use an index on ['foo'] nor an index on
  // ['foo', 'bar'], but we can use an index on ['bar'] or ['bar', 'foo']
  function checkFieldsLogicallySound(indexFields, selector) {
    var firstField = indexFields[0];
    var matcher = selector[firstField];

    if (typeof matcher === 'undefined') {
      /* istanbul ignore next */
      return true;
    }

    var isInvalidNe = Object.keys(matcher).length === 1 &&
      getKey(matcher) === '$ne';

    return !isInvalidNe;
  }

  function checkIndexMatches(index, sortOrder, fields, selector) {

    var indexFields = index.def.fields.map(getKey);

    var fieldsMatch = checkIndexFieldsMatch(indexFields, sortOrder, fields);

    if (!fieldsMatch) {
      return false;
    }

    return checkFieldsLogicallySound(indexFields, selector);
  }

  //
  // the algorithm is very simple:
  // take all the fields the user supplies, and if those fields
  // are a strict subset of the fields in some index,
  // then use that index
  //
  //
  function findMatchingIndexes(selector, userFields, sortOrder, indexes) {

    return indexes.reduce(function (res, index) {
      var indexMatches = checkIndexMatches(index, sortOrder, userFields, selector);
      if (indexMatches) {
        res.push(index);
      }
      return res;
    }, []);
  }

  // find the best index, i.e. the one that matches the most fields
  // in the user's query
  function findBestMatchingIndex(selector, userFields, sortOrder, indexes, useIndex) {

    var matchingIndexes = findMatchingIndexes(selector, userFields, sortOrder, indexes);

    if (matchingIndexes.length === 0) {
      if (useIndex) {
        throw {
          error: "no_usable_index",
          message: "There is no index available for this selector."
        };
      }
      //return `all_docs` as a default index;
      //I'm assuming that _all_docs is always first
      var defaultIndex = indexes[0];
      defaultIndex.defaultUsed = true;
      return defaultIndex;
    }
    if (matchingIndexes.length === 1 && !useIndex) {
      return matchingIndexes[0];
    }

    var userFieldsMap = arrayToObject(userFields);

    function scoreIndex(index) {
      var indexFields = index.def.fields.map(getKey);
      var score = 0;
      for (var i = 0, len = indexFields.length; i < len; i++) {
        var indexField = indexFields[i];
        if (userFieldsMap[indexField]) {
          score++;
        }
      }
      return score;
    }

    if (useIndex) {
      var useIndexDdoc = '_design/' + useIndex[0];
      var useIndexName = useIndex.length === 2 ? useIndex[1] : false;
      var index = matchingIndexes.find(function (index) {
        if (useIndexName && index.ddoc === useIndexDdoc && useIndexName === index.name) {
          return true;
        }

        if (index.ddoc === useIndexDdoc) {
          /* istanbul ignore next */
          return true;
        }

        return false;
      });

      if (!index) {
        throw {
          error: "unknown_error",
          message: "Could not find that index or could not use that index for the query"
        };
      }
      return index;
    }

    return max(matchingIndexes, scoreIndex);
  }

  function getSingleFieldQueryOptsFor(userOperator, userValue) {
    switch (userOperator) {
      case '$eq':
        return {key: userValue};
      case '$lte':
        return {endkey: userValue};
      case '$gte':
        return {startkey: userValue};
      case '$lt':
        return {
          endkey: userValue,
          inclusive_end: false
        };
      case '$gt':
        return {
          startkey: userValue,
          inclusive_start: false
        };
    }

    return {
      startkey: COLLATE_LO
    };
  }

  function getSingleFieldCoreQueryPlan(selector, index) {
    var field = getKey(index.def.fields[0]);
    //ignoring this because the test to exercise the branch is skipped at the moment
    /* istanbul ignore next */
    var matcher = selector[field] || {};
    var inMemoryFields = [];

    var userOperators = Object.keys(matcher);

    var combinedOpts;

    userOperators.forEach(function (userOperator) {

      if (isNonLogicalMatcher(userOperator)) {
        inMemoryFields.push(field);
      }

      var userValue = matcher[userOperator];

      var newQueryOpts = getSingleFieldQueryOptsFor(userOperator, userValue);

      if (combinedOpts) {
        combinedOpts = mergeObjects([combinedOpts, newQueryOpts]);
      } else {
        combinedOpts = newQueryOpts;
      }
    });

    return {
      queryOpts: combinedOpts,
      inMemoryFields: inMemoryFields
    };
  }

  function getMultiFieldCoreQueryPlan(userOperator, userValue) {
    switch (userOperator) {
      case '$eq':
        return {
          startkey: userValue,
          endkey: userValue
        };
      case '$lte':
        return {
          endkey: userValue
        };
      case '$gte':
        return {
          startkey: userValue
        };
      case '$lt':
        return {
          endkey: userValue,
          inclusive_end: false
        };
      case '$gt':
        return {
          startkey: userValue,
          inclusive_start: false
        };
    }
  }

  function getMultiFieldQueryOpts(selector, index) {

    var indexFields = index.def.fields.map(getKey);

    var inMemoryFields = [];
    var startkey = [];
    var endkey = [];
    var inclusiveStart;
    var inclusiveEnd;


    function finish(i) {

      if (inclusiveStart !== false) {
        startkey.push(COLLATE_LO);
      }
      if (inclusiveEnd !== false) {
        endkey.push(COLLATE_HI);
      }
      // keep track of the fields where we lost specificity,
      // and therefore need to filter in-memory
      inMemoryFields = indexFields.slice(i);
    }

    for (var i = 0, len = indexFields.length; i < len; i++) {
      var indexField = indexFields[i];

      var matcher = selector[indexField];

      if (!matcher || !Object.keys(matcher).length) { // fewer fields in user query than in index
        finish(i);
        break;
      } else if (i > 0) {
        if (Object.keys(matcher).some(isNonLogicalMatcher)) { // non-logical are ignored
          finish(i);
          break;
        }
        var usingGtlt = (
          '$gt' in matcher || '$gte' in matcher ||
          '$lt' in matcher || '$lte' in matcher);
        var previousKeys = Object.keys(selector[indexFields[i - 1]]);
        var previousWasEq = arrayEquals(previousKeys, ['$eq']);
        var previousWasSame = arrayEquals(previousKeys, Object.keys(matcher));
        var gtltLostSpecificity = usingGtlt && !previousWasEq && !previousWasSame;
        if (gtltLostSpecificity) {
          finish(i);
          break;
        }
      }

      var userOperators = Object.keys(matcher);

      var combinedOpts = null;

      for (var j = 0; j < userOperators.length; j++) {
        var userOperator = userOperators[j];
        var userValue = matcher[userOperator];

        var newOpts = getMultiFieldCoreQueryPlan(userOperator, userValue);

        if (combinedOpts) {
          combinedOpts = mergeObjects([combinedOpts, newOpts]);
        } else {
          combinedOpts = newOpts;
        }
      }

      startkey.push('startkey' in combinedOpts ? combinedOpts.startkey : COLLATE_LO);
      endkey.push('endkey' in combinedOpts ? combinedOpts.endkey : COLLATE_HI);
      if ('inclusive_start' in combinedOpts) {
        inclusiveStart = combinedOpts.inclusive_start;
      }
      if ('inclusive_end' in combinedOpts) {
        inclusiveEnd = combinedOpts.inclusive_end;
      }
    }

    var res = {
      startkey: startkey,
      endkey: endkey
    };

    if (typeof inclusiveStart !== 'undefined') {
      res.inclusive_start = inclusiveStart;
    }
    if (typeof inclusiveEnd !== 'undefined') {
      res.inclusive_end = inclusiveEnd;
    }

    return {
      queryOpts: res,
      inMemoryFields: inMemoryFields
    };
  }

  function getDefaultQueryPlan(selector) {
    //using default index, so all fields need to be done in memory
    return {
      queryOpts: {startkey: null},
      inMemoryFields: [Object.keys(selector)]
    };
  }

  function getCoreQueryPlan(selector, index) {
    if (index.defaultUsed) {
      return getDefaultQueryPlan(selector, index);
    }

    if (index.def.fields.length === 1) {
      // one field in index, so the value was indexed as a singleton
      return getSingleFieldCoreQueryPlan(selector, index);
    }
    // else index has multiple fields, so the value was indexed as an array
    return getMultiFieldQueryOpts(selector, index);
  }

  function planQuery(request, indexes) {

    var selector = request.selector;
    var sort = request.sort;

    var userFieldsRes = getUserFields(selector, sort);

    var userFields = userFieldsRes.fields;
    var sortOrder = userFieldsRes.sortOrder;
    var index = findBestMatchingIndex(selector, userFields, sortOrder, indexes, request.use_index);

    var coreQueryPlan = getCoreQueryPlan(selector, index);
    var queryOpts = coreQueryPlan.queryOpts;
    var coreInMemoryFields = coreQueryPlan.inMemoryFields;

    var inMemoryFields = getInMemoryFields(coreInMemoryFields, index, selector, userFields);

    var res = {
      queryOpts: queryOpts,
      index: index,
      inMemoryFields: inMemoryFields
    };
    return res;
  }

  function indexToSignature(index) {
    // remove '_design/'
    return index.ddoc.substring(8) + '/' + index.name;
  }

  function doAllDocs(db, originalOpts) {
    var opts = clone(originalOpts);

    // CouchDB responds in weird ways when you provide a non-string to _id;
    // we mimic the behavior for consistency. See issue66 tests for details.

    if (opts.descending) {
      if ('endkey' in opts && typeof opts.endkey !== 'string') {
        opts.endkey = '';
      }
      if ('startkey' in opts && typeof opts.startkey !== 'string') {
        opts.limit = 0;
      }
    } else {
      if ('startkey' in opts && typeof opts.startkey !== 'string') {
        opts.startkey = '';
      }
      if ('endkey' in opts && typeof opts.endkey !== 'string') {
        opts.limit = 0;
      }
    }
    if ('key' in opts && typeof opts.key !== 'string') {
      opts.limit = 0;
    }

    return db.allDocs(opts)
    .then(function (res) {
      // filter out any design docs that _all_docs might return
      res.rows = res.rows.filter(function (row) {
        return !/^_design\//.test(row.id);
      });
      return res;
    });
  }

  function find$1(db, requestDef, explain) {
    if (requestDef.selector) {
      requestDef.selector = massageSelector(requestDef.selector);
    }

    if (requestDef.sort) {
      requestDef.sort = massageSort(requestDef.sort);
    }

    if (requestDef.use_index) {
      requestDef.use_index = massageUseIndex(requestDef.use_index);
    }

    validateFindRequest(requestDef);

    return getIndexes$1(db).then(function (getIndexesRes) {

      db.constructor.emit('debug', ['find', 'planning query', requestDef]);
      var queryPlan = planQuery(requestDef, getIndexesRes.indexes);
      db.constructor.emit('debug', ['find', 'query plan', queryPlan]);

      var indexToUse = queryPlan.index;

      validateSort(requestDef, indexToUse);

      var opts = $inject_Object_assign({
        include_docs: true,
        reduce: false
      }, queryPlan.queryOpts);

      if ('startkey' in opts && 'endkey' in opts &&
          collate(opts.startkey, opts.endkey) > 0) {
        // can't possibly return any results, startkey > endkey
        /* istanbul ignore next */
        return {docs: []};
      }

      var isDescending = requestDef.sort &&
        typeof requestDef.sort[0] !== 'string' &&
        getValue(requestDef.sort[0]) === 'desc';

      if (isDescending) {
        // either all descending or all ascending
        opts.descending = true;
        opts = reverseOptions(opts);
      }

      if (!queryPlan.inMemoryFields.length) {
        // no in-memory filtering necessary, so we can let the
        // database do the limit/skip for us
        if ('limit' in requestDef) {
          opts.limit = requestDef.limit;
        }
        if ('skip' in requestDef) {
          opts.skip = requestDef.skip;
        }
      }

      if (explain) {
        return Promise.resolve(queryPlan, opts);
      }

      return Promise.resolve().then(function () {
        if (indexToUse.name === '_all_docs') {
          return doAllDocs(db, opts);
        } else {
          var signature = indexToSignature(indexToUse);
          return abstractMapper$1(db).query.call(db, signature, opts);
        }
      }).then(function (res) {
        if (opts.inclusive_start === false) {
          // may have to manually filter the first one,
          // since couchdb has no true inclusive_start option
          res.rows = filterInclusiveStart(res.rows, opts.startkey, indexToUse);
        }

        if (queryPlan.inMemoryFields.length) {
          // need to filter some stuff in-memory
          res.rows = filterInMemoryFields(res.rows, requestDef, queryPlan.inMemoryFields);
        }

        var resp = {
          docs: res.rows.map(function (row) {
            var doc = row.doc;
            if (requestDef.fields) {
              return pick$1(doc, requestDef.fields);
            }
            return doc;
          })
        };

        if (indexToUse.defaultUsed) {
          resp.warning = 'no matching index found, create an index to optimize query time';
        }

        return resp;
      });
    });
  }

  function explain$1(db, requestDef) {
    return find$1(db, requestDef, true)
    .then(function (queryPlan) {
      return {
        dbname: db.name,
        index: queryPlan.index,
        selector: requestDef.selector,
        range: {
          start_key: queryPlan.queryOpts.startkey,
          end_key: queryPlan.queryOpts.endkey
        },
        opts: {
          use_index: requestDef.use_index || [],
          bookmark: "nil", //hardcoded to match CouchDB since its not supported,
          limit: requestDef.limit,
          skip: requestDef.skip,
          sort: requestDef.sort || {},
          fields: requestDef.fields,
          conflicts: false, //hardcoded to match CouchDB since its not supported,
          r: [49] // hardcoded to match CouchDB since its not support
        },
        limit: requestDef.limit,
        skip: requestDef.skip || 0,
        fields: requestDef.fields
      };
    });
  }

  function deleteIndex$1(db, index) {

    if (!index.ddoc) {
      throw new Error('you must supply an index.ddoc when deleting');
    }

    if (!index.name) {
      throw new Error('you must supply an index.name when deleting');
    }

    var docId = index.ddoc;
    var viewName = index.name;

    function deltaFun(doc) {
      if (Object.keys(doc.views).length === 1 && doc.views[viewName]) {
        // only one view in this ddoc, delete the whole ddoc
        return {_id: docId, _deleted: true};
      }
      // more than one view here, just remove the view
      delete doc.views[viewName];
      return doc;
    }

    return upsert(db, docId, deltaFun).then(function () {
      return abstractMapper$1(db).viewCleanup.apply(db);
    }).then(function () {
      return {ok: true};
    });
  }

  var createIndexAsCallback = callbackify(createIndex$1);
  var findAsCallback = callbackify(find$1);
  var explainAsCallback = callbackify(explain$1);
  var getIndexesAsCallback = callbackify(getIndexes$1);
  var deleteIndexAsCallback = callbackify(deleteIndex$1);

  var plugin = {};
  plugin.createIndex = toPromise(function (requestDef, callback) {

    if (typeof requestDef !== 'object') {
      return callback(new Error('you must provide an index to create'));
    }

    var createIndex$$1 = isRemote(this) ?
      createIndex : createIndexAsCallback;
    createIndex$$1(this, requestDef, callback);
  });

  plugin.find = toPromise(function (requestDef, callback) {

    if (typeof callback === 'undefined') {
      callback = requestDef;
      requestDef = undefined;
    }

    if (typeof requestDef !== 'object') {
      return callback(new Error('you must provide search parameters to find()'));
    }

    var find$$1 = isRemote(this) ? find : findAsCallback;
    find$$1(this, requestDef, callback);
  });

  plugin.explain = toPromise(function (requestDef, callback) {

    if (typeof callback === 'undefined') {
      callback = requestDef;
      requestDef = undefined;
    }

    if (typeof requestDef !== 'object') {
      return callback(new Error('you must provide search parameters to explain()'));
    }

    var find$$1 = isRemote(this) ? explain : explainAsCallback;
    find$$1(this, requestDef, callback);
  });

  plugin.getIndexes = toPromise(function (callback) {

    var getIndexes$$1 = isRemote(this) ? getIndexes : getIndexesAsCallback;
    getIndexes$$1(this, callback);
  });

  plugin.deleteIndex = toPromise(function (indexDef, callback) {

    if (typeof indexDef !== 'object') {
      return callback(new Error('you must provide an index to delete'));
    }

    var deleteIndex$$1 = isRemote(this) ?
      deleteIndex : deleteIndexAsCallback;
    deleteIndex$$1(this, indexDef, callback);
  });

  /* global PouchDB */

  if (typeof PouchDB === 'undefined') {
    guardedConsole('error', 'pouchdb-find plugin error: ' +
      'Cannot find global "PouchDB" object! ' +
      'Did you remember to include pouchdb.js?');
  } else {
    PouchDB.plugin(plugin);
  }

  }).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
  },{"1":1,"2":2,"3":3,"4":4,"5":5,"6":6}]},{},[11]);


const CACHE_NAME = "cache_v1";
const datacache = "datacache_v1";
const UrlsToCache =[
  '/index.html',
  '/assets/logo.jpg',
  '/assets/searchicon.png',
  '/assets/nigeria.png',
  '/assets/world.png',
  '/assets/guardian.png'



];
  var db = new PouchDB('my_database');

  const dbget= async (id)=>{
    console.log('i am getting d from indexed db');
    try{

  /*  var idi = new Date().getTime();

    getresponse = await db.createIndex({
        index: {
          fields: ['time']
        }
      }).then(function () {
        return db.find({
          selector: {
            url:id,
            id: {$gt: '1' }
          },
          sort: ['id'],
  limit: 1

        });
      });

    */  getresponse = await db.get(id);
      console.log(getresponse);
      return getresponse;
    }
    catch{(e)=>{
      console.log(e);
    }}
  }

  const dbput= async(puttime)=>{
    console.log('i am putting time into indexed db');

  var id=puttime._id;
    getresponse = await dbget(id);
    console.log(getresponse);
    try{
  if(getresponse !== undefined ){
    console.log("i have been stored before ");
    todaydate = new Date();
    console.log(getresponse);
    getresponse.time= todaydate.getTime();
    db.put(getresponse);}else{
      console.log(puttime);
      tellthem = await db.put(puttime);
      console.log(tellthem);
    }
  }catch{(e)=>{
  console.log(e);
  }

  }

  }
self.addEventListener('install', installer=>{
console.log('installing');
const done = async ()=>{
  const cache = await caches.open(CACHE_NAME);

  return cache.addAll(UrlsToCache);

}

  installer.waitUntil(done())

})



self.addEventListener('activate', activator=>{
const currentCache = [CACHE_NAME, datacache];

console.log('activating');
const done = async ()=>{
  const names = await caches.keys();
  return Promise.all(names.map(name=>{
    if(!currentCache.includes(name)){
      return caches.delete(name);
    }
  }))
}


  activator.waitUntil(done())
})

self.addEventListener('fetch', fetchEvent=>{
  console.log('i am in fetch for'+fetchEvent.request.url);
  const url = fetchEvent.request.url;
getResponse = async(request)=>{
  let response;
  if(url.startsWith('https://eventregistry.org/api/v1/article/getArticles') || url.startsWith('https://newsapi.org/v2/')){
  /*  if(localStorage['time'] != "undefined"){*/
  console.log('url starts with it o');
  let time='';
    former_time =  await dbget(url);
    console.log(former_time);
    if(former_time != undefined){
  let  new_time= new Date();

    new_time = new_time.getTime();
    dif_time= new_time-former_time.time;
    time = dif_time/(1000*60*20);
console.log(time);}
if(time != '' && time>1){console.log('time is greater than 20 mins, so i m going to network first')
    try{
      response = await fetch(request);
      if(response && response.status == 200){
    console.log('File from network, returning network version');
    const clone = response.clone();
    const cache = await caches.open(CACHE_NAME);
    cache.put(url, clone);
    var iding=new Date().getTime();
    iding= 1908036012583 - iding;

    puttime={
    _id: request.url,
    time:  new Date().getTime()
  };
    console.log('i am inserting time into indexed db');

    dbput(puttime);
    return response;
      }
    if(response && response.status === 404){
      return caches.match('/assets/pagenotfound.html'); }
      if(!response){
        response = await caches.match(request);

        if(response && response.status == 200){
      console.log('File in cache, returning cached version');
          return response;
        }else{console.log('no network AND NO cached files')}
      }
    }catch(e){
    console.log(e);
    response = await caches.match(request);
    if(response && response.status == 200){
    console.log('File in cache, returning cached version');
      return response;
    }else{console.log('no network AND NO cached files')}
    }}else{//else if the time is less than 20 mins

  console.log('time is less than 20 mins, so i am returning cached')
    response = await caches.match(request);

    if(response && response.status == 200){
    console.log('my cache is successful');
    console.log('File in cache, returning cached version');


          return response;
    }
    try{
      console.log('i have gone to work');
      response = await fetch(request);
      console.log(response);
      if(response && response.status == 404){
      return caches.match('/assets/pagenotfound.html'); }
    }catch(e){
      return "hi";

    }
    const clone = response.clone();
    const cache = await caches.open(CACHE_NAME);
    cache.put(url, clone);
    var iding=new Date().getTime();
    iding=1908036012583-iding;
    var puttime={};
    puttime={
    _id: request.url,
    time: new Date().getTime()
    }
    console.log('i am inserting time from indexed db');

    dbput(puttime);
    return response;

 }

  }else{
  response = await caches.match(request);

  if(response && response.status == 200){
console.log('File in cache, returning cached version');
    return response;
  }
  try{
    response = await fetch(request);
    if(response && response.status === 404){
    return caches.match('/assets/pagenotfound.html'); }
  }catch(e){
    return "hi";

  }
  const clone = response.clone();
  const cache = await caches.open(CACHE_NAME);
  cache.put(url, clone);
  return response;
}
}


  fetchEvent.respondWith(getResponse(fetchEvent.request));
})
