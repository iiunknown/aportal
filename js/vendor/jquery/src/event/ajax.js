define(["../core","../event"],function(n){"use strict";n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,e){n.fn[e]=function(a){return this.on(e,a)}})});