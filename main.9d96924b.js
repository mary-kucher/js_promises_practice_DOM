parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var n=new Promise(function(n,e){document.addEventListener("mousedown",function(){n("First promise was resolved")}),setTimeout(function(){e(new Error("First promise was rejected"))},3e3)}),e=new Promise(function(n){document.addEventListener("mousedown",function(e){var t=0===e.button,o=2===e.button;(t||o)&&n("Second promise was resolved")})}),t=new Promise(function(n){var e=!1,t=!1;document.addEventListener("mousedown",function(o){switch(o.button){case 0:e=!0;break;case 2:t=!0}e&&t&&n("Third promise was resolved")})});function o(n){document.querySelector(".messageContainer").insertAdjacentHTML("beforeend",'\n   <div class="notification notification_success"\n        data-qa="notification">'.concat(n,"</div>\n  "))}function i(n){document.querySelector(".messageContainer").insertAdjacentHTML("beforeend",'\n  <div class="notification notification_warning"\n        data-qa="notification">'.concat(n.message,"</div>\n  "))}n.then(o).catch(i),e.then(o),t.then(o);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.9d96924b.js.map