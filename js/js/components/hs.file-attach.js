!function(c){"use strict";c.HSCore.components.HSFileAttach={_baseConfig:{},pageCollection:c(),init:function(t,i){if(this.collection=t&&c(t).length?c(t):c(),c(t).length)return this.config=i&&c.isPlainObject(i)?c.extend({},this._baseConfig,i):this._baseConfig,this.config.itemSelector=t,this.initFileAttach(),this.pageCollection},initFileAttach:function(){this.config;var o=this.pageCollection;this.collection.each(function(t,i){var e=c(i),n=e.data("result-text-target");e.on("change",function(){var t=c(this).val();console.log(t.replace(/.+[\\\/]/,"")),c(n).text(t.replace(/.+[\\\/]/,""))}),o=o.add(e)})}}}(jQuery);