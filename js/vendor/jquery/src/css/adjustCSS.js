define(["../core","../var/rcssNum"],function(m,x){"use strict";return function(r,e,n,s){var t,u,c=20,i=s?function(){return s.cur()}:function(){return m.css(r,e,"")},f=i(),o=n&&n[3]||(m.cssNumber[e]?"":"px"),a=(m.cssNumber[e]||"px"!==o&&+f)&&x.exec(m.css(r,e));if(a&&a[3]!==o){for(f/=2,o=o||a[3],a=+f||1;c--;)m.style(r,e,a+o),(1-u)*(1-(u=i()/f||.5))<=0&&(c=0),a/=u;a*=2,m.style(r,e,a+o),n=n||[]}return n&&(a=+a||+f||0,t=n[1]?a+(n[1]+1)*n[2]:+n[2],s&&(s.unit=o,s.start=a,s.end=t)),t}});