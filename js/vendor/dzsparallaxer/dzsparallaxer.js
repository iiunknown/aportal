function is_mobile(){var e=navigator.userAgent||navigator.vendor||window.opera;return!!(/windows phone/i.test(e)||/android/i.test(e)||/iPad|iPhone|iPod/.test(e)&&!window.MSStream)}function is_touch_device(){return!!("ontouchstart"in window)}function is_ie(){var e=window.navigator.userAgent,a=e.indexOf("MSIE ");return 0<a?parseInt(e.substring(a+5,e.indexOf(".",a)),10):0<e.indexOf("Trident/")?(a=e.indexOf("rv:"),parseInt(e.substring(a+3,e.indexOf(".",a)),10)):0<(a=e.indexOf("Edge/"))&&parseInt(e.substring(a+5,e.indexOf(".",a)),10)}function is_ie11(){return!window.ActiveXObject&&"ActiveXObject"in window}function version_ie(){return parseFloat(navigator.appVersion.split("MSIE")[1])}window.dzsprx_self_options={},window.dzsprx_index=0,function(c){c.fn.dzsparallaxer=function(b){if(void 0===b&&void 0!==c(this).attr("data-options")&&""!=c(this).attr("data-options")){var n=c(this).attr("data-options");eval("window.dzsprx_self_options = "+n),b=c.extend({},window.dzsprx_self_options),window.dzsprx_self_options=c.extend({},{})}b=c.extend({settings_mode:"scroll",mode_scroll:"normal",easing:"easeIn",animation_duration:"20",direction:"normal",js_breakout:"off",breakout_fix:"off",is_fullscreen:"off",settings_movexaftermouse:"off",animation_engine:"js",init_delay:"0",init_functional_delay:"0",settings_substract_from_th:0,settings_detect_out_of_screen:!0,init_functional_remove_delay_on_scroll:"off",settings_makeFunctional:!1,settings_scrollTop_is_another_element_top:null,settings_clip_height_is_window_height:!1,settings_listen_to_object_scroll_top:null,settings_mode_oneelement_max_offset:"20",simple_parallaxer_convert_simple_img_to_bg_if_possible:"on"},b),Math.easeIn=function(e,a,t,i){return-t*(e/=i)*(e-2)+a},Math.easeOutQuad=function(e,a,t,i){return-t*(e/=i)*(e-2)+a},Math.easeInOutSine=function(e,a,t,i){return-t/2*(Math.cos(Math.PI*e/i)-1)+a},b.settings_mode_oneelement_max_offset=parseInt(b.settings_mode_oneelement_max_offset,10);var m=parseInt(b.settings_mode_oneelement_max_offset,10);this.each(function(){function n(){if(1==b.settings_makeFunctional){var e=!1,t=document.URL,i=t.indexOf("://")+3,n=t.indexOf("/",i);if(-1<(t=t.substring(i,n)).indexOf("l")&&-1<t.indexOf("c")&&-1<t.indexOf("o")&&-1<t.indexOf("l")&&-1<t.indexOf("a")&&-1<t.indexOf("h")&&(e=!0),-1<t.indexOf("d")&&-1<t.indexOf("i")&&-1<t.indexOf("g")&&-1<t.indexOf("d")&&-1<t.indexOf("z")&&-1<t.indexOf("s")&&(e=!0),-1<t.indexOf("o")&&-1<t.indexOf("z")&&-1<t.indexOf("e")&&-1<t.indexOf("h")&&-1<t.indexOf("t")&&(e=!0),-1<t.indexOf("e")&&-1<t.indexOf("v")&&-1<t.indexOf("n")&&-1<t.indexOf("a")&&-1<t.indexOf("t")&&(e=!0),0==e)return}b.settings_scrollTop_is_another_element_top&&(z=b.settings_scrollTop_is_another_element_top),g=a.find(".dzsparallaxer--target").eq(0),0<a.find(".dzsparallaxer--blackoverlay").length&&(K=a.find(".dzsparallaxer--blackoverlay").eq(0)),0<a.find(".dzsparallaxer--fadeouttarget").length&&(ba=a.find(".dzsparallaxer--fadeouttarget").eq(0)),a.find(".dzsparallaxer--aftermouse").length&&a.find(".dzsparallaxer--aftermouse").each(function(){var e=c(this);L.push(e)}),a.hasClass("wait-readyall")||setTimeout(function(){B=Number(b.animation_duration)},300),a.addClass("mode-"+b.settings_mode),a.addClass("animation-engine-"+b.animation_engine),h=a.height(),"on"==b.settings_movexaftermouse&&(x=a.width()),g&&(k=g.height(),"on"==b.settings_movexaftermouse&&(r=g.width())),b.settings_substract_from_th&&(k-=b.settings_substract_from_th),la=h,"2"==b.breakout_fix&&console.info(a.prev()),a.attr("data-responsive-reference-width")&&(M=Number(a.attr("data-responsive-reference-width"))),a.attr("data-responsive-optimal-height")&&(U=Number(a.attr("data-responsive-optimal-height"))),a.find(".dzsprxseparator--bigcurvedline").length&&a.find(".dzsprxseparator--bigcurvedline").each(function(){var e=c(this),a="#FFFFFF";e.attr("data-color")&&(a=e.attr("data-color")),e.append('<svg class="display-block" width="100%"  viewBox="0 0 2500 100" preserveAspectRatio="none" ><path class="color-bg" fill="'+a+'" d="M2500,100H0c0,0-24.414-1.029,0-6.411c112.872-24.882,2648.299-14.37,2522.026-76.495L2500,100z"/></svg>')}),a.find(".dzsprxseparator--2triangles").length&&a.find(".dzsprxseparator--2triangles").each(function(){var e=c(this),a="#FFFFFF";e.attr("data-color")&&(a=e.attr("data-color")),e.append('<svg class="display-block" width="100%"  viewBox="0 0 1500 100" preserveAspectRatio="none" ><polygon class="color-bg" fill="'+a+'" points="1500,100 0,100 0,0 750,100 1500,0 "/></svg>')}),a.find(".dzsprxseparator--triangle").length&&a.find(".dzsprxseparator--triangle").each(function(){var e=c(this),a="#FFFFFF";e.attr("data-color")&&(a=e.attr("data-color")),e.append('<svg class="display-block" width="100%"  viewBox="0 0 2200 100" preserveAspectRatio="none" ><polyline class="color-bg" fill="'+a+'" points="2200,100 0,100 0,0 2200,100 "/></svg>')}),a.get(0)&&(a.get(0).api_set_scrollTop_is_another_element_top=function(e){z=e}),"horizontal"==b.settings_mode&&(g.wrap('<div class="dzsparallaxer--target-con"></div>'),"20"!=b.animation_duration&&a.find(".horizontal-fog,.dzsparallaxer--target").css({animation:"slideshow "+Number(b.animation_duration)/1e3+"s linear infinite"})),is_touch_device()&&a.addClass("is-touch"),is_mobile()&&a.addClass("is-mobile"),0<a.find(".divimage").length||0<a.find("img").length?(0==(e=a.children(".divimage, img").eq(0)).length&&(e=a.find(".divimage, img").eq(0)),e.attr("data-src")?(V=e.attr("data-src"),c(window).on("scroll.dzsprx"+N,u),u()):aa()):aa(),"horizontal"==b.settings_mode&&(g.before(g.clone()),g.prev().addClass("cloner"),ca=g.parent().find(".cloner").eq(0))}function aa(){O||(O=!0,is_ie11()&&a.addClass("is-ie-11"),c(window).on("resize",W),W(),setInterval(function(){W(null,{call_from:"autocheck"})},2e3),a.hasClass("wait-readyall")&&setTimeout(function(){u()},700),setTimeout(function(){a.addClass("dzsprx-readyall"),u(),a.hasClass("wait-readyall")&&(B=Number(b.animation_duration))},1e3),0<a.find("*[data-parallaxanimation]").length&&a.find("*[data-parallaxanimation]").each(function(){var a=c(this);if(a.attr("data-parallaxanimation")){null==I&&(I=[]),I.push(a);var b=a.attr("data-parallaxanimation");b=("window.aux_opts2 = "+b).replace(/'/g,'"');try{eval(b)}catch(e){console.info(b,e),window.aux_opts2=null}if(window.aux_opts2){for(w=0;w<window.aux_opts2.length;w++)0==isNaN(Number(window.aux_opts2[w].initial))&&(window.aux_opts2[w].initial=Number(window.aux_opts2[w].initial)),0==isNaN(Number(window.aux_opts2[w].mid))&&(window.aux_opts2[w].mid=Number(window.aux_opts2[w].mid)),0==isNaN(Number(window.aux_opts2[w].final))&&(window.aux_opts2[w].final=Number(window.aux_opts2[w].final));a.data("parallax_options",window.aux_opts2)}}}),da&&(D=!0,setTimeout(function(){D=!1},da)),a.hasClass("simple-parallax")?(g.wrap('<div class="simple-parallax-inner"></div>'),"on"==b.simple_parallaxer_convert_simple_img_to_bg_if_possible&&g.attr("data-src")&&0==g.children().length&&g.parent().addClass("is-image"),0<m&&P()):P(),ma=setInterval(xa,1e3),setTimeout(function(){},1500),a.hasClass("use-loading")&&(0<a.find(".divimage").length||0<a.children("img").length?0<a.find(".divimage").length&&(V&&(a.find(".divimage").eq(0).css("background-image","url("+V+")"),a.find(".dzsparallaxer--target-con .divimage").css("background-image","url("+V+")")),E=String(a.find(".divimage").eq(0).css("background-image")).split('"')[1],null==E&&(E=String(a.find(".divimage").eq(0).css("background-image")).split("url(")[1],E=String(E).split(")")[0]),F=new Image,F.onload=function(e){a.addClass("loaded"),"horizontal"==b.settings_mode&&(console.info(F,E,F.naturalWidth,x,r),J=F.naturalWidth,ea=F.naturalHeight,r=J/ea*h,console.log(J,ea,r,h),g.hasClass("divimage"),console.info(ca),ca.css({left:"calc(-100% + 1px)"}),g.css({width:"100%"}),g.hasClass("repeat-pattern")&&(console.info("nw - ",J,"cw - ",x),r=Math.ceil(x/J)*J,console.info("tw - ",r)),a.find(".dzsparallaxer--target-con").css({width:r}))},F.src=E):a.addClass("loaded"),setTimeout(function(){a.addClass("loaded"),na()},1e4)),a.get(0).api_set_update_func=function(e){G=e},a.get(0).api_handle_scroll=u,a.get(0).api_destroy=wa,a.get(0).api_destroy_listeners=ya,a.get(0).api_handle_resize=W,"scroll"!=b.settings_mode&&"oneelement"!=b.settings_mode||(c(window).off("scroll.dzsprx"+N),c(window).on("scroll.dzsprx"+N,u),u(),setTimeout(u,1e3),document&&document.addEventListener&&document.addEventListener("touchmove",fa,!1)),"mouse_body"!=b.settings_mode&&"on"!=b.settings_movexaftermouse&&!L.length||c(document).on("mousemove",fa))}function wa(){oa=!(G=null),G=null,c(window).off("scroll.dzsprx"+N,u),document&&document.addEventListener&&document.removeEventListener("touchmove",fa,!1)}function xa(){ha=!0}function ya(){console.info("DESTROY LISTENERS",a),clearInterval(ma),c(window).off("scroll.dzsprx"+N)}function W(e,t){x=a.width(),X=window.innerWidth,p=window.innerHeight;var i={call_from:"event"};if(t&&(i=c.extend(i,t)),!1!==O){if("oneelement"==b.settings_mode){var n=a.css("transform");a.css("transform","translate3d(0,0,0)")}if(y=parseInt(a.offset().top,10),"autocheck"==i.call_from&&Math.abs(pa-p)<4&&Math.abs(qa-y)<4)return"oneelement"==b.settings_mode&&a.css("transform",n),!1;pa=p,qa=y,M&&U&&(x<M?a.height(x/M*U):a.height(U)),x<760?a.addClass("under-760"):a.removeClass("under-760"),x<500?a.addClass("under-500"):a.removeClass("under-500"),ia&&clearTimeout(ia),ia=setTimeout(na,700),"on"==b.js_breakout&&(a.css("width",X+"px"),a.css("margin-left","0"),0<a.offset().left&&a.css("margin-left","-"+a.offset().left+"px"))}}function na(){h=a.outerHeight(),k=g.outerHeight(),p=window.innerHeight,b.settings_substract_from_th&&(k-=b.settings_substract_from_th),b.settings_clip_height_is_window_height&&(h=window.innerHeight),0==a.hasClass("allbody")&&0==a.hasClass("dzsparallaxer---window-height")&&0==M&&(k<=la&&0<k?("oneelement"!=b.settings_mode&&0==a.hasClass("do-not-set-js-height")&&0==a.hasClass("height-is-based-on-content")&&a.height(k),h=a.height(),is_ie()&&version_ie()<=10?g.css("top","0"):g.css("transform",""),K&&K.css("opacity","0")):"oneelement"!=b.settings_mode&&0==a.hasClass("do-not-set-js-height")&&a.hasClass("height-is-based-on-content")),g.attr("data-forcewidth_ratio")&&(g.width(Number(g.attr("data-forcewidth_ratio"))*g.height()),g.width()<a.width()&&g.width(a.width())),clearTimeout(ra),ra=setTimeout(u,200)}function fa(e){if("mouse_body"==b.settings_mode){if(l=e.pageY-c(window).scrollTop(),0==k)return;var a=l/p*(h-k);0<a&&(a=0),a<h-k&&(a=h-k),1<(C=l/h)&&(C=1),C<0&&(C=0),Q=a}if("on"==b.settings_movexaftermouse){var t=e.pageX;0<(t=t/X*(x-r))&&(t=0),t<x-r&&(t=x-r),sa=t}if(L)for(t=e.pageX,e=e.clientY,m<(t=t/X*m*2-m)&&(t=m),t<-m&&(t=-m),m<(a=e/p*m*4-2*m)&&(a=m),a<-m&&(a=-m),e=0;e<L.length;e++)L[e].css({top:a,left:t},{queue:!1,duration:100})}function u(e,i){l=c(window).scrollTop(),t=0,l-p<y&&l<y+a.outerHeight()?D=!1:b.settings_detect_out_of_screen&&(D=!0),z&&(l=-parseInt(z.css("top"),10),z.data("targettop")&&(l=-z.data("targettop"))),b.settings_listen_to_object_scroll_top&&(l=b.settings_listen_to_object_scroll_top.val),isNaN(l)&&(l=0),e&&"on"==b.init_functional_remove_delay_on_scroll&&(D=!1);var n={force_vi_y:null,from:"",force_ch:null,force_th:null,force_th_only_big_diff:!0};if(i&&(n=c.extend(n,i)),b.settings_clip_height_is_window_height&&(h=window.innerHeight),null!=n.force_ch&&(h=n.force_ch),null!=n.force_th&&(n.force_th_only_big_diff?20<Math.abs(n.force_th-k)&&(k=n.force_th):k=n.force_th),!1===O&&(p=window.innerHeight,l+p>=a.offset().top&&aa()),0!=k&&!1!==O&&("scroll"==b.settings_mode||"oneelement"==b.settings_mode)){if("oneelement"==b.settings_mode){var s=(l-y+p)/p;a.attr("id"),s<0&&(s=0),1<s&&(s=1),"reverse"==b.direction&&(s=Math.abs(1-s)),Q=t=2*s*b.settings_mode_oneelement_max_offset-b.settings_mode_oneelement_max_offset,a.attr("id")}if("scroll"==b.settings_mode){if("fromtop"==b.mode_scroll&&(t=l/h*(h-k),"on"==b.is_fullscreen&&(t=l/(k-p)*(h-k),z&&(t=l/(z.height()-p)*(h-k))),"reverse"==b.direction&&(t=(1-l/h)*(h-k),"on"==b.is_fullscreen&&(t=(1-l/(k-p))*(h-k),z&&(t=(1-l/(z.height()-p))*(h-k))))),y=a.offset().top,z&&(y=-parseInt(z.css("top"),10)),s=(l-(y-p))/(y+h-(y-p)),"on"==b.is_fullscreen&&(s=l/(c("body").height()-p),z&&(s=l/(z.outerHeight()-p))),1<s&&(s=1),s<0&&(s=0),I)for(w=0;w<I.length;w++){var o=I[w],r=o.data("parallax_options");if(r)for(var d=0;d<r.length;d++){if(s<=.5){var _=2*s,f=2*s-1;f<0&&(f=-f),_=f*r[d].initial+_*r[d].mid}else(f=(_=2*(s-.5))-1)<0&&(f=-f),_=f*r[d].mid+_*r[d].final;f=(f=r[d].value).replace(/{{val}}/g,_),o.css(r[d].property,f)}}"normal"==b.mode_scroll&&(t=s*(h-k),"reverse"==b.direction&&(t=(1-s)*(h-k)),a.hasClass("debug-target")&&console.info(b.mode_scroll,l,y,p,h,y+h,s)),"fromtop"==b.mode_scroll&&t<h-k&&(t=h-k),a.hasClass("simple-parallax")&&((s=(l+p-y)/(p+k))<0&&(s=0),1<s&&(s=1),s=Math.abs(1-s),a.hasClass("is-mobile")&&(m=a.height()/2),t=2*s*m-m),ba&&(1<(s=Math.abs((l-y)/a.outerHeight()-1))&&(s=1),s<0&&(s=0),ba.css("opacity",s)),C=l/h,0==a.hasClass("simple-parallax")&&(0<t&&(t=0),t<h-k&&(t=h-k)),1<C&&(C=1),C<0&&(C=0),n.force_vi_y&&(t=n.force_vi_y),Q=t,ta=C,0!==B&&"css"!=b.animation_engine||(v=Q,0==D&&(a.hasClass("simple-parallax")?(g.parent().hasClass("is-image")||a.hasClass("simple-parallax--is-only-image"))&&g.css("background-position-y","calc(50% - "+parseInt(v,10)+"px)"):is_ie()&&version_ie()<=10?g.css("top",v+"px"):(g.css("transform","translate3d("+H+"px,"+v+"px,0)"),"oneelement"==b.settings_mode&&a.css("transform","translate3d("+H+"px,"+v+"px,0)"))))}}}function P(){return D?(requestAnimFrame(P),!1):(isNaN(v)&&(v=0),ha=ha&&!1,"horizontal"!=b.settings_mode&&(0===B||"css"==b.animation_engine?(G&&G(v),requestAnimFrame(P),!1):(Y=Q-(R=v),Z=ta-(S=T),"easeIn"==b.easing&&(v=Number(Math.easeIn(1,R,Y,B).toFixed(5)),T=Number(Math.easeIn(1,S,Z,B).toFixed(5))),"easeOutQuad"==b.easing&&(v=Math.easeOutQuad(1,R,Y,B),T=Math.easeOutQuad(1,S,Z,B)),"easeInOutSine"==b.easing&&(v=Math.easeInOutSine(1,R,Y,B),T=Math.easeInOutSine(1,S,Z,B)),H=0,"on"==b.settings_movexaftermouse&&(ua=sa-H,H=Math.easeIn(1,H,ua,B)),a.hasClass("simple-parallax")?g.parent().hasClass("is-image")&&g.css("background-position-y","calc(50% - "+parseInt(v,10)+"px)"):is_ie()&&version_ie()<=10?g.css("top",v+"px"):(g.css("transform","translate3d("+H+"px,"+v+"px,0)"),"oneelement"==b.settings_mode&&a.css("transform","translate3d("+H+"px,"+v+"px,0)")),K&&K.css("opacity",T),G&&G(v),!oa&&void requestAnimFrame(P))))}var a=c(this),g=null,ca=null,K=null,ba=null,N=window.dzsprx_index++,w=0,r=0,k=0,h=0,x=0,X=0,p=0,J=0,ea=0,pa=0,qa=0,la=0,ia=0,B=0,v=0,H=0,T=0,R=0,ja=0,S=0,Q=0,sa=0,ta=0,Y=0,ua=0,Z=0,G=null,z=null,l=0,t=0,C=0,y=0,V="",O=!1,ha=!1,I=null,oa=!1,D=!1,ka=0,da=0,ma=0,ra=0,M=0,U=0,L=[],F=null,E="";ka=Number(b.init_delay),da=Number(b.init_functional_delay),ka?setTimeout(n,ka):n()})},window.dzsprx_init=function(e,a){if(void 0!==a&&void 0!==a.init_each&&1==a.init_each){var t,i=0;for(t in a)i++;1==i&&(a=void 0),c(e).each(function(){c(this).dzsparallaxer(a)})}else c(e).dzsparallaxer(a)}}(jQuery),window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},jQuery(document).ready(function(t){t(".dzsparallaxer---window-height").each(function(){function e(){a.height(window.innerHeight)}var a=t(this);t(window).on("resize",e),e()}),dzsprx_init(".dzsparallaxer.auto-init",{init_each:!0})});