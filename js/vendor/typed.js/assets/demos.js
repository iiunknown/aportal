function prettyLog(e){console.log("%c "+e,"color: green; font-weight: bold;")}function toggleLoop(e){e.loop?e.loop=!1:e.loop=!0}document.addEventListener("DOMContentLoaded",function(){var e=new Typed("#typed",{stringsElement:"#typed-strings",typeSpeed:20,backSpeed:20,startDelay:1e3,loop:!1,loopCount:1/0,onComplete:function(e){prettyLog("onComplete "+e)},preStringTyped:function(e,t){prettyLog("preStringTyped "+e+" "+t)},onStringTyped:function(e,t){prettyLog("onStringTyped "+e+" "+t)},onLastStringBackspaced:function(e){prettyLog("onLastStringBackspaced "+e)},onTypingPaused:function(e,t){prettyLog("onTypingPaused "+e+" "+t)},onTypingResumed:function(e,t){prettyLog("onTypingResumed "+e+" "+t)},onReset:function(e){prettyLog("onReset "+e)},onStop:function(e,t){prettyLog("onStop "+e+" "+t)},onStart:function(e,t){prettyLog("onStart "+e+" "+t)},onDestroy:function(e){prettyLog("onDestroy "+e)}});document.querySelector(".toggle").addEventListener("click",function(){e.toggle()}),document.querySelector(".stop").addEventListener("click",function(){e.stop()}),document.querySelector(".start").addEventListener("click",function(){e.start()}),document.querySelector(".reset").addEventListener("click",function(){e.reset()}),document.querySelector(".destroy").addEventListener("click",function(){e.destroy()}),document.querySelector(".loop").addEventListener("click",function(){toggleLoop(e)});var t=new Typed("#typed2",{strings:["Some <i>strings</i> with","Some <strong>HTML</strong>","Chars &times; &copy;"],typeSpeed:0,backSpeed:0,fadeOut:!0,loop:!0});document.querySelector(".loop2").addEventListener("click",function(){toggleLoop(t)}),new Typed("#typed3",{strings:["My strings are: <i>strings</i> with","My strings are: <strong>HTML</strong>","My strings are: Chars &times; &copy;"],typeSpeed:0,backSpeed:0,smartBackspace:!0,loop:!0}),new Typed("#typed4",{strings:["Some strings without","Some HTML","Chars"],typeSpeed:0,backSpeed:0,attr:"placeholder",bindInputFocusEvents:!0,loop:!0}),new Typed("#typed5",{strings:["1 Some <i>strings</i> with","2 Some <strong>HTML</strong>","3 Chars &times; &copy;"],typeSpeed:0,backSpeed:0,shuffle:!0,cursorChar:"_",smartBackspace:!1,loop:!0}),new Typed("#typed6",{strings:["npm install^1000\n`installing components...` ^1000\n`Fetching from source...`"],typeSpeed:40,backSpeed:0,loop:!0})});