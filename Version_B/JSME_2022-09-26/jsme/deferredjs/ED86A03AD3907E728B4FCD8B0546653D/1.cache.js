$wnd.jsme.runAsyncCallback1('var y7="Assignment of aromatic double bonds failed";function z7(a,b){var c;c=a.A[b];return 3<=c&&4>=c||11<=c&&13>=c||19<=c&&31>=c||37<=c&&51>=c||55<=c&&84>=c||87<=c&&103>=c}function Z(a,b){var c,d;c=b;for(d=0;0!=b;)0==a.c&&(a.e=(a.a[++a.d]&63)<<11,a.c=6),d|=(65536&a.e)>>16-c+b,a.e<<=1,--b,--a.c;return d}function A7(a,b,c){a.c=6;a.d=c;a.a=b;a.e=(b[a.d]&63)<<11}function B7(a,b){var c,d;c=~~(b/2);(d=a>=c)&&(a-=c);c=~~(b/32)*a/(c-a);return d?-c:c}function C7(){this.b=!0}x(24,1,{},C7);_.a=null;_.b=!1;\n_.c=0;_.d=0;_.e=0;_.f=null;function D7(a,b){var c,d,e;1==a.b.E[b]&&po(a.b,b,2);for(d=0;2>d;++d){c=D(a.b,d,b);zr(a.b,c,!1);for(e=0;e<a.b.f[c];++e)a.a[ro(a.b,c,e)]=!1}}function E7(a){var b,c,d,e,f,g,h;do{h=!1;for(c=0;c<a.b.d;++c)if(a.a[c]){f=!1;for(e=0;2>e;++e){b=!1;d=D(a.b,e,c);for(g=0;g<a.b.f[d];++g)if(c!=ro(a.b,d,g)&&a.a[ro(a.b,d,g)]){b=!0;break}if(!b){f=!0;break}}f&&(h=!0,D7(a,c))}}while(h)}function F7(){}x(29,1,{},F7);_.a=null;_.b=null;\nfunction G7(a,b,c,d){a.b||(4==a.i||3==a.i&&-1!=a.c?a.b=!0:(a.j[a.i]=d,a.f[a.i]=b,a.k[a.i]=c,++a.i))}\nfunction H7(a,b){var c,d,e,f;if(a.b)return 3;-1!=a.c&&(a.c=b[a.c]);for(e=0;e<a.i;++e)2147483647!=a.f[e]&&(a.f[e]=b[a.f[e]]);if(-1==a.c&&0==a.d){d=2147483647;f=-1;for(e=0;e<a.i;++e)d>a.k[e]&&(d=a.k[e],f=e);a.c=a.f[f];for(e=f+1;e<a.i;++e)a.f[e-1]=a.f[e],a.k[e-1]=a.k[e],a.j[e-1]=a.j[e];--a.i}f=(-1==a.c?0:1)+a.d+a.i;if(4<f||3>f)return 3;c=-1==a.c&&1==a.d||-1!=a.c&&Ur(a.n.b,a.c);d=-1;for(e=0;e<a.i;++e)if(a.j[e]){if(-1!=d||c)return 3;d=e}f=!1;if(-1!=d)for(e=0;e<a.i;++e)!a.j[e]&&a.f[d]<a.f[e]&&(f=!f);d=\n!1;if(-1!=a.c&&!c)for(e=0;e<a.i;++e)a.c<a.f[e]&&(d=!d);e=a.f;c=a.k;var g,h,j;h=!1;for(g=1;g<a.i;++g)for(j=0;j<g;++j)e[j]>e[g]&&(h=!h),c[j]>c[g]&&(h=!h);return a.e^h^d^f?2:1}function I7(a,b,c,d,e,f){this.n=a;0!=d&&1!=d?this.b=!0:(this.a=b,this.c=c,this.d=d,this.e=f,this.i=0,this.j=C(oo,en,-1,4,2),this.f=C(B,v,-1,4,1),this.k=C(B,v,-1,4,1),-1!=c&&1==d&&(G7(this,2147483647,e,!0),this.d=0))}x(30,1,{},I7);_.a=0;_.b=!1;_.c=0;_.d=0;_.e=!1;_.f=null;_.i=0;_.j=null;_.k=null;_.n=null;\nfunction J7(a){no(a,15);if(a.b){var a=a.b,b;for(b=0;b<a.K.c;++b)if(0==(a.K.s[b]&67108864)&&3==a.V[b]){var c=a.K;c.s[b]|=67108864;c.N&=3}for(b=0;b<a.K.d;++b)3==a.k[b]&&2==vo(a.K,b)&&po(a.K,b,26)}}function K7(){this.e=1}x(33,1,{},K7);\nfunction L7(a){var b;if(null==a||0==a.length||0==ts(a).length)return sY(new YN,m,!0);b=new Hs;var c=new F7,d=lV(ts(a)),e,f,g,h,j,l,n,q,r,t,w,u,y,F,H,s,P,ea,W,$,oa,Fa,Lb,mb,S,Qa,Mb,T,Ba,ia,ja,hb,Q,Xc,Ga,ic,vc;c.b=b;ir(c.b);Lb=null;h=C(B,v,-1,64,1);h[0]=-1;Qa=C(B,v,-1,64,1);Mb=C(B,v,-1,64,1);for(y=0;64>y;++y)Qa[y]=-1;f=S=0;T=mb=ia=!1;l=0;Ba=d.length;for(j=1;32>=d[S];)++S;for(;S<Ba;)if(ja=d[S++]&65535,M7(ja)||42==ja){g=0;w=-1;F=Fa=H=!1;if(ia)82==ja&&YM(d[S]&65535)?(ea=null!=String.fromCharCode(d[S+1]&\n65535).match(/\\d/)?2:1,g=Lr(jr(d,S-1,1+ea)),S+=ea):(s=String.fromCharCode(d[S]&65535).toLowerCase().charCodeAt(0)==(d[S]&65535)&&M7(d[S]&65535)?2:1,g=Lr(jr(d,S-1,s)),S+=s-1,w=0),64==d[S]&&(++S,64==d[S]&&(F=!0,++S),Fa=!0),72==d[S]&&(++S,w=1,YM(d[S]&65535)&&(w=d[S]-48,++S));else if(42==ja)g=6,H=!0;else switch(String.fromCharCode(ja).toUpperCase().charCodeAt(0)){case 66:S<Ba&&114==d[S]?(g=35,++S):g=5;break;case 67:S<Ba&&108==d[S]?(g=17,++S):g=6;break;case 70:g=9;break;case 73:g=53;break;case 78:g=7;\nbreak;case 79:g=8;break;case 80:g=15;break;case 83:g=16}if(0==g)throw new pp("SmilesParser: unknown element label found");e=dr(c.b,g);H?(T=!0,Cr(c.b,e,1)):zr(c.b,e,String.fromCharCode(ja).toLowerCase().charCodeAt(0)==ja&&M7(ja));if(-1!=w&&1!=g){n=C(Qp,En,-1,1,1);n[0]=w<<24>>24;var Ia=c.b,Za=e,Ja=n;null!=Ja&&0==Ja.length&&(Ja=null);null==Ja?null!=Ia.r&&(Ia.r[Za]=null):(null==Ia.r&&(Ia.r=C(br,o,3,Ia.J,0)),Ia.r[Za]=Ja)}u=h[l];-1!=h[l]&&128!=j&&hr(c.b,e,h[l],j);j=1;h[l]=e;0!=f&&(Ar(c.b,e,f),f=0);($=!Lb?\nnull:js(Lb,DQ(u)))&&G7($,e,S,1==g);Fa&&(!Lb&&(Lb=new Bs),Cs(Lb,DQ(e),new I7(c,e,u,w,S,F)))}else if(46==ja)j=128;else if(61==ja)j=2;else if(35==ja)j=4;else if(YM(ja))if(W=ja-48,ia){for(;S<Ba&&YM(d[S]&65535);)W=10*W+d[S]-48,++S;f=W}else{mb&&S<Ba&&YM(d[S]&65535)&&(W=10*W+d[S]-48,++S);mb=!1;if(64<=W)throw new pp("SmilesParser: ringClosureAtom number out of range");if(-1==Qa[W])Qa[W]=h[l],Mb[W]=S-1;else{if(Qa[W]==h[l])throw new pp("SmilesParser: ring closure to same atom");Lb&&(($=js(Lb,DQ(Qa[W])))&&G7($,\nh[l],Mb[W],!1),($=js(Lb,DQ(h[l])))&&G7($,Qa[W],S-1,!1));hr(c.b,h[l],Qa[W],j);Qa[W]=-1}j=1}else if(43==ja){if(!ia)throw new pp("SmilesParser: \'+\' found outside brackets");for(q=1;43==d[S];)++q,++S;1==q&&YM(d[S]&65535)&&(q=d[S]-48,++S);tr(c.b,h[l],q)}else if(45==ja){if(ia){for(q=-1;45==d[S];)--q,++S;-1==q&&YM(d[S]&65535)&&(q=48-d[S],++S);tr(c.b,h[l],q)}}else if(40==ja){if(-1==h[l])throw new pp("Smiles with leading parenthesis are not supported");h[l+1]=h[l];++l}else if(41==ja)--l;else if(91==ja){if(ia)throw new pp("SmilesParser: nested square brackets found");\nia=!0}else if(93==ja){if(!ia)throw new pp("SmilesParser: closing bracket without opening one");ia=!1}else if(37==ja)mb=!0;else if(58==ja)if(ia){for(P=0;YM(d[S]&65535);)P=10*P+d[S]-48,++S;c.b.u[h[l]]=P}else j=64;else if(47==ja)j=17;else if(92==ja)j=9;else throw new pp("SmilesParser: unexpected character found: \'"+String.fromCharCode(ja)+Nb);if(1!=j)throw new pp("SmilesParser: dangling open bond");for(y=0;64>y;++y)if(-1!=Qa[y])throw new pp("SmilesParser: dangling ring closure");var fb=c.b,Ka,da,ib,\nDa,V,Ic;Ic=C(B,v,-1,fb.o,1);Da=C(oo,en,-1,fb.o,2);for(da=0;da<fb.p;++da)for(ib=0;2>ib;++ib)Ur(fb,fb.B[ib][da])&&!Ur(fb,fb.B[1-ib][da])&&(Da[fb.B[ib][da]]=!0);for(V=fb.o-1;0<=V&&Da[V];)Ic[V]=V,--V;for(Ka=0;Ka<=V;++Ka)if(Da[Ka]){Ic[Ka]=V;Ic[V]=Ka;for(--V;0<=V&&Da[V];)Ic[V]=V,--V}else Ic[Ka]=Ka;c.b.M=!0;no(c.b,1);for(e=0;e<c.b.o;++e)if(null!=(null==b.r?null:null==b.r[e]?null:jr(b.r[e],0,b.r[e].length))&&!qr(c.b,e))if(t=(null==c.b.r?null:c.b.r[e])[0],c.b.A[e]<(lp(),ar).length&&null!=ar[c.b.A[e]]){r=!1;\nhb=Xp(c.b,e);hb-=Zp(c.b,e,hb);for(Xc=ar[c.b.A[e]],Ga=0,ic=Xc.length;Ga<ic;++Ga)if(Q=Xc[Ga],hb<=Q){r=!0;Q!=hb+t&&sr(c.b,e,hb+t);break}r||sr(c.b,e,hb+t)}var G,O,Cb,wb;for(G=0;G<c.b.c;++G)if(7==c.b.A[G]&&0==c.b.q[G]&&3<Xp(c.b,G)&&0<c.b.k[G])for(wb=0;wb<c.b.f[G];++wb)if(O=so(c.b,G,wb),Cb=ro(c.b,G,wb),1<vo(c.b,Cb)&&Nr(c.b.A[O])){4==c.b.E[Cb]?po(c.b,Cb,2):po(c.b,Cb,1);tr(c.b,G,c.b.q[G]+1);tr(c.b,O,c.b.q[O]-1);break}var gd,Bd,ra,wc,Rb,la,ab,Sb,U,$a,Zd,Jc,Ma,nb,Ra,Db;no(c.b,1);c.a=C(oo,en,-1,c.b.d,2);for(ra=\n0;ra<c.b.d;++ra)64==c.b.E[ra]&&(po(c.b,ra,1),c.a[ra]=!0);Db=new qo(c.b,3);Sb=C(oo,en,-1,Db.i.c,2);for(Ma=0;Ma<Db.i.c;++Ma){nb=yo(Db.i,Ma);Sb[Ma]=!0;for(ab=0;ab<nb.length;++ab)if(!qr(c.b,nb[ab])){Sb[Ma]=!1;break}if(Sb[Ma]){Ra=yo(Db.j,Ma);for(ab=0;ab<Ra.length;++ab)c.a[Ra[ab]]=!0}}for(ra=0;ra<c.b.d;++ra)if(!c.a[ra]&&0!=Db.b[ra]&&qr(c.b,D(c.b,0,ra))&&qr(c.b,D(c.b,1,ra)))a:{var Yc=c,dc=ra,ec=void 0,K=void 0,Tb=void 0,ob=void 0,bd=void 0,gb=void 0,Zb=void 0,pb=void 0,Kc=void 0,hd=void 0,nd=void 0,sa=void 0,\nUb=void 0,pb=C(B,v,-1,Yc.b.c,1),gb=C(B,v,-1,Yc.b.c,1),Zb=C(B,v,-1,Yc.b.c,1),Kc=C(B,v,-1,Yc.b.c,1),ec=D(Yc.b,0,dc),K=D(Yc.b,1,dc);gb[0]=ec;gb[1]=K;Zb[0]=-1;Zb[1]=dc;pb[ec]=1;pb[K]=2;Kc[ec]=-1;Kc[K]=ec;for(hd=bd=1;bd<=hd&&15>pb[gb[bd]];){Ub=gb[bd];for(nd=0;nd<Yc.b.f[Ub];++nd)if(Tb=so(Yc.b,Ub,nd),Tb!=Kc[Ub]){ob=ro(Yc.b,Ub,nd);if(Tb==ec){Zb[0]=ob;for(sa=0;sa<=hd;++sa)Yc.a[Zb[nd]]=!0;break a}qr(Yc.b,Tb)&&0==pb[Tb]&&(++hd,gb[hd]=Tb,Zb[hd]=ob,pb[Tb]=pb[Ub]+1,Kc[Tb]=Ub)}++bd}}no(c.b,3);for(Ma=0;Ma<Db.i.c;++Ma)if(Sb[Ma]){nb=\nyo(Db.i,Ma);for(ab=0;ab<nb.length;++ab){var cd;var sb=c,wa=nb[ab],Zc=void 0;16==sb.b.A[wa]&&0>=sb.b.q[wa]||6==sb.b.A[wa]&&0!=sb.b.q[wa]||!qr(sb.b,wa)?cd=!1:(Zc=null==eq(sb.b,wa)?0:(null==sb.b.r?null:sb.b.r[wa])[0],cd=1>or(sb.b,wa)-Xp(sb.b,wa)-Zc||5!=sb.b.A[wa]&&6!=sb.b.A[wa]&&7!=sb.b.A[wa]&&8!=sb.b.A[wa]&&15!=sb.b.A[wa]&&16!=sb.b.A[wa]&&33!=sb.b.A[wa]&&34!=sb.b.A[wa]?!1:!0);if(!cd){zr(c.b,nb[ab],!1);for($a=0;$a<c.b.f[nb[ab]];++$a)c.a[ro(c.b,nb[ab],$a)]=!1}}}E7(c);for(Ma=0;Ma<Db.i.c;++Ma)if(Sb[Ma]&&\n6==yo(Db.j,Ma).length){Ra=yo(Db.j,Ma);U=!0;for(wc=0,Rb=Ra.length;wc<Rb;++wc)if(ra=Ra[wc],!c.a[ra]){U=!1;break}U&&(D7(c,Ra[0]),D7(c,Ra[2]),D7(c,Ra[4]),E7(c))}for(Jc=5;4<=Jc;--Jc){do{Zd=!1;for(ra=0;ra<c.b.d;++ra)if(c.a[ra]){for(ab=gd=0;2>ab;++ab){la=D(c.b,ab,ra);for($a=0;$a<c.b.f[la];++$a)c.a[ro(c.b,la,$a)]&&++gd}if(gd==Jc){D7(c,ra);E7(c);Zd=!0;break}}}while(Zd)}for(ra=0;ra<c.b.d;++ra)if(c.a[ra])throw new pp(y7);for(Bd=0;Bd<c.b.c;++Bd)if(qr(c.b,Bd))throw new pp(y7);c.b.r=null;c.b.M=!1;var vb,oc,Cc,\ntb,Cd,Ud,td,fc,xc,Gc,Lc;no(c.b,3);xc=!1;Gc=C(B,v,-1,2,1);Lc=C(B,v,-1,2,1);fc=C(B,v,-1,2,1);for(oc=0;oc<c.b.d;++oc)if(!ap(c.b,oc)&&2==c.b.E[oc]){for(tb=0;2>tb;++tb){Gc[tb]=-1;fc[tb]=-1;vb=D(c.b,tb,oc);for(td=0;td<c.b.f[vb];++td)Cc=ro(c.b,vb,td),Cc!=oc&&(17==c.b.E[Cc]||9==c.b.E[Cc]?(Gc[tb]=so(c.b,vb,td),Lc[tb]=Cc):fc[tb]=so(c.b,vb,td));if(-1==Gc[tb])break}if(-1!=Gc[0]&&-1!=Gc[1]){Ud=c.b.E[Lc[0]]!=c.b.E[Lc[1]];Cd=!1;for(tb=0;2>tb;++tb)-1!=fc[tb]&&fc[tb]<Gc[tb]&&(Cd=!Cd);Hr(c.b,oc,Ud^Cd?2:1,!1);xc=!0}}for(oc=\n0;oc<c.b.d;++oc)(17==c.b.E[oc]||9==c.b.E[oc])&&po(c.b,oc,1);xc&&(c.b.N|=4);bt(new K7,c.b);if(Lb){for(oa=N7((vc=new nW(Lb),new O7(Lb,vc)));HV(oa.a.a);)$=(oa.a.b=xq(oa.a.a)).Si(),Br(c.b,$.a,H7($,Ic),!1);c.b.N|=4}Vr(c.b);J7(c.b);T&&Jr(c.b,!0);return(new ds(b)).a.a.a}function M7(a){return null!=String.fromCharCode(a).match(/[A-Z]/i)}function N7(a){a=new qW(a.b.a);return new P7(a)}function O7(a,b){this.a=a;this.b=b}x(672,660,{},O7);\n_.Pi=function(a){a:{var b,c;for(c=new qW((new nW(this.a)).a);HV(c.a);)if(b=c.b=xq(c.a),b=b.Si(),null==a?null==b:Iw(a,b)){a=!0;break a}a=!1}return a};_.gf=function(){return N7(this)};_.Bg=function(){return this.b.a.c};_.a=null;_.b=null;function P7(a){this.a=a}x(673,1,{},P7);_.He=function(){return HV(this.a.a)};_.Ie=function(){return(this.a.b=xq(this.a.a)).Si()};_.Je=function(){pW(this.a)};_.a=null;function Q7(){VV();this.a=6122;this.b=12230397}x(689,1,{},Q7);x(742,632,Hn);\n_.he=function(){var a,b,c,d,e;a=b=d=null;if(this.b.a==(NQ(),OQ)&&this.b.i==(PQ(),QQ))try{var f=this.b.b,g,h,j;j=null;h=new Hs;os(new Es,h,new PL(new TL(f)))&&(g=new ds(h),j=g.a.a.a);b=j;if(null==b)throw new pp("V3000 read failed.");a=gl;this.a.Mc.a="V3000 conversion provided by OpenChemLib"}catch(l){if(l=cp(l),E(l,103))c=l,d=c.fe();else throw l;}else if(this.b.a==iX)try{var n=this.b.b,q,r,t,w,u,y,F;b=-1!=n.indexOf(ee)?(q=jV(n,ee),r=3<=q.length&&0<q[2].length,t=2<=q.length&&0<q[1].length,w=L7(q[0]),\nu=r?L7(q[2]):L7(m),y=t?L7(q[1]):L7(m),F=m,F+=yb,F+=GR(1,3)+GR(1,3),t&&(F+=GR(1,3)),F+=ba,F+=ub+w,F+=ub+u,t&&(F+=ub+y),F):L7(n);this.b.f==(KQ(),TQ)?a="readSMIRKS":this.b.f==fX&&(a="readSMILES");this.a.Mc.a="SMILES conversion provided by OpenChemLib"}catch(H){if(H=cp(H),E(H,103))c=H,d="SMILES parsing error:"+c.fe();else throw H;}else if(d="Invalid or unsupported input",this.a.cd&&!this.b.d)try{var s=new C7,P=ts(this.b.b),ea;if(null==P||0==P.length)ea=null;else{var W=lV(P),$,oa,Fa,Lb,mb;if(null==W)ea=\nnull;else{A7(s,W,0);$=Z(s,4);Lb=Z(s,4);8<$&&($=Lb);oa=Z(s,$);Fa=Z(s,Lb);mb=new vs(oa,Fa);var S=null,Qa,Mb,T,Ba,ia,ja,hb,Q,Xc,Ga,ic,vc,Ia,Za,Ja,fb,Ka,da,ib,Da,V,Ic,G,O,Cb,wb,gd,Bd,ra,wc,Rb,la,ab,Sb,U,$a,Zd,Jc,Ma,nb,Ra,Db,Yc,dc,ec,K,Tb,ob,bd,gb,Zb,pb,Kc,hd,nd,sa,Ub,cd,sb,wa,Zc,vb,oc,Cc,tb,Cd,Ud,td,fc,xc,Gc,Lc;Cd=8;s.f=mb;ir(s.f);if(!(null==W||0==W.length))if(null!=S&&0==S.length&&(S=null),A7(s,W,0),T=Z(s,4),fb=Z(s,4),8<T&&(Cd=T,T=fb),0==T)Jr(s.f,1==Z(s,1));else{Ba=Z(s,T);ia=Z(s,fb);nd=Z(s,T);sb=Z(s,\nT);cd=Z(s,T);Cb=Z(s,T);for(Q=0;Q<Ba;++Q)dr(s.f,6);for(K=0;K<nd;++K)gr(s.f,Z(s,T),7);for(K=0;K<sb;++K)gr(s.f,Z(s,T),8);for(K=0;K<cd;++K)gr(s.f,Z(s,T),Z(s,8));for(K=0;K<Cb;++K)tr(s.f,Z(s,T),Z(s,4)-8);wb=1+ia-Ba;ab=Z(s,4);Ja=0;Dr(s.f,0,0);Er(s.f,0,0);Fr(s.f,0,0);Sb=null!=S&&39<=S[0];Lc=xc=td=tb=0;wc=ra=!1;Sb&&(S.length>2*Ba-2&&39==S[2*Ba-2]||S.length>3*Ba-3&&39==S[3*Ba-3]?(wc=!0,Tb=(ra=S.length==3*Ba-3+9)?3*Ba-3:2*Ba-2,Za=86*(S[Tb+1]-40)+S[Tb+2]-40,tb=Math.pow(10,Za/2E3-1),Tb+=2,Ud=86*(S[Tb+1]-40)+S[Tb+\n2]-40,td=Math.pow(10,Ud/1500-1),Tb+=2,fc=86*(S[Tb+1]-40)+S[Tb+2]-40,xc=Math.pow(10,fc/1500-1),ra&&(Tb+=2,Gc=86*(S[Tb+1]-40)+S[Tb+2]-40,Lc=Math.pow(10,Gc/1500-1))):ra=S.length==3*Ba-3);s.b&&ra&&(S=null,Sb=!1);for(K=1;K<Ba;++K)U=Z(s,ab),0==U?(Sb&&(Dr(s.f,K,s.f.G[0].a+8*(S[2*K-2]-83)),Er(s.f,K,s.f.G[0].b+8*(S[2*K-1]-83)),ra&&Fr(s.f,K,s.f.G[0].c+8*(S[2*Ba-3+K]-83))),++wb):(Ja+=U-1,Sb&&(Dr(s.f,K,Ko(s.f,Ja)+S[2*K-2]-83),Er(s.f,K,Lo(s.f,Ja)+S[2*K-1]-83),ra&&Fr(s.f,K,Mo(s.f,Ja)+(S[2*Ba-3+K]-83))),hr(s.f,\nJa,K,1));for(K=0;K<wb;++K)hr(s.f,Z(s,T),Z(s,T),1);bd=C(oo,en,-1,ia,2);for(da=0;da<ia;++da)switch(V=Z(s,2),V){case 0:z7(s.f,D(s.f,0,da))||z7(s.f,D(s.f,1,da))?po(s.f,da,32):bd[da]=!0;break;case 2:po(s.f,da,2);break;case 3:po(s.f,da,4)}Mb=Z(s,T);for(K=0;K<Mb;++K)if(Q=Z(s,T),8==Cd)wa=Z(s,2),3==wa?(vr(s.f,Q,1,0),Br(s.f,Q,1,!1)):Br(s.f,Q,wa,!1);else switch(wa=Z(s,3),wa){case 4:Br(s.f,Q,1,!1);vr(s.f,Q,1,Z(s,3));break;case 5:Br(s.f,Q,2,!1);vr(s.f,Q,1,Z(s,3));break;case 6:Br(s.f,Q,1,!1);vr(s.f,Q,2,Z(s,3));\nbreak;case 7:Br(s.f,Q,2,!1);vr(s.f,Q,2,Z(s,3));break;default:Br(s.f,Q,wa,!1)}8==Cd&&0==Z(s,1)&&(s.f.I=!0);Qa=Z(s,fb);for(K=0;K<Qa;++K)if(da=Z(s,fb),1==s.f.E[da])switch(wa=Z(s,3),wa){case 4:Hr(s.f,da,1,!1);Gr(s.f,da,1,Z(s,3));break;case 5:Hr(s.f,da,2,!1);Gr(s.f,da,1,Z(s,3));break;case 6:Hr(s.f,da,1,!1);Gr(s.f,da,2,Z(s,3));break;case 7:Hr(s.f,da,2,!1);Gr(s.f,da,2,Z(s,3));break;default:Hr(s.f,da,wa,!1)}else Hr(s.f,da,Z(s,2),!1);Jr(s.f,1==Z(s,1));hb=null;for(Ub=0;1==Z(s,1);)switch(la=Ub+Z(s,4),la){case 0:sa=\nZ(s,T);for(K=0;K<sa;++K)Q=Z(s,T),Cr(s.f,Q,2048);break;case 1:sa=Z(s,T);for(K=0;K<sa;++K)Q=Z(s,T),Kc=Z(s,8),Ar(s.f,Q,Kc);break;case 2:sa=Z(s,fb);for(K=0;K<sa;++K)da=Z(s,fb),po(s.f,da,64);break;case 3:sa=Z(s,T);for(K=0;K<sa;++K)Q=Z(s,T),Cr(s.f,Q,4096);break;case 4:sa=Z(s,T);for(K=0;K<sa;++K)Q=Z(s,T),Cc=Z(s,4)<<3,Cr(s.f,Q,Cc);break;case 5:sa=Z(s,T);for(K=0;K<sa;++K)Q=Z(s,T),ja=Z(s,2)<<1,Cr(s.f,Q,ja);break;case 6:sa=Z(s,T);for(K=0;K<sa;++K)Q=Z(s,T),Cr(s.f,Q,1);break;case 7:sa=Z(s,T);for(K=0;K<sa;++K)Q=\nZ(s,T),dc=Z(s,4)<<7,Cr(s.f,Q,dc);break;case 8:sa=Z(s,T);for(K=0;K<sa;++K){Q=Z(s,T);ic=Z(s,4);Xc=C(B,v,-1,ic,1);for(gb=0;gb<ic;++gb)Ga=Z(s,8),Xc[gb]=Ga;var Dd=s.f,xf=Q,Rc=Xc;null==Dd.t&&(Dd.t=C(Ro,yn,93,Dd.J,0));null!=Rc&&zp(Rc);Dd.t[xf]=Rc;Dd.N=0;Dd.H=!0}break;case 9:sa=Z(s,fb);for(K=0;K<sa;++K)da=Z(s,fb),Cc=Z(s,2)<<4,Ir(s.f,da,Cc);break;case 10:sa=Z(s,fb);for(K=0;K<sa;++K)da=Z(s,fb),Ic=Z(s,4),Ir(s.f,da,Ic);break;case 11:sa=Z(s,T);for(K=0;K<sa;++K)Q=Z(s,T),Cr(s.f,Q,8192);break;case 12:sa=Z(s,fb);\nfor(K=0;K<sa;++K)da=Z(s,fb),G=Z(s,8)<<6,Ir(s.f,da,G);break;case 13:sa=Z(s,T);for(K=0;K<sa;++K)Q=Z(s,T),Zc=Z(s,3)<<14,Cr(s.f,Q,Zc);break;case 14:sa=Z(s,T);for(K=0;K<sa;++K)Q=Z(s,T),hd=Z(s,5)<<17,Cr(s.f,Q,hd);break;case 15:Ub=16;break;case 16:sa=Z(s,T);for(K=0;K<sa;++K)Q=Z(s,T),oc=Z(s,3)<<22,Cr(s.f,Q,oc);break;case 17:sa=Z(s,T);for(K=0;K<sa;++K)Q=Z(s,T),sr(s.f,Q,Z(s,4));break;case 18:sa=Z(s,T);pb=Z(s,4);for(K=0;K<sa;++K){Q=Z(s,T);Rb=Z(s,pb);Zb=C(Qp,En,-1,Rb,1);for(gb=0;gb<Rb;++gb)Zb[gb]=Z(s,7)<<24>>\n24;var jc=s.f,Ld=Q,ac=jr(Zb,0,Zb.length),Eb=void 0;if(null!=ac)if(0==ac.length)ac=null;else if(Eb=Lr(ac),0!=Eb&&M(ac,Yq[Eb])||M(ac,fe))gr(jc,Ld,Eb),ac=null;null==ac?null!=jc.r&&(jc.r[Ld]=null):(null==jc.r&&(jc.r=C(br,o,3,jc.J,0)),jc.r[Ld]=lV(ac))}break;case 19:sa=Z(s,T);for(K=0;K<sa;++K)Q=Z(s,T),O=Z(s,3)<<25,Cr(s.f,Q,O);break;case 20:sa=Z(s,fb);for(K=0;K<sa;++K)da=Z(s,fb),oc=Z(s,3)<<14,Ir(s.f,da,oc);break;case 21:sa=Z(s,T);for(K=0;K<sa;++K)Q=Z(s,T),xr(s.f,Q,Z(s,2)<<4);break;case 22:sa=Z(s,T);for(K=\n0;K<sa;++K)Q=Z(s,T),Cr(s.f,Q,268435456);break;case 23:sa=Z(s,fb);for(K=0;K<sa;++K)da=Z(s,fb),Ir(s.f,da,131072);break;case 24:sa=Z(s,fb);for(K=0;K<sa;++K)da=Z(s,fb),ja=Z(s,2)<<18,Ir(s.f,da,ja);break;case 25:for(K=0;K<Ba;++K)if(1==Z(s,1)){var id=s.f;id.s[K]|=512}break;case 26:sa=Z(s,fb);hb=C(B,v,-1,sa,1);for(K=0;K<sa;++K)hb[K]=Z(s,fb);break;case 27:sa=Z(s,T);for(K=0;K<sa;++K)Q=Z(s,T),Cr(s.f,Q,536870912)}mo(new zo(s.f),bd);if(null!=hb)for(ib=0,Da=hb.length;ib<Da;++ib)da=hb[ib],po(s.f,da,2==s.f.E[da]?\n4:2);gd=0;if(null==S&&W.length>s.d+1&&(32==W[s.d+1]||9==W[s.d+1]))S=W,gd=s.d+2;if(null!=S)try{if(33==S[gd]||35==S[gd]){A7(s,S,gd+1);ra=1==Z(s,1);wc=1==Z(s,1);vb=2*Z(s,4);Ka=1<<vb;da=0;for(Q=1;Q<Ba;++Q)da<ia&&D(s.f,1,da)==Q?(Db=D(s.f,0,da++),Ra=1):(Db=0,Ra=8),Dr(s.f,Q,Ko(s.f,Db)+Ra*(Z(s,vb)-~~(Ka/2))),Er(s.f,Q,Lo(s.f,Db)+Ra*(Z(s,vb)-~~(Ka/2))),ra&&Fr(s.f,Q,Mo(s.f,Db)+Ra*(Z(s,vb)-~~(Ka/2)));Ia=ra?1.5:(lp(),24);vc=kr(s.f,Ba,ia,Ia);if(35==S[gd]){ec=0;Yc=C(B,v,-1,Ba,1);for(Q=0;Q<Ba;++Q)ec+=Yc[Q]=yp(s.f,\nQ);for(Q=0;Q<Ba;++Q)for(K=0;K<Yc[Q];++K)dc=dr(s.f,1),hr(s.f,Q,dc,1),Dr(s.f,dc,Ko(s.f,Q)+(Z(s,vb)-~~(Ka/2))),Er(s.f,dc,Lo(s.f,Q)+(Z(s,vb)-~~(Ka/2))),ra&&Fr(s.f,dc,Mo(s.f,Q)+(Z(s,vb)-~~(Ka/2)));Ba+=ec}if(wc){var $d=Z(s,vb),kc=Math.log(2E3)*Math.LOG10E*$d/(Ka-1)-1;tb=Math.pow(10,kc);td=tb*B7(Z(s,vb),Ka);xc=tb*B7(Z(s,vb),Ka);ra&&(Lc=tb*B7(Z(s,vb),Ka));Ra=tb/vc;for(Q=0;Q<Ba;++Q)Dr(s.f,Q,td+Ra*Ko(s.f,Q)),Er(s.f,Q,xc+Ra*Lo(s.f,Q)),ra&&Fr(s.f,Q,Lc+Ra*Mo(s.f,Q))}else{Ra=1.5/vc;for(Q=0;Q<Ba;++Q)Dr(s.f,Q,Ra*\nKo(s.f,Q)),Er(s.f,Q,Ra*Lo(s.f,Q)),ra&&Fr(s.f,Q,Ra*Mo(s.f,Q))}}else if(ra&&!wc&&0==tb&&(tb=1.5),0!=tb&&0!=s.f.p){for(da=vc=0;da<s.f.p;++da)$a=Ko(s.f,D(s.f,0,da))-Ko(s.f,D(s.f,1,da)),Zd=Lo(s.f,D(s.f,0,da))-Lo(s.f,D(s.f,1,da)),Jc=ra?Mo(s.f,D(s.f,0,da))-Mo(s.f,D(s.f,1,da)):0,vc+=Math.sqrt($a*$a+Zd*Zd+Jc*Jc);vc/=s.f.p;nb=tb/vc;for(Q=0;Q<s.f.o;++Q)Dr(s.f,Q,Ko(s.f,Q)*nb+td),Er(s.f,Q,Lo(s.f,Q)*nb+xc),ra&&Fr(s.f,Q,Mo(s.f,Q)*nb+Lc)}}catch($b){if($b=cp($b),E($b,103))Ma=$b,Ma.fe(),S=null,ra=!1;else throw $b;\n}if((Bd=null!=S&&!ra)||s.b){no(s.f,3);for(da=0;da<s.f.d;++da)if(2==vo(s.f,da)&&!ap(s.f,da)&&0==(s.f.C[da]&3)){var bb=s.f;bb.C[da]|=16777216}}!Bd&&s.b&&(s.f.N|=4,ob=new K7,ob.i=new Q7,bt(ob,s.f),Bd=!0);Bd?(Vr(s.f),J7(s.f)):ra||(s.f.N|=4)}ea=mb}}b=(new ds(ea)).a.a.a;a="readOCLCode";d=null}catch(Ie){if(Ie=cp(Ie),!E(Ie,103))throw Ie;}e=!1;if(null!=b&&null==d)try{(e=RQ(this.a,b,!1))&&this.c&&FO(this.a,a,0,0,0,!0)}catch(We){if(We=cp(We),E(We,103))d="Invalid converted molfile";else throw We;}this.a.jc=e;\nthis.e?e?ZQ(this.e):$Q(this.e,new pp(d)):null!=d&&U3(this.a,d);this.d&&vJ(this.a)};Y(672);Y(673);Y(24);Y(29);Y(30);N(s0)(1);\n//# sourceURL=1.js\n')
