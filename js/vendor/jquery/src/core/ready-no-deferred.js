define(["../core","../var/document","../var/isFunction"],function(n,t,d){"use strict";function i(e){window.setTimeout(function(){e.call(t,n)})}var o=[],a=function(e){o.push(e)};function e(){t.removeEventListener("DOMContentLoaded",e),window.removeEventListener("load",e),n.ready()}n.fn.ready=function(e){return a(e),this},n.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--n.readyWait:n.isReady)||(n.isReady=!0)!==e&&0<--n.readyWait||(a=function(e){for(o.push(e);o.length;)e=o.shift(),d(e)&&i(e)})()}}),n.ready.then=n.fn.ready,"complete"===t.readyState||"loading"!==t.readyState&&!t.documentElement.doScroll?window.setTimeout(n.ready):(t.addEventListener("DOMContentLoaded",e),window.addEventListener("load",e))});