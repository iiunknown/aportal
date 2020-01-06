!function(I){"use strict";I.HSCore.components.HSSlickCarousel={_baseConfig:{autoplay:!1,infinite:!0},pageCollection:I(),init:function(a,i){if(this.collection=a&&I(a).length?I(a):I(),I(a).length)return this.config=i&&I.isPlainObject(i)?I.extend({},this._baseConfig,i):this._baseConfig,this.config.itemSelector=a,this.initSlickCarousel(),this.pageCollection},initSlickCarousel:function(){var E=this,G=(E.config,E.pageCollection);this.collection.each(function(a,i){var c=I(i),t=c.attr("id"),s=c.data("nav-for"),n=c.data("is-thumbs"),e=Boolean(c.data("is-thumbs-progress")),o=JSON.parse(i.getAttribute("data-thumbs-progress-options")),d=0,l=c.data("thumbs-progress-container"),r=c.data("arrows-classes"),p=c.data("arrow-left-classes"),f=c.data("arrow-right-classes"),h=c.data("pagi-classes"),u=c.data("pagi-helper"),g=c.data("pagi-icons"),m='<div class="js-prev '+r+" "+p+'"></div>',v='<div class="js-next '+r+" "+f+'"></div>',k=c.data("slides-show"),C=c.data("slides-scroll"),y=c.data("autoplay"),b=c.data("animation"),w=c.data("easing"),x=c.data("fade"),S=c.data("autoplay-speed"),_=c.data("rows"),T=c.data("center-mode"),$=c.data("center-padding"),P=c.data("pause-hover"),j=c.data("variable-width"),F=c.data("initial-slide"),A=c.data("vertical"),O=c.data("rtl"),H=c.data("in-effect"),N=c.data("out-effect"),J=c.data("infinite"),M=c.data("title-pos-inside"),q=c.data("focus-on-select"),z=c.data("lazy-load"),B=c.data("adaptive-height"),L=c.data("numbered-pagination"),W=JSON.parse(i.getAttribute("data-responsive"));c.find("[data-slide-type]").length&&E.videoSupport(c),c.on("init",function(a,i){I(i.$slides).css("height","auto"),n&&k>=I(i.$slides).length&&c.addClass("slick-transform-off")}),c.on("init",function(a,i){var t=I(i.$slides)[i.currentSlide],s=I(t).find("[data-scs-animation-in]");I(s).each(function(){var a=I(this).data("scs-animation-in"),i=I(this).data("scs-animation-delay"),t=I(this).data("scs-animation-duration");I(this).css({"animation-delay":i+"ms","animation-duration":t+"ms"}),I(this).addClass("animated "+a).css("opacity",1)})}),H&&N&&c.on("init",function(a,i){I(i.$slides).addClass("single-slide")}),u&&c.on("init",function(a,i){var t=c.find(".js-pagination");t.length&&t.append('<span class="u-dots-helper"></span>')}),n&&(e&&c.on("init",function(a,n){I(n.$slides).each(function(){var a='<span class="u-slick-thumb-progress"><svg version="1.1" viewBox="0 0 160 160"><path class="u-slick-thumb-progress__path" fill="transparent" stroke="'+(o&&o.color?o.color:"#000")+'" stroke-width="'+(o&&o.width?o.width:4)+'" d="M 79.98452083651917 4.000001576345426 A 76 76 0 1 1 79.89443752470656 4.0000733121155605 Z"></path></svg></span>',i=I(a),t=i.find("svg").find("path"),s=I('<style type="text/css"></style>');d=parseInt(t[0].getTotalLength()),t.css({"stroke-dashoffset":d,"stroke-dasharray":d}),s.text(".slick-current:not(.slick-initial-slide) .u-slick-thumb-progress__path {animation: dash "+(n.options.autoplaySpeed+n.options.speed)+"ms linear alternate}@keyframes dash {from {stroke-dashoffset: "+d+";} to {stroke-dashoffset: 0;}}"),i.appendTo(I(this).find(l)),s.appendTo(I(this).find(l))})}),I("#"+t).on("click",".slick-slide",function(a){a.stopPropagation();var i=I(this).data("slick-index");I("#"+t).slick("slickCurrentSlide")!==i&&I("#"+t).slick("slickGoTo",i)})),c.on("init",function(a,i){var t=c.find(".js-pagination");t.length&&I(t[0].children[0]).addClass("slick-current")}),c.on("init",function(a,i){var t=I(i.$slides)[0],s=I(t).find("[data-scs-animation-in]");I(s).each(function(){var a=I(this).data("scs-animation-in");I(this).addClass("animated "+a).css("opacity",1)})}),L&&c.on("init",function(a,i){I(L).html('<span class="u-paging__current">1</span><span class="u-paging__divider"></span><span class="u-paging__total">'+i.slideCount+"</span>")}),c.slick({autoplay:!!(y||I(s)[0]&&I(s)[0].dataset.isThumbsProgress),autoplaySpeed:S||3e3,cssEase:b||"ease",easing:w||"linear",fade:!!x,infinite:!!J,initialSlide:F?F-1:0,slidesToShow:k||1,slidesToScroll:C||1,centerMode:!!T,variableWidth:!!j,pauseOnHover:!!P,rows:_||1,vertical:!!A,verticalSwiping:!!A,rtl:!!O,centerPadding:$||0,focusOnSelect:!!q,lazyLoad:z||!1,asNavFor:s||!1,prevArrow:!!r&&m,nextArrow:!!r&&v,dots:!!h,dotsClass:"js-pagination "+h,adaptiveHeight:!!B,customPaging:function(a,i){var t=I(a.$slides[i]).data("title");return t&&g?"<span>"+t+"</span>"+g:g?"<span></span>"+g:t&&M?"<span>"+t+"</span>":t&&!M?'<span></span><strong class="u-dot-title">'+t+"</strong>":"<span></span>"},responsive:W}),I(s)[0]&&I(s)[0].dataset.isThumbsProgress&&(c.slick("slickPause"),setTimeout(function(){c.slick("slickPlay")},600)),c.on("beforeChange",function(a,i,t,s){var n=I(i.$slides)[s],e=I(i.$slides)[t],o=c.find(".js-pagination"),d=I(n).find("[data-scs-animation-in]"),l=I(e).find("[data-scs-animation-in]");I(l).each(function(){var a=I(this).data("scs-animation-in");I(this).removeClass("animated "+a)}),I(d).each(function(){I(this).css("opacity",0)}),o.length&&(s<t?(I(o[0].children).removeClass("slick-active-right"),I(o[0].children[s]).addClass("slick-active-right")):I(o[0].children).removeClass("slick-active-right"),I(o[0].children).removeClass("slick-current"),setTimeout(function(){I(o[0].children[s]).addClass("slick-current")},.25))}),L&&c.on("beforeChange",function(a,i,t,s){var n=(s||0)+1;I(L).html('<span class="u-paging__current">'+n+'</span><span class="u-paging__divider"></span><span class="u-paging__total">'+i.slideCount+"</span>")}),c.on("afterChange",function(a,i,t){var s=I(i.$slides)[t],n=I(s).find("[data-scs-animation-in]");I(n).each(function(){var a=I(this).data("scs-animation-in"),i=I(this).data("scs-animation-delay"),t=I(this).data("scs-animation-duration");I(this).css({"animation-delay":i+"ms","animation-duration":t+"ms"}),I(this).addClass("animated "+a).css("opacity",1)})}),H&&N&&(c.on("afterChange",function(a,i,t,s){I(i.$slides).removeClass("animated set-position "+H+" "+N)}),c.on("beforeChange",function(a,i,t){I(i.$slides[t]).addClass("animated "+N)}),c.on("setPosition",function(a,i){I(i.$slides[i.currentSlide]).addClass("animated set-position "+H)})),G=G.add(c)})},videoSupport:function(a){a.length&&a.on("beforeChange",function(a,i,t,s){var n,e=I(i.$slides[t]).data("slide-type"),o=I(i.$slides[t]).find("iframe").get(0);if("vimeo"==e)n={method:"pause",value:"true"};else{if("youtube"!=e)return!1;n={event:"command",func:"pauseVideo"}}null!=o&&o.contentWindow.postMessage(JSON.stringify(n),"*")})},initTextAnimation:function(a,d){if(window.TextFx&&window.anime&&a.length){var i=a.find(d);i.length&&(i.each(function(a,i){var t=I(i);t.data("TextFx")||t.data("TextFx",new TextFx(t.get(0)))}),a.on("beforeChange",function(a,i,t,s){var n=i.$slider.find(".slick-track").children(),e=n.eq(t),o=n.eq(s);e=e.find(d),o=o.find(d),e.length&&e.data("TextFx").hide(e.data("effect")?e.data("effect"):"fx1"),o.length&&o.data("TextFx").show(o.data("effect")?o.data("effect"):"fx1")}))}}}}(jQuery);