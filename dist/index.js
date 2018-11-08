!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.jscalpel={})}(this,function(e){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=(function(){function e(e){this.value=e}function t(t){function n(o,a){try{var u=t[o](a),i=u.value;i instanceof e?Promise.resolve(i.value).then(function(e){n("next",e)},function(e){n("throw",e)}):r(u.done?"return":"normal",u.value)}catch(e){r("throw",e)}}function r(e,t){switch(e){case"return":o.resolve({value:t,done:!0});break;case"throw":o.reject(t);break;default:o.resolve({value:t,done:!1})}(o=o.next)?n(o.key,o.arg):a=null}var o,a;this._invoke=function(e,t){return new Promise(function(r,u){var i={key:e,arg:t,resolve:r,reject:u,next:null};a?a=a.next=i:(o=a=i,n(e,t))})},"function"!=typeof t.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(e){return this._invoke("next",e)},t.prototype.throw=function(e){return this._invoke("throw",e)},t.prototype.return=function(e){return this._invoke("return",e)}}(),function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}),r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=Object.prototype.toString,a=function(e){return"[object Object]"===o.call(e)},u=function(){function e(t){var r=t.target,o=t.returnedValue,a=t.error;n(this,e),this._target=r,this._error=a,this._returnedValue=o}return r(e,[{key:"_getValueByPath",value:function(e){for(var t=void 0,n=this._target,r=this._fallbackpath(e).split("."),o=0,a=r.length;o<a;o++)try{t=t?t[r[o]]:n[r[o]]}catch(e){return}return t}},{key:"_getValue",value:function(e){var t=void 0,n=[],r=this;return"string"==typeof e&&e.length>0?this._getValueByPath(e):"[object Array]"===o.call(e)?(e.forEach(function(e,o){"string"==typeof e&&(t=r._getValueByPath(e),n.push(t))}),0===n.length?null:n):null}},{key:"get",value:function(e){return e?this._getValueByPath(e):this._returnedValue}},{key:"_fallbackpath",value:function(e){return"string"!=typeof e?"":e.replace(/\s/g,"")}},{key:"_extend",value:function(e,t){if(a(e))for(var n=e,r=t.split("."),o=r.length,u=0;u<o;u++)void 0===n[r[u]]&&(n[r[u]]={}),n=(arguments.length<=2?0:arguments.length-2)>0&&u===o-1?n[r[u]]=arguments.length<=2?void 0:arguments[2]:n[r[u]]}},{key:"_setOrDel",value:function(e,t){var n=this._fallbackpath(e);""!==n?this._extend(this._target,n,t):"function"==typeof this._error&&this._error(this._target,e)}},{key:"set",value:function(e,t){var n=this;a(e)?Object.keys(e).forEach(function(t,r){n._setOrDel(t,e[t])}):this._setOrDel(e,t)}},{key:"has",value:function(e){return!!this._getValueByPath(e)}},{key:"del",value:function(e){var t=this;e&&(Array.isArray(e)?e.forEach(function(e,n){t._setOrDel(e,void 0)}):t._setOrDel(e,void 0))}}]),e}(),i=function(e,t){var n=e.target,r=e.path,a=e.keys,i=e.dynamicKeys,c=e.prefix,l=e.callback,f=e.success,s=e.deep,y=e.plugins,p=e.error,h=f||l,v=!!c,g=function e(t){var n={},r=[];return"[object Object]"===o.call(t)?(Object.keys(t).forEach(function(a,u){Array.isArray(t[a])?(t[a].forEach(function(e,t){r.push(e)}),n[a]=r,r=[]):o.call("[object Object]"===t[a])&&(n[a]=e(t[a]))}),n):t},d=function(e){return c&&v?c+"."+e:""+e},b=function(e){for(var t=e.path,n=e.target,r=d(t).split("."),o=0,a=r.length;o<a;o++)try{n=n[r[o]]}catch(e){return}return n},m=function(e){var t=e.plugins,n=e.name,r={value:e.value,name:n};t&&Array.isArray(t)&&t.length&&t.forEach(function(e,t){e(r)})},_=void 0,k=void 0,j=function(e){var t=null;try{if(t="string"==typeof e?JSON.parse(e):e,s&&(t=g(t)),"[object Object]"!==o.call(t)&&!Array.isArray(t))return void("function"==typeof p&&p(t))}catch(e){return void("function"==typeof p&&p(t,e))}return t}(n),O=[],x=h?function(e){var t=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,n=/=[^,]+/gm,r=/=>.*$/gm,o=e.toString().replace(t,"").replace(r,"").replace(n,""),a=o.slice(o.indexOf("(")+1,o.indexOf(")")).match(/([^\s,]+)/g);return null===a?[]:a}(h):[];return"string"==typeof(r=function(e){var t=e.path,n=void 0===t?"":t,r=e.keys,o=e.dynamicKeys;return r||"function"==typeof o?n=r||o(c):"function"==typeof n&&(n=n(c)),n}({path:r,keys:a,dynamicKeys:i}))&&r.length>0?(k=b({path:r,target:n}),m({plugins:y,name:x[0],value:k}),_=h&&"function"==typeof h?h.call(null,k,j,r,t):h):"[object Array]"===o.call(r)&&(r.forEach(function(e,t){"string"==typeof e&&(k=b({path:e,target:n}),m({plugins:y,value:k,name:x[t]}),O.push(k)),k=void 0}),O.push(j,r,t),_=h&&"function"==typeof h?h.apply(null,O):h),"function"==typeof l||"function"==typeof f?_:new u({target:j,error:p})};e.default=i,e.jscalpelType=function(e){var n=e.value,r=e.name;return-1!==["string","undefined","function","number","boolean"].indexOf(void 0===n?"undefined":t(n))?{value:n,type:void 0===n?"undefined":t(n)}:n+""=="null"?{value:n,type:"null"}:Array.isArray(n)?{value:n,type:"array",length:n.length}:"[object Object]"===Object.prototype.toString.call(n)?{value:n,name:r,type:"object",keys:Object.keys(n),values:Object.values(n)}:void 0},e.jscalpelLogic=function(e){return function(t){var n=t.value,r=t.name;return e[r]&&i({target:e,prefix:""+r,path:["match","success"],callback:function(e,t){return e({value:n,name:r})&&t({value:n,name:r}),n}}),n}},e.jscalpelORM=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1],n=arguments[2];if(!a(e))return console.error("source为"+e+",不是对象"),n;if(!a(t))return console.error("rules为"+t+",不是对象"),n;try{var r=Object.keys(t),o=t._extraInfo||{},u={},c=i({target:u}),l=i({target:e});return r.forEach(function(e,n){"_extraInfo"!==e&&c.set(e,void 0===l.get(e)?l.get(t[e]):l.get(e))}),Object.assign(u,o)}catch(e){return console.error("请检查source和rules配置，两者都必须为对象!"),n}},e.get=function(e,t,n){var r=i({target:e}).get(t);return void 0===r?n:r},Object.defineProperty(e,"__esModule",{value:!0})});
