/*! Three.js
The MIT License

Copyright © 2010-2026 three.js authors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
/*! polygon-clipping
The MIT License (MIT)

Copyright (c) 2018 Mike Fogel <mike@fogel.ca> - covers everything not specially attributed to others below.

Copyright (c) 2016 Alexander Milevski <info@w8r.name> - covers all portions originally part of github:w8r/martinez, from which this project was forked on Febuary 2, 2018.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
/*! robust-predicates
This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org>
*/
/*! splaytree
The MIT License (MIT)

Copyright (c) 2019 Alexander Milevski <info@w8r.name>

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
"use strict";(()=>{var hx=Object.create;var Td=Object.defineProperty;var fx=Object.getOwnPropertyDescriptor;var dx=Object.getOwnPropertyNames;var px=Object.getPrototypeOf,mx=Object.prototype.hasOwnProperty;var gx=(n,t)=>()=>{try{return t||n((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}};var yx=(n,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of dx(t))!mx.call(n,s)&&s!==e&&Td(n,s,{get:()=>t[s],enumerable:!(i=fx(t,s))||i.enumerable});return n};var bo=(n,t,e)=>(e=n!=null?hx(px(n)):{},yx(t||!n||!n.__esModule?Td(e,"default",{value:n,enumerable:!0}):e,n));var to=gx((ff,df)=>{(function(n,t){typeof ff=="object"&&typeof df<"u"?df.exports=t():typeof define=="function"&&define.amd?define(t):(n=typeof globalThis<"u"?globalThis:n||self,n.polygonClipping=t())})(ff,(function(){"use strict";/**
 * splaytree v3.1.2
 * Fast Splay tree for Node and browser
 *
 * @author Alexander Milevski <info@w8r.name>
 * @license MIT
 * @preserve
 *//*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */function n(X,w){var E={label:0,sent:function(){if(F[0]&1)throw F[1];return F[1]},trys:[],ops:[]},C,D,F,Q;return Q={next:J(0),throw:J(1),return:J(2)},typeof Symbol=="function"&&(Q[Symbol.iterator]=function(){return this}),Q;function J(ft){return function(Ct){return lt([ft,Ct])}}function lt(ft){if(C)throw new TypeError("Generator is already executing.");for(;E;)try{if(C=1,D&&(F=ft[0]&2?D.return:ft[0]?D.throw||((F=D.return)&&F.call(D),0):D.next)&&!(F=F.call(D,ft[1])).done)return F;switch(D=0,F&&(ft=[ft[0]&2,F.value]),ft[0]){case 0:case 1:F=ft;break;case 4:return E.label++,{value:ft[1],done:!1};case 5:E.label++,D=ft[1],ft=[0];continue;case 7:ft=E.ops.pop(),E.trys.pop();continue;default:if(F=E.trys,!(F=F.length>0&&F[F.length-1])&&(ft[0]===6||ft[0]===2)){E=0;continue}if(ft[0]===3&&(!F||ft[1]>F[0]&&ft[1]<F[3])){E.label=ft[1];break}if(ft[0]===6&&E.label<F[1]){E.label=F[1],F=ft;break}if(F&&E.label<F[2]){E.label=F[2],E.ops.push(ft);break}F[2]&&E.ops.pop(),E.trys.pop();continue}ft=w.call(X,E)}catch(Ct){ft=[6,Ct],D=0}finally{C=F=0}if(ft[0]&5)throw ft[1];return{value:ft[0]?ft[1]:void 0,done:!0}}}var t=(function(){function X(w,E){this.next=null,this.key=w,this.data=E,this.left=null,this.right=null}return X})();function e(X,w){return X>w?1:X<w?-1:0}function i(X,w,E){for(var C=new t(null,null),D=C,F=C;;){var Q=E(X,w.key);if(Q<0){if(w.left===null)break;if(E(X,w.left.key)<0){var J=w.left;if(w.left=J.right,J.right=w,w=J,w.left===null)break}F.left=w,F=w,w=w.left}else if(Q>0){if(w.right===null)break;if(E(X,w.right.key)>0){var J=w.right;if(w.right=J.left,J.left=w,w=J,w.right===null)break}D.right=w,D=w,w=w.right}else break}return D.right=w.left,F.left=w.right,w.left=C.right,w.right=C.left,w}function s(X,w,E,C){var D=new t(X,w);if(E===null)return D.left=D.right=null,D;E=i(X,E,C);var F=C(X,E.key);return F<0?(D.left=E.left,D.right=E,E.left=null):F>=0&&(D.right=E.right,D.left=E,E.right=null),D}function r(X,w,E){var C=null,D=null;if(w){w=i(X,w,E);var F=E(w.key,X);F===0?(C=w.left,D=w.right):F<0?(D=w.right,w.right=null,C=w):(C=w.left,w.left=null,D=w)}return{left:C,right:D}}function o(X,w,E){return w===null?X:(X===null||(w=i(X.key,w,E),w.left=X),w)}function a(X,w,E,C,D){if(X){C(""+w+(E?"\u2514\u2500\u2500 ":"\u251C\u2500\u2500 ")+D(X)+`
`);var F=w+(E?"    ":"\u2502   ");X.left&&a(X.left,F,!1,C,D),X.right&&a(X.right,F,!0,C,D)}}var c=(function(){function X(w){w===void 0&&(w=e),this._root=null,this._size=0,this._comparator=w}return X.prototype.insert=function(w,E){return this._size++,this._root=s(w,E,this._root,this._comparator)},X.prototype.add=function(w,E){var C=new t(w,E);this._root===null&&(C.left=C.right=null,this._size++,this._root=C);var D=this._comparator,F=i(w,this._root,D),Q=D(w,F.key);return Q===0?this._root=F:(Q<0?(C.left=F.left,C.right=F,F.left=null):Q>0&&(C.right=F.right,C.left=F,F.right=null),this._size++,this._root=C),this._root},X.prototype.remove=function(w){this._root=this._remove(w,this._root,this._comparator)},X.prototype._remove=function(w,E,C){var D;if(E===null)return null;E=i(w,E,C);var F=C(w,E.key);return F===0?(E.left===null?D=E.right:(D=i(w,E.left,C),D.right=E.right),this._size--,D):E},X.prototype.pop=function(){var w=this._root;if(w){for(;w.left;)w=w.left;return this._root=i(w.key,this._root,this._comparator),this._root=this._remove(w.key,this._root,this._comparator),{key:w.key,data:w.data}}return null},X.prototype.findStatic=function(w){for(var E=this._root,C=this._comparator;E;){var D=C(w,E.key);if(D===0)return E;D<0?E=E.left:E=E.right}return null},X.prototype.find=function(w){return this._root&&(this._root=i(w,this._root,this._comparator),this._comparator(w,this._root.key)!==0)?null:this._root},X.prototype.contains=function(w){for(var E=this._root,C=this._comparator;E;){var D=C(w,E.key);if(D===0)return!0;D<0?E=E.left:E=E.right}return!1},X.prototype.forEach=function(w,E){for(var C=this._root,D=[],F=!1;!F;)C!==null?(D.push(C),C=C.left):D.length!==0?(C=D.pop(),w.call(E,C),C=C.right):F=!0;return this},X.prototype.range=function(w,E,C,D){for(var F=[],Q=this._comparator,J=this._root,lt;F.length!==0||J;)if(J)F.push(J),J=J.left;else{if(J=F.pop(),lt=Q(J.key,E),lt>0)break;if(Q(J.key,w)>=0&&C.call(D,J))return this;J=J.right}return this},X.prototype.keys=function(){var w=[];return this.forEach(function(E){var C=E.key;return w.push(C)}),w},X.prototype.values=function(){var w=[];return this.forEach(function(E){var C=E.data;return w.push(C)}),w},X.prototype.min=function(){return this._root?this.minNode(this._root).key:null},X.prototype.max=function(){return this._root?this.maxNode(this._root).key:null},X.prototype.minNode=function(w){if(w===void 0&&(w=this._root),w)for(;w.left;)w=w.left;return w},X.prototype.maxNode=function(w){if(w===void 0&&(w=this._root),w)for(;w.right;)w=w.right;return w},X.prototype.at=function(w){for(var E=this._root,C=!1,D=0,F=[];!C;)if(E)F.push(E),E=E.left;else if(F.length>0){if(E=F.pop(),D===w)return E;D++,E=E.right}else C=!0;return null},X.prototype.next=function(w){var E=this._root,C=null;if(w.right){for(C=w.right;C.left;)C=C.left;return C}for(var D=this._comparator;E;){var F=D(w.key,E.key);if(F===0)break;F<0?(C=E,E=E.left):E=E.right}return C},X.prototype.prev=function(w){var E=this._root,C=null;if(w.left!==null){for(C=w.left;C.right;)C=C.right;return C}for(var D=this._comparator;E;){var F=D(w.key,E.key);if(F===0)break;F<0?E=E.left:(C=E,E=E.right)}return C},X.prototype.clear=function(){return this._root=null,this._size=0,this},X.prototype.toList=function(){return f(this._root)},X.prototype.load=function(w,E,C){E===void 0&&(E=[]),C===void 0&&(C=!1);var D=w.length,F=this._comparator;if(C&&m(w,E,0,D-1,F),this._root===null)this._root=l(w,E,0,D),this._size=D;else{var Q=d(this.toList(),u(w,E),F);D=this._size+D,this._root=h({head:Q},0,D)}return this},X.prototype.isEmpty=function(){return this._root===null},Object.defineProperty(X.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(X.prototype,"root",{get:function(){return this._root},enumerable:!0,configurable:!0}),X.prototype.toString=function(w){w===void 0&&(w=function(C){return String(C.key)});var E=[];return a(this._root,"",!0,function(C){return E.push(C)},w),E.join("")},X.prototype.update=function(w,E,C){var D=this._comparator,F=r(w,this._root,D),Q=F.left,J=F.right;D(w,E)<0?J=s(E,C,J,D):Q=s(E,C,Q,D),this._root=o(Q,J,D)},X.prototype.split=function(w){return r(w,this._root,this._comparator)},X.prototype[Symbol.iterator]=function(){var w,E,C;return n(this,function(D){switch(D.label){case 0:w=this._root,E=[],C=!1,D.label=1;case 1:return C?[3,6]:w===null?[3,2]:(E.push(w),w=w.left,[3,5]);case 2:return E.length===0?[3,4]:(w=E.pop(),[4,w]);case 3:return D.sent(),w=w.right,[3,5];case 4:C=!0,D.label=5;case 5:return[3,1];case 6:return[2]}})},X})();function l(X,w,E,C){var D=C-E;if(D>0){var F=E+Math.floor(D/2),Q=X[F],J=w[F],lt=new t(Q,J);return lt.left=l(X,w,E,F),lt.right=l(X,w,F+1,C),lt}return null}function u(X,w){for(var E=new t(null,null),C=E,D=0;D<X.length;D++)C=C.next=new t(X[D],w[D]);return C.next=null,E.next}function f(X){for(var w=X,E=[],C=!1,D=new t(null,null),F=D;!C;)w?(E.push(w),w=w.left):E.length>0?(w=F=F.next=E.pop(),w=w.right):C=!0;return F.next=null,D.next}function h(X,w,E){var C=E-w;if(C>0){var D=w+Math.floor(C/2),F=h(X,w,D),Q=X.head;return Q.left=F,X.head=X.head.next,Q.right=h(X,D+1,E),Q}return null}function d(X,w,E){for(var C=new t(null,null),D=C,F=X,Q=w;F!==null&&Q!==null;)E(F.key,Q.key)<0?(D.next=F,F=F.next):(D.next=Q,Q=Q.next),D=D.next;return F!==null?D.next=F:Q!==null&&(D.next=Q),C.next}function m(X,w,E,C,D){if(!(E>=C)){for(var F=X[E+C>>1],Q=E-1,J=C+1;;){do Q++;while(D(X[Q],F)<0);do J--;while(D(X[J],F)>0);if(Q>=J)break;var lt=X[Q];X[Q]=X[J],X[J]=lt,lt=w[Q],w[Q]=w[J],w[J]=lt}m(X,w,E,J,D),m(X,w,J+1,C,D)}}let y=(X,w)=>X.ll.x<=w.x&&w.x<=X.ur.x&&X.ll.y<=w.y&&w.y<=X.ur.y,p=(X,w)=>{if(w.ur.x<X.ll.x||X.ur.x<w.ll.x||w.ur.y<X.ll.y||X.ur.y<w.ll.y)return null;let E=X.ll.x<w.ll.x?w.ll.x:X.ll.x,C=X.ur.x<w.ur.x?X.ur.x:w.ur.x,D=X.ll.y<w.ll.y?w.ll.y:X.ll.y,F=X.ur.y<w.ur.y?X.ur.y:w.ur.y;return{ll:{x:E,y:D},ur:{x:C,y:F}}},g=Number.EPSILON;g===void 0&&(g=Math.pow(2,-52));let x=g*g,v=(X,w)=>{if(-g<X&&X<g&&-g<w&&w<g)return 0;let E=X-w;return E*E<x*X*w?0:X<w?-1:1};class b{constructor(){this.reset()}reset(){this.xRounder=new _,this.yRounder=new _}round(w,E){return{x:this.xRounder.round(w),y:this.yRounder.round(E)}}}class _{constructor(){this.tree=new c,this.round(0)}round(w){let E=this.tree.add(w),C=this.tree.prev(E);if(C!==null&&v(E.key,C.key)===0)return this.tree.remove(w),C.key;let D=this.tree.next(E);return D!==null&&v(E.key,D.key)===0?(this.tree.remove(w),D.key):w}}let M=new b,R=11102230246251565e-32,S=134217729,T=(3+8*R)*R;function I(X,w,E,C,D){let F,Q,J,lt,ft=w[0],Ct=C[0],L=0,tt=0;Ct>ft==Ct>-ft?(F=ft,ft=w[++L]):(F=Ct,Ct=C[++tt]);let nt=0;if(L<X&&tt<E)for(Ct>ft==Ct>-ft?(Q=ft+F,J=F-(Q-ft),ft=w[++L]):(Q=Ct+F,J=F-(Q-Ct),Ct=C[++tt]),F=Q,J!==0&&(D[nt++]=J);L<X&&tt<E;)Ct>ft==Ct>-ft?(Q=F+ft,lt=Q-F,J=F-(Q-lt)+(ft-lt),ft=w[++L]):(Q=F+Ct,lt=Q-F,J=F-(Q-lt)+(Ct-lt),Ct=C[++tt]),F=Q,J!==0&&(D[nt++]=J);for(;L<X;)Q=F+ft,lt=Q-F,J=F-(Q-lt)+(ft-lt),ft=w[++L],F=Q,J!==0&&(D[nt++]=J);for(;tt<E;)Q=F+Ct,lt=Q-F,J=F-(Q-lt)+(Ct-lt),Ct=C[++tt],F=Q,J!==0&&(D[nt++]=J);return(F!==0||nt===0)&&(D[nt++]=F),nt}function P(X,w){let E=w[0];for(let C=1;C<X;C++)E+=w[C];return E}function k(X){return new Float64Array(X)}let z=(3+16*R)*R,O=(2+12*R)*R,U=(9+64*R)*R*R,V=k(4),j=k(8),dt=k(12),ot=k(16),G=k(4);function q(X,w,E,C,D,F,Q){let J,lt,ft,Ct,L,tt,nt,At,Rt,Tt,Ot,zt,le,re,Se,Ie,an,Ze,pn=X-D,rn=E-D,mn=w-F,cn=C-F;re=pn*cn,tt=S*pn,nt=tt-(tt-pn),At=pn-nt,tt=S*cn,Rt=tt-(tt-cn),Tt=cn-Rt,Se=At*Tt-(re-nt*Rt-At*Rt-nt*Tt),Ie=mn*rn,tt=S*mn,nt=tt-(tt-mn),At=mn-nt,tt=S*rn,Rt=tt-(tt-rn),Tt=rn-Rt,an=At*Tt-(Ie-nt*Rt-At*Rt-nt*Tt),Ot=Se-an,L=Se-Ot,V[0]=Se-(Ot+L)+(L-an),zt=re+Ot,L=zt-re,le=re-(zt-L)+(Ot-L),Ot=le-Ie,L=le-Ot,V[1]=le-(Ot+L)+(L-Ie),Ze=zt+Ot,L=Ze-zt,V[2]=zt-(Ze-L)+(Ot-L),V[3]=Ze;let _n=P(4,V),Bt=O*Q;if(_n>=Bt||-_n>=Bt||(L=X-pn,J=X-(pn+L)+(L-D),L=E-rn,ft=E-(rn+L)+(L-D),L=w-mn,lt=w-(mn+L)+(L-F),L=C-cn,Ct=C-(cn+L)+(L-F),J===0&&lt===0&&ft===0&&Ct===0)||(Bt=U*Q+T*Math.abs(_n),_n+=pn*Ct+cn*J-(mn*ft+rn*lt),_n>=Bt||-_n>=Bt))return _n;re=J*cn,tt=S*J,nt=tt-(tt-J),At=J-nt,tt=S*cn,Rt=tt-(tt-cn),Tt=cn-Rt,Se=At*Tt-(re-nt*Rt-At*Rt-nt*Tt),Ie=lt*rn,tt=S*lt,nt=tt-(tt-lt),At=lt-nt,tt=S*rn,Rt=tt-(tt-rn),Tt=rn-Rt,an=At*Tt-(Ie-nt*Rt-At*Rt-nt*Tt),Ot=Se-an,L=Se-Ot,G[0]=Se-(Ot+L)+(L-an),zt=re+Ot,L=zt-re,le=re-(zt-L)+(Ot-L),Ot=le-Ie,L=le-Ot,G[1]=le-(Ot+L)+(L-Ie),Ze=zt+Ot,L=Ze-zt,G[2]=zt-(Ze-L)+(Ot-L),G[3]=Ze;let oe=I(4,V,4,G,j);re=pn*Ct,tt=S*pn,nt=tt-(tt-pn),At=pn-nt,tt=S*Ct,Rt=tt-(tt-Ct),Tt=Ct-Rt,Se=At*Tt-(re-nt*Rt-At*Rt-nt*Tt),Ie=mn*ft,tt=S*mn,nt=tt-(tt-mn),At=mn-nt,tt=S*ft,Rt=tt-(tt-ft),Tt=ft-Rt,an=At*Tt-(Ie-nt*Rt-At*Rt-nt*Tt),Ot=Se-an,L=Se-Ot,G[0]=Se-(Ot+L)+(L-an),zt=re+Ot,L=zt-re,le=re-(zt-L)+(Ot-L),Ot=le-Ie,L=le-Ot,G[1]=le-(Ot+L)+(L-Ie),Ze=zt+Ot,L=Ze-zt,G[2]=zt-(Ze-L)+(Ot-L),G[3]=Ze;let Et=I(oe,j,4,G,dt);re=J*Ct,tt=S*J,nt=tt-(tt-J),At=J-nt,tt=S*Ct,Rt=tt-(tt-Ct),Tt=Ct-Rt,Se=At*Tt-(re-nt*Rt-At*Rt-nt*Tt),Ie=lt*ft,tt=S*lt,nt=tt-(tt-lt),At=lt-nt,tt=S*ft,Rt=tt-(tt-ft),Tt=ft-Rt,an=At*Tt-(Ie-nt*Rt-At*Rt-nt*Tt),Ot=Se-an,L=Se-Ot,G[0]=Se-(Ot+L)+(L-an),zt=re+Ot,L=zt-re,le=re-(zt-L)+(Ot-L),Ot=le-Ie,L=le-Ot,G[1]=le-(Ot+L)+(L-Ie),Ze=zt+Ot,L=Ze-zt,G[2]=zt-(Ze-L)+(Ot-L),G[3]=Ze;let Dt=I(Et,dt,4,G,ot);return ot[Dt-1]}function xt(X,w,E,C,D,F){let Q=(w-F)*(E-D),J=(X-D)*(C-F),lt=Q-J,ft=Math.abs(Q+J);return Math.abs(lt)>=z*ft?lt:-q(X,w,E,C,D,F,ft)}let gt=(X,w)=>X.x*w.y-X.y*w.x,pt=(X,w)=>X.x*w.x+X.y*w.y,at=(X,w,E)=>{let C=xt(X.x,X.y,w.x,w.y,E.x,E.y);return C>0?-1:C<0?1:0},St=X=>Math.sqrt(pt(X,X)),Z=(X,w,E)=>{let C={x:w.x-X.x,y:w.y-X.y},D={x:E.x-X.x,y:E.y-X.y};return gt(D,C)/St(D)/St(C)},rt=(X,w,E)=>{let C={x:w.x-X.x,y:w.y-X.y},D={x:E.x-X.x,y:E.y-X.y};return pt(D,C)/St(D)/St(C)},wt=(X,w,E)=>w.y===0?null:{x:X.x+w.x/w.y*(E-X.y),y:E},Lt=(X,w,E)=>w.x===0?null:{x:E,y:X.y+w.y/w.x*(E-X.x)},Nt=(X,w,E,C)=>{if(w.x===0)return Lt(E,C,X.x);if(C.x===0)return Lt(X,w,E.x);if(w.y===0)return wt(E,C,X.y);if(C.y===0)return wt(X,w,E.y);let D=gt(w,C);if(D==0)return null;let F={x:E.x-X.x,y:E.y-X.y},Q=gt(F,w)/D,J=gt(F,C)/D,lt=X.x+J*w.x,ft=E.x+Q*C.x,Ct=X.y+J*w.y,L=E.y+Q*C.y,tt=(lt+ft)/2,nt=(Ct+L)/2;return{x:tt,y:nt}};class H{static compare(w,E){let C=H.comparePoints(w.point,E.point);return C!==0?C:(w.point!==E.point&&w.link(E),w.isLeft!==E.isLeft?w.isLeft?1:-1:K.compare(w.segment,E.segment))}static comparePoints(w,E){return w.x<E.x?-1:w.x>E.x?1:w.y<E.y?-1:w.y>E.y?1:0}constructor(w,E){w.events===void 0?w.events=[this]:w.events.push(this),this.point=w,this.isLeft=E}link(w){if(w.point===this.point)throw new Error("Tried to link already linked events");let E=w.point.events;for(let C=0,D=E.length;C<D;C++){let F=E[C];this.point.events.push(F),F.point=this.point}this.checkForConsuming()}checkForConsuming(){let w=this.point.events.length;for(let E=0;E<w;E++){let C=this.point.events[E];if(C.segment.consumedBy===void 0)for(let D=E+1;D<w;D++){let F=this.point.events[D];F.consumedBy===void 0&&C.otherSE.point.events===F.otherSE.point.events&&C.segment.consume(F.segment)}}}getAvailableLinkedEvents(){let w=[];for(let E=0,C=this.point.events.length;E<C;E++){let D=this.point.events[E];D!==this&&!D.segment.ringOut&&D.segment.isInResult()&&w.push(D)}return w}getLeftmostComparator(w){let E=new Map,C=D=>{let F=D.otherSE;E.set(D,{sine:Z(this.point,w.point,F.point),cosine:rt(this.point,w.point,F.point)})};return(D,F)=>{E.has(D)||C(D),E.has(F)||C(F);let{sine:Q,cosine:J}=E.get(D),{sine:lt,cosine:ft}=E.get(F);return Q>=0&&lt>=0?J<ft?1:J>ft?-1:0:Q<0&&lt<0?J<ft?-1:J>ft?1:0:lt<Q?-1:lt>Q?1:0}}}let bt=0;class K{static compare(w,E){let C=w.leftSE.point.x,D=E.leftSE.point.x,F=w.rightSE.point.x,Q=E.rightSE.point.x;if(Q<C)return 1;if(F<D)return-1;let J=w.leftSE.point.y,lt=E.leftSE.point.y,ft=w.rightSE.point.y,Ct=E.rightSE.point.y;if(C<D){if(lt<J&&lt<ft)return 1;if(lt>J&&lt>ft)return-1;let L=w.comparePoint(E.leftSE.point);if(L<0)return 1;if(L>0)return-1;let tt=E.comparePoint(w.rightSE.point);return tt!==0?tt:-1}if(C>D){if(J<lt&&J<Ct)return-1;if(J>lt&&J>Ct)return 1;let L=E.comparePoint(w.leftSE.point);if(L!==0)return L;let tt=w.comparePoint(E.rightSE.point);return tt<0?1:tt>0?-1:1}if(J<lt)return-1;if(J>lt)return 1;if(F<Q){let L=E.comparePoint(w.rightSE.point);if(L!==0)return L}if(F>Q){let L=w.comparePoint(E.rightSE.point);if(L<0)return 1;if(L>0)return-1}if(F!==Q){let L=ft-J,tt=F-C,nt=Ct-lt,At=Q-D;if(L>tt&&nt<At)return 1;if(L<tt&&nt>At)return-1}return F>Q?1:F<Q||ft<Ct?-1:ft>Ct?1:w.id<E.id?-1:w.id>E.id?1:0}constructor(w,E,C,D){this.id=++bt,this.leftSE=w,w.segment=this,w.otherSE=E,this.rightSE=E,E.segment=this,E.otherSE=w,this.rings=C,this.windings=D}static fromRing(w,E,C){let D,F,Q,J=H.comparePoints(w,E);if(J<0)D=w,F=E,Q=1;else if(J>0)D=E,F=w,Q=-1;else throw new Error(`Tried to create degenerate segment at [${w.x}, ${w.y}]`);let lt=new H(D,!0),ft=new H(F,!1);return new K(lt,ft,[C],[Q])}replaceRightSE(w){this.rightSE=w,this.rightSE.segment=this,this.rightSE.otherSE=this.leftSE,this.leftSE.otherSE=this.rightSE}bbox(){let w=this.leftSE.point.y,E=this.rightSE.point.y;return{ll:{x:this.leftSE.point.x,y:w<E?w:E},ur:{x:this.rightSE.point.x,y:w>E?w:E}}}vector(){return{x:this.rightSE.point.x-this.leftSE.point.x,y:this.rightSE.point.y-this.leftSE.point.y}}isAnEndpoint(w){return w.x===this.leftSE.point.x&&w.y===this.leftSE.point.y||w.x===this.rightSE.point.x&&w.y===this.rightSE.point.y}comparePoint(w){if(this.isAnEndpoint(w))return 0;let E=this.leftSE.point,C=this.rightSE.point,D=this.vector();if(E.x===C.x)return w.x===E.x?0:w.x<E.x?1:-1;let F=(w.y-E.y)/D.y,Q=E.x+F*D.x;if(w.x===Q)return 0;let J=(w.x-E.x)/D.x,lt=E.y+J*D.y;return w.y===lt?0:w.y<lt?-1:1}getIntersection(w){let E=this.bbox(),C=w.bbox(),D=p(E,C);if(D===null)return null;let F=this.leftSE.point,Q=this.rightSE.point,J=w.leftSE.point,lt=w.rightSE.point,ft=y(E,J)&&this.comparePoint(J)===0,Ct=y(C,F)&&w.comparePoint(F)===0,L=y(E,lt)&&this.comparePoint(lt)===0,tt=y(C,Q)&&w.comparePoint(Q)===0;if(Ct&&ft)return tt&&!L?Q:!tt&&L?lt:null;if(Ct)return L&&F.x===lt.x&&F.y===lt.y?null:F;if(ft)return tt&&Q.x===J.x&&Q.y===J.y?null:J;if(tt&&L)return null;if(tt)return Q;if(L)return lt;let nt=Nt(F,this.vector(),J,w.vector());return nt===null||!y(D,nt)?null:M.round(nt.x,nt.y)}split(w){let E=[],C=w.events!==void 0,D=new H(w,!0),F=new H(w,!1),Q=this.rightSE;this.replaceRightSE(F),E.push(F),E.push(D);let J=new K(D,Q,this.rings.slice(),this.windings.slice());return H.comparePoints(J.leftSE.point,J.rightSE.point)>0&&J.swapEvents(),H.comparePoints(this.leftSE.point,this.rightSE.point)>0&&this.swapEvents(),C&&(D.checkForConsuming(),F.checkForConsuming()),E}swapEvents(){let w=this.rightSE;this.rightSE=this.leftSE,this.leftSE=w,this.leftSE.isLeft=!0,this.rightSE.isLeft=!1;for(let E=0,C=this.windings.length;E<C;E++)this.windings[E]*=-1}consume(w){let E=this,C=w;for(;E.consumedBy;)E=E.consumedBy;for(;C.consumedBy;)C=C.consumedBy;let D=K.compare(E,C);if(D!==0){if(D>0){let F=E;E=C,C=F}if(E.prev===C){let F=E;E=C,C=F}for(let F=0,Q=C.rings.length;F<Q;F++){let J=C.rings[F],lt=C.windings[F],ft=E.rings.indexOf(J);ft===-1?(E.rings.push(J),E.windings.push(lt)):E.windings[ft]+=lt}C.rings=null,C.windings=null,C.consumedBy=E,C.leftSE.consumedBy=E.leftSE,C.rightSE.consumedBy=E.rightSE}}prevInResult(){return this._prevInResult!==void 0?this._prevInResult:(this.prev?this.prev.isInResult()?this._prevInResult=this.prev:this._prevInResult=this.prev.prevInResult():this._prevInResult=null,this._prevInResult)}beforeState(){if(this._beforeState!==void 0)return this._beforeState;if(!this.prev)this._beforeState={rings:[],windings:[],multiPolys:[]};else{let w=this.prev.consumedBy||this.prev;this._beforeState=w.afterState()}return this._beforeState}afterState(){if(this._afterState!==void 0)return this._afterState;let w=this.beforeState();this._afterState={rings:w.rings.slice(0),windings:w.windings.slice(0),multiPolys:[]};let E=this._afterState.rings,C=this._afterState.windings,D=this._afterState.multiPolys;for(let J=0,lt=this.rings.length;J<lt;J++){let ft=this.rings[J],Ct=this.windings[J],L=E.indexOf(ft);L===-1?(E.push(ft),C.push(Ct)):C[L]+=Ct}let F=[],Q=[];for(let J=0,lt=E.length;J<lt;J++){if(C[J]===0)continue;let ft=E[J],Ct=ft.poly;if(Q.indexOf(Ct)===-1)if(ft.isExterior)F.push(Ct);else{Q.indexOf(Ct)===-1&&Q.push(Ct);let L=F.indexOf(ft.poly);L!==-1&&F.splice(L,1)}}for(let J=0,lt=F.length;J<lt;J++){let ft=F[J].multiPoly;D.indexOf(ft)===-1&&D.push(ft)}return this._afterState}isInResult(){if(this.consumedBy)return!1;if(this._isInResult!==void 0)return this._isInResult;let w=this.beforeState().multiPolys,E=this.afterState().multiPolys;switch(Ht.type){case"union":{let C=w.length===0,D=E.length===0;this._isInResult=C!==D;break}case"intersection":{let C,D;w.length<E.length?(C=w.length,D=E.length):(C=E.length,D=w.length),this._isInResult=D===Ht.numMultiPolys&&C<D;break}case"xor":{let C=Math.abs(w.length-E.length);this._isInResult=C%2===1;break}case"difference":{let C=D=>D.length===1&&D[0].isSubject;this._isInResult=C(w)!==C(E);break}default:throw new Error(`Unrecognized operation type found ${Ht.type}`)}return this._isInResult}}class et{constructor(w,E,C){if(!Array.isArray(w)||w.length===0)throw new Error("Input geometry is not a valid Polygon or MultiPolygon");if(this.poly=E,this.isExterior=C,this.segments=[],typeof w[0][0]!="number"||typeof w[0][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let D=M.round(w[0][0],w[0][1]);this.bbox={ll:{x:D.x,y:D.y},ur:{x:D.x,y:D.y}};let F=D;for(let Q=1,J=w.length;Q<J;Q++){if(typeof w[Q][0]!="number"||typeof w[Q][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let lt=M.round(w[Q][0],w[Q][1]);lt.x===F.x&&lt.y===F.y||(this.segments.push(K.fromRing(F,lt,this)),lt.x<this.bbox.ll.x&&(this.bbox.ll.x=lt.x),lt.y<this.bbox.ll.y&&(this.bbox.ll.y=lt.y),lt.x>this.bbox.ur.x&&(this.bbox.ur.x=lt.x),lt.y>this.bbox.ur.y&&(this.bbox.ur.y=lt.y),F=lt)}(D.x!==F.x||D.y!==F.y)&&this.segments.push(K.fromRing(F,D,this))}getSweepEvents(){let w=[];for(let E=0,C=this.segments.length;E<C;E++){let D=this.segments[E];w.push(D.leftSE),w.push(D.rightSE)}return w}}class ${constructor(w,E){if(!Array.isArray(w))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");this.exteriorRing=new et(w[0],this,!0),this.bbox={ll:{x:this.exteriorRing.bbox.ll.x,y:this.exteriorRing.bbox.ll.y},ur:{x:this.exteriorRing.bbox.ur.x,y:this.exteriorRing.bbox.ur.y}},this.interiorRings=[];for(let C=1,D=w.length;C<D;C++){let F=new et(w[C],this,!1);F.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=F.bbox.ll.x),F.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=F.bbox.ll.y),F.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=F.bbox.ur.x),F.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=F.bbox.ur.y),this.interiorRings.push(F)}this.multiPoly=E}getSweepEvents(){let w=this.exteriorRing.getSweepEvents();for(let E=0,C=this.interiorRings.length;E<C;E++){let D=this.interiorRings[E].getSweepEvents();for(let F=0,Q=D.length;F<Q;F++)w.push(D[F])}return w}}class ht{constructor(w,E){if(!Array.isArray(w))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");try{typeof w[0][0][0]=="number"&&(w=[w])}catch{}this.polys=[],this.bbox={ll:{x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY},ur:{x:Number.NEGATIVE_INFINITY,y:Number.NEGATIVE_INFINITY}};for(let C=0,D=w.length;C<D;C++){let F=new $(w[C],this);F.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=F.bbox.ll.x),F.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=F.bbox.ll.y),F.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=F.bbox.ur.x),F.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=F.bbox.ur.y),this.polys.push(F)}this.isSubject=E}getSweepEvents(){let w=[];for(let E=0,C=this.polys.length;E<C;E++){let D=this.polys[E].getSweepEvents();for(let F=0,Q=D.length;F<Q;F++)w.push(D[F])}return w}}class yt{static factory(w){let E=[];for(let C=0,D=w.length;C<D;C++){let F=w[C];if(!F.isInResult()||F.ringOut)continue;let Q=null,J=F.leftSE,lt=F.rightSE,ft=[J],Ct=J.point,L=[];for(;Q=J,J=lt,ft.push(J),J.point!==Ct;)for(;;){let tt=J.getAvailableLinkedEvents();if(tt.length===0){let Rt=ft[0].point,Tt=ft[ft.length-1].point;throw new Error(`Unable to complete output ring starting at [${Rt.x}, ${Rt.y}]. Last matching segment found ends at [${Tt.x}, ${Tt.y}].`)}if(tt.length===1){lt=tt[0].otherSE;break}let nt=null;for(let Rt=0,Tt=L.length;Rt<Tt;Rt++)if(L[Rt].point===J.point){nt=Rt;break}if(nt!==null){let Rt=L.splice(nt)[0],Tt=ft.splice(Rt.index);Tt.unshift(Tt[0].otherSE),E.push(new yt(Tt.reverse()));continue}L.push({index:ft.length,point:J.point});let At=J.getLeftmostComparator(Q);lt=tt.sort(At)[0].otherSE;break}E.push(new yt(ft))}return E}constructor(w){this.events=w;for(let E=0,C=w.length;E<C;E++)w[E].segment.ringOut=this;this.poly=null}getGeom(){let w=this.events[0].point,E=[w];for(let ft=1,Ct=this.events.length-1;ft<Ct;ft++){let L=this.events[ft].point,tt=this.events[ft+1].point;at(L,w,tt)!==0&&(E.push(L),w=L)}if(E.length===1)return null;let C=E[0],D=E[1];at(C,w,D)===0&&E.shift(),E.push(E[0]);let F=this.isExteriorRing()?1:-1,Q=this.isExteriorRing()?0:E.length-1,J=this.isExteriorRing()?E.length:-1,lt=[];for(let ft=Q;ft!=J;ft+=F)lt.push([E[ft].x,E[ft].y]);return lt}isExteriorRing(){if(this._isExteriorRing===void 0){let w=this.enclosingRing();this._isExteriorRing=w?!w.isExteriorRing():!0}return this._isExteriorRing}enclosingRing(){return this._enclosingRing===void 0&&(this._enclosingRing=this._calcEnclosingRing()),this._enclosingRing}_calcEnclosingRing(){let w=this.events[0];for(let D=1,F=this.events.length;D<F;D++){let Q=this.events[D];H.compare(w,Q)>0&&(w=Q)}let E=w.segment.prevInResult(),C=E?E.prevInResult():null;for(;;){if(!E)return null;if(!C)return E.ringOut;if(C.ringOut!==E.ringOut)return C.ringOut.enclosingRing()!==E.ringOut?E.ringOut:E.ringOut.enclosingRing();E=C.prevInResult(),C=E?E.prevInResult():null}}}class It{constructor(w){this.exteriorRing=w,w.poly=this,this.interiorRings=[]}addInterior(w){this.interiorRings.push(w),w.poly=this}getGeom(){let w=[this.exteriorRing.getGeom()];if(w[0]===null)return null;for(let E=0,C=this.interiorRings.length;E<C;E++){let D=this.interiorRings[E].getGeom();D!==null&&w.push(D)}return w}}class Pt{constructor(w){this.rings=w,this.polys=this._composePolys(w)}getGeom(){let w=[];for(let E=0,C=this.polys.length;E<C;E++){let D=this.polys[E].getGeom();D!==null&&w.push(D)}return w}_composePolys(w){let E=[];for(let C=0,D=w.length;C<D;C++){let F=w[C];if(!F.poly)if(F.isExteriorRing())E.push(new It(F));else{let Q=F.enclosingRing();Q.poly||E.push(new It(Q)),Q.poly.addInterior(F)}}return E}}class Ft{constructor(w){let E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:K.compare;this.queue=w,this.tree=new c(E),this.segments=[]}process(w){let E=w.segment,C=[];if(w.consumedBy)return w.isLeft?this.queue.remove(w.otherSE):this.tree.remove(E),C;let D=w.isLeft?this.tree.add(E):this.tree.find(E);if(!D)throw new Error(`Unable to find segment #${E.id} [${E.leftSE.point.x}, ${E.leftSE.point.y}] -> [${E.rightSE.point.x}, ${E.rightSE.point.y}] in SweepLine tree.`);let F=D,Q=D,J,lt;for(;J===void 0;)F=this.tree.prev(F),F===null?J=null:F.key.consumedBy===void 0&&(J=F.key);for(;lt===void 0;)Q=this.tree.next(Q),Q===null?lt=null:Q.key.consumedBy===void 0&&(lt=Q.key);if(w.isLeft){let ft=null;if(J){let L=J.getIntersection(E);if(L!==null&&(E.isAnEndpoint(L)||(ft=L),!J.isAnEndpoint(L))){let tt=this._splitSafely(J,L);for(let nt=0,At=tt.length;nt<At;nt++)C.push(tt[nt])}}let Ct=null;if(lt){let L=lt.getIntersection(E);if(L!==null&&(E.isAnEndpoint(L)||(Ct=L),!lt.isAnEndpoint(L))){let tt=this._splitSafely(lt,L);for(let nt=0,At=tt.length;nt<At;nt++)C.push(tt[nt])}}if(ft!==null||Ct!==null){let L=null;ft===null?L=Ct:Ct===null?L=ft:L=H.comparePoints(ft,Ct)<=0?ft:Ct,this.queue.remove(E.rightSE),C.push(E.rightSE);let tt=E.split(L);for(let nt=0,At=tt.length;nt<At;nt++)C.push(tt[nt])}C.length>0?(this.tree.remove(E),C.push(w)):(this.segments.push(E),E.prev=J)}else{if(J&&lt){let ft=J.getIntersection(lt);if(ft!==null){if(!J.isAnEndpoint(ft)){let Ct=this._splitSafely(J,ft);for(let L=0,tt=Ct.length;L<tt;L++)C.push(Ct[L])}if(!lt.isAnEndpoint(ft)){let Ct=this._splitSafely(lt,ft);for(let L=0,tt=Ct.length;L<tt;L++)C.push(Ct[L])}}}this.tree.remove(E)}return C}_splitSafely(w,E){this.tree.remove(w);let C=w.rightSE;this.queue.remove(C);let D=w.split(E);return D.push(C),w.consumedBy===void 0&&this.tree.add(w),D}}let Ut=typeof process<"u"&&process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE||1e6,Y=typeof process<"u"&&process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS||1e6;class te{run(w,E,C){Ht.type=w,M.reset();let D=[new ht(E,!0)];for(let L=0,tt=C.length;L<tt;L++)D.push(new ht(C[L],!1));if(Ht.numMultiPolys=D.length,Ht.type==="difference"){let L=D[0],tt=1;for(;tt<D.length;)p(D[tt].bbox,L.bbox)!==null?tt++:D.splice(tt,1)}if(Ht.type==="intersection")for(let L=0,tt=D.length;L<tt;L++){let nt=D[L];for(let At=L+1,Rt=D.length;At<Rt;At++)if(p(nt.bbox,D[At].bbox)===null)return[]}let F=new c(H.compare);for(let L=0,tt=D.length;L<tt;L++){let nt=D[L].getSweepEvents();for(let At=0,Rt=nt.length;At<Rt;At++)if(F.insert(nt[At]),F.size>Ut)throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big).")}let Q=new Ft(F),J=F.size,lt=F.pop();for(;lt;){let L=lt.key;if(F.size===J){let nt=L.segment;throw new Error(`Unable to pop() ${L.isLeft?"left":"right"} SweepEvent [${L.point.x}, ${L.point.y}] from segment #${nt.id} [${nt.leftSE.point.x}, ${nt.leftSE.point.y}] -> [${nt.rightSE.point.x}, ${nt.rightSE.point.y}] from queue.`)}if(F.size>Ut)throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big).");if(Q.segments.length>Y)throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments).");let tt=Q.process(L);for(let nt=0,At=tt.length;nt<At;nt++){let Rt=tt[nt];Rt.consumedBy===void 0&&F.insert(Rt)}J=F.size,lt=F.pop()}M.reset();let ft=yt.factory(Q.segments);return new Pt(ft).getGeom()}}let Ht=new te;var Mt={union:function(X){for(var w=arguments.length,E=new Array(w>1?w-1:0),C=1;C<w;C++)E[C-1]=arguments[C];return Ht.run("union",X,E)},intersection:function(X){for(var w=arguments.length,E=new Array(w>1?w-1:0),C=1;C<w;C++)E[C-1]=arguments[C];return Ht.run("intersection",X,E)},xor:function(X){for(var w=arguments.length,E=new Array(w>1?w-1:0),C=1;C<w;C++)E[C-1]=arguments[C];return Ht.run("xor",X,E)},difference:function(X){for(var w=arguments.length,E=new Array(w>1?w-1:0),C=1;C<w;C++)E[C-1]=arguments[C];return Ht.run("difference",X,E)}};return Mt}))});/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var dp=0,Sh=1,pp=2;var wh=0,Ks=1,mp=2,qr=3,Cs=0,Bn=1,Qe=2,Fi=0,Yr=1,Ji=2,Eh=3,Th=4,gp=5;var Js=100,yp=101,xp=102,bp=103,vp=104,_p=200,Mp=201,Sp=202,wp=203,Ah=204,Rh=205,Ep=206,Tp=207,Ap=208,Rp=209,Cp=210,Ip=211,Pp=212,Lp=213,Np=214,bc=0,vc=1,_c=2,Cr=3,Mc=4,Sc=5,Ir=6,wc=7,tl=0,Dp=1,Fp=2,bi=0,Ch=1,Ih=2,Ph=3,da=4,Lh=5,Nh=6,Dh=7;var Fh=300,Is=301,Qs=302,el=303,nl=304,pa=306,Ws=1e3,Ci=1001,Ec=1002,yn=1003,Up=1004;var ma=1005;var Sn=1006,il=1007;var Ps=1008;var Yn=1009,Uh=1010,kh=1011,$r=1012,sl=1013,vi=1014,ai=1015,_i=1016,rl=1017,ol=1018,Zr=1020,Oh=35902,Bh=35899,zh=1021,Hh=1022,ci=1023,Pi=1026,Ls=1027,al=1028,cl=1029,Ns=1030,ll=1031;var ul=1033,ga=33776,ya=33777,xa=33778,ba=33779,hl=35840,fl=35841,dl=35842,pl=35843,ml=36196,gl=37492,yl=37496,xl=37488,bl=37489,va=37490,vl=37491,_l=37808,Ml=37809,Sl=37810,wl=37811,El=37812,Tl=37813,Al=37814,Rl=37815,Cl=37816,Il=37817,Pl=37818,Ll=37819,Nl=37820,Dl=37821,Fl=36492,Ul=36494,kl=36495,Ol=36283,Bl=36284,_a=36285,zl=36286;var Lo=2300,Tc=2301,yc=2302,uh=2303,hh=2400,fh=2401,dh=2402;var kp=3200;var Ma=0,Op=1,Qi="",Ke="srgb",No="srgb-linear",Do="linear",Le="srgb";var xc=7680;var Bp=519,zp=512,Hp=513,Gp=514,Hl=515,Vp=516,Wp=517,Gl=518,Xp=519,Gh=35044,zn=35048;var Vh="300 es",gi=2e3,Pr=2001;function xx(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function bx(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Fo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function qp(){let n=Fo("canvas");return n.style.display="block",n}var Ad={},Lr=null;function Uo(...n){let t="THREE."+n.shift();Lr?Lr("log",t,...n):console.log(t,...n)}function Yp(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ce(...n){n=Yp(n);let t="THREE."+n.shift();if(Lr)Lr("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function de(...n){n=Yp(n);let t="THREE."+n.shift();if(Lr)Lr("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Vs(...n){let t=n.join(" ");t in Ad||(Ad[t]=!0,ce(...n))}function $p(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Zp={[bc]:vc,[_c]:Ir,[Mc]:wc,[Cr]:Sc,[vc]:bc,[Ir]:_c,[wc]:Mc,[Sc]:Cr},Li=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rd=1234567,Ro=Math.PI/180,Nr=180/Math.PI;function Ii(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(In[n&255]+In[n>>8&255]+In[n>>16&255]+In[n>>24&255]+"-"+In[t&255]+In[t>>8&255]+"-"+In[t>>16&15|64]+In[t>>24&255]+"-"+In[e&63|128]+In[e>>8&255]+"-"+In[e>>16&255]+In[e>>24&255]+In[i&255]+In[i>>8&255]+In[i>>16&255]+In[i>>24&255]).toLowerCase()}function pe(n,t,e){return Math.max(t,Math.min(e,n))}function Wh(n,t){return(n%t+t)%t}function vx(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function _x(n,t,e){return n!==t?(e-n)/(t-n):0}function Co(n,t,e){return(1-e)*n+e*t}function Mx(n,t,e,i){return Co(n,t,1-Math.exp(-e*i))}function Sx(n,t=1){return t-Math.abs(Wh(n,t*2)-t)}function wx(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Ex(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Tx(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Ax(n,t){return n+Math.random()*(t-n)}function Rx(n){return n*(.5-Math.random())}function Cx(n){n!==void 0&&(Rd=n);let t=Rd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ix(n){return n*Ro}function Px(n){return n*Nr}function Lx(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Nx(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Dx(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Fx(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+i)/2),u=o((t+i)/2),f=r((t-i)/2),h=o((t-i)/2),d=r((i-t)/2),m=o((i-t)/2);switch(s){case"XYX":n.set(a*u,c*f,c*h,a*l);break;case"YZY":n.set(c*h,a*u,c*f,a*l);break;case"ZXZ":n.set(c*f,c*h,a*u,a*l);break;case"XZX":n.set(a*u,c*m,c*d,a*l);break;case"YXY":n.set(c*d,a*u,c*m,a*l);break;case"ZYZ":n.set(c*m,c*d,a*u,a*l);break;default:ce("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function mi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Fe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var se={DEG2RAD:Ro,RAD2DEG:Nr,generateUUID:Ii,clamp:pe,euclideanModulo:Wh,mapLinear:vx,inverseLerp:_x,lerp:Co,damp:Mx,pingpong:Sx,smoothstep:wx,smootherstep:Ex,randInt:Tx,randFloat:Ax,randFloatSpread:Rx,seededRandom:Cx,degToRad:Ix,radToDeg:Px,isPowerOfTwo:Lx,ceilPowerOfTwo:Nx,floorPowerOfTwo:Dx,setQuaternionFromProperEuler:Fx,normalize:Fe,denormalize:mi},kt=class n{static{n.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(pe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(pe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},xn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],f=i[s+3],h=r[o+0],d=r[o+1],m=r[o+2],y=r[o+3];if(f!==y||c!==h||l!==d||u!==m){let p=c*h+l*d+u*m+f*y;p<0&&(h=-h,d=-d,m=-m,y=-y,p=-p);let g=1-a;if(p<.9995){let x=Math.acos(p),v=Math.sin(x);g=Math.sin(g*x)/v,a=Math.sin(a*x)/v,c=c*g+h*a,l=l*g+d*a,u=u*g+m*a,f=f*g+y*a}else{c=c*g+h*a,l=l*g+d*a,u=u*g+m*a,f=f*g+y*a;let x=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=x,l*=x,u*=x,f*=x}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],f=r[o],h=r[o+1],d=r[o+2],m=r[o+3];return t[e]=a*m+u*f+c*d-l*h,t[e+1]=c*m+u*h+l*f-a*d,t[e+2]=l*m+u*d+a*h-c*f,t[e+3]=u*m-a*f-c*h-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),f=a(r/2),h=c(i/2),d=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=h*u*f+l*d*m,this._y=l*d*f-h*u*m,this._z=l*u*m+h*d*f,this._w=l*u*f-h*d*m;break;case"YXZ":this._x=h*u*f+l*d*m,this._y=l*d*f-h*u*m,this._z=l*u*m-h*d*f,this._w=l*u*f+h*d*m;break;case"ZXY":this._x=h*u*f-l*d*m,this._y=l*d*f+h*u*m,this._z=l*u*m+h*d*f,this._w=l*u*f-h*d*m;break;case"ZYX":this._x=h*u*f-l*d*m,this._y=l*d*f+h*u*m,this._z=l*u*m-h*d*f,this._w=l*u*f+h*d*m;break;case"YZX":this._x=h*u*f+l*d*m,this._y=l*d*f+h*u*m,this._z=l*u*m-h*d*f,this._w=l*u*f-h*d*m;break;case"XZY":this._x=h*u*f-l*d*m,this._y=l*d*f-h*u*m,this._z=l*u*m+h*d*f,this._w=l*u*f+h*d*m;break;default:ce("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],f=e[10],h=i+a+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(i>a&&i>f){let d=2*Math.sqrt(1+i-a-f);this._w=(u-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>f){let d=2*Math.sqrt(1+a-i-f);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+f-i-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(pe(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},W=class n{static{n.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Cd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Cd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),u=2*(a*e-r*s),f=2*(r*i-o*e);return this.x=e+c*l+o*f-a*u,this.y=i+c*u+a*l-r*f,this.z=s+c*f+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(pe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ou.copy(this).projectOnVector(t),this.sub(Ou)}reflect(t){return this.sub(Ou.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(pe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ou=new W,Cd=new xn,me=class n{static{n.prototype.isMatrix3=!0}constructor(t,e,i,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],f=i[7],h=i[2],d=i[5],m=i[8],y=s[0],p=s[3],g=s[6],x=s[1],v=s[4],b=s[7],_=s[2],M=s[5],R=s[8];return r[0]=o*y+a*x+c*_,r[3]=o*p+a*v+c*M,r[6]=o*g+a*b+c*R,r[1]=l*y+u*x+f*_,r[4]=l*p+u*v+f*M,r[7]=l*g+u*b+f*R,r[2]=h*y+d*x+m*_,r[5]=h*p+d*v+m*M,r[8]=h*g+d*b+m*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=u*o-a*l,h=a*c-u*r,d=l*r-o*c,m=e*f+i*h+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/m;return t[0]=f*y,t[1]=(s*l-u*i)*y,t[2]=(a*i-s*o)*y,t[3]=h*y,t[4]=(u*e-s*c)*y,t[5]=(s*r-a*e)*y,t[6]=d*y,t[7]=(i*c-l*e)*y,t[8]=(o*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return Vs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Bu.makeScale(t,e)),this}rotate(t){return Vs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Bu.makeRotation(-t)),this}translate(t,e){return Vs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Bu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Bu=new me,Id=new me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pd=new me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ux(){let n={enabled:!0,workingColorSpace:No,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Le&&(s.r=ji(s.r),s.g=ji(s.g),s.b=ji(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Le&&(s.r=Rr(s.r),s.g=Rr(s.g),s.b=Rr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Qi?Do:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Vs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Vs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[No]:{primaries:t,whitePoint:i,transfer:Do,toXYZ:Id,fromXYZ:Pd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ke},outputColorSpaceConfig:{drawingBufferColorSpace:Ke}},[Ke]:{primaries:t,whitePoint:i,transfer:Le,toXYZ:Id,fromXYZ:Pd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ke}}}),n}var _e=Ux();function ji(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Rr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var fr,Ac=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{fr===void 0&&(fr=Fo("canvas")),fr.width=t.width,fr.height=t.height;let s=fr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=fr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Fo("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ji(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ji(e[i]/255)*255):e[i]=ji(e[i]);return{data:e,width:t.width,height:t.height}}else return ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},kx=0,Dr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:kx++}),this.uuid=Ii(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(zu(s[o].image)):r.push(zu(s[o]))}else r=zu(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function zu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ac.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ce("Texture: Unable to serialize Texture."),{})}var Ox=0,Hu=new W,wn=class n extends Li{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Ci,s=Ci,r=Sn,o=Ps,a=ci,c=Yn,l=n.DEFAULT_ANISOTROPY,u=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ox++}),this.uuid=Ii(),this.name="",this.source=new Dr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Hu).x}get height(){return this.source.getSize(Hu).y}get depth(){return this.source.getSize(Hu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){ce(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ce(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ws:t.x=t.x-Math.floor(t.x);break;case Ci:t.x=t.x<0?0:1;break;case Ec:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ws:t.y=t.y-Math.floor(t.y);break;case Ci:t.y=t.y<0?0:1;break;case Ec:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=Fh;wn.DEFAULT_ANISOTROPY=1;var Ne=class n{static{n.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],m=c[9],y=c[2],p=c[6],g=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-y)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+y)<.1&&Math.abs(m+p)<.1&&Math.abs(l+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(l+1)/2,b=(d+1)/2,_=(g+1)/2,M=(u+h)/4,R=(f+y)/4,S=(m+p)/4;return v>b&&v>_?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=M/i,r=R/i):b>_?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=M/s,r=S/s):_<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(_),i=R/r,s=S/r),this.set(i,s,r,e),this}let x=Math.sqrt((p-m)*(p-m)+(f-y)*(f-y)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(p-m)/x,this.y=(f-y)/x,this.z=(h-u)/x,this.w=Math.acos((l+d+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this.w=pe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this.w=pe(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(pe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Rc=class extends Li{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ne(0,0,t,e),this.scissorTest=!1,this.viewport=new Ne(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new wn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Dr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xn=class extends Rc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},ko=class extends wn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Cc=class extends wn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ee=class n{static{n.prototype.isMatrix4=!0}constructor(t,e,i,s,r,o,a,c,l,u,f,h,d,m,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,u,f,h,d,m,y,p)}set(t,e,i,s,r,o,a,c,l,u,f,h,d,m,y,p){let g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=u,g[10]=f,g[14]=h,g[3]=d,g[7]=m,g[11]=y,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/dr.setFromMatrixColumn(t,0).length(),r=1/dr.setFromMatrixColumn(t,1).length(),o=1/dr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let h=o*u,d=o*f,m=a*u,y=a*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=d+m*l,e[5]=h-y*l,e[9]=-a*c,e[2]=y-h*l,e[6]=m+d*l,e[10]=o*c}else if(t.order==="YXZ"){let h=c*u,d=c*f,m=l*u,y=l*f;e[0]=h+y*a,e[4]=m*a-d,e[8]=o*l,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-m,e[6]=y+h*a,e[10]=o*c}else if(t.order==="ZXY"){let h=c*u,d=c*f,m=l*u,y=l*f;e[0]=h-y*a,e[4]=-o*f,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*u,e[9]=y-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let h=o*u,d=o*f,m=a*u,y=a*f;e[0]=c*u,e[4]=m*l-d,e[8]=h*l+y,e[1]=c*f,e[5]=y*l+h,e[9]=d*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let h=o*c,d=o*l,m=a*c,y=a*l;e[0]=c*u,e[4]=y-h*f,e[8]=m*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*f+m,e[10]=h-y*f}else if(t.order==="XZY"){let h=o*c,d=o*l,m=a*c,y=a*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=h*f+y,e[5]=o*u,e[9]=d*f-m,e[2]=m*f-d,e[6]=a*u,e[10]=y*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Bx,t,zx)}lookAt(t,e,i){let s=this.elements;return Zn.subVectors(t,e),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),ps.crossVectors(i,Zn),ps.lengthSq()===0&&(Math.abs(i.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),ps.crossVectors(i,Zn)),ps.normalize(),Wa.crossVectors(Zn,ps),s[0]=ps.x,s[4]=Wa.x,s[8]=Zn.x,s[1]=ps.y,s[5]=Wa.y,s[9]=Zn.y,s[2]=ps.z,s[6]=Wa.z,s[10]=Zn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],f=i[5],h=i[9],d=i[13],m=i[2],y=i[6],p=i[10],g=i[14],x=i[3],v=i[7],b=i[11],_=i[15],M=s[0],R=s[4],S=s[8],T=s[12],I=s[1],P=s[5],k=s[9],z=s[13],O=s[2],U=s[6],V=s[10],j=s[14],dt=s[3],ot=s[7],G=s[11],q=s[15];return r[0]=o*M+a*I+c*O+l*dt,r[4]=o*R+a*P+c*U+l*ot,r[8]=o*S+a*k+c*V+l*G,r[12]=o*T+a*z+c*j+l*q,r[1]=u*M+f*I+h*O+d*dt,r[5]=u*R+f*P+h*U+d*ot,r[9]=u*S+f*k+h*V+d*G,r[13]=u*T+f*z+h*j+d*q,r[2]=m*M+y*I+p*O+g*dt,r[6]=m*R+y*P+p*U+g*ot,r[10]=m*S+y*k+p*V+g*G,r[14]=m*T+y*z+p*j+g*q,r[3]=x*M+v*I+b*O+_*dt,r[7]=x*R+v*P+b*U+_*ot,r[11]=x*S+v*k+b*V+_*G,r[15]=x*T+v*z+b*j+_*q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],f=t[6],h=t[10],d=t[14],m=t[3],y=t[7],p=t[11],g=t[15],x=c*d-l*h,v=a*d-l*f,b=a*h-c*f,_=o*d-l*u,M=o*h-c*u,R=o*f-a*u;return e*(y*x-p*v+g*b)-i*(m*x-p*_+g*M)+s*(m*v-y*_+g*R)-r*(m*b-y*M+p*R)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],u=t[10];return e*(o*u-a*l)-i*(r*u-a*c)+s*(r*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],d=t[11],m=t[12],y=t[13],p=t[14],g=t[15],x=e*a-i*o,v=e*c-s*o,b=e*l-r*o,_=i*c-s*a,M=i*l-r*a,R=s*l-r*c,S=u*y-f*m,T=u*p-h*m,I=u*g-d*m,P=f*p-h*y,k=f*g-d*y,z=h*g-d*p,O=x*z-v*k+b*P+_*I-M*T+R*S;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/O;return t[0]=(a*z-c*k+l*P)*U,t[1]=(s*k-i*z-r*P)*U,t[2]=(y*R-p*M+g*_)*U,t[3]=(h*M-f*R-d*_)*U,t[4]=(c*I-o*z-l*T)*U,t[5]=(e*z-s*I+r*T)*U,t[6]=(p*b-m*R-g*v)*U,t[7]=(u*R-h*b+d*v)*U,t[8]=(o*k-a*I+l*S)*U,t[9]=(i*I-e*k-r*S)*U,t[10]=(m*M-y*b+g*x)*U,t[11]=(f*b-u*M-d*x)*U,t[12]=(a*T-o*P-c*S)*U,t[13]=(e*P-i*T+s*S)*U,t[14]=(y*v-m*_-p*x)*U,t[15]=(u*_-f*v+h*x)*U,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,f=a+a,h=r*l,d=r*u,m=r*f,y=o*u,p=o*f,g=a*f,x=c*l,v=c*u,b=c*f,_=i.x,M=i.y,R=i.z;return s[0]=(1-(y+g))*_,s[1]=(d+b)*_,s[2]=(m-v)*_,s[3]=0,s[4]=(d-b)*M,s[5]=(1-(h+g))*M,s[6]=(p+x)*M,s[7]=0,s[8]=(m+v)*R,s[9]=(p-x)*R,s[10]=(1-(h+y))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=dr.set(s[0],s[1],s[2]).length(),a=dr.set(s[4],s[5],s[6]).length(),c=dr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),fi.copy(this);let l=1/o,u=1/a,f=1/c;return fi.elements[0]*=l,fi.elements[1]*=l,fi.elements[2]*=l,fi.elements[4]*=u,fi.elements[5]*=u,fi.elements[6]*=u,fi.elements[8]*=f,fi.elements[9]*=f,fi.elements[10]*=f,e.setFromRotationMatrix(fi),i.x=o,i.y=a,i.z=c,this}makePerspective(t,e,i,s,r,o,a=gi,c=!1){let l=this.elements,u=2*r/(e-t),f=2*r/(i-s),h=(e+t)/(e-t),d=(i+s)/(i-s),m,y;if(c)m=r/(o-r),y=o*r/(o-r);else if(a===gi)m=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===Pr)m=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=gi,c=!1){let l=this.elements,u=2/(e-t),f=2/(i-s),h=-(e+t)/(e-t),d=-(i+s)/(i-s),m,y;if(c)m=1/(o-r),y=o/(o-r);else if(a===gi)m=-2/(o-r),y=-(o+r)/(o-r);else if(a===Pr)m=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=m,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},dr=new W,fi=new Ee,Bx=new W(0,0,0),zx=new W(1,1,1),ps=new W,Wa=new W,Zn=new W,Ld=new Ee,Nd=new xn,Ni=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-pe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-pe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(pe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ld.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ld,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nd.setFromEuler(this),this.setFromQuaternion(Nd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ni.DEFAULT_ORDER="XYZ";var Fr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Hx=0,Dd=new W,pr=new xn,Xi=new Ee,Xa=new W,vo=new W,Gx=new W,Vx=new xn,Fd=new W(1,0,0),Ud=new W(0,1,0),kd=new W(0,0,1),Od={type:"added"},Wx={type:"removed"},mr={type:"childadded",child:null},Gu={type:"childremoved",child:null},Ye=class n extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hx++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new W,e=new Ni,i=new xn,s=new W(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ee},normalMatrix:{value:new me}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return pr.setFromAxisAngle(t,e),this.quaternion.multiply(pr),this}rotateOnWorldAxis(t,e){return pr.setFromAxisAngle(t,e),this.quaternion.premultiply(pr),this}rotateX(t){return this.rotateOnAxis(Fd,t)}rotateY(t){return this.rotateOnAxis(Ud,t)}rotateZ(t){return this.rotateOnAxis(kd,t)}translateOnAxis(t,e){return Dd.copy(t).applyQuaternion(this.quaternion),this.position.add(Dd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fd,t)}translateY(t){return this.translateOnAxis(Ud,t)}translateZ(t){return this.translateOnAxis(kd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Xa.copy(t):Xa.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(vo,Xa,this.up):Xi.lookAt(Xa,vo,this.up),this.quaternion.setFromRotationMatrix(Xi),s&&(Xi.extractRotation(s.matrixWorld),pr.setFromRotationMatrix(Xi),this.quaternion.premultiply(pr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(de("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Od),mr.child=t,this.dispatchEvent(mr),mr.child=null):de("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wx),Gu.child=t,this.dispatchEvent(Gu),Gu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Od),mr.child=t,this.dispatchEvent(mr),mr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,t,Gx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,Vx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ye.DEFAULT_UP=new W(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ee=class extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}},Xx={type:"move"},Ur=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ee,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ee,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ee,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let y of t.hand.values()){let p=e.getJointPose(y,i),g=this._getHandJoint(l,y);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,m=.005;l.inputState.pinching&&h>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Xx)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new ee;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},jp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ms={h:0,s:0,l:0},qa={h:0,s:0,l:0};function Vu(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var qt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,_e.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=_e.workingColorSpace){return this.r=t,this.g=e,this.b=i,_e.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=_e.workingColorSpace){if(t=Wh(t,1),e=pe(e,0,1),i=pe(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Vu(o,r,t+1/3),this.g=Vu(o,r,t),this.b=Vu(o,r,t-1/3)}return _e.colorSpaceToWorking(this,s),this}setStyle(t,e=Ke){function i(r){r!==void 0&&parseFloat(r)<1&&ce("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ce("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);ce("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ke){let i=jp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):ce("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ji(t.r),this.g=ji(t.g),this.b=ji(t.b),this}copyLinearToSRGB(t){return this.r=Rr(t.r),this.g=Rr(t.g),this.b=Rr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ke){return _e.workingToColorSpace(Pn.copy(this),t),Math.round(pe(Pn.r*255,0,255))*65536+Math.round(pe(Pn.g*255,0,255))*256+Math.round(pe(Pn.b*255,0,255))}getHexString(t=Ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=_e.workingColorSpace){_e.workingToColorSpace(Pn.copy(this),e);let i=Pn.r,s=Pn.g,r=Pn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case i:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-i)/f+2;break;case r:c=(i-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=_e.workingColorSpace){return _e.workingToColorSpace(Pn.copy(this),e),t.r=Pn.r,t.g=Pn.g,t.b=Pn.b,t}getStyle(t=Ke){_e.workingToColorSpace(Pn.copy(this),t);let e=Pn.r,i=Pn.g,s=Pn.b;return t!==Ke?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ms),this.setHSL(ms.h+t,ms.s+e,ms.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ms),t.getHSL(qa);let i=Co(ms.h,qa.h,e),s=Co(ms.s,qa.s,e),r=Co(ms.l,qa.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pn=new qt;qt.NAMES=jp;var Oo=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new qt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ki=class extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},di=new W,qi=new W,Wu=new W,Yi=new W,gr=new W,yr=new W,Bd=new W,Xu=new W,qu=new W,Yu=new W,$u=new Ne,Zu=new Ne,ju=new Ne,bs=class n{constructor(t=new W,e=new W,i=new W){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),di.subVectors(t,e),s.cross(di);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){di.subVectors(s,e),qi.subVectors(i,e),Wu.subVectors(t,e);let o=di.dot(di),a=di.dot(qi),c=di.dot(Wu),l=qi.dot(qi),u=qi.dot(Wu),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;let h=1/f,d=(l*c-a*u)*h,m=(o*u-a*c)*h;return r.set(1-d-m,m,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,Yi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Yi.x),c.addScaledVector(o,Yi.y),c.addScaledVector(a,Yi.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return $u.setScalar(0),Zu.setScalar(0),ju.setScalar(0),$u.fromBufferAttribute(t,e),Zu.fromBufferAttribute(t,i),ju.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector($u,r.x),o.addScaledVector(Zu,r.y),o.addScaledVector(ju,r.z),o}static isFrontFacing(t,e,i,s){return di.subVectors(i,e),qi.subVectors(t,e),di.cross(qi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return di.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),di.cross(qi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;gr.subVectors(s,i),yr.subVectors(r,i),Xu.subVectors(t,i);let c=gr.dot(Xu),l=yr.dot(Xu);if(c<=0&&l<=0)return e.copy(i);qu.subVectors(t,s);let u=gr.dot(qu),f=yr.dot(qu);if(u>=0&&f<=u)return e.copy(s);let h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(gr,o);Yu.subVectors(t,r);let d=gr.dot(Yu),m=yr.dot(Yu);if(m>=0&&d<=m)return e.copy(r);let y=d*l-c*m;if(y<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(i).addScaledVector(yr,a);let p=u*m-d*f;if(p<=0&&f-u>=0&&d-m>=0)return Bd.subVectors(r,s),a=(f-u)/(f-u+(d-m)),e.copy(s).addScaledVector(Bd,a);let g=1/(p+y+h);return o=y*g,a=h*g,e.copy(i).addScaledVector(gr,o).addScaledVector(yr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Be=class{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(pi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(pi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=pi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,pi):pi.fromBufferAttribute(r,o),pi.applyMatrix4(t.matrixWorld),this.expandByPoint(pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ya.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ya.copy(i.boundingBox)),Ya.applyMatrix4(t.matrixWorld),this.union(Ya)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pi),pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_o),$a.subVectors(this.max,_o),xr.subVectors(t.a,_o),br.subVectors(t.b,_o),vr.subVectors(t.c,_o),gs.subVectors(br,xr),ys.subVectors(vr,br),Bs.subVectors(xr,vr);let e=[0,-gs.z,gs.y,0,-ys.z,ys.y,0,-Bs.z,Bs.y,gs.z,0,-gs.x,ys.z,0,-ys.x,Bs.z,0,-Bs.x,-gs.y,gs.x,0,-ys.y,ys.x,0,-Bs.y,Bs.x,0];return!Ku(e,xr,br,vr,$a)||(e=[1,0,0,0,1,0,0,0,1],!Ku(e,xr,br,vr,$a))?!1:(Za.crossVectors(gs,ys),e=[Za.x,Za.y,Za.z],Ku(e,xr,br,vr,$a))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},$i=[new W,new W,new W,new W,new W,new W,new W,new W],pi=new W,Ya=new Be,xr=new W,br=new W,vr=new W,gs=new W,ys=new W,Bs=new W,_o=new W,$a=new W,Za=new W,zs=new W;function Ku(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){zs.fromArray(n,r);let a=s.x*Math.abs(zs.x)+s.y*Math.abs(zs.y)+s.z*Math.abs(zs.z),c=t.dot(zs),l=e.dot(zs),u=i.dot(zs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var on=new W,ja=new kt,qx=0,Pe=class extends Li{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qx++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Gh,this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ja.fromBufferAttribute(this,e),ja.applyMatrix3(t),this.setXY(e,ja.x,ja.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.applyMatrix3(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.applyMatrix4(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.applyNormalMatrix(t),this.setXYZ(e,on.x,on.y,on.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.transformDirection(t),this.setXYZ(e,on.x,on.y,on.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=mi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Fe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),i=Fe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),i=Fe(i,this.array),s=Fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),i=Fe(i,this.array),s=Fe(s,this.array),r=Fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Bo=class extends Pe{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var zo=class extends Pe{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var $t=class extends Pe{constructor(t,e,i){super(new Float32Array(t),e,i)}},Yx=new Be,Mo=new W,Ju=new W,qn=class{constructor(t=new W,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Yx.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Mo.subVectors(t,this.center);let e=Mo.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Mo,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ju.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Mo.copy(t.center).add(Ju)),this.expandByPoint(Mo.copy(t.center).sub(Ju))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},$x=0,si=new Ee,Qu=new Ye,_r=new W,jn=new Be,So=new Be,gn=new W,ue=class n extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$x++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xx(t)?zo:Bo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new me().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return si.makeRotationFromQuaternion(t),this.applyMatrix4(si),this}rotateX(t){return si.makeRotationX(t),this.applyMatrix4(si),this}rotateY(t){return si.makeRotationY(t),this.applyMatrix4(si),this}rotateZ(t){return si.makeRotationZ(t),this.applyMatrix4(si),this}translate(t,e,i){return si.makeTranslation(t,e,i),this.applyMatrix4(si),this}scale(t,e,i){return si.makeScale(t,e,i),this.applyMatrix4(si),this}lookAt(t){return Qu.lookAt(t),Qu.updateMatrix(),this.applyMatrix4(Qu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_r).negate(),this.translate(_r.x,_r.y,_r.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $t(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Be);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){de("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];jn.setFromBufferAttribute(r),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&de('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){de("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){let i=this.boundingSphere.center;if(jn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];So.setFromBufferAttribute(a),this.morphTargetsRelative?(gn.addVectors(jn.min,So.min),jn.expandByPoint(gn),gn.addVectors(jn.max,So.max),jn.expandByPoint(gn)):(jn.expandByPoint(So.min),jn.expandByPoint(So.max))}jn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)gn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(gn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)gn.fromBufferAttribute(a,l),c&&(_r.fromBufferAttribute(t,l),gn.add(_r)),s=Math.max(s,i.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&de('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){de("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Pe(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let S=0;S<i.count;S++)a[S]=new W,c[S]=new W;let l=new W,u=new W,f=new W,h=new kt,d=new kt,m=new kt,y=new W,p=new W;function g(S,T,I){l.fromBufferAttribute(i,S),u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,I),h.fromBufferAttribute(r,S),d.fromBufferAttribute(r,T),m.fromBufferAttribute(r,I),u.sub(l),f.sub(l),d.sub(h),m.sub(h);let P=1/(d.x*m.y-m.x*d.y);isFinite(P)&&(y.copy(u).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(P),p.copy(f).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(P),a[S].add(y),a[T].add(y),a[I].add(y),c[S].add(p),c[T].add(p),c[I].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let S=0,T=x.length;S<T;++S){let I=x[S],P=I.start,k=I.count;for(let z=P,O=P+k;z<O;z+=3)g(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let v=new W,b=new W,_=new W,M=new W;function R(S){_.fromBufferAttribute(s,S),M.copy(_);let T=a[S];v.copy(T),v.sub(_.multiplyScalar(_.dot(T))).normalize(),b.crossVectors(M,T);let P=b.dot(c[S])<0?-1:1;o.setXYZW(S,v.x,v.y,v.z,P)}for(let S=0,T=x.length;S<T;++S){let I=x[S],P=I.start,k=I.count;for(let z=P,O=P+k;z<O;z+=3)R(t.getX(z+0)),R(t.getX(z+1)),R(t.getX(z+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Pe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);let s=new W,r=new W,o=new W,a=new W,c=new W,l=new W,u=new W,f=new W;if(t)for(let h=0,d=t.count;h<d;h+=3){let m=t.getX(h+0),y=t.getX(h+1),p=t.getX(h+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,p),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,m),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,p),a.add(u),c.add(u),l.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)gn.fromBufferAttribute(t,e),gn.normalize(),t.setXYZ(e,gn.x,gn.y,gn.z)}toNonIndexed(){function t(a,c){let l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u),d=0,m=0;for(let y=0,p=c.length;y<p;y++){a.isInterleavedBufferAttribute?d=c[y]*a.data.stride+a.offset:d=c[y]*u;for(let g=0;g<u;g++)h[m++]=l[d++]}return new Pe(h,u,f)}if(this.index===null)return ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,i);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,f=l.length;u<f;u++){let h=l[u],d=t(h,i);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){let d=l[f];u.push(d.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],f=r[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,u=o.length;l<u;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ho=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Gh,this.updateRanges=[],this.version=0,this.uuid=Ii()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},kn=new W,ri=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)kn.fromBufferAttribute(this,e),kn.applyMatrix4(t),this.setXYZ(e,kn.x,kn.y,kn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)kn.fromBufferAttribute(this,e),kn.applyNormalMatrix(t),this.setXYZ(e,kn.x,kn.y,kn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)kn.fromBufferAttribute(this,e),kn.transformDirection(t),this.setXYZ(e,kn.x,kn.y,kn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=mi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Fe(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Fe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=mi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=mi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=mi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=mi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Fe(e,this.array),i=Fe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Fe(e,this.array),i=Fe(i,this.array),s=Fe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Fe(e,this.array),i=Fe(i,this.array),s=Fe(s,this.array),r=Fe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Uo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Pe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Uo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},th=new W,Zx=new W,jx=new me,Kn=class{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=th.subVectors(i,e).cross(Zx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(th),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||jx.getNormalMatrix(t),s=this.coplanarPoint(th).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Kx=0,yi=class extends Li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kx++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=Yr,this.side=Cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ah,this.blendDst=Rh,this.blendEquation=Js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=Cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xc,this.stencilZFail=xc,this.stencilZPass=xc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){ce(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ce(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Kn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new kt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new kt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Zi=new W,eh=new W,Ka=new W,Ja=new W,Xs=class{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Zi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Zi.copy(this.origin).addScaledVector(this.direction,e),Zi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){eh.copy(t).add(e).multiplyScalar(.5),Ka.copy(e).sub(t).normalize(),Ja.copy(this.origin).sub(eh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ka),a=Ja.dot(this.direction),c=-Ja.dot(Ka),l=Ja.lengthSq(),u=Math.abs(1-o*o),f,h,d,m;if(u>0)if(f=o*c-a,h=o*a-c,m=r*u,f>=0)if(h>=-m)if(h<=m){let y=1/u;f*=y,h*=y,d=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h<=-m?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l):h<=m?(f=0,h=Math.min(Math.max(-r,-c),r),d=h*(h+2*c)+l):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(eh).addScaledVector(Ka,h),d}intersectSphere(t,e){if(t.radius<0)return null;Zi.subVectors(t.center,this.origin);let i=Zi.dot(this.direction),s=Zi.dot(Zi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(i=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(i=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Zi)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,f=t.x-o.x,h=t.y-o.y,d=t.z-o.z,m=e.x-o.x,y=e.y-o.y,p=e.z-o.z,g=i.x-o.x,x=i.y-o.y,v=i.z-o.z,b=Math.abs(c),_=Math.abs(l),M=Math.abs(u),R,S,T,I,P,k,z,O,U,V,j,dt;if(b>=_&&b>=M?(T=c,k=f,U=m,dt=g,c>=0?(R=l,S=u,I=h,P=d,z=y,O=p,V=x,j=v):(R=u,S=l,I=d,P=h,z=p,O=y,V=v,j=x)):_>=M?(T=l,k=h,U=y,dt=x,l>=0?(R=u,S=c,I=d,P=f,z=p,O=m,V=v,j=g):(R=c,S=u,I=f,P=d,z=m,O=p,V=g,j=v)):(T=u,k=d,U=p,dt=v,u>=0?(R=c,S=l,I=f,P=h,z=m,O=y,V=g,j=x):(R=l,S=c,I=h,P=f,z=y,O=m,V=x,j=g)),T===0)return null;let ot=R/T,G=S/T,q=1/T,xt=I-ot*k,gt=P-G*k,pt=z-ot*U,at=O-G*U,St=V-ot*dt,Z=j-G*dt,rt=St*at-Z*pt,wt=xt*Z-gt*St,Lt=pt*gt-at*xt;if(s){if(rt<0||wt<0||Lt<0)return null}else if((rt<0||wt<0||Lt<0)&&(rt>0||wt>0||Lt>0))return null;let Nt=rt+wt+Lt;if(Nt===0)return null;let H=q*(rt*k+wt*U+Lt*dt);return(Nt>0?H<0:H>0)?null:this.at(H/Nt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ce=class extends yi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},zd=new Ee,Hs=new Xs,Qa=new qn,Hd=new W,tc=new W,ec=new W,nc=new W,nh=new W,ic=new W,Gd=new W,sc=new W,ae=class extends Ye{constructor(t=new ue,e=new Ce){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){ic.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],f=r[c];u!==0&&(nh.fromBufferAttribute(f,t),o?ic.addScaledVector(nh,u):ic.addScaledVector(nh.sub(e),u))}e.add(ic)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qa.copy(i.boundingSphere),Qa.applyMatrix4(r),Hs.copy(t.ray).recast(t.near),!(Qa.containsPoint(Hs.origin)===!1&&(Hs.intersectSphere(Qa,Hd)===null||Hs.origin.distanceToSquared(Hd)>(t.far-t.near)**2))&&(zd.copy(r).invert(),Hs.copy(t.ray).applyMatrix4(zd),!(i.boundingBox!==null&&Hs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Hs)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,y=h.length;m<y;m++){let p=h[m],g=o[p.materialIndex],x=Math.max(p.start,d.start),v=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let b=x,_=v;b<_;b+=3){let M=a.getX(b),R=a.getX(b+1),S=a.getX(b+2);s=rc(this,g,t,i,l,u,f,M,R,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let p=m,g=y;p<g;p+=3){let x=a.getX(p),v=a.getX(p+1),b=a.getX(p+2);s=rc(this,o,t,i,l,u,f,x,v,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,y=h.length;m<y;m++){let p=h[m],g=o[p.materialIndex],x=Math.max(p.start,d.start),v=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let b=x,_=v;b<_;b+=3){let M=b,R=b+1,S=b+2;s=rc(this,g,t,i,l,u,f,M,R,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),y=Math.min(c.count,d.start+d.count);for(let p=m,g=y;p<g;p+=3){let x=p,v=p+1,b=p+2;s=rc(this,o,t,i,l,u,f,x,v,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Jx(n,t,e,i,s,r,o,a){let c;if(t.side===Bn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===Cs,a),c===null)return null;sc.copy(a),sc.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(sc);return l<e.near||l>e.far?null:{distance:l,point:sc.clone(),object:n}}function rc(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,tc),n.getVertexPosition(c,ec),n.getVertexPosition(l,nc);let u=Jx(n,t,e,i,tc,ec,nc,Gd);if(u){let f=new W;bs.getBarycoord(Gd,tc,ec,nc,f),s&&(u.uv=bs.getInterpolatedAttribute(s,a,c,l,f,new kt)),r&&(u.uv1=bs.getInterpolatedAttribute(r,a,c,l,f,new kt)),o&&(u.normal=bs.getInterpolatedAttribute(o,a,c,l,f,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new W,materialIndex:0};bs.getNormal(tc,ec,nc,h.normal),u.face=h,u.barycoord=f}return u}var Go=class extends wn{constructor(t=null,e=1,i=1,s,r,o,a,c,l=yn,u=yn,f,h){super(null,o,a,c,l,u,s,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var kr=class extends Pe{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Mr=new Ee,Vd=new Ee,oc=[],Wd=new Be,Qx=new Ee,wo=new ae,Eo=new qn,oi=class extends ae{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new kr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Qx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Be),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Mr),Wd.copy(t.boundingBox).applyMatrix4(Mr),this.boundingBox.union(Wd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new qn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Mr),Eo.copy(t.boundingSphere).applyMatrix4(Mr),this.boundingSphere.union(Eo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(wo.geometry=this.geometry,wo.material=this.material,wo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Eo.copy(this.boundingSphere),Eo.applyMatrix4(i),t.ray.intersectsSphere(Eo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Mr),Vd.multiplyMatrices(i,Mr),wo.matrixWorld=Vd,wo.raycast(t,oc);for(let o=0,a=oc.length;o<a;o++){let c=oc[o];c.instanceId=r,c.object=this,e.push(c)}oc.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new kr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Go(new Float32Array(s*this.count),s,this.count,al,ai));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<i.length;l++)o+=i[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;return r[c]=a,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Gs=new qn,tb=new kt(.5,.5),ac=new W,Or=class{constructor(t=new Kn,e=new Kn,i=new Kn,s=new Kn,r=new Kn,o=new Kn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=gi,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],f=r[5],h=r[6],d=r[7],m=r[8],y=r[9],p=r[10],g=r[11],x=r[12],v=r[13],b=r[14],_=r[15];if(s[0].setComponents(l-o,d-u,g-m,_-x).normalize(),s[1].setComponents(l+o,d+u,g+m,_+x).normalize(),s[2].setComponents(l+a,d+f,g+y,_+v).normalize(),s[3].setComponents(l-a,d-f,g-y,_-v).normalize(),i)s[4].setComponents(c,h,p,b).normalize(),s[5].setComponents(l-c,d-h,g-p,_-b).normalize();else if(s[4].setComponents(l-c,d-h,g-p,_-b).normalize(),e===gi)s[5].setComponents(l+c,d+h,g+p,_+b).normalize();else if(e===Pr)s[5].setComponents(c,h,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gs)}intersectsSprite(t){Gs.center.set(0,0,0);let e=tb.distanceTo(t.center);return Gs.radius=.7071067811865476+e,Gs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gs)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(ac.x=s.normal.x>0?t.max.x:t.min.x,ac.y=s.normal.y>0?t.max.y:t.min.y,ac.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ac)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Br=class extends yi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ic=new W,Pc=new W,Xd=new Ee,To=new Xs,cc=new qn,ih=new W,qd=new W,Lc=class extends Ye{constructor(t=new ue,e=new Br){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Ic.fromBufferAttribute(e,s-1),Pc.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Ic.distanceTo(Pc);t.setAttribute("lineDistance",new $t(i,1))}else ce("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),cc.copy(i.boundingSphere),cc.applyMatrix4(s),cc.radius+=r,t.ray.intersectsSphere(cc)===!1)return;Xd.copy(s).invert(),To.copy(t.ray).applyMatrix4(Xd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){let d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let y=d,p=m-1;y<p;y+=l){let g=u.getX(y),x=u.getX(y+1),v=lc(this,t,To,c,g,x,y);v&&e.push(v)}if(this.isLineLoop){let y=u.getX(m-1),p=u.getX(d),g=lc(this,t,To,c,y,p,m-1);g&&e.push(g)}}else{let d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let y=d,p=m-1;y<p;y+=l){let g=lc(this,t,To,c,y,y+1,y);g&&e.push(g)}if(this.isLineLoop){let y=lc(this,t,To,c,m-1,d,m-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function lc(n,t,e,i,s,r,o){let a=n.geometry.attributes.position;if(Ic.fromBufferAttribute(a,s),Pc.fromBufferAttribute(a,r),e.distanceSqToSegment(Ic,Pc,ih,qd)>i)return;ih.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(ih);if(!(l<t.near||l>t.far))return{distance:l,point:qd.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Yd=new W,$d=new W,Vo=class extends Lc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Yd.fromBufferAttribute(e,s),$d.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Yd.distanceTo($d);t.setAttribute("lineDistance",new $t(i,1))}else ce("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var qs=class extends yi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Zd=new Ee,ph=new Xs,uc=new qn,hc=new W,zr=class extends Ye{constructor(t=new ue,e=new qs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),uc.copy(i.boundingSphere),uc.applyMatrix4(s),uc.radius+=r,t.ray.intersectsSphere(uc)===!1)return;Zd.copy(s).invert(),ph.copy(t.ray).applyMatrix4(Zd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,f=i.attributes.position;if(l!==null){let h=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let m=h,y=d;m<y;m++){let p=l.getX(m);hc.fromBufferAttribute(f,p),jd(hc,p,c,s,t,e,this)}}else{let h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let m=h,y=d;m<y;m++)hc.fromBufferAttribute(f,m),jd(hc,m,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function jd(n,t,e,i,s,r,o){let a=ph.distanceSqToPoint(n);if(a<e){let c=new W;ph.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Wo=class extends wn{constructor(t=[],e=Is,i,s,r,o,a,c,l,u){super(t,e,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},vs=class extends wn{constructor(t,e,i,s,r,o,a,c,l){super(t,e,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var _s=class extends wn{constructor(t,e,i=vi,s,r,o,a=yn,c=yn,l,u=Pi,f=1){if(u!==Pi&&u!==Ls)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:f};super(h,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Dr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Nc=class extends _s{constructor(t,e=vi,i=Is,s,r,o=yn,a=yn,c,l=Pi){let u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,i,s,r,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Xo=class extends wn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Te=class n extends ue{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],f=[],h=0,d=0;m("z","y","x",-1,-1,i,e,t,o,r,0),m("z","y","x",1,-1,i,e,-t,o,r,1),m("x","z","y",1,1,t,i,e,s,o,2),m("x","z","y",1,-1,t,i,-e,s,o,3),m("x","y","z",1,-1,t,e,i,s,r,4),m("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(u,3)),this.setAttribute("uv",new $t(f,2));function m(y,p,g,x,v,b,_,M,R,S,T){let I=b/R,P=_/S,k=b/2,z=_/2,O=M/2,U=R+1,V=S+1,j=0,dt=0,ot=new W;for(let G=0;G<V;G++){let q=G*P-z;for(let xt=0;xt<U;xt++){let gt=xt*I-k;ot[y]=gt*x,ot[p]=q*v,ot[g]=O,l.push(ot.x,ot.y,ot.z),ot[y]=0,ot[p]=0,ot[g]=M>0?1:-1,u.push(ot.x,ot.y,ot.z),f.push(xt/R),f.push(1-G/S),j+=1}}for(let G=0;G<S;G++)for(let q=0;q<R;q++){let xt=h+q+U*G,gt=h+q+U*(G+1),pt=h+(q+1)+U*(G+1),at=h+(q+1)+U*G;c.push(xt,gt,at),c.push(gt,pt,at),dt+=6}a.addGroup(d,dt,T),d+=dt,h+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ln=class n extends ue{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new W,u=new kt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,h=3;f<=e;f++,h+=3){let d=i+f/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,c.push(u.x,u.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new $t(o,3)),this.setAttribute("normal",new $t(a,3)),this.setAttribute("uv",new $t(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ze=class n extends ue{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],h=[],d=[],m=0,y=[],p=i/2,g=0;x(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new $t(f,3)),this.setAttribute("normal",new $t(h,3)),this.setAttribute("uv",new $t(d,2));function x(){let b=new W,_=new W,M=0,R=(e-t)/i;for(let S=0;S<=r;S++){let T=[],I=S/r,P=I*(e-t)+t;for(let k=0;k<=s;k++){let z=k/s,O=z*c+a,U=Math.sin(O),V=Math.cos(O);_.x=P*U,_.y=-I*i+p,_.z=P*V,f.push(_.x,_.y,_.z),b.set(U,R,V).normalize(),h.push(b.x,b.y,b.z),d.push(z,1-I),T.push(m++)}y.push(T)}for(let S=0;S<s;S++)for(let T=0;T<r;T++){let I=y[T][S],P=y[T+1][S],k=y[T+1][S+1],z=y[T][S+1];(t>0||T!==0)&&(u.push(I,P,z),M+=3),(e>0||T!==r-1)&&(u.push(P,k,z),M+=3)}l.addGroup(g,M,0),g+=M}function v(b){let _=m,M=new kt,R=new W,S=0,T=b===!0?t:e,I=b===!0?1:-1;for(let k=1;k<=s;k++)f.push(0,p*I,0),h.push(0,I,0),d.push(.5,.5),m++;let P=m;for(let k=0;k<=s;k++){let O=k/s*c+a,U=Math.cos(O),V=Math.sin(O);R.x=T*V,R.y=p*I,R.z=T*U,f.push(R.x,R.y,R.z),h.push(0,I,0),M.x=U*.5+.5,M.y=V*.5*I+.5,d.push(M.x,M.y),m++}for(let k=0;k<s;k++){let z=_+k,O=P+k;b===!0?u.push(O,O+1,z):u.push(O+1,O,z),S+=3}l.addGroup(g,S,b===!0?1:2),g+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},qo=class n extends ze{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Yo=class n extends ue{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),l(i),u(),this.setAttribute("position",new $t(r,3)),this.setAttribute("normal",new $t(r.slice(),3)),this.setAttribute("uv",new $t(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){let v=new W,b=new W,_=new W;for(let M=0;M<e.length;M+=3)d(e[M+0],v),d(e[M+1],b),d(e[M+2],_),c(v,b,_,x)}function c(x,v,b,_){let M=_+1,R=[];for(let S=0;S<=M;S++){R[S]=[];let T=x.clone().lerp(b,S/M),I=v.clone().lerp(b,S/M),P=M-S;for(let k=0;k<=P;k++)k===0&&S===M?R[S][k]=T:R[S][k]=T.clone().lerp(I,k/P)}for(let S=0;S<M;S++)for(let T=0;T<2*(M-S)-1;T++){let I=Math.floor(T/2);T%2===0?(h(R[S][I+1]),h(R[S+1][I]),h(R[S][I])):(h(R[S][I+1]),h(R[S+1][I+1]),h(R[S+1][I]))}}function l(x){let v=new W;for(let b=0;b<r.length;b+=3)v.x=r[b+0],v.y=r[b+1],v.z=r[b+2],v.normalize().multiplyScalar(x),r[b+0]=v.x,r[b+1]=v.y,r[b+2]=v.z}function u(){let x=new W;for(let v=0;v<r.length;v+=3){x.x=r[v+0],x.y=r[v+1],x.z=r[v+2];let b=p(x)/2/Math.PI+.5,_=g(x)/Math.PI+.5;o.push(b,1-_)}m(),f()}function f(){for(let x=0;x<o.length;x+=6){let v=o[x+0],b=o[x+2],_=o[x+4],M=Math.max(v,b,_),R=Math.min(v,b,_);M>.9&&R<.1&&(v<.2&&(o[x+0]+=1),b<.2&&(o[x+2]+=1),_<.2&&(o[x+4]+=1))}}function h(x){r.push(x.x,x.y,x.z)}function d(x,v){let b=x*3;v.x=t[b+0],v.y=t[b+1],v.z=t[b+2]}function m(){let x=new W,v=new W,b=new W,_=new W,M=new kt,R=new kt,S=new kt;for(let T=0,I=0;T<r.length;T+=9,I+=6){x.set(r[T+0],r[T+1],r[T+2]),v.set(r[T+3],r[T+4],r[T+5]),b.set(r[T+6],r[T+7],r[T+8]),M.set(o[I+0],o[I+1]),R.set(o[I+2],o[I+3]),S.set(o[I+4],o[I+5]),_.copy(x).add(v).add(b).divideScalar(3);let P=p(_);y(M,I+0,x,P),y(R,I+2,v,P),y(S,I+4,b,P)}}function y(x,v,b,_){_<0&&x.x===1&&(o[v]=x.x-1),b.x===0&&b.z===0&&(o[v]=_/2/Math.PI+.5)}function p(x){return Math.atan2(x.z,-x.x)}function g(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.detail)}},$o=class n extends Yo{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var Jn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ce("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);let u=i[s],h=i[s+1]-u,d=(o-u)/h;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new kt:new W);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new W,s=[],r=[],o=[],a=new W,c=new Ee;for(let d=0;d<=t;d++){let m=d/t;s[d]=this.getTangentAt(m,new W)}r[0]=new W,o[0]=new W;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),f<=l&&(l=f,i.set(0,1,0)),h<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(pe(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(pe(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Hr=class extends Jn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new kt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,d=l-this.aY;c=h*u-d*f+this.aX,l=h*f+d*u+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Dc=class extends Hr{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Xh(){let n=0,t=0,e=0,i=0;function s(r,o,a,c){n=r,t=a,e=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,f){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+f)+(c-a)/f;h*=u,d*=u,s(o,a,h,d)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var Kd=new W,Jd=new W,sh=new Xh,rh=new Xh,oh=new Xh,Ys=class extends Jn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new W){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Jd.subVectors(s[0],s[1]).add(s[0]),l=Jd);let f=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Kd.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Kd),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(f),d),y=Math.pow(f.distanceToSquared(h),d),p=Math.pow(h.distanceToSquared(u),d);y<1e-4&&(y=1),m<1e-4&&(m=y),p<1e-4&&(p=y),sh.initNonuniformCatmullRom(l.x,f.x,h.x,u.x,m,y,p),rh.initNonuniformCatmullRom(l.y,f.y,h.y,u.y,m,y,p),oh.initNonuniformCatmullRom(l.z,f.z,h.z,u.z,m,y,p)}else this.curveType==="catmullrom"&&(sh.initCatmullRom(l.x,f.x,h.x,u.x,this.tension),rh.initCatmullRom(l.y,f.y,h.y,u.y,this.tension),oh.initCatmullRom(l.z,f.z,h.z,u.z,this.tension));return i.set(sh.calc(c),rh.calc(c),oh.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new W().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Qd(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,c=n*a;return(2*e-2*i+r+o)*c+(-3*e+3*i-2*r-o)*a+r*n+e}function eb(n,t){let e=1-n;return e*e*t}function nb(n,t){return 2*(1-n)*n*t}function ib(n,t){return n*n*t}function Io(n,t,e,i){return eb(n,t)+nb(n,e)+ib(n,i)}function sb(n,t){let e=1-n;return e*e*e*t}function rb(n,t){let e=1-n;return 3*e*e*n*t}function ob(n,t){return 3*(1-n)*n*n*t}function ab(n,t){return n*n*n*t}function Po(n,t,e,i,s){return sb(n,t)+rb(n,e)+ob(n,i)+ab(n,s)}var Zo=class extends Jn{constructor(t=new kt,e=new kt,i=new kt,s=new kt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new kt){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Po(t,s.x,r.x,o.x,a.x),Po(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Fc=class extends Jn{constructor(t=new W,e=new W,i=new W,s=new W){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new W){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Po(t,s.x,r.x,o.x,a.x),Po(t,s.y,r.y,o.y,a.y),Po(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},jo=class extends Jn{constructor(t=new kt,e=new kt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new kt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new kt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Uc=class extends Jn{constructor(t=new W,e=new W){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new W){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new W){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ko=class extends Jn{constructor(t=new kt,e=new kt,i=new kt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new kt){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Io(t,s.x,r.x,o.x),Io(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Jo=class extends Jn{constructor(t=new W,e=new W,i=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new W){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Io(t,s.x,r.x,o.x),Io(t,s.y,r.y,o.y),Io(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qo=class extends Jn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new kt){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(Qd(a,c.x,l.x,u.x,f.x),Qd(a,c.y,l.y,u.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new kt().fromArray(s))}return this}},kc=Object.freeze({__proto__:null,ArcCurve:Dc,CatmullRomCurve3:Ys,CubicBezierCurve:Zo,CubicBezierCurve3:Fc,EllipseCurve:Hr,LineCurve:jo,LineCurve3:Uc,QuadraticBezierCurve:Ko,QuadraticBezierCurve3:Jo,SplineCurve:Qo}),Oc=class extends Jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new kc[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new kc[s.type]().fromJSON(s))}return this}},$s=class extends Oc{constructor(t){super(),this.type="Path",this.currentPoint=new kt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new jo(this.currentPoint.clone(),new kt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Ko(this.currentPoint.clone(),new kt(t,e),new kt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new Zo(this.currentPoint.clone(),new kt(t,e),new kt(i,s),new kt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Qo(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,i,s,r,o,a,c),this}absellipse(t,e,i,s,r,o,a,c){let l=new Hr(t,e,i,s,r,o,a,c);if(this.curves.length>0){let f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ln=class extends $s{constructor(t){super(t),this.uuid=Ii(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new $s().fromJSON(s))}return this}};function cb(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=Kp(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(i&&(r=db(n,t,r,e)),n.length>80*e){a=n[0],c=n[1];let u=a,f=c;for(let h=e;h<s;h+=e){let d=n[h],m=n[h+1];d<a&&(a=d),m<c&&(c=m),d>u&&(u=d),m>f&&(f=m)}l=Math.max(u-a,f-c),l=l!==0?32767/l:0}return ta(r,o,e,a,c,l,0),o}function Kp(n,t,e,i,s){let r;if(s===wb(n,t,e,i)>0)for(let o=t;o<e;o+=i)r=tp(o/i|0,n[o],n[o+1],r);else for(let o=e-i;o>=t;o-=i)r=tp(o/i|0,n[o],n[o+1],r);return r&&Gr(r,r.next)&&(na(r),r=r.next),r}function Zs(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Gr(e,e.next)||Je(e.prev,e,e.next)===0)){if(na(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function ta(n,t,e,i,s,r,o){if(!n)return;!o&&r&&xb(n,i,s,r);let a=n;for(;n.prev!==n.next;){let c=n.prev,l=n.next;if(r?ub(n,i,s,r):lb(n)){t.push(c.i,n.i,l.i),na(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=hb(Zs(n),t),ta(n,t,e,i,s,r,2)):o===2&&fb(n,t,e,i,s,r):ta(Zs(n),t,e,i,s,r,1);break}}}function lb(n){let t=n.prev,e=n,i=n.next;if(Je(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,c=e.y,l=i.y,u=Math.min(s,r,o),f=Math.min(a,c,l),h=Math.max(s,r,o),d=Math.max(a,c,l),m=i.next;for(;m!==t;){if(m.x>=u&&m.x<=h&&m.y>=f&&m.y<=d&&Ao(s,a,r,c,o,l,m.x,m.y)&&Je(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function ub(n,t,e,i){let s=n.prev,r=n,o=n.next;if(Je(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,u=s.y,f=r.y,h=o.y,d=Math.min(a,c,l),m=Math.min(u,f,h),y=Math.max(a,c,l),p=Math.max(u,f,h),g=mh(d,m,t,e,i),x=mh(y,p,t,e,i),v=n.prevZ,b=n.nextZ;for(;v&&v.z>=g&&b&&b.z<=x;){if(v.x>=d&&v.x<=y&&v.y>=m&&v.y<=p&&v!==s&&v!==o&&Ao(a,u,c,f,l,h,v.x,v.y)&&Je(v.prev,v,v.next)>=0||(v=v.prevZ,b.x>=d&&b.x<=y&&b.y>=m&&b.y<=p&&b!==s&&b!==o&&Ao(a,u,c,f,l,h,b.x,b.y)&&Je(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;v&&v.z>=g;){if(v.x>=d&&v.x<=y&&v.y>=m&&v.y<=p&&v!==s&&v!==o&&Ao(a,u,c,f,l,h,v.x,v.y)&&Je(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;b&&b.z<=x;){if(b.x>=d&&b.x<=y&&b.y>=m&&b.y<=p&&b!==s&&b!==o&&Ao(a,u,c,f,l,h,b.x,b.y)&&Je(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function hb(n,t){let e=n;do{let i=e.prev,s=e.next.next;!Gr(i,s)&&Qp(i,e,e.next,s)&&ea(i,s)&&ea(s,i)&&(t.push(i.i,e.i,s.i),na(e),na(e.next),e=n=s),e=e.next}while(e!==n);return Zs(e)}function fb(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&_b(o,a)){let c=tm(o,a);o=Zs(o,o.next),c=Zs(c,c.next),ta(o,t,e,i,s,r,0),ta(c,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function db(n,t,e,i){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*i,c=r<o-1?t[r+1]*i:n.length,l=Kp(n,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push(vb(l))}s.sort(pb);for(let r=0;r<s.length;r++)e=mb(s[r],e);return e}function pb(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function mb(n,t){let e=gb(n,t);if(!e)return t;let i=tm(e,n);return Zs(i,i.next),Zs(e,e.next)}function gb(n,t){let e=t,i=n.x,s=n.y,r=-1/0,o;if(Gr(n,e))return e;do{if(Gr(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=i&&f>r&&(r=f,o=e.x<e.next.x?e:e.next,f===i))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,u=1/0;e=o;do{if(i>=e.x&&e.x>=c&&i!==e.x&&Jp(s<l?i:r,s,c,l,s<l?r:i,s,e.x,e.y)){let f=Math.abs(s-e.y)/(i-e.x);ea(e,n)&&(f<u||f===u&&(e.x>o.x||e.x===o.x&&yb(o,e)))&&(o=e,u=f)}e=e.next}while(e!==a);return o}function yb(n,t){return Je(n.prev,n,t.prev)<0&&Je(t.next,n,n.next)<0}function xb(n,t,e,i){let s=n;do s.z===0&&(s.z=mh(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,bb(s)}function bb(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,e*=2}while(t>1);return n}function mh(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function vb(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Jp(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Ao(n,t,e,i,s,r,o,a){return!(n===o&&t===a)&&Jp(n,t,e,i,s,r,o,a)}function _b(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Mb(n,t)&&(ea(n,t)&&ea(t,n)&&Sb(n,t)&&(Je(n.prev,n,t.prev)||Je(n,t.prev,t))||Gr(n,t)&&Je(n.prev,n,n.next)>0&&Je(t.prev,t,t.next)>0)}function Je(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Gr(n,t){return n.x===t.x&&n.y===t.y}function Qp(n,t,e,i){let s=dc(Je(n,t,e)),r=dc(Je(n,t,i)),o=dc(Je(e,i,n)),a=dc(Je(e,i,t));return!!(s!==r&&o!==a||s===0&&fc(n,e,t)||r===0&&fc(n,i,t)||o===0&&fc(e,n,i)||a===0&&fc(e,t,i))}function fc(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function dc(n){return n>0?1:n<0?-1:0}function Mb(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Qp(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function ea(n,t){return Je(n.prev,n,n.next)<0?Je(n,t,n.next)>=0&&Je(n,n.prev,t)>=0:Je(n,t,n.prev)<0||Je(n,n.next,t)<0}function Sb(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function tm(n,t){let e=gh(n.i,n.x,n.y),i=gh(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function tp(n,t,e,i){let s=gh(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function na(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function gh(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function wb(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var yh=class{static triangulate(t,e,i=2){return cb(t,e,i)}},Wn=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];ep(t),np(i,t);let o=t.length;e.forEach(ep);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,np(i,e[c]);let a=yh.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function ep(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function np(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var xi=class n extends ue{constructor(t=new ln([new kt(.5,.5),new kt(-.5,.5),new kt(-.5,-.5),new kt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new $t(s,3)),this.setAttribute("uv",new $t(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:Eb,v,b=!1,_,M,R,S;if(g){v=g.getSpacedPoints(u),b=!0,h=!1;let K=g.isCatmullRomCurve3?g.closed:!1;_=g.computeFrenetFrames(u,K),M=new W,R=new W,S=new W}h||(p=0,d=0,m=0,y=0);let T=a.extractPoints(l),I=T.shape,P=T.holes;if(!Wn.isClockWise(I)){I=I.reverse();for(let K=0,et=P.length;K<et;K++){let $=P[K];Wn.isClockWise($)&&(P[K]=$.reverse())}}function z(K){let $=10000000000000001e-36,ht=K[0];for(let yt=1;yt<=K.length;yt++){let It=yt%K.length,Pt=K[It],Ft=Pt.x-ht.x,Ut=Pt.y-ht.y,Y=Ft*Ft+Ut*Ut,te=Math.max(Math.abs(Pt.x),Math.abs(Pt.y),Math.abs(ht.x),Math.abs(ht.y)),Ht=$*te*te;if(Y<=Ht){K.splice(It,1),yt--;continue}ht=Pt}}z(I),P.forEach(z);let O=P.length,U=I;for(let K=0;K<O;K++){let et=P[K];I=I.concat(et)}function V(K,et,$){return et||de("ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(et,$)}let j=I.length;function dt(K,et,$){let ht,yt,It,Pt=K.x-et.x,Ft=K.y-et.y,Ut=$.x-K.x,Y=$.y-K.y,te=Pt*Pt+Ft*Ft,Ht=Pt*Y-Ft*Ut;if(Math.abs(Ht)>Number.EPSILON){let B=Math.sqrt(te),A=Math.sqrt(Ut*Ut+Y*Y),it=et.x-Ft/B,mt=et.y+Pt/B,Mt=$.x-Y/A,X=$.y+Ut/A,w=((Mt-it)*Y-(X-mt)*Ut)/(Pt*Y-Ft*Ut);ht=it+Pt*w-K.x,yt=mt+Ft*w-K.y;let E=ht*ht+yt*yt;if(E<=2)return new kt(ht,yt);It=Math.sqrt(E/2)}else{let B=!1;Pt>Number.EPSILON?Ut>Number.EPSILON&&(B=!0):Pt<-Number.EPSILON?Ut<-Number.EPSILON&&(B=!0):Math.sign(Ft)===Math.sign(Y)&&(B=!0),B?(ht=-Ft,yt=Pt,It=Math.sqrt(te)):(ht=Pt,yt=Ft,It=Math.sqrt(te/2))}return new kt(ht/It,yt/It)}let ot=[];for(let K=0,et=U.length,$=et-1,ht=K+1;K<et;K++,$++,ht++)$===et&&($=0),ht===et&&(ht=0),ot[K]=dt(U[K],U[$],U[ht]);let G=[],q,xt=ot.concat();for(let K=0,et=O;K<et;K++){let $=P[K];q=[];for(let ht=0,yt=$.length,It=yt-1,Pt=ht+1;ht<yt;ht++,It++,Pt++)It===yt&&(It=0),Pt===yt&&(Pt=0),q[ht]=dt($[ht],$[It],$[Pt]);G.push(q),xt=xt.concat(q)}let gt;if(p===0)gt=Wn.triangulateShape(U,P);else{let K=[],et=[];for(let $=0;$<p;$++){let ht=$/p,yt=d*Math.cos(ht*Math.PI/2),It=m*Math.sin(ht*Math.PI/2)+y;for(let Pt=0,Ft=U.length;Pt<Ft;Pt++){let Ut=V(U[Pt],ot[Pt],It);wt(Ut.x,Ut.y,-yt),ht===0&&K.push(Ut)}for(let Pt=0,Ft=O;Pt<Ft;Pt++){let Ut=P[Pt];q=G[Pt];let Y=[];for(let te=0,Ht=Ut.length;te<Ht;te++){let B=V(Ut[te],q[te],It);wt(B.x,B.y,-yt),ht===0&&Y.push(B)}ht===0&&et.push(Y)}}gt=Wn.triangulateShape(K,et)}let pt=gt.length,at=m+y;for(let K=0;K<j;K++){let et=h?V(I[K],xt[K],at):I[K];b?(R.copy(_.normals[0]).multiplyScalar(et.x),M.copy(_.binormals[0]).multiplyScalar(et.y),S.copy(v[0]).add(R).add(M),wt(S.x,S.y,S.z)):wt(et.x,et.y,0)}for(let K=1;K<=u;K++)for(let et=0;et<j;et++){let $=h?V(I[et],xt[et],at):I[et];b?(R.copy(_.normals[K]).multiplyScalar($.x),M.copy(_.binormals[K]).multiplyScalar($.y),S.copy(v[K]).add(R).add(M),wt(S.x,S.y,S.z)):wt($.x,$.y,f/u*K)}for(let K=p-1;K>=0;K--){let et=K/p,$=d*Math.cos(et*Math.PI/2),ht=m*Math.sin(et*Math.PI/2)+y;for(let yt=0,It=U.length;yt<It;yt++){let Pt=V(U[yt],ot[yt],ht);wt(Pt.x,Pt.y,f+$)}for(let yt=0,It=P.length;yt<It;yt++){let Pt=P[yt];q=G[yt];for(let Ft=0,Ut=Pt.length;Ft<Ut;Ft++){let Y=V(Pt[Ft],q[Ft],ht);b?wt(Y.x,Y.y+v[u-1].y,v[u-1].x+$):wt(Y.x,Y.y,f+$)}}}St(),Z();function St(){let K=s.length/3;if(h){let et=0,$=j*et;for(let ht=0;ht<pt;ht++){let yt=gt[ht];Lt(yt[2]+$,yt[1]+$,yt[0]+$)}et=u+p*2,$=j*et;for(let ht=0;ht<pt;ht++){let yt=gt[ht];Lt(yt[0]+$,yt[1]+$,yt[2]+$)}}else{for(let et=0;et<pt;et++){let $=gt[et];Lt($[2],$[1],$[0])}for(let et=0;et<pt;et++){let $=gt[et];Lt($[0]+j*u,$[1]+j*u,$[2]+j*u)}}i.addGroup(K,s.length/3-K,0)}function Z(){let K=s.length/3,et=0;rt(U,et),et+=U.length;for(let $=0,ht=P.length;$<ht;$++){let yt=P[$];rt(yt,et),et+=yt.length}i.addGroup(K,s.length/3-K,1)}function rt(K,et){let $=K.length;for(;--$>=0;){let ht=$,yt=$-1;yt<0&&(yt=K.length-1);for(let It=0,Pt=u+p*2;It<Pt;It++){let Ft=j*It,Ut=j*(It+1),Y=et+ht+Ft,te=et+yt+Ft,Ht=et+yt+Ut,B=et+ht+Ut;Nt(Y,te,Ht,B)}}}function wt(K,et,$){c.push(K),c.push(et),c.push($)}function Lt(K,et,$){H(K),H(et),H($);let ht=s.length/3,yt=x.generateTopUV(i,s,ht-3,ht-2,ht-1);bt(yt[0]),bt(yt[1]),bt(yt[2])}function Nt(K,et,$,ht){H(K),H(et),H(ht),H(et),H($),H(ht);let yt=s.length/3,It=x.generateSideWallUV(i,s,yt-6,yt-3,yt-2,yt-1);bt(It[0]),bt(It[1]),bt(It[3]),bt(It[1]),bt(It[2]),bt(It[3])}function H(K){s.push(c[K*3+0]),s.push(c[K*3+1]),s.push(c[K*3+2])}function bt(K){r.push(K.x),r.push(K.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Tb(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new kc[s.type]().fromJSON(s)),new n(i,t.options)}},Eb={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],c=t[i*3+1],l=t[s*3],u=t[s*3+1];return[new kt(r,o),new kt(a,c),new kt(l,u)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[i*3],u=t[i*3+1],f=t[i*3+2],h=t[s*3],d=t[s*3+1],m=t[s*3+2],y=t[r*3],p=t[r*3+1],g=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new kt(o,1-c),new kt(l,1-f),new kt(h,1-m),new kt(y,1-g)]:[new kt(a,1-c),new kt(u,1-f),new kt(d,1-m),new kt(p,1-g)]}};function Tb(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ia=class n extends Yo{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},sa=class n extends ue{constructor(t=[new kt(0,-.5),new kt(.5,0),new kt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=pe(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],u=1/e,f=new W,h=new kt,d=new W,m=new W,y=new W,p=0,g=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:p=t[x+1].x-t[x].x,g=t[x+1].y-t[x].y,d.x=g*1,d.y=-p,d.z=g*0,y.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(y.x,y.y,y.z);break;default:p=t[x+1].x-t[x].x,g=t[x+1].y-t[x].y,d.x=g*1,d.y=-p,d.z=g*0,m.copy(d),d.x+=y.x,d.y+=y.y,d.z+=y.z,d.normalize(),c.push(d.x,d.y,d.z),y.copy(m)}for(let x=0;x<=e;x++){let v=i+x*u*s,b=Math.sin(v),_=Math.cos(v);for(let M=0;M<=t.length-1;M++){f.x=t[M].x*b,f.y=t[M].y,f.z=t[M].x*_,o.push(f.x,f.y,f.z),h.x=x/e,h.y=M/(t.length-1),a.push(h.x,h.y);let R=c[3*M+0]*b,S=c[3*M+1],T=c[3*M+0]*_;l.push(R,S,T)}}for(let x=0;x<e;x++)for(let v=0;v<t.length-1;v++){let b=v+x*t.length,_=b,M=b+t.length,R=b+t.length+1,S=b+1;r.push(_,M,S),r.push(R,S,M)}this.setIndex(r),this.setAttribute("position",new $t(o,3)),this.setAttribute("uv",new $t(a,2)),this.setAttribute("normal",new $t(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}};var Nn=class n extends ue{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,f=t/a,h=e/c,d=[],m=[],y=[],p=[];for(let g=0;g<u;g++){let x=g*h-o;for(let v=0;v<l;v++){let b=v*f-r;m.push(b,-x,0),y.push(0,0,1),p.push(v/a),p.push(1-g/c)}}for(let g=0;g<c;g++)for(let x=0;x<a;x++){let v=x+l*g,b=x+l*(g+1),_=x+1+l*(g+1),M=x+1+l*g;d.push(v,b,M),d.push(b,_,M)}this.setIndex(d),this.setAttribute("position",new $t(m,3)),this.setAttribute("normal",new $t(y,3)),this.setAttribute("uv",new $t(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},ra=class n extends ue{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],c=[],l=[],u=[],f=t,h=(e-t)/s,d=new W,m=new kt;for(let y=0;y<=s;y++){for(let p=0;p<=i;p++){let g=r+p/i*o;d.x=f*Math.cos(g),d.y=f*Math.sin(g),c.push(d.x,d.y,d.z),l.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,u.push(m.x,m.y)}f+=h}for(let y=0;y<s;y++){let p=y*(i+1);for(let g=0;g<i;g++){let x=g+p,v=x,b=x+i+1,_=x+i+2,M=x+1;a.push(v,b,M),a.push(b,_,M)}}this.setIndex(a),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(l,3)),this.setAttribute("uv",new $t(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Di=class n extends ue{constructor(t=new ln([new kt(0,.5),new kt(-.5,-.5),new kt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new $t(s,3)),this.setAttribute("normal",new $t(r,3)),this.setAttribute("uv",new $t(o,2));function l(u){let f=s.length/3,h=u.extractPoints(e),d=h.shape,m=h.holes;Wn.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,g=m.length;p<g;p++){let x=m[p];Wn.isClockWise(x)===!0&&(m[p]=x.reverse())}let y=Wn.triangulateShape(d,m);for(let p=0,g=m.length;p<g;p++){let x=m[p];d=d.concat(x)}for(let p=0,g=d.length;p<g;p++){let x=d[p];s.push(x.x,x.y,0),r.push(0,0,1),o.push(x.x,x.y)}for(let p=0,g=y.length;p<g;p++){let x=y[p],v=x[0]+f,b=x[1]+f,_=x[2]+f;i.push(v,b,_),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Ab(e,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];i.push(o)}return new n(i,t.curveSegments)}};function Ab(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}var Ae=class n extends ue{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,u=[],f=new W,h=new W,d=[],m=[],y=[],p=[];for(let g=0;g<=i;g++){let x=[],v=g/i,b=o+v*a,_=t*Math.cos(b),M=Math.sqrt(t*t-_*_),R=0;g===0&&o===0?R=.5/e:g===i&&c===Math.PI&&(R=-.5/e);for(let S=0;S<=e;S++){let T=S/e,I=s+T*r;f.x=-M*Math.cos(I),f.y=_,f.z=M*Math.sin(I),m.push(f.x,f.y,f.z),h.copy(f).normalize(),y.push(h.x,h.y,h.z),p.push(T+R,1-v),x.push(l++)}u.push(x)}for(let g=0;g<i;g++)for(let x=0;x<e;x++){let v=u[g][x+1],b=u[g][x],_=u[g+1][x],M=u[g+1][x+1];(g!==0||o>0)&&d.push(v,b,M),(g!==i-1||c<Math.PI)&&d.push(b,_,M)}this.setIndex(d),this.setAttribute("position",new $t(m,3)),this.setAttribute("normal",new $t(y,3)),this.setAttribute("uv",new $t(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var bn=class n extends ue{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let c=[],l=[],u=[],f=[],h=new W,d=new W,m=new W;for(let y=0;y<=i;y++){let p=o+y/i*a;for(let g=0;g<=s;g++){let x=g/s*r;d.x=(t+e*Math.cos(p))*Math.cos(x),d.y=(t+e*Math.cos(p))*Math.sin(x),d.z=e*Math.sin(p),l.push(d.x,d.y,d.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),m.subVectors(d,h).normalize(),u.push(m.x,m.y,m.z),f.push(g/s),f.push(y/i)}}for(let y=1;y<=i;y++)for(let p=1;p<=s;p++){let g=(s+1)*y+p-1,x=(s+1)*(y-1)+p-1,v=(s+1)*(y-1)+p,b=(s+1)*y+p;c.push(g,x,b),c.push(x,v,b)}this.setIndex(c),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(u,3)),this.setAttribute("uv",new $t(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Vr=class n extends ue{constructor(t=new Jo(new W(-1,-1,0),new W(-1,1,0),new W(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new W,c=new W,l=new kt,u=new W,f=[],h=[],d=[],m=[];y(),this.setIndex(m),this.setAttribute("position",new $t(f,3)),this.setAttribute("normal",new $t(h,3)),this.setAttribute("uv",new $t(d,2));function y(){for(let v=0;v<e;v++)p(v);p(r===!1?e:0),x(),g()}function p(v){u=t.getPointAt(v/e,u);let b=o.normals[v],_=o.binormals[v];for(let M=0;M<=s;M++){let R=M/s*Math.PI*2,S=Math.sin(R),T=-Math.cos(R);c.x=T*b.x+S*_.x,c.y=T*b.y+S*_.y,c.z=T*b.z+S*_.z,c.normalize(),h.push(c.x,c.y,c.z),a.x=u.x+i*c.x,a.y=u.y+i*c.y,a.z=u.z+i*c.z,f.push(a.x,a.y,a.z)}}function g(){for(let v=1;v<=e;v++)for(let b=1;b<=s;b++){let _=(s+1)*(v-1)+(b-1),M=(s+1)*v+(b-1),R=(s+1)*v+b,S=(s+1)*(v-1)+b;m.push(_,M,S),m.push(M,R,S)}}function x(){for(let v=0;v<=e;v++)for(let b=0;b<=s;b++)l.x=v/e,l.y=b/s,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new kc[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},oa=class extends ue{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],i=new Set,s=new W,r=new W;if(t.index!==null){let o=t.attributes.position,a=t.index,c=t.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){let f=c[l],h=f.start,d=f.count;for(let m=h,y=h+d;m<y;m+=3)for(let p=0;p<3;p++){let g=a.getX(m+p),x=a.getX(m+(p+1)%3);s.fromBufferAttribute(o,g),r.fromBufferAttribute(o,x),ip(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let o=t.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){let u=3*a+l,f=3*a+(l+1)%3;s.fromBufferAttribute(o,u),r.fromBufferAttribute(o,f),ip(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new $t(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function ip(n,t,e){let i=`${n.x},${n.y},${n.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${n.x},${n.y},${n.z}`;return e.has(i)===!0||e.has(s)===!0?!1:(e.add(i),e.add(s),!0)}function tr(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(sp(s))s.isRenderTargetTexture?(ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(sp(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Dn(n){let t={};for(let e=0;e<n.length;e++){let i=tr(n[e]);for(let s in i)t[s]=i[s]}return t}function sp(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Rb(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function qh(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:_e.workingColorSpace}var ts={clone:tr,merge:Dn},Cb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ib=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$e=class extends yi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cb,this.fragmentShader=Ib,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=tr(t.uniforms),this.uniformsGroups=Rb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new qt().setHex(s.value);break;case"v2":this.uniforms[i].value=new kt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new W().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ne().fromArray(s.value);break;case"m3":this.uniforms[i].value=new me().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Ee().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Bc=class extends $e{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},He=class extends yi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ma,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Wr=class extends yi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ma,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=tl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},zc=class extends yi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Hc=class extends yi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Sr(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function ah(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Ms=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Gc=class extends Ms{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hh,endingEnd:hh}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case fh:r=t,a=2*e-i;break;case dh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case fh:o=t,c=2*i-e;break;case dh:o=1,c=i+s[1]-s[0];break;default:o=t-1,c=e}let l=(i-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,m=(i-e)/(s-e),y=m*m,p=y*m,g=-h*p+2*h*y-h*m,x=(1+h)*p+(-1.5-2*h)*y+(-.5+h)*m+1,v=(-1-d)*p+(1.5+d)*y+.5*m,b=d*p-d*y;for(let _=0;_!==a;++_)r[_]=g*o[u+_]+x*o[l+_]+v*o[c+_]+b*o[f+_];return r}},Vc=class extends Ms{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(i-e)/(s-e),f=1-u;for(let h=0;h!==a;++h)r[h]=o[l+h]*f+o[c+h]*u;return r}},Wc=class extends Ms{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Xc=class extends Ms{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this.inTangents,f=this.outTangents;if(!u||!f){let m=(i-e)/(s-e),y=1-m;for(let p=0;p!==a;++p)r[p]=o[l+p]*y+o[c+p]*m;return r}let h=a*2,d=t-1;for(let m=0;m!==a;++m){let y=o[l+m],p=o[c+m],g=d*h+m*2,x=f[g],v=f[g+1],b=t*h+m*2,_=u[b],M=u[b+1],R=Lb(i,e,x,_,s);r[m]=em(R,y,v,M,p)}return r}};function em(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Pb(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Lb(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=em(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let c=Pb(r,t,e,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var Qn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Sr(e,this.TimeBufferType),this.values=Sr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Sr(t.times,Array),values:Sr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),ah(t.settings)&&(i.settings={inTangents:Sr(t.settings.inTangents,Array),outTangents:Sr(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Wc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Vc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Gc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Xc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Lo:e=this.InterpolantFactoryMethodDiscrete;break;case Tc:e=this.InterpolantFactoryMethodLinear;break;case yc:e=this.InterpolantFactoryMethodSmooth;break;case uh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return ce("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Lo;case this.InterpolantFactoryMethodLinear:return Tc;case this.InterpolantFactoryMethodSmooth:return yc;case this.InterpolantFactoryMethodBezier:return uh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;ah(this.settings)&&(rp(this.settings.inTangents,t),rp(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(de("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(de("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){de("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){de("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&bx(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){de("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===yc,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(s)c=!0;else{let f=a*i,h=f-i,d=f+i;for(let m=0;m!==i;++m){let y=e[f+m];if(y!==e[h+m]||y!==e[d+m]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let f=a*i,h=o*i;for(let d=0;d!==i;++d)e[h+d]=e[f+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,ah(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function rp(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Qn.prototype.ValueTypeName="";Qn.prototype.TimeBufferType=Float32Array;Qn.prototype.ValueBufferType=Float32Array;Qn.prototype.DefaultInterpolation=Tc;var Ss=class extends Qn{constructor(t,e,i){super(t,e,i)}};Ss.prototype.ValueTypeName="bool";Ss.prototype.ValueBufferType=Array;Ss.prototype.DefaultInterpolation=Lo;Ss.prototype.InterpolantFactoryMethodLinear=void 0;Ss.prototype.InterpolantFactoryMethodSmooth=void 0;var qc=class extends Qn{constructor(t,e,i,s){super(t,e,i,s)}};qc.prototype.ValueTypeName="color";var Yc=class extends Qn{constructor(t,e,i,s){super(t,e,i,s)}};Yc.prototype.ValueTypeName="number";var $c=class extends Ms{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-e)/(s-e),l=t*a;for(let u=l+a;l!==u;l+=4)xn.slerpFlat(r,0,o,l-a,o,l,c);return r}},aa=class extends Qn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new $c(this.times,this.values,this.getValueSize(),t)}};aa.prototype.ValueTypeName="quaternion";aa.prototype.InterpolantFactoryMethodSmooth=void 0;var ws=class extends Qn{constructor(t,e,i){super(t,e,i)}};ws.prototype.ValueTypeName="string";ws.prototype.ValueBufferType=Array;ws.prototype.DefaultInterpolation=Lo;ws.prototype.InterpolantFactoryMethodLinear=void 0;ws.prototype.InterpolantFactoryMethodSmooth=void 0;var Zc=class extends Qn{constructor(t,e,i,s){super(t,e,i,s)}};Zc.prototype.ValueTypeName="vector";var jc=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){let f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){let d=l[f],m=l[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},nm=new jc,Kc=class{constructor(t){this.manager=t!==void 0?t:nm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Kc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Xr=class extends Ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},js=class extends Xr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},ch=new Ee,op=new W,ap=new W,ca=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.mapType=Yn,this.map=null,this.mapPass=null,this.matrix=new Ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Or,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new Ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;op.setFromMatrixPosition(t.matrixWorld),e.position.copy(op),ap.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ap),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){ch.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(ch,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===Pr||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(ch)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},pc=new W,mc=new xn,Ri=new W,la=class extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(pc,mc,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pc,mc,Ri.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(pc,mc,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pc,mc,Ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},xs=new W,cp=new kt,lp=new kt,On=class extends la{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Nr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ro*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Nr*2*Math.atan(Math.tan(Ro*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){xs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(xs.x,xs.y).multiplyScalar(-t/xs.z),xs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xs.x,xs.y).multiplyScalar(-t/xs.z)}getViewSize(t,e){return this.getViewBounds(t,cp,lp),e.subVectors(lp,cp)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ro*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var xh=class extends ca{constructor(){super(new On(90,1,.5,500)),this.isPointLightShadow=!0}},ua=class extends Xr{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new xh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Es=class extends la{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},bh=class extends ca{constructor(){super(new Es(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ts=class extends Xr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.shadow=new bh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ha=class extends ue{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var wr=-90,Er=1,Jc=class extends Ye{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new On(wr,Er,t,e);s.layers=this.layers,this.add(s);let r=new On(wr,Er,t,e);r.layers=this.layers,this.add(r);let o=new On(wr,Er,t,e);o.layers=this.layers,this.add(o);let a=new On(wr,Er,t,e);a.layers=this.layers,this.add(a);let c=new On(wr,Er,t,e);c.layers=this.layers,this.add(c);let l=new On(wr,Er,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===gi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Pr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},Qc=class extends On{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Yh="\\[\\]\\.:\\/",Nb=new RegExp("["+Yh+"]","g"),$h="[^"+Yh+"]",Db="[^"+Yh.replace("\\.","")+"]",Fb=/((?:WC+[\/:])*)/.source.replace("WC",$h),Ub=/(WCOD+)?/.source.replace("WCOD",Db),kb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$h),Ob=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$h),Bb=new RegExp("^"+Fb+Ub+kb+Ob+"$"),zb=["material","materials","bones","map"],vh=class{constructor(t,e,i){let s=i||qe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},qe=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Nb,"")}static parseTrackName(t){let e=Bb.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);zb.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=i(a.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ce("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){de("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){de("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){de("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){de("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){de("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){de("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){de("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;de("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){de("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){de("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};qe.Composite=vh;qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};qe.prototype.GetterByBindingType=[qe.prototype._getValue_direct,qe.prototype._getValue_array,qe.prototype._getValue_arrayElement,qe.prototype._getValue_toArray];qe.prototype.SetterByBindingTypeAndVersioning=[[qe.prototype._setValue_direct,qe.prototype._setValue_direct_setNeedsUpdate,qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_array,qe.prototype._setValue_array_setNeedsUpdate,qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_arrayElement,qe.prototype._setValue_arrayElement_setNeedsUpdate,qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_fromArray,qe.prototype._setValue_fromArray_setNeedsUpdate,qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var P3=new Float32Array(1);var As=class extends Ho{constructor(t,e,i=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var up=new Ee,Rs=class{constructor(t,e,i=0,s=1/0){this.ray=new Xs(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Fr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):de("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return up.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(up),this}intersectObject(t,e=!0,i=[]){return _h(t,this,i,e),i.sort(hp),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)_h(t[s],this,i,e);return i.sort(hp),i}};function hp(n,t){return n.distance-t.distance}function _h(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)_h(r[o],t,e,!0)}}var Mh=class n{static{n.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};var fp=new W,gc=new W,Tr=new W,Ar=new W,lh=new W,Hb=new W,Gb=new W,fa=class{constructor(t=new W,e=new W){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){fp.subVectors(t,this.start),gc.subVectors(this.end,this.start);let i=gc.dot(gc);if(i===0)return 0;let r=gc.dot(fp)/i;return e&&(r=pe(r,0,1)),r}closestPointToPoint(t,e,i){let s=this.closestPointToPointParameter(t,e);return this.delta(i).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=Hb,i=Gb){let s=10000000000000001e-32,r,o,a=this.start,c=t.start,l=this.end,u=t.end;Tr.subVectors(l,a),Ar.subVectors(u,c),lh.subVectors(a,c);let f=Tr.dot(Tr),h=Ar.dot(Ar),d=Ar.dot(lh);if(f<=s&&h<=s)return e.copy(a),i.copy(c),e.sub(i),e.dot(e);if(f<=s)r=0,o=d/h,o=pe(o,0,1);else{let m=Tr.dot(lh);if(h<=s)o=0,r=pe(-m/f,0,1);else{let y=Tr.dot(Ar),p=f*h-y*y;p!==0?r=pe((y*d-m*h)/p,0,1):r=0,o=(y*r+d)/h,o<0?(o=0,r=pe(-m/f,0,1)):o>1&&(o=1,r=pe((y-m)/f,0,1))}}return e.copy(a).addScaledVector(Tr,r),i.copy(c).addScaledVector(Ar,o),e.distanceToSquared(i)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function Zh(n,t,e,i){let s=Vb(i);switch(e){case zh:return n*t;case al:return n*t/s.components*s.byteLength;case cl:return n*t/s.components*s.byteLength;case Ns:return n*t*2/s.components*s.byteLength;case ll:return n*t*2/s.components*s.byteLength;case Hh:return n*t*3/s.components*s.byteLength;case ci:return n*t*4/s.components*s.byteLength;case ul:return n*t*4/s.components*s.byteLength;case ga:case ya:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case xa:case ba:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case fl:case pl:return Math.max(n,16)*Math.max(t,8)/4;case hl:case dl:return Math.max(n,8)*Math.max(t,8)/2;case ml:case gl:case xl:case bl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case yl:case va:case vl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case _l:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ml:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Sl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case wl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case El:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Tl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Al:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Rl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Cl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Il:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Pl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ll:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Nl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Dl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Fl:case Ul:case kl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Ol:case Bl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case _a:case zl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Vb(n){switch(n){case Yn:case Uh:return{byteLength:1,components:1};case $r:case kh:case _i:return{byteLength:2,components:1};case rl:case ol:return{byteLength:2,components:4};case vi:case sl:case ai:return{byteLength:4,components:1};case Oh:case Bh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function wm(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function $b(n){let t=new WeakMap;function e(a,c){let l=a.array,u=a.usage,f=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,c,l){let u=c.array,f=c.updateRanges;if(n.bindBuffer(l,a),f.length===0)n.bufferSubData(l,0,u);else{f.sort((d,m)=>d.start-m.start);let h=0;for(let d=1;d<f.length;d++){let m=f[h],y=f[d];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++h,f[h]=y)}f.length=h+1;for(let d=0,m=f.length;d<m;d++){let y=f[d];n.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Zb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Kb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,t1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,e1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,n1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,i1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,s1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,r1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,o1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,a1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,c1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,l1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,u1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,h1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,f1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,d1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,p1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,m1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,g1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,y1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,x1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,b1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,v1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,_1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,M1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,S1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,w1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,E1="gl_FragColor = linearToOutputTexel( gl_FragColor );",T1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,A1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,R1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,C1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,I1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,P1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,L1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,N1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,D1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,F1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,U1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,k1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,O1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,B1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,z1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,H1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,G1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,V1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,W1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,X1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,q1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Y1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Z1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,j1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,K1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,J1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Q1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ev=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ov=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,av=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,fv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,xv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_v=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Ev=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Av=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Iv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Lv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Nv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Dv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Fv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Uv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,kv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ov=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Bv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Wv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Xv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$v=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Zv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,n_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,i_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,s_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,r_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,o_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,c_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,l_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,u_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,p_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,g_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,y_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,v_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,__=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,w_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,E_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,A_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,R_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ve={alphahash_fragment:Zb,alphahash_pars_fragment:jb,alphamap_fragment:Kb,alphamap_pars_fragment:Jb,alphatest_fragment:Qb,alphatest_pars_fragment:t1,aomap_fragment:e1,aomap_pars_fragment:n1,batching_pars_vertex:i1,batching_vertex:s1,begin_vertex:r1,beginnormal_vertex:o1,bsdfs:a1,iridescence_fragment:c1,bumpmap_pars_fragment:l1,clipping_planes_fragment:u1,clipping_planes_pars_fragment:h1,clipping_planes_pars_vertex:f1,clipping_planes_vertex:d1,color_fragment:p1,color_pars_fragment:m1,color_pars_vertex:g1,color_vertex:y1,common:x1,cube_uv_reflection_fragment:b1,defaultnormal_vertex:v1,displacementmap_pars_vertex:_1,displacementmap_vertex:M1,emissivemap_fragment:S1,emissivemap_pars_fragment:w1,colorspace_fragment:E1,colorspace_pars_fragment:T1,envmap_fragment:A1,envmap_common_pars_fragment:R1,envmap_pars_fragment:C1,envmap_pars_vertex:I1,envmap_physical_pars_fragment:H1,envmap_vertex:P1,fog_vertex:L1,fog_pars_vertex:N1,fog_fragment:D1,fog_pars_fragment:F1,gradientmap_pars_fragment:U1,lightmap_pars_fragment:k1,lights_lambert_fragment:O1,lights_lambert_pars_fragment:B1,lights_pars_begin:z1,lights_toon_fragment:G1,lights_toon_pars_fragment:V1,lights_phong_fragment:W1,lights_phong_pars_fragment:X1,lights_physical_fragment:q1,lights_physical_pars_fragment:Y1,lights_fragment_begin:$1,lights_fragment_maps:Z1,lights_fragment_end:j1,lightprobes_pars_fragment:K1,logdepthbuf_fragment:J1,logdepthbuf_pars_fragment:Q1,logdepthbuf_pars_vertex:tv,logdepthbuf_vertex:ev,map_fragment:nv,map_pars_fragment:iv,map_particle_fragment:sv,map_particle_pars_fragment:rv,metalnessmap_fragment:ov,metalnessmap_pars_fragment:av,morphinstance_vertex:cv,morphcolor_vertex:lv,morphnormal_vertex:uv,morphtarget_pars_vertex:hv,morphtarget_vertex:fv,normal_fragment_begin:dv,normal_fragment_maps:pv,normal_pars_fragment:mv,normal_pars_vertex:gv,normal_vertex:yv,normalmap_pars_fragment:xv,clearcoat_normal_fragment_begin:bv,clearcoat_normal_fragment_maps:vv,clearcoat_pars_fragment:_v,iridescence_pars_fragment:Mv,opaque_fragment:Sv,packing:wv,premultiplied_alpha_fragment:Ev,project_vertex:Tv,dithering_fragment:Av,dithering_pars_fragment:Rv,roughnessmap_fragment:Cv,roughnessmap_pars_fragment:Iv,shadowmap_pars_fragment:Pv,shadowmap_pars_vertex:Lv,shadowmap_vertex:Nv,shadowmask_pars_fragment:Dv,skinbase_vertex:Fv,skinning_pars_vertex:Uv,skinning_vertex:kv,skinnormal_vertex:Ov,specularmap_fragment:Bv,specularmap_pars_fragment:zv,tonemapping_fragment:Hv,tonemapping_pars_fragment:Gv,transmission_fragment:Vv,transmission_pars_fragment:Wv,uv_pars_fragment:Xv,uv_pars_vertex:qv,uv_vertex:Yv,worldpos_vertex:$v,background_vert:Zv,background_frag:jv,backgroundCube_vert:Kv,backgroundCube_frag:Jv,cube_vert:Qv,cube_frag:t_,depth_vert:e_,depth_frag:n_,distance_vert:i_,distance_frag:s_,equirect_vert:r_,equirect_frag:o_,linedashed_vert:a_,linedashed_frag:c_,meshbasic_vert:l_,meshbasic_frag:u_,meshlambert_vert:h_,meshlambert_frag:f_,meshmatcap_vert:d_,meshmatcap_frag:p_,meshnormal_vert:m_,meshnormal_frag:g_,meshphong_vert:y_,meshphong_frag:x_,meshphysical_vert:b_,meshphysical_frag:v_,meshtoon_vert:__,meshtoon_frag:M_,points_vert:S_,points_frag:w_,shadow_vert:E_,shadow_frag:T_,sprite_vert:A_,sprite_frag:R_},Xt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},Hn={basic:{uniforms:Dn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:Dn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new qt(0)},envMapIntensity:{value:1}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:Dn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:Dn([Xt.common,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.roughnessmap,Xt.metalnessmap,Xt.fog,Xt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:Dn([Xt.common,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.gradientmap,Xt.fog,Xt.lights,{emissive:{value:new qt(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:Dn([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:Dn([Xt.points,Xt.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:Dn([Xt.common,Xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:Dn([Xt.common,Xt.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:Dn([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:Dn([Xt.sprite,Xt.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distance:{uniforms:Dn([Xt.common,Xt.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distance_vert,fragmentShader:ve.distance_frag},shadow:{uniforms:Dn([Xt.lights,Xt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};Hn.physical={uniforms:Dn([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};var Vl={r:0,b:0,g:0},C_=new Ee,Em=new me;Em.set(-1,0,0,0,1,0,0,0,1);function I_(n,t,e,i,s,r){let o=new qt(0),a=s===!0?0:1,c,l,u=null,f=0,h=null;function d(x){let v=x.isScene===!0?x.background:null;if(v&&v.isTexture){let b=x.backgroundBlurriness>0;v=t.get(v,b)}return v}function m(x){let v=!1,b=d(x);b===null?p(o,a):b&&b.isColor&&(p(b,1),v=!0);let _=n.xr.getEnvironmentBlendMode();_==="additive"?e.buffers.color.setClear(0,0,0,1,r):_==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||v)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(x,v){let b=d(v);b&&(b.isCubeTexture||b.mapping===pa)?(l===void 0&&(l=new ae(new Te(1,1,1),new $e({name:"BackgroundCubeMaterial",uniforms:tr(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(_,M,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(C_.makeRotationFromEuler(v.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Em),l.material.toneMapped=_e.getTransfer(b.colorSpace)!==Le,(u!==b||f!==b.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=b,f=b.version,h=n.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new ae(new Nn(2,2),new $e({name:"BackgroundMaterial",uniforms:tr(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:Cs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=_e.getTransfer(b.colorSpace)!==Le,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=b,f=b.version,h=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,v){x.getRGB(Vl,qh(n)),e.buffers.color.setClear(Vl.r,Vl.g,Vl.b,v,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,v=1){o.set(x),a=v,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,p(o,a)},render:m,addToRenderList:y,dispose:g}}function P_(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,o=!1;function a(P,k,z,O,U){let V=!1,j=f(P,O,z,k);r!==j&&(r=j,l(r.object)),V=d(P,O,z,U),V&&m(P,O,z,U),U!==null&&t.update(U,n.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,b(P,k,z,O),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function c(){return n.createVertexArray()}function l(P){return n.bindVertexArray(P)}function u(P){return n.deleteVertexArray(P)}function f(P,k,z,O){let U=O.wireframe===!0,V=i[k.id];V===void 0&&(V={},i[k.id]=V);let j=P.isInstancedMesh===!0?P.id:0,dt=V[j];dt===void 0&&(dt={},V[j]=dt);let ot=dt[z.id];ot===void 0&&(ot={},dt[z.id]=ot);let G=ot[U];return G===void 0&&(G=h(c()),ot[U]=G),G}function h(P){let k=[],z=[],O=[];for(let U=0;U<e;U++)k[U]=0,z[U]=0,O[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:z,attributeDivisors:O,object:P,attributes:{},index:null}}function d(P,k,z,O){let U=r.attributes,V=k.attributes,j=0,dt=z.getAttributes();for(let ot in dt)if(dt[ot].location>=0){let q=U[ot],xt=V[ot];if(xt===void 0&&(ot==="instanceMatrix"&&P.instanceMatrix&&(xt=P.instanceMatrix),ot==="instanceColor"&&P.instanceColor&&(xt=P.instanceColor)),q===void 0||q.attribute!==xt||xt&&q.data!==xt.data)return!0;j++}return r.attributesNum!==j||r.index!==O}function m(P,k,z,O){let U={},V=k.attributes,j=0,dt=z.getAttributes();for(let ot in dt)if(dt[ot].location>=0){let q=V[ot];q===void 0&&(ot==="instanceMatrix"&&P.instanceMatrix&&(q=P.instanceMatrix),ot==="instanceColor"&&P.instanceColor&&(q=P.instanceColor));let xt={};xt.attribute=q,q&&q.data&&(xt.data=q.data),U[ot]=xt,j++}r.attributes=U,r.attributesNum=j,r.index=O}function y(){let P=r.newAttributes;for(let k=0,z=P.length;k<z;k++)P[k]=0}function p(P){g(P,0)}function g(P,k){let z=r.newAttributes,O=r.enabledAttributes,U=r.attributeDivisors;z[P]=1,O[P]===0&&(n.enableVertexAttribArray(P),O[P]=1),U[P]!==k&&(n.vertexAttribDivisor(P,k),U[P]=k)}function x(){let P=r.newAttributes,k=r.enabledAttributes;for(let z=0,O=k.length;z<O;z++)k[z]!==P[z]&&(n.disableVertexAttribArray(z),k[z]=0)}function v(P,k,z,O,U,V,j){j===!0?n.vertexAttribIPointer(P,k,z,U,V):n.vertexAttribPointer(P,k,z,O,U,V)}function b(P,k,z,O){y();let U=O.attributes,V=z.getAttributes(),j=k.defaultAttributeValues;for(let dt in V){let ot=V[dt];if(ot.location>=0){let G=U[dt];if(G===void 0&&(dt==="instanceMatrix"&&P.instanceMatrix&&(G=P.instanceMatrix),dt==="instanceColor"&&P.instanceColor&&(G=P.instanceColor)),G!==void 0){let q=G.normalized,xt=G.itemSize,gt=t.get(G);if(gt===void 0)continue;let pt=gt.buffer,at=gt.type,St=gt.bytesPerElement,Z=at===n.INT||at===n.UNSIGNED_INT||G.gpuType===sl;if(G.isInterleavedBufferAttribute){let rt=G.data,wt=rt.stride,Lt=G.offset;if(rt.isInstancedInterleavedBuffer){for(let Nt=0;Nt<ot.locationSize;Nt++)g(ot.location+Nt,rt.meshPerAttribute);P.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Nt=0;Nt<ot.locationSize;Nt++)p(ot.location+Nt);n.bindBuffer(n.ARRAY_BUFFER,pt);for(let Nt=0;Nt<ot.locationSize;Nt++)v(ot.location+Nt,xt/ot.locationSize,at,q,wt*St,(Lt+xt/ot.locationSize*Nt)*St,Z)}else{if(G.isInstancedBufferAttribute){for(let rt=0;rt<ot.locationSize;rt++)g(ot.location+rt,G.meshPerAttribute);P.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let rt=0;rt<ot.locationSize;rt++)p(ot.location+rt);n.bindBuffer(n.ARRAY_BUFFER,pt);for(let rt=0;rt<ot.locationSize;rt++)v(ot.location+rt,xt/ot.locationSize,at,q,xt*St,xt/ot.locationSize*rt*St,Z)}}else if(j!==void 0){let q=j[dt];if(q!==void 0)switch(q.length){case 2:n.vertexAttrib2fv(ot.location,q);break;case 3:n.vertexAttrib3fv(ot.location,q);break;case 4:n.vertexAttrib4fv(ot.location,q);break;default:n.vertexAttrib1fv(ot.location,q)}}}}x()}function _(){T();for(let P in i){let k=i[P];for(let z in k){let O=k[z];for(let U in O){let V=O[U];for(let j in V)u(V[j].object),delete V[j];delete O[U]}}delete i[P]}}function M(P){if(i[P.id]===void 0)return;let k=i[P.id];for(let z in k){let O=k[z];for(let U in O){let V=O[U];for(let j in V)u(V[j].object),delete V[j];delete O[U]}}delete i[P.id]}function R(P){for(let k in i){let z=i[k];for(let O in z){let U=z[O];if(U[P.id]===void 0)continue;let V=U[P.id];for(let j in V)u(V[j].object),delete V[j];delete U[P.id]}}}function S(P){for(let k in i){let z=i[k],O=P.isInstancedMesh===!0?P.id:0,U=z[O];if(U!==void 0){for(let V in U){let j=U[V];for(let dt in j)u(j[dt].object),delete j[dt];delete U[V]}delete z[O],Object.keys(z).length===0&&delete i[k]}}}function T(){I(),o=!0,r!==s&&(r=s,l(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:I,dispose:_,releaseStatesOfGeometry:M,releaseStatesOfObject:S,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:p,disableUnusedAttributes:x}}function L_(n,t,e){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),e.update(l,i,1)}function o(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),e.update(l,i,u))}function a(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let h=0;for(let d=0;d<u;d++)h+=l[d];e.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function N_(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==ci&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let S=R===_i&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Yn&&R!==ai&&!S&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(ce("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&ce("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=n.getParameter(n.MAX_SAMPLES),M=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:b,maxSamples:_,samples:M}}function D_(n){let t=this,e=null,i=0,s=!1,r=!1,o=new Kn,a=new me,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||i!==0||s;return s=h,i=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){let m=f.clippingPlanes,y=f.clipIntersection,p=f.clipShadows,g=n.get(f);if(!s||m===null||m.length===0||r&&!p)r?u(null):l();else{let x=r?0:i,v=x*4,b=g.clippingState||null;c.value=b,b=u(m,h,v,d);for(let _=0;_!==v;++_)b[_]=e[_];g.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,h,d,m){let y=f!==null?f.length:0,p=null;if(y!==0){if(p=c.value,m!==!0||p===null){let g=d+y*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<g)&&(p=new Float32Array(g));for(let v=0,b=d;v!==y;++v,b+=4)o.copy(f[v]).applyMatrix4(x,a),o.normal.toArray(p,b),p[b+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}var Kr=4,F_=6,U_=20,k_=256,Sa=new Es,im=new qt,jh=null,Kh=0,Jh=0,Qh=!1,O_=new W,er=new W,Xl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=O_}=r;jh=this._renderer.getRenderTarget(),Kh=this._renderer.getActiveCubeFace(),Jh=this._renderer.getActiveMipmapLevel(),Qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=om(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(jh,Kh,Jh),this._renderer.xr.enabled=Qh,t.scissorTest=!1,jr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Is||t.mapping===Qs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),jh=this._renderer.getRenderTarget(),Kh=this._renderer.getActiveCubeFace(),Jh=this._renderer.getActiveMipmapLevel(),Qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:_i,format:ci,colorSpace:No,depthBuffer:!1},s=sm(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sm(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=B_(r)),this._blurMaterial=H_(r,t,e),this._ggxMaterial=z_(r,t,e)}return s}_compileMaterial(t){let e=new ae(new ue,t);this._renderer.compile(e,Sa)}_sceneToCubeUV(t,e,i,s,r){let c=new On(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(im),f.toneMapping=bi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ae(new Te,new Ce({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,p=y.material,g=!1,x=t.background;x?x.isColor&&(p.color.copy(x),t.background=null,g=!0):(p.color.copy(im),g=!0);for(let v=0;v<6;v++){let b=v%3;b===0?(c.up.set(0,l[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[v],r.y,r.z)):b===1?(c.up.set(0,0,l[v]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[v],r.z)):(c.up.set(0,l[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[v]));let _=this._cubeSize;jr(s,b*_,v>2?_:0,_,_),f.setRenderTarget(s),g&&f.render(y,c),f.render(t,c)}f.toneMapping=d,f.autoClear=h,t.background=x}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Is||t.mapping===Qs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=om()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rm());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;jr(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Sa)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let c=o.uniforms,l=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),h=l*1.25,d=f*h,{_lodMax:m}=this,y=this._sizeLods[i],p=3*y*(i>m-Kr?i-m+Kr:0),g=4*(this._cubeSize-y);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=m-e,jr(r,p,g,3*y,2*y),s.setRenderTarget(r),s.render(a,Sa),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=m-i,jr(t,p,g,3*y,2*y),s.setRenderTarget(t),s.render(a,Sa)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,o),this._blurPass(r,t,i,i,o)}_blurPass(t,e,i,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;let u=this._sizeLods[s],f=3*u*(s>this._lodMax-Kr?s-this._lodMax+Kr:0),h=4*(this._cubeSize-u);jr(e,f,h,3*u,2*u),o.setRenderTarget(e),o.render(c,Sa)}};function B_(n){let t=[],e=[],i=n,s=n-Kr+1+F_;for(let r=0;r<s;r++){let o=Math.pow(2,i);t.push(o);let a=1/(o-2),c=-a,l=1+a,u=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,h=6,d=3,m=new Float32Array(d*h*f),y=new Float32Array(d*h*f);for(let g=0;g<f;g++){let x=g%3*2/3-1,v=g>2?0:-1,b=[x,v,0,x+2/3,v,0,x+2/3,v+1,0,x,v,0,x+2/3,v+1,0,x,v+1,0];m.set(b,d*h*g);for(let _=0;_<h;_++){let M=u[_*2]*2-1,R=u[_*2+1]*2-1;g===0?er.set(1,R,M):g===1?er.set(-M,1,-R):g===2?er.set(-M,R,1):g===3?er.set(-1,R,-M):g===4?er.set(-M,-1,R):er.set(M,R,-1),er.toArray(y,(g*h+_)*d)}}let p=new ue;p.setAttribute("position",new Pe(m,d)),p.setAttribute("outputDirection",new Pe(y,d)),e.push(new ae(p,null)),i>Kr&&i--}return{lodMeshes:e,sizeLods:t}}function sm(n,t,e){let i=new Xn(n,t,e);return i.texture.mapping=pa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function jr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function z_(n,t,e){return new $e({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:k_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$l(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function H_(n,t,e){return new $e({name:"SphericalGaussianBlur",defines:{SAMPLES:U_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:$l(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function rm(){return new $e({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function om(){return new $e({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function $l(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ql=class extends Xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Wo(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Te(5,5,5),r=new $e({name:"CubemapFromEquirect",uniforms:tr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bn,blending:Fi});r.uniforms.tEquirect.value=e;let o=new ae(s,r),a=e.minFilter;return e.minFilter===Ps&&(e.minFilter=Sn),new Jc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}};function G_(n){let t=new WeakMap,e=new WeakMap,i=null;function s(h,d=!1){return h==null?null:d?o(h):r(h)}function r(h){if(h&&h.isTexture){let d=h.mapping;if(d===el||d===nl)if(t.has(h)){let m=t.get(h).texture;return a(m,h.mapping)}else{let m=h.image;if(m&&m.height>0){let y=new ql(m.height);return y.fromEquirectangularTexture(n,h),t.set(h,y),h.addEventListener("dispose",l),a(y.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let d=h.mapping,m=d===el||d===nl,y=d===Is||d===Qs;if(m||y){let p=e.get(h),g=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return i===null&&(i=new Xl(n)),p=m?i.fromEquirectangular(h,p):i.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),p.texture;if(p!==void 0)return p.texture;{let x=h.image;return m&&x&&x.height>0||y&&x&&c(x)?(i===null&&(i=new Xl(n)),p=m?i.fromEquirectangular(h):i.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function a(h,d){return d===el?h.mapping=Is:d===nl&&(h.mapping=Qs),h}function c(h){let d=0,m=6;for(let y=0;y<m;y++)h[y]!==void 0&&d++;return d===m}function l(h){let d=h.target;d.removeEventListener("dispose",l);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(h){let d=h.target;d.removeEventListener("dispose",u);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function V_(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Vs("WebGLRenderer: "+i+" extension not supported."),s}}}function W_(n,t,e,i){let s={},r=new WeakMap;function o(f){let h=f.target;h.index!==null&&t.remove(h.index);for(let m in h.attributes)t.remove(h.attributes[m]);h.removeEventListener("dispose",o),delete s[h.id];let d=r.get(h);d&&(t.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function c(f){let h=f.attributes;for(let d in h)t.update(h[d],n.ARRAY_BUFFER)}function l(f){let h=[],d=f.index,m=f.attributes.position,y=0;if(m===void 0)return;if(d!==null){let x=d.array;y=d.version;for(let v=0,b=x.length;v<b;v+=3){let _=x[v+0],M=x[v+1],R=x[v+2];h.push(_,M,M,R,R,_)}}else{let x=m.array;y=m.version;for(let v=0,b=x.length/3-1;v<b;v+=3){let _=v+0,M=v+1,R=v+2;h.push(_,M,M,R,R,_)}}let p=new(m.count>=65535?zo:Bo)(h,1);p.version=y;let g=r.get(f);g&&t.remove(g),r.set(f,p)}function u(f){let h=r.get(f);if(h){let d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function X_(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,h){n.drawElements(i,h,r,f*o),e.update(h,i,1)}function l(f,h,d){d!==0&&(n.drawElementsInstanced(i,h,r,f*o,d),e.update(h,i,d))}function u(f,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,d);let y=0;for(let p=0;p<d;p++)y+=h[p];e.update(y,i,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function q_(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:de("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Y_(n,t,e){let i=new WeakMap,s=new Ne;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,h=i.get(a);if(h===void 0||h.count!==f){let T=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],v=0;d===!0&&(v=1),m===!0&&(v=2),y===!0&&(v=3);let b=a.attributes.position.count*v,_=1;b>t.maxTextureSize&&(_=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let M=new Float32Array(b*_*4*f),R=new ko(M,b,_,f);R.type=ai,R.needsUpdate=!0;let S=v*4;for(let I=0;I<f;I++){let P=p[I],k=g[I],z=x[I],O=b*_*4*I;for(let U=0;U<P.count;U++){let V=U*S;d===!0&&(s.fromBufferAttribute(P,U),M[O+V+0]=s.x,M[O+V+1]=s.y,M[O+V+2]=s.z,M[O+V+3]=0),m===!0&&(s.fromBufferAttribute(k,U),M[O+V+4]=s.x,M[O+V+5]=s.y,M[O+V+6]=s.z,M[O+V+7]=0),y===!0&&(s.fromBufferAttribute(z,U),M[O+V+8]=s.x,M[O+V+9]=s.y,M[O+V+10]=s.z,M[O+V+11]=z.itemSize===4?s.w:1)}}h={count:f,texture:R,size:new kt(b,_)},i.set(a,h),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let d=0;for(let y=0;y<l.length;y++)d+=l[y];let m=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",m),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function $_(n,t,e,i,s){let r=new WeakMap;function o(l){let u=s.render.frame,f=l.geometry,h=t.get(l,f);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function a(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var Z_={[Ch]:"LINEAR_TONE_MAPPING",[Ih]:"REINHARD_TONE_MAPPING",[Ph]:"CINEON_TONE_MAPPING",[da]:"ACES_FILMIC_TONE_MAPPING",[Nh]:"AGX_TONE_MAPPING",[Dh]:"NEUTRAL_TONE_MAPPING",[Lh]:"CUSTOM_TONE_MAPPING"};function j_(n,t,e,i,s,r){let o=new Xn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new ue;l.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new $t([0,2,0,0,2,0],2));let u=new Bc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new ae(l,u),h=new Es(-1,1,1,-1,0,1),d=null,m=null,y=!1,p,g=null,x=[],v=!1;this.setSize=function(b,_){o.setSize(b,_),a!==null&&a.setSize(b,_),c!==null&&c.setSize(b,_);for(let M=0;M<x.length;M++){let R=x[M];R.setSize&&R.setSize(b,_)}},this.setEffects=function(b){x=b,v=x.length>0&&x[0].isRenderPass===!0;let _=o.width,M=o.height;x.length>0&&a===null&&(a=new Xn(_,M,{type:_i,depthBuffer:!1,stencilBuffer:!1}),c=new Xn(_,M,{type:_i,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<x.length;R++){let S=x[R];S.setSize&&S.setSize(_,M)}},this.begin=function(b,_){if(y||b.toneMapping===bi&&x.length===0)return!1;if(g=_,_!==null){let M=_.width,R=_.height;(o.width!==M||o.height!==R)&&this.setSize(M,R)}return v===!1&&b.setRenderTarget(o),p=b.toneMapping,b.toneMapping=bi,!0},this.hasRenderPass=function(){return v},this.end=function(b,_){b.toneMapping=p,y=!0;let M=o,R=a;for(let S=0;S<x.length;S++){let T=x[S];T.enabled!==!1&&(T.render(b,R,M,_),T.needsSwap!==!1&&(M=R,R=R===a?c:a))}if(d!==b.outputColorSpace||m!==b.toneMapping){d=b.outputColorSpace,m=b.toneMapping,u.defines={},_e.getTransfer(d)===Le&&(u.defines.SRGB_TRANSFER="");let S=Z_[m];S&&(u.defines[S]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=M.texture,b.setRenderTarget(g),b.render(f,h),g=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Tm=new wn,nf=new _s(1,1),Am=new ko,Rm=new Cc,Cm=new Wo,am=[],cm=[],lm=new Float32Array(16),um=new Float32Array(9),hm=new Float32Array(4);function Qr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=am[s];if(r===void 0&&(r=new Float32Array(s),am[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function un(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function hn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Zl(n,t){let e=cm[t];e===void 0&&(e=new Int32Array(t),cm[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function K_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function J_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(un(e,t))return;n.uniform2fv(this.addr,t),hn(e,t)}}function Q_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(un(e,t))return;n.uniform3fv(this.addr,t),hn(e,t)}}function tM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(un(e,t))return;n.uniform4fv(this.addr,t),hn(e,t)}}function eM(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(un(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),hn(e,t)}else{if(un(e,i))return;hm.set(i),n.uniformMatrix2fv(this.addr,!1,hm),hn(e,i)}}function nM(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(un(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),hn(e,t)}else{if(un(e,i))return;um.set(i),n.uniformMatrix3fv(this.addr,!1,um),hn(e,i)}}function iM(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(un(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),hn(e,t)}else{if(un(e,i))return;lm.set(i),n.uniformMatrix4fv(this.addr,!1,lm),hn(e,i)}}function sM(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function rM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(un(e,t))return;n.uniform2iv(this.addr,t),hn(e,t)}}function oM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(un(e,t))return;n.uniform3iv(this.addr,t),hn(e,t)}}function aM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(un(e,t))return;n.uniform4iv(this.addr,t),hn(e,t)}}function cM(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function lM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(un(e,t))return;n.uniform2uiv(this.addr,t),hn(e,t)}}function uM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(un(e,t))return;n.uniform3uiv(this.addr,t),hn(e,t)}}function hM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(un(e,t))return;n.uniform4uiv(this.addr,t),hn(e,t)}}function fM(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(nf.compareFunction=e.isReversedDepthBuffer()?Gl:Hl,r=nf):r=Tm,e.setTexture2D(t||r,s)}function dM(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Rm,s)}function pM(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Cm,s)}function mM(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Am,s)}function gM(n){switch(n){case 5126:return K_;case 35664:return J_;case 35665:return Q_;case 35666:return tM;case 35674:return eM;case 35675:return nM;case 35676:return iM;case 5124:case 35670:return sM;case 35667:case 35671:return rM;case 35668:case 35672:return oM;case 35669:case 35673:return aM;case 5125:return cM;case 36294:return lM;case 36295:return uM;case 36296:return hM;case 35678:case 36198:case 36298:case 36306:case 35682:return fM;case 35679:case 36299:case 36307:return dM;case 35680:case 36300:case 36308:case 36293:return pM;case 36289:case 36303:case 36311:case 36292:return mM}}function yM(n,t){n.uniform1fv(this.addr,t)}function xM(n,t){let e=Qr(t,this.size,2);n.uniform2fv(this.addr,e)}function bM(n,t){let e=Qr(t,this.size,3);n.uniform3fv(this.addr,e)}function vM(n,t){let e=Qr(t,this.size,4);n.uniform4fv(this.addr,e)}function _M(n,t){let e=Qr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function MM(n,t){let e=Qr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function SM(n,t){let e=Qr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function wM(n,t){n.uniform1iv(this.addr,t)}function EM(n,t){n.uniform2iv(this.addr,t)}function TM(n,t){n.uniform3iv(this.addr,t)}function AM(n,t){n.uniform4iv(this.addr,t)}function RM(n,t){n.uniform1uiv(this.addr,t)}function CM(n,t){n.uniform2uiv(this.addr,t)}function IM(n,t){n.uniform3uiv(this.addr,t)}function PM(n,t){n.uniform4uiv(this.addr,t)}function LM(n,t,e){let i=this.cache,s=t.length,r=Zl(e,s);un(i,r)||(n.uniform1iv(this.addr,r),hn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=nf:o=Tm;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function NM(n,t,e){let i=this.cache,s=t.length,r=Zl(e,s);un(i,r)||(n.uniform1iv(this.addr,r),hn(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Rm,r[o])}function DM(n,t,e){let i=this.cache,s=t.length,r=Zl(e,s);un(i,r)||(n.uniform1iv(this.addr,r),hn(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Cm,r[o])}function FM(n,t,e){let i=this.cache,s=t.length,r=Zl(e,s);un(i,r)||(n.uniform1iv(this.addr,r),hn(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Am,r[o])}function UM(n){switch(n){case 5126:return yM;case 35664:return xM;case 35665:return bM;case 35666:return vM;case 35674:return _M;case 35675:return MM;case 35676:return SM;case 5124:case 35670:return wM;case 35667:case 35671:return EM;case 35668:case 35672:return TM;case 35669:case 35673:return AM;case 5125:return RM;case 36294:return CM;case 36295:return IM;case 36296:return PM;case 35678:case 36198:case 36298:case 36306:case 35682:return LM;case 35679:case 36299:case 36307:return NM;case 35680:case 36300:case 36308:case 36293:return DM;case 36289:case 36303:case 36311:case 36292:return FM}}var sf=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=gM(e.type)}},rf=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=UM(e.type)}},of=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},tf=/(\w+)(\])?(\[|\.)?/g;function fm(n,t){n.seq.push(t),n.map[t.id]=t}function kM(n,t,e){let i=n.name,s=i.length;for(tf.lastIndex=0;;){let r=tf.exec(i),o=tf.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){fm(e,l===void 0?new sf(a,n,t):new rf(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new of(a),fm(e,f)),e=f}}}var Jr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);kM(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function dm(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var OM=37297,BM=0;function zM(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var pm=new me;function HM(n){_e._getMatrix(pm,_e.workingColorSpace,n);let t=`mat3( ${pm.elements.map(e=>e.toFixed(4))} )`;switch(_e.getTransfer(n)){case Do:return[t,"LinearTransferOETF"];case Le:return[t,"sRGBTransferOETF"];default:return ce("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function mm(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+zM(n.getShaderSource(t),a)}else return r}function GM(n,t){let e=HM(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var VM={[Ch]:"Linear",[Ih]:"Reinhard",[Ph]:"Cineon",[da]:"ACESFilmic",[Nh]:"AgX",[Dh]:"Neutral",[Lh]:"Custom"};function WM(n,t){let e=VM[t];return e===void 0?(ce("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Wl=new W;function XM(){_e.getLuminanceCoefficients(Wl);let n=Wl.x.toFixed(4),t=Wl.y.toFixed(4),e=Wl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ea).join(`
`)}function YM(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function $M(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Ea(n){return n!==""}function gm(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ym(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ZM=/^[ \t]*#include +<([\w\d./]+)>/gm;function af(n){return n.replace(ZM,KM)}var jM=new Map;function KM(n,t){let e=ve[t];if(e===void 0){let i=jM.get(t);if(i!==void 0)e=ve[i],ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return af(e)}var JM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xm(n){return n.replace(JM,QM)}function QM(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bm(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var tS={[Ks]:"SHADOWMAP_TYPE_PCF",[qr]:"SHADOWMAP_TYPE_VSM"};function eS(n){return tS[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var nS={[Is]:"ENVMAP_TYPE_CUBE",[Qs]:"ENVMAP_TYPE_CUBE",[pa]:"ENVMAP_TYPE_CUBE_UV"};function iS(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":nS[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var sS={[Qs]:"ENVMAP_MODE_REFRACTION"};function rS(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":sS[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var oS={[tl]:"ENVMAP_BLENDING_MULTIPLY",[Dp]:"ENVMAP_BLENDING_MIX",[Fp]:"ENVMAP_BLENDING_ADD"};function aS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":oS[n.combine]||"ENVMAP_BLENDING_NONE"}function cS(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function lS(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=eS(e),l=iS(e),u=rS(e),f=aS(e),h=cS(e),d=qM(e),m=YM(r),y=s.createProgram(),p,g,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ea).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ea).join(`
`),g.length>0&&(g+=`
`)):(p=[bm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ea).join(`
`),g=[bm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==bi?"#define TONE_MAPPING":"",e.toneMapping!==bi?ve.tonemapping_pars_fragment:"",e.toneMapping!==bi?WM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,GM("linearToOutputTexel",e.outputColorSpace),XM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ea).join(`
`)),o=af(o),o=gm(o,e),o=ym(o,e),a=af(a),a=gm(a,e),a=ym(a,e),o=xm(o),a=xm(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",e.glslVersion===Vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let v=x+p+o,b=x+g+a,_=dm(s,s.VERTEX_SHADER,v),M=dm(s,s.FRAGMENT_SHADER,b);s.attachShader(y,_),s.attachShader(y,M),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function R(P){if(n.debug.checkShaderErrors){let k=s.getProgramInfoLog(y)||"",z=s.getShaderInfoLog(_)||"",O=s.getShaderInfoLog(M)||"",U=k.trim(),V=z.trim(),j=O.trim(),dt=!0,ot=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(dt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,_,M);else{let G=mm(s,_,"vertex"),q=mm(s,M,"fragment");de("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+G+`
`+q)}else U!==""?ce("WebGLProgram: Program Info Log:",U):(V===""||j==="")&&(ot=!1);ot&&(P.diagnostics={runnable:dt,programLog:U,vertexShader:{log:V,prefix:p},fragmentShader:{log:j,prefix:g}})}s.deleteShader(_),s.deleteShader(M),S=new Jr(s,y),T=$M(s,y)}let S;this.getUniforms=function(){return S===void 0&&R(this),S};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(y,OM)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=BM++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=_,this.fragmentShader=M,this}var uS=0,cf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new lf(t),e.set(t,i)),i}},lf=class{constructor(t){this.id=uS++,this.code=t,this.usedTimes=0}};function hS(n){return n===Ns||n===va||n===_a}function fS(n,t,e,i,s,r){let o=new Fr,a=new cf,c=new Set,l=[],u=new Map,f=i.logarithmicDepthBuffer,h=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return c.add(S),S===0?"uv":`uv${S}`}function y(S,T,I,P,k,z){let O=P.fog,U=k.geometry,V=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?P.environment:null,j=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,dt=t.get(S.envMap||V,j),ot=dt&&dt.mapping===pa?dt.image.height:null,G=d[S.type];S.precision!==null&&(h=i.getMaxPrecision(S.precision),h!==S.precision&&ce("WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));let q=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,xt=q!==void 0?q.length:0,gt=0;U.morphAttributes.position!==void 0&&(gt=1),U.morphAttributes.normal!==void 0&&(gt=2),U.morphAttributes.color!==void 0&&(gt=3);let pt,at,St,Z;if(G){let le=Hn[G];pt=le.vertexShader,at=le.fragmentShader}else{pt=S.vertexShader,at=S.fragmentShader;let le=a.getVertexShaderStage(S),re=a.getFragmentShaderStage(S);a.update(S,le,re),St=le.id,Z=re.id}let rt=n.getRenderTarget(),wt=n.state.buffers.depth.getReversed(),Lt=k.isInstancedMesh===!0,Nt=k.isBatchedMesh===!0,H=!!S.map,bt=!!S.matcap,K=!!dt,et=!!S.aoMap,$=!!S.lightMap,ht=!!S.bumpMap&&S.wireframe===!1,yt=!!S.normalMap,It=!!S.displacementMap,Pt=!!S.emissiveMap,Ft=!!S.metalnessMap,Ut=!!S.roughnessMap,Y=S.anisotropy>0,te=S.clearcoat>0,Ht=S.dispersion>0,B=S.retroreflectivity>0,A=S.iridescence>0,it=S.sheen>0,mt=S.transmission>0,Mt=Y&&!!S.anisotropyMap,X=te&&!!S.clearcoatMap,w=te&&!!S.clearcoatNormalMap,E=te&&!!S.clearcoatRoughnessMap,C=A&&!!S.iridescenceMap,D=A&&!!S.iridescenceThicknessMap,F=it&&!!S.sheenColorMap,Q=it&&!!S.sheenRoughnessMap,J=!!S.specularMap,lt=!!S.specularColorMap,ft=!!S.specularIntensityMap,Ct=mt&&!!S.transmissionMap,L=mt&&!!S.thicknessMap,tt=!!S.gradientMap,nt=!!S.alphaMap,At=S.alphaTest>0,Rt=!!S.alphaHash,Tt=!!S.extensions,Ot=bi;S.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Ot=n.toneMapping);let zt={shaderID:G,shaderType:S.type,shaderName:S.name,vertexShader:pt,fragmentShader:at,defines:S.defines,customVertexShaderID:St,customFragmentShaderID:Z,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:Nt,batchingColor:Nt&&k._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&k.instanceColor!==null,instancingMorph:Lt&&k.morphTexture!==null,outputColorSpace:rt===null?n.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:_e.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:H,matcap:bt,envMap:K,envMapMode:K&&dt.mapping,envMapCubeUVHeight:ot,aoMap:et,lightMap:$,bumpMap:ht,normalMap:yt,displacementMap:It,emissiveMap:Pt,normalMapObjectSpace:yt&&S.normalMapType===Op,normalMapTangentSpace:yt&&S.normalMapType===Ma,packedNormalMap:yt&&S.normalMapType===Ma&&hS(S.normalMap.format),metalnessMap:Ft,roughnessMap:Ut,anisotropy:Y,anisotropyMap:Mt,clearcoat:te,clearcoatMap:X,clearcoatNormalMap:w,clearcoatRoughnessMap:E,dispersion:Ht,retroreflection:B,iridescence:A,iridescenceMap:C,iridescenceThicknessMap:D,sheen:it,sheenColorMap:F,sheenRoughnessMap:Q,specularMap:J,specularColorMap:lt,specularIntensityMap:ft,transmission:mt,transmissionMap:Ct,thicknessMap:L,gradientMap:tt,opaque:S.transparent===!1&&S.blending===Yr&&S.alphaToCoverage===!1,alphaMap:nt,alphaTest:At,alphaHash:Rt,combine:S.combine,mapUv:H&&m(S.map.channel),aoMapUv:et&&m(S.aoMap.channel),lightMapUv:$&&m(S.lightMap.channel),bumpMapUv:ht&&m(S.bumpMap.channel),normalMapUv:yt&&m(S.normalMap.channel),displacementMapUv:It&&m(S.displacementMap.channel),emissiveMapUv:Pt&&m(S.emissiveMap.channel),metalnessMapUv:Ft&&m(S.metalnessMap.channel),roughnessMapUv:Ut&&m(S.roughnessMap.channel),anisotropyMapUv:Mt&&m(S.anisotropyMap.channel),clearcoatMapUv:X&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:w&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:E&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:C&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:D&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:F&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:Q&&m(S.sheenRoughnessMap.channel),specularMapUv:J&&m(S.specularMap.channel),specularColorMapUv:lt&&m(S.specularColorMap.channel),specularIntensityMapUv:ft&&m(S.specularIntensityMap.channel),transmissionMapUv:Ct&&m(S.transmissionMap.channel),thicknessMapUv:L&&m(S.thicknessMap.channel),alphaMapUv:nt&&m(S.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(yt||Y),vertexNormals:!!U.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!U.attributes.uv&&(H||nt),fog:!!O,useFog:S.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||U.attributes.normal===void 0&&yt===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:wt,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:gt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ot,decodeVideoTexture:H&&S.map.isVideoTexture===!0&&_e.getTransfer(S.map.colorSpace)===Le,decodeVideoTextureEmissive:Pt&&S.emissiveMap.isVideoTexture===!0&&_e.getTransfer(S.emissiveMap.colorSpace)===Le,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Qe,flipSided:S.side===Bn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Tt&&S.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&S.extensions.multiDraw===!0||Nt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return zt.vertexUv1s=c.has(1),zt.vertexUv2s=c.has(2),zt.vertexUv3s=c.has(3),c.clear(),zt}function p(S){let T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(let I in S.defines)T.push(I),T.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(g(T,S),x(T,S),T.push(n.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function g(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numSunLights),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numSunLightShadows),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function x(S,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),S.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),S.push(o.mask)}function v(S){let T=d[S.type],I;if(T){let P=Hn[T];I=ts.clone(P.uniforms)}else I=S.uniforms;return I}function b(S,T){let I=u.get(T);return I!==void 0?++I.usedTimes:(I=new lS(n,T,S,s),l.push(I),u.set(T,I)),I}function _(S){if(--S.usedTimes===0){let T=l.indexOf(S);l[T]=l[l.length-1],l.pop(),u.delete(S.cacheKey),S.destroy()}}function M(S){a.remove(S)}function R(){a.dispose()}return{getParameters:y,getProgramCacheKey:p,getUniforms:v,acquireProgram:b,releaseProgram:_,releaseShaderCache:M,programs:l,dispose:R}}function dS(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function pS(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function vm(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function _m(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,m,y,p,g){let x=n[t];return x===void 0?(x={id:h.id,object:h,geometry:d,material:m,materialVariant:o(h),groupOrder:y,renderOrder:h.renderOrder,z:p,group:g},n[t]=x):(x.id=h.id,x.object=h,x.geometry=d,x.material=m,x.materialVariant=o(h),x.groupOrder=y,x.renderOrder=h.renderOrder,x.z=p,x.group=g),t++,x}function c(h,d,m,y,p,g,x){x.reversedDepth===!0&&(p=-p);let v=a(h,d,m,y,p,g);m.transmission>0?i.push(v):m.transparent===!0?s.push(v):e.push(v)}function l(h,d,m,y,p,g){let x=a(h,d,m,y,p,g);m.transmission>0?i.unshift(x):m.transparent===!0?s.unshift(x):e.unshift(x)}function u(h,d){e.length>1&&e.sort(h||pS),i.length>1&&i.sort(d||vm),s.length>1&&s.sort(d||vm)}function f(){for(let h=t,d=n.length;h<d;h++){let m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:f,sort:u}}function mS(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new _m,n.set(i,[o])):s>=r.length?(o=new _m,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function gS(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new W,color:new qt};break;case"SpotLight":e={position:new W,direction:new W,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new W,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new W,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new W,halfWidth:new W,halfHeight:new W};break}return n[t.id]=e,e}}}function yS(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var xS=0;function bS(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function vS(n){let t=new gS,e=yS(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new W);let s=new W,r=new Ee,o=new Ee;function a(l){let u=0,f=0,h=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let d=0,m=0,y=0,p=0,g=0,x=0,v=0,b=0,_=0,M=0,R=0,S=0,T=0,I=0;l.sort(bS);for(let k=0,z=l.length;k<z;k++){let O=l[k],U=O.color,V=O.intensity,j=O.distance,dt=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===Ns?dt=O.shadow.map.texture:dt=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)u+=U.r*V,f+=U.g*V,h+=U.b*V;else if(O.isLightProbe){for(let ot=0;ot<9;ot++)i.probe[ot].addScaledVector(O.sh.coefficients[ot],V);I++}else if(O.isSunLight){let ot=t.get(O);if(ot.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let G=O.shadow,q=e.get(O);q.shadowIntensity=G.intensity,q.shadowBias=G.bias,q.shadowNormalBias=G.normalBias,q.shadowRadius=G.radius,q.shadowMapSize.copy(G.mapSize).multiply(G.getFrameExtents()),i.sunShadow[m]=q,i.sunShadowMap[m]=dt;let xt=G.getViewportCount();for(let gt=0;gt<xt;gt++)i.sunShadowMatrix[y+gt]=G.getMatrix(gt),i.sunShadowCascade[y+gt]=G._cascadeData[gt];y+=xt,m++}i.sun[d]=ot,d++}else if(O.isDirectionalLight){let ot=t.get(O);if(ot.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let G=O.shadow,q=e.get(O);q.shadowIntensity=G.intensity,q.shadowBias=G.bias,q.shadowNormalBias=G.normalBias,q.shadowRadius=G.radius,q.shadowMapSize=G.mapSize,i.directionalShadow[p]=q,i.directionalShadowMap[p]=dt,i.directionalShadowMatrix[p]=O.shadow.matrix,_++}i.directional[p]=ot,p++}else if(O.isSpotLight){let ot=t.get(O);ot.position.setFromMatrixPosition(O.matrixWorld),ot.color.copy(U).multiplyScalar(V),ot.distance=j,ot.coneCos=Math.cos(O.angle),ot.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),ot.decay=O.decay,i.spot[x]=ot;let G=O.shadow;if(O.map&&(i.spotLightMap[S]=O.map,S++,G.updateMatrices(O),O.castShadow&&T++),i.spotLightMatrix[x]=G.matrix,O.castShadow){let q=e.get(O);q.shadowIntensity=G.intensity,q.shadowBias=G.bias,q.shadowNormalBias=G.normalBias,q.shadowRadius=G.radius,q.shadowMapSize=G.mapSize,i.spotShadow[x]=q,i.spotShadowMap[x]=dt,R++}x++}else if(O.isRectAreaLight){let ot=t.get(O);ot.color.copy(U).multiplyScalar(V),ot.halfWidth.set(O.width*.5,0,0),ot.halfHeight.set(0,O.height*.5,0),i.rectArea[v]=ot,v++}else if(O.isPointLight){let ot=t.get(O);if(ot.color.copy(O.color).multiplyScalar(O.intensity),ot.distance=O.distance,ot.decay=O.decay,O.castShadow){let G=O.shadow,q=e.get(O);q.shadowIntensity=G.intensity,q.shadowBias=G.bias,q.shadowNormalBias=G.normalBias,q.shadowRadius=G.radius,q.shadowMapSize=G.mapSize,q.shadowCameraNear=G.camera.near,q.shadowCameraFar=G.camera.far,i.pointShadow[g]=q,i.pointShadowMap[g]=dt,i.pointShadowMatrix[g]=O.shadow.matrix,M++}i.point[g]=ot,g++}else if(O.isHemisphereLight){let ot=t.get(O);ot.skyColor.copy(O.color).multiplyScalar(V),ot.groundColor.copy(O.groundColor).multiplyScalar(V),i.hemi[b]=ot,b++}}v>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Xt.LTC_FLOAT_1,i.rectAreaLTC2=Xt.LTC_FLOAT_2):(i.rectAreaLTC1=Xt.LTC_HALF_1,i.rectAreaLTC2=Xt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;let P=i.hash;(P.sunLength!==d||P.directionalLength!==p||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==v||P.hemiLength!==b||P.numSunShadows!==m||P.numDirectionalShadows!==_||P.numPointShadows!==M||P.numSpotShadows!==R||P.numSpotMaps!==S||P.numLightProbes!==I)&&(i.sun.length=d,i.directional.length=p,i.spot.length=x,i.rectArea.length=v,i.point.length=g,i.hemi.length=b,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.directionalShadowMatrix.length=_,i.pointShadow.length=M,i.pointShadowMap.length=M,i.pointShadowMatrix.length=M,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+S-T,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=I,P.sunLength=d,P.directionalLength=p,P.pointLength=g,P.spotLength=x,P.rectAreaLength=v,P.hemiLength=b,P.numSunShadows=m,P.numDirectionalShadows=_,P.numPointShadows=M,P.numSpotShadows=R,P.numSpotMaps=S,P.numLightProbes=I,i.version=xS++)}function c(l,u){let f=0,h=0,d=0,m=0,y=0,p=0,g=u.matrixWorldInverse;for(let x=0,v=l.length;x<v;x++){let b=l[x];if(b.isSunLight){let _=i.sun[f];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(g),f++}else if(b.isDirectionalLight){let _=i.directional[h];_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),h++}else if(b.isSpotLight){let _=i.spot[m];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),m++}else if(b.isRectAreaLight){let _=i.rectArea[y];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(g),o.identity(),r.copy(b.matrixWorld),r.premultiply(g),o.extractRotation(r),_.halfWidth.set(b.width*.5,0,0),_.halfHeight.set(0,b.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),y++}else if(b.isPointLight){let _=i.point[d];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(g),d++}else if(b.isHemisphereLight){let _=i.hemi[p];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(g),p++}}}return{setup:a,setupView:c,state:i}}function Mm(n){let t=new vS(n),e=[],i=[],s=[];function r(h){f.camera=h,e.length=0,i.length=0,s.length=0}function o(h){e.push(h)}function a(h){i.push(h)}function c(h){s.push(h)}function l(){t.setup(e)}function u(h){t.setupView(e,h)}let f={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function _S(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Mm(n),t.set(s,[a])):r>=o.length?(a=new Mm(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var MS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,SS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,wS=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],ES=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Sm=new Ee,wa=new W,ef=new W;function TS(n,t,e){let i=new Or,s=new kt,r=new kt,o=new Ne,a=new zc,c=new Hc,l={},u=e.maxTextureSize,f={[Cs]:Bn,[Bn]:Cs,[Qe]:Qe},h=new $e({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:MS,fragmentShader:SS}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let m=new ue;m.setAttribute("position",new Pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new ae(m,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ks;let g=this.type;this.render=function(M,R,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;this.type===mp&&(ce("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ks);let T=n.getRenderTarget(),I=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),k=n.state;k.setBlending(Fi),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let z=g!==this.type;z&&R.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(U=>U.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,U=M.length;O<U;O++){let V=M[O],j=V.shadow;if(j===void 0){ce("WebGLShadowMap:",V,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);let dt=j.getFrameExtents();s.multiply(dt),r.copy(j.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/dt.x),s.x=r.x*dt.x,j.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/dt.y),s.y=r.y*dt.y,j.mapSize.y=r.y));let ot=n.state.buffers.depth.getReversed();if(j.camera._reversedDepth=ot,j.map===null||z===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===qr){if(V.isPointLight){ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new Xn(s.x,s.y,{format:Ns,type:_i,minFilter:Sn,magFilter:Sn,generateMipmaps:!1}),j.map.texture.name=V.name+".shadowMap",j.map.depthTexture=new _s(s.x,s.y,ai),j.map.depthTexture.name=V.name+".shadowMapDepth",j.map.depthTexture.format=Pi,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=yn,j.map.depthTexture.magFilter=yn}else V.isPointLight?(j.map=new ql(s.x),j.map.depthTexture=new Nc(s.x,vi)):(j.map=new Xn(s.x,s.y),j.map.depthTexture=new _s(s.x,s.y,vi)),j.map.depthTexture.name=V.name+".shadowMap",j.map.depthTexture.format=Pi,this.type===Ks?(j.map.depthTexture.compareFunction=ot?Gl:Hl,j.map.depthTexture.minFilter=Sn,j.map.depthTexture.magFilter=Sn):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=yn,j.map.depthTexture.magFilter=yn);j.camera.updateProjectionMatrix()}j.map.isWebGLCubeRenderTarget!==!0&&(j.map.width!==s.x||j.map.height!==s.y)&&j.map.setSize(s.x,s.y);let G=j.map.isWebGLCubeRenderTarget?6:j.getViewportCount();V.isPointLight!==!0&&j.updateMatrices(V,S);for(let q=0;q<G;q++){let xt=j.getCamera(q);if(V.isPointLight){let gt=j.camera,pt=j.matrix,at=V.distance||gt.far;at!==gt.far&&(gt.far=at,gt.updateProjectionMatrix()),wa.setFromMatrixPosition(V.matrixWorld),gt.position.copy(wa),ef.copy(gt.position),ef.add(wS[q]),gt.up.copy(ES[q]),gt.lookAt(ef),gt.updateMatrixWorld(),pt.makeTranslation(-wa.x,-wa.y,-wa.z),Sm.multiplyMatrices(gt.projectionMatrix,gt.matrixWorldInverse),j._frustum.setFromProjectionMatrix(Sm,gt.coordinateSystem,gt.reversedDepth)}if(j.map.isWebGLCubeRenderTarget)n.setRenderTarget(j.map,q),n.clear();else{q===0&&(n.setRenderTarget(j.map),n.clear());let gt=j.getViewport(q);o.set(r.x*gt.x,r.y*gt.y,r.x*gt.z,r.y*gt.w),k.viewport(o)}i=j.getFrustum(q),b(R,S,xt,V,this.type)}j.isPointLightShadow!==!0&&this.type===qr&&x(j,S),j.needsUpdate=!1}g=this.type,p.needsUpdate=!1,n.setRenderTarget(T,I,P)};function x(M,R){let S=t.update(y);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null?M.mapPass=new Xn(s.x,s.y,{format:Ns,type:_i}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),h.uniforms.shadow_pass.value=M.map.depthTexture,h.uniforms.resolution.value.set(M.map.width,M.map.height),h.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(R,null,S,h,y,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value.set(M.map.width,M.map.height),d.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(R,null,S,d,y,null)}function v(M,R,S,T){let I=null,P=S.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)I=P;else if(I=S.isPointLight===!0?c:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let k=I.uuid,z=R.uuid,O=l[k];O===void 0&&(O={},l[k]=O);let U=O[z];U===void 0&&(U=I.clone(),O[z]=U,R.addEventListener("dispose",_)),I=U}if(I.visible=R.visible,I.wireframe=R.wireframe,T===qr?I.side=R.shadowSide!==null?R.shadowSide:R.side:I.side=R.shadowSide!==null?R.shadowSide:f[R.side],I.alphaMap=R.alphaMap,I.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,I.map=R.map,I.clipShadows=R.clipShadows,I.clippingPlanes=R.clippingPlanes,I.clipIntersection=R.clipIntersection,I.displacementMap=R.displacementMap,I.displacementScale=R.displacementScale,I.displacementBias=R.displacementBias,I.wireframeLinewidth=R.wireframeLinewidth,I.linewidth=R.linewidth,S.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let k=n.properties.get(I);k.light=S}return I}function b(M,R,S,T,I){if(M.visible===!1)return;if(M.layers.test(R.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&I===qr)&&(!M.frustumCulled||M.intersectsFrustum(i))){M.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,M.matrixWorld);let z=t.update(M),O=M.material;if(Array.isArray(O)){let U=z.groups;for(let V=0,j=U.length;V<j;V++){let dt=U[V],ot=O[dt.materialIndex];if(ot&&ot.visible){let G=v(M,ot,T,I);M.onBeforeShadow(n,M,R,S,z,G,dt),n.renderBufferDirect(S,null,z,G,M,dt),M.onAfterShadow(n,M,R,S,z,G,dt)}}}else if(O.visible){let U=v(M,O,T,I);M.onBeforeShadow(n,M,R,S,z,U,null),n.renderBufferDirect(S,null,z,U,M,null),M.onAfterShadow(n,M,R,S,z,U,null)}}let k=M.children;for(let z=0,O=k.length;z<O;z++)b(k[z],R,S,T,I)}function _(M){M.target.removeEventListener("dispose",_);for(let S in l){let T=l[S],I=M.target.uuid;I in T&&(T[I].dispose(),delete T[I])}}}function AS(n,t){function e(){let L=!1,tt=new Ne,nt=null,At=new Ne(0,0,0,0);return{setMask:function(Rt){nt!==Rt&&!L&&(n.colorMask(Rt,Rt,Rt,Rt),nt=Rt)},setLocked:function(Rt){L=Rt},setClear:function(Rt,Tt,Ot,zt,le){le===!0&&(Rt*=zt,Tt*=zt,Ot*=zt),tt.set(Rt,Tt,Ot,zt),At.equals(tt)===!1&&(n.clearColor(Rt,Tt,Ot,zt),At.copy(tt))},reset:function(){L=!1,nt=null,At.set(-1,0,0,0)}}}function i(){let L=!1,tt=!1,nt=null,At=null,Rt=null;return{setReversed:function(Tt){if(tt!==Tt){let Ot=t.get("EXT_clip_control");Tt?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT),tt=Tt;let zt=Rt;Rt=null,this.setClear(zt)}},getReversed:function(){return tt},setTest:function(Tt){Tt?rt(n.DEPTH_TEST):wt(n.DEPTH_TEST)},setMask:function(Tt){nt!==Tt&&!L&&(n.depthMask(Tt),nt=Tt)},setFunc:function(Tt){if(tt&&(Tt=Zp[Tt]),At!==Tt){switch(Tt){case bc:n.depthFunc(n.NEVER);break;case vc:n.depthFunc(n.ALWAYS);break;case _c:n.depthFunc(n.LESS);break;case Cr:n.depthFunc(n.LEQUAL);break;case Mc:n.depthFunc(n.EQUAL);break;case Sc:n.depthFunc(n.GEQUAL);break;case Ir:n.depthFunc(n.GREATER);break;case wc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}At=Tt}},setLocked:function(Tt){L=Tt},setClear:function(Tt){Rt!==Tt&&(Rt=Tt,tt&&(Tt=1-Tt),n.clearDepth(Tt))},reset:function(){L=!1,nt=null,At=null,Rt=null,tt=!1}}}function s(){let L=!1,tt=null,nt=null,At=null,Rt=null,Tt=null,Ot=null,zt=null,le=null;return{setTest:function(re){L||(re?rt(n.STENCIL_TEST):wt(n.STENCIL_TEST))},setMask:function(re){tt!==re&&!L&&(n.stencilMask(re),tt=re)},setFunc:function(re,Se,Ie){(nt!==re||At!==Se||Rt!==Ie)&&(n.stencilFunc(re,Se,Ie),nt=re,At=Se,Rt=Ie)},setOp:function(re,Se,Ie){(Tt!==re||Ot!==Se||zt!==Ie)&&(n.stencilOp(re,Se,Ie),Tt=re,Ot=Se,zt=Ie)},setLocked:function(re){L=re},setClear:function(re){le!==re&&(n.clearStencil(re),le=re)},reset:function(){L=!1,tt=null,nt=null,At=null,Rt=null,Tt=null,Ot=null,zt=null,le=null}}}let r=new e,o=new i,a=new s,c=new WeakMap,l=new WeakMap,u={},f={},h={},d=new WeakMap,m=[],y=null,p=!1,g=null,x=null,v=null,b=null,_=null,M=null,R=null,S=new qt(0,0,0),T=0,I=!1,P=null,k=null,z=null,O=null,U=null,V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,dt=0,ot=n.getParameter(n.VERSION);ot.indexOf("WebGL")!==-1?(dt=parseFloat(/^WebGL (\d)/.exec(ot)[1]),j=dt>=1):ot.indexOf("OpenGL ES")!==-1&&(dt=parseFloat(/^OpenGL ES (\d)/.exec(ot)[1]),j=dt>=2);let G=null,q={},xt=n.getParameter(n.SCISSOR_BOX),gt=n.getParameter(n.VIEWPORT),pt=new Ne().fromArray(xt),at=new Ne().fromArray(gt);function St(L,tt,nt,At){let Rt=new Uint8Array(4),Tt=n.createTexture();n.bindTexture(L,Tt),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ot=0;Ot<nt;Ot++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(tt,0,n.RGBA,1,1,At,0,n.RGBA,n.UNSIGNED_BYTE,Rt):n.texImage2D(tt+Ot,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Rt);return Tt}let Z={};Z[n.TEXTURE_2D]=St(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=St(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[n.TEXTURE_2D_ARRAY]=St(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=St(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),rt(n.DEPTH_TEST),o.setFunc(Cr),ht(!1),yt(Sh),rt(n.CULL_FACE),et(Fi);function rt(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function wt(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function Lt(L,tt){return h[L]!==tt?(n.bindFramebuffer(L,tt),h[L]=tt,L===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=tt),L===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=tt),!0):!1}function Nt(L,tt){let nt=m,At=!1;if(L){nt=d.get(tt),nt===void 0&&(nt=[],d.set(tt,nt));let Rt=L.textures;if(nt.length!==Rt.length||nt[0]!==n.COLOR_ATTACHMENT0){for(let Tt=0,Ot=Rt.length;Tt<Ot;Tt++)nt[Tt]=n.COLOR_ATTACHMENT0+Tt;nt.length=Rt.length,At=!0}}else nt[0]!==n.BACK&&(nt[0]=n.BACK,At=!0);At&&n.drawBuffers(nt)}function H(L){return y!==L?(n.useProgram(L),y=L,!0):!1}let bt={[Js]:n.FUNC_ADD,[yp]:n.FUNC_SUBTRACT,[xp]:n.FUNC_REVERSE_SUBTRACT};bt[bp]=n.MIN,bt[vp]=n.MAX;let K={[_p]:n.ZERO,[Mp]:n.ONE,[Sp]:n.SRC_COLOR,[Ah]:n.SRC_ALPHA,[Cp]:n.SRC_ALPHA_SATURATE,[Ap]:n.DST_COLOR,[Ep]:n.DST_ALPHA,[wp]:n.ONE_MINUS_SRC_COLOR,[Rh]:n.ONE_MINUS_SRC_ALPHA,[Rp]:n.ONE_MINUS_DST_COLOR,[Tp]:n.ONE_MINUS_DST_ALPHA,[Ip]:n.CONSTANT_COLOR,[Pp]:n.ONE_MINUS_CONSTANT_COLOR,[Lp]:n.CONSTANT_ALPHA,[Np]:n.ONE_MINUS_CONSTANT_ALPHA};function et(L,tt,nt,At,Rt,Tt,Ot,zt,le,re){if(L===Fi){p===!0&&(wt(n.BLEND),p=!1);return}if(p===!1&&(rt(n.BLEND),p=!0),L!==gp){if(L!==g||re!==I){if((x!==Js||_!==Js)&&(n.blendEquation(n.FUNC_ADD),x=Js,_=Js),re)switch(L){case Yr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ji:n.blendFunc(n.ONE,n.ONE);break;case Eh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Th:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:de("WebGLState: Invalid blending: ",L);break}else switch(L){case Yr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ji:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Eh:de("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Th:de("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:de("WebGLState: Invalid blending: ",L);break}v=null,b=null,M=null,R=null,S.set(0,0,0),T=0,g=L,I=re}return}Rt=Rt||tt,Tt=Tt||nt,Ot=Ot||At,(tt!==x||Rt!==_)&&(n.blendEquationSeparate(bt[tt],bt[Rt]),x=tt,_=Rt),(nt!==v||At!==b||Tt!==M||Ot!==R)&&(n.blendFuncSeparate(K[nt],K[At],K[Tt],K[Ot]),v=nt,b=At,M=Tt,R=Ot),(zt.equals(S)===!1||le!==T)&&(n.blendColor(zt.r,zt.g,zt.b,le),S.copy(zt),T=le),g=L,I=!1}function $(L,tt){L.side===Qe?wt(n.CULL_FACE):rt(n.CULL_FACE);let nt=L.side===Bn;tt&&(nt=!nt),ht(nt),L.blending===Yr&&L.transparent===!1?et(Fi):et(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let At=L.stencilWrite;a.setTest(At),At&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Pt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?rt(n.SAMPLE_ALPHA_TO_COVERAGE):wt(n.SAMPLE_ALPHA_TO_COVERAGE)}function ht(L){P!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),P=L)}function yt(L){L!==dp?(rt(n.CULL_FACE),L!==k&&(L===Sh?n.cullFace(n.BACK):L===pp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):wt(n.CULL_FACE),k=L}function It(L){L!==z&&(j&&n.lineWidth(L),z=L)}function Pt(L,tt,nt){L?(rt(n.POLYGON_OFFSET_FILL),(O!==tt||U!==nt)&&(O=tt,U=nt,o.getReversed()&&(tt=-tt),n.polygonOffset(tt,nt))):wt(n.POLYGON_OFFSET_FILL)}function Ft(L){L?rt(n.SCISSOR_TEST):wt(n.SCISSOR_TEST)}function Ut(L){L===void 0&&(L=n.TEXTURE0+V-1),G!==L&&(n.activeTexture(L),G=L)}function Y(L,tt,nt){nt===void 0&&(G===null?nt=n.TEXTURE0+V-1:nt=G);let At=q[nt];At===void 0&&(At={type:void 0,texture:void 0},q[nt]=At),(At.type!==L||At.texture!==tt)&&(G!==nt&&(n.activeTexture(nt),G=nt),n.bindTexture(L,tt||Z[L]),At.type=L,At.texture=tt)}function te(){let L=q[G];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Ht(){try{n.compressedTexImage2D(...arguments)}catch(L){de("WebGLState:",L)}}function B(){try{n.compressedTexImage3D(...arguments)}catch(L){de("WebGLState:",L)}}function A(){try{n.texSubImage2D(...arguments)}catch(L){de("WebGLState:",L)}}function it(){try{n.texSubImage3D(...arguments)}catch(L){de("WebGLState:",L)}}function mt(){try{n.compressedTexSubImage2D(...arguments)}catch(L){de("WebGLState:",L)}}function Mt(){try{n.compressedTexSubImage3D(...arguments)}catch(L){de("WebGLState:",L)}}function X(){try{n.texStorage2D(...arguments)}catch(L){de("WebGLState:",L)}}function w(){try{n.texStorage3D(...arguments)}catch(L){de("WebGLState:",L)}}function E(){try{n.texImage2D(...arguments)}catch(L){de("WebGLState:",L)}}function C(){try{n.texImage3D(...arguments)}catch(L){de("WebGLState:",L)}}function D(L){return f[L]!==void 0?f[L]:n.getParameter(L)}function F(L,tt){f[L]!==tt&&(n.pixelStorei(L,tt),f[L]=tt)}function Q(L){pt.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),pt.copy(L))}function J(L){at.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),at.copy(L))}function lt(L,tt){let nt=l.get(tt);nt===void 0&&(nt=new WeakMap,l.set(tt,nt));let At=nt.get(L);At===void 0&&(At=n.getUniformBlockIndex(tt,L.name),nt.set(L,At))}function ft(L,tt){let At=l.get(tt).get(L);c.get(tt)!==At&&(n.uniformBlockBinding(tt,At,L.__bindingPointIndex),c.set(tt,At))}function Ct(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},G=null,q={},h={},d=new WeakMap,m=[],y=null,p=!1,g=null,x=null,v=null,b=null,_=null,M=null,R=null,S=new qt(0,0,0),T=0,I=!1,P=null,k=null,z=null,O=null,U=null,pt.set(0,0,n.canvas.width,n.canvas.height),at.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:rt,disable:wt,bindFramebuffer:Lt,drawBuffers:Nt,useProgram:H,setBlending:et,setMaterial:$,setFlipSided:ht,setCullFace:yt,setLineWidth:It,setPolygonOffset:Pt,setScissorTest:Ft,activeTexture:Ut,bindTexture:Y,unbindTexture:te,compressedTexImage2D:Ht,compressedTexImage3D:B,texImage2D:E,texImage3D:C,pixelStorei:F,getParameter:D,updateUBOMapping:lt,uniformBlockBinding:ft,texStorage2D:X,texStorage3D:w,texSubImage2D:A,texSubImage3D:it,compressedTexSubImage2D:mt,compressedTexSubImage3D:Mt,scissor:Q,viewport:J,reset:Ct}}function RS(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new kt,u=new WeakMap,f=new Set,h,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(B,A){return m?new OffscreenCanvas(B,A):Fo("canvas")}function p(B,A,it){let mt=1,Mt=Ht(B);if((Mt.width>it||Mt.height>it)&&(mt=it/Math.max(Mt.width,Mt.height)),mt<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){let X=Math.floor(mt*Mt.width),w=Math.floor(mt*Mt.height);h===void 0&&(h=y(X,w));let E=A?y(X,w):h;return E.width=X,E.height=w,E.getContext("2d").drawImage(B,0,0,X,w),ce("WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+X+"x"+w+")."),E}else return"data"in B&&ce("WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),B;return B}function g(B){return B.generateMipmaps}function x(B){n.generateMipmap(B)}function v(B){return B.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?n.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(B,A,it,mt,Mt,X=!1){if(B!==null){if(n[B]!==void 0)return n[B];ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let w;mt&&(w=t.get("EXT_texture_norm16"),w||ce("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let E=A;if(A===n.RED&&(it===n.FLOAT&&(E=n.R32F),it===n.HALF_FLOAT&&(E=n.R16F),it===n.UNSIGNED_BYTE&&(E=n.R8),it===n.UNSIGNED_SHORT&&w&&(E=w.R16_EXT),it===n.SHORT&&w&&(E=w.R16_SNORM_EXT)),A===n.RED_INTEGER&&(it===n.UNSIGNED_BYTE&&(E=n.R8UI),it===n.UNSIGNED_SHORT&&(E=n.R16UI),it===n.UNSIGNED_INT&&(E=n.R32UI),it===n.BYTE&&(E=n.R8I),it===n.SHORT&&(E=n.R16I),it===n.INT&&(E=n.R32I)),A===n.RG&&(it===n.FLOAT&&(E=n.RG32F),it===n.HALF_FLOAT&&(E=n.RG16F),it===n.UNSIGNED_BYTE&&(E=n.RG8),it===n.UNSIGNED_SHORT&&w&&(E=w.RG16_EXT),it===n.SHORT&&w&&(E=w.RG16_SNORM_EXT)),A===n.RG_INTEGER&&(it===n.UNSIGNED_BYTE&&(E=n.RG8UI),it===n.UNSIGNED_SHORT&&(E=n.RG16UI),it===n.UNSIGNED_INT&&(E=n.RG32UI),it===n.BYTE&&(E=n.RG8I),it===n.SHORT&&(E=n.RG16I),it===n.INT&&(E=n.RG32I)),A===n.RGB_INTEGER&&(it===n.UNSIGNED_BYTE&&(E=n.RGB8UI),it===n.UNSIGNED_SHORT&&(E=n.RGB16UI),it===n.UNSIGNED_INT&&(E=n.RGB32UI),it===n.BYTE&&(E=n.RGB8I),it===n.SHORT&&(E=n.RGB16I),it===n.INT&&(E=n.RGB32I)),A===n.RGBA_INTEGER&&(it===n.UNSIGNED_BYTE&&(E=n.RGBA8UI),it===n.UNSIGNED_SHORT&&(E=n.RGBA16UI),it===n.UNSIGNED_INT&&(E=n.RGBA32UI),it===n.BYTE&&(E=n.RGBA8I),it===n.SHORT&&(E=n.RGBA16I),it===n.INT&&(E=n.RGBA32I)),A===n.RGB&&(it===n.UNSIGNED_SHORT&&w&&(E=w.RGB16_EXT),it===n.SHORT&&w&&(E=w.RGB16_SNORM_EXT),it===n.UNSIGNED_INT_5_9_9_9_REV&&(E=n.RGB9_E5),it===n.UNSIGNED_INT_10F_11F_11F_REV&&(E=n.R11F_G11F_B10F)),A===n.RGBA){let C=X?Do:_e.getTransfer(Mt);it===n.FLOAT&&(E=n.RGBA32F),it===n.HALF_FLOAT&&(E=n.RGBA16F),it===n.UNSIGNED_BYTE&&(E=C===Le?n.SRGB8_ALPHA8:n.RGBA8),it===n.UNSIGNED_SHORT&&w&&(E=w.RGBA16_EXT),it===n.SHORT&&w&&(E=w.RGBA16_SNORM_EXT),it===n.UNSIGNED_SHORT_4_4_4_4&&(E=n.RGBA4),it===n.UNSIGNED_SHORT_5_5_5_1&&(E=n.RGB5_A1)}return(E===n.R16F||E===n.R32F||E===n.RG16F||E===n.RG32F||E===n.RGBA16F||E===n.RGBA32F)&&t.get("EXT_color_buffer_float"),E}function _(B,A){let it;return B?A===null||A===vi||A===Zr?it=n.DEPTH24_STENCIL8:A===ai?it=n.DEPTH32F_STENCIL8:A===$r&&(it=n.DEPTH24_STENCIL8,ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===vi||A===Zr?it=n.DEPTH_COMPONENT24:A===ai?it=n.DEPTH_COMPONENT32F:A===$r&&(it=n.DEPTH_COMPONENT16),it}function M(B,A){return g(B)===!0||B.isFramebufferTexture&&B.minFilter!==yn&&B.minFilter!==Sn?Math.log2(Math.max(A.width,A.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?A.mipmaps.length:1}function R(B){let A=B.target;A.removeEventListener("dispose",R),T(A),A.isVideoTexture&&u.delete(A),A.isHTMLTexture&&f.delete(A)}function S(B){let A=B.target;A.removeEventListener("dispose",S),P(A)}function T(B){let A=i.get(B);if(A.__webglInit===void 0)return;let it=B.source,mt=d.get(it);if(mt){let Mt=mt[A.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&I(B),Object.keys(mt).length===0&&d.delete(it)}i.remove(B)}function I(B){let A=i.get(B);n.deleteTexture(A.__webglTexture);let it=B.source,mt=d.get(it);delete mt[A.__cacheKey],o.memory.textures--}function P(B){let A=i.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),i.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(A.__webglFramebuffer[mt]))for(let Mt=0;Mt<A.__webglFramebuffer[mt].length;Mt++)n.deleteFramebuffer(A.__webglFramebuffer[mt][Mt]);else n.deleteFramebuffer(A.__webglFramebuffer[mt]);A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer[mt])}else{if(Array.isArray(A.__webglFramebuffer))for(let mt=0;mt<A.__webglFramebuffer.length;mt++)n.deleteFramebuffer(A.__webglFramebuffer[mt]);else n.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&n.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let mt=0;mt<A.__webglColorRenderbuffer.length;mt++)A.__webglColorRenderbuffer[mt]&&n.deleteRenderbuffer(A.__webglColorRenderbuffer[mt]);A.__webglDepthRenderbuffer&&n.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let it=B.textures;for(let mt=0,Mt=it.length;mt<Mt;mt++){let X=i.get(it[mt]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(it[mt])}i.remove(B)}let k=0;function z(){k=0}function O(){return k}function U(B){k=B}function V(){let B=k;return B>=s.maxTextures&&ce("WebGLTextures: Trying to use "+(B+1)+" texture units while this GPU supports only "+s.maxTextures),k+=1,B}function j(B){let A=[];return A.push(B.wrapS),A.push(B.wrapT),A.push(B.wrapR||0),A.push(B.magFilter),A.push(B.minFilter),A.push(B.anisotropy),A.push(B.internalFormat),A.push(B.format),A.push(B.type),A.push(B.generateMipmaps),A.push(B.premultiplyAlpha),A.push(B.flipY),A.push(B.unpackAlignment),A.push(B.colorSpace),A.join()}function dt(B,A){let it=i.get(B);if(B.isVideoTexture&&Y(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&it.__version!==B.version){let mt=B.image;if(mt===null)ce("WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)ce("WebGLRenderer: Texture marked for update but image is incomplete");else{wt(it,B,A);return}}else B.isExternalTexture&&(it.__webglTexture=B.sourceTexture?B.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,it.__webglTexture,n.TEXTURE0+A)}function ot(B,A){let it=i.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&it.__version!==B.version){wt(it,B,A);return}else B.isExternalTexture&&(it.__webglTexture=B.sourceTexture?B.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,it.__webglTexture,n.TEXTURE0+A)}function G(B,A){let it=i.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&it.__version!==B.version){wt(it,B,A);return}e.bindTexture(n.TEXTURE_3D,it.__webglTexture,n.TEXTURE0+A)}function q(B,A){let it=i.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&it.__version!==B.version){Lt(it,B,A);return}e.bindTexture(n.TEXTURE_CUBE_MAP,it.__webglTexture,n.TEXTURE0+A)}let xt={[Ws]:n.REPEAT,[Ci]:n.CLAMP_TO_EDGE,[Ec]:n.MIRRORED_REPEAT},gt={[yn]:n.NEAREST,[Up]:n.NEAREST_MIPMAP_NEAREST,[ma]:n.NEAREST_MIPMAP_LINEAR,[Sn]:n.LINEAR,[il]:n.LINEAR_MIPMAP_NEAREST,[Ps]:n.LINEAR_MIPMAP_LINEAR},pt={[zp]:n.NEVER,[Xp]:n.ALWAYS,[Hp]:n.LESS,[Hl]:n.LEQUAL,[Gp]:n.EQUAL,[Gl]:n.GEQUAL,[Vp]:n.GREATER,[Wp]:n.NOTEQUAL};function at(B,A){if(A.type===ai&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Sn||A.magFilter===il||A.magFilter===ma||A.magFilter===Ps||A.minFilter===Sn||A.minFilter===il||A.minFilter===ma||A.minFilter===Ps)&&ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(B,n.TEXTURE_WRAP_S,xt[A.wrapS]),n.texParameteri(B,n.TEXTURE_WRAP_T,xt[A.wrapT]),(B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY)&&n.texParameteri(B,n.TEXTURE_WRAP_R,xt[A.wrapR]),n.texParameteri(B,n.TEXTURE_MAG_FILTER,gt[A.magFilter]),n.texParameteri(B,n.TEXTURE_MIN_FILTER,gt[A.minFilter]),A.compareFunction&&(n.texParameteri(B,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(B,n.TEXTURE_COMPARE_FUNC,pt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===yn||A.minFilter!==ma&&A.minFilter!==Ps||A.type===ai&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){let it=t.get("EXT_texture_filter_anisotropic");n.texParameterf(B,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function St(B,A){let it=!1;B.__webglInit===void 0&&(B.__webglInit=!0,A.addEventListener("dispose",R));let mt=A.source,Mt=d.get(mt);Mt===void 0&&(Mt={},d.set(mt,Mt));let X=j(A);if(X!==B.__cacheKey){Mt[X]===void 0&&(Mt[X]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,it=!0),Mt[X].usedTimes++;let w=Mt[B.__cacheKey];w!==void 0&&(Mt[B.__cacheKey].usedTimes--,w.usedTimes===0&&I(A)),B.__cacheKey=X,B.__webglTexture=Mt[X].texture}return it}function Z(B,A,it){return Math.floor(Math.floor(B/it)/A)}function rt(B,A,it,mt){let X=B.updateRanges;if(X.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,A.width,A.height,it,mt,A.data);else{X.sort((F,Q)=>F.start-Q.start);let w=0;for(let F=1;F<X.length;F++){let Q=X[w],J=X[F],lt=Q.start+Q.count,ft=Z(J.start,A.width,4),Ct=Z(Q.start,A.width,4);J.start<=lt+1&&ft===Ct&&Z(J.start+J.count-1,A.width,4)===ft?Q.count=Math.max(Q.count,J.start+J.count-Q.start):(++w,X[w]=J)}X.length=w+1;let E=e.getParameter(n.UNPACK_ROW_LENGTH),C=e.getParameter(n.UNPACK_SKIP_PIXELS),D=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,A.width);for(let F=0,Q=X.length;F<Q;F++){let J=X[F],lt=Math.floor(J.start/4),ft=Math.ceil(J.count/4),Ct=lt%A.width,L=Math.floor(lt/A.width),tt=ft,nt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Ct),e.pixelStorei(n.UNPACK_SKIP_ROWS,L),e.texSubImage2D(n.TEXTURE_2D,0,Ct,L,tt,nt,it,mt,A.data)}B.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,E),e.pixelStorei(n.UNPACK_SKIP_PIXELS,C),e.pixelStorei(n.UNPACK_SKIP_ROWS,D)}}function wt(B,A,it){let mt=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(mt=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(mt=n.TEXTURE_3D);let Mt=St(B,A),X=A.source;e.bindTexture(mt,B.__webglTexture,n.TEXTURE0+it);let w=i.get(X);if(X.version!==w.__version||Mt===!0){if(e.activeTexture(n.TEXTURE0+it),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){let nt=_e.getPrimaries(_e.workingColorSpace),At=A.colorSpace===Qi?null:_e.getPrimaries(A.colorSpace),Rt=A.colorSpace===Qi||nt===At?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt)}e.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment);let C=p(A.image,!1,s.maxTextureSize);C=te(A,C);let D=r.convert(A.format,A.colorSpace),F=r.convert(A.type),Q=b(A.internalFormat,D,F,A.normalized,A.colorSpace,A.isVideoTexture);at(mt,A);let J,lt=A.mipmaps,ft=A.isVideoTexture!==!0,Ct=w.__version===void 0||Mt===!0,L=X.dataReady,tt=M(A,C);if(A.isDepthTexture)Q=_(A.format===Ls,A.type),Ct&&(ft?e.texStorage2D(n.TEXTURE_2D,1,Q,C.width,C.height):e.texImage2D(n.TEXTURE_2D,0,Q,C.width,C.height,0,D,F,null));else if(A.isDataTexture)if(lt.length>0){ft&&Ct&&e.texStorage2D(n.TEXTURE_2D,tt,Q,lt[0].width,lt[0].height);for(let nt=0,At=lt.length;nt<At;nt++)J=lt[nt],ft?L&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,J.width,J.height,D,F,J.data):e.texImage2D(n.TEXTURE_2D,nt,Q,J.width,J.height,0,D,F,J.data);A.generateMipmaps=!1}else ft?(Ct&&e.texStorage2D(n.TEXTURE_2D,tt,Q,C.width,C.height),L&&rt(A,C,D,F)):e.texImage2D(n.TEXTURE_2D,0,Q,C.width,C.height,0,D,F,C.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ft&&Ct&&e.texStorage3D(n.TEXTURE_2D_ARRAY,tt,Q,lt[0].width,lt[0].height,C.depth);for(let nt=0,At=lt.length;nt<At;nt++)if(J=lt[nt],A.format!==ci)if(D!==null)if(ft){if(L)if(A.layerUpdates.size>0){let Rt=Zh(J.width,J.height,A.format,A.type);for(let Tt of A.layerUpdates){let Ot=J.data.subarray(Tt*Rt/J.data.BYTES_PER_ELEMENT,(Tt+1)*Rt/J.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,Tt,J.width,J.height,1,D,Ot)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,J.width,J.height,C.depth,D,J.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,nt,Q,J.width,J.height,C.depth,0,J.data,0,0);else ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ft?L&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,J.width,J.height,C.depth,D,F,J.data):e.texImage3D(n.TEXTURE_2D_ARRAY,nt,Q,J.width,J.height,C.depth,0,D,F,J.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{ft&&Ct&&e.texStorage2D(n.TEXTURE_2D,tt,Q,lt[0].width,lt[0].height);for(let nt=0,At=lt.length;nt<At;nt++)J=lt[nt],A.format!==ci?D!==null?ft?L&&e.compressedTexSubImage2D(n.TEXTURE_2D,nt,0,0,J.width,J.height,D,J.data):e.compressedTexImage2D(n.TEXTURE_2D,nt,Q,J.width,J.height,0,J.data):ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?L&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,J.width,J.height,D,F,J.data):e.texImage2D(n.TEXTURE_2D,nt,Q,J.width,J.height,0,D,F,J.data)}else if(A.isDataArrayTexture)if(ft){if(Ct&&e.texStorage3D(n.TEXTURE_2D_ARRAY,tt,Q,C.width,C.height,C.depth),L)if(A.layerUpdates.size>0){let nt=Zh(C.width,C.height,A.format,A.type);for(let At of A.layerUpdates){let Rt=C.data.subarray(At*nt/C.data.BYTES_PER_ELEMENT,(At+1)*nt/C.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,At,C.width,C.height,1,D,F,Rt)}A.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,C.width,C.height,C.depth,D,F,C.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Q,C.width,C.height,C.depth,0,D,F,C.data);else if(A.isData3DTexture)ft?(Ct&&e.texStorage3D(n.TEXTURE_3D,tt,Q,C.width,C.height,C.depth),L&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,C.width,C.height,C.depth,D,F,C.data)):e.texImage3D(n.TEXTURE_3D,0,Q,C.width,C.height,C.depth,0,D,F,C.data);else if(A.isFramebufferTexture){if(Ct)if(ft)e.texStorage2D(n.TEXTURE_2D,tt,Q,C.width,C.height);else{let nt=C.width,At=C.height;for(let Rt=0;Rt<tt;Rt++)e.texImage2D(n.TEXTURE_2D,Rt,Q,nt,At,0,D,F,null),nt>>=1,At>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in n){let nt=n.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),C.parentNode!==nt){nt.appendChild(C),f.add(A),nt.onpaint=At=>{let Rt=At.changedElements;for(let Tt of f)Rt.includes(Tt.image)&&(Tt.needsUpdate=!0)},nt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,C);else{let Rt=n.RGBA,Tt=n.RGBA,Ot=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Rt,Tt,Ot,C)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(lt.length>0){if(ft&&Ct){let nt=Ht(lt[0]);e.texStorage2D(n.TEXTURE_2D,tt,Q,nt.width,nt.height)}for(let nt=0,At=lt.length;nt<At;nt++)J=lt[nt],ft?L&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,D,F,J):e.texImage2D(n.TEXTURE_2D,nt,Q,D,F,J);A.generateMipmaps=!1}else if(ft){if(Ct){let nt=Ht(C);e.texStorage2D(n.TEXTURE_2D,tt,Q,nt.width,nt.height)}L&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,D,F,C)}else e.texImage2D(n.TEXTURE_2D,0,Q,D,F,C);g(A)&&x(mt),w.__version=X.version,A.onUpdate&&A.onUpdate(A)}B.__version=A.version}function Lt(B,A,it){if(A.image.length!==6)return;let mt=St(B,A),Mt=A.source;e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+it);let X=i.get(Mt);if(Mt.version!==X.__version||mt===!0){e.activeTexture(n.TEXTURE0+it);let w=_e.getPrimaries(_e.workingColorSpace),E=A.colorSpace===Qi?null:_e.getPrimaries(A.colorSpace),C=A.colorSpace===Qi||w===E?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,C);let D=A.isCompressedTexture||A.image[0].isCompressedTexture,F=A.image[0]&&A.image[0].isDataTexture,Q=[];for(let Tt=0;Tt<6;Tt++)!D&&!F?Q[Tt]=p(A.image[Tt],!0,s.maxCubemapSize):Q[Tt]=F?A.image[Tt].image:A.image[Tt],Q[Tt]=te(A,Q[Tt]);let J=Q[0],lt=r.convert(A.format,A.colorSpace),ft=r.convert(A.type),Ct=b(A.internalFormat,lt,ft,A.normalized,A.colorSpace),L=A.isVideoTexture!==!0,tt=X.__version===void 0||mt===!0,nt=Mt.dataReady,At=M(A,J);at(n.TEXTURE_CUBE_MAP,A);let Rt;if(D){L&&tt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,At,Ct,J.width,J.height);for(let Tt=0;Tt<6;Tt++){Rt=Q[Tt].mipmaps;for(let Ot=0;Ot<Rt.length;Ot++){let zt=Rt[Ot];A.format!==ci?lt!==null?L?nt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Ot,0,0,zt.width,zt.height,lt,zt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Ot,Ct,zt.width,zt.height,0,zt.data):ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Ot,0,0,zt.width,zt.height,lt,ft,zt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Ot,Ct,zt.width,zt.height,0,lt,ft,zt.data)}}}else{if(Rt=A.mipmaps,L&&tt){Rt.length>0&&At++;let Tt=Ht(Q[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,At,Ct,Tt.width,Tt.height)}for(let Tt=0;Tt<6;Tt++)if(F){L?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,Q[Tt].width,Q[Tt].height,lt,ft,Q[Tt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,Ct,Q[Tt].width,Q[Tt].height,0,lt,ft,Q[Tt].data);for(let Ot=0;Ot<Rt.length;Ot++){let le=Rt[Ot].image[Tt].image;L?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Ot+1,0,0,le.width,le.height,lt,ft,le.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Ot+1,Ct,le.width,le.height,0,lt,ft,le.data)}}else{L?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,lt,ft,Q[Tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,Ct,lt,ft,Q[Tt]);for(let Ot=0;Ot<Rt.length;Ot++){let zt=Rt[Ot];L?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Ot+1,0,0,lt,ft,zt.image[Tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Ot+1,Ct,lt,ft,zt.image[Tt])}}}g(A)&&x(n.TEXTURE_CUBE_MAP),X.__version=Mt.version,A.onUpdate&&A.onUpdate(A)}B.__version=A.version}function Nt(B,A,it,mt,Mt,X){let w=r.convert(it.format,it.colorSpace),E=r.convert(it.type),C=b(it.internalFormat,w,E,it.normalized,it.colorSpace),D=i.get(A),F=i.get(it);if(F.__renderTarget=A,!D.__hasExternalTextures){let Q=Math.max(1,A.width>>X),J=Math.max(1,A.height>>X);Mt===n.TEXTURE_3D||Mt===n.TEXTURE_2D_ARRAY?e.texImage3D(Mt,X,C,Q,J,A.depth,0,w,E,null):e.texImage2D(Mt,X,C,Q,J,0,w,E,null)}e.bindFramebuffer(n.FRAMEBUFFER,B),Ut(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,mt,Mt,F.__webglTexture,0,Ft(A)):(Mt===n.TEXTURE_2D||Mt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,mt,Mt,F.__webglTexture,X),e.bindFramebuffer(n.FRAMEBUFFER,null)}function H(B,A,it){if(n.bindRenderbuffer(n.RENDERBUFFER,B),A.depthBuffer){let mt=A.depthTexture,Mt=mt&&mt.isDepthTexture?mt.type:null,X=_(A.stencilBuffer,Mt),w=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ut(A)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ft(A),X,A.width,A.height):it?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ft(A),X,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,X,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,w,n.RENDERBUFFER,B)}else{let mt=A.textures;for(let Mt=0;Mt<mt.length;Mt++){let X=mt[Mt],w=r.convert(X.format,X.colorSpace),E=r.convert(X.type),C=b(X.internalFormat,w,E,X.normalized,X.colorSpace);Ut(A)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ft(A),C,A.width,A.height):it?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ft(A),C,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,C,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function bt(B,A,it){let mt=A.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,B),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Mt=i.get(A.depthTexture);if(Mt.__renderTarget=A,(!Mt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),mt){if(Mt.__webglInit===void 0&&(Mt.__webglInit=!0,A.depthTexture.addEventListener("dispose",R)),Mt.__webglTexture===void 0){Mt.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,Mt.__webglTexture),at(n.TEXTURE_CUBE_MAP,A.depthTexture);let D=r.convert(A.depthTexture.format),F=r.convert(A.depthTexture.type),Q;A.depthTexture.format===Pi?Q=n.DEPTH_COMPONENT24:A.depthTexture.format===Ls&&(Q=n.DEPTH24_STENCIL8);for(let J=0;J<6;J++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Q,A.width,A.height,0,D,F,null)}}else dt(A.depthTexture,0);let X=Mt.__webglTexture,w=Ft(A),E=mt?n.TEXTURE_CUBE_MAP_POSITIVE_X+it:n.TEXTURE_2D,C=A.depthTexture.format===Ls?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(A.depthTexture.format===Pi)Ut(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,C,E,X,0,w):n.framebufferTexture2D(n.FRAMEBUFFER,C,E,X,0);else if(A.depthTexture.format===Ls)Ut(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,C,E,X,0,w):n.framebufferTexture2D(n.FRAMEBUFFER,C,E,X,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function K(B){let A=i.get(B),it=B.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==B.depthTexture){let mt=B.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),mt){let Mt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,mt.removeEventListener("dispose",Mt)};mt.addEventListener("dispose",Mt),A.__depthDisposeCallback=Mt}A.__boundDepthTexture=mt}if(B.depthTexture&&!A.__autoAllocateDepthBuffer)if(it)for(let mt=0;mt<6;mt++)bt(A.__webglFramebuffer[mt],B,mt);else{let mt=B.texture.mipmaps;mt&&mt.length>0?bt(A.__webglFramebuffer[0],B,0):bt(A.__webglFramebuffer,B,0)}else if(it){A.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(e.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[mt]),A.__webglDepthbuffer[mt]===void 0)A.__webglDepthbuffer[mt]=n.createRenderbuffer(),H(A.__webglDepthbuffer[mt],B,!1);else{let Mt=B.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=A.__webglDepthbuffer[mt];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,Mt,n.RENDERBUFFER,X)}}else{let mt=B.texture.mipmaps;if(mt&&mt.length>0?e.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=n.createRenderbuffer(),H(A.__webglDepthbuffer,B,!1);else{let Mt=B.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=A.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,Mt,n.RENDERBUFFER,X)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function et(B,A,it){let mt=i.get(B);A!==void 0&&Nt(mt.__webglFramebuffer,B,B.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),it!==void 0&&K(B)}function $(B){let A=B.texture,it=i.get(B),mt=i.get(A);B.addEventListener("dispose",S);let Mt=B.textures,X=B.isWebGLCubeRenderTarget===!0,w=Mt.length>1;if(w||(mt.__webglTexture===void 0&&(mt.__webglTexture=n.createTexture()),mt.__version=A.version,o.memory.textures++),X){it.__webglFramebuffer=[];for(let E=0;E<6;E++)if(A.mipmaps&&A.mipmaps.length>0){it.__webglFramebuffer[E]=[];for(let C=0;C<A.mipmaps.length;C++)it.__webglFramebuffer[E][C]=n.createFramebuffer()}else it.__webglFramebuffer[E]=n.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){it.__webglFramebuffer=[];for(let E=0;E<A.mipmaps.length;E++)it.__webglFramebuffer[E]=n.createFramebuffer()}else it.__webglFramebuffer=n.createFramebuffer();if(w)for(let E=0,C=Mt.length;E<C;E++){let D=i.get(Mt[E]);D.__webglTexture===void 0&&(D.__webglTexture=n.createTexture(),o.memory.textures++)}if(B.samples>0&&Ut(B)===!1){it.__webglMultisampledFramebuffer=n.createFramebuffer(),it.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let E=0;E<Mt.length;E++){let C=Mt[E];it.__webglColorRenderbuffer[E]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,it.__webglColorRenderbuffer[E]);let D=r.convert(C.format,C.colorSpace),F=r.convert(C.type),Q=b(C.internalFormat,D,F,C.normalized,C.colorSpace,B.isXRRenderTarget===!0),J=Ft(B);n.renderbufferStorageMultisample(n.RENDERBUFFER,J,Q,B.width,B.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+E,n.RENDERBUFFER,it.__webglColorRenderbuffer[E])}n.bindRenderbuffer(n.RENDERBUFFER,null),B.depthBuffer&&(it.__webglDepthRenderbuffer=n.createRenderbuffer(),H(it.__webglDepthRenderbuffer,B,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){e.bindTexture(n.TEXTURE_CUBE_MAP,mt.__webglTexture),at(n.TEXTURE_CUBE_MAP,A);for(let E=0;E<6;E++)if(A.mipmaps&&A.mipmaps.length>0)for(let C=0;C<A.mipmaps.length;C++)Nt(it.__webglFramebuffer[E][C],B,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+E,C);else Nt(it.__webglFramebuffer[E],B,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+E,0);g(A)&&x(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(w){for(let E=0,C=Mt.length;E<C;E++){let D=Mt[E],F=i.get(D),Q=n.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Q=B.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Q,F.__webglTexture),at(Q,D),Nt(it.__webglFramebuffer,B,D,n.COLOR_ATTACHMENT0+E,Q,0),g(D)&&x(Q)}e.unbindTexture()}else{let E=n.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(E=B.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(E,mt.__webglTexture),at(E,A),A.mipmaps&&A.mipmaps.length>0)for(let C=0;C<A.mipmaps.length;C++)Nt(it.__webglFramebuffer[C],B,A,n.COLOR_ATTACHMENT0,E,C);else Nt(it.__webglFramebuffer,B,A,n.COLOR_ATTACHMENT0,E,0);g(A)&&x(E),e.unbindTexture()}B.depthBuffer&&K(B)}function ht(B){let A=B.textures;for(let it=0,mt=A.length;it<mt;it++){let Mt=A[it];if(g(Mt)){let X=v(B),w=i.get(Mt).__webglTexture;e.bindTexture(X,w),x(X),e.unbindTexture()}}}let yt=[],It=[];function Pt(B){if(B.samples>0){if(Ut(B)===!1){let A=B.textures,it=B.width,mt=B.height,Mt=n.COLOR_BUFFER_BIT,X=B.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,w=i.get(B),E=A.length>1;if(E)for(let D=0;D<A.length;D++)e.bindFramebuffer(n.FRAMEBUFFER,w.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+D,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+D,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,w.__webglMultisampledFramebuffer);let C=B.texture.mipmaps;C&&C.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,w.__webglFramebuffer);for(let D=0;D<A.length;D++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(Mt|=n.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(Mt|=n.STENCIL_BUFFER_BIT)),E){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,w.__webglColorRenderbuffer[D]);let F=i.get(A[D]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,F,0)}n.blitFramebuffer(0,0,it,mt,0,0,it,mt,Mt,n.NEAREST),c===!0&&(yt.length=0,It.length=0,yt.push(n.COLOR_ATTACHMENT0+D),B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&(yt.push(X),It.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,It)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,yt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),E)for(let D=0;D<A.length;D++){e.bindFramebuffer(n.FRAMEBUFFER,w.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+D,n.RENDERBUFFER,w.__webglColorRenderbuffer[D]);let F=i.get(A[D]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+D,n.TEXTURE_2D,F,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,w.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&c){let A=B.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[A])}}}function Ft(B){return Math.min(s.maxSamples,B.samples)}function Ut(B){let A=i.get(B);return B.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Y(B){let A=o.render.frame;u.get(B)!==A&&(u.set(B,A),B.update())}function te(B,A){let it=B.colorSpace,mt=B.format,Mt=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||it!==No&&it!==Qi&&(_e.getTransfer(it)===Le?(mt!==ci||Mt!==Yn)&&ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):de("WebGLTextures: Unsupported texture color space:",it)),A}function Ht(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(l.width=B.naturalWidth||B.width,l.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(l.width=B.displayWidth,l.height=B.displayHeight):(l.width=B.width,l.height=B.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=z,this.getTextureUnits=O,this.setTextureUnits=U,this.setTexture2D=dt,this.setTexture2DArray=ot,this.setTexture3D=G,this.setTextureCube=q,this.rebindTextures=et,this.setupRenderTarget=$,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=K,this.setupFrameBufferTexture=Nt,this.useMultisampledRTT=Ut,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function CS(n,t){function e(i,s=Qi){let r,o=_e.getTransfer(s);if(i===Yn)return n.UNSIGNED_BYTE;if(i===rl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ol)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Oh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Bh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Uh)return n.BYTE;if(i===kh)return n.SHORT;if(i===$r)return n.UNSIGNED_SHORT;if(i===sl)return n.INT;if(i===vi)return n.UNSIGNED_INT;if(i===ai)return n.FLOAT;if(i===_i)return n.HALF_FLOAT;if(i===zh)return n.ALPHA;if(i===Hh)return n.RGB;if(i===ci)return n.RGBA;if(i===Pi)return n.DEPTH_COMPONENT;if(i===Ls)return n.DEPTH_STENCIL;if(i===al)return n.RED;if(i===cl)return n.RED_INTEGER;if(i===Ns)return n.RG;if(i===ll)return n.RG_INTEGER;if(i===ul)return n.RGBA_INTEGER;if(i===ga||i===ya||i===xa||i===ba)if(o===Le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ga)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ga)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ya)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===xa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ba)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===hl||i===fl||i===dl||i===pl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===hl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===fl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===dl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===pl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ml||i===gl||i===yl||i===xl||i===bl||i===va||i===vl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ml||i===gl)return o===Le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===yl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===xl)return r.COMPRESSED_R11_EAC;if(i===bl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===va)return r.COMPRESSED_RG11_EAC;if(i===vl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===_l||i===Ml||i===Sl||i===wl||i===El||i===Tl||i===Al||i===Rl||i===Cl||i===Il||i===Pl||i===Ll||i===Nl||i===Dl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===_l)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ml)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===El)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Tl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Al)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Rl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Cl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Il)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Pl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ll)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Nl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Dl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Fl||i===Ul||i===kl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Fl)return o===Le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ul)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===kl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ol||i===Bl||i===_a||i===zl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ol)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Bl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===_a)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===zl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var IS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,uf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Xo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new $e({vertexShader:IS,fragmentShader:PS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ae(new Nn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},hf=class extends Li{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,h=null,d=null,m=null,y=typeof XRWebGLBinding<"u",p=new uf,g={},x=e.getContextAttributes(),v=null,b=null,_=[],M=[],R=new kt,S=null,T=null,I=new On;I.viewport=new Ne;let P=new On;P.viewport=new Ne;let k=[I,P],z=new Qc,O=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let rt=_[Z];return rt===void 0&&(rt=new Ur,_[Z]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(Z){let rt=_[Z];return rt===void 0&&(rt=new Ur,_[Z]=rt),rt.getGripSpace()},this.getHand=function(Z){let rt=_[Z];return rt===void 0&&(rt=new Ur,_[Z]=rt),rt.getHandSpace()};function V(Z){let rt=M.indexOf(Z.inputSource);if(rt===-1)return;let wt=_[rt];wt!==void 0&&(wt.update(Z.inputSource,Z.frame,l||o),wt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function j(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",dt);for(let Z=0;Z<_.length;Z++){let rt=M[Z];rt!==null&&(M[Z]=null,_[Z].disconnect(rt))}O=null,U=null,p.reset();for(let Z in g)delete g[Z];if(t.setRenderTarget(v),d=null,h=null,f=null,s=null,b=null,St.stop(),i.isPresenting=!1,t.setPixelRatio(S),t.setSize(R.width,R.height,!1),T!==null){let Z=T.camera;Z.fov=T.fov,Z.zoom=T.zoom,Z.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(v=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",j),s.addEventListener("inputsourceschange",dt),x.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Lt=null,Nt=null;x.depth&&(Nt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,wt=x.stencil?Ls:Pi,Lt=x.stencil?Zr:vi);let H={colorFormat:e.RGBA8,depthFormat:Nt,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(H),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),b=new Xn(h.textureWidth,h.textureHeight,{format:ci,type:Yn,depthTexture:new _s(h.textureWidth,h.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let wt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,wt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new Xn(d.framebufferWidth,d.framebufferHeight,{format:ci,type:Yn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),St.setContext(s),St.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function dt(Z){for(let rt=0;rt<Z.removed.length;rt++){let wt=Z.removed[rt],Lt=M.indexOf(wt);Lt>=0&&(M[Lt]=null,_[Lt].disconnect(wt))}for(let rt=0;rt<Z.added.length;rt++){let wt=Z.added[rt],Lt=M.indexOf(wt);if(Lt===-1){for(let H=0;H<_.length;H++)if(H>=M.length){M.push(wt),Lt=H;break}else if(M[H]===null){M[H]=wt,Lt=H;break}if(Lt===-1)break}let Nt=_[Lt];Nt&&Nt.connect(wt)}}let ot=new W,G=new W;function q(Z,rt,wt){ot.setFromMatrixPosition(rt.matrixWorld),G.setFromMatrixPosition(wt.matrixWorld);let Lt=ot.distanceTo(G),Nt=rt.projectionMatrix.elements,H=wt.projectionMatrix.elements,bt=Nt[14]/(Nt[10]-1),K=Nt[14]/(Nt[10]+1),et=(Nt[9]+1)/Nt[5],$=(Nt[9]-1)/Nt[5],ht=(Nt[8]-1)/Nt[0],yt=(H[8]+1)/H[0],It=bt*ht,Pt=bt*yt,Ft=Lt/(-ht+yt),Ut=Ft*-ht;if(rt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ut),Z.translateZ(Ft),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Nt[10]===-1)Z.projectionMatrix.copy(rt.projectionMatrix),Z.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{let Y=bt+Ft,te=K+Ft,Ht=It-Ut,B=Pt+(Lt-Ut),A=et*K/te*Y,it=$*K/te*Y;Z.projectionMatrix.makePerspective(Ht,B,A,it,Y,te),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function xt(Z,rt){rt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(rt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let rt=Z.near,wt=Z.far;p.texture!==null&&(p.depthNear>0&&(rt=p.depthNear),p.depthFar>0&&(wt=p.depthFar)),z.near=P.near=I.near=rt,z.far=P.far=I.far=wt,(O!==z.near||U!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),O=z.near,U=z.far),z.layers.mask=Z.layers.mask|6,I.layers.mask=z.layers.mask&-5,P.layers.mask=z.layers.mask&-3;let Lt=Z.parent,Nt=z.cameras;xt(z,Lt);for(let H=0;H<Nt.length;H++)xt(Nt[H],Lt);Nt.length===2?q(z,I,P):z.projectionMatrix.copy(I.projectionMatrix),T===null&&Z.isPerspectiveCamera&&(T={camera:Z,fov:Z.fov,zoom:Z.zoom}),gt(Z,z,Lt)};function gt(Z,rt,wt){wt===null?Z.matrix.copy(rt.matrixWorld):(Z.matrix.copy(wt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(rt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(rt.projectionMatrix),Z.projectionMatrixInverse.copy(rt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Nr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(Z){c=Z,h!==null&&(h.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(z)},this.getCameraTexture=function(Z){return g[Z]};let pt=null;function at(Z,rt){if(u=rt.getViewerPose(l||o),m=rt,u!==null){let wt=u.views;d!==null&&(t.setRenderTargetFramebuffer(b,d.framebuffer),t.setRenderTarget(b));let Lt=!1;wt.length!==z.cameras.length&&(z.cameras.length=0,Lt=!0);for(let K=0;K<wt.length;K++){let et=wt[K],$=null;if(d!==null)$=d.getViewport(et);else{let yt=f.getViewSubImage(h,et);$=yt.viewport,K===0&&(t.setRenderTargetTextures(b,yt.colorTexture,yt.depthStencilTexture),t.setRenderTarget(b))}let ht=k[K];ht===void 0&&(ht=new On,ht.layers.enable(K),ht.viewport=new Ne,k[K]=ht),ht.matrix.fromArray(et.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(et.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set($.x,$.y,$.width,$.height),K===0&&(z.matrix.copy(ht.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Lt===!0&&z.cameras.push(ht)}let Nt=s.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=i.getBinding();let K=f.getDepthInformation(wt[0]);K&&K.isValid&&K.texture&&p.init(K,s.renderState)}if(Nt&&Nt.includes("camera-access")&&y){t.state.unbindTexture(),f=i.getBinding();for(let K=0;K<wt.length;K++){let et=wt[K].camera;if(et){let $=g[et];$||($=new Xo,g[et]=$);let ht=f.getCameraImage(et);$.sourceTexture=ht}}}}for(let wt=0;wt<_.length;wt++){let Lt=M[wt],Nt=_[wt];Lt!==null&&Nt!==void 0&&Nt.update(Lt,rt,l||o)}pt&&pt(Z,rt),rt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:rt}),m=null}let St=new wm;St.setAnimationLoop(at),this.setAnimationLoop=function(Z){pt=Z},this.dispose=function(){}}},LS=new Ee,Im=new me;Im.set(-1,0,0,0,1,0,0,0,1);function NS(n,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function i(p,g){g.color.getRGB(p.fogColor.value,qh(n)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,x,v,b){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),f(p,g)):g.isMeshPhongMaterial?(r(p,g),u(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),h(p,g),g.isMeshPhysicalMaterial&&d(p,g,b)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),y(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?c(p,g,x,v):g.isSpriteMaterial?l(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Bn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Bn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let x=t.get(g),v=x.envMap,b=x.envMapRotation;v&&(p.envMap.value=v,p.envMapRotation.value.setFromMatrix4(LS.makeRotationFromEuler(b)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Im),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function c(p,g,x,v){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*x,p.scale.value=v*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function l(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function u(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function f(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function h(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,x){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Bn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function y(p,g){let x=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function DS(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,_){let M=_.program;i.uniformBlockBinding(b,M)}function l(b,_){let M=s[b.id];M===void 0&&(p(b),M=u(b),s[b.id]=M,b.addEventListener("dispose",x));let R=_.program;i.updateUBOMapping(b,R);let S=t.render.frame;r[b.id]!==S&&(h(b),r[b.id]=S)}function u(b){let _=f();b.__bindingPointIndex=_;let M=n.createBuffer(),R=b.__size,S=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,R,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,M),M}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return de("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){let _=s[b.id],M=b.uniforms,R=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let S=0,T=M.length;S<T;S++){let I=M[S];if(Array.isArray(I))for(let P=0,k=I.length;P<k;P++)d(I[P],S,P,R);else d(I,S,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(b,_,M,R){if(y(b,_,M,R)===!0){let S=b.__offset,T=b.value;if(Array.isArray(T)){let I=0;for(let P=0;P<T.length;P++){let k=T[P],z=g(k);m(k,b.__data,I),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(I+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(T,b.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,S,b.__data)}}function m(b,_,M){typeof b=="number"||typeof b=="boolean"?_[0]=b:b.isMatrix3?(_[0]=b.elements[0],_[1]=b.elements[1],_[2]=b.elements[2],_[3]=0,_[4]=b.elements[3],_[5]=b.elements[4],_[6]=b.elements[5],_[7]=0,_[8]=b.elements[6],_[9]=b.elements[7],_[10]=b.elements[8],_[11]=0):ArrayBuffer.isView(b)?_.set(new b.constructor(b.buffer,b.byteOffset,_.length)):b.toArray(_,M)}function y(b,_,M,R){let S=b.value,T=_+"_"+M;if(R[T]===void 0)return typeof S=="number"||typeof S=="boolean"?R[T]=S:ArrayBuffer.isView(S)?R[T]=S.slice():R[T]=S.clone(),!0;{let I=R[T];if(typeof S=="number"||typeof S=="boolean"){if(I!==S)return R[T]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(I.equals(S)===!1)return I.copy(S),!0}}return!1}function p(b){let _=b.uniforms,M=0,R=16;for(let T=0,I=_.length;T<I;T++){let P=Array.isArray(_[T])?_[T]:[_[T]];for(let k=0,z=P.length;k<z;k++){let O=P[k],U=Array.isArray(O.value)?O.value:[O.value];for(let V=0,j=U.length;V<j;V++){let dt=U[V],ot=g(dt),G=M%R,q=G%ot.boundary,xt=G+q;M+=q,xt!==0&&R-xt<ot.storage&&(M+=R-xt),O.__data=new Float32Array(ot.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=ot.storage}}}let S=M%R;return S>0&&(M+=R-S),b.__size=M,b.__cache={},this}function g(b){let _={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(_.boundary=16,_.storage=b.byteLength):ce("WebGLRenderer: Unsupported uniform value type.",b),_}function x(b){let _=b.target;_.removeEventListener("dispose",x);let M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function v(){for(let b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:c,update:l,dispose:v}}var FS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ui=null;function US(){return Ui===null&&(Ui=new Go(FS,16,16,Ns,_i),Ui.name="DFG_LUT",Ui.minFilter=Sn,Ui.magFilter=Sn,Ui.wrapS=Ci,Ui.wrapT=Ci,Ui.generateMipmaps=!1,Ui.needsUpdate=!0),Ui}var Yl=class{constructor(t={}){let{canvas:e=qp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=Yn}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;let y=d,p=new Set([ul,ll,cl]),g=new Set([Yn,vi,$r,Zr,rl,ol]),x=new Uint32Array(4),v=new Int32Array(4),b=new W,_=null,M=null,R=[],S=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,P=!1,k=null,z=null,O=null,U=null;this._outputColorSpace=Ke;let V=0,j=0,dt=null,ot=-1,G=null,q=new Ne,xt=new Ne,gt=null,pt=new qt(0),at=0,St=e.width,Z=e.height,rt=1,wt=null,Lt=null,Nt=new Ne(0,0,St,Z),H=new Ne(0,0,St,Z),bt=!1,K=new Or,et=!1,$=!1,ht=new Ee,yt=new W,It=new Ne,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ft=!1;function Ut(){return dt===null?rt:1}let Y=i;function te(N,st){return e.getContext(N,st)}let Ht,B,A,it,mt,Mt,X,w,E,C,D,F,Q,J,lt,ft,Ct,L,tt,nt,At,Rt,Tt;try{let N={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",le,!1),e.addEventListener("webglcontextrestored",re,!1),e.addEventListener("webglcontextcreationerror",Se,!1),Y===null){let st="webgl2";if(Y=te(st,N),Y===null)throw te(st)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ot()}catch(N){throw e.removeEventListener("webglcontextlost",le,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",Se,!1),de("WebGLRenderer: "+N.message),N}function Ot(){Ht=new V_(Y),Ht.init(),At=new CS(Y,Ht),B=new N_(Y,Ht,t,At),A=new AS(Y,Ht),B.reversedDepthBuffer&&h&&A.buffers.depth.setReversed(!0),z=Y.createFramebuffer(),O=Y.createFramebuffer(),U=Y.createFramebuffer(),it=new q_(Y),mt=new dS,Mt=new RS(Y,Ht,A,mt,B,At,it),X=new G_(I),w=new $b(Y),Rt=new P_(Y,w),E=new W_(Y,w,it,Rt),C=new $_(Y,E,w,Rt,it),L=new Y_(Y,B,Mt),lt=new D_(mt),D=new fS(I,X,Ht,B,Rt,lt),F=new NS(I,mt),Q=new mS,J=new _S(Ht),Ct=new I_(I,X,A,C,m,c),ft=new TS(I,C,B),Tt=new DS(Y,it,B,A),tt=new L_(Y,Ht,it),nt=new X_(Y,Ht,it),it.programs=D.programs,I.capabilities=B,I.extensions=Ht,I.properties=mt,I.renderLists=Q,I.shadowMap=ft,I.state=A,I.info=it}y!==Yn&&(T=new j_(y,e.width,e.height,a,s,r));let zt=new hf(I,Y);this.xr=zt,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){let N=Ht.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){let N=Ht.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return rt},this.setPixelRatio=function(N){N!==void 0&&(rt=N,this.setSize(St,Z,!1))},this.getSize=function(N){return N.set(St,Z)},this.setSize=function(N,st,_t=!0){if(zt.isPresenting){ce("WebGLRenderer: Can't change size while VR device is presenting.");return}St=N,Z=st,e.width=Math.floor(N*rt),e.height=Math.floor(st*rt),_t===!0&&(e.style.width=N+"px",e.style.height=st+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,N,st)},this.getDrawingBufferSize=function(N){return N.set(St*rt,Z*rt).floor()},this.setDrawingBufferSize=function(N,st,_t){St=N,Z=st,rt=_t,e.width=Math.floor(N*_t),e.height=Math.floor(st*_t),this.setViewport(0,0,N,st)},this.setEffects=function(N){if(y===Yn){de("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let st=0;st<N.length;st++)if(N[st].isOutputPass===!0){ce("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(q)},this.getViewport=function(N){return N.copy(Nt)},this.setViewport=function(N,st,_t,ut){N.isVector4?Nt.set(N.x,N.y,N.z,N.w):Nt.set(N,st,_t,ut),A.viewport(q.copy(Nt).multiplyScalar(rt).round())},this.getScissor=function(N){return N.copy(H)},this.setScissor=function(N,st,_t,ut){N.isVector4?H.set(N.x,N.y,N.z,N.w):H.set(N,st,_t,ut),A.scissor(xt.copy(H).multiplyScalar(rt).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(N){A.setScissorTest(bt=N)},this.setOpaqueSort=function(N){wt=N},this.setTransparentSort=function(N){Lt=N},this.getClearColor=function(N){return N.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor(...arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha(...arguments)},this.clear=function(N=!0,st=!0,_t=!0){let ut=0;if(N){let vt=!1;if(dt!==null){let Wt=dt.texture.format;vt=p.has(Wt)}if(vt){let Wt=dt.texture.type,Yt=g.has(Wt),Vt=Ct.getClearColor(),Zt=Ct.getClearAlpha(),Jt=Vt.r,ye=Vt.g,be=Vt.b;Yt?(x[0]=Jt,x[1]=ye,x[2]=be,x[3]=Zt,Y.clearBufferuiv(Y.COLOR,0,x)):(v[0]=Jt,v[1]=ye,v[2]=be,v[3]=Zt,Y.clearBufferiv(Y.COLOR,0,v))}else ut|=Y.COLOR_BUFFER_BIT}st&&(ut|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),_t&&(ut|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ut!==0&&Y.clear(ut)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(N){N.setRenderer(this),k=N},this.dispose=function(){e.removeEventListener("webglcontextlost",le,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",Se,!1),Ct.dispose(),Q.dispose(),J.dispose(),mt.dispose(),X.dispose(),C.dispose(),Rt.dispose(),Tt.dispose(),D.dispose(),zt.dispose(),zt.removeEventListener("sessionstart",cn),zt.removeEventListener("sessionend",_n),Bt.stop()};function le(N){N.preventDefault(),Uo("WebGLRenderer: Context Lost."),P=!0}function re(){Uo("WebGLRenderer: Context Restored."),P=!1;let N=it.autoReset,st=ft.enabled,_t=ft.autoUpdate,ut=ft.needsUpdate,vt=ft.type;Ot(),it.autoReset=N,ft.enabled=st,ft.autoUpdate=_t,ft.needsUpdate=ut,ft.type=vt}function Se(N){de("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Ie(N){let st=N.target;st.removeEventListener("dispose",Ie),an(st)}function an(N){Ze(N),mt.remove(N)}function Ze(N){let st=mt.get(N).programs;st!==void 0&&(st.forEach(function(_t){D.releaseProgram(_t)}),N.isShaderMaterial&&D.releaseShaderCache(N))}this.renderBufferDirect=function(N,st,_t,ut,vt,Wt){st===null&&(st=Pt);let Yt=vt.isMesh&&vt.matrixWorld.determinantAffine()<0,Vt=Mn(N,st,_t,ut,vt);A.setMaterial(ut,Yt);let Zt=_t.index,Jt=1;if(ut.wireframe===!0){if(Zt=E.getWireframeAttribute(_t),Zt===void 0)return;Jt=2}let ye=_t.drawRange,be=_t.attributes.position,Kt=ye.start*Jt,Me=(ye.start+ye.count)*Jt;Wt!==null&&(Kt=Math.max(Kt,Wt.start*Jt),Me=Math.min(Me,(Wt.start+Wt.count)*Jt)),Zt!==null?(Kt=Math.max(Kt,0),Me=Math.min(Me,Zt.count)):be!=null&&(Kt=Math.max(Kt,0),Me=Math.min(Me,be.count));let je=Me-Kt;if(je<0||je===1/0)return;Rt.setup(vt,ut,Vt,_t,Zt);let De,Oe=tt;if(Zt!==null&&(De=w.get(Zt),Oe=nt,Oe.setIndex(De)),vt.isMesh)ut.wireframe===!0?(A.setLineWidth(ut.wireframeLinewidth*Ut()),Oe.setMode(Y.LINES)):Oe.setMode(Y.TRIANGLES);else if(vt.isLine){let Cn=ut.linewidth;Cn===void 0&&(Cn=1),A.setLineWidth(Cn*Ut()),vt.isLineSegments?Oe.setMode(Y.LINES):vt.isLineLoop?Oe.setMode(Y.LINE_LOOP):Oe.setMode(Y.LINE_STRIP)}else vt.isPoints?Oe.setMode(Y.POINTS):vt.isSprite&&Oe.setMode(Y.TRIANGLES);if(vt.isBatchedMesh)if(Ht.get("WEBGL_multi_draw"))Oe.renderMultiDraw(vt._multiDrawStarts,vt._multiDrawCounts,vt._multiDrawCount);else{let Cn=vt._multiDrawStarts,jt=vt._multiDrawCounts,Un=vt._multiDrawCount,Re=Zt?w.get(Zt).bytesPerElement:1,ii=mt.get(ut).currentProgram.getUniforms();for(let Ai=0;Ai<Un;Ai++)ii.setValue(Y,"_gl_DrawID",Ai),Oe.render(Cn[Ai]/Re,jt[Ai])}else if(vt.isInstancedMesh)Oe.renderInstances(Kt,je,vt.count);else if(_t.isInstancedBufferGeometry){let Cn=_t._maxInstanceCount!==void 0?_t._maxInstanceCount:1/0,jt=Math.min(_t.instanceCount,Cn);Oe.renderInstances(Kt,je,jt)}else Oe.render(Kt,je)};function pn(N,st,_t,ut){k!==null&&N.isNodeMaterial&&k.setObject(ut,N),et===!0&&lt.setState(N,_t,!1),N.transparent===!0&&N.side===Qe&&N.forceSinglePass===!1?(N.side=Bn,N.needsUpdate=!0,he(N,st,ut),N.side=Cs,N.needsUpdate=!0,he(N,st,ut),N.side=Qe):he(N,st,ut)}this.compile=function(N,st,_t=null){_t===null&&(_t=N),k!==null&&k.renderStart(N,st,_t),M=J.get(_t),M.init(st),S.push(M),_t.traverseVisible(function(vt){vt.isLight&&vt.layers.test(st.layers)&&(M.pushLight(vt),vt.castShadow&&M.pushShadow(vt))}),N!==_t&&N.traverseVisible(function(vt){vt.isLight&&vt.layers.test(st.layers)&&(M.pushLight(vt),vt.castShadow&&M.pushShadow(vt))}),M.setupLights(),k!==null&&k.updateLights(M.state.lightsArray),$=this.localClippingEnabled,et=lt.init(this.clippingPlanes,$),et===!0&&lt.setGlobalState(this.clippingPlanes,st),k!==null&&ft.render(M.state.shadowsArray,_t,st);let ut=new Set;return N.traverse(function(vt){if(!(vt.isMesh||vt.isPoints||vt.isLine||vt.isSprite))return;let Wt=vt.material;if(Wt)if(Array.isArray(Wt))for(let Yt=0;Yt<Wt.length;Yt++){let Vt=Wt[Yt];pn(Vt,_t,st,vt),ut.add(Vt)}else pn(Wt,_t,st,vt),ut.add(Wt)}),M=S.pop(),k!==null&&k.renderEnd(),ut},this.compileAsync=function(N,st,_t=null){let ut=this.compile(N,st,_t);return new Promise(vt=>{function Wt(){if(ut.forEach(function(Yt){let Zt=mt.get(Yt).currentProgram;(Zt===void 0||Zt.isReady())&&ut.delete(Yt)}),ut.size===0){vt(N);return}setTimeout(Wt,10)}Ht.get("KHR_parallel_shader_compile")!==null?Wt():setTimeout(Wt,10)})};let rn=null;function mn(N){rn&&rn(N)}function cn(){Bt.stop()}function _n(){Bt.start()}let Bt=new wm;Bt.setAnimationLoop(mn),typeof self<"u"&&Bt.setContext(self),this.setAnimationLoop=function(N){rn=N,zt.setAnimationLoop(N),N===null?Bt.stop():Bt.start()},zt.addEventListener("sessionstart",cn),zt.addEventListener("sessionend",_n),this.render=function(N,st){if(st!==void 0&&st.isCamera!==!0){de("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;k!==null&&k.renderStart(N,st);let _t=zt.enabled===!0&&zt.isPresenting===!0,ut=T!==null&&(dt===null||_t)&&T.begin(I,dt);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),st.parent===null&&st.matrixWorldAutoUpdate===!0&&st.updateMatrixWorld(),zt.enabled===!0&&zt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(zt.cameraAutoUpdate===!0&&zt.updateCamera(st),st=zt.getCamera()),N.isScene===!0&&N.onBeforeRender(I,N,st,dt),M=J.get(N,S.length),M.init(st),M.state.textureUnits=Mt.getTextureUnits(),S.push(M),ht.multiplyMatrices(st.projectionMatrix,st.matrixWorldInverse),K.setFromProjectionMatrix(ht,gi,st.reversedDepth),$=this.localClippingEnabled,et=lt.init(this.clippingPlanes,$),_=Q.get(N,R.length),_.init(),R.push(_),zt.enabled===!0&&zt.isPresenting===!0){let Yt=I.xr.getDepthSensingMesh();Yt!==null&&oe(Yt,st,-1/0,I.sortObjects)}oe(N,st,0,I.sortObjects),_.finish(),k!==null&&k.updateLights(M.state.lightsArray),I.sortObjects===!0&&_.sort(wt,Lt),Ft=zt.enabled===!1||zt.isPresenting===!1||zt.hasDepthSensing()===!1,Ft&&Ct.addToRenderList(_,N),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),et===!0&&lt.beginShadows();let vt=M.state.shadowsArray;if(ft.render(vt,N,st),et===!0&&lt.endShadows(),(ut&&T.hasRenderPass())===!1){let Yt=_.opaque,Vt=_.transmissive;if(M.setupLights(),st.isArrayCamera){let Zt=st.cameras;if(Vt.length>0)for(let Jt=0,ye=Zt.length;Jt<ye;Jt++){let be=Zt[Jt];Dt(Yt,Vt,N,be)}Ft&&Ct.render(N);for(let Jt=0,ye=Zt.length;Jt<ye;Jt++){let be=Zt[Jt];Et(_,N,be,be.viewport)}}else Vt.length>0&&Dt(Yt,Vt,N,st),Ft&&Ct.render(N),Et(_,N,st)}dt!==null&&j===0&&(Mt.updateMultisampleRenderTarget(dt),Mt.updateRenderTargetMipmap(dt)),ut&&T.end(I),N.isScene===!0&&N.onAfterRender(I,N,st),Rt.resetDefaultState(),ot=-1,G=null,S.pop(),S.length>0?(M=S[S.length-1],Mt.setTextureUnits(M.state.textureUnits),et===!0&&lt.setGlobalState(I.clippingPlanes,M.state.camera)):M=null,R.pop(),R.length>0?_=R[R.length-1]:_=null,k!==null&&k.renderEnd()};function oe(N,st,_t,ut){if(N.visible===!1)return;if(N.layers.test(st.layers)){if(N.isGroup)_t=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(st);else if(N.isLightProbeGrid)M.pushLightProbeGrid(N);else if(N.isLight)M.pushLight(N),N.castShadow&&M.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||N.intersectsFrustum(K)){ut&&It.setFromMatrixPosition(N.matrixWorld).applyMatrix4(ht);let Yt=C.update(N),Vt=N.material;Vt.visible&&_.push(N,Yt,Vt,_t,It.z,null,st)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||N.intersectsFrustum(K))){let Yt=C.update(N),Vt=N.material;if(ut&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),It.copy(N.boundingSphere.center)):(Yt.boundingSphere===null&&Yt.computeBoundingSphere(),It.copy(Yt.boundingSphere.center)),It.applyMatrix4(N.matrixWorld).applyMatrix4(ht)),Array.isArray(Vt)){let Zt=Yt.groups;for(let Jt=0,ye=Zt.length;Jt<ye;Jt++){let be=Zt[Jt],Kt=Vt[be.materialIndex];Kt&&Kt.visible&&_.push(N,Yt,Kt,_t,It.z,be,st)}}else Vt.visible&&_.push(N,Yt,Vt,_t,It.z,null,st)}}let Wt=N.children;for(let Yt=0,Vt=Wt.length;Yt<Vt;Yt++)oe(Wt[Yt],st,_t,ut)}function Et(N,st,_t,ut){let{opaque:vt,transmissive:Wt,transparent:Yt}=N;M.setupLightsView(_t),et===!0&&lt.setGlobalState(I.clippingPlanes,_t),ut&&A.viewport(q.copy(ut)),vt.length>0&&Gt(vt,st,_t),Wt.length>0&&Gt(Wt,st,_t),Yt.length>0&&Gt(Yt,st,_t),A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function Dt(N,st,_t,ut){if((_t.isScene===!0?_t.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[ut.id]===void 0){let Kt=Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[ut.id]=new Xn(1,1,{generateMipmaps:!0,type:Kt?_i:Yn,minFilter:Ps,samples:Math.max(4,B.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:_e.workingColorSpace})}let Wt=M.state.transmissionRenderTarget[ut.id],Yt=ut.viewport||q;Wt.setSize(Yt.z*I.transmissionResolutionScale,Yt.w*I.transmissionResolutionScale);let Vt=I.getRenderTarget(),Zt=I.getActiveCubeFace(),Jt=I.getActiveMipmapLevel();I.setRenderTarget(Wt),I.getClearColor(pt),at=I.getClearAlpha(),at<1&&I.setClearColor(16777215,.5),I.clear(),Ft&&Ct.render(_t);let ye=I.toneMapping;I.toneMapping=bi;let be=ut.viewport;if(ut.viewport!==void 0&&(ut.viewport=void 0),M.setupLightsView(ut),et===!0&&lt.setGlobalState(I.clippingPlanes,ut),Gt(N,_t,ut),Mt.updateMultisampleRenderTarget(Wt),Mt.updateRenderTargetMipmap(Wt),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let Me=0,je=st.length;Me<je;Me++){let De=st[Me],{object:Oe,geometry:Cn,material:jt,group:Un}=De;if(jt.side===Qe&&Oe.layers.test(ut.layers)){let Re=jt.side;jt.side=Bn,jt.needsUpdate=!0,ie(Oe,_t,ut,Cn,jt,Un),jt.side=Re,jt.needsUpdate=!0,Kt=!0}}Kt===!0&&(Mt.updateMultisampleRenderTarget(Wt),Mt.updateRenderTargetMipmap(Wt))}I.setRenderTarget(Vt,Zt,Jt),I.setClearColor(pt,at),be!==void 0&&(ut.viewport=be),I.toneMapping=ye}function Gt(N,st,_t){let ut=st.isScene===!0?st.overrideMaterial:null;for(let vt=0,Wt=N.length;vt<Wt;vt++){let Yt=N[vt],{object:Vt,geometry:Zt,group:Jt}=Yt,ye=Yt.material;ye.allowOverride===!0&&ut!==null&&(ye=ut),Vt.layers.test(_t.layers)&&ie(Vt,st,_t,Zt,ye,Jt)}}function ie(N,st,_t,ut,vt,Wt){k!==null&&vt.isNodeMaterial&&k.setObject(N,vt),N.onBeforeRender(I,st,_t,ut,vt,Wt),N.modelViewMatrix.multiplyMatrices(_t.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),vt.onBeforeRender(I,st,_t,ut,N,Wt),vt.transparent===!0&&vt.side===Qe&&vt.forceSinglePass===!1?(vt.side=Bn,vt.needsUpdate=!0,I.renderBufferDirect(_t,st,ut,vt,N,Wt),vt.side=Cs,vt.needsUpdate=!0,I.renderBufferDirect(_t,st,ut,vt,N,Wt),vt.side=Qe):I.renderBufferDirect(_t,st,ut,vt,N,Wt),N.onAfterRender(I,st,_t,ut,vt,Wt)}function he(N,st,_t){st.isScene!==!0&&(st=Pt);let ut=mt.get(N),vt=M.state.lights,Wt=M.state.shadowsArray,Yt=vt.state.version,Vt=D.getParameters(N,vt.state,Wt,st,_t,M.state.lightProbeGridArray),Zt=D.getProgramCacheKey(Vt),Jt=ut.programs;ut.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?st.environment:null,ut.fog=st.fog;let ye=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;ut.envMap=X.get(N.envMap||ut.environment,ye),ut.envMapRotation=ut.environment!==null&&N.envMap===null?st.environmentRotation:N.envMapRotation,Jt===void 0&&(N.addEventListener("dispose",Ie),Jt=new Map,ut.programs=Jt);let be=Jt.get(Zt);if(be!==void 0){if(ut.currentProgram===be&&ut.lightsStateVersion===Yt)return we(N,Vt),be}else Vt.uniforms=D.getUniforms(N),k!==null&&N.isNodeMaterial&&k.build(N,_t,Vt),N.onBeforeCompile(Vt,I),be=D.acquireProgram(Vt,Zt),Jt.set(Zt,be),ut.uniforms=Vt.uniforms;let Kt=ut.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Kt.clippingPlanes=lt.uniform),we(N,Vt),ut.needsLights=ni(N),ut.lightsStateVersion=Yt,ut.needsLights&&(Kt.ambientLightColor.value=vt.state.ambient,Kt.lightProbe.value=vt.state.probe,Kt.sunLights.value=vt.state.sun,Kt.sunLightShadows.value=vt.state.sunShadow,Kt.directionalLights.value=vt.state.directional,Kt.directionalLightShadows.value=vt.state.directionalShadow,Kt.spotLights.value=vt.state.spot,Kt.spotLightShadows.value=vt.state.spotShadow,Kt.rectAreaLights.value=vt.state.rectArea,Kt.ltc_1.value=vt.state.rectAreaLTC1,Kt.ltc_2.value=vt.state.rectAreaLTC2,Kt.pointLights.value=vt.state.point,Kt.pointLightShadows.value=vt.state.pointShadow,Kt.hemisphereLights.value=vt.state.hemi,Kt.sunShadowMatrix.value=vt.state.sunShadowMatrix,Kt.sunShadowCascade.value=vt.state.sunShadowCascade,Kt.directionalShadowMatrix.value=vt.state.directionalShadowMatrix,Kt.spotLightMatrix.value=vt.state.spotLightMatrix,Kt.spotLightMap.value=vt.state.spotLightMap,Kt.pointShadowMatrix.value=vt.state.pointShadowMatrix),ut.lightProbeGrid=M.state.lightProbeGridArray.length>0,ut.currentProgram=be,ut.uniformsList=null,be}function fe(N){if(N.uniformsList===null){let st=N.currentProgram.getUniforms();N.uniformsList=Jr.seqWithValue(st.seq,N.uniforms)}return N.uniformsList}function we(N,st){let _t=mt.get(N);_t.outputColorSpace=st.outputColorSpace,_t.batching=st.batching,_t.batchingColor=st.batchingColor,_t.instancing=st.instancing,_t.instancingColor=st.instancingColor,_t.instancingMorph=st.instancingMorph,_t.skinning=st.skinning,_t.morphTargets=st.morphTargets,_t.morphNormals=st.morphNormals,_t.morphColors=st.morphColors,_t.morphTargetsCount=st.morphTargetsCount,_t.numClippingPlanes=st.numClippingPlanes,_t.numIntersection=st.numClipIntersection,_t.vertexAlphas=st.vertexAlphas,_t.vertexTangents=st.vertexTangents,_t.toneMapping=st.toneMapping}function Xe(N,st){if(N.length===0)return null;if(N.length===1)return N[0].texture!==null?N[0]:null;b.setFromMatrixPosition(st.matrixWorld);for(let _t=0,ut=N.length;_t<ut;_t++){let vt=N[_t];if(vt.texture!==null&&vt.boundingBox.containsPoint(b))return vt}return null}function Mn(N,st,_t,ut,vt){st.isScene!==!0&&(st=Pt),Mt.resetTextureUnits();let Wt=st.fog,Yt=ut.isMeshStandardMaterial||ut.isMeshLambertMaterial||ut.isMeshPhongMaterial?st.environment:null,Vt=dt===null?I.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:_e.workingColorSpace,Zt=ut.isMeshStandardMaterial||ut.isMeshLambertMaterial&&!ut.envMap||ut.isMeshPhongMaterial&&!ut.envMap,Jt=X.get(ut.envMap||Yt,Zt),ye=ut.vertexColors===!0&&!!_t.attributes.color&&_t.attributes.color.itemSize===4,be=!!_t.attributes.tangent&&(!!ut.normalMap||ut.anisotropy>0),Kt=!!_t.morphAttributes.position,Me=!!_t.morphAttributes.normal,je=!!_t.morphAttributes.color,De=bi;ut.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(De=I.toneMapping);let Oe=_t.morphAttributes.position||_t.morphAttributes.normal||_t.morphAttributes.color,Cn=Oe!==void 0?Oe.length:0,jt=mt.get(ut),Un=M.state.lights;if(et===!0&&($===!0||N!==G)){let Ve=N===G&&ut.id===ot;lt.setState(ut,N,Ve)}let Re=!1;ut.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==Un.state.version||jt.outputColorSpace!==Vt||vt.isBatchedMesh&&jt.batching===!1||!vt.isBatchedMesh&&jt.batching===!0||vt.isBatchedMesh&&jt.batchingColor===!0&&vt._colorsTexture===null||vt.isBatchedMesh&&jt.batchingColor===!1&&vt._colorsTexture!==null||vt.isInstancedMesh&&jt.instancing===!1||!vt.isInstancedMesh&&jt.instancing===!0||vt.isSkinnedMesh&&jt.skinning===!1||!vt.isSkinnedMesh&&jt.skinning===!0||vt.isInstancedMesh&&jt.instancingColor===!0&&vt.instanceColor===null||vt.isInstancedMesh&&jt.instancingColor===!1&&vt.instanceColor!==null||vt.isInstancedMesh&&jt.instancingMorph===!0&&vt.morphTexture===null||vt.isInstancedMesh&&jt.instancingMorph===!1&&vt.morphTexture!==null||jt.envMap!==Jt||ut.fog===!0&&jt.fog!==Wt||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==lt.numPlanes||jt.numIntersection!==lt.numIntersection)||jt.vertexAlphas!==ye||jt.vertexTangents!==be||jt.morphTargets!==Kt||jt.morphNormals!==Me||jt.morphColors!==je||jt.toneMapping!==De||jt.morphTargetsCount!==Cn||!!jt.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(Re=!0):(Re=!0,jt.__version=ut.version);let ii=jt.currentProgram;Re===!0&&(ii=he(ut,st,vt),k&&ut.isNodeMaterial&&k.onUpdateProgram(ut,ii,jt));let Ai=!1,hs=!1,ur=!1,Ue=ii.getUniforms(),nn=jt.uniforms;if(A.useProgram(ii.program)&&(Ai=!0,hs=!0,ur=!0),ut.id!==ot&&(ot=ut.id,hs=!0),jt.needsLights){let Ve=Xe(M.state.lightProbeGridArray,vt);jt.lightProbeGrid!==Ve&&(jt.lightProbeGrid=Ve,hs=!0)}if(Ai||G!==N){A.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),Ue.setValue(Y,"projectionMatrix",N.projectionMatrix),Ue.setValue(Y,"viewMatrix",N.matrixWorldInverse);let ds=Ue.map.cameraPosition;ds!==void 0&&ds.setValue(Y,yt.setFromMatrixPosition(N.matrixWorld)),B.logarithmicDepthBuffer&&Ue.setValue(Y,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(ut.isMeshPhongMaterial||ut.isMeshToonMaterial||ut.isMeshLambertMaterial||ut.isMeshBasicMaterial||ut.isMeshStandardMaterial||ut.isShaderMaterial)&&Ue.setValue(Y,"isOrthographic",N.isOrthographicCamera===!0),G!==N&&(G=N,hs=!0,ur=!0)}if(jt.needsLights&&(Un.state.sunShadowMap.length>0&&Ue.setValue(Y,"sunShadowMap",Un.state.sunShadowMap,Mt),Un.state.directionalShadowMap.length>0&&Ue.setValue(Y,"directionalShadowMap",Un.state.directionalShadowMap,Mt),Un.state.spotShadowMap.length>0&&Ue.setValue(Y,"spotShadowMap",Un.state.spotShadowMap,Mt),Un.state.pointShadowMap.length>0&&Ue.setValue(Y,"pointShadowMap",Un.state.pointShadowMap,Mt)),vt.isSkinnedMesh){Ue.setOptional(Y,vt,"bindMatrix"),Ue.setOptional(Y,vt,"bindMatrixInverse");let Ve=vt.skeleton;Ve&&(Ve.boneTexture===null&&Ve.computeBoneTexture(),Ue.setValue(Y,"boneTexture",Ve.boneTexture,Mt))}vt.isBatchedMesh&&(Ue.setOptional(Y,vt,"batchingTexture"),Ue.setValue(Y,"batchingTexture",vt._matricesTexture,Mt),Ue.setOptional(Y,vt,"batchingIdTexture"),Ue.setValue(Y,"batchingIdTexture",vt._indirectTexture,Mt),Ue.setOptional(Y,vt,"batchingColorTexture"),vt._colorsTexture!==null&&Ue.setValue(Y,"batchingColorTexture",vt._colorsTexture,Mt));let fs=_t.morphAttributes;if((fs.position!==void 0||fs.normal!==void 0||fs.color!==void 0)&&L.update(vt,_t,ii),(hs||jt.receiveShadow!==vt.receiveShadow)&&(jt.receiveShadow=vt.receiveShadow,Ue.setValue(Y,"receiveShadow",vt.receiveShadow)),(ut.isMeshStandardMaterial||ut.isMeshLambertMaterial||ut.isMeshPhongMaterial)&&ut.envMap===null&&st.environment!==null&&(nn.envMapIntensity.value=st.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=US()),hs){if(Ue.setValue(Y,"toneMappingExposure",I.toneMappingExposure),jt.needsLights&&Vn(nn,ur),Wt&&ut.fog===!0&&F.refreshFogUniforms(nn,Wt),F.refreshMaterialUniforms(nn,ut,rt,Z,M.state.transmissionRenderTarget[N.id]),jt.needsLights&&jt.lightProbeGrid){let Ve=jt.lightProbeGrid;nn.probesSH.value=Ve.texture,nn.probesMin.value.copy(Ve.boundingBox.min),nn.probesMax.value.copy(Ve.boundingBox.max),nn.probesResolution.value.copy(Ve.resolution)}Jr.upload(Y,fe(jt),nn,Mt)}if(ut.isShaderMaterial&&ut.uniformsNeedUpdate===!0&&(Jr.upload(Y,fe(jt),nn,Mt),ut.uniformsNeedUpdate=!1),ut.isSpriteMaterial&&Ue.setValue(Y,"center",vt.center),Ue.setValue(Y,"modelViewMatrix",vt.modelViewMatrix),Ue.setValue(Y,"normalMatrix",vt.normalMatrix),Ue.setValue(Y,"modelMatrix",vt.matrixWorld),ut.uniformsGroups!==void 0){let Ve=ut.uniformsGroups;for(let ds=0,hr=Ve.length;ds<hr;ds++){let Ed=Ve[ds];Tt.update(Ed,ii),Tt.bind(Ed,ii)}}return ii}function Vn(N,st){N.ambientLightColor.needsUpdate=st,N.lightProbe.needsUpdate=st,N.sunLights.needsUpdate=st,N.sunLightShadows.needsUpdate=st,N.directionalLights.needsUpdate=st,N.directionalLightShadows.needsUpdate=st,N.pointLights.needsUpdate=st,N.pointLightShadows.needsUpdate=st,N.spotLights.needsUpdate=st,N.spotLightShadows.needsUpdate=st,N.rectAreaLights.needsUpdate=st,N.hemisphereLights.needsUpdate=st}function ni(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return dt},this.setRenderTargetTextures=function(N,st,_t){let ut=mt.get(N);ut.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,ut.__autoAllocateDepthBuffer===!1&&(ut.__useRenderToTexture=!1),mt.get(N.texture).__webglTexture=st,mt.get(N.depthTexture).__webglTexture=ut.__autoAllocateDepthBuffer?void 0:_t,ut.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,st){let _t=mt.get(N);_t.__webglFramebuffer=st,_t.__useDefaultFramebuffer=st===void 0},this.setRenderTarget=function(N,st=0,_t=0){dt=N,V=st,j=_t;let ut=null,vt=!1,Wt=!1;if(N){let Vt=mt.get(N);if(Vt.__useDefaultFramebuffer!==void 0){A.bindFramebuffer(Y.FRAMEBUFFER,Vt.__webglFramebuffer),q.copy(N.viewport),xt.copy(N.scissor),gt=N.scissorTest,A.viewport(q),A.scissor(xt),A.setScissorTest(gt),ot=-1;return}else if(Vt.__webglFramebuffer===void 0)Mt.setupRenderTarget(N);else if(Vt.__hasExternalTextures)Mt.rebindTextures(N,mt.get(N.texture).__webglTexture,mt.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){let ye=N.depthTexture;if(Vt.__boundDepthTexture!==ye){if(ye!==null&&mt.has(ye)&&(N.width!==ye.image.width||N.height!==ye.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Mt.setupDepthRenderbuffer(N)}}let Zt=N.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(Wt=!0);let Jt=mt.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(Jt[st])?ut=Jt[st][_t]:ut=Jt[st],vt=!0):N.samples>0&&Mt.useMultisampledRTT(N)===!1?ut=mt.get(N).__webglMultisampledFramebuffer:Array.isArray(Jt)?ut=Jt[_t]:ut=Jt,q.copy(N.viewport),xt.copy(N.scissor),gt=N.scissorTest}else q.copy(Nt).multiplyScalar(rt).floor(),xt.copy(H).multiplyScalar(rt).floor(),gt=bt;if(_t!==0&&(ut=z),A.bindFramebuffer(Y.FRAMEBUFFER,ut)&&A.drawBuffers(N,ut),A.viewport(q),A.scissor(xt),A.setScissorTest(gt),vt){let Vt=mt.get(N.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+st,Vt.__webglTexture,_t)}else if(Wt){let Vt=st;for(let Zt=0;Zt<N.textures.length;Zt++){let Jt=mt.get(N.textures[Zt]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Zt,Jt.__webglTexture,_t,Vt)}}else if(N!==null&&_t!==0){let Vt=mt.get(N.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Vt.__webglTexture,_t)}ot=-1};function ge(N){let st=mt.get(N);return(st.__readFormat!==N.format||st.__readType!==N.type)&&(st.__readFormat=N.format,st.__readType=N.type,st.__formatReadable=B.textureFormatReadable(N.format),st.__typeReadable=B.textureTypeReadable(N.type)),st}this.readRenderTargetPixels=function(N,st,_t,ut,vt,Wt,Yt,Vt=0){if(!(N&&N.isWebGLRenderTarget)){de("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Zt=mt.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Yt!==void 0&&(Zt=Zt[Yt]),Zt){A.bindFramebuffer(Y.FRAMEBUFFER,Zt);try{let Jt=N.textures[Vt],ye=Jt.format,be=Jt.type;N.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Vt);let Kt=ge(Jt);if(Kt.__formatReadable===!1){de("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Kt.__typeReadable===!1){de("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}st>=0&&st<=N.width-ut&&_t>=0&&_t<=N.height-vt&&Y.readPixels(st,_t,ut,vt,At.convert(ye),At.convert(be),Wt)}finally{let Jt=dt!==null?mt.get(dt).__webglFramebuffer:null;A.bindFramebuffer(Y.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(N,st,_t,ut,vt,Wt,Yt,Vt=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Zt=mt.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Yt!==void 0&&(Zt=Zt[Yt]),Zt)if(st>=0&&st<=N.width-ut&&_t>=0&&_t<=N.height-vt){A.bindFramebuffer(Y.FRAMEBUFFER,Zt);let Jt=N.textures[Vt],ye=Jt.format,be=Jt.type;N.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Vt);let Kt=ge(Jt);if(Kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Me=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Me),Y.bufferData(Y.PIXEL_PACK_BUFFER,Wt.byteLength,Y.STREAM_READ),Y.readPixels(st,_t,ut,vt,At.convert(ye),At.convert(be),0),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null);let je=dt!==null?mt.get(dt).__webglFramebuffer:null;A.bindFramebuffer(Y.FRAMEBUFFER,je);let De=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await $p(Y,De,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Me),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Wt),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null),Y.deleteBuffer(Me),Y.deleteSync(De),Wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,st=null,_t=0){let ut=Math.pow(2,-_t),vt=Math.floor(N.image.width*ut),Wt=Math.floor(N.image.height*ut),Yt=st!==null?st.x:0,Vt=st!==null?st.y:0;Mt.setTexture2D(N,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,_t,0,0,Yt,Vt,vt,Wt),A.unbindTexture()},this.copyTextureToTexture=function(N,st,_t=null,ut=null,vt=0,Wt=0){let Yt,Vt,Zt,Jt,ye,be,Kt,Me,je,De=N.isCompressedTexture?N.mipmaps[Wt]:N.image;if(_t!==null)Yt=_t.max.x-_t.min.x,Vt=_t.max.y-_t.min.y,Zt=_t.isBox3?_t.max.z-_t.min.z:1,Jt=_t.min.x,ye=_t.min.y,be=_t.isBox3?_t.min.z:0;else{let nn=Math.pow(2,-vt);Yt=Math.floor(De.width*nn),Vt=Math.floor(De.height*nn),N.isDataArrayTexture?Zt=De.depth:N.isData3DTexture?Zt=Math.floor(De.depth*nn):Zt=1,Jt=0,ye=0,be=0}ut!==null?(Kt=ut.x,Me=ut.y,je=ut.z):(Kt=0,Me=0,je=0);let Oe=At.convert(st.format),Cn=At.convert(st.type),jt;st.isData3DTexture?(Mt.setTexture3D(st,0),jt=Y.TEXTURE_3D):st.isDataArrayTexture||st.isCompressedArrayTexture?(Mt.setTexture2DArray(st,0),jt=Y.TEXTURE_2D_ARRAY):(Mt.setTexture2D(st,0),jt=Y.TEXTURE_2D),A.activeTexture(Y.TEXTURE0),A.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,st.flipY),A.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,st.premultiplyAlpha),A.pixelStorei(Y.UNPACK_ALIGNMENT,st.unpackAlignment);let Un=A.getParameter(Y.UNPACK_ROW_LENGTH),Re=A.getParameter(Y.UNPACK_IMAGE_HEIGHT),ii=A.getParameter(Y.UNPACK_SKIP_PIXELS),Ai=A.getParameter(Y.UNPACK_SKIP_ROWS),hs=A.getParameter(Y.UNPACK_SKIP_IMAGES);A.pixelStorei(Y.UNPACK_ROW_LENGTH,De.width),A.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,De.height),A.pixelStorei(Y.UNPACK_SKIP_PIXELS,Jt),A.pixelStorei(Y.UNPACK_SKIP_ROWS,ye),A.pixelStorei(Y.UNPACK_SKIP_IMAGES,be);let ur=N.isDataArrayTexture||N.isData3DTexture,Ue=st.isDataArrayTexture||st.isData3DTexture;if(N.isDepthTexture){let nn=mt.get(N),fs=mt.get(st),Ve=mt.get(nn.__renderTarget),ds=mt.get(fs.__renderTarget);A.bindFramebuffer(Y.READ_FRAMEBUFFER,Ve.__webglFramebuffer),A.bindFramebuffer(Y.DRAW_FRAMEBUFFER,ds.__webglFramebuffer);for(let hr=0;hr<Zt;hr++)ur&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,mt.get(N).__webglTexture,vt,be+hr),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,mt.get(st).__webglTexture,Wt,je+hr)),Y.blitFramebuffer(Jt,ye,Yt,Vt,Kt,Me,Yt,Vt,Y.DEPTH_BUFFER_BIT,Y.NEAREST);A.bindFramebuffer(Y.READ_FRAMEBUFFER,null),A.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(vt!==0||N.isRenderTargetTexture||mt.has(N)){let nn=mt.get(N),fs=mt.get(st);A.bindFramebuffer(Y.READ_FRAMEBUFFER,O),A.bindFramebuffer(Y.DRAW_FRAMEBUFFER,U);for(let Ve=0;Ve<Zt;Ve++)ur?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,nn.__webglTexture,vt,be+Ve):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,nn.__webglTexture,vt),Ue?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,fs.__webglTexture,Wt,je+Ve):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,fs.__webglTexture,Wt),vt!==0?Y.blitFramebuffer(Jt,ye,Yt,Vt,Kt,Me,Yt,Vt,Y.COLOR_BUFFER_BIT,Y.NEAREST):Ue?Y.copyTexSubImage3D(jt,Wt,Kt,Me,je+Ve,Jt,ye,Yt,Vt):Y.copyTexSubImage2D(jt,Wt,Kt,Me,Jt,ye,Yt,Vt);A.bindFramebuffer(Y.READ_FRAMEBUFFER,null),A.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Ue?N.isDataTexture||N.isData3DTexture?Y.texSubImage3D(jt,Wt,Kt,Me,je,Yt,Vt,Zt,Oe,Cn,De.data):st.isCompressedArrayTexture?Y.compressedTexSubImage3D(jt,Wt,Kt,Me,je,Yt,Vt,Zt,Oe,De.data):Y.texSubImage3D(jt,Wt,Kt,Me,je,Yt,Vt,Zt,Oe,Cn,De):N.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Wt,Kt,Me,Yt,Vt,Oe,Cn,De.data):N.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Wt,Kt,Me,De.width,De.height,Oe,De.data):Y.texSubImage2D(Y.TEXTURE_2D,Wt,Kt,Me,Yt,Vt,Oe,Cn,De);A.pixelStorei(Y.UNPACK_ROW_LENGTH,Un),A.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Re),A.pixelStorei(Y.UNPACK_SKIP_PIXELS,ii),A.pixelStorei(Y.UNPACK_SKIP_ROWS,Ai),A.pixelStorei(Y.UNPACK_SKIP_IMAGES,hs),Wt===0&&st.generateMipmaps&&Y.generateMipmap(jt),A.unbindTexture()},this.initRenderTarget=function(N){mt.get(N).__webglFramebuffer===void 0&&Mt.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?Mt.setTextureCube(N,0):N.isData3DTexture?Mt.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?Mt.setTexture2DArray(N,0):Mt.setTexture2D(N,0),A.unbindTexture()},this.resetState=function(){V=0,j=0,dt=null,A.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=_e._getDrawingBufferColorSpace(t),e.unpackColorSpace=_e._getUnpackColorSpace()}};var hy=bo(to(),1);(function(n){"use strict";let t=Object.freeze([Object.freeze({key:"sky",label:"Sky strip"}),Object.freeze({key:"precipitation",label:"Rain, snow and hail"}),Object.freeze({key:"wind",label:"Wind effects"}),Object.freeze({key:"reflections",label:"Sun, moon and cloud reflections"}),Object.freeze({key:"trees",label:"Trees and palms"}),Object.freeze({key:"traffic",label:"Road traffic"}),Object.freeze({key:"sidewalk",label:"Walkers and cyclists"}),Object.freeze({key:"boats",label:"Boats"}),Object.freeze({key:"beachPlay",label:"Beach play"})]),e=new Set(t.map(({key:u})=>u)),i=new Set(["left","center","right"]),s=(u,f)=>u==="dockAlignment"?i.has(f):e.has(u)&&typeof f=="boolean",r=u=>i.has(u?.dockAlignment)?u.dockAlignment:"right";function o(u){return u===void 0||!!(u&&typeof u=="object"&&!Array.isArray(u)&&Object.entries(u).every(([f,h])=>s(f,h)))}function a(u,f){return u?.[f]!==!1}function c(u,f,h){if(!s(f,h)||h===(f==="dockAlignment"?r(u):a(u,f)))return u;let d={...u};return h===(f==="dockAlignment"?"right":!0)?delete d[f]:d[f]=h,Object.keys(d).length?d:void 0}function l(u,f){return a(f,"wind")?u:{...u,windSpeed:0,windBearing:void 0}}n.RoomcraftSceneSettings=Object.freeze({features:t,valid:o,enabled:a,withFeature:c,wind:l,dockAlignment:r})})(typeof window>"u"?globalThis:window);var Ta=(typeof window>"u"?globalThis:window).RoomcraftSceneSettings,Pm=Ta.features,vC=Ta.valid,Mi=Ta.enabled,jl=Ta.wind,Lm=Ta.dockAlignment;function $n(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new ue,l=0;for(let u=0;u<n.length;++u){let f=n[u],h=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(e){let u=0,f=[];for(let h=0;h<n.length;++h){let d=n[h].index;for(let m=0;m<d.count;++m)f.push(d.getX(m)+u);u+=n[h].attributes.position.count}c.setIndex(f)}for(let u in r){let f=Nm(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,f)}for(let u in o){let f=o[u][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let h=0;h<f;++h){let d=[];for(let y=0;y<o[u].length;++y)d.push(o[u][y][h]);let m=Nm(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(m)}}}return c}function Nm(n){let t,e,i,s=-1,r=0;for(let l=0;l<n.length;++l){let u=n[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let o=new t(r),a=new Pe(o,e,i),c=0;for(let l=0;l<n.length;++l){let u=n[l];if(u.isInterleavedBufferAttribute){let f=c/e;for(let h=0,d=u.count;h<d;h++)for(let m=0;m<e;m++){let y=u.getComponent(h,m);a.setComponent(h+f,m,y)}}else o.set(u.array,c);c+=u.count*e}return s!==void 0&&(a.gpuType=s),a}var Aa=new W;function li(n,t,e,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Aa.copy(t),Aa[i]=0,Aa.normalize();let l=.5*o/(o+a),u=1-Aa.angleTo(n)/c;return Math.sign(Aa[e])===1?u*l:a/(o+a)+l+l*(1-u)}var Kl=class n extends Te{constructor(t=1,e=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new W,l=new W,u=new W(t,e,i).divideScalar(2).subScalar(r),f=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,m=f.length/6,y=new W,p=.5/o;for(let g=0,x=0;g<f.length;g+=3,x+=2)switch(c.fromArray(f,g),l.copy(c),l.x-=Math.sign(l.x)*p,l.y-=Math.sign(l.y)*p,l.z-=Math.sign(l.z)*p,l.normalize(),f[g+0]=u.x*Math.sign(c.x)+l.x*r,f[g+1]=u.y*Math.sign(c.y)+l.y*r,f[g+2]=u.z*Math.sign(c.z)+l.z*r,h[g+0]=l.x,h[g+1]=l.y,h[g+2]=l.z,Math.floor(g/m)){case 0:y.set(1,0,0),d[x+0]=li(y,l,"z","y",r,i),d[x+1]=1-li(y,l,"y","z",r,e);break;case 1:y.set(-1,0,0),d[x+0]=1-li(y,l,"z","y",r,i),d[x+1]=1-li(y,l,"y","z",r,e);break;case 2:y.set(0,1,0),d[x+0]=1-li(y,l,"x","z",r,t),d[x+1]=li(y,l,"z","x",r,i);break;case 3:y.set(0,-1,0),d[x+0]=1-li(y,l,"x","z",r,t),d[x+1]=1-li(y,l,"z","x",r,i);break;case 4:y.set(0,0,1),d[x+0]=1-li(y,l,"x","y",r,t),d[x+1]=1-li(y,l,"y","x",r,e);break;case 5:y.set(0,0,-1),d[x+0]=li(y,l,"x","y",r,t),d[x+1]=1-li(y,l,"y","x",r,e);break}}static fromJSON(t){return new n(t.width,t.height,t.depth,t.segments,t.radius)}};var Dm=Object.freeze({"pets-fish-aquarium-oak":"aquarium","pets-lizard-terrarium-walnut":"terrarium"}),kS=Math.PI*2;function OS(){let n=new ee,t=new Te(1,1,1),e=new Ae(1,12,8),i=new Map;function s(a){return i.has(a)||i.set(a,new He({color:a,roughness:.83})),i.get(a)}function r(a,c,l,u,f,h,d,m,y){let p=new ae(c,typeof l=="string"?s(l):l);return p.position.set(u,f,h),p.scale.set(d,m,y),a.add(p),p}function o(){let a=new Map;for(let l of n.children){if(!l.isMesh||l.material.transparent)continue;let u=a.get(l.material)??[];u.push(l),a.set(l.material,u)}for(let[l,u]of a){if(u.length<2)continue;let f=u.map(d=>(d.updateMatrix(),d.geometry.toNonIndexed().applyMatrix4(d.matrix))),h=new ae($n(f),l);h.castShadow=u.some(d=>d.castShadow),f.forEach(d=>d.dispose()),n.remove(...u),n.add(h)}let c=new Set;n.traverse(l=>{l.geometry&&c.add(l.geometry)});for(let l of[t,e])c.has(l)||l.dispose()}return{root:n,batchStaticParts:o,box:(a,...c)=>r(a,t,...c),oval:(a,...c)=>r(a,e,...c)}}function BS({root:n,box:t},e,i,s){let r=s?"#c29365":"#875b47",o=s?"#304b54":"#453c42",a=26,c=s?57:58,l=Math.min(2,e*.065,i*.065),u=new Ce({color:s?"#9edcdb":"#d1eadb",transparent:!0,opacity:s?.19:.13,depthWrite:!1,side:Qe});t(n,o,0,1.8,0,e*.91,3.6,i*.88),t(n,r,0,14,0,e*.95,21,i*.93).castShadow=!0;for(let d of[-1,1])t(n,s?"#deb181":"#aa785d",d*e*.232,14,i*.469,e*.448,17,i*.021),t(n,"#c8a378",d*e*.072,14.5,i*.492,e*.047,1.25,i*.016);t(n,o,0,a,0,e,3,i).castShadow=!0;let f=(a+c)/2,h=c-a;for(let d of[-e/2+l/2,e/2-l/2]){t(n,o,d,c,0,l,1.8,i),t(n,u,d,f,0,l*.17,h,i-l*2);for(let m of[-i/2+l/2,i/2-l/2])t(n,o,d,f,m,l,h,l)}for(let d of[-i/2+l/2,i/2-l/2])t(n,o,0,c,d,e-l*2,1.8,l),t(n,u,0,f,d,e-l*2,h,l*.17);return t(n,o,0,c+1.5,-i*.325,e*.77,2.7,i*.105),t(n,s?"#cde8d3":"#eed59e",0,c+.42,-i*.265,e*.72,.7,i*.016),{base:a,top:c}}function zS({box:n,oval:t,root:e},i,s,r){let o=new ee;o.name="fish-"+i,e.add(o),t(o,r,0,0,0,s*1.85,s*1.08,s*.79),t(o,"#ffdbb8",s*.07,-s*.44,0,s*1.45,s*.63,s*.71);let a=new ee;a.position.x=-s*1.42,o.add(a);for(let c of[-.43,.43]){let l=t(a,r,-s*.6,Math.sign(c)*s*.4,0,s*.83,s*.42,s*.21);l.rotation.z=c}for(let c of[-1,1])t(o,"#273245",s*.99,s*.14,c*s*.61,s*.235,s*.23,s*.12),n(o,"#fff1d9",s*1.05,s*.21,c*s*.69,s*.11,s*.1,s*.07);return{fish:o,tail:a}}function HS(n,t,e,i,s,r){let{root:o,box:a,oval:c}=n,l=s-4,u=new Ce({color:"#8dd1ce",transparent:!0,opacity:.28,depthWrite:!1}),f=new Ce({color:"#d7fff4",transparent:!0,opacity:.62,depthWrite:!1});a(o,"#82a9a1",0,i+2.15,0,t*.94,1.7,e*.9),a(o,u,0,l,0,t*.952,.22,e*.934);for(let m=0;m<18;m++){let y=(m*7%19/19-.5)*t*.83,p=(m*13%19/19-.5)*e*.79;c(o,["#b9c5ad","#72958b","#96ac9f"][m%3],y,i+3,p,r*(1+m%4*.34),.85,r*1.15)}for(let[m,y]of[[-.3,-.22],[-.23,-.27],[.33,-.2],[.37,.02]])for(let p=0;p<4;p++){let g=p-1.5,x=c(o,["#4d8971","#8cab75","#69a18a","#5b9664"][p],m*t+g*r,i+3+(2+p*1.6)*Math.min(1.15,r),y*e,r*1.45,(4+p*1.12)*Math.min(1.15,r),r*1.15);x.rotation.z=g*.22}let h=["#e99660","#ecc56d","#bc92b8"].map((m,y)=>zS(n,y,r*(1.72-y*.17),m)),d=Array.from({length:5},(m,y)=>{let p=r*(.45+y%3*.18),g=c(o,f,0,0,0,p,p,p);return g.name="bubble-"+y,g});return m=>{for(let[y,{fish:p,tail:g}]of h.entries()){let x=m*(.43+y*.06)+y*2.07+.5,v=t*(.24+y*.036),b=e*(.17+y*.038);p.position.set(Math.cos(x)*v,i+10+y*3.65+Math.sin(x*1.7)*2.15,Math.sin(x)*b),p.rotation.y=-Math.atan2(Math.cos(x)*b,-Math.sin(x)*v),g.rotation.y=Math.sin(m*8.6+y)*.39}for(let[y,p]of d.entries()){let g=(m*.3+y/d.length)%1;p.position.set(t*.33+Math.sin(g*kS+y)*r,i+5+g*20,e*.23),p.visible=g>.08&&g<.94}}}function GS({root:n,box:t,oval:e},i,s,r,o,a){t(n,"#d4a675",0,r+2.15,0,i*.93,1.6,s*.9);for(let h=0;h<16;h++)e(n,h%2?"#a98467":"#e1c491",(h*11%17/17-.5)*i*.81,r+3,(h*5%17/17-.5)*s*.76,a*1.5,.66,a);e(n,"#a07c66",-i*.29,r+4.5,-s*.13,i*.15,4.7,s*.19),e(n,"#c8a17c",-i*.29,r+7.1,-s*.17,i*.135,4.8,s*.154),e(n,"#624b45",-i*.29,r+4,-s*.011,i*.069,2.5,s*.063),e(n,"#e8c99b",i*.29,r+3.6,-s*.16,i*.1,2.2,s*.16),e(n,"#89ad9e",i*.29,r+5.1,-s*.16,i*.075,.9,s*.115);let c=t(n,"#936b52",i*.11,r+4,-s*.24,i*.27,2.6,s*.083);c.rotation.y=.25;for(let h=0;h<5;h++){let d=e(n,h%2?"#829468":"#a7ad78",-i*.37+h*a,r+6+h%2,s*.26,a*1.2,3.7*Math.min(1.3,a),a);d.rotation.z=(h-2)*.24}for(let h=0;h<7;h++)t(n,"#746462",(h/6-.5)*i*.7,o+.5,-s*.386,a*.43,.58,s*.112);let l=new ee;l.name="gecko",n.add(l),e(l,"#dca052",0,0,0,4.2*a,2.05*a,2.36*a),e(l,"#eab269",4.6*a,.7*a,0,2.38*a,1.53*a,1.9*a);let u=Array.from({length:5},(h,d)=>{let m=a*(1-d*.16);return e(l,d%2?"#b67950":"#daa15f",0,0,0,1.9*m,1.13*m,1.3*m)}),f=[];for(let h of[-1,1]){e(l,"#463946",5.15*a,1.34*a,h*1.26*a,.49*a,.44*a,.31*a);for(let d of[-1,1]){let m=new ee;m.position.set(d*a*2.1,-.7*a,h*a*1.42),l.add(m);let y=e(m,"#d29861",-.48*d*a,-.13*a,h*1.12*a,.66*a,.54*a,1.43*a);y.rotation.y=h*d*.28;for(let p of[-1,0,1])e(m,"#ecc297",(p*.42+.5)*a,-.55*a,h*2.28*a,.55*a,.22*a,.23*a);f.push({leg:m,side:h,front:d})}}for(let h=0;h<6;h++)e(l,"#96664f",(h%3-1)*2.2*a,1.88*a,(h<3?-.66:.66)*a,.66*a,.25*a,.46*a);return h=>{let d=h*.35+.7,m=Math.cos(d)*i*.13,y=Math.sin(d)*s*.09+s*.139;l.position.set(m,r+5.1+Math.sin(h*3.6)*.25,y),l.rotation.y=-Math.atan2(Math.cos(d)*s*.09,-Math.sin(d)*i*.13);for(let[p,g]of u.entries()){let x=p+1;g.position.set(-(3.55+x*1.24)*a,-.19*x*a,Math.sin(h*1.75-x*.55)*x*a*.32)}for(let{leg:p,side:g,front:x}of f)p.rotation.y=Math.sin(h*3.6)*g*x*.31}}function Fm(n,t,e){if(!Object.hasOwn(Dm,n))return null;let i=Dm[n],s=OS(),r=i==="aquarium",{base:o,top:a}=BS(s,t,e,r),c=Math.min(t/110,e/63,2.5),l=r?HS(s,t,e,o,a,c):GS(s,t,e,o,a,c);return s.batchStaticParts(),l(0),{root:s.root,anchorY:a+3,ambientMotion:!0,animate(u,f){l(Math.max(0,f))}}}var VS=`
  varying vec2 panelUv;
  void main() {
    panelUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,WS=`
  uniform float screenTime;
  varying vec2 panelUv;
  void main() {
    float along = smoothstep(0.0, 0.22, panelUv.y) * (1.0 - smoothstep(0.78, 1.0, panelUv.y));
    float across = smoothstep(0.0, 0.84, panelUv.x) * (1.0 - smoothstep(0.92, 1.0, panelUv.x));
    float pulse = 0.23 + 0.025 * sin(screenTime * 1.4);
    gl_FragColor = vec4(vec3(0.91, 0.94, 1.0), along * across * pulse);
    #include <colorspace_fragment>
  }
`;function XS(n={}){return[n.media_title,n.media_series_title,n.app_name,n.source].find(e=>typeof e=="string"&&e.trim())?.replace(/\s+/g," ").trim().slice(0,96)||"TV on"}function qS(){let n=globalThis.document?.createElement("canvas"),t=n?.getContext("2d");if(!t)return null;n.width=640,n.height=240;let e=new vs(n);return e.colorSpace=Ke,{context:t,texture:e}}function Um({context:n,texture:t},e){let{width:i,height:s}=n.canvas;n.fillStyle="#fffdf9",n.fillRect(0,0,i,s),n.fillStyle="#211f2c",n.font="600 48px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle";let r=e;if(n.measureText(r).width>590){let o=Array.from(r);for(;o.length&&n.measureText(o.join("")+"\u2026").width>590;)o.pop();r=o.join("")+"\u2026"}n.fillText(r,i/2,s/2),t.needsUpdate=!0}function km(n,t,e){let i={value:0},s=new Ce({color:"#08090c",toneMapped:!1}),r=new ae(new Nn(e*.78,43),s);r.name="storybook-tv-screen",r.position.set(-t*.155-.84,59,0),r.rotation.y=-Math.PI/2;let o=new ae(new Nn(t*.27,e*.79),new $e({uniforms:{screenTime:i},vertexShader:VS,fragmentShader:WS,transparent:!0,depthWrite:!1,blending:Ji}));o.name="storybook-tv-spill",o.position.set(-t*.325,28.08,0),o.rotation.x=-Math.PI/2,o.visible=!1;let a=qS();return s.map=a?.texture??null,a&&Um(a,""),r.userData.title="",n.root.add(r,o),n.animate=(c,l)=>{let u=c?.active===!0,f=u?XS(c.attributes):"";f!==r.userData.title&&(r.userData.title=f,a&&Um(a,f)),o.visible=u,s.color.set(u?"#ffffff":"#08090c"),u&&(i.value=Number.isFinite(l)?Math.max(0,Math.floor(l*12)/12):0)},n}(()=>{"use strict";let n=[["baby-toys","Baby toys"],["baby-activities","Baby activities"],["baby-mats","Play mats"],["baby-safety","Colorful safety walls & gates"],["climbing","Soft climbing blocks"],["fireplace","Fireplace & shelves"],["balcony","Balcony plant sets"],["fans","Ceiling fans"],["cleaning","Robot vacuums"],["toy-storage","Toy storage"],["play-furniture","Play furniture"],["pets","Pets"]],t={sage:["Sage","#9bb599","#dce8cc","#f5edcf","#5b755e"],mint:["Mint","#95c8b5","#d6eee0","#f5f9e9","#4f8b7c"],sky:["Sky blue","#98c5d7","#d5ebf0","#f5f8f2","#557e91"],peach:["Peach","#e4ac94","#f6d5ba","#fff2dc","#ad7569"],coral:["Coral","#d58e7e","#f5c5ad","#ffe5d0","#9a5d55"],lavender:["Lavender","#b6a8cf","#e4ddf0","#f6eff6","#756b9b"],butter:["Butter yellow","#e2c681","#f4e3af","#fff6dc","#a58a4e"],cream:["Cream","#e2d5bd","#f5eada","#fff9ec","#998972"],white:["Warm white","#e8e9de","#f8f8ee","#ffffff","#929990"],oak:["Oak","#bd8b62","#e2b786","#f5dfb7","#74523c"],walnut:["Walnut","#906347","#bb865c","#ebc69a","#513a2d"],charcoal:["Charcoal","#39464d","#657680","#d6e0d6","#1d292f"],brass:["Brass","#c9a872","#e9d3a2","#fff2d0","#7f6744"],terracotta:["Terracotta","#b87859","#dba27b","#f1d3af","#744b3a"],forest:["Forest green","#668a63","#a3bb80","#e5e7bc","#355d45"],blush:["Blush","#dbb2a9","#f1d6cc","#fff1e4","#a67b79"],rainbow:["Multicolor","#e7ab9d","#9cc8bd","#edd18b","#6d7591"],teddy:["Teddy brown","#a98263","#cfab84","#ead5ae","#654c3d"],slate:["Soft gray","#929491","#bdc0bd","#f1f0e9","#55595b"]},e=[],i={"baby-toys":"\u25C9","baby-activities":"\u2726","baby-mats":"\u25A6","baby-safety":"\u25A5",climbing:"\u25B0",fireplace:"\u25A4",balcony:"\u2740",fans:"\u2733",cleaning:"\u25C9","toy-storage":"\u25A5","play-furniture":"\u25A3",pets:"\u25C7",living:"\u273F",bedroom:"\u263E",lighting:"\u2726"},s={"baby-safety":"safety wall",fireplace:"fireplace shelfs",fans:"seiling fan",cleaning:"robot vaccum"};function r(l,u,f,h,d,m,y,p,g={}){for(let x=0;x<p.length;x++){let v=p[x],b=t[v];if(!b)throw new Error("Unknown inventory color: "+v);let _=`${l}-${h}-${v}`;e.push({type:_,label:`${d} \xB7 ${b[0]}`,icon:i[l],w:m,h:y,group:l,artFamily:u,form:f,palette:{base:b[1],accent:b[2],detail:b[3],dark:b[4]},tags:`${g.tags||""} ${s[l]||""}`.trim(),...g.collectionId?{collectionId:g.collectionId}:{},...g.seriesId?{seriesId:g.seriesId}:{},...g.designId?{designId:g.designId}:{},...g.designLabel?{designLabel:g.designLabel}:{},...g.sizeId?{sizeId:g.sizeId}:{},...g.sizeLabel?{sizeLabel:g.sizeLabel}:{},...g.material?{material:g.material}:{},...g.seriesId?{finishId:v,finishLabel:b[0]}:{},...g.legacy?{legacy:!0}:{},...g.atlas&&x===0?{atlas:g.atlas}:{},...g.mount?{mount:g.mount}:{},...g.visualKind?{visualKind:g.visualKind}:{},...g.lightForm?{lightForm:g.lightForm}:{},...g.renderLayer?{renderLayer:g.renderLayer}:{}})}}r("baby-toys","softToy","ball","soft-ball","Soft play ball",48,48,["sage","peach","sky","butter"],{tags:"8 month baby roll"}),r("baby-toys","softToy","texturedBall","sensory-ball","Textured sensory ball",48,48,["sky","mint","lavender","coral"],{atlas:"sensoryBall",tags:"8 month baby sensory"}),r("baby-toys","softToy","book","cloth-book","Cloth crinkle book",61,48,["sage","peach","sky"],{tags:"baby fabric book"}),r("baby-toys","softToy","book","board-book","Chunky board book",59,45,["butter","mint"],{tags:"baby books"}),r("baby-toys","softToy","cups","stacking-cups","Large stacking cups",70,56,["peach","sage","sky","lavender"],{tags:"baby nesting cups"}),r("baby-toys","softToy","rings","stacking-rings","Large stacking rings",68,68,["rainbow","butter","mint","coral"],{atlas:"stackRings",tags:"baby stacker"}),r("baby-toys","softToy","blocks","soft-blocks","Soft fabric blocks",88,70,["sage","sky","peach","lavender"],{tags:"large baby blocks"}),r("baby-toys","softToy","plush","plush-bear","Plush bear",58,65,["teddy","cream","blush"],{atlas:"plushBear",tags:"baby stuffed animal"}),r("baby-toys","softToy","photoBunnyPlush","bunny-plush","Soft bunny plush",58,70,["cream"],{tags:"photo 1977 living room baby stuffed animal rabbit"}),r("baby-toys","softToy","teether","teething-ring","Large teething ring",48,48,["mint","butter"],{tags:"baby silicone"}),r("baby-activities","activityToy","playGym","play-gym","Floor play gym",160,126,["sage","peach","sky"],{atlas:"playGym",tags:"baby activity arch"}),r("baby-activities","activityToy","photoWoodArch","wooden-play-arch","Wooden hanging-toy play arch",140,100,["oak"],{tags:"photo 1977 living room baby gym natural wood dangling toys"}),r("baby-activities","activityToy","photoActivityTable","colorful-activity-table","Colorful activity table",118,90,["rainbow"],{tags:"photo 1977 living room baby sensory music table"}),r("baby-activities","activityToy","activityCube","activity-cube","Activity cube",74,74,["oak","sky","mint"],{atlas:"activityCube",tags:"baby activity"}),r("baby-activities","activityToy","activityBoard","activity-board","Large activity board",124,60,["oak","sage","sky"],{atlas:"activityBoard",tags:"baby sensory board"}),r("baby-activities","activityToy","mirror","floor-mirror","Unbreakable play mirror",98,70,["cream","sage"],{tags:"baby floor mirror"}),r("baby-activities","activityToy","tunnel","fabric-tunnel","Soft fabric crawl tunnel",130,74,["sky","butter"],{tags:"baby crawl"}),r("baby-activities","activityToy","sensoryBasket","sensory-basket","Sensory play basket",73,65,["oak","mint"],{tags:"baby toys basket"}),r("baby-activities","activityToy","largeRattle","large-rattle","Large handled rattle",56,42,["peach","sage"],{tags:"baby grasp"}),r("baby-mats","playMat","tummy","tummy-mat","Tummy-time mat",182,130,["sage","peach","sky","butter"],{tags:"baby soft floor mat"}),r("baby-mats","playMat","foam","foam-mat","Large foam play mat",215,155,["rainbow","cream","mint","lavender","coral"],{atlas:"mat",tags:"baby floor padded"}),r("baby-mats","playMat","photoLeafMat","leaf-play-mat","Gray leaf play mat",240,170,["slate"],{tags:"photo 1977 living room baby quilted patterned padded mat"}),r("baby-mats","playMat","photoCheckerMat","checker-puzzle-mat","Brown checker puzzle mat",210,140,["cream"],{tags:"photo 1977 living room baby foam tile checkerboard"}),r("baby-mats","playMat","puzzle","puzzle-mat","Interlocking play mat",205,155,["sage","sky","butter","peach"],{tags:"baby padded puzzle"}),r("baby-mats","playMat","round","round-mat","Round quilted play mat",160,160,["cream","blush","mint"],{tags:"baby floor rug"}),r("baby-safety","paddedPanel","wall","padded-wall","Padded safety wall",156,29,["sage","mint","sky","peach","lavender","butter"],{atlas:"wallPanels",mount:"wall",tags:"color padded wall panel"}),r("baby-safety","paddedPanel","quilted","quilted-wall","Quilted wall panel",146,30,["cream","sky","blush","sage"],{mount:"wall",tags:"color soft wall"}),r("baby-safety","paddedPanel","folding","folding-wall","Folding play barrier",174,34,["sage","peach","lavender"],{tags:"baby color safety wall"}),r("baby-safety","paddedPanel","playpen","playpen","Panel playpen",182,143,["cream","sage","sky"],{tags:"baby enclosure"}),r("baby-safety","paddedPanel","photoPlayYard","rainbow-play-yard","Multicolor bear-panel play yard",320,225,["rainbow"],{tags:"photo 1977 living room baby safety enclosure playpen fence"}),r("baby-safety","paddedPanel","photoBearPanel","bear-panel","Bear-face play yard panel",94,34,["blush","white","mint","butter","sky","lavender"],{tags:"photo 1977 living room baby colorful modular safety gate fence panel"}),r("baby-safety","paddedPanel","gate","stair-gate","Hardware-mounted stair gate",112,29,["white","oak","charcoal"],{atlas:"babyGate",tags:"top of stairs second floor baby gate"}),r("baby-safety","paddedPanel","guard","fireplace-guard","Fireplace barrier",158,35,["charcoal","cream"],{tags:"fireplace baby screen guard"}),r("climbing","foamBlock","cube","foam-cube","Large foam cube",76,76,["sage","sky","peach","butter"],{tags:"soft climbing baby"}),r("climbing","foamBlock","wedge","foam-wedge","Foam climbing wedge",122,81,["rainbow","peach","sage","sky","lavender"],{atlas:"foamWedge",tags:"soft climbing ramp"}),r("climbing","foamBlock","steps","foam-steps","Foam step set",130,102,["rainbow","sage","butter","sky","peach"],{atlas:"foamSteps",tags:"soft climbing blocks"}),r("climbing","foamBlock","ramp","foam-ramp","Gentle foam ramp",157,91,["mint","peach","lavender"],{tags:"soft climbing"}),r("climbing","foamBlock","arch","foam-arch","Foam crawling arch",126,105,["rainbow","sky","sage","butter"],{atlas:"foamArch",tags:"soft climbing"}),r("climbing","foamBlock","tunnel","foam-tunnel","Foam crawl tunnel",155,112,["sage","peach","lavender"],{tags:"soft play climbing"}),r("fireplace","fireplace","mantel","fireplace-mantel","Fireplace mantel",180,64,["oak","walnut","white"],{atlas:"fireplace",tags:"hearth fireplace shelf"}),r("fireplace","fireplace","photoTiledMantel","white-tile-mantel","White mantel with dark tile hearth",180,95,["white"],{tags:"photo 1977 living room fireplace stone tile surround"}),r("fireplace","fireplace","hearth","fireplace-hearth","Stone fireplace hearth",169,87,["cream","charcoal","terracotta"],{tags:"fireplace insert"}),r("fireplace","fireplace","screen","fireplace-screen","Fireplace screen",172,31,["charcoal","brass"],{tags:"fireplace guard"}),r("fireplace","shelf","floating","floating-shelf","Floating mantel shelf",162,40,["oak","walnut","white","charcoal"],{tags:"fireplace wall shelf"}),r("fireplace","shelf","corner","corner-shelf","Corner display shelf",108,108,["oak","white"],{tags:"fireplace shelves"}),r("fireplace","shelf","anchored","anchored-bookcase","Anchored book display shelf",87,152,["oak","white"],{tags:"anchored shelves bookcase"}),r("fireplace","shelf","photoToyShelf","toy-side-shelf","Fireplace side toy shelf",85,130,["oak"],{tags:"photo 1977 living room toy display shelving"}),r("balcony","planterSet","rail","rail-planters","Balcony rail planter set",179,53,["forest","terracotta","white","charcoal"],{atlas:"balconyPlants",tags:"balcony flowers plant set"}),r("balcony","planterSet","cluster","pot-cluster","Balcony pot cluster",137,100,["terracotta","cream","sage","charcoal"],{tags:"balcony plant set"}),r("balcony","planterSet","herbs","herb-trio","Balcony herb trio",133,60,["sage","terracotta","white"],{tags:"balcony plant set herbs"}),r("balcony","planterSet","hanging","hanging-plants","Hanging basket pair",113,77,["forest","terracotta","cream"],{tags:"balcony plant set"}),r("balcony","planterSet","vertical","vertical-garden","Vertical balcony garden",83,160,["forest","sage","walnut"],{tags:"balcony plant set"}),r("balcony","planterSet","tall","tall-planters","Tall balcony planter set",138,119,["forest","terracotta","charcoal"],{tags:"balcony plant set"}),r("fans","ceilingFan","three","three-blade-fan","Three-blade ceiling fan",150,150,["oak","white","charcoal"],{atlas:"ceilingFan",tags:"ceiling fan"}),r("fans","ceilingFan","four","four-blade-fan","Four-blade ceiling fan",155,155,["white","walnut","brass"],{tags:"ceiling fan"}),r("fans","ceilingFan","five","five-blade-fan","Five-blade ceiling fan",160,160,["oak","white","charcoal"],{tags:"ceiling fan"}),r("fans","ceilingFan","light","fan-light","Ceiling fan with light",158,158,["white","brass"],{tags:"ceiling fan light"}),r("fans","ceilingFan","palm","palm-fan","Palm-leaf ceiling fan",168,168,["forest"],{tags:"ceiling fan"}),r("cleaning","robotVacuum","round","round-robot-vac","Round robot vacuum",58,58,["white","charcoal","sage","brass"],{atlas:"robotVacuum",tags:"robot vacuum cleaner cute compact"}),r("cleaning","robotVacuum","docked","docked-robot-vac","Robot vacuum with dock",76,58,["white","charcoal"],{tags:"robot vacuum cleaner charging compact"}),r("cleaning","robotVacuum","mop","robot-mop","Robot vacuum mop",60,60,["white","charcoal"],{tags:"robot vacuum cleaner cute compact"}),r("cleaning","robotVacuum","slim","slim-robot-vac","Slim robot vacuum",66,50,["white","charcoal"],{tags:"robot vacuum cleaner compact"}),r("toy-storage","storage","basket","toy-basket","Woven toy basket",85,76,["oak","cream","sage"],{tags:"baby toy storage"}),r("toy-storage","storage","bin","soft-toy-bin","Soft toy bin",84,74,["sage","peach","sky"],{tags:"baby toy storage"}),r("toy-storage","storage","cubby","low-cubby","Low toy cubby",136,67,["oak","white"],{tags:"baby toy storage shelf"}),r("play-furniture","playFurniture","softPouf","soft-pouf","Soft play pouf",79,79,["sage","peach","lavender"],{tags:"baby soft seat"}),r("play-furniture","playFurniture","photoBearChair","bear-floor-chair","Teddy bear toddler floor chair",86,85,["teddy"],{tags:"photo 1977 living room baby bear armchair"}),r("play-furniture","playFurniture","photoBolster","gray-bolster","Long gray floor bolster",126,43,["slate"],{tags:"photo 1977 living room baby soft support pillow"}),r("play-furniture","playFurniture","lowTable","low-play-table","Low play table",127,79,["oak","white"],{tags:"baby play furniture"}),r("play-furniture","playFurniture","lowShelf","low-play-shelf","Low play shelf",129,52,["oak","white"],{tags:"baby play furniture"}),r("pets","habitat","aquarium","fish-aquarium","Fish aquarium",122,66,["oak"],{tags:"fish tank pet habitat swimming bubbles animated freshwater planted glass"}),r("pets","habitat","terrarium","lizard-terrarium","Lizard terrarium",116,72,["walnut"],{tags:"lizard tank pet habitat gecko vivarium desert sand glass animated"});let o="detailed realistic crafted miniature dollhouse warm original material-rich",a=(l,u,f,h,d,m)=>({collectionId:"crafted-miniature-v1",seriesId:l,designId:u,designLabel:f,sizeId:h,sizeLabel:d,material:m});r("living","cuteFurniture","cloudSofa","cloud-sofa","Tailored sectional sofa",175,120,["blush","mint"],{...a("sofa","sectional","Sectional","three-seat","3 seat","upholstery"),tags:`${o} sofa couch sectional stitched piping`}),r("living","cuteFurniture","tailoredSofa","tailored-sofa","Tailored three-seat sofa",170,88,["sage","cream","charcoal"],{...a("sofa","tailored","Tailored sofa","three-seat","3 seat","upholstery"),tags:`${o} sofa couch three seat stitched upholstery`}),r("living","cuteFurniture","tailoredLoveseat","tailored-loveseat","Tailored loveseat",126,86,["blush","sage"],{...a("sofa","tailored","Tailored sofa","loveseat","Loveseat","upholstery"),tags:`${o} sofa couch loveseat two seat stitched upholstery`}),r("living","cuteFurniture","chaiseSofa","upholstered-chaise","Upholstered chaise",88,148,["cream","lavender"],{...a("sofa","chaise","Chaise lounge","chaise","Chaise","upholstery"),tags:`${o} sofa chaise lounge stitched upholstery`}),r("living","cuteFurniture","petalDining","petal-dining-set","Oval four-seat dining set",168,112,["oak","cream"],{...a("dining","oval","Oval dining","four-seat","4 seat","wood"),legacy:!0,tags:`${o} dining table four chairs upholstered beveled wood`}),r("living","cuteFurniture","roundDining","round-dining-set","Round four-seat dining set",142,142,["oak","walnut"],{...a("dining","round","Round dining","four-seat","4 seat","wood"),legacy:!0,tags:`${o} dining table four chairs round pedestal wood`}),r("living","cuteFurniture","rectDining","rectangular-dining-set","Rectangular six-seat dining set",205,122,["oak","white"],{...a("dining","rectangular","Rectangular dining","six-seat","6 seat","wood"),legacy:!0,tags:`${o} dining table six chairs rectangular wood`}),r("living","cuteFurniture","petalDiningTable","petal-dining-table","Petal dining table",132.72,62.72,["oak","cream"],{...a("dining-table","oval","Rounded dining table","four-seat","4 seats fit","wood"),tags:`${o} dining table beveled wood tabletop`}),r("living","cuteFurniture","roundDiningTable","round-dining-table","Round pedestal dining table",82.36,82.36,["oak","walnut"],{...a("dining-table","round","Round pedestal","four-seat","4 seats fit","wood"),tags:`${o} dining table round pedestal wood tabletop`}),r("living","cuteFurniture","rectDiningTable","rectangular-dining-table","Rectangular dining table",161.95,68.32,["oak","white"],{...a("dining-table","rectangular","Rectangular dining table","six-seat","6 seats fit","wood"),tags:`${o} dining table rectangular wood tabletop`}),r("living","cuteFurniture","diningChair","dining-chair","Upholstered dining chair",34,26,["sage","blush","lavender","butter"],{...a("dining-chair","upholstered","Upholstered chair","standard","Standard","upholstery"),tags:`${o} dining chair seat upholstered wood`}),r("living","cuteFurniture","acornChair","acorn-armchair","Piped reading armchair",88,88,["teddy","sage","blush"],{...a("armchair","piped","Piped armchair","standard","Standard","upholstery"),tags:`${o} armchair reading seat upholstered piping`}),r("living","cuteFurniture","lilyCoffee","lily-coffee-table","Beveled oval coffee table",110,70,["oak","white"],{...a("coffee-table","oval","Oval top","standard","Standard","wood"),tags:`${o} coffee table beveled wood joinery`}),r("living","cuteFurniture","bubbleSide","bubble-side-table","Stone-top side table",58,58,["mint","butter"],{...a("side-table","stone","Stone top","standard","Standard","stone"),tags:`${o} round side table stone pedestal`}),r("bedroom","cuteFurniture","moonBed","moon-bed","Moon-quilt queen bed",210,185,["lavender","sky","cream"],{...a("bed","moon-quilt","Moon quilt","queen","Queen","upholstery"),tags:`${o} bedroom bed queen quilted upholstered moon embroidery`}),r("bedroom","cuteFurniture","cribBed","crafted-crib","Slatted crib",92,142,["cream","sage"],{...a("bed","crib","Slatted crib","crib","Crib","wood"),tags:`${o} bedroom baby crib slatted fitted mattress`}),r("bedroom","cuteFurniture","toddlerBed","crafted-toddler-bed","Low toddler bed",105,158,["sky","blush"],{...a("bed","toddler","Low toddler","toddler","Toddler","upholstery"),tags:`${o} bedroom toddler bed low guard rail`}),r("bedroom","cuteFurniture","platformBed","platform-bed-twin","Low platform twin bed",120,196,["oak","walnut","white"],{...a("bed","platform","Low platform","twin","Twin","wood"),tags:`${o} bedroom bed twin low platform wood`}),r("bedroom","cuteFurniture","platformBed","platform-bed-full","Low platform full bed",158,198,["oak","walnut","white"],{...a("bed","platform","Low platform","full","Full","wood"),tags:`${o} bedroom bed full double low platform wood`}),r("bedroom","cuteFurniture","platformBed","platform-bed-queen","Low platform queen bed",188,205,["oak","walnut","white"],{...a("bed","platform","Low platform","queen","Queen","wood"),tags:`${o} bedroom bed queen low platform wood`}),r("bedroom","cuteFurniture","platformBed","platform-bed-king","Low platform king bed",226,205,["oak","walnut","white"],{...a("bed","platform","Low platform","king","King","wood"),tags:`${o} bedroom bed king low platform wood`}),r("bedroom","cuteFurniture","upholsteredBed","upholstered-bed-full","Arched upholstered full bed",158,198,["blush","lavender","cream"],{...a("bed","upholstered","Arched upholstered","full","Full","upholstery"),tags:`${o} bedroom bed full double arched headboard tufted`}),r("bedroom","cuteFurniture","upholsteredBed","upholstered-bed-queen","Arched upholstered queen bed",188,205,["blush","lavender","cream"],{...a("bed","upholstered","Arched upholstered","queen","Queen","upholstery"),tags:`${o} bedroom bed queen arched headboard tufted`}),r("bedroom","cuteFurniture","upholsteredBed","upholstered-bed-king","Arched upholstered king bed",226,205,["blush","lavender","cream"],{...a("bed","upholstered","Arched upholstered","king","King","upholstery"),tags:`${o} bedroom bed king arched headboard tufted`}),r("bedroom","cuteFurniture","storageBed","storage-bed-full","Drawer storage full bed",158,198,["oak","walnut"],{...a("bed","storage","Drawer storage","full","Full","wood"),tags:`${o} bedroom bed full double storage drawers wood`}),r("bedroom","cuteFurniture","storageBed","storage-bed-queen","Drawer storage queen bed",188,205,["oak","walnut"],{...a("bed","storage","Drawer storage","queen","Queen","wood"),tags:`${o} bedroom bed queen storage drawers wood`}),r("bedroom","cuteFurniture","storageBed","storage-bed-king","Drawer storage king bed",226,205,["oak","walnut"],{...a("bed","storage","Drawer storage","king","King","wood"),tags:`${o} bedroom bed king storage drawers wood`}),r("bedroom","cuteFurniture","canopyBed","canopy-bed-queen","Four-poster canopy queen bed",188,205,["white","brass"],{...a("bed","canopy","Four-poster canopy","queen","Queen","wood metal"),tags:`${o} bedroom bed queen four poster canopy`}),r("bedroom","cuteFurniture","canopyBed","canopy-bed-king","Four-poster canopy king bed",226,205,["white","brass"],{...a("bed","canopy","Four-poster canopy","king","King","wood metal"),tags:`${o} bedroom bed king four poster canopy`}),r("bedroom","cuteFurniture","daybed","upholstered-daybed","Upholstered twin daybed",196,105,["sage","cream"],{...a("bed","daybed","Upholstered daybed","twin","Twin","upholstery"),tags:`${o} bedroom bed twin daybed sofa bolsters`}),r("bedroom","cuteFurniture","bunkBed","slatted-bunk-bed","Slatted twin bunk bed",120,196,["oak","white"],{...a("bed","bunk","Slatted bunk","twin","Twin bunk","wood"),tags:`${o} bedroom bed twin bunk ladder rails`}),r("bedroom","cuteFurniture","sproutDesk","sprout-desk","Crafted writing desk",180,84,["sage","oak"],{...a("desk","writing","Writing desk","compact","Compact","wood"),tags:`${o} office study desk writing wood drawers`}),r("bedroom","cuteFurniture","cornerDesk","corner-desk","Corner workstation",190,146,["sage","oak"],{...a("desk","corner","Corner workstation","large","Large","wood"),tags:`${o} office study desk corner return drawers`}),r("bedroom","cuteFurniture","secretaryDesk","secretary-desk","Secretary writing desk",110,78,["oak","walnut"],{...a("desk","secretary","Secretary desk","compact","Compact","wood"),tags:`${o} office study desk secretary cubbies wood`}),r("bedroom","cuteFurniture","starNightstand","star-nightstand","Brass-knob nightstand",58,56,["butter","lavender"],{...a("nightstand","two-drawer","Two drawer","standard","Standard","wood"),tags:`${o} bedside table brass knob drawer`}),r("bedroom","cuteFurniture","honeyDresser","honey-dresser","Six-drawer dresser",125,60,["oak","peach"],{...a("dresser","six-drawer","Six drawer","wide","Wide","wood"),tags:`${o} bedroom storage dresser drawers joinery`}),r("bedroom","cuteFurniture","storyBookcase","story-bookcase","Framed bookcase",64,156,["oak","mint"],{...a("bookcase","framed","Framed bookcase","tall","Tall","wood"),tags:`${o} book shelf storage joinery`}),r("lighting","cuteLight","budLamp","bud-table-lamp","Pleated ceramic table lamp",48,52,["mint","blush","butter"],{...a("table-light","pleated-ceramic","Pleated ceramic","table","Table","ceramic brass fabric"),tags:`${o} lamp desk bedside pleated shade ceramic`,visualKind:"light",lightForm:"bud_lamp"}),r("lighting","cuteLight","cloudFloorLamp","cloud-floor-lamp","Linen globe floor lamp",58,94,["cream","sky"],{...a("floor-light","linen-globe","Linen globe","floor","Floor","brass linen"),tags:`${o} standing floor lamp linen globe`,visualKind:"light",lightForm:"cloud_floor_lamp"}),r("lighting","cuteLight","bloomCeiling","bloom-ceiling-light","Faceted glass ceiling light",60,60,["white","butter","mint"],{...a("ceiling-light","faceted-flush","Faceted flush mount","ceiling","Ceiling","glass brass"),tags:`${o} ceiling lamp faceted frosted glass flush mount`,visualKind:"light",lightForm:"bloom_ceiling",renderLayer:"ceiling-devices"}),r("lighting","cuteLight","starPendant","star-pendant","Faceted glass pendant",72,72,["lavender","butter"],{...a("pendant-light","faceted-glass","Faceted glass","ceiling","Ceiling","glass brass"),tags:`${o} ceiling pendant faceted glass`,visualKind:"light",lightForm:"star_pendant",renderLayer:"ceiling-devices"}),r("lighting","cuteLight","acornSconce","acorn-wall-sconce","Fluted brass wall sconce",38,50,["oak","cream"],{...a("wall-light","fluted-brass","Fluted brass","wall","Wall","brass glass"),tags:`${o} wall light fluted brass glass`,visualKind:"light",lightForm:"acorn_sconce",mount:"wall"});let c=Object.fromEntries(e.map(l=>[l.type,l]));(typeof window>"u"?globalThis:window).RoomcraftInventory={groups:n,templates:e,byType:c}})();var Ra="#f7efdc",YS="#cfa373",Om="#625145",$S="#b9dbe1",pf=["#5a815f","#779d69","#a4b379"],ui=["#dc9f9d","#a9baa2","#e3c076","#9db7cf","#bba6cd"];function Bm(n,t,e,i,s,r){let o=r?t*.4:e*.39,a=(l,u)=>r?new W(l*o,u,0):new W(0,u,l*o),c=new Ys([a(-1,3),a(-.66,i*.75),a(0,i),a(.66,i*.75),a(1,3)]);n.part(new Vr(c,16,Math.max(.15,Math.min(t,e)*.021),6,!1),s,0,0,0)}function ZS(n,t,e,{type:i,form:s,palette:r}){let o=Math.min(t,e),a=o*.29;if(s==="ball"||s==="texturedBall"){if(n.oval(0,a,0,a,a,a,r.base),s==="ball"){n.ring(0,a,0,a*.99,a*.99,a*.044,r.accent);let c=n.ring(0,a,0,a*.99,a*.99,a*.037,r.detail);c.rotation.z=Math.PI/2}else for(let c=0;c<22;c++){let l=(c+.5)/22,u=Math.sqrt(1-l**2)*a*.97,f=c*2.39996;n.oval(Math.sin(f)*u,a*(1+l),Math.cos(f)*u,a*.105,a*.105,a*.105,r.accent)}return a*2.2}if(s==="book"){let c=i.includes("board-book");for(let l of[-1,1]){let u=l*t*.224;n.box(u,1,0,t*.42,3.1,e*.77,r.dark,c?.8:1.5),n.box(u,3.8,0,t*.385,2.1,e*.73,Ra,.8),n.oval(u,6.05,-e*.1,t*.1,.45,e*.14,l<0?r.base:r.accent);for(let f of[0,1])n.box(u,6,e*(.1+.075*f),t*(.23-f*.04),.45,.65,r.dark,.18);if(!c)for(let f of[-1,1])n.oval(u+l*t*.19,2.8,f*e*.3,t*.055,1.6,e*.06,r.accent)}return n.box(0,1.9,0,t*.035,4,e*.78,r.base,.8),7}if(s==="cups"||s==="rings"){let c=s==="cups",l=o*(c?.088:.066);n.disc(0,0,0,a*1.14,l*.55,a*1.14,r.dark,.9);for(let u=0;u<5;u++){let f=a*(1-u*.15),h=l*(u+.55),d=[r.base,r.accent,r.detail,ui[2],ui[3]][u];c?(n.disc(0,h-.6,0,f*.91,l,f*.91,d,.91),n.ring(0,h+l*.9,0,f*.88,f*.88,l*.12,u%2?Ra:d)):n.ring(0,h+l*.36,0,f,f,l*.39,d)}return n.oval(0,l*5.46,0,a*.18,l*.55,a*.18,c?r.accent:r.dark),l*6.1}if(s==="blocks"){for(let c=0;c<3;c++){let l=(c-1)*t*.25,u=(c%2-.5)*e*.29,f=(c-1)*.17;n.box(l,0,u,t*.23,o*.24,e*.31,[r.base,r.accent,ui[2]][c],o*.038,f),n.box(l,o*.239,u,t*.14,.7,e*.19,Ra,.35,f)}return o*.26}n.ring(0,a*.32,0,a,a*.88,a*.27,r.base);for(let c=0;c<9;c++){let l=c*Math.PI*2/9;n.oval(Math.cos(l)*a,a*.66,Math.sin(l)*a*.88,a*.12,a*.095,a*.12,r.accent)}return a*.8}function jS(n,t,e,{form:i,palette:s}){let r=Math.min(t,e),o=r*.32;if(i==="tunnel"){let u=Math.min(t*.37,e*.42),f=new ze(u,u,e*.83,18,1,!0,-Math.PI/2,Math.PI);f.rotateX(-Math.PI/2);let h=n.part(f,s.base,0,2.2,0);h.material.side=Qe;for(let d=0;d<5;d++){let m=Array.from({length:9},(y,p)=>{let g=Math.PI*p/8;return new W(Math.cos(g)*u,2.2+Math.sin(g)*u,(d-2)*e*.2)});n.part(new Vr(new Ys(m),15,Math.max(.15,r*.017),6,!1),s.accent,0,0,0)}return n.box(0,0,0,u*2,2.3,e*.85,s.dark,1.1),u+r*.017+2.2}if(i==="playGym"||i==="photoWoodArch"){i==="playGym"&&(n.box(0,.5,0,t*.95,2.5,e*.88,s.accent,4),Bm(n,t,e,o,s.base,!1)),Bm(n,t,e,o,i==="photoWoodArch"?YS:s.base,!0);for(let u of[-1,1])n.box(t*.38*u,0,0,t*.11,4,e*.4,s.dark,1.6);for(let u=-1;u<=1;u++){let f=u*t*.16,h=o*(u?.94:.99),d=o*(.59+u*.045);n.box(f,d,0,1,h-d,1,Ra),n.oval(f,d,0,r*.053,r*.057,r*.049,ui[u+2])}return o+2}if(i==="mirror"){n.box(0,0,0,t*.86,4,e*.71,s.dark,2.4);let u=n.box(0,3,-e*.06,t*.75,o*.7,e*.2,s.base,3),f=n.box(0,5.1,e*.035,t*.64,o*.53,2.2,$S,.8);return u.rotation.x=f.rotation.x=-.21,o*.75+3}if(i==="largeRattle")return n.ring(-t*.19,3,0,r*.25,r*.24,r*.055,s.accent),n.box(t*.06,2,0,t*.26,2.9,e*.16,s.dark,1.2),n.oval(t*.26,r*.14,0,r*.25,r*.14,r*.24,s.base),r*.29;if(i==="sensoryBasket"){n.disc(0,0,0,t*.39,o*.55,e*.38,s.base,.74),n.disc(0,o*.52,0,t*.35,1.2,e*.34,s.dark);for(let u=1;u<=3;u++)n.ring(0,o*u*.17,0,t*(.29+u*.034),e*(.28+u*.035),.8,s.accent);for(let u=0;u<4;u++)n.oval(t*(u%2?.16:-.15),o*.67,e*(u<2?-.14:.14),r*.12,r*.12,r*.12,ui[u]);return o+3}let a=i==="photoActivityTable",l=a?o:i==="activityBoard"?o*.2:o*.72;if(a)for(let u of[-.32,.32])for(let f of[-.29,.29])n.box(t*u,0,e*f,t*.105,l,e*.125,ui[f<0?3:1],2.6);else n.box(0,0,0,t*.83,l+1,e*.83,s.base,2.8);n.box(0,l,0,t*.94,Math.max(2.5,r*.057),e*.91,s.accent,2.6);for(let u=0;u<6;u++){let f=t*(.25*(u%3)-.25),h=e*(u<3?-.2:.2),d=l+r*.056;u%3===1?n.box(f,d,h,t*.105,r*.05,e*.15,ui[u%ui.length],1.4,.24):n.disc(f,d,h,r*.081,r*(.044+u*.007),r*.072,ui[u%ui.length],.87)}return l+r*.14}function KS(n,t,e,{form:i,palette:s}){if(i==="round"){n.disc(0,.35,0,t*.48,2.1,e*.48,s.base);for(let u of[.32,.43])n.ring(0,2.53,0,t*u,e*u,.37,s.accent);return 3}if(["tummy","photoLeafMat"].includes(i)){n.box(0,.5,0,t*.97,2.3,e*.95,s.dark,1),n.box(0,1.5,0,t*.95,1.75,e*.93,s.base,.7);for(let u of[-.29,0,.29])for(let f of[-.34,-.12,.12,.34]){let h=n.oval(t*f,3.3,e*u,t*.041,.22,e*.095,s.accent);h.rotation.y=f<0?-.49:.49}return 3.6}let o=i==="photoCheckerMat",a=o?["#e3d3bc","#776056","#c0a083","#776056"]:[s.base,s.accent,s.detail,s.base],c=Math.min(t,e)*.008,l=i==="foam"?4:5;n.box(0,.25,0,t*.99,1,e*.99,s.dark,.5);for(let u=0;u<4;u++)for(let f=0;f<l;f++){let h=t*((f+.5)/l-.5),d=e*((u+.5)/4-.5),m=a[(u+(o?f:f*3))%4];n.box(h,.9,d,t/l-c,2.2,e/4-c,m,.6),i==="puzzle"&&u<3&&n.disc(h,2.6,d+e/8,t*.026,.49,e*.026,m)}return 3.4}function JS(n,t,e,{form:i,palette:s}){let r=Math.min(t,e),o=i==="tall",a=i==="rail",c=i==="vertical",l=i==="hanging";if(a&&(n.box(0,1,0,t*.92,r*.22,e*.53,s.base,2),n.box(0,r*.22,0,t*.85,2,e*.45,Om,.8)),c){for(let h of[-1,1])n.box(t*.37*h,0,-e*.29,t*.065,r*.79,e*.07,s.dark,1.2);for(let h=0;h<3;h++)n.box(0,r*(.16+.26*h),-e*.11,t*.84,2.8,e*.41,s.accent,1.2)}let u=o||l?[-.25,.25]:[-.3,0,.3],f=0;return u.forEach((h,d)=>{let m=t*h,y=c?-e*.1:e*(i==="cluster"?d===1?.21:-.11:0),p=Math.min(t*.142,e*.265,r*(o?.22:.18)),g=c?r*(.19+.26*d):l?r*.41:0,x=a?r*.25:p*(o?1.7:.87);a||(n.disc(m,g,y,p,x,p,s.base,.68),n.ring(m,g+x,y,p*.95,p*.95,.8,s.accent),n.disc(m,g+x-.72,y,p*.86,1,p*.86,Om));for(let v=0;v<7;v++){let b=v*2.39996+d,_=p*(.41+v%3*.24),M=p*((o?1.9:1.04)+v%3*.26),R=Math.cos(b)*_,S=Math.sin(b)*_,T=n.oval(m+R*.47,g+x+M*.46,y+S*.47,.7,M*.48,.7,pf[0]);T.rotation.z=-Math.atan2(R,M),T.rotation.x=Math.atan2(S,M);let I=n.oval(m+R,g+x+M,y+S,p*.39,p*.13,p*.6,pf[v%pf.length]);I.rotation.y=b,a&&v%3===0&&n.oval(m+R,g+x+M+1.1,y+S,p*.18,p*.13,p*.19,ui[(v+d)%ui.length]),f=Math.max(f,g+x+M+p*.2)}if(l){for(let v of[-1,1]){let b=n.box(m+v*p*.48,g+x+r*.24,y,.72,r*.53,.72,Ra);b.rotation.z=v*.36}f=Math.max(f,g+x+r*.53)}}),f}var QS={softToy:ZS,activityToy:jS,playMat:KS,planterSet:JS};function zm(n,t,e,i){let s=QS[i.artFamily];return s?.(n,t,e,i)}(n=>{"use strict";let t=[{type:"sofa",label:"L sofa",icon:"\u{1F6CB}",w:165,h:238,group:"living"},{type:"table",label:"Legacy dining set",icon:"\u25B0",w:165,h:108,group:"living",legacy:!0},{type:"diningTable",label:"Dining table",icon:"\u25B0",w:136,h:62,group:"living"},{type:"diningChair",label:"Dining chair",icon:"\u25D2",w:34,h:26,group:"living"},{type:"chair",label:"Chair",icon:"\u25D2",w:48,h:48,group:"living"},{type:"armchair",label:"Armchair",icon:"\u25A3",w:86,h:88,group:"living"},{type:"coffeeTable",label:"Coffee table",icon:"\u2B2D",w:105,h:66,group:"living"},{type:"sideTable",label:"Side table",icon:"\u25C9",w:55,h:55,group:"living"},{type:"tv",label:"TV",icon:"\u25AE",w:28,h:130,group:"living"},{type:"rug",label:"Rug",icon:"\u25A7",w:150,h:110,group:"living"},{type:"bed",label:"Bed",icon:"\u25A4",w:210,h:185,group:"bedroom"},{type:"desk",label:"Desk",icon:"\u25A3",w:180,h:78,group:"bedroom"},{type:"dresser",label:"Dresser",icon:"\u25A5",w:122,h:58,group:"bedroom"},{type:"nightstand",label:"Nightstand",icon:"\u25A3",w:56,h:54,group:"bedroom"},{type:"bookcase",label:"Bookcase",icon:"\u25A4",w:58,h:156,group:"bedroom"},{type:"bedroomBench",label:"Bedroom bench",icon:"\u25B0",w:52,h:122,group:"bedroom"},{type:"storageCabinet",label:"Storage cabinet",icon:"\u25A5",w:75,h:92,group:"bedroom"},{type:"counter",label:"Counter",icon:"\u25A5",w:62,h:190,group:"utility"},{type:"stool",label:"Bar stool",icon:"\u25C9",w:42,h:42,group:"utility"},{type:"kitchenWorktop",label:"Kitchen appliance worktop",icon:"\u25A6",w:106,h:127,group:"utility"},{type:"bathFixtures",label:"Bathroom fixture group",icon:"\u25EB",w:73,h:117,group:"utility"},{type:"doubleVanity",label:"Double-sink vanity",icon:"\u25A5",w:202,h:44,group:"utility"},{type:"wallUnit",label:"Wall-mounted unit",icon:"\u25B0",w:139,h:43,group:"systems",mount:"wall"},{type:"tub",label:"Bathtub",icon:"\u25A2",w:65,h:128,group:"utility"},{type:"toilet",label:"Toilet",icon:"\u25CD",w:46,h:60,group:"utility"},{type:"lamp",label:"Bedside lamp",icon:"\u263C",w:40,h:40,group:"lighting"},{type:"ceilingLight",label:"Ceiling light",icon:"\u2600",w:58,h:58,group:"lighting"},{type:"pendantLight",label:"Pendant light",icon:"\u273A",w:70,h:70,group:"lighting"},{type:"floorLamp",label:"Floor lamp",icon:"\u25C9",w:54,h:92,group:"lighting"},{type:"tableLamp",label:"Table lamp",icon:"\u25CC",w:48,h:52,group:"lighting"},{type:"wallSconce",label:"Wall sconce",icon:"\u25D6",w:34,h:48,group:"lighting",mount:"wall"},{type:"thermostat",label:"Wall thermostat / AC",icon:"\u25F4",w:48,h:54,group:"systems",mount:"wall",visualKind:"climate"},{type:"presenceSwitch",label:"Presence dimmer switch",icon:"\u283F",w:30,h:42,group:"systems",mount:"wall",visualKind:"device"},{type:"humidifier",label:"Floor humidifier",icon:"\u2668",w:46,h:58,group:"systems",visualKind:"device"},{type:"airPurifier",label:"Air purifier",icon:"\u224B",w:48,h:62,group:"systems",visualKind:"device"},{type:"windowFan",label:"Window fan",icon:"\u2723",w:46,h:46,group:"systems",visualKind:"fan"},{type:"garageDoor",label:"Garage door control",icon:"\u25A5",w:116,h:52,group:"systems",visualKind:"door"},{type:"cameraThumbnail",label:"Camera thumbnail",icon:"\u25A3",w:170,h:110,group:"security"},{type:"controlZone",label:"Invisible button area",icon:"\u25A7",w:120,h:72,group:"security"},{type:"uiWeatherOrb",label:"Sun / moon",icon:"\u2600",w:64,h:64,group:"interface"},{type:"uiMenu",label:"Device menu",icon:"\u2630",w:48,h:48,group:"interface"},{type:"uiTime",label:"Clock",icon:"\u25F7",w:84,h:42,group:"interface"},{type:"uiEdit",label:"Edit layout button",icon:"\u270E",w:48,h:48,group:"interface"},{type:"uiStatusAir",label:"Indoor air status",icon:"\u25CC",w:48,h:48,group:"interface"},{type:"uiStatusElectrical",label:"Electrical status",icon:"\u03DF",w:48,h:48,group:"interface"},{type:"plant",label:"Flowers",icon:"\u273F",w:44,h:44,group:"decor"},{type:"floorPlant",label:"Floor plant",icon:"\u2740",w:72,h:72,group:"decor"},{type:"artwork",label:"Wall art",icon:"\u25A7",w:94,h:56,group:"decor",mount:"wall"},{type:"mirror",label:"Mirror",icon:"\u25C7",w:72,h:52,group:"decor",mount:"wall"},{type:"window",label:"Window",icon:"\u25A3",w:100,h:28,group:"build"},{type:"stairs",label:"Exterior stairs",icon:"\u25A4",w:88,h:430,group:"build"}],e=[["living","Living & dining"],["bedroom","Bedroom & storage"],["utility","Kitchen & bath"],["lighting","Lights & lamps"],["systems","Climate, doors & fans"],["decor","Decor"],["build","Build"],["security","Cameras & controls"],["interface","Dashboard interface"]],i="roomcraft.studio-models.v1",s=new Set(["window","stairs","cameraThumbnail","garageDoor","presenceSwitch"]),r=H=>typeof H=="string"&&H.startsWith("ui"),o=H=>String(H??"").toLowerCase(),a=H=>o(H).split(".")[0],c=H=>typeof H=="string"&&/^[a-z_]+\.[a-z0-9_]+$/.test(H),l=H=>H.type==="window"?"wall":H.mount||"floor",u=H=>H?.type==="diningTable"||/^living-(?:petal|round|rectangular)-dining-table-/.test(H?.type),f=H=>H?.type==="diningChair"||/^living-dining-chair-/.test(H?.type),h=H=>f(H)||["chair","armchair","stool"].includes(H?.type)||/-(?:desk-chair|acorn-armchair|floor-chair)-/.test(H?.type),d=H=>Number(H.toFixed(6)),m=H=>(H%360+360)%360;function y(H){let bt=H.type==="table",K=/^living-(petal|round|rectangular)-dining-set-/.exec(H.type);if(!bt&&!K)return;let et=K?.[1],$=bt?"diningTable":H.type.replace("-dining-set-","-dining-table-"),ht=Y=>bt?"diningChair":`living-dining-chair-${Y}`,{w:yt,h:It}=H;if(bt||et==="round"){let[Y,te,Ht,B,A]=bt?[.39,.415,.2,.23,.27]:[.37,.38,.2,.2,.2];return{tableType:$,w:(bt?.79:.58)*yt,h:(bt?.57:.58)*It,tableHeight:bt?46.4:41,chairs:[[0,-It*Y,yt*Ht,It*B,0,ht("sage")],[yt*te,0,It*A,yt*(bt?.17:Ht),90,ht("butter")],[0,It*Y,yt*Ht,It*B,180,ht("blush")],[-yt*te,0,It*A,yt*(bt?.17:Ht),270,ht("lavender")]]}}let Pt=et==="rectangular",Ft=Pt?[-.32,0,.32]:[-.28,.28],Ut=[["sage","blush","lavender"],["lavender","butter","sage"]];return{tableType:$,w:.79*yt,h:.56*It,tableHeight:42.3,chairs:[-1,1].flatMap((Y,te)=>Ft.map((Ht,B)=>[yt*Ht,It*.37*Y,yt*(Pt?.15:.19),It*.23,te*180,ht(Ut[te][B])]))}}function p(H){if(!Array.isArray(H?.items))return H;let bt=new Set(H.items.map(ht=>ht.id)),K=H.items.filter(h),et=!1,$=H.items.flatMap(ht=>{let yt=y(ht);if(!yt||![ht.x,ht.y,ht.w,ht.h,ht.rotation].every(Number.isFinite)||ht.w<=0||ht.h<=0)return[ht];et=!0;let It=ht.rotation*Math.PI/180,Pt=Math.cos(It),Ft=Math.sin(It),Ut=Number.isFinite(ht.modelHeight)?ht.modelHeight:void 0,Y={...ht,type:yt.tableType,w:d(yt.w),h:d(yt.h),...Ut===void 0?{}:{modelHeight:Math.max(6,d(Ut*yt.tableHeight/59))}};return[...yt.chairs.flatMap(([Ht,B,A,it,mt,Mt],X)=>{let w=d(ht.x+Ht*Pt-B*Ft),E=d(ht.y+Ht*Ft+B*Pt),C=Math.max(8,Math.min(A,it)*.52);if(K.some(lt=>Math.hypot(lt.x-w,lt.y-E)<=C))return[];let D=`${ht.id}-chair-${X+1}`,F=D,Q=2;for(;bt.has(F);)F=`${D}-${Q++}`;bt.add(F);let J={id:F,type:Mt,name:`Dining chair ${X+1}`,x:w,y:E,w:d(A),h:d(it),rotation:m(ht.rotation+mt),entityId:"",...Ut===void 0?{}:{modelHeight:Ut},...Number.isFinite(ht.zIndex)?{zIndex:ht.zIndex}:{}};return K.push(J),[J]}),Y]});return et?{...H,items:$}:H}function g(){return{templates:[...t,...n.RoomcraftInventory?.templates||[]],paletteGroups:[...n.RoomcraftInventory?.groups||[],...e]}}function x(H,bt,K){return!(!H||!bt||!K||H.type===K.type||K.legacy||s.has(H.type)||r(H.type)||s.has(K.type)||r(K.type)||l(bt)!==l(K)||H.entityId&&!v(H.entityId,K))}function v(H,bt){return!c(H)||typeof bt?.type!="string"||bt.legacy||r(bt.type)||bt.type==="stairs"?!1:bt.type==="cameraThumbnail"?a(H)==="camera":bt.type==="garageDoor"||bt.type==="window"?["cover","binary_sensor","switch"].includes(a(H)):a(H)!=="camera"}function b(H,bt,K){if(!H||H.entityId||!v(bt,K))return!1;let et=H.type==="cameraThumbnail"?40:12,{x:$,y:ht,w:yt,h:It}=H;return $>=0&&$<=1536&&ht>=0&&ht<=1024&&yt>=et&&yt<=1536&&It>=et&&It<=1024}function _(H,bt){let K=a(H.entity_id),et=o(H.name+" "+H.entity_id),$=et.replaceAll("_"," "),ht={light:["lighting"],fan:["fans"],vacuum:["cleaning"],climate:["systems"]},yt=Pt=>{if(Pt.type==="controlZone")return!0;if(K==="camera")return Pt.type==="cameraThumbnail";if(K==="cover")return Pt.type===(/garage/.test(et)?"garageDoor":"window");if(K==="climate")return Pt.type==="thermostat";if(K==="media_player"&&/\btv\b|television/.test($))return Pt.type==="tv";if(K==="binary_sensor"){if(/presence|occupancy/.test(et))return Pt.type==="presenceSwitch";if(/garage/.test(et))return Pt.type==="garageDoor";if(/window|blind|shade/.test(et))return Pt.type==="window"}if(ht[K]?.includes(Pt.group)||/humidifier/.test(et)&&Pt.type==="humidifier"||/purifier/.test(et)&&Pt.type==="airPurifier")return!0;if(K==="switch"){if(/light|lamp/.test(et))return Pt.group==="lighting";if(/fan/.test(et))return Pt.group==="fans"||Pt.type==="windowFan"}return!1},It=bt.filter(Pt=>v(H.entity_id,Pt));return{recommended:It.filter(yt),available:It}}function M(H){let bt=new Map;for(let K of H){let et=[[K.entityId,"primary"],[K.tapEntityId,"Tap target"],[K.holdEntityId,"Hold target"],[K.presenceEntityId,"Presence sensor"],[K.presenceTrackEntityId,"Radar targets"],[K.vacuumMapEntityId,"Map camera"],[K.imageEntityId,"Event image"],...Array.isArray(K.eventEntityIds)?K.eventEntityIds.map($=>[$,"Camera event"]):[]];for(let[$,ht]of et)c($)&&(bt.has($)||bt.set($,[]),bt.get($).push({item:K,role:ht}))}return bt}function R(H){return H&&!["window","stairs","controlZone","cameraThumbnail","mirror","artwork"].includes(H.type)&&!r(H.type)}function S(H,bt,K,et){if(!["w","h"].includes(bt)||!Number.isFinite(K))return null;let $=H.type==="cameraThumbnail"?40:12,ht=H.type==="cameraThumbnail"||c(H.entityId)?{w:1536,h:1024}:{w:1/0,h:1/0};if(!et)return{[bt]:Math.min(ht[bt],Math.max($,K))};let yt=Math.min(ht.w/H.w,ht.h/H.h),It=Math.min(yt,Math.max($/H.w,$/H.h)),Pt=Math.min(yt,Math.max(It,K/H[bt]));return{w:Math.round(H.w*Pt*10)/10,h:Math.round(H.h*Pt*10)/10}}function T(H,bt,K,et){if(![bt,K,H?.w,H?.h].every(Number.isFinite)||H.w<=0||H.h<=0)return null;if(!et)return{...S(H,"w",bt,!1),...S(H,"h",K,!1)};let $=(bt*H.w+K*H.h)/(H.w**2+H.h**2);return S(H,"w",$*H.w,!0)}let I=new Set(["table","desk","dresser","nightstand","storageCabinet","coffeeTable","sideTable"]),P=new Set(["lamp","tableLamp","humidifier","plant"]),k=new Set(["sofa","bed","armchair","bookcase","bedroomBench","counter","kitchenWorktop","bathFixtures","doubleVanity","tub","toilet","floorPlant"]),z=/^(?:living-(?:petal-dining|round-dining|rectangular-dining|lily-coffee-table|bubble-side-table)|bedroom-(?:sprout-desk|corner-desk|secretary-desk|star-nightstand|honey-dresser)|play-furniture-low-play-table)-/,O=/^(?:bedroom-|living-(?:cloud-sofa|tailored-sofa|tailored-loveseat|upholstered-chaise|acorn-armchair)-|play-furniture-bear-floor-chair-)/,U=[[0,0],[1,0],[-1,0],[0,1],[0,-1],[.707,.707],[.707,-.707],[-.707,.707],[-.707,-.707]];function V(H,bt,K){if(H==="playpen"||H==="photoPlayYard"){let Ft=Math.min(bt,K)*.055;return[[0,-(K-Ft)/2,bt-Ft,Ft,0],[0,(K-Ft)/2,bt-Ft,Ft,0],[-(bt-Ft)/2,0,K-Ft,Ft,Math.PI/2],[(bt-Ft)/2,0,K-Ft,Ft,Math.PI/2]]}let et=H==="folding",$=et?4:3,ht=Math.min(et?39:29,bt*.28),yt=bt/$,It=Math.min(K*(et?.5:.73),ht*.6),Pt=et?Math.min(.18,It/yt*.85):0;return Array.from({length:$},(Ft,Ut)=>[-bt/2+yt*(Ut+.5),0,yt,It,Ut%2?-Pt:Pt])}function j(H){let{w:bt,h:K}=H,et=n.RoomcraftInventory?.byType?.[H.type];if(et?.artFamily==="foamBlock"){let yt=Math.min(1.4,Math.min(bt,K)*.021);if(["arch","tunnel","wedge","ramp"].includes(et.form)){let It=K*(et.form==="tunnel"?.83:.73);return[[0,0,bt*.91+2*yt,It+2.08*yt]]}return[[0,0,bt*(et.form==="steps"?.99:.96),K*.96]]}if(et?.form==="softPouf")return[[0,0,bt*.97,K*.97]];if(et?.form==="photoBolster")return[[0,0,bt*.96,K*.94]];if(et?.artFamily!=="paddedPanel")return null;let $=et.form;if($==="photoBearPanel")return[[0,0,bt,K*.49]];if($==="gate"||$==="guard"){let yt=Math.min(K*.55,Math.min(37,bt*.32)*.28);return[[0,0,bt*.99,yt],[-bt*.46,0,bt*.08,K*.73],[bt*.46,0,bt*.08,K*.73]]}let ht=$==="playpen"||$==="photoPlayYard";return V($,bt,K).map(([yt,It,Pt,Ft,Ut])=>[yt,It,Pt*(ht?1:.955),Ft*(ht?.5:1.28),Ut])}function dt(H){let bt=H?.type??"";return u(H)||I.has(bt)||z.test(bt)?"surface":P.has(bt)||H?.lightForm==="bud_lamp"||bt.startsWith("lighting-bud-table-lamp-")?"tabletop":"floor"}function ot(H){let bt=H.type==="humidifier"?.37:H.type==="plant"?.23:.2;return Math.min(H.w,H.h)*bt}function G(H,bt=!1){let{type:K,w:et,h:$}=H;if(u(H))return[[0,0,et,$]];if(K==="desk"||K.startsWith("bedroom-corner-desk-"))return[[0,-.33*$,et,.34*$],[-.41*et,.17*$,.18*et,.66*$],[.41*et,.17*$,.18*et,.66*$]];if(!bt&&(K==="sofa"||K.startsWith("living-cloud-sofa-")))return $>et?[[-.25*et,0,.5*et,$],[.22*et,(K==="sofa"?.3:-.3)*$,.52*et,.38*$]]:[[0,-.215*$,et,.57*$],[-.32*et,.25*$,.34*et,.46*$]];if(bt){if(K.startsWith("living-round-dining-"))return[[0,0,.58*et,.58*$]];if(K==="table"||/-dining-set-/.test(K))return[[0,0,.79*et,.56*$]];if(K.includes("-desk-"))return[[0,0,et,.85*$]]}if(!bt&&dt(H)==="tabletop"){let ht=2*ot(H);return[[0,0,ht,ht]]}return[[0,0,et*.95,$*.95]]}function q(H,bt,K){if(![H?.x,H?.y,H?.w,H?.h].every(Number.isFinite)||H.w<=0||H.h<=0)return[];let et=(Number.isFinite(H.rotation)?H.rotation:0)*Math.PI/180,$=Math.cos(et),ht=Math.sin(et);return(K??G(H,bt)).map(([yt,It,Pt,Ft,Ut=0])=>{let Y=[Math.cos(et+Ut),Math.sin(et+Ut)];return{x:H.x+yt*$-It*ht,y:H.y+yt*ht+It*$,u:Y,v:[-Y[1],Y[0]],width:Pt/2,height:Ft/2}})}let xt=(H,bt,K)=>H*K[0]+bt*K[1];function gt(H,bt){let K=bt.type.startsWith("living-round-dining-"),et=q(bt,!0),$=ot(H)*.9;return U.every(([ht,yt])=>et.some(It=>{let Pt=H.x+ht*$-It.x,Ft=H.y+yt*$-It.y,Ut=Math.abs(xt(Pt,Ft,It.u))/It.width,Y=Math.abs(xt(Pt,Ft,It.v))/It.height;return K?Math.hypot(Ut,Y)<=1:Ut<=1&&Y<=1}))}function pt(H){let bt=j(H);return bt?q(H,!1,bt):f(H)||dt(H)!=="floor"||k.has(H.type)||O.test(H.type)?q(H,!1):[]}function at(H){return dt(H)==="tabletop"||H.type==="rug"||H.type.startsWith("baby-mats-")?[]:["chair","stool","tv"].includes(H.type)||/(?:desk-chair|toy-storage|fireplace|floor-chair)/.test(H.type)||H.type.startsWith("pets-")?q(H,!1):pt(H)}function St(H,bt){let K=(et,$)=>et.width*Math.abs(xt(...et.u,$))+et.height*Math.abs(xt(...et.v,$));return Math.min(...[H.u,H.v,bt.u,bt.v].map(et=>K(H,et)+K(bt,et)-Math.abs(xt(H.x-bt.x,H.y-bt.y,et))))}function Z(H,bt){let[K]=q(H,!1),[et]=q(bt,!0);if(!K||!et||St(K,et)<=0)return!1;let $=[K.x-et.x,K.y-et.y],ht=xt(...$,et.u)/et.width,yt=xt(...$,et.v)/et.height,It=bt.type.startsWith("living-round-dining-"),Pt;if(It){if(Math.hypot(ht,yt)<1)return!1;Pt=-xt(...$,K.v)/Math.hypot(...$)}else{let Ht=Math.abs(ht)>=1,B=Math.abs(yt)>=1;if(Ht===B)return!1;Pt=-Math.sign(Ht?ht:yt)*xt(...K.v,Ht?et.u:et.v)}if(Pt<.8)return!1;let Ft=bt.type==="diningTable",Ut=Ft?46.4:It?41:42.3,Y=(bt.modelHeight??Ut)*(Ft?32:33)/Ut;return(H.modelHeight??59)*30/59<Y}function rt(H,bt,K,et){let $=0;for(let It of K)for(let Pt of et)$=Math.max($,St(It,Pt));if($<=2)return $;let ht=dt(H),yt=dt(bt);return ht==="tabletop"&&yt==="surface"&&gt(H,bt)||ht==="surface"&&yt==="tabletop"&&gt(bt,H)||f(H)&&u(bt)&&Z(H,bt)||u(H)&&f(bt)&&Z(bt,H)?0:$}function wt(H,bt,K){let et=pt(H);if(!et.length)return;let $=K?pt(K):[],ht,yt=2;for(let It of bt){if(It.id===H.id)continue;let Pt=pt(It),Ft=rt(H,It,et,Pt);Ft<=yt||$.length&&Ft<=rt(K,It,$,Pt)+.02||(ht=It,yt=Ft)}return ht}function Lt(H){let bt=H.filter(yt=>dt(yt)==="surface"),K=bt.filter(u),et=new Set,$=new Map,ht=new Map;for(let yt of H){let It=f(yt);if(!It&&dt(yt)!=="tabletop")continue;let Pt=It?K.find(Ut=>Z(yt,Ut)):bt.find(Ut=>gt(yt,Ut));if(!Pt)continue;et.add(yt.id);let Ft=It?ht:$;Ft.has(Pt.id)||Ft.set(Pt.id,[]),Ft.get(Pt.id).push(yt)}return et.size?H.flatMap(yt=>et.has(yt.id)?[]:[...ht.get(yt.id)??[],yt,...$.get(yt.id)??[]]):H}function Nt(H,bt,K){let et=H.ownerDocument,$=(E,C,D={})=>{let F=et.createElement(E);C&&(F.textContent=C);for(let[Q,J]of Object.entries(D))F.setAttribute(Q,J);return F},ht=$("dialog","",{class:"model-library","aria-label":"Objects and models"}),yt=$("header"),It=$("h2","Objects & models"),Pt=$("button","Close",{type:"button"});yt.append(It,Pt);let Ft=$("div","",{class:"model-library-filters"}),Ut=$("select","",{"aria-label":"Object library section"});for(let[E,C]of[["placed","On the plan"],["catalog","Add objects"],["devices","Home Assistant devices"]])Ut.append($("option",C,{value:E}));let Y=$("input","",{type:"search",placeholder:"Search\u2026","aria-label":"Search objects, devices, or models"});Ft.append(Ut,Y);let te=$("div","",{class:"model-library-context"}),Ht=$("p","",{role:"status",class:"model-library-status"}),B=$("div","",{class:"model-library-list"});ht.append(yt,Ft,te,Ht,B);let A=$("style");A.textContent=`
      .model-library{box-sizing:border-box;width:min(680px,calc(100% - 24px));max-height:min(82dvh,800px);padding:18px;
        border:1px solid #cdd6c9;border-radius:16px;background:#fbfaf5;color:#243b32;
        font:500 14px/1.35 system-ui,sans-serif;box-shadow:0 18px 70px #13241d55;overflow:auto}
      .model-library::backdrop{background:#182b29a3}
      .model-library header,.model-library-filters,.model-library-context,.model-library-row,.model-library-actions{
        display:flex;align-items:center;gap:9px}
      .model-library header,.model-library-row{justify-content:space-between}
      .model-library h2{font-size:20px;margin:0}
      .model-library button,.model-library select,.model-library input{box-sizing:border-box;min-height:42px;padding:7px 11px;
        border:1px solid #cad6cc;border-radius:8px;background:#fff;color:inherit;font:inherit}
      .model-library button{cursor:pointer;background:#eaf1e9}
      .model-library button:hover{background:#dcebdc}
      .model-library :focus-visible{outline:2px solid #37736a;outline-offset:2px}
      .model-library-filters{margin-top:12px}
      .model-library input{min-width:0;flex:1}
      .model-library-context{flex-wrap:wrap;margin-top:8px}
      .model-library-context:empty{display:none}
      .model-library-status{font-size:12px;margin:9px 0;color:#526357}
      .model-library-list{display:grid;gap:6px}
      .model-library-row{min-width:0;padding:8px;border:1px solid #e6eadf;border-radius:9px;background:#fff}
      .model-library-row strong,.model-library-row small{display:block;overflow-wrap:anywhere}
      .model-library-row small{color:#59695e;margin-top:2px}
      .model-library-actions{justify-content:flex-end;flex-wrap:wrap}
      @media(max-width:520px){.model-library-row,.model-library-filters{align-items:stretch;flex-direction:column}
        .model-library-actions{justify-content:flex-start}}
    `,H.append(A,ht);let it,mt=!1,Mt=(E,C)=>{let D=$("button",E,{type:"button"});return D.addEventListener("click",C),D};function X(E){it=E,mt=!1,Ut.value=E.existing?"placed":"catalog",Y.value="",w(),Y.focus()}function w(){let{templates:E,paletteGroups:C}=g(),D=new Map(E.map(L=>[L.type,L])),F=new Map(C),{items:Q,entities:J}=bt(),lt=o(Y.value).trim(),ft=(...L)=>lt.split(/\s+/).every(tt=>o(L.join(" ")).includes(tt)),Ct=[];if(te.replaceChildren(),it&&(te.append($("strong",it.item?.name||it.entity?.name||it.entity?.entity_id)),it.entity&&(te.append(Mt(it.existing?"Choose a new model":"Bind existing object",()=>{X({entity:it.entity,existing:!it.existing})})),it.existing||te.append(Mt(mt?"Suggested models":"All compatible models",()=>{mt=!mt,w()}))),te.append(Mt("Cancel mapping",()=>{Ut.value=it.entity?"devices":"placed",it=void 0,Y.value="",w()}))),Ut.value==="placed")for(let L of Q){let tt=D.get(L.type);if(!ft(L.name,tt?.label,L.type,L.entityId))continue;let nt=[L.w,L.h,L.modelHeight].filter(Number.isFinite).join(" \xD7 "),At=[tt?.label||L.type,nt&&nt+" plan px",L.entityId].filter(Boolean).join(" \xB7 "),Rt;if(it?.existing){if(!b(L,it.entity.entity_id,tt))continue;Rt=[Mt("Bind to this object",()=>K({kind:"bind",itemId:L.id,entityId:it.entity.entity_id}))]}else Rt=[Mt("Edit",()=>K({kind:"edit",itemId:L.id}))],E.some(Tt=>x(L,tt,Tt))&&Rt.push(Mt("Change model",()=>X({item:L})));Ct.push([L.name||tt?.label||L.type,At,Rt])}else if(Ut.value==="devices"){let L=M(Q);for(let tt of J){if(!c(tt.entity_id)||!ft(tt.name,tt.entity_id,tt.area))continue;let nt=L.get(tt.entity_id)||[],At=nt.find(zt=>zt.role==="primary"),Rt=nt.map(({item:zt,role:le})=>le==="primary"?zt.name:le+" for "+zt.name),Tt=[tt.entity_id,tt.area,...Rt].filter(Boolean).join(" \xB7 "),Ot=nt.length?[Mt(At?"Edit mapped object":"Edit linked object",()=>K({kind:"edit",itemId:(At||nt[0]).item.id}))]:[];E.some(zt=>v(tt.entity_id,zt))&&Ot.push(Mt(At?"Map again":"Map to object",()=>X({entity:tt,existing:Q.some(zt=>b(zt,tt.entity_id,D.get(zt.type)))}))),Ct.push([tt.name||tt.entity_id,Tt,Ot])}}else{let L=E.filter(tt=>!tt.legacy);if(it?.item&&(L=E.filter(tt=>x(it.item,D.get(it.item.type),tt))),it?.entity){let tt=_(it.entity,E);L=mt?tt.available:tt.recommended}for(let tt of L){let nt=F.get(tt.group)||tt.group;if(!ft(tt.label,tt.type,tt.tags,nt))continue;let At=it?.item?{kind:"replace",itemId:it.item.id,modelId:tt.type}:{kind:"place",modelId:tt.type,...it?.entity?{entityId:it.entity.entity_id}:{}};Ct.push([tt.label,nt+" \xB7 "+tt.w+" \xD7 "+tt.h+" plan px",[Mt(it?"Use model":"Place",()=>K(At))]])}}B.replaceChildren();for(let[L,tt,nt]of Ct.slice(0,48)){let At=$("div","",{class:"model-library-row"}),Rt=$("div");Rt.append($("strong",L),$("small",tt));let Tt=$("div","",{class:"model-library-actions"});Tt.append(...nt),At.append(Rt,Tt),B.append(At)}Ht.textContent=Ct.length>48?"Showing 48 of "+Ct.length+". Search to narrow the list.":Ct.length?Ct.length+(Ct.length===1?" result":" results"):Ut.value==="devices"&&!J.length?"Connect to Home Assistant to list devices.":it?.existing&&!lt?"No compatible unbound objects. Choose a new model instead.":"No matches."}return Ut.addEventListener("change",()=>{it=void 0,Y.value="",w()}),Y.addEventListener("input",w),Pt.addEventListener("click",()=>ht.close()),{open(E="placed"){it=void 0,mt=!1,Ut.value=E,Y.value="",w(),ht.open||ht.showModal()},get isOpen(){return ht.open},close(){ht.open&&ht.close()}}}n.RoomcraftModels=Object.freeze({catalog:g,canMap:v,canBind:b,canReplace:x,suggestions:_,supportsHeight:R,resizeFootprint:S,resizeCornerFootprint:T,splitDiningFurniture:p,placementRole:dt,specialtyBarrierSections:V,walkingObstacleBoxes:at,blockingPlacement:wt,orderMountedObjects:Lt,mount:Nt,handoffKey:i})})(typeof window>"u"?globalThis:window);var Hm=["#e9a1ad","#f4eee0","#b7cf84","#e8d081","#80b7ce","#b993c7"],t2=["#e9ad9c","#e2cb87","#9db9a3"],Gm=["#725746","#8d6b55","#65534b","#91755f"],e2=new Set(["wedge","ramp","arch","tunnel"]);function mf(n,t,e,i,s,r,o,a=0){let c=new xi(t,{depth:e,curveSegments:10,steps:1,bevelEnabled:a>0,bevelSize:a,bevelThickness:a,bevelSegments:2});return c.translate(0,0,-e/2),n.part(c,i,s,r,o)}function Vm(n,t,e,i){let s=Math.cos(i),r=Math.sin(i),o=(a,c)=>[t+a*s+c*r,e-a*r+c*s];return{box(a,c,l,u,f,h,d,m=0){let[y,p]=o(a,l);n.box(y,c,p,u,f,h,d,m,i)},bead(a,c,l,u,f){let[h,d]=o(a,l);n.oval(h,c,d,u,u,u,f)}}}function Wm(n,t,e,i,s,r,o,a,c){let l=Vm(n,t,e,i),u=o*.43,f=r*.1,h=s*.4;l.box(0,r-f,0,s*.98,f,u,a,f*.43),l.box(0,0,0,s*.99,f,u,a,f*.34);for(let d of[-1,1])l.box(d*h,f*.65,0,s*.17,r*.83,u,a,3),l.box(d*s*.475,r*.3,0,s*.055,r*.17,u*1.14,c,1.4),l.box(d*s*.23,r*.17,0,s*.1,r*.55,u*.84,a,2.1),l.bead(d*s*.088,r*.61,u*.33,Math.min(r,s)*.05,a),l.bead(d*s*.043,r*.53,u*.49,Math.min(r,s)*.018,c);l.box(0,r*.27,0,s*.2,r*.46,u*.96,a,3.4),l.box(0,r*.43,u*.52,s*.088,r*.066,u*.15,c,1.3)}function n2(n,t,e,i,s){let r=Math.min(38,Math.min(t,e)*.3),{specialtyBarrierSections:o}=(typeof window>"u"?globalThis:window).RoomcraftModels;for(let[a,[c,l,u,f,h]]of o("playpen",t,e).entries()){let d=a>=2?3:4,m=u/d;for(let y=0;y<d;y++){let p=-m*(d-1)/2+y*m,g=s?Hm[(y+a*2)%Hm.length]:y%2?i.accent:i.base;Wm(n,c+p*Math.cos(h),l+p*Math.sin(h),-h,m,r,f,g,"#c1b9b0")}}return r}function i2(n,t,e,{form:i,palette:s}){if(i==="photoPlayYard"||i==="playpen")return n2(n,t,e,s,i==="photoPlayYard");if(i==="photoBearPanel"){let u=Math.min(37,t*.42);return Wm(n,0,0,0,t,u,e,s.base,s.dark),u}if(i==="gate"||i==="guard"){let u=Math.min(37,t*.32),f=Math.min(e*.55,u*.28);for(let d of[-1,1])n.box(d*t*.46,0,0,t*.07,u,f,s.dark,1.5),n.box(d*t*.46,u*.08,0,t*.08,u*.08,e*.73,s.base,1.4);for(let d of[u*.11,u*.88])n.box(0,d,0,t*.88,u*.085,f*.74,s.accent,1.2);let h=i==="guard"?13:8;for(let d=0;d<h;d++){let m=t*(.79*d/(h-1)-.395);n.box(m,u*.16,0,t*.027,u*.77,f*.47,s.base,.8)}return n.box(t*.39,u*.74,f*.3,t*.09,u*.11,f*.53,s.detail,1.7),u}let r=i==="folding",o=Math.min(r?39:29,t*.28),a=[s.base,s.accent,s.detail],{specialtyBarrierSections:c}=(typeof window>"u"?globalThis:window).RoomcraftModels,l=c(i,t,e);for(let[u,[f,h,d,m,y]]of l.entries()){let p=Vm(n,f,h,-y);if(p.box(0,0,0,d*.955,o,m,s.dark,3.7),p.box(0,o*.07,m*.14,d*.87,o*.86,m*.87,a[u%3],3.4),i==="quilted")for(let g of[-.26,0,.26])p.box(g*d,o*.16,m*.59,d*.22,o*.67,m*.09,s.base,2.6);r&&u<l.length-1&&p.box(d*.48,o*.38,0,d*.09,o*.24,m*.92,s.dark,1.2)}return o}function s2(n,t,e,i){let s=new ln;return e?(s.moveTo(-n/2,0),s.lineTo(-n/2,t*.34),s.bezierCurveTo(-n/2,t*1.18,n/2,t*1.18,n/2,t*.34),s.lineTo(n/2,0),s.lineTo(n*.29,0),s.lineTo(n*.29,t*.32),s.bezierCurveTo(n*.29,t*.83,-n*.29,t*.83,-n*.29,t*.32),s.lineTo(-n*.29,0)):(s.moveTo(-n/2,0),s.lineTo(n/2,0),s.lineTo(n/2,t),s.lineTo(-n/2,t*(i?.18:.08))),s.closePath(),s}function r2(n,t,e,{type:i,form:s,palette:r}){let o=Math.min(t,e),a=i.endsWith("-rainbow")?t2:[r.accent,r.base,r.dark];if(s==="steps"){let l=Math.min(44,o*.48),u=t/3;for(let f=0;f<3;f++){let h=u*(f-1),d=l*(f+1)/3;n.box(h,0,0,u*.98,d,e*.94,a[f],3.7),n.box(h,d*.86,0,u*.96,d*.055,e*.945,r.detail,1.1)}return l}if(e2.has(s)){let l=s==="arch"||s==="tunnel",u=s==="ramp",f=Math.min(l?53:u?28:44,o*(l?.65:u?.32:.49)),h=s2(t*.91,f,l,u),d=Math.min(1.4,o*.021),m=s==="tunnel"?e*.83:e*.73;mf(n,h,m,a[1],0,d,0,d);for(let y of[-1,1])mf(n,h,d,a[y<0?0:2],0,d,y*m*.5,d*.54);return f+d*2}let c=Math.min(46,o*.62);return n.box(0,0,0,t*.95,c,e*.95,r.base,5),n.box(0,c*.08,0,t*.959,c*.07,e*.959,r.dark,1.8),n.box(0,c*.87,0,t*.955,c*.055,e*.955,r.accent,1.5),c}function o2(n,t,e,i){let s=Math.min(38,t*.35),r=Math.min(e*.31,t*.065);n.box(0,2,0,t*.95,s*.92,r*.35,"#33343a",2);for(let o of[-.47,.47])n.box(t*o,0,0,t*.035,s,r,i.dark,1.8),n.box(t*o,0,0,t*.068,s*.08,e*.74,i.dark,1.3);for(let o=-5;o<=5;o++)n.box(t*o*.077,2,r*.25,t*.008,s*.85,r*.15,i.accent,.42);for(let o of[.06,.28,.51,.74,.96])n.box(0,s*o,r*.3,t*.93,s*(o===.96?.06:.027),r*.21,i.base,.55);return s}function a2(n,t,e,{form:i,palette:s}){if(i==="screen")return o2(n,t,e,s);let r=i==="photoTiledMantel",o=i!=="hearth",a=Math.min(o?54:39,t*.37),c=e*.16,l=r?"#e6ded0":s.base,u=o?s.accent:s.dark,f=t*.59,h=a*.57;n.box(0,0,e*.05,t*.96,a*.09,e*.83,l,2.6),n.box(0,a*.08,-e*.28,t*.87,a*.81,e*.27,s.dark,2.2),n.box(0,a*.09,-e*.12,f,h,e*.12,"#29272b",1.7);for(let d of[-1,1])n.box(d*t*.383,a*.08,-c,t*.135,a*.78,e*.35,l,2.7),n.box(d*t*.3,a*.11,-c*.03,t*.014,h,e*.04,"#bc925f",.75);if(n.box(0,a*.65,-c,t*.78,a*.2,e*.35,l,2.6),r||!o){let d=t*.095;for(let m=-4;m<=4;m++)n.box(m*d,a*.68,-e*.014,d*.94,a*.146,e*.077,r?Gm[(m+4)%Gm.length]:s.accent,1)}n.box(0,a*.84,-e*.14,t*.9,a*.09,e*.43,u,2.1),n.box(0,a*.93,-e*.12,t*.99,a*.075,e*.51,r?"#f3ece3":s.detail,1.8);for(let d=-1;d<=1;d++)n.box(d*t*.11,a*(.13+Math.abs(d)*.02),e*.03,t*.25,a*.065,e*.1,d?"#785141":"#ad7e5b",1.7,d*.36);return a}function c2(n,t,e,{form:i,palette:s}){let r=Math.min(t,e);if(i==="photoBolster"){let a=Math.min(25,r*.62);n.box(0,0,0,t*.96,a,e*.91,s.base,a*.37);for(let c of[-1,1])n.box(c*t*.39,a*.12,0,t*.017,a*.78,e*.94,s.accent,2.3);return a}let o=Math.min(31,r*.41);return n.disc(0,0,0,t*.43,o*.17,e*.43,s.dark,.94),n.oval(0,o*.48,0,t*.48,o*.47,e*.48,s.base),n.ring(0,o*.4,0,t*.477,e*.477,Math.min(1.1,r*.025),s.accent),n.oval(0,o*.82,0,t*.26,o*.1,e*.26,s.accent),o}function l2(n,t,e,i,s){let r=i==="mirror",o=Math.min(r?45:39,Math.max(6,e*.66)),a=Number.isFinite(s)?Math.max(0,s-o/2):0,c=Math.min(5.5,e*.27),l=c*.56;n.box(0,a,0,t*.95,o,c,r?"#8b6b54":"#694e3e",2.7),n.box(0,a+o*.065,l,t*.89,o*.87,c*.26,r?"#d8b88e":"#ead8b8",1.4);let u=t*.81,f=o*.73,h=a+o*.14;n.box(0,h,l*1.31,u,f,c*.16,r?"#a7c4ce":"#c4d3b6",1.15);let d=new ln;return r?(d.moveTo(-u*.45,0),d.lineTo(-u*.19,0),d.lineTo(u*.14,f),d.lineTo(-u*.02,f)):(d.moveTo(-u/2,0),d.lineTo(-u/2,f*.19),d.quadraticCurveTo(-u*.28,f*.86,-u*.07,f*.4),d.quadraticCurveTo(u*.24,f*.18,u/2,f*.48),d.lineTo(u/2,0)),d.closePath(),mf(n,d,c*.035,r?"#e5eff0":"#759899",0,h,l*1.49),r||n.oval(u*.28,h+f*.76,l*1.51,f*.1,f*.1,c*.045,"#f0cb8c"),a+o}function Xm(n,t,e,i,{mountY:s}={}){switch(i?.artFamily){case"paddedPanel":return i2(n,t,e,i);case"foamBlock":return r2(n,t,e,i);case"fireplace":return a2(n,t,e,i);case"playFurniture":if(i.form==="softPouf"||i.form==="photoBolster")return c2(n,t,e,i);break;default:if(i?.type==="artwork"||i?.type==="mirror")return l2(n,t,e,i.type,s)}}var ct=Object.freeze({ink:"#493e51",oak:"#c89468",oakLight:"#e1b184",walnut:"#9e715d",sage:"#98ad83",moss:"#708a73",linen:"#f3e6cd",cream:"#fff4df",blush:"#dca3a0",peach:"#edc1a7",honey:"#dcb575",sand:"#e2c5a0",lilac:"#aca0c8",lilacLight:"#d7c9e1",blue:"#81a6b5",aqua:"#b4d6d3",ceramic:"#f2e6e0",shadow:"#a38898",glass:"#577b91",darkGlass:"#344459",brass:"#c39257",binding:"#b29386",blueWater:"#9ac3bf",oatmeal:"#dac3a4",upholsteryShadow:"#bca087",denim:"#58637b",steel:"#bbc9cd",basinSteel:"#879aa4"}),u2=Object.freeze({sage:ct.sage,mint:ct.aqua,sky:ct.blue,peach:ct.peach,coral:"#cf8979",lavender:ct.lilac,butter:ct.honey,cream:ct.linen,white:ct.cream,oak:ct.oakLight,walnut:ct.walnut,charcoal:"#505b68",brass:ct.brass,terracotta:"#b97d63",forest:ct.moss,blush:ct.blush,teddy:"#aa8063",slate:"#9b9b9d"}),h2=new Set([ct.oak,ct.oakLight,ct.walnut]),f2=new Set([ct.sage,ct.moss,ct.linen,ct.lilac,ct.lilacLight,ct.blush,ct.peach,ct.oatmeal,ct.upholsteryShadow,ct.denim]);function d2(n,t){let e=h2.has(n)?1:f2.has(n)?2:0,i=n===ct.glass||n===ct.darkGlass||n===ct.blueWater,s=n===ct.brass,r=n===ct.steel||n===ct.basinSteel,o=new He({color:n,roughness:s||r?.37:i?.33:n===ct.ceramic?.44:e===1?.64:.89,metalness:s?.42:r?.28:0});return e&&(o.onBeforeCompile=a=>{a.uniforms.furnitureDetail={value:e},a.uniforms.furnitureGrainDirection={value:t},a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
varying vec3 furnitureSurfacePosition;`).replace("#include <begin_vertex>",`#include <begin_vertex>
furnitureSurfacePosition = position;`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 furnitureSurfacePosition;
        uniform float furnitureDetail;
        uniform float furnitureGrainDirection;`).replace("#include <color_fragment>",`#include <color_fragment>
        vec3 localPoint = furnitureSurfacePosition;
        float lengthwise = mix(localPoint.x, localPoint.z, furnitureGrainDirection);
        float crosswise = mix(localPoint.z, localPoint.x, furnitureGrainDirection);
        float pixelSize = max(fwidth(lengthwise), fwidth(crosswise));
        float grain = 0.0;
        if (furnitureDetail < 1.5) {
          float warp = 1.3*sin(lengthwise*.054) + .45*sin(lengthwise*.143);
          float fine = sin((crosswise + warp)*2.1) * (1.0-smoothstep(.55, 2.4, pixelSize));
          grain = .048*fine + .037*sin((crosswise + warp)*.38);
        } else {
          float weave = sin(localPoint.x*2.4) * sin((localPoint.z + localPoint.y)*2.4);
          grain = .035 * weave * (1.0-smoothstep(.5, 1.8, pixelSize));
        }
        diffuseColor.rgb *= 1.0 + grain;`)}),o}var gf=class{constructor(t,e){this.root=new ee,this.materials=new Map,this.grainDirection=e>t?1:0}part(t,e,i,s,r,o=0){this.materials.has(e)||this.materials.set(e,d2(e,this.grainDirection));let a=new ae(t,this.materials.get(e));return a.position.set(i,s,r),a.rotation.y=o,this.root.add(a),a}box(t,e,i,s,r,o,a,c=0,l=0){s=Math.max(.1,s),o=Math.max(.1,o);let u=Math.min(c,s*.42,r*.42,o*.42),f=u>.2?new Kl(s,r,o,2,u):new Te(s,r,o);return this.part(f,a,t,e+r/2,i,l)}disc(t,e,i,s,r,o,a,c=1){let l=new ze(1,c,r,20);return l.scale(s,1,o),this.part(l,a,t,e+r/2,i)}oval(t,e,i,s,r,o,a){let c=new Ae(1,12,8);return c.scale(s,r,o),this.part(c,a,t,e,i)}ring(t,e,i,s,r,o,a){let c=new bn(1,o/Math.min(s,r),6,24);return c.rotateX(-Math.PI/2),c.scale(s,1.5,r),this.part(c,a,t,e,i)}basin(t,e,i,s,r,o){let a=[[0,0],[.74,0],[.94,.2],[1,.72],[.96,1],[.83,1],[.78,.64],[.56,.28],[.22,.25],[0,.25]].map(([l,u])=>new kt(l,u)),c=new sa(a,24);return c.scale(s,r,o),this.part(c,ct.ceramic,t,e,i)}finish(t){let e=new Map;for(let i of[...this.root.children]){let s=i.geometry,r=s.index?s.toNonIndexed():s;r!==s&&s.dispose(),i.updateMatrix(),r.applyMatrix4(i.matrix),e.has(i.material)||e.set(i.material,[]),e.get(i.material).push(r),this.root.remove(i)}for(let[i,s]of e){let r=s.length===1?s[0]:$n(s);s.length>1&&s.forEach(a=>a.dispose());let o=new ae(r,i);o.castShadow=o.receiveShadow=!0,this.root.add(o)}return{root:this.root,anchorY:t}}};function es(n,t,e,i,s,r,o=ct.walnut){let a=Math.min(4.5,i*.07,s*.12);for(let c of[-.36,.36])for(let l of[-.36,.36])n.disc(t+i*c,0,e+s*l,a,r,a,o,.68)}function Ca(n,t,e,i,s,r,o,a){let c=o===ct.linen?ct.binding:ct.blush;n.box(t,e,i,s,8,r,c,3.2,a),n.box(t,e+2.1,i,s-2.6,7.4,r-2.6,o,3.2,a)}function p2(n,t,e,i,s){let r=s==="sofa"||s.includes("cloud-sofa"),o=r&&e>t,a=s==="sofa",c=a?1:-1,l=a?ct.upholsteryShadow:ct.moss,u=a?ct.oatmeal:ct.sage,f=o?t*.5:t,h=r&&!o?e*.57:e,d=o?-t*.25:0,m=r&&!o?-e*.215:0,y=Math.min(t,e)*.1;if(es(n,d,m,f,h,5),n.box(d,5,m,f*.97,22,h*.98,l,8),r){let _=o?t*.52:t*.34,M=o?e*.38:e*.46,R=o?t*.22:-t*.32,S=o?c*e*.3:e*.25;es(n,R,S,_,M,5),n.box(R,5,S,_,22,M,l,8),n.box(R,25,S,_*.96,12,M*.9,i,5),o&&n.box(R,29,c*e*.464,_,26,y,u,6)}let p=s.includes("loveseat")||s.includes("chaise")?2:3;if(o){let _=e*.88/p;for(let M=0;M<p;M++){let R=-e*.44+_*(M+.5);n.box(d+y*.18,25,R,f*.76,12,_-3,i,5),n.box(d-f*.39,27,R,f*.22,31,_-1,u,8)}n.box(d,29,-c*e*.445,f*.88,20,y,u,6),Ca(n,d+f*.13,35,-e*.31,f*.42,_*.49,a?ct.sage:ct.peach,-.18),Ca(n,d+f*.12,35,e*.28,f*.4,_*.45,ct.linen,.2)}else{let _=t*.8/p;for(let M=0;M<p;M++){let R=-t*.4+_*(M+.5);n.box(R,25,m+h*.08,_-3,12,h*.7,i,6),n.box(R,27,m-h*.39,_-1,31,h*.24,u,7)}for(let M of[-t*.442,t*.442])n.box(M,26,m,y,22,h*.89,u,6);Ca(n,-t*.27,35,m-h*.15,t*.18,h*.34,ct.peach,-.18),Ca(n,t*.27,35,m-h*.12,t*.17,h*.33,ct.linen,.2)}let g=o?f*.67:f*.19,x=o?e*.14:h*.58,v=o?d+f*.06:f*.32,b=o?e*.13:m+h*.1;n.box(v,37.1,b,g,1.7,x,ct.lilacLight,.65);for(let _ of[-1,1])n.box(v,38.82,b+_*x*.36,g*.9,.25,1.2,ct.lilac);return 58}function Si(n,t,e,i,s,r,o,a=!1){let c=a?19:28;es(n,t,e,i,s,c,ct.walnut),n.box(t,c,e,i*.9,7,s*.92,ct.walnut,2),n.box(t,c+5,e,i*.83,8,s*.83,o,3);let l=Math.abs(r)===Math.PI/2,u=t-Math.sin(r)*(l?i:s)*.39,f=e-Math.cos(r)*s*.39;n.box(u,c+9,f,l?s*.2:i*.84,22,l?s*.82:s*.22,o,4)}function m2(n,t,e,i){let s=-e*.39;es(n,0,0,t,e,20,ct.walnut),n.box(0,20,0,t*.9,6,e*.92,ct.walnut,2),n.box(0,24,0,t*.83,6,e*.83,i,2.5);for(let r of[-1,1])n.box(t*.34*r,23,s,t*.075,18,e*.12,ct.walnut,1.1);return n.box(0,37,s,t*.84,22,e*.22,i,4),59}function Jl(n,t,e,i,s){return s==="round"?(n.disc(0,0,0,t*(.13/.58),5,e*(.13/.58),ct.walnut),n.disc(0,4,0,t*(.045/.58),31,e*(.045/.58),ct.walnut,1.5),n.disc(0,33,0,t/2,8,e/2,i,.96),41):s==="classic"?(es(n,0,0,t*(.69/.79),e*(.49/.57),35),n.box(0,32,0,t*(.72/.79),6,e*(.5/.57),ct.walnut,3),n.box(0,37,0,t,8,e,i,4),n.box(0,45,0,t*(.69/.79),1.4,e*(.14/.57),ct.linen,.6),46.4):(es(n,0,0,t*(.69/.79),e*(.47/.56),34),n.box(0,33,0,t,8,e,i,3),n.box(0,41.1,0,t*(.55/.79),1.2,e*(.15/.56),ct.linen,.5),42.3)}function g2(n,t,e,i,s){let r=s.includes("round-dining"),a=!s.includes("rectangular-dining");if(s==="table")return Si(n,0,-e*.39,t*.2,e*.23,0,ct.denim),Si(n,0,e*.39,t*.2,e*.23,Math.PI,ct.denim),Si(n,-t*.415,0,t*.17,e*.27,Math.PI/2,ct.denim),Si(n,t*.415,0,t*.17,e*.27,-Math.PI/2,ct.denim),Jl(n,t*.79,e*.57,ct.oak,"classic");if(r)Si(n,0,-e*.37,t*.2,e*.2,0,ct.sage),Si(n,0,e*.37,t*.2,e*.2,Math.PI,ct.blush),Si(n,-t*.38,0,t*.2,e*.2,Math.PI/2,ct.lilac),Si(n,t*.38,0,t*.2,e*.2,-Math.PI/2,ct.honey),Jl(n,t*.58,e*.58,i,"round");else{let c=a?[-.28,.28]:[-.32,0,.32],l=[ct.sage,ct.blush,ct.lilac,ct.honey];for(let u=0;u<c.length;u++)for(let f of[-1,1])Si(n,t*c[u],e*.37*f,t*(a?.19:.15),e*.23,f<0?0:Math.PI,l[(u+(f<0?0:2))%l.length]);Jl(n,t*.79,e*.56,i,"styled")}return 42}function y2(n,t,e,i,s,r){n.box(t,e,i,s*.31,2,r*.5,ct.ink,.5),n.box(t,e+1,i,s*.1,14,4,ct.ink,1),n.box(t,e+12,i,s,25,6,ct.ink,2),n.box(t,e+14,i+3.1,s*.91,21,1,ct.glass,.4),n.box(t-s*.25,e+28,i+3.7,s*.28,2,.5,ct.blue,.2)}function x2(n,t,e,i,s){let r=s?e*.34:e*.85,o=s?-e/2+r/2:0,a=t*.18;n.box(0,37,o,t,7,r,i,2.4);for(let c of[-1,1]){let l=c*(t-a)/2,u=s?e-r:e*.58,f=s?r/2:0;s&&n.box(l,37,f+.8,a,7,u-1.6,i,2.4),n.box(l,4,f,a*.81,34,u*.81,ct.walnut,2.8);for(let h=0;h<3;h++){let d=6+h*9.7;n.box(l,d,f+u*.41,a*.74,8.4,2,ct.oak,.7),n.box(l,d+3,f+u*.43,a*.26,2,2,ct.brass,.5)}}return y2(n,-t*.02,44,o-r*.22,t*.28,r*.43),n.box(-t*.02,44,o+r*.25,t*.25,1.7,r*.18,ct.linen,.6),n.oval(t*.18,45,o+r*.23,t*.018,1.9,r*.074,ct.peach),81}function qm(n,t,e,i,s,r){let o=new ln;for(let c=0;c<10;c++){let l=c*Math.PI/5-Math.PI/2,u=c%2?s*.46:s,f=[Math.cos(l)*u,Math.sin(l)*u];c===0?o.moveTo(...f):o.lineTo(...f)}o.closePath();let a=new Di(o);a.rotateX(-Math.PI/2),n.part(a,r,t,e,i)}function b2(n,t,e,i,s){let r=s.includes("bunk-bed"),o=s.includes("crafted-crib"),a=s.includes("canopy-bed");es(n,0,0,t,e,6,ct.walnut);let c=r?[6,55]:[6];for(let u of c){n.box(0,u,0,t*.97,15,e*.98,ct.walnut,5),n.box(0,u+12,0,t*.9,11,e*.92,ct.linen,4),n.box(0,u+21.6,e*.15,t*.89,5,e*.62,ct.lilac,2.5),n.box(0,u+23.7,e*.15,t*.877,7,e*.605,i,3.4),n.box(0,u+28,-e*.11,t*.88,3,e*.071,ct.lilacLight,1);let f=t>=145?[-t*.2,t*.2]:[0];for(let d of f)Ca(n,d,u+22,-e*.275,t*(f.length===2?.34:.49),e*.2,ct.linen,d<0?-.04:.04);let h=Math.min(t,e)*.045;for(let[d,m,y,p]of[[-.24,.12,1,ct.cream],[.23,.27,.79,ct.honey],[.08,.04,.57,ct.cream],[-.1,.34,.62,ct.honey]])qm(n,t*d,u+30.8,e*m,h*y,p);for(let d of[-.32,-.17,0,.17,.32])n.box(t*d,u+30.71,e*.24,.85,.24,e*.33,ct.lilacLight,0);for(let d of[.09,.195,.3,.405])n.box(0,u+30.72,e*d,t*.71,.24,.9,ct.lilacLight,0)}let l=r||a?93:52;if(n.box(0,4,-e*.46,t*.95,l-4,e*.083,ct.walnut,6),n.box(0,18,-e*.417,t*.89,l-23,e*.055,i,4),o||r||a)for(let u of[-1,1]){for(let f of[-1,1])n.box(t*.45*u,4,e*.46*f,5,l,6,ct.walnut,2);if(n.box(t*.45*u,l-9,0,5,5,e*.89,i,1.5),o||r)for(let f=-3;f<=3;f++)n.box(t*.45*u,l-29,e*f*.105,3,20,3,i,.8)}return l}function v2(n,t,e,i,s){let r=/nightstand/.test(s),a=/bookcase|shelf/.test(s)?66:r?29:s==="storageCabinet"?50:38;es(n,0,0,t,e,5),n.box(0,5,0,t*.96,a-6,e*.9,ct.walnut,3),n.box(0,a-2,0,t,4,e,i,1.7),n.box(0,a-3.7,0,t*.985,1.5,e*.967,ct.oak,.6);let c=r?2:3,l=t>=95?2:1;for(let u=0;u<c;u++)for(let f=0;f<l;f++){let h=t*.89/l,d=(a-8)/c,m=h*(f-(l-1)/2),y=5+u*d;n.box(m,y,e*.46,h-2,d-1.5,2.9,i,1),n.oval(m,y+d*.45,e*.51,2.2,1.7,2.2,ct.brass)}return a+2}function _2(n,t,e,i){if(i==="office-round")return n.disc(0,1,0,t*.5,2.2,e*.5,ct.moss),n.disc(0,3.2,0,t*.46,.7,e*.46,ct.sage),n.ring(0,3.9,0,t*.4,e*.4,.6,ct.linen),4;let s=i==="bedroom-floral";n.box(0,1,0,t,2.4,e,s?ct.lilac:ct.blush,1),n.box(0,3.5,0,t*.91,.8,e*.91,ct.linen),n.box(0,4.3,0,t*.86,.5,e*.86,s?ct.lilacLight:ct.peach);for(let r of[-1,1])for(let o=-5;o<=5;o++)n.box(o*t*.074,1.3,r*e*.493,t*.025,1.2,e*.047,ct.linen);for(let r of[-1,1])n.box(r*t*.398,4.84,0,.6,.32,e*.797,ct.linen),n.box(0,4.84,r*e*.398,t*.797,.32,.6,ct.linen);if(s)for(let r of[-1,0,1])for(let o of[-1,0,1])qm(n,t*.22*r,4.9,e*.22*o,Math.min(t,e)*.038,ct.cream);return 5}function M2(n,t,e,i){let s=t*.58,r=e*.28,o=-e*.04,a=o-r/2,c=o+r/2,l=(t-s)/2;for(let h of[-1,1])n.box(h*(t+s)/4,i-5,0,l,5,e,ct.linen);n.box(0,i-5,(a-e/2)/2,s,5,a+e/2,ct.linen),n.box(0,i-5,(c+e/2)/2,s,5,e/2-c,ct.linen);let u=Math.min(2.6,s*.1);n.box(0,i-4.88,o,s,.72,r,ct.basinSteel);for(let h of[-1,1])n.box(h*s/2,i-4.5,o,u,5.25,r+u,ct.steel,.4),n.box(0,i-4.5,o+h*r/2,s,5.25,u,ct.steel,.4),n.disc(0,i-4.1,o+h*r/4,u,.6,u,ct.darkGlass);n.box(0,i-4.5,o,s,4.85,u,ct.steel,.4);let f=-s/2-u*1.15;n.disc(f,i,o,u*.8,u*2.9,u*.8,ct.steel),n.box(f+u,i+u*2.5,o,u*2.8,u*.7,u,ct.steel,.6)}function S2(n,t,e,i,s=!1){let r=i==="doubleVanity"?32:35,o=i==="kitchenWorktop",a=i==="doubleVanity";n.box(0,1,0,t*.91,r-4,e*.93,a?ct.sage:ct.walnut,2.3),s?M2(n,t,e,r+2):n.box(0,r-3,0,t,5,e,ct.linen,1.8);let c=e>t;for(let l of[-1,1])for(let u=-1;u<=1;u++){let f=c?2.2:t*.29,h=c?e*.29:2.2,d=c?t*.46*l:t*.3*u,m=c?e*.3*u:e*.47*l;n.box(d,6,m,f,r*.67,h,a?ct.moss:ct.oak,.8),n.box(d,r*.63,m,c?3.2:t*.08,2.6,c?e*.05:3.2,ct.honey,.7)}if(o){n.box(0,r+2,0,t*.84,2.5,e*.72,ct.darkGlass,.8);for(let l of[-.2,.2])for(let u of[-.19,.19]){let f=Math.min(t,e)*(l<0?.12:.092);n.ring(t*l,r+4.8,e*u,f,f,1,ct.glass)}}if(a)for(let l of[-t*.24,t*.24])n.basin(l,r+1.9,0,t*.16,5.5,e*.36),n.oval(l,r+3.48,0,2.1,.52,2.1,ct.brass),n.disc(l,r+2,-e*.32,2.6,8,2.6,ct.brass),n.box(l,r+8.4,-e*.22,4,3,e*.2,ct.brass,1);return r+3}function w2(n,t,e,i){if(i==="tub"){n.box(0,0,0,t*.95,19,e*.95,ct.ceramic,6),n.box(0,18,0,t*.85,3,e*.86,ct.blueWater,1.3);for(let s of[-1,1])n.box(s*t*.44,17,0,t*.11,7,e*.94,ct.cream,2.6),n.box(0,17,s*e*.43,t*.82,7,e*.12,ct.cream,2.6);return n.disc(0,21,-e*.31,2.4,.9,2.4,ct.glass),n.disc(0,22,-e*.44,3.5,9,3.5,ct.brass),n.box(0,30,-e*.4,5,3.7,e*.1,ct.brass,1.3),n.box(t*.24,21.07,e*.14,t*.014,.18,e*.22,ct.aqua,.08),34}return i==="toilet"?(n.disc(0,0,e*.12,t*.28,11,e*.29,ct.ceramic,.65),n.disc(0,10,e*.12,t*.43,5,e*.34,ct.cream,.81),n.disc(0,15,e*.12,t*.34,1,e*.27,ct.linen),n.box(0,4,-e*.32,t*.92,22,e*.31,ct.ceramic,4.2),n.box(0,25,-e*.32,t*.93,3,e*.32,ct.cream,1.3),n.disc(t*.25,28,-e*.32,2.1,1.1,2.1,ct.honey),29):(n.box(-t*.15,0,-e*.14,t*.65,24,e*.58,ct.sage,3.8),n.box(-t*.15,23,-e*.14,t*.76,4,e*.68,ct.cream,1.6),n.basin(-t*.15,27,-e*.11,t*.28,5.2,e*.22),n.oval(-t*.15,28.56,-e*.11,1.6,.55,1.6,ct.brass),n.disc(-t*.15,27,-e*.34,2.5,8,2.5,ct.brass),n.box(-t*.15,33,-e*.31,4.7,3,e*.1,ct.brass,1.1),n.box(t*.34,2,e*.12,t*.22,17,e*.73,ct.walnut,2.1),n.box(t*.34,19,e*.18,t*.24,4.7,e*.34,ct.blush,1.7),36)}function E2(n,t,e,i,s){let r=i?ct.cream:"#bb9476",o=Math.min(t,e),a=o*(s?.4:.25),c=o*(s?.64:.49);n.oval(0,a*.68,e*.07,t*.35,a*.62,e*.36,r),n.oval(0,c,-e*.13,t*.3,o*.23,e*.27,r);for(let l of[-1,1])n.oval(t*.27*l,c+o*.19,-e*.19,t*.102,o*(i?.19:.1),e*.093,r),n.oval(t*.1*l,c+o*.04,e*.105,o*.026,o*.034,o*.022,ct.ink),n.oval(t*.26*l,a*.69,e*.23,t*.14,o*.105,e*.16,r),n.oval(t*.15*l,c-o*.06,e*.094,o*.043,o*.023,o*.023,ct.blush);return n.oval(0,c-o*.044,e*.12,o*.033,o*.022,o*.023,ct.ink),s&&n.box(0,8,e*.17,t*.57,9,e*.49,ct.linen,3.8),c+o*(i?.37:.28)}function T2(n,t,e,{form:i,palette:s}){let r=Math.min(t,e),o=i==="bin",a=r*(o?.31:.35);if(o||i==="basket"){if(o)n.box(0,0,0,t*.81,a,e*.81,s.base,r*.07),n.box(0,a-.8,0,t*.83,2.5,e*.83,s.accent,r*.075),n.box(0,a+1.2,0,t*.74,1,e*.73,s.dark,r*.06),n.box(0,a*.63,e*.409,t*.26,a*.2,1.1,s.detail,1.2);else{n.disc(0,0,0,t*.43,a,e*.42,s.base,.79),n.disc(0,a-.35,0,t*.393,.8,e*.38,s.dark);for(let y=0;y<=5;y++)n.ring(0,a*(.13+y*.16),0,t*(.35+y*.016),e*(.34+y*.016),.74,y%2?s.accent:s.base)}for(let y=0;y<3;y++){let p=(y-1)*t*.22,g=[ct.sage,ct.honey,ct.lilac][y];n.box(p,a+.95,(y%2-.5)*e*.16,t*.16,r*(.13+.03*y),e*.21,g,2,y*.27)}return a+r*.22}let c=i==="cubby"||i==="lowShelf",l=Math.max(13,Math.min(54,r*(c?.49:.72))),u=Math.max(2,e*.75),f=s.base;if(i==="floating"){n.box(0,l,0,t*.94,3.4,u,f,1.2);for(let y of[-1,1])n.box(y*t*.3,l-7,-u*.38,4,7,u*.2,s.dark,.8);return l+4}let h=c?2:3,d=c?3:2,m=l/(h-1);for(let y of[-1,1])n.box(t*.45*y,0,0,t*.065,l+3.3,u,f,1);n.box(0,0,-u*.44,t*.88,l,e*.08,s.dark,.65);for(let y=0;y<h;y++)if(n.box(0,y*m,0,t*.94,3.1,u,f,1),y!==h-1)for(let p=0;p<d;p++){let g=t*((p+.5)/d-.5)*.84;if(c)n.box(g,y*m+3.2,e*.05,t*.205,m*.45,e*.52,[ct.sage,ct.blush,ct.linen][p],1.7);else for(let x=0;x<4;x++)n.box(g+t*(.047*x-.07),y*m+3.15,e*.11,t*.038,m*(.41+x%3*.085),e*.31,[ct.lilac,ct.sage,ct.honey,ct.blush][x],.65)}return l+3.2}function A2(n,t,e,i){let s=Math.min(t,e),r=s*(i?.33:.25);n.disc(0,0,0,r,r*.85,r,ct.peach,.72),n.disc(0,r*.75,0,r*1.07,r*.18,r*1.07,ct.walnut);for(let o=0;o<5;o++){let a=o*Math.PI*.4,c=Math.cos(a)*s*.21,l=Math.sin(a)*s*.21,u=s*(i?.55:.44)+o%2*s*.08,f=n.oval(c*.5,u*.69,l*.5,s*.035,u*.32,s*.035,ct.moss);f.rotation.z=-c/u,f.rotation.x=l/u;let h=i?ct.sage:[ct.blush,ct.linen,ct.honey][o%3];n.oval(c,u,l,s*.13,s*(i?.18:.085),s*.11,h)}return s*(i?.82:.65)}function Ym(n,t={}){let{type:e,w:i,h:s}=n||{};if(typeof e!="string"||!Number.isFinite(i)||!Number.isFinite(s)||i<1||s<1)return null;if(e.startsWith("pets-"))return Fm(e,i,s);let r=u2[e.split("-").at(-1)],o=(typeof window>"u"?globalThis:window).RoomcraftInventory?.byType?.[e]??{type:e},a=new gf(i,s),c=Xm(a,i,s,o,t);if(c===void 0&&!["plush","photoBunnyPlush"].includes(o.form)&&(c=zm(a,i,s,o)),c!==void 0)return a.finish(c);if(e==="sofa"||/(?:sofa|loveseat|chaise)-/.test(e))c=p2(a,i,s,r||(e==="sofa"?ct.linen:ct.sage),e);else{if(e==="tv")return a.box(0,2,0,i*.94,23,s*.98,ct.walnut,3.5),a.box(0,24,0,i,4,s,ct.oakLight,1.5),a.box(0,28,0,i*.4,6,s*.32,ct.ink,1.4),a.box(0,33,0,i*.29,52,s*.89,ct.ink,2.5),a.box(-i*.155,36,0,1.6,46,s*.84,ct.darkGlass,.6),a.oval(-i*.173,35,s*.34,1.2,1.2,1.2,ct.honey),km(a.finish(85),i,s);if(e==="table"||e.includes("dining-set"))c=g2(a,i,s,r||ct.oakLight,e);else if(e==="diningTable"||/^living-(?:petal|round|rectangular)-dining-table-/.test(e)){let l=e==="diningTable"?"classic":e.includes("round-dining")?"round":"styled";c=Jl(a,i,s,r||(l==="classic"?ct.oak:ct.oakLight),l)}else if(e==="diningChair"||e.startsWith("living-dining-chair-"))c=m2(a,i,s,r||ct.denim);else if(e==="desk"||e.includes("-desk-"))c=x2(a,i,s,r||ct.oakLight,e==="desk"||e.includes("corner-desk"));else if(e==="chair"||e==="stool"||e.includes("desk-chair"))Si(a,0,0,i,s,0,r||ct.lilac,e==="stool"),c=e==="stool"?50:60;else if(e==="armchair"||e.includes("acorn-armchair")){Si(a,0,0,i,s,0,r||ct.lilac,!0);for(let l of[-1,1])a.box(l*i*.37,16,0,i*.19,25,s*.83,ct.lilac,6.5);c=51}else if(e==="bed"||/(?:bed|crib)-/.test(e))c=b2(a,i,s,r||ct.lilac,e);else if(e==="rug")c=_2(a,i,s,n.rugStyle);else if(e==="counter"||e==="kitchenWorktop"||e==="doubleVanity")c=S2(a,i,s,e,e==="counter"&&n.id==="i7");else if(e==="tub"||e==="toilet"||e==="bathFixtures")c=w2(a,i,s,e);else if(e==="plant"||e==="floorPlant")c=A2(a,i,s,e!=="plant");else if(e==="wallUnit")a.box(0,48,0,i,17,s*.62,ct.linen,4),a.box(0,51,s*.32,i*.89,4,1.8,ct.ink,.6),a.box(-i*.34,56,s*.32,i*.11,2.1,2.1,ct.blue,.7),c=65;else if(["storage","shelf"].includes(o.artFamily)||o.form==="lowShelf")c=T2(a,i,s,o);else if(/dresser|nightstand|bookcase|storageCabinet/.test(e))c=v2(a,i,s,r||ct.oakLight,e);else if(/coffeeTable|sideTable|bedroomBench|coffee-table|side-table|low-play-table/.test(e)){let l=e==="bedroomBench"?26:30;es(a,0,0,i,s,l-4),a.box(0,l-5,0,i,8,s,r||ct.oakLight,3.4),e==="bedroomBench"&&a.box(0,l+2,0,i*.87,6.2,s*.91,ct.lilacLight,2.6),c=l+8}else if(e.includes("bunny-plush")||e.includes("plush-bear")||e.includes("bear-floor-chair"))c=E2(a,i,s,e.includes("bunny"),e.includes("floor-chair"));else return null}return a.finish(c)}var Qt={cream:16049354,oat:13810076,honey:12421984,rose:12023932,ink:5784146,muted:9404799,plum:6706803,sage:9349263,mint:11982271,teal:4353640,glass:12047575,blue:7379366,warm:16767915,gold:14989425,dark:3553100,ember:15640419,tile:7820909,paleTile:8412532,brass:12355671},Pa=Math.PI,yf=2*Pa,R2=new Set(["unknown","unavailable"]),hi=(n,t,e)=>Math.max(t,Math.min(e,n)),Ia=(n,t)=>Number.isFinite(n)?hi(n,12,480):t,jm=.96,Km=.09;function Jm(n,t,e){let i=Ia(n.w,42),s=Ia(n.h,42);return Math.abs(t)<=i/2&&Math.abs(e-s*Km)<=s*jm/2}var xe=(n,t={})=>new He({color:n,roughness:.83,...t}),xf=n=>String(n?.state??"unknown"),nr=n=>!R2.has(xf(n)),no=n=>nr(n)&&(n.active===!0||n.state==="on"),C2=n=>no(n)?Number.isFinite(n.attributes?.brightness)?hi(n.attributes.brightness/255,0,1):1:0,Ql=n=>(typeof window>"u"?globalThis:window).RoomcraftInventory?.byType?.[n];function Ei(n,t,e,i=0,s=0,r=0){let o=new ae(t,e);return o.position.set(i,s,r),n.add(o),o}function sn(n,t,e,i,s,r=0,o=0,a=0){return Ei(n,new Te(t,e,i),s,r,o,a)}function vn(n,t,e,i,s,r=0,o=0,a=0,c=3){let l=Math.min(c,t/3,e/3,i/3),u=l-t/2,f=l-e/2,h=new ln;h.moveTo(u,f),h.lineTo(-u,f),h.lineTo(-u,-f),h.lineTo(u,-f),h.closePath();let d=new xi(h,{depth:i-2*l,bevelThickness:l,bevelSize:l,bevelSegments:2});return d.translate(0,0,l-i/2),Ei(n,d,s,r,o,a)}function en(n,t,e,i,s,r=0,o=0,a=0,c=16){return Ei(n,new ze(t,e,i,c),s,r,o,a)}function wi(n,t,e,i,s,r){return Ei(n,new Ae(t,10,7),e,i,s,r)}function eo(n,t=0,e=0,i=0){let s=new ee;return s.position.set(t,e,i),n.add(s),s}function I2(n,t,e=2.8){let i=new $e({transparent:!0,depthWrite:!1,blending:Ji,uniforms:{strength:{value:0},tint:{value:new qt(Qt.warm)}},vertexShader:"varying vec2 floorUV; void main(){floorUV=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`
      uniform float strength;
      uniform vec3 tint;
      varying vec2 floorUV;
      void main(){
        float distanceFromLamp=length(floorUV-vec2(0.5));
        float edge=1.0-smoothstep(0.25,0.5,distanceFromLamp);
        float falloff=1.0/(1.0+20.0*distanceFromLamp*distanceFromLamp);
        gl_FragColor=vec4(tint,edge*falloff*strength);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),s=Ei(n,new Nn(2*t,2*t),i,0,e,0);return s.rotation.x=-Pa/2,s.visible=!1,(r,o)=>{s.visible=r>0,i.uniforms.strength.value=r*.29,i.uniforms.tint.value.copy(o)}}function P2(n,t,e,i){let s=new ee,r=n.type,o=Ql(r),a=String(n.lightForm??o?.lightForm??""),c=r==="pendantLight"||a==="star_pendant",l=r==="ceilingLight"||c||a==="bloom_ceiling",u=r==="floorLamp"||a==="cloud_floor_lamp",f=r==="wallSconce"||a==="acorn_sconce",h=l&&/fan light/i.test(n.name??""),d=Math.min(t,e),m=o?.palette,y=new qt(m?.detail??Qt.cream),p=xe(m?.base??Qt.honey,{roughness:.53}),g=xe(m?.dark??Qt.ink),x=xe(Qt.brass,{roughness:.36,metalness:.42}),v=xe(y,{emissive:Qt.warm,emissiveIntensity:0}),b=new qt(Qt.warm),_=h?46:c?50:l?56:f?i.mountY??40:u?56:36,M=!l&&!u&&!f,R=M?hi(d*.68,15,46):hi(d*(l?1.72:1.35),38,110),S=I2(s,R,M?16.8:2.8);if(l){let T=d*(h?.19:.29);if(en(s,T,T*1.02,3,g,0,_+2),c&&en(s,1.7,1.7,13,p,0,_+9),en(s,T*.82,T,5,p,0,_-1.5),en(s,T*.92,T*.96,1.15,x,0,_+1.1),a==="star_pendant"||a==="bloom_ceiling"){let I=Ei(s,new ia(T*.96,0),v,0,_,0);I.scale.y=c?1.03:.56}else{let I=wi(s,T*.83,v,0,_,0);I.scale.y=c?.88:.52}}else if(f)vn(s,d*.34,18,4,g,0,_-5,-4),en(s,d*.12,d*.11,14,p,0,_-3,3),a==="acorn_sconce"?(en(s,d*.15,d*.22,13,v,0,_+4,3,10),en(s,d*.22,d*.218,1.2,x,0,_-2.3,3,10)):wi(s,d*.21,v,0,_+3,3);else{let T=_-7,I=u?3:16,P=d*(u?.25:.3);if(en(s,P*.57,P*.67,4,g,0,I),en(s,2,2.9,T-I,p,0,(I+T)/2),u)wi(s,P*.81,v,0,_,0);else{let k=a==="bud_lamp"?12:9;if(a==="bud_lamp"){let z=new ze(P*.56,P,14,k*2),O=z.attributes.position;for(let U=0;U<O.count;U++){let V=O.getX(U),j=O.getZ(U);Math.round(Math.atan2(V,j)*k/Math.PI)%2&&O.setXYZ(U,V*.92,O.getY(U),j*.92)}z.computeVertexNormals(),Ei(s,z,v,0,_,0)}else en(s,P*.56,P,14,v,0,_,0,k);en(s,P,P*.99,1.2,x,0,_-6.7,0,k),en(s,P*.55,P*.58,1.1,x,0,_+7.1,0,k)}}return{root:s,anchorY:_+2,animate(T){let I=C2(T),P=T?.attributes?.rgb_color;if(Array.isArray(P)&&P.length===3&&P.every(Number.isFinite)){let[k,z,O]=P.map(U=>hi(U/255,0,1));b.setRGB(k,z,O,Ke)}else b.setHex(Qt.warm);S(I,b),v.emissiveIntensity=I*.88,v.emissive.copy(b),I>0?v.color.copy(b):v.color.copy(y)}}}function L2(n,t){let e=new ln;e.moveTo(n*.1,-n*.061),t?(e.bezierCurveTo(n*.42,-n*.15,n*.76,-n*.42,n,-.024*n),e.bezierCurveTo(n*.87,n*.25,n*.49,n*.28,n*.1,n*.063)):(e.bezierCurveTo(n*.39,-n*.094,n*.62,-n*.16,n*.88,-n*.14),e.bezierCurveTo(n*1.01,-n*.11,n*1.03,n*.07,n*.88,n*.13),e.bezierCurveTo(n*.62,n*.2,n*.42,n*.13,n*.1,n*.063)),e.closePath();let i=new xi(e,{depth:1.8,bevelEnabled:!0,bevelSize:.6,bevelThickness:.48,bevelSegments:1,curveSegments:5});return i.translate(0,0,-.9),i.rotateX(-Pa/2)}function $m(n,t,e,i){let s=new ee,r=Math.min(t,e)*(i?.37:.46),o=i?r+11:59,a=eo(s,0,o,0);i&&(a.rotation.x=Pa/2);let c=eo(a,0,-1,0);c.name="Fan blades";let l=Ql(n.type),u=l?.form==="palm",f=xe(l?.palette.accent??Qt.cream),h=xe(l?.palette.dark??Qt.ink),d=l?.palette.base??(/(?:white|cream)$/.test(n.type)?Qt.oat:/(?:forest|sage)$/.test(n.type)?Qt.sage:Qt.honey),m=xe(d),y=u?xe(l.palette.accent):null,p=i||/three-blade/.test(n.type)?3:/four-blade/.test(n.type)?4:5;en(a,r*.18,r*.2,6,h),en(a,r*.174,r*.176,1.4,xe(Qt.brass,{roughness:.36,metalness:.42}),0,3.4),en(a,r*.15,r*.17,2.6,f,0,4.9);let g=L2(r,u);for(let x=0;x<p;x++){let v=eo(c);if(v.rotation.y=x/p*yf,Ei(v,g,m),y){sn(v,r*.72,.5,.55,y,r*.52,1.45);for(let b=0;b<4;b++)for(let _ of[-1,1]){let M=sn(v,r*(.1+.025*b),.46,.48,y,r*(.45+.11*b),1.39,_*r*.043);M.rotation.y=_*.68}}}if(i){vn(s,r*1.66,6,r*1.02,h,0,3),sn(s,r*.3,11,6,f,0,10);let x=Ei(s,new bn(r,2.6,6,24),f,0,o,3);x.rotation.z=.04;for(let v=-1;v<=1;v++){let b=v*r*.5;en(s,.68,.68,2*Math.sqrt(r*r-b*b),h,b,o,5,6)}}return{root:s,anchorY:o,...i?{}:{anchorOffset:{x:r*.76,z:0}},animate(x,v=0){let b=Number.isFinite(x?.attributes?.percentage)?hi(x.attributes.percentage/100,.12,1):.64;c.rotation.y=no(x)?v*yf*b%yf:0}}}function N2(n,t){let e=new ee,i=t.mountY??39,s=eo(e,0,i),r=hi(n*.72,17,27);vn(s,r,31,5,xe(Qt.ink),0,0,-.5),vn(s,r-1.9,29,4.4,xe(Qt.cream),0,.3,1);let o=xe(Qt.oat,{emissive:Qt.warm,emissiveIntensity:0}),a=vn(s,r*.55,17.5,3.2,o,0,3.2,3.5),c=Array.from({length:3},(l,u)=>{let f=xe(Qt.teal,{emissive:Qt.mint,emissiveIntensity:0});return wi(s,1.85,f,(u-1)*r*.24,-10.3,3.55)});return{root:e,anchorY:i,animate(l,u=0){a.rotation.x=nr(l)?no(l)?-.16:.16:0,o.emissiveIntensity=no(l)?.42:0;let f=l?.presence==="on";for(let h=0;h<c.length;h++){let d=f?.5+.5*Math.cos(u*5-h*1.23):0;c[h].material.color.setHex(f?Qt.mint:Qt.teal),c[h].material.emissiveIntensity=f?.75+d*1.9:0,c[h].scale.setScalar(f?1+d*.18:1)}}}}function Zm(n,t,e,i=31){let s=new ee,r=36.5,o=Math.max(12,n-6),a=xe(Qt.oat);if(t){let h=xe(Qt.glass,{roughness:.32});sn(s,o,i,3.2,h,0,r,0);for(let m of[-o/2+1.6,0,o/2-1.6])sn(s,3.2,i+2,7.5,a,m,r);let d=r+i/2;sn(s,o,1.8,7,h,0,d+.35);for(let m of[-4.25,4.25])sn(s,o+2,3.2,1.5,a,0,d,m);sn(s,o+3,3.8,11,a,0,r-i/2,1.4),sn(s,o,1.35,.5,xe(Qt.cream),0,r+6.2,2)}if(!e)return{root:s,anchorY:r};let c=xe(Qt.cream),l=r+i/2-1;vn(s,o+2,4.6,7,a,0,l+.75,6.7,1.6);let u=Array.from({length:8},(h,d)=>sn(s,o-5,i/8-.45,3,c,0,l-d*(i/8),6.9)),f=0;return{root:s,anchorY:r+1.5,animate(h,d,m,y=!1){let p=bf(h),g=p===null?y?0:f:1-p;y||(f=g);let x=Number.isFinite(h?.attributes?.current_tilt_position)?hi(h.attributes.current_tilt_position/100,0,1):0;for(let v=0;v<u.length;v++){let b=hi(g*u.length-v,0,1);u[v].visible=b>.02,u[v].scale.y=b,u[v].rotation.x=x*.9}}}}function bf(n){return nr(n)?Number.isFinite(n.attributes?.current_position)?hi(n.attributes.current_position/100,0,1):["open","on"].includes(n.state)?1:["closed","off"].includes(n.state)?0:null:null}function D2(n,t){let e=new ee,i=t*.72,s=n*.74,r=i/2,o=Math.min(48,n*.38),a=Math.min(23,n*.19),c=xe(Qt.oat),l=xe(Qt.cream),u=xe(Qt.plum),f=[xe(Qt.tile),xe(Qt.paleTile)],h=xe(Qt.dark);sn(e,n,5,t*jm,l,0,2.5,t*Km),sn(e,n*.88,o+4,5,c,0,(o+4)/2,-r+2);for(let P of[-n*.42,n*.42])sn(e,n*.09,o+4,i,c,P,(o+4)/2),vn(e,n*.1,o+4,5,l,P,(o+4)/2,r+1,1.5);let d=new ln;d.moveTo(-n*.49,0),d.lineTo(n*.49,0),d.lineTo(0,a),d.closePath();let m=new xi(d,{depth:i+11,bevelThickness:1.5,bevelSize:1.5,bevelSegments:2});m.translate(0,0,-r-5.5),Ei(e,m,u,0,o+4);let y=n*.49,p=Math.atan2(a,y),g=Math.hypot(a,y),x=(i+11)/8,v=[[],[]];for(let P of[-1,1])for(let k=0;k<8;k++){let z=-r-5.5+(k+.5)*x,O=new Te(g*.97,2.2,x-.62);O.rotateZ(-P*p),O.translate(P*y*.5,o+5.65+a*.5,z),v[k%2].push(O)}v.forEach((P,k)=>{Ei(e,$n(P),f[k]),P.forEach(z=>z.dispose())}),vn(e,4,4.5,i+12,u,0,o+a+5.6,0,1.5),sn(e,n*.95,3.5,3.5,l,0,o+4,r+5.5),sn(e,s,o,1.5,h,0,o/2+4,r-4);for(let P of e.children)P.isMesh&&(P.castShadow=!0);let b=xe(Qt.mint),_=xe(Qt.sage),R=(o-3)/6,S=Array.from({length:6},(P,k)=>{let z=eo(e,0,o-(k+.5)*R+2,r+.5);return vn(z,s-2,R-.7,3.4,b,0,0,0,1.2),sn(z,s*.91,.68,.7,_,0,R*.23,1.8),k===5&&vn(z,s*.13,2,2.2,l,0,0,2.3,.55),z}),T=xe(Qt.gold,{emissive:Qt.ember,emissiveIntensity:0});wi(e,3.7,T,n*.422,o*.73,r+4.5);let I=0;return{root:e,anchorY:o*.62,anchorOffset:{x:0,z:r},animate(P,k=0,z,O=!1){let V=bf(P)??(O?0:I);O||(I=V),b.color.setHex(nr(P)?Qt.mint:Qt.muted),_.color.setHex(nr(P)?Qt.sage:Qt.muted);let j=(1-V)*S.length;S.forEach((ot,G)=>{let q=hi(j-G,0,1);ot.visible=q>.02,ot.scale.y=q,ot.position.y=o-(G+q/2)*R+2});let dt=["opening","closing"].includes(xf(P));T.emissiveIntensity=dt?.55+(.5+.5*Math.cos(k*6)):0}}}function F2(n){let t=new ee,e=46,i=xe(Qt.cream),s=xe(Qt.honey),r=Math.min(n*.86,88),o=eo(t,-r/2,0,0);for(let c of[-r/2-1,r/2+1])sn(t,3.4,e,5,i,c,e/2);sn(t,r+4,3,5,i,0,e),vn(o,r-2,e-4,4,s,r/2,e/2,0,2),wi(o,2.2,xe(Qt.gold),r-6,e*.47,2.8);let a=0;return{root:t,anchorY:e/2,animate(c,l,u,f=!1){let d=bf(c)??(f?0:a);f||(a=d),o.rotation.y=-1.32*d,s.color.setHex(nr(c)?Qt.honey:Qt.muted)}}}function U2(n,t,e){let i=new ee,s=n.type!=="wallUnit",r=e.mountY??(s?42:48),o=hi(t*.85,23,126),a=xe(Qt.dark,{emissive:Qt.mint,emissiveIntensity:0});if(vn(i,o,s?25:18,8,xe(Qt.cream),0,r,0),s){vn(i,o*.7,11,1.9,a,0,r+2,4.1);for(let c of[-.22,0,.22])wi(i,1.35,xe(Qt.oat),o*c,r-7,4.3)}else sn(i,o*.89,2.2,.7,a,0,r-4,4.2);return{root:i,anchorY:r,animate(c){let l=c?.attributes?.hvac_action,u=l==="heating",f=nr(c)&&["cooling","heating","drying","fan"].includes(l);a.emissive.setHex(u?Qt.warm:Qt.glass),a.emissiveIntensity=f?1.15:no(c)?.25:0}}}function k2(n,t,e){let i=new ee,s=Math.min(t,e)*.74,r=n.type==="humidifier",o=r?25:30,a=xe(Qt.cream),c=xe(r?Qt.glass:Qt.sage),l=xe(Qt.teal,{emissive:Qt.mint,emissiveIntensity:0}),u=o-1;if(en(i,s*.46,s*.5,4,xe(Qt.ink),0,2),r){let d=wi(i,s/2,c,0,13,0);d.scale.y=22/s,en(i,s*.19,s*.22,3.5,a,0,u)}else{vn(i,s,24,s*.82,c,0,15,0,5),vn(i,s*.91,3.8,s*.71,a,0,u);for(let d=-1;d<=1;d++)sn(i,s*.66,1.2,1.1,l,0,u+2,d*3.5)}wi(i,1.6,l,s*.18,u-2,s*.31);let f=xe(Qt.glass,{transparent:!0,opacity:.54,depthWrite:!1}),h=Array.from({length:3},(d,m)=>wi(i,2.1+m*.6,f,0,u+3,0));return{root:i,anchorY:u,animate(d,m=0){let y=no(d);l.emissiveIntensity=y?1.6:0;for(let p=0;p<h.length;p++){h[p].visible=y;let g=(m*.68+p/h.length)%1;h[p].position.set(Math.sin(g*Pa)*3.1,u+4+g*14,0),h[p].scale.setScalar(.7+g*.62)}}}}function O2(n,t,e){let i=new ee,s=Ql(n.type),r=s?.form,o=Math.min(t,e)*.42,a=.72;i.scale.setScalar(a);let c=xe(Qt.sage,{emissive:Qt.mint,emissiveIntensity:0}),l=xe(s?.palette.dark??Qt.ink),u=xe(s?.palette.base??Qt.cream,{roughness:.46}),f=r==="slim"?1.22:1,h=en(i,o,o*.95,r==="slim"?4.8:7,l,0,4.6),d=en(i,o*.96,o,r==="slim"?3.6:5.5,u,0,r==="slim"?8.4:10.2);h.scale.x=d.scale.x=f,en(i,o*.28,o*.33,4,xe(Qt.oat),0,14,-o*.23);for(let p of[-.27,.27])wi(i,o*.105,l,o*p,10,o*.88);let m=vn(i,o*.68,1.2,2.5,c,0,13.2,o*.36);if(r==="mop"){let p=xe(s.palette.accent);for(let g of[-1,1])en(i,o*.39,o*.4,2.1,p,g*o*.45,1.8,o*.51)}let y;if(r==="docked"){y=new ee,y.name="Vacuum charging dock";let p=xe(s.palette.accent);vn(y,o*1.36,1.8,o*.95,l,0,1.2,-o*.59,.4),vn(y,o*1.36,o*.53,o*.35,p,0,o*.3,-o*.94,1.4),sn(y,o*.5,.9,.9,l,0,o*.41,-o*.75)}return{root:i,dock:y,anchorY:12,floorRadius:o*1.03*a*f,animate(p,g=0,x=!1){let v=["cleaning","returning"].includes(xf(p));m.material.emissiveIntensity=v?x?.6+.5*Math.cos(g*6):.3:0}}}function vf(n){return n.type==="controlZone"&&(n.visualKind==="window"||(!n.visualKind||n.visualKind==="auto")&&typeof n.entityId=="string"&&n.entityId.startsWith("cover."))}function Qm(n,t={}){let e=Ia(n.w,42),i=Ia(n.h,42),s=String(n.type??""),r=n.visualKind;return s==="cameraThumbnail"||s.startsWith("ui")?null:s==="presenceSwitch"?N2(e,t):s==="garageDoor"?D2(e,i):s==="door"||r==="door"?F2(e):s==="window"?Zm(e,!0,!!n.entityId):s==="controlZone"?vf(n)?Zm(Ia(t.window?.w,e),!1,!0):null:s==="wallUnit"||s==="thermostat"||r==="climate"?U2(n,e,t):s==="airPurifier"||s==="humidifier"?k2(n,e,i):r==="vacuum"||/^cleaning-.*robot/.test(s)?O2(n,e,i):s==="windowFan"?$m(n,e,i,!0):r==="fan"||/^fans-/.test(s)?$m(n,e,i,!1):r==="light"||n.lightForm||Ql(s)?.lightForm||/^(?:lamp|ceilingLight|pendantLight|floorLamp|tableLamp|wallSconce)$/.test(s)?P2(n,e,i,t):null}var rg=bo(to(),1),{difference:og,union:ag}=rg.default,nu=18,ti=.001,ki=(n,t)=>n[0]*t[0]+n[1]*t[1],ir=(n,t)=>n[0]*t[1]-n[1]*t[0],Oi=(n,t)=>[n[0]-t[0],n[1]-t[1]],We=(n,t,e)=>[n[0]+t[0]*e,n[1]+t[1]*e],su=([n,t])=>[-t,n],tg=(n,t,e,i)=>[[n,t],[e,t],[e,i],[n,i]],tu=n=>n.map(({x:t,y:e})=>[t,e]),ns=n=>[n.map(t=>t.map(e=>Math.round(e*1e5)/1e5))],cg=n=>n.length?ag(...n):[];function iu(n,t,e,i=0){let s=Oi(t,n),r=Math.hypot(...s);if(r<ti)return null;let o=s.map(u=>u/r),a=su(o),c=We(n,o,-i),l=We(t,o,i);return ns([We(c,a,e),We(l,a,e),We(l,a,-e),We(c,a,-e)])}function eu(n,t){let[e,i]=t,s=!1;for(let r=0,o=n.length-1;r<n.length;o=r++){let[a,c]=n[r],[l,u]=n[o];c>i!=u>i&&e<(l-a)*(i-c)/(u-c)+a&&(s=!s)}return s}function eg(n){return n.flatMap((t,e)=>{let i=n[(e+1)%n.length],s=Oi(i,t),r=Math.hypot(...s);return r>ti?[{start:t,end:i,length:r,tangent:s.map(o=>o/r)}]:[]})}function B2(n,t,e,i){if(Math.abs(ki(n.tangent,t.tangent))<.9999)return null;let s=su(n.tangent),[r,o]=[t.start,t.end].map(y=>Oi(y,n.start)),a=ki(r,s);if(Math.abs(a)<.1||Math.abs(a)>nu||Math.abs(a-ki(o,s))>.1)return null;let c=[ki(r,n.tangent),ki(o,n.tangent)].sort((y,p)=>y-p),l=Math.max(0,c[0]),u=Math.min(n.length,c[1]);if(u-l<8)return null;let f=We(n.start,n.tangent,(l+u)/2),h=Math.sign(a);if(!eu(e,We(f,s,-h))||!eu(i,We(f,s,a+h))||eu(e,We(f,s,a/2))||eu(i,We(f,s,a/2)))return null;let d=We(n.start,n.tangent,l),m=We(n.start,n.tangent,u);return ns([We(d,s,-h*.05),We(m,s,-h*.05),We(m,s,a+h*.05),We(d,s,a+h*.05)])}function lg(n){let t=[],e=[];for(let i of[...n].reverse()){let s=cg(i.polygons);if(!s.length)continue;let r=t.length?og(s,t):s;r.length&&e.push({surface:i.surface,polygons:r}),t=t.length?ag(t,s):s}return{footprint:t,regions:e.reverse()}}function io(n){return n.outdoor===!0||n.outdoor!==!1&&n.surface==="patio"}function _f(n,t,e=!1){let i=n.map(h=>({surface:h.surface,points:tu(h.points),polygons:[ns(tu(h.points))],outdoor:e&&io(h)})),s=[];for(let[h,d]of i.entries())for(let m of i.slice(h+1))for(let y of eg(d.points))for(let p of eg(m.points)){let g=B2(y,p,d.points,m.points);g&&s.push({surface:d.surface,polygons:[g],outdoor:d.outdoor||m.outdoor})}let r=[],o=[];if(t){let{left:h,deckEdge:d,stepBottom:m,deckBottom:y,northDeck:p,southDeck:g,recess:x}=t;r.push({surface:"patio",polygons:[ns(tu(p)),ns(tu(g)),ns(tg(h,m,d+1,y))]}),x.x2>x.x1&&x.z2>x.z1&&o.push({surface:"oak",polygons:[ns(tg(x.x1,x.z1,x.x2,x.z2))]})}let a=[...s,...i],c=[...o,...a.filter(h=>!h.outdoor)],l=[...r,...a.filter(h=>h.outdoor)],u=lg([...l,...c]),f=t||e?cg(c.flatMap(h=>h.polygons)):[];return{...u,foundation:f}}function z2(n,t,e,i){let s=ir(t,e);if(Math.abs(s)<.13)return null;let r=Math.sign(s)*-i,o=We(n,su(t),r),a=We(n,su(e),-r),c=ir(Oi(a,o),e)/s,l=We(o,t,c);return Math.hypot(...Oi(l,n))>i*2.5?ns([n,o,a]):ns([n,o,l,a])}function ng(n,t){let e=ir(n.tangent,t.tangent);if(Math.abs(e)<.13)return null;let i=Oi(t.point,n.point);return[ir(i,t.tangent)/e,ir(i,n.tangent)/e]}function H2(n){let t=n.flatMap(i=>[{wall:i,point:[i.x1,i.y1],tangent:[i.dx,i.dz]},{wall:i,point:[i.x2,i.y2],tangent:[-i.dx,-i.dz]}]),e=[];for(let[i,s]of t.entries()){for(let r of t.slice(i+1)){if(s.wall===r.wall)continue;let o=Oi(r.point,s.point);if(Math.hypot(...o)>nu)continue;let a=ng(s,r);a&&a.every(c=>c>=-nu&&c<=ti)?e.push({a:s,b:r,center:We(s.point,s.tangent,a[0])}):!a&&ki(s.tangent,r.tangent)<0&&ki(o,s.tangent)<=ti&&ki(o,r.tangent)>=-ti&&e.push({a:s,b:r})}for(let r of n){if(s.wall===r)continue;let o={wall:r,point:[r.x1,r.y1],tangent:[r.dx,r.dz]},a=ng(s,o);if(!a)continue;let[c,l]=a;c<-nu||c>=-ti||l<=ti||l>=r.length-ti||r.openings.some(({start:u,end:f})=>l>=u&&l<=f)||e.push({a:s,center:We(s.point,s.tangent,c)})}}return e}function ig({a:n,b:t,center:e},i){return e?[iu(n.point,e,i,.1),t&&iu(t.point,e,i,.1),t&&z2(e,n.tangent,t.tangent,i)].filter(Boolean):[iu(n.point,t.point,i,.1)].filter(Boolean)}function ug(n){return n.flatMap(t=>t.flatMap(e=>e.slice(1).map((i,s)=>[e[s],i])))}function G2(n,t){return ug(n).flatMap(([e,i])=>{let s=Oi(i,e),r=Math.hypot(...s);if(r<ti)return[];let o=s.map(a=>a/r);return t.flatMap(([a,c])=>{let l=Oi(a,e),u=Oi(c,e);if(Math.abs(ir(l,o))>ti||Math.abs(ir(u,o))>ti)return[];let[f,h]=[ki(l,o),ki(u,o)].sort((y,p)=>y-p),d=Math.max(0,f),m=Math.min(r,h);return m-d>ti?[[We(e,o,d),We(e,o,m)]]:[]})})}function sg(n,t){return t?.length?og(n,t):n}function hg(n,t,e,i){let s=[],r=(c,l,u,f,h=0)=>{c&&u>l&&s.push({shape:c,from:l,to:u,surface:f,priority:h})};for(let c of n){let{palette:[l,u,f]}=c,h=[c.x1,c.y1],d=[c.dx,c.dz],m=(x,v,b,_,M,R,S)=>{v-x>ti&&r(iu(We(h,d,x),We(h,d,v),M/2),b,_,R,S)},y=c.openings.length?i:0,p=(x,v)=>{m(x,v,y,e,t,l,2),m(x,v,e-1,e+2,t+3,u,1)};y&&m(0,c.length,0,y,t,l,2);let g=0;for(let x of c.openings)p(g,x.start),g=Math.max(g,x.end);p(g,c.length),m(0,c.length,0,3,t+3,f,1)}for(let c of H2(n)){let[l,u,f]=c.a.wall.palette;for(let h of ig(c,t/2))r(h,0,e,l,2);for(let h of ig(c,(t+3)/2))r(h,e-1,e+2,u,1),r(h,0,3,f,1)}let o=[...new Set(s.flatMap(({from:c,to:l})=>[c,l]))].sort((c,l)=>c-l),a=o.slice(1).map((c,l)=>{let u=o[l],f=new Map,h=s.filter(d=>d.from<=u&&d.to>=c);for(let{surface:d,shape:m}of h.sort((y,p)=>y.priority-p.priority))f.has(d)||f.set(d,{surface:d,polygons:[]}),f.get(d).polygons.push(m);return{...lg([...f.values()]),bottom:u,top:c}});return a.flatMap(({regions:c,footprint:l,bottom:u,top:f},h)=>{let d=ug(l);return c.map(m=>({...m,bottom:u,top:f,faces:{top:sg(m.polygons,a[h+1]?.footprint),bottom:u===0?[]:sg(m.polygons,a[h-1]?.footprint),sides:G2(m.polygons,d)}}))})}var V2=new Map([["partlycloudy",.32],["cloudy",.84],["windy-variant",.7],["fog",.95],["snowy",.82],["snowy-rainy",.92],["hail",.94],["rainy",.88],["pouring",.97],["lightning",.91],["lightning-rainy",.98]]),W2=(n,t,e)=>Math.min(e,Math.max(t,n)),fg=n=>n*Math.PI/180;function sr(n,t,e){let i=W2((n-t)/(e-t),0,1);return i*i*(3-2*i)}function is(n={}){let{sunElevation:t,sunAzimuth:e,sunRising:i,condition:s,night:r,cloudCoverage:o}=n,a=Number.isFinite(t)&&Math.abs(t)<=90?t:r||s==="clear-night"?-18:38,c=Number.isFinite(e)&&e>=0&&e<=360?e%360:void 0,l=typeof i=="boolean"?i:c!==void 0&&c<180,u=a<19&&a>-12,f=c??(u?l?90:270:150),h=Math.max(V2.get(s)??0,Number.isFinite(o)&&o>=0&&o<=100?o/100:0);return{elevation:a,azimuth:f,rising:l,cloud:h,phase:u?l?"sunrise":"sunset":a<=-12?"night":"day",daylight:sr(a,-10,18),twilight:sr(a,-12,-3)*(1-sr(a,3,19)),lowSun:sr(a,-1,4)*(1-sr(a,9,33)),disc:sr(a,-.9,.8),east:Math.sin(fg(f)),north:Math.cos(fg(f))}}function dg(){let n,t,e=0;function i(s){let r=sr(s-e,0,.8);if(!n||r>=1)return t;let o=(t.azimuth-n.azimuth+540)%360-180;return is({sunElevation:n.elevation+(t.elevation-n.elevation)*r,sunAzimuth:(n.azimuth+o*r+360)%360,sunRising:t.rising,cloudCoverage:(n.cloud+(t.cloud-n.cloud)*r)*100})}return(s,r,o=!1)=>!t||o||!Number.isFinite(r)||r<e?(n=void 0,t=s,e=Number.isFinite(r)?r:0,t):((s.elevation!==t.elevation||s.azimuth!==t.azimuth||s.rising!==t.rising||s.cloud!==t.cloud)&&(n=i(r),t=s,e=r),i(r))}var X2=3,q2={night:["#a8b8f5","#5b536e","#a7b8ed","#97a5c5","#343951"],clear:["#f2f5ff","#998b85","#fff0d9","#f4f1d8","#c0cbb4"],overcast:["#dce6f1","#8c8797","#e9eff9","#ccd6c6","#aebbb4"]},Mf=Object.fromEntries(Object.entries(q2).map(([n,t])=>[n,t.map(e=>new qt(e))])),Y2={sunrise:["#f6bfc2","#947b96","#ffd29d","#f0c7b7","#767d9c"],sunset:["#f1ad90","#8d647a","#ffaf71","#eab290","#80677f"]},$2=Object.fromEntries(Object.entries(Y2).map(([n,t])=>[n,t.map(e=>new qt(e))])),Z2={high:{size:2048,type:Ks},low:{size:1024,type:wh}},{clamp:j2,lerp:so,smoothstep:K2}=se;function pg(n,t,e){n.toneMapping=da,n.toneMappingExposure=1.07,n.shadowMap.autoUpdate=!1;let i=new js("#fff4e5","#897e91",1.13),s=new Ts("#fff0d4",2.15),r=new Ts("#dbeaff",.24),{minX:o,maxX:a,minZ:c,maxZ:l}=e,u=(o+a)/2,f=(c+l)/2;s.position.set(u-610,1150,f-490),s.target.position.set(u,0,f),r.position.set(u+290,410,f+410);let h=Math.hypot(a-o,l-c)/2+175;Object.assign(s.shadow.camera,{left:-h,right:h,top:h,bottom:-h,near:20,far:2700}),s.shadow.camera.updateProjectionMatrix(),s.shadow.normalBias=1.15,s.shadow.bias=-12e-5,s.shadow.radius=3.4;let d=Array.from({length:X2},()=>new ua("#ffd7a5",0,145,2));t.add(i,s,s.target,r,...d);let m=[],y,p,g,x,v,b=new qt,_=new qt;function M(){s.shadow.dispose(),s.shadow.map=null,s.shadow.mapPass=null}function R(P){let k=P==="off"||P==="low"?P:"high";if(k===x)return;x=k;let z=Z2[k];n.shadowMap.enabled=s.castShadow=!!z,M(),n.shadowMap.needsUpdate=!1,v=!!z,z&&(n.shadowMap.type=z.type,s.shadow.mapSize.setScalar(Math.min(z.size,n.capabilities.maxTextureSize)))}R("high");function S(){for(let P of t.children)P.isMesh&&(P.receiveShadow=!0,P.geometry.computeBoundingBox(),P.castShadow=P.geometry.boundingBox.max.y+P.position.y>-99)}function T(P,k){let z=/(light|lamp|sconce)/i.test(P.type),O=!k.animate||z;k.root.traverse(U=>{!U.isMesh||U.material.transparent||U.material.isShaderMaterial||(U.receiveShadow=!0,U.castShadow||=O)}),z&&P.entityId&&P.visualKind!=="none"&&m.push({item:P,object:k})}function I(P,k,z,O=!1){let{elevation:U,azimuth:V,rising:j,daylight:dt,twilight:ot,lowSun:G,cloud:q}=P.solar??is(P),xt=j2(U,-12,35),gt=`${j}:${Math.round(xt*4)}:${Math.round(q*32)}`,pt=K2(U,-.85,9);if(gt!==y){let rt=[i.color,i.groundColor,s.color,z.color,t.background],wt=$2[j?"sunrise":"sunset"];for(let[Lt,Nt]of rt.entries()){_.lerpColors(Mf.clear[Lt],Mf.overcast[Lt],q),Nt.lerpColors(Mf.night[Lt],_,dt);let H=Lt===2?G*.76:ot*(Lt===4?.55:.43);Nt.lerp(wt[Lt],H*(1-q*.73))}i.intensity=so(.63,1.13+q*.17,dt)+ot*.17,s.intensity=.23+pt*so(1.91,.48,q)*so(.46,1,dt),r.intensity=so(.17,.23,dt)+ot*.08,s.shadow.intensity=pt*so(.83,.21,q),y=gt,g=void 0}let at=Math.round(V/2)*2,St=Math.max(10,Math.round(U)),Z=`${at}:${St}`;if(pt>0&&Z!==p){let rt=se.degToRad(at),wt=se.degToRad(St),Lt=Math.cos(wt)*1600;s.position.set(u+Math.sin(rt)*Lt,Math.sin(wt)*1600,f-Math.cos(rt)*Lt),p=Z,v=!0}if(g!==k||O){let rt=m.flatMap(({item:wt,object:Lt})=>{let Nt=k[wt.id];if(Nt?.state!=="on")return[];let H=Number.isFinite(Nt.attributes?.brightness)?se.clamp(Nt.attributes.brightness/255,0,1):1;return H>0?[{object:Lt,power:H,color:Nt.attributes?.rgb_color}]:[]}).sort((wt,Lt)=>Lt.power-wt.power);for(let[wt,Lt]of d.entries()){let Nt=rt[wt];if(!Nt){Lt.intensity=0;continue}let{object:H,power:bt,color:K}=Nt;Array.isArray(K)&&K.length===3&&K.every(Number.isFinite)?(b.setRGB(...K.map($=>se.clamp($/255,0,1)),Ke),Lt.color.copy(b)):Lt.color.set("#ffd5a2"),Lt.position.copy(H.root.position),Lt.position.y+=Math.max(18,(H.anchorY-9)*H.root.scale.y),Lt.intensity=bt*so(2350,1250,dt)}g=k}n.shadowMap.enabled&&(v||O&&pt>0)&&(n.shadowMap.needsUpdate=!0,v=!1)}return{markStructure:S,register:T,update:I,setShadowQuality:R,dispose:M}}var Ti=(n,t,e)=>Object.freeze({label:n,azimuth:t,tilt:e,zoom:1}),ru=65,J2=88,ou=4400,Q2=1900,mg=-111,ro=Object.freeze({default:Ti("Default",0,0),top:Ti("Top down",0,0),high:Ti("High angle",0,15),dollhouse:Ti("Dollhouse",2,30),corner:Ti("Corner",45,40),north:Ti("From north",180,42),east:Ti("From east",90,42),south:Ti("From south",0,42),west:Ti("From west",270,42),waterfront:Ti("Waterfront",0,15),free:Ti("Free view",0,25)});function gg(n,t=!1){let e=Object.entries(ro).map(([s,{label:r}])=>[s,r]);t&&e.push(["plan","2D plan"]);let i=e.map(([s,r])=>{let o=n.ownerDocument.createElement("option");return o.value=s,o.textContent=r,o});n.replaceChildren(...i),n.value="default",n.disabled=!1}function ss(n="top"){let t=typeof n=="string"?{preset:n}:n??{},e=Object.hasOwn(ro,t.preset)?t.preset:"top",i=ro[e],s=Number.isFinite(t.azimuth)?t.azimuth:i.azimuth,r=e==="free"||e==="default"?J2:ru;return{preset:e,azimuth:(s%360+360)%360,tilt:Number.isFinite(t.tilt)?se.clamp(t.tilt,0,r):i.tilt,zoom:Number.isFinite(t.zoom)?se.clamp(t.zoom,.6,2.5):i.zoom}}function yg(n){let t=ss(n);return{...t,preset:"free",tilt:t.tilt||ro.free.tilt}}function Sf(n){return n?.preset!=="free"||![n.azimuth,n.tilt,n.zoom].every(Number.isFinite)?null:ss(n)}function wf(n){return ss({...Sf(n),preset:"default"})}function xg(n){if(n<=ru)return null;let t=se.smoothstep(n,ru,84);return{near:se.lerp(3530,2680,t),far:se.lerp(4260,3690,t)}}function bg(n,t){let e=Math.max(.4,t/1536*.68),i=se.clamp;return{w:Math.round(i((n?.w||170)*e,58,216)),h:Math.round(i((n?.h||110)*e,44,152))}}function vg(n){let t=n.RoomcraftDashboardBridge;if(t?.request)return{read:async()=>Sf(await t.request("CAMERA_GET")),write:i=>t.request("CAMERA_SET",i)};let e="roomcraft.default-camera.v1";return{async read(){return Sf(JSON.parse(n.localStorage.getItem(e)))},async write(i){i?n.localStorage.setItem(e,JSON.stringify(i)):n.localStorage.removeItem(e)}}}function _g(n,t,e,i,s="top",{focus:r,demoZoom:o}={}){let a=ss(s);if(a.preset==="waterfront"&&t?.waterfront&&(t=t.waterfront),![t?.minX,t?.maxX,t?.minZ,t?.maxZ,e,i].every(Number.isFinite)||e<=0||i<=0||t.maxX<t.minX||t.maxZ<t.minZ)throw new Error("A finite scene bounding box and viewport are required.");let c=se.degToRad(a.azimuth),l=se.degToRad(a.tilt),u=new W((t.minX+t.maxX)/2,-5,(t.minZ+t.maxZ)/2),f=new W(Math.sin(c)*Math.sin(l),Math.cos(l),Math.cos(c)*Math.sin(l));n.up.set(-Math.sin(c)*Math.cos(l),Math.sin(l),-Math.cos(c)*Math.cos(l)),n.position.copy(u).addScaledVector(f,Q2),n.lookAt(u),n.updateMatrixWorld(!0);let h=Math.max(92,Number.isFinite(t.maxY)?t.maxY:92),d=new Be,m=new W;for(let M of[t.minX-37,t.maxX+37]){for(let R of[t.minZ-53,t.maxZ+36])for(let S of[mg,h])d.expandByPoint(m.set(M,S,R).applyMatrix4(n.matrixWorldInverse));Number.isFinite(t.sceneryMinZ)&&d.expandByPoint(m.set(M,-106,t.sceneryMinZ-8).applyMatrix4(n.matrixWorldInverse))}if(Number.isFinite(t.sceneryMinZ)){let M=(d.max.y-d.min.y)*.025;d.min.y-=M,d.max.y+=M}let y=e/i,p=Math.max((d.max.x-d.min.x)/2,(d.max.y-d.min.y)/2*y),g=p/y,x=(d.min.x+d.max.x)/2,v=(d.min.y+d.max.y)/2;if([r?.x,r?.y,r?.z].every(Number.isFinite)){let{x:M,y:R}=m.set(r.x,r.y,r.z).applyMatrix4(n.matrixWorldInverse),S=Number.isFinite(r.weight)?se.clamp(r.weight,0,1):1;x=se.lerp(x,M,S),v=se.lerp(v,R,S)}n.left=x-p,n.right=x+p,n.bottom=v-g,n.top=v+g,n.zoom=Number.isFinite(o)?se.clamp(o,.6,4.5):a.zoom;let b=n.position.y+(v-g/n.zoom)*n.up.y,_=a.tilt>ru?Math.max(0,(mg+24-b)/f.y):0;return _>0&&(n.position.addScaledVector(f,_),n.updateMatrixWorld(!0)),n.far=ou+_,n.updateProjectionMatrix(),a}function Mg(n,t){let e=n.modelHeight;if(!(typeof window>"u"?globalThis:window).RoomcraftModels.supportsHeight(n)||!Number.isFinite(e)||e<6||e>300)return 0;let{min:s,max:r}=new Be().setFromObject(t),o=r.y-s.y;if(!Number.isFinite(o)||o<.01)return 0;let a=e/o;return t.scale.y*=a,s.y*(1-a)}var oo=(n,t)=>Math.hypot(n.x-t.x,n.y-t.y),au=(n,t,e)=>n+(t-n)*e;function Sg(){let n,t,e,i,s,r=0,o,a=!1;function c(u){i=n,s=u,r=1,a=!1}function l(u,f){if(u.quality==="area")return t=n={x:u.x,y:u.y},e=o=void 0,c(void 0),{target:t,settled:!1};if(u.quality==="last-known")return{target:t??u,settled:!1};let h=Number.isFinite(u.expiresAt),d=h?u.expiresAt:f*1e3;if(h&&e!==void 0&&d<=e)return{target:t,settled:a};let m=e===void 0?0:d-e;if(e=d,!h||!n)return t=n={x:u.x,y:u.y},c(d),{target:t,settled:!1};let y=oo(n,u);if(y>Math.max(76,m*.24)&&!(o&&d-o.marker<=3100&&oo(o,u)<=32))return o={x:u.x,y:u.y,marker:d},c(d),{target:t,settled:!1};o=void 0;let g=y>42?.14:.42,x=1-Math.exp(-Math.max(.04,m/1e3)/g);return n={x:au(n.x,u.x,x),y:au(n.y,u.y,x)},oo(t,n)>=7&&(t=n),!i||m>3100||oo(i,u)>20?c(d):(r++,a=r>=3&&d-s>=3e3),{target:t,settled:a}}return{observe:l}}function wg({allowsPoint:n,findRoute:t,geometryRevision:e}){let i,s,r=[],o=0,a=0,c,l;function u(h,d){let m=c===void 0?0:Math.max(0,h-c)*115;if(c=h,e&&l!==e()&&(r=[],s=void 0),!i||!n(i.x,i.y))return i=s=void 0,r=[],null;for(d&&r.length&&(m=1/0);r.length&&m>0;){let y=r[0],p=oo(i,y);if(p>0&&(a=Math.atan2(y.x-i.x,y.y-i.y)),p>m){i={x:au(i.x,y.x,m/p),y:au(i.y,y.y,m/p)},o+=m;break}i=r.shift(),o+=p,m-=p}return{...i,heading:a,step:o/33,walking:!d&&r.length>0}}function f(h,d,m){let y=u(d,m);if(l=e?.(),!h||!n(h.x,h.y))return!1;if(!y)return i=s=h,!0;if(s&&oo(s,h)<.1)return!0;let p=t(y,h);return p?(r=[...p],s=h,m&&u(d,!0),!0):(r=[],s=void 0,!1)}return{aim:f,sample:u}}var tw={minX:0,maxX:1536,minZ:0,maxZ:1024},ew=12,Eg=256,Ef=6,nw=[[1,0],[0,1],[-1,0],[0,-1],[1,1],[-1,1],[-1,-1],[1,-1]].map(([n,t])=>[n,t,Math.hypot(n,t)]),Tg=n=>Number.isFinite(n?.x)&&Number.isFinite(n?.y),Ag=(n,t)=>Math.hypot(n.x-t.x,n.y-t.y),Tf=class n{entries=[];static before(t,e){return t.estimate<e.estimate||t.estimate===e.estimate&&(t.cost>e.cost||t.cost===e.cost&&t.id<e.id)}push(t){let{entries:e}=this,i=e.length;for(;i>0;){let s=i-1>>1;if(!n.before(t,e[s]))break;e[i]=e[s],i=s}e[i]=t}pop(){let{entries:t}=this,e=t[0],i=t.pop();if(!t.length)return e;let s=0;for(;s*2+1<t.length;){let r=s*2+1;if(r+1<t.length&&n.before(t[r+1],t[r])&&r++,!n.before(t[r],i))break;t[s]=t[r],s=r}return t[s]=i,e}};function iw(n,t,e,i){let s=Math.floor(n.minX/t)*t,r=Math.floor(n.minZ/t)*t,o=Math.ceil((n.maxX-s)/t)+1,a=Math.ceil((n.maxZ-r)/t)+1,c=o*a,l=new Uint8Array(c),u=new Uint8Array(c),f=new Uint8Array(c),h=g=>({x:s+g%o*t,y:r+Math.floor(g/o)*t}),d=(g,x)=>g>=0&&g<o&&x>=0&&x<a;function m(g){if(!l[g]){let{x,y:v}=h(g);l[g]=e(x,v)?1:2}return l[g]===1}function y(g,x,v){return u[g]&v||(u[g]|=v,m(x)&&i(h(g),h(x))&&(f[g]|=v)),!!(f[g]&v)}function p(g,x){let v=Math.round((g.x-s)/t),b=Math.round((g.y-r)/t),_=new Map;for(let M=0;M<=3;M++){for(let R=-M;R<=M;R++)for(let S=-M;S<=M;S++){if(Math.max(Math.abs(S),Math.abs(R))!==M||!d(v+S,b+R))continue;let T=(b+R)*o+v+S;if(!m(T))continue;let I=h(T);(x?i(g,I):i(I,g))&&_.set(T,Ag(I,g))}if(M>=1&&_.size)break}return _}return function(x,v){let b=p(x,!0),_=p(v,!1);if(!b.size||!_.size)return null;let M=new Tf,R=new Float64Array(c).fill(1/0),S=new Int32Array(c).fill(-1),T=(I,P,k=-1)=>{P>=R[I]||(R[I]=P,S[I]=k,M.push({id:I,cost:P,estimate:P+Ag(h(I),v)}))};for(let[I,P]of b)T(I,P);for(let I=M.pop();I;I=M.pop()){let{id:P,cost:k}=I;if(k!==R[P])continue;if(_.has(P)){let U=[v];for(let V=P;V>=0;V=S[V])U.push(h(V));return U.reverse()}let z=P%o,O=Math.floor(P/o);for(let[U,[V,j,dt]]of nw.entries()){if(!d(z+V,O+j))continue;let ot=P+j*o+V,G=k+dt*t;G<R[ot]&&y(P,ot,1<<U)&&T(ot,G,P)}}return null}}function sw(n,t,e){if(!t)return null;let i=[],s=n,r=0;for(;r<t.length;){let o=t.length-1;for(;o>=r&&!e(s,t[o]);)o--;if(o<r)return null;s=t[o],i.push(s),r=o+1}return i}function Rg({allowsPoint:n,allowsRoute:t,bounds:e=tw,gridSize:i=ew,geometryRevision:s}={}){let r=e,o,a=[],c=(d,m)=>t(d.x,d.y,m.x,m.y),l=d=>Tg(d)&&n(d.x,d.y),u=()=>{a=[]};function f(d,m){if(!l(d)||!l(m))return null;if(c(d,m))return[m];let y=s?.();y!==o&&(o=y,u()),[d,m].some(({x:g,y:x})=>g<r.minX||g>r.maxX||x<r.minZ||x>r.maxZ)&&(r={minX:Math.min(r.minX,d.x,m.x),maxX:Math.max(r.maxX,d.x,m.x),minZ:Math.min(r.minZ,d.y,m.y),maxZ:Math.max(r.maxZ,d.y,m.y)},u());let p=Math.max(2,i,(r.maxX-r.minX)/Eg,(r.maxZ-r.minZ)/Eg);for(let g of[0,1]){a[g]??=iw(r,p/(g+1),n,c);let x=sw(d,a[g](d,m),c);if(x)return x}return null}function h(d,m,y=72){if(!Tg(d)||!Number.isFinite(y)||y<0)return null;if(l(d))return d;let p=l(m),g=p?Math.atan2(m.y-d.y,m.x-d.x):0,x,v,b=Math.ceil(y/Ef);for(let _=1;_<=b;_++){let M=Math.min(_*Ef,y),R=Math.max(8,Math.ceil(2*Math.PI*M/Ef));for(let S=0;S<R;S++){let I=(S%2?(S+1)/2:-S/2)*2*Math.PI/R,P=g+I,k={x:d.x+M*Math.cos(P),y:d.y+M*Math.sin(P)};if(l(k)){if(!p||c(m,k))return k;x??=k,Math.abs(I)<=Math.PI/2&&(v??=k)}}}return v??x??null}return{findRoute:f,standingTarget:h,invalidate:u}}var rw=/(?:sofa|loveseat|chaise)-/,ow=/-desk-/;function Ds(n,t,e,i,s,r,o){return{x:n,z:t,surface:e,yaw:i,width:s,depth:r,pose:o}}function aw(n,t,e){let i=n==="sofa"||n.includes("cloud-sofa"),s=i&&e>t,r=n.includes("loveseat")||n.includes("chaise")?2:3,o=[];if(s){let a=e*.88/r,c=t*.38;for(let u=0;u<r;u++){let f=-.44*e+a*(u+.5);o.push(Ds(-.25*t+.018*Math.min(t,e),f,37,Math.PI/2,a-3,c,"lounge"))}let l=n==="sofa"?1:-1;o.push(Ds(.22*t,l*.3*e,37,l>0?Math.PI:0,.48*t,.34*e,"lounge"))}else{let a=i?.57*e:e,c=i?-.215*e:0,l=.8*t/r;for(let u=0;u<r;u++)o.push(Ds(-.4*t+l*(u+.5),c+a*.08,37,0,l-3,a*.7,"lounge"));i&&o.push(Ds(-.32*t,.25*e,37,0,.33*t,.42*e,"lounge"))}return o}function cw(n,t){let{x:e,z:i,angle:s}=n,r=-Math.sin(s),o=Math.cos(s);return t.some(({x:a,z:c,item:l})=>{let u=a-e,f=c-i,h=Math.min(104,Math.max(50,Math.min(l.w,l.h)*.58));return Math.hypot(u,f)<=h&&u*r+f*o>=-8})}function lw(n,t){let{type:e,w:i,h:s}=n.item;if(e==="sofa"||rw.test(e))return aw(e,i,s);if(e==="diningChair"||e.startsWith("living-dining-chair-"))return[Ds(0,0,30,0,i*.83,s*.83,"dining")];if(e==="chair"||e==="stool"||e.includes("desk-chair")){let r=e.includes("desk-chair")||cw(n,t)?"desk":"idle";return[Ds(0,0,e==="stool"?32:41,0,i*.83,s*.83,r)]}if(e==="armchair"||e.includes("acorn-armchair"))return[Ds(0,0,32,0,i*.65,s*.76,"lounge")];if(e==="bedroomBench"){let r=i>=58?2:1;return Array.from({length:r},(o,a)=>Ds((a-(r-1)/2)*i*.44,0,34.2,0,i*.87/r,s*.91,"bench"))}return[]}function Cg(n,t,e){let i=n.filter(({item:r})=>r.type==="desk"||ow.test(r.type)),s=[];for(let r of n){let{item:o,x:a,z:c,baseY:l,angle:u}=r,f=t.get(o.id)?.root;if(!f||l!==0)continue;let h=Math.sin(u),d=Math.cos(u);for(let[m,y]of lw(r,i).entries()){if(y.width<12||y.depth<11)continue;let p=a+y.x*d-y.z*h,g=c+y.x*h+y.z*d;if(e(p,g)<7)continue;let v=y.yaw-u,b=f.position.y+y.surface*f.scale.y;b<10||b>84||s.push({id:`${o.id}:${m}`,itemId:o.id,x:p,z:g,y:b,heading:v,forwardX:Math.sin(v),forwardZ:Math.cos(v),pose:y.pose,reach:Math.min(42,Math.max(18,y.depth*.48+8)),behind:Math.max(7,y.depth*.32),width:y.width,depth:y.depth})}}return s}function Ig(n,t,e,i,s=1){let r=t-n.x,o=e-n.z;return Math.hypot(r,o)>n.reach*s||r*n.forwardX+o*n.forwardZ<-n.behind?!1:!i||i(t,e,n.x,n.z)}var Fn=[[0,1]],uu=[[-1,0],[1,0]],ke=[...Fn,...uu,[0,-1]],uw=[[-1,0]],Ng=[[0,0]],os="long-side",hw=37,fw={pose:"prep",faces:os},Pg={pose:"wash",faces:os},Dg={pose:"makeBed",faces:uu},Pf={pose:"write",faces:Fn},Lf={pose:"browse",faces:Fn},La={pose:"tidy",faces:ke,frontPreference:9},Cf={pose:"water",faces:ke},dw={pose:"floorPlay",faces:Ng,penalty:16},ao={pose:"adjust",faces:ke,penalty:8},pw=new Map([["tv",{pose:"watch",faces:uw,reach:64,offset:13}],["desk",{...Pf,faceFraction:-.16,single:!0}],["bed",Dg],["diningTable",{pose:"setTable",faces:os}],["table",{pose:"setTable",faces:os}],["coffeeTable",{pose:"setTable",faces:ke}],["sideTable",{pose:"tidy",faces:ke}],["counter",fw],["kitchenWorktop",{pose:"cook",faces:ke}],["doubleVanity",Pg],["bathFixtures",{...Pg,penalty:8}],["tub",{pose:"rinse",faces:os}],["bookcase",Lf],["dresser",La],["storageCabinet",La],["nightstand",La],["floorPlant",Cf],["plant",Cf],["mirror",{pose:"groom",faces:Fn,wall:!0}],["artwork",{pose:"admire",faces:Fn,wall:!0}],["presenceSwitch",{pose:"tap",faces:Fn,wall:!0}],["thermostat",{pose:"adjust",faces:Fn,wall:!0}],["window",{pose:"lookOut",faces:ke,wall:!0,reach:50}],["wallUnit",{pose:"admire",faces:Fn,wall:!0,penalty:12}],["humidifier",{pose:"inspect",faces:ke,penalty:6}],["airPurifier",{pose:"inspect",faces:ke,penalty:6}],["windowFan",{pose:"inspect",faces:ke,penalty:6}],["lamp",ao],["floorLamp",ao],["tableLamp",ao]]),mw=new Map([["desk",Pf],["bed",Dg],["dining-table",{pose:"setTable",faces:os}],["dining",{pose:"setTable",faces:os}],["coffee-table",{pose:"setTable",faces:ke}],["side-table",{pose:"tidy",faces:ke}],["bookcase",Lf],["nightstand",La],["dresser",La],["floor-light",ao],["table-light",ao],["wall-light",{...ao,faces:Fn,wall:!0}]]),Af={pose:"toyPlay",faces:ke},gw=new Map([["softToy",Af],["activityToy",Af],["foamBlock",{pose:"stack",faces:ke,penalty:3}],["playMat",dw],["paddedPanel",{pose:"peek",faces:os,penalty:12}],["fireplace",{pose:"warm",faces:Fn,offset:6}],["shelf",Lf],["storage",{pose:"sort",faces:Fn}],["planterSet",Cf],["playFurniture",Af]]),yw=new Map([["aquarium",{pose:"watchFish",faces:ke,offset:5}],["terrarium",{pose:"watchGecko",faces:ke,offset:5}],["cornerDesk",{...Pf,faceFraction:-.16,single:!0}],["cribBed",{pose:"peek",faces:uu}],["book",{pose:"readFloor",faces:ke}],["ball",{pose:"ballPlay",faces:ke}],["texturedBall",{pose:"ballPlay",faces:ke}],["plush",{pose:"cuddle",faces:ke}],["photoBunnyPlush",{pose:"cuddle",faces:ke}],["cups",{pose:"stack",faces:ke}],["rings",{pose:"stack",faces:ke}],["blocks",{pose:"stack",faces:ke}],["photoActivityTable",{pose:"pressKeys",faces:ke}],["activityBoard",{pose:"pressKeys",faces:Fn}],["mirror",{pose:"groom",faces:Fn}],["playGym",{pose:"reachToy",faces:ke}],["photoWoodArch",{pose:"reachToy",faces:ke}],["photoToyShelf",{pose:"sort",faces:Fn}],["lowShelf",{pose:"sort",faces:Fn}],["photoBearChair",{pose:"floorPlay",faces:Fn}]]);function Lg(n,t){let e=t?.[n];return pw.get(n)??yw.get(e?.form)??mw.get(e?.seriesId)??gw.get(e?.artFamily)}function xw(n,t,e,i){if(n.faces===Ng){let r=o=>o>105?[-.27,0,.27]:[0];return r(t).flatMap(o=>r(e).map(a=>({x:t*o,z:e*a,nx:0,nz:0})))}return(n.faces===os?e>t?uu:[[0,1],[0,-1]]:n.faces).flatMap(([r,o])=>{let a=r?e:t,c=n.single||i?1:Math.min(5,Math.ceil(a/49)),l=(r?t:e)*(n.faceFraction??.5);return Array.from({length:c},(u,f)=>{let h=i?Math.max(-a*.415,Math.min(a*.415,r?i.z:i.x)):((f+.5)/c-.5)*a*.83;return{x:r?r*l:h,z:o?o*l:h,nx:r,nz:o}})})}function Fg(n,t,e){let i=(typeof window>"u"?globalThis:window).RoomcraftInventory?.byType,s=[],r=new Map(n.map(o=>[o.item.id,o]));for(let{item:o,x:a,z:c,baseY:l,angle:u=0,mountY:f}of n){let h=Lg(o.type,i),{w:d,h:m}=o;if(!h||!t.has(o.id)||l!==0||o.visualKind==="none"||!h.wall&&Number.isFinite(f)||![d,m,a,c,u].every(Number.isFinite)||d<=0||m<=0)continue;let y=r.get(e?.get(o.id)?.supportId),p=y??{item:o,x:a,z:c,angle:u},g=Math.cos(p.angle??0),x=Math.sin(p.angle??0),v=y&&Lg(y.item.type,i),b=y?v?.faceFraction!==void 0?v:{faces:ke}:h,_=a-p.x,M=c-p.z,R=y?{x:_*g+M*x,z:M*g-_*x}:null;for(let[S,T]of xw(b,p.item.w,p.item.h,R).entries()){if(R&&Math.hypot(R.x-T.x,R.z-T.z)>hw)continue;let I=T.nx*g-T.nz*x,P=T.nx*x+T.nz*g;s.push({id:`${o.id}:activity:${S}`,itemId:o.id,pose:h.pose,obstacleId:p.item.id,focus:R?{x:a,z:c}:null,edgeX:p.x+T.x*g-T.z*x,edgeZ:p.z+T.x*x+T.z*g,nx:I,nz:P,heading:I||P?Math.atan2(-I,-P):-u,reach:h.reach??44,offset:h.offset??3,penalty:(h.penalty??0)+(T.nz===1?0:h.frontPreference??0)})}}return s}function Ug(n,t,e,{allowsPoint:i,allowsTarget:s}={},r){let o,a=1/0;for(let c of n){if(r?.has(c.id)||r?.has(c.itemId))continue;let{edgeX:l,edgeZ:u,nx:f,nz:h}=c;if((t.x-l)*f+(t.y-u)*h<-18)continue;let m=l+f*(e+c.offset),y=u+h*(e+c.offset),p=Math.hypot(m-t.x,y-t.y),g=p+c.penalty;if(p>c.reach||g>a||g===a&&c.id>=o.id||i&&!i(m,y,e)||s&&(!s(m,y,t.x,t.y,c.obstacleId)||!s(m,y,l+f*3,u+h*3,c.obstacleId)))continue;a=g;let x=c.focus?Math.atan2(c.focus.x-m,c.focus.z-y):c.heading;o={id:c.id,itemId:c.itemId,pose:c.pose,x:m,z:y,heading:x}}return o}var rs={lean:.03,thighs:-1.3,shins:1.16,hands:[-.43,-.4],pulse:[.1,.1],pace:2.1},Bi={crouch:-4.4,lean:.24,thighs:-.77,shins:1.48,headPitch:.19,hands:[-.65,-.62]},bw={idle:rs,lounge:{...rs,lean:-.13,tilt:.07,thighs:-1.16,shins:.92,hands:[-.22,-.14],pace:1.8},dining:{...rs,lean:.06,hands:[-.69,-.56],pulse:[.1,.5],pace:1.75,prop:"spoon"},desk:{...rs,lean:.16,thighs:-1.26,shins:1.18,hands:[-.98,-.92],pulse:[.22,.22],pace:6.3},bench:{...rs,tilt:-.09,hands:[-.35,-.56],pulse:[.12,.2],pace:3.3},read:{...rs,lean:.13,headPitch:.31,hands:[-1.09,-1.17],pulse:[.08,.2],pace:1.85,prop:"book"},sip:{...rs,hands:[-.29,-.96],pulse:[.04,.58],pace:1.55,prop:"mug"},sketch:{...rs,lean:.18,headPitch:.31,hands:[-.63,-1.04],pulse:[.06,.26],pace:3.7,prop:"pencil"},chat:{...rs,tilt:-.1,hands:[-.42,-.58],pulse:[.2,.38],pace:2.9,look:.21},write:{lean:.21,headPitch:.31,hands:[-.55,-1.07],pulse:[.12,.27],pace:3.9,prop:"pencil"},prep:{lean:.14,headPitch:.18,hands:[-.9,-.91],pulse:[.12,.34],pace:4.1},cook:{lean:.12,headPitch:.16,hands:[-.74,-1.04],pulse:[.16,.37],pace:3.6,prop:"spoon"},wash:{lean:.19,headPitch:.24,hands:[-1.02,-1.06],pulse:[.34,.31],pace:5.8,armSpread:[-.12,.12]},rinse:{...Bi,crouch:-3.2,hands:[-.89,-.81],pulse:[.34,.12],pace:3.4},makeBed:{lean:.27,headPitch:.22,hands:[-.93,-.94],pulse:[.32,.28],pace:2.4,armSpread:[.15,-.15]},setTable:{lean:.13,headPitch:.18,hands:[-.55,-.86],pulse:[.2,.42],pace:2.9,prop:"mug"},tidy:{lean:.17,headPitch:.21,hands:[-.63,-.83],pulse:[.39,.42],pace:2.8},browse:{lean:.05,headPitch:-.12,hands:[-.18,-.9],pulse:[.06,.63],pace:1.8,look:.2},sort:{...Bi,hands:[-.73,-.94],pulse:[.42,.39],pace:3.6,prop:"ball"},warm:{lean:.08,headPitch:.1,hands:[-.98,-.98],pulse:[.09,.1],pace:2.1,armSpread:[.12,-.12]},water:{lean:.16,headPitch:.19,hands:[-.61,-.93],pulse:[.07,.57],pace:2,prop:"wateringCan"},watch:{lean:.03,headPitch:-.16,hands:[-.19,-.25],pulse:[.06,.08],pace:1.8,look:.1},watchFish:{lean:.13,headPitch:-.02,hands:[-.34,-.49],pulse:[.07,.22],pace:1.7,look:.32},watchGecko:{lean:.23,headPitch:.18,hands:[-.27,-.65],pulse:[.05,.36],pace:1.45,look:.25},inspect:{...Bi,crouch:-2.7,hands:[-.3,-.57],pulse:[.08,.28],pace:2.4},lookOut:{lean:.14,headPitch:-.09,hands:[-.43,-.45],pulse:[.05,.05],pace:1.65,look:.26},admire:{lean:-.03,headPitch:-.16,hands:[-.12,-.2],pulse:[.08,.17],pace:1.25,look:.16},groom:{lean:.08,headPitch:-.09,hands:[-.14,-1.37],pulse:[.08,.37],pace:3.9,look:.17},tap:{lean:.07,headPitch:-.12,hands:[-.22,-1.13],pulse:[.05,.62],pace:2.2},adjust:{lean:.06,headPitch:-.06,hands:[-.22,-.91],pulse:[.1,.47],pace:2.55},floorPlay:{...Bi,crouch:-5.3,tilt:-.1,pulse:[.31,.36],pace:3.4},toyPlay:{...Bi,hands:[-.85,-1.01],pulse:[.28,.52],pace:4.1,prop:"ball"},stack:{...Bi,hands:[-.73,-.87],pulse:[.21,.55],pace:2.9,prop:"block"},ballPlay:{...Bi,hands:[-.72,-.91],pulse:[.35,.53],pace:3.5,prop:"ball"},cuddle:{...Bi,crouch:-2.4,tilt:.12,hands:[-1.03,-1.19],pulse:[.1,.16],pace:2.05,prop:"toy"},readFloor:{...Bi,headPitch:.29,hands:[-.94,-1.03],pulse:[.09,.22],pace:2.2,prop:"book"},pressKeys:{lean:.2,headPitch:.23,hands:[-.91,-1.04],pulse:[.33,.43],pace:7.2},reachToy:{...Bi,headPitch:-.17,hands:[-.45,-1.24],pulse:[.21,.48],pace:2.9},peek:{lean:.21,headPitch:.1,tilt:.09,hands:[-.55,-.65],pulse:[.07,.21],pace:1.9,look:.22}},vw={idle:["idle","read","chat"],lounge:["lounge","read","sip"],dining:["dining","sip","chat"],desk:["desk","sketch","desk"],bench:["bench","read","chat"]},If=7,Rf=.55;function cu(n,t=0){let e=vw[n.pose]??[n.pose];return e[Math.floor(Math.max(0,t)/If)%e.length]}function lu(n,t=0,e=!1){let i=bw[n];if(!i)return null;let{lean:s=0,tilt:r=0,crouch:o=0,headPitch:a=0,look:c=.08,thighs:l=0,shins:u=0,hands:f,armSpread:h=[0,0],pulse:d=[0,0],pace:m=2.1,prop:y}=i,p=e?0:Math.max(0,t)*m,g=(x,v)=>e?0:x*((1-Math.cos(p+v))/2)**2;return{lean:s+(e?0:Math.sin(p)*.022),tilt:r,crouch:o,headPitch:a,lookAside:e?0:Math.sin(p*.42)*c,hands:[f[0]-g(d[0],0),f[1]-g(d[1],1.65)],armSpread:h,thighs:l,shins:u,prop:y}}function kg(n,t,e=!1){let i=cu(n,e?0:t),s=lu(i,t,e),r=t%If;if(e||!s||t<If||r>=Rf)return s;let o=cu(n,t-Rf),a=lu(o,t);if(!a||o===i)return s;let c=r/Rf,l=c*c*(3-2*c),u=(f,h)=>f+(h-f)*l;return{lean:u(a.lean,s.lean),tilt:u(a.tilt,s.tilt),crouch:u(a.crouch,s.crouch),headPitch:u(a.headPitch,s.headPitch),lookAside:u(a.lookAside,s.lookAside),hands:s.hands.map((f,h)=>u(a.hands[h],f)),armSpread:s.armSpread.map((f,h)=>u(a.armSpread[h],f)),thighs:u(a.thighs,s.thighs),shins:u(a.shins,s.shins),prop:c<.5?a.prop:s.prop}}function Og(){let n=new Te(1,1,1),t=new Ae(1,10,7),e=new ze(1,1,1,12),i=new bn(1,.23,5,12),s=new Map,r={book:[[n,"#628b88",0,0,0,8.9,1.1,6.1],[n,"#fff0cf",0,.69,0,8.1,.7,5.55],[n,"#b6a189",0,1.06,0,.3,.1,5.4]],mug:[[e,"#df9d79",0,1,0,2.1,4.2,2.1],[e,"#f6dcc2",0,3.16,0,1.63,.13,1.63],[i,"#df9d79",2.1,1,0,1.38,1.26,1.38]],spoon:[[n,"#bc8b5b",0,0,1.4,.75,.75,5.9],[t,"#d8ae79",0,0,4.6,1.25,.48,1.6]],pencil:[[n,"#f3b86a",0,.1,1.2,.78,.78,5.8],[n,"#483852",0,.1,4.25,.45,.45,.7]],ball:[[t,"#e3b066",0,0,0,2.7,2.7,2.7],[t,"#ffde93",0,.7,1.85,1.26,1.31,.82]],block:[[n,"#d591ad",0,0,0,4.4,4.4,4.4],[t,"#ffdbbd",0,.3,2.24,1.1,1.15,.1]],toy:[[t,"#c8916d",0,.2,0,2.8,2.65,1.85],[t,"#daab88",0,2.55,.2,2.7,2,1.91],[t,"#daab88",-1.85,3.9,0,1,1,.8],[t,"#daab88",1.85,3.9,0,1,1,.8]],wateringCan:[[e,"#7ba797",0,.1,0,2.65,3.3,2.3],[i,"#a2bba0",0,2.23,-.38,1.6,1.5,1.4],[n,"#93af99",0,.52,2.44,1.15,1.14,3.5]]};function o(c){let l=new Map,u;return f=>{if(u!==f&&(u&&(l.get(u).visible=!1),u=Object.hasOwn(r,f)?f:void 0,!!u)){if(!l.has(u)){let h=new ee;h.name="radar-held-"+u,h.position.set(1.15,-7.65,2);for(let[d,m,y,p,g,x,v,b]of r[u]){s.has(m)||s.set(m,new He({color:m,emissive:m,emissiveIntensity:.13,roughness:.8}));let _=new ae(d,s.get(m));_.position.set(y,p,g),_.scale.set(x,v,b),h.add(_)}c[1].add(h),l.set(u,h)}l.get(u).visible=!0}}}function a(){for(let c of[n,t,e,i])c.dispose();for(let c of s.values())c.dispose()}return{attach:o,dispose:a}}var _w=24,Nf=17.5,Bg=.42,Mw=8.9,fu=20,Na=[{role:"papa",scale:[1.26,1.25,1.22],radius:fu,sweater:"#537eaa",trim:"#ffcc81",skin:"#db9f76",hair:"#4b3533"},{role:"mama",scale:[1.09,1.18,1.12],radius:18,sweater:"#c86587",trim:"#ffdeaf",skin:"#e8af83",hair:"#5a3841"},{role:"baby",scale:[.92,.83,.92],radius:16,sweater:"#8b78cf",trim:"#ffe492",skin:"#f1b98e",hair:"#674138"}],hu=(n,t,e)=>n+(t-n)*e,zg=n=>Math.min(1,Math.max(0,n)),Sw=(n,t)=>Math.atan2(Math.sin(n-t),Math.cos(n-t)),ww={lean:0,tilt:0,crouch:0,headPitch:0,lookAside:0,hands:[0,0],armSpread:[0,0],thighs:0,shins:0};function Da(n,t=.12){return new He({color:n,roughness:.78,emissive:n,emissiveIntensity:t})}function Ew(n,t,e,i=0,s=0){let r=!e&&t%4.8<.13;n.head.rotation.x=-.62+i+(e?0:Math.sin(t*1.5)*.047),n.head.rotation.y=s,n.head.rotation.z=e?0:Math.sin(t*3.4)*.047;for(let o of n.eyes)o.scale.y=r?.15:.87}function Df(n,t=()=>0,{supportsRoute:e,floorClearance:i,allowsBodyPoint:s,allowsBodyRoute:r,geometryRevision:o,seats:a=[],interactions:c=[],occlusionScene:l}={}){let u=new ee;u.name="tracked-people",n.add(u);let f=new ee;l?.add(f);let h,d,m=new Map,y=new Map,p=Na.map(()=>[]),g=!1,x=!1,v=0,b=!1,_=!0,M;function R(){let G=new ln;G.absarc(0,4,3.5,0,2*Math.PI,!1);let q=new ln;return q.moveTo(-6.5,-6.5),q.quadraticCurveTo(-7,-.2,0,-.2),q.quadraticCurveTo(7,-.2,6.5,-6.5),q.closePath(),{sphere:new Ae(1,12,8),disc:new Ln(1,24).rotateX(-Math.PI/2),groundRing:new ra(13.8,Nf,32).rotateX(-Math.PI/2),glasses:new bn(1,.14,6,16),occlusionGlyph:new Di([G,q],12),occlusionMaterial:new Ce({color:"#fff1cd",depthFunc:Ir,depthWrite:!1,transparent:!0,opacity:.9,toneMapped:!1}),palette:Na.map(({sweater:xt,trim:gt,skin:pt,hair:at})=>Object.fromEntries(Object.entries({sweater:xt,trim:gt,skin:pt,hair:at}).map(([St,Z])=>[St,Da(Z)]))),ink:Da("#423c50",.09),cheek:Da("#d78383"),shoes:Da("#514656"),white:Da("#fff1dc"),shadow:new Ce({color:"#433849",transparent:!0,opacity:.22,depthWrite:!1}),groundMark:new Ce({color:"#fff1cd",depthTest:!1,depthWrite:!1,toneMapped:!1}),retainedMark:new Ce({color:"#eeb660",depthTest:!0,depthWrite:!1,toneMapped:!1})}}function S(G){h??=R(),d??=Og();let{role:q,scale:xt,radius:gt}=Na[G],{sweater:pt,trim:at,skin:St,hair:Z}=h.palette[G],rt=q==="baby",wt=new ee;wt.name=`radar-avatar-${q}`;let Lt=new ee;Lt.name="radar-avatar-pose";let Nt=new ee,H=new ee,bt=[],K=[],et=[];u.add(wt),wt.add(Lt),Lt.add(Nt),Nt.scale.set(...xt);let $=(Ft,Ut,Y,te,Ht,B,A,it)=>{let mt=new ae(h.sphere,Ut);return mt.position.set(Y,te,Ht),mt.scale.set(B,A,it),Ft.add(mt),mt},ht=new ae(h.disc,h.shadow);ht.position.y=.13,ht.scale.set(19,1,19),wt.add(ht);let yt=new ae(h.groundRing,h.groundMark);yt.name="radar-track-mark",yt.renderOrder=-1,u.add(yt);let It=l?new ae(h.occlusionGlyph,h.occlusionMaterial):null;It&&(It.name="radar-occlusion-cue",It.visible=!1,f.add(It)),$(Nt,pt,0,15,0,rt?8.2:7.1,8.3,5.4),rt?($(Nt,at,0,17.5,4.8,4.9,4.1,1.15),$(Nt,h.white,0,17.4,5.9,1.5,1.5,.35)):($(Nt,at,0,20.7,2.4,5.8,2.2,4),$(Nt,at,q==="papa"?-2.4:0,15.7,5.2,1.5,3.7,.65));for(let Ft of[-1,1]){let Ut=new ee;Ut.position.set(Ft*3.4,10.3,.1),Nt.add(Ut);let Y=new ee;Y.position.y=-4.65,Ut.add(Y);let te=rt?pt:h.ink;$(Ut,te,0,-2.35,0,2.65,3.25,2.6),$(Y,te,0,-1.6,0,2.4,3.1,2.4),$(Y,rt?at:h.shoes,0,-3.5,1.25,3.1,2.1,4),$(Y,h.white,0,-4.15,3.25,2.75,1.1,2),et.push({thigh:Ut,shin:Y});let Ht=new ee;Ht.position.set(Ft*6.25,19.1,0),Nt.add(Ht),$(Ht,pt,Ft*.9,-3.7,.15,2.75,5.3,2.7),$(Ht,St,Ft*1.3,-7.8,.5,2.3,2.6,2.2),K.push(Ht)}H.position.set(0,rt?26:27.2,0),rt&&H.scale.set(1.16,1.17,1.12),Nt.add(H),$(H,Z,0,1.3,-1.65,9.2,9.65,8.6),$(H,St,0,0,1.9,8.65,8.45,7.5);let Pt=$(H,Z,-2.1,7.3,4.25,6.4,3.4,4.35);if(Pt.rotation.z=q==="papa"?-.27:.22,q==="mama"&&($(H,Z,-6.7,-1.9,-3.8,3.6,8.1,5.2),$(H,Z,6.2,-1.7,-3.9,3.3,7.6,5.4),$(H,Z,2.8,10.4,-2.5,5.1,5.1,5.1),$(H,at,4.4,8.7,2.2,2.8,1.1,1.1)),rt){$(H,Z,-7.3,6.7,-2,3.35,3.7,3.5),$(H,Z,7.3,6.7,-2,3.35,3.7,3.5);let Ft=$(H,at,.9,10,4.2,2.5,1.45,1.25),Ut=$(H,at,4.1,10,4.2,2.5,1.45,1.25);Ft.rotation.z=-.4,Ut.rotation.z=.4,$(H,h.white,2.5,9.8,5.1,1.15,1.2,1)}for(let Ft of[-1,1])if($(H,St,Ft*8.2,-.15,1.1,1.85,2.4,1.75),bt.push($(H,h.ink,Ft*3,1.2,8.95,.85,.87,.52)),$(H,h.cheek,Ft*5.05,-1.25,7.95,1.18,.62,.52),q==="papa"){let Ut=new ae(h.glasses,h.ink);Ut.position.set(Ft*3.1,1.25,9.15),Ut.scale.set(2.5,2.15,1.55),H.add(Ut)}return q==="papa"&&$(H,h.ink,0,1.6,9.35,1.1,.28,.35),$(H,h.ink,0,-1.95,9.15,1.38,.45,.38),{root:wt,groundMark:yt,poseRoot:Lt,body:Nt,head:H,arms:K,legs:et,eyes:bt,radius:gt,styleIndex:G,baby:rt,cue:It,setProp:d.attach(K)}}let T=(G,q)=>Number.isFinite(t(G,q))&&(!i||i(G,q)>0),I=(G,q,xt,gt)=>T(G,q)&&(!i||i(G,q)>=xt)&&(s?.(G,q,xt,gt)??!0),P=(G,q,xt,gt,pt,at)=>(e?.(G,q,xt,gt,pt)??!0)&&(r?.(G,q,xt,gt,pt,at)??!0);function k(G){return y.has(G)||y.set(G,Rg({allowsPoint:(q,xt)=>I(q,xt,G),allowsRoute:(q,xt,gt,pt)=>P(q,xt,gt,pt,G),geometryRevision:o})),y.get(G)}function z(G,q,xt){let gt=xt*.8;if(G.width<xt*1.35||G.depth<xt*.82||!I(G.x,G.z,gt,G.itemId)||!Ig(G,q.x,q.y,(at,St,Z,rt)=>P(at,St,Z,rt,0,G.itemId)))return[];let pt=[];for(let at=16;at<=76;at+=8){for(let St of[0,-.5,.5,-1,1,-1.5,1.5]){let Z=G.heading+St,rt=G.x+Math.sin(Z)*at,wt=G.z+Math.cos(Z)*at;I(rt,wt,xt)&&P(rt,wt,G.x,G.z,gt,G.itemId)&&pt.push({x:rt,y:wt})}if(pt.length)break}return pt}function O(G,q,xt){let{radius:gt}=G.character,pt=Z=>Math.hypot(Z.x-q.x,Z.z-q.y),at=a.filter(Z=>!xt.has(Z.id)&&pt(Z)<=Z.reach).sort((Z,rt)=>pt(Z)-pt(rt));for(let Z of at)for(let rt of z(Z,q,gt))if(G.motion.aim(rt,v,x))return{id:Z.id,heading:Z.heading,seat:Z};let St=Ug(c,q,gt,{allowsPoint:I,allowsTarget:(Z,rt,wt,Lt,Nt)=>P(Z,rt,wt,Lt,0,Nt)},xt);return St&&G.motion.aim({x:St.x,y:St.z},v,x)?St:null}function U(G,q,xt,gt){let{signal:pt,point:at,motion:St,navigator:Z}=G,rt=o?.(),wt=gt&&!at.quality&&pt.settled;if(G.activity&&(!gt||rt!==G.revision)&&(G.blend=0,G.activity=null,G.leaving=!1,G.planned=null),G.activity&&!wt&&!(at.quality==="last-known"&&G.blend>0)&&(G.leaving=!0,G.blend===0&&(G.activity=null,G.leaving=!1)),G.activity||G.planned===pt&&G.revision===rt&&G.activitiesAllowed===gt||(G.planned=pt,G.revision=rt,G.activitiesAllowed=gt,wt&&(G.activity=O(G,pt.target,xt),G.activity)))return;let Lt=Z.standingTarget(pt.target,q);St.aim(Lt??(!q&&at.keepVisible?at.fallback:null),v,x)}function V(G,q,xt){let{character:gt,activity:pt}=G,at=pt?.seat,{x:St,y:Z,heading:rt,walking:wt,step:Lt}=q,Nt=t(St,Z),H=Math.cos(rt),bt=Math.sin(rt),K=(at?at.x-St:0)*xt,et=(at?at.z-Z:0)*xt,$=v-(G.poseAt??v),ht=at?cu(at,x?0:$):pt?.pose,yt=(at?kg(at,$,x):lu(ht,$,x))??ww,It=at?at.y-Nt-Mw*Na[gt.styleIndex].scale[1]:0;gt.root.position.set(St,Nt,Z),gt.root.rotation.y=rt,gt.poseRoot.position.set(K*H-et*bt,It*xt,K*bt+et*H),gt.poseRoot.rotation.y=pt?Sw(pt.heading,rt)*xt:0,gt.poseRoot.userData.pose=xt>0?ht:"standing",gt.setProp(xt>.52?yt.prop:void 0);let Pt=Math.floor(Math.max(0,v-G.born)*16)/16+.7+gt.styleIndex*.62,Ft=Math.floor(Lt*12)/12*2*Math.PI,Ut=wt?Math.sin(Ft)*.56:0,Y=x?0:wt?Math.abs(Math.sin(Ft))*1.9:(1+Math.sin(Pt*4.7))*.47;gt.body.position.y=hu(Y*(gt.baby?1.5:1),yt.crouch,xt),gt.body.rotation.x=yt.lean*xt;let te=x?0:wt?Ut*.15:Math.sin(Pt*2.8)*.045;gt.body.rotation.z=hu(te,yt.tilt,xt);for(let Ht=0;Ht<2;Ht++){let B=Ht===0?-1:1,A=wt?-Ut*B:x?0:Math.sin(Pt*3.1+Ht)*.09;gt.arms[Ht].rotation.x=hu(A,yt.hands[Ht],xt),gt.arms[Ht].rotation.z=yt.armSpread[Ht]*xt,gt.legs[Ht].thigh.rotation.x=hu(Ut*B,yt.thighs,xt),gt.legs[Ht].shin.rotation.x=yt.shins*xt}Ew(gt,Pt,x,yt.headPitch*xt,yt.lookAside*xt)}function j(G,q=g,xt=_){v=Number.isFinite(G)?G:v,x=q||g,_=xt,b=!1;let gt=new Set,pt=at=>gt.add(at.seat?at.id:at.itemId);for(let{activity:at}of m.values())at&&pt(at);for(let at of m.values()){let{character:St}=at,{x:Z,y:rt}=at.point,wt=t(Z,rt),Lt=i?.(Z,rt)??Nf;St.groundMark.visible=Number.isFinite(wt)&&Lt>0,St.groundMark.visible&&(St.groundMark.material=at.point.quality?h.retainedMark:h.groundMark,St.groundMark.position.set(Z,wt+.26,rt),St.groundMark.scale.setScalar(Math.min(1,Lt/Nf)));let Nt=Math.max(0,v-at.renderedAt);at.renderedAt=v,at.leaving&&(at.blend=x||!xt?0:zg(at.blend-Nt/Bg),at.blend===0&&(at.activity=null,at.leaving=!1,at.planned=null));let H=at.activity;U(at,at.motion.sample(v,x),gt,xt);let bt=at.motion.sample(v,x);at.activity&&(pt(at.activity),bt&&!bt.walking&&!at.leaving&&(at.blend===0&&(at.poseAt=v),at.blend=x?1:zg(at.blend+(at.activity===H?Nt/Bg:0))));let K=at.blend*at.blend*(3-2*at.blend);St.root.visible=!!bt,St.root.userData.locationQuality=at.point.quality??"measured",bt&&V(at,bt,K),St.cue&&(St.cue.visible=!!(bt&&at.point.keepVisible),St.cue.visible&&St.head.getWorldPosition(St.cue.position)),b||=St.root.visible||St.groundMark.visible}}function dt(G,q,{reduceMotion:xt=!1}={}){if(G===M&&xt===g)return;M=G,g=xt;let gt=Number.isFinite(q)?q:v,pt=new Map;for(let St of Array.isArray(G)?G:[])if(!(typeof St?.id!="string"||!St.id||St.id.length>256||!Number.isFinite(St.x)||!Number.isFinite(St.y)||pt.has(St.id)||!St.keepVisible&&!T(St.x,St.y))&&(pt.set(St.id,St),pt.size===_w))break;for(let[St,Z]of m)pt.has(St)||(Z.character.root.visible=!1,Z.character.groundMark.visible=!1,Z.character.cue&&(Z.character.cue.visible=!1),p[Z.character.styleIndex].push(Z.character),m.delete(St));let at=Na.map(()=>0);for(let{character:St}of m.values())at[St.styleIndex]++;for(let St of[...pt.keys()].filter(Z=>!m.has(Z)).sort()){let Z=at.indexOf(Math.min(...at));at[Z]++;let rt=p[Z].pop()??S(Z),wt=k(rt.radius),Lt=wg({allowsPoint:(Nt,H)=>I(Nt,H,rt.radius),findRoute:wt.findRoute,geometryRevision:o});m.set(St,{character:rt,motion:Lt,navigator:wt,filter:Sg(),born:gt,renderedAt:gt,blend:0})}for(let[St,Z]of pt){let rt=m.get(St);if(rt.point===Z)continue;rt.point=Z;let wt=rt.filter.observe(Z,gt);(rt.signal?.target!==wt.target||rt.signal.settled!==wt.settled||rt.signal.quality!==Z.quality)&&(rt.signal={...wt,quality:Z.quality})}j(gt,xt)}function ot(){if(u.removeFromParent(),f.removeFromParent(),!!h){for(let G of[h.ink,h.cheek,h.shoes,h.white,h.shadow,h.groundMark,h.retainedMark,h.occlusionMaterial])G.dispose();for(let G of h.palette)for(let q of Object.values(G))q.dispose();h.sphere.dispose(),h.disc.dispose(),h.groundRing.dispose(),h.glasses.dispose(),h.occlusionGlyph.dispose(),d.dispose(),u.clear(),f.clear();for(let G of p)G.length=0;m.clear(),y.clear(),h=void 0}}return{setTracks:dt,render:j,dispose:ot,setVisible(G){u.visible=f.visible=G},orientOcclusionCues(G){for(let q of f.children)q.visible&&q.quaternion.copy(G.quaternion)},get hasMotion(){return!x&&m.size>0},get hasVisibleTracks(){return b}}}function Ff(n){return Number.isFinite(n?.x)&&Number.isFinite(n?.y)}function co(n){return Array.isArray(n)&&n.length===6&&Array.from(n).every(Number.isFinite)}function Uf(n){let{map:t,plan:e}=n??{};return Ff(t)&&Math.abs(t.x)<=1e9&&Math.abs(t.y)<=1e9&&Ff(e)&&e.x>=0&&e.x<=1536&&e.y>=0&&e.y<=1024}function Wg(n){return n===null||Number.isFinite(n)&&n>0}function Hg(n,t){let e=n.reduce((i,s)=>({x:i.x+s[t].x,y:i.y+s[t].y}),{x:0,y:0});return{x:e.x/n.length,y:e.y/n.length}}function as(n,t){if(!co(n)||!Ff(t))return;let[e,i,s,r,o,a]=n;return{x:e*t.x+i*t.y+s,y:r*t.x+o*t.y+a}}function Xg(n){if(!co(n))return;let[t,e,i,s,r,o]=n,a=t*r-e*s,c=Math.hypot(t,s)*Math.hypot(e,r);if(!c||Math.abs(a)/c<1e-6)return;let l=[r,-e,e*o-r*i,-s,t,s*i-t*o].map(u=>u/a);return co(l)?l:void 0}function qg(n,t){if(!co(n)||!co(t))return;let[e,i,s,r,o,a]=n,[c,l,u,f,h,d]=t,m=[e*c+i*f,e*l+i*h,e*u+i*d+s,r*c+o*f,r*l+o*h,r*u+o*d+a];return co(m)?m:void 0}function Gg(n,{map:t,plan:e}){let i=as(n,t);return Math.hypot(i.x-e.x,i.y-e.y)}function Vg(n,t,e){let i=Hg(n,"map"),s=Hg(n,"plan"),r=t?-1:1,o=0,a=0,c=0,l=0;for(let{map:g,plan:x}of n){let v=g.x-i.x,b=r*(g.y-i.y),_=x.x-s.x,M=x.y-s.y;o+=v*_+b*M,a+=v*M-b*_,c+=v*v+b*b,l+=_*_+M*M}let u=e===null?1e-6:e*.05;if(Math.sqrt(c/n.length)<u||Math.sqrt(l/n.length)<8)return;let f=o/c,h=a/c,d=Math.hypot(f,h);if(!Number.isFinite(d)||d<=1e-12)return;let m=-r*h,y=r*f,p=[f,m,s.x-f*i.x-m*i.y,h,y,s.y-h*i.x-y*i.y];if(p.every(g=>Number.isFinite(g)&&Math.abs(g)<=1e4))return{transform:p.map(g=>Object.is(g,-0)?0:g),scale:d,rotationDegrees:Math.atan2(h,f)*180/Math.PI}}function kf(n,{flipY:t=!1,mapUnitsPerMetre:e=1e3}={}){if(!Array.isArray(n)||n.length<2||n.length>12||!n.every(Uf)||!Wg(e))return;let i=Vg(n,t,e);if(!i)return;let s=n.map(o=>Gg(i.transform,o)),r;if(n.length>=3){let o=n.map((a,c)=>{let l=n.filter((f,h)=>c!==h),u=Vg(l,t,e);return u&&Gg(u.transform,a)});o.every(Number.isFinite)&&(r=Math.max(...o))}return{...i,pixelsPerMetre:e===null?void 0:i.scale*e,errors:s,rmse:Math.sqrt(s.reduce((o,a)=>o+a*a,0)/s.length),maxError:Math.max(...s),leaveOneOutError:r}}function Yg(n,t,e,i=1e3){if(!Uf(n)||!Uf(t)||!Wg(i))return;let s=as(e,n.map),r=as(e,t.map);if(!s||!r)return;let o=Math.hypot(t.map.x-n.map.x,t.map.y-n.map.y),a=Math.hypot(t.plan.x-n.plan.x,t.plan.y-n.plan.y),c=Math.hypot(r.x-s.x,r.y-s.y);if(!o||!c)return;let l=i===null?void 0:o/i,u=l===void 0?void 0:a*l/c;return{mapDistance:o,planDistance:a,mapMetres:l,planMetres:u,deltaMetres:u===void 0?void 0:u-l}}var Zg=bo(to(),1);var rr=1e-7;function $g(n,t,e){let i=!1;for(let s=1;s<n.length;s++){let[r,o]=n[s-1],[a,c]=n[s];o>e!=c>e&&t<(a-r)*(e-o)/(c-o)+r&&(i=!i)}return i}var du=(n,t,e,i,s,r)=>(e-n)*(r-t)-(i-t)*(s-n),Fs=(n,t,e)=>e>=Math.min(n,t)-rr&&e<=Math.max(n,t)+rr;function Tw([n,t,e,i],s,r,o,a){let c=du(n,t,e,i,s,r),l=du(n,t,e,i,o,a),u=du(s,r,o,a,n,t),f=du(s,r,o,a,e,i);return Math.abs(c)<rr&&Fs(n,e,s)&&Fs(t,i,r)||Math.abs(l)<rr&&Fs(n,e,o)&&Fs(t,i,a)||Math.abs(u)<rr&&Fs(s,o,n)&&Fs(r,a,t)||Math.abs(f)<rr&&Fs(s,o,e)&&Fs(r,a,i)?!0:c>0!=l>0&&u>0!=f>0}function Fa(n,t,e,i,s,r){let o=s-e,a=r-i,c=o*o+a*a,l=c?Math.max(0,Math.min(1,((n-e)*o+(t-i)*a)/c)):0;return(n-e-l*o)**2+(t-i-l*a)**2}function jg(n,t,e,i,s,r){if(Tw(n,t,e,i,s))return!0;if(!r)return!1;let[o,a,c,l]=n;return Math.min(Fa(t,e,...n),Fa(i,s,...n),Fa(o,a,t,e,i,s),Fa(c,l,t,e,i,s))<r}function pu(n,t,e=[]){let i=t.filter(s=>s.bottom===0).flatMap(s=>s.polygons).concat(e);return n.length&&i.length?Zg.default.difference(n,i):n}function Of(n){let t=typeof window>"u"?globalThis:window,e=n.flatMap(({item:r,x:o,z:a,angle:c})=>t.RoomcraftModels.walkingObstacleBoxes({...r,x:o,y:a,rotation:c*180/Math.PI}).map(l=>{let{width:u,height:f,u:h,v:d}=l;return{...l,id:r.id,extentX:Math.abs(h[0])*u+Math.abs(d[0])*f,extentZ:Math.abs(h[1])*u+Math.abs(d[1])*f,edges:[[-u,-f,u,-f],[u,-f,u,f],[u,f,-u,f],[-u,f,-u,-f]]}}));function i(r,o,a,c,l=0,u){let f=Math.max(0,l)**2;return e.some(h=>{if(h.id===u||Math.min(r,a)>h.x+h.extentX+l||Math.max(r,a)<h.x-h.extentX-l||Math.min(o,c)>h.y+h.extentZ+l||Math.max(o,c)<h.y-h.extentZ-l)return!1;let d=r-h.x,m=o-h.y,y=a-h.x,p=c-h.y,g=d*h.u[0]+m*h.u[1],x=d*h.v[0]+m*h.v[1],v=y*h.u[0]+p*h.u[1],b=y*h.v[0]+p*h.v[1],_=(M,R)=>Math.abs(M)<=h.width&&Math.abs(R)<=h.height;return _(g,x)||_(v,b)||h.edges.some(M=>jg(M,g,x,v,b,f))})}return{blocksPoint:(r,o,a,c)=>i(r,o,r,o,a,c),blocksRoute:i}}function or(n){let t=n.flatMap(r=>r.flatMap(o=>o.slice(1).map(([a,c],l)=>[...o[l],a,c])));function e(r,o){return n.some(([a,...c])=>$g(a,r,o)&&!c.some(l=>$g(l,r,o)))}function i(r,o){if(!e(r,o))return 0;let a=1/0;for(let c of t)a=Math.min(a,Fa(r,o,...c));return Math.sqrt(a)}function s(r,o,a,c,l=0){let u=Math.max(0,l-rr)**2;return e(r,o)&&e(a,c)&&!t.some(f=>jg(f,r,o,a,c,u))}return{contains:e,clearance:i,supportsRoute:s}}function Kg(n,t,e,i){if(![n,t,e].every(Number.isFinite)||e<0)return null;if(i(n,t))return{x:n,y:t};let s=4,r=Math.ceil(e/s);for(let o=1;o<=r;o++){let a=Math.min(o*s,e),c=Math.ceil(2*Math.PI*a/s);for(let l=0;l<c;l++){let u=l*2*Math.PI/c,f=n+Math.cos(u)*a,h=t+Math.sin(u)*a;if(i(f,h))return{x:f,y:h}}}return null}var Aw=n=>Math.max(0,Math.min(1,n)),Bf=(n,t)=>n?.x===t?.x&&n?.y===t?.y;function zf({allowsPoint:n,allowsRoute:t,duration:e=.32,maximumDistance:i=125}){let s,r,o=0,a=0,c=0,l=0,u=0,f,h,d;function m(x,v){s=r=x,o=v,a=0}function y(x,v=!1){if(l=x,!s||x<c)return null;v&&(a=0);let b=a>0?Aw((x-o)/a):1,_=r.x+(s.x-r.x)*b,M=r.y+(s.y-r.y)*b;return n(_,M)?{x:_,y:M,progress:b,heading:u,current:Bf(f,s),walking:!v&&b<1&&Math.hypot(s.x-r.x,s.y-r.y)>2}:(m(s,x),c=x+.24,null)}function p(x,v,{observation:b,reduceMotion:_=!1}={}){if(!Number.isFinite(x?.x)||!Number.isFinite(x?.y)||!n(x.x,x.y))return!1;if(Bf(x,f)&&b===h)return!0;if(f=x,h=b,!s)return m(x,v),!0;let M=y(v,_)??s,R=Math.hypot(x.x-M.x,x.y-M.y);return Bf(x,s)?d=null:R<=i&&t(M.x,M.y,x.x,x.y)?(d=null,r=M,s=x,o=v,a=_?0:e,R>1&&(u=Math.atan2(x.x-r.x,x.y-r.y))):d&&Math.hypot(x.x-d.x,x.y-d.y)<=48&&t(d.x,d.y,x.x,x.y)?(m(x,v),c=v+.24,d=null):d=x,!0}function g(){s=r=f=d=void 0,h=void 0,c=u=0}return{observe:p,sample:y,clear:g,get hasPosition(){return!!s},get pendingReacquisition(){return!!s&&c>l}}}var Jg=new Be,mu=new W,lo=class extends ha{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new $t(t,3)),this.setAttribute("uv",new $t(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,i=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),i.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let i=new As(e,6,1);return this.setAttribute("instanceStart",new ri(i,3,0)),this.setAttribute("instanceEnd",new ri(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let i=new As(e,6,1);return this.setAttribute("instanceColorStart",new ri(i,3,0)),this.setAttribute("instanceColorEnd",new ri(i,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new oa(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Be);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Jg.setFromBufferAttribute(e),this.boundingBox.union(Jg))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qn),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let i=this.boundingSphere.center;this.boundingBox.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)mu.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(mu)),mu.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(mu));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Xt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new kt},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Hn.line={uniforms:ts.merge([Xt.common,Xt.fog,Xt.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		float trimSegmentAlpha( const in vec4 start, const in vec4 end ) {

			// compute the interpolation factor needed to trim the segment so it terminates
			// between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column

			// we need different nearEstimate formula for reversed and default depth buffer
			// a is positive with a reversed depth buffer so it can be used for controlling the code flow
			float nearEstimate = ( a > 0.0 ) ? ( - b / ( a + 1.0 ) ) : ( - 0.5 * b / a );

			return ( nearEstimate - start.z ) / ( end.z - start.z );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef USE_DASH

				float lineDistanceStart = dashScale * instanceDistanceStart;
				float lineDistanceEnd = dashScale * instanceDistanceEnd;

			#endif

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( start, end );
					end.xyz = mix( start.xyz, end.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceEnd = mix( lineDistanceStart, lineDistanceEnd, alpha );

					#endif

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( end, start );
					start.xyz = mix( end.xyz, start.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceStart = mix( lineDistanceEnd, lineDistanceStart, alpha );

					#endif

				}

			}

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? lineDistanceStart : lineDistanceEnd;
				vUv = uv;

			#endif

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};var Us=class extends $e{constructor(t){super({type:"LineMaterial",uniforms:ts.clone(Hn.line.uniforms),vertexShader:Hn.line.vertexShader,fragmentShader:Hn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var Hf=new Ne,Qg=new W,t0=new W,En=new Ne,Tn=new Ne,zi=new Ne,Gf=new W,Vf=new Ee,An=new fa,e0=new W,gu=new Be,yu=new qn,Hi=new Ne,Gi,ar;function n0(n,t,e){return Hi.set(0,0,-t,1).applyMatrix4(n.projectionMatrix),Hi.multiplyScalar(1/Hi.w),Hi.x=ar/e.width,Hi.y=ar/e.height,Hi.applyMatrix4(n.projectionMatrixInverse),Hi.multiplyScalar(1/Hi.w),Math.abs(Math.max(Hi.x,Hi.y))}function Rw(n,t){let e=n.matrixWorld,i=n.geometry,s=i.attributes.instanceStart,r=i.attributes.instanceEnd,o=Math.min(i.instanceCount,s.count);for(let a=0,c=o;a<c;a++){An.start.fromBufferAttribute(s,a),An.end.fromBufferAttribute(r,a),An.applyMatrix4(e);let l=new W,u=new W;Gi.distanceSqToSegment(An.start,An.end,u,l),u.distanceTo(l)<ar*.5&&t.push({point:u,pointOnLine:l,distance:Gi.origin.distanceTo(u),object:n,face:null,faceIndex:a,uv:null,uv1:null})}}function Cw(n,t,e){let i=t.projectionMatrix,r=n.material.resolution,o=n.matrixWorld,a=n.geometry,c=a.attributes.instanceStart,l=a.attributes.instanceEnd,u=Math.min(a.instanceCount,c.count),f=-t.near;Gi.at(1,zi),zi.w=1,zi.applyMatrix4(t.matrixWorldInverse),zi.applyMatrix4(i),zi.multiplyScalar(1/zi.w),zi.x*=r.x/2,zi.y*=r.y/2,zi.z=0,Gf.copy(zi),Vf.multiplyMatrices(t.matrixWorldInverse,o);for(let h=0,d=u;h<d;h++){if(En.fromBufferAttribute(c,h),Tn.fromBufferAttribute(l,h),En.w=1,Tn.w=1,En.applyMatrix4(Vf),Tn.applyMatrix4(Vf),En.z>f&&Tn.z>f)continue;if(En.z>f){let v=En.z-Tn.z,b=(En.z-f)/v;En.lerp(Tn,b)}else if(Tn.z>f){let v=Tn.z-En.z,b=(Tn.z-f)/v;Tn.lerp(En,b)}En.applyMatrix4(i),Tn.applyMatrix4(i),En.multiplyScalar(1/En.w),Tn.multiplyScalar(1/Tn.w),En.x*=r.x/2,En.y*=r.y/2,Tn.x*=r.x/2,Tn.y*=r.y/2,An.start.copy(En),An.start.z=0,An.end.copy(Tn),An.end.z=0;let y=An.closestPointToPointParameter(Gf,!0);An.at(y,e0);let p=se.lerp(En.z,Tn.z,y),g=p>=-1&&p<=1,x=Gf.distanceTo(e0)<ar*.5;if(g&&x){An.start.fromBufferAttribute(c,h),An.end.fromBufferAttribute(l,h),An.start.applyMatrix4(o),An.end.applyMatrix4(o);let v=new W,b=new W;Gi.distanceSqToSegment(An.start,An.end,b,v),e.push({point:b,pointOnLine:v,distance:Gi.origin.distanceTo(b),object:n,face:null,faceIndex:h,uv:null,uv1:null})}}}var xu=class extends ae{constructor(t=new lo,e=new Us({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,i=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let o=0,a=0,c=e.count;o<c;o++,a+=2)Qg.fromBufferAttribute(e,o),t0.fromBufferAttribute(i,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+Qg.distanceTo(t0);let r=new As(s,2,1);return t.setAttribute("instanceDistanceStart",new ri(r,1,0)),t.setAttribute("instanceDistanceEnd",new ri(r,1,1)),this}raycast(t,e){let i=this.material.worldUnits,s=t.camera;if(s===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),i===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Gi=t.ray;let o=this.matrixWorld,a=this.geometry,c=this.material;ar=c.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),yu.copy(a.boundingSphere).applyMatrix4(o);let l;if(i)l=ar*.5;else{let f=Math.max(s.near,yu.distanceToPoint(Gi.origin));l=n0(s,f,c.resolution)}if(yu.radius+=l,Gi.intersectsSphere(yu)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),gu.copy(a.boundingBox).applyMatrix4(o);let u;if(i)u=ar*.5;else{let f=Math.max(s.near,gu.distanceToPoint(Gi.origin));u=n0(s,f,c.resolution)}gu.expandByScalar(u),Gi.intersectsBox(gu)!==!1&&(i?Rw(this,e):Cw(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Hf),this.material.uniforms.resolution.value.set(Hf.z,Hf.w))}};var uo=class extends lo{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){let e=t.length-3,i=new Float32Array(2*e);for(let s=0;s<e;s+=3)i[2*s]=t[s],i[2*s+1]=t[s+1],i[2*s+2]=t[s+2],i[2*s+3]=t[s+3],i[2*s+4]=t[s+4],i[2*s+5]=t[s+5];return super.setPositions(i),this}setColors(t){let e=t.length-3,i=new Float32Array(2*e);for(let s=0;s<e;s+=3)i[2*s]=t[s],i[2*s+1]=t[s+1],i[2*s+2]=t[s+2],i[2*s+3]=t[s+3],i[2*s+4]=t[s+4],i[2*s+5]=t[s+5];return super.setColors(i),this}setFromPoints(t){let e=t.length-1,i=new Float32Array(6*e);for(let s=0;s<e;s++)i[6*s]=t[s].x,i[6*s+1]=t[s].y,i[6*s+2]=t[s].z||0,i[6*s+3]=t[s+1].x,i[6*s+4]=t[s+1].y,i[6*s+5]=t[s+1].z||0;return super.setPositions(i),this}fromLine(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}};var bu=class extends xu{constructor(t=new uo,e=new Us({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}};var i0="#ffce84",Iw="#a8f5ff",Wf="#10242e";function vu(n,t,e){return new Us({color:n,linewidth:t,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,...e})}function _u(n,t,e,i){let s=new uo;s.setPositions(t.flatMap(({x:r,y:o})=>[r,.5,o]));for(let[r,o]of e.entries()){let a=new bu(s,o);r===0&&o.dashed&&a.computeLineDistances(),a.renderOrder=i+r,n.add(a)}}function s0(n,t,e,i){let s=new ue().setFromPoints(t.map(({x:o,y:a})=>new W(o,.5,a)));s.setIndex(Wn.triangulateShape(t.map(({x:o,y:a})=>new kt(o,a)),[]).flat());let r=new ae(s,e);r.renderOrder=i,n.add(r)}function r0(){let n=new Ki,t={side:Qe,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1},e=new Ce({...t,color:i0,opacity:.13}),i=new Ce({...t,color:Wf,opacity:.95}),s=vu(Wf,4.6,{opacity:.8}),r=vu(i0,2.25),o={dashed:!0,dashSize:15,gapSize:8},a=vu(Wf,3.5,{...o,opacity:.65}),c=vu(Iw,1.7,{...o,opacity:.9});function l({origin:h,forward:d}){let m=(p,g=0)=>({x:h.x+d.x*p-d.y*g,y:h.y+d.y*p+d.x*g}),y=Array.from({length:28},(p,g)=>{let x=g/28*Math.PI*2;return m(10*Math.cos(x),10*Math.sin(x))});_u(n,[m(10),m(56)],[s,r],5),_u(n,[m(45,-7),m(56),m(45,7)],[s,r],5),s0(n,y,i,7),_u(n,[...y,y[0]],[s,r],8)}function u(h){for(let m of new Set(n.children.map(y=>y.geometry)))m.dispose();n.clear();let d=new Map;for(let m of h){let{points:y,kind:p,id:g,origin:x,forward:v}=m;if(y.length<3)continue;let b=p==="nominal";b&&s0(n,y,e,0),_u(n,[...y,y[0]],b?[s,r]:[a,c],b?3:1),x&&v&&d.set(g,m)}for(let m of d.values())l(m)}function f(){u([]);for(let h of[e,i,s,r,a,c])h.dispose()}return{scene:n,setZones:u,dispose:f}}var a0=bo(to(),1);var Pw=4096,Lw=.18,Nw=new qt("#465fc4"),o0=new qt("#cc548d"),Dw=new qt("#ffd572");function Fw(n,t,e){let i=e*.48,s=i*.83;return[[n-s,t-i],[n+s,t-i],[n+i,t-s],[n+i,t+s],[n+s,t+i],[n-s,t+i],[n-i,t+s],[n-i,t-s],[n-s,t-i]]}function Uw({x:n,y:t,corners:e},i){return!Array.isArray(e)||e.length!==4||!e.every(s=>Array.isArray(s)&&s.length===2&&s.every(Number.isFinite))?Fw(n,t,i):[...e,e[0]]}function kw(n,t,e,i,s){let[r,...o]=e.map(l=>l.slice(0,-1).map(([u,f])=>new kt(u,f))),a=Wn.triangulateShape(r,o),c=[r,...o].flat();for(let l of a)for(let u of l){let{x:f,y:h}=c[u];n.push(f,Lw,h),t.push(i.r,i.g,i.b,s)}return a.length>0}function Ow(n,t,e){let{cells:i,cellSize:s}=e??{};if(!Array.isArray(i)||!Number.isFinite(s)||s<=0||s>200)return null;let r=i.slice(0,Pw).filter(f=>[f?.x,f?.y,f?.hits].every(Number.isFinite)&&f.hits>0&&t.contains(f.x,f.y));if(!r.length)return null;let o=r.reduce((f,{hits:h})=>Math.max(f,h),0),a=[],c=[],l=0;for(let f of r){let h=Math.sqrt(f.hits/o),d=h<.55?Nw.clone().lerp(o0,h/.55):o0.clone().lerp(Dw,(h-.55)/.45),m=!1;for(let y of a0.default.intersection([Uw(f,s)],n))m=kw(a,c,y,d,.36+h*.42)||m;m&&l++}if(!l)return null;let u=new ue;return u.setAttribute("position",new $t(a,3)),u.setAttribute("color",new $t(c,4)),{geometry:u,drawn:l}}function c0(n){let t=new ee;t.name="Roomcraft radar heat map";let e=or(n),i=new Ce({vertexColors:!0,side:Qe,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-1}),s;function r(c){s&&(t.remove(s),s.geometry.dispose(),s=void 0);let l=Ow(n,e,c);return l?(s=new ae(l.geometry,i),t.add(s),l.drawn):0}function o(){r(null),i.dispose()}function a(c){i.opacity=Number.isFinite(c)?se.clamp(c,.25,1):1}return{root:t,setHistory:r,setOpacity:a,dispose:o}}var Bw=new Set(["cloudy","fog","hail","lightning","lightning-rainy","pouring","rainy","snowy","snowy-rainy","windy-variant"]),zw=new Set(["hail","lightning-rainy","pouring","rainy","snowy-rainy"]),l0={waxing_crescent:3*Math.PI/4,first_quarter:Math.PI/2,waxing_gibbous:Math.PI/4,full_moon:0,waning_gibbous:-Math.PI/4,last_quarter:-Math.PI/2,waning_crescent:-3*Math.PI/4},ho=Object.fromEntries(Object.entries({clear:["#b7c8a9","#79c6b9","#32768c","#e5f4ea","#dcf1ec","#fff1bd"],overcast:["#a5b9a9","#76aca8","#456e7f","#d0e4df","#b5ced0","#ffe4b0"],night:["#415b66","#2b6678","#16354d","#91b7bf","#68899f","#e4f0f5"],sunrise:["#a9aa9e","#71aaa8","#536f9b","#d9dce8","#e5b7bc","#ffe0ae"],sunset:["#b3a08f","#7296a1","#635879","#f0cbc4","#d39a9b","#ffae80"]}).map(([n,t])=>[n,t.map(e=>new qt(e))])),Xf={sunrise:["#efad92","#8baac6"].map(n=>new qt(n)),sunset:["#e58968","#907fa6"].map(n=>new qt(n))},u0=["shoreTint","shallowTint","deepTint","foamTint","cloudTint","bodyTint"],{clamp:Ua,smoothstep:Hw}=se;function Gw({shoreline:n,farZ:t,focusX:e}){let i=[],s=[],r=[];for(let[a,{x:c,z:l}]of n.entries()){let u=a*2;i.push(c-e,0,l-t,c-e,0,0),s.push(c-e,0,c-e,l-t),u>0&&r.push(u-2,u,u-1,u,u+1,u-1)}let o=new ue;return o.setAttribute("position",new $t(i,3)),o.setAttribute("uv",new $t(s,2)),o.setIndex(r),o}var Vw=`
  varying vec2 coastPoint;
  varying vec3 surfacePoint;
  #include <fog_pars_vertex>

  void main() {
    coastPoint = uv;
    vec4 worldPoint = modelMatrix * vec4(position, 1.0);
    surfacePoint = worldPoint.xyz;
    vec4 mvPosition = viewMatrix * worldPoint;
    gl_Position = projectionMatrix * mvPosition;
    #include <fog_vertex>
  }
`,Ww=`
  varying vec2 coastPoint;
  varying vec3 surfacePoint;
  uniform float waterTime;
  uniform float rain;
  uniform float fog;
  uniform float reflectedWind;
  uniform float roughness;
  uniform float cloudCover;
  uniform float bodyVisibility;
  uniform float solarBand;
  uniform float moon;
  uniform vec2 moonLight;
  uniform vec2 bodyPosition;
  uniform vec2 solarPosition;
  uniform vec3 shoreTint;
  uniform vec3 shallowTint;
  uniform vec3 deepTint;
  uniform vec3 foamTint;
  uniform vec3 cloudTint;
  uniform vec3 bodyTint;
  uniform vec3 solarWarmTint;
  uniform vec3 solarCoolTint;
  #include <fog_pars_fragment>

  float softEllipse(vec2 point, vec2 center, vec2 radius, float softness) {
    vec2 delta = (point - center) / radius;
    return 1.0 - smoothstep(1.0 - softness, 1.0, dot(delta, delta));
  }

  float cloud(vec2 point, vec2 center, float scale) {
    vec2 p = (point - center) / scale;
    float bed = softEllipse(p, vec2(0.0, -4.0), vec2(99.0, 12.0), 0.69);
    float puff = softEllipse(p, vec2(-31.0, 1.8), vec2(47.0, 17.0), 0.68);
    float drift = softEllipse(p, vec2(39.0, 5.4), vec2(67.0, 15.0), 0.72);
    return max(bed, max(puff, drift));
  }

  void main() {
    float offshore = coastPoint.y;
    float swell = sin(coastPoint.x * 0.009 - offshore * 0.012 - waterTime * 0.16);
    float crossSwell = sin(coastPoint.x * 0.022 + offshore * 0.018 + waterTime * 0.21);
    float rippleA = sin(coastPoint.x * 0.032 + offshore * 0.19 + swell * 1.8 + crossSwell * 0.8 - waterTime * 1.17);
    float rippleB = sin(coastPoint.x * -0.057 + offshore * 0.105 + crossSwell * 1.4 - swell * 0.56 + waterTime * 0.87);
    vec3 toCamera = normalize(cameraPosition - surfacePoint);
    float slant = 1.0 - clamp(toCamera.y, 0.0, 1.0);
    float waveLight = smoothstep(0.37, 0.99, rippleA) * smoothstep(-0.69, 0.85, swell + rippleB * 0.48);
    float depth = smoothstep(8.0, 278.0, offshore + rippleB * 3.2);
    vec3 color = mix(shallowTint, deepTint, depth);
    color = mix(color, shoreTint, 1.0 - smoothstep(0.0, 21.0, offshore));
    color = mix(color, foamTint, waveLight * mix(0.14, 0.044, depth));
    color = mix(color, cloudTint, slant * slant * 0.13);

    // The artistically reflected sky follows the water and shifts as the camera orbits.
    if (offshore < 700.0 && abs(coastPoint.x) < 800.0) {
      float reflectionEdge = (1.0 - smoothstep(550.0, 785.0, abs(coastPoint.x)))
        * (1.0 - smoothstep(540.0, 685.0, offshore));
      vec2 rippleOffset = vec2(rippleA * 4.5, rippleB * 3.8) * roughness;
      vec2 mirror = coastPoint + rippleOffset + vec2(toCamera.x, -toCamera.z) * 18.0;
      // The twilight band follows the local bearing even when the sun's disc is below the horizon.
      if (solarBand > 0.0) {
        float along = mirror.y - solarPosition.y;
        float spread = mix(62.0, 168.0, smoothstep(-35.0, 145.0, along));
        float sunward = mirror.x - solarPosition.x - clamp(along, -45.0, 165.0) * solarPosition.x * 0.0021;
        float falloff = (1.0 - smoothstep(42.0, 270.0, abs(along))) * reflectionEdge;
        float ribbon = exp(-1.82 * (sunward / spread) * (sunward / spread));
        float coolEdge = smoothstep(36.0, 260.0, abs(sunward));
        color = mix(color, solarCoolTint, solarBand * falloff * coolEdge * (0.14 + depth * 0.14));
        color = mix(color, solarWarmTint, solarBand * falloff * ribbon * (0.24 + waveLight * 0.25));
      }
      float drift = sin(waterTime * 0.064) * 26.0 + reflectedWind;
      float nearCloud = cloud(mirror, vec2(-186.0 + drift, 49.0), 1.32);
      float farCloud = cloud(mirror, vec2(182.0 + drift * 0.74, 69.0), 1.18);
      float bank = softEllipse(mirror, vec2(drift, 72.0), vec2(372.0, 62.0), 0.86);
      float clouds = max(max(nearCloud, farCloud * 0.9) * cloudCover, bank * max(0.0, cloudCover - 0.5));
      color = mix(color, cloudTint, clouds * reflectionEdge * (0.66 + slant * 0.12));

      if (bodyVisibility > 0.0) {
        vec2 bodyDistance = mirror - bodyPosition;
        if (abs(bodyDistance.x) < 126.0 && abs(bodyDistance.y) < 73.0) {
          float lowSolar = solarBand * (1.0 - moon);
          vec2 disc = bodyDistance / vec2(33.0 + lowSolar * 6.0, 14.0 + slant * 5.0 - lowSolar * 2.5);
          float discRadius = dot(disc, disc);
          float hemisphere = sqrt(max(0.0, 1.0 - discRadius));
          float terminator = disc.x * moonLight.x + hemisphere * moonLight.y;
          float dayCore = 1.0 - smoothstep(0.25, 1.12, discRadius);
          float moonCore = (1.0 - smoothstep(0.57, 1.08, discRadius)) * smoothstep(-0.13, 0.18, terminator);
          float core = mix(dayCore * (0.79 + 0.15 * rippleA), moonCore, moon);
          float glow = softEllipse(bodyDistance, vec2(0.0), vec2(78.0, 36.0), 0.96);

          // Shallow, staggered crests scatter the reflection along a tapered path toward shore.
          float towardShore = -bodyDistance.y;
          float pathWidth = mix(24.0, 55.0 + slant * 12.0 + lowSolar * 8.0, smoothstep(0.0, 38.0, towardShore));
          float pathX = bodyDistance.x - towardShore * toCamera.x * 0.32 + rippleB * 6.4;
          float path = (1.0 - smoothstep(0.05, 1.0, abs(pathX) / pathWidth))
            * smoothstep(-14.0, 2.0, towardShore) * (1.0 - smoothstep(26.0, 61.0, towardShore))
            * smoothstep(3.0, 13.0, offshore);
          float facet = sin(towardShore * 0.51 + pathX * 0.048 + rippleB * 0.86 - waterTime * 1.48);
          float streak = path * smoothstep(0.29, 0.97, facet) * smoothstep(-0.7, 0.54, rippleA + swell * 0.29);
          float glints = path * smoothstep(0.79, 0.99, rippleB) * smoothstep(0.25, 0.95, facet);
          float amount = (core * 0.82 + glow * 0.25 + streak * 0.63) * bodyVisibility;
          color = mix(color, bodyTint, min(amount, 0.93));
          color = mix(color, mix(bodyTint, vec3(1.0), 0.70), (streak * 0.18 + glints * 0.35) * bodyVisibility);
        }
      }
    }

    // Increasing phase sends the crests shoreward while distance fades them offshore.
    float phase = fract((offshore + rippleA * 2.5 + rippleB * 1.4) / 26.0 + waterTime * 0.24);
    float crest = smoothstep(0.70, 0.90, phase) * (1.0 - smoothstep(0.93, 1.0, phase));
    float breakers = (1.0 - smoothstep(22.0, 82.0, offshore)) * smoothstep(0.1, 6.0, offshore);
    float scallop = smoothstep(-0.44, 0.84, rippleB + rippleA * 0.2);
    float wash = (1.0 - smoothstep(0.0, 8.0, offshore)) * (0.16 + 0.10 * rippleA);
    color = mix(color, foamTint, wash + crest * breakers * mix(0.31, 0.85, scallop));
    if (rain > 0.0) {
      vec2 drop = fract(coastPoint / vec2(13.0, 17.0)) - 0.5;
      float circle = length(drop);
      float ring = 1.0 - smoothstep(0.025, 0.078, abs(circle - (0.23 + rippleB * 0.14)));
      color = mix(color, foamTint, ring * smoothstep(0.7, 1.0, rippleA) * 0.18);
    }
    color = mix(color, mix(cloudTint, foamTint, 0.46),
      fog * (0.26 + 0.42 * smoothstep(15.0, 145.0, offshore)));
    gl_FragColor = vec4(color, 1.0);
    #include <colorspace_fragment>
    #include <fog_fragment>
  }
`;function h0({y:n,farZ:t,shoreline:e,focusX:i}){let s={...ts.clone(Xt.fog),waterTime:{value:0},rain:{value:0},fog:{value:0},reflectedWind:{value:0},roughness:{value:1},cloudCover:{value:.24},bodyVisibility:{value:0},solarBand:{value:0},moon:{value:0},moonLight:{value:new kt(0,1)},bodyPosition:{value:new kt},solarPosition:{value:new kt},solarWarmTint:{value:Xf.sunrise[0]},solarCoolTint:{value:Xf.sunrise[1]}};for(let[c,l]of u0.entries())s[l]={value:ho.clear[c].clone()};let r=new $e({uniforms:s,vertexShader:Vw,fragmentShader:Ww,toneMapped:!1,fog:!0}),o=new ae(Gw({shoreline:e,farZ:t,focusX:i}),r);o.name="Ocean and shore wash",o.position.set(i,n,t);function a(c,l={}){let{night:u,daylightKnown:f,condition:h,moonPhase:d,moonAzimuth:m,moonElevation:y,skyProgress:p,windSpeed:g,windBearing:x,reduceMotion:v,reflections:b=!0}=l,_=l.solar??is(l),M=Bw.has(h),R=ho[M?"overcast":"clear"],S=_.phase==="sunset"||_.rising===!1?"sunset":"sunrise",T=Math.max(_.twilight,_.lowSun);for(let[xt,gt]of u0.entries())s[gt].value.lerpColors(ho.night[xt],R[xt],_.daylight).lerp(ho[S][xt],T*(M?.24:.46));let I=Object.hasOwn(l0,d)?l0[d]:void 0,P=f||Number.isFinite(l.sunElevation)||h==="sunny",k=P?_.disc*(.97-_.cloud*.42):0,z=(u||_.phase==="night")&&I!==void 0?.93*(1-Hw(_.elevation,-12,-3)):0,O=z>k;O?s.bodyTint.value.copy(ho.night[5]):s.bodyTint.value.lerp(ho[S][5],T*.52);let U=zw.has(h),V=Number.isFinite(c)&&!v?c:0;s.waterTime.value=V,s.rain.value=U?1:0,s.fog.value=h==="fog"?1:0;let j=Number.isFinite(g)?Ua(g/18,0,1):0,dt=Number.isFinite(x)?-Math.sin(se.degToRad(x)):1;s.reflectedWind.value=Math.sin(V*.09)*dt*j*24;let ot=U||h==="windy"||h==="windy-variant";s.roughness.value=1+Math.max(ot?.65:0,j*.65),s.cloudCover.value=b?M?.94:h==="partlycloudy"?.64:u?.32:.24:0,s.bodyVisibility.value=!b||M?0:Math.max(z,k),s.solarBand.value=b&&P?T*(M?.3:1-_.cloud*.48):0,[s.solarWarmTint.value,s.solarCoolTint.value]=Xf[S],s.moon.value=O?1:0,s.solarPosition.value.set(_.east*154,38+Ua(_.elevation/75,0,1)*20);let G=Number.isFinite(p)?Ua(p,0,1):void 0,q=G===void 0?void 0:se.lerp(-145,145,G);if(O){s.moonLight.value.set(Math.sin(I),Math.cos(I));let xt=q??(Number.isFinite(m)?Ua((m-180)*1.08,-180,180):46+Math.sin(V*.014)*27),gt=Number.isFinite(y)?32+Ua(y/75,0,1)*24:42;s.bodyPosition.value.set(xt,gt)}else s.bodyPosition.value.copy(s.solarPosition.value)}return{mesh:o,update:a}}var Mu=26,Xw=92,fo=4,qw=18,Yw=188;function d0(n){let{minZ:t,maxZ:e}=n.houseBounds,i=t-(e-t)*.11-46,s=n.editableStructure?1/0:t-146,r=Math.min(n.bounds.minZ,i,s)-qw,o=r-2*Mu-Xw;return{nearZ:r,farZ:o,sceneryMinZ:o-Yw}}function p0(n,{nearZ:t,farZ:e},i,s,r){let o=e+Mu,a=t-Mu,c=(o+a)/2,l=r-s/2,u=r+s/2,f=(h,d,m,y)=>n.box(s,m,d-h,y,r,i+m/2,(h+d)/2);f(o,a,1.2,"#73767c"),f(o,o+3.4,1.4,"#656b71"),f(a-3.4,a,1.4,"#656b71");for(let[h,d,m,y]of[[e,o,o-fo,e],[a,t,a,a+fo]]){f(h,d,5,"#c0b6a7"),f(m,m+fo,6.2,"#d0c3b0");let p=Mu-fo;for(let g=l+36;g<u;g+=72)n.box(1.15,.18,p,"#a69c91",g,i+5.04,y+p/2)}for(let h=l+36;h+17<u;h+=72)n.box(34,.2,2.8,"#e9ce91",h,i+1.24,c);return{centerX:r,width:s,surfaceY:i+1.24,lanes:[(c+a)/2,(o+c)/2],sidewalks:[{minZ:a+fo,maxZ:t,surfaceY:i+5},{minZ:e,maxZ:o-fo,surfaceY:i+5}]}}function qf(n,t,e,i){let s=[],r=[];for(let a=0;a<t.length;a++)if(s.push(...t[a],...e[a]),a>0){let c=(a-1)*2,l=a*2;r.push(c,l,c+1,l,l+1,c+1)}let o=new ue;o.setAttribute("position",new $t(s,3)),o.setIndex(r),o.computeVertexNormals(),n.add(o,i,0,0,0)}function $w(n,t,e,i,s,r){let o="#9e9c70",a="#bab484";for(let c=0;c<4;c++){let l=new qo(s*(.13+.018*c),s*(1.25-.14*c),3);l.rotateZ(.22+c*.1),l.rotateY(r+c*1.62);let u=Math.cos(r+c*1.62)*s*.21,f=Math.sin(r+c*1.62)*s*.21;n.add(l,c%2?a:o,t+u,i+s*.46,e+f)}}function Zw(n,t,e,i,s){for(let[r,o,a,c]of[[-.51,-18,54,5],[-.36,-25,47,6],[-.1,-18,44,4.8],[.12,-24,49,6],[.3,-16,38,5.3],[.49,-24,53,5.6],[.65,-17,60,5.2]]){let l=t+r*i,u=e+o,f=s+.1;n.ball(a,c,13,"#d7bd94",l,f,u),n.ball(a*.62,c*.78,10,"#dfc598",l+a*.28,f+.5,u+4);for(let[h,d,m]of[[-.38,1,4.4],[-.08,-3.5,5.6],[.2,4.5,4.5],[.56,2,3.8]])$w(n,l+a*h,u+d,f+c*.75,m,h*7)}}function jw(n,t,e,i){let o=e-13.5+.6;n.box(19,2.5,27,"#ac987e",t,i+1.28,o);for(let a=0;a<7;a++)n.box(20,.7,3.45,a%2?"#c5af8f":"#cdb696",t,i+2.6,e-1.25-a*3.8);for(let a of[-1,1])n.box(.9,.8,27+.6,"#b4a086",t+a*19/2,i+2.8,o)}function Kw(n,t,e,i,s,r,o){n.box(1.4,16.6,1.4,"#b5a08a",t,i+16.6/2,e),n.ball(1.6,.95,1.6,r,t,i+16.6+3.6,e);for(let u=0;u<8;u++){let f=(p,g,x)=>[Math.cos(p)*g,x,Math.sin(p)*g],h=o+u*2*Math.PI/8,d=o+(u+1)*2*Math.PI/8,m=[[0,16.6+3.4,0],f(h,16*.54,16.6+2.1),f(d,16*.54,16.6+2.1),f(h,16,16.6-.55),f(d,16,16.6-.55),f(h,16,16.6-2),f(d,16,16.6-2)],y=new ue;y.setAttribute("position",new $t(m.flat(),3)),y.setAttribute("uv",new $t(m.flatMap(([p,,g])=>[p/32+.5,g/32+.5]),2)),y.setIndex([0,2,1,1,2,4,1,4,3,3,4,5,4,6,5]),y.computeVertexNormals(),n.add(y,u%2?r:s,t,i,e)}}function f0(n,t,e,i,s,r){let o=(f,h)=>[t+f*Math.cos(r)+h*Math.sin(r),e-f*Math.sin(r)+h*Math.cos(r)],a=(f,h,d,m,y,p,g)=>{let[x,v]=o(y,g);n.box(f,h,d,m,x,i+p,v,r)};for(let f of[-1,1])a(1.1,1.2,18,"#988679",f*4.5,2.15,0),a(1,2.1,1.2,"#988679",f*4.4,1.08,6.6);a(8.4,.75,12,s,0,2.8,2);let[c,l]=o(0,-5.5),u=new Te(8.4,.85,8);u.rotateX(-Math.PI/6),n.add(u,s,c,i+4.4,l,r)}function Jw(n,t,e,i,s){for(let[r,o,a,c,l]of[[-.43,-57,"#c87a72","#fae2bd",-.09],[-.16,-67,"#589eab","#e5dfbd",.14],[.14,-54,"#dca658","#f7dfb5",-.19],[.41,-64,"#9c86ae","#ecddc2",.13]]){let u=t+r*i,f=e+o;Kw(n,u,f,s,a,c,l),f0(n,u-13,f-15,s,c,l-.17),f0(n,u+14,f-14,s,a,l+.12),n.box(8.6,.22,15,"#e9cda5",u+23,s+.99,f+7,l*2)}}function m0(n,{farZ:t},e,{minX:i,maxX:s},r=6200,o=(i+s)/2){let a=(i+s)/2,c=Math.ceil(r/50),l=o-r/2,u=Array.from({length:c+1},(p,g)=>{let x=l+r*g/c,v=x-a,b=t-108+14*Math.cos((v+110)*.006)+7*Math.sin((v-90)*.013);return{x,z:b}}),f=u.map(({x:p})=>[p,e+.28,t+.4]),h=u.map(({x:p,z:g})=>[p,e+.71,g+22]),d=u.map(({x:p,z:g})=>[p,e+.44,g+6]),m=u.map(({x:p,z:g})=>[p,e+.17,g-31]);qf(n,f,h,"#e3cba0"),qf(n,h,d,"#dbbd92"),qf(n,d,m,"#c8a47e");let y=Math.max(940,s-i);Zw(n,a,t,y,e);for(let p of[-1,1])jw(n,a+p*y*.245,t,e);return Jw(n,a,t,y,e+.55),{water:{y:e+1.05,farZ:t-1850,shoreline:u,focusX:a}}}var{lerp:Vi}=se,ne={window:"#3b596b",glass:"#496c7e",glassGlow:"#7393a1",bumper:"#5a5158",tire:"#37333b",rim:"#a79e9b",hub:"#e8d4b7",grille:"#514651",plate:"#e8d5b1",upholstery:"#aa775d",roofRail:"#766573",tan:"#d2aa7a",wood:"#a77350"},g0=[{id:"butter-compact",label:"Buttercup compact",length:43,width:23,height:21,tire:4,cabin:[-.39,-.29,.09,.29],body:"#edb857",roof:"#fff0c7",detail:"sunroof"},{id:"blush-beetle",label:"Blush bubble car",length:46,width:24,height:25,tire:4.6,cabin:[-.39,-.17,.025,.33],body:"#da8e8a",roof:"#e4a4a1",detail:"bubble"},{id:"seafoam-sedan",label:"Seafoam sedan",length:54,width:24,height:20,tire:4.4,cabin:[-.31,-.18,.055,.28],body:"#70aea5",roof:"#98c9b6"},{id:"blue-wagon",label:"Bluebird wagon",length:57,width:25,height:23,tire:4.4,cabin:[-.44,-.4,.08,.29],body:"#769bc0",roof:"#a5bbcf",detail:"wagon",windows:3},{id:"coral-convertible",label:"Coral roadster",length:49,width:24,height:17,tire:4.1,cabin:[-.28,-.21,.075,.25],body:"#e4806b",roof:"#ffe0a9",detail:"convertible"},{id:"berry-sports",label:"Berry sports coupe",length:52,width:26,height:17,tire:4.25,cabin:[-.34,-.16,.055,.3],body:"#a3769d",roof:"#c3a2ba",detail:"sports"},{id:"pine-suv",label:"Pinewood SUV",length:59,width:27,height:27,tire:5.2,cabin:[-.43,-.39,.08,.28],body:"#80986e",roof:"#c7bd8d",detail:"trail",windows:3},{id:"sand-pickup",label:"Sandy pickup",length:63,width:27,height:25,tire:5,cabin:[-.075,-.055,.185,.34],body:"#c6a37c",roof:"#e3c09a",detail:"pickup"},{id:"lavender-delivery",label:"Lavender delivery van",length:63,width:27,height:29,tire:4.6,cabin:[-.44,-.43,.21,.42],body:"#ac9ec7",roof:"#d6c5da",detail:"delivery"},{id:"cream-camper",label:"Custard camper van",length:65,width:28,height:31,tire:4.8,cabin:[-.44,-.43,.32,.42],body:"#9bb9a7",roof:"#f5dc9b",detail:"camper"},{id:"peach-food-truck",label:"Peach snack truck",length:67,width:28,height:32,tire:4.8,cabin:[.07,.12,.31,.43],body:"#e8a283",roof:"#f2c5a2",detail:"food"},{id:"cobalt-minibus",label:"Blueberry minibus",length:70,width:29,height:29,tire:4.9,cabin:[-.455,-.43,.34,.44],body:"#7898bc",roof:"#e3dbcc",detail:"bus",windows:4},{id:"honey-box-truck",label:"Honey box truck",length:72,width:29,height:32,tire:5,cabin:[.105,.16,.31,.44],body:"#dca95d",roof:"#f0cf96",detail:"cargo"},{id:"mint-city-bus",label:"Mint city bus",length:78,width:29,height:30,tire:4.9,cabin:[-.458,-.448,.397,.455],body:"#75a99d",roof:"#d8e2bd",detail:"city",windows:5}],Qw=new Map(g0.map(n=>[n.id,n])),y0=[{id:"teal-semi",label:"Teal semi with box trailer",length:119,width:29,paint:"#61978e",roof:"#9bc0a8",trailer:"#eadcbd",stripe:"#83a89c"},{id:"coral-reefer",label:"Coral semi with refrigerated trailer",length:122,width:29,paint:"#b97c76",roof:"#e2ad95",trailer:"#e4e5d8",stripe:"#7298a7",refrigerated:!0}],tE=new Map(y0.map(n=>[n.id,n])),x0=[{id:"apricot-scooter",label:"Apricot scooter",length:40,width:14,style:"scooter",paint:"#e19872",trim:"#f7d9ab",jacket:"#547c83",helmet:"#f1e5cb"},{id:"ruby-motorcycle",label:"Ruby sport motorcycle",length:46,width:14,style:"racer",paint:"#b95b66",trim:"#edb9a1",jacket:"#594e70",helmet:"#f4c27d"},{id:"moss-motorcycle",label:"Moss trail motorcycle",length:43,width:14,style:"trail",paint:"#869961",trim:"#ead5a0",jacket:"#b57357",helmet:"#ded5a1"},{id:"indigo-motorcycle",label:"Indigo cruiser motorcycle",length:46,width:15,style:"cruiser",paint:"#657a9a",trim:"#ded3aa",jacket:"#98775e",helmet:"#c5d1d2"}],b0=[{id:"peach-basket-bicycle",label:"Peach basket bicycle",length:27,width:8.8,style:"basket",paint:"#d98474",trim:"#eac996",jacket:"#708e7f",helmet:"#f8d48a"},{id:"seafoam-commuter-bicycle",label:"Seafoam commuter bicycle",length:28,width:8.8,style:"commuter",paint:"#77aba0",trim:"#c5d8bd",jacket:"#b67479",helmet:"#ece0ba"},{id:"lavender-road-bicycle",label:"Lavender road bicycle",length:28,width:8.8,style:"road",paint:"#9e8abb",trim:"#d9c7e2",jacket:"#5c7292",helmet:"#edc99d"},{id:"honey-cargo-bicycle",label:"Honey cargo bicycle",length:30,width:9,style:"longtail",paint:"#d9a359",trim:"#f2d3a3",jacket:"#917da0",helmet:"#e7c79b"}],eE=new Map(x0.map(n=>[n.id,n])),nE=new Map(b0.map(n=>[n.id,n])),v0=({id:n,label:t,length:e,width:i,detail:s})=>Object.freeze({id:n,label:t,length:e,width:s==="food"?i+2:i}),Su=Object.freeze([...g0,...y0,...x0].map(v0)),wu=Object.freeze(b0.map(v0));function iE(n){let t=new ue;return t.setAttribute("position",new $t(n.flat(),3)),t.setIndex([0,1,2,0,2,3]),t.computeVertexNormals(),t}function Eu(n){let t=n.map(([i,s])=>{let r=i.index?i.toNonIndexed():i;r!==i&&i.dispose(),r.deleteAttribute("uv");let o=new qt(s),a=new Float32Array(r.getAttribute("position").count*3);for(let c=0;c<a.length;c+=3)o.toArray(a,c);return r.setAttribute("color",new Pe(a,3)),r}),e=$n(t);for(let i of t)i.dispose();return e.computeBoundingBox(),e}function ka(n,t){let e=n.flatMap(([o,a,c])=>[[o,t,-a*.78],[o,t,a*.78],[o,t+1.5,a],[o,c-2.05,a],[o,c,a*.83],[o,c,-a*.83],[o,c-2.05,-a],[o,t+1.5,-a]]).flat(),i=[],s=(n.length-1)*8;for(let o=0;o<s;o+=8)for(let a=0;a<8;a++){let c=(a+1)%8;i.push(o+a,o+a+8,o+c+8,o+a,o+c+8,o+c)}for(let o=1;o<7;o++)i.push(0,o,o+1,s,s+o+1,s+o);let r=new ue;return r.setAttribute("position",new $t(e,3)),r.setIndex(i),r.computeVertexNormals(),r}function sE(n){let t=[],e=(V,j)=>t.push([V,j]),i=(V,j,dt,ot,G,q,xt)=>e(new Te(ot,G,q).translate(V,j,dt),xt),s=(V,j)=>e(iE(V),j),r=(V,j,dt,ot,G,q,xt)=>{let gt=[[j,ot,q],[dt,ot,q],[dt,G,q],[j,G,q]];s(V>0?gt:gt.reverse(),xt)},{width:o,tire:a,body:c,roof:l,detail:u}=n,f=n.length-2.8,h=f*.5,d=o*.435,m=a*.78,y=8.25+a*.52,p=y-(u==="sports"||u==="convertible"?1.8:.75);e(ka([[-h,d*.76,y-1.6],[-h+2.4,d*.93,y-.2],[-h+6.2,d,y],[h-6.2,d,y-.24],[h-2.4,d*.92,p+.35],[h,d*.75,p]],m),c);let g=m+.95;for(let V of[-1,1])i(V*(h-.22),g,0,1.42,1.58,d*1.57,ne.bumper),i(V*(h+.05),g+.82,0,1.08,.95,4.5,ne.plate);i(h+.1,p-2.8,0,.65,1.2,d*.64,ne.grille),i(h+.38,p-2.62,0,.24,.35,d*.55,ne.rim);for(let V of[-1,1]){i(0,m+1.3,V*(d+.04),f*.53,.9,.34,ne.bumper);for(let j of[-.323,.323]){let dt=f*j,ot=V*(d+.05);e(new ze(a,a,2.9,10).rotateX(Math.PI/2).translate(dt,a,ot),ne.tire),e(new Ln(a*.57,8).rotateY(V<0?Math.PI:0).translate(dt,a,ot+V*1.46),ne.rim),e(new Ln(a*.28,6).rotateY(V<0?Math.PI:0).translate(dt,a,ot+V*1.48),ne.hub)}}let[x,v,b,_]=n.cabin.map(V=>f*V),M=y-.35,R=n.height-1.25,S=d*.88,T=S*(n.windows>2||u==="camper"||u==="delivery"?.94:.79),I=V=>Vi(S,T,V),P=V=>Vi(M,R,V),k=(V,j,dt,ot=0)=>[Vi(Vi(x,v,j),Vi(_,b,j),V),P(j),dt*(I(j)+ot)];function z(V,j,dt,ot,G=.2,q=.85,xt=.08){let gt=[k(j,G,V,xt),k(dt,G,V,xt),k(dt,q,V,xt),k(j,q,V,xt)];s(V>0?gt:gt.reverse(),ot)}function O(V,j,dt,ot,G,q,xt=0){let[gt,pt]=V>0?[_,b]:[x,v],at=(Z,rt)=>[Vi(gt,pt,rt)+V*xt,P(rt),Z*I(rt)],St=[at(dt,ot),at(j,ot),at(j,G),at(dt,G)];s(V>0?St:St.reverse(),q)}function U(V){O(V,-.81,.81,.16,.88,ne.window,.08),O(V,-.72,.73,.23,.82,ne.glass,.13),O(V,-.67,.64,.67,.75,ne.glassGlow,.18)}if(u==="convertible"){O(1,-.88,.88,0,1,l,.08),U(1),i((x+b)/2,M+.2,0,(b-x)*.96,1.05,S*1.92,ne.window);for(let V of[-1,1])i(x+5.7,M+2.35,V*S*.43,7.7,2.5,5.6,ne.upholstery),i(x+2.2,M+3.7,V*S*.43,2,5.2,6,ne.tan)}else{for(let G of[-1,1])z(G,0,1,c,0,1,0);O(1,-1,1,0,1,c),O(-1,-1,1,0,1,c),U(1),["delivery","cargo","food"].includes(u)||U(-1);let V=(b+v)/2,j=b-v+.38;i(V,R+.34,0,j,.84,T*2.05,l),u==="bubble"&&i(V,R+.79,0,j*.88,.52,T*1.67,l),u==="sunroof"&&(i(V,R+.82,0,j*.48,.24,T*1.12,ne.window),i(V-j*.12,R+.98,0,.65,.18,T,ne.glassGlow));let dt=n.windows??2,ot=u==="delivery"||u==="camper"?[[.7,.94]]:Array.from({length:dt},(G,q)=>[(q+.16)/dt,(q+.86)/dt]);for(let G of[-1,1])for(let[q,xt]of ot)z(G,q,xt,ne.window),z(G,q+.011,xt-.009,ne.glass,.29,.79,.13),z(G,q+.023,xt-.025,ne.glassGlow,.64,.72,.18)}for(let V of[-1,1])i(_-3,M+1.05,V*(d+.2),3.2,1.8,1.75,l),i(Vi(x,_,.36),y-1.45,V*(d+.1),2.8,.46,.24,ne.rim);return{add:e,box:i,sideFace:r,glazingSide:z,bodyParts:t,recipe:n,length:f,outer:d,shoulder:y,nose:h,frontY:p}}function rE(n,t){let{length:e,outer:i,shoulder:s,recipe:r,add:o,box:a,sideFace:c}=n,l=-e*.454,u=e*.105,f=r.height-.4,h=u-l;o(ka([[l,i*.93,f-.7],[l+1.6,i,f],[u-1.6,i,f],[u,i*.93,f-.7]],s-.8),t),a((l+u)/2,f+.1,0,h-3.5,.28,i*1.6,r.roof);for(let d of[-1,1]){let m=d*(i+.1);c(d,l+3,u-3,s+1.6,s+2.45,m,r.body)}for(let d of[-.4,0,.4])a(l-.13,(s+f)/2,i*d,.26,f-s-3.1,.4,ne.rim);return{rear:l,front:u,top:f}}function oE(n){let{recipe:t,box:e,sideFace:i,glazingSide:s,length:r,outer:o,shoulder:a}=n,{detail:c,height:l,roof:u}=t;if(c==="wagon"||c==="trail"){let f=l+.5;for(let h of[-1,1])e(r*-.18,f,h*o*.51,r*.3,.85,.83,ne.roofRail);if(c==="trail"){for(let h of[-.29,-.07])e(r*h,f+.55,0,1.05,.75,o*1.18,ne.roofRail);e(r*-.18,f+1.1,0,r*.17,1.65,o*.78,ne.tan)}}else if(c==="sports")e(r*-.4,a+1.1,0,4.2,1.15,o*1.72,ne.window),e(r*.39,a-.65,0,6.5,.28,1.65,"#f6e5cc");else if(c==="pickup"){let f=r*-.25;e(f,a+.22,0,r*.35,.42,o*1.43,ne.wood);for(let h of[-1,1])e(f,a+.93,h*o*.84,r*.34,2.28,1.72,u),e(f,a+.48,h*o*.38,r*.33,.25,.4,ne.tan);e(r*-.429,a+1.05,0,1.8,2.45,o*1.72,u),e(r*-.17,a+1.75,0,5.5,2.5,8,ne.tan)}else if(c==="cargo"||c==="food"){let{rear:f,front:h}=rE(n,c==="food"?"#f6c3a2":"#f0d099");if(c==="food"){let d=a+7;i(1,f+5.5,h-4.5,d,d+8.4,o+.19,ne.window),e((f+h)/2,d,o+.75,h-f-9.5,.75,2.65,ne.wood);for(let m=0;m<7;m++)e(Vi(f+6,h-4.5,m/6),d+8.6,o+1.4,2.5,1.05,2.75,m%2?"#fff0cc":"#d9867e")}}else if(c==="delivery"||c==="camper")for(let f of[-1,1])c==="delivery"?(s(f,.1,.61,"#e5d6e4",.28,.65,.12),s(f,.18,.54,"#b39cc2",.43,.49,.18)):(s(f,.09,.61,"#456575",.29,.68,.12),s(f,.12,.58,"#dbbf89",.49,.62,.18),e(r*-.18,l+.68,f*o*.32,r*.19,.85,o*.48,"#f6e1b1"));else if(c==="city"||c==="bus"){for(let f of[-1,1])e(0,a-1.05,f*(o+.13),r*.62,.88,.42,c==="city"?"#e0d49a":"#e6c29b");c==="city"&&(e(r*.34,l-.5,0,5.5,.7,o*1.05,ne.window),e(r*-.12,l+.28,0,r*.23,.9,o*1.18,u))}}function Yf(n,t,e){return[{role:"body",geometry:Eu(n),material:new He({vertexColors:!0,roughness:.65})},{role:"headlamp",geometry:t,material:new He({color:"#fff1d7",emissive:"#ffe4ab",emissiveIntensity:.26,roughness:.5})},{role:"taillamp",geometry:e,material:new He({color:"#bc5854",emissive:"#ed6b5c",emissiveIntensity:.28,roughness:.5})}]}function aE({length:n,width:t,paint:e,roof:i,trailer:s,stripe:r,refrigerated:o}){let a=[],c=(p,g)=>a.push([p,g]),l=(p,g,x,v,b,_,M)=>c(new Te(v,b,_).translate(p,g,x),M),u=-n/2+1.3,f=n/2-1.3,h=14,d=t/2-1.15,m=d-.7;c(ka([[u,d-1.2,32],[u+2,d,34],[h-2,d,34],[h,d-1,32]],10.2),s),c(ka([[17,m-1,18],[21,m,22],[45,m,22],[f-4,m-1,16],[f,m-2,14]],7),e),c(ka([[27,m-1,28],[31,m-.7,32],[42,m-.7,31],[47,m-1.6,26]],16),i),l(48,23.6,0,.9,6.8,m*1.5,ne.window),l(48.55,25.8,0,.22,.8,m*1.4,ne.glassGlow),l(f+.27,11,0,.56,5.9,9,ne.grille),l(f+.61,8.6,0,.55,1.12,m*1.55,ne.rim),l(u-.32,10.6,0,.62,1.2,2*d-3,ne.bumper),l(h+2.8,9.1,0,10,1.5,12,ne.bumper);for(let p of[-1,1]){l((u+h)/2,15,p*d,h-u-5,2.1,.39,r),l((u+h)/2,26,p*(d+.06),h-u-10,.32,.3,"#f6edd3"),l(40,25,p*(m-.5),7.8,5.25,.32,ne.window),l(47,21,p*(m+.2),2.1,2.1,1.5,e),l(35,9.5,p*(m+.25),7.2,.85,1.12,ne.rim),l(u-.1,22,p*d*.41,.48,13.2,.51,ne.rim);for(let g of[u+9,u+19,23,32,f-8.2]){let x=p*(d-1.42);c(new ze(4.35,4.35,2.8,8).rotateX(Math.PI/2).translate(g,4.35,x),ne.tire),c(new Ln(2.47,6).rotateY(p<0?Math.PI:0).translate(g,4.35,x+p*1.41),ne.hub)}}o&&(l(h+1.2,27,0,2.6,7.9,8.8,"#eee5ce"),l(h+2.55,27.8,0,.2,3.9,6.4,r));let y=(p,g)=>Eu([-1,1].map(x=>[new Te(.42,1.3,3.1).translate(p,g,x*(d-3.7)),"#ffffff"]));return Yf(a,y(f+.38,12.25),y(u-.54,12.4))}function _0(n,t){let{style:e,length:i,paint:s,trim:r,jacket:o,helmet:a}=n,c=[],l=(pt,at)=>c.push([pt,at]),u=(pt,at,St)=>l(new Te(...St).translate(...at),pt),f=(pt,at,St,Z=0)=>l(new Ae(1,8,5).scale(...St).rotateZ(Z).translate(...at),pt);function h(pt,at,St,Z){let rt=new W(...at),wt=new W(...St),Lt=new W().subVectors(wt,rt),Nt=new xn().setFromUnitVectors(new W(0,1,0),Lt.clone().normalize());l(new ze(Z,Z,Lt.length(),5,1,!0).applyQuaternion(Nt).translate(...rt.lerp(wt,.5).toArray()),pt)}let d=t?1:.75,m=i*(t?.132:.15),y=-i*(e==="longtail"?.309:.326),p=i*.326,g=[i*-.024,m+d*1.25,0],x=[i*(e==="cruiser"?-.16:-.115),i*(e==="trail"?.4:e==="cruiser"?.327:.369),0],v=e==="road"||e==="racer",b=[i*(v?.234:.204),x[1]+(v?.5:3.7)*d,0],_=d*(t?2.2:1.36),M=d*(t?1.04:.65),R=d*(t?.9:.65),S=e!=="road";for(let pt of[y,p]){l(new bn(m-M,M,4,12).translate(pt,m,0),ne.tire),S&&l(new bn(m+d*.37,d*.39,4,6,Math.PI*.74).rotateZ(Math.PI*.13).translate(pt,m,0),s);for(let at of[0,Math.PI/3,Math.PI*2/3]){let St=m-M*1.35,Z=Math.cos(at)*St,rt=Math.sin(at)*St;h(ne.rim,[pt-Z,m-rt,0],[pt+Z,m+rt,0],d*.23)}l(new ze(d*1.05,d*1.05,_,8).rotateX(Math.PI/2).translate(pt,m,0),ne.hub)}let T=[y,m,0];h(s,T,x,R),h(s,T,g,R),h(s,x,g,R),h(s,g,b,R);let I=e==="basket"||e==="scooter"?[b[0]*.7,g[1]+d*2.65,0]:b;h(s,x,I,R),I!==b&&h(s,I,b,R);for(let pt of[-1,1])h(ne.rim,[b[0],b[1]-d*2.3,pt*_*.38],[p,m,pt*_*.45],R*.7);u(ne.bumper,[x[0]-.25,x[1]+d*.4,0],[d*(t?7.1:4.8),d*1.08,d*3.15]);let P=d*(t?5.05:4.75),k=b[0]+(v?d*1.85:-d*.8),z=b[1]+(v?-d*.6:d*.25);for(let pt of[-1,1]){let at=[k,z,pt*P];h(ne.rim,b,at,d*.47),h(ne.tire,[k+d*.6,z,pt*P*.82],at,d*.63)}if(t){u(ne.bumper,[g[0]+.4,g[1]+1.05,0],[6.4,4.9,5.4]);let pt=e==="scooter"?[b[0]+2.1,x[1]-2.3,0]:[x[0]+5.5,x[1]+.7,0],at=e==="scooter"?[4.1,5.3,4.2]:e==="racer"?[6.8,3.45,4.55]:[5.4,2.8,3.85];if(f(s,pt,at,e==="scooter"?.34:-.18),u(r,[pt[0]+.8,pt[1]+.15,at[2]*.87],[at[0]*1.18,1,.8]),u(r,[pt[0]+.8,pt[1]+.15,-at[2]*.87],[at[0]*1.18,1,.8]),e==="racer")f(ne.window,[b[0]+2,b[1]+.95,0],[2.75,2.4,3.15],-.52),u(s,[y+1.75,x[1]+1.25,0],[5.6,1.55,4.25]);else if(e==="trail")u(r,[p-2.2,m*2.1+1.05,0],[7.25,.82,3.65]),u(ne.rim,[y+1.55,x[1]-1.9,0],[6.7,1.35,4.2]);else if(e==="scooter")f(s,[y+3.7,x[1]-3.1,0],[6.9,3.05,4.05],-.13),u(r,[g[0],m+1.1,0],[8.2,1.22,6.2]);else for(let St of[-1,1])h(ne.rim,[y-2.2,m+2.1,St*2.8],[g[0]+4.5,m+.45,St*3.25],.79)}else{let pt=e==="longtail"?[y+1.1,m*2.05+1.8,0]:[p-.98,b[1]-1.55,0];e==="basket"||e==="longtail"?(u(ne.wood,pt,[e==="longtail"?7.6:4.1,2.8,4.8]),u(r,[pt[0],pt[1]+1.15,0],[e==="longtail"?8:4.6,.56,5.1]),u(ne.tan,[pt[0],pt[1]+1.5,0],[e==="longtail"?6.3:3.6,.34,3.75])):e==="commuter"&&(u(r,[y+1.65,m+1.05,2],[4.2,3.4,1.85]),u(ne.roofRail,[y+1.6,m*2.05+.45,0],[5.3,.66,4.3]))}let O=[x[0]-d*.38,x[1]+d*2.05,0],U=[O[0]+(v?3.05:1.05)*d,O[1]+d*3.75,0],V=[U[0]+(v?3.35:.95)*d,U[1]+(v?3.1:4.85)*d,0],j=v?-.57:-.22;f(o,U,[d*2.6,d*4.15,d*3],j),f(a,V,[d*2.94,d*2.68,d*2.62]),f(ne.window,[V[0]+d*2.1,V[1]-d*.4,0],[d*1.08,d*1.05,d*2.2]),(e==="commuter"||e==="trail")&&u(r,[U[0]-d*2.1,U[1]+d*.6,0],[d*1.9,d*3.3,d*3.5]);let dt="#4b4e63",ot="#e2b491";for(let pt of[-1,1]){let at=[U[0]+d*1.1,U[1]+d*1.65,pt*d*2.43],St=[Vi(at[0],k,.48),Vi(at[1],z,.52)-d,pt*d*3.48],Z=[k,z,pt*P*.93];h(o,at,St,d*.95),h(o,St,Z,d*.76),u(ot,Z,[d*1.5,d*1.11,d*1.09]);let rt=t?0:pt*d*1.35,wt=[O[0]+d*(t?4.3:4.9)+rt,O[1]-d*3.5,pt*d*2.64],Lt=[g[0]+d*(e==="scooter"?2.65:.35)+rt,g[1]+d*.27-rt,pt*d*2.5];h(dt,[O[0],O[1],pt*d*1.86],wt,d*1.12),h(dt,wt,Lt,d*.88),u(ne.tire,[Lt[0]+d*.25,Lt[1],Lt[2]],[d*2.15,d*.95,d*1.42])}let G=d*(t?1.34:.84),q=[p+d*.58,m*(t?2.3:2.18),0],xt=[y-d*.56,m*(t?2.18:2.02),0];h(ne.bumper,[p,m+d*1.5,0],q,d*.58),h(ne.bumper,[y,m*1.6,0],xt,d*.46);let gt=pt=>Eu([[new Ae(G,6,4).scale(.53,.78,1).translate(...pt),"#ffffff"]]);return Yf(c,gt(q),gt(xt))}function M0(n){let t=eE.get(n);if(t)return _0(t,!0);let e=tE.get(n);if(e)return aE(e);let i=Qw.get(n);if(!i)return null;let s=sE(i);oE(s);let{outer:r,nose:o,frontY:a,shoulder:c,bodyParts:l}=s,u=(f,h)=>Eu([-1,1].map(d=>[new Te(1.48,1.8,r*.35).translate(f*(o+.19),h,d*r*.63),"#ffffff"]));return Yf(l,u(1,a-1.75),u(-1,c-2.65))}function S0(n){let t=nE.get(n);return t?_0(t,!1):null}var w0=new Map([["clear",{stride:4,speed:70}],["slow",{stride:2,speed:44}],["heavy",{stride:1,speed:20}]]),cs={stride:4,crossingSeconds:3.2},cE=242,E0=12,T0=.38,I0=new Map(Su.map(n=>[n.id,n])),A0=["seafoam-sedan","blue-wagon","butter-compact","ruby-motorcycle","pine-suv","blue-wagon","sand-pickup","butter-compact","lavender-delivery","pine-suv","teal-semi","indigo-motorcycle"].map(n=>I0.get(n)),lE=new qt("#fff1cf"),uE=new qt("#db514c");function hE(n){n.computeBoundingBox();let t=n.boundingBox;if(t.max.z-t.min.z<5)return[t.getCenter(new W)];let e=(t.min.z+t.max.z)/2,i=[new Be,new Be],s=new W,r=n.attributes.position;for(let o=0;o<r.count;o++)s.fromBufferAttribute(r,o),i[+(s.z>=e)].expandByPoint(s);return i.map(o=>o.getCenter(new W))}var fE=`
  #ifdef USE_FOG
    #ifdef FOG_EXP2
      opacity *= exp(-fogDensity * fogDensity * vFogDepth * vFogDepth);
    #else
      opacity *= 1.0 - smoothstep(fogNear, fogFar, vFogDepth);
    #endif
  #endif
`;function R0(n){let t={...ts.clone(Xt.fog),lightStrength:{value:1}};return new $e({fog:!0,uniforms:t,transparent:!0,depthWrite:!1,blending:Ji,toneMapped:!1,vertexShader:`
      varying vec2 lightUv;
      ${n?"varying vec3 tint;":""}
      #include <fog_pars_vertex>
      void main() {
        lightUv = uv;
        ${n?`
          tint = instanceColor;
          vec4 mvPosition = modelViewMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
          mvPosition.xy += position.xy * vec2(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz));
        `:"vec4 mvPosition = modelViewMatrix * instanceMatrix * vec4(position, 1.0);"}
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }
    `,fragmentShader:`
      varying vec2 lightUv;
      uniform float lightStrength;
      ${n?"varying vec3 tint;":""}
      #include <fog_pars_fragment>
      void main() {
        ${n?`
          float radius = length(lightUv * 2.0 - 1.0);
          float bloom = 1.0 - smoothstep(0.06, 0.96, radius);
          float center = 1.0 - smoothstep(0.10, 0.38, radius);
          float opacity = bloom * bloom * 0.43 + center * 0.39;
          vec3 color = tint;
        `:`
          float along = lightUv.x;
          float width = mix(0.23, 1.0, smoothstep(0.02, 0.76, along));
          float softEdge = 1.0 - smoothstep(width * 0.22, width, abs(lightUv.y * 2.0 - 1.0));
          float falloff = smoothstep(0.0, 0.09, along) * pow(1.0 - along, 1.42);
          float opacity = softEdge * falloff * 0.39;
          vec3 color = vec3(1.0, 0.80, 0.53);
        `}
        ${fE}
        gl_FragColor = vec4(color, clamp(opacity * lightStrength, 0.0, 1.0));
        #include <colorspace_fragment>
      }
    `})}function dE({index:n,lane:t}){let e=Math.floor(n/cs.stride),i=n%cs.stride;return A0[(2*(e+i)+t)%A0.length]}function C0({centerX:n,width:t,lanes:e}){let i=t-60,s=n-i/2,r=Math.max(1,E0*Math.round(i/(E0*cE))),o=i/r,a=e.map((y,p)=>Array.from({length:r},(g,x)=>({z:y,lane:p,index:x,x:s,offset:o*(x+.25+(r===1&&p?.5:0))}))),c=0,l,u,f,h=!1,d=[];function m(y,p,g,x=!1){let v=p?.severity==="ambient"?cs:w0.get(p?.severity),b=Number.isFinite(l)&&Number.isFinite(y)?se.clamp(y-l,0,.25):0;if(l=y,v!==u){h=!!(u&&v&&(v===cs||u===cs));let R=Math.min(r,v?.stride??1),S=v===cs?Math.floor(R/2):1;d=v?a.flatMap((T,I)=>T.filter(({index:P})=>P%R===I*S%R)):[],u=v}if(!v)return f=void 0,d;let _=p.speedFactor,M=v===cs?o*Math.min(r,cs.stride)/(2*cs.crossingSeconds):Number.isFinite(_)&&_>0?w0.get("clear").speed*se.clamp(_,.22,1):v.speed;if(x)c=!g&&Number.isFinite(y)?Math.max(0,y)*M:0;else if(!g)if(h&&f!==void 0){let R=Math.exp(-b/T0),S=f-M;c+=b*M+S*T0*(1-R),f=M+S*R,h=Math.abs(f-M)>.1}else c+=b*M,f=M;c%=i;for(let R of d){let S=(R.offset+c)%i;R.x=s+(R.lane?i-S:S)}return d}return{capacity:r*e.length,update:m}}function P0(n){let t=new ee,e=C0(n),i,s=new Map;function r(x,v,b=e.capacity){let _=new oi(x,v,b);return _.count=0,_.frustumCulled=!1,_.instanceMatrix.setUsage(zn),_}let o=r(new Ln(1,18).rotateX(-Math.PI/2).translate(0,.02,0),new Ce({color:"#35323c",opacity:.23,transparent:!0,depthWrite:!1})),a=r(new Nn(1,2).rotateX(-Math.PI/2).translate(.5,.16,0),R0(!1),e.capacity*2);a.name="road-headlight-beams";let c=r(new Nn(1,1),R0(!0),e.capacity*4);c.name="road-lamp-halos",a.visible=c.visible=!1,t.add(o,a,c);let l=new Ye,u=Math.abs(n.lanes[0]-n.lanes[1])/2,f,h=1;t.visible=!1;function d(x,v){for(let{mesh:b,role:_}of x.layers)_==="headlamp"&&(b.material.emissiveIntensity=v?2.45*h:.26),_==="taillamp"&&(b.material.emissiveIntensity=v?1.13*h:.28)}function m(x){if(s.has(x.id))return s.get(x.id);let v=new ee;v.name=`vehicle-${x.id}`;let b=M0(x.id).map(({geometry:R,material:S,role:T})=>({mesh:r(R,S),role:T}));v.add(...b.map(({mesh:R})=>R)),t.add(v);let _=R=>hE(b.find(S=>S.role===R).mesh.geometry),M={group:v,layers:b,headlamps:_("headlamp"),taillamps:_("taillamp"),count:0};return d(M,f),s.set(x.id,M),M}function y(x,v,b,_,M){let R=M?12.4:8.6;l.position.set(v.x+b*(_.x+(M?1.1:-1)),n.surfaceY+_.y+.8,v.z+b*_.z),l.scale.set(R,R,1),l.updateMatrix(),c.setMatrixAt(x,l.matrix),c.setColorAt(x,M?lE:uE)}function p(x,v,{reduceMotion:b=!1,night:_=!1,transientTelemetry:M=!1,headlightBrightness:R=1}={}){M&&(i??=C0(n));let T=(M?i:e).update(x,v,b,M);if(t.visible=T.length>0,a.visible=c.visible=_&&t.visible,a.count=c.count=0,!t.visible)return;let I=Number.isFinite(R)?se.clamp(R,.35,1.6):1;if(_!==f||I!==h){f=_,h=I,a.material.uniforms.lightStrength.value=I,c.material.uniforms.lightStrength.value=I;for(let O of s.values())d(O,_)}for(let O of s.values())O.count=0;let P=I0.get(v?.vehicleStyle),k=0,z=0;for(let[O,U]of T.entries()){let V=P??dE(U),j=m(V);l.position.set(U.x,n.surfaceY,U.z),l.rotation.y=U.lane?Math.PI:0,l.scale.set(1,1,1),l.updateMatrix();for(let{mesh:G}of j.layers)G.setMatrixAt(j.count,l.matrix);if(j.count++,l.scale.set(V.length*.55,1,V.width*.62),l.updateMatrix(),o.setMatrixAt(O,l.matrix),!_)continue;let dt=U.lane?-1:1,ot=se.clamp(V.length*1.1,53,86);for(let G of j.headlamps){let q=Math.max(5,Math.min(16,u-Math.abs(G.z)-1));l.position.set(U.x+dt*(G.x+1),n.surfaceY,U.z+dt*G.z),l.scale.set(ot,1,q),l.updateMatrix(),a.setMatrixAt(k++,l.matrix),y(z++,U,dt,G,!0)}for(let G of j.taillamps)y(z++,U,dt,G,!1)}_&&(a.count=k,c.count=z,a.instanceMatrix.needsUpdate=c.instanceMatrix.needsUpdate=!0,c.instanceColor.needsUpdate=!0),o.count=T.length,o.instanceMatrix.needsUpdate=!0;for(let{group:O,layers:U,count:V}of s.values()){O.visible=V>0;for(let{mesh:j}of U)j.count=V,V&&(j.instanceMatrix.needsUpdate=!0)}}function g(){t.traverse(x=>{x.isInstancedMesh&&(x.dispose(),x.geometry.dispose(),x.material.dispose())}),t.clear()}return{root:t,update:p,dispose:g}}var L0=22,N0=63,pE=525,mE=1100,gE=22,yE=75,$f=75,xE=105,bE=54,vE=[{shirt:"#c87f70",trim:"#f1d19d",pants:"#556072",skin:"#d49876",hair:"#4d3635",accessory:"bun"},{shirt:"#6a988b",trim:"#e8c58d",pants:"#5f666b",skin:"#a86a50",hair:"#382c34",accessory:"cap"},{shirt:"#9082ae",trim:"#f0d8b4",pants:"#6a627f",skin:"#e8af89",hair:"#6a4235",accessory:"pack"},{shirt:"#c79b53",trim:"#f1d39b",pants:"#677c7a",skin:"#a96c59",hair:"#4c3435",accessory:"curls"},{shirt:"#779cb8",trim:"#f4dfb5",pants:"#5a6b83",skin:"#d99871",hair:"#654537",accessory:"pack"},{shirt:"#ba8096",trim:"#f9ddad",pants:"#736583",skin:"#e3a986",hair:"#58403d",accessory:"bow"}],D0=[[[0,1],[5,.7],[1,1]],[[2,.97]],[[3,1],[4,.76]],[[1,.96],[2,1]],[[0,1],[5,.71]],[[3,.98]]],_E=(n,t)=>(n%t+t)%t;function ME(n){let t=n.width-yE*2,e=[],i=[];if(!Number.isFinite(t)||t<=0||!Number.isFinite(n.centerX))return{walkers:e,cyclists:i,sample:()=>({walkers:e,cyclists:i})};let s=n.centerX-t/2,r=Math.max(1,Math.round(t/pE)),o=Math.max(1,Math.round(t/mE)),a=t/r,c=t/o;for(let[p,g]of(n.sidewalks??[]).entries()){let{minZ:x,maxZ:v,surfaceY:b}=g,_=v-x;if(![x,v,b].every(Number.isFinite)||_<=0)continue;let M=p%2?-1:1,R=Math.min(1,_/gE),S=x+_*(M>0?.25:.75),T=x+_*(M>0?.76:.24);for(let I=0;I<r;I++){let P=D0[(I+p*2)%D0.length],k=t/2+(I+p*.42)*a-35,z=`sidewalk-walk-${p}-${I}`;for(let[O,[U,V]]of P.entries())e.push({id:`${z}-${O}`,groupId:z,style:U,child:V<.8,offset:k-M*13.2*O,scale:R*V,direction:M,y:b,z:S+M*.62*(O%2),phase:I*.91+p*.8+O*2.1})}for(let I=0;I<o;I++)i.push({id:`sidewalk-bike-${p}-${I}`,style:wu[(I+p*2)%wu.length],offset:t/2+(I+p*.65)*c,scale:R,direction:M,y:b,z:T,phase:I*1.7+p})}let l=t/L0,u=t/N0,f=l+$f+u+xE,h=Math.max(0,l/2-bE),d=[-1,1].map(p=>e.find(g=>g.direction===p&&!g.child)).filter(Boolean),m=[-1,1].map(p=>i.find(g=>g.direction===p)).filter(Boolean);function y(p=0,g=!1,{night:x=!1,activity:v}={}){let b=Number.isFinite(p)?Math.max(0,p):0;if(v==="overnight")return{walkers:[],cyclists:[]};if(x||v==="evening"){if(g)return{walkers:[],cyclists:[]};let M=Math.floor((b+h)/f),R=(b+h)%f,S=R>=l+$f,T=S?R-l-$f:R,I=S?m:d,P=S?u:l;if(T>=P||!I.length)return{walkers:[],cyclists:[]};let k=I[(M+1)%I.length],z=T/P*t,O=s+(k.direction>0?z:t-z),U={...k,x:O,gait:T*(S?7:10)+k.phase};return S?{walkers:[],cyclists:[U]}:{walkers:[U],cyclists:[]}}let _=(M,R,S)=>M.map(T=>({...T,x:s+_E(T.offset+T.direction*R*b,t),gait:g?0:b*S+T.phase}));return{walkers:_(e,L0,10),cyclists:_(i,N0,7)}}return{walkers:e,cyclists:i,sample:y}}var Tu={ink:"#4b3e4c",shoe:"#4a4651",sole:"#e2d0b7",blush:"#c88376"};function F0(n,t,e){let{shirt:i,trim:s,pants:r,skin:o,hair:a,accessory:c}=vE[n.style],l=t?0:Math.sin(n.gait),u=Math.abs(l)*.69,f=h=>h+u;e(i,0,f(10.45),0,2.95,4.3,3.4),e(r,-.1,f(7.25),0,2.6,1.7,3.04),e(s,1.1,f(13.35),0,2.14,.69,2.55),e(s,2.68,f(10.4),-.7,.41,.86,1);for(let h of[-1,1]){let d=l*h,m=d*3,y=Math.max(0,d)*1.35;e(r,m*.45,4.5+y*.42+u*.32,h*1.51,1.19,3.2,1.25,-.48*d),e(Tu.shoe,.77+m,1.11+y,h*1.52,2.17,.99,1.34),e(Tu.sole,1.38+m,.49+y,h*1.52,1.64,.43,1.32),e(i,-d*1.07,f(10.16),h*3.15,1.23,2.87,1.15,.38*d),e(o,-d*2.16,f(7.7),h*3.31,.98,1.1,.95)}e(a,-.67,f(17.25),0,4.17,4.32,3.82),e(o,1.05,f(16.63),0,3.76,3.75,3.41),e(a,1.12,f(19.85),-.89,2.75,1.57,2.82,-.3),e(o,4.48,f(16.54),0,.64,.63,.66);for(let h of[-1,1])e(o,.36,f(16.69),h*3.47,1.02,1.07,.64),e(Tu.ink,4.18,f(17.25),h*1.35,.34,.47,.43),e(Tu.blush,3.76,f(16.21),h*2.12,.37,.29,.55);if(c==="bun"&&(e(a,-3.45,f(19.68),.72,1.98,1.89,1.89),e(s,-3.51,f(20.79),1.35,1.64,.47,.69)),c==="cap"&&(e(i,-.5,f(20.2),0,3.72,1.97,3.45),e(s,2.72,f(19.62),0,2.43,.46,2.89)),c==="pack"&&(e(s,-2.88,f(10.2),0,1.48,2.89,2.63),e(i,-4.01,f(10.65),0,.46,1.28,1.77)),c==="curls")for(let h of[-1,1])e(a,-.9,f(18.52),h*2.68,2.6,2.83,1.33);c==="bow"&&(e(s,.1,f(21.05),2.67,1.56,.92,.65,.47),e(s,1.82,f(21.05),2.67,1.51,.92,.65,-.47))}function U0(n){let t=ME(n),e=new ee;if(e.name="sidewalk-scenery",!t.walkers.length&&!t.cyclists.length)return{root:e,update(){},dispose:()=>e.removeFromParent()};let i=new Ye;function s(g,x,v,b){let _=new oi(x,v,b);return _.name=g,_.frustumCulled=!1,_.instanceMatrix.setUsage(zn),e.add(_),_}let r=new Map,o=0;for(let g of t.walkers)F0(g,!0,x=>{o++,r.has(x)||r.set(x,new qt(x))});let a=s("sidewalk-walkers",new Ae(1,9,6),new He({color:"#fff",roughness:.81}),o),c=s("sidewalk-contact-shadows",new Ln(1,16).rotateX(-Math.PI/2),new Ce({color:"#584b52",opacity:.23,transparent:!0,depthWrite:!1}),t.walkers.length+t.cyclists.length),l=new Map(wu.map(g=>{let x=t.cyclists.filter(v=>v.style.id===g.id).length;return[g.id,x?S0(g.id).map(({geometry:v,material:b,role:_})=>({role:_,mesh:s(`sidewalk-bicycle-${g.id}-${_}`,v,b,x)})):[]]})),u,f=0,h,d,m;function y(g,{reduceMotion:x=!1,night:v=!1,transientTelemetry:b=!1,activity:_}={}){let M=v||_==="evening"||_==="overnight";if(M!==u){for(let U of l.values())for(let{role:V,mesh:j}of U)V==="headlamp"&&(j.material.emissiveIntensity=M?1.05:.16),V==="taillamp"&&(j.material.emissiveIntensity=M?.75:.18);u=M}if(!b){let U=Number.isFinite(h)&&Number.isFinite(g)?se.clamp(g-h,0,.25):0;x||(f+=U),h=g}let R=b?x?0:g:f;if(d?.time===R&&d?.reduceMotion===x&&d?.transientTelemetry===b&&d?.night===v&&d?.activity===_)return;d={time:R,reduceMotion:x,transientTelemetry:b,night:v,activity:_};let S=t.sample(R,x,{night:v,activity:_}),T=S.walkers.length===t.walkers.length?"day":S.walkers[0]?.id,I=T!==m;m=T;let P=0,k=0;function z(U,V,j){i.position.set(U.x,U.y+.065,U.z),i.rotation.set(0,0,0),i.scale.set(V*U.scale,1,j*U.scale),i.updateMatrix(),c.setMatrixAt(k++,i.matrix)}for(let U of S.walkers){let{direction:V,scale:j}=U,dt=V>0?0:Math.PI;F0(U,x,(ot,G,q,xt,gt,pt,at,St=0)=>{i.position.set(U.x+G*j*V,U.y+q*j,U.z+xt*j*V),i.rotation.set(0,dt,St),i.scale.set(gt*j,pt*j,at*j),i.updateMatrix(),I&&a.setColorAt(P,r.get(ot)),a.setMatrixAt(P++,i.matrix)}),z(U,5.32,4.1)}let O=new Map;for(let U of S.cyclists){let V=O.get(U.style.id)??0;i.position.set(U.x,U.y,U.z),i.rotation.set(0,U.direction>0?0:Math.PI,0),x||i.rotateX(Math.sin(U.gait)*.028),i.scale.setScalar(U.scale),i.updateMatrix();for(let{mesh:j}of l.get(U.style.id))j.setMatrixAt(V,i.matrix);O.set(U.style.id,V+1),z(U,U.style.length*.52,U.style.width*.58)}for(let[U,V]of l)for(let{mesh:j}of V)j.count=O.get(U)??0,j.instanceMatrix.needsUpdate=!0;a.count=P,c.count=k,I&&a.instanceColor&&(a.instanceColor.needsUpdate=!0),a.instanceMatrix.needsUpdate=!0,c.instanceMatrix.needsUpdate=!0}function p(){for(let g of e.children)g.dispose(),g.geometry.dispose(),g.material.dispose();e.clear(),e.removeFromParent()}return{root:e,update:y,dispose:p}}var Ba=Math.PI*2,{clamp:Au,lerp:Os}=se,SE=new Set(["rainy","pouring","lightning-rainy","windy","windy-variant"]),wE=188,EE=490,TE=175,Oa=[[-.49,.67],[-.34,.94],[-.1,1],[.2,.84],[.39,.48],[.51,.045]],AE=[{id:"sailboat",name:"Ivory sailboat",length:59,beam:21,paint:"#558e94",deck:"#e1bb86",center:-298,radius:122,offshore:54,drift:6,period:74,start:1.03,wake:.63},{id:"cabin",name:"Coral cabin launch",length:66,beam:24,paint:"#d47960",deck:"#eed3a7",center:270,radius:118,offshore:54,drift:5,period:48,start:-1.32,wake:1},{id:"fishing",name:"Juniper fishing boat",length:52,beam:20,paint:"#689483",deck:"#d4b083",center:31,radius:78,offshore:103,drift:8,period:87,start:2.16,wake:.7},{id:"jet-ski",name:"Lagoon jet ski",length:30,beam:12.2,paint:"#438e90",deck:"#e7b768",center:514,radius:46,offshore:72,drift:6,period:16,start:.47,wake:.96,wakeSeconds:3.7},{id:"cruise-ship",name:"Pearl cruise ship",length:149,beam:41,paint:"#436b84",deck:"#e9c79d",center:76,radius:201,offshore:286,drift:23,period:148,start:1.53,wake:.56,wakeSeconds:8}];function po(n,t){let e=0,i=n.length-1;for(;i-e>1;){let o=e+i>>1;t<n[o].x?i=o:e=o}let s=n[e],r=n[i];return Os(s.z,r.z,Au((t-s.x)/(r.x-s.x),0,1))}function O0(n){if(!Array.isArray(n?.shoreline)||n.shoreline.length<2||![n.y,n.farZ,n.focusX].every(Number.isFinite))return[];let{shoreline:t,farZ:e,focusX:i}=n,s=t[0].x,r=t.at(-1).x;return!Number.isFinite(s)||!Number.isFinite(r)||r-s<280?[]:AE.map(o=>{let a=Math.min(o.radius,(r-s)/5),c=a+o.length,l=Au(i+o.center,s+c,r-c);function u(f){let h=l+Math.cos(f)*a,d=Math.max(e+65,po(t,h)-o.offshore-Math.sin(f)*o.drift);return{x:h,z:d}}return{...o,point:u}}).filter(o=>{for(let a=0;a<12;a++){let{x:c,z:l}=o.point(a*Ba/12);if(po(t,c)-l<o.length/2+8)return!1}return!0})}function RE(n,t=O0(n)){if(!t.length)return()=>null;let{shoreline:e,farZ:i}=n,s=e[0].x+120,r=e.at(-1).x-120,o=r-s;if(o<120)return()=>null;function a(u,f,h,d){let m=o/f,y=m+h,p=u.flatMap(x=>{let v=t.find(_=>_.id===x);if(!v)return[];let b=[1,-1].map(_=>({...v,start:0,period:m,point(M){let R=v.length*.55,S=Au((_>0?s:r)+_*o*M/Ba,e[0].x+R+8,e.at(-1).x-R-8),T=Math.min(po(e,S),po(e,S-R),po(e,S+R)),I=Math.max(i+65,T-v.offshore-Math.sin(M*2)*v.drift*.55);return{x:S,z:I}}}));for(let _=0;_<=20;_++){let{x:M,z:R}=b[0].point(_*Ba/20);if(po(e,M)-R<v.length/2+8)return[]}return[b]});if(!p.length)return()=>null;let g=d(m,y);return x=>{let v=(Number.isFinite(x)?Math.max(0,x):0)+g,b=v%y;if(b>=m)return null;let _=Math.floor(v/y);return{route:p[_%p.length][_%2],elapsed:b}}}let c=a(["cabin","fishing"],37,wE,u=>Math.max(0,u/2-42)),l=a(["fishing"],29,EE,(u,f)=>f-TE);return(u,f)=>(f==="overnight"?l:c)(u)}function B0(n,t,e=.003){let i=n.point(t-e),s=n.point(t+e);return Math.atan2(i.z-s.z,s.x-i.x)}function CE(n,t,{condition:e}={}){let i=Number.isFinite(t)?t:0,s=n.start+i*Ba/n.period,{x:r,z:o}=n.point(s),a=i*1.24+n.start*3,c=n.id==="jet-ski"?1.9:n.id==="cruise-ship"?.55:1,l=(SE.has(e)?1.55:1)*c;return{x:r,z:o,angle:s,yaw:B0(n,s),heave:Math.sin(a)*.55*l,pitch:Math.cos(a*.89)*.017*l,roll:Math.sin(a*.74+.4)*.031*l}}function z0(n,t){let e=new ue;return e.setAttribute("position",new $t(n.flat(),3)),e.setIndex(t),e.computeVertexNormals(),e}function H0(n){return z0(n,n.length===3?[0,1,2]:[0,1,2,0,2,3])}function mo(n,t,e,i,s=1){let r=Oa.flatMap(([l,u])=>{let f=l*n,h=t*u*s/2;return[[f,i,-h*.58],[f,i,h*.58],[f,e-.9,h],[f,e,h*.88],[f,e,-h*.88],[f,e-.9,-h]]}),o=[],a=6,c=(Oa.length-1)*a;for(let l=0;l<c;l+=a)for(let u=0;u<a;u++){let f=(u+1)%a;o.push(l+u,l+u+a,l+f+a,l+u,l+f+a,l+f)}for(let l=1;l<a-1;l++)o.push(0,l,l+1,c,c+l+1,c+l);return z0(r,o)}function IE(n){let t=n.map(([i,s])=>{let r=i.index?i.toNonIndexed():i;r!==i&&i.dispose(),r.deleteAttribute("uv");let o=new qt(s),a=r.getAttribute("position").count,c=new Float32Array(a*3);for(let l=0;l<a;l++)o.toArray(c,l*3);return r.setAttribute("color",new Pe(c,3)),r}),e=$n(t);for(let i of t)i.dispose();return e}function Ge(n,t,e,i,s,r){return new Te(n,t,e).translate(i,s,r)}function tn(n,t,e,i,s,r,o=0){return new Ae(1,12,7).scale(n/2,t/2,e/2).rotateZ(o).translate(i,s,r)}function dn(n,t,e){let i=new W(...n),s=new W(...t).sub(i),r=new xn().setFromUnitVectors(new W(0,1,0),s.clone().normalize());return new ze(e,e,s.length(),6).applyQuaternion(r).translate(...i.addScaledVector(s,.5).toArray())}function k0(n,t,e,i,s,r){let o=[0,.19,.31,.64,1],a=4,c=(l,u)=>{let f=Os(Os(t[0],e[0],l),i[0],u),h=Os(Os(t[1],e[1],l),i[1],u),d=Os(Os(t[2],e[2],l),i[2],u)+Math.sin(l*Math.PI)*s*(1-u);return[f,h,d]};for(let l=0;l<o.length-1;l++){let u=o[l],f=o[l+1];for(let h=0;h<a;h++){let d=h/a,m=(h+1)/a,y=[c(d,u),c(m,u),c(m,f)];f<1&&y.push(c(d,f)),n.push([H0(y),r[l]])}}}function PE(n){let t=[3,43,0];n.push([dn([3,4,0],t,.9),"#c6a983"],[dn([3,11,0],[-25,10,-13],.6),"#c6a983"],[dn([28,5,0],t,.33),"#d7c5a8"],[dn([-25,5,0],t,.28),"#d7c5a8"],[Ge(15,1.9,10,-13,5.4,0),"#a8886e"],[Ge(9,1.5,7.5,-13,6.35,0),"#62797b"]),k0(n,[-25,10.5,-13],[3,11.5,0],[3,41,0],-9.5,["#fff5df","#cc7f68","#fff8e6","#f3e2b8"]),k0(n,[4,10,1],[24,8.5,6.5],[5,33,0],4.8,["#eaf1dc","#77ada7","#eff5dd","#f4ecd7"])}function LE(n){n.push([Ge(28,8.5,17,-7,9.1,0),"#f1e5cc"],[Ge(25,1.7,18.4,-8.4,14.4,0),"#d7e1d0"],[Ge(9,.75,7,-9,15.5,0),"#8aa5a5"],[Ge(9,2.2,11,-24,5.9,0),"#bc9472"],[H0([[7.03,6.5,-7],[7.03,12.75,-6.6],[7.03,12.75,6.6],[7.03,6.5,7]]),"#678b99"],[dn([1,14,0],[1,21,0],.55),"#d5d6cc"]);for(let t of[-1,1]){for(let e of[-15,-5,3])n.push([Ge(e===3?4.2:6.4,4.1,.27,e,10.5,t*8.56),"#507385"]);n.push([dn([12,5,t*8.6],[24,5,t*4.7],.49),"#f4dec2"],[dn([12,4,t*8.6],[12,5,t*8.6],.44),"#f4dec2"])}}function NE(n){n.push([Ge(15,6.1,13,6,7.9,0),"#e4d7ad"],[Ge(17,1.4,14,6,11.65,0),"#71968e"],[Ge(.3,3.5,9.5,13.61,8.8,0),"#587a82"],[Ge(9,3.4,7,-8,6.8,2.6),"#d7a674"],[Ge(7.2,.75,5.8,-8,8.7,2.6),"#ebc996"],[dn([-19,5,-5],[-28,16,-7],.45),"#907459"],[dn([-28,16,-7],[-34,5.5,-10],.18),"#ccbaa0"]);for(let t of[-5,5])n.push([Ge(7.4,3,.25,6,8.8,t*1.31),"#678c91"],[new bn(2.35,.63,5,10).rotateX(-Math.PI/2).translate(-17,5,t),"#d88761"])}function DE(n){n.push([tn(15.9,5.4,9,4.7,3.1,0,-.07),"#52a7a6"],[tn(11.3,4.9,5.1,4.4,4.6,0,-.33),"#e5ae68"],[tn(5.1,2.4,3.15,8.7,6.02,0,-.43),"#f5d591"],[tn(3.4,2.5,3.26,3.25,6.15,0,-.3),"#426575"],[tn(12.8,3.45,5.9,-4.45,4.76,0,.11),"#40535c"],[Ge(5.8,.54,5.4,-11.3,2.88,0),"#7bb3a7"],[dn([2.9,5.7,0],[1.9,9.7,0],.52),"#69685d"],[dn([2.16,9.57,-3.35],[2.16,9.57,3.35],.4),"#53616a"],[tn(5.6,3.4,5.7,-3.8,6.35,0),"#5c738b"],[tn(6.06,7.3,5.45,-1.34,10.1,0,-.48),"#db7e59"],[tn(4.85,5.4,4.54,.02,11.1,0,-.48),"#efb36c"],[tn(4.84,5.2,4.82,1.37,15.38,0,-.15),"#f5dfaf"],[tn(2.34,2.04,4.67,2.55,15.37,0,-.12),"#4f637a"],[tn(.81,1.36,3.45,3.48,15.63,0,-.14),"#8eafb5"]);for(let t of[-1,1]){let e=t*3.01;n.push([tn(13.7,.75,1.52,-4.45,3.18,t*4.19),"#59646b"],[tn(6.2,2.32,1.64,-3.75,6.18,e,-.33),"#627a92"],[tn(4.25,1.52,1.44,-5.88,4.5,t*3.78,.86),"#51657a"],[tn(3.45,1.11,1.48,-5.58,3.43,t*4.05),"#334951"],[dn([-.87,11.64,t*2.02],[1.79,9.65,e],.79),"#d68868"],[tn(1.51,1.36,1.34,1.92,9.7,t*3.21),"#c98161"])}}function FE(n,{length:t,beam:e}){let i="#f2e9d8",s="#fff3dc",r="#557788",o="#9fbdbe";n.push([Ge(109,6.6,29.1,-4,10.27,0),i],[Ge(110.2,1.15,31.3,-4,13.75,0),s],[Ge(92,5.1,26.2,-3.5,16.7,0),i],[Ge(94.7,1.02,28.1,-3.8,19.42,0),s],[Ge(66.2,4.5,21.8,2.8,21.9,0),i],[Ge(69.7,.91,24.7,2.9,24.44,0),s],[mo(29,24,26.77,20.72,.86).translate(31,0,0),i],[mo(30.3,25,25.6,23.86,.92).translate(31,0,0),r],[mo(28.9,23,27.12,26.39,.9).translate(31,0,0),s],[Ge(23.6,.76,15.3,-24.9,25,0),"#d6b18d"],[Ge(19.4,.49,11.1,-24.9,25.51,0),"#81b9b5"],[Ge(15.1,.16,8.7,-25.8,25.82,0),"#62a9b4"],[Ge(12,.14,1.05,-24.6,25.9,2.82),"#a7d6cc"],[tn(12,2.13,8.2,15.4,25.76,0),"#dfe6d8"],[dn([27,27,0],[26.5,35.4,0],.58),"#e5e4d8"],[dn([24.1,33,-3.6],[24.1,33,3.6],.41),"#e5e4d8"],[tn(4.21,3.29,3.84,13.4,27.8,0),"#e9e9d9"],[tn(3.57,2.86,3.35,9.6,27.12,5.6),"#dedfce"]);for(let a of[-5.9,5.9])n.push([dn([1,24.8,a],[-1.47,34,a],2.51),"#dfa179"],[dn([-.94,32,a],[-1.62,34.62,a],2.55),"#9d5c54"],[tn(4.4,.46,4.62,-1.65,34.66,a),"#514e59"]);for(let a of[-1,1]){for(let[c,l,u,f]of[[101,10.86,14.67,6.4],[89,17.18,13.17,6.2],[61,22.1,10.97,5.9]])for(let h=-c/2;h<=c/2;h+=f)n.push([Ge(3.61,2.05,.26,h,l,a*u),r],[Ge(3.6,.33,.3,h,l+.61,a*u),o]);for(let c of[-42,-29,-16,-3,10,23])n.push([Ge(9.3,.88,2.81,c,13.1,a*14.61),"#b5af9e"],[tn(10.53,2.75,3.83,c,13.37,a*15.49),"#dc9164"],[tn(9.12,1.04,3,c,14.33,a*15.49),"#f0c285"]);for(let c of[-56,-43,-30,-17,-4,9,22,35,48,57]){let l=c/t,u=Oa.findIndex(([p])=>p>=l),[f,h]=Oa[u-1],[d,m]=Oa[u],y=Os(h,m,(l-f)/(d-f))*e/2;n.push([tn(2.1,1.74,.62,c,5,a*(y-.08)),"#78969e"])}n.push([dn([-46,19.95,a*13.74],[42,19.95,a*13.74],.4),o],[dn([-27,24.95,a*11.67],[26,24.95,a*11.67],.34),o],[dn([49,8.13,a*15.2],[67,8.13,a*5.1],.43),s])}}function UE(n,t){let{id:e,length:i,beam:s,paint:r,deck:o}=n,a=new ee;a.name=n.name;let c=e==="jet-ski"?1.76:e==="cruise-ship"?6.1:3.7,u=[[mo(i,s,c,e==="jet-ski"?-1.32:e==="cruise-ship"?-4.92:-2.5),r],[mo(i,s,c+.82,c-.15,1.018),"#f4e4c9"],[mo(i*.92,s,c+1.05,c+.74,.83),o]];return e==="sailboat"?PE(u):e==="cabin"?LE(u):e==="jet-ski"?DE(u):e==="cruise-ship"?FE(u,n):NE(u),a.add(new ae(IE(u),t)),a}var ks=12,kE=new qt("#def5e9");function OE(n,t){let i=ks*3*2,s=new ue,r=new Pe(new Float32Array(i*3),3).setUsage(zn),o=new Float32Array(i*4),a=[];for(let f=0;f<3;f++)for(let h=0;h<ks;h++){let d=(f*ks+h)*2,m=h/(ks-1),y=Math.pow(Math.sin((.1+.9*m)*Math.PI),1.15)*(1-.4*m);for(let p=0;p<2;p++)kE.toArray(o,(d+p)*4),o[(d+p)*4+3]=n.wake*y*(f===1?.22:.76);h<ks-1&&a.push(d,d+2,d+1,d+1,d+2,d+3)}s.setAttribute("position",r),s.setAttribute("color",new Pe(o,4)),s.setIndex(a);let c=new Ce({vertexColors:!0,side:Qe,transparent:!0,depthWrite:!1,opacity:.82}),l=new ae(s,c);l.name=n.name+" wake",l.frustumCulled=!1;function u({angle:f},h,d=n){let y=(n.wakeSeconds??(n.id==="cabin"?4.1:6))*Ba/d.period;for(let p=0;p<ks;p++){let g=p/(ks-1),x=f-y*g,v=B0(d,x),{x:b,z:_}=d.point(x),M=Math.cos(v),R=Math.sin(v),S=n.length*.48,T=b-M*S,I=_+R*S;for(let P=0;P<3;P++){let k=(P-1)*n.beam*(.19+g*.62),z=(P===1?1.85:.62)*(1+g*.55);for(let O=0;O<2;O++){let U=k+(O?z:-z);r.setXYZ((P*ks+p)*2+O,T+R*U,t+.14,I+M*U)}}}r.needsUpdate=!0,c.opacity=h?.44:.82}return{mesh:l,update:u}}function G0(n){let t=new ee;t.name="Coastal boats";let e=new He({vertexColors:!0,side:Qe,roughness:.73}),i=O0(n),s=RE(n,i),r=new Ae(1.35,8,6),o=["#ff896b","#8bf0b4","#fff1c4"].map(d=>new Ce({color:d,toneMapped:!1})),a=i.map(d=>{let m=UE(d,e),y=OE(d,n.y),p;if(d.id==="cabin"||d.id==="fishing"){p=new ee,p.name=`${d.name} running lights`;for(let[g,x]of[[.33,6.5,-.27],[.33,6.5,.27],[-.36,6.7,0]].entries()){let v=new ae(r,o[g]);v.position.set(x[0]*d.length,x[1],x[2]*d.beam),p.add(v)}m.add(p)}return t.add(y.mesh,m),{route:d,hull:m,wake:y,lights:p}}),c=0,l,u=!1;function f(d,{reduceMotion:m=!1,night:y=!1,condition:p,transientTelemetry:g=!1,activity:x}={}){if(u)return;let v=Number.isFinite(d)?d:void 0;!g&&!m&&v!==void 0&&l!==void 0&&(c+=Au(v-l,0,.25)),l=g?void 0:v;let b=g?m?0:v??0:c,_=y||x==="evening"||x==="overnight",M=_&&!m?s(b,x):null;for(let{route:R,hull:S,wake:T,lights:I}of a){let P=!_||M?.route.id===R.id;if(S.visible=P,T.mesh.visible=P,I&&(I.visible=_&&P),!P)continue;let k=M?.route??R,z=CE(k,M?.elapsed??b,{condition:p});S.position.set(z.x,n.y+z.heave,z.z),S.rotation.set(z.roll,z.yaw,z.pitch,"YXZ"),T.update(z,_,k)}}function h(){if(!u){u=!0;for(let{hull:d,wake:m}of a)d.children[0].geometry.dispose(),m.mesh.geometry.dispose(),m.mesh.material.dispose();e.dispose(),r.dispose();for(let d of o)d.dispose();t.clear()}}return f(0),{root:t,update:f,dispose:h}}var BE=26,zE=39,HE=2.25,Ru=2*Math.PI,GE=[{skin:"#d6a083",hair:"#56413a",shirt:"#df8b72",shorts:"#658e91",trim:"#f7e5bd",style:"cap"},{skin:"#a87761",hair:"#403035",shirt:"#72a79a",shorts:"#77698a",trim:"#f2ce87",style:"bun"},{skin:"#e5ac86",hair:"#684437",shirt:"#e0a95e",shorts:"#7496b1",trim:"#fff0cd",style:"hat"},{skin:"#b98666",hair:"#4e3939",shirt:"#a78cb3",shorts:"#6a8176",trim:"#f0dbb3",style:"fringe"}];function go(n,t){let e=n.findIndex(r=>r.x>=t);if(e<1)return n[e===0?0:n.length-1].z;let i=n[e-1],s=n[e];return se.lerp(i.z,s.z,(t-i.x)/(s.x-i.x))}function VE(n,t){let{shoreline:e,focusX:i,y:s}=n??{},r=t?.farZ;if(![i,r,s].every(Number.isFinite)||!Array.isArray(e)||e.length<2||!e.every(l=>Number.isFinite(l?.x)&&Number.isFinite(l?.z)))return null;function o(l,u,f){let h=l-u,d=l+u,m=e.filter(M=>M.x>h&&M.x<d).map(M=>M.z),y=Math.max(go(e,h),go(e,d),...m)+BE,p=r-zE;if(p-y<19)return null;let g=Math.min(f,(p-y)/2),x=(p+y)/2,v=go(e,l)+22,b=se.clamp((r+.4-x)/(r+.4-v),0,1),_=s-.77+b*.43;return{x:l,y:_,z:x,halfWidth:u,halfDepth:g}}let a=o(i-72,46,18),c=o(i+68,27,15);return a||c?{court:a,castle:c}:null}function V0(n,t=0,e=!1){let i=e?.96:Number.isFinite(t)?Math.max(0,t):0,s=[],r;if(n.court){let{x:o,y:a,z:c,halfDepth:l,halfWidth:u}=n.court,f=i/HE,h=f%1,d=Math.floor(f)%2?1:-1,m=Math.sin(Math.PI*h),y=u-16,p=Math.min(3.3,l*.22);r={x:o+d*y*(1-2*h),y:a+20.9+m*15.7,z:c+Math.sin(Ru*h)*p,rotation:i*2.6,ground:a};for(let g of[-1,1]){let v=1-Math.min(1,(g!==d?1-h:h)/.24),b=e?.32:v*v;s.push({kind:"player",style:g<0?0:1,scale:1,yaw:-g*Math.PI/2,x:o+g*(y+6-b*2),y:a+b*1.65,ground:a,z:c+g*p*(.65+m*.35),reach:b,swing:Math.sin(i*3.15+g*.9)*.42})}}if(n.castle){let{x:o,y:a,z:c}=n.castle;s.push({kind:"builder",style:2,scale:.72,yaw:-Math.PI/2.55,x:o+14.5,y:a,ground:a,z:c+4.2,reach:e?.57:.55+.45*Math.sin(i*4.8),swing:e?0:Math.cos(i*4.8)*.55},{kind:"builder",style:3,scale:1,yaw:Math.PI/2.65,x:o-15.2,y:a,ground:a,z:c+1.8,reach:e?.37:.44+.33*Math.sin(i*2.5+.9),swing:e?0:Math.cos(i*2.5+.9)*.35})}return{actors:s,ball:r}}function WE(n,t,e,i,s){let r=n.index?n.toNonIndexed():n;r!==n&&n.dispose(),r.deleteAttribute("uv");let o=new qt(t),a=new Float32Array(r.attributes.position.count*3);for(let c=0;c<a.length;c+=3)o.toArray(a,c);return r.setAttribute("color",new Pe(a,3)),r.translate(e,i,s)}function Cu(n,t){let e=[],i=(c,l,u,f,h)=>e.push(WE(c,l,u,f,h));t({add:i,box:(c,l,u,f,h,d,m)=>i(new Te(c,l,u),f,h,d,m),cylinder:(c,l,u,f,h,d,m)=>i(new ze(c,l,u,12),f,h,d,m)});let o=$n(e);for(let c of e)c.dispose();let a=new He({vertexColors:!0,roughness:.86});n.add(new ae(o,a))}function XE({x:n,y:t,z:e,halfWidth:i,halfDepth:s}){let r=new ee;r.name="beach-volleyball-court",r.position.set(n,t,e);let o=s-1;return Cu(r,({box:a,cylinder:c})=>{let l="#bd816b",u="#b7a78c",f="#f4e4bb";for(let h of[-1,1])a(i*2,.1,.56,l,0,.14,h*s),a(.56,.1,s*2,l,h*i,.14,0),c(.62,.98,20.2,"#e0c4a0",0,10.1,h*o),c(.93,.93,1.1,l,0,18.9,h*o),c(.85,.85,.76,f,0,20.48,h*o),a(.76,.54,o*2,f,0,h<0?10.1:19.5,0);for(let h=1;h<5;h++)a(.23,.23,o*2,u,0,10.2+h*1.83,0);for(let h=1;h<12;h++)a(.22,9.25,.24,u,0,14.8,o*(h/6-1))}),r}function qE({x:n,y:t,z:e}){let i=new ee;return i.name="beach-sandcastle",i.position.set(n,t,e),Cu(i,({add:s,box:r,cylinder:o})=>{let a="#d9b284",c="#e5c199",l="#ac8466";s(new Ae(1,12,6).scale(12.1,1.25,8.1),"#cda77f",0,.45,0),r(12.3,4.6,7.5,a,0,2.45,-.5),r(3.2,2.85,.31,l,0,1.85,3.32),s(new Ae(1,8,5).scale(1.61,1.6,.25),l,0,3.11,3.29);for(let f of[-1,1]){let h=f*6.15;o(2.44,3.35,7.9,a,h,4.05,-.8),o(2.66,2.52,1.03,c,h,8.03,-.8);for(let[d,m]of[[-1.75,0],[1.75,0],[0,-1.75],[0,1.75]])r(1.22,1.1,1.22,c,h+d,8.99,-.8+m);r(1.07,.94,.3,l,h,5.42,1.65)}o(1.72,2.44,9.25,c,.3,4.75,-3.55),o(.05,2.07,2.74,a,.3,10.37,-3.55),o(.22,.26,4.1,"#a68968",.3,12.52,-3.55);let u=new ue;u.setAttribute("position",new $t([0,0,0,4.35,.6,0,0,2.18,0,0,2.18,0,4.35,.6,0,0,0,0],3)),u.computeVertexNormals(),s(u,"#d0816f",.38,13.05,-3.54),o(2.25,1.68,3.5,"#6da69e",-10.7,1.9,5.1),o(2.14,2.14,.44,"#a4c1a7",-10.7,3.71,5.1),o(1.61,1.61,.21,l,-10.7,3.97,5.1),s(new bn(2.06,.21,5,12,Math.PI),"#f1ddac",-10.7,3.85,5.1),s(new Te(.62,.42,5.7).rotateY(.53),"#cb8d67",7.7,.42,6.8),s(new Ae(1,8,5).scale(1.2,.36,1.5).rotateY(.53),"#d89b66",9.4,.43,9)}),i}function YE(){let n=new Ae(3.25,24,12),t=n.toNonIndexed();n.dispose();let e=t.attributes.position,i=["#e68c70","#f4e0ae","#74aba4","#f1c165","#8a96b4","#f7e5bc"].map(o=>new qt(o)),s=new Float32Array(e.count*3);for(let o=0;o<e.count;o+=3){let a=f=>(e[f](o)+e[f](o+1)+e[f](o+2))/3,c=Math.atan2(a("getZ"),a("getX")),l=Math.floor((c+Math.PI)/Ru*i.length)%i.length,u=Math.abs(a("getY"))>2.85?i[1]:i[l];for(let f=0;f<3;f++)u.toArray(s,(o+f)*3)}t.setAttribute("color",new Pe(s,3));let r=new ae(t,new He({vertexColors:!0,roughness:.45}));return r.name="beach-volleyball-ball",r}function Zf(n,t){let{skin:e,hair:i,shirt:s,shorts:r,trim:o,style:a}=GE[n.style],c=n.kind==="beachgoer",l=n.kind==="surfer",u=n.kind==="builder"||c,f=c?9.25:u?7.8:l?10.7:12.2,h=f+(c?5.9:u?5.8:6.1),d=l?n.swing*.95:u?n.reach*1.15+.65:0,m=l?n.swing*.22:c?.11:u?.24:0;t(s,0,f,d*.43,3.72,4.1,2.85,m),t(r,0,f-3.4,0,3.34,1.65,2.8),t(o,0,f-1.95,2.45,3.03,.48,.59);for(let y of[-1,1]){if(l){t(r,y*2.45,5.35,1.26,1.58,2.66,1.49,.67,y*.4),t(e,y*3.76,2.93,.86,1.25,2.45,1.16,-.31,y*.17),t(e,y*4.13,1.01,.5,1.64,.73,1.27,0,y*.07);let p=f+1.2+y*n.swing*1.65;t(e,y*5.26,p,-.1,1.05,3.35,1.06,.22,-y*(1.08+y*n.swing*.28)),t(e,y*8.07,p+.43,.29,1.36,.96,1.02)}else if(c){let p=y<0?n.reach:.23;t(r,y*1.72,5,2.2,1.55,2.7,1.48,1.27),t(e,y*1.82,2.75,4.13,1.17,2.57,1.14,-.16),t(o,y*1.93,.92,5.06,1.25,.72,1.74),t(e,y*3.98,f-.3+p,1.15,1.02,2.45,1.05,-.62-p*.37),t(e,y*3.5,f-1.2+p*1.8,3.17,1.11,1.14,1.13),y<0&&t("#e7c8a1",-3.5,f-.18+p*1.8,3.82,.86,1.19,.86)}else{let p=u?.8:y*n.swing;t(r,y*1.65,u?3.5:6.4,p,1.55,2.3,1.49,u?.8:0),t(e,y*1.68,u?1.72:3.1,u?2.08:p,1.16,2.13,1.16),t(e,y*1.75,1.02,.88+p,1.28,.76,2.08);let g=u?f+.45:f+1.5+n.reach*2.1,x=u?2.4+n.reach*1.72:n.reach*.8,v=u?-.78-n.reach*.27:.12+n.reach*.62;t(e,y*(4.13-n.reach*.46),g,x,1.04,3.7,1.05,v,y*(u?.1:.24+n.reach*.55)),t(e,y*(4.1-n.reach*.53),g+(u?-1.65:n.reach*5.55-2.92),x+(u?2.7:n.reach*1.9),1.14,1.15,1.13)}t(e,y*3.48,h,d+.4,.84,.99,.78),t("#493a41",y*1.46,h+.38,d+3.41,.43,.47,.34),t("#c98878",y*2.22,h-.45,d+3.05,.54,.27,.26)}t(i,0,h+.64,d-.53,3.81,4.12,3.64),t(e,0,h,d+.72,3.25,3.29,2.89),t(e,0,h-.22,d+3.59,.53,.54,.59),t("#9b6b66",0,h-1.19,d+3.43,.81,.21,.25),a==="cap"||a==="hat"?(t(o,0,h+3.48,d+.3,3.56,1.47,3.26),t(a==="hat"?"#e7b46d":s,0,h+2.78,d+1.12,a==="hat"?4.56:3.19,.39,a==="hat"?4.26:2.85)):(t(i,-.99,h+2.39,d+1.53,2.47,1.23,2.37),t(a==="bun"?i:o,2,h+3.23,d-1.66,1.41,1.43,1.39))}function jf(n,t,e,i,s=!1){let r=0;for(let f of t)Zf(f,()=>r++);let o=new oi(new Ae(1,10,7),new He({color:"#fff",roughness:.76}),r);o.name=e,o.frustumCulled=!1,o.instanceMatrix.setUsage(zn),n.add(o);let a=i?new oi(new Ln(1,20).rotateX(-Math.PI/2),new Ce({color:"#634f55",opacity:.23,transparent:!0,depthWrite:!1}),t.length+Number(s)):null;a&&(a.name=i,a.frustumCulled=!1,a.instanceMatrix.setUsage(zn),n.add(a));let c=0,l=new Map;for(let f of t)Zf(f,h=>{l.has(h)||l.set(h,new qt(h)),o.setColorAt(c++,l.get(h))});let u=new Ye;return function(h,d){let m=0,y=0,p=(g,x,v,b,_)=>{a&&(u.position.set(g,x+.16,v),u.rotation.set(0,0,0),u.scale.set(b,1,_),u.updateMatrix(),a.setMatrixAt(y++,u.matrix))};for(let g of h){let{scale:x,yaw:v}=g,b=Math.cos(v),_=Math.sin(v);Zf(g,(M,R,S,T,I,P,k,z=0,O=0)=>{u.position.set(g.x+x*(R*b+T*_),g.y+S*x,g.z+x*(-R*_+T*b)),u.rotation.set(0,v,0),u.rotateX(z),u.rotateZ(O),u.scale.set(x*I,x*P,x*k),u.updateMatrix(),o.setMatrixAt(m++,u.matrix)}),p(g.x,g.ground,g.z,5.25*x,4.47*x)}d&&p(d.x,d.ground,d.z,2.82,2.52),o.instanceMatrix.needsUpdate=!0,a&&(a.instanceMatrix.needsUpdate=!0)}}function $E(n){let t=new ee;t.name="beach-day-activities";let e=n.court?XE(n.court):null,i=n.castle?qE(n.castle):null,s=e?YE():null;e&&t.add(e,s),i&&t.add(i);let r=jf(t,V0(n).actors,"beach-recreation-figures","beach-play-contact-shadows",!!s);return{group:t,render(o,a){let c=V0(n,o,a);if(r(c.actors,c.ball),!s)return;let{x:l,y:u,z:f,rotation:h}=c.ball;s.position.set(l,u,f),s.rotation.set(.25,h*.59,h)}}}function ZE(n){let t=new ee;t.name=`beach-surfboard-${n+1}`;let e=n?"#e5ac55":"#d57565",i=n?"#4d8f92":"#f3e5be";return Cu(t,({add:s})=>{let r=(o,a,c,l,u,f,h)=>s(new Ae(1,16,8).scale(l,u,f),h,o,a,c);r(0,.22,0,12.9,.78,3.61,"#e9dfc8"),r(.26,.63,0,12.68,.69,3.38,e),r(.45,1.23,0,10.08,.125,.91,i),r(-4.51,1.17,0,2.67,.14,2.47,n?"#e8dfbe":"#759f9d");for(let o=0;o<5;o++){let a=o/4;r(-9.8-a*15.1,-.39,(o%2?-1:1)*(2.6-a*1.58),2.86-a*1.1,.095,.92-a*.5,o%2?"#a4d7cc":"#e5f3de")}r(-17.4,-.44,.24,6.5,.082,.38,"#c4e5d8")}),t}function jE(n){let t=new ee;t.name="beach-morning-surfers";let{shoreline:e,focusX:i,y:s,farZ:r}=n,o=[{offset:-82,radius:37,depth:49,drift:13,period:20,phase:.55,style:0,scale:.9},{offset:75,radius:34,depth:58,drift:14,period:22,phase:2.17,style:1,scale:.91}].filter(({offset:u,radius:f,depth:h,drift:d})=>{let m=i+u,y=m-f-26,p=m+f+26;return y>=e[0].x&&p<=e.at(-1).x&&Math.min(go(e,y),go(e,p),...e.filter(g=>g.x>y&&g.x<p).map(g=>g.z))-h-d-26>r});if(!o.length)return{group:t,render(){}};let a=o.map((u,f)=>ZE(f));t.add(...a);function c(u){return o.map(({offset:f,radius:h,depth:d,drift:m,period:y,phase:p,style:g,scale:x})=>{let v=u%y/y*Ru+p,b=i+f+h*Math.sin(v),_=go(e,b)-d+m*Math.cos(v),M=Math.atan2(m*Math.sin(v),h*Math.cos(v)),R=Math.sin(v*2+p);return{kind:"surfer",style:g,scale:x,yaw:M,x:b,z:_,y:s+1.7+R*.3,swing:Math.cos(v*2+p)*.5,swell:R}})}let l=jf(t,c(0),"beach-surfers");return{group:t,render(u){let f=c(u);for(let[h,{x:d,y:m,z:y,yaw:p,swell:g}]of f.entries())a[h].position.set(d,m-1.24,y),a[h].rotation.set(0,p,0),a[h].rotateX(g*.075),a[h].rotateZ(-g*.027);l(f)}}}var za=["#e7713c","#ef9251","#e97e44","#f2a954","#f7b35d","#ffcf79","#ffde91","#ffb34e","#fbc86e","#ffd281","#ffbd72"];function KE(n,t){let e=new ee;return e.name=`beach-firepit-${t+1}`,e.position.set(n.x,n.y,n.z),Cu(e,({add:i,box:s})=>{i(new Ae(1,14,6).scale(7.15,.51,6.72),"#80605a",0,.14,0);for(let r=0;r<11;r++){let o=r*Ru/11,a=["#ab8b78","#a39288","#bb9c84"][r%3];i(new $o(1).scale(1.91,1.25,1.57).rotateY(o),a,Math.cos(o)*6.82,1.05,Math.sin(o)*6.19)}for(let[r,o,a]of[[.43,1.33,"#9b6147"],[1.42,2.1,"#79473c"],[-.89,2.58,"#a36a4a"]])i(new ze(1.15,1.38,9.1,7).rotateZ(Math.PI/2).rotateY(r),a,0,o,0);for(let[r,o]of[[-1,1.25],[1,-1.25]])i(new ze(2.2,2.61,13.9,8).rotateX(Math.PI/2),"#a67e60",r*16.5,2.48,o),i(new ze(1.61,1.77,.15,8).rotateX(Math.PI/2),"#dab18b",r*16.5,2.48,o+7.01),s(4.84,.83,5.8,t?"#c98673":"#7ea8a1",r*16.23,4.68,o)}),e}function JE(n){let t=new ee;t.name="beach-evening-bonfires";let e=[n.court??n.castle];t.add(...e.map(KE));function i(l){let{x:u,y:f,z:h}=e[0];return[{kind:"beachgoer",style:0,scale:.95,yaw:Math.PI/2,x:u-16.23,y:f,ground:f,z:h+1.25,reach:.36+Math.sin(l*1.42-1.35)*.27}]}let s=jf(t,i(0),"beach-bonfire-figures","beach-bonfire-contact-shadows"),r=new oi(new Ae(1,9,7),new Ce({toneMapped:!1}),e.length*za.length);r.name="beach-bonfire-flames",r.frustumCulled=!1,r.instanceMatrix.setUsage(zn);for(let l=0;l<r.count;l++)r.setColorAt(l,new qt(za[l%za.length]));let o=new $e({uniforms:{warmth:{value:.86},tint:{value:new qt("#ffad5f")}},vertexShader:`
      varying vec2 glowPoint;
      void main() {
        glowPoint = uv * 2.0 - 1.0;
        gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      uniform vec3 tint;
      uniform float warmth;
      varying vec2 glowPoint;
      void main() {
        float softEdge = 1.0 - smoothstep(0.02, 1.0, length(glowPoint));
        gl_FragColor = vec4(tint, softEdge * softEdge * warmth * 0.63);
        #include <colorspace_fragment>
      }`,transparent:!0,depthWrite:!1}),a=new oi(new Ln(1,28).rotateX(-Math.PI/2),o,e.length);a.name="beach-bonfire-sand-glow",a.frustumCulled=!1;let c=new Ye;for(let[l,{x:u,y:f,z:h,halfDepth:d}]of e.entries())c.position.set(u,f+.19,h),c.scale.set(23,1,Math.min(19,d+1)),c.updateMatrix(),a.setMatrixAt(l,c.matrix);return a.instanceMatrix.needsUpdate=!0,t.add(a,r),{group:t,render(l){s(i(l));for(let[u,{x:f,y:h,z:d}]of e.entries()){let m=u*1.71;for(let y=0;y<za.length;y++){let p=l*4.5+y*2.39+m,g=Math.sin(p)*.5+.5,x=y*2.39+m;if(y<7){let v=y<5?2.05:.78,b=y<5?3.18+g*1.58:2.78+g*1.09;c.position.set(f+Math.cos(x)*v,h+b+1.05,d+Math.sin(x)*v),c.rotation.set(Math.sin(x)*.2,x,Math.cos(x)*.24),c.scale.set(1.21+g*.54,b,1.18+g*.46)}else{let v=(l*(.32+y*.019)+y*.234+m)%1,b=.79*(1-v)+.13;c.position.set(f+Math.cos(x+v)*(2.45+v*6.2),h+8.8+v*15,d+Math.sin(x+v)*(1.74+v*4.4)),c.rotation.set(0,0,.2),c.scale.set(b,b*1.33,b)}c.updateMatrix(),r.setMatrixAt(u*za.length+y,c.matrix)}}r.instanceMatrix.needsUpdate=!0,o.uniforms.warmth.value=.83+Math.sin(l*5.25)*.11}}}function W0(n,t){let e=new ee;e.name="beach-play";let i=VE(n,t);if(!i)return{root:e,update(){},dispose:()=>e.removeFromParent()};let s={morning:jE(n),day:$E(i),evening:JE(i)};e.add(...Object.values(s).map(({group:h})=>h));let r,o=0,a,c,l;function u(h,{reduceMotion:d=!1,transientTelemetry:m=!1,activity:y="day",night:p=!1}={}){let g=y==="overnight"?y:p?"evening":Object.hasOwn(s,y)?y:"day";if(!m){let v=Number.isFinite(r)&&Number.isFinite(h)?se.clamp(h-r,0,.25):0;d||(o+=v),r=h}let x=d?.96:m?Number.isFinite(h)?Math.max(0,h):0:o;if(!(x===a&&d===c&&g===l)){if(a=x,c=d,g!==l){for(let[v,{group:b}]of Object.entries(s))b.visible=g===v;l=g}s[g]?.render(x,d)}}u(0);function f(){e.traverse(h=>{h.isMesh&&(h.isInstancedMesh&&h.dispose(),h.geometry.dispose(),h.material.dispose())}),e.clear(),e.removeFromParent()}return{root:e,update:u,dispose:f}}var QE=new W(0,-1,0),tT=[[0,0],[1,0],[-1,0],[0,1],[0,-1],[.707,.707],[.707,-.707],[-.707,.707],[-.707,-.707]],Kf=.01;function X0(n){return(typeof window>"u"?globalThis:window).RoomcraftModels.placementRole(n)}function Y0(n){return!n.isMesh||!n.geometry?!1:(Array.isArray(n.material)?n.material:[n.material]).some(e=>e&&e.visible!==!1&&!e.transparent)}function eT(n){n.updateWorldMatrix(!0,!0);let t=[];n.traverseVisible(a=>{if(!Y0(a))return;let{geometry:c}=a;c.boundingBox||c.computeBoundingBox(),c.boundingBox?.isEmpty()===!1&&t.push(c.boundingBox.clone().applyMatrix4(a.matrixWorld))});let e=Math.min(...t.map(a=>a.min.y));if(!Number.isFinite(e))return null;let i=new Be;for(let a of t)a.min.y<=e+Kf&&i.union(a);let s=i.getCenter(new W),r=i.getSize(new W),o=e-n.position.y;return{bottom:Math.abs(o)<1e-6?0:o,centerX:s.x-n.position.x,centerZ:s.z-n.position.z,radiusX:r.x*.45,radiusZ:r.z*.45}}function nT(n,t){let{type:e}=n;return e==="desk"||e.includes("-desk-")?[43.65,44.4]:e==="table"||e==="diningTable"?[44.65,46.45]:e.includes("dining-set")||e.includes("dining-table-")?[40.65,42.35]:/coffeeTable|sideTable|coffee-table|side-table|low-play-table/.test(e)?[32.65,33.35]:[t.anchorY-.35,t.anchorY+.35]}function iT(n,t){let[e,i]=nT(n.item,t);if(![e,i,t.root.scale.y].every(Number.isFinite))return null;let s=t.root.clone(!0);s.position.set(0,0,0),s.updateMatrixWorld(!0);let r=new Be().setFromObject(s);return r.isEmpty()?null:{placement:n,probe:s,bounds:r,rootY:t.root.position.y,low:e*s.scale.y,high:i*s.scale.y}}function q0(n,t){let e=t?.[n.item.id]?.position;return[e?.x,e?.y].every(Number.isFinite)?{x:e.x,z:e.y}:n}function $0(n,t){return n.intersectObject(t,!0).find(e=>Y0(e.object))}function Z0(n,{low:t,high:e}){return n?.face?.normal.y>=.92&&n.point.y>=t&&n.point.y<=e}function sT(n,t,e,i,s,r){let o=t.x+e.centerX-i.x,a=t.z+e.centerZ-i.z,{bounds:c,probe:l,rootY:u}=n;if(o-e.radiusX<c.min.x||o+e.radiusX>c.max.x||a-e.radiusZ<c.min.z||a+e.radiusZ>c.max.z)return null;let f=-1/0;for(let[h,d]of tT){r.set(o+h*e.radiusX,c.max.y+1,a+d*e.radiusZ),s.set(r,QE);let m=$0(s,l);if(!Z0(m,n))return null;f=Math.max(f,m.point.y)}return u+f}function j0(n,t){let e=[],i=[];for(let c of n){let l=t.get(c.item.id);if(!l||Number.isFinite(c.mountY))continue;let u=X0(c.item);if(u==="surface"){let f=iT(c,l);f&&e.push(f)}else if(u==="tabletop"){let f=eT(l.root);f&&i.push({placement:c,foot:f})}}let s=new Rs,r=new W;function o(c){let l=new Map;for(let{placement:u,foot:f}of i){let h=q0(u,c),d=null,m=u.baseY,y=1/0;for(let p of e){if(p.placement.baseY!==u.baseY)continue;let g=q0(p.placement,c),x=sT(p,h,f,g,s,r);if(x===null||x<=u.baseY||x<m-Kf)continue;let v=p.placement.item.id,b=Math.hypot(h.x-g.x,h.z-g.z);Math.abs(x-m)<Kf&&(b>y||b===y&&v>d)||(d=v,m=x,y=b)}l.set(u.item.id,{y:m-f.bottom,supportId:d})}return l}function a(c,l){if(X0({type:c})!=="tabletop")return null;let u=new Rs(void 0,void 0,l.near,l.far),f=new W,h;for(let d of e){let{x:m,z:y}=d.placement;f.copy(l.ray.origin).sub(r.set(m,d.rootY,y)),u.set(f,l.ray.direction);let p=$0(u,d.probe);p&&(!h||p.distance<h.hit.distance||p.distance===h.hit.distance&&d.placement.item.id<h.surface.placement.item.id)&&(h={hit:p,surface:d,x:m,z:y})}return!h||!Z0(h.hit,h.surface)?null:{x:h.x+h.hit.point.x,y:h.z+h.hit.point.z}}return{resolve:o,projectTabletop:a}}var{PI:Iu,sin:lr,cos:Pu}=Math,Wi=Iu*2,rT=new W(0,1,0),cr=["#86684f","#9a7c5b","#735844"],Jf=["#92745a","#ac8f69","#785c49"],Qf=["#537759","#6b8a55","#849a58","#a0ab63"],td=["#3e6251","#4d7056","#61815d","#789365"],ed=["#4a6653","#567552","#6b8659","#819863"],oT=["#517553","#64845a","#799660","#98a869"],aT=["#617d69","#72917a","#8ea17e","#a7b08a"],cT=["#62785f","#789170","#9479a5","#aa8db4","#c0a6c3"],K0=240,lT=new Set(["windy","windy-variant"]),Ha=Object.freeze({"fan-palm":Object.freeze({height:113,radius:.46}),"date-palm":Object.freeze({height:134,radius:.49}),cypress:Object.freeze({height:132,radius:.21}),"shore-pine":Object.freeze({height:109,radius:.33}),"coast-oak":Object.freeze({height:103,radius:.43}),olive:Object.freeze({height:94,radius:.46}),jacaranda:Object.freeze({height:100,radius:.43})});function J0(n){let t=n>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}function Gn(n,t,e){return[Pu(n)*t,e,lr(n)*t]}function Rn(n,[t,e,i]){return[n[0]+t,n[1]+e,n[2]+i]}function uT(n,t,e,i,s){let r=(c,l)=>n.add(c,l,t,e,i);function o(c,l,u,f,h,d=7){let m=new W(...l),y=new W(...u),p=y.clone().sub(m),g=new xn().setFromUnitVectors(rT,p.clone().normalize()),x=new ze(h,f,p.length(),d),v=m.lerp(y,.5);r(x.applyQuaternion(g).translate(v.x,v.y,v.z),c)}function a(c,l,u,f=.13,h=6){let d=new Ae(1,9,h),m=d.getAttribute("position"),y=s()*Wi;for(let p=0;p<m.count;p++){let g=m.getX(p),x=m.getY(p),v=m.getZ(p),b=1+f*(lr(g*5.8+x*3.2+v*2.1+y)*.7+Pu(v*7.8-x*2.2+y)*.3);m.setXYZ(p,g*b*u[0],x*b*u[1],v*b*u[2])}d.computeVertexNormals(),r(d.translate(...l),c)}return{draw:r,branch:o,crown:a,random:s}}function nd(n,t,e,i,s,r,o){let a=[Pu(e),lr(e)],c=[-a[1],a[0]],l=[[0,.09],[.25,.68],[.5,1],[.76,.64],[1,.018]],u=n.positions.length/3;for(let[f,[h,d]]of l.entries()){let m=s*d,y=t[0]+h*i*a[0],p=t[1]+lr(h*Iu)*r-o*h*h,g=t[2]+h*i*a[1];for(let v of[-1,0,1])n.positions.push(y+v*m*c[0],p+(v===0?m*.29:0),g+v*m*c[1]),n.uvs.push((v+1)*.5,h);if(f===0)continue;let x=u+(f-1)*3;for(let v of[0,1]){let b=x+v;n.indices.push(b,b+1,b+3,b+1,b+4,b+3)}}}function hT(n,t,e){let i=new ue;i.setAttribute("position",new $t(e.positions,3)),i.setAttribute("uv",new $t(e.uvs,2)),i.setIndex(e.indices),i.computeVertexNormals(),n(i,t)}function fT(n,t,e,i){let{draw:s,branch:r,crown:o,random:a}=n,c=t*(i?.063:.125),l=y=>Gn(e,c*y*y,t*y*(i?.85:.86)),u=y=>t*(i?.029:.024)*(1-.53*y),f=i?5:6;for(let y=0;y<f;y++){let p=y/f,g=(y+1)/f;r(Jf[0],l(p),l(g),u(p),u(g),9)}for(let y=1;y<=13;y++){let p=y*.067;r(Jf[y%3?1:2],l(p-.0045),l(p+.0045),u(p)*1.04,u(p)*1.04,9)}let h=l(1);o(Qf[0],h,[t*.045,t*.036,t*.048],.08,5);for(let y=0;y<4;y++)o(Jf[2],Rn(h,Gn(e+y*Wi/4,t*.034,-t*.017)),[t*.014,t*.019,t*.014],.06,4);let d=Qf.map(()=>({positions:[],uvs:[],indices:[]})),m=i?9:10;for(let y=0;y<m;y++){let p=e+y*Wi/m+(a()-.5)*.18,g=y%3===0,x=t*((g?.35:.29)+(a()-.5)*.07),v=t*(g?.026:.077),b=t*(g?.072:.025);if(nd(d[(y+1)%4],h,p,x,t*.012,v,b),i){let _=Rn(h,Gn(p,x*.43,v*.7));for(let M=-3;M<=3;M++)nd(d[(y+M+4)%4],_,p+M*.19,x*(.58-Math.abs(M)*.055),t*(.016-Math.abs(M)*.0018),v*.32,b*.84)}else for(let _=0;_<7;_++){let M=.19+_*.104,R=Rn(h,Gn(p,x*M,lr(M*Iu)*v-b*M*M));for(let S of[-1,1])nd(d[(y+_+(S>0?1:0))%4],R,p+S*(.83-M*.37),t*(.095-M*.048),t*(.0095-M*.003),t*.014,t*.025)}}for(let[y,p]of d.entries())hT(s,Qf[y],p)}function id(n,t,e,i,s=.84){let{branch:r}=n,o=a=>Gn(e,t*i*(a*a+.16*lr(Iu*a)),t*a*s);for(let a=0;a<4;a++){let c=a*.25,l=c+.25;r(cr[0],o(c),o(l),t*(.047-c*.032),t*(.047-l*.032),9)}for(let a=0;a<4;a++){let c=e+a*Wi/4;r(cr[2],Gn(c,t*.071,t*.012),o(.125),t*.006,t*.021,5),r(cr[1],Gn(c,t*.039,t*.025),Rn(o(.36),Gn(c,t*.031,0)),t*.004,t*.002,4)}return o}function dT(n,t,e){let{crown:i,random:s}=n,r=id(n,t,e,.018,.94);i(td[0],r(.655),[t*.12,t*.344,t*.11],.09,6);for(let[o,a,c,l,u]of[[.38,.068,.094,.16,6],[.54,.078,.082,.18,6],[.69,.06,.068,.17,5],[.82,.045,.055,.13,4],[.91,.025,.039,.085,3]])for(let f=0;f<u;f++){let h=e+f*Wi/u+o*2.5,d=Rn(r(o),Gn(h,t*a,t*((s()-.5)*.035)));i(td[(f+u)%4],d,[t*c,t*l*(.87+s()*.18),t*c*.84],.16,5)}i(td[2],Rn(r(.98),[0,t*.043,0]),[t*.038,t*.038,t*.032],.12,5)}function pT(n,t,e){let{branch:i,crown:s,random:r}=n,o=id(n,t,e,.045,.95);for(let[a,c,l]of[[.38,.195,6],[.55,.175,6],[.7,.132,5],[.83,.093,4]])for(let u=0;u<l;u++){let f=e+u*Wi/l+a*7+(r()-.5)*.22,h=o(a),d=Rn(h,Gn(f,t*c,t*(.02+r()*.028)));i(cr[1],h,d,t*.017,t*.0037,6);let m=Rn(d,[0,t*.029,0]);s(ed[u%3],m,[t*c*.46,t*.054,t*c*.45],.21,5),s(ed[(u+2)%4],Rn(m,Gn(f-.18,-t*c*.35,t*.038)),[t*c*.48,t*.057,t*c*.44],.18,5)}s(ed[3],Rn(o(1),[0,t*.012,0]),[t*.082,t*.066,t*.075],.14,5)}function mT(n,t,e,i){let{branch:s,crown:r,random:o}=n,a=i==="olive",c=i==="jacaranda",l=a?aT:c?cT:oT,u=id(n,t,e,a?.1:.034,a?.78:.84),f=a?5:6;for(let d=0;d<f;d++){let m=e+d*Wi/f+(o()-.5)*.33,y=u(.46+o()*.12),p=t*(.16+o()*.07),g=Rn(y,Gn(m,t*.12,p*.58)),x=Rn(y,Gn(m+.16,t*(.19+o()*.052),p));s(cr[1],y,g,t*.026,t*.016,7),s(cr[0],g,x,t*.0165,t*.0045,6);let v=t*(.092+o()*.03);r(l[d%2],Rn(x,[0,t*.024,0]),[v,t*(a?.064:.104),v*.87],.21,5);for(let b of[-1,1]){let _=Rn(x,Gn(m+b*1.18,t*.055,t*.05));s(cr[0],g,_,t*.012,t*.003,5);let M=t*(.063+o()*.027);r(l[c?2+(d+(b>0?1:0))%3:1+d%3],Rn(_,[0,t*.022,0]),[M,M*(a?.63:.88),M*.91],.21,5)}}let h=Rn(u(1),[0,t*.023,0]);r(l[2],h,[t*.15,t*(a?.11:.12),t*.14],.21,6),r(l.at(-1),Rn(h,Gn(e+.9,t*.062,t*.058)),[t*.093,t*.074,t*.082],.18,5)}function Q0(n,t,e){let i=Math.imul(Math.round(n*16),374761393)^Math.imul(Math.round(t*16),668265263);return Number.isFinite(e)?e:i}function ty(n,t){return Number.isFinite(t)?se.clamp(t,32,200):Ha[n].height}function gT(n,{kind:t,x:e,z:i,groundY:s,height:r,seed:o}={}){if(!Object.hasOwn(Ha,t)||![e,i,s].every(Number.isFinite))return!1;let a=ty(t,r),c=J0(Q0(e,i,o)),l=c()*Wi,u=uT(n,e,s,i,c);return t==="fan-palm"||t==="date-palm"?fT(u,a,l,t==="fan-palm"):t==="cypress"?dT(u,a,l):t==="shore-pine"?pT(u,a,l):mT(u,a,l,t),!0}function yT(n=0,t={}){let{windSpeed:e,windBearing:i,reduceMotion:s,condition:r}=t,o=Number.isFinite(e)?se.clamp(e,0,22):lT.has(r)?6:0,a=Number.isFinite(i)?(i%360+360)%360:270,c=se.degToRad(a),l=Number.isFinite(n)?Math.max(0,n)%K0:0;return{x:-lr(c),z:Pu(c),phase:Wi*l/K0,strength:s?0:o*.0048}}var xT=`
  attribute vec3 roomcraftTreeWind;
  uniform vec2 roomcraftTreeDirection;
  uniform float roomcraftTreeStrength;
  uniform float roomcraftTreePhase;

  float roomcraftTreeBend() {
    return clamp((roomcraftTreeWind.x - 0.16) / 0.84, 0.0, 1.0);
  }

  vec2 roomcraftTreeDrift() {
    float phase = roomcraftTreePhase;
    float variation = roomcraftTreeWind.z;
    float gust = 0.69 + 0.23 * sin(26.0 * phase + variation)
      + 0.12 * sin(53.0 * phase + variation * 0.63);
    vec2 crosswind = vec2(-roomcraftTreeDirection.y, roomcraftTreeDirection.x);
    float flutter = 0.13 * sin(47.0 * phase + variation * 1.46);
    return roomcraftTreeStrength * (roomcraftTreeDirection * gust + crosswind * flutter);
  }
`;function ey(n){let t=new Set,e={roomcraftTreeDirection:{value:new kt(1,0)},roomcraftTreeStrength:{value:0},roomcraftTreePhase:{value:0}};function i(o){t.has(o)||(t.add(o),o.onBeforeCompile=a=>{Object.assign(a.uniforms,e),a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
${xT}`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
          objectNormal.y -= dot(objectNormal.xz, roomcraftTreeDrift()) * roomcraftTreeBend() * (2.0 / 0.84);`).replace("#include <begin_vertex>",`#include <begin_vertex>
          float treeBend = roomcraftTreeBend();
          transformed.xz += roomcraftTreeDrift() * roomcraftTreeWind.y * treeBend * treeBend;`)},o.customProgramCacheKey=()=>"roomcraft-tree-wind-v1")}function s(o={}){let{kind:a,height:c,x:l,z:u,seed:f}=o;if(!Object.hasOwn(Ha,a))return!1;let h=ty(a,c),d=J0(Q0(l,u,f))()*Wi;return gT({add(m,y,...p){let g=m.getAttribute("position"),x=new Float32Array(g.count*3);for(let v=0;v<g.count;v++)x[v*3]=g.getY(v)/h,x[v*3+1]=h,x[v*3+2]=d;m.setAttribute("roomcraftTreeWind",new Pe(x,3)),i(n.material(y)),n.add(m,y,...p)}},o)}function r(o,a){let c=yT(o,a);e.roomcraftTreeDirection.value.set(c.x,c.z),e.roomcraftTreeStrength.value=c.strength,e.roomcraftTreePhase.value=c.phase}return{add:s,update:r}}var yo=Math.PI/180,ad=14,fy=56,bT=21,ei=-111,ls=-108,cd=14,vT=28,Ga=28,dy=7,ny={minX:0,maxX:1536,minZ:0,maxZ:1024},sd={oak:["#d8ad86","#aa775d","board"],walnut:["#a57b6e","#755952","board"],ash:["#e5caaa","#b79681","board"],ivory:["#eee0cc","#b9a494","tile"],blue:["#b7c9ca","#81999e","tile"],sage:["#b2bd9b","#7f9a82","tile"],terrazzo:["#e0cbba","#a8878b","stone"],patio:["#e5cfb2","#a98d7e","tile"]},rd={graphite:["#eee0c9","#514855","#725d6d"],plaster:["#f4e6d4","#c3a393","#b18b84"],sage:["#dce0bf","#8fa18c","#667d74"],walnut:["#d0a991","#a47d6f","#755a56"]},_T=new Set(["lightning-rainy","pouring","rainy","snowy-rainy"]),MT=new Set(["snowy","snowy-rainy"]),iy={presenceSwitch:39,wallSconce:40,wallUnit:48,thermostat:42,artwork:38,mirror:39};function Fu(n){let t=n>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}function Du(n,t,e){let i=!1;for(let s=0,r=n.points.length-1;s<n.points.length;r=s++){let o=n.points[s],a=n.points[r];o.y>e!=a.y>e&&t<(a.x-o.x)*(e-o.y)/(a.y-o.y)+o.x&&(i=!i)}return i}function py(n,t,e,i=null){let s=null;for(let r of n){let o=(t-r.x1)*r.dx+(e-r.y1)*r.dz;if(o<0||o>r.length||i!==null&&Math.abs(Math.cos(i-r.angle))<.82)continue;let a=r.x1+o*r.dx,c=r.y1+o*r.dz,l=Math.hypot(a-t,c-e);l<(s?.distance??1/0)&&(s={wall:r,t:o,centerX:a,centerZ:c,distance:l})}return s}function my(n,t,e,i){let s=n.some(o=>Du(o,e-t.dz*23,i+t.dx*23));return n.some(o=>Du(o,e+t.dz*23,i-t.dx*23))&&!s?-1:1}function ST(n,t,e){let i=(typeof window>"u"?globalThis:window).RoomcraftInventory?.byType?.[e.type],s=i?.artFamily==="paddedPanel",r=iy[e.type]??(i?.mount==="wall"?s?0:iy.wallSconce:void 0);if(r===void 0)return null;let o=py(t,e.x,e.y);if(!o||o.distance>38)return null;let{wall:a,centerX:c,centerZ:l}=o,u=(e.x-c)*-a.dz+(e.y-l)*a.dx,f=Math.abs(u)>4?Math.sign(u):my(n,a,c,l),h=(ad/2+4+(s?e.h*.3:0))*f;return{x:c-a.dz*h,z:l+a.dx*h,angle:a.angle+(f<0?Math.PI:0),mountY:Math.min(r,fy-8)}}function sy(n){if(![n?.x1,n?.y1,n?.x2,n?.y2].every(Number.isFinite))return null;let t=n.x2-n.x1,e=n.y2-n.y1,i=Math.hypot(t,e);return i<1?null:{...n,dx:t/i,dz:e/i,length:i,angle:Math.atan2(e,t),openings:[]}}function ry(n,[t,e,i,s]){return n.x1===t&&n.y1===e&&n.x2===i&&n.y2===s||n.x1===i&&n.y1===s&&n.x2===t&&n.y2===e}function wT(n,[t,e,i,s]){return t===i&&n.x1===t&&n.x2===t?Math.min(n.y1,n.y2)<=Math.min(e,s)&&Math.max(n.y1,n.y2)>=Math.max(e,s):e===s&&n.y1===e&&n.y2===e?Math.min(n.x1,n.x2)<=Math.min(t,i)&&Math.max(n.x1,n.x2)>=Math.max(t,i):!1}function oy(){return{minX:1/0,maxX:-1/0,minZ:1/0,maxZ:-1/0}}function Lu(n,t,e){n.minX=Math.min(n.minX,t),n.maxX=Math.max(n.maxX,t),n.minZ=Math.min(n.minZ,e),n.maxZ=Math.max(n.maxZ,e)}function gy(n){return Object.hasOwn(rd,n.finish)?rd[n.finish]:rd.graphite}function yy(n,t,e){let i=t-n.x,s=e-n.z,r=Math.cos(n.angle),o=Math.sin(n.angle);return[i*r+s*o,-i*o+s*r]}function ay(n,t,e){let[i,s]=yy(n,t,e);if(Math.abs(i)>n.item.w/2+5||Math.abs(s)>n.item.h/2+5)return null;let r=se.clamp(s/n.item.h+.5,0,1);return ls-ls*r}function Nu(n,t,e){return Du(n,t,e)?!0:n.points.some((i,s)=>{let r=n.points[(s+1)%n.points.length],o=r.x-i.x,a=r.y-i.y,c=o*o+a*a,l=c?se.clamp(((t-i.x)*o+(e-i.y)*a)/c,0,1):0;return Math.hypot(t-i.x-l*o,e-i.y-l*a)<=ad/2})}function ET(n,t,e){let i=(n.x1+n.x2)/2,s=(n.y1+n.y2)/2,r=t.some(f=>Nu(f,i,s)),o=t.some(f=>io(f)&&Nu(f,i,s)&&Nu(f,n.x1,n.y1)&&Nu(f,n.x2,n.y2)),a=r?0:ei,c=a;if(!o)for(let f of e){let h=ay(f,n.x1,n.y1),d=ay(f,n.x2,n.y2);if(h!==null&&d!==null){a=h,c=d;break}}let[,l,u]=gy(n);return{...n,base1:a,base2:c,color:n.finish?l:"#896e79",postColor:n.finish?u:"#9f8183",posts:Math.min(120,Math.max(1,Math.ceil(n.length/vT)))}}function ld(n){let t=n?.editableReferenceVersion>=8;if(n?.version!==2||!Array.isArray(n.rooms)||!Array.isArray(n.walls)||!Array.isArray(n.items))throw new Error("Storybook requires a Roomcraft v2 layout with rooms, walls and items.");let e=n.rooms.filter(_=>_?.points?.length>=3&&_.points.every(M=>Number.isFinite(M?.x)&&Number.isFinite(M?.y)));if(!e.length&&(!t||n.rooms.length))throw new Error("Storybook could not find a valid room polygon.");let i=t?e.filter(_=>!io(_)):e,s=n.walls.map(sy).filter(Boolean),r=s.filter(_=>_.kind!=="fence"),o=n.items.filter(_=>typeof _?.id=="string"&&typeof _.type=="string"&&[_.x,_.y,_.w,_.h].every(Number.isFinite)&&_.w>0&&_.h>0),a=oy(),c=oy(),l=(_,M)=>Lu(a,_,M);for(let _ of e)for(let M of _.points)l(M.x,M.y);for(let _ of s)l(_.x1,_.y1),l(_.x2,_.y2);for(let _ of i)for(let M of _.points)Lu(c,M.x,M.y);for(let _ of r)Lu(c,_.x1,_.y1),Lu(c,_.x2,_.y2);let u={...Number.isFinite(c.minX)?c:Number.isFinite(a.minX)?a:ny},f=new Map(r.map(_=>[_.id,_])),h=!t&&["w1","w2","w3","w4","w5","w6","w7","w8","w9","w11","w12","w13","w18"].every(_=>f.has(_))?{left:u.minX-108,deckEdge:u.minX-10,stepTop:u.minZ+14,stepBottom:u.maxZ+25,deckBottom:u.maxZ+82,northDeck:[[u.minX-10,f.get("w1").y1+57],[f.get("w2").x1,f.get("w1").y1+57],[f.get("w3").x1,f.get("w3").y1],[f.get("w3").x2,f.get("w3").y2],[u.minX-10,f.get("w4").y2]].map(([_,M])=>({x:_,y:M})),southDeck:[[u.minX-10,f.get("w6").y1],[f.get("w7").x1,f.get("w7").y1],[f.get("w7").x2,f.get("w7").y2],[f.get("w8").x1,u.maxZ+82],[u.minX-10,u.maxZ+82]].map(([_,M])=>({x:_,y:M})),recess:{x1:f.get("w12").x2,x2:f.get("w18").x1,z1:Math.min(f.get("w11").y2,f.get("w12").y2),z2:f.get("w13").y2}}:null,d=r.filter(_=>h?!(_.id==="w3"&&ry(_,[400,408,342,468]))&&!(_.id==="w7"&&ry(_,[248,590,302,651])):!0);if(h){l(h.left,h.stepTop),l(h.deckEdge,h.deckBottom);let{x1:_,x2:M,z1:R}=h.recess;if(M>_){let S=[[_,f.get("w12").y2,_,R],[_,R,M,R]];for(let[T,I]of S.entries()){if(d.some(V=>wT(V,I)))continue;let[P,k,z,O]=I,U=sy({id:`reference-recess-${T}`,x1:P,y1:k,x2:z,y2:O});U&&d.push(U)}}}let m=new Map;for(let _ of o.filter(M=>M.type==="window")){let M=py(d,_.x,_.y,(_.rotation||0)*yo);if(!M||M.distance>27)continue;let{wall:R,t:S,centerX:T,centerZ:I}=M,P=Math.max(1,S-_.w/2+1),k=Math.min(R.length-1,S+_.w/2-1);if(k-P<14)continue;R.openings.push({start:P,end:k});let z=my(i,R,T,I),O=R.angle+(z<0?Math.PI:0),U=(P+k)/2;m.set(_.id,{x:R.x1+U*R.dx,z:R.y1+U*R.dz,angle:O,window:{..._,w:k-P+2,rotation:O/yo}})}let y=o.filter(_=>_.type==="garageDoor"),p=o.map(_=>{let M=_.type==="cameraThumbnail"&&y.some(U=>kT(_,U))?ei:vy(_.type),R=vf(_),S=m.get(_.id)??ST(i,d,_);if(R){let U=52;for(let V of m.values()){let j=Math.hypot(V.x-_.x,V.z-_.y);j<U&&(S=V,U=j)}}let T=S?.x??_.x,I=S?.z??_.y,P=S?.angle??(Number.isFinite(_.rotation)?_.rotation*yo:0),k=_.type==="stairs"?1536:300,z=Math.min(k,(Math.abs(Math.cos(P))*_.w+Math.abs(Math.sin(P))*_.h)/2),O=Math.min(k,(Math.abs(Math.sin(P))*_.w+Math.abs(Math.cos(P))*_.h)/2);return l(T-z,I-O),l(T+z,I+O),{item:_,x:T,z:I,baseY:M,angle:P,window:S?.window,mountY:S?.mountY,isBlind:R}});for(let _ of d)_.openings.sort((M,R)=>M.start-R.start||M.end-R.end);let g=p.filter(({item:_})=>_.type==="stairs").map(_=>{let{item:M,x:R,z:S,angle:T}=_,I=Number.isInteger(M.steps)&&M.steps>=2&&M.steps<=40?M.steps:cd,P=Math.min(46,Math.max(12,M.w*.47)),k=-M.h/2-P;for(let z of[-M.w/2,M.w/2])l(R+z*Math.cos(T)-k*Math.sin(T),S+z*Math.sin(T)+k*Math.cos(T));return{..._,steps:I,apronDepth:P}}),x=s.filter(_=>_.kind==="fence").map(_=>ET(_,e,g)),v=_f(e,h,t),b=hg(d.map(_=>({..._,palette:gy(_)})),ad,fy,bT);return Number.isFinite(a.minX)||Object.assign(a,ny),{rooms:e,walls:d,fences:x,stairs:g,placements:p,bounds:a,houseBounds:u,reference:h,floorStructure:v,wallStructure:b,editableStructure:t}}function cy(n,t){for(let[e,[i,s]]of t.slice(0,-1).entries())e===0?n.moveTo(i,-s):n.lineTo(i,-s);return n.closePath(),n}function ud([n,...t]){let e=cy(new ln,n);return e.holes=t.map(i=>cy(new $s,i)),e}function TT(n,t,e){let i=n.createElement("canvas");i.width=i.height=256;let s=i.getContext("2d");if(!s)return null;let[r,o,a]=t,c=Fu(e);if(s.fillStyle=r,s.fillRect(0,0,256,256),s.strokeStyle=o,s.fillStyle=o,a==="board")for(let u=0;u<8;u++){let f=u*32;s.globalAlpha=.04+c()*.14,s.fillRect(0,f,256,32),s.globalAlpha=.48,s.fillRect(0,f,256,1.2);let h=30+u*47%181;s.fillRect(h,f,1,32),s.globalAlpha=.15;for(let d=0;d<15;d++){let m=c()*256,y=f+3+c()*27,p=12+c()*46;s.beginPath(),s.moveTo(m,y),s.quadraticCurveTo(m+p/2,y+c()*2-1,m+p,y),s.stroke()}}else if(a==="tile")for(let u=0;u<8;u++)for(let f=0;f<8;f++)s.globalAlpha=c()*.14,s.fillRect(f*32,u*32,32,32),s.globalAlpha=.35,s.strokeRect(f*32+.5,u*32+.5,31,31);else for(let u=0;u<160;u++)s.globalAlpha=.12+c()*.24,s.fillRect(c()*256,c()*256,1+c()*4,1+c()*3);let l=new vs(i);return l.colorSpace=Ke,l.wrapS=l.wrapT=Ws,l}function od(n){let t=new Map,e=new Ee,i=new xn,s=new W,r=new W(0,1,0),o=new W(1,1,1),a=new Map,c=d=>(a.has(d)||a.set(d,new Wr({color:d})),a.get(d));function l(d,m,y,p,g,x=0){i.setFromAxisAngle(r,x),e.compose(s.set(y,p,g),i,o),d.applyMatrix4(e);let v=c(m);t.has(v)||t.set(v,[]),t.get(v).push(d)}function u(d,m,y,p,g,x,v,b=0){d>0&&m>0&&y>0&&l(new Te(d,m,y),p,g,x,v,b)}function f(d,m,y,p,g,x,v){let b=new Ae(1,9,6);b.scale(d,m,y),l(b,p,g,x,v)}function h(){for(let[d,m]of t){let y=$n(m);if(!y){for(let p of m)n.add(new ae(p,d));continue}n.add(new ae(y,d));for(let p of m)p.dispose()}t.clear()}return{add:l,ball:f,box:u,material:c,finish:h}}function AT(n,t,e,i){let s=new Map;for(let{surface:r,polygons:o}of e.floorStructure.regions){let a=Object.hasOwn(sd,r)?r:"oak";if(!s.has(a)){let c=sd[a],l=TT(i,c,141+Object.keys(sd).indexOf(a)*977);s.set(a,new Wr({color:l?"#fffdf8":c[0],map:l}))}for(let c of o){let l=new Di(ud(c));l.rotateX(-Math.PI/2);let u=l.getAttribute("position"),f=l.getAttribute("uv");for(let d=0;d<f.count;d++)f.setXY(d,u.getX(d)/248,u.getZ(d)/248);let h=new ae(l,s.get(a));h.receiveShadow=!0,n.add(h)}}for(let r of e.floorStructure.footprint)ly(t,r,-22,0,"#a67e76",!0);for(let r of e.floorStructure.foundation)ly(t,r,ei-1,-22,"#a18e84",!0)}function RT(n){if(!n.index){let t=n.getAttribute("position").count,e=new Uint32Array(t);for(let i=0;i<t;i++)e[i]=i;n.setIndex(new Pe(e,1))}return n}function ly(n,t,e,i,s,r=!1){let o=new xi(ud(t),{depth:i-e,bevelEnabled:!1});if(r){let a=o.getAttribute("position"),c=[];for(let l=0;l<a.count;l+=3)[l,l+1,l+2].some(u=>a.getZ(u)<i-e-.001)&&c.push(l,l+1,l+2);o.setIndex(c)}o.rotateX(-Math.PI/2),n.add(RT(o),s,0,e,0)}function CT(n,t){let e=[],i=[],s=[];for(let[[o,a],[c,l]]of n){let u=e.length/3,f=Math.hypot(c-o,l-a);e.push(o,0,a,o,t,a,c,t,l,c,0,l),i.push(u,u+1,u+2,u,u+2,u+3),s.push(0,0,0,t,f,t,f,0)}let r=new ue;return r.setAttribute("position",new $t(e,3)),r.setAttribute("uv",new $t(s,2)),r.setIndex(i),r.computeVertexNormals(),r}function uy(n,t){let e=new Di(ud(n));if(e.rotateX(-Math.PI/2),t){let i=e.index.array;for(let s=0;s<i.length;s+=3)[i[s+1],i[s+2]]=[i[s+2],i[s+1]];e.computeVertexNormals()}return e}function IT(n,t){for(let{faces:e,bottom:i,top:s,surface:r}of t.wallStructure){for(let o of e.top)n.add(uy(o,!1),r,0,s,0);for(let o of e.bottom)n.add(uy(o,!0),r,0,i,0);e.sides.length&&n.add(CT(e.sides,s-i),r,0,i,0)}}function PT(n,t){let e=new Set;for(let i of t){let{x1:s,y1:r,x2:o,y2:a,base1:c,base2:l,length:u,angle:f,posts:h,color:d,postColor:m}=i,y=l-c,p=new Te(Math.hypot(u,y),5,dy);p.rotateZ(Math.atan2(y,u)),n.add(p,d,(s+o)/2,(c+l)/2+Ga,(r+a)/2,-f);for(let g=0;g<=h;g++){let x=g/h,v=se.lerp(s,o,x),b=se.lerp(r,a,x),_=se.lerp(c,l,x),M=[v,_,b].map(R=>Math.round(R*1e3)).join(",");e.has(M)||(e.add(M),n.box(5,Ga,5,m,v,_+Ga/2,b,-f))}}}function xy(n,t){let e=n/t,i=-ls/t,s=Math.min(5.5,e*.25),r=Math.min(1.8,s*.38);return{run:e,rise:i,noseDepth:s,lipDepth:r,height:a=>a===t-1?0:ls+(a+1)*i}}function by(n,t,e,i,s=0,r=0){let{run:o,noseDepth:a,lipDepth:c,height:l}=xy(e,i);for(let u=0;u<i;u++){let f=r-e/2+o*u,h=l(u),d=h-3;n.box(t,d-ei,o,"#a98075",s,(ei+d)/2,f+o/2),n.box(t,3,o-a,u%2?"#e4c5a8":"#d9b79a",s,h-1.5,f+(o+a)/2),n.box(t,3.35,a-c,"#896254",s,d+3.35/2,f+(a+c)/2),n.box(t,3.4,c,"#f5d8b5",s,d+3.4/2,f+c/2)}}function LT({item:n,steps:t,apronDepth:e}){let i=new ee,s=od(i);by(s,n.w,n.h,t);let r=ls-ei;return s.box(n.w,r,e,"#c8b79e",0,ei+r/2,-n.h/2-e/2),s.finish(),{root:i,anchorY:ls/2}}function NT(n,t){if(!t.reference)return;let{left:e,deckEdge:i,stepTop:s,stepBottom:r,northDeck:o}=t.reference,a=i-e,c=(i+e)/2,l=cd,u=r-s,f=u/l,h=ls,d=-h/l;by(n,a,u,l,c,(s+r)/2);for(let b=0;b<l;b++){let _=s+f*(b+.5),M=h+(b+1)*d;n.box(5,24,5,"#9f8183",e+4,M+12,_)}let m=f*(l-1),y=d*(l-1),p=new Te(7,5,Math.hypot(m,y)+5);p.rotateX(-Math.atan2(y,m)),n.add(p,"#896e79",e+4,24-y/2,(s+r)/2),n.box(a+2,3,80,"#cbbda6",c,h-1.5,s-40);let[g,x]=o,v=Math.max(2,Math.ceil((x.x-g.x)/28));n.box(x.x-g.x,5,7,"#896e79",(x.x+g.x)/2,28,g.y);for(let b=0;b<=v;b++)n.box(5,28,5,"#9f8183",g.x+(x.x-g.x)*b/v,14,g.y)}function DT(n){let t=n.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d");if(!e)return null;let i=Fu(71293);e.fillStyle="#b1c3a0",e.fillRect(0,0,512,512);for(let r=0;r<92;r++){let o=i()*512,a=i()*512,c=20+i()*56;for(let l of[-512,0,512])for(let u of[-512,0,512]){let f=e.createRadialGradient(o+l,a+u,0,o+l,a+u,c);f.addColorStop(0,r%3?"#dbe0a730":"#466f5630"),f.addColorStop(1,"#b1c3a000"),e.fillStyle=f,e.fillRect(o+l-c,a+u-c,c*2,c*2)}}for(let r=0;r<4200;r++){let o=i()*512,a=i()*512;e.fillStyle=r%2?"#e3e6b33e":"#5e7b5d30",e.fillRect(o,a,1.4+i()*3,1.2+i()*2.8)}let s=new vs(t);return s.wrapS=s.wrapT=Ws,s.repeat.set(15,10),s.colorSpace=Ke,s.anisotropy=4,s}function FT(n,t,e,i){let{minX:s,maxX:r,minZ:o,maxZ:a}=t.houseBounds,c=r-s,l=a-o,u=Fu(150741);if(!t.editableStructure){let m=Math.min(90,c*.18),y=t.reference?t.reference.left+m/2:s+m/2;n.box(m,4,115,"#c7baa4",y,-109,o-88);for(let p=0;p<5;p++)n.box(m*.85,1.8,13,"#dbceba",y,-106,o-137+p*20)}let f=[[.06,-.075],[.32,-.09],[.63,-.11],[.92,-.075],[1.045,.32],[1.035,.74],[.84,1.085],[.51,1.08],[.23,1.075],[-.135,.55]];for(let[m,y]of f){let p=s+m*c,g=o+y*l,x=21+u()*24;n.ball(x*.94,9,x*.67,"#6d886a",p,-104,g),n.ball(x*.82,x*.57,x*.69,"#819b76",p+3,-98,g);for(let v=0;v<8;v++){let b=v*2.39996,_=(.2+u()*.5)*x,M=x*(.28+u()*.2),R=["#94ad7f","#a6ba88","#8da878","#bad09c"][v%4];n.ball(M*1.15,M*.8,M,R,p+Math.cos(b)*_,-93+12*u(),g+Math.sin(b)*_*.75)}for(let v=0;v<5;v++){let b=v%2?"#e6c4b1":"#fae6a4",_=p+(u()-.5)*x*1.14,M=g+x*(.62+u()*.43);n.ball(2.3,4.6,2.3,"#819765",_,-106,M),n.ball(3.9,1.8,3.3,b,_,-101.5,M),n.ball(1.2,.9,1.2,"#cb9c57",_,-100.3,M)}}let h=[["cypress",.1,-.1,126],["shore-pine",.81,-.145,119],["fan-palm",.96,-.1,112],["olive",-.075,.42,97],["cypress",1.055,.64,136],["coast-oak",.21,1.14,112],["jacaranda",.82,1.16,118]],d=t.placements.filter(({item:m})=>m.type==="garageDoor"||m.type==="stairs");for(let[m,[y,p,g,x]]of h.entries()){let v=x*Ha[y].radius+7,b=s+p*c,_=o+g*l,M=_<o?-1:1,R=b<(s+r)/2?-1:1;for(let[S,T]of[[0,0],[R*(v+20),0],[0,M*(v+20)]]){let I=b+S,P=_+T;if(!(P-v<=e.nearZ||I+v>s&&I-v<r&&P+v>o&&P-v<a||d.some(z=>{let O=I-z.x,U=P-z.z,V=O*Math.cos(z.angle)+U*Math.sin(z.angle),j=-O*Math.sin(z.angle)+U*Math.cos(z.angle);return Math.abs(V)<z.item.w/2+v&&Math.abs(j)<z.item.h*.6+v}))){i.add({kind:y,x:I,z:P,groundY:ei,height:x,seed:7229+m*101});break}}}for(let[m,y,p,g]of[[5633,"date-palm",.065,21],[2081,"fan-palm",.93,20],[7313,"date-palm",.985,32]])i.add({kind:y,x:s+p*c,z:e.farZ-g,groundY:ei+.68,seed:m})}function UT(n,t,e){let i=Fu(2912),s=t.bounds,r=[],o=t.reference?.recess,a=(v,b)=>!(o&&v>=o.x1&&v<=o.x2&&b>=o.z1&&b<=o.z2)&&!t.rooms.some(_=>(!t.editableStructure||!io(_))&&Du(_,v,b)),c=Math.min(s.minZ,e)-70,l=s.maxZ+70-c;for(let v=0;v<210;v++){let b=s.minX-70+(s.maxX-s.minX+140)*i(),_=c+l*i(),M=i()*180,R=8+i()*8,S=112+i()*34;a(b,_)&&r.push({x:b,z:_,phase:M,length:R,speed:S})}let u=new Float32Array(r.length*6),f=new Float32Array(r.length*3),h=new Float32Array(r.length*3),d=new ue,m=new ue,y=new ue;d.setAttribute("position",new Pe(u,3).setUsage(zn)),m.setAttribute("position",new Pe(f,3).setUsage(zn)),y.setAttribute("position",new Pe(h,3).setUsage(zn));let p=new Vo(d,new Br({color:"#d3e4ec",transparent:!0,opacity:.36,depthWrite:!1})),g=new zr(m,new qs({color:"#fff6eb",size:3.2,transparent:!0,opacity:.8})),x=new zr(y,new qs({color:"#c9edf6",size:2.6,transparent:!0,opacity:.83}));return p.frustumCulled=g.frustumCulled=x.frustumCulled=!1,n.add(p,g,x),(v,{condition:b,windSpeed:_,windBearing:M})=>{p.visible=_T.has(b);let R=b==="pouring"||b==="lightning-rainy";if(p.material.opacity=R?.5:.34,g.visible=MT.has(b),x.visible=b==="hail",p.visible||g.visible||x.visible){let S=Number.isFinite(M)?M*yo:285*yo,T=se.clamp(_??6,0,22)*.028;for(let[I,P]of r.entries()){let k=65-(P.phase+v*P.speed*(R?1.3:1))%170,z=65-(P.phase+v*20)%170,O=65-(P.phase+v*P.speed*1.55)%170,U=I*6;u.set([P.x,k,P.z,P.x+P.length*T*Math.sin(S),k+P.length,P.z-P.length*T*Math.cos(S)],U),f.set([P.x+Math.sin(v+I)*6,z,P.z],I*3),h.set([P.x,O,P.z],I*3)}d.attributes.position.needsUpdate=p.visible,m.attributes.position.needsUpdate=g.visible,y.attributes.position.needsUpdate=x.visible}}}function vy(n){return n==="garageDoor"?ei:0}function kT(n,t){let e=n.x-t.x,i=n.y-t.y,s=(t.rotation??0)*yo,r=Math.cos(s),o=Math.sin(s);return Jm(t,e*r+i*o,-e*o+i*r)}function OT(n,t,e,i){let s=new W,r=7,o=l=>{let u={left:1/0,top:1/0,right:-1/0,bottom:-1/0};for(let f of l){s.set(...f).project(t);let h=(s.x+1)*e/2,d=(1-s.y)*i/2;u.left=Math.min(u.left,h-r),u.right=Math.max(u.right,h+r),u.top=Math.min(u.top,d-r),u.bottom=Math.max(u.bottom,d+r)}return u},a=n.fences.map(({x1:l,y1:u,x2:f,y2:h,base1:d,base2:m})=>o([[l,d,u],[l,d+Ga,u],[f,m,h],[f,m+Ga,h]])),c=n.stairs.map(({x:l,z:u,angle:f,item:h,apronDepth:d})=>{let m=Math.cos(f),y=Math.sin(f),p=[];for(let g of[-h.w/2,h.w/2])for(let[x,v]of[[-h.h/2-d,ls],[h.h/2,0]])p.push([l+g*m-x*y,v,u+g*y+x*m]);return o(p)});return[...a,...c]}function BT(n){let t=[...n.stairs];if(n.reference){let{left:h,deckEdge:d,stepTop:m,stepBottom:y}=n.reference;t.push({x:(h+d)/2,z:(m+y)/2,angle:0,item:{w:d-h,h:y-m},steps:cd,apronDepth:80,apronOverhang:1})}let e=h=>Math.round(h*1e5)/1e5,i=t.flatMap(h=>{let{x:d,z:m,angle:y,item:p,apronDepth:g,apronOverhang:x=0}=h,v=(_,M)=>[e(d+_*Math.cos(y)-M*Math.sin(y)),e(m+_*Math.sin(y)+M*Math.cos(y))],b=(_,M,R)=>[[v(-_,M),v(_,M),v(_,R),v(-_,R)]];return[b(p.w/2,-p.h/2,p.h/2),b(p.w/2+x,-p.h/2-g,-p.h/2)]}),s=n.fences.map(({x1:h,y1:d,x2:m,y2:y,dx:p,dz:g})=>{let x=dy/2;return[[[h-g*x,d+p*x],[m-g*x,y+p*x],[m+g*x,y-p*x],[h+g*x,d-p*x]].map(b=>b.map(e))]}),r=or(n.floorStructure.footprint),o=i.length?hy.default.union(n.floorStructure.footprint,...i):n.floorStructure.footprint,a=or(pu(o,n.wallStructure,s)),c=t.map(h=>({stair:h,...xy(h.item.h,h.steps)})),l={height:0,rise:0};function u(h,d){if(r.contains(h,d))return l;let m;for(let{stair:y,run:p,rise:g,height:x}of c){let{item:v,steps:b,apronDepth:_,apronOverhang:M=0}=y,[R,S]=yy(y,h,d),T=S+v.h/2,I=T<0;if(Math.abs(R)>v.w/2+(I?M:0)||T<-_||T>v.h)continue;let P=Math.min(b-1,Math.floor(T/p)),k=I?ls:x(P);(!m||k>m.height)&&(m={height:k,rise:g})}return m}function f(h,d,m,y,p){if(!a.supportsRoute(h,d,m,y,p))return!1;if(!c.length)return!0;let g=Math.max(1,Math.min(8,...c.map(b=>b.run/2))),x=Math.min(256,Math.ceil(Math.hypot(m-h,y-d)/g)),v=u(h,d);for(let b=1;b<=x;b++){let _=b/x,M=u(se.lerp(h,m,_),se.lerp(d,y,_));if(!v||!M||Math.abs(v.height-M.height)>Math.max(v.rise,M.rise)+.01)return!1;v=M}return!0}return{...a,supportsRoute:f,floorAt:(h,d)=>a.contains(h,d)?u(h,d)?.height??null:null}}function zT(n){let{floorStructure:t,wallStructure:e}=n,i=n.editableStructure?t.foundation:_f(n.rooms.filter(s=>!io(s)),n.reference,!0).foundation;return{home:or(pu(i,e)),vacuum:or(pu(t.footprint,e)),presence:BT(n)}}function _y(n,t){let e=ld(t),i=new Yl({canvas:n,antialias:!0,alpha:!1,powerPreference:"low-power"});try{return i.resetState(),HT(n,t,e,i)}catch(s){throw My(i),s}}function My(n){try{n.getContext().isContextLost()||n.resetState()}finally{n.dispose()}}function HT(n,t,e,i){let s=t.sceneSettings,r={},o=new Ki;o.background=new qt("#d7dfcd");let a=new Oo(o.background),c=new Es(-800,800,450,-450,1,ou),{minX:l,maxX:u,minZ:f,maxZ:h}=e.bounds,d=new He({color:"#e8e8d2",map:DT(n.ownerDocument),roughness:.95}),m;d.onBeforeCompile=({uniforms:Et})=>{m=Et.dfgLUT};let y=new ae(new Nn(6200,4200),d);y.rotation.x=-Math.PI/2,y.position.set((l+u)/2,ei,(f+h)/2),o.add(y);let p=od(o),g=od(o),x=ey(g),v=d0(e),b=p0(p,v,ei,y.geometry.parameters.width,y.position.x),_,{water:M}=m0(p,v,ei,e.houseBounds,y.geometry.parameters.width,y.position.x),R=M.shoreline.reduce((Et,Dt)=>Math.abs(Dt.x-M.focusX)<Math.abs(Et.x-M.focusX)?Dt:Et),S={road:{x:b.centerX,y:b.surfaceY+8,z:(b.lanes[0]+b.lanes[1])/2},coast:{x:M.focusX+16,y:M.y,z:R.z-36},beach:{x:M.focusX,y:M.y+8,z:R.z+37}};FT(p,e,v,x),NT(p,e),AT(o,p,e,n.ownerDocument),IT(p,e),PT(p,e.fences),p.finish();let T=o.children.length;g.finish();let I=o.children.slice(T),P=o.children.filter(Et=>Et.isMesh),k=pg(i,o,e.bounds),z=dg();k.markStructure();let O=new Nn(16e4,16e4),{position:U,uv:V}=O.attributes;for(let Et=0;Et<V.count;Et++)V.setXY(Et,U.getX(Et)/y.geometry.parameters.width+.5,U.getY(Et)/y.geometry.parameters.height+.5);let j=new ae(O,d);j.name="Horizon foreground",j.rotation.copy(y.rotation),j.position.copy(y.position),j.position.y-=.12,j.receiveShadow=!0,j.visible=!1,o.add(j);let dt=h0(M),ot=U0(b),G=G0(M),q=W0(M,v);o.add(dt.mesh,ot.root,G.root,q.root);let xt=UT(o,e,v.sceneryMinZ),gt=e.floorStructure.footprint,{home:pt,vacuum:at,presence:St}=zT(e),Z=St.floorAt,rt=new Ki,wt=new Ki,Lt;function Nt(Et,Dt){if(Lt&&(Lt.removeFromParent(),Lt.geometry.dispose(),Lt.material.map.dispose(),Lt.material.dispose(),Lt=void 0),!Et)return!0;let Gt=Et.naturalWidth,ie=Et.naturalHeight;if(!(Gt>0&&ie>0))return!1;let he=[[0,0],[Gt,0],[Gt,ie],[0,ie]].map(([Mn,Vn])=>as(Dt,{x:Mn,y:Vn}));if(he.some(Mn=>!Mn||Math.abs(Mn.x)>1e4||Math.abs(Mn.y)>1e4))return!1;let fe=new ue;fe.setAttribute("position",new $t(he.flatMap(({x:Mn,y:Vn})=>[Mn,.82,Vn]),3)),fe.setAttribute("uv",new $t([0,1,1,1,1,0,0,0],2)),fe.setIndex([0,2,1,0,3,2]);let we=new wn(Et);we.colorSpace=Ke,we.needsUpdate=!0;let Xe=new Ce({map:we,opacity:.48,transparent:!0,side:Qe,depthWrite:!1,toneMapped:!1});return Lt=new ae(fe,Xe),Lt.name="vacuum-lidar-overlay",o.add(Lt),!0}let H=r0(),bt=c0(gt);o.add(bt.root);let K=new js("#fff5e1","#c9bfd7",1.8),et=new Ts("#fff1d8",1.65);et.position.set(-4,9,6),rt.add(K,et);let $=new Map,ht=new Map,yt=new Set(e.placements.filter(({item:Et})=>Et.visualKind==="none").map(({item:Et})=>Et.id)),It=new Map,Pt=new Map(e.stairs.map(Et=>[Et.item.id,Et]));for(let Et of e.placements){let{item:Dt,x:Gt,z:ie,baseY:he,angle:fe,window:we,mountY:Xe,isBlind:Mn}=Et,Vn=Dt.type==="window"&&we?we:Dt,ni=Pt.get(Dt.id),ge=ni?LT(ni):Qm(Vn,{window:Mn?we:void 0,mountY:Xe})??Ym(Vn,{mountY:Xe});if(ge){let N=Mg(Dt,ge.root);if(ge.root.position.set(Gt,he+N,ie),ge.root.rotation.y=-fe,ge.dock&&(ge.dock.position.set(Gt,he,ie),ge.dock.rotation.y=-fe,o.add(ge.dock)),ge.floorRadius){let st=ge.floorRadius,_t=(vt,Wt)=>at.clearance(vt,Wt)>=st,ut=(vt,Wt,Yt,Vt)=>at.supportsRoute(vt,Wt,Yt,Vt,st);ge.dockFits=_t(Gt,ie),ge.root.name=Dt.id,ge.liveMotion=zf({allowsPoint:_t,allowsRoute:ut,duration:.42}),ge.demoMotion=zf({allowsPoint:_t,allowsRoute:ut,duration:0})}o.add(ge.root),ht.set(Dt.id,ge),Dt.type==="garageDoor"&&It.set(ge.root,Dt.id),k.register(Dt,ge)}$.set(Dt.id,{x:Gt,z:ie,baseY:he,rootY:ge?.root.position.y,object:ge})}let Ft=e.placements.filter(({item:Et,baseY:Dt})=>Dt===0&&ht.has(Et.id)),Ut=Of(Ft),Y=Ut,te=j0(e.placements,ht),Ht=te.resolve(),B=Ht,A={supportsRoute:St.supportsRoute,floorClearance:St.clearance,geometryRevision:()=>Y,allowsBodyPoint:(Et,Dt,Gt,ie)=>!Y.blocksPoint(Et,Dt,Gt,ie),allowsBodyRoute:(Et,Dt,Gt,ie,he,fe)=>!Y.blocksRoute(Et,Dt,Gt,ie,he,fe)},it=Df(rt,Z,{occlusionScene:wt,...A,seats:Cg(e.placements,ht,pt.clearance),interactions:Fg(e.placements,ht,Ht)}),mt,Mt=it,X,w=!1,E={...e.bounds,sceneryMinZ:v.sceneryMinZ,waterfront:{minX:M.focusX-475,maxX:M.focusX+605,minZ:R.z-352,maxZ:R.z+88}};for(let Et of e.placements){let Dt=ht.get(Et.item.id);if(!Dt)continue;let Gt=Ht.get(Et.item.id);if(Gt&&(Dt.root.position.y=Gt.y),Dt.root.scale.y!==1||Gt?.supportId){let{max:ie}=new Be().setFromObject(Dt.root);Number.isFinite(ie.y)&&(E.maxY=Math.max(E.maxY??92,ie.y))}}let C=new W,D=!1,F=0,Q=0,J=1,lt=ss(),ft,Ct=new Rs,L=new Kn(new W(0,1,0),0),tt=new W,nt=Object.freeze({state:"unavailable",attributes:Object.freeze({}),presence:"off",active:!1});function At(){_g(c,E,F,Q,lt,ft);let Et=xg(lt.tilt);if(o.fog=Et?a:null,j.visible=!!Et,Et){let Dt=c.far-ou;a.near=Et.near+Dt,a.far=Et.far+Dt}}function Rt(){let Et=n.ownerDocument.defaultView?.devicePixelRatio||1,Dt=Math.min(Et,1.5,Math.sqrt(27e5/(F*Q))),Gt=Math.max(1/Math.min(F,Q),Dt*J);i.setDrawingBufferSize(F,Q,Gt)}function Tt(Et,Dt){D||Et<1||Dt<1||Et===F&&Dt===Q||(F=Et,Q=Dt,Rt(),At())}function Ot({renderScale:Et,shadowQuality:Dt}={}){if(D)return;k.setShadowQuality(Dt);let Gt=Number.isFinite(Et)?se.clamp(Et,.5,1):1;Gt!==J&&(J=Gt,F>0&&Q>0&&Rt())}function zt(Et,Dt){return lt=ss(Et),ft=Dt,!D&&F>0&&Q>0&&At(),le()}function le(){return{...lt}}function re(Et){if(typeof Et=="string"){if(Object.hasOwn(S,Et))return{...S[Et]};let Dt=$.get(Et);if(!Dt)return null;let{x:Gt,z:ie,baseY:he,object:fe}=Dt;return fe?{x:Gt,y:fe.root.position.y+(fe.anchorY??0)*fe.root.scale.y,z:ie}:{x:Gt,y:he+6,z:ie}}return[Et?.x,Et?.y].every(Number.isFinite)?{x:Et.x,y:(Z(Et.x,Et.y)??0)+22,z:Et.y}:null}function Se(Et,Dt){return D||!Number.isFinite(Et)||!Number.isFinite(Dt)||F<=0||Q<=0?!1:(Ct.setFromCamera(new kt(Et/F*2-1,1-Dt/Q*2),c),!0)}function Ie(Et,Dt,Gt,{preferTabletop:ie=!1}={}){if(!Se(Et,Dt))return null;if(ie){let he=te.projectTabletop(Gt,Ct);if(he)return he}return L.constant=-vy(Gt),Ct.ray.intersectPlane(L,tt)?{x:tt.x,y:tt.z}:null}function an(Et,Dt){if(!It.size||!Se(Et,Dt))return null;let Gt=[];for(let he of It.keys())he.traverseVisible(fe=>{fe.isMesh&&Gt.push(fe)});let ie=Ct.intersectObjects(Gt,!1)[0];if(!ie||Ct.intersectObjects(P,!1).some(he=>he.distance<ie.distance-.01))return null;for(let he=ie.object;he;he=he.parent)if(It.has(he))return It.get(he);return null}function Ze(Et=!1){bt.root.visible=!Et&&lt.preset!=="waterfront",Lt&&(Lt.visible=!Et&&lt.preset!=="waterfront"),i.render(o,c);let Dt=(Et||r.showAvatars!==!1)&&lt.preset!=="waterfront"&&Mt?.hasVisibleTracks,Gt=!Et&&lt.preset!=="waterfront"&&H.scene.children.length>0;if(!(!Dt&&!Gt)){i.autoClear=!1;try{Dt&&(Et||(Mt.orientOcclusionCues(c),i.render(wt,c)),i.render(rt,c)),Gt&&(i.clearDepth(),i.render(H.scene,c))}finally{i.autoClear=!0}}}function pn(Et={}){r=Et,s={...t.sceneSettings,...Et.features},bt.setOpacity(Et.heatMapOpacity)}function rn(Et,Dt,Gt=!1){let ie=Dt.beachActivity??(Dt.night?"overnight":"day"),he={reduceMotion:Dt.reduceMotion===!0,night:Dt.night===!0,condition:Dt.condition,transientTelemetry:Gt,activity:ie};ot.root.visible=ie!=="overnight"&&(Gt||Mi(s,"sidewalk")),G.root.visible=Gt||Mi(s,"boats"),q.root.visible=Gt||Mi(s,"beachPlay"),ot.root.visible&&ot.update(Et,he),G.root.visible&&G.update(Et,he),q.root.visible&&q.update(Et,he);let fe=Gt||Mi(s,"trees");for(let we of I)we.visible=fe;fe&&x.update(Et,Dt),dt.update(Et,Gt||Mi(s,"reflections")?Dt:{...Dt,reflections:!1})}function mn(Et=0,Dt={},Gt={},{animateTelemetry:ie=!0,showTelemetryPosition:he=!0,draftPositions:fe,transientTelemetry:we=!1}={}){if(D||F<1||Q<1)return;we||(Gt=jl(Gt,s));let Xe=Gt.reduceMotion===!0,Mn=!Xe&&Number.isFinite(Et)?Et:0,Vn=is(Gt);Gt={...Gt,solar:we?Vn:z(Vn,Mn,Xe)};let ni=ie?Mn:0,ge=we||Mi(s,"traffic");ge&&!_&&Gt.traffic&&(_=P0(b),o.add(_.root)),_&&(_.root.visible=ge,ge&&_.update(Et,Gt.traffic,{reduceMotion:Xe,night:Gt.night===!0,transientTelemetry:we,headlightBrightness:we?1:r.headlightBrightness})),xt(ni,we||Mi(s,"precipitation")?Gt:{}),rn(Et,Gt,we);let N=X!==fe;N&&(X=fe,B=fe?te.resolve(fe):Ht,Y=fe?Of(Ft.map(_t=>{let ut=fe[_t.item.id]?.position;return ut?{..._t,x:ut.x,z:ut.y}:_t})):Ut),w=!1;for(let[_t,ut]of ht){let vt=yt.has(_t),Wt=vt?nt:Dt[_t]??nt,{visible:Yt,position:Vt}=ut.root,Zt=fe?.[_t]?.position,Jt=!1;if(ut.floorRadius&&!vt&&he&&!Zt){let Me=we?ut.demoMotion:ut.liveMotion;!we&&ut.demoMotion.hasPosition&&ut.demoMotion.clear();let je=Me.observe(Wt.position,Et,{observation:Wt.positionObservedAt,reduceMotion:Xe});!je&&(Wt.state==="docked"||Wt.wrongMap)&&Me.clear();let De=Me.sample(Et,Xe);Zt=De,Jt=je&&De?.current===!0,ut.root.visible=!!(De||!Me.hasPosition&&ut.dockFits)}else ut.floorRadius&&(ut.root.visible=!0);let ye=$.get(_t),be=Zt?.x??ye.x,Kt=Zt?.y??ye.z;w||=!!(ut.floorRadius&&(Yt!==ut.root.visible||Vt.x!==be||Vt.z!==Kt)),ut.root.position.x=be,ut.root.position.y=B.get(_t)?.y??ye.rootY,ut.root.position.z=Kt,ut.animate?.(Wt,ut.ambientMotion?Mn:ni,Jt,we)}k.update(Gt,Dt,d,N),o.fog&&a.color.copy(o.background);let st=we?mt:it;Mt!==st&&(Mt?.setVisible(!1),we||mt?.setTracks([],0),Mt=st,Mt?.setVisible(!0)),Mt?.render(Et,Xe,!fe&&(we||r.seatedPoses!==!1)),Ze(we)}function cn(Et,Dt,Gt={}){D||(Gt.transientTelemetry?(!mt&&Et?.length&&(mt=Df(rt,Z,A),mt.setVisible(!1)),mt?.setTracks(Et,Dt,Gt)):it.setTracks(Et,Dt,Gt))}function _n(Et){if(lt.preset==="waterfront")return null;let Dt=$.get(Et);if(!Dt||F<1||Q<1)return null;let{x:Gt,z:ie,baseY:he,object:fe}=Dt;if(fe){if(!fe.root.visible)return null;C.set(fe.anchorOffset?.x||0,fe.anchorY||0,fe.anchorOffset?.z||0),fe.root.localToWorld(C)}else C.set(Gt,he+6,ie);return C.project(c),{x:(C.x+1)/2,y:(1-C.y)/2}}function Bt(){if(D)return;D=!0,Nt(null),it.dispose(),mt?.dispose(),H.dispose(),bt.dispose(),_?.dispose(),ot.dispose(),G.dispose(),q.dispose();let Et=new Set,Dt=new Set,Gt=new Set;o.traverse(ie=>{ie.geometry&&Et.add(ie.geometry);for(let he of Array.isArray(ie.material)?ie.material:[ie.material])if(he){Dt.add(he);for(let fe of Object.values(he))fe?.isTexture&&Gt.add(fe)}});for(let ie of Gt)ie.dispose();for(let ie of Et)ie.dispose();for(let ie of Dt)ie.dispose();k.dispose(),m?.value?.dispose(),My(i)}return{resize:Tt,render:mn,anchor:_n,setView:zt,getView:le,getDemoFocus:re,projectToPlan:Ie,pickGarage:an,exteriorClearance:()=>OT(e,c,F,Q),dispose:Bt,hasAmbientMotion:!0,setPeople:cn,setDisplaySettings:pn,setGraphicsSettings:Ot,setVacuumMapOverlay:Nt,setDetectionZones:H.setZones,setHeatMap:bt.setHistory,get trackedControlChanged(){return w},get hasPendingReacquisition(){return[...ht.values()].some(Et=>Et.liveMotion?.pendingReacquisition)},canPlacePerson:(Et,Dt)=>Number.isFinite(Z(Et,Dt)),personFloorAt:Z,nearestPersonPoint:(Et,Dt,Gt=128)=>Kg(Et,Dt,Gt,(ie,he)=>Number.isFinite(Z(ie,he))&&St.clearance(ie,he)>=fu&&A.allowsBodyPoint(ie,he,fu)),get hasPeopleMotion(){return Mt?.hasMotion??!1}}}var Sy=.35,Uu=7.5,GT=8;function wy(n,{getView:t,onChange:e,canStart:i=()=>!0}){let s=new Map,r=()=>{let p=t();return p?.preset==="free"?p:null},o=()=>{let[p,g]=s.values();return Math.hypot(p.x-g.x,p.y-g.y)};function a(p,g){let x=ss({...p,...g});(x.azimuth!==p.azimuth||x.tilt!==p.tilt||x.zoom!==p.zoom)&&e(x)}function c(p){n.hasPointerCapture(p)&&n.releasePointerCapture(p)}function l(){for(let p of[...s.keys()])s.delete(p),c(p)}function u(p){if(!r()||p.defaultPrevented||p.button!==0||!i(p))return;let g=p.pointerType==="touch";if(!(s.size>=2||s.size&&(!g||!s.values().next().value.touch))){try{n.setPointerCapture(p.pointerId)}catch{return}s.size||n.focus({preventScroll:!0}),s.set(p.pointerId,{x:p.clientX,y:p.clientY,touch:g}),p.preventDefault()}}function f(p){let g=s.get(p.pointerId);if(!g)return;let x=r();if(!x){l();return}let v=s.size===2,b=v?o():0,_={x:p.clientX,y:p.clientY,touch:g.touch};if(s.set(p.pointerId,_),p.preventDefault(),v){let M=o();Math.min(b,M)>=GT&&a(x,{zoom:x.zoom*M/b});return}a(x,{azimuth:x.azimuth-(_.x-g.x)*Sy,tilt:x.tilt+(_.y-g.y)*Sy})}function h(p){s.delete(p.pointerId)&&c(p.pointerId)}function d(p){let g=r();if(!g||!Number.isFinite(p.deltaY)||!p.deltaY)return;let x=p.deltaMode===1?16:p.deltaMode===2?n.clientHeight:1,v=Math.max(-350,Math.min(350,p.deltaY*x));p.preventDefault(),p.stopPropagation(),a(g,{zoom:g.zoom*Math.exp(-v*.002)})}function m(p){let g=r();if(!g||p.altKey||p.ctrlKey||p.metaKey||p.defaultPrevented)return;let x;switch(p.key){case"ArrowLeft":x={azimuth:g.azimuth-Uu};break;case"ArrowRight":x={azimuth:g.azimuth+Uu};break;case"ArrowUp":x={tilt:g.tilt-Uu};break;case"ArrowDown":x={tilt:g.tilt+Uu};break;case"+":case"=":x={zoom:g.zoom*1.1};break;case"-":x={zoom:g.zoom/1.1};break;default:return}p.preventDefault(),p.stopPropagation(),a(g,x)}let y=[["pointerdown",u],["pointermove",f],["pointerup",h],["pointercancel",h],["lostpointercapture",h],["wheel",d,{passive:!1}],["keydown",m]];for(let[p,g,x]of y)n.addEventListener(p,g,x);return{cancel:l,dispose(){l();for(let[p,g,x]of y)n.removeEventListener(p,g,x)}}}var C5=1200*1e3,I5=new Map([["s",1/60],["min",1],["h",60]]);var VT="roomcraft.traffic-vehicle-style.v1";function Ey(n){try{let t=n.localStorage.getItem(VT);return Su.some(({id:e})=>e===t)?t:""}catch{return""}}(n=>{"use strict";let t=new Set(["hs","xy","rgb","rgbw","rgbww"]),e=new Set(["brightness","color_temp","white",...t]),i=r=>typeof r=="number"&&Number.isFinite(r);function s(r={}){r??={};let o=Array.isArray(r.supported_color_modes)?r.supported_color_modes:[],a=o.some(v=>e.has(v))||i(r.brightness),c=o.some(v=>t.has(v)),l=o.includes("white")&&c,u=Number.isInteger(r.supported_features)?r.supported_features:0,f=!!(u&32),h=!!(u&8),d=!!(u&4),m=Array.isArray(r.effect_list)?[...new Set(r.effect_list.filter(v=>typeof v=="string"&&v.trim()))]:[],y=r.min_color_temp_kelvin,p=r.max_color_temp_kelvin,g=o.includes("color_temp")?i(y)&&i(p)&&y>0&&p>y?{min:Math.round(y),max:Math.round(p)}:{min:2e3,max:6535}:null,x=["On/off"];return a&&x.push("Brightness"),g&&x.push("White temperature"),c&&x.push("Color"),l&&x.push("White mode"),(d||m.length)&&x.push("Effects"),f&&x.push("Fade duration"),h&&x.push("Flash"),{brightness:a,temperature:g,color:c,white:l,effects:m,transition:f,flash:h,labels:x}}n.RoomcraftLightCapabilities=Object.freeze({describe:s})})(typeof window>"u"?globalThis:window);var B5=1200*1e3,z5=new Map([["m/s",1],["km/h",1/3.6],["mph",.44704],["kn",.514444],["ft/s",.3048]]);function Ty(n,t,e){let i=[],s=[[0,0],[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1]],r=[...n].sort((a,c)=>(a.priority??0)-(c.priority??0)),o=(a,c,l)=>Math.min(Math.max(a,c),l);for(let a of r){let c=Math.min(a.w,t),l=Math.min(a.h,e),u=a.keepClear??[],f=u.length>0,h=f?5:3,d,m,y=1/0;for(let g=0;g<=h&&(f||!d);g++)for(let[x,v]of g===0?s.slice(0,1):s.slice(1)){let b=o(a.x+x*g*34,c/2,t-c/2),_=o(a.y+v*g*34,l/2,e-l/2);if(i.some(S=>Math.abs(b-S.x)<(c+S.w)/2+2&&Math.abs(_-S.y)<(l+S.h)/2+2))continue;if(g<=3&&!d&&(d={...a,x:b,y:_,w:c,h:l}),!f)break;if(u.some(S=>b+c/2>S.left&&b-c/2<S.right&&_+l/2>S.top&&_-l/2<S.bottom))continue;let R=Math.hypot(b-a.x,_-a.y);R<y&&(m={...a,x:b,y:_,w:c,h:l},y=R)}let p=m??d;p&&i.push(p)}return i}var Iy=bo(to(),1),Ay="roomcraft-presence-v1",us=4500,pd=/^sensor\.[a-z0-9_]+$/,Py=/^binary_sensor\.[a-z0-9_]+$/,WT=4,fd=1536,dd=1024,XT=[[[0,0],[fd,0],[fd,dd],[0,dd],[0,0]]],Ry=[[0,0,0],[25,-135,100],[50,-170,140],[100,-210,210],[150,-240,270],[200,-260,290],[250,-290,310],[300,-320,340],[350,-320,360],[400,-300,340],[450,-290,310],[500,-250,280],[550,-190,200],[580,-100,120],[600,0,0]],qT=new Map([["inovelli-vzm32-sn",{rangeMeters:6,ring:[...Ry.map(([n,t])=>[t,n]),...Ry.slice(1,-1).reverse().map(([n,,t])=>[t,n])]}]]);function md(n,t){return n>=0&&n<=fd&&t>=0&&t<=dd}function Va([n,t,e,i,s,r],o,a){return{x:n*o+t*a+e,y:i*o+s*a+r}}function ku(n){return Array.isArray(n)&&n.length===6&&n.every(t=>Number.isFinite(t)&&Math.abs(t)<=1e4)&&Math.abs(n[0]*n[4]-n[1]*n[3])>1e-5}function Ly(n){if(!Array.isArray(n)||n.length!==4||!n.every(r=>Number.isFinite(r)&&Math.abs(r)<=600))return null;let[t,e,i,s]=n;return t>=e||i>=s?null:[[t,i],[e,i],[e,s],[t,s]]}function Ny(n){let t=[],e=0;for(let i of n){let s=i.presenceTrackTransform;if(i.type!=="presenceSwitch"||!ku(s))continue;let[,r,o,,a,c]=s,l=qT.get(i.presenceTrackProfile),u=Math.hypot(r,a),f=md(o,c)?{origin:{x:o,y:c},forward:{x:r/u,y:a/u}}:{},h=t.length;for(let[d,m]of[["configured",Ly(i.presenceTrackZone)],["nominal",l?.ring]]){if(!m)continue;let y=m.map(([p,g])=>{let x=Va(s,p,g);return[x.x,x.y]});for(let[p]of Iy.default.intersection([y],XT))t.push({id:i.id,kind:d,points:p.slice(0,-1).map(([g,x])=>({x:g,y:x})),...f,...d==="nominal"?{rangeMeters:l.rangeMeters}:{}})}if(t.length>h&&++e===12)break}return t}function Cy(n){let t=new Set,e=[];for(let i of Array.isArray(n)?n.slice(0,WT):[]){if(!Number.isInteger(i?.id)||i.id<-128||i.id>255||t.has(i.id)||![i.x,i.y].every(r=>Number.isFinite(r)&&Math.abs(r)<=800))continue;t.add(i.id);let s={id:i.id,x:i.x,y:i.y};Number.isFinite(i.z)&&Math.abs(i.z)<=800&&(s.z=i.z),Number.isFinite(i.speed)&&Math.abs(i.speed)<=32768&&(s.speed=i.speed),e.push(s)}return e}function Dy(n={},t=[]){let e={};for(let i of new Set(t)){let s=n[i];if(Py.test(i)&&["on","off","unknown","unavailable"].includes(s?.state)){e[i]={state:s.state};continue}let r=s?.attributes;!pd.test(i)||r?.tracking_schema!==Ay||(e[i]={state:s.state,attributes:{tracking_schema:Ay,observed_at:Number.isFinite(r.observed_at)?r.observed_at:null,zones_observed_at:Number.isFinite(r.zones_observed_at)?r.zones_observed_at:null,zones:Array.isArray(r.zones)?r.zones.slice(0,4).map(o=>typeof o=="boolean"?o:null):[],tracks:Cy(r.tracks),...Number.isFinite(r.last_observed_at)?{last_observed_at:r.last_observed_at,last_tracks:Cy(r.last_tracks)}:{}}})}return e}function gd(n,t,e=Date.now()){let i=[],s=new Set;for(let r of n){let o=r.presenceTrackEntityId,a=r.presenceTrackTransform;if(r.type!=="presenceSwitch"||!pd.test(o||"")||s.has(o)||!ku(a))continue;s.add(o);let c=Dy(t,[o])[o];if(!c||["unknown","unavailable"].includes(c.state))continue;let{observed_at:l,tracks:u}=c.attributes;if(!(!Number.isFinite(l)||l>e+1e3||e-l>=us))for(let f of u){let{x:h,y:d}=Va(a,f.x,f.y);md(h,d)&&i.push({id:o+":"+f.id,x:h,y:d,expiresAt:l+us})}}return i}var yd=n=>n?.type==="presenceSwitch"?pd.test(n.presenceTrackEntityId??"")?n.presenceTrackEntityId:Py.test(n.presenceEntityId??"")?n.presenceEntityId:null:null;function hd(n,t){let e=n.presenceTrackTransform,i=[{x:n.x,y:n.y}];if(ku(e)){let s=Ly(n.presenceTrackZone),r=Va(e,0,100);if(i.unshift(r),s){let[o,,a]=s;i.unshift(Va(e,(o[0]+a[0])/2,(o[1]+a[1])/2))}}for(let s of i){if(!Number.isFinite(s.x)||!Number.isFinite(s.y))continue;let r=t(s.x,s.y,128);if(r)return r}return null}function Fy(){let n=new Map;return{read(t,e,i,{contains:s,nearest:r}){let o=new Map;for(let c of t){let l=yd(c);l&&!o.has(l)&&o.set(l,c)}for(let c of n.keys())o.has(c)||n.delete(c);let a=[];for(let[c,l]of o){let u=e[l.presenceEntityId]?.state,f=Dy(e,[l.presenceTrackEntityId])[l.presenceTrackEntityId],h=f?.attributes,d=h?.zones_observed_at,y=f?.state!=="unavailable"&&Number.isFinite(d)&&d<=i+1e3&&i-d<us&&h.zones.some(T=>T===!0);if(u==="off"){n.delete(c);continue}let p=u==="on"||y,g=h?.observed_at,x=!["0","unknown","unavailable",void 0].includes(f?.state)&&Number.isFinite(g)&&g<=i+1e3&&i-g<us&&h.tracks.length>0,v=u==="on"?void 0:Math.max(y?d+us:0,x?g+us:0);if(!p&&f?.state==="0"){n.delete(c);continue}let b=l.presenceTrackTransform,_=JSON.stringify([l.presenceEntityId,b]),M=n.get(c);M?.key!==_&&(n.delete(c),M=void 0);let R=gd([l],e,i).filter(T=>s(T.x,T.y)),S=R[0];if(!S&&p&&f?.state!=="unavailable"&&ku(b)){let T=h?.last_observed_at??h?.observed_at,I=h?.last_tracks??h?.tracks??[];if(Number.isFinite(T)&&T<=i+1e3&&(!M||T>M.observedAt))for(let P of I){let k=Va(b,P.x,P.y);if(!(!md(k.x,k.y)||!s(k.x,k.y))){S={id:c+":"+P.id,...k,expiresAt:T+us};break}}}if(S&&(!M||S.expiresAt-us>=M.observedAt)&&(M={key:_,observedAt:S.expiresAt-us,point:S},n.set(c,M)),R.length)for(let T of R)a.push({...T,keepVisible:!0,fallback:r(T.x,T.y,52)??hd(l,r)});else if(p||x&&M){let T=M?.point;if(T&&s(T.x,T.y))a.push({id:T.id,x:T.x,y:T.y,quality:"last-known",keepVisible:!0,expiresAt:v,fallback:r(T.x,T.y,52)??hd(l,r)});else{let I=hd(l,r);I&&a.push({id:c+":area",...I,quality:"area",keepVisible:!0,expiresAt:v})}}}return a},clear(){n.clear()}}}var xd=new Map([["sunny",["Sunny","clear","cirrus"]],["clear-night",["Clear night","clear","cirrus"]],["partlycloudy",["Partly cloudy","partial","cumulus"]],["cloudy",["Cloudy","clouds","stratus"]],["rainy",["Rain","rain","nimbostratus"]],["pouring",["Heavy rain","rain","nimbostratus"]],["lightning",["Thunderstorms","thunder","cumulonimbus"]],["lightning-rainy",["Thunderstorms","storm","cumulonimbus"]],["snowy",["Snow","snow","stratus"]],["snowy-rainy",["Sleet","sleet","nimbostratus"]],["hail",["Hail","sleet","cumulonimbus"]],["fog",["Fog","fog","fog"]],["windy",["Windy","wind","cirrus"]],["windy-variant",["Windy and cloudy","wind-clouds","altocumulus"]],["exceptional",["Unusual weather","unknown","none"]]]),ky=new Set(["new_moon","waxing_crescent","first_quarter","waxing_gibbous","full_moon","waning_gibbous","last_quarter","waning_crescent"]),Oy=Object.freeze([...xd].map(([n,[t]])=>Object.freeze({id:n,label:n==="lightning-rainy"?"Thunderstorms with rain":t}))),By=Object.freeze([...ky]),Uy=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];function zy(n={},t=!1){let{condition:e,daylightKnown:i,night:s,moonPhase:r,temperature:o,unit:a,sunElevation:c,sunRising:l,sunAzimuth:u,moonAzimuth:f,moonElevation:h,windSpeed:d,windBearing:m,cloudCoverage:y}=n;if(t)return{label:"Weather offline",sky:"unknown",effect:"unknown",cloud:"none",moon:"",reading:"",windReading:""};let[p,g,x]=xd.get(e)||["Weather unavailable","unknown","none"],v=i?s:e==="clear-night",b=i?!s:e==="sunny",_=Number.isFinite(d)&&d>=0?d:void 0,M=Number.isFinite(m)?(m%360+360)%360:void 0,R=M===void 0?"":Uy[Math.round(M/22.5)%Uy.length],S=_===void 0?"":_===0?"Calm wind":`Wind ${R?`from ${R} at `:""}${Math.round(_*10)/10} m/s`;return{label:p,sky:v?"night":b?"day":"unknown",effect:g,cloud:x,moon:v&&ky.has(r)?r:"",reading:xd.has(e)&&Number.isFinite(o)?`${Math.round(o)}${a||"\xB0"}`:"",windSpeed:_,windBearing:M,windReading:S,cloudCoverage:Number.isFinite(y)&&y>=0&&y<=100?y:void 0,sunElevation:c,sunRising:l,sunAzimuth:u,moonAzimuth:f,moonElevation:h}}var YT=[["dipper",[[7,9],[27,15],[46,22],[63,28],[93,23],[89,42],[65,43]],"M7 9L27 15 46 22 63 28 93 23 89 42 65 43 63 28"],["cassiopeia",[[8,35],[28,17],[47,31],[67,10],[91,24]],"M8 35L28 17 47 31 67 10 91 24"],["orion",[[30,6],[68,8],[44,25],[50,28],[56,31],[29,46],[67,47]],"M30 6L44 25 50 28 56 31 68 8M44 25L29 46M56 31L67 47"]],$T=YT.map(([n,t,e])=>`
  <svg class="coastal-constellation coastal-${n}" viewBox="0 0 100 52" focusable="false">
    <path d="${e}"/>
    ${t.map(([i,s],r)=>`<circle cx="${i}" cy="${s}" r="${r%3===0?2.15:1.55}"/>`).join("")}
  </svg>`).join(""),ZT=["#c2d7ed","#e4edff","#fff0d2"];function Hy(n,t){let e=t?11939:30391,i=()=>(e=e*48271%2147483647)/2147483647;return Array.from({length:n},(s,r)=>{let o=1+(r+i())*98/n,a=5+i()*79,c=t?.85+r%3*.18:.48+r%4*.12;return`radial-gradient(circle at ${o.toFixed(1)}% ${a.toFixed(1)}%,${ZT[r%3]} 0 ${c.toFixed(2)}px,transparent ${(c+.6).toFixed(2)}px)`}).join(",")}var Xy=`
  <div class="coastal-sky" data-sky="unknown" data-effect="unknown" data-cloud="none" data-moon="" aria-hidden="true">
    <span class="coastal-twilight"></span>
    <div class="coastal-stars">
      <span class="coastal-star-field"></span>
      <span class="coastal-star-sparkle"></span>
      ${$T}
      <span class="coastal-meteor coastal-meteor-first"></span>
      <span class="coastal-meteor coastal-meteor-second"></span>
    </div>
    <span class="coastal-orb coastal-moon"></span>
    <span class="coastal-cloud coastal-cloud-high"></span>
    <span class="coastal-cloud coastal-cloud-left"></span>
    <span class="coastal-cloud coastal-cloud-right"></span>
    <span class="coastal-orb coastal-sun"></span>
    <span class="coastal-cloud coastal-cloud-bank"></span>
    <span class="coastal-horizon-haze"></span>
    <span class="coastal-lightning"></span>
  </div>`,xo=(n,t,e)=>Math.max(t,Math.min(e,n)),Gy=n=>Number.isFinite(n)&&Math.abs(n)<=90,bd=n=>Number.isFinite(n)&&n>=0&&n<=360,vd=75,Vy=n=>76-58*xo(n/vd,0,1),qy=n=>50+38*n,jT=n=>qy(Math.sin(n*Math.PI/180)),KT=new Map([["waxing_crescent",[1,.48]],["first_quarter",[1,0]],["waxing_gibbous",[1,-.48]],["waning_crescent",[-1,.48]],["last_quarter",[-1,0]],["waning_gibbous",[-1,-.48]]]);function JT(n,t){let e=[];for(let[i,s,r]of[[1,0,1],[t,16,-1]])for(let o=0;o<=16;o++){let a=(s+o*r)*Math.PI/16,c=50+n*50*Math.sin(a)*i,l=50-50*Math.cos(a);e.push(`${c.toFixed(2)}% ${l.toFixed(2)}%`)}return`polygon(${e.join(",")})`}var QT=new Map([...KT].map(([n,t])=>[n,JT(...t)])),t3=new Map([["clear",1],["wind",.9],["partial",.66],["wind-clouds",.43]]);function e3(n,t,e,i,s,r,o){let c=(n==="night"&&!t?t3.get(e)??0:0)*xo(1-(i??0)/80,0,1);if(o||c<.55||e!=="clear"&&e!=="wind")return{starOpacity:c,meteor:"off",meteorProgress:0,meteorOpacity:0};if(s===void 0&&r===void 0)return{starOpacity:c,meteor:"live",meteorProgress:0,meteorOpacity:0};let l=r===void 0?(s%58-12)/1.4:(r-.36)/.29,u=xo(l,0,1),f=Math.min(1,u*5,(1-u)*2)*.9;return{starOpacity:c,meteor:"sample",meteorProgress:u,meteorOpacity:f}}function n3(n={},t=!1){let e=zy(n,t),{sky:i,effect:s,cloud:r,moon:o,sunElevation:a,sunAzimuth:c,moonElevation:l,moonAzimuth:u,windSpeed:f,windBearing:h,cloudCoverage:d}=e,m=is(t?{}:n),{phase:y}=m,{skyTimeSeconds:p,skyProgress:g,reduceMotion:x=!1}=t?{}:n,v=Gy(a),b=y==="sunrise"||y==="sunset",_=Number.isFinite(p)&&!x?Math.max(0,p):void 0,M=Number.isFinite(g)&&!x?xo(g,0,1):void 0,R=M===void 0?void 0:Math.sin(M*Math.PI)*vd,S=M??(_===void 0?void 0:.5-.5*Math.cos(_*Math.PI/480)),T=v?m.elevation:R??m.elevation,I=bd(c)||M===void 0?qy(m.east):83-66*M,P=bd(u)?jT(u):S===void 0?55:18+64*S,k=S===void 0?38:Math.sin(S*Math.PI)*vd,z=Vy(Gy(l)?l:k),O=!t&&!x&&!bd(u)&&M===void 0&&_===void 0?"ambient":"fixed",U=h===void 0?void 0:h*Math.PI/180,V=U===void 0?9:-Math.sin(U)*12,j=U===void 0?-2:Math.cos(U)*4,dt=f===void 0?s==="wind"||s==="wind-clouds"?2.5:1:f===0?0:xo(f*.25,.32,4.8),ot=d===void 0?1:xo(d/52,0,1);return{sky:i,effect:s,cloud:r,moon:o,light:b?"twilight":"regular",clock:_,reduceMotion:x,moonMotion:O,sunX:I,sunY:Vy(T),moonX:P,moonY:z,solarPhase:i==="unknown"?"unknown":y,solarDaylight:m.daylight,solarDisc:m.disc,solarCloud:m.cloud,twilightGlow:m.twilight*(1-.42*m.cloud),horizonHaze:m.twilight*(.34+.2*m.cloud),moonOutline:QT.get(o)||"circle(50%)",windX:V,windY:j,cloudSpeed:dt,cloudOpacity:ot,...e3(i,b,s,d,_,M,x)}}function Yy(n,t,e=!1){let i=n3(t,e),{sky:s,effect:r,cloud:o,moon:a,light:c,moonMotion:l,clock:u,reduceMotion:f,cloudSpeed:h,cloudOpacity:d,solarPhase:m,solarDaylight:y,solarDisc:p,solarCloud:g,twilightGlow:x,horizonHaze:v,starOpacity:b,meteor:_,meteorProgress:M,meteorOpacity:R}=i,S={sky:s,effect:r,cloud:o,moon:a,light:c,moonMotion:l,skyClock:u===void 0?"live":"sample",windCalm:String(h===0),skyReduced:String(f),solarPhase:m,stars:b>0?"visible":"hidden",meteor:_};for(let[I,P]of Object.entries(S))n.dataset[I]!==P&&(n.dataset[I]=P);let T={"--coastal-sun-x":`${i.sunX.toFixed(2)}%`,"--coastal-sun-y":`${i.sunY.toFixed(2)}%`,"--coastal-solar-x":`${i.sunX.toFixed(2)}%`,"--coastal-daylight":`${(y*100).toFixed(2)}%`,"--coastal-solar-disc":p.toFixed(3),"--coastal-solar-cloud":g.toFixed(3),"--coastal-twilight-glow":x.toFixed(3),"--coastal-twilight-color":`${(x*100).toFixed(2)}%`,"--coastal-horizon-haze":v.toFixed(3),"--coastal-moon-x":`${i.moonX.toFixed(2)}%`,"--coastal-moon-y":`${i.moonY.toFixed(2)}%`,"--coastal-moon-outline":i.moonOutline,"--coastal-wind-x":`${i.windX.toFixed(3)}vw`,"--coastal-wind-y":`${i.windY.toFixed(3)}px`,"--coastal-wind-speed":String(h||1),"--coastal-cloud-cover":String(d),"--coastal-clock":`${(u??0).toFixed(3)}s`,"--coastal-star-opacity":b.toFixed(3),"--coastal-meteor-progress":M.toFixed(3),"--coastal-meteor-opacity":R.toFixed(3)};for(let[I,P]of Object.entries(T))n.style.getPropertyValue(I)!==P&&n.style.setProperty(I,P)}var Wy=`{
  0% {translate:calc(-1 * var(--coastal-wind-x,9vw)) calc(-1 * var(--coastal-wind-y,-2px));opacity:0}
  21%,79% {opacity:calc(var(--cloud-alpha) * var(--coastal-cloud-cover,1))}
  100% {translate:var(--coastal-wind-x,9vw) var(--coastal-wind-y,-2px);opacity:0}
}`,$y=`
  .coastal-sky {
    position:relative; isolation:isolate; overflow:hidden; pointer-events:none;
    box-sizing:border-box; height:clamp(54px,7dvh,72px); width:100%;
    border-bottom:3px solid var(--coastal-seam);
    background:linear-gradient(180deg,#7c99ab,#abc0c8 62%,#d2dad7);
    --coastal-day-top:#5b9bc2; --coastal-day-mid:#a0c8dc; --coastal-day-low:#d1e1e6;
    --coastal-night-top:#142843; --coastal-night-mid:#293e5b; --coastal-night-low:#526980;
    --coastal-seam:#426b80; --coastal-cloud-top:#f9f6ea; --coastal-cloud-bottom:#c5d1d6;
    --coastal-orb-size:clamp(27px,4.1dvh,42px);
  }
  .coastal-sky:is([data-sky=day],[data-sky=night]) {
    background:linear-gradient(180deg,
      color-mix(in srgb,var(--coastal-day-top) var(--coastal-daylight,100%),var(--coastal-night-top)),
      color-mix(in srgb,var(--coastal-day-mid) var(--coastal-daylight,100%),var(--coastal-night-mid)) 62%,
      color-mix(in srgb,var(--coastal-day-low) var(--coastal-daylight,100%),var(--coastal-night-low)));
  }
  .coastal-sky[hidden] {display:none}
  .coastal-sky[data-sky=night] {
    --coastal-seam:#839aab; --coastal-cloud-top:#a2b2cb; --coastal-cloud-bottom:#4a5f7e;
  }
  .coastal-sky:is([data-effect=clouds],[data-effect=wind-clouds],[data-effect=fog],[data-effect=snow]) {
    --coastal-day-top:#779caf; --coastal-day-mid:#a3bac4; --coastal-day-low:#c9d5d3;
  }
  .coastal-sky[data-sky=day]:is([data-effect=clouds],[data-effect=wind-clouds],[data-effect=fog],[data-effect=snow]) {
    --coastal-seam:#526e7b; --coastal-cloud-top:#eef1ee; --coastal-cloud-bottom:#adbfca;
  }
  .coastal-sky:is([data-effect=rain],[data-effect=thunder],[data-effect=storm],[data-effect=sleet]) {
    --coastal-day-top:#506b85; --coastal-day-mid:#8299ab; --coastal-day-low:#a2b4bb;
    --coastal-night-top:#233550; --coastal-night-mid:#3b4c65; --coastal-night-low:#617184;
  }
  .coastal-sky[data-sky=day]:is([data-effect=rain],[data-effect=thunder],[data-effect=storm],[data-effect=sleet]) {
    --coastal-seam:#3d596d; --coastal-cloud-top:#c8d3dc; --coastal-cloud-bottom:#8a9eb0;
  }
  .coastal-sky[data-sky=night]:is([data-effect=rain],[data-effect=thunder],[data-effect=storm],[data-effect=sleet]) {
    --coastal-seam:#9aabb5; --coastal-cloud-top:#97a9bb; --coastal-cloud-bottom:#546880;
  }
  .coastal-sky[data-solar-phase=sunrise] {
    --coastal-twilight-top:#515d83; --coastal-twilight-mid:#a2a7bd; --coastal-twilight-low:#e4b6a8;
    --coastal-horizon-gold:#ffe3ad; --coastal-horizon-peach:#f7b08aa9; --coastal-twilight-seam:#b78580;
    --coastal-haze-tint:#ffe6d0; --coastal-cloud-warm-top:#fff0d8; --coastal-cloud-warm-low:#b497ae;
    --coastal-warm-sun-core:#fff7d5; --coastal-warm-sun-rim:#fbc082;
  }
  .coastal-sky[data-solar-phase=sunset] {
    --coastal-twilight-top:#524163; --coastal-twilight-mid:#ad768b; --coastal-twilight-low:#e4a085;
    --coastal-horizon-gold:#ffd088; --coastal-horizon-peach:#ff9c69ac; --coastal-twilight-seam:#ac6b70;
    --coastal-haze-tint:#ffd0ae; --coastal-cloud-warm-top:#ffdbb8; --coastal-cloud-warm-low:#9d718a;
    --coastal-warm-sun-core:#fff1b8; --coastal-warm-sun-rim:#f99565;
  }
  .coastal-sky[data-light=twilight] {
    border-bottom-color:color-mix(in srgb,
      var(--coastal-twilight-seam) var(--coastal-twilight-color,0%),var(--coastal-seam));
  }
  .coastal-twilight, .coastal-horizon-haze {position:absolute;inset:0}
  .coastal-twilight {
    opacity:var(--coastal-twilight-glow,0);
    background:
      radial-gradient(ellipse 35% 130% at var(--coastal-solar-x,50%) 111%,
        var(--coastal-horizon-gold) 0, var(--coastal-horizon-peach) 32%, transparent 93%),
      linear-gradient(180deg,var(--coastal-twilight-top),var(--coastal-twilight-mid) 58%,var(--coastal-twilight-low));
    transition:opacity 1.4s ease;
  }
  .coastal-horizon-haze {
    inset:45% -2% 0; opacity:var(--coastal-horizon-haze,0);
    background:radial-gradient(ellipse 51% 124% at var(--coastal-solar-x,50%) 88%,
      var(--coastal-haze-tint),transparent 94%);
    mask-image:
      radial-gradient(ellipse 48% 11% at 54% 76%,#000 40%,transparent 100%),
      radial-gradient(ellipse 40% 10% at 20% 43%,#000 24%,transparent 100%),
      radial-gradient(ellipse 43% 13% at 77% 58%,#000 34%,transparent 100%);
    transition:opacity 1.4s ease;
  }
  .coastal-stars {
    display:none; position:absolute; inset:0; opacity:var(--coastal-star-opacity,0);
    transition:opacity 1.2s ease;
  }
  .coastal-sky[data-stars=visible] .coastal-stars {display:block}
  .coastal-star-field, .coastal-star-sparkle {position:absolute;inset:0}
  .coastal-star-field {
    opacity:.67;
    background:${Hy(39,!1)},
      radial-gradient(ellipse 31% 97% at 34% 0%,#b0c3f522,transparent 100%);
  }
  .coastal-star-sparkle {
    opacity:.85;
    background:${Hy(13,!0)};
    animation:coastal-twinkle 7.6s ease-in-out infinite alternate;
  }
  @keyframes coastal-twinkle {from{opacity:.65} 40%{opacity:.93} to{opacity:.76}}
  .coastal-constellation {
    position:absolute;top:14%;height:78%;width:clamp(68px,10vw,154px);translate:-50% 0;
    fill:#fff2d5;overflow:visible;
  }
  .coastal-constellation path {
    fill:none;stroke:#a4bddf;stroke-width:1;stroke-opacity:.58;
    stroke-linecap:round;stroke-linejoin:round;vector-effect:non-scaling-stroke;
  }
  .coastal-constellation circle {filter:drop-shadow(0 0 2px #b7d3ffac)}
  .coastal-dipper {left:18%}
  .coastal-cassiopeia {left:43%;top:4%;height:70%}
  .coastal-orion {left:81%;top:11%;height:84%}
  .coastal-meteor {
    display:none;position:absolute;left:52%;top:20%;opacity:0;rotate:10deg;
    width:clamp(29px,5.5vw,88px);height:2px;border-radius:50%;
    --meteor-distance:clamp(44px,10vw,146px);--meteor-x:var(--meteor-distance);
    --meteor-y:clamp(8px,2dvh,23px);--meteor-delay:12s;
    background:linear-gradient(90deg,transparent,#a3d7ff60 55%,#e5f8ff 95%);
  }
  .coastal-meteor::after {
    content:"";position:absolute;right:0;top:-.5px;width:3px;height:3px;border-radius:50%;
    background:#fff3d6;box-shadow:0 0 6px 1px #c1e7ff9e;
  }
  .coastal-meteor-second {
    left:76%;top:11%;rotate:169deg;--meteor-x:calc(-1 * var(--meteor-distance));--meteor-delay:39s;
  }
  .coastal-sky[data-meteor=live] .coastal-meteor {
    display:block;animation:coastal-shooting-star 58s var(--meteor-delay) linear infinite;
  }
  .coastal-sky[data-meteor=sample] .coastal-meteor-first {
    display:block;opacity:var(--coastal-meteor-opacity,0);
    translate:calc(var(--coastal-meteor-progress,0) * var(--meteor-x))
      calc(var(--coastal-meteor-progress,0) * var(--meteor-y));
  }
  @keyframes coastal-shooting-star {
    0% {opacity:0;translate:0 0}
    .45% {opacity:.9}
    2.5%,100% {opacity:0;translate:var(--meteor-x) var(--meteor-y)}
  }
  .coastal-orb {
    display:none; position:absolute; border-radius:50%;
    width:var(--coastal-orb-size); aspect-ratio:1; translate:-50% -50%;
    transition:left 1.3s ease,top 1.3s ease,opacity 1.3s ease;
  }
  .coastal-sky:is([data-sky=day],[data-light=twilight]) .coastal-sun {
    display:block; left:var(--coastal-sun-x,52%);
    top:clamp(calc(var(--coastal-orb-size) / 2 + 3px),var(--coastal-sun-y,43%),calc(100% - var(--coastal-orb-size) / 2 - 3px));
    opacity:calc(var(--coastal-solar-disc,1) * (1 - .82 * var(--coastal-solar-cloud,0)));
    --coastal-sun-inner:color-mix(in srgb,var(--coastal-warm-sun-core,#fff8d4) var(--coastal-twilight-color,0%),#fff8d4);
    --coastal-sun-outer:color-mix(in srgb,var(--coastal-warm-sun-rim,#fadd96) var(--coastal-twilight-color,0%),#fadd96);
    background:radial-gradient(circle at 38% 31%,var(--coastal-sun-inner),var(--coastal-sun-outer) 88%);
    box-shadow:0 0 9px 3px color-mix(in srgb,var(--coastal-sun-inner) 57%,transparent),
      0 0 23px 7px color-mix(in srgb,var(--coastal-sun-outer) 42%,transparent);
  }
  .coastal-sky[data-light=twilight] .coastal-sun {
    top:calc(var(--coastal-sun-y,76%) + (1 - var(--coastal-solar-disc,0)) * var(--coastal-orb-size) * .66);
  }
  .coastal-sky[data-sky=night]:not([data-moon=""]):not([data-moon=new_moon]) .coastal-moon {
    display:block; left:var(--coastal-moon-x,55%); scale:.9;
    top:clamp(calc(var(--coastal-orb-size) / 2 + 3px),var(--coastal-moon-y,43%),calc(100% - var(--coastal-orb-size) / 2 - 3px));
    clip-path:var(--coastal-moon-outline,circle(50%));
    background:
      radial-gradient(circle at 30% 37%,#cab69776 0 8%,transparent 12%),
      radial-gradient(circle at 65% 65%,#cab69770 0 10%,transparent 15%),
      radial-gradient(circle at 44% 34%,#fff9e6,#ebd6ad 88%);
  }
  .coastal-sky[data-moon-motion=ambient] .coastal-moon {animation:coastal-moon-drift 480s ease-in-out infinite alternate}
  @keyframes coastal-moon-drift {
    from{transform:translate(-9vw,3px)} 50%{transform:translate(0,-2px)} to{transform:translate(9vw,3px)}
  }
  .coastal-sky:is([data-effect=clouds],[data-effect=wind-clouds],[data-effect=fog],[data-effect=snow]) .coastal-moon {opacity:.48}
  .coastal-sky:is([data-effect=rain],[data-effect=thunder],[data-effect=storm],[data-effect=sleet]) .coastal-moon {opacity:.17}
  .coastal-cloud {
    position:absolute; top:var(--cloud-y); left:var(--cloud-x); width:var(--cloud-width); height:var(--cloud-height);
    opacity:calc(var(--cloud-alpha) * var(--coastal-cloud-cover,1));
    background:linear-gradient(180deg,
      color-mix(in srgb,var(--coastal-cloud-warm-top,var(--coastal-cloud-top)) var(--coastal-twilight-color,0%),var(--coastal-cloud-top)),
      color-mix(in srgb,var(--coastal-cloud-warm-low,var(--coastal-cloud-bottom)) var(--coastal-twilight-color,0%),var(--coastal-cloud-bottom)) 95%);
    mask-image:
      radial-gradient(ellipse 45% 30% at 49% 66%,#000 43%,transparent 100%),
      radial-gradient(ellipse 32% 38% at 35% 53%,#000 38%,transparent 100%),
      radial-gradient(ellipse 23% 41% at 52% 42%,#000 37%,transparent 100%),
      radial-gradient(ellipse 27% 38% at 67% 52%,#000 32%,transparent 100%);
    animation:coastal-drift calc(var(--cloud-time,72s) / var(--coastal-wind-speed,1))
      calc(var(--cloud-delay,0s) - var(--coastal-clock,0s)) linear infinite;
  }
  .coastal-cloud-high {--cloud-x:24%;--cloud-y:2%;--cloud-width:36%;--cloud-height:42%;
    --cloud-alpha:.42;--cloud-time:85s;--cloud-delay:-20s;scale:1 .7}
  .coastal-cloud-left {--cloud-x:-4%;--cloud-y:24%;--cloud-width:47%;--cloud-height:64%;
    --cloud-alpha:.86;--cloud-delay:-11s}
  .coastal-cloud-right {--cloud-x:64%;--cloud-y:19%;--cloud-width:41%;--cloud-height:63%;
    --cloud-alpha:.86;--cloud-time:64s;--cloud-delay:-34s}
  .coastal-cloud-bank {--cloud-x:31%;--cloud-y:28%;--cloud-width:49%;--cloud-height:64%;
    --cloud-alpha:0;--cloud-time:80s;--cloud-delay:-10s}
  .coastal-sky[data-cloud=none] .coastal-cloud {display:none}
  .coastal-sky[data-cloud=cirrus] .coastal-cloud {
    mask-image:
      radial-gradient(ellipse 48% 12% at 49% 30%,#000 25%,transparent 100%),
      radial-gradient(ellipse 35% 11% at 60% 47%,#000 38%,transparent 100%),
      radial-gradient(ellipse 30% 8% at 39% 55%,#000 30%,transparent 100%);
    --cloud-alpha:.61;
  }
  .coastal-sky[data-cloud=cirrus] .coastal-cloud-bank {display:none}
  .coastal-sky[data-sky=night][data-cloud=cirrus] .coastal-cloud {--cloud-alpha:.24}
  .coastal-sky[data-cloud=altocumulus] .coastal-cloud {
    mask-image:
      radial-gradient(ellipse 14% 27% at 26% 53%,#000 48%,transparent 100%),
      radial-gradient(ellipse 13% 30% at 46% 38%,#000 48%,transparent 100%),
      radial-gradient(ellipse 16% 31% at 64% 51%,#000 48%,transparent 100%),
      radial-gradient(ellipse 11% 21% at 83% 60%,#000 48%,transparent 100%);
  }
  .coastal-sky:is([data-cloud=stratus],[data-cloud=nimbostratus]) .coastal-cloud {
    mask-image:
      radial-gradient(ellipse 50% 27% at 48% 57%,#000 53%,transparent 100%),
      radial-gradient(ellipse 44% 15% at 53% 38%,#000 40%,transparent 100%),
      radial-gradient(ellipse 40% 17% at 37% 74%,#000 48%,transparent 100%);
  }
  .coastal-sky[data-cloud=nimbostratus] .coastal-cloud {--cloud-height:77%;--cloud-alpha:.88}
  .coastal-sky[data-cloud=cumulonimbus] .coastal-cloud {
    --cloud-height:86%; --cloud-y:8%; --cloud-alpha:.96;
    mask-image:
      radial-gradient(ellipse 48% 24% at 50% 75%,#000 65%,transparent 100%),
      radial-gradient(ellipse 37% 34% at 59% 48%,#000 54%,transparent 100%),
      radial-gradient(ellipse 22% 44% at 45% 44%,#000 54%,transparent 100%),
      radial-gradient(ellipse 27% 26% at 32% 57%,#000 48%,transparent 100%);
  }
  .coastal-sky[data-cloud=fog] .coastal-cloud {
    --cloud-y:38%; --cloud-height:68%; --cloud-alpha:.46;
    background:linear-gradient(180deg,transparent,#e4eeeb 88%);
    mask-image:radial-gradient(ellipse 51% 64% at 49% 91%,#000 36%,transparent 100%);
  }
  .coastal-sky[data-cloud=fog]::after {
    content:"";position:absolute;inset:22% 0 0;pointer-events:none;
    background:
      radial-gradient(ellipse 43% 39% at 24% 72%,#dce7e87d,transparent 100%),
      radial-gradient(ellipse 55% 37% at 79% 84%,#eff0e589,transparent 100%),
      linear-gradient(180deg,transparent,#dce7e898);
  }
  .coastal-sky:is([data-cloud=altocumulus],[data-cloud=stratus],[data-cloud=nimbostratus],
    [data-cloud=cumulonimbus],[data-cloud=fog]) .coastal-cloud-bank {--cloud-alpha:.9}
  .coastal-lightning {
    display:none;position:absolute;z-index:1;left:65%;top:19%;height:63%;width:clamp(13px,1.4vw,25px);
    background:linear-gradient(#fff0c5,#c7d8ef);
    clip-path:polygon(56% 0,91% 0,59% 37%,91% 37%,18% 100%,39% 52%,13% 52%);
  }
  .coastal-sky:is([data-effect=thunder],[data-effect=storm]) .coastal-lightning {
    display:block;animation:coastal-distant-lightning 22s ease-in-out infinite;
  }
  .coastal-sky[data-sky-clock=sample] .coastal-cloud {
    animation-name:coastal-sampled-drift;animation-play-state:paused;
  }
  .coastal-sky[data-sky-clock=sample] :is(.coastal-orb,.coastal-twilight,.coastal-horizon-haze) {transition:none}
  .coastal-sky[data-sky-clock=sample] .coastal-lightning {animation:none;opacity:.85}
  .coastal-sky:is([data-sky-clock=sample],[data-meteor=sample]) .coastal-star-sparkle {animation:none}
  .coastal-sky[data-wind-calm=true] .coastal-cloud {animation:none}
  @keyframes coastal-drift ${Wy}
  @keyframes coastal-sampled-drift ${Wy}
  @keyframes coastal-distant-lightning {0%,74%,87%,100%{opacity:0}80%{opacity:.69}}
  .world[data-reduced-motion]:not([data-reduced-motion=false]) .coastal-sky
    :is(.coastal-cloud,.coastal-orb,.coastal-lightning,.coastal-stars,.coastal-star-sparkle,.coastal-twilight,.coastal-horizon-haze),
  .coastal-sky[data-sky-reduced=true]
    :is(.coastal-cloud,.coastal-orb,.coastal-lightning,.coastal-stars,.coastal-star-sparkle,.coastal-twilight,.coastal-horizon-haze) {animation:none;transition:none}
  .world[data-reduced-motion]:not([data-reduced-motion=false]) .coastal-sky .coastal-meteor,
  .coastal-sky[data-sky-reduced=true] .coastal-meteor {display:none}
  .world[data-reduced-motion]:not([data-reduced-motion=false]) .coastal-lightning,
  .coastal-sky[data-sky-reduced=true] .coastal-lightning {opacity:.66}
  @media (prefers-reduced-motion:reduce) {
    .coastal-sky :is(.coastal-cloud,.coastal-orb,.coastal-lightning,.coastal-stars,.coastal-star-sparkle,.coastal-twilight,.coastal-horizon-haze) {animation:none;transition:none}
    .coastal-sky[data-meteor] .coastal-meteor {display:none}
    .coastal-lightning {opacity:.66}
  }
  @media (max-height:600px) and (orientation:landscape) {
    .coastal-sky {height:clamp(38px,8.5dvh,48px);--coastal-orb-size:25px}
  }
`;var i3=2500,_d=Object.freeze({condition:"sunny",daylightKnown:!0,night:!1,sunElevation:40,sunAzimuth:160,traffic:Object.freeze({severity:"ambient"})}),Zy={dawn:[-6,92,!0,"overnight"],sunrise:[2,99,!0,"morning"],morning:[19,114,!0,"morning"],day:[40,160,!0,"day"],sunset:[2,253,!1,"day"],dusk:[-6,265,!1,"evening"],night:[-16,290,!1,"evening"],overnight:[-30,290,!1,"overnight"]},s3=n=>n.replaceAll("_"," ").replace(/^./,t=>t.toUpperCase());function r3({condition:n,daylight:t,moonPhase:e,windSpeed:i,windBearing:s}){let r=n==="clear-night"&&(t==="morning"||t==="day")?"night":t,[o,a,c,l]=Zy[r]??Zy.day,u=o<-.83;return{..._d,condition:n,night:u,sunElevation:o,sunAzimuth:a,moonPhase:e,windSpeed:i,windBearing:s,sunRising:c,beachActivity:l}}function jy(n,t,{api:e,viewport:i,bridge:s,onChange:r}){let o=n.getElementById("sceneSettingsDialog"),a=n.getElementById("sceneSettingsButton"),c=n.getElementById("sceneFeatures"),l=n.getElementById("sceneDockAlignment"),u=n.getElementById("scenePreviewMode"),f=n.getElementById("scenePreviewMotion"),h=n.getElementById("scenePreviewSource"),d=n.getElementById("scenePreviewWeather"),m=n.createElement("style");m.textContent=$y,n.head.append(m);let y=n.createElement("template");y.innerHTML=Xy.trim();let p=y.content.firstElementChild;p.hidden=!0,i.before(p);try{f.checked=t.localStorage.getItem("roomcraft.reduce-motion.v1")!=="true"}catch{}let g=Pm.map(({key:pt,label:at})=>{let St=n.createElement("label");St.className="scene-feature";let Z=n.createElement("input");return Z.type="checkbox",Z.addEventListener("change",()=>e.setSceneSetting(pt,Z.checked)),St.append(Z,at),c.append(St),{key:pt,input:Z}});function x(pt,at){let St=n.createElement("label");return St.textContent=pt,St.append(at),d.append(St),at.addEventListener("change",r),at}function v(pt,at,St){let Z=n.createElement("select");return Z.replaceChildren(...at.map(([rt,wt])=>new t.Option(wt,rt))),Z.value=St,x(pt,Z)}function b(pt,at,St,Z,rt){let wt=n.createElement("input");return Object.assign(wt,{type:"number",min:at,max:St,step:Z,value:rt}),x(pt,wt)}let _=v("Weather",Oy.map(({id:pt,label:at})=>[pt,at]),"sunny"),M=v("Time of day",[["dawn","Dawn"],["sunrise","Sunrise"],["morning","Morning"],["day","Day"],["sunset","Sunset"],["dusk","Dusk"],["night","Evening"],["overnight","Overnight"]],"day"),R=v("Moon phase",By.map(pt=>[pt,s3(pt)]),"full_moon"),S=b("Wind speed (m/s)",0,30,1,4),T=b("Wind from (degrees)",0,360,1,270),I,P,k=!1,z=!1,O=!1,U,V=!1,j=()=>{o.open||o.showModal()},dt=()=>e.setSceneSetting("dockAlignment",l.value),ot=()=>{d.hidden=u.value!=="custom",gt(),r()};a.addEventListener("click",j),l.addEventListener("change",dt),u.addEventListener("change",ot),f.addEventListener("change",r);function G(){return u.value!=="custom"}function q(){let pt=z?G()?V?"Live appearance from Home Assistant.":I||e.getPreview?.()?.environment?"Showing the last available dashboard appearance.":"Connect to Home Assistant to match the dashboard appearance.":"Preview changes stay in this Studio tab.":"Choose a 3D view to see the preview.";h.textContent!==pt&&(h.textContent=pt)}async function xt(){if(!z||!G()||!s||k||O)return;k=!0;let pt=!1;try{let at=await s.request("LOOK_GET");if(O)return;if(pt=V!==!!at?.environment,V=!!at?.environment,V){let St=JSON.stringify(at);St!==P&&(I=at,P=St,pt=!0)}}catch{pt=V,V=!1}finally{k=!1,!O&&z&&G()&&pt&&r()}}function gt(){z&&G()&&s&&!n.hidden?U===void 0&&(U=t.setInterval(xt,i3),xt()):U!==void 0&&(t.clearInterval(U),U=void 0)}return n.addEventListener("visibilitychange",gt),{open:j,motionEnabled:()=>f.checked,sync(pt,at,St=!1){z=pt,gt();for(let{key:Lt,input:Nt}of g)Nt.checked=Mi(at,Lt);l.value=Lm(at),q();let Z=I??e.getPreview?.(),rt=G()?Z?.environment??_d:r3({condition:_.value,daylight:M.value,moonPhase:R.value,windSpeed:Math.min(30,Math.max(0,S.valueAsNumber||0)),windBearing:Math.min(360,Math.max(0,T.valueAsNumber||0))}),wt={...rt,traffic:{...rt.traffic??_d.traffic,vehicleStyle:Ey(t)}};return p.hidden=!z||!Mi(at,"sky"),p.hidden||Yy(p,{...jl(wt,at),reduceMotion:St}),{states:Z?.states??{},environment:wt}},dispose(){O=!0,z=!1,gt(),n.removeEventListener("visibilitychange",gt),a.removeEventListener("click",j),l.removeEventListener("change",dt),u.removeEventListener("change",ot),f.removeEventListener("change",r),o.close();for(let{input:pt}of g)pt.parentElement.remove();d.replaceChildren(),p.remove(),m.remove()}}}var o3={radar:[32,12],plan:[20,8]};function Md(n){return n.reduce((e,i)=>[e[0]+i.x,e[1]+i.y],[0,0]).map(e=>e/n.length)}function a3(n,[t,e]){let[i,s]=Md(n),r=0,o=0,a=0;for(let{x:f,y:h}of n){let d=f-i,m=h-s;r+=d*d,o+=m*m,a+=d*m}let c=Math.hypot(r-o,2*a),l=Math.sqrt((r+o+c)/(2*n.length)),u=Math.sqrt(Math.max(0,(r+o-c)/(2*n.length)));return l>=t&&u>=e&&u>=l*.1}function tx([n,t,e,i,s,r],{radar:o,plan:a}){return Math.hypot(n*o.x+t*o.y+e-a.x,i*o.x+s*o.y+r-a.y)}function Ky(n,t){let e=t?-1:1,[i,s]=Md(n.map(({radar:p})=>p)),[r,o]=Md(n.map(({plan:p})=>p)),a=0,c=0,l=0;for(let{radar:p,plan:g}of n){let x=e*(p.x-i),v=p.y-s,b=g.x-r,_=g.y-o;a+=b*x+_*v,c+=_*x-b*v,l+=x*x+v*v}let u=a/l,f=c/l,h=r-e*u*i+f*s,d=o-e*f*i-u*s,m=[e*u,-f,h,e*f,u,d],y=n.map(p=>tx(m,p));return{transform:m,errors:y,flipped:t,scale:Math.hypot(u,f),squared:y.reduce((p,g)=>p+g*g,0)}}function Jy(n){let t=Ky(n,!1),e=Ky(n,!0);return e.squared<t.squared?e:t}function c3({radar:n,plan:t}={}){return[n?.x,n?.y,t?.x,t?.y].every(Number.isFinite)&&Math.abs(n.x)<=600&&Math.abs(n.y)<=600&&t.x>=0&&t.x<=1536&&t.y>=0&&t.y<=1024}function Qy(n){return Object.entries(o3).every(([t,e])=>a3(n.map(i=>i[t]),e))}function ex(n){if(!Array.isArray(n)||n.length<3||n.length>12||!n.every(l=>l&&c3(l)))return{error:"Use 3\u201312 valid pairs of radar centimetres and plan coordinates."};if(!Qy(n))return{error:"Choose survey points spread across the area, including one well off the line between the others."};let t=Jy(n),e=t.scale*100;if(e<8||e>600)return{error:"The fitted scale is outside the supported range. Check the radar units and matched plan points."};let i;if(n.length>3){i=0;for(let[l,u]of n.entries()){let f=n.filter((d,m)=>l!==m);if(!Qy(f))return{error:"Spread the survey points so that three or more still cover the area when any one point is removed."};let h=Jy(f);if(h.scale*100<8||h.scale*100>600)return{error:"The fitted scale changes too much when a point is withheld. Check which radar report matches each point."};i=Math.max(i,tx(h.transform,u)/h.scale)}}let{transform:s,errors:r,flipped:o,scale:a,squared:c}=t;return{transform:s,pixelsPerMetre:e,flipped:o,origin:{x:s[2],y:s[5]},rmsCm:Math.sqrt(c/n.length)/a,maxErrorCm:Math.max(...r)/a,...i===void 0?{}:{validationCm:i}}}var l3=3,u3=11,h3=12,nx=/^sensor\.[a-z0-9_]+$/,ix=n=>n.slice().sort((t,e)=>t-e)[Math.floor(n.length/2)];async function f3(n,t,e=Date.now,i=()=>!0){let s=e(),r=[],o=new Set,a;for(let c=0;c<u3&&i();c++){if(c&&await t(700),!i())return{error:"Capture canceled."};let l=await n(),{observed_at:u,tracks:f}=l?.attributes??{};if(!Number.isFinite(u)||u<s-500||u>e()+1e3||o.has(u))continue;if(o.add(u),f?.length>1)return{error:"More than one radar target was detected. Clear the room and try again."};if(l.state!=="1"||f?.length!==1)continue;let{id:h,x:d,y:m}=f[0];if(![d,m].every(p=>Number.isFinite(p)&&Math.abs(p)<=800))continue;if(a!==void 0&&h!==a)return{error:"The radar switched targets. Stay still and try again."};if(a=h,r.push({x:d,y:m}),r.length<l3)continue;let y={x:ix(r.map(p=>p.x)),y:ix(r.map(p=>p.y))};return r.some(p=>Math.hypot(p.x-y.x,p.y-y.y)>40)?{error:"These readings moved too far apart. Hold still on the marked spot and try again."}:{point:y}}return{error:"Too few fresh position reports. Check the radar reporting state and try a spot closer to the switch."}}function Sd(n,t,e){n.fillStyle="#e8eddf",n.fillRect(0,0,t.width,t.height);for(let i of e.rooms)n.beginPath(),i.points.forEach(({x:s,y:r},o)=>o?n.lineTo(s,r):n.moveTo(s,r)),n.closePath(),n.fillStyle=i.outdoor||i.surface==="patio"?"#d8dfca":"#f6e7cc",n.strokeStyle="#c9b496",n.lineWidth=4,n.fill(),n.stroke();for(let i of e.items)/sofa|sectional|diningTable|desk|counter|worktop|bed/i.test(i.type)&&(n.save(),n.translate(i.x,i.y),n.rotate(i.rotation*Math.PI/180),n.fillStyle="#c8b095",n.fillRect(-i.w/2,-i.h/2,i.w,i.h),n.restore());n.lineWidth=9,n.strokeStyle="#4f6159";for(let i of e.walls)n.beginPath(),n.moveTo(i.x1,i.y1),n.lineTo(i.x2,i.y2),n.stroke();n.textAlign="center",n.font="bold 25px sans-serif",n.fillStyle="#40473a";for(let i of e.rooms)i.label&&n.fillText(i.name,i.label.x,i.label.y,250)}function d3(n,t,e,i,s,r){let o=n.getContext("2d");if(!o||!t)return;Sd(o,n,t);let a=(c,l,u)=>{c&&(o.beginPath(),o.arc(c.x,c.y,19,0,2*Math.PI),o.fillStyle=l,o.fill(),o.fillStyle="#fff",o.fillText(u,c.x,c.y+8))};a(e,"#714985","R"),s.forEach(({plan:c,radar:l},u)=>{if(r?.transform){let[f,h,d,m,y,p]=r.transform,g=f*l.x+h*l.y+d,x=m*l.x+y*l.y+p;o.strokeStyle="#ae5339",o.lineWidth=5,o.beginPath(),o.moveTo(c.x,c.y),o.lineTo(g,x),o.stroke(),o.beginPath(),o.arc(g,x,9,0,2*Math.PI),o.stroke()}a(c,"#376555",String(u+1))}),a(i,"#855f2f","+")}function sx(n,t,{api:e,bridge:i}){let s=n.getElementById("radarCalibrationDialog");if(!s)return null;let r=n.getElementById("radarCalibrationPlan"),o=P=>s.querySelector(`[data-survey="${P}"]`),a=o("x"),c=o("y"),l=o("distance"),u=o("status"),f=o("quality"),h=o("points"),d=o("capture"),m=o("undo"),y=o("apply"),p=P=>new Promise(k=>t.setTimeout(k,P)),g,x,v,b,_=[],M=0,R=!1;function S(){b=_.length>=3?ex(_):void 0,d.disabled=R||!v||!i?.request||!nx.test(x?.presenceTrackEntityId??"")||_.length>=h3,m.disabled=R||!_.length,y.disabled=R||!b?.transform;let P=_.map(({plan:z},O)=>{let U=n.createElement("li");return U.textContent=`Point ${O+1} \xB7 ${z.x}, ${z.y}`,U});h.replaceChildren(...P);let k=b?.error??"";if(b?.transform){let{pixelsPerMetre:z,rmsCm:O,maxErrorCm:U,validationCm:V,origin:j}=b;k=`${z.toFixed(1)} plan px/m \xB7 ${Math.round(O)} cm fit error \xB7 ${Math.round(U)} cm worst point.`,Number.isFinite(V)?k+=` Independent check ${Math.round(V)} cm.`:k+=" Add a fourth point to check the result.";let dt=Math.hypot(j.x-x.x,j.y-x.y)*100/z;if(dt>40&&(k+=` Fitted sensor origin is ${Math.round(dt)} cm from its map marker.`),l.valueAsNumber>0){let[ot,G]=_,q=Math.hypot(ot.plan.x-G.plan.x,ot.plan.y-G.plan.y)/l.valueAsNumber;k+=` Tape measure gives ${q.toFixed(1)} plan px/m between points 1 and 2.`}}f.textContent=k,d3(r,g,x,v,_,b)}function T(){let P=a.valueAsNumber,k=c.valueAsNumber;v=Number.isFinite(P)&&Number.isFinite(k)&&P>=0&&P<=r.width&&k>=0&&k<=r.height?{x:Math.round(P),y:Math.round(k)}:void 0,S()}function I(P){if(!P.target.closest?.("[data-radar-calibration]"))return;let k=e.getSelection();g=e.getProject(),x=k?.kind==="item"?g.items.find(z=>z.id===k.id&&z.type==="presenceSwitch"):null,x&&(M++,_=[],v=void 0,R=!1,a.value=c.value=l.value="",u.textContent=i?.request?nx.test(x.presenceTrackEntityId??"")?"Choose a location to begin.":"Link a radar targets entity first.":"Open Studio from Home Assistant to capture live radar points.",s.showModal(),S())}return n.addEventListener("click",I),r.addEventListener("click",P=>{if(R)return;let k=r.getBoundingClientRect();a.value=Math.round((P.clientX-k.left)*r.width/k.width),c.value=Math.round((P.clientY-k.top)*r.height/k.height),T()}),a.addEventListener("input",T),c.addEventListener("input",T),l.addEventListener("input",S),d.addEventListener("click",async()=>{if(d.disabled)return;R=!0;let P=M,k=x.presenceTrackEntityId,z=v;u.textContent="Waiting for three fresh reports. Hold still on the chosen point.",S();let O;try{O=await f3(async()=>(await i.request("TRACK_GET",[k]))?.[k],p,Date.now,()=>P===M&&s.open)}catch{O={error:"Home Assistant could not read the radar. Check the connection and retry."}}P!==M||!s.open||(R=!1,O.point&&(_.push({plan:z,radar:O.point}),a.value=c.value="",v=void 0),u.textContent=O.error??`Captured point ${_.length}. Choose another location.`,S())}),m.addEventListener("click",()=>{_.pop(),S()}),y.addEventListener("click",()=>{b?.transform&&(e.setRadarCalibration(x.id,x.presenceTrackEntityId,b.transform)?s.close():u.textContent="The radar source changed. Reopen calibration for the current sensor.")}),s.addEventListener("close",()=>{M++}),{dispose(){M++,n.removeEventListener("click",I),s.open&&s.close()}}}var p3=12,m3=Math.ceil(8*1024*1024/3)*4+32,rx=/^camera\.[a-z0-9_]+$/,g3=/^data:image\/(?:png|jpeg|webp);base64,[A-Za-z0-9+/]+={0,2}$/,ox=n=>Number.isInteger(n)?String(n):n.toFixed(1);function ax(n,t){let e=n.getBoundingClientRect();return{x:(t.clientX-e.left)*n.width/e.width,y:(t.clientY-e.top)*n.height/e.height}}function lx(n,t){let e=Math.min(n.width/t.naturalWidth,n.height/t.naturalHeight);return{x:(n.width-t.naturalWidth*e)/2,y:(n.height-t.naturalHeight*e)/2,scale:e}}function y3(n,t){return new Promise((e,i)=>{let s=new n.Image;s.onload=()=>e(s),s.onerror=i,s.src=t})}function wd(n,t,e,i,s=17){n.beginPath(),n.arc(t.x,t.y,s,0,2*Math.PI),n.fillStyle=e,n.fill(),n.strokeStyle="#fffefa",n.lineWidth=3,n.stroke(),n.fillStyle="#fff",n.font=`bold ${s*1.22}px sans-serif`,n.textAlign="center",n.textBaseline="middle",n.fillText(i,t.x,t.y+1)}function x3(n,t,e,i){let s=n.getContext("2d");if(!s||(n.toggleAttribute("data-empty",!t),s.fillStyle="#e8eddf",s.fillRect(0,0,n.width,n.height),!t))return;let{image:r,mapToPixel:o}=t,{x:a,y:c,scale:l}=lx(n,r);s.drawImage(r,a,c,r.naturalWidth*l,r.naturalHeight*l);function u(f,h,d){let m=as(o,f);m.x>=0&&m.x<=r.naturalWidth&&m.y>=0&&m.y<=r.naturalHeight&&wd(s,{x:a+m.x*l,y:c+m.y*l},h,d,13)}e.forEach(({map:f},h)=>u(f,"#315d55",String(h+1))),i&&u(i,"#8a622e","+")}function b3(n,t,e,i,s,r,o){let a=n.getContext("2d");if(!a)return;a.save(),Sd(a,n,t);let c=e&&o?qg(r,e.pixelToMap):void 0;if(c){let[l,u,f,h,d,m]=c;a.save(),a.globalAlpha=.43,a.transform(l,h,u,d,f,m),a.drawImage(e.image,0,0),a.restore()}i.forEach(({map:l,plan:u},f)=>{if(o&&r){let h=as(r,l);a.strokeStyle="#a14936",a.lineWidth=5,a.beginPath(),a.moveTo(u.x,u.y),a.lineTo(h.x,h.y),a.stroke(),a.beginPath(),a.arc(h.x,h.y,10,0,2*Math.PI),a.stroke()}wd(a,u,"#315d55",String(f+1))}),s&&wd(a,s,"#8a622e","+"),a.restore()}function cx(n){if(n.length<3)return!1;let[t,...e]=n,i=e.map(r=>({x:r.x-t.x,y:r.y-t.y})),s=Math.max(...i.map(({x:r,y:o})=>r*r+o*o));return s>0&&i.some((r,o)=>i.slice(o+1).some(a=>Math.abs(r.x*a.y-r.y*a.x)>s*.03))}function v3(n,t,e){let i=kf(n,{mapUnitsPerMetre:t});if(!e)return i;let s=kf(n,{flipY:!0,mapUnitsPerMetre:t});return s&&(!i||s.rmse<i.rmse)?s:i}function ux(n,t,{api:e,bridge:i}){let s=n.getElementById("vacuumAlignmentDialog");if(!s)return null;let r=q=>s.querySelector(`[data-vacuum-survey="${q}"]`),o=r("map"),a=r("plan"),c=r("map-x"),l=r("map-y"),u=r("plan-x"),f=r("plan-y"),h=r("units"),d=r("distance"),m=r("overlay"),y=r("load"),p=r("add"),g=r("undo-point"),x=r("undo-alignment"),v=r("apply"),b=r("points"),_=r("status"),M=r("quality"),R,S,T,I,P,k,z,O=[],U=0,V=!1;function j(q,xt,gt=!1){let pt=q.valueAsNumber,at=xt.valueAsNumber;if([pt,at].every(Number.isFinite)&&!(gt&&(pt<0||at<0||pt>a.width||at>a.height)))return{x:pt,y:at}}function dt(){let q=j(c,l),xt=j(u,f,!0),gt=h.valueAsNumber>0?h.valueAsNumber:null,pt=cx(O.map(wt=>wt.map))&&cx(O.map(wt=>wt.plan));I=v3(O,gt,pt),y.disabled=V||!!T||!i?.request||!rx.test(S?.vacuumMapEntityId??""),p.disabled=V||!q||!xt||O.length>=p3,g.disabled=V||!O.length,x.disabled=V||!P;let at=I?.transform.join(",");v.disabled=V||!pt||!I||at===k;let St=O.map(wt=>{let Lt=n.createElement("li"),Nt=({x:H,y:bt})=>`${ox(H)}, ${ox(bt)}`;return Lt.textContent=`LiDAR ${Nt(wt.map)} \u2192 plan ${Nt(wt.plan)}`,Lt});b.replaceChildren(...St);let Z=[];if(I){Z.push(Number.isFinite(I.pixelsPerMetre)?`${I.pixelsPerMetre.toFixed(1)} plan px/m`:`${I.scale.toFixed(4)} plan px per map unit`),pt&&(Z.push(`${I.rmse.toFixed(1)} px fit error`),Number.isFinite(I.leaveOneOutError)&&Z.push(`${I.leaveOneOutError.toFixed(1)} px independent check`));let wt=Yg(O[0],O[1],I.transform,gt);if(Number.isFinite(wt?.mapMetres)&&(Z.push(`Points 1\u20132 measure ${wt.mapMetres.toFixed(2)} m on LiDAR and ${wt.planMetres.toFixed(2)} m on the scaled plan.`),d.valueAsNumber>0)){let Lt=Math.abs(wt.mapMetres-d.valueAsNumber);Z.push(`${Math.round(Lt*100)} cm from tape reading`)}}pt?I||Z.push("These points are too close together. Choose more widely spaced locations."):Z.push("Add three matching points spread in two directions."),M.textContent=Z.join(" \xB7 "),x3(o,T,O,q);let rt=S.vacuumMapId===void 0||S.vacuumMapId===T?.mapId?S.vacuumPositionTransform:void 0;b3(a,R,T,O,xt,(pt?I?.transform:void 0)??rt,m.checked)}async function ot(){if(y.disabled)return;let q=U;V=!0,_.textContent="Reading the selected map from Home Assistant\u2026",dt();try{let xt=await i.request("VACUUM_MAP_GET",{entityId:S.vacuumMapEntityId}),{imageDataUrl:gt,pixelToMap:pt,mapUnitsPerMetre:at,mapId:St}=xt??{},Z=Xg(pt);if(typeof gt!="string"||gt.length>m3||!g3.test(gt)||!Z)throw new Error("Invalid map");let rt=await y3(t,gt);if(q!==U||!s.open)return;T={image:rt,pixelToMap:pt,mapToPixel:Z,mapId:Number.isSafeInteger(St)&&St>0?St:void 0},Number.isFinite(at)&&at>0&&(h.value=String(at),h.readOnly=!0),_.textContent="LiDAR map loaded. Choose the same location on both maps."}catch{if(q!==U||!s.open)return;_.textContent="The selected camera did not return a calibrated map. Retry or enter map coordinates directly."}V=!1,dt()}function G(q){let xt=q.target.closest?.("[data-vacuum-alignment]");if(!xt||s.open)return;let gt=e.getSelection();if(R=e.getProject(),S=gt?.kind==="item"&&R.items.find(pt=>pt.id===gt.id),!!S){z=xt,U++,O=[],T=I=P=k=void 0,V=!1;for(let pt of[c,l,u,f,h,d])pt.value="";h.readOnly=!1,m.checked=!0,_.textContent=i?.request&&!rx.test(S.vacuumMapEntityId??"")?"Link the vacuum map camera in the Inspector or enter known map coordinates.":"Enter known coordinates here, or open Home Assistant Studio to load the linked map.",s.showModal(),dt(),y.disabled||ot()}}n.addEventListener("click",G),y.addEventListener("click",ot);for(let q of[c,l,u,f,h,d])q.addEventListener("input",dt);return m.addEventListener("change",dt),o.addEventListener("click",q=>{if(V||!T)return;let xt=ax(o,q),{x:gt,y:pt,scale:at}=lx(o,T.image),St={x:(xt.x-gt)/at,y:(xt.y-pt)/at};if(St.x<0||St.y<0||St.x>T.image.naturalWidth||St.y>T.image.naturalHeight)return;let Z=as(T.pixelToMap,St);c.value=String(Math.round(Z.x*10)/10),l.value=String(Math.round(Z.y*10)/10),dt()}),a.addEventListener("click",q=>{if(V)return;let xt=ax(a,q);u.value=String(Math.round(xt.x)),f.value=String(Math.round(xt.y)),dt()}),p.addEventListener("click",()=>{if(p.disabled)return;let q=j(c,l),xt=j(u,f,!0);if(O.some(gt=>Math.hypot(gt.map.x-q.x,gt.map.y-q.y)<1||Math.hypot(gt.plan.x-xt.x,gt.plan.y-xt.y)<1)){_.textContent="Choose a different location on each map.";return}O.push({map:q,plan:xt});for(let gt of[c,l,u,f])gt.value="";_.textContent=`Pair ${O.length} added.`,dt()}),g.addEventListener("click",()=>{g.disabled||(O.pop(),_.textContent="Removed the last matching pair.",dt())}),v.addEventListener("click",()=>{if(v.disabled)return;let q=e.setVacuumAlignment(S.id,S.entityId,S.vacuumMapEntityId??"",T?.mapId,I.transform);q?(k=I.transform.join(","),q.changed&&(P=q),_.textContent=q.changed?"Applied to the draft. Export to dashboard when ready.":"This alignment is already applied."):_.textContent="The vacuum binding changed or the alignment is out of range. Reopen this survey.",dt()}),x.addEventListener("click",()=>{x.disabled||(_.textContent=P.undo()?"Restored the previous draft alignment.":"The draft changed. Use the Studio history controls.",P=k=void 0,dt())}),s.addEventListener("keydown",q=>q.stopPropagation()),s.addEventListener("close",()=>{U++,T=R=S=P=I=void 0,O=[];for(let q of[c,l,u,f,h,d])q.value="";b.replaceChildren();for(let q of[o,a])q.getContext("2d")?.clearRect(0,0,q.width,q.height);z?.isConnected?z.focus():n.querySelector("[data-vacuum-alignment]")?.focus()}),{dispose(){U++,n.removeEventListener("click",G),s.open&&s.close()}}}var _3=22,M3=5,S3=1e3/12,w3=1e3,E3=12;function T3(n,t,e){let i=Ty(n,t,e),s=new Set(i.map(r=>r.id));for(let r of n.filter(o=>!s.has(o.id))){let o=Math.min(r.w,t),a=Math.min(r.h,e),c=[];for(let u=o/2;u<=t-o/2;u+=o+4)for(let f=a/2;f<=e-a/2;f+=a+4)c.push({...r,x:u,y:f,w:o,h:a});c.sort((u,f)=>Math.hypot(u.x-r.x,u.y-r.y)-Math.hypot(f.x-r.x,f.y-r.y));let l=c.find(u=>i.every(f=>Math.abs(u.x-f.x)>=(u.w+f.w)/2+2||Math.abs(u.y-f.y)>=(u.h+f.h)/2+2));l&&i.push(l)}return i}function A3(n,t){if(!t)return!1;let e=(Number(n.rotation)||0)*Math.PI/180,i=t.x-n.x,s=t.y-n.y,r=i*Math.cos(e)+s*Math.sin(e),o=-i*Math.sin(e)+s*Math.cos(e);return Math.abs(r)<=n.w/2&&Math.abs(o)<=n.h/2}function R3(n,t,e,i,s,r){let o=n.flatMap((a,c)=>{let l=i.get(a.id);if(!l)return[];let u=Math.hypot(l.x*s-t.x,l.y*r-t.y),f=u<=_3;return!f&&(a.type==="garageDoor"||!A3(a,e))?[]:[{item:a,index:c,distance:u,near:f,area:a.w*a.h}]});return o.sort((a,c)=>Number(c.near)-Number(a.near)||(a.near?a.distance-c.distance:a.area-c.area)||c.index-a.index),o[0]?.item??null}function C3(n,t){let e=t.RoomcraftEditorViewport,i=n.getElementById("sceneCanvas"),s=n.getElementById("viewport"),r=n.getElementById("sceneView");if(!e||!i||!s||!r)return null;gg(r,!0);let o={left:n.getElementById("sceneRotateLeft"),right:n.getElementById("sceneRotateRight"),out:n.getElementById("sceneZoomOut"),in:n.getElementById("sceneZoomIn")},a=n.getElementById("sceneCameraOptions"),c=n.getElementById("sceneReset"),l=n.getElementById("sceneSaveDefault"),u=n.getElementById("sceneClearDefault"),f=n.getElementById("sceneDefaultStatus"),h=vg(t),d=t.matchMedia?.("(prefers-reduced-motion: reduce)"),m=t.location?.pathname?.startsWith("/local/roomcraft/")?t.RoomcraftDashboardBridge:null,y=sx(n,t,{api:e,bridge:m}),p=ux(n,t,{api:e,bridge:m}),g=jy(n,t,{api:e,viewport:s,bridge:m,onChange:()=>{A(U?.item&&U.position?{[U.item.id]:{position:U.position}}:void 0)}}),x=n.createElement("div");x.className="scene-selection",x.setAttribute("aria-hidden","true"),Object.assign(x.style,{position:"absolute",width:"32px",height:"32px",border:"2px solid #35756b",borderRadius:"50%",transform:"translate(-50%,-50%)",pointerEvents:"none",boxShadow:"0 0 0 2px #fff6de",zIndex:"2",display:"none"}),s.append(x);let v=n.createElement("div");v.className="scene-placeholders",Object.assign(v.style,{position:"absolute",inset:"0",pointerEvents:"none",zIndex:"1"}),s.append(v);let b=n.createElementNS("http://www.w3.org/2000/svg","svg");b.classList.add("scene-placeholder-leaders"),b.setAttribute("aria-hidden","true"),Object.assign(b.style,{position:"absolute",inset:"0",width:"100%",height:"100%",pointerEvents:"none"}),s.insertBefore(b,v);let _=new Map,M=n.getElementById("miniHelp"),R=M?.textContent,S=i.getAttribute("aria-label")??"Editable three-dimensional home view",T,I,P,k=wf(null),z=r.value,O="default",U,V,j,dt=-1/0,ot=0,G,q=!1,xt=!1,gt=null,pt=!1,at=[],St=[],Z="",rt=0,wt,Lt=!1,Nt={},H=Fy(),bt={key:"",scene:null,reduceMotion:!1},K={id:null,scene:null},et=()=>z!=="plan",$=()=>z==="free",ht=()=>d?.matches===!0||!g.motionEnabled(),yt=()=>i.getBoundingClientRect(),It=Bt=>{let oe=yt();return{x:Bt.clientX-oe.left,y:Bt.clientY-oe.top}};function Pt(Bt){e.showStatus?.(Bt)}function Ft(){if(!(!q&&(T?.hasAmbientMotion||T?.hasPeopleMotion)&&et()&&!n.hidden&&!ht())){t.cancelAnimationFrame(j),j=void 0;return}j===void 0&&(j=t.requestAnimationFrame(oe=>{if(j=void 0,oe-dt>=S3-1){dt=oe,ot=oe/1e3;try{G&&T.render(ot,...G)}catch{C()}}Ft()}))}function Ut(Bt=!0){let oe=et()?T:null,Et=ht(),Dt=Y()?oe?H.read(at,Nt,Date.now(),{contains:oe.canPlacePerson,nearest:oe.nearestPersonPoint}):gd(at,Nt):[],Gt=JSON.stringify(Dt);Gt===bt.key&&oe===bt.scene&&Et===bt.reduceMotion||(bt={key:Gt,scene:oe,reduceMotion:Et},oe&&(oe.setPeople(Dt,(t.performance?.now()??0)/1e3,{reduceMotion:Et}),Bt&&A()),e.setPersonPreview?.(oe?[]:Dt))}function Y(){return!!(m?.request&&St.length&&!q&&!n.hidden)}async function te(Bt=!0){if(Bt&&Ut(),Lt||!Y())return;Lt=!0;let oe=rt;try{let Et=await m.request("TRACK_GET",St);oe===rt&&Y()&&(Nt=Et&&typeof Et=="object"?Et:{},Ut())}catch{oe===rt&&(Nt={},Ut())}finally{Lt=!1}}function Ht(){Y()?wt===void 0&&(wt=t.setInterval(te,w3),te(!1)):wt!==void 0&&(t.clearInterval(wt),wt=void 0,rt++,Nt={})}function B(Bt){at=Bt.filter(yd).slice(0,E3);let oe=[...new Set(at.flatMap(Dt=>[Dt.presenceTrackEntityId,Dt.presenceEntityId]).filter(Dt=>/^(?:sensor|binary_sensor)\.[a-z0-9_]+$/.test(Dt??"")))],Et=oe.join(",");Et!==Z&&(Z=Et,St=oe,rt++,Nt={}),Ht()}function A(Bt){if(Ft(),!T||!et())return;let{width:oe,height:Et}=yt();if(!oe||!Et)return;T.resize(oe,Et);let Dt=e.getSelection(),Gt=Dt?.kind==="item"?Dt.id:null;if(K.scene!==T||K.id!==Gt){let ge=I.items.find(N=>N.id===Gt);T.setDetectionZones(ge?Ny([ge]):[]),K={id:Gt,scene:T}}let ie=ht(),he=g.sync(!0,I.sceneSettings,ie),fe=Object.create(null);for(let ge of I.items){let N=he.states[ge.id];N&&N.entityId===ge.entityId&&(fe[ge.id]=N)}if(G=[fe,{...he.environment,reduceMotion:ie},{showTelemetryPosition:!1,draftPositions:Bt}],T.render(ot,...G),$())return;let we=[];for(let[ge,N]of _){let st=T.anchor(ge);if(N.hidden=!st,st){let _t=I.items.find(vt=>vt.id===ge),ut=_t?.type==="cameraThumbnail"?bg(_t,oe):{w:96,h:44};we.push({id:ge,marker:N,x:st.x*oe,y:st.y*Et,...ut})}}let Xe=T3(we,oe,Et),Mn=new Set(Xe.map(ge=>ge.id)),Vn=[];for(let ge of Xe){let{marker:N,x:st,y:_t,w:ut,h:vt,id:Wt}=ge;Object.assign(N.style,{left:`${st}px`,top:`${_t}px`,width:`${ut}px`,height:`${vt}px`});let Yt=we.find(Vt=>Vt.id===Wt);if(Math.hypot(Yt.x-st,Yt.y-_t)>8){let Vt=n.createElementNS("http://www.w3.org/2000/svg","line");for(let[Zt,Jt]of Object.entries({x1:Yt.x,y1:Yt.y,x2:st,y2:_t}))Vt.setAttribute(Zt,Jt);Vt.setAttribute("stroke","#6f816b"),Vt.setAttribute("stroke-width","1"),Vt.setAttribute("stroke-dasharray","3 3"),Vn.push(Vt)}}for(let[ge,N]of _)N.hidden=!Mn.has(ge);b.replaceChildren(...Vn);let ni=Dt?.kind==="item"?T.anchor(Dt.id):null;x.style.display=ni?"block":"none",ni&&(x.style.left=`${ni.x*oe}px`,x.style.top=`${ni.y*Et}px`)}function it(){if(!U)return;let Bt=U;U=void 0;try{i.releasePointerCapture(Bt.pointerId)}catch{}Bt.item&&A({[Bt.item.id]:{position:{x:Bt.item.x,y:Bt.item.y}}})}function mt(){a&&(a.hidden=!et());for(let Bt of Object.values(o))Bt&&(Bt.disabled=!et());l&&(l.hidden=!T||!$(),l.disabled=pt),u&&(u.hidden=!T||!et()||!gt,u.disabled=pt)}function Mt(Bt){f&&(f.textContent=Bt)}function X(){xt=!0,Mt("")}function w(){i.tabIndex=$()?0:-1,i.style.cursor=$()?"grab":"",i.setAttribute("aria-label",$()?"Free view. Use arrow keys to orbit and plus or minus to zoom.":S)}function E(Bt,{initial:oe=!1}={}){oe||(X(),Bt==="default"&&(xt=!1)),Ct.cancel(),it();let Et=T?.getView()??k,Dt=Object.hasOwn(ro,Bt)?Bt:"plan";Dt!=="plan"&&e.useSelectTool?.(),z=Dt,et()&&!$()&&(O=z),r.value=z,i.hidden=!et(),w();let Gt=et()&&!$();if(v.style.display=Gt?"block":"none",b.style.display=Gt?"block":"none",Gt||(x.style.display="none"),M&&($()?M.textContent="Drag or swipe to orbit. Pinch or scroll to zoom.":M.textContent=et()?"Drag objects to move them. Scroll to zoom; use the view controls to rotate.":R),s.classList.toggle("scene-3d",et()),mt(),!et()){D(),Ft(),g.sync(!1,e.getProject().sceneSettings),Pt("Plan view \xB7 edit rooms, walls, floors and objects");return}let ie=z==="default"?wf(gt):$()?yg(Et):{preset:z};k=T?T.setView(ie):ie,D(),T&&Pt($()?"Free view \xB7 choose an editable view to move objects":"3D view \xB7 select and drag objects, or place an object from the catalog")}function C(){Ct.cancel(),T?.dispose(),T=void 0,P=void 0,z="plan",Ft(),r.value=z,i.hidden=!0,g.sync(!1,e.getProject().sceneSettings),w(),v.style.display="none",b.style.display="none",M&&(M.textContent=R),s.classList.remove("scene-3d"),x.style.display="none",mt(),Ut(!1),Pt("3D view is unavailable on this screen. Plan view is ready.")}function D(){if(q)return;let Bt=e.getProject();if(B(Bt.items),!et()){g.sync(!1,Bt.sceneSettings),Ut();return}let oe=JSON.stringify(Bt);try{if(!T||oe!==P){it(),T&&(k=T.getView()),T?.dispose(),T=void 0,I=Bt,T=_y(i,I),T.setView(k),P=oe,_.clear(),v.replaceChildren();for(let Et of I.items.filter(Dt=>Dt.type==="cameraThumbnail"||Dt.type.startsWith("ui"))){let Dt=n.createElement("button");Dt.type="button",Dt.className="scene-placeholder",Dt.textContent=Et.name||(Et.type==="cameraThumbnail"?"Camera":"Interface"),Dt.setAttribute("aria-label",`Select ${Dt.textContent}`),Object.assign(Dt.style,{position:"absolute",transform:"translate(-50%,-50%)",pointerEvents:"auto",minWidth:"44px",minHeight:"44px",padding:"3px 7px",boxSizing:"border-box",border:"1px dashed #6f816b",borderRadius:"8px",background:"#fff8e5e8",color:"#3a5243",font:"600 11px/1.2 system-ui,sans-serif",touchAction:"none"}),Dt.addEventListener("pointerdown",Gt=>L(Gt,Et.id)),Dt.addEventListener("click",Gt=>{!$()&&Gt.detail===0&&(e.selectItem(Et.id),A())}),_.set(Et.id,Dt),v.append(Dt)}}mt(),Ut(!1),A()}catch{C()}}function F(Bt){!T||!et()||(X(),it(),T.setView(Bt(T.getView())),k=T.getView(),A())}let Q=()=>D(),J=()=>{let Bt=e.getTool();et()&&Bt!=="select"?E("plan"):$()&&e.hasPlacement()?E(O):et()&&A()},lt=()=>E(r.value),ft=()=>{t.cancelAnimationFrame(V),V=t.requestAnimationFrame(()=>A())},Ct=wy(i,{getView:()=>$()?T?.getView():null,onChange:Bt=>{!T||!$()||(X(),k=T.setView(Bt),ft())}}),L=(Bt,oe=null)=>{if(!et()||$()||!T||Bt.button!==0||U)return;Bt.preventDefault(),Bt.stopPropagation();let Et=It(Bt);if(e.hasPlacement()){let Xe=T.projectToPlan(Et.x,Et.y,e.getPlacementType(),{preferTabletop:!0});Xe&&e.placeAt(Xe.x,Xe.y),D();return}let{width:Dt,height:Gt}=yt(),ie=new Map(I.items.map(Xe=>[Xe.id,T.anchor(Xe.id)])),he=oe??T.pickGarage(Et.x,Et.y),fe=he?I.items.find(Xe=>Xe.id===he):R3(I.items,Et,T.projectToPlan(Et.x,Et.y),ie,Dt,Gt);if(e.selectItem(fe?.id??null),!fe){A();return}let we=T.projectToPlan(Et.x,Et.y,fe.type);we&&(U={item:{...fe},startScreen:Et,startPlan:we,pointerId:Bt.pointerId},i.setPointerCapture(Bt.pointerId),A())},tt=Bt=>{if(!et()||$()||(Bt.stopPropagation(),!U||U.pointerId!==Bt.pointerId||!T))return;let oe=It(Bt);if(!U.moved&&Math.hypot(oe.x-U.startScreen.x,oe.y-U.startScreen.y)<M3)return;let Et=T.projectToPlan(oe.x,oe.y,U.item.type);if(!Et)return;U.moved=!0;let Dt={x:U.item.x+Et.x-U.startPlan.x,y:U.item.y+Et.y-U.startPlan.y},Gt=e.moveItemWarning?.(U.item.id,Dt.x,Dt.y);if(Gt){Gt!==U.warning&&Pt(Gt),U.warning=Gt;return}U.warning&&Pt(`Moving ${U.item.name||"object"}`),U.warning=void 0,U.position=Dt,A({[U.item.id]:{position:U.position}})},nt=Bt=>{if(!et()||$()||(Bt.stopPropagation(),!U||U.pointerId!==Bt.pointerId))return;let oe=U;U=void 0;try{i.releasePointerCapture(Bt.pointerId)}catch{}oe.moved&&oe.position?(e.moveItem(oe.item.id,oe.position.x,oe.position.y),D()):A()},At=Bt=>{$()||(U?.pointerId===Bt.pointerId&&it(),Bt.stopPropagation())},Rt=Bt=>{!et()||$()||(Bt.preventDefault(),Bt.stopPropagation(),F(oe=>({...oe,zoom:oe.zoom*(Bt.deltaY<0?1.1:1/1.1)})))},Tt=Bt=>{$()&&Bt.target===i&&(Bt.key==="Delete"||Bt.key==="Backspace")&&(Bt.preventDefault(),Bt.stopImmediatePropagation()),Bt.key==="Escape"&&U&&(Bt.preventDefault(),Bt.stopImmediatePropagation(),it())},Ot=Bt=>{Bt.preventDefault(),C()},zt=()=>F(Bt=>({...Bt,azimuth:Bt.azimuth-15})),le=()=>F(Bt=>({...Bt,azimuth:Bt.azimuth+15})),re=()=>F(Bt=>({...Bt,zoom:Bt.zoom/1.2})),Se=()=>F(Bt=>({...Bt,zoom:Bt.zoom*1.2})),Ie=()=>E("top"),an=()=>{Ut(!1),A()},Ze=()=>{Ht(),Ut(),Ft()};n.addEventListener("visibilitychange",Ze),d?.addEventListener("change",an);async function pn(){pt=!0,mt();try{gt=await h.read(),!q&&!xt&&E("default",{initial:!0})}catch{q||Mt("Saved view unavailable")}finally{pt=!1,q||mt()}}async function rn(Bt){if(!(!T||!et()||pt)){pt=!0,Mt("Saving view\u2026"),mt();try{if(await h.write(Bt),q)return;gt=Bt,Bt||E("default"),Mt(Bt?"Default view saved":"Top down is the default")}catch{q||Mt("Could not save default view")}finally{pt=!1,q||mt()}}}let mn=()=>{$()&&T&&rn(T.getView())},cn=()=>rn(null);o.left?.addEventListener("click",zt),o.right?.addEventListener("click",le),o.out?.addEventListener("click",re),o.in?.addEventListener("click",Se),c?.addEventListener("click",Ie),l?.addEventListener("click",mn),u?.addEventListener("click",cn),r.addEventListener("change",lt),i.addEventListener("pointerdown",L),i.addEventListener("pointermove",tt),i.addEventListener("pointerup",nt),i.addEventListener("pointercancel",At),i.addEventListener("lostpointercapture",At),i.addEventListener("wheel",Rt,{passive:!1}),i.addEventListener("webglcontextlost",Ot),t.addEventListener("keydown",Tt,!0),t.addEventListener("roomcraft-editor-change",Q),t.addEventListener("roomcraft-editor-tool",J);let _n=new t.ResizeObserver(ft);_n.observe(s),E(z,{initial:!0});try{(t.location.hash==="#scene-settings"||m&&t.parent.location.hash==="#scene-settings")&&g.open()}catch{}return pn(),{getView:()=>T?.getView()??{...k},setView:E,dispose(){q=!0,Ft(),Ht(),n.removeEventListener("visibilitychange",Ze),d?.removeEventListener("change",an),it(),Ct.dispose(),z="plan",w(),_n.disconnect(),t.cancelAnimationFrame(V),T?.dispose(),T=void 0,x.remove(),v.remove(),b.remove(),g.dispose(),y?.dispose(),p?.dispose(),M&&(M.textContent=R),o.left?.removeEventListener("click",zt),o.right?.removeEventListener("click",le),o.out?.removeEventListener("click",re),o.in?.removeEventListener("click",Se),c?.removeEventListener("click",Ie),l?.removeEventListener("click",mn),u?.removeEventListener("click",cn),r.removeEventListener("change",lt),i.removeEventListener("pointerdown",L),i.removeEventListener("pointermove",tt),i.removeEventListener("pointerup",nt),i.removeEventListener("pointercancel",At),i.removeEventListener("lostpointercapture",At),i.removeEventListener("wheel",Rt),i.removeEventListener("webglcontextlost",Ot),t.removeEventListener("keydown",Tt,!0),t.removeEventListener("roomcraft-editor-change",Q),t.removeEventListener("roomcraft-editor-tool",J)}}}typeof window<"u"&&typeof document<"u"&&(window.RoomcraftPlanStructure=ld,C3(document,window),window.dispatchEvent(new Event("roomcraft-asset-loaded")));})();
