define(["../core","../data/var/dataPriv","./support","../event","./trigger"],function(t,i,e){"use strict";return e.focusin||t.each({focus:"focusin",blur:"focusout"},function(n,s){function c(e){t.event.simulate(s,e.target,t.event.fix(e))}t.event.special[s]={setup:function(){var e=this.ownerDocument||this,t=i.access(e,s);t||e.addEventListener(n,c,!0),i.access(e,s,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=i.access(e,s)-1;t?i.access(e,s,t):(e.removeEventListener(n,c,!0),i.remove(e,s))}}}),t});