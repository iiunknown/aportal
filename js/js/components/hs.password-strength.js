!function(o){"use strict";o.HSCore.components.HSPasswordStrength={_baseConfig:{options:{ui:{verdicts:["Very Weak","Weak","Normal","Medium","Strong","Very Strong"],container:!1,viewports:{progress:!1,verdict:!1},progressExtraCssClasses:!1}}},pageCollection:o(),init:function(t,s){if(this.collection=t&&o(t).length?o(t):o(),o(t).length)return this.config=s&&o.isPlainObject(s)?o.extend({},this._baseConfig,s):this._baseConfig,this.config.itemSelector=t,this.initHSPasswordStrength(),this.pageCollection},initHSPasswordStrength:function(){var i=this.config,n=this.pageCollection;this.collection.each(function(t,s){var e=o(s),r={ui:{verdicts:e.data("pwstrength-verdicts-texts")?JSON.parse(s.attr("data-pwstrength-verdict-texts")):i.options.ui.verdicts,container:e.data("pwstrength-container")?e.data("pwstrength-container"):i.options.ui.container,viewports:{progress:e.data("pwstrength-progress")?e.data("pwstrength-progress"):i.options.ui.viewports.progress,verdict:e.data("pwstrength-verdict")?e.data("pwstrength-verdict"):i.options.ui.viewports.verdict},progressExtraCssClasses:e.data("pwstrength-progress-extra-classes")?e.data("pwstrength-progress-extra-classes"):i.options.ui.progressExtraCssClasses}};e.pwstrength(r),n=n.add(e)})}}}(jQuery);