(function(){var g=void 0,h=null,aa=encodeURIComponent,ba=decodeURIComponent,i=Math;function ca(a,b){return a.name=b}var j="push",da="replace",ea="load",m="charAt",fa="value",n="indexOf",ga="match",ia="name",ja="host",p="toString",r="length",s="prototype",t="split",u="stopPropagation",ka="scope",v="location",w="getString",x="substring",la="navigator",y="join",A="toLowerCase",B;function ma(a,b){switch(b){case 0:return""+a;case 1:return a*1;case 2:return!!a;case 3:return a*1E3}return a}function C(a){return g==a||"-"==a||""==a}function na(a){if(!a||""==a)return"";for(;a&&" \n\r\t"[n](a[m](0))>-1;)a=a[x](1);for(;a&&" \n\r\t"[n](a[m](a[r]-1))>-1;)a=a[x](0,a[r]-1);return a}function D(a){var b=1,c=0,d;if(!C(a)){b=0;for(d=a[r]-1;d>=0;d--)c=a.charCodeAt(d),b=(b<<6&268435455)+c+(c<<14),c=b&266338304,b=c!=0?b^c>>21:b}return b}function oa(){return i.round(i.random()*2147483647)}
function pa(){}function E(a,b){return aa instanceof Function?b?encodeURI(a):aa(a):(F(68),escape(a))}function G(a){a=a[t]("+")[y](" ");if(ba instanceof Function)try{return ba(a)}catch(b){F(17)}else F(68);return unescape(a)}var qa=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},ra=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,!!d):a.detachEvent&&a.detachEvent("on"+b,c)};function H(a){return a&&a[r]>0?a[0]:""}
function sa(a){var b=a?a[r]:0;return b>0?a[b-1]:""}var ta=function(){this.prefix="ga.";this.F={}};ta[s].set=function(a,b){this.F[this.prefix+a]=b};ta[s].get=function(a){return this.F[this.prefix+a]};ta[s].contains=function(a){return this.get(a)!==g};function ua(a){a[n]("www.")==0&&(a=a[x](4));return a[A]()}function va(a,b){var c,d={url:a,protocol:"http",host:"",path:"",c:new ta,anchor:""};if(!a)return d;c=a[n]("://");if(c>=0)d.protocol=a[x](0,c),a=a[x](c+3);c=a.search("/|\\?|#");if(c>=0)d.host=a[x](0,c)[A](),a=a[x](c);else return d.host=a[A](),d;c=a[n]("#");if(c>=0)d.anchor=a[x](c+1),a=a[x](0,c);c=a[n]("?");c>=0&&(wa(d.c,a[x](c+1)),a=a[x](0,c));d.anchor&&b&&wa(d.c,d.anchor);a&&a[m](0)=="/"&&(a=a[x](1));d.path=a;return d}
function wa(a,b){function c(b,c){a.contains(b)||a.set(b,[]);a.get(b)[j](c)}for(var d=na(b)[t]("&"),e=0;e<d[r];e++)if(d[e]){var f=d[e][n]("=");f<0?c(d[e],"1"):c(d[e][x](0,f),d[e][x](f+1))}}function xa(a,b){if(C(a))return"-";if("["==a[m](0)&&"]"==a[m](a[r]-1))return"-";var c=I.domain;c+=b&&b!="/"?b:"";return a[n](c)==(a[n]("http://")==0?7:a[n]("https://")==0?8:0)?"0":a};var ya=0;function J(a){return(a?"_":"")+ya++}
var za=J(),Aa=J(),Ba=J(),Ca=J(),Da=J(),K=J(),L=J(),Ea=J(),Fa=J(),Ga=J(),Ha=J(),Ia=J(),Ja=J(),Ka=J(),La=J(),Ma=J(),Na=J(),Oa=J(),Pa=J(),Qa=J(),Ra=J(),Sa=J(),Ta=J(),Ua=J(),Va=J(),Wa=J(),Xa=J(),Ya=J(),Za=J(),$a=J(),ab=J(),bb=J(),cb=J(),db=J(),eb=J(),M=J(!0),fb=J(),gb=J(),hb=J(),ib=J(),jb=J(),kb=J(),lb=J(),mb=J(),nb=J(),ob=J(),N=J(!0),pb=J(!0),qb=J(!0),rb=J(!0),sb=J(!0),ub=J(!0),vb=J(!0),wb=J(!0),xb=J(!0),yb=J(!0),zb=J(!0),O=J(!0),Ab=J(!0),Bb=J(!0),Cb=J(!0),Db=J(!0),Eb=J(!0),Fb=J(!0),Gb=J(!0),Hb=J(!0),
Ib=J(!0),Jb=J(!0),Kb=J(!0),Lb=J(!0),Mb=J(!0),Nb=J(),Ob=J();J();var Pb=J(),Qb=J(),Rb=J(),Sb=J(),Tb=J(),Ub=J(),Xb=J(),Yb=J(),Zb=J();J();var $b=J(),ac=J();var bc=function(){function a(a,c,d){P(Q[s],a,c,d)}R("_getName",Ba,58);R("_getAccount",za,64);R("_visitCode",N,54);R("_getClientInfo",Ka,53,1);R("_getDetectTitle",Na,56,1);R("_getDetectFlash",La,65,1);R("_getLocalGifPath",Xa,57);R("_getServiceMode",Ya,59);S("_setClientInfo",Ka,66,2);S("_setAccount",za,3);S("_setNamespace",Aa,48);S("_setAllowLinker",Ha,11,2);S("_setDetectFlash",La,61,2);S("_setDetectTitle",Na,62,2);S("_setLocalGifPath",Xa,46,0);S("_setLocalServerMode",Ya,92,g,0);S("_setRemoteServerMode",
Ya,63,g,1);S("_setLocalRemoteServerMode",Ya,47,g,2);S("_setSampleRate",Wa,45,1);S("_setCampaignTrack",Ma,36,2);S("_setAllowAnchor",Ia,7,2);S("_setCampNameKey",Pa,41);S("_setCampContentKey",Ua,38);S("_setCampIdKey",Oa,39);S("_setCampMediumKey",Sa,40);S("_setCampNOKey",Va,42);S("_setCampSourceKey",Ra,43);S("_setCampTermKey",Ta,44);S("_setCampCIdKey",Qa,37);S("_setCookiePath",L,9,0);S("_setMaxCustomVariables",Za,0,1);S("_setVisitorCookieTimeout",Ea,28,1);S("_setSessionCookieTimeout",Fa,26,1);S("_setCampaignCookieTimeout",
Ga,29,1);S("_setReferrerOverride",hb,49);a("_trackPageview",Q[s].ka,1);a("_trackEvent",Q[s].t,4);a("_trackSocial",Q[s].la,104);a("_trackPageLoadTime",Q[s].ja,100);a("_trackTrans",Q[s].ma,18);a("_sendXEvent",Q[s].s,78);a("_createEventTracker",Q[s].S,74);a("_getVersion",Q[s].X,60);a("_setDomainName",Q[s].r,6);a("_setAllowHash",Q[s].ba,8);a("_getLinkerUrl",Q[s].W,52);a("_link",Q[s].link,101);a("_linkByPost",Q[s].aa,102);a("_setTrans",Q[s].ea,20);a("_addTrans",Q[s].L,21);a("_addItem",Q[s].J,19);a("_setTransactionDelim",
Q[s].fa,82);a("_setCustomVar",Q[s].ca,10);a("_deleteCustomVar",Q[s].U,35);a("_getVisitorCustomVar",Q[s].Y,50);a("_setXKey",Q[s].ha,83);a("_setXValue",Q[s].ia,84);a("_getXKey",Q[s].Z,76);a("_getXValue",Q[s].$,77);a("_clearXKey",Q[s].P,72);a("_clearXValue",Q[s].Q,73);a("_createXObj",Q[s].T,75);a("_addIgnoredOrganic",Q[s].H,15);a("_clearIgnoredOrganic",Q[s].M,97);a("_addIgnoredRef",Q[s].I,31);a("_clearIgnoredRef",Q[s].N,32);a("_addOrganic",Q[s].K,14);a("_clearOrganic",Q[s].O,70);a("_cookiePathCopy",
Q[s].R,30);a("_get",Q[s].V,106);a("_set",Q[s].da,107);a("_addEventListener",Q[s].addEventListener,108);a("_removeEventListener",Q[s].removeEventListener,109);a("_initData",Q[s].l,2);a("_setVar",Q[s].ga,22);S("_setSessionTimeout",Fa,27,3);S("_setCookieTimeout",Ga,25,3);S("_setCookiePersistence",Ea,24,1);a("_setAutoTrackOutbound",pa,79);a("_setTrackOutboundSubdomains",pa,81);a("_setHrefExamineLimit",pa,80)},P=function(a,b,c,d){a[b]=function(){F(d);return c.apply(this,arguments)}},R=function(a,b,c,d){Q[s][a]=
function(){F(c);return ma(this.a.get(b),d)}},S=function(a,b,c,d,e){Q[s][a]=function(a){F(c);e==g?this.a.set(b,ma(a,d)):this.a.set(b,e)}},cc=function(a,b){return{type:b,target:a,stopPropagation:function(){throw"aborted";}}};var dc=function(a,b){return b!=="/"?!1:(a[n]("www.google.")==0||a[n](".google.")==0||a[n]("google.")==0)&&!(a[n]("google.org")>-1)?!0:!1},ec=function(a){var b=a.get(Da),c=a[w](L,"/");dc(b,c)&&a[u]()};var ic=function(){var a={},b={},c=new fc;this.g=function(a,b){c.add(a,b)};var d=new fc;this.d=function(a,b){d.add(a,b)};var e=!1,f=!1,k=!0;this.G=function(){e=!0};this.f=function(a){this[ea]();this.set(Nb,a,!0);e=!1;d.execute(this);e=!0;b={};this.i()};this.load=function(){e&&(e=!1,this.na(),gc(this),f||(f=!0,c.execute(this),hc(this),gc(this)),e=!0)};this.i=function(){if(e)if(f)e=!1,hc(this),e=!0;else this[ea]()};this.get=function(c){c&&c[m](0)=="_"&&this[ea]();return b[c]!==g?b[c]:a[c]};this.set=
function(c,d,e){c&&c[m](0)=="_"&&this[ea]();e?b[c]=d:a[c]=d;c&&c[m](0)=="_"&&this.i()};this.m=function(b){a[b]=this.b(b,0)+1};this.b=function(a,b){var c=this.get(a);return c==g||c===""?b:c*1};this.getString=function(a,b){var c=this.get(a);return c==g?b:c+""};this.na=function(){if(k){var b=this[w](Da,""),c=this[w](L,"/");dc(b,c)||(a[K]=a[Ja]&&b!=""?D(b):1,k=!1)}}};ic[s].stopPropagation=function(){throw"aborted";};function jc(a,b){for(var b=b||[],c=0;c<b[r];c++){var d=b[c];if(""+a==d||d[n](a+".")==0)return d}return"-"}
var lc=function(a,b,c){c=c?"":a[w](K,"1");b=b[t](".");if(b[r]!==6||kc(b[0],c))return!1;var c=b[1]*1,d=b[2]*1,e=b[3]*1,f=b[4]*1,b=b[5]*1;if(!(c>=0&&d>0&&e>0&&f>0&&b>=0))return F(110),!1;a.set(N,c);a.set(sb,d);a.set(ub,e);a.set(vb,f);a.set(wb,b);return!0},mc=function(a){var b=a.get(N),c=a.get(sb),d=a.get(ub),e=a.get(vb),f=a.b(wb,1);b==g?F(113):b==NaN&&F(114);b>=0&&c>0&&d>0&&e>0&&f>=0||F(115);return[a.b(K,1),b!=g?b:"-",c||"-",d||"-",e||"-",f][y](".")},nc=function(a){return[a.b(K,1),a.b(zb,0),a.b(O,1),
a.b(Ab,0)][y](".")},oc=function(a,b,c){var c=c?"":a[w](K,"1"),d=b[t](".");if(d[r]!==4||kc(d[0],c))d=h;a.set(zb,d?d[1]*1:0);a.set(O,d?d[2]*1:10);a.set(Ab,d?d[3]*1:a.get(Ca));return d!=h||!kc(b,c)},pc=function(a,b){var c=E(a[w](qb,"")),d=[],e=a.get(M);if(!b&&e){for(var f=0;f<e[r];f++){var k=e[f];k&&k[ka]==1&&d[j](f+"="+E(k[ia])+"="+E(k[fa])+"=1")}d[r]>0&&(c+="|"+d[y](","))}return c?a.b(K,1)+"."+c:h},qc=function(a,b,c){c=c?"":a[w](K,"1");b=b[t](".");if(b[r]<2||kc(b[0],c))return!1;b=b.slice(1)[y](".")[t]("|");
b[r]>0&&a.set(qb,G(b[0]));if(b[r]<=1)return!0;for(var c=b[1][t](b[1][n](",")==-1?"^":","),d=0;d<c[r];d++){var e=c[d][t]("=");if(e[r]==4){var f={};ca(f,G(e[1]));f.value=G(e[2]);f.scope=1;a.get(M)[e[0]]=f}}b[1][n]("^")>=0&&F(125);return!0},sc=function(a,b){var c=rc(a,b);return c?[a.b(K,1),a.b(Bb,0),a.b(Cb,1),a.b(Db,1),c][y]("."):""},rc=function(a){function b(b,e){if(!C(a.get(b))){var f=a[w](b,""),f=f[t](" ")[y]("%20"),f=f[t]("+")[y]("%20");c[j](e+"="+f)}}var c=[];b(Fb,"utmcid");b(Jb,"utmcsr");b(Hb,
"utmgclid");b(Ib,"utmdclid");b(Gb,"utmccn");b(Kb,"utmcmd");b(Lb,"utmctr");b(Mb,"utmcct");return c[y]("|")},uc=function(a,b,c){c=c?"":a[w](K,"1");b=b[t](".");if(b[r]<5||kc(b[0],c))return a.set(Bb,g),a.set(Cb,g),a.set(Db,g),a.set(Fb,g),a.set(Gb,g),a.set(Jb,g),a.set(Kb,g),a.set(Lb,g),a.set(Mb,g),a.set(Hb,g),a.set(Ib,g),!1;a.set(Bb,b[1]*1);a.set(Cb,b[2]*1);a.set(Db,b[3]*1);tc(a,b.slice(4)[y]("."));return!0},tc=function(a,b){function c(a){return(a=b[ga](a+"=(.*?)(?:\\|utm|$)"))&&a[r]==2?a[1]:g}function d(b,
c){c&&(c=e?G(c):c[t]("%20")[y](" "),a.set(b,c))}b[n]("=")==-1&&(b=G(b));var e=c("utmcvr")=="2";d(Fb,c("utmcid"));d(Gb,c("utmccn"));d(Jb,c("utmcsr"));d(Kb,c("utmcmd"));d(Lb,c("utmctr"));d(Mb,c("utmcct"));d(Hb,c("utmgclid"));d(Ib,c("utmdclid"))},kc=function(a,b){return b?a!=b:!/^\d+$/.test(a)};var fc=function(){this.q=[]};fc[s].add=function(a,b){this.q[j]({name:a,ua:b})};fc[s].execute=function(a){try{for(var b=0;b<this.q[r];b++)this.q[b].ua.call(T,a)}catch(c){}};function vc(a){a.get(Wa)!=100&&a.get(N)%1E4>=a.get(Wa)*100&&a[u]()}function wc(a){xc()&&a[u]()}function yc(a){I[v].protocol=="file:"&&a[u]()}function zc(a){a.get(gb)||a.set(gb,I.title,!0);a.get(fb)||a.set(fb,I[v].pathname+I[v].search,!0)};var Ac=new function(){var a=[];this.set=function(b){a[b]=!0};this.va=function(){for(var b=[],c=0;c<a[r];c++)a[c]&&(b[i.floor(c/6)]^=1<<c%6);for(c=0;c<b[r];c++)b[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"[m](b[c]||0);return b[y]("")+"~"}};function F(a){Ac.set(a)};var T=window,I=document,xc=function(){var a=T._gaUserPrefs;return a&&a.ioo&&a.ioo()},Bc=function(a,b){setTimeout(a,b)},U=function(a){for(var b=[],c=I.cookie[t](";"),a=RegExp("^\\s*"+a+"=\\s*(.*?)\\s*$"),d=0;d<c[r];d++){var e=c[d][ga](a);e&&b[j](e[1])}return b},V=function(a,b,c,d,e){var f;f=xc()?!1:dc(d,c)?!1:!0;if(f){if(b&&T[la].userAgent[n]("Firefox")>=0){b=b[da](/\n|\r/g," ");f=0;for(var k=b[r];f<k;++f){var o=b.charCodeAt(f)&255;if(o==10||o==13)b=b[x](0,f)+"?"+b[x](f+1)}}b&&b[r]>2E3&&(b=b[x](0,
2E3),F(69));a=a+"="+b+"; path="+c+"; ";e&&(a+="expires="+(new Date((new Date).getTime()+e)).toGMTString()+"; ");d&&(a+="domain="+d+";");I.cookie=a}};var Cc,Dc,Ec=function(){if(!Cc){var a={},b=T[la],c=T.screen;a.C=c?c.width+"x"+c.height:"-";a.B=c?c.colorDepth+"-bit":"-";a.language=(b&&(b.language||b.browserLanguage)||"-")[A]();a.javaEnabled=b&&b.javaEnabled()?1:0;a.characterSet=I.characterSet||I.charset||"-";Cc=a}},Fc=function(){Ec();for(var a=Cc,b=T[la],a=b.appName+b.version+a.language+b.platform+b.userAgent+a.javaEnabled+a.C+a.B+(I.cookie?I.cookie:"")+(I.referrer?I.referrer:""),b=a[r],c=T.history[r];c>0;)a+=c--^b++;return D(a)},Gc=function(a){Ec();
var b=Cc;a.set(jb,b.C);a.set(kb,b.B);a.set(nb,b.language);a.set(ob,b.characterSet);a.set(lb,b.javaEnabled);if(a.get(Ka)&&a.get(La)){if(!(b=Dc)){var c,d,e;d="ShockwaveFlash";if((b=(b=T[la])?b.plugins:g)&&b[r]>0)for(c=0;c<b[r]&&!e;c++)d=b[c],d[ia][n]("Shockwave Flash")>-1&&(e=d.description[t]("Shockwave Flash ")[1]);else{d=d+"."+d;try{c=new ActiveXObject(d+".7"),e=c.GetVariable("$version")}catch(f){}if(!e)try{c=new ActiveXObject(d+".6"),e="WIN 6,0,21,0",c.AllowScriptAccess="always",e=c.GetVariable("$version")}catch(k){}if(!e)try{c=
new ActiveXObject(d),e=c.GetVariable("$version")}catch(o){}e&&(e=e[t](" ")[1][t](","),e=e[0]+"."+e[1]+" r"+e[2])}b=e?e:"-"}Dc=b;a.set(mb,Dc)}else a.set(mb,"-")};var W=function(){P(W[s],"push",W[s][j],5);P(W[s],"_createAsyncTracker",W[s].wa,33);P(W[s],"_getAsyncTracker",W[s].xa,34)};W[s].wa=function(a,b){return Z.k(a,b||"")};W[s].xa=function(a){return Z.p(a)};W[s].push=function(a){for(var b=arguments,c=0,d=0;d<b[r];d++)try{if(typeof b[d]==="function")b[d]();else{var e="",f=b[d][0],k=f.lastIndexOf(".");k>0&&(e=f[x](0,k),f=f[x](k+1));var o=e=="_gat"?Z:e=="_gaq"?Hc:Z.p(e);o[f].apply(o,b[d].slice(1))}}catch(l){c++}return c};var Kc=function(){function a(a,b,c,d){g==f[a]&&(f[a]={});g==f[a][b]&&(f[a][b]=[]);f[a][b][c]=d}function b(a,b,c){if(g!=f[a]&&g!=f[a][b])return f[a][b][c]}function c(a,b){if(g!=f[a]&&g!=f[a][b]){f[a][b]=g;var c=!0,d;for(d=0;d<k[r];d++)if(g!=f[a][k[d]]){c=!1;break}c&&(f[a]=g)}}function d(a){var b="",c=!1,d,e;for(d=0;d<k[r];d++)if(e=a[k[d]],g!=e){c&&(b+=k[d]);for(var c=[],f=g,X=g,X=0;X<e[r];X++)if(g!=e[X]){f="";X!=Y&&g==e[X-1]&&(f+=X[p]()+ha);for(var Mc=e[X],Nc="",tb=g,Vb=g,Wb=g,tb=0;tb<Mc[r];tb++)Vb=
Mc[m](tb),Wb=z[Vb],Nc+=g!=Wb?Wb:Vb;f+=Nc;c[j](f)}b+=o+c[y](q)+l;c=!1}else c=!0;return b}var e=this,f=[],k=["k","v"],o="(",l=")",q="*",ha="!",z={"'":"'0"};z[l]="'1";z[q]="'2";z[ha]="'3";var Y=1;e.qa=function(a){return g!=f[a]};e.n=function(){for(var a="",b=0;b<f[r];b++)g!=f[b]&&(a+=b[p]()+d(f[b]));return a};e.pa=function(a){if(a==g)return e.n();for(var b=a.n(),c=0;c<f[r];c++)g!=f[c]&&!a.qa(c)&&(b+=c[p]()+d(f[c]));return b};e.e=function(b,c,d){if(!Ic(d))return!1;a(b,"k",c,d);return!0};e.j=function(b,
c,d){if(!Jc(d))return!1;a(b,"v",c,d[p]());return!0};e.w=function(a,c){return b(a,"k",c)};e.z=function(a,c){return b(a,"v",c)};e.u=function(a){c(a,"k")};e.v=function(a){c(a,"v")};P(e,"_setKey",e.e,89);P(e,"_setValue",e.j,90);P(e,"_getKey",e.w,87);P(e,"_getValue",e.z,88);P(e,"_clearKey",e.u,85);P(e,"_clearValue",e.v,86)};function Ic(a){return typeof a=="string"}function Jc(a){return typeof a!="number"&&(g==Number||!(a instanceof Number))||i.round(a)!=a||a==NaN||a==Infinity?!1:!0};var Lc=function(a){var b=T.gaGlobal;a&&!b&&(T.gaGlobal=b={});return b},Oc=function(){var a=Lc(!0).hid;if(a==h)a=oa(),Lc(!0).hid=a;return a},Pc=function(a){a.set(ib,Oc());var b=Lc();if(b&&b.dh==a.get(K)){var c=b.sid;c&&(c=="0"&&F(112),a.set(vb,c),a.get(pb)&&a.set(ub,c));b=b.vid;a.get(pb)&&b&&(b=b[t]("."),b[1]*1||F(112),a.set(N,b[0]*1),a.set(sb,b[1]*1))}};var Qc,Rc=function(a,b,c){var d=a[w](Da,""),e=a[w](L,"/"),a=a.b(Ea,0);V(b,c,e,d,a)},hc=function(a){var b=a[w](Da,"");a.b(K,1);var c=a[w](L,"/");V("__utma",mc(a),c,b,a.get(Ea));V("__utmb",nc(a),c,b,a.get(Fa));V("__utmc",""+a.b(K,1),c,b);var d=sc(a,!0);d?V("__utmz",d,c,b,a.get(Ga)):V("__utmz","",c,b,-1);(d=pc(a,!1))?V("__utmv",d,c,b,a.get(Ea)):V("__utmv","",c,b,-1)},gc=function(a){var b=a.b(K,1);if(!lc(a,jc(b,U("__utma"))))return a.set(rb,!0),!1;var c=!oc(a,jc(b,U("__utmb")));a.set(yb,c);uc(a,jc(b,
U("__utmz")));qc(a,jc(b,U("__utmv")));Qc=!c;return!0},Sc=function(a){!Qc&&!(U("__utmb")[r]>0)&&(V("__utmd","1",a[w](L,"/"),a[w](Da,""),1E4),U("__utmd")[r]==0&&a[u]())};var Vc=function(a){a.get(N)==g?Tc(a):a.get(rb)&&!a.get($b)?Tc(a):a.get(yb)&&Uc(a)},Wc=function(a){a.get(Eb)&&!a.get(xb)&&(Uc(a),a.set(Cb,a.get(wb)))},Tc=function(a){var b=a.get(Ca);a.set(pb,!0);a.set(N,oa()^Fc(a)&2147483647);a.set(qb,"");a.set(sb,b);a.set(ub,b);a.set(vb,b);a.set(wb,1);a.set(xb,!0);a.set(zb,0);a.set(O,10);a.set(Ab,b);a.set(M,[]);a.set(rb,!1);a.set(yb,!1)},Uc=function(a){a.set(ub,a.get(vb));a.set(vb,a.get(Ca));a.m(wb);a.set(xb,!0);a.set(zb,0);a.set(O,10);a.set(Ab,a.get(Ca));a.set(yb,
!1)};var Xc="daum:q,eniro:search_word,naver:query,pchome:q,images.google:q,google:q,yahoo:p,yahoo:q,msn:q,bing:q,aol:query,aol:encquery,aol:q,lycos:query,ask:q,altavista:q,netscape:query,cnn:query,about:terms,mamma:q,alltheweb:q,voila:rdata,virgilio:qs,live:q,baidu:wd,alice:qs,yandex:text,najdi:q,mama:query,seznam:q,search:q,wp:szukaj,onet:qt,szukacz:q,yam:k,kvasir:q,sesam:q,ozu:q,terra:query,mynet:q,ekolay:q,rambler:query".split(","),cd=function(a){if(a.get(Ma)&&!a.get($b)){for(var b=!C(a.get(Fb))||!C(a.get(Jb))||
!C(a.get(Hb))||!C(a.get(Ib)),c={},d=0;d<Yc[r];d++){var e=Yc[d];c[e]=a.get(e)}d=va(I[v].href,a.get(Ia));if(!(sa(d.c.get(a.get(Va)))=="1"&&b)&&(!Zc(a,d)&&!$c(a)&&!b&&a.get(xb)&&a.get(xb)&&ad(a,g,"(direct)",g,g,"(direct)","(none)",g,g),a.set(Eb,bd(a,c)),b=a.get(Jb)=="(direct)"&&a.get(Gb)=="(direct)"&&a.get(Kb)=="(none)",a.get(Eb)||a.get(xb)&&!b))a.set(Bb,a.get(Ca)),a.set(Cb,a.get(wb)),a.m(Db)}},Zc=function(a,b){function c(c,d){var d=d||"-",e=sa(b.c.get(a.get(c)));return e&&e!="-"?G(e):d}var d=sa(b.c.get(a.get(Oa)))||
"-",e=sa(b.c.get(a.get(Ra)))||"-",f=sa(b.c.get(a.get(Qa)))||"-",k=sa(b.c.get("dclid"))||"-",o=c(Pa,"(not set)"),l=c(Sa,"(not set)"),q=c(Ta),ha=c(Ua);if(C(d)&&C(f)&&C(k)&&C(e))return!1;if(C(q)){var z=xa(a.get(hb),a.get(L)),z=va(z,!0);(z=dd(a,z))&&!C(z[1]&&!z[2])&&(q=z[1])}ad(a,d,e,f,k,o,l,q,ha);return!0},$c=function(a){var b=xa(a.get(hb),a.get(L)),c=va(b,!0);if(!(b!=g&&b!=h&&b!=""&&b!="0"&&b!="-"&&b[n]("://")>=0)||c&&c[ja][n]("google")>-1&&c.c.contains("q")&&c.path=="cse")return!1;if((b=dd(a,c))&&
!b[2])return ad(a,g,b[0],g,g,"(organic)","organic",b[1],g),!0;else if(b)return!1;if(a.get(xb))a:{for(var b=a.get(bb),d=ua(c[ja]),e=0;e<b[r];++e)if(d[n](b[e])>-1){a=!1;break a}ad(a,g,d,g,g,"(referral)","referral",g,"/"+c.path);a=!0}else a=!1;return a},dd=function(a,b){for(var c=a.get($a),d=0;d<c[r];++d){var e=c[d][t](":");if(b[ja][n](e[0][A]())>-1){var f=H(b.c.get(e[1]));if(f){a:{for(var c=f,d=a.get(ab),c=G(c)[A](),k=0;k<d[r];++k)if(c==d[k]){c=!0;break a}c=!1}return[e[0],f,c]}}}return h},ad=function(a,
b,c,d,e,f,k,o,l){a.set(Fb,b);a.set(Jb,c);a.set(Hb,d);a.set(Ib,e);a.set(Gb,f);a.set(Kb,k);a.set(Lb,o);a.set(Mb,l)},Yc=[Gb,Fb,Hb,Ib,Jb,Kb,Lb,Mb],bd=function(a,b){function c(a){a=(""+a)[t]("+")[y]("%20");return a=a[t](" ")[y]("%20")}for(var d=0;d<Yc[r];d++){var e=Yc[d],f=b[e]||"-",e=a.get(e)||"-";if(c(f)!=c(e))return!0}return!1};var fd=function(a){ed(a,I[v].href)?(a.set($b,!0),F(12)):a.set($b,!1)},ed=function(a,b){if(!a.get(Ha))return!1;var c=va(b,a.get(Ia)),d=H(c.c.get("__utma")),e=H(c.c.get("__utmb")),f=H(c.c.get("__utmc")),k=H(c.c.get("__utmx")),o=H(c.c.get("__utmz")),l=H(c.c.get("__utmv")),c=H(c.c.get("__utmk"));if(D(""+d+e+f+k+o+l)!=c){d=G(d);e=G(e);f=G(f);k=G(k);a:{for(var f=d+e+f+k,q=0;q<3;q++){for(var ha=0;ha<3;ha++){if(c==D(f+o+l)){F(127);c=[o,l];break a}var z=o[da](/ /g,"%20"),Y=l[da](/ /g,"%20");if(c==D(f+z+Y)){F(128);
c=[z,Y];break a}z=z[da](/\+/g,"%20");Y=Y[da](/\+/g,"%20");if(c==D(f+z+Y)){F(129);c=[z,Y];break a}o=G(o)}l=G(l)}c=g}if(!c)return!1;o=c[0];l=c[1]}if(!lc(a,d,!0))return!1;oc(a,e,!0);uc(a,o,!0);qc(a,l,!0);gd(a,k,!0);return!0},id=function(a,b,c){var d;d=mc(a)||"-";var e=nc(a)||"-",f=""+a.b(K,1)||"-",k=hd(a)||"-",o=sc(a,!1)||"-",a=pc(a,!1)||"-",l=D(""+d+e+f+k+o+a),q=[];q[j]("__utma="+d);q[j]("__utmb="+e);q[j]("__utmc="+f);q[j]("__utmx="+k);q[j]("__utmz="+o);q[j]("__utmv="+a);q[j]("__utmk="+l);d=q[y]("&");
if(!d)return b;e=b[n]("#");return c?e<0?b+"#"+d:b+"&"+d:(c="",f=b[n]("?"),e>0&&(c=b[x](e),b=b[x](0,e)),f<0?b+"?"+d+c:b+"&"+d+c)};var jd="|",ld=function(a,b,c,d,e,f,k,o,l){var q=kd(a,b);q||(q={},a.get(cb)[j](q));q.id_=b;q.affiliation_=c;q.total_=d;q.tax_=e;q.shipping_=f;q.city_=k;q.state_=o;q.country_=l;q.items_=q.items_||[];return q},md=function(a,b,c,d,e,f,k){var a=kd(a,b)||ld(a,b,"",0,0,0,"","",""),o;a:{if(a&&a.items_){o=a.items_;for(var l=0;l<o[r];l++)if(o[l].sku_==c){o=o[l];break a}}o=h}l=o||{};l.transId_=b;l.sku_=c;l.name_=d;l.category_=e;l.price_=f;l.quantity_=k;o||a.items_[j](l);return l},kd=function(a,b){for(var c=
a.get(cb),d=0;d<c[r];d++)if(c[d].id_==b)return c[d];return h};var nd,od=function(a){var f;var e;if(!nd){var b;b=I[v].hash;var c=T[ia],d=/^#?gaso=([^&]*)/;if(f=(e=(b=b&&b[ga](d)||c&&c[ga](d))?b[1]:H(U("GASO")),b=e)&&b[ga](/^(?:\|([-0-9a-z.]{1,40})\|)?([-.\w]{10,1200})$/i),c=f)if(Rc(a,"GASO",""+b),Z._gasoDomain=a.get(Da),Z._gasoCPath=a.get(L),b="https://"+((c[1]||"www")+".google.com")+"/analytics/reporting/overlay_js?gaso="+c[2]+"&"+oa())a=I.createElement("script"),a.type="text/javascript",a.async=!0,a.src=b,a.id="_gasojs",a.onload=g,b=I.getElementsByTagName("script")[0],
b.parentNode.insertBefore(a,b);nd=!0}};var gd=function(a,b,c){c&&(b=G(b));c=a.b(K,1);b=b[t](".");!(b[r]<2)&&/^\d+$/.test(b[0])&&(b[0]=""+c,Rc(a,"__utmx",b[y](".")))},hd=function(a,b){var c=jc(a.get(K),U("__utmx"));c=="-"&&(c="");return b?E(c):c};var sd=function(a,b){if(a.b(N,0)%100>=a.b(Zb,0))return!1;var c=pd();c==g&&(c=qd());if(c==g||c==Infinity||isNaN(c))return!1;c>0?b(rd(c)):qa(T,"load",function(){sd(a,b)},!1);return!0},rd=function(a){var b=new Kc,c=i.min(i.floor(a/100),5E3);b.e(14,1,c>0?c+"00":"0");b.j(14,1,a);return b},pd=function(){var a=T.performance||T.webkitPerformance;return(a=a&&a.timing)&&a.loadEventStart-a.fetchStart},qd=function(){if(T.top==T){var a=T.external,b=a&&a.onloadT;a&&!a.isValidLoadTime&&(b=g);b>2147483648&&(b=g);
b>0&&a.setPageReadyTime();return b}};var Q=function(a,b,c){function d(a){return function(b){if((b=b.get(ac)[a])&&b[r])for(var c=cc(e,a),d=0;d<b[r];d++)b[d].call(e,c)}}var e=this;this.a=new ic;this.get=function(a){return this.a.get(a)};this.set=function(a,b,c){this.a.set(a,b,c)};this.set(za,b||"UA-XXXXX-X");this.set(Ba,a||"");this.set(Aa,c||"");this.set(Ca,i.round((new Date).getTime()/1E3));this.set(L,"/");this.set(Ea,63072E6);this.set(Ga,15768E6);this.set(Fa,18E5);this.set(Ha,!1);this.set(Za,50);this.set(Ia,!1);this.set(Ja,!0);this.set(Ka,
!0);this.set(La,!0);this.set(Ma,!0);this.set(Na,!0);this.set(Pa,"utm_campaign");this.set(Oa,"utm_id");this.set(Qa,"gclid");this.set(Ra,"utm_source");this.set(Sa,"utm_medium");this.set(Ta,"utm_term");this.set(Ua,"utm_content");this.set(Va,"utm_nooverride");this.set(Wa,100);this.set(Zb,10);this.set(Xa,"/__utm.gif");this.set(Ya,1);this.set(cb,[]);this.set(M,[]);this.set($a,Xc);this.set(ab,[]);this.set(bb,[]);this.r("auto");this.set(hb,I.referrer);this.set(ac,{hit:[],load:[]});this.a.g("0",fd);this.a.g("1",
Vc);this.a.g("2",cd);this.a.g("3",Wc);this.a.g("4",d("load"));this.a.g("5",od);this.a.d("A",wc);this.a.d("B",yc);this.a.d("C",Vc);this.a.d("D",vc);this.a.d("E",ec);this.a.d("F",td);this.a.d("G",Sc);this.a.d("H",zc);this.a.d("I",Gc);this.a.d("J",Pc);this.a.d("K",d("hit"));this.a.d("L",ud);this.a.d("M",vd);this.get(Ca)===0&&F(111);this.a.G()};B=Q[s];B.h=function(){var a=this.get(db);a||(a=new Kc,this.set(db,a));return a};
B.oa=function(a){for(var b in a){var c=a[b];a.hasOwnProperty(b)&&typeof c!="function"&&this.set(b,c,!0)}};B.ka=function(a){a&&a!=g&&(a.constructor+"")[n]("String")>-1?(F(13),this.set(fb,a,!0)):typeof a==="object"&&a!==h&&this.oa(a);this.a.f("page")};B.t=function(a,b,c,d,e){if(a==""||!Ic(a)||b==""||!Ic(b))return!1;if(c!=g&&!Ic(c))return!1;if(d!=g&&!Jc(d))return!1;this.set(Qb,a,!0);this.set(Rb,b,!0);this.set(Sb,c,!0);this.set(Tb,d,!0);this.set(Pb,!!e,!0);this.a.f("event");return!0};
B.la=function(a,b,c,d){if(!a||!b)return!1;this.set(Ub,a[x](0,15),!0);this.set(Xb,b[x](0,15),!0);this.set(Yb,c||I[v].href,!0);d&&this.set(fb,d,!0);this.a.f("social");return!0};B.ja=function(){var a=this;return sd(this.a,function(b){a.s(b)})};B.ma=function(){this.a.f("trans")};B.s=function(a){this.set(eb,a,!0);this.a.f("event")};B.S=function(a){this.l();var b=this;return{_trackEvent:function(c,d,e){F(91);b.t(a,c,d,e)}}};B.V=function(a){return this.get(a)};
B.da=function(a,b){if(a)if(a!=g&&(a.constructor+"")[n]("String")>-1)this.set(a,b);else if(typeof a=="object")for(var c in a)a.hasOwnProperty(c)&&this.set(c,a[c])};B.addEventListener=function(a,b){var c=this.get(ac)[a];c&&c[j](b)};B.removeEventListener=function(a,b){for(var c=this.get(ac)[a],d=0;c&&d<c[r];d++)if(c[d]==b){c.splice(d,1);break}};B.X=function(){return"5.1.5"};B.r=function(a){this.get(Ja);a=a=="auto"?ua(I.domain):!a||a=="-"||a=="none"?"":a[A]();this.set(Da,a)};
B.ba=function(a){this.set(Ja,!!a)};B.W=function(a,b){return id(this.a,a,b)};B.link=function(a,b){if(this.a.get(Ha)&&a){var c=id(this.a,a,b);I[v].href=c}};B.aa=function(a,b){this.a.get(Ha)&&a&&a.action&&(a.action=id(this.a,a.action,b))};
B.ea=function(){this.l();var a=this.a,b=I.getElementById?I.getElementById("utmtrans"):I.utmform&&I.utmform.utmtrans?I.utmform.utmtrans:h;if(b&&b[fa]){a.set(cb,[]);for(var b=b[fa][t]("UTM:"),c=0;c<b[r];c++){b[c]=na(b[c]);for(var d=b[c][t](jd),e=0;e<d[r];e++)d[e]=na(d[e]);"T"==d[0]?ld(a,d[1],d[2],d[3],d[4],d[5],d[6],d[7],d[8]):"I"==d[0]&&md(a,d[1],d[2],d[3],d[4],d[5],d[6])}}};B.L=function(a,b,c,d,e,f,k,o){return ld(this.a,a,b,c,d,e,f,k,o)};B.J=function(a,b,c,d,e,f){return md(this.a,a,b,c,d,e,f)};
B.fa=function(a){jd=a||"|"};B.ca=function(a,b,c,d){var e=this.a;if(a<=0||a>e.get(Za))a=!1;else if(!b||!c||E(b)[r]+E(c)[r]>64)a=!1;else{d!=1&&d!=2&&(d=3);var f={};ca(f,b);f.value=c;f.scope=d;e.get(M)[a]=f;a=!0}a&&this.a.i();return a};B.U=function(a){this.a.get(M)[a]=g;this.a.i()};B.Y=function(a){return(a=this.a.get(M)[a])&&a[ka]==1?a[fa]:g};B.ha=function(a,b,c){this.h().e(a,b,c)};B.ia=function(a,b,c){this.h().j(a,b,c)};B.Z=function(a,b){return this.h().w(a,b)};
B.$=function(a,b){return this.h().z(a,b)};B.P=function(a){this.h().u(a)};B.Q=function(a){this.h().v(a)};B.T=function(){return new Kc};B.H=function(a){a&&this.get(ab)[j](a[A]())};B.M=function(){this.set(ab,[])};B.I=function(a){a&&this.get(bb)[j](a[A]())};B.N=function(){this.set(bb,[])};B.K=function(a,b,c){if(a&&b){var d=this.get($a);d.splice(c?0:d[r],0,a+":"+b[A]())}};B.O=function(){this.set($a,[])};
B.R=function(a){this.a[ea]();var b=this.get(L),c=hd(this.a);this.set(L,a);this.a.i();gd(this.a,c);this.set(L,b)};B.l=function(){this.a[ea]()};B.ga=function(a){a&&a!=""&&(this.set(qb,a),this.a.f("var"))};var td=function(a){a.get(Nb)!=="trans"&&a.b(zb,0)>=500&&a[u]();if(a.get(Nb)==="event"){var b=(new Date).getTime(),c=a.b(Ab,0),d=a.b(vb,0),c=i.floor(0.2*((b-(c!=d?c:c*1E3))/1E3));c>0&&(a.set(Ab,b),a.set(O,i.min(10,a.b(O,0)+c)));a.b(O,0)<=0&&a[u]()}},vd=function(a){a.get(Nb)==="event"&&a.set(O,i.max(0,a.b(O,10)-1))};var wd=function(){var a=[];this.add=function(b,c,d){d&&(c=E(""+c));a[j](b+"="+c)};this.toString=function(){return a[y]("&")}},xd=function(a,b){(b||a.get(Ya)!=2)&&a.m(zb)},yd=function(a,b){b.add("utmwv","5.1.5");b.add("utms",a.get(zb));b.add("utmn",oa());var c=I[v].hostname;C(c)||b.add("utmhn",c,!0);c=a.get(Wa);c!=100&&b.add("utmsp",c,!0)},Ad=function(a,b){b.add("utmac",a.get(za));a.get(Pb)&&b.add("utmni",1);zd(a,b);Z.o&&b.add("aip",1);b.add("utmu",Ac.va())},zd=function(a,b){function c(a,b){b&&d[j](a+
"="+b+";")}var d=[];c("__utma",mc(a));c("__utmz",sc(a,!1));c("__utmv",pc(a,!0));c("__utmx",hd(a));b.add("utmcc",d[y]("+"),!0)},Bd=function(a,b){a.get(Ka)&&(b.add("utmcs",a.get(ob),!0),b.add("utmsr",a.get(jb)),b.add("utmsc",a.get(kb)),b.add("utmul",a.get(nb)),b.add("utmje",a.get(lb)),b.add("utmfl",a.get(mb),!0))},Cd=function(a,b){a.get(Na)&&a.get(gb)&&b.add("utmdt",a.get(gb),!0);b.add("utmhid",a.get(ib));b.add("utmr",xa(a.get(hb),a.get(L)),!0);b.add("utmp",E(a.get(fb),!0),!0)},Dd=function(a,b){for(var c=
a.get(db),d=a.get(eb),e=a.get(M)||[],f=0;f<e[r];f++){var k=e[f];k&&(c||(c=new Kc),c.e(8,f,k[ia]),c.e(9,f,k[fa]),k[ka]!=3&&c.e(11,f,""+k[ka]))}!C(a.get(Qb))&&!C(a.get(Rb))&&(c||(c=new Kc),c.e(5,1,a.get(Qb)),c.e(5,2,a.get(Rb)),e=a.get(Sb),e!=g&&c.e(5,3,e),e=a.get(Tb),e!=g&&c.j(5,1,e));c?b.add("utme",c.pa(d),!0):d&&b.add("utme",d.n(),!0)},Ed=function(a,b,c){var d=new wd;xd(a,c);yd(a,d);d.add("utmt","tran");d.add("utmtid",b.id_,!0);d.add("utmtst",b.affiliation_,!0);d.add("utmtto",b.total_,!0);d.add("utmttx",
b.tax_,!0);d.add("utmtsp",b.shipping_,!0);d.add("utmtci",b.city_,!0);d.add("utmtrg",b.state_,!0);d.add("utmtco",b.country_,!0);!c&&Ad(a,d);return d[p]()},Fd=function(a,b,c){var d=new wd;xd(a,c);yd(a,d);d.add("utmt","item");d.add("utmtid",b.transId_,!0);d.add("utmipc",b.sku_,!0);d.add("utmipn",b.name_,!0);d.add("utmiva",b.category_,!0);d.add("utmipr",b.price_,!0);d.add("utmiqt",b.quantity_,!0);!c&&Ad(a,d);return d[p]()},Gd=function(a,b){var c=a.get(Nb);if(c=="page")c=new wd,xd(a,b),yd(a,c),Dd(a,c),
Bd(a,c),Cd(a,c),!b&&Ad(a,c),c=[c[p]()];else if(c=="event")c=new wd,xd(a,b),yd(a,c),c.add("utmt","event"),Dd(a,c),Bd(a,c),Cd(a,c),!b&&Ad(a,c),c=[c[p]()];else if(c=="var")c=new wd,xd(a,b),yd(a,c),c.add("utmt","var"),!b&&Ad(a,c),c=[c[p]()];else if(c=="trans")for(var c=[],d=a.get(cb),e=0;e<d[r];++e){c[j](Ed(a,d[e],b));for(var f=d[e].items_,k=0;k<f[r];++k)c[j](Fd(a,f[k],b))}else c=="social"?b?c=[]:(c=new wd,xd(a,b),yd(a,c),c.add("utmt","social"),c.add("utmsn",a.get(Ub),!0),c.add("utmsa",a.get(Xb),!0),
c.add("utmsid",a.get(Yb),!0),Dd(a,c),Bd(a,c),Cd(a,c),Ad(a,c),c=[c[p]()]):c=[];return c},ud=function(a){var b,c=a.get(Ob),d=a.get(Ya);if(d==0||d==2){var e=a.get(Xa)+"?";b=Gd(a,!0);for(var f=0,k=b[r];f<k;f++)Hd(b[f],d!=2&&f==k-1&&c,e,!0)}if(d==1||d==2){b=Gd(a);f=0;for(k=b[r];f<k;f++)try{Hd(b[f],f==k-1&&c)}catch(o){var d=a,e=o,l=new wd;l.add("err",e[ia]);l.add("max",e.message);l.add("len",e.D);l.add("utmwv","5.1.5e");l.add("utmac",d.get(za));l.add("utmn",oa());Z.o&&l.add("aip",1);Hd(l[p]())}}};var Id="https:"==I[v].protocol?"https://ssl.google-analytics.com":"http://www.google-analytics.com",Jd=function(a){ca(this,"len");this.message=8192;this.D=a},Kd=function(a){ca(this,"ff2post");this.message=2036;this.D=a},Hd=function(a,b,c,d){b=b||pa;if(d||a[r]<=2036)Ld(a,b,c);else if(a[r]<=8192){if(T[la].userAgent[n]("Firefox")>=0&&![].reduce)throw new Kd(a[r]);Md(a,b)||Nd(a,b)}else throw new Jd(a[r]);},Ld=function(a,b,c){var c=c||Id+"/__utm.gif?",d=new Image(1,1);d.src=c+a;d.onload=function(){d.onload=
h;b()}},Md=function(a,b){var c,d=Id+"/p/__utm.gif",e=T.XDomainRequest;if(e)c=new e,c.open("POST",d);else if(e=T.XMLHttpRequest)e=new e,"withCredentials"in e&&(c=e,c.open("POST",d,!0),c.setRequestHeader("Content-Type","text/plain"));if(c)return c.onreadystatechange=function(){c.readyState==4&&(b(),c=h)},c.send(a),!0},Nd=function(a,b){if(I.body){a=aa(a);try{var c=I.createElement('<iframe name="'+a+'"></iframe>')}catch(d){c=I.createElement("iframe"),ca(c,a)}c.height="0";c.width="0";c.style.display="none";
c.style.visibility="hidden";var e=I[v],e=Id+"/u/post_iframe.html#"+aa(e.protocol+"//"+e[ja]+"/favicon.ico"),f=function(){c.src="";c.parentNode&&c.parentNode.removeChild(c)};qa(T,"beforeunload",f);var k=!1,o=0,l=function(){if(!k){try{if(o>9||c.contentWindow[v][ja]==I[v][ja]){k=!0;f();ra(T,"beforeunload",f);b();return}}catch(a){}o++;setTimeout(l,200)}};qa(c,"load",l);I.body.appendChild(c);c.src=e}else Bc(function(){Nd(a,b)},100)};var $=function(){this.o=!1;this.A={};this.ra=0;this._gasoCPath=this._gasoDomain=g;P($[s],"_createTracker",$[s].k,55);P($[s],"_getTracker",$[s].ta,0);P($[s],"_getTrackerByName",$[s].p,51);P($[s],"_anonymizeIp",$[s].sa,16);bc()};$[s].ta=function(a,b){return this.k(a,g,b)};$[s].k=function(a,b,c){b&&F(23);c&&F(67);b==g&&(b="~"+Z.ra++);return Z.A[b]=new Q(b,a,c)};$[s].p=function(a){a=a||"";return Z.A[a]||Z.k(g,a)};$[s].sa=function(){this.o=!0};var Od=function(a){if(I.webkitVisibilityState=="prerender")return!1;a();return!0};var Z=new $;var Pd=T._gat;Pd&&typeof Pd._getTracker=="function"?Z=Pd:T._gat=Z;var Hc=new W;(function(a){if(!Od(a)){F(123);var b=!1,c=function(){!b&&Od(a)&&(F(124),b=!0,ra(I,"webkitvisibilitychange",c))};qa(I,"webkitvisibilitychange",c)}})(function(){var a=T._gaq,b=!1;if(a&&typeof a[j]=="function"&&(b=Object[s][p].call(Object(a))=="[object Array]",!b)){Hc=a;return}T._gaq=Hc;b&&Hc[j].apply(Hc,a)});})();
d=function(a,b,c){var d=new wd;xd(a,c);yd(a,d);d.add("utmt","tran");d.add("utmtid",b.id_,!0);d.add("utmtst",b.affiliation_,!0);d.add("utmtto",b.total_,!0);d.add("utmttx",
b.tax_,!0);d.add("utmtsp",b.shipping_,!0);d.add("utmtci",b.city_,!0);d.add("utmtrg",b.state_,!0);d.add("utmtco",b.country_,!0);!c&&Ad(a,d);return d[p]()},Fd=function(a,b,c){var d=new wd;xd(a,c);yd(a,d);d.add("utmt","item");d.add("utmtid",b.transId_,!0);d.add("utmipc",b.sku_,!0);d.add("utmipn",b.name_,!0);d.add("utmiva",b.category_,!0);d.add("utmipr",b.price_,!0);d.add("utmiqt",b.quantity_,!0);!c&&Ad(a,d);return d[p]()},Gd=function(a,b){var c=a.get(Nb);if(c=="page")c=new wd,xd(a,b),yd(a,c),Dd(a,c),
Bd(a,c),Cd(a,c),!b&&Ad(a,c),c=[c[p]()];else if(c=="event")c=new wd,xd(a,b),yd(a,c),c.add("utmt","event"),Dd(a,c),Bd(a,c),Cd(a,c),!b&&Ad(a,c),c=[c[p]()];else if(c=="var")c=new wd,xd(a,b),yd(a,c),c.add("utmt","var"),!b&&Ad(a,c),c=[c[p]()];else if(c=="trans")for(var c=[],d=a.get(cb),e=0;e<d[r];++e){c[j](Ed(a,d[e],b));for(var f=d[e].items_,k=0;k<f[r];++k)c[j](Fd(a,f[k],b))}else c=="social"?b?c=[]:(c=new wd,xd(a,b),yd(a,c),c.add("utmt","social"),c.add("utmsn",a.get(Ub),!0),c.add("utmsa",a.get(Xb),!0),
c.add("utmsid",a.get(Yb),!0),Dd(a,c),Bd(a,c),Cd(a,c),Ad(a,c),c=[c[p]()]):c=[];return c},ud=function(a){var b,c=a.get(Ob),d=a.get(Ya);if(d==0||d==2){var e=a.get(Xa)+"?";b=Gd(a,!0);for(var f=0,k=b[r];f<k;f++)Hd(b[f],d!=2&&f==k-1&&c,e,!0)}if(d==1||d==2){b=Gd(a);f=0;for(k=b[r];f<k;f++)try{Hd(b[f],f==k-1&&c)}catch(o){var d=a,e=o,l=new wd;l.add("err",e[ia]);l.add("max",e.message);l.add("len",e.D);l.add("utmwv","5.1.5e");l.add("utmac",d.get(za));l.add("utmn",oa());Z.o&&l.add("aip",1);Hd(l[p]())}}};var Id="https:"==I[v].protocol?"https://ssl.google-analytics.com":"http://www.google-analytics.com",Jd=function(a){ca(this,"len");this.message=8192;this.D=a},Kd=function(a){ca(this,"ff2post");this.message=2036;this.D=a},Hd=function(a,b,c,d){b=b||pa;if(d||a[r]<=2036)Ld(a,b,c);else if(a[r]<=8192){if(T[la].userAgent[n]("Firefox")>=0&&![].reduce)throw new Kd(a[r]);Md(a,b)||Nd(a,b)}else throw new Jd(a[r]);},Ld=function(a,b,c){var c=c||Id+"/__utm.gif?",d=new Image(1,1);d.src=c+a;d.onload=function(){d.onload=
h;b()}},Md=function(a,b){var c,d=Id+"/p/__utm.gif",e=T.XDomainRequest;if(e)c=new e,c.open("POST",d);else if(e=T.XMLHttpRequest)e=new e,"withCredentials"in e&&(c=e,c.open("POST",d,!0),c.setRequestHeader("Content-Type","text/plain"));if(c)return c.onreadystatechange=function(){c.readyState==4&&(b(),c=h)},c.send(a),!0},Nd=function(a,b){if(I.body){a=aa(a);try{var c=I.createElement('<iframe name="'+a+'"></iframe>')}catch(d){c=I.createElement("iframe"),ca(c,a)}c.height="0";c.width="0";c.style.display="none";
c.style.visibility="hidden";var e=I[v],e=Id+"/u/post_iframe.html#"+aa(e.protocol+"//"+e[ja]+"/favicon.ico"),f=function(){c.src="";c.parentNode&&c.parentNode.removeChild(c)};qa(T,"beforeunload",f);var k=!1,o=0,l=function(){if(!k){try{if(o>9||c.contentWindow[v][ja]==I[v][ja]){k=!0;f();ra(T,"beforeunload",f);b();return}}catch(a){}o++;setTimeout(l,200)}};qa(c,"load",l);I.body.appendChild(c);c.src=e}else Bc(function(){Nd(a,b)},100)};var $=function(){this.o=!1;this.A={};this.ra=0;this._gasoCPath=this._gasoDomain=g;P($[s],"_createTracker",$[s].k,55);P($[s],"_getTracker",$[s].ta,0);P($[s],"_getTrackerByName",$[s].p,51);P($[s],"_anonymizeIp",$[s].sa,16);bc()};$[s].ta=function(a,b){return this.k(a,g,b)};$[s].k=function(a,b,c){b&&F(23);c&&F(67);b==g&&(b="~"+Z.ra++);return Z.A[b]=new Q(b,a,c)};$[s].p=function(a){a=a||"";return Z.A[a]||Z.k(g,a)};$[s].sa=function(){this.o=!0};var Od=function(a){if(I.webkitVisibilityState=="prerender")return!1;a();return!0};var Z=new $;var Pd=T._gat;Pd&&typeof Pd._getTracker=="function"?Z=Pd:T._gat=Z;var Hc=new W;(function(a){if(!Od(a)){F(123);var b=!1,c=function(){!b&&Od(a)&&(F(124),b=!0,ra(I,"webkitvisibilitychange",c))};qa(I,"webkitvisibilitychange",c)}})(function(){var a=T._gaq,b=!1;if(a&&typeof a[j]=="function"&&(b=Object[s][p].call(Object(a))=="[object Array]",!b)){Hc=a;return}T._gaq=Hc;b&&Hc[j].apply(Hc,a)});})();
