!function(t){var e=/android/gi.test(navigator.appVersion),n=function(){var n=t.localStorage;return e&&(n=os.localStorage()),n},r=function(t,e,n,r){return"function"==typeof e&&(r=n,n=e,e=void 0),"function"!=typeof n&&(r=n,n=void 0),{url:t,data:e,fnSuc:n,dataType:r}},i=function(t){var e=this,n=0;for(n=0;n<t.length;n++)e[n]=t[n];return e.length=t.length,this},o=function(e,n){var r=[],o=0;if(e&&!n&&e instanceof i)return e;if(e)if("string"==typeof e){var s,a,u;if(e=u=e.trim(),u.indexOf("<")>=0&&u.indexOf(">")>=0){var f="div";for(0===u.indexOf("<li")&&(f="ul"),0===u.indexOf("<tr")&&(f="tbody"),(0===u.indexOf("<td")||0===u.indexOf("<th"))&&(f="tr"),0===u.indexOf("<tbody")&&(f="table"),0===u.indexOf("<option")&&(f="select"),a=document.createElement(f),a.innerHTML=u,o=0;o<a.childNodes.length;o++)r.push(a.childNodes[o])}else{if(n||"#"!==e[0]||e.match(/[ .<>:~]/)){var l=document;n&&(l=n.nodeType&&1===n.nodeType?n:document.querySelectorAll(n)[0]),s=l.querySelectorAll(e)}else s=[document.getElementById(e.split("#")[1])];for(o=0;o<s.length;o++)s[o]&&r.push(s[o])}}else if(e.nodeType||e===t||e===document)r.push(e);else if(e.length>0&&e[0].nodeType)for(o=0;o<e.length;o++)r.push(e[o]);return new i(r)};o.trim=function(t){return t?(t+="",t.trim()):""},o.isElement=function(t){return!(!t||!t.nodeType||1!=t.nodeType)},o.isArray=function(t){return Array.isArray(t)},o.isEmptyObject=function(t){return"{}"===JSON.stringify(t)?!0:!1},o.contains=function(t,e){if(document.documentElement.contains)return t!==e&&t.contains(e);for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},o.setStorage=function(t,e){if(2===arguments.length){var r=e;"object"==typeof r?(r=JSON.stringify(r),r="obj-"+r):r="str-"+r;var i=n();i&&i.setItem(t,r)}},o.getStorage=function(t){var e=n();if(e){var r=e.getItem(t);if(!r)return;if(0===r.indexOf("obj-"))return r=r.slice(4),JSON.parse(r);if(0===r.indexOf("str-"))return r.slice(4)}},o.rmStorage=function(t){var e=n();e&&t&&e.removeItem(t)},o.clearStorage=function(){var t=n();t&&t.clear()},o.fixIos7Bar=function(t){var e=o(t)[0],n=api.systemType;if("ios"==n){var r=api.systemVersion,i=parseInt(r,10),s=api.fullScreen,a=api.iOS7StatusBarAppearance;i>=7&&!s&&a&&(e.style.paddingTop="20px")}},o.fixStatusBar=function(t){var e=o(t)[0],n=api.systemType;if("ios"==n)o.fixIos7Bar(e);else if("android"==n){var r=api.systemVersion;r=parseFloat(r),r>=4.4&&(e.style.paddingTop="25px")}},o.post=function(){var t=r.apply(null,arguments),e={},n=t.fnSuc;if(t.url&&(e.url=t.url),t.data&&(e.data=t.data),t.dataType){var i=t.dataType.toLowerCase();("text"==i||"json"==i)&&(e.dataType=i)}else e.dataType="json";e.method="post",api.ajax(e,function(t,e){t&&n&&n(t)})},o.get=function(){var t=r.apply(null,arguments),e={},n=t.fnSuc;if(t.url&&(e.url=t.url),t.dataType){var i=t.dataType.toLowerCase();("text"==i||"json"==i)&&(e.dataType=i)}else e.dataType="text";e.method="get",api.ajax(e,function(t,e){t&&n&&n(t)})},i.prototype={constructor:i,on:function(t,e,n){n=n||!1;var r=this,i=0;for(i;i<r.length;i++)r[i].addEventListener(t,e,n);return r},off:function(t,e,n){n=n||!1;var r=this,i=0;for(i;i<r.length;i++)r[i].removeEventListener(t,e,n);return r},one:function(t,e,n){n=n||!1;var r=this,i=function(){e&&e(),r.off(t,i,n)};return r.on(t,i,n)},trigger:function(t,e){for(var n=0;n<this.length;n++){var r;try{r=new CustomEvent(t,{detail:e,bubbles:!0,cancelable:!0})}catch(i){r=document.createEvent("Event"),r.initEvent(t,!0,!0),r.detail=e}this[n].dispatchEvent(r)}return this},eq:function(t){t=parseInt(t);var e=this.length;return new i(t>=0&&e>t?[this[t]]:[])},prev:function(){return new i(this.length>0?this[0].previousElementSibling?[this[0].previousElementSibling]:[]:[])},next:function(){return new i(this.length>0?this[0].nextElementSibling?[this[0].nextElementSibling]:[]:[])},closest:function(t){var e,n=this[0],r=!1,s=function(n){e=o(t,n.parentNode);var i=0,s=e.length;for(i;s>i;i++)if(e[i]===n)return r=e[i];return r};for(r=s(n);!r;){if(n=n.parentNode,n===document.body||n.nodeType==n.DOCUMENT_NODE)return new i([]);r=s(n)}return new i(r?[r]:[])},remove:function(){for(var t=0;t<this.length;t++)this[t].parentNode&&this[t].parentNode.removeChild(this[t]);return this},attr:function(t,e){if(1!==arguments.length){var n=0,r=this.length;for(n;r>n;n++)this[n].setAttribute(t,e);return this}return this[0]?this[0].getAttribute(t):void 0},removeAttr:function(t){var e=0,n=this.length;for(e;n>e;e++)this[e].removeAttribute(t);return this},hasClass:function(t){return this[0]?this[0].classList.contains(t):!1},addClass:function(t){for(var e=t.split(" "),n=0,r=e.length;r>n;n++)for(var i=0,o=this.length;o>i;i++)this[i].classList.add(e[n]);return this},removeClass:function(t){for(var e=t.split(" "),n=0,r=e.length;r>n;n++)for(var i=0,o=this.length;o>i;i++)this[i].classList.remove(e[n]);return this},toggleClass:function(t){for(var e=t.split(" "),n=0,r=e.length;r>n;n++)for(var i=0,o=this.length;o>i;i++)this[i].classList.toggle(e[n]);return this},val:function(t){if("undefined"!=typeof t){for(var e=function(t,e){switch(t.tagName){case"SELECT":t.options[t.selectedIndex].value=e;break;case"INPUT":t.value=e;break;case"TEXTAREA":t.value=e}},n=0,r=this.length;r>n;n++)e(this[n],t);return this}var i=this[0];switch(i.tagName){case"SELECT":var t=i.options[i.selectedIndex].value;return t;default:return i.value}},prepend:function(t){var e;o.isElement(t)?e=t.outerHTML:"string"==typeof t&&(e=t);for(var n=0,r=this.length;r>n;n++)this[n].insertAdjacentHTML("afterbegin",e);return this},append:function(t){var e;o.isElement(t)?e=t.outerHTML:"string"==typeof t&&(e=t);for(var n=0,r=this.length;r>n;n++)this[n].insertAdjacentHTML("beforeend",e);return this},before:function(t){var e;o.isElement(t)?e=t.outerHTML:"string"==typeof t&&(e=t);for(var n=0,r=this.length;r>n;n++)this[n].insertAdjacentHTML("beforebegin",e);return this},after:function(t){var e;o.isElement(t)?e=t.outerHTML:"string"==typeof t&&(e=t);for(var n=0,r=this.length;r>n;n++)this[n].insertAdjacentHTML("afterend",e);return this},html:function(t){if(t){for(var e=0,n=this.length;n>e;e++)this[e].innerHTML=t;return this}return this[0].innerHTML},text:function(t){if(t){for(var e=0,n=this.length;n>e;e++)this[e].textContent=t;return this}return this[0].textContent},offset:function(){var t=this[0],e=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft),n=Math.max(document.documentElement.scrollTop,document.body.scrollTop),r=t.getBoundingClientRect();return{l:r.left+e,t:r.top+n,w:t.offsetWidth,h:t.offsetHeight}},css:function(e){if(!("string"==typeof e&&e.indexOf(":")>0)){var n=t.getComputedStyle(this[0],null);return n.getPropertyValue(e)}for(var r=0,i=this.length;i>r;r++)this[r].style+=";"+e}},t.$api=o}(window);