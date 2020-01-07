!function(a){"use strict";a.HSCore.components.HSProgressBar={_baseConfig:{bounds:-100,debounce:10,time:1e3,fps:60,rtl:!1,direction:"horizontal",useProgressElement:!1,indicatorSelector:"progress-bar-indicator",moveElementSelector:!1,moveElementTo:"currentPosition",onChange:function(e){},beforeUpdate:function(){},afterUpdate:function(){},onMoveElementChange:function(e){},beforeMoveElementUpdate:function(){},afterMoveElementUpdate:function(){}},_pageCollection:a(),init:function(e,t){if(e&&a(e).length)return this.extendHorizontalProgressBar(),this.extendVerticalProgressBar(),this._initProgressBar(e,t&&a.isPlainObject(t)?a.extend(!0,{},this._baseConfig,t):this._baseConfig)},_initProgressBar:function(e,o){var i=this,r=a();return appear({bounds:o.bounds,debounce:o.debounce,init:function(){a(e).each(function(e,t){var n=a(t);"horizontal"===o.direction?n.data("ProgressBar",new i.HorizontalProgressBar(n,o)):n.data("ProgressBar",new i.VerticalProgressBar(n,o)),r=r.add(n),i._pageCollection=i._pageCollection.add(n)})},elements:function(){return document.querySelectorAll(e)},appear:function(e){a(e).data("ProgressBar").update(a(e).data("value"))}}),r},HorizontalProgressBar:function(e,t){this.element=e,this.indicator=this.element.find(t.indicatorSelector),this.config=t,this.moveElement=t.moveElementSelector?e.parent().find(t.moveElementSelector):a(),this.moveElement.length&&(t.rtl?this.moveElement.css({left:"auto",right:0,"margin-right":this.moveElement.outerWidth()/-2}):this.moveElement.css({left:0,"margin-left":this.moveElement.outerWidth()/-2})),this.config.useProgressElement?(this.element.data("value",this.element.attr("value")),this.element.attr("value",0)):(this.element.data("value",this.indicator.length?Math.round(this.indicator.outerWidth()/this.element.outerWidth()*100):0),this.indicator.css("width","0%"))},VerticalProgressBar:function(e,t){this.element=e,this.config=t,this.indicator=e.find(t.indicatorSelector),this.indicator.length&&(e.data("value",parseInt(this.indicator.css("height"),10)/this.indicator.parent().outerHeight()*100),this.indicator.css("height",0))},extendHorizontalProgressBar:function(){this.HorizontalProgressBar.prototype.update=function(t){var n=this;if(this.config.useProgressElement){var e=this.config.time/this.config.fps,o=parseInt(t/e,10),i=0;n=this;if(0==o&&(o=1),this.config.beforeUpdate.call(this.element),this.moveElement.length&&this.config.beforeMoveElementUpdate.call(this.moveElement),n.config.moveElementSelector&&"end"==n.config.moveElementTo){var r=0,a=parseInt(100/e,10);0==a&&(a=1);var l=setInterval(function(){n.moveSubElement(r+=a),n.moveElement.length&&n.config.onMoveElementChange.call(n.moveElement,r+=a),100<r&&(clearInterval(l),n.moveSubElement(100),n.moveElement.length&&n.config.afterMoveElementUpdate.call(n.moveElement))},e)}this.element.data("intervalId",setInterval(function(){var e=i+=o;n.element.attr("value",e),n.config.onChange.call(n.element,e),n.config.moveElementSelector&&"currentPosition"==n.config.moveElementTo&&n.moveSubElement(e),t<i&&(n.element.attr("value",t),n.config.moveElementSelector&&"currentPosition"==n.config.moveElementTo&&n.moveSubElement(t),clearInterval(n.element.data("intervalId")),n.config.afterUpdate.call(n.element))},e))}else this.indicator.length&&this.indicator.stop().animate({width:t+"%"},{duration:n.config.time,complete:function(){n.config.afterUpdate.call(n.element)}})},this.HorizontalProgressBar.prototype.moveSubElement=function(e,t){if(this.moveElement.length){this.moveElement.css(this.config.rtl?"right":"left",e+"%")}}},extendVerticalProgressBar:function(){this.VerticalProgressBar.prototype.update=function(e){this.indicator.stop().animate({height:e+"%"})}},get:function(){return this._pageCollection},getAPI:function(e){return this._pageCollection.eq(e).length?this._pageCollection.eq(e).data("ProgressBar"):null}}}(jQuery);