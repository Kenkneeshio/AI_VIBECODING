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
"use strict";(()=>{var mx=Object.create;var Cd=Object.defineProperty;var gx=Object.getOwnPropertyDescriptor;var yx=Object.getOwnPropertyNames;var xx=Object.getPrototypeOf,bx=Object.prototype.hasOwnProperty;var vx=(n,t)=>()=>{try{return t||n((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}};var _x=(n,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of yx(t))!bx.call(n,s)&&s!==e&&Cd(n,s,{get:()=>t[s],enumerable:!(i=gx(t,s))||i.enumerable});return n};var po=(n,t,e)=>(e=n!=null?mx(xx(n)):{},_x(t||!n||!n.__esModule?Cd(e,"default",{value:n,enumerable:!0}):e,n));var $r=vx((gf,yf)=>{(function(n,t){typeof gf=="object"&&typeof yf<"u"?yf.exports=t():typeof define=="function"&&define.amd?define(t):(n=typeof globalThis<"u"?globalThis:n||self,n.polygonClipping=t())})(gf,(function(){"use strict";/**
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
    ***************************************************************************** */function n(O,w){var E={label:0,sent:function(){if(k[0]&1)throw k[1];return k[1]},trys:[],ops:[]},C,D,k,et;return et={next:Z(0),throw:Z(1),return:Z(2)},typeof Symbol=="function"&&(et[Symbol.iterator]=function(){return this}),et;function Z(ut){return function(At){return gt([ut,At])}}function gt(ut){if(C)throw new TypeError("Generator is already executing.");for(;E;)try{if(C=1,D&&(k=ut[0]&2?D.return:ut[0]?D.throw||((k=D.return)&&k.call(D),0):D.next)&&!(k=k.call(D,ut[1])).done)return k;switch(D=0,k&&(ut=[ut[0]&2,k.value]),ut[0]){case 0:case 1:k=ut;break;case 4:return E.label++,{value:ut[1],done:!1};case 5:E.label++,D=ut[1],ut=[0];continue;case 7:ut=E.ops.pop(),E.trys.pop();continue;default:if(k=E.trys,!(k=k.length>0&&k[k.length-1])&&(ut[0]===6||ut[0]===2)){E=0;continue}if(ut[0]===3&&(!k||ut[1]>k[0]&&ut[1]<k[3])){E.label=ut[1];break}if(ut[0]===6&&E.label<k[1]){E.label=k[1],k=ut;break}if(k&&E.label<k[2]){E.label=k[2],E.ops.push(ut);break}k[2]&&E.ops.pop(),E.trys.pop();continue}ut=w.call(O,E)}catch(At){ut=[6,At],D=0}finally{C=k=0}if(ut[0]&5)throw ut[1];return{value:ut[0]?ut[1]:void 0,done:!0}}}var t=(function(){function O(w,E){this.next=null,this.key=w,this.data=E,this.left=null,this.right=null}return O})();function e(O,w){return O>w?1:O<w?-1:0}function i(O,w,E){for(var C=new t(null,null),D=C,k=C;;){var et=E(O,w.key);if(et<0){if(w.left===null)break;if(E(O,w.left.key)<0){var Z=w.left;if(w.left=Z.right,Z.right=w,w=Z,w.left===null)break}k.left=w,k=w,w=w.left}else if(et>0){if(w.right===null)break;if(E(O,w.right.key)>0){var Z=w.right;if(w.right=Z.left,Z.left=w,w=Z,w.right===null)break}D.right=w,D=w,w=w.right}else break}return D.right=w.left,k.left=w.right,w.left=C.right,w.right=C.left,w}function s(O,w,E,C){var D=new t(O,w);if(E===null)return D.left=D.right=null,D;E=i(O,E,C);var k=C(O,E.key);return k<0?(D.left=E.left,D.right=E,E.left=null):k>=0&&(D.right=E.right,D.left=E,E.right=null),D}function r(O,w,E){var C=null,D=null;if(w){w=i(O,w,E);var k=E(w.key,O);k===0?(C=w.left,D=w.right):k<0?(D=w.right,w.right=null,C=w):(C=w.left,w.left=null,D=w)}return{left:C,right:D}}function o(O,w,E){return w===null?O:(O===null||(w=i(O.key,w,E),w.left=O),w)}function a(O,w,E,C,D){if(O){C(""+w+(E?"\u2514\u2500\u2500 ":"\u251C\u2500\u2500 ")+D(O)+`
`);var k=w+(E?"    ":"\u2502   ");O.left&&a(O.left,k,!1,C,D),O.right&&a(O.right,k,!0,C,D)}}var c=(function(){function O(w){w===void 0&&(w=e),this._root=null,this._size=0,this._comparator=w}return O.prototype.insert=function(w,E){return this._size++,this._root=s(w,E,this._root,this._comparator)},O.prototype.add=function(w,E){var C=new t(w,E);this._root===null&&(C.left=C.right=null,this._size++,this._root=C);var D=this._comparator,k=i(w,this._root,D),et=D(w,k.key);return et===0?this._root=k:(et<0?(C.left=k.left,C.right=k,k.left=null):et>0&&(C.right=k.right,C.left=k,k.right=null),this._size++,this._root=C),this._root},O.prototype.remove=function(w){this._root=this._remove(w,this._root,this._comparator)},O.prototype._remove=function(w,E,C){var D;if(E===null)return null;E=i(w,E,C);var k=C(w,E.key);return k===0?(E.left===null?D=E.right:(D=i(w,E.left,C),D.right=E.right),this._size--,D):E},O.prototype.pop=function(){var w=this._root;if(w){for(;w.left;)w=w.left;return this._root=i(w.key,this._root,this._comparator),this._root=this._remove(w.key,this._root,this._comparator),{key:w.key,data:w.data}}return null},O.prototype.findStatic=function(w){for(var E=this._root,C=this._comparator;E;){var D=C(w,E.key);if(D===0)return E;D<0?E=E.left:E=E.right}return null},O.prototype.find=function(w){return this._root&&(this._root=i(w,this._root,this._comparator),this._comparator(w,this._root.key)!==0)?null:this._root},O.prototype.contains=function(w){for(var E=this._root,C=this._comparator;E;){var D=C(w,E.key);if(D===0)return!0;D<0?E=E.left:E=E.right}return!1},O.prototype.forEach=function(w,E){for(var C=this._root,D=[],k=!1;!k;)C!==null?(D.push(C),C=C.left):D.length!==0?(C=D.pop(),w.call(E,C),C=C.right):k=!0;return this},O.prototype.range=function(w,E,C,D){for(var k=[],et=this._comparator,Z=this._root,gt;k.length!==0||Z;)if(Z)k.push(Z),Z=Z.left;else{if(Z=k.pop(),gt=et(Z.key,E),gt>0)break;if(et(Z.key,w)>=0&&C.call(D,Z))return this;Z=Z.right}return this},O.prototype.keys=function(){var w=[];return this.forEach(function(E){var C=E.key;return w.push(C)}),w},O.prototype.values=function(){var w=[];return this.forEach(function(E){var C=E.data;return w.push(C)}),w},O.prototype.min=function(){return this._root?this.minNode(this._root).key:null},O.prototype.max=function(){return this._root?this.maxNode(this._root).key:null},O.prototype.minNode=function(w){if(w===void 0&&(w=this._root),w)for(;w.left;)w=w.left;return w},O.prototype.maxNode=function(w){if(w===void 0&&(w=this._root),w)for(;w.right;)w=w.right;return w},O.prototype.at=function(w){for(var E=this._root,C=!1,D=0,k=[];!C;)if(E)k.push(E),E=E.left;else if(k.length>0){if(E=k.pop(),D===w)return E;D++,E=E.right}else C=!0;return null},O.prototype.next=function(w){var E=this._root,C=null;if(w.right){for(C=w.right;C.left;)C=C.left;return C}for(var D=this._comparator;E;){var k=D(w.key,E.key);if(k===0)break;k<0?(C=E,E=E.left):E=E.right}return C},O.prototype.prev=function(w){var E=this._root,C=null;if(w.left!==null){for(C=w.left;C.right;)C=C.right;return C}for(var D=this._comparator;E;){var k=D(w.key,E.key);if(k===0)break;k<0?E=E.left:(C=E,E=E.right)}return C},O.prototype.clear=function(){return this._root=null,this._size=0,this},O.prototype.toList=function(){return f(this._root)},O.prototype.load=function(w,E,C){E===void 0&&(E=[]),C===void 0&&(C=!1);var D=w.length,k=this._comparator;if(C&&p(w,E,0,D-1,k),this._root===null)this._root=l(w,E,0,D),this._size=D;else{var et=d(this.toList(),u(w,E),k);D=this._size+D,this._root=h({head:et},0,D)}return this},O.prototype.isEmpty=function(){return this._root===null},Object.defineProperty(O.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(O.prototype,"root",{get:function(){return this._root},enumerable:!0,configurable:!0}),O.prototype.toString=function(w){w===void 0&&(w=function(C){return String(C.key)});var E=[];return a(this._root,"",!0,function(C){return E.push(C)},w),E.join("")},O.prototype.update=function(w,E,C){var D=this._comparator,k=r(w,this._root,D),et=k.left,Z=k.right;D(w,E)<0?Z=s(E,C,Z,D):et=s(E,C,et,D),this._root=o(et,Z,D)},O.prototype.split=function(w){return r(w,this._root,this._comparator)},O.prototype[Symbol.iterator]=function(){var w,E,C;return n(this,function(D){switch(D.label){case 0:w=this._root,E=[],C=!1,D.label=1;case 1:return C?[3,6]:w===null?[3,2]:(E.push(w),w=w.left,[3,5]);case 2:return E.length===0?[3,4]:(w=E.pop(),[4,w]);case 3:return D.sent(),w=w.right,[3,5];case 4:C=!0,D.label=5;case 5:return[3,1];case 6:return[2]}})},O})();function l(O,w,E,C){var D=C-E;if(D>0){var k=E+Math.floor(D/2),et=O[k],Z=w[k],gt=new t(et,Z);return gt.left=l(O,w,E,k),gt.right=l(O,w,k+1,C),gt}return null}function u(O,w){for(var E=new t(null,null),C=E,D=0;D<O.length;D++)C=C.next=new t(O[D],w[D]);return C.next=null,E.next}function f(O){for(var w=O,E=[],C=!1,D=new t(null,null),k=D;!C;)w?(E.push(w),w=w.left):E.length>0?(w=k=k.next=E.pop(),w=w.right):C=!0;return k.next=null,D.next}function h(O,w,E){var C=E-w;if(C>0){var D=w+Math.floor(C/2),k=h(O,w,D),et=O.head;return et.left=k,O.head=O.head.next,et.right=h(O,D+1,E),et}return null}function d(O,w,E){for(var C=new t(null,null),D=C,k=O,et=w;k!==null&&et!==null;)E(k.key,et.key)<0?(D.next=k,k=k.next):(D.next=et,et=et.next),D=D.next;return k!==null?D.next=k:et!==null&&(D.next=et),C.next}function p(O,w,E,C,D){if(!(E>=C)){for(var k=O[E+C>>1],et=E-1,Z=C+1;;){do et++;while(D(O[et],k)<0);do Z--;while(D(O[Z],k)>0);if(et>=Z)break;var gt=O[et];O[et]=O[Z],O[Z]=gt,gt=w[et],w[et]=w[Z],w[Z]=gt}p(O,w,E,Z,D),p(O,w,Z+1,C,D)}}let y=(O,w)=>O.ll.x<=w.x&&w.x<=O.ur.x&&O.ll.y<=w.y&&w.y<=O.ur.y,m=(O,w)=>{if(w.ur.x<O.ll.x||O.ur.x<w.ll.x||w.ur.y<O.ll.y||O.ur.y<w.ll.y)return null;let E=O.ll.x<w.ll.x?w.ll.x:O.ll.x,C=O.ur.x<w.ur.x?O.ur.x:w.ur.x,D=O.ll.y<w.ll.y?w.ll.y:O.ll.y,k=O.ur.y<w.ur.y?O.ur.y:w.ur.y;return{ll:{x:E,y:D},ur:{x:C,y:k}}},g=Number.EPSILON;g===void 0&&(g=Math.pow(2,-52));let x=g*g,v=(O,w)=>{if(-g<O&&O<g&&-g<w&&w<g)return 0;let E=O-w;return E*E<x*O*w?0:O<w?-1:1};class _{constructor(){this.reset()}reset(){this.xRounder=new b,this.yRounder=new b}round(w,E){return{x:this.xRounder.round(w),y:this.yRounder.round(E)}}}class b{constructor(){this.tree=new c,this.round(0)}round(w){let E=this.tree.add(w),C=this.tree.prev(E);if(C!==null&&v(E.key,C.key)===0)return this.tree.remove(w),C.key;let D=this.tree.next(E);return D!==null&&v(E.key,D.key)===0?(this.tree.remove(w),D.key):w}}let M=new _,T=11102230246251565e-32,S=134217729,R=(3+8*T)*T;function P(O,w,E,C,D){let k,et,Z,gt,ut=w[0],At=C[0],N=0,ht=0;At>ut==At>-ut?(k=ut,ut=w[++N]):(k=At,At=C[++ht]);let nt=0;if(N<O&&ht<E)for(At>ut==At>-ut?(et=ut+k,Z=k-(et-ut),ut=w[++N]):(et=At+k,Z=k-(et-At),At=C[++ht]),k=et,Z!==0&&(D[nt++]=Z);N<O&&ht<E;)At>ut==At>-ut?(et=k+ut,gt=et-k,Z=k-(et-gt)+(ut-gt),ut=w[++N]):(et=k+At,gt=et-k,Z=k-(et-gt)+(At-gt),At=C[++ht]),k=et,Z!==0&&(D[nt++]=Z);for(;N<O;)et=k+ut,gt=et-k,Z=k-(et-gt)+(ut-gt),ut=w[++N],k=et,Z!==0&&(D[nt++]=Z);for(;ht<E;)et=k+At,gt=et-k,Z=k-(et-gt)+(At-gt),At=C[++ht],k=et,Z!==0&&(D[nt++]=Z);return(k!==0||nt===0)&&(D[nt++]=k),nt}function I(O,w){let E=w[0];for(let C=1;C<O;C++)E+=w[C];return E}function F(O){return new Float64Array(O)}let H=(3+16*T)*T,B=(2+12*T)*T,Y=(9+64*T)*T*T,G=F(4),V=F(8),ft=F(12),J=F(16),W=F(4);function st(O,w,E,C,D,k,et){let Z,gt,ut,At,N,ht,nt,_t,Ct,wt,Dt,zt,oe,jt,fe,Ee,Ze,Ye,nn=O-D,sn=E-D,xn=w-k,un=C-k;jt=nn*un,ht=S*nn,nt=ht-(ht-nn),_t=nn-nt,ht=S*un,Ct=ht-(ht-un),wt=un-Ct,fe=_t*wt-(jt-nt*Ct-_t*Ct-nt*wt),Ee=xn*sn,ht=S*xn,nt=ht-(ht-xn),_t=xn-nt,ht=S*sn,Ct=ht-(ht-sn),wt=sn-Ct,Ze=_t*wt-(Ee-nt*Ct-_t*Ct-nt*wt),Dt=fe-Ze,N=fe-Dt,G[0]=fe-(Dt+N)+(N-Ze),zt=jt+Dt,N=zt-jt,oe=jt-(zt-N)+(Dt-N),Dt=oe-Ee,N=oe-Dt,G[1]=oe-(Dt+N)+(N-Ee),Ye=zt+Dt,N=Ye-zt,G[2]=zt-(Ye-N)+(Dt-N),G[3]=Ye;let bn=I(4,G),An=B*et;if(bn>=An||-bn>=An||(N=O-nn,Z=O-(nn+N)+(N-D),N=E-sn,ut=E-(sn+N)+(N-D),N=w-xn,gt=w-(xn+N)+(N-k),N=C-un,At=C-(un+N)+(N-k),Z===0&&gt===0&&ut===0&&At===0)||(An=Y*et+R*Math.abs(bn),bn+=nn*At+un*Z-(xn*ut+sn*gt),bn>=An||-bn>=An))return bn;jt=Z*un,ht=S*Z,nt=ht-(ht-Z),_t=Z-nt,ht=S*un,Ct=ht-(ht-un),wt=un-Ct,fe=_t*wt-(jt-nt*Ct-_t*Ct-nt*wt),Ee=gt*sn,ht=S*gt,nt=ht-(ht-gt),_t=gt-nt,ht=S*sn,Ct=ht-(ht-sn),wt=sn-Ct,Ze=_t*wt-(Ee-nt*Ct-_t*Ct-nt*wt),Dt=fe-Ze,N=fe-Dt,W[0]=fe-(Dt+N)+(N-Ze),zt=jt+Dt,N=zt-jt,oe=jt-(zt-N)+(Dt-N),Dt=oe-Ee,N=oe-Dt,W[1]=oe-(Dt+N)+(N-Ee),Ye=zt+Dt,N=Ye-zt,W[2]=zt-(Ye-N)+(Dt-N),W[3]=Ye;let Is=P(4,G,4,W,V);jt=nn*At,ht=S*nn,nt=ht-(ht-nn),_t=nn-nt,ht=S*At,Ct=ht-(ht-At),wt=At-Ct,fe=_t*wt-(jt-nt*Ct-_t*Ct-nt*wt),Ee=xn*ut,ht=S*xn,nt=ht-(ht-xn),_t=xn-nt,ht=S*ut,Ct=ht-(ht-ut),wt=ut-Ct,Ze=_t*wt-(Ee-nt*Ct-_t*Ct-nt*wt),Dt=fe-Ze,N=fe-Dt,W[0]=fe-(Dt+N)+(N-Ze),zt=jt+Dt,N=zt-jt,oe=jt-(zt-N)+(Dt-N),Dt=oe-Ee,N=oe-Dt,W[1]=oe-(Dt+N)+(N-Ee),Ye=zt+Dt,N=Ye-zt,W[2]=zt-(Ye-N)+(Dt-N),W[3]=Ye;let nr=P(Is,V,4,W,ft);jt=Z*At,ht=S*Z,nt=ht-(ht-Z),_t=Z-nt,ht=S*At,Ct=ht-(ht-At),wt=At-Ct,fe=_t*wt-(jt-nt*Ct-_t*Ct-nt*wt),Ee=gt*ut,ht=S*gt,nt=ht-(ht-gt),_t=gt-nt,ht=S*ut,Ct=ht-(ht-ut),wt=ut-Ct,Ze=_t*wt-(Ee-nt*Ct-_t*Ct-nt*wt),Dt=fe-Ze,N=fe-Dt,W[0]=fe-(Dt+N)+(N-Ze),zt=jt+Dt,N=zt-jt,oe=jt-(zt-N)+(Dt-N),Dt=oe-Ee,N=oe-Dt,W[1]=oe-(Dt+N)+(N-Ee),Ye=zt+Dt,N=Ye-zt,W[2]=zt-(Ye-N)+(Dt-N),W[3]=Ye;let Ps=P(nr,ft,4,W,J);return J[Ps-1]}function bt(O,w,E,C,D,k){let et=(w-k)*(E-D),Z=(O-D)*(C-k),gt=et-Z,ut=Math.abs(et+Z);return Math.abs(gt)>=H*ut?gt:-st(O,w,E,C,D,k,ut)}let Mt=(O,w)=>O.x*w.y-O.y*w.x,vt=(O,w)=>O.x*w.x+O.y*w.y,xt=(O,w,E)=>{let C=bt(O.x,O.y,w.x,w.y,E.x,E.y);return C>0?-1:C<0?1:0},yt=O=>Math.sqrt(vt(O,O)),$=(O,w,E)=>{let C={x:w.x-O.x,y:w.y-O.y},D={x:E.x-O.x,y:E.y-O.y};return Mt(D,C)/yt(D)/yt(C)},rt=(O,w,E)=>{let C={x:w.x-O.x,y:w.y-O.y},D={x:E.x-O.x,y:E.y-O.y};return vt(D,C)/yt(D)/yt(C)},Et=(O,w,E)=>w.y===0?null:{x:O.x+w.x/w.y*(E-O.y),y:E},Ut=(O,w,E)=>w.x===0?null:{x:E,y:O.y+w.y/w.x*(E-O.x)},It=(O,w,E,C)=>{if(w.x===0)return Ut(E,C,O.x);if(C.x===0)return Ut(O,w,E.x);if(w.y===0)return Et(E,C,O.y);if(C.y===0)return Et(O,w,E.y);let D=Mt(w,C);if(D==0)return null;let k={x:E.x-O.x,y:E.y-O.y},et=Mt(k,w)/D,Z=Mt(k,C)/D,gt=O.x+Z*w.x,ut=E.x+et*C.x,At=O.y+Z*w.y,N=E.y+et*C.y,ht=(gt+ut)/2,nt=(At+N)/2;return{x:ht,y:nt}};class Pt{static compare(w,E){let C=Pt.comparePoints(w.point,E.point);return C!==0?C:(w.point!==E.point&&w.link(E),w.isLeft!==E.isLeft?w.isLeft?1:-1:U.compare(w.segment,E.segment))}static comparePoints(w,E){return w.x<E.x?-1:w.x>E.x?1:w.y<E.y?-1:w.y>E.y?1:0}constructor(w,E){w.events===void 0?w.events=[this]:w.events.push(this),this.point=w,this.isLeft=E}link(w){if(w.point===this.point)throw new Error("Tried to link already linked events");let E=w.point.events;for(let C=0,D=E.length;C<D;C++){let k=E[C];this.point.events.push(k),k.point=this.point}this.checkForConsuming()}checkForConsuming(){let w=this.point.events.length;for(let E=0;E<w;E++){let C=this.point.events[E];if(C.segment.consumedBy===void 0)for(let D=E+1;D<w;D++){let k=this.point.events[D];k.consumedBy===void 0&&C.otherSE.point.events===k.otherSE.point.events&&C.segment.consume(k.segment)}}}getAvailableLinkedEvents(){let w=[];for(let E=0,C=this.point.events.length;E<C;E++){let D=this.point.events[E];D!==this&&!D.segment.ringOut&&D.segment.isInResult()&&w.push(D)}return w}getLeftmostComparator(w){let E=new Map,C=D=>{let k=D.otherSE;E.set(D,{sine:$(this.point,w.point,k.point),cosine:rt(this.point,w.point,k.point)})};return(D,k)=>{E.has(D)||C(D),E.has(k)||C(k);let{sine:et,cosine:Z}=E.get(D),{sine:gt,cosine:ut}=E.get(k);return et>=0&&gt>=0?Z<ut?1:Z>ut?-1:0:et<0&&gt<0?Z<ut?-1:Z>ut?1:0:gt<et?-1:gt>et?1:0}}}let $t=0;class U{static compare(w,E){let C=w.leftSE.point.x,D=E.leftSE.point.x,k=w.rightSE.point.x,et=E.rightSE.point.x;if(et<C)return 1;if(k<D)return-1;let Z=w.leftSE.point.y,gt=E.leftSE.point.y,ut=w.rightSE.point.y,At=E.rightSE.point.y;if(C<D){if(gt<Z&&gt<ut)return 1;if(gt>Z&&gt>ut)return-1;let N=w.comparePoint(E.leftSE.point);if(N<0)return 1;if(N>0)return-1;let ht=E.comparePoint(w.rightSE.point);return ht!==0?ht:-1}if(C>D){if(Z<gt&&Z<At)return-1;if(Z>gt&&Z>At)return 1;let N=E.comparePoint(w.leftSE.point);if(N!==0)return N;let ht=w.comparePoint(E.rightSE.point);return ht<0?1:ht>0?-1:1}if(Z<gt)return-1;if(Z>gt)return 1;if(k<et){let N=E.comparePoint(w.rightSE.point);if(N!==0)return N}if(k>et){let N=w.comparePoint(E.rightSE.point);if(N<0)return 1;if(N>0)return-1}if(k!==et){let N=ut-Z,ht=k-C,nt=At-gt,_t=et-D;if(N>ht&&nt<_t)return 1;if(N<ht&&nt>_t)return-1}return k>et?1:k<et||ut<At?-1:ut>At?1:w.id<E.id?-1:w.id>E.id?1:0}constructor(w,E,C,D){this.id=++$t,this.leftSE=w,w.segment=this,w.otherSE=E,this.rightSE=E,E.segment=this,E.otherSE=w,this.rings=C,this.windings=D}static fromRing(w,E,C){let D,k,et,Z=Pt.comparePoints(w,E);if(Z<0)D=w,k=E,et=1;else if(Z>0)D=E,k=w,et=-1;else throw new Error(`Tried to create degenerate segment at [${w.x}, ${w.y}]`);let gt=new Pt(D,!0),ut=new Pt(k,!1);return new U(gt,ut,[C],[et])}replaceRightSE(w){this.rightSE=w,this.rightSE.segment=this,this.rightSE.otherSE=this.leftSE,this.leftSE.otherSE=this.rightSE}bbox(){let w=this.leftSE.point.y,E=this.rightSE.point.y;return{ll:{x:this.leftSE.point.x,y:w<E?w:E},ur:{x:this.rightSE.point.x,y:w>E?w:E}}}vector(){return{x:this.rightSE.point.x-this.leftSE.point.x,y:this.rightSE.point.y-this.leftSE.point.y}}isAnEndpoint(w){return w.x===this.leftSE.point.x&&w.y===this.leftSE.point.y||w.x===this.rightSE.point.x&&w.y===this.rightSE.point.y}comparePoint(w){if(this.isAnEndpoint(w))return 0;let E=this.leftSE.point,C=this.rightSE.point,D=this.vector();if(E.x===C.x)return w.x===E.x?0:w.x<E.x?1:-1;let k=(w.y-E.y)/D.y,et=E.x+k*D.x;if(w.x===et)return 0;let Z=(w.x-E.x)/D.x,gt=E.y+Z*D.y;return w.y===gt?0:w.y<gt?-1:1}getIntersection(w){let E=this.bbox(),C=w.bbox(),D=m(E,C);if(D===null)return null;let k=this.leftSE.point,et=this.rightSE.point,Z=w.leftSE.point,gt=w.rightSE.point,ut=y(E,Z)&&this.comparePoint(Z)===0,At=y(C,k)&&w.comparePoint(k)===0,N=y(E,gt)&&this.comparePoint(gt)===0,ht=y(C,et)&&w.comparePoint(et)===0;if(At&&ut)return ht&&!N?et:!ht&&N?gt:null;if(At)return N&&k.x===gt.x&&k.y===gt.y?null:k;if(ut)return ht&&et.x===Z.x&&et.y===Z.y?null:Z;if(ht&&N)return null;if(ht)return et;if(N)return gt;let nt=It(k,this.vector(),Z,w.vector());return nt===null||!y(D,nt)?null:M.round(nt.x,nt.y)}split(w){let E=[],C=w.events!==void 0,D=new Pt(w,!0),k=new Pt(w,!1),et=this.rightSE;this.replaceRightSE(k),E.push(k),E.push(D);let Z=new U(D,et,this.rings.slice(),this.windings.slice());return Pt.comparePoints(Z.leftSE.point,Z.rightSE.point)>0&&Z.swapEvents(),Pt.comparePoints(this.leftSE.point,this.rightSE.point)>0&&this.swapEvents(),C&&(D.checkForConsuming(),k.checkForConsuming()),E}swapEvents(){let w=this.rightSE;this.rightSE=this.leftSE,this.leftSE=w,this.leftSE.isLeft=!0,this.rightSE.isLeft=!1;for(let E=0,C=this.windings.length;E<C;E++)this.windings[E]*=-1}consume(w){let E=this,C=w;for(;E.consumedBy;)E=E.consumedBy;for(;C.consumedBy;)C=C.consumedBy;let D=U.compare(E,C);if(D!==0){if(D>0){let k=E;E=C,C=k}if(E.prev===C){let k=E;E=C,C=k}for(let k=0,et=C.rings.length;k<et;k++){let Z=C.rings[k],gt=C.windings[k],ut=E.rings.indexOf(Z);ut===-1?(E.rings.push(Z),E.windings.push(gt)):E.windings[ut]+=gt}C.rings=null,C.windings=null,C.consumedBy=E,C.leftSE.consumedBy=E.leftSE,C.rightSE.consumedBy=E.rightSE}}prevInResult(){return this._prevInResult!==void 0?this._prevInResult:(this.prev?this.prev.isInResult()?this._prevInResult=this.prev:this._prevInResult=this.prev.prevInResult():this._prevInResult=null,this._prevInResult)}beforeState(){if(this._beforeState!==void 0)return this._beforeState;if(!this.prev)this._beforeState={rings:[],windings:[],multiPolys:[]};else{let w=this.prev.consumedBy||this.prev;this._beforeState=w.afterState()}return this._beforeState}afterState(){if(this._afterState!==void 0)return this._afterState;let w=this.beforeState();this._afterState={rings:w.rings.slice(0),windings:w.windings.slice(0),multiPolys:[]};let E=this._afterState.rings,C=this._afterState.windings,D=this._afterState.multiPolys;for(let Z=0,gt=this.rings.length;Z<gt;Z++){let ut=this.rings[Z],At=this.windings[Z],N=E.indexOf(ut);N===-1?(E.push(ut),C.push(At)):C[N]+=At}let k=[],et=[];for(let Z=0,gt=E.length;Z<gt;Z++){if(C[Z]===0)continue;let ut=E[Z],At=ut.poly;if(et.indexOf(At)===-1)if(ut.isExterior)k.push(At);else{et.indexOf(At)===-1&&et.push(At);let N=k.indexOf(ut.poly);N!==-1&&k.splice(N,1)}}for(let Z=0,gt=k.length;Z<gt;Z++){let ut=k[Z].multiPoly;D.indexOf(ut)===-1&&D.push(ut)}return this._afterState}isInResult(){if(this.consumedBy)return!1;if(this._isInResult!==void 0)return this._isInResult;let w=this.beforeState().multiPolys,E=this.afterState().multiPolys;switch(Bt.type){case"union":{let C=w.length===0,D=E.length===0;this._isInResult=C!==D;break}case"intersection":{let C,D;w.length<E.length?(C=w.length,D=E.length):(C=E.length,D=w.length),this._isInResult=D===Bt.numMultiPolys&&C<D;break}case"xor":{let C=Math.abs(w.length-E.length);this._isInResult=C%2===1;break}case"difference":{let C=D=>D.length===1&&D[0].isSubject;this._isInResult=C(w)!==C(E);break}default:throw new Error(`Unrecognized operation type found ${Bt.type}`)}return this._isInResult}}class it{constructor(w,E,C){if(!Array.isArray(w)||w.length===0)throw new Error("Input geometry is not a valid Polygon or MultiPolygon");if(this.poly=E,this.isExterior=C,this.segments=[],typeof w[0][0]!="number"||typeof w[0][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let D=M.round(w[0][0],w[0][1]);this.bbox={ll:{x:D.x,y:D.y},ur:{x:D.x,y:D.y}};let k=D;for(let et=1,Z=w.length;et<Z;et++){if(typeof w[et][0]!="number"||typeof w[et][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let gt=M.round(w[et][0],w[et][1]);gt.x===k.x&&gt.y===k.y||(this.segments.push(U.fromRing(k,gt,this)),gt.x<this.bbox.ll.x&&(this.bbox.ll.x=gt.x),gt.y<this.bbox.ll.y&&(this.bbox.ll.y=gt.y),gt.x>this.bbox.ur.x&&(this.bbox.ur.x=gt.x),gt.y>this.bbox.ur.y&&(this.bbox.ur.y=gt.y),k=gt)}(D.x!==k.x||D.y!==k.y)&&this.segments.push(U.fromRing(k,D,this))}getSweepEvents(){let w=[];for(let E=0,C=this.segments.length;E<C;E++){let D=this.segments[E];w.push(D.leftSE),w.push(D.rightSE)}return w}}class K{constructor(w,E){if(!Array.isArray(w))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");this.exteriorRing=new it(w[0],this,!0),this.bbox={ll:{x:this.exteriorRing.bbox.ll.x,y:this.exteriorRing.bbox.ll.y},ur:{x:this.exteriorRing.bbox.ur.x,y:this.exteriorRing.bbox.ur.y}},this.interiorRings=[];for(let C=1,D=w.length;C<D;C++){let k=new it(w[C],this,!1);k.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=k.bbox.ll.x),k.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=k.bbox.ll.y),k.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=k.bbox.ur.x),k.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=k.bbox.ur.y),this.interiorRings.push(k)}this.multiPoly=E}getSweepEvents(){let w=this.exteriorRing.getSweepEvents();for(let E=0,C=this.interiorRings.length;E<C;E++){let D=this.interiorRings[E].getSweepEvents();for(let k=0,et=D.length;k<et;k++)w.push(D[k])}return w}}class at{constructor(w,E){if(!Array.isArray(w))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");try{typeof w[0][0][0]=="number"&&(w=[w])}catch{}this.polys=[],this.bbox={ll:{x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY},ur:{x:Number.NEGATIVE_INFINITY,y:Number.NEGATIVE_INFINITY}};for(let C=0,D=w.length;C<D;C++){let k=new K(w[C],this);k.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=k.bbox.ll.x),k.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=k.bbox.ll.y),k.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=k.bbox.ur.x),k.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=k.bbox.ur.y),this.polys.push(k)}this.isSubject=E}getSweepEvents(){let w=[];for(let E=0,C=this.polys.length;E<C;E++){let D=this.polys[E].getSweepEvents();for(let k=0,et=D.length;k<et;k++)w.push(D[k])}return w}}class tt{static factory(w){let E=[];for(let C=0,D=w.length;C<D;C++){let k=w[C];if(!k.isInResult()||k.ringOut)continue;let et=null,Z=k.leftSE,gt=k.rightSE,ut=[Z],At=Z.point,N=[];for(;et=Z,Z=gt,ut.push(Z),Z.point!==At;)for(;;){let ht=Z.getAvailableLinkedEvents();if(ht.length===0){let Ct=ut[0].point,wt=ut[ut.length-1].point;throw new Error(`Unable to complete output ring starting at [${Ct.x}, ${Ct.y}]. Last matching segment found ends at [${wt.x}, ${wt.y}].`)}if(ht.length===1){gt=ht[0].otherSE;break}let nt=null;for(let Ct=0,wt=N.length;Ct<wt;Ct++)if(N[Ct].point===Z.point){nt=Ct;break}if(nt!==null){let Ct=N.splice(nt)[0],wt=ut.splice(Ct.index);wt.unshift(wt[0].otherSE),E.push(new tt(wt.reverse()));continue}N.push({index:ut.length,point:Z.point});let _t=Z.getLeftmostComparator(et);gt=ht.sort(_t)[0].otherSE;break}E.push(new tt(ut))}return E}constructor(w){this.events=w;for(let E=0,C=w.length;E<C;E++)w[E].segment.ringOut=this;this.poly=null}getGeom(){let w=this.events[0].point,E=[w];for(let ut=1,At=this.events.length-1;ut<At;ut++){let N=this.events[ut].point,ht=this.events[ut+1].point;xt(N,w,ht)!==0&&(E.push(N),w=N)}if(E.length===1)return null;let C=E[0],D=E[1];xt(C,w,D)===0&&E.shift(),E.push(E[0]);let k=this.isExteriorRing()?1:-1,et=this.isExteriorRing()?0:E.length-1,Z=this.isExteriorRing()?E.length:-1,gt=[];for(let ut=et;ut!=Z;ut+=k)gt.push([E[ut].x,E[ut].y]);return gt}isExteriorRing(){if(this._isExteriorRing===void 0){let w=this.enclosingRing();this._isExteriorRing=w?!w.isExteriorRing():!0}return this._isExteriorRing}enclosingRing(){return this._enclosingRing===void 0&&(this._enclosingRing=this._calcEnclosingRing()),this._enclosingRing}_calcEnclosingRing(){let w=this.events[0];for(let D=1,k=this.events.length;D<k;D++){let et=this.events[D];Pt.compare(w,et)>0&&(w=et)}let E=w.segment.prevInResult(),C=E?E.prevInResult():null;for(;;){if(!E)return null;if(!C)return E.ringOut;if(C.ringOut!==E.ringOut)return C.ringOut.enclosingRing()!==E.ringOut?E.ringOut:E.ringOut.enclosingRing();E=C.prevInResult(),C=E?E.prevInResult():null}}}class St{constructor(w){this.exteriorRing=w,w.poly=this,this.interiorRings=[]}addInterior(w){this.interiorRings.push(w),w.poly=this}getGeom(){let w=[this.exteriorRing.getGeom()];if(w[0]===null)return null;for(let E=0,C=this.interiorRings.length;E<C;E++){let D=this.interiorRings[E].getGeom();D!==null&&w.push(D)}return w}}class Tt{constructor(w){this.rings=w,this.polys=this._composePolys(w)}getGeom(){let w=[];for(let E=0,C=this.polys.length;E<C;E++){let D=this.polys[E].getGeom();D!==null&&w.push(D)}return w}_composePolys(w){let E=[];for(let C=0,D=w.length;C<D;C++){let k=w[C];if(!k.poly)if(k.isExteriorRing())E.push(new St(k));else{let et=k.enclosingRing();et.poly||E.push(new St(et)),et.poly.addInterior(k)}}return E}}class Rt{constructor(w){let E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:U.compare;this.queue=w,this.tree=new c(E),this.segments=[]}process(w){let E=w.segment,C=[];if(w.consumedBy)return w.isLeft?this.queue.remove(w.otherSE):this.tree.remove(E),C;let D=w.isLeft?this.tree.add(E):this.tree.find(E);if(!D)throw new Error(`Unable to find segment #${E.id} [${E.leftSE.point.x}, ${E.leftSE.point.y}] -> [${E.rightSE.point.x}, ${E.rightSE.point.y}] in SweepLine tree.`);let k=D,et=D,Z,gt;for(;Z===void 0;)k=this.tree.prev(k),k===null?Z=null:k.key.consumedBy===void 0&&(Z=k.key);for(;gt===void 0;)et=this.tree.next(et),et===null?gt=null:et.key.consumedBy===void 0&&(gt=et.key);if(w.isLeft){let ut=null;if(Z){let N=Z.getIntersection(E);if(N!==null&&(E.isAnEndpoint(N)||(ut=N),!Z.isAnEndpoint(N))){let ht=this._splitSafely(Z,N);for(let nt=0,_t=ht.length;nt<_t;nt++)C.push(ht[nt])}}let At=null;if(gt){let N=gt.getIntersection(E);if(N!==null&&(E.isAnEndpoint(N)||(At=N),!gt.isAnEndpoint(N))){let ht=this._splitSafely(gt,N);for(let nt=0,_t=ht.length;nt<_t;nt++)C.push(ht[nt])}}if(ut!==null||At!==null){let N=null;ut===null?N=At:At===null?N=ut:N=Pt.comparePoints(ut,At)<=0?ut:At,this.queue.remove(E.rightSE),C.push(E.rightSE);let ht=E.split(N);for(let nt=0,_t=ht.length;nt<_t;nt++)C.push(ht[nt])}C.length>0?(this.tree.remove(E),C.push(w)):(this.segments.push(E),E.prev=Z)}else{if(Z&&gt){let ut=Z.getIntersection(gt);if(ut!==null){if(!Z.isAnEndpoint(ut)){let At=this._splitSafely(Z,ut);for(let N=0,ht=At.length;N<ht;N++)C.push(At[N])}if(!gt.isAnEndpoint(ut)){let At=this._splitSafely(gt,ut);for(let N=0,ht=At.length;N<ht;N++)C.push(At[N])}}}this.tree.remove(E)}return C}_splitSafely(w,E){this.tree.remove(w);let C=w.rightSE;this.queue.remove(C);let D=w.split(E);return D.push(C),w.consumedBy===void 0&&this.tree.add(w),D}}let Lt=typeof process<"u"&&process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE||1e6,q=typeof process<"u"&&process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS||1e6;class Gt{run(w,E,C){Bt.type=w,M.reset();let D=[new at(E,!0)];for(let N=0,ht=C.length;N<ht;N++)D.push(new at(C[N],!1));if(Bt.numMultiPolys=D.length,Bt.type==="difference"){let N=D[0],ht=1;for(;ht<D.length;)m(D[ht].bbox,N.bbox)!==null?ht++:D.splice(ht,1)}if(Bt.type==="intersection")for(let N=0,ht=D.length;N<ht;N++){let nt=D[N];for(let _t=N+1,Ct=D.length;_t<Ct;_t++)if(m(nt.bbox,D[_t].bbox)===null)return[]}let k=new c(Pt.compare);for(let N=0,ht=D.length;N<ht;N++){let nt=D[N].getSweepEvents();for(let _t=0,Ct=nt.length;_t<Ct;_t++)if(k.insert(nt[_t]),k.size>Lt)throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big).")}let et=new Rt(k),Z=k.size,gt=k.pop();for(;gt;){let N=gt.key;if(k.size===Z){let nt=N.segment;throw new Error(`Unable to pop() ${N.isLeft?"left":"right"} SweepEvent [${N.point.x}, ${N.point.y}] from segment #${nt.id} [${nt.leftSE.point.x}, ${nt.leftSE.point.y}] -> [${nt.rightSE.point.x}, ${nt.rightSE.point.y}] from queue.`)}if(k.size>Lt)throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big).");if(et.segments.length>q)throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments).");let ht=et.process(N);for(let nt=0,_t=ht.length;nt<_t;nt++){let Ct=ht[nt];Ct.consumedBy===void 0&&k.insert(Ct)}Z=k.size,gt=k.pop()}M.reset();let ut=tt.factory(et.segments);return new Tt(ut).getGeom()}}let Bt=new Gt;var lt={union:function(O){for(var w=arguments.length,E=new Array(w>1?w-1:0),C=1;C<w;C++)E[C-1]=arguments[C];return Bt.run("union",O,E)},intersection:function(O){for(var w=arguments.length,E=new Array(w>1?w-1:0),C=1;C<w;C++)E[C-1]=arguments[C];return Bt.run("intersection",O,E)},xor:function(O){for(var w=arguments.length,E=new Array(w>1?w-1:0),C=1;C<w;C++)E[C-1]=arguments[C];return Bt.run("xor",O,E)},difference:function(O){for(var w=arguments.length,E=new Array(w>1?w-1:0),C=1;C<w;C++)E[C-1]=arguments[C];return Bt.run("difference",O,E)}};return lt}))});/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var gp=0,Ah=1,yp=2;var Rh=0,ys=1,xp=2,zr=3,xs=0,Pn=1,We=2,Ai=0,Hr=1,Wi=2,Ch=3,Ih=4,bp=5;var Ws=100,vp=101,_p=102,Mp=103,Sp=104,wp=200,Ep=201,Tp=202,Ap=203,Ph=204,Lh=205,Rp=206,Cp=207,Ip=208,Pp=209,Lp=210,Np=211,Dp=212,Fp=213,Up=214,gc=0,yc=1,xc=2,Sr=3,bc=4,vc=5,wr=6,_c=7,Kc=0,kp=1,Op=2,hi=0,Nh=1,Dh=2,Fh=3,aa=4,Uh=5,kh=6,Oh=7;var Bh=300,bs=301,Xs=302,Jc=303,Qc=304,ca=306,ks=1e3,_i=1001,Mc=1002,on=1003,Bp=1004;var la=1005;var fn=1006,tl=1007;var vs=1008;var kn=1009,zh=1010,Hh=1011,Gr=1012,el=1013,fi=1014,Kn=1015,di=1016,nl=1017,il=1018,Vr=1020,Gh=35902,Vh=35899,Wh=1021,Xh=1022,Jn=1023,Si=1026,_s=1027,sl=1028,rl=1029,Ms=1030,ol=1031;var al=1033,ua=33776,ha=33777,fa=33778,da=33779,cl=35840,ll=35841,ul=35842,hl=35843,fl=36196,dl=37492,pl=37496,ml=37488,gl=37489,pa=37490,yl=37491,xl=37808,bl=37809,vl=37810,_l=37811,Ml=37812,Sl=37813,wl=37814,El=37815,Tl=37816,Al=37817,Rl=37818,Cl=37819,Il=37820,Pl=37821,Ll=36492,Nl=36494,Dl=36495,Fl=36283,Ul=36284,ma=36285,kl=36286;var Ao=2300,Sc=2301,pc=2302,ph=2303,mh=2400,gh=2401,yh=2402;var zp=3200;var ga=0,Hp=1,Xi="",Ge="srgb",Ro="srgb-linear",Co="linear",Te="srgb";var mc=7680;var Gp=519,Vp=512,Wp=513,Xp=514,Ol=515,qp=516,Yp=517,Bl=518,$p=519,qh=35044,Ln=35048;var Yh="300 es",ci=2e3,Er=2001;function Mx(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Sx(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Io(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Zp(){let n=Io("canvas");return n.style.display="block",n}var Id={},Tr=null;function Po(...n){let t="THREE."+n.shift();Tr?Tr("log",t,...n):console.log(t,...n)}function jp(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function se(...n){n=jp(n);let t="THREE."+n.shift();if(Tr)Tr("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ae(...n){n=jp(n);let t="THREE."+n.shift();if(Tr)Tr("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Us(...n){let t=n.join(" ");t in Id||(Id[t]=!0,se(...n))}function Kp(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Jp={[gc]:yc,[xc]:wr,[bc]:_c,[Sr]:vc,[yc]:gc,[wr]:xc,[_c]:bc,[vc]:Sr},wi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pd=1234567,So=Math.PI/180,Ar=180/Math.PI;function Mi(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(vn[n&255]+vn[n>>8&255]+vn[n>>16&255]+vn[n>>24&255]+"-"+vn[t&255]+vn[t>>8&255]+"-"+vn[t>>16&15|64]+vn[t>>24&255]+"-"+vn[e&63|128]+vn[e>>8&255]+"-"+vn[e>>16&255]+vn[e>>24&255]+vn[i&255]+vn[i>>8&255]+vn[i>>16&255]+vn[i>>24&255]).toLowerCase()}function le(n,t,e){return Math.max(t,Math.min(e,n))}function $h(n,t){return(n%t+t)%t}function wx(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Ex(n,t,e){return n!==t?(e-n)/(t-n):0}function wo(n,t,e){return(1-e)*n+e*t}function Tx(n,t,e,i){return wo(n,t,1-Math.exp(-e*i))}function Ax(n,t=1){return t-Math.abs($h(n,t*2)-t)}function Rx(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Cx(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Ix(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Px(n,t){return n+Math.random()*(t-n)}function Lx(n){return n*(.5-Math.random())}function Nx(n){n!==void 0&&(Pd=n);let t=Pd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Dx(n){return n*So}function Fx(n){return n*Ar}function Ux(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function kx(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ox(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Bx(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+i)/2),u=o((t+i)/2),f=r((t-i)/2),h=o((t-i)/2),d=r((i-t)/2),p=o((i-t)/2);switch(s){case"XYX":n.set(a*u,c*f,c*h,a*l);break;case"YZY":n.set(c*h,a*u,c*f,a*l);break;case"ZXZ":n.set(c*f,c*h,a*u,a*l);break;case"XZX":n.set(a*u,c*p,c*d,a*l);break;case"YXY":n.set(c*d,a*u,c*p,a*l);break;case"ZYZ":n.set(c*p,c*d,a*u,a*l);break;default:se("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ai(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ie(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var te={DEG2RAD:So,RAD2DEG:Ar,generateUUID:Mi,clamp:le,euclideanModulo:$h,mapLinear:wx,inverseLerp:Ex,lerp:wo,damp:Tx,pingpong:Ax,smoothstep:Rx,smootherstep:Cx,randInt:Ix,randFloat:Px,randFloatSpread:Lx,seededRandom:Nx,degToRad:Dx,radToDeg:Fx,isPowerOfTwo:Ux,ceilPowerOfTwo:kx,floorPowerOfTwo:Ox,setQuaternionFromProperEuler:Bx,normalize:Ie,denormalize:ai},Ot=class n{static{n.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(le(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(le(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},an=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],f=i[s+3],h=r[o+0],d=r[o+1],p=r[o+2],y=r[o+3];if(f!==y||c!==h||l!==d||u!==p){let m=c*h+l*d+u*p+f*y;m<0&&(h=-h,d=-d,p=-p,y=-y,m=-m);let g=1-a;if(m<.9995){let x=Math.acos(m),v=Math.sin(x);g=Math.sin(g*x)/v,a=Math.sin(a*x)/v,c=c*g+h*a,l=l*g+d*a,u=u*g+p*a,f=f*g+y*a}else{c=c*g+h*a,l=l*g+d*a,u=u*g+p*a,f=f*g+y*a;let x=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=x,l*=x,u*=x,f*=x}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],f=r[o],h=r[o+1],d=r[o+2],p=r[o+3];return t[e]=a*p+u*f+c*d-l*h,t[e+1]=c*p+u*h+l*f-a*d,t[e+2]=l*p+u*d+a*h-c*f,t[e+3]=u*p-a*f-c*h-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),f=a(r/2),h=c(i/2),d=c(s/2),p=c(r/2);switch(o){case"XYZ":this._x=h*u*f+l*d*p,this._y=l*d*f-h*u*p,this._z=l*u*p+h*d*f,this._w=l*u*f-h*d*p;break;case"YXZ":this._x=h*u*f+l*d*p,this._y=l*d*f-h*u*p,this._z=l*u*p-h*d*f,this._w=l*u*f+h*d*p;break;case"ZXY":this._x=h*u*f-l*d*p,this._y=l*d*f+h*u*p,this._z=l*u*p+h*d*f,this._w=l*u*f-h*d*p;break;case"ZYX":this._x=h*u*f-l*d*p,this._y=l*d*f+h*u*p,this._z=l*u*p-h*d*f,this._w=l*u*f+h*d*p;break;case"YZX":this._x=h*u*f+l*d*p,this._y=l*d*f+h*u*p,this._z=l*u*p-h*d*f,this._w=l*u*f-h*d*p;break;case"XZY":this._x=h*u*f-l*d*p,this._y=l*d*f-h*u*p,this._z=l*u*p+h*d*f,this._w=l*u*f+h*d*p;break;default:se("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],f=e[10],h=i+a+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(i>a&&i>f){let d=2*Math.sqrt(1+i-a-f);this._w=(u-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>f){let d=2*Math.sqrt(1+a-i-f);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+f-i-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(le(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},X=class n{static{n.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ld.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ld.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),u=2*(a*e-r*s),f=2*(r*i-o*e);return this.x=e+c*l+o*f-a*u,this.y=i+c*u+a*l-r*f,this.z=s+c*f+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(le(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Gu.copy(this).projectOnVector(t),this.sub(Gu)}reflect(t){return this.sub(Gu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(le(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Gu=new X,Ld=new an,ue=class n{static{n.prototype.isMatrix3=!0}constructor(t,e,i,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],f=i[7],h=i[2],d=i[5],p=i[8],y=s[0],m=s[3],g=s[6],x=s[1],v=s[4],_=s[7],b=s[2],M=s[5],T=s[8];return r[0]=o*y+a*x+c*b,r[3]=o*m+a*v+c*M,r[6]=o*g+a*_+c*T,r[1]=l*y+u*x+f*b,r[4]=l*m+u*v+f*M,r[7]=l*g+u*_+f*T,r[2]=h*y+d*x+p*b,r[5]=h*m+d*v+p*M,r[8]=h*g+d*_+p*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=u*o-a*l,h=a*c-u*r,d=l*r-o*c,p=e*f+i*h+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/p;return t[0]=f*y,t[1]=(s*l-u*i)*y,t[2]=(a*i-s*o)*y,t[3]=h*y,t[4]=(u*e-s*c)*y,t[5]=(s*r-a*e)*y,t[6]=d*y,t[7]=(i*c-l*e)*y,t[8]=(o*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return Us("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Vu.makeScale(t,e)),this}rotate(t){return Us("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Vu.makeRotation(-t)),this}translate(t,e){return Us("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Vu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Vu=new ue,Nd=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dd=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zx(){let n={enabled:!0,workingColorSpace:Ro,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Te&&(s.r=Gi(s.r),s.g=Gi(s.g),s.b=Gi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Te&&(s.r=Mr(s.r),s.g=Mr(s.g),s.b=Mr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Xi?Co:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Us("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Us("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ro]:{primaries:t,whitePoint:i,transfer:Co,toXYZ:Nd,fromXYZ:Dd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ge},outputColorSpaceConfig:{drawingBufferColorSpace:Ge}},[Ge]:{primaries:t,whitePoint:i,transfer:Te,toXYZ:Nd,fromXYZ:Dd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ge}}}),n}var ye=zx();function Gi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Mr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var or,wc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{or===void 0&&(or=Io("canvas")),or.width=t.width,or.height=t.height;let s=or.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=or}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Io("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Gi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Gi(e[i]/255)*255):e[i]=Gi(e[i]);return{data:e,width:t.width,height:t.height}}else return se("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Hx=0,Rr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Hx++}),this.uuid=Mi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Wu(s[o].image)):r.push(Wu(s[o]))}else r=Wu(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Wu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?wc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(se("Texture: Unable to serialize Texture."),{})}var Gx=0,Xu=new X,dn=class n extends wi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=_i,s=_i,r=fn,o=vs,a=Jn,c=kn,l=n.DEFAULT_ANISOTROPY,u=Xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gx++}),this.uuid=Mi(),this.name="",this.source=new Rr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Xu).x}get height(){return this.source.getSize(Xu).y}get depth(){return this.source.getSize(Xu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){se(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){se(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ks:t.x=t.x-Math.floor(t.x);break;case _i:t.x=t.x<0?0:1;break;case Mc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ks:t.y=t.y-Math.floor(t.y);break;case _i:t.y=t.y<0?0:1;break;case Mc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Bh;dn.DEFAULT_ANISOTROPY=1;var Ae=class n{static{n.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],p=c[9],y=c[2],m=c[6],g=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-y)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+y)<.1&&Math.abs(p+m)<.1&&Math.abs(l+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(l+1)/2,_=(d+1)/2,b=(g+1)/2,M=(u+h)/4,T=(f+y)/4,S=(p+m)/4;return v>_&&v>b?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=M/i,r=T/i):_>b?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=M/s,r=S/s):b<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),i=T/r,s=S/r),this.set(i,s,r,e),this}let x=Math.sqrt((m-p)*(m-p)+(f-y)*(f-y)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(m-p)/x,this.y=(f-y)/x,this.z=(h-u)/x,this.w=Math.acos((l+d+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this.w=le(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this.w=le(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(le(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ec=class extends wi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new dn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Rr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Un=class extends Ec{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Lo=class extends dn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Tc=class extends dn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var be=class n{static{n.prototype.isMatrix4=!0}constructor(t,e,i,s,r,o,a,c,l,u,f,h,d,p,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,u,f,h,d,p,y,m)}set(t,e,i,s,r,o,a,c,l,u,f,h,d,p,y,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=u,g[10]=f,g[14]=h,g[3]=d,g[7]=p,g[11]=y,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/ar.setFromMatrixColumn(t,0).length(),r=1/ar.setFromMatrixColumn(t,1).length(),o=1/ar.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let h=o*u,d=o*f,p=a*u,y=a*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=d+p*l,e[5]=h-y*l,e[9]=-a*c,e[2]=y-h*l,e[6]=p+d*l,e[10]=o*c}else if(t.order==="YXZ"){let h=c*u,d=c*f,p=l*u,y=l*f;e[0]=h+y*a,e[4]=p*a-d,e[8]=o*l,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-p,e[6]=y+h*a,e[10]=o*c}else if(t.order==="ZXY"){let h=c*u,d=c*f,p=l*u,y=l*f;e[0]=h-y*a,e[4]=-o*f,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*u,e[9]=y-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let h=o*u,d=o*f,p=a*u,y=a*f;e[0]=c*u,e[4]=p*l-d,e[8]=h*l+y,e[1]=c*f,e[5]=y*l+h,e[9]=d*l-p,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let h=o*c,d=o*l,p=a*c,y=a*l;e[0]=c*u,e[4]=y-h*f,e[8]=p*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*f+p,e[10]=h-y*f}else if(t.order==="XZY"){let h=o*c,d=o*l,p=a*c,y=a*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=h*f+y,e[5]=o*u,e[9]=d*f-p,e[2]=p*f-d,e[6]=a*u,e[10]=y*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vx,t,Wx)}lookAt(t,e,i){let s=this.elements;return zn.subVectors(t,e),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),es.crossVectors(i,zn),es.lengthSq()===0&&(Math.abs(i.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),es.crossVectors(i,zn)),es.normalize(),Ha.crossVectors(zn,es),s[0]=es.x,s[4]=Ha.x,s[8]=zn.x,s[1]=es.y,s[5]=Ha.y,s[9]=zn.y,s[2]=es.z,s[6]=Ha.z,s[10]=zn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],f=i[5],h=i[9],d=i[13],p=i[2],y=i[6],m=i[10],g=i[14],x=i[3],v=i[7],_=i[11],b=i[15],M=s[0],T=s[4],S=s[8],R=s[12],P=s[1],I=s[5],F=s[9],H=s[13],B=s[2],Y=s[6],G=s[10],V=s[14],ft=s[3],J=s[7],W=s[11],st=s[15];return r[0]=o*M+a*P+c*B+l*ft,r[4]=o*T+a*I+c*Y+l*J,r[8]=o*S+a*F+c*G+l*W,r[12]=o*R+a*H+c*V+l*st,r[1]=u*M+f*P+h*B+d*ft,r[5]=u*T+f*I+h*Y+d*J,r[9]=u*S+f*F+h*G+d*W,r[13]=u*R+f*H+h*V+d*st,r[2]=p*M+y*P+m*B+g*ft,r[6]=p*T+y*I+m*Y+g*J,r[10]=p*S+y*F+m*G+g*W,r[14]=p*R+y*H+m*V+g*st,r[3]=x*M+v*P+_*B+b*ft,r[7]=x*T+v*I+_*Y+b*J,r[11]=x*S+v*F+_*G+b*W,r[15]=x*R+v*H+_*V+b*st,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],f=t[6],h=t[10],d=t[14],p=t[3],y=t[7],m=t[11],g=t[15],x=c*d-l*h,v=a*d-l*f,_=a*h-c*f,b=o*d-l*u,M=o*h-c*u,T=o*f-a*u;return e*(y*x-m*v+g*_)-i*(p*x-m*b+g*M)+s*(p*v-y*b+g*T)-r*(p*_-y*M+m*T)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],u=t[10];return e*(o*u-a*l)-i*(r*u-a*c)+s*(r*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],d=t[11],p=t[12],y=t[13],m=t[14],g=t[15],x=e*a-i*o,v=e*c-s*o,_=e*l-r*o,b=i*c-s*a,M=i*l-r*a,T=s*l-r*c,S=u*y-f*p,R=u*m-h*p,P=u*g-d*p,I=f*m-h*y,F=f*g-d*y,H=h*g-d*m,B=x*H-v*F+_*I+b*P-M*R+T*S;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Y=1/B;return t[0]=(a*H-c*F+l*I)*Y,t[1]=(s*F-i*H-r*I)*Y,t[2]=(y*T-m*M+g*b)*Y,t[3]=(h*M-f*T-d*b)*Y,t[4]=(c*P-o*H-l*R)*Y,t[5]=(e*H-s*P+r*R)*Y,t[6]=(m*_-p*T-g*v)*Y,t[7]=(u*T-h*_+d*v)*Y,t[8]=(o*F-a*P+l*S)*Y,t[9]=(i*P-e*F-r*S)*Y,t[10]=(p*M-y*_+g*x)*Y,t[11]=(f*_-u*M-d*x)*Y,t[12]=(a*R-o*I-c*S)*Y,t[13]=(e*I-i*R+s*S)*Y,t[14]=(y*v-p*b-m*x)*Y,t[15]=(u*b-f*v+h*x)*Y,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,f=a+a,h=r*l,d=r*u,p=r*f,y=o*u,m=o*f,g=a*f,x=c*l,v=c*u,_=c*f,b=i.x,M=i.y,T=i.z;return s[0]=(1-(y+g))*b,s[1]=(d+_)*b,s[2]=(p-v)*b,s[3]=0,s[4]=(d-_)*M,s[5]=(1-(h+g))*M,s[6]=(m+x)*M,s[7]=0,s[8]=(p+v)*T,s[9]=(m-x)*T,s[10]=(1-(h+y))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=ar.set(s[0],s[1],s[2]).length(),a=ar.set(s[4],s[5],s[6]).length(),c=ar.set(s[8],s[9],s[10]).length();r<0&&(o=-o),si.copy(this);let l=1/o,u=1/a,f=1/c;return si.elements[0]*=l,si.elements[1]*=l,si.elements[2]*=l,si.elements[4]*=u,si.elements[5]*=u,si.elements[6]*=u,si.elements[8]*=f,si.elements[9]*=f,si.elements[10]*=f,e.setFromRotationMatrix(si),i.x=o,i.y=a,i.z=c,this}makePerspective(t,e,i,s,r,o,a=ci,c=!1){let l=this.elements,u=2*r/(e-t),f=2*r/(i-s),h=(e+t)/(e-t),d=(i+s)/(i-s),p,y;if(c)p=r/(o-r),y=o*r/(o-r);else if(a===ci)p=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===Er)p=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=ci,c=!1){let l=this.elements,u=2/(e-t),f=2/(i-s),h=-(e+t)/(e-t),d=-(i+s)/(i-s),p,y;if(c)p=1/(o-r),y=o/(o-r);else if(a===ci)p=-2/(o-r),y=-(o+r)/(o-r);else if(a===Er)p=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=p,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},ar=new X,si=new be,Vx=new X(0,0,0),Wx=new X(1,1,1),es=new X,Ha=new X,zn=new X,Fd=new be,Ud=new an,Ei=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-le(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-le(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(le(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:se("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Fd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ud.setFromEuler(this),this.setFromQuaternion(Ud,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ei.DEFAULT_ORDER="XYZ";var Cr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Xx=0,kd=new X,cr=new an,ki=new be,Ga=new X,mo=new X,qx=new X,Yx=new an,Od=new X(1,0,0),Bd=new X(0,1,0),zd=new X(0,0,1),Hd={type:"added"},$x={type:"removed"},lr={type:"childadded",child:null},qu={type:"childremoved",child:null},Be=class n extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xx++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new X,e=new Ei,i=new an,s=new X(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new be},normalMatrix:{value:new ue}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return cr.setFromAxisAngle(t,e),this.quaternion.multiply(cr),this}rotateOnWorldAxis(t,e){return cr.setFromAxisAngle(t,e),this.quaternion.premultiply(cr),this}rotateX(t){return this.rotateOnAxis(Od,t)}rotateY(t){return this.rotateOnAxis(Bd,t)}rotateZ(t){return this.rotateOnAxis(zd,t)}translateOnAxis(t,e){return kd.copy(t).applyQuaternion(this.quaternion),this.position.add(kd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Od,t)}translateY(t){return this.translateOnAxis(Bd,t)}translateZ(t){return this.translateOnAxis(zd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ga.copy(t):Ga.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(mo,Ga,this.up):ki.lookAt(Ga,mo,this.up),this.quaternion.setFromRotationMatrix(ki),s&&(ki.extractRotation(s.matrixWorld),cr.setFromRotationMatrix(ki),this.quaternion.premultiply(cr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ae("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hd),lr.child=t,this.dispatchEvent(lr),lr.child=null):ae("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($x),qu.child=t,this.dispatchEvent(qu),qu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ki.multiply(t.parent.matrixWorld)),t.applyMatrix4(ki),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hd),lr.child=t,this.dispatchEvent(lr),lr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,t,qx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,Yx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Be.DEFAULT_UP=new X(0,1,0);Be.DEFAULT_MATRIX_AUTO_UPDATE=!0;Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Jt=class extends Be{constructor(){super(),this.isGroup=!0,this.type="Group"}},Zx={type:"move"},Ir=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,i),g=this._getHandJoint(l,y);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,p=.005;l.inputState.pinching&&h>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Zx)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Jt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Qp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},Va={h:0,s:0,l:0};function Yu(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Wt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ye.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=ye.workingColorSpace){return this.r=t,this.g=e,this.b=i,ye.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=ye.workingColorSpace){if(t=$h(t,1),e=le(e,0,1),i=le(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Yu(o,r,t+1/3),this.g=Yu(o,r,t),this.b=Yu(o,r,t-1/3)}return ye.colorSpaceToWorking(this,s),this}setStyle(t,e=Ge){function i(r){r!==void 0&&parseFloat(r)<1&&se("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:se("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);se("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ge){let i=Qp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):se("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gi(t.r),this.g=Gi(t.g),this.b=Gi(t.b),this}copyLinearToSRGB(t){return this.r=Mr(t.r),this.g=Mr(t.g),this.b=Mr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ge){return ye.workingToColorSpace(_n.copy(this),t),Math.round(le(_n.r*255,0,255))*65536+Math.round(le(_n.g*255,0,255))*256+Math.round(le(_n.b*255,0,255))}getHexString(t=Ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ye.workingColorSpace){ye.workingToColorSpace(_n.copy(this),e);let i=_n.r,s=_n.g,r=_n.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case i:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-i)/f+2;break;case r:c=(i-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ye.workingColorSpace){return ye.workingToColorSpace(_n.copy(this),e),t.r=_n.r,t.g=_n.g,t.b=_n.b,t}getStyle(t=Ge){ye.workingToColorSpace(_n.copy(this),t);let e=_n.r,i=_n.g,s=_n.b;return t!==Ge?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ns),this.setHSL(ns.h+t,ns.s+e,ns.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ns),t.getHSL(Va);let i=wo(ns.h,Va.h,e),s=wo(ns.s,Va.s,e),r=wo(ns.l,Va.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_n=new Wt;Wt.NAMES=Qp;var No=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Wt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Vi=class extends Be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ri=new X,Oi=new X,$u=new X,Bi=new X,ur=new X,hr=new X,Gd=new X,Zu=new X,ju=new X,Ku=new X,Ju=new Ae,Qu=new Ae,th=new Ae,os=class n{constructor(t=new X,e=new X,i=new X){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),ri.subVectors(t,e),s.cross(ri);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){ri.subVectors(s,e),Oi.subVectors(i,e),$u.subVectors(t,e);let o=ri.dot(ri),a=ri.dot(Oi),c=ri.dot($u),l=Oi.dot(Oi),u=Oi.dot($u),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;let h=1/f,d=(l*c-a*u)*h,p=(o*u-a*c)*h;return r.set(1-d-p,p,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,Bi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Bi.x),c.addScaledVector(o,Bi.y),c.addScaledVector(a,Bi.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return Ju.setScalar(0),Qu.setScalar(0),th.setScalar(0),Ju.fromBufferAttribute(t,e),Qu.fromBufferAttribute(t,i),th.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ju,r.x),o.addScaledVector(Qu,r.y),o.addScaledVector(th,r.z),o}static isFrontFacing(t,e,i,s){return ri.subVectors(i,e),Oi.subVectors(t,e),ri.cross(Oi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ri.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),ri.cross(Oi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;ur.subVectors(s,i),hr.subVectors(r,i),Zu.subVectors(t,i);let c=ur.dot(Zu),l=hr.dot(Zu);if(c<=0&&l<=0)return e.copy(i);ju.subVectors(t,s);let u=ur.dot(ju),f=hr.dot(ju);if(u>=0&&f<=u)return e.copy(s);let h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(ur,o);Ku.subVectors(t,r);let d=ur.dot(Ku),p=hr.dot(Ku);if(p>=0&&d<=p)return e.copy(r);let y=d*l-c*p;if(y<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(i).addScaledVector(hr,a);let m=u*p-d*f;if(m<=0&&f-u>=0&&d-p>=0)return Gd.subVectors(r,s),a=(f-u)/(f-u+(d-p)),e.copy(s).addScaledVector(Gd,a);let g=1/(m+y+h);return o=y*g,a=h*g,e.copy(i).addScaledVector(ur,o).addScaledVector(hr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Le=class{constructor(t=new X(1/0,1/0,1/0),e=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(oi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(oi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=oi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,oi):oi.fromBufferAttribute(r,o),oi.applyMatrix4(t.matrixWorld),this.expandByPoint(oi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wa.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wa.copy(i.boundingBox)),Wa.applyMatrix4(t.matrixWorld),this.union(Wa)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,oi),oi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(go),Xa.subVectors(this.max,go),fr.subVectors(t.a,go),dr.subVectors(t.b,go),pr.subVectors(t.c,go),is.subVectors(dr,fr),ss.subVectors(pr,dr),Ls.subVectors(fr,pr);let e=[0,-is.z,is.y,0,-ss.z,ss.y,0,-Ls.z,Ls.y,is.z,0,-is.x,ss.z,0,-ss.x,Ls.z,0,-Ls.x,-is.y,is.x,0,-ss.y,ss.x,0,-Ls.y,Ls.x,0];return!eh(e,fr,dr,pr,Xa)||(e=[1,0,0,0,1,0,0,0,1],!eh(e,fr,dr,pr,Xa))?!1:(qa.crossVectors(is,ss),e=[qa.x,qa.y,qa.z],eh(e,fr,dr,pr,Xa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,oi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(oi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},zi=[new X,new X,new X,new X,new X,new X,new X,new X],oi=new X,Wa=new Le,fr=new X,dr=new X,pr=new X,is=new X,ss=new X,Ls=new X,go=new X,Xa=new X,qa=new X,Ns=new X;function eh(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ns.fromArray(n,r);let a=s.x*Math.abs(Ns.x)+s.y*Math.abs(Ns.y)+s.z*Math.abs(Ns.z),c=t.dot(Ns),l=e.dot(Ns),u=i.dot(Ns);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var je=new X,Ya=new Ot,jx=0,Me=class extends wi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jx++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=qh,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ya.fromBufferAttribute(this,e),Ya.applyMatrix3(t),this.setXY(e,Ya.x,Ya.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.applyMatrix3(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ai(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ie(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ai(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ai(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ai(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ai(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),i=Ie(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),i=Ie(i,this.array),s=Ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),i=Ie(i,this.array),s=Ie(s,this.array),r=Ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Do=class extends Me{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Fo=class extends Me{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Xt=class extends Me{constructor(t,e,i){super(new Float32Array(t),e,i)}},Kx=new Le,yo=new X,nh=new X,Mn=class{constructor(t=new X,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Kx.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;yo.subVectors(t,this.center);let e=yo.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(yo,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(nh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(yo.copy(t.center).add(nh)),this.expandByPoint(yo.copy(t.center).sub(nh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Jx=0,$n=new be,ih=new Be,mr=new X,Hn=new Le,xo=new Le,rn=new X,re=class n extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jx++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Mx(t)?Fo:Do)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ue().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return $n.makeRotationFromQuaternion(t),this.applyMatrix4($n),this}rotateX(t){return $n.makeRotationX(t),this.applyMatrix4($n),this}rotateY(t){return $n.makeRotationY(t),this.applyMatrix4($n),this}rotateZ(t){return $n.makeRotationZ(t),this.applyMatrix4($n),this}translate(t,e,i){return $n.makeTranslation(t,e,i),this.applyMatrix4($n),this}scale(t,e,i){return $n.makeScale(t,e,i),this.applyMatrix4($n),this}lookAt(t){return ih.lookAt(t),ih.updateMatrix(),this.applyMatrix4(ih.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mr).negate(),this.translate(mr.x,mr.y,mr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Xt(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&se("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Le);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ae("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Hn.setFromBufferAttribute(r),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ae('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ae("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){let i=this.boundingSphere.center;if(Hn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];xo.setFromBufferAttribute(a),this.morphTargetsRelative?(rn.addVectors(Hn.min,xo.min),Hn.expandByPoint(rn),rn.addVectors(Hn.max,xo.max),Hn.expandByPoint(rn)):(Hn.expandByPoint(xo.min),Hn.expandByPoint(xo.max))}Hn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)rn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(rn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)rn.fromBufferAttribute(a,l),c&&(mr.fromBufferAttribute(t,l),rn.add(mr)),s=Math.max(s,i.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ae('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ae("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Me(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let S=0;S<i.count;S++)a[S]=new X,c[S]=new X;let l=new X,u=new X,f=new X,h=new Ot,d=new Ot,p=new Ot,y=new X,m=new X;function g(S,R,P){l.fromBufferAttribute(i,S),u.fromBufferAttribute(i,R),f.fromBufferAttribute(i,P),h.fromBufferAttribute(r,S),d.fromBufferAttribute(r,R),p.fromBufferAttribute(r,P),u.sub(l),f.sub(l),d.sub(h),p.sub(h);let I=1/(d.x*p.y-p.x*d.y);isFinite(I)&&(y.copy(u).multiplyScalar(p.y).addScaledVector(f,-d.y).multiplyScalar(I),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(I),a[S].add(y),a[R].add(y),a[P].add(y),c[S].add(m),c[R].add(m),c[P].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let S=0,R=x.length;S<R;++S){let P=x[S],I=P.start,F=P.count;for(let H=I,B=I+F;H<B;H+=3)g(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let v=new X,_=new X,b=new X,M=new X;function T(S){b.fromBufferAttribute(s,S),M.copy(b);let R=a[S];v.copy(R),v.sub(b.multiplyScalar(b.dot(R))).normalize(),_.crossVectors(M,R);let I=_.dot(c[S])<0?-1:1;o.setXYZW(S,v.x,v.y,v.z,I)}for(let S=0,R=x.length;S<R;++S){let P=x[S],I=P.start,F=P.count;for(let H=I,B=I+F;H<B;H+=3)T(t.getX(H+0)),T(t.getX(H+1)),T(t.getX(H+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Me(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);let s=new X,r=new X,o=new X,a=new X,c=new X,l=new X,u=new X,f=new X;if(t)for(let h=0,d=t.count;h<d;h+=3){let p=t.getX(h+0),y=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,p),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)rn.fromBufferAttribute(t,e),rn.normalize(),t.setXYZ(e,rn.x,rn.y,rn.z)}toNonIndexed(){function t(a,c){let l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u),d=0,p=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?d=c[y]*a.data.stride+a.offset:d=c[y]*u;for(let g=0;g<u;g++)h[p++]=l[d++]}return new Me(h,u,f)}if(this.index===null)return se("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,i);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,f=l.length;u<f;u++){let h=l[u],d=t(h,i);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){let d=l[f];u.push(d.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],f=r[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,u=o.length;l<u;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Uo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=qh,this.updateRanges=[],this.version=0,this.uuid=Mi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Cn=new X,Zn=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Cn.fromBufferAttribute(this,e),Cn.applyMatrix4(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Cn.fromBufferAttribute(this,e),Cn.applyNormalMatrix(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Cn.fromBufferAttribute(this,e),Cn.transformDirection(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=ai(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ie(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Ie(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ai(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ai(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ai(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ai(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ie(e,this.array),i=Ie(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ie(e,this.array),i=Ie(i,this.array),s=Ie(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ie(e,this.array),i=Ie(i,this.array),s=Ie(s,this.array),r=Ie(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Po("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Me(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Po("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},sh=new X,Qx=new X,tb=new ue,Gn=class{constructor(t=new X(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=sh.subVectors(i,e).cross(Qx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(sh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||tb.getNormalMatrix(t),s=this.coplanarPoint(sh).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},eb=0,li=class extends wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eb++}),this.uuid=Mi(),this.name="",this.type="Material",this.blending=Hr,this.side=xs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ph,this.blendDst=Lh,this.blendEquation=Ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=Sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mc,this.stencilZFail=mc,this.stencilZPass=mc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){se(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){se(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Wt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Gn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ot().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ot().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Hi=new X,rh=new X,$a=new X,Za=new X,Os=class{constructor(t=new X,e=new X(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Hi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hi.copy(this.origin).addScaledVector(this.direction,e),Hi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){rh.copy(t).add(e).multiplyScalar(.5),$a.copy(e).sub(t).normalize(),Za.copy(this.origin).sub(rh);let r=t.distanceTo(e)*.5,o=-this.direction.dot($a),a=Za.dot(this.direction),c=-Za.dot($a),l=Za.lengthSq(),u=Math.abs(1-o*o),f,h,d,p;if(u>0)if(f=o*c-a,h=o*a-c,p=r*u,f>=0)if(h>=-p)if(h<=p){let y=1/u;f*=y,h*=y,d=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h<=-p?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l):h<=p?(f=0,h=Math.min(Math.max(-r,-c),r),d=h*(h+2*c)+l):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(rh).addScaledVector($a,h),d}intersectSphere(t,e){if(t.radius<0)return null;Hi.subVectors(t.center,this.origin);let i=Hi.dot(this.direction),s=Hi.dot(Hi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(i=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(i=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Hi)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,f=t.x-o.x,h=t.y-o.y,d=t.z-o.z,p=e.x-o.x,y=e.y-o.y,m=e.z-o.z,g=i.x-o.x,x=i.y-o.y,v=i.z-o.z,_=Math.abs(c),b=Math.abs(l),M=Math.abs(u),T,S,R,P,I,F,H,B,Y,G,V,ft;if(_>=b&&_>=M?(R=c,F=f,Y=p,ft=g,c>=0?(T=l,S=u,P=h,I=d,H=y,B=m,G=x,V=v):(T=u,S=l,P=d,I=h,H=m,B=y,G=v,V=x)):b>=M?(R=l,F=h,Y=y,ft=x,l>=0?(T=u,S=c,P=d,I=f,H=m,B=p,G=v,V=g):(T=c,S=u,P=f,I=d,H=p,B=m,G=g,V=v)):(R=u,F=d,Y=m,ft=v,u>=0?(T=c,S=l,P=f,I=h,H=p,B=y,G=g,V=x):(T=l,S=c,P=h,I=f,H=y,B=p,G=x,V=g)),R===0)return null;let J=T/R,W=S/R,st=1/R,bt=P-J*F,Mt=I-W*F,vt=H-J*Y,xt=B-W*Y,yt=G-J*ft,$=V-W*ft,rt=yt*xt-$*vt,Et=bt*$-Mt*yt,Ut=vt*Mt-xt*bt;if(s){if(rt<0||Et<0||Ut<0)return null}else if((rt<0||Et<0||Ut<0)&&(rt>0||Et>0||Ut>0))return null;let It=rt+Et+Ut;if(It===0)return null;let Pt=st*(rt*F+Et*Y+Ut*ft);return(It>0?Pt<0:Pt>0)?null:this.at(Pt/It,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},_e=class extends li{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=Kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Vd=new be,Ds=new Os,ja=new Mn,Wd=new X,Ka=new X,Ja=new X,Qa=new X,oh=new X,tc=new X,Xd=new X,ec=new X,ne=class extends Be{constructor(t=new re,e=new _e){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){tc.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],f=r[c];u!==0&&(oh.fromBufferAttribute(f,t),o?tc.addScaledVector(oh,u):tc.addScaledVector(oh.sub(e),u))}e.add(tc)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ja.copy(i.boundingSphere),ja.applyMatrix4(r),Ds.copy(t.ray).recast(t.near),!(ja.containsPoint(Ds.origin)===!1&&(Ds.intersectSphere(ja,Wd)===null||Ds.origin.distanceToSquared(Wd)>(t.far-t.near)**2))&&(Vd.copy(r).invert(),Ds.copy(t.ray).applyMatrix4(Vd),!(i.boundingBox!==null&&Ds.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ds)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,y=h.length;p<y;p++){let m=h[p],g=o[m.materialIndex],x=Math.max(m.start,d.start),v=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let _=x,b=v;_<b;_+=3){let M=a.getX(_),T=a.getX(_+1),S=a.getX(_+2);s=nc(this,g,t,i,l,u,f,M,T,S),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let m=p,g=y;m<g;m+=3){let x=a.getX(m),v=a.getX(m+1),_=a.getX(m+2);s=nc(this,o,t,i,l,u,f,x,v,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,y=h.length;p<y;p++){let m=h[p],g=o[m.materialIndex],x=Math.max(m.start,d.start),v=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let _=x,b=v;_<b;_+=3){let M=_,T=_+1,S=_+2;s=nc(this,g,t,i,l,u,f,M,T,S),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),y=Math.min(c.count,d.start+d.count);for(let m=p,g=y;m<g;m+=3){let x=m,v=m+1,_=m+2;s=nc(this,o,t,i,l,u,f,x,v,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function nb(n,t,e,i,s,r,o,a){let c;if(t.side===Pn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===xs,a),c===null)return null;ec.copy(a),ec.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(ec);return l<e.near||l>e.far?null:{distance:l,point:ec.clone(),object:n}}function nc(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,Ka),n.getVertexPosition(c,Ja),n.getVertexPosition(l,Qa);let u=nb(n,t,e,i,Ka,Ja,Qa,Xd);if(u){let f=new X;os.getBarycoord(Xd,Ka,Ja,Qa,f),s&&(u.uv=os.getInterpolatedAttribute(s,a,c,l,f,new Ot)),r&&(u.uv1=os.getInterpolatedAttribute(r,a,c,l,f,new Ot)),o&&(u.normal=os.getInterpolatedAttribute(o,a,c,l,f,new X),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new X,materialIndex:0};os.getNormal(Ka,Ja,Qa,h.normal),u.face=h,u.barycoord=f}return u}var ko=class extends dn{constructor(t=null,e=1,i=1,s,r,o,a,c,l=on,u=on,f,h){super(null,o,a,c,l,u,s,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pr=class extends Me{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},gr=new be,qd=new be,ic=[],Yd=new Le,ib=new be,bo=new ne,vo=new Mn,jn=class extends ne{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Pr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,ib)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Le),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,gr),Yd.copy(t.boundingBox).applyMatrix4(gr),this.boundingBox.union(Yd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,gr),vo.copy(t.boundingSphere).applyMatrix4(gr),this.boundingSphere.union(vo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(bo.geometry=this.geometry,bo.material=this.material,bo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vo.copy(this.boundingSphere),vo.applyMatrix4(i),t.ray.intersectsSphere(vo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,gr),qd.multiplyMatrices(i,gr),bo.matrixWorld=qd,bo.raycast(t,ic);for(let o=0,a=ic.length;o<a;o++){let c=ic[o];c.instanceId=r,c.object=this,e.push(c)}ic.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Pr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ko(new Float32Array(s*this.count),s,this.count,sl,Kn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<i.length;l++)o+=i[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;return r[c]=a,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Fs=new Mn,sb=new Ot(.5,.5),sc=new X,as=class{constructor(t=new Gn,e=new Gn,i=new Gn,s=new Gn,r=new Gn,o=new Gn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ci,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],f=r[5],h=r[6],d=r[7],p=r[8],y=r[9],m=r[10],g=r[11],x=r[12],v=r[13],_=r[14],b=r[15];if(s[0].setComponents(l-o,d-u,g-p,b-x).normalize(),s[1].setComponents(l+o,d+u,g+p,b+x).normalize(),s[2].setComponents(l+a,d+f,g+y,b+v).normalize(),s[3].setComponents(l-a,d-f,g-y,b-v).normalize(),i)s[4].setComponents(c,h,m,_).normalize(),s[5].setComponents(l-c,d-h,g-m,b-_).normalize();else if(s[4].setComponents(l-c,d-h,g-m,b-_).normalize(),e===ci)s[5].setComponents(l+c,d+h,g+m,b+_).normalize();else if(e===Er)s[5].setComponents(c,h,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fs)}intersectsSprite(t){Fs.center.set(0,0,0);let e=sb.distanceTo(t.center);return Fs.radius=.7071067811865476+e,Fs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fs)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(sc.x=s.normal.x>0?t.max.x:t.min.x,sc.y=s.normal.y>0?t.max.y:t.min.y,sc.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(sc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Lr=class extends li{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ac=new X,Rc=new X,$d=new be,_o=new Os,rc=new Mn,ah=new X,Zd=new X,Cc=class extends Be{constructor(t=new re,e=new Lr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Ac.fromBufferAttribute(e,s-1),Rc.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Ac.distanceTo(Rc);t.setAttribute("lineDistance",new Xt(i,1))}else se("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),rc.copy(i.boundingSphere),rc.applyMatrix4(s),rc.radius+=r,t.ray.intersectsSphere(rc)===!1)return;$d.copy(s).invert(),_o.copy(t.ray).applyMatrix4($d);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let y=d,m=p-1;y<m;y+=l){let g=u.getX(y),x=u.getX(y+1),v=oc(this,t,_o,c,g,x,y);v&&e.push(v)}if(this.isLineLoop){let y=u.getX(p-1),m=u.getX(d),g=oc(this,t,_o,c,y,m,p-1);g&&e.push(g)}}else{let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let y=d,m=p-1;y<m;y+=l){let g=oc(this,t,_o,c,y,y+1,y);g&&e.push(g)}if(this.isLineLoop){let y=oc(this,t,_o,c,p-1,d,p-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function oc(n,t,e,i,s,r,o){let a=n.geometry.attributes.position;if(Ac.fromBufferAttribute(a,s),Rc.fromBufferAttribute(a,r),e.distanceSqToSegment(Ac,Rc,ah,Zd)>i)return;ah.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(ah);if(!(l<t.near||l>t.far))return{distance:l,point:Zd.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var jd=new X,Kd=new X,Oo=class extends Cc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)jd.fromBufferAttribute(e,s),Kd.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+jd.distanceTo(Kd);t.setAttribute("lineDistance",new Xt(i,1))}else se("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Bs=class extends li{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Jd=new be,xh=new Os,ac=new Mn,cc=new X,Nr=class extends Be{constructor(t=new re,e=new Bs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ac.copy(i.boundingSphere),ac.applyMatrix4(s),ac.radius+=r,t.ray.intersectsSphere(ac)===!1)return;Jd.copy(s).invert(),xh.copy(t.ray).applyMatrix4(Jd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,f=i.attributes.position;if(l!==null){let h=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let p=h,y=d;p<y;p++){let m=l.getX(p);cc.fromBufferAttribute(f,m),Qd(cc,m,c,s,t,e,this)}}else{let h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let p=h,y=d;p<y;p++)cc.fromBufferAttribute(f,p),Qd(cc,p,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Qd(n,t,e,i,s,r,o){let a=xh.distanceSqToPoint(n);if(a<e){let c=new X;xh.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Bo=class extends dn{constructor(t=[],e=bs,i,s,r,o,a,c,l,u){super(t,e,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},cs=class extends dn{constructor(t,e,i,s,r,o,a,c,l){super(t,e,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ls=class extends dn{constructor(t,e,i=fi,s,r,o,a=on,c=on,l,u=Si,f=1){if(u!==Si&&u!==_s)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:f};super(h,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Rr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ic=class extends ls{constructor(t,e=fi,i=bs,s,r,o=on,a=on,c,l=Si){let u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,i,s,r,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},zo=class extends dn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},xe=class n extends re{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],f=[],h=0,d=0;p("z","y","x",-1,-1,i,e,t,o,r,0),p("z","y","x",1,-1,i,e,-t,o,r,1),p("x","z","y",1,1,t,i,e,s,o,2),p("x","z","y",1,-1,t,i,-e,s,o,3),p("x","y","z",1,-1,t,e,i,s,r,4),p("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Xt(l,3)),this.setAttribute("normal",new Xt(u,3)),this.setAttribute("uv",new Xt(f,2));function p(y,m,g,x,v,_,b,M,T,S,R){let P=_/T,I=b/S,F=_/2,H=b/2,B=M/2,Y=T+1,G=S+1,V=0,ft=0,J=new X;for(let W=0;W<G;W++){let st=W*I-H;for(let bt=0;bt<Y;bt++){let Mt=bt*P-F;J[y]=Mt*x,J[m]=st*v,J[g]=B,l.push(J.x,J.y,J.z),J[y]=0,J[m]=0,J[g]=M>0?1:-1,u.push(J.x,J.y,J.z),f.push(bt/T),f.push(1-W/S),V+=1}}for(let W=0;W<S;W++)for(let st=0;st<T;st++){let bt=h+st+Y*W,Mt=h+st+Y*(W+1),vt=h+(st+1)+Y*(W+1),xt=h+(st+1)+Y*W;c.push(bt,Mt,xt),c.push(Mt,vt,xt),ft+=6}a.addGroup(d,ft,R),d+=ft,h+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Sn=class n extends re{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new X,u=new Ot;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,h=3;f<=e;f++,h+=3){let d=i+f/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,c.push(u.x,u.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Xt(o,3)),this.setAttribute("normal",new Xt(a,3)),this.setAttribute("uv",new Xt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Re=class n extends re{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],h=[],d=[],p=0,y=[],m=i/2,g=0;x(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Xt(f,3)),this.setAttribute("normal",new Xt(h,3)),this.setAttribute("uv",new Xt(d,2));function x(){let _=new X,b=new X,M=0,T=(e-t)/i;for(let S=0;S<=r;S++){let R=[],P=S/r,I=P*(e-t)+t;for(let F=0;F<=s;F++){let H=F/s,B=H*c+a,Y=Math.sin(B),G=Math.cos(B);b.x=I*Y,b.y=-P*i+m,b.z=I*G,f.push(b.x,b.y,b.z),_.set(Y,T,G).normalize(),h.push(_.x,_.y,_.z),d.push(H,1-P),R.push(p++)}y.push(R)}for(let S=0;S<s;S++)for(let R=0;R<r;R++){let P=y[R][S],I=y[R+1][S],F=y[R+1][S+1],H=y[R][S+1];(t>0||R!==0)&&(u.push(P,I,H),M+=3),(e>0||R!==r-1)&&(u.push(I,F,H),M+=3)}l.addGroup(g,M,0),g+=M}function v(_){let b=p,M=new Ot,T=new X,S=0,R=_===!0?t:e,P=_===!0?1:-1;for(let F=1;F<=s;F++)f.push(0,m*P,0),h.push(0,P,0),d.push(.5,.5),p++;let I=p;for(let F=0;F<=s;F++){let B=F/s*c+a,Y=Math.cos(B),G=Math.sin(B);T.x=R*G,T.y=m*P,T.z=R*Y,f.push(T.x,T.y,T.z),h.push(0,P,0),M.x=Y*.5+.5,M.y=G*.5*P+.5,d.push(M.x,M.y),p++}for(let F=0;F<s;F++){let H=b+F,B=I+F;_===!0?u.push(B,B+1,H):u.push(B+1,B,H),S+=3}l.addGroup(g,S,_===!0?1:2),g+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Dr=class n extends Re{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ho=class n extends re{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),l(i),u(),this.setAttribute("position",new Xt(r,3)),this.setAttribute("normal",new Xt(r.slice(),3)),this.setAttribute("uv",new Xt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){let v=new X,_=new X,b=new X;for(let M=0;M<e.length;M+=3)d(e[M+0],v),d(e[M+1],_),d(e[M+2],b),c(v,_,b,x)}function c(x,v,_,b){let M=b+1,T=[];for(let S=0;S<=M;S++){T[S]=[];let R=x.clone().lerp(_,S/M),P=v.clone().lerp(_,S/M),I=M-S;for(let F=0;F<=I;F++)F===0&&S===M?T[S][F]=R:T[S][F]=R.clone().lerp(P,F/I)}for(let S=0;S<M;S++)for(let R=0;R<2*(M-S)-1;R++){let P=Math.floor(R/2);R%2===0?(h(T[S][P+1]),h(T[S+1][P]),h(T[S][P])):(h(T[S][P+1]),h(T[S+1][P+1]),h(T[S+1][P]))}}function l(x){let v=new X;for(let _=0;_<r.length;_+=3)v.x=r[_+0],v.y=r[_+1],v.z=r[_+2],v.normalize().multiplyScalar(x),r[_+0]=v.x,r[_+1]=v.y,r[_+2]=v.z}function u(){let x=new X;for(let v=0;v<r.length;v+=3){x.x=r[v+0],x.y=r[v+1],x.z=r[v+2];let _=m(x)/2/Math.PI+.5,b=g(x)/Math.PI+.5;o.push(_,1-b)}p(),f()}function f(){for(let x=0;x<o.length;x+=6){let v=o[x+0],_=o[x+2],b=o[x+4],M=Math.max(v,_,b),T=Math.min(v,_,b);M>.9&&T<.1&&(v<.2&&(o[x+0]+=1),_<.2&&(o[x+2]+=1),b<.2&&(o[x+4]+=1))}}function h(x){r.push(x.x,x.y,x.z)}function d(x,v){let _=x*3;v.x=t[_+0],v.y=t[_+1],v.z=t[_+2]}function p(){let x=new X,v=new X,_=new X,b=new X,M=new Ot,T=new Ot,S=new Ot;for(let R=0,P=0;R<r.length;R+=9,P+=6){x.set(r[R+0],r[R+1],r[R+2]),v.set(r[R+3],r[R+4],r[R+5]),_.set(r[R+6],r[R+7],r[R+8]),M.set(o[P+0],o[P+1]),T.set(o[P+2],o[P+3]),S.set(o[P+4],o[P+5]),b.copy(x).add(v).add(_).divideScalar(3);let I=m(b);y(M,P+0,x,I),y(T,P+2,v,I),y(S,P+4,_,I)}}function y(x,v,_,b){b<0&&x.x===1&&(o[v]=x.x-1),_.x===0&&_.z===0&&(o[v]=b/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function g(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.detail)}},Go=class n extends Ho{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var Vn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){se("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);let u=i[s],h=i[s+1]-u,d=(o-u)/h;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new Ot:new X);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new X,s=[],r=[],o=[],a=new X,c=new be;for(let d=0;d<=t;d++){let p=d/t;s[d]=this.getTangentAt(p,new X)}r[0]=new X,o[0]=new X;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),f<=l&&(l=f,i.set(0,1,0)),h<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(le(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,p))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(le(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let p=1;p<=t;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],d*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Fr=class extends Vn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Ot){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,d=l-this.aY;c=h*u-d*f+this.aX,l=h*f+d*u+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Pc=class extends Fr{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Zh(){let n=0,t=0,e=0,i=0;function s(r,o,a,c){n=r,t=a,e=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,f){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+f)+(c-a)/f;h*=u,d*=u,s(o,a,h,d)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var tp=new X,ep=new X,ch=new Zh,lh=new Zh,uh=new Zh,zs=class extends Vn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new X){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(ep.subVectors(s[0],s[1]).add(s[0]),l=ep);let f=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(tp.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=tp),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(f),d),y=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);y<1e-4&&(y=1),p<1e-4&&(p=y),m<1e-4&&(m=y),ch.initNonuniformCatmullRom(l.x,f.x,h.x,u.x,p,y,m),lh.initNonuniformCatmullRom(l.y,f.y,h.y,u.y,p,y,m),uh.initNonuniformCatmullRom(l.z,f.z,h.z,u.z,p,y,m)}else this.curveType==="catmullrom"&&(ch.initCatmullRom(l.x,f.x,h.x,u.x,this.tension),lh.initCatmullRom(l.y,f.y,h.y,u.y,this.tension),uh.initCatmullRom(l.z,f.z,h.z,u.z,this.tension));return i.set(ch.calc(c),lh.calc(c),uh.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new X().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function np(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,c=n*a;return(2*e-2*i+r+o)*c+(-3*e+3*i-2*r-o)*a+r*n+e}function rb(n,t){let e=1-n;return e*e*t}function ob(n,t){return 2*(1-n)*n*t}function ab(n,t){return n*n*t}function Eo(n,t,e,i){return rb(n,t)+ob(n,e)+ab(n,i)}function cb(n,t){let e=1-n;return e*e*e*t}function lb(n,t){let e=1-n;return 3*e*e*n*t}function ub(n,t){return 3*(1-n)*n*n*t}function hb(n,t){return n*n*n*t}function To(n,t,e,i,s){return cb(n,t)+lb(n,e)+ub(n,i)+hb(n,s)}var Vo=class extends Vn{constructor(t=new Ot,e=new Ot,i=new Ot,s=new Ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Ot){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(To(t,s.x,r.x,o.x,a.x),To(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Lc=class extends Vn{constructor(t=new X,e=new X,i=new X,s=new X){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new X){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(To(t,s.x,r.x,o.x,a.x),To(t,s.y,r.y,o.y,a.y),To(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Wo=class extends Vn{constructor(t=new Ot,e=new Ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ot){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Nc=class extends Vn{constructor(t=new X,e=new X){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new X){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new X){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Xo=class extends Vn{constructor(t=new Ot,e=new Ot,i=new Ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Ot){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Eo(t,s.x,r.x,o.x),Eo(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},qo=class extends Vn{constructor(t=new X,e=new X,i=new X){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new X){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Eo(t,s.x,r.x,o.x),Eo(t,s.y,r.y,o.y),Eo(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Yo=class extends Vn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ot){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(np(a,c.x,l.x,u.x,f.x),np(a,c.y,l.y,u.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new Ot().fromArray(s))}return this}},Dc=Object.freeze({__proto__:null,ArcCurve:Pc,CatmullRomCurve3:zs,CubicBezierCurve:Vo,CubicBezierCurve3:Lc,EllipseCurve:Fr,LineCurve:Wo,LineCurve3:Nc,QuadraticBezierCurve:Xo,QuadraticBezierCurve3:qo,SplineCurve:Yo}),Fc=class extends Vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Dc[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Dc[s.type]().fromJSON(s))}return this}},Hs=class extends Fc{constructor(t){super(),this.type="Path",this.currentPoint=new Ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Wo(this.currentPoint.clone(),new Ot(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Xo(this.currentPoint.clone(),new Ot(t,e),new Ot(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new Vo(this.currentPoint.clone(),new Ot(t,e),new Ot(i,s),new Ot(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Yo(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,i,s,r,o,a,c),this}absellipse(t,e,i,s,r,o,a,c){let l=new Fr(t,e,i,s,r,o,a,c);if(this.curves.length>0){let f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ke=class extends Hs{constructor(t){super(t),this.uuid=Mi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Hs().fromJSON(s))}return this}};function fb(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=tm(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(i&&(r=yb(n,t,r,e)),n.length>80*e){a=n[0],c=n[1];let u=a,f=c;for(let h=e;h<s;h+=e){let d=n[h],p=n[h+1];d<a&&(a=d),p<c&&(c=p),d>u&&(u=d),p>f&&(f=p)}l=Math.max(u-a,f-c),l=l!==0?32767/l:0}return $o(r,o,e,a,c,l,0),o}function tm(n,t,e,i,s){let r;if(s===Rb(n,t,e,i)>0)for(let o=t;o<e;o+=i)r=ip(o/i|0,n[o],n[o+1],r);else for(let o=e-i;o>=t;o-=i)r=ip(o/i|0,n[o],n[o+1],r);return r&&Ur(r,r.next)&&(jo(r),r=r.next),r}function Gs(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Ur(e,e.next)||Ve(e.prev,e,e.next)===0)){if(jo(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function $o(n,t,e,i,s,r,o){if(!n)return;!o&&r&&Mb(n,i,s,r);let a=n;for(;n.prev!==n.next;){let c=n.prev,l=n.next;if(r?pb(n,i,s,r):db(n)){t.push(c.i,n.i,l.i),jo(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=mb(Gs(n),t),$o(n,t,e,i,s,r,2)):o===2&&gb(n,t,e,i,s,r):$o(Gs(n),t,e,i,s,r,1);break}}}function db(n){let t=n.prev,e=n,i=n.next;if(Ve(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,c=e.y,l=i.y,u=Math.min(s,r,o),f=Math.min(a,c,l),h=Math.max(s,r,o),d=Math.max(a,c,l),p=i.next;for(;p!==t;){if(p.x>=u&&p.x<=h&&p.y>=f&&p.y<=d&&Mo(s,a,r,c,o,l,p.x,p.y)&&Ve(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function pb(n,t,e,i){let s=n.prev,r=n,o=n.next;if(Ve(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,u=s.y,f=r.y,h=o.y,d=Math.min(a,c,l),p=Math.min(u,f,h),y=Math.max(a,c,l),m=Math.max(u,f,h),g=bh(d,p,t,e,i),x=bh(y,m,t,e,i),v=n.prevZ,_=n.nextZ;for(;v&&v.z>=g&&_&&_.z<=x;){if(v.x>=d&&v.x<=y&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&Mo(a,u,c,f,l,h,v.x,v.y)&&Ve(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=d&&_.x<=y&&_.y>=p&&_.y<=m&&_!==s&&_!==o&&Mo(a,u,c,f,l,h,_.x,_.y)&&Ve(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=g;){if(v.x>=d&&v.x<=y&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&Mo(a,u,c,f,l,h,v.x,v.y)&&Ve(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=x;){if(_.x>=d&&_.x<=y&&_.y>=p&&_.y<=m&&_!==s&&_!==o&&Mo(a,u,c,f,l,h,_.x,_.y)&&Ve(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function mb(n,t){let e=n;do{let i=e.prev,s=e.next.next;!Ur(i,s)&&nm(i,e,e.next,s)&&Zo(i,s)&&Zo(s,i)&&(t.push(i.i,e.i,s.i),jo(e),jo(e.next),e=n=s),e=e.next}while(e!==n);return Gs(e)}function gb(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Eb(o,a)){let c=im(o,a);o=Gs(o,o.next),c=Gs(c,c.next),$o(o,t,e,i,s,r,0),$o(c,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function yb(n,t,e,i){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*i,c=r<o-1?t[r+1]*i:n.length,l=tm(n,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push(wb(l))}s.sort(xb);for(let r=0;r<s.length;r++)e=bb(s[r],e);return e}function xb(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function bb(n,t){let e=vb(n,t);if(!e)return t;let i=im(e,n);return Gs(i,i.next),Gs(e,e.next)}function vb(n,t){let e=t,i=n.x,s=n.y,r=-1/0,o;if(Ur(n,e))return e;do{if(Ur(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=i&&f>r&&(r=f,o=e.x<e.next.x?e:e.next,f===i))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,u=1/0;e=o;do{if(i>=e.x&&e.x>=c&&i!==e.x&&em(s<l?i:r,s,c,l,s<l?r:i,s,e.x,e.y)){let f=Math.abs(s-e.y)/(i-e.x);Zo(e,n)&&(f<u||f===u&&(e.x>o.x||e.x===o.x&&_b(o,e)))&&(o=e,u=f)}e=e.next}while(e!==a);return o}function _b(n,t){return Ve(n.prev,n,t.prev)<0&&Ve(t.next,n,n.next)<0}function Mb(n,t,e,i){let s=n;do s.z===0&&(s.z=bh(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Sb(s)}function Sb(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,e*=2}while(t>1);return n}function bh(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function wb(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function em(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Mo(n,t,e,i,s,r,o,a){return!(n===o&&t===a)&&em(n,t,e,i,s,r,o,a)}function Eb(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Tb(n,t)&&(Zo(n,t)&&Zo(t,n)&&Ab(n,t)&&(Ve(n.prev,n,t.prev)||Ve(n,t.prev,t))||Ur(n,t)&&Ve(n.prev,n,n.next)>0&&Ve(t.prev,t,t.next)>0)}function Ve(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Ur(n,t){return n.x===t.x&&n.y===t.y}function nm(n,t,e,i){let s=uc(Ve(n,t,e)),r=uc(Ve(n,t,i)),o=uc(Ve(e,i,n)),a=uc(Ve(e,i,t));return!!(s!==r&&o!==a||s===0&&lc(n,e,t)||r===0&&lc(n,i,t)||o===0&&lc(e,n,i)||a===0&&lc(e,t,i))}function lc(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function uc(n){return n>0?1:n<0?-1:0}function Tb(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&nm(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Zo(n,t){return Ve(n.prev,n,n.next)<0?Ve(n,t,n.next)>=0&&Ve(n,n.prev,t)>=0:Ve(n,t,n.prev)<0||Ve(n,n.next,t)<0}function Ab(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function im(n,t){let e=vh(n.i,n.x,n.y),i=vh(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function ip(n,t,e,i){let s=vh(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function jo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function vh(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Rb(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var _h=class{static triangulate(t,e,i=2){return fb(t,e,i)}},Fn=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];sp(t),rp(i,t);let o=t.length;e.forEach(sp);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,rp(i,e[c]);let a=_h.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function sp(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function rp(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var ui=class n extends re{constructor(t=new Ke([new Ot(.5,.5),new Ot(-.5,.5),new Ot(-.5,-.5),new Ot(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new Xt(s,3)),this.setAttribute("uv",new Xt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:d-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:Cb,v,_=!1,b,M,T,S;if(g){v=g.getSpacedPoints(u),_=!0,h=!1;let U=g.isCatmullRomCurve3?g.closed:!1;b=g.computeFrenetFrames(u,U),M=new X,T=new X,S=new X}h||(m=0,d=0,p=0,y=0);let R=a.extractPoints(l),P=R.shape,I=R.holes;if(!Fn.isClockWise(P)){P=P.reverse();for(let U=0,it=I.length;U<it;U++){let K=I[U];Fn.isClockWise(K)&&(I[U]=K.reverse())}}function H(U){let K=10000000000000001e-36,at=U[0];for(let tt=1;tt<=U.length;tt++){let St=tt%U.length,Tt=U[St],Rt=Tt.x-at.x,Lt=Tt.y-at.y,q=Rt*Rt+Lt*Lt,Gt=Math.max(Math.abs(Tt.x),Math.abs(Tt.y),Math.abs(at.x),Math.abs(at.y)),Bt=K*Gt*Gt;if(q<=Bt){U.splice(St,1),tt--;continue}at=Tt}}H(P),I.forEach(H);let B=I.length,Y=P;for(let U=0;U<B;U++){let it=I[U];P=P.concat(it)}function G(U,it,K){return it||ae("ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(it,K)}let V=P.length;function ft(U,it,K){let at,tt,St,Tt=U.x-it.x,Rt=U.y-it.y,Lt=K.x-U.x,q=K.y-U.y,Gt=Tt*Tt+Rt*Rt,Bt=Tt*q-Rt*Lt;if(Math.abs(Bt)>Number.EPSILON){let z=Math.sqrt(Gt),A=Math.sqrt(Lt*Lt+q*q),dt=it.x-Rt/z,ct=it.y+Tt/z,lt=K.x-q/A,O=K.y+Lt/A,w=((lt-dt)*q-(O-ct)*Lt)/(Tt*q-Rt*Lt);at=dt+Tt*w-U.x,tt=ct+Rt*w-U.y;let E=at*at+tt*tt;if(E<=2)return new Ot(at,tt);St=Math.sqrt(E/2)}else{let z=!1;Tt>Number.EPSILON?Lt>Number.EPSILON&&(z=!0):Tt<-Number.EPSILON?Lt<-Number.EPSILON&&(z=!0):Math.sign(Rt)===Math.sign(q)&&(z=!0),z?(at=-Rt,tt=Tt,St=Math.sqrt(Gt)):(at=Tt,tt=Rt,St=Math.sqrt(Gt/2))}return new Ot(at/St,tt/St)}let J=[];for(let U=0,it=Y.length,K=it-1,at=U+1;U<it;U++,K++,at++)K===it&&(K=0),at===it&&(at=0),J[U]=ft(Y[U],Y[K],Y[at]);let W=[],st,bt=J.concat();for(let U=0,it=B;U<it;U++){let K=I[U];st=[];for(let at=0,tt=K.length,St=tt-1,Tt=at+1;at<tt;at++,St++,Tt++)St===tt&&(St=0),Tt===tt&&(Tt=0),st[at]=ft(K[at],K[St],K[Tt]);W.push(st),bt=bt.concat(st)}let Mt;if(m===0)Mt=Fn.triangulateShape(Y,I);else{let U=[],it=[];for(let K=0;K<m;K++){let at=K/m,tt=d*Math.cos(at*Math.PI/2),St=p*Math.sin(at*Math.PI/2)+y;for(let Tt=0,Rt=Y.length;Tt<Rt;Tt++){let Lt=G(Y[Tt],J[Tt],St);Et(Lt.x,Lt.y,-tt),at===0&&U.push(Lt)}for(let Tt=0,Rt=B;Tt<Rt;Tt++){let Lt=I[Tt];st=W[Tt];let q=[];for(let Gt=0,Bt=Lt.length;Gt<Bt;Gt++){let z=G(Lt[Gt],st[Gt],St);Et(z.x,z.y,-tt),at===0&&q.push(z)}at===0&&it.push(q)}}Mt=Fn.triangulateShape(U,it)}let vt=Mt.length,xt=p+y;for(let U=0;U<V;U++){let it=h?G(P[U],bt[U],xt):P[U];_?(T.copy(b.normals[0]).multiplyScalar(it.x),M.copy(b.binormals[0]).multiplyScalar(it.y),S.copy(v[0]).add(T).add(M),Et(S.x,S.y,S.z)):Et(it.x,it.y,0)}for(let U=1;U<=u;U++)for(let it=0;it<V;it++){let K=h?G(P[it],bt[it],xt):P[it];_?(T.copy(b.normals[U]).multiplyScalar(K.x),M.copy(b.binormals[U]).multiplyScalar(K.y),S.copy(v[U]).add(T).add(M),Et(S.x,S.y,S.z)):Et(K.x,K.y,f/u*U)}for(let U=m-1;U>=0;U--){let it=U/m,K=d*Math.cos(it*Math.PI/2),at=p*Math.sin(it*Math.PI/2)+y;for(let tt=0,St=Y.length;tt<St;tt++){let Tt=G(Y[tt],J[tt],at);Et(Tt.x,Tt.y,f+K)}for(let tt=0,St=I.length;tt<St;tt++){let Tt=I[tt];st=W[tt];for(let Rt=0,Lt=Tt.length;Rt<Lt;Rt++){let q=G(Tt[Rt],st[Rt],at);_?Et(q.x,q.y+v[u-1].y,v[u-1].x+K):Et(q.x,q.y,f+K)}}}yt(),$();function yt(){let U=s.length/3;if(h){let it=0,K=V*it;for(let at=0;at<vt;at++){let tt=Mt[at];Ut(tt[2]+K,tt[1]+K,tt[0]+K)}it=u+m*2,K=V*it;for(let at=0;at<vt;at++){let tt=Mt[at];Ut(tt[0]+K,tt[1]+K,tt[2]+K)}}else{for(let it=0;it<vt;it++){let K=Mt[it];Ut(K[2],K[1],K[0])}for(let it=0;it<vt;it++){let K=Mt[it];Ut(K[0]+V*u,K[1]+V*u,K[2]+V*u)}}i.addGroup(U,s.length/3-U,0)}function $(){let U=s.length/3,it=0;rt(Y,it),it+=Y.length;for(let K=0,at=I.length;K<at;K++){let tt=I[K];rt(tt,it),it+=tt.length}i.addGroup(U,s.length/3-U,1)}function rt(U,it){let K=U.length;for(;--K>=0;){let at=K,tt=K-1;tt<0&&(tt=U.length-1);for(let St=0,Tt=u+m*2;St<Tt;St++){let Rt=V*St,Lt=V*(St+1),q=it+at+Rt,Gt=it+tt+Rt,Bt=it+tt+Lt,z=it+at+Lt;It(q,Gt,Bt,z)}}}function Et(U,it,K){c.push(U),c.push(it),c.push(K)}function Ut(U,it,K){Pt(U),Pt(it),Pt(K);let at=s.length/3,tt=x.generateTopUV(i,s,at-3,at-2,at-1);$t(tt[0]),$t(tt[1]),$t(tt[2])}function It(U,it,K,at){Pt(U),Pt(it),Pt(at),Pt(it),Pt(K),Pt(at);let tt=s.length/3,St=x.generateSideWallUV(i,s,tt-6,tt-3,tt-2,tt-1);$t(St[0]),$t(St[1]),$t(St[3]),$t(St[1]),$t(St[2]),$t(St[3])}function Pt(U){s.push(c[U*3+0]),s.push(c[U*3+1]),s.push(c[U*3+2])}function $t(U){r.push(U.x),r.push(U.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Ib(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Dc[s.type]().fromJSON(s)),new n(i,t.options)}},Cb={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],c=t[i*3+1],l=t[s*3],u=t[s*3+1];return[new Ot(r,o),new Ot(a,c),new Ot(l,u)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[i*3],u=t[i*3+1],f=t[i*3+2],h=t[s*3],d=t[s*3+1],p=t[s*3+2],y=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new Ot(o,1-c),new Ot(l,1-f),new Ot(h,1-p),new Ot(y,1-g)]:[new Ot(a,1-c),new Ot(u,1-f),new Ot(d,1-p),new Ot(m,1-g)]}};function Ib(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ko=class n extends Ho{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},Jo=class n extends re{constructor(t=[new Ot(0,-.5),new Ot(.5,0),new Ot(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=le(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],u=1/e,f=new X,h=new Ot,d=new X,p=new X,y=new X,m=0,g=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:m=t[x+1].x-t[x].x,g=t[x+1].y-t[x].y,d.x=g*1,d.y=-m,d.z=g*0,y.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(y.x,y.y,y.z);break;default:m=t[x+1].x-t[x].x,g=t[x+1].y-t[x].y,d.x=g*1,d.y=-m,d.z=g*0,p.copy(d),d.x+=y.x,d.y+=y.y,d.z+=y.z,d.normalize(),c.push(d.x,d.y,d.z),y.copy(p)}for(let x=0;x<=e;x++){let v=i+x*u*s,_=Math.sin(v),b=Math.cos(v);for(let M=0;M<=t.length-1;M++){f.x=t[M].x*_,f.y=t[M].y,f.z=t[M].x*b,o.push(f.x,f.y,f.z),h.x=x/e,h.y=M/(t.length-1),a.push(h.x,h.y);let T=c[3*M+0]*_,S=c[3*M+1],R=c[3*M+0]*b;l.push(T,S,R)}}for(let x=0;x<e;x++)for(let v=0;v<t.length-1;v++){let _=v+x*t.length,b=_,M=_+t.length,T=_+t.length+1,S=_+1;r.push(b,M,S),r.push(T,S,M)}this.setIndex(r),this.setAttribute("position",new Xt(o,3)),this.setAttribute("uv",new Xt(a,2)),this.setAttribute("normal",new Xt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}};var wn=class n extends re{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,f=t/a,h=e/c,d=[],p=[],y=[],m=[];for(let g=0;g<u;g++){let x=g*h-o;for(let v=0;v<l;v++){let _=v*f-r;p.push(_,-x,0),y.push(0,0,1),m.push(v/a),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let x=0;x<a;x++){let v=x+l*g,_=x+l*(g+1),b=x+1+l*(g+1),M=x+1+l*g;d.push(v,_,M),d.push(_,b,M)}this.setIndex(d),this.setAttribute("position",new Xt(p,3)),this.setAttribute("normal",new Xt(y,3)),this.setAttribute("uv",new Xt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Qo=class n extends re{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],c=[],l=[],u=[],f=t,h=(e-t)/s,d=new X,p=new Ot;for(let y=0;y<=s;y++){for(let m=0;m<=i;m++){let g=r+m/i*o;d.x=f*Math.cos(g),d.y=f*Math.sin(g),c.push(d.x,d.y,d.z),l.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,u.push(p.x,p.y)}f+=h}for(let y=0;y<s;y++){let m=y*(i+1);for(let g=0;g<i;g++){let x=g+m,v=x,_=x+i+1,b=x+i+2,M=x+1;a.push(v,_,M),a.push(_,b,M)}}this.setIndex(a),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(l,3)),this.setAttribute("uv",new Xt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Ti=class n extends re{constructor(t=new Ke([new Ot(0,.5),new Ot(-.5,-.5),new Ot(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new Xt(s,3)),this.setAttribute("normal",new Xt(r,3)),this.setAttribute("uv",new Xt(o,2));function l(u){let f=s.length/3,h=u.extractPoints(e),d=h.shape,p=h.holes;Fn.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,g=p.length;m<g;m++){let x=p[m];Fn.isClockWise(x)===!0&&(p[m]=x.reverse())}let y=Fn.triangulateShape(d,p);for(let m=0,g=p.length;m<g;m++){let x=p[m];d=d.concat(x)}for(let m=0,g=d.length;m<g;m++){let x=d[m];s.push(x.x,x.y,0),r.push(0,0,1),o.push(x.x,x.y)}for(let m=0,g=y.length;m<g;m++){let x=y[m],v=x[0]+f,_=x[1]+f,b=x[2]+f;i.push(v,_,b),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Pb(e,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];i.push(o)}return new n(i,t.curveSegments)}};function Pb(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}var ve=class n extends re{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,u=[],f=new X,h=new X,d=[],p=[],y=[],m=[];for(let g=0;g<=i;g++){let x=[],v=g/i,_=o+v*a,b=t*Math.cos(_),M=Math.sqrt(t*t-b*b),T=0;g===0&&o===0?T=.5/e:g===i&&c===Math.PI&&(T=-.5/e);for(let S=0;S<=e;S++){let R=S/e,P=s+R*r;f.x=-M*Math.cos(P),f.y=b,f.z=M*Math.sin(P),p.push(f.x,f.y,f.z),h.copy(f).normalize(),y.push(h.x,h.y,h.z),m.push(R+T,1-v),x.push(l++)}u.push(x)}for(let g=0;g<i;g++)for(let x=0;x<e;x++){let v=u[g][x+1],_=u[g][x],b=u[g+1][x],M=u[g+1][x+1];(g!==0||o>0)&&d.push(v,_,M),(g!==i-1||c<Math.PI)&&d.push(_,b,M)}this.setIndex(d),this.setAttribute("position",new Xt(p,3)),this.setAttribute("normal",new Xt(y,3)),this.setAttribute("uv",new Xt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var cn=class n extends re{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let c=[],l=[],u=[],f=[],h=new X,d=new X,p=new X;for(let y=0;y<=i;y++){let m=o+y/i*a;for(let g=0;g<=s;g++){let x=g/s*r;d.x=(t+e*Math.cos(m))*Math.cos(x),d.y=(t+e*Math.cos(m))*Math.sin(x),d.z=e*Math.sin(m),l.push(d.x,d.y,d.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),p.subVectors(d,h).normalize(),u.push(p.x,p.y,p.z),f.push(g/s),f.push(y/i)}}for(let y=1;y<=i;y++)for(let m=1;m<=s;m++){let g=(s+1)*y+m-1,x=(s+1)*(y-1)+m-1,v=(s+1)*(y-1)+m,_=(s+1)*y+m;c.push(g,x,_),c.push(x,v,_)}this.setIndex(c),this.setAttribute("position",new Xt(l,3)),this.setAttribute("normal",new Xt(u,3)),this.setAttribute("uv",new Xt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var kr=class n extends re{constructor(t=new qo(new X(-1,-1,0),new X(-1,1,0),new X(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new X,c=new X,l=new Ot,u=new X,f=[],h=[],d=[],p=[];y(),this.setIndex(p),this.setAttribute("position",new Xt(f,3)),this.setAttribute("normal",new Xt(h,3)),this.setAttribute("uv",new Xt(d,2));function y(){for(let v=0;v<e;v++)m(v);m(r===!1?e:0),x(),g()}function m(v){u=t.getPointAt(v/e,u);let _=o.normals[v],b=o.binormals[v];for(let M=0;M<=s;M++){let T=M/s*Math.PI*2,S=Math.sin(T),R=-Math.cos(T);c.x=R*_.x+S*b.x,c.y=R*_.y+S*b.y,c.z=R*_.z+S*b.z,c.normalize(),h.push(c.x,c.y,c.z),a.x=u.x+i*c.x,a.y=u.y+i*c.y,a.z=u.z+i*c.z,f.push(a.x,a.y,a.z)}}function g(){for(let v=1;v<=e;v++)for(let _=1;_<=s;_++){let b=(s+1)*(v-1)+(_-1),M=(s+1)*v+(_-1),T=(s+1)*v+_,S=(s+1)*(v-1)+_;p.push(b,M,S),p.push(M,T,S)}}function x(){for(let v=0;v<=e;v++)for(let _=0;_<=s;_++)l.x=v/e,l.y=_/s,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new Dc[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},ta=class extends re{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],i=new Set,s=new X,r=new X;if(t.index!==null){let o=t.attributes.position,a=t.index,c=t.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){let f=c[l],h=f.start,d=f.count;for(let p=h,y=h+d;p<y;p+=3)for(let m=0;m<3;m++){let g=a.getX(p+m),x=a.getX(p+(m+1)%3);s.fromBufferAttribute(o,g),r.fromBufferAttribute(o,x),op(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let o=t.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){let u=3*a+l,f=3*a+(l+1)%3;s.fromBufferAttribute(o,u),r.fromBufferAttribute(o,f),op(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Xt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function op(n,t,e){let i=`${n.x},${n.y},${n.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${n.x},${n.y},${n.z}`;return e.has(i)===!0||e.has(s)===!0?!1:(e.add(i),e.add(s),!0)}function qs(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(ap(s))s.isRenderTargetTexture?(se("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(ap(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function En(n){let t={};for(let e=0;e<n.length;e++){let i=qs(n[e]);for(let s in i)t[s]=i[s]}return t}function ap(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Lb(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function jh(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ye.workingColorSpace}var qi={clone:qs,merge:En},Nb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Db=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ze=class extends li{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nb,this.fragmentShader=Db,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qs(t.uniforms),this.uniformsGroups=Lb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Wt().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ot().fromArray(s.value);break;case"v3":this.uniforms[i].value=new X().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ae().fromArray(s.value);break;case"m3":this.uniforms[i].value=new ue().fromArray(s.value);break;case"m4":this.uniforms[i].value=new be().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Uc=class extends ze{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ne=class extends li{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ga,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Or=class extends li{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ga,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=Kc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},kc=class extends li{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Oc=class extends li{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function yr(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function hh(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var us=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Bc=class extends us{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mh,endingEnd:mh}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case gh:r=t,a=2*e-i;break;case yh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case gh:o=t,c=2*i-e;break;case yh:o=1,c=i+s[1]-s[0];break;default:o=t-1,c=e}let l=(i-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,p=(i-e)/(s-e),y=p*p,m=y*p,g=-h*m+2*h*y-h*p,x=(1+h)*m+(-1.5-2*h)*y+(-.5+h)*p+1,v=(-1-d)*m+(1.5+d)*y+.5*p,_=d*m-d*y;for(let b=0;b!==a;++b)r[b]=g*o[u+b]+x*o[l+b]+v*o[c+b]+_*o[f+b];return r}},zc=class extends us{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(i-e)/(s-e),f=1-u;for(let h=0;h!==a;++h)r[h]=o[l+h]*f+o[c+h]*u;return r}},Hc=class extends us{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Gc=class extends us{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this.inTangents,f=this.outTangents;if(!u||!f){let p=(i-e)/(s-e),y=1-p;for(let m=0;m!==a;++m)r[m]=o[l+m]*y+o[c+m]*p;return r}let h=a*2,d=t-1;for(let p=0;p!==a;++p){let y=o[l+p],m=o[c+p],g=d*h+p*2,x=f[g],v=f[g+1],_=t*h+p*2,b=u[_],M=u[_+1],T=Ub(i,e,x,b,s);r[p]=sm(T,y,v,M,m)}return r}};function sm(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Fb(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Ub(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=sm(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let c=Fb(r,t,e,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var Wn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=yr(e,this.TimeBufferType),this.values=yr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:yr(t.times,Array),values:yr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),hh(t.settings)&&(i.settings={inTangents:yr(t.settings.inTangents,Array),outTangents:yr(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Hc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new zc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Bc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Gc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ao:e=this.InterpolantFactoryMethodDiscrete;break;case Sc:e=this.InterpolantFactoryMethodLinear;break;case pc:e=this.InterpolantFactoryMethodSmooth;break;case ph:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return se("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ao;case this.InterpolantFactoryMethodLinear:return Sc;case this.InterpolantFactoryMethodSmooth:return pc;case this.InterpolantFactoryMethodBezier:return ph}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;hh(this.settings)&&(cp(this.settings.inTangents,t),cp(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ae("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(ae("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){ae("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){ae("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Sx(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){ae("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===pc,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(s)c=!0;else{let f=a*i,h=f-i,d=f+i;for(let p=0;p!==i;++p){let y=e[f+p];if(y!==e[h+p]||y!==e[d+p]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let f=a*i,h=o*i;for(let d=0;d!==i;++d)e[h+d]=e[f+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,hh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function cp(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Wn.prototype.ValueTypeName="";Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=Sc;var hs=class extends Wn{constructor(t,e,i){super(t,e,i)}};hs.prototype.ValueTypeName="bool";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=Ao;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;var Vc=class extends Wn{constructor(t,e,i,s){super(t,e,i,s)}};Vc.prototype.ValueTypeName="color";var Wc=class extends Wn{constructor(t,e,i,s){super(t,e,i,s)}};Wc.prototype.ValueTypeName="number";var Xc=class extends us{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-e)/(s-e),l=t*a;for(let u=l+a;l!==u;l+=4)an.slerpFlat(r,0,o,l-a,o,l,c);return r}},ea=class extends Wn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Xc(this.times,this.values,this.getValueSize(),t)}};ea.prototype.ValueTypeName="quaternion";ea.prototype.InterpolantFactoryMethodSmooth=void 0;var fs=class extends Wn{constructor(t,e,i){super(t,e,i)}};fs.prototype.ValueTypeName="string";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=Ao;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;var qc=class extends Wn{constructor(t,e,i,s){super(t,e,i,s)}};qc.prototype.ValueTypeName="vector";var Yc=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){let f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){let d=l[f],p=l[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},rm=new Yc,$c=class{constructor(t){this.manager=t!==void 0?t:rm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};$c.DEFAULT_MATERIAL_NAME="__DEFAULT";var Br=class extends Be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Vs=class extends Br{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},fh=new be,lp=new X,up=new X,na=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ot(512,512),this.mapType=kn,this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new as,this._frameExtents=new Ot(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;lp.setFromMatrixPosition(t.matrixWorld),e.position.copy(lp),up.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(up),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){fh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(fh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===Er||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(fh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},hc=new X,fc=new an,vi=new X,ia=class extends Be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(hc,fc,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(hc,fc,vi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(hc,fc,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(hc,fc,vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},rs=new X,hp=new Ot,fp=new Ot,In=class extends ia{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ar*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(So*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ar*2*Math.atan(Math.tan(So*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(rs.x,rs.y).multiplyScalar(-t/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rs.x,rs.y).multiplyScalar(-t/rs.z)}getViewSize(t,e){return this.getViewBounds(t,hp,fp),e.subVectors(fp,hp)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(So*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Mh=class extends na{constructor(){super(new In(90,1,.5,500)),this.isPointLightShadow=!0}},sa=class extends Br{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Mh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},ds=class extends ia{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Sh=class extends na{constructor(){super(new ds(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ps=class extends Br{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.target=new Be,this.shadow=new Sh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ra=class extends re{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var xr=-90,br=1,Zc=class extends Be{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new In(xr,br,t,e);s.layers=this.layers,this.add(s);let r=new In(xr,br,t,e);r.layers=this.layers,this.add(r);let o=new In(xr,br,t,e);o.layers=this.layers,this.add(o);let a=new In(xr,br,t,e);a.layers=this.layers,this.add(a);let c=new In(xr,br,t,e);c.layers=this.layers,this.add(c);let l=new In(xr,br,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===ci)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Er)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},jc=class extends In{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Kh="\\[\\]\\.:\\/",kb=new RegExp("["+Kh+"]","g"),Jh="[^"+Kh+"]",Ob="[^"+Kh.replace("\\.","")+"]",Bb=/((?:WC+[\/:])*)/.source.replace("WC",Jh),zb=/(WCOD+)?/.source.replace("WCOD",Ob),Hb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jh),Gb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jh),Vb=new RegExp("^"+Bb+zb+Hb+Gb+"$"),Wb=["material","materials","bones","map"],wh=class{constructor(t,e,i){let s=i||Oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Oe=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(kb,"")}static parseTrackName(t){let e=Vb.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Wb.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=i(a.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){se("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){ae("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ae("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ae("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ae("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ae("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){ae("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){ae("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;ae("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ae("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ae("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Oe.Composite=wh;Oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Oe.prototype.GetterByBindingType=[Oe.prototype._getValue_direct,Oe.prototype._getValue_array,Oe.prototype._getValue_arrayElement,Oe.prototype._getValue_toArray];Oe.prototype.SetterByBindingTypeAndVersioning=[[Oe.prototype._setValue_direct,Oe.prototype._setValue_direct_setNeedsUpdate,Oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_array,Oe.prototype._setValue_array_setNeedsUpdate,Oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_arrayElement,Oe.prototype._setValue_arrayElement_setNeedsUpdate,Oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_fromArray,Oe.prototype._setValue_fromArray_setNeedsUpdate,Oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var B3=new Float32Array(1);var ms=class extends Uo{constructor(t,e,i=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var dp=new be,gs=class{constructor(t,e,i=0,s=1/0){this.ray=new Os(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Cr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ae("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return dp.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(dp),this}intersectObject(t,e=!0,i=[]){return Eh(t,this,i,e),i.sort(pp),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Eh(t[s],this,i,e);return i.sort(pp),i}};function pp(n,t){return n.distance-t.distance}function Eh(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Eh(r[o],t,e,!0)}}var Th=class n{static{n.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};var mp=new X,dc=new X,vr=new X,_r=new X,dh=new X,Xb=new X,qb=new X,oa=class{constructor(t=new X,e=new X){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){mp.subVectors(t,this.start),dc.subVectors(this.end,this.start);let i=dc.dot(dc);if(i===0)return 0;let r=dc.dot(mp)/i;return e&&(r=le(r,0,1)),r}closestPointToPoint(t,e,i){let s=this.closestPointToPointParameter(t,e);return this.delta(i).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=Xb,i=qb){let s=10000000000000001e-32,r,o,a=this.start,c=t.start,l=this.end,u=t.end;vr.subVectors(l,a),_r.subVectors(u,c),dh.subVectors(a,c);let f=vr.dot(vr),h=_r.dot(_r),d=_r.dot(dh);if(f<=s&&h<=s)return e.copy(a),i.copy(c),e.sub(i),e.dot(e);if(f<=s)r=0,o=d/h,o=le(o,0,1);else{let p=vr.dot(dh);if(h<=s)o=0,r=le(-p/f,0,1);else{let y=vr.dot(_r),m=f*h-y*y;m!==0?r=le((y*d-p*h)/m,0,1):r=0,o=(y*r+d)/h,o<0?(o=0,r=le(-p/f,0,1)):o>1&&(o=1,r=le((y-p)/f,0,1))}}return e.copy(a).addScaledVector(vr,r),i.copy(c).addScaledVector(_r,o),e.distanceToSquared(i)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function Qh(n,t,e,i){let s=Yb(i);switch(e){case Wh:return n*t;case sl:return n*t/s.components*s.byteLength;case rl:return n*t/s.components*s.byteLength;case Ms:return n*t*2/s.components*s.byteLength;case ol:return n*t*2/s.components*s.byteLength;case Xh:return n*t*3/s.components*s.byteLength;case Jn:return n*t*4/s.components*s.byteLength;case al:return n*t*4/s.components*s.byteLength;case ua:case ha:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case fa:case da:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ll:case hl:return Math.max(n,16)*Math.max(t,8)/4;case cl:case ul:return Math.max(n,8)*Math.max(t,8)/2;case fl:case dl:case ml:case gl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case pl:case pa:case yl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case xl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case bl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case vl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case _l:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ml:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Sl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case wl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case El:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Tl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Al:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Rl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Cl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Il:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Pl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ll:case Nl:case Dl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Fl:case Ul:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ma:case kl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Yb(n){switch(n){case kn:case zh:return{byteLength:1,components:1};case Gr:case Hh:case di:return{byteLength:2,components:1};case nl:case il:return{byteLength:2,components:4};case fi:case el:case Kn:return{byteLength:4,components:1};case Gh:case Vh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?se("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Am(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Jb(n){let t=new WeakMap;function e(a,c){let l=a.array,u=a.usage,f=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,c,l){let u=c.array,f=c.updateRanges;if(n.bindBuffer(l,a),f.length===0)n.bufferSubData(l,0,u);else{f.sort((d,p)=>d.start-p.start);let h=0;for(let d=1;d<f.length;d++){let p=f[h],y=f[d];y.start<=p.start+p.count+1?p.count=Math.max(p.count,y.start+y.count-p.start):(++h,f[h]=y)}f.length=h+1;for(let d=0,p=f.length;d<p;d++){let y=f[d];n.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Qb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,t1=`#ifdef USE_ALPHAHASH
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
#endif`,e1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,n1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,i1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,s1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,r1=`#ifdef USE_AOMAP
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
#endif`,o1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,a1=`#ifdef USE_BATCHING
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
#endif`,c1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,l1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,u1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,h1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,f1=`#ifdef USE_IRIDESCENCE
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
#endif`,d1=`#ifdef USE_BUMPMAP
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
#endif`,p1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,m1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,g1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,y1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,x1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,b1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,v1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,_1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,M1=`#define PI 3.141592653589793
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
} // validated`,S1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,w1=`vec3 transformedNormal = objectNormal;
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
#endif`,E1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,T1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,A1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,R1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,C1="gl_FragColor = linearToOutputTexel( gl_FragColor );",I1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,P1=`#ifdef USE_ENVMAP
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
#endif`,L1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,N1=`#ifdef USE_ENVMAP
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
#endif`,D1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,F1=`#ifdef USE_ENVMAP
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
#endif`,U1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,k1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,O1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,B1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,z1=`#ifdef USE_GRADIENTMAP
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
}`,H1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,G1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,V1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,W1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,X1=`#ifdef USE_ENVMAP
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
#endif`,q1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Y1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Z1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,j1=`PhysicalMaterial material;
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
#endif`,K1=`uniform sampler2D dfgLUT;
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
}`,J1=`
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
#endif`,Q1=`#if defined( RE_IndirectDiffuse )
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
#endif`,tv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ev=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,nv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ov=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,av=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lv=`#if defined( USE_POINTS_UV )
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
#endif`,uv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mv=`#ifdef USE_MORPHTARGETS
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
#endif`,gv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_v=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Mv=`#ifdef USE_NORMALMAP
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
#endif`,Sv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ev=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Av=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Iv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Uv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ov=`float getShadowMask() {
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
}`,Bv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zv=`#ifdef USE_SKINNING
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
#endif`,Hv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gv=`#ifdef USE_SKINNING
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
#endif`,Vv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yv=`#ifdef USE_TRANSMISSION
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
#endif`,$v=`#ifdef USE_TRANSMISSION
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
#endif`,Zv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Qv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,t_=`uniform sampler2D t2D;
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
}`,e_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,i_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r_=`#include <common>
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
}`,o_=`#if DEPTH_PACKING == 3200
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
}`,a_=`#define DISTANCE
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
}`,c_=`#define DISTANCE
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
}`,l_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,u_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h_=`uniform float scale;
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
}`,f_=`uniform vec3 diffuse;
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
}`,d_=`#include <common>
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
}`,p_=`uniform vec3 diffuse;
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
}`,m_=`#define LAMBERT
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
}`,g_=`#define LAMBERT
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
}`,y_=`#define MATCAP
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
}`,x_=`#define MATCAP
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
}`,b_=`#define NORMAL
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
}`,v_=`#define NORMAL
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
}`,__=`#define PHONG
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
}`,M_=`#define PHONG
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
}`,S_=`#define STANDARD
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
}`,w_=`#define STANDARD
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
}`,E_=`#define TOON
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
}`,T_=`#define TOON
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
}`,A_=`uniform float size;
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
}`,R_=`uniform vec3 diffuse;
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
}`,C_=`#include <common>
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
}`,I_=`uniform vec3 color;
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
}`,P_=`uniform float rotation;
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
}`,L_=`uniform vec3 diffuse;
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
}`,me={alphahash_fragment:Qb,alphahash_pars_fragment:t1,alphamap_fragment:e1,alphamap_pars_fragment:n1,alphatest_fragment:i1,alphatest_pars_fragment:s1,aomap_fragment:r1,aomap_pars_fragment:o1,batching_pars_vertex:a1,batching_vertex:c1,begin_vertex:l1,beginnormal_vertex:u1,bsdfs:h1,iridescence_fragment:f1,bumpmap_pars_fragment:d1,clipping_planes_fragment:p1,clipping_planes_pars_fragment:m1,clipping_planes_pars_vertex:g1,clipping_planes_vertex:y1,color_fragment:x1,color_pars_fragment:b1,color_pars_vertex:v1,color_vertex:_1,common:M1,cube_uv_reflection_fragment:S1,defaultnormal_vertex:w1,displacementmap_pars_vertex:E1,displacementmap_vertex:T1,emissivemap_fragment:A1,emissivemap_pars_fragment:R1,colorspace_fragment:C1,colorspace_pars_fragment:I1,envmap_fragment:P1,envmap_common_pars_fragment:L1,envmap_pars_fragment:N1,envmap_pars_vertex:D1,envmap_physical_pars_fragment:X1,envmap_vertex:F1,fog_vertex:U1,fog_pars_vertex:k1,fog_fragment:O1,fog_pars_fragment:B1,gradientmap_pars_fragment:z1,lightmap_pars_fragment:H1,lights_lambert_fragment:G1,lights_lambert_pars_fragment:V1,lights_pars_begin:W1,lights_toon_fragment:q1,lights_toon_pars_fragment:Y1,lights_phong_fragment:$1,lights_phong_pars_fragment:Z1,lights_physical_fragment:j1,lights_physical_pars_fragment:K1,lights_fragment_begin:J1,lights_fragment_maps:Q1,lights_fragment_end:tv,lightprobes_pars_fragment:ev,logdepthbuf_fragment:nv,logdepthbuf_pars_fragment:iv,logdepthbuf_pars_vertex:sv,logdepthbuf_vertex:rv,map_fragment:ov,map_pars_fragment:av,map_particle_fragment:cv,map_particle_pars_fragment:lv,metalnessmap_fragment:uv,metalnessmap_pars_fragment:hv,morphinstance_vertex:fv,morphcolor_vertex:dv,morphnormal_vertex:pv,morphtarget_pars_vertex:mv,morphtarget_vertex:gv,normal_fragment_begin:yv,normal_fragment_maps:xv,normal_pars_fragment:bv,normal_pars_vertex:vv,normal_vertex:_v,normalmap_pars_fragment:Mv,clearcoat_normal_fragment_begin:Sv,clearcoat_normal_fragment_maps:wv,clearcoat_pars_fragment:Ev,iridescence_pars_fragment:Tv,opaque_fragment:Av,packing:Rv,premultiplied_alpha_fragment:Cv,project_vertex:Iv,dithering_fragment:Pv,dithering_pars_fragment:Lv,roughnessmap_fragment:Nv,roughnessmap_pars_fragment:Dv,shadowmap_pars_fragment:Fv,shadowmap_pars_vertex:Uv,shadowmap_vertex:kv,shadowmask_pars_fragment:Ov,skinbase_vertex:Bv,skinning_pars_vertex:zv,skinning_vertex:Hv,skinnormal_vertex:Gv,specularmap_fragment:Vv,specularmap_pars_fragment:Wv,tonemapping_fragment:Xv,tonemapping_pars_fragment:qv,transmission_fragment:Yv,transmission_pars_fragment:$v,uv_pars_fragment:Zv,uv_pars_vertex:jv,uv_vertex:Kv,worldpos_vertex:Jv,background_vert:Qv,background_frag:t_,backgroundCube_vert:e_,backgroundCube_frag:n_,cube_vert:i_,cube_frag:s_,depth_vert:r_,depth_frag:o_,distance_vert:a_,distance_frag:c_,equirect_vert:l_,equirect_frag:u_,linedashed_vert:h_,linedashed_frag:f_,meshbasic_vert:d_,meshbasic_frag:p_,meshlambert_vert:m_,meshlambert_frag:g_,meshmatcap_vert:y_,meshmatcap_frag:x_,meshnormal_vert:b_,meshnormal_frag:v_,meshphong_vert:__,meshphong_frag:M_,meshphysical_vert:S_,meshphysical_frag:w_,meshtoon_vert:E_,meshtoon_frag:T_,points_vert:A_,points_frag:R_,shadow_vert:C_,shadow_frag:I_,sprite_vert:P_,sprite_frag:L_},Vt={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new X},probesMax:{value:new X},probesResolution:{value:new X}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},Nn={basic:{uniforms:En([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:En([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new Wt(0)},envMapIntensity:{value:1}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:En([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:En([Vt.common,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.roughnessmap,Vt.metalnessmap,Vt.fog,Vt.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:En([Vt.common,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.gradientmap,Vt.fog,Vt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:En([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:En([Vt.points,Vt.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:En([Vt.common,Vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:En([Vt.common,Vt.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:En([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:En([Vt.sprite,Vt.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distance:{uniforms:En([Vt.common,Vt.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distance_vert,fragmentShader:me.distance_frag},shadow:{uniforms:En([Vt.lights,Vt.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};Nn.physical={uniforms:En([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};var zl={r:0,b:0,g:0},N_=new be,Rm=new ue;Rm.set(-1,0,0,0,1,0,0,0,1);function D_(n,t,e,i,s,r){let o=new Wt(0),a=s===!0?0:1,c,l,u=null,f=0,h=null;function d(x){let v=x.isScene===!0?x.background:null;if(v&&v.isTexture){let _=x.backgroundBlurriness>0;v=t.get(v,_)}return v}function p(x){let v=!1,_=d(x);_===null?m(o,a):_&&_.isColor&&(m(_,1),v=!0);let b=n.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||v)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(x,v){let _=d(v);_&&(_.isCubeTexture||_.mapping===ca)?(l===void 0&&(l=new ne(new xe(1,1,1),new ze({name:"BackgroundCubeMaterial",uniforms:qs(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,M,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(N_.makeRotationFromEuler(v.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Rm),l.material.toneMapped=ye.getTransfer(_.colorSpace)!==Te,(u!==_||f!==_.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=_,f=_.version,h=n.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new ne(new wn(2,2),new ze({name:"BackgroundMaterial",uniforms:qs(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:xs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ye.getTransfer(_.colorSpace)!==Te,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=_,f=_.version,h=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function m(x,v){x.getRGB(zl,jh(n)),e.buffers.color.setClear(zl.r,zl.g,zl.b,v,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,v=1){o.set(x),a=v,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,m(o,a)},render:p,addToRenderList:y,dispose:g}}function F_(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,o=!1;function a(I,F,H,B,Y){let G=!1,V=f(I,B,H,F);r!==V&&(r=V,l(r.object)),G=d(I,B,H,Y),G&&p(I,B,H,Y),Y!==null&&t.update(Y,n.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,_(I,F,H,B),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function c(){return n.createVertexArray()}function l(I){return n.bindVertexArray(I)}function u(I){return n.deleteVertexArray(I)}function f(I,F,H,B){let Y=B.wireframe===!0,G=i[F.id];G===void 0&&(G={},i[F.id]=G);let V=I.isInstancedMesh===!0?I.id:0,ft=G[V];ft===void 0&&(ft={},G[V]=ft);let J=ft[H.id];J===void 0&&(J={},ft[H.id]=J);let W=J[Y];return W===void 0&&(W=h(c()),J[Y]=W),W}function h(I){let F=[],H=[],B=[];for(let Y=0;Y<e;Y++)F[Y]=0,H[Y]=0,B[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:H,attributeDivisors:B,object:I,attributes:{},index:null}}function d(I,F,H,B){let Y=r.attributes,G=F.attributes,V=0,ft=H.getAttributes();for(let J in ft)if(ft[J].location>=0){let st=Y[J],bt=G[J];if(bt===void 0&&(J==="instanceMatrix"&&I.instanceMatrix&&(bt=I.instanceMatrix),J==="instanceColor"&&I.instanceColor&&(bt=I.instanceColor)),st===void 0||st.attribute!==bt||bt&&st.data!==bt.data)return!0;V++}return r.attributesNum!==V||r.index!==B}function p(I,F,H,B){let Y={},G=F.attributes,V=0,ft=H.getAttributes();for(let J in ft)if(ft[J].location>=0){let st=G[J];st===void 0&&(J==="instanceMatrix"&&I.instanceMatrix&&(st=I.instanceMatrix),J==="instanceColor"&&I.instanceColor&&(st=I.instanceColor));let bt={};bt.attribute=st,st&&st.data&&(bt.data=st.data),Y[J]=bt,V++}r.attributes=Y,r.attributesNum=V,r.index=B}function y(){let I=r.newAttributes;for(let F=0,H=I.length;F<H;F++)I[F]=0}function m(I){g(I,0)}function g(I,F){let H=r.newAttributes,B=r.enabledAttributes,Y=r.attributeDivisors;H[I]=1,B[I]===0&&(n.enableVertexAttribArray(I),B[I]=1),Y[I]!==F&&(n.vertexAttribDivisor(I,F),Y[I]=F)}function x(){let I=r.newAttributes,F=r.enabledAttributes;for(let H=0,B=F.length;H<B;H++)F[H]!==I[H]&&(n.disableVertexAttribArray(H),F[H]=0)}function v(I,F,H,B,Y,G,V){V===!0?n.vertexAttribIPointer(I,F,H,Y,G):n.vertexAttribPointer(I,F,H,B,Y,G)}function _(I,F,H,B){y();let Y=B.attributes,G=H.getAttributes(),V=F.defaultAttributeValues;for(let ft in G){let J=G[ft];if(J.location>=0){let W=Y[ft];if(W===void 0&&(ft==="instanceMatrix"&&I.instanceMatrix&&(W=I.instanceMatrix),ft==="instanceColor"&&I.instanceColor&&(W=I.instanceColor)),W!==void 0){let st=W.normalized,bt=W.itemSize,Mt=t.get(W);if(Mt===void 0)continue;let vt=Mt.buffer,xt=Mt.type,yt=Mt.bytesPerElement,$=xt===n.INT||xt===n.UNSIGNED_INT||W.gpuType===el;if(W.isInterleavedBufferAttribute){let rt=W.data,Et=rt.stride,Ut=W.offset;if(rt.isInstancedInterleavedBuffer){for(let It=0;It<J.locationSize;It++)g(J.location+It,rt.meshPerAttribute);I.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let It=0;It<J.locationSize;It++)m(J.location+It);n.bindBuffer(n.ARRAY_BUFFER,vt);for(let It=0;It<J.locationSize;It++)v(J.location+It,bt/J.locationSize,xt,st,Et*yt,(Ut+bt/J.locationSize*It)*yt,$)}else{if(W.isInstancedBufferAttribute){for(let rt=0;rt<J.locationSize;rt++)g(J.location+rt,W.meshPerAttribute);I.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let rt=0;rt<J.locationSize;rt++)m(J.location+rt);n.bindBuffer(n.ARRAY_BUFFER,vt);for(let rt=0;rt<J.locationSize;rt++)v(J.location+rt,bt/J.locationSize,xt,st,bt*yt,bt/J.locationSize*rt*yt,$)}}else if(V!==void 0){let st=V[ft];if(st!==void 0)switch(st.length){case 2:n.vertexAttrib2fv(J.location,st);break;case 3:n.vertexAttrib3fv(J.location,st);break;case 4:n.vertexAttrib4fv(J.location,st);break;default:n.vertexAttrib1fv(J.location,st)}}}}x()}function b(){R();for(let I in i){let F=i[I];for(let H in F){let B=F[H];for(let Y in B){let G=B[Y];for(let V in G)u(G[V].object),delete G[V];delete B[Y]}}delete i[I]}}function M(I){if(i[I.id]===void 0)return;let F=i[I.id];for(let H in F){let B=F[H];for(let Y in B){let G=B[Y];for(let V in G)u(G[V].object),delete G[V];delete B[Y]}}delete i[I.id]}function T(I){for(let F in i){let H=i[F];for(let B in H){let Y=H[B];if(Y[I.id]===void 0)continue;let G=Y[I.id];for(let V in G)u(G[V].object),delete G[V];delete Y[I.id]}}}function S(I){for(let F in i){let H=i[F],B=I.isInstancedMesh===!0?I.id:0,Y=H[B];if(Y!==void 0){for(let G in Y){let V=Y[G];for(let ft in V)u(V[ft].object),delete V[ft];delete Y[G]}delete H[B],Object.keys(H).length===0&&delete i[F]}}}function R(){P(),o=!0,r!==s&&(r=s,l(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:P,dispose:b,releaseStatesOfGeometry:M,releaseStatesOfObject:S,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:m,disableUnusedAttributes:x}}function U_(n,t,e){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),e.update(l,i,1)}function o(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),e.update(l,i,u))}function a(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let h=0;for(let d=0;d<u;d++)h+=l[d];e.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function k_(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==Jn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let S=T===di&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==kn&&T!==Kn&&!S&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(se("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&se("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),M=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:y,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:_,maxSamples:b,samples:M}}function O_(n){let t=this,e=null,i=0,s=!1,r=!1,o=new Gn,a=new ue,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||i!==0||s;return s=h,i=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){let p=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,g=n.get(f);if(!s||p===null||p.length===0||r&&!m)r?u(null):l();else{let x=r?0:i,v=x*4,_=g.clippingState||null;c.value=_,_=u(p,h,v,d);for(let b=0;b!==v;++b)_[b]=e[b];g.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,h,d,p){let y=f!==null?f.length:0,m=null;if(y!==0){if(m=c.value,p!==!0||m===null){let g=d+y*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<g)&&(m=new Float32Array(g));for(let v=0,_=d;v!==y;++v,_+=4)o.copy(f[v]).applyMatrix4(x,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}var Xr=4,B_=6,z_=20,H_=256,ya=new ds,om=new Wt,tf=null,ef=0,nf=0,sf=!1,G_=new X,Ys=new X,Gl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=G_}=r;tf=this._renderer.getRenderTarget(),ef=this._renderer.getActiveCubeFace(),nf=this._renderer.getActiveMipmapLevel(),sf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(tf,ef,nf),this._renderer.xr.enabled=sf,t.scissorTest=!1,Wr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===bs||t.mapping===Xs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),tf=this._renderer.getRenderTarget(),ef=this._renderer.getActiveCubeFace(),nf=this._renderer.getActiveMipmapLevel(),sf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:di,format:Jn,colorSpace:Ro,depthBuffer:!1},s=am(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=am(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=V_(r)),this._blurMaterial=X_(r,t,e),this._ggxMaterial=W_(r,t,e)}return s}_compileMaterial(t){let e=new ne(new re,t);this._renderer.compile(e,ya)}_sceneToCubeUV(t,e,i,s,r){let c=new In(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(om),f.toneMapping=hi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ne(new xe,new _e({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,g=!1,x=t.background;x?x.isColor&&(m.color.copy(x),t.background=null,g=!0):(m.color.copy(om),g=!0);for(let v=0;v<6;v++){let _=v%3;_===0?(c.up.set(0,l[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[v],r.y,r.z)):_===1?(c.up.set(0,0,l[v]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[v],r.z)):(c.up.set(0,l[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[v]));let b=this._cubeSize;Wr(s,_*b,v>2?b:0,b,b),f.setRenderTarget(s),g&&f.render(y,c),f.render(t,c)}f.toneMapping=d,f.autoClear=h,t.background=x}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===bs||t.mapping===Xs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=lm()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cm());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Wr(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,ya)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let c=o.uniforms,l=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),h=l*1.25,d=f*h,{_lodMax:p}=this,y=this._sizeLods[i],m=3*y*(i>p-Xr?i-p+Xr:0),g=4*(this._cubeSize-y);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=p-e,Wr(r,m,g,3*y,2*y),s.setRenderTarget(r),s.render(a,ya),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=p-i,Wr(t,m,g,3*y,2*y),s.setRenderTarget(t),s.render(a,ya)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,o),this._blurPass(r,t,i,i,o)}_blurPass(t,e,i,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;let u=this._sizeLods[s],f=3*u*(s>this._lodMax-Xr?s-this._lodMax+Xr:0),h=4*(this._cubeSize-u);Wr(e,f,h,3*u,2*u),o.setRenderTarget(e),o.render(c,ya)}};function V_(n){let t=[],e=[],i=n,s=n-Xr+1+B_;for(let r=0;r<s;r++){let o=Math.pow(2,i);t.push(o);let a=1/(o-2),c=-a,l=1+a,u=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,h=6,d=3,p=new Float32Array(d*h*f),y=new Float32Array(d*h*f);for(let g=0;g<f;g++){let x=g%3*2/3-1,v=g>2?0:-1,_=[x,v,0,x+2/3,v,0,x+2/3,v+1,0,x,v,0,x+2/3,v+1,0,x,v+1,0];p.set(_,d*h*g);for(let b=0;b<h;b++){let M=u[b*2]*2-1,T=u[b*2+1]*2-1;g===0?Ys.set(1,T,M):g===1?Ys.set(-M,1,-T):g===2?Ys.set(-M,T,1):g===3?Ys.set(-1,T,-M):g===4?Ys.set(-M,-1,T):Ys.set(M,T,-1),Ys.toArray(y,(g*h+b)*d)}}let m=new re;m.setAttribute("position",new Me(p,d)),m.setAttribute("outputDirection",new Me(y,d)),e.push(new ne(m,null)),i>Xr&&i--}return{lodMeshes:e,sizeLods:t}}function am(n,t,e){let i=new Un(n,t,e);return i.texture.mapping=ca,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Wr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function W_(n,t,e){return new ze({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:H_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Xl(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function X_(n,t,e){return new ze({name:"SphericalGaussianBlur",defines:{SAMPLES:z_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Xl(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function cm(){return new ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xl(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function lm(){return new ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Xl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Vl=class extends Un{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Bo(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new xe(5,5,5),r=new ze({name:"CubemapFromEquirect",uniforms:qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pn,blending:Ai});r.uniforms.tEquirect.value=e;let o=new ne(s,r),a=e.minFilter;return e.minFilter===vs&&(e.minFilter=fn),new Zc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}};function q_(n){let t=new WeakMap,e=new WeakMap,i=null;function s(h,d=!1){return h==null?null:d?o(h):r(h)}function r(h){if(h&&h.isTexture){let d=h.mapping;if(d===Jc||d===Qc)if(t.has(h)){let p=t.get(h).texture;return a(p,h.mapping)}else{let p=h.image;if(p&&p.height>0){let y=new Vl(p.height);return y.fromEquirectangularTexture(n,h),t.set(h,y),h.addEventListener("dispose",l),a(y.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let d=h.mapping,p=d===Jc||d===Qc,y=d===bs||d===Xs;if(p||y){let m=e.get(h),g=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return i===null&&(i=new Gl(n)),m=p?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{let x=h.image;return p&&x&&x.height>0||y&&x&&c(x)?(i===null&&(i=new Gl(n)),m=p?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,d){return d===Jc?h.mapping=bs:d===Qc&&(h.mapping=Xs),h}function c(h){let d=0,p=6;for(let y=0;y<p;y++)h[y]!==void 0&&d++;return d===p}function l(h){let d=h.target;d.removeEventListener("dispose",l);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(h){let d=h.target;d.removeEventListener("dispose",u);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function Y_(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Us("WebGLRenderer: "+i+" extension not supported."),s}}}function $_(n,t,e,i){let s={},r=new WeakMap;function o(f){let h=f.target;h.index!==null&&t.remove(h.index);for(let p in h.attributes)t.remove(h.attributes[p]);h.removeEventListener("dispose",o),delete s[h.id];let d=r.get(h);d&&(t.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function c(f){let h=f.attributes;for(let d in h)t.update(h[d],n.ARRAY_BUFFER)}function l(f){let h=[],d=f.index,p=f.attributes.position,y=0;if(p===void 0)return;if(d!==null){let x=d.array;y=d.version;for(let v=0,_=x.length;v<_;v+=3){let b=x[v+0],M=x[v+1],T=x[v+2];h.push(b,M,M,T,T,b)}}else{let x=p.array;y=p.version;for(let v=0,_=x.length/3-1;v<_;v+=3){let b=v+0,M=v+1,T=v+2;h.push(b,M,M,T,T,b)}}let m=new(p.count>=65535?Fo:Do)(h,1);m.version=y;let g=r.get(f);g&&t.remove(g),r.set(f,m)}function u(f){let h=r.get(f);if(h){let d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function Z_(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,h){n.drawElements(i,h,r,f*o),e.update(h,i,1)}function l(f,h,d){d!==0&&(n.drawElementsInstanced(i,h,r,f*o,d),e.update(h,i,d))}function u(f,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,d);let y=0;for(let m=0;m<d;m++)y+=h[m];e.update(y,i,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function j_(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:ae("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function K_(n,t,e){let i=new WeakMap,s=new Ae;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,h=i.get(a);if(h===void 0||h.count!==f){let R=function(){T.dispose(),i.delete(a),a.removeEventListener("dispose",R)};h!==void 0&&h.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],v=0;d===!0&&(v=1),p===!0&&(v=2),y===!0&&(v=3);let _=a.attributes.position.count*v,b=1;_>t.maxTextureSize&&(b=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let M=new Float32Array(_*b*4*f),T=new Lo(M,_,b,f);T.type=Kn,T.needsUpdate=!0;let S=v*4;for(let P=0;P<f;P++){let I=m[P],F=g[P],H=x[P],B=_*b*4*P;for(let Y=0;Y<I.count;Y++){let G=Y*S;d===!0&&(s.fromBufferAttribute(I,Y),M[B+G+0]=s.x,M[B+G+1]=s.y,M[B+G+2]=s.z,M[B+G+3]=0),p===!0&&(s.fromBufferAttribute(F,Y),M[B+G+4]=s.x,M[B+G+5]=s.y,M[B+G+6]=s.z,M[B+G+7]=0),y===!0&&(s.fromBufferAttribute(H,Y),M[B+G+8]=s.x,M[B+G+9]=s.y,M[B+G+10]=s.z,M[B+G+11]=H.itemSize===4?s.w:1)}}h={count:f,texture:T,size:new Ot(_,b)},i.set(a,h),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let d=0;for(let y=0;y<l.length;y++)d+=l[y];let p=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",p),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function J_(n,t,e,i,s){let r=new WeakMap;function o(l){let u=s.render.frame,f=l.geometry,h=t.get(l,f);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function a(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var Q_={[Nh]:"LINEAR_TONE_MAPPING",[Dh]:"REINHARD_TONE_MAPPING",[Fh]:"CINEON_TONE_MAPPING",[aa]:"ACES_FILMIC_TONE_MAPPING",[kh]:"AGX_TONE_MAPPING",[Oh]:"NEUTRAL_TONE_MAPPING",[Uh]:"CUSTOM_TONE_MAPPING"};function tM(n,t,e,i,s,r){let o=new Un(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new re;l.setAttribute("position",new Xt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Xt([0,2,0,0,2,0],2));let u=new Uc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new ne(l,u),h=new ds(-1,1,1,-1,0,1),d=null,p=null,y=!1,m,g=null,x=[],v=!1;this.setSize=function(_,b){o.setSize(_,b),a!==null&&a.setSize(_,b),c!==null&&c.setSize(_,b);for(let M=0;M<x.length;M++){let T=x[M];T.setSize&&T.setSize(_,b)}},this.setEffects=function(_){x=_,v=x.length>0&&x[0].isRenderPass===!0;let b=o.width,M=o.height;x.length>0&&a===null&&(a=new Un(b,M,{type:di,depthBuffer:!1,stencilBuffer:!1}),c=new Un(b,M,{type:di,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<x.length;T++){let S=x[T];S.setSize&&S.setSize(b,M)}},this.begin=function(_,b){if(y||_.toneMapping===hi&&x.length===0)return!1;if(g=b,b!==null){let M=b.width,T=b.height;(o.width!==M||o.height!==T)&&this.setSize(M,T)}return v===!1&&_.setRenderTarget(o),m=_.toneMapping,_.toneMapping=hi,!0},this.hasRenderPass=function(){return v},this.end=function(_,b){_.toneMapping=m,y=!0;let M=o,T=a;for(let S=0;S<x.length;S++){let R=x[S];R.enabled!==!1&&(R.render(_,T,M,b),R.needsSwap!==!1&&(M=T,T=T===a?c:a))}if(d!==_.outputColorSpace||p!==_.toneMapping){d=_.outputColorSpace,p=_.toneMapping,u.defines={},ye.getTransfer(d)===Te&&(u.defines.SRGB_TRANSFER="");let S=Q_[p];S&&(u.defines[S]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=M.texture,_.setRenderTarget(g),_.render(f,h),g=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Cm=new dn,af=new ls(1,1),Im=new Lo,Pm=new Tc,Lm=new Bo,um=[],hm=[],fm=new Float32Array(16),dm=new Float32Array(9),pm=new Float32Array(4);function Yr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=um[s];if(r===void 0&&(r=new Float32Array(s),um[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Je(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Qe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ql(n,t){let e=hm[t];e===void 0&&(e=new Int32Array(t),hm[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function eM(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function nM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;n.uniform2fv(this.addr,t),Qe(e,t)}}function iM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Je(e,t))return;n.uniform3fv(this.addr,t),Qe(e,t)}}function sM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;n.uniform4fv(this.addr,t),Qe(e,t)}}function rM(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Je(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Qe(e,t)}else{if(Je(e,i))return;pm.set(i),n.uniformMatrix2fv(this.addr,!1,pm),Qe(e,i)}}function oM(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Je(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Qe(e,t)}else{if(Je(e,i))return;dm.set(i),n.uniformMatrix3fv(this.addr,!1,dm),Qe(e,i)}}function aM(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Je(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Qe(e,t)}else{if(Je(e,i))return;fm.set(i),n.uniformMatrix4fv(this.addr,!1,fm),Qe(e,i)}}function cM(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function lM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;n.uniform2iv(this.addr,t),Qe(e,t)}}function uM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;n.uniform3iv(this.addr,t),Qe(e,t)}}function hM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;n.uniform4iv(this.addr,t),Qe(e,t)}}function fM(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function dM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;n.uniform2uiv(this.addr,t),Qe(e,t)}}function pM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;n.uniform3uiv(this.addr,t),Qe(e,t)}}function mM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;n.uniform4uiv(this.addr,t),Qe(e,t)}}function gM(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(af.compareFunction=e.isReversedDepthBuffer()?Bl:Ol,r=af):r=Cm,e.setTexture2D(t||r,s)}function yM(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Pm,s)}function xM(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Lm,s)}function bM(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Im,s)}function vM(n){switch(n){case 5126:return eM;case 35664:return nM;case 35665:return iM;case 35666:return sM;case 35674:return rM;case 35675:return oM;case 35676:return aM;case 5124:case 35670:return cM;case 35667:case 35671:return lM;case 35668:case 35672:return uM;case 35669:case 35673:return hM;case 5125:return fM;case 36294:return dM;case 36295:return pM;case 36296:return mM;case 35678:case 36198:case 36298:case 36306:case 35682:return gM;case 35679:case 36299:case 36307:return yM;case 35680:case 36300:case 36308:case 36293:return xM;case 36289:case 36303:case 36311:case 36292:return bM}}function _M(n,t){n.uniform1fv(this.addr,t)}function MM(n,t){let e=Yr(t,this.size,2);n.uniform2fv(this.addr,e)}function SM(n,t){let e=Yr(t,this.size,3);n.uniform3fv(this.addr,e)}function wM(n,t){let e=Yr(t,this.size,4);n.uniform4fv(this.addr,e)}function EM(n,t){let e=Yr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function TM(n,t){let e=Yr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function AM(n,t){let e=Yr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function RM(n,t){n.uniform1iv(this.addr,t)}function CM(n,t){n.uniform2iv(this.addr,t)}function IM(n,t){n.uniform3iv(this.addr,t)}function PM(n,t){n.uniform4iv(this.addr,t)}function LM(n,t){n.uniform1uiv(this.addr,t)}function NM(n,t){n.uniform2uiv(this.addr,t)}function DM(n,t){n.uniform3uiv(this.addr,t)}function FM(n,t){n.uniform4uiv(this.addr,t)}function UM(n,t,e){let i=this.cache,s=t.length,r=ql(e,s);Je(i,r)||(n.uniform1iv(this.addr,r),Qe(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=af:o=Cm;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function kM(n,t,e){let i=this.cache,s=t.length,r=ql(e,s);Je(i,r)||(n.uniform1iv(this.addr,r),Qe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Pm,r[o])}function OM(n,t,e){let i=this.cache,s=t.length,r=ql(e,s);Je(i,r)||(n.uniform1iv(this.addr,r),Qe(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Lm,r[o])}function BM(n,t,e){let i=this.cache,s=t.length,r=ql(e,s);Je(i,r)||(n.uniform1iv(this.addr,r),Qe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Im,r[o])}function zM(n){switch(n){case 5126:return _M;case 35664:return MM;case 35665:return SM;case 35666:return wM;case 35674:return EM;case 35675:return TM;case 35676:return AM;case 5124:case 35670:return RM;case 35667:case 35671:return CM;case 35668:case 35672:return IM;case 35669:case 35673:return PM;case 5125:return LM;case 36294:return NM;case 36295:return DM;case 36296:return FM;case 35678:case 36198:case 36298:case 36306:case 35682:return UM;case 35679:case 36299:case 36307:return kM;case 35680:case 36300:case 36308:case 36293:return OM;case 36289:case 36303:case 36311:case 36292:return BM}}var cf=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=vM(e.type)}},lf=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=zM(e.type)}},uf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},rf=/(\w+)(\])?(\[|\.)?/g;function mm(n,t){n.seq.push(t),n.map[t.id]=t}function HM(n,t,e){let i=n.name,s=i.length;for(rf.lastIndex=0;;){let r=rf.exec(i),o=rf.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){mm(e,l===void 0?new cf(a,n,t):new lf(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new uf(a),mm(e,f)),e=f}}}var qr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);HM(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function gm(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var GM=37297,VM=0;function WM(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var ym=new ue;function XM(n){ye._getMatrix(ym,ye.workingColorSpace,n);let t=`mat3( ${ym.elements.map(e=>e.toFixed(4))} )`;switch(ye.getTransfer(n)){case Co:return[t,"LinearTransferOETF"];case Te:return[t,"sRGBTransferOETF"];default:return se("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function xm(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+WM(n.getShaderSource(t),a)}else return r}function qM(n,t){let e=XM(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var YM={[Nh]:"Linear",[Dh]:"Reinhard",[Fh]:"Cineon",[aa]:"ACESFilmic",[kh]:"AgX",[Oh]:"Neutral",[Uh]:"Custom"};function $M(n,t){let e=YM[t];return e===void 0?(se("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Hl=new X;function ZM(){ye.getLuminanceCoefficients(Hl);let n=Hl.x.toFixed(4),t=Hl.y.toFixed(4),e=Hl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ba).join(`
`)}function KM(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function JM(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function ba(n){return n!==""}function bm(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vm(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var QM=/^[ \t]*#include +<([\w\d./]+)>/gm;function hf(n){return n.replace(QM,eS)}var tS=new Map;function eS(n,t){let e=me[t];if(e===void 0){let i=tS.get(t);if(i!==void 0)e=me[i],se('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return hf(e)}var nS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _m(n){return n.replace(nS,iS)}function iS(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Mm(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var sS={[ys]:"SHADOWMAP_TYPE_PCF",[zr]:"SHADOWMAP_TYPE_VSM"};function rS(n){return sS[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var oS={[bs]:"ENVMAP_TYPE_CUBE",[Xs]:"ENVMAP_TYPE_CUBE",[ca]:"ENVMAP_TYPE_CUBE_UV"};function aS(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":oS[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var cS={[Xs]:"ENVMAP_MODE_REFRACTION"};function lS(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":cS[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var uS={[Kc]:"ENVMAP_BLENDING_MULTIPLY",[kp]:"ENVMAP_BLENDING_MIX",[Op]:"ENVMAP_BLENDING_ADD"};function hS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":uS[n.combine]||"ENVMAP_BLENDING_NONE"}function fS(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function dS(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=rS(e),l=aS(e),u=lS(e),f=hS(e),h=fS(e),d=jM(e),p=KM(r),y=s.createProgram(),m,g,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ba).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ba).join(`
`),g.length>0&&(g+=`
`)):(m=[Mm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ba).join(`
`),g=[Mm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hi?"#define TONE_MAPPING":"",e.toneMapping!==hi?me.tonemapping_pars_fragment:"",e.toneMapping!==hi?$M("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,qM("linearToOutputTexel",e.outputColorSpace),ZM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ba).join(`
`)),o=hf(o),o=bm(o,e),o=vm(o,e),a=hf(a),a=bm(a,e),a=vm(a,e),o=_m(o),a=_m(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===Yh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Yh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let v=x+m+o,_=x+g+a,b=gm(s,s.VERTEX_SHADER,v),M=gm(s,s.FRAGMENT_SHADER,_);s.attachShader(y,b),s.attachShader(y,M),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function T(I){if(n.debug.checkShaderErrors){let F=s.getProgramInfoLog(y)||"",H=s.getShaderInfoLog(b)||"",B=s.getShaderInfoLog(M)||"",Y=F.trim(),G=H.trim(),V=B.trim(),ft=!0,J=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(ft=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,b,M);else{let W=xm(s,b,"vertex"),st=xm(s,M,"fragment");ae("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+Y+`
`+W+`
`+st)}else Y!==""?se("WebGLProgram: Program Info Log:",Y):(G===""||V==="")&&(J=!1);J&&(I.diagnostics={runnable:ft,programLog:Y,vertexShader:{log:G,prefix:m},fragmentShader:{log:V,prefix:g}})}s.deleteShader(b),s.deleteShader(M),S=new qr(s,y),R=JM(s,y)}let S;this.getUniforms=function(){return S===void 0&&T(this),S};let R;this.getAttributes=function(){return R===void 0&&T(this),R};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(y,GM)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=VM++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=M,this}var pS=0,ff=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new df(t),e.set(t,i)),i}},df=class{constructor(t){this.id=pS++,this.code=t,this.usedTimes=0}};function mS(n){return n===Ms||n===pa||n===ma}function gS(n,t,e,i,s,r){let o=new Cr,a=new ff,c=new Set,l=[],u=new Map,f=i.logarithmicDepthBuffer,h=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(S){return c.add(S),S===0?"uv":`uv${S}`}function y(S,R,P,I,F,H){let B=I.fog,Y=F.geometry,G=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?I.environment:null,V=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,ft=t.get(S.envMap||G,V),J=ft&&ft.mapping===ca?ft.image.height:null,W=d[S.type];S.precision!==null&&(h=i.getMaxPrecision(S.precision),h!==S.precision&&se("WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));let st=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,bt=st!==void 0?st.length:0,Mt=0;Y.morphAttributes.position!==void 0&&(Mt=1),Y.morphAttributes.normal!==void 0&&(Mt=2),Y.morphAttributes.color!==void 0&&(Mt=3);let vt,xt,yt,$;if(W){let oe=Nn[W];vt=oe.vertexShader,xt=oe.fragmentShader}else{vt=S.vertexShader,xt=S.fragmentShader;let oe=a.getVertexShaderStage(S),jt=a.getFragmentShaderStage(S);a.update(S,oe,jt),yt=oe.id,$=jt.id}let rt=n.getRenderTarget(),Et=n.state.buffers.depth.getReversed(),Ut=F.isInstancedMesh===!0,It=F.isBatchedMesh===!0,Pt=!!S.map,$t=!!S.matcap,U=!!ft,it=!!S.aoMap,K=!!S.lightMap,at=!!S.bumpMap&&S.wireframe===!1,tt=!!S.normalMap,St=!!S.displacementMap,Tt=!!S.emissiveMap,Rt=!!S.metalnessMap,Lt=!!S.roughnessMap,q=S.anisotropy>0,Gt=S.clearcoat>0,Bt=S.dispersion>0,z=S.retroreflectivity>0,A=S.iridescence>0,dt=S.sheen>0,ct=S.transmission>0,lt=q&&!!S.anisotropyMap,O=Gt&&!!S.clearcoatMap,w=Gt&&!!S.clearcoatNormalMap,E=Gt&&!!S.clearcoatRoughnessMap,C=A&&!!S.iridescenceMap,D=A&&!!S.iridescenceThicknessMap,k=dt&&!!S.sheenColorMap,et=dt&&!!S.sheenRoughnessMap,Z=!!S.specularMap,gt=!!S.specularColorMap,ut=!!S.specularIntensityMap,At=ct&&!!S.transmissionMap,N=ct&&!!S.thicknessMap,ht=!!S.gradientMap,nt=!!S.alphaMap,_t=S.alphaTest>0,Ct=!!S.alphaHash,wt=!!S.extensions,Dt=hi;S.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Dt=n.toneMapping);let zt={shaderID:W,shaderType:S.type,shaderName:S.name,vertexShader:vt,fragmentShader:xt,defines:S.defines,customVertexShaderID:yt,customFragmentShaderID:$,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:It,batchingColor:It&&F._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&F.instanceColor!==null,instancingMorph:Ut&&F.morphTexture!==null,outputColorSpace:rt===null?n.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:ye.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:Pt,matcap:$t,envMap:U,envMapMode:U&&ft.mapping,envMapCubeUVHeight:J,aoMap:it,lightMap:K,bumpMap:at,normalMap:tt,displacementMap:St,emissiveMap:Tt,normalMapObjectSpace:tt&&S.normalMapType===Hp,normalMapTangentSpace:tt&&S.normalMapType===ga,packedNormalMap:tt&&S.normalMapType===ga&&mS(S.normalMap.format),metalnessMap:Rt,roughnessMap:Lt,anisotropy:q,anisotropyMap:lt,clearcoat:Gt,clearcoatMap:O,clearcoatNormalMap:w,clearcoatRoughnessMap:E,dispersion:Bt,retroreflection:z,iridescence:A,iridescenceMap:C,iridescenceThicknessMap:D,sheen:dt,sheenColorMap:k,sheenRoughnessMap:et,specularMap:Z,specularColorMap:gt,specularIntensityMap:ut,transmission:ct,transmissionMap:At,thicknessMap:N,gradientMap:ht,opaque:S.transparent===!1&&S.blending===Hr&&S.alphaToCoverage===!1,alphaMap:nt,alphaTest:_t,alphaHash:Ct,combine:S.combine,mapUv:Pt&&p(S.map.channel),aoMapUv:it&&p(S.aoMap.channel),lightMapUv:K&&p(S.lightMap.channel),bumpMapUv:at&&p(S.bumpMap.channel),normalMapUv:tt&&p(S.normalMap.channel),displacementMapUv:St&&p(S.displacementMap.channel),emissiveMapUv:Tt&&p(S.emissiveMap.channel),metalnessMapUv:Rt&&p(S.metalnessMap.channel),roughnessMapUv:Lt&&p(S.roughnessMap.channel),anisotropyMapUv:lt&&p(S.anisotropyMap.channel),clearcoatMapUv:O&&p(S.clearcoatMap.channel),clearcoatNormalMapUv:w&&p(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:E&&p(S.clearcoatRoughnessMap.channel),iridescenceMapUv:C&&p(S.iridescenceMap.channel),iridescenceThicknessMapUv:D&&p(S.iridescenceThicknessMap.channel),sheenColorMapUv:k&&p(S.sheenColorMap.channel),sheenRoughnessMapUv:et&&p(S.sheenRoughnessMap.channel),specularMapUv:Z&&p(S.specularMap.channel),specularColorMapUv:gt&&p(S.specularColorMap.channel),specularIntensityMapUv:ut&&p(S.specularIntensityMap.channel),transmissionMapUv:At&&p(S.transmissionMap.channel),thicknessMapUv:N&&p(S.thicknessMap.channel),alphaMapUv:nt&&p(S.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(tt||q),vertexNormals:!!Y.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Y.attributes.uv&&(Pt||nt),fog:!!B,useFog:S.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||Y.attributes.normal===void 0&&tt===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Et,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:Y.attributes.position!==void 0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:Mt,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Dt,decodeVideoTexture:Pt&&S.map.isVideoTexture===!0&&ye.getTransfer(S.map.colorSpace)===Te,decodeVideoTextureEmissive:Tt&&S.emissiveMap.isVideoTexture===!0&&ye.getTransfer(S.emissiveMap.colorSpace)===Te,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===We,flipSided:S.side===Pn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:wt&&S.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(wt&&S.extensions.multiDraw===!0||It)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return zt.vertexUv1s=c.has(1),zt.vertexUv2s=c.has(2),zt.vertexUv3s=c.has(3),c.clear(),zt}function m(S){let R=[];if(S.shaderID?R.push(S.shaderID):(R.push(S.customVertexShaderID),R.push(S.customFragmentShaderID)),S.defines!==void 0)for(let P in S.defines)R.push(P),R.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(g(R,S),x(R,S),R.push(n.outputColorSpace)),R.push(S.customProgramCacheKey),R.join()}function g(S,R){S.push(R.precision),S.push(R.outputColorSpace),S.push(R.envMapMode),S.push(R.envMapCubeUVHeight),S.push(R.mapUv),S.push(R.alphaMapUv),S.push(R.lightMapUv),S.push(R.aoMapUv),S.push(R.bumpMapUv),S.push(R.normalMapUv),S.push(R.displacementMapUv),S.push(R.emissiveMapUv),S.push(R.metalnessMapUv),S.push(R.roughnessMapUv),S.push(R.anisotropyMapUv),S.push(R.clearcoatMapUv),S.push(R.clearcoatNormalMapUv),S.push(R.clearcoatRoughnessMapUv),S.push(R.iridescenceMapUv),S.push(R.iridescenceThicknessMapUv),S.push(R.sheenColorMapUv),S.push(R.sheenRoughnessMapUv),S.push(R.specularMapUv),S.push(R.specularColorMapUv),S.push(R.specularIntensityMapUv),S.push(R.transmissionMapUv),S.push(R.thicknessMapUv),S.push(R.combine),S.push(R.fogExp2),S.push(R.sizeAttenuation),S.push(R.morphTargetsCount),S.push(R.morphAttributeCount),S.push(R.numSunLights),S.push(R.numDirLights),S.push(R.numPointLights),S.push(R.numSpotLights),S.push(R.numSpotLightMaps),S.push(R.numHemiLights),S.push(R.numRectAreaLights),S.push(R.numSunLightShadows),S.push(R.numDirLightShadows),S.push(R.numPointLightShadows),S.push(R.numSpotLightShadows),S.push(R.numSpotLightShadowsWithMaps),S.push(R.numLightProbes),S.push(R.shadowMapType),S.push(R.toneMapping),S.push(R.numClippingPlanes),S.push(R.numClipIntersection),S.push(R.depthPacking)}function x(S,R){o.disableAll(),R.instancing&&o.enable(0),R.instancingColor&&o.enable(1),R.instancingMorph&&o.enable(2),R.matcap&&o.enable(3),R.envMap&&o.enable(4),R.normalMapObjectSpace&&o.enable(5),R.normalMapTangentSpace&&o.enable(6),R.clearcoat&&o.enable(7),R.iridescence&&o.enable(8),R.alphaTest&&o.enable(9),R.vertexColors&&o.enable(10),R.vertexAlphas&&o.enable(11),R.vertexUv1s&&o.enable(12),R.vertexUv2s&&o.enable(13),R.vertexUv3s&&o.enable(14),R.vertexTangents&&o.enable(15),R.anisotropy&&o.enable(16),R.alphaHash&&o.enable(17),R.batching&&o.enable(18),R.dispersion&&o.enable(19),R.retroreflection&&o.enable(24),R.batchingColor&&o.enable(20),R.gradientMap&&o.enable(21),R.packedNormalMap&&o.enable(22),R.vertexNormals&&o.enable(23),S.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.reversedDepthBuffer&&o.enable(4),R.skinning&&o.enable(5),R.morphTargets&&o.enable(6),R.morphNormals&&o.enable(7),R.morphColors&&o.enable(8),R.premultipliedAlpha&&o.enable(9),R.shadowMapEnabled&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.decodeVideoTextureEmissive&&o.enable(20),R.alphaToCoverage&&o.enable(21),R.numLightProbeGrids>0&&o.enable(22),R.hasPositionAttribute&&o.enable(23),S.push(o.mask)}function v(S){let R=d[S.type],P;if(R){let I=Nn[R];P=qi.clone(I.uniforms)}else P=S.uniforms;return P}function _(S,R){let P=u.get(R);return P!==void 0?++P.usedTimes:(P=new dS(n,R,S,s),l.push(P),u.set(R,P)),P}function b(S){if(--S.usedTimes===0){let R=l.indexOf(S);l[R]=l[l.length-1],l.pop(),u.delete(S.cacheKey),S.destroy()}}function M(S){a.remove(S)}function T(){a.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:v,acquireProgram:_,releaseProgram:b,releaseShaderCache:M,programs:l,dispose:T}}function yS(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function xS(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Sm(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function wm(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,p,y,m,g){let x=n[t];return x===void 0?(x={id:h.id,object:h,geometry:d,material:p,materialVariant:o(h),groupOrder:y,renderOrder:h.renderOrder,z:m,group:g},n[t]=x):(x.id=h.id,x.object=h,x.geometry=d,x.material=p,x.materialVariant=o(h),x.groupOrder=y,x.renderOrder=h.renderOrder,x.z=m,x.group=g),t++,x}function c(h,d,p,y,m,g,x){x.reversedDepth===!0&&(m=-m);let v=a(h,d,p,y,m,g);p.transmission>0?i.push(v):p.transparent===!0?s.push(v):e.push(v)}function l(h,d,p,y,m,g){let x=a(h,d,p,y,m,g);p.transmission>0?i.unshift(x):p.transparent===!0?s.unshift(x):e.unshift(x)}function u(h,d){e.length>1&&e.sort(h||xS),i.length>1&&i.sort(d||Sm),s.length>1&&s.sort(d||Sm)}function f(){for(let h=t,d=n.length;h<d;h++){let p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:f,sort:u}}function bS(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new wm,n.set(i,[o])):s>=r.length?(o=new wm,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function vS(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new X,color:new Wt};break;case"SpotLight":e={position:new X,direction:new X,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new X,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new X,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new X,halfWidth:new X,halfHeight:new X};break}return n[t.id]=e,e}}}function _S(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var MS=0;function SS(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function wS(n){let t=new vS,e=_S(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new X);let s=new X,r=new be,o=new be;function a(l){let u=0,f=0,h=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let d=0,p=0,y=0,m=0,g=0,x=0,v=0,_=0,b=0,M=0,T=0,S=0,R=0,P=0;l.sort(SS);for(let F=0,H=l.length;F<H;F++){let B=l[F],Y=B.color,G=B.intensity,V=B.distance,ft=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===Ms?ft=B.shadow.map.texture:ft=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)u+=Y.r*G,f+=Y.g*G,h+=Y.b*G;else if(B.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(B.sh.coefficients[J],G);P++}else if(B.isSunLight){let J=t.get(B);if(J.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let W=B.shadow,st=e.get(B);st.shadowIntensity=W.intensity,st.shadowBias=W.bias,st.shadowNormalBias=W.normalBias,st.shadowRadius=W.radius,st.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),i.sunShadow[p]=st,i.sunShadowMap[p]=ft;let bt=W.getViewportCount();for(let Mt=0;Mt<bt;Mt++)i.sunShadowMatrix[y+Mt]=W.getMatrix(Mt),i.sunShadowCascade[y+Mt]=W._cascadeData[Mt];y+=bt,p++}i.sun[d]=J,d++}else if(B.isDirectionalLight){let J=t.get(B);if(J.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let W=B.shadow,st=e.get(B);st.shadowIntensity=W.intensity,st.shadowBias=W.bias,st.shadowNormalBias=W.normalBias,st.shadowRadius=W.radius,st.shadowMapSize=W.mapSize,i.directionalShadow[m]=st,i.directionalShadowMap[m]=ft,i.directionalShadowMatrix[m]=B.shadow.matrix,b++}i.directional[m]=J,m++}else if(B.isSpotLight){let J=t.get(B);J.position.setFromMatrixPosition(B.matrixWorld),J.color.copy(Y).multiplyScalar(G),J.distance=V,J.coneCos=Math.cos(B.angle),J.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),J.decay=B.decay,i.spot[x]=J;let W=B.shadow;if(B.map&&(i.spotLightMap[S]=B.map,S++,W.updateMatrices(B),B.castShadow&&R++),i.spotLightMatrix[x]=W.matrix,B.castShadow){let st=e.get(B);st.shadowIntensity=W.intensity,st.shadowBias=W.bias,st.shadowNormalBias=W.normalBias,st.shadowRadius=W.radius,st.shadowMapSize=W.mapSize,i.spotShadow[x]=st,i.spotShadowMap[x]=ft,T++}x++}else if(B.isRectAreaLight){let J=t.get(B);J.color.copy(Y).multiplyScalar(G),J.halfWidth.set(B.width*.5,0,0),J.halfHeight.set(0,B.height*.5,0),i.rectArea[v]=J,v++}else if(B.isPointLight){let J=t.get(B);if(J.color.copy(B.color).multiplyScalar(B.intensity),J.distance=B.distance,J.decay=B.decay,B.castShadow){let W=B.shadow,st=e.get(B);st.shadowIntensity=W.intensity,st.shadowBias=W.bias,st.shadowNormalBias=W.normalBias,st.shadowRadius=W.radius,st.shadowMapSize=W.mapSize,st.shadowCameraNear=W.camera.near,st.shadowCameraFar=W.camera.far,i.pointShadow[g]=st,i.pointShadowMap[g]=ft,i.pointShadowMatrix[g]=B.shadow.matrix,M++}i.point[g]=J,g++}else if(B.isHemisphereLight){let J=t.get(B);J.skyColor.copy(B.color).multiplyScalar(G),J.groundColor.copy(B.groundColor).multiplyScalar(G),i.hemi[_]=J,_++}}v>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Vt.LTC_FLOAT_1,i.rectAreaLTC2=Vt.LTC_FLOAT_2):(i.rectAreaLTC1=Vt.LTC_HALF_1,i.rectAreaLTC2=Vt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;let I=i.hash;(I.sunLength!==d||I.directionalLength!==m||I.pointLength!==g||I.spotLength!==x||I.rectAreaLength!==v||I.hemiLength!==_||I.numSunShadows!==p||I.numDirectionalShadows!==b||I.numPointShadows!==M||I.numSpotShadows!==T||I.numSpotMaps!==S||I.numLightProbes!==P)&&(i.sun.length=d,i.directional.length=m,i.spot.length=x,i.rectArea.length=v,i.point.length=g,i.hemi.length=_,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=M,i.pointShadowMap.length=M,i.pointShadowMatrix.length=M,i.spotShadow.length=T,i.spotShadowMap.length=T,i.spotLightMatrix.length=T+S-R,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=P,I.sunLength=d,I.directionalLength=m,I.pointLength=g,I.spotLength=x,I.rectAreaLength=v,I.hemiLength=_,I.numSunShadows=p,I.numDirectionalShadows=b,I.numPointShadows=M,I.numSpotShadows=T,I.numSpotMaps=S,I.numLightProbes=P,i.version=MS++)}function c(l,u){let f=0,h=0,d=0,p=0,y=0,m=0,g=u.matrixWorldInverse;for(let x=0,v=l.length;x<v;x++){let _=l[x];if(_.isSunLight){let b=i.sun[f];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(g),f++}else if(_.isDirectionalLight){let b=i.directional[h];b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),h++}else if(_.isSpotLight){let b=i.spot[p];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),p++}else if(_.isRectAreaLight){let b=i.rectArea[y];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(g),o.identity(),r.copy(_.matrixWorld),r.premultiply(g),o.extractRotation(r),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),y++}else if(_.isPointLight){let b=i.point[d];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){let b=i.hemi[m];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(g),m++}}}return{setup:a,setupView:c,state:i}}function Em(n){let t=new wS(n),e=[],i=[],s=[];function r(h){f.camera=h,e.length=0,i.length=0,s.length=0}function o(h){e.push(h)}function a(h){i.push(h)}function c(h){s.push(h)}function l(){t.setup(e)}function u(h){t.setupView(e,h)}let f={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function ES(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Em(n),t.set(s,[a])):r>=o.length?(a=new Em(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var TS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AS=`uniform sampler2D shadow_pass;
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
}`,RS=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],CS=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],Tm=new be,xa=new X,of=new X;function IS(n,t,e){let i=new as,s=new Ot,r=new Ot,o=new Ae,a=new kc,c=new Oc,l={},u=e.maxTextureSize,f={[xs]:Pn,[Pn]:xs,[We]:We},h=new ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:TS,fragmentShader:AS}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let p=new re;p.setAttribute("position",new Me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new ne(p,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ys;let g=this.type;this.render=function(M,T,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===xp&&(se("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ys);let R=n.getRenderTarget(),P=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Ai),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let H=g!==this.type;H&&T.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(Y=>Y.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,Y=M.length;B<Y;B++){let G=M[B],V=G.shadow;if(V===void 0){se("WebGLShadowMap:",G,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let ft=V.getFrameExtents();s.multiply(ft),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ft.x),s.x=r.x*ft.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ft.y),s.y=r.y*ft.y,V.mapSize.y=r.y));let J=n.state.buffers.depth.getReversed();if(V.camera._reversedDepth=J,V.map===null||H===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===zr){if(G.isPointLight){se("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Un(s.x,s.y,{format:Ms,type:di,minFilter:fn,magFilter:fn,generateMipmaps:!1}),V.map.texture.name=G.name+".shadowMap",V.map.depthTexture=new ls(s.x,s.y,Kn),V.map.depthTexture.name=G.name+".shadowMapDepth",V.map.depthTexture.format=Si,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=on,V.map.depthTexture.magFilter=on}else G.isPointLight?(V.map=new Vl(s.x),V.map.depthTexture=new Ic(s.x,fi)):(V.map=new Un(s.x,s.y),V.map.depthTexture=new ls(s.x,s.y,fi)),V.map.depthTexture.name=G.name+".shadowMap",V.map.depthTexture.format=Si,this.type===ys?(V.map.depthTexture.compareFunction=J?Bl:Ol,V.map.depthTexture.minFilter=fn,V.map.depthTexture.magFilter=fn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=on,V.map.depthTexture.magFilter=on);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let W=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();G.isPointLight!==!0&&V.updateMatrices(G,S);for(let st=0;st<W;st++){let bt=V.getCamera(st);if(G.isPointLight){let Mt=V.camera,vt=V.matrix,xt=G.distance||Mt.far;xt!==Mt.far&&(Mt.far=xt,Mt.updateProjectionMatrix()),xa.setFromMatrixPosition(G.matrixWorld),Mt.position.copy(xa),of.copy(Mt.position),of.add(RS[st]),Mt.up.copy(CS[st]),Mt.lookAt(of),Mt.updateMatrixWorld(),vt.makeTranslation(-xa.x,-xa.y,-xa.z),Tm.multiplyMatrices(Mt.projectionMatrix,Mt.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Tm,Mt.coordinateSystem,Mt.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,st),n.clear();else{st===0&&(n.setRenderTarget(V.map),n.clear());let Mt=V.getViewport(st);o.set(r.x*Mt.x,r.y*Mt.y,r.x*Mt.z,r.y*Mt.w),F.viewport(o)}i=V.getFrustum(st),_(T,S,bt,G,this.type)}V.isPointLightShadow!==!0&&this.type===zr&&x(V,S),V.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(R,P,I)};function x(M,T){let S=t.update(y);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null?M.mapPass=new Un(s.x,s.y,{format:Ms,type:di}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),h.uniforms.shadow_pass.value=M.map.depthTexture,h.uniforms.resolution.value.set(M.map.width,M.map.height),h.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(T,null,S,h,y,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value.set(M.map.width,M.map.height),d.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(T,null,S,d,y,null)}function v(M,T,S,R){let P=null,I=S.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(I!==void 0)P=I;else if(P=S.isPointLight===!0?c:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let F=P.uuid,H=T.uuid,B=l[F];B===void 0&&(B={},l[F]=B);let Y=B[H];Y===void 0&&(Y=P.clone(),B[H]=Y,T.addEventListener("dispose",b)),P=Y}if(P.visible=T.visible,P.wireframe=T.wireframe,R===zr?P.side=T.shadowSide!==null?T.shadowSide:T.side:P.side=T.shadowSide!==null?T.shadowSide:f[T.side],P.alphaMap=T.alphaMap,P.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,P.map=T.map,P.clipShadows=T.clipShadows,P.clippingPlanes=T.clippingPlanes,P.clipIntersection=T.clipIntersection,P.displacementMap=T.displacementMap,P.displacementScale=T.displacementScale,P.displacementBias=T.displacementBias,P.wireframeLinewidth=T.wireframeLinewidth,P.linewidth=T.linewidth,S.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let F=n.properties.get(P);F.light=S}return P}function _(M,T,S,R,P){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&P===zr)&&(!M.frustumCulled||M.intersectsFrustum(i))){M.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,M.matrixWorld);let H=t.update(M),B=M.material;if(Array.isArray(B)){let Y=H.groups;for(let G=0,V=Y.length;G<V;G++){let ft=Y[G],J=B[ft.materialIndex];if(J&&J.visible){let W=v(M,J,R,P);M.onBeforeShadow(n,M,T,S,H,W,ft),n.renderBufferDirect(S,null,H,W,M,ft),M.onAfterShadow(n,M,T,S,H,W,ft)}}}else if(B.visible){let Y=v(M,B,R,P);M.onBeforeShadow(n,M,T,S,H,Y,null),n.renderBufferDirect(S,null,H,Y,M,null),M.onAfterShadow(n,M,T,S,H,Y,null)}}let F=M.children;for(let H=0,B=F.length;H<B;H++)_(F[H],T,S,R,P)}function b(M){M.target.removeEventListener("dispose",b);for(let S in l){let R=l[S],P=M.target.uuid;P in R&&(R[P].dispose(),delete R[P])}}}function PS(n,t){function e(){let N=!1,ht=new Ae,nt=null,_t=new Ae(0,0,0,0);return{setMask:function(Ct){nt!==Ct&&!N&&(n.colorMask(Ct,Ct,Ct,Ct),nt=Ct)},setLocked:function(Ct){N=Ct},setClear:function(Ct,wt,Dt,zt,oe){oe===!0&&(Ct*=zt,wt*=zt,Dt*=zt),ht.set(Ct,wt,Dt,zt),_t.equals(ht)===!1&&(n.clearColor(Ct,wt,Dt,zt),_t.copy(ht))},reset:function(){N=!1,nt=null,_t.set(-1,0,0,0)}}}function i(){let N=!1,ht=!1,nt=null,_t=null,Ct=null;return{setReversed:function(wt){if(ht!==wt){let Dt=t.get("EXT_clip_control");wt?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),ht=wt;let zt=Ct;Ct=null,this.setClear(zt)}},getReversed:function(){return ht},setTest:function(wt){wt?rt(n.DEPTH_TEST):Et(n.DEPTH_TEST)},setMask:function(wt){nt!==wt&&!N&&(n.depthMask(wt),nt=wt)},setFunc:function(wt){if(ht&&(wt=Jp[wt]),_t!==wt){switch(wt){case gc:n.depthFunc(n.NEVER);break;case yc:n.depthFunc(n.ALWAYS);break;case xc:n.depthFunc(n.LESS);break;case Sr:n.depthFunc(n.LEQUAL);break;case bc:n.depthFunc(n.EQUAL);break;case vc:n.depthFunc(n.GEQUAL);break;case wr:n.depthFunc(n.GREATER);break;case _c:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_t=wt}},setLocked:function(wt){N=wt},setClear:function(wt){Ct!==wt&&(Ct=wt,ht&&(wt=1-wt),n.clearDepth(wt))},reset:function(){N=!1,nt=null,_t=null,Ct=null,ht=!1}}}function s(){let N=!1,ht=null,nt=null,_t=null,Ct=null,wt=null,Dt=null,zt=null,oe=null;return{setTest:function(jt){N||(jt?rt(n.STENCIL_TEST):Et(n.STENCIL_TEST))},setMask:function(jt){ht!==jt&&!N&&(n.stencilMask(jt),ht=jt)},setFunc:function(jt,fe,Ee){(nt!==jt||_t!==fe||Ct!==Ee)&&(n.stencilFunc(jt,fe,Ee),nt=jt,_t=fe,Ct=Ee)},setOp:function(jt,fe,Ee){(wt!==jt||Dt!==fe||zt!==Ee)&&(n.stencilOp(jt,fe,Ee),wt=jt,Dt=fe,zt=Ee)},setLocked:function(jt){N=jt},setClear:function(jt){oe!==jt&&(n.clearStencil(jt),oe=jt)},reset:function(){N=!1,ht=null,nt=null,_t=null,Ct=null,wt=null,Dt=null,zt=null,oe=null}}}let r=new e,o=new i,a=new s,c=new WeakMap,l=new WeakMap,u={},f={},h={},d=new WeakMap,p=[],y=null,m=!1,g=null,x=null,v=null,_=null,b=null,M=null,T=null,S=new Wt(0,0,0),R=0,P=!1,I=null,F=null,H=null,B=null,Y=null,G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,ft=0,J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(ft=parseFloat(/^WebGL (\d)/.exec(J)[1]),V=ft>=1):J.indexOf("OpenGL ES")!==-1&&(ft=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),V=ft>=2);let W=null,st={},bt=n.getParameter(n.SCISSOR_BOX),Mt=n.getParameter(n.VIEWPORT),vt=new Ae().fromArray(bt),xt=new Ae().fromArray(Mt);function yt(N,ht,nt,_t){let Ct=new Uint8Array(4),wt=n.createTexture();n.bindTexture(N,wt),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Dt=0;Dt<nt;Dt++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(ht,0,n.RGBA,1,1,_t,0,n.RGBA,n.UNSIGNED_BYTE,Ct):n.texImage2D(ht+Dt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ct);return wt}let $={};$[n.TEXTURE_2D]=yt(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=yt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=yt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=yt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),rt(n.DEPTH_TEST),o.setFunc(Sr),at(!1),tt(Ah),rt(n.CULL_FACE),it(Ai);function rt(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function Et(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function Ut(N,ht){return h[N]!==ht?(n.bindFramebuffer(N,ht),h[N]=ht,N===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ht),N===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ht),!0):!1}function It(N,ht){let nt=p,_t=!1;if(N){nt=d.get(ht),nt===void 0&&(nt=[],d.set(ht,nt));let Ct=N.textures;if(nt.length!==Ct.length||nt[0]!==n.COLOR_ATTACHMENT0){for(let wt=0,Dt=Ct.length;wt<Dt;wt++)nt[wt]=n.COLOR_ATTACHMENT0+wt;nt.length=Ct.length,_t=!0}}else nt[0]!==n.BACK&&(nt[0]=n.BACK,_t=!0);_t&&n.drawBuffers(nt)}function Pt(N){return y!==N?(n.useProgram(N),y=N,!0):!1}let $t={[Ws]:n.FUNC_ADD,[vp]:n.FUNC_SUBTRACT,[_p]:n.FUNC_REVERSE_SUBTRACT};$t[Mp]=n.MIN,$t[Sp]=n.MAX;let U={[wp]:n.ZERO,[Ep]:n.ONE,[Tp]:n.SRC_COLOR,[Ph]:n.SRC_ALPHA,[Lp]:n.SRC_ALPHA_SATURATE,[Ip]:n.DST_COLOR,[Rp]:n.DST_ALPHA,[Ap]:n.ONE_MINUS_SRC_COLOR,[Lh]:n.ONE_MINUS_SRC_ALPHA,[Pp]:n.ONE_MINUS_DST_COLOR,[Cp]:n.ONE_MINUS_DST_ALPHA,[Np]:n.CONSTANT_COLOR,[Dp]:n.ONE_MINUS_CONSTANT_COLOR,[Fp]:n.CONSTANT_ALPHA,[Up]:n.ONE_MINUS_CONSTANT_ALPHA};function it(N,ht,nt,_t,Ct,wt,Dt,zt,oe,jt){if(N===Ai){m===!0&&(Et(n.BLEND),m=!1);return}if(m===!1&&(rt(n.BLEND),m=!0),N!==bp){if(N!==g||jt!==P){if((x!==Ws||b!==Ws)&&(n.blendEquation(n.FUNC_ADD),x=Ws,b=Ws),jt)switch(N){case Hr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wi:n.blendFunc(n.ONE,n.ONE);break;case Ch:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ih:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ae("WebGLState: Invalid blending: ",N);break}else switch(N){case Hr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ch:ae("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ih:ae("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ae("WebGLState: Invalid blending: ",N);break}v=null,_=null,M=null,T=null,S.set(0,0,0),R=0,g=N,P=jt}return}Ct=Ct||ht,wt=wt||nt,Dt=Dt||_t,(ht!==x||Ct!==b)&&(n.blendEquationSeparate($t[ht],$t[Ct]),x=ht,b=Ct),(nt!==v||_t!==_||wt!==M||Dt!==T)&&(n.blendFuncSeparate(U[nt],U[_t],U[wt],U[Dt]),v=nt,_=_t,M=wt,T=Dt),(zt.equals(S)===!1||oe!==R)&&(n.blendColor(zt.r,zt.g,zt.b,oe),S.copy(zt),R=oe),g=N,P=!1}function K(N,ht){N.side===We?Et(n.CULL_FACE):rt(n.CULL_FACE);let nt=N.side===Pn;ht&&(nt=!nt),at(nt),N.blending===Hr&&N.transparent===!1?it(Ai):it(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let _t=N.stencilWrite;a.setTest(_t),_t&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Tt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?rt(n.SAMPLE_ALPHA_TO_COVERAGE):Et(n.SAMPLE_ALPHA_TO_COVERAGE)}function at(N){I!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),I=N)}function tt(N){N!==gp?(rt(n.CULL_FACE),N!==F&&(N===Ah?n.cullFace(n.BACK):N===yp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Et(n.CULL_FACE),F=N}function St(N){N!==H&&(V&&n.lineWidth(N),H=N)}function Tt(N,ht,nt){N?(rt(n.POLYGON_OFFSET_FILL),(B!==ht||Y!==nt)&&(B=ht,Y=nt,o.getReversed()&&(ht=-ht),n.polygonOffset(ht,nt))):Et(n.POLYGON_OFFSET_FILL)}function Rt(N){N?rt(n.SCISSOR_TEST):Et(n.SCISSOR_TEST)}function Lt(N){N===void 0&&(N=n.TEXTURE0+G-1),W!==N&&(n.activeTexture(N),W=N)}function q(N,ht,nt){nt===void 0&&(W===null?nt=n.TEXTURE0+G-1:nt=W);let _t=st[nt];_t===void 0&&(_t={type:void 0,texture:void 0},st[nt]=_t),(_t.type!==N||_t.texture!==ht)&&(W!==nt&&(n.activeTexture(nt),W=nt),n.bindTexture(N,ht||$[N]),_t.type=N,_t.texture=ht)}function Gt(){let N=st[W];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Bt(){try{n.compressedTexImage2D(...arguments)}catch(N){ae("WebGLState:",N)}}function z(){try{n.compressedTexImage3D(...arguments)}catch(N){ae("WebGLState:",N)}}function A(){try{n.texSubImage2D(...arguments)}catch(N){ae("WebGLState:",N)}}function dt(){try{n.texSubImage3D(...arguments)}catch(N){ae("WebGLState:",N)}}function ct(){try{n.compressedTexSubImage2D(...arguments)}catch(N){ae("WebGLState:",N)}}function lt(){try{n.compressedTexSubImage3D(...arguments)}catch(N){ae("WebGLState:",N)}}function O(){try{n.texStorage2D(...arguments)}catch(N){ae("WebGLState:",N)}}function w(){try{n.texStorage3D(...arguments)}catch(N){ae("WebGLState:",N)}}function E(){try{n.texImage2D(...arguments)}catch(N){ae("WebGLState:",N)}}function C(){try{n.texImage3D(...arguments)}catch(N){ae("WebGLState:",N)}}function D(N){return f[N]!==void 0?f[N]:n.getParameter(N)}function k(N,ht){f[N]!==ht&&(n.pixelStorei(N,ht),f[N]=ht)}function et(N){vt.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),vt.copy(N))}function Z(N){xt.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),xt.copy(N))}function gt(N,ht){let nt=l.get(ht);nt===void 0&&(nt=new WeakMap,l.set(ht,nt));let _t=nt.get(N);_t===void 0&&(_t=n.getUniformBlockIndex(ht,N.name),nt.set(N,_t))}function ut(N,ht){let _t=l.get(ht).get(N);c.get(ht)!==_t&&(n.uniformBlockBinding(ht,_t,N.__bindingPointIndex),c.set(ht,_t))}function At(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},W=null,st={},h={},d=new WeakMap,p=[],y=null,m=!1,g=null,x=null,v=null,_=null,b=null,M=null,T=null,S=new Wt(0,0,0),R=0,P=!1,I=null,F=null,H=null,B=null,Y=null,vt.set(0,0,n.canvas.width,n.canvas.height),xt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:rt,disable:Et,bindFramebuffer:Ut,drawBuffers:It,useProgram:Pt,setBlending:it,setMaterial:K,setFlipSided:at,setCullFace:tt,setLineWidth:St,setPolygonOffset:Tt,setScissorTest:Rt,activeTexture:Lt,bindTexture:q,unbindTexture:Gt,compressedTexImage2D:Bt,compressedTexImage3D:z,texImage2D:E,texImage3D:C,pixelStorei:k,getParameter:D,updateUBOMapping:gt,uniformBlockBinding:ut,texStorage2D:O,texStorage3D:w,texSubImage2D:A,texSubImage3D:dt,compressedTexSubImage2D:ct,compressedTexSubImage3D:lt,scissor:et,viewport:Z,reset:At}}function LS(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ot,u=new WeakMap,f=new Set,h,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(z,A){return p?new OffscreenCanvas(z,A):Io("canvas")}function m(z,A,dt){let ct=1,lt=Bt(z);if((lt.width>dt||lt.height>dt)&&(ct=dt/Math.max(lt.width,lt.height)),ct<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){let O=Math.floor(ct*lt.width),w=Math.floor(ct*lt.height);h===void 0&&(h=y(O,w));let E=A?y(O,w):h;return E.width=O,E.height=w,E.getContext("2d").drawImage(z,0,0,O,w),se("WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+O+"x"+w+")."),E}else return"data"in z&&se("WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),z;return z}function g(z){return z.generateMipmaps}function x(z){n.generateMipmap(z)}function v(z){return z.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?n.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(z,A,dt,ct,lt,O=!1){if(z!==null){if(n[z]!==void 0)return n[z];se("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let w;ct&&(w=t.get("EXT_texture_norm16"),w||se("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let E=A;if(A===n.RED&&(dt===n.FLOAT&&(E=n.R32F),dt===n.HALF_FLOAT&&(E=n.R16F),dt===n.UNSIGNED_BYTE&&(E=n.R8),dt===n.UNSIGNED_SHORT&&w&&(E=w.R16_EXT),dt===n.SHORT&&w&&(E=w.R16_SNORM_EXT)),A===n.RED_INTEGER&&(dt===n.UNSIGNED_BYTE&&(E=n.R8UI),dt===n.UNSIGNED_SHORT&&(E=n.R16UI),dt===n.UNSIGNED_INT&&(E=n.R32UI),dt===n.BYTE&&(E=n.R8I),dt===n.SHORT&&(E=n.R16I),dt===n.INT&&(E=n.R32I)),A===n.RG&&(dt===n.FLOAT&&(E=n.RG32F),dt===n.HALF_FLOAT&&(E=n.RG16F),dt===n.UNSIGNED_BYTE&&(E=n.RG8),dt===n.UNSIGNED_SHORT&&w&&(E=w.RG16_EXT),dt===n.SHORT&&w&&(E=w.RG16_SNORM_EXT)),A===n.RG_INTEGER&&(dt===n.UNSIGNED_BYTE&&(E=n.RG8UI),dt===n.UNSIGNED_SHORT&&(E=n.RG16UI),dt===n.UNSIGNED_INT&&(E=n.RG32UI),dt===n.BYTE&&(E=n.RG8I),dt===n.SHORT&&(E=n.RG16I),dt===n.INT&&(E=n.RG32I)),A===n.RGB_INTEGER&&(dt===n.UNSIGNED_BYTE&&(E=n.RGB8UI),dt===n.UNSIGNED_SHORT&&(E=n.RGB16UI),dt===n.UNSIGNED_INT&&(E=n.RGB32UI),dt===n.BYTE&&(E=n.RGB8I),dt===n.SHORT&&(E=n.RGB16I),dt===n.INT&&(E=n.RGB32I)),A===n.RGBA_INTEGER&&(dt===n.UNSIGNED_BYTE&&(E=n.RGBA8UI),dt===n.UNSIGNED_SHORT&&(E=n.RGBA16UI),dt===n.UNSIGNED_INT&&(E=n.RGBA32UI),dt===n.BYTE&&(E=n.RGBA8I),dt===n.SHORT&&(E=n.RGBA16I),dt===n.INT&&(E=n.RGBA32I)),A===n.RGB&&(dt===n.UNSIGNED_SHORT&&w&&(E=w.RGB16_EXT),dt===n.SHORT&&w&&(E=w.RGB16_SNORM_EXT),dt===n.UNSIGNED_INT_5_9_9_9_REV&&(E=n.RGB9_E5),dt===n.UNSIGNED_INT_10F_11F_11F_REV&&(E=n.R11F_G11F_B10F)),A===n.RGBA){let C=O?Co:ye.getTransfer(lt);dt===n.FLOAT&&(E=n.RGBA32F),dt===n.HALF_FLOAT&&(E=n.RGBA16F),dt===n.UNSIGNED_BYTE&&(E=C===Te?n.SRGB8_ALPHA8:n.RGBA8),dt===n.UNSIGNED_SHORT&&w&&(E=w.RGBA16_EXT),dt===n.SHORT&&w&&(E=w.RGBA16_SNORM_EXT),dt===n.UNSIGNED_SHORT_4_4_4_4&&(E=n.RGBA4),dt===n.UNSIGNED_SHORT_5_5_5_1&&(E=n.RGB5_A1)}return(E===n.R16F||E===n.R32F||E===n.RG16F||E===n.RG32F||E===n.RGBA16F||E===n.RGBA32F)&&t.get("EXT_color_buffer_float"),E}function b(z,A){let dt;return z?A===null||A===fi||A===Vr?dt=n.DEPTH24_STENCIL8:A===Kn?dt=n.DEPTH32F_STENCIL8:A===Gr&&(dt=n.DEPTH24_STENCIL8,se("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===fi||A===Vr?dt=n.DEPTH_COMPONENT24:A===Kn?dt=n.DEPTH_COMPONENT32F:A===Gr&&(dt=n.DEPTH_COMPONENT16),dt}function M(z,A){return g(z)===!0||z.isFramebufferTexture&&z.minFilter!==on&&z.minFilter!==fn?Math.log2(Math.max(A.width,A.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?A.mipmaps.length:1}function T(z){let A=z.target;A.removeEventListener("dispose",T),R(A),A.isVideoTexture&&u.delete(A),A.isHTMLTexture&&f.delete(A)}function S(z){let A=z.target;A.removeEventListener("dispose",S),I(A)}function R(z){let A=i.get(z);if(A.__webglInit===void 0)return;let dt=z.source,ct=d.get(dt);if(ct){let lt=ct[A.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&P(z),Object.keys(ct).length===0&&d.delete(dt)}i.remove(z)}function P(z){let A=i.get(z);n.deleteTexture(A.__webglTexture);let dt=z.source,ct=d.get(dt);delete ct[A.__cacheKey],o.memory.textures--}function I(z){let A=i.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),i.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(A.__webglFramebuffer[ct]))for(let lt=0;lt<A.__webglFramebuffer[ct].length;lt++)n.deleteFramebuffer(A.__webglFramebuffer[ct][lt]);else n.deleteFramebuffer(A.__webglFramebuffer[ct]);A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer[ct])}else{if(Array.isArray(A.__webglFramebuffer))for(let ct=0;ct<A.__webglFramebuffer.length;ct++)n.deleteFramebuffer(A.__webglFramebuffer[ct]);else n.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&n.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ct=0;ct<A.__webglColorRenderbuffer.length;ct++)A.__webglColorRenderbuffer[ct]&&n.deleteRenderbuffer(A.__webglColorRenderbuffer[ct]);A.__webglDepthRenderbuffer&&n.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let dt=z.textures;for(let ct=0,lt=dt.length;ct<lt;ct++){let O=i.get(dt[ct]);O.__webglTexture&&(n.deleteTexture(O.__webglTexture),o.memory.textures--),i.remove(dt[ct])}i.remove(z)}let F=0;function H(){F=0}function B(){return F}function Y(z){F=z}function G(){let z=F;return z>=s.maxTextures&&se("WebGLTextures: Trying to use "+(z+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,z}function V(z){let A=[];return A.push(z.wrapS),A.push(z.wrapT),A.push(z.wrapR||0),A.push(z.magFilter),A.push(z.minFilter),A.push(z.anisotropy),A.push(z.internalFormat),A.push(z.format),A.push(z.type),A.push(z.generateMipmaps),A.push(z.premultiplyAlpha),A.push(z.flipY),A.push(z.unpackAlignment),A.push(z.colorSpace),A.join()}function ft(z,A){let dt=i.get(z);if(z.isVideoTexture&&q(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&dt.__version!==z.version){let ct=z.image;if(ct===null)se("WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)se("WebGLRenderer: Texture marked for update but image is incomplete");else{Et(dt,z,A);return}}else z.isExternalTexture&&(dt.__webglTexture=z.sourceTexture?z.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,dt.__webglTexture,n.TEXTURE0+A)}function J(z,A){let dt=i.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&dt.__version!==z.version){Et(dt,z,A);return}else z.isExternalTexture&&(dt.__webglTexture=z.sourceTexture?z.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,dt.__webglTexture,n.TEXTURE0+A)}function W(z,A){let dt=i.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&dt.__version!==z.version){Et(dt,z,A);return}e.bindTexture(n.TEXTURE_3D,dt.__webglTexture,n.TEXTURE0+A)}function st(z,A){let dt=i.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&dt.__version!==z.version){Ut(dt,z,A);return}e.bindTexture(n.TEXTURE_CUBE_MAP,dt.__webglTexture,n.TEXTURE0+A)}let bt={[ks]:n.REPEAT,[_i]:n.CLAMP_TO_EDGE,[Mc]:n.MIRRORED_REPEAT},Mt={[on]:n.NEAREST,[Bp]:n.NEAREST_MIPMAP_NEAREST,[la]:n.NEAREST_MIPMAP_LINEAR,[fn]:n.LINEAR,[tl]:n.LINEAR_MIPMAP_NEAREST,[vs]:n.LINEAR_MIPMAP_LINEAR},vt={[Vp]:n.NEVER,[$p]:n.ALWAYS,[Wp]:n.LESS,[Ol]:n.LEQUAL,[Xp]:n.EQUAL,[Bl]:n.GEQUAL,[qp]:n.GREATER,[Yp]:n.NOTEQUAL};function xt(z,A){if(A.type===Kn&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===fn||A.magFilter===tl||A.magFilter===la||A.magFilter===vs||A.minFilter===fn||A.minFilter===tl||A.minFilter===la||A.minFilter===vs)&&se("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(z,n.TEXTURE_WRAP_S,bt[A.wrapS]),n.texParameteri(z,n.TEXTURE_WRAP_T,bt[A.wrapT]),(z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY)&&n.texParameteri(z,n.TEXTURE_WRAP_R,bt[A.wrapR]),n.texParameteri(z,n.TEXTURE_MAG_FILTER,Mt[A.magFilter]),n.texParameteri(z,n.TEXTURE_MIN_FILTER,Mt[A.minFilter]),A.compareFunction&&(n.texParameteri(z,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(z,n.TEXTURE_COMPARE_FUNC,vt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===on||A.minFilter!==la&&A.minFilter!==vs||A.type===Kn&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){let dt=t.get("EXT_texture_filter_anisotropic");n.texParameterf(z,dt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function yt(z,A){let dt=!1;z.__webglInit===void 0&&(z.__webglInit=!0,A.addEventListener("dispose",T));let ct=A.source,lt=d.get(ct);lt===void 0&&(lt={},d.set(ct,lt));let O=V(A);if(O!==z.__cacheKey){lt[O]===void 0&&(lt[O]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,dt=!0),lt[O].usedTimes++;let w=lt[z.__cacheKey];w!==void 0&&(lt[z.__cacheKey].usedTimes--,w.usedTimes===0&&P(A)),z.__cacheKey=O,z.__webglTexture=lt[O].texture}return dt}function $(z,A,dt){return Math.floor(Math.floor(z/dt)/A)}function rt(z,A,dt,ct){let O=z.updateRanges;if(O.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,A.width,A.height,dt,ct,A.data);else{O.sort((k,et)=>k.start-et.start);let w=0;for(let k=1;k<O.length;k++){let et=O[w],Z=O[k],gt=et.start+et.count,ut=$(Z.start,A.width,4),At=$(et.start,A.width,4);Z.start<=gt+1&&ut===At&&$(Z.start+Z.count-1,A.width,4)===ut?et.count=Math.max(et.count,Z.start+Z.count-et.start):(++w,O[w]=Z)}O.length=w+1;let E=e.getParameter(n.UNPACK_ROW_LENGTH),C=e.getParameter(n.UNPACK_SKIP_PIXELS),D=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,A.width);for(let k=0,et=O.length;k<et;k++){let Z=O[k],gt=Math.floor(Z.start/4),ut=Math.ceil(Z.count/4),At=gt%A.width,N=Math.floor(gt/A.width),ht=ut,nt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,At),e.pixelStorei(n.UNPACK_SKIP_ROWS,N),e.texSubImage2D(n.TEXTURE_2D,0,At,N,ht,nt,dt,ct,A.data)}z.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,E),e.pixelStorei(n.UNPACK_SKIP_PIXELS,C),e.pixelStorei(n.UNPACK_SKIP_ROWS,D)}}function Et(z,A,dt){let ct=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ct=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ct=n.TEXTURE_3D);let lt=yt(z,A),O=A.source;e.bindTexture(ct,z.__webglTexture,n.TEXTURE0+dt);let w=i.get(O);if(O.version!==w.__version||lt===!0){if(e.activeTexture(n.TEXTURE0+dt),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){let nt=ye.getPrimaries(ye.workingColorSpace),_t=A.colorSpace===Xi?null:ye.getPrimaries(A.colorSpace),Ct=A.colorSpace===Xi||nt===_t?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct)}e.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment);let C=m(A.image,!1,s.maxTextureSize);C=Gt(A,C);let D=r.convert(A.format,A.colorSpace),k=r.convert(A.type),et=_(A.internalFormat,D,k,A.normalized,A.colorSpace,A.isVideoTexture);xt(ct,A);let Z,gt=A.mipmaps,ut=A.isVideoTexture!==!0,At=w.__version===void 0||lt===!0,N=O.dataReady,ht=M(A,C);if(A.isDepthTexture)et=b(A.format===_s,A.type),At&&(ut?e.texStorage2D(n.TEXTURE_2D,1,et,C.width,C.height):e.texImage2D(n.TEXTURE_2D,0,et,C.width,C.height,0,D,k,null));else if(A.isDataTexture)if(gt.length>0){ut&&At&&e.texStorage2D(n.TEXTURE_2D,ht,et,gt[0].width,gt[0].height);for(let nt=0,_t=gt.length;nt<_t;nt++)Z=gt[nt],ut?N&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,Z.width,Z.height,D,k,Z.data):e.texImage2D(n.TEXTURE_2D,nt,et,Z.width,Z.height,0,D,k,Z.data);A.generateMipmaps=!1}else ut?(At&&e.texStorage2D(n.TEXTURE_2D,ht,et,C.width,C.height),N&&rt(A,C,D,k)):e.texImage2D(n.TEXTURE_2D,0,et,C.width,C.height,0,D,k,C.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ut&&At&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ht,et,gt[0].width,gt[0].height,C.depth);for(let nt=0,_t=gt.length;nt<_t;nt++)if(Z=gt[nt],A.format!==Jn)if(D!==null)if(ut){if(N)if(A.layerUpdates.size>0){let Ct=Qh(Z.width,Z.height,A.format,A.type);for(let wt of A.layerUpdates){let Dt=Z.data.subarray(wt*Ct/Z.data.BYTES_PER_ELEMENT,(wt+1)*Ct/Z.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,wt,Z.width,Z.height,1,D,Dt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,Z.width,Z.height,C.depth,D,Z.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,nt,et,Z.width,Z.height,C.depth,0,Z.data,0,0);else se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ut?N&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,Z.width,Z.height,C.depth,D,k,Z.data):e.texImage3D(n.TEXTURE_2D_ARRAY,nt,et,Z.width,Z.height,C.depth,0,D,k,Z.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{ut&&At&&e.texStorage2D(n.TEXTURE_2D,ht,et,gt[0].width,gt[0].height);for(let nt=0,_t=gt.length;nt<_t;nt++)Z=gt[nt],A.format!==Jn?D!==null?ut?N&&e.compressedTexSubImage2D(n.TEXTURE_2D,nt,0,0,Z.width,Z.height,D,Z.data):e.compressedTexImage2D(n.TEXTURE_2D,nt,et,Z.width,Z.height,0,Z.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?N&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,Z.width,Z.height,D,k,Z.data):e.texImage2D(n.TEXTURE_2D,nt,et,Z.width,Z.height,0,D,k,Z.data)}else if(A.isDataArrayTexture)if(ut){if(At&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ht,et,C.width,C.height,C.depth),N)if(A.layerUpdates.size>0){let nt=Qh(C.width,C.height,A.format,A.type);for(let _t of A.layerUpdates){let Ct=C.data.subarray(_t*nt/C.data.BYTES_PER_ELEMENT,(_t+1)*nt/C.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,_t,C.width,C.height,1,D,k,Ct)}A.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,C.width,C.height,C.depth,D,k,C.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,et,C.width,C.height,C.depth,0,D,k,C.data);else if(A.isData3DTexture)ut?(At&&e.texStorage3D(n.TEXTURE_3D,ht,et,C.width,C.height,C.depth),N&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,C.width,C.height,C.depth,D,k,C.data)):e.texImage3D(n.TEXTURE_3D,0,et,C.width,C.height,C.depth,0,D,k,C.data);else if(A.isFramebufferTexture){if(At)if(ut)e.texStorage2D(n.TEXTURE_2D,ht,et,C.width,C.height);else{let nt=C.width,_t=C.height;for(let Ct=0;Ct<ht;Ct++)e.texImage2D(n.TEXTURE_2D,Ct,et,nt,_t,0,D,k,null),nt>>=1,_t>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in n){let nt=n.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),C.parentNode!==nt){nt.appendChild(C),f.add(A),nt.onpaint=_t=>{let Ct=_t.changedElements;for(let wt of f)Ct.includes(wt.image)&&(wt.needsUpdate=!0)},nt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,C);else{let Ct=n.RGBA,wt=n.RGBA,Dt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ct,wt,Dt,C)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(gt.length>0){if(ut&&At){let nt=Bt(gt[0]);e.texStorage2D(n.TEXTURE_2D,ht,et,nt.width,nt.height)}for(let nt=0,_t=gt.length;nt<_t;nt++)Z=gt[nt],ut?N&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,D,k,Z):e.texImage2D(n.TEXTURE_2D,nt,et,D,k,Z);A.generateMipmaps=!1}else if(ut){if(At){let nt=Bt(C);e.texStorage2D(n.TEXTURE_2D,ht,et,nt.width,nt.height)}N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,D,k,C)}else e.texImage2D(n.TEXTURE_2D,0,et,D,k,C);g(A)&&x(ct),w.__version=O.version,A.onUpdate&&A.onUpdate(A)}z.__version=A.version}function Ut(z,A,dt){if(A.image.length!==6)return;let ct=yt(z,A),lt=A.source;e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+dt);let O=i.get(lt);if(lt.version!==O.__version||ct===!0){e.activeTexture(n.TEXTURE0+dt);let w=ye.getPrimaries(ye.workingColorSpace),E=A.colorSpace===Xi?null:ye.getPrimaries(A.colorSpace),C=A.colorSpace===Xi||w===E?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,C);let D=A.isCompressedTexture||A.image[0].isCompressedTexture,k=A.image[0]&&A.image[0].isDataTexture,et=[];for(let wt=0;wt<6;wt++)!D&&!k?et[wt]=m(A.image[wt],!0,s.maxCubemapSize):et[wt]=k?A.image[wt].image:A.image[wt],et[wt]=Gt(A,et[wt]);let Z=et[0],gt=r.convert(A.format,A.colorSpace),ut=r.convert(A.type),At=_(A.internalFormat,gt,ut,A.normalized,A.colorSpace),N=A.isVideoTexture!==!0,ht=O.__version===void 0||ct===!0,nt=lt.dataReady,_t=M(A,Z);xt(n.TEXTURE_CUBE_MAP,A);let Ct;if(D){N&&ht&&e.texStorage2D(n.TEXTURE_CUBE_MAP,_t,At,Z.width,Z.height);for(let wt=0;wt<6;wt++){Ct=et[wt].mipmaps;for(let Dt=0;Dt<Ct.length;Dt++){let zt=Ct[Dt];A.format!==Jn?gt!==null?N?nt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Dt,0,0,zt.width,zt.height,gt,zt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Dt,At,zt.width,zt.height,0,zt.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Dt,0,0,zt.width,zt.height,gt,ut,zt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Dt,At,zt.width,zt.height,0,gt,ut,zt.data)}}}else{if(Ct=A.mipmaps,N&&ht){Ct.length>0&&_t++;let wt=Bt(et[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,_t,At,wt.width,wt.height)}for(let wt=0;wt<6;wt++)if(k){N?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,et[wt].width,et[wt].height,gt,ut,et[wt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,At,et[wt].width,et[wt].height,0,gt,ut,et[wt].data);for(let Dt=0;Dt<Ct.length;Dt++){let oe=Ct[Dt].image[wt].image;N?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Dt+1,0,0,oe.width,oe.height,gt,ut,oe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Dt+1,At,oe.width,oe.height,0,gt,ut,oe.data)}}else{N?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,gt,ut,et[wt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,At,gt,ut,et[wt]);for(let Dt=0;Dt<Ct.length;Dt++){let zt=Ct[Dt];N?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Dt+1,0,0,gt,ut,zt.image[wt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Dt+1,At,gt,ut,zt.image[wt])}}}g(A)&&x(n.TEXTURE_CUBE_MAP),O.__version=lt.version,A.onUpdate&&A.onUpdate(A)}z.__version=A.version}function It(z,A,dt,ct,lt,O){let w=r.convert(dt.format,dt.colorSpace),E=r.convert(dt.type),C=_(dt.internalFormat,w,E,dt.normalized,dt.colorSpace),D=i.get(A),k=i.get(dt);if(k.__renderTarget=A,!D.__hasExternalTextures){let et=Math.max(1,A.width>>O),Z=Math.max(1,A.height>>O);lt===n.TEXTURE_3D||lt===n.TEXTURE_2D_ARRAY?e.texImage3D(lt,O,C,et,Z,A.depth,0,w,E,null):e.texImage2D(lt,O,C,et,Z,0,w,E,null)}e.bindFramebuffer(n.FRAMEBUFFER,z),Lt(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ct,lt,k.__webglTexture,0,Rt(A)):(lt===n.TEXTURE_2D||lt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ct,lt,k.__webglTexture,O),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Pt(z,A,dt){if(n.bindRenderbuffer(n.RENDERBUFFER,z),A.depthBuffer){let ct=A.depthTexture,lt=ct&&ct.isDepthTexture?ct.type:null,O=b(A.stencilBuffer,lt),w=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Lt(A)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Rt(A),O,A.width,A.height):dt?n.renderbufferStorageMultisample(n.RENDERBUFFER,Rt(A),O,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,O,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,w,n.RENDERBUFFER,z)}else{let ct=A.textures;for(let lt=0;lt<ct.length;lt++){let O=ct[lt],w=r.convert(O.format,O.colorSpace),E=r.convert(O.type),C=_(O.internalFormat,w,E,O.normalized,O.colorSpace);Lt(A)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Rt(A),C,A.width,A.height):dt?n.renderbufferStorageMultisample(n.RENDERBUFFER,Rt(A),C,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,C,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function $t(z,A,dt){let ct=A.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,z),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let lt=i.get(A.depthTexture);if(lt.__renderTarget=A,(!lt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ct){if(lt.__webglInit===void 0&&(lt.__webglInit=!0,A.depthTexture.addEventListener("dispose",T)),lt.__webglTexture===void 0){lt.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,lt.__webglTexture),xt(n.TEXTURE_CUBE_MAP,A.depthTexture);let D=r.convert(A.depthTexture.format),k=r.convert(A.depthTexture.type),et;A.depthTexture.format===Si?et=n.DEPTH_COMPONENT24:A.depthTexture.format===_s&&(et=n.DEPTH24_STENCIL8);for(let Z=0;Z<6;Z++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,et,A.width,A.height,0,D,k,null)}}else ft(A.depthTexture,0);let O=lt.__webglTexture,w=Rt(A),E=ct?n.TEXTURE_CUBE_MAP_POSITIVE_X+dt:n.TEXTURE_2D,C=A.depthTexture.format===_s?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(A.depthTexture.format===Si)Lt(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,C,E,O,0,w):n.framebufferTexture2D(n.FRAMEBUFFER,C,E,O,0);else if(A.depthTexture.format===_s)Lt(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,C,E,O,0,w):n.framebufferTexture2D(n.FRAMEBUFFER,C,E,O,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function U(z){let A=i.get(z),dt=z.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==z.depthTexture){let ct=z.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ct){let lt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ct.removeEventListener("dispose",lt)};ct.addEventListener("dispose",lt),A.__depthDisposeCallback=lt}A.__boundDepthTexture=ct}if(z.depthTexture&&!A.__autoAllocateDepthBuffer)if(dt)for(let ct=0;ct<6;ct++)$t(A.__webglFramebuffer[ct],z,ct);else{let ct=z.texture.mipmaps;ct&&ct.length>0?$t(A.__webglFramebuffer[0],z,0):$t(A.__webglFramebuffer,z,0)}else if(dt){A.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(e.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[ct]),A.__webglDepthbuffer[ct]===void 0)A.__webglDepthbuffer[ct]=n.createRenderbuffer(),Pt(A.__webglDepthbuffer[ct],z,!1);else{let lt=z.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,O=A.__webglDepthbuffer[ct];n.bindRenderbuffer(n.RENDERBUFFER,O),n.framebufferRenderbuffer(n.FRAMEBUFFER,lt,n.RENDERBUFFER,O)}}else{let ct=z.texture.mipmaps;if(ct&&ct.length>0?e.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=n.createRenderbuffer(),Pt(A.__webglDepthbuffer,z,!1);else{let lt=z.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,O=A.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,O),n.framebufferRenderbuffer(n.FRAMEBUFFER,lt,n.RENDERBUFFER,O)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function it(z,A,dt){let ct=i.get(z);A!==void 0&&It(ct.__webglFramebuffer,z,z.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),dt!==void 0&&U(z)}function K(z){let A=z.texture,dt=i.get(z),ct=i.get(A);z.addEventListener("dispose",S);let lt=z.textures,O=z.isWebGLCubeRenderTarget===!0,w=lt.length>1;if(w||(ct.__webglTexture===void 0&&(ct.__webglTexture=n.createTexture()),ct.__version=A.version,o.memory.textures++),O){dt.__webglFramebuffer=[];for(let E=0;E<6;E++)if(A.mipmaps&&A.mipmaps.length>0){dt.__webglFramebuffer[E]=[];for(let C=0;C<A.mipmaps.length;C++)dt.__webglFramebuffer[E][C]=n.createFramebuffer()}else dt.__webglFramebuffer[E]=n.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){dt.__webglFramebuffer=[];for(let E=0;E<A.mipmaps.length;E++)dt.__webglFramebuffer[E]=n.createFramebuffer()}else dt.__webglFramebuffer=n.createFramebuffer();if(w)for(let E=0,C=lt.length;E<C;E++){let D=i.get(lt[E]);D.__webglTexture===void 0&&(D.__webglTexture=n.createTexture(),o.memory.textures++)}if(z.samples>0&&Lt(z)===!1){dt.__webglMultisampledFramebuffer=n.createFramebuffer(),dt.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglMultisampledFramebuffer);for(let E=0;E<lt.length;E++){let C=lt[E];dt.__webglColorRenderbuffer[E]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,dt.__webglColorRenderbuffer[E]);let D=r.convert(C.format,C.colorSpace),k=r.convert(C.type),et=_(C.internalFormat,D,k,C.normalized,C.colorSpace,z.isXRRenderTarget===!0),Z=Rt(z);n.renderbufferStorageMultisample(n.RENDERBUFFER,Z,et,z.width,z.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+E,n.RENDERBUFFER,dt.__webglColorRenderbuffer[E])}n.bindRenderbuffer(n.RENDERBUFFER,null),z.depthBuffer&&(dt.__webglDepthRenderbuffer=n.createRenderbuffer(),Pt(dt.__webglDepthRenderbuffer,z,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(O){e.bindTexture(n.TEXTURE_CUBE_MAP,ct.__webglTexture),xt(n.TEXTURE_CUBE_MAP,A);for(let E=0;E<6;E++)if(A.mipmaps&&A.mipmaps.length>0)for(let C=0;C<A.mipmaps.length;C++)It(dt.__webglFramebuffer[E][C],z,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+E,C);else It(dt.__webglFramebuffer[E],z,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+E,0);g(A)&&x(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(w){for(let E=0,C=lt.length;E<C;E++){let D=lt[E],k=i.get(D),et=n.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(et=z.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(et,k.__webglTexture),xt(et,D),It(dt.__webglFramebuffer,z,D,n.COLOR_ATTACHMENT0+E,et,0),g(D)&&x(et)}e.unbindTexture()}else{let E=n.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(E=z.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(E,ct.__webglTexture),xt(E,A),A.mipmaps&&A.mipmaps.length>0)for(let C=0;C<A.mipmaps.length;C++)It(dt.__webglFramebuffer[C],z,A,n.COLOR_ATTACHMENT0,E,C);else It(dt.__webglFramebuffer,z,A,n.COLOR_ATTACHMENT0,E,0);g(A)&&x(E),e.unbindTexture()}z.depthBuffer&&U(z)}function at(z){let A=z.textures;for(let dt=0,ct=A.length;dt<ct;dt++){let lt=A[dt];if(g(lt)){let O=v(z),w=i.get(lt).__webglTexture;e.bindTexture(O,w),x(O),e.unbindTexture()}}}let tt=[],St=[];function Tt(z){if(z.samples>0){if(Lt(z)===!1){let A=z.textures,dt=z.width,ct=z.height,lt=n.COLOR_BUFFER_BIT,O=z.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,w=i.get(z),E=A.length>1;if(E)for(let D=0;D<A.length;D++)e.bindFramebuffer(n.FRAMEBUFFER,w.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+D,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+D,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,w.__webglMultisampledFramebuffer);let C=z.texture.mipmaps;C&&C.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,w.__webglFramebuffer);for(let D=0;D<A.length;D++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(lt|=n.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(lt|=n.STENCIL_BUFFER_BIT)),E){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,w.__webglColorRenderbuffer[D]);let k=i.get(A[D]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,k,0)}n.blitFramebuffer(0,0,dt,ct,0,0,dt,ct,lt,n.NEAREST),c===!0&&(tt.length=0,St.length=0,tt.push(n.COLOR_ATTACHMENT0+D),z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&(tt.push(O),St.push(O),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,St)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,tt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),E)for(let D=0;D<A.length;D++){e.bindFramebuffer(n.FRAMEBUFFER,w.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+D,n.RENDERBUFFER,w.__webglColorRenderbuffer[D]);let k=i.get(A[D]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+D,n.TEXTURE_2D,k,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,w.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&c){let A=z.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[A])}}}function Rt(z){return Math.min(s.maxSamples,z.samples)}function Lt(z){let A=i.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function q(z){let A=o.render.frame;u.get(z)!==A&&(u.set(z,A),z.update())}function Gt(z,A){let dt=z.colorSpace,ct=z.format,lt=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||dt!==Ro&&dt!==Xi&&(ye.getTransfer(dt)===Te?(ct!==Jn||lt!==kn)&&se("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ae("WebGLTextures: Unsupported texture color space:",dt)),A}function Bt(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(l.width=z.naturalWidth||z.width,l.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(l.width=z.displayWidth,l.height=z.displayHeight):(l.width=z.width,l.height=z.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=H,this.getTextureUnits=B,this.setTextureUnits=Y,this.setTexture2D=ft,this.setTexture2DArray=J,this.setTexture3D=W,this.setTextureCube=st,this.rebindTextures=it,this.setupRenderTarget=K,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=U,this.setupFrameBufferTexture=It,this.useMultisampledRTT=Lt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function NS(n,t){function e(i,s=Xi){let r,o=ye.getTransfer(s);if(i===kn)return n.UNSIGNED_BYTE;if(i===nl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===il)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Gh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Vh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===zh)return n.BYTE;if(i===Hh)return n.SHORT;if(i===Gr)return n.UNSIGNED_SHORT;if(i===el)return n.INT;if(i===fi)return n.UNSIGNED_INT;if(i===Kn)return n.FLOAT;if(i===di)return n.HALF_FLOAT;if(i===Wh)return n.ALPHA;if(i===Xh)return n.RGB;if(i===Jn)return n.RGBA;if(i===Si)return n.DEPTH_COMPONENT;if(i===_s)return n.DEPTH_STENCIL;if(i===sl)return n.RED;if(i===rl)return n.RED_INTEGER;if(i===Ms)return n.RG;if(i===ol)return n.RG_INTEGER;if(i===al)return n.RGBA_INTEGER;if(i===ua||i===ha||i===fa||i===da)if(o===Te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ua)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ua)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ha)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===fa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===da)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===cl||i===ll||i===ul||i===hl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===cl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ll)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ul)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===hl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===fl||i===dl||i===pl||i===ml||i===gl||i===pa||i===yl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===fl||i===dl)return o===Te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===pl)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ml)return r.COMPRESSED_R11_EAC;if(i===gl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===pa)return r.COMPRESSED_RG11_EAC;if(i===yl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===xl||i===bl||i===vl||i===_l||i===Ml||i===Sl||i===wl||i===El||i===Tl||i===Al||i===Rl||i===Cl||i===Il||i===Pl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===xl)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===bl)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===vl)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_l)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ml)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Sl)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wl)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===El)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Tl)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Al)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Rl)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Cl)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Il)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Pl)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ll||i===Nl||i===Dl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Ll)return o===Te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Nl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Dl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Fl||i===Ul||i===ma||i===kl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Fl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ul)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ma)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===kl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Vr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var DS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FS=`
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

}`,pf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new zo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new ze({vertexShader:DS,fragmentShader:FS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ne(new wn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},mf=class extends wi{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,h=null,d=null,p=null,y=typeof XRWebGLBinding<"u",m=new pf,g={},x=e.getContextAttributes(),v=null,_=null,b=[],M=[],T=new Ot,S=null,R=null,P=new In;P.viewport=new Ae;let I=new In;I.viewport=new Ae;let F=[P,I],H=new jc,B=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let rt=b[$];return rt===void 0&&(rt=new Ir,b[$]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function($){let rt=b[$];return rt===void 0&&(rt=new Ir,b[$]=rt),rt.getGripSpace()},this.getHand=function($){let rt=b[$];return rt===void 0&&(rt=new Ir,b[$]=rt),rt.getHandSpace()};function G($){let rt=M.indexOf($.inputSource);if(rt===-1)return;let Et=b[rt];Et!==void 0&&(Et.update($.inputSource,$.frame,l||o),Et.dispatchEvent({type:$.type,data:$.inputSource}))}function V(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",ft);for(let $=0;$<b.length;$++){let rt=M[$];rt!==null&&(M[$]=null,b[$].disconnect(rt))}B=null,Y=null,m.reset();for(let $ in g)delete g[$];if(t.setRenderTarget(v),d=null,h=null,f=null,s=null,_=null,yt.stop(),i.isPresenting=!1,t.setPixelRatio(S),t.setSize(T.width,T.height,!1),R!==null){let $=R.camera;$.fov=R.fov,$.zoom=R.zoom,$.updateProjectionMatrix(),R=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&se("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&se("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(v=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",V),s.addEventListener("inputsourceschange",ft),x.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(T),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,Ut=null,It=null;x.depth&&(It=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Et=x.stencil?_s:Si,Ut=x.stencil?Vr:fi);let Pt={colorFormat:e.RGBA8,depthFormat:It,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Pt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),_=new Un(h.textureWidth,h.textureHeight,{format:Jn,type:kn,depthTexture:new ls(h.textureWidth,h.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let Et={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,Et),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Un(d.framebufferWidth,d.framebufferHeight,{format:Jn,type:kn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),yt.setContext(s),yt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ft($){for(let rt=0;rt<$.removed.length;rt++){let Et=$.removed[rt],Ut=M.indexOf(Et);Ut>=0&&(M[Ut]=null,b[Ut].disconnect(Et))}for(let rt=0;rt<$.added.length;rt++){let Et=$.added[rt],Ut=M.indexOf(Et);if(Ut===-1){for(let Pt=0;Pt<b.length;Pt++)if(Pt>=M.length){M.push(Et),Ut=Pt;break}else if(M[Pt]===null){M[Pt]=Et,Ut=Pt;break}if(Ut===-1)break}let It=b[Ut];It&&It.connect(Et)}}let J=new X,W=new X;function st($,rt,Et){J.setFromMatrixPosition(rt.matrixWorld),W.setFromMatrixPosition(Et.matrixWorld);let Ut=J.distanceTo(W),It=rt.projectionMatrix.elements,Pt=Et.projectionMatrix.elements,$t=It[14]/(It[10]-1),U=It[14]/(It[10]+1),it=(It[9]+1)/It[5],K=(It[9]-1)/It[5],at=(It[8]-1)/It[0],tt=(Pt[8]+1)/Pt[0],St=$t*at,Tt=$t*tt,Rt=Ut/(-at+tt),Lt=Rt*-at;if(rt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Lt),$.translateZ(Rt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),It[10]===-1)$.projectionMatrix.copy(rt.projectionMatrix),$.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{let q=$t+Rt,Gt=U+Rt,Bt=St-Lt,z=Tt+(Ut-Lt),A=it*U/Gt*q,dt=K*U/Gt*q;$.projectionMatrix.makePerspective(Bt,z,A,dt,q,Gt),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function bt($,rt){rt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(rt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let rt=$.near,Et=$.far;m.texture!==null&&(m.depthNear>0&&(rt=m.depthNear),m.depthFar>0&&(Et=m.depthFar)),H.near=I.near=P.near=rt,H.far=I.far=P.far=Et,(B!==H.near||Y!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),B=H.near,Y=H.far),H.layers.mask=$.layers.mask|6,P.layers.mask=H.layers.mask&-5,I.layers.mask=H.layers.mask&-3;let Ut=$.parent,It=H.cameras;bt(H,Ut);for(let Pt=0;Pt<It.length;Pt++)bt(It[Pt],Ut);It.length===2?st(H,P,I):H.projectionMatrix.copy(P.projectionMatrix),R===null&&$.isPerspectiveCamera&&(R={camera:$,fov:$.fov,zoom:$.zoom}),Mt($,H,Ut)};function Mt($,rt,Et){Et===null?$.matrix.copy(rt.matrixWorld):($.matrix.copy(Et.matrixWorld),$.matrix.invert(),$.matrix.multiply(rt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(rt.projectionMatrix),$.projectionMatrixInverse.copy(rt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ar*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function($){c=$,h!==null&&(h.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function($){return g[$]};let vt=null;function xt($,rt){if(u=rt.getViewerPose(l||o),p=rt,u!==null){let Et=u.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let Ut=!1;Et.length!==H.cameras.length&&(H.cameras.length=0,Ut=!0);for(let U=0;U<Et.length;U++){let it=Et[U],K=null;if(d!==null)K=d.getViewport(it);else{let tt=f.getViewSubImage(h,it);K=tt.viewport,U===0&&(t.setRenderTargetTextures(_,tt.colorTexture,tt.depthStencilTexture),t.setRenderTarget(_))}let at=F[U];at===void 0&&(at=new In,at.layers.enable(U),at.viewport=new Ae,F[U]=at),at.matrix.fromArray(it.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(it.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(K.x,K.y,K.width,K.height),U===0&&(H.matrix.copy(at.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Ut===!0&&H.cameras.push(at)}let It=s.enabledFeatures;if(It&&It.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=i.getBinding();let U=f.getDepthInformation(Et[0]);U&&U.isValid&&U.texture&&m.init(U,s.renderState)}if(It&&It.includes("camera-access")&&y){t.state.unbindTexture(),f=i.getBinding();for(let U=0;U<Et.length;U++){let it=Et[U].camera;if(it){let K=g[it];K||(K=new zo,g[it]=K);let at=f.getCameraImage(it);K.sourceTexture=at}}}}for(let Et=0;Et<b.length;Et++){let Ut=M[Et],It=b[Et];Ut!==null&&It!==void 0&&It.update(Ut,rt,l||o)}vt&&vt($,rt),rt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:rt}),p=null}let yt=new Am;yt.setAnimationLoop(xt),this.setAnimationLoop=function($){vt=$},this.dispose=function(){}}},US=new be,Nm=new ue;Nm.set(-1,0,0,0,1,0,0,0,1);function kS(n,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,jh(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,x,v,_){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),f(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),h(m,g),g.isMeshPhysicalMaterial&&d(m,g,_)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),y(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?c(m,g,x,v):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Pn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Pn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let x=t.get(g),v=x.envMap,_=x.envMapRotation;v&&(m.envMap.value=v,m.envMapRotation.value.setFromMatrix4(US.makeRotationFromEuler(_)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Nm),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function c(m,g,x,v){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*x,m.scale.value=v*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function f(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function h(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,x){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Pn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function y(m,g){let x=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function OS(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,b){let M=b.program;i.uniformBlockBinding(_,M)}function l(_,b){let M=s[_.id];M===void 0&&(m(_),M=u(_),s[_.id]=M,_.addEventListener("dispose",x));let T=b.program;i.updateUBOMapping(_,T);let S=t.render.frame;r[_.id]!==S&&(h(_),r[_.id]=S)}function u(_){let b=f();_.__bindingPointIndex=b;let M=n.createBuffer(),T=_.__size,S=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,T,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,M),M}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return ae("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){let b=s[_.id],M=_.uniforms,T=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let S=0,R=M.length;S<R;S++){let P=M[S];if(Array.isArray(P))for(let I=0,F=P.length;I<F;I++)d(P[I],S,I,T);else d(P,S,0,T)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(_,b,M,T){if(y(_,b,M,T)===!0){let S=_.__offset,R=_.value;if(Array.isArray(R)){let P=0;for(let I=0;I<R.length;I++){let F=R[I],H=g(F);p(F,_.__data,P),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(P+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(R,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,S,_.__data)}}function p(_,b,M){typeof _=="number"||typeof _=="boolean"?b[0]=_:_.isMatrix3?(b[0]=_.elements[0],b[1]=_.elements[1],b[2]=_.elements[2],b[3]=0,b[4]=_.elements[3],b[5]=_.elements[4],b[6]=_.elements[5],b[7]=0,b[8]=_.elements[6],b[9]=_.elements[7],b[10]=_.elements[8],b[11]=0):ArrayBuffer.isView(_)?b.set(new _.constructor(_.buffer,_.byteOffset,b.length)):_.toArray(b,M)}function y(_,b,M,T){let S=_.value,R=b+"_"+M;if(T[R]===void 0)return typeof S=="number"||typeof S=="boolean"?T[R]=S:ArrayBuffer.isView(S)?T[R]=S.slice():T[R]=S.clone(),!0;{let P=T[R];if(typeof S=="number"||typeof S=="boolean"){if(P!==S)return T[R]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(P.equals(S)===!1)return P.copy(S),!0}}return!1}function m(_){let b=_.uniforms,M=0,T=16;for(let R=0,P=b.length;R<P;R++){let I=Array.isArray(b[R])?b[R]:[b[R]];for(let F=0,H=I.length;F<H;F++){let B=I[F],Y=Array.isArray(B.value)?B.value:[B.value];for(let G=0,V=Y.length;G<V;G++){let ft=Y[G],J=g(ft),W=M%T,st=W%J.boundary,bt=W+st;M+=st,bt!==0&&T-bt<J.storage&&(M+=T-bt),B.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=M,M+=J.storage}}}let S=M%T;return S>0&&(M+=T-S),_.__size=M,_.__cache={},this}function g(_){let b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?se("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(b.boundary=16,b.storage=_.byteLength):se("WebGLRenderer: Unsupported uniform value type.",_),b}function x(_){let b=_.target;b.removeEventListener("dispose",x);let M=o.indexOf(b.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function v(){for(let _ in s)n.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:c,update:l,dispose:v}}var BS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ri=null;function zS(){return Ri===null&&(Ri=new ko(BS,16,16,Ms,di),Ri.name="DFG_LUT",Ri.minFilter=fn,Ri.magFilter=fn,Ri.wrapS=_i,Ri.wrapT=_i,Ri.generateMipmaps=!1,Ri.needsUpdate=!0),Ri}var Wl=class{constructor(t={}){let{canvas:e=Zp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=kn}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let y=d,m=new Set([al,ol,rl]),g=new Set([kn,fi,Gr,Vr,nl,il]),x=new Uint32Array(4),v=new Int32Array(4),_=new X,b=null,M=null,T=[],S=[],R=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,I=!1,F=null,H=null,B=null,Y=null;this._outputColorSpace=Ge;let G=0,V=0,ft=null,J=-1,W=null,st=new Ae,bt=new Ae,Mt=null,vt=new Wt(0),xt=0,yt=e.width,$=e.height,rt=1,Et=null,Ut=null,It=new Ae(0,0,yt,$),Pt=new Ae(0,0,yt,$),$t=!1,U=new as,it=!1,K=!1,at=new be,tt=new X,St=new Ae,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Rt=!1;function Lt(){return ft===null?rt:1}let q=i;function Gt(L,pt){return e.getContext(L,pt)}let Bt,z,A,dt,ct,lt,O,w,E,C,D,k,et,Z,gt,ut,At,N,ht,nt,_t,Ct,wt;try{let L={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",oe,!1),e.addEventListener("webglcontextrestored",jt,!1),e.addEventListener("webglcontextcreationerror",fe,!1),q===null){let pt="webgl2";if(q=Gt(pt,L),q===null)throw Gt(pt)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Dt()}catch(L){throw e.removeEventListener("webglcontextlost",oe,!1),e.removeEventListener("webglcontextrestored",jt,!1),e.removeEventListener("webglcontextcreationerror",fe,!1),ae("WebGLRenderer: "+L.message),L}function Dt(){Bt=new Y_(q),Bt.init(),_t=new NS(q,Bt),z=new k_(q,Bt,t,_t),A=new PS(q,Bt),z.reversedDepthBuffer&&h&&A.buffers.depth.setReversed(!0),H=q.createFramebuffer(),B=q.createFramebuffer(),Y=q.createFramebuffer(),dt=new j_(q),ct=new yS,lt=new LS(q,Bt,A,ct,z,_t,dt),O=new q_(P),w=new Jb(q),Ct=new F_(q,w),E=new $_(q,w,dt,Ct),C=new J_(q,E,w,Ct,dt),N=new K_(q,z,lt),gt=new O_(ct),D=new gS(P,O,Bt,z,Ct,gt),k=new kS(P,ct),et=new bS,Z=new ES(Bt),At=new D_(P,O,A,C,p,c),ut=new IS(P,C,z),wt=new OS(q,dt,z,A),ht=new U_(q,Bt,dt),nt=new Z_(q,Bt,dt),dt.programs=D.programs,P.capabilities=z,P.extensions=Bt,P.properties=ct,P.renderLists=et,P.shadowMap=ut,P.state=A,P.info=dt}y!==kn&&(R=new tM(y,e.width,e.height,a,s,r));let zt=new mf(P,q);this.xr=zt,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let L=Bt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=Bt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return rt},this.setPixelRatio=function(L){L!==void 0&&(rt=L,this.setSize(yt,$,!1))},this.getSize=function(L){return L.set(yt,$)},this.setSize=function(L,pt,j=!0){if(zt.isPresenting){se("WebGLRenderer: Can't change size while VR device is presenting.");return}yt=L,$=pt,e.width=Math.floor(L*rt),e.height=Math.floor(pt*rt),j===!0&&(e.style.width=L+"px",e.style.height=pt+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,L,pt)},this.getDrawingBufferSize=function(L){return L.set(yt*rt,$*rt).floor()},this.setDrawingBufferSize=function(L,pt,j){yt=L,$=pt,rt=j,e.width=Math.floor(L*j),e.height=Math.floor(pt*j),this.setViewport(0,0,L,pt)},this.setEffects=function(L){if(y===kn){ae("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let pt=0;pt<L.length;pt++)if(L[pt].isOutputPass===!0){se("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(st)},this.getViewport=function(L){return L.copy(It)},this.setViewport=function(L,pt,j,Q){L.isVector4?It.set(L.x,L.y,L.z,L.w):It.set(L,pt,j,Q),A.viewport(st.copy(It).multiplyScalar(rt).round())},this.getScissor=function(L){return L.copy(Pt)},this.setScissor=function(L,pt,j,Q){L.isVector4?Pt.set(L.x,L.y,L.z,L.w):Pt.set(L,pt,j,Q),A.scissor(bt.copy(Pt).multiplyScalar(rt).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(L){A.setScissorTest($t=L)},this.setOpaqueSort=function(L){Et=L},this.setTransparentSort=function(L){Ut=L},this.getClearColor=function(L){return L.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor(...arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha(...arguments)},this.clear=function(L=!0,pt=!0,j=!0){let Q=0;if(L){let ot=!1;if(ft!==null){let Nt=ft.texture.format;ot=m.has(Nt)}if(ot){let Nt=ft.texture.type,kt=g.has(Nt),Ft=At.getClearColor(),Ht=At.getClearAlpha(),qt=Ft.r,ie=Ft.g,ce=Ft.b;kt?(x[0]=qt,x[1]=ie,x[2]=ce,x[3]=Ht,q.clearBufferuiv(q.COLOR,0,x)):(v[0]=qt,v[1]=ie,v[2]=ce,v[3]=Ht,q.clearBufferiv(q.COLOR,0,v))}else Q|=q.COLOR_BUFFER_BIT}pt&&(Q|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(Q|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&q.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),F=L},this.dispose=function(){e.removeEventListener("webglcontextlost",oe,!1),e.removeEventListener("webglcontextrestored",jt,!1),e.removeEventListener("webglcontextcreationerror",fe,!1),At.dispose(),et.dispose(),Z.dispose(),ct.dispose(),O.dispose(),C.dispose(),Ct.dispose(),wt.dispose(),D.dispose(),zt.dispose(),zt.removeEventListener("sessionstart",un),zt.removeEventListener("sessionend",bn),An.stop()};function oe(L){L.preventDefault(),Po("WebGLRenderer: Context Lost."),I=!0}function jt(){Po("WebGLRenderer: Context Restored."),I=!1;let L=dt.autoReset,pt=ut.enabled,j=ut.autoUpdate,Q=ut.needsUpdate,ot=ut.type;Dt(),dt.autoReset=L,ut.enabled=pt,ut.autoUpdate=j,ut.needsUpdate=Q,ut.type=ot}function fe(L){ae("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Ee(L){let pt=L.target;pt.removeEventListener("dispose",Ee),Ze(pt)}function Ze(L){Ye(L),ct.remove(L)}function Ye(L){let pt=ct.get(L).programs;pt!==void 0&&(pt.forEach(function(j){D.releaseProgram(j)}),L.isShaderMaterial&&D.releaseShaderCache(L))}this.renderBufferDirect=function(L,pt,j,Q,ot,Nt){pt===null&&(pt=Tt);let kt=ot.isMesh&&ot.matrixWorld.determinantAffine()<0,Ft=Bu(L,pt,j,Q,ot);A.setMaterial(Q,kt);let Ht=j.index,qt=1;if(Q.wireframe===!0){if(Ht=E.getWireframeAttribute(j),Ht===void 0)return;qt=2}let ie=j.drawRange,ce=j.attributes.position,Zt=ie.start*qt,ee=(ie.start+ie.count)*qt;Nt!==null&&(Zt=Math.max(Zt,Nt.start*qt),ee=Math.min(ee,(Nt.start+Nt.count)*qt)),Ht!==null?(Zt=Math.max(Zt,0),ee=Math.min(ee,Ht.count)):ce!=null&&(Zt=Math.max(Zt,0),ee=Math.min(ee,ce.count));let Ue=ee-Zt;if(Ue<0||Ue===1/0)return;Ct.setup(ot,Q,Ft,j,Ht);let Se,de=ht;if(Ht!==null&&(Se=w.get(Ht),de=nt,de.setIndex(Se)),ot.isMesh)Q.wireframe===!0?(A.setLineWidth(Q.wireframeLinewidth*Lt()),de.setMode(q.LINES)):de.setMode(q.TRIANGLES);else if(ot.isLine){let pe=Q.linewidth;pe===void 0&&(pe=1),A.setLineWidth(pe*Lt()),ot.isLineSegments?de.setMode(q.LINES):ot.isLineLoop?de.setMode(q.LINE_LOOP):de.setMode(q.LINE_STRIP)}else ot.isPoints?de.setMode(q.POINTS):ot.isSprite&&de.setMode(q.TRIANGLES);if(ot.isBatchedMesh)if(Bt.get("WEBGL_multi_draw"))de.renderMultiDraw(ot._multiDrawStarts,ot._multiDrawCounts,ot._multiDrawCount);else{let pe=ot._multiDrawStarts,Yt=ot._multiDrawCounts,ke=ot._multiDrawCount,ge=Ht?w.get(Ht).bytesPerElement:1,hn=ct.get(Q).currentProgram.getUniforms();for(let Rn=0;Rn<ke;Rn++)hn.setValue(q,"_gl_DrawID",Rn),de.render(pe[Rn]/ge,Yt[Rn])}else if(ot.isInstancedMesh)de.renderInstances(Zt,Ue,ot.count);else if(j.isInstancedBufferGeometry){let pe=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Yt=Math.min(j.instanceCount,pe);de.renderInstances(Zt,Ue,Yt)}else de.render(Zt,Ue)};function nn(L,pt,j,Q){F!==null&&L.isNodeMaterial&&F.setObject(Q,L),it===!0&&gt.setState(L,j,!1),L.transparent===!0&&L.side===We&&L.forceSinglePass===!1?(L.side=Pn,L.needsUpdate=!0,sr(L,pt,Q),L.side=xs,L.needsUpdate=!0,sr(L,pt,Q),L.side=We):sr(L,pt,Q)}this.compile=function(L,pt,j=null){j===null&&(j=L),F!==null&&F.renderStart(L,pt,j),M=Z.get(j),M.init(pt),S.push(M),j.traverseVisible(function(ot){ot.isLight&&ot.layers.test(pt.layers)&&(M.pushLight(ot),ot.castShadow&&M.pushShadow(ot))}),L!==j&&L.traverseVisible(function(ot){ot.isLight&&ot.layers.test(pt.layers)&&(M.pushLight(ot),ot.castShadow&&M.pushShadow(ot))}),M.setupLights(),F!==null&&F.updateLights(M.state.lightsArray),K=this.localClippingEnabled,it=gt.init(this.clippingPlanes,K),it===!0&&gt.setGlobalState(this.clippingPlanes,pt),F!==null&&ut.render(M.state.shadowsArray,j,pt);let Q=new Set;return L.traverse(function(ot){if(!(ot.isMesh||ot.isPoints||ot.isLine||ot.isSprite))return;let Nt=ot.material;if(Nt)if(Array.isArray(Nt))for(let kt=0;kt<Nt.length;kt++){let Ft=Nt[kt];nn(Ft,j,pt,ot),Q.add(Ft)}else nn(Nt,j,pt,ot),Q.add(Nt)}),M=S.pop(),F!==null&&F.renderEnd(),Q},this.compileAsync=function(L,pt,j=null){let Q=this.compile(L,pt,j);return new Promise(ot=>{function Nt(){if(Q.forEach(function(kt){let Ht=ct.get(kt).currentProgram;(Ht===void 0||Ht.isReady())&&Q.delete(kt)}),Q.size===0){ot(L);return}setTimeout(Nt,10)}Bt.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let sn=null;function xn(L){sn&&sn(L)}function un(){An.stop()}function bn(){An.start()}let An=new Am;An.setAnimationLoop(xn),typeof self<"u"&&An.setContext(self),this.setAnimationLoop=function(L){sn=L,zt.setAnimationLoop(L),L===null?An.stop():An.start()},zt.addEventListener("sessionstart",un),zt.addEventListener("sessionend",bn),this.render=function(L,pt){if(pt!==void 0&&pt.isCamera!==!0){ae("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;F!==null&&F.renderStart(L,pt);let j=zt.enabled===!0&&zt.isPresenting===!0,Q=R!==null&&(ft===null||j)&&R.begin(P,ft);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),pt.parent===null&&pt.matrixWorldAutoUpdate===!0&&pt.updateMatrixWorld(),zt.enabled===!0&&zt.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(zt.cameraAutoUpdate===!0&&zt.updateCamera(pt),pt=zt.getCamera()),L.isScene===!0&&L.onBeforeRender(P,L,pt,ft),M=Z.get(L,S.length),M.init(pt),M.state.textureUnits=lt.getTextureUnits(),S.push(M),at.multiplyMatrices(pt.projectionMatrix,pt.matrixWorldInverse),U.setFromProjectionMatrix(at,ci,pt.reversedDepth),K=this.localClippingEnabled,it=gt.init(this.clippingPlanes,K),b=et.get(L,T.length),b.init(),T.push(b),zt.enabled===!0&&zt.isPresenting===!0){let kt=P.xr.getDepthSensingMesh();kt!==null&&Is(kt,pt,-1/0,P.sortObjects)}Is(L,pt,0,P.sortObjects),b.finish(),F!==null&&F.updateLights(M.state.lightsArray),P.sortObjects===!0&&b.sort(Et,Ut),Rt=zt.enabled===!1||zt.isPresenting===!1||zt.hasDepthSensing()===!1,Rt&&At.addToRenderList(b,L),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),it===!0&&gt.beginShadows();let ot=M.state.shadowsArray;if(ut.render(ot,L,pt),it===!0&&gt.endShadows(),(Q&&R.hasRenderPass())===!1){let kt=b.opaque,Ft=b.transmissive;if(M.setupLights(),pt.isArrayCamera){let Ht=pt.cameras;if(Ft.length>0)for(let qt=0,ie=Ht.length;qt<ie;qt++){let ce=Ht[qt];Ps(kt,Ft,L,ce)}Rt&&At.render(L);for(let qt=0,ie=Ht.length;qt<ie;qt++){let ce=Ht[qt];nr(b,L,ce,ce.viewport)}}else Ft.length>0&&Ps(kt,Ft,L,pt),Rt&&At.render(L),nr(b,L,pt)}ft!==null&&V===0&&(lt.updateMultisampleRenderTarget(ft),lt.updateRenderTargetMipmap(ft)),Q&&R.end(P),L.isScene===!0&&L.onAfterRender(P,L,pt),Ct.resetDefaultState(),J=-1,W=null,S.pop(),S.length>0?(M=S[S.length-1],lt.setTextureUnits(M.state.textureUnits),it===!0&&gt.setGlobalState(P.clippingPlanes,M.state.camera)):M=null,T.pop(),T.length>0?b=T[T.length-1]:b=null,F!==null&&F.renderEnd()};function Is(L,pt,j,Q){if(L.visible===!1)return;if(L.layers.test(pt.layers)){if(L.isGroup)j=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(pt);else if(L.isLightProbeGrid)M.pushLightProbeGrid(L);else if(L.isLight)M.pushLight(L),L.castShadow&&M.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||L.intersectsFrustum(U)){Q&&St.setFromMatrixPosition(L.matrixWorld).applyMatrix4(at);let kt=C.update(L),Ft=L.material;Ft.visible&&b.push(L,kt,Ft,j,St.z,null,pt)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||L.intersectsFrustum(U))){let kt=C.update(L),Ft=L.material;if(Q&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),St.copy(L.boundingSphere.center)):(kt.boundingSphere===null&&kt.computeBoundingSphere(),St.copy(kt.boundingSphere.center)),St.applyMatrix4(L.matrixWorld).applyMatrix4(at)),Array.isArray(Ft)){let Ht=kt.groups;for(let qt=0,ie=Ht.length;qt<ie;qt++){let ce=Ht[qt],Zt=Ft[ce.materialIndex];Zt&&Zt.visible&&b.push(L,kt,Zt,j,St.z,ce,pt)}}else Ft.visible&&b.push(L,kt,Ft,j,St.z,null,pt)}}let Nt=L.children;for(let kt=0,Ft=Nt.length;kt<Ft;kt++)Is(Nt[kt],pt,j,Q)}function nr(L,pt,j,Q){let{opaque:ot,transmissive:Nt,transparent:kt}=L;M.setupLightsView(j),it===!0&&gt.setGlobalState(P.clippingPlanes,j),Q&&A.viewport(st.copy(Q)),ot.length>0&&ir(ot,pt,j),Nt.length>0&&ir(Nt,pt,j),kt.length>0&&ir(kt,pt,j),A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function Ps(L,pt,j,Q){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[Q.id]===void 0){let Zt=Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[Q.id]=new Un(1,1,{generateMipmaps:!0,type:Zt?di:kn,minFilter:vs,samples:Math.max(4,z.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ye.workingColorSpace})}let Nt=M.state.transmissionRenderTarget[Q.id],kt=Q.viewport||st;Nt.setSize(kt.z*P.transmissionResolutionScale,kt.w*P.transmissionResolutionScale);let Ft=P.getRenderTarget(),Ht=P.getActiveCubeFace(),qt=P.getActiveMipmapLevel();P.setRenderTarget(Nt),P.getClearColor(vt),xt=P.getClearAlpha(),xt<1&&P.setClearColor(16777215,.5),P.clear(),Rt&&At.render(j);let ie=P.toneMapping;P.toneMapping=hi;let ce=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),M.setupLightsView(Q),it===!0&&gt.setGlobalState(P.clippingPlanes,Q),ir(L,j,Q),lt.updateMultisampleRenderTarget(Nt),lt.updateRenderTargetMipmap(Nt),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let ee=0,Ue=pt.length;ee<Ue;ee++){let Se=pt[ee],{object:de,geometry:pe,material:Yt,group:ke}=Se;if(Yt.side===We&&de.layers.test(Q.layers)){let ge=Yt.side;Yt.side=Pn,Yt.needsUpdate=!0,fo(de,j,Q,pe,Yt,ke),Yt.side=ge,Yt.needsUpdate=!0,Zt=!0}}Zt===!0&&(lt.updateMultisampleRenderTarget(Nt),lt.updateRenderTargetMipmap(Nt))}P.setRenderTarget(Ft,Ht,qt),P.setClearColor(vt,xt),ce!==void 0&&(Q.viewport=ce),P.toneMapping=ie}function ir(L,pt,j){let Q=pt.isScene===!0?pt.overrideMaterial:null;for(let ot=0,Nt=L.length;ot<Nt;ot++){let kt=L[ot],{object:Ft,geometry:Ht,group:qt}=kt,ie=kt.material;ie.allowOverride===!0&&Q!==null&&(ie=Q),Ft.layers.test(j.layers)&&fo(Ft,pt,j,Ht,ie,qt)}}function fo(L,pt,j,Q,ot,Nt){F!==null&&ot.isNodeMaterial&&F.setObject(L,ot),L.onBeforeRender(P,pt,j,Q,ot,Nt),L.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ot.onBeforeRender(P,pt,j,Q,L,Nt),ot.transparent===!0&&ot.side===We&&ot.forceSinglePass===!1?(ot.side=Pn,ot.needsUpdate=!0,P.renderBufferDirect(j,pt,Q,ot,L,Nt),ot.side=xs,ot.needsUpdate=!0,P.renderBufferDirect(j,pt,Q,ot,L,Nt),ot.side=We):P.renderBufferDirect(j,pt,Q,ot,L,Nt),L.onAfterRender(P,pt,j,Q,ot,Nt)}function sr(L,pt,j){pt.isScene!==!0&&(pt=Tt);let Q=ct.get(L),ot=M.state.lights,Nt=M.state.shadowsArray,kt=ot.state.version,Ft=D.getParameters(L,ot.state,Nt,pt,j,M.state.lightProbeGridArray),Ht=D.getProgramCacheKey(Ft),qt=Q.programs;Q.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?pt.environment:null,Q.fog=pt.fog;let ie=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;Q.envMap=O.get(L.envMap||Q.environment,ie),Q.envMapRotation=Q.environment!==null&&L.envMap===null?pt.environmentRotation:L.envMapRotation,qt===void 0&&(L.addEventListener("dispose",Ee),qt=new Map,Q.programs=qt);let ce=qt.get(Ht);if(ce!==void 0){if(Q.currentProgram===ce&&Q.lightsStateVersion===kt)return Ba(L,Ft),ce}else Ft.uniforms=D.getUniforms(L),F!==null&&L.isNodeMaterial&&F.build(L,j,Ft),L.onBeforeCompile(Ft,P),ce=D.acquireProgram(Ft,Ht),qt.set(Ht,ce),Q.uniforms=Ft.uniforms;let Zt=Q.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Zt.clippingPlanes=gt.uniform),Ba(L,Ft),Q.needsLights=Hu(L),Q.lightsStateVersion=kt,Q.needsLights&&(Zt.ambientLightColor.value=ot.state.ambient,Zt.lightProbe.value=ot.state.probe,Zt.sunLights.value=ot.state.sun,Zt.sunLightShadows.value=ot.state.sunShadow,Zt.directionalLights.value=ot.state.directional,Zt.directionalLightShadows.value=ot.state.directionalShadow,Zt.spotLights.value=ot.state.spot,Zt.spotLightShadows.value=ot.state.spotShadow,Zt.rectAreaLights.value=ot.state.rectArea,Zt.ltc_1.value=ot.state.rectAreaLTC1,Zt.ltc_2.value=ot.state.rectAreaLTC2,Zt.pointLights.value=ot.state.point,Zt.pointLightShadows.value=ot.state.pointShadow,Zt.hemisphereLights.value=ot.state.hemi,Zt.sunShadowMatrix.value=ot.state.sunShadowMatrix,Zt.sunShadowCascade.value=ot.state.sunShadowCascade,Zt.directionalShadowMatrix.value=ot.state.directionalShadowMatrix,Zt.spotLightMatrix.value=ot.state.spotLightMatrix,Zt.spotLightMap.value=ot.state.spotLightMap,Zt.pointShadowMatrix.value=ot.state.pointShadowMatrix),Q.lightProbeGrid=M.state.lightProbeGridArray.length>0,Q.currentProgram=ce,Q.uniformsList=null,ce}function Oa(L){if(L.uniformsList===null){let pt=L.currentProgram.getUniforms();L.uniformsList=qr.seqWithValue(pt.seq,L.uniforms)}return L.uniformsList}function Ba(L,pt){let j=ct.get(L);j.outputColorSpace=pt.outputColorSpace,j.batching=pt.batching,j.batchingColor=pt.batchingColor,j.instancing=pt.instancing,j.instancingColor=pt.instancingColor,j.instancingMorph=pt.instancingMorph,j.skinning=pt.skinning,j.morphTargets=pt.morphTargets,j.morphNormals=pt.morphNormals,j.morphColors=pt.morphColors,j.morphTargetsCount=pt.morphTargetsCount,j.numClippingPlanes=pt.numClippingPlanes,j.numIntersection=pt.numClipIntersection,j.vertexAlphas=pt.vertexAlphas,j.vertexTangents=pt.vertexTangents,j.toneMapping=pt.toneMapping}function Ou(L,pt){if(L.length===0)return null;if(L.length===1)return L[0].texture!==null?L[0]:null;_.setFromMatrixPosition(pt.matrixWorld);for(let j=0,Q=L.length;j<Q;j++){let ot=L[j];if(ot.texture!==null&&ot.boundingBox.containsPoint(_))return ot}return null}function Bu(L,pt,j,Q,ot){pt.isScene!==!0&&(pt=Tt),lt.resetTextureUnits();let Nt=pt.fog,kt=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?pt.environment:null,Ft=ft===null?P.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:ye.workingColorSpace,Ht=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,qt=O.get(Q.envMap||kt,Ht),ie=Q.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ce=!!j.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Zt=!!j.morphAttributes.position,ee=!!j.morphAttributes.normal,Ue=!!j.morphAttributes.color,Se=hi;Q.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(Se=P.toneMapping);let de=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,pe=de!==void 0?de.length:0,Yt=ct.get(Q),ke=M.state.lights;if(it===!0&&(K===!0||L!==W)){let Ce=L===W&&Q.id===J;gt.setState(Q,L,Ce)}let ge=!1;Q.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==ke.state.version||Yt.outputColorSpace!==Ft||ot.isBatchedMesh&&Yt.batching===!1||!ot.isBatchedMesh&&Yt.batching===!0||ot.isBatchedMesh&&Yt.batchingColor===!0&&ot._colorsTexture===null||ot.isBatchedMesh&&Yt.batchingColor===!1&&ot._colorsTexture!==null||ot.isInstancedMesh&&Yt.instancing===!1||!ot.isInstancedMesh&&Yt.instancing===!0||ot.isSkinnedMesh&&Yt.skinning===!1||!ot.isSkinnedMesh&&Yt.skinning===!0||ot.isInstancedMesh&&Yt.instancingColor===!0&&ot.instanceColor===null||ot.isInstancedMesh&&Yt.instancingColor===!1&&ot.instanceColor!==null||ot.isInstancedMesh&&Yt.instancingMorph===!0&&ot.morphTexture===null||ot.isInstancedMesh&&Yt.instancingMorph===!1&&ot.morphTexture!==null||Yt.envMap!==qt||Q.fog===!0&&Yt.fog!==Nt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==gt.numPlanes||Yt.numIntersection!==gt.numIntersection)||Yt.vertexAlphas!==ie||Yt.vertexTangents!==ce||Yt.morphTargets!==Zt||Yt.morphNormals!==ee||Yt.morphColors!==Ue||Yt.toneMapping!==Se||Yt.morphTargetsCount!==pe||!!Yt.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(ge=!0):(ge=!0,Yt.__version=Q.version);let hn=Yt.currentProgram;ge===!0&&(hn=sr(Q,pt,ot),F&&Q.isNodeMaterial&&F.onUpdateProgram(Q,hn,Yt));let Rn=!1,ii=!1,bi=!1,we=hn.getUniforms(),He=Yt.uniforms;if(A.useProgram(hn.program)&&(Rn=!0,ii=!0,bi=!0),Q.id!==J&&(J=Q.id,ii=!0),Yt.needsLights){let Ce=Ou(M.state.lightProbeGridArray,ot);Yt.lightProbeGrid!==Ce&&(Yt.lightProbeGrid=Ce,ii=!0)}if(Rn||W!==L){A.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),we.setValue(q,"projectionMatrix",L.projectionMatrix),we.setValue(q,"viewMatrix",L.matrixWorldInverse);let Yn=we.map.cameraPosition;Yn!==void 0&&Yn.setValue(q,tt.setFromMatrixPosition(L.matrixWorld)),z.logarithmicDepthBuffer&&we.setValue(q,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&we.setValue(q,"isOrthographic",L.isOrthographicCamera===!0),W!==L&&(W=L,ii=!0,bi=!0)}if(Yt.needsLights&&(ke.state.sunShadowMap.length>0&&we.setValue(q,"sunShadowMap",ke.state.sunShadowMap,lt),ke.state.directionalShadowMap.length>0&&we.setValue(q,"directionalShadowMap",ke.state.directionalShadowMap,lt),ke.state.spotShadowMap.length>0&&we.setValue(q,"spotShadowMap",ke.state.spotShadowMap,lt),ke.state.pointShadowMap.length>0&&we.setValue(q,"pointShadowMap",ke.state.pointShadowMap,lt)),ot.isSkinnedMesh){we.setOptional(q,ot,"bindMatrix"),we.setOptional(q,ot,"bindMatrixInverse");let Ce=ot.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),we.setValue(q,"boneTexture",Ce.boneTexture,lt))}ot.isBatchedMesh&&(we.setOptional(q,ot,"batchingTexture"),we.setValue(q,"batchingTexture",ot._matricesTexture,lt),we.setOptional(q,ot,"batchingIdTexture"),we.setValue(q,"batchingIdTexture",ot._indirectTexture,lt),we.setOptional(q,ot,"batchingColorTexture"),ot._colorsTexture!==null&&we.setValue(q,"batchingColorTexture",ot._colorsTexture,lt));let Bn=j.morphAttributes;if((Bn.position!==void 0||Bn.normal!==void 0||Bn.color!==void 0)&&N.update(ot,j,hn),(ii||Yt.receiveShadow!==ot.receiveShadow)&&(Yt.receiveShadow=ot.receiveShadow,we.setValue(q,"receiveShadow",ot.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&pt.environment!==null&&(He.envMapIntensity.value=pt.environmentIntensity),He.dfgLUT!==void 0&&(He.dfgLUT.value=zS()),ii){if(we.setValue(q,"toneMappingExposure",P.toneMappingExposure),Yt.needsLights&&zu(He,bi),Nt&&Q.fog===!0&&k.refreshFogUniforms(He,Nt),k.refreshMaterialUniforms(He,Q,rt,$,M.state.transmissionRenderTarget[L.id]),Yt.needsLights&&Yt.lightProbeGrid){let Ce=Yt.lightProbeGrid;He.probesSH.value=Ce.texture,He.probesMin.value.copy(Ce.boundingBox.min),He.probesMax.value.copy(Ce.boundingBox.max),He.probesResolution.value.copy(Ce.resolution)}qr.upload(q,Oa(Yt),He,lt)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(qr.upload(q,Oa(Yt),He,lt),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&we.setValue(q,"center",ot.center),we.setValue(q,"modelViewMatrix",ot.modelViewMatrix),we.setValue(q,"normalMatrix",ot.normalMatrix),we.setValue(q,"modelMatrix",ot.matrixWorld),Q.uniformsGroups!==void 0){let Ce=Q.uniformsGroups;for(let Yn=0,rr=Ce.length;Yn<rr;Yn++){let Rd=Ce[Yn];wt.update(Rd,hn),wt.bind(Rd,hn)}}return hn}function zu(L,pt){L.ambientLightColor.needsUpdate=pt,L.lightProbe.needsUpdate=pt,L.sunLights.needsUpdate=pt,L.sunLightShadows.needsUpdate=pt,L.directionalLights.needsUpdate=pt,L.directionalLightShadows.needsUpdate=pt,L.pointLights.needsUpdate=pt,L.pointLightShadows.needsUpdate=pt,L.spotLights.needsUpdate=pt,L.spotLightShadows.needsUpdate=pt,L.rectAreaLights.needsUpdate=pt,L.hemisphereLights.needsUpdate=pt}function Hu(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return ft},this.setRenderTargetTextures=function(L,pt,j){let Q=ct.get(L);Q.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),ct.get(L.texture).__webglTexture=pt,ct.get(L.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:j,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,pt){let j=ct.get(L);j.__webglFramebuffer=pt,j.__useDefaultFramebuffer=pt===void 0},this.setRenderTarget=function(L,pt=0,j=0){ft=L,G=pt,V=j;let Q=null,ot=!1,Nt=!1;if(L){let Ft=ct.get(L);if(Ft.__useDefaultFramebuffer!==void 0){A.bindFramebuffer(q.FRAMEBUFFER,Ft.__webglFramebuffer),st.copy(L.viewport),bt.copy(L.scissor),Mt=L.scissorTest,A.viewport(st),A.scissor(bt),A.setScissorTest(Mt),J=-1;return}else if(Ft.__webglFramebuffer===void 0)lt.setupRenderTarget(L);else if(Ft.__hasExternalTextures)lt.rebindTextures(L,ct.get(L.texture).__webglTexture,ct.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let ie=L.depthTexture;if(Ft.__boundDepthTexture!==ie){if(ie!==null&&ct.has(ie)&&(L.width!==ie.image.width||L.height!==ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");lt.setupDepthRenderbuffer(L)}}let Ht=L.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Nt=!0);let qt=ct.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(qt[pt])?Q=qt[pt][j]:Q=qt[pt],ot=!0):L.samples>0&&lt.useMultisampledRTT(L)===!1?Q=ct.get(L).__webglMultisampledFramebuffer:Array.isArray(qt)?Q=qt[j]:Q=qt,st.copy(L.viewport),bt.copy(L.scissor),Mt=L.scissorTest}else st.copy(It).multiplyScalar(rt).floor(),bt.copy(Pt).multiplyScalar(rt).floor(),Mt=$t;if(j!==0&&(Q=H),A.bindFramebuffer(q.FRAMEBUFFER,Q)&&A.drawBuffers(L,Q),A.viewport(st),A.scissor(bt),A.setScissorTest(Mt),ot){let Ft=ct.get(L.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ft.__webglTexture,j)}else if(Nt){let Ft=pt;for(let Ht=0;Ht<L.textures.length;Ht++){let qt=ct.get(L.textures[Ht]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Ht,qt.__webglTexture,j,Ft)}}else if(L!==null&&j!==0){let Ft=ct.get(L.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ft.__webglTexture,j)}J=-1};function za(L){let pt=ct.get(L);return(pt.__readFormat!==L.format||pt.__readType!==L.type)&&(pt.__readFormat=L.format,pt.__readType=L.type,pt.__formatReadable=z.textureFormatReadable(L.format),pt.__typeReadable=z.textureTypeReadable(L.type)),pt}this.readRenderTargetPixels=function(L,pt,j,Q,ot,Nt,kt,Ft=0){if(!(L&&L.isWebGLRenderTarget)){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=ct.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&kt!==void 0&&(Ht=Ht[kt]),Ht){A.bindFramebuffer(q.FRAMEBUFFER,Ht);try{let qt=L.textures[Ft],ie=qt.format,ce=qt.type;L.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ft);let Zt=za(qt);if(Zt.__formatReadable===!1){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Zt.__typeReadable===!1){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}pt>=0&&pt<=L.width-Q&&j>=0&&j<=L.height-ot&&q.readPixels(pt,j,Q,ot,_t.convert(ie),_t.convert(ce),Nt)}finally{let qt=ft!==null?ct.get(ft).__webglFramebuffer:null;A.bindFramebuffer(q.FRAMEBUFFER,qt)}}},this.readRenderTargetPixelsAsync=async function(L,pt,j,Q,ot,Nt,kt,Ft=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=ct.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&kt!==void 0&&(Ht=Ht[kt]),Ht)if(pt>=0&&pt<=L.width-Q&&j>=0&&j<=L.height-ot){A.bindFramebuffer(q.FRAMEBUFFER,Ht);let qt=L.textures[Ft],ie=qt.format,ce=qt.type;L.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ft);let Zt=za(qt);if(Zt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Zt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ee=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,ee),q.bufferData(q.PIXEL_PACK_BUFFER,Nt.byteLength,q.STREAM_READ),q.readPixels(pt,j,Q,ot,_t.convert(ie),_t.convert(ce),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);let Ue=ft!==null?ct.get(ft).__webglFramebuffer:null;A.bindFramebuffer(q.FRAMEBUFFER,Ue);let Se=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await Kp(q,Se,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,ee),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Nt),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(ee),q.deleteSync(Se),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,pt=null,j=0){let Q=Math.pow(2,-j),ot=Math.floor(L.image.width*Q),Nt=Math.floor(L.image.height*Q),kt=pt!==null?pt.x:0,Ft=pt!==null?pt.y:0;lt.setTexture2D(L,0),q.copyTexSubImage2D(q.TEXTURE_2D,j,0,0,kt,Ft,ot,Nt),A.unbindTexture()},this.copyTextureToTexture=function(L,pt,j=null,Q=null,ot=0,Nt=0){let kt,Ft,Ht,qt,ie,ce,Zt,ee,Ue,Se=L.isCompressedTexture?L.mipmaps[Nt]:L.image;if(j!==null)kt=j.max.x-j.min.x,Ft=j.max.y-j.min.y,Ht=j.isBox3?j.max.z-j.min.z:1,qt=j.min.x,ie=j.min.y,ce=j.isBox3?j.min.z:0;else{let He=Math.pow(2,-ot);kt=Math.floor(Se.width*He),Ft=Math.floor(Se.height*He),L.isDataArrayTexture?Ht=Se.depth:L.isData3DTexture?Ht=Math.floor(Se.depth*He):Ht=1,qt=0,ie=0,ce=0}Q!==null?(Zt=Q.x,ee=Q.y,Ue=Q.z):(Zt=0,ee=0,Ue=0);let de=_t.convert(pt.format),pe=_t.convert(pt.type),Yt;pt.isData3DTexture?(lt.setTexture3D(pt,0),Yt=q.TEXTURE_3D):pt.isDataArrayTexture||pt.isCompressedArrayTexture?(lt.setTexture2DArray(pt,0),Yt=q.TEXTURE_2D_ARRAY):(lt.setTexture2D(pt,0),Yt=q.TEXTURE_2D),A.activeTexture(q.TEXTURE0),A.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,pt.flipY),A.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,pt.premultiplyAlpha),A.pixelStorei(q.UNPACK_ALIGNMENT,pt.unpackAlignment);let ke=A.getParameter(q.UNPACK_ROW_LENGTH),ge=A.getParameter(q.UNPACK_IMAGE_HEIGHT),hn=A.getParameter(q.UNPACK_SKIP_PIXELS),Rn=A.getParameter(q.UNPACK_SKIP_ROWS),ii=A.getParameter(q.UNPACK_SKIP_IMAGES);A.pixelStorei(q.UNPACK_ROW_LENGTH,Se.width),A.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Se.height),A.pixelStorei(q.UNPACK_SKIP_PIXELS,qt),A.pixelStorei(q.UNPACK_SKIP_ROWS,ie),A.pixelStorei(q.UNPACK_SKIP_IMAGES,ce);let bi=L.isDataArrayTexture||L.isData3DTexture,we=pt.isDataArrayTexture||pt.isData3DTexture;if(L.isDepthTexture){let He=ct.get(L),Bn=ct.get(pt),Ce=ct.get(He.__renderTarget),Yn=ct.get(Bn.__renderTarget);A.bindFramebuffer(q.READ_FRAMEBUFFER,Ce.__webglFramebuffer),A.bindFramebuffer(q.DRAW_FRAMEBUFFER,Yn.__webglFramebuffer);for(let rr=0;rr<Ht;rr++)bi&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,ct.get(L).__webglTexture,ot,ce+rr),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,ct.get(pt).__webglTexture,Nt,Ue+rr)),q.blitFramebuffer(qt,ie,kt,Ft,Zt,ee,kt,Ft,q.DEPTH_BUFFER_BIT,q.NEAREST);A.bindFramebuffer(q.READ_FRAMEBUFFER,null),A.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(ot!==0||L.isRenderTargetTexture||ct.has(L)){let He=ct.get(L),Bn=ct.get(pt);A.bindFramebuffer(q.READ_FRAMEBUFFER,B),A.bindFramebuffer(q.DRAW_FRAMEBUFFER,Y);for(let Ce=0;Ce<Ht;Ce++)bi?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,He.__webglTexture,ot,ce+Ce):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,He.__webglTexture,ot),we?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Bn.__webglTexture,Nt,Ue+Ce):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Bn.__webglTexture,Nt),ot!==0?q.blitFramebuffer(qt,ie,kt,Ft,Zt,ee,kt,Ft,q.COLOR_BUFFER_BIT,q.NEAREST):we?q.copyTexSubImage3D(Yt,Nt,Zt,ee,Ue+Ce,qt,ie,kt,Ft):q.copyTexSubImage2D(Yt,Nt,Zt,ee,qt,ie,kt,Ft);A.bindFramebuffer(q.READ_FRAMEBUFFER,null),A.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else we?L.isDataTexture||L.isData3DTexture?q.texSubImage3D(Yt,Nt,Zt,ee,Ue,kt,Ft,Ht,de,pe,Se.data):pt.isCompressedArrayTexture?q.compressedTexSubImage3D(Yt,Nt,Zt,ee,Ue,kt,Ft,Ht,de,Se.data):q.texSubImage3D(Yt,Nt,Zt,ee,Ue,kt,Ft,Ht,de,pe,Se):L.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Nt,Zt,ee,kt,Ft,de,pe,Se.data):L.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Nt,Zt,ee,Se.width,Se.height,de,Se.data):q.texSubImage2D(q.TEXTURE_2D,Nt,Zt,ee,kt,Ft,de,pe,Se);A.pixelStorei(q.UNPACK_ROW_LENGTH,ke),A.pixelStorei(q.UNPACK_IMAGE_HEIGHT,ge),A.pixelStorei(q.UNPACK_SKIP_PIXELS,hn),A.pixelStorei(q.UNPACK_SKIP_ROWS,Rn),A.pixelStorei(q.UNPACK_SKIP_IMAGES,ii),Nt===0&&pt.generateMipmaps&&q.generateMipmap(Yt),A.unbindTexture()},this.initRenderTarget=function(L){ct.get(L).__webglFramebuffer===void 0&&lt.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?lt.setTextureCube(L,0):L.isData3DTexture?lt.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?lt.setTexture2DArray(L,0):lt.setTexture2D(L,0),A.unbindTexture()},this.resetState=function(){G=0,V=0,ft=null,A.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ye._getDrawingBufferColorSpace(t),e.unpackColorSpace=ye._getUnpackColorSpace()}};var yy=po($r(),1);(function(n){"use strict";let t=Object.freeze([Object.freeze({key:"sky",label:"Sky strip"}),Object.freeze({key:"precipitation",label:"Rain, snow and hail"}),Object.freeze({key:"wind",label:"Wind effects"}),Object.freeze({key:"reflections",label:"Sun, moon and cloud reflections"}),Object.freeze({key:"trees",label:"Trees and palms"}),Object.freeze({key:"traffic",label:"Road traffic"}),Object.freeze({key:"sidewalk",label:"Walkers and cyclists"}),Object.freeze({key:"boats",label:"Boats"}),Object.freeze({key:"beachPlay",label:"Beach play"})]),e=new Set(t.map(({key:u})=>u)),i=new Set(["left","center","right"]),s=(u,f)=>u==="dockAlignment"?i.has(f):e.has(u)&&typeof f=="boolean",r=u=>i.has(u?.dockAlignment)?u.dockAlignment:"right";function o(u){return u===void 0||!!(u&&typeof u=="object"&&!Array.isArray(u)&&Object.entries(u).every(([f,h])=>s(f,h)))}function a(u,f){return u?.[f]!==!1}function c(u,f,h){if(!s(f,h)||h===(f==="dockAlignment"?r(u):a(u,f)))return u;let d={...u};return h===(f==="dockAlignment"?"right":!0)?delete d[f]:d[f]=h,Object.keys(d).length?d:void 0}function l(u,f){return a(f,"wind")?u:{...u,windSpeed:0,windBearing:void 0}}n.RoomcraftSceneSettings=Object.freeze({features:t,valid:o,enabled:a,withFeature:c,wind:l,dockAlignment:r})})(typeof window>"u"?globalThis:window);var va=(typeof window>"u"?globalThis:window).RoomcraftSceneSettings,Dm=va.features,RC=va.valid,pi=va.enabled,Yl=va.wind,Fm=va.dockAlignment;function On(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new re,l=0;for(let u=0;u<n.length;++u){let f=n[u],h=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(e){let u=0,f=[];for(let h=0;h<n.length;++h){let d=n[h].index;for(let p=0;p<d.count;++p)f.push(d.getX(p)+u);u+=n[h].attributes.position.count}c.setIndex(f)}for(let u in r){let f=Um(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,f)}for(let u in o){let f=o[u][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let h=0;h<f;++h){let d=[];for(let y=0;y<o[u].length;++y)d.push(o[u][y][h]);let p=Um(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(p)}}}return c}function Um(n){let t,e,i,s=-1,r=0;for(let l=0;l<n.length;++l){let u=n[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let o=new t(r),a=new Me(o,e,i),c=0;for(let l=0;l<n.length;++l){let u=n[l];if(u.isInterleavedBufferAttribute){let f=c/e;for(let h=0,d=u.count;h<d;h++)for(let p=0;p<e;p++){let y=u.getComponent(h,p);a.setComponent(h+f,p,y)}}else o.set(u.array,c);c+=u.count*e}return s!==void 0&&(a.gpuType=s),a}var _a=new X;function Qn(n,t,e,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;_a.copy(t),_a[i]=0,_a.normalize();let l=.5*o/(o+a),u=1-_a.angleTo(n)/c;return Math.sign(_a[e])===1?u*l:a/(o+a)+l+l*(1-u)}var $l=class n extends xe{constructor(t=1,e=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new X,l=new X,u=new X(t,e,i).divideScalar(2).subScalar(r),f=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,p=f.length/6,y=new X,m=.5/o;for(let g=0,x=0;g<f.length;g+=3,x+=2)switch(c.fromArray(f,g),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),f[g+0]=u.x*Math.sign(c.x)+l.x*r,f[g+1]=u.y*Math.sign(c.y)+l.y*r,f[g+2]=u.z*Math.sign(c.z)+l.z*r,h[g+0]=l.x,h[g+1]=l.y,h[g+2]=l.z,Math.floor(g/p)){case 0:y.set(1,0,0),d[x+0]=Qn(y,l,"z","y",r,i),d[x+1]=1-Qn(y,l,"y","z",r,e);break;case 1:y.set(-1,0,0),d[x+0]=1-Qn(y,l,"z","y",r,i),d[x+1]=1-Qn(y,l,"y","z",r,e);break;case 2:y.set(0,1,0),d[x+0]=1-Qn(y,l,"x","z",r,t),d[x+1]=Qn(y,l,"z","x",r,i);break;case 3:y.set(0,-1,0),d[x+0]=1-Qn(y,l,"x","z",r,t),d[x+1]=1-Qn(y,l,"z","x",r,i);break;case 4:y.set(0,0,1),d[x+0]=1-Qn(y,l,"x","y",r,t),d[x+1]=1-Qn(y,l,"y","x",r,e);break;case 5:y.set(0,0,-1),d[x+0]=Qn(y,l,"x","y",r,t),d[x+1]=1-Qn(y,l,"y","x",r,e);break}}static fromJSON(t){return new n(t.width,t.height,t.depth,t.segments,t.radius)}};var km=Object.freeze({"pets-fish-aquarium-oak":"aquarium","pets-lizard-terrarium-walnut":"terrarium"}),HS=Math.PI*2;function GS(){let n=new Jt,t=new xe(1,1,1),e=new ve(1,12,8),i=new Map;function s(a){return i.has(a)||i.set(a,new Ne({color:a,roughness:.83})),i.get(a)}function r(a,c,l,u,f,h,d,p,y){let m=new ne(c,typeof l=="string"?s(l):l);return m.position.set(u,f,h),m.scale.set(d,p,y),a.add(m),m}function o(){let a=new Map;for(let l of n.children){if(!l.isMesh||l.material.transparent)continue;let u=a.get(l.material)??[];u.push(l),a.set(l.material,u)}for(let[l,u]of a){if(u.length<2)continue;let f=u.map(d=>(d.updateMatrix(),d.geometry.toNonIndexed().applyMatrix4(d.matrix))),h=new ne(On(f),l);h.castShadow=u.some(d=>d.castShadow),f.forEach(d=>d.dispose()),n.remove(...u),n.add(h)}let c=new Set;n.traverse(l=>{l.geometry&&c.add(l.geometry)});for(let l of[t,e])c.has(l)||l.dispose()}return{root:n,batchStaticParts:o,box:(a,...c)=>r(a,t,...c),oval:(a,...c)=>r(a,e,...c)}}function VS({root:n,box:t},e,i,s){let r=s?"#c29365":"#875b47",o=s?"#304b54":"#453c42",a=26,c=s?57:58,l=Math.min(2,e*.065,i*.065),u=new _e({color:s?"#9edcdb":"#d1eadb",transparent:!0,opacity:s?.19:.13,depthWrite:!1,side:We});t(n,o,0,1.8,0,e*.91,3.6,i*.88),t(n,r,0,14,0,e*.95,21,i*.93).castShadow=!0;for(let d of[-1,1])t(n,s?"#deb181":"#aa785d",d*e*.232,14,i*.469,e*.448,17,i*.021),t(n,"#c8a378",d*e*.072,14.5,i*.492,e*.047,1.25,i*.016);t(n,o,0,a,0,e,3,i).castShadow=!0;let f=(a+c)/2,h=c-a;for(let d of[-e/2+l/2,e/2-l/2]){t(n,o,d,c,0,l,1.8,i),t(n,u,d,f,0,l*.17,h,i-l*2);for(let p of[-i/2+l/2,i/2-l/2])t(n,o,d,f,p,l,h,l)}for(let d of[-i/2+l/2,i/2-l/2])t(n,o,0,c,d,e-l*2,1.8,l),t(n,u,0,f,d,e-l*2,h,l*.17);return t(n,o,0,c+1.5,-i*.325,e*.77,2.7,i*.105),t(n,s?"#cde8d3":"#eed59e",0,c+.42,-i*.265,e*.72,.7,i*.016),{base:a,top:c}}function WS({box:n,oval:t,root:e},i,s,r){let o=new Jt;o.name="fish-"+i,e.add(o),t(o,r,0,0,0,s*1.85,s*1.08,s*.79),t(o,"#ffdbb8",s*.07,-s*.44,0,s*1.45,s*.63,s*.71);let a=new Jt;a.position.x=-s*1.42,o.add(a);for(let c of[-.43,.43]){let l=t(a,r,-s*.6,Math.sign(c)*s*.4,0,s*.83,s*.42,s*.21);l.rotation.z=c}for(let c of[-1,1])t(o,"#273245",s*.99,s*.14,c*s*.61,s*.235,s*.23,s*.12),n(o,"#fff1d9",s*1.05,s*.21,c*s*.69,s*.11,s*.1,s*.07);return{fish:o,tail:a}}function XS(n,t,e,i,s,r){let{root:o,box:a,oval:c}=n,l=s-4,u=new _e({color:"#8dd1ce",transparent:!0,opacity:.28,depthWrite:!1}),f=new _e({color:"#d7fff4",transparent:!0,opacity:.62,depthWrite:!1});a(o,"#82a9a1",0,i+2.15,0,t*.94,1.7,e*.9),a(o,u,0,l,0,t*.952,.22,e*.934);for(let p=0;p<18;p++){let y=(p*7%19/19-.5)*t*.83,m=(p*13%19/19-.5)*e*.79;c(o,["#b9c5ad","#72958b","#96ac9f"][p%3],y,i+3,m,r*(1+p%4*.34),.85,r*1.15)}for(let[p,y]of[[-.3,-.22],[-.23,-.27],[.33,-.2],[.37,.02]])for(let m=0;m<4;m++){let g=m-1.5,x=c(o,["#4d8971","#8cab75","#69a18a","#5b9664"][m],p*t+g*r,i+3+(2+m*1.6)*Math.min(1.15,r),y*e,r*1.45,(4+m*1.12)*Math.min(1.15,r),r*1.15);x.rotation.z=g*.22}let h=["#e99660","#ecc56d","#bc92b8"].map((p,y)=>WS(n,y,r*(1.72-y*.17),p)),d=Array.from({length:5},(p,y)=>{let m=r*(.45+y%3*.18),g=c(o,f,0,0,0,m,m,m);return g.name="bubble-"+y,g});return p=>{for(let[y,{fish:m,tail:g}]of h.entries()){let x=p*(.43+y*.06)+y*2.07+.5,v=t*(.24+y*.036),_=e*(.17+y*.038);m.position.set(Math.cos(x)*v,i+10+y*3.65+Math.sin(x*1.7)*2.15,Math.sin(x)*_),m.rotation.y=-Math.atan2(Math.cos(x)*_,-Math.sin(x)*v),g.rotation.y=Math.sin(p*8.6+y)*.39}for(let[y,m]of d.entries()){let g=(p*.3+y/d.length)%1;m.position.set(t*.33+Math.sin(g*HS+y)*r,i+5+g*20,e*.23),m.visible=g>.08&&g<.94}}}function qS({root:n,box:t,oval:e},i,s,r,o,a){t(n,"#d4a675",0,r+2.15,0,i*.93,1.6,s*.9);for(let h=0;h<16;h++)e(n,h%2?"#a98467":"#e1c491",(h*11%17/17-.5)*i*.81,r+3,(h*5%17/17-.5)*s*.76,a*1.5,.66,a);e(n,"#a07c66",-i*.29,r+4.5,-s*.13,i*.15,4.7,s*.19),e(n,"#c8a17c",-i*.29,r+7.1,-s*.17,i*.135,4.8,s*.154),e(n,"#624b45",-i*.29,r+4,-s*.011,i*.069,2.5,s*.063),e(n,"#e8c99b",i*.29,r+3.6,-s*.16,i*.1,2.2,s*.16),e(n,"#89ad9e",i*.29,r+5.1,-s*.16,i*.075,.9,s*.115);let c=t(n,"#936b52",i*.11,r+4,-s*.24,i*.27,2.6,s*.083);c.rotation.y=.25;for(let h=0;h<5;h++){let d=e(n,h%2?"#829468":"#a7ad78",-i*.37+h*a,r+6+h%2,s*.26,a*1.2,3.7*Math.min(1.3,a),a);d.rotation.z=(h-2)*.24}for(let h=0;h<7;h++)t(n,"#746462",(h/6-.5)*i*.7,o+.5,-s*.386,a*.43,.58,s*.112);let l=new Jt;l.name="gecko",n.add(l),e(l,"#dca052",0,0,0,4.2*a,2.05*a,2.36*a),e(l,"#eab269",4.6*a,.7*a,0,2.38*a,1.53*a,1.9*a);let u=Array.from({length:5},(h,d)=>{let p=a*(1-d*.16);return e(l,d%2?"#b67950":"#daa15f",0,0,0,1.9*p,1.13*p,1.3*p)}),f=[];for(let h of[-1,1]){e(l,"#463946",5.15*a,1.34*a,h*1.26*a,.49*a,.44*a,.31*a);for(let d of[-1,1]){let p=new Jt;p.position.set(d*a*2.1,-.7*a,h*a*1.42),l.add(p);let y=e(p,"#d29861",-.48*d*a,-.13*a,h*1.12*a,.66*a,.54*a,1.43*a);y.rotation.y=h*d*.28;for(let m of[-1,0,1])e(p,"#ecc297",(m*.42+.5)*a,-.55*a,h*2.28*a,.55*a,.22*a,.23*a);f.push({leg:p,side:h,front:d})}}for(let h=0;h<6;h++)e(l,"#96664f",(h%3-1)*2.2*a,1.88*a,(h<3?-.66:.66)*a,.66*a,.25*a,.46*a);return h=>{let d=h*.35+.7,p=Math.cos(d)*i*.13,y=Math.sin(d)*s*.09+s*.139;l.position.set(p,r+5.1+Math.sin(h*3.6)*.25,y),l.rotation.y=-Math.atan2(Math.cos(d)*s*.09,-Math.sin(d)*i*.13);for(let[m,g]of u.entries()){let x=m+1;g.position.set(-(3.55+x*1.24)*a,-.19*x*a,Math.sin(h*1.75-x*.55)*x*a*.32)}for(let{leg:m,side:g,front:x}of f)m.rotation.y=Math.sin(h*3.6)*g*x*.31}}function Om(n,t,e){if(!Object.hasOwn(km,n))return null;let i=km[n],s=GS(),r=i==="aquarium",{base:o,top:a}=VS(s,t,e,r),c=Math.min(t/110,e/63,2.5),l=r?XS(s,t,e,o,a,c):qS(s,t,e,o,a,c);return s.batchStaticParts(),l(0),{root:s.root,anchorY:a+3,ambientMotion:!0,animate(u,f){l(Math.max(0,f))}}}var YS=`
  varying vec2 panelUv;
  void main() {
    panelUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,$S=`
  uniform float screenTime;
  varying vec2 panelUv;
  void main() {
    float along = smoothstep(0.0, 0.22, panelUv.y) * (1.0 - smoothstep(0.78, 1.0, panelUv.y));
    float across = smoothstep(0.0, 0.84, panelUv.x) * (1.0 - smoothstep(0.92, 1.0, panelUv.x));
    float pulse = 0.23 + 0.025 * sin(screenTime * 1.4);
    gl_FragColor = vec4(vec3(0.91, 0.94, 1.0), along * across * pulse);
    #include <colorspace_fragment>
  }
`;function ZS(n={}){return[n.media_title,n.media_series_title,n.app_name,n.source].find(e=>typeof e=="string"&&e.trim())?.replace(/\s+/g," ").trim().slice(0,96)||"TV on"}function jS(){let n=globalThis.document?.createElement("canvas"),t=n?.getContext("2d");if(!t)return null;n.width=640,n.height=240;let e=new cs(n);return e.colorSpace=Ge,{context:t,texture:e}}function Bm({context:n,texture:t},e){let{width:i,height:s}=n.canvas;n.fillStyle="#fffdf9",n.fillRect(0,0,i,s),n.fillStyle="#211f2c",n.font="600 48px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle";let r=e;if(n.measureText(r).width>590){let o=Array.from(r);for(;o.length&&n.measureText(o.join("")+"\u2026").width>590;)o.pop();r=o.join("")+"\u2026"}n.fillText(r,i/2,s/2),t.needsUpdate=!0}function zm(n,t,e){let i={value:0},s=new _e({color:"#08090c",toneMapped:!1}),r=new ne(new wn(e*.78,43),s);r.name="storybook-tv-screen",r.position.set(-t*.155-.84,59,0),r.rotation.y=-Math.PI/2;let o=new ne(new wn(t*.27,e*.79),new ze({uniforms:{screenTime:i},vertexShader:YS,fragmentShader:$S,transparent:!0,depthWrite:!1,blending:Wi}));o.name="storybook-tv-spill",o.position.set(-t*.325,28.08,0),o.rotation.x=-Math.PI/2,o.visible=!1;let a=jS();return s.map=a?.texture??null,a&&Bm(a,""),r.userData.title="",n.root.add(r,o),n.animate=(c,l)=>{let u=c?.active===!0,f=u?ZS(c.attributes):"";f!==r.userData.title&&(r.userData.title=f,a&&Bm(a,f)),o.visible=u,s.color.set(u?"#ffffff":"#08090c"),u&&(i.value=Number.isFinite(l)?Math.max(0,Math.floor(l*12)/12):0)},n}(()=>{"use strict";let n=[["baby-toys","Baby toys"],["baby-activities","Baby activities"],["baby-mats","Play mats"],["baby-safety","Colorful safety walls & gates"],["climbing","Soft climbing blocks"],["fireplace","Fireplace & shelves"],["balcony","Balcony plant sets"],["fans","Ceiling fans"],["cleaning","Robot vacuums"],["toy-storage","Toy storage"],["play-furniture","Play furniture"],["pets","Pets"]],t={sage:["Sage","#9bb599","#dce8cc","#f5edcf","#5b755e"],mint:["Mint","#95c8b5","#d6eee0","#f5f9e9","#4f8b7c"],sky:["Sky blue","#98c5d7","#d5ebf0","#f5f8f2","#557e91"],peach:["Peach","#e4ac94","#f6d5ba","#fff2dc","#ad7569"],coral:["Coral","#d58e7e","#f5c5ad","#ffe5d0","#9a5d55"],lavender:["Lavender","#b6a8cf","#e4ddf0","#f6eff6","#756b9b"],butter:["Butter yellow","#e2c681","#f4e3af","#fff6dc","#a58a4e"],cream:["Cream","#e2d5bd","#f5eada","#fff9ec","#998972"],white:["Warm white","#e8e9de","#f8f8ee","#ffffff","#929990"],oak:["Oak","#bd8b62","#e2b786","#f5dfb7","#74523c"],walnut:["Walnut","#906347","#bb865c","#ebc69a","#513a2d"],charcoal:["Charcoal","#39464d","#657680","#d6e0d6","#1d292f"],brass:["Brass","#c9a872","#e9d3a2","#fff2d0","#7f6744"],terracotta:["Terracotta","#b87859","#dba27b","#f1d3af","#744b3a"],forest:["Forest green","#668a63","#a3bb80","#e5e7bc","#355d45"],blush:["Blush","#dbb2a9","#f1d6cc","#fff1e4","#a67b79"],rainbow:["Multicolor","#e7ab9d","#9cc8bd","#edd18b","#6d7591"],teddy:["Teddy brown","#a98263","#cfab84","#ead5ae","#654c3d"],slate:["Soft gray","#929491","#bdc0bd","#f1f0e9","#55595b"]},e=[],i={"baby-toys":"\u25C9","baby-activities":"\u2726","baby-mats":"\u25A6","baby-safety":"\u25A5",climbing:"\u25B0",fireplace:"\u25A4",balcony:"\u2740",fans:"\u2733",cleaning:"\u25C9","toy-storage":"\u25A5","play-furniture":"\u25A3",pets:"\u25C7",living:"\u273F",bedroom:"\u263E",lighting:"\u2726"},s={"baby-safety":"safety wall",fireplace:"fireplace shelfs",fans:"seiling fan",cleaning:"robot vaccum"};function r(l,u,f,h,d,p,y,m,g={}){for(let x=0;x<m.length;x++){let v=m[x],_=t[v];if(!_)throw new Error("Unknown inventory color: "+v);let b=`${l}-${h}-${v}`;e.push({type:b,label:`${d} \xB7 ${_[0]}`,icon:i[l],w:p,h:y,group:l,artFamily:u,form:f,palette:{base:_[1],accent:_[2],detail:_[3],dark:_[4]},tags:`${g.tags||""} ${s[l]||""}`.trim(),...g.collectionId?{collectionId:g.collectionId}:{},...g.seriesId?{seriesId:g.seriesId}:{},...g.designId?{designId:g.designId}:{},...g.designLabel?{designLabel:g.designLabel}:{},...g.sizeId?{sizeId:g.sizeId}:{},...g.sizeLabel?{sizeLabel:g.sizeLabel}:{},...g.material?{material:g.material}:{},...g.seriesId?{finishId:v,finishLabel:_[0]}:{},...g.legacy?{legacy:!0}:{},...g.atlas&&x===0?{atlas:g.atlas}:{},...g.mount?{mount:g.mount}:{},...g.visualKind?{visualKind:g.visualKind}:{},...g.lightForm?{lightForm:g.lightForm}:{},...g.renderLayer?{renderLayer:g.renderLayer}:{}})}}r("baby-toys","softToy","ball","soft-ball","Soft play ball",48,48,["sage","peach","sky","butter"],{tags:"8 month baby roll"}),r("baby-toys","softToy","texturedBall","sensory-ball","Textured sensory ball",48,48,["sky","mint","lavender","coral"],{atlas:"sensoryBall",tags:"8 month baby sensory"}),r("baby-toys","softToy","book","cloth-book","Cloth crinkle book",61,48,["sage","peach","sky"],{tags:"baby fabric book"}),r("baby-toys","softToy","book","board-book","Chunky board book",59,45,["butter","mint"],{tags:"baby books"}),r("baby-toys","softToy","cups","stacking-cups","Large stacking cups",70,56,["peach","sage","sky","lavender"],{tags:"baby nesting cups"}),r("baby-toys","softToy","rings","stacking-rings","Large stacking rings",68,68,["rainbow","butter","mint","coral"],{atlas:"stackRings",tags:"baby stacker"}),r("baby-toys","softToy","blocks","soft-blocks","Soft fabric blocks",88,70,["sage","sky","peach","lavender"],{tags:"large baby blocks"}),r("baby-toys","softToy","plush","plush-bear","Plush bear",58,65,["teddy","cream","blush"],{atlas:"plushBear",tags:"baby stuffed animal"}),r("baby-toys","softToy","photoBunnyPlush","bunny-plush","Soft bunny plush",58,70,["cream"],{tags:"photo 1977 living room baby stuffed animal rabbit"}),r("baby-toys","softToy","teether","teething-ring","Large teething ring",48,48,["mint","butter"],{tags:"baby silicone"}),r("baby-activities","activityToy","playGym","play-gym","Floor play gym",160,126,["sage","peach","sky"],{atlas:"playGym",tags:"baby activity arch"}),r("baby-activities","activityToy","photoWoodArch","wooden-play-arch","Wooden hanging-toy play arch",140,100,["oak"],{tags:"photo 1977 living room baby gym natural wood dangling toys"}),r("baby-activities","activityToy","photoActivityTable","colorful-activity-table","Colorful activity table",118,90,["rainbow"],{tags:"photo 1977 living room baby sensory music table"}),r("baby-activities","activityToy","activityCube","activity-cube","Activity cube",74,74,["oak","sky","mint"],{atlas:"activityCube",tags:"baby activity"}),r("baby-activities","activityToy","activityBoard","activity-board","Large activity board",124,60,["oak","sage","sky"],{atlas:"activityBoard",tags:"baby sensory board"}),r("baby-activities","activityToy","mirror","floor-mirror","Unbreakable play mirror",98,70,["cream","sage"],{tags:"baby floor mirror"}),r("baby-activities","activityToy","tunnel","fabric-tunnel","Soft fabric crawl tunnel",130,74,["sky","butter"],{tags:"baby crawl"}),r("baby-activities","activityToy","sensoryBasket","sensory-basket","Sensory play basket",73,65,["oak","mint"],{tags:"baby toys basket"}),r("baby-activities","activityToy","largeRattle","large-rattle","Large handled rattle",56,42,["peach","sage"],{tags:"baby grasp"}),r("baby-mats","playMat","tummy","tummy-mat","Tummy-time mat",182,130,["sage","peach","sky","butter"],{tags:"baby soft floor mat"}),r("baby-mats","playMat","foam","foam-mat","Large foam play mat",215,155,["rainbow","cream","mint","lavender","coral"],{atlas:"mat",tags:"baby floor padded"}),r("baby-mats","playMat","photoLeafMat","leaf-play-mat","Gray leaf play mat",240,170,["slate"],{tags:"photo 1977 living room baby quilted patterned padded mat"}),r("baby-mats","playMat","photoCheckerMat","checker-puzzle-mat","Brown checker puzzle mat",210,140,["cream"],{tags:"photo 1977 living room baby foam tile checkerboard"}),r("baby-mats","playMat","puzzle","puzzle-mat","Interlocking play mat",205,155,["sage","sky","butter","peach"],{tags:"baby padded puzzle"}),r("baby-mats","playMat","round","round-mat","Round quilted play mat",160,160,["cream","blush","mint"],{tags:"baby floor rug"}),r("baby-safety","paddedPanel","wall","padded-wall","Padded safety wall",156,29,["sage","mint","sky","peach","lavender","butter"],{atlas:"wallPanels",mount:"wall",tags:"color padded wall panel"}),r("baby-safety","paddedPanel","quilted","quilted-wall","Quilted wall panel",146,30,["cream","sky","blush","sage"],{mount:"wall",tags:"color soft wall"}),r("baby-safety","paddedPanel","folding","folding-wall","Folding play barrier",174,34,["sage","peach","lavender"],{tags:"baby color safety wall"}),r("baby-safety","paddedPanel","playpen","playpen","Panel playpen",182,143,["cream","sage","sky"],{tags:"baby enclosure"}),r("baby-safety","paddedPanel","photoPlayYard","rainbow-play-yard","Multicolor bear-panel play yard",320,225,["rainbow"],{tags:"photo 1977 living room baby safety enclosure playpen fence"}),r("baby-safety","paddedPanel","photoBearPanel","bear-panel","Bear-face play yard panel",94,34,["blush","white","mint","butter","sky","lavender"],{tags:"photo 1977 living room baby colorful modular safety gate fence panel"}),r("baby-safety","paddedPanel","gate","stair-gate","Hardware-mounted stair gate",112,29,["white","oak","charcoal"],{atlas:"babyGate",tags:"top of stairs second floor baby gate"}),r("baby-safety","paddedPanel","guard","fireplace-guard","Fireplace barrier",158,35,["charcoal","cream"],{tags:"fireplace baby screen guard"}),r("climbing","foamBlock","cube","foam-cube","Large foam cube",76,76,["sage","sky","peach","butter"],{tags:"soft climbing baby"}),r("climbing","foamBlock","wedge","foam-wedge","Foam climbing wedge",122,81,["rainbow","peach","sage","sky","lavender"],{atlas:"foamWedge",tags:"soft climbing ramp"}),r("climbing","foamBlock","steps","foam-steps","Foam step set",130,102,["rainbow","sage","butter","sky","peach"],{atlas:"foamSteps",tags:"soft climbing blocks"}),r("climbing","foamBlock","ramp","foam-ramp","Gentle foam ramp",157,91,["mint","peach","lavender"],{tags:"soft climbing"}),r("climbing","foamBlock","arch","foam-arch","Foam crawling arch",126,105,["rainbow","sky","sage","butter"],{atlas:"foamArch",tags:"soft climbing"}),r("climbing","foamBlock","tunnel","foam-tunnel","Foam crawl tunnel",155,112,["sage","peach","lavender"],{tags:"soft play climbing"}),r("fireplace","fireplace","mantel","fireplace-mantel","Fireplace mantel",180,64,["oak","walnut","white"],{atlas:"fireplace",tags:"hearth fireplace shelf"}),r("fireplace","fireplace","photoTiledMantel","white-tile-mantel","White mantel with dark tile hearth",180,95,["white"],{tags:"photo 1977 living room fireplace stone tile surround"}),r("fireplace","fireplace","hearth","fireplace-hearth","Stone fireplace hearth",169,87,["cream","charcoal","terracotta"],{tags:"fireplace insert"}),r("fireplace","fireplace","screen","fireplace-screen","Fireplace screen",172,31,["charcoal","brass"],{tags:"fireplace guard"}),r("fireplace","shelf","floating","floating-shelf","Floating mantel shelf",162,40,["oak","walnut","white","charcoal"],{tags:"fireplace wall shelf"}),r("fireplace","shelf","corner","corner-shelf","Corner display shelf",108,108,["oak","white"],{tags:"fireplace shelves"}),r("fireplace","shelf","anchored","anchored-bookcase","Anchored book display shelf",87,152,["oak","white"],{tags:"anchored shelves bookcase"}),r("fireplace","shelf","photoToyShelf","toy-side-shelf","Fireplace side toy shelf",85,130,["oak"],{tags:"photo 1977 living room toy display shelving"}),r("balcony","planterSet","rail","rail-planters","Balcony rail planter set",179,53,["forest","terracotta","white","charcoal"],{atlas:"balconyPlants",tags:"balcony flowers plant set"}),r("balcony","planterSet","cluster","pot-cluster","Balcony pot cluster",137,100,["terracotta","cream","sage","charcoal"],{tags:"balcony plant set"}),r("balcony","planterSet","herbs","herb-trio","Balcony herb trio",133,60,["sage","terracotta","white"],{tags:"balcony plant set herbs"}),r("balcony","planterSet","hanging","hanging-plants","Hanging basket pair",113,77,["forest","terracotta","cream"],{tags:"balcony plant set"}),r("balcony","planterSet","vertical","vertical-garden","Vertical balcony garden",83,160,["forest","sage","walnut"],{tags:"balcony plant set"}),r("balcony","planterSet","tall","tall-planters","Tall balcony planter set",138,119,["forest","terracotta","charcoal"],{tags:"balcony plant set"}),r("fans","ceilingFan","three","three-blade-fan","Three-blade ceiling fan",150,150,["oak","white","charcoal"],{atlas:"ceilingFan",tags:"ceiling fan"}),r("fans","ceilingFan","four","four-blade-fan","Four-blade ceiling fan",155,155,["white","walnut","brass"],{tags:"ceiling fan"}),r("fans","ceilingFan","five","five-blade-fan","Five-blade ceiling fan",160,160,["oak","white","charcoal"],{tags:"ceiling fan"}),r("fans","ceilingFan","light","fan-light","Ceiling fan with light",158,158,["white","brass"],{tags:"ceiling fan light"}),r("fans","ceilingFan","palm","palm-fan","Palm-leaf ceiling fan",168,168,["forest"],{tags:"ceiling fan"}),r("cleaning","robotVacuum","round","round-robot-vac","Round robot vacuum",58,58,["white","charcoal","sage","brass"],{atlas:"robotVacuum",tags:"robot vacuum cleaner cute compact"}),r("cleaning","robotVacuum","docked","docked-robot-vac","Robot vacuum with dock",76,58,["white","charcoal"],{tags:"robot vacuum cleaner charging compact"}),r("cleaning","robotVacuum","mop","robot-mop","Robot vacuum mop",60,60,["white","charcoal"],{tags:"robot vacuum cleaner cute compact"}),r("cleaning","robotVacuum","slim","slim-robot-vac","Slim robot vacuum",66,50,["white","charcoal"],{tags:"robot vacuum cleaner compact"}),r("toy-storage","storage","basket","toy-basket","Woven toy basket",85,76,["oak","cream","sage"],{tags:"baby toy storage"}),r("toy-storage","storage","bin","soft-toy-bin","Soft toy bin",84,74,["sage","peach","sky"],{tags:"baby toy storage"}),r("toy-storage","storage","cubby","low-cubby","Low toy cubby",136,67,["oak","white"],{tags:"baby toy storage shelf"}),r("play-furniture","playFurniture","softPouf","soft-pouf","Soft play pouf",79,79,["sage","peach","lavender"],{tags:"baby soft seat"}),r("play-furniture","playFurniture","photoBearChair","bear-floor-chair","Teddy bear toddler floor chair",86,85,["teddy"],{tags:"photo 1977 living room baby bear armchair"}),r("play-furniture","playFurniture","photoBolster","gray-bolster","Long gray floor bolster",126,43,["slate"],{tags:"photo 1977 living room baby soft support pillow"}),r("play-furniture","playFurniture","lowTable","low-play-table","Low play table",127,79,["oak","white"],{tags:"baby play furniture"}),r("play-furniture","playFurniture","lowShelf","low-play-shelf","Low play shelf",129,52,["oak","white"],{tags:"baby play furniture"}),r("pets","habitat","aquarium","fish-aquarium","Fish aquarium",122,66,["oak"],{tags:"fish tank pet habitat swimming bubbles animated freshwater planted glass"}),r("pets","habitat","terrarium","lizard-terrarium","Lizard terrarium",116,72,["walnut"],{tags:"lizard tank pet habitat gecko vivarium desert sand glass animated"});let o="detailed realistic crafted miniature dollhouse warm original material-rich",a=(l,u,f,h,d,p)=>({collectionId:"crafted-miniature-v1",seriesId:l,designId:u,designLabel:f,sizeId:h,sizeLabel:d,material:p});r("living","cuteFurniture","cloudSofa","cloud-sofa","Tailored sectional sofa",175,120,["blush","mint"],{...a("sofa","sectional","Sectional","three-seat","3 seat","upholstery"),tags:`${o} sofa couch sectional stitched piping`}),r("living","cuteFurniture","tailoredSofa","tailored-sofa","Tailored three-seat sofa",170,88,["sage","cream","charcoal"],{...a("sofa","tailored","Tailored sofa","three-seat","3 seat","upholstery"),tags:`${o} sofa couch three seat stitched upholstery`}),r("living","cuteFurniture","tailoredLoveseat","tailored-loveseat","Tailored loveseat",126,86,["blush","sage"],{...a("sofa","tailored","Tailored sofa","loveseat","Loveseat","upholstery"),tags:`${o} sofa couch loveseat two seat stitched upholstery`}),r("living","cuteFurniture","chaiseSofa","upholstered-chaise","Upholstered chaise",88,148,["cream","lavender"],{...a("sofa","chaise","Chaise lounge","chaise","Chaise","upholstery"),tags:`${o} sofa chaise lounge stitched upholstery`}),r("living","cuteFurniture","petalDining","petal-dining-set","Oval four-seat dining set",168,112,["oak","cream"],{...a("dining","oval","Oval dining","four-seat","4 seat","wood"),legacy:!0,tags:`${o} dining table four chairs upholstered beveled wood`}),r("living","cuteFurniture","roundDining","round-dining-set","Round four-seat dining set",142,142,["oak","walnut"],{...a("dining","round","Round dining","four-seat","4 seat","wood"),legacy:!0,tags:`${o} dining table four chairs round pedestal wood`}),r("living","cuteFurniture","rectDining","rectangular-dining-set","Rectangular six-seat dining set",205,122,["oak","white"],{...a("dining","rectangular","Rectangular dining","six-seat","6 seat","wood"),legacy:!0,tags:`${o} dining table six chairs rectangular wood`}),r("living","cuteFurniture","petalDiningTable","petal-dining-table","Petal dining table",132.72,62.72,["oak","cream"],{...a("dining-table","oval","Rounded dining table","four-seat","4 seats fit","wood"),tags:`${o} dining table beveled wood tabletop`}),r("living","cuteFurniture","roundDiningTable","round-dining-table","Round pedestal dining table",82.36,82.36,["oak","walnut"],{...a("dining-table","round","Round pedestal","four-seat","4 seats fit","wood"),tags:`${o} dining table round pedestal wood tabletop`}),r("living","cuteFurniture","rectDiningTable","rectangular-dining-table","Rectangular dining table",161.95,68.32,["oak","white"],{...a("dining-table","rectangular","Rectangular dining table","six-seat","6 seats fit","wood"),tags:`${o} dining table rectangular wood tabletop`}),r("living","cuteFurniture","diningChair","dining-chair","Upholstered dining chair",34,26,["sage","blush","lavender","butter"],{...a("dining-chair","upholstered","Upholstered chair","standard","Standard","upholstery"),tags:`${o} dining chair seat upholstered wood`}),r("living","cuteFurniture","acornChair","acorn-armchair","Piped reading armchair",88,88,["teddy","sage","blush"],{...a("armchair","piped","Piped armchair","standard","Standard","upholstery"),tags:`${o} armchair reading seat upholstered piping`}),r("living","cuteFurniture","lilyCoffee","lily-coffee-table","Beveled oval coffee table",110,70,["oak","white"],{...a("coffee-table","oval","Oval top","standard","Standard","wood"),tags:`${o} coffee table beveled wood joinery`}),r("living","cuteFurniture","bubbleSide","bubble-side-table","Stone-top side table",58,58,["mint","butter"],{...a("side-table","stone","Stone top","standard","Standard","stone"),tags:`${o} round side table stone pedestal`}),r("bedroom","cuteFurniture","moonBed","moon-bed","Moon-quilt queen bed",210,185,["lavender","sky","cream"],{...a("bed","moon-quilt","Moon quilt","queen","Queen","upholstery"),tags:`${o} bedroom bed queen quilted upholstered moon embroidery`}),r("bedroom","cuteFurniture","cribBed","crafted-crib","Slatted crib",92,142,["cream","sage"],{...a("bed","crib","Slatted crib","crib","Crib","wood"),tags:`${o} bedroom baby crib slatted fitted mattress`}),r("bedroom","cuteFurniture","toddlerBed","crafted-toddler-bed","Low toddler bed",105,158,["sky","blush"],{...a("bed","toddler","Low toddler","toddler","Toddler","upholstery"),tags:`${o} bedroom toddler bed low guard rail`}),r("bedroom","cuteFurniture","platformBed","platform-bed-twin","Low platform twin bed",120,196,["oak","walnut","white"],{...a("bed","platform","Low platform","twin","Twin","wood"),tags:`${o} bedroom bed twin low platform wood`}),r("bedroom","cuteFurniture","platformBed","platform-bed-full","Low platform full bed",158,198,["oak","walnut","white"],{...a("bed","platform","Low platform","full","Full","wood"),tags:`${o} bedroom bed full double low platform wood`}),r("bedroom","cuteFurniture","platformBed","platform-bed-queen","Low platform queen bed",188,205,["oak","walnut","white"],{...a("bed","platform","Low platform","queen","Queen","wood"),tags:`${o} bedroom bed queen low platform wood`}),r("bedroom","cuteFurniture","platformBed","platform-bed-king","Low platform king bed",226,205,["oak","walnut","white"],{...a("bed","platform","Low platform","king","King","wood"),tags:`${o} bedroom bed king low platform wood`}),r("bedroom","cuteFurniture","upholsteredBed","upholstered-bed-full","Arched upholstered full bed",158,198,["blush","lavender","cream"],{...a("bed","upholstered","Arched upholstered","full","Full","upholstery"),tags:`${o} bedroom bed full double arched headboard tufted`}),r("bedroom","cuteFurniture","upholsteredBed","upholstered-bed-queen","Arched upholstered queen bed",188,205,["blush","lavender","cream"],{...a("bed","upholstered","Arched upholstered","queen","Queen","upholstery"),tags:`${o} bedroom bed queen arched headboard tufted`}),r("bedroom","cuteFurniture","upholsteredBed","upholstered-bed-king","Arched upholstered king bed",226,205,["blush","lavender","cream"],{...a("bed","upholstered","Arched upholstered","king","King","upholstery"),tags:`${o} bedroom bed king arched headboard tufted`}),r("bedroom","cuteFurniture","storageBed","storage-bed-full","Drawer storage full bed",158,198,["oak","walnut"],{...a("bed","storage","Drawer storage","full","Full","wood"),tags:`${o} bedroom bed full double storage drawers wood`}),r("bedroom","cuteFurniture","storageBed","storage-bed-queen","Drawer storage queen bed",188,205,["oak","walnut"],{...a("bed","storage","Drawer storage","queen","Queen","wood"),tags:`${o} bedroom bed queen storage drawers wood`}),r("bedroom","cuteFurniture","storageBed","storage-bed-king","Drawer storage king bed",226,205,["oak","walnut"],{...a("bed","storage","Drawer storage","king","King","wood"),tags:`${o} bedroom bed king storage drawers wood`}),r("bedroom","cuteFurniture","canopyBed","canopy-bed-queen","Four-poster canopy queen bed",188,205,["white","brass"],{...a("bed","canopy","Four-poster canopy","queen","Queen","wood metal"),tags:`${o} bedroom bed queen four poster canopy`}),r("bedroom","cuteFurniture","canopyBed","canopy-bed-king","Four-poster canopy king bed",226,205,["white","brass"],{...a("bed","canopy","Four-poster canopy","king","King","wood metal"),tags:`${o} bedroom bed king four poster canopy`}),r("bedroom","cuteFurniture","daybed","upholstered-daybed","Upholstered twin daybed",196,105,["sage","cream"],{...a("bed","daybed","Upholstered daybed","twin","Twin","upholstery"),tags:`${o} bedroom bed twin daybed sofa bolsters`}),r("bedroom","cuteFurniture","bunkBed","slatted-bunk-bed","Slatted twin bunk bed",120,196,["oak","white"],{...a("bed","bunk","Slatted bunk","twin","Twin bunk","wood"),tags:`${o} bedroom bed twin bunk ladder rails`}),r("bedroom","cuteFurniture","sproutDesk","sprout-desk","Crafted writing desk",180,84,["sage","oak"],{...a("desk","writing","Writing desk","compact","Compact","wood"),tags:`${o} office study desk writing wood drawers`}),r("bedroom","cuteFurniture","cornerDesk","corner-desk","Corner workstation",190,146,["sage","oak"],{...a("desk","corner","Corner workstation","large","Large","wood"),tags:`${o} office study desk corner return drawers`}),r("bedroom","cuteFurniture","secretaryDesk","secretary-desk","Secretary writing desk",110,78,["oak","walnut"],{...a("desk","secretary","Secretary desk","compact","Compact","wood"),tags:`${o} office study desk secretary cubbies wood`}),r("bedroom","cuteFurniture","starNightstand","star-nightstand","Brass-knob nightstand",58,56,["butter","lavender"],{...a("nightstand","two-drawer","Two drawer","standard","Standard","wood"),tags:`${o} bedside table brass knob drawer`}),r("bedroom","cuteFurniture","honeyDresser","honey-dresser","Six-drawer dresser",125,60,["oak","peach"],{...a("dresser","six-drawer","Six drawer","wide","Wide","wood"),tags:`${o} bedroom storage dresser drawers joinery`}),r("bedroom","cuteFurniture","storyBookcase","story-bookcase","Framed bookcase",64,156,["oak","mint"],{...a("bookcase","framed","Framed bookcase","tall","Tall","wood"),tags:`${o} book shelf storage joinery`}),r("lighting","cuteLight","budLamp","bud-table-lamp","Pleated ceramic table lamp",48,52,["mint","blush","butter"],{...a("table-light","pleated-ceramic","Pleated ceramic","table","Table","ceramic brass fabric"),tags:`${o} lamp desk bedside pleated shade ceramic`,visualKind:"light",lightForm:"bud_lamp"}),r("lighting","cuteLight","cloudFloorLamp","cloud-floor-lamp","Linen globe floor lamp",58,94,["cream","sky"],{...a("floor-light","linen-globe","Linen globe","floor","Floor","brass linen"),tags:`${o} standing floor lamp linen globe`,visualKind:"light",lightForm:"cloud_floor_lamp"}),r("lighting","cuteLight","bloomCeiling","bloom-ceiling-light","Faceted glass ceiling light",60,60,["white","butter","mint"],{...a("ceiling-light","faceted-flush","Faceted flush mount","ceiling","Ceiling","glass brass"),tags:`${o} ceiling lamp faceted frosted glass flush mount`,visualKind:"light",lightForm:"bloom_ceiling",renderLayer:"ceiling-devices"}),r("lighting","cuteLight","starPendant","star-pendant","Faceted glass pendant",72,72,["lavender","butter"],{...a("pendant-light","faceted-glass","Faceted glass","ceiling","Ceiling","glass brass"),tags:`${o} ceiling pendant faceted glass`,visualKind:"light",lightForm:"star_pendant",renderLayer:"ceiling-devices"}),r("lighting","cuteLight","acornSconce","acorn-wall-sconce","Fluted brass wall sconce",38,50,["oak","cream"],{...a("wall-light","fluted-brass","Fluted brass","wall","Wall","brass glass"),tags:`${o} wall light fluted brass glass`,visualKind:"light",lightForm:"acorn_sconce",mount:"wall"});let c=Object.fromEntries(e.map(l=>[l.type,l]));(typeof window>"u"?globalThis:window).RoomcraftInventory={groups:n,templates:e,byType:c}})();(n=>{"use strict";let t=[{type:"sofa",label:"L sofa",icon:"\u{1F6CB}",w:165,h:238,group:"living"},{type:"table",label:"Legacy dining set",icon:"\u25B0",w:165,h:108,group:"living",legacy:!0},{type:"diningTable",label:"Dining table",icon:"\u25B0",w:136,h:62,group:"living"},{type:"diningChair",label:"Dining chair",icon:"\u25D2",w:34,h:26,group:"living"},{type:"chair",label:"Chair",icon:"\u25D2",w:48,h:48,group:"living"},{type:"armchair",label:"Armchair",icon:"\u25A3",w:86,h:88,group:"living"},{type:"coffeeTable",label:"Coffee table",icon:"\u2B2D",w:105,h:66,group:"living"},{type:"sideTable",label:"Side table",icon:"\u25C9",w:55,h:55,group:"living"},{type:"tv",label:"TV",icon:"\u25AE",w:28,h:130,group:"living"},{type:"rug",label:"Rug",icon:"\u25A7",w:150,h:110,group:"living"},{type:"bed",label:"Bed",icon:"\u25A4",w:210,h:185,group:"bedroom"},{type:"desk",label:"Desk",icon:"\u25A3",w:180,h:78,group:"bedroom"},{type:"dresser",label:"Dresser",icon:"\u25A5",w:122,h:58,group:"bedroom"},{type:"nightstand",label:"Nightstand",icon:"\u25A3",w:56,h:54,group:"bedroom"},{type:"bookcase",label:"Bookcase",icon:"\u25A4",w:58,h:156,group:"bedroom"},{type:"bedroomBench",label:"Bedroom bench",icon:"\u25B0",w:52,h:122,group:"bedroom"},{type:"storageCabinet",label:"Storage cabinet",icon:"\u25A5",w:75,h:92,group:"bedroom"},{type:"counter",label:"Counter",icon:"\u25A5",w:62,h:190,group:"utility"},{type:"stool",label:"Bar stool",icon:"\u25C9",w:42,h:42,group:"utility"},{type:"kitchenWorktop",label:"Kitchen appliance worktop",icon:"\u25A6",w:106,h:127,group:"utility"},{type:"bathFixtures",label:"Bathroom fixture group",icon:"\u25EB",w:73,h:117,group:"utility"},{type:"doubleVanity",label:"Double-sink vanity",icon:"\u25A5",w:202,h:44,group:"utility"},{type:"wallUnit",label:"Wall-mounted unit",icon:"\u25B0",w:139,h:43,group:"systems",mount:"wall"},{type:"tub",label:"Bathtub",icon:"\u25A2",w:65,h:128,group:"utility"},{type:"toilet",label:"Toilet",icon:"\u25CD",w:46,h:60,group:"utility"},{type:"lamp",label:"Bedside lamp",icon:"\u263C",w:40,h:40,group:"lighting"},{type:"ceilingLight",label:"Ceiling light",icon:"\u2600",w:58,h:58,group:"lighting"},{type:"pendantLight",label:"Pendant light",icon:"\u273A",w:70,h:70,group:"lighting"},{type:"floorLamp",label:"Floor lamp",icon:"\u25C9",w:54,h:92,group:"lighting"},{type:"tableLamp",label:"Table lamp",icon:"\u25CC",w:48,h:52,group:"lighting"},{type:"wallSconce",label:"Wall sconce",icon:"\u25D6",w:34,h:48,group:"lighting",mount:"wall"},{type:"thermostat",label:"Wall thermostat / AC",icon:"\u25F4",w:48,h:54,group:"systems",mount:"wall",visualKind:"climate"},{type:"presenceSwitch",label:"Presence dimmer switch",icon:"\u283F",w:30,h:42,group:"systems",mount:"wall",visualKind:"device"},{type:"humidifier",label:"Floor humidifier",icon:"\u2668",w:46,h:58,group:"systems",visualKind:"device"},{type:"airPurifier",label:"Air purifier",icon:"\u224B",w:48,h:62,group:"systems",visualKind:"device"},{type:"windowFan",label:"Window fan",icon:"\u2723",w:46,h:46,group:"systems",visualKind:"fan"},{type:"garageDoor",label:"Garage door control",icon:"\u25A5",w:116,h:52,group:"systems",visualKind:"door"},{type:"cameraThumbnail",label:"Camera thumbnail",icon:"\u25A3",w:170,h:110,group:"security"},{type:"controlZone",label:"Invisible button area",icon:"\u25A7",w:120,h:72,group:"security"},{type:"uiWeatherOrb",label:"Sun / moon",icon:"\u2600",w:64,h:64,group:"interface"},{type:"uiMenu",label:"Device menu",icon:"\u2630",w:48,h:48,group:"interface"},{type:"uiTime",label:"Clock",icon:"\u25F7",w:84,h:42,group:"interface"},{type:"uiEdit",label:"Edit layout button",icon:"\u270E",w:48,h:48,group:"interface"},{type:"uiStatusAir",label:"Indoor air status",icon:"\u25CC",w:48,h:48,group:"interface"},{type:"uiStatusElectrical",label:"Electrical status",icon:"\u03DF",w:48,h:48,group:"interface"},{type:"plant",label:"Flowers",icon:"\u273F",w:44,h:44,group:"decor"},{type:"floorPlant",label:"Floor plant",icon:"\u2740",w:72,h:72,group:"decor"},{type:"artwork",label:"Wall art",icon:"\u25A7",w:94,h:56,group:"decor",mount:"wall"},{type:"mirror",label:"Mirror",icon:"\u25C7",w:72,h:52,group:"decor",mount:"wall"},{type:"window",label:"Window",icon:"\u25A3",w:100,h:28,group:"build"},{type:"stairs",label:"Exterior stairs",icon:"\u25A4",w:88,h:430,group:"build"}],e=[["living","Living & dining"],["bedroom","Bedroom & storage"],["utility","Kitchen & bath"],["lighting","Lights & lamps"],["systems","Climate, doors & fans"],["decor","Decor"],["build","Build"],["security","Cameras & controls"],["interface","Dashboard interface"]],i="roomcraft.studio-models.v1",s=new Set(["window","stairs","cameraThumbnail","garageDoor","presenceSwitch"]),r=U=>typeof U=="string"&&U.startsWith("ui"),o=U=>String(U??"").toLowerCase(),a=U=>o(U).split(".")[0],c=U=>typeof U=="string"&&/^[a-z_]+\.[a-z0-9_]+$/.test(U),l=U=>U.type==="window"?"wall":U.mount||"floor",u=U=>U?.type==="diningTable"||/^living-(?:petal|round|rectangular)-dining-table-/.test(U?.type),f=U=>U?.type==="diningChair"||/^living-dining-chair-/.test(U?.type),h=U=>f(U)||["chair","armchair","stool"].includes(U?.type)||/-(?:desk-chair|acorn-armchair|floor-chair)-/.test(U?.type),d=U=>Number(U.toFixed(6)),p=U=>(U%360+360)%360;function y(U){let it=U.type==="table",K=/^living-(petal|round|rectangular)-dining-set-/.exec(U.type);if(!it&&!K)return;let at=K?.[1],tt=it?"diningTable":U.type.replace("-dining-set-","-dining-table-"),St=Bt=>it?"diningChair":`living-dining-chair-${Bt}`,{w:Tt,h:Rt}=U;if(it||at==="round"){let[Bt,z,A,dt,ct]=it?[.39,.415,.2,.23,.27]:[.37,.38,.2,.2,.2];return{tableType:tt,w:(it?.79:.58)*Tt,h:(it?.57:.58)*Rt,tableHeight:it?46.4:41,chairs:[[0,-Rt*Bt,Tt*A,Rt*dt,0,St("sage")],[Tt*z,0,Rt*ct,Tt*(it?.17:A),90,St("butter")],[0,Rt*Bt,Tt*A,Rt*dt,180,St("blush")],[-Tt*z,0,Rt*ct,Tt*(it?.17:A),270,St("lavender")]]}}let Lt=at==="rectangular",q=Lt?[-.32,0,.32]:[-.28,.28],Gt=[["sage","blush","lavender"],["lavender","butter","sage"]];return{tableType:tt,w:.79*Tt,h:.56*Rt,tableHeight:42.3,chairs:[-1,1].flatMap((Bt,z)=>q.map((A,dt)=>[Tt*A,Rt*.37*Bt,Tt*(Lt?.15:.19),Rt*.23,z*180,St(Gt[z][dt])]))}}function m(U){if(!Array.isArray(U?.items))return U;let it=new Set(U.items.map(St=>St.id)),K=U.items.filter(h),at=!1,tt=U.items.flatMap(St=>{let Tt=y(St);if(!Tt||![St.x,St.y,St.w,St.h,St.rotation].every(Number.isFinite)||St.w<=0||St.h<=0)return[St];at=!0;let Rt=St.rotation*Math.PI/180,Lt=Math.cos(Rt),q=Math.sin(Rt),Gt=Number.isFinite(St.modelHeight)?St.modelHeight:void 0,Bt={...St,type:Tt.tableType,w:d(Tt.w),h:d(Tt.h),...Gt===void 0?{}:{modelHeight:Math.max(6,d(Gt*Tt.tableHeight/59))}};return[...Tt.chairs.flatMap(([A,dt,ct,lt,O,w],E)=>{let C=d(St.x+A*Lt-dt*q),D=d(St.y+A*q+dt*Lt),k=Math.max(8,Math.min(ct,lt)*.52);if(K.some(At=>Math.hypot(At.x-C,At.y-D)<=k))return[];let et=`${St.id}-chair-${E+1}`,Z=et,gt=2;for(;it.has(Z);)Z=`${et}-${gt++}`;it.add(Z);let ut={id:Z,type:w,name:`Dining chair ${E+1}`,x:C,y:D,w:d(ct),h:d(lt),rotation:p(St.rotation+O),entityId:"",...Gt===void 0?{}:{modelHeight:Gt},...Number.isFinite(St.zIndex)?{zIndex:St.zIndex}:{}};return K.push(ut),[ut]}),Bt]});return at?{...U,items:tt}:U}function g(){return{templates:[...t,...n.RoomcraftInventory?.templates||[]],paletteGroups:[...n.RoomcraftInventory?.groups||[],...e]}}function x(U,it,K){return!(!U||!it||!K||U.type===K.type||K.legacy||s.has(U.type)||r(U.type)||s.has(K.type)||r(K.type)||l(it)!==l(K)||U.entityId&&!v(U.entityId,K))}function v(U,it){return!c(U)||typeof it?.type!="string"||it.legacy||r(it.type)||it.type==="stairs"?!1:it.type==="cameraThumbnail"?a(U)==="camera":it.type==="garageDoor"||it.type==="window"?["cover","binary_sensor","switch"].includes(a(U)):a(U)!=="camera"}function _(U,it,K){if(!U||U.entityId||!v(it,K))return!1;let at=U.type==="cameraThumbnail"?40:12,{x:tt,y:St,w:Tt,h:Rt}=U;return tt>=0&&tt<=1536&&St>=0&&St<=1024&&Tt>=at&&Tt<=1536&&Rt>=at&&Rt<=1024}function b(U,it){let K=a(U.entity_id),at=o(U.name+" "+U.entity_id),tt=at.replaceAll("_"," "),St={light:["lighting"],fan:["fans"],vacuum:["cleaning"],climate:["systems"]},Tt=Lt=>{if(Lt.type==="controlZone")return!0;if(K==="camera")return Lt.type==="cameraThumbnail";if(K==="cover")return Lt.type===(/garage/.test(at)?"garageDoor":"window");if(K==="climate")return Lt.type==="thermostat";if(K==="media_player"&&/\btv\b|television/.test(tt))return Lt.type==="tv";if(K==="binary_sensor"){if(/presence|occupancy/.test(at))return Lt.type==="presenceSwitch";if(/garage/.test(at))return Lt.type==="garageDoor";if(/window|blind|shade/.test(at))return Lt.type==="window"}if(St[K]?.includes(Lt.group)||/humidifier/.test(at)&&Lt.type==="humidifier"||/purifier/.test(at)&&Lt.type==="airPurifier")return!0;if(K==="switch"){if(/light|lamp/.test(at))return Lt.group==="lighting";if(/fan/.test(at))return Lt.group==="fans"||Lt.type==="windowFan"}return!1},Rt=it.filter(Lt=>v(U.entity_id,Lt));return{recommended:Rt.filter(Tt),available:Rt}}function M(U){let it=new Map;for(let K of U){let at=[[K.entityId,"primary"],[K.tapEntityId,"Tap target"],[K.holdEntityId,"Hold target"],[K.presenceEntityId,"Presence sensor"],[K.presenceTrackEntityId,"Radar targets"],[K.vacuumMapEntityId,"Map camera"],[K.imageEntityId,"Event image"],...Array.isArray(K.eventEntityIds)?K.eventEntityIds.map(tt=>[tt,"Camera event"]):[]];for(let[tt,St]of at)c(tt)&&(it.has(tt)||it.set(tt,[]),it.get(tt).push({item:K,role:St}))}return it}function T(U){return U&&!["window","stairs","controlZone","cameraThumbnail","mirror","artwork"].includes(U.type)&&!r(U.type)}function S(U,it,K,at){if(!["w","h"].includes(it)||!Number.isFinite(K))return null;let tt=U.type==="cameraThumbnail"?40:12,St=U.type==="cameraThumbnail"||c(U.entityId)?{w:1536,h:1024}:{w:1/0,h:1/0};if(!at)return{[it]:Math.min(St[it],Math.max(tt,K))};let Tt=Math.min(St.w/U.w,St.h/U.h),Rt=Math.min(Tt,Math.max(tt/U.w,tt/U.h)),Lt=Math.min(Tt,Math.max(Rt,K/U[it]));return{w:Math.round(U.w*Lt*10)/10,h:Math.round(U.h*Lt*10)/10}}function R(U,it,K,at){if(![it,K,U?.w,U?.h].every(Number.isFinite)||U.w<=0||U.h<=0)return null;if(!at)return{...S(U,"w",it,!1),...S(U,"h",K,!1)};let tt=(it*U.w+K*U.h)/(U.w**2+U.h**2);return S(U,"w",tt*U.w,!0)}let P=new Set(["table","desk","dresser","nightstand","storageCabinet","coffeeTable","sideTable","counter","kitchenWorktop"]),I=new Set(["lamp","tableLamp","humidifier","plant"]),F=new Set(["sofa","bed","armchair","bookcase","bedroomBench","counter","kitchenWorktop","bathFixtures","doubleVanity","tub","toilet","floorPlant"]),H=/^(?:living-(?:petal-dining|round-dining|rectangular-dining|lily-coffee-table|bubble-side-table)|bedroom-(?:sprout-desk|corner-desk|secretary-desk|star-nightstand|honey-dresser)|play-furniture-low-play-table)-/,B=/^(?:bedroom-|living-(?:cloud-sofa|tailored-sofa|tailored-loveseat|upholstered-chaise|acorn-armchair)-|play-furniture-bear-floor-chair-)/,Y=[[0,0],[1,0],[-1,0],[0,1],[0,-1],[.707,.707],[.707,-.707],[-.707,.707],[-.707,-.707]];function G(U,it,K){if(U==="playpen"||U==="photoPlayYard"){let q=Math.min(it,K)*.055;return[[0,-(K-q)/2,it-q,q,0],[0,(K-q)/2,it-q,q,0],[-(it-q)/2,0,K-q,q,Math.PI/2],[(it-q)/2,0,K-q,q,Math.PI/2]]}let at=U==="folding",tt=at?4:3,St=Math.min(at?39:29,it*.28),Tt=it/tt,Rt=Math.min(K*(at?.5:.73),St*.6),Lt=at?Math.min(.18,Rt/Tt*.85):0;return Array.from({length:tt},(q,Gt)=>[-it/2+Tt*(Gt+.5),0,Tt,Rt,Gt%2?-Lt:Lt])}function V(U){let{w:it,h:K}=U,at=n.RoomcraftInventory?.byType?.[U.type];if(at?.artFamily==="foamBlock"){let Tt=Math.min(1.4,Math.min(it,K)*.021);if(["arch","tunnel","wedge","ramp"].includes(at.form)){let Rt=K*(at.form==="tunnel"?.83:.73);return[[0,0,it*.91+2*Tt,Rt+2.08*Tt]]}return[[0,0,it*(at.form==="steps"?.99:.96),K*.96]]}if(at?.form==="softPouf")return[[0,0,it*.97,K*.97]];if(at?.form==="photoBolster")return[[0,0,it*.96,K*.94]];if(at?.artFamily!=="paddedPanel")return null;let tt=at.form;if(tt==="photoBearPanel")return[[0,0,it,K*.49]];if(tt==="gate"||tt==="guard"){let Tt=Math.min(K*.55,Math.min(37,it*.32)*.28);return[[0,0,it*.99,Tt],[-it*.46,0,it*.08,K*.73],[it*.46,0,it*.08,K*.73]]}let St=tt==="playpen"||tt==="photoPlayYard";return G(tt,it,K).map(([Tt,Rt,Lt,q,Gt])=>[Tt,Rt,Lt*(St?1:.955),q*(St?.5:1.28),Gt])}function ft(U){let it=U?.type??"";return u(U)||P.has(it)||H.test(it)?"surface":I.has(it)||U?.lightForm==="bud_lamp"||it.startsWith("lighting-bud-table-lamp-")?"tabletop":"floor"}function J(U){let it=U.type==="humidifier"?.37:U.type==="plant"?.23:.2;return Math.min(U.w,U.h)*it}function W(U){return U.type==="kitchenWorktop"?{widthRatio:.84,depthRatio:.72,offsetRatio:0}:U.type==="counter"&&U.id==="i7"?{widthRatio:.58,depthRatio:.28,offsetRatio:-.04}:null}function st(U){let{w:it,h:K}=U,at=W(U);if(!at)return[[0,0,it*.95,K*.95]];let tt=it*.475,St=K*.475,Tt=it*at.widthRatio/2,Rt=K*at.offsetRatio,Lt=U.type==="counter"?Math.min(2.6,Tt*.2)/2:.8,q=Tt+Lt,Gt=K*at.depthRatio/2+Lt,Bt=Math.max(-St,Rt-Gt),z=Math.min(St,Rt+Gt);return[[-(tt+q)/2,0,tt-q,St*2],[(tt+q)/2,0,tt-q,St*2],[0,(Bt-St)/2,q*2,Bt+St],[0,(z+St)/2,q*2,St-z]].filter(([,,A,dt])=>A>0&&dt>0)}function bt(U,it=!1){let{type:K,w:at,h:tt}=U;if(u(U))return[[0,0,at,tt]];if(K==="desk"||K.startsWith("bedroom-corner-desk-"))return[[0,-.33*tt,at,.34*tt],[-.41*at,.17*tt,.18*at,.66*tt],[.41*at,.17*tt,.18*at,.66*tt]];if(!it&&(K==="sofa"||K.startsWith("living-cloud-sofa-")))return tt>at?[[-.25*at,0,.5*at,tt],[.22*at,(K==="sofa"?.3:-.3)*tt,.52*at,.38*tt]]:[[0,-.215*tt,at,.57*tt],[-.32*at,.25*tt,.34*at,.46*tt]];if(it){if(K==="counter"||K==="kitchenWorktop")return st(U);if(K.startsWith("living-round-dining-"))return[[0,0,.58*at,.58*tt]];if(K==="table"||/-dining-set-/.test(K))return[[0,0,.79*at,.56*tt]];if(K.includes("-desk-"))return[[0,0,at,.85*tt]]}if(!it&&ft(U)==="tabletop"){let St=2*J(U);return[[0,0,St,St]]}return[[0,0,at*.95,tt*.95]]}function Mt(U,it,K){if(![U?.x,U?.y,U?.w,U?.h].every(Number.isFinite)||U.w<=0||U.h<=0)return[];let at=(Number.isFinite(U.rotation)?U.rotation:0)*Math.PI/180,tt=Math.cos(at),St=Math.sin(at);return(K??bt(U,it)).map(([Tt,Rt,Lt,q,Gt=0])=>{let Bt=[Math.cos(at+Gt),Math.sin(at+Gt)];return{x:U.x+Tt*tt-Rt*St,y:U.y+Tt*St+Rt*tt,u:Bt,v:[-Bt[1],Bt[0]],width:Lt/2,height:q/2}})}let vt=(U,it,K)=>U*K[0]+it*K[1];function xt(U,it){let K=it.type.startsWith("living-round-dining-"),at=Mt(it,!0),tt=J(U)*.9;return Y.every(([St,Tt])=>at.some(Rt=>{let Lt=U.x+St*tt-Rt.x,q=U.y+Tt*tt-Rt.y,Gt=Math.abs(vt(Lt,q,Rt.u))/Rt.width,Bt=Math.abs(vt(Lt,q,Rt.v))/Rt.height;return K?Math.hypot(Gt,Bt)<=1:Gt<=1&&Bt<=1}))}function yt(U){let it=V(U);return it?Mt(U,!1,it):f(U)||ft(U)!=="floor"||F.has(U.type)||B.test(U.type)?Mt(U,!1):[]}function $(U){return ft(U)==="tabletop"||U.type==="rug"||U.type.startsWith("baby-mats-")?[]:["chair","stool","tv"].includes(U.type)||/(?:desk-chair|toy-storage|fireplace|floor-chair)/.test(U.type)||U.type.startsWith("pets-")?Mt(U,!1):yt(U)}function rt(U,it){let K=(at,tt)=>at.width*Math.abs(vt(...at.u,tt))+at.height*Math.abs(vt(...at.v,tt));return Math.min(...[U.u,U.v,it.u,it.v].map(at=>K(U,at)+K(it,at)-Math.abs(vt(U.x-it.x,U.y-it.y,at))))}function Et(U,it){let[K]=Mt(U,!1),[at]=Mt(it,!0);if(!K||!at||rt(K,at)<=0)return!1;let tt=[K.x-at.x,K.y-at.y],St=vt(...tt,at.u)/at.width,Tt=vt(...tt,at.v)/at.height,Rt=it.type.startsWith("living-round-dining-"),Lt;if(Rt){if(Math.hypot(St,Tt)<1)return!1;Lt=-vt(...tt,K.v)/Math.hypot(...tt)}else{let A=Math.abs(St)>=1,dt=Math.abs(Tt)>=1;if(A===dt)return!1;Lt=-Math.sign(A?St:Tt)*vt(...K.v,A?at.u:at.v)}if(Lt<.8)return!1;let q=it.type==="diningTable",Gt=q?46.4:Rt?41:42.3,Bt=(it.modelHeight??Gt)*(q?32:33)/Gt;return(U.modelHeight??59)*30/59<Bt}function Ut(U,it,K,at){let tt=0;for(let Rt of K)for(let Lt of at)tt=Math.max(tt,rt(Rt,Lt));if(tt<=2)return tt;let St=ft(U),Tt=ft(it);return St==="tabletop"&&Tt==="surface"&&xt(U,it)||St==="surface"&&Tt==="tabletop"&&xt(it,U)||f(U)&&u(it)&&Et(U,it)||u(U)&&f(it)&&Et(it,U)?0:tt}function It(U,it,K){let at=yt(U);if(!at.length)return;let tt=K?yt(K):[],St,Tt=2;for(let Rt of it){if(Rt.id===U.id)continue;let Lt=yt(Rt),q=Ut(U,Rt,at,Lt);q<=Tt||tt.length&&q<=Ut(K,Rt,tt,Lt)+.02||(St=Rt,Tt=q)}return St}function Pt(U){let it=U.filter(Tt=>ft(Tt)==="surface"),K=it.filter(u),at=new Set,tt=new Map,St=new Map;for(let Tt of U){let Rt=f(Tt);if(!Rt&&ft(Tt)!=="tabletop")continue;let Lt=Rt?K.find(Gt=>Et(Tt,Gt)):it.find(Gt=>xt(Tt,Gt));if(!Lt)continue;at.add(Tt.id);let q=Rt?St:tt;q.has(Lt.id)||q.set(Lt.id,[]),q.get(Lt.id).push(Tt)}return at.size?U.flatMap(Tt=>at.has(Tt.id)?[]:[...St.get(Tt.id)??[],Tt,...tt.get(Tt.id)??[]]):U}function $t(U,it,K){let at=U.ownerDocument,tt=(D,k,et={})=>{let Z=at.createElement(D);k&&(Z.textContent=k);for(let[gt,ut]of Object.entries(et))Z.setAttribute(gt,ut);return Z},St=tt("dialog","",{class:"model-library","aria-label":"Objects and models"}),Tt=tt("header"),Rt=tt("h2","Objects & models"),Lt=tt("button","Close",{type:"button"});Tt.append(Rt,Lt);let q=tt("div","",{class:"model-library-filters"}),Gt=tt("select","",{"aria-label":"Object library section"});for(let[D,k]of[["placed","On the plan"],["catalog","Add objects"],["devices","Home Assistant devices"]])Gt.append(tt("option",k,{value:D}));let Bt=tt("input","",{type:"search",placeholder:"Search\u2026","aria-label":"Search objects, devices, or models"});q.append(Gt,Bt);let z=tt("div","",{class:"model-library-context"}),A=tt("p","",{role:"status",class:"model-library-status"}),dt=tt("div","",{class:"model-library-list"});St.append(Tt,q,z,A,dt);let ct=tt("style");ct.textContent=`
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
    `,U.append(ct,St);let lt,O=!1,w=(D,k)=>{let et=tt("button",D,{type:"button"});return et.addEventListener("click",k),et};function E(D){lt=D,O=!1,Gt.value=D.existing?"placed":"catalog",Bt.value="",C(),Bt.focus()}function C(){let{templates:D,paletteGroups:k}=g(),et=new Map(D.map(nt=>[nt.type,nt])),Z=new Map(k),{items:gt,entities:ut}=it(),At=o(Bt.value).trim(),N=(...nt)=>At.split(/\s+/).every(_t=>o(nt.join(" ")).includes(_t)),ht=[];if(z.replaceChildren(),lt&&(z.append(tt("strong",lt.item?.name||lt.entity?.name||lt.entity?.entity_id)),lt.entity&&(z.append(w(lt.existing?"Choose a new model":"Bind existing object",()=>{E({entity:lt.entity,existing:!lt.existing})})),lt.existing||z.append(w(O?"Suggested models":"All compatible models",()=>{O=!O,C()}))),z.append(w("Cancel mapping",()=>{Gt.value=lt.entity?"devices":"placed",lt=void 0,Bt.value="",C()}))),Gt.value==="placed")for(let nt of gt){let _t=et.get(nt.type);if(!N(nt.name,_t?.label,nt.type,nt.entityId))continue;let Ct=[nt.w,nt.h,nt.modelHeight].filter(Number.isFinite).join(" \xD7 "),wt=[_t?.label||nt.type,Ct&&Ct+" plan px",nt.entityId].filter(Boolean).join(" \xB7 "),Dt;if(lt?.existing){if(!_(nt,lt.entity.entity_id,_t))continue;Dt=[w("Bind to this object",()=>K({kind:"bind",itemId:nt.id,entityId:lt.entity.entity_id}))]}else Dt=[w("Edit",()=>K({kind:"edit",itemId:nt.id}))],D.some(zt=>x(nt,_t,zt))&&Dt.push(w("Change model",()=>E({item:nt})));ht.push([nt.name||_t?.label||nt.type,wt,Dt])}else if(Gt.value==="devices"){let nt=M(gt);for(let _t of ut){if(!c(_t.entity_id)||!N(_t.name,_t.entity_id,_t.area))continue;let Ct=nt.get(_t.entity_id)||[],wt=Ct.find(jt=>jt.role==="primary"),Dt=Ct.map(({item:jt,role:fe})=>fe==="primary"?jt.name:fe+" for "+jt.name),zt=[_t.entity_id,_t.area,...Dt].filter(Boolean).join(" \xB7 "),oe=Ct.length?[w(wt?"Edit mapped object":"Edit linked object",()=>K({kind:"edit",itemId:(wt||Ct[0]).item.id}))]:[];D.some(jt=>v(_t.entity_id,jt))&&oe.push(w(wt?"Map again":"Map to object",()=>E({entity:_t,existing:gt.some(jt=>_(jt,_t.entity_id,et.get(jt.type)))}))),ht.push([_t.name||_t.entity_id,zt,oe])}}else{let nt=D.filter(_t=>!_t.legacy);if(lt?.item&&(nt=D.filter(_t=>x(lt.item,et.get(lt.item.type),_t))),lt?.entity){let _t=b(lt.entity,D);nt=O?_t.available:_t.recommended}for(let _t of nt){let Ct=Z.get(_t.group)||_t.group;if(!N(_t.label,_t.type,_t.tags,Ct))continue;let wt=lt?.item?{kind:"replace",itemId:lt.item.id,modelId:_t.type}:{kind:"place",modelId:_t.type,...lt?.entity?{entityId:lt.entity.entity_id}:{}};ht.push([_t.label,Ct+" \xB7 "+_t.w+" \xD7 "+_t.h+" plan px",[w(lt?"Use model":"Place",()=>K(wt))]])}}dt.replaceChildren();for(let[nt,_t,Ct]of ht.slice(0,48)){let wt=tt("div","",{class:"model-library-row"}),Dt=tt("div");Dt.append(tt("strong",nt),tt("small",_t));let zt=tt("div","",{class:"model-library-actions"});zt.append(...Ct),wt.append(Dt,zt),dt.append(wt)}A.textContent=ht.length>48?"Showing 48 of "+ht.length+". Search to narrow the list.":ht.length?ht.length+(ht.length===1?" result":" results"):Gt.value==="devices"&&!ut.length?"Connect to Home Assistant to list devices.":lt?.existing&&!At?"No compatible unbound objects. Choose a new model instead.":"No matches."}return Gt.addEventListener("change",()=>{lt=void 0,Bt.value="",C()}),Bt.addEventListener("input",C),Lt.addEventListener("click",()=>St.close()),{open(D="placed"){lt=void 0,O=!1,Gt.value=D,Bt.value="",C(),St.open||St.showModal()},get isOpen(){return St.open},close(){St.open&&St.close()}}}n.RoomcraftModels=Object.freeze({catalog:g,canMap:v,canBind:_,canReplace:x,suggestions:b,supportsHeight:T,resizeFootprint:S,resizeCornerFootprint:R,splitDiningFurniture:m,placementRole:ft,kitchenTopOpening:W,specialtyBarrierSections:G,walkingObstacleBoxes:$,blockingPlacement:It,orderMountedObjects:Pt,mount:$t,handoffKey:i})})(typeof window>"u"?globalThis:window);var Ma="#f7efdc",KS="#cfa373",Hm="#625145",JS="#b9dbe1",xf=["#5a815f","#779d69","#a4b379"],ti=["#dc9f9d","#a9baa2","#e3c076","#9db7cf","#bba6cd"];function Gm(n,t,e,i,s,r){let o=r?t*.4:e*.39,a=(l,u)=>r?new X(l*o,u,0):new X(0,u,l*o),c=new zs([a(-1,3),a(-.66,i*.75),a(0,i),a(.66,i*.75),a(1,3)]);n.part(new kr(c,16,Math.max(.15,Math.min(t,e)*.021),6,!1),s,0,0,0)}function QS(n,t,e,{type:i,form:s,palette:r}){let o=Math.min(t,e),a=o*.29;if(s==="ball"||s==="texturedBall"){if(n.oval(0,a,0,a,a,a,r.base),s==="ball"){n.ring(0,a,0,a*.99,a*.99,a*.044,r.accent);let c=n.ring(0,a,0,a*.99,a*.99,a*.037,r.detail);c.rotation.z=Math.PI/2}else for(let c=0;c<22;c++){let l=(c+.5)/22,u=Math.sqrt(1-l**2)*a*.97,f=c*2.39996;n.oval(Math.sin(f)*u,a*(1+l),Math.cos(f)*u,a*.105,a*.105,a*.105,r.accent)}return a*2.2}if(s==="book"){let c=i.includes("board-book");for(let l of[-1,1]){let u=l*t*.224;n.box(u,1,0,t*.42,3.1,e*.77,r.dark,c?.8:1.5),n.box(u,3.8,0,t*.385,2.1,e*.73,Ma,.8),n.oval(u,6.05,-e*.1,t*.1,.45,e*.14,l<0?r.base:r.accent);for(let f of[0,1])n.box(u,6,e*(.1+.075*f),t*(.23-f*.04),.45,.65,r.dark,.18);if(!c)for(let f of[-1,1])n.oval(u+l*t*.19,2.8,f*e*.3,t*.055,1.6,e*.06,r.accent)}return n.box(0,1.9,0,t*.035,4,e*.78,r.base,.8),7}if(s==="cups"||s==="rings"){let c=s==="cups",l=o*(c?.088:.066);n.disc(0,0,0,a*1.14,l*.55,a*1.14,r.dark,.9);for(let u=0;u<5;u++){let f=a*(1-u*.15),h=l*(u+.55),d=[r.base,r.accent,r.detail,ti[2],ti[3]][u];c?(n.disc(0,h-.6,0,f*.91,l,f*.91,d,.91),n.ring(0,h+l*.9,0,f*.88,f*.88,l*.12,u%2?Ma:d)):n.ring(0,h+l*.36,0,f,f,l*.39,d)}return n.oval(0,l*5.46,0,a*.18,l*.55,a*.18,c?r.accent:r.dark),l*6.1}if(s==="blocks"){for(let c=0;c<3;c++){let l=(c-1)*t*.25,u=(c%2-.5)*e*.29,f=(c-1)*.17;n.box(l,0,u,t*.23,o*.24,e*.31,[r.base,r.accent,ti[2]][c],o*.038,f),n.box(l,o*.239,u,t*.14,.7,e*.19,Ma,.35,f)}return o*.26}n.ring(0,a*.32,0,a,a*.88,a*.27,r.base);for(let c=0;c<9;c++){let l=c*Math.PI*2/9;n.oval(Math.cos(l)*a,a*.66,Math.sin(l)*a*.88,a*.12,a*.095,a*.12,r.accent)}return a*.8}function t2(n,t,e,{form:i,palette:s}){let r=Math.min(t,e),o=r*.32;if(i==="tunnel"){let u=Math.min(t*.37,e*.42),f=new Re(u,u,e*.83,18,1,!0,-Math.PI/2,Math.PI);f.rotateX(-Math.PI/2);let h=n.part(f,s.base,0,2.2,0);h.material.side=We;for(let d=0;d<5;d++){let p=Array.from({length:9},(y,m)=>{let g=Math.PI*m/8;return new X(Math.cos(g)*u,2.2+Math.sin(g)*u,(d-2)*e*.2)});n.part(new kr(new zs(p),15,Math.max(.15,r*.017),6,!1),s.accent,0,0,0)}return n.box(0,0,0,u*2,2.3,e*.85,s.dark,1.1),u+r*.017+2.2}if(i==="playGym"||i==="photoWoodArch"){i==="playGym"&&(n.box(0,.5,0,t*.95,2.5,e*.88,s.accent,4),Gm(n,t,e,o,s.base,!1)),Gm(n,t,e,o,i==="photoWoodArch"?KS:s.base,!0);for(let u of[-1,1])n.box(t*.38*u,0,0,t*.11,4,e*.4,s.dark,1.6);for(let u=-1;u<=1;u++){let f=u*t*.16,h=o*(u?.94:.99),d=o*(.59+u*.045);n.box(f,d,0,1,h-d,1,Ma),n.oval(f,d,0,r*.053,r*.057,r*.049,ti[u+2])}return o+2}if(i==="mirror"){n.box(0,0,0,t*.86,4,e*.71,s.dark,2.4);let u=n.box(0,3,-e*.06,t*.75,o*.7,e*.2,s.base,3),f=n.box(0,5.1,e*.035,t*.64,o*.53,2.2,JS,.8);return u.rotation.x=f.rotation.x=-.21,o*.75+3}if(i==="largeRattle")return n.ring(-t*.19,3,0,r*.25,r*.24,r*.055,s.accent),n.box(t*.06,2,0,t*.26,2.9,e*.16,s.dark,1.2),n.oval(t*.26,r*.14,0,r*.25,r*.14,r*.24,s.base),r*.29;if(i==="sensoryBasket"){n.disc(0,0,0,t*.39,o*.55,e*.38,s.base,.74),n.disc(0,o*.52,0,t*.35,1.2,e*.34,s.dark);for(let u=1;u<=3;u++)n.ring(0,o*u*.17,0,t*(.29+u*.034),e*(.28+u*.035),.8,s.accent);for(let u=0;u<4;u++)n.oval(t*(u%2?.16:-.15),o*.67,e*(u<2?-.14:.14),r*.12,r*.12,r*.12,ti[u]);return o+3}let a=i==="photoActivityTable",l=a?o:i==="activityBoard"?o*.2:o*.72;if(a)for(let u of[-.32,.32])for(let f of[-.29,.29])n.box(t*u,0,e*f,t*.105,l,e*.125,ti[f<0?3:1],2.6);else n.box(0,0,0,t*.83,l+1,e*.83,s.base,2.8);n.box(0,l,0,t*.94,Math.max(2.5,r*.057),e*.91,s.accent,2.6);for(let u=0;u<6;u++){let f=t*(.25*(u%3)-.25),h=e*(u<3?-.2:.2),d=l+r*.056;u%3===1?n.box(f,d,h,t*.105,r*.05,e*.15,ti[u%ti.length],1.4,.24):n.disc(f,d,h,r*.081,r*(.044+u*.007),r*.072,ti[u%ti.length],.87)}return l+r*.14}function e2(n,t,e,{form:i,palette:s}){if(i==="round"){n.disc(0,.35,0,t*.48,2.1,e*.48,s.base);for(let u of[.32,.43])n.ring(0,2.53,0,t*u,e*u,.37,s.accent);return 3}if(["tummy","photoLeafMat"].includes(i)){n.box(0,.5,0,t*.97,2.3,e*.95,s.dark,1),n.box(0,1.5,0,t*.95,1.75,e*.93,s.base,.7);for(let u of[-.29,0,.29])for(let f of[-.34,-.12,.12,.34]){let h=n.oval(t*f,3.3,e*u,t*.041,.22,e*.095,s.accent);h.rotation.y=f<0?-.49:.49}return 3.6}let o=i==="photoCheckerMat",a=o?["#e3d3bc","#776056","#c0a083","#776056"]:[s.base,s.accent,s.detail,s.base],c=Math.min(t,e)*.008,l=i==="foam"?4:5;n.box(0,.25,0,t*.99,1,e*.99,s.dark,.5);for(let u=0;u<4;u++)for(let f=0;f<l;f++){let h=t*((f+.5)/l-.5),d=e*((u+.5)/4-.5),p=a[(u+(o?f:f*3))%4];n.box(h,.9,d,t/l-c,2.2,e/4-c,p,.6),i==="puzzle"&&u<3&&n.disc(h,2.6,d+e/8,t*.026,.49,e*.026,p)}return 3.4}function n2(n,t,e,{form:i,palette:s}){let r=Math.min(t,e),o=i==="tall",a=i==="rail",c=i==="vertical",l=i==="hanging";if(a&&(n.box(0,1,0,t*.92,r*.22,e*.53,s.base,2),n.box(0,r*.22,0,t*.85,2,e*.45,Hm,.8)),c){for(let h of[-1,1])n.box(t*.37*h,0,-e*.29,t*.065,r*.79,e*.07,s.dark,1.2);for(let h=0;h<3;h++)n.box(0,r*(.16+.26*h),-e*.11,t*.84,2.8,e*.41,s.accent,1.2)}let u=o||l?[-.25,.25]:[-.3,0,.3],f=0;return u.forEach((h,d)=>{let p=t*h,y=c?-e*.1:e*(i==="cluster"?d===1?.21:-.11:0),m=Math.min(t*.142,e*.265,r*(o?.22:.18)),g=c?r*(.19+.26*d):l?r*.41:0,x=a?r*.25:m*(o?1.7:.87);a||(n.disc(p,g,y,m,x,m,s.base,.68),n.ring(p,g+x,y,m*.95,m*.95,.8,s.accent),n.disc(p,g+x-.72,y,m*.86,1,m*.86,Hm));for(let v=0;v<7;v++){let _=v*2.39996+d,b=m*(.41+v%3*.24),M=m*((o?1.9:1.04)+v%3*.26),T=Math.cos(_)*b,S=Math.sin(_)*b,R=n.oval(p+T*.47,g+x+M*.46,y+S*.47,.7,M*.48,.7,xf[0]);R.rotation.z=-Math.atan2(T,M),R.rotation.x=Math.atan2(S,M);let P=n.oval(p+T,g+x+M,y+S,m*.39,m*.13,m*.6,xf[v%xf.length]);P.rotation.y=_,a&&v%3===0&&n.oval(p+T,g+x+M+1.1,y+S,m*.18,m*.13,m*.19,ti[(v+d)%ti.length]),f=Math.max(f,g+x+M+m*.2)}if(l){for(let v of[-1,1]){let _=n.box(p+v*m*.48,g+x+r*.24,y,.72,r*.53,.72,Ma);_.rotation.z=v*.36}f=Math.max(f,g+x+r*.53)}}),f}var i2={softToy:QS,activityToy:t2,playMat:e2,planterSet:n2};function Vm(n,t,e,i){let s=i2[i.artFamily];return s?.(n,t,e,i)}var Wm=["#e9a1ad","#f4eee0","#b7cf84","#e8d081","#80b7ce","#b993c7"],s2=["#e9ad9c","#e2cb87","#9db9a3"],Xm=["#725746","#8d6b55","#65534b","#91755f"],r2=new Set(["wedge","ramp","arch","tunnel"]);function bf(n,t,e,i,s,r,o,a=0){let c=new ui(t,{depth:e,curveSegments:10,steps:1,bevelEnabled:a>0,bevelSize:a,bevelThickness:a,bevelSegments:2});return c.translate(0,0,-e/2),n.part(c,i,s,r,o)}function qm(n,t,e,i){let s=Math.cos(i),r=Math.sin(i),o=(a,c)=>[t+a*s+c*r,e-a*r+c*s];return{box(a,c,l,u,f,h,d,p=0){let[y,m]=o(a,l);n.box(y,c,m,u,f,h,d,p,i)},bead(a,c,l,u,f){let[h,d]=o(a,l);n.oval(h,c,d,u,u,u,f)}}}function Ym(n,t,e,i,s,r,o,a,c){let l=qm(n,t,e,i),u=o*.43,f=r*.1,h=s*.4;l.box(0,r-f,0,s*.98,f,u,a,f*.43),l.box(0,0,0,s*.99,f,u,a,f*.34);for(let d of[-1,1])l.box(d*h,f*.65,0,s*.17,r*.83,u,a,3),l.box(d*s*.475,r*.3,0,s*.055,r*.17,u*1.14,c,1.4),l.box(d*s*.23,r*.17,0,s*.1,r*.55,u*.84,a,2.1),l.bead(d*s*.088,r*.61,u*.33,Math.min(r,s)*.05,a),l.bead(d*s*.043,r*.53,u*.49,Math.min(r,s)*.018,c);l.box(0,r*.27,0,s*.2,r*.46,u*.96,a,3.4),l.box(0,r*.43,u*.52,s*.088,r*.066,u*.15,c,1.3)}function o2(n,t,e,i,s){let r=Math.min(38,Math.min(t,e)*.3),{specialtyBarrierSections:o}=(typeof window>"u"?globalThis:window).RoomcraftModels;for(let[a,[c,l,u,f,h]]of o("playpen",t,e).entries()){let d=a>=2?3:4,p=u/d;for(let y=0;y<d;y++){let m=-p*(d-1)/2+y*p,g=s?Wm[(y+a*2)%Wm.length]:y%2?i.accent:i.base;Ym(n,c+m*Math.cos(h),l+m*Math.sin(h),-h,p,r,f,g,"#c1b9b0")}}return r}function a2(n,t,e,{form:i,palette:s}){if(i==="photoPlayYard"||i==="playpen")return o2(n,t,e,s,i==="photoPlayYard");if(i==="photoBearPanel"){let u=Math.min(37,t*.42);return Ym(n,0,0,0,t,u,e,s.base,s.dark),u}if(i==="gate"||i==="guard"){let u=Math.min(37,t*.32),f=Math.min(e*.55,u*.28);for(let d of[-1,1])n.box(d*t*.46,0,0,t*.07,u,f,s.dark,1.5),n.box(d*t*.46,u*.08,0,t*.08,u*.08,e*.73,s.base,1.4);for(let d of[u*.11,u*.88])n.box(0,d,0,t*.88,u*.085,f*.74,s.accent,1.2);let h=i==="guard"?13:8;for(let d=0;d<h;d++){let p=t*(.79*d/(h-1)-.395);n.box(p,u*.16,0,t*.027,u*.77,f*.47,s.base,.8)}return n.box(t*.39,u*.74,f*.3,t*.09,u*.11,f*.53,s.detail,1.7),u}let r=i==="folding",o=Math.min(r?39:29,t*.28),a=[s.base,s.accent,s.detail],{specialtyBarrierSections:c}=(typeof window>"u"?globalThis:window).RoomcraftModels,l=c(i,t,e);for(let[u,[f,h,d,p,y]]of l.entries()){let m=qm(n,f,h,-y);if(m.box(0,0,0,d*.955,o,p,s.dark,3.7),m.box(0,o*.07,p*.14,d*.87,o*.86,p*.87,a[u%3],3.4),i==="quilted")for(let g of[-.26,0,.26])m.box(g*d,o*.16,p*.59,d*.22,o*.67,p*.09,s.base,2.6);r&&u<l.length-1&&m.box(d*.48,o*.38,0,d*.09,o*.24,p*.92,s.dark,1.2)}return o}function c2(n,t,e,i){let s=new Ke;return e?(s.moveTo(-n/2,0),s.lineTo(-n/2,t*.34),s.bezierCurveTo(-n/2,t*1.18,n/2,t*1.18,n/2,t*.34),s.lineTo(n/2,0),s.lineTo(n*.29,0),s.lineTo(n*.29,t*.32),s.bezierCurveTo(n*.29,t*.83,-n*.29,t*.83,-n*.29,t*.32),s.lineTo(-n*.29,0)):(s.moveTo(-n/2,0),s.lineTo(n/2,0),s.lineTo(n/2,t),s.lineTo(-n/2,t*(i?.18:.08))),s.closePath(),s}function l2(n,t,e,{type:i,form:s,palette:r}){let o=Math.min(t,e),a=i.endsWith("-rainbow")?s2:[r.accent,r.base,r.dark];if(s==="steps"){let l=Math.min(44,o*.48),u=t/3;for(let f=0;f<3;f++){let h=u*(f-1),d=l*(f+1)/3;n.box(h,0,0,u*.98,d,e*.94,a[f],3.7),n.box(h,d*.86,0,u*.96,d*.055,e*.945,r.detail,1.1)}return l}if(r2.has(s)){let l=s==="arch"||s==="tunnel",u=s==="ramp",f=Math.min(l?53:u?28:44,o*(l?.65:u?.32:.49)),h=c2(t*.91,f,l,u),d=Math.min(1.4,o*.021),p=s==="tunnel"?e*.83:e*.73;bf(n,h,p,a[1],0,d,0,d);for(let y of[-1,1])bf(n,h,d,a[y<0?0:2],0,d,y*p*.5,d*.54);return f+d*2}let c=Math.min(46,o*.62);return n.box(0,0,0,t*.95,c,e*.95,r.base,5),n.box(0,c*.08,0,t*.959,c*.07,e*.959,r.dark,1.8),n.box(0,c*.87,0,t*.955,c*.055,e*.955,r.accent,1.5),c}function u2(n,t,e,i){let s=Math.min(38,t*.35),r=Math.min(e*.31,t*.065);n.box(0,2,0,t*.95,s*.92,r*.35,"#33343a",2);for(let o of[-.47,.47])n.box(t*o,0,0,t*.035,s,r,i.dark,1.8),n.box(t*o,0,0,t*.068,s*.08,e*.74,i.dark,1.3);for(let o=-5;o<=5;o++)n.box(t*o*.077,2,r*.25,t*.008,s*.85,r*.15,i.accent,.42);for(let o of[.06,.28,.51,.74,.96])n.box(0,s*o,r*.3,t*.93,s*(o===.96?.06:.027),r*.21,i.base,.55);return s}function h2(n,t,e,{form:i,palette:s}){if(i==="screen")return u2(n,t,e,s);let r=i==="photoTiledMantel",o=i!=="hearth",a=Math.min(o?54:39,t*.37),c=e*.16,l=r?"#e6ded0":s.base,u=o?s.accent:s.dark,f=t*.59,h=a*.57;n.box(0,0,e*.05,t*.96,a*.09,e*.83,l,2.6),n.box(0,a*.08,-e*.28,t*.87,a*.81,e*.27,s.dark,2.2),n.box(0,a*.09,-e*.12,f,h,e*.12,"#29272b",1.7);for(let d of[-1,1])n.box(d*t*.383,a*.08,-c,t*.135,a*.78,e*.35,l,2.7),n.box(d*t*.3,a*.11,-c*.03,t*.014,h,e*.04,"#bc925f",.75);if(n.box(0,a*.65,-c,t*.78,a*.2,e*.35,l,2.6),r||!o){let d=t*.095;for(let p=-4;p<=4;p++)n.box(p*d,a*.68,-e*.014,d*.94,a*.146,e*.077,r?Xm[(p+4)%Xm.length]:s.accent,1)}n.box(0,a*.84,-e*.14,t*.9,a*.09,e*.43,u,2.1),n.box(0,a*.93,-e*.12,t*.99,a*.075,e*.51,r?"#f3ece3":s.detail,1.8);for(let d=-1;d<=1;d++)n.box(d*t*.11,a*(.13+Math.abs(d)*.02),e*.03,t*.25,a*.065,e*.1,d?"#785141":"#ad7e5b",1.7,d*.36);return a}function f2(n,t,e,{form:i,palette:s}){let r=Math.min(t,e);if(i==="photoBolster"){let a=Math.min(25,r*.62);n.box(0,0,0,t*.96,a,e*.91,s.base,a*.37);for(let c of[-1,1])n.box(c*t*.39,a*.12,0,t*.017,a*.78,e*.94,s.accent,2.3);return a}let o=Math.min(31,r*.41);return n.disc(0,0,0,t*.43,o*.17,e*.43,s.dark,.94),n.oval(0,o*.48,0,t*.48,o*.47,e*.48,s.base),n.ring(0,o*.4,0,t*.477,e*.477,Math.min(1.1,r*.025),s.accent),n.oval(0,o*.82,0,t*.26,o*.1,e*.26,s.accent),o}function d2(n,t,e,i,s){let r=i==="mirror",o=Math.min(r?45:39,Math.max(6,e*.66)),a=Number.isFinite(s)?Math.max(0,s-o/2):0,c=Math.min(5.5,e*.27),l=c*.56;n.box(0,a,0,t*.95,o,c,r?"#8b6b54":"#694e3e",2.7),n.box(0,a+o*.065,l,t*.89,o*.87,c*.26,r?"#d8b88e":"#ead8b8",1.4);let u=t*.81,f=o*.73,h=a+o*.14;n.box(0,h,l*1.31,u,f,c*.16,r?"#a7c4ce":"#c4d3b6",1.15);let d=new Ke;return r?(d.moveTo(-u*.45,0),d.lineTo(-u*.19,0),d.lineTo(u*.14,f),d.lineTo(-u*.02,f)):(d.moveTo(-u/2,0),d.lineTo(-u/2,f*.19),d.quadraticCurveTo(-u*.28,f*.86,-u*.07,f*.4),d.quadraticCurveTo(u*.24,f*.18,u/2,f*.48),d.lineTo(u/2,0)),d.closePath(),bf(n,d,c*.035,r?"#e5eff0":"#759899",0,h,l*1.49),r||n.oval(u*.28,h+f*.76,l*1.51,f*.1,f*.1,c*.045,"#f0cb8c"),a+o}function $m(n,t,e,i,{mountY:s}={}){switch(i?.artFamily){case"paddedPanel":return a2(n,t,e,i);case"foamBlock":return l2(n,t,e,i);case"fireplace":return h2(n,t,e,i);case"playFurniture":if(i.form==="softPouf"||i.form==="photoBolster")return f2(n,t,e,i);break;default:if(i?.type==="artwork"||i?.type==="mirror")return d2(n,t,e,i.type,s)}}var mt=Object.freeze({ink:"#493e51",oak:"#c89468",oakLight:"#e1b184",walnut:"#9e715d",sage:"#98ad83",moss:"#708a73",linen:"#f3e6cd",cream:"#fff4df",blush:"#dca3a0",peach:"#edc1a7",honey:"#dcb575",sand:"#e2c5a0",lilac:"#aca0c8",lilacLight:"#d7c9e1",blue:"#81a6b5",aqua:"#b4d6d3",ceramic:"#f2e6e0",shadow:"#a38898",glass:"#577b91",darkGlass:"#344459",brass:"#c39257",binding:"#b29386",blueWater:"#9ac3bf",oatmeal:"#dac3a4",upholsteryShadow:"#bca087",denim:"#58637b",steel:"#bbc9cd",basinSteel:"#879aa4"}),p2=Object.freeze({sage:mt.sage,mint:mt.aqua,sky:mt.blue,peach:mt.peach,coral:"#cf8979",lavender:mt.lilac,butter:mt.honey,cream:mt.linen,white:mt.cream,oak:mt.oakLight,walnut:mt.walnut,charcoal:"#505b68",brass:mt.brass,terracotta:"#b97d63",forest:mt.moss,blush:mt.blush,teddy:"#aa8063",slate:"#9b9b9d"}),m2=new Set([mt.oak,mt.oakLight,mt.walnut]),g2=new Set([mt.sage,mt.moss,mt.linen,mt.lilac,mt.lilacLight,mt.blush,mt.peach,mt.oatmeal,mt.upholsteryShadow,mt.denim]);function y2(n,t,e){let i=m2.has(n)?1:g2.has(n)?2:0,s=n===mt.glass||n===mt.darkGlass||n===mt.blueWater,r=n===mt.brass,o=n===mt.steel||n===mt.basinSteel,a=new Ne({color:n,roughness:r||o?.37:s?.33:n===mt.ceramic?.44:i===1?.64:.89,metalness:r?.42:o?.28:0});return i&&(a.onBeforeCompile=c=>{c.uniforms.furnitureDetail={value:i},c.uniforms.furnitureGrainDirection={value:t},c.uniforms.furnitureSurfaceDetail=e,c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
varying vec3 furnitureSurfacePosition;`).replace("#include <begin_vertex>",`#include <begin_vertex>
furnitureSurfacePosition = position;`),c.fragmentShader=c.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 furnitureSurfacePosition;
        uniform float furnitureDetail;
        uniform float furnitureSurfaceDetail;
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
        if (furnitureSurfaceDetail > .5) {
          if (furnitureDetail < 1.5) {
            float flow = .34*sin(lengthwise*.18) + .11*sin(lengthwise*.48);
            grain += .018*sin((crosswise + flow)*5.6) * (1.0-smoothstep(.20, .65, pixelSize));
          } else {
            vec3 threads = cos(localPoint*5.7);
            float stitches = threads.x*threads.y + threads.y*threads.z + threads.z*threads.x;
            grain += .016*stitches * (1.0-smoothstep(.16, .48, length(fwidth(localPoint))));
          }
        }
        diffuseColor.rgb *= 1.0 + grain;`)}),a}var vf=class{constructor(t,e,i={value:0}){this.root=new Jt,this.materials=new Map,this.grainDirection=e>t?1:0,this.surfaceDetail=i}part(t,e,i,s,r,o=0){this.materials.has(e)||this.materials.set(e,y2(e,this.grainDirection,this.surfaceDetail));let a=new ne(t,this.materials.get(e));return a.position.set(i,s,r),a.rotation.y=o,this.root.add(a),a}box(t,e,i,s,r,o,a,c=0,l=0){s=Math.max(.1,s),o=Math.max(.1,o);let u=Math.min(c,s*.42,r*.42,o*.42),f=u>.2?new $l(s,r,o,2,u):new xe(s,r,o);return this.part(f,a,t,e+r/2,i,l)}disc(t,e,i,s,r,o,a,c=1){let l=new Re(1,c,r,20);return l.scale(s,1,o),this.part(l,a,t,e+r/2,i)}oval(t,e,i,s,r,o,a){let c=new ve(1,12,8);return c.scale(s,r,o),this.part(c,a,t,e,i)}ring(t,e,i,s,r,o,a){let c=new cn(1,o/Math.min(s,r),6,24);return c.rotateX(-Math.PI/2),c.scale(s,1.5,r),this.part(c,a,t,e,i)}basin(t,e,i,s,r,o){let a=[[0,0],[.74,0],[.94,.2],[1,.72],[.96,1],[.83,1],[.78,.64],[.56,.28],[.22,.25],[0,.25]].map(([l,u])=>new Ot(l,u)),c=new Jo(a,24);return c.scale(s,r,o),this.part(c,mt.ceramic,t,e,i)}finish(t){let e=new Map;for(let i of[...this.root.children]){let s=i.geometry,r=s.index?s.toNonIndexed():s;r!==s&&s.dispose(),i.updateMatrix(),r.applyMatrix4(i.matrix),e.has(i.material)||e.set(i.material,[]),e.get(i.material).push(r),this.root.remove(i)}for(let[i,s]of e){let r=s.length===1?s[0]:On(s);s.length>1&&s.forEach(a=>a.dispose());let o=new ne(r,i);o.castShadow=o.receiveShadow=!0,this.root.add(o)}return{root:this.root,anchorY:t}}};function Yi(n,t,e,i,s,r,o=mt.walnut){let a=Math.min(4.5,i*.07,s*.12);for(let c of[-.36,.36])for(let l of[-.36,.36])n.disc(t+i*c,0,e+s*l,a,r,a,o,.68)}function Sa(n,t,e,i,s,r,o,a){let c=o===mt.linen?mt.binding:mt.blush;n.box(t,e,i,s,8,r,c,3.2,a),n.box(t,e+2.1,i,s-2.6,7.4,r-2.6,o,3.2,a)}function x2(n,t,e,i,s){let r=s==="sofa"||s.includes("cloud-sofa"),o=r&&e>t,a=s==="sofa",c=a?1:-1,l=a?mt.upholsteryShadow:mt.moss,u=a?mt.oatmeal:mt.sage,f=o?t*.5:t,h=r&&!o?e*.57:e,d=o?-t*.25:0,p=r&&!o?-e*.215:0,y=Math.min(t,e)*.1;if(Yi(n,d,p,f,h,5),n.box(d,5,p,f*.97,22,h*.98,l,8),r){let b=o?t*.52:t*.34,M=o?e*.38:e*.46,T=o?t*.22:-t*.32,S=o?c*e*.3:e*.25;Yi(n,T,S,b,M,5),n.box(T,5,S,b,22,M,l,8),n.box(T,25,S,b*.96,12,M*.9,i,5),o&&n.box(T,29,c*e*.464,b,26,y,u,6)}let m=s.includes("loveseat")||s.includes("chaise")?2:3;if(o){let b=e*.88/m;for(let M=0;M<m;M++){let T=-e*.44+b*(M+.5);n.box(d+y*.18,25,T,f*.76,12,b-3,i,5),n.box(d-f*.39,27,T,f*.22,31,b-1,u,8)}n.box(d,29,-c*e*.445,f*.88,20,y,u,6),Sa(n,d+f*.13,35,-e*.31,f*.42,b*.49,a?mt.sage:mt.peach,-.18),Sa(n,d+f*.12,35,e*.28,f*.4,b*.45,mt.linen,.2)}else{let b=t*.8/m;for(let M=0;M<m;M++){let T=-t*.4+b*(M+.5);n.box(T,25,p+h*.08,b-3,12,h*.7,i,6),n.box(T,27,p-h*.39,b-1,31,h*.24,u,7)}for(let M of[-t*.442,t*.442])n.box(M,26,p,y,22,h*.89,u,6);Sa(n,-t*.27,35,p-h*.15,t*.18,h*.34,mt.peach,-.18),Sa(n,t*.27,35,p-h*.12,t*.17,h*.33,mt.linen,.2)}let g=o?f*.67:f*.19,x=o?e*.14:h*.58,v=o?d+f*.06:f*.32,_=o?e*.13:p+h*.1;n.box(v,37.1,_,g,1.7,x,mt.lilacLight,.65);for(let b of[-1,1])n.box(v,38.82,_+b*x*.36,g*.9,.25,1.2,mt.lilac);return 58}function mi(n,t,e,i,s,r,o,a=!1){let c=a?19:28;Yi(n,t,e,i,s,c,mt.walnut),n.box(t,c,e,i*.9,7,s*.92,mt.walnut,2),n.box(t,c+5,e,i*.83,8,s*.83,o,3);let l=Math.abs(r)===Math.PI/2,u=t-Math.sin(r)*(l?i:s)*.39,f=e-Math.cos(r)*s*.39;n.box(u,c+9,f,l?s*.2:i*.84,22,l?s*.82:s*.22,o,4)}function b2(n,t,e,i){let s=-e*.39;Yi(n,0,0,t,e,20,mt.walnut),n.box(0,20,0,t*.9,6,e*.92,mt.walnut,2),n.box(0,24,0,t*.83,6,e*.83,i,2.5);for(let r of[-1,1])n.box(t*.34*r,23,s,t*.075,18,e*.12,mt.walnut,1.1);return n.box(0,37,s,t*.84,22,e*.22,i,4),59}function Zl(n,t,e,i,s){return s==="round"?(n.disc(0,0,0,t*(.13/.58),5,e*(.13/.58),mt.walnut),n.disc(0,4,0,t*(.045/.58),31,e*(.045/.58),mt.walnut,1.5),n.disc(0,33,0,t/2,8,e/2,i,.96),41):s==="classic"?(Yi(n,0,0,t*(.69/.79),e*(.49/.57),35),n.box(0,32,0,t*(.72/.79),6,e*(.5/.57),mt.walnut,3),n.box(0,37,0,t,8,e,i,4),n.box(0,45,0,t*(.69/.79),1.4,e*(.14/.57),mt.linen,.6),46.4):(Yi(n,0,0,t*(.69/.79),e*(.47/.56),34),n.box(0,33,0,t,8,e,i,3),n.box(0,41.1,0,t*(.55/.79),1.2,e*(.15/.56),mt.linen,.5),42.3)}function v2(n,t,e,i,s){let r=s.includes("round-dining"),a=!s.includes("rectangular-dining");if(s==="table")return mi(n,0,-e*.39,t*.2,e*.23,0,mt.denim),mi(n,0,e*.39,t*.2,e*.23,Math.PI,mt.denim),mi(n,-t*.415,0,t*.17,e*.27,Math.PI/2,mt.denim),mi(n,t*.415,0,t*.17,e*.27,-Math.PI/2,mt.denim),Zl(n,t*.79,e*.57,mt.oak,"classic");if(r)mi(n,0,-e*.37,t*.2,e*.2,0,mt.sage),mi(n,0,e*.37,t*.2,e*.2,Math.PI,mt.blush),mi(n,-t*.38,0,t*.2,e*.2,Math.PI/2,mt.lilac),mi(n,t*.38,0,t*.2,e*.2,-Math.PI/2,mt.honey),Zl(n,t*.58,e*.58,i,"round");else{let c=a?[-.28,.28]:[-.32,0,.32],l=[mt.sage,mt.blush,mt.lilac,mt.honey];for(let u=0;u<c.length;u++)for(let f of[-1,1])mi(n,t*c[u],e*.37*f,t*(a?.19:.15),e*.23,f<0?0:Math.PI,l[(u+(f<0?0:2))%l.length]);Zl(n,t*.79,e*.56,i,"styled")}return 42}function _2(n,t,e,i,s,r){n.box(t,e,i,s*.31,2,r*.5,mt.ink,.5),n.box(t,e+1,i,s*.1,14,4,mt.ink,1),n.box(t,e+12,i,s,25,6,mt.ink,2),n.box(t,e+14,i+3.1,s*.91,21,1,mt.glass,.4),n.box(t-s*.25,e+28,i+3.7,s*.28,2,.5,mt.blue,.2)}function M2(n,t,e,i,s){let r=s?e*.34:e*.85,o=s?-e/2+r/2:0,a=t*.18;n.box(0,37,o,t,7,r,i,2.4);for(let c of[-1,1]){let l=c*(t-a)/2,u=s?e-r:e*.58,f=s?r/2:0;s&&n.box(l,37,f+.8,a,7,u-1.6,i,2.4),n.box(l,4,f,a*.81,34,u*.81,mt.walnut,2.8);for(let h=0;h<3;h++){let d=6+h*9.7;n.box(l,d,f+u*.41,a*.74,8.4,2,mt.oak,.7),n.box(l,d+3,f+u*.43,a*.26,2,2,mt.brass,.5)}}return _2(n,-t*.02,44,o-r*.22,t*.28,r*.43),n.box(-t*.02,44,o+r*.25,t*.25,1.7,r*.18,mt.linen,.6),n.oval(t*.18,45,o+r*.23,t*.018,1.9,r*.074,mt.peach),81}function Zm(n,t,e,i,s,r){let o=new Ke;for(let c=0;c<10;c++){let l=c*Math.PI/5-Math.PI/2,u=c%2?s*.46:s,f=[Math.cos(l)*u,Math.sin(l)*u];c===0?o.moveTo(...f):o.lineTo(...f)}o.closePath();let a=new Ti(o);a.rotateX(-Math.PI/2),n.part(a,r,t,e,i)}function S2(n,t,e,i,s){let r=s.includes("bunk-bed"),o=s.includes("crafted-crib"),a=s.includes("canopy-bed");Yi(n,0,0,t,e,6,mt.walnut);let c=r?[6,55]:[6];for(let u of c){n.box(0,u,0,t*.97,15,e*.98,mt.walnut,5),n.box(0,u+12,0,t*.9,11,e*.92,mt.linen,4),n.box(0,u+21.6,e*.15,t*.89,5,e*.62,mt.lilac,2.5),n.box(0,u+23.7,e*.15,t*.877,7,e*.605,i,3.4),n.box(0,u+28,-e*.11,t*.88,3,e*.071,mt.lilacLight,1);let f=t>=145?[-t*.2,t*.2]:[0];for(let d of f)Sa(n,d,u+22,-e*.275,t*(f.length===2?.34:.49),e*.2,mt.linen,d<0?-.04:.04);let h=Math.min(t,e)*.045;for(let[d,p,y,m]of[[-.24,.12,1,mt.cream],[.23,.27,.79,mt.honey],[.08,.04,.57,mt.cream],[-.1,.34,.62,mt.honey]])Zm(n,t*d,u+30.8,e*p,h*y,m);for(let d of[-.32,-.17,0,.17,.32])n.box(t*d,u+30.71,e*.24,.85,.24,e*.33,mt.lilacLight,0);for(let d of[.09,.195,.3,.405])n.box(0,u+30.72,e*d,t*.71,.24,.9,mt.lilacLight,0)}let l=r||a?93:52;if(n.box(0,4,-e*.46,t*.95,l-4,e*.083,mt.walnut,6),n.box(0,18,-e*.417,t*.89,l-23,e*.055,i,4),o||r||a)for(let u of[-1,1]){for(let f of[-1,1])n.box(t*.45*u,4,e*.46*f,5,l,6,mt.walnut,2);if(n.box(t*.45*u,l-9,0,5,5,e*.89,i,1.5),o||r)for(let f=-3;f<=3;f++)n.box(t*.45*u,l-29,e*f*.105,3,20,3,i,.8)}return l}function w2(n,t,e,i,s){let r=/nightstand/.test(s),a=/bookcase|shelf/.test(s)?66:r?29:s==="storageCabinet"?50:38;Yi(n,0,0,t,e,5),n.box(0,5,0,t*.96,a-6,e*.9,mt.walnut,3),n.box(0,a-2,0,t,4,e,i,1.7),n.box(0,a-3.7,0,t*.985,1.5,e*.967,mt.oak,.6);let c=r?2:3,l=t>=95?2:1;for(let u=0;u<c;u++)for(let f=0;f<l;f++){let h=t*.89/l,d=(a-8)/c,p=h*(f-(l-1)/2),y=5+u*d;n.box(p,y,e*.46,h-2,d-1.5,2.9,i,1),n.oval(p,y+d*.45,e*.51,2.2,1.7,2.2,mt.brass)}return a+2}function E2(n,t,e,i){if(i==="office-round")return n.disc(0,1,0,t*.5,2.2,e*.5,mt.moss),n.disc(0,3.2,0,t*.46,.7,e*.46,mt.sage),n.ring(0,3.9,0,t*.4,e*.4,.6,mt.linen),4;let s=i==="bedroom-floral";n.box(0,1,0,t,2.4,e,s?mt.lilac:mt.blush,1),n.box(0,3.5,0,t*.91,.8,e*.91,mt.linen),n.box(0,4.3,0,t*.86,.5,e*.86,s?mt.lilacLight:mt.peach);for(let r of[-1,1])for(let o=-5;o<=5;o++)n.box(o*t*.074,1.3,r*e*.493,t*.025,1.2,e*.047,mt.linen);for(let r of[-1,1])n.box(r*t*.398,4.84,0,.6,.32,e*.797,mt.linen),n.box(0,4.84,r*e*.398,t*.797,.32,.6,mt.linen);if(s)for(let r of[-1,0,1])for(let o of[-1,0,1])Zm(n,t*.22*r,4.9,e*.22*o,Math.min(t,e)*.038,mt.cream);return 5}function T2(n,t,e,i,s){let r=t*s.widthRatio,o=e*s.depthRatio,a=e*s.offsetRatio,c=a-o/2,l=a+o/2,u=(t-r)/2;for(let d of[-1,1])n.box(d*(t+r)/4,i-5,0,u,5,e,mt.linen);n.box(0,i-5,(c-e/2)/2,r,5,c+e/2,mt.linen),n.box(0,i-5,(l+e/2)/2,r,5,e/2-l,mt.linen);let f=Math.min(2.6,r*.1);n.box(0,i-4.88,a,r,.72,o,mt.basinSteel);for(let d of[-1,1])n.box(d*r/2,i-4.5,a,f,5.25,o+f,mt.steel,.4),n.box(0,i-4.5,a+d*o/2,r,5.25,f,mt.steel,.4),n.disc(0,i-4.1,a+d*o/4,f,.6,f,mt.darkGlass);n.box(0,i-4.5,a,r,4.85,f,mt.steel,.4);let h=-r/2-f*1.15;n.disc(h,i,a,f*.8,f*2.9,f*.8,mt.steel),n.box(h+f,i+f*2.5,a,f*2.8,f*.7,f,mt.steel,.6)}function A2(n,t,e,i){let{type:s}=i,o=(typeof window>"u"?globalThis:window).RoomcraftModels.kitchenTopOpening(i),a=s==="doubleVanity"?32:35,c=s==="kitchenWorktop",l=s==="doubleVanity";n.box(0,1,0,t*.91,a-4,e*.93,l?mt.sage:mt.walnut,2.3),s==="counter"&&o?T2(n,t,e,a+2,o):n.box(0,a-3,0,t,5,e,mt.linen,1.8);let u=e>t;for(let f of[-1,1])for(let h=-1;h<=1;h++){let d=u?2.2:t*.29,p=u?e*.29:2.2,y=u?t*.46*f:t*.3*h,m=u?e*.3*h:e*.47*f;n.box(y,6,m,d,a*.67,p,l?mt.moss:mt.oak,.8),n.box(y,a*.63,m,u?3.2:t*.08,2.6,u?e*.05:3.2,mt.honey,.7)}if(c){n.box(0,a+2,e*o.offsetRatio,t*o.widthRatio,2.5,e*o.depthRatio,mt.darkGlass,.8);for(let f of[-.2,.2])for(let h of[-.19,.19]){let d=Math.min(t,e)*(f<0?.12:.092);n.ring(t*f,a+4.8,e*h,d,d,1,mt.glass)}}if(l)for(let f of[-t*.24,t*.24])n.basin(f,a+1.9,0,t*.16,5.5,e*.36),n.oval(f,a+3.48,0,2.1,.52,2.1,mt.brass),n.disc(f,a+2,-e*.32,2.6,8,2.6,mt.brass),n.box(f,a+8.4,-e*.22,4,3,e*.2,mt.brass,1);return a+3}function R2(n,t,e,i){if(i==="tub"){n.box(0,0,0,t*.95,19,e*.95,mt.ceramic,6),n.box(0,18,0,t*.85,3,e*.86,mt.blueWater,1.3);for(let s of[-1,1])n.box(s*t*.44,17,0,t*.11,7,e*.94,mt.cream,2.6),n.box(0,17,s*e*.43,t*.82,7,e*.12,mt.cream,2.6);return n.disc(0,21,-e*.31,2.4,.9,2.4,mt.glass),n.disc(0,22,-e*.44,3.5,9,3.5,mt.brass),n.box(0,30,-e*.4,5,3.7,e*.1,mt.brass,1.3),n.box(t*.24,21.07,e*.14,t*.014,.18,e*.22,mt.aqua,.08),34}return i==="toilet"?(n.disc(0,0,e*.12,t*.28,11,e*.29,mt.ceramic,.65),n.disc(0,10,e*.12,t*.43,5,e*.34,mt.cream,.81),n.disc(0,15,e*.12,t*.34,1,e*.27,mt.linen),n.box(0,4,-e*.32,t*.92,22,e*.31,mt.ceramic,4.2),n.box(0,25,-e*.32,t*.93,3,e*.32,mt.cream,1.3),n.disc(t*.25,28,-e*.32,2.1,1.1,2.1,mt.honey),29):(n.box(-t*.15,0,-e*.14,t*.65,24,e*.58,mt.sage,3.8),n.box(-t*.15,23,-e*.14,t*.76,4,e*.68,mt.cream,1.6),n.basin(-t*.15,27,-e*.11,t*.28,5.2,e*.22),n.oval(-t*.15,28.56,-e*.11,1.6,.55,1.6,mt.brass),n.disc(-t*.15,27,-e*.34,2.5,8,2.5,mt.brass),n.box(-t*.15,33,-e*.31,4.7,3,e*.1,mt.brass,1.1),n.box(t*.34,2,e*.12,t*.22,17,e*.73,mt.walnut,2.1),n.box(t*.34,19,e*.18,t*.24,4.7,e*.34,mt.blush,1.7),36)}function C2(n,t,e,i,s){let r=i?mt.cream:"#bb9476",o=Math.min(t,e),a=o*(s?.4:.25),c=o*(s?.64:.49);n.oval(0,a*.68,e*.07,t*.35,a*.62,e*.36,r),n.oval(0,c,-e*.13,t*.3,o*.23,e*.27,r);for(let l of[-1,1])n.oval(t*.27*l,c+o*.19,-e*.19,t*.102,o*(i?.19:.1),e*.093,r),n.oval(t*.1*l,c+o*.04,e*.105,o*.026,o*.034,o*.022,mt.ink),n.oval(t*.26*l,a*.69,e*.23,t*.14,o*.105,e*.16,r),n.oval(t*.15*l,c-o*.06,e*.094,o*.043,o*.023,o*.023,mt.blush);return n.oval(0,c-o*.044,e*.12,o*.033,o*.022,o*.023,mt.ink),s&&n.box(0,8,e*.17,t*.57,9,e*.49,mt.linen,3.8),c+o*(i?.37:.28)}function I2(n,t,e,{form:i,palette:s}){let r=Math.min(t,e),o=i==="bin",a=r*(o?.31:.35);if(o||i==="basket"){if(o)n.box(0,0,0,t*.81,a,e*.81,s.base,r*.07),n.box(0,a-.8,0,t*.83,2.5,e*.83,s.accent,r*.075),n.box(0,a+1.2,0,t*.74,1,e*.73,s.dark,r*.06),n.box(0,a*.63,e*.409,t*.26,a*.2,1.1,s.detail,1.2);else{n.disc(0,0,0,t*.43,a,e*.42,s.base,.79),n.disc(0,a-.35,0,t*.393,.8,e*.38,s.dark);for(let y=0;y<=5;y++)n.ring(0,a*(.13+y*.16),0,t*(.35+y*.016),e*(.34+y*.016),.74,y%2?s.accent:s.base)}for(let y=0;y<3;y++){let m=(y-1)*t*.22,g=[mt.sage,mt.honey,mt.lilac][y];n.box(m,a+.95,(y%2-.5)*e*.16,t*.16,r*(.13+.03*y),e*.21,g,2,y*.27)}return a+r*.22}let c=i==="cubby"||i==="lowShelf",l=Math.max(13,Math.min(54,r*(c?.49:.72))),u=Math.max(2,e*.75),f=s.base;if(i==="floating"){n.box(0,l,0,t*.94,3.4,u,f,1.2);for(let y of[-1,1])n.box(y*t*.3,l-7,-u*.38,4,7,u*.2,s.dark,.8);return l+4}let h=c?2:3,d=c?3:2,p=l/(h-1);for(let y of[-1,1])n.box(t*.45*y,0,0,t*.065,l+3.3,u,f,1);n.box(0,0,-u*.44,t*.88,l,e*.08,s.dark,.65);for(let y=0;y<h;y++)if(n.box(0,y*p,0,t*.94,3.1,u,f,1),y!==h-1)for(let m=0;m<d;m++){let g=t*((m+.5)/d-.5)*.84;if(c)n.box(g,y*p+3.2,e*.05,t*.205,p*.45,e*.52,[mt.sage,mt.blush,mt.linen][m],1.7);else for(let x=0;x<4;x++)n.box(g+t*(.047*x-.07),y*p+3.15,e*.11,t*.038,p*(.41+x%3*.085),e*.31,[mt.lilac,mt.sage,mt.honey,mt.blush][x],.65)}return l+3.2}function P2(n,t,e,i){let s=Math.min(t,e),r=s*(i?.33:.25);n.disc(0,0,0,r,r*.85,r,mt.peach,.72),n.disc(0,r*.75,0,r*1.07,r*.18,r*1.07,mt.walnut);for(let o=0;o<5;o++){let a=o*Math.PI*.4,c=Math.cos(a)*s*.21,l=Math.sin(a)*s*.21,u=s*(i?.55:.44)+o%2*s*.08,f=n.oval(c*.5,u*.69,l*.5,s*.035,u*.32,s*.035,mt.moss);f.rotation.z=-c/u,f.rotation.x=l/u;let h=i?mt.sage:[mt.blush,mt.linen,mt.honey][o%3];n.oval(c,u,l,s*.13,s*(i?.18:.085),s*.11,h)}return s*(i?.82:.65)}function jm(n,t={}){let{type:e,w:i,h:s}=n||{};if(typeof e!="string"||!Number.isFinite(i)||!Number.isFinite(s)||i<1||s<1)return null;if(e.startsWith("pets-"))return Om(e,i,s);let r=p2[e.split("-").at(-1)],o=(typeof window>"u"?globalThis:window).RoomcraftInventory?.byType?.[e]??{type:e},a=new vf(i,s,t.surfaceDetail),c=$m(a,i,s,o,t);if(c===void 0&&!["plush","photoBunnyPlush"].includes(o.form)&&(c=Vm(a,i,s,o)),c!==void 0)return a.finish(c);if(e==="sofa"||/(?:sofa|loveseat|chaise)-/.test(e))c=x2(a,i,s,r||(e==="sofa"?mt.linen:mt.sage),e);else{if(e==="tv")return a.box(0,2,0,i*.94,23,s*.98,mt.walnut,3.5),a.box(0,24,0,i,4,s,mt.oakLight,1.5),a.box(0,28,0,i*.4,6,s*.32,mt.ink,1.4),a.box(0,33,0,i*.29,52,s*.89,mt.ink,2.5),a.box(-i*.155,36,0,1.6,46,s*.84,mt.darkGlass,.6),a.oval(-i*.173,35,s*.34,1.2,1.2,1.2,mt.honey),zm(a.finish(85),i,s);if(e==="table"||e.includes("dining-set"))c=v2(a,i,s,r||mt.oakLight,e);else if(e==="diningTable"||/^living-(?:petal|round|rectangular)-dining-table-/.test(e)){let l=e==="diningTable"?"classic":e.includes("round-dining")?"round":"styled";c=Zl(a,i,s,r||(l==="classic"?mt.oak:mt.oakLight),l)}else if(e==="diningChair"||e.startsWith("living-dining-chair-"))c=b2(a,i,s,r||mt.denim);else if(e==="desk"||e.includes("-desk-"))c=M2(a,i,s,r||mt.oakLight,e==="desk"||e.includes("corner-desk"));else if(e==="chair"||e==="stool"||e.includes("desk-chair"))mi(a,0,0,i,s,0,r||mt.lilac,e==="stool"),c=e==="stool"?50:60;else if(e==="armchair"||e.includes("acorn-armchair")){mi(a,0,0,i,s,0,r||mt.lilac,!0);for(let l of[-1,1])a.box(l*i*.37,16,0,i*.19,25,s*.83,mt.lilac,6.5);c=51}else if(e==="bed"||/(?:bed|crib)-/.test(e))c=S2(a,i,s,r||mt.lilac,e);else if(e==="rug")c=E2(a,i,s,n.rugStyle);else if(e==="counter"||e==="kitchenWorktop"||e==="doubleVanity")c=A2(a,i,s,n);else if(e==="tub"||e==="toilet"||e==="bathFixtures")c=R2(a,i,s,e);else if(e==="plant"||e==="floorPlant")c=P2(a,i,s,e!=="plant");else if(e==="wallUnit")a.box(0,48,0,i,17,s*.62,mt.linen,4),a.box(0,51,s*.32,i*.89,4,1.8,mt.ink,.6),a.box(-i*.34,56,s*.32,i*.11,2.1,2.1,mt.blue,.7),c=65;else if(["storage","shelf"].includes(o.artFamily)||o.form==="lowShelf")c=I2(a,i,s,o);else if(/dresser|nightstand|bookcase|storageCabinet/.test(e))c=w2(a,i,s,r||mt.oakLight,e);else if(/coffeeTable|sideTable|bedroomBench|coffee-table|side-table|low-play-table/.test(e)){let l=e==="bedroomBench"?26:30;Yi(a,0,0,i,s,l-4),a.box(0,l-5,0,i,8,s,r||mt.oakLight,3.4),e==="bedroomBench"&&a.box(0,l+2,0,i*.87,6.2,s*.91,mt.lilacLight,2.6),c=l+8}else if(e.includes("bunny-plush")||e.includes("plush-bear")||e.includes("bear-floor-chair"))c=C2(a,i,s,e.includes("bunny"),e.includes("floor-chair"));else return null}return a.finish(c)}var Kt={cream:16049354,oat:13810076,honey:12421984,rose:12023932,ink:5784146,muted:9404799,plum:6706803,sage:9349263,mint:11982271,teal:4353640,glass:12047575,blue:7379366,warm:16767915,gold:14989425,dark:3553100,ember:15640419,tile:7820909,paleTile:8412532,brass:12355671},Ea=Math.PI,_f=2*Ea,L2=new Set(["unknown","unavailable"]),ei=(n,t,e)=>Math.max(t,Math.min(e,n)),wa=(n,t)=>Number.isFinite(n)?ei(n,12,480):t,Qm=.96,t0=.09;function e0(n,t,e){let i=wa(n.w,42),s=wa(n.h,42);return Math.abs(t)<=i/2&&Math.abs(e-s*t0)<=s*Qm/2}var he=(n,t={})=>new Ne({color:n,roughness:.83,...t}),Mf=n=>String(n?.state??"unknown"),$s=n=>!L2.has(Mf(n)),jr=n=>$s(n)&&(n.active===!0||n.state==="on"),N2=n=>jr(n)?Number.isFinite(n.attributes?.brightness)?ei(n.attributes.brightness/255,0,1):1:0,jl=n=>(typeof window>"u"?globalThis:window).RoomcraftInventory?.byType?.[n];function yi(n,t,e,i=0,s=0,r=0){let o=new ne(t,e);return o.position.set(i,s,r),n.add(o),o}function $e(n,t,e,i,s,r=0,o=0,a=0){return yi(n,new xe(t,e,i),s,r,o,a)}function ln(n,t,e,i,s,r=0,o=0,a=0,c=3){let l=Math.min(c,t/3,e/3,i/3),u=l-t/2,f=l-e/2,h=new Ke;h.moveTo(u,f),h.lineTo(-u,f),h.lineTo(-u,-f),h.lineTo(u,-f),h.closePath();let d=new ui(h,{depth:i-2*l,bevelThickness:l,bevelSize:l,bevelSegments:2});return d.translate(0,0,l-i/2),yi(n,d,s,r,o,a)}function qe(n,t,e,i,s,r=0,o=0,a=0,c=16){return yi(n,new Re(t,e,i,c),s,r,o,a)}function gi(n,t,e,i,s,r){return yi(n,new ve(t,10,7),e,i,s,r)}function Zr(n,t=0,e=0,i=0){let s=new Jt;return s.position.set(t,e,i),n.add(s),s}function D2(n,t,e=2.8){let i=new ze({transparent:!0,depthWrite:!1,blending:Wi,uniforms:{strength:{value:0},tint:{value:new Wt(Kt.warm)}},vertexShader:"varying vec2 floorUV; void main(){floorUV=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`
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
      }`}),s=yi(n,new wn(2*t,2*t),i,0,e,0);return s.rotation.x=-Ea/2,s.visible=!1,(r,o)=>{s.visible=r>0,i.uniforms.strength.value=r*.29,i.uniforms.tint.value.copy(o)}}function F2(n,t,e,i){let s=new Jt,r=n.type,o=jl(r),a=String(n.lightForm??o?.lightForm??""),c=r==="pendantLight"||a==="star_pendant",l=r==="ceilingLight"||c||a==="bloom_ceiling",u=r==="floorLamp"||a==="cloud_floor_lamp",f=r==="wallSconce"||a==="acorn_sconce",h=l&&/fan light/i.test(n.name??""),d=Math.min(t,e),p=o?.palette,y=new Wt(p?.detail??Kt.cream),m=he(p?.base??Kt.honey,{roughness:.53}),g=he(p?.dark??Kt.ink),x=he(Kt.brass,{roughness:.36,metalness:.42}),v=he(y,{emissive:Kt.warm,emissiveIntensity:0}),_=new Wt(Kt.warm),b=h?46:c?50:l?56:f?i.mountY??40:u?56:36,M=!l&&!u&&!f,T=M?ei(d*.68,15,46):ei(d*(l?1.72:1.35),38,110),S=D2(s,T,M?16.8:2.8);if(l){let R=d*(h?.19:.29);if(qe(s,R,R*1.02,3,g,0,b+2),c&&qe(s,1.7,1.7,13,m,0,b+9),qe(s,R*.82,R,5,m,0,b-1.5),qe(s,R*.92,R*.96,1.15,x,0,b+1.1),a==="star_pendant"||a==="bloom_ceiling"){let P=yi(s,new Ko(R*.96,0),v,0,b,0);P.scale.y=c?1.03:.56}else{let P=gi(s,R*.83,v,0,b,0);P.scale.y=c?.88:.52}}else if(f)ln(s,d*.34,18,4,g,0,b-5,-4),qe(s,d*.12,d*.11,14,m,0,b-3,3),a==="acorn_sconce"?(qe(s,d*.15,d*.22,13,v,0,b+4,3,10),qe(s,d*.22,d*.218,1.2,x,0,b-2.3,3,10)):gi(s,d*.21,v,0,b+3,3);else{let R=b-7,P=u?3:16,I=d*(u?.25:.3);if(qe(s,I*.57,I*.67,4,g,0,P),qe(s,2,2.9,R-P,m,0,(P+R)/2),u)gi(s,I*.81,v,0,b,0);else{let F=a==="bud_lamp"?12:9;if(a==="bud_lamp"){let H=new Re(I*.56,I,14,F*2),B=H.attributes.position;for(let Y=0;Y<B.count;Y++){let G=B.getX(Y),V=B.getZ(Y);Math.round(Math.atan2(G,V)*F/Math.PI)%2&&B.setXYZ(Y,G*.92,B.getY(Y),V*.92)}H.computeVertexNormals(),yi(s,H,v,0,b,0)}else qe(s,I*.56,I,14,v,0,b,0,F);qe(s,I,I*.99,1.2,x,0,b-6.7,0,F),qe(s,I*.55,I*.58,1.1,x,0,b+7.1,0,F)}}return{root:s,anchorY:b+2,animate(R){let P=N2(R),I=R?.attributes?.rgb_color;if(Array.isArray(I)&&I.length===3&&I.every(Number.isFinite)){let[F,H,B]=I.map(Y=>ei(Y/255,0,1));_.setRGB(F,H,B,Ge)}else _.setHex(Kt.warm);S(P,_),v.emissiveIntensity=P*.88,v.emissive.copy(_),P>0?v.color.copy(_):v.color.copy(y)}}}function U2(n,t){let e=new Ke;e.moveTo(n*.1,-n*.061),t?(e.bezierCurveTo(n*.42,-n*.15,n*.76,-n*.42,n,-.024*n),e.bezierCurveTo(n*.87,n*.25,n*.49,n*.28,n*.1,n*.063)):(e.bezierCurveTo(n*.39,-n*.094,n*.62,-n*.16,n*.88,-n*.14),e.bezierCurveTo(n*1.01,-n*.11,n*1.03,n*.07,n*.88,n*.13),e.bezierCurveTo(n*.62,n*.2,n*.42,n*.13,n*.1,n*.063)),e.closePath();let i=new ui(e,{depth:1.8,bevelEnabled:!0,bevelSize:.6,bevelThickness:.48,bevelSegments:1,curveSegments:5});return i.translate(0,0,-.9),i.rotateX(-Ea/2)}function Km(n,t,e,i){let s=new Jt,r=Math.min(t,e)*(i?.37:.46),o=i?r+11:59,a=Zr(s,0,o,0);i&&(a.rotation.x=Ea/2);let c=Zr(a,0,-1,0);c.name="Fan blades";let l=jl(n.type),u=l?.form==="palm",f=he(l?.palette.accent??Kt.cream),h=he(l?.palette.dark??Kt.ink),d=l?.palette.base??(/(?:white|cream)$/.test(n.type)?Kt.oat:/(?:forest|sage)$/.test(n.type)?Kt.sage:Kt.honey),p=he(d),y=u?he(l.palette.accent):null,m=i||/three-blade/.test(n.type)?3:/four-blade/.test(n.type)?4:5;qe(a,r*.18,r*.2,6,h),qe(a,r*.174,r*.176,1.4,he(Kt.brass,{roughness:.36,metalness:.42}),0,3.4),qe(a,r*.15,r*.17,2.6,f,0,4.9);let g=U2(r,u);for(let x=0;x<m;x++){let v=Zr(c);if(v.rotation.y=x/m*_f,yi(v,g,p),y){$e(v,r*.72,.5,.55,y,r*.52,1.45);for(let _=0;_<4;_++)for(let b of[-1,1]){let M=$e(v,r*(.1+.025*_),.46,.48,y,r*(.45+.11*_),1.39,b*r*.043);M.rotation.y=b*.68}}}if(i){ln(s,r*1.66,6,r*1.02,h,0,3),$e(s,r*.3,11,6,f,0,10);let x=yi(s,new cn(r,2.6,6,24),f,0,o,3);x.rotation.z=.04;for(let v=-1;v<=1;v++){let _=v*r*.5;qe(s,.68,.68,2*Math.sqrt(r*r-_*_),h,_,o,5,6)}}return{root:s,anchorY:o,...i?{}:{anchorOffset:{x:r*.76,z:0}},animate(x,v=0){let _=Number.isFinite(x?.attributes?.percentage)?ei(x.attributes.percentage/100,.12,1):.64;c.rotation.y=jr(x)?v*_f*_%_f:0}}}function k2(n,t){let e=new Jt,i=t.mountY??39,s=Zr(e,0,i),r=ei(n*.72,17,27);ln(s,r,31,5,he(Kt.ink),0,0,-.5),ln(s,r-1.9,29,4.4,he(Kt.cream),0,.3,1);let o=he(Kt.oat,{emissive:Kt.warm,emissiveIntensity:0}),a=ln(s,r*.55,17.5,3.2,o,0,3.2,3.5),c=Array.from({length:3},(l,u)=>{let f=he(Kt.teal,{emissive:Kt.mint,emissiveIntensity:0});return gi(s,1.85,f,(u-1)*r*.24,-10.3,3.55)});return{root:e,anchorY:i,animate(l,u=0){a.rotation.x=$s(l)?jr(l)?-.16:.16:0,o.emissiveIntensity=jr(l)?.42:0;let f=l?.presence==="on";for(let h=0;h<c.length;h++){let d=f?.5+.5*Math.cos(u*5-h*1.23):0;c[h].material.color.setHex(f?Kt.mint:Kt.teal),c[h].material.emissiveIntensity=f?.75+d*1.9:0,c[h].scale.setScalar(f?1+d*.18:1)}}}}function Jm(n,t,e,i=31){let s=new Jt,r=36.5,o=Math.max(12,n-6),a=he(Kt.oat);if(t){let h=he(Kt.glass,{roughness:.32});$e(s,o,i,3.2,h,0,r,0);for(let p of[-o/2+1.6,0,o/2-1.6])$e(s,3.2,i+2,7.5,a,p,r);let d=r+i/2;$e(s,o,1.8,7,h,0,d+.35);for(let p of[-4.25,4.25])$e(s,o+2,3.2,1.5,a,0,d,p);$e(s,o+3,3.8,11,a,0,r-i/2,1.4),$e(s,o,1.35,.5,he(Kt.cream),0,r+6.2,2)}if(!e)return{root:s,anchorY:r};let c=he(Kt.cream),l=r+i/2-1;ln(s,o+2,4.6,7,a,0,l+.75,6.7,1.6);let u=Array.from({length:8},(h,d)=>$e(s,o-5,i/8-.45,3,c,0,l-d*(i/8),6.9)),f=0;return{root:s,anchorY:r+1.5,animate(h,d,p,y=!1){let m=Sf(h),g=m===null?y?0:f:1-m;y||(f=g);let x=Number.isFinite(h?.attributes?.current_tilt_position)?ei(h.attributes.current_tilt_position/100,0,1):0;for(let v=0;v<u.length;v++){let _=ei(g*u.length-v,0,1);u[v].visible=_>.02,u[v].scale.y=_,u[v].rotation.x=x*.9}}}}function Sf(n){return $s(n)?Number.isFinite(n.attributes?.current_position)?ei(n.attributes.current_position/100,0,1):["open","on"].includes(n.state)?1:["closed","off"].includes(n.state)?0:null:null}function O2(n,t){let e=new Jt,i=t*.72,s=n*.74,r=i/2,o=Math.min(48,n*.38),a=Math.min(23,n*.19),c=he(Kt.oat),l=he(Kt.cream),u=he(Kt.plum),f=[he(Kt.tile),he(Kt.paleTile)],h=he(Kt.dark);$e(e,n,5,t*Qm,l,0,2.5,t*t0),$e(e,n*.88,o+4,5,c,0,(o+4)/2,-r+2);for(let I of[-n*.42,n*.42])$e(e,n*.09,o+4,i,c,I,(o+4)/2),ln(e,n*.1,o+4,5,l,I,(o+4)/2,r+1,1.5);let d=new Ke;d.moveTo(-n*.49,0),d.lineTo(n*.49,0),d.lineTo(0,a),d.closePath();let p=new ui(d,{depth:i+11,bevelThickness:1.5,bevelSize:1.5,bevelSegments:2});p.translate(0,0,-r-5.5),yi(e,p,u,0,o+4);let y=n*.49,m=Math.atan2(a,y),g=Math.hypot(a,y),x=(i+11)/8,v=[[],[]];for(let I of[-1,1])for(let F=0;F<8;F++){let H=-r-5.5+(F+.5)*x,B=new xe(g*.97,2.2,x-.62);B.rotateZ(-I*m),B.translate(I*y*.5,o+5.65+a*.5,H),v[F%2].push(B)}v.forEach((I,F)=>{yi(e,On(I),f[F]),I.forEach(H=>H.dispose())}),ln(e,4,4.5,i+12,u,0,o+a+5.6,0,1.5),$e(e,n*.95,3.5,3.5,l,0,o+4,r+5.5),$e(e,s,o,1.5,h,0,o/2+4,r-4);for(let I of e.children)I.isMesh&&(I.castShadow=!0);let _=he(Kt.mint),b=he(Kt.sage),T=(o-3)/6,S=Array.from({length:6},(I,F)=>{let H=Zr(e,0,o-(F+.5)*T+2,r+.5);return ln(H,s-2,T-.7,3.4,_,0,0,0,1.2),$e(H,s*.91,.68,.7,b,0,T*.23,1.8),F===5&&ln(H,s*.13,2,2.2,l,0,0,2.3,.55),H}),R=he(Kt.gold,{emissive:Kt.ember,emissiveIntensity:0});gi(e,3.7,R,n*.422,o*.73,r+4.5);let P=0;return{root:e,anchorY:o*.62,anchorOffset:{x:0,z:r},animate(I,F=0,H,B=!1){let G=Sf(I)??(B?0:P);B||(P=G),_.color.setHex($s(I)?Kt.mint:Kt.muted),b.color.setHex($s(I)?Kt.sage:Kt.muted);let V=(1-G)*S.length;S.forEach((J,W)=>{let st=ei(V-W,0,1);J.visible=st>.02,J.scale.y=st,J.position.y=o-(W+st/2)*T+2});let ft=["opening","closing"].includes(Mf(I));R.emissiveIntensity=ft?.55+(.5+.5*Math.cos(F*6)):0}}}function B2(n){let t=new Jt,e=46,i=he(Kt.cream),s=he(Kt.honey),r=Math.min(n*.86,88),o=Zr(t,-r/2,0,0);for(let c of[-r/2-1,r/2+1])$e(t,3.4,e,5,i,c,e/2);$e(t,r+4,3,5,i,0,e),ln(o,r-2,e-4,4,s,r/2,e/2,0,2),gi(o,2.2,he(Kt.gold),r-6,e*.47,2.8);let a=0;return{root:t,anchorY:e/2,animate(c,l,u,f=!1){let d=Sf(c)??(f?0:a);f||(a=d),o.rotation.y=-1.32*d,s.color.setHex($s(c)?Kt.honey:Kt.muted)}}}function z2(n,t,e){let i=new Jt,s=n.type!=="wallUnit",r=e.mountY??(s?42:48),o=ei(t*.85,23,126),a=he(Kt.dark,{emissive:Kt.mint,emissiveIntensity:0});if(ln(i,o,s?25:18,8,he(Kt.cream),0,r,0),s){ln(i,o*.7,11,1.9,a,0,r+2,4.1);for(let c of[-.22,0,.22])gi(i,1.35,he(Kt.oat),o*c,r-7,4.3)}else $e(i,o*.89,2.2,.7,a,0,r-4,4.2);return{root:i,anchorY:r,animate(c){let l=c?.attributes?.hvac_action,u=l==="heating",f=$s(c)&&["cooling","heating","drying","fan"].includes(l);a.emissive.setHex(u?Kt.warm:Kt.glass),a.emissiveIntensity=f?1.15:jr(c)?.25:0}}}function H2(n,t,e){let i=new Jt,s=Math.min(t,e)*.74,r=n.type==="humidifier",o=r?25:30,a=he(Kt.cream),c=he(r?Kt.glass:Kt.sage),l=he(Kt.teal,{emissive:Kt.mint,emissiveIntensity:0}),u=o-1;if(qe(i,s*.46,s*.5,4,he(Kt.ink),0,2),r){let d=gi(i,s/2,c,0,13,0);d.scale.y=22/s,qe(i,s*.19,s*.22,3.5,a,0,u)}else{ln(i,s,24,s*.82,c,0,15,0,5),ln(i,s*.91,3.8,s*.71,a,0,u);for(let d=-1;d<=1;d++)$e(i,s*.66,1.2,1.1,l,0,u+2,d*3.5)}gi(i,1.6,l,s*.18,u-2,s*.31);let f=he(Kt.glass,{transparent:!0,opacity:.54,depthWrite:!1}),h=Array.from({length:3},(d,p)=>gi(i,2.1+p*.6,f,0,u+3,0));return{root:i,anchorY:u,animate(d,p=0){let y=jr(d);l.emissiveIntensity=y?1.6:0;for(let m=0;m<h.length;m++){h[m].visible=y;let g=(p*.68+m/h.length)%1;h[m].position.set(Math.sin(g*Ea)*3.1,u+4+g*14,0),h[m].scale.setScalar(.7+g*.62)}}}}function G2(n,t,e){let i=new Jt,s=jl(n.type),r=s?.form,o=Math.min(t,e)*.42,a=.72;i.scale.setScalar(a);let c=he(Kt.sage,{emissive:Kt.mint,emissiveIntensity:0}),l=he(s?.palette.dark??Kt.ink),u=he(s?.palette.base??Kt.cream,{roughness:.46}),f=r==="slim"?1.22:1,h=qe(i,o,o*.95,r==="slim"?4.8:7,l,0,4.6),d=qe(i,o*.96,o,r==="slim"?3.6:5.5,u,0,r==="slim"?8.4:10.2);h.scale.x=d.scale.x=f,qe(i,o*.28,o*.33,4,he(Kt.oat),0,14,-o*.23);for(let m of[-.27,.27])gi(i,o*.105,l,o*m,10,o*.88);let p=ln(i,o*.68,1.2,2.5,c,0,13.2,o*.36);if(r==="mop"){let m=he(s.palette.accent);for(let g of[-1,1])qe(i,o*.39,o*.4,2.1,m,g*o*.45,1.8,o*.51)}let y;if(r==="docked"){y=new Jt,y.name="Vacuum charging dock";let m=he(s.palette.accent);ln(y,o*1.36,1.8,o*.95,l,0,1.2,-o*.59,.4),ln(y,o*1.36,o*.53,o*.35,m,0,o*.3,-o*.94,1.4),$e(y,o*.5,.9,.9,l,0,o*.41,-o*.75)}return{root:i,dock:y,anchorY:12,floorRadius:o*1.03*a*f,animate(m,g=0,x=!1){let v=["cleaning","returning"].includes(Mf(m));p.material.emissiveIntensity=v?x?.6+.5*Math.cos(g*6):.3:0}}}function wf(n){return n.type==="controlZone"&&(n.visualKind==="window"||(!n.visualKind||n.visualKind==="auto")&&typeof n.entityId=="string"&&n.entityId.startsWith("cover."))}function n0(n,t={}){let e=wa(n.w,42),i=wa(n.h,42),s=String(n.type??""),r=n.visualKind;return s==="cameraThumbnail"||s.startsWith("ui")?null:s==="presenceSwitch"?k2(e,t):s==="garageDoor"?O2(e,i):s==="door"||r==="door"?B2(e):s==="window"?Jm(e,!0,!!n.entityId):s==="controlZone"?wf(n)?Jm(wa(t.window?.w,e),!1,!0):null:s==="wallUnit"||s==="thermostat"||r==="climate"?z2(n,e,t):s==="airPurifier"||s==="humidifier"?H2(n,e,i):r==="vacuum"||/^cleaning-.*robot/.test(s)?G2(n,e,i):s==="windowFan"?Km(n,e,i,!0):r==="fan"||/^fans-/.test(s)?Km(n,e,i,!1):r==="light"||n.lightForm||jl(s)?.lightForm||/^(?:lamp|ceilingLight|pendantLight|floorLamp|tableLamp|wallSconce)$/.test(s)?F2(n,e,i,t):null}var c0=po($r(),1),{difference:l0,union:u0}=c0.default,Ql=18,Xn=.001,Ci=(n,t)=>n[0]*t[0]+n[1]*t[1],Zs=(n,t)=>n[0]*t[1]-n[1]*t[0],Ii=(n,t)=>[n[0]-t[0],n[1]-t[1]],Fe=(n,t,e)=>[n[0]+t[0]*e,n[1]+t[1]*e],eu=([n,t])=>[-t,n],i0=(n,t,e,i)=>[[n,t],[e,t],[e,i],[n,i]],Kl=n=>n.map(({x:t,y:e})=>[t,e]),$i=n=>[n.map(t=>t.map(e=>Math.round(e*1e5)/1e5))],h0=n=>n.length?u0(...n):[];function tu(n,t,e,i=0){let s=Ii(t,n),r=Math.hypot(...s);if(r<Xn)return null;let o=s.map(u=>u/r),a=eu(o),c=Fe(n,o,-i),l=Fe(t,o,i);return $i([Fe(c,a,e),Fe(l,a,e),Fe(l,a,-e),Fe(c,a,-e)])}function Jl(n,t){let[e,i]=t,s=!1;for(let r=0,o=n.length-1;r<n.length;o=r++){let[a,c]=n[r],[l,u]=n[o];c>i!=u>i&&e<(l-a)*(i-c)/(u-c)+a&&(s=!s)}return s}function s0(n){return n.flatMap((t,e)=>{let i=n[(e+1)%n.length],s=Ii(i,t),r=Math.hypot(...s);return r>Xn?[{start:t,end:i,length:r,tangent:s.map(o=>o/r)}]:[]})}function V2(n,t,e,i){if(Math.abs(Ci(n.tangent,t.tangent))<.9999)return null;let s=eu(n.tangent),[r,o]=[t.start,t.end].map(y=>Ii(y,n.start)),a=Ci(r,s);if(Math.abs(a)<.1||Math.abs(a)>Ql||Math.abs(a-Ci(o,s))>.1)return null;let c=[Ci(r,n.tangent),Ci(o,n.tangent)].sort((y,m)=>y-m),l=Math.max(0,c[0]),u=Math.min(n.length,c[1]);if(u-l<8)return null;let f=Fe(n.start,n.tangent,(l+u)/2),h=Math.sign(a);if(!Jl(e,Fe(f,s,-h))||!Jl(i,Fe(f,s,a+h))||Jl(e,Fe(f,s,a/2))||Jl(i,Fe(f,s,a/2)))return null;let d=Fe(n.start,n.tangent,l),p=Fe(n.start,n.tangent,u);return $i([Fe(d,s,-h*.05),Fe(p,s,-h*.05),Fe(p,s,a+h*.05),Fe(d,s,a+h*.05)])}function f0(n){let t=[],e=[];for(let i of[...n].reverse()){let s=h0(i.polygons);if(!s.length)continue;let r=t.length?l0(s,t):s;r.length&&e.push({surface:i.surface,polygons:r}),t=t.length?u0(t,s):s}return{footprint:t,regions:e.reverse()}}function Kr(n){return n.outdoor===!0||n.outdoor!==!1&&n.surface==="patio"}function Ef(n,t,e=!1){let i=n.map(h=>({surface:h.surface,points:Kl(h.points),polygons:[$i(Kl(h.points))],outdoor:e&&Kr(h)})),s=[];for(let[h,d]of i.entries())for(let p of i.slice(h+1))for(let y of s0(d.points))for(let m of s0(p.points)){let g=V2(y,m,d.points,p.points);g&&s.push({surface:d.surface,polygons:[g],outdoor:d.outdoor||p.outdoor})}let r=[],o=[];if(t){let{left:h,deckEdge:d,stepBottom:p,deckBottom:y,northDeck:m,southDeck:g,recess:x}=t;r.push({surface:"patio",polygons:[$i(Kl(m)),$i(Kl(g)),$i(i0(h,p,d+1,y))]}),x.x2>x.x1&&x.z2>x.z1&&o.push({surface:"oak",polygons:[$i(i0(x.x1,x.z1,x.x2,x.z2))]})}let a=[...s,...i],c=[...o,...a.filter(h=>!h.outdoor)],l=[...r,...a.filter(h=>h.outdoor)],u=f0([...l,...c]),f=t||e?h0(c.flatMap(h=>h.polygons)):[];return{...u,foundation:f}}function W2(n,t,e,i){let s=Zs(t,e);if(Math.abs(s)<.13)return null;let r=Math.sign(s)*-i,o=Fe(n,eu(t),r),a=Fe(n,eu(e),-r),c=Zs(Ii(a,o),e)/s,l=Fe(o,t,c);return Math.hypot(...Ii(l,n))>i*2.5?$i([n,o,a]):$i([n,o,l,a])}function r0(n,t){let e=Zs(n.tangent,t.tangent);if(Math.abs(e)<.13)return null;let i=Ii(t.point,n.point);return[Zs(i,t.tangent)/e,Zs(i,n.tangent)/e]}function X2(n){let t=n.flatMap(i=>[{wall:i,point:[i.x1,i.y1],tangent:[i.dx,i.dz]},{wall:i,point:[i.x2,i.y2],tangent:[-i.dx,-i.dz]}]),e=[];for(let[i,s]of t.entries()){for(let r of t.slice(i+1)){if(s.wall===r.wall)continue;let o=Ii(r.point,s.point);if(Math.hypot(...o)>Ql)continue;let a=r0(s,r);a&&a.every(c=>c>=-Ql&&c<=Xn)?e.push({a:s,b:r,center:Fe(s.point,s.tangent,a[0])}):!a&&Ci(s.tangent,r.tangent)<0&&Ci(o,s.tangent)<=Xn&&Ci(o,r.tangent)>=-Xn&&e.push({a:s,b:r})}for(let r of n){if(s.wall===r)continue;let o={wall:r,point:[r.x1,r.y1],tangent:[r.dx,r.dz]},a=r0(s,o);if(!a)continue;let[c,l]=a;c<-Ql||c>=-Xn||l<=Xn||l>=r.length-Xn||r.openings.some(({start:u,end:f})=>l>=u&&l<=f)||e.push({a:s,center:Fe(s.point,s.tangent,c)})}}return e}function o0({a:n,b:t,center:e},i){return e?[tu(n.point,e,i,.1),t&&tu(t.point,e,i,.1),t&&W2(e,n.tangent,t.tangent,i)].filter(Boolean):[tu(n.point,t.point,i,.1)].filter(Boolean)}function d0(n){return n.flatMap(t=>t.flatMap(e=>e.slice(1).map((i,s)=>[e[s],i])))}function q2(n,t){return d0(n).flatMap(([e,i])=>{let s=Ii(i,e),r=Math.hypot(...s);if(r<Xn)return[];let o=s.map(a=>a/r);return t.flatMap(([a,c])=>{let l=Ii(a,e),u=Ii(c,e);if(Math.abs(Zs(l,o))>Xn||Math.abs(Zs(u,o))>Xn)return[];let[f,h]=[Ci(l,o),Ci(u,o)].sort((y,m)=>y-m),d=Math.max(0,f),p=Math.min(r,h);return p-d>Xn?[[Fe(e,o,d),Fe(e,o,p)]]:[]})})}function a0(n,t){return t?.length?l0(n,t):n}function p0(n,t,e,i){let s=[],r=(c,l,u,f,h=0)=>{c&&u>l&&s.push({shape:c,from:l,to:u,surface:f,priority:h})};for(let c of n){let{palette:[l,u,f]}=c,h=[c.x1,c.y1],d=[c.dx,c.dz],p=(x,v,_,b,M,T,S)=>{v-x>Xn&&r(tu(Fe(h,d,x),Fe(h,d,v),M/2),_,b,T,S)},y=c.openings.length?i:0,m=(x,v)=>{p(x,v,y,e,t,l,2),p(x,v,e-1,e+2,t+3,u,1)};y&&p(0,c.length,0,y,t,l,2);let g=0;for(let x of c.openings)m(g,x.start),g=Math.max(g,x.end);m(g,c.length),p(0,c.length,0,3,t+3,f,1)}for(let c of X2(n)){let[l,u,f]=c.a.wall.palette;for(let h of o0(c,t/2))r(h,0,e,l,2);for(let h of o0(c,(t+3)/2))r(h,e-1,e+2,u,1),r(h,0,3,f,1)}let o=[...new Set(s.flatMap(({from:c,to:l})=>[c,l]))].sort((c,l)=>c-l),a=o.slice(1).map((c,l)=>{let u=o[l],f=new Map,h=s.filter(d=>d.from<=u&&d.to>=c);for(let{surface:d,shape:p}of h.sort((y,m)=>y.priority-m.priority))f.has(d)||f.set(d,{surface:d,polygons:[]}),f.get(d).polygons.push(p);return{...f0([...f.values()]),bottom:u,top:c}});return a.flatMap(({regions:c,footprint:l,bottom:u,top:f},h)=>{let d=d0(l);return c.map(p=>({...p,bottom:u,top:f,faces:{top:a0(p.polygons,a[h+1]?.footprint),bottom:u===0?[]:a0(p.polygons,a[h-1]?.footprint),sides:q2(p.polygons,d)}}))})}var Y2=new Map([["partlycloudy",.32],["cloudy",.84],["windy-variant",.7],["fog",.95],["snowy",.82],["snowy-rainy",.92],["hail",.94],["rainy",.88],["pouring",.97],["lightning",.91],["lightning-rainy",.98]]),$2=(n,t,e)=>Math.min(e,Math.max(t,n)),m0=n=>n*Math.PI/180;function js(n,t,e){let i=$2((n-t)/(e-t),0,1);return i*i*(3-2*i)}function Zi(n={}){let{sunElevation:t,sunAzimuth:e,sunRising:i,condition:s,night:r,cloudCoverage:o}=n,a=Number.isFinite(t)&&Math.abs(t)<=90?t:r||s==="clear-night"?-18:38,c=Number.isFinite(e)&&e>=0&&e<=360?e%360:void 0,l=typeof i=="boolean"?i:c!==void 0&&c<180,u=a<19&&a>-12,f=c??(u?l?90:270:150),h=Math.max(Y2.get(s)??0,Number.isFinite(o)&&o>=0&&o<=100?o/100:0);return{elevation:a,azimuth:f,rising:l,cloud:h,phase:u?l?"sunrise":"sunset":a<=-12?"night":"day",daylight:js(a,-10,18),twilight:js(a,-12,-3)*(1-js(a,3,19)),lowSun:js(a,-1,4)*(1-js(a,9,33)),disc:js(a,-.9,.8),east:Math.sin(m0(f)),north:Math.cos(m0(f))}}function g0(){let n,t,e=0;function i(s){let r=js(s-e,0,.8);if(!n||r>=1)return t;let o=(t.azimuth-n.azimuth+540)%360-180;return Zi({sunElevation:n.elevation+(t.elevation-n.elevation)*r,sunAzimuth:(n.azimuth+o*r+360)%360,sunRising:t.rising,cloudCoverage:(n.cloud+(t.cloud-n.cloud)*r)*100})}return(s,r,o=!1)=>!t||o||!Number.isFinite(r)||r<e?(n=void 0,t=s,e=Number.isFinite(r)?r:0,t):((s.elevation!==t.elevation||s.azimuth!==t.azimuth||s.rising!==t.rising||s.cloud!==t.cloud)&&(n=i(r),t=s,e=r),i(r))}var Tf=3,Z2=8,j2={night:["#a8b8f5","#5b536e","#a7b8ed","#97a5c5","#343951"],clear:["#f2f5ff","#998b85","#fff0d9","#f4f1d8","#c0cbb4"],overcast:["#dce6f1","#8c8797","#e9eff9","#ccd6c6","#aebbb4"]},Af=Object.fromEntries(Object.entries(j2).map(([n,t])=>[n,t.map(e=>new Wt(e))])),K2={sunrise:["#f6bfc2","#947b96","#ffd29d","#f0c7b7","#767d9c"],sunset:["#f1ad90","#8d647a","#ffaf71","#eab290","#80677f"]},J2=Object.fromEntries(Object.entries(K2).map(([n,t])=>[n,t.map(e=>new Wt(e))])),y0={ultra:{size:4096,type:ys,radius:4.2},high:{size:2048,type:ys,radius:3.4},low:{size:1024,type:Rh,radius:3.4}},{clamp:Q2,lerp:Jr,smoothstep:tw}=te;function x0(n,t,e){n.toneMapping=aa,n.toneMappingExposure=1.07,n.shadowMap.autoUpdate=!1;let i=new Vs("#fff4e5","#897e91",1.13),s=new ps("#fff0d4",2.15),r=new ps("#dbeaff",.24),{minX:o,maxX:a,minZ:c,maxZ:l}=e,u=(o+a)/2,f=(c+l)/2;s.position.set(u-610,1150,f-490),s.target.position.set(u,0,f),r.position.set(u+290,410,f+410);let h=Math.hypot(a-o,l-c)/2+175;Object.assign(s.shadow.camera,{left:-h,right:h,top:h,bottom:-h,near:20,far:2700}),s.shadow.camera.updateProjectionMatrix(),s.shadow.normalBias=1.15,s.shadow.bias=-12e-5;let d=Array.from({length:Z2},()=>new sa("#ffd7a5",0,145,2)),p=d.slice(Tf);t.add(i,s,s.target,r,...d.slice(0,Tf));let y=[],m,g,x,v,_,b=new Wt,M=new Wt;function T(){s.shadow.dispose(),s.shadow.map=null,s.shadow.mapPass=null}function S(F){let H=F==="off"||Object.hasOwn(y0,F)?F:"high";if(H===v)return;v=H;let B=y0[H];n.shadowMap.enabled=s.castShadow=!!B,T(),n.shadowMap.needsUpdate=!1,_=!!B,H==="ultra"?t.add(...p):t.remove(...p),m=void 0,g=void 0,x=void 0,B&&(n.shadowMap.type=B.type,s.shadow.mapSize.setScalar(Math.min(B.size,n.capabilities.maxTextureSize)),s.shadow.radius=B.radius)}S("high");function R(){for(let F of t.children)F.isMesh&&(F.receiveShadow=!0,F.geometry.computeBoundingBox(),F.castShadow=F.geometry.boundingBox.max.y+F.position.y>-99)}function P(F,H){let B=/(light|lamp|sconce)/i.test(F.type),Y=!H.animate||B;H.root.traverse(G=>{!G.isMesh||G.material.transparent||G.material.isShaderMaterial||(G.receiveShadow=!0,G.castShadow||=Y)}),B&&F.entityId&&F.visualKind!=="none"&&y.push({item:F,object:H})}function I(F,H,B,Y=!1){let{elevation:G,azimuth:V,rising:ft,daylight:J,twilight:W,lowSun:st,cloud:bt}=F.solar??Zi(F),Mt=Q2(G,-12,35),vt=v==="ultra",xt=`${ft}:${Math.round(Mt*(vt?16:4))}:${Math.round(bt*(vt?96:32))}`,yt=tw(G,-.85,9);if(xt!==m){let Ut=[i.color,i.groundColor,s.color,B.color,t.background],It=J2[ft?"sunrise":"sunset"];for(let[Pt,$t]of Ut.entries()){M.lerpColors(Af.clear[Pt],Af.overcast[Pt],bt),$t.lerpColors(Af.night[Pt],M,J);let U=Pt===2?st*.76:W*(Pt===4?.55:.43);$t.lerp(It[Pt],U*(1-bt*.73))}i.intensity=Jr(.63,1.13+bt*.17,J)+W*.17,s.intensity=.23+yt*Jr(1.91,.48,bt)*Jr(.46,1,J),r.intensity=Jr(.17,.23,J)+W*.08,s.shadow.intensity=yt*Jr(.83,.21,bt),m=xt,x=void 0}let $=vt?Math.round(V*2)/2:Math.round(V/2)*2,rt=Math.max(10,vt?Math.round(G*4)/4:Math.round(G)),Et=`${$}:${rt}`;if(yt>0&&Et!==g){let Ut=te.degToRad($),It=te.degToRad(rt),Pt=Math.cos(It)*1600;s.position.set(u+Math.sin(Ut)*Pt,Math.sin(It)*1600,f-Math.cos(Ut)*Pt),g=Et,_=!0}if(x!==H||Y){let Ut=y.flatMap(({item:It,object:Pt})=>{let $t=H[It.id];if($t?.state!=="on")return[];let U=Number.isFinite($t.attributes?.brightness)?te.clamp($t.attributes.brightness/255,0,1):1;return U>0?[{object:Pt,power:U,color:$t.attributes?.rgb_color}]:[]}).sort((It,Pt)=>Pt.power-It.power);for(let It=0;It<(vt?d.length:Tf);It++){let Pt=d[It],$t=Ut[It];if(!$t){Pt.intensity=0;continue}let{object:U,power:it,color:K}=$t;Array.isArray(K)&&K.length===3&&K.every(Number.isFinite)?(b.setRGB(...K.map(tt=>te.clamp(tt/255,0,1)),Ge),Pt.color.copy(b)):Pt.color.set("#ffd5a2"),Pt.position.copy(U.root.position),Pt.position.y+=Math.max(18,(U.anchorY-9)*U.root.scale.y),Pt.intensity=it*Jr(2350,1250,J)}x=H}n.shadowMap.enabled&&(_||Y&&yt>0)&&(n.shadowMap.needsUpdate=!0,_=!1)}return{markStructure:R,register:P,update:I,setShadowQuality:S,dispose:T}}var xi=(n,t,e)=>Object.freeze({label:n,azimuth:t,tilt:e,zoom:1}),nu=65,ew=88,iu=4400,nw=1900,b0=-111,v0=Object.freeze({default:xi("Default",0,0),top:xi("Top down",0,0),high:xi("High angle",0,15),dollhouse:xi("Dollhouse",2,30),corner:xi("Corner",45,40),north:xi("From north",180,42),east:xi("From east",90,42),south:xi("From south",0,42),west:xi("From west",270,42),waterfront:xi("Waterfront",0,15),free:xi("Free view",0,25)});function Ss(n="top"){let t=typeof n=="string"?{preset:n}:n??{},e=Object.hasOwn(v0,t.preset)?t.preset:"top",i=v0[e],s=Number.isFinite(t.azimuth)?t.azimuth:i.azimuth,r=e==="free"||e==="default"?ew:nu;return{preset:e,azimuth:(s%360+360)%360,tilt:Number.isFinite(t.tilt)?te.clamp(t.tilt,0,r):i.tilt,zoom:Number.isFinite(t.zoom)?te.clamp(t.zoom,.6,2.5):i.zoom}}function _0(n){if(n<=nu)return null;let t=te.smoothstep(n,nu,84);return{near:te.lerp(3530,2680,t),far:te.lerp(4260,3690,t)}}function M0(n,t){let e=Math.max(.4,t/1536*.68),i=te.clamp;return{w:Math.round(i((n?.w||170)*e,58,216)),h:Math.round(i((n?.h||110)*e,44,152))}}function S0(n,t,e,i,s="top",{focus:r,demoZoom:o}={}){let a=Ss(s);if(a.preset==="waterfront"&&t?.waterfront&&(t=t.waterfront),![t?.minX,t?.maxX,t?.minZ,t?.maxZ,e,i].every(Number.isFinite)||e<=0||i<=0||t.maxX<t.minX||t.maxZ<t.minZ)throw new Error("A finite scene bounding box and viewport are required.");let c=te.degToRad(a.azimuth),l=te.degToRad(a.tilt),u=new X((t.minX+t.maxX)/2,-5,(t.minZ+t.maxZ)/2),f=new X(Math.sin(c)*Math.sin(l),Math.cos(l),Math.cos(c)*Math.sin(l));n.up.set(-Math.sin(c)*Math.cos(l),Math.sin(l),-Math.cos(c)*Math.cos(l)),n.position.copy(u).addScaledVector(f,nw),n.lookAt(u),n.updateMatrixWorld(!0);let h=Math.max(92,Number.isFinite(t.maxY)?t.maxY:92),d=new Le,p=new X;for(let M of[t.minX-37,t.maxX+37]){for(let T of[t.minZ-53,t.maxZ+36])for(let S of[b0,h])d.expandByPoint(p.set(M,S,T).applyMatrix4(n.matrixWorldInverse));Number.isFinite(t.sceneryMinZ)&&d.expandByPoint(p.set(M,-106,t.sceneryMinZ-8).applyMatrix4(n.matrixWorldInverse))}if(Number.isFinite(t.sceneryMinZ)){let M=(d.max.y-d.min.y)*.025;d.min.y-=M,d.max.y+=M}let y=e/i,m=Math.max((d.max.x-d.min.x)/2,(d.max.y-d.min.y)/2*y),g=m/y,x=(d.min.x+d.max.x)/2,v=(d.min.y+d.max.y)/2;if([r?.x,r?.y,r?.z].every(Number.isFinite)){let{x:M,y:T}=p.set(r.x,r.y,r.z).applyMatrix4(n.matrixWorldInverse),S=Number.isFinite(r.weight)?te.clamp(r.weight,0,1):1;x=te.lerp(x,M,S),v=te.lerp(v,T,S)}n.left=x-m,n.right=x+m,n.bottom=v-g,n.top=v+g,n.zoom=Number.isFinite(o)?te.clamp(o,.6,4.5):a.zoom;let _=n.position.y+(v-g/n.zoom)*n.up.y,b=a.tilt>nu?Math.max(0,(b0+24-_)/f.y):0;return b>0&&(n.position.addScaledVector(f,b),n.updateMatrixWorld(!0)),n.far=iu+b,n.updateProjectionMatrix(),a}function w0(n,t){let e=n.modelHeight;if(!(typeof window>"u"?globalThis:window).RoomcraftModels.supportsHeight(n)||!Number.isFinite(e)||e<6||e>300)return 0;let{min:s,max:r}=new Le().setFromObject(t),o=r.y-s.y;if(!Number.isFinite(o)||o<.01)return 0;let a=e/o;return t.scale.y*=a,s.y*(1-a)}var Qr=(n,t)=>Math.hypot(n.x-t.x,n.y-t.y),su=(n,t,e)=>n+(t-n)*e;function E0(){let n,t,e,i,s,r=0,o,a=!1;function c(u){i=n,s=u,r=1,a=!1}function l(u,f){if(u.quality==="area")return t=n={x:u.x,y:u.y},e=o=void 0,c(void 0),{target:t,settled:!1};if(u.quality==="last-known")return{target:t??u,settled:!1};let h=Number.isFinite(u.expiresAt),d=h?u.expiresAt:f*1e3;if(h&&e!==void 0&&d<=e)return{target:t,settled:a};let p=e===void 0?0:d-e;if(e=d,!h||!n)return t=n={x:u.x,y:u.y},c(d),{target:t,settled:!1};let y=Qr(n,u);if(y>Math.max(76,p*.24)&&!(o&&d-o.marker<=3100&&Qr(o,u)<=32))return o={x:u.x,y:u.y,marker:d},c(d),{target:t,settled:!1};o=void 0;let g=y>42?.14:.42,x=1-Math.exp(-Math.max(.04,p/1e3)/g);return n={x:su(n.x,u.x,x),y:su(n.y,u.y,x)},Qr(t,n)>=7&&(t=n),!i||p>3100||Qr(i,u)>20?c(d):(r++,a=r>=3&&d-s>=3e3),{target:t,settled:a}}return{observe:l}}function T0({allowsPoint:n,findRoute:t,geometryRevision:e}){let i,s,r=[],o=0,a=0,c,l;function u(h,d){let p=c===void 0?0:Math.max(0,h-c)*115;if(c=h,e&&l!==e()&&(r=[],s=void 0),!i||!n(i.x,i.y))return i=s=void 0,r=[],null;for(d&&r.length&&(p=1/0);r.length&&p>0;){let y=r[0],m=Qr(i,y);if(m>0&&(a=Math.atan2(y.x-i.x,y.y-i.y)),m>p){i={x:su(i.x,y.x,p/m),y:su(i.y,y.y,p/m)},o+=p;break}i=r.shift(),o+=m,p-=m}return{...i,heading:a,step:o/33,walking:!d&&r.length>0}}function f(h,d,p){let y=u(d,p);if(l=e?.(),!h||!n(h.x,h.y))return!1;if(!y)return i=s=h,!0;if(s&&Qr(s,h)<.1)return!0;let m=t(y,h);return m?(r=[...m],s=h,p&&u(d,!0),!0):(r=[],s=void 0,!1)}return{aim:f,sample:u}}var iw={minX:0,maxX:1536,minZ:0,maxZ:1024},sw=12,A0=256,Rf=6,rw=[[1,0],[0,1],[-1,0],[0,-1],[1,1],[-1,1],[-1,-1],[1,-1]].map(([n,t])=>[n,t,Math.hypot(n,t)]),R0=n=>Number.isFinite(n?.x)&&Number.isFinite(n?.y),C0=(n,t)=>Math.hypot(n.x-t.x,n.y-t.y),Cf=class n{entries=[];static before(t,e){return t.estimate<e.estimate||t.estimate===e.estimate&&(t.cost>e.cost||t.cost===e.cost&&t.id<e.id)}push(t){let{entries:e}=this,i=e.length;for(;i>0;){let s=i-1>>1;if(!n.before(t,e[s]))break;e[i]=e[s],i=s}e[i]=t}pop(){let{entries:t}=this,e=t[0],i=t.pop();if(!t.length)return e;let s=0;for(;s*2+1<t.length;){let r=s*2+1;if(r+1<t.length&&n.before(t[r+1],t[r])&&r++,!n.before(t[r],i))break;t[s]=t[r],s=r}return t[s]=i,e}};function ow(n,t,e,i){let s=Math.floor(n.minX/t)*t,r=Math.floor(n.minZ/t)*t,o=Math.ceil((n.maxX-s)/t)+1,a=Math.ceil((n.maxZ-r)/t)+1,c=o*a,l=new Uint8Array(c),u=new Uint8Array(c),f=new Uint8Array(c),h=g=>({x:s+g%o*t,y:r+Math.floor(g/o)*t}),d=(g,x)=>g>=0&&g<o&&x>=0&&x<a;function p(g){if(!l[g]){let{x,y:v}=h(g);l[g]=e(x,v)?1:2}return l[g]===1}function y(g,x,v){return u[g]&v||(u[g]|=v,p(x)&&i(h(g),h(x))&&(f[g]|=v)),!!(f[g]&v)}function m(g,x){let v=Math.round((g.x-s)/t),_=Math.round((g.y-r)/t),b=new Map;for(let M=0;M<=3;M++){for(let T=-M;T<=M;T++)for(let S=-M;S<=M;S++){if(Math.max(Math.abs(S),Math.abs(T))!==M||!d(v+S,_+T))continue;let R=(_+T)*o+v+S;if(!p(R))continue;let P=h(R);(x?i(g,P):i(P,g))&&b.set(R,C0(P,g))}if(M>=1&&b.size)break}return b}return function(x,v){let _=m(x,!0),b=m(v,!1);if(!_.size||!b.size)return null;let M=new Cf,T=new Float64Array(c).fill(1/0),S=new Int32Array(c).fill(-1),R=(P,I,F=-1)=>{I>=T[P]||(T[P]=I,S[P]=F,M.push({id:P,cost:I,estimate:I+C0(h(P),v)}))};for(let[P,I]of _)R(P,I);for(let P=M.pop();P;P=M.pop()){let{id:I,cost:F}=P;if(F!==T[I])continue;if(b.has(I)){let Y=[v];for(let G=I;G>=0;G=S[G])Y.push(h(G));return Y.reverse()}let H=I%o,B=Math.floor(I/o);for(let[Y,[G,V,ft]]of rw.entries()){if(!d(H+G,B+V))continue;let J=I+V*o+G,W=F+ft*t;W<T[J]&&y(I,J,1<<Y)&&R(J,W,I)}}return null}}function aw(n,t,e){if(!t)return null;let i=[],s=n,r=0;for(;r<t.length;){let o=t.length-1;for(;o>=r&&!e(s,t[o]);)o--;if(o<r)return null;s=t[o],i.push(s),r=o+1}return i}function I0({allowsPoint:n,allowsRoute:t,bounds:e=iw,gridSize:i=sw,geometryRevision:s}={}){let r=e,o,a=[],c=(d,p)=>t(d.x,d.y,p.x,p.y),l=d=>R0(d)&&n(d.x,d.y),u=()=>{a=[]};function f(d,p){if(!l(d)||!l(p))return null;if(c(d,p))return[p];let y=s?.();y!==o&&(o=y,u()),[d,p].some(({x:g,y:x})=>g<r.minX||g>r.maxX||x<r.minZ||x>r.maxZ)&&(r={minX:Math.min(r.minX,d.x,p.x),maxX:Math.max(r.maxX,d.x,p.x),minZ:Math.min(r.minZ,d.y,p.y),maxZ:Math.max(r.maxZ,d.y,p.y)},u());let m=Math.max(2,i,(r.maxX-r.minX)/A0,(r.maxZ-r.minZ)/A0);for(let g of[0,1]){a[g]??=ow(r,m/(g+1),n,c);let x=aw(d,a[g](d,p),c);if(x)return x}return null}function h(d,p,y=72){if(!R0(d)||!Number.isFinite(y)||y<0)return null;if(l(d))return d;let m=l(p),g=m?Math.atan2(p.y-d.y,p.x-d.x):0,x,v,_=Math.ceil(y/Rf);for(let b=1;b<=_;b++){let M=Math.min(b*Rf,y),T=Math.max(8,Math.ceil(2*Math.PI*M/Rf));for(let S=0;S<T;S++){let P=(S%2?(S+1)/2:-S/2)*2*Math.PI/T,I=g+P,F={x:d.x+M*Math.cos(I),y:d.y+M*Math.sin(I)};if(l(F)){if(!m||c(p,F))return F;x??=F,Math.abs(P)<=Math.PI/2&&(v??=F)}}}return v??x??null}return{findRoute:f,standingTarget:h,invalidate:u}}var cw=/(?:sofa|loveseat|chaise)-/,lw=/-desk-/;function ws(n,t,e,i,s,r,o){return{x:n,z:t,surface:e,yaw:i,width:s,depth:r,pose:o}}function uw(n,t,e){let i=n==="sofa"||n.includes("cloud-sofa"),s=i&&e>t,r=n.includes("loveseat")||n.includes("chaise")?2:3,o=[];if(s){let a=e*.88/r,c=t*.38;for(let u=0;u<r;u++){let f=-.44*e+a*(u+.5);o.push(ws(-.25*t+.018*Math.min(t,e),f,37,Math.PI/2,a-3,c,"lounge"))}let l=n==="sofa"?1:-1;o.push(ws(.22*t,l*.3*e,37,l>0?Math.PI:0,.48*t,.34*e,"lounge"))}else{let a=i?.57*e:e,c=i?-.215*e:0,l=.8*t/r;for(let u=0;u<r;u++)o.push(ws(-.4*t+l*(u+.5),c+a*.08,37,0,l-3,a*.7,"lounge"));i&&o.push(ws(-.32*t,.25*e,37,0,.33*t,.42*e,"lounge"))}return o}function hw(n,t){let{x:e,z:i,angle:s}=n,r=-Math.sin(s),o=Math.cos(s);return t.some(({x:a,z:c,item:l})=>{let u=a-e,f=c-i,h=Math.min(104,Math.max(50,Math.min(l.w,l.h)*.58));return Math.hypot(u,f)<=h&&u*r+f*o>=-8})}function fw(n,t){let{type:e,w:i,h:s}=n.item;if(e==="sofa"||cw.test(e))return uw(e,i,s);if(e==="diningChair"||e.startsWith("living-dining-chair-"))return[ws(0,0,30,0,i*.83,s*.83,"dining")];if(e==="chair"||e==="stool"||e.includes("desk-chair")){let r=e.includes("desk-chair")||hw(n,t)?"desk":"idle";return[ws(0,0,e==="stool"?32:41,0,i*.83,s*.83,r)]}if(e==="armchair"||e.includes("acorn-armchair"))return[ws(0,0,32,0,i*.65,s*.76,"lounge")];if(e==="bedroomBench"){let r=i>=58?2:1;return Array.from({length:r},(o,a)=>ws((a-(r-1)/2)*i*.44,0,34.2,0,i*.87/r,s*.91,"bench"))}return[]}function P0(n,t,e){let i=n.filter(({item:r})=>r.type==="desk"||lw.test(r.type)),s=[];for(let r of n){let{item:o,x:a,z:c,baseY:l,angle:u}=r,f=t.get(o.id)?.root;if(!f||l!==0)continue;let h=Math.sin(u),d=Math.cos(u);for(let[p,y]of fw(r,i).entries()){if(y.width<12||y.depth<11)continue;let m=a+y.x*d-y.z*h,g=c+y.x*h+y.z*d;if(e(m,g)<7)continue;let v=y.yaw-u,_=f.position.y+y.surface*f.scale.y;_<10||_>84||s.push({id:`${o.id}:${p}`,itemId:o.id,x:m,z:g,y:_,heading:v,forwardX:Math.sin(v),forwardZ:Math.cos(v),pose:y.pose,reach:Math.min(42,Math.max(18,y.depth*.48+8)),behind:Math.max(7,y.depth*.32),width:y.width,depth:y.depth})}}return s}function L0(n,t,e,i,s=1){let r=t-n.x,o=e-n.z;return Math.hypot(r,o)>n.reach*s||r*n.forwardX+o*n.forwardZ<-n.behind?!1:!i||i(t,e,n.x,n.z)}var Tn=[[0,1]],au=[[-1,0],[1,0]],Pe=[...Tn,...au,[0,-1]],dw=[[-1,0]],F0=[[0,0]],Ki="long-side",pw=37,mw={pose:"prep",faces:Ki},N0={pose:"wash",faces:Ki},U0={pose:"makeBed",faces:au},Df={pose:"write",faces:Tn},Ff={pose:"browse",faces:Tn},Ta={pose:"tidy",faces:Pe,frontPreference:9},Lf={pose:"water",faces:Pe},gw={pose:"floorPlay",faces:F0,penalty:16},to={pose:"adjust",faces:Pe,penalty:8},yw=new Map([["tv",{pose:"watch",faces:dw,reach:64,offset:13}],["desk",{...Df,faceFraction:-.16,single:!0}],["bed",U0],["diningTable",{pose:"setTable",faces:Ki}],["table",{pose:"setTable",faces:Ki}],["coffeeTable",{pose:"setTable",faces:Pe}],["sideTable",{pose:"tidy",faces:Pe}],["counter",mw],["kitchenWorktop",{pose:"cook",faces:Pe}],["doubleVanity",N0],["bathFixtures",{...N0,penalty:8}],["tub",{pose:"rinse",faces:Ki}],["bookcase",Ff],["dresser",Ta],["storageCabinet",Ta],["nightstand",Ta],["floorPlant",Lf],["plant",Lf],["mirror",{pose:"groom",faces:Tn,wall:!0}],["artwork",{pose:"admire",faces:Tn,wall:!0}],["presenceSwitch",{pose:"tap",faces:Tn,wall:!0}],["thermostat",{pose:"adjust",faces:Tn,wall:!0}],["window",{pose:"lookOut",faces:Pe,wall:!0,reach:50}],["wallUnit",{pose:"admire",faces:Tn,wall:!0,penalty:12}],["humidifier",{pose:"inspect",faces:Pe,penalty:6}],["airPurifier",{pose:"inspect",faces:Pe,penalty:6}],["windowFan",{pose:"inspect",faces:Pe,penalty:6}],["lamp",to],["floorLamp",to],["tableLamp",to]]),xw=new Map([["desk",Df],["bed",U0],["dining-table",{pose:"setTable",faces:Ki}],["dining",{pose:"setTable",faces:Ki}],["coffee-table",{pose:"setTable",faces:Pe}],["side-table",{pose:"tidy",faces:Pe}],["bookcase",Ff],["nightstand",Ta],["dresser",Ta],["floor-light",to],["table-light",to],["wall-light",{...to,faces:Tn,wall:!0}]]),If={pose:"toyPlay",faces:Pe},bw=new Map([["softToy",If],["activityToy",If],["foamBlock",{pose:"stack",faces:Pe,penalty:3}],["playMat",gw],["paddedPanel",{pose:"peek",faces:Ki,penalty:12}],["fireplace",{pose:"warm",faces:Tn,offset:6}],["shelf",Ff],["storage",{pose:"sort",faces:Tn}],["planterSet",Lf],["playFurniture",If]]),vw=new Map([["aquarium",{pose:"watchFish",faces:Pe,offset:5}],["terrarium",{pose:"watchGecko",faces:Pe,offset:5}],["cornerDesk",{...Df,faceFraction:-.16,single:!0}],["cribBed",{pose:"peek",faces:au}],["book",{pose:"readFloor",faces:Pe}],["ball",{pose:"ballPlay",faces:Pe}],["texturedBall",{pose:"ballPlay",faces:Pe}],["plush",{pose:"cuddle",faces:Pe}],["photoBunnyPlush",{pose:"cuddle",faces:Pe}],["cups",{pose:"stack",faces:Pe}],["rings",{pose:"stack",faces:Pe}],["blocks",{pose:"stack",faces:Pe}],["photoActivityTable",{pose:"pressKeys",faces:Pe}],["activityBoard",{pose:"pressKeys",faces:Tn}],["mirror",{pose:"groom",faces:Tn}],["playGym",{pose:"reachToy",faces:Pe}],["photoWoodArch",{pose:"reachToy",faces:Pe}],["photoToyShelf",{pose:"sort",faces:Tn}],["lowShelf",{pose:"sort",faces:Tn}],["photoBearChair",{pose:"floorPlay",faces:Tn}]]);function D0(n,t){let e=t?.[n];return yw.get(n)??vw.get(e?.form)??xw.get(e?.seriesId)??bw.get(e?.artFamily)}function _w(n,t,e,i){if(n.faces===F0){let r=o=>o>105?[-.27,0,.27]:[0];return r(t).flatMap(o=>r(e).map(a=>({x:t*o,z:e*a,nx:0,nz:0})))}return(n.faces===Ki?e>t?au:[[0,1],[0,-1]]:n.faces).flatMap(([r,o])=>{let a=r?e:t,c=n.single||i?1:Math.min(5,Math.ceil(a/49)),l=(r?t:e)*(n.faceFraction??.5);return Array.from({length:c},(u,f)=>{let h=i?Math.max(-a*.415,Math.min(a*.415,r?i.z:i.x)):((f+.5)/c-.5)*a*.83;return{x:r?r*l:h,z:o?o*l:h,nx:r,nz:o}})})}function k0(n,t,e){let i=(typeof window>"u"?globalThis:window).RoomcraftInventory?.byType,s=[],r=new Map(n.map(o=>[o.item.id,o]));for(let{item:o,x:a,z:c,baseY:l,angle:u=0,mountY:f}of n){let h=D0(o.type,i),{w:d,h:p}=o;if(!h||!t.has(o.id)||l!==0||o.visualKind==="none"||!h.wall&&Number.isFinite(f)||![d,p,a,c,u].every(Number.isFinite)||d<=0||p<=0)continue;let y=r.get(e?.get(o.id)?.supportId),m=y??{item:o,x:a,z:c,angle:u},g=Math.cos(m.angle??0),x=Math.sin(m.angle??0),v=y&&D0(y.item.type,i),_=y?v?.faceFraction!==void 0?v:{faces:Pe}:h,b=a-m.x,M=c-m.z,T=y?{x:b*g+M*x,z:M*g-b*x}:null;for(let[S,R]of _w(_,m.item.w,m.item.h,T).entries()){if(T&&Math.hypot(T.x-R.x,T.z-R.z)>pw)continue;let P=R.nx*g-R.nz*x,I=R.nx*x+R.nz*g;s.push({id:`${o.id}:activity:${S}`,itemId:o.id,pose:h.pose,obstacleId:m.item.id,focus:T?{x:a,z:c}:null,edgeX:m.x+R.x*g-R.z*x,edgeZ:m.z+R.x*x+R.z*g,nx:P,nz:I,heading:P||I?Math.atan2(-P,-I):-u,reach:h.reach??44,offset:h.offset??3,penalty:(h.penalty??0)+(R.nz===1?0:h.frontPreference??0)})}}return s}function O0(n,t,e,{allowsPoint:i,allowsTarget:s}={},r){let o,a=1/0;for(let c of n){if(r?.has(c.id)||r?.has(c.itemId))continue;let{edgeX:l,edgeZ:u,nx:f,nz:h}=c;if((t.x-l)*f+(t.y-u)*h<-18)continue;let p=l+f*(e+c.offset),y=u+h*(e+c.offset),m=Math.hypot(p-t.x,y-t.y),g=m+c.penalty;if(m>c.reach||g>a||g===a&&c.id>=o.id||i&&!i(p,y,e)||s&&(!s(p,y,t.x,t.y,c.obstacleId)||!s(p,y,l+f*3,u+h*3,c.obstacleId)))continue;a=g;let x=c.focus?Math.atan2(c.focus.x-p,c.focus.z-y):c.heading;o={id:c.id,itemId:c.itemId,pose:c.pose,x:p,z:y,heading:x}}return o}var ji={lean:.03,thighs:-1.3,shins:1.16,hands:[-.43,-.4],pulse:[.1,.1],pace:2.1},Pi={crouch:-4.4,lean:.24,thighs:-.77,shins:1.48,headPitch:.19,hands:[-.65,-.62]},Mw={idle:ji,lounge:{...ji,lean:-.13,tilt:.07,thighs:-1.16,shins:.92,hands:[-.22,-.14],pace:1.8},dining:{...ji,lean:.06,hands:[-.69,-.56],pulse:[.1,.5],pace:1.75,prop:"spoon"},desk:{...ji,lean:.16,thighs:-1.26,shins:1.18,hands:[-.98,-.92],pulse:[.22,.22],pace:6.3},bench:{...ji,tilt:-.09,hands:[-.35,-.56],pulse:[.12,.2],pace:3.3},read:{...ji,lean:.13,headPitch:.31,hands:[-1.09,-1.17],pulse:[.08,.2],pace:1.85,prop:"book"},sip:{...ji,hands:[-.29,-.96],pulse:[.04,.58],pace:1.55,prop:"mug"},sketch:{...ji,lean:.18,headPitch:.31,hands:[-.63,-1.04],pulse:[.06,.26],pace:3.7,prop:"pencil"},chat:{...ji,tilt:-.1,hands:[-.42,-.58],pulse:[.2,.38],pace:2.9,look:.21},write:{lean:.21,headPitch:.31,hands:[-.55,-1.07],pulse:[.12,.27],pace:3.9,prop:"pencil"},prep:{lean:.14,headPitch:.18,hands:[-.9,-.91],pulse:[.12,.34],pace:4.1},cook:{lean:.12,headPitch:.16,hands:[-.74,-1.04],pulse:[.16,.37],pace:3.6,prop:"spoon"},wash:{lean:.19,headPitch:.24,hands:[-1.02,-1.06],pulse:[.34,.31],pace:5.8,armSpread:[-.12,.12]},rinse:{...Pi,crouch:-3.2,hands:[-.89,-.81],pulse:[.34,.12],pace:3.4},makeBed:{lean:.27,headPitch:.22,hands:[-.93,-.94],pulse:[.32,.28],pace:2.4,armSpread:[.15,-.15]},setTable:{lean:.13,headPitch:.18,hands:[-.55,-.86],pulse:[.2,.42],pace:2.9,prop:"mug"},tidy:{lean:.17,headPitch:.21,hands:[-.63,-.83],pulse:[.39,.42],pace:2.8},browse:{lean:.05,headPitch:-.12,hands:[-.18,-.9],pulse:[.06,.63],pace:1.8,look:.2},sort:{...Pi,hands:[-.73,-.94],pulse:[.42,.39],pace:3.6,prop:"ball"},warm:{lean:.08,headPitch:.1,hands:[-.98,-.98],pulse:[.09,.1],pace:2.1,armSpread:[.12,-.12]},water:{lean:.16,headPitch:.19,hands:[-.61,-.93],pulse:[.07,.57],pace:2,prop:"wateringCan"},watch:{lean:.03,headPitch:-.16,hands:[-.19,-.25],pulse:[.06,.08],pace:1.8,look:.1},watchFish:{lean:.13,headPitch:-.02,hands:[-.34,-.49],pulse:[.07,.22],pace:1.7,look:.32},watchGecko:{lean:.23,headPitch:.18,hands:[-.27,-.65],pulse:[.05,.36],pace:1.45,look:.25},inspect:{...Pi,crouch:-2.7,hands:[-.3,-.57],pulse:[.08,.28],pace:2.4},lookOut:{lean:.14,headPitch:-.09,hands:[-.43,-.45],pulse:[.05,.05],pace:1.65,look:.26},admire:{lean:-.03,headPitch:-.16,hands:[-.12,-.2],pulse:[.08,.17],pace:1.25,look:.16},groom:{lean:.08,headPitch:-.09,hands:[-.14,-1.37],pulse:[.08,.37],pace:3.9,look:.17},tap:{lean:.07,headPitch:-.12,hands:[-.22,-1.13],pulse:[.05,.62],pace:2.2},adjust:{lean:.06,headPitch:-.06,hands:[-.22,-.91],pulse:[.1,.47],pace:2.55},floorPlay:{...Pi,crouch:-5.3,tilt:-.1,pulse:[.31,.36],pace:3.4},toyPlay:{...Pi,hands:[-.85,-1.01],pulse:[.28,.52],pace:4.1,prop:"ball"},stack:{...Pi,hands:[-.73,-.87],pulse:[.21,.55],pace:2.9,prop:"block"},ballPlay:{...Pi,hands:[-.72,-.91],pulse:[.35,.53],pace:3.5,prop:"ball"},cuddle:{...Pi,crouch:-2.4,tilt:.12,hands:[-1.03,-1.19],pulse:[.1,.16],pace:2.05,prop:"toy"},readFloor:{...Pi,headPitch:.29,hands:[-.94,-1.03],pulse:[.09,.22],pace:2.2,prop:"book"},pressKeys:{lean:.2,headPitch:.23,hands:[-.91,-1.04],pulse:[.33,.43],pace:7.2},reachToy:{...Pi,headPitch:-.17,hands:[-.45,-1.24],pulse:[.21,.48],pace:2.9},peek:{lean:.21,headPitch:.1,tilt:.09,hands:[-.55,-.65],pulse:[.07,.21],pace:1.9,look:.22}},Sw={idle:["idle","read","chat"],lounge:["lounge","read","sip"],dining:["dining","sip","chat"],desk:["desk","sketch","desk"],bench:["bench","read","chat"]},Nf=7,Pf=.55;function ru(n,t=0){let e=Sw[n.pose]??[n.pose];return e[Math.floor(Math.max(0,t)/Nf)%e.length]}function ou(n,t=0,e=!1){let i=Mw[n];if(!i)return null;let{lean:s=0,tilt:r=0,crouch:o=0,headPitch:a=0,look:c=.08,thighs:l=0,shins:u=0,hands:f,armSpread:h=[0,0],pulse:d=[0,0],pace:p=2.1,prop:y}=i,m=e?0:Math.max(0,t)*p,g=(x,v)=>e?0:x*((1-Math.cos(m+v))/2)**2;return{lean:s+(e?0:Math.sin(m)*.022),tilt:r,crouch:o,headPitch:a,lookAside:e?0:Math.sin(m*.42)*c,hands:[f[0]-g(d[0],0),f[1]-g(d[1],1.65)],armSpread:h,thighs:l,shins:u,prop:y}}function B0(n,t,e=!1){let i=ru(n,e?0:t),s=ou(i,t,e),r=t%Nf;if(e||!s||t<Nf||r>=Pf)return s;let o=ru(n,t-Pf),a=ou(o,t);if(!a||o===i)return s;let c=r/Pf,l=c*c*(3-2*c),u=(f,h)=>f+(h-f)*l;return{lean:u(a.lean,s.lean),tilt:u(a.tilt,s.tilt),crouch:u(a.crouch,s.crouch),headPitch:u(a.headPitch,s.headPitch),lookAside:u(a.lookAside,s.lookAside),hands:s.hands.map((f,h)=>u(a.hands[h],f)),armSpread:s.armSpread.map((f,h)=>u(a.armSpread[h],f)),thighs:u(a.thighs,s.thighs),shins:u(a.shins,s.shins),prop:c<.5?a.prop:s.prop}}function z0(){let n=new xe(1,1,1),t=new ve(1,10,7),e=new Re(1,1,1,12),i=new cn(1,.23,5,12),s=new Map,r={book:[[n,"#628b88",0,0,0,8.9,1.1,6.1],[n,"#fff0cf",0,.69,0,8.1,.7,5.55],[n,"#b6a189",0,1.06,0,.3,.1,5.4]],mug:[[e,"#df9d79",0,1,0,2.1,4.2,2.1],[e,"#f6dcc2",0,3.16,0,1.63,.13,1.63],[i,"#df9d79",2.1,1,0,1.38,1.26,1.38]],spoon:[[n,"#bc8b5b",0,0,1.4,.75,.75,5.9],[t,"#d8ae79",0,0,4.6,1.25,.48,1.6]],pencil:[[n,"#f3b86a",0,.1,1.2,.78,.78,5.8],[n,"#483852",0,.1,4.25,.45,.45,.7]],ball:[[t,"#e3b066",0,0,0,2.7,2.7,2.7],[t,"#ffde93",0,.7,1.85,1.26,1.31,.82]],block:[[n,"#d591ad",0,0,0,4.4,4.4,4.4],[t,"#ffdbbd",0,.3,2.24,1.1,1.15,.1]],toy:[[t,"#c8916d",0,.2,0,2.8,2.65,1.85],[t,"#daab88",0,2.55,.2,2.7,2,1.91],[t,"#daab88",-1.85,3.9,0,1,1,.8],[t,"#daab88",1.85,3.9,0,1,1,.8]],wateringCan:[[e,"#7ba797",0,.1,0,2.65,3.3,2.3],[i,"#a2bba0",0,2.23,-.38,1.6,1.5,1.4],[n,"#93af99",0,.52,2.44,1.15,1.14,3.5]]};function o(c){let l=new Map,u;return f=>{if(u!==f&&(u&&(l.get(u).visible=!1),u=Object.hasOwn(r,f)?f:void 0,!!u)){if(!l.has(u)){let h=new Jt;h.name="radar-held-"+u,h.position.set(1.15,-7.65,2);for(let[d,p,y,m,g,x,v,_]of r[u]){s.has(p)||s.set(p,new Ne({color:p,emissive:p,emissiveIntensity:.13,roughness:.8}));let b=new ne(d,s.get(p));b.position.set(y,m,g),b.scale.set(x,v,_),h.add(b)}c[1].add(h),l.set(u,h)}l.get(u).visible=!0}}}function a(){for(let c of[n,t,e,i])c.dispose();for(let c of s.values())c.dispose()}return{attach:o,dispose:a}}var ww=24,Uf=17.5,H0=.42,Ew=8.9,lu=20,Aa=[{role:"papa",scale:[1.26,1.25,1.22],radius:lu,sweater:"#537eaa",trim:"#ffcc81",skin:"#db9f76",hair:"#4b3533"},{role:"mama",scale:[1.09,1.18,1.12],radius:18,sweater:"#c86587",trim:"#ffdeaf",skin:"#e8af83",hair:"#5a3841"},{role:"baby",scale:[.92,.83,.92],radius:16,sweater:"#8b78cf",trim:"#ffe492",skin:"#f1b98e",hair:"#674138"}],cu=(n,t,e)=>n+(t-n)*e,G0=n=>Math.min(1,Math.max(0,n)),Tw=(n,t)=>Math.atan2(Math.sin(n-t),Math.cos(n-t)),Aw={lean:0,tilt:0,crouch:0,headPitch:0,lookAside:0,hands:[0,0],armSpread:[0,0],thighs:0,shins:0};function Ra(n,t=.12){return new Ne({color:n,roughness:.78,emissive:n,emissiveIntensity:t})}function Rw(n,t,e,i=0,s=0){let r=!e&&t%4.8<.13;n.head.rotation.x=-.62+i+(e?0:Math.sin(t*1.5)*.047),n.head.rotation.y=s,n.head.rotation.z=e?0:Math.sin(t*3.4)*.047;for(let o of n.eyes)o.scale.y=r?.15:.87}function kf(n,t=()=>0,{supportsRoute:e,floorClearance:i,allowsBodyPoint:s,allowsBodyRoute:r,geometryRevision:o,seats:a=[],interactions:c=[],occlusionScene:l}={}){let u=new Jt;u.name="tracked-people",n.add(u);let f=new Jt;l?.add(f);let h,d,p=new Map,y=new Map,m=Aa.map(()=>[]),g=!1,x=!1,v=0,_=!1,b=!0,M;function T(){let W=new Ke;W.absarc(0,4,3.5,0,2*Math.PI,!1);let st=new Ke;return st.moveTo(-6.5,-6.5),st.quadraticCurveTo(-7,-.2,0,-.2),st.quadraticCurveTo(7,-.2,6.5,-6.5),st.closePath(),{sphere:new ve(1,12,8),disc:new Sn(1,24).rotateX(-Math.PI/2),groundRing:new Qo(13.8,Uf,32).rotateX(-Math.PI/2),glasses:new cn(1,.14,6,16),occlusionGlyph:new Ti([W,st],12),occlusionMaterial:new _e({color:"#fff1cd",depthFunc:wr,depthWrite:!1,transparent:!0,opacity:.9,toneMapped:!1}),palette:Aa.map(({sweater:bt,trim:Mt,skin:vt,hair:xt})=>Object.fromEntries(Object.entries({sweater:bt,trim:Mt,skin:vt,hair:xt}).map(([yt,$])=>[yt,Ra($)]))),ink:Ra("#423c50",.09),cheek:Ra("#d78383"),shoes:Ra("#514656"),white:Ra("#fff1dc"),shadow:new _e({color:"#433849",transparent:!0,opacity:.22,depthWrite:!1}),groundMark:new _e({color:"#fff1cd",depthTest:!1,depthWrite:!1,toneMapped:!1}),retainedMark:new _e({color:"#eeb660",depthTest:!0,depthWrite:!1,toneMapped:!1})}}function S(W){h??=T(),d??=z0();let{role:st,scale:bt,radius:Mt}=Aa[W],{sweater:vt,trim:xt,skin:yt,hair:$}=h.palette[W],rt=st==="baby",Et=new Jt;Et.name=`radar-avatar-${st}`;let Ut=new Jt;Ut.name="radar-avatar-pose";let It=new Jt,Pt=new Jt,$t=[],U=[],it=[];u.add(Et),Et.add(Ut),Ut.add(It),It.scale.set(...bt);let K=(Rt,Lt,q,Gt,Bt,z,A,dt)=>{let ct=new ne(h.sphere,Lt);return ct.position.set(q,Gt,Bt),ct.scale.set(z,A,dt),Rt.add(ct),ct},at=new ne(h.disc,h.shadow);at.position.y=.13,at.scale.set(19,1,19),Et.add(at);let tt=new ne(h.groundRing,h.groundMark);tt.name="radar-track-mark",tt.renderOrder=-1,u.add(tt);let St=l?new ne(h.occlusionGlyph,h.occlusionMaterial):null;St&&(St.name="radar-occlusion-cue",St.visible=!1,f.add(St)),K(It,vt,0,15,0,rt?8.2:7.1,8.3,5.4),rt?(K(It,xt,0,17.5,4.8,4.9,4.1,1.15),K(It,h.white,0,17.4,5.9,1.5,1.5,.35)):(K(It,xt,0,20.7,2.4,5.8,2.2,4),K(It,xt,st==="papa"?-2.4:0,15.7,5.2,1.5,3.7,.65));for(let Rt of[-1,1]){let Lt=new Jt;Lt.position.set(Rt*3.4,10.3,.1),It.add(Lt);let q=new Jt;q.position.y=-4.65,Lt.add(q);let Gt=rt?vt:h.ink;K(Lt,Gt,0,-2.35,0,2.65,3.25,2.6),K(q,Gt,0,-1.6,0,2.4,3.1,2.4),K(q,rt?xt:h.shoes,0,-3.5,1.25,3.1,2.1,4),K(q,h.white,0,-4.15,3.25,2.75,1.1,2),it.push({thigh:Lt,shin:q});let Bt=new Jt;Bt.position.set(Rt*6.25,19.1,0),It.add(Bt),K(Bt,vt,Rt*.9,-3.7,.15,2.75,5.3,2.7),K(Bt,yt,Rt*1.3,-7.8,.5,2.3,2.6,2.2),U.push(Bt)}Pt.position.set(0,rt?26:27.2,0),rt&&Pt.scale.set(1.16,1.17,1.12),It.add(Pt),K(Pt,$,0,1.3,-1.65,9.2,9.65,8.6),K(Pt,yt,0,0,1.9,8.65,8.45,7.5);let Tt=K(Pt,$,-2.1,7.3,4.25,6.4,3.4,4.35);if(Tt.rotation.z=st==="papa"?-.27:.22,st==="mama"&&(K(Pt,$,-6.7,-1.9,-3.8,3.6,8.1,5.2),K(Pt,$,6.2,-1.7,-3.9,3.3,7.6,5.4),K(Pt,$,2.8,10.4,-2.5,5.1,5.1,5.1),K(Pt,xt,4.4,8.7,2.2,2.8,1.1,1.1)),rt){K(Pt,$,-7.3,6.7,-2,3.35,3.7,3.5),K(Pt,$,7.3,6.7,-2,3.35,3.7,3.5);let Rt=K(Pt,xt,.9,10,4.2,2.5,1.45,1.25),Lt=K(Pt,xt,4.1,10,4.2,2.5,1.45,1.25);Rt.rotation.z=-.4,Lt.rotation.z=.4,K(Pt,h.white,2.5,9.8,5.1,1.15,1.2,1)}for(let Rt of[-1,1])if(K(Pt,yt,Rt*8.2,-.15,1.1,1.85,2.4,1.75),$t.push(K(Pt,h.ink,Rt*3,1.2,8.95,.85,.87,.52)),K(Pt,h.cheek,Rt*5.05,-1.25,7.95,1.18,.62,.52),st==="papa"){let Lt=new ne(h.glasses,h.ink);Lt.position.set(Rt*3.1,1.25,9.15),Lt.scale.set(2.5,2.15,1.55),Pt.add(Lt)}return st==="papa"&&K(Pt,h.ink,0,1.6,9.35,1.1,.28,.35),K(Pt,h.ink,0,-1.95,9.15,1.38,.45,.38),{root:Et,groundMark:tt,poseRoot:Ut,body:It,head:Pt,arms:U,legs:it,eyes:$t,radius:Mt,styleIndex:W,baby:rt,cue:St,setProp:d.attach(U)}}let R=(W,st)=>Number.isFinite(t(W,st))&&(!i||i(W,st)>0),P=(W,st,bt,Mt)=>R(W,st)&&(!i||i(W,st)>=bt)&&(s?.(W,st,bt,Mt)??!0),I=(W,st,bt,Mt,vt,xt)=>(e?.(W,st,bt,Mt,vt)??!0)&&(r?.(W,st,bt,Mt,vt,xt)??!0);function F(W){return y.has(W)||y.set(W,I0({allowsPoint:(st,bt)=>P(st,bt,W),allowsRoute:(st,bt,Mt,vt)=>I(st,bt,Mt,vt,W),geometryRevision:o})),y.get(W)}function H(W,st,bt){let Mt=bt*.8;if(W.width<bt*1.35||W.depth<bt*.82||!P(W.x,W.z,Mt,W.itemId)||!L0(W,st.x,st.y,(xt,yt,$,rt)=>I(xt,yt,$,rt,0,W.itemId)))return[];let vt=[];for(let xt=16;xt<=76;xt+=8){for(let yt of[0,-.5,.5,-1,1,-1.5,1.5]){let $=W.heading+yt,rt=W.x+Math.sin($)*xt,Et=W.z+Math.cos($)*xt;P(rt,Et,bt)&&I(rt,Et,W.x,W.z,Mt,W.itemId)&&vt.push({x:rt,y:Et})}if(vt.length)break}return vt}function B(W,st,bt){let{radius:Mt}=W.character,vt=$=>Math.hypot($.x-st.x,$.z-st.y),xt=a.filter($=>!bt.has($.id)&&vt($)<=$.reach).sort(($,rt)=>vt($)-vt(rt));for(let $ of xt)for(let rt of H($,st,Mt))if(W.motion.aim(rt,v,x))return{id:$.id,heading:$.heading,seat:$};let yt=O0(c,st,Mt,{allowsPoint:P,allowsTarget:($,rt,Et,Ut,It)=>I($,rt,Et,Ut,0,It)},bt);return yt&&W.motion.aim({x:yt.x,y:yt.z},v,x)?yt:null}function Y(W,st,bt,Mt){let{signal:vt,point:xt,motion:yt,navigator:$}=W,rt=o?.(),Et=Mt&&!xt.quality&&vt.settled;if(W.activity&&(!Mt||rt!==W.revision)&&(W.blend=0,W.activity=null,W.leaving=!1,W.planned=null),W.activity&&!Et&&!(xt.quality==="last-known"&&W.blend>0)&&(W.leaving=!0,W.blend===0&&(W.activity=null,W.leaving=!1)),W.activity||W.planned===vt&&W.revision===rt&&W.activitiesAllowed===Mt||(W.planned=vt,W.revision=rt,W.activitiesAllowed=Mt,Et&&(W.activity=B(W,vt.target,bt),W.activity)))return;let Ut=$.standingTarget(vt.target,st);yt.aim(Ut??(!st&&xt.keepVisible?xt.fallback:null),v,x)}function G(W,st,bt){let{character:Mt,activity:vt}=W,xt=vt?.seat,{x:yt,y:$,heading:rt,walking:Et,step:Ut}=st,It=t(yt,$),Pt=Math.cos(rt),$t=Math.sin(rt),U=(xt?xt.x-yt:0)*bt,it=(xt?xt.z-$:0)*bt,K=v-(W.poseAt??v),at=xt?ru(xt,x?0:K):vt?.pose,tt=(xt?B0(xt,K,x):ou(at,K,x))??Aw,St=xt?xt.y-It-Ew*Aa[Mt.styleIndex].scale[1]:0;Mt.root.position.set(yt,It,$),Mt.root.rotation.y=rt,Mt.poseRoot.position.set(U*Pt-it*$t,St*bt,U*$t+it*Pt),Mt.poseRoot.rotation.y=vt?Tw(vt.heading,rt)*bt:0,Mt.poseRoot.userData.pose=bt>0?at:"standing",Mt.setProp(bt>.52?tt.prop:void 0);let Tt=Math.floor(Math.max(0,v-W.born)*16)/16+.7+Mt.styleIndex*.62,Rt=Math.floor(Ut*12)/12*2*Math.PI,Lt=Et?Math.sin(Rt)*.56:0,q=x?0:Et?Math.abs(Math.sin(Rt))*1.9:(1+Math.sin(Tt*4.7))*.47;Mt.body.position.y=cu(q*(Mt.baby?1.5:1),tt.crouch,bt),Mt.body.rotation.x=tt.lean*bt;let Gt=x?0:Et?Lt*.15:Math.sin(Tt*2.8)*.045;Mt.body.rotation.z=cu(Gt,tt.tilt,bt);for(let Bt=0;Bt<2;Bt++){let z=Bt===0?-1:1,A=Et?-Lt*z:x?0:Math.sin(Tt*3.1+Bt)*.09;Mt.arms[Bt].rotation.x=cu(A,tt.hands[Bt],bt),Mt.arms[Bt].rotation.z=tt.armSpread[Bt]*bt,Mt.legs[Bt].thigh.rotation.x=cu(Lt*z,tt.thighs,bt),Mt.legs[Bt].shin.rotation.x=tt.shins*bt}Rw(Mt,Tt,x,tt.headPitch*bt,tt.lookAside*bt)}function V(W,st=g,bt=b){v=Number.isFinite(W)?W:v,x=st||g,b=bt,_=!1;let Mt=new Set,vt=xt=>Mt.add(xt.seat?xt.id:xt.itemId);for(let{activity:xt}of p.values())xt&&vt(xt);for(let xt of p.values()){let{character:yt}=xt,{x:$,y:rt}=xt.point,Et=t($,rt),Ut=i?.($,rt)??Uf;yt.groundMark.visible=Number.isFinite(Et)&&Ut>0,yt.groundMark.visible&&(yt.groundMark.material=xt.point.quality?h.retainedMark:h.groundMark,yt.groundMark.position.set($,Et+.26,rt),yt.groundMark.scale.setScalar(Math.min(1,Ut/Uf)));let It=Math.max(0,v-xt.renderedAt);xt.renderedAt=v,xt.leaving&&(xt.blend=x||!bt?0:G0(xt.blend-It/H0),xt.blend===0&&(xt.activity=null,xt.leaving=!1,xt.planned=null));let Pt=xt.activity;Y(xt,xt.motion.sample(v,x),Mt,bt);let $t=xt.motion.sample(v,x);xt.activity&&(vt(xt.activity),$t&&!$t.walking&&!xt.leaving&&(xt.blend===0&&(xt.poseAt=v),xt.blend=x?1:G0(xt.blend+(xt.activity===Pt?It/H0:0))));let U=xt.blend*xt.blend*(3-2*xt.blend);yt.root.visible=!!$t,yt.root.userData.locationQuality=xt.point.quality??"measured",$t&&G(xt,$t,U),yt.cue&&(yt.cue.visible=!!($t&&xt.point.keepVisible),yt.cue.visible&&yt.head.getWorldPosition(yt.cue.position)),_||=yt.root.visible||yt.groundMark.visible}}function ft(W,st,{reduceMotion:bt=!1}={}){if(W===M&&bt===g)return;M=W,g=bt;let Mt=Number.isFinite(st)?st:v,vt=new Map;for(let yt of Array.isArray(W)?W:[])if(!(typeof yt?.id!="string"||!yt.id||yt.id.length>256||!Number.isFinite(yt.x)||!Number.isFinite(yt.y)||vt.has(yt.id)||!yt.keepVisible&&!R(yt.x,yt.y))&&(vt.set(yt.id,yt),vt.size===ww))break;for(let[yt,$]of p)vt.has(yt)||($.character.root.visible=!1,$.character.groundMark.visible=!1,$.character.cue&&($.character.cue.visible=!1),m[$.character.styleIndex].push($.character),p.delete(yt));let xt=Aa.map(()=>0);for(let{character:yt}of p.values())xt[yt.styleIndex]++;for(let yt of[...vt.keys()].filter($=>!p.has($)).sort()){let $=xt.indexOf(Math.min(...xt));xt[$]++;let rt=m[$].pop()??S($),Et=F(rt.radius),Ut=T0({allowsPoint:(It,Pt)=>P(It,Pt,rt.radius),findRoute:Et.findRoute,geometryRevision:o});p.set(yt,{character:rt,motion:Ut,navigator:Et,filter:E0(),born:Mt,renderedAt:Mt,blend:0})}for(let[yt,$]of vt){let rt=p.get(yt);if(rt.point===$)continue;rt.point=$;let Et=rt.filter.observe($,Mt);(rt.signal?.target!==Et.target||rt.signal.settled!==Et.settled||rt.signal.quality!==$.quality)&&(rt.signal={...Et,quality:$.quality})}V(Mt,bt)}function J(){if(u.removeFromParent(),f.removeFromParent(),!!h){for(let W of[h.ink,h.cheek,h.shoes,h.white,h.shadow,h.groundMark,h.retainedMark,h.occlusionMaterial])W.dispose();for(let W of h.palette)for(let st of Object.values(W))st.dispose();h.sphere.dispose(),h.disc.dispose(),h.groundRing.dispose(),h.glasses.dispose(),h.occlusionGlyph.dispose(),d.dispose(),u.clear(),f.clear();for(let W of m)W.length=0;p.clear(),y.clear(),h=void 0}}return{setTracks:ft,render:V,dispose:J,setVisible(W){u.visible=f.visible=W},orientOcclusionCues(W){for(let st of f.children)st.visible&&st.quaternion.copy(W.quaternion)},get hasMotion(){return!x&&p.size>0},get hasVisibleTracks(){return _}}}function Of(n){return Number.isFinite(n?.x)&&Number.isFinite(n?.y)}function eo(n){return Array.isArray(n)&&n.length===6&&Array.from(n).every(Number.isFinite)}function Bf(n){let{map:t,plan:e}=n??{};return Of(t)&&Math.abs(t.x)<=1e9&&Math.abs(t.y)<=1e9&&Of(e)&&e.x>=0&&e.x<=1536&&e.y>=0&&e.y<=1024}function q0(n){return n===null||Number.isFinite(n)&&n>0}function uu(n,t){let e=n.reduce((i,s)=>({x:i.x+s[t].x,y:i.y+s[t].y}),{x:0,y:0});return{x:e.x/n.length,y:e.y/n.length}}function ni(n,t){if(!eo(n)||!Of(t))return;let[e,i,s,r,o,a]=n;return{x:e*t.x+i*t.y+s,y:r*t.x+o*t.y+a}}function zf(n){if(!eo(n))return;let[t,e,i,s,r,o]=n,a=t*r-e*s,c=Math.hypot(t,s)*Math.hypot(e,r);if(!c||Math.abs(a)/c<1e-6)return;let l=[r,-e,e*o-r*i,-s,t,s*i-t*o].map(u=>u/a);return eo(l)?l:void 0}function Y0(n,t){if(!eo(n)||!eo(t))return;let[e,i,s,r,o,a]=n,[c,l,u,f,h,d]=t,p=[e*c+i*f,e*l+i*h,e*u+i*d+s,r*c+o*f,r*l+o*h,r*u+o*d+a];return eo(p)?p:void 0}function hu(n,{map:t,plan:e}){let i=ni(n,t);return Math.hypot(i.x-e.x,i.y-e.y)}function V0(n,t,e){let i=uu(n,"map"),s=uu(n,"plan"),r=t?-1:1,o=0,a=0,c=0,l=0;for(let{map:g,plan:x}of n){let v=g.x-i.x,_=r*(g.y-i.y),b=x.x-s.x,M=x.y-s.y;o+=v*b+_*M,a+=v*M-_*b,c+=v*v+_*_,l+=b*b+M*M}let u=e===null?1e-6:e*.05;if(Math.sqrt(c/n.length)<u||Math.sqrt(l/n.length)<8)return;let f=o/c,h=a/c,d=Math.hypot(f,h);if(!Number.isFinite(d)||d<=1e-12)return;let p=-r*h,y=r*f,m=[f,p,s.x-f*i.x-p*i.y,h,y,s.y-h*i.x-y*i.y];if(m.every(g=>Number.isFinite(g)&&Math.abs(g)<=1e4))return{transform:m.map(g=>Object.is(g,-0)?0:g),scale:d,rotationDegrees:Math.atan2(h,f)*180/Math.PI}}function W0(n,{flipY:t=!1,mapUnitsPerMetre:e=1e3}={}){if(!Array.isArray(n)||n.length<2||n.length>12||!n.every(Bf)||!q0(e))return;let i=V0(n,t,e);if(!i)return;let s=n.map(o=>hu(i.transform,o)),r;if(n.length>=3){let o=n.map((a,c)=>{let l=n.filter((f,h)=>c!==h),u=V0(l,t,e);return u&&hu(u.transform,a)});o.every(Number.isFinite)&&(r=Math.max(...o))}return{...i,pixelsPerMetre:e===null?void 0:i.scale*e,errors:s,rmse:Math.sqrt(s.reduce((o,a)=>o+a*a,0)/s.length),maxError:Math.max(...s),leaveOneOutError:r}}function X0(n,t){let e=uu(n,"map"),i=uu(n,"plan"),s=0,r=0,o=0,a=0,c=0,l=0,u=0;for(let b of n){let M=b.map.x-e.x,T=b.map.y-e.y,S=b.plan.x-i.x,R=b.plan.y-i.y;s+=M*M,r+=M*T,o+=T*T,a+=M*S,c+=T*S,l+=M*R,u+=T*R}let f=s*o-r*r;if(s+o<n.length*(t?t*.05:1e-6)**2||f<=.018*(s+o)**2)return;let h=(o*a-r*c)/f,d=(s*c-r*a)/f,p=(o*l-r*u)/f,y=(s*u-r*l)/f,m=[h,d,i.x-h*e.x-d*e.y,p,y,i.y-p*e.x-y*e.y],g=Math.abs(h*y-d*p),x=h*h+d*d+p*p+y*y,v=Math.sqrt((x+Math.sqrt(Math.max(0,x*x-4*g*g)))/2),_=g/v;if(!(!(_>0)||v/_>1.5||!m.every(b=>Number.isFinite(b)&&Math.abs(b)<=1e4)))return{transform:m,scale:Math.sqrt(g),scaleRange:[_,v],rotationDegrees:Math.atan2(p,h)*180/Math.PI}}function $0(n,{mapUnitsPerMetre:t=1e3}={}){let e=W0(n,{mapUnitsPerMetre:t}),i=W0(n,{mapUnitsPerMetre:t,flipY:!0}),s=!e||i?.rmse<e.rmse?i:e;if(!s||n.length<4||!Number.isFinite(s.leaveOneOutError))return s;let r=X0(n,t);if(!r)return s;let o=n.map((l,u)=>{let f=X0(n.filter((h,d)=>u!==d),t);return f?hu(f.transform,l):1/0}),a=Math.max(...o);if(!(a+2<s.leaveOneOutError*.7))return s;let c=n.map(l=>hu(r.transform,l));return{...r,errors:c,leaveOneOutError:a,maxError:Math.max(...c),rmse:Math.sqrt(c.reduce((l,u)=>l+u*u,0)/c.length)}}function Cw(n,t,e,i){if(!Number.isFinite(i)||i<=0)return;let s=ni(e,n),r=ni(e,t);if(!s||!r)return;let o=Math.hypot(r.x-s.x,r.y-s.y)/i;return Number.isFinite(o)?o:void 0}function Z0(n,t,e,i=1e3){if(!Bf(n)||!Bf(t)||!q0(i))return;let s=ni(e,n.map),r=ni(e,t.map);if(!s||!r)return;let o=Math.hypot(t.map.x-n.map.x,t.map.y-n.map.y),a=Math.hypot(t.plan.x-n.plan.x,t.plan.y-n.plan.y),c=Math.hypot(r.x-s.x,r.y-s.y);if(!o||!c)return;let l=i===null?void 0:o/i,u=Cw(n.plan,t.plan,zf(e),i);return{mapDistance:o,planDistance:a,mapMetres:l,planMetres:u,deltaMetres:u===void 0?void 0:u-l}}var K0=po($r(),1);var Ks=1e-7;function j0(n,t,e){let i=!1;for(let s=1;s<n.length;s++){let[r,o]=n[s-1],[a,c]=n[s];o>e!=c>e&&t<(a-r)*(e-o)/(c-o)+r&&(i=!i)}return i}var fu=(n,t,e,i,s,r)=>(e-n)*(r-t)-(i-t)*(s-n),Es=(n,t,e)=>e>=Math.min(n,t)-Ks&&e<=Math.max(n,t)+Ks;function Iw([n,t,e,i],s,r,o,a){let c=fu(n,t,e,i,s,r),l=fu(n,t,e,i,o,a),u=fu(s,r,o,a,n,t),f=fu(s,r,o,a,e,i);return Math.abs(c)<Ks&&Es(n,e,s)&&Es(t,i,r)||Math.abs(l)<Ks&&Es(n,e,o)&&Es(t,i,a)||Math.abs(u)<Ks&&Es(s,o,n)&&Es(r,a,t)||Math.abs(f)<Ks&&Es(s,o,e)&&Es(r,a,i)?!0:c>0!=l>0&&u>0!=f>0}function Ca(n,t,e,i,s,r){let o=s-e,a=r-i,c=o*o+a*a,l=c?Math.max(0,Math.min(1,((n-e)*o+(t-i)*a)/c)):0;return(n-e-l*o)**2+(t-i-l*a)**2}function J0(n,t,e,i,s,r){if(Iw(n,t,e,i,s))return!0;if(!r)return!1;let[o,a,c,l]=n;return Math.min(Ca(t,e,...n),Ca(i,s,...n),Ca(o,a,t,e,i,s),Ca(c,l,t,e,i,s))<r}function du(n,t,e=[]){let i=t.filter(s=>s.bottom===0).flatMap(s=>s.polygons).concat(e);return n.length&&i.length?K0.default.difference(n,i):n}function Hf(n){let t=typeof window>"u"?globalThis:window,e=n.flatMap(({item:r,x:o,z:a,angle:c})=>t.RoomcraftModels.walkingObstacleBoxes({...r,x:o,y:a,rotation:c*180/Math.PI}).map(l=>{let{width:u,height:f,u:h,v:d}=l;return{...l,id:r.id,extentX:Math.abs(h[0])*u+Math.abs(d[0])*f,extentZ:Math.abs(h[1])*u+Math.abs(d[1])*f,edges:[[-u,-f,u,-f],[u,-f,u,f],[u,f,-u,f],[-u,f,-u,-f]]}}));function i(r,o,a,c,l=0,u){let f=Math.max(0,l)**2;return e.some(h=>{if(h.id===u||Math.min(r,a)>h.x+h.extentX+l||Math.max(r,a)<h.x-h.extentX-l||Math.min(o,c)>h.y+h.extentZ+l||Math.max(o,c)<h.y-h.extentZ-l)return!1;let d=r-h.x,p=o-h.y,y=a-h.x,m=c-h.y,g=d*h.u[0]+p*h.u[1],x=d*h.v[0]+p*h.v[1],v=y*h.u[0]+m*h.u[1],_=y*h.v[0]+m*h.v[1],b=(M,T)=>Math.abs(M)<=h.width&&Math.abs(T)<=h.height;return b(g,x)||b(v,_)||h.edges.some(M=>J0(M,g,x,v,_,f))})}return{blocksPoint:(r,o,a,c)=>i(r,o,r,o,a,c),blocksRoute:i}}function Js(n){let t=n.flatMap(r=>r.flatMap(o=>o.slice(1).map(([a,c],l)=>[...o[l],a,c])));function e(r,o){return n.some(([a,...c])=>j0(a,r,o)&&!c.some(l=>j0(l,r,o)))}function i(r,o){if(!e(r,o))return 0;let a=1/0;for(let c of t)a=Math.min(a,Ca(r,o,...c));return Math.sqrt(a)}function s(r,o,a,c,l=0){let u=Math.max(0,l-Ks)**2;return e(r,o)&&e(a,c)&&!t.some(f=>J0(f,r,o,a,c,u))}return{contains:e,clearance:i,supportsRoute:s}}function Q0(n,t,e,i){if(![n,t,e].every(Number.isFinite)||e<0)return null;if(i(n,t))return{x:n,y:t};let s=4,r=Math.ceil(e/s);for(let o=1;o<=r;o++){let a=Math.min(o*s,e),c=Math.ceil(2*Math.PI*a/s);for(let l=0;l<c;l++){let u=l*2*Math.PI/c,f=n+Math.cos(u)*a,h=t+Math.sin(u)*a;if(i(f,h))return{x:f,y:h}}}return null}var Pw=n=>Math.max(0,Math.min(1,n)),Gf=(n,t)=>n?.x===t?.x&&n?.y===t?.y;function Vf({allowsPoint:n,allowsRoute:t,duration:e=.32,maximumDistance:i=125}){let s,r,o=0,a=0,c=0,l=0,u=0,f,h,d;function p(x,v){s=r=x,o=v,a=0}function y(x,v=!1){if(l=x,!s||x<c)return null;v&&(a=0);let _=a>0?Pw((x-o)/a):1,b=r.x+(s.x-r.x)*_,M=r.y+(s.y-r.y)*_;return n(b,M)?{x:b,y:M,progress:_,heading:u,current:Gf(f,s),walking:!v&&_<1&&Math.hypot(s.x-r.x,s.y-r.y)>2}:(p(s,x),c=x+.24,null)}function m(x,v,{observation:_,reduceMotion:b=!1}={}){if(!Number.isFinite(x?.x)||!Number.isFinite(x?.y)||!n(x.x,x.y))return!1;if(Gf(x,f)&&_===h)return!0;if(f=x,h=_,!s)return p(x,v),!0;let M=y(v,b)??s,T=Math.hypot(x.x-M.x,x.y-M.y);return Gf(x,s)?d=null:T<=i&&t(M.x,M.y,x.x,x.y)?(d=null,r=M,s=x,o=v,a=b?0:e,T>1&&(u=Math.atan2(x.x-r.x,x.y-r.y))):d&&Math.hypot(x.x-d.x,x.y-d.y)<=48&&t(d.x,d.y,x.x,x.y)?(p(x,v),c=v+.24,d=null):d=x,!0}function g(){s=r=f=d=void 0,h=void 0,c=u=0}return{observe:m,sample:y,clear:g,get hasPosition(){return!!s},get pendingReacquisition(){return!!s&&c>l}}}var tg=new Le,pu=new X,no=class extends ra{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new Xt(t,3)),this.setAttribute("uv",new Xt(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,i=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),i.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let i=new ms(e,6,1);return this.setAttribute("instanceStart",new Zn(i,3,0)),this.setAttribute("instanceEnd",new Zn(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let i=new ms(e,6,1);return this.setAttribute("instanceColorStart",new Zn(i,3,0)),this.setAttribute("instanceColorEnd",new Zn(i,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new ta(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Le);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),tg.setFromBufferAttribute(e),this.boundingBox.union(tg))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mn),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let i=this.boundingSphere.center;this.boundingBox.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)pu.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(pu)),pu.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(pu));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Vt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Ot},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Nn.line={uniforms:qi.merge([Vt.common,Vt.fog,Vt.line]),vertexShader:`
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
		`};var Ts=class extends ze{constructor(t){super({type:"LineMaterial",uniforms:qi.clone(Nn.line.uniforms),vertexShader:Nn.line.vertexShader,fragmentShader:Nn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var Wf=new Ae,eg=new X,ng=new X,pn=new Ae,mn=new Ae,Li=new Ae,Xf=new X,qf=new be,gn=new oa,ig=new X,mu=new Le,gu=new Mn,Ni=new Ae,Di,Qs;function sg(n,t,e){return Ni.set(0,0,-t,1).applyMatrix4(n.projectionMatrix),Ni.multiplyScalar(1/Ni.w),Ni.x=Qs/e.width,Ni.y=Qs/e.height,Ni.applyMatrix4(n.projectionMatrixInverse),Ni.multiplyScalar(1/Ni.w),Math.abs(Math.max(Ni.x,Ni.y))}function Lw(n,t){let e=n.matrixWorld,i=n.geometry,s=i.attributes.instanceStart,r=i.attributes.instanceEnd,o=Math.min(i.instanceCount,s.count);for(let a=0,c=o;a<c;a++){gn.start.fromBufferAttribute(s,a),gn.end.fromBufferAttribute(r,a),gn.applyMatrix4(e);let l=new X,u=new X;Di.distanceSqToSegment(gn.start,gn.end,u,l),u.distanceTo(l)<Qs*.5&&t.push({point:u,pointOnLine:l,distance:Di.origin.distanceTo(u),object:n,face:null,faceIndex:a,uv:null,uv1:null})}}function Nw(n,t,e){let i=t.projectionMatrix,r=n.material.resolution,o=n.matrixWorld,a=n.geometry,c=a.attributes.instanceStart,l=a.attributes.instanceEnd,u=Math.min(a.instanceCount,c.count),f=-t.near;Di.at(1,Li),Li.w=1,Li.applyMatrix4(t.matrixWorldInverse),Li.applyMatrix4(i),Li.multiplyScalar(1/Li.w),Li.x*=r.x/2,Li.y*=r.y/2,Li.z=0,Xf.copy(Li),qf.multiplyMatrices(t.matrixWorldInverse,o);for(let h=0,d=u;h<d;h++){if(pn.fromBufferAttribute(c,h),mn.fromBufferAttribute(l,h),pn.w=1,mn.w=1,pn.applyMatrix4(qf),mn.applyMatrix4(qf),pn.z>f&&mn.z>f)continue;if(pn.z>f){let v=pn.z-mn.z,_=(pn.z-f)/v;pn.lerp(mn,_)}else if(mn.z>f){let v=mn.z-pn.z,_=(mn.z-f)/v;mn.lerp(pn,_)}pn.applyMatrix4(i),mn.applyMatrix4(i),pn.multiplyScalar(1/pn.w),mn.multiplyScalar(1/mn.w),pn.x*=r.x/2,pn.y*=r.y/2,mn.x*=r.x/2,mn.y*=r.y/2,gn.start.copy(pn),gn.start.z=0,gn.end.copy(mn),gn.end.z=0;let y=gn.closestPointToPointParameter(Xf,!0);gn.at(y,ig);let m=te.lerp(pn.z,mn.z,y),g=m>=-1&&m<=1,x=Xf.distanceTo(ig)<Qs*.5;if(g&&x){gn.start.fromBufferAttribute(c,h),gn.end.fromBufferAttribute(l,h),gn.start.applyMatrix4(o),gn.end.applyMatrix4(o);let v=new X,_=new X;Di.distanceSqToSegment(gn.start,gn.end,_,v),e.push({point:_,pointOnLine:v,distance:Di.origin.distanceTo(_),object:n,face:null,faceIndex:h,uv:null,uv1:null})}}}var yu=class extends ne{constructor(t=new no,e=new Ts({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,i=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let o=0,a=0,c=e.count;o<c;o++,a+=2)eg.fromBufferAttribute(e,o),ng.fromBufferAttribute(i,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+eg.distanceTo(ng);let r=new ms(s,2,1);return t.setAttribute("instanceDistanceStart",new Zn(r,1,0)),t.setAttribute("instanceDistanceEnd",new Zn(r,1,1)),this}raycast(t,e){let i=this.material.worldUnits,s=t.camera;if(s===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),i===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Di=t.ray;let o=this.matrixWorld,a=this.geometry,c=this.material;Qs=c.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),gu.copy(a.boundingSphere).applyMatrix4(o);let l;if(i)l=Qs*.5;else{let f=Math.max(s.near,gu.distanceToPoint(Di.origin));l=sg(s,f,c.resolution)}if(gu.radius+=l,Di.intersectsSphere(gu)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),mu.copy(a.boundingBox).applyMatrix4(o);let u;if(i)u=Qs*.5;else{let f=Math.max(s.near,mu.distanceToPoint(Di.origin));u=sg(s,f,c.resolution)}mu.expandByScalar(u),Di.intersectsBox(mu)!==!1&&(i?Lw(this,e):Nw(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Wf),this.material.uniforms.resolution.value.set(Wf.z,Wf.w))}};var io=class extends no{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){let e=t.length-3,i=new Float32Array(2*e);for(let s=0;s<e;s+=3)i[2*s]=t[s],i[2*s+1]=t[s+1],i[2*s+2]=t[s+2],i[2*s+3]=t[s+3],i[2*s+4]=t[s+4],i[2*s+5]=t[s+5];return super.setPositions(i),this}setColors(t){let e=t.length-3,i=new Float32Array(2*e);for(let s=0;s<e;s+=3)i[2*s]=t[s],i[2*s+1]=t[s+1],i[2*s+2]=t[s+2],i[2*s+3]=t[s+3],i[2*s+4]=t[s+4],i[2*s+5]=t[s+5];return super.setColors(i),this}setFromPoints(t){let e=t.length-1,i=new Float32Array(6*e);for(let s=0;s<e;s++)i[6*s]=t[s].x,i[6*s+1]=t[s].y,i[6*s+2]=t[s].z||0,i[6*s+3]=t[s+1].x,i[6*s+4]=t[s+1].y,i[6*s+5]=t[s+1].z||0;return super.setPositions(i),this}fromLine(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}};var xu=class extends yu{constructor(t=new io,e=new Ts({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}};var rg="#ffce84",Dw="#a8f5ff",Yf="#10242e";function bu(n,t,e){return new Ts({color:n,linewidth:t,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,...e})}function vu(n,t,e,i){let s=new io;s.setPositions(t.flatMap(({x:r,y:o})=>[r,.5,o]));for(let[r,o]of e.entries()){let a=new xu(s,o);r===0&&o.dashed&&a.computeLineDistances(),a.renderOrder=i+r,n.add(a)}}function og(n,t,e,i){let s=new re().setFromPoints(t.map(({x:o,y:a})=>new X(o,.5,a)));s.setIndex(Fn.triangulateShape(t.map(({x:o,y:a})=>new Ot(o,a)),[]).flat());let r=new ne(s,e);r.renderOrder=i,n.add(r)}function ag(){let n=new Vi,t={side:We,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1},e=new _e({...t,color:rg,opacity:.13}),i=new _e({...t,color:Yf,opacity:.95}),s=bu(Yf,4.6,{opacity:.8}),r=bu(rg,2.25),o={dashed:!0,dashSize:15,gapSize:8},a=bu(Yf,3.5,{...o,opacity:.65}),c=bu(Dw,1.7,{...o,opacity:.9});function l({origin:h,forward:d}){let p=(m,g=0)=>({x:h.x+d.x*m-d.y*g,y:h.y+d.y*m+d.x*g}),y=Array.from({length:28},(m,g)=>{let x=g/28*Math.PI*2;return p(10*Math.cos(x),10*Math.sin(x))});vu(n,[p(10),p(56)],[s,r],5),vu(n,[p(45,-7),p(56),p(45,7)],[s,r],5),og(n,y,i,7),vu(n,[...y,y[0]],[s,r],8)}function u(h){for(let p of new Set(n.children.map(y=>y.geometry)))p.dispose();n.clear();let d=new Map;for(let p of h){let{points:y,kind:m,id:g,origin:x,forward:v}=p;if(y.length<3)continue;let _=m==="nominal";_&&og(n,y,e,0),vu(n,[...y,y[0]],_?[s,r]:[a,c],_?3:1),x&&v&&d.set(g,p)}for(let p of d.values())l(p)}function f(){u([]);for(let h of[e,i,s,r,a,c])h.dispose()}return{scene:n,setZones:u,dispose:f}}var lg=po($r(),1);var Fw=4096,Uw=.18,kw=new Wt("#465fc4"),cg=new Wt("#cc548d"),Ow=new Wt("#ffd572");function Bw(n,t,e){let i=e*.48,s=i*.83;return[[n-s,t-i],[n+s,t-i],[n+i,t-s],[n+i,t+s],[n+s,t+i],[n-s,t+i],[n-i,t+s],[n-i,t-s],[n-s,t-i]]}function zw({x:n,y:t,corners:e},i){return!Array.isArray(e)||e.length!==4||!e.every(s=>Array.isArray(s)&&s.length===2&&s.every(Number.isFinite))?Bw(n,t,i):[...e,e[0]]}function Hw(n,t,e,i,s){let[r,...o]=e.map(l=>l.slice(0,-1).map(([u,f])=>new Ot(u,f))),a=Fn.triangulateShape(r,o),c=[r,...o].flat();for(let l of a)for(let u of l){let{x:f,y:h}=c[u];n.push(f,Uw,h),t.push(i.r,i.g,i.b,s)}return a.length>0}function Gw(n,t,e){let{cells:i,cellSize:s}=e??{};if(!Array.isArray(i)||!Number.isFinite(s)||s<=0||s>200)return null;let r=i.slice(0,Fw).filter(f=>[f?.x,f?.y,f?.hits].every(Number.isFinite)&&f.hits>0&&t.contains(f.x,f.y));if(!r.length)return null;let o=r.reduce((f,{hits:h})=>Math.max(f,h),0),a=[],c=[],l=0;for(let f of r){let h=Math.sqrt(f.hits/o),d=h<.55?kw.clone().lerp(cg,h/.55):cg.clone().lerp(Ow,(h-.55)/.45),p=!1;for(let y of lg.default.intersection([zw(f,s)],n))p=Hw(a,c,y,d,.36+h*.42)||p;p&&l++}if(!l)return null;let u=new re;return u.setAttribute("position",new Xt(a,3)),u.setAttribute("color",new Xt(c,4)),{geometry:u,drawn:l}}function ug(n){let t=new Jt;t.name="Roomcraft radar heat map";let e=Js(n),i=new _e({vertexColors:!0,side:We,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-1}),s;function r(c){s&&(t.remove(s),s.geometry.dispose(),s=void 0);let l=Gw(n,e,c);return l?(s=new ne(l.geometry,i),t.add(s),l.drawn):0}function o(){r(null),i.dispose()}function a(c){i.opacity=Number.isFinite(c)?te.clamp(c,.25,1):1}return{root:t,setHistory:r,setOpacity:a,dispose:o}}var Vw=new Set(["cloudy","fog","hail","lightning","lightning-rainy","pouring","rainy","snowy","snowy-rainy","windy-variant"]),Ww=new Set(["hail","lightning-rainy","pouring","rainy","snowy-rainy"]),hg={waxing_crescent:3*Math.PI/4,first_quarter:Math.PI/2,waxing_gibbous:Math.PI/4,full_moon:0,waning_gibbous:-Math.PI/4,last_quarter:-Math.PI/2,waning_crescent:-3*Math.PI/4},so=Object.fromEntries(Object.entries({clear:["#b7c8a9","#79c6b9","#32768c","#e5f4ea","#dcf1ec","#fff1bd"],overcast:["#a5b9a9","#76aca8","#456e7f","#d0e4df","#b5ced0","#ffe4b0"],night:["#415b66","#2b6678","#16354d","#91b7bf","#68899f","#e4f0f5"],sunrise:["#a9aa9e","#71aaa8","#536f9b","#d9dce8","#e5b7bc","#ffe0ae"],sunset:["#b3a08f","#7296a1","#635879","#f0cbc4","#d39a9b","#ffae80"]}).map(([n,t])=>[n,t.map(e=>new Wt(e))])),$f={sunrise:["#efad92","#8baac6"].map(n=>new Wt(n)),sunset:["#e58968","#907fa6"].map(n=>new Wt(n))},fg=["shoreTint","shallowTint","deepTint","foamTint","cloudTint","bodyTint"],{clamp:Ia,smoothstep:Xw}=te;function qw({shoreline:n,farZ:t,focusX:e}){let i=[],s=[],r=[];for(let[a,{x:c,z:l}]of n.entries()){let u=a*2;i.push(c-e,0,l-t,c-e,0,0),s.push(c-e,0,c-e,l-t),u>0&&r.push(u-2,u,u-1,u,u+1,u-1)}let o=new re;return o.setAttribute("position",new Xt(i,3)),o.setAttribute("uv",new Xt(s,2)),o.setIndex(r),o}var Yw=`
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
`,$w=`
  varying vec2 coastPoint;
  varying vec3 surfacePoint;
  uniform float waterTime;
  uniform bool waterHighDetail;
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
    float caustic = 0.0;
    if (waterHighDetail) {
      vec2 fold = vec2(coastPoint.x * .11 + offshore * .17, coastPoint.x * .09 - offshore * .20);
      fold += vec2(swell * 1.4, crossSwell * 1.2) + waterTime * vec2(-.87, .74);
      vec2 ripples = sin(fold + .48 * sin(fold.yx));
      float visibleDetail = 1.0 - smoothstep(.6, 2.3, max(fwidth(fold.x), fwidth(fold.y)));
      caustic = smoothstep(.71, 1.55, abs(ripples.x + ripples.y)) * visibleDetail;
    }
    float depth = smoothstep(8.0, 278.0, offshore + rippleB * 3.2);
    vec3 color = mix(shallowTint, deepTint, depth);
    color = mix(color, shoreTint, 1.0 - smoothstep(0.0, 21.0, offshore));
    color = mix(color, foamTint, waveLight * mix(0.14, 0.044, depth));
    color = mix(color, foamTint, caustic * (1.0 - smoothstep(8.0, 112.0, offshore)) * .084);
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
          glints += path * caustic * smoothstep(.28, .97, facet) * .52;
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
`;function dg({y:n,farZ:t,shoreline:e,focusX:i}){let s={...qi.clone(Vt.fog),waterTime:{value:0},waterHighDetail:{value:!1},rain:{value:0},fog:{value:0},reflectedWind:{value:0},roughness:{value:1},cloudCover:{value:.24},bodyVisibility:{value:0},solarBand:{value:0},moon:{value:0},moonLight:{value:new Ot(0,1)},bodyPosition:{value:new Ot},solarPosition:{value:new Ot},solarWarmTint:{value:$f.sunrise[0]},solarCoolTint:{value:$f.sunrise[1]}};for(let[c,l]of fg.entries())s[l]={value:so.clear[c].clone()};let r=new ze({uniforms:s,vertexShader:Yw,fragmentShader:$w,toneMapped:!1,fog:!0}),o=new ne(qw({shoreline:e,farZ:t,focusX:i}),r);o.name="Ocean and shore wash",o.position.set(i,n,t);function a(c,l={}){let{night:u,daylightKnown:f,condition:h,moonPhase:d,moonAzimuth:p,moonElevation:y,skyProgress:m,windSpeed:g,windBearing:x,reduceMotion:v,reflections:_=!0}=l,b=l.solar??Zi(l),M=Vw.has(h),T=so[M?"overcast":"clear"],S=b.phase==="sunset"||b.rising===!1?"sunset":"sunrise",R=Math.max(b.twilight,b.lowSun);for(let[bt,Mt]of fg.entries())s[Mt].value.lerpColors(so.night[bt],T[bt],b.daylight).lerp(so[S][bt],R*(M?.24:.46));let P=Object.hasOwn(hg,d)?hg[d]:void 0,I=f||Number.isFinite(l.sunElevation)||h==="sunny",F=I?b.disc*(.97-b.cloud*.42):0,H=(u||b.phase==="night")&&P!==void 0?.93*(1-Xw(b.elevation,-12,-3)):0,B=H>F;B?s.bodyTint.value.copy(so.night[5]):s.bodyTint.value.lerp(so[S][5],R*.52);let Y=Ww.has(h),G=Number.isFinite(c)&&!v?c:0;s.waterTime.value=G,s.rain.value=Y?1:0,s.fog.value=h==="fog"?1:0;let V=Number.isFinite(g)?Ia(g/18,0,1):0,ft=Number.isFinite(x)?-Math.sin(te.degToRad(x)):1;s.reflectedWind.value=Math.sin(G*.09)*ft*V*24;let J=Y||h==="windy"||h==="windy-variant";s.roughness.value=1+Math.max(J?.65:0,V*.65),s.cloudCover.value=_?M?.94:h==="partlycloudy"?.64:u?.32:.24:0,s.bodyVisibility.value=!_||M?0:Math.max(H,F),s.solarBand.value=_&&I?R*(M?.3:1-b.cloud*.48):0,[s.solarWarmTint.value,s.solarCoolTint.value]=$f[S],s.moon.value=B?1:0,s.solarPosition.value.set(b.east*154,38+Ia(b.elevation/75,0,1)*20);let W=Number.isFinite(m)?Ia(m,0,1):void 0,st=W===void 0?void 0:te.lerp(-145,145,W);if(B){s.moonLight.value.set(Math.sin(P),Math.cos(P));let bt=st??(Number.isFinite(p)?Ia((p-180)*1.08,-180,180):46+Math.sin(G*.014)*27),Mt=Number.isFinite(y)?32+Ia(y/75,0,1)*24:42;s.bodyPosition.value.set(bt,Mt)}else s.bodyPosition.value.copy(s.solarPosition.value)}return{mesh:o,update:a,setHighDetail(c){s.waterHighDetail.value=c}}}var Mu=26,Zw=92,ro=4,jw=18,Kw=201,Jw=["#a58263","#bd976e","#c6a479","#d6b98f"],As=Object.freeze({point:.145,cove:.29,eastBluff:.43,pier:-.3});function gg(n){let{minZ:t,maxZ:e}=n.houseBounds,i=t-(e-t)*.11-46,s=n.editableStructure?1/0:t-146,r=Math.min(n.bounds.minZ,i,s)-jw,o=r-2*Mu-Zw;return{nearZ:r,farZ:o,sceneryMinZ:o-Kw}}function yg(n,{nearZ:t,farZ:e},i,s,r){let o=e+Mu,a=t-Mu,c=(o+a)/2,l=r-s/2,u=r+s/2,f=(h,d,p,y)=>n.box(s,p,d-h,y,r,i+p/2,(h+d)/2);f(o,a,1.2,"#73767c"),f(o,o+3.4,1.4,"#656b71"),f(a-3.4,a,1.4,"#656b71");for(let[h,d,p,y]of[[e,o,o-ro,e],[a,t,a,a+ro]]){f(h,d,5,"#c0b6a7"),f(p,p+ro,6.2,"#d0c3b0");let m=Mu-ro;for(let g=l+36;g<u;g+=72)n.box(1.15,.18,m,"#a69c91",g,i+5.04,y+m/2)}for(let h=l+36;h+17<u;h+=72)n.box(34,.2,2.8,"#e9ce91",h,i+1.24,c);return{centerX:r,width:s,surfaceY:i+1.24,lanes:[(c+a)/2,(o+c)/2],sidewalks:[{minZ:a+ro,maxZ:t,surfaceY:i+5},{minZ:e,maxZ:o-ro,surfaceY:i+5}]}}function Su(n,t,e,i){let s=[],r=[];for(let a=0;a<t.length;a++)if(s.push(...t[a],...e[a]),a>0){let c=(a-1)*2,l=a*2;r.push(c,l,c+1,l,l+1,c+1)}let o=new re;o.setAttribute("position",new Xt(s,3)),o.setIndex(r),o.computeVertexNormals(),n.add(o,i,0,0,0)}function xg(n,t,e,i,s,r){let o="#9e9c70",a="#bab484";for(let c=0;c<4;c++){let l=new Dr(s*(.13+.018*c),s*(1.25-.14*c),3);l.rotateZ(.22+c*.1),l.rotateY(r+c*1.62);let u=Math.cos(r+c*1.62)*s*.21,f=Math.sin(r+c*1.62)*s*.21;n.add(l,c%2?a:o,t+u,i+s*.46,e+f)}}function Qw(n,t,e,i,s){for(let[r,o,a,c]of[[-.66,-17,54,5],[-.51,-49,40,5],[-.37,-50,47,6],[-.17,-46,42,4.8],[.04,-24,38,5.3],[.57,-20,45,5.6],[.66,-17,49,5.2]]){let l=t+r*i,u=e+o,f=s+.1;n.ball(a,c,13,"#d7bd94",l,f,u),n.ball(a*.62,c*.78,10,"#dfc598",l+a*.28,f+.5,u+4);for(let[h,d,p]of[[-.38,1,4.4],[-.08,-3.5,5.6],[.2,4.5,4.5],[.56,2,3.8]])xg(n,l+a*h,u+d,f+c*.75,p,h*7)}}function tE(n,t,e,i){let o=e-13.5+.6;n.box(19,2.5,27,"#ac987e",t,i+1.28,o);for(let a=0;a<7;a++)n.box(20,.7,3.45,a%2?"#c5af8f":"#cdb696",t,i+2.6,e-1.25-a*3.8);for(let a of[-1,1])n.box(.9,.8,27+.6,"#b4a086",t+a*19/2,i+2.8,o)}function eE(n,t,e,i,s,r,o){n.box(1.4,16.6,1.4,"#b5a08a",t,i+16.6/2,e),n.ball(1.6,.95,1.6,r,t,i+16.6+3.6,e);for(let u=0;u<8;u++){let f=(m,g,x)=>[Math.cos(m)*g,x,Math.sin(m)*g],h=o+u*2*Math.PI/8,d=o+(u+1)*2*Math.PI/8,p=[[0,16.6+3.4,0],f(h,16*.54,16.6+2.1),f(d,16*.54,16.6+2.1),f(h,16,16.6-.55),f(d,16,16.6-.55),f(h,16,16.6-2),f(d,16,16.6-2)],y=new re;y.setAttribute("position",new Xt(p.flat(),3)),y.setAttribute("uv",new Xt(p.flatMap(([m,,g])=>[m/32+.5,g/32+.5]),2)),y.setIndex([0,2,1,1,2,4,1,4,3,3,4,5,4,6,5]),y.computeVertexNormals(),n.add(y,u%2?r:s,t,i,e)}}function pg(n,t,e,i,s,r){let o=(f,h)=>[t+f*Math.cos(r)+h*Math.sin(r),e-f*Math.sin(r)+h*Math.cos(r)],a=(f,h,d,p,y,m,g)=>{let[x,v]=o(y,g);n.box(f,h,d,p,x,i+m,v,r)};for(let f of[-1,1])a(1.1,1.2,18,"#988679",f*4.5,2.15,0),a(1,2.1,1.2,"#988679",f*4.4,1.08,6.6);a(8.4,.75,12,s,0,2.8,2);let[c,l]=o(0,-5.5),u=new xe(8.4,.85,8);u.rotateX(-Math.PI/6),n.add(u,s,c,i+4.4,l,r)}function nE(n,t,e,i,s){for(let[r,o,a,c,l]of[[-.57,-76,"#c87a72","#fae2bd",-.09],[-.34,-75,"#589eab","#e5dfbd",.14],[-.16,-58,"#dca658","#f7dfb5",-.19],[As.cove,-49,"#9c86ae","#ecddc2",.13]]){let u=t+r*i,f=e+o;eE(n,u,f,s,a,c,l),pg(n,u-13,f-15,s,c,l-.17),pg(n,u+14,f-14,s,a,l+.12),n.box(8.6,.22,15,"#e9cda5",u+23,s+.99,f+7,l*2)}}function _u(n,t,e){let i=Math.abs(n-t)/e;return i>=1?0:.5+.5*Math.cos(i*Math.PI)}function Zf(n,t,e){let i=t/e,s=13*_u(i,-.38,.65),r=53*_u(i,As.point,.15),o=32*_u(i,As.cove,.12),a=45*_u(i,As.eastBluff,.16),c=3.2*Math.sin((t-38)*.019);return n-109-s-r+o-a+c}function iE(n,t,e,i){let s="#b19e86",r="#8e7b66",o="#789da3";for(let c of[-10,10])for(let l of[-7,7])n.box(2.3,12,2.3,r,t+c,i+6.1,e+l);n.box(28,2,19,s,t,i+12,e),n.box(19,10,12,"#e3cfaa",t,i+18,e-1.5),n.box(19.15,3.5,12.15,o,t,i+20.1,e-1.5),n.box(3.4,6.2,.45,"#6f9298",t+4.9,i+16,e+4.62);let a=new Re(0,15,4.4,4);a.scale(1.12,1,.78),a.rotateY(Math.PI/4),n.add(a,"#ad8f74",t,i+25.1,e-1.5),n.box(24,1.1,16,"#f0dcba",t,i+23,e-1.5);for(let c=0;c<6;c++){let l=1.9*(c+1);n.box(7,l,2.5,s,t+5,i+l/2,e+23.2-c*2.45)}}function sE(n,t,e,i){let s="#708f90",r="#c78262",o="#938775";n.ball(37,.7,12.5,"#c5ae88",t,i,e);for(let l of[-24,-14])for(let u of[-3,3])n.box(1.15,12.5,1.15,s,t+l,i+6.25,e+u);n.box(12,.9,8,"#be9a72",t-19,i+7.3,e);let a=new Dr(9.2,5.4,4);a.rotateY(Math.PI/4),n.add(a,"#d5a46a",t-19,i+13.1,e);let c=new xe(4.8,.8,15.8);c.rotateX(.46),n.add(c,r,t-19,i+4.3,e+7.7);for(let l of[3,28])for(let u of[-6,6]){let f=new xe(1.4,13.2,1.4);f.rotateX(-Math.sign(u)*.34),n.add(f,s,t+l,i+6.3,e+u*.45)}n.box(28,1.5,1.6,s,t+15.5,i+12.5,e);for(let l of[10,21]){for(let u of[-1.5,1.5])n.box(.37,8.4,.37,o,t+l+u,i+7.75,e);n.box(4.8,.8,2.5,r,t+l,i+3.5,e)}}function rE(n,t,e,i,s,r){let o="#9c896d";for(let c=0;c<4;c++){let l=2.4-c*.17;n.add(new Re(l*.88,l,s/4+.15,6),o,t,i+s*(c+.5)/4,e)}let a=i+s;n.ball(3.1,1.65,3.1,"#697958",t,a-.2,e);for(let c=0;c<7;c++){let l=r+c*Math.PI*2/7,u=c%2?12:15,f=new re;f.setAttribute("position",new Xt([0,0,0,-1.9,1.4,u*.36,0,2.7,u*.44,1.9,1.4,u*.36,-1.4,-.75,u*.73,1.4,-.75,u*.73,0,-4.4,u],3)),f.setIndex([0,1,2,0,2,3,1,4,2,2,4,6,2,6,5,2,5,3]),f.computeVertexNormals(),n.add(f,c%2?"#7d9862":"#638052",t,a,e,l)}}function oE(n,t,e,i,s){let r=As.pier*e,o=t+r,c=Zf(i,r,e)+12,l=i-184,u=c-l,f=(c+l)/2,h="#b9b4a6",d="#e3d9c3",p="#989a92",y=s+13.5;n.box(12.5,1.8,u,h,o,y,f),n.box(16.5,1.9,16,h,o,y,l+1.3);for(let m=0;m<7;m++){let g=(m+1)*2.04;n.box(13.6,g,2.7,"#bcac91",o,s+g/2,c+17.55-m*2.7)}for(let m=0;m<=9;m++){let g=c-3-m/9*(u-5);n.box(12.9,1.2,1.5,"#a4a496",o,y-1.25,g);for(let x of[-1,1])n.box(1.5,15.4,1.6,p,o+x*4.25,s+5.25,g),n.box(.6,3.15,.62,d,o+x*5.85,y+2.36,g)}for(let m of[-1,1])n.box(.46,.42,u-3,d,o+m*5.85,y+3.9,f),n.box(.3,.31,u-3,d,o+m*5.85,y+2.74,f);n.box(10.9,6.9,10.5,"#dcd2b8",o,y+4.4,l+2.5),n.box(11.9,1.25,11.5,"#728483",o,y+8.4,l+2.5),n.box(5.2,2.5,.35,"#69848a",o+1.8,y+5.3,l-2.8)}function aE(n,t,e,i,s){let r=[],o=[];for(let u=0;u<=18;u++){let f=u/18,h=t+e*(-.61+f*.56),d=Math.sin(f*Math.PI)**.55;r.push([h,s+.88,i-19+16*d]),o.push([h,s+.92,i-19-16*d+1.4*Math.sin(f*15)])}Su(n,r,o,"#91a56f");let a=e*.75,c=t-e*.27,l=i-38;n.box(a,1.8,11,"#bda890",c,s+1.35,l),n.box(a,.24,.9,"#d7bea1",c,s+2.34,l-5.35);for(let u=14;u<a;u+=14)n.box(.58,.2,10.6,"#a59078",c-a/2+u,s+2.28,l);for(let u of[-.48,-.22,-.09]){let f=t+u*e;n.box(17,.85,4.2,"#9e785d",f,s+4,l+8.5),n.box(17,3,.85,"#9e785d",f,s+5.1,l+10.3);for(let h of[-1,1])n.box(1.4,3.3,3.2,"#8a7d6f",f+h*6.4,s+2.5,l+8.5)}for(let[u,f,h]of[[-.52,13,8],[-.44,11,7],[-.27,9,8.5],[-.18,15,6],[-.09,18,6.5]]){let d=t+u*e;n.ball(h,h*.36,3.8,"#748d61",d,s+1.8,i-f),n.ball(h*.7,h*.32,3.4,"#9bac72",d-h*.22,s+2.5,i-f-1.7)}for(let[u,f,h,d]of[[-.54,18,24,.1],[-.27,17,31,.7],[-.11,21,22,.4]])rE(n,t+u*e,i-f,s+.9,h,d);sE(n,t-e*.35,i-20,s+.9),iE(n,t-e*.24,i-62,s+.55)}function mg(n,t,e,i,s,r,o,a){let u=[[0,1],[.2,.98],[.47,.89],[.74,.83],[1,.66]].map(([f,h])=>Array.from({length:11},(d,p)=>{let y=p/11*Math.PI*2,m=1+.13*Math.sin(p*1.94+a)+.06*Math.cos(p*2.59-a);return[Math.cos(y)*s*h*m+f*s*.12,o*f*(1+.13*Math.sin(p*.93-a)),Math.sin(y)*r*h*m]}));for(let f=0;f<u.length-1;f++){let h=[...u[f],...u[f+1]],d=[];for(let y=0;y<11;y++){let m=(y+1)%11;d.push(y,y+11,m,m,y+11,m+11)}if(f===u.length-2){h.push([s*.12,o*1.01,0]);for(let y=0;y<11;y++)d.push(22,11+(y+1)%11,11+y)}let p=new re;p.setAttribute("position",new Xt(h.flat(),3)),p.setIndex(d),p.computeVertexNormals(),n.add(p,Jw[f],t,e,i)}}function cE(n,t,e,i,s){for(let[r,o]of[[As.point,[[-.062,27,40,25,22],[-.028,18,53,26,35],[.02,24,45,26,40],[.05,23,32,17,24]]],[As.eastBluff,[[-.045,29,29,25,29],[-.01,20,46,28,44],[.035,22,50,29,39]]]])for(let[a,[c,l,u,f,h]]of o.entries()){let d=(r+c)*e,p=t+d,m=Zf(i,d,e)+l;mg(n,p,s+.15,m,u,f,h,a+r*7);for(let[g,x,v]of[[-.56,-.82,.26],[.38,-1.02,.31],[.73,-.68,.21]])mg(n,p+g*u,s-.5,m+x*f,u*v,f*v,h*v*.59,g*10);xg(n,p+u*.13,m,s+h*.97,5.8,a)}}function bg(n,{farZ:t},e,{minX:i,maxX:s},r=6200,o=(i+s)/2){let a=(i+s)/2,c=Math.max(940,s-i),l=Math.ceil(r/42),u=o-r/2,f=Array.from({length:l+1},(m,g)=>{let x=u+r*g/l;return{x,z:Zf(t,x-a,c)}}),h=f.map(({x:m})=>[m,e+.28,t+.4]),d=f.map(({x:m,z:g})=>[m,e+.71,g+22]),p=f.map(({x:m,z:g})=>[m,e+.44,g+6]),y=f.map(({x:m,z:g})=>[m,e+.17,g-31]);Su(n,h,d,"#e3cba0"),Su(n,d,p,"#dbbd92"),Su(n,p,y,"#c8a47e"),aE(n,a,c,t,e),oE(n,a,c,t,e),cE(n,a,c,t,e),Qw(n,a,t,c,e);for(let m of[-.58,-.06,As.cove])tE(n,a+m*c,t,e);return nE(n,a,t,c,e+.55),{water:{y:e+1.05,farZ:t-1850,shoreline:f,focusX:a}}}var{lerp:Fi}=te,Qt={window:"#3b596b",glass:"#496c7e",glassGlow:"#7393a1",bumper:"#5a5158",tire:"#37333b",rim:"#a79e9b",hub:"#e8d4b7",grille:"#514651",plate:"#e8d5b1",upholstery:"#aa775d",roofRail:"#766573",tan:"#d2aa7a",wood:"#a77350"},vg=[{id:"butter-compact",label:"Buttercup compact",length:43,width:23,height:21,tire:4,cabin:[-.39,-.29,.09,.29],body:"#edb857",roof:"#fff0c7",detail:"sunroof"},{id:"blush-beetle",label:"Blush bubble car",length:46,width:24,height:25,tire:4.6,cabin:[-.39,-.17,.025,.33],body:"#da8e8a",roof:"#e4a4a1",detail:"bubble"},{id:"seafoam-sedan",label:"Seafoam sedan",length:54,width:24,height:20,tire:4.4,cabin:[-.31,-.18,.055,.28],body:"#70aea5",roof:"#98c9b6"},{id:"blue-wagon",label:"Bluebird wagon",length:57,width:25,height:23,tire:4.4,cabin:[-.44,-.4,.08,.29],body:"#769bc0",roof:"#a5bbcf",detail:"wagon",windows:3},{id:"coral-convertible",label:"Coral roadster",length:49,width:24,height:17,tire:4.1,cabin:[-.28,-.21,.075,.25],body:"#e4806b",roof:"#ffe0a9",detail:"convertible"},{id:"berry-sports",label:"Berry sports coupe",length:52,width:26,height:17,tire:4.25,cabin:[-.34,-.16,.055,.3],body:"#a3769d",roof:"#c3a2ba",detail:"sports"},{id:"pine-suv",label:"Pinewood SUV",length:59,width:27,height:27,tire:5.2,cabin:[-.43,-.39,.08,.28],body:"#80986e",roof:"#c7bd8d",detail:"trail",windows:3},{id:"sand-pickup",label:"Sandy pickup",length:63,width:27,height:25,tire:5,cabin:[-.075,-.055,.185,.34],body:"#c6a37c",roof:"#e3c09a",detail:"pickup"},{id:"lavender-delivery",label:"Lavender delivery van",length:63,width:27,height:29,tire:4.6,cabin:[-.44,-.43,.21,.42],body:"#ac9ec7",roof:"#d6c5da",detail:"delivery"},{id:"cream-camper",label:"Custard camper van",length:65,width:28,height:31,tire:4.8,cabin:[-.44,-.43,.32,.42],body:"#9bb9a7",roof:"#f5dc9b",detail:"camper"},{id:"peach-food-truck",label:"Peach snack truck",length:67,width:28,height:32,tire:4.8,cabin:[.07,.12,.31,.43],body:"#e8a283",roof:"#f2c5a2",detail:"food"},{id:"cobalt-minibus",label:"Blueberry minibus",length:70,width:29,height:29,tire:4.9,cabin:[-.455,-.43,.34,.44],body:"#7898bc",roof:"#e3dbcc",detail:"bus",windows:4},{id:"honey-box-truck",label:"Honey box truck",length:72,width:29,height:32,tire:5,cabin:[.105,.16,.31,.44],body:"#dca95d",roof:"#f0cf96",detail:"cargo"},{id:"mint-city-bus",label:"Mint city bus",length:78,width:29,height:30,tire:4.9,cabin:[-.458,-.448,.397,.455],body:"#75a99d",roof:"#d8e2bd",detail:"city",windows:5}],lE=new Map(vg.map(n=>[n.id,n])),_g=[{id:"teal-semi",label:"Teal semi with box trailer",length:119,width:29,paint:"#61978e",roof:"#9bc0a8",trailer:"#eadcbd",stripe:"#83a89c"},{id:"coral-reefer",label:"Coral semi with refrigerated trailer",length:122,width:29,paint:"#b97c76",roof:"#e2ad95",trailer:"#e4e5d8",stripe:"#7298a7",refrigerated:!0}],uE=new Map(_g.map(n=>[n.id,n])),Mg=[{id:"apricot-scooter",label:"Apricot scooter",length:40,width:14,style:"scooter",paint:"#e19872",trim:"#f7d9ab",jacket:"#547c83",helmet:"#f1e5cb"},{id:"ruby-motorcycle",label:"Ruby sport motorcycle",length:46,width:14,style:"racer",paint:"#b95b66",trim:"#edb9a1",jacket:"#594e70",helmet:"#f4c27d"},{id:"moss-motorcycle",label:"Moss trail motorcycle",length:43,width:14,style:"trail",paint:"#869961",trim:"#ead5a0",jacket:"#b57357",helmet:"#ded5a1"},{id:"indigo-motorcycle",label:"Indigo cruiser motorcycle",length:46,width:15,style:"cruiser",paint:"#657a9a",trim:"#ded3aa",jacket:"#98775e",helmet:"#c5d1d2"}],Sg=[{id:"peach-basket-bicycle",label:"Peach basket bicycle",length:27,width:8.8,style:"basket",paint:"#d98474",trim:"#eac996",jacket:"#708e7f",helmet:"#f8d48a"},{id:"seafoam-commuter-bicycle",label:"Seafoam commuter bicycle",length:28,width:8.8,style:"commuter",paint:"#77aba0",trim:"#c5d8bd",jacket:"#b67479",helmet:"#ece0ba"},{id:"lavender-road-bicycle",label:"Lavender road bicycle",length:28,width:8.8,style:"road",paint:"#9e8abb",trim:"#d9c7e2",jacket:"#5c7292",helmet:"#edc99d"},{id:"honey-cargo-bicycle",label:"Honey cargo bicycle",length:30,width:9,style:"longtail",paint:"#d9a359",trim:"#f2d3a3",jacket:"#917da0",helmet:"#e7c79b"}],hE=new Map(Mg.map(n=>[n.id,n])),fE=new Map(Sg.map(n=>[n.id,n])),wg=({id:n,label:t,length:e,width:i,detail:s})=>Object.freeze({id:n,label:t,length:e,width:s==="food"?i+2:i}),wu=Object.freeze([...vg,..._g,...Mg].map(wg)),Eu=Object.freeze(Sg.map(wg));function dE(n){let t=new re;return t.setAttribute("position",new Xt(n.flat(),3)),t.setIndex([0,1,2,0,2,3]),t.computeVertexNormals(),t}function Tu(n){let t=n.map(([i,s])=>{let r=i.index?i.toNonIndexed():i;r!==i&&i.dispose(),r.deleteAttribute("uv");let o=new Wt(s),a=new Float32Array(r.getAttribute("position").count*3);for(let c=0;c<a.length;c+=3)o.toArray(a,c);return r.setAttribute("color",new Me(a,3)),r}),e=On(t);for(let i of t)i.dispose();return e.computeBoundingBox(),e}function Pa(n,t){let e=n.flatMap(([o,a,c])=>[[o,t,-a*.78],[o,t,a*.78],[o,t+1.5,a],[o,c-2.05,a],[o,c,a*.83],[o,c,-a*.83],[o,c-2.05,-a],[o,t+1.5,-a]]).flat(),i=[],s=(n.length-1)*8;for(let o=0;o<s;o+=8)for(let a=0;a<8;a++){let c=(a+1)%8;i.push(o+a,o+a+8,o+c+8,o+a,o+c+8,o+c)}for(let o=1;o<7;o++)i.push(0,o,o+1,s,s+o+1,s+o);let r=new re;return r.setAttribute("position",new Xt(e,3)),r.setIndex(i),r.computeVertexNormals(),r}function pE(n){let t=[],e=(G,V)=>t.push([G,V]),i=(G,V,ft,J,W,st,bt)=>e(new xe(J,W,st).translate(G,V,ft),bt),s=(G,V)=>e(dE(G),V),r=(G,V,ft,J,W,st,bt)=>{let Mt=[[V,J,st],[ft,J,st],[ft,W,st],[V,W,st]];s(G>0?Mt:Mt.reverse(),bt)},{width:o,tire:a,body:c,roof:l,detail:u}=n,f=n.length-2.8,h=f*.5,d=o*.435,p=a*.78,y=8.25+a*.52,m=y-(u==="sports"||u==="convertible"?1.8:.75);e(Pa([[-h,d*.76,y-1.6],[-h+2.4,d*.93,y-.2],[-h+6.2,d,y],[h-6.2,d,y-.24],[h-2.4,d*.92,m+.35],[h,d*.75,m]],p),c);let g=p+.95;for(let G of[-1,1])i(G*(h-.22),g,0,1.42,1.58,d*1.57,Qt.bumper),i(G*(h+.05),g+.82,0,1.08,.95,4.5,Qt.plate);i(h+.1,m-2.8,0,.65,1.2,d*.64,Qt.grille),i(h+.38,m-2.62,0,.24,.35,d*.55,Qt.rim);for(let G of[-1,1]){i(0,p+1.3,G*(d+.04),f*.53,.9,.34,Qt.bumper);for(let V of[-.323,.323]){let ft=f*V,J=G*(d+.05);e(new Re(a,a,2.9,10).rotateX(Math.PI/2).translate(ft,a,J),Qt.tire),e(new Sn(a*.57,8).rotateY(G<0?Math.PI:0).translate(ft,a,J+G*1.46),Qt.rim),e(new Sn(a*.28,6).rotateY(G<0?Math.PI:0).translate(ft,a,J+G*1.48),Qt.hub)}}let[x,v,_,b]=n.cabin.map(G=>f*G),M=y-.35,T=n.height-1.25,S=d*.88,R=S*(n.windows>2||u==="camper"||u==="delivery"?.94:.79),P=G=>Fi(S,R,G),I=G=>Fi(M,T,G),F=(G,V,ft,J=0)=>[Fi(Fi(x,v,V),Fi(b,_,V),G),I(V),ft*(P(V)+J)];function H(G,V,ft,J,W=.2,st=.85,bt=.08){let Mt=[F(V,W,G,bt),F(ft,W,G,bt),F(ft,st,G,bt),F(V,st,G,bt)];s(G>0?Mt:Mt.reverse(),J)}function B(G,V,ft,J,W,st,bt=0){let[Mt,vt]=G>0?[b,_]:[x,v],xt=($,rt)=>[Fi(Mt,vt,rt)+G*bt,I(rt),$*P(rt)],yt=[xt(ft,J),xt(V,J),xt(V,W),xt(ft,W)];s(G>0?yt:yt.reverse(),st)}function Y(G){B(G,-.81,.81,.16,.88,Qt.window,.08),B(G,-.72,.73,.23,.82,Qt.glass,.13),B(G,-.67,.64,.67,.75,Qt.glassGlow,.18)}if(u==="convertible"){B(1,-.88,.88,0,1,l,.08),Y(1),i((x+_)/2,M+.2,0,(_-x)*.96,1.05,S*1.92,Qt.window);for(let G of[-1,1])i(x+5.7,M+2.35,G*S*.43,7.7,2.5,5.6,Qt.upholstery),i(x+2.2,M+3.7,G*S*.43,2,5.2,6,Qt.tan)}else{for(let W of[-1,1])H(W,0,1,c,0,1,0);B(1,-1,1,0,1,c),B(-1,-1,1,0,1,c),Y(1),["delivery","cargo","food"].includes(u)||Y(-1);let G=(_+v)/2,V=_-v+.38;i(G,T+.34,0,V,.84,R*2.05,l),u==="bubble"&&i(G,T+.79,0,V*.88,.52,R*1.67,l),u==="sunroof"&&(i(G,T+.82,0,V*.48,.24,R*1.12,Qt.window),i(G-V*.12,T+.98,0,.65,.18,R,Qt.glassGlow));let ft=n.windows??2,J=u==="delivery"||u==="camper"?[[.7,.94]]:Array.from({length:ft},(W,st)=>[(st+.16)/ft,(st+.86)/ft]);for(let W of[-1,1])for(let[st,bt]of J)H(W,st,bt,Qt.window),H(W,st+.011,bt-.009,Qt.glass,.29,.79,.13),H(W,st+.023,bt-.025,Qt.glassGlow,.64,.72,.18)}for(let G of[-1,1])i(b-3,M+1.05,G*(d+.2),3.2,1.8,1.75,l),i(Fi(x,b,.36),y-1.45,G*(d+.1),2.8,.46,.24,Qt.rim);return{add:e,box:i,sideFace:r,glazingSide:H,bodyParts:t,recipe:n,length:f,outer:d,shoulder:y,nose:h,frontY:m}}function mE(n,t){let{length:e,outer:i,shoulder:s,recipe:r,add:o,box:a,sideFace:c}=n,l=-e*.454,u=e*.105,f=r.height-.4,h=u-l;o(Pa([[l,i*.93,f-.7],[l+1.6,i,f],[u-1.6,i,f],[u,i*.93,f-.7]],s-.8),t),a((l+u)/2,f+.1,0,h-3.5,.28,i*1.6,r.roof);for(let d of[-1,1]){let p=d*(i+.1);c(d,l+3,u-3,s+1.6,s+2.45,p,r.body)}for(let d of[-.4,0,.4])a(l-.13,(s+f)/2,i*d,.26,f-s-3.1,.4,Qt.rim);return{rear:l,front:u,top:f}}function gE(n){let{recipe:t,box:e,sideFace:i,glazingSide:s,length:r,outer:o,shoulder:a}=n,{detail:c,height:l,roof:u}=t;if(c==="wagon"||c==="trail"){let f=l+.5;for(let h of[-1,1])e(r*-.18,f,h*o*.51,r*.3,.85,.83,Qt.roofRail);if(c==="trail"){for(let h of[-.29,-.07])e(r*h,f+.55,0,1.05,.75,o*1.18,Qt.roofRail);e(r*-.18,f+1.1,0,r*.17,1.65,o*.78,Qt.tan)}}else if(c==="sports")e(r*-.4,a+1.1,0,4.2,1.15,o*1.72,Qt.window),e(r*.39,a-.65,0,6.5,.28,1.65,"#f6e5cc");else if(c==="pickup"){let f=r*-.25;e(f,a+.22,0,r*.35,.42,o*1.43,Qt.wood);for(let h of[-1,1])e(f,a+.93,h*o*.84,r*.34,2.28,1.72,u),e(f,a+.48,h*o*.38,r*.33,.25,.4,Qt.tan);e(r*-.429,a+1.05,0,1.8,2.45,o*1.72,u),e(r*-.17,a+1.75,0,5.5,2.5,8,Qt.tan)}else if(c==="cargo"||c==="food"){let{rear:f,front:h}=mE(n,c==="food"?"#f6c3a2":"#f0d099");if(c==="food"){let d=a+7;i(1,f+5.5,h-4.5,d,d+8.4,o+.19,Qt.window),e((f+h)/2,d,o+.75,h-f-9.5,.75,2.65,Qt.wood);for(let p=0;p<7;p++)e(Fi(f+6,h-4.5,p/6),d+8.6,o+1.4,2.5,1.05,2.75,p%2?"#fff0cc":"#d9867e")}}else if(c==="delivery"||c==="camper")for(let f of[-1,1])c==="delivery"?(s(f,.1,.61,"#e5d6e4",.28,.65,.12),s(f,.18,.54,"#b39cc2",.43,.49,.18)):(s(f,.09,.61,"#456575",.29,.68,.12),s(f,.12,.58,"#dbbf89",.49,.62,.18),e(r*-.18,l+.68,f*o*.32,r*.19,.85,o*.48,"#f6e1b1"));else if(c==="city"||c==="bus"){for(let f of[-1,1])e(0,a-1.05,f*(o+.13),r*.62,.88,.42,c==="city"?"#e0d49a":"#e6c29b");c==="city"&&(e(r*.34,l-.5,0,5.5,.7,o*1.05,Qt.window),e(r*-.12,l+.28,0,r*.23,.9,o*1.18,u))}}function jf(n,t,e){return[{role:"body",geometry:Tu(n),material:new Ne({vertexColors:!0,roughness:.65})},{role:"headlamp",geometry:t,material:new Ne({color:"#fff1d7",emissive:"#ffe4ab",emissiveIntensity:.26,roughness:.5})},{role:"taillamp",geometry:e,material:new Ne({color:"#bc5854",emissive:"#ed6b5c",emissiveIntensity:.28,roughness:.5})}]}function yE({length:n,width:t,paint:e,roof:i,trailer:s,stripe:r,refrigerated:o}){let a=[],c=(m,g)=>a.push([m,g]),l=(m,g,x,v,_,b,M)=>c(new xe(v,_,b).translate(m,g,x),M),u=-n/2+1.3,f=n/2-1.3,h=14,d=t/2-1.15,p=d-.7;c(Pa([[u,d-1.2,32],[u+2,d,34],[h-2,d,34],[h,d-1,32]],10.2),s),c(Pa([[17,p-1,18],[21,p,22],[45,p,22],[f-4,p-1,16],[f,p-2,14]],7),e),c(Pa([[27,p-1,28],[31,p-.7,32],[42,p-.7,31],[47,p-1.6,26]],16),i),l(48,23.6,0,.9,6.8,p*1.5,Qt.window),l(48.55,25.8,0,.22,.8,p*1.4,Qt.glassGlow),l(f+.27,11,0,.56,5.9,9,Qt.grille),l(f+.61,8.6,0,.55,1.12,p*1.55,Qt.rim),l(u-.32,10.6,0,.62,1.2,2*d-3,Qt.bumper),l(h+2.8,9.1,0,10,1.5,12,Qt.bumper);for(let m of[-1,1]){l((u+h)/2,15,m*d,h-u-5,2.1,.39,r),l((u+h)/2,26,m*(d+.06),h-u-10,.32,.3,"#f6edd3"),l(40,25,m*(p-.5),7.8,5.25,.32,Qt.window),l(47,21,m*(p+.2),2.1,2.1,1.5,e),l(35,9.5,m*(p+.25),7.2,.85,1.12,Qt.rim),l(u-.1,22,m*d*.41,.48,13.2,.51,Qt.rim);for(let g of[u+9,u+19,23,32,f-8.2]){let x=m*(d-1.42);c(new Re(4.35,4.35,2.8,8).rotateX(Math.PI/2).translate(g,4.35,x),Qt.tire),c(new Sn(2.47,6).rotateY(m<0?Math.PI:0).translate(g,4.35,x+m*1.41),Qt.hub)}}o&&(l(h+1.2,27,0,2.6,7.9,8.8,"#eee5ce"),l(h+2.55,27.8,0,.2,3.9,6.4,r));let y=(m,g)=>Tu([-1,1].map(x=>[new xe(.42,1.3,3.1).translate(m,g,x*(d-3.7)),"#ffffff"]));return jf(a,y(f+.38,12.25),y(u-.54,12.4))}function Eg(n,t){let{style:e,length:i,paint:s,trim:r,jacket:o,helmet:a}=n,c=[],l=(vt,xt)=>c.push([vt,xt]),u=(vt,xt,yt)=>l(new xe(...yt).translate(...xt),vt),f=(vt,xt,yt,$=0)=>l(new ve(1,8,5).scale(...yt).rotateZ($).translate(...xt),vt);function h(vt,xt,yt,$){let rt=new X(...xt),Et=new X(...yt),Ut=new X().subVectors(Et,rt),It=new an().setFromUnitVectors(new X(0,1,0),Ut.clone().normalize());l(new Re($,$,Ut.length(),5,1,!0).applyQuaternion(It).translate(...rt.lerp(Et,.5).toArray()),vt)}let d=t?1:.75,p=i*(t?.132:.15),y=-i*(e==="longtail"?.309:.326),m=i*.326,g=[i*-.024,p+d*1.25,0],x=[i*(e==="cruiser"?-.16:-.115),i*(e==="trail"?.4:e==="cruiser"?.327:.369),0],v=e==="road"||e==="racer",_=[i*(v?.234:.204),x[1]+(v?.5:3.7)*d,0],b=d*(t?2.2:1.36),M=d*(t?1.04:.65),T=d*(t?.9:.65),S=e!=="road";for(let vt of[y,m]){l(new cn(p-M,M,4,12).translate(vt,p,0),Qt.tire),S&&l(new cn(p+d*.37,d*.39,4,6,Math.PI*.74).rotateZ(Math.PI*.13).translate(vt,p,0),s);for(let xt of[0,Math.PI/3,Math.PI*2/3]){let yt=p-M*1.35,$=Math.cos(xt)*yt,rt=Math.sin(xt)*yt;h(Qt.rim,[vt-$,p-rt,0],[vt+$,p+rt,0],d*.23)}l(new Re(d*1.05,d*1.05,b,8).rotateX(Math.PI/2).translate(vt,p,0),Qt.hub)}let R=[y,p,0];h(s,R,x,T),h(s,R,g,T),h(s,x,g,T),h(s,g,_,T);let P=e==="basket"||e==="scooter"?[_[0]*.7,g[1]+d*2.65,0]:_;h(s,x,P,T),P!==_&&h(s,P,_,T);for(let vt of[-1,1])h(Qt.rim,[_[0],_[1]-d*2.3,vt*b*.38],[m,p,vt*b*.45],T*.7);u(Qt.bumper,[x[0]-.25,x[1]+d*.4,0],[d*(t?7.1:4.8),d*1.08,d*3.15]);let I=d*(t?5.05:4.75),F=_[0]+(v?d*1.85:-d*.8),H=_[1]+(v?-d*.6:d*.25);for(let vt of[-1,1]){let xt=[F,H,vt*I];h(Qt.rim,_,xt,d*.47),h(Qt.tire,[F+d*.6,H,vt*I*.82],xt,d*.63)}if(t){u(Qt.bumper,[g[0]+.4,g[1]+1.05,0],[6.4,4.9,5.4]);let vt=e==="scooter"?[_[0]+2.1,x[1]-2.3,0]:[x[0]+5.5,x[1]+.7,0],xt=e==="scooter"?[4.1,5.3,4.2]:e==="racer"?[6.8,3.45,4.55]:[5.4,2.8,3.85];if(f(s,vt,xt,e==="scooter"?.34:-.18),u(r,[vt[0]+.8,vt[1]+.15,xt[2]*.87],[xt[0]*1.18,1,.8]),u(r,[vt[0]+.8,vt[1]+.15,-xt[2]*.87],[xt[0]*1.18,1,.8]),e==="racer")f(Qt.window,[_[0]+2,_[1]+.95,0],[2.75,2.4,3.15],-.52),u(s,[y+1.75,x[1]+1.25,0],[5.6,1.55,4.25]);else if(e==="trail")u(r,[m-2.2,p*2.1+1.05,0],[7.25,.82,3.65]),u(Qt.rim,[y+1.55,x[1]-1.9,0],[6.7,1.35,4.2]);else if(e==="scooter")f(s,[y+3.7,x[1]-3.1,0],[6.9,3.05,4.05],-.13),u(r,[g[0],p+1.1,0],[8.2,1.22,6.2]);else for(let yt of[-1,1])h(Qt.rim,[y-2.2,p+2.1,yt*2.8],[g[0]+4.5,p+.45,yt*3.25],.79)}else{let vt=e==="longtail"?[y+1.1,p*2.05+1.8,0]:[m-.98,_[1]-1.55,0];e==="basket"||e==="longtail"?(u(Qt.wood,vt,[e==="longtail"?7.6:4.1,2.8,4.8]),u(r,[vt[0],vt[1]+1.15,0],[e==="longtail"?8:4.6,.56,5.1]),u(Qt.tan,[vt[0],vt[1]+1.5,0],[e==="longtail"?6.3:3.6,.34,3.75])):e==="commuter"&&(u(r,[y+1.65,p+1.05,2],[4.2,3.4,1.85]),u(Qt.roofRail,[y+1.6,p*2.05+.45,0],[5.3,.66,4.3]))}let B=[x[0]-d*.38,x[1]+d*2.05,0],Y=[B[0]+(v?3.05:1.05)*d,B[1]+d*3.75,0],G=[Y[0]+(v?3.35:.95)*d,Y[1]+(v?3.1:4.85)*d,0],V=v?-.57:-.22;f(o,Y,[d*2.6,d*4.15,d*3],V),f(a,G,[d*2.94,d*2.68,d*2.62]),f(Qt.window,[G[0]+d*2.1,G[1]-d*.4,0],[d*1.08,d*1.05,d*2.2]),(e==="commuter"||e==="trail")&&u(r,[Y[0]-d*2.1,Y[1]+d*.6,0],[d*1.9,d*3.3,d*3.5]);let ft="#4b4e63",J="#e2b491";for(let vt of[-1,1]){let xt=[Y[0]+d*1.1,Y[1]+d*1.65,vt*d*2.43],yt=[Fi(xt[0],F,.48),Fi(xt[1],H,.52)-d,vt*d*3.48],$=[F,H,vt*I*.93];h(o,xt,yt,d*.95),h(o,yt,$,d*.76),u(J,$,[d*1.5,d*1.11,d*1.09]);let rt=t?0:vt*d*1.35,Et=[B[0]+d*(t?4.3:4.9)+rt,B[1]-d*3.5,vt*d*2.64],Ut=[g[0]+d*(e==="scooter"?2.65:.35)+rt,g[1]+d*.27-rt,vt*d*2.5];h(ft,[B[0],B[1],vt*d*1.86],Et,d*1.12),h(ft,Et,Ut,d*.88),u(Qt.tire,[Ut[0]+d*.25,Ut[1],Ut[2]],[d*2.15,d*.95,d*1.42])}let W=d*(t?1.34:.84),st=[m+d*.58,p*(t?2.3:2.18),0],bt=[y-d*.56,p*(t?2.18:2.02),0];h(Qt.bumper,[m,p+d*1.5,0],st,d*.58),h(Qt.bumper,[y,p*1.6,0],bt,d*.46);let Mt=vt=>Tu([[new ve(W,6,4).scale(.53,.78,1).translate(...vt),"#ffffff"]]);return jf(c,Mt(st),Mt(bt))}function Tg(n){let t=hE.get(n);if(t)return Eg(t,!0);let e=uE.get(n);if(e)return yE(e);let i=lE.get(n);if(!i)return null;let s=pE(i);gE(s);let{outer:r,nose:o,frontY:a,shoulder:c,bodyParts:l}=s,u=(f,h)=>Tu([-1,1].map(d=>[new xe(1.48,1.8,r*.35).translate(f*(o+.19),h,d*r*.63),"#ffffff"]));return jf(l,u(1,a-1.75),u(-1,c-2.65))}function Ag(n){let t=fE.get(n);return t?Eg(t,!1):null}var Rg=new Map([["clear",{stride:4,speed:70}],["slow",{stride:2,speed:44}],["heavy",{stride:1,speed:20}]]),Ji={stride:4,crossingSeconds:3.2},xE=242,Cg=12,Ig=.38,Pg=86,Fg=new Map(wu.map(n=>[n.id,n])),Lg=["seafoam-sedan","blue-wagon","butter-compact","ruby-motorcycle","pine-suv","blue-wagon","sand-pickup","butter-compact","lavender-delivery","pine-suv","teal-semi","indigo-motorcycle"].map(n=>Fg.get(n)),bE=new Wt("#fff1cf"),vE=new Wt("#db514c");function _E(n){n.computeBoundingBox();let t=n.boundingBox;if(t.max.z-t.min.z<5)return[t.getCenter(new X)];let e=(t.min.z+t.max.z)/2,i=[new Le,new Le],s=new X,r=n.attributes.position;for(let o=0;o<r.count;o++)s.fromBufferAttribute(r,o),i[+(s.z>=e)].expandByPoint(s);return i.map(o=>o.getCenter(new X))}var ME=`
  #ifdef USE_FOG
    #ifdef FOG_EXP2
      opacity *= exp(-fogDensity * fogDensity * vFogDepth * vFogDepth);
    #else
      opacity *= 1.0 - smoothstep(fogNear, fogFar, vFogDepth);
    #endif
  #endif
`;function Ng(n){let t={...qi.clone(Vt.fog),lightStrength:{value:1}};return new ze({fog:!0,uniforms:t,transparent:!0,depthWrite:!1,blending:Wi,toneMapped:!1,vertexShader:`
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
        ${ME}
        gl_FragColor = vec4(color, clamp(opacity * lightStrength, 0.0, 1.0));
        #include <colorspace_fragment>
      }
    `})}function SE({index:n,lane:t}){let e=Math.floor(n/Ji.stride),i=n%Ji.stride;return Lg[(2*(e+i)+t)%Lg.length]}function Dg({centerX:n,width:t,lanes:e}){let i=t-60,s=n-i/2,r=Math.max(1,Cg*Math.round(i/(Cg*xE))),o=i/r,a=e.map((y,m)=>Array.from({length:r},(g,x)=>({z:y,lane:m,index:x,x:s,offset:o*(x+.25+(r===1&&m?.5:0))}))),c=0,l,u,f,h=!1,d=[];function p(y,m,g,x=!1){let v=m?.severity==="ambient"?Ji:Rg.get(m?.severity),_=Number.isFinite(l)&&Number.isFinite(y)?te.clamp(y-l,0,.25):0;if(l=y,v!==u){h=!!(u&&v&&(v===Ji||u===Ji));let T=Math.min(r,v?.stride??1),S=v===Ji?Math.floor(T/2):1;d=v?a.flatMap((R,P)=>R.filter(({index:I})=>I%T===P*S%T)):[],u=v}if(!v)return f=void 0,d;let b=m.speedFactor,M=v===Ji?o*Math.min(r,Ji.stride)/(2*Ji.crossingSeconds):Number.isFinite(b)&&b>0?Rg.get("clear").speed*te.clamp(b,.22,1):v.speed;if(x)c=!g&&Number.isFinite(y)?Math.max(0,y)*M:0;else if(!g)if(h&&f!==void 0){let T=Math.exp(-_/Ig),S=f-M;c+=_*M+S*Ig*(1-T),f=M+S*T,h=Math.abs(f-M)>.1}else c+=_*M,f=M;c%=i;for(let T of d){let S=(T.offset+c)%i;T.x=s+(T.lane?i-S:S)}return d}return{capacity:r*e.length,update:p}}function Ug(n){let t=new Jt,e=Dg(n),i,s=new Map;function r(x,v,_=e.capacity){let b=new jn(x,v,_);return b.count=0,b.frustumCulled=!1,b.instanceMatrix.setUsage(Ln),b}let o=r(new Sn(1,18).rotateX(-Math.PI/2).translate(0,.02,0),new _e({color:"#35323c",opacity:.23,transparent:!0,depthWrite:!1})),a=r(new wn(1,2).rotateX(-Math.PI/2).translate(.5,.16,0),Ng(!1),e.capacity*2);a.name="road-headlight-beams";let c=r(new wn(1,1),Ng(!0),e.capacity*4);c.name="road-lamp-halos",a.visible=c.visible=!1,t.add(o,a,c);let l=new Be,u=Math.abs(n.lanes[0]-n.lanes[1])/2,f,h=1;t.visible=!1;function d(x,v){for(let{mesh:_,role:b}of x.layers)b==="headlamp"&&(_.material.emissiveIntensity=v?2.45*h:.26),b==="taillamp"&&(_.material.emissiveIntensity=v?1.13*h:.28)}function p(x){if(s.has(x.id))return s.get(x.id);let v=new Jt;v.name=`vehicle-${x.id}`;let _=Tg(x.id).map(({geometry:T,material:S,role:R})=>({mesh:r(T,S),role:R}));v.add(..._.map(({mesh:T})=>T)),t.add(v);let b=T=>_E(_.find(S=>S.role===T).mesh.geometry),M={group:v,layers:_,headlamps:b("headlamp"),taillamps:b("taillamp"),count:0};return d(M,f),s.set(x.id,M),M}function y(x,v,_,b,M){let T=M?12.4:8.6;l.position.set(v.x+_*(b.x+(M?1.1:-1)),n.surfaceY+b.y+.8,v.z+_*b.z),l.scale.set(T,T,1),l.updateMatrix(),c.setMatrixAt(x,l.matrix),c.setColorAt(x,M?bE:vE)}function m(x,v,{reduceMotion:_=!1,night:b=!1,transientTelemetry:M=!1,headlightBrightness:T=1,inView:S}={}){M&&(i??=Dg(n));let P=(M?i:e).update(x,v,_,M);if(t.visible=P.length>0,a.visible=c.visible=b&&t.visible,a.count=c.count=0,!t.visible)return;let I=Number.isFinite(T)?te.clamp(T,.35,1.6):1;if(b!==f||I!==h){f=b,h=I,a.material.uniforms.lightStrength.value=I,c.material.uniforms.lightStrength.value=I;for(let G of s.values())d(G,b)}for(let G of s.values())G.count=0;let F=Fg.get(v?.vehicleStyle),H=0,B=0,Y=0;for(let G of P){let V=F??SE(G),ft=V.length*.6+(b?Pg:0);if(S&&!S(G.x,n.surfaceY,G.z,Math.hypot(ft,V.width,45)))continue;let J=p(V);l.position.set(G.x,n.surfaceY,G.z),l.rotation.y=G.lane?Math.PI:0,l.scale.set(1,1,1),l.updateMatrix();for(let{mesh:bt}of J.layers)bt.setMatrixAt(J.count,l.matrix);if(J.count++,l.scale.set(V.length*.55,1,V.width*.62),l.updateMatrix(),o.setMatrixAt(Y++,l.matrix),!b)continue;let W=G.lane?-1:1,st=te.clamp(V.length*1.1,53,Pg);for(let bt of J.headlamps){let Mt=Math.max(5,Math.min(16,u-Math.abs(bt.z)-1));l.position.set(G.x+W*(bt.x+1),n.surfaceY,G.z+W*bt.z),l.scale.set(st,1,Mt),l.updateMatrix(),a.setMatrixAt(H++,l.matrix),y(B++,G,W,bt,!0)}for(let bt of J.taillamps)y(B++,G,W,bt,!1)}b&&(a.count=H,c.count=B,a.instanceMatrix.needsUpdate=c.instanceMatrix.needsUpdate=!0,c.instanceColor.needsUpdate=!0),t.visible=Y>0,o.count=Y,Y&&(o.instanceMatrix.needsUpdate=!0);for(let{group:G,layers:V,count:ft}of s.values()){G.visible=ft>0;for(let{mesh:J}of V)J.count=ft,ft&&(J.instanceMatrix.needsUpdate=!0)}}function g(){t.traverse(x=>{x.isInstancedMesh&&(x.dispose(),x.geometry.dispose(),x.material.dispose())}),t.clear()}return{root:t,update:m,dispose:g}}var kg=22,Og=63,wE=525,EE=1100,TE=22,AE=75,Kf=75,RE=105,CE=54,IE=[{shirt:"#c87f70",trim:"#f1d19d",pants:"#556072",skin:"#d49876",hair:"#4d3635",accessory:"bun"},{shirt:"#6a988b",trim:"#e8c58d",pants:"#5f666b",skin:"#a86a50",hair:"#382c34",accessory:"cap"},{shirt:"#9082ae",trim:"#f0d8b4",pants:"#6a627f",skin:"#e8af89",hair:"#6a4235",accessory:"pack"},{shirt:"#c79b53",trim:"#f1d39b",pants:"#677c7a",skin:"#a96c59",hair:"#4c3435",accessory:"curls"},{shirt:"#779cb8",trim:"#f4dfb5",pants:"#5a6b83",skin:"#d99871",hair:"#654537",accessory:"pack"},{shirt:"#ba8096",trim:"#f9ddad",pants:"#736583",skin:"#e3a986",hair:"#58403d",accessory:"bow"}],Bg=[[[0,1],[5,.7],[1,1]],[[2,.97]],[[3,1],[4,.76]],[[1,.96],[2,1]],[[0,1],[5,.71]],[[3,.98]]],PE=(n,t)=>(n%t+t)%t;function LE(n){let t=n.width-AE*2,e=[],i=[];if(!Number.isFinite(t)||t<=0||!Number.isFinite(n.centerX))return{walkers:e,cyclists:i,sample:()=>({walkers:e,cyclists:i})};let s=n.centerX-t/2,r=Math.max(1,Math.round(t/wE)),o=Math.max(1,Math.round(t/EE)),a=t/r,c=t/o;for(let[m,g]of(n.sidewalks??[]).entries()){let{minZ:x,maxZ:v,surfaceY:_}=g,b=v-x;if(![x,v,_].every(Number.isFinite)||b<=0)continue;let M=m%2?-1:1,T=Math.min(1,b/TE),S=x+b*(M>0?.25:.75),R=x+b*(M>0?.76:.24);for(let P=0;P<r;P++){let I=Bg[(P+m*2)%Bg.length],F=t/2+(P+m*.42)*a-35,H=`sidewalk-walk-${m}-${P}`;for(let[B,[Y,G]]of I.entries())e.push({id:`${H}-${B}`,groupId:H,style:Y,child:G<.8,offset:F-M*13.2*B,scale:T*G,direction:M,y:_,z:S+M*.62*(B%2),phase:P*.91+m*.8+B*2.1})}for(let P=0;P<o;P++)i.push({id:`sidewalk-bike-${m}-${P}`,style:Eu[(P+m*2)%Eu.length],offset:t/2+(P+m*.65)*c,scale:T,direction:M,y:_,z:R,phase:P*1.7+m})}let l=t/kg,u=t/Og,f=l+Kf+u+RE,h=Math.max(0,l/2-CE),d=[-1,1].map(m=>e.find(g=>g.direction===m&&!g.child)).filter(Boolean),p=[-1,1].map(m=>i.find(g=>g.direction===m)).filter(Boolean);function y(m=0,g=!1,{night:x=!1,activity:v}={}){let _=Number.isFinite(m)?Math.max(0,m):0;if(v==="overnight")return{walkers:[],cyclists:[]};if(x||v==="evening"){if(g)return{walkers:[],cyclists:[]};let M=Math.floor((_+h)/f),T=(_+h)%f,S=T>=l+Kf,R=S?T-l-Kf:T,P=S?p:d,I=S?u:l;if(R>=I||!P.length)return{walkers:[],cyclists:[]};let F=P[(M+1)%P.length],H=R/I*t,B=s+(F.direction>0?H:t-H),Y={...F,x:B,gait:R*(S?7:10)+F.phase};return S?{walkers:[],cyclists:[Y]}:{walkers:[Y],cyclists:[]}}let b=(M,T,S)=>M.map(R=>({...R,x:s+PE(R.offset+R.direction*T*_,t),gait:g?0:_*S+R.phase}));return{walkers:b(e,kg,10),cyclists:b(i,Og,7)}}return{walkers:e,cyclists:i,sample:y}}var Au={ink:"#4b3e4c",shoe:"#4a4651",sole:"#e2d0b7",blush:"#c88376"};function zg(n,t,e){let{shirt:i,trim:s,pants:r,skin:o,hair:a,accessory:c}=IE[n.style],l=t?0:Math.sin(n.gait),u=Math.abs(l)*.69,f=h=>h+u;e(i,0,f(10.45),0,2.95,4.3,3.4),e(r,-.1,f(7.25),0,2.6,1.7,3.04),e(s,1.1,f(13.35),0,2.14,.69,2.55),e(s,2.68,f(10.4),-.7,.41,.86,1);for(let h of[-1,1]){let d=l*h,p=d*3,y=Math.max(0,d)*1.35;e(r,p*.45,4.5+y*.42+u*.32,h*1.51,1.19,3.2,1.25,-.48*d),e(Au.shoe,.77+p,1.11+y,h*1.52,2.17,.99,1.34),e(Au.sole,1.38+p,.49+y,h*1.52,1.64,.43,1.32),e(i,-d*1.07,f(10.16),h*3.15,1.23,2.87,1.15,.38*d),e(o,-d*2.16,f(7.7),h*3.31,.98,1.1,.95)}e(a,-.67,f(17.25),0,4.17,4.32,3.82),e(o,1.05,f(16.63),0,3.76,3.75,3.41),e(a,1.12,f(19.85),-.89,2.75,1.57,2.82,-.3),e(o,4.48,f(16.54),0,.64,.63,.66);for(let h of[-1,1])e(o,.36,f(16.69),h*3.47,1.02,1.07,.64),e(Au.ink,4.18,f(17.25),h*1.35,.34,.47,.43),e(Au.blush,3.76,f(16.21),h*2.12,.37,.29,.55);if(c==="bun"&&(e(a,-3.45,f(19.68),.72,1.98,1.89,1.89),e(s,-3.51,f(20.79),1.35,1.64,.47,.69)),c==="cap"&&(e(i,-.5,f(20.2),0,3.72,1.97,3.45),e(s,2.72,f(19.62),0,2.43,.46,2.89)),c==="pack"&&(e(s,-2.88,f(10.2),0,1.48,2.89,2.63),e(i,-4.01,f(10.65),0,.46,1.28,1.77)),c==="curls")for(let h of[-1,1])e(a,-.9,f(18.52),h*2.68,2.6,2.83,1.33);c==="bow"&&(e(s,.1,f(21.05),2.67,1.56,.92,.65,.47),e(s,1.82,f(21.05),2.67,1.51,.92,.65,-.47))}function Hg(n){let t=LE(n),e=new Jt;if(e.name="sidewalk-scenery",!t.walkers.length&&!t.cyclists.length)return{root:e,update(){},dispose:()=>e.removeFromParent()};let i=new Be;function s(g,x,v,_){let b=new jn(x,v,_);return b.name=g,b.frustumCulled=!1,b.instanceMatrix.setUsage(Ln),e.add(b),b}let r=new Map,o=0;for(let g of t.walkers)zg(g,!0,x=>{o++,r.has(x)||r.set(x,new Wt(x))});let a=s("sidewalk-walkers",new ve(1,9,6),new Ne({color:"#fff",roughness:.81}),o),c=s("sidewalk-contact-shadows",new Sn(1,16).rotateX(-Math.PI/2),new _e({color:"#584b52",opacity:.23,transparent:!0,depthWrite:!1}),t.walkers.length+t.cyclists.length),l=new Map(Eu.map(g=>{let x=t.cyclists.filter(v=>v.style.id===g.id).length;return[g.id,x?Ag(g.id).map(({geometry:v,material:_,role:b})=>({role:b,mesh:s(`sidewalk-bicycle-${g.id}-${b}`,v,_,x)})):[]]})),u,f=0,h,d,p;function y(g,{reduceMotion:x=!1,night:v=!1,transientTelemetry:_=!1,activity:b,inView:M}={}){let T=v||b==="evening"||b==="overnight";if(T!==u){for(let V of l.values())for(let{role:ft,mesh:J}of V)ft==="headlamp"&&(J.material.emissiveIntensity=T?1.05:.16),ft==="taillamp"&&(J.material.emissiveIntensity=T?.75:.18);u=T}if(!_){let V=Number.isFinite(h)&&Number.isFinite(g)?te.clamp(g-h,0,.25):0;x||(f+=V),h=g}let S=_?x?0:g:f;if(d?.time===S&&d?.reduceMotion===x&&d?.transientTelemetry===_&&d?.night===v&&d?.activity===b&&d?.inView===M)return;let R=!!d?.inView;d={time:S,reduceMotion:x,transientTelemetry:_,night:v,activity:b,inView:M};let P=t.sample(S,x,{night:v,activity:b}),I=P.walkers.length===t.walkers.length?"day":P.walkers[0]?.id,F=!!M||R||I!==p;p=I;let H=0,B=0;function Y(V,ft,J){i.position.set(V.x,V.y+.065,V.z),i.rotation.set(0,0,0),i.scale.set(ft*V.scale,1,J*V.scale),i.updateMatrix(),c.setMatrixAt(B++,i.matrix)}for(let V of P.walkers){let{direction:ft,scale:J}=V;if(M&&!M(V.x,V.y+12*J,V.z,15*J))continue;let W=ft>0?0:Math.PI;zg(V,x,(st,bt,Mt,vt,xt,yt,$,rt=0)=>{i.position.set(V.x+bt*J*ft,V.y+Mt*J,V.z+vt*J*ft),i.rotation.set(0,W,rt),i.scale.set(xt*J,yt*J,$*J),i.updateMatrix(),F&&a.setColorAt(H,r.get(st)),a.setMatrixAt(H++,i.matrix)}),Y(V,5.32,4.1)}let G=new Map;for(let V of P.cyclists){if(M&&!M(V.x,V.y+11*V.scale,V.z,Math.hypot(V.style.length*.6,20)*V.scale))continue;let ft=G.get(V.style.id)??0;i.position.set(V.x,V.y,V.z),i.rotation.set(0,V.direction>0?0:Math.PI,0),x||i.rotateX(Math.sin(V.gait)*.028),i.scale.setScalar(V.scale),i.updateMatrix();for(let{mesh:J}of l.get(V.style.id))J.setMatrixAt(ft,i.matrix);G.set(V.style.id,ft+1),Y(V,V.style.length*.52,V.style.width*.58)}for(let[V,ft]of l)for(let{mesh:J}of ft)J.count=G.get(V)??0,J.visible=J.count>0,J.visible&&(J.instanceMatrix.needsUpdate=!0);a.count=H,c.count=B,a.visible=H>0,c.visible=B>0,a.visible&&(F&&a.instanceColor&&(a.instanceColor.needsUpdate=!0),a.instanceMatrix.needsUpdate=!0),c.visible&&(c.instanceMatrix.needsUpdate=!0)}function m(){for(let g of e.children)g.dispose(),g.geometry.dispose(),g.material.dispose();e.clear(),e.removeFromParent()}return{root:e,update:y,dispose:m}}var Na=Math.PI*2,{clamp:Ru,lerp:Cs}=te,NE=new Set(["rainy","pouring","lightning-rainy","windy","windy-variant"]),DE=188,FE=490,UE=175,La=[[-.49,.67],[-.34,.94],[-.1,1],[.2,.84],[.39,.48],[.51,.045]],kE=[{id:"sailboat",name:"Ivory sailboat",length:59,beam:21,paint:"#558e94",deck:"#e1bb86",center:-298,radius:122,offshore:54,drift:6,period:74,start:1.03,wake:.63},{id:"cabin",name:"Coral cabin launch",length:66,beam:24,paint:"#d47960",deck:"#eed3a7",center:270,radius:118,offshore:54,drift:5,period:48,start:-1.32,wake:1},{id:"fishing",name:"Juniper fishing boat",length:52,beam:20,paint:"#689483",deck:"#d4b083",center:31,radius:78,offshore:103,drift:8,period:87,start:2.16,wake:.7},{id:"jet-ski",name:"Lagoon jet ski",length:30,beam:12.2,paint:"#438e90",deck:"#e7b768",center:514,radius:46,offshore:72,drift:6,period:16,start:.47,wake:.96,wakeSeconds:3.7},{id:"cruise-ship",name:"Pearl cruise ship",length:149,beam:41,paint:"#436b84",deck:"#e9c79d",center:76,radius:201,offshore:286,drift:23,period:148,start:1.53,wake:.56,wakeSeconds:8}];function oo(n,t){let e=0,i=n.length-1;for(;i-e>1;){let o=e+i>>1;t<n[o].x?i=o:e=o}let s=n[e],r=n[i];return Cs(s.z,r.z,Ru((t-s.x)/(r.x-s.x),0,1))}function Vg(n){if(!Array.isArray(n?.shoreline)||n.shoreline.length<2||![n.y,n.farZ,n.focusX].every(Number.isFinite))return[];let{shoreline:t,farZ:e,focusX:i}=n,s=t[0].x,r=t.at(-1).x;return!Number.isFinite(s)||!Number.isFinite(r)||r-s<280?[]:kE.map(o=>{let a=Math.min(o.radius,(r-s)/5),c=a+o.length,l=Ru(i+o.center,s+c,r-c);function u(f){let h=l+Math.cos(f)*a,d=Math.max(e+65,oo(t,h)-o.offshore-Math.sin(f)*o.drift);return{x:h,z:d}}return{...o,point:u}}).filter(o=>{for(let a=0;a<12;a++){let{x:c,z:l}=o.point(a*Na/12);if(oo(t,c)-l<o.length/2+8)return!1}return!0})}function OE(n,t=Vg(n)){if(!t.length)return()=>null;let{shoreline:e,farZ:i}=n,s=e[0].x+120,r=e.at(-1).x-120,o=r-s;if(o<120)return()=>null;function a(u,f,h,d){let p=o/f,y=p+h,m=u.flatMap(x=>{let v=t.find(b=>b.id===x);if(!v)return[];let _=[1,-1].map(b=>({...v,start:0,period:p,point(M){let T=v.length*.55,S=Ru((b>0?s:r)+b*o*M/Na,e[0].x+T+8,e.at(-1).x-T-8),R=Math.min(oo(e,S),oo(e,S-T),oo(e,S+T)),P=Math.max(i+65,R-v.offshore-Math.sin(M*2)*v.drift*.55);return{x:S,z:P}}}));for(let b=0;b<=20;b++){let{x:M,z:T}=_[0].point(b*Na/20);if(oo(e,M)-T<v.length/2+8)return[]}return[_]});if(!m.length)return()=>null;let g=d(p,y);return x=>{let v=(Number.isFinite(x)?Math.max(0,x):0)+g,_=v%y;if(_>=p)return null;let b=Math.floor(v/y);return{route:m[b%m.length][b%2],elapsed:_}}}let c=a(["cabin","fishing"],37,DE,u=>Math.max(0,u/2-42)),l=a(["fishing"],29,FE,(u,f)=>f-UE);return(u,f)=>(f==="overnight"?l:c)(u)}function Wg(n,t,e=.003){let i=n.point(t-e),s=n.point(t+e);return Math.atan2(i.z-s.z,s.x-i.x)}function BE(n,t,{condition:e}={}){let i=Number.isFinite(t)?t:0,s=n.start+i*Na/n.period,{x:r,z:o}=n.point(s),a=i*1.24+n.start*3,c=n.id==="jet-ski"?1.9:n.id==="cruise-ship"?.55:1,l=(NE.has(e)?1.55:1)*c;return{x:r,z:o,angle:s,yaw:Wg(n,s),heave:Math.sin(a)*.55*l,pitch:Math.cos(a*.89)*.017*l,roll:Math.sin(a*.74+.4)*.031*l}}function Xg(n,t){let e=new re;return e.setAttribute("position",new Xt(n.flat(),3)),e.setIndex(t),e.computeVertexNormals(),e}function qg(n){return Xg(n,n.length===3?[0,1,2]:[0,1,2,0,2,3])}function ao(n,t,e,i,s=1){let r=La.flatMap(([l,u])=>{let f=l*n,h=t*u*s/2;return[[f,i,-h*.58],[f,i,h*.58],[f,e-.9,h],[f,e,h*.88],[f,e,-h*.88],[f,e-.9,-h]]}),o=[],a=6,c=(La.length-1)*a;for(let l=0;l<c;l+=a)for(let u=0;u<a;u++){let f=(u+1)%a;o.push(l+u,l+u+a,l+f+a,l+u,l+f+a,l+f)}for(let l=1;l<a-1;l++)o.push(0,l,l+1,c,c+l+1,c+l);return Xg(r,o)}function zE(n){let t=n.map(([i,s])=>{let r=i.index?i.toNonIndexed():i;r!==i&&i.dispose(),r.deleteAttribute("uv");let o=new Wt(s),a=r.getAttribute("position").count,c=new Float32Array(a*3);for(let l=0;l<a;l++)o.toArray(c,l*3);return r.setAttribute("color",new Me(c,3)),r}),e=On(t);for(let i of t)i.dispose();return e}function De(n,t,e,i,s,r){return new xe(n,t,e).translate(i,s,r)}function Xe(n,t,e,i,s,r,o=0){return new ve(1,12,7).scale(n/2,t/2,e/2).rotateZ(o).translate(i,s,r)}function en(n,t,e){let i=new X(...n),s=new X(...t).sub(i),r=new an().setFromUnitVectors(new X(0,1,0),s.clone().normalize());return new Re(e,e,s.length(),6).applyQuaternion(r).translate(...i.addScaledVector(s,.5).toArray())}function Gg(n,t,e,i,s,r){let o=[0,.19,.31,.64,1],a=4,c=(l,u)=>{let f=Cs(Cs(t[0],e[0],l),i[0],u),h=Cs(Cs(t[1],e[1],l),i[1],u),d=Cs(Cs(t[2],e[2],l),i[2],u)+Math.sin(l*Math.PI)*s*(1-u);return[f,h,d]};for(let l=0;l<o.length-1;l++){let u=o[l],f=o[l+1];for(let h=0;h<a;h++){let d=h/a,p=(h+1)/a,y=[c(d,u),c(p,u),c(p,f)];f<1&&y.push(c(d,f)),n.push([qg(y),r[l]])}}}function HE(n){let t=[3,43,0];n.push([en([3,4,0],t,.9),"#c6a983"],[en([3,11,0],[-25,10,-13],.6),"#c6a983"],[en([28,5,0],t,.33),"#d7c5a8"],[en([-25,5,0],t,.28),"#d7c5a8"],[De(15,1.9,10,-13,5.4,0),"#a8886e"],[De(9,1.5,7.5,-13,6.35,0),"#62797b"]),Gg(n,[-25,10.5,-13],[3,11.5,0],[3,41,0],-9.5,["#fff5df","#cc7f68","#fff8e6","#f3e2b8"]),Gg(n,[4,10,1],[24,8.5,6.5],[5,33,0],4.8,["#eaf1dc","#77ada7","#eff5dd","#f4ecd7"])}function GE(n){n.push([De(28,8.5,17,-7,9.1,0),"#f1e5cc"],[De(25,1.7,18.4,-8.4,14.4,0),"#d7e1d0"],[De(9,.75,7,-9,15.5,0),"#8aa5a5"],[De(9,2.2,11,-24,5.9,0),"#bc9472"],[qg([[7.03,6.5,-7],[7.03,12.75,-6.6],[7.03,12.75,6.6],[7.03,6.5,7]]),"#678b99"],[en([1,14,0],[1,21,0],.55),"#d5d6cc"]);for(let t of[-1,1]){for(let e of[-15,-5,3])n.push([De(e===3?4.2:6.4,4.1,.27,e,10.5,t*8.56),"#507385"]);n.push([en([12,5,t*8.6],[24,5,t*4.7],.49),"#f4dec2"],[en([12,4,t*8.6],[12,5,t*8.6],.44),"#f4dec2"])}}function VE(n){n.push([De(15,6.1,13,6,7.9,0),"#e4d7ad"],[De(17,1.4,14,6,11.65,0),"#71968e"],[De(.3,3.5,9.5,13.61,8.8,0),"#587a82"],[De(9,3.4,7,-8,6.8,2.6),"#d7a674"],[De(7.2,.75,5.8,-8,8.7,2.6),"#ebc996"],[en([-19,5,-5],[-28,16,-7],.45),"#907459"],[en([-28,16,-7],[-34,5.5,-10],.18),"#ccbaa0"]);for(let t of[-5,5])n.push([De(7.4,3,.25,6,8.8,t*1.31),"#678c91"],[new cn(2.35,.63,5,10).rotateX(-Math.PI/2).translate(-17,5,t),"#d88761"])}function WE(n){n.push([Xe(15.9,5.4,9,4.7,3.1,0,-.07),"#52a7a6"],[Xe(11.3,4.9,5.1,4.4,4.6,0,-.33),"#e5ae68"],[Xe(5.1,2.4,3.15,8.7,6.02,0,-.43),"#f5d591"],[Xe(3.4,2.5,3.26,3.25,6.15,0,-.3),"#426575"],[Xe(12.8,3.45,5.9,-4.45,4.76,0,.11),"#40535c"],[De(5.8,.54,5.4,-11.3,2.88,0),"#7bb3a7"],[en([2.9,5.7,0],[1.9,9.7,0],.52),"#69685d"],[en([2.16,9.57,-3.35],[2.16,9.57,3.35],.4),"#53616a"],[Xe(5.6,3.4,5.7,-3.8,6.35,0),"#5c738b"],[Xe(6.06,7.3,5.45,-1.34,10.1,0,-.48),"#db7e59"],[Xe(4.85,5.4,4.54,.02,11.1,0,-.48),"#efb36c"],[Xe(4.84,5.2,4.82,1.37,15.38,0,-.15),"#f5dfaf"],[Xe(2.34,2.04,4.67,2.55,15.37,0,-.12),"#4f637a"],[Xe(.81,1.36,3.45,3.48,15.63,0,-.14),"#8eafb5"]);for(let t of[-1,1]){let e=t*3.01;n.push([Xe(13.7,.75,1.52,-4.45,3.18,t*4.19),"#59646b"],[Xe(6.2,2.32,1.64,-3.75,6.18,e,-.33),"#627a92"],[Xe(4.25,1.52,1.44,-5.88,4.5,t*3.78,.86),"#51657a"],[Xe(3.45,1.11,1.48,-5.58,3.43,t*4.05),"#334951"],[en([-.87,11.64,t*2.02],[1.79,9.65,e],.79),"#d68868"],[Xe(1.51,1.36,1.34,1.92,9.7,t*3.21),"#c98161"])}}function XE(n,{length:t,beam:e}){let i="#f2e9d8",s="#fff3dc",r="#557788",o="#9fbdbe";n.push([De(109,6.6,29.1,-4,10.27,0),i],[De(110.2,1.15,31.3,-4,13.75,0),s],[De(92,5.1,26.2,-3.5,16.7,0),i],[De(94.7,1.02,28.1,-3.8,19.42,0),s],[De(66.2,4.5,21.8,2.8,21.9,0),i],[De(69.7,.91,24.7,2.9,24.44,0),s],[ao(29,24,26.77,20.72,.86).translate(31,0,0),i],[ao(30.3,25,25.6,23.86,.92).translate(31,0,0),r],[ao(28.9,23,27.12,26.39,.9).translate(31,0,0),s],[De(23.6,.76,15.3,-24.9,25,0),"#d6b18d"],[De(19.4,.49,11.1,-24.9,25.51,0),"#81b9b5"],[De(15.1,.16,8.7,-25.8,25.82,0),"#62a9b4"],[De(12,.14,1.05,-24.6,25.9,2.82),"#a7d6cc"],[Xe(12,2.13,8.2,15.4,25.76,0),"#dfe6d8"],[en([27,27,0],[26.5,35.4,0],.58),"#e5e4d8"],[en([24.1,33,-3.6],[24.1,33,3.6],.41),"#e5e4d8"],[Xe(4.21,3.29,3.84,13.4,27.8,0),"#e9e9d9"],[Xe(3.57,2.86,3.35,9.6,27.12,5.6),"#dedfce"]);for(let a of[-5.9,5.9])n.push([en([1,24.8,a],[-1.47,34,a],2.51),"#dfa179"],[en([-.94,32,a],[-1.62,34.62,a],2.55),"#9d5c54"],[Xe(4.4,.46,4.62,-1.65,34.66,a),"#514e59"]);for(let a of[-1,1]){for(let[c,l,u,f]of[[101,10.86,14.67,6.4],[89,17.18,13.17,6.2],[61,22.1,10.97,5.9]])for(let h=-c/2;h<=c/2;h+=f)n.push([De(3.61,2.05,.26,h,l,a*u),r],[De(3.6,.33,.3,h,l+.61,a*u),o]);for(let c of[-42,-29,-16,-3,10,23])n.push([De(9.3,.88,2.81,c,13.1,a*14.61),"#b5af9e"],[Xe(10.53,2.75,3.83,c,13.37,a*15.49),"#dc9164"],[Xe(9.12,1.04,3,c,14.33,a*15.49),"#f0c285"]);for(let c of[-56,-43,-30,-17,-4,9,22,35,48,57]){let l=c/t,u=La.findIndex(([m])=>m>=l),[f,h]=La[u-1],[d,p]=La[u],y=Cs(h,p,(l-f)/(d-f))*e/2;n.push([Xe(2.1,1.74,.62,c,5,a*(y-.08)),"#78969e"])}n.push([en([-46,19.95,a*13.74],[42,19.95,a*13.74],.4),o],[en([-27,24.95,a*11.67],[26,24.95,a*11.67],.34),o],[en([49,8.13,a*15.2],[67,8.13,a*5.1],.43),s])}}function qE(n,t){let{id:e,length:i,beam:s,paint:r,deck:o}=n,a=new Jt;a.name=n.name;let c=e==="jet-ski"?1.76:e==="cruise-ship"?6.1:3.7,u=[[ao(i,s,c,e==="jet-ski"?-1.32:e==="cruise-ship"?-4.92:-2.5),r],[ao(i,s,c+.82,c-.15,1.018),"#f4e4c9"],[ao(i*.92,s,c+1.05,c+.74,.83),o]];return e==="sailboat"?HE(u):e==="cabin"?GE(u):e==="jet-ski"?WE(u):e==="cruise-ship"?XE(u,n):VE(u),a.add(new ne(zE(u),t)),a}var Rs=12,YE=new Wt("#def5e9");function $E(n,t){let i=Rs*3*2,s=new re,r=new Me(new Float32Array(i*3),3).setUsage(Ln),o=new Float32Array(i*4),a=[];for(let f=0;f<3;f++)for(let h=0;h<Rs;h++){let d=(f*Rs+h)*2,p=h/(Rs-1),y=Math.pow(Math.sin((.1+.9*p)*Math.PI),1.15)*(1-.4*p);for(let m=0;m<2;m++)YE.toArray(o,(d+m)*4),o[(d+m)*4+3]=n.wake*y*(f===1?.22:.76);h<Rs-1&&a.push(d,d+2,d+1,d+1,d+2,d+3)}s.setAttribute("position",r),s.setAttribute("color",new Me(o,4)),s.setIndex(a);let c=new _e({vertexColors:!0,side:We,transparent:!0,depthWrite:!1,opacity:.82}),l=new ne(s,c);l.name=n.name+" wake",l.frustumCulled=!1;function u({angle:f},h,d=n){let y=(n.wakeSeconds??(n.id==="cabin"?4.1:6))*Na/d.period;for(let m=0;m<Rs;m++){let g=m/(Rs-1),x=f-y*g,v=Wg(d,x),{x:_,z:b}=d.point(x),M=Math.cos(v),T=Math.sin(v),S=n.length*.48,R=_-M*S,P=b+T*S;for(let I=0;I<3;I++){let F=(I-1)*n.beam*(.19+g*.62),H=(I===1?1.85:.62)*(1+g*.55);for(let B=0;B<2;B++){let Y=F+(B?H:-H);r.setXYZ((I*Rs+m)*2+B,R+T*Y,t+.14,P+M*Y)}}}r.needsUpdate=!0,c.opacity=h?.44:.82}return{mesh:l,update:u}}function Yg(n){let t=new Jt;t.name="Coastal boats";let e=new Ne({vertexColors:!0,side:We,roughness:.73}),i=Vg(n),s=OE(n,i),r=new ve(1.35,8,6),o=["#ff896b","#8bf0b4","#fff1c4"].map(d=>new _e({color:d,toneMapped:!1})),a=i.map(d=>{let p=qE(d,e),y=$E(d,n.y),m;if(d.id==="cabin"||d.id==="fishing"){m=new Jt,m.name=`${d.name} running lights`;for(let[g,x]of[[.33,6.5,-.27],[.33,6.5,.27],[-.36,6.7,0]].entries()){let v=new ne(r,o[g]);v.position.set(x[0]*d.length,x[1],x[2]*d.beam),m.add(v)}p.add(m)}return t.add(y.mesh,p),{route:d,hull:p,wake:y,lights:m}}),c=0,l,u=!1;function f(d,{reduceMotion:p=!1,night:y=!1,condition:m,transientTelemetry:g=!1,activity:x}={}){if(u)return;let v=Number.isFinite(d)?d:void 0;!g&&!p&&v!==void 0&&l!==void 0&&(c+=Ru(v-l,0,.25)),l=g?void 0:v;let _=g?p?0:v??0:c,b=y||x==="evening"||x==="overnight",M=b&&!p?s(_,x):null;for(let{route:T,hull:S,wake:R,lights:P}of a){let I=!b||M?.route.id===T.id;if(S.visible=I,R.mesh.visible=I,P&&(P.visible=b&&I),!I)continue;let F=M?.route??T,H=BE(F,M?.elapsed??_,{condition:m});S.position.set(H.x,n.y+H.heave,H.z),S.rotation.set(H.roll,H.yaw,H.pitch,"YXZ"),R.update(H,b,F)}}function h(){if(!u){u=!0;for(let{hull:d,wake:p}of a)d.children[0].geometry.dispose(),p.mesh.geometry.dispose(),p.mesh.material.dispose();e.dispose(),r.dispose();for(let d of o)d.dispose();t.clear()}}return f(0),{root:t,update:f,dispose:h}}var ZE=26,jE=39,KE=2.25,Cu=2*Math.PI,JE=[{skin:"#d6a083",hair:"#56413a",shirt:"#df8b72",shorts:"#658e91",trim:"#f7e5bd",style:"cap"},{skin:"#a87761",hair:"#403035",shirt:"#72a79a",shorts:"#77698a",trim:"#f2ce87",style:"bun"},{skin:"#e5ac86",hair:"#684437",shirt:"#e0a95e",shorts:"#7496b1",trim:"#fff0cd",style:"hat"},{skin:"#b98666",hair:"#4e3939",shirt:"#a78cb3",shorts:"#6a8176",trim:"#f0dbb3",style:"fringe"}];function co(n,t){let e=n.findIndex(r=>r.x>=t);if(e<1)return n[e===0?0:n.length-1].z;let i=n[e-1],s=n[e];return te.lerp(i.z,s.z,(t-i.x)/(s.x-i.x))}function QE(n,t){let{shoreline:e,focusX:i,y:s}=n??{},r=t?.farZ;if(![i,r,s].every(Number.isFinite)||!Array.isArray(e)||e.length<2||!e.every(l=>Number.isFinite(l?.x)&&Number.isFinite(l?.z)))return null;function o(l,u,f){let h=l-u,d=l+u,p=e.filter(M=>M.x>h&&M.x<d).map(M=>M.z),y=Math.max(co(e,h),co(e,d),...p)+ZE,m=r-jE;if(m-y<19)return null;let g=Math.min(f,(m-y)/2),x=(m+y)/2,v=co(e,l)+22,_=te.clamp((r+.4-x)/(r+.4-v),0,1),b=s-.77+_*.43;return{x:l,y:b,z:x,halfWidth:u,halfDepth:g}}let a=o(i-72,46,18),c=o(i+68,27,15);return a||c?{court:a,castle:c}:null}function $g(n,t=0,e=!1){let i=e?.96:Number.isFinite(t)?Math.max(0,t):0,s=[],r;if(n.court){let{x:o,y:a,z:c,halfDepth:l,halfWidth:u}=n.court,f=i/KE,h=f%1,d=Math.floor(f)%2?1:-1,p=Math.sin(Math.PI*h),y=u-16,m=Math.min(3.3,l*.22);r={x:o+d*y*(1-2*h),y:a+20.9+p*15.7,z:c+Math.sin(Cu*h)*m,rotation:i*2.6,ground:a};for(let g of[-1,1]){let v=1-Math.min(1,(g!==d?1-h:h)/.24),_=e?.32:v*v;s.push({kind:"player",style:g<0?0:1,scale:1,yaw:-g*Math.PI/2,x:o+g*(y+6-_*2),y:a+_*1.65,ground:a,z:c+g*m*(.65+p*.35),reach:_,swing:Math.sin(i*3.15+g*.9)*.42})}}if(n.castle){let{x:o,y:a,z:c}=n.castle;s.push({kind:"builder",style:2,scale:.72,yaw:-Math.PI/2.55,x:o+14.5,y:a,ground:a,z:c+4.2,reach:e?.57:.55+.45*Math.sin(i*4.8),swing:e?0:Math.cos(i*4.8)*.55},{kind:"builder",style:3,scale:1,yaw:Math.PI/2.65,x:o-15.2,y:a,ground:a,z:c+1.8,reach:e?.37:.44+.33*Math.sin(i*2.5+.9),swing:e?0:Math.cos(i*2.5+.9)*.35})}return{actors:s,ball:r}}function tT(n,t,e,i,s){let r=n.index?n.toNonIndexed():n;r!==n&&n.dispose(),r.deleteAttribute("uv");let o=new Wt(t),a=new Float32Array(r.attributes.position.count*3);for(let c=0;c<a.length;c+=3)o.toArray(a,c);return r.setAttribute("color",new Me(a,3)),r.translate(e,i,s)}function Iu(n,t){let e=[],i=(c,l,u,f,h)=>e.push(tT(c,l,u,f,h));t({add:i,box:(c,l,u,f,h,d,p)=>i(new xe(c,l,u),f,h,d,p),cylinder:(c,l,u,f,h,d,p)=>i(new Re(c,l,u,12),f,h,d,p)});let o=On(e);for(let c of e)c.dispose();let a=new Ne({vertexColors:!0,roughness:.86});n.add(new ne(o,a))}function eT({x:n,y:t,z:e,halfWidth:i,halfDepth:s}){let r=new Jt;r.name="beach-volleyball-court",r.position.set(n,t,e);let o=s-1;return Iu(r,({box:a,cylinder:c})=>{let l="#bd816b",u="#b7a78c",f="#f4e4bb";for(let h of[-1,1])a(i*2,.1,.56,l,0,.14,h*s),a(.56,.1,s*2,l,h*i,.14,0),c(.62,.98,20.2,"#e0c4a0",0,10.1,h*o),c(.93,.93,1.1,l,0,18.9,h*o),c(.85,.85,.76,f,0,20.48,h*o),a(.76,.54,o*2,f,0,h<0?10.1:19.5,0);for(let h=1;h<5;h++)a(.23,.23,o*2,u,0,10.2+h*1.83,0);for(let h=1;h<12;h++)a(.22,9.25,.24,u,0,14.8,o*(h/6-1))}),r}function nT({x:n,y:t,z:e}){let i=new Jt;return i.name="beach-sandcastle",i.position.set(n,t,e),Iu(i,({add:s,box:r,cylinder:o})=>{let a="#d9b284",c="#e5c199",l="#ac8466";s(new ve(1,12,6).scale(12.1,1.25,8.1),"#cda77f",0,.45,0),r(12.3,4.6,7.5,a,0,2.45,-.5),r(3.2,2.85,.31,l,0,1.85,3.32),s(new ve(1,8,5).scale(1.61,1.6,.25),l,0,3.11,3.29);for(let f of[-1,1]){let h=f*6.15;o(2.44,3.35,7.9,a,h,4.05,-.8),o(2.66,2.52,1.03,c,h,8.03,-.8);for(let[d,p]of[[-1.75,0],[1.75,0],[0,-1.75],[0,1.75]])r(1.22,1.1,1.22,c,h+d,8.99,-.8+p);r(1.07,.94,.3,l,h,5.42,1.65)}o(1.72,2.44,9.25,c,.3,4.75,-3.55),o(.05,2.07,2.74,a,.3,10.37,-3.55),o(.22,.26,4.1,"#a68968",.3,12.52,-3.55);let u=new re;u.setAttribute("position",new Xt([0,0,0,4.35,.6,0,0,2.18,0,0,2.18,0,4.35,.6,0,0,0,0],3)),u.computeVertexNormals(),s(u,"#d0816f",.38,13.05,-3.54),o(2.25,1.68,3.5,"#6da69e",-10.7,1.9,5.1),o(2.14,2.14,.44,"#a4c1a7",-10.7,3.71,5.1),o(1.61,1.61,.21,l,-10.7,3.97,5.1),s(new cn(2.06,.21,5,12,Math.PI),"#f1ddac",-10.7,3.85,5.1),s(new xe(.62,.42,5.7).rotateY(.53),"#cb8d67",7.7,.42,6.8),s(new ve(1,8,5).scale(1.2,.36,1.5).rotateY(.53),"#d89b66",9.4,.43,9)}),i}function iT(){let n=new ve(3.25,24,12),t=n.toNonIndexed();n.dispose();let e=t.attributes.position,i=["#e68c70","#f4e0ae","#74aba4","#f1c165","#8a96b4","#f7e5bc"].map(o=>new Wt(o)),s=new Float32Array(e.count*3);for(let o=0;o<e.count;o+=3){let a=f=>(e[f](o)+e[f](o+1)+e[f](o+2))/3,c=Math.atan2(a("getZ"),a("getX")),l=Math.floor((c+Math.PI)/Cu*i.length)%i.length,u=Math.abs(a("getY"))>2.85?i[1]:i[l];for(let f=0;f<3;f++)u.toArray(s,(o+f)*3)}t.setAttribute("color",new Me(s,3));let r=new ne(t,new Ne({vertexColors:!0,roughness:.45}));return r.name="beach-volleyball-ball",r}function Jf(n,t){let{skin:e,hair:i,shirt:s,shorts:r,trim:o,style:a}=JE[n.style],c=n.kind==="beachgoer",l=n.kind==="surfer",u=n.kind==="builder"||c,f=c?9.25:u?7.8:l?10.7:12.2,h=f+(c?5.9:u?5.8:6.1),d=l?n.swing*.95:u?n.reach*1.15+.65:0,p=l?n.swing*.22:c?.11:u?.24:0;t(s,0,f,d*.43,3.72,4.1,2.85,p),t(r,0,f-3.4,0,3.34,1.65,2.8),t(o,0,f-1.95,2.45,3.03,.48,.59);for(let y of[-1,1]){if(l){t(r,y*2.45,5.35,1.26,1.58,2.66,1.49,.67,y*.4),t(e,y*3.76,2.93,.86,1.25,2.45,1.16,-.31,y*.17),t(e,y*4.13,1.01,.5,1.64,.73,1.27,0,y*.07);let m=f+1.2+y*n.swing*1.65;t(e,y*5.26,m,-.1,1.05,3.35,1.06,.22,-y*(1.08+y*n.swing*.28)),t(e,y*8.07,m+.43,.29,1.36,.96,1.02)}else if(c){let m=y<0?n.reach:.23;t(r,y*1.72,5,2.2,1.55,2.7,1.48,1.27),t(e,y*1.82,2.75,4.13,1.17,2.57,1.14,-.16),t(o,y*1.93,.92,5.06,1.25,.72,1.74),t(e,y*3.98,f-.3+m,1.15,1.02,2.45,1.05,-.62-m*.37),t(e,y*3.5,f-1.2+m*1.8,3.17,1.11,1.14,1.13),y<0&&t("#e7c8a1",-3.5,f-.18+m*1.8,3.82,.86,1.19,.86)}else{let m=u?.8:y*n.swing;t(r,y*1.65,u?3.5:6.4,m,1.55,2.3,1.49,u?.8:0),t(e,y*1.68,u?1.72:3.1,u?2.08:m,1.16,2.13,1.16),t(e,y*1.75,1.02,.88+m,1.28,.76,2.08);let g=u?f+.45:f+1.5+n.reach*2.1,x=u?2.4+n.reach*1.72:n.reach*.8,v=u?-.78-n.reach*.27:.12+n.reach*.62;t(e,y*(4.13-n.reach*.46),g,x,1.04,3.7,1.05,v,y*(u?.1:.24+n.reach*.55)),t(e,y*(4.1-n.reach*.53),g+(u?-1.65:n.reach*5.55-2.92),x+(u?2.7:n.reach*1.9),1.14,1.15,1.13)}t(e,y*3.48,h,d+.4,.84,.99,.78),t("#493a41",y*1.46,h+.38,d+3.41,.43,.47,.34),t("#c98878",y*2.22,h-.45,d+3.05,.54,.27,.26)}t(i,0,h+.64,d-.53,3.81,4.12,3.64),t(e,0,h,d+.72,3.25,3.29,2.89),t(e,0,h-.22,d+3.59,.53,.54,.59),t("#9b6b66",0,h-1.19,d+3.43,.81,.21,.25),a==="cap"||a==="hat"?(t(o,0,h+3.48,d+.3,3.56,1.47,3.26),t(a==="hat"?"#e7b46d":s,0,h+2.78,d+1.12,a==="hat"?4.56:3.19,.39,a==="hat"?4.26:2.85)):(t(i,-.99,h+2.39,d+1.53,2.47,1.23,2.37),t(a==="bun"?i:o,2,h+3.23,d-1.66,1.41,1.43,1.39))}function Qf(n,t,e,i,s=!1){let r=0;for(let f of t)Jf(f,()=>r++);let o=new jn(new ve(1,10,7),new Ne({color:"#fff",roughness:.76}),r);o.name=e,o.frustumCulled=!1,o.instanceMatrix.setUsage(Ln),n.add(o);let a=i?new jn(new Sn(1,20).rotateX(-Math.PI/2),new _e({color:"#634f55",opacity:.23,transparent:!0,depthWrite:!1}),t.length+Number(s)):null;a&&(a.name=i,a.frustumCulled=!1,a.instanceMatrix.setUsage(Ln),n.add(a));let c=0,l=new Map;for(let f of t)Jf(f,h=>{l.has(h)||l.set(h,new Wt(h)),o.setColorAt(c++,l.get(h))});let u=new Be;return function(h,d){let p=0,y=0,m=(g,x,v,_,b)=>{a&&(u.position.set(g,x+.16,v),u.rotation.set(0,0,0),u.scale.set(_,1,b),u.updateMatrix(),a.setMatrixAt(y++,u.matrix))};for(let g of h){let{scale:x,yaw:v}=g,_=Math.cos(v),b=Math.sin(v);Jf(g,(M,T,S,R,P,I,F,H=0,B=0)=>{u.position.set(g.x+x*(T*_+R*b),g.y+S*x,g.z+x*(-T*b+R*_)),u.rotation.set(0,v,0),u.rotateX(H),u.rotateZ(B),u.scale.set(x*P,x*I,x*F),u.updateMatrix(),o.setMatrixAt(p++,u.matrix)}),m(g.x,g.ground,g.z,5.25*x,4.47*x)}d&&m(d.x,d.ground,d.z,2.82,2.52),o.instanceMatrix.needsUpdate=!0,a&&(a.instanceMatrix.needsUpdate=!0)}}function sT(n){let t=new Jt;t.name="beach-day-activities";let e=n.court?eT(n.court):null,i=n.castle?nT(n.castle):null,s=e?iT():null;e&&t.add(e,s),i&&t.add(i);let r=Qf(t,$g(n).actors,"beach-recreation-figures","beach-play-contact-shadows",!!s);return{group:t,render(o,a){let c=$g(n,o,a);if(r(c.actors,c.ball),!s)return;let{x:l,y:u,z:f,rotation:h}=c.ball;s.position.set(l,u,f),s.rotation.set(.25,h*.59,h)}}}function rT(n){let t=new Jt;t.name=`beach-surfboard-${n+1}`;let e=n?"#e5ac55":"#d57565",i=n?"#4d8f92":"#f3e5be";return Iu(t,({add:s})=>{let r=(o,a,c,l,u,f,h)=>s(new ve(1,16,8).scale(l,u,f),h,o,a,c);r(0,.22,0,12.9,.78,3.61,"#e9dfc8"),r(.26,.63,0,12.68,.69,3.38,e),r(.45,1.23,0,10.08,.125,.91,i),r(-4.51,1.17,0,2.67,.14,2.47,n?"#e8dfbe":"#759f9d");for(let o=0;o<5;o++){let a=o/4;r(-9.8-a*15.1,-.39,(o%2?-1:1)*(2.6-a*1.58),2.86-a*1.1,.095,.92-a*.5,o%2?"#a4d7cc":"#e5f3de")}r(-17.4,-.44,.24,6.5,.082,.38,"#c4e5d8")}),t}function oT(n){let t=new Jt;t.name="beach-morning-surfers";let{shoreline:e,focusX:i,y:s,farZ:r}=n,o=[{offset:-82,radius:37,depth:49,drift:13,period:20,phase:.55,style:0,scale:.9},{offset:75,radius:34,depth:58,drift:14,period:22,phase:2.17,style:1,scale:.91}].filter(({offset:u,radius:f,depth:h,drift:d})=>{let p=i+u,y=p-f-26,m=p+f+26;return y>=e[0].x&&m<=e.at(-1).x&&Math.min(co(e,y),co(e,m),...e.filter(g=>g.x>y&&g.x<m).map(g=>g.z))-h-d-26>r});if(!o.length)return{group:t,render(){}};let a=o.map((u,f)=>rT(f));t.add(...a);function c(u){return o.map(({offset:f,radius:h,depth:d,drift:p,period:y,phase:m,style:g,scale:x})=>{let v=u%y/y*Cu+m,_=i+f+h*Math.sin(v),b=co(e,_)-d+p*Math.cos(v),M=Math.atan2(p*Math.sin(v),h*Math.cos(v)),T=Math.sin(v*2+m);return{kind:"surfer",style:g,scale:x,yaw:M,x:_,z:b,y:s+1.7+T*.3,swing:Math.cos(v*2+m)*.5,swell:T}})}let l=Qf(t,c(0),"beach-surfers");return{group:t,render(u){let f=c(u);for(let[h,{x:d,y:p,z:y,yaw:m,swell:g}]of f.entries())a[h].position.set(d,p-1.24,y),a[h].rotation.set(0,m,0),a[h].rotateX(g*.075),a[h].rotateZ(-g*.027);l(f)}}}var Da=["#e7713c","#ef9251","#e97e44","#f2a954","#f7b35d","#ffcf79","#ffde91","#ffb34e","#fbc86e","#ffd281","#ffbd72"];function aT(n,t){let e=new Jt;return e.name=`beach-firepit-${t+1}`,e.position.set(n.x,n.y,n.z),Iu(e,({add:i,box:s})=>{i(new ve(1,14,6).scale(7.15,.51,6.72),"#80605a",0,.14,0);for(let r=0;r<11;r++){let o=r*Cu/11,a=["#ab8b78","#a39288","#bb9c84"][r%3];i(new Go(1).scale(1.91,1.25,1.57).rotateY(o),a,Math.cos(o)*6.82,1.05,Math.sin(o)*6.19)}for(let[r,o,a]of[[.43,1.33,"#9b6147"],[1.42,2.1,"#79473c"],[-.89,2.58,"#a36a4a"]])i(new Re(1.15,1.38,9.1,7).rotateZ(Math.PI/2).rotateY(r),a,0,o,0);for(let[r,o]of[[-1,1.25],[1,-1.25]])i(new Re(2.2,2.61,13.9,8).rotateX(Math.PI/2),"#a67e60",r*16.5,2.48,o),i(new Re(1.61,1.77,.15,8).rotateX(Math.PI/2),"#dab18b",r*16.5,2.48,o+7.01),s(4.84,.83,5.8,t?"#c98673":"#7ea8a1",r*16.23,4.68,o)}),e}function cT(n){let t=new Jt;t.name="beach-evening-bonfires";let e=[n.court??n.castle];t.add(...e.map(aT));function i(l){let{x:u,y:f,z:h}=e[0];return[{kind:"beachgoer",style:0,scale:.95,yaw:Math.PI/2,x:u-16.23,y:f,ground:f,z:h+1.25,reach:.36+Math.sin(l*1.42-1.35)*.27}]}let s=Qf(t,i(0),"beach-bonfire-figures","beach-bonfire-contact-shadows"),r=new jn(new ve(1,9,7),new _e({toneMapped:!1}),e.length*Da.length);r.name="beach-bonfire-flames",r.frustumCulled=!1,r.instanceMatrix.setUsage(Ln);for(let l=0;l<r.count;l++)r.setColorAt(l,new Wt(Da[l%Da.length]));let o=new ze({uniforms:{warmth:{value:.86},tint:{value:new Wt("#ffad5f")}},vertexShader:`
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
      }`,transparent:!0,depthWrite:!1}),a=new jn(new Sn(1,28).rotateX(-Math.PI/2),o,e.length);a.name="beach-bonfire-sand-glow",a.frustumCulled=!1;let c=new Be;for(let[l,{x:u,y:f,z:h,halfDepth:d}]of e.entries())c.position.set(u,f+.19,h),c.scale.set(23,1,Math.min(19,d+1)),c.updateMatrix(),a.setMatrixAt(l,c.matrix);return a.instanceMatrix.needsUpdate=!0,t.add(a,r),{group:t,render(l){s(i(l));for(let[u,{x:f,y:h,z:d}]of e.entries()){let p=u*1.71;for(let y=0;y<Da.length;y++){let m=l*4.5+y*2.39+p,g=Math.sin(m)*.5+.5,x=y*2.39+p;if(y<7){let v=y<5?2.05:.78,_=y<5?3.18+g*1.58:2.78+g*1.09;c.position.set(f+Math.cos(x)*v,h+_+1.05,d+Math.sin(x)*v),c.rotation.set(Math.sin(x)*.2,x,Math.cos(x)*.24),c.scale.set(1.21+g*.54,_,1.18+g*.46)}else{let v=(l*(.32+y*.019)+y*.234+p)%1,_=.79*(1-v)+.13;c.position.set(f+Math.cos(x+v)*(2.45+v*6.2),h+8.8+v*15,d+Math.sin(x+v)*(1.74+v*4.4)),c.rotation.set(0,0,.2),c.scale.set(_,_*1.33,_)}c.updateMatrix(),r.setMatrixAt(u*Da.length+y,c.matrix)}}r.instanceMatrix.needsUpdate=!0,o.uniforms.warmth.value=.83+Math.sin(l*5.25)*.11}}}function Zg(n,t){let e=new Jt;e.name="beach-play";let i=QE(n,t);if(!i)return{root:e,update(){},dispose:()=>e.removeFromParent()};let s={morning:oT(n),day:sT(i),evening:cT(i)};e.add(...Object.values(s).map(({group:h})=>h));let r,o=0,a,c,l;function u(h,{reduceMotion:d=!1,transientTelemetry:p=!1,activity:y="day",night:m=!1}={}){let g=y==="overnight"?y:m?"evening":Object.hasOwn(s,y)?y:"day";if(!p){let v=Number.isFinite(r)&&Number.isFinite(h)?te.clamp(h-r,0,.25):0;d||(o+=v),r=h}let x=d?.96:p?Number.isFinite(h)?Math.max(0,h):0:o;if(!(x===a&&d===c&&g===l)){if(a=x,c=d,g!==l){for(let[v,{group:_}]of Object.entries(s))_.visible=g===v;l=g}s[g]?.render(x,d)}}u(0);function f(){e.traverse(h=>{h.isMesh&&(h.isInstancedMesh&&h.dispose(),h.geometry.dispose(),h.material.dispose())}),e.clear(),e.removeFromParent()}return{root:e,update:u,dispose:f}}var lT=new X(0,-1,0),uT=[[0,0],[1,0],[-1,0],[0,1],[0,-1],[.707,.707],[.707,-.707],[-.707,.707],[-.707,-.707]],td=.01;function jg(n){return(typeof window>"u"?globalThis:window).RoomcraftModels.placementRole(n)}function Jg(n){return!n.isMesh||!n.geometry?!1:(Array.isArray(n.material)?n.material:[n.material]).some(e=>e&&e.visible!==!1&&!e.transparent)}function hT(n){n.updateWorldMatrix(!0,!0);let t=[];n.traverseVisible(a=>{if(!Jg(a))return;let{geometry:c}=a;c.boundingBox||c.computeBoundingBox(),c.boundingBox?.isEmpty()===!1&&t.push(c.boundingBox.clone().applyMatrix4(a.matrixWorld))});let e=Math.min(...t.map(a=>a.min.y));if(!Number.isFinite(e))return null;let i=new Le;for(let a of t)a.min.y<=e+td&&i.union(a);let s=i.getCenter(new X),r=i.getSize(new X),o=e-n.position.y;return{bottom:Math.abs(o)<1e-6?0:o,centerX:s.x-n.position.x,centerZ:s.z-n.position.z,radiusX:r.x*.45,radiusZ:r.z*.45}}function fT(n,t){let{type:e}=n;return e==="counter"||e==="kitchenWorktop"?[36.75,37.15]:e==="desk"||e.includes("-desk-")?[43.65,44.4]:e==="table"||e==="diningTable"?[44.65,46.45]:e.includes("dining-set")||e.includes("dining-table-")?[40.65,42.35]:/coffeeTable|sideTable|coffee-table|side-table|low-play-table/.test(e)?[32.65,33.35]:[t.anchorY-.35,t.anchorY+.35]}function dT(n,t){let[e,i]=fT(n.item,t);if(![e,i,t.root.scale.y].every(Number.isFinite))return null;let s=t.root.clone(!0);s.position.set(0,0,0),s.updateMatrixWorld(!0);let r=new Le().setFromObject(s);return r.isEmpty()?null:{placement:n,probe:s,bounds:r,rootY:t.root.position.y,low:e*s.scale.y,high:i*s.scale.y}}function Kg(n,t){let e=t?.[n.item.id]?.position;return[e?.x,e?.y].every(Number.isFinite)?{x:e.x,z:e.y}:n}function Qg(n,t){return n.intersectObject(t,!0).find(e=>Jg(e.object))}function ty(n,{low:t,high:e}){return n?.face?.normal.y>=.92&&n.point.y>=t&&n.point.y<=e}function pT(n,t,e,i,s,r){let o=t.x+e.centerX-i.x,a=t.z+e.centerZ-i.z,{bounds:c,probe:l,rootY:u}=n;if(o-e.radiusX<c.min.x||o+e.radiusX>c.max.x||a-e.radiusZ<c.min.z||a+e.radiusZ>c.max.z)return null;let f=-1/0;for(let[h,d]of uT){r.set(o+h*e.radiusX,c.max.y+1,a+d*e.radiusZ),s.set(r,lT);let p=Qg(s,l);if(!ty(p,n))return null;f=Math.max(f,p.point.y)}return u+f}function ey(n,t){let e=[],i=[];for(let c of n){let l=t.get(c.item.id);if(!l||Number.isFinite(c.mountY))continue;let u=jg(c.item);if(u==="surface"){let f=dT(c,l);f&&e.push(f)}else if(u==="tabletop"){let f=hT(l.root);f&&i.push({placement:c,foot:f})}}let s=new gs,r=new X;function o(c){let l=new Map;for(let{placement:u,foot:f}of i){let h=Kg(u,c),d=null,p=u.baseY,y=1/0;for(let m of e){if(m.placement.baseY!==u.baseY)continue;let g=Kg(m.placement,c),x=pT(m,h,f,g,s,r);if(x===null||x<=u.baseY||x<p-td)continue;let v=m.placement.item.id,_=Math.hypot(h.x-g.x,h.z-g.z);Math.abs(x-p)<td&&(_>y||_===y&&v>d)||(d=v,p=x,y=_)}l.set(u.item.id,{y:p-f.bottom,supportId:d})}return l}function a(c,l){if(jg({type:c})!=="tabletop")return null;let u=new gs(void 0,void 0,l.near,l.far),f=new X,h;for(let d of e){let{x:p,z:y}=d.placement;f.copy(l.ray.origin).sub(r.set(p,d.rootY,y)),u.set(f,l.ray.direction);let m=Qg(u,d.probe);m&&(!h||m.distance<h.hit.distance||m.distance===h.hit.distance&&d.placement.item.id<h.surface.placement.item.id)&&(h={hit:m,surface:d,x:p,z:y})}return!h||!ty(h.hit,h.surface)?null:{x:h.x+h.hit.point.x,y:h.z+h.hit.point.z}}return{resolve:o,projectTabletop:a}}var{PI:Pu,sin:er,cos:Lu}=Math,Ui=Pu*2,mT=new X(0,1,0),tr=["#86684f","#9a7c5b","#735844"],ed=["#92745a","#ac8f69","#785c49"],nd=["#537759","#6b8a55","#849a58","#a0ab63"],id=["#3e6251","#4d7056","#61815d","#789365"],sd=["#4a6653","#567552","#6b8659","#819863"],gT=["#517553","#64845a","#799660","#98a869"],yT=["#617d69","#72917a","#8ea17e","#a7b08a"],xT=["#62785f","#789170","#9479a5","#aa8db4","#c0a6c3"],ny=240,bT=new Set(["windy","windy-variant"]),Fa=Object.freeze({"fan-palm":Object.freeze({height:113,radius:.46}),"date-palm":Object.freeze({height:134,radius:.49}),cypress:Object.freeze({height:132,radius:.21}),"shore-pine":Object.freeze({height:109,radius:.33}),"coast-oak":Object.freeze({height:103,radius:.43}),olive:Object.freeze({height:94,radius:.46}),jacaranda:Object.freeze({height:100,radius:.43})});function iy(n){let t=n>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}function Dn(n,t,e){return[Lu(n)*t,e,er(n)*t]}function yn(n,[t,e,i]){return[n[0]+t,n[1]+e,n[2]+i]}function vT(n,t,e,i,s){let r=(c,l)=>n.add(c,l,t,e,i);function o(c,l,u,f,h,d=7){let p=new X(...l),y=new X(...u),m=y.clone().sub(p),g=new an().setFromUnitVectors(mT,m.clone().normalize()),x=new Re(h,f,m.length(),d),v=p.lerp(y,.5);r(x.applyQuaternion(g).translate(v.x,v.y,v.z),c)}function a(c,l,u,f=.13,h=6){let d=new ve(1,9,h),p=d.getAttribute("position"),y=s()*Ui;for(let m=0;m<p.count;m++){let g=p.getX(m),x=p.getY(m),v=p.getZ(m),_=1+f*(er(g*5.8+x*3.2+v*2.1+y)*.7+Lu(v*7.8-x*2.2+y)*.3);p.setXYZ(m,g*_*u[0],x*_*u[1],v*_*u[2])}d.computeVertexNormals(),r(d.translate(...l),c)}return{draw:r,branch:o,crown:a,random:s}}function rd(n,t,e,i,s,r,o){let a=[Lu(e),er(e)],c=[-a[1],a[0]],l=[[0,.09],[.25,.68],[.5,1],[.76,.64],[1,.018]],u=n.positions.length/3;for(let[f,[h,d]]of l.entries()){let p=s*d,y=t[0]+h*i*a[0],m=t[1]+er(h*Pu)*r-o*h*h,g=t[2]+h*i*a[1];for(let v of[-1,0,1])n.positions.push(y+v*p*c[0],m+(v===0?p*.29:0),g+v*p*c[1]),n.uvs.push((v+1)*.5,h);if(f===0)continue;let x=u+(f-1)*3;for(let v of[0,1]){let _=x+v;n.indices.push(_,_+1,_+3,_+1,_+4,_+3)}}}function _T(n,t,e){let i=new re;i.setAttribute("position",new Xt(e.positions,3)),i.setAttribute("uv",new Xt(e.uvs,2)),i.setIndex(e.indices),i.computeVertexNormals(),n(i,t)}function MT(n,t,e,i){let{draw:s,branch:r,crown:o,random:a}=n,c=t*(i?.063:.125),l=y=>Dn(e,c*y*y,t*y*(i?.85:.86)),u=y=>t*(i?.029:.024)*(1-.53*y),f=i?5:6;for(let y=0;y<f;y++){let m=y/f,g=(y+1)/f;r(ed[0],l(m),l(g),u(m),u(g),9)}for(let y=1;y<=13;y++){let m=y*.067;r(ed[y%3?1:2],l(m-.0045),l(m+.0045),u(m)*1.04,u(m)*1.04,9)}let h=l(1);o(nd[0],h,[t*.045,t*.036,t*.048],.08,5);for(let y=0;y<4;y++)o(ed[2],yn(h,Dn(e+y*Ui/4,t*.034,-t*.017)),[t*.014,t*.019,t*.014],.06,4);let d=nd.map(()=>({positions:[],uvs:[],indices:[]})),p=i?9:10;for(let y=0;y<p;y++){let m=e+y*Ui/p+(a()-.5)*.18,g=y%3===0,x=t*((g?.35:.29)+(a()-.5)*.07),v=t*(g?.026:.077),_=t*(g?.072:.025);if(rd(d[(y+1)%4],h,m,x,t*.012,v,_),i){let b=yn(h,Dn(m,x*.43,v*.7));for(let M=-3;M<=3;M++)rd(d[(y+M+4)%4],b,m+M*.19,x*(.58-Math.abs(M)*.055),t*(.016-Math.abs(M)*.0018),v*.32,_*.84)}else for(let b=0;b<7;b++){let M=.19+b*.104,T=yn(h,Dn(m,x*M,er(M*Pu)*v-_*M*M));for(let S of[-1,1])rd(d[(y+b+(S>0?1:0))%4],T,m+S*(.83-M*.37),t*(.095-M*.048),t*(.0095-M*.003),t*.014,t*.025)}}for(let[y,m]of d.entries())_T(s,nd[y],m)}function od(n,t,e,i,s=.84){let{branch:r}=n,o=a=>Dn(e,t*i*(a*a+.16*er(Pu*a)),t*a*s);for(let a=0;a<4;a++){let c=a*.25,l=c+.25;r(tr[0],o(c),o(l),t*(.047-c*.032),t*(.047-l*.032),9)}for(let a=0;a<4;a++){let c=e+a*Ui/4;r(tr[2],Dn(c,t*.071,t*.012),o(.125),t*.006,t*.021,5),r(tr[1],Dn(c,t*.039,t*.025),yn(o(.36),Dn(c,t*.031,0)),t*.004,t*.002,4)}return o}function ST(n,t,e){let{crown:i,random:s}=n,r=od(n,t,e,.018,.94);i(id[0],r(.655),[t*.12,t*.344,t*.11],.09,6);for(let[o,a,c,l,u]of[[.38,.068,.094,.16,6],[.54,.078,.082,.18,6],[.69,.06,.068,.17,5],[.82,.045,.055,.13,4],[.91,.025,.039,.085,3]])for(let f=0;f<u;f++){let h=e+f*Ui/u+o*2.5,d=yn(r(o),Dn(h,t*a,t*((s()-.5)*.035)));i(id[(f+u)%4],d,[t*c,t*l*(.87+s()*.18),t*c*.84],.16,5)}i(id[2],yn(r(.98),[0,t*.043,0]),[t*.038,t*.038,t*.032],.12,5)}function wT(n,t,e){let{branch:i,crown:s,random:r}=n,o=od(n,t,e,.045,.95);for(let[a,c,l]of[[.38,.195,6],[.55,.175,6],[.7,.132,5],[.83,.093,4]])for(let u=0;u<l;u++){let f=e+u*Ui/l+a*7+(r()-.5)*.22,h=o(a),d=yn(h,Dn(f,t*c,t*(.02+r()*.028)));i(tr[1],h,d,t*.017,t*.0037,6);let p=yn(d,[0,t*.029,0]);s(sd[u%3],p,[t*c*.46,t*.054,t*c*.45],.21,5),s(sd[(u+2)%4],yn(p,Dn(f-.18,-t*c*.35,t*.038)),[t*c*.48,t*.057,t*c*.44],.18,5)}s(sd[3],yn(o(1),[0,t*.012,0]),[t*.082,t*.066,t*.075],.14,5)}function ET(n,t,e,i){let{branch:s,crown:r,random:o}=n,a=i==="olive",c=i==="jacaranda",l=a?yT:c?xT:gT,u=od(n,t,e,a?.1:.034,a?.78:.84),f=a?5:6;for(let d=0;d<f;d++){let p=e+d*Ui/f+(o()-.5)*.33,y=u(.46+o()*.12),m=t*(.16+o()*.07),g=yn(y,Dn(p,t*.12,m*.58)),x=yn(y,Dn(p+.16,t*(.19+o()*.052),m));s(tr[1],y,g,t*.026,t*.016,7),s(tr[0],g,x,t*.0165,t*.0045,6);let v=t*(.092+o()*.03);r(l[d%2],yn(x,[0,t*.024,0]),[v,t*(a?.064:.104),v*.87],.21,5);for(let _ of[-1,1]){let b=yn(x,Dn(p+_*1.18,t*.055,t*.05));s(tr[0],g,b,t*.012,t*.003,5);let M=t*(.063+o()*.027);r(l[c?2+(d+(_>0?1:0))%3:1+d%3],yn(b,[0,t*.022,0]),[M,M*(a?.63:.88),M*.91],.21,5)}}let h=yn(u(1),[0,t*.023,0]);r(l[2],h,[t*.15,t*(a?.11:.12),t*.14],.21,6),r(l.at(-1),yn(h,Dn(e+.9,t*.062,t*.058)),[t*.093,t*.074,t*.082],.18,5)}function sy(n,t,e){let i=Math.imul(Math.round(n*16),374761393)^Math.imul(Math.round(t*16),668265263);return Number.isFinite(e)?e:i}function ry(n,t){return Number.isFinite(t)?te.clamp(t,32,200):Fa[n].height}function TT(n,{kind:t,x:e,z:i,groundY:s,height:r,seed:o}={}){if(!Object.hasOwn(Fa,t)||![e,i,s].every(Number.isFinite))return!1;let a=ry(t,r),c=iy(sy(e,i,o)),l=c()*Ui,u=vT(n,e,s,i,c);return t==="fan-palm"||t==="date-palm"?MT(u,a,l,t==="fan-palm"):t==="cypress"?ST(u,a,l):t==="shore-pine"?wT(u,a,l):ET(u,a,l,t),!0}function AT(n=0,t={}){let{windSpeed:e,windBearing:i,reduceMotion:s,condition:r}=t,o=Number.isFinite(e)?te.clamp(e,0,22):bT.has(r)?6:0,a=Number.isFinite(i)?(i%360+360)%360:270,c=te.degToRad(a),l=Number.isFinite(n)?Math.max(0,n)%ny:0;return{x:-er(c),z:Lu(c),phase:Ui*l/ny,strength:s?0:o*.0048}}var RT=`
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
`;function oy(n){let t=new Set,e={roomcraftTreeDirection:{value:new Ot(1,0)},roomcraftTreeStrength:{value:0},roomcraftTreePhase:{value:0}};function i(o){t.has(o)||(t.add(o),o.onBeforeCompile=a=>{Object.assign(a.uniforms,e),a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
${RT}`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
          objectNormal.y -= dot(objectNormal.xz, roomcraftTreeDrift()) * roomcraftTreeBend() * (2.0 / 0.84);`).replace("#include <begin_vertex>",`#include <begin_vertex>
          float treeBend = roomcraftTreeBend();
          transformed.xz += roomcraftTreeDrift() * roomcraftTreeWind.y * treeBend * treeBend;`)},o.customProgramCacheKey=()=>"roomcraft-tree-wind-v1")}function s(o={}){let{kind:a,height:c,x:l,z:u,seed:f}=o;if(!Object.hasOwn(Fa,a))return!1;let h=ry(a,c),d=iy(sy(l,u,f))()*Ui;return TT({add(p,y,...m){let g=p.getAttribute("position"),x=new Float32Array(g.count*3);for(let v=0;v<g.count;v++)x[v*3]=g.getY(v)/h,x[v*3+1]=h,x[v*3+2]=d;p.setAttribute("roomcraftTreeWind",new Me(x,3)),i(n.material(y)),n.add(p,y,...m)}},o)}function r(o,a){let c=AT(o,a);e.roomcraftTreeDirection.value.set(c.x,c.z),e.roomcraftTreeStrength.value=c.strength,e.roomcraftTreePhase.value=c.phase}return{add:s,update:r}}var lo=Math.PI/180,ud=14,xy=56,CT=21,qn=-111,Qi=-108,hd=14,IT=28,Ua=28,by=7,ay={minX:0,maxX:1536,minZ:0,maxZ:1024},ad={oak:["#d8ad86","#aa775d","board"],walnut:["#a57b6e","#755952","board"],ash:["#e5caaa","#b79681","board"],ivory:["#eee0cc","#b9a494","tile"],blue:["#b7c9ca","#81999e","tile"],sage:["#b2bd9b","#7f9a82","tile"],terrazzo:["#e0cbba","#a8878b","stone"],patio:["#e5cfb2","#a98d7e","tile"]},cd={graphite:["#eee0c9","#514855","#725d6d"],plaster:["#f4e6d4","#c3a393","#b18b84"],sage:["#dce0bf","#8fa18c","#667d74"],walnut:["#d0a991","#a47d6f","#755a56"]},PT=new Set(["lightning-rainy","pouring","rainy","snowy-rainy"]),LT=new Set(["snowy","snowy-rainy"]),NT=12e6,cy={presenceSwitch:39,wallSconce:40,wallUnit:48,thermostat:42,artwork:38,mirror:39};function DT(n){let t=new be().multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),e=new as().setFromProjectionMatrix(t),i=new Mn;return(s,r,o,a)=>(i.center.set(s,r,o),i.radius=a,e.intersectsSphere(i))}function Uu(n){let t=n>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}function Fu(n,t,e){let i=!1;for(let s=0,r=n.points.length-1;s<n.points.length;r=s++){let o=n.points[s],a=n.points[r];o.y>e!=a.y>e&&t<(a.x-o.x)*(e-o.y)/(a.y-o.y)+o.x&&(i=!i)}return i}function vy(n,t,e,i=null){let s=null;for(let r of n){let o=(t-r.x1)*r.dx+(e-r.y1)*r.dz;if(o<0||o>r.length||i!==null&&Math.abs(Math.cos(i-r.angle))<.82)continue;let a=r.x1+o*r.dx,c=r.y1+o*r.dz,l=Math.hypot(a-t,c-e);l<(s?.distance??1/0)&&(s={wall:r,t:o,centerX:a,centerZ:c,distance:l})}return s}function _y(n,t,e,i){let s=n.some(o=>Fu(o,e-t.dz*23,i+t.dx*23));return n.some(o=>Fu(o,e+t.dz*23,i-t.dx*23))&&!s?-1:1}function FT(n,t,e){let i=(typeof window>"u"?globalThis:window).RoomcraftInventory?.byType?.[e.type],s=i?.artFamily==="paddedPanel",r=cy[e.type]??(i?.mount==="wall"?s?0:cy.wallSconce:void 0);if(r===void 0)return null;let o=vy(t,e.x,e.y);if(!o||o.distance>38)return null;let{wall:a,centerX:c,centerZ:l}=o,u=(e.x-c)*-a.dz+(e.y-l)*a.dx,f=Math.abs(u)>4?Math.sign(u):_y(n,a,c,l),h=(ud/2+4+(s?e.h*.3:0))*f;return{x:c-a.dz*h,z:l+a.dx*h,angle:a.angle+(f<0?Math.PI:0),mountY:Math.min(r,xy-8)}}function ly(n){if(![n?.x1,n?.y1,n?.x2,n?.y2].every(Number.isFinite))return null;let t=n.x2-n.x1,e=n.y2-n.y1,i=Math.hypot(t,e);return i<1?null:{...n,dx:t/i,dz:e/i,length:i,angle:Math.atan2(e,t),openings:[]}}function uy(n,[t,e,i,s]){return n.x1===t&&n.y1===e&&n.x2===i&&n.y2===s||n.x1===i&&n.y1===s&&n.x2===t&&n.y2===e}function UT(n,[t,e,i,s]){return t===i&&n.x1===t&&n.x2===t?Math.min(n.y1,n.y2)<=Math.min(e,s)&&Math.max(n.y1,n.y2)>=Math.max(e,s):e===s&&n.y1===e&&n.y2===e?Math.min(n.x1,n.x2)<=Math.min(t,i)&&Math.max(n.x1,n.x2)>=Math.max(t,i):!1}function hy(){return{minX:1/0,maxX:-1/0,minZ:1/0,maxZ:-1/0}}function Nu(n,t,e){n.minX=Math.min(n.minX,t),n.maxX=Math.max(n.maxX,t),n.minZ=Math.min(n.minZ,e),n.maxZ=Math.max(n.maxZ,e)}function My(n){return Object.hasOwn(cd,n.finish)?cd[n.finish]:cd.graphite}function Sy(n,t,e){let i=t-n.x,s=e-n.z,r=Math.cos(n.angle),o=Math.sin(n.angle);return[i*r+s*o,-i*o+s*r]}function fy(n,t,e){let[i,s]=Sy(n,t,e);if(Math.abs(i)>n.item.w/2+5||Math.abs(s)>n.item.h/2+5)return null;let r=te.clamp(s/n.item.h+.5,0,1);return Qi-Qi*r}function Du(n,t,e){return Fu(n,t,e)?!0:n.points.some((i,s)=>{let r=n.points[(s+1)%n.points.length],o=r.x-i.x,a=r.y-i.y,c=o*o+a*a,l=c?te.clamp(((t-i.x)*o+(e-i.y)*a)/c,0,1):0;return Math.hypot(t-i.x-l*o,e-i.y-l*a)<=ud/2})}function kT(n,t,e){let i=(n.x1+n.x2)/2,s=(n.y1+n.y2)/2,r=t.some(f=>Du(f,i,s)),o=t.some(f=>Kr(f)&&Du(f,i,s)&&Du(f,n.x1,n.y1)&&Du(f,n.x2,n.y2)),a=r?0:qn,c=a;if(!o)for(let f of e){let h=fy(f,n.x1,n.y1),d=fy(f,n.x2,n.y2);if(h!==null&&d!==null){a=h,c=d;break}}let[,l,u]=My(n);return{...n,base1:a,base2:c,color:n.finish?l:"#896e79",postColor:n.finish?u:"#9f8183",posts:Math.min(120,Math.max(1,Math.ceil(n.length/IT)))}}function fd(n){let t=n?.editableReferenceVersion>=8;if(n?.version!==2||!Array.isArray(n.rooms)||!Array.isArray(n.walls)||!Array.isArray(n.items))throw new Error("Storybook requires a Roomcraft v2 layout with rooms, walls and items.");let e=n.rooms.filter(b=>b?.points?.length>=3&&b.points.every(M=>Number.isFinite(M?.x)&&Number.isFinite(M?.y)));if(!e.length&&(!t||n.rooms.length))throw new Error("Storybook could not find a valid room polygon.");let i=t?e.filter(b=>!Kr(b)):e,s=n.walls.map(ly).filter(Boolean),r=s.filter(b=>b.kind!=="fence"),o=n.items.filter(b=>typeof b?.id=="string"&&typeof b.type=="string"&&[b.x,b.y,b.w,b.h].every(Number.isFinite)&&b.w>0&&b.h>0),a=hy(),c=hy(),l=(b,M)=>Nu(a,b,M);for(let b of e)for(let M of b.points)l(M.x,M.y);for(let b of s)l(b.x1,b.y1),l(b.x2,b.y2);for(let b of i)for(let M of b.points)Nu(c,M.x,M.y);for(let b of r)Nu(c,b.x1,b.y1),Nu(c,b.x2,b.y2);let u={...Number.isFinite(c.minX)?c:Number.isFinite(a.minX)?a:ay},f=new Map(r.map(b=>[b.id,b])),h=!t&&["w1","w2","w3","w4","w5","w6","w7","w8","w9","w11","w12","w13","w18"].every(b=>f.has(b))?{left:u.minX-108,deckEdge:u.minX-10,stepTop:u.minZ+14,stepBottom:u.maxZ+25,deckBottom:u.maxZ+82,northDeck:[[u.minX-10,f.get("w1").y1+57],[f.get("w2").x1,f.get("w1").y1+57],[f.get("w3").x1,f.get("w3").y1],[f.get("w3").x2,f.get("w3").y2],[u.minX-10,f.get("w4").y2]].map(([b,M])=>({x:b,y:M})),southDeck:[[u.minX-10,f.get("w6").y1],[f.get("w7").x1,f.get("w7").y1],[f.get("w7").x2,f.get("w7").y2],[f.get("w8").x1,u.maxZ+82],[u.minX-10,u.maxZ+82]].map(([b,M])=>({x:b,y:M})),recess:{x1:f.get("w12").x2,x2:f.get("w18").x1,z1:Math.min(f.get("w11").y2,f.get("w12").y2),z2:f.get("w13").y2}}:null,d=r.filter(b=>h?!(b.id==="w3"&&uy(b,[400,408,342,468]))&&!(b.id==="w7"&&uy(b,[248,590,302,651])):!0);if(h){l(h.left,h.stepTop),l(h.deckEdge,h.deckBottom);let{x1:b,x2:M,z1:T}=h.recess;if(M>b){let S=[[b,f.get("w12").y2,b,T],[b,T,M,T]];for(let[R,P]of S.entries()){if(d.some(G=>UT(G,P)))continue;let[I,F,H,B]=P,Y=ly({id:`reference-recess-${R}`,x1:I,y1:F,x2:H,y2:B});Y&&d.push(Y)}}}let p=new Map;for(let b of o.filter(M=>M.type==="window")){let M=vy(d,b.x,b.y,(b.rotation||0)*lo);if(!M||M.distance>27)continue;let{wall:T,t:S,centerX:R,centerZ:P}=M,I=Math.max(1,S-b.w/2+1),F=Math.min(T.length-1,S+b.w/2-1);if(F-I<14)continue;T.openings.push({start:I,end:F});let H=_y(i,T,R,P),B=T.angle+(H<0?Math.PI:0),Y=(I+F)/2;p.set(b.id,{x:T.x1+Y*T.dx,z:T.y1+Y*T.dz,angle:B,window:{...b,w:F-I+2,rotation:B/lo}})}let y=o.filter(b=>b.type==="garageDoor"),m=o.map(b=>{let M=b.type==="cameraThumbnail"&&y.some(Y=>ZT(b,Y))?qn:Ty(b.type),T=wf(b),S=p.get(b.id)??FT(i,d,b);if(T){let Y=52;for(let G of p.values()){let V=Math.hypot(G.x-b.x,G.z-b.y);V<Y&&(S=G,Y=V)}}let R=S?.x??b.x,P=S?.z??b.y,I=S?.angle??(Number.isFinite(b.rotation)?b.rotation*lo:0),F=b.type==="stairs"?1536:300,H=Math.min(F,(Math.abs(Math.cos(I))*b.w+Math.abs(Math.sin(I))*b.h)/2),B=Math.min(F,(Math.abs(Math.sin(I))*b.w+Math.abs(Math.cos(I))*b.h)/2);return l(R-H,P-B),l(R+H,P+B),{item:b,x:R,z:P,baseY:M,angle:I,window:S?.window,mountY:S?.mountY,isBlind:T}});for(let b of d)b.openings.sort((M,T)=>M.start-T.start||M.end-T.end);let g=m.filter(({item:b})=>b.type==="stairs").map(b=>{let{item:M,x:T,z:S,angle:R}=b,P=Number.isInteger(M.steps)&&M.steps>=2&&M.steps<=40?M.steps:hd,I=Math.min(46,Math.max(12,M.w*.47)),F=-M.h/2-I;for(let H of[-M.w/2,M.w/2])l(T+H*Math.cos(R)-F*Math.sin(R),S+H*Math.sin(R)+F*Math.cos(R));return{...b,steps:P,apronDepth:I}}),x=s.filter(b=>b.kind==="fence").map(b=>kT(b,e,g)),v=Ef(e,h,t),_=p0(d.map(b=>({...b,palette:My(b)})),ud,xy,CT);return Number.isFinite(a.minX)||Object.assign(a,ay),{rooms:e,walls:d,fences:x,stairs:g,placements:m,bounds:a,houseBounds:u,reference:h,floorStructure:v,wallStructure:_,editableStructure:t}}function dy(n,t){for(let[e,[i,s]]of t.slice(0,-1).entries())e===0?n.moveTo(i,-s):n.lineTo(i,-s);return n.closePath(),n}function dd([n,...t]){let e=dy(new Ke,n);return e.holes=t.map(i=>dy(new Hs,i)),e}function OT(n,t,e){let i=n.createElement("canvas");i.width=i.height=256;let s=i.getContext("2d");if(!s)return null;let[r,o,a]=t,c=Uu(e);if(s.fillStyle=r,s.fillRect(0,0,256,256),s.strokeStyle=o,s.fillStyle=o,a==="board")for(let u=0;u<8;u++){let f=u*32;s.globalAlpha=.04+c()*.14,s.fillRect(0,f,256,32),s.globalAlpha=.48,s.fillRect(0,f,256,1.2);let h=30+u*47%181;s.fillRect(h,f,1,32),s.globalAlpha=.15;for(let d=0;d<15;d++){let p=c()*256,y=f+3+c()*27,m=12+c()*46;s.beginPath(),s.moveTo(p,y),s.quadraticCurveTo(p+m/2,y+c()*2-1,p+m,y),s.stroke()}}else if(a==="tile")for(let u=0;u<8;u++)for(let f=0;f<8;f++)s.globalAlpha=c()*.14,s.fillRect(f*32,u*32,32,32),s.globalAlpha=.35,s.strokeRect(f*32+.5,u*32+.5,31,31);else for(let u=0;u<160;u++)s.globalAlpha=.12+c()*.24,s.fillRect(c()*256,c()*256,1+c()*4,1+c()*3);let l=new cs(i);return l.colorSpace=Ge,l.wrapS=l.wrapT=ks,l}function ld(n){let t=new Map,e=new be,i=new an,s=new X,r=new X(0,1,0),o=new X(1,1,1),a=new Map,c=d=>(a.has(d)||a.set(d,new Or({color:d})),a.get(d));function l(d,p,y,m,g,x=0){i.setFromAxisAngle(r,x),e.compose(s.set(y,m,g),i,o),d.applyMatrix4(e);let v=c(p);t.has(v)||t.set(v,[]),t.get(v).push(d)}function u(d,p,y,m,g,x,v,_=0){d>0&&p>0&&y>0&&l(new xe(d,p,y),m,g,x,v,_)}function f(d,p,y,m,g,x,v){let _=new ve(1,9,6);_.scale(d,p,y),l(_,m,g,x,v)}function h(){for(let[d,p]of t){let y=On(p);if(!y){for(let m of p)n.add(new ne(m,d));continue}n.add(new ne(y,d));for(let m of p)m.dispose()}t.clear()}return{add:l,ball:f,box:u,material:c,finish:h}}function BT(n,t,e,i){let s=new Map;for(let{surface:r,polygons:o}of e.floorStructure.regions){let a=Object.hasOwn(ad,r)?r:"oak";if(!s.has(a)){let c=ad[a],l=OT(i,c,141+Object.keys(ad).indexOf(a)*977);s.set(a,new Or({color:l?"#fffdf8":c[0],map:l}))}for(let c of o){let l=new Ti(dd(c));l.rotateX(-Math.PI/2);let u=l.getAttribute("position"),f=l.getAttribute("uv");for(let d=0;d<f.count;d++)f.setXY(d,u.getX(d)/248,u.getZ(d)/248);let h=new ne(l,s.get(a));h.receiveShadow=!0,n.add(h)}}for(let r of e.floorStructure.footprint)py(t,r,-22,0,"#a67e76",!0);for(let r of e.floorStructure.foundation)py(t,r,qn-1,-22,"#a18e84",!0)}function zT(n){if(!n.index){let t=n.getAttribute("position").count,e=new Uint32Array(t);for(let i=0;i<t;i++)e[i]=i;n.setIndex(new Me(e,1))}return n}function py(n,t,e,i,s,r=!1){let o=new ui(dd(t),{depth:i-e,bevelEnabled:!1});if(r){let a=o.getAttribute("position"),c=[];for(let l=0;l<a.count;l+=3)[l,l+1,l+2].some(u=>a.getZ(u)<i-e-.001)&&c.push(l,l+1,l+2);o.setIndex(c)}o.rotateX(-Math.PI/2),n.add(zT(o),s,0,e,0)}function HT(n,t){let e=[],i=[],s=[];for(let[[o,a],[c,l]]of n){let u=e.length/3,f=Math.hypot(c-o,l-a);e.push(o,0,a,o,t,a,c,t,l,c,0,l),i.push(u,u+1,u+2,u,u+2,u+3),s.push(0,0,0,t,f,t,f,0)}let r=new re;return r.setAttribute("position",new Xt(e,3)),r.setAttribute("uv",new Xt(s,2)),r.setIndex(i),r.computeVertexNormals(),r}function my(n,t){let e=new Ti(dd(n));if(e.rotateX(-Math.PI/2),t){let i=e.index.array;for(let s=0;s<i.length;s+=3)[i[s+1],i[s+2]]=[i[s+2],i[s+1]];e.computeVertexNormals()}return e}function GT(n,t){for(let{faces:e,bottom:i,top:s,surface:r}of t.wallStructure){for(let o of e.top)n.add(my(o,!1),r,0,s,0);for(let o of e.bottom)n.add(my(o,!0),r,0,i,0);e.sides.length&&n.add(HT(e.sides,s-i),r,0,i,0)}}function VT(n,t){let e=new Set;for(let i of t){let{x1:s,y1:r,x2:o,y2:a,base1:c,base2:l,length:u,angle:f,posts:h,color:d,postColor:p}=i,y=l-c,m=new xe(Math.hypot(u,y),5,by);m.rotateZ(Math.atan2(y,u)),n.add(m,d,(s+o)/2,(c+l)/2+Ua,(r+a)/2,-f);for(let g=0;g<=h;g++){let x=g/h,v=te.lerp(s,o,x),_=te.lerp(r,a,x),b=te.lerp(c,l,x),M=[v,b,_].map(T=>Math.round(T*1e3)).join(",");e.has(M)||(e.add(M),n.box(5,Ua,5,p,v,b+Ua/2,_,-f))}}}function wy(n,t){let e=n/t,i=-Qi/t,s=Math.min(5.5,e*.25),r=Math.min(1.8,s*.38);return{run:e,rise:i,noseDepth:s,lipDepth:r,height:a=>a===t-1?0:Qi+(a+1)*i}}function Ey(n,t,e,i,s=0,r=0){let{run:o,noseDepth:a,lipDepth:c,height:l}=wy(e,i);for(let u=0;u<i;u++){let f=r-e/2+o*u,h=l(u),d=h-3;n.box(t,d-qn,o,"#a98075",s,(qn+d)/2,f+o/2),n.box(t,3,o-a,u%2?"#e4c5a8":"#d9b79a",s,h-1.5,f+(o+a)/2),n.box(t,3.35,a-c,"#896254",s,d+3.35/2,f+(a+c)/2),n.box(t,3.4,c,"#f5d8b5",s,d+3.4/2,f+c/2)}}function WT({item:n,steps:t,apronDepth:e}){let i=new Jt,s=ld(i);Ey(s,n.w,n.h,t);let r=Qi-qn;return s.box(n.w,r,e,"#c8b79e",0,qn+r/2,-n.h/2-e/2),s.finish(),{root:i,anchorY:Qi/2}}function XT(n,t){if(!t.reference)return;let{left:e,deckEdge:i,stepTop:s,stepBottom:r,northDeck:o}=t.reference,a=i-e,c=(i+e)/2,l=hd,u=r-s,f=u/l,h=Qi,d=-h/l;Ey(n,a,u,l,c,(s+r)/2);for(let _=0;_<l;_++){let b=s+f*(_+.5),M=h+(_+1)*d;n.box(5,24,5,"#9f8183",e+4,M+12,b)}let p=f*(l-1),y=d*(l-1),m=new xe(7,5,Math.hypot(p,y)+5);m.rotateX(-Math.atan2(y,p)),n.add(m,"#896e79",e+4,24-y/2,(s+r)/2),n.box(a+2,3,80,"#cbbda6",c,h-1.5,s-40);let[g,x]=o,v=Math.max(2,Math.ceil((x.x-g.x)/28));n.box(x.x-g.x,5,7,"#896e79",(x.x+g.x)/2,28,g.y);for(let _=0;_<=v;_++)n.box(5,28,5,"#9f8183",g.x+(x.x-g.x)*_/v,14,g.y)}function qT(n){let t=n.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d");if(!e)return null;let i=Uu(71293);e.fillStyle="#b1c3a0",e.fillRect(0,0,512,512);for(let r=0;r<92;r++){let o=i()*512,a=i()*512,c=20+i()*56;for(let l of[-512,0,512])for(let u of[-512,0,512]){let f=e.createRadialGradient(o+l,a+u,0,o+l,a+u,c);f.addColorStop(0,r%3?"#dbe0a730":"#466f5630"),f.addColorStop(1,"#b1c3a000"),e.fillStyle=f,e.fillRect(o+l-c,a+u-c,c*2,c*2)}}for(let r=0;r<4200;r++){let o=i()*512,a=i()*512;e.fillStyle=r%2?"#e3e6b33e":"#5e7b5d30",e.fillRect(o,a,1.4+i()*3,1.2+i()*2.8)}let s=new cs(t);return s.wrapS=s.wrapT=ks,s.repeat.set(15,10),s.colorSpace=Ge,s.anisotropy=4,s}function YT(n,t,e,i){let{minX:s,maxX:r,minZ:o,maxZ:a}=t.houseBounds,c=r-s,l=a-o,u=Uu(150741);if(!t.editableStructure){let p=Math.min(90,c*.18),y=t.reference?t.reference.left+p/2:s+p/2;n.box(p,4,115,"#c7baa4",y,-109,o-88);for(let m=0;m<5;m++)n.box(p*.85,1.8,13,"#dbceba",y,-106,o-137+m*20)}let f=[[.06,-.075],[.32,-.09],[.63,-.11],[.92,-.075],[1.045,.32],[1.035,.74],[.84,1.085],[.51,1.08],[.23,1.075],[-.135,.55]];for(let[p,y]of f){let m=s+p*c,g=o+y*l,x=21+u()*24;n.ball(x*.94,9,x*.67,"#6d886a",m,-104,g),n.ball(x*.82,x*.57,x*.69,"#819b76",m+3,-98,g);for(let v=0;v<8;v++){let _=v*2.39996,b=(.2+u()*.5)*x,M=x*(.28+u()*.2),T=["#94ad7f","#a6ba88","#8da878","#bad09c"][v%4];n.ball(M*1.15,M*.8,M,T,m+Math.cos(_)*b,-93+12*u(),g+Math.sin(_)*b*.75)}for(let v=0;v<5;v++){let _=v%2?"#e6c4b1":"#fae6a4",b=m+(u()-.5)*x*1.14,M=g+x*(.62+u()*.43);n.ball(2.3,4.6,2.3,"#819765",b,-106,M),n.ball(3.9,1.8,3.3,_,b,-101.5,M),n.ball(1.2,.9,1.2,"#cb9c57",b,-100.3,M)}}let h=[["cypress",.1,-.1,126],["shore-pine",.81,-.145,119],["fan-palm",.96,-.1,112],["olive",-.075,.42,97],["cypress",1.055,.64,136],["coast-oak",.21,1.14,112],["jacaranda",.82,1.16,118]],d=t.placements.filter(({item:p})=>p.type==="garageDoor"||p.type==="stairs");for(let[p,[y,m,g,x]]of h.entries()){let v=x*Fa[y].radius+7,_=s+m*c,b=o+g*l,M=b<o?-1:1,T=_<(s+r)/2?-1:1;for(let[S,R]of[[0,0],[T*(v+20),0],[0,M*(v+20)]]){let P=_+S,I=b+R;if(!(I-v<=e.nearZ||P+v>s&&P-v<r&&I+v>o&&I-v<a||d.some(H=>{let B=P-H.x,Y=I-H.z,G=B*Math.cos(H.angle)+Y*Math.sin(H.angle),V=-B*Math.sin(H.angle)+Y*Math.cos(H.angle);return Math.abs(G)<H.item.w/2+v&&Math.abs(V)<H.item.h*.6+v}))){i.add({kind:y,x:P,z:I,groundY:qn,height:x,seed:7229+p*101});break}}}for(let[p,y,m,g]of[[5633,"date-palm",.065,21],[2081,"fan-palm",.93,20],[7313,"date-palm",.985,32]])i.add({kind:y,x:s+m*c,z:e.farZ-g,groundY:qn+.68,seed:p})}function $T(n,t,e){let i=Uu(2912),s=t.bounds,r=[],o=t.reference?.recess,a=(b,M)=>!(o&&b>=o.x1&&b<=o.x2&&M>=o.z1&&M<=o.z2)&&!t.rooms.some(T=>(!t.editableStructure||!Kr(T))&&Fu(T,b,M)),c=Math.min(s.minZ,e)-70,l=s.maxZ+70-c,u;for(let b=0;b<520;b++){b===210&&(u=r.length);let M=s.minX-70+(s.maxX-s.minX+140)*i(),T=c+l*i(),S=i()*180,R=8+i()*8,P=112+i()*34;a(M,T)&&r.push({x:M,z:T,phase:S,length:R,speed:P})}let f=new Float32Array(r.length*6),h=new Float32Array(r.length*3),d=new Float32Array(r.length*3),p=new re,y=new re,m=new re;p.setAttribute("position",new Me(f,3).setUsage(Ln)),y.setAttribute("position",new Me(h,3).setUsage(Ln)),m.setAttribute("position",new Me(d,3).setUsage(Ln));let g=new Oo(p,new Lr({color:"#d3e4ec",transparent:!0,opacity:.36,depthWrite:!1})),x=new Nr(y,new Bs({color:"#fff6eb",size:3.2,transparent:!0,opacity:.8})),v=new Nr(m,new Bs({color:"#c9edf6",size:2.6,transparent:!0,opacity:.83}));g.frustumCulled=x.frustumCulled=v.frustumCulled=!1,n.add(g,x,v);let _=0;return(b,{condition:M,windSpeed:T,windBearing:S},R)=>{g.visible=PT.has(M);let P=M==="pouring"||M==="lightning-rainy";if(g.material.opacity=P?.5:.34,x.visible=LT.has(M),v.visible=M==="hail",g.visible||x.visible||v.visible){let I=R?r.length:u;I!==_&&(p.setDrawRange(0,I*2),y.setDrawRange(0,I),m.setDrawRange(0,I),_=I);let F=Number.isFinite(S)?S*lo:285*lo,H=te.clamp(T??6,0,22)*.028,B=H*Math.sin(F),Y=-H*Math.cos(F);for(let G=0;G<I;G++){let{x:V,z:ft,phase:J,speed:W,length:st}=r[G],bt=G*3;if(g.visible){let Mt=65-(J+b*W*(P?1.3:1))%170,vt=bt*2;f[vt]=V,f[vt+1]=Mt,f[vt+2]=ft,f[vt+3]=V+st*B,f[vt+4]=Mt+st,f[vt+5]=ft+st*Y}x.visible&&(h[bt]=V+Math.sin(b+G)*6,h[bt+1]=65-(J+b*20)%170,h[bt+2]=ft),v.visible&&(d[bt]=V,d[bt+1]=65-(J+b*W*1.55)%170,d[bt+2]=ft)}p.attributes.position.needsUpdate=g.visible,y.attributes.position.needsUpdate=x.visible,m.attributes.position.needsUpdate=v.visible}}}function Ty(n){return n==="garageDoor"?qn:0}function ZT(n,t){let e=n.x-t.x,i=n.y-t.y,s=(t.rotation??0)*lo,r=Math.cos(s),o=Math.sin(s);return e0(t,e*r+i*o,-e*o+i*r)}function jT(n,t,e,i){let s=new X,r=7,o=l=>{let u={left:1/0,top:1/0,right:-1/0,bottom:-1/0};for(let f of l){s.set(...f).project(t);let h=(s.x+1)*e/2,d=(1-s.y)*i/2;u.left=Math.min(u.left,h-r),u.right=Math.max(u.right,h+r),u.top=Math.min(u.top,d-r),u.bottom=Math.max(u.bottom,d+r)}return u},a=n.fences.map(({x1:l,y1:u,x2:f,y2:h,base1:d,base2:p})=>o([[l,d,u],[l,d+Ua,u],[f,p,h],[f,p+Ua,h]])),c=n.stairs.map(({x:l,z:u,angle:f,item:h,apronDepth:d})=>{let p=Math.cos(f),y=Math.sin(f),m=[];for(let g of[-h.w/2,h.w/2])for(let[x,v]of[[-h.h/2-d,Qi],[h.h/2,0]])m.push([l+g*p-x*y,v,u+g*y+x*p]);return o(m)});return[...a,...c]}function KT(n){let t=[...n.stairs];if(n.reference){let{left:h,deckEdge:d,stepTop:p,stepBottom:y}=n.reference;t.push({x:(h+d)/2,z:(p+y)/2,angle:0,item:{w:d-h,h:y-p},steps:hd,apronDepth:80,apronOverhang:1})}let e=h=>Math.round(h*1e5)/1e5,i=t.flatMap(h=>{let{x:d,z:p,angle:y,item:m,apronDepth:g,apronOverhang:x=0}=h,v=(b,M)=>[e(d+b*Math.cos(y)-M*Math.sin(y)),e(p+b*Math.sin(y)+M*Math.cos(y))],_=(b,M,T)=>[[v(-b,M),v(b,M),v(b,T),v(-b,T)]];return[_(m.w/2,-m.h/2,m.h/2),_(m.w/2+x,-m.h/2-g,-m.h/2)]}),s=n.fences.map(({x1:h,y1:d,x2:p,y2:y,dx:m,dz:g})=>{let x=by/2;return[[[h-g*x,d+m*x],[p-g*x,y+m*x],[p+g*x,y-m*x],[h+g*x,d-m*x]].map(_=>_.map(e))]}),r=Js(n.floorStructure.footprint),o=i.length?yy.default.union(n.floorStructure.footprint,...i):n.floorStructure.footprint,a=Js(du(o,n.wallStructure,s)),c=t.map(h=>({stair:h,...wy(h.item.h,h.steps)})),l={height:0,rise:0};function u(h,d){if(r.contains(h,d))return l;let p;for(let{stair:y,run:m,rise:g,height:x}of c){let{item:v,steps:_,apronDepth:b,apronOverhang:M=0}=y,[T,S]=Sy(y,h,d),R=S+v.h/2,P=R<0;if(Math.abs(T)>v.w/2+(P?M:0)||R<-b||R>v.h)continue;let I=Math.min(_-1,Math.floor(R/m)),F=P?Qi:x(I);(!p||F>p.height)&&(p={height:F,rise:g})}return p}function f(h,d,p,y,m){if(!a.supportsRoute(h,d,p,y,m))return!1;if(!c.length)return!0;let g=Math.max(1,Math.min(8,...c.map(_=>_.run/2))),x=Math.min(256,Math.ceil(Math.hypot(p-h,y-d)/g)),v=u(h,d);for(let _=1;_<=x;_++){let b=_/x,M=u(te.lerp(h,p,b),te.lerp(d,y,b));if(!v||!M||Math.abs(v.height-M.height)>Math.max(v.rise,M.rise)+.01)return!1;v=M}return!0}return{...a,supportsRoute:f,floorAt:(h,d)=>a.contains(h,d)?u(h,d)?.height??null:null}}function JT(n){let{floorStructure:t,wallStructure:e}=n,i=n.editableStructure?t.foundation:Ef(n.rooms.filter(s=>!Kr(s)),n.reference,!0).foundation;return{home:Js(du(i,e)),vacuum:Js(du(t.footprint,e)),presence:KT(n)}}function gy(n,t,e,{insaneGraphics:i=!1,renderScale:s=1,maxWidth:r=1/0,maxHeight:o=1/0}={}){let a=i?NT:27e5,c=Math.min(e,i?1/0:1.5,r/n,o/t,Math.sqrt(a/(n*t)));return Math.max(1/Math.min(n,t),c*(i?1:s))}function Ay(n,t,{insaneGraphics:e=!1}={}){let i=fd(t),s=new Wl({canvas:n,antialias:!0,alpha:!1,powerPreference:e?"high-performance":"low-power"});try{return s.resetState(),QT(n,t,i,s)}catch(r){throw Ry(s),r}}function Ry(n){try{n.getContext().isContextLost()||n.resetState()}finally{n.dispose()}}function QT(n,t,e,i){let s=t.sceneSettings,r={},o=new Vi;o.background=new Wt("#d7dfcd");let a=new No(o.background),c=new ds(-800,800,450,-450,1,iu),{minX:l,maxX:u,minZ:f,maxZ:h}=e.bounds,d=new Ne({color:"#e8e8d2",map:qT(n.ownerDocument),roughness:.95}),p;d.onBeforeCompile=({uniforms:j})=>{p=j.dfgLUT};let y=new ne(new wn(6200,4200),d);y.rotation.x=-Math.PI/2,y.position.set((l+u)/2,qn,(f+h)/2),o.add(y);let m=ld(o),g=ld(o),x=oy(g),v=gg(e),_=yg(m,v,qn,y.geometry.parameters.width,y.position.x),b,{water:M}=bg(m,v,qn,e.houseBounds,y.geometry.parameters.width,y.position.x),T=M.shoreline.reduce((j,Q)=>Math.abs(Q.x-M.focusX)<Math.abs(j.x-M.focusX)?Q:j),S={road:{x:_.centerX,y:_.surfaceY+8,z:(_.lanes[0]+_.lanes[1])/2},coast:{x:M.focusX+16,y:M.y,z:T.z-36},beach:{x:M.focusX,y:M.y+8,z:T.z+37}};YT(m,e,v,x),XT(m,e),BT(o,m,e,n.ownerDocument);let R=new Map(o.children.flatMap(j=>{let Q=j.material?.map;return Q?[[Q,Q.anisotropy]]:[]}));GT(m,e),VT(m,e.fences),m.finish();let P=o.children.length;g.finish();let I=o.children.slice(P),F=o.children.filter(j=>j.isMesh),H=x0(i,o,e.bounds),B=g0();H.markStructure();let Y=new wn(16e4,16e4),{position:G,uv:V}=Y.attributes;for(let j=0;j<V.count;j++)V.setXY(j,G.getX(j)/y.geometry.parameters.width+.5,G.getY(j)/y.geometry.parameters.height+.5);let ft=new ne(Y,d);ft.name="Horizon foreground",ft.rotation.copy(y.rotation),ft.position.copy(y.position),ft.position.y-=.12,ft.receiveShadow=!0,ft.visible=!1,o.add(ft);let J=dg(M),W=Hg(_),st=Yg(M),bt=Zg(M,v);o.add(J.mesh,W.root,st.root,bt.root);let Mt=$T(o,e,v.sceneryMinZ),vt=e.floorStructure.footprint,{home:xt,vacuum:yt,presence:$}=JT(e),rt=$.floorAt,Et=new Vi,Ut=new Vi,It;function Pt(j,Q){if(It&&(It.removeFromParent(),It.geometry.dispose(),It.material.map.dispose(),It.material.dispose(),It=void 0),!j)return!0;let ot=j.naturalWidth,Nt=j.naturalHeight;if(!(ot>0&&Nt>0))return!1;let kt=[[0,0],[ot,0],[ot,Nt],[0,Nt]].map(([ie,ce])=>ni(Q,{x:ie,y:ce}));if(kt.some(ie=>!ie||Math.abs(ie.x)>1e4||Math.abs(ie.y)>1e4))return!1;let Ft=new re;Ft.setAttribute("position",new Xt(kt.flatMap(({x:ie,y:ce})=>[ie,.82,ce]),3)),Ft.setAttribute("uv",new Xt([0,1,1,1,1,0,0,0],2)),Ft.setIndex([0,2,1,0,3,2]);let Ht=new dn(j);Ht.colorSpace=Ge,Ht.needsUpdate=!0;let qt=new _e({map:Ht,opacity:.48,transparent:!0,side:We,depthWrite:!1,toneMapped:!1});return It=new ne(Ft,qt),It.name="vacuum-lidar-overlay",o.add(It),!0}let $t=ag(),U=ug(vt);o.add(U.root);let it=new Vs("#fff5e1","#c9bfd7",1.8),K=new ps("#fff1d8",1.65);K.position.set(-4,9,6),Et.add(it,K);let at=new Map,tt=new Map,St={value:0},Tt=new Set(e.placements.filter(({item:j})=>j.visualKind==="none").map(({item:j})=>j.id)),Rt=new Map,Lt=new Map(e.stairs.map(j=>[j.item.id,j]));for(let j of e.placements){let{item:Q,x:ot,z:Nt,baseY:kt,angle:Ft,window:Ht,mountY:qt,isBlind:ie}=j,ce=Q.type==="window"&&Ht?Ht:Q,Zt=Lt.get(Q.id),ee=Zt?WT(Zt):n0(ce,{window:ie?Ht:void 0,mountY:qt})??jm(ce,{mountY:qt,surfaceDetail:St});if(ee){let Ue=w0(Q,ee.root);if(ee.root.position.set(ot,kt+Ue,Nt),ee.root.rotation.y=-Ft,ee.dock&&(ee.dock.position.set(ot,kt,Nt),ee.dock.rotation.y=-Ft,o.add(ee.dock)),ee.floorRadius){let Se=ee.floorRadius,de=(Yt,ke)=>yt.clearance(Yt,ke)>=Se,pe=(Yt,ke,ge,hn)=>yt.supportsRoute(Yt,ke,ge,hn,Se);ee.dockFits=de(ot,Nt),ee.root.name=Q.id,ee.liveMotion=Vf({allowsPoint:de,allowsRoute:pe,duration:.42}),ee.demoMotion=Vf({allowsPoint:de,allowsRoute:pe,duration:0})}o.add(ee.root),tt.set(Q.id,ee),Q.type==="garageDoor"&&Rt.set(ee.root,Q.id),H.register(Q,ee)}at.set(Q.id,{x:ot,z:Nt,baseY:kt,rootY:ee?.root.position.y,object:ee})}let q=e.placements.filter(({item:j,baseY:Q})=>Q===0&&tt.has(j.id)),Gt=Hf(q),Bt=Gt,z=ey(e.placements,tt),A=z.resolve(),dt=A,ct={supportsRoute:$.supportsRoute,floorClearance:$.clearance,geometryRevision:()=>Bt,allowsBodyPoint:(j,Q,ot,Nt)=>!Bt.blocksPoint(j,Q,ot,Nt),allowsBodyRoute:(j,Q,ot,Nt,kt,Ft)=>!Bt.blocksRoute(j,Q,ot,Nt,kt,Ft)},lt=kf(Et,rt,{occlusionScene:Ut,...ct,seats:P0(e.placements,tt,xt.clearance),interactions:k0(e.placements,tt,A)}),O,w=lt,E,C=!1,D={...e.bounds,sceneryMinZ:v.sceneryMinZ,waterfront:{minX:M.focusX-475,maxX:M.focusX+605,minZ:T.z-352,maxZ:T.z+88}};for(let j of e.placements){let Q=tt.get(j.item.id);if(!Q)continue;let ot=A.get(j.item.id);if(ot&&(Q.root.position.y=ot.y),Q.root.scale.y!==1||ot?.supportId){let{max:Nt}=new Le().setFromObject(Q.root);Number.isFinite(Nt.y)&&(D.maxY=Math.max(D.maxY??92,Nt.y))}}let k=new X,et=!1,Z=0,gt=0,ut=1,At=!1,N,ht=i.getContext(),[nt,_t]=ht.getParameter(ht.MAX_VIEWPORT_DIMS),Ct=ht.getParameter(ht.MAX_RENDERBUFFER_SIZE),wt=Math.min(Ct,nt),Dt=Math.min(Ct,_t),zt=i.capabilities.getMaxAnisotropy(),oe=!1,jt,fe=Ss(),Ee,Ze=new gs,Ye=new Gn(new X(0,1,0),0),nn=new X,sn=Object.freeze({state:"unavailable",attributes:Object.freeze({}),presence:"off",active:!1});function xn(){jt=oe&&Z>0&&gt>0?DT(c):void 0}function un(){S0(c,D,Z,gt,fe,Ee),xn();let j=_0(fe.tilt);if(o.fog=j?a:null,ft.visible=!!j,j){let Q=c.far-iu;a.near=j.near+Q,a.far=j.far+Q}}function bn(){let j=n.ownerDocument.defaultView?.devicePixelRatio||1;N=gy(Z,gt,j,{renderScale:ut,insaneGraphics:At,maxWidth:wt,maxHeight:Dt}),i.setDrawingBufferSize(Z,gt,N)}function An(j,Q){if(!(et||j<1||Q<1)){if(j===Z&&Q===gt){let ot=n.ownerDocument.defaultView?.devicePixelRatio||1;N!==gy(j,Q,ot,{renderScale:ut,insaneGraphics:At,maxWidth:wt,maxHeight:Dt})&&bn();return}Z=j,gt=Q,bn(),un()}}function Is({renderScale:j,shadowQuality:Q,limitOffscreenScenery:ot,insaneGraphics:Nt=!1}={}){if(et)return;H.setShadowQuality(Q),ot===!0!==oe&&(oe=ot===!0,xn());let kt=Number.isFinite(j)?te.clamp(j,.5,1):1;if(!(kt===ut&&Nt===At)){if(Nt!==At){At=Nt,St.value=Number(At),J.setHighDetail(At);for(let[Ft,Ht]of R){let qt=At?Math.max(Ht,zt):Ht;qt!==Ft.anisotropy&&(Ft.anisotropy=qt,Ft.needsUpdate=!0)}}ut=kt,Z>0&&gt>0&&bn()}}function nr(j,Q){return fe=Ss(j),Ee=Q,!et&&Z>0&&gt>0&&un(),Ps()}function Ps(){return{...fe}}function ir(j){if(typeof j=="string"){if(Object.hasOwn(S,j))return{...S[j]};let Q=at.get(j);if(!Q)return null;let{x:ot,z:Nt,baseY:kt,object:Ft}=Q;return Ft?{x:ot,y:Ft.root.position.y+(Ft.anchorY??0)*Ft.root.scale.y,z:Nt}:{x:ot,y:kt+6,z:Nt}}return[j?.x,j?.y].every(Number.isFinite)?{x:j.x,y:(rt(j.x,j.y)??0)+22,z:j.y}:null}function fo(j,Q){return et||!Number.isFinite(j)||!Number.isFinite(Q)||Z<=0||gt<=0?!1:(Ze.setFromCamera(new Ot(j/Z*2-1,1-Q/gt*2),c),!0)}function sr(j,Q,ot,{preferTabletop:Nt=!1}={}){if(!fo(j,Q))return null;if(Nt){let kt=z.projectTabletop(ot,Ze);if(kt)return kt}return Ye.constant=-Ty(ot),Ze.ray.intersectPlane(Ye,nn)?{x:nn.x,y:nn.z}:null}function Oa(j,Q){if(!Rt.size||!fo(j,Q))return null;let ot=[];for(let kt of Rt.keys())kt.traverseVisible(Ft=>{Ft.isMesh&&ot.push(Ft)});let Nt=Ze.intersectObjects(ot,!1)[0];if(!Nt||Ze.intersectObjects(F,!1).some(kt=>kt.distance<Nt.distance-.01))return null;for(let kt=Nt.object;kt;kt=kt.parent)if(Rt.has(kt))return Rt.get(kt);return null}function Ba(j=!1){U.root.visible=!j&&fe.preset!=="waterfront",It&&(It.visible=!j&&fe.preset!=="waterfront"),i.render(o,c);let Q=(j||r.showAvatars!==!1)&&fe.preset!=="waterfront"&&w?.hasVisibleTracks,ot=!j&&fe.preset!=="waterfront"&&$t.scene.children.length>0;if(!(!Q&&!ot)){i.autoClear=!1;try{Q&&(j||(w.orientOcclusionCues(c),i.render(Ut,c)),i.render(Et,c)),ot&&(i.clearDepth(),i.render($t.scene,c))}finally{i.autoClear=!0}}}function Ou(j={}){r=j,s={...t.sceneSettings,...j.features},U.setOpacity(j.heatMapOpacity)}function Bu(j,Q,ot=!1){let Nt=Q.beachActivity??(Q.night?"overnight":"day"),kt={reduceMotion:Q.reduceMotion===!0,night:Q.night===!0,condition:Q.condition,transientTelemetry:ot,activity:Nt,inView:jt};W.root.visible=Nt!=="overnight"&&(ot||pi(s,"sidewalk")),st.root.visible=ot||pi(s,"boats"),bt.root.visible=ot||pi(s,"beachPlay"),W.root.visible&&W.update(j,kt),st.root.visible&&st.update(j,kt),bt.root.visible&&bt.update(j,kt);let Ft=ot||pi(s,"trees");for(let Ht of I)Ht.visible=Ft;Ft&&x.update(j,Q),J.update(j,ot||pi(s,"reflections")?Q:{...Q,reflections:!1})}function zu(j=0,Q={},ot={},{animateTelemetry:Nt=!0,showTelemetryPosition:kt=!0,draftPositions:Ft,transientTelemetry:Ht=!1}={}){if(et||Z<1||gt<1)return;Ht||(ot=Yl(ot,s));let qt=ot.reduceMotion===!0,ie=!qt&&Number.isFinite(j)?j:0,ce=Zi(ot);ot={...ot,solar:Ht?ce:B(ce,ie,qt)};let Zt=Nt?ie:0,ee=Ht||pi(s,"traffic");ee&&!b&&ot.traffic&&(b=Ug(_),o.add(b.root)),b&&(b.root.visible=ee,ee&&b.update(j,ot.traffic,{reduceMotion:qt,night:ot.night===!0,transientTelemetry:Ht,inView:jt,headlightBrightness:Ht?1:r.headlightBrightness})),Mt(Zt,Ht||pi(s,"precipitation")?ot:{},At),Bu(j,ot,Ht);let Ue=E!==Ft;Ue&&(E=Ft,dt=Ft?z.resolve(Ft):A,Bt=Ft?Hf(q.map(de=>{let pe=Ft[de.item.id]?.position;return pe?{...de,x:pe.x,z:pe.y}:de})):Gt),C=!1;for(let[de,pe]of tt){let Yt=Tt.has(de),ke=Yt?sn:Q[de]??sn,{visible:ge,position:hn}=pe.root,Rn=Ft?.[de]?.position,ii=!1;if(pe.floorRadius&&!Yt&&kt&&!Rn){let Bn=Ht?pe.demoMotion:pe.liveMotion;!Ht&&pe.demoMotion.hasPosition&&pe.demoMotion.clear();let Ce=Bn.observe(ke.position,j,{observation:ke.positionObservedAt,reduceMotion:qt});!Ce&&(ke.state==="docked"||ke.wrongMap)&&Bn.clear();let Yn=Bn.sample(j,qt);Rn=Yn,ii=Ce&&Yn?.current===!0,pe.root.visible=!!(Yn||!Bn.hasPosition&&pe.dockFits)}else pe.floorRadius&&(pe.root.visible=!0);let bi=at.get(de),we=Rn?.x??bi.x,He=Rn?.y??bi.z;C||=!!(pe.floorRadius&&(ge!==pe.root.visible||hn.x!==we||hn.z!==He)),pe.root.position.x=we,pe.root.position.y=dt.get(de)?.y??bi.rootY,pe.root.position.z=He,pe.animate?.(ke,pe.ambientMotion?ie:Zt,ii,Ht)}H.update(ot,Q,d,Ue),o.fog&&a.color.copy(o.background);let Se=Ht?O:lt;w!==Se&&(w?.setVisible(!1),Ht||O?.setTracks([],0),w=Se,w?.setVisible(!0)),w?.render(j,qt,!Ft&&(Ht||r.seatedPoses!==!1)),Ba(Ht)}function Hu(j,Q,ot={}){et||(ot.transientTelemetry?(!O&&j?.length&&(O=kf(Et,rt,ct),O.setVisible(!1)),O?.setTracks(j,Q,ot)):lt.setTracks(j,Q,ot))}function za(j){if(fe.preset==="waterfront")return null;let Q=at.get(j);if(!Q||Z<1||gt<1)return null;let{x:ot,z:Nt,baseY:kt,object:Ft}=Q;if(Ft){if(!Ft.root.visible)return null;k.set(Ft.anchorOffset?.x||0,Ft.anchorY||0,Ft.anchorOffset?.z||0),Ft.root.localToWorld(k)}else k.set(ot,kt+6,Nt);return k.project(c),{x:(k.x+1)/2,y:(1-k.y)/2}}function L(){if(et)return;et=!0,Pt(null),lt.dispose(),O?.dispose(),$t.dispose(),U.dispose(),b?.dispose(),W.dispose(),st.dispose(),bt.dispose();let j=new Set,Q=new Set,ot=new Set;o.traverse(Nt=>{Nt.geometry&&j.add(Nt.geometry);for(let kt of Array.isArray(Nt.material)?Nt.material:[Nt.material])if(kt){Q.add(kt);for(let Ft of Object.values(kt))Ft?.isTexture&&ot.add(Ft)}});for(let Nt of ot)Nt.dispose();for(let Nt of j)Nt.dispose();for(let Nt of Q)Nt.dispose();H.dispose(),p?.value?.dispose(),Ry(i)}return{resize:An,render:zu,anchor:za,setView:nr,getView:Ps,getDemoFocus:ir,projectToPlan:sr,pickGarage:Oa,exteriorClearance:()=>jT(e,c,Z,gt),dispose:L,hasAmbientMotion:!0,setPeople:Hu,setDisplaySettings:Ou,setGraphicsSettings:Is,setVacuumMapOverlay:Pt,setDetectionZones:$t.setZones,setHeatMap:U.setHistory,get trackedControlChanged(){return C},get hasPendingReacquisition(){return[...tt.values()].some(j=>j.liveMotion?.pendingReacquisition)},canPlacePerson:(j,Q)=>Number.isFinite(rt(j,Q)),personFloorAt:rt,nearestPersonPoint:(j,Q,ot=128)=>Q0(j,Q,ot,(Nt,kt)=>Number.isFinite(rt(Nt,kt))&&$.clearance(Nt,kt)>=lu&&ct.allowsBodyPoint(Nt,kt,lu)),get hasPeopleMotion(){return w?.hasMotion??!1}}}var UI=1200*1e3,kI=new Map([["s",1/60],["min",1],["h",60]]);var t3="roomcraft.traffic-vehicle-style.v1";function Cy(n){try{let t=n.localStorage.getItem(t3);return wu.some(({id:e})=>e===t)?t:""}catch{return""}}(n=>{"use strict";let t=new Set(["hs","xy","rgb","rgbw","rgbww"]),e=new Set(["brightness","color_temp","white",...t]),i=r=>typeof r=="number"&&Number.isFinite(r);function s(r={}){r??={};let o=Array.isArray(r.supported_color_modes)?r.supported_color_modes:[],a=o.some(v=>e.has(v))||i(r.brightness),c=o.some(v=>t.has(v)),l=o.includes("white")&&c,u=Number.isInteger(r.supported_features)?r.supported_features:0,f=!!(u&32),h=!!(u&8),d=!!(u&4),p=Array.isArray(r.effect_list)?[...new Set(r.effect_list.filter(v=>typeof v=="string"&&v.trim()))]:[],y=r.min_color_temp_kelvin,m=r.max_color_temp_kelvin,g=o.includes("color_temp")?i(y)&&i(m)&&y>0&&m>y?{min:Math.round(y),max:Math.round(m)}:{min:2e3,max:6535}:null,x=["On/off"];return a&&x.push("Brightness"),g&&x.push("White temperature"),c&&x.push("Color"),l&&x.push("White mode"),(d||p.length)&&x.push("Effects"),f&&x.push("Fade duration"),h&&x.push("Flash"),{brightness:a,temperature:g,color:c,white:l,effects:p,transition:f,flash:h,labels:x}}n.RoomcraftLightCapabilities=Object.freeze({describe:s})})(typeof window>"u"?globalThis:window);var qI=1200*1e3,YI=new Map([["m/s",1],["km/h",1/3.6],["mph",.44704],["kn",.514444],["ft/s",.3048]]);function Iy(n,t,e){let i=[],s=[[0,0],[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1]],r=[...n].sort((a,c)=>(a.priority??0)-(c.priority??0)),o=(a,c,l)=>Math.min(Math.max(a,c),l);for(let a of r){let c=Math.min(a.w,t),l=Math.min(a.h,e),u=a.keepClear??[],f=u.length>0,h=f?5:3,d,p,y=1/0;for(let g=0;g<=h&&(f||!d);g++)for(let[x,v]of g===0?s.slice(0,1):s.slice(1)){let _=o(a.x+x*g*34,c/2,t-c/2),b=o(a.y+v*g*34,l/2,e-l/2);if(i.some(S=>Math.abs(_-S.x)<(c+S.w)/2+2&&Math.abs(b-S.y)<(l+S.h)/2+2))continue;if(g<=3&&!d&&(d={...a,x:_,y:b,w:c,h:l}),!f)break;if(u.some(S=>_+c/2>S.left&&_-c/2<S.right&&b+l/2>S.top&&b-l/2<S.bottom))continue;let T=Math.hypot(_-a.x,b-a.y);T<y&&(p={...a,x:_,y:b,w:c,h:l},y=T)}let m=p??d;m&&i.push(m)}return i}var Dy=po($r(),1),Py="roomcraft-presence-v1",ts=4500,yd=/^sensor\.[a-z0-9_]+$/,Fy=/^binary_sensor\.[a-z0-9_]+$/,e3=4,md=1536,gd=1024,n3=[[[0,0],[md,0],[md,gd],[0,gd],[0,0]]],Ly=[[0,0,0],[25,-135,100],[50,-170,140],[100,-210,210],[150,-240,270],[200,-260,290],[250,-290,310],[300,-320,340],[350,-320,360],[400,-300,340],[450,-290,310],[500,-250,280],[550,-190,200],[580,-100,120],[600,0,0]],i3=new Map([["inovelli-vzm32-sn",{rangeMeters:6,ring:[...Ly.map(([n,t])=>[t,n]),...Ly.slice(1,-1).reverse().map(([n,,t])=>[t,n])]}]]);function xd(n,t){return n>=0&&n<=md&&t>=0&&t<=gd}function ka([n,t,e,i,s,r],o,a){return{x:n*o+t*a+e,y:i*o+s*a+r}}function ku(n){return Array.isArray(n)&&n.length===6&&n.every(t=>Number.isFinite(t)&&Math.abs(t)<=1e4)&&Math.abs(n[0]*n[4]-n[1]*n[3])>1e-5}function Uy(n){if(!Array.isArray(n)||n.length!==4||!n.every(r=>Number.isFinite(r)&&Math.abs(r)<=600))return null;let[t,e,i,s]=n;return t>=e||i>=s?null:[[t,i],[e,i],[e,s],[t,s]]}function ky(n){let t=[],e=0;for(let i of n){let s=i.presenceTrackTransform;if(i.type!=="presenceSwitch"||!ku(s))continue;let[,r,o,,a,c]=s,l=i3.get(i.presenceTrackProfile),u=Math.hypot(r,a),f=xd(o,c)?{origin:{x:o,y:c},forward:{x:r/u,y:a/u}}:{},h=t.length;for(let[d,p]of[["configured",Uy(i.presenceTrackZone)],["nominal",l?.ring]]){if(!p)continue;let y=p.map(([m,g])=>{let x=ka(s,m,g);return[x.x,x.y]});for(let[m]of Dy.default.intersection([y],n3))t.push({id:i.id,kind:d,points:m.slice(0,-1).map(([g,x])=>({x:g,y:x})),...f,...d==="nominal"?{rangeMeters:l.rangeMeters}:{}})}if(t.length>h&&++e===12)break}return t}function Ny(n){let t=new Set,e=[];for(let i of Array.isArray(n)?n.slice(0,e3):[]){if(!Number.isInteger(i?.id)||i.id<-128||i.id>255||t.has(i.id)||![i.x,i.y].every(r=>Number.isFinite(r)&&Math.abs(r)<=800))continue;t.add(i.id);let s={id:i.id,x:i.x,y:i.y};Number.isFinite(i.z)&&Math.abs(i.z)<=800&&(s.z=i.z),Number.isFinite(i.speed)&&Math.abs(i.speed)<=32768&&(s.speed=i.speed),e.push(s)}return e}function Oy(n={},t=[]){let e={};for(let i of new Set(t)){let s=n[i];if(Fy.test(i)&&["on","off","unknown","unavailable"].includes(s?.state)){e[i]={state:s.state};continue}let r=s?.attributes;!yd.test(i)||r?.tracking_schema!==Py||(e[i]={state:s.state,attributes:{tracking_schema:Py,observed_at:Number.isFinite(r.observed_at)?r.observed_at:null,zones_observed_at:Number.isFinite(r.zones_observed_at)?r.zones_observed_at:null,zones:Array.isArray(r.zones)?r.zones.slice(0,4).map(o=>typeof o=="boolean"?o:null):[],tracks:Ny(r.tracks),...Number.isFinite(r.last_observed_at)?{last_observed_at:r.last_observed_at,last_tracks:Ny(r.last_tracks)}:{}}})}return e}function bd(n,t,e=Date.now()){let i=[],s=new Set;for(let r of n){let o=r.presenceTrackEntityId,a=r.presenceTrackTransform;if(r.type!=="presenceSwitch"||!yd.test(o||"")||s.has(o)||!ku(a))continue;s.add(o);let c=Oy(t,[o])[o];if(!c||["unknown","unavailable"].includes(c.state))continue;let{observed_at:l,tracks:u}=c.attributes;if(!(!Number.isFinite(l)||l>e+1e3||e-l>=ts))for(let f of u){let{x:h,y:d}=ka(a,f.x,f.y);xd(h,d)&&i.push({id:o+":"+f.id,x:h,y:d,expiresAt:l+ts})}}return i}var vd=n=>n?.type==="presenceSwitch"?yd.test(n.presenceTrackEntityId??"")?n.presenceTrackEntityId:Fy.test(n.presenceEntityId??"")?n.presenceEntityId:null:null;function pd(n,t){let e=n.presenceTrackTransform,i=[{x:n.x,y:n.y}];if(ku(e)){let s=Uy(n.presenceTrackZone),r=ka(e,0,100);if(i.unshift(r),s){let[o,,a]=s;i.unshift(ka(e,(o[0]+a[0])/2,(o[1]+a[1])/2))}}for(let s of i){if(!Number.isFinite(s.x)||!Number.isFinite(s.y))continue;let r=t(s.x,s.y,128);if(r)return r}return null}function By(){let n=new Map;return{read(t,e,i,{contains:s,nearest:r}){let o=new Map;for(let c of t){let l=vd(c);l&&!o.has(l)&&o.set(l,c)}for(let c of n.keys())o.has(c)||n.delete(c);let a=[];for(let[c,l]of o){let u=e[l.presenceEntityId]?.state,f=Oy(e,[l.presenceTrackEntityId])[l.presenceTrackEntityId],h=f?.attributes,d=h?.zones_observed_at,y=f?.state!=="unavailable"&&Number.isFinite(d)&&d<=i+1e3&&i-d<ts&&h.zones.some(R=>R===!0);if(u==="off"){n.delete(c);continue}let m=u==="on"||y,g=h?.observed_at,x=!["0","unknown","unavailable",void 0].includes(f?.state)&&Number.isFinite(g)&&g<=i+1e3&&i-g<ts&&h.tracks.length>0,v=u==="on"?void 0:Math.max(y?d+ts:0,x?g+ts:0);if(!m&&f?.state==="0"){n.delete(c);continue}let _=l.presenceTrackTransform,b=JSON.stringify([l.presenceEntityId,_]),M=n.get(c);M?.key!==b&&(n.delete(c),M=void 0);let T=bd([l],e,i).filter(R=>s(R.x,R.y)),S=T[0];if(!S&&m&&f?.state!=="unavailable"&&ku(_)){let R=h?.last_observed_at??h?.observed_at,P=h?.last_tracks??h?.tracks??[];if(Number.isFinite(R)&&R<=i+1e3&&(!M||R>M.observedAt))for(let I of P){let F=ka(_,I.x,I.y);if(!(!xd(F.x,F.y)||!s(F.x,F.y))){S={id:c+":"+I.id,...F,expiresAt:R+ts};break}}}if(S&&(!M||S.expiresAt-ts>=M.observedAt)&&(M={key:b,observedAt:S.expiresAt-ts,point:S},n.set(c,M)),T.length)for(let R of T)a.push({...R,keepVisible:!0,fallback:r(R.x,R.y,52)??pd(l,r)});else if(m||x&&M){let R=M?.point;if(R&&s(R.x,R.y))a.push({id:R.id,x:R.x,y:R.y,quality:"last-known",keepVisible:!0,expiresAt:v,fallback:r(R.x,R.y,52)??pd(l,r)});else{let P=pd(l,r);P&&a.push({id:c+":area",...P,quality:"area",keepVisible:!0,expiresAt:v})}}}return a},clear(){n.clear()}}}var _d=new Map([["sunny",["Sunny","clear","cirrus"]],["clear-night",["Clear night","clear","cirrus"]],["partlycloudy",["Partly cloudy","partial","cumulus"]],["cloudy",["Cloudy","clouds","stratus"]],["rainy",["Rain","rain","nimbostratus"]],["pouring",["Heavy rain","rain","nimbostratus"]],["lightning",["Thunderstorms","thunder","cumulonimbus"]],["lightning-rainy",["Thunderstorms","storm","cumulonimbus"]],["snowy",["Snow","snow","stratus"]],["snowy-rainy",["Sleet","sleet","nimbostratus"]],["hail",["Hail","sleet","cumulonimbus"]],["fog",["Fog","fog","fog"]],["windy",["Windy","wind","cirrus"]],["windy-variant",["Windy and cloudy","wind-clouds","altocumulus"]],["exceptional",["Unusual weather","unknown","none"]]]),Hy=new Set(["new_moon","waxing_crescent","first_quarter","waxing_gibbous","full_moon","waning_gibbous","last_quarter","waning_crescent"]),Gy=Object.freeze([..._d].map(([n,[t]])=>Object.freeze({id:n,label:n==="lightning-rainy"?"Thunderstorms with rain":t}))),Vy=Object.freeze([...Hy]),zy=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];function Wy(n={},t=!1){let{condition:e,daylightKnown:i,night:s,moonPhase:r,temperature:o,unit:a,sunElevation:c,sunRising:l,sunAzimuth:u,moonAzimuth:f,moonElevation:h,windSpeed:d,windBearing:p,cloudCoverage:y}=n;if(t)return{label:"Weather offline",sky:"unknown",effect:"unknown",cloud:"none",moon:"",reading:"",windReading:""};let[m,g,x]=_d.get(e)||["Weather unavailable","unknown","none"],v=i?s:e==="clear-night",_=i?!s:e==="sunny",b=Number.isFinite(d)&&d>=0?d:void 0,M=Number.isFinite(p)?(p%360+360)%360:void 0,T=M===void 0?"":zy[Math.round(M/22.5)%zy.length],S=b===void 0?"":b===0?"Calm wind":`Wind ${T?`from ${T} at `:""}${Math.round(b*10)/10} m/s`;return{label:m,sky:v?"night":_?"day":"unknown",effect:g,cloud:x,moon:v&&Hy.has(r)?r:"",reading:_d.has(e)&&Number.isFinite(o)?`${Math.round(o)}${a||"\xB0"}`:"",windSpeed:b,windBearing:M,windReading:S,cloudCoverage:Number.isFinite(y)&&y>=0&&y<=100?y:void 0,sunElevation:c,sunRising:l,sunAzimuth:u,moonAzimuth:f,moonElevation:h}}var s3=[["dipper",[[7,9],[27,15],[46,22],[63,28],[93,23],[89,42],[65,43]],"M7 9L27 15 46 22 63 28 93 23 89 42 65 43 63 28"],["cassiopeia",[[8,35],[28,17],[47,31],[67,10],[91,24]],"M8 35L28 17 47 31 67 10 91 24"],["orion",[[30,6],[68,8],[44,25],[50,28],[56,31],[29,46],[67,47]],"M30 6L44 25 50 28 56 31 68 8M44 25L29 46M56 31L67 47"]],r3=s3.map(([n,t,e])=>`
  <svg class="coastal-constellation coastal-${n}" viewBox="0 0 100 52" focusable="false">
    <path d="${e}"/>
    ${t.map(([i,s],r)=>`<circle cx="${i}" cy="${s}" r="${r%3===0?2.15:1.55}"/>`).join("")}
  </svg>`).join(""),o3=["#c2d7ed","#e4edff","#fff0d2"];function Xy(n,t){let e=t?11939:30391,i=()=>(e=e*48271%2147483647)/2147483647;return Array.from({length:n},(s,r)=>{let o=1+(r+i())*98/n,a=5+i()*79,c=t?.85+r%3*.18:.48+r%4*.12;return`radial-gradient(circle at ${o.toFixed(1)}% ${a.toFixed(1)}%,${o3[r%3]} 0 ${c.toFixed(2)}px,transparent ${(c+.6).toFixed(2)}px)`}).join(",")}var Zy=`
  <div class="coastal-sky" data-sky="unknown" data-effect="unknown" data-cloud="none" data-moon="" aria-hidden="true">
    <span class="coastal-twilight"></span>
    <div class="coastal-stars">
      <span class="coastal-star-field"></span>
      <span class="coastal-star-sparkle"></span>
      ${r3}
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
  </div>`,uo=(n,t,e)=>Math.max(t,Math.min(e,n)),qy=n=>Number.isFinite(n)&&Math.abs(n)<=90,Md=n=>Number.isFinite(n)&&n>=0&&n<=360,Sd=75,Yy=n=>76-58*uo(n/Sd,0,1),jy=n=>50+38*n,a3=n=>jy(Math.sin(n*Math.PI/180)),c3=new Map([["waxing_crescent",[1,.48]],["first_quarter",[1,0]],["waxing_gibbous",[1,-.48]],["waning_crescent",[-1,.48]],["last_quarter",[-1,0]],["waning_gibbous",[-1,-.48]]]);function l3(n,t){let e=[];for(let[i,s,r]of[[1,0,1],[t,16,-1]])for(let o=0;o<=16;o++){let a=(s+o*r)*Math.PI/16,c=50+n*50*Math.sin(a)*i,l=50-50*Math.cos(a);e.push(`${c.toFixed(2)}% ${l.toFixed(2)}%`)}return`polygon(${e.join(",")})`}var u3=new Map([...c3].map(([n,t])=>[n,l3(...t)])),h3=new Map([["clear",1],["wind",.9],["partial",.66],["wind-clouds",.43]]);function f3(n,t,e,i,s,r,o){let c=(n==="night"&&!t?h3.get(e)??0:0)*uo(1-(i??0)/80,0,1);if(o||c<.55||e!=="clear"&&e!=="wind")return{starOpacity:c,meteor:"off",meteorProgress:0,meteorOpacity:0};if(s===void 0&&r===void 0)return{starOpacity:c,meteor:"live",meteorProgress:0,meteorOpacity:0};let l=r===void 0?(s%58-12)/1.4:(r-.36)/.29,u=uo(l,0,1),f=Math.min(1,u*5,(1-u)*2)*.9;return{starOpacity:c,meteor:"sample",meteorProgress:u,meteorOpacity:f}}function d3(n={},t=!1){let e=Wy(n,t),{sky:i,effect:s,cloud:r,moon:o,sunElevation:a,sunAzimuth:c,moonElevation:l,moonAzimuth:u,windSpeed:f,windBearing:h,cloudCoverage:d}=e,p=Zi(t?{}:n),{phase:y}=p,{skyTimeSeconds:m,skyProgress:g,reduceMotion:x=!1}=t?{}:n,v=qy(a),_=y==="sunrise"||y==="sunset",b=Number.isFinite(m)&&!x?Math.max(0,m):void 0,M=Number.isFinite(g)&&!x?uo(g,0,1):void 0,T=M===void 0?void 0:Math.sin(M*Math.PI)*Sd,S=M??(b===void 0?void 0:.5-.5*Math.cos(b*Math.PI/480)),R=v?p.elevation:T??p.elevation,P=Md(c)||M===void 0?jy(p.east):83-66*M,I=Md(u)?a3(u):S===void 0?55:18+64*S,F=S===void 0?38:Math.sin(S*Math.PI)*Sd,H=Yy(qy(l)?l:F),B=!t&&!x&&!Md(u)&&M===void 0&&b===void 0?"ambient":"fixed",Y=h===void 0?void 0:h*Math.PI/180,G=Y===void 0?9:-Math.sin(Y)*12,V=Y===void 0?-2:Math.cos(Y)*4,ft=f===void 0?s==="wind"||s==="wind-clouds"?2.5:1:f===0?0:uo(f*.25,.32,4.8),J=d===void 0?1:uo(d/52,0,1);return{sky:i,effect:s,cloud:r,moon:o,light:_?"twilight":"regular",clock:b,reduceMotion:x,moonMotion:B,sunX:P,sunY:Yy(R),moonX:I,moonY:H,solarPhase:i==="unknown"?"unknown":y,solarDaylight:p.daylight,solarDisc:p.disc,solarCloud:p.cloud,twilightGlow:p.twilight*(1-.42*p.cloud),horizonHaze:p.twilight*(.34+.2*p.cloud),moonOutline:u3.get(o)||"circle(50%)",windX:G,windY:V,cloudSpeed:ft,cloudOpacity:J,...f3(i,_,s,d,b,M,x)}}function Ky(n,t,e=!1){let i=d3(t,e),{sky:s,effect:r,cloud:o,moon:a,light:c,moonMotion:l,clock:u,reduceMotion:f,cloudSpeed:h,cloudOpacity:d,solarPhase:p,solarDaylight:y,solarDisc:m,solarCloud:g,twilightGlow:x,horizonHaze:v,starOpacity:_,meteor:b,meteorProgress:M,meteorOpacity:T}=i,S={sky:s,effect:r,cloud:o,moon:a,light:c,moonMotion:l,skyClock:u===void 0?"live":"sample",windCalm:String(h===0),skyReduced:String(f),solarPhase:p,stars:_>0?"visible":"hidden",meteor:b};for(let[P,I]of Object.entries(S))n.dataset[P]!==I&&(n.dataset[P]=I);let R={"--coastal-sun-x":`${i.sunX.toFixed(2)}%`,"--coastal-sun-y":`${i.sunY.toFixed(2)}%`,"--coastal-solar-x":`${i.sunX.toFixed(2)}%`,"--coastal-daylight":`${(y*100).toFixed(2)}%`,"--coastal-solar-disc":m.toFixed(3),"--coastal-solar-cloud":g.toFixed(3),"--coastal-twilight-glow":x.toFixed(3),"--coastal-twilight-color":`${(x*100).toFixed(2)}%`,"--coastal-horizon-haze":v.toFixed(3),"--coastal-moon-x":`${i.moonX.toFixed(2)}%`,"--coastal-moon-y":`${i.moonY.toFixed(2)}%`,"--coastal-moon-outline":i.moonOutline,"--coastal-wind-x":`${i.windX.toFixed(3)}vw`,"--coastal-wind-y":`${i.windY.toFixed(3)}px`,"--coastal-wind-speed":String(h||1),"--coastal-cloud-cover":String(d),"--coastal-clock":`${(u??0).toFixed(3)}s`,"--coastal-star-opacity":_.toFixed(3),"--coastal-meteor-progress":M.toFixed(3),"--coastal-meteor-opacity":T.toFixed(3)};for(let[P,I]of Object.entries(R))n.style.getPropertyValue(P)!==I&&n.style.setProperty(P,I)}var $y=`{
  0% {translate:calc(-1 * var(--coastal-wind-x,9vw)) calc(-1 * var(--coastal-wind-y,-2px));opacity:0}
  21%,79% {opacity:calc(var(--cloud-alpha) * var(--coastal-cloud-cover,1))}
  100% {translate:var(--coastal-wind-x,9vw) var(--coastal-wind-y,-2px);opacity:0}
}`,Jy=`
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
    background:${Xy(39,!1)},
      radial-gradient(ellipse 31% 97% at 34% 0%,#b0c3f522,transparent 100%);
  }
  .coastal-star-sparkle {
    opacity:.85;
    background:${Xy(13,!0)};
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
  @keyframes coastal-drift ${$y}
  @keyframes coastal-sampled-drift ${$y}
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
`;var p3=2500,wd=Object.freeze({condition:"sunny",daylightKnown:!0,night:!1,sunElevation:40,sunAzimuth:160,traffic:Object.freeze({severity:"ambient"})}),Qy={dawn:[-6,92,!0,"overnight"],sunrise:[2,99,!0,"morning"],morning:[19,114,!0,"morning"],day:[40,160,!0,"day"],sunset:[2,253,!1,"day"],dusk:[-6,265,!1,"evening"],night:[-16,290,!1,"evening"],overnight:[-30,290,!1,"overnight"]},m3=n=>n.replaceAll("_"," ").replace(/^./,t=>t.toUpperCase());function g3({condition:n,daylight:t,moonPhase:e,windSpeed:i,windBearing:s}){let r=n==="clear-night"&&(t==="morning"||t==="day")?"night":t,[o,a,c,l]=Qy[r]??Qy.day,u=o<-.83;return{...wd,condition:n,night:u,sunElevation:o,sunAzimuth:a,moonPhase:e,windSpeed:i,windBearing:s,sunRising:c,beachActivity:l}}function tx(n,t,{api:e,viewport:i,bridge:s,onChange:r}){let o=n.getElementById("sceneSettingsDialog"),a=n.getElementById("sceneSettingsButton"),c=n.getElementById("sceneFeatures"),l=n.getElementById("sceneDockAlignment"),u=n.getElementById("scenePreviewMode"),f=n.getElementById("scenePreviewMotion"),h=n.getElementById("scenePreviewSource"),d=n.getElementById("scenePreviewWeather"),p=n.createElement("style");p.textContent=Jy,n.head.append(p);let y=n.createElement("template");y.innerHTML=Zy.trim();let m=y.content.firstElementChild;m.hidden=!0,i.before(m);try{f.checked=t.localStorage.getItem("roomcraft.reduce-motion.v1")!=="true"}catch{}let g=Dm.map(({key:vt,label:xt})=>{let yt=n.createElement("label");yt.className="scene-feature";let $=n.createElement("input");return $.type="checkbox",$.addEventListener("change",()=>e.setSceneSetting(vt,$.checked)),yt.append($,xt),c.append(yt),{key:vt,input:$}});function x(vt,xt){let yt=n.createElement("label");return yt.textContent=vt,yt.append(xt),d.append(yt),xt.addEventListener("change",r),xt}function v(vt,xt,yt){let $=n.createElement("select");return $.replaceChildren(...xt.map(([rt,Et])=>new t.Option(Et,rt))),$.value=yt,x(vt,$)}function _(vt,xt,yt,$,rt){let Et=n.createElement("input");return Object.assign(Et,{type:"number",min:xt,max:yt,step:$,value:rt}),x(vt,Et)}let b=v("Weather",Gy.map(({id:vt,label:xt})=>[vt,xt]),"sunny"),M=v("Time of day",[["dawn","Dawn"],["sunrise","Sunrise"],["morning","Morning"],["day","Day"],["sunset","Sunset"],["dusk","Dusk"],["night","Evening"],["overnight","Overnight"]],"day"),T=v("Moon phase",Vy.map(vt=>[vt,m3(vt)]),"full_moon"),S=_("Wind speed (m/s)",0,30,1,4),R=_("Wind from (degrees)",0,360,1,270),P,I,F=!1,H=!1,B=!1,Y,G=!1,V=()=>{o.open||o.showModal()},ft=()=>e.setSceneSetting("dockAlignment",l.value),J=()=>{d.hidden=u.value!=="custom",Mt(),r()};a.addEventListener("click",V),l.addEventListener("change",ft),u.addEventListener("change",J),f.addEventListener("change",r);function W(){return u.value!=="custom"}function st(){let vt=H?W()?G?"Live appearance from Home Assistant.":P||e.getPreview?.()?.environment?"Showing the last available dashboard appearance.":"Connect to Home Assistant to match the dashboard appearance.":"Preview changes stay in this Studio tab.":"Choose a 3D view to see the preview.";h.textContent!==vt&&(h.textContent=vt)}async function bt(){if(!H||!W()||!s||F||B)return;F=!0;let vt=!1;try{let xt=await s.request("LOOK_GET");if(B)return;if(vt=G!==!!xt?.environment,G=!!xt?.environment,G){let yt=JSON.stringify(xt);yt!==I&&(P=xt,I=yt,vt=!0)}}catch{vt=G,G=!1}finally{F=!1,!B&&H&&W()&&vt&&r()}}function Mt(){H&&W()&&s&&!n.hidden?Y===void 0&&(Y=t.setInterval(bt,p3),bt()):Y!==void 0&&(t.clearInterval(Y),Y=void 0)}return n.addEventListener("visibilitychange",Mt),{open:V,motionEnabled:()=>f.checked,sync(vt,xt,yt=!1){H=vt,Mt();for(let{key:Ut,input:It}of g)It.checked=pi(xt,Ut);l.value=Fm(xt),st();let $=P??e.getPreview?.(),rt=W()?$?.environment??wd:g3({condition:b.value,daylight:M.value,moonPhase:T.value,windSpeed:Math.min(30,Math.max(0,S.valueAsNumber||0)),windBearing:Math.min(360,Math.max(0,R.valueAsNumber||0))}),Et={...rt,traffic:{...rt.traffic??wd.traffic,vehicleStyle:Cy(t)}};return m.hidden=!H||!pi(xt,"sky"),m.hidden||Ky(m,{...Yl(Et,xt),reduceMotion:yt}),{states:$?.states??{},environment:Et}},dispose(){B=!0,H=!1,Mt(),n.removeEventListener("visibilitychange",Mt),a.removeEventListener("click",V),l.removeEventListener("change",ft),u.removeEventListener("change",J),f.removeEventListener("change",r),o.close();for(let{input:vt}of g)vt.parentElement.remove();d.replaceChildren(),m.remove(),p.remove()}}}var y3={radar:[32,12],plan:[20,8]};function Ed(n){return n.reduce((e,i)=>[e[0]+i.x,e[1]+i.y],[0,0]).map(e=>e/n.length)}function x3(n,[t,e]){let[i,s]=Ed(n),r=0,o=0,a=0;for(let{x:f,y:h}of n){let d=f-i,p=h-s;r+=d*d,o+=p*p,a+=d*p}let c=Math.hypot(r-o,2*a),l=Math.sqrt((r+o+c)/(2*n.length)),u=Math.sqrt(Math.max(0,(r+o-c)/(2*n.length)));return l>=t&&u>=e&&u>=l*.1}function sx([n,t,e,i,s,r],{radar:o,plan:a}){return Math.hypot(n*o.x+t*o.y+e-a.x,i*o.x+s*o.y+r-a.y)}function ex(n,t){let e=t?-1:1,[i,s]=Ed(n.map(({radar:m})=>m)),[r,o]=Ed(n.map(({plan:m})=>m)),a=0,c=0,l=0;for(let{radar:m,plan:g}of n){let x=e*(m.x-i),v=m.y-s,_=g.x-r,b=g.y-o;a+=_*x+b*v,c+=b*x-_*v,l+=x*x+v*v}let u=a/l,f=c/l,h=r-e*u*i+f*s,d=o-e*f*i-u*s,p=[e*u,-f,h,e*f,u,d],y=n.map(m=>sx(p,m));return{transform:p,errors:y,flipped:t,scale:Math.hypot(u,f),squared:y.reduce((m,g)=>m+g*g,0)}}function nx(n){let t=ex(n,!1),e=ex(n,!0);return e.squared<t.squared?e:t}function b3({radar:n,plan:t}={}){return[n?.x,n?.y,t?.x,t?.y].every(Number.isFinite)&&Math.abs(n.x)<=600&&Math.abs(n.y)<=600&&t.x>=0&&t.x<=1536&&t.y>=0&&t.y<=1024}function ix(n){return Object.entries(y3).every(([t,e])=>x3(n.map(i=>i[t]),e))}function rx(n){if(!Array.isArray(n)||n.length<3||n.length>12||!n.every(l=>l&&b3(l)))return{error:"Use 3\u201312 valid pairs of radar centimetres and plan coordinates."};if(!ix(n))return{error:"Choose survey points spread across the area, including one well off the line between the others."};let t=nx(n),e=t.scale*100;if(e<8||e>600)return{error:"The fitted scale is outside the supported range. Check the radar units and matched plan points."};let i;if(n.length>3){i=0;for(let[l,u]of n.entries()){let f=n.filter((d,p)=>l!==p);if(!ix(f))return{error:"Spread the survey points so that three or more still cover the area when any one point is removed."};let h=nx(f);if(h.scale*100<8||h.scale*100>600)return{error:"The fitted scale changes too much when a point is withheld. Check which radar report matches each point."};i=Math.max(i,sx(h.transform,u)/h.scale)}}let{transform:s,errors:r,flipped:o,scale:a,squared:c}=t;return{transform:s,pixelsPerMetre:e,flipped:o,origin:{x:s[2],y:s[5]},rmsCm:Math.sqrt(c/n.length)/a,maxErrorCm:Math.max(...r)/a,...i===void 0?{}:{validationCm:i}}}var v3=3,_3=11,M3=12,ox=/^sensor\.[a-z0-9_]+$/,ax=n=>n.slice().sort((t,e)=>t-e)[Math.floor(n.length/2)];async function S3(n,t,e=Date.now,i=()=>!0){let s=e(),r=[],o=new Set,a;for(let c=0;c<_3&&i();c++){if(c&&await t(700),!i())return{error:"Capture canceled."};let l=await n(),{observed_at:u,tracks:f}=l?.attributes??{};if(!Number.isFinite(u)||u<s-500||u>e()+1e3||o.has(u))continue;if(o.add(u),f?.length>1)return{error:"More than one radar target was detected. Clear the room and try again."};if(l.state!=="1"||f?.length!==1)continue;let{id:h,x:d,y:p}=f[0];if(![d,p].every(m=>Number.isFinite(m)&&Math.abs(m)<=800))continue;if(a!==void 0&&h!==a)return{error:"The radar switched targets. Stay still and try again."};if(a=h,r.push({x:d,y:p}),r.length<v3)continue;let y={x:ax(r.map(m=>m.x)),y:ax(r.map(m=>m.y))};return r.some(m=>Math.hypot(m.x-y.x,m.y-y.y)>40)?{error:"These readings moved too far apart. Hold still on the marked spot and try again."}:{point:y}}return{error:"Too few fresh position reports. Check the radar reporting state and try a spot closer to the switch."}}function Td(n,t,e){n.fillStyle="#e8eddf",n.fillRect(0,0,t.width,t.height);for(let i of e.rooms)n.beginPath(),i.points.forEach(({x:s,y:r},o)=>o?n.lineTo(s,r):n.moveTo(s,r)),n.closePath(),n.fillStyle=i.outdoor||i.surface==="patio"?"#d8dfca":"#f6e7cc",n.strokeStyle="#c9b496",n.lineWidth=4,n.fill(),n.stroke();for(let i of e.items)/sofa|sectional|diningTable|desk|counter|worktop|bed/i.test(i.type)&&(n.save(),n.translate(i.x,i.y),n.rotate(i.rotation*Math.PI/180),n.fillStyle="#c8b095",n.fillRect(-i.w/2,-i.h/2,i.w,i.h),n.restore());n.lineWidth=9,n.strokeStyle="#4f6159";for(let i of e.walls)n.beginPath(),n.moveTo(i.x1,i.y1),n.lineTo(i.x2,i.y2),n.stroke();n.textAlign="center",n.font="bold 25px sans-serif",n.fillStyle="#40473a";for(let i of e.rooms)i.label&&n.fillText(i.name,i.label.x,i.label.y,250)}function w3(n,t,e,i,s,r){let o=n.getContext("2d");if(!o||!t)return;Td(o,n,t);let a=(c,l,u)=>{c&&(o.beginPath(),o.arc(c.x,c.y,19,0,2*Math.PI),o.fillStyle=l,o.fill(),o.fillStyle="#fff",o.fillText(u,c.x,c.y+8))};a(e,"#714985","R"),s.forEach(({plan:c,radar:l},u)=>{if(r?.transform){let[f,h,d,p,y,m]=r.transform,g=f*l.x+h*l.y+d,x=p*l.x+y*l.y+m;o.strokeStyle="#ae5339",o.lineWidth=5,o.beginPath(),o.moveTo(c.x,c.y),o.lineTo(g,x),o.stroke(),o.beginPath(),o.arc(g,x,9,0,2*Math.PI),o.stroke()}a(c,"#376555",String(u+1))}),a(i,"#855f2f","+")}function cx(n,t,{api:e,bridge:i}){let s=n.getElementById("radarCalibrationDialog");if(!s)return null;let r=n.getElementById("radarCalibrationPlan"),o=I=>s.querySelector(`[data-survey="${I}"]`),a=o("x"),c=o("y"),l=o("distance"),u=o("status"),f=o("quality"),h=o("points"),d=o("capture"),p=o("undo"),y=o("apply"),m=I=>new Promise(F=>t.setTimeout(F,I)),g,x,v,_,b=[],M=0,T=!1;function S(){_=b.length>=3?rx(b):void 0,d.disabled=T||!v||!i?.request||!ox.test(x?.presenceTrackEntityId??"")||b.length>=M3,p.disabled=T||!b.length,y.disabled=T||!_?.transform;let I=b.map(({plan:H},B)=>{let Y=n.createElement("li");return Y.textContent=`Point ${B+1} \xB7 ${H.x}, ${H.y}`,Y});h.replaceChildren(...I);let F=_?.error??"";if(_?.transform){let{pixelsPerMetre:H,rmsCm:B,maxErrorCm:Y,validationCm:G,origin:V}=_;F=`${H.toFixed(1)} plan px/m \xB7 ${Math.round(B)} cm fit error \xB7 ${Math.round(Y)} cm worst point.`,Number.isFinite(G)?F+=` Independent check ${Math.round(G)} cm.`:F+=" Add a fourth point to check the result.";let ft=Math.hypot(V.x-x.x,V.y-x.y)*100/H;if(ft>40&&(F+=` Fitted sensor origin is ${Math.round(ft)} cm from its map marker.`),l.valueAsNumber>0){let[J,W]=b,st=Math.hypot(J.plan.x-W.plan.x,J.plan.y-W.plan.y)/l.valueAsNumber;F+=` Tape measure gives ${st.toFixed(1)} plan px/m between points 1 and 2.`}}f.textContent=F,w3(r,g,x,v,b,_)}function R(){let I=a.valueAsNumber,F=c.valueAsNumber;v=Number.isFinite(I)&&Number.isFinite(F)&&I>=0&&I<=r.width&&F>=0&&F<=r.height?{x:Math.round(I),y:Math.round(F)}:void 0,S()}function P(I){if(!I.target.closest?.("[data-radar-calibration]"))return;let F=e.getSelection();g=e.getProject(),x=F?.kind==="item"?g.items.find(H=>H.id===F.id&&H.type==="presenceSwitch"):null,x&&(M++,b=[],v=void 0,T=!1,a.value=c.value=l.value="",u.textContent=i?.request?ox.test(x.presenceTrackEntityId??"")?"Choose a location to begin.":"Link a radar targets entity first.":"Open Studio from Home Assistant to capture live radar points.",s.showModal(),S())}return n.addEventListener("click",P),r.addEventListener("click",I=>{if(T)return;let F=r.getBoundingClientRect();a.value=Math.round((I.clientX-F.left)*r.width/F.width),c.value=Math.round((I.clientY-F.top)*r.height/F.height),R()}),a.addEventListener("input",R),c.addEventListener("input",R),l.addEventListener("input",S),d.addEventListener("click",async()=>{if(d.disabled)return;T=!0;let I=M,F=x.presenceTrackEntityId,H=v;u.textContent="Waiting for three fresh reports. Hold still on the chosen point.",S();let B;try{B=await S3(async()=>(await i.request("TRACK_GET",[F]))?.[F],m,Date.now,()=>I===M&&s.open)}catch{B={error:"Home Assistant could not read the radar. Check the connection and retry."}}I!==M||!s.open||(T=!1,B.point&&(b.push({plan:H,radar:B.point}),a.value=c.value="",v=void 0),u.textContent=B.error??`Captured point ${b.length}. Choose another location.`,S())}),p.addEventListener("click",()=>{b.pop(),S()}),y.addEventListener("click",()=>{_?.transform&&(e.setRadarCalibration(x.id,x.presenceTrackEntityId,_.transform)?s.close():u.textContent="The radar source changed. Reopen calibration for the current sensor.")}),s.addEventListener("close",()=>{M++}),{dispose(){M++,n.removeEventListener("click",P),s.open&&s.close()}}}var ho=12,E3=Math.ceil(8*1024*1024/3)*4+32,lx=/^camera\.[a-z0-9_]+$/,T3=/^data:image\/(?:png|jpeg|webp);base64,[A-Za-z0-9+/]+={0,2}$/,ux=n=>Number.isInteger(n)?String(n):n.toFixed(1);function hx(n,t){let e=n.getBoundingClientRect();return{x:(t.clientX-e.left)*n.width/e.width,y:(t.clientY-e.top)*n.height/e.height}}function dx(n,t){let e=Math.min(n.width/t.naturalWidth,n.height/t.naturalHeight);return{x:(n.width-t.naturalWidth*e)/2,y:(n.height-t.naturalHeight*e)/2,scale:e}}function A3(n,t){return new Promise((e,i)=>{let s=new n.Image;s.onload=()=>e(s),s.onerror=i,s.src=t})}function Ad(n,t,e,i,s=17){n.beginPath(),n.arc(t.x,t.y,s,0,2*Math.PI),n.fillStyle=e,n.fill(),n.strokeStyle="#fffefa",n.lineWidth=3,n.stroke(),n.fillStyle="#fff",n.font=`bold ${s*1.22}px sans-serif`,n.textAlign="center",n.textBaseline="middle",n.fillText(i,t.x,t.y+1)}function R3(n,t,e,i){let s=n.getContext("2d");if(!s||(n.toggleAttribute("data-empty",!t),s.fillStyle="#e8eddf",s.fillRect(0,0,n.width,n.height),!t))return;let{image:r,mapToPixel:o}=t,{x:a,y:c,scale:l}=dx(n,r);s.drawImage(r,a,c,r.naturalWidth*l,r.naturalHeight*l);function u(f,h,d){let p=ni(o,f);p.x>=0&&p.x<=r.naturalWidth&&p.y>=0&&p.y<=r.naturalHeight&&Ad(s,{x:a+p.x*l,y:c+p.y*l},h,d,13)}e.forEach(({map:f},h)=>u(f,"#315d55",String(h+1))),i&&u(i,"#8a622e","+")}function C3(n,t,e,i,s,r,o,a){let c=n.getContext("2d");if(!c)return;c.save(),Td(c,n,t);let l=e&&o?Y0(r,e.pixelToMap):void 0;if(l){let[u,f,h,d,p,y]=l;c.save(),c.globalAlpha=.43,c.transform(u,d,f,p,h,y),c.drawImage(e.image,0,0),c.restore()}i.forEach(({map:u,plan:f},h)=>{if(o&&r){let d=ni(r,u);c.strokeStyle="#a14936",c.lineWidth=5,c.beginPath(),c.moveTo(f.x,f.y),c.lineTo(d.x,d.y),c.stroke(),c.beginPath(),c.arc(d.x,d.y,10,0,2*Math.PI),c.stroke()}Ad(c,f,"#315d55",String(h+1))}),a&&(c.save(),c.beginPath(),c.arc(a.x,a.y,27,0,2*Math.PI),c.strokeStyle="#286c58",c.lineWidth=5,c.setLineDash([8,6]),c.stroke(),c.restore()),s&&Ad(c,s,"#8a622e","+"),c.restore()}function fx(n){if(n.length<3)return!1;let[t,...e]=n,i=e.map(r=>({x:r.x-t.x,y:r.y-t.y})),s=Math.max(...i.map(({x:r,y:o})=>r*r+o*o));return s>0&&i.some((r,o)=>i.slice(o+1).some(a=>Math.abs(r.x*a.y-r.y*a.x)>s*.03))}function px(n,t,{api:e,bridge:i}){let s=n.getElementById("vacuumAlignmentDialog");if(!s)return null;let r=yt=>s.querySelector(`[data-vacuum-survey="${yt}"]`),o=r("map"),a=r("plan"),c=r("map-x"),l=r("map-y"),u=r("plan-x"),f=r("plan-y"),h=r("units"),d=r("distance"),p=r("overlay"),y=r("load"),m=r("add"),g=r("undo-point"),x=r("undo-alignment"),v=r("apply"),_=r("points"),b=r("status"),M=r("step"),T=r("count"),S=r("advanced"),R=r("quality"),P,I,F,H,B,Y,G,V=[],ft=0,J=!1,W=!1;function st(yt,$,rt=!1){let Et=yt.valueAsNumber,Ut=$.valueAsNumber;if([Et,Ut].every(Number.isFinite)&&!(rt&&(Et<0||Ut<0||Et>a.width||Ut>a.height)))return{x:Et,y:Ut}}function bt(){let yt=st(c,l),$=st(u,f,!0),rt=h.valueAsNumber>0?h.valueAsNumber:null,Et=fx(V.map(tt=>tt.map))&&fx(V.map(tt=>tt.plan));H=$0(V,{mapUnitsPerMetre:rt}),!W&&Et&&H&&(W=!0,p.checked=!0),y.hidden=J||!!F||!i?.request||!lx.test(I?.vacuumMapEntityId??""),y.disabled=y.hidden,m.disabled=J||!yt||!$||V.length>=ho;let Ut=!!(yt||$);g.disabled=J||!V.length&&!Ut,g.textContent=Ut?"Clear selected point":"Undo last pair",x.disabled=J||!B;let It=H?.transform.join(",");v.disabled=J||!Et||!H||It===Y;let Pt=V.map(tt=>{let St=n.createElement("li"),Tt=({x:Rt,y:Lt})=>`${ux(Rt)}, ${ux(Lt)}`;return St.textContent=`LiDAR ${Tt(tt.map)} \u2192 plan ${Tt(tt.plan)}`,St});_.replaceChildren(...Pt),T.textContent=`${V.length} matched ${V.length===1?"corner":"corners"}`;let $t=I.vacuumMapId===void 0||I.vacuumMapId===F?.mapId?I.vacuumPositionTransform:void 0,U=Et?H:void 0,it=yt&&F&&ni(U?.transform??(F.mapId!==void 0&&I.vacuumMapId===F.mapId?$t:void 0),yt),K=it&&it.x>=0&&it.y>=0&&it.x<=a.width&&it.y<=a.height?it:void 0;M.textContent=J?"Loading the LiDAR scan\u2026":F?yt?K?"Choose the matching corner on the plan. The dashed circle marks the current estimate.":"Choose the same corner on the plan.":V.length>=ho?"Review the overlay and use this alignment.":V.length===3&&U?"Choose a fourth corner to check scale in both directions.":V.length>=4&&U?"Check the overlay or pick another corner on the scan.":"Choose a corner on the LiDAR scan.":"Use Advanced to enter matching coordinates.",o.parentElement.toggleAttribute("data-active",!!(F&&!yt&&V.length<ho)),a.parentElement.toggleAttribute("data-active",!!(F&&yt&&V.length<ho));let at=[];if(H){let tt=Z0(V[0],V[1],H.transform,rt);if(Number.isFinite(tt?.mapMetres)){let St=U&&Number.isFinite(tt.planMetres)?` and ${tt.planMetres.toFixed(2)} m on the aligned plan`:"";if(at.push(`Corners 1\u20132 measure ${tt.mapMetres.toFixed(2)} m on LiDAR${St}.`),d.valueAsNumber>0){let Tt=Math.abs(tt.mapMetres-d.valueAsNumber);at.push(`The tape reading differs by ${Math.round(Tt*100)} cm.`)}}if(U){let St=rt&&H.scale*rt,Tt=Rt=>St?`${Math.round(Rt/St*100)} cm`:`${Rt.toFixed(1)} plan pixels`;Number.isFinite(H.leaveOneOutError)?at.push(`The independent corner check differs by up to ${Tt(H.leaveOneOutError)}.`):at.push(`The matched corners differ by ${Tt(H.rmse)} on average.`),H.scaleRange&&at.push("The fit adjusts scale separately along each direction.")}}(!Et||!H)&&at.push("Match at least three corners spread in two directions."),R.textContent=at.join(" "),R3(o,F,V,yt),C3(a,P,F,V,$,U?.transform??$t,p.checked,K)}async function Mt(){if(y.disabled)return;let yt=ft;J=!0,b.textContent="Reading the selected map from Home Assistant\u2026",bt();try{let $=await i.request("VACUUM_MAP_GET",{entityId:I.vacuumMapEntityId}),{imageDataUrl:rt,pixelToMap:Et,mapUnitsPerMetre:Ut,mapId:It}=$??{},Pt=zf(Et);if(typeof rt!="string"||rt.length>E3||!T3.test(rt)||!Pt)throw new Error("Invalid map");let $t=await A3(t,rt);if(yt!==ft||!s.open)return;F={image:$t,pixelToMap:Et,mapToPixel:Pt,mapId:Number.isSafeInteger(It)&&It>0?It:void 0},Number.isFinite(Ut)&&Ut>0&&(h.value=String(Ut),h.readOnly=!0),b.textContent="LiDAR scan loaded."}catch{if(yt!==ft||!s.open)return;b.textContent="The camera did not return a calibrated scan. Retry or enter coordinates in Advanced.",S.open=!0}J=!1,bt()}function vt(yt){let $=yt.target.closest?.("[data-vacuum-alignment]");if(!$||s.open)return;let rt=e.getSelection();if(P=e.getProject(),I=rt?.kind==="item"&&P.items.find(Ut=>Ut.id===rt.id),!I)return;G=$,ft++,V=[],F=H=B=Y=void 0,J=!1,W=!1;for(let Ut of[c,l,u,f,h,d])Ut.value="";h.readOnly=!1,p.checked=!1;let Et=i?.request&&lx.test(I.vacuumMapEntityId??"");S.open=!Et,b.textContent=Et?"":i?.request?"Link a vacuum map camera in the Inspector to load the scan.":"Use Home Assistant Studio to load the linked scan.",s.showModal(),bt(),y.disabled||Mt()}n.addEventListener("click",vt),y.addEventListener("click",Mt);for(let yt of[c,l,u,f,h,d])yt.addEventListener("input",bt);p.addEventListener("change",bt),o.addEventListener("click",yt=>{if(J||!F)return;let $=hx(o,yt),{x:rt,y:Et,scale:Ut}=dx(o,F.image),It={x:($.x-rt)/Ut,y:($.y-Et)/Ut};if(It.x<0||It.y<0||It.x>F.image.naturalWidth||It.y>F.image.naturalHeight)return;let Pt=ni(F.pixelToMap,It);c.value=String(Math.round(Pt.x*10)/10),l.value=String(Math.round(Pt.y*10)/10),u.value=f.value="",b.textContent="",bt(),t.matchMedia?.("(max-width:560px)").matches&&a.scrollIntoView({block:"nearest"})}),a.addEventListener("click",yt=>{if(J||V.length>=ho)return;if(!st(c,l)){b.textContent="Choose the corner on the LiDAR scan first.";return}let $=hx(a,yt);u.value=String(Math.round($.x)),f.value=String(Math.round($.y)),xt()&&!W&&t.matchMedia?.("(max-width:560px)").matches&&o.scrollIntoView({block:"nearest"})});function xt(){let yt=st(c,l),$=st(u,f,!0);if(J||!yt||!$||V.length>=ho)return!1;if(V.some(rt=>Math.hypot(rt.map.x-yt.x,rt.map.y-yt.y)<1||Math.hypot(rt.plan.x-$.x,rt.plan.y-$.y)<1))return b.textContent="That corner is already matched. Choose a different corner.",bt(),!1;V.push({map:yt,plan:$});for(let rt of[c,l,u,f])rt.value="";return b.textContent="",bt(),!0}return m.addEventListener("click",xt),g.addEventListener("click",()=>{if(!g.disabled){if(st(c,l)||st(u,f,!0)){for(let yt of[c,l,u,f])yt.value="";b.textContent="Cleared the selected point."}else V.pop(),b.textContent="Removed the last matching pair.";bt()}}),v.addEventListener("click",()=>{if(v.disabled)return;let yt=e.setVacuumAlignment(I.id,I.entityId,I.vacuumMapEntityId??"",F?.mapId,H.transform);yt?(Y=H.transform.join(","),yt.changed&&(B=yt),b.textContent=yt.changed?"Alignment ready. Close this panel and choose Save to update the live dashboard.":"This alignment is already in the layout."):b.textContent="The vacuum binding changed or the alignment is out of range. Reopen this survey.",bt()}),x.addEventListener("click",()=>{x.disabled||(b.textContent=B.undo()?"Restored the previous draft alignment.":"The draft changed. Use the Studio history controls.",B=Y=void 0,bt())}),s.addEventListener("keydown",yt=>yt.stopPropagation()),s.addEventListener("close",()=>{ft++,F=P=I=B=H=void 0,V=[];for(let yt of[c,l,u,f,h,d])yt.value="";_.replaceChildren();for(let yt of[o,a])yt.getContext("2d")?.clearRect(0,0,yt.width,yt.height);G?.isConnected?G.focus():n.querySelector("[data-vacuum-alignment]")?.focus()}),{dispose(){ft++,n.removeEventListener("click",vt),s.open&&s.close()}}}var I3=22,P3=1e3/12,L3=1e3,N3=12;function D3(n,t,e){let i=Iy(n,t,e),s=new Set(i.map(r=>r.id));for(let r of n.filter(o=>!s.has(o.id))){let o=Math.min(r.w,t),a=Math.min(r.h,e),c=[];for(let u=o/2;u<=t-o/2;u+=o+4)for(let f=a/2;f<=e-a/2;f+=a+4)c.push({...r,x:u,y:f,w:o,h:a});c.sort((u,f)=>Math.hypot(u.x-r.x,u.y-r.y)-Math.hypot(f.x-r.x,f.y-r.y));let l=c.find(u=>i.every(f=>Math.abs(u.x-f.x)>=(u.w+f.w)/2+2||Math.abs(u.y-f.y)>=(u.h+f.h)/2+2));l&&i.push(l)}return i}function F3(n,t){if(!t)return!1;let e=(Number(n.rotation)||0)*Math.PI/180,i=t.x-n.x,s=t.y-n.y,r=i*Math.cos(e)+s*Math.sin(e),o=-i*Math.sin(e)+s*Math.cos(e);return Math.abs(r)<=n.w/2&&Math.abs(o)<=n.h/2}function U3(n,t,e,i,s,r){let o=n.flatMap((a,c)=>{let l=i.get(a.id);if(!l)return[];let u=Math.hypot(l.x*s-t.x,l.y*r-t.y),f=u<=I3;return!f&&(a.type==="garageDoor"||!F3(a,e))?[]:[{item:a,index:c,distance:u,near:f,area:a.w*a.h}]});return o.sort((a,c)=>Number(c.near)-Number(a.near)||(a.near?a.distance-c.distance:a.area-c.area)||c.index-a.index),o[0]?.item??null}function k3(n,t){let e=t.RoomcraftEditorViewport,i=n.getElementById("sceneCanvas"),s=n.getElementById("viewport");if(!e||!i||!s)return null;let r=t.matchMedia?.("(prefers-reduced-motion: reduce)"),o=t.location?.pathname?.startsWith("/local/roomcraft/")?t.RoomcraftDashboardBridge:null,a=cx(n,t,{api:e,bridge:o}),c=px(n,t,{api:e,bridge:o}),l=tx(n,t,{api:e,viewport:s,bridge:o,onChange:()=>tt()}),u=n.createElement("div");u.className="scene-placeholders",Object.assign(u.style,{position:"absolute",inset:"0",pointerEvents:"none",zIndex:"1"}),s.append(u);let f=n.createElementNS("http://www.w3.org/2000/svg","svg");f.classList.add("scene-placeholder-leaders"),f.setAttribute("aria-hidden","true"),Object.assign(f.style,{position:"absolute",inset:"0",width:"100%",height:"100%",pointerEvents:"none"}),s.insertBefore(f,u);let h=new Map,d,p,y,m=Ss("top"),g,x=!0,v,_,b,M,T=-1/0,S=0,R,P=!1,I=[],F=[],H="",B=0,Y,G=!1,V={},ft=By(),J={key:"",scene:null,reduceMotion:!1},W={id:null,scene:null},st=()=>x,bt=()=>r?.matches===!0||!l.motionEnabled(),Mt=()=>i.getBoundingClientRect(),vt=ct=>{let lt=Mt();return{x:ct.clientX-lt.left,y:ct.clientY-lt.top}};function xt(ct){e.showStatus?.(ct)}function yt(){if(!(!P&&(d?.hasAmbientMotion||d?.hasPeopleMotion)&&st()&&!n.hidden&&!bt())){t.cancelAnimationFrame(M),M=void 0;return}M===void 0&&(M=t.requestAnimationFrame(lt=>{if(M=void 0,lt-T>=P3-1){T=lt,S=lt/1e3;try{R&&d.render(S,...R)}catch{St()}}yt()}))}function $(ct=!0){let lt=st()?d:null,O=bt(),w=rt()?lt?ft.read(I,V,Date.now(),{contains:lt.canPlacePerson,nearest:lt.nearestPersonPoint}):bd(I,V):[],E=JSON.stringify(w);E===J.key&&lt===J.scene&&O===J.reduceMotion||(J={key:E,scene:lt,reduceMotion:O},lt&&(lt.setPeople(w,(t.performance?.now()??0)/1e3,{reduceMotion:O}),ct&&tt()),e.setPersonPreview?.(lt?[]:w))}function rt(){return!!(o?.request&&F.length&&!P&&!n.hidden)}async function Et(ct=!0){if(ct&&$(),G||!rt())return;G=!0;let lt=B;try{let O=await o.request("TRACK_GET",F);lt===B&&rt()&&(V=O&&typeof O=="object"?O:{},$())}catch{lt===B&&(V={},$())}finally{G=!1}}function Ut(){rt()?Y===void 0&&(Y=t.setInterval(Et,L3),Et(!1)):Y!==void 0&&(t.clearInterval(Y),Y=void 0,B++,V={})}function It(ct){I=ct.filter(vd).slice(0,N3);let lt=[...new Set(I.flatMap(w=>[w.presenceTrackEntityId,w.presenceEntityId]).filter(w=>/^(?:sensor|binary_sensor)\.[a-z0-9_]+$/.test(w??"")))],O=lt.join(",");O!==H&&(H=O,F=lt,B++,V={}),Ut()}function Pt(){let{width:ct,height:lt}=Mt();return d?.projectToPlan(ct/2,lt/2)}function $t(){d?.setView(m,g?{focus:{x:g.x,y:0,z:g.y}}:void 0)}function U(){m=Ss("top"),g=void 0,$t(),tt()}function it(ct,lt,O){if(!ct||!v)return;let{scale:w}=v;g={x:ct.x-lt/w,y:ct.y-O/w},$t(),tt()}function K(ct,lt,O){let w=d?.projectToPlan(lt,O);if(!w)return;let E=Ss({preset:"top",zoom:m.zoom*ct});if(E.zoom===m.zoom)return;m=E,$t();let C=d.projectToPlan(lt,O),D=Pt();C&&D&&(g={x:D.x+w.x-C.x,y:D.y+w.y-C.y}),$t(),tt()}function at(ct){let lt=d.projectToPlan(0,0),O=d.projectToPlan(ct,0);if(!lt||!O||O.x<=lt.x)return;let w={left:lt.x,top:lt.y,scale:ct/(O.x-lt.x),zoom:m.zoom};Object.entries(w).every(([E,C])=>v?.[E]===C)||(v=w,e.setOverheadView({...w,fit:U,pan:it,zoomAt:K,center:Pt}))}function tt(){if(yt(),!d||!st())return;let{width:ct,height:lt}=Mt();if(ct<1||lt<1)return;d.resize(ct,lt),at(ct);let O=e.getSelection(),w=O?.kind==="item"?O.id:null;if(W.scene!==d||W.id!==w){let ut=p.items.find(At=>At.id===w);d.setDetectionZones(ut?ky([ut]):[]),W={id:w,scene:d}}let E=bt(),C=l.sync(!0,p.sceneSettings,E),D=Object.create(null);for(let ut of p.items){let At=C.states[ut.id];At&&At.entityId===ut.entityId&&(D[ut.id]=At)}R=[D,{...C.environment,reduceMotion:E},{showTelemetryPosition:!1,draftPositions:_}],d.render(S,...R);let k=[];for(let[ut,At]of h){let N=d.anchor(ut);if(At.hidden=!N,N){let ht=p.items.find(_t=>_t.id===ut),nt=ht?.type==="cameraThumbnail"?M0(ht,ct):{w:96,h:44};k.push({id:ut,marker:At,x:N.x*ct,y:N.y*lt,...nt})}}let et=D3(k,ct,lt),Z=new Set(et.map(ut=>ut.id)),gt=[];for(let ut of et){let{marker:At,x:N,y:ht,w:nt,h:_t,id:Ct}=ut;Object.assign(At.style,{left:`${N}px`,top:`${ht}px`,width:`${nt}px`,height:`${_t}px`});let wt=k.find(Dt=>Dt.id===Ct);if(Math.hypot(wt.x-N,wt.y-ht)>8){let Dt=n.createElementNS("http://www.w3.org/2000/svg","line");for(let[zt,oe]of Object.entries({x1:wt.x,y1:wt.y,x2:N,y2:ht}))Dt.setAttribute(zt,oe);Dt.setAttribute("stroke","#6f816b"),Dt.setAttribute("stroke-width","1"),Dt.setAttribute("stroke-dasharray","3 3"),gt.push(Dt)}}for(let[ut,At]of h)At.hidden=!Z.has(ut);f.replaceChildren(...gt)}function St(){x=!1,d?.dispose(),d=void 0,v=void 0,yt(),i.hidden=!0,l.sync(!1,e.getProject().sceneSettings),u.style.display="none",f.style.display="none",s.classList.remove("scene-3d"),e.setOverheadView(null),$(!1),xt("3D view is unavailable. You can edit in the overhead plan.")}function Tt(){if(P)return;let ct=e.getProject();if(It(ct.items),!st()){l.sync(!1,ct.sceneSettings),$();return}let lt=JSON.stringify(ct);try{if(!d||lt!==y){d?.dispose(),d=void 0,p=ct,d=Ay(i,p),$t(),y=lt,h.clear(),u.replaceChildren();for(let O of p.items.filter(w=>w.type==="cameraThumbnail"||w.type.startsWith("ui"))){let w=n.createElement("button");w.type="button",w.className="scene-placeholder",w.textContent=O.name||(O.type==="cameraThumbnail"?"Camera":"Interface"),w.setAttribute("aria-label",`Select ${w.textContent}`),Object.assign(w.style,{position:"absolute",transform:"translate(-50%,-50%)",pointerEvents:"auto",minWidth:"44px",minHeight:"44px",padding:"3px 7px",boxSizing:"border-box",border:"1px dashed #6f816b",borderRadius:"8px",background:"#fff8e5e8",color:"#3a5243",font:"600 11px/1.2 system-ui,sans-serif",touchAction:"none"}),w.addEventListener("pointerdown",E=>Gt(E,O.id)),w.addEventListener("click",E=>{E.detail===0&&(e.selectItem(O.id),tt())}),h.set(O.id,w),u.append(w)}}$(!1),tt()}catch{St()}}let Rt=()=>{_=void 0,Tt()},Lt=ct=>{_=ct.detail,tt()},q=()=>{t.cancelAnimationFrame(b),b=t.requestAnimationFrame(()=>tt())},Gt=(ct,lt=null)=>{if(!st()||!d)return;let O=vt(ct),w=e.getTool(),E=e.hasPlacement()?d.projectToPlan(O.x,O.y,e.getPlacementType(),{preferTabletop:!0}):null,C=lt;if(!C&&!E&&(w==="select"||w==="erase")&&(C=d.pickGarage(O.x,O.y),!C)){let{width:D,height:k}=Mt(),et=new Map(p.items.map(Z=>[Z.id,d.anchor(Z.id)]));C=U3(p.items,O,d.projectToPlan(O.x,O.y),et,D,k)?.id}e.pointerDown(ct,{itemId:C,placementPoint:E,captureTarget:i})},Bt=ct=>{ct.preventDefault(),St()},z=()=>{$(!1),tt()},A=()=>{Ut(),$(),yt()};n.addEventListener("visibilitychange",A),r?.addEventListener("change",z),i.addEventListener("pointerdown",Gt),i.addEventListener("pointermove",e.pointerMove),i.addEventListener("pointerup",e.pointerUp),i.addEventListener("pointercancel",e.pointerCancel),i.addEventListener("lostpointercapture",e.pointerCancel),i.addEventListener("webglcontextlost",Bt),t.addEventListener("roomcraft-editor-change",Rt),t.addEventListener("roomcraft-editor-preview",Lt);let dt=new t.ResizeObserver(q);dt.observe(s),i.hidden=!1,s.classList.add("scene-3d"),Tt();try{(t.location.hash==="#scene-settings"||o&&t.parent.location.hash==="#scene-settings")&&l.open()}catch{}return{getView:()=>d?.getView()??{...m},dispose(){P=!0,x=!1,yt(),Ut(),n.removeEventListener("visibilitychange",A),r?.removeEventListener("change",z),dt.disconnect(),t.cancelAnimationFrame(b),d?.dispose(),d=void 0,u.remove(),f.remove(),l.dispose(),a?.dispose(),c?.dispose(),i.hidden=!0,s.classList.remove("scene-3d"),e.setOverheadView(null),i.removeEventListener("pointerdown",Gt),i.removeEventListener("pointermove",e.pointerMove),i.removeEventListener("pointerup",e.pointerUp),i.removeEventListener("pointercancel",e.pointerCancel),i.removeEventListener("lostpointercapture",e.pointerCancel),i.removeEventListener("webglcontextlost",Bt),t.removeEventListener("roomcraft-editor-change",Rt),t.removeEventListener("roomcraft-editor-preview",Lt)}}}typeof window<"u"&&typeof document<"u"&&(window.RoomcraftPlanStructure=fd,k3(document,window),window.dispatchEvent(new Event("roomcraft-asset-loaded")));})();
