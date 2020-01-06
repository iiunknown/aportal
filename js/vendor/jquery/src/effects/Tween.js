define(["../core","../css"],function(n){"use strict";function p(t,o,e,s,i){return new p.prototype.init(t,o,e,s,i)}((n.Tween=p).prototype={constructor:p,init:function(t,o,e,s,i,p){this.elem=t,this.prop=e,this.easing=i||n.easing._default,this.options=o,this.start=this.now=this.cur(),this.end=s,this.unit=p||(n.cssNumber[e]?"":"px")},cur:function(){var t=p.propHooks[this.prop];return t&&t.get?t.get(this):p.propHooks._default.get(this)},run:function(t){var o,e=p.propHooks[this.prop];return this.options.duration?this.pos=o=n.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration):this.pos=o=t,this.now=(this.end-this.start)*o+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),e&&e.set?e.set(this):p.propHooks._default.set(this),this}}).init.prototype=p.prototype,(p.propHooks={_default:{get:function(t){var o;return 1!==t.elem.nodeType||null!=t.elem[t.prop]&&null==t.elem.style[t.prop]?t.elem[t.prop]:(o=n.css(t.elem,t.prop,""))&&"auto"!==o?o:0},set:function(t){n.fx.step[t.prop]?n.fx.step[t.prop](t):1!==t.elem.nodeType||null==t.elem.style[n.cssProps[t.prop]]&&!n.cssHooks[t.prop]?t.elem[t.prop]=t.now:n.style(t.elem,t.prop,t.now+t.unit)}}}).scrollTop=p.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)}},n.easing={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2},_default:"swing"},n.fx=p.prototype.init,n.fx.step={}});