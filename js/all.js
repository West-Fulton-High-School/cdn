/*! jQuery v3.2.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/Tween,-effects/animatedSelector | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/Tween,-effects/animatedSelector",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a);
}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}}),r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var _a,ab=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?_a:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),_a={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ab[b]||r.find.attr;ab[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=ab[g],ab[g]=e,e=null!=c(a,b,d)?g:null,ab[g]=f),e}});var bb=/^(?:input|select|textarea|button)$/i,cb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):bb.test(a.nodeName)||cb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function db(a){var b=a.match(L)||[];return b.join(" ")}function eb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,eb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=eb(c),d=1===c.nodeType&&" "+db(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=db(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,eb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=eb(c),d=1===c.nodeType&&" "+db(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=db(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,eb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=eb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+db(eb(c))+" ").indexOf(b)>-1)return!0;return!1}});var fb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(fb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:db(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var gb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!gb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,gb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var hb=/\[\]$/,ib=/\r?\n/g,jb=/^(?:submit|button|image|reset|file)$/i,kb=/^(?:input|select|textarea|keygen)/i;function lb(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||hb.test(a)?d(a,e):lb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d);
});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)lb(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)lb(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&kb.test(this.nodeName)&&!jb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ib,"\r\n")}}):{name:b.name,value:c.replace(ib,"\r\n")}}).get()}}),r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var mb=a.jQuery,nb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=nb),b&&a.jQuery===r&&(a.jQuery=mb),r},b||(a.jQuery=a.$=r),r});
/* Netlify */
!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=9)}([function(e,t,n){"use strict";function r(e,t){var n,r,o,i,a=A;for(i=arguments.length;i-- >2;)k.push(arguments[i]);for(t&&null!=t.children&&(k.length||k.push(t.children),delete t.children);k.length;)if((r=k.pop())&&void 0!==r.pop)for(i=r.length;i--;)k.push(r[i]);else"boolean"==typeof r&&(r=null),(o="function"!=typeof e)&&(null==r?r="":"number"==typeof r?r+="":"string"!=typeof r&&(o=!1)),o&&n?a[a.length-1]+=r:a===A?a=[r]:a.push(r),n=o;var s=new E;return s.nodeName=e,s.children=a,s.attributes=null==t?void 0:t,s.key=null==t?void 0:t.key,void 0!==L.vnode&&L.vnode(s),s}function o(e,t){for(var n in t)e[n]=t[n];return e}function i(e,t){return r(e.nodeName,o(o({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}function a(e){!e._dirty&&(e._dirty=!0)&&1==C.push(e)&&(L.debounceRendering||S)(s)}function s(){var e,t=C;for(C=[];e=t.pop();)e._dirty&&w(e)}function u(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&c(e,t.nodeName):n||e._componentConstructor===t.nodeName}function c(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function M(e){var t=o({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var r in n)void 0===t[r]&&(t[r]=n[r]);return t}function l(e,t){var n=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return n.normalizedNodeName=e,n}function p(e){var t=e.parentNode;t&&t.removeChild(e)}function f(e,t,n,r,o){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),r&&r(e);else if("class"!==t||o)if("style"===t){if(r&&"string"!=typeof r&&"string"!=typeof n||(e.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof n)for(var i in n)i in r||(e.style[i]="");for(var i in r)e.style[i]="number"==typeof r[i]&&!1===U.test(i)?r[i]+"px":r[i]}}else if("dangerouslySetInnerHTML"===t)r&&(e.innerHTML=r.__html||"");else if("o"==t[0]&&"n"==t[1]){var a=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),r?n||e.addEventListener(t,y,a):e.removeEventListener(t,y,a),(e._listeners||(e._listeners={}))[t]=r}else if("list"!==t&&"type"!==t&&!o&&t in e){try{e[t]=null==r?"":r}catch(e){}null!=r&&!1!==r||"spellcheck"==t||e.removeAttribute(t)}else{var s=o&&t!==(t=t.replace(/^xlink:?/,""));null==r||!1===r?s?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof r&&(s?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),r):e.setAttribute(t,r))}else e.className=r||""}function y(e){return this._listeners[e.type](L.event&&L.event(e)||e)}function d(){for(var e;e=_.pop();)L.afterMount&&L.afterMount(e),e.componentDidMount&&e.componentDidMount()}function N(e,t,n,r,o,i){Q++||(Y=null!=o&&void 0!==o.ownerSVGElement,P=null!=e&&!("__preactattr_"in e));var a=g(e,t,n,r,i);return o&&a.parentNode!==o&&o.appendChild(a),--Q||(P=!1,i||d()),a}function g(e,t,n,r,o){var i=e,a=Y;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||o)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),h(e,!0))),i.__preactattr_=!0,i;var s=t.nodeName;if("function"==typeof s)return m(e,t,n,r);if(Y="svg"===s||"foreignObject"!==s&&Y,s+="",(!e||!c(e,s))&&(i=l(s,Y),e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),h(e,!0)}var u=i.firstChild,M=i.__preactattr_,p=t.children;if(null==M){M=i.__preactattr_={};for(var f=i.attributes,y=f.length;y--;)M[f[y].name]=f[y].value}return!P&&p&&1===p.length&&"string"==typeof p[0]&&null!=u&&void 0!==u.splitText&&null==u.nextSibling?u.nodeValue!=p[0]&&(u.nodeValue=p[0]):(p&&p.length||null!=u)&&D(i,p,n,r,P||null!=M.dangerouslySetInnerHTML),T(i,t.attributes,M),Y=a,i}function D(e,t,n,r,o){var i,a,s,c,M,l=e.childNodes,f=[],y={},d=0,N=0,D=l.length,j=0,T=t?t.length:0;if(0!==D)for(var z=0;D>z;z++){var b=l[z],v=b.__preactattr_,w=T&&v?b._component?b._component.__key:v.key:null;null!=w?(d++,y[w]=b):(v||(void 0!==b.splitText?!o||b.nodeValue.trim():o))&&(f[j++]=b)}if(0!==T)for(var z=0;T>z;z++){c=t[z],M=null;var w=c.key;if(null!=w)d&&void 0!==y[w]&&(M=y[w],y[w]=void 0,d--);else if(j>N)for(i=N;j>i;i++)if(void 0!==f[i]&&u(a=f[i],c,o)){M=a,f[i]=void 0,i===j-1&&j--,i===N&&N++;break}M=g(M,c,n,r),s=l[z],M&&M!==e&&M!==s&&(null==s?e.appendChild(M):M===s.nextSibling?p(s):e.insertBefore(M,s))}if(d)for(var z in y)void 0!==y[z]&&h(y[z],!1);for(;j>=N;)void 0!==(M=f[j--])&&h(M,!1)}function h(e,t){var n=e._component;n?x(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||p(e),j(e))}function j(e){for(e=e.lastChild;e;){var t=e.previousSibling;h(e,!0),e=t}}function T(e,t,n){var r;for(r in n)t&&null!=t[r]||null==n[r]||f(e,r,n[r],n[r]=void 0,Y);for(r in t)"children"===r||"innerHTML"===r||r in n&&t[r]===("value"===r||"checked"===r?e[r]:n[r])||f(e,r,n[r],n[r]=t[r],Y)}function z(e,t,n){var r,o=B.length;for(e.prototype&&e.prototype.render?(r=new e(t,n),O.call(r,t,n)):(r=new O(t,n),r.constructor=e,r.render=b);o--;)if(B[o].constructor===e)return r.nextBase=B[o].nextBase,B.splice(o,1),r;return r}function b(e,t,n){return this.constructor(e,n)}function v(e,t,n,r,o){e._disable||(e._disable=!0,e.__ref=t.ref,e.__key=t.key,delete t.ref,delete t.key,void 0===e.constructor.getDerivedStateFromProps&&(!e.base||o?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,r)),r&&r!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&!1===L.syncComponentUpdates&&e.base?a(e):w(e,1,o)),e.__ref&&e.__ref(e))}function w(e,t,n,r){if(!e._disable){var i,a,s,u=e.props,c=e.state,l=e.context,p=e.prevProps||u,f=e.prevState||c,y=e.prevContext||l,g=e.base,D=e.nextBase,j=g||D,T=e._component,b=!1,m=y;if(e.constructor.getDerivedStateFromProps&&(c=o(o({},c),e.constructor.getDerivedStateFromProps(u,c)),e.state=c),g&&(e.props=p,e.state=f,e.context=y,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(u,c,l)?b=!0:e.componentWillUpdate&&e.componentWillUpdate(u,c,l),e.props=u,e.state=c,e.context=l),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!b){i=e.render(u,c,l),e.getChildContext&&(l=o(o({},l),e.getChildContext())),g&&e.getSnapshotBeforeUpdate&&(m=e.getSnapshotBeforeUpdate(p,f));var O,I,E=i&&i.nodeName;if("function"==typeof E){var k=M(i);a=T,a&&a.constructor===E&&k.key==a.__key?v(a,k,1,l,!1):(O=a,e._component=a=z(E,k,l),a.nextBase=a.nextBase||D,a._parentComponent=e,v(a,k,0,l,!1),w(a,1,n,!0)),I=a.base}else s=j,O=T,O&&(s=e._component=null),(j||1===t)&&(s&&(s._component=null),I=N(s,i,l,n||!g,j&&j.parentNode,!0));if(j&&I!==j&&a!==T){var A=j.parentNode;A&&I!==A&&(A.replaceChild(I,j),O||(j._component=null,h(j,!1)))}if(O&&x(O),e.base=I,I&&!r){for(var S=e,U=e;U=U._parentComponent;)(S=U).base=I;I._component=S,I._componentConstructor=S.constructor}}for(!g||n?_.unshift(e):b||(e.componentDidUpdate&&e.componentDidUpdate(p,f,m),L.afterUpdate&&L.afterUpdate(e));e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);Q||r||d()}}function m(e,t,n,r){for(var o=e&&e._component,i=o,a=e,s=o&&e._componentConstructor===t.nodeName,u=s,c=M(t);o&&!u&&(o=o._parentComponent);)u=o.constructor===t.nodeName;return o&&u&&(!r||o._component)?(v(o,c,3,n,r),e=o.base):(i&&!s&&(x(i),e=a=null),o=z(t.nodeName,c,n),e&&!o.nextBase&&(o.nextBase=e,a=null),v(o,c,1,n,r),e=o.base,a&&e!==a&&(a._component=null,h(a,!1))),e}function x(e){L.beforeUnmount&&L.beforeUnmount(e);var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?x(n):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.nextBase=t,p(t),B.push(e),j(t)),e.__ref&&e.__ref(null)}function O(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{},this._renderCallbacks=[]}function I(e,t,n){return N(n,e,{},!1,t,!1)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"h",function(){return r}),n.d(t,"createElement",function(){return r}),n.d(t,"cloneElement",function(){return i}),n.d(t,"Component",function(){return O}),n.d(t,"render",function(){return I}),n.d(t,"rerender",function(){return s}),n.d(t,"options",function(){return L});var E=function(){},L={},k=[],A=[],S="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,U=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,C=[],_=[],Q=0,Y=!1,P=!1,B=[];o(O.prototype,{setState:function(e,t){this.prevState||(this.prevState=this.state),this.state=o(o({},this.state),"function"==typeof e?e(this.state,this.props):e),t&&this._renderCallbacks.push(t),a(this)},forceUpdate:function(e){e&&this._renderCallbacks.push(e),w(this,2)},render:function(){}}),t.default={h:r,createElement:r,cloneElement:i,Component:O,render:I,rerender:s,options:L}},function(e,t,n){"use strict";(function(e){function n(e,t){function n(){this.constructor=e}tn(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}function r(e){return e.interceptors&&e.interceptors.length>0}function o(e,t){var n=e.interceptors||(e.interceptors=[]);return n.push(t),Oe(function(){var e=n.indexOf(t);-1!==e&&n.splice(e,1)})}function i(e,t){var n=wt();try{var r=e.interceptors;if(r)for(var o=0,i=r.length;i>o&&(t=r[o](t),me(!t||t.type,"Intercept handlers should return nothing or a change object"),t);o++);return t}finally{mt(n)}}function a(e){return e.changeListeners&&e.changeListeners.length>0}function s(e,t){var n=e.changeListeners||(e.changeListeners=[]);return n.push(t),Oe(function(){var e=n.indexOf(t);-1!==e&&n.splice(e,1)})}function u(e,t){var n=wt(),r=e.changeListeners;if(r){r=r.slice();for(var o=0,i=r.length;i>o;o++)r[o](t);mt(n)}}function c(){return!!Vn.spyListeners.length}function M(e){if(Vn.spyListeners.length)for(var t=Vn.spyListeners,n=0,r=t.length;r>n;n++)t[n](e)}function l(e){M(Ae({},e,{spyReportStart:!0}))}function p(e){M(e?Ae({},e,an):an)}function f(e){return Vn.spyListeners.push(e),Oe(function(){var t=Vn.spyListeners.indexOf(e);-1!==t&&Vn.spyListeners.splice(t,1)})}function y(){return"function"==typeof Symbol&&Symbol.iterator||"@@iterator"}function d(e){me(!0!==e[sn],"Illegal state: cannot recycle array as iterator"),Ce(e,sn,!0);var t=-1;return Ce(e,"next",function(){return t++,{done:t>=this.length,value:this.length>t?this[t]:void 0}}),e}function N(e,t){Ce(e,y(),t)}function g(e){return{enumerable:!1,configurable:!1,get:function(){return this.get(e)},set:function(t){this.set(e,t)}}}function D(e){Object.defineProperty(pn.prototype,""+e,g(e))}function h(e){for(var t=cn;e>t;t++)D(t);cn=e}function j(e){return Le(e)&&yn(e.$mobx)}function T(e){return Dn[e]}function z(e,t){me("function"==typeof t,T("m026")),me("string"==typeof e&&e.length>0,"actions should have valid names, got: '"+e+"'");var n=function(){return b(e,t,this,arguments)};return n.originalFn=t,n.isMobxAction=!0,n}function b(e,t,n,r){var o=v(e,t,n,r);try{return t.apply(n,r)}finally{w(o)}}function v(e,t,n,r){var o=c()&&!!e,i=0;if(o){i=Date.now();var a=r&&r.length||0,s=Array(a);if(a>0)for(var u=0;a>u;u++)s[u]=r[u];l({type:"action",name:e,fn:t,object:n,arguments:s})}var M=wt();return ct(),{prevDerivation:M,prevAllowStateChanges:I(!0),notifySpy:o,startTime:i}}function w(e){E(e.prevAllowStateChanges),Mt(),mt(e.prevDerivation),e.notifySpy&&p({time:Date.now()-e.startTime})}function m(e){me(null===Vn.trackingDerivation,T("m028")),Vn.strictMode=e,Vn.allowStateChanges=!e}function x(){return Vn.strictMode}function O(e,t){var n,r=I(e);try{n=t()}finally{E(r)}return n}function I(e){var t=Vn.allowStateChanges;return Vn.allowStateChanges=e,t}function E(e){Vn.allowStateChanges=e}function L(e,t,n,r,o){function i(i,a,s,u,c){if(void 0===c&&(c=0),me(o||S(arguments),"This function is a decorator, but it wasn't invoked like a decorator"),s){Se(i,"__mobxLazyInitializers")||Ue(i,"__mobxLazyInitializers",i.__mobxLazyInitializers&&i.__mobxLazyInitializers.slice()||[]);var M=s.value,l=s.initializer;return i.__mobxLazyInitializers.push(function(t){e(t,a,l?l.call(t):M,u,s)}),{enumerable:r,configurable:!0,get:function(){return!0!==this.__mobxDidRunLazyInitializers&&A(this),t.call(this,a)},set:function(e){!0!==this.__mobxDidRunLazyInitializers&&A(this),n.call(this,a,e)}}}var p={enumerable:r,configurable:!0,get:function(){return this.__mobxInitializedProps&&!0===this.__mobxInitializedProps[a]||k(this,a,void 0,e,u,s),t.call(this,a)},set:function(t){this.__mobxInitializedProps&&!0===this.__mobxInitializedProps[a]?n.call(this,a,t):k(this,a,t,e,u,s)}};return(3>arguments.length||5===arguments.length&&3>c)&&Object.defineProperty(i,a,p),p}return o?function(){if(S(arguments))return i.apply(null,arguments);var e=arguments,t=arguments.length;return function(n,r,o){return i(n,r,o,e,t)}}:i}function k(e,t,n,r,o,i){Se(e,"__mobxInitializedProps")||Ue(e,"__mobxInitializedProps",{}),e.__mobxInitializedProps[t]=!0,r(e,t,n,o,i)}function A(e){!0!==e.__mobxDidRunLazyInitializers&&e.__mobxLazyInitializers&&(Ue(e,"__mobxDidRunLazyInitializers",!0),e.__mobxDidRunLazyInitializers&&e.__mobxLazyInitializers.forEach(function(t){return t(e)}))}function S(e){return(2===e.length||3===e.length)&&"string"==typeof e[1]}function U(e){return function(t,n,r){if(r&&"function"==typeof r.value)return r.value=z(e,r.value),r.enumerable=!1,r.configurable=!0,r;if(void 0!==r&&void 0!==r.get)throw Error("[mobx] action is not expected to be used with getters");return hn(e).apply(this,arguments)}}function C(e,t,n){var r="string"==typeof e?e:e.name||"<unnamed action>",o="function"==typeof e?e:t,i="function"==typeof e?t:n;return me("function"==typeof o,T("m002")),me(0===o.length,T("m003")),me("string"==typeof r&&r.length>0,"actions should have valid names, got: '"+r+"'"),b(r,o,i,void 0)}function _(e){return"function"==typeof e&&!0===e.isMobxAction}function Q(e,t,n){var r=function(){return b(t,n,e,arguments)};r.isMobxAction=!0,Ue(e,t,r)}function Y(e,t){return P(e,t)}function P(e,t,n,r){if(e===t)return 0!==e||1/e==1/t;if(null==e||null==t)return!1;if(e!==e)return t!==t;var o=void 0===e?"undefined":en(e);return("function"===o||"object"===o||"object"==(void 0===t?"undefined":en(t)))&&B(e,t,n,r)}function B(e,t,n,r){e=R(e),t=R(t);var o=zn.call(e);if(o!==zn.call(t))return!1;switch(o){case"[object RegExp]":case"[object String]":return""+e==""+t;case"[object Number]":return+e!=+e?+t!=+t:0==+e?1/+e==1/t:+e==+t;case"[object Date]":case"[object Boolean]":return+e==+t;case"[object Symbol]":return"undefined"!=typeof Symbol&&Symbol.valueOf.call(e)===Symbol.valueOf.call(t)}var i="[object Array]"===o;if(!i){if("object"!=(void 0===e?"undefined":en(e))||"object"!=(void 0===t?"undefined":en(t)))return!1;var a=e.constructor,s=t.constructor;if(a!==s&&!("function"==typeof a&&a instanceof a&&"function"==typeof s&&s instanceof s)&&"constructor"in e&&"constructor"in t)return!1}n=n||[],r=r||[];for(var u=n.length;u--;)if(n[u]===e)return r[u]===t;if(n.push(e),r.push(t),i){if((u=e.length)!==t.length)return!1;for(;u--;)if(!P(e[u],t[u],n,r))return!1}else{var c,M=Object.keys(e);if(u=M.length,Object.keys(t).length!==u)return!1;for(;u--;)if(c=M[u],!G(t,c)||!P(e[c],t[c],n,r))return!1}return n.pop(),r.pop(),!0}function R(e){return j(e)?e.peek():Yn(e)?e.entries():Re(e)?He(e.entries()):e}function G(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function H(e,t){return e===t}function Z(e,t){return Y(e,t)}function V(e,t){return Pe(e,t)||H(e,t)}function W(e,t,n){function r(){i(s)}var o,i,a;"string"==typeof e?(o=e,i=t,a=n):(o=e.name||"Autorun@"+ve(),i=e,a=t),me("function"==typeof i,T("m004")),me(!1===_(i),T("m005")),a&&(i=i.bind(a));var s=new er(o,function(){this.track(r)});return s.schedule(),s.getDisposer()}function J(e,t,n,r){var o,i,a,s;return"string"==typeof e?(o=e,i=t,a=n,s=r):(o="When@"+ve(),i=e,a=t,s=n),W(o,function(e){if(i.call(s)){e.dispose();var t=wt();a.call(s),mt(t)}})}function F(e,t,n,r){function o(){a(M)}var i,a,s,u;"string"==typeof e?(i=e,a=t,s=n,u=r):(i=e.name||"AutorunAsync@"+ve(),a=e,s=t,u=n),me(!1===_(a),T("m006")),void 0===s&&(s=1),u&&(a=a.bind(u));var c=!1,M=new er(i,function(){c||(c=!0,setTimeout(function(){c=!1,M.isDisposed||M.track(o)},s))});return M.schedule(),M.getDisposer()}function $(e,t,n){function r(){if(!c.isDisposed){var n=!1;c.track(function(){var t=e(c);n=a||!u(i,t),i=t}),a&&o.fireImmediately&&t(i,c),a||!0!==n||t(i,c),a&&(a=!1)}}arguments.length>3&&we(T("m007")),ye(e)&&we(T("m008"));var o;o="object"===(void 0===n?"undefined":en(n))?n:{},o.name=o.name||e.name||t.name||"Reaction@"+ve(),o.fireImmediately=!0===n||!0===o.fireImmediately,o.delay=o.delay||0,o.compareStructural=o.compareStructural||o.struct||!1,t=Tn(o.name,o.context?t.bind(o.context):t),o.context&&(e=e.bind(o.context));var i,a=!0,s=!1,u=o.equals?o.equals:o.compareStructural||o.struct?bn.structural:bn.default,c=new er(o.name,function(){a||1>o.delay?r():s||(s=!0,setTimeout(function(){s=!1,r()},o.delay))});return c.schedule(),c.getDisposer()}function q(e,t){if(ae(e)&&e.hasOwnProperty("$mobx"))return e.$mobx;me(Object.isExtensible(e),T("m035")),ke(e)||(t=(e.constructor.name||"ObservableObject")+"@"+ve()),t||(t="ObservableObject@"+ve());var n=new mn(e,t);return Ce(e,"$mobx",n),n}function X(e,t,n,r){if(e.values[t]&&!wn(e.values[t]))return me("value"in n,"The property "+t+" in "+e.name+" is already observable, cannot redefine it as computed property"),void(e.target[t]=n.value);if("value"in n)if(ye(n.value)){var o=n.value;K(e,t,o.initialValue,o.enhancer)}else _(n.value)&&!0===n.value.autoBind?Q(e.target,t,n.value.originalFn):wn(n.value)?te(e,t,n.value):K(e,t,n.value,r);else ee(e,t,n.get,n.set,bn.default,!0)}function K(e,t,n,o){if(Qe(e.target,t),r(e)){var a=i(e,{object:e.target,name:t,type:"add",newValue:n});if(!a)return;n=a.newValue}n=(e.values[t]=new Nn(n,o,e.name+"."+t,!1)).value,Object.defineProperty(e.target,t,ne(t)),ie(e,e.target,t,n)}function ee(e,t,n,r,o,i){i&&Qe(e.target,t),e.values[t]=new vn(n,e.target,o,e.name+"."+t,r),i&&Object.defineProperty(e.target,t,re(t))}function te(e,t,n){n.name=e.name+"."+t,n.scope||(n.scope=e.target),e.values[t]=n,Object.defineProperty(e.target,t,re(t))}function ne(e){return xn[e]||(xn[e]={configurable:!0,enumerable:!0,get:function(){return this.$mobx.values[e].get()},set:function(t){oe(this,e,t)}})}function re(e){return On[e]||(On[e]={configurable:!0,enumerable:!1,get:function(){return this.$mobx.values[e].get()},set:function(t){return this.$mobx.values[e].set(t)}})}function oe(e,t,n){var o=e.$mobx,s=o.values[t];if(r(o)){var M=i(o,{type:"update",object:e,name:t,newValue:n});if(!M)return;n=M.newValue}if((n=s.prepareNewValue(n))!==dn){var f=a(o),y=c(),M=f||y?{type:"update",object:e,oldValue:s.value,name:t,newValue:n}:null;y&&l(M),s.setNewValue(n),f&&u(o,M),y&&p()}}function ie(e,t,n,r){var o=a(e),i=c(),s=o||i?{type:"add",object:t,name:n,newValue:r}:null;i&&l(s),o&&u(e,s),i&&p()}function ae(e){return!!Le(e)&&(A(e),In(e.$mobx))}function se(e,t){if(null===e||void 0===e)return!1;if(void 0!==t){if(j(e)||Yn(e))throw Error(T("m019"));if(ae(e)){var n=e.$mobx;return n.values&&!!n.values[t]}return!1}return ae(e)||!!e.$mobx||on(e)||rr(e)||wn(e)}function ue(e){return me(!!e,":("),L(function(t,n,r,o,i){Qe(t,n),me(!i||!i.get,T("m022")),K(q(t,void 0),n,r,e)},function(e){var t=this.$mobx.values[e];if(void 0!==t)return t.get()},function(e,t){oe(this,e,t)},!0,!1)}function ce(e){for(var t=[],n=1;arguments.length>n;n++)t[n-1]=arguments[n];return le(e,Ne,t)}function Me(e){for(var t=[],n=1;arguments.length>n;n++)t[n-1]=arguments[n];return le(e,De,t)}function le(e,t,n){me(arguments.length>=2,T("m014")),me("object"===(void 0===e?"undefined":en(e)),T("m015")),me(!Yn(e),T("m016")),n.forEach(function(e){me("object"===(void 0===e?"undefined":en(e)),T("m017")),me(!se(e),T("m018"))});for(var r=q(e),o={},i=n.length-1;i>=0;i--){var a=n[i];for(var s in a)if(!0!==o[s]&&Se(a,s)){if(o[s]=!0,e===a&&!_e(e,s))continue;var u=Object.getOwnPropertyDescriptor(a,s);X(r,s,u,t)}}return e}function pe(e){if(void 0===e&&(e=void 0),"string"==typeof arguments[1])return En.apply(null,arguments);if(me(1>=arguments.length,T("m021")),me(!ye(e),T("m020")),se(e))return e;var t=Ne(e,void 0,void 0);return t!==e?t:Cn.box(e)}function fe(e){we("Expected one or two arguments to observable."+e+". Did you accidentally try to use observable."+e+" as decorator?")}function ye(e){return"object"===(void 0===e?"undefined":en(e))&&null!==e&&!0===e.isMobxModifierDescriptor}function de(e,t){return me(!ye(t),"Modifiers cannot be nested"),{isMobxModifierDescriptor:!0,initialValue:t,enhancer:e}}function Ne(e,t,n){return ye(e)&&we("You tried to assign a modifier wrapped value to a collection, please define modifiers when creating the collection, not when modifying it"),se(e)?e:Array.isArray(e)?Cn.array(e,n):ke(e)?Cn.object(e,n):Re(e)?Cn.map(e,n):e}function ge(e,t,n){return ye(e)&&we("You tried to assign a modifier wrapped value to a collection, please define modifiers when creating the collection, not when modifying it"),void 0===e||null===e?e:ae(e)||j(e)||Yn(e)?e:Array.isArray(e)?Cn.shallowArray(e,n):ke(e)?Cn.shallowObject(e,n):Re(e)?Cn.shallowMap(e,n):we("The shallow modifier / decorator can only used in combination with arrays, objects and maps")}function De(e){return e}function he(e,t,n){if(Y(e,t))return t;if(se(e))return e;if(Array.isArray(e))return new pn(e,he,n);if(Re(e))return new Qn(e,he,n);if(ke(e)){var r={};return q(r,n),le(r,he,[e]),r}return e}function je(e,t){return Y(e,t)?t:e}function Te(e,t){void 0===t&&(t=void 0),ct();try{return e.apply(t)}finally{Mt()}}function ze(e){return xe("`mobx.map` is deprecated, use `new ObservableMap` or `mobx.observable.map` instead"),Cn.map(e)}function be(){return"undefined"!=typeof window?window:e}function ve(){return++Vn.mobxGuid}function we(e,t){throw me(!1,e,t),"X"}function me(e,t,n){if(!e)throw Error("[mobx] Invariant failed: "+t+(n?" in '"+n+"'":""))}function xe(e){return-1===Bn.indexOf(e)&&(Bn.push(e),console.error("[mobx] Deprecated: "+e),!0)}function Oe(e){var t=!1;return function(){if(!t)return t=!0,e.apply(this,arguments)}}function Ie(e){var t=[];return e.forEach(function(e){-1===t.indexOf(e)&&t.push(e)}),t}function Ee(e,t,n){return void 0===t&&(t=100),void 0===n&&(n=" - "),e?e.slice(0,t).join(n)+(e.length>t?" (... and "+(e.length-t)+"more)":""):""}function Le(e){return null!==e&&"object"===(void 0===e?"undefined":en(e))}function ke(e){if(null===e||"object"!==(void 0===e?"undefined":en(e)))return!1;var t=Object.getPrototypeOf(e);return t===Object.prototype||null===t}function Ae(){for(var e=arguments[0],t=1,n=arguments.length;n>t;t++){var r=arguments[t];for(var o in r)Se(r,o)&&(e[o]=r[o])}return e}function Se(e,t){return Gn.call(e,t)}function Ue(e,t,n){Object.defineProperty(e,t,{enumerable:!1,writable:!0,configurable:!0,value:n})}function Ce(e,t,n){Object.defineProperty(e,t,{enumerable:!1,writable:!1,configurable:!0,value:n})}function _e(e,t){var n=Object.getOwnPropertyDescriptor(e,t);return!n||!1!==n.configurable&&!1!==n.writable}function Qe(e,t){me(_e(e,t),"Cannot make property '"+t+"' observable, it is not configurable and writable in the target object")}function Ye(e,t){var n="isMobX"+e;return t.prototype[n]=!0,function(e){return Le(e)&&!0===e[n]}}function Pe(e,t){return"number"==typeof e&&"number"==typeof t&&isNaN(e)&&isNaN(t)}function Be(e){return Array.isArray(e)||j(e)}function Re(e){return void 0!==be().Map&&e instanceof be().Map}function Ge(e){return ke(e)?Object.keys(e):Array.isArray(e)?e.map(function(e){return e[0]}):Re(e)?Array.from(e.keys()):Yn(e)?e.keys():we("Cannot get keys from "+e)}function He(e){for(var t=[];;){var n=e.next();if(n.done)break;t.push(n.value)}return t}function Ze(){return"function"==typeof Symbol&&Symbol.toPrimitive||"@@toPrimitive"}function Ve(e){return null===e?null:"object"===(void 0===e?"undefined":en(e))?""+e:e}function We(){Jn=!0,be().__mobxInstanceCount--}function Je(){xe("Using `shareGlobalState` is not recommended, use peer dependencies instead. See https://github.com/mobxjs/mobx/issues/1082 for details."),Wn=!0;var e=be(),t=Vn;if(e.__mobservableTrackingStack||e.__mobservableViewStack)throw Error("[mobx] An incompatible version of mobservable is already loaded.");if(e.__mobxGlobal&&e.__mobxGlobal.version!==t.version)throw Error("[mobx] An incompatible version of mobx is already loaded.");e.__mobxGlobal?Vn=e.__mobxGlobal:e.__mobxGlobal=t}function Fe(){return Vn}function $e(){Vn.resetId++;var e=new Zn;for(var t in e)-1===Hn.indexOf(t)&&(Vn[t]=e[t]);Vn.allowStateChanges=!Vn.strictMode}function qe(e,t){if("object"===(void 0===e?"undefined":en(e))&&null!==e){if(j(e))return me(void 0===t,T("m036")),e.$mobx.atom;if(Yn(e)){var n=e;if(void 0===t)return qe(n._keys);var r=n._data[t]||n._hasMap[t];return me(!!r,"the entry '"+t+"' does not exist in the observable map '"+Ke(e)+"'"),r}if(A(e),ae(e)){if(!t)return we("please specify a property");var r=e.$mobx.values[t];return me(!!r,"no observable property '"+t+"' found on the observable object '"+Ke(e)+"'"),r}if(on(e)||wn(e)||rr(e))return e}else if("function"==typeof e&&rr(e.$mobx))return e.$mobx;return we("Cannot obtain atom from "+e)}function Xe(e,t){return me(e,"Expecting some object"),void 0!==t?Xe(qe(e,t)):on(e)||wn(e)||rr(e)?e:Yn(e)?e:(A(e),e.$mobx?e.$mobx:void me(!1,"Cannot obtain administration from "+e))}function Ke(e,t){var n;return n=void 0!==t?qe(e,t):ae(e)||Yn(e)?Xe(e):qe(e),n.name}function et(e,t){return tt(qe(e,t))}function tt(e){var t={name:e.name};return e.observing&&e.observing.length>0&&(t.dependencies=Ie(e.observing).map(tt)),t}function nt(e,t){return rt(qe(e,t))}function rt(e){var t={name:e.name};return ot(e)&&(t.observers=it(e).map(rt)),t}function ot(e){return e.observers&&e.observers.length>0}function it(e){return e.observers}function at(e,t){var n=e.observers.length;n&&(e.observersIndexes[t.__mapid]=n),e.observers[n]=t,e.lowestObserverState>t.dependenciesState&&(e.lowestObserverState=t.dependenciesState)}function st(e,t){if(1===e.observers.length)e.observers.length=0,ut(e);else{var n=e.observers,r=e.observersIndexes,o=n.pop();if(o!==t){var i=r[t.__mapid]||0;i?r[o.__mapid]=i:delete r[o.__mapid],n[i]=o}delete r[t.__mapid]}}function ut(e){e.isPendingUnobservation||(e.isPendingUnobservation=!0,Vn.pendingUnobservations.push(e))}function ct(){Vn.inBatch++}function Mt(){if(0==--Vn.inBatch){St();for(var e=Vn.pendingUnobservations,t=0;e.length>t;t++){var n=e[t];n.isPendingUnobservation=!1,0===n.observers.length&&n.onBecomeUnobserved()}Vn.pendingUnobservations=[]}}function lt(e){var t=Vn.trackingDerivation;null!==t?t.runId!==e.lastAccessedBy&&(e.lastAccessedBy=t.runId,t.newObserving[t.unboundDepsCount++]=e):0===e.observers.length&&ut(e)}function pt(e){if(e.lowestObserverState!==qn.STALE){e.lowestObserverState=qn.STALE;for(var t=e.observers,n=t.length;n--;){var r=t[n];r.dependenciesState===qn.UP_TO_DATE&&(r.isTracing!==Xn.NONE&&dt(r,e),r.onBecomeStale()),r.dependenciesState=qn.STALE}}}function ft(e){if(e.lowestObserverState!==qn.STALE){e.lowestObserverState=qn.STALE;for(var t=e.observers,n=t.length;n--;){var r=t[n];r.dependenciesState===qn.POSSIBLY_STALE?r.dependenciesState=qn.STALE:r.dependenciesState===qn.UP_TO_DATE&&(e.lowestObserverState=qn.UP_TO_DATE)}}}function yt(e){if(e.lowestObserverState===qn.UP_TO_DATE){e.lowestObserverState=qn.POSSIBLY_STALE;for(var t=e.observers,n=t.length;n--;){var r=t[n];r.dependenciesState===qn.UP_TO_DATE&&(r.dependenciesState=qn.POSSIBLY_STALE,r.isTracing!==Xn.NONE&&dt(r,e),r.onBecomeStale())}}}function dt(e,t){if(console.log("[mobx.trace] '"+e.name+"' is invalidated due to a change in: '"+t.name+"'"),e.isTracing===Xn.BREAK){var n=[];Nt(et(e),n,1),Function("debugger;\n/*\nTracing '"+e.name+"'\n\nYou are entering this break point because derivation '"+e.name+"' is being traced and '"+t.name+"' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n"+(e instanceof vn?""+e.derivation:"")+"\n\nThe dependencies for this derivation are:\n\n"+n.join("\n")+"\n*/\n    ")()}}function Nt(e,t,n){if(t.length>=1e3)return void t.push("(and many more)");t.push(""+Array(n).join("\t")+e.name),e.dependencies&&e.dependencies.forEach(function(e){return Nt(e,t,n+1)})}function gt(e){return e instanceof Kn}function Dt(e){switch(e.dependenciesState){case qn.UP_TO_DATE:return!1;case qn.NOT_TRACKING:case qn.STALE:return!0;case qn.POSSIBLY_STALE:for(var t=wt(),n=e.observing,r=n.length,o=0;r>o;o++){var i=n[o];if(wn(i)){try{i.get()}catch(e){return mt(t),!0}if(e.dependenciesState===qn.STALE)return mt(t),!0}}return xt(e),mt(t),!1}}function ht(){return null!==Vn.trackingDerivation}function jt(e){var t=e.observers.length>0;Vn.computationDepth>0&&t&&we(T("m031")+e.name),!Vn.allowStateChanges&&t&&we(T(Vn.strictMode?"m030a":"m030b")+e.name)}function Tt(e,t,n){xt(e),e.newObserving=Array(e.observing.length+100),e.unboundDepsCount=0,e.runId=++Vn.runId;var r=Vn.trackingDerivation;Vn.trackingDerivation=e;var o;try{o=t.call(n)}catch(e){o=new Kn(e)}return Vn.trackingDerivation=r,zt(e),o}function zt(e){for(var t=e.observing,n=e.observing=e.newObserving,r=qn.UP_TO_DATE,o=0,i=e.unboundDepsCount,a=0;i>a;a++){var s=n[a];0===s.diffValue&&(s.diffValue=1,o!==a&&(n[o]=s),o++),s.dependenciesState>r&&(r=s.dependenciesState)}for(n.length=o,e.newObserving=null,i=t.length;i--;){var s=t[i];0===s.diffValue&&st(s,e),s.diffValue=0}for(;o--;){var s=n[o];1===s.diffValue&&(s.diffValue=0,at(s,e))}r!==qn.UP_TO_DATE&&(e.dependenciesState=r,e.onBecomeStale())}function bt(e){var t=e.observing;e.observing=[];for(var n=t.length;n--;)st(t[n],e);e.dependenciesState=qn.NOT_TRACKING}function vt(e){var t=wt(),n=e();return mt(t),n}function wt(){var e=Vn.trackingDerivation;return Vn.trackingDerivation=null,e}function mt(e){Vn.trackingDerivation=e}function xt(e){if(e.dependenciesState!==qn.UP_TO_DATE){e.dependenciesState=qn.UP_TO_DATE;for(var t=e.observing,n=t.length;n--;)t[n].lowestObserverState=qn.UP_TO_DATE}}function Ot(e){return console.log(e),e}function It(e){return xe("`whyRun` is deprecated in favor of `trace`"),e=Lt(arguments),e?wn(e)||rr(e)?Ot(e.whyRun()):we(T("m025")):Ot(T("m024"))}function Et(){for(var e=[],t=0;arguments.length>t;t++)e[t]=arguments[t];var n=!1;"boolean"==typeof e[e.length-1]&&(n=e.pop());var r=Lt(e);if(!r)return we("'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");r.isTracing===Xn.NONE&&console.log("[mobx.trace] '"+r.name+"' tracing enabled"),r.isTracing=n?Xn.BREAK:Xn.LOG}function Lt(e){switch(e.length){case 0:return Vn.trackingDerivation;case 1:return qe(e[0]);case 2:return qe(e[0],e[1])}}function kt(e){me(this&&this.$mobx&&rr(this.$mobx),"Invalid `this`"),me(!this.$mobx.errorHandler,"Only one onErrorHandler can be registered"),this.$mobx.errorHandler=e}function At(e){return Vn.globalReactionErrorHandlers.push(e),function(){var t=Vn.globalReactionErrorHandlers.indexOf(e);0>t||Vn.globalReactionErrorHandlers.splice(t,1)}}function St(){Vn.inBatch>0||Vn.isRunningReactions||nr(Ut)}function Ut(){Vn.isRunningReactions=!0;for(var e=Vn.pendingReactions,t=0;e.length>0;){++t===tr&&(console.error("Reaction doesn't converge to a stable state after "+tr+" iterations. Probably there is a cycle in the reactive function: "+e[0]),e.splice(0));for(var n=e.splice(0),r=0,o=n.length;o>r;r++)n[r].runReaction()}Vn.isRunningReactions=!1}function Ct(e){var t=nr;nr=function(n){return e(function(){return t(n)})}}function _t(e){return xe("asReference is deprecated, use observable.ref instead"),Cn.ref(e)}function Qt(e){return xe("asStructure is deprecated. Use observable.struct, computed.struct or reaction options instead."),Cn.struct(e)}function Yt(e){return xe("asFlat is deprecated, use observable.shallow instead"),Cn.shallow(e)}function Pt(e){return xe("asMap is deprecated, use observable.map or observable.shallowMap instead"),Cn.map(e||{})}function Bt(e){return L(function(t,n,r,o,i){me(void 0!==i,T("m009")),me("function"==typeof i.get,T("m010")),ee(q(t,""),n,i.get,i.set,e,!1)},function(e){var t=this.$mobx.values[e];if(void 0!==t)return t.get()},function(e,t){this.$mobx.values[e].set(t)},!1,!1)}function Rt(e,t){if(null===e||void 0===e)return!1;if(void 0!==t){if(!1===ae(e))return!1;if(!e.$mobx.values[t])return!1;var n=qe(e,t);return wn(n)}return wn(e)}function Gt(e,t,n,r){return"function"==typeof n?Zt(e,t,n,r):Ht(e,t,n)}function Ht(e,t,n){return Xe(e).observe(t,n)}function Zt(e,t,n,r){return Xe(e,t).observe(n,r)}function Vt(e,t,n){return"function"==typeof n?Jt(e,t,n):Wt(e,t)}function Wt(e,t){return Xe(e).intercept(t)}function Jt(e,t,n){return Xe(e,t).intercept(n)}function Ft(e,t){return ht()||console.warn(T("m013")),ar(e,{context:t}).get()}function $t(e,t,n){function r(r){return t&&n.push([e,r]),r}if(void 0===t&&(t=!0),void 0===n&&(n=[]),se(e)){if(t&&null===n&&(n=[]),t&&null!==e&&"object"===(void 0===e?"undefined":en(e)))for(var o=0,i=n.length;i>o;o++)if(n[o][0]===e)return n[o][1];if(j(e)){var a=r([]),s=e.map(function(e){return $t(e,t,n)});a.length=s.length;for(var o=0,i=s.length;i>o;o++)a[o]=s[o];return a}if(ae(e)){var a=r({});for(var u in e)a[u]=$t(e[u],t,n);return a}if(Yn(e)){var c=r({});return e.forEach(function(e,r){return c[r]=$t(e,t,n)}),c}if(gn(e))return $t(e.get(),t,n)}return e}function qt(e,t){me("function"==typeof e&&2>e.length,"createTransformer expects a function that accepts one argument");var r={},o=Vn.resetId,i=function(o){function i(t,n){var r=o.call(this,function(){return e(n)},void 0,bn.default,"Transformer-"+e.name+"-"+t,void 0)||this;return r.sourceIdentifier=t,r.sourceObject=n,r}return n(i,o),i.prototype.onBecomeUnobserved=function(){var e=this.value;o.prototype.onBecomeUnobserved.call(this),delete r[this.sourceIdentifier],t&&t(e,this.sourceObject)},i}(vn);return function(e){o!==Vn.resetId&&(r={},o=Vn.resetId);var t=Xt(e),n=r[t];return n?n.get():(n=r[t]=new i(t,e),n.get())}}function Xt(e){if("string"==typeof e||"number"==typeof e)return e;if(null===e||"object"!==(void 0===e?"undefined":en(e)))throw Error("[mobx] transform expected some kind of object or primitive value, got: "+e);var t=e.$transformId;return void 0===t&&(t=ve(),Ue(e,"$transformId",t)),t}function Kt(e,t,n){var r;if(Yn(e)||j(e)||gn(e))r=Xe(e);else{if(!ae(e))return we("Expected observable map, object or array as first array");if("string"!=typeof t)return we("InterceptReads can only be used with a specific property, not with an object in general");r=Xe(e,t)}return void 0!==r.dehancer?we("An intercept reader was already established"):(r.dehancer="function"==typeof t?t:n,function(){r.dehancer=void 0})}Object.defineProperty(t,"__esModule",{value:!0});var en="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},tn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},nn=function(){function e(e){void 0===e&&(e="Atom@"+ve()),this.name=e,this.isPendingUnobservation=!0,this.observers=[],this.observersIndexes={},this.diffValue=0,this.lastAccessedBy=0,this.lowestObserverState=qn.NOT_TRACKING}return e.prototype.onBecomeUnobserved=function(){},e.prototype.reportObserved=function(){lt(this)},e.prototype.reportChanged=function(){ct(),pt(this),Mt()},e.prototype.toString=function(){return this.name},e}(),rn=function(e){function t(t,n,r){void 0===t&&(t="Atom@"+ve()),void 0===n&&(n=Rn),void 0===r&&(r=Rn);var o=e.call(this,t)||this;return o.name=t,o.onBecomeObservedHandler=n,o.onBecomeUnobservedHandler=r,o.isPendingUnobservation=!1,o.isBeingTracked=!1,o}return n(t,e),t.prototype.reportObserved=function(){return ct(),e.prototype.reportObserved.call(this),this.isBeingTracked||(this.isBeingTracked=!0,this.onBecomeObservedHandler()),Mt(),!!Vn.trackingDerivation},t.prototype.onBecomeUnobserved=function(){this.isBeingTracked=!1,this.onBecomeUnobservedHandler()},t}(nn),on=Ye("Atom",nn),an={spyReportEnd:!0},sn="__$$iterating",un=function(){var e=!1,t={};return Object.defineProperty(t,"0",{set:function(){e=!0}}),Object.create(t)[0]=1,!1===e}(),cn=0,Mn=function(){function e(){}return e}();!function(e,t){void 0!==Object.setPrototypeOf?Object.setPrototypeOf(e.prototype,t):void 0!==e.prototype.__proto__?e.prototype.__proto__=t:e.prototype=t}(Mn,Array.prototype),Object.isFrozen(Array)&&["constructor","push","shift","concat","pop","unshift","replace","find","findIndex","splice","reverse","sort"].forEach(function(e){Object.defineProperty(Mn.prototype,e,{configurable:!0,writable:!0,value:Array.prototype[e]})});var ln=function(){function e(e,t,n,r){this.array=n,this.owned=r,this.values=[],this.lastKnownLength=0,this.interceptors=null,this.changeListeners=null,this.atom=new nn(e||"ObservableArray@"+ve()),this.enhancer=function(n,r){return t(n,r,e+"[..]")}}return e.prototype.dehanceValue=function(e){return void 0!==this.dehancer?this.dehancer(e):e},e.prototype.dehanceValues=function(e){return void 0!==this.dehancer?e.map(this.dehancer):e},e.prototype.intercept=function(e){return o(this,e)},e.prototype.observe=function(e,t){return void 0===t&&(t=!1),t&&e({object:this.array,type:"splice",index:0,added:this.values.slice(),addedCount:this.values.length,removed:[],removedCount:0}),s(this,e)},e.prototype.getArrayLength=function(){return this.atom.reportObserved(),this.values.length},e.prototype.setArrayLength=function(e){if("number"!=typeof e||0>e)throw Error("[mobx.array] Out of range: "+e);var t=this.values.length;if(e!==t)if(e>t){for(var n=Array(e-t),r=0;e-t>r;r++)n[r]=void 0;this.spliceWithArray(t,0,n)}else this.spliceWithArray(e,t-e)},e.prototype.updateArrayLength=function(e,t){if(e!==this.lastKnownLength)throw Error("[mobx] Modification exception: the internal structure of an observable array was changed. Did you use peek() to change it?");this.lastKnownLength+=t,t>0&&e+t+1>cn&&h(e+t+1)},e.prototype.spliceWithArray=function(e,t,n){var o=this;jt(this.atom);var a=this.values.length;if(void 0===e?e=0:e>a?e=a:0>e&&(e=Math.max(0,a+e)),t=1===arguments.length?a-e:void 0===t||null===t?0:Math.max(0,Math.min(t,a-e)),void 0===n&&(n=[]),r(this)){var s=i(this,{object:this.array,type:"splice",index:e,removedCount:t,added:n});if(!s)return Pn;t=s.removedCount,n=s.added}n=n.map(function(e){return o.enhancer(e,void 0)}),this.updateArrayLength(a,n.length-t);var u=this.spliceItemsIntoValues(e,t,n);return 0===t&&0===n.length||this.notifyArraySplice(e,n,u),this.dehanceValues(u)},e.prototype.spliceItemsIntoValues=function(e,t,n){if(1e4>n.length)return(o=this.values).splice.apply(o,[e,t].concat(n));var r=this.values.slice(e,e+t);return this.values=this.values.slice(0,e).concat(n,this.values.slice(e+t)),r;var o},e.prototype.notifyArrayChildUpdate=function(e,t,n){var r=!this.owned&&c(),o=a(this),i=o||r?{object:this.array,type:"update",index:e,newValue:t,oldValue:n}:null;r&&l(i),this.atom.reportChanged(),o&&u(this,i),r&&p()},e.prototype.notifyArraySplice=function(e,t,n){var r=!this.owned&&c(),o=a(this),i=o||r?{object:this.array,type:"splice",index:e,removed:n,added:t,removedCount:n.length,addedCount:t.length}:null;r&&l(i),this.atom.reportChanged(),o&&u(this,i),r&&p()},e}(),pn=function(e){function t(t,n,r,o){void 0===r&&(r="ObservableArray@"+ve()),void 0===o&&(o=!1);var i=e.call(this)||this,a=new ln(r,n,i,o);return Ce(i,"$mobx",a),t&&t.length&&i.spliceWithArray(0,0,t),un&&Object.defineProperty(a.array,"0",fn),i}return n(t,e),t.prototype.intercept=function(e){return this.$mobx.intercept(e)},t.prototype.observe=function(e,t){return void 0===t&&(t=!1),this.$mobx.observe(e,t)},t.prototype.clear=function(){return this.splice(0)},t.prototype.concat=function(){for(var e=[],t=0;arguments.length>t;t++)e[t]=arguments[t];return this.$mobx.atom.reportObserved(),Array.prototype.concat.apply(this.peek(),e.map(function(e){return j(e)?e.peek():e}))},t.prototype.replace=function(e){return this.$mobx.spliceWithArray(0,this.$mobx.values.length,e)},t.prototype.toJS=function(){return this.slice()},t.prototype.toJSON=function(){return this.toJS()},t.prototype.peek=function(){return this.$mobx.atom.reportObserved(),this.$mobx.dehanceValues(this.$mobx.values)},t.prototype.find=function(e,t,n){void 0===n&&(n=0);var r=this.findIndex.apply(this,arguments);return-1===r?void 0:this.get(r)},t.prototype.findIndex=function(e,t,n){void 0===n&&(n=0);for(var r=this.peek(),o=r.length,i=n;o>i;i++)if(e.call(t,r[i],i,this))return i;return-1},t.prototype.splice=function(e,t){for(var n=[],r=2;arguments.length>r;r++)n[r-2]=arguments[r];switch(arguments.length){case 0:return[];case 1:return this.$mobx.spliceWithArray(e);case 2:return this.$mobx.spliceWithArray(e,t)}return this.$mobx.spliceWithArray(e,t,n)},t.prototype.spliceWithArray=function(e,t,n){return this.$mobx.spliceWithArray(e,t,n)},t.prototype.push=function(){for(var e=[],t=0;arguments.length>t;t++)e[t]=arguments[t];var n=this.$mobx;return n.spliceWithArray(n.values.length,0,e),n.values.length},t.prototype.pop=function(){return this.splice(Math.max(this.$mobx.values.length-1,0),1)[0]},t.prototype.shift=function(){return this.splice(0,1)[0]},t.prototype.unshift=function(){for(var e=[],t=0;arguments.length>t;t++)e[t]=arguments[t];var n=this.$mobx;return n.spliceWithArray(0,0,e),n.values.length},t.prototype.reverse=function(){var e=this.slice();return e.reverse.apply(e,arguments)},t.prototype.sort=function(){var e=this.slice();return e.sort.apply(e,arguments)},t.prototype.remove=function(e){var t=this.$mobx.dehanceValues(this.$mobx.values).indexOf(e);return t>-1&&(this.splice(t,1),!0)},t.prototype.move=function(e,t){function n(e){if(0>e)throw Error("[mobx.array] Index out of bounds: "+e+" is negative");var t=this.$mobx.values.length;if(e>=t)throw Error("[mobx.array] Index out of bounds: "+e+" is not smaller than "+t)}if(n.call(this,e),n.call(this,t),e!==t){var r,o=this.$mobx.values;r=t>e?o.slice(0,e).concat(o.slice(e+1,t+1),[o[e]],o.slice(t+1)):o.slice(0,t).concat([o[e]],o.slice(t,e),o.slice(e+1)),this.replace(r)}},t.prototype.get=function(e){var t=this.$mobx;if(t){if(t.values.length>e)return t.atom.reportObserved(),t.dehanceValue(t.values[e]);console.warn("[mobx.array] Attempt to read an array index ("+e+") that is out of bounds ("+t.values.length+"). Please check length first. Out of bound indices will not be tracked by MobX")}},t.prototype.set=function(e,t){var n=this.$mobx,o=n.values;if(o.length>e){jt(n.atom);var a=o[e];if(r(n)){var s=i(n,{type:"update",object:this,index:e,newValue:t});if(!s)return;t=s.newValue}t=n.enhancer(t,a);t!==a&&(o[e]=t,n.notifyArrayChildUpdate(e,t,a))}else{if(e!==o.length)throw Error("[mobx.array] Index out of bounds, "+e+" is larger than "+o.length);n.spliceWithArray(e,0,[t])}},t}(Mn);N(pn.prototype,function(){return d(this.slice())}),Object.defineProperty(pn.prototype,"length",{enumerable:!1,configurable:!0,get:function(){return this.$mobx.getArrayLength()},set:function(e){this.$mobx.setArrayLength(e)}}),["every","filter","forEach","indexOf","join","lastIndexOf","map","reduce","reduceRight","slice","some","toString","toLocaleString"].forEach(function(e){var t=Array.prototype[e];me("function"==typeof t,"Base function not defined on Array prototype: '"+e+"'"),Ue(pn.prototype,e,function(){return t.apply(this.peek(),arguments)})}),function(e,t){for(var n=0;t.length>n;n++)Ue(e,t[n],e[t[n]])}(pn.prototype,["constructor","intercept","observe","clear","concat","get","replace","toJS","toJSON","peek","find","findIndex","splice","spliceWithArray","push","pop","set","shift","unshift","reverse","sort","remove","move","toString","toLocaleString"]);var fn=g(0);h(1e3);var yn=Ye("ObservableArrayAdministration",ln),dn={},Nn=function(e){function t(t,n,r,o){void 0===r&&(r="ObservableValue@"+ve()),void 0===o&&(o=!0);var i=e.call(this,r)||this;return i.enhancer=n,i.hasUnreportedChange=!1,i.dehancer=void 0,i.value=n(t,void 0,r),o&&c()&&M({type:"create",object:i,newValue:i.value}),i}return n(t,e),t.prototype.dehanceValue=function(e){return void 0!==this.dehancer?this.dehancer(e):e},t.prototype.set=function(e){var t=this.value;if((e=this.prepareNewValue(e))!==dn){var n=c();n&&l({type:"update",object:this,newValue:e,oldValue:t}),this.setNewValue(e),n&&p()}},t.prototype.prepareNewValue=function(e){if(jt(this),r(this)){var t=i(this,{object:this,type:"update",newValue:e});if(!t)return dn;e=t.newValue}return e=this.enhancer(e,this.value,this.name),this.value!==e?e:dn},t.prototype.setNewValue=function(e){var t=this.value;this.value=e,this.reportChanged(),a(this)&&u(this,{type:"update",object:this,newValue:e,oldValue:t})},t.prototype.get=function(){return this.reportObserved(),this.dehanceValue(this.value)},t.prototype.intercept=function(e){return o(this,e)},t.prototype.observe=function(e,t){return t&&e({object:this,type:"update",newValue:this.value,oldValue:void 0}),s(this,e)},t.prototype.toJSON=function(){return this.get()},t.prototype.toString=function(){return this.name+"["+this.value+"]"},t.prototype.valueOf=function(){return Ve(this.get())},t}(nn);Nn.prototype[Ze()]=Nn.prototype.valueOf;var gn=Ye("ObservableValue",Nn),Dn={m001:"It is not allowed to assign new values to @action fields",m002:"`runInAction` expects a function",m003:"`runInAction` expects a function without arguments",m004:"autorun expects a function",m005:"Warning: attempted to pass an action to autorun. Actions are untracked and will not trigger on state changes. Use `reaction` or wrap only your state modification code in an action.",m006:"Warning: attempted to pass an action to autorunAsync. Actions are untracked and will not trigger on state changes. Use `reaction` or wrap only your state modification code in an action.",m007:"reaction only accepts 2 or 3 arguments. If migrating from MobX 2, please provide an options object",m008:"wrapping reaction expression in `asReference` is no longer supported, use options object instead",m009:"@computed can only be used on getter functions, like: '@computed get myProps() { return ...; }'. It looks like it was used on a property.",m010:"@computed can only be used on getter functions, like: '@computed get myProps() { return ...; }'",m011:"First argument to `computed` should be an expression. If using computed as decorator, don't pass it arguments",m012:"computed takes one or two arguments if used as function",m013:"[mobx.expr] 'expr' should only be used inside other reactive functions.",m014:"extendObservable expected 2 or more arguments",m015:"extendObservable expects an object as first argument",m016:"extendObservable should not be used on maps, use map.merge instead",m017:"all arguments of extendObservable should be objects",m018:"extending an object with another observable (object) is not supported. Please construct an explicit propertymap, using `toJS` if need. See issue #540",m019:"[mobx.isObservable] isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.",m020:"modifiers can only be used for individual object properties",m021:"observable expects zero or one arguments",m022:"@observable can not be used on getters, use @computed instead",m024:"whyRun() can only be used if a derivation is active, or by passing an computed value / reaction explicitly. If you invoked whyRun from inside a computation; the computation is currently suspended but re-evaluating because somebody requested its value.",m025:"whyRun can only be used on reactions and computed values",m026:"`action` can only be invoked on functions",m028:"It is not allowed to set `useStrict` when a derivation is running",m029:"INTERNAL ERROR only onBecomeUnobserved shouldn't be called twice in a row",m030a:"Since strict-mode is enabled, changing observed observable values outside actions is not allowed. Please wrap the code in an `action` if this change is intended. Tried to modify: ",m030b:"Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, the render function of a React component? Tried to modify: ",m031:"Computed values are not allowed to cause side effects by changing observables that are already being observed. Tried to modify: ",m032:"* This computation is suspended (not in use by any reaction) and won't run automatically.\n\tDidn't expect this computation to be suspended at this point?\n\t  1. Make sure this computation is used by a reaction (reaction, autorun, observer).\n\t  2. Check whether you are using this computation synchronously (in the same stack as they reaction that needs it).",m033:"`observe` doesn't support the fire immediately property for observable maps.",m034:"`mobx.map` is deprecated, use `new ObservableMap` or `mobx.observable.map` instead",m035:"Cannot make the designated object observable; it is not extensible",m036:"It is not possible to get index atoms from arrays",m037:'Hi there! I\'m sorry you have just run into an exception.\nIf your debugger ends up here, know that some reaction (like the render() of an observer component, autorun or reaction)\nthrew an exception and that mobx caught it, to avoid that it brings the rest of your application down.\nThe original cause of the exception (the code that caused this reaction to run (again)), is still in the stack.\n\nHowever, more interesting is the actual stack trace of the error itself.\nHopefully the error is an instanceof Error, because in that case you can inspect the original stack of the error from where it was thrown.\nSee `error.stack` property, or press the very subtle "(...)" link you see near the console.error message that probably brought you here.\nThat stack is more interesting than the stack of this console.error itself.\n\nIf the exception you see is an exception you created yourself, make sure to use `throw new Error("Oops")` instead of `throw "Oops"`,\nbecause the javascript environment will only preserve the original stack trace in the first form.\n\nYou can also make sure the debugger pauses the next time this very same exception is thrown by enabling "Pause on caught exception".\n(Note that it might pause on many other, unrelated exception as well).\n\nIf that all doesn\'t help you out, feel free to open an issue https://github.com/mobxjs/mobx/issues!\n',m038:"Missing items in this list?\n    1. Check whether all used values are properly marked as observable (use isObservable to verify)\n    2. Make sure you didn't dereference values too early. MobX observes props, not primitives. E.g: use 'person.name' instead of 'name' in your computation.\n"},hn=L(function(e,t,n,r){Ue(e,t,Tn(r&&1===r.length?r[0]:n.name||t||"<unnamed action>",n))},function(e){return this[e]},function(){me(!1,T("m001"))},!1,!0),jn=L(function(e,t,n){Q(e,t,n)},function(e){return this[e]},function(){me(!1,T("m001"))},!1,!1),Tn=function(e,t){return 1===arguments.length&&"function"==typeof e?z(e.name||"<unnamed action>",e):2===arguments.length&&"function"==typeof t?z(e,t):1===arguments.length&&"string"==typeof e?U(e):U(t).apply(null,arguments)};Tn.bound=function(e){if("function"==typeof e){var t=z("<not yet bound action>",e);return t.autoBind=!0,t}return jn.apply(null,arguments)};var zn=Object.prototype.toString,bn={identity:H,structural:Z,default:V},vn=function(){function e(e,t,n,r,o){this.derivation=e,this.scope=t,this.equals=n,this.dependenciesState=qn.NOT_TRACKING,this.observing=[],this.newObserving=null,this.isPendingUnobservation=!1,this.observers=[],this.observersIndexes={},this.diffValue=0,this.runId=0,this.lastAccessedBy=0,this.lowestObserverState=qn.UP_TO_DATE,this.unboundDepsCount=0,this.__mapid="#"+ve(),this.value=new Kn(null),this.isComputing=!1,this.isRunningSetter=!1,this.isTracing=Xn.NONE,this.name=r||"ComputedValue@"+ve(),o&&(this.setter=z(r+"-setter",o))}return e.prototype.onBecomeStale=function(){yt(this)},e.prototype.onBecomeUnobserved=function(){bt(this),this.value=void 0},e.prototype.get=function(){me(!this.isComputing,"Cycle detected in computation "+this.name,this.derivation),0===Vn.inBatch?(ct(),Dt(this)&&(this.isTracing!==Xn.NONE&&console.log("[mobx.trace] '"+this.name+"' is being read outside a reactive context and doing a full recompute"),this.value=this.computeValue(!1)),Mt()):(lt(this),Dt(this)&&this.trackAndCompute()&&ft(this));var e=this.value;if(gt(e))throw e.cause;return e},e.prototype.peek=function(){var e=this.computeValue(!1);if(gt(e))throw e.cause;return e},e.prototype.set=function(e){if(this.setter){me(!this.isRunningSetter,"The setter of computed value '"+this.name+"' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?"),this.isRunningSetter=!0;try{this.setter.call(this.scope,e)}finally{this.isRunningSetter=!1}}else me(!1,"[ComputedValue '"+this.name+"'] It is not possible to assign a new value to a computed value.")},e.prototype.trackAndCompute=function(){c()&&M({object:this.scope,type:"compute",fn:this.derivation});var e=this.value,t=this.dependenciesState===qn.NOT_TRACKING,n=this.value=this.computeValue(!0);return t||gt(e)||gt(n)||!this.equals(e,n)},e.prototype.computeValue=function(e){this.isComputing=!0,Vn.computationDepth++;var t;if(e)t=Tt(this,this.derivation,this.scope);else try{t=this.derivation.call(this.scope)}catch(e){t=new Kn(e)}return Vn.computationDepth--,this.isComputing=!1,t},e.prototype.observe=function(e,t){var n=this,r=!0,o=void 0;return W(function(){var i=n.get();if(!r||t){var a=wt();e({type:"update",object:n,newValue:i,oldValue:o}),mt(a)}r=!1,o=i})},e.prototype.toJSON=function(){return this.get()},e.prototype.toString=function(){return this.name+"["+this.derivation+"]"},e.prototype.valueOf=function(){return Ve(this.get())},e.prototype.whyRun=function(){var e=!!Vn.trackingDerivation,t=Ie(this.isComputing?this.newObserving:this.observing).map(function(e){return e.name}),n=Ie(it(this).map(function(e){return e.name}));return"\nWhyRun? computation '"+this.name+"':\n * Running because: "+(e?"[active] the value of this computation is needed by a reaction":this.isComputing?"[get] The value of this computed was requested outside a reaction":"[idle] not running at the moment")+"\n"+(this.dependenciesState===qn.NOT_TRACKING?T("m032"):" * This computation will re-run if any of the following observables changes:\n    "+Ee(t)+"\n    "+(this.isComputing&&e?" (... or any observable accessed during the remainder of the current run)":"")+"\n    "+T("m038")+"\n\n  * If the outcome of this computation changes, the following observers will be re-run:\n    "+Ee(n)+"\n")},e}();vn.prototype[Ze()]=vn.prototype.valueOf;var wn=Ye("ComputedValue",vn),mn=function(){function e(e,t){this.target=e,this.name=t,this.values={},this.changeListeners=null,this.interceptors=null}return e.prototype.observe=function(e,t){return me(!0!==t,"`observe` doesn't support the fire immediately property for observable objects."),s(this,e)},e.prototype.intercept=function(e){return o(this,e)},e}(),xn={},On={},In=Ye("ObservableObjectAdministration",mn),En=ue(Ne),Ln=ue(ge),kn=ue(De),An=ue(he),Sn=ue(je),Un={box:function(e,t){return arguments.length>2&&fe("box"),new Nn(e,Ne,t)},shallowBox:function(e,t){return arguments.length>2&&fe("shallowBox"),new Nn(e,De,t)},array:function(e,t){return arguments.length>2&&fe("array"),new pn(e,Ne,t)},shallowArray:function(e,t){return arguments.length>2&&fe("shallowArray"),new pn(e,De,t)},map:function(e,t){return arguments.length>2&&fe("map"),new Qn(e,Ne,t)},shallowMap:function(e,t){return arguments.length>2&&fe("shallowMap"),new Qn(e,De,t)},object:function(e,t){arguments.length>2&&fe("object");var n={};return q(n,t),ce(n,e),n},shallowObject:function(e,t){arguments.length>2&&fe("shallowObject");var n={};return q(n,t),Me(n,e),n},ref:function(){return 2>arguments.length?de(De,arguments[0]):kn.apply(null,arguments)},shallow:function(){return 2>arguments.length?de(ge,arguments[0]):Ln.apply(null,arguments)},deep:function(){return 2>arguments.length?de(Ne,arguments[0]):En.apply(null,arguments)},struct:function(){return 2>arguments.length?de(he,arguments[0]):An.apply(null,arguments)}},Cn=pe;Object.keys(Un).forEach(function(e){return Cn[e]=Un[e]}),Cn.deep.struct=Cn.struct,Cn.ref.struct=function(){return 2>arguments.length?de(je,arguments[0]):Sn.apply(null,arguments)};var _n={},Qn=function(){function e(e,t,n){void 0===t&&(t=Ne),void 0===n&&(n="ObservableMap@"+ve()),this.enhancer=t,this.name=n,this.$mobx=_n,this._data=Object.create(null),this._hasMap=Object.create(null),this._keys=new pn(void 0,De,this.name+".keys()",!0),this.interceptors=null,this.changeListeners=null,this.dehancer=void 0,this.merge(e)}return e.prototype._has=function(e){return void 0!==this._data[e]},e.prototype.has=function(e){return!!this.isValidKey(e)&&(e=""+e,this._hasMap[e]?this._hasMap[e].get():this._updateHasMapEntry(e,!1).get())},e.prototype.set=function(e,t){this.assertValidKey(e),e=""+e;var n=this._has(e);if(r(this)){var o=i(this,{type:n?"update":"add",object:this,newValue:t,name:e});if(!o)return this;t=o.newValue}return n?this._updateValue(e,t):this._addValue(e,t),this},e.prototype.delete=function(e){var t=this;if(this.assertValidKey(e),e=""+e,r(this)){var n=i(this,{type:"delete",object:this,name:e});if(!n)return!1}if(this._has(e)){var o=c(),s=a(this),n=s||o?{type:"delete",object:this,oldValue:this._data[e].value,name:e}:null;return o&&l(n),Te(function(){t._keys.remove(e),t._updateHasMapEntry(e,!1),t._data[e].setNewValue(void 0),t._data[e]=void 0}),s&&u(this,n),o&&p(),!0}return!1},e.prototype._updateHasMapEntry=function(e,t){var n=this._hasMap[e];return n?n.setNewValue(t):n=this._hasMap[e]=new Nn(t,De,this.name+"."+e+"?",!1),n},e.prototype._updateValue=function(e,t){var n=this._data[e];if((t=n.prepareNewValue(t))!==dn){var r=c(),o=a(this),i=o||r?{type:"update",object:this,oldValue:n.value,name:e,newValue:t}:null;r&&l(i),n.setNewValue(t),o&&u(this,i),r&&p()}},e.prototype._addValue=function(e,t){var n=this;Te(function(){var r=n._data[e]=new Nn(t,n.enhancer,n.name+"."+e,!1);t=r.value,n._updateHasMapEntry(e,!0),n._keys.push(e)});var r=c(),o=a(this),i=o||r?{type:"add",object:this,name:e,newValue:t}:null;r&&l(i),o&&u(this,i),r&&p()},e.prototype.get=function(e){return e=""+e,this.dehanceValue(this.has(e)?this._data[e].get():void 0)},e.prototype.dehanceValue=function(e){return void 0!==this.dehancer?this.dehancer(e):e},e.prototype.keys=function(){return d(this._keys.slice())},e.prototype.values=function(){return d(this._keys.map(this.get,this))},e.prototype.entries=function(){var e=this;return d(this._keys.map(function(t){return[t,e.get(t)]}))},e.prototype.forEach=function(e,t){var n=this;this.keys().forEach(function(r){return e.call(t,n.get(r),r,n)})},e.prototype.merge=function(e){var t=this;return Yn(e)&&(e=e.toJS()),Te(function(){ke(e)?Object.keys(e).forEach(function(n){return t.set(n,e[n])}):Array.isArray(e)?e.forEach(function(e){return t.set(e[0],e[1])}):Re(e)?e.forEach(function(e,n){return t.set(n,e)}):null!==e&&void 0!==e&&we("Cannot initialize map from "+e)}),this},e.prototype.clear=function(){var e=this;Te(function(){vt(function(){e.keys().forEach(e.delete,e)})})},e.prototype.replace=function(e){var t=this;return Te(function(){var n=Ge(e);t.keys().filter(function(e){return-1===n.indexOf(e)}).forEach(function(e){return t.delete(e)}),t.merge(e)}),this},Object.defineProperty(e.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),e.prototype.toJS=function(){var e=this,t={};return this.keys().forEach(function(n){return t[n]=e.get(n)}),t},e.prototype.toJSON=function(){return this.toJS()},e.prototype.isValidKey=function(e){return null!==e&&void 0!==e&&("string"==typeof e||"number"==typeof e||"boolean"==typeof e)},e.prototype.assertValidKey=function(e){if(!this.isValidKey(e))throw Error("[mobx.map] Invalid key: '"+e+"', only strings, numbers and booleans are accepted as key in observable maps.")},e.prototype.toString=function(){var e=this;return this.name+"[{ "+this.keys().map(function(t){return t+": "+e.get(t)}).join(", ")+" }]"},e.prototype.observe=function(e,t){return me(!0!==t,T("m033")),s(this,e)},e.prototype.intercept=function(e){return o(this,e)},e}();N(Qn.prototype,function(){return this.entries()});var Yn=Ye("ObservableMap",Qn),Pn=[];Object.freeze(Pn);var Bn=[],Rn=function(){},Gn=Object.prototype.hasOwnProperty,Hn=["mobxGuid","resetId","spyListeners","strictMode","runId"],Zn=function(){function e(){this.version=5,this.trackingDerivation=null,this.computationDepth=0,this.runId=0,this.mobxGuid=0,this.inBatch=0,this.pendingUnobservations=[],this.pendingReactions=[],this.isRunningReactions=!1,this.allowStateChanges=!0,this.strictMode=!1,this.resetId=0,this.spyListeners=[],this.globalReactionErrorHandlers=[]}return e}(),Vn=new Zn,Wn=!1,Jn=!1,Fn=!1,$n=be();$n.__mobxInstanceCount?($n.__mobxInstanceCount++,setTimeout(function(){Wn||Jn||Fn||(Fn=!0,console.warn("[mobx] Warning: there are multiple mobx instances active. This might lead to unexpected results. See https://github.com/mobxjs/mobx/issues/1082 for details."))},1)):$n.__mobxInstanceCount=1;var qn;!function(e){e[e.NOT_TRACKING=-1]="NOT_TRACKING",e[e.UP_TO_DATE=0]="UP_TO_DATE",e[e.POSSIBLY_STALE=1]="POSSIBLY_STALE",e[e.STALE=2]="STALE"}(qn||(t.IDerivationState=qn={}));var Xn;!function(e){e[e.NONE=0]="NONE",e[e.LOG=1]="LOG",e[e.BREAK=2]="BREAK"}(Xn||(Xn={}));var Kn=function(){function e(e){this.cause=e}return e}(),er=function(){function e(e,t){void 0===e&&(e="Reaction@"+ve()),this.name=e,this.onInvalidate=t,this.observing=[],this.newObserving=[],this.dependenciesState=qn.NOT_TRACKING,this.diffValue=0,this.runId=0,this.unboundDepsCount=0,this.__mapid="#"+ve(),this.isDisposed=!1,this._isScheduled=!1,this._isTrackPending=!1,this._isRunning=!1,this.isTracing=Xn.NONE}return e.prototype.onBecomeStale=function(){this.schedule()},e.prototype.schedule=function(){this._isScheduled||(this._isScheduled=!0,Vn.pendingReactions.push(this),St())},e.prototype.isScheduled=function(){return this._isScheduled},e.prototype.runReaction=function(){this.isDisposed||(ct(),this._isScheduled=!1,Dt(this)&&(this._isTrackPending=!0,this.onInvalidate(),this._isTrackPending&&c()&&M({object:this,type:"scheduled-reaction"})),Mt())},e.prototype.track=function(e){ct();var t,n=c();n&&(t=Date.now(),l({object:this,type:"reaction",fn:e})),this._isRunning=!0;var r=Tt(this,e,void 0);this._isRunning=!1,this._isTrackPending=!1,this.isDisposed&&bt(this),gt(r)&&this.reportExceptionInDerivation(r.cause),n&&p({time:Date.now()-t}),Mt()},e.prototype.reportExceptionInDerivation=function(e){var t=this;if(this.errorHandler)return void this.errorHandler(e,this);var n="[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '"+this,r=T("m037");console.error(n||r,e),c()&&M({type:"error",message:n,error:e,object:this}),Vn.globalReactionErrorHandlers.forEach(function(n){return n(e,t)})},e.prototype.dispose=function(){this.isDisposed||(this.isDisposed=!0,this._isRunning||(ct(),bt(this),Mt()))},e.prototype.getDisposer=function(){var e=this.dispose.bind(this);return e.$mobx=this,e.onError=kt,e},e.prototype.toString=function(){return"Reaction["+this.name+"]"},e.prototype.whyRun=function(){var e=Ie(this._isRunning?this.newObserving:this.observing).map(function(e){return e.name});return"\nWhyRun? reaction '"+this.name+"':\n * Status: ["+(this.isDisposed?"stopped":this._isRunning?"running":this.isScheduled()?"scheduled":"idle")+"]\n * This reaction will re-run if any of the following observables changes:\n    "+Ee(e)+"\n    "+(this._isRunning?" (... or any observable accessed during the remainder of the current run)":"")+"\n\t"+T("m038")+"\n"},e.prototype.trace=function(e){void 0===e&&(e=!1),Et(this,e)},e}(),tr=100,nr=function(e){return e()},rr=Ye("Reaction",er),or=Bt(bn.default),ir=Bt(bn.structural),ar=function(e,t){if("string"==typeof t)return or.apply(null,arguments);me("function"==typeof e,T("m011")),me(3>arguments.length,T("m012"));var n="object"===(void 0===t?"undefined":en(t))?t:{};return n.setter="function"==typeof t?t:n.setter,new vn(e,n.context,n.equals?n.equals:n.compareStructural||n.struct?bn.structural:bn.default,n.name||e.name||"",n.setter)};ar.struct=ir,ar.equals=Bt;var sr={allowStateChanges:O,deepEqual:Y,getAtom:qe,getDebugName:Ke,getDependencyTree:et,getAdministration:Xe,getGlobalState:Fe,getObserverTree:nt,interceptReads:Kt,isComputingDerivation:ht,isSpyEnabled:c,onReactionError:At,reserveArrayBuffer:h,resetGlobalState:$e,isolateGlobalState:We,shareGlobalState:Je,spyReport:M,spyReportEnd:p,spyReportStart:l,setReactionScheduler:Ct},ur={Reaction:er,untracked:vt,Atom:rn,BaseAtom:nn,useStrict:m,isStrictModeEnabled:x,spy:f,comparer:bn,asReference:_t,asFlat:Yt,asStructure:Qt,asMap:Pt,isModifierDescriptor:ye,isObservableObject:ae,isBoxedObservable:gn,isObservableArray:j,ObservableMap:Qn,isObservableMap:Yn,map:ze,transaction:Te,observable:Cn,computed:ar,isObservable:se,isComputed:Rt,extendObservable:ce,extendShallowObservable:Me,observe:Gt,intercept:Vt,autorun:W,autorunAsync:F,when:J,reaction:$,action:Tn,isAction:_,runInAction:C,expr:Ft,toJS:$t,createTransformer:qt,whyRun:It,isArrayLike:Be,extras:sr},cr=!1;for(var Mr in ur)!function(e){var t=ur[e];Object.defineProperty(ur,e,{get:function(){return cr||(cr=!0,console.warn("Using default export (`import mobx from 'mobx'`) is deprecated and wonâ€™t work in mobx@4.0.0\nUse `import * as mobx from 'mobx'` instead")),t}})}(Mr);"object"===("undefined"==typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__?"undefined":en(__MOBX_DEVTOOLS_GLOBAL_HOOK__))&&__MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({spy:f,extras:sr}),t.extras=sr,t.Reaction=er,t.untracked=vt,t.IDerivationState=qn,t.Atom=rn,t.BaseAtom=nn,t.useStrict=m,t.isStrictModeEnabled=x,t.spy=f,t.comparer=bn,t.asReference=_t,t.asFlat=Yt,t.asStructure=Qt,t.asMap=Pt,t.isModifierDescriptor=ye,t.isObservableObject=ae,t.isBoxedObservable=gn,t.isObservableArray=j,t.ObservableMap=Qn,t.isObservableMap=Yn,t.map=ze,t.transaction=Te,t.observable=Cn,t.computed=ar,t.isObservable=se,t.isComputed=Rt,t.extendObservable=ce,t.extendShallowObservable=Me,t.observe=Gt,t.intercept=Vt,t.autorun=W,t.autorunAsync=F,t.when=J,t.reaction=$,t.action=Tn,t.isAction=_,t.runInAction=C,t.expr=Ft,t.toJS=$t,t.createTransformer=qt,t.whyRun=It,t.trace=Et,t.isArrayLike=Be,t.default=ur}).call(t,n(11))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Provider=t.inject=t.connect=t.useStaticRendering=t.Observer=t.observer=void 0;var r=n(3);Object.defineProperty(t,"observer",{enumerable:!0,get:function(){return r.observer}}),Object.defineProperty(t,"Observer",{enumerable:!0,get:function(){return r.Observer}}),Object.defineProperty(t,"useStaticRendering",{enumerable:!0,get:function(){return r.useStaticRendering}});var o=n(12);Object.defineProperty(t,"connect",{enumerable:!0,get:function(){return o.connect}});var i=n(5);Object.defineProperty(t,"inject",{enumerable:!0,get:function(){return i.inject}});var a=n(14);Object.defineProperty(t,"Provider",{enumerable:!0,get:function(){return a.Provider}});var s=n(1);if(!n(0).Component)throw Error("mobx-preact requires Preact to be available");if(!s.extras)throw Error("mobx-preact requires mobx to be available")},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":y(t))&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":y(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){j=e}function s(e){var t=g.extras.getGlobalState().allowStateChanges;return g.extras.getGlobalState().allowStateChanges=e,t}function u(e){g.extras.getGlobalState().allowStateChanges=e}function c(e,t,n,r,o){var i=s(e),a=void 0;try{a=t(n,r,o)}finally{u(i)}return a}function M(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=e[t],o=z[t];e[t]=r?!0===n?function(){o.apply(this,arguments),r.apply(this,arguments)}:function(){r.apply(this,arguments),o.apply(this,arguments)}:o}function l(e,t){if(null==e||null==t||"object"!==(void 0===e?"undefined":N(e))||"object"!==(void 0===t?"undefined":N(t)))return e!==t;var n=Object.keys(e);if(n.length!==Object.keys(t).length)return!0;for(var r=void 0,o=n.length-1;r=n[o];o--)if(t[r]!==e[r])return!0;return!1}function p(e){if(arguments.length>1&&T.warn('Mobx observer: Using observer to inject stores is not supported. Use `@connect(["store1", "store2"]) ComponentClass instead or preferably, use `@inject("store1", "store2") @observer ComponentClass` or `inject("store1", "store2")(observer(componentClass))``'),!0===e.isMobxInjector&&T.warn("Mobx observer: You are trying to use 'observer' on a component that already has 'inject'. Please apply 'observer' before applying 'inject'"),(0,h.isStateless)(e)){var t,n;return p((n=t=function(t){function n(){return r(this,n),o(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return i(n,t),d(n,[{key:"render",value:function(){return e.call(this,this.props,this.context)}}]),n}(D.Component),t.displayName=(0,h.makeDisplayName)(e),n))}if(!e)throw Error("Please pass a valid component to 'observer'");return f(e.prototype||e),e.isMobXReactObserver=!0,e}function f(e){M(e,"componentWillMount",!0),M(e,"componentDidMount"),e.shouldComponentUpdate||(e.shouldComponentUpdate=z.shouldComponentUpdate)}var y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0}),t.Observer=void 0;var d=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),N="function"==typeof Symbol&&"symbol"===y(Symbol.iterator)?function(e){return void 0===e?"undefined":y(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":y(e)};t.useStaticRendering=a,t.observer=p;var g=n(1),D=n(0),h=n(4),j=!1,T=console,z={componentWillMount:function(){function e(e){var t=this[e],n=new g.Atom("reactive "+e);Object.defineProperty(this,e,{configurable:!0,enumerable:!0,get:function(){return n.reportObserved(),t},set:function(e){!o&&l(t,e)?(t=e,r=!0,n.reportChanged(),r=!1):t=e}})}var t=this;if(!0!==j){var n=(0,h.makeDisplayName)(this),r=!1,o=!1;e.call(this,"props"),e.call(this,"state");var i=this.render.bind(this),a=null,s=!1,u=function(){return a=new g.Reaction(n+".render()",function(){if(!s&&(s=!0,"function"==typeof t.componentWillReact&&t.componentWillReact(),!0!==t.__$mobxIsUnmounted)){var e=!0;try{o=!0,r||D.Component.prototype.forceUpdate.call(t),e=!1}finally{o=!1,e&&a.dispose()}}}),a.reactComponent=t,M.$mobx=a,t.render=M,M(t.props,t.state,t.context)},M=function(e,t,n){s=!1;var r=void 0,o=void 0;if(a.track(function(){try{o=c(!1,i,e,t,n)}catch(e){r=e}}),r)throw r;return o};this.render=u}},componentWillUnmount:function(){!0!==j&&(this.render.$mobx&&this.render.$mobx.dispose(),this.__$mobxIsUnmounted=!0)},componentDidMount:function(){},componentDidUpdate:function(){},shouldComponentUpdate:function(e,t){return j&&T.warn("[mobx-preact] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side."),this.state!==t||l(this.props,e)}};(t.Observer=p(function(e){return e.children[0]()})).displayName="Observer"},function(e,t,n){"use strict";function r(e){return!(e.prototype&&e.prototype.render||i.Component.isPrototypeOf(e))}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.prefix,r=void 0===n?"":n,o=t.suffix,i=void 0===o?"":o;return r+(e.displayName||e.name||e.constructor&&e.constructor.name||"<component>")+i}Object.defineProperty(t,"__esModule",{value:!0}),t.isStateless=r,t.makeDisplayName=o;var i=n(0)},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":c(t))&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":c(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t,n){var a,s,u=n?"-with-"+n:"",c=(0,d.makeDisplayName)(t,{prefix:"inject-",suffix:u}),p=(s=a=function(n){function a(){return r(this,a),o(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return i(a,n),M(a,[{key:"render",value:function(){var n={};for(var r in this.props)this.props.hasOwnProperty(r)&&(n[r]=this.props[r]);var o=e(this.context.mobxStores||{},n,this.context)||{};for(var i in o)n[i]=o[i];return(0,l.h)(t,n)}}]),a}(l.Component),a.displayName=c,s);return(0,f.default)(p,t),p.wrappedComponent=t,Object.defineProperties(p,N),p}function s(e){return function(t,n){return e.forEach(function(e){if(!(e in n)){if(!(e in t))throw Error("MobX injector: Store '"+e+"' is not available! Make sure it is provided by some Provider");n[e]=t[e]}}),n}}function u(){var e=void 0;if("function"==typeof arguments[0])return e=arguments[0],function(t){var n=a(e,t);return n.isMobxInjector=!1,n=(0,y.observer)(n),n.isMobxInjector=!0,n};for(var t=[],n=0;arguments.length>n;n++)t[n]=arguments[n];return e=s(t),function(n){return a(e,n,t.join("-"))}}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var M=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.inject=u;var l=n(0),p=n(13),f=function(e){return e&&e.__esModule?e:{default:e}}(p),y=n(3),d=n(4),N={isMobxInjector:{value:!0,writable:!0,configurable:!0,enumerable:!0}}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.JSONHTTPError=t.TextHTTPError=t.HTTPError=t.getPagination=void 0;var a=Object.assign||function(e){for(var t=1;arguments.length>t;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(16);Object.defineProperty(t,"getPagination",{enumerable:!0,get:function(){return u.getPagination}});var c=t.HTTPError=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e.statusText));return n.name=n.constructor.name,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(n,n.constructor):n.stack=Error(e.statusText).stack,n.status=e.status,n}return i(t,e),t}(function(e){function t(){var t=Reflect.construct(e,Array.from(arguments));return Object.setPrototypeOf(t,Object.getPrototypeOf(this)),t}return t.prototype=Object.create(e.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e,t}(Error)),M=t.TextHTTPError=function(e){function t(e,n){r(this,t);var i=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return i.data=n,i}return i(t,e),t}(c),l=t.JSONHTTPError=function(e){function t(e,n){r(this,t);var i=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return i.json=n,i}return i(t,e),t}(c);t.default=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments[1];r(this,e),this.apiURL=t,this.apiURL.match(/\/[^\/]?/)&&(this._sameOrigin=!0),this.defaultHeaders=n&&n.defaultHeaders||{}}return s(e,[{key:"headers",value:function(){return a({},this.defaultHeaders,{"Content-Type":"application/json"},arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}},{key:"parseJsonResponse",value:function(e){return e.json().then(function(t){if(!e.ok)return Promise.reject(new l(e,t));var n=(0,u.getPagination)(e);return n?{pagination:n,items:t}:t})}},{key:"request",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=this.headers(n.headers||{});return this._sameOrigin&&(n.credentials=n.credentials||"same-origin"),fetch(this.apiURL+e,a({},n,{headers:r})).then(function(e){var n=e.headers.get("Content-Type");return n&&n.match(/json/)?t.parseJsonResponse(e):e.ok?e.text().then(function(){}):e.text().then(function(t){return Promise.reject(new M(e,t))})})}}]),e}()},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0);t.default=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,[{key:"render",value:function(){var e=this.props,t=e.saving,n=e.text,r=e.saving_text;return(0,s.h)("button",{type:"submit",className:"btn"+(t?" saving":"")},t?r||"Saving":n||"Save")}}]),t}(s.Component)},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),u={confirm:{type:"success",text:"A confirmation message was sent to your email, click the link there to continue."},password_mail:{type:"success",text:"We've sent a recovery email to your account, follow the link there to reset your password."},email_changed:{type:"sucess",text:"Your email address has been updated!"},verfication_error:{type:"error",text:"There was an error verifying your account. Please try again or contact an administrator."},signup_disabled:{type:"error",text:"Public signups are disabled. Contact an administrator and ask for an invite."}};t.default=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,[{key:"render",value:function(){var e=this.props.type,t=u[e];return(0,s.h)("div",{className:"flashMessage "+t.type},(0,s.h)("span",null,t.text))}}]),t}(s.Component)},function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=n(10),i=function(e){return e&&e.__esModule?e:{default:e}}(o);void 0!==r(t)&&(t.netlifyIdentity=i.default),void 0!==("undefined"==typeof window?"undefined":r(window))&&(window.netlifyIdentity=i.default),"loading"===document.readyState?document.addEventListener("DOMContentLoaded",function(){i.default.init()}):i.default.init()},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=arguments;(b[e]||[]).forEach(function(e){e.apply(e,Array.prototype.slice.call(t,1))})}function i(e,t){var n="";for(var r in t)n+=r+": "+t[r]+"; ";e?e.setAttribute("style",n):m=n}function a(e){var t=x[document.location.host.split(":").shift()],n=t&&localStorage.getItem("netlifySiteURL");if(e)return new y.default({APIUrl:e,setCookie:!t});if(t&&n){var r=[n];return n.match(/\/$/)||r.push("/"),r.push(".netlify/identity"),D.default.setIsLocal(t),D.default.setSiteURL(n),new y.default({APIUrl:r.join(""),setCookie:!t})}return t?(D.default.setIsLocal(t),null):new y.default({setCookie:!t})}function s(){var e=(document.location.hash||"").replace(/^#\/?/,"");if(e){var t=e.match(L);t&&(D.default.verifyToken(t[1],t[2]),document.location.hash="");e.match(k)&&(D.default.openModal("signup"),document.location.hash="");if(e.match(A)){var n={};e.split("&").forEach(function(e){var t=e.split("="),r=c(t,2);n[r[0]]=r[1]}),document&&n.access_token&&(document.cookie="nf_jwt="+n.access_token),document.location.hash="",D.default.openModal("login"),D.default.completeExternalLogin(n)}}}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.APIUrl,n=e.logo,r=void 0===n||n,o=e.namePlaceholder,u=document.querySelectorAll("[data-netlify-identity-menu],[data-netlify-identity-button]");Array.prototype.slice.call(u).forEach(function(e){var t=null===e.getAttribute("data-netlify-identity-menu")?"button":"menu";(0,M.render)((0,M.h)(p.Provider,{store:D.default},(0,M.h)(j.default,{mode:t,text:e.innerText.trim()})),e,null)}),D.default.init(a(t)),D.default.modal.logo=r,D.default.setNamePlaceholder(o),I=document.createElement("iframe"),I.id="netlify-identity-widget",I.onload=function(){var e=I.contentDocument.createElement("style");e.innerHTML=""+z.default,I.contentDocument.head.appendChild(e),O=(0,M.render)((0,M.h)(p.Provider,{store:D.default},(0,M.h)(N.default,null)),I.contentDocument.body,O),s()},i(I,E),I.src="about:blank",(e.container?document.querySelector(e.container):document.body).appendChild(I),m&&(I.setAttribute("style",m),m=null)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),M=n(0),l=n(1),p=n(2),f=n(15),y=r(f),d=n(19),N=r(d),g=n(25),D=r(g),h=n(26),j=r(h),T=n(27),z=r(T),b={},v={login:!0,signup:!0,error:!0},w={on:function(e,t){b[e]=b[e]||[],b[e].push(t)},open:function(e){if(e=e||"login",!v[e])throw Error("Invalid action for open: "+e);D.default.openModal(D.default.user?"user":e)},close:function(){D.default.closeModal()},currentUser:function(){return D.default.gotrue&&D.default.gotrue.currentUser()},logout:function(){return D.default.logout()},get gotrue(){return D.default.gotrue||D.default.openModal("login"),D.default.gotrue},init:function(e){u(e)},store:D.default},m=null,x={localhost:!0,"127.0.0.1":!0,"0.0.0.0":!0,"identity.netlify.com":!0},O=void 0,I=void 0,E={position:"fixed",top:0,left:0,border:"none",width:"100%",height:"100%",overflow:"visible",background:"transparent",display:"none","z-index":99};(0,l.observe)(D.default.modal,"isOpen",function(){D.default.settings||D.default.loadSettings(),i(I,Object.assign({},E,{display:D.default.modal.isOpen?"block !important":"none"})),D.default.modal.isOpen?o("open",D.default.modal.page):o("close")}),(0,l.observe)(D.default,"siteURL",function(){null===D.default.siteURL||void 0===D.default.siteURL?localStorage.removeItem("netlifySiteURL"):localStorage.setItem("netlifySiteURL",D.default.siteURL),D.default.init(a(),!0)}),(0,l.observe)(D.default,"user",function(){D.default.user?o("login",D.default.user):o("logout")}),(0,l.observe)(D.default,"gotrue",function(){D.default.gotrue&&o("init",D.default.gotrue.currentUser())}),(0,l.observe)(D.default,"error",function(){o("error",D.default.error)});var L=/(confirmation|invite|recovery|email_change)_token=([^&]+)/,k=/error=access_denied&error_description=403/,A=/access_token=/;t.default=w},function(e){"use strict";var t,n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t=function(){return this}();try{t=t||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":n(window))&&(t=window)}e.exports=t},function(e,t,n){"use strict";function r(e,t){if("string"==typeof e)throw Error("Store names should be provided as array");return Array.isArray(e)?t?i.inject.apply(null,e)(r(t)):function(t){return r(e,t)}:(0,o.observer)(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.connect=r;var o=n(3),i=n(5)},function(e){"use strict";function t(e,M,l){if("string"!=typeof M){if(c){var p=u(M);p&&p!==c&&t(e,p,l)}var f=i(M);a&&(f=f.concat(a(M)));for(var y=0;f.length>y;++y){var d=f[y];if(!(n[d]||r[d]||l&&l[d])){var N=s(M,d);try{o(e,d,N)}catch(e){}}}return e}return e}var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o=Object.defineProperty,i=Object.getOwnPropertyNames,a=Object.getOwnPropertySymbols,s=Object.getOwnPropertyDescriptor,u=Object.getPrototypeOf,c=u&&u(Object);e.exports=t},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":a(t))&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":a(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0}),t.Provider=void 0;var s=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),c={children:!0,key:!0,ref:!0},M=console;t.Provider=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),s(t,[{key:"render",value:function(e){var t=e.children;return t.length>1?(0,u.h)("div",null," ",t," "):t[0]}},{key:"getChildContext",value:function(){var e={},t=this.context.mobxStores;if(t)for(var n in t)e[n]=t[n];for(var r in this.props)c[r]||"suppressChangedStoreWarning"===r||(e[r]=this.props[r]);return{mobxStores:e}}},{key:"componentWillReceiveProps",value:function(e){if(Object.keys(e).length!==Object.keys(this.props).length&&M.warn("MobX Provider: The set of provided stores has changed. Please avoid changing stores as the change might not propagate to all children"),!e.suppressChangedStoreWarning)for(var t in e)c[t]||this.props[t]===e[t]||M.warn("MobX Provider: Provided store '"+t+"' has changed. Please avoid replacing stores as the change might not propagate to all children")}}]),t}(u.Component)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(6),s=r(a),u=n(17),c=r(u),M=/^http:\/\//,l="/.netlify/identity",p=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.APIUrl,r=void 0===n?l:n,i=t.audience,a=void 0===i?"":i,u=t.setCookie,c=void 0!==u&&u;o(this,e),r.match(M)&&console.warn("Warning:\n\nDO NOT USE HTTP IN PRODUCTION FOR GOTRUE EVER!\nGoTrue REQUIRES HTTPS to work securely."),a&&(this.audience=a),this.setCookie=c,this.api=new s.default(r)}return i(e,[{key:"_request",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.headers=t.headers||{};var n=t.audience||this.audience;return n&&(t.headers["X-JWT-AUD"]=n),this.api.request(e,t).catch(function(e){return e instanceof a.JSONHTTPError&&e.json&&(e.json.msg?e.message=e.json.msg:e.json.error&&(e.message=e.json.error+": "+e.json.error_description)),Promise.reject(e)})}},{key:"settings",value:function(){return this._request("/settings")}},{key:"signup",value:function(e,t,n){return this._request("/signup",{method:"POST",body:JSON.stringify({email:e,password:t,data:n})})}},{key:"login",value:function(e,t,n){var r=this;return this._setRememberHeaders(n),this._request("/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"grant_type=password&username="+encodeURIComponent(e)+"&password="+encodeURIComponent(t)}).then(function(e){return c.default.removeSavedSession(),r.createUser(e,n)})}},{key:"loginExternalUrl",value:function(e){return this.api.apiURL+"/authorize?provider="+e}},{key:"confirm",value:function(e,t){return this._setRememberHeaders(t),this.verify("signup",e,t)}},{key:"requestPasswordRecovery",value:function(e){return this._request("/recover",{method:"POST",body:JSON.stringify({email:e})})}},{key:"recover",value:function(e,t){return this._setRememberHeaders(t),this.verify("recovery",e,t)}},{key:"acceptInvite",value:function(e,t,n){var r=this;return this._setRememberHeaders(n),this._request("/verify",{method:"POST",body:JSON.stringify({token:e,password:t,type:"signup"})}).then(function(e){return r.createUser(e,n)})}},{key:"acceptInviteExternalUrl",value:function(e,t){return this.api.apiURL+"/authorize?provider="+e+"&invite_token="+t}},{key:"createUser",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this._setRememberHeaders(t),new c.default(this.api,e,this.audience).getUserData().then(function(e){return t&&e._saveSession(),e})}},{key:"currentUser",value:function(){var e=c.default.recoverSession(this.api);return e&&this._setRememberHeaders(e._fromStorage),e}},{key:"verify",value:function(e,t,n){var r=this;return this._setRememberHeaders(n),this._request("/verify",{method:"POST",body:JSON.stringify({token:t,type:e})}).then(function(e){return r.createUser(e,n)})}},{key:"_setRememberHeaders",value:function(e){this.setCookie&&(this.api.defaultHeaders=this.api.defaultHeaders||{},this.api.defaultHeaders["X-Use-Cookie"]=e?"1":"session")}}]),e}();t.default=p,"undefined"!=typeof window&&(window.GoTrue=p)},function(e,t){"use strict";function n(e){var t=e.headers.get("Link"),n={};if(null==t)return null;t=t.split(",");for(var o=e.headers.get("X-Total-Count"),i=0,a=t.length;a>i;i++){var s=t[i].replace(/(^\s*|\s*$)/,""),u=s.split(";"),c=r(u,2),M=c[0],l=c[1],p=M.match(/page=(\d+)/),f=p&&parseInt(p[1],10);l.match(/last/)?n.last=f:l.match(/next/)?n.next=f:l.match(/prev/)?n.prev=f:l.match(/first/)&&(n.first=f)}return n.last=Math.max(n.last||0,n.prev&&n.prev+1||0),n.current=n.next?n.next-1:n.last||1,n.total=o?parseInt(o,10):null,n}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.getPagination=n},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}var n=window.atob(t);try{return decodeURIComponent(escape(n))}catch(e){return n}}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;arguments.length>t;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(6),c=r(u),M=n(18),l=r(M),p={},f=null,y={api:1,token:1,audience:1,url:1},d={api:1};t.default=function(){function e(t,n,r){o(this,e),this.api=t,this.url=t.apiURL,this.audience=r,this._processTokenResponse(n),f=this}return s(e,[{key:"update",value:function(e){var t=this;return this._request("/user",{method:"PUT",body:JSON.stringify(e)}).then(function(e){return t._saveUserData(e)._refreshSavedSession()})}},{key:"jwt",value:function(e){var t=this.tokenDetails(),n=t.expires_at,r=t.refresh_token,o=t.access_token;return e||n-6e4<Date.now()?this._refreshToken(r):Promise.resolve(o)}},{key:"logout",value:function(){return this._request("/logout",{method:"POST"}).then(this.clearSession.bind(this)).catch(this.clearSession.bind(this))}},{key:"_refreshToken",value:function(e){var t=this;return p[e]?p[e]:p[e]=this.api.request("/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"grant_type=refresh_token&refresh_token="+e}).then(function(n){return delete p[e],t._processTokenResponse(n),t._refreshSavedSession(),t.token.access_token}).catch(function(n){return delete p[e],t.clearSession(),Promise.reject(n)})}},{key:"_request",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n.headers=n.headers||{};var r=n.audience||this.audience;return r&&(n.headers["X-JWT-AUD"]=r),this.jwt().then(function(r){return t.api.request(e,a({headers:Object.assign(n.headers,{Authorization:"Bearer "+r})},n)).catch(function(e){return e instanceof u.JSONHTTPError&&e.json&&(e.json.msg?e.message=e.json.msg:e.json.error&&(e.message=e.json.error+": "+e.json.error_description)),Promise.reject(e)})})}},{key:"getUserData",value:function(){return this._request("/user").then(this._saveUserData.bind(this)).then(this._refreshSavedSession.bind(this))}},{key:"_saveUserData",value:function(t,n){for(var r in t)r in e.prototype||r in y||(this[r]=t[r]);return n&&(this._fromStorage=!0),this}},{key:"_processTokenResponse",value:function(e){this.token=e;var t=void 0;try{t=JSON.parse(i(e.access_token.split(".")[1])),this.token.expires_at=1e3*t.exp}catch(t){console.error(Error("Gotrue-js: Failed to parse tokenResponse claims: "+JSON.stringify(e)))}}},{key:"_refreshSavedSession",value:function(){return localStorage.getItem("gotrue.user")&&this._saveSession(),this}},{key:"_saveSession",value:function(){return localStorage.setItem("gotrue.user",JSON.stringify(this._details)),this}},{key:"tokenDetails",value:function(){return this.token}},{key:"clearSession",value:function(){e.removeSavedSession(),this.token=null,f=null}},{key:"admin",get:function(){return new l.default(this)}},{key:"_details",get:function(){var t={};for(var n in this)n in e.prototype||n in d||(t[n]=this[n]);return t}}],[{key:"removeSavedSession",value:function(){localStorage.removeItem("gotrue.user")}},{key:"recoverSession",value:function(t){if(f)return f;var n=localStorage.getItem("gotrue.user");if(n)try{var r=JSON.parse(n),o=r.url,i=r.token,a=r.audience;if(!o||!i)return null;return new e(t||new c.default(o,{}),i,a)._saveUserData(r,!0)}catch(e){return console.error(Error("Gotrue-js: Error recovering session: "+e)),null}return null}}]),e}()},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.default=function(){function e(t){n(this,e),this.user=t}return r(e,[{key:"listUsers",value:function(e){return this.user._request("/admin/users",{method:"GET",audience:e})}},{key:"getUser",value:function(e){return this.user._request("/admin/users/"+e.id)}},{key:"updateUser",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.user._request("/admin/users/"+e.id,{method:"PUT",body:JSON.stringify(t)})}},{key:"createUser",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n.email=e,n.password=t,this.user._request("/admin/users",{method:"POST",body:JSON.stringify(n)})}},{key:"deleteUser",value:function(e){return this.user._request("/admin/users/"+e.id,{method:"DELETE"})}}]),e}()},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s,u=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),M=n(2),l=n(20),p=r(l),f=n(21),y=r(f),d=n(22),N=r(d),g=n(23),D=r(g),h=n(24),j=r(h),T=n(8),z=r(T),b={login:!0,signup:!0},v={login:{login:!0,button:"Log in",button_saving:"Logging in",email:!0,password:!0,link:"amnesia",link_text:"Forgot password?",providers:!0},signup:{signup:!0,button:"Sign up",button_saving:"Signing Up",name:!0,email:!0,password:!0,providers:!0},amnesia:{title:"Recover password",button:"Send recovery email",button_saving:"Sending recovery email",email:!0,link:"login",link_text:"Never mind"},recovery:{title:"Recover password",button:"Update password",button_saving:"Updating password",password:!0,link:"login",link_text:"Never mind"},invite:{title:"Complete your signup",button:"Sign up",button_saving:"Signing Up",password:!0,providers:!0},user:{title:"Logged in"}};t.default=(0,M.connect)(["store"])(s=function(e){function t(){var e,n,r,a;o(this,t);for(var s=arguments.length,u=Array(s),c=0;s>c;c++)u[c]=arguments[c];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.handleClose=function(){return r.props.store.closeModal()},r.handlePage=function(e){return r.props.store.openModal(e)},r.handleLogout=function(){return r.props.store.logout()},r.handleSiteURL=function(e){return r.props.store.setSiteURL(e)},r.clearSiteURL=function(){return r.props.store.clearSiteURL()},r.handleExternalLogin=function(e){return r.props.store.externalLogin(e)},r.handleUser=function(e){var t=e.name,n=e.email,o=e.password,i=r.props.store;switch(i.modal.page){case"login":i.login(n,o);break;case"signup":i.signup(t,n,o);break;case"amnesia":i.requestPasswordRecovery(n);break;case"invite":i.acceptInvite(o);break;case"recovery":i.updatePassword(o)}},a=n,i(r,a)}return a(t,e),u(t,[{key:"renderBody",value:function(){var e=this,t=this.props.store,n=v[t.modal.page]||{},r=function(){return e.handlePage(n.link)};return t.isLocal&&null===t.siteURL?(0,c.h)(y.default,{devMode:null!=t.siteURL,onSiteURL:t.siteURL?this.clearSiteURL:this.handleSiteURL}):t.settings?t.user?(0,c.h)(N.default,{user:t.user,saving:t.saving,onLogout:this.handleLogout}):"signup"===t.modal.page&&t.settings.disable_signup?(0,c.h)(z.default,{type:"signup_disabled"}):(0,c.h)("div",null,(0,c.h)(D.default,{page:v[t.modal.page]||{},message:t.message,saving:t.saving,onSubmit:this.handleUser,namePlaceholder:t.namePlaceholder}),!t.user&&n.link&&t.gotrue&&(0,c.h)("button",{onclick:r,className:"btnLink forgotPasswordLink"},n.link_text),t.isLocal?(0,c.h)(y.default,{devMode:null!=t.siteURL,onSiteURL:t.siteURL?this.clearSiteURL:this.handleSiteURL}):(0,c.h)("div",null)):void 0}},{key:"renderProviders",value:function(){var e=this.props.store;if(!e.gotrue||!e.settings)return null;if("signup"===e.modal.page&&e.settings.disable_signup)return null;if(!(v[e.modal.page]||{}).providers)return null;var t=["Google","GitHub","GitLab","BitBucket","SAML"].filter(function(t){return e.settings.external[t.toLowerCase()]});return t.length?(0,c.h)(j.default,{providers:t,labels:e.settings.external_labels||{},onLogin:this.handleExternalLogin}):null}},{key:"render",value:function(){var e=this.props.store,t=b[e.modal.page],n=e.settings&&!e.settings.disable_signup;return(0,c.h)("div",null,(0,c.h)(p.default,{page:v[e.modal.page]||{},error:e.error,showHeader:t,showSignup:n,devSettings:!e.gotrue,loading:!e.error&&e.gotrue&&!e.settings,isOpen:e.modal.isOpen,onPage:this.handlePage,onClose:this.handleClose,logo:e.modal.logo},this.renderBody(),this.renderProviders()))}}]),t}(c.Component))||s},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){return e.json&&e.json.error_description||e.message||""+e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0);t.default=function(e){function t(){var e,n,i,a;r(this,t);for(var s=arguments.length,u=Array(s),c=0;s>c;c++)u[c]=arguments[c];return n=i=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),i.handleClose=function(e){e.preventDefault(),i.props.onClose()},i.blockEvent=function(e){e.stopPropagation()},i.linkHandler=function(e){return function(t){t.preventDefault(),i.props.onPage(e)}},a=n,o(i,a)}return i(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=e.page,n=e.error,r=e.loading,o=e.showHeader,i=e.showSignup,s=e.devSettings,c=e.isOpen,M=e.children,l=e.logo;return(0,u.h)("div",{className:"modalContainer",role:"dialog","aria-hidden":""+(r||!c),onClick:this.handleClose},(0,u.h)("div",{className:"modalDialog"+(r?" visuallyHidden":""),onClick:this.blockEvent},(0,u.h)("div",{className:"modalContent"},(0,u.h)("button",{onclick:this.handleClose,className:"btn btnClose"},(0,u.h)("span",{className:"visuallyHidden"},"Close")),o&&(0,u.h)("div",{className:"header"},i&&(0,u.h)("button",{className:"btn btnHeader "+(t.signup?"active":""),onclick:this.linkHandler("signup")},"Sign up"),!s&&(0,u.h)("button",{className:"btn btnHeader "+(t.login?"active":""),onclick:this.linkHandler("login")},"Log in")),t.title&&(0,u.h)("div",{className:"header"},(0,u.h)("button",{className:"btn btnHeader active"},t.title)),s&&(0,u.h)("div",{className:"header"},(0,u.h)("button",{className:"btn btnHeader active"},"Development Settings")),n&&(0,u.h)("div",{className:"flashMessage error"},(0,u.h)("span",null,a(n))),M)),l&&(0,u.h)("a",{href:"https://www.netlify.com",className:"callOut"+(r?" visuallyHidden":"")},(0,u.h)("span",{className:"netlifyLogo"}),"Coded by Netlify"))}}]),t}(u.Component)},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0);t.default=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleInput=function(e){n.setState(r({},e.target.name,e.target.value))},n.addSiteURL=function(e){e.preventDefault(),n.props.onSiteURL(n.state.url)},n.clearSiteURL=function(){n.props.onSiteURL()},n.state={url:"",development:e.devMode||!1},n}return a(t,e),s(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.url;return(0,u.h)("div",null,t.development?(0,u.h)("div",{class:"subheader"},(0,u.h)("h3",null,"Development Settings"),(0,u.h)("button",{onclick:function(t){return e.clearSiteURL(t)},className:"btnLink forgotPasswordLink"},"Clear localhost URL")):(0,u.h)("form",{onsubmit:this.addSiteURL,className:"form"},(0,u.h)("div",{className:"flashMessage"},"Looks like you're running a local server. Please let us know the URL of your Netlify site."),(0,u.h)("div",{className:"formGroup"},(0,u.h)("label",null,(0,u.h)("span",{className:"visuallyHidden"},"Enter your Netlify Site URL"),(0,u.h)("input",{className:"formControl",type:"url",name:"url",value:n,placeholder:"URL of your Netlify site",autocapitalize:"off",required:!0,oninput:this.handleInput}),(0,u.h)("div",{className:"inputFieldIcon inputFieldUrl"}))),(0,u.h)("button",{type:"submit",className:"btn"},"Set site's URL")))}}]),t}(u.Component)},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),u=n(7),c=function(e){return e&&e.__esModule?e:{default:e}}(u);t.default=function(e){function t(){var e,n,i,a;r(this,t);for(var s=arguments.length,u=Array(s),c=0;s>c;c++)u[c]=arguments[c];return n=i=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),i.handleLogout=function(e){e.preventDefault(),i.props.onLogout()},a=n,o(i,a)}return i(t,e),a(t,[{key:"render",value:function(){var e=this.props,t=e.user,n=e.saving;return(0,s.h)("form",{onSubmit:this.handleLogout,className:"form "+(n?"disabled":"")},(0,s.h)("p",{className:"infoText"},"Logged in as ",(0,s.h)("br",null),(0,s.h)("span",{className:"infoTextEmail"},t.user_metadata.full_name||t.user_metadata.name||t.email)),(0,s.h)(c.default,{saving:n,text:"Log out",saving_text:"Logging out"}))}}]),t}(s.Component)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),M=n(8),l=r(M),p=n(7),f=r(p);t.default=function(e){function t(e){i(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleInput=function(e){n.setState(o({},e.target.name,e.target.value))},n.handleLogin=function(e){e.preventDefault(),n.props.onSubmit(n.state)},n.state={name:"",email:"",password:""},n}return s(t,e),u(t,[{key:"render",value:function(){var e=this.props,t=e.page,n=e.message,r=e.saving,o=e.namePlaceholder,i=this.state,a=i.name,s=i.email,u=i.password;return(0,c.h)("form",{onsubmit:this.handleLogin,className:"form "+(r?"disabled":"")},n&&(0,c.h)(l.default,{type:n}),t.name&&(0,c.h)("div",{className:"formGroup"},(0,c.h)("label",null,(0,c.h)("span",{className:"visuallyHidden"},"Enter your name"),(0,c.h)("input",{className:"formControl",type:"name",name:"name",value:a,placeholder:o||"Name",autocapitalize:"off",required:!0,oninput:this.handleInput}),(0,c.h)("div",{className:"inputFieldIcon inputFieldName"}))),t.email&&(0,c.h)("div",{className:"formGroup"},(0,c.h)("label",null,(0,c.h)("span",{className:"visuallyHidden"},"Enter your email"),(0,c.h)("input",{className:"formControl",type:"email",name:"email",value:s,placeholder:"Email",autocapitalize:"off",required:!0,oninput:this.handleInput}),(0,c.h)("div",{className:"inputFieldIcon inputFieldEmail"}))),t.password&&(0,c.h)("div",{className:"formGroup"},(0,c.h)("label",null,(0,c.h)("span",{className:"visuallyHidden"},"Enter your password"),(0,c.h)("input",{className:"formControl",type:"password",name:"password",value:u,placeholder:"Password",required:!0,oninput:this.handleInput}),(0,c.h)("div",{className:"inputFieldIcon inputFieldPassword"}))),(0,c.h)(f.default,{saving:r,text:t.button,saving_text:t.button_saving}))}}]),t}(c.Component)},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),u=function(e){function t(){var e,n,i,a;r(this,t);for(var s=arguments.length,u=Array(s),c=0;s>c;c++)u[c]=arguments[c];return n=i=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),i.handleLogin=function(e){e.preventDefault(),i.props.onLogin(i.props.provider.toLowerCase())},a=n,o(i,a)}return i(t,e),a(t,[{key:"render",value:function(){var e=this.props;return(0,s.h)("button",{onClick:this.handleLogin,className:"provider"+e.provider+" btn btnProvider"},"Continue with ",e.label)}}]),t}(s.Component);t.default=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,[{key:"getLabel",value:function(e){var t=e.toLowerCase();return t in this.props.labels?this.props.labels[t]:e}},{key:"render",value:function(){var e=this,t=this.props,n=t.providers,r=t.onLogin;return(0,s.h)("div",{className:"providersGroup"},(0,s.h)("hr",{className:"hr"}),n.map(function(t){return(0,s.h)(u,{key:t,provider:t,label:e.getLabel(t),onLogin:r})}))}}]),t}(s.Component)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=(0,r.observable)({user:null,recovered_user:null,message:null,settings:null,gotrue:null,error:null,siteURL:null,remember:!0,saving:!1,invite_token:null,email_change_token:null,namePlaceholder:null,modal:{page:"login",isOpen:!1,logo:!0}});o.setNamePlaceholder=(0,r.action)(function(e){o.namePlaceholder=e}),o.startAction=(0,r.action)(function(){o.saving=!0,o.error=null,o.message=null}),o.setError=(0,r.action)(function(e){o.saving=!1,o.error=e}),o.init=(0,r.action)(function(e,t){e&&(o.gotrue=e,(o.user=e.currentUser())&&(o.modal.page="user")),t&&o.loadSettings()}),o.loadSettings=(0,r.action)(function(){o.settings||o.gotrue&&o.gotrue.settings().then((0,r.action)(function(e){return o.settings=e})).catch((0,r.action)(function(){o.error=Error("Failed to load settings from "+o.gotrue.api.apiURL)}))}),o.setIsLocal=(0,r.action)(function(e){o.isLocal=e}),o.setSiteURL=(0,r.action)(function(e){o.siteURL=e}),o.clearSiteURL=(0,r.action)(function(){o.gotrue=null,o.siteURL=null,o.settings=null}),o.login=(0,r.action)(function(e,t){return o.startAction(),o.gotrue.login(e,t,o.remember).then((0,r.action)(function(e){o.user=e,o.modal.page="user",o.invite_token=null,o.email_change_token&&o.doEmailChange(),o.saving=!1})).catch(o.setError)}),o.externalLogin=(0,r.action)(function(e){o.error=null,o.message=null;var t=o.invite_token?o.gotrue.acceptInviteExternalUrl(e,o.invite_token):o.gotrue.loginExternalUrl(e);window.location.href=t}),o.completeExternalLogin=(0,r.action)(function(e){o.startAction(),o.gotrue.createUser(e,o.remember).then(function(e){o.user=e,o.modal.page="user",o.saving=!1}).catch(o.setError)}),o.signup=(0,r.action)(function(e,t,n){return o.startAction(),o.gotrue.signup(t,n,{full_name:e}).then((0,r.action)(function(){o.settings.autoconfirm?o.login(t,n,o.remember):o.message="confirm",o.saving=!1})).catch(o.setError)}),o.logout=(0,r.action)(function(){if(o.user)return o.startAction(),o.user.logout().then((0,r.action)(function(){o.user=null,o.modal.page="login",o.saving=!1})).catch(o.setError);o.modal.page="login",o.saving=!1}),o.updatePassword=(0,r.action)(function(e){o.startAction(),(o.recovered_user||o.user).update({password:e}).then(function(e){o.user=e,o.recovered_user=null,o.modal.page="user",o.saving=!1}).catch(o.setError)}),o.acceptInvite=(0,r.action)(function(e){o.startAction(),o.gotrue.acceptInvite(o.invite_token,e,o.remember).then(function(e){o.saving=!1,o.invite_token=null,o.user=e,o.modal.page="user"}).catch(o.setError)}),o.doEmailChange=(0,r.action)(function(){return o.startAction(),o.user.update({email_change_token:o.email_change_token}).then((0,r.action)(function(e){o.user=e,o.email_change_token=null,o.message="email_changed",o.saving=!1})).catch(o.setError)}),o.verifyToken=(0,r.action)(function(e,t){var n=o.gotrue;switch(o.modal.isOpen=!0,e){case"confirmation":o.startAction(),o.modal.page="signup",n.confirm(t,o.remember).then((0,r.action)(function(e){o.user=e,o.saving=!1})).catch((0,r.action)(function(e){console.error(e),o.message="verfication_error",o.modal.page="signup",o.saving=!1}));break;case"email_change":o.email_change_token=t,o.modal.page="message",o.user?o.doEmailChange():o.modal.page="login";break;case"invite":o.modal.page=e,o.invite_token=t;break;case"recovery":o.startAction(),o.modal.page=e,o.gotrue.recover(t,o.remember).then(function(e){o.saving=!1,o.recovered_user=e}).catch(function(e){o.saving=!1,o.error=e,o.modal.page="login"});break;default:o.error="Unkown token type"}}),o.requestPasswordRecovery=(0,r.action)(function(e){o.startAction(),o.gotrue.requestPasswordRecovery(e).then((0,r.action)(function(){o.message="password_mail",o.saving=!1})).catch(o.setError)}),o.openModal=(0,r.action)(function(e){o.modal.page=e,o.modal.isOpen=!0}),o.closeModal=(0,r.action)(function(){o.modal.isOpen=!1,o.error=null,o.message=null,o.saving=!1}),t.default=o},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a,s=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0);t.default=(0,n(2).connect)(["store"])(a=function(e){function t(){var e,n,i,a;r(this,t);for(var s=arguments.length,u=Array(s),c=0;s>c;c++)u[c]=arguments[c];return n=i=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),i.handleSignup=function(e){e.preventDefault(),i.props.store.openModal("signup")},i.handleLogin=function(e){e.preventDefault(),i.props.store.openModal("login")},i.handleLogout=function(e){e.preventDefault(),i.props.store.openModal("user")},i.handleButton=function(e){e.preventDefault(),i.props.store.openModal(i.props.store.user?"user":"login")},a=n,o(i,a)}return i(t,e),s(t,[{key:"render",value:function(){var e=this.props.store.user;return"button"===this.props.mode?(0,u.h)("a",{className:"netlify-identity-button",href:"#",onClick:this.handleButton},this.props.text||(e?"Log out":"Log in")):e?(0,u.h)("ul",{className:"netlify-identity-menu"},(0,u.h)("li",{className:"netlify-identity-item netlify-identity-user-details"},"Logged in as"," ",(0,u.h)("span",{className:"netlify-identity-user"},e.user_metadata.name||e.email)),(0,u.h)("li",{className:"netlify-identity-item"},(0,u.h)("a",{className:"netlify-identity-logout",href:"#",onClick:this.handleLogout},"Log out"))):(0,u.h)("ul",{className:"netlify-identity-menu"},(0,u.h)("li",{className:"netlify-identity-item"},(0,u.h)("a",{className:"netlify-identity-signup",href:"#",onClick:this.handleSignup},"Sign up")),(0,u.h)("li",{className:"netlify-identity-item"},(0,u.h)("a",{className:"netlify-identity-login",href:"#",onClick:this.handleLogin},"Log in")))}}]),t}(u.Component))||a},function(e,t,n){t=e.exports=n(28)(!1),t.push([e.i,'::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: #a3a9ac;\n  font-weight: 500;\n}\n\n::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #a3a9ac;\n  font-weight: 500;\n}\n\n:-ms-input-placeholder {\n  /* IE 10+ */\n  color: #a3a9ac;\n  font-weight: 500;\n}\n\n:-moz-placeholder {\n  /* Firefox 18- */\n  color: #a3a9ac;\n  font-weight: 500;\n}\n\n.modalContainer {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  min-height: 100%;\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,\n    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  font-size: 14px;\n  line-height: 1.5;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  z-index: 99999;\n}\n\n.modalContainer::before {\n  content: "";\n  display: block;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #fff;\n  z-index: -1;\n}\n\n.modalDialog {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n}\n\n.modalContent {\n  position: relative;\n  padding: 32px;\n  opacity: 0;\n  -webkit-transform: translateY(10px) scale(1);\n          transform: translateY(10px) scale(1);\n  background: #fff;\n}\n\n[aria-hidden="false"] .modalContent {\n    -webkit-animation: bouncyEntrance 0.2s cubic-bezier(0.18, 0.89, 0.32, 1.28);\n            animation: bouncyEntrance 0.2s cubic-bezier(0.18, 0.89, 0.32, 1.28);\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n  }\n\n@-webkit-keyframes bouncyEntrance {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(10px) scale(0.9);\n            transform: translateY(10px) scale(0.9);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0) scale(1);\n            transform: translateY(0) scale(1);\n  }\n}\n\n@keyframes bouncyEntrance {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(10px) scale(0.9);\n            transform: translateY(10px) scale(0.9);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0) scale(1);\n            transform: translateY(0) scale(1);\n  }\n}\n\n@media (min-width: 480px) {\n  .modalContainer::before {\n    background-color: rgb(14, 30, 37);\n    -webkit-animation: fadeIn 0.1s ease-in;\n            animation: fadeIn 0.1s ease-in;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n  }\n\n  .modalDialog {\n    max-width: 364px;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n  }\n\n  .modalContent {\n    background: #fff;\n    -webkit-box-shadow: 0 4px 12px 0 rgba(0, 0, 0, .07),\n      0 12px 32px 0 rgba(14, 30, 37, .1);\n            box-shadow: 0 4px 12px 0 rgba(0, 0, 0, .07),\n      0 12px 32px 0 rgba(14, 30, 37, .1);\n    border-radius: 8px;\n    margin-top: 32px;\n  }\n}\n\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 0.67;\n  }\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 0.67;\n  }\n}\n\n.flashMessage {\n  text-align: center;\n  color: rgb(14, 30, 37);\n  font-weight: 500;\n  font-size: 14px;\n  background-color: #f2f3f3;\n  padding: 6px;\n  border-radius: 4px;\n  opacity: 0.7;\n  -webkit-transition: opacity 0.2s linear;\n  transition: opacity 0.2s linear;\n}\n\n.flashMessage:hover,\n.flashMessage:focus {\n  opacity: 1;\n}\n\n.error {\n  color: #fa3946;\n  background-color: #fceef0;\n  opacity: 1;\n}\n\n.error span::before {\n  content: "";\n  display: inline-block;\n  position: relative;\n  top: 3px;\n  margin-right: 4px;\n  width: 16px;\n  height: 16px;\n  background: no-repeat center center;\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsPSIjRkEzOTQ2IiBkPSJNOCwxLjMzMzMzMzMzIEMxMS42NzYsMS4zMzMzMzMzMyAxNC42NjY2NjY3LDQuMzI0IDE0LjY2NjY2NjcsOCBDMTQuNjY2NjY2NywxMS42NzYgMTEuNjc2LDE0LjY2NjY2NjcgOCwxNC42NjY2NjY3IEM0LjMyNCwxNC42NjY2NjY3IDEuMzMzMzMzMzMsMTEuNjc2IDEuMzMzMzMzMzMsOCBDMS4zMzMzMzMzMyw0LjMyNCA0LjMyNCwxLjMzMzMzMzMzIDgsMS4zMzMzMzMzMyBaIE04LDAgQzMuNTgyLDAgMCwzLjU4MiAwLDggQzAsMTIuNDE4IDMuNTgyLDE2IDgsMTYgQzEyLjQxOCwxNiAxNiwxMi40MTggMTYsOCBDMTYsMy41ODIgMTIuNDE4LDAgOCwwIFogTTcuMTI2NjY2NjcsNS4wMTczMzMzMyBDNy4wNjA2NjY2Nyw0LjQ3OTMzMzMzIDcuNDc4NjY2NjcsNCA4LjAyNTMzMzMzLDQgQzguNTM5MzMzMzMsNCA4Ljk0MzMzMzMzLDQuNDUwNjY2NjcgOC44Nzg2NjY2Nyw0Ljk2NzMzMzMzIEw4LjM3NCw5LjAwMjY2NjY3IEM4LjM1MDY2NjY3LDkuMTkxMzMzMzMgOC4xOSw5LjMzMzMzMzMzIDgsOS4zMzMzMzMzMyBDNy44MSw5LjMzMzMzMzMzIDcuNjQ5MzMzMzMsOS4xOTEzMzMzMyA3LjYyNTMzMzMzLDkuMDAyNjY2NjcgTDcuMTI2NjY2NjcsNS4wMTczMzMzMyBMNy4xMjY2NjY2Nyw1LjAxNzMzMzMzIFogTTgsMTIuMTY2NjY2NyBDNy41NCwxMi4xNjY2NjY3IDcuMTY2NjY2NjcsMTEuNzkzMzMzMyA3LjE2NjY2NjY3LDExLjMzMzMzMzMgQzcuMTY2NjY2NjcsMTAuODczMzMzMyA3LjU0LDEwLjUgOCwxMC41IEM4LjQ2LDEwLjUgOC44MzMzMzMzMywxMC44NzMzMzMzIDguODMzMzMzMzMsMTEuMzMzMzMzMyBDOC44MzMzMzMzMywxMS43OTMzMzMzIDguNDYsMTIuMTY2NjY2NyA4LDEyLjE2NjY2NjcgWiIvPgo8L3N2Zz4K);\n}\n\n.success {\n}\n\n.disabled {\n  opacity: 0.38;\n  pointer-events: none;\n}\n\n.infoText {\n  text-align: center;\n  margin: 32px 0;\n}\n\n.infoTextEmail {\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.saving {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABQCAMAAACeYYN3AAAAxlBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////DTx3aAAAAQnRSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEGgjKRfAAACk0lEQVR4AYXQDXP5WhAG8CUhiSQqSv4RRRMVL1Fa1VZf3PL9v9Tde9wc9M8+P8/M7s6czJiHgNIvVCJO6YiAMlAiWckASiQrm4bJMZTDrmbBIEC9qpgVjp6n4B+oyEwCzKrMQBVaQIlkpmXZln1dhQB+49gOh5dLexlV6MhsAqyazEQVugCqsOK5nsQmwPWZ53ucvyczSGb4l9T9OsdnLgFOXVZFFd4AqEKrIasR4AdBI2hw1GR6VzMwSWY2A60ZNDl6KnUC3KbMRhXeAqhCpyXzCAjarNVucdqXVEhWaRfCdsj5vQcE1EOZQ7Jy+EcUlklWi2Q3BLQ6nagTcTra2Y0qrHZirRN3OOezTUAjvq4bd7suqpDfSGJUoXcnCwiIerIqqlC96vf6HD1ZsUcE3PYH/QGnrx3uYnqoQn4l6aMK/XtZi4BuIrNIZqVJkiapkhx37Y6AcDgcpsNU44Nz3OuoQn4jSVGFNw+ykID+SGaTzM5G2YiTFVM73AMConE2zjhj7XAXs4EqHE/4d12GKgwmsoiAZCpzSObMptPZdHZVSkCc5/ksnym8cPRUmiQzpvNcmedzTl4o7qlBsuZc1iVg9ChDFdYWshEBveV/FssFZ/l7Z7eowsfl0/JJ4UXj43A/ogpbT7IeAZNnWQ1VuJJNCBi8HKxeVhw9tRaq8JkfrV/WHDULxb1CFbbX7HX9yllfck9A/ipzSea+yeYEJO+yEFX4tim8b94VXjj/zzdU4Z/NmY/NB+fkTglYfMg8knmfsiUBD1+yCFX4+X309f3FOds/UYVR8fH2e6vwovExIuB5K/NJ5v8jWxGQ/chiVOF2d+pn98M5zt3WJFm83+/2O4UXjprabkzAWn+o56k9qvBfX4hMaM+SxOMAAAAASUVORK5CYII=);\n  background-repeat: repeat-x;\n  background-size: contain;\n  background-origin: border-box;\n  background-position: 0% 0%;\n  -webkit-animation: loading 20s linear infinite;\n          animation: loading 20s linear infinite;\n  pointer-events: none;\n}\n\n.saving::after {\n  content: "\\2026";\n}\n\n@-webkit-keyframes loading {\n  0% {\n    background-position: 0% 0%;\n  }\n\n  100% {\n    background-position: 700% 0%;\n  }\n}\n\n@keyframes loading {\n  0% {\n    background-position: 0% 0%;\n  }\n\n  100% {\n    background-position: 700% 0%;\n  }\n}\n\n.btn {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: auto;\n  margin: 14px 0 0;\n  padding: 6px;\n  outline: 0;\n  cursor: pointer;\n  border: 2px solid rgb(14, 30, 37);\n  border-radius: 4px;\n  background-color: #2d3b41;\n  color: #fff;\n  -webkit-transition: background-color 0.2s ease;\n  transition: background-color 0.2s ease;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,\n    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 24px;\n  text-align: center;\n  text-decoration: none;\n  white-space: nowrap;\n}\n\n.btn:hover,\n.btn:focus {\n  background-color: rgb(14, 30, 37);\n  text-decoration: none;\n}\n\n.btnClose {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  margin: 6px;\n  background: #fff;\n  color: #a3a9ac;\n}\n\n.btnClose::before {\n  content: "\\D7";\n  font-size: 25px;\n  line-height: 9px;\n}\n\n.btnClose:hover,\n.btnClose:focus {\n  background: #e9ebeb;\n  color: rgb(14, 30, 37);\n}\n\n.header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-top: -8px;\n  margin-bottom: 32px;\n}\n\n.btnHeader {\n  font-size: 16px;\n  line-height: 24px;\n  background: #fff;\n  color: #a3a9ac;\n  border: 0;\n  border-bottom: 2px solid #e9ebeb;\n  border-radius: 4px 4px 0 0;\n  margin: 0;\n}\n\n.btnHeader:focus,\n.btnHeader.active {\n  background: #fff;\n  color: rgb(14, 30, 37);\n  border-color: rgb(14, 30, 37);\n  font-weight: 700;\n}\n\n.btnHeader:not(:only-child):hover {\n  background-color: #e9ebeb;\n  color: rgb(14, 30, 37);\n}\n\n.btnHeader:only-child {\n  cursor: auto;\n}\n\n.btnLink {\n  display: block;\n  position: relative;\n  width: auto;\n  height: auto;\n  margin: 14px auto 0;\n  padding: 6px;\n  padding-bottom: 0;\n  outline: 0;\n  cursor: pointer;\n  color: rgb(14, 30, 37);\n  border: none;\n  border-bottom: 2px solid #e9ebeb;\n  border-radius: 0;\n  background-color: inherit;\n  -webkit-transition: border-color 0.2s ease;\n  transition: border-color 0.2s ease;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,\n    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 24px;\n  text-align: center;\n  white-space: nowrap;\n}\n\n.btnLink:hover,\n.btnLink:focus {\n  background-color: inherit;\n  border-color: #a3a9ac;\n}\n\n.form {\n}\n\n.formGroup {\n  position: relative;\n  margin-top: 14px;\n}\n\n.formControl {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: block;\n  width: 100%;\n  height: 40px;\n  margin: 0;\n  padding: 6px 12px 6px 34px;\n  border: 2px solid #e9ebeb;\n  border-radius: 4px;\n  background: #fff;\n  color: rgb(14, 30, 37);\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 24px;\n  -webkit-transition: -webkit-box-shadow ease-in-out 0.15s;\n  transition: -webkit-box-shadow ease-in-out 0.15s;\n  transition: box-shadow ease-in-out 0.15s;\n  transition: box-shadow ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\n\n.inputFieldIcon {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  background-repeat: no-repeat;\n  background-position: center;\n  pointer-events: none;\n}\n\n.inputFieldName {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDE0IDE0Ij4gIDxwYXRoIGZpbGw9IiNBM0E5QUMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTgsNyBDNi4zNDMxNDU3NSw3IDUsNS42NTY4NTQyNSA1LDQgQzUsMi4zNDMxNDU3NSA2LjM0MzE0NTc1LDEgOCwxIEM5LjY1Njg1NDI1LDEgMTEsMi4zNDMxNDU3NSAxMSw0IEMxMSw1LjY1Njg1NDI1IDkuNjU2ODU0MjUsNyA4LDcgWiBNOCwxNSBMMS41LDE1IEMxLjUsMTEuMTM0MDA2OCA0LjQxMDE0OTEzLDggOCw4IEMxMS41ODk4NTA5LDggMTQuNSwxMS4xMzQwMDY4IDE0LjUsMTUgTDgsMTUgWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEgLTEpIi8+PC9zdmc+);\n}\n\n.inputFieldEmail {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxMSIgdmlld0JveD0iMCAwIDE2IDExIj4gIDxwYXRoIGZpbGw9IiNBM0E5QUMiIGQ9Ik0xLjE3MDczMTcxLDMgQzAuNTIyMTQ2MzQxLDMgMy45MDI0NTk4N2UtMDgsMy41NDUxMTA4MSAzLjkwMjQ1OTg3ZS0wOCw0LjIyMjIyMTU0IEwzLjkwMjQ1OTg3ZS0wOCwxMi43Nzc3Nzg1IEMzLjkwMjQ1OTg3ZS0wOCwxMy40NTQ4ODkyIDAuNTIyMTQ2MzQxLDE0IDEuMTcwNzMxNzEsMTQgTDE0LjgyOTI2ODMsMTQgQzE1LjQ3Nzg1MzcsMTQgMTYsMTMuNDU0ODg5MiAxNiwxMi43Nzc3Nzg1IEwxNiw0LjIyMjIyMTU0IEMxNiwzLjU0NTExMDgxIDE1LjQ3Nzg1MzcsMyAxNC44MjkyNjgzLDMgTDEuMTcwNzMxNzEsMyBaIE0yLjMzNzQyMTE5LDUuMDAxODY1NjYgQzIuNDU3NTExNzUsNC45ODk1NTIxNCAyLjU2MDcxNDU3LDUuMDM5MzM5OCAyLjYzNjM1OTg1LDUuMTE3Mjg0MzcgTDcuNDgyNjA2MTcsMTAuMTEzMjU0NSBDNy43ODQ0ODgyMiwxMC40MjQ3NDU1IDguMjAzMjc4MjksMTAuNDI0NzY2IDguNTA1ODk2MTksMTAuMTEzMjU0NSBMMTMuMzYzNjQwMiw1LjExNzI4NDM3IEMxMy41MDUxMjU1LDQuOTcxMjA0OTkgMTMuNzUyOTc3OSw0Ljk4MTg5NzIzIDEzLjg4MzkyMjIsNS4xMzk3MzYwMiBDMTQuMDE0ODY2NSw1LjI5NzU3NDgxIDE0LjAwNTI4MjEsNS41NzQwNzQ4OCAxMy44NjM3OTY3LDUuNzIwMTU0MjYgTDExLjExNTg2MDYsOC41NDg0MTE1MiBMMTMuODU4MDU3MSwxMS4yNjc2NDY5IEMxNC4wMjE3ODM1LDExLjQwMzE5ODIgMTQuMDQ4OTM2MywxMS43MDE0OTMyIDEzLjkxMjk4ODIsMTEuODcwOTg4OCBDMTMuNzc3MDQwMSwxMi4wNDA1MDQ5IDEzLjUwODI4OTcsMTIuMDQzNDE5MSAxMy4zNjkzOTgyLDExLjg3Njk0MDQgTDEwLjU3NTQ3MTUsOS4xMDYzOTg2MiBMOS4wMDYwNTI3NSwxMC43MTYxMjQ0IEM4LjQzNDk0MTk1LDExLjMwNDAzMzQgNy41NTMzMDI4NiwxMS4zMDUxNjIxIDYuOTgyNDY4LDEwLjcxNjEyNDQgTDUuNDI0NTI4NSw5LjEwNjM5ODYyIEwyLjYzMDYwMTgzLDExLjg3Njk0MDQgQzIuNDkxNzEwMzMsMTIuMDQzNDM5NyAyLjIyMjk1OTg4LDEyLjA0MDUyNTUgMi4wODcwMTE3OCwxMS44NzA5ODg4IEMxLjk1MTA2MzY3LDExLjcwMTQ5MzIgMS45NzgyMTY1LDExLjQwMzE5ODIgMi4xNDE5NDI5LDExLjI2NzY0NjkgTDQuODg0MTM5MzksOC41NDg0MTE1MiBMMi4xMzYyMDMyOCw1LjcyMDE1NDI2IEMyLjAyODcxNDE0LDUuNjE2MjI4MTYgMS45ODM1NTE0MSw1LjQzODk1NDUzIDIuMDI1OTkxNSw1LjI4NzQ5ODI1IEMyLjA2ODQxMzE5LDUuMTM2MDYyNDkgMi4xOTYwMjc4MSw1LjAxOTAyMjQ5IDIuMzM3NDIxMTksNS4wMDE4NjU2NiBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0zKSIvPjwvc3ZnPg==);\n}\n\n.inputFieldPassword {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDEyIDE0Ij4gIDxwYXRoIGZpbGw9IiNBM0E5QUMiIGQ9Ik0yLjQ0NTkxMDQ1LDMuNjQzMDg0MjcgQzIuNDQ1OTEwMzgsMi42NzY2MjEzNyAyLjgxODk3NTQ2LDEuNzQ5NzYzOTMgMy40ODI5OTUxOCwxLjA2NjUxMDUyIEM0LjE0NzAxNDksMC4zODMyNTcxMTEgNS4wNDc1NjY0MywtMC4wMDAzOTMwNDg2MTggNS45ODY0NDEwNSwzLjAyMTc0MDY5ZS0wNyBMNi4xMTc1MTg0NywzLjAyMTc0MDY5ZS0wNyBDOC4wNjkyOTIwNSwwLjAwMjQ1Mjc4Mzg0IDkuNjUwNzAwMTMsMS42MzA5OTI4MyA5LjY1MjI4NzQyLDMuNjQwMTE4NzkgTDkuNjUyMjg3NDIsNC42NzgwMzQ0NSBDOS4xMzk1MDEwNSw0LjcwMzI0MDk4IDguNjM2Nzk3NTYsNC43NDYyNDAzNCA4LjEzMTIxMzI1LDQuODAxMTAxNiBMOC4xMzEyMTMyNSwzLjY0MzA4NDI3IEM4LjEzMTIxMzI1LDIuNDk2NjM0MjkgNy4yMjgzNjE2LDEuNTY3MjUyOTUgNi4xMTQ2Mzc2NCwxLjU2NzI1Mjk1IEw1Ljk4MzU2MDIzLDEuNTY3MjUyOTUgQzQuODY5ODM2MjgsMS41NjcyNTI5NSAzLjk2Njk4NDYyLDIuNDk2NjM0MjkgMy45NjY5ODQ2MiwzLjY0MzA4NDI3IEwzLjk2Njk4NDYyLDMuOTYwMzg5OTEgQzMuOTY3NTc5ODgsNC4zNTY0OTE4MiAzLjY3NzAzNTY1LDQuNjg4ODc1OTUgMy4yOTQzMTI2Miw0LjcyOTkzMDI0IEwzLjI3ODQ2ODEsNC43Mjk5MzAyNCBDMy4wNjYyNDA5Miw0Ljc1MzUwMjk2IDIuODU0MjgyODcsNC42ODMxMDg3IDIuNjk1NDU2MTMsNC41MzYzMDM3NiBDMi41MzY2Mjk0LDQuMzg5NDk4ODIgMi40NDU5MDUzMyw0LjE4MDEyMTMzIDIuNDQ1OTEwNDUsMy45NjAzODk5MSBMMi40NDU5MTA0NSwzLjY0MzA4NDI3IFogTTExLjQxNjY2Niw3LjExNTY1MzUyIEwxMS40MTY2NjYsMTIuNjkwNzQzMyBDMTEuNDE3MDQwOCwxMy4wODMxMTQzIDExLjE0NTkyMDMsMTMuNDIwMTM3MSAxMC43NzEzNjE4LDEzLjQ5MjkwMzkgTDEwLjI5MDI2NDQsMTMuNTg2MzE2MyBDOC44NzYwNzU2NCwxMy44NjE1OTU5IDcuNDM5OTcxMzMsMTQuMDAwMDkzNyA2LjAwMDcyMDA1LDEzLjk5OTk5OTggQzQuNTYwOTg3NTgsMTQuMDAwMTg2MiAzLjEyNDM5Njg0LDEzLjg2MTY4OCAxLjcwOTczNTI0LDEzLjU4NjMxNjMgTDEuMjI4NjM3OTIsMTMuNDkyOTAzOSBDMC44NTQwNzk0MDcsMTMuNDIwMTM3MSAwLjU4Mjk1ODg2NywxMy4wODMxMTQzIDAuNTgzMzMzNzIyLDEyLjY5MDc0MzMgTDAuNTgzMzMzNzIyLDcuMTE1NjUzNTIgQzAuNTgyOTU4ODY3LDYuNzIzMjgyNTYgMC44NTQwNzk0MDcsNi4zODYyNTk4MSAxLjIyODYzNzkyLDYuMzEzNDkyOTkgTDEuMjk5MjE4MDYsNi4zMDAxNDgzNiBDNC40MDU5OTg0Nyw1LjY5NTEyMTY3IDcuNTk1NDQxNjIsNS42OTUxMjE2NyAxMC43MDIyMjIsNi4zMDAxNDgzNiBMMTAuNzcyODAyMiw2LjMxMzQ5Mjk5IEMxMS4xNDY3ODgsNi4zODY4ODY0NSAxMS40MTcxNzE2LDYuNzIzNzQ1MTYgMTEuNDE2NjY2LDcuMTE1NjUzNTIgWiIvPjwvc3ZnPg==);\n}\n\n.inputFieldUrl {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDE0IDE0Ij4gIDxwYXRoIGZpbGw9IiNBM0E5QUMiIGQ9Ik0xMCw1IEMxMCwzLjg5NTQzMDUgOS4xMDQ1Njk1LDMgOCwzIEM2Ljg5NTQzMDUsMyA2LDMuODk1NDMwNSA2LDUgTTQsMTAgTDQsMTEgTDYsMTEgTDYsMTAgQzYsOS40NDc3MTUyNSA1LjU1MjI4NDc1LDkgNSw5IEM0LjQ0NzcxNTI1LDkgNCw5LjQ0NzcxNTI1IDQsMTAgWiBNMTIsMTAgQzEyLDkuNDQ3NzE1MjUgMTEuNTUyMjg0Nyw5IDExLDkgQzEwLjQ0NzcxNTMsOSAxMCw5LjQ0NzcxNTI1IDEwLDEwIEwxMCwxMSBMMTIsMTEgTDEyLDEwIFogTTYsNiBMNiw1IEw0LDUgTDQsNiBDNCw2LjU1MjI4NDc1IDQuNDQ3NzE1MjUsNyA1LDcgQzUuNTUyMjg0NzUsNyA2LDYuNTUyMjg0NzUgNiw2IFogTTEwLDYgQzEwLDYuNTUyMjg0NzUgMTAuNDQ3NzE1Myw3IDExLDcgQzExLjU1MjI4NDcsNyAxMiw2LjU1MjI4NDc1IDEyLDYgTDEyLDUgTDEwLDUgTDEwLDYgWiBNNCw1IEM0LDIuNzkwODYxIDUuNzkwODYxLDEgOCwxIEMxMC4yMDkxMzksMSAxMiwyLjc5MDg2MSAxMiw1IEw0LDUgWiBNNCwxMSBMMTIsMTEgQzEyLDEzLjIwOTEzOSAxMC4yMDkxMzksMTUgOCwxNSBDNS43OTA4NjEsMTUgNCwxMy4yMDkxMzkgNCwxMSBaIE0xMCwxMSBMNiwxMSBDNiwxMi4xMDQ1Njk1IDYuODk1NDMwNSwxMyA4LDEzIEM5LjEwNDU2OTUsMTMgMTAsMTIuMTA0NTY5NSAxMCwxMSBaIE04LDExIEM3LjQ0NzcxNTI1LDExIDcsMTAuNTUyMjg0NyA3LDEwIEw3LDYgQzcsNS40NDc3MTUyNSA3LjQ0NzcxNTI1LDUgOCw1IEM4LjU1MjI4NDc1LDUgOSw1LjQ0NzcxNTI1IDksNiBMOSwxMCBDOSwxMC41NTIyODQ3IDguNTUyMjg0NzUsMTEgOCwxMSBaIiB0cmFuc2Zvcm09InJvdGF0ZSg0NSA4LjcwNyA2LjI5MykiLz48L3N2Zz4=);\n}\n\n.formLabel {\n}\n\n.hr {\n  border: 0;\n  border-top: 2px solid #e9ebeb;\n  margin: 32px 0 -1px;\n  text-align: center;\n  overflow: visible;\n}\n\n.hr::before {\n  content: "or";\n  position: relative;\n  display: inline-block;\n  font-size: 12px;\n  font-weight: 800;\n  line-height: 1;\n  text-transform: uppercase;\n  background-color: #fff;\n  color: rgb(14, 30, 37);\n  padding: 4px;\n  top: -11px;\n}\n\n.btnProvider {\n  padding-left: 40px;\n  padding-right: 40px;\n}\n\n.btnProvider::before {\n  content: "";\n  position: absolute;\n  display: inline-block;\n  vertical-align: middle;\n  width: 32px;\n  height: 40px;\n  background-repeat: no-repeat;\n  background-position: left center;\n  top: -2px;\n  left: 14px;\n}\n\n.providerGoogle {\n  background-color: #4285f4;\n  border-color: #366dc7;\n}\n\n.providerGoogle:hover,\n.providerGoogle:focus {\n  background-color: #366dc7;\n}\n\n.providerGitHub {\n  background-color: #333;\n  border-color: #000;\n}\n\n.providerGitHub:hover,\n.providerGitHub:focus {\n  background-color: #000;\n}\n\n.providerGitLab {\n  background-color: #e24329;\n  border-color: #b03320;\n}\n\n.providerGitLab:hover,\n.providerGitLab:focus {\n  background-color: #b03320;\n}\n\n.providerBitbucket {\n  background-color: #205081;\n  border-color: #14314f;\n}\n\n.providerBitbucket:hover,\n.providerBitbucket:focus {\n  background-color: #14314f;\n}\n\n.providerGoogle:before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDEzIDEyIj4gIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEuNDg4IC0yKSI+ICAgIDxyZWN0IHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIvPiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0wLjY1MjczNDM3NSwzLjI5NTI4MjQ0IEMwLjIzNzk4NDM3NSw0LjEwNTgzMjA2IDIuODQyMTcwOTRlLTE0LDUuMDE2MDQ1OCAyLjg0MjE3MDk0ZS0xNCw1Ljk3OTM4OTMxIEMyLjg0MjE3MDk0ZS0xNCw2Ljk0MjczMjgyIDAuMjM3OTg0Mzc1LDcuODUyOTAwNzYgMC42NTI3MzQzNzUsOC42NjM0NTAzOCBDMS42NTkwNDY4NywxMC42MTY3MDIzIDMuNzI2MDkzNzUsMTEuOTU4Nzc4NiA2LjExOTUzMTI1LDExLjk1ODc3ODYgQzcuNzcxNzgxMjUsMTEuOTU4Nzc4NiA5LjE1ODg1OTM3LDExLjQyNzI1MTkgMTAuMTcyMDE1NiwxMC41MTA0NDI3IEMxMS4zMjc5MDYyLDkuNDY3MzU4NzggMTEuOTk0MjgxMiw3LjkzMjY0MTIyIDExLjk5NDI4MTIsNi4xMTIyNTk1NCBDMTEuOTk0MjgxMiw1LjYyMDYyNTk1IDExLjk1MzQ1MzEsNS4yNjE4NjI2IDExLjg2NTA5MzcsNC44ODk4MTY3OSBMNi4xMTk1MzEyNSw0Ljg4OTgxNjc5IEw2LjExOTUzMTI1LDcuMTA4ODA5MTYgTDkuNDkyMDQ2ODcsNy4xMDg4MDkxNiBDOS40MjQwNzgxMiw3LjY2MDI1OTU0IDkuMDU2OTA2MjUsOC40OTA3MzI4MiA4LjI0MDk1MzEyLDkuMDQ4Nzc4NjMgQzcuNzI0MjAzMTIsOS40MDA5MDA3NiA3LjAzMDY0MDYyLDkuNjQ2NzE3NTYgNi4xMTk1MzEyNSw5LjY0NjcxNzU2IEM0LjUwMTI2NTYyLDkuNjQ2NzE3NTYgMy4xMjc3ODEyNSw4LjYwMzY3OTM5IDIuNjM4MTcxODcsNy4xNjE5ODQ3MyBMMi42Mjg3MTIwNSw3LjE2Mjc2OTU5IEMyLjUwNTM0MTU4LDYuNzk3Mjk0NjggMi40MzQyMTg3NSw2LjM4MTEyMjg1IDIuNDM0MjE4NzUsNS45NzkzODkzMSBDMi40MzQyMTg3NSw1LjU2NzQ1MDM4IDIuNTA4OTg0MzgsNS4xNjg4Mzk2OSAyLjYzMTM3NSw0Ljc5Njc5Mzg5IEMzLjEyNzc4MTI1LDMuMzU1MDk5MjQgNC41MDEyNjU2MiwyLjMxMjAxNTI3IDYuMTE5NTMxMjUsMi4zMTIwMTUyNyBDNy4yNjg2MjUsMi4zMTIwMTUyNyA4LjA0Mzc1LDIuNzk3MDA3NjMgOC40ODU3MzQzNywzLjIwMjMwNTM0IEwxMC4yMTI3OTY5LDEuNTU0NjQxMjIgQzkuMTUyMTA5MzcsMC41OTEyOTc3MSA3Ljc3MTc4MTI1LDguODgxNzg0MmUtMTYgNi4xMTk1MzEyNSw4Ljg4MTc4NDJlLTE2IEMzLjcyNjA5Mzc1LDguODgxNzg0MmUtMTYgMS42NTkwNDY4NywxLjM0MjAzMDUzIDAuNjUyNzM0Mzc1LDMuMjk1MjgyNDQgTDAuNjUyNzM0Mzc1LDMuMjk1MjgyNDQgWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMiAyKSIvPiAgPC9nPjwvc3ZnPg==);\n}\n\n.providerGitHub:before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4gIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+ICAgIDxyZWN0IHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIvPiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik04LjAwMDA2NjI1LDAgQzMuNTgyMzMwNzksMCAwLDMuNjcyMzE1ODUgMCw4LjIwMjUzNzczIEMwLDExLjgyNjYzMzggMi4yOTIyNjI0OCwxNC45MDEyOTUgNS40NzA5MzM1NiwxNS45ODU5MDIzIEM1Ljg3MDc1MTM5LDE2LjA2MTgzMTUgNi4wMTc1MzY3NSwxNS44MDc5NjQyIDYuMDE3NTM2NzUsMTUuNTkxMzE0NCBDNi4wMTc1MzY3NSwxNS4zOTU3MTgzIDYuMDEwMTE3OTksMTQuNzQ5NTcyMiA2LjAwNjY3MzU2LDE0LjA2NDE3MTEgQzMuNzgxMDQ3NDEsMTQuNTYwMzYwMiAzLjMxMTQxMzc5LDEzLjA5NjM3ODEgMy4zMTE0MTM3OSwxMy4wOTYzNzgxIEMyLjk0NzQ5NzQsMTIuMTQ4MjgwNiAyLjQyMzE1MDUsMTEuODk2MTc5IDIuNDIzMTUwNSwxMS44OTYxNzkgQzEuNjk3MzA0OTEsMTEuMzg3MDg2IDIuNDc3ODYzNzksMTEuMzk3NTQ0OSAyLjQ3Nzg2Mzc5LDExLjM5NzU0NDkgQzMuMjgxMjA4ODcsMTEuNDU1NDA4NyAzLjcwNDIxMDMxLDEyLjI0MjgxODcgMy43MDQyMTAzMSwxMi4yNDI4MTg3IEM0LjQxNzczNTQ3LDEzLjQ5NjgwNjcgNS41NzU3MjM0NiwxMy4xMzQyNzQ4IDYuMDMyMjQxNzgsMTIuOTI0Njg4MiBDNi4xMDQwNDQ3MiwxMi4zOTQ1NDE0IDYuMzExMzcyNDQsMTIuMDMyNjg4NyA2LjU0MDE2MTQ0LDExLjgyNzg1NjIgQzQuNzYzMjM3NDQsMTEuNjIwNDQyOCAyLjg5NTMwMTE5LDEwLjkxNzExMjEgMi44OTUzMDExOSw3Ljc3NDEyNzk5IEMyLjg5NTMwMTE5LDYuODc4NTk2ODggMy4yMDc4MTYxOCw2LjE0Njg3NzU3IDMuNzE5NTc3NzMsNS41NzI0NDk5OSBDMy42MzY1MTQxNyw1LjM2NTg1MTY2IDMuMzYyNjgyNjgsNC41MzE1ODAxNyAzLjc5NzA3NzIxLDMuNDAxNzQxMzMgQzMuNzk3MDc3MjEsMy40MDE3NDEzMyA0LjQ2ODg3MTg4LDMuMTgxMjg4MjcgNS45OTc2NjUwNyw0LjI0MjUzMjY3IEM2LjYzNTgxMDQ0LDQuMDYwNzkxMzQgNy4zMjAxOTA0NCwzLjk2OTY0OTAyIDguMDAwMDY2MjUsMy45NjY1MjQ5MiBDOC42Nzk5NDIwNiwzLjk2OTY0OTAyIDkuMzY0ODUyLDQuMDYwNzkxMzQgMTAuMDA0MTg5Niw0LjI0MjUzMjY3IEMxMS41MzExMjgxLDMuMTgxMjg4MjcgMTIuMjAxOTk1NCwzLjQwMTc0MTMzIDEyLjIwMTk5NTQsMy40MDE3NDEzMyBDMTIuNjM3NDQ5OCw0LjUzMTU4MDE3IDEyLjM2MzQ4NTgsNS4zNjU4NTE2NiAxMi4yODA0MjIzLDUuNTcyNDQ5OTkgQzEyLjc5MzM3NjEsNi4xNDY4Nzc1NyAxMy4xMDM3NzE0LDYuODc4NTk2ODggMTMuMTAzNzcxNCw3Ljc3NDEyNzk5IEMxMy4xMDM3NzE0LDEwLjkyNDU4MjggMTEuMjMyMjU4MywxMS42MTgyNjk2IDkuNDUwODMwMDYsMTEuODIxMzM2MyBDOS43Mzc3NzY4NywxMi4wNzU4ODI5IDkuOTkzNDU4ODcsMTIuNTc1MDYwMiA5Ljk5MzQ1ODg3LDEzLjM0MDMyOTggQzkuOTkzNDU4ODcsMTQuNDM3ODQxMSA5Ljk4NDE4NTUsMTUuMzIxMTQ3MyA5Ljk4NDE4NTUsMTUuNTkxMzE0NCBDOS45ODQxODU1LDE1LjgwOTU5NDIgMTAuMTI4MTg4NywxNi4wNjUzNjMxIDEwLjUzMzcwMzEsMTUuOTg0ODE1NiBDMTMuNzEwNjUyLDE0Ljg5ODk4NTggMTYsMTEuODI1NDExMyAxNiw4LjIwMjUzNzczIEMxNiwzLjY3MjMxNTg1IDEyLjQxODE5OTIsMCA4LjAwMDA2NjI1LDAgWiBNMi45OTYyODQ5NiwxMS42ODQ2ODgyIEMyLjk3ODY2NTQxLDExLjcyNTQzNzMgMi45MTYxMzU5MSwxMS43Mzc2NjIxIDIuODU5MTcwNDgsMTEuNzA5NjgxIEMyLjgwMTE0NTIyLDExLjY4MjkyMjMgMi43Njg1NTU3MSwxMS42MjczNjc2IDIuNzg3MzY3NTUsMTEuNTg2NDgyNyBDMi44MDQ1ODk2NSwxMS41NDQ1MTEgMi44NjcyNTE2MiwxMS41MzI4Mjk1IDIuOTI1MTQ0MzksMTEuNTYwOTQ2NSBDMi45ODMzMDIxNCwxMS41ODc3MDUxIDMuMDE2NDIxNTcsMTEuNjQzODAzMSAyLjk5NjI4NDk2LDExLjY4NDY4ODIgWiBNMy4zODk3OTkzMiwxMi4wNDQ3MDI0IEMzLjM1MTY0NTc0LDEyLjA4MDk2OTEgMy4yNzcwNjA3NywxMi4wNjQxMjYxIDMuMjI2NDU0MjYsMTIuMDA2ODA1NyBDMy4xNzQxMjU1NSwxMS45NDk2MjEgMy4xNjQzMjIyMSwxMS44NzMxNDg0IDMuMjAzMDA1NywxMS44MzYzMzgyIEMzLjI0MjM1MTU5LDExLjgwMDA3MTUgMy4zMTQ2ODQ0NSwxMS44MTcwNTAzIDMuMzY3MTQ1NjQsMTEuODc0MjM1IEMzLjQxOTQ3NDMyLDExLjkzMjA5ODggMy40Mjk2NzUxMiwxMi4wMDgwMjgxIDMuMzg5Nzk5MzIsMTIuMDQ0NzAyNCBaIE0zLjY1OTc2NTA4LDEyLjUwNTMyODMgQzMuNjEwNzQ4MzMsMTIuNTQwMjM2OCAzLjUzMDU5OTI5LDEyLjUwNzUwMTUgMy40ODEwNTI2MSwxMi40MzQ1NjA2IEMzLjQzMjAzNTgzLDEyLjM2MTYxOTUgMy40MzIwMzU4MywxMi4yNzQxNDQ2IDMuNDgyMTEyNDQsMTIuMjM5MTAwMyBDMy41MzE3OTE1NywxMi4yMDQwNTYgMy42MTA3NDgzMywxMi4yMzU1Njg4IDMuNjYwOTU3MzgsMTIuMzA3OTY2NSBDMy43MDk4NDE2OCwxMi4zODIxMjk5IDMuNzA5ODQxNjgsMTIuNDY5NjA0OCAzLjY1OTc2NTA4LDEyLjUwNTMyODMgWiBNNC4xMTYzMzQ5NSwxMy4wMzg3OTgxIEM0LjA3MjQ4NDgyLDEzLjA4ODM3NjQgMy45NzkwODgwMiwxMy4wNzUwNjUgMy45MTA3Mjk0OCwxMy4wMDc0MjE0IEMzLjg0MDc4MTI0LDEyLjk0MTI3MTggMy44MjEzMDcwMSwxMi44NDc0MTI5IDMuODY1Mjg5NjMsMTIuNzk3ODM0NyBDMy45MDk2Njk2NiwxMi43NDgxMjA3IDQuMDAzNTk2MzksMTIuNzYyMTExMyA0LjA3MjQ4NDgyLDEyLjgyOTIxMTYgQzQuMTQxOTAzMTYsMTIuODk1MjI1MyA0LjE2MzA5OTYsMTIuOTg5NzYzNCA0LjExNjMzNDk1LDEzLjAzODc5ODEgWiBNNC43MDY0MDcxOSwxMy4yMTg4OTE2IEM0LjY4NzA2NTQ2LDEzLjI4MzEzOTUgNC41OTcxMTMwNiwxMy4zMTIzNDMgNC41MDY0OTgyNywxMy4yODUwNDExIEM0LjQxNjAxNTk3LDEzLjI1NjkyNDIgNC4zNTY3OTg0MiwxMy4xODE2NzQxIDQuMzc1MDgwMzYsMTMuMTE2NzQ3IEM0LjM5Mzg5MjE5LDEzLjA1MjA5MTcgNC40ODQyNDIwMSwxMy4wMjE2NjU2IDQuNTc1NTE5MTgsMTMuMDUwODY5MiBDNC42NjU4NjkwMSwxMy4wNzg4NTAzIDQuNzI1MjE5MDUsMTMuMTUzNTU3MSA0LjcwNjQwNzE5LDEzLjIxODg5MTYgWiBNNS4zNzc5MzQxOSwxMy4yOTUyODI1IEM1LjM4MDE4NjI5LDEzLjM2MjkyNjEgNS4zMDMzNDkxOSwxMy40MTkwMjQxIDUuMjA4MjMwMTgsMTMuNDIwMjQ2NyBDNS4xMTI1ODEyNSwxMy40MjI0MiA1LjAzNTIxNDI1LDEzLjM2NzY4MDMgNS4wMzQxNTQ0MiwxMy4zMDExMjMyIEM1LjAzNDE1NDQyLDEzLjIzMjgwMDUgNS4xMDkyNjkzLDEzLjE3NzI0NTggNS4yMDQ5MTgyMywxMy4xNzU2MTU4IEM1LjMwMDAzNzI2LDEzLjE3MzcxNDIgNS4zNzc5MzQxOSwxMy4yMjgwNDY0IDUuMzc3OTM0MTksMTMuMjk1MjgyNSBaIE02LjAzNzYzNDE5LDEzLjI2OTM1NDggQzYuMDQ5MDI3MjksMTMuMzM1MzY4NSA1Ljk4MjkyMDg4LDEzLjQwMzE0NzkgNS44ODg0NjQyNSwxMy40MjEyMTM0IEM1Ljc5NTU5NzM2LDEzLjQzODU5OTcgNS43MDk2MTkyOSwxMy4zOTc4NTA1IDUuNjk3ODI4NzcsMTMuMzMyMzgwMiBDNS42ODYzMDMyMiwxMy4yNjQ3MzY1IDUuNzUzNjAxOTEsMTMuMTk2OTU3MSA1Ljg0NjMzNjMzLDEzLjE3OTQzNSBDNS45NDA5MjU0NCwxMy4xNjI1OTIgNi4wMjU1Nzg3MiwxMy4yMDIyNTQ1IDYuMDM3NjM0MTksMTMuMjY5MzU0OCBaIi8+ICA8L2c+PC9zdmc+);\n}\n\n.providerGitLab:before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxMyIgdmlld0JveD0iMCAwIDE0IDEzIj4gIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEgLTIpIj4gICAgPHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ii8+ICAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTcuMDA0MDkzMzYsMTIuOTQ5MjQzMyBMNC40MjgwOTMzMyw0Ljk5NzI4MjU0IEw5LjU4MDA5MzM2LDQuOTk3MjgyNTQgTDcuMDA0MDkzMzYsMTIuOTQ5MjQzMyBaIE03LjAwNDA5MzM2LDEyLjk0OTIzIEwwLjgxNzg5MzMzMyw0Ljk5NzI2OTE3IEw0LjQyODA5MzMzLDQuOTk3MjY5MTcgTDcuMDA0MDkzMzYsMTIuOTQ5MjMgWiBNMC44MTc4OTk5OTksNC45OTcyODkyMyBMNy4wMDQwOTk5OCwxMi45NDkyNSBMMC4yMjg4MzMzMzMsOC4wMTE4ODA4IEMwLjA0MTksNy44NzU2NzE1MiAtMC4wMzYzLDcuNjM0MjEyNyAwLjAzNTEsNy40MTM4MTcxMiBMMC44MTc4OTk5OTksNC45OTcyODkyMyBaIE0wLjgxNzg5OTk5OSw0Ljk5NzI5NTkxIEwyLjM2OTM2NjY3LDAuMjA3OTA0NzE0IEMyLjQ0OTE2NjY3LC0wLjAzODUwMjM1ODggMi43OTY3NjY2NywtMC4wMzg1NjkyMjY1IDIuODc2NTY2NjcsMC4yMDc5MDQ3MTQgTDQuNDI4MSw0Ljk5NzI5NTkxIEwwLjgxNzg5OTk5OSw0Ljk5NzI5NTkxIFogTTcuMDA0MDkzMzYsMTIuOTQ5MjMgTDkuNTgwMDkzMzYsNC45OTcyNjkxNyBMMTMuMTkwMjkzMyw0Ljk5NzI2OTE3IEw3LjAwNDA5MzM2LDEyLjk0OTIzIFogTTEzLjE5MDI5MzMsNC45OTcyODkyMyBMMTMuOTczMDkzMyw3LjQxMzgxNzEyIEMxNC4wNDQ0OTMzLDcuNjM0MjEyNyAxMy45NjYyOTM0LDcuODc1NjcxNTIgMTMuNzc5MzYsOC4wMTE4ODA4IEw3LjAwNDA5MzM2LDEyLjk0OTI1IEwxMy4xOTAyOTMzLDQuOTk3Mjg5MjMgWiBNMTMuMTkwMjkzMyw0Ljk5NzI5NTkxIEw5LjU4MDA5MzM2LDQuOTk3Mjk1OTEgTDExLjEzMTYyNjcsMC4yMDc5MDQ3MTQgQzExLjIxMTQyNjcsLTAuMDM4NTY5MjI2NSAxMS41NTkwMjY3LC0wLjAzODUwMjM1ODggMTEuNjM4ODI2NywwLjIwNzkwNDcxNCBMMTMuMTkwMjkzMyw0Ljk5NzI5NTkxIFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEgMikiLz4gIDwvZz48L3N2Zz4=);\n}\n\n.providerBitbucket:before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE0IDE2Ij4gIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEpIj4gICAgPHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ii8+ICAgIDxnIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSkiPiAgICAgIDxwYXRoIGQ9Ik03LDIuNDk4OTQxODdlLTA3IEw3LDIuNDk4OTQxODdlLTA3IEMzLjE1NzIxMjI5LDIuNDk4OTQxODdlLTA3IDAuMDAwNjM2NTM1NDM1LDEuMDIwODQ0MjQgMC4wMDA2MzY1MzU0MzUsMi4zMTM5MTM1OSBDMC4wMDA2MzY1MzU0MzUsMi42NTQxOTUxMyAwLjgyNDA5MTAyMyw3LjQ4NjE5MiAxLjE2NzE5NzE3LDkuMzkxNzY3NTkgQzEuMzA0NDM5MzcsMTAuMjc2NDk5OSAzLjU2ODkzOTUzLDExLjUwMTUxMyA3LDExLjUwMTUxMyBMNywxMS41MDE1MTMgQzEwLjQzMTA2MDIsMTEuNTAxNTEzIDEyLjYyNjkzODYsMTAuMjc2NDk5OSAxMi44MzI4MDMyLDkuMzkxNzY3NTkgQzEzLjE3NTkwODYsNy40ODYxOTIgMTMuOTk5MzYzMiwyLjY1NDE5NTEzIDEzLjk5OTM2MzIsMi4zMTM5MTM1OSBDMTMuOTMwNzQyMSwxLjAyMDg0NDI0IDEwLjg0Mjc4NzQsMi40OTg5NDE4N2UtMDcgNywyLjQ5ODk0MTg3ZS0wNyBMNywyLjQ5ODk0MTg3ZS0wNyBaIE03LDkuOTM2MjE4MzEgQzUuNzY0ODE4MjgsOS45MzYyMTgzMSA0LjgwNDEyMTI2LDguOTgzNDI5ODYgNC44MDQxMjEyNiw3Ljc1ODQxNjcxIEM0LjgwNDEyMTI2LDYuNTMzNDAzNTUgNS43NjQ4MTgyOCw1LjU4MDYxNTk3IDcsNS41ODA2MTU5NyBDOC4yMzUxODExMiw1LjU4MDYxNTk3IDkuMTk1ODc4NCw2LjUzMzQwMzU1IDkuMTk1ODc4NCw3Ljc1ODQxNjcxIEM5LjE5NTg3ODQsOC45MTUzNzM3MiA4LjIzNTE4MTEyLDkuOTM2MjE4MzEgNyw5LjkzNjIxODMxIEw3LDkuOTM2MjE4MzEgWiBNNywyLjk5NDQ3NjY3IEM0LjUyOTYzNjIyLDIuOTk0NDc2NjcgMi41Mzk2MjExLDIuNTg2MTM4OTUgMi41Mzk2MjExLDIuMDQxNjg4ODYgQzIuNTM5NjIxMSwxLjQ5NzIzODE1IDQuNTI5NjM2MjIsMS4wODg5MDA0MyA3LDEuMDg4OTAwNDMgQzkuNDcwMzYyODQsMS4wODg5MDA0MyAxMS40NjAzNzg2LDEuNDk3MjM4MTUgMTEuNDYwMzc4NiwyLjA0MTY4ODg2IEMxMS40NjAzNzg2LDIuNTg2MTM4OTUgOS40NzAzNjI4NCwyLjk5NDQ3NjY3IDcsMi45OTQ0NzY2NyBMNywyLjk5NDQ3NjY3IFoiLz4gICAgICA8cGF0aCBkPSJNMTIuMDY0NTA5NiwxMS4yMjkyODc2IEMxMS45MjcyNjY3LDExLjIyOTI4NzYgMTEuODU4NjQ1NywxMS4yOTczNDM4IDExLjg1ODY0NTcsMTEuMjk3MzQzOCBDMTEuODU4NjQ1NywxMS4yOTczNDM4IDEwLjE0MzExNTYsMTIuNjU4NDcgNy4wNTUxNjA5MywxMi42NTg0NyBDMy45NjcyMDY4NywxMi42NTg0NyAyLjI1MTY3NjE2LDExLjI5NzM0MzggMi4yNTE2NzYxNiwxMS4yOTczNDM4IEMyLjI1MTY3NjE2LDExLjI5NzM0MzggMi4xMTQ0MzM5NSwxMS4yMjkyODc2IDIuMDQ1ODEyODUsMTEuMjI5Mjg3NiBDMS45MDg1NzAwMiwxMS4yMjkyODc2IDEuNzcxMzI3ODEsMTEuMjk3MzQzOCAxLjc3MTMyNzgxLDExLjUwMTUxMyBMMS43NzEzMjc4MSwxMS41Njk1NjkyIEMyLjA0NTgxMjg1LDEyLjk5ODc1MTYgMi4yNTE2NzYxNiwxNC4wMTk1OTU2IDIuMjUxNjc2MTYsMTQuMTU1NzA3OSBDMi40NTc1NDAwOSwxNS4xNzY1NTI1IDQuNTE2MTc2MzIsMTUuOTkzMjI4IDYuOTg2NTM5ODIsMTUuOTkzMjI4IEw2Ljk4NjUzOTgyLDE1Ljk5MzIyOCBDOS40NTY5MDMzMSwxNS45OTMyMjggMTEuNTE1NTM5NSwxNS4xNzY1NTI1IDExLjcyMTQwMzUsMTQuMTU1NzA3OSBDMTEuNzIxNDAzNSwxNC4wMTk1OTU2IDExLjkyNzI2NjcsMTIuOTk4NzUxNiAxMi4yMDE3NTE4LDExLjU2OTU2OTIgTDEyLjIwMTc1MTgsMTEuNTAxNTEzIEMxMi4yNzAzNzI5LDExLjM2NTQgMTIuMjAxNzUxOCwxMS4yMjkyODc2IDEyLjA2NDUwOTYsMTEuMjI5Mjg3NiBMMTIuMDY0NTA5NiwxMS4yMjkyODc2IFoiLz4gICAgICA8ZWxsaXBzZSBjeD0iNyIgY3k9IjcuNjkiIHJ4PSIxLjA5OCIgcnk9IjEuMDg5Ii8+ICAgIDwvZz4gIDwvZz48L3N2Zz4=);\n}\n\n.callOut {\n  display: block;\n  padding: 32px;\n  font-size: 14px;\n  font-weight: 500;\n  text-decoration: none;\n  color: #a3a9ac;\n  text-align: center;\n}\n\n.callOut:after {\n  content: " \\2665";\n  -webkit-transition: color 4s ease;\n  transition: color 4s ease;\n}\n\n.callOut:hover:after {\n  color: red;\n}\n\n.callOut .netlifyLogo {\n  display: block;\n  margin: auto;\n  width: 32px;\n  height: 32px;\n  margin-bottom: 8px;\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4gIDxkZWZzPiAgICA8cmFkaWFsR3JhZGllbnQgaWQ9ImEiIGN5PSIwJSIgcj0iMTAwJSIgZng9IjUwJSIgZnk9IjAlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDAgMSAtMS4xNTE4NSAwIC41IC0uNSkiPiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMyMEM2QjciIG9mZnNldD0iMCUiLz4gICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNEQ5QUJGIiBvZmZzZXQ9IjEwMCUiLz4gICAgPC9yYWRpYWxHcmFkaWVudD4gIDwvZGVmcz4gIDxwYXRoIGZpbGw9InVybCgjYSkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIyLjk4MDYyMywxMS42MjYyMzc3IEMyMi44NzE3MTA3LDExLjUwNTEzMDYgMjIuNzM1NTcwNCwxMS4zOTc0Nzk4IDIyLjU3MjIwMjEsMTEuMzE2NzQxOCBDMjIuNTU4NTg4MSwxMS4zMTY3NDE4IDIyLjU0NDk3NCwxMS4yODk4MjkxIDIyLjUzMTM2LDExLjI3NjM3MjcgTDIzLjE3MTIxOTQsNy4zNjA1NzY2MSBDMjMuMTcxMjE5NCw3LjMzMzY2MzkyIDIzLjE4NDgzMzQsNy4zMjAyMDc1OCAyMy4xOTg0NDc1LDcuMzIwMjA3NTggTDIzLjIxMjA2MTUsNy4zMjAyMDc1OCBDMjMuMjEyMDYxNSw3LjMyMDIwNzU4IDIzLjIyNTY3NTUsNy4zMjAyMDc1OCAyMy4yMzkyODk2LDcuMzMzNjYzOTIgTDI2LjE2NjMwNiwxMC4yMjY3Nzc5IEMyNi4xNzk5MiwxMC4yNDAyMzQzIDI2LjE3OTkyLDEwLjI1MzY5MDYgMjYuMTc5OTIsMTAuMjY3MTQ2OSBDMjYuMTc5OTIsMTAuMjgwNjAzMyAyNi4xNjYzMDYsMTAuMjk0MDU5NiAyNi4xNTI2OTE5LDEwLjMwNzUxNiBMMjMuMDIxNDY1MSwxMS42Mzk2OTQgTDIzLjAwNzg1MSwxMS42Mzk2OTQgQzIyLjk5NDIzNywxMS42Mzk2OTQgMjIuOTk0MjM3LDExLjYzOTY5NCAyMi45ODA2MjMsMTEuNjI2MjM3NyBaIE0xNi4zNTA1NzM2LDkuNDU5NzM4MSBDMTYuMzIzMzQ1Myw5LjE5MDYxMjc0IDE2LjIyODA0NjMsOC45MjE0ODczOCAxNi4wNzgyOTA2LDguNjkyNzMwODMgQzE2LjA2NDY3NjUsOC42NzkyNzQ1NiAxNi4wNjQ2NzY1LDguNjUyMzYyMDIgMTYuMDc4MjkwNiw4LjYyNTQ0OTQ5IEwxOS4zNTkzMDEsMy41Mzg5ODAyMiBDMTkuMzU5MzAxLDMuNTI1NTIzOTUgMTkuMzcyOTE1MSwzLjUxMjA2NzY4IDE5LjM4NjUyOTMsMy41MTIwNjc2OCBDMTkuNDAwMTQzNCwzLjUxMjA2NzY4IDE5LjQwMDE0MzQsMy41MTIwNjc2OCAxOS40MTM3NTc2LDMuNTI1NTIzOTUgTDIyLjMyNzE4NTgsNi40MTg2MjE1NSBDMjIuMzQwOCw2LjQzMjA3NzgyIDIyLjM0MDgsNi40NDU1MzQwOSAyMi4zNDA4LDYuNDU4OTkwMzUgTDIxLjU3ODQwNzYsMTEuMTgyMTQwNCBDMjEuNTc4NDA3NiwxMS4yMDkwNTI5IDIxLjU2NDc5MzQsMTEuMjIyNTA5MiAyMS41NTExNzkzLDExLjIyMjUwOTIgQzIxLjM3NDE5NTMsMTEuMjc2MzM0MyAyMS4yMTA4MjU1LDExLjM1NzA3MTkgMjEuMDc0Njg0LDExLjQ2NDcyMiBDMjEuMDc0Njg0LDExLjQ3ODE3ODMgMjEuMDYxMDY5OCwxMS40NzgxNzgzIDIxLjAzMzg0MTUsMTEuNDc4MTc4MyBMMTYuMzc3ODAxOSw5LjUwMDEwNjkgQzE2LjM2NDE4NzgsOS40ODY2NTA2MyAxNi4zNTA1NzM2LDkuNDczMTk0MzcgMTYuMzUwNTczNiw5LjQ1OTczODEgWiBNMjYuOTgzMTkwNywxMS4wMjA3NjY5IEwzMS45Nzk1Nzg4LDE1Ljk3MjY2NCBDMzIuMDA2ODA3MSwxNS45ODYxMjAyIDMyLjAwNjgwNzEsMTYuMDI2NDg4OSAzMS45Nzk1Nzg4LDE2LjAyNjQ4ODkgTDMxLjk1MjM1MDUsMTYuMDUzNDAxNCBDMzEuOTUyMzUwNSwxNi4wNjY4NTc3IDMxLjkzODczNjQsMTYuMDY2ODU3NyAzMS45MTE1MDgxLDE2LjA2Njg1NzcgTDIzLjU1MjQyODMsMTIuNTI3ODY2IEMyMy41Mzg4MTQxLDEyLjUyNzg2NiAyMy41MjUyLDEyLjUwMDk1MzUgMjMuNTI1MiwxMi40ODc0OTczIEMyMy41MjUyLDEyLjQ3NDA0MSAyMy41Mzg4MTQxLDEyLjQ2MDU4NDggMjMuNTUyNDI4MywxMi40NDcxMjg2IEwyNi45NTU5NjI0LDExLjAwNzMxMDcgQzI2Ljk1NTk2MjQsMTEuMDA3MzEwNyAyNi45Njk1NzY1LDExLjAwNzMxMDcgMjYuOTgzMTkwNywxMS4wMjA3NjY5IFogTTIzLjEzMDQzNjMsMTMuMzg5MDg4MSBMMzEuMTQ5MTg1OCwxNi43ODAwNzYxIEMzMS4xNjI4LDE2Ljc5MzUzMjQgMzEuMTYyOCwxNi44MDY5ODg3IDMxLjE2MjgsMTYuODIwNDQ1IEMzMS4xNjI4LDE2LjgzMzkwMTMgMzEuMTYyOCwxNi44NDczNTc2IDMxLjE0OTE4NTgsMTYuODYwODEzOSBMMjYuNzEwOTY0NSwyMS4yNjEwMjQ1IEMyNi43MTA5NjQ1LDIxLjI3NDQ4MDggMjYuNjk3MzUwMywyMS4yNzQ0ODA4IDI2LjY3MDEyMiwyMS4yNzQ0ODA4IEwyMS44MjM0NzU0LDIwLjI2NTI1ODIgQzIxLjc5NjI0NywyMC4yNjUyNTgyIDIxLjc4MjYzMjksMjAuMjUxODAxOSAyMS43ODI2MzI5LDIwLjIyNDg4OTMgQzIxLjc0MTc5MDMsMTkuODQ4MTEyOCAyMS41NjQ4MDYsMTkuNTExNzA1MyAyMS4yNjUyOTQyLDE5LjI4Mjk0ODEgQzIxLjI1MTY4LDE5LjI2OTQ5MTggMjEuMjUxNjgsMTkuMjU2MDM1NSAyMS4yNTE2OCwxOS4yNDI1NzkyIEwyMi4xMDkzNzMxLDEzLjk4MTE2NTMgQzIyLjEwOTM3MzEsMTMuOTU0MjUyNyAyMi4xMzY2MDE0LDEzLjk0MDc5NjQgMjIuMTUwMjE1NiwxMy45NDA3OTY0IEMyMi41MzE0MTI1LDEzLjg4Njk3MTIgMjIuODU4MTUyNywxMy42OTg1ODMgMjMuMDc1OTc5NiwxMy40MDI1NDQ0IEMyMy4wODk1OTM3LDEzLjM4OTA4ODEgMjMuMTAzMjA3OSwxMy4zODkwODgxIDIzLjEzMDQzNjMsMTMuMzg5MDg4MSBaIE0xNi4xNDYzNzksMTAuNDI4Njg1OSBMMjAuNTMwMTMxNywxMi4yODU2NTMyIEMyMC41NDM3NDU5LDEyLjI5OTEwOTUgMjAuNTU3MzYsMTIuMzEyNTY1OCAyMC41NTczNiwxMi4zMzk0NzgzIEMyMC41NDM3NDU5LDEyLjQwNjc1OTggMjAuNTMwMTMxNywxMi40ODc0OTc1IDIwLjUzMDEzMTcsMTIuNTY4MjM1MiBMMjAuNTMwMTMxNywxMi42MzU1MTY2IEwyMC41MzAxMzE3LDEyLjY4OTM0MTcgQzIwLjUzMDEzMTcsMTIuNzAyNzk4IDIwLjUxNjUxNzYsMTIuNzE2MjU0MyAyMC41MDI5MDM0LDEyLjcyOTcxMDYgQzIwLjUwMjkwMzQsMTIuNzI5NzEwNiAxMC44Nzc3MDcyLDE2LjgzMzg3NzUgMTAuODY0MDkzLDE2LjgzMzg3NzUgQzEwLjg1MDQ3ODksMTYuODMzODc3NSAxMC44MzY4NjQ3LDE2LjgzMzg3NzUgMTAuODIzMjUwNiwxNi44MjA0MjEyIEMxMC44MDk2MzY1LDE2LjgwNjk2NDkgMTAuODA5NjM2NSwxNi43ODAwNTI0IDEwLjgyMzI1MDYsMTYuNzY2NTk2MSBMMTQuNDMwOTk3NCwxMS4xODIyMzc4IEMxNC40NDQ2MTE2LDExLjE2ODc4MTUgMTQuNDU4MjI1NywxMS4xNTUzMjUzIDE0LjQ4NTQ1NCwxMS4xNTUzMjUzIEMxNC41ODA3NTMsMTEuMTY4NzgxNSAxNC42NjI0Mzc4LDExLjE4MjIzNzggMTQuNzQ0MTIyNiwxMS4xODIyMzc4IEMxNS4yODg2ODgyLDExLjE4MjIzNzggMTUuNzkyNDExMywxMC45MTMxMTIxIDE2LjA5MTkyMjQsMTAuNDU1NTk4NCBDMTYuMTA1NTM2NSwxMC40NDIxNDIyIDE2LjExOTE1MDcsMTAuNDI4Njg1OSAxNi4xNDYzNzksMTAuNDI4Njg1OSBaIE0yMS41NTExNDI5LDIxLjE4MDI0MzMgTDI1LjgxMjM3MTcsMjIuMDU0OTA1MyBDMjUuODI1OTg1OSwyMi4wNTQ5MDUzIDI1LjgzOTYsMjIuMDY4MzYxNiAyNS44Mzk2LDIyLjEwODczMDcgQzI1LjgzOTYsMjIuMTIyMTg3IDI1LjgzOTYsMjIuMTM1NjQzMyAyNS44MjU5ODU5LDIyLjE0OTA5OTcgTDE5LjkxNzQ0NDksMjguMDAyNjA3MiBDMTkuOTE3NDQ0OSwyOC4wMTYwNjM2IDE5LjkwMzgzMDcsMjguMDE2MDYzNiAxOS44OTAyMTY2LDI4LjAxNjA2MzYgTDE5Ljg2Mjk4ODMsMjguMDE2MDYzNiBDMTkuODQ5Mzc0MSwyOC4wMDI2MDcyIDE5LjgzNTc2LDI3Ljk4OTE1MDkgMTkuODM1NzYsMjcuOTYyMjM4MiBMMjAuODU2ODIxMiwyMS42OTE1ODQxIEMyMC44NTY4MjEyLDIxLjY3ODEyNzggMjAuODcwNDM1NCwyMS42NTEyMTUxIDIwLjg4NDA0OTUsMjEuNjUxMjE1MSBDMjEuMTI5MTA0MiwyMS41NTcwMjA4IDIxLjMzMzMxNjUsMjEuMzk1NTQ0NyAyMS40OTY2ODYzLDIxLjE5MzY5OTYgQzIxLjUxMDMwMDQsMjEuMTkzNjk5NiAyMS41MjM5MTQ2LDIxLjE4MDI0MzMgMjEuNTUxMTQyOSwyMS4xODAyNDMzIFogTTE5LjA0NjE2NzksMjAuNjgyNDAzIEMxOS4xNTUwODE0LDIxLjA5OTU0ODcgMTkuNDU0NTkzMywyMS40NjI4NjkyIDE5Ljg2MzAxODcsMjEuNjI0MzQ0OSBDMTkuODkwMjQ3MSwyMS42Mzc4MDEyIDE5Ljg5MDI0NzEsMjEuNjY0NzEzOSAxOS44NjMwMTg3LDIxLjY2NDcxMzkgQzE5Ljg2MzAxODcsMjEuNjY0NzEzOSAxOC42MjQxMjgzLDI5LjIxMzcwNTQgMTguNjI0MTI4MywyOS4yMjcxNjE3IEwxOC4xODg0NzQ2LDI5LjY1Nzc2MzcgQzE4LjE4ODQ3NDYsMjkuNjcxMjIwMSAxOC4xNzQ4NjA0LDI5LjY3MTIyMDEgMTguMTYxMjQ2MiwyOS42NzEyMjAxIEMxOC4xNDc2MzIsMjkuNjcxMjIwMSAxOC4xNDc2MzIsMjkuNjcxMjIwMSAxOC4xMzQwMTc4LDI5LjY1Nzc2MzcgTDEwLjk0NTczMDYsMTkuMjY5NDkwMSBDMTAuOTMyMTE2NSwxOS4yNTYwMzM4IDEwLjkzMjExNjUsMTkuMjI5MTIxMiAxMC45NDU3MzA2LDE5LjIxNTY2NDkgQzEwLjk4NjU3MzIsMTkuMTYxODM5NiAxMS4wMTM4MDE1LDE5LjEwODAxNDQgMTEuMDU0NjQ0MSwxOS4wNDA3MzI4IEMxMS4wNjgyNTgzLDE5LjAyNzI3NjUgMTEuMDgxODcyNCwxOS4wMTM4MjAyIDExLjEwOTEwMDgsMTkuMDEzODIwMiBMMTkuMDA1MzI1NCwyMC42NDIwMzQxIEMxOS4wMzI1NTM3LDIwLjY1NTQ5MDQgMTkuMDQ2MTY3OSwyMC42Njg5NDY3IDE5LjA0NjE2NzksMjAuNjgyNDAzIFogTTExLjMxMzM2NDcsMTguMDk4NzI4NiBDMTEuMjg2MTM2NSwxOC4wOTg3Mjg2IDExLjI3MjUyMjQsMTguMDg1MjcyNCAxMS4yNzI1MjI0LDE4LjA1ODM1OTggQzExLjI3MjUyMjQsMTcuOTUwNzA5NiAxMS4yNDUyOTQxLDE3Ljg1NjUxNTcgMTEuMjMxNjgsMTcuNzQ4ODY1NCBDMTEuMjMxNjgsMTcuNzIxOTUyOSAxMS4yMzE2OCwxNy43MDg0OTY2IDExLjI1ODkwODIsMTcuNjk1MDQwMyBDMTEuMjU4OTA4MiwxNy42OTUwNDAzIDIwLjkzODU0NTksMTMuNTYzOTYzNSAyMC45NTIxNiwxMy41NjM5NjM1IEMyMC45NTIxNiwxMy41NjM5NjM1IDIwLjk2NTc3NDEsMTMuNTYzOTYzNSAyMC45NzkzODgyLDEzLjU3NzQxOTcgQzIxLjA0NzQ1ODgsMTMuNjQ0NzAxMSAyMS4xMDE5MTUzLDEzLjY4NTA2OTkgMjEuMTU2MzcxOCwxMy43MjU0Mzg4IEMyMS4xODM2LDEzLjcyNTQzODggMjEuMTgzNiwxMy43NTIzNTEzIDIxLjE4MzYsMTMuNzY1ODA3NiBMMjAuMzM5NTI0NywxOC45NDY0NzQxIEMyMC4zMzk1MjQ3LDE4Ljk3MzM4NjYgMjAuMzI1OTEwNiwxOC45ODY4NDI5IDIwLjI5ODY4MjQsMTguOTg2ODQyOSBDMTkuODM1ODAyNCwxOS4wMTM3NTU0IDE5LjQyNzM3ODgsMTkuMjgyODgxIDE5LjE5NTkzODgsMTkuNjg2NTY5MyBDMTkuMTgyMzI0NywxOS43MDAwMjU1IDE5LjE2ODcxMDYsMTkuNzEzNDgxOCAxOS4xNDE0ODI0LDE5LjcxMzQ4MTggTDExLjMxMzM2NDcsMTguMDk4NzI4NiBaIE03Ljg2ODk3NzU4LDE5LjE4ODcyOTEgQzcuOTA5ODIwMywxOS4yNTYwMTExIDcuOTUwNjYzMDMsMTkuMzA5ODM2NyA3Ljk5MTUwNTc2LDE5LjM2MzY2MjMgQzguMDA1MTIsMTkuMzc3MTE4NyA4LjAwNTEyLDE5LjM5MDU3NTEgOC4wMDUxMiwxOS4zOTA1NzUxIEw2LjEzOTk2ODc5LDIyLjI4MzcwMDcgQzYuMTI2MzU0NTUsMjIuMjk3MTU3MSA2LjExMjc0MDMsMjIuMzEwNjEzNSA2LjA5OTEyNjA2LDIyLjMxMDYxMzUgQzYuMDk5MTI2MDYsMjIuMzEwNjEzNSA2LjA4NTUxMTgyLDIyLjMxMDYxMzUgNi4wNzE4OTc1OCwyMi4yOTcxNTcxIEw0LjQyNDU3NDI0LDIwLjY2ODkzMjkgQzQuNDEwOTYsMjAuNjU1NDc2NSA0LjQxMDk2LDIwLjY0MjAyMDEgNC40MTA5NiwyMC42Mjg1NjM3IEM0LjQxMDk2LDIwLjYxNTEwNzMgNC40MjQ1NzQyNCwyMC42MDE2NTA5IDQuNDM4MTg4NDgsMjAuNjAxNjUwOSBMNy44MTQ1MjA2MSwxOS4xNjE4MTYzIEw3LjgyODEzNDg1LDE5LjE2MTgxNjMgQzcuODQxNzQ5MDksMTkuMTYxODE2MyA3Ljg1NTM2MzMzLDE5LjE3NTI3MjcgNy44Njg5Nzc1OCwxOS4xODg3MjkxIFogTTEwLjE4MzMxOTEsMTkuODYxNTU3OSBDMTAuMTk2OTMzMiwxOS44NjE1NTc5IDEwLjIxMDU0NzMsMTkuODc1MDE0MiAxMC4yMjQxNjE0LDE5Ljg4ODQ3MDYgTDE3LjQzOTYyOTQsMzAuMzU3NDg3OCBDMTcuNDUzMjQzNSwzMC4zNzA5NDQxIDE3LjQ1MzI0MzUsMzAuMzk3ODU2NyAxNy40Mzk2Mjk0LDMwLjQxMTMxMzEgTDE1Ljg2MDM5NDksMzEuOTg1NzAyNSBDMTUuODYwMzk0OSwzMS45OTkxNTg5IDE1Ljg0Njc4MDgsMzEuOTk5MTU4OSAxNS44MDU5Mzg2LDMxLjk4NTcwMjUgTDYuNzkzNDEwNTcsMjMuMDY0MTYyMiBDNi43Nzk3OTY0OCwyMy4wNTA3MDU4IDYuNzc5Nzk2NDgsMjMuMDIzNzkzMiA2LjgwNzAyNDY2LDIyLjk5Njg4MDYgTDguNzY3NDUzNzEsMTkuOTU1NzUyMiBDOC43ODEwNjc4LDE5Ljk0MjI5NTggOC43OTQ2ODE4OSwxOS45Mjg4Mzk1IDguODIxOTEwMDcsMTkuOTI4ODM5NSBDOS4wMjYxMjE0MywxOS45OTYxMjExIDkuMjE2NzE4NywyMC4wMjMwMzM4IDkuNDIwOTMwMDYsMjAuMDIzMDMzOCBDOS42Nzk1OTc3OCwyMC4wMjMwMzM4IDkuOTI0NjUxNDEsMTkuOTY5MjA4NSAxMC4xODMzMTkxLDE5Ljg2MTU1NzkgWiBNOC45OTg5MTg1NiwxNi40MDMyMzIyIEM4Ljk4NTMwNDM5LDE2LjQwMzIzMjIgOC45NzE2OTAyMiwxNi4zODk3NzU5IDguOTU4MDc2MDQsMTYuMzc2MzE5NiBMNS4wOTE2NTA2MywxMC43MzgxMzg4IEM1LjA3ODAzNjQ2LDEwLjcyNDY4MjUgNS4wNzgwMzY0NiwxMC42OTc3NyA1LjA5MTY1MDYzLDEwLjY4NDMxMzcgTDguNTYzMjY1LDcuMjM5NTA2MzMgQzguNTYzMjY1LDcuMjI2MDUwMDYgOC41NzY4NzkxNyw3LjIyNjA1MDA2IDguNjA0MTA3NTIsNy4yMjYwNTAwNiBDOC42MDQxMDc1Miw3LjIzOTUwNjMzIDEyLjcwMTk3MzksOC45NjE5MTAwMiAxMy4xNjQ4NTU4LDkuMTYzNzU0MiBDMTMuMTc4NDcsOS4xNzcyMTA0OCAxMy4xOTIwODQyLDkuMTkwNjY2NzYgMTMuMTkyMDg0Miw5LjIxNzU3OTMyIEMxMy4xNjQ4NTU4LDkuMzM4Njg1ODMgMTMuMTUxMjQxNiw5LjQ1OTc5MjM0IDEzLjE1MTI0MTYsOS41ODA4OTg4NCBDMTMuMTUxMjQxNiw5Ljk5ODA0MzQ5IDEzLjMxNDYxMTcsMTAuMzg4Mjc1NiAxMy42MDA1MDk0LDEwLjY4NDMxMzcgQzEzLjYxNDEyMzUsMTAuNjk3NzcgMTMuNjE0MTIzNSwxMC43MjQ2ODI1IDEzLjYwMDUwOTQsMTAuNzM4MTM4OCBMOS45NTE5MTA3NCwxNi4zODk3NzU5IEM5LjkzODI5NjU3LDE2LjQwMzIzMjIgOS45MjQ2ODIzOSwxNi40MTY2ODg1IDkuODk3NDU0MDUsMTYuNDE2Njg4NSBDOS43NDc2OTgxMywxNi4zNzYzMTk2IDkuNTg0MzI4MDQsMTYuMzQ5NDA3MSA5LjQzNDU3MjEzLDE2LjM0OTQwNzEgQzkuMjk4NDMwMzksMTYuMzQ5NDA3MSA5LjE0ODY3NDQ4LDE2LjM3NjMxOTYgOC45OTg5MTg1NiwxNi40MDMyMzIyIFogTTEzLjY2ODYwMTksOC4zNTY0MjAzNCBDMTMuNDkxNjE4Niw4LjI3NTY4MTk4IDkuMzUyOTMzMjQsNi41MjYzNTA4MyA5LjM1MjkzMzI0LDYuNTI2MzUwODMgQzkuMzM5MzE5MTQsNi41MTI4OTQ0NCA5LjMyNTcwNTA1LDYuNTEyODk0NDQgOS4zMzkzMTkxNCw2LjQ4NTk4MTY1IEM5LjMzOTMxOTE0LDYuNDcyNTI1MjYgOS4zMzkzMTkxNCw2LjQ1OTA2ODg2IDkuMzUyOTMzMjQsNi40NDU2MTI0NyBMMTUuODMzMjQzMiwwLjAxMzQ1NjM5MzUgQzE1LjgzMzI0MzIsMCAxNS44NDY4NTczLDAgMTUuODYwNDcxNCwwIEMxNS44NzQwODU1LDAgMTUuODc0MDg1NSwwIDE1Ljg4NzY5OTYsMC4wMTM0NTYzOTM1IEwxOC42Nzg1ODk0LDIuNzcyMDE3MDUgQzE4LjY5MjIwMzUsMi43ODU0NzM0NSAxOC42OTIyMDM1LDIuODEyMzg2MjMgMTguNjc4NTg5NCwyLjgyNTg0MjYzIEwxNS4zMTU5MDc2LDguMDMzNDY2OSBDMTUuMzAyMjkzNSw4LjA0NjkyMzI5IDE1LjI4ODY3OTQsOC4wNjAzNzk2OSAxNS4yNjE0NTEyLDguMDYwMzc5NjkgQzE1LjA4NDQ2NzksOC4wMDY1NTQxMSAxNC45MDc0ODQ3LDcuOTc5NjQxMzMgMTQuNzMwNTAxNCw3Ljk3OTY0MTMzIEMxNC4zNjI5MjA4LDcuOTc5NjQxMzMgMTMuOTk1MzQwMiw4LjExNDIwNTI2IDEzLjcwOTQ0NDIsOC4zNDI5NjM5NSBDMTMuNjk1ODMwMSw4LjM1NjQyMDM0IDEzLjY5NTgzMDEsOC4zNTY0MjAzNCAxMy42Njg2MDE5LDguMzU2NDIwMzQgWiBNNy43ODcyODk5NSwxNy4zMzE3NTExIEM3Ljc3MzY3NTgxLDE3LjM0NTIwNzQgNy43NjAwNjE2NywxNy4zNTg2NjM3IDcuNzQ2NDQ3NTIsMTcuMzU4NjYzNyBMMC4wNDA4NDI0Mjk4LDE1Ljc0MzkwOCBDMC4wMTM2MTQxNDMzLDE1Ljc0MzkwOCAwLDE1LjczMDQ1MTcgMCwxNS43MTY5OTU0IEMwLDE1LjcwMzUzOTEgMCwxNS42OTAwODI4IDAuMDEzNjE0MTQzMywxNS42NzY2MjY1IEw0LjMxNTY4MzQyLDExLjQyNDQzNjMgQzQuMzE1NjgzNDIsMTEuNDEwOTgwMSA0LjMyOTI5NzU2LDExLjQxMDk4MDEgNC4zNDI5MTE3MSwxMS40MTA5ODAxIEM0LjM3MDEzOTk5LDExLjQyNDQzNjMgNC4zNzAxMzk5OSwxMS40MjQ0MzYzIDQuMzgzNzU0MTMsMTEuNDM3ODkyNiBDNC4zODM3NTQxMywxMS40NTEzNDg5IDguMDczMTg2OTYsMTYuNzgwMDQyOSA4LjExNDAyOTM5LDE2LjgzMzg2ODEgQzguMTI3NjQzNTQsMTYuODQ3MzI0NCA4LjEyNzY0MzU0LDE2Ljg3NDIzNyA4LjExNDAyOTM5LDE2Ljg4NzY5MzMgQzcuOTkxNTAyMSwxNy4wMjIyNTYzIDcuODY4OTc0ODEsMTcuMTcwMjc1NSA3Ljc4NzI4OTk1LDE3LjMzMTc1MTEgWiBNNy4zNTE1NTc4MywxOC4yNDY3NDY0IEM3LjM3ODc4NTk0LDE4LjI0Njc0NjQgNy4zOTI0LDE4LjI2MDIwMjcgNy4zOTI0LDE4LjI4NzExNTEgQzcuMzkyNCwxOC4zMDA1NzEzIDcuMzc4Nzg1OTQsMTguMzE0MDI3NSA3LjM1MTU1NzgzLDE4LjM0MDkzOTkgTDMuNjM0OTIsMTkuOTE1MzE2NSBDMy42MzQ5MiwxOS45MTUzMTY1IDMuNjIxMzA1OTQsMTkuOTE1MzE2NSAzLjYwNzY5MTg4LDE5LjkwMTg2MDMgTDAuNjI2MjEzMTg1LDE2Ljk0MTQ5NDEgQzAuNjEyNTk5MTI3LDE2LjkyODAzNzggMC41OTg5ODUwNjksMTYuOTAxMTI1NCAwLjYxMjU5OTEyNywxNi44ODc2NjkyIEMwLjYyNjIxMzE4NSwxNi44NzQyMTMgMC42Mzk4MjcyNDMsMTYuODYwNzU2OCAwLjY2NzA1NTM1OSwxNi44NjA3NTY4IEw3LjM1MTU1NzgzLDE4LjI0Njc0NjQgWiIvPjwvc3ZnPg==);\n}\n\n.visuallyHidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  #fff-space: nowrap;\n}\n\n.subheader {\n  margin-top: 2em;\n  border-top: 1px solid rgb(14, 30, 37);\n}\n\n.subheader h3 {\n    padding-top: 1em;\n    text-align: center;\n  }\n',""])},function(e){"use strict";function t(e,t){var r=e[1]||"",o=e[3];if(!o)return r;if(t&&"function"==typeof btoa){var i=n(o);return[r].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([i]).join("\n")}return""+r}function n(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var r=t(n,e);return n[2]?"@media "+n[2]+"{"+r+"}":r}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;this.length>o;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;e.length>o;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),n.push(a))}},n}}]);
//# sourceMappingURL=netlify-identity-widget.js.map
/* Material Design Bootstrap */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery'), require('popper.js')) :
	typeof define === 'function' && define.amd ? define(['jquery', 'popper.js'], factory) :
	(factory(global.jQuery,global.Popper));
}(this, (function ($,Popper$1) { 'use strict';

$ = $ && $.hasOwnProperty('default') ? $['default'] : $;
Popper$1 = Popper$1 && Popper$1.hasOwnProperty('default') ? Popper$1['default'] : Popper$1;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): util.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Util = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */
  var transition = false;
  var MAX_UID = 1000000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: transition.end,
      delegateType: transition.end,
      handle: function handle(event) {
        if ($$$1(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }

        return undefined; // eslint-disable-line no-undefined
      }
    };
  }

  function transitionEndTest() {
    if (typeof window !== 'undefined' && window.QUnit) {
      return false;
    }

    return {
      end: 'transitionend'
    };
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;
    $$$1(this).one(Util.TRANSITION_END, function () {
      called = true;
    });
    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);
    return this;
  }

  function setTransitionEndSupport() {
    transition = transitionEndTest();
    $$$1.fn.emulateTransitionEnd = transitionEndEmulator;

    if (Util.supportsTransitionEnd()) {
      $$$1.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
    }
  }

  function escapeId(selector) {
    // We escape IDs in case of special selectors (selector = '#myId:something')
    // $.escapeSelector does not exist in jQuery < 3
    selector = typeof $$$1.escapeSelector === 'function' ? $$$1.escapeSelector(selector).substr(1) : selector.replace(/(:|\.|\[|\]|,|=|@)/g, '\\$1');
    return selector;
  }
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var Util = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      do {
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));

      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector || selector === '#') {
        selector = element.getAttribute('href') || '';
      } // If it's an ID


      if (selector.charAt(0) === '#') {
        selector = escapeId(selector);
      }

      try {
        var $selector = $$$1(document).find(selector);
        return $selector.length > 0 ? selector : null;
      } catch (err) {
        return null;
      }
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $$$1(element).trigger(transition.end);
    },
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(transition);
    },
    isElement: function isElement(obj) {
      return (obj[0] || obj).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && Util.isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          }
        }
      }
    }
  };
  setTransitionEndSupport();
  return Util;
}($);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Alert = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'alert';
  var VERSION = '4.0.0';
  var DATA_KEY = 'bs.alert';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
  var TRANSITION_DURATION = 150;
  var Selector = {
    DISMISS: '[data-dismiss="alert"]'
  };
  var Event = {
    CLOSE: "close" + EVENT_KEY,
    CLOSED: "closed" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    ALERT: 'alert',
    FADE: 'fade',
    SHOW: 'show'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Alert =
  /*#__PURE__*/
  function () {
    function Alert(element) {
      this._element = element;
    } // Getters


    var _proto = Alert.prototype;

    // Public
    _proto.close = function close(element) {
      element = element || this._element;

      var rootElement = this._getRootElement(element);

      var customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent.isDefaultPrevented()) {
        return;
      }

      this._removeElement(rootElement);
    };

    _proto.dispose = function dispose() {
      $$$1.removeData(this._element, DATA_KEY);
      this._element = null;
    }; // Private


    _proto._getRootElement = function _getRootElement(element) {
      var selector = Util.getSelectorFromElement(element);
      var parent = false;

      if (selector) {
        parent = $$$1(selector)[0];
      }

      if (!parent) {
        parent = $$$1(element).closest("." + ClassName.ALERT)[0];
      }

      return parent;
    };

    _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
      var closeEvent = $$$1.Event(Event.CLOSE);
      $$$1(element).trigger(closeEvent);
      return closeEvent;
    };

    _proto._removeElement = function _removeElement(element) {
      var _this = this;

      $$$1(element).removeClass(ClassName.SHOW);

      if (!Util.supportsTransitionEnd() || !$$$1(element).hasClass(ClassName.FADE)) {
        this._destroyElement(element);

        return;
      }

      $$$1(element).one(Util.TRANSITION_END, function (event) {
        return _this._destroyElement(element, event);
      }).emulateTransitionEnd(TRANSITION_DURATION);
    };

    _proto._destroyElement = function _destroyElement(element) {
      $$$1(element).detach().trigger(Event.CLOSED).remove();
    }; // Static


    Alert._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $$$1(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Alert(this);
          $element.data(DATA_KEY, data);
        }

        if (config === 'close') {
          data[config](this);
        }
      });
    };

    Alert._handleDismiss = function _handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      };
    };

    _createClass(Alert, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);
    return Alert;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $$$1(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $$$1.fn[NAME] = Alert._jQueryInterface;
  $$$1.fn[NAME].Constructor = Alert;

  $$$1.fn[NAME].noConflict = function () {
    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
    return Alert._jQueryInterface;
  };

  return Alert;
}($);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Button = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'button';
  var VERSION = '4.0.0';
  var DATA_KEY = 'bs.button';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
  var ClassName = {
    ACTIVE: 'active',
    BUTTON: 'btn',
    FOCUS: 'focus'
  };
  var Selector = {
    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
    DATA_TOGGLE: '[data-toggle="buttons"]',
    INPUT: 'input',
    ACTIVE: '.active',
    BUTTON: '.btn'
  };
  var Event = {
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
    FOCUS_BLUR_DATA_API: "focus" + EVENT_KEY + DATA_API_KEY + " " + ("blur" + EVENT_KEY + DATA_API_KEY)
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Button =
  /*#__PURE__*/
  function () {
    function Button(element) {
      this._element = element;
    } // Getters


    var _proto = Button.prototype;

    // Public
    _proto.toggle = function toggle() {
      var triggerChangeEvent = true;
      var addAriaPressed = true;
      var rootElement = $$$1(this._element).closest(Selector.DATA_TOGGLE)[0];

      if (rootElement) {
        var input = $$$1(this._element).find(Selector.INPUT)[0];

        if (input) {
          if (input.type === 'radio') {
            if (input.checked && $$$1(this._element).hasClass(ClassName.ACTIVE)) {
              triggerChangeEvent = false;
            } else {
              var activeElement = $$$1(rootElement).find(Selector.ACTIVE)[0];

              if (activeElement) {
                $$$1(activeElement).removeClass(ClassName.ACTIVE);
              }
            }
          }

          if (triggerChangeEvent) {
            if (input.hasAttribute('disabled') || rootElement.hasAttribute('disabled') || input.classList.contains('disabled') || rootElement.classList.contains('disabled')) {
              return;
            }

            input.checked = !$$$1(this._element).hasClass(ClassName.ACTIVE);
            $$$1(input).trigger('change');
          }

          input.focus();
          addAriaPressed = false;
        }
      }

      if (addAriaPressed) {
        this._element.setAttribute('aria-pressed', !$$$1(this._element).hasClass(ClassName.ACTIVE));
      }

      if (triggerChangeEvent) {
        $$$1(this._element).toggleClass(ClassName.ACTIVE);
      }
    };

    _proto.dispose = function dispose() {
      $$$1.removeData(this._element, DATA_KEY);
      this._element = null;
    }; // Static


    Button._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $$$1(this).data(DATA_KEY);

        if (!data) {
          data = new Button(this);
          $$$1(this).data(DATA_KEY, data);
        }

        if (config === 'toggle') {
          data[config]();
        }
      });
    };

    _createClass(Button, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);
    return Button;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
    event.preventDefault();
    var button = event.target;

    if (!$$$1(button).hasClass(ClassName.BUTTON)) {
      button = $$$1(button).closest(Selector.BUTTON);
    }

    Button._jQueryInterface.call($$$1(button), 'toggle');
  }).on(Event.FOCUS_BLUR_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
    var button = $$$1(event.target).closest(Selector.BUTTON)[0];
    $$$1(button).toggleClass(ClassName.FOCUS, /^focus(in)?$/.test(event.type));
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $$$1.fn[NAME] = Button._jQueryInterface;
  $$$1.fn[NAME].Constructor = Button;

  $$$1.fn[NAME].noConflict = function () {
    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
    return Button._jQueryInterface;
  };

  return Button;
}($);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): carousel.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Carousel = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'carousel';
  var VERSION = '4.0.0';
  var DATA_KEY = 'bs.carousel';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
  var TRANSITION_DURATION = 600;
  var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

  var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  var Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true
  };
  var DefaultType = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean'
  };
  var Direction = {
    NEXT: 'next',
    PREV: 'prev',
    LEFT: 'left',
    RIGHT: 'right'
  };
  var Event = {
    SLIDE: "slide" + EVENT_KEY,
    SLID: "slid" + EVENT_KEY,
    KEYDOWN: "keydown" + EVENT_KEY,
    MOUSEENTER: "mouseenter" + EVENT_KEY,
    MOUSELEAVE: "mouseleave" + EVENT_KEY,
    TOUCHEND: "touchend" + EVENT_KEY,
    LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    CAROUSEL: 'carousel',
    ACTIVE: 'active',
    SLIDE: 'slide',
    RIGHT: 'carousel-item-right',
    LEFT: 'carousel-item-left',
    NEXT: 'carousel-item-next',
    PREV: 'carousel-item-prev',
    ITEM: 'carousel-item'
  };
  var Selector = {
    ACTIVE: '.active',
    ACTIVE_ITEM: '.active.carousel-item',
    ITEM: '.carousel-item',
    NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
    INDICATORS: '.carousel-indicators',
    DATA_SLIDE: '[data-slide], [data-slide-to]',
    DATA_RIDE: '[data-ride="carousel"]'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Carousel =
  /*#__PURE__*/
  function () {
    function Carousel(element, config) {
      this._items = null;
      this._interval = null;
      this._activeElement = null;
      this._isPaused = false;
      this._isSliding = false;
      this.touchTimeout = null;
      this._config = this._getConfig(config);
      this._element = $$$1(element)[0];
      this._indicatorsElement = $$$1(this._element).find(Selector.INDICATORS)[0];

      this._addEventListeners();
    } // Getters


    var _proto = Carousel.prototype;

    // Public
    _proto.next = function next() {
      if (!this._isSliding) {
        this._slide(Direction.NEXT);
      }
    };

    _proto.nextWhenVisible = function nextWhenVisible() {
      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if (!document.hidden && $$$1(this._element).is(':visible') && $$$1(this._element).css('visibility') !== 'hidden') {
        this.next();
      }
    };

    _proto.prev = function prev() {
      if (!this._isSliding) {
        this._slide(Direction.PREV);
      }
    };

    _proto.pause = function pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if ($$$1(this._element).find(Selector.NEXT_PREV)[0] && Util.supportsTransitionEnd()) {
        Util.triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    };

    _proto.cycle = function cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config.interval && !this._isPaused) {
        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    };

    _proto.to = function to(index) {
      var _this = this;

      this._activeElement = $$$1(this._element).find(Selector.ACTIVE_ITEM)[0];

      var activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        $$$1(this._element).one(Event.SLID, function () {
          return _this.to(index);
        });
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      var direction = index > activeIndex ? Direction.NEXT : Direction.PREV;

      this._slide(direction, this._items[index]);
    };

    _proto.dispose = function dispose() {
      $$$1(this._element).off(EVENT_KEY);
      $$$1.removeData(this._element, DATA_KEY);
      this._items = null;
      this._config = null;
      this._element = null;
      this._interval = null;
      this._isPaused = null;
      this._isSliding = null;
      this._activeElement = null;
      this._indicatorsElement = null;
    }; // Private


    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default, config);
      Util.typeCheckConfig(NAME, config, DefaultType);
      return config;
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this2 = this;

      if (this._config.keyboard) {
        $$$1(this._element).on(Event.KEYDOWN, function (event) {
          return _this2._keydown(event);
        });
      }

      if (this._config.pause === 'hover') {
        $$$1(this._element).on(Event.MOUSEENTER, function (event) {
          return _this2.pause(event);
        }).on(Event.MOUSELEAVE, function (event) {
          return _this2.cycle(event);
        });

        if ('ontouchstart' in document.documentElement) {
          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          $$$1(this._element).on(Event.TOUCHEND, function () {
            _this2.pause();

            if (_this2.touchTimeout) {
              clearTimeout(_this2.touchTimeout);
            }

            _this2.touchTimeout = setTimeout(function (event) {
              return _this2.cycle(event);
            }, TOUCHEVENT_COMPAT_WAIT + _this2._config.interval);
          });
        }
      }
    };

    _proto._keydown = function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          event.preventDefault();
          this.prev();
          break;

        case ARROW_RIGHT_KEYCODE:
          event.preventDefault();
          this.next();
          break;

        default:
      }
    };

    _proto._getItemIndex = function _getItemIndex(element) {
      this._items = $$$1.makeArray($$$1(element).parent().find(Selector.ITEM));
      return this._items.indexOf(element);
    };

    _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      var isNextDirection = direction === Direction.NEXT;
      var isPrevDirection = direction === Direction.PREV;

      var activeIndex = this._getItemIndex(activeElement);

      var lastItemIndex = this._items.length - 1;
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

      if (isGoingToWrap && !this._config.wrap) {
        return activeElement;
      }

      var delta = direction === Direction.PREV ? -1 : 1;
      var itemIndex = (activeIndex + delta) % this._items.length;
      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    };

    _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      var targetIndex = this._getItemIndex(relatedTarget);

      var fromIndex = this._getItemIndex($$$1(this._element).find(Selector.ACTIVE_ITEM)[0]);

      var slideEvent = $$$1.Event(Event.SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
      $$$1(this._element).trigger(slideEvent);
      return slideEvent;
    };

    _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        $$$1(this._indicatorsElement).find(Selector.ACTIVE).removeClass(ClassName.ACTIVE);

        var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

        if (nextIndicator) {
          $$$1(nextIndicator).addClass(ClassName.ACTIVE);
        }
      }
    };

    _proto._slide = function _slide(direction, element) {
      var _this3 = this;

      var activeElement = $$$1(this._element).find(Selector.ACTIVE_ITEM)[0];

      var activeElementIndex = this._getItemIndex(activeElement);

      var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

      var nextElementIndex = this._getItemIndex(nextElement);

      var isCycling = Boolean(this._interval);
      var directionalClassName;
      var orderClassName;
      var eventDirectionName;

      if (direction === Direction.NEXT) {
        directionalClassName = ClassName.LEFT;
        orderClassName = ClassName.NEXT;
        eventDirectionName = Direction.LEFT;
      } else {
        directionalClassName = ClassName.RIGHT;
        orderClassName = ClassName.PREV;
        eventDirectionName = Direction.RIGHT;
      }

      if (nextElement && $$$1(nextElement).hasClass(ClassName.ACTIVE)) {
        this._isSliding = false;
        return;
      }

      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

      if (slideEvent.isDefaultPrevented()) {
        return;
      }

      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      var slidEvent = $$$1.Event(Event.SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });

      if (Util.supportsTransitionEnd() && $$$1(this._element).hasClass(ClassName.SLIDE)) {
        $$$1(nextElement).addClass(orderClassName);
        Util.reflow(nextElement);
        $$$1(activeElement).addClass(directionalClassName);
        $$$1(nextElement).addClass(directionalClassName);
        $$$1(activeElement).one(Util.TRANSITION_END, function () {
          $$$1(nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(ClassName.ACTIVE);
          $$$1(activeElement).removeClass(ClassName.ACTIVE + " " + orderClassName + " " + directionalClassName);
          _this3._isSliding = false;
          setTimeout(function () {
            return $$$1(_this3._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        $$$1(activeElement).removeClass(ClassName.ACTIVE);
        $$$1(nextElement).addClass(ClassName.ACTIVE);
        this._isSliding = false;
        $$$1(this._element).trigger(slidEvent);
      }

      if (isCycling) {
        this.cycle();
      }
    }; // Static


    Carousel._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $$$1(this).data(DATA_KEY);

        var _config = _extends({}, Default, $$$1(this).data());

        if (typeof config === 'object') {
          _config = _extends({}, _config, config);
        }

        var action = typeof config === 'string' ? config : _config.slide;

        if (!data) {
          data = new Carousel(this, _config);
          $$$1(this).data(DATA_KEY, data);
        }

        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (typeof data[action] === 'undefined') {
            throw new TypeError("No method named \"" + action + "\"");
          }

          data[action]();
        } else if (_config.interval) {
          data.pause();
          data.cycle();
        }
      });
    };

    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
      var selector = Util.getSelectorFromElement(this);

      if (!selector) {
        return;
      }

      var target = $$$1(selector)[0];

      if (!target || !$$$1(target).hasClass(ClassName.CAROUSEL)) {
        return;
      }

      var config = _extends({}, $$$1(target).data(), $$$1(this).data());
      var slideIndex = this.getAttribute('data-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel._jQueryInterface.call($$$1(target), config);

      if (slideIndex) {
        $$$1(target).data(DATA_KEY).to(slideIndex);
      }

      event.preventDefault();
    };

    _createClass(Carousel, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);
    return Carousel;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_SLIDE, Carousel._dataApiClickHandler);
  $$$1(window).on(Event.LOAD_DATA_API, function () {
    $$$1(Selector.DATA_RIDE).each(function () {
      var $carousel = $$$1(this);

      Carousel._jQueryInterface.call($carousel, $carousel.data());
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $$$1.fn[NAME] = Carousel._jQueryInterface;
  $$$1.fn[NAME].Constructor = Carousel;

  $$$1.fn[NAME].noConflict = function () {
    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
    return Carousel._jQueryInterface;
  };

  return Carousel;
}($);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Collapse = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'collapse';
  var VERSION = '4.0.0';
  var DATA_KEY = 'bs.collapse';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
  var TRANSITION_DURATION = 600;
  var Default = {
    toggle: true,
    parent: ''
  };
  var DefaultType = {
    toggle: 'boolean',
    parent: '(string|element)'
  };
  var Event = {
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    SHOW: 'show',
    COLLAPSE: 'collapse',
    COLLAPSING: 'collapsing',
    COLLAPSED: 'collapsed'
  };
  var Dimension = {
    WIDTH: 'width',
    HEIGHT: 'height'
  };
  var Selector = {
    ACTIVES: '.show, .collapsing',
    DATA_TOGGLE: '[data-toggle="collapse"]'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Collapse =
  /*#__PURE__*/
  function () {
    function Collapse(element, config) {
      this._isTransitioning = false;
      this._element = element;
      this._config = this._getConfig(config);
      this._triggerArray = $$$1.makeArray($$$1("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
      var tabToggles = $$$1(Selector.DATA_TOGGLE);

      for (var i = 0; i < tabToggles.length; i++) {
        var elem = tabToggles[i];
        var selector = Util.getSelectorFromElement(elem);

        if (selector !== null && $$$1(selector).filter(element).length > 0) {
          this._selector = selector;

          this._triggerArray.push(elem);
        }
      }

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    } // Getters


    var _proto = Collapse.prototype;

    // Public
    _proto.toggle = function toggle() {
      if ($$$1(this._element).hasClass(ClassName.SHOW)) {
        this.hide();
      } else {
        this.show();
      }
    };

    _proto.show = function show() {
      var _this = this;

      if (this._isTransitioning || $$$1(this._element).hasClass(ClassName.SHOW)) {
        return;
      }

      var actives;
      var activesData;

      if (this._parent) {
        actives = $$$1.makeArray($$$1(this._parent).find(Selector.ACTIVES).filter("[data-parent=\"" + this._config.parent + "\"]"));

        if (actives.length === 0) {
          actives = null;
        }
      }

      if (actives) {
        activesData = $$$1(actives).not(this._selector).data(DATA_KEY);

        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = $$$1.Event(Event.SHOW);
      $$$1(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      if (actives) {
        Collapse._jQueryInterface.call($$$1(actives).not(this._selector), 'hide');

        if (!activesData) {
          $$$1(actives).data(DATA_KEY, null);
        }
      }

      var dimension = this._getDimension();

      $$$1(this._element).removeClass(ClassName.COLLAPSE).addClass(ClassName.COLLAPSING);
      this._element.style[dimension] = 0;

      if (this._triggerArray.length > 0) {
        $$$1(this._triggerArray).removeClass(ClassName.COLLAPSED).attr('aria-expanded', true);
      }

      this.setTransitioning(true);

      var complete = function complete() {
        $$$1(_this._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).addClass(ClassName.SHOW);
        _this._element.style[dimension] = '';

        _this.setTransitioning(false);

        $$$1(_this._element).trigger(Event.SHOWN);
      };

      if (!Util.supportsTransitionEnd()) {
        complete();
        return;
      }

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = "scroll" + capitalizedDimension;
      $$$1(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
      this._element.style[dimension] = this._element[scrollSize] + "px";
    };

    _proto.hide = function hide() {
      var _this2 = this;

      if (this._isTransitioning || !$$$1(this._element).hasClass(ClassName.SHOW)) {
        return;
      }

      var startEvent = $$$1.Event(Event.HIDE);
      $$$1(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      var dimension = this._getDimension();

      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
      Util.reflow(this._element);
      $$$1(this._element).addClass(ClassName.COLLAPSING).removeClass(ClassName.COLLAPSE).removeClass(ClassName.SHOW);

      if (this._triggerArray.length > 0) {
        for (var i = 0; i < this._triggerArray.length; i++) {
          var trigger = this._triggerArray[i];
          var selector = Util.getSelectorFromElement(trigger);

          if (selector !== null) {
            var $elem = $$$1(selector);

            if (!$elem.hasClass(ClassName.SHOW)) {
              $$$1(trigger).addClass(ClassName.COLLAPSED).attr('aria-expanded', false);
            }
          }
        }
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this2.setTransitioning(false);

        $$$1(_this2._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).trigger(Event.HIDDEN);
      };

      this._element.style[dimension] = '';

      if (!Util.supportsTransitionEnd()) {
        complete();
        return;
      }

      $$$1(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
    };

    _proto.setTransitioning = function setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    };

    _proto.dispose = function dispose() {
      $$$1.removeData(this._element, DATA_KEY);
      this._config = null;
      this._parent = null;
      this._element = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    }; // Private


    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default, config);
      config.toggle = Boolean(config.toggle); // Coerce string values

      Util.typeCheckConfig(NAME, config, DefaultType);
      return config;
    };

    _proto._getDimension = function _getDimension() {
      var hasWidth = $$$1(this._element).hasClass(Dimension.WIDTH);
      return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
    };

    _proto._getParent = function _getParent() {
      var _this3 = this;

      var parent = null;

      if (Util.isElement(this._config.parent)) {
        parent = this._config.parent; // It's a jQuery object

        if (typeof this._config.parent.jquery !== 'undefined') {
          parent = this._config.parent[0];
        }
      } else {
        parent = $$$1(this._config.parent)[0];
      }

      var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
      $$$1(parent).find(selector).each(function (i, element) {
        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });
      return parent;
    };

    _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      if (element) {
        var isOpen = $$$1(element).hasClass(ClassName.SHOW);

        if (triggerArray.length > 0) {
          $$$1(triggerArray).toggleClass(ClassName.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
        }
      }
    }; // Static


    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
      var selector = Util.getSelectorFromElement(element);
      return selector ? $$$1(selector)[0] : null;
    };

    Collapse._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $$$1(this);
        var data = $this.data(DATA_KEY);

        var _config = _extends({}, Default, $this.data(), typeof config === 'object' && config);

        if (!data && _config.toggle && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        if (!data) {
          data = new Collapse(this, _config);
          $this.data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Collapse, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);
    return Collapse;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.currentTarget.tagName === 'A') {
      event.preventDefault();
    }

    var $trigger = $$$1(this);
    var selector = Util.getSelectorFromElement(this);
    $$$1(selector).each(function () {
      var $target = $$$1(this);
      var data = $target.data(DATA_KEY);
      var config = data ? 'toggle' : $trigger.data();

      Collapse._jQueryInterface.call($target, config);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $$$1.fn[NAME] = Collapse._jQueryInterface;
  $$$1.fn[NAME].Constructor = Collapse;

  $$$1.fn[NAME].noConflict = function () {
    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
    return Collapse._jQueryInterface;
  };

  return Collapse;
}($);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Modal = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'modal';
  var VERSION = '4.0.0';
  var DATA_KEY = 'bs.modal';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
  var TRANSITION_DURATION = 300;
  var BACKDROP_TRANSITION_DURATION = 150;
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var Default = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };
  var DefaultType = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };
  var Event = {
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    FOCUSIN: "focusin" + EVENT_KEY,
    RESIZE: "resize" + EVENT_KEY,
    CLICK_DISMISS: "click.dismiss" + EVENT_KEY,
    KEYDOWN_DISMISS: "keydown.dismiss" + EVENT_KEY,
    MOUSEUP_DISMISS: "mouseup.dismiss" + EVENT_KEY,
    MOUSEDOWN_DISMISS: "mousedown.dismiss" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector = {
    DIALOG: '.modal-dialog',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
    STICKY_CONTENT: '.sticky-top',
    NAVBAR_TOGGLER: '.navbar-toggler'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Modal =
  /*#__PURE__*/
  function () {
    function Modal(element, config) {
      this._config = this._getConfig(config);
      this._element = element;
      this._dialog = $$$1(element).find(Selector.DIALOG)[0];
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._originalBodyPadding = 0;
      this._scrollbarWidth = 0;
    } // Getters


    var _proto = Modal.prototype;

    // Public
    _proto.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    _proto.show = function show(relatedTarget) {
      var _this = this;

      if (this._isTransitioning || this._isShown) {
        return;
      }

      if (Util.supportsTransitionEnd() && $$$1(this._element).hasClass(ClassName.FADE)) {
        this._isTransitioning = true;
      }

      var showEvent = $$$1.Event(Event.SHOW, {
        relatedTarget: relatedTarget
      });
      $$$1(this._element).trigger(showEvent);

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = true;

      this._checkScrollbar();

      this._setScrollbar();

      this._adjustDialog();

      $$$1(document.body).addClass(ClassName.OPEN);

      this._setEscapeEvent();

      this._setResizeEvent();

      $$$1(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, function (event) {
        return _this.hide(event);
      });
      $$$1(this._dialog).on(Event.MOUSEDOWN_DISMISS, function () {
        $$$1(_this._element).one(Event.MOUSEUP_DISMISS, function (event) {
          if ($$$1(event.target).is(_this._element)) {
            _this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this._showElement(relatedTarget);
      });
    };

    _proto.hide = function hide(event) {
      var _this2 = this;

      if (event) {
        event.preventDefault();
      }

      if (this._isTransitioning || !this._isShown) {
        return;
      }

      var hideEvent = $$$1.Event(Event.HIDE);
      $$$1(this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = false;
      var transition = Util.supportsTransitionEnd() && $$$1(this._element).hasClass(ClassName.FADE);

      if (transition) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      $$$1(document).off(Event.FOCUSIN);
      $$$1(this._element).removeClass(ClassName.SHOW);
      $$$1(this._element).off(Event.CLICK_DISMISS);
      $$$1(this._dialog).off(Event.MOUSEDOWN_DISMISS);

      if (transition) {
        $$$1(this._element).one(Util.TRANSITION_END, function (event) {
          return _this2._hideModal(event);
        }).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        this._hideModal();
      }
    };

    _proto.dispose = function dispose() {
      $$$1.removeData(this._element, DATA_KEY);
      $$$1(window, document, this._element, this._backdrop).off(EVENT_KEY);
      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._scrollbarWidth = null;
    };

    _proto.handleUpdate = function handleUpdate() {
      this._adjustDialog();
    }; // Private


    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default, config);
      Util.typeCheckConfig(NAME, config, DefaultType);
      return config;
    };

    _proto._showElement = function _showElement(relatedTarget) {
      var _this3 = this;

      var transition = Util.supportsTransitionEnd() && $$$1(this._element).hasClass(ClassName.FADE);

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.scrollTop = 0;

      if (transition) {
        Util.reflow(this._element);
      }

      $$$1(this._element).addClass(ClassName.SHOW);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = $$$1.Event(Event.SHOWN, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function transitionComplete() {
        if (_this3._config.focus) {
          _this3._element.focus();
        }

        _this3._isTransitioning = false;
        $$$1(_this3._element).trigger(shownEvent);
      };

      if (transition) {
        $$$1(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        transitionComplete();
      }
    };

    _proto._enforceFocus = function _enforceFocus() {
      var _this4 = this;

      $$$1(document).off(Event.FOCUSIN) // Guard against infinite focus loop
      .on(Event.FOCUSIN, function (event) {
        if (document !== event.target && _this4._element !== event.target && $$$1(_this4._element).has(event.target).length === 0) {
          _this4._element.focus();
        }
      });
    };

    _proto._setEscapeEvent = function _setEscapeEvent() {
      var _this5 = this;

      if (this._isShown && this._config.keyboard) {
        $$$1(this._element).on(Event.KEYDOWN_DISMISS, function (event) {
          if (event.which === ESCAPE_KEYCODE) {
            event.preventDefault();

            _this5.hide();
          }
        });
      } else if (!this._isShown) {
        $$$1(this._element).off(Event.KEYDOWN_DISMISS);
      }
    };

    _proto._setResizeEvent = function _setResizeEvent() {
      var _this6 = this;

      if (this._isShown) {
        $$$1(window).on(Event.RESIZE, function (event) {
          return _this6.handleUpdate(event);
        });
      } else {
        $$$1(window).off(Event.RESIZE);
      }
    };

    _proto._hideModal = function _hideModal() {
      var _this7 = this;

      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._isTransitioning = false;

      this._showBackdrop(function () {
        $$$1(document.body).removeClass(ClassName.OPEN);

        _this7._resetAdjustments();

        _this7._resetScrollbar();

        $$$1(_this7._element).trigger(Event.HIDDEN);
      });
    };

    _proto._removeBackdrop = function _removeBackdrop() {
      if (this._backdrop) {
        $$$1(this._backdrop).remove();
        this._backdrop = null;
      }
    };

    _proto._showBackdrop = function _showBackdrop(callback) {
      var _this8 = this;

      var animate = $$$1(this._element).hasClass(ClassName.FADE) ? ClassName.FADE : '';

      if (this._isShown && this._config.backdrop) {
        var doAnimate = Util.supportsTransitionEnd() && animate;
        this._backdrop = document.createElement('div');
        this._backdrop.className = ClassName.BACKDROP;

        if (animate) {
          $$$1(this._backdrop).addClass(animate);
        }

        $$$1(this._backdrop).appendTo(document.body);
        $$$1(this._element).on(Event.CLICK_DISMISS, function (event) {
          if (_this8._ignoreBackdropClick) {
            _this8._ignoreBackdropClick = false;
            return;
          }

          if (event.target !== event.currentTarget) {
            return;
          }

          if (_this8._config.backdrop === 'static') {
            _this8._element.focus();
          } else {
            _this8.hide();
          }
        });

        if (doAnimate) {
          Util.reflow(this._backdrop);
        }

        $$$1(this._backdrop).addClass(ClassName.SHOW);

        if (!callback) {
          return;
        }

        if (!doAnimate) {
          callback();
          return;
        }

        $$$1(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
      } else if (!this._isShown && this._backdrop) {
        $$$1(this._backdrop).removeClass(ClassName.SHOW);

        var callbackRemove = function callbackRemove() {
          _this8._removeBackdrop();

          if (callback) {
            callback();
          }
        };

        if (Util.supportsTransitionEnd() && $$$1(this._element).hasClass(ClassName.FADE)) {
          $$$1(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    }; // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------


    _proto._adjustDialog = function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      }
    };

    _proto._resetAdjustments = function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    _proto._checkScrollbar = function _checkScrollbar() {
      var rect = document.body.getBoundingClientRect();
      this._isBodyOverflowing = rect.left + rect.right < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    _proto._setScrollbar = function _setScrollbar() {
      var _this9 = this;

      if (this._isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        // Adjust fixed content padding
        $$$1(Selector.FIXED_CONTENT).each(function (index, element) {
          var actualPadding = $$$1(element)[0].style.paddingRight;
          var calculatedPadding = $$$1(element).css('padding-right');
          $$$1(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this9._scrollbarWidth + "px");
        }); // Adjust sticky content margin

        $$$1(Selector.STICKY_CONTENT).each(function (index, element) {
          var actualMargin = $$$1(element)[0].style.marginRight;
          var calculatedMargin = $$$1(element).css('margin-right');
          $$$1(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this9._scrollbarWidth + "px");
        }); // Adjust navbar-toggler margin

        $$$1(Selector.NAVBAR_TOGGLER).each(function (index, element) {
          var actualMargin = $$$1(element)[0].style.marginRight;
          var calculatedMargin = $$$1(element).css('margin-right');
          $$$1(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) + _this9._scrollbarWidth + "px");
        }); // Adjust body padding

        var actualPadding = document.body.style.paddingRight;
        var calculatedPadding = $$$1('body').css('padding-right');
        $$$1('body').data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
      }
    };

    _proto._resetScrollbar = function _resetScrollbar() {
      // Restore fixed content padding
      $$$1(Selector.FIXED_CONTENT).each(function (index, element) {
        var padding = $$$1(element).data('padding-right');

        if (typeof padding !== 'undefined') {
          $$$1(element).css('padding-right', padding).removeData('padding-right');
        }
      }); // Restore sticky content and navbar-toggler margin

      $$$1(Selector.STICKY_CONTENT + ", " + Selector.NAVBAR_TOGGLER).each(function (index, element) {
        var margin = $$$1(element).data('margin-right');

        if (typeof margin !== 'undefined') {
          $$$1(element).css('margin-right', margin).removeData('margin-right');
        }
      }); // Restore body padding

      var padding = $$$1('body').data('padding-right');

      if (typeof padding !== 'undefined') {
        $$$1('body').css('padding-right', padding).removeData('padding-right');
      }
    };

    _proto._getScrollbarWidth = function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    }; // Static


    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $$$1(this).data(DATA_KEY);

        var _config = _extends({}, Modal.Default, $$$1(this).data(), typeof config === 'object' && config);

        if (!data) {
          data = new Modal(this, _config);
          $$$1(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      });
    };

    _createClass(Modal, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);
    return Modal;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    var _this10 = this;

    var target;
    var selector = Util.getSelectorFromElement(this);

    if (selector) {
      target = $$$1(selector)[0];
    }

    var config = $$$1(target).data(DATA_KEY) ? 'toggle' : _extends({}, $$$1(target).data(), $$$1(this).data());

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    var $target = $$$1(target).one(Event.SHOW, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // Only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(Event.HIDDEN, function () {
        if ($$$1(_this10).is(':visible')) {
          _this10.focus();
        }
      });
    });

    Modal._jQueryInterface.call($$$1(target), config, this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $$$1.fn[NAME] = Modal._jQueryInterface;
  $$$1.fn[NAME].Constructor = Modal;

  $$$1.fn[NAME].noConflict = function () {
    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
    return Modal._jQueryInterface;
  };

  return Modal;
}($);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Tooltip = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'tooltip';
  var VERSION = '4.0.0';
  var DATA_KEY = 'bs.tooltip';
  var EVENT_KEY = "." + DATA_KEY;
  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
  var TRANSITION_DURATION = 150;
  var CLASS_PREFIX = 'bs-tooltip';
  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
  var DefaultType = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(number|string)',
    container: '(string|element|boolean)',
    fallbackPlacement: '(string|array)',
    boundary: '(string|element)'
  };
  var AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
  };
  var Default = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: 0,
    container: false,
    fallbackPlacement: 'flip',
    boundary: 'scrollParent'
  };
  var HoverState = {
    SHOW: 'show',
    OUT: 'out'
  };
  var Event = {
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    INSERTED: "inserted" + EVENT_KEY,
    CLICK: "click" + EVENT_KEY,
    FOCUSIN: "focusin" + EVENT_KEY,
    FOCUSOUT: "focusout" + EVENT_KEY,
    MOUSEENTER: "mouseenter" + EVENT_KEY,
    MOUSELEAVE: "mouseleave" + EVENT_KEY
  };
  var ClassName = {
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector = {
    TOOLTIP: '.tooltip',
    TOOLTIP_INNER: '.tooltip-inner',
    ARROW: '.arrow'
  };
  var Trigger = {
    HOVER: 'hover',
    FOCUS: 'focus',
    CLICK: 'click',
    MANUAL: 'manual'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Tooltip =
  /*#__PURE__*/
  function () {
    function Tooltip(element, config) {
      /**
       * Check for Popper dependency
       * Popper - https://popper.js.org
       */
      if (typeof Popper$1 === 'undefined') {
        throw new TypeError('Bootstrap tooltips require Popper.js (https://popper.js.org)');
      } // private


      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._popper = null; // Protected

      this.element = element;
      this.config = this._getConfig(config);
      this.tip = null;

      this._setListeners();
    } // Getters


    var _proto = Tooltip.prototype;

    // Public
    _proto.enable = function enable() {
      this._isEnabled = true;
    };

    _proto.disable = function disable() {
      this._isEnabled = false;
    };

    _proto.toggleEnabled = function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    };

    _proto.toggle = function toggle(event) {
      if (!this._isEnabled) {
        return;
      }

      if (event) {
        var dataKey = this.constructor.DATA_KEY;
        var context = $$$1(event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $$$1(event.currentTarget).data(dataKey, context);
        }

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {
        if ($$$1(this.getTipElement()).hasClass(ClassName.SHOW)) {
          this._leave(null, this);

          return;
        }

        this._enter(null, this);
      }
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      $$$1.removeData(this.element, this.constructor.DATA_KEY);
      $$$1(this.element).off(this.constructor.EVENT_KEY);
      $$$1(this.element).closest('.modal').off('hide.bs.modal');

      if (this.tip) {
        $$$1(this.tip).remove();
      }

      this._isEnabled = null;
      this._timeout = null;
      this._hoverState = null;
      this._activeTrigger = null;

      if (this._popper !== null) {
        this._popper.destroy();
      }

      this._popper = null;
      this.element = null;
      this.config = null;
      this.tip = null;
    };

    _proto.show = function show() {
      var _this = this;

      if ($$$1(this.element).css('display') === 'none') {
        throw new Error('Please use show on visible elements');
      }

      var showEvent = $$$1.Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        $$$1(this.element).trigger(showEvent);
        var isInTheDom = $$$1.contains(this.element.ownerDocument.documentElement, this.element);

        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return;
        }

        var tip = this.getTipElement();
        var tipId = Util.getUID(this.constructor.NAME);
        tip.setAttribute('id', tipId);
        this.element.setAttribute('aria-describedby', tipId);
        this.setContent();

        if (this.config.animation) {
          $$$1(tip).addClass(ClassName.FADE);
        }

        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

        var attachment = this._getAttachment(placement);

        this.addAttachmentClass(attachment);
        var container = this.config.container === false ? document.body : $$$1(this.config.container);
        $$$1(tip).data(this.constructor.DATA_KEY, this);

        if (!$$$1.contains(this.element.ownerDocument.documentElement, this.tip)) {
          $$$1(tip).appendTo(container);
        }

        $$$1(this.element).trigger(this.constructor.Event.INSERTED);
        this._popper = new Popper$1(this.element, tip, {
          placement: attachment,
          modifiers: {
            offset: {
              offset: this.config.offset
            },
            flip: {
              behavior: this.config.fallbackPlacement
            },
            arrow: {
              element: Selector.ARROW
            },
            preventOverflow: {
              boundariesElement: this.config.boundary
            }
          },
          onCreate: function onCreate(data) {
            if (data.originalPlacement !== data.placement) {
              _this._handlePopperPlacementChange(data);
            }
          },
          onUpdate: function onUpdate(data) {
            _this._handlePopperPlacementChange(data);
          }
        });
        $$$1(tip).addClass(ClassName.SHOW); // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

        if ('ontouchstart' in document.documentElement) {
          $$$1('body').children().on('mouseover', null, $$$1.noop);
        }

        var complete = function complete() {
          if (_this.config.animation) {
            _this._fixTransition();
          }

          var prevHoverState = _this._hoverState;
          _this._hoverState = null;
          $$$1(_this.element).trigger(_this.constructor.Event.SHOWN);

          if (prevHoverState === HoverState.OUT) {
            _this._leave(null, _this);
          }
        };

        if (Util.supportsTransitionEnd() && $$$1(this.tip).hasClass(ClassName.FADE)) {
          $$$1(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(Tooltip._TRANSITION_DURATION);
        } else {
          complete();
        }
      }
    };

    _proto.hide = function hide(callback) {
      var _this2 = this;

      var tip = this.getTipElement();
      var hideEvent = $$$1.Event(this.constructor.Event.HIDE);

      var complete = function complete() {
        if (_this2._hoverState !== HoverState.SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        _this2._cleanTipClass();

        _this2.element.removeAttribute('aria-describedby');

        $$$1(_this2.element).trigger(_this2.constructor.Event.HIDDEN);

        if (_this2._popper !== null) {
          _this2._popper.destroy();
        }

        if (callback) {
          callback();
        }
      };

      $$$1(this.element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $$$1(tip).removeClass(ClassName.SHOW); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        $$$1('body').children().off('mouseover', null, $$$1.noop);
      }

      this._activeTrigger[Trigger.CLICK] = false;
      this._activeTrigger[Trigger.FOCUS] = false;
      this._activeTrigger[Trigger.HOVER] = false;

      if (Util.supportsTransitionEnd() && $$$1(this.tip).hasClass(ClassName.FADE)) {
        $$$1(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        complete();
      }

      this._hoverState = '';
    };

    _proto.update = function update() {
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    }; // Protected


    _proto.isWithContent = function isWithContent() {
      return Boolean(this.getTitle());
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $$$1(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $$$1(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var $tip = $$$1(this.getTipElement());
      this.setElementContent($tip.find(Selector.TOOLTIP_INNER), this.getTitle());
      $tip.removeClass(ClassName.FADE + " " + ClassName.SHOW);
    };

    _proto.setElementContent = function setElementContent($element, content) {
      var html = this.config.html;

      if (typeof content === 'object' && (content.nodeType || content.jquery)) {
        // Content is a DOM node or a jQuery
        if (html) {
          if (!$$$1(content).parent().is($element)) {
            $element.empty().append(content);
          }
        } else {
          $element.text($$$1(content).text());
        }
      } else {
        $element[html ? 'html' : 'text'](content);
      }
    };

    _proto.getTitle = function getTitle() {
      var title = this.element.getAttribute('data-original-title');

      if (!title) {
        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
      }

      return title;
    }; // Private


    _proto._getAttachment = function _getAttachment(placement) {
      return AttachmentMap[placement.toUpperCase()];
    };

    _proto._setListeners = function _setListeners() {
      var _this3 = this;

      var triggers = this.config.trigger.split(' ');
      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          $$$1(_this3.element).on(_this3.constructor.Event.CLICK, _this3.config.selector, function (event) {
            return _this3.toggle(event);
          });
        } else if (trigger !== Trigger.MANUAL) {
          var eventIn = trigger === Trigger.HOVER ? _this3.constructor.Event.MOUSEENTER : _this3.constructor.Event.FOCUSIN;
          var eventOut = trigger === Trigger.HOVER ? _this3.constructor.Event.MOUSELEAVE : _this3.constructor.Event.FOCUSOUT;
          $$$1(_this3.element).on(eventIn, _this3.config.selector, function (event) {
            return _this3._enter(event);
          }).on(eventOut, _this3.config.selector, function (event) {
            return _this3._leave(event);
          });
        }

        $$$1(_this3.element).closest('.modal').on('hide.bs.modal', function () {
          return _this3.hide();
        });
      });

      if (this.config.selector) {
        this.config = _extends({}, this.config, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    };

    _proto._fixTitle = function _fixTitle() {
      var titleType = typeof this.element.getAttribute('data-original-title');

      if (this.element.getAttribute('title') || titleType !== 'string') {
        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
        this.element.setAttribute('title', '');
      }
    };

    _proto._enter = function _enter(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $$$1(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $$$1(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
      }

      if ($$$1(context.getTipElement()).hasClass(ClassName.SHOW) || context._hoverState === HoverState.SHOW) {
        context._hoverState = HoverState.SHOW;
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HoverState.SHOW;

      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    };

    _proto._leave = function _leave(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $$$1(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $$$1(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HoverState.OUT;

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    };

    _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    };

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, this.constructor.Default, $$$1(this.element).data(), config);

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
      return config;
    };

    _proto._getDelegateConfig = function _getDelegateConfig() {
      var config = {};

      if (this.config) {
        for (var key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key];
          }
        }
      }

      return config;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $$$1(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    };

    _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(data) {
      this._cleanTipClass();

      this.addAttachmentClass(this._getAttachment(data.placement));
    };

    _proto._fixTransition = function _fixTransition() {
      var tip = this.getTipElement();
      var initConfigAnimation = this.config.animation;

      if (tip.getAttribute('x-placement') !== null) {
        return;
      }

      $$$1(tip).removeClass(ClassName.FADE);
      this.config.animation = false;
      this.hide();
      this.show();
      this.config.animation = initConfigAnimation;
    }; // Static


    Tooltip._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $$$1(this).data(DATA_KEY);

        var _config = typeof config === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Tooltip(this, _config);
          $$$1(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tooltip, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType;
      }
    }]);
    return Tooltip;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $$$1.fn[NAME] = Tooltip._jQueryInterface;
  $$$1.fn[NAME].Constructor = Tooltip;

  $$$1.fn[NAME].noConflict = function () {
    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
    return Tooltip._jQueryInterface;
  };

  return Tooltip;
}($, Popper$1);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Popover = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'popover';
  var VERSION = '4.0.0';
  var DATA_KEY = 'bs.popover';
  var EVENT_KEY = "." + DATA_KEY;
  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
  var CLASS_PREFIX = 'bs-popover';
  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
  var Default = _extends({}, Tooltip.Default, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
  });
  var DefaultType = _extends({}, Tooltip.DefaultType, {
    content: '(string|element|function)'
  });
  var ClassName = {
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector = {
    TITLE: '.popover-header',
    CONTENT: '.popover-body'
  };
  var Event = {
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    INSERTED: "inserted" + EVENT_KEY,
    CLICK: "click" + EVENT_KEY,
    FOCUSIN: "focusin" + EVENT_KEY,
    FOCUSOUT: "focusout" + EVENT_KEY,
    MOUSEENTER: "mouseenter" + EVENT_KEY,
    MOUSELEAVE: "mouseleave" + EVENT_KEY
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Popover =
  /*#__PURE__*/
  function (_Tooltip) {
    _inheritsLoose(Popover, _Tooltip);

    function Popover() {
      return _Tooltip.apply(this, arguments) || this;
    }

    var _proto = Popover.prototype;

    // Overrides
    _proto.isWithContent = function isWithContent() {
      return this.getTitle() || this._getContent();
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $$$1(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $$$1(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var $tip = $$$1(this.getTipElement()); // We use append for html objects to maintain js events

      this.setElementContent($tip.find(Selector.TITLE), this.getTitle());

      var content = this._getContent();

      if (typeof content === 'function') {
        content = content.call(this.element);
      }

      this.setElementContent($tip.find(Selector.CONTENT), content);
      $tip.removeClass(ClassName.FADE + " " + ClassName.SHOW);
    }; // Private


    _proto._getContent = function _getContent() {
      return this.element.getAttribute('data-content') || this.config.content;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $$$1(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    }; // Static


    Popover._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $$$1(this).data(DATA_KEY);

        var _config = typeof config === 'object' ? config : null;

        if (!data && /destroy|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Popover(this, _config);
          $$$1(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Popover, null, [{
      key: "VERSION",
      // Getters
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType;
      }
    }]);
    return Popover;
  }(Tooltip);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $$$1.fn[NAME] = Popover._jQueryInterface;
  $$$1.fn[NAME].Constructor = Popover;

  $$$1.fn[NAME].noConflict = function () {
    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
    return Popover._jQueryInterface;
  };

  return Popover;
}($);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): scrollspy.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var ScrollSpy = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'scrollspy';
  var VERSION = '4.0.0';
  var DATA_KEY = 'bs.scrollspy';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
  var Default = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  var DefaultType = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  var Event = {
    ACTIVATE: "activate" + EVENT_KEY,
    SCROLL: "scroll" + EVENT_KEY,
    LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    DROPDOWN_ITEM: 'dropdown-item',
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active'
  };
  var Selector = {
    DATA_SPY: '[data-spy="scroll"]',
    ACTIVE: '.active',
    NAV_LIST_GROUP: '.nav, .list-group',
    NAV_LINKS: '.nav-link',
    NAV_ITEMS: '.nav-item',
    LIST_ITEMS: '.list-group-item',
    DROPDOWN: '.dropdown',
    DROPDOWN_ITEMS: '.dropdown-item',
    DROPDOWN_TOGGLE: '.dropdown-toggle'
  };
  var OffsetMethod = {
    OFFSET: 'offset',
    POSITION: 'position'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var ScrollSpy =
  /*#__PURE__*/
  function () {
    function ScrollSpy(element, config) {
      var _this = this;

      this._element = element;
      this._scrollElement = element.tagName === 'BODY' ? window : element;
      this._config = this._getConfig(config);
      this._selector = this._config.target + " " + Selector.NAV_LINKS + "," + (this._config.target + " " + Selector.LIST_ITEMS + ",") + (this._config.target + " " + Selector.DROPDOWN_ITEMS);
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;
      $$$1(this._scrollElement).on(Event.SCROLL, function (event) {
        return _this._process(event);
      });
      this.refresh();

      this._process();
    } // Getters


    var _proto = ScrollSpy.prototype;

    // Public
    _proto.refresh = function refresh() {
      var _this2 = this;

      var autoMethod = this._scrollElement === this._scrollElement.window ? OffsetMethod.OFFSET : OffsetMethod.POSITION;
      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
      var offsetBase = offsetMethod === OffsetMethod.POSITION ? this._getScrollTop() : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();
      var targets = $$$1.makeArray($$$1(this._selector));
      targets.map(function (element) {
        var target;
        var targetSelector = Util.getSelectorFromElement(element);

        if (targetSelector) {
          target = $$$1(targetSelector)[0];
        }

        if (target) {
          var targetBCR = target.getBoundingClientRect();

          if (targetBCR.width || targetBCR.height) {
            // TODO (fat): remove sketch reliance on jQuery position/offset
            return [$$$1(target)[offsetMethod]().top + offsetBase, targetSelector];
          }
        }

        return null;
      }).filter(function (item) {
        return item;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        _this2._offsets.push(item[0]);

        _this2._targets.push(item[1]);
      });
    };

    _proto.dispose = function dispose() {
      $$$1.removeData(this._element, DATA_KEY);
      $$$1(this._scrollElement).off(EVENT_KEY);
      this._element = null;
      this._scrollElement = null;
      this._config = null;
      this._selector = null;
      this._offsets = null;
      this._targets = null;
      this._activeTarget = null;
      this._scrollHeight = null;
    }; // Private


    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default, config);

      if (typeof config.target !== 'string') {
        var id = $$$1(config.target).attr('id');

        if (!id) {
          id = Util.getUID(NAME);
          $$$1(config.target).attr('id', id);
        }

        config.target = "#" + id;
      }

      Util.typeCheckConfig(NAME, config, DefaultType);
      return config;
    };

    _proto._getScrollTop = function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    };

    _proto._getScrollHeight = function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    };

    _proto._getOffsetHeight = function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    };

    _proto._process = function _process() {
      var scrollTop = this._getScrollTop() + this._config.offset;

      var scrollHeight = this._getScrollHeight();

      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        var target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }

        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;

        this._clear();

        return;
      }

      for (var i = this._offsets.length; i--;) {
        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    };

    _proto._activate = function _activate(target) {
      this._activeTarget = target;

      this._clear();

      var queries = this._selector.split(','); // eslint-disable-next-line arrow-body-style


      queries = queries.map(function (selector) {
        return selector + "[data-target=\"" + target + "\"]," + (selector + "[href=\"" + target + "\"]");
      });
      var $link = $$$1(queries.join(','));

      if ($link.hasClass(ClassName.DROPDOWN_ITEM)) {
        $link.closest(Selector.DROPDOWN).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
        $link.addClass(ClassName.ACTIVE);
      } else {
        // Set triggered link as active
        $link.addClass(ClassName.ACTIVE); // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

        $link.parents(Selector.NAV_LIST_GROUP).prev(Selector.NAV_LINKS + ", " + Selector.LIST_ITEMS).addClass(ClassName.ACTIVE); // Handle special case when .nav-link is inside .nav-item

        $link.parents(Selector.NAV_LIST_GROUP).prev(Selector.NAV_ITEMS).children(Selector.NAV_LINKS).addClass(ClassName.ACTIVE);
      }

      $$$1(this._scrollElement).trigger(Event.ACTIVATE, {
        relatedTarget: target
      });
    };

    _proto._clear = function _clear() {
      $$$1(this._selector).filter(Selector.ACTIVE).removeClass(ClassName.ACTIVE);
    }; // Static


    ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $$$1(this).data(DATA_KEY);

        var _config = typeof config === 'object' && config;

        if (!data) {
          data = new ScrollSpy(this, _config);
          $$$1(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(ScrollSpy, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);
    return ScrollSpy;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $$$1(window).on(Event.LOAD_DATA_API, function () {
    var scrollSpys = $$$1.makeArray($$$1(Selector.DATA_SPY));

    for (var i = scrollSpys.length; i--;) {
      var $spy = $$$1(scrollSpys[i]);

      ScrollSpy._jQueryInterface.call($spy, $spy.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $$$1.fn[NAME] = ScrollSpy._jQueryInterface;
  $$$1.fn[NAME].Constructor = ScrollSpy;

  $$$1.fn[NAME].noConflict = function () {
    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
    return ScrollSpy._jQueryInterface;
  };

  return ScrollSpy;
}($);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Tab = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'tab';
  var VERSION = '4.0.0';
  var DATA_KEY = 'bs.tab';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
  var TRANSITION_DURATION = 150;
  var Event = {
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active',
    DISABLED: 'disabled',
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector = {
    DROPDOWN: '.dropdown',
    NAV_LIST_GROUP: '.nav, .list-group',
    ACTIVE: '.active',
    ACTIVE_UL: '> li > .active',
    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    DROPDOWN_TOGGLE: '.dropdown-toggle',
    DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Tab =
  /*#__PURE__*/
  function () {
    function Tab(element) {
      this._element = element;
    } // Getters


    var _proto = Tab.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $$$1(this._element).hasClass(ClassName.ACTIVE) || $$$1(this._element).hasClass(ClassName.DISABLED)) {
        return;
      }

      var target;
      var previous;
      var listElement = $$$1(this._element).closest(Selector.NAV_LIST_GROUP)[0];
      var selector = Util.getSelectorFromElement(this._element);

      if (listElement) {
        var itemSelector = listElement.nodeName === 'UL' ? Selector.ACTIVE_UL : Selector.ACTIVE;
        previous = $$$1.makeArray($$$1(listElement).find(itemSelector));
        previous = previous[previous.length - 1];
      }

      var hideEvent = $$$1.Event(Event.HIDE, {
        relatedTarget: this._element
      });
      var showEvent = $$$1.Event(Event.SHOW, {
        relatedTarget: previous
      });

      if (previous) {
        $$$1(previous).trigger(hideEvent);
      }

      $$$1(this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
        return;
      }

      if (selector) {
        target = $$$1(selector)[0];
      }

      this._activate(this._element, listElement);

      var complete = function complete() {
        var hiddenEvent = $$$1.Event(Event.HIDDEN, {
          relatedTarget: _this._element
        });
        var shownEvent = $$$1.Event(Event.SHOWN, {
          relatedTarget: previous
        });
        $$$1(previous).trigger(hiddenEvent);
        $$$1(_this._element).trigger(shownEvent);
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    };

    _proto.dispose = function dispose() {
      $$$1.removeData(this._element, DATA_KEY);
      this._element = null;
    }; // Private


    _proto._activate = function _activate(element, container, callback) {
      var _this2 = this;

      var activeElements;

      if (container.nodeName === 'UL') {
        activeElements = $$$1(container).find(Selector.ACTIVE_UL);
      } else {
        activeElements = $$$1(container).children(Selector.ACTIVE);
      }

      var active = activeElements[0];
      var isTransitioning = callback && Util.supportsTransitionEnd() && active && $$$1(active).hasClass(ClassName.FADE);

      var complete = function complete() {
        return _this2._transitionComplete(element, active, callback);
      };

      if (active && isTransitioning) {
        $$$1(active).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        complete();
      }
    };

    _proto._transitionComplete = function _transitionComplete(element, active, callback) {
      if (active) {
        $$$1(active).removeClass(ClassName.SHOW + " " + ClassName.ACTIVE);
        var dropdownChild = $$$1(active.parentNode).find(Selector.DROPDOWN_ACTIVE_CHILD)[0];

        if (dropdownChild) {
          $$$1(dropdownChild).removeClass(ClassName.ACTIVE);
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
      }

      $$$1(element).addClass(ClassName.ACTIVE);

      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
      }

      Util.reflow(element);
      $$$1(element).addClass(ClassName.SHOW);

      if (element.parentNode && $$$1(element.parentNode).hasClass(ClassName.DROPDOWN_MENU)) {
        var dropdownElement = $$$1(element).closest(Selector.DROPDOWN)[0];

        if (dropdownElement) {
          $$$1(dropdownElement).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    }; // Static


    Tab._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $$$1(this);
        var data = $this.data(DATA_KEY);

        if (!data) {
          data = new Tab(this);
          $this.data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tab, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);
    return Tab;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    event.preventDefault();

    Tab._jQueryInterface.call($$$1(this), 'show');
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $$$1.fn[NAME] = Tab._jQueryInterface;
  $$$1.fn[NAME].Constructor = Tab;

  $$$1.fn[NAME].noConflict = function () {
    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
    return Tab._jQueryInterface;
  };

  return Tab;
}($);

var Util$2 = function () {
  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */
  var transitionEnd = false;
  var _transitionEndSelector = "";
  var TransitionEndEvent = {
    WebkitTransition: "webkitTransitionEnd",
    MozTransition: "transitionend",
    OTransition: "oTransitionEnd otransitionend",
    transition: "transitionend"
  };

  function transitionEndTest() {
    if (window.QUnit) {
      return false;
    }

    var el = document.createElement("bmd");

    for (var name in TransitionEndEvent) {
      if (el.style[name] !== undefined) {
        return TransitionEndEvent[name]; // { end: TransitionEndEvent[name] }
      }
    }

    return false;
  }

  function setTransitionEndSupport() {
    transitionEnd = transitionEndTest(); // generate a concatenated transition end event selector

    for (var name in TransitionEndEvent) {
      _transitionEndSelector += " " + TransitionEndEvent[name];
    }
  }
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var Util = {
    transitionEndSupported: function transitionEndSupported() {
      return transitionEnd;
    },
    transitionEndSelector: function transitionEndSelector() {
      return _transitionEndSelector;
    },
    isChar: function isChar(event) {
      if (typeof event.which === "undefined") {
        return true;
      } else if (typeof event.which === "number" && event.which > 0) {
        return !event.ctrlKey && !event.metaKey && !event.altKey && event.which !== 8 && // backspace
        event.which !== 9 && // tab
        event.which !== 13 && // enter
        event.which !== 16 && // shift
        event.which !== 17 && // ctrl
        event.which !== 20 && // caps lock
        event.which !== 27 // escape
        ;
      }

      return false;
    },
    assert: function assert($element, invalidTest, message) {
      if (invalidTest) {
        if (!$element === undefined) {
          $element.css("border", "1px solid red");
        }

        console.error(message, $element); // eslint-disable-line no-console

        throw message;
      }
    },
    describe: function describe($element) {
      if ($element === undefined) {
        return "undefined";
      } else if ($element.length === 0) {
        return "(no matching elements)";
      }

      return $element[0].outerHTML.split(">")[0] + ">";
    }
  };
  setTransitionEndSupport();
  return Util;
}(jQuery);

var Base = function ($$$1) {
  var ClassName = {
    BMD_FORM_GROUP: "bmd-form-group",
    IS_FILLED: "is-filled",
    IS_FOCUSED: "is-focused"
  };
  var Selector = {
    BMD_FORM_GROUP: "." + ClassName.BMD_FORM_GROUP
  };
  var Default = {};
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Base =
  /*#__PURE__*/
  function () {
    /**
     *
     * @param element
     * @param config
     * @param properties - anything that needs to be set as this[key] = value.  Works around the need to call `super` before using `this`
     */
    function Base($element, config, properties) {
      if (properties === void 0) {
        properties = {};
      }

      this.$element = $element;
      this.config = $$$1.extend(true, {}, Default, config); // set properties for use in the constructor initialization

      for (var key in properties) {
        this[key] = properties[key];
      }
    }

    var _proto = Base.prototype;

    _proto.dispose = function dispose(dataKey) {
      this.$element.data(dataKey, null);
      this.$element = null;
      this.config = null;
    }; // ------------------------------------------------------------------------
    // protected


    _proto.addFormGroupFocus = function addFormGroupFocus() {
      if (!this.$element.prop("disabled")) {
        this.$bmdFormGroup.addClass(ClassName.IS_FOCUSED);
      }
    };

    _proto.removeFormGroupFocus = function removeFormGroupFocus() {
      this.$bmdFormGroup.removeClass(ClassName.IS_FOCUSED);
    };

    _proto.removeIsFilled = function removeIsFilled() {
      this.$bmdFormGroup.removeClass(ClassName.IS_FILLED);
    };

    _proto.addIsFilled = function addIsFilled() {
      this.$bmdFormGroup.addClass(ClassName.IS_FILLED);
    }; // Find bmd-form-group


    _proto.findMdbFormGroup = function findMdbFormGroup(raiseError) {
      if (raiseError === void 0) {
        raiseError = true;
      }

      var mfg = this.$element.closest(Selector.BMD_FORM_GROUP);

      if (mfg.length === 0 && raiseError) {
        $$$1.error("Failed to find " + Selector.BMD_FORM_GROUP + " for " + Util$2.describe(this.$element));
      }

      return mfg;
    }; // ------------------------------------------------------------------------
    // private
    // ------------------------------------------------------------------------
    // static


    return Base;
  }();

  return Base;
}(jQuery);

var BaseInput = function ($$$1) {
  var ClassName = {
    FORM_GROUP: "form-group",
    BMD_FORM_GROUP: "bmd-form-group",
    BMD_LABEL: "bmd-label",
    BMD_LABEL_STATIC: "bmd-label-static",
    BMD_LABEL_PLACEHOLDER: "bmd-label-placeholder",
    BMD_LABEL_FLOATING: "bmd-label-floating",
    HAS_DANGER: "has-danger",
    IS_FILLED: "is-filled",
    IS_FOCUSED: "is-focused",
    INPUT_GROUP: "input-group"
  };
  var Selector = {
    FORM_GROUP: "." + ClassName.FORM_GROUP,
    BMD_FORM_GROUP: "." + ClassName.BMD_FORM_GROUP,
    BMD_LABEL_WILDCARD: "label[class^='" + ClassName.BMD_LABEL + "'], label[class*=' " + ClassName.BMD_LABEL + "']" // match any label variant if specified

  };
  var Default = {
    validate: false,
    formGroup: {
      required: false
    },
    bmdFormGroup: {
      template: "<span class='" + ClassName.BMD_FORM_GROUP + "'></span>",
      create: true,
      // create a wrapper if form-group not found
      required: true // not recommended to turn this off, only used for inline components

    },
    label: {
      required: false,
      // Prioritized find order for resolving the label to be used as an bmd-label if not specified in the markup
      //  - a function(thisComponent); or
      //  - a string selector used like $bmdFormGroup.find(selector)
      //
      // Note this only runs if $bmdFormGroup.find(Selector.BMD_LABEL_WILDCARD) fails to find a label (as authored in the markup)
      //
      selectors: [".form-control-label", // in the case of horizontal or inline forms, this will be marked
      "> label" // usual case for text inputs, first child.  Deeper would find toggle labels so don't do that.
      ],
      className: ClassName.BMD_LABEL_STATIC
    },
    requiredClasses: [],
    invalidComponentMatches: [],
    convertInputSizeVariations: true
  };
  var FormControlSizeMarkers = {
    "form-control-lg": "bmd-form-group-lg",
    "form-control-sm": "bmd-form-group-sm"
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var BaseInput =
  /*#__PURE__*/
  function (_Base) {
    _inheritsLoose(BaseInput, _Base);

    /**
     *
     * @param element
     * @param config
     * @param properties - anything that needs to be set as this[key] = value.  Works around the need to call `super` before using `this`
     */
    function BaseInput($element, config, properties) {
      var _this;

      if (properties === void 0) {
        properties = {};
      }

      _this = _Base.call(this, $element, $$$1.extend(true, {}, Default, config), properties) || this; // Enforce no overlap between components to prevent side effects

      _this._rejectInvalidComponentMatches(); // Enforce expected structure (if any)


      _this.rejectWithoutRequiredStructure(); // Enforce required classes for a consistent rendering


      _this._rejectWithoutRequiredClasses(); // Resolve the form-group first, it will be used for bmd-form-group if possible
      //   note: different components have different rules


      _this.$formGroup = _this.findFormGroup(_this.config.formGroup.required); // Will add bmd-form-group to form-group or create an bmd-form-group
      //  Performance Note: for those forms that are really performance driven, create the markup with the .bmd-form-group to avoid
      //    rendering changes once added.

      _this.$bmdFormGroup = _this.resolveMdbFormGroup(); // Resolve and mark the bmdLabel if necessary as defined by the config

      _this.$bmdLabel = _this.resolveMdbLabel(); // Signal to the bmd-form-group that a form-control-* variation is being used

      _this.resolveMdbFormGroupSizing();

      _this.addFocusListener();

      _this.addChangeListener();

      if (_this.$element.val() != "") {
        _this.addIsFilled();
      }

      return _this;
    }

    var _proto = BaseInput.prototype;

    _proto.dispose = function dispose(dataKey) {
      _Base.prototype.dispose.call(this, dataKey);

      this.$bmdFormGroup = null;
      this.$formGroup = null;
    }; // ------------------------------------------------------------------------
    // protected


    _proto.rejectWithoutRequiredStructure = function rejectWithoutRequiredStructure() {// implement
    };

    _proto.addFocusListener = function addFocusListener() {
      var _this2 = this;

      this.$element.on("focus", function () {
        _this2.addFormGroupFocus();
      }).on("blur", function () {
        _this2.removeFormGroupFocus();
      });
    };

    _proto.addChangeListener = function addChangeListener() {
      var _this3 = this;

      this.$element.on("keydown paste", function (event) {
        if (Util$2.isChar(event)) {
          _this3.addIsFilled();
        }
      }).on("keyup change", function () {
        // make sure empty is added back when there is a programmatic value change.
        //  NOTE: programmatic changing of value using $.val() must trigger the change event i.e. $.val('x').trigger('change')
        if (_this3.isEmpty()) {
          _this3.removeIsFilled();
        } else {
          _this3.addIsFilled();
        }

        if (_this3.config.validate) {
          // Validation events do not bubble, so they must be attached directly to the text: http://jsfiddle.net/PEpRM/1/
          //  Further, even the bind method is being caught, but since we are already calling #checkValidity here, just alter
          //  the form-group on change.
          //
          // NOTE: I'm not sure we should be intervening regarding validation, this seems better as a README and snippet of code.
          //        BUT, I've left it here for backwards compatibility.
          var isValid = typeof _this3.$element[0].checkValidity === "undefined" || _this3.$element[0].checkValidity();

          if (isValid) {
            _this3.removeHasDanger();
          } else {
            _this3.addHasDanger();
          }
        }
      });
    };

    _proto.addHasDanger = function addHasDanger() {
      this.$bmdFormGroup.addClass(ClassName.HAS_DANGER);
    };

    _proto.removeHasDanger = function removeHasDanger() {
      this.$bmdFormGroup.removeClass(ClassName.HAS_DANGER);
    };

    _proto.isEmpty = function isEmpty() {
      return this.$element.val() === null || this.$element.val() === undefined || this.$element.val() === "";
    }; // Will add bmd-form-group to form-group or create a bmd-form-group if necessary


    _proto.resolveMdbFormGroup = function resolveMdbFormGroup() {
      var mfg = this.findMdbFormGroup(false);

      if (mfg === undefined || mfg.length === 0) {
        if (this.config.bmdFormGroup.create && (this.$formGroup === undefined || this.$formGroup.length === 0)) {
          // If a form-group doesn't exist (not recommended), take a guess and wrap the element (assuming no label).
          //  note: it's possible to make this smarter, but I need to see valid cases before adding any complexity.
          // this may be an input-group, wrap that instead
          if (this.outerElement().parent().hasClass(ClassName.INPUT_GROUP)) {
            this.outerElement().parent().wrap(this.config.bmdFormGroup.template);
          } else {
            this.outerElement().wrap(this.config.bmdFormGroup.template);
          }
        } else {
          // a form-group does exist, add our marker class to it
          this.$formGroup.addClass(ClassName.BMD_FORM_GROUP); // OLD: may want to implement this after all, see how the styling turns out, but using an existing form-group is less manipulation of the dom and therefore preferable
          // A form-group does exist, so add an bmd-form-group wrapping it's internal contents
          //fg.wrapInner(this.config.bmdFormGroup.template)
        }

        mfg = this.findMdbFormGroup(this.config.bmdFormGroup.required);
      }

      return mfg;
    }; // Demarcation element (e.g. first child of a form-group)
    //  Subclasses such as file inputs may have different structures


    _proto.outerElement = function outerElement() {
      return this.$element;
    }; // Will add bmd-label to bmd-form-group if not already specified


    _proto.resolveMdbLabel = function resolveMdbLabel() {
      var label = this.$bmdFormGroup.find(Selector.BMD_LABEL_WILDCARD);

      if (label === undefined || label.length === 0) {
        // we need to find it based on the configured selectors
        label = this.findMdbLabel(this.config.label.required);

        if (label === undefined || label.length === 0) {// no label found, and finder did not require one
        } else {
          // a candidate label was found, add the configured default class name
          label.addClass(this.config.label.className);
        }
      }

      return label;
    }; // Find bmd-label variant based on the config selectors


    _proto.findMdbLabel = function findMdbLabel(raiseError) {
      if (raiseError === void 0) {
        raiseError = true;
      }

      var label = null; // use the specified selector order

      for (var _iterator = this.config.label.selectors, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var _selector = _ref;

        if ($$$1.isFunction(_selector)) {
          label = _selector(this);
        } else {
          label = this.$bmdFormGroup.find(_selector);
        }

        if (label !== undefined && label.length > 0) {
          break;
        }
      }

      if (label.length === 0 && raiseError) {
        $$$1.error("Failed to find " + Selector.BMD_LABEL_WILDCARD + " within form-group for " + Util$2.describe(this.$element));
      }

      return label;
    }; // Find bmd-form-group


    _proto.findFormGroup = function findFormGroup(raiseError) {
      if (raiseError === void 0) {
        raiseError = true;
      }

      var fg = this.$element.closest(Selector.FORM_GROUP);

      if (fg.length === 0 && raiseError) {
        $$$1.error("Failed to find " + Selector.FORM_GROUP + " for " + Util$2.describe(this.$element));
      }

      return fg;
    }; // Due to the interconnected nature of labels/inputs/help-blocks, signal the bmd-form-group-* size variation based on
    //  a found form-control-* size


    _proto.resolveMdbFormGroupSizing = function resolveMdbFormGroupSizing() {
      if (!this.config.convertInputSizeVariations) {
        return;
      } // Modification - Change text-sm/lg to form-group-sm/lg instead (preferred standard and simpler css/less variants)


      for (var inputSize in FormControlSizeMarkers) {
        if (this.$element.hasClass(inputSize)) {
          //this.$element.removeClass(inputSize)
          this.$bmdFormGroup.addClass(FormControlSizeMarkers[inputSize]);
        }
      }
    }; // ------------------------------------------------------------------------
    // private


    _proto._rejectInvalidComponentMatches = function _rejectInvalidComponentMatches() {
      for (var _iterator2 = this.config.invalidComponentMatches, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray2) {
          if (_i2 >= _iterator2.length) break;
          _ref2 = _iterator2[_i2++];
        } else {
          _i2 = _iterator2.next();
          if (_i2.done) break;
          _ref2 = _i2.value;
        }

        var _otherComponent = _ref2;

        _otherComponent.rejectMatch(this.constructor.name, this.$element);
      }
    };

    _proto._rejectWithoutRequiredClasses = function _rejectWithoutRequiredClasses() {
      for (var _iterator3 = this.config.requiredClasses, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
        var _ref3;

        if (_isArray3) {
          if (_i3 >= _iterator3.length) break;
          _ref3 = _iterator3[_i3++];
        } else {
          _i3 = _iterator3.next();
          if (_i3.done) break;
          _ref3 = _i3.value;
        }

        var _requiredClass = _ref3;
        if (_requiredClass.indexOf("||") !== -1) {
          var oneOf = _requiredClass.split("||");

          for (var _iterator4 = oneOf, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
            var _ref4;

            if (_isArray4) {
              if (_i4 >= _iterator4.length) break;
              _ref4 = _iterator4[_i4++];
            } else {
              _i4 = _iterator4.next();
              if (_i4.done) break;
              _ref4 = _i4.value;
            }

            var _requiredClass3 = _ref4;

            if (this.$element.hasClass(_requiredClass3)) {
              break;
            }
          }
        } else if (this.$element.hasClass(_requiredClass)) {
          
        }
      }
    }; // ------------------------------------------------------------------------
    // static


    return BaseInput;
  }(Base);

  return BaseInput;
}(jQuery);

var BaseSelection = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var Default = {
    label: {
      required: false // Prioritized find order for resolving the label to be used as an bmd-label if not specified in the markup
      //  - a function(thisComponent); or
      //  - a string selector used like $bmdFormGroup.find(selector)
      //
      // Note this only runs if $bmdFormGroup.find(Selector.BMD_LABEL_WILDCARD) fails to find a label (as authored in the markup)
      //
      //selectors: [
      //  `.form-control-label`, // in the case of horizontal or inline forms, this will be marked
      //  `> label` // usual case for text inputs
      //]

    }
  };
  var Selector = {
    LABEL: "label"
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var BaseSelection =
  /*#__PURE__*/
  function (_BaseInput) {
    _inheritsLoose(BaseSelection, _BaseInput);

    function BaseSelection($element, config, properties) {
      var _this;

      // properties = {inputType: checkbox, outerClass: checkbox-inline}
      // '.checkbox|switch|radio > label > input[type=checkbox|radio]'
      // '.${this.outerClass} > label > input[type=${this.inputType}]'
      _this = _BaseInput.call(this, $element, $$$1.extend(true, {}, Default, config), properties) || this;

      _this.decorateMarkup();

      return _this;
    } // ------------------------------------------------------------------------
    // protected


    var _proto = BaseSelection.prototype;

    _proto.decorateMarkup = function decorateMarkup() {
      var $decorator = $$$1(this.config.template);
      this.$element.after($decorator); // initialize ripples after decorator has been inserted into DOM

      if (this.config.ripples !== false) {
        $decorator.bmdRipples();
      }
    }; // Demarcation element (e.g. first child of a form-group)


    _proto.outerElement = function outerElement() {
      // .checkbox|switch|radio > label > input[type=checkbox|radio]
      // label.checkbox-inline > input[type=checkbox|radio]
      // .${this.outerClass} > label > input[type=${this.inputType}]
      return this.$element.parent().closest("." + this.outerClass);
    };

    _proto.rejectWithoutRequiredStructure = function rejectWithoutRequiredStructure() {
      // '.checkbox|switch|radio > label > input[type=checkbox|radio]'
      // '.${this.outerClass} > label > input[type=${this.inputType}]'
      Util$2.assert(this.$element, !this.$element.parent().prop("tagName") === "label", this.constructor.name + "'s " + Util$2.describe(this.$element) + " parent element should be <label>.");
      Util$2.assert(this.$element, !this.outerElement().hasClass(this.outerClass), this.constructor.name + "'s " + Util$2.describe(this.$element) + " outer element should have class " + this.outerClass + ".");
    };

    _proto.addFocusListener = function addFocusListener() {
      var _this2 = this;

      // checkboxes didn't appear to bubble to the document, so we'll bind these directly
      this.$element.closest(Selector.LABEL).hover(function () {
        _this2.addFormGroupFocus();
      }, function () {
        _this2.removeFormGroupFocus();
      });
    };

    _proto.addChangeListener = function addChangeListener() {
      var _this3 = this;

      this.$element.change(function () {
        _this3.$element.blur();
      });
    }; // ------------------------------------------------------------------------
    // private


    return BaseSelection;
  }(BaseInput);

  return BaseSelection;
}(jQuery);

//import File from './file'
//import Radio from './radio'
//import Textarea from './textarea'
//import Select from './select'

var Checkbox = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = "checkbox";
  var DATA_KEY = "bmd." + NAME;
  var JQUERY_NAME = "bmd" + (NAME.charAt(0).toUpperCase() + NAME.slice(1));
  var JQUERY_NO_CONFLICT = $$$1.fn[JQUERY_NAME];
  var Default = {
    template: "<span class='checkbox-decorator'><span class='check'></span></span>"
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Checkbox =
  /*#__PURE__*/
  function (_BaseSelection) {
    _inheritsLoose(Checkbox, _BaseSelection);

    function Checkbox($element, config, properties) {
      if (properties === void 0) {
        properties = {
          inputType: NAME,
          outerClass: NAME
        };
      }

      return _BaseSelection.call(this, $element, $$$1.extend(true, //{invalidComponentMatches: [File, Radio, Text, Textarea, Select]},
      Default, config), properties) || this;
    }

    var _proto = Checkbox.prototype;

    _proto.dispose = function dispose(dataKey) {
      if (dataKey === void 0) {
        dataKey = DATA_KEY;
      }

      _BaseSelection.prototype.dispose.call(this, dataKey);
    };

    Checkbox.matches = function matches($element) {
      // '.checkbox > label > input[type=checkbox]'
      if ($element.attr("type") === "checkbox") {
        return true;
      }

      return false;
    };

    Checkbox.rejectMatch = function rejectMatch(component, $element) {
      Util$2.assert(this.$element, this.matches($element), component + " component element " + Util$2.describe($element) + " is invalid for type='checkbox'.");
    }; // ------------------------------------------------------------------------
    // protected
    // ------------------------------------------------------------------------
    // protected
    // ------------------------------------------------------------------------
    // private
    // ------------------------------------------------------------------------
    // static


    Checkbox._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $$$1(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Checkbox($element, config);
          $element.data(DATA_KEY, data);
        }
      });
    };

    return Checkbox;
  }(BaseSelection);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $$$1.fn[JQUERY_NAME] = Checkbox._jQueryInterface;
  $$$1.fn[JQUERY_NAME].Constructor = Checkbox;

  $$$1.fn[JQUERY_NAME].noConflict = function () {
    $$$1.fn[JQUERY_NAME] = JQUERY_NO_CONFLICT;
    return Checkbox._jQueryInterface;
  };

  return Checkbox;
}(jQuery);

var CheckboxInline = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = "checkboxInline";
  var DATA_KEY = "bmd." + NAME;
  var JQUERY_NAME = "bmd" + (NAME.charAt(0).toUpperCase() + NAME.slice(1));
  var JQUERY_NO_CONFLICT = $$$1.fn[JQUERY_NAME];
  var Default = {
    bmdFormGroup: {
      create: false,
      // no bmd-form-group creation if form-group not present. It messes with the layout.
      required: false
    }
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var CheckboxInline =
  /*#__PURE__*/
  function (_Checkbox) {
    _inheritsLoose(CheckboxInline, _Checkbox);

    function CheckboxInline($element, config, properties) {
      if (properties === void 0) {
        properties = {
          inputType: "checkbox",
          outerClass: "checkbox-inline"
        };
      }

      return _Checkbox.call(this, $element, $$$1.extend(true, {}, Default, config), properties) || this;
    }

    var _proto = CheckboxInline.prototype;

    _proto.dispose = function dispose() {
      _Checkbox.prototype.dispose.call(this, DATA_KEY);
    }; //static matches($element) {
    //  // '.checkbox-inline > input[type=checkbox]'
    //  if ($element.attr('type') === 'checkbox') {
    //    return true
    //  }
    //  return false
    //}
    //
    //static rejectMatch(component, $element) {
    //  Util.assert(this.$element, this.matches($element), `${component} component element ${Util.describe($element)} is invalid for type='checkbox'.`)
    //}
    // ------------------------------------------------------------------------
    // protected
    // ------------------------------------------------------------------------
    // protected
    // ------------------------------------------------------------------------
    // private
    // ------------------------------------------------------------------------
    // static


    CheckboxInline._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $$$1(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new CheckboxInline($element, config);
          $element.data(DATA_KEY, data);
        }
      });
    };

    return CheckboxInline;
  }(Checkbox);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $$$1.fn[JQUERY_NAME] = CheckboxInline._jQueryInterface;
  $$$1.fn[JQUERY_NAME].Constructor = CheckboxInline;

  $$$1.fn[JQUERY_NAME].noConflict = function () {
    $$$1.fn[JQUERY_NAME] = JQUERY_NO_CONFLICT;
    return CheckboxInline._jQueryInterface;
  };

  return CheckboxInline;
}(jQuery);

var CollapseInline = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = "collapseInline";
  var DATA_KEY = "bmd." + NAME;
  var JQUERY_NAME = "bmd" + (NAME.charAt(0).toUpperCase() + NAME.slice(1));
  var JQUERY_NO_CONFLICT = $$$1.fn[JQUERY_NAME];
  var Selector = {
    ANY_INPUT: "input, select, textarea"
  };
  var ClassName = {
    IN: "in",
    COLLAPSE: "collapse",
    COLLAPSING: "collapsing",
    COLLAPSED: "collapsed",
    WIDTH: "width"
  };
  var Default = {};
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var CollapseInline =
  /*#__PURE__*/
  function (_Base) {
    _inheritsLoose(CollapseInline, _Base);

    // $element is expected to be the trigger
    //  i.e. <button class="btn bmd-btn-icon" for="search" data-toggle="collapse" data-target="#search-field" aria-expanded="false" aria-controls="search-field">
    function CollapseInline($element, config) {
      var _this;

      _this = _Base.call(this, $element, $$$1.extend(true, {}, Default, config)) || this;
      _this.$bmdFormGroup = _this.findMdbFormGroup(true);
      var collapseSelector = $element.data("target");
      _this.$collapse = $$$1(collapseSelector);
      Util$2.assert($element, _this.$collapse.length === 0, "Cannot find collapse target for " + Util$2.describe($element));
      Util$2.assert(_this.$collapse, !_this.$collapse.hasClass(ClassName.COLLAPSE), Util$2.describe(_this.$collapse) + " is expected to have the '" + ClassName.COLLAPSE + "' class.  It is being targeted by " + Util$2.describe($element)); // find the first input for focusing

      var $inputs = _this.$bmdFormGroup.find(Selector.ANY_INPUT);

      if ($inputs.length > 0) {
        _this.$input = $inputs.first();
      } // automatically add the marker class to collapse width instead of height - nice convenience because it is easily forgotten


      if (!_this.$collapse.hasClass(ClassName.WIDTH)) {
        _this.$collapse.addClass(ClassName.WIDTH);
      }

      if (_this.$input) {
        // add a listener to set focus
        _this.$collapse.on("shown.bs.collapse", function () {
          _this.$input.focus();
        }); // add a listener to collapse field


        _this.$input.blur(function () {
          _this.$collapse.collapse("hide");
        });
      }

      return _this;
    }

    var _proto = CollapseInline.prototype;

    _proto.dispose = function dispose() {
      _Base.prototype.dispose.call(this, DATA_KEY);

      this.$bmdFormGroup = null;
      this.$collapse = null;
      this.$input = null;
    }; // ------------------------------------------------------------------------
    // private
    // ------------------------------------------------------------------------
    // static


    CollapseInline._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $$$1(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new CollapseInline($element, config);
          $element.data(DATA_KEY, data);
        }
      });
    };

    return CollapseInline;
  }(Base);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $$$1.fn[JQUERY_NAME] = CollapseInline._jQueryInterface;
  $$$1.fn[JQUERY_NAME].Constructor = CollapseInline;

  $$$1.fn[JQUERY_NAME].noConflict = function () {
    $$$1.fn[JQUERY_NAME] = JQUERY_NO_CONFLICT;
    return CollapseInline._jQueryInterface;
  };

  return CollapseInline;
}(jQuery);

//import Radio from './radio'
//import Switch from './switch'
//import Text from './text'
//import Textarea from './textarea'
//import Select from './select'

var File = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = "file";
  var DATA_KEY = "bmd." + NAME;
  var JQUERY_NAME = "bmd" + (NAME.charAt(0).toUpperCase() + NAME.slice(1));
  var JQUERY_NO_CONFLICT = $$$1.fn[JQUERY_NAME];
  var Default = {};
  var ClassName = {
    FILE: NAME,
    IS_FILE: "is-file"
  };
  var Selector = {
    FILENAMES: "input.form-control[readonly]"
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var File =
  /*#__PURE__*/
  function (_BaseInput) {
    _inheritsLoose(File, _BaseInput);

    function File($element, config) {
      var _this;

      _this = _BaseInput.call(this, $element, $$$1.extend(true, //{invalidComponentMatches: [Checkbox, Radio, Text, Textarea, Select, Switch]},
      Default, config)) || this;

      _this.$bmdFormGroup.addClass(ClassName.IS_FILE);

      return _this;
    }

    var _proto = File.prototype;

    _proto.dispose = function dispose() {
      _BaseInput.prototype.dispose.call(this, DATA_KEY);
    };

    File.matches = function matches($element) {
      if ($element.attr("type") === "file") {
        return true;
      }

      return false;
    };

    File.rejectMatch = function rejectMatch(component, $element) {
      Util$2.assert(this.$element, this.matches($element), component + " component element " + Util$2.describe($element) + " is invalid for type='file'.");
    }; // ------------------------------------------------------------------------
    // protected
    // Demarcation element (e.g. first child of a form-group)


    _proto.outerElement = function outerElement() {
      // label.file > input[type=file]
      return this.$element.parent().closest("." + ClassName.FILE);
    };

    _proto.rejectWithoutRequiredStructure = function rejectWithoutRequiredStructure() {
      // label.file > input[type=file]
      Util$2.assert(this.$element, !this.outerElement().prop("tagName") === "label", this.constructor.name + "'s " + Util$2.describe(this.$element) + " parent element " + Util$2.describe(this.outerElement()) + " should be <label>.");
      Util$2.assert(this.$element, !this.outerElement().hasClass(ClassName.FILE), this.constructor.name + "'s " + Util$2.describe(this.$element) + " parent element " + Util$2.describe(this.outerElement()) + " should have class ." + ClassName.FILE + ".");
    };

    _proto.addFocusListener = function addFocusListener() {
      var _this2 = this;

      this.$bmdFormGroup.on("focus", function () {
        _this2.addFormGroupFocus();
      }).on("blur", function () {
        _this2.removeFormGroupFocus();
      });
    };

    _proto.addChangeListener = function addChangeListener() {
      var _this3 = this;

      // set the fileinput readonly field with the name of the file
      this.$element.on("change", function () {
        var value = "";
        $$$1.each(_this3.$element.files, function (i, file) {
          value += file.name + "  , ";
        });
        value = value.substring(0, value.length - 2);

        if (value) {
          _this3.addIsFilled();
        } else {
          _this3.removeIsFilled();
        }

        _this3.$bmdFormGroup.find(Selector.FILENAMES).val(value);
      });
    }; // ------------------------------------------------------------------------
    // private
    // ------------------------------------------------------------------------
    // static


    File._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $$$1(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new File($element, config);
          $element.data(DATA_KEY, data);
        }
      });
    };

    return File;
  }(BaseInput);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $$$1.fn[JQUERY_NAME] = File._jQueryInterface;
  $$$1.fn[JQUERY_NAME].Constructor = File;

  $$$1.fn[JQUERY_NAME].noConflict = function () {
    $$$1.fn[JQUERY_NAME] = JQUERY_NO_CONFLICT;
    return File._jQueryInterface;
  };

  return File;
}(jQuery);

//import File from './file'
//import Checkbox from './checkbox'
//import Switch from './switch'

var Radio = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = "radio";
  var DATA_KEY = "bmd." + NAME;
  var JQUERY_NAME = "bmd" + (NAME.charAt(0).toUpperCase() + NAME.slice(1));
  var JQUERY_NO_CONFLICT = $$$1.fn[JQUERY_NAME];
  var Default = {
    template: "<span class='bmd-radio'></span>"
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Radio =
  /*#__PURE__*/
  function (_BaseSelection) {
    _inheritsLoose(Radio, _BaseSelection);

    function Radio($element, config, properties) {
      if (properties === void 0) {
        properties = {
          inputType: NAME,
          outerClass: NAME
        };
      }

      return _BaseSelection.call(this, $element, $$$1.extend(true, //{invalidComponentMatches: [Checkbox, File, Switch, Text]},
      Default, config), properties) || this;
    }

    var _proto = Radio.prototype;

    _proto.dispose = function dispose(dataKey) {
      if (dataKey === void 0) {
        dataKey = DATA_KEY;
      }

      _BaseSelection.prototype.dispose.call(this, dataKey);
    };

    Radio.matches = function matches($element) {
      // '.radio > label > input[type=radio]'
      if ($element.attr("type") === "radio") {
        return true;
      }

      return false;
    };

    Radio.rejectMatch = function rejectMatch(component, $element) {
      Util$2.assert(this.$element, this.matches($element), component + " component element " + Util$2.describe($element) + " is invalid for type='radio'.");
    }; // ------------------------------------------------------------------------
    // protected
    //decorateMarkup() {
    //  this.$element.after(this.config.template)
    //}
    // ------------------------------------------------------------------------
    // private
    // ------------------------------------------------------------------------
    // static


    Radio._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $$$1(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Radio($element, config);
          $element.data(DATA_KEY, data);
        }
      });
    };

    return Radio;
  }(BaseSelection);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $$$1.fn[JQUERY_NAME] = Radio._jQueryInterface;
  $$$1.fn[JQUERY_NAME].Constructor = Radio;

  $$$1.fn[JQUERY_NAME].noConflict = function () {
    $$$1.fn[JQUERY_NAME] = JQUERY_NO_CONFLICT;
    return Radio._jQueryInterface;
  };

  return Radio;
}(jQuery);

var RadioInline = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = "radioInline";
  var DATA_KEY = "bmd." + NAME;
  var JQUERY_NAME = "bmd" + (NAME.charAt(0).toUpperCase() + NAME.slice(1));
  var JQUERY_NO_CONFLICT = $$$1.fn[JQUERY_NAME];
  var Default = {
    bmdFormGroup: {
      create: false,
      // no bmd-form-group creation if form-group not present. It messes with the layout.
      required: false
    }
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var RadioInline =
  /*#__PURE__*/
  function (_Radio) {
    _inheritsLoose(RadioInline, _Radio);

    function RadioInline($element, config, properties) {
      if (properties === void 0) {
        properties = {
          inputType: "radio",
          outerClass: "radio-inline"
        };
      }

      return _Radio.call(this, $element, $$$1.extend(true, {}, Default, config), properties) || this;
    }

    var _proto = RadioInline.prototype;

    _proto.dispose = function dispose() {
      _Radio.prototype.dispose.call(this, DATA_KEY);
    }; // ------------------------------------------------------------------------
    // protected
    // ------------------------------------------------------------------------
    // protected
    // ------------------------------------------------------------------------
    // private
    // ------------------------------------------------------------------------
    // static


    RadioInline._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $$$1(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new RadioInline($element, config);
          $element.data(DATA_KEY, data);
        }
      });
    };

    return RadioInline;
  }(Radio);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $$$1.fn[JQUERY_NAME] = RadioInline._jQueryInterface;
  $$$1.fn[JQUERY_NAME].Constructor = RadioInline;

  $$$1.fn[JQUERY_NAME].noConflict = function () {
    $$$1.fn[JQUERY_NAME] = JQUERY_NO_CONFLICT;
    return RadioInline._jQueryInterface;
  };

  return RadioInline;
}(jQuery);

var BaseFormControl = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var Default = {
    requiredClasses: ["form-control"]
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var BaseFormControl =
  /*#__PURE__*/
  function (_BaseInput) {
    _inheritsLoose(BaseFormControl, _BaseInput);

    function BaseFormControl($element, config) {
      var _this;

      _this = _BaseInput.call(this, $element, $$$1.extend(true, Default, config)) || this; // Initially mark as empty

      if (_this.isEmpty()) {
        _this.removeIsFilled();
      }

      return _this;
    }

    return BaseFormControl;
  }(BaseInput);

  return BaseFormControl;
}(jQuery);

//import File from './file'
//import Radio from './radio'
//import Switch from './switch'
//import Text from './text'
//import Textarea from './textarea'

var Select = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = "select";
  var DATA_KEY = "bmd." + NAME;
  var JQUERY_NAME = "bmd" + (NAME.charAt(0).toUpperCase() + NAME.slice(1));
  var JQUERY_NO_CONFLICT = $$$1.fn[JQUERY_NAME];
  var Default = {
    requiredClasses: ["form-control||custom-select"]
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Select =
  /*#__PURE__*/
  function (_BaseFormControl) {
    _inheritsLoose(Select, _BaseFormControl);

    function Select($element, config) {
      var _this;

      _this = _BaseFormControl.call(this, $element, $$$1.extend(true, //{invalidComponentMatches: [Checkbox, File, Radio, Switch, Text, Textarea]},
      Default, config)) || this; // floating labels will cover the options, so trigger them to be above (if used)

      _this.addIsFilled();

      return _this;
    }

    var _proto = Select.prototype;

    _proto.dispose = function dispose() {
      _BaseFormControl.prototype.dispose.call(this, DATA_KEY);
    };

    Select.matches = function matches($element) {
      if ($element.prop("tagName") === "select") {
        return true;
      }

      return false;
    };

    Select.rejectMatch = function rejectMatch(component, $element) {
      Util$2.assert(this.$element, this.matches($element), component + " component element " + Util$2.describe($element) + " is invalid for <select>.");
    }; // ------------------------------------------------------------------------
    // protected
    // ------------------------------------------------------------------------
    // private
    // ------------------------------------------------------------------------
    // static


    Select._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $$$1(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Select($element, config);
          $element.data(DATA_KEY, data);
        }
      });
    };

    return Select;
  }(BaseFormControl);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $$$1.fn[JQUERY_NAME] = Select._jQueryInterface;
  $$$1.fn[JQUERY_NAME].Constructor = Select;

  $$$1.fn[JQUERY_NAME].noConflict = function () {
    $$$1.fn[JQUERY_NAME] = JQUERY_NO_CONFLICT;
    return Select._jQueryInterface;
  };

  return Select;
}(jQuery);

var Switch = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = "switch";
  var DATA_KEY = "bmd." + NAME;
  var JQUERY_NAME = "bmd" + (NAME.charAt(0).toUpperCase() + NAME.slice(1));
  var JQUERY_NO_CONFLICT = $$$1.fn[JQUERY_NAME];
  var Default = {
    template: "<span class='bmd-switch-track'></span>"
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Switch =
  /*#__PURE__*/
  function (_Checkbox) {
    _inheritsLoose(Switch, _Checkbox);

    function Switch($element, config, properties) {
      if (properties === void 0) {
        properties = {
          inputType: "checkbox",
          outerClass: "switch"
        };
      }

      return _Checkbox.call(this, $element, $$$1.extend(true, {}, Default, config), properties) || this; // selector: '.switch > label > input[type=checkbox]'
    }

    var _proto = Switch.prototype;

    _proto.dispose = function dispose() {
      _Checkbox.prototype.dispose.call(this, DATA_KEY);
    }; // ------------------------------------------------------------------------
    // protected
    // ------------------------------------------------------------------------
    // private
    // ------------------------------------------------------------------------
    // static


    Switch._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $$$1(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Switch($element, config);
          $element.data(DATA_KEY, data);
        }
      });
    };

    return Switch;
  }(Checkbox);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $$$1.fn[JQUERY_NAME] = Switch._jQueryInterface;
  $$$1.fn[JQUERY_NAME].Constructor = Switch;

  $$$1.fn[JQUERY_NAME].noConflict = function () {
    $$$1.fn[JQUERY_NAME] = JQUERY_NO_CONFLICT;
    return Switch._jQueryInterface;
  };

  return Switch;
}(jQuery);

//import File from './file'
//import Radio from './radio'
//import Switch from './switch'
//import Textarea from './textarea'
//import Select from './select'

var Text = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = "text";
  var DATA_KEY = "bmd." + NAME;
  var JQUERY_NAME = "bmd" + (NAME.charAt(0).toUpperCase() + NAME.slice(1));
  var JQUERY_NO_CONFLICT = $$$1.fn[JQUERY_NAME];
  var Default = {};
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Text =
  /*#__PURE__*/
  function (_BaseFormControl) {
    _inheritsLoose(Text, _BaseFormControl);

    function Text($element, config) {
      return _BaseFormControl.call(this, $element, $$$1.extend(true, //{invalidComponentMatches: [Checkbox, File, Radio, Switch, Select, Textarea]},
      Default, config)) || this;
    }

    var _proto = Text.prototype;

    _proto.dispose = function dispose(dataKey) {
      if (dataKey === void 0) {
        dataKey = DATA_KEY;
      }

      _BaseFormControl.prototype.dispose.call(this, dataKey);
    };

    Text.matches = function matches($element) {
      if ($element.attr("type") === "text") {
        return true;
      }

      return false;
    };

    Text.rejectMatch = function rejectMatch(component, $element) {
      Util$2.assert(this.$element, this.matches($element), component + " component element " + Util$2.describe($element) + " is invalid for type='text'.");
    }; // ------------------------------------------------------------------------
    // protected
    // ------------------------------------------------------------------------
    // private
    // ------------------------------------------------------------------------
    // static


    Text._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $$$1(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Text($element, config);
          $element.data(DATA_KEY, data);
        }
      });
    };

    return Text;
  }(BaseFormControl);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $$$1.fn[JQUERY_NAME] = Text._jQueryInterface;
  $$$1.fn[JQUERY_NAME].Constructor = Text;

  $$$1.fn[JQUERY_NAME].noConflict = function () {
    $$$1.fn[JQUERY_NAME] = JQUERY_NO_CONFLICT;
    return Text._jQueryInterface;
  };

  return Text;
}(jQuery);

//import File from './file'
//import Radio from './radio'
//import Switch from './switch'
//import Text from './text'
//import Select from './select'

var Textarea = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = "textarea";
  var DATA_KEY = "bmd." + NAME;
  var JQUERY_NAME = "bmd" + (NAME.charAt(0).toUpperCase() + NAME.slice(1));
  var JQUERY_NO_CONFLICT = $$$1.fn[JQUERY_NAME];
  var Default = {};
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Textarea =
  /*#__PURE__*/
  function (_BaseFormControl) {
    _inheritsLoose(Textarea, _BaseFormControl);

    function Textarea($element, config) {
      return _BaseFormControl.call(this, $element, $$$1.extend(true, //{invalidComponentMatches: [Checkbox, File, Radio, Text, Select, Switch]},
      Default, config)) || this;
    }

    var _proto = Textarea.prototype;

    _proto.dispose = function dispose() {
      _BaseFormControl.prototype.dispose.call(this, DATA_KEY);
    };

    Textarea.matches = function matches($element) {
      if ($element.prop("tagName") === "textarea") {
        return true;
      }

      return false;
    };

    Textarea.rejectMatch = function rejectMatch(component, $element) {
      Util$2.assert(this.$element, this.matches($element), component + " component element " + Util$2.describe($element) + " is invalid for <textarea>.");
    }; // ------------------------------------------------------------------------
    // protected
    // ------------------------------------------------------------------------
    // private
    // ------------------------------------------------------------------------
    // static


    Textarea._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $$$1(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Textarea($element, config);
          $element.data(DATA_KEY, data);
        }
      });
    };

    return Textarea;
  }(BaseFormControl);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $$$1.fn[JQUERY_NAME] = Textarea._jQueryInterface;
  $$$1.fn[JQUERY_NAME].Constructor = Textarea;

  $$$1.fn[JQUERY_NAME].noConflict = function () {
    $$$1.fn[JQUERY_NAME] = JQUERY_NO_CONFLICT;
    return Textarea._jQueryInterface;
  };

  return Textarea;
}(jQuery);

/* global Popper */

/**
 * This is a copy of the Bootstrap's original dropdown.js, with the only addition
 * of two new classes: 'showing' and 'hiding', used to handle animaitons.
 */
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.1.0): dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Dropdown = function ($$$1) {
  /**
   * Check for Popper dependency
   * Popper - https://popper.js.org
   */
  if (typeof Popper === 'undefined') {
    throw new Error('Bootstrap dropdown require Popper.js (https://popper.js.org)');
  }
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME = 'dropdown';
  var VERSION = '4.1.0';
  var DATA_KEY = 'bs.dropdown';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

  var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

  var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
  var Event = {
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    CLICK: "click" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
    KEYDOWN_DATA_API: "keydown" + EVENT_KEY + DATA_API_KEY,
    KEYUP_DATA_API: "keyup" + EVENT_KEY + DATA_API_KEY,
    TRANSITION_END: 'transitionend webkitTransitionEnd oTransitionEnd animationend webkitAnimationEnd oAnimationEnd'
  };
  var ClassName = {
    DISABLED: 'disabled',
    SHOW: 'show',
    SHOWING: 'showing',
    HIDING: 'hiding',
    DROPUP: 'dropup',
    MENURIGHT: 'dropdown-menu-right',
    MENULEFT: 'dropdown-menu-left'
  };
  var Selector = {
    DATA_TOGGLE: '[data-toggle="dropdown"]',
    FORM_CHILD: '.dropdown form',
    MENU: '.dropdown-menu',
    NAVBAR_NAV: '.navbar-nav',
    VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled)'
  };
  var AttachmentMap = {
    TOP: 'top-start',
    TOPEND: 'top-end',
    BOTTOM: 'bottom-start',
    BOTTOMEND: 'bottom-end'
  };
  var Default = {
    placement: AttachmentMap.BOTTOM,
    offset: 0,
    flip: true
  };
  var DefaultType = {
    placement: 'string',
    offset: '(number|string)',
    flip: 'boolean'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Dropdown =
  /*#__PURE__*/
  function () {
    function Dropdown(element, config) {
      this._element = element;
      this._popper = null;
      this._config = this._getConfig(config);
      this._menu = this._getMenuElement();
      this._inNavbar = this._detectNavbar();

      this._addEventListeners();
    } // getters


    var _proto = Dropdown.prototype;

    // public
    _proto.toggle = function toggle() {
      var _this = this;

      if (this._element.disabled || $$$1(this._element).hasClass(ClassName.DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this._element);

      var isActive = $$$1(this._menu).hasClass(ClassName.SHOW);

      Dropdown._clearMenus();

      if (isActive) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = $$$1.Event(Event.SHOW, relatedTarget);
      $$$1(parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      }

      var element = this._element; // for dropup with alignment we use the parent as popper container

      if ($$$1(parent).hasClass(ClassName.DROPUP)) {
        if ($$$1(this._menu).hasClass(ClassName.MENULEFT) || $$$1(this._menu).hasClass(ClassName.MENURIGHT)) {
          element = parent;
        }
      }

      this._popper = new Popper(element, this._menu, this._getPopperConfig()); // if this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

      if ('ontouchstart' in document.documentElement && !$$$1(parent).closest(Selector.NAVBAR_NAV).length) {
        $$$1('body').children().on('mouseover', null, $$$1.noop);
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      $$$1(this._menu).one(Event.TRANSITION_END, function () {
        $$$1(parent).trigger($$$1.Event(Event.SHOWN, relatedTarget));
        $$$1(_this._menu).removeClass(ClassName.SHOWING);
      });
      $$$1(this._menu).addClass(ClassName.SHOW + " " + ClassName.SHOWING);
      $$$1(parent).addClass(ClassName.SHOW);
    };

    _proto.dispose = function dispose() {
      $$$1.removeData(this._element, DATA_KEY);
      $$$1(this._element).off(EVENT_KEY);
      this._element = null;
      this._menu = null;

      if (this._popper !== null) {
        this._popper.destroy();
      }

      this._popper = null;
    };

    _proto.update = function update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    }; // private


    _proto._addEventListeners = function _addEventListeners() {
      var _this2 = this;

      $$$1(this._element).on(Event.CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();

        _this2.toggle();
      });
    };

    _proto._getConfig = function _getConfig(config) {
      var elementData = $$$1(this._element).data();

      if (elementData.placement !== undefined) {
        elementData.placement = AttachmentMap[elementData.placement.toUpperCase()];
      }

      config = $$$1.extend({}, this.constructor.Default, $$$1(this._element).data(), config);
      Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
      return config;
    };

    _proto._getMenuElement = function _getMenuElement() {
      if (!this._menu) {
        var parent = Dropdown._getParentFromElement(this._element);

        this._menu = $$$1(parent).find(Selector.MENU)[0];
      }

      return this._menu;
    };

    _proto._getPlacement = function _getPlacement() {
      var $parentDropdown = $$$1(this._element).parent();
      var placement = this._config.placement; // Handle dropup

      if ($parentDropdown.hasClass(ClassName.DROPUP) || this._config.placement === AttachmentMap.TOP) {
        placement = AttachmentMap.TOP;

        if ($$$1(this._menu).hasClass(ClassName.MENURIGHT)) {
          placement = AttachmentMap.TOPEND;
        }
      } else if ($$$1(this._menu).hasClass(ClassName.MENURIGHT)) {
        placement = AttachmentMap.BOTTOMEND;
      }

      return placement;
    };

    _proto._detectNavbar = function _detectNavbar() {
      return $$$1(this._element).closest('.navbar').length > 0;
    };

    _proto._getPopperConfig = function _getPopperConfig() {
      var popperConfig = {
        placement: this._getPlacement(),
        modifiers: {
          offset: {
            offset: this._config.offset
          },
          flip: {
            enabled: this._config.flip
          }
        } // Disable Popper.js for Dropdown in Navbar

      };

      if (this._inNavbar) {
        popperConfig.modifiers.applyStyle = {
          enabled: !this._inNavbar
        };
      }

      return popperConfig;
    }; // static


    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $$$1(this).data(DATA_KEY);

        var _config = typeof config === 'object' ? config : null;

        if (!data) {
          data = new Dropdown(this, _config);
          $$$1(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    Dropdown._clearMenus = function _clearMenus(event) {
      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
        return;
      }

      var toggles = $$$1.makeArray($$$1(Selector.DATA_TOGGLE));

      var _loop = function _loop(i) {
        var parent = Dropdown._getParentFromElement(toggles[i]);

        var context = $$$1(toggles[i]).data(DATA_KEY);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (!context) {
          return "continue";
        }

        var dropdownMenu = context._menu;

        if (!$$$1(parent).hasClass(ClassName.SHOW)) {
          return "continue";
        }

        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $$$1.contains(parent, event.target)) {
          return "continue";
        }

        var hideEvent = $$$1.Event(Event.HIDE, relatedTarget);
        $$$1(parent).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          return "continue";
        } // if this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        if ('ontouchstart' in document.documentElement) {
          $$$1('body').children().off('mouseover', null, $$$1.noop);
        }

        toggles[i].setAttribute('aria-expanded', 'false');
        $$$1(dropdownMenu).addClass(ClassName.HIDING).removeClass(ClassName.SHOW);
        $$$1(parent).removeClass(ClassName.SHOW);
        $$$1(dropdownMenu).one(Event.TRANSITION_END, function () {
          $$$1(parent).trigger($$$1.Event(Event.HIDDEN, relatedTarget));
          $$$1(dropdownMenu).removeClass(ClassName.HIDING);
        });
      };

      for (var i = 0; i < toggles.length; i++) {
        var _ret = _loop(i);

        if (_ret === "continue") continue;
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      var parent;
      var selector = Util.getSelectorFromElement(element);

      if (selector) {
        parent = $$$1(selector)[0];
      }

      return parent || element.parentNode;
    };

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      if (!REGEXP_KEYDOWN.test(event.which) || /button/i.test(event.target.tagName) && event.which === SPACE_KEYCODE || /input|textarea/i.test(event.target.tagName)) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (this.disabled || $$$1(this).hasClass(ClassName.DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this);

      var isActive = $$$1(parent).hasClass(ClassName.SHOW);

      if (!isActive && (event.which !== ESCAPE_KEYCODE || event.which !== SPACE_KEYCODE) || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {
        if (event.which === ESCAPE_KEYCODE) {
          var toggle = $$$1(parent).find(Selector.DATA_TOGGLE)[0];
          $$$1(toggle).trigger('focus');
        }

        $$$1(this).trigger('click');
        return;
      }

      var items = $$$1(parent).find(Selector.VISIBLE_ITEMS).get();

      if (!items.length) {
        return;
      }

      var index = items.indexOf(event.target);

      if (event.which === ARROW_UP_KEYCODE && index > 0) {
        // up
        index--;
      }

      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
        // down
        index++;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    };

    _createClass(Dropdown, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType;
      }
    }]);
    return Dropdown;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $$$1(document).on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.MENU, Dropdown._dataApiKeydownHandler).on(Event.CLICK_DATA_API + " " + Event.KEYUP_DATA_API, Dropdown._clearMenus).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    event.preventDefault();
    event.stopPropagation();

    Dropdown._jQueryInterface.call($$$1(this), 'toggle');
  }).on(Event.CLICK_DATA_API, Selector.FORM_CHILD, function (e) {
    e.stopPropagation();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $$$1.fn[NAME] = Dropdown._jQueryInterface;
  $$$1.fn[NAME].Constructor = Dropdown;

  $$$1.fn[NAME].noConflict = function () {
    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
    return Dropdown._jQueryInterface;
  };

  return Dropdown;
}(jQuery);

var BaseLayout = function ($$$1) {
  var ClassName = {
    CANVAS: "bmd-layout-canvas",
    CONTAINER: "bmd-layout-container",
    BACKDROP: "bmd-layout-backdrop"
  };
  var Selector = {
    CANVAS: "." + ClassName.CANVAS,
    CONTAINER: "." + ClassName.CONTAINER,
    BACKDROP: "." + ClassName.BACKDROP
  };
  var Default = {
    canvas: {
      create: true,
      required: true,
      template: "<div class=\"" + ClassName.CANVAS + "\"></div>"
    },
    backdrop: {
      create: true,
      required: true,
      template: "<div class=\"" + ClassName.BACKDROP + "\"></div>"
    }
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var BaseLayout =
  /*#__PURE__*/
  function (_Base) {
    _inheritsLoose(BaseLayout, _Base);

    function BaseLayout($element, config, properties) {
      var _this;

      if (properties === void 0) {
        properties = {};
      }

      _this = _Base.call(this, $element, $$$1.extend(true, {}, Default, config), properties) || this;
      _this.$container = _this.findContainer(true);
      _this.$backdrop = _this.resolveBackdrop();

      _this.resolveCanvas();

      return _this;
    }

    var _proto = BaseLayout.prototype;

    _proto.dispose = function dispose(dataKey) {
      _Base.prototype.dispose.call(this, dataKey);

      this.$container = null;
      this.$backdrop = null;
    }; // ------------------------------------------------------------------------
    // protected
    // Will wrap container in bmd-layout-canvas if necessary


    _proto.resolveCanvas = function resolveCanvas() {
      var bd = this.findCanvas(false);

      if (bd === undefined || bd.length === 0) {
        if (this.config.canvas.create) {
          this.$container.wrap(this.config.canvas.template);
        }

        bd = this.findCanvas(this.config.canvas.required);
      }

      return bd;
    }; // Find closest bmd-layout-container based on the given context


    _proto.findCanvas = function findCanvas(raiseError, context) {
      if (raiseError === void 0) {
        raiseError = true;
      }

      if (context === void 0) {
        context = this.$container;
      }

      var canvas = context.closest(Selector.CANVAS);

      if (canvas.length === 0 && raiseError) {
        $$$1.error("Failed to find " + Selector.CANVAS + " for " + Util$2.describe(context));
      }

      return canvas;
    }; // Will add bmd-layout-backdrop to bmd-layout-container if necessary


    _proto.resolveBackdrop = function resolveBackdrop() {
      var bd = this.findBackdrop(false);

      if (bd === undefined || bd.length === 0) {
        if (this.config.backdrop.create) {
          this.$container.append(this.config.backdrop.template);
        }

        bd = this.findBackdrop(this.config.backdrop.required);
      }

      return bd;
    }; // Find closest bmd-layout-container based on the given context


    _proto.findBackdrop = function findBackdrop(raiseError, context) {
      if (raiseError === void 0) {
        raiseError = true;
      }

      if (context === void 0) {
        context = this.$container;
      }

      var backdrop = context.find("> " + Selector.BACKDROP);

      if (backdrop.length === 0 && raiseError) {
        $$$1.error("Failed to find " + Selector.BACKDROP + " for " + Util$2.describe(context));
      }

      return backdrop;
    }; // Find closest bmd-layout-container based on the given context


    _proto.findContainer = function findContainer(raiseError, context) {
      if (raiseError === void 0) {
        raiseError = true;
      }

      if (context === void 0) {
        context = this.$element;
      }

      var container = context.closest(Selector.CONTAINER);

      if (container.length === 0 && raiseError) {
        $$$1.error("Failed to find " + Selector.CONTAINER + " for " + Util$2.describe(context));
      }

      return container;
    }; // ------------------------------------------------------------------------
    // private
    // ------------------------------------------------------------------------
    // static


    return BaseLayout;
  }(Base);

  return BaseLayout;
}(jQuery);

var Drawer = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = "drawer";
  var DATA_KEY = "bmd." + NAME;
  var JQUERY_NAME = "bmd" + (NAME.charAt(0).toUpperCase() + NAME.slice(1));
  var JQUERY_NO_CONFLICT = $$$1.fn[JQUERY_NAME];
  var Keycodes = {
    ESCAPE: 27 //ENTER: 13,
    //SPACE: 32

  };
  var ClassName = {
    IN: "in",
    DRAWER_IN: "bmd-drawer-in",
    DRAWER_OUT: "bmd-drawer-out",
    DRAWER: "bmd-layout-drawer",
    CONTAINER: "bmd-layout-container"
  };
  var Default = {
    focusSelector: "a, button, input"
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Drawer =
  /*#__PURE__*/
  function (_BaseLayout) {
    _inheritsLoose(Drawer, _BaseLayout);

    // $element is expected to be the trigger
    //  i.e. <button class="btn bmd-btn-icon" for="search" data-toggle="drawer" data-target="#my-side-nav-drawer" aria-expanded="false" aria-controls="my-side-nav-drawer">
    function Drawer($element, config) {
      var _this;

      _this = _BaseLayout.call(this, $element, $$$1.extend(true, {}, Default, config)) || this;
      _this.$toggles = $$$1("[data-toggle=\"drawer\"][href=\"#" + _this.$element[0].id + "\"], [data-toggle=\"drawer\"][data-target=\"#" + _this.$element[0].id + "\"]");

      _this._addAria(); // click or escape on the backdrop closes the drawer


      _this.$backdrop.keydown(function (ev) {
        if (ev.which === Keycodes.ESCAPE) {
          _this.hide();
        }
      }).click(function () {
        _this.hide();
      }); // escape on the drawer closes it


      _this.$element.keydown(function (ev) {
        if (ev.which === Keycodes.ESCAPE) {
          _this.hide();
        }
      }); // any toggle button clicks


      _this.$toggles.click(function () {
        _this.toggle();
      });

      return _this;
    }

    var _proto = Drawer.prototype;

    _proto.dispose = function dispose() {
      _BaseLayout.prototype.dispose.call(this, DATA_KEY);

      this.$toggles = null;
    };

    _proto.toggle = function toggle() {
      if (this._isOpen()) {
        this.hide();
      } else {
        this.show();
      }
    };

    _proto.show = function show() {
      if (this._isForcedClosed() || this._isOpen()) {
        return;
      }

      this.$toggles.attr("aria-expanded", true);
      this.$element.attr("aria-expanded", true);
      this.$element.attr("aria-hidden", false); // focus on the first focusable item

      var $focusOn = this.$element.find(this.config.focusSelector);

      if ($focusOn.length > 0) {
        $focusOn.first().focus();
      }

      this.$container.addClass(ClassName.DRAWER_IN); // backdrop is responsively styled based on bmd-drawer-overlay, therefore style is none of our concern, simply add the marker class and let the scss determine if it should be displayed or not.

      this.$backdrop.addClass(ClassName.IN);
    };

    _proto.hide = function hide() {
      if (!this._isOpen()) {
        return;
      }

      this.$toggles.attr("aria-expanded", false);
      this.$element.attr("aria-expanded", false);
      this.$element.attr("aria-hidden", true);
      this.$container.removeClass(ClassName.DRAWER_IN);
      this.$backdrop.removeClass(ClassName.IN);
    }; // ------------------------------------------------------------------------
    // private


    _proto._isOpen = function _isOpen() {
      return this.$container.hasClass(ClassName.DRAWER_IN);
    };

    _proto._isForcedClosed = function _isForcedClosed() {
      return this.$container.hasClass(ClassName.DRAWER_OUT);
    };

    _proto._addAria = function _addAria() {
      var isOpen = this._isOpen();

      this.$element.attr("aria-expanded", isOpen);
      this.$element.attr("aria-hidden", isOpen);

      if (this.$toggles.length) {
        this.$toggles.attr("aria-expanded", isOpen);
      }
    }; // ------------------------------------------------------------------------
    // static


    Drawer._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $$$1(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Drawer($element, config);
          $element.data(DATA_KEY, data);
        }
      });
    };

    return Drawer;
  }(BaseLayout);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $$$1.fn[JQUERY_NAME] = Drawer._jQueryInterface;
  $$$1.fn[JQUERY_NAME].Constructor = Drawer;

  $$$1.fn[JQUERY_NAME].noConflict = function () {
    $$$1.fn[JQUERY_NAME] = JQUERY_NO_CONFLICT;
    return Drawer._jQueryInterface;
  };

  return Drawer;
}(jQuery);

var Ripples = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = "ripples";
  var DATA_KEY = "bmd." + NAME;
  var JQUERY_NAME = "bmd" + (NAME.charAt(0).toUpperCase() + NAME.slice(1));
  var JQUERY_NO_CONFLICT = $$$1.fn[JQUERY_NAME];
  var ClassName = {
    CONTAINER: "ripple-container",
    DECORATOR: "ripple-decorator"
  };
  var Selector = {
    CONTAINER: "." + ClassName.CONTAINER,
    DECORATOR: "." + ClassName.DECORATOR //,

  };
  var Default = {
    container: {
      template: "<div class='" + ClassName.CONTAINER + "'></div>"
    },
    decorator: {
      template: "<div class='" + ClassName.DECORATOR + "'></div>"
    },
    trigger: {
      start: "mousedown touchstart",
      end: "mouseup mouseleave touchend"
    },
    touchUserAgentRegex: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i,
    duration: 500
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Ripples =
  /*#__PURE__*/
  function () {
    function Ripples($element, config) {
      var _this = this;

      this.$element = $element; // console.log(`Adding ripples to ${Util.describe(this.$element)}`)  // eslint-disable-line no-console

      this.config = $$$1.extend(true, {}, Default, config); // attach initial listener

      this.$element.on(this.config.trigger.start, function (event) {
        _this._onStartRipple(event);
      });
    }

    var _proto = Ripples.prototype;

    _proto.dispose = function dispose() {
      this.$element.data(DATA_KEY, null);
      this.$element = null;
      this.$container = null;
      this.$decorator = null;
      this.config = null;
    }; // ------------------------------------------------------------------------
    // private


    _proto._onStartRipple = function _onStartRipple(event) {
      var _this2 = this;

      // Verify if the user is just touching on a device and return if so
      if (this._isTouch() && event.type === "mousedown") {
        return;
      } // Find or create the ripple container element


      this._findOrCreateContainer(); // Get relY and relX positions of the container element


      var relY = this._getRelY(event);

      var relX = this._getRelX(event); // If relY and/or relX are false, return the event


      if (!relY && !relX) {
        return;
      } // set the location and color each time (even if element is cached)


      this.$decorator.css({
        left: relX,
        top: relY,
        "background-color": this._getRipplesColor()
      }); // Make sure the ripple has the styles applied (ugly hack but it works)

      this._forceStyleApplication(); // Turn on the ripple animation


      this.rippleOn(); // Call the rippleEnd function when the transition 'on' ends

      setTimeout(function () {
        _this2.rippleEnd();
      }, this.config.duration); // Detect when the user leaves the element to cleanup if not already done?

      this.$element.on(this.config.trigger.end, function () {
        if (_this2.$decorator) {
          // guard against race condition/mouse attack
          _this2.$decorator.data("mousedown", "off");

          if (_this2.$decorator.data("animating") === "off") {
            _this2.rippleOut();
          }
        }
      });
    };

    _proto._findOrCreateContainer = function _findOrCreateContainer() {
      if (!this.$container || !this.$container.length > 0) {
        this.$element.append(this.config.container.template);
        this.$container = this.$element.find(Selector.CONTAINER);
      } // always add the rippleElement, it is always removed


      this.$container.append(this.config.decorator.template);
      this.$decorator = this.$container.find(Selector.DECORATOR);
    }; // Make sure the ripple has the styles applied (ugly hack but it works)


    _proto._forceStyleApplication = function _forceStyleApplication() {
      return window.getComputedStyle(this.$decorator[0]).opacity;
    };
    /**
     * Get the relX
     */


    _proto._getRelX = function _getRelX(event) {
      var wrapperOffset = this.$container.offset();
      var result = null;

      if (!this._isTouch()) {
        // Get the mouse position relative to the ripple wrapper
        result = event.pageX - wrapperOffset.left;
      } else {
        // Make sure the user is using only one finger and then get the touch
        //  position relative to the ripple wrapper
        event = event.originalEvent;

        if (event.touches.length === 1) {
          result = event.touches[0].pageX - wrapperOffset.left;
        } else {
          result = false;
        }
      }

      return result;
    };
    /**
     * Get the relY
     */


    _proto._getRelY = function _getRelY(event) {
      var containerOffset = this.$container.offset();
      var result = null;

      if (!this._isTouch()) {
        /**
         * Get the mouse position relative to the ripple wrapper
         */
        result = event.pageY - containerOffset.top;
      } else {
        /**
         * Make sure the user is using only one finger and then get the touch
         * position relative to the ripple wrapper
         */
        event = event.originalEvent;

        if (event.touches.length === 1) {
          result = event.touches[0].pageY - containerOffset.top;
        } else {
          result = false;
        }
      }

      return result;
    };
    /**
     * Get the ripple color
     */


    _proto._getRipplesColor = function _getRipplesColor() {
      var color = this.$element.data("ripple-color") ? this.$element.data("ripple-color") : window.getComputedStyle(this.$element[0]).color;
      return color;
    };
    /**
     * Verify if the client is using a mobile device
     */


    _proto._isTouch = function _isTouch() {
      return this.config.touchUserAgentRegex.test(navigator.userAgent);
    };
    /**
     * End the animation of the ripple
     */


    _proto.rippleEnd = function rippleEnd() {
      if (this.$decorator) {
        // guard against race condition/mouse attack
        this.$decorator.data("animating", "off");

        if (this.$decorator.data("mousedown") === "off") {
          this.rippleOut(this.$decorator);
        }
      }
    };
    /**
     * Turn off the ripple effect
     */


    _proto.rippleOut = function rippleOut() {
      var _this3 = this;

      this.$decorator.off();

      if (Util$2.transitionEndSupported()) {
        this.$decorator.addClass("ripple-out");
      } else {
        this.$decorator.animate({
          opacity: 0
        }, 100, function () {
          _this3.$decorator.trigger("transitionend");
        });
      }

      this.$decorator.on(Util$2.transitionEndSelector(), function () {
        if (_this3.$decorator) {
          _this3.$decorator.remove();

          _this3.$decorator = null;
        }
      });
    };
    /**
     * Turn on the ripple effect
     */


    _proto.rippleOn = function rippleOn() {
      var _this4 = this;

      var size = this._getNewSize();

      if (Util$2.transitionEndSupported()) {
        this.$decorator.css({
          "-ms-transform": "scale(" + size + ")",
          "-moz-transform": "scale(" + size + ")",
          "-webkit-transform": "scale(" + size + ")",
          transform: "scale(" + size + ")"
        }).addClass("ripple-on").data("animating", "on").data("mousedown", "on");
      } else {
        this.$decorator.animate({
          width: Math.max(this.$element.outerWidth(), this.$element.outerHeight()) * 2,
          height: Math.max(this.$element.outerWidth(), this.$element.outerHeight()) * 2,
          "margin-left": Math.max(this.$element.outerWidth(), this.$element.outerHeight()) * -1,
          "margin-top": Math.max(this.$element.outerWidth(), this.$element.outerHeight()) * -1,
          opacity: 0.2
        }, this.config.duration, function () {
          _this4.$decorator.trigger("transitionend");
        });
      }
    };
    /**
     * Get the new size based on the element height/width and the ripple width
     */


    _proto._getNewSize = function _getNewSize() {
      return Math.max(this.$element.outerWidth(), this.$element.outerHeight()) / this.$decorator.outerWidth() * 2.5;
    }; // ------------------------------------------------------------------------
    // static


    Ripples._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $$$1(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Ripples($element, config);
          $element.data(DATA_KEY, data);
        }
      });
    };

    return Ripples;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $$$1.fn[JQUERY_NAME] = Ripples._jQueryInterface;
  $$$1.fn[JQUERY_NAME].Constructor = Ripples;

  $$$1.fn[JQUERY_NAME].noConflict = function () {
    $$$1.fn[JQUERY_NAME] = JQUERY_NO_CONFLICT;
    return Ripples._jQueryInterface;
  };

  return Ripples;
}(jQuery);

var Autofill = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = "autofill";
  var DATA_KEY = "bmd." + NAME;
  var JQUERY_NAME = "bmd" + (NAME.charAt(0).toUpperCase() + NAME.slice(1));
  var JQUERY_NO_CONFLICT = $$$1.fn[JQUERY_NAME];
  var Default = {};
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Autofill =
  /*#__PURE__*/
  function (_Base) {
    _inheritsLoose(Autofill, _Base);

    function Autofill($element, config) {
      var _this;

      _this = _Base.call(this, $element, $$$1.extend(true, {}, Default, config)) || this;

      _this._watchLoading();

      _this._attachEventHandlers();

      return _this;
    }

    var _proto = Autofill.prototype;

    _proto.dispose = function dispose() {
      _Base.prototype.dispose.call(this, DATA_KEY);
    }; // ------------------------------------------------------------------------
    // private


    _proto._watchLoading = function _watchLoading() {
      var _this2 = this;

      // After 10 seconds we are quite sure all the needed inputs are autofilled then we can stop checking them
      setTimeout(function () {
        clearInterval(_this2._onLoading);
      }, 10000);
    }; // This part of code will detect autofill when the page is loading (username and password inputs for example)


    _proto._onLoading = function _onLoading() {
      setInterval(function () {
        $$$1("input[type!=checkbox]").each(function (index, element) {
          var $element = $$$1(element);

          if ($element.val() && $element.val() !== $element.attr("value")) {
            $element.trigger("change");
          }
        });
      }, 100);
    };

    _proto._attachEventHandlers = function _attachEventHandlers() {
      // Listen on inputs of the focused form
      //  (because user can select from the autofill dropdown only when the input has focus)
      var focused = null;
      $$$1(document).on("focus", "input", function (event) {
        var $inputs = $$$1(event.currentTarget).closest("form").find("input").not("[type=file]");
        focused = setInterval(function () {
          $inputs.each(function (index, element) {
            var $element = $$$1(element);

            if ($element.val() !== $element.attr("value")) {
              $element.trigger("change");
            }
          });
        }, 100);
      }).on("blur", ".form-group input", function () {
        clearInterval(focused);
      });
    }; // ------------------------------------------------------------------------
    // static


    Autofill._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $$$1(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Autofill($element, config);
          $element.data(DATA_KEY, data);
        }
      });
    };

    return Autofill;
  }(Base);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $$$1.fn[JQUERY_NAME] = Autofill._jQueryInterface;
  $$$1.fn[JQUERY_NAME].Constructor = Autofill;

  $$$1.fn[JQUERY_NAME].noConflict = function () {
    $$$1.fn[JQUERY_NAME] = JQUERY_NO_CONFLICT;
    return Autofill._jQueryInterface;
  };

  return Autofill;
}(jQuery);

/* globals Popper */
Popper.Defaults.modifiers.computeStyle.gpuAcceleration = false;
/**
 * $.bootstrapMaterialDesign(config) is a macro class to configure the components generally
 *  used in Material Design for Bootstrap.  You may pass overrides to the configurations
 *  which will be passed into each component, or you may omit use of this class and
 *  configure each component separately.
 */

var BootstrapMaterialDesign = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = "bootstrapMaterialDesign";
  var DATA_KEY = "bmd." + NAME;
  var JQUERY_NAME = NAME; // retain this full name since it is long enough not to conflict

  var JQUERY_NO_CONFLICT = $$$1.fn[JQUERY_NAME];
  /**
   * Global configuration:
   *  The global configuration hash will be mixed in to each components' config.
   *    e.g. calling $.bootstrapMaterialDesign({global: { validate: true } }) would pass `validate:true` to every component
   *
   *
   * Component configuration:
   *  - selector: may be a string or an array.  Any array will be joined with a comma to generate the selector
   *  - disable any component by defining it as false with an override. e.g. $.bootstrapMaterialDesign({ autofill: false })
   *
   *  @see each individual component for more configuration settings.
   */

  var Default = {
    global: {
      validate: false,
      label: {
        className: "bmd-label-static" // default style of label to be used if not specified in the html markup

      }
    },
    autofill: {
      selector: "body"
    },
    checkbox: {
      selector: ".checkbox > label > input[type=checkbox]"
    },
    checkboxInline: {
      selector: "label.checkbox-inline > input[type=checkbox]"
    },
    collapseInline: {
      selector: '.bmd-collapse-inline [data-toggle="collapse"]'
    },
    drawer: {
      selector: ".bmd-layout-drawer"
    },
    file: {
      selector: "input[type=file]"
    },
    radio: {
      selector: ".radio > label > input[type=radio]"
    },
    radioInline: {
      selector: "label.radio-inline > input[type=radio]"
    },
    ripples: {
      //selector: ['.btn:not(.btn-link):not(.ripple-none)'] // testing only
      selector: [".btn:not(.btn-link):not(.ripple-none)", ".card-image:not(.ripple-none)", ".navbar a:not(.ripple-none)", ".dropdown-menu a:not(.ripple-none)", ".nav-tabs a:not(.ripple-none)", ".pagination li:not(.active):not(.disabled) a:not(.ripple-none)", ".ripple" // generic marker class to add ripple to elements
      ]
    },
    select: {
      selector: ["select"]
    },
    switch: {
      selector: ".switch > label > input[type=checkbox]"
    },
    text: {
      // omit inputs we have specialized components to handle - we need to match text, email, etc.  The easiest way to do this appears to be just omit the ones we don't want to match and let the rest fall through to this.
      selector: ["input:not([type=hidden]):not([type=checkbox]):not([type=radio]):not([type=file]):not([type=button]):not([type=submit]):not([type=reset])"]
    },
    textarea: {
      selector: ["textarea"]
    },
    arrive: true,
    // create an ordered component list for instantiation
    instantiation: ["ripples", "checkbox", "checkboxInline", "collapseInline", "drawer", //'file',
    "radio", "radioInline", "switch", "text", "textarea", "select", "autofill"]
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var BootstrapMaterialDesign =
  /*#__PURE__*/
  function () {
    function BootstrapMaterialDesign($element, config) {
      var _this = this;

      this.$element = $element;
      this.config = $$$1.extend(true, {}, Default, config);
      var $document = $$$1(document);

      var _loop = function _loop(component) {
        // the component's config fragment is passed in directly, allowing users to override
        var componentConfig = _this.config[component]; // check to make sure component config is enabled (not `false`)

        if (componentConfig) {
          // assemble the selector as it may be an array
          var selector = _this._resolveSelector(componentConfig); // mix in global options


          componentConfig = $$$1.extend(true, {}, _this.config.global, componentConfig); // create the jquery fn name e.g. 'bmdText' for 'text'

          var componentName = "" + (component.charAt(0).toUpperCase() + component.slice(1));
          var jqueryFn = "bmd" + componentName;

          try {
            // safely instantiate component on selector elements with config, report errors and move on.
            // console.debug(`instantiating: $('${selector}')[${jqueryFn}](${componentConfig})`) // eslint-disable-line no-console
            $$$1(selector)[jqueryFn](componentConfig); // add to arrive if present and enabled

            if (document.arrive && _this.config.arrive) {
              $document.arrive(selector, function () {
                // eslint-disable-line no-loop-func
                $$$1(this)[jqueryFn](componentConfig);
              });
            }
          } catch (e) {
            var message = "Failed to instantiate component: $('" + selector + "')[" + jqueryFn + "](" + componentConfig + ")";
            console.error(message, e, "\nSelected elements: ", $$$1(selector)); // eslint-disable-line no-console

            throw e;
          }
        }
      };

      for (var _iterator = this.config.instantiation, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var component = _ref;

        _loop(component);
      }
    }

    var _proto = BootstrapMaterialDesign.prototype;

    _proto.dispose = function dispose() {
      this.$element.data(DATA_KEY, null);
      this.$element = null;
      this.config = null;
    }; // ------------------------------------------------------------------------
    // private


    _proto._resolveSelector = function _resolveSelector(componentConfig) {
      var selector = componentConfig.selector;

      if (Array.isArray(selector)) {
        selector = selector.join(", ");
      }

      return selector;
    }; // ------------------------------------------------------------------------
    // static


    BootstrapMaterialDesign._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $$$1(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new BootstrapMaterialDesign($element, config);
          $element.data(DATA_KEY, data);
        }
      });
    };

    return BootstrapMaterialDesign;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $$$1.fn[JQUERY_NAME] = BootstrapMaterialDesign._jQueryInterface;
  $$$1.fn[JQUERY_NAME].Constructor = BootstrapMaterialDesign;

  $$$1.fn[JQUERY_NAME].noConflict = function () {
    $$$1.fn[JQUERY_NAME] = JQUERY_NO_CONFLICT;
    return BootstrapMaterialDesign._jQueryInterface;
  };

  return BootstrapMaterialDesign;
}(jQuery);

/*
 * This is the main entry point.
 *
 * You can import other modules here, including external packages. When bundling using rollup you can mark those modules as external and have them excluded or, if they have a jsnext:main entry in their package.json (like this package does), let rollup bundle them into your dist file.
 *
 * at your application entry point.  This is necessary for browsers that do not yet support some ES2015 runtime necessities such as Symbol.  We do this in `index-iife.js` for our iife rollup bundle.
 */
// Bootstrap components

})));
//# sourceMappingURL=bootstrap-material-design.js.map
/* React */
/** @license React v16.7.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';(function(L,q){"object"===typeof exports&&"undefined"!==typeof module?module.exports=q():"function"===typeof define&&define.amd?define(q):L.React=q()})(this,function(){function L(a,b,d,f,p,c,e,h){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var m=[d,f,p,c,e,h],ra=0;a=Error(b.replace(/%s/g,function(){return m[ra++]}));a.name="Invariant Violation"}a.framesToPop=
1;throw a;}}function q(a){for(var b=arguments.length-1,d="https://reactjs.org/docs/error-decoder.html?invariant="+a,f=0;f<b;f++)d+="&args[]="+encodeURIComponent(arguments[f+1]);L(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",d)}function r(a,b,d){this.props=a;this.context=b;this.refs=aa;this.updater=d||ba}function ca(){}function M(a,b,d){this.props=a;this.context=b;this.refs=aa;this.updater=
d||ba}function t(){if(!w){var a=c.expirationTime;B?N():B=!0;C(sa,a)}}function O(){var a=c,b=c.next;if(c===b)c=null;else{var d=c.previous;c=d.next=b;b.previous=d}a.next=a.previous=null;d=a.callback;b=a.expirationTime;a=a.priorityLevel;var f=g,p=D;g=a;D=b;try{var m=d()}finally{g=f,D=p}if("function"===typeof m)if(m={callback:m,priorityLevel:a,expirationTime:b,next:null,previous:null},null===c)c=m.next=m.previous=m;else{d=null;a=c;do{if(a.expirationTime>=b){d=a;break}a=a.next}while(a!==c);null===d?d=
c:d===c&&(c=m,t());b=d.previous;b.next=d.previous=m;m.next=d;m.previous=b}}function P(){if(-1===l&&null!==c&&1===c.priorityLevel){w=!0;try{do O();while(null!==c&&1===c.priorityLevel)}finally{w=!1,null!==c?t():B=!1}}}function sa(a){w=!0;var b=E;E=a;try{if(a)for(;null!==c;){var d=k();if(c.expirationTime<=d){do O();while(null!==c&&c.expirationTime<=d)}else break}else if(null!==c){do O();while(null!==c&&!F())}}finally{w=!1,E=b,null!==c?t():B=!1,P()}}function da(a,b,d){var f=void 0,p={},c=null,e=null;
if(null!=b)for(f in void 0!==b.ref&&(e=b.ref),void 0!==b.key&&(c=""+b.key),b)ea.call(b,f)&&!fa.hasOwnProperty(f)&&(p[f]=b[f]);var h=arguments.length-2;if(1===h)p.children=d;else if(1<h){for(var g=Array(h),k=0;k<h;k++)g[k]=arguments[k+2];p.children=g}if(a&&a.defaultProps)for(f in h=a.defaultProps,h)void 0===p[f]&&(p[f]=h[f]);return{$$typeof:x,type:a,key:c,ref:e,props:p,_owner:Q.current}}function ta(a,b){return{$$typeof:x,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function R(a){return"object"===
typeof a&&null!==a&&a.$$typeof===x}function ua(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}function ha(a,b,d,f){if(G.length){var c=G.pop();c.result=a;c.keyPrefix=b;c.func=d;c.context=f;c.count=0;return c}return{result:a,keyPrefix:b,func:d,context:f,count:0}}function ia(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>G.length&&G.push(a)}function S(a,b,d,f){var c=typeof a;if("undefined"===c||"boolean"===c)a=null;var e=!1;if(null===
a)e=!0;else switch(c){case "string":case "number":e=!0;break;case "object":switch(a.$$typeof){case x:case va:e=!0}}if(e)return d(f,a,""===b?"."+T(a,0):b),1;e=0;b=""===b?".":b+":";if(Array.isArray(a))for(var g=0;g<a.length;g++){c=a[g];var h=b+T(c,g);e+=S(c,h,d,f)}else if(null===a||"object"!==typeof a?h=null:(h=ja&&a[ja]||a["@@iterator"],h="function"===typeof h?h:null),"function"===typeof h)for(a=h.call(a),g=0;!(c=a.next()).done;)c=c.value,h=b+T(c,g++),e+=S(c,h,d,f);else"object"===c&&(d=""+a,q("31",
"[object Object]"===d?"object with keys {"+Object.keys(a).join(", ")+"}":d,""));return e}function U(a,b,d){return null==a?0:S(a,"",b,d)}function T(a,b){return"object"===typeof a&&null!==a&&null!=a.key?ua(a.key):b.toString(36)}function wa(a,b,d){a.func.call(a.context,b,a.count++)}function xa(a,b,d){var f=a.result,c=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?V(a,f,d,function(a){return a}):null!=a&&(R(a)&&(a=ta(a,c+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(ka,"$&/")+"/")+
d)),f.push(a))}function V(a,b,d,f,c){var e="";null!=d&&(e=(""+d).replace(ka,"$&/")+"/");b=ha(b,e,f,c);U(a,xa,b);ia(b)}var e="function"===typeof Symbol&&Symbol.for,x=e?Symbol.for("react.element"):60103,va=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,W=e?Symbol.for("react.strict_mode"):60108,ya=e?Symbol.for("react.profiler"):60114,za=e?Symbol.for("react.provider"):60109,Aa=e?Symbol.for("react.context"):60110,Ba=e?Symbol.for("react.concurrent_mode"):60111,Ca=e?Symbol.for("react.forward_ref"):
60112,Da=e?Symbol.for("react.suspense"):60113,Ea=e?Symbol.for("react.memo"):60115,Fa=e?Symbol.for("react.lazy"):60116,ja="function"===typeof Symbol&&Symbol.iterator,la=Object.getOwnPropertySymbols,Ga=Object.prototype.hasOwnProperty,Ha=Object.prototype.propertyIsEnumerable,H=function(){try{if(!Object.assign)return!1;var a=new String("abc");a[5]="de";if("5"===Object.getOwnPropertyNames(a)[0])return!1;var b={};for(a=0;10>a;a++)b["_"+String.fromCharCode(a)]=a;if("0123456789"!==Object.getOwnPropertyNames(b).map(function(a){return b[a]}).join(""))return!1;
var d={};"abcdefghijklmnopqrst".split("").forEach(function(a){d[a]=a});return"abcdefghijklmnopqrst"!==Object.keys(Object.assign({},d)).join("")?!1:!0}catch(f){return!1}}()?Object.assign:function(a,b){if(null===a||void 0===a)throw new TypeError("Object.assign cannot be called with null or undefined");var d=Object(a);for(var c,e=1;e<arguments.length;e++){var g=Object(arguments[e]);for(var k in g)Ga.call(g,k)&&(d[k]=g[k]);if(la){c=la(g);for(var h=0;h<c.length;h++)Ha.call(g,c[h])&&(d[c[h]]=g[c[h]])}}return d},
ba={isMounted:function(a){return!1},enqueueForceUpdate:function(a,b,d){},enqueueReplaceState:function(a,b,d,c){},enqueueSetState:function(a,b,d,c){}},aa={};r.prototype.isReactComponent={};r.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?q("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState")};r.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};ca.prototype=r.prototype;e=M.prototype=new ca;e.constructor=M;H(e,r.prototype);
e.isPureReactComponent=!0;var c=null,E=!1,g=3,l=-1,D=-1,w=!1,B=!1,Ia=Date,Ja="function"===typeof setTimeout?setTimeout:void 0,Ka="function"===typeof clearTimeout?clearTimeout:void 0,ma="function"===typeof requestAnimationFrame?requestAnimationFrame:void 0,na="function"===typeof cancelAnimationFrame?cancelAnimationFrame:void 0,oa,pa,X=function(a){oa=ma(function(b){Ka(pa);a(b)});pa=Ja(function(){na(oa);a(k())},100)};if("object"===typeof performance&&"function"===typeof performance.now){var La=performance;
var k=function(){return La.now()}}else k=function(){return Ia.now()};e=null;"undefined"!==typeof window?e=window:"undefined"!==typeof global&&(e=global);if(e&&e._schedMock){e=e._schedMock;var C=e[0];var N=e[1];var F=e[2];k=e[3]}else if("undefined"===typeof window||"function"!==typeof MessageChannel){var u=null,Ma=function(a){if(null!==u)try{u(a)}finally{u=null}};C=function(a,b){null!==u?setTimeout(C,0,a):(u=a,setTimeout(Ma,0,!1))};N=function(){u=null};F=function(){return!1}}else{"undefined"!==typeof console&&
("function"!==typeof ma&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!==typeof na&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));var v=null,I=!1,y=-1,z=!1,Y=!1,J=0,K=33,A=33;F=function(){return J<=k()};e=new MessageChannel;var qa=e.port2;e.port1.onmessage=function(a){I=!1;a=
v;var b=y;v=null;y=-1;var d=k(),c=!1;if(0>=J-d)if(-1!==b&&b<=d)c=!0;else{z||(z=!0,X(Z));v=a;y=b;return}if(null!==a){Y=!0;try{a(c)}finally{Y=!1}}};var Z=function(a){if(null!==v){X(Z);var b=a-J+A;b<A&&K<A?(8>b&&(b=8),A=b<K?K:b):K=b;J=a+A;I||(I=!0,qa.postMessage(void 0))}else z=!1};C=function(a,b){v=a;y=b;Y||0>b?qa.postMessage(void 0):z||(z=!0,X(Z))};N=function(){v=null;I=!1;y=-1}}var Na=0,Q={current:null,currentDispatcher:null};e={ReactCurrentOwner:Q,assign:H};H(e,{Scheduler:{unstable_cancelCallback:function(a){var b=
a.next;if(null!==b){if(b===a)c=null;else{a===c&&(c=b);var d=a.previous;d.next=b;b.previous=d}a.next=a.previous=null}},unstable_shouldYield:function(){return!E&&(null!==c&&c.expirationTime<D||F())},unstable_now:k,unstable_scheduleCallback:function(a,b){var d=-1!==l?l:k();if("object"===typeof b&&null!==b&&"number"===typeof b.timeout)b=d+b.timeout;else switch(g){case 1:b=d+-1;break;case 2:b=d+250;break;case 5:b=d+1073741823;break;case 4:b=d+1E4;break;default:b=d+5E3}a={callback:a,priorityLevel:g,expirationTime:b,
next:null,previous:null};if(null===c)c=a.next=a.previous=a,t();else{d=null;var f=c;do{if(f.expirationTime>b){d=f;break}f=f.next}while(f!==c);null===d?d=c:d===c&&(c=a,t());b=d.previous;b.next=d.previous=a;a.next=d;a.previous=b}return a},unstable_runWithPriority:function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var d=g,c=l;g=a;l=k();try{return b()}finally{g=d,l=c,P()}},unstable_wrapCallback:function(a){var b=g;return function(){var d=g,c=l;g=b;l=k();try{return a.apply(this,
arguments)}finally{g=d,l=c,P()}}},unstable_getFirstCallbackNode:function(){return c},unstable_pauseExecution:function(){},unstable_continueExecution:function(){null!==c&&t()},unstable_getCurrentPriorityLevel:function(){return g}},SchedulerTracing:{__interactionsRef:null,__subscriberRef:null,unstable_clear:function(a){return a()},unstable_getCurrent:function(){return null},unstable_getThreadID:function(){return++Na},unstable_subscribe:function(a){},unstable_trace:function(a,b,d){return d()},unstable_unsubscribe:function(a){},
unstable_wrap:function(a){return a}}});var ea=Object.prototype.hasOwnProperty,fa={key:!0,ref:!0,__self:!0,__source:!0},ka=/\/+/g,G=[];n={Children:{map:function(a,b,d){if(null==a)return a;var c=[];V(a,c,null,b,d);return c},forEach:function(a,b,d){if(null==a)return a;b=ha(null,null,b,d);U(a,wa,b);ia(b)},count:function(a){return U(a,function(){return null},null)},toArray:function(a){var b=[];V(a,b,null,function(a){return a});return b},only:function(a){R(a)?void 0:q("143");return a}},createRef:function(){return{current:null}},
Component:r,PureComponent:M,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:Aa,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:za,_context:a};return a.Consumer=a},forwardRef:function(a){return{$$typeof:Ca,render:a}},lazy:function(a){return{$$typeof:Fa,_ctor:a,_status:-1,_result:null}},memo:function(a,b){return{$$typeof:Ea,type:a,compare:void 0===b?null:b}},Fragment:n,StrictMode:W,Suspense:Da,createElement:da,cloneElement:function(a,
b,d){null===a||void 0===a?q("267",a):void 0;var c=void 0,e=H({},a.props),g=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=Q.current);void 0!==b.key&&(g=""+b.key);var l=void 0;a.type&&a.type.defaultProps&&(l=a.type.defaultProps);for(c in b)ea.call(b,c)&&!fa.hasOwnProperty(c)&&(e[c]=void 0===b[c]&&void 0!==l?l[c]:b[c])}c=arguments.length-2;if(1===c)e.children=d;else if(1<c){l=Array(c);for(var n=0;n<c;n++)l[n]=arguments[n+2];e.children=l}return{$$typeof:x,type:a.type,key:g,ref:k,props:e,
_owner:h}},createFactory:function(a){var b=da.bind(null,a);b.type=a;return b},isValidElement:R,version:"16.7.0",unstable_ConcurrentMode:Ba,unstable_Profiler:ya,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:e};n=(W={default:n},n)||W;return n.default||n});
/* Popper */
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.12.6
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Popper = factory());
}(this, (function () { 'use strict';

var isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';
var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return window.document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  // NOTE: 1 DOM access here
  var offsetParent = element && element.offsetParent;
  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    if (element) {
      return element.ownerDocument.documentElement;
    }

    return window.document.documentElement;
  }

  // .offsetParent will return the closest TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return window.document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return +styles['border' + sideA + 'Width'].split('px')[0] + +styles['border' + sideB + 'Width'].split('px')[0];
}

/**
 * Tells if you are running Internet Explorer 10
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean} isIE10
 */
var isIE10 = undefined;

var isIE10$1 = function () {
  if (isIE10 === undefined) {
    isIE10 = navigator.appVersion.indexOf('MSIE 10') !== -1;
  }
  return isIE10;
};

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE10$1() ? html['offset' + axis] + computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')] + computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')] : 0);
}

function getWindowSizes() {
  var body = window.document.body;
  var html = window.document.documentElement;
  var computedStyle = isIE10$1() && window.getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  if (isIE10$1()) {
    try {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } catch (err) {}
  } else {
    rect = element.getBoundingClientRect();
  }

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes() : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var isIE10 = isIE10$1();
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = +styles.borderTopWidth.split('px')[0];
  var borderLeftWidth = +styles.borderLeftWidth.split('px')[0];

  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = +styles.marginTop.split('px')[0];
    var marginLeft = +styles.marginLeft.split('px')[0];

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = getScroll(html);
  var scrollLeft = getScroll(html, 'left');

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  return isFixed(getParentNode(element));
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  // NOTE: 1 DOM access here
  var boundaries = { top: 0, left: 0 };
  var offsetParent = findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(popper));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  boundaries.left += padding;
  boundaries.top += padding;
  boundaries.right -= padding;
  boundaries.bottom -= padding;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var commonOffsetParent = findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
  var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
  data.offsets.popper.position = 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length - 1; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof window.document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroy the popper
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.left = '';
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger onUpdate callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    window.cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper.
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  // floor sides to avoid blurry text
  var offsets = {
    left: Math.floor(popper.left),
    top: Math.floor(popper.top),
    bottom: Math.floor(popper.bottom),
    right: Math.floor(popper.right)
  };

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    top = -offsetParentRect.height + offsets.bottom;
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    left = -offsetParentRect.width + offsets.right;
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjuction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var popperMarginSide = getStyleComputedProperty(data.instance.popper, 'margin' + sideCapitalized).replace('px', '');
  var sideValue = center - getClientRect(data.offsets.popper)[side] - popperMarginSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = {};
  data.offsets.arrow[side] = Math.round(sideValue);
  data.offsets.arrow[altSide] = ''; // make sure to unset any eventual altSide value from the DOM node

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-right` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement);
  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unitless, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the height.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * An scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper this makes sure the popper has always a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier, can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near eachothers
   * without leaving any gap between the two. Expecially useful when the arrow is
   * enabled and you want to assure it to point to its reference element.
   * It cares only about the first axis, you can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjuction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations).
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position,
     * the popper will never be placed outside of the defined boundaries
     * (except if keepTogether is enabled)
     */
    boundariesElement: 'viewport'
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define you own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the informations used by Popper.js
 * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overriden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass as 3rd argument an object with the same
 * structure of this object, example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Whether events (resize, scroll) are initially enabled
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated, this callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Create a new Popper.js instance
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper.
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedule an update, it will run on the next UI update available
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

return Popper;

})));
//# sourceMappingURL=popper.js.map