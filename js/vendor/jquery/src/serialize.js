define(["./core","./core/toType","./manipulation/var/rcheckableType","./var/isFunction","./core/init","./traversing","./attributes/prop"],function(a,s,n,u){"use strict";var o=/\[\]$/,r=/\r?\n/g,t=/^(?:submit|button|image|reset|file)$/i,i=/^(?:input|select|textarea|keygen)/i;function c(t,e,r,i){var n;if(Array.isArray(e))a.each(e,function(e,n){r||o.test(t)?i(t,n):c(t+"["+("object"==typeof n&&null!=n?e:"")+"]",n,r,i)});else if(r||"object"!==s(e))i(t,e);else for(n in e)c(t+"["+n+"]",e[n],r,i)}return a.param=function(e,n){function t(e,n){var t=u(n)?n():n;i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==t?"":t)}var r,i=[];if(Array.isArray(e)||e.jquery&&!a.isPlainObject(e))a.each(e,function(){t(this.name,this.value)});else for(r in e)c(r,e[r],n,t);return i.join("&")},a.fn.extend({serialize:function(){return a.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=a.prop(this,"elements");return e?a.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!a(this).is(":disabled")&&i.test(this.nodeName)&&!t.test(e)&&(this.checked||!n.test(e))}).map(function(e,n){var t=a(this).val();return null==t?null:Array.isArray(t)?a.map(t,function(e){return{name:n.name,value:e.replace(r,"\r\n")}}):{name:n.name,value:t.replace(r,"\r\n")}}).get()}}),a});