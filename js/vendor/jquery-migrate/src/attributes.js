var oldRemoveAttr=jQuery.fn.removeAttr,oldToggleClass=jQuery.fn.toggleClass,rmatchNonSpace=/\S+/g;jQuery.fn.removeAttr=function(t){var r=this;return jQuery.each(t.match(rmatchNonSpace),function(t,e){jQuery.expr.match.bool.test(e)&&(migrateWarn("jQuery.fn.removeAttr no longer sets boolean properties: "+e),r.prop(e,!1))}),oldRemoveAttr.apply(this,arguments)},jQuery.fn.toggleClass=function(e){return void 0!==e&&"boolean"!=typeof e?oldToggleClass.apply(this,arguments):(migrateWarn("jQuery.fn.toggleClass( boolean ) is deprecated"),this.each(function(){var t=this.getAttribute&&this.getAttribute("class")||"";t&&jQuery.data(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":jQuery.data(this,"__className__")||"")}))};