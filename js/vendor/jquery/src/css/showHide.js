define(["../core","../data/var/dataPriv","../css/var/isHiddenWithinTree"],function(c,y,f){"use strict";var p={};function e(e,n){for(var t,i,s,o,r,d,l,a=[],h=0,u=e.length;h<u;h++)(i=e[h]).style&&(t=i.style.display,n?("none"===t&&(a[h]=y.get(i,"display")||null,a[h]||(i.style.display="")),""===i.style.display&&f(i)&&(a[h]=(l=r=o=void 0,r=(s=i).ownerDocument,d=s.nodeName,(l=p[d])||(o=r.body.appendChild(r.createElement(d)),l=c.css(o,"display"),o.parentNode.removeChild(o),"none"===l&&(l="block"),p[d]=l)))):"none"!==t&&(a[h]="none",y.set(i,"display",t)));for(h=0;h<u;h++)null!=a[h]&&(e[h].style.display=a[h]);return e}return c.fn.extend({show:function(){return e(this,!0)},hide:function(){return e(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){f(this)?c(this).show():c(this).hide()})}}),e});