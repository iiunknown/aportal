define(["../core","../core/toType","./var/rtagName","./var/rscriptType","./wrapMap","./getAll","./setGlobalEval"],function(m,C,g,v,y,T,w){"use strict";var x=/<|&#?\w+;/;return function(e,t,r,n,i){for(var o,a,l,s,c,f,p=t.createDocumentFragment(),d=[],u=0,h=e.length;u<h;u++)if((o=e[u])||0===o)if("object"===C(o))m.merge(d,o.nodeType?[o]:o);else if(x.test(o)){for(a=a||p.appendChild(t.createElement("div")),l=(g.exec(o)||["",""])[1].toLowerCase(),s=y[l]||y._default,a.innerHTML=s[1]+m.htmlPrefilter(o)+s[2],f=s[0];f--;)a=a.lastChild;m.merge(d,a.childNodes),(a=p.firstChild).textContent=""}else d.push(t.createTextNode(o));for(p.textContent="",u=0;o=d[u++];)if(n&&-1<m.inArray(o,n))i&&i.push(o);else if(c=m.contains(o.ownerDocument,o),a=T(p.appendChild(o),"script"),c&&w(a),r)for(f=0;o=a[f++];)v.test(o.type||"")&&r.push(o);return p}});